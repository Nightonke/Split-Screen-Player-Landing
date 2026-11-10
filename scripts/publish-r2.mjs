// Run media:prepare first. This only publishes the generated public asset tree.
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(await readFile(new URL('../infrastructure/media-cdn/r2.json', import.meta.url)));
const staging = path.join(root, 'infrastructure/media-cdn/public');
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const files = [];
async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const file = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Symlink is not a publishable asset: ${file}`);
    if (entry.isDirectory()) await visit(file);
    else {
      const key = path.relative(staging, file).split(path.sep).join('/');
      if (!new RegExp(config.keyPattern).test(key)) throw new Error(`Unexpected public asset path: ${key}`);
      const bytes = await readFile(file);
      files.push({ key, file, bytes: bytes.length, sha256: sha256(bytes) });
    }
  }
}
await visit(staging);
if (!files.length) throw new Error('No staged assets. Run media:prepare first.');
if (config.immutable && new Set(files.map(file => file.key.split('/')[1])).size !== 1) {
  throw new Error('Stage exactly one current release; archive historical releases offline.');
}
console.log(`${config.bucket}: ${files.length} objects, ${files.reduce((sum, f) => sum + f.bytes, 0)} bytes`);
if (process.argv.includes('--dry-run')) process.exit(0);

// Wrangler keeps OAuth credentials in the OS credential store. Never log tokens.
const token = process.env.CLOUDFLARE_API_TOKEN || JSON.parse(execFileSync('npx',
  ['--yes', 'wrangler@4.159.0', 'auth', 'token', '--json'], {
    cwd: root, encoding: 'utf8', env: { ...process.env, CLOUDFLARE_AUTH_USE_KEYRING: 'true' },
    stdio: ['ignore', 'pipe', 'pipe'],
  })).token;
if (!token) throw new Error('Authenticate with Wrangler before publishing.');
const base = `https://api.cloudflare.com/client/v4/accounts/${config.accountId}/r2/buckets/${config.bucket}`;
const types = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp',
  '.mp4': 'video/mp4', '.json': 'application/json', '.svg': 'image/svg+xml', '.vtt': 'text/vtt', '.ico': 'image/x-icon' };
async function request(method, url, body, headers = {}) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const response = await fetch(url, { method, body, headers: { Authorization: `Bearer ${token}`, ...headers }, signal: AbortSignal.timeout(120000) });
      if (response.status === 429 || response.status >= 500) throw new Error(`Retryable HTTP ${response.status}`);
      if (!response.ok) throw Object.assign(new Error(`R2 ${method}: HTTP ${response.status}`), { permanent: true });
      return Buffer.from(await response.arrayBuffer());
    } catch (error) {
      if (error.permanent || attempt === 3) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * 2 ** attempt));
    }
  }
}
const pending = [...files], verified = [];
await Promise.all(Array.from({ length: 4 }, async () => {
  while (pending.length) {
    const file = pending.shift();
    const url = `${base}/objects/${file.key.split('/').map(encodeURIComponent).join('/')}`;
    if (!process.argv.includes('--verify-only')) {
      await request('PUT', url, await readFile(file.file), {
        'Content-Type': types[path.extname(file.key)] || 'application/octet-stream',
        'Cache-Control': config.immutable ? 'public, max-age=31536000, immutable' : 'public, max-age=86400',
        'cf-r2-data-catalog-check': 'true',
      });
    }
    const actual = await request('GET', url);
    if (actual.length !== file.bytes || sha256(actual) !== file.sha256) throw new Error(`R2 integrity mismatch: ${file.key}`);
    verified.push({ key: file.key, bytes: file.bytes, sha256: file.sha256 });
    if (verified.length % 50 === 0) console.log(`Verified ${verified.length}/${files.length}`);
  }
}));
await mkdir(path.join(root, '.deploy'), { recursive: true });
await writeFile(path.join(root, '.deploy/r2-verified.json'), JSON.stringify({ bucket: config.bucket, verifiedAt: new Date().toISOString(), files: verified }, null, 2) + '\n');
console.log(`Verified all ${verified.length} R2 objects. Publish pages only after the Tencent mirror passes the same checks.`);

import platformCopy from "./platformCopy.json";
import type { GuideImage, GuidePage } from './guides';
import type { Locale } from './locales';
import { locales } from './locales';
import { illustratedMultiVideoGuides } from './illustratedMultiVideoGuide';
import { androidMultiVideoGuide } from './androidMultiVideoGuide';
import menus from './appMenuLabels.json';
import translations from './multiVideoCopy.json';
import * as OpenCC from 'opencc-js';

type Platform = 'ios' | 'android';
const slugs = { ios: 'play-multiple-videos-iphone-ipad', android: 'play-multiple-videos-android' } as const;
const files = ['01-layout-choices', '02-open-videos', '06-playback-controls', '04-select-grid', '05-four-videos'];
const toTraditional = OpenCC.Converter({ from: 'cn', to: 'tw' });
const mapStrings = (value: unknown, convert: (text: string) => string): unknown => {
  if (typeof value === 'string') return convert(value);
  if (Array.isArray(value)) return value.map(item => mapStrings(item, convert));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, mapStrings(item, convert)]));
  return value;
};

function image(platform: Platform, file: string, caption: string): GuideImage {
  const landscape = file === '05-four-videos';
  const dimensions = platform === 'ios' ? [1319, 2748] : [1191, 2508];
  return {
    src: `/images/guides/multi-video/${platform === 'android' ? 'android/' : ''}en/${file}.webp`,
    alt: `Split Screen Player · ${platform === 'ios' ? 'iPhone' : 'Android'} — ${caption}`,
    caption,
    width: dimensions[landscape ? 1 : 0], height: dimensions[landscape ? 0 : 1],
    ...(file === '01-layout-choices' ? { highlight: platform === 'ios'
      ? { x: 102, y: 1574, width: 275, height: 275 }
      : { x: 116, y: 1260, width: 236, height: 236 } } : {}),
  };
}

function createGuide(locale: Locale, platform: Platform): GuidePage {
  if (locale === 'zh-Hans') return platform === 'ios' ? illustratedMultiVideoGuides['zh-Hans'] : androidMultiVideoGuide;
  if (locale === 'en-US' && platform === 'ios') return illustratedMultiVideoGuides['en-US'];
  if (locale === 'zh-Hant') {
    const original = createGuide('zh-Hans', platform);
    const converted = mapStrings(original, text => toTraditional(text)
      .replaceAll('視頻', '影片').replaceAll('屏幕', '螢幕').replaceAll('文件', '檔案')
      .replaceAll('導出', '匯出').replaceAll('/zh-Hans/', '/en/')) as GuidePage;
    for (const key of ['open', 'videos', 'files', 'web', 'custom', 'bookmark', 'bookmarks', 'landscape'] as const) {
      const originalLabel = toTraditional(menus['zh-Hans'][platform][key]);
      Object.assign(converted, mapStrings(converted, text => text.replaceAll(`「${originalLabel}」`, `「${menus['zh-Hant'][platform][key]}」`)));
    }
    return converted;
  }
  const copy = translations[locale];
  const parameters: Record<string, string> = {
    ...menus[locale][platform], device: platform === 'ios' ? copy.deviceIOS : copy.deviceAndroid,
  };
  const format = (text: string) => text.replace(/\{(\w+)\}/g, (_, key: string) => {
    if (!(key in parameters)) throw new Error(`Missing tutorial phrase: ${locale}/${platform}/${key}`);
    return parameters[key];
  });
  const title = format(copy.title);
  return {
    slug: slugs[platform], platform, otherPlatformSlug: slugs[platform === 'ios' ? 'android' : 'ios'],
    eyebrow: platform === 'ios' ? 'iPhone / iPad' : 'Android',
    title, seoTitle: title, metaDescription: format(copy.meta), summary: format(copy.summary), answer: format(copy.answer),
    heroImage: image(platform, '03-three-videos', platformCopy[locale].heroCaption),
    stepsHeading: copy.stepsHeading,
    steps: copy.steps.map(([title, description, detail, caption], index) => ({
      title: format(title), description: format(description), detail: format(detail), image: image(platform, files[index], format(caption)),
    })),
    tips: [], relatedFeature: 'multi-video-player',
    article: {
      featuresHeading: copy.featuresHeading, featuresIntro: copy.featuresIntro,
      features: copy.features.map(([title, description]) => ({ title: format(title), description: format(description) })),
      faq: copy.faq.map(([question, answer]) => ({ question: format(question), answer: format(answer) })),
      closingTitle: copy.closingTitle, closingDescription: copy.closingDescription,
    },
  };
}

export const localizedMultiVideoGuides = Object.fromEntries(locales.map(locale => [locale, createGuide(locale, 'ios')])) as Record<Locale, GuidePage>;
export const androidMultiVideoGuides = Object.fromEntries(locales.map(locale => [locale, createGuide(locale, 'android')])) as Record<Locale, GuidePage>;

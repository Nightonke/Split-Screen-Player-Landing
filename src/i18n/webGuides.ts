import type { GuideImage, GuidePage } from './guides';
import type { Locale } from './locales';
import menus from './appMenuLabels.json';
import zhHant from './webGuideTranslations/zh-Hant.json';
import ja from './webGuideTranslations/ja.json';
import ko from './webGuideTranslations/ko.json';
import fr from './webGuideTranslations/fr.json';
import de from './webGuideTranslations/de.json';
import es from './webGuideTranslations/es.json';
import ptBR from './webGuideTranslations/pt-BR.json';

type Platform = 'ios' | 'android';
type Scenario = 'web' | 'mixed';
const slugFor = (platform: Platform, scenario: Scenario) => `${scenario === 'web' ? 'browse-two-websites' : 'watch-video-and-browse-web'}-${platform === 'ios' ? 'iphone-ipad' : 'android'}` as GuidePage['slug'];
function create(locale: 'en-US' | 'zh-Hans', platform: Platform, scenario: Scenario): GuidePage {
  const zh = locale === 'zh-Hans';
  const ios = platform === 'ios';
  const dual = scenario === 'web';
  const m = menus[locale][platform];
  const device = ios ? (zh ? 'iPhone 或 iPad' : 'iPhone or iPad') : (zh ? '安卓手机或平板' : 'Android');
  const quote = (text: string) => zh ? `「${text}」` : `“${text}”`;
  const webMode = m.webMode;
  const img = (file: string, caption: string): GuideImage => ({
    src: `/images/guides/web/${platform}/${zh ? 'zh-Hans' : 'en'}/${file}.webp`,
    width: ios ? 1319 : 1191, height: ios ? 2748 : 2508,
    alt: `${ios ? 'iPhone' : 'Pixel 8'} · ${caption}`, caption,
    ...(file === '00-two-regions' ? { highlight: ios ? { x: 102, y: 563, width: 275, height: 275 } : { x: 116, y: 445, width: 236, height: 236 } } : {}),
    ...(['03-two-websites', '04-video-and-web'].includes(file) ? {
      credit: { label: zh ? '示例网页：维基百科' : 'Example pages: Wikipedia', href: `https://en.wikipedia.org/wiki/${file === '03-two-websites' ? 'Surfing' : 'Beach'}` },
    } : {}),
  });
  const title = zh
    ? `如何在${ios ? ` ${device} ` : device}上${dual ? '同时浏览两个网页' : '一边看视频一边浏览网页'}`
    : `How to ${dual ? 'browse two websites at once' : 'watch a video while browsing the web'} on ${device}`;
  const resultCaption = zh
    ? dual ? '两个网页上下排列，可以分别滚动和阅读。' : '上方播放相册视频，下方浏览网页，画面始终同时可见。'
    : dual ? 'Two web pages stacked on one screen, each with its own scrolling area.' : 'A local video plays above a web page, keeping both visible.';
  const titleLayout = zh ? '先选择上下分屏布局' : 'Choose a layout with two regions';
  const layoutStep = {
    title: titleLayout,
    description: zh ? '打开工具栏中的布局列表，选择框出的两个画面上下排列的布局。竖屏握持手机时，每个网页都能保留适合阅读的宽度。' : 'Open the layout picker in the toolbar and choose the highlighted layout with two stacked regions. In portrait, each region keeps the width of the phone for easier reading.',
    detail: zh ? `想要左右并排查看时，可以改选横屏布局；在平板上也可以进入${quote(m.custom)}，把更多空间留给需要仔细阅读的一边。` : `Choose a landscape layout for a side-by-side view. On a tablet, ${quote(m.custom)} also lets you give the page you are reading more room.`,
    image: img('00-two-regions', zh ? '选择两个画面上下排列的布局。' : 'Choose the layout with two stacked regions.'),
  };
  const openStep = {
    title: zh ? '在第一个区域打开网页入口' : 'Open the web option in the first region',
    description: zh ? `点第一个空白区域的加号，在${quote(m.open)}菜单中选择${quote(m.web)}。每个区域可以单独选择内容。` : `Tap the plus button in the first empty region, then choose ${quote(m.web)} from ${quote(m.open)}. Each region can open its own content.`,
    image: img('01-open-web', zh ? `在${quote(m.open)}菜单中选择${quote(m.web)}。` : `Choose ${quote(m.web)} from the ${quote(m.open)} menu.`),
  };
  const addressStep = {
    title: zh ? '输入地址，以网页方式打开' : 'Enter the address and open it as a web page',
    description: zh ? `输入或粘贴完整网页链接。将链接类型设为${quote(webMode)}，再点地址右侧的箭头。你会在这个分屏区域里看到网页。` : `Enter or paste the page URL. Set the link type to ${quote(webMode)}, then tap the arrow beside the address. The page opens inside this region.`,
    detail: zh ? '例如，可以先打开一篇文章，再把另一篇资料放在旁边，边阅读边对照。' : 'For example, open an article first and keep a second reference beside it as you read.',
    image: img('02-enter-url', zh ? `输入链接，并选择${quote(webMode)}类型。` : `Enter a link and select ${quote(webMode)}.`),
  };
  const videoImage: GuideImage = {
    src: `/images/guides/multi-video/${ios ? '' : 'android/'}${zh ? 'zh-Hans' : 'en'}/02-open-videos.webp`,
    width: ios ? 1319 : 1191, height: ios ? 2748 : 2508,
    alt: zh ? `从${quote(m.videos)}选择视频的菜单` : `The ${quote(m.videos)} option in the Open menu`,
    caption: zh ? `选择${quote(m.videos)}，打开想看的相册视频。` : `Choose ${quote(m.videos)} to open a video from your library.`,
  };
  const videoStep = {
    title: zh ? '在上方区域打开一个视频' : 'Open a video in the upper region',
    description: zh ? `点上方空白区域的加号，选择${quote(m.videos)}，打开想看的视频。视频保存在本地文件夹时，也可以从${quote(m.files)}选择。` : `Tap the plus button in the upper region and choose ${quote(m.videos)} to open a video. Use ${quote(m.files)} for a video saved in a local folder.`,
    detail: zh ? '课程、练习录像或旅行视频都适合这样观看：让画面保持可见，再在另一个区域查资料。' : 'This works well for a saved lesson, a practice recording, or a travel clip: keep the video visible while looking up a reference below.',
    image: videoImage,
  };
  const mixedWebStep = {
    title: zh ? '在下方区域打开网页' : 'Open a web page in the lower region',
    description: zh ? `点下方空白区域的加号，选择${quote(m.web)}，输入网页链接，将类型设为${quote(webMode)}，再点箭头打开。` : `Tap the plus button in the lower region, choose ${quote(m.web)}, and enter the page URL. Select ${quote(webMode)} and tap the arrow to open it.`,
    detail: zh ? '可以打开课程资料、教程、文章或搜索结果页。视频和网页各占一个区域，阅读时无需离开播放器。' : 'Open lesson notes, a tutorial, an article, or a search results page. The video and page each have their own region, so you can read while the player stays visible.',
    image: img('02-enter-url', zh ? '通过网页入口输入想要浏览的链接。' : 'Enter the address of the page you want to browse.'),
  };
  const lastStep = {
    title: zh ? dual ? '打开第二个网页，分别滚动' : '播放视频，同时阅读网页' : dual ? 'Open the second page and scroll independently' : 'Play the video while reading the page',
    description: zh
      ? dual ? `在第二个区域重复${quote(m.web)}的操作，打开另一个链接。手指在上方滑动时浏览第一个网页，在下方滑动时浏览第二个网页，各自保留浏览位置。` : '点视频画面显示播放控件，再点播放。随后在网页区域上下滑动阅读；需要暂停或调整声音时，再点视频区域操作。'
      : dual ? `Repeat the ${quote(m.web)} steps in the second region with another URL. Scroll within the upper region to read the first page, or within the lower region to read the second. Each keeps its own position.` : 'Tap the video to show its controls, then press play. Scroll inside the web region as you read; tap the video again whenever you need to pause or change its sound.',
    detail: zh ? `想下次继续查看这组内容，可以使用工具栏的${quote(m.bookmark)}，之后从${quote(m.bookmarks)}再次打开。` : `Use ${quote(m.bookmark)} in the toolbar to save this combination, then reopen it from ${quote(m.bookmarks)} later.`,
    image: img(dual ? '03-two-websites' : '04-video-and-web', resultCaption),
  };
  const multiSlug = ios ? 'play-multiple-videos-iphone-ipad' : 'play-multiple-videos-android';
  return {
    slug: slugFor(platform, scenario), platform, otherPlatformSlug: slugFor(ios ? 'android' : 'ios', scenario),
    eyebrow: ios ? 'iPhone / iPad' : 'Android', title, seoTitle: title,
    metaDescription: zh
      ? `在 ${device} 上${dual ? '同时打开两个网页，独立滚动、对照阅读' : '一边播放相册视频，一边浏览网页资料'}。用 Split Screen Player 选择上下或左右分屏，按真实截图完成设置。`
      : `Learn to ${dual ? 'open two websites at once and scroll each page independently' : 'play a local video while reading a web page'} on ${device}. Follow screenshots to set up Split Screen Player.`,
    summary: zh
      ? dual ? '文章和参考资料放在一起，两个搜索结果同时对照。把两个网页放进同一个屏幕，浏览时各自滚动，想看的内容都留在眼前。' : '看课程时查资料，看练习录像时读动作说明。把视频和网页放在同一屏幕，阅读时也能看到视频画面。'
      : dual ? 'Keep an article beside a reference, or compare two search results without switching tabs. Put both pages on one screen and scroll each independently.' : 'Look up a reference during a lesson or read instructions beside a practice recording. Keep your video and web page visible together.',
    answer: zh
      ? `在 ${device} 上打开 Split Screen Player，选择两个区域的布局，${dual ? '分别通过「网页/流媒体」输入两个网页链接' : '在一个区域打开相册视频，在另一个区域通过「网页/流媒体」打开链接'}，就能${dual ? '同时查看和操作两个网页' : '一边看视频一边浏览网页'}。`
      : `Open Split Screen Player on ${device}, choose a layout with two regions, and ${dual ? `use ${quote(m.web)} in each region to open a different URL` : `open a local video in one region and a URL through ${quote(m.web)} in the other`}. Both stay visible on the same screen.`,
    heroImage: img(dual ? '03-two-websites' : '04-video-and-web', resultCaption),
    steps: dual ? [layoutStep, openStep, addressStep, lastStep] : [layoutStep, videoStep, mixedWebStep, lastStep],
    tips: [], relatedFeature: 'iptv-streaming', relatedUseCase: 'learning-reference',
    article: {
      featuresHeading: zh ? '把分屏用在更多日常场景里' : 'Make the layout work for what you are doing',
      featuresIntro: zh ? '除了网页，Split Screen Player 也可以在不同区域里打开视频、图片、PDF 和音频。按内容选择布局，查看起来更方便。' : 'Split Screen Player can also open videos, images, PDFs, and audio in separate regions. Choose a layout that gives each source enough room.',
      features: [
        { title: zh ? '按阅读习惯调整布局' : 'Give each page the space it needs', description: zh ? `内置 144 种布局，支持最多 36 个画面。阅读网页通常从两个区域开始更舒服，也可以在${quote(m.custom)}中调整各区域的位置和大小。` : `There are 144 built-in layouts with up to 36 regions. Two regions are usually a comfortable starting point for reading; ${quote(m.custom)} lets you adjust their positions and sizes.` },
        { title: zh ? dual ? '把其中一个网页换成视频' : '把视频换成另一个网页' : dual ? 'Replace one page with a video' : 'Replace the video with another page', description: zh ? dual ? '看教程时，可以让一边播放示范视频，另一边保留文章或动作说明。' : '需要同时对照两份在线资料时，把视频区域改为网页即可。' : dual ? 'Keep a demonstration video on one side and the written lesson or instructions on the other.' : 'When you need two online references, open another web page in the video region.', link: { label: zh ? '查看操作教程' : 'See the tutorial', path: `guides/${slugFor(platform, dual ? 'mixed' : 'web')}` } },
        { title: zh ? '同时观看和比较多个视频' : 'Watch and compare multiple videos', description: zh ? '也可以将每个区域都用来播放视频：竖屏三行适合上下对照，横屏四宫格适合同时观看不同视角，并能分别控制声音。' : 'Use every region for video when you want to compare clips: three stacked rows in portrait or a four-video grid in landscape, with separate sound controls.', link: { label: zh ? '查看多视频播放教程' : 'See the multi-video guide', path: `guides/${multiSlug}` } },
      ],
      faq: [
        { question: zh ? '这里打开的是两个 App 吗？' : 'Does this open two separate apps?', answer: zh ? '这里是在 Split Screen Player 内的不同区域打开网页或媒体。可以查看两个网站，也可以组合本地视频和网页；其他 App 的界面不会被放进这些区域。' : 'The regions open web pages or media inside Split Screen Player. You can browse two sites or combine a local video with a web page; these regions do not embed the interfaces of other apps.' },
        { question: zh ? '能同时播放两个网页里的视频吗？' : 'Can videos in two web pages play at the same time?', answer: ios ? (zh ? 'iPhone / iPad 版在打开多个网页时，会提示受系统限制，网页内的视频无法同时播放。双网页教程适合同时阅读和浏览；想稳定对比多个视频，可以使用相册或本地文件视频。' : 'On iPhone and iPad, the app warns that system restrictions prevent videos in multiple web pages from playing simultaneously. Use two web regions for reading and browsing; use local video files when you want to compare several videos at once.') : (zh ? '网页里的播放器受网站自身的播放规则、自动播放设置和内容保护限制，不能保证两个网站的视频都能同时播放。多个相册或本地视频可以使用多视频布局播放。' : 'Web players depend on the site’s playback rules, autoplay settings, and content protection. Simultaneous playback across two websites is not guaranteed. Use a multi-video layout for several local files instead.') },
        { question: zh ? '可以浏览需要登录的网站吗？' : 'Can I browse sites that require a login?', answer: zh ? '能否登录和正常使用取决于网站对内置浏览器的支持。部分服务可能要求在自己的 App 或系统浏览器中打开，分屏不会绕过网站的订阅、登录或内容保护要求。' : 'Login and browsing depend on the site’s support for an in-app browser. Some services require their own app or the system browser. Split-screen viewing does not bypass a site’s login, subscription, or content protection requirements.' },
        { question: zh ? '网页分屏需要会员吗？' : 'Does web browsing require VIP?', answer: zh ? '网页浏览属于 VIP 功能；带有 VIP 标记的布局也需要会员。App 可免费下载，具体权益和价格可以在 App 内查看。' : 'Web browsing is a VIP feature, and layouts marked VIP also require a paid plan. The app is free to download; see the in-app offer for current features and pricing.' },
        { question: zh ? '断网后还能使用吗？' : 'Can I use it offline?', answer: zh ? '已经保存到设备的视频、图片和 PDF 可以离线打开。网页一般需要网络连接，是否能离线阅读取决于网页本身。' : 'Videos, images, and PDFs already saved on your device can open offline. Web pages normally need an internet connection; offline availability depends on the page.' },
      ],
      closingTitle: zh ? dual ? '把两个想看的网页放在一起' : '让视频和参考资料同时可见' : dual ? 'Keep both pages in view' : 'Keep your video and reference together',
      closingDescription: zh ? '下载 Split Screen Player，选择两个区域的布局，试试适合自己的分屏阅读方式。' : 'Download Split Screen Player, choose a two-region layout, and try it with the content you want to keep in view.',
    },
  };
}
type TranslatedLocale = Exclude<Locale, 'en-US' | 'zh-Hans'>;
type StepCopy = { title: string; description: string; detail?: string; caption?: string };
type FeatureCopy = { title: string; description: string };
type FaqCopy = { question: string; answer: string };
interface WebGuideCopy {
  deviceIOS: string;
  deviceAndroid: string;
  web: { title: string; meta: string; summary: string; answer: string; caption: string; closing: string };
  mixed: WebGuideCopy['web'];
  steps: Record<'layout' | 'open' | 'address' | 'video' | 'mixedWeb' | 'lastWeb' | 'lastMixed', StepCopy>;
  bookmarkDetail: string;
  featuresHeading: string;
  featuresIntro: string;
  features: Record<'layout' | 'web' | 'mixed' | 'videos', FeatureCopy>;
  tutorialLink: string;
  multiVideoLink: string;
  faq: {
    apps: FaqCopy;
    playbackQuestion: string;
    playbackIOS: string;
    playbackAndroid: string;
    login: FaqCopy;
    vip: FaqCopy;
    offline: FaqCopy;
  };
  closingDescription: string;
  credit: string;
}
const translations: Record<TranslatedLocale, WebGuideCopy> = { 'zh-Hant': zhHant, ja, ko, fr, de, es, 'pt-BR': ptBR };

function createTranslated(locale: TranslatedLocale, platform: Platform, scenario: Scenario): GuidePage {
  // Reuse the verified platform-specific steps, images, and links; replace all prose.
  const base = create('en-US', platform, scenario);
  const copy = translations[locale];
  const scene = copy[scenario];
  const quote = (text: string) => {
    if (locale === 'zh-Hant' || locale === 'ja') return `「${text}」`;
    if (locale === 'fr') return `« ${text} »`;
    if (locale === 'de') return `„${text}“`;
    return `“${text}”`;
  };
  const parameters: Record<string, string> = {
    ...Object.fromEntries(Object.entries(menus[locale][platform]).map(([key, text]) => [key, quote(text)])),
    device: platform === 'ios' ? copy.deviceIOS : copy.deviceAndroid,
  };
  const format = (text: string) => {
    const rendered = text.replace(/\{(\w+)\}/g, (_, key: string) => {
      if (!(key in parameters)) throw new Error(`Missing web guide phrase: ${locale}/${platform}/${key}`);
      return parameters[key];
    });
    // Keep spacing around Latin device names, but not between Chinese characters.
    return locale === 'zh-Hant' ? rendered.replace(/([\u3400-\u9fff]) +(?=[\u3400-\u9fff])/g, '$1') : rendered;
  };
  const localizeImage = (original: GuideImage, caption: string): GuideImage => ({
    ...original,
    caption: format(caption),
    alt: `${platform === 'ios' ? 'iPhone' : 'Pixel 8'} · ${format(caption)}`,
    ...(original.credit ? { credit: { ...original.credit, label: copy.credit } } : {}),
  });
  const stepKeys = scenario === 'web'
    ? ['layout', 'open', 'address', 'lastWeb'] as const
    : ['layout', 'video', 'mixedWeb', 'lastMixed'] as const;
  const featureKeys = ['layout', scenario, 'videos'] as const;
  const article = base.article!;
  return {
    ...base,
    title: format(scene.title), seoTitle: format(scene.title),
    metaDescription: format(scene.meta), summary: format(scene.summary), answer: format(scene.answer),
    heroImage: localizeImage(base.heroImage!, scene.caption),
    steps: base.steps.map((step, index) => {
      const translated = copy.steps[stepKeys[index]];
      const detail = index === 3 ? copy.bookmarkDetail : translated.detail;
      return {
        title: format(translated.title), description: format(translated.description),
        ...(detail ? { detail: format(detail) } : {}),
        image: localizeImage(step.image!, index === 3 ? scene.caption : translated.caption!),
      };
    }),
    article: {
      ...article,
      featuresHeading: copy.featuresHeading, featuresIntro: copy.featuresIntro,
      features: article.features.map((feature, index) => ({
        title: format(copy.features[featureKeys[index]].title),
        description: format(copy.features[featureKeys[index]].description),
        ...(feature.link ? { link: { ...feature.link, label: index === 1 ? copy.tutorialLink : copy.multiVideoLink } } : {}),
      })),
      faq: [copy.faq.apps, {
        question: copy.faq.playbackQuestion,
        answer: platform === 'ios' ? copy.faq.playbackIOS : copy.faq.playbackAndroid,
      }, copy.faq.login, copy.faq.vip, copy.faq.offline],
      closingTitle: scene.closing, closingDescription: copy.closingDescription,
    },
  };
}

export function getWebGuides(locale: Locale): GuidePage[] {
  return (['web', 'mixed'] as const).flatMap(scenario => (['ios', 'android'] as const).map(platform =>
    locale === 'en-US' || locale === 'zh-Hans'
      ? create(locale, platform, scenario)
      : createTranslated(locale, platform, scenario),
  ));
}

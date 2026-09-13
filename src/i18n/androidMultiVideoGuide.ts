import type { GuideImage, GuidePage } from "./guides";
import { appFacts } from "@config/appFacts";

const screenshot = (file: string, caption: string, landscape = false): GuideImage => ({
  src: `/images/guides/multi-video/android/zh-Hans/${file}.webp`,
  width: landscape ? 2508 : 1191,
  height: landscape ? 1191 : 2508,
  alt: `Split Screen Player Android：${caption}`,
  caption,
});

export const androidMultiVideoGuide: GuidePage = {
  slug: "play-multiple-videos-android",
  platform: "android",
  otherPlatformSlug: "play-multiple-videos-iphone-ipad",
  eyebrow: "分屏播放教程 · 安卓手机与平板",
  title: "安卓手机如何同时播放多个视频：上下分屏与四宫格教程",
  seoTitle: "安卓手机如何同时播放多个视频？上下分屏与四宫格教程",
  metaDescription: "用 Split Screen Player 在安卓手机或平板上同时看两个、三个或四个视频。选择上下分屏、三行或四宫格，从相册或文件添加视频，分别控制声音，并收藏常用组合。Android 版现已在 Google Play 上架。",
  summary: "想把两段视频上下放在一起，或同时看几个机位？Split Screen Player（分屏播放器）可以在一个 App 里打开多个视频，让每个画面都留在眼前。安卓手机和平板都能使用。",
  answer: "先选布局，再给每个区域添加视频，就能同时观看。下面从竖屏三行开始，再切换到操作栏在右侧的横屏四宫格，最后收藏这组视频，方便下次继续看。",
  heroImage: screenshot("03-three-videos", "在安卓手机上，三个视频上下排列、同时播放。"),
  stepsHeading: "从上下分屏到横屏四宫格",
  steps: [
    {
      title: "选择三行布局，让视频上下排列",
      description: "点击操作栏中的四格图标「选择布局」，进入「默认」页。在「纵向，共1列」中，选择三个区域上下排列的三行一列布局，每行放一个视频。",
      detail: "只想同时看两个视频，可以从「1～2个视频」中选择上下分屏或左右分屏。布局多时，用底部的视频数量和方向筛选，快速找到想要的排列。",
      image: { ...screenshot("01-layout-choices", "三行一列的布局在图中已用橙色方框标出"), highlight: { x: 116, y: 1260, width: 236, height: 236 } },
    },
    {
      title: "从相册或文件中添加视频",
      description: "点击空白区域的「+」，在「打开」菜单中选择「相册视频」，再选一段视频。对另外两个区域重复操作，三个画面就能在同一屏播放。",
      detail: "视频存在下载目录或其他文件夹时，可以选择「文件」，通过 Android 的文件选择器打开。想在同一个区域轮流播放多段视频，也可以使用「播放列表」。",
      image: screenshot("02-open-videos", "通过「相册视频」或「文件」为区域添加内容"),
    },
    {
      title: "分别控制进度，保留想听的声音",
      description: "轻点视频，显示它的控制按钮。点击中央按钮播放或暂停，拖动进度条跳到想看的位置，用倍速按钮放慢动作或加快浏览。每路视频都能独立控制。",
      detail: "多个视频一起出声时，点击不需要听的那几路视频的喇叭按钮，将它们静音。切换当前操作的视频不会自动关闭其他声音，你可以自己决定听哪一路。",
      image: screenshot("06-playback-controls", "喇叭、倍速、播放暂停和进度条分别控制当前视频"),
    },
    {
      title: "切换横屏四宫格，操作栏放在右边",
      description: "再次打开「选择布局」，把视频数量设为「4」，方向选为「横屏（右）」。在「中心对称（4～9个）」中，选择两行两列、右侧带操作栏细条的布局。",
      detail: "App 会按所选布局切换横竖屏方向。将手机横着拿，四个区域就会朝向你，操作栏集中在右侧。随后点击空白区域的「+」，添加第四段视频。",
      image: screenshot("04-select-grid", "选择四个视频和横屏右侧操作栏的四宫格"),
    },
    {
      title: "收藏这组视频，下次一键恢复",
      description: "布局和视频都安排好后，点击操作栏里的星形「收藏」按钮，把当前布局和内容保存为书签。下次打开旁边的「收藏列表」，选择这条书签，就能恢复这组画面。",
      detail: "可以把课程与参考视频、多机位录制或常看的几个片段分别收藏，让每次观看都从熟悉的组合开始。",
      image: screenshot("05-four-videos", "四宫格把多个画面放在一起，常用组合可以收藏", true),
    },
  ],
  tips: [],
  relatedFeature: "multi-video-player",
  article: {
    featuresHeading: "从两个视频开始，搭出适合你的分屏",
    featuresIntro: "安卓分屏播放器不只适合多看几个画面，也能帮你对比动作、回看机位，或让课程和参考资料同时可见。",
    features: [
      { title: `${appFacts.layoutCount} 种预设布局，最多 ${appFacts.maxVideos} 个视频同时播放`, description: `从上下分屏、左右分屏到三行、四宫格和更密集的排列，内置 ${appFacts.layoutCount} 种布局，最多同时播放 ${appFacts.maxVideos} 个视频。手机便于随手看，平板能给每个画面更多空间。实际流畅度受设备、分辨率和编码影响，可以先从两三个视频开始。` },
      { title: "自定义位置和大小，把重点画面放大", description: "在布局选择器中进入「自定义」，点击「创建布局」，可以从空白布局或现有布局开始。拖动区域和四角改变位置与大小，或使用「线条」中的「横切」「竖切」划分屏幕。" },
      { title: "视频、音频、图片、PDF 和网页同屏", description: "除了视频，还能打开音频、图片集、PDF 和网页。比如一边播放课程，一边阅读讲义；一边看动作示范，一边对照参考图片。也支持通过「网页/流媒体」打开 HLS（M3U8）或 RTSP 链接。" },
      { title: "相册录制和不同格式的本地视频，都能加入", description: "可以打开 MP4、MOV、MKV、WebM 等常见视频文件。对于 AVI、WMV、RMVB 等旧格式的本地文件，App 提供兼容播放能力；具体能否播放取决于文件编码和设备支持。" },
      { title: "对比同一动作，或导出为一个视频", description: "多机位视频可以通过同步点对齐共同的动作，再联动播放。想分享同一屏的多个画面，可从「更多菜单」打开「导出分屏视频」，把本地视频组合保存为 MP4。" },
    ],
    faq: [
      { question: "需要开启安卓系统的分屏模式吗？", answer: "不需要。视频都在 Split Screen Player 的不同区域内播放，打开 App、选择布局并添加视频即可，无需先把两个 App 放进系统分屏。" },
      { question: "安卓平板也能同时播放多个视频吗？", answer: "可以。Android 版支持安卓手机和平板，提供同样的布局选择。平板屏幕更大，适合多机位回看，以及视频和 PDF 资料一起阅读。" },
      { question: "分屏播放与播放列表有什么区别？", answer: "分屏播放把不同视频放进不同区域，同时显示多个画面；播放列表让多段视频在同一个区域里轮流播放。你可以按自己的观看习惯组合使用。" },
      { question: "收藏与「保存当前分屏」有什么区别？", answer: "「收藏」会保存布局和内容，方便下次恢复。「保存当前分屏」生成的是一张当前画面的 PNG 图片，并打开 Android 系统分享面板。" },
      { question: "Android 版可以免费使用吗？", answer: "可以免费下载并使用基础视频播放和免费布局。带 VIP 标记的布局、应用自定义布局、书签保存与恢复等功能需要会员；创建和编辑自定义布局本身免费。" },
    ],
    closingTitle: "在安卓手机上，试试同时看多个视频",
    closingDescription: "Android 版现已在 Google Play 上架。从两个视频开始，试试上下分屏，再换成三行或四宫格。也提供 iPhone 和 iPad 版本。",
  },
};

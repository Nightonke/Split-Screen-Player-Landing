import type { GuideImage, GuidePage } from "./guides";
import { appFacts } from "@config/appFacts";

const slug = "play-multiple-videos-iphone-ipad" as const;
const screenshot = (
	language: "en" | "zh-Hans",
	file: string,
	alt: string,
	caption: string,
	landscape = false,
): GuideImage => ({
	src: `/images/guides/multi-video/${language}/${file}.webp`,
	alt,
	caption,
	width: landscape ? 2748 : 1319,
	height: landscape ? 1319 : 2748,
});

export const illustratedMultiVideoGuides = {
	"en-US": {
    slug,
    platform: "ios",
    otherPlatformSlug: "play-multiple-videos-android",
    eyebrow: "Multi-video playback · iPhone & iPad",
    title: "How to play multiple videos at once on iPhone or iPad",
    seoTitle: "How to Play Multiple Videos at Once on iPhone or iPad",
    metaDescription: "Watch two videos side by side, stack three videos, or play four in a grid on iPhone and iPad. Choose a layout, add local clips, control audio, and save your setup.",
    summary: "Compare two clips without switching players, stack three videos in portrait, or watch four camera angles in a landscape grid. Split Screen Player keeps each video visible and independently playable on iPhone and iPad.",
    answer: "Choose a split-screen layout, tap + in each empty region, and add a video from Photos or Files. The clips play in separate regions without first merging them into one file. Start with two videos, or follow the three-row and four-video examples below.",
    heroImage: screenshot("en", "03-three-videos", "Three videos stacked in separate rows on an iPhone in Split Screen Player", "Three videos stay visible in a portrait layout."),
    stepsHeading: "From three rows to a four-video grid",
    steps: [
      { title: "Choose a layout with two or three regions", description: "Tap the four-square layout icon in the toolbar and open Default. For two videos, choose a stacked or side-by-side layout under 1–2 Videos. For three videos, choose the highlighted three-row thumbnail under Vertical, 1 Column Total.", detail: "Each rectangle represents a video region; the thin strip shows the toolbar position. Use the number and orientation filters at the bottom when you want a particular arrangement.", image: { ...screenshot("en", "01-layout-choices", "The layout library shows several arrangements with the three-row layout outlined", "Choose two regions, or the outlined layout for three stacked videos."), highlight: { x: 102, y: 1574, width: 275, height: 275 } } },
      { title: "Add a video to each region", description: "Tap + in an empty region. In Open, choose Videos and select a clip from Photos. Repeat for the other regions. Choose Files instead for videos stored in the Files app.", detail: "To replace a clip, tap its picture and then + in its controls. You can also use Playlist to play several clips one after another within a single region.", image: screenshot("en", "02-open-videos", "The iPhone Open menu offers Videos, Files, Images, and Playlist", "Choose Videos for Photos, or Files for a video saved elsewhere.") },
      { title: "Control each video and choose what you hear", description: "Tap a video to reveal its controls. Use the center button to play or pause it and drag its timeline to another moment. The other videos can keep playing independently.", detail: "Mute the clips you do not want to hear with their speaker buttons. Use the speed button to slow down a movement you are comparing. Tap the picture again whenever the controls hide.", image: screenshot("en", "06-playback-controls", "The first of three videos displays its speaker, speed, playback, and timeline controls", "Each video has its own sound, speed, and playback controls.") },
      { title: "Switch to a landscape 2×2 grid", description: "Open the layout picker again. Select 4 in the number filter and Land.(R) for the orientation, then choose the two-by-two thumbnail in the center-symmetry group.", detail: "The small strip on the right of the thumbnail means the toolbar will be on the right. Hold your device horizontally to view the four regions in landscape.", image: screenshot("en", "04-select-grid", "The iPhone layout picker is filtered to four videos and landscape with the toolbar on the right", "Choose four regions with the toolbar on the right.") },
      { title: "Add the fourth clip and save your setup", description: "Your first three clips remain in place. Tap + in the empty region to add a fourth video and complete the grid.", detail: "To return to this combination later, tap the star (Favorite) in the toolbar. Open Favorites List beside it to restore the saved videos and layout.", image: screenshot("en", "05-four-videos", "Four videos in a landscape grid on iPhone with the toolbar on the right", "Keep four camera angles or reference clips together in one screen.", true) },
    ],
    tips: [],
    relatedFeature: "multi-video-player",
    article: {
      featuresHeading: "Build the split screen that fits what you want to watch",
      featuresIntro: "Start with two clips, then add more angles or keep a lesson and its reference material visible together.",
      features: [
        { title: "144 preset layouts, with up to 36 videos at once", description: "Choose stacked rows, side-by-side views, a four-video grid, or a denser arrangement. iPhone is convenient for quick viewing; iPad gives each picture more room. Smooth playback depends on the device, codec, and resolution, so add videos gradually.", link: { label: "Explore multi-video playback", path: "features/multi-video-player" } },
        { title: "Adjust the position and size of each region", description: "Open Custom in the layout picker to create your own layout. Move regions, resize their corners, or divide the screen with lines. Give the main lesson more space and keep a smaller reference beside it." },
        { title: "Keep videos, images, PDFs, and web pages together", description: "Each region can show a different kind of content, including videos, audio, images, image folders, PDFs, and web pages. You can also open HLS (M3U8) and RTSP stream links." },
        { title: "Play local MP4, MOV, MKV, and more", description: "Open everyday recordings in MP4, MOV, M4V, or 3GP. The in-app custom player also supports containers such as MKV, AVI, WebM, FLV, F4V, WMV, and RMVB. Playback depends on the codec inside the file." },
        { title: "Line up the same moment in different recordings", description: "When recordings start at different times, set a Sync Point at the same action in each clip and enable Sync Lock. This helps compare a dance move, a swing, or the same event from several cameras.", link: { label: "Learn about Sync Points and Sync Lock", path: "guides/sync-videos-different-start-times" } },
      ],
      faq: [
        { question: "Can I play two videos at the same time on iPhone?", answer: "Yes. Choose a layout with two regions and add a video to each. Both pictures remain visible, with separate playback, progress, and sound controls." },
        { question: "Does this work on iPad too?", answer: "Yes. Split Screen Player supports both iPhone and iPad. A larger iPad screen is useful for camera-angle review, movement comparison, and watching a lesson alongside a PDF." },
        { question: "Do I need to merge the videos first?", answer: "No. Split-screen playback keeps the clips separate. You can change the layout or pause one video at any time. Use split-screen video export when you want to share the combined pictures as a new video file." },
        { question: "How do I remove black bars between videos?", answer: "Choose Fill in the video content mode settings to fill each region. This crops the edges when a video and its region have different shapes. Choose Fit when you need to see the entire original frame." },
        { question: "Can I watch videos from two streaming apps this way?", answer: "This guide covers videos you open inside Split Screen Player. It does not place two separate apps inside its regions. Web-video playback depends on each website and its playback restrictions." },
        { question: "Is Split Screen Player free?", answer: "The app is free to download, with basic video playback and free layouts. Layouts marked VIP, custom-layout use, bookmarks, and other advanced features require a membership." },
      ],
      closingTitle: "Keep the videos you want to watch on one screen",
      closingDescription: "Try two clips on your iPhone or iPad, then explore three stacked rows or a four-video grid. An Android version is also available on Google Play.",
    },
  },
	"zh-Hans": {
		slug,
		platform: "ios",
		otherPlatformSlug: "play-multiple-videos-android",
		eyebrow: "分屏播放教程 · iPhone 与 iPad",
		title: "如何在 iPhone 或 iPad 上同时播放多个视频",
		seoTitle: "iPhone / iPad 如何同时播放多个视频？上下分屏与四宫格教程",
		metaDescription: "想在 iPhone 或 iPad 上同时看两个、三个或四个视频？用 Split Screen Player 选择上下分屏、竖屏三行或横屏四宫格，分别控制播放和声音。跟着图文教程上手，了解 144 种布局、自定义布局与支持的视频格式。",
		summary: "想把两段视频放在一起对比，或同时看几个画面？用 Split Screen Player（分屏播放器），竖屏可以把三个视频上下排列，横屏可以把四个视频放进四宫格，不用在播放器之间来回切换。",
		answer: "只需三步：选择分屏布局，为每个区域添加视频，再轻点画面控制播放。下面从竖屏三行开始，带你试一试横屏四宫格，并把常用的视频组合保存下来。",
		heroImage: screenshot("zh-Hans", "03-three-videos", "Split Screen Player 在 iPhone 上同时播放三个视频，画面按三行一列排列", "三个视频，上下排列在同一屏。"),
		stepsHeading: "从竖屏三行，到横屏四宫格",
		steps: [
			{
				title: "选择竖屏三行布局",
				description: "点击底部操作栏的四格布局图标，打开「默认」布局。在「纵向，共1列」中，选择图里圈出的三行一列：三个视频会从上到下排列，每行一个。",
				detail: "只想同时看两个视频？选上方「1～2个视频」中的上下分屏或左右分屏即可。底部还可以按视频数量和屏幕方向筛选，找到适合你的排列。",
				image: { ...screenshot("zh-Hans", "01-layout-choices", "全部布局列表中展示上下分屏、左右分屏及多行布局，橙色方框标出三行一列", "在「纵向，共1列」中选择框出的三行布局。点击图片可放大查看。"), highlight: { x: 102, y: 1574, width: 275, height: 275 } },
			},
			{
				title: "为每个区域添加视频",
				description: "点击空白区域里的「+」，在「打开」菜单中选择「相册视频」，选一段想看的视频。再给另外两个区域添加视频，三个画面就能同时出现在屏幕上。",
				detail: "视频存在系统「文件」App 中时，选择「文件」即可。想换一段视频，轻点当前画面，再点右上角的「+」。如果希望多段视频在同一个区域内轮流播放，也可以使用「播放列表」。",
				image: screenshot("zh-Hans", "02-open-videos", "分屏播放器的打开菜单，可选择相册视频、文件、相册图片和播放列表", "点击「相册视频」添加视频，也可以从「文件」中选择。"),
			},
			{
				title: "分别控制播放，并选择要听的声音",
				description: "轻点任意视频，显示它自己的控制按钮。点击画面中央的按钮播放或暂停，拖动底部进度条跳到想看的位置；其他区域的视频可以继续播放。",
				detail: "想专心听其中一段？点击其他视频左上角的喇叭按钮将它们静音，保留你想听的声音。按钮隐藏后，再轻点画面即可显示。对比动作时，还可以用左上方的倍速按钮放慢播放。",
				image: screenshot("zh-Hans", "06-playback-controls", "三行视频中的第一路显示独立控制：左上角音量和倍速、中央暂停按钮、底部进度条", "第一路视频已展开控制：左上角管声音与倍速，中央管播放，底部管进度。"),
			},
			{
				title: "横过来，切换到四宫格",
				description: "想再加一个画面，或把多个机位放在一起看？打开布局选择器，选择「4」和「横屏（右）」，在「中心对称(4~9个)」中选两行两列的四宫格。",
				detail: "把手机横过来，就能用四块区域并排观看。缩略图右侧的细条代表操作栏：选这个布局，操作按钮会集中在屏幕右边。",
				image: screenshot("zh-Hans", "04-select-grid", "布局选择器筛选为4个视频和横屏右，显示两行两列的四宫格", "选择「4」→「横屏（右）」，找到两行两列、右侧带细条的布局。"),
			},
			{
				title: "加上第四段视频，保存常用组合",
				description: "切换后，原来的三个视频会保留。点击空白区域的「+」，再添加第四段视频，就能在同一屏看四个画面。",
				detail: "这组视频下次还要用？点击操作栏中的星形按钮「收藏」。以后从星形旁边的「收藏列表」打开它，就能恢复保存的视频和布局，继续观看或对比。",
				image: screenshot("zh-Hans", "05-four-videos", "iPhone 横屏同时播放四个视频，四宫格右侧显示收藏和收藏列表等操作按钮", "四宫格适合多机位回看，也适合把参考视频和自己的录制放在一起对比。", true),
			},
		],
		tips: [],
		article: {
			featuresHeading: "不止三行和四宫格：按你的习惯安排每一屏",
			featuresIntro: "从看两段视频，到回看多个机位，再到一边上课一边查资料，Split Screen Player 都能让需要的内容留在眼前。",
			features: [
				{ title: `${appFacts.layoutCount} 种布局，最多同时播放 ${appFacts.maxVideos} 个视频`, description: `除了上下分屏、左右分屏、三行和四宫格，还可以选择更多行列与不同比例的组合，最多同时播放 ${appFacts.maxVideos} 个视频。iPhone 适合随手观看，iPad 的大屏更方便检查多个画面的细节。多路播放的流畅度取决于设备性能、分辨率和编码，可以从两三个视频逐步增加。`, link: { label: "了解多视频播放", path: "features/multi-video-player" } },
				{ title: "自定义布局，把重要的画面放大", description: "需要一个大画面搭配几个小画面？在布局选择器中打开「自定义」，点击「创建布局」。你可以拖动区域调整位置，拖动四角调整大小，也可以用分割线划分空间。让课程占更多位置，或给参考动作留一块对照区域，都由你决定。" },
				{ title: "视频、图片、PDF 和网页，可以放在一起看", description: "每块区域可以打开不同内容：播放视频、浏览图片或图片文件夹、阅读 PDF、查看网页，也支持音频文件。比如上方播放课程，下方打开讲义；一侧看动作示范，另一侧放参考图片。还可以打开 HLS（M3U8）和 RTSP 流媒体。", link: { label: "试试视频、PDF 与网页分屏", path: "guides/video-pdf-web-multitasking" } },
				{ title: "支持 MP4、MOV，也能播放 MKV 等格式", description: "支持 MP4、MOV、M4V、3GP 等视频文件；MKV、AVI、WebM、FLV、F4V、WMV 和 RMVB 可通过 App 内的自定义播放器播放。相册里的日常录制和保存在「文件」中的不同格式视频，都可以作为分屏素材。具体能否播放仍取决于文件编码。" },
				{ title: "对齐同一个动作，让对比更直观", description: "如果两段录制的开始时间不同，可以为它们设置「同步点」，再开启「同步锁定」，让参考视频和自己的动作对齐。适合检查挥拍、投篮、舞蹈或不同机位的同一时刻。", link: { label: "学习设置同步点与同步锁定", path: "guides/sync-videos-different-start-times" } },
			],
			faq: [
				{ question: "可以在 iPhone 上同时看两个视频吗？", answer: "可以。在布局选择器里选择两个区域的上下分屏或左右分屏，再分别添加视频。每段视频都有独立的播放、进度和声音控制。" },
				{ question: "iPad 也支持这些分屏布局吗？", answer: "支持。Split Screen Player 可在 iPhone 和 iPad 上使用，iPad 的更大屏幕适合多机位回看、动作对比，以及视频与 PDF 讲义同时阅读。" },
				{ question: "同时播放，会把几段视频合成一个文件吗？", answer: "分屏播放时，各段视频仍然独立，你可以随时切换布局或单独暂停。如果想把多个画面保存成一个视频，可以进一步使用分屏视频导出功能。" },
				{ question: "这些功能需要会员吗？", answer: "App 可免费下载体验。带 VIP 标记的布局、应用自定义布局和收藏等高级功能需要会员。" },
			],
			closingTitle: "把想看的画面，放到同一屏",
			closingDescription: "从两段视频开始，试试上下分屏；再换成三行或四宫格，找到适合你的观看方式。下载 Split Screen Player，在 iPhone 或 iPad 上开始体验。Android 版也已在 Google Play 上线。",
		},
		relatedFeature: "multi-video-player",
	},
} satisfies Record<"en-US" | "zh-Hans", GuidePage>;

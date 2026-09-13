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
		eyebrow: "Play multiple videos · iPhone",
		title: "How to play multiple videos at once on iPhone",
		seoTitle: "Play Multiple Videos on iPhone: 3 Rows & a 2×2 Grid",
		metaDescription: "Play three local videos in portrait or four in a landscape 2×2 grid with Split Screen Player. Follow real iPhone screenshots to choose layouts, add videos, and save a snapshot.",
		summary: "Watch three videos in stacked rows, or turn your phone for four videos in a 2×2 grid. Keep every clip in view without switching players.",
		answer: "Use Split Screen Player to put a video in each region of one screen. Choose a layout, tap the + inside each empty region, then choose Videos to add clips from Photos. This guide starts with three rows and then shows a four-video grid with the toolbar on the right. For two videos, choose 2 in the same layout picker.",
		note: "Before you start: have your videos ready in Photos. The three-row and four-video layouts shown here are marked VIP and require a membership. Screenshots show the iPhone interface; menu placement can differ on iPad.",
		heroImage: screenshot("en", "03-three-videos", "Three local videos displayed in separate rows in Split Screen Player on iPhone", "Three rows in portrait. Each video keeps its own playback controls."),
		stepsHeading: "From three rows to four views",
		steps: [
			{
				title: "Choose three rows in portrait",
				description: "Tap the four-square layout icon in the bottom toolbar. In Default, select 3 in the number filter and Portrait below it. Under Vertical, 1 Column Total, tap the thumbnail with three equal rows. The thin bar below its preview shows where the toolbar will sit.",
				image: screenshot("en", "01-select-layout", "Layout picker filtered to 3 videos and Portrait, showing the three-row thumbnail", "Default → 3 → Portrait. Choose the three equal rows at the top."),
			},
			{
				title: "Add one video to each region",
				description: "Tap + in the first empty region. In Open, leave Playlist off and choose Videos. Select a clip from Photos, then repeat in the other two regions. Allow photo access if prompted; if the app asks to import the selection, tap Continue and let it finish. Use Files instead when your videos are stored in the Files app.",
				image: screenshot("en", "02-open-videos", "Open menu with Videos, Files, Photos, and the Playlist switch turned off", "Open → Videos. Keep Playlist off to put one clip in each region."),
			},
			{
				title: "Play, pause, and choose your audio",
				description: "Tap a video to reveal its controls. The center button plays or pauses that clip; the progress bar changes its position. Use the speaker button to mute the clips you do not want to hear. The controls hide after a short delay—tap the picture to bring them back. Playing clips together does not automatically align the same moment in every recording.",
			},
			{
				title: "Switch to a 2×2 grid with the toolbar on the right",
				description: "Open the layout picker again. Select 4 and Land.(R). Under Central Symmetry (4~9), choose the thumbnail with two rows and two columns, with a thin toolbar strip on its right. Turn the phone so the videos are upright and the toolbar is on the right edge.",
				image: screenshot("en", "04-select-grid", "Layout picker filtered to 4 and Land.(R), with the 2 by 2 layout under Central Symmetry", "Default → 4 → Land.(R). The right-hand strip in the thumbnail is the toolbar."),
			},
			{
				title: "Add the fourth clip and save this setup",
				description: "The three open videos stay in the new layout. Tap + in the remaining empty region and add your fourth clip through Videos. Once the arrangement looks right, tap the star in the toolbar to Save Snapshot. The app confirms Bookmark Added. Open the bookmark list beside the star to restore the saved videos and layout later.",
				image: screenshot("en", "05-four-videos", "Four videos playing in a landscape 2 by 2 grid with the toolbar on the right", "Four videos in landscape. The star saves a snapshot of the current setup.", true),
			},
		],
		tips: [
			{ title: "Match the clips to the regions", description: "Landscape clips fit the wide regions in these examples. Portrait clips can leave black space at the sides; filling a wide region may crop their edges. Choose a layout that keeps the part you need visible." },
			{ title: "Keep playback manageable", description: "Start with two or three local clips, then add more. Smooth playback depends on the device and the videos’ resolution, codec, and frame rate." },
			{ title: "Save synchronization for the next step", description: "For recordings of the same event, first get the clips on screen. Then use the synchronization guide to align their matching moments with Sync Points and Sync Lock." },
		],
		relatedFeature: "multi-video-player",
	},
	"zh-Hans": {
		slug,
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
				detail: "这组视频下次还要用？点击操作栏中的星形按钮「保存快照」。以后从星形旁边的书签列表打开它，就能恢复保存的视频和布局，继续观看或对比。",
				image: screenshot("zh-Hans", "05-four-videos", "iPhone 横屏同时播放四个视频，四宫格右侧显示保存快照和书签等操作按钮", "四宫格适合多机位回看，也适合把参考视频和自己的录制放在一起对比。", true),
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
				{ question: "这些功能需要会员吗？", answer: "App 可免费下载体验。带 VIP 标记的布局、自定义布局和保存快照等高级功能需要会员。" },
			],
			closingTitle: "把想看的画面，放到同一屏",
			closingDescription: "从两段视频开始，试试上下分屏；再换成三行或四宫格，找到适合你的观看方式。下载 Split Screen Player，在 iPhone 或 iPad 上开始体验。Android 版也已在 Google Play 上线。",
		},
		relatedFeature: "multi-video-player",
	},
} satisfies Record<"en-US" | "zh-Hans", GuidePage>;

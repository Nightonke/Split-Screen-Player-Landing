import type { GuideImage, GuidePage } from "./guides";

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
		eyebrow: "多视频播放 · iPhone",
		title: "如何在 iPhone 上同时播放多个视频",
		seoTitle: "iPhone 同时播放多个视频：竖屏三行与横屏四宫格教程",
		metaDescription: "用分屏播放器在 iPhone 上同时播放三个或四个本地视频。跟随真实截图选择竖屏三行、横屏四宫格布局，添加相册视频并保存快照。",
		summary: "竖着看，把三个视频上下排列；横过来，把四个视频放进四宫格。所有画面都留在同一屏，无需来回切换播放器。",
		answer: "可以用分屏播放器在同一屏的不同区域同时播放视频。先选择布局，点击每个空白区域里的「+」，再通过「相册视频」逐个添加素材。本教程先演示竖屏三行，再切换到操作栏在右侧的横屏四宫格。如果只看两个视频，在同一个布局选择器里把数量改为「2」即可。",
		note: "开始前：先把视频准备在相册里。本教程使用的三行和四宫格布局带有 VIP 标记，需要会员。截图展示 iPhone 界面，iPad 上的菜单位置可能有所不同。",
		heroImage: screenshot("zh-Hans", "03-three-videos", "分屏播放器在 iPhone 竖屏中以三行显示三个本地视频", "竖屏三行，每个视频都有独立的播放控制。"),
		stepsHeading: "从竖屏三行，到横屏四宫格",
		steps: [
			{
				title: "选择竖屏三行布局",
				description: "点击底部操作栏的四格布局图标。在「默认」页，把数量筛选设为「3」，方向设为「竖屏」。找到「纵向，共1列」，点击三个等高区域上下排列的缩略图。缩略图底部的细条表示操作栏的位置。",
				image: screenshot("zh-Hans", "01-select-layout", "数量为3、方向为竖屏的布局选择器，顶部显示三行布局", "默认 → 3 → 竖屏，选择顶部三个等高区域的布局。"),
			},
			{
				title: "给每个区域添加一个相册视频",
				description: "点击第一个空白区域里的「+」，在「打开」菜单中保持「播放列表」关闭，选择「相册视频」，然后选中一段视频。对另外两个区域重复操作。如果出现照片权限提示，按提示授权；如果提示需要导入所选内容，点击「继续」并等待完成。视频保存在系统「文件」App 中时，可以改选「文件」。已有视频时，轻点画面，再点右上角「+」也能打开这个菜单。",
				image: screenshot("zh-Hans", "02-open-videos", "中文打开菜单中的相册视频入口，播放列表开关处于关闭状态", "打开 → 相册视频。关闭「播放列表」，给每个区域分别放入一段视频。"),
			},
			{
				title: "分别控制播放，并选择要听的声音",
				description: "轻点任意视频可以显示控制按钮。中间的按钮负责播放或暂停这一路视频，下方进度条用来跳转位置。通过喇叭按钮关闭不需要的声音，避免多路音频互相干扰。控制按钮稍后会自动隐藏，再点画面即可显示。多段视频同时播放，并不意味着它们已经对齐到同一个事件时刻。",
			},
			{
				title: "切换到操作栏在右侧的横屏四宫格",
				description: "再次打开布局选择器，把数量改成「4」，方向改成「横屏（右）」。在「中心对称(4~9个)」下，选择两行两列、右侧带细条的缩略图。把手机横过来，让视频画面朝向正确，操作栏位于屏幕右侧。",
				image: screenshot("zh-Hans", "04-select-grid", "数量为4、方向为横屏右的布局选择器，显示右侧操作栏的四宫格布局", "默认 → 4 → 横屏（右）。缩略图右侧的细条就是操作栏。"),
			},
			{
				title: "补上第四段视频，再保存快照",
				description: "切换布局后，原来的三个视频会保留。点击剩余空白区域里的「+」，通过「相册视频」添加第四段。确认画面安排合适后，点击操作栏的星形按钮「保存快照」，App 会提示「书签已添加」。下次打开星形旁边的书签列表，点击保存的条目，就能恢复这组视频和布局。",
				image: screenshot("zh-Hans", "05-four-videos", "四段视频在横屏四宫格中同时播放，操作栏位于右侧", "横屏四宫格。右侧星形按钮可把当前组合保存为快照。", true),
			},
		],
		tips: [
			{ title: "让素材比例适合播放区域", description: "本例中的宽播放区域适合横向视频。竖向视频可能在左右留下黑边；让画面填满宽区域，则可能裁掉边缘。按需要保留的画面内容选择布局。" },
			{ title: "先少量播放，再增加视频", description: "先从两三个本地视频开始，确认播放流畅后再增加数量。设备性能、视频分辨率、编码格式和帧率都会影响多路播放表现。" },
			{ title: "需要对比同一动作时，再设置同步", description: "先把视频放进同一屏，再按照同步教程设置「同步点」和「同步锁定」。这样才能让不同时间开始录制的视频，对齐到相同的动作或事件。" },
		],
		relatedFeature: "multi-video-player",
	},
} satisfies Record<"en-US" | "zh-Hans", GuidePage>;

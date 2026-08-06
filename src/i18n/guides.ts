import type { Locale } from "./locales";
import type { FeatureSlug, UseCaseSlug } from "./marketing";
import * as OpenCC from "opencc-js";

export const guideSlugs = [
	"play-multiple-videos-iphone-ipad",
	"sync-videos-different-start-times",
	"compare-sports-videos-frame-by-frame",
	"export-split-screen-video",
	"multi-camera-review-ipad",
	"play-rtsp-live-streams",
	"video-pdf-web-multitasking",
] as const;

export type GuideSlug = (typeof guideSlugs)[number];

export interface GuidePage {
	slug: GuideSlug;
	eyebrow: string;
	title: string;
	seoTitle: string;
	metaDescription: string;
	summary: string;
	answer: string;
	steps: Array<{ title: string; description: string }>;
	tips: Array<{ title: string; description: string }>;
	relatedFeature: FeatureSlug;
	relatedUseCase?: UseCaseSlug;
}

interface GuideContent {
	hub: {
		eyebrow: string;
		title: string;
		seoTitle: string;
		metaDescription: string;
		description: string;
		readLabel: string;
		homeLabel: string;
	};
	labels: {
		guides: string;
		directAnswer: string;
		steps: string;
		tips: string;
		relatedFeature: string;
		moreGuides: string;
		backToGuides: string;
	};
	pages: Record<GuideSlug, GuidePage>;
}

const en: GuideContent = {
	hub: {
		eyebrow: "Practical guides",
		title: "Do more with multiple videos.",
		seoTitle: "Multi-Video Player Guides for iPhone & iPad",
		metaDescription:
			"Learn how to play multiple videos, sync clips, compare sports footage frame by frame, export split-screen video, and open live streams on iPhone and iPad.",
		description:
			"Clear workflows for the questions people ask before and after opening a second video. Each guide starts with the quickest answer, then shows the complete setup.",
		readLabel: "Read guide",
		homeLabel: "Back to Split Screen Player",
	},
	labels: {
		guides: "Guides",
		directAnswer: "Quick answer",
		steps: "Step by step",
		tips: "Make it work better",
		relatedFeature: "Explore the feature",
		moreGuides: "More practical guides",
		backToGuides: "Back to all guides",
	},
	pages: {
		"play-multiple-videos-iphone-ipad": {
			slug: "play-multiple-videos-iphone-ipad",
			eyebrow: "iPhone & iPad",
			title: "How to play multiple videos at once on iPhone or iPad",
			seoTitle: "How to Play Multiple Videos at Once on iPhone & iPad",
			metaDescription:
				"Play 2 to 36 local videos together on iPhone or iPad. Choose a split-screen layout, add clips, control playback globally, and save the workspace.",
			summary:
				"Put 2 to 36 videos into one portrait or landscape layout, then play, pause, seek, mute, or switch them without moving between separate players.",
			answer:
				"Open Split Screen Player, choose a layout for the number and orientation of videos you want, and add one source to each region. The bottom toolbar can then control every compatible video together. You can start with two videos and expand the same workflow to a dense iPad layout.",
			steps: [
				{ title: "Choose the number of views", description: "Open the layout library and filter by video count, portrait, landscape-right, or landscape-left. Pick a simple side-by-side layout first." },
				{ title: "Add a source to each region", description: "Choose individual files, an album, folder, playlist, bookmark, stream, image, PDF, web page, or music source for the active region." },
				{ title: "Control the videos together", description: "Use global play, pause, progress, mute, speed, frame stepping, or next-video actions from the bottom toolbar." },
				{ title: "Save the workspace", description: "Create a bookmark to restore the selected sources, layout, playback positions, and sync settings later." },
			],
			tips: [
				{ title: "Match the layout to the source", description: "Portrait clips are easier to read in vertical regions; landscape clips need wider regions or a landscape device orientation." },
				{ title: "Start with reasonable resolution", description: "The number of smooth simultaneous streams depends on the device, codec, resolution, frame rate, and network quality." },
				{ title: "Use iPad for dense monitoring", description: "The same controls work on iPhone, but a larger iPad canvas makes layouts with many small regions easier to inspect." },
			],
			relatedFeature: "multi-video-player",
		},
		"sync-videos-different-start-times": {
			slug: "sync-videos-different-start-times",
			eyebrow: "Precise synchronization",
			title: "How to sync videos that started at different times",
			seoTitle: "How to Sync Videos That Start at Different Times",
			metaDescription:
				"Align videos recorded at different start times with Sync Points, frame stepping, preview, and Sync Lock on iPhone or iPad.",
			summary:
				"Give every clip its own anchor at the same action, sound, or visual cue instead of forcing all timelines to use the same timestamp.",
			answer:
				"Move each video to the same real-world moment, save that position as its Sync Point, preview the relationship, and enable Sync Lock. The app preserves the offset between clips, so linked play and seeking keep the matching moments together even when the recordings began minutes apart.",
			steps: [
				{ title: "Find a shared event", description: "Look for a clap, impact, movement, spoken word, flash, or other moment that is clearly visible or audible in every recording." },
				{ title: "Position every timeline", description: "Drag each timeline to that event. Use −1 Frame and +1 Frame for compatible videos when the first alignment is close but not exact." },
				{ title: "Preview before saving", description: "Play the selected clips together and watch whether the shared motion stays visually aligned." },
				{ title: "Save and enable Sync Lock", description: "Store the Sync Points and turn on linked playback and seeking so each video keeps its own calculated offset." },
			],
			tips: [
				{ title: "Choose a sharp anchor", description: "A sudden contact or sound is easier to match than a long, gradual movement." },
				{ title: "Inspect at slow speed", description: "Slow playback and millisecond time help reveal small drift or a one-frame mismatch." },
				{ title: "Save checkpoints", description: "Mark important comparison moments so every video can return to its corresponding point quickly." },
			],
			relatedFeature: "video-sync-comparison",
		},
		"compare-sports-videos-frame-by-frame": {
			slug: "compare-sports-videos-frame-by-frame",
			eyebrow: "Sports & motion",
			title: "How to compare sports videos frame by frame",
			seoTitle: "Compare Sports Videos Frame by Frame on iPhone & iPad",
			metaDescription:
				"Compare golf swings, dance, fitness, running, and other sports videos side by side with sync points, slow motion, zoom, and frame stepping.",
			summary:
				"Align the same phase of a movement across multiple recordings, then slow down, zoom, and step every compatible video one frame at a time.",
			answer:
				"Use a layout that keeps each athlete, attempt, or camera angle visible, set Sync Points at the same phase of the movement, and enable Sync Lock. Global frame stepping then advances all compatible videos together, making posture, timing, trajectory, and contact easier to compare.",
			steps: [
				{ title: "Open the attempts or angles", description: "Add recordings from different sessions, athletes, edits, or camera positions to a layout with enough room for the important movement." },
				{ title: "Align the same phase", description: "Set Sync Points at a repeatable event such as takeoff, impact, release, landing, or a beat in choreography." },
				{ title: "Slow down and inspect", description: "Use linked playback, speed controls, millisecond time, zoom, and frame stepping to isolate the difference." },
				{ title: "Save or export the finding", description: "Create checkpoints for coaching notes or export the aligned layout as one comparison video." },
			],
			tips: [
				{ title: "Keep camera angles comparable", description: "A similar distance and viewpoint makes body position and trajectory easier to judge." },
				{ title: "Compare one question at a time", description: "Focus on timing, posture, footwork, equipment position, or another specific detail before moving on." },
				{ title: "Use a larger screen", description: "iPad or an external display gives each angle more room while the phone or tablet remains the controller." },
			],
			relatedFeature: "video-sync-comparison",
			relatedUseCase: "sports-motion-analysis",
		},
		"export-split-screen-video": {
			slug: "export-split-screen-video",
			eyebrow: "Create & share",
			title: "How to export multiple videos as one split-screen video",
			seoTitle: "How to Export Multiple Videos as One Split-Screen Video",
			metaDescription:
				"Turn a multi-video layout into one shareable split-screen video with ratio, resolution, frame rate, bitrate, trim, speed, audio, BGM, and watermark settings.",
			summary:
				"Arrange and synchronize the views first, then render the complete workspace as one video instead of exporting separate clips.",
			answer:
				"Open Split-Screen Export from the toolbar after the layout looks the way you want. Choose the output ratio, resolution, frame rate, bitrate, visual treatment, clip ranges, and audio mix, preview the result, then render one shareable file.",
			steps: [
				{ title: "Finish the composition", description: "Choose the layout and adjust crop, zoom, position, rotation, spacing, background, borders, and labels for every region." },
				{ title: "Set clip timing", description: "Select trim ranges and playback speed for individual videos. Keep Sync Points enabled when the comparison depends on aligned action." },
				{ title: "Choose video and audio settings", description: "Set aspect ratio, resolution, frame rate, bitrate, audible sources, volume, fades, BGM, and optional watermark text." },
				{ title: "Preview and export", description: "Create a short preview when needed, resolve any warnings, then render and share the completed split-screen video." },
			],
			tips: [
				{ title: "Match the destination", description: "Choose 9:16 for many vertical platforms, 16:9 for landscape video, or a custom/current ratio when the existing composition matters." },
				{ title: "Avoid unnecessary resolution", description: "Use the resolution viewers will actually see; higher settings take longer and create larger files." },
				{ title: "Plan the audio hierarchy", description: "Decide whether one source, several balanced sources, narration, or BGM should lead before starting the full render." },
			],
			relatedFeature: "split-screen-export",
		},
		"multi-camera-review-ipad": {
			slug: "multi-camera-review-ipad",
			eyebrow: "Multi-camera review",
			title: "How to review multiple camera angles on iPad",
			seoTitle: "How to Review Multiple Camera Angles on iPad",
			metaDescription:
				"Review takes, edits, performances, and multiple camera angles together on iPad with custom layouts, synchronized playback, checkpoints, and external display support.",
			summary:
				"Keep every take or angle visible on one larger canvas, synchronize the shared action, and use global controls to judge continuity without repeatedly switching files.",
			answer:
				"Choose an iPad layout that gives the important camera angles enough space, load each take into a region, and align shared action with Sync Points. Global seeking, cycle maximize, checkpoints, and external display output make it easier to inspect framing, timing, performance, and continuity.",
			steps: [
				{ title: "Group the material", description: "Prepare the takes, edits, or camera angles that answer the same review question and add them to the workspace." },
				{ title: "Choose or build the layout", description: "Use one of 144 presets or create a custom arrangement that gives the hero angle more room than secondary references." },
				{ title: "Synchronize the scene", description: "Anchor shared action, dialogue, slate, or movement with Sync Points and turn on linked playback." },
				{ title: "Review and record decisions", description: "Cycle through maximized views, add checkpoints, save the workspace, or export a reference comparison." },
			],
			tips: [
				{ title: "Give priority angles more space", description: "A custom layout can keep the main take large while continuity or reference angles remain visible." },
				{ title: "Use labels on an external display", description: "Show view numbers, file names, progress, and time when several reviewers need to identify sources quickly." },
				{ title: "Save one workspace per decision", description: "Separate bookmarks for performance, continuity, edit timing, or framing keep later reviews focused." },
			],
			relatedFeature: "multi-video-player",
			relatedUseCase: "multi-angle-review",
		},
		"play-rtsp-live-streams": {
			slug: "play-rtsp-live-streams",
			eyebrow: "Live sources",
			title: "How to play RTSP and live streams in a split screen",
			seoTitle: "Play RTSP, HLS & Live Streams in Split Screen on iPhone",
			metaDescription:
				"Open RTSP, HLS, M3U8, IPTV, and Xtream live sources on iPhone or iPad, place them in one split-screen layout, save bookmarks, and retry connections.",
			summary:
				"Add one supported stream address per line or browse an Xtream channel list, then place live sources beside local video and reference material.",
			answer:
				"Choose the live-stream source, paste an HLS, M3U8, or RTSP URL, or sign in to an Xtream account and select a channel. Add each source to a layout region, then save the working addresses and workspace as bookmarks for faster reuse.",
			steps: [
				{ title: "Confirm the source address", description: "Use a direct stream URL supplied by the broadcaster, camera, IPTV service, or system you are authorized to access." },
				{ title: "Add or browse the live source", description: "Paste stream links one per line, or connect an Xtream account to browse and search available channels." },
				{ title: "Place sources in the layout", description: "Mix live streams with other streams, local clips, images, web pages, PDFs, or music in any preset or custom region." },
				{ title: "Save and monitor", description: "Keep frequently used sources in history or bookmarks and allow retry behavior to reconnect after temporary network failures." },
			],
			tips: [
				{ title: "Prefer stable networks", description: "Several live sources compete for bandwidth and decoding resources; wired or strong Wi-Fi is usually more reliable." },
				{ title: "Test sources individually first", description: "Confirm each URL, credential, and codec works before opening the full multi-stream layout." },
				{ title: "Respect access rights", description: "Only open streams and channels you are authorized to view, and follow the provider’s terms and applicable law." },
			],
			relatedFeature: "iptv-streaming",
		},
		"video-pdf-web-multitasking": {
			slug: "video-pdf-web-multitasking",
			eyebrow: "Learning & reference",
			title: "How to view video, PDF, web pages, and images together",
			seoTitle: "View Video, PDF, Web Pages & Images Together on iPad",
			metaDescription:
				"Build an iPhone or iPad workspace that keeps video, PDF documents, web pages, images, live streams, and music visible together.",
			summary:
				"Use each split-screen region for a different source type so the lesson, document, browser, images, and supporting audio stay in one reusable workspace.",
			answer:
				"Choose a layout, add the main video to one region, then add a PDF, web page, image folder, live stream, or music source to the others. Every region keeps controls appropriate to its content, and a bookmark can restore the entire arrangement later.",
			steps: [
				{ title: "Choose the main reference", description: "Open the demonstration, lecture, tutorial, or local video that anchors the session." },
				{ title: "Add supporting sources", description: "Place notes, a PDF, web research, image folder, live source, or music in the remaining regions." },
				{ title: "Adjust each region", description: "Resize the layout, zoom documents or images, navigate the web page, and decide which media source should be audible." },
				{ title: "Save the complete setup", description: "Bookmark the sources, layout, and playback state so the same lesson or research workspace returns together." },
			],
			tips: [
				{ title: "Make reading regions larger", description: "PDF and web text usually need more width than a simple visual reference or audio-only source." },
				{ title: "Keep one audio focus", description: "Use global mute or solo-audio controls to prevent several media sources from competing." },
				{ title: "Use descriptive bookmarks", description: "Name saved workspaces by lesson, project, client, or research question so they remain easy to find." },
			],
			relatedFeature: "iptv-streaming",
			relatedUseCase: "learning-reference",
		},
	},
};

const zhHans: GuideContent = {
	hub: {
		eyebrow: "实用教程",
		title: "把多视频工作流真正用起来。",
		seoTitle: "iPhone 与 iPad 多视频播放器使用教程",
		metaDescription:
			"学习如何在 iPhone 和 iPad 上同时播放多个视频、同步片段、逐帧对比运动视频、导出分屏视频，以及播放 RTSP 和直播。",
		description:
			"围绕用户真正会搜索的问题，先给出最直接的答案，再说明完整操作和容易忽略的细节。",
		readLabel: "查看教程",
		homeLabel: "返回分屏播放器",
	},
	labels: {
		guides: "教程",
		directAnswer: "直接答案",
		steps: "操作步骤",
		tips: "让效果更好",
		relatedFeature: "了解相关功能",
		moreGuides: "更多实用教程",
		backToGuides: "返回全部教程",
	},
	pages: {
		"play-multiple-videos-iphone-ipad": {
			slug: "play-multiple-videos-iphone-ipad",
			eyebrow: "iPhone 与 iPad",
			title: "如何在 iPhone 或 iPad 上同时播放多个视频",
			seoTitle: "iPhone、iPad 如何同时播放多个视频｜分屏教程",
			metaDescription:
				"在 iPhone 或 iPad 上同时播放 2～36 个本地视频：选择分屏布局、添加片段、全局控制播放，并保存整个工作台。",
			summary: "把 2～36 个视频放进同一个横屏或竖屏布局，再统一播放、暂停、拖动进度、静音和切换内容。",
			answer:
				"打开分屏播放器，先根据视频数量与方向选择布局，再为每个区域添加一个来源。底部工具栏可以统一控制所有兼容视频。你可以从两个视频开始，在 iPad 上使用相同方法扩展为更密集的多画面布局。",
			steps: [
				{ title: "选择画面数量", description: "打开布局库，按照视频数量、竖屏、横屏向右或横屏向左筛选。第一次使用建议先选择简单的左右分屏。" },
				{ title: "为每个区域添加来源", description: "可以选择单个文件、相册、文件夹、播放列表、书签、直播、图片、PDF、网页或音乐。" },
				{ title: "统一控制所有视频", description: "通过底部工具栏统一播放、暂停、拖动进度、静音、变速、逐帧或切换下一个视频。" },
				{ title: "保存整个工作台", description: "创建书签，下次可以一起恢复来源、布局、播放位置和同步设置。" },
			],
			tips: [
				{ title: "让布局匹配素材方向", description: "竖屏视频放在纵向区域更容易看清，横屏视频则适合更宽的区域或横屏设备方向。" },
				{ title: "从合理清晰度开始", description: "同时流畅播放的数量会受到设备、编码、清晰度、帧率和网络质量影响。" },
				{ title: "密集画面优先使用 iPad", description: "iPhone 和 iPad 的控制方式一致，但 iPad 更大的画布更适合查看多个小画面。" },
			],
			relatedFeature: "multi-video-player",
		},
		"sync-videos-different-start-times": {
			slug: "sync-videos-different-start-times",
			eyebrow: "精准同步",
			title: "开始时间不同的视频，如何同步到同一个动作",
			seoTitle: "开始时间不同的视频如何同步播放｜同步点教程",
			metaDescription:
				"使用同步点、逐帧调整、同步预览和同步锁定，对齐录制开始时间不同的视频，并保持关联播放。",
			summary: "不要强迫所有视频使用同一个时间码，而是为每个片段在同一个动作、声音或画面提示处保存独立锚点。",
			answer:
				"把每个视频移动到同一个真实瞬间，将当前位置保存为同步点，预览同步效果后打开同步锁定。App 会保留片段之间的时间偏移，因此即使几段录像相差几分钟才开始，关联播放和拖动仍能让相同动作保持在一起。",
			steps: [
				{ title: "找到共同事件", description: "选择每段录像里都能清楚看到或听到的拍手、击球、落地、口令、闪光或其他瞬间。" },
				{ title: "分别定位时间线", description: "把每条时间线拖到共同事件附近，再对兼容视频使用“后退 1 帧”和“前进 1 帧”精调。" },
				{ title: "保存前先预览", description: "一起播放选中的视频，确认共同动作在视觉上已经对齐。" },
				{ title: "保存并打开同步锁定", description: "保存同步点并启用关联播放与关联拖动，让每个视频持续保持计算好的偏移。" },
			],
			tips: [
				{ title: "选择足够明确的锚点", description: "突然发生的接触或声音，比一段缓慢动作更容易精确匹配。" },
				{ title: "使用慢放与毫秒时间", description: "降低速度可以发现很小的漂移，毫秒时间有助于判断是否仍相差一帧。" },
				{ title: "保存重要存档点", description: "标记关键对比位置，让所有视频快速回到各自对应的瞬间。" },
			],
			relatedFeature: "video-sync-comparison",
		},
		"compare-sports-videos-frame-by-frame": {
			slug: "compare-sports-videos-frame-by-frame",
			eyebrow: "运动与动作",
			title: "如何逐帧对比运动、舞蹈或健身视频",
			seoTitle: "如何逐帧对比运动视频｜动作分析教程",
			metaDescription:
				"并排对比挥杆、舞蹈、健身、跑步等视频，使用同步点、慢放、缩放和逐帧控制查看动作差异。",
			summary: "把多次训练或多个角度对齐到动作的同一阶段，再统一慢放、缩放和逐帧移动。",
			answer:
				"选择能同时看清运动员、训练次数或机位的布局，在动作同一阶段设置同步点并打开同步锁定。全局逐帧会让所有兼容视频一起前进或后退一帧，更容易比较姿势、节奏、轨迹和接触瞬间。",
			steps: [
				{ title: "打开训练次数或机位", description: "把不同日期、运动员、剪辑版本或拍摄角度放进同一个布局，并为关键动作保留足够空间。" },
				{ title: "对齐动作阶段", description: "在起跳、击球、出手、落地或舞蹈节拍等可重复事件处设置同步点。" },
				{ title: "慢放并逐帧查看", description: "组合使用关联播放、倍速、毫秒时间、缩放和逐帧，隔离真正的动作差异。" },
				{ title: "保存或导出结论", description: "为教练意见添加存档点，或者把对齐后的布局导出成一支对比视频。" },
			],
			tips: [
				{ title: "尽量保持机位可比", description: "接近的距离与视角更容易判断身体位置和运动轨迹。" },
				{ title: "一次只回答一个问题", description: "先关注节奏、姿势、脚步、器材位置或另一个具体细节，再进行下一轮比较。" },
				{ title: "使用更大的屏幕", description: "iPad 或外接屏幕能给每个角度更多空间，同时让手机或平板继续作为控制器。" },
			],
			relatedFeature: "video-sync-comparison",
			relatedUseCase: "sports-motion-analysis",
		},
		"export-split-screen-video": {
			slug: "export-split-screen-video",
			eyebrow: "制作与分享",
			title: "如何把多个视频导出成一个分屏视频",
			seoTitle: "多个视频如何导出成一个分屏视频｜完整教程",
			metaDescription:
				"把多视频布局合成为一个可分享的视频，设置比例、清晰度、帧率、码率、裁切、速度、音频、BGM 和水印。",
			summary: "先完成画面排列和同步，再把整个工作台渲染成一个视频，而不是导出一组分散的片段。",
			answer:
				"布局达到想要的效果后，从工具栏打开分屏导出。依次选择输出比例、清晰度、帧率、码率、画面样式、片段范围和音频混合，预览结果后生成一个可以直接分享的文件。",
			steps: [
				{ title: "完成画面构图", description: "选择布局，并调整每个区域的裁切、缩放、位置、旋转、间距、背景、边框和信息显示。" },
				{ title: "设置片段时间", description: "分别选择裁切范围与播放速度；如果成片依赖动作同步，请保留同步点设置。" },
				{ title: "选择画质与声音", description: "设置比例、清晰度、帧率、码率、发声来源、音量、淡入淡出、BGM 和可选水印文字。" },
				{ title: "预览并导出", description: "必要时先生成短预览，处理导出前提示，再开始完整渲染和分享。" },
			],
			tips: [
				{ title: "根据发布位置选择比例", description: "竖屏平台通常适合 9:16，横屏视频适合 16:9；也可以保留当前或自定义比例。" },
				{ title: "不要盲目选择最高分辨率", description: "使用观众真正能看到的清晰度，可以缩短导出时间并减小文件。" },
				{ title: "提前规划声音主次", description: "开始完整导出前，决定由一个来源、多个均衡来源、旁白还是 BGM 作为声音主体。" },
			],
			relatedFeature: "split-screen-export",
		},
		"multi-camera-review-ipad": {
			slug: "multi-camera-review-ipad",
			eyebrow: "多机位回看",
			title: "如何在 iPad 上同时回看多个机位和版本",
			seoTitle: "iPad 多机位视频同时回看与对比教程",
			metaDescription:
				"在 iPad 上同时回看机位、表演、剪辑版本和参考素材，使用自定义布局、同步播放、存档点与外接屏幕。",
			summary: "把每个机位或版本保持在同一块大画布上，对齐共同动作，用全局控制检查连续性，不必来回切换文件。",
			answer:
				"选择一个能给重要机位足够空间的 iPad 布局，把每个版本放进独立区域，并通过同步点对齐共同动作。全局拖动、循环最大化、存档点和外接屏幕可以帮助你检查构图、节奏、表演和连续性。",
			steps: [
				{ title: "整理需要比较的素材", description: "把围绕同一个判断问题的拍摄机位、表演版本或剪辑版本加入工作台。" },
				{ title: "选择或创建布局", description: "从 144 种预设开始，也可以创建让主机位更大、参考机位更小的自定义布局。" },
				{ title: "同步共同场景", description: "使用同步点对齐动作、对白、场记板或其他共同提示，并打开关联播放。" },
				{ title: "回看并记录决定", description: "循环放大每个区域、添加存档点、保存工作台，或者导出一支参考对比视频。" },
			],
			tips: [
				{ title: "给主机位更多空间", description: "自定义布局可以让主画面保持醒目，同时一直保留连续性和参考角度。" },
				{ title: "外接屏幕显示信息", description: "多人回看时可以展示画面序号、文件名、进度与时间，快速确认每个来源。" },
				{ title: "按照判断目标保存工作台", description: "将表演、连续性、剪辑节奏和构图分开保存，更容易在下一次回看时保持专注。" },
			],
			relatedFeature: "multi-video-player",
			relatedUseCase: "multi-angle-review",
		},
		"play-rtsp-live-streams": {
			slug: "play-rtsp-live-streams",
			eyebrow: "直播来源",
			title: "如何在分屏中播放 RTSP、HLS 和直播",
			seoTitle: "iPhone 如何分屏播放 RTSP、HLS 与直播",
			metaDescription:
				"在 iPhone 或 iPad 上打开 RTSP、HLS、M3U8、IPTV 与 Xtream 直播，将多个来源放进同一个分屏布局并保存书签。",
			summary: "每行添加一个受支持的直播地址，或者浏览 Xtream 频道列表，再把直播和本地视频、参考资料放在一起。",
			answer:
				"选择直播来源，粘贴 HLS、M3U8 或 RTSP 地址，或者登录 Xtream 账号选择频道。将每个直播放进独立区域，再把可以正常播放的地址和整个工作台保存为书签，方便下次快速恢复。",
			steps: [
				{ title: "确认直播地址", description: "使用广播方、摄像头、IPTV 服务或你有权访问的系统提供的直接播放地址。" },
				{ title: "添加或浏览来源", description: "每行粘贴一个直播地址，或者连接 Xtream 账号后浏览、搜索并选择频道。" },
				{ title: "放进分屏布局", description: "在任意预设或自定义区域中组合直播、本地视频、图片、网页、PDF 或音乐。" },
				{ title: "保存并持续监看", description: "把常用来源保存在历史或书签中，并使用重试能力处理暂时的网络中断。" },
			],
			tips: [
				{ title: "优先使用稳定网络", description: "多个直播会同时占用带宽和解码资源，有线连接或信号良好的 Wi-Fi 通常更可靠。" },
				{ title: "先单独测试每个来源", description: "搭建完整多直播布局前，先确认每个地址、账号和编码都可以正常播放。" },
				{ title: "遵守访问权限", description: "只打开你有权观看的直播和频道，并遵守服务方条款与适用法律。" },
			],
			relatedFeature: "iptv-streaming",
		},
		"video-pdf-web-multitasking": {
			slug: "video-pdf-web-multitasking",
			eyebrow: "学习与参考",
			title: "如何同时查看视频、PDF、网页和图片",
			seoTitle: "iPad 如何同时查看视频、PDF、网页和图片",
			metaDescription:
				"在 iPhone 或 iPad 上建立多任务工作台，让视频、PDF 文档、网页、图片、直播和音乐保持同时可见。",
			summary: "让每个分屏区域承载不同类型的来源，把课程、文档、网页、图片和声音放进同一个可恢复的工作台。",
			answer:
				"先选择布局，把主要视频放进一个区域，再为其他区域添加 PDF、网页、图片文件夹、直播或音乐。每个区域会保留适合自身内容的控制，书签则可以在下次一起恢复整个组合。",
			steps: [
				{ title: "选择主要参考内容", description: "打开作为核心的演示、课程、教程或本地视频。" },
				{ title: "添加辅助来源", description: "在剩余区域放入笔记、PDF、网页资料、图片文件夹、直播或音乐。" },
				{ title: "分别调整每个区域", description: "调整布局尺寸、缩放文档或图片、浏览网页，并决定哪个媒体来源应该发声。" },
				{ title: "保存完整组合", description: "把来源、布局和播放状态保存为书签，下次一起恢复课程或研究工作台。" },
			],
			tips: [
				{ title: "给阅读区域更多空间", description: "PDF 和网页文字通常比简单图片参考或纯音乐来源更需要宽度。" },
				{ title: "保持一个声音焦点", description: "使用全局静音或单独声音循环，避免多个媒体来源互相干扰。" },
				{ title: "使用容易识别的书签名称", description: "按照课程、项目、客户或研究问题命名，之后会更容易找到。" },
			],
			relatedFeature: "iptv-streaming",
			relatedUseCase: "learning-reference",
		},
	},
};

const toTraditional = OpenCC.Converter({ from: "cn", to: "tw" });
const normalizeTaiwanTerms = (text: string) =>
	[
		["視頻", "影片"],
		["布局", "排版"],
		["導出", "匯出"],
		["屏幕", "螢幕"],
		["文件", "檔案"],
		["添加", "加入"],
		["用戶", "使用者"],
		["默認", "預設"],
	].reduce((result, [from, to]) => result.replaceAll(from, to), text);
const convertToTraditional = (value: unknown): unknown => {
	if (typeof value === "string") return normalizeTaiwanTerms(toTraditional(value));
	if (Array.isArray(value)) return value.map(convertToTraditional);
	if (value && typeof value === "object") {
		return Object.fromEntries(
			Object.entries(value).map(([key, item]) => [key, convertToTraditional(item)]),
		);
	}
	return value;
};

const zhHant = convertToTraditional(zhHans) as GuideContent;

export const guideContent: Record<Locale, GuideContent> = {
	"en-US": en,
	"zh-Hans": zhHans,
	"zh-Hant": zhHant,
};

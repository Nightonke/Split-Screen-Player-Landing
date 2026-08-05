import type { Locale } from "./locales";
import * as OpenCC from "opencc-js";

export const featureSlugs = [
	"multi-video-player",
	"global-video-controls",
	"video-sync-comparison",
	"split-screen-export",
	"iptv-streaming",
] as const;

export const useCaseSlugs = [
	"sports-motion-analysis",
	"multi-angle-review",
	"learning-reference",
] as const;

export type FeatureSlug = (typeof featureSlugs)[number];
export type UseCaseSlug = (typeof useCaseSlugs)[number];

export interface MarketingDetailPage {
	kindLabel: string;
	title: string;
	seoTitle: string;
	metaDescription: string;
	intro: string;
	promise: string;
	imageIndex: number;
	imageAlt: string;
	highlights: Array<{ title: string; description: string }>;
	steps: Array<{ title: string; description: string }>;
	closingTitle: string;
	closingDescription: string;
}

export interface MarketingContent {
	nav: {
		features: string;
		useCases: string;
		faq: string;
		getApp: string;
		menu: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		description: string;
		primaryCta: string;
		ratingText: string;
		privacyText: string;
		soundHint: string;
	};
	capabilitiesLabel: string;
	capabilities: string[];
	chapters: Array<{
		id: string;
		number: string;
		kicker: string;
		title: string;
		description: string;
		points: string[];
		imageIndex: number;
		imageAlt: string;
		videoSrc?: string;
		posterSrc?: string;
		visualSrc?: string;
		visualCaption?: string;
		linkLabel: string;
		linkPath: string;
	}>;
	useCases: {
		eyebrow: string;
		title: string;
		description: string;
		items: Array<{
			slug: UseCaseSlug;
			number: string;
			title: string;
			description: string;
			imageIndex: number;
			linkLabel: string;
		}>;
	};
	comparison: {
		eyebrow: string;
		title: string;
		columns: string[];
		rows: Array<{ label: string; values: string[] }>;
		note: string;
	};
	closing: {
		eyebrow: string;
		title: string;
		description: string;
		cta: string;
	};
	footerTagline: string;
	detailLabels: {
		home: string;
		keyBenefits: string;
		howItWorks: string;
		exploreMore: string;
		backHome: string;
	};
	details: {
		features: Record<FeatureSlug, MarketingDetailPage>;
		useCases: Record<UseCaseSlug, MarketingDetailPage>;
	};
}

const en: MarketingContent = {
	nav: {
		features: "Features",
		useCases: "Use cases",
		faq: "FAQ",
		getApp: "Get the app",
		menu: "Menu",
	},
	hero: {
		eyebrow: "Multi-video workspace · iPhone + iPad",
		title: "More videos. One screen.\nA whole lot more fun.",
		description:
			"Play, align, compare, and export up to 36 videos on one screen. Choose from 144 portrait and landscape layouts, then mix in images, live streams, web pages, PDFs, and music.",
		primaryCta: "Download free",
		ratingText: "4.8 ★ from 63 ratings",
		privacyText: "No data collected",
		soundHint: "Watch 3 videos at once with Split Screen Player",
	},
	capabilitiesLabel: "Inside the workspace",
	capabilities: [
		"2–36 videos",
		"144 layouts",
		"Custom layouts",
		"Portrait + landscape",
		"Video playlists",
		"Sort + shuffle",
		"Repeat playback",
		"Global playback controls",
		"Sync Point",
		"Sync Lock",
		"Frame stepping",
		"Millisecond timing",
		"Volume normalization",
		"Multi-ratio export",
		"Trim + speed",
		"BGM + audio mixing",
		"MP4 · MOV · MKV · WebM",
		"HLS · M3U8 · RTSP",
		"External display",
		"Bookmark restore",
		"Checkpoints",
		"Images · PDFs · web",
		"Custom bottom toolbar",
		"Sleep timer",
	],
	chapters: [
		{
			id: "play",
			number: "01",
			kicker: "Multiple videos · One screen",
			title: "Watch up to 36 videos on one screen.",
			description:
				"Watch up to 36 videos at once with as many as 144 layouts. Built for iPhone and iPad in portrait or landscape, with the option to create your own layouts.",
			points: [
				"2–36 videos at once",
				"144 layouts + custom layouts",
				"Portrait and landscape",
				"iPad support",
				"Screen casting support",
			],
			imageIndex: 1,
			imageAlt: "Multiple videos playing together in Split Screen Player",
			videoSrc: "/assets/videos/chapter-play-preview.mp4",
			posterSrc: "/assets/videos/chapter-play-poster.jpg",
			linkLabel: "Explore multi-video playback",
			linkPath: "features/multi-video-player",
		},
		{
			id: "control",
			number: "02",
			kicker: "Global control · Fast and simple",
			title: "Control every video from one place.",
			description:
				"Use global progress controls, Sync Lock, and more to change every video's progress, playback state, speed, or active video in one move. Ideal for reviewing different edits, takes, camera angles, or reference footage.",
			points: ["Global progress control", "Sync Lock"],
			imageIndex: 9,
			imageAlt: "Global playback controls for multiple videos",
			visualSrc: "/assets/chapters/chapter-control.jpg",
			visualCaption: "Customize the bottom controls and manage every video your way",
			linkLabel: "Explore global controls",
			linkPath: "features/global-video-controls",
		},
		{
			id: "align",
			number: "03",
			kicker: "Precise sync · Match the action",
			title: "Align the action, not just the time.",
			description:
				"Use Sync Point and continuous sync correction to keep different videos anchored to the same movement. Ideal for comparing sports, dance, fitness, lessons, and more.",
			points: ["Sync Point", "Continuous sync correction"],
			imageIndex: 4,
			imageAlt: "Multiple videos precisely synchronized to the same action",
			visualSrc: "/assets/chapters/chapter-sync.jpg",
			visualCaption: "Set a sync point and bring every video to the same moment",
			linkLabel: "Explore precise synchronization",
			linkPath: "features/video-sync-comparison",
		},
		{
			id: "export",
			number: "04",
			kicker: "Export · Share the whole view",
			title: "Turn many views into one finished video.",
			description:
				"Combine the multi-video playback on screen into a single video, with control over framing, resolution, frame rate, bitrate, borders, background, watermark, BGM, and audio sources. Ideal for comparison videos, tutorials, reaction videos, or short-form content.",
			points: ["Multiple aspect ratios", "Per-clip trim and speed", "Audio mix + BGM"],
			imageIndex: 6,
			imageAlt: "Split-screen export settings",
			visualSrc: "/assets/chapters/chapter-export.jpg",
			linkLabel: "See split-screen export",
			linkPath: "features/split-screen-export",
		},
		{
			id: "streams",
			number: "05",
			kicker: "Video · Images · Web · Live · PDF · Music",
			title: "More than video. A multitasking workspace.",
			description:
				"Combine local videos, live streams, RTSP, Xtream channels, images, web pages, PDFs, and music in the same layout.",
			points: [
				"IPTV + Xtream Codes",
				"HLS / M3U8 / RTSP",
				"Images, web pages, PDFs, and music",
			],
			imageIndex: 8,
			imageAlt: "Videos, images, a web page, and a PDF in one workspace",
			visualSrc: "/assets/chapters/chapter-media.jpg",
			visualCaption: "View PDFs, web pages, and photo sets together",
			linkLabel: "Explore media and streaming support",
			linkPath: "features/iptv-streaming",
		},
	],
	useCases: {
		eyebrow: "Built for comparison",
		title: "When one view leaves something out.",
		description:
			"Split Screen Player is useful anywhere timing, angle, or context changes what you see.",
		items: [
			{
				slug: "sports-motion-analysis",
				number: "01",
				title: "Sports & motion",
				description: "Compare form, timing, posture, or technique from multiple sessions and angles.",
				imageIndex: 4,
				linkLabel: "Open the sports workflow",
			},
			{
				slug: "multi-angle-review",
				number: "02",
				title: "Takes & camera angles",
				description: "Review edits, performances, references, and multi-camera footage on one timeline.",
				imageIndex: 1,
				linkLabel: "Open the review workflow",
			},
			{
				slug: "learning-reference",
				number: "03",
				title: "Learning & reference",
				description: "Keep a lesson, source video, PDF, image, and web page visible together.",
				imageIndex: 7,
				linkLabel: "Open the learning workflow",
			},
		],
	},
	comparison: {
		eyebrow: "The workflow gap",
		title: "Split Screen Player is the best way to watch multiple videos at once.",
		columns: ["What you need", "System Picture in Picture", "Video editor", "Split Screen Player"],
		rows: [
			{ label: "2–36 views together", values: ["Up to 2", "Partial", "Supported"] },
			{ label: "Live synchronized playback", values: ["Not supported", "Not supported", "Supported"] },
			{ label: "Frame-level comparison", values: ["Manual", "Supported", "Supported"] },
			{ label: "Custom multi-view layouts", values: ["Not supported", "Supported", "Supported"] },
			{ label: "Instant split-screen export", values: ["Not supported", "Supported", "Supported"] },
			{ label: "Streams, PDFs, and web pages", values: ["Partial", "Supported", "Supported"] },
		],
		note: "“Partial” and “Manual” describe the typical workflow. Individual apps may vary.",
	},
	closing: {
		eyebrow: "Your multi-view workspace starts here",
		title: "See the whole moment.",
		description: "Download free, open two videos, and build your first synchronized comparison.",
		cta: "Download Split Screen Player",
	},
	footerTagline: "One screen for every angle, source, and moment.",
	detailLabels: {
		home: "Home",
		keyBenefits: "What it gives you",
		howItWorks: "How the workflow works",
		exploreMore: "Explore more",
		backHome: "Back to the full product story",
	},
	details: {
		features: {
			"multi-video-player": {
				kindLabel: "Multi-video playback",
				title: "A multi-video player built for the whole picture.",
				seoTitle: "Multi-Video Player for iPhone & iPad | Split Screen Player",
				metaDescription:
					"Play 2 to 36 videos at once on iPhone and iPad with 144 layouts, custom split-screen arrangements, playlists, and external display support.",
				intro:
					"Most video players are designed around one file. Split Screen Player gives every clip its own view while keeping the full workspace under one set of controls.",
				promise: "From two references to a 36-view wall, the layout stays yours.",
				imageIndex: 1,
				imageAlt: "Multiple videos playing on one screen",
				highlights: [
					{ title: "Scale from 2 to 36", description: "Use a simple side-by-side view or fill an iPad with a dense multi-view layout." },
					{ title: "Start with 144 layouts", description: "Choose portrait or landscape presets, resize dividers, or build a custom layout." },
					{ title: "Control the workspace", description: "Reorder sources, cycle maximized views, normalize volume, and save bookmarks." },
				],
				steps: [
					{ title: "Select the videos", description: "Open individual files, albums, folders, playlists, or saved bookmarks." },
					{ title: "Choose a layout", description: "Pick a preset or create a custom grid for the number and shape of views." },
					{ title: "Play as one system", description: "Use global playback, progress, mute, and display controls across the workspace." },
				],
				closingTitle: "Stop switching between players.",
				closingDescription: "Put every clip on one screen and keep the context visible.",
			},
			"global-video-controls": {
				kindLabel: "Global controls",
				title: "Control every video from one toolbar.",
				seoTitle: "Global Multi-Video Controls for iPhone & iPad | Split Screen Player",
				metaDescription:
					"Customize one bottom toolbar to play, pause, seek, mute, step, rotate, reorder, and manage every video in a split-screen workspace.",
				intro:
					"Multi-video playback should not mean repeating the same gesture in every view. The bottom toolbar turns common actions into one-tap commands for the complete workspace.",
				promise: "Build the controls you use most, then apply them to every view.",
				imageIndex: 9,
				imageAlt: "Customizable bottom controls for every video",
				highlights: [
					{ title: "Customize the toolbar", description: "Add, remove, and reorder the actions that belong in your workflow." },
					{ title: "Act on every view", description: "Play, seek, step, mute, rotate, or switch content across compatible players." },
					{ title: "Keep advanced tools close", description: "Open checkpoints, sync, export, layout sizing, and comparison tools without leaving playback." },
				],
				steps: [
					{ title: "Open Bottom Buttons", description: "Enter the toolbar editor from the player settings." },
					{ title: "Choose and reorder", description: "Move actions between Added and Not Added, then drag them into your preferred order." },
					{ title: "Control the workspace", description: "Use the saved toolbar whenever multiple sources are open." },
				],
				closingTitle: "One gesture should be enough.",
				closingDescription: "Turn a wall of independent players into one coherent workspace.",
			},
			"video-sync-comparison": {
				kindLabel: "Sync & comparison",
				title: "Compare the same moment, not just two videos.",
				seoTitle: "Sync and Compare Videos Frame by Frame | Split Screen Player",
				metaDescription:
					"Synchronize multiple videos with Sync Point and Sync Lock, then compare motion frame by frame with millisecond timing, zoom, and checkpoints.",
				intro:
					"Different recordings rarely begin at the same instant. Sync Point lets you define the moment that matters in each clip, while Sync Lock keeps the relationship intact.",
				promise: "Match the movement once, then inspect every angle together.",
				imageIndex: 4,
				imageAlt: "Videos synchronized for comparison",
				highlights: [
					{ title: "Offset with Sync Point", description: "Anchor each clip to the same action even when the recordings started at different times." },
					{ title: "Stay aligned", description: "Use pre-roll and continuous correction to maintain synchronization during playback." },
					{ title: "Inspect frame by frame", description: "Step in either direction, display milliseconds, zoom, and save checkpoints." },
				],
				steps: [
					{ title: "Find the anchor", description: "Move each video to the shared motion, sound, or visual cue." },
					{ title: "Set and lock", description: "Save Sync Points and enable Sync Lock for linked seeking and playback." },
					{ title: "Review the delta", description: "Slow down, step frame by frame, and focus on the difference between angles." },
				],
				closingTitle: "The important difference can last one frame.",
				closingDescription: "Keep every angle aligned long enough to see it.",
			},
			"split-screen-export": {
				kindLabel: "Split-screen export",
				title: "Export the comparison exactly as you see it.",
				seoTitle: "Split-Screen Video Export on iPhone & iPad | Split Screen Player",
				metaDescription:
					"Export multi-video layouts as one shareable video with crop, zoom, trim, speed, resolution, frame rate, borders, watermark, BGM, and audio controls.",
				intro:
					"The workspace does not have to remain inside the app. Split-screen export turns the complete layout into a single video for a tutorial, review, reaction, or short-form post.",
				promise: "Your arrangement, timing, framing, and audio become one finished file.",
				imageIndex: 5,
				imageAlt: "Split-screen video export controls",
				highlights: [
					{ title: "Keep the composition", description: "Preserve layout, crop, rotation, zoom, position, background, borders, and labels." },
					{ title: "Shape every clip", description: "Set trim ranges, playback speed, and framing independently for each source." },
					{ title: "Finish the sound", description: "Choose audio sources, balance volume, add fades, and include background music." },
				],
				steps: [
					{ title: "Arrange the view", description: "Build the layout and frame each source the way the audience should see it." },
					{ title: "Choose export settings", description: "Set ratio, resolution, frame rate, bitrate, visual treatment, and audio." },
					{ title: "Create one file", description: "Render the synchronized multi-view workspace as a shareable video." },
				],
				closingTitle: "The comparison is already edited.",
				closingDescription: "Turn the view on your screen into the video you send.",
			},
			"iptv-streaming": {
				kindLabel: "Multitasking workspace",
				title: "One workspace for streams, files, and reference material.",
				seoTitle: "IPTV, Xtream, M3U8 & RTSP Multi-View Player | Split Screen Player",
				metaDescription:
					"Play IPTV, Xtream Codes, HLS, M3U8, and RTSP streams beside local videos, images, PDFs, and web pages on iPhone and iPad.",
				intro:
					"Comparison often involves more than local clips. Load stream links, IPTV channels, image folders, PDFs, and web references without leaving the multi-view layout.",
				promise: "Keep live and static sources visible in the same place.",
				imageIndex: 9,
				imageAlt: "IPTV and streaming sources in a multi-view layout",
				highlights: [
					{ title: "Connect live sources", description: "Open HLS, M3U8, and RTSP links with bookmarks and automatic retry." },
					{ title: "Browse IPTV", description: "Load and search IPTV or Xtream Codes channel lists inside the app." },
					{ title: "Mix source types", description: "Place streams beside local video, images, PDFs, audio, and web pages." },
				],
				steps: [
					{ title: "Add the source", description: "Paste a stream link, connect IPTV, or choose a local file or reference." },
					{ title: "Place it in the layout", description: "Mix source types inside any preset or custom split-screen arrangement." },
					{ title: "Save the workspace", description: "Bookmark the selected sources and layout so the full setup returns together." },
				],
				closingTitle: "Your references do not all live in one format.",
				closingDescription: "Your workspace should still keep them together.",
			},
		},
		useCases: {
			"sports-motion-analysis": {
				kindLabel: "Use case / sports & motion",
				title: "See what changed between repetitions.",
				seoTitle: "Sports Video Comparison & Motion Analysis | Split Screen Player",
				metaDescription:
					"Compare sports, dance, fitness, and technique videos side by side with synchronized playback, frame stepping, zoom, and checkpoints.",
				intro:
					"Small changes in timing, posture, balance, or range of motion are hard to spot when clips play one after another. Put them on the same timeline instead.",
				promise: "Compare sessions, athletes, and angles without losing the motion.",
				imageIndex: 4,
				imageAlt: "Sports videos aligned for motion comparison",
				highlights: [
					{ title: "Match the repetition", description: "Set Sync Points at the same phase of the movement across every recording." },
					{ title: "Control the pace", description: "Use linked playback, speed controls, frame stepping, and millisecond timing." },
					{ title: "Share the feedback", description: "Export the aligned views as one annotated comparison video." },
				],
				steps: [
					{ title: "Open each angle", description: "Choose recordings from different sessions, athletes, or camera positions." },
					{ title: "Anchor the action", description: "Align the same movement and lock the clips together." },
					{ title: "Review and export", description: "Inspect the frames that matter and create one comparison file." },
				],
				closingTitle: "Technique becomes clearer when timing matches.",
				closingDescription: "Bring every repetition onto the same screen.",
			},
			"multi-angle-review": {
				kindLabel: "Use case / takes & camera angles",
				title: "Review every take without leaving the scene.",
				seoTitle: "Multi-Angle Video Review for iPhone & iPad | Split Screen Player",
				metaDescription:
					"Review camera angles, performances, edits, takes, and reference clips together with synchronized multi-video playback and custom layouts.",
				intro:
					"Switching files hides continuity. A multi-view layout keeps performances, framing, timing, and edits visible at the same time.",
				promise: "Make decisions with every angle still in view.",
				imageIndex: 1,
				imageAlt: "Multiple camera angles displayed together",
				highlights: [
					{ title: "See every take", description: "Play alternative performances, edits, or camera positions side by side." },
					{ title: "Keep continuity visible", description: "Synchronize shared action and use linked seeking to compare exact beats." },
					{ title: "Build reference cuts", description: "Create layouts for review, reactions, tutorials, or short-form material." },
				],
				steps: [
					{ title: "Gather the footage", description: "Open selected takes, edits, camera angles, and reference clips." },
					{ title: "Arrange for the decision", description: "Choose a layout that makes framing, timing, or performance easy to compare." },
					{ title: "Save or export", description: "Bookmark the review workspace or render it as a single split-screen file." },
				],
				closingTitle: "Keep the scene intact while you compare it.",
				closingDescription: "One timeline makes every angle easier to judge.",
			},
			"learning-reference": {
				kindLabel: "Use case / learning & reference",
				title: "Keep the lesson and the source material together.",
				seoTitle: "Multi-View Learning & Reference Workspace | Split Screen Player",
				metaDescription:
					"View lesson videos, reference clips, PDFs, images, web pages, and streams together in one customizable iPhone or iPad workspace.",
				intro:
					"Learning breaks down when the reference disappears behind another app. Keep the demonstration, notes, source material, and your own recording visible together.",
				promise: "Less switching. More context.",
				imageIndex: 7,
				imageAlt: "Videos, web pages, PDFs, and images in one split-screen workspace",
				highlights: [
					{ title: "Mix formats", description: "Combine local video with images, PDF documents, web pages, streams, and audio." },
					{ title: "Build your layout", description: "Use a preset or custom arrangement that fits the lesson and device." },
					{ title: "Return instantly", description: "Save selected sources and the layout together as a reusable bookmark." },
				],
				steps: [
					{ title: "Choose the lesson", description: "Open the main demonstration, lecture, or reference video." },
					{ title: "Add the context", description: "Place notes, PDFs, web references, images, or another recording beside it." },
					{ title: "Save the workspace", description: "Bookmark the complete setup for the next study or practice session." },
				],
				closingTitle: "Reference material works better when it stays visible.",
				closingDescription: "Build one workspace for the whole lesson.",
			},
		},
	},
};

const zhHans: MarketingContent = {
	nav: { features: "功能", useCases: "使用场景", faq: "常见问题", getApp: "下载 App", menu: "菜单" },
	hero: {
		eyebrow: "多视频工作台 · iPhone + iPad",
		title: "一屏看多片\n体验爽翻天",
		description: "在一个屏幕上播放、对齐、对比和导出最多 36 个视频。横屏、竖屏共 144 种布局，想怎么看就怎么看。还可以同时查看图片、直播、网页和 PDF，边看边听音乐。",
		primaryCta: "免费下载",
		ratingText: "4.8 ★ · 63 个评分",
		privacyText: "不收集数据",
		soundHint: "使用分屏播放器同时观看3个视频",
	},
	capabilitiesLabel: "工作台能力",
	capabilities: [
		"2～36 个视频",
		"144 种布局",
		"自定义布局",
		"横屏与竖屏",
		"视频播放列表",
		"排序与随机播放",
		"循环播放",
		"全局播放控制",
		"同步点",
		"同步锁定",
		"逐帧回看",
		"毫秒级时间",
		"音量均衡",
		"多比例导出",
		"裁剪与变速",
		"BGM 与音频混合",
		"MP4 · MOV · MKV · WebM",
		"HLS · M3U8 · RTSP",
		"外接屏幕",
		"书签恢复",
		"存档点",
		"图片 · PDF · 网页",
		"自定义底部工具栏",
		"定时关闭",
	],
	chapters: [
		{
			id: "play", number: "01", kicker: "多个视频 · 一块屏幕", title: "在一块屏幕上观看最多36个视频。",
			description: "用多达144种布局同时观看最多36个视频，支持iPhone/iPad和横屏竖屏，也可以创建自己的布局。",
			points: ["2～36 个视频同时播放", "144 种布局 + 自定义布局", "横屏与竖屏", "支持 iPad", "支持投屏播放"],
			imageIndex: 1, imageAlt: "分屏播放器同时播放多个视频",
			videoSrc: "/assets/videos/chapter-play-preview.mp4", posterSrc: "/assets/videos/chapter-play-poster.jpg",
			linkLabel: "了解多视频播放", linkPath: "features/multi-video-player",
		},
		{
			id: "control", number: "02", kicker: "全局控制 · 方便快捷", title: "一手把控所有视频。",
			description: "通过全局进度控制、同步锁定等功能，一键控制所有视频的进度、播放状态、倍速或者是切换视频。适合回看不同剪辑版本、拍摄片段、机位角度或参考素材。",
			points: ["全局进度控制", "同步锁定"],
			imageIndex: 9, imageAlt: "同时控制多个视频的播放进度和状态",
			visualSrc: "/assets/chapters/chapter-control.jpg",
			visualCaption: "自定义顺手的底部按键，随心控制所有视频",
			linkLabel: "了解全局控制", linkPath: "features/global-video-controls",
		},
		{
			id: "align", number: "03", kicker: "精准同步 · 匹配动作", title: "对齐动作，而不只是对齐时间。",
			description: "通过同步点、持续同步校正，让不同视频始终锚定在同一个动作上。适合对比运动、舞蹈、健身、教学等视频。",
			points: ["同步点", "持续同步校正"],
			imageIndex: 4, imageAlt: "将多个视频精准同步到同一个动作",
			visualSrc: "/assets/chapters/chapter-sync.jpg",
			visualCaption: "设置同步点，让所有视频同时抵达同一瞬间",
			linkLabel: "了解精准同步", linkPath: "features/video-sync-comparison",
		},
		{
			id: "export", number: "04", kicker: "导出 · 分享完整画面", title: "把多画面，变成一支完整视频。",
			description: "把屏幕上的多视频播放合成为一个视频，并控制画面位置、清晰度、帧率、码率、边框、背景、水印、BGM 和音频来源。适合制作对比视频、教程视频、反应视频或短视频素材。",
			points: ["多种画面比例", "每段视频单独裁剪和变速", "音频混合 + BGM"],
			imageIndex: 6, imageAlt: "分屏视频导出设置",
			visualSrc: "/assets/chapters/chapter-export.jpg",
			linkLabel: "查看分屏导出", linkPath: "features/split-screen-export",
		},
		{
			id: "streams", number: "05", kicker: "视频 · 图片 · 网页 · 直播 · PDF · 音乐", title: "不止视频，更是多任务工作台。",
			description: "在同一个布局中组合本地视频、直播、RTSP、Xtream 频道、图片、网页、PDF和音乐。",
			points: ["IPTV + Xtream Codes", "HLS / M3U8 / RTSP", "图片、网页、PDF、音乐"],
			imageIndex: 8, imageAlt: "在同一个工作台中查看视频、图片、网页和 PDF",
			visualSrc: "/assets/chapters/chapter-media.jpg",
			visualCaption: "同时查看 PDF、网页与写真图片",
			linkLabel: "了解媒体与直播支持", linkPath: "features/iptv-streaming",
		},
	],
	useCases: {
		eyebrow: "为对比而生", title: "当一个画面不足以说明问题。", description: "只要时间、角度或上下文会改变结果，分屏播放器就能派上用场。",
		items: [
			{ slug: "sports-motion-analysis", number: "01", title: "运动与动作分析", description: "从多个训练阶段和角度对比动作、节奏、姿势与技术细节。", imageIndex: 4, linkLabel: "查看运动分析工作流" },
			{ slug: "multi-angle-review", number: "02", title: "多机位与多个版本", description: "在同一条时间线上回看不同剪辑、表演、机位和参考素材。", imageIndex: 1, linkLabel: "查看多角度工作流" },
			{ slug: "learning-reference", number: "03", title: "学习与参考", description: "让课程、参考视频、PDF、图片和网页一直同时可见。", imageIndex: 7, linkLabel: "查看学习工作流" },
		],
	},
	comparison: {
		eyebrow: "工作流差距", title: "在同时看多个视频方面，分屏播放器是最好的",
		columns: ["你需要的能力", "系统画中画", "视频编辑器", "分屏播放器"],
		rows: [
			{ label: "2～36 个画面同屏", values: ["最多2个", "部分支持", "支持"] },
			{ label: "实时同步播放", values: ["不支持", "不支持", "支持"] },
			{ label: "逐帧对比", values: ["手动", "支持", "支持"] },
			{ label: "自定义多画面布局", values: ["不支持", "支持", "支持"] },
			{ label: "直接导出分屏视频", values: ["不支持", "支持", "支持"] },
			{ label: "直播流、PDF 与网页", values: ["部分支持", "支持", "支持"] },
		],
		note: "“部分支持”和“手动”描述常见工作流，具体播放器或编辑器可能有所不同。",
	},
	closing: {
		eyebrow: "你的多画面工作台从这里开始", title: "看见完整的瞬间。",
		description: "免费下载，打开两个视频，完成第一次同步对比。", cta: "下载分屏播放器",
	},
	footerTagline: "一个屏幕，容纳每个角度、来源和瞬间。",
	detailLabels: { home: "首页", keyBenefits: "你会得到什么", howItWorks: "工作流如何运行", exploreMore: "继续探索", backHome: "返回完整产品介绍" },
	details: {
		features: {
			"multi-video-player": {
				kindLabel: "多视频播放", title: "为完整画面而生的多视频播放器。",
				seoTitle: "iPhone 与 iPad 多视频播放器｜分屏播放器",
				metaDescription: "在 iPhone 和 iPad 上同时播放 2～36 个视频，使用 144 种布局、自定义分屏、播放列表和外接屏幕。",
				intro: "大多数播放器围绕一个文件设计。分屏播放器为每个视频保留独立画面，同时用一套控制管理整个工作台。",
				promise: "从两个参考视频到 36 画面墙，布局始终由你决定。", imageIndex: 1, imageAlt: "同一屏幕播放多个视频",
				highlights: [
					{ title: "从 2 扩展到 36", description: "快速并排两个视频，或者在 iPad 上搭建密集的多画面工作台。" },
					{ title: "144 种布局起步", description: "选择横屏或竖屏模板、调整分隔线，或者创建自定义布局。" },
					{ title: "控制整个工作台", description: "拖放内容、循环放大、音量均衡，并保存完整书签。" },
				],
				steps: [
					{ title: "选择视频", description: "打开文件、相册、文件夹、播放列表或保存的书签。" },
					{ title: "选择布局", description: "根据画面数量和比例选择模板或创建自定义网格。" },
					{ title: "作为一个系统播放", description: "通过全局播放、进度、静音和显示控制管理全部画面。" },
				],
				closingTitle: "不用再来回切换播放器。", closingDescription: "把所有视频放到一个屏幕，并始终保留完整上下文。",
			},
			"global-video-controls": {
				kindLabel: "全局控制", title: "用一条工具栏控制所有视频。",
				seoTitle: "iPhone 与 iPad 多视频全局控制｜分屏播放器",
				metaDescription: "自定义底部工具栏，一键播放、暂停、跳转、静音、逐帧、旋转、换位并管理分屏工作台中的所有视频。",
				intro: "同时看多个视频，不应该意味着在每个画面里重复相同操作。底部工具栏把常用动作变成作用于整个工作台的一键命令。",
				promise: "只保留你常用的按键，再把操作一次应用到所有画面。", imageIndex: 9, imageAlt: "控制所有视频的自定义底部按键",
				highlights: [
					{ title: "自定义工具栏", description: "添加、移除并重新排列真正适合你工作流的按键。" },
					{ title: "一次控制全部", description: "对兼容播放器统一播放、跳转、逐帧、静音、旋转或切换内容。" },
					{ title: "高级工具随手可用", description: "播放过程中直接打开存档点、同步、导出、布局尺寸和对比工具。" },
				],
				steps: [
					{ title: "打开底部按键", description: "从播放器设置进入底部工具栏编辑器。" },
					{ title: "选择并排序", description: "在已添加与未添加之间移动按键，再拖动成顺手的顺序。" },
					{ title: "控制整个工作台", description: "保存后，在打开多个来源时随时使用这套工具栏。" },
				],
				closingTitle: "一个动作，就该足够。", closingDescription: "把一组独立播放器变成真正统一的工作台。",
			},
			"video-sync-comparison": {
				kindLabel: "同步与对比", title: "对比同一个瞬间，而不只是两个视频。",
				seoTitle: "同步视频并逐帧对比｜分屏播放器",
				metaDescription: "通过同步点和同步锁定对齐多个视频，再使用逐帧回看、毫秒时间、缩放和存档点进行动作对比。",
				intro: "不同录制很少从同一时刻开始。同步点可以为每个视频定义真正重要的动作，同步锁定则会保持它们之间的关系。",
				promise: "只需匹配一次动作，就能一起查看每个角度。", imageIndex: 4, imageAlt: "同步多个视频进行对比",
				highlights: [
					{ title: "用同步点设置偏移", description: "即使录制开始时间不同，也能锚定同一个动作。" },
					{ title: "持续保持对齐", description: "通过预播放和持续校正，在播放过程中维持同步。" },
					{ title: "逐帧检查", description: "前后逐帧、显示毫秒、缩放画面并保存存档点。" },
				],
				steps: [
					{ title: "找到共同动作", description: "把每个视频移动到相同的动作、声音或视觉提示。" },
					{ title: "设置并锁定", description: "保存同步点并打开同步锁定，实现关联拖动和播放。" },
					{ title: "检查差异", description: "慢放、逐帧移动，把注意力放到不同角度之间的差别。" },
				],
				closingTitle: "重要差异可能只持续一帧。", closingDescription: "让所有角度保持同步，直到你真正看清它。",
			},
			"split-screen-export": {
				kindLabel: "分屏导出", title: "按照你看到的样子导出整个对比。",
				seoTitle: "iPhone 与 iPad 分屏视频导出｜分屏播放器",
				metaDescription: "将多视频布局导出为一个视频，支持裁切、缩放、片段范围、速度、清晰度、帧率、边框、水印、BGM 和音频控制。",
				intro: "工作台不必留在 App 里。分屏导出可以把完整布局变成教程、回看、反应或短视频素材。",
				promise: "布局、时间、画面和音频会成为一个完整文件。", imageIndex: 5, imageAlt: "分屏视频导出控制",
				highlights: [
					{ title: "保留画面构成", description: "保留布局、裁切、旋转、缩放、位置、背景、边框和信息。" },
					{ title: "单独调整每段视频", description: "为不同来源设置片段范围、播放速度和画面位置。" },
					{ title: "完成声音处理", description: "选择音频来源、调整音量、加入淡入淡出和背景音乐。" },
				],
				steps: [
					{ title: "排列画面", description: "搭建布局，并调整每个来源最终呈现的区域。" },
					{ title: "选择导出设置", description: "设置比例、清晰度、帧率、码率、视觉处理和音频。" },
					{ title: "生成一个文件", description: "把同步后的多画面工作台渲染为可分享视频。" },
				],
				closingTitle: "对比画面已经编辑完成。", closingDescription: "把屏幕上的工作台变成你真正要发送的视频。",
			},
			"iptv-streaming": {
				kindLabel: "多任务工作台", title: "一个工作台容纳直播流、文件和参考资料。",
				seoTitle: "IPTV、Xtream、M3U8 与 RTSP 多画面播放器",
				metaDescription: "在 iPhone 和 iPad 上播放 IPTV、Xtream Codes、HLS、M3U8 和 RTSP，并与本地视频、图片、PDF 和网页同屏。",
				intro: "真实对比经常不止本地视频。把直播链接、IPTV 频道、图片文件夹、PDF 和网页放进同一个多画面布局。",
				promise: "让实时与静态来源始终出现在同一个地方。", imageIndex: 9, imageAlt: "多画面布局中的 IPTV 和直播流",
				highlights: [
					{ title: "连接直播来源", description: "打开 HLS、M3U8 和 RTSP 链接，并支持书签与自动重试。" },
					{ title: "浏览 IPTV", description: "在 App 中加载和搜索 IPTV 或 Xtream Codes 频道列表。" },
					{ title: "混合不同类型", description: "让直播流、本地视频、图片、PDF、音频和网页同时出现。" },
				],
				steps: [
					{ title: "添加来源", description: "粘贴直播链接、连接 IPTV，或选择本地文件和参考资料。" },
					{ title: "放入布局", description: "在任意模板或自定义布局中混合不同来源。" },
					{ title: "保存工作台", description: "把所选内容和布局一起保存，下次完整恢复。" },
				],
				closingTitle: "你的参考资料不会只存在一种格式。", closingDescription: "但你的工作台仍然可以把它们放在一起。",
			},
		},
		useCases: {
			"sports-motion-analysis": {
				kindLabel: "使用场景 / 运动与动作", title: "看清每次动作之间发生了什么变化。",
				seoTitle: "运动视频对比与动作分析｜分屏播放器",
				metaDescription: "并排对比运动、舞蹈、健身和技术动作视频，支持同步播放、逐帧回看、缩放和存档点。",
				intro: "当视频一个接一个播放时，节奏、姿势、平衡和活动范围的小变化很难发现。把它们放到同一条时间线上。",
				promise: "对比不同训练、运动员和角度，同时保留完整动作。", imageIndex: 4, imageAlt: "对齐运动视频进行动作对比",
				highlights: [
					{ title: "匹配每次动作", description: "在每段录制的相同动作阶段设置同步点。" },
					{ title: "控制节奏", description: "使用关联播放、速度控制、逐帧移动和毫秒时间。" },
					{ title: "分享反馈", description: "将对齐后的多个角度导出为一个对比视频。" },
				],
				steps: [
					{ title: "打开每个角度", description: "选择不同训练、运动员或机位的录制。" },
					{ title: "锚定动作", description: "对齐相同动作并锁定全部视频。" },
					{ title: "回看并导出", description: "检查关键帧，再生成一个完整对比文件。" },
				],
				closingTitle: "时间一致，技术差异才会更清楚。", closingDescription: "把每次动作放到同一块屏幕。",
			},
			"multi-angle-review": {
				kindLabel: "使用场景 / 多机位与版本", title: "回看所有版本，同时留在同一个场景里。",
				seoTitle: "iPhone 与 iPad 多机位视频回看｜分屏播放器",
				metaDescription: "使用同步多视频播放和自定义布局，同时回看机位、表演、剪辑版本和参考素材。",
				intro: "来回切换文件会隐藏连续性。多画面布局让表演、构图、节奏和剪辑始终同时可见。",
				promise: "让所有角度留在画面里，再做判断。", imageIndex: 1, imageAlt: "同时显示多个机位",
				highlights: [
					{ title: "查看所有版本", description: "并排播放不同表演、剪辑和机位。" },
					{ title: "保持连续性", description: "同步共同动作，用关联拖动比较准确节拍。" },
					{ title: "创建参考画面", description: "为回看、反应、教程和短视频搭建布局。" },
				],
				steps: [
					{ title: "整理素材", description: "打开要选择的版本、机位、剪辑和参考视频。" },
					{ title: "为判断排列", description: "选择最容易比较构图、节奏或表演的布局。" },
					{ title: "保存或导出", description: "保存回看工作台，或导出为一个分屏文件。" },
				],
				closingTitle: "对比时，也要保持场景完整。", closingDescription: "一条时间线让每个角度更容易判断。",
			},
			"learning-reference": {
				kindLabel: "使用场景 / 学习与参考", title: "让课程和参考资料始终放在一起。",
				seoTitle: "多画面学习与参考工作台｜分屏播放器",
				metaDescription: "在一个 iPhone 或 iPad 工作台中同时查看课程视频、参考素材、PDF、图片、网页和直播流。",
				intro: "参考资料被另一个 App 挡住时，学习节奏就会中断。让演示、笔记、资料和自己的录制始终同时可见。",
				promise: "减少切换，保留更多上下文。", imageIndex: 7, imageAlt: "视频、网页、PDF 和图片同屏",
				highlights: [
					{ title: "混合多种格式", description: "组合本地视频、图片、PDF、网页、直播流和音频。" },
					{ title: "创建学习布局", description: "按照课程内容和设备选择模板或自定义排列。" },
					{ title: "快速返回", description: "把所有来源和布局一起保存为可重复使用的书签。" },
				],
				steps: [
					{ title: "选择课程", description: "打开主要演示、讲解或参考视频。" },
					{ title: "加入上下文", description: "在旁边放置笔记、PDF、网页、图片或自己的录制。" },
					{ title: "保存工作台", description: "为下一次学习或练习保存完整设置。" },
				],
				closingTitle: "参考资料始终可见，才会更有用。", closingDescription: "为整套课程建立一个工作台。",
			},
		},
	},
};

const toTraditional = OpenCC.Converter({ from: "cn", to: "twp" });
const normalizeTaiwanTerms = (text: string) =>
	[
		["工作臺", "工作台"],
		["佈局", "排版"],
		["自定義", "自訂"],
		["本地", "本機"],
		["逐幀", "逐格"],
		["幀率", "影格率"],
		["幀", "影格"],
		["清晰度", "解析度"],
		["位元速率", "位元率"],
		["水印", "浮水印"],
		["直播流", "直播串流"],
		["橫屏", "橫向"],
		["豎屏", "直向"],
		["全域性", "全域"],
		["瞭解", "了解"],
		["對比", "比較"],
		["個影片", "支影片"],
	].reduce((result, [from, to]) => result.replaceAll(from, to), text);
const convertToTraditional = (value: unknown): unknown => {
	if (typeof value === "string") {
		return normalizeTaiwanTerms(toTraditional(value));
	}
	if (Array.isArray(value)) return value.map(convertToTraditional);
	if (value && typeof value === "object") {
		return Object.fromEntries(
			Object.entries(value).map(([key, item]) => [
				key,
				convertToTraditional(item),
			]),
		);
	}
	return value;
};
const zhTraditionalBase = convertToTraditional(zhHans) as MarketingContent;

const zhHant: MarketingContent = {
	...zhTraditionalBase,
	nav: { features: "功能", useCases: "使用情境", faq: "常見問題", getApp: "下載 App", menu: "選單" },
	hero: {
		eyebrow: "多影片工作台 · iPhone + iPad",
		title: "一屏看多片\n體驗爽翻天",
		description: "在一個畫面上播放、對齊、比較並匯出最多 36 支影片。橫屏、直屏共 144 種排版，想怎麼看就怎麼看。還可以同時查看圖片、直播串流、網頁和 PDF，邊看邊聽音樂。",
		primaryCta: "免費下載",
		ratingText: "4.8 ★ · 63 個評分",
		privacyText: "不收集資料",
		soundHint: "使用分屏播放器同時觀看 3 個影片",
	},
	capabilitiesLabel: "工作台能力",
	capabilities: [
		"2～36 支影片",
		"144 種排版",
		"自訂排版",
		"橫向與直向",
		"影片播放清單",
		"排序與隨機播放",
		"循環播放",
		"全域播放控制",
		"同步點",
		"同步鎖定",
		"逐格回看",
		"毫秒級時間",
		"音量均衡",
		"多比例匯出",
		"裁切與變速",
		"BGM 與音訊混合",
		"MP4 · MOV · MKV · WebM",
		"HLS · M3U8 · RTSP",
		"外接螢幕",
		"書籤還原",
		"存檔點",
		"圖片 · PDF · 網頁",
		"自訂底部工具列",
		"定時關閉",
	],
	chapters: zhTraditionalBase.chapters.map((chapter) => ({
		...chapter,
		kicker: chapter.kicker.replace("播放", "播放").replace("同步", "同步").replace("回看", "回看").replace("导出", "匯出").replace("来源", "來源"),
		title: chapter.title.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对齐/g, "對齊").replace(/动作/g, "動作").replace(/导出/g, "匯出").replace(/屏幕/g, "螢幕"),
		description: chapter.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/对齐/g, "對齊").replace(/导出/g, "匯出").replace(/直播流/g, "直播串流"),
		points: chapter.points.map((point) => point.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/导出/g, "匯出").replace(/图片/g, "圖片").replace(/网页/g, "網頁")),
		imageAlt: chapter.imageAlt.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
		linkLabel: chapter.linkLabel.replace(/视频/g, "影片").replace(/导出/g, "匯出").replace(/同步工具/g, "同步工具").replace(/直播流/g, "直播串流"),
		...(chapter.id === "play"
			? {
					kicker: "多支影片 · 一個螢幕",
					title: "在一個螢幕上觀看最多 36 支影片。",
					description:
						"使用多達 144 種排版同時觀看最多 36 支影片，支援 iPhone／iPad 與橫向、直向模式，也可以建立自己的排版。",
					points: [
						"2～36 支影片同時播放",
						"144 種排版 + 自訂排版",
						"橫向與直向",
						"支援 iPad",
						"支援投放播放",
					],
				}
			: {}),
		...(chapter.id === "control"
			? {
					kicker: "全域控制 · 方便快速",
					title: "一手掌控所有影片。",
					description:
						"透過全域進度控制、同步鎖定等功能，一鍵控制所有影片的進度、播放狀態、播放速度，或切換影片。適合回看不同剪輯版本、拍攝片段、機位角度或參考素材。",
					points: ["全域進度控制", "同步鎖定"],
					imageAlt: "同時控制多支影片的播放進度和狀態",
					linkLabel: "了解全域控制",
				}
			: {}),
		...(chapter.id === "align"
			? {
					kicker: "精準同步 · 配對動作",
					title: "對齊動作，而不只是對齊時間。",
					description:
						"透過同步點與持續同步校正，讓不同影片始終錨定在同一個動作上。適合比較運動、舞蹈、健身、教學等影片。",
					points: ["同步點", "持續同步校正"],
					imageAlt: "將多支影片精準同步到同一個動作",
					linkLabel: "了解精準同步",
				}
			: {}),
		...(chapter.id === "export"
			? {
					kicker: "匯出 · 分享完整畫面",
					title: "把多個畫面，變成一支完整影片。",
					description:
						"把螢幕上的多影片播放合成為一支影片，並控制畫面位置、解析度、影格率、位元率、邊框、背景、浮水印、BGM 和音訊來源。適合製作比較影片、教學影片、反應影片或短影音素材。",
					points: [
						"多種畫面比例",
						"每支影片單獨裁切和變速",
						"音訊混合 + BGM",
					],
					imageAlt: "分屏影片匯出設定",
					linkLabel: "查看分屏匯出",
				}
			: {}),
		...(chapter.id === "streams"
			? {
					kicker: "影片 · 圖片 · 網頁 · 直播 · PDF · 音樂",
					title: "不只影片，更是多工工作台。",
					description:
						"在同一個排版中組合本機影片、直播、RTSP、Xtream 頻道、圖片、網頁、PDF 和音樂。",
					points: [
						"IPTV + Xtream Codes",
						"HLS / M3U8 / RTSP",
						"圖片、網頁、PDF、音樂",
					],
					imageAlt: "在同一個工作台中查看影片、圖片、網頁和 PDF",
					linkLabel: "了解媒體與直播支援",
				}
			: {}),
	})),
	useCases: {
		eyebrow: "為比較而生", title: "當一個畫面不足以說明問題。", description: "只要時間、角度或上下文會改變結果，分屏播放器就能派上用場。",
		items: [
			{ slug: "sports-motion-analysis", number: "01", title: "運動與動作分析", description: "從多個訓練階段和角度比較動作、節奏、姿勢與技術細節。", imageIndex: 4, linkLabel: "查看運動分析工作流程" },
			{ slug: "multi-angle-review", number: "02", title: "多機位與多個版本", description: "在同一條時間軸上回看不同剪輯、表演、機位和參考素材。", imageIndex: 1, linkLabel: "查看多角度工作流程" },
			{ slug: "learning-reference", number: "03", title: "學習與參考", description: "讓課程、參考影片、PDF、圖片和網頁一直同時可見。", imageIndex: 7, linkLabel: "查看學習工作流程" },
		],
	},
	comparison: {
		eyebrow: "工作流程差距", title: "在同時觀看多支影片方面，分屏播放器是最好的",
		columns: ["你需要的能力", "系統子母畫面", "影片編輯器", "分屏播放器"],
		rows: [
			{ label: "2～36 個畫面同屏", values: ["最多 2 個", "部分支援", "支援"] },
			{ label: "即時同步播放", values: ["不支援", "不支援", "支援"] },
			{ label: "逐格比較", values: ["手動", "支援", "支援"] },
			{ label: "自訂多畫面排版", values: ["不支援", "支援", "支援"] },
			{ label: "直接匯出分屏影片", values: ["不支援", "支援", "支援"] },
			{ label: "直播串流、PDF 與網頁", values: ["部分支援", "支援", "支援"] },
		],
		note: "「部分支援」和「手動」描述常見工作流程，具體播放器或編輯器可能有所不同。",
	},
	closing: {
		eyebrow: "你的多畫面工作台從這裡開始", title: "看見完整的瞬間。",
		description: "免費下載，開啟兩支影片，完成第一次同步比較。", cta: "下載分屏播放器",
	},
	footerTagline: "一個畫面，容納每個角度、來源和瞬間。",
	detailLabels: { home: "首頁", keyBenefits: "你會得到什麼", howItWorks: "工作流程如何運作", exploreMore: "繼續探索", backHome: "返回完整產品介紹" },
	details: {
		features: Object.fromEntries(
			featureSlugs.map((slug) => {
				const page = zhTraditionalBase.details.features[slug];
				return [slug, {
					...page,
					kindLabel: page.kindLabel.replace("功能", "功能").replace("多视频", "多影片").replace("导出", "匯出").replace("直播流", "直播串流"),
					title: page.title.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/导出/g, "匯出"),
					seoTitle: page.seoTitle.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
					metaDescription: page.metaDescription.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/导出/g, "匯出").replace(/网页/g, "網頁"),
					intro: page.intro.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/布局/g, "排版").replace(/导出/g, "匯出"),
					promise: page.promise.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/布局/g, "排版").replace(/导出/g, "匯出"),
					imageAlt: page.imageAlt.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
					highlights: page.highlights.map((item) => ({
						title: item.title.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
						description: item.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/导出/g, "匯出").replace(/网页/g, "網頁"),
					})),
					steps: page.steps.map((item) => ({
						title: item.title.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
						description: item.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/导出/g, "匯出").replace(/网页/g, "網頁"),
					})),
					closingTitle: page.closingTitle.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/导出/g, "匯出"),
					closingDescription: page.closingDescription.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/导出/g, "匯出"),
				}];
			}),
		) as Record<FeatureSlug, MarketingDetailPage>,
		useCases: Object.fromEntries(
			useCaseSlugs.map((slug) => {
				const page = zhTraditionalBase.details.useCases[slug];
				return [slug, {
					...page,
					kindLabel: page.kindLabel.replace("使用场景", "使用情境").replace("运动", "運動").replace("多机位", "多機位").replace("学习", "學習"),
					title: page.title.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					seoTitle: page.seoTitle.replace(/视频/g, "影片").replace(/运动/g, "運動").replace(/对比/g, "比較"),
					metaDescription: page.metaDescription.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/对比/g, "比較").replace(/网页/g, "網頁"),
					intro: page.intro.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					promise: page.promise.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					imageAlt: page.imageAlt.replace(/视频/g, "影片").replace(/对比/g, "比較"),
					highlights: page.highlights.map((item) => ({
						title: item.title.replace(/视频/g, "影片").replace(/对比/g, "比較").replace(/动作/g, "動作"),
						description: item.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					})),
					steps: page.steps.map((item) => ({
						title: item.title.replace(/视频/g, "影片").replace(/对比/g, "比較").replace(/动作/g, "動作"),
						description: item.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					})),
					closingTitle: page.closingTitle.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					closingDescription: page.closingDescription.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
				}];
			}),
		) as Record<UseCaseSlug, MarketingDetailPage>,
	},
};

export const marketingContent: Record<Locale, MarketingContent> = {
	"en-US": en,
	"zh-Hans": zhHans,
	"zh-Hant": zhHant,
};

import type { Locale } from "./locales";
import * as OpenCC from "opencc-js";

export const featureSlugs = [
	"multi-video-player",
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
		workflow: string;
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
		secondaryCta: string;
		ratingText: string;
		privacyText: string;
		filmLabel: string;
		filmTitle: string;
		soundHint: string;
	};
	stats: Array<{ value: string; label: string }>;
	capabilitiesLabel: string;
	capabilities: string[];
	workflow: {
		eyebrow: string;
		title: string;
		description: string;
		items: Array<{ title: string; description: string; target: string }>;
	};
	chapters: Array<{
		id: string;
		number: string;
		kicker: string;
		title: string;
		description: string;
		points: string[];
		imageIndex: number;
		imageAlt: string;
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
		description: string;
		columns: string[];
		rows: Array<{ label: string; values: string[] }>;
		note: string;
	};
	trust: {
		eyebrow: string;
		title: string;
		description: string;
		items: Array<{ value: string; title: string; description: string }>;
	};
	steps: {
		eyebrow: string;
		title: string;
		items: Array<{ title: string; description: string }>;
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
		workflow: "Workflow",
		useCases: "Use cases",
		faq: "FAQ",
		getApp: "Get the app",
		menu: "Menu",
	},
	hero: {
		eyebrow: "Multi-video workspace · iPhone + iPad",
		title: "Every angle. Perfectly in sync.",
		description:
			"Play, align, compare, and export up to 36 videos on one screen. Built for the moments one player cannot show you.",
		primaryCta: "Download free",
		secondaryCta: "Watch the product film",
		ratingText: "4.4 ★ from 24 ratings",
		privacyText: "No data collected",
		filmLabel: "Split Screen Player in action",
		filmTitle: "Many views. One timeline.",
		soundHint: "Tap the player for sound",
	},
	stats: [
		{ value: "36", label: "videos at once" },
		{ value: "134", label: "built-in layouts" },
		{ value: "1 frame", label: "precision control" },
		{ value: "1 export", label: "ready to share" },
	],
	capabilitiesLabel: "Inside the workspace",
	capabilities: [
		"Sync Point",
		"Sync Lock",
		"Frame stepping",
		"Custom layouts",
		"IPTV + Xtream",
		"External display",
		"Split-screen export",
	],
	workflow: {
		eyebrow: "The multi-view system",
		title: "Four moves. One clear timeline.",
		description:
			"Start with the clips you already have, then move from a wall of footage to a comparison you can understand and share.",
		items: [
			{
				title: "Play",
				description: "Open 2–36 local videos, streams, images, PDFs, or web pages.",
				target: "#play",
			},
			{
				title: "Align",
				description: "Set the same motion moment with Sync Point and Sync Lock.",
				target: "#align",
			},
			{
				title: "Compare",
				description: "Step frame by frame and inspect every angle together.",
				target: "#compare",
			},
			{
				title: "Export",
				description: "Turn the full layout into one finished, shareable video.",
				target: "#export",
			},
		],
	},
	chapters: [
		{
			id: "play",
			number: "01",
			kicker: "Playback / one workspace",
			title: "Put every angle on the same screen.",
			description:
				"Open two clips for a quick comparison or build a 36-view command center on iPad. Choose a ready-made layout, resize it, or draw your own.",
			points: ["2–36 simultaneous videos", "134 layouts + custom layouts", "Portrait and landscape"],
			imageIndex: 1,
			imageAlt: "Multiple videos playing together in Split Screen Player",
			linkLabel: "Explore multi-video playback",
			linkPath: "features/multi-video-player",
		},
		{
			id: "align",
			number: "02",
			kicker: "Sync / match the moment",
			title: "Line up the action, not just the timestamps.",
			description:
				"Use global playback, Sync Point, Sync Lock, pre-roll, and continuous correction to keep different clips anchored to the same movement.",
			points: ["Sync Point offsets", "Continuous sync correction", "Bookmark-based restoration"],
			imageIndex: 4,
			imageAlt: "Synchronized multi-video playback comparison",
			linkLabel: "See synchronization tools",
			linkPath: "features/video-sync-comparison",
		},
		{
			id: "compare",
			number: "03",
			kicker: "Review / frame-level detail",
			title: "Slow the moment down until the difference is obvious.",
			description:
				"Step forward or backward one frame at a time, show millisecond timing, zoom into details, and return to saved checkpoints.",
			points: ["Frame-by-frame stepping", "Millisecond time", "Zoom, crop, and checkpoints"],
			imageIndex: 6,
			imageAlt: "Frame-level review tools and checkpoints",
			linkLabel: "Explore precise comparison",
			linkPath: "features/video-sync-comparison",
		},
		{
			id: "export",
			number: "04",
			kicker: "Export / share the whole view",
			title: "Turn the workspace into the final video.",
			description:
				"Export the complete split-screen layout with control over framing, resolution, frame rate, bitrate, borders, background, watermark, BGM, and audio sources.",
			points: ["Multiple aspect ratios", "Per-clip trim and speed", "Audio mix + BGM"],
			imageIndex: 5,
			imageAlt: "Split-screen export settings",
			linkLabel: "See split-screen export",
			linkPath: "features/split-screen-export",
		},
		{
			id: "streams",
			number: "05",
			kicker: "Sources / beyond local video",
			title: "Bring streams, files, and references together.",
			description:
				"Mix local video with HLS, M3U8, RTSP, IPTV, Xtream channels, image folders, PDFs, and web pages inside the same layout.",
			points: ["IPTV + Xtream Codes", "HLS / M3U8 / RTSP", "Images, PDFs, and web pages"],
			imageIndex: 9,
			imageAlt: "Streams, IPTV, and Xtream Codes in Split Screen Player",
			linkLabel: "Explore streaming support",
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
				number: "A / 01",
				title: "Sports & motion",
				description: "Compare form, timing, posture, or technique from multiple sessions and angles.",
				imageIndex: 4,
				linkLabel: "Open the sports workflow",
			},
			{
				slug: "multi-angle-review",
				number: "A / 02",
				title: "Takes & camera angles",
				description: "Review edits, performances, references, and multi-camera footage on one timeline.",
				imageIndex: 1,
				linkLabel: "Open the review workflow",
			},
			{
				slug: "learning-reference",
				number: "A / 03",
				title: "Learning & reference",
				description: "Keep a lesson, source video, PDF, image, and web page visible together.",
				imageIndex: 7,
				linkLabel: "Open the learning workflow",
			},
		],
	},
	comparison: {
		eyebrow: "The workflow gap",
		title: "A second player adds a window. This adds a system.",
		description:
			"See how much manual setup remains after the files are opened.",
		columns: ["What you need", "Separate players", "Video editor", "Split Screen Player"],
		rows: [
			{ label: "2–36 views together", values: ["Manual", "Partial", "Built in"] },
			{ label: "Live synchronized playback", values: ["Missing", "Partial", "Built in"] },
			{ label: "Frame-level comparison", values: ["Manual", "Built in", "Built in"] },
			{ label: "Custom multi-view layouts", values: ["Manual", "Built in", "Built in"] },
			{ label: "Instant split-screen export", values: ["Missing", "Built in", "Built in"] },
			{ label: "Streams, PDFs, and web pages", values: ["Partial", "Missing", "Built in"] },
		],
		note: "“Partial” and “Manual” describe the typical workflow. Individual apps may vary.",
	},
	trust: {
		eyebrow: "Designed to stay useful",
		title: "Serious controls. Honest boundaries.",
		description:
			"Your device and source files still determine real-world playback performance. The app gives you the tools to make that workspace manageable.",
		items: [
			{
				value: "No data",
				title: "Collected by the app",
				description: "The current App Store privacy label states that the developer does not collect data.",
			},
			{
				value: "iOS 15+",
				title: "Broad device support",
				description: "Runs on iPhone and iPad, with Apple silicon Mac and Apple Vision compatibility.",
			},
			{
				value: "1.0.26",
				title: "Actively improving",
				description: "Recent updates added better sync correction, drag-and-drop rearranging, and floating controls.",
			},
		],
	},
	steps: {
		eyebrow: "60-second setup",
		title: "Open. Arrange. Press play.",
		items: [
			{ title: "Choose your sources", description: "Select videos, folders, links, streams, images, PDFs, or web pages." },
			{ title: "Pick the layout", description: "Start with one of 134 layouts or create a custom arrangement." },
			{ title: "Sync and inspect", description: "Lock playback, set sync points, and review the exact moment you need." },
		],
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
				kindLabel: "Feature / multi-video playback",
				title: "A multi-video player built for the whole picture.",
				seoTitle: "Multi-Video Player for iPhone & iPad | Split Screen Player",
				metaDescription:
					"Play 2 to 36 videos at once on iPhone and iPad with 134 layouts, custom split-screen arrangements, playlists, and external display support.",
				intro:
					"Most video players are designed around one file. Split Screen Player gives every clip its own view while keeping the full workspace under one set of controls.",
				promise: "From two references to a 36-view wall, the layout stays yours.",
				imageIndex: 1,
				imageAlt: "Multiple videos playing on one screen",
				highlights: [
					{ title: "Scale from 2 to 36", description: "Use a simple side-by-side view or fill an iPad with a dense multi-view layout." },
					{ title: "Start with 134 layouts", description: "Choose portrait or landscape presets, resize dividers, or build a custom layout." },
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
			"video-sync-comparison": {
				kindLabel: "Feature / sync & comparison",
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
				kindLabel: "Feature / split-screen export",
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
				kindLabel: "Feature / streams & sources",
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
	nav: { features: "功能", workflow: "工作流", useCases: "使用场景", faq: "常见问题", getApp: "下载 App", menu: "菜单" },
	hero: {
		eyebrow: "多视频工作台 · iPhone + iPad",
		title: "每个角度，精准同步。",
		description: "在一个屏幕上播放、对齐、对比并导出最多 36 个视频。看清普通播放器会漏掉的那个瞬间。",
		primaryCta: "免费下载",
		secondaryCta: "观看产品演示",
		ratingText: "4.4 ★ · 24 个评分",
		privacyText: "不收集数据",
		filmLabel: "分屏播放器实机演示",
		filmTitle: "多个画面，一条时间线。",
		soundHint: "点击播放器可打开声音",
	},
	stats: [
		{ value: "36", label: "个视频同时播放" },
		{ value: "134", label: "种内置布局" },
		{ value: "1 帧", label: "精度控制" },
		{ value: "1 次", label: "导出即可分享" },
	],
	capabilitiesLabel: "工作台能力",
	capabilities: ["同步点", "同步锁定", "逐帧回看", "自定义布局", "IPTV + Xtream", "外接屏幕", "分屏导出"],
	workflow: {
		eyebrow: "多画面系统",
		title: "四个动作，一条清晰时间线。",
		description: "从已有素材开始，把杂乱的多个文件变成可以看懂、可以解释、也可以分享的对比。",
		items: [
			{ title: "播放", description: "打开 2～36 个视频、直播流、图片、PDF 或网页。", target: "#play" },
			{ title: "对齐", description: "用同步点和同步锁定匹配同一个动作时刻。", target: "#align" },
			{ title: "对比", description: "逐帧查看，让所有角度保持在同一进度。", target: "#compare" },
			{ title: "导出", description: "把完整分屏工作台变成一个可分享的视频。", target: "#export" },
		],
	},
	chapters: [
		{
			id: "play", number: "01", kicker: "播放 / 一个工作台", title: "把所有角度放到同一块屏幕。",
			description: "两个视频可以快速并排对比，iPad 上也可以搭建 36 画面工作台。选择现成布局、调整分隔线，或者创建自己的布局。",
			points: ["2～36 个视频同时播放", "134 种布局 + 自定义布局", "横屏与竖屏"],
			imageIndex: 1, imageAlt: "分屏播放器同时播放多个视频", linkLabel: "了解多视频播放", linkPath: "features/multi-video-player",
		},
		{
			id: "align", number: "02", kicker: "同步 / 匹配动作", title: "对齐动作，而不只是对齐时间。",
			description: "通过全局播放、同步点、同步锁定、预播放和持续同步校正，让不同视频始终锚定在同一个动作上。",
			points: ["同步点偏移", "持续同步校正", "书签恢复同步状态"],
			imageIndex: 4, imageAlt: "多个视频同步播放对比", linkLabel: "查看同步工具", linkPath: "features/video-sync-comparison",
		},
		{
			id: "compare", number: "03", kicker: "回看 / 逐帧细节", title: "把瞬间放慢，直到差异足够清楚。",
			description: "逐帧前进或后退，显示毫秒时间，放大查看细节，并随时返回已保存的存档点。",
			points: ["逐帧前进与后退", "毫秒级时间", "缩放、裁切与存档点"],
			imageIndex: 6, imageAlt: "逐帧回看和存档点功能", linkLabel: "了解精准对比", linkPath: "features/video-sync-comparison",
		},
		{
			id: "export", number: "04", kicker: "导出 / 分享完整画面", title: "把工作台直接变成最终视频。",
			description: "导出完整分屏布局，并控制画面位置、清晰度、帧率、码率、边框、背景、水印、BGM 和音频来源。",
			points: ["多种画面比例", "每段视频单独裁剪和变速", "音频混合 + BGM"],
			imageIndex: 5, imageAlt: "分屏视频导出设置", linkLabel: "查看分屏导出", linkPath: "features/split-screen-export",
		},
		{
			id: "streams", number: "05", kicker: "来源 / 不只是本地视频", title: "把直播流、文件和参考资料放在一起。",
			description: "在同一个布局中组合本地视频、HLS、M3U8、RTSP、IPTV、Xtream 频道、图片文件夹、PDF 和网页。",
			points: ["IPTV + Xtream Codes", "HLS / M3U8 / RTSP", "图片、PDF 与网页"],
			imageIndex: 9, imageAlt: "分屏播放器中的 IPTV 和 Xtream Codes", linkLabel: "了解直播流支持", linkPath: "features/iptv-streaming",
		},
	],
	useCases: {
		eyebrow: "为对比而生", title: "当一个画面不足以说明问题。", description: "只要时间、角度或上下文会改变结果，分屏播放器就能派上用场。",
		items: [
			{ slug: "sports-motion-analysis", number: "A / 01", title: "运动与动作分析", description: "从多个训练阶段和角度对比动作、节奏、姿势与技术细节。", imageIndex: 4, linkLabel: "查看运动分析工作流" },
			{ slug: "multi-angle-review", number: "A / 02", title: "多机位与多个版本", description: "在同一条时间线上回看不同剪辑、表演、机位和参考素材。", imageIndex: 1, linkLabel: "查看多角度工作流" },
			{ slug: "learning-reference", number: "A / 03", title: "学习与参考", description: "让课程、参考视频、PDF、图片和网页一直同时可见。", imageIndex: 7, linkLabel: "查看学习工作流" },
		],
	},
	comparison: {
		eyebrow: "工作流差距", title: "第二个播放器只是多一个窗口，这里是一整套系统。",
		description: "打开文件之后，看看还需要多少手动操作。",
		columns: ["你需要的能力", "多个播放器", "视频编辑器", "分屏播放器"],
		rows: [
			{ label: "2～36 个画面同屏", values: ["手动", "部分支持", "内置"] },
			{ label: "实时同步播放", values: ["缺少", "部分支持", "内置"] },
			{ label: "逐帧对比", values: ["手动", "内置", "内置"] },
			{ label: "自定义多画面布局", values: ["手动", "内置", "内置"] },
			{ label: "直接导出分屏视频", values: ["缺少", "内置", "内置"] },
			{ label: "直播流、PDF 与网页", values: ["部分支持", "缺少", "内置"] },
		],
		note: "“部分支持”和“手动”描述常见工作流，具体播放器或编辑器可能有所不同。",
	},
	trust: {
		eyebrow: "长期可用的工具", title: "专业控制，也说明真实边界。",
		description: "实际播放能力仍会受到设备、文件格式和清晰度影响。App 的目标是让复杂的多画面工作台更容易管理。",
		items: [
			{ value: "不收集", title: "App 数据", description: "当前 App Store 隐私标签显示，开发者不会通过此 App 收集数据。" },
			{ value: "iOS 15+", title: "广泛设备支持", description: "支持 iPhone 与 iPad，也兼容 Apple 芯片 Mac 和 Apple Vision。" },
			{ value: "1.0.26", title: "持续更新", description: "近期加入更稳定的同步校正、拖放换位和悬浮视频控制。" },
		],
	},
	steps: {
		eyebrow: "60 秒完成设置", title: "打开、排列，然后播放。",
		items: [
			{ title: "选择内容来源", description: "选择视频、文件夹、链接、直播流、图片、PDF 或网页。" },
			{ title: "选择布局", description: "从 134 种布局开始，或者创建自己的分屏排列。" },
			{ title: "同步并回看", description: "锁定进度、设置同步点，查看你真正关心的那个瞬间。" },
		],
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
				kindLabel: "功能 / 多视频播放", title: "为完整画面而生的多视频播放器。",
				seoTitle: "iPhone 与 iPad 多视频播放器｜分屏播放器",
				metaDescription: "在 iPhone 和 iPad 上同时播放 2～36 个视频，使用 134 种布局、自定义分屏、播放列表和外接屏幕。",
				intro: "大多数播放器围绕一个文件设计。分屏播放器为每个视频保留独立画面，同时用一套控制管理整个工作台。",
				promise: "从两个参考视频到 36 画面墙，布局始终由你决定。", imageIndex: 1, imageAlt: "同一屏幕播放多个视频",
				highlights: [
					{ title: "从 2 扩展到 36", description: "快速并排两个视频，或者在 iPad 上搭建密集的多画面工作台。" },
					{ title: "134 种布局起步", description: "选择横屏或竖屏模板、调整分隔线，或者创建自定义布局。" },
					{ title: "控制整个工作台", description: "拖放内容、循环放大、音量均衡，并保存完整书签。" },
				],
				steps: [
					{ title: "选择视频", description: "打开文件、相册、文件夹、播放列表或保存的书签。" },
					{ title: "选择布局", description: "根据画面数量和比例选择模板或创建自定义网格。" },
					{ title: "作为一个系统播放", description: "通过全局播放、进度、静音和显示控制管理全部画面。" },
				],
				closingTitle: "不用再来回切换播放器。", closingDescription: "把所有视频放到一个屏幕，并始终保留完整上下文。",
			},
			"video-sync-comparison": {
				kindLabel: "功能 / 同步与对比", title: "对比同一个瞬间，而不只是两个视频。",
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
				kindLabel: "功能 / 分屏导出", title: "按照你看到的样子导出整个对比。",
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
				kindLabel: "功能 / 直播流与来源", title: "一个工作台容纳直播流、文件和参考资料。",
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
	nav: { features: "功能", workflow: "工作流程", useCases: "使用情境", faq: "常見問題", getApp: "下載 App", menu: "選單" },
	hero: {
		eyebrow: "多影片工作台 · iPhone + iPad",
		title: "每個角度，精準同步。",
		description: "在一個畫面上播放、對齊、比較並匯出最多 36 支影片。看清一般播放器會漏掉的那個瞬間。",
		primaryCta: "免費下載",
		secondaryCta: "觀看產品示範",
		ratingText: "4.4 ★ · 24 個評分",
		privacyText: "不收集資料",
		filmLabel: "分屏播放器實機示範",
		filmTitle: "多個畫面，一條時間軸。",
		soundHint: "點一下播放器即可開啟聲音",
	},
	stats: [
		{ value: "36", label: "支影片同時播放" },
		{ value: "134", label: "種內建排版" },
		{ value: "1 格", label: "精度控制" },
		{ value: "1 次", label: "匯出即可分享" },
	],
	capabilitiesLabel: "工作台能力",
	capabilities: ["同步點", "同步鎖定", "逐格回看", "自訂排版", "IPTV + Xtream", "外接螢幕", "分屏匯出"],
	workflow: {
		eyebrow: "多畫面系統", title: "四個動作，一條清楚時間軸。",
		description: "從已有素材開始，把雜亂的多個檔案變成可以看懂、可以解釋，也可以分享的比較。",
		items: [
			{ title: "播放", description: "開啟 2～36 支影片、直播串流、圖片、PDF 或網頁。", target: "#play" },
			{ title: "對齊", description: "用同步點和同步鎖定配對同一個動作時刻。", target: "#align" },
			{ title: "比較", description: "逐格查看，讓所有角度維持在同一進度。", target: "#compare" },
			{ title: "匯出", description: "把完整分屏工作台變成一支可分享的影片。", target: "#export" },
		],
	},
	chapters: zhTraditionalBase.chapters.map((chapter) => ({
		...chapter,
		kicker: chapter.kicker.replace("播放", "播放").replace("同步", "同步").replace("回看", "回看").replace("导出", "匯出").replace("来源", "來源"),
		title: chapter.title.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对齐/g, "對齊").replace(/动作/g, "動作").replace(/导出/g, "匯出").replace(/屏幕/g, "螢幕"),
		description: chapter.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/对齐/g, "對齊").replace(/导出/g, "匯出").replace(/直播流/g, "直播串流"),
		points: chapter.points.map((point) => point.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/导出/g, "匯出").replace(/图片/g, "圖片").replace(/网页/g, "網頁")),
		imageAlt: chapter.imageAlt.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
		linkLabel: chapter.linkLabel.replace(/视频/g, "影片").replace(/导出/g, "匯出").replace(/同步工具/g, "同步工具").replace(/直播流/g, "直播串流"),
	})),
	useCases: {
		eyebrow: "為比較而生", title: "當一個畫面不足以說明問題。", description: "只要時間、角度或上下文會改變結果，分屏播放器就能派上用場。",
		items: [
			{ slug: "sports-motion-analysis", number: "A / 01", title: "運動與動作分析", description: "從多個訓練階段和角度比較動作、節奏、姿勢與技術細節。", imageIndex: 4, linkLabel: "查看運動分析工作流程" },
			{ slug: "multi-angle-review", number: "A / 02", title: "多機位與多個版本", description: "在同一條時間軸上回看不同剪輯、表演、機位和參考素材。", imageIndex: 1, linkLabel: "查看多角度工作流程" },
			{ slug: "learning-reference", number: "A / 03", title: "學習與參考", description: "讓課程、參考影片、PDF、圖片和網頁一直同時可見。", imageIndex: 7, linkLabel: "查看學習工作流程" },
		],
	},
	comparison: {
		eyebrow: "工作流程差距", title: "第二個播放器只是多一個視窗，這裡是一整套系統。",
		description: "開啟檔案之後，看看還需要多少手動操作。",
		columns: ["你需要的能力", "多個播放器", "影片編輯器", "分屏播放器"],
		rows: [
			{ label: "2～36 個畫面同屏", values: ["手動", "部分支援", "內建"] },
			{ label: "即時同步播放", values: ["缺少", "部分支援", "內建"] },
			{ label: "逐格比較", values: ["手動", "內建", "內建"] },
			{ label: "自訂多畫面排版", values: ["手動", "內建", "內建"] },
			{ label: "直接匯出分屏影片", values: ["缺少", "內建", "內建"] },
			{ label: "直播串流、PDF 與網頁", values: ["部分支援", "缺少", "內建"] },
		],
		note: "「部分支援」和「手動」描述常見工作流程，具體播放器或編輯器可能有所不同。",
	},
	trust: {
		eyebrow: "長期可用的工具", title: "專業控制，也說明真實邊界。",
		description: "實際播放能力仍會受到裝置、檔案格式和解析度影響。App 的目標是讓複雜的多畫面工作台更容易管理。",
		items: [
			{ value: "不收集", title: "App 資料", description: "目前 App Store 隱私標籤顯示，開發者不會透過此 App 收集資料。" },
			{ value: "iOS 15+", title: "廣泛裝置支援", description: "支援 iPhone 與 iPad，也相容 Apple 晶片 Mac 和 Apple Vision。" },
			{ value: "1.0.26", title: "持續更新", description: "近期加入更穩定的同步校正、拖放換位和懸浮影片控制。" },
		],
	},
	steps: {
		eyebrow: "60 秒完成設定", title: "開啟、排列，然後播放。",
		items: [
			{ title: "選擇內容來源", description: "選擇影片、資料夾、連結、直播串流、圖片、PDF 或網頁。" },
			{ title: "選擇排版", description: "從 134 種排版開始，或者建立自己的分屏排列。" },
			{ title: "同步並回看", description: "鎖定進度、設定同步點，查看你真正關心的那個瞬間。" },
		],
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

export const localizedScreenshot = (
	locale: Locale,
	device: "iphone" | "ipad",
	index: number,
) => {
	const base =
		locale === "en-US"
			? "/assets/screenshots"
			: `/assets/screenshots/${locale}`;
	return `${base}/${device}/${index}.png`;
};

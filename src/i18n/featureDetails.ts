import * as OpenCC from "opencc-js";
import type { FeatureSlug } from "./marketing";
import type { Locale } from "./locales";

export interface FeatureMedia {
	kind: "image" | "video";
	src: string;
	poster?: string;
	alt: string;
	width: number;
	height: number;
}

export interface FeatureCard {
	title: string;
	description: string;
	badge?: string;
}

export interface FeatureStep {
	title: string;
	description: string;
}

export interface FeatureTable {
	title: string;
	description?: string;
	columns: string[];
	rows: string[][];
}

export interface FeatureSection {
	kicker: string;
	title: string;
	description: string;
	media?: FeatureMedia;
	gallery?: FeatureMedia[];
	cards?: FeatureCard[];
	steps?: FeatureStep[];
	table?: FeatureTable;
	note?: string;
}

export interface RichFeaturePage {
	heroMedia: FeatureMedia;
	sections: FeatureSection[];
	buttonTable?: {
		title: string;
		description: string;
		columns: [string, string, string];
		freeLabel: string;
		vipLabel: string;
		rows: Array<{ action: string; description: string; vip: boolean }>;
		note: string;
	};
}

const image = (src: string, alt: string, width = 720, height = 1564): FeatureMedia => ({
	kind: "image",
	src,
	alt,
	width,
	height,
});

const chapterImage = (src: string, alt: string): FeatureMedia =>
	image(src, alt, 944, 2048);

const video = (src: string, poster: string, alt: string): FeatureMedia => ({
	kind: "video",
	src,
	poster,
	alt,
	width: 1280,
	height: 590,
});

const enButtons: RichFeaturePage["buttonTable"] = {
	title: "Every available bottom button",
	description:
		"Add only the actions you need, remove the rest, and drag to reorder. “More” always remains available so the complete command set is never hidden.",
	columns: ["Button", "What it does", "Access"],
	freeLabel: "Free",
	vipLabel: "VIP",
	rows: [
		{ action: "Batch open", description: "Choose and fill multiple player regions in one operation.", vip: false },
		{ action: "Close all", description: "Close every currently open source.", vip: false },
		{ action: "Select layout", description: "Open the preset, favorite, and custom layout library.", vip: false },
		{ action: "Add bookmark", description: "Save the current sources, layout, playback positions, and related state.", vip: false },
		{ action: "Bookmark list", description: "Open saved workspaces and restore them later.", vip: false },
		{ action: "Lock", description: "Lock the workspace to prevent accidental edits.", vip: false },
		{ action: "Export", description: "Open split-screen video export.", vip: false },
		{ action: "Comparison snapshot", description: "Capture the current multi-view comparison as an image.", vip: false },
		{ action: "Download", description: "Open supported download actions; availability depends on region and source.", vip: false },
		{ action: "More", description: "Open all commands that are not placed directly on the bottom bar.", vip: false },
		{ action: "Previous video for all", description: "Move every compatible player to its previous playlist item.", vip: true },
		{ action: "Next video for all", description: "Move every compatible player to its next playlist item.", vip: true },
		{ action: "Play / pause all", description: "Start or pause every compatible video together.", vip: true },
		{ action: "Backward all", description: "Seek all compatible videos backward by the configured amount.", vip: true },
		{ action: "Forward all", description: "Seek all compatible videos forward by the configured amount.", vip: true },
		{ action: "−1 frame", description: "Step every compatible video backward by one frame.", vip: true },
		{ action: "+1 frame", description: "Step every compatible video forward by one frame.", vip: true },
		{ action: "Previous checkpoint for all", description: "Jump each video to its own previous checkpoint.", vip: true },
		{ action: "Next checkpoint for all", description: "Jump each video to its own next checkpoint.", vip: true },
		{ action: "Fit / fill all", description: "Toggle the content mode of every player.", vip: false },
		{ action: "Restart all", description: "Return every compatible video to the beginning.", vip: false },
		{ action: "Reload all web pages", description: "Reload every web source in the current layout.", vip: false },
		{ action: "Next bookmark", description: "Restore the next saved workspace.", vip: true },
		{ action: "Next same-orientation bookmark", description: "Cycle only through bookmarks with the current orientation.", vip: true },
		{ action: "Global progress", description: "Use one progress slider to seek all compatible videos.", vip: true },
		{ action: "Playback speed for all", description: "Change the speed of every compatible video together.", vip: true },
		{ action: "Hold to fast-forward", description: "Temporarily accelerate playback while the button is held.", vip: false },
		{ action: "Hold for slow playback", description: "Temporarily slow playback while the button is held.", vip: false },
		{ action: "Mute all", description: "Mute or restore all compatible audio.", vip: false },
		{ action: "Solo audio cycle", description: "Keep one player audible and cycle the audio focus.", vip: false },
		{ action: "Sleep timer", description: "Stop playback after the selected time.", vip: false },
		{ action: "Sync to video", description: "Open Sync Point to align the same action across videos.", vip: true },
		{ action: "Maximize cycle", description: "Temporarily maximize each region in turn; hold to restore the layout.", vip: false },
		{ action: "Next matching layout", description: "Switch to another layout with the same count and orientation.", vip: false },
		{ action: "Rotate contents forward", description: "Move the open sources through the current layout regions.", vip: false },
		{ action: "Adjust layout size", description: "Drag dividers to resize the current layout and save the result.", vip: true },
		{ action: "Rotate all media 90°", description: "Rotate compatible media clockwise by 90 degrees.", vip: false },
		{ action: "Adjust video position", description: "Drag sources between regions while preserving playback state.", vip: false },
	],
	note: "Actions that do not apply to the current media are skipped automatically. Buttons marked VIP become available after upgrading.",
};

const zhButtons: RichFeaturePage["buttonTable"] = {
	title: "所有可用的底部按键",
	description: "只添加真正顺手的动作，移除其余按键，再拖动排序。“更多”会始终保留，因此完整命令不会丢失。",
	columns: ["按键", "功能", "权限"],
	freeLabel: "免费",
	vipLabel: "VIP",
	rows: [
		{ action: "批量打开", description: "一次选择多个来源，并依次填入播放器区域。", vip: false },
		{ action: "全部关闭", description: "关闭当前布局中的全部来源。", vip: false },
		{ action: "选择布局", description: "打开默认、收藏和自定义布局库。", vip: false },
		{ action: "添加书签", description: "保存当前来源、布局、播放位置和关联状态。", vip: false },
		{ action: "书签列表", description: "查看并恢复已经保存的完整工作台。", vip: false },
		{ action: "锁定", description: "锁定工作台，避免误触改变当前状态。", vip: false },
		{ action: "导出", description: "打开分屏视频导出。", vip: false },
		{ action: "对比截图", description: "把当前多画面对比保存为一张图片。", vip: false },
		{ action: "下载", description: "打开受支持的下载操作；是否可用取决于地区和来源。", vip: false },
		{ action: "更多", description: "打开没有直接放在底栏上的全部命令。", vip: false },
		{ action: "全部上一个视频", description: "让所有兼容播放器切换到播放列表中的上一个视频。", vip: true },
		{ action: "全部下一个视频", description: "让所有兼容播放器切换到播放列表中的下一个视频。", vip: true },
		{ action: "全部播放／暂停", description: "同时播放或暂停所有兼容视频。", vip: true },
		{ action: "全部后退", description: "按设定时长让所有兼容视频一起后退。", vip: true },
		{ action: "全部前进", description: "按设定时长让所有兼容视频一起前进。", vip: true },
		{ action: "全部后退 1 帧", description: "让所有兼容视频后退一帧。", vip: true },
		{ action: "全部前进 1 帧", description: "让所有兼容视频前进一帧。", vip: true },
		{ action: "全部上一个存档点", description: "让每个视频跳到自己的上一个存档点。", vip: true },
		{ action: "全部下一个存档点", description: "让每个视频跳到自己的下一个存档点。", vip: true },
		{ action: "全部适应／填充", description: "切换全部播放器的画面填充方式。", vip: false },
		{ action: "全部重新播放", description: "让所有兼容视频回到开头。", vip: false },
		{ action: "全部网页刷新", description: "刷新当前布局中的所有网页。", vip: false },
		{ action: "下一个书签", description: "恢复下一个已经保存的工作台。", vip: true },
		{ action: "下一个同方向书签", description: "只在与当前横竖方向一致的书签之间切换。", vip: true },
		{ action: "全局进度条", description: "用一条进度条拖动所有兼容视频。", vip: true },
		{ action: "全部切换速度", description: "同时调整所有兼容视频的播放速度。", vip: true },
		{ action: "长按快进播放", description: "按住时临时加速播放，松开后恢复。", vip: false },
		{ action: "长按慢速播放", description: "按住时临时慢放，松开后恢复。", vip: false },
		{ action: "全部静音", description: "同时静音或恢复全部兼容音频。", vip: false },
		{ action: "单独声音循环", description: "只保留一个播放器出声，并循环切换声音焦点。", vip: false },
		{ action: "睡眠定时", description: "在指定时间后停止播放。", vip: false },
		{ action: "同步到视频", description: "打开同步点，把多个视频对齐到同一个动作。", vip: true },
		{ action: "循环最大化", description: "依次临时放大各区域；长按可恢复布局。", vip: false },
		{ action: "下一个同数量同方向布局", description: "不改变内容，切换到数量和方向相同的另一个布局。", vip: false },
		{ action: "内容向前轮换", description: "让已经打开的来源在当前布局区域之间轮换。", vip: false },
		{ action: "调整布局尺寸", description: "拖动分隔线调整当前布局，并保存结果。", vip: true },
		{ action: "全部顺时针旋转 90°", description: "把兼容媒体统一顺时针旋转 90 度。", vip: false },
		{ action: "调整视频位置", description: "在不同区域之间拖动来源，同时保留播放状态。", vip: false },
	],
	note: "不适用于当前媒体的操作会自动跳过。标有 VIP 的按键在升级后即可使用。",
};

const en: Record<FeatureSlug, RichFeaturePage> = {
	"multi-video-player": {
		heroMedia: video(
			"/assets/videos/chapter-play-preview.mp4",
			"/assets/videos/chapter-play-poster.jpg",
			"Multiple videos playing in one landscape split-screen workspace",
		),
		sections: [
			{
				kicker: "Layouts",
				title: "Start with 144 layouts. Build the 145th yourself.",
				description:
					"Browse presets by video count and orientation, keep favorites close, or move into the custom editor when a fixed grid is not enough.",
				gallery: [
					image("/assets/features/layout-library-1.jpg", "Preset layout library for one to six videos"),
					image("/assets/features/layout-library-2.jpg", "Four-video and centrally symmetrical layouts"),
					image("/assets/features/custom-layouts.jpg", "Saved custom layouts with create and clipboard import"),
					image("/assets/features/custom-layout-editor.jpg", "Custom layout editor with movable and resizable regions"),
				],
				cards: [
					{ title: "144 built-in presets", description: "Filter by 1–7 columns, portrait, landscape-right, or landscape-left, then favorite the layouts you reuse." },
					{ title: "Custom layout editor", description: "Add or remove blocks, drag to move, pull corners to resize, edit split lines, and save the result." },
					{ title: "Resize without rebuilding", description: "Drag the yellow dividers in supported layouts; the adjusted dimensions are stored locally." },
					{ title: "Share a layout", description: "Import a custom layout definition from the clipboard instead of recreating it by hand." },
				],
			},
			{
				kicker: "iPad",
				title: "More screen becomes more useful screen.",
				description:
					"The same workspace runs on iPhone and iPad. A larger iPad canvas makes dense layouts easier to monitor, while portrait and landscape templates keep every region practical.",
				cards: [
					{ title: "2–36 views", description: "Use a clean comparison on iPhone or build a dense monitoring wall on iPad." },
					{ title: "Portrait and landscape", description: "Choose layouts that match the device and the orientation of the source videos." },
					{ title: "Independent regions", description: "Each cell keeps its own source, playback state, framing, audio, and checkpoints." },
				],
			},
			{
				kicker: "External display",
				title: "Cast the workspace, not just one video.",
				description:
					"Send the complete multi-view layout to an AirPlay or wired display. The phone or iPad remains the controller while the external screen shows the views.",
				media: image("/assets/features/cast-settings.jpg", "Cast settings for an external split-screen display"),
				steps: [
					{ title: "Connect the display", description: "Start screen mirroring with AirPlay or connect a supported wired display." },
					{ title: "Open the layout", description: "Load the videos and choose the multi-view arrangement you want to show." },
					{ title: "Correct orientation", description: "If needed, set automatic adaptation or a fixed external-screen rotation." },
					{ title: "Finish the presentation", description: "Adjust safe margins and choose whether to show view numbers, file names, progress, and time." },
				],
				note: "The Cast Settings screen also links to the in-app guide “How to Cast to Watch 36 Videos.”",
			},
			{
				kicker: "Playback settings",
				title: "Tune playback once, then keep the behavior consistent.",
				description:
					"Set the playback behavior that matters when many sources share one screen.",
				cards: [
					{ title: "Seeking and time", description: "Choose forward/back amounts from seconds or percentages, show milliseconds, remember positions, and enable checkpoints." },
					{ title: "Format compatibility", description: "Use the alternate player for formats such as MKV, FLV, F4V, RMVB, AVI, WebM, and WMV." },
					{ title: "Framing and gestures", description: "Fit or fill, remember the mode per video, rotate mismatched sources, pinch from 50% to 500%, pan, and set double-tap/swipe actions." },
					{ title: "Audio behavior", description: "Start muted, control per-video volume, normalize loud sources, keep background audio, or expose mute controls." },
					{ title: "Playback tools", description: "Set long-press fast/slow rates, show frame previews, and decide when next/previous video buttons appear." },
					{ title: "Advanced sampling", description: "VIP tools can sample multiple segments and configure segment length or starting positions." },
				],
			},
			{
				kicker: "Single-player controls",
				title: "Every region still has precise local controls.",
				description:
					"When one source needs individual attention, open its controls for precise adjustments, then return to the full layout without losing playback state.",
				cards: [
					{ title: "Playback and seeking", description: "Play or pause, scrub the timeline, jump forward or back, and change speed." },
					{ title: "Playlist navigation", description: "Move to previous or next media, inspect the playlist, and replace the current source." },
					{ title: "Picture and sound", description: "Mute, switch fit/fill, rotate, zoom, and reposition the active media." },
					{ title: "Checkpoints", description: "Add a checkpoint, jump to the next one, or open the checkpoint list for precise review." },
					{ title: "Floating controller", description: "Use the same important actions in a movable panel that snaps to an edge and collapses when not needed." },
				],
			},
		],
	},
	"global-video-controls": {
		heroMedia: chapterImage("/assets/chapters/chapter-control.jpg", "Bottom button customization screen"),
		sections: [
			{
				kicker: "Custom toolbar",
				title: "Keep the commands that match your workflow.",
				description:
					"The bottom bar is assembled by you. Move actions between Added and Not Added, drag to reorder, and leave rarely used controls inside More.",
				cards: [
					{ title: "One-tap global actions", description: "Apply playback, seeking, frames, speed, sound, rotation, and navigation to all compatible sources." },
					{ title: "Workspace commands", description: "Switch layouts, cycle maximized views, rotate content positions, resize dividers, save bookmarks, and export." },
					{ title: "Graceful mixed-media behavior", description: "A command runs where it makes sense and skips incompatible sources such as a PDF during frame stepping." },
				],
			},
		],
		buttonTable: enButtons,
	},
	"video-sync-comparison": {
		heroMedia: chapterImage("/assets/chapters/chapter-sync.jpg", "Sync Point screen with three video timelines"),
		sections: [
			{
				kicker: "Sync Point",
				title: "Tell each video where the same moment happens.",
				description:
					"Recordings can begin minutes apart. Sync Point stores an independent anchor for each clip, so the app aligns the action rather than assuming matching timestamps.",
				steps: [
					{ title: "Find the shared action", description: "Drag each timeline to the same movement, sound, or visible cue." },
					{ title: "Fine-tune the frame", description: "Use −1 Frame and +1 Frame for compatible videos, then set a small early-play offset when useful." },
					{ title: "Preview the relationship", description: "Play the aligned sources before committing to make sure the moment matches." },
					{ title: "Save and enable sync", description: "Store the anchors and turn on linked playback and seeking." },
				],
			},
			{
				kicker: "Precision review",
				title: "Keep the relationship after the first alignment.",
				description:
					"Sync Lock preserves the offsets as you play or seek. Checkpoints, milliseconds, slow playback, zoom, and frame stepping help reveal a difference that lasts only an instant.",
				cards: [
					{ title: "Sync Lock", description: "Maintain the saved relationship while compatible videos play and seek together." },
					{ title: "Frame stepping", description: "Move all ordinary videos one frame backward or forward; unsupported sources are skipped." },
					{ title: "Checkpoints", description: "Give each video its own review markers, then jump all players to their corresponding previous or next point." },
					{ title: "Saved workspaces", description: "A bookmark can preserve the layout, sources, positions, and synchronization configuration." },
				],
				note: "Sync Point and frame stepping apply to ordinary video sources; live streams, web pages, images, and PDFs do not have the same frame timeline.",
			},
		],
	},
	"split-screen-export": {
		heroMedia: chapterImage("/assets/chapters/chapter-export.jpg", "Split-screen export settings"),
		sections: [
			{
				kicker: "Output",
				title: "Turn the current layout into one finished video.",
				description:
					"Export renders the visible multi-view composition, not a loose collection of clips. Choose a preset or set the output precisely.",
				table: {
					title: "Export settings at a glance",
					description: "Choose the output settings that fit where and how the finished video will be watched.",
					columns: ["Area", "Options"],
					rows: [
						["Preset and ratio", "Custom, 9:16, YouTube, 2K, 1:1; current, 16:9, 9:16, 1:1, 4:3, and 3:4 ratios"],
						["Resolution", "480p, 720p, 1080p, 2K, and 4K"],
						["Frame rate", "24, 25, 30, 50, 60, and 120 fps; available choices vary with the output format"],
						["Bitrate", "Low, Best, and High"],
						["Per-video edits", "Crop, position, rotation, trim range, and playback speed"],
						["Appearance", "Background, border width/color, spacing, number/title/time overlays, and watermark"],
						["Audio", "Mute or choose sources, per-source volume, fades, background music, custom audio, trim, and preview"],
						["Workflow", "10-second preview, preflight checks, duration guidance, progress, and completion notification"],
					],
				},
			},
			{
				kicker: "Visual and audio finish",
				title: "The layout is only the starting point.",
				description:
					"Shape the final frame and mix without moving to a separate editor for the most common split-screen adjustments.",
				cards: [
					{ title: "Composition", description: "Preserve the current layout while adjusting background, borders, spacing, crop, position, and rotation." },
					{ title: "Information overlays", description: "Show view number, title, and time, then control format and font size." },
					{ title: "Watermark", description: "Add custom watermark text and choose its size." },
					{ title: "Audio mix", description: "Select audible sources, balance volume, add fades, and place background or custom audio." },
					{ title: "Preview first", description: "Create a short preview and resolve preflight warnings before the full render." },
					{ title: "VIP export tools", description: "2K/4K, high bitrate/60 fps, per-video speed and trim, advanced audio, overlays, and custom watermark controls require VIP." },
				],
			},
		],
	},
	"iptv-streaming": {
		heroMedia: chapterImage("/assets/chapters/chapter-media.jpg", "PDF, web page, images, and video in one layout"),
		sections: [
			{
				kicker: "Mixed sources",
				title: "A view can be live, interactive, static, or local.",
				description:
					"Combine local video, live streams, RTSP, Xtream channels, images, web pages, PDFs, and music inside one layout. Each region keeps the controls appropriate to its source.",
				cards: [
					{ title: "Live and RTSP", description: "Paste one stream URL per line, open HLS/M3U8 or RTSP sources, keep history and bookmarks, and retry after connection failures." },
					{ title: "Xtream channels", description: "Save an Xtream account, browse and search channels, then open selected streams in the multi-view workspace." },
					{ title: "Web pages", description: "Browse with back/forward controls, choose toolbar placement, keep bookmarks, and block unwanted app-opening redirects." },
					{ title: "Images", description: "Open albums or folders, include subfolders, choose forward/reverse/random order, set images per page and interval, then zoom from 50% to 500%." },
					{ title: "PDF", description: "Open multiple PDFs, view page count, use a cached thumbnail strip, tap a thumbnail or page label to jump, and use standard PDF zoom and scrolling." },
					{ title: "Music", description: "Keep audio alongside visual references and control which player is audible with global or solo-audio tools." },
				],
				note: "Image playback, PDF reading, and web browsing are available with VIP.",
			},
			{
				kicker: "How to add a source",
				title: "Different formats enter through one workspace.",
				description:
					"Choose the browser that matches the material, place the result in any open region, and save the complete arrangement as a bookmark.",
				steps: [
					{ title: "Choose the source type", description: "Open local media, stream URL, Xtream, image browser, web browser, PDF, or music." },
					{ title: "Load or connect", description: "Select a file or folder, paste URLs, sign in to Xtream, or navigate to the page you need." },
					{ title: "Place it in the layout", description: "Use any preset or custom region; replace or move a source later without rebuilding the workspace." },
					{ title: "Save the setup", description: "Create a bookmark to restore the sources, layout, and playback state together." },
				],
			},
		],
	},
};

const zhHans: Record<FeatureSlug, RichFeaturePage> = {
	"multi-video-player": {
		heroMedia: video(
			"/assets/videos/chapter-play-preview.mp4",
			"/assets/videos/chapter-play-poster.jpg",
			"横屏分屏工作台中同时播放多个视频",
		),
		sections: [
			{
				kicker: "布局",
				title: "从 144 种布局开始，也可以亲手做出第 145 种。",
				description: "按视频数量和横竖方向筛选默认布局，把常用布局加入收藏；固定网格不够用时，直接进入自定义编辑器。",
				gallery: [
					image("/assets/features/layout-library-1.jpg", "一到六个视频的默认布局库"),
					image("/assets/features/layout-library-2.jpg", "四视频与中心对称布局"),
					image("/assets/features/custom-layouts.jpg", "已保存的自定义布局、创建与剪贴板导入"),
					image("/assets/features/custom-layout-editor.jpg", "可移动、缩放和拆分区域的自定义布局编辑器"),
				],
				cards: [
					{ title: "144 种默认布局", description: "按 1～7 列、竖屏、横屏向右或横屏向左筛选，并收藏经常使用的布局。" },
					{ title: "自定义布局编辑器", description: "添加或移除区块，拖动位置，拉动四角改变尺寸，编辑分隔线并保存。" },
					{ title: "不用重做也能调整", description: "在支持的布局中拖动黄色分隔线，调整后的尺寸会保存在本机。" },
					{ title: "共享自定义布局", description: "通过剪贴板导入布局定义，不必在另一台设备上重新搭建。" },
				],
			},
			{
				kicker: "iPad",
				title: "屏幕越大，能同时看清的内容越多。",
				description: "同一套工作台同时支持 iPhone 和 iPad。iPad 更大的画布适合密集布局，横屏和竖屏模板则让每个区域保持合理比例。",
				cards: [
					{ title: "2～36 个画面", description: "在 iPhone 上完成清晰对比，也可以在 iPad 上搭建密集监看墙。" },
					{ title: "横屏与竖屏", description: "根据设备方向和素材方向选择匹配的布局。" },
					{ title: "区域互相独立", description: "每个格子保留自己的来源、播放状态、画面位置、声音和存档点。" },
				],
			},
			{
				kicker: "投屏",
				title: "投出完整工作台，而不只是其中一个视频。",
				description: "通过 AirPlay 或有线外接屏幕展示整个多画面布局。iPhone 或 iPad 继续作为控制器，外接屏幕负责显示全部画面。",
				media: image("/assets/features/cast-settings.jpg", "外接分屏画面的投屏设置"),
				steps: [
					{ title: "连接屏幕", description: "通过 AirPlay 开始屏幕镜像，或连接受支持的有线显示设备。" },
					{ title: "打开布局", description: "载入视频并选择要展示的多画面布局。" },
					{ title: "修正方向", description: "如果方向不对，选择自动适应或固定的外接屏幕旋转方式。" },
					{ title: "完善展示", description: "调整安全边距，并决定是否显示画面序号、文件名、进度和时间。" },
				],
				note: "投屏设置页还内置“如何投屏看 36 个视频”的完整使用说明。",
			},
			{
				kicker: "播放设置",
				title: "一次设好播放规则，让所有视频保持一致手感。",
				description: "集中设置多来源同屏时真正重要的播放行为。",
				cards: [
					{ title: "跳转与时间", description: "前进／后退可选秒数或百分比，显示毫秒，记住播放位置，并启用存档点。" },
					{ title: "格式兼容", description: "可为 MKV、FLV、F4V、RMVB、AVI、WebM、WMV 等格式启用备用播放器。" },
					{ title: "画面与手势", description: "适应或填充、记住单个视频模式、修正方向、50%～500% 双指缩放、拖动画面，并设置双击和滑动动作。" },
					{ title: "声音行为", description: "默认静音、单视频音量、音量均衡、后台声音，以及是否展示静音控制。" },
					{ title: "播放工具", description: "设置长按快放／慢放速度、展示帧预览，并决定何时显示上一个／下一个视频。" },
					{ title: "高级采样", description: "VIP 可从视频多个位置抽取片段，并设置片段长度和起始位置。" },
				],
			},
			{
				kicker: "单个播放器控制",
				title: "每个区域依然保留精确的单独控制。",
				description: "某一个来源需要单独处理时，可以打开它的控制面板精确调整；返回完整布局后，播放状态不会丢失。",
				cards: [
					{ title: "播放与跳转", description: "播放／暂停、拖动时间线、前进／后退，并调整速度。" },
					{ title: "播放列表", description: "切换上一个或下一个媒体，查看播放列表，并替换当前来源。" },
					{ title: "画面与声音", description: "静音、适应／填充、旋转、缩放并移动当前媒体。" },
					{ title: "存档点", description: "添加存档点、跳到下一个，或者打开列表进行精准回看。" },
					{ title: "悬浮控制面板", description: "把相同的关键动作放进可移动面板；它会吸附屏幕边缘，也可以收起。" },
				],
			},
		],
	},
	"global-video-controls": {
		heroMedia: chapterImage("/assets/chapters/chapter-control.jpg", "底部按键自定义界面"),
		sections: [
			{
				kicker: "自定义工具栏",
				title: "只留下真正适合你工作流的命令。",
				description: "底部栏由你自己组合。在“已添加”和“未添加”之间移动按键，拖动排序，把偶尔才用的操作留在“更多”里。",
				cards: [
					{ title: "一键作用于全部", description: "让所有兼容来源统一播放、跳转、逐帧、变速、静音、旋转或切换内容。" },
					{ title: "工作台命令", description: "切换布局、循环放大、轮换内容、调整分隔线、保存书签并导出。" },
					{ title: "混合来源也不冲突", description: "命令只在合理的来源上执行；例如逐帧时会自动跳过 PDF。" },
				],
			},
		],
		buttonTable: zhButtons,
	},
	"video-sync-comparison": {
		heroMedia: chapterImage("/assets/chapters/chapter-sync.jpg", "包含三条视频时间线的同步点界面"),
		sections: [
			{
				kicker: "同步点",
				title: "告诉每个视频：同一个瞬间分别发生在哪里。",
				description: "几段录制可能相差几分钟才开始。同步点为每个视频保存独立锚点，让 App 对齐动作，而不是假设时间码相同。",
				steps: [
					{ title: "找到共同动作", description: "拖动每条时间线，找到相同的动作、声音或视觉提示。" },
					{ title: "精确到帧", description: "对兼容视频使用“后退 1 帧”和“前进 1 帧”，必要时再设置少量提前播放偏移。" },
					{ title: "预览同步关系", description: "保存之前先一起播放，确认每个来源确实落在同一个瞬间。" },
					{ title: "保存并启用同步", description: "保存锚点，打开关联播放和关联拖动。" },
				],
			},
			{
				kicker: "精准回看",
				title: "第一次对齐之后，持续保持它们的时间关系。",
				description: "同步锁定会在播放和拖动时维持偏移。存档点、毫秒时间、慢放、缩放和逐帧能帮助你看清只持续一瞬的差别。",
				cards: [
					{ title: "同步锁定", description: "让兼容视频在一起播放和跳转时始终保持已保存的关系。" },
					{ title: "逐帧移动", description: "让所有普通视频前进或后退一帧；不支持的来源会自动跳过。" },
					{ title: "存档点", description: "为每个视频设置自己的回看标记，再让全部播放器跳到各自的上一个或下一个点。" },
					{ title: "保存工作台", description: "书签可以同时保留布局、来源、播放位置和同步配置。" },
				],
				note: "同步点和逐帧适用于普通视频；直播、网页、图片与 PDF 没有相同的逐帧时间线。",
			},
		],
	},
	"split-screen-export": {
		heroMedia: chapterImage("/assets/chapters/chapter-export.jpg", "分屏视频导出设置"),
		sections: [
			{
				kicker: "输出",
				title: "把当前布局直接变成一个完整视频。",
				description: "导出会渲染眼前的多画面构图，而不是输出一组零散片段。可以选择预设，也可以逐项控制结果。",
				table: {
					title: "导出设置一览",
					description: "根据成片的观看位置和用途，选择合适的输出设置。",
					columns: ["范围", "选项"],
					rows: [
						["预设与比例", "自定义、9:16、YouTube、2K、1:1；当前比例、16:9、9:16、1:1、4:3、3:4"],
						["清晰度", "480p、720p、1080p、2K、4K"],
						["帧率", "24、25、30、50、60、120 fps；可选范围会随输出格式变化"],
						["码率", "低、最佳、高"],
						["单视频调整", "裁切、位置、旋转、片段范围、播放速度"],
						["画面样式", "背景、边框宽度／颜色、间距、序号／标题／时间信息、水印"],
						["音频", "静音或选择来源、单来源音量、淡入淡出、背景音乐、自定义音频、裁切与预听"],
						["工作流", "10 秒预览、导出前检查、时长提示、进度和完成通知"],
					],
				},
			},
			{
				kicker: "画面与声音",
				title: "布局只是成片的起点。",
				description: "在一个页面完成常见的分屏画面和混音调整，不必为了基础处理切换到另一款编辑器。",
				cards: [
					{ title: "画面构成", description: "保留当前布局，同时调整背景、边框、间距、裁切、位置和旋转。" },
					{ title: "信息叠加", description: "展示画面序号、标题和时间，并调整时间格式与字号。" },
					{ title: "水印", description: "添加自定义水印文字，并选择大小。" },
					{ title: "声音混合", description: "选择发声来源、平衡音量、加入淡入淡出，并添加背景或自定义音频。" },
					{ title: "先预览再导出", description: "先生成短预览，处理导出前警告，再开始完整渲染。" },
					{ title: "VIP 导出能力", description: "2K／4K、高码率／60 fps、单视频变速与裁切、高级音频、信息叠加和自定义水印需要 VIP。" },
				],
			},
		],
	},
	"iptv-streaming": {
		heroMedia: chapterImage("/assets/chapters/chapter-media.jpg", "同一布局中的 PDF、网页、图片与视频"),
		sections: [
			{
				kicker: "混合来源",
				title: "一个画面可以是直播、交互内容、静态资料或本地媒体。",
				description: "在同一个布局中组合本地视频、直播、RTSP、Xtream 频道、图片、网页、PDF 和音乐。每个区域保留适合自身来源的控制。",
				cards: [
					{ title: "直播与 RTSP", description: "每行粘贴一个直播地址，打开 HLS／M3U8 或 RTSP，保留历史和书签，并在连接失败后自动重试。" },
					{ title: "Xtream 频道", description: "保存 Xtream 账号，浏览和搜索频道，再把所选直播放进多画面工作台。" },
					{ title: "网页", description: "使用前进／后退、选择工具栏位置、保存书签，并阻止不希望发生的跳转到其他 App。" },
					{ title: "图片", description: "打开相册或文件夹、递归读取子文件夹，选择正序／倒序／随机、每页数量和间隔，并进行 50%～500% 缩放。" },
					{ title: "PDF", description: "同时打开多个 PDF，查看页数和缩略图条，点击缩略图或页码跳转，并使用标准 PDF 缩放与滚动。" },
					{ title: "音乐", description: "让音频和视觉参考资料同时存在，再通过全局静音或单独声音循环决定哪个播放器发声。" },
				],
				note: "图片播放、PDF 阅读和网页浏览可在升级 VIP 后使用。",
			},
			{
				kicker: "如何添加来源",
				title: "不同格式，从同一个工作台进入。",
				description: "选择与素材匹配的浏览器，把结果放入任意区域，再将整个组合保存为书签。",
				steps: [
					{ title: "选择来源类型", description: "打开本地媒体、直播地址、Xtream、图片浏览器、网页、PDF 或音乐。" },
					{ title: "载入或连接", description: "选择文件或文件夹、粘贴地址、登录 Xtream，或者进入需要的网页。" },
					{ title: "放进布局", description: "使用任何默认或自定义区域；之后可以替换或移动来源，不必重建工作台。" },
					{ title: "保存组合", description: "创建书签，一次恢复来源、布局和播放状态。" },
				],
			},
		],
	},
};

const toTraditional = OpenCC.Converter({ from: "cn", to: "tw" });

function convertDeep<T>(value: T): T {
	if (typeof value === "string") return toTraditional(value) as T;
	if (Array.isArray(value)) return value.map((item) => convertDeep(item)) as T;
	if (value && typeof value === "object") {
		return Object.fromEntries(
			Object.entries(value as Record<string, unknown>).map(([key, item]) => [
				key,
				convertDeep(item),
			]),
		) as T;
	}
	return value;
}

export const featureDetails: Record<Locale, Record<FeatureSlug, RichFeaturePage>> = {
	"en-US": en,
	"zh-Hans": zhHans,
	"zh-Hant": convertDeep(zhHans),
};

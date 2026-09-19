import type { GuideImage, GuidePage } from "./guides";
import type { Locale } from "./locales";
import translationData from "./workflowGuideTranslations.json";

type Platform = "ios" | "android";
type Topic = "smart-layout" | "resize-reorder";
type BaseLocale = "en-US" | "zh-Hans";
type TranslatedLocale = Exclude<Locale, BaseLocale>;

const slugs = {
	"smart-layout": {
		ios: "auto-arrange-portrait-landscape-videos-iphone-ipad",
		android: "auto-arrange-portrait-landscape-videos-android",
	},
	"resize-reorder": {
		ios: "resize-rearrange-split-screen-videos-iphone-ipad",
		android: "resize-rearrange-split-screen-videos-android",
	},
} as const satisfies Record<Topic, Record<Platform, GuidePage["slug"]>>;

function screenshot(
	platform: Platform,
	locale: Locale,
	topic: Topic,
	file: string,
	caption: string,
): GuideImage {
	const ios = platform === "ios";
	return {
		src: `/images/guides/${topic}/${platform}/${locale === "zh-Hans" ? "zh-Hans" : "en"}/${file}.webp`,
		alt: `${ios ? "iPhone" : "Pixel 8"} · ${caption}`,
		caption,
		width: ios ? 1319 : 1191,
		height: ios ? 2748 : 2508,
	};
}

function smartLayoutGuide(locale: BaseLocale, platform: Platform): GuidePage {
	const zh = locale === "zh-Hans";
	const ios = platform === "ios";
	const device = ios ? (zh ? "iPhone 或 iPad" : "iPhone or iPad") : (zh ? "安卓手机或平板" : "an Android phone or tablet");
	const rearrangeAction = zh ? "调整内容位置" : (ios ? "Rearrange Content" : "Adjust Content Position");
	const slug = slugs["smart-layout"][platform];
	const otherPlatformSlug = slugs["smart-layout"][ios ? "android" : "ios"];
	const resizeSlug = slugs["resize-reorder"][platform];
	const image = (file: string, caption: string) => screenshot(platform, locale, "smart-layout", file, caption);
	const captions = zh ? {
		toolbar: "在底部按钮设置中加入“智能排列”，以后可以随时一键打开。",
		select: "选择相册视频或文件，也可以先启用视频筛选器。",
		recommendations: "App 根据八个视频的横竖比例生成三种推荐布局，并显示画面利用率。",
		result: "横屏和竖屏视频自动放入更合适的区域，八个画面同时保持可见。",
	} : {
		toolbar: "Add Smart Layout to the bottom toolbar so it is always one tap away.",
		select: "Choose album videos or files, with an optional video filter.",
		recommendations: "The app analyzes eight video dimensions and suggests layouts with their screen utilization.",
		result: "Portrait and landscape clips are placed in better-fitting regions while all eight remain visible.",
	};

	return {
		slug,
		platform,
		otherPlatformSlug,
		eyebrow: ios ? "iPhone / iPad" : "Android",
		title: zh
			? `${ios ? "iPhone" : "安卓手机"}如何自动排列横屏和竖屏视频？`
			: `How to automatically arrange portrait and landscape videos on ${device}`,
		seoTitle: zh
			? `${ios ? "iPhone" : "安卓手机"}如何自动排列横屏和竖屏视频？智能分屏教程`
			: `Auto-Arrange Portrait and Landscape Videos on ${ios ? "iPhone or iPad" : "Android"}`,
		metaDescription: zh
			? `在${device}上混合播放横屏和竖屏视频时，用 Split Screen Player 的智能排列自动推荐高利用率分屏布局。按真实截图选择视频并应用布局。`
			: `Mix portrait and landscape videos on ${device}. Use Smart Layout in Split Screen Player to analyze video dimensions and suggest an efficient multi-video arrangement.`,
		summary: zh
			? "不用逐个试布局。选择想一起播放的视频后，App 会根据每个视频的宽高比例给出多种排列建议，并标出画面利用率。"
			: "Instead of trying layouts one by one, select the videos you want to watch together. The app uses their dimensions to suggest several arrangements and shows the screen utilization of each one.",
		answer: zh
			? `在${device}上打开 Split Screen Player，把“智能排列”加入底部按钮，选择相册视频或文件，再从“推荐”“选择布局 2”等方案中选一个。App 会按视频尺寸自动安排横屏和竖屏画面。`
			: `Open Split Screen Player on ${device}, add Smart Layout to the bottom toolbar, choose videos from your album or files, then select one of the recommended arrangements. The app automatically places portrait and landscape clips according to their dimensions.`,
		heroImage: image("04-result", captions.result),
		steps: [
			{
				title: zh ? "把“智能排列”放到底部按钮" : "Add Smart Layout to the bottom toolbar",
				description: zh
					? `打开“更多菜单”中的“自定义首页底部按钮”，确认“智能排列”已添加。将它排在常用位置，以后不用每次进入设置。`
					: `Open “Customize Home Bottom ${ios ? "Buttons" : "Toolbar"}” from More and make sure Smart Layout is added. Move it near the front if you use it often.`,
				detail: zh ? "同一页也可以加入“选择布局”“调整内容位置”和“调整布局大小”。" : `The same screen can add Choose Layout, ${rearrangeAction}, and Adjust Layout Size.`,
				image: image("01-toolbar", captions.toolbar),
			},
			{
				title: zh ? "选择需要一起排列的视频" : "Choose the videos to arrange together",
				description: zh
					? `点按“智能排列”，再选择“相册视频”或“文件”。如果素材很多，可以先打开“视频筛选器”，缩小待选范围。`
					: `Tap Smart Layout, then choose album videos or files. If your library is large, turn on the video filter before opening the picker.`,
				detail: zh ? "尽量一次选齐本次要看的视频，推荐结果会根据实际数量和横竖比例变化。" : "Select the complete group for this session because the suggestions depend on both video count and orientation.",
				image: image("02-select-videos", captions.select),
			},
			{
				title: zh ? "比较推荐布局和画面利用率" : "Compare the recommended layouts",
				description: zh
					? `查看“推荐”和其他备选布局。每个方案会标出横屏或竖屏、视频数量与画面利用率；选择更符合当前握持方向的方案。`
					: `Review Best and the alternative layouts. Each option identifies portrait or landscape orientation, video count, and screen utilization. Pick the one that matches how you are holding the device.`,
				detail: zh ? "“画面利用率”衡量区域是否充分利用屏幕，不代表所有视频都会完全无裁切；需要时仍可切换适应或填充模式。" : "Screen utilization measures how efficiently the regions fill the display. It does not guarantee that every clip is uncropped; use Fit or Fill when needed.",
				image: image("03-recommendations", captions.recommendations),
			},
			{
				title: zh ? "应用布局并分别控制视频" : "Apply the layout and control each video",
				description: zh
					? "选择方案后，视频会直接进入对应区域。每个视频仍可单独播放、暂停、静音或调整画面，也可以使用底部按钮批量控制。"
					: "After you choose a suggestion, the videos open in their assigned regions. Each clip still has individual playback and display controls, while the bottom toolbar can control them as a group.",
				detail: zh ? "不满意时可以再次打开“智能排列”换一个方案，或改用“选择布局”手动指定。" : "If the result is not right, run Smart Layout again for another suggestion or use Choose Layout for manual control.",
				image: image("04-result", captions.result),
			},
		],
		tips: [],
		relatedFeature: "multi-video-player",
		article: {
			featuresHeading: zh ? "什么时候适合使用智能排列" : "When Smart Layout is most useful",
			featuresIntro: zh ? "它最适合方向和比例混杂的素材。先让 App 解决整体分区，再处理个别视频的显示细节。" : "It is especially useful for a mixed set of orientations and aspect ratios. Let the app solve the overall arrangement first, then fine-tune individual clips.",
			features: [
				{ title: zh ? "混合横屏与竖屏素材" : "Mix portrait and landscape sources", description: zh ? "旅行、训练、监控或多机位素材经常方向不同。推荐布局会把窄画面和宽画面放进更匹配的区域。" : "Travel, training, monitoring, and multi-camera footage often mixes orientations. Recommendations place narrow and wide clips into better-matched regions." },
				{ title: zh ? "从多个高利用率方案中选择" : "Choose from several efficient options", description: zh ? "不只给出唯一答案。可以在横屏、竖屏和不同区域组合之间选择，更容易适配手机、平板或投屏画面。" : "You are not limited to one answer. Compare portrait, landscape, and different region groupings for a phone, tablet, or external display." },
				{ title: zh ? "继续调整区域大小和位置" : "Resize and rearrange after choosing a preset", description: zh ? "如果还想突出其中一个视频，可以切换到预设布局，再拖动黄色分隔线或交换内容位置。" : "To emphasize one clip, switch to a preset layout, drag its yellow dividers, or swap content positions.", link: { label: zh ? "查看大小和位置调整教程" : "See the resize and rearrange guide", path: `guides/${resizeSlug}` } },
			],
			faq: [
				{ question: zh ? "最多可以智能排列多少个视频？" : "How many videos can Smart Layout arrange?", answer: zh ? "Split Screen Player 的布局最多支持 36 个画面。实际同时播放是否流畅，还取决于设备性能、视频分辨率、编码和帧率。" : "Split Screen Player supports layouts with up to 36 regions. Smooth simultaneous playback still depends on device performance, resolution, codec, and frame rate." },
				{ question: zh ? "智能排列会修改原视频吗？" : "Does Smart Layout modify the original videos?", answer: zh ? "不会。它只决定每个视频在当前工作区里的区域和排列方式，不会裁剪或覆盖设备中的原文件。" : "No. It only changes where each video appears in the current workspace; it does not trim, overwrite, or alter the source files on your device." },
				{ question: zh ? "为什么有些视频看起来仍有留黑或裁切？" : "Why does a clip still have black bars or cropping?", answer: zh ? "推荐布局依据视频尺寸匹配区域，但区域比例不一定与每个视频完全相同。可以在视频控制中切换“适应”或“填充”，并调整缩放和位置。" : "Recommendations match regions to video dimensions, but a region may not have the exact same aspect ratio. Switch between Fit and Fill, then adjust zoom or position if needed." },
				{ question: zh ? "可以把智能排列的结果导出成一个视频吗？" : "Can I export the arranged videos as one file?", answer: zh ? "可以。确认布局、裁切和播放顺序后，打开“导出分屏视频”设置比例、分辨率、声音和时间范围，再渲染成一个文件。" : "Yes. After checking layout, crop, and playback order, open Split-Screen Export to choose ratio, resolution, audio, and time range, then render one file." },
			],
			closingTitle: zh ? "让横屏和竖屏视频自动找到合适位置" : "Let every orientation find a better place",
			closingDescription: zh ? `在${device}上下载 Split Screen Player，选择一组横竖屏视频，试试智能排列给出的布局建议。` : `Download Split Screen Player on ${device}, select a mixed group of clips, and compare the layouts Smart Layout suggests.`,
		},
	};
}

function resizeReorderGuide(locale: BaseLocale, platform: Platform): GuidePage {
	const zh = locale === "zh-Hans";
	const ios = platform === "ios";
	const device = ios ? (zh ? "iPhone 或 iPad" : "iPhone or iPad") : (zh ? "安卓手机或平板" : "an Android phone or tablet");
	const rearrangeAction = zh ? "调整内容位置" : (ios ? "Rearrange Content" : "Adjust Content Position");
	const slug = slugs["resize-reorder"][platform];
	const otherPlatformSlug = slugs["resize-reorder"][ios ? "android" : "ios"];
	const smartSlug = slugs["smart-layout"][platform];
	const image = (file: string, caption: string) => screenshot(platform, locale, "resize-reorder", file, caption);
	const files = ios
		? ["01-toolbar", "02-resize", "03-rearrange", "04-result"]
		: ["01-toolbar", "02-resize", "03-resized", "04-rearrange"];
	const captions = zh ? {
		toolbar: "把“调整内容位置”和“调整布局大小”加入底部按钮。",
		resize: "进入大小调整模式后，黄色分隔线会标出可以拖动的边界。",
		third: ios ? "每个区域出现拖动手柄，可将视频交换到另一个位置。" : "拖动黄色分隔线后，上方区域变小，下方区域获得更多空间。",
		fourth: ios ? "完成调整后返回正常播放界面，布局仍保留在当前工作区。" : "在内容位置调整模式中，把一个视频拖到另一区域即可交换位置。",
	} : {
		toolbar: `Add ${rearrangeAction} and Adjust Layout Size to the bottom toolbar.`,
		resize: "Resize mode marks every adjustable divider with a yellow line.",
		third: ios ? "Drag handles appear over each region so two videos can exchange positions." : "After dragging the yellow divider, the upper region is smaller and the lower region has more space.",
		fourth: ios ? "Finish editing to return to normal playback with the current arrangement preserved." : "In content-position mode, drag one video onto another region to swap them.",
	};

	return {
		slug,
		platform,
		otherPlatformSlug,
		eyebrow: ios ? "iPhone / iPad" : "Android",
		title: zh
			? `${ios ? "iPhone" : "安卓手机"}如何自由调整分屏视频的大小和位置？`
			: `How to resize and rearrange split-screen videos on ${device}`,
		seoTitle: zh
			? `${ios ? "iPhone" : "安卓手机"}如何调整分屏视频大小和位置？`
			: `Resize and Rearrange Split-Screen Videos on ${ios ? "iPhone or iPad" : "Android"}`,
		metaDescription: zh
			? `在${device}上拖动黄色分隔线调整分屏区域大小，并将视频拖到另一区域交换位置。按真实截图完成 Split Screen Player 设置。`
			: `Resize split-screen regions on ${device} by dragging yellow dividers, then move or swap videos between regions without rebuilding the workspace.`,
		summary: zh
			? "想让主视频更大、参考视频更小，或者把两个画面换个位置，不必重新选素材。预设布局可以直接拖动分隔线，内容也能在区域之间移动。"
			: "Make the main video larger, reduce a reference view, or swap two clips without selecting the sources again. Preset layouts have draggable dividers, and content can move between regions.",
		answer: zh
			? `在${device}上选择一个预设分屏布局，加入至少两个视频，然后用“调整布局大小”拖动黄色分隔线。需要换位时，打开“调整内容位置”，把一个视频拖到另一区域即可交换。`
			: `On ${device}, choose a preset split-screen layout and add at least two videos. Use Adjust Layout Size to drag the yellow dividers, then use ${rearrangeAction} to drag a clip onto another region and swap them.`,
		heroImage: image(ios ? "04-result" : "03-resized", ios ? captions.fourth : captions.third),
		steps: [
			{
				title: zh ? "准备预设布局和两个快捷按钮" : "Start with a preset and add both shortcuts",
				description: zh
					? `先在“选择布局”中选择包含两个或更多区域的预设布局，再到“自定义首页底部按钮”加入“调整内容位置”和“调整布局大小”。`
					: `Choose a preset with at least two regions, then open “Customize Home Bottom ${ios ? "Buttons" : "Toolbar"}” and add ${rearrangeAction} and Adjust Layout Size.`,
				detail: zh ? "大小调整只适用于预设布局；自定义布局、智能生成布局、最大化或对比模式下，按钮可能不可用。" : "Divider resizing works with preset layouts. It may be unavailable for custom or smart-generated layouts, maximized views, and comparison modes.",
				image: image(files[0], captions.toolbar),
			},
			{
				title: zh ? "拖动黄色分隔线改变区域大小" : "Drag a yellow divider to resize regions",
				description: zh
					? `点按“调整布局大小”。进入编辑状态后，拖动黄色横线或竖线，让重点视频占据更多空间；点按对勾完成。`
					: `Tap Adjust Layout Size. In edit mode, drag a yellow horizontal or vertical divider so the important video gets more space, then tap the checkmark.`,
				detail: zh ? "调整记录默认保存在本机，下次打开同一预设布局时可以自动恢复；可在通用设置中关闭。" : "Resize records are saved on the device by default and can be restored when you open the same preset again. This can be disabled in General settings.",
				image: image(files[1], captions.resize),
			},
			{
				title: zh ? (ios ? "打开内容位置调整模式" : "确认新的区域比例") : (ios ? "Open content-position mode" : "Check the new region proportions"),
				description: zh
					? ios
						? `点按“调整内容位置”，每个有内容的区域会显示拖动手柄。播放会暂停，避免拖动时误触视频控制。`
						: `拖动完成后先确认两个区域都保留了需要的主体。分隔线只改变区域比例，不会修改原视频。`
					: ios
						? `Tap ${rearrangeAction}. A drag handle appears over every occupied region, and playback pauses to prevent accidental video controls while moving content.`
						: `After dragging, check that both regions still show the subjects you need. The divider only changes region proportions; it does not modify the source videos.`,
				detail: zh ? "如果只想移动到空区域，直接拖过去；拖到已有内容的区域时，两个内容会交换。" : "Drag into an empty region to move the clip, or onto an occupied region to swap the two contents.",
				image: image(files[2], captions.third),
			},
			{
				title: zh ? (ios ? "拖动内容换位并完成" : "拖动视频到另一区域") : (ios ? "Move the content and finish" : "Drag a video onto another region"),
				description: zh
					? ios
						? "按住区域中央的手柄，将视频拖到目标区域。交换完成后点按对勾，返回正常播放界面。"
						: "点按“调整内容位置”，再按住视频中央的手柄拖到目标区域。两个已有内容的区域会直接交换，不需要重新打开文件。"
					: ios
						? "Hold the handle in the middle of a region and drag it to the destination. Tap the checkmark when the swap is complete to return to normal playback."
						: `Tap ${rearrangeAction}, hold the handle in the middle of a video, and drag it to the destination. Two occupied regions swap immediately without reopening the files.`,
				detail: zh ? "完成后仍可分别控制每个视频，也可以继续使用批量播放、暂停和静音。" : "After finishing, each video still has its own controls, and group play, pause, and mute remain available.",
				image: image(files[3], captions.fourth),
			},
		],
		tips: [],
		relatedFeature: "multi-video-player",
		article: {
			featuresHeading: zh ? "用大小和位置表达观看重点" : "Use size and position to show what matters",
			featuresIntro: zh ? "区域比例不仅影响美观，也会直接影响比较、演示和投屏时的可读性。" : "Region proportions affect more than appearance: they change what viewers can read and compare on the phone, tablet, or external display.",
			features: [
				{ title: zh ? "突出主画面，保留参考画面" : "Emphasize one view and keep the reference", description: zh ? "把主视频区域放大，同时让辅助角度、说明画面或时间参考继续留在屏幕上。" : "Enlarge the main video while keeping another angle, instruction clip, or timing reference visible." },
				{ title: zh ? "换位时不必重新选择文件" : "Swap positions without reopening files", description: zh ? "内容位置调整只改变视频所在的区域，适合快速把主画面移到更顺眼或更适合投屏的位置。" : "Content-position mode changes only the destination region, making it quick to move the main view to a better location." },
				{ title: zh ? "先智能排列，再选预设微调" : "Start smart, then fine-tune with a preset", description: zh ? "素材方向很多时，可先用智能排列寻找合适组合；需要可拖动分隔线时，再选接近的预设布局继续调整。" : "For a mixed set of orientations, use Smart Layout to explore useful arrangements, then choose a similar preset when you need draggable dividers.", link: { label: zh ? "查看智能排列教程" : "See the Smart Layout guide", path: `guides/${smartSlug}` } },
			],
			faq: [
				{ question: zh ? "为什么“调整布局大小”按钮是灰色的？" : "Why is Adjust Layout Size disabled?", answer: zh ? "常见原因是当前使用自定义或智能生成布局、只有一个区域、某个画面已最大化，或正在使用重叠/划动对比。请先切换到包含多个区域的预设布局。" : "Common reasons include a custom or smart-generated layout, a single-region layout, a maximized view, or an active overlay/swipe comparison. Switch to a multi-region preset first." },
				{ question: zh ? "调整后的大小会保存吗？" : "Will the resized layout be saved?", answer: zh ? "默认会保存在当前设备上，并在再次打开同一预设布局时恢复。你可以在通用设置中关闭布局大小记录。" : "By default, the resize record stays on the current device and is restored when the same preset is opened again. You can turn off layout-size records in General settings." },
				{ question: zh ? "调整区域会裁剪原视频吗？" : "Does resizing crop the original video file?", answer: zh ? "不会。它只改变工作区里的显示区域。区域比例变化后，画面可能按“适应”出现留黑，或按“填充”产生显示裁切，但原文件不会改变。" : "No. It only changes the display region in the workspace. Fit may show bars and Fill may crop the displayed frame, but the original file is unchanged." },
				{ question: zh ? "可以自由画出任意大小和位置吗？" : "Can I draw completely custom regions?", answer: zh ? "可以在自定义布局中创建更自由的区域几何。黄色分隔线调整适合快速修改已有预设，两者用途不同。" : "Use a custom layout when you need arbitrary region geometry. Yellow-divider resizing is the faster option for modifying an existing preset." },
			],
			closingTitle: zh ? "把重要画面放大，把参考画面留在身边" : "Give the important view more room",
			closingDescription: zh ? `在${device}上下载 Split Screen Player，用两个视频试着拖动分隔线和交换位置。` : `Download Split Screen Player on ${device}, open two videos, and try resizing and swapping their regions.`,
		},
	};
}

type TranslatedStepCopy = {
	title: string;
	description: string;
	detail: string;
	caption: string;
};

type TranslatedFeatureCopy = {
	title: string;
	description: string;
};

type TranslatedFaqCopy = {
	question: string;
	answer: string;
};

type WorkflowGuideCopy = {
	deviceIOS: string;
	deviceAndroid: string;
	labels: Record<
		| "smartLayout"
		| "chooseLayout"
		| "customizeToolbar"
		| "adjustContent"
		| "adjustSize"
		| "albumVideos"
		| "files"
		| "videoFilter"
		| "recommended"
		| "fit"
		| "fill"
		| "export"
		| "generalSettings",
		string
	>;
	smart: {
		title: string;
		seoTitle: string;
		meta: string;
		summary: string;
		answer: string;
		steps: TranslatedStepCopy[];
		featuresHeading: string;
		featuresIntro: string;
		features: TranslatedFeatureCopy[];
		featureLink: string;
		faq: TranslatedFaqCopy[];
		closingTitle: string;
		closingDescription: string;
	};
	resize: {
		title: string;
		seoTitle: string;
		meta: string;
		summary: string;
		answer: string;
		steps: Record<
			"setup" | "resize" | "thirdIOS" | "thirdAndroid" | "fourthIOS" | "fourthAndroid",
			TranslatedStepCopy
		>;
		featuresHeading: string;
		featuresIntro: string;
		features: TranslatedFeatureCopy[];
		featureLink: string;
		faq: TranslatedFaqCopy[];
		closingTitle: string;
		closingDescription: string;
	};
};

const translations = translationData as Record<TranslatedLocale, WorkflowGuideCopy>;

function createTranslatedGuide(
	locale: TranslatedLocale,
	platform: Platform,
	topic: Topic,
): GuidePage {
	const ios = platform === "ios";
	const copy = translations[locale];
	const quote = (text: string) => {
		if (locale === "zh-Hant" || locale === "ja") return `「${text}」`;
		if (locale === "fr") return `« ${text} »`;
		if (locale === "de") return `„${text}“`;
		return `“${text}”`;
	};
	const parameters: Record<string, string> = {
		device: ios ? copy.deviceIOS : copy.deviceAndroid,
		...Object.fromEntries(
			Object.entries(copy.labels).map(([key, value]) => [key, quote(value)]),
		),
	};
	const format = (text: string) => text.replace(/\{(\w+)\}/g, (_, key: string) => {
		if (!(key in parameters)) {
			throw new Error(`Missing workflow guide phrase: ${locale}/${platform}/${key}`);
		}
		return parameters[key];
	});
	const localizeImage = (original: GuideImage, caption: string): GuideImage => ({
		...original,
		caption: format(caption),
		alt: `${ios ? "iPhone" : "Pixel 8"} · ${format(caption)}`,
	});

	if (topic === "smart-layout") {
		const base = smartLayoutGuide("en-US", platform);
		const text = copy.smart;
		const article = base.article!;
		return {
			...base,
			title: format(text.title),
			seoTitle: format(text.seoTitle),
			metaDescription: format(text.meta),
			summary: format(text.summary),
			answer: format(text.answer),
			heroImage: localizeImage(base.heroImage!, text.steps[3].caption),
			steps: base.steps.map((step, index) => {
				const translated = text.steps[index];
				return {
					title: format(translated.title),
					description: format(translated.description),
					detail: format(translated.detail),
					image: localizeImage(step.image!, translated.caption),
				};
			}),
			article: {
				...article,
				featuresHeading: format(text.featuresHeading),
				featuresIntro: format(text.featuresIntro),
				features: article.features.map((feature, index) => ({
					title: format(text.features[index].title),
					description: format(text.features[index].description),
					...(feature.link ? {
						link: { ...feature.link, label: text.featureLink },
					} : {}),
				})),
				faq: text.faq.map(item => ({
					question: format(item.question),
					answer: format(item.answer),
				})),
				closingTitle: format(text.closingTitle),
				closingDescription: format(text.closingDescription),
			},
		};
	}

	const base = resizeReorderGuide("en-US", platform);
	const text = copy.resize;
	const article = base.article!;
	const stepKeys = ios
		? ["setup", "resize", "thirdIOS", "fourthIOS"] as const
		: ["setup", "resize", "thirdAndroid", "fourthAndroid"] as const;
	const heroKey = ios ? "fourthIOS" : "thirdAndroid";
	return {
		...base,
		title: format(text.title),
		seoTitle: format(text.seoTitle),
		metaDescription: format(text.meta),
		summary: format(text.summary),
		answer: format(text.answer),
		heroImage: localizeImage(base.heroImage!, text.steps[heroKey].caption),
		steps: base.steps.map((step, index) => {
			const translated = text.steps[stepKeys[index]];
			return {
				title: format(translated.title),
				description: format(translated.description),
				detail: format(translated.detail),
				image: localizeImage(step.image!, translated.caption),
			};
		}),
		article: {
			...article,
			featuresHeading: format(text.featuresHeading),
			featuresIntro: format(text.featuresIntro),
			features: article.features.map((feature, index) => ({
				title: format(text.features[index].title),
				description: format(text.features[index].description),
				...(feature.link ? {
					link: { ...feature.link, label: text.featureLink },
				} : {}),
			})),
			faq: text.faq.map(item => ({
				question: format(item.question),
				answer: format(item.answer),
			})),
			closingTitle: format(text.closingTitle),
			closingDescription: format(text.closingDescription),
		},
	};
}

export function getWorkflowGuides(locale: Locale): GuidePage[] {
	return (["smart-layout", "resize-reorder"] as const).flatMap(topic =>
		(["ios", "android"] as const).map(platform =>
			locale === "en-US" || locale === "zh-Hans"
				? topic === "smart-layout"
					? smartLayoutGuide(locale, platform)
					: resizeReorderGuide(locale, platform)
				: createTranslatedGuide(locale, platform, topic),
		),
	);
}

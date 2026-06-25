import type {
	FAQ,
	Feature,
	Review,
	Screenshots,
	StoreData,
	UiLabels,
} from "@/types/content";
import type { Locale } from "./locales";

interface LocalizedLandingContent extends StoreData {
	locale: Locale;
	htmlLang: string;
	seoTitle: string;
	metaDescription: string;
	keywords: string[];
	features: Feature[];
	faqs: FAQ[];
	reviews: Review[];
	labels: UiLabels;
	legal: {
		privacyTitle: string;
		privacyDescription: string;
		privacy: string;
		termsTitle: string;
		termsDescription: string;
		terms: string;
	};
}

const appleStoreUrl =
	"https://apps.apple.com/us/app/split-screen-player-36-videos/id6758291951?uo=4";

const sharedStoreData = {
	logo: "/assets/favicon.png",
	storeLinks: {
		apple: appleStoreUrl,
	},
	rating: {
		score: 4.5,
		count: "15",
	},
	ageRating: "4+",
	version: "1.0.20",
	minimumOS: "15.0",
	releaseDate: "June 25, 2026",
} as const;

const reviews: Review[] = [
	{
		author: "Promo022",
		rating: 5,
		text: "Does what it advertises",
	},
	{
		author: "jamannalalsnna",
		rating: 5,
		text: "It was great using this app. I definitely enjoyed it.",
	},
	{
		author: "KeepGoingWhatever",
		rating: 5,
		text: "I’ve been searching for an app that lets me watch multiple movies on one screen. Watching just one doesn’t cut it anymore.",
	},
	{
		author: "仁哥12345",
		rating: 5,
		text: "神奇播放器",
	},
];

const buildScreenshots = (
	locale: Locale,
	iphoneAlts: string[],
	ipadAlts: string[],
): Screenshots => {
	const base =
		locale === "en-US"
			? "/assets/screenshots"
			: `/assets/screenshots/${locale}`;

	return {
		iphone: iphoneAlts.map((alt, index) => ({
			src: `${base}/iphone/${index + 1}.png`,
			alt,
		})),
		ipad: ipadAlts.map((alt, index) => ({
			src: `${base}/ipad/${index + 1}.png`,
			alt,
		})),
	};
};

const enLabels: UiLabels = {
	features: "Features",
	faq: "FAQ",
	screenshots: "Screenshots",
	userReviews: "User Reviews",
	downloadOn: "Download on the",
	appStore: "App Store",
	ratings: "ratings",
	version: "Version",
	requires: "Requires",
	updated: "Updated",
	iphone: "iPhone",
	ipad: "iPad",
	privacy: "Privacy",
	terms: "Terms",
	allRightsReserved: "All rights reserved.",
	languageLabel: "Language",
	closeLightbox: "Close lightbox",
	previousImage: "Previous image",
	nextImage: "Next image",
	goToImage: "Go to image",
};

const zhHansLabels: UiLabels = {
	features: "功能亮点",
	faq: "常见问题",
	screenshots: "截图",
	userReviews: "用户评价",
	downloadOn: "下载于",
	appStore: "App Store",
	ratings: "个评分",
	version: "版本",
	requires: "系统要求",
	updated: "更新时间",
	iphone: "iPhone",
	ipad: "iPad",
	privacy: "隐私政策",
	terms: "用户协议",
	allRightsReserved: "保留所有权利。",
	languageLabel: "语言",
	closeLightbox: "关闭截图预览",
	previousImage: "上一张截图",
	nextImage: "下一张截图",
	goToImage: "跳转到截图",
};

const zhHantLabels: UiLabels = {
	features: "功能亮點",
	faq: "常見問題",
	screenshots: "截圖",
	userReviews: "使用者評價",
	downloadOn: "下載於",
	appStore: "App Store",
	ratings: "個評分",
	version: "版本",
	requires: "系統需求",
	updated: "更新時間",
	iphone: "iPhone",
	ipad: "iPad",
	privacy: "隱私權政策",
	terms: "使用者協議",
	allRightsReserved: "保留所有權利。",
	languageLabel: "語言",
	closeLightbox: "關閉截圖預覽",
	previousImage: "上一張截圖",
	nextImage: "下一張截圖",
	goToImage: "跳轉到截圖",
};

const enFeatures: Feature[] = [
	{
		title: "🎬 36 Videos, 134 Layouts",
		description:
			"Play 2 to 36 videos in portrait or landscape with 134 built-in layouts, plus custom layouts for your own split-screen setups.",
		icon: "FiGrid",
	},
	{
		title: "🎞️ Split-Screen Export",
		description:
			"Turn the current split screen into one shareable video with aspect ratio, resolution, frame rate, bitrate, background, border, watermark, BGM, and audio controls.",
		icon: "FiUpload",
	},
	{
		title: "🔗 Precise Sync Control",
		description:
			"Use global play, pause, progress, mute, volume normalization, Sync Point, and Sync Lock to compare clips at the same motion moment.",
		icon: "FiLock",
	},
	{
		title: "⏱️ Frame-Level Review",
		description:
			"Step forward or backward frame by frame, show millisecond time, preview frames, and jump back to important checkpoints.",
		icon: "FiSkipForward",
	},
	{
		title: "📡 Streams, IPTV & Xtream",
		description:
			"Play HLS, M3U8, RTSP, IPTV, and Xtream Codes channels, search live channel lists, save bookmarks, retry streams, and use external display output.",
		icon: "FiRadio",
	},
	{
		title: "⬇️ Web Video Download",
		description:
			"Manage link-based download tasks with search, sorting, previews, duplicate reminders, resume support, and offline playback.",
		icon: "FiDownload",
	},
	{
		title: "📀 Broad Format Support",
		description:
			"Supports native formats such as MP4, MOV, M4V, and 3GP, plus MKV, FLV, F4V, RMVB, AVI, WebM, and WMV.",
		icon: "FiFilm",
	},
	{
		title: "🔖 Playlists & Bookmarks",
		description:
			"Open videos as playlists with sorting, shuffle, repeat, delete, reorder controls, and restore saved files and layouts instantly.",
		icon: "FiBookmark",
	},
	{
		title: "🖼️ Images, PDFs & Web Pages",
		description:
			"Browse image folders, PDF files, web pages, live streams, and local videos together in the same split-screen workspace.",
		icon: "FiFileText",
	},
];

const zhHansFeatures: Feature[] = [
	{
		title: "🎬 36 个视频，134 种布局",
		description:
			"支持横屏和竖屏同时播放 2～36 个视频，内置 134 种布局，也可以创建自己的自定义分屏布局。",
		icon: "FiGrid",
	},
	{
		title: "🎞️ 分屏导出",
		description:
			"可将当前分屏合成为一个可分享的视频，支持画面比例、清晰度、帧率、码率、背景、边框、水印、BGM 和音频控制。",
		icon: "FiUpload",
	},
	{
		title: "🔗 精准同步控制",
		description:
			"通过全局播放、暂停、进度、静音、音量均衡、同步点和同步锁定，把多个视频对齐到同一动作时刻。",
		icon: "FiLock",
	},
	{
		title: "⏱️ 逐帧回看",
		description:
			"支持逐帧前进 / 后退、毫秒级时间显示、视频帧预览和存档点，适合训练、教学和动作分析。",
		icon: "FiSkipForward",
	},
	{
		title: "📡 直播流、IPTV 与 Xtream",
		description:
			"支持 HLS、M3U8、RTSP、IPTV 和 Xtream Codes 频道，可搜索直播频道、收藏、自动重试，并支持外接屏显示。",
		icon: "FiRadio",
	},
	{
		title: "⬇️ 网页视频下载",
		description:
			"支持基于链接的下载任务管理，包含搜索、排序、详情预览、重复提醒、中断恢复和离线播放。",
		icon: "FiDownload",
	},
	{
		title: "📀 多格式支持",
		description:
			"兼容 MP4、MOV、M4V、3GP 等系统格式，并扩展支持 MKV、FLV、F4V、RMVB、AVI、WebM、WMV。",
		icon: "FiFilm",
	},
	{
		title: "🔖 播放列表与书签",
		description:
			"多个视频可作为播放列表打开，支持排序、随机、循环、删除、调整顺序，并能一键恢复保存的文件和布局。",
		icon: "FiBookmark",
	},
	{
		title: "🖼️ 图片、PDF 与网页",
		description:
			"图片文件夹、PDF、网页、直播流和本地视频都可以放进同一个分屏工作区里查看。",
		icon: "FiFileText",
	},
];

const zhHantFeatures: Feature[] = [
	{
		title: "🎬 36 支影片，134 種排版",
		description:
			"支援橫向和直向同時播放 2～36 支影片，內建 134 種排版，也可以建立自己的自訂分屏排版。",
		icon: "FiGrid",
	},
	{
		title: "🎞️ 分屏匯出",
		description:
			"可將目前分屏合成為一個可分享的影片，支援畫面比例、解析度、影格率、位元率、背景、邊框、浮水印、BGM 和音訊控制。",
		icon: "FiUpload",
	},
	{
		title: "🔗 精準同步控制",
		description:
			"透過全域播放、暫停、進度、靜音、音量均衡、同步點和同步鎖定，把多支影片對齊到同一動作時刻。",
		icon: "FiLock",
	},
	{
		title: "⏱️ 逐格回看",
		description:
			"支援逐格前進 / 後退、毫秒級時間顯示、影片影格預覽和存檔點，適合訓練、教學和動作分析。",
		icon: "FiSkipForward",
	},
	{
		title: "📡 直播流、IPTV 與 Xtream",
		description:
			"支援 HLS、M3U8、RTSP、IPTV 和 Xtream Codes 頻道，可搜尋直播頻道、收藏、自動重試，並支援外接螢幕顯示。",
		icon: "FiRadio",
	},
	{
		title: "⬇️ 網頁影片下載",
		description:
			"支援基於連結的下載任務管理，包含搜尋、排序、詳細預覽、重複提醒、中斷恢復和離線播放。",
		icon: "FiDownload",
	},
	{
		title: "📀 多格式支援",
		description:
			"相容 MP4、MOV、M4V、3GP 等系統格式，並擴展支援 MKV、FLV、F4V、RMVB、AVI、WebM、WMV。",
		icon: "FiFilm",
	},
	{
		title: "🔖 播放清單與書籤",
		description:
			"多支影片可作為播放清單開啟，支援排序、隨機、循環、刪除、調整順序，並能一鍵還原儲存的檔案和排版。",
		icon: "FiBookmark",
	},
	{
		title: "🖼️ 圖片、PDF 與網頁",
		description:
			"圖片資料夾、PDF、網頁、直播流和本機影片都可以放進同一個分屏工作區裡查看。",
		icon: "FiFileText",
	},
];

const enFaqs: FAQ[] = [
	{
		question: "How many videos can I play at once?",
		answer:
			"Split Screen Player supports 2 to 36 videos at the same time with 134 built-in layouts and custom layouts. Actual playback performance depends on your device, video resolution, file format, and stream quality.",
	},
	{
		question: "Can I export the split-screen view as one video?",
		answer:
			"Yes. You can export the current split-screen view as a shareable video and adjust aspect ratio, resolution, frame rate, bitrate, background, borders, watermarks, trim ranges, speed, BGM, and audio sources.",
	},
	{
		question: "Does it support IPTV or live streams?",
		answer:
			"Yes. Version 1.0.20 adds IPTV and Xtream Codes live channel support, alongside HLS, M3U8, and RTSP stream links.",
	},
	{
		question: "Is Split Screen Player free?",
		answer:
			"The app is free to download and includes basic features. Premium offers a 3-day free trial, then weekly, monthly, annual, or one-time unlock options through the App Store.",
	},
	{
		question: "Can I use it offline?",
		answer:
			"Local videos, images, and PDFs work offline once they are on your device. Web browsing, live streams, IPTV, and web downloads require a network connection.",
	},
];

const zhHansFaqs: FAQ[] = [
	{
		question: "最多可以同时播放多少个视频？",
		answer:
			"分屏播放器支持同时播放 2～36 个视频，内置 134 种布局，也支持自定义布局。实际播放表现会受设备性能、视频清晰度、文件格式和流媒体质量影响。",
	},
	{
		question: "可以把分屏画面导出成一个视频吗？",
		answer:
			"可以。你可以将当前分屏合成为一个可分享的视频，并调整比例、清晰度、帧率、码率、背景、边框、水印、裁剪范围、倍速、BGM 和音频来源。",
	},
	{
		question: "支持 IPTV 或直播流吗？",
		answer:
			"支持。1.0.20 新增 IPTV 和 Xtream Codes 直播频道支持，同时也支持 HLS、M3U8、RTSP 等流媒体链接。",
	},
	{
		question: "分屏播放器是免费的吗？",
		answer:
			"App 可免费下载并使用基础功能。高级版通过 App Store 提供 3 天免费试用，之后可选择按周、月、年订阅，或一次性解锁。",
	},
	{
		question: "离线可以使用吗？",
		answer:
			"本地视频、图片和 PDF 下载到设备后可以离线使用。网页浏览、直播流、IPTV 和网页下载需要网络连接。",
	},
];

const zhHantFaqs: FAQ[] = [
	{
		question: "最多可以同時播放多少支影片？",
		answer:
			"分屏播放器支援同時播放 2～36 支影片，內建 134 種排版，也支援自訂排版。實際播放表現會受裝置效能、影片解析度、檔案格式和串流品質影響。",
	},
	{
		question: "可以把分屏畫面匯出成一個影片嗎？",
		answer:
			"可以。你可以將目前分屏合成為一個可分享的影片，並調整比例、解析度、影格率、位元率、背景、邊框、浮水印、裁切範圍、倍速、BGM 和音訊來源。",
	},
	{
		question: "支援 IPTV 或直播流嗎？",
		answer:
			"支援。1.0.20 新增 IPTV 和 Xtream Codes 直播頻道支援，同時也支援 HLS、M3U8、RTSP 等串流連結。",
	},
	{
		question: "分屏播放器是免費的嗎？",
		answer:
			"App 可免費下載並使用基本功能。進階版透過 App Store 提供 3 天免費試用，之後可選擇按週、月、年訂閱，或一次性解鎖。",
	},
	{
		question: "離線可以使用嗎？",
		answer:
			"本機影片、圖片和 PDF 下載到裝置後可以離線使用。網頁瀏覽、直播流、IPTV 和網頁下載需要網路連線。",
	},
];

const enLegal = {
	privacyTitle: "Privacy Policy",
	privacyDescription:
		"Learn how Split Screen Player handles local media, browsing activity, IPTV credentials, diagnostics, and privacy-related choices.",
	privacy: `# Privacy Policy

**Last updated:** June 25, 2026

Split Screen Player is designed for local media playback, split-screen layouts, web browsing, live streams, IPTV, and optional web video downloads. This policy explains what information may be handled when you use the app and this website.

## Information The App Handles

Split Screen Player may access information you choose to open or enter in the app, including:

- Videos, images, folders, and PDF files selected from your device
- Layouts, bookmarks, checkpoints, playlists, export settings, and playback preferences saved in the app
- Web pages, stream links, downloadable media URLs, and live channel lists opened through the app
- IPTV or Xtream Codes server information, username, and password when you enter them for live channel playback
- Basic diagnostics or crash information provided through Apple system settings

## How Information Is Used

Information is used to provide app features such as playback, synchronized controls, bookmarks, file viewing, web browsing, live stream playback, downloads, and split-screen export.

Local media files remain on your device unless you choose to share, export, upload, or open them with another app.

## Web Browsing, Streams, IPTV, And Downloads

When you use browser, stream, IPTV, or download features, the websites and services you connect to may receive standard request information such as IP address, user agent, cookies, account credentials you provide to that service, requested URLs, and playback requests. Those third-party services operate under their own privacy policies.

## Data Sharing

We do not sell personal information. We may disclose information only when required by law, needed to operate the app, or requested by you through an explicit action such as sharing or exporting content.

## Security

The app uses the security protections provided by iOS and iPadOS for local files and app storage. You are responsible for the legality, privacy, and security of the media, websites, stream services, and credentials you choose to use.

## Changes

This policy may be updated when app features, legal requirements, or platform policies change. The date at the top of this page will be updated when changes are made.

## Contact

For privacy questions, use the support channel listed on the Split Screen Player App Store product page.`,
	termsTitle: "Terms of Service",
	termsDescription:
		"Read the terms for using Split Screen Player, including local media, web browsing, streams, IPTV, downloads, purchases, and third-party content.",
	terms: `# Terms of Service

**Effective date:** June 25, 2026

By using Split Screen Player or this website, you agree to these terms.

## Use Of The App

Split Screen Player lets you play, compare, synchronize, export, and view videos, images, web pages, live streams, IPTV channels, and PDF files in multi-window layouts. You agree to use the app only for lawful purposes and in compliance with the rights of content owners, website operators, streaming providers, and applicable laws.

## Your Content And Services

You are responsible for the files, URLs, downloads, stream links, IPTV credentials, bookmarks, playlists, exports, and other content you choose to open or manage with the app. You must have the necessary rights or permissions for any media you play, download, copy, export, share, or store.

## Web Browsing, Streams, And Downloads

The app may help you browse websites, play live streams, connect to IPTV or Xtream Codes services, or download web media. Third-party websites and services have their own terms, privacy policies, technical restrictions, subscription rules, and copyright requirements. You are responsible for following them.

## Purchases

If the app offers paid features, purchases, renewals, cancellations, and refunds are handled by Apple through your Apple ID and the App Store. Apple's purchase terms apply.

## Availability

The app and website are provided as available. Features may change, and playback, export, stream, and download performance can vary based on device model, operating system, file format, network quality, and third-party service behavior.

## Intellectual Property

Split Screen Player, the website, branding, interface, and related materials are protected by intellectual property laws. You may not copy, modify, redistribute, reverse engineer, or misuse them except as allowed by law.

## Limitation Of Liability

To the maximum extent permitted by law, we are not responsible for indirect, incidental, special, or consequential damages, including data loss, service interruption, website restrictions, stream failure, download failure, or issues caused by third-party content and services.

## Changes To These Terms

These terms may be updated when app features, legal requirements, or platform policies change. The effective date at the top of this page will be updated when changes are made.

## Contact

For questions about these terms, use the support channel listed on the Split Screen Player App Store product page.`,
};

const zhHansLegal = {
	privacyTitle: "隐私政策",
	privacyDescription:
		"了解分屏播放器如何处理本地媒体、浏览活动、IPTV 凭据、诊断信息和隐私相关选择。",
	privacy: `# 隐私政策

**最后更新：** 2026 年 6 月 25 日

分屏播放器用于本地媒体播放、分屏布局、网页浏览、直播流、IPTV 和可选的网页视频下载。本政策说明你使用 App 和本网站时可能会涉及哪些信息。

## App 可能处理的信息

分屏播放器可能访问你主动选择打开或输入的信息，包括：

- 从设备中选择的视频、图片、文件夹和 PDF 文件
- App 中保存的布局、书签、存档点、播放列表、导出设置和播放偏好
- 通过 App 打开的网页、流媒体链接、可下载媒体链接和直播频道列表
- 当你为了播放直播频道而输入 IPTV 或 Xtream Codes 时的服务器信息、用户名和密码
- Apple 系统设置提供的基础诊断或崩溃信息

## 信息用途

这些信息用于提供播放、同步控制、书签、文件查看、网页浏览、直播流播放、下载和分屏导出等功能。

本地媒体文件会留在你的设备上，除非你主动分享、导出、上传或用其他 App 打开。

## 网页浏览、直播流、IPTV 与下载

当你使用浏览器、流媒体、IPTV 或下载功能时，你连接的网站和服务可能会收到标准请求信息，例如 IP 地址、用户代理、Cookie、你提供给该服务的账号凭据、请求链接和播放请求。这些第三方服务适用它们自己的隐私政策。

## 信息共享

我们不会出售个人信息。只有在法律要求、App 运行需要，或你通过分享、导出等明确操作提出请求时，才可能披露相关信息。

## 安全

App 使用 iOS 和 iPadOS 为本地文件和 App 存储提供的安全保护。你需要自行负责所使用媒体、网站、流媒体服务和凭据的合法性、隐私与安全。

## 政策变更

当 App 功能、法律要求或平台政策变化时，本政策可能会更新。页面顶部日期会随更新而调整。

## 联系方式

如有隐私相关问题，请使用分屏播放器 App Store 产品页中列出的支持渠道。`,
	termsTitle: "用户协议",
	termsDescription:
		"阅读分屏播放器的使用条款，包括本地媒体、网页浏览、直播流、IPTV、下载、购买和第三方内容。",
	terms: `# 用户协议

**生效日期：** 2026 年 6 月 25 日

使用分屏播放器或本网站，即表示你同意本条款。

## App 使用

分屏播放器可以在多窗口布局中播放、对比、同步、导出和查看视频、图片、网页、直播流、IPTV 频道和 PDF 文件。你同意仅将 App 用于合法用途，并遵守内容所有者、网站运营者、流媒体服务提供方和适用法律的要求。

## 你的内容和服务

你需要对自己选择打开或管理的文件、链接、下载内容、流媒体链接、IPTV 凭据、书签、播放列表、导出内容和其他内容负责。对于你播放、下载、复制、导出、分享或保存的任何媒体，你必须拥有必要的权利或授权。

## 网页浏览、直播流与下载

App 可以帮助你浏览网站、播放直播流、连接 IPTV 或 Xtream Codes 服务，或下载网页媒体。第三方网站和服务有各自的条款、隐私政策、技术限制、订阅规则和版权要求，你需要自行遵守。

## 购买

如果 App 提供付费功能，购买、续订、取消和退款由 Apple 通过你的 Apple ID 和 App Store 处理，并适用 Apple 的购买条款。

## 可用性

App 和网站按现状提供。功能可能会变化，播放、导出、流媒体和下载表现会受设备型号、系统版本、文件格式、网络质量和第三方服务行为影响。

## 知识产权

分屏播放器、网站、品牌、界面和相关材料受知识产权法律保护。除法律允许外，你不得复制、修改、重新分发、反向工程或滥用这些内容。

## 责任限制

在法律允许的最大范围内，我们不对间接、附带、特殊或后果性损害负责，包括数据丢失、服务中断、网站限制、流媒体失败、下载失败，或第三方内容和服务导致的问题。

## 条款变更

当 App 功能、法律要求或平台政策变化时，本条款可能会更新。页面顶部的生效日期会随更新而调整。

## 联系方式

如有条款相关问题，请使用分屏播放器 App Store 产品页中列出的支持渠道。`,
};

const zhHantLegal = {
	privacyTitle: "隱私權政策",
	privacyDescription:
		"了解分屏播放器如何處理本機媒體、瀏覽活動、IPTV 憑證、診斷資訊和隱私相關選擇。",
	privacy: `# 隱私權政策

**最後更新：** 2026 年 6 月 25 日

分屏播放器用於本機媒體播放、分屏排版、網頁瀏覽、直播流、IPTV 和可選的網頁影片下載。本政策說明你使用 App 和本網站時可能會涉及哪些資訊。

## App 可能處理的資訊

分屏播放器可能存取你主動選擇開啟或輸入的資訊，包括：

- 從裝置中選擇的影片、圖片、資料夾和 PDF 檔案
- App 中儲存的排版、書籤、存檔點、播放清單、匯出設定和播放偏好
- 透過 App 開啟的網頁、串流連結、可下載媒體連結和直播頻道列表
- 當你為了播放直播頻道而輸入 IPTV 或 Xtream Codes 時的伺服器資訊、使用者名稱和密碼
- Apple 系統設定提供的基礎診斷或當機資訊

## 資訊用途

這些資訊用於提供播放、同步控制、書籤、檔案查看、網頁瀏覽、直播流播放、下載和分屏匯出等功能。

本機媒體檔案會留在你的裝置上，除非你主動分享、匯出、上傳或用其他 App 開啟。

## 網頁瀏覽、直播流、IPTV 與下載

當你使用瀏覽器、串流、IPTV 或下載功能時，你連線的網站和服務可能會收到標準請求資訊，例如 IP 位址、使用者代理、Cookie、你提供給該服務的帳號憑證、請求連結和播放請求。這些第三方服務適用它們自己的隱私權政策。

## 資訊共享

我們不會出售個人資訊。只有在法律要求、App 運作需要，或你透過分享、匯出等明確操作提出請求時，才可能揭露相關資訊。

## 安全

App 使用 iOS 和 iPadOS 為本機檔案和 App 儲存提供的安全保護。你需要自行負責所使用媒體、網站、串流服務和憑證的合法性、隱私與安全。

## 政策變更

當 App 功能、法律要求或平台政策變化時，本政策可能會更新。頁面頂部日期會隨更新而調整。

## 聯絡方式

如有隱私相關問題，請使用分屏播放器 App Store 產品頁中列出的支援管道。`,
	termsTitle: "使用者協議",
	termsDescription:
		"閱讀分屏播放器的使用條款，包括本機媒體、網頁瀏覽、直播流、IPTV、下載、購買和第三方內容。",
	terms: `# 使用者協議

**生效日期：** 2026 年 6 月 25 日

使用分屏播放器或本網站，即表示你同意本條款。

## App 使用

分屏播放器可以在多視窗排版中播放、比較、同步、匯出和查看影片、圖片、網頁、直播流、IPTV 頻道和 PDF 檔案。你同意僅將 App 用於合法用途，並遵守內容所有者、網站營運者、串流服務提供方和適用法律的要求。

## 你的內容和服務

你需要對自己選擇開啟或管理的檔案、連結、下載內容、串流連結、IPTV 憑證、書籤、播放清單、匯出內容和其他內容負責。對於你播放、下載、複製、匯出、分享或儲存的任何媒體，你必須擁有必要的權利或授權。

## 網頁瀏覽、直播流與下載

App 可以幫助你瀏覽網站、播放直播流、連接 IPTV 或 Xtream Codes 服務，或下載網頁媒體。第三方網站和服務有各自的條款、隱私權政策、技術限制、訂閱規則和著作權要求，你需要自行遵守。

## 購買

如果 App 提供付費功能，購買、續訂、取消和退款由 Apple 透過你的 Apple ID 和 App Store 處理，並適用 Apple 的購買條款。

## 可用性

App 和網站按現狀提供。功能可能會變化，播放、匯出、串流和下載表現會受裝置型號、系統版本、檔案格式、網路品質和第三方服務行為影響。

## 智慧財產權

分屏播放器、網站、品牌、介面和相關材料受智慧財產權法律保護。除法律允許外，你不得複製、修改、重新分發、反向工程或濫用這些內容。

## 責任限制

在法律允許的最大範圍內，我們不對間接、附帶、特殊或後果性損害負責，包括資料遺失、服務中斷、網站限制、串流失敗、下載失敗，或第三方內容和服務導致的問題。

## 條款變更

當 App 功能、法律要求或平台政策變化時，本條款可能會更新。頁面頂部的生效日期會隨更新而調整。

## 聯絡方式

如有條款相關問題，請使用分屏播放器 App Store 產品頁中列出的支援管道。`,
};

export const landingContent: Record<Locale, LocalizedLandingContent> = {
	"en-US": {
		locale: "en-US",
		htmlLang: "en",
		name: "Split Screen Player: 36 Videos",
		shortName: "Split Screen Player",
		description:
			"Play, compare, sync, and export multiple videos on one screen. Watch up to 36 videos, choose from 134 layouts, and turn split-screen views into shareable videos.",
		seoTitle:
			"Split Screen Player: 36 Videos - Multi-Video Playback, Sync, and Export",
		metaDescription:
			"Play up to 36 videos at once, compare clips, sync motion, export split-screen videos, stream IPTV/Xtream channels, and browse images, PDFs, and web pages on iPhone and iPad.",
		keywords: [
			"split screen player",
			"36 videos",
			"multi video player",
			"134 layouts",
			"video sync",
			"compare videos",
			"split screen export",
			"IPTV",
			"Xtream Codes",
			"M3U8",
			"RTSP",
			"web video download",
			"iPhone video player",
			"iPad video player",
		],
		...sharedStoreData,
		features: enFeatures,
		faqs: enFaqs,
		reviews,
		labels: enLabels,
		screenshots: buildScreenshots(
			"en-US",
			[
				"Play multiple videos on one screen",
				"Choose from 134 split-screen layouts",
				"Create custom video layouts",
				"Sync playback and compare clips",
				"Export split-screen views as one video",
				"Review frames, checkpoints, and precise timing",
				"Browse web pages, PDFs, images, and local videos",
				"Download web videos for offline playback",
				"Play streams, IPTV, and Xtream Codes channels",
				"Customize playback tools and workflows",
			],
			[
				"iPad multi-video playback workspace",
				"iPad 134 layout picker",
				"iPad custom split-screen layout editor",
				"iPad synchronized playback comparison",
				"iPad split-screen video export",
				"iPad frame review and checkpoints",
				"iPad web, PDF, image, and video split view",
				"iPad web video download manager",
				"iPad streams, IPTV, and Xtream Codes channels",
				"iPad customizable playback tools",
			],
		),
		legal: enLegal,
	},
	"zh-Hans": {
		locale: "zh-Hans",
		htmlLang: "zh-Hans",
		name: "分屏播放器：36 个视频",
		shortName: "分屏播放器",
		description:
			"在同一屏幕上播放、对比、同步和导出多个视频。最多同时播放 36 个视频，提供 134 种布局，并可将分屏画面合成为可分享的视频。",
		seoTitle: "分屏播放器：36 个视频 - 多视频播放、同步、对比与导出",
		metaDescription:
			"在 iPhone 和 iPad 上同时播放最多 36 个视频，使用 134 种布局，对比动作，同步播放，导出分屏视频，播放 IPTV/Xtream 频道，并浏览图片、PDF 和网页。",
		keywords: [
			"分屏",
			"多窗",
			"多视频",
			"同时播放",
			"36个视频",
			"134种布局",
			"视频同步",
			"视频对比",
			"分屏导出",
			"IPTV",
			"Xtream Codes",
			"M3U8",
			"RTSP",
			"网页视频下载",
			"画中画",
			"浏览器",
		],
		...sharedStoreData,
		features: zhHansFeatures,
		faqs: zhHansFaqs,
		reviews,
		labels: zhHansLabels,
		screenshots: buildScreenshots(
			"zh-Hans",
			[
				"同屏播放多个视频",
				"选择 134 种分屏布局",
				"创建自定义视频布局",
				"同步播放并对比片段",
				"将分屏画面导出成一个视频",
				"逐帧回看、存档点和精确时间",
				"分屏浏览网页、PDF、图片和本地视频",
				"下载网页视频并离线播放",
				"播放直播流、IPTV 和 Xtream Codes 频道",
				"自定义播放工具和工作流",
			],
			[
				"iPad 多视频播放工作区",
				"iPad 134 种布局选择",
				"iPad 自定义分屏布局编辑",
				"iPad 同步播放对比",
				"iPad 分屏视频导出",
				"iPad 逐帧回看和存档点",
				"iPad 网页、PDF、图片和视频分屏",
				"iPad 网页视频下载管理",
				"iPad 直播流、IPTV 和 Xtream Codes 频道",
				"iPad 自定义播放工具",
			],
		),
		legal: zhHansLegal,
	},
	"zh-Hant": {
		locale: "zh-Hant",
		htmlLang: "zh-Hant",
		name: "分屏播放器：36 支影片",
		shortName: "分屏播放器",
		description:
			"在同一個畫面上播放、比較、同步和匯出多支影片。最多同時播放 36 支影片，提供 134 種排版，並可將分屏畫面合成為可分享的影片。",
		seoTitle: "分屏播放器：36 支影片 - 多影片播放、同步、比較與匯出",
		metaDescription:
			"在 iPhone 和 iPad 上同時播放最多 36 支影片，使用 134 種排版，比較動作，同步播放，匯出分屏影片，播放 IPTV/Xtream 頻道，並瀏覽圖片、PDF 和網頁。",
		keywords: [
			"分屏",
			"多視窗",
			"多影片",
			"同時播放",
			"36支影片",
			"134種排版",
			"影片同步",
			"影片比較",
			"分屏匯出",
			"IPTV",
			"Xtream Codes",
			"M3U8",
			"RTSP",
			"網頁影片下載",
			"子母畫面",
			"瀏覽器",
		],
		...sharedStoreData,
		features: zhHantFeatures,
		faqs: zhHantFaqs,
		reviews,
		labels: zhHantLabels,
		screenshots: buildScreenshots(
			"zh-Hant",
			[
				"同畫面播放多支影片",
				"選擇 134 種分屏排版",
				"建立自訂影片排版",
				"同步播放並比較片段",
				"將分屏畫面匯出成一個影片",
				"逐格回看、存檔點和精確時間",
				"分屏瀏覽網頁、PDF、圖片和本機影片",
				"下載網頁影片並離線播放",
				"播放直播流、IPTV 和 Xtream Codes 頻道",
				"自訂播放工具和工作流程",
			],
			[
				"iPad 多影片播放工作區",
				"iPad 134 種排版選擇",
				"iPad 自訂分屏排版編輯",
				"iPad 同步播放比較",
				"iPad 分屏影片匯出",
				"iPad 逐格回看和存檔點",
				"iPad 網頁、PDF、圖片和影片分屏",
				"iPad 網頁影片下載管理",
				"iPad 直播流、IPTV 和 Xtream Codes 頻道",
				"iPad 自訂播放工具",
			],
		),
		legal: zhHantLegal,
	},
};

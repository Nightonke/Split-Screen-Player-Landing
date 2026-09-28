# 教程扩展审阅说明

本地预览：[简体中文教程目录](http://127.0.0.1:4328/zh-Hans/guides/) · [English](http://127.0.0.1:4328/guides/)

当前累计 **63 篇教程 × 9 种语言 = 567 个教程详情页**，包含既有文章。已新增教程搜索、平台筛选、主题筛选和同平台相关教程。保留原有教程 URL。尚未部署或提交 Git。

语言：英语、简体中文、繁体中文、日语、韩语、法语、德语、西班牙语、巴西葡萄牙语。新教程的标题、正文、SEO、图注、alt、FAQ 和内链已本地化；截图共用英文 UI。繁体中文由简体文本转为台湾用语。

## 建议先看的页面

- [iPhone / iPad 同时播放 RTSP 和 HLS（真机补拍）](http://127.0.0.1:4328/zh-Hans/guides/play-rtsp-live-streams/)
- [iPhone / iPad 同时观看两个 YouTube 视频](http://127.0.0.1:4328/zh-Hans/guides/watch-two-youtube-videos-iphone-ipad/)
- [iPhone / iPad 网页视频转入另一个分屏](http://127.0.0.1:4328/zh-Hans/guides/open-web-video-in-another-player-iphone-ipad/)
- [Android 导出分屏视频](http://127.0.0.1:4328/zh-Hans/guides/export-split-screen-video-android/)
- [iPhone / iPad 动态视频画廊](http://127.0.0.1:4328/zh-Hans/guides/create-dynamic-video-gallery-iphone-ipad/)
- [iPhone / iPad 多视频变速](http://127.0.0.1:4328/zh-Hans/guides/change-multiple-video-speeds-iphone-ipad/)

## 覆盖范围

| 方向 | 主题 |
| --- | --- |
| 对比 | 重叠、滑动分割、逐帧、同步点、检查点 |
| 播放 | 工具栏、全局控制、倍速、声音、定时、播放列表、书签、轮换放大 |
| 布局 | 智能排列、大小与位置、Fit / Fill、旋转与镜像、瀑布流、对向流 |
| 画廊 | 动态视频墙、独立照片轮播、Looks 滤镜 |
| 导入与输出 | 相册筛选、文件与文件夹、PDF、对比快照、分屏视频导出 |
| 网页与直播 | 双网页、视频与网页、iOS 网页视频转入、iOS YouTube 双视频、iOS 与 Android HLS / RTSP |

YouTube 已用两段不同的视频实测同时播放，并关闭后重新执行成功。使用 Mini Player 检测列表的点按流程；不依赖未成功验证的长按。网页媒体有来源兼容性限制，正文已说明。

iOS RTSP / HLS 已由用户提供 iPhone 17 Pro Max 真机英文截图补齐：Open → Web/Stream、两行地址与 Auto 模式、上方 RTSP／下方 HLS（两区均显示 LIVE）、隐藏控件后的全屏效果。九语言教程沿用 `play-rtsp-live-streams`。这是用户真机截图证据；不表示模拟器 Metal 问题已修复，也不扩展为断源重连或长时间播放验收。

## 尚未完成的验收

- **投屏**：用户已明确留待补齐，未制作接收端结果图。
- **iOS RTSP 模拟器问题**：真机教程截图已补齐，但 iPhone 17 Pro / iOS 26.5 模拟器的 Metal 渲染断言仍未修复。本次没有修改客户端代码。
- **iOS 部分手势**：临时快慢放长按、全局进度拖动、旧布局拖动重测，以及网页独立滚动受 Computer Use 传递手势不稳定影响。这些说明已有源码或既有教程依据，但本次相关手势不能标为实测通过；替代自动化方式的确认尚未收到。
- **既有文章复核**：iPad 多机位概览保留；此次没有使用 iPad 验证专有行为。Android 网页打开及同时显示已复核，导航目标的观察仍有不确定性。

这些边界意味着当前不是“所有非投屏操作均已重新验收”的状态。逐项证据和环境记录见 [执行清单](tutorial-expansion-execution.md)。

## 交付文件与检查

- 教程元数据：`src/i18n/tutorialTopics.ts`
- 本地化正文：`src/i18n/tutorials/`，重叠教程沿用独立翻译文件
- 英文带壳 WebP：`public/images/guides/`
- 原始截图、带壳 PNG、测试素材及日志：`.tmp/tutorial-expansion/`，保留本地并排除 Git
- 校验：`npm run build` 同时检查内容一致性、详情页 SEO、站点地图、语言切换、图片及教程内链

已检查中文桌面页面、德语手机版、图片放大与搜索筛选，修复德语长词溢出。iOS 使用橙色 iPhone 17 Pro 外壳，Android 使用 Pixel 8 外壳。视频导出和快照均实际保存并打开，不以界面按钮截图代替产物验收。

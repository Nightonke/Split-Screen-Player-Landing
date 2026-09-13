# Landing 教程与 Android 信息扩展

完成日期：2026-09-13。本文件记录开发与本地验收结果；正式发布沿用推送 `main` 后自动部署至 GitHub Pages 的流程。

## 已完成范围

- [x] 多视频教程分别提供 iPhone / iPad、Android 两篇，覆盖网站全部九种语言：英文、简中、繁中、日文、韩文、法文、德文、西班牙文、巴西葡萄牙文。
- [x] 简中使用对应平台中文截图；其余语言使用对应平台英文截图，正文、菜单引用、图注、alt 和文章界面文字分别本地化。
- [x] 首页、导航、页脚、下载卡片、教程入口、功能 / 使用场景页、FAQ、商店与平台说明、元数据补充 Android。
- [x] 双网页、视频与网页两个场景各提供 iPhone / iPad 和 Android 教程，共四篇；按后续要求补齐全部九种语言，共 36 个教程页面。
- [x] 完成构建、链接与语言路由、图片尺寸、结构化数据、桌面 / 手机页面检查。

## 本地预览

| 教程 | 简体中文 | 英文 |
| --- | --- | --- |
| iPhone / iPad 多视频 | [预览](http://127.0.0.1:4327/zh-Hans/guides/play-multiple-videos-iphone-ipad/) | [Preview](http://127.0.0.1:4327/guides/play-multiple-videos-iphone-ipad/) |
| Android 多视频 | [预览](http://127.0.0.1:4327/zh-Hans/guides/play-multiple-videos-android/) | [Preview](http://127.0.0.1:4327/guides/play-multiple-videos-android/) |
| iPhone / iPad 双网页 | [预览](http://127.0.0.1:4327/zh-Hans/guides/browse-two-websites-iphone-ipad/) | [Preview](http://127.0.0.1:4327/guides/browse-two-websites-iphone-ipad/) |
| Android 双网页 | [预览](http://127.0.0.1:4327/zh-Hans/guides/browse-two-websites-android/) | [Preview](http://127.0.0.1:4327/guides/browse-two-websites-android/) |
| iPhone / iPad 视频与网页 | [预览](http://127.0.0.1:4327/zh-Hans/guides/watch-video-and-browse-web-iphone-ipad/) | [Preview](http://127.0.0.1:4327/guides/watch-video-and-browse-web-iphone-ipad/) |
| Android 视频与网页 | [预览](http://127.0.0.1:4327/zh-Hans/guides/watch-video-and-browse-web-android/) | [Preview](http://127.0.0.1:4327/guides/watch-video-and-browse-web-android/) |

[简中首页](http://127.0.0.1:4327/zh-Hans/) · [教程目录](http://127.0.0.1:4327/zh-Hans/guides/)。英文链接如受浏览器已保存的语言偏好影响，可从页脚语言入口切换。

## 内容与平台依据

使用用户给出的场景排序和 2026-09-10 的 34 问实验识别搜索意图、步骤信息与功能边界；没有将样本命中数表述为实际搜索量。具体菜单和功能以两平台源码、本地化文字和实际应用操作为准。

文章围绕实际使用展开：选择布局、打开媒体、控制声音与播放、保存常用组合、浏览网页，并补充适合的延伸场景、VIP 边界和常见问题。截图展示的三行 / 四宫格布局使用真实应用操作，无重绘 UI；布局重点用网页叠加框标注。

- 两平台共有：144 种布局、最多 36 个区域、自定义布局、本地视频 / 图片 / PDF、网页及 HLS / M3U8 / RTSP 链接。
- IPTV 频道列表、Xtream Codes、网页视频下载目前标为 iPhone / iPad 功能。
- iOS 网页双视频并发播放遵循应用实际限制；Android 网页播放也不承诺绕过站点登录、自动播放或受保护内容限制。
- 两平台可以免费下载，VIP 项目需付费，价格与试用以应用内为准。App Store 评分没有套用至 Android。
- iOS 星形按钮使用「收藏」 / “Favorite”；Android 使用 “Bookmark” / “Bookmarks”，翻译引用各自的本地化文字。

结构化数据包含教程步骤、文章、FAQ 与面包屑；两篇主教程和四篇网页场景教程均有完整的九种语言 alternate。语言切换保持当前教程和平台，新增译文同时进入教程目录、站点地图与相关教程链接。

## 截图产物

[完整截图清单](/Users/viktorhuang/Downloads/SSP-Tutorial-Expansion-2026-09-13/capture-manifest.json) 记录 44 张素材对应的原图、加框图、网站 WebP、尺寸与 SHA-256。网站 WebP 合计约 6.66 MiB，包含保留的六张简中 iOS 多视频截图。

- Android：Pixel 8 实机，用 ADB 截图，无需 Android Studio。使用用户指定的 IMG_0013.MP4–IMG_0020.MP4；三行选 0013、0014、0017，四宫格再加 0016，视频与网页场景使用 0016。
- iOS：iPhone 17 Pro Max，iOS 26.0，应用 1.0.29；英文多视频与中英文网页场景使用独立模拟器。简中多视频沿用此前已确认的等比铺满版本。
- 两平台网页示例为 Wikipedia 的 Surfing / Beach 页面，结果图旁提供来源链接；已检查网页独立滚动与视频、网页同屏操作。
- 统一使用原有 AppStoreScreenshotFramer 工具：iPhone 橙色框、Pixel 8 对应框。iOS 横屏素材已按正确方向输出；控制播放步骤的截图显示三个视频的播放控件。
- Pixel 8 横屏四宫格原图左侧是摄像头安全区，手机框须逆时针旋转 90°，摄像头位于左侧。中英文两张图片已重新加框，避免遮挡右侧操作栏。后续复用截图目录内的 `frames/pixel8-landscape-camera-left.png` 作为工具的 `--frame` 参数；原始截图方向保持不变。

## 工作隔离与设备交接

网站目录：`/Users/viktorhuang/Desktop/iOS/Split-Screen-Player-Landing-Tutorial`，分支 `codex/tutorial-multi-video-screenshots`。

iOS 应用来源为 `NVideo-Simulator` 的 `dev/Dev_1.0.29_Simulator`，复用既有编译产物，源码工作树保持干净。新建截图专用模拟器 **SSP Tutorial iPhone 17 Pro Max**（`BEA4A68A-AEDD-4BE8-8195-B889E95A0CFD`），收尾时已关闭，可再次启动。没有改动原 NVideo 工程，也没有关闭原有模拟器。

Android 新建独立工作树 `SplitScreenPlayer-Android-Tutorial`，分支 `codex/tutorial-device-captures`，完成 `assemblePlayDebug` 并安装。截图版仅在 DEBUG 下启用 VIP，Release 仍检查商店权益。原 Android 工程既有 `app/build.gradle` 用户改动保持原样。

**Pixel 8 保留当前导出页面。** 截图结束时手机再次出现导出界面，可能正在被其他操作使用，因此没有重新安装原 APK 或重置设置。截图期间使用的临时状态包括：DEBUG VIP 截图版、控制栏自动隐藏从 3 秒改为 10 秒、视频 Fill and Crop、应用英文、Gboard 英文输入。原安装包已备份到 [pixel8-original-0.apk](/Users/viktorhuang/Downloads/SSP-Tutorial-Expansion-2026-09-13/device-backup/pixel8-original-0.apk)。

## 验证记录

[验证摘要](/Users/viktorhuang/Downloads/SSP-Tutorial-Expansion-2026-09-13/verification/summary.json) 及同目录构建日志、浏览器结果、页面截图可供复核。

- `npm run build` 通过（含内容一致性检查）：189 个内容页面，另有 `/android` 商店跳转页，共 190 个 HTML 文件。
- 全站本地链接、锚点、图片路径、canonical、JSON-LD 解析通过；18 个主教程译文、8 个新教程译文、语言对应关系、Google Play 入口通过。
- 实际引用的教程 `<img>` 尺寸与图片文件一致，没有平台或截图语言混用。
- 1440px 桌面检查首页与教程；390px 检查九种语言 Android 教程；360px 检查英文 / 简中网页教程与法文长文本。没有横向溢出，下载卡片、页脚及布局标注显示正常。
- 图片预览可打开和关闭，没有可见「放大」徽标；新教程在日文偏好下保持有效英文路由。
- `git diff --check` 通过。

## 后续完成：网页场景教程的全部语言

根据用户追加要求，四篇网页场景教程新增繁中、日文、韩文、法文、德文、西班牙文和巴西葡萄牙文，共补充 28 个译文页面。

标题、SEO 描述、正文、步骤、图注、alt、FAQ、来源说明、延伸教程链接与下载引导均已适配。菜单引用使用两平台原生语言文本，新增核对了链接类型「网页」的各语言名称。简中继续使用中文截图，其他八种语言继续使用对应平台英文截图，本轮无需操作设备。

新增语言文案分别存放于 `src/i18n/webGuideTranslations/`，由 `webGuides.ts` 复用已验证的同平台截图和链接。各平台的网页视频播放限制与 VIP 说明保持一致。

[本轮静态检查](/Users/viktorhuang/Downloads/SSP-Tutorial-Web-Localization-2026-09-13/static-audit.json) · [手机与语言切换检查](/Users/viktorhuang/Downloads/SSP-Tutorial-Web-Localization-2026-09-13/browser-audit.json)

- 构建通过，现有 217 个内容页面和一个 Android 跳转页，共 218 个 HTML。
- 36 个网页场景教程的路由、站点地图、九语言 alternate、菜单名称、平台图片、图片语言、四个步骤与五个 FAQ 检查通过。
- 九种语言均完成 360px 手机布局检查，FAQ 展开后也没有横向溢出；实际点击语言链接后保持同一教程和平台。
- 繁中、德文手机标题，法文下载区以及日文桌面步骤已作视觉检查。

搜索引擎收录与流量变化需发布后观察。其他旧教程的全面重写不属于本轮范围。

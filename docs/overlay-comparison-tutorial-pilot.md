# 重叠对比教程试作

完成日期：2026-09-27。已在本地实现并验证，尚未部署。

## 页面

| 平台 | 英文 | 简体中文 |
| --- | --- | --- |
| iPhone / iPad | `/guides/overlay-two-videos-iphone-ipad/` | `/zh-Hans/guides/overlay-two-videos-iphone-ipad/` |
| Android | `/guides/overlay-two-videos-android/` | `/zh-Hans/guides/overlay-two-videos-android/` |

本地预览地址：`http://127.0.0.1:4328`。新教程只注册 en-US、zh-Hans，其他语言不生成未翻译页面。沿用原有文章、目录、图片放大、FAQ、下载入口及平台互链结构。

内容入口：`src/i18n/overlayGuides.ts`。每端 6 个步骤、6 张截图、5 个常见问题。正文、标题、说明、alt 和 SEO 元数据均有中英文版本，两种语言共用英文 UI 截图。

## 实拍与素材

- iOS：用户已打开的 iPhone 17 Pro 模拟器，iOS 26.5；App 1.0.29（101）。使用 Computer Use 操作、simctl 捕获设备原始截图。
- Android：Pixel 8 真机，Android 17；App 1.0.1（16）。Computer Use 镜像输入不稳定后，经用户明确同意，改用 ADB 点击、滑动、读取界面及 screencap 截图。
- 两端均为已激活高级会员的英文界面，文案明确说明 Overlay Comparison 的 VIP 要求。
- 原视频位于 `/Users/mac/Documents/simulatorVideos/`：`Pro vs Amateur Golf Swing Comparison!_merged.mov` 和 `Pro vs Amateur Golf Swing Comparison!_merged 2.mov`。工作副本只改名为 Golf 01.mov、Golf 02.mov，没有修改视频内容。
- 两个视频分别载入两个播放区域；上层约 50% 不透明度、1.00× 缩放，手动定位到相近的上杆阶段。示例同步点并非自动运动识别结果，也不代表两段不同节奏的动作能全程重合。
- iOS 同步面板示例约 2.237s / 2.039s；Android 约 2.340s / 2.117s。教程不要求读者照抄这些时间。
- Android 媒体仅从本次专用文件夹选取；网站不含其他手机媒体或通知截图。

## 图片制作

使用 `/Users/mac/Desktop/iOS/NVideo/Tools/AppStoreScreenshotFramer/add_iphone_frame.py`：iPhone 使用 Cosmic Orange，Android 使用 Pixel 8。

该工具默认把竖屏外壳顺时针旋转为横屏；本次横屏截图的相机安全区域位于左侧。因此将原外壳 PNG 逆时针旋转 90° 保存为临时横屏外壳，再通过工具的 `--frame <path>` 输入进行拼装。没有修改工具源码，也没有旋转、合成或重绘 App 的屏幕内容。

最终素材：`public/images/guides/overlay-comparison/{ios,android}/en/*.webp`，共 12 张。使用 Pillow 输出 quality=87、method=6；保留透明背景、原始外壳尺寸及正确的横竖屏宽高。原始截图和带壳 PNG 留在 `.tmp/overlay-tutorial/`。

文章样式增加一条规则，让横屏步骤始终先显示文字、再显示图片，避免偶数步骤继承左右交替布局后的图片优先顺序。

## 验证

- `npm run build` 通过（257 个页面）。
- 生成结果恰好包含 4 个新路由；每页 6 张素材均存在，图片宽高与声明一致。
- 检查自引用 canonical、en-US / zh-Hans / x-default、平台互链、站内链接、目录锚点和 HowTo / Article / FAQPage JSON-LD。
- 通过 Codex 内置浏览器实际检查桌面布局与全部 4 页的 390px 手机布局：无横向溢出、无页面错误覆盖层、未发现控制台 error。
- 实测语言切换、iOS → Android 跳转、图片放大与关闭、手机图片放大和 FAQ 展开。
- agent-browser 独立进程曾连接超时；实际视觉验收使用 Computer Use 内置浏览器完成。

## ADB 崩溃排查

早先依据相邻 USB 日志推断 USB 后端出错不够准确，后续崩溃报告和隔离实验修正了这一判断。

本机 SDK ADB 37.0.1 在 `libadbmdns_zero_config_driver` 线程中崩溃，栈包含 `FQServiceName::try_from`、`_Unwind_Backtrace`，随后因 `invalid compact unwind encoding` 触发 SIGABRT。9 月 23–27 日已有 84 份 ADB 报告，其中 82 份是这一栈，早于此次教程操作。

使用同一个 ADB 37 可执行文件，在独立本地端口上同时关闭 USB 和模拟器扫描，进行 35.3 秒对照：开启 mDNS 的进程退出（signal 6）；设置 `ADB_MDNS=0` 的进程存活至测试结束。说明触发路径位于本机环境中的 mDNS 服务发现，并不依赖 USB 扫描。尚未捕获具体触发的网络服务记录，不能归因于某台网络设备，也不能单独归因于 macOS。

官方依据：
- https://developer.android.com/tools/releases/platform-tools （37.0.0 默认使用 libadbmdns；37.0.1 移除 openscreen）
- https://android.googlesource.com/platform/packages/modules/adb/+/refs/heads/main/client/mdns_utils.cpp （ADB_MDNS=0 开关）

拍摄使用临时目录中的官方 ADB 36.0.2，最终服务以 `ADB_LIBUSB=1 ADB_MDNS=0` 启动。没有替换原 Android SDK、修改系统全局环境变量或客户端项目代码。Pixel 临时旋转锁已恢复为原来的 free。

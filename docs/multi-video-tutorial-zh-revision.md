# 简体中文多视频教程第二版

日期：2026-09-13。仅改 `zh-Hans` 的 `play-multiple-videos-iphone-ipad` 教程；英文试点与其他语言继续使用原有详情页。

## 用户反馈对应修改

- 标题、摘要、SEO 描述恢复 iPhone 与 iPad；截图是 iPhone 实拍。
- 删去开头的准备事项，改成面向观看、学习、对比场景的操作说明。
- 第一张布局截图选择数量「全部」、方向「全部」，展示更多布局。三行一列在网页上用橙色边框标出，放大时保留标记。
- 不再要求关闭播放列表，以同一区域轮流播放多个视频的可选用法介绍。
- 第三步新增真实播放控制截图，能看到第一路视频的喇叭、倍速、暂停与进度条。
- 参考本地 ClipDock `src/layouts/TutorialArticle.astro` 和 `src/styles/tutorials.css`：简洁标题导语、桌面侧栏目录、交替图文、移动端顺序排版、FAQ、下载与相关教程。
- 结尾介绍布局数量、视频数量、自定义布局、多媒体、视频格式、同步与使用场景；会员说明移至 FAQ。
- 添加与可见内容一致的 Article / FAQPage 结构化数据，保留 HowTo / Breadcrumb / canonical / hreflang；社交预览使用四宫格实拍图，声明正确尺寸与 WebP 类型。

## 真实素材与能力依据

应用仍为 `NVideo-Simulator` 的 `dev/Dev_1.0.29_Simulator`，提交 `83149cea`；iPhone 17 Pro Max / iOS 26.0，简体中文，使用模拟器已有相册视频。沿用第一版 Debug VIP 截图设置，本次没有改 App 或重新编译。

新素材：

- `public/images/guides/multi-video/zh-Hans/01-layout-choices.webp`
- `public/images/guides/multi-video/zh-Hans/06-playback-controls.webp`

原始与橙壳 PNG：`/Users/viktorhuang/Downloads/SSP-Tutorial-ZH-Revision-2026-09-13/`。

框图继续使用 `NVideo/Tools/AppStoreScreenshotFramer/add_iphone_frame.py --frame orange`。两张新 WebP 共 381,108 字节。布局标记由 `GuideImage.highlight` 定义，在原图 1319 × 2748 的坐标系中为 `{ x: 102, y: 1574, width: 275, height: 275 }`；保留未经标注的原始与框图文件，网页覆盖标注，不改变 App 像素。

能力核对来自应用代码与简体中文本地化：

- `NVideo/Layout/DIYLayoutType.h`：`DIYLayoutType_Count = 144`，包含 36 屏布局。
- `NVideo/zh-Hans.lproj/Localizable.strings`：36 屏、创建布局、拖动区域/四角/分割线、各菜单名称。
- `NVideo/Utils/NSURL+FileType.m`：视频、图片、音频、PDF、HLS 和 RTSP 类型。
- `NVideo/Browser/DIYBrowserView_Video.m` / `+Playback.m`：特殊格式走自定义播放器；点击喇叭切换静音。
- `NVideo/MainVC/DIYMainVC+Bookmark.m`：保存与恢复快照经过会员检查。
- 数量在文章中复用网站 `src/config/appFacts.ts`，无需在多处手工同步。

## 验证

- `npm run build`：内容事实检查与 Astro 全站 172 页构建通过。
- 桌面 1440 × 1000、手机 390 × 844：图片、段落、目录和结尾布局检查，无横向溢出。
- 5 张步骤图片均成功加载；第一步标记完整围住三行缩略图，第三步控制按钮真实可见。
- 点击放大、Escape 关闭并还原焦点、FAQ 展开、目录锚点检查通过。
- 内链、图片文件、HowTo 锚点及 FAQ 结构化数据与可见问答一致性检查。
- 本次浏览器验证没有发现控制台警告或错误。

本地预览：`http://127.0.0.1:4327/zh-Hans/guides/play-multiple-videos-iphone-ipad/`。

仅本地审阅，尚未发布。iPad、Android 与特殊格式解码未在本次补拍中逐项运行验证。

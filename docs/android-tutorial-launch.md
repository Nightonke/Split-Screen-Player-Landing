# 简体中文 Android 上线与多视频教程

日期：2026-09-13。本次仅更新简体中文，供本地审阅，尚未发布。

## 页面与入口

- 新教程：`/zh-Hans/guides/play-multiple-videos-android/`。
- 原 iPhone / iPad 教程保留标题与操作定位；两篇通过文章开头的设备链接互相跳转。
- 首页和教程列表使用手机 / 平板的通用表述，明确 iPhone、iPad、安卓。
- 首页、两篇图文教程及教程列表结尾并列提供 App Store / Google Play；Android 教程优先展示 Google Play。
- 简体中文页眉的下载按钮改为平台选择菜单，页脚与手机菜单也有两个商店入口。
- 首页原评分加上 App Store 来源；不把苹果评分或版本号复用给 Android。移除首页跨平台语境下不准确的“不收集数据”短语，改为“相册视频 · 本地文件”。

## 下载二维码

Android 二维码 `public/assets/google-play-qr.png` 编码的是 `https://splitscreenplayer.com/android`，使用 M 级纠错、29 × 29 格和四格白色留边。短地址在 `astro.config.mjs` 中指向 `appFacts.googlePlayUrl`，构建后生成 `dist/android/index.html`；GitHub Pages 通过立即刷新的 HTML 页面跳转，页面含 `noindex` 和可点击的商店链接。卡片点击仍直接打开 Google Play。

短地址页面与二维码必须一起发布；当前本地预览中的二维码扫码访问的是正式域名，因此需要网站上线后才能完整使用。

## Android 文案依据

只读核对本地 `SplitScreenPlayer-Android`（提交 `96ada14`）；连接的 Pixel 8 安装的是 `com.nightonke.android.splitscreenplayer` 1.0.0（versionCode 15，minSdk 23）。没有更新或重装 App，没有改 Android 工程，也没有改用户的 `app/build.gradle` 未提交内容。

依据为当前实现与本地化，未将旧 README 的编号操作直接写进教程：

- `app/src/main/java/com/nightonke/splitscreenplayer/MainActivity.kt`：区域打开、布局选择、方向切换、收藏与恢复。
- `ui/VideoControlsView.kt`：喇叭静音、倍速、播放暂停、右侧打开按钮。
- `app/src/main/res/values-b+zh+Hans/strings.xml`：打开、相册视频、文件、文件夹、网页/流媒体、播放列表。
- `strings_layout_picker.xml`：默认、纵向共 1 列、横屏（右）、中心对称（4～9 个）、创建布局与编辑操作。
- `strings_toolbar.xml`：收藏、收藏列表、保存当前分屏、导出分屏视频。
- `strings_settings.xml`：保存当前分屏生成 PNG 并打开系统分享面板。
- `playback/VideoPlaybackEnginePolicy.kt`：旧格式兼容播放；未直接复制 iOS 特殊格式播放器说明。
- `app/src/main/assets/layout_catalog.json`、`docs/PRODUCT.md`：144 种布局、36 区域、Android 媒体能力、会员边界。

特别区分：“收藏”恢复内容和布局；“保存当前分屏”生成 PNG 图片。自定义布局的创建和编辑免费，应用布局需要会员。

## 临时配图与后续替换

按用户要求复用已经审阅的 iPhone 配图。页面顶部、图片替代文本和图注均明确是 iPhone 界面示意；没有声称是 Android 实机截图。

独立内容文件：`src/i18n/androidMultiVideoGuide.ts`。替换每步的 `image` 即可；两篇文章不共享可变的步骤数据。

| 步骤 | 现有素材 | 后续 Android 截图内容 |
| --- | --- | --- |
| 1 | `01-layout-choices.webp` | 全部布局，标出三行一列 |
| 2 | `02-open-videos.webp` | 打开菜单：相册视频 / 文件 |
| 3 | `06-playback-controls.webp` | 视频独立控制按钮 |
| 4 | `04-select-grid.webp` | 4 + 横屏（右）的布局选择 |
| 5 | `05-four-videos.webp` | 四宫格与收藏 / 收藏列表操作栏 |

替换时更新图片尺寸、alt、caption 和需要的高亮坐标；把 `illustrative` 设为 false。全部替换后移除文章 `note`，即可让真实步骤图进入 HowTo 结构化数据。当前示意图保留在可见正文与 Article 图像中，不作为 Android 操作截图写入 HowToStep.image。

## 路由与验证

`src/i18n/guideCatalog.ts` 为简体中文注册新教程，首页卡片、教程列表、列表结构化数据与静态路由使用同一目录。没有生成未翻译的 Android 页面，Android 页的 hreflang 仅指向实际存在的版本；x-default 指向当前中文页。

- `npm run build`：事实一致性检查与 173 页静态构建。
- 桌面与 390 px 手机宽度检查：下载菜单、两个商店链接、首页按钮、教程目录、配图、FAQ、双向教程链接。
- 静态检查：站内链接、图片文件、173 页数量、Android 单语言路由、HowTo / FAQ / Article 与 canonical / hreflang。
- Android 与 iOS MobileApplication 结构化数据分开；Android 不沿用苹果评分和版本号。

本次没有 Android UI 全流程实测或新的 Android 实机截图；后续用 Pixel 8 配图替换时，再逐项完成实机操作检查。

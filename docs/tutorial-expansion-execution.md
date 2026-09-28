# 全量教程扩展执行清单

建立日期：2026-09-27。依据：用户已看完重叠对比试作，要求继续制作所有教程、所有语言；遇到问题先确认。

## 已确定的范围与做法

- 覆盖 `seo-tutorial-expansion-assessment.md` 的 36 个候选任务，结合实际功能补充。已有文章优先更新；操作高度重合的候选合并为章节，保留现有 URL。36 个任务不等于新增 72 篇文章。
- 全语言指网站当前的 9 种：en-US、zh-Hans、zh-Hant、ja、ko、fr、de、es、pt-BR。正文、标题、摘要、SEO、图注、alt、FAQ 和内链文字完整本地化。缺少翻译不生成相应路由。
- iOS、Android 分别实测步骤、入口名称、会员条件、支持格式和结果。功能只存在于一端时只制作该端教程。
- 全部新截图使用英文 UI，沿用既有图文结构、iPhone 橙色外壳和 Pixel 8 外壳。多语言共用截图，不把译文烧入图片。
- 使用用户指定的 `/Users/mac/Documents/simulatorVideos/` 素材。对比用高尔夫，布局使用横竖混合素材，声音教程选择含音轨的素材并实际确认声音。
- iOS 继续使用 iPhone 17 Pro、iOS 26.5、UDID `4C7AE372-B831-4171-85B6-46EE37AEAE31`；Android 继续使用 Pixel 8。iOS 用 Computer Use；Android 已获用户明确授权使用 ADB 操作和截图。
- ADB 延续已验证的独立 36.0.2 与 `ADB_MDNS=0` 方案，不替换 SDK。2026-09-27 本轮检查 Pixel 8 在线，指定模拟器已启动。
- 先交付可检查的本地页面与素材。批量制作请求不视为要求部署网站或修改客户端功能。

## 已确认延后的环境任务

电视／投影仪教程尚未确认实际接收设备及连接方式。用户已明确选择：先完成其余全部教程，投屏相关留待补齐。27、28 不属于当前交付的阻塞项，仍保留为后续待办。

该依赖只影响下表 27、28，不影响手机内画廊制作。iOS 模拟器的外接屏模拟不能作为真实 AirPlay／有线连接的验收；Android 实现依赖系统 Presentation 显示器，并不自行发起 Google Cast 会话。

YouTube／网页视频与直播属于执行时的验证项：先实测，再按可复现行为撰文。iOS 网页媒体源码仍拒绝部分 YouTube UMP 视频地址，因此目前不能保证指定的双视频播放流程可用。失败时记录可复现条件，相关教程保留待办，不写成已经支持。直播可先使用受控测试源验证，页面示例不得包含私有地址或凭证。

## 任务覆盖矩阵

| # | 用户任务 | 处理方式 | 关键验收 |
| --- | --- | --- | --- |
| 1 | 两视频重叠对比 | 双端试作已完成；补齐其余 7 种语言 | 既有 12 张实拍图，术语和跨语言路由 |
| 2 | 拖动分割线对比视频 | 双端新文 | 分割线、角度、参考线的真实操作 |
| 3 | 自动滚动瀑布流 | 双端新文 | 方向、尺寸、自动滚动、可见区域播放 |
| 4 | 多行／多列反向滚动 | 双端新文 | 对向流的方向、速度和排列 |
| 5 | 动态照片／视频墙 | 双端新文 | 手机内创建、素材、布局、播放 |
| 6 | 保存分屏对比图片 | 双端新文 | 生成并打开实际图片，区分视频导出 |
| 7 | 统一滤镜和视觉效果 | 双端新文，先实测范围 | 应用对象、效果、恢复原状 |
| 8 | 只听其中一个视频 | 双端新文 | 有声素材、静音、轮换独听 |
| 9 | 统一变速和临时快慢放 | 双端新文 | 持续倍速与长按行为区别 |
| 10 | 自定义首页工具栏 | 双端基础教程 | 添加、移动、移除，供其他教程链接 |
| 11 | 逐帧比较动作 | 升级 iOS 原页，补 Android | 单帧前后移动、慢放、真实时间读数 |
| 12 | 同步不同起点的视频 | 升级 iOS 原页，补 Android | 同步点与关联播放／拖动区别 |
| 13 | 标记并跳转关键时刻 | 双端新文 | 检查点保存、前后跳转，与同步点区别 |
| 14 | 保存和恢复工作区 | 双端新文 | 书签创建、关闭、恢复来源与状态 |
| 15 | 多个播放列表一起切换 | 双端新文 | 每区独立列表、上一段／下一段 |
| 16 | 放大一个视频再返回 | 双端新文或播放操作独立章节 | 放大轮换与恢复布局 |
| 17 | 完整显示与填满区域 | 双端新文 | Fit／Fill 的裁剪与黑边对照 |
| 18 | 旋转和镜像视频 | 双端新文或对比进阶章节 | 旋转、镜像、复位，逐端查实入口 |
| 19 | 自定义区域大小与位置 | 更新已有双端教程 | 保留原 URL，补自定义布局差异 |
| 20 | 自动排列横竖视频 | 更新已有双端教程 | 混合方向素材、推荐布局、应用 |
| 21 | 导出分屏视频 | 升级 iOS 原页，补 Android | 真正完成导出，打开文件检查画面／声音 |
| 22 | RTSP／HLS 直播 | 更新原页，核对并补 Android | 受控测试源、持续播放、重连与支持范围 |
| 23 | 视频与 PDF／图片资料同看 | 升级原页，核对并补 Android | 实际文档、翻页、缩放和声音主次 |
| 24 | 同时浏览两个网页 | 更新已有双端教程 | 两区各自导航、刷新 |
| 25 | 边看视频边浏览网页 | 更新已有双端教程 | 视频持续播放与网页独立操作 |
| 26 | 照片墙内独立轮播 | 合并到 #5，若步骤确实独立再拆 | 每相框内容、切换、恢复 |
| 27 | 照片墙输出电视／投影仪 | 等待环境选择，再做双端实测 | 真实连接及接收端结果 |
| 28 | 修正外接画面的方向和裁边 | 与 #27 同一环境依赖 | 外接端方向、安全边距的前后对照 |
| 29 | 同时观看两个 YouTube 视频 | iOS 候选，先验证才决定成文 | 两个不同视频同时持续播放、声音、重开 |
| 30 | 网页视频转入另一分屏 | iOS 候选，先实测普通网页视频 | 长按入口、转入后播放、来源限制 |
| 31 | 多分屏照片幻灯片 | 双端新文或 #5 的独立章节 | 图集、顺序、切换、不同区域播放 |
| 32 | 关联播放器控制（修正原“防误触锁屏”候选） | 合并到全局播放教程 | Android Lock 实测为关联播放控制，非触摸锁；iOS 待继续核对 |
| 33 | 定时停止多个视频 | 双端新文或播放管理章节 | 设置、取消、实际到时停止 |
| 34 | 筛选并批量打开相册视频 | 双端新文 | 实际支持的筛选条件、结果、批量载入 |
| 35 | 从本地文件／文件夹建立工作区 | 双端新文 | 导入、列表、重新打开后的可访问性 |
| 36 | 统一播放、暂停、定位和重播 | 双端新文或基础播放教程扩写 | 全局／单区控制的作用范围 |

现有 `multi-camera-review-ipad` 页面另外保留并审查；涉及 iPad 专有行为时需要单独在 iPad 验证，不能把 iPhone 截图算作 iPad 实测。

## 素材盘点

使用 ffprobe 读取原文件元数据，没有改动素材。共 10 个视频，6 个横屏、4 个竖屏（其中一个 2:3），3 个含音轨。

| 文件 | 尺寸 | 时长（约秒） | 音轨 |
| --- | --- | --- | --- |
| 130213-748134209_medium 2.MP4 | 1280×720 | 18.8 | 有 |
| 149479-796105907_medium 2.MP4 | 1280×720 | 11.9 | 有 |
| 157990-815894937_medium 2.MP4 | 1440×2560 | 16.2 | 无 |
| 266436_medium 2.MP4 | 1440×2560 | 14.1 | 无 |
| 267242_medium 2.MP4 | 720×1280 | 6.5 | 无 |
| 303594_medium 2.MP4 | 1080×1620 | 10.1 | 无 |
| 85212-590779450_medium 2.MP4 | 2560×1440 | 10.1 | 无 |
| 86332-592491755_medium 2.MP4 | 2560×1440 | 15.1 | 有 |
| Pro vs Amateur Golf Swing Comparison!_merged.mov | 1920×1080 | 10.3 | 无 |
| Pro vs Amateur Golf Swing Comparison!_merged 2.mov | 1920×1080 | 9.4 | 无 |

## 制作顺序与验收

1. 先完善教程内容／素材清单与检查脚本，补齐重叠对比的全语言版本。
2. 拍摄并制作工具栏基础教程，以及滑动对比、瀑布流、对向流、画廊、对比图片；每个主题双端分别验证后做 9 语言。
3. 完成其余本地操作任务并升级已有内容；播放、书签、导出等结果必须实际检查。
4. 验证网页／直播候选及具备环境后的外接屏任务。记录确实缺少条件的项目，不伪造成功截图。
5. 在教程数量增加后完善主题分类、平台筛选和相关教程内链；每批检查所有语言、图片尺寸、图片文件、锚点、互链、canonical、hreflang、sitemap、移动和桌面显示。

每个已完成的主题应留下：真实操作记录、平台版本、源截图、带壳图、网页 WebP、9 语言内容和验收结果。批次是执行顺序，不缩减用户要求的整体覆盖范围。

## 实际进度（2026-09-28，持续更新）

已落地九语言内容并通过构建：重叠对比、工具栏、滑动对比、瀑布流、对向流、动态视频画廊，均有双端英文实拍图。画廊加入后构建为 361 个站点页面，其中 28 个教程 × 9 语言 = 252 个教程详情页；现有旧教程计入该数量，不表示其全部重拍已完成。

Android 新一轮操作证据（其中正文进度见下方）：
- 照片画廊：四张用户视频静帧分为两组、各组轮播；保存、退出、恢复后保留四张照片和八个视频。Photos 全局设置 4.6 秒、First to last，本轮未更改。
- Looks：单区 B&W Film、100% Intensity 与全局两区应用均实测；Original 恢复成功。
- 检查点：在 2 秒保存，从 7 秒通过列表跳回 2 秒；UI 明示 10 秒内的检查点去重。
- 逐帧：实际时间 2.244 → 2.284 秒；慢放 0.6× 和返回检查点另有截图。
- 变速：全局 0.8× 同时显示于两区，恢复 1×；按住兔子按钮显示 Temporary speed: 3×，松开恢复 1×。
- 全局播放：两区一起播放、暂停；Global Progress 在无 Sync Lock 时按各视频百分比定位（相同百分比不等于相同秒数）；Restart All Players 回到 0。
- Lock：启用后 UI 提示 Player controls linked；点击单区播放使两区播放，随后关闭关联。它不是防误触锁屏。
- 显示变换：Fit / Fill、90° 旋转、Horizontal 镜像均实测并复位。
- 放大轮换：第 1 区、第 2 区轮换；长按相同按钮恢复原分屏布局。
- 定时停止：自定义 1 分钟，两区循环播放；倒计时结束后两区都显示播放三角，位置停在不同时间，证实已暂停。
- 保存图片：Save Current Split Screen → 系统分享面板 → Files by Google / Download，实际打开生成的 PNG；导出图片无播放器控制按钮。
- 视频导出：从当前两段高尔夫生成并保存相册，380×720、30 fps、H.264、7.166667 秒；原素材无音轨，输出也无音轨；已读取实际文件并检查 3 秒画面，两区俱在。
- 同步点：Sync Groups 中将第一段 2.340 调整为 2.373 秒，第二段 2.117 秒；Align Preview、开启 Sync Playback、Apply，UI 提示 Sync Lock On。

证据路径：`.tmp/tutorial-expansion/raw/android/<topic>/`；生成的结果 `.tmp/tutorial-expansion/results/android-comparison.png`、`android-golf-export.mp4`。

注意：iOS 模拟器在一次拖动后黑屏，通过 Device Hub 的 Restart 恢复；应用重启为中文。系统“语言与地区”持续白屏，重启 Settings 后仍然如此；应用专属 Settings 没有语言项目。已请求用户允许以 simctl 的英文语言参数重新启动应用，尚未收到答复。不会用中文截图冒充英文 UI，也不会自行执行尚待授权的替代 UI 控制。

本段记录实测进度，未写正文、未拍 iOS 或未完成验收的条目仍未完成。


### 2026-09-28 后续制作记录

- Android 照片独立轮播、逐帧、检查点、同步点、分屏静态图片、普通工作区书签、视频导出，均已补齐九语言页面；新主题使用单独 Android 文案，没有借用 Android 截图生成未经实测的 iOS 页面。
- 当前构建为 424 个站点页面，35 篇教程 × 9 语言 = 315 个教程详情页。包含尚待升级的旧文，不代表所有教程或双端验收完成。
- 教程目录新增九语言的平台、主题、关键词筛选；浏览器检查通过筛选组合、零结果、重置以及 390px 手机布局。历史教程统一引用已有英文截图，图片尺寸与链接检查通过。
- 普通书签：保存成功，Close All 关闭可见两区，再从首个新书签恢复；两区高尔夫、检查点、同步标记重新显示。书签列表包含用户以前的私人内容，未纳入教程公开素材。
- 播放列表：每区各选两段视频；Next on All Players 同时由冰淇淋／户外横片切换到台阶／雨伞，Previous on All Players 返回；单区列表实际显示 Scene 02、Scene 01。素材顺序以列表显示为准，不宣称按点选顺序排列。正文待写。
- 声音素材纠正：三段带音轨的视频解码后均为数字静音。仅检查 ffprobe 中存在音轨不足以认定有声。已在工作目录制作 60 秒 Sound A/B 副本，保留原画面，分别配 440/880 Hz 测试音，原文件不变；导入 Pixel 的 SSP-Tutorial-Audio 相册。
- 声音控制：Cycle Solo Audio 连续点击显示 1／2，分别只保留上／下区的扬声器图标；Mute All Players 使两区静音，单区扬声器可以单独恢复。系统 AudioTrack 的 clientVolume 状态证实两区静音与只上区有声的差别，相关 dumpsys 仅保存在本地证据目录。
- 音频采集限制：scrcpy output 模式采得静音且系统显示 portVolume 静音；playback 模式能采得两种测试音，但忽略播放器音量，因此不作为独听最终听感的证明。没有宣称亲耳确认手机扬声器效果。媒体系统音量已恢复原值 0。

新增实拍：`.tmp/tutorial-expansion/raw/android/{bookmarks,playlists,audio}/`。音频验证材料：`.tmp/tutorial-expansion/audio/`、`.tmp/tutorial-expansion/results/`。仍需完成其余 Android 正文、未验证主题和 iOS 拍摄；投屏继续延后。

### 播放与显示批次

- Android 统一变速、全局播放、睡眠定时、Looks、Fit/Fill/旋转/镜像、轮换放大，完成九语言正文。构建 478 个站点页面，41 篇教程 × 9 语言 = 369 个教程详情页；140 张引用截图校验通过。
- 变速补测：恢复高尔夫书签后 Sync Playback 确实开启，两个保存的同步点为 2.373 / 2.117 秒；同步状态下临时慢放无效，与源码一致。关闭同步并 Apply 后，长按乌龟显示 Temporary speed: 0.33×。新实拍 `playback/06-hold-slow.png`；原无效果截图仅保留在临时诊断目录，不作为教程图。
- 浏览器抽查新导出正文、完成截图、相关教程链接，控制台无警告或错误。九语言导航、SEO、图片和本地链接检查继续通过。
- 待写 Android 已拍主题目前还剩声音控制、播放列表。另有媒体导入／筛选、文档、流媒体候选以及既有布局／网页教程复核未完。iOS 英文启动授权仍等待答复。

### 媒体导入与资料批次（2026-09-28）

- Android 声音控制、播放列表、相册筛选、文件／文件夹导入、PDF 同看已完成九语言页面。最新构建 523 个站点页面；46 篇教程 × 9 = 414 个详情页，160 张引用截图检查通过。
- 筛选：8 段素材选好后进入 Choose a Filter，Portrait 得到 4 段；列表已实际打开。自定义 Duration ≤ 12sec + Portrait 显示 3 段，其中元数据未加载的条目保留；已在正文说明缺失元数据的限制。
- 文件夹：从底部 Open → Folder 选 SSP-Golf-Tutorial 并授权，只导入 2 个高尔夫文件，分别占据两区。保存新书签（04:07:47）、强制停止并重新启动应用、从该书签恢复，两区均可播放。应用本次启动为空，不宣称自动恢复。单区 Folder 实测仅首段，与本地实现一致，不把它写成列表操作。File 的长按多选 2 项 → Select 也已完成。
- PDF：新建 2 页英文 Golf Review Notes.pdf，以 PDF 技能渲染并逐页目检。Pixel 内 File 打开后，1/2 → 2/2、双击放大／恢复均已验证，上方本地视频继续播放。公开教程使用页面与原生控件实拍。
- 本地 HLS / RTSP：使用 MediaMTX 1.18.1，在 127.0.0.1 的 8887 / 8557 监听，经 ADB reverse 给 Pixel 访问；用户的两段高尔夫循环作为 H.264 测试源。两路播放已验证，正在补断源重连测试。未公开服务或连接外部摄像头。配置参考 https://mediamtx.org/docs/references/configuration-file 。
- iOS 英文启动参数的待确认请求仍未收到答复；继续等待，不以中文界面拍摄或挪用 Android 证据。

### iOS 英文环境恢复（2026-09-28 04:29）

已通过 Computer Use 操作 Xcode 解决：停止先前 SIGTERM 暂停的调试会话，查看 NVideo Scheme → Run → Options，App Language 原本即为 English（未改设置）。然后 Product → Perform Action → Run Without Building，在 iPhone 17 Pro 26.5 启动已有构建。Device Hub 内 Settings 确认 Change Language: English，Premium Activated，版本 1.0.29。没有执行待确认的 simctl 启动命令；该确认已不再需要。iOS 后续拍摄恢复可进行。

### iOS 逐帧与画面控制（2026-09-28 05:02）

- iOS 逐帧旧文已替换为九语言实测版本，保留 `compare-sports-videos-frame-by-frame` URL。构建仍为 532 页、47 篇 × 9 语言，168 个引用图片检查通过；是升级旧文，不增加文章数。
- 在 Video Settings 开启原先隐藏的 Show Display Transform Button、Show Frame Mode Button、Show Filter Button。开启逐帧会暂停选定视频；第一步从任意暂停点 7.482 前进到 7.513，回退得到相邻源帧 7.479。教程两张最终截图为 7.479 / 7.513，不将该间隔泛化到其他素材。
- Video Speed 实测 0.8×，后续滑块操作最终为 0.05×，最终教程截图和正文采用实际 0.05×。两个视频均已进入逐帧暂停。
- 部分视频控制数秒后隐藏，跨工具 simctl 截图会拍到无控件画面。改为 Computer Use 直接点 Device Hub 的 Screenshot，在同一批操作内保存原生分辨率截图，再复制到工作目录；未合成应用界面。
- iOS Looks 单区 B&W Film / 100% / Done 实测只改变上区；Original 恢复。全局效果尚待补查。
- iOS Fit 完整画面带黑边、Fill 裁剪填满、90° 顺时针旋转、Horizontal Mirror 均实测；已经还原 Fit、原方向和关闭镜像。英文实拍在 `raw/ios/transform`，正文待写。
- Android 旧布局复核：Smart Layout 从 8 段素材推荐 2 横向和 1 纵向布局；纵向方案实际载入。2 区预设中拖动黄线扩大上区，然后 Adjust Content Position 拖动交换台阶与冰淇淋视频，Done 完成。证据在 `raw/android/layout-audit`。
- iOS 横向工具栏拖动和长按仍待替代手势授权。已请求用户允许 XCTest 等工具，尚无答复；目前继续可行的 Computer Use 操作。

### iOS 全局控制、定时与同步（2026-09-28 05:31）

- iOS 统一播放／暂停、Restart All Players 已实测，重播后两区均为 00:00.000。全局速度点按逐档切换，两区都显示 0.8×，之后已恢复 1×。Global Progress Bar 已显示，拖动定位仍待进一步验收；相关文案未发布。
- 为使更多按钮可见，通过工具栏编辑器依次暂时移出了前 29 个动作，当前 Added 12。移除仅影响模拟器演示工具栏；当前最前为临时快放、临时慢放、全局静音、轮换独听、定时、同步点、上个检查点。后续需按文末记录恢复工具栏。
- iOS Sleep Timer：Custom 0 h / 01 min，实际到时两区暂停在 1.975 / 8.980 秒；另外启动 10 分钟后使用 Don't enable 取消，计时标记消失。九语言正文已写，待完成本批构建。iOS 源码调低 UIScreen brightness，不能把 Android 的仅窗口调暗说法套用；模拟器截图不证明物理亮度变化。
- 同步面板打开时已有 Synchronized playback 开启，原先保留点为 2.401 / 9.949。本轮通过 ±1 Frame 改为 2.108 / 2.361；Preview alignment 两路播放，Stop 返回、Apply 生效，两区有 Sync group 1 标记。单区 Play 后两区都进入播放。随后已关闭同步并 Apply，以验证独立操作。
- 检查点：上区在 1.006 秒保存一个标记，移到 3.008 秒。跳转后暂停的时间标签仍显示旧值，误导了最初判断。切换 Frame Mode 刷新后显示 00:01，画面也已返回；实际 seek 已发生，不能记录为检查点功能失效。还需把可复现刷新步骤写入 iOS 专属文案。
- iOS 逐帧注释已纠正：全局 Use Custom Player 开关并不意味 MOV 一定用自定义引擎；本例原生兼容 MOV，文案只写兼容本地视频。

当前临时移出的 iOS 动作（原顺序）：Open Multiple, Close All, Select Layout, Favorite, Favorites List, Lock, Overlay Comparison, Swipe Comparison, Smart Layout, Waterfall, Counterflow, Gallery Wall, All Looks, Cycle Maximize, Rearrange Content, Adjust Layout Size, Switch Content Mode, Previous Video for All Players, Rotate Contents, Next Video for All Players, Pause All Players, Backward All Players, +1 Frame, Restart All Players, Forward All Players, Global Progress Bar, Change Speed for All Players, 90° Clockwise, -1 Frame。

### iOS 导入、照片和资料（2026-09-28 06:26）

- 导出已完成九语言旧 URL 升级：iOS 实际输出 H.264、402×720、30 fps、8.433333 秒、无音轨；保存相册并播放预览成功。没有把 Android 的 380px 宽度套用到 iOS。
- iOS Save Snapshot → Save Image 实际保存 JPEG（1206×2160），在照片中打开并隐藏系统控件后拍摄结果。分享面板有中文系统项目，没有作为英文教程图发布。步骤图现在允许为空，纯文字步骤按单列呈现。
- 照片：通过 Open Multiple → Photos 选 4 张演示视频静帧，选择 Play evenly with all 2 players，每区 2 张；Image Settings 为 4.6s、From First to Last、1×1。上区暂停于雨伞，下区可独立前后切换，并从冰淇淋自动变为台阶。九语言 iOS 专属正文已加入。
- 播放列表：上区选 IMG_0015.MP4（冰淇淋）和 IMG_0014.MP4（台阶），下区选雨伞与户外。上区列表实测按上述顺序排列；全局上一段／下一段尚待补拍，不算完成。
- 书签：06:09:10 保存两区四视频列表，Close All 后从新书签恢复；两区和各自列表恢复。九语言正文已补齐，未公开历史书签列表截图。
- 筛选：单区 Playlist + Video Filter 开启，8 段 Scene 素材中 Portrait 命中 4 段，结果列表实际显示 4 videos（IMG_0011、0009、0010、0016）。iOS 面板名为 Select Filter，九语言正文已适配。
- 文件：将用户高尔夫副本及本任务生成的 PDF 放入模拟器 NVideo Documents/SSP Tutorial Files。Files 多选两段 → Open 成功；进入仅含两段高尔夫的 Golf Videos 文件夹，不勾选文件直接 Open，也实际导入两区。保存 06:16:46 书签，Close All 后恢复，均可播放。未宣称此次完成了应用重启后的文件授权恢复。
- PDF：局部 + → Files、Playlist 关闭，加载 Golf Review Notes.pdf。iOS PDFKit 连续阅读；滚动显示浮动页码控件，1/2 → 2/2 箭头点击成功，双击放大并双击恢复成功，上方视频持续播放。CUA 拖动仍无效，但对第二页可访问文本的点击成功将 PDF 滚到第二页，从而可使用浮动控件。文章保留旧 video-pdf-web-multitasking URL。
- 最新构建 622 个站点页面，57 篇教程 × 9 语言 = 513 详情页，219 张引用图检查通过。包含旧文，不表示全范围结束。
- 为恢复基础操作，工具栏通过编辑器 Reset 临时恢复默认 7 项：Open Multiple、Close All、Select Layout、Favorite、Favorites List、Lock、More Menu。任务开始时的 14 项仍需最终恢复；不用再逐个补回之前临时移出的全部 41 项。

### iOS RTSP 阻塞证据（2026-09-28 06:26）

Open Multiple → Web/Stream 支持一行一个地址。在 Auto 下输入本机 HLS 和 RTSP 两路，HLS 先显示画面；RTSP Connecting 后，应用停在 Xcode 的程序断言，未得到双路播放成功结果。

Xcode 控制台与调用栈：
```
Compiler failed to build request
-[MTLDebugRenderCommandEncoder setRenderPipelineState:]:1627
Set Render Pipeline State Validation
renderPipelineState must not be nil.
SGMetalRenderer.m:46
SGVideoRenderer drawTextures → drawInMTKView
Thread 1: hit program assert
```

环境：iPhone 17 Pro / iOS 26.5 / SGPlayer 自定义 RTSP 播放器。MediaMTX 与两路发布进程保持运行；不是 ADB 问题。没有修改 iOS 客户端代码或把未通过的截图写成成功示例。已停止该调试会话并通过 Xcode Run Without Building 恢复，后续继续排查是否可复现。

06:29 单路 RTSP 复测也触发同一 SGMetalRenderer Metal nil pipeline 断言；已通过 Xcode 停止并重新运行。已向用户询问是本次修复客户端还是暂留 RTSP 待补，尚未答复。不能把这个旧 RTSP 教程列为此次已重新验证。

06:35 工具栏补拍采用可访问元素定位：Not Added 里的屏外 Gallery Wall / All Looks 文本点击会滚动到该行，随后可添加下方全局动作。最后精简到 Favorites List, Next Video for All Players, Previous Video for All Players, Pause All Players, Restart All Players, Global Progress Bar, Change Speed for All Players, Mute All Players, Cycle Solo Audio, More Menu（10项）。原始14项尚待最终恢复。

### 播放收尾与网页复核（2026-09-28 07:30）

- 播放列表：iOS 上区冰淇淋／台阶、下区雨伞／户外两组列表，Next Video for All Players 与 Previous Video for All Players 均实测切换两路；切换会开始播放。九语言正文已完成。
- 全局控制：iOS 已验证全局播放／暂停、Restart All Players、Lock 关联单区播放。全局进度条可显示，按比例定位的语义由 `DIYMainGlobalProgressView.m` 与 `DIYMainVC+MainBottomBar.m` 确认；CUA 的拖动尚未可靠到达模拟器，不将拖动验收写成通过。
- 声音：iOS 使用基于演示素材的 440Hz / 880Hz 有声副本。Cycle Solo Audio 先显示 1（仅上区未静音），再显示 2（仅下区未静音），Mute All Players 后两区静音，单独取消上区静音成功。依据 UI 状态及实现，不宣称录音或扬声器听感验收。
- 倍速：iOS 单区 1.4×、全局两区 0.8×、全局恢复 1× 均有实拍。正文的临时长按说明依据实现；长按手势验收仍未完成。AX `setValue` 只移动滑块而不触发实际速率，未将这种状态用作成功证据。
- iOS 原始工具栏已恢复 14 项：Open Multiple、Close All、Select Layout、Favorite、Favorites List、Lock、Overlay Comparison、Swipe Comparison、Smart Layout、Waterfall、Counterflow、Gallery Wall、All Looks、More Menu。未恢复测试中额外加入的其他动作。
- 网页：iOS 分别打开 Wikipedia 的 Golf 和 Golf swing，双网页同时可见；上方本地视频与下方网页组合播放并刷新成功。再次出现系统多网页视频不能同时播放的提示，旧文的这一限制仍准确。iOS CUA 滚动不能可靠触发，滚动复核未计为通过。
- Android 两网页、视频与网页的现有流程已再次打开；实际页面与播放画面保存在 `raw/android/web-audit`。手势与加载时序导致导航目标的观察不够确定，不据此作新的“全部导航回归通过”声明。保留此前已制作的正式教程图；本次审计图不作为最终教程图。
- 布局旧文修正英文入口：iOS 是 Select Layout / General Settings / Rearrange Content；Android 是 Choose Layout / General / Adjust Content Position。保留旧 URL 和原有实拍图。Android 的混合方向推荐、拖动黄线、换位在前述批次已经重测；iOS 拖动重测待可用手势环境。

### 网页视频与 YouTube（2026-09-28 07:30）

无需改用其他 UI 工具，已找到当前版本的 Mini Player 检测列表，通过 CUA 点按完成两篇 iOS 教程，均覆盖九语言：

- `open-web-video-in-another-player-iphone-ipad`：本地英文 Golf Swing Review 页面使用用户高尔夫素材的 960×540 H.264 副本。网页内播放 → Mini Player 检测 00:10 / 960×540 → 点击条目自动进入空白下区；上下画面同时变化，下区可单独暂停（实拍 00:03）。播放器的 Return to Source Webpage 入口由实拍和实现确认；返回点击没有得到明确的视觉结果，未计为通过。
- 本地 HTTP 初版不支持 Range，导致“网页能播、独立播放器 Playback Failed”。替换为仅监听 127.0.0.1 的测试服务、正确返回 206，并使用新媒体 URL 后成功。未修改客户端。正文说明来源兼容性，不引导读者使用测试机的 127.0.0.1。
- `watch-two-youtube-videos-iphone-ipad`：Blender 官方 Big Buck Bunny 页面开始播放 → Mini Player 检测 10:35 / 640×360 → 点击后独立下区播放 → 原上方网页打开 Sintel，二者持续同时播放。下区单独暂停于 01:20 时，上方 Sintel 继续。关闭并从空白双区重新执行也成功。没有声称所有 YouTube 地址都适用，或双网页直接同播。使用独立播放器加一个网页的实际流程。
- 来源：[Big Buck Bunny](https://www.youtube.com/watch?v=aqz-KE-bpKQ)、[Sintel](https://www.youtube.com/watch?v=eRsGyueVLvQ)，截图加入 Blender Foundation 来源标注。其他教程继续使用用户本地素材。
- 网页转入和 YouTube 不再受长按工具限制阻塞；临时快慢放、布局拖动等仍待该手势环境。

### 页面与构建验收

- 2026-09-28 07:24 构建：676 个站点页面，63 篇教程 × 9 语言 = 567 详情页，243 张引用截图。数量包含既有教程；不表示每篇旧文都已在当前环境重新实测。
- 九语言 canonical、hreflang、HowTo/Article/FAQPage、图片存在性／尺寸／alt、教程链接与锚点检查通过。旧 URL 保留。
- 浏览器检查：中文 YouTube 正文、来源标注、同平台相关教程、图库；手机版德语变速长单词溢出已修复。教程搜索组合筛选能显示空结果并恢复；Android 直播归类到“网页与直播”。控制台未发现错误或警告。
- 仍需区分：投屏是用户确认延后；iOS RTSP 是真实渲染阻塞，修复范围问题仍待回复；iOS 长按／拖动及部分网页导航属于未完成的操作验收，不等同于客户端已确认失效。待确认的问题不影响已完成页面的本地审阅。

### 最终本地校验与清理（2026-09-28 07:36）

最终 `npm run build` 通过：676 个站点页面、567 个教程详情页、63 篇 × 9 语言、243 张页面引用截图。补充站点地图条目、未替换模板变量和禁止引用中文截图路径的检查。44 个教程正文数据文件逐语言审计未发现空必填字段、英文标题回退或 iOS 文案误含 Android。

图片清理依据教程元数据与页面引用：保留 207 张新教程必要素材（含暂未直接渲染的 hero），移除 53 张仅用于诊断或备选的公开 WebP；原始截图和带壳 PNG 留在 `.tmp`。`.tmp/` 已加入 Git 忽略，避免把约 1 GB 的测试副本和日志纳入提交。

iOS 已恢复原始 14 项工具栏，并从本次创建的 06:16:46 书签恢复双高尔夫本地视频，暂停供检查。Android 自动旋转恢复原值 1，媒体音量此前已恢复为 0。本次 MediaMTX、两个 FFmpeg 发布进程、本地网页测试服务均已停止，8557 / 8887 的 ADB reverse 已移除。网站预览进程保留在 4328 端口。

最终浏览器确认 Android + 网页与直播显示 3 篇，清空筛选后恢复完整目录；中文目录已保留供审阅。没有部署、提交或改动客户端源码。未完成验收仍以上节列出的真实阻塞为准。

### iOS RTSP / HLS 真机补拍（2026-09-28）

- 用户用 iPhone 17 Pro Max 提供 `IMG_8560.PNG`、`IMG_8562.PNG`、`IMG_8564.PNG`、`IMG_8565.PNG`，均为 1320×2868 英文界面原图。iOS 和 App 版本未提供，不推测版本。
- 对应教程四步：底部 Open Multiple → Open 菜单的 Web/Stream；RTSP 第一行、HLS 第二行，Auto 模式；上方 RTSP、下方 HLS，两个区域都有 LIVE 和暂停按钮；控件隐藏后的双路全屏画面。最后一张作为主图。两张结果图的挥杆姿态不同，但没有收到连续录屏，因此不宣称完成长时间播放或自动重连验收。
- 用户授权启动的临时测试流将两段本地高尔夫编码为 1280×720、H.264、30 fps 循环发布，RTSP 与 HLS 在 Mac 局域网地址的 8557／8887 端口提供服务。Mac 侧通过该地址分别读取到 56／60 帧。真机截图证实两路已显示画面；与先前模拟器 SGMetalRenderer nil pipeline 问题分开记录。
- 原图副本保存在 `.tmp/tutorial-expansion/raw/ios/streams-iphone17promax/`，带壳 PNG 在对应 `framed` 目录。使用指定 AppStoreScreenshotFramer 的 orange 预设（内置 iPhone 17 Pro 展示边框），保持比例适配到 1206×2622 屏幕开口，输出 1319×2748；仅等比缩放及边框合成，不改动 UI、地址或视频内容。原始 1320×2868 文件保留。
- 发布素材为 `public/images/guides/streams/ios/en/01-open.webp`、`02-addresses.webp`、`03-both.webp`、`04-fullscreen.webp`。九语言共用英文截图，拍摄设备说明与 alt 标为 iPhone 17 Pro Max 真机，不沿用模拟器说明。
- `streams-ios.json` 按真机流程重写，保留旧 URL `play-rtsp-live-streams`。移除旧文未在这次流程中展示的 Xtream 登录、书签及自动重试承诺，说明局域网示例地址不能直接复制到其他网络，以及 HLS／RTSP 延迟并不等同于同步。
- Hide Toolbar 英文名称与收起行为由客户端 `DIYMainBottomBarButtonType.m`、`en.lproj/Localizable.strings` 和 `DIYMainVC+AutoHideToolbar.m` 核对。截图中的全屏结果不被写成所有默认设置下必然相同的布局。
- 本轮 `npm run build` 通过：676 个站点页面、63 篇教程 × 9 语言 = 567 详情页、247 张引用截图。额外核对九语言旧 URL、真机归属、四图引用及 Android 对应教程链接。浏览器检查了中文桌面正文、图片放大与关闭、英文 390px 手机页面；图片全部加载，手机页面无横向溢出，控制台无错误或警告。没有部署或提交。

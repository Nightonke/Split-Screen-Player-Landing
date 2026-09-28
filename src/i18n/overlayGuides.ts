import type { GuideImage, GuidePage } from "./guides";
import type { Locale } from "./locales";
import translations from "./overlayGuideTranslations.json";
import * as OpenCC from "opencc-js";

type PilotLocale = "en-US" | "zh-Hans";
type Platform = "ios" | "android";
const slugs = {
  ios: "overlay-two-videos-iphone-ipad",
  android: "overlay-two-videos-android",
} as const satisfies Record<Platform, GuidePage["slug"]>;

function screenshot(platform: Platform, file: string, caption: string, landscape = false): GuideImage {
  const size = platform === "ios" ? [1319, 2748] : [1191, 2508];
  return {
    src: `/images/guides/overlay-comparison/${platform}/en/${file}.webp`,
    alt: `${platform === "ios" ? "iPhone 17 Pro" : "Pixel 8"} — ${caption}`,
    caption,
    width: size[landscape ? 1 : 0],
    height: size[landscape ? 0 : 1],
  };
}

function overlayGuide(locale: PilotLocale, platform: Platform): GuidePage {
  const zh = locale === "zh-Hans";
  const ios = platform === "ios";
  const device = ios ? (zh ? "iPhone 或 iPad" : "iPhone or iPad") : (zh ? "Android" : "Android");
  const image = (file: string, caption: string, landscape = false) => screenshot(platform, file, caption, landscape);
  return {
    slug: slugs[platform],
    platform,
    topic: "comparison",
    otherPlatformSlug: slugs[ios ? "android" : "ios"],
    eyebrow: ios ? "iPhone / iPad" : "Android",
    title: zh ? `如何在 ${device} 上重叠两个视频进行对比` : `How to overlay two videos for comparison on ${device}`,
    seoTitle: zh ? `${device} 视频重叠对比教程：用高尔夫挥杆对齐动作` : `Overlay Two Videos on ${device}: Golf Swing Comparison`,
    metaDescription: zh
      ? `在 ${device} 上用 Split Screen Player 重叠两个视频。以高尔夫挥杆为例，跟着截图设置半透明图层、缩放与位置，并对齐动作时刻。`
      : `Compare two golf swings with a transparent video overlay on ${device}. Follow real screenshots to adjust opacity, align the layers, and match the action.`,
    summary: zh
      ? "把两次高尔夫挥杆放在同一块画面里，让上层视频半透明，就能同时观察身体姿态和球杆位置。本教程从两个本地视频开始，逐步完成画面与动作时刻的对齐。"
      : "Place two golf swings on the same canvas and make the upper video transparent to see both body positions and club paths. Start with two local clips, then align their framing and the moment you want to inspect.",
    answer: zh
      ? `在 ${device} 的 Split Screen Player 中，先将两个视频分别载入两个播放区域，再打开“重叠对比”（Overlay Comparison）。选中上层视频，把不透明度调到约 50%，按需调整大小和位置，最后分别定位到同一个动作阶段。`
      : `In Split Screen Player on ${device}, load one video into each of two regions, then open Overlay Comparison. Select the upper video, set its opacity to about 50%, adjust its scale and position, and seek each clip to the same phase of the movement.`,
    note: zh
      ? `需要高级会员：Overlay Comparison 在按钮列表中带有 VIP 标记。截图使用${ios ? " iPhone 17 Pro 模拟器" : " Pixel 8 真机"}的英文界面；中文说明保留关键英文按钮名，方便对照。`
      : `Premium is required: Overlay Comparison carries a VIP badge in the toolbar list. Screenshots show the English interface on ${ios ? "an iPhone 17 Pro simulator" : "a Pixel 8 phone"}.`,
    heroImage: image("06-overlay-result", zh ? "两个高尔夫挥杆以半透明图层叠在同一画面中。" : "Two golf swings share one canvas with a transparent upper layer.", true),
    steps: [
      {
        title: zh ? "把重叠对比加入工具栏" : "Add Overlay Comparison to the toolbar",
        description: zh
          ? `打开“更多”（…）进入设置，选择“${ios ? "Customize Home Bottom Buttons" : "Customize Home Bottom Toolbar"}”。在“Not Added”中找到“Overlay Comparison”，点右侧加号，再点右上角勾号完成。`
          : `Open More (…) to enter Settings, then choose Customize Home Bottom ${ios ? "Buttons" : "Toolbar"}. Under Not Added, find Overlay Comparison, tap its plus button, and finish with the checkmark at the top right.`,
        detail: zh ? "如果它已在 Added 列表中，直接返回播放器即可；工具栏按钮较多时可以滑动查找。" : "If it is already under Added, return to the player. Scroll the toolbar to find it when you have many buttons.",
        image: image("01-add-overlay", zh ? "在 Not Added 列表中添加带 VIP 标记的 Overlay Comparison。" : "Add the VIP-labelled Overlay Comparison action from Not Added."),
      },
      {
        title: zh ? "分别打开两个高尔夫视频" : "Open one golf video in each region",
        description: zh
          ? `先在“Choose Layout”中选择两个播放区域。点第一个区域的加号，选择“${ios ? "Videos" : "File"}”并打开第一个视频；再在第二个区域重复操作，打开另一个视频。`
          : `Choose a layout with two regions using Choose Layout. Tap the plus in the first region, choose ${ios ? "Videos" : "File"}, and open the first clip. Repeat in the second region with the other clip.`,
        detail: zh
          ? (ios ? "示例使用两段同一球场、相近拍摄角度的挥杆视频。素材在文件 App 中时，也可以选择 Files。" : "示例把 Golf 01.mov 和 Golf 02.mov 放在同一个文件夹，便于逐个选择。也可以从 Album videos 打开相册中的素材。")
          : (ios ? "The example uses two swings filmed on the same course from similar viewpoints. Choose Files instead if your clips are in the Files app." : "The example keeps Golf 01.mov and Golf 02.mov in one folder so they are easy to select individually. Album videos is another option for clips in your photo library."),
        image: image("02-select-golf", zh ? "将两段挥杆素材分别载入两个播放区域。" : "Load the two golf clips into separate playback regions."),
      },
      {
        title: zh ? "打开重叠模式，把上层调为半透明" : "Overlay the videos at 50% opacity",
        description: zh
          ? "横屏素材建议先选择横屏布局，再点工具栏中的 Overlay Comparison。面板顶部的两个缩略图代表两个视频，选中上层视频，并将 Opacity 调到约 50%。"
          : "For landscape footage, choose a landscape layout first, then tap Overlay Comparison in the toolbar. The two thumbnails at the top of the panel represent your clips. Select the upper layer and set Opacity to about 50%.",
        detail: zh
          ? "透明度越低，越容易看到下层；越高，上层越明显。底层作为背景，保持不透明。拖动面板顶部把手，把控制面板移到不遮挡人物的位置。"
          : "Lower opacity reveals more of the clip underneath; higher opacity emphasizes the selected layer. Keep the base layer opaque. Drag the panel by its top handle to keep it away from the golfer.",
        image: image("03-overlay-controls", zh ? "上层不透明度为 50%，两个人物和球杆都能看到。" : "At 50% opacity, both golfers and their clubs are visible.", true),
      },
      {
        title: zh ? "对齐人物大小和画面位置" : "Match the framing and position",
        description: zh
          ? `选中需要调整的图层，从 Alignment 的 Center 开始，再用 ${ios ? "Zoom" : "Layer Scale"} 和方向微调按钮匹配人物大小、脚部位置或其他固定参照。`
          : `Select the layer you want to adjust. Start with Center under Alignment, then use ${ios ? "Zoom" : "Layer Scale"} and the nudge arrows to match the subject size, feet, or another fixed reference.`,
        detail: zh
          ? "示例素材视角接近，可以从 1.00× 开始。如果一个视频左右翻转，可使用镜像按钮。大小、位置和镜像只帮助视觉对齐，无法消除不同机位造成的透视差。"
          : "These clips have similar framing, so 1.00× is a useful starting point. Use the mirror control if one source is reversed. Scale, position, and mirroring help visual alignment but cannot remove perspective differences between camera positions.",
        image: image("04-align-layers", zh ? "用 Alignment、缩放和方向按钮调整选中图层。" : "Use Alignment, scale, and nudge controls on the selected layer.", true),
      },
      {
        title: zh ? "对齐动作时刻，而不只是时间数字" : "Match the action, not just the timestamps",
        description: zh
          ? "依次选中两个视频，在面板中暂停并拖动各自进度，找到同一个动作阶段，例如上杆顶点。再用前一帧、后一帧按钮细调；两段视频录制起点不同，相同动作不一定出现在同一个秒数。"
          : "Select each clip in turn, pause it, and seek to the same phase of the movement—for example, the top of the backswing. Fine-tune with the previous- and next-frame buttons. Different recording start times mean the matching moment may have different timestamps.",
        detail: zh
          ? `如果还要一起播放，打开面板里的 Time Sync，在每个视频中设置对应的 Sync point，启用 ${ios ? "Synchronized playback" : "Sync Playback"}，再点 Apply。截图中的时间只是这两段素材的示例，不是通用参数。`
          : `To play the clips together, open Time Sync in the panel, set a corresponding Sync point for each video, enable ${ios ? "Synchronized playback" : "Sync Playback"}, and tap Apply. The times shown are examples for these clips, not values to copy for every video.`,
        image: image("05-sync-moment", zh ? "竖屏展示两个视频的同步点；横屏时可滚动查看，设置后点 Apply。" : "Both sync points are shown in portrait. In landscape, scroll through the clips, then tap Apply."),
      },
      {
        title: zh ? "收起面板，观察重叠后的差异" : "Minimize the panel and inspect the comparison",
        description: zh
          ? "点面板上的减号收起控制区，观察两个挥杆在身体倾角、手臂和球杆位置上的差异。需要调整时，点收起后的浮动按钮重新展开面板。"
          : "Tap the minus button to minimize the controls and inspect differences in body angle, arm position, and club position. Tap the collapsed floating control to reopen the panel whenever you need to adjust a layer.",
        detail: zh
          ? "可以重新选中某个图层，使用隐藏图层或 A/B Blink 辅助辨认。完成后退出重叠对比，返回原来的分屏视图。"
          : "Select a layer again and use layer visibility or A/B Blink to help distinguish the clips. Exit Overlay Comparison when you want to return to the split-screen view.",
        image: image("06-overlay-result", zh ? "收起面板后，集中观察同一动作阶段的姿态差异。" : "With the panel minimized, compare the golfers at a similar phase of the swing.", true),
      },
    ],
    tips: [],
    relatedFeature: "multi-video-player",
    article: {
      featuresHeading: zh ? "让重叠对比更容易看清楚" : "Make your overlay comparison easier to read",
      featuresIntro: zh ? "重叠显示只是第一步。拍摄角度、参照物和动作时刻都会影响比较结果。" : "An overlay is only the starting point. Camera angle, reference points, and timing all affect what the comparison tells you.",
      features: [
        { title: zh ? "尽量保持相同机位" : "Keep the camera position consistent", description: zh ? "比较练习前后的挥杆时，尽量保持镜头高度、距离和拍摄方向一致。先对齐脚部或固定背景，再观察身体和球杆；不要把机位差异当成动作差异。" : "When comparing practice sessions, keep camera height, distance, and direction consistent. Align the feet or a fixed background reference before comparing the body and club; a camera-position change can look like a technique change." },
        { title: zh ? "一次观察一个动作阶段" : "Inspect one phase at a time", description: zh ? "先看准备姿势，再看上杆顶点或击球附近的帧。不同挥杆节奏不一定能从头到尾完全重合，需要针对要看的阶段重新定位。" : "Compare the setup, then the top of the backswing or frames around impact. Swings with different tempos may not remain aligned throughout the clip, so seek again for the phase you want to study." },
        { title: zh ? "配合分屏比较整体节奏" : "Use split screen to review the whole motion", description: zh ? "半透明重叠适合观察位置差异；回到并排播放后，更容易分别看清两个完整动作。两种视图可以配合使用。" : "A transparent overlay helps reveal positional differences. Returning to side-by-side playback makes each complete movement easier to follow. Use both views in the same review session.", link: { label: zh ? "查看同时播放两个视频的教程" : "See how to play two videos together", path: `guides/play-multiple-videos-${ios ? "iphone-ipad" : "android"}` } },
      ],
      faq: [
        { question: zh ? "这是画中画，还是两个视频重叠？" : "Is this picture-in-picture or a video overlay?", answer: zh ? "这里使用的是半透明图层重叠：两个视频共享同一画布，可以同时透视上下两层。画中画通常把一个较小的视频窗口放在另一个视频之上，用途不同。" : "This uses transparent layers on a shared canvas, so you can see through the upper video to the one underneath. Picture-in-picture usually places a smaller, opaque video window over another video." },
        { question: zh ? "重叠对比需要付费吗？" : "Does Overlay Comparison require Premium?", answer: zh ? "需要。Overlay Comparison 在工具栏设置中标记为 VIP，需要已激活的高级会员。可以先在 App 的会员页面查看当前方案。" : "Yes. Overlay Comparison is marked VIP in the toolbar settings and requires an active Premium entitlement. Check the app’s Premium screen for the current options." },
        { question: zh ? "App 会自动把两个挥杆对齐吗？" : "Will the app automatically align the two golf swings?", answer: zh ? "本教程使用手动对齐：自己选择对应动作、调整同步点、大小与位置。半透明叠加不会自动识别挥杆阶段，也不会自动修正机位和透视差异。" : "This workflow uses manual alignment: you choose corresponding moments and adjust sync points, scale, and position. Making a layer transparent does not automatically recognize a swing phase or correct camera perspective." },
        { question: zh ? "为什么只看到一个视频？" : "Why can I only see one video?", answer: zh ? "确认两个区域都已载入视频，并选中了上层图层。上层不透明度为 100% 时会挡住下层，为 0% 或隐藏状态时则看不到上层。先恢复显示，再从约 50% 开始调节。" : "Make sure both regions contain a video and the upper layer is selected. At 100% opacity it can cover the lower video; at 0%, or when hidden, the upper video is invisible. Restore its visibility and start at about 50%." },
        { question: zh ? "重叠对比会修改原视频吗？能直接得到合成视频吗？" : "Does this change my source videos or create a merged video file?", answer: zh ? "这些操作调整的是播放器中的显示和播放位置，不会覆盖原视频。完成重叠预览并不等于生成了新的合成视频文件；本教程展示的是对比查看流程。" : "These controls change the display and playback positions in the player without overwriting your source clips. Completing an overlay preview does not itself create a new merged video file; this guide covers comparison and review." },
      ],
      closingTitle: zh ? "从两段相近机位的视频开始" : "Start with two clips from similar viewpoints",
      closingDescription: zh ? "载入素材，开启重叠对比，从 50% 不透明度开始，再逐步对齐画面和动作。" : "Load your clips, open Overlay Comparison, start at 50% opacity, and align the framing and movement one step at a time.",
    },
  };
}

type TranslatedLocale = Exclude<Locale, PilotLocale | "zh-Hant">;
const localeTokens: Record<TranslatedLocale, {
  device: string;
  capture: [string, string];
  sourceDetail: [string, string];
}> = {
  ja: { device: "iPhoneまたはiPad", capture: ["iPhone 17 Proシミュレータ", "Pixel 8実機"], sourceDetail: ["この例では、同じコースで似た位置から撮影した2つのスイングを使います。ファイルアプリにある動画はFilesから開けます。", "この例ではGolf 01.movとGolf 02.movを同じフォルダに保存し、1本ずつ選びます。写真ライブラリの素材はAlbum videosからも開けます。"] },
  ko: { device: "iPhone 또는 iPad", capture: ["iPhone 17 Pro 시뮬레이터", "Pixel 8 실기기"], sourceDetail: ["예시에서는 같은 코스의 비슷한 위치에서 촬영한 두 스윙을 사용합니다. 파일 앱에 있는 영상은 Files에서 열 수 있습니다.", "예시에서는 Golf 01.mov와 Golf 02.mov를 같은 폴더에 두고 하나씩 선택합니다. 사진 라이브러리의 영상은 Album videos에서도 열 수 있습니다."] },
  fr: { device: "iPhone ou iPad", capture: ["un simulateur d’iPhone 17 Pro", "un téléphone Pixel 8"], sourceDetail: ["L’exemple utilise deux swings filmés sur le même parcours depuis des points de vue proches. Choisissez Files si vos vidéos sont dans l’application Fichiers.", "L’exemple regroupe Golf 01.mov et Golf 02.mov dans un dossier pour les sélectionner séparément. Album videos permet aussi d’ouvrir des vidéos de votre photothèque."] },
  de: { device: "dem iPhone oder iPad", capture: ["einem iPhone-17-Pro-Simulator", "einem Pixel-8-Smartphone"], sourceDetail: ["Das Beispiel verwendet zwei Schwünge auf demselben Platz aus ähnlichen Blickwinkeln. Liegen Ihre Clips in der Dateien-App, wählen Sie Files.", "Im Beispiel liegen Golf 01.mov und Golf 02.mov im selben Ordner und werden einzeln ausgewählt. Videos aus der Fotomediathek lassen sich auch über Album videos öffnen."] },
  es: { device: "iPhone o iPad", capture: ["un simulador de iPhone 17 Pro", "un teléfono Pixel 8"], sourceDetail: ["El ejemplo usa dos swings grabados en el mismo campo desde puntos similares. Si tus vídeos están en la app Archivos, elige Files.", "El ejemplo guarda Golf 01.mov y Golf 02.mov en una carpeta para seleccionarlos por separado. También puedes usar Album videos para abrir vídeos de tu fototeca."] },
  "pt-BR": { device: "iPhone ou iPad", capture: ["um simulador de iPhone 17 Pro", "um celular Pixel 8"], sourceDetail: ["O exemplo usa dois swings gravados no mesmo campo de pontos de vista semelhantes. Se os vídeos estiverem no app Arquivos, escolha Files.", "O exemplo mantém Golf 01.mov e Golf 02.mov na mesma pasta para selecionar um de cada vez. Você também pode abrir vídeos da biblioteca de fotos por Album videos."] },
};
const traditional = OpenCC.Converter({ from: "cn", to: "twp" });
const structuralKeys = new Set(["slug", "platform", "topic", "otherPlatformSlug", "src", "relatedFeature", "path", "eyebrow"]);

function translatedOverlay(locale: Exclude<Locale, PilotLocale>, platform: Platform): GuidePage {
  const base = overlayGuide(locale === "zh-Hant" ? "zh-Hans" : "en-US", platform);
  const ios = platform === "ios";
  const index = ios ? 0 : 1;
  const tokens = locale === "zh-Hant" ? {} : {
    device: ios ? localeTokens[locale].device : "Android",
    capture: localeTokens[locale].capture[index],
    sourceDetail: localeTokens[locale].sourceDetail[index],
    toolbar: `Customize Home Bottom ${ios ? "Buttons" : "Toolbar"}`,
    source: ios ? "Videos" : "File",
    scale: ios ? "Zoom" : "Layer Scale",
    sync: ios ? "Synchronized playback" : "Sync Playback",
  };
  const dictionary: Record<string, string> = locale === "zh-Hant" ? {} : translations[locale];
  function visit(value: unknown, path: string[] = []): unknown {
    if (typeof value === "string") {
      const key = path.at(-1)!;
      if (structuralKeys.has(key) || key === "alt") return value;
      if (locale === "zh-Hant") return traditional(value);
      const text = dictionary[path.join(".")];
      if (!text) throw new Error(`Missing overlay translation: ${locale}/${path.join(".")}`);
      return text.replace(/\{(\w+)\}/g, (_, token: string) => {
        if (!(token in tokens)) throw new Error(`Unknown overlay token: ${token}`);
        return tokens[token as keyof typeof tokens] as string;
      });
    }
    if (Array.isArray(value)) return value.map((item, index) => visit(item, [...path, String(index)]));
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, visit(item, [...path, key])]));
    return value;
  }
  const page = visit(base) as GuidePage;
  for (const image of [page.heroImage, ...page.steps.map(step => step.image)]) {
    if (image) image.alt = `${ios ? "iPhone 17 Pro" : "Pixel 8"} — ${image.caption}`;
  }
  return page;
}

export function getOverlayGuides(locale: Locale): GuidePage[] {
  return (["ios", "android"] as const).map(platform =>
    locale === "en-US" || locale === "zh-Hans" ? overlayGuide(locale, platform) : translatedOverlay(locale, platform),
  );
}

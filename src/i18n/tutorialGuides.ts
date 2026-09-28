import type { GuidePage, GuideImage } from "./guides";
import type { Locale } from "./locales";
import { tutorialTopics, tutorialSlug, type TutorialTopic } from "./tutorialTopics";
import assets from "./tutorialAssets.json";
import * as OpenCC from "opencc-js";

type CopyLocale = Exclude<Locale, "zh-Hant">;
interface TutorialCopy {
  title: string;
  description: string;
  summary: string;
  answer: string;
  requirement: string;
  steps: Array<{ title: string; text: string; detail?: string; caption: string }>;
  features: Array<{ title: string; description: string }>;
  faq: Array<{ question: string; answer: string }>;
}
const copies = import.meta.glob<Record<CopyLocale, TutorialCopy>>("./tutorials/*.json", { eager: true, import: "default" });
const traditional = OpenCC.Converter({ from: "cn", to: "twp" });
const chrome = {
  "en-US": ["iPhone or iPad", "Screenshots show the English interface on {capture}.", "Useful details", "Check these details as you follow the steps.", "Try this with your own media", "Open Split Screen Player and follow the steps with files you want to use."],
  "zh-Hans": ["iPhone 或 iPad", "截图使用{capture}的英文界面，说明保留英文按钮名方便对照。", "操作补充", "按步骤操作时，还可以留意以下细节。", "用自己的素材试一试", "打开 Split Screen Player，选择要使用的素材，按照步骤完成操作。"],
  ja: ["iPhoneまたはiPad", "スクリーンショットは{capture}の英語表示です。英語のボタン名を併記しています。", "操作のポイント", "手順に沿って操作しながら、次の点も確認してください。", "自分の素材で試しましょう", "Split Screen Playerを開き、使いたい素材を選んで手順を進めてください。"],
  ko: ["iPhone 또는 iPad", "스크린샷은 {capture}의 영어 화면이며 버튼 이름을 영어로 함께 적었습니다.", "알아두면 좋은 점", "단계를 따라 하며 다음 사항도 확인하세요.", "내 미디어로 사용해 보세요", "Split Screen Player를 열고 사용할 파일을 선택한 다음 안내에 따라 진행하세요."],
  fr: ["iPhone ou iPad", "Les captures montrent l’interface anglaise sur {capture}. Les noms anglais des boutons sont conservés.", "Quelques précisions utiles", "Gardez ces précisions à l’esprit pendant les manipulations.", "Essayez avec vos propres fichiers", "Ouvrez Split Screen Player, choisissez vos fichiers et suivez les étapes."],
  de: ["dem iPhone oder iPad", "Die Screenshots zeigen die englische Oberfläche auf {capture}. Die englischen Schaltflächennamen bleiben erhalten.", "Nützliche Hinweise", "Beachten Sie während der einzelnen Schritte auch diese Hinweise.", "Mit eigenen Medien ausprobieren", "Öffnen Sie Split Screen Player, wählen Sie Ihre Dateien und folgen Sie der Anleitung."],
  es: ["iPhone o iPad", "Las capturas muestran la interfaz inglesa de {capture}. Se conservan los nombres ingleses de los botones.", "Detalles útiles", "Ten en cuenta estos detalles mientras sigues los pasos.", "Pruébalo con tus propios archivos", "Abre Split Screen Player, elige tus archivos y sigue los pasos de la guía."],
  "pt-BR": ["iPhone ou iPad", "As capturas mostram a interface em inglês em {capture}. Os nomes dos botões em inglês foram mantidos.", "Detalhes úteis", "Confira estes detalhes enquanto segue as etapas.", "Experimente com seus próprios arquivos", "Abra o Split Screen Player, escolha seus arquivos e siga as etapas do tutorial."],
} satisfies Record<CopyLocale, string[]>;
const captureNames: Record<CopyLocale, [string, string]> = {
  "en-US": ["an iPhone 17 Pro simulator", "a Pixel 8 phone"],
  "zh-Hans": [" iPhone 17 Pro 模拟器", " Pixel 8 真机"],
  ja: ["iPhone 17 Proシミュレータ", "Pixel 8実機"],
  ko: ["iPhone 17 Pro 시뮬레이터", "Pixel 8 실기기"],
  fr: ["un simulateur d’iPhone 17 Pro", "un téléphone Pixel 8"],
  de: ["einem iPhone-17-Pro-Simulator", "einem Pixel-8-Smartphone"],
  es: ["un simulador de iPhone 17 Pro", "un teléfono Pixel 8"],
  "pt-BR": ["um simulador de iPhone 17 Pro", "um celular Pixel 8"],
};
const physicalIphoneCaptures: Record<CopyLocale, string> = {
  "en-US": "an {model} phone",
  "zh-Hans": " {model} 真机",
  ja: "{model}実機",
  ko: "{model} 실기기",
  fr: "un {model}",
  de: "einem {model}",
  es: "un {model}",
  "pt-BR": "um {model}",
};

function makeGuide(topic: TutorialTopic, platform: "ios" | "android", locale: Locale): GuidePage {
  const sourceLocale = locale === "zh-Hant" ? "zh-Hans" : locale;
  const copy = (copies[`./tutorials/${topic}-${platform}.json`] ?? copies[`./tutorials/${topic}.json`])?.[sourceLocale];
  if (!copy) throw new Error(`Missing tutorial copy: ${topic}/${locale}`);
  const meta = tutorialTopics[topic];
  const ios = platform === "ios";
  const labels = chrome[sourceLocale];
  const captureModel = ios ? ("iosCapture" in meta ? meta.iosCapture : "iPhone 17 Pro") : "Pixel 8";
  const tokens: Record<string, string> = {
    device: ios ? labels[0] : "Android",
    customizeToolbar: `Customize Home Bottom ${ios ? "Buttons" : "Toolbar"}`,
    exampleAction: ios ? "Swipe Comparison" : "Pause All Players",
    source: ios ? "Videos" : "File",
    scale: ios ? "Zoom" : "Layer Scale",
    sync: ios ? "Synchronized playback" : "Sync Playback",
    showGuides: ios ? "Show Guides" : "Show or Hide Guides",
    gallery: ios ? "Gallery Wall" : "Gallery",
    templateTab: ios ? "Templates" : "Template",
    galleryMute: ios ? "Mute" : "Mute all",
    capture: ios && "iosCapture" in meta
      ? physicalIphoneCaptures[sourceLocale].replace("{model}", captureModel)
      : captureNames[sourceLocale][ios ? 0 : 1],
  };
  function t(value: string): string {
    const localized = locale === "zh-Hant" ? traditional(value) : value;
    return localized.replace(/\{(\w+)\}/g, (_, name: string) => {
      if (!(name in tokens)) throw new Error(`Missing tutorial token: ${topic}/${name}`);
      return locale === "zh-Hant" ? traditional(tokens[name]) : tokens[name];
    });
  }
  const image = (file: string, caption: string): GuideImage => {
    const src = `/images/guides/${topic}/${platform}/en/${file}.webp`;
    const size = (assets as Record<string, { width: number; height: number }>)[src];
    if (!size) throw new Error(`Missing captured tutorial image: ${src}`);
    return {
      src, ...size, caption: t(caption), alt: `${captureModel} — ${t(caption)}`,
      ...(topic === "youtube" && { credit: {
        label: "Big Buck Bunny / Sintel — Blender Foundation",
        href: "https://www.youtube.com/@BlenderOfficial",
      } }),
    };
  };
  if (copy.steps.length !== meta.images[platform].length) throw new Error(`Tutorial step/image mismatch: ${topic}/${locale}`);
  const steps = copy.steps.map((step, index) => ({
    title: t(step.title), description: t(step.text), ...(step.detail && { detail: t(step.detail) }),
    ...(meta.images[platform][index] && { image: image(meta.images[platform][index]!, step.caption) }),
  }));
  return {
    slug: tutorialSlug(topic, platform), platform, topic: meta.category,
    ...((!("platforms" in meta) || (meta.platforms as readonly string[]).includes(ios ? "android" : "ios")) && {
      otherPlatformSlug: tutorialSlug(topic, ios ? "android" : "ios"),
    }),
    relatedSlugs: meta.related.map(related => tutorialSlug(related, platform)),
    eyebrow: ios ? "iPhone / iPad" : "Android",
    title: t(copy.title), seoTitle: t(copy.title), metaDescription: t(copy.description),
    summary: t(copy.summary), answer: t(copy.answer), note: `${t(copy.requirement)} ${t(labels[1])}`,
    heroImage: "hero" in meta ? image(meta.hero, copy.summary) : steps.at(-1)!.image, steps, tips: [], relatedFeature: "multi-video-player",
    article: {
      featuresHeading: t(labels[2]), featuresIntro: t(labels[3]),
      features: copy.features.map(item => ({ title: t(item.title), description: t(item.description) })),
      faq: copy.faq.map(item => ({ question: t(item.question), answer: t(item.answer) })),
      closingTitle: t(labels[4]), closingDescription: t(labels[5]),
    },
  };
}

export function getTutorialGuides(locale: Locale): GuidePage[] {
  return (Object.keys(tutorialTopics) as TutorialTopic[]).flatMap(topic => {
    const meta = tutorialTopics[topic];
    const platforms = "platforms" in meta ? meta.platforms : (["ios", "android"] as const);
    return platforms.map(platform => makeGuide(topic, platform, locale));
  });
}

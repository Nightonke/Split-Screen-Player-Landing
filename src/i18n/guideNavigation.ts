import type { Locale } from "./locales";
import type { GuidePage } from "./guides";
import type { GuideTopic } from "./tutorialTopics";

const navigation = {
  "en-US": ["Guides for iPhone, iPad, and Android", "Learn to play, compare, arrange, and save your media with practical Split Screen Player tutorials.", "Find a guide", "Search tutorials", "Platform", "All platforms", "Topic", "All topics", "{count} guides", "No guides match these filters.", "Video comparison", "Layouts", "Galleries & photos", "Playback controls", "Import & export", "Web & streams"],
  "zh-Hans": ["iPhone、iPad 和 Android 使用教程", "通过 Split Screen Player 实用教程，学习多媒体播放、视频对比、布局调整与保存。", "查找教程", "搜索教程", "平台", "所有平台", "主题", "所有主题", "共 {count} 篇教程", "没有符合当前筛选条件的教程。", "视频对比", "分屏布局", "画廊与照片", "播放控制", "导入与导出", "网页与直播"],
  "zh-Hant": ["iPhone、iPad 與 Android 使用教學", "透過 Split Screen Player 實用教學，學習多媒體播放、影片比較、版面調整與儲存。", "尋找教學", "搜尋教學", "平台", "所有平台", "主題", "所有主題", "共 {count} 篇教學", "沒有符合目前篩選條件的教學。", "影片比較", "分割畫面", "藝廊與照片", "播放控制", "匯入與匯出", "網頁與直播"],
  ja: ["iPhone・iPad・Androidの使い方ガイド", "Split Screen Playerの実用ガイドで、メディアの再生、動画比較、レイアウト調整、保存方法を学べます。", "ガイドを探す", "ガイドを検索", "プラットフォーム", "すべてのプラットフォーム", "テーマ", "すべてのテーマ", "{count}件のガイド", "条件に一致するガイドがありません。", "動画比較", "レイアウト", "ギャラリーと写真", "再生操作", "読み込みと書き出し", "ウェブと配信"],
  ko: ["iPhone, iPad, Android 사용 가이드", "Split Screen Player 가이드를 통해 미디어 재생, 동영상 비교, 화면 배치와 저장 방법을 알아보세요.", "가이드 찾기", "가이드 검색", "플랫폼", "모든 플랫폼", "주제", "모든 주제", "가이드 {count}개", "조건에 맞는 가이드가 없습니다.", "동영상 비교", "화면 배치", "갤러리와 사진", "재생 제어", "가져오기와 내보내기", "웹과 스트림"],
  fr: ["Tutoriels pour iPhone, iPad et Android", "Apprenez à lire, comparer, disposer et enregistrer vos médias avec les tutoriels pratiques de Split Screen Player.", "Trouver un tutoriel", "Rechercher un tutoriel", "Plateforme", "Toutes les plateformes", "Thème", "Tous les thèmes", "{count} tutoriels", "Aucun tutoriel ne correspond à ces filtres.", "Comparaison vidéo", "Dispositions", "Galeries et photos", "Commandes de lecture", "Importation et exportation", "Web et flux"],
  de: ["Anleitungen für iPhone, iPad und Android", "Lerne mit praktischen Anleitungen für Split Screen Player, Medien abzuspielen, zu vergleichen, anzuordnen und zu speichern.", "Anleitung finden", "Anleitungen durchsuchen", "Plattform", "Alle Plattformen", "Thema", "Alle Themen", "{count} Anleitungen", "Keine Anleitung passt zu diesen Filtern.", "Videovergleich", "Layouts", "Galerien und Fotos", "Wiedergabesteuerung", "Import und Export", "Web und Streams"],
  es: ["Tutoriales para iPhone, iPad y Android", "Aprende a reproducir, comparar, organizar y guardar tus contenidos con los tutoriales prácticos de Split Screen Player.", "Encontrar un tutorial", "Buscar tutoriales", "Plataforma", "Todas las plataformas", "Tema", "Todos los temas", "{count} tutoriales", "Ningún tutorial coincide con estos filtros.", "Comparación de vídeos", "Distribuciones", "Galerías y fotos", "Controles de reproducción", "Importar y exportar", "Web y transmisiones"],
  "pt-BR": ["Tutoriais para iPhone, iPad e Android", "Aprenda a reproduzir, comparar, organizar e salvar sua mídia com os tutoriais práticos do Split Screen Player.", "Encontrar um tutorial", "Buscar tutoriais", "Plataforma", "Todas as plataformas", "Tema", "Todos os temas", "{count} tutoriais", "Nenhum tutorial corresponde a estes filtros.", "Comparação de vídeos", "Layouts", "Galerias e fotos", "Controles de reprodução", "Importação e exportação", "Web e transmissões"],
} satisfies Record<Locale, string[]>;

export const guideTopics: GuideTopic[] = ["comparison", "layout", "gallery", "playback", "media", "web"];
export function getGuideNavigation(locale: Locale) {
  const text = navigation[locale];
  return {
    title: text[0], description: text[1], label: text[2], search: text[3],
    platform: text[4], allPlatforms: text[5], topic: text[6], allTopics: text[7],
    count: text[8], empty: text[9],
    topics: guideTopics.map((id, index) => ({ id, label: text[10 + index] })),
  };
}

export function getGuideTopic(page: GuidePage): GuideTopic {
  if (page.topic) return page.topic;
  if (/sync-|compare-|multi-camera/.test(page.slug)) return "comparison";
  if (/arrange-|resize-/.test(page.slug)) return "layout";
  if (/website|browse-web|rtsp/.test(page.slug)) return "web";
  if (/export-|pdf-/.test(page.slug)) return "media";
  return "playback";
}

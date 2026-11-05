import { appFacts } from "@config/appFacts";
import type { Locale } from "./locales";

const googlePlayCopy = {
  "en-US": "{score} ★ from {count} reviews",
  "zh-Hans": "{score} ★ · {count} 个评价",
  "zh-Hant": "{score} ★ · {count} 個評價",
  ja: "{count}件のレビューで {score} ★",
  ko: "리뷰 {count}개에서 {score} ★",
  fr: "{score} ★ sur {count} avis",
  de: "{score} ★ aus {count} Rezensionen",
  es: "{score} ★ de {count} reseñas",
  "pt-BR": "{score} ★ em {count} avaliações",
  ar: "{score} ★ من {count} مراجعة",
  bg: "{score} ★ от {count} отзива",
  bn: "{count}টি রিভিউতে {score} ★",
  ca: "{score} ★ de {count} ressenyes",
  cs: "{score} ★ z {count} recenzí",
  da: "{score} ★ fra {count} anmeldelser",
  el: "{score} ★ από {count} κριτικές",
  fa: "{score} ★ از {count} نظر",
  fi: "{score} ★ · {count} arvostelua",
  fil: "{score} ★ mula sa {count} review",
  he: "{score} ★ מתוך {count} ביקורות",
  hi: "{count} समीक्षाओं से {score} ★",
  hr: "{score} ★ · {count} recenzije",
  hu: "{score} ★ · {count} vélemény",
  id: "{score} ★ dari {count} ulasan",
  it: "{score} ★ da {count} recensioni",
  kk: "{score} ★ · {count} пікір",
  ms: "{score} ★ daripada {count} ulasan",
  nb: "{score} ★ fra {count} anmeldelser",
  nl: "{score} ★ uit {count} reviews",
  pl: "{score} ★ · {count} opinie",
  "pt-PT": "{score} ★ em {count} avaliações",
  ro: "{score} ★ din {count} de recenzii",
  ru: "{score} ★ · {count} отзыва",
  sv: "{score} ★ från {count} recensioner",
  th: "{score} ★ จาก {count} รีวิว",
  tr: "{score} ★ · {count} yorum",
  uk: "{score} ★ · {count} відгуки",
  ur: "{count} جائزوں سے {score} ★",
  vi: "{score} ★ từ {count} bài đánh giá",
} satisfies Record<Locale, string>;

export function getGooglePlayRatingText(locale: Locale) {
  const { score, reviewCount } = appFacts.googlePlayRating;
  return `Google Play · ${googlePlayCopy[locale]
    .replace("{score}", String(score))
    .replace("{count}", String(reviewCount))}`;
}

import type { Locale } from "./locales";
import { getLanguagePickerCopy } from "./languagePicker";

// Display each suggestion in the language being offered, including its action.
const copy = {
  "en-US": ["This page is also available in English.", "Switch to English"],
  "zh-Hans": ["此页面也有简体中文版。", "切换到简体中文"],
  "zh-Hant": ["此頁面也有繁體中文版。", "切換到繁體中文"],
  ja: ["このページは日本語でもご覧いただけます。", "日本語に切り替える"],
  ko: ["이 페이지는 한국어로도 볼 수 있습니다.", "한국어로 전환"],
  fr: ["Cette page est également disponible en français.", "Passer au français"],
  de: ["Diese Seite ist auch auf Deutsch verfügbar.", "Zu Deutsch wechseln"],
  es: ["Esta página también está disponible en español.", "Cambiar a español"],
  "pt-BR": ["Esta página também está disponível em português do Brasil.", "Mudar para português do Brasil"],
  ar: ["هذه الصفحة متاحة أيضًا باللغة العربية.", "التبديل إلى العربية"],
  bg: ["Тази страница е достъпна и на български.", "Премини към български"],
  bn: ["এই পৃষ্ঠাটি বাংলাতেও পাওয়া যায়।", "বাংলায় দেখুন"],
  ca: ["Aquesta pàgina també està disponible en català.", "Canvia al català"],
  cs: ["Tato stránka je dostupná také v češtině.", "Přepnout do češtiny"],
  da: ["Denne side findes også på dansk.", "Skift til dansk"],
  el: ["Αυτή η σελίδα είναι διαθέσιμη και στα ελληνικά.", "Μετάβαση στα ελληνικά"],
  fa: ["این صفحه به زبان فارسی نیز در دسترس است.", "تغییر به فارسی"],
  fi: ["Tämä sivu on saatavilla myös suomeksi.", "Vaihda suomeen"],
  fil: ["Maaari ring basahin ang pahinang ito sa Filipino.", "Lumipat sa Filipino"],
  he: ["העמוד הזה זמין גם בעברית.", "מעבר לעברית"],
  hi: ["यह पेज हिंदी में भी उपलब्ध है।", "हिंदी में देखें"],
  hr: ["Ova je stranica dostupna i na hrvatskom.", "Prijeđi na hrvatski"],
  hu: ["Ez az oldal magyarul is elérhető.", "Váltás magyarra"],
  id: ["Halaman ini juga tersedia dalam bahasa Indonesia.", "Beralih ke bahasa Indonesia"],
  it: ["Questa pagina è disponibile anche in italiano.", "Passa all’italiano"],
  kk: ["Бұл бет қазақ тілінде де қолжетімді.", "Қазақ тіліне ауысу"],
  ms: ["Halaman ini juga tersedia dalam bahasa Melayu.", "Tukar ke bahasa Melayu"],
  nb: ["Denne siden er også tilgjengelig på norsk bokmål.", "Bytt til norsk bokmål"],
  nl: ["Deze pagina is ook beschikbaar in het Nederlands.", "Overschakelen naar Nederlands"],
  pl: ["Ta strona jest również dostępna po polsku.", "Przejdź na polski"],
  "pt-PT": ["Esta página também está disponível em português de Portugal.", "Mudar para português de Portugal"],
  ro: ["Această pagină este disponibilă și în română.", "Treci la română"],
  ru: ["Эта страница также доступна на русском языке.", "Перейти на русский"],
  sv: ["Den här sidan finns även på svenska.", "Byt till svenska"],
  th: ["หน้านี้มีฉบับภาษาไทยด้วย", "เปลี่ยนเป็นภาษาไทย"],
  tr: ["Bu sayfa Türkçe olarak da sunulmaktadır.", "Türkçeye geç"],
  uk: ["Ця сторінка також доступна українською мовою.", "Перейти на українську"],
  ur: ["یہ صفحہ اردو میں بھی دستیاب ہے۔", "اردو میں دیکھیں"],
  vi: ["Trang này cũng có phiên bản tiếng Việt.", "Chuyển sang tiếng Việt"],
} satisfies Record<Locale, [string, string]>;

export function getLanguageSuggestionCopy(locale: Locale) {
  const [message, action] = copy[locale];
  return { message, action, close: getLanguagePickerCopy(locale).close };
}

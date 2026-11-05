import type { Locale } from "./locales";

// Small, explicit UI dictionary: language controls must work in every edition.
// Order: title, search label, empty result, clear search, close.
const copy = {
  "en-US": ["Choose your language", "Search languages", "No languages found", "Clear search", "Close"],
  "zh-Hans": ["选择语言", "搜索语言", "未找到匹配的语言", "清空搜索", "关闭"],
  "zh-Hant": ["選擇語言", "搜尋語言", "找不到符合的語言", "清除搜尋", "關閉"],
  ja: ["言語を選択", "言語を検索", "言語が見つかりません", "検索をクリア", "閉じる"],
  ko: ["언어 선택", "언어 검색", "검색된 언어가 없습니다", "검색 지우기", "닫기"],
  fr: ["Choisissez votre langue", "Rechercher une langue", "Aucune langue trouvée", "Effacer la recherche", "Fermer"],
  de: ["Sprache auswählen", "Sprachen suchen", "Keine Sprache gefunden", "Suche löschen", "Schließen"],
  es: ["Elige tu idioma", "Buscar idiomas", "No se encontraron idiomas", "Borrar búsqueda", "Cerrar"],
  "pt-BR": ["Escolha seu idioma", "Pesquisar idiomas", "Nenhum idioma encontrado", "Limpar pesquisa", "Fechar"],
  ar: ["اختر لغتك", "ابحث عن لغة", "لم يتم العثور على لغات", "مسح البحث", "إغلاق"],
  bg: ["Изберете език", "Търсене на език", "Няма намерени езици", "Изчистване на търсенето", "Затваряне"],
  bn: ["আপনার ভাষা বেছে নিন", "ভাষা খুঁজুন", "কোনো ভাষা পাওয়া যায়নি", "অনুসন্ধান মুছুন", "বন্ধ করুন"],
  ca: ["Tria el teu idioma", "Cerca idiomes", "No s'ha trobat cap idioma", "Esborra la cerca", "Tanca"],
  cs: ["Vyberte jazyk", "Hledat jazyky", "Žádné jazyky nenalezeny", "Vymazat hledání", "Zavřít"],
  da: ["Vælg dit sprog", "Søg efter sprog", "Ingen sprog fundet", "Ryd søgning", "Luk"],
  el: ["Επιλέξτε γλώσσα", "Αναζήτηση γλώσσας", "Δεν βρέθηκαν γλώσσες", "Εκκαθάριση αναζήτησης", "Κλείσιμο"],
  fa: ["زبان خود را انتخاب کنید", "جستجوی زبان", "زبانی پیدا نشد", "پاک کردن جستجو", "بستن"],
  fi: ["Valitse kieli", "Hae kieliä", "Kieliä ei löytynyt", "Tyhjennä haku", "Sulje"],
  fil: ["Piliin ang iyong wika", "Maghanap ng wika", "Walang nakitang wika", "I-clear ang paghahanap", "Isara"],
  he: ["בחירת שפה", "חיפוש שפות", "לא נמצאו שפות", "ניקוי החיפוש", "סגירה"],
  hi: ["अपनी भाषा चुनें", "भाषाएँ खोजें", "कोई भाषा नहीं मिली", "खोज साफ़ करें", "बंद करें"],
  hr: ["Odaberite jezik", "Pretražite jezike", "Nije pronađen nijedan jezik", "Očisti pretragu", "Zatvori"],
  hu: ["Válasszon nyelvet", "Nyelvek keresése", "Nem található nyelv", "Keresés törlése", "Bezárás"],
  id: ["Pilih bahasa Anda", "Cari bahasa", "Bahasa tidak ditemukan", "Hapus pencarian", "Tutup"],
  it: ["Scegli la tua lingua", "Cerca lingue", "Nessuna lingua trovata", "Cancella ricerca", "Chiudi"],
  kk: ["Тілді таңдаңыз", "Тілдерді іздеу", "Тілдер табылмады", "Іздеуді тазалау", "Жабу"],
  ms: ["Pilih bahasa anda", "Cari bahasa", "Tiada bahasa ditemui", "Kosongkan carian", "Tutup"],
  nb: ["Velg språk", "Søk etter språk", "Ingen språk funnet", "Tøm søk", "Lukk"],
  nl: ["Kies je taal", "Talen zoeken", "Geen talen gevonden", "Zoekopdracht wissen", "Sluiten"],
  pl: ["Wybierz język", "Szukaj języków", "Nie znaleziono języków", "Wyczyść wyszukiwanie", "Zamknij"],
  "pt-PT": ["Escolha o seu idioma", "Pesquisar idiomas", "Nenhum idioma encontrado", "Limpar pesquisa", "Fechar"],
  ro: ["Alege limba", "Caută limbi", "Nu s-au găsit limbi", "Șterge căutarea", "Închide"],
  ru: ["Выберите язык", "Поиск языков", "Языки не найдены", "Очистить поиск", "Закрыть"],
  sv: ["Välj språk", "Sök efter språk", "Inga språk hittades", "Rensa sökning", "Stäng"],
  th: ["เลือกภาษาของคุณ", "ค้นหาภาษา", "ไม่พบภาษา", "ล้างการค้นหา", "ปิด"],
  tr: ["Dilinizi seçin", "Dil ara", "Dil bulunamadı", "Aramayı temizle", "Kapat"],
  uk: ["Виберіть мову", "Пошук мов", "Мов не знайдено", "Очистити пошук", "Закрити"],
  ur: ["اپنی زبان منتخب کریں", "زبانیں تلاش کریں", "کوئی زبان نہیں ملی", "تلاش صاف کریں", "بند کریں"],
  vi: ["Chọn ngôn ngữ", "Tìm ngôn ngữ", "Không tìm thấy ngôn ngữ", "Xóa tìm kiếm", "Đóng"],
} satisfies Record<Locale, [string, string, string, string, string]>;

export function getLanguagePickerCopy(locale: Locale) {
  const [title, search, empty, clear, close] = copy[locale];
  return { title, search, empty, clear, close };
}

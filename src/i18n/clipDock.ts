import { isGuideLocale, type Locale, type GuideLocale } from "./locales";

// ClipDock publishes these nine language editions. Other homepages link to English.
const clipDockLocales = new Set<Locale>(["en-US", "zh-Hans", "zh-Hant", "ja", "ko", "es", "pt-BR", "de", "fr"]);

export function clipDockURL(locale: Locale, article?: "transcode-video-iphone" | "resize-video-iphone") {
  const supported = clipDockLocales.has(locale);
  const prefix = supported && locale !== "en-US" ? `/${locale}/` : "/";
  return `https://clipdock.video${prefix}${supported && article ? `articles/${article}/` : ""}`;
}

// Label, heading, body, link text. Copy is checked in; rendering needs no translation service.
const homeCopy = {
  "en-US": [
    "Video downloader & tools",
    "Prepare your videos for side-by-side viewing",
    "ClipDock helps you save videos from supported links, extract existing YouTube subtitles, and trim, convert, or resize local videos on iPhone and iPad. Prepare your files, then import them into Split Screen Player to play and compare.",
    "Explore ClipDock",
  ],
  "zh-Hans": [
    "视频下载与处理",
    "先准备视频，再开始多画面比较",
    "ClipDock 影随存可在 iPhone 和 iPad 上从支持的链接保存视频、提取 YouTube 已有字幕，并裁剪、转码和调整本地视频的画面比例。整理好素材后，再导入分屏播放器进行播放与比较。",
    "了解 ClipDock 影随存",
  ],
  "zh-Hant": [
    "影片下載與處理",
    "先準備影片，再開始多畫面比較",
    "ClipDock 影隨存可在 iPhone 和 iPad 上從支援的連結儲存影片、擷取 YouTube 現有字幕，並裁剪、轉碼及調整本機影片的畫面比例。整理好素材後，再匯入分割畫面播放器進行播放與比較。",
    "認識 ClipDock 影隨存",
  ],
  ja: [
    "動画のダウンロードと編集",
    "動画を準備して、並べて比較",
    "ClipDockなら、iPhoneやiPadで対応リンクから動画を保存し、YouTubeの既存の字幕を抽出できます。端末内の動画のトリミング、変換、縦横比の調整も可能です。ファイルを準備したら、Split Screen Playerに読み込んで再生・比較しましょう。",
    "ClipDockについて見る",
  ],
  ko: [
    "영상 다운로드 및 편집",
    "영상을 준비하고 나란히 비교하세요",
    "ClipDock으로 iPhone과 iPad에서 지원되는 링크의 영상을 저장하고 YouTube의 기존 자막을 추출할 수 있습니다. 기기에 있는 영상의 길이를 자르거나 형식과 화면 비율을 바꿀 수도 있습니다. 파일을 준비한 뒤 Split Screen Player로 가져와 재생하고 비교하세요.",
    "ClipDock 알아보기",
  ],
  fr: [
    "Téléchargement et outils vidéo",
    "Préparez vos vidéos pour les comparer côte à côte",
    "Sur iPhone et iPad, ClipDock permet d’enregistrer des vidéos depuis des liens compatibles, d’extraire les sous-titres existants de YouTube et de découper, convertir ou redimensionner des vidéos locales. Préparez vos fichiers, puis importez-les dans Split Screen Player pour les lire et les comparer.",
    "Découvrir ClipDock",
  ],
  de: [
    "Videos herunterladen und bearbeiten",
    "Videos vorbereiten und nebeneinander vergleichen",
    "Mit ClipDock können Sie auf iPhone und iPad Videos über unterstützte Links speichern, vorhandene YouTube-Untertitel extrahieren sowie lokale Videos kürzen, konvertieren oder ihr Seitenverhältnis ändern. Bereiten Sie Ihre Dateien vor und importieren Sie sie anschließend zum Abspielen und Vergleichen in Split Screen Player.",
    "ClipDock entdecken",
  ],
  es: [
    "Descarga y herramientas de vídeo",
    "Prepara tus vídeos para compararlos en paralelo",
    "ClipDock permite guardar vídeos desde enlaces compatibles, extraer subtítulos existentes de YouTube y recortar, convertir o ajustar la proporción de vídeos locales en iPhone y iPad. Prepara tus archivos y después impórtalos en Split Screen Player para reproducirlos y compararlos.",
    "Descubre ClipDock",
  ],
  "pt-BR": [
    "Download e ferramentas de vídeo",
    "Prepare seus vídeos para comparar lado a lado",
    "Com o ClipDock, você pode salvar vídeos de links compatíveis, extrair legendas existentes do YouTube e cortar, converter ou ajustar a proporção de vídeos locais no iPhone e iPad. Prepare os arquivos e depois importe-os no Split Screen Player para reproduzir e comparar.",
    "Conheça o ClipDock",
  ],
  ar: [
    "تنزيل الفيديو وأدوات معالجته",
    "جهّز فيديوهاتك للمقارنة جنبًا إلى جنب",
    "يتيح ClipDock على iPhone وiPad حفظ الفيديوهات من الروابط المدعومة واستخراج ترجمات YouTube الموجودة، وقص الفيديوهات المحلية وتحويل صيغتها وضبط نسبة أبعادها. جهّز ملفاتك، ثم استوردها إلى Split Screen Player لتشغيلها ومقارنتها.",
    "اكتشف ClipDock",
  ],
  bg: [
    "Изтегляне и обработка на видео",
    "Подгответе видеата за сравнение едно до друго",
    "ClipDock за iPhone и iPad запазва видеа от поддържани връзки, извлича съществуващи субтитри от YouTube и изрязва, конвертира или променя съотношението на страните на локални видеа. Подгответе файловете, след което ги импортирайте в Split Screen Player за възпроизвеждане и сравнение.",
    "Разгледайте ClipDock",
  ],
  bn: [
    "ভিডিও ডাউনলোড ও সম্পাদনা",
    "পাশাপাশি তুলনার জন্য ভিডিও প্রস্তুত করুন",
    "iPhone ও iPad-এ ClipDock দিয়ে সমর্থিত লিংক থেকে ভিডিও সংরক্ষণ, YouTube-এর বিদ্যমান সাবটাইটেল বের করা এবং ডিভাইসের ভিডিও ছাঁটা, ফরম্যাট বদলানো বা অনুপাত ঠিক করা যায়। ফাইল প্রস্তুত করে তারপর Split Screen Player-এ আমদানি করুন, চালান ও তুলনা করুন।",
    "ClipDock সম্পর্কে জানুন",
  ],
  ca: [
    "Descàrrega i eines de vídeo",
    "Prepara els vídeos per comparar-los de costat",
    "ClipDock permet desar vídeos d’enllaços compatibles, extreure subtítols existents de YouTube i retallar, convertir o ajustar la proporció de vídeos locals a l’iPhone i l’iPad. Prepara els fitxers i després importa’ls a Split Screen Player per reproduir-los i comparar-los.",
    "Descobreix ClipDock",
  ],
  cs: [
    "Stahování a úpravy videí",
    "Připravte si videa k porovnání vedle sebe",
    "ClipDock na iPhonu a iPadu ukládá videa z podporovaných odkazů, získává existující titulky z YouTube a umožňuje zkracovat či převádět místní videa nebo měnit jejich poměr stran. Připravte soubory a pak je importujte do Split Screen Player k přehrávání a porovnání.",
    "Objevte ClipDock",
  ],
  da: [
    "Download og redigering af videoer",
    "Gør dine videoer klar til sammenligning side om side",
    "Med ClipDock på iPhone og iPad kan du gemme videoer fra understøttede links, hente eksisterende YouTube-undertekster og trimme, konvertere eller ændre billedformatet på lokale videoer. Klargør filerne, og importer dem derefter i Split Screen Player for at afspille og sammenligne dem.",
    "Se ClipDock",
  ],
  el: [
    "Λήψη και επεξεργασία βίντεο",
    "Ετοιμάστε τα βίντεο για σύγκριση δίπλα δίπλα",
    "Το ClipDock σε iPhone και iPad αποθηκεύει βίντεο από υποστηριζόμενους συνδέσμους, εξάγει υπάρχοντες υπότιτλους YouTube και περικόπτει, μετατρέπει ή αλλάζει την αναλογία εικόνας τοπικών βίντεο. Ετοιμάστε τα αρχεία και έπειτα εισαγάγετέ τα στο Split Screen Player για αναπαραγωγή και σύγκριση.",
    "Γνωρίστε το ClipDock",
  ],
  fa: [
    "دانلود و پردازش ویدیو",
    "ویدیوها را برای مقایسه در کنار هم آماده کنید",
    "با ClipDock در iPhone و iPad می‌توانید ویدیوها را از پیوندهای پشتیبانی‌شده ذخیره کنید، زیرنویس‌های موجود YouTube را استخراج کنید و ویدیوهای روی دستگاه را کوتاه کنید یا قالب و نسبت تصویرشان را تغییر دهید. فایل‌ها را آماده کنید و سپس برای پخش و مقایسه به Split Screen Player وارد کنید.",
    "آشنایی با ClipDock",
  ],
  fi: [
    "Videoiden lataus ja muokkaus",
    "Valmistele videot rinnakkaista vertailua varten",
    "ClipDockilla voit iPhonella ja iPadilla tallentaa videoita tuetuista linkeistä, poimia YouTuben olemassa olevia tekstityksiä sekä leikata paikallisia videoita tai muuttaa niiden tiedostomuotoa ja kuvasuhdetta. Valmistele tiedostot ja tuo ne sitten Split Screen Playeriin toistoa ja vertailua varten.",
    "Tutustu ClipDockiin",
  ],
  fil: [
    "Pag-download at pag-edit ng video",
    "Ihanda ang mga video para sa magkatabing paghahambing",
    "Sa iPhone at iPad, magagamit ang ClipDock para mag-save ng mga video mula sa suportadong link, kumuha ng kasalukuyang subtitle sa YouTube, at mag-trim o magpalit ng format at aspect ratio ng mga lokal na video. Ihanda ang mga file, saka i-import sa Split Screen Player para i-play at ihambing.",
    "Kilalanin ang ClipDock",
  ],
  he: [
    "הורדה ועיבוד של סרטונים",
    "הכינו סרטונים להשוואה זה לצד זה",
    "ClipDock ב-iPhone וב-iPad מאפשרת לשמור סרטונים מקישורים נתמכים, לחלץ כתוביות קיימות מ-YouTube ולקצר סרטונים מקומיים או לשנות את הפורמט ואת יחס הממדים שלהם. הכינו את הקבצים ואז ייבאו אותם ל-Split Screen Player לניגון ולהשוואה.",
    "הכירו את ClipDock",
  ],
  hi: [
    "वीडियो डाउनलोड और संपादन",
    "वीडियो साथ-साथ तुलना करने के लिए तैयार करें",
    "iPhone और iPad पर ClipDock से समर्थित लिंक के वीडियो सहेजें, YouTube के मौजूदा सबटाइटल निकालें और डिवाइस के वीडियो को छोटा करें या उनका फ़ॉर्मैट और आस्पेक्ट रेशियो बदलें। फ़ाइलें तैयार करने के बाद उन्हें चलाने और तुलना करने के लिए Split Screen Player में इम्पोर्ट करें।",
    "ClipDock के बारे में जानें",
  ],
  hr: [
    "Preuzimanje i obrada videozapisa",
    "Pripremite videozapise za usporedbu jedan uz drugi",
    "ClipDock na iPhoneu i iPadu sprema videozapise s podržanih poveznica, izdvaja postojeće titlove s YouTubea te skraćuje lokalne videozapise ili mijenja njihov format i omjer slike. Pripremite datoteke pa ih uvezite u Split Screen Player za reprodukciju i usporedbu.",
    "Upoznajte ClipDock",
  ],
  hu: [
    "Videók letöltése és szerkesztése",
    "Készítse elő videóit az egymás melletti összehasonlításhoz",
    "A ClipDock iPhone-on és iPaden támogatott linkekről ment videókat, kinyeri a YouTube meglévő feliratait, és lehetővé teszi a helyi videók vágását, formátumuk vagy képarányuk módosítását. Készítse elő a fájlokat, majd importálja őket a Split Screen Playerbe lejátszáshoz és összehasonlításhoz.",
    "Ismerje meg a ClipDockot",
  ],
  id: [
    "Unduh dan olah video",
    "Siapkan video untuk dibandingkan berdampingan",
    "ClipDock di iPhone dan iPad membantu menyimpan video dari tautan yang didukung, mengekstrak subtitel YouTube yang sudah ada, serta memangkas, mengonversi, atau mengubah rasio aspek video lokal. Siapkan berkas, lalu impor ke Split Screen Player untuk diputar dan dibandingkan.",
    "Kenali ClipDock",
  ],
  it: [
    "Download e strumenti video",
    "Prepara i video per confrontarli affiancati",
    "ClipDock su iPhone e iPad consente di salvare video da link supportati, estrarre i sottotitoli esistenti di YouTube e tagliare, convertire o modificare le proporzioni dei video locali. Prepara i file, poi importali in Split Screen Player per riprodurli e confrontarli.",
    "Scopri ClipDock",
  ],
  kk: [
    "Видео жүктеу және өңдеу",
    "Видеоларды қатар қойып салыстыруға дайындаңыз",
    "iPhone және iPad-та ClipDock қолдау көрсетілетін сілтемелерден видеоларды сақтауға, YouTube-тағы бар субтитрлерді алуға, құрылғыдағы видеоларды қысқартуға, пішімін не кадр арақатынасын өзгертуге көмектеседі. Файлдарды дайындап, ойнату және салыстыру үшін Split Screen Player қолданбасына импорттаңыз.",
    "ClipDock туралы біліңіз",
  ],
  ms: [
    "Muat turun dan sunting video",
    "Sediakan video untuk perbandingan sebelah menyebelah",
    "ClipDock pada iPhone dan iPad membolehkan anda menyimpan video daripada pautan yang disokong, mengekstrak sari kata YouTube sedia ada serta memangkas, menukar format atau melaraskan nisbah aspek video setempat. Sediakan fail, kemudian import ke Split Screen Player untuk dimainkan dan dibandingkan.",
    "Kenali ClipDock",
  ],
  nb: [
    "Nedlasting og redigering av videoer",
    "Klargjør videoene for sammenligning side om side",
    "Med ClipDock på iPhone og iPad kan du lagre videoer fra støttede lenker, hente eksisterende YouTube-undertekster og trimme, konvertere eller endre bildeformatet på lokale videoer. Klargjør filene, og importer dem deretter i Split Screen Player for avspilling og sammenligning.",
    "Utforsk ClipDock",
  ],
  nl: [
    "Video’s downloaden en bewerken",
    "Bereid je video’s voor om ze naast elkaar te vergelijken",
    "Met ClipDock op iPhone en iPad kun je video’s opslaan via ondersteunde links, bestaande YouTube-ondertitels ophalen en lokale video’s inkorten, converteren of de beeldverhouding aanpassen. Bereid je bestanden voor en importeer ze daarna in Split Screen Player om ze af te spelen en te vergelijken.",
    "Ontdek ClipDock",
  ],
  pl: [
    "Pobieranie i obróbka filmów",
    "Przygotuj filmy do porównania obok siebie",
    "ClipDock na iPhonie i iPadzie pozwala zapisywać filmy z obsługiwanych linków, pobierać istniejące napisy z YouTube oraz przycinać lokalne filmy, konwertować je i zmieniać ich proporcje. Przygotuj pliki, a następnie zaimportuj je do Split Screen Player, aby je odtwarzać i porównywać.",
    "Poznaj ClipDock",
  ],
  "pt-PT": [
    "Descarga e ferramentas de vídeo",
    "Prepare os seus vídeos para comparar lado a lado",
    "O ClipDock permite guardar vídeos de ligações compatíveis, extrair legendas existentes do YouTube e cortar, converter ou ajustar as proporções de vídeos locais no iPhone e iPad. Prepare os ficheiros e depois importe-os no Split Screen Player para os reproduzir e comparar.",
    "Conheça o ClipDock",
  ],
  ro: [
    "Descărcare și prelucrare video",
    "Pregătiți videoclipurile pentru comparație alăturată",
    "ClipDock pe iPhone și iPad salvează videoclipuri din linkuri acceptate, extrage subtitrări existente de pe YouTube și decupează, convertește sau modifică raportul de aspect al videoclipurilor locale. Pregătiți fișierele, apoi importați-le în Split Screen Player pentru redare și comparație.",
    "Descoperiți ClipDock",
  ],
  ru: [
    "Скачивание и обработка видео",
    "Подготовьте видео для сравнения рядом",
    "ClipDock на iPhone и iPad позволяет сохранять видео по поддерживаемым ссылкам, извлекать существующие субтитры YouTube, обрезать и конвертировать локальные видео, а также менять соотношение сторон. Подготовьте файлы, затем импортируйте их в Split Screen Player для воспроизведения и сравнения.",
    "Узнать о ClipDock",
  ],
  sv: [
    "Ladda ner och redigera videor",
    "Förbered videorna för jämförelse sida vid sida",
    "Med ClipDock på iPhone och iPad kan du spara videor från länkar som stöds, hämta befintliga YouTube-undertexter och trimma, konvertera eller ändra bildförhållandet på lokala videor. Förbered filerna och importera dem sedan i Split Screen Player för uppspelning och jämförelse.",
    "Upptäck ClipDock",
  ],
  th: [
    "ดาวน์โหลดและปรับแต่งวิดีโอ",
    "เตรียมวิดีโอเพื่อเปิดเปรียบเทียบกัน",
    "ClipDock บน iPhone และ iPad ช่วยบันทึกวิดีโอจากลิงก์ที่รองรับ ดึงคำบรรยายที่มีอยู่แล้วบน YouTube ตัดความยาว แปลงรูปแบบ หรือปรับอัตราส่วนภาพของวิดีโอในเครื่อง เมื่อเตรียมไฟล์เสร็จแล้ว ให้นำเข้า Split Screen Player เพื่อเล่นและเปรียบเทียบ",
    "รู้จัก ClipDock",
  ],
  tr: [
    "Video indirme ve düzenleme",
    "Videolarınızı yan yana karşılaştırmaya hazırlayın",
    "iPhone ve iPad’de ClipDock ile desteklenen bağlantılardan video kaydedebilir, YouTube’un mevcut altyazılarını çıkarabilir, yerel videoları kırpabilir, dönüştürebilir veya en boy oranlarını değiştirebilirsiniz. Dosyalarınızı hazırlayın, ardından oynatmak ve karşılaştırmak için Split Screen Player’a aktarın.",
    "ClipDock’u keşfedin",
  ],
  uk: [
    "Завантаження й обробка відео",
    "Підготуйте відео для порівняння поруч",
    "ClipDock на iPhone та iPad дає змогу зберігати відео за підтримуваними посиланнями, видобувати наявні субтитри YouTube, обрізати й конвертувати локальні відео та змінювати співвідношення сторін. Підготуйте файли, а потім імпортуйте їх у Split Screen Player для відтворення й порівняння.",
    "Дізнатися про ClipDock",
  ],
  ur: [
    "ویڈیو ڈاؤن لوڈ اور تدوین",
    "ساتھ ساتھ موازنہ کرنے کے لیے ویڈیوز تیار کریں",
    "iPhone اور iPad پر ClipDock سے معاون لنکس کی ویڈیوز محفوظ کریں، YouTube کے موجودہ سب ٹائٹلز نکالیں اور مقامی ویڈیوز کو مختصر کریں یا ان کا فارمیٹ اور تناسب بدلیں۔ فائلیں تیار کرنے کے بعد انہیں چلانے اور موازنہ کرنے کے لیے Split Screen Player میں درآمد کریں۔",
    "ClipDock کے بارے میں جانیں",
  ],
  vi: [
    "Tải xuống và xử lý video",
    "Chuẩn bị video để so sánh cạnh nhau",
    "ClipDock trên iPhone và iPad giúp lưu video từ liên kết được hỗ trợ, trích xuất phụ đề có sẵn trên YouTube, cắt ngắn, chuyển đổi định dạng hoặc điều chỉnh tỷ lệ khung hình của video trên thiết bị. Chuẩn bị tệp rồi nhập vào Split Screen Player để phát và so sánh.",
    "Khám phá ClipDock",
  ],
} satisfies Record<Locale, [string, string, string, string]>;

export function getClipDockHome(locale: Locale) {
  const [label, title, description, linkLabel] = homeCopy[locale];
  if (![label, title, description, linkLabel].every(value => value?.trim())) {
    throw new Error(`Missing ClipDock recommendation copy: ${locale}`);
  }
  return { label, title, description, linkLabel, href: clipDockURL(locale) };
}

// Only the two relevant iOS tutorials receive a contextual recommendation.
// Each tuple is the text before the link, the link label, and the text after it.
const guideCopy = {
  "en-US": {
    files: ["Need to change a local video’s format or file size before importing?", "Convert or compress it with ClipDock.", "Save the exported video, then select it in Files. The two apps are used separately."],
    transform: ["Fit and Fill change the player display. To create a separate video file with a different aspect ratio or canvas,", "resize the video with ClipDock.", "Save the result, then open that file in Split Screen Player."],
  },
  "zh-Hans": {
    files: ["导入前需要调整本地视频的格式或文件大小？可以", "用 ClipDock 转换格式或压缩视频", "。保存处理后的文件，再从 Files 中选择导入。两款应用独立使用。"],
    transform: ["Fit 和 Fill 调整的是播放器中的显示效果。如果需要另外生成改变画面比例或画布的视频文件，可以", "用 ClipDock 调整视频比例和画布", "。保存结果后，再在分屏播放器中打开该文件。"],
  },
  "zh-Hant": {
    files: ["匯入前需要調整本機影片的格式或檔案大小？可以", "用 ClipDock 轉換格式或壓縮影片", "。儲存處理後的檔案，再從 Files 中選取匯入。兩款應用程式獨立使用。"],
    transform: ["Fit 和 Fill 調整的是播放器中的顯示效果。如果需要另外產生改變畫面比例或畫布的影片檔案，可以", "用 ClipDock 調整影片比例和畫布", "。儲存結果後，再在分割畫面播放器中開啟該檔案。"],
  },
  ja: {
    files: ["読み込む前に端末内の動画の形式やファイルサイズを変えたい場合は、", "ClipDockで動画を変換・圧縮できます。", "書き出した動画を保存し、Filesから選んでください。2つのアプリは別々に使用します。"],
    transform: ["FitとFillはプレーヤー内の表示を変えます。縦横比やキャンバスを変えた別の動画ファイルを作る場合は、", "ClipDockで動画の縦横比を調整できます。", "結果を保存してから、そのファイルをSplit Screen Playerで開いてください。"],
  },
  ko: {
    files: ["가져오기 전에 로컬 영상의 형식이나 파일 크기를 바꾸려면", "ClipDock으로 영상을 변환하거나 압축하세요.", "결과 파일을 저장한 뒤 Files에서 선택하세요. 두 앱은 독립적으로 사용합니다."],
    transform: ["Fit과 Fill은 플레이어의 표시 방식만 바꿉니다. 화면 비율이나 캔버스를 바꾼 별도 영상 파일이 필요하면", "ClipDock으로 영상 비율을 조정하세요.", "결과를 저장한 뒤 Split Screen Player에서 해당 파일을 여세요."],
  },
  fr: {
    files: ["Besoin de modifier le format ou la taille d’un fichier vidéo avant l’importation ?", "Convertissez ou compressez la vidéo avec ClipDock.", "Enregistrez le fichier exporté, puis sélectionnez-le dans Files. Les deux apps s’utilisent séparément."],
    transform: ["Fit et Fill modifient l’affichage du lecteur. Pour créer un autre fichier avec des proportions ou un canevas différents,", "redimensionnez la vidéo avec ClipDock.", "Enregistrez le résultat, puis ouvrez ce fichier dans Split Screen Player."],
  },
  de: {
    files: ["Möchten Sie vor dem Import Format oder Dateigröße eines lokalen Videos ändern?", "Konvertieren oder komprimieren Sie es mit ClipDock.", "Speichern Sie die exportierte Datei und wählen Sie sie in Files aus. Beide Apps werden getrennt verwendet."],
    transform: ["Fit und Fill ändern die Darstellung im Player. Für eine separate Videodatei mit anderem Seitenverhältnis oder anderer Leinwand", "passen Sie das Video mit ClipDock an.", "Speichern Sie das Ergebnis und öffnen Sie die Datei anschließend in Split Screen Player."],
  },
  es: {
    files: ["¿Necesitas cambiar el formato o el tamaño de un vídeo local antes de importarlo?", "Convierte o comprime el vídeo con ClipDock.", "Guarda el archivo exportado y selecciónalo en Files. Las dos apps se utilizan por separado."],
    transform: ["Fit y Fill cambian la visualización en el reproductor. Para crear otro archivo con una proporción o un lienzo distintos,", "ajusta el vídeo con ClipDock.", "Guarda el resultado y abre ese archivo en Split Screen Player."],
  },
  "pt-BR": {
    files: ["Precisa mudar o formato ou o tamanho de um vídeo local antes de importar?", "Converta ou comprima o vídeo com o ClipDock.", "Salve o arquivo exportado e selecione-o em Files. Os dois apps são usados separadamente."],
    transform: ["Fit e Fill alteram a exibição no player. Para criar outro arquivo com uma proporção ou tela diferente,", "ajuste o vídeo com o ClipDock.", "Salve o resultado e abra esse arquivo no Split Screen Player."],
  },
} satisfies Record<GuideLocale, Record<"files" | "transform", [string, string, string]>>;

export function getClipDockGuide(locale: Locale, slug: string) {
  if (!isGuideLocale(locale)) return null;
  const topic = slug === "open-local-video-files-folders-iphone-ipad" ? "files"
    : slug === "fit-fill-rotate-mirror-videos-iphone-ipad" ? "transform" : null;
  if (!topic) return null;
  const [before, label, after] = guideCopy[locale][topic];
  const separator = ["zh-Hans", "zh-Hant", "ja"].includes(locale) ? "" : " ";
  return {
    before, label, after, separator,
    href: clipDockURL(locale, topic === "files" ? "transcode-video-iphone" : "resize-video-iphone"),
  };
}

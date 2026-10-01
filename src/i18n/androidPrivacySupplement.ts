import type { Locale } from "./locales";

// Kept separate from the older iOS policy text so the Android disclosure is
// identical in scope on every localized privacy page.
export const androidPrivacySupplement: Record<Locale, string> = {
	"en-US": `## Android privacy supplement

**Effective:** October 2, 2026. This section applies to the Google Play Android app.

- **Usage analytics:** Firebase Analytics automatically receives app usage events, app and device identifiers (which may include an advertising ID), and device/app metadata to help us understand how features are used. It derives approximate location from a masked IP address and records in-app purchase events. Our custom events use fixed categories and counts, not media paths, URLs, or feedback text.
- **Crash reporting:** Firebase Crashlytics automatically receives crash, ANR, and native-crash reports, including stack traces, exception messages, app/device state, an installation identifier, and recent Analytics events. An exception message produced by the app, Android, or a library may contain a media path or URL. We do not deliberately add paths or URLs as custom crash fields.
- **Optional feedback and logs:** If you submit feedback, its text, a pseudonymous app identity, and the conversation are sent to our Tencent Cloud service in Shanghai. If you explicitly choose **Upload Logs**, a redacted diagnostic archive is sent to private Tencent Cloud COS storage in Shanghai and linked to your feedback. The archive can still contain technical details and is deleted after 30 days. You can use feedback without uploading logs.
- **Local content:** Your selected media files and saved workspace data remain on your device unless you explicitly share, export, or upload content.

For Android privacy questions, contact daysinyear@foxmail.com.`,
	"zh-Hans": `## Android 隐私补充说明

**生效日期：** 2026 年 10 月 2 日。本节适用于 Google Play Android 版。

- **使用情况分析：** Firebase Analytics 会自动接收 App 使用事件、App 和设备标识符（可能包括广告 ID）以及设备和 App 元数据，帮助我们了解功能使用情况。它会根据经过遮蔽的 IP 地址推算大致位置，并记录 App 内购买事件。我们自定义事件只使用固定类别和数量，不包含媒体路径、链接或反馈正文。
- **崩溃报告：** Firebase Crashlytics 会自动接收崩溃、无响应（ANR）和原生崩溃报告，包括调用栈、异常信息、App／设备状态、安装标识符和近期 Analytics 事件。App、Android 或第三方库生成的异常信息可能包含媒体路径或链接；我们不会有意将这些内容加入自定义崩溃字段。
- **可选的反馈和日志：** 你提交反馈时，反馈正文、App 生成的匿名化身份和会话记录会发送到我们位于上海的腾讯云服务。只有你明确选择**上传日志**时，脱敏诊断压缩包才会上传到上海的腾讯云私有 COS 存储并关联反馈。压缩包仍可能包含技术细节，30 天后自动删除。提交反馈不要求上传日志。
- **本地内容：** 你选择的媒体文件和保存的工作区数据留在设备上，除非你明确选择分享、导出或上传。

Android 隐私问题请联系 daysinyear@foxmail.com。`,
	"zh-Hant": `## Android 隱私補充說明

**生效日期：** 2026 年 10 月 2 日。本節適用於 Google Play Android 版。

- **使用情況分析：** Firebase Analytics 會自動接收 App 使用事件、App 和裝置識別碼（可能包括廣告 ID）以及裝置和 App 中繼資料，協助我們了解功能使用情況。它會根據經遮蔽的 IP 位址推算大致位置，並記錄 App 內購買事件。自訂事件只使用固定類別和數量，不包含媒體路徑、連結或意見回饋內容。
- **當機報告：** Firebase Crashlytics 會自動接收當機、無回應（ANR）和原生當機報告，包括堆疊追蹤、例外訊息、App／裝置狀態、安裝識別碼和近期 Analytics 事件。App、Android 或第三方程式庫產生的例外訊息可能包含媒體路徑或連結；我們不會刻意將這些內容加入自訂當機欄位。
- **選擇性意見回饋和日誌：** 提交意見回饋時，內容、App 產生的假名識別碼和對話紀錄會傳送至我們位於上海的騰訊雲服務。只有你明確選擇**上傳日誌**時，經過遮蔽處理的診斷壓縮檔才會上傳到上海的騰訊雲私人 COS 儲存空間並關聯意見回饋。壓縮檔仍可能包含技術細節，30 天後自動刪除。提交意見回饋不需要上傳日誌。
- **本機內容：** 你選取的媒體檔案和儲存的工作區資料保留在裝置上，除非你明確選擇分享、匯出或上傳。

Android 隱私問題請聯絡 daysinyear@foxmail.com。`,
	ja: `## Android のプライバシーに関する補足

**適用開始日：** 2026 年 10 月 2 日。この項目は Google Play の Android アプリに適用されます。

- **利用状況の分析：** Firebase Analytics は、アプリの利用イベント、アプリと端末の識別子（広告 ID を含む場合があります）、端末とアプリの情報を自動的に受信します。マスクされた IP アドレスからおおよその位置を推定し、アプリ内購入イベントも記録します。独自イベントには固定された分類と件数のみを使用し、メディアのパス、URL、フィードバック本文は含めません。
- **クラッシュ報告：** Firebase Crashlytics はクラッシュ、ANR、ネイティブクラッシュの報告を自動的に受信します。報告にはスタックトレース、例外メッセージ、アプリと端末の状態、インストール識別子、直近の Analytics イベントが含まれます。アプリ、Android、ライブラリが生成した例外メッセージにはメディアのパスや URL が含まれる場合があります。これらを独自のクラッシュ項目に意図的に追加することはありません。
- **任意のフィードバックとログ：** フィードバックを送信すると、本文、アプリが生成した仮名の識別子、会話履歴が上海の Tencent Cloud サービスに送られます。**ログをアップロード**を明示的に選択した場合のみ、秘匿処理済みの診断アーカイブが上海の非公開 Tencent Cloud COS ストレージに送られ、フィードバックに関連付けられます。技術的な詳細が残る場合があり、30 日後に削除されます。ログなしでもフィードバックできます。
- **ローカルデータ：** 選択したメディアと保存したワークスペースは、明示的に共有、書き出し、アップロードしない限り端末内に残ります。

Android のプライバシーに関するお問い合わせ：daysinyear@foxmail.com。`,
	ko: `## Android 개인정보 처리 추가 안내

**시행일:** 2026년 10월 2일. 이 항목은 Google Play Android 앱에 적용됩니다.

- **사용 분석:** Firebase Analytics는 앱 사용 이벤트, 앱 및 기기 식별자(광고 ID 포함 가능), 기기 및 앱 정보를 자동으로 수신합니다. 가려진 IP 주소에서 대략적인 위치를 추정하고 앱 내 구매 이벤트도 기록합니다. 맞춤 이벤트에는 고정된 분류와 개수만 사용하며 미디어 경로, URL 또는 피드백 내용은 포함하지 않습니다.
- **오류 보고:** Firebase Crashlytics는 충돌, ANR 및 네이티브 충돌 보고서를 자동으로 수신합니다. 보고서에는 스택 추적, 예외 메시지, 앱/기기 상태, 설치 식별자 및 최근 Analytics 이벤트가 포함됩니다. 앱, Android 또는 라이브러리의 예외 메시지에 미디어 경로나 URL이 포함될 수 있습니다. 이를 맞춤 충돌 필드에 의도적으로 추가하지 않습니다.
- **선택적 피드백 및 로그:** 피드백을 제출하면 내용, 앱에서 생성한 가명 식별자 및 대화 기록이 상하이의 Tencent Cloud 서비스로 전송됩니다. **로그 업로드**를 명시적으로 선택한 경우에만 비식별 처리된 진단 압축 파일이 상하이의 비공개 Tencent Cloud COS 저장소로 전송되어 피드백과 연결됩니다. 기술 정보가 남아 있을 수 있으며 30일 후 삭제됩니다. 로그 없이도 피드백을 보낼 수 있습니다.
- **로컬 콘텐츠:** 선택한 미디어와 저장한 작업 공간 데이터는 직접 공유, 내보내기 또는 업로드하지 않는 한 기기에 남습니다.

Android 개인정보 관련 문의: daysinyear@foxmail.com.`,
	fr: `## Complément de confidentialité pour Android

**En vigueur le :** 2 octobre 2026. Cette section s'applique à l'application Android sur Google Play.

- **Analyse d'utilisation :** Firebase Analytics reçoit automatiquement les événements d'utilisation, les identifiants de l'application et de l'appareil (éventuellement l'identifiant publicitaire), ainsi que des informations sur l'appareil et l'application. Il déduit une localisation approximative d'une adresse IP masquée et enregistre les achats intégrés. Nos événements personnalisés utilisent des catégories et des nombres prédéfinis, sans chemins de médias, URL ni texte des avis.
- **Rapports de plantage :** Firebase Crashlytics reçoit automatiquement les rapports de plantage, d'ANR et de plantage natif, avec piles d'appels, messages d'exception, état de l'application et de l'appareil, identifiant d'installation et événements Analytics récents. Un message d'exception provenant de l'application, d'Android ou d'une bibliothèque peut contenir un chemin de média ou une URL. Nous ne les ajoutons pas volontairement aux champs personnalisés.
- **Avis et journaux facultatifs :** Si vous envoyez un avis, son texte, un identifiant pseudonyme créé par l'application et l'historique de la conversation sont transmis à notre service Tencent Cloud à Shanghai. L'archive de diagnostic expurgée n'est envoyée à un stockage privé Tencent Cloud COS à Shanghai et associée à votre avis que si vous choisissez explicitement **Téléverser les journaux**. Elle peut encore contenir des détails techniques et est supprimée après 30 jours. Vous pouvez envoyer un avis sans journal.
- **Contenu local :** Vos médias sélectionnés et données d'espace de travail restent sur l'appareil, sauf partage, exportation ou téléversement explicite.

Questions sur la confidentialité Android : daysinyear@foxmail.com.`,
	de: `## Datenschutzhinweise für Android

**Gültig ab:** 2. Oktober 2026. Dieser Abschnitt gilt für die Android-App auf Google Play.

- **Nutzungsanalyse:** Firebase Analytics empfängt automatisch Nutzungsereignisse, App- und Gerätekennungen (gegebenenfalls auch die Werbe-ID) sowie Geräte- und App-Metadaten. Aus einer maskierten IP-Adresse wird ein ungefährer Standort abgeleitet; In-App-Käufe werden als Ereignisse erfasst. Unsere eigenen Ereignisse enthalten nur festgelegte Kategorien und Zahlen, keine Medienpfade, URLs oder Feedbacktexte.
- **Absturzberichte:** Firebase Crashlytics empfängt automatisch Berichte über Abstürze, ANRs und native Abstürze. Dazu gehören Stacktraces, Ausnahmemeldungen, App- und Gerätestatus, eine Installationskennung und jüngste Analytics-Ereignisse. Eine von der App, Android oder einer Bibliothek erzeugte Ausnahmemeldung kann einen Medienpfad oder eine URL enthalten. Wir fügen solche Angaben nicht absichtlich als eigene Absturzfelder hinzu.
- **Freiwilliges Feedback und Protokolle:** Beim Einsenden von Feedback werden der Text, eine von der App erzeugte pseudonyme Kennung und der Gesprächsverlauf an unseren Tencent-Cloud-Dienst in Shanghai übertragen. Nur wenn Sie ausdrücklich **Protokolle hochladen** wählen, wird ein bereinigtes Diagnosearchiv in einem privaten Tencent-Cloud-COS-Speicher in Shanghai abgelegt und Ihrem Feedback zugeordnet. Es kann weiterhin technische Details enthalten und wird nach 30 Tagen gelöscht. Feedback ist auch ohne Protokolle möglich.
- **Lokale Inhalte:** Ausgewählte Medien und gespeicherte Arbeitsbereichsdaten bleiben auf Ihrem Gerät, solange Sie sie nicht ausdrücklich teilen, exportieren oder hochladen.

Fragen zum Android-Datenschutz: daysinyear@foxmail.com.`,
	es: `## Información adicional de privacidad para Android

**En vigor desde:** el 2 de octubre de 2026. Esta sección se aplica a la aplicación Android de Google Play.

- **Análisis de uso:** Firebase Analytics recibe automáticamente eventos de uso, identificadores de la aplicación y del dispositivo (que pueden incluir el ID de publicidad), y datos del dispositivo y de la aplicación. Deduce una ubicación aproximada a partir de una dirección IP enmascarada y registra eventos de compras dentro de la aplicación. Nuestros eventos personalizados usan categorías y cifras predefinidas, sin rutas de archivos multimedia, URL ni texto de opiniones.
- **Informes de fallos:** Firebase Crashlytics recibe automáticamente informes de fallos, ANR y fallos nativos, incluidos registros de pila, mensajes de excepciones, estado de la aplicación y del dispositivo, un identificador de instalación y eventos recientes de Analytics. Un mensaje de excepción generado por la aplicación, Android o una biblioteca puede contener una ruta multimedia o una URL. No añadimos estos datos deliberadamente a los campos personalizados.
- **Opiniones y registros opcionales:** Al enviar una opinión, su texto, una identidad seudónima generada por la aplicación y el historial de la conversación se envían a nuestro servicio Tencent Cloud en Shanghái. Solo si eliges expresamente **Subir registros**, se envía un archivo de diagnóstico redactado al almacenamiento privado Tencent Cloud COS en Shanghái y se vincula a tu opinión. Puede contener detalles técnicos y se elimina a los 30 días. Puedes enviar opiniones sin registros.
- **Contenido local:** Los archivos multimedia seleccionados y los datos del espacio de trabajo guardados permanecen en el dispositivo salvo que decidas compartirlos, exportarlos o subirlos.

Consultas sobre privacidad en Android: daysinyear@foxmail.com.`,
	"pt-BR": `## Informações adicionais de privacidade para Android

**Em vigor desde:** 2 de outubro de 2026. Esta seção se aplica ao aplicativo Android do Google Play.

- **Análise de uso:** O Firebase Analytics recebe automaticamente eventos de uso, identificadores do aplicativo e do dispositivo (que podem incluir o ID de publicidade) e metadados do dispositivo e do aplicativo. Ele infere uma localização aproximada de um endereço IP mascarado e registra eventos de compras no aplicativo. Nossos eventos personalizados usam categorias e contagens predefinidas, sem caminhos de mídia, URLs ou texto de feedback.
- **Relatórios de falhas:** O Firebase Crashlytics recebe automaticamente relatórios de falhas, ANRs e falhas nativas, incluindo rastreamentos de pilha, mensagens de exceção, estado do aplicativo e do dispositivo, identificador de instalação e eventos recentes do Analytics. Uma mensagem de exceção produzida pelo aplicativo, Android ou por uma biblioteca pode conter um caminho de mídia ou URL. Não adicionamos esses dados intencionalmente aos campos personalizados.
- **Feedback e logs opcionais:** Ao enviar feedback, seu texto, uma identidade pseudônima gerada pelo aplicativo e o histórico da conversa são enviados ao nosso serviço Tencent Cloud em Xangai. Somente se você escolher explicitamente **Enviar logs**, um arquivo de diagnóstico com informações ocultadas será enviado ao armazenamento privado Tencent Cloud COS em Xangai e associado ao feedback. Ele ainda pode conter detalhes técnicos e é excluído após 30 dias. Você pode enviar feedback sem logs.
- **Conteúdo local:** Mídias selecionadas e dados salvos do espaço de trabalho permanecem no dispositivo, a menos que você escolha compartilhá-los, exportá-los ou enviá-los.

Dúvidas sobre privacidade no Android: daysinyear@foxmail.com.`,
};

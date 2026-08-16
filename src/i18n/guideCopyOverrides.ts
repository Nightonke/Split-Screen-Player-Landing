import type { Locale } from "./locales";
import type { GuideSlug } from "./guides";

type GuideHeroCopy = {
	eyebrow: string;
	title: string;
	seoTitle: string;
	metaDescription: string;
	summary: string;
	answer: string;
};

type GuideLocaleCopyOverride = {
	hub: {
		eyebrow: string;
		title: string;
		seoTitle: string;
		metaDescription: string;
		description: string;
		readLabel: string;
		homeLabel: string;
	};
	labels: {
		guides: string;
		directAnswer: string;
		steps: string;
		tips: string;
		relatedFeature: string;
		moreGuides: string;
		backToGuides: string;
	};
	pages: Record<GuideSlug, GuideHeroCopy>;
};

export const guideCopyOverrides: Partial<
	Record<Locale, GuideLocaleCopyOverride>
> = {
	"zh-Hant": {
		hub: {
			eyebrow: "實用指南",
			title: "一次掌握多影片工作流程。",
			seoTitle: "iPhone 與 iPad 多影片播放器使用指南",
			metaDescription:
				"瞭解如何在 iPhone 與 iPad 同時播放多部影片、同步片段、逐格比較運動畫面、匯出分割畫面影片，以及播放 RTSP 與直播串流。",
			description:
				"針對開啟第二部影片前後最常遇到的問題，先提供快速解答，再說明完整設定方式與容易忽略的細節。",
			readLabel: "閱讀指南",
			homeLabel: "返回 Split Screen Player",
		},
		labels: {
			guides: "使用指南",
			directAnswer: "快速解答",
			steps: "操作步驟",
			tips: "提升使用效果",
			relatedFeature: "查看相關功能",
			moreGuides: "更多實用指南",
			backToGuides: "返回所有指南",
		},
		pages: {
			"play-multiple-videos-iphone-ipad": {
				eyebrow: "iPhone 與 iPad",
				title: "如何在 iPhone 或 iPad 同時播放 2 部以上影片",
				seoTitle: "iPhone、iPad 如何同時播放 2 部以上影片",
				metaDescription:
					"在 iPhone 或 iPad 同時播放 2 至 36 部影片。選擇並排或多畫面版面、加入影片，並透過同一組控制項操作播放。",
				summary:
					"將 2 至 36 部影片放入同一個直向或橫向版面，即可統一播放、暫停、拖曳進度、靜音或切換內容，不必在多個播放器之間來回操作。",
				answer:
					"可以。開啟 Split Screen Player，依照影片數量與方向選擇並排或多畫面版面，再為每個區塊加入一部影片。接著使用底部工具列，即可統一播放、暫停、拖曳進度、靜音或同步所有相容影片。",
			},
			"sync-videos-different-start-times": {
				eyebrow: "精準同步",
				title: "如何同步錄製時間不同的影片",
				seoTitle: "錄製時間不同的影片如何同步播放｜同步點教學",
				metaDescription:
					"使用同步點、逐格微調、同步預覽與同步鎖定，在 iPhone 或 iPad 對齊開始時間不同的影片。",
				summary:
					"不必強制所有影片使用相同時間碼；只要在共同動作、聲音或畫面提示出現的位置，為每個片段設定獨立同步點。",
				answer:
					"先將每部影片移到同一個實際事件，再把目前位置儲存為同步點。預覽對齊效果後開啟同步鎖定，App 便會保留片段之間的時間差；即使錄影相隔數分鐘才開始，連動播放與拖曳進度仍會讓相同動作保持同步。",
			},
			"compare-sports-videos-frame-by-frame": {
				eyebrow: "運動與動作分析",
				title: "如何逐格比較運動影片",
				seoTitle: "在 iPhone、iPad 逐格比較運動影片",
				metaDescription:
					"並排比較高爾夫揮桿、舞蹈、健身、跑步等運動影片，使用同步點、慢速播放、縮放與逐格控制找出動作差異。",
				summary:
					"將多段錄影對齊到動作的同一階段，再一起慢速播放、縮放並逐格前進，清楚比較姿勢、節奏與軌跡。",
				answer:
					"選擇能同時看清每位運動員、每次嘗試或不同機位的版面，在動作的相同階段設定同步點並開啟同步鎖定。之後使用全域逐格控制，所有相容影片便會一起前進或後退一格，方便比較姿勢、時機、軌跡與接觸瞬間。",
			},
			"export-split-screen-video": {
				eyebrow: "製作與分享",
				title: "如何將多部影片匯出成一支分割畫面影片",
				seoTitle: "如何將多部影片匯出成一支分割畫面影片",
				metaDescription:
					"將多影片版面匯出成一支可分享的分割畫面影片，自訂比例、解析度、影格率、位元率、裁切、速度、音訊、背景音樂與浮水印。",
				summary:
					"先完成畫面排列與同步，再將整個工作區轉製成一支影片，不必分別匯出每個片段。",
				answer:
					"版面調整完成後，從工具列開啟分割畫面匯出。設定輸出比例、解析度、影格率、位元率、畫面樣式、片段範圍與音訊混合，先預覽結果，再轉製並分享完成的影片檔。",
			},
			"multi-camera-review-ipad": {
				eyebrow: "多機位檢視",
				title: "如何在 iPad 同時檢視多個攝影機角度",
				seoTitle: "如何在 iPad 同時檢視多個攝影機角度",
				metaDescription:
					"在 iPad 同時檢視多個機位、版本與演出畫面，搭配自訂版面、同步播放、檢查點及外接螢幕進行比較。",
				summary:
					"將每個版本或機位保留在同一個大畫面中，對齊共同動作並使用全域控制檢查連戲、構圖與表演，不必反覆切換檔案。",
				answer:
					"先選擇能為重要機位保留足夠空間的 iPad 版面，將每個版本加入不同區塊，再透過同步點對齊共同動作。全域拖曳進度、輪流放大、檢查點與外接螢幕輸出，都能協助檢查構圖、節奏、表演與連戲。",
			},
			"play-rtsp-live-streams": {
				eyebrow: "直播來源",
				title: "如何在分割畫面播放 RTSP、HLS 與直播串流",
				seoTitle: "iPhone 如何分割畫面播放 RTSP、HLS 與直播串流",
				metaDescription:
					"在 iPhone 或 iPad 開啟 RTSP、HLS、M3U8、IPTV 與 Xtream 直播來源，將多個串流放入同一個分割畫面並儲存書籤。",
				summary:
					"每行加入一個支援的串流網址，或瀏覽 Xtream 頻道清單，再把直播來源與本機影片、圖片或參考資料放在同一個版面。",
				answer:
					"選擇直播來源，貼上 HLS、M3U8 或 RTSP 網址，或登入 Xtream 帳號後選取頻道。將每個來源加入不同版面區塊，再把可正常播放的網址與整個工作區儲存為書籤，方便下次快速開啟。",
			},
			"video-pdf-web-multitasking": {
				eyebrow: "學習與參考",
				title: "如何同時檢視影片、PDF、網頁與圖片",
				seoTitle: "在 iPad 同時檢視影片、PDF、網頁與圖片",
				metaDescription:
					"在 iPhone 或 iPad 建立多工工作區，讓影片、PDF 文件、網頁、圖片、直播串流與音樂同時顯示。",
				summary:
					"讓每個分割畫面區塊顯示不同類型的來源，把課程、文件、網頁、圖片與輔助音訊集中在同一個可重複使用的工作區。",
				answer:
					"先選擇版面並將主要影片加入一個區塊，再把 PDF、網頁、圖片檔案夾、直播串流或音樂加入其他區塊。每個區塊都會保留適合該內容的控制方式，也能使用書籤在下次一次還原完整配置。",
			},
		},
	},
	ja: {
		hub: {
			eyebrow: "実践ガイド",
			title: "複数動画をもっと便利に使う。",
			seoTitle: "iPhone・iPad向けマルチ動画プレーヤー活用ガイド",
			metaDescription:
				"iPhoneやiPadで複数の動画を同時再生する方法、動画の同期、スポーツ映像のコマ送り比較、分割画面動画の書き出し、ライブ配信の再生方法を紹介します。",
			description:
				"2本目の動画を開く前後に生まれる疑問を、まず短く回答し、そのあとに設定手順と見落としやすいポイントを詳しく説明します。",
			readLabel: "ガイドを読む",
			homeLabel: "Split Screen Playerに戻る",
		},
		labels: {
			guides: "ガイド",
			directAnswer: "まずは結論",
			steps: "手順",
			tips: "使いやすくするコツ",
			relatedFeature: "関連機能を見る",
			moreGuides: "その他の実践ガイド",
			backToGuides: "ガイド一覧に戻る",
		},
		pages: {
			"play-multiple-videos-iphone-ipad": {
				eyebrow: "iPhone・iPad",
				title: "iPhoneやiPadで2本以上の動画を同時再生する方法",
				seoTitle: "iPhone・iPadで2本以上の動画を同時再生する方法",
				metaDescription:
					"iPhoneやiPadで2〜36本の動画を同時再生。左右分割やマルチビューのレイアウトを選び、複数の動画をまとめて操作できます。",
				summary:
					"2〜36本の動画を1つの縦向き・横向きレイアウトに並べ、プレーヤーを行き来せずに再生、一時停止、シーク、ミュート、切り替えをまとめて操作できます。",
				answer:
					"できます。Split Screen Playerで動画の本数と向きに合うレイアウトを選び、各エリアに1本ずつ動画を追加します。画面下部のツールバーから、対応するすべての動画をまとめて再生、一時停止、シーク、ミュート、同期できます。",
			},
			"sync-videos-different-start-times": {
				eyebrow: "高精度な同期",
				title: "開始時間が違う動画を同期する方法",
				seoTitle: "開始時間が違う動画を同期する方法｜Sync Point活用ガイド",
				metaDescription:
					"Sync Point、コマ送り、プレビュー、Sync Lockを使い、撮影開始時間が異なる動画をiPhoneやiPadで正確に同期します。",
				summary:
					"同じタイムコードに無理やりそろえるのではなく、共通する動き、音、画面上の合図を基準に、動画ごとの同期位置を設定します。",
				answer:
					"各動画を同じ場面まで移動し、その位置をSync Pointとして保存します。プレビューでずれを確認してからSync Lockを有効にすると、動画間の時間差が保たれます。撮影開始が数分ずれていても、連動再生やシークで同じ瞬間をそろえられます。",
			},
			"compare-sports-videos-frame-by-frame": {
				eyebrow: "スポーツ・動作分析",
				title: "スポーツ動画をコマ送りで比較する方法",
				seoTitle: "iPhone・iPadでスポーツ動画をコマ送り比較",
				metaDescription:
					"ゴルフスイング、ダンス、フィットネス、ランニングなどの動画を並べ、同期、スロー再生、ズーム、コマ送りで動きの違いを比較します。",
				summary:
					"複数の動画を動きの同じ局面にそろえ、スロー再生、ズーム、コマ送りを連動させて、姿勢やタイミングの違いを確認します。",
				answer:
					"選手、試技、カメラアングルを同時に確認できるレイアウトを選び、動きの同じ局面にSync Pointを設定してSync Lockを有効にします。全体コマ送りを使えば、対応する動画が一斉に1コマずつ進み、姿勢、タイミング、軌道、接触の瞬間を比較しやすくなります。",
			},
			"export-split-screen-video": {
				eyebrow: "作成・共有",
				title: "複数の動画を1本の分割画面動画として書き出す方法",
				seoTitle: "複数の動画を1本の分割画面動画として書き出す方法",
				metaDescription:
					"複数動画のレイアウトを1本の分割画面動画に書き出し。画面比率、解像度、フレームレート、ビットレート、トリミング、速度、音声、BGM、透かしを設定できます。",
				summary:
					"映像の配置と同期を整えてから、個別のクリップではなく、ワークスペース全体を1本の動画として書き出します。",
				answer:
					"レイアウトを整えたら、ツールバーから分割画面の書き出しを開きます。出力比率、解像度、フレームレート、ビットレート、見た目、クリップ範囲、音声ミックスを設定し、プレビューを確認してから共有用の動画を書き出します。",
			},
			"multi-camera-review-ipad": {
				eyebrow: "マルチカメラレビュー",
				title: "iPadで複数のカメラアングルを同時に確認する方法",
				seoTitle: "iPadで複数のカメラアングルを同時に確認する方法",
				metaDescription:
					"iPadで複数のテイク、編集版、演技、カメラアングルを同時に確認。カスタムレイアウト、同期再生、チェックポイント、外部ディスプレイに対応します。",
				summary:
					"すべてのテイクやアングルを大きな画面に並べ、共通する動きを同期し、ファイルを切り替えずに構図、タイミング、つながりを確認します。",
				answer:
					"重要なアングルを大きく表示できるiPad向けレイアウトを選び、各テイクを別々のエリアに追加して、共通する動きをSync Pointでそろえます。全体シーク、順番に最大表示、チェックポイント、外部ディスプレイ出力を使うと、構図、タイミング、演技、つながりを確認しやすくなります。",
			},
			"play-rtsp-live-streams": {
				eyebrow: "ライブソース",
				title: "RTSP・HLSライブ配信を分割画面で再生する方法",
				seoTitle: "iPhoneでRTSP・HLSライブ配信を分割画面再生",
				metaDescription:
					"iPhoneやiPadでRTSP、HLS、M3U8、IPTV、Xtreamのライブソースを開き、複数の配信を1つの分割画面に並べて保存できます。",
				summary:
					"対応するストリームURLを1行ずつ追加するか、Xtreamのチャンネル一覧から選び、ライブ配信をローカル動画や資料と同じレイアウトに配置します。",
				answer:
					"ライブストリームを選び、HLS、M3U8、RTSPのURLを貼り付けるか、Xtreamアカウントにログインしてチャンネルを選択します。各ソースをレイアウトに追加し、再生できたURLとワークスペースをブックマークに保存すれば、次回すぐに開けます。",
			},
			"video-pdf-web-multitasking": {
				eyebrow: "学習・資料参照",
				title: "動画・PDF・Webページ・画像を同時に表示する方法",
				seoTitle: "iPadで動画・PDF・Webページ・画像を同時表示",
				metaDescription:
					"iPhoneやiPadに、動画、PDF、Webページ、画像、ライブ配信、音楽を同時に表示できるワークスペースを作ります。",
				summary:
					"分割画面の各エリアに異なる種類のソースを置き、レッスン動画、資料、Webページ、画像、補助音声を1つのワークスペースにまとめます。",
				answer:
					"レイアウトを選び、メイン動画を1つのエリアに追加します。残りのエリアにPDF、Webページ、画像フォルダ、ライブ配信、音楽を配置できます。各エリアには内容に合った操作方法が用意され、ブックマークを使えば次回も配置全体をまとめて復元できます。",
			},
		},
	},
	de: {
		hub: {
			eyebrow: "Praxis-Guides",
			title: "Mehr aus mehreren Videos machen.",
			seoTitle: "Anleitungen für mehrere Videos auf iPhone und iPad",
			metaDescription:
				"Erfahren Sie, wie Sie auf iPhone und iPad mehrere Videos gleichzeitig abspielen, Clips synchronisieren, Sportaufnahmen Bild für Bild vergleichen, Split-Screen-Videos exportieren und Live-Streams öffnen.",
			description:
				"Klare Anleitungen für typische Fragen rund um mehrere Videos: zuerst die kurze Antwort, anschließend die vollständige Einrichtung und wichtige Praxistipps.",
			readLabel: "Anleitung öffnen",
			homeLabel: "Zurück zu Split Screen Player",
		},
		labels: {
			guides: "Anleitungen",
			directAnswer: "Kurz erklärt",
			steps: "Schritt für Schritt",
			tips: "Tipps für bessere Ergebnisse",
			relatedFeature: "Passende Funktion ansehen",
			moreGuides: "Weitere Anleitungen",
			backToGuides: "Zurück zu allen Anleitungen",
		},
		pages: {
			"play-multiple-videos-iphone-ipad": {
				eyebrow: "iPhone und iPad",
				title: "So spielen Sie 2 oder mehr Videos gleichzeitig auf iPhone oder iPad ab",
				seoTitle: "Mehrere Videos gleichzeitig auf iPhone und iPad abspielen",
				metaDescription:
					"Spielen Sie auf iPhone oder iPad 2 bis 36 Videos gleichzeitig ab. Wählen Sie ein geteiltes oder mehrteiliges Layout und steuern Sie die Wiedergabe gemeinsam.",
				summary:
					"Ordnen Sie 2 bis 36 Videos in einem Layout im Hoch- oder Querformat an und steuern Sie Wiedergabe, Pause, Position, Ton und Videoauswahl, ohne zwischen einzelnen Playern zu wechseln.",
				answer:
					"Ja. Wählen Sie in Split Screen Player ein Layout, das zur Anzahl und Ausrichtung Ihrer Videos passt, und fügen Sie jedem Bereich ein Video hinzu. Über die untere Symbolleiste können Sie alle unterstützten Videos gemeinsam abspielen, pausieren, durchsuchen, stummschalten oder synchronisieren.",
			},
			"sync-videos-different-start-times": {
				eyebrow: "Präzise Synchronisierung",
				title: "Videos mit unterschiedlichen Startzeiten synchronisieren",
				seoTitle: "Videos mit unterschiedlichen Startzeiten synchronisieren",
				metaDescription:
					"Synchronisieren Sie Videos mit unterschiedlichen Aufnahmezeiten auf iPhone oder iPad mithilfe von Sync Points, Einzelbildsteuerung, Vorschau und Sync Lock.",
				summary:
					"Statt identische Zeitstempel zu erzwingen, erhält jeder Clip einen eigenen Anker für dieselbe Bewegung, dasselbe Geräusch oder denselben sichtbaren Hinweis.",
				answer:
					"Bewegen Sie jedes Video zu demselben tatsächlichen Ereignis und speichern Sie die jeweilige Position als Sync Point. Prüfen Sie die Ausrichtung in der Vorschau und aktivieren Sie anschließend Sync Lock. Die App behält den Zeitversatz zwischen den Clips bei, sodass zusammengehörige Momente auch bei versetzten Aufnahmebeginnen synchron bleiben.",
			},
			"compare-sports-videos-frame-by-frame": {
				eyebrow: "Sport und Bewegung",
				title: "Sportvideos Bild für Bild vergleichen",
				seoTitle: "Sportvideos auf iPhone und iPad Bild für Bild vergleichen",
				metaDescription:
					"Vergleichen Sie Golf, Tanz, Fitness, Lauftechnik und andere Bewegungen nebeneinander mit Sync Points, Zeitlupe, Zoom und Einzelbildsteuerung.",
				summary:
					"Richten Sie mehrere Aufnahmen an derselben Bewegungsphase aus und steuern Sie Zeitlupe, Zoom und Einzelbilder gemeinsam, um Unterschiede genau zu erkennen.",
				answer:
					"Wählen Sie ein Layout, in dem alle Personen, Versuche oder Kamerawinkel sichtbar bleiben. Setzen Sie Sync Points an derselben Bewegungsphase und aktivieren Sie Sync Lock. Mit der globalen Einzelbildsteuerung springen alle unterstützten Videos gemeinsam ein Bild vor oder zurück, sodass sich Haltung, Timing, Flugbahn und Kontakt leichter vergleichen lassen.",
			},
			"export-split-screen-video": {
				eyebrow: "Erstellen und teilen",
				title: "Mehrere Videos als ein Split-Screen-Video exportieren",
				seoTitle: "Mehrere Videos als ein Split-Screen-Video exportieren",
				metaDescription:
					"Exportieren Sie ein Layout mit mehreren Videos als eine teilbare Datei und bestimmen Sie Seitenverhältnis, Auflösung, Bildrate, Bitrate, Schnitt, Tempo, Ton, Musik und Wasserzeichen.",
				summary:
					"Ordnen und synchronisieren Sie die Ansichten und rendern Sie anschließend den gesamten Arbeitsbereich als ein Video statt als einzelne Clips.",
				answer:
					"Wenn das Layout fertig ist, öffnen Sie den Split-Screen-Export über die Symbolleiste. Legen Sie Seitenverhältnis, Auflösung, Bildrate, Bitrate, Darstellung, Clipbereiche und Audiomischung fest, prüfen Sie die Vorschau und exportieren Sie anschließend die fertige Videodatei.",
			},
			"multi-camera-review-ipad": {
				eyebrow: "Multi-Kamera-Sichtung",
				title: "Mehrere Kameraperspektiven auf dem iPad prüfen",
				seoTitle: "Mehrere Kameraperspektiven auf dem iPad prüfen",
				metaDescription:
					"Prüfen Sie Takes, Schnittfassungen, Darstellungen und Kameraperspektiven gemeinsam auf dem iPad – mit eigenen Layouts, synchroner Wiedergabe, Checkpoints und externem Bildschirm.",
				summary:
					"Behalten Sie alle Takes und Perspektiven auf einer großen Arbeitsfläche, synchronisieren Sie gemeinsame Aktionen und beurteilen Sie Anschluss, Bildaufbau und Timing, ohne ständig Dateien zu wechseln.",
				answer:
					"Wählen Sie ein iPad-Layout, das wichtigen Kameraperspektiven genügend Platz gibt, laden Sie jeden Take in einen eigenen Bereich und richten Sie gemeinsame Aktionen mit Sync Points aus. Globale Positionssteuerung, wechselnde Vollbildansicht, Checkpoints und die Ausgabe auf einen externen Bildschirm erleichtern die Prüfung von Bildaufbau, Timing, Darstellung und Anschluss.",
			},
			"play-rtsp-live-streams": {
				eyebrow: "Live-Quellen",
				title: "RTSP-, HLS- und Live-Streams im Split Screen wiedergeben",
				seoTitle: "RTSP-, HLS- und Live-Streams auf dem iPhone im Split Screen",
				metaDescription:
					"Öffnen Sie RTSP-, HLS-, M3U8-, IPTV- und Xtream-Quellen auf iPhone oder iPad, ordnen Sie mehrere Streams in einem Layout an und speichern Sie die Einrichtung als Lesezeichen.",
				summary:
					"Fügen Sie pro Zeile eine unterstützte Stream-URL ein oder wählen Sie einen Xtream-Kanal und kombinieren Sie Live-Quellen mit lokalen Videos und Referenzmaterial.",
				answer:
					"Wählen Sie eine Live-Quelle und fügen Sie eine HLS-, M3U8- oder RTSP-URL ein. Alternativ melden Sie sich bei einem Xtream-Konto an und wählen einen Kanal. Platzieren Sie jede Quelle in einem Layoutbereich und speichern Sie funktionierende Adressen sowie den Arbeitsbereich als Lesezeichen.",
			},
			"video-pdf-web-multitasking": {
				eyebrow: "Lernen und Referenz",
				title: "Video, PDF, Webseiten und Bilder gleichzeitig anzeigen",
				seoTitle: "Video, PDF, Webseiten und Bilder gleichzeitig auf dem iPad",
				metaDescription:
					"Erstellen Sie auf iPhone oder iPad einen Arbeitsbereich, in dem Video, PDF-Dokumente, Webseiten, Bilder, Live-Streams und Musik gleichzeitig sichtbar bleiben.",
				summary:
					"Nutzen Sie jeden Split-Screen-Bereich für einen anderen Quellentyp und halten Sie Lektion, Dokument, Browser, Bilder und Begleitton in einem wiederverwendbaren Arbeitsbereich zusammen.",
				answer:
					"Wählen Sie ein Layout und fügen Sie das Hauptvideo in einen Bereich ein. In den übrigen Bereichen können Sie PDF-Dateien, Webseiten, Bildordner, Live-Streams oder Musik öffnen. Jeder Bereich behält die passenden Bedienelemente; mit einem Lesezeichen lässt sich die gesamte Anordnung später wiederherstellen.",
			},
		},
	},
	es: {
		hub: {
			eyebrow: "Guías prácticas",
			title: "Saca más partido a varios vídeos.",
			seoTitle: "Guías para reproducir varios vídeos en iPhone y iPad",
			metaDescription:
				"Aprende a reproducir varios vídeos, sincronizar clips, comparar deporte fotograma a fotograma, exportar vídeos en pantalla dividida y abrir emisiones en directo en iPhone y iPad.",
			description:
				"Respuestas claras a las dudas más habituales al trabajar con varios vídeos: primero la solución rápida y después la configuración completa y los detalles importantes.",
			readLabel: "Leer la guía",
			homeLabel: "Volver a Split Screen Player",
		},
		labels: {
			guides: "Guías",
			directAnswer: "Respuesta rápida",
			steps: "Paso a paso",
			tips: "Consejos para mejorar el resultado",
			relatedFeature: "Ver la función relacionada",
			moreGuides: "Más guías prácticas",
			backToGuides: "Volver a todas las guías",
		},
		pages: {
			"play-multiple-videos-iphone-ipad": {
				eyebrow: "iPhone y iPad",
				title: "Cómo reproducir 2 o más vídeos a la vez en iPhone o iPad",
				seoTitle: "Cómo reproducir varios vídeos a la vez en iPhone y iPad",
				metaDescription:
					"Reproduce entre 2 y 36 vídeos a la vez en iPhone o iPad. Elige un diseño en paralelo o multivista, añade los vídeos y controla la reproducción de forma conjunta.",
				summary:
					"Coloca entre 2 y 36 vídeos en un diseño vertical u horizontal y controla la reproducción, la pausa, la posición, el sonido y el cambio de contenido sin saltar entre reproductores.",
				answer:
					"Sí. En Split Screen Player, elige un diseño adecuado para el número y la orientación de los vídeos y añade uno a cada región. Desde la barra inferior puedes reproducir, pausar, avanzar, silenciar o sincronizar de forma conjunta todos los vídeos compatibles.",
			},
			"sync-videos-different-start-times": {
				eyebrow: "Sincronización precisa",
				title: "Cómo sincronizar vídeos que empezaron en momentos distintos",
				seoTitle: "Cómo sincronizar vídeos con distintos tiempos de inicio",
				metaDescription:
					"Alinea en iPhone o iPad vídeos grabados en momentos distintos mediante puntos de sincronización, avance fotograma a fotograma, vista previa y Sync Lock.",
				summary:
					"En lugar de imponer el mismo código de tiempo, asigna a cada clip su propio punto de referencia en una acción, un sonido o una señal visual común.",
				answer:
					"Lleva cada vídeo al mismo momento de la acción y guarda esa posición como Sync Point. Comprueba la alineación en la vista previa y activa Sync Lock. La aplicación conservará el desfase entre los clips, por lo que la reproducción y el desplazamiento vinculados mantendrán juntos los momentos equivalentes aunque las grabaciones comenzaran con varios minutos de diferencia.",
			},
			"compare-sports-videos-frame-by-frame": {
				eyebrow: "Deporte y movimiento",
				title: "Cómo comparar vídeos deportivos fotograma a fotograma",
				seoTitle: "Comparar vídeos deportivos fotograma a fotograma en iPhone y iPad",
				metaDescription:
					"Compara vídeos de golf, baile, fitness, carrera y otros deportes en paralelo mediante sincronización, cámara lenta, zoom y avance fotograma a fotograma.",
				summary:
					"Alinea varias grabaciones en la misma fase del movimiento y controla juntas la cámara lenta, el zoom y el avance fotograma a fotograma para detectar diferencias.",
				answer:
					"Elige un diseño que mantenga visibles a todos los deportistas, intentos o ángulos de cámara. Coloca Sync Points en la misma fase del movimiento y activa Sync Lock. El avance global hará que todos los vídeos compatibles se desplacen juntos un fotograma hacia delante o hacia atrás para comparar postura, ritmo, trayectoria y contacto.",
			},
			"export-split-screen-video": {
				eyebrow: "Crear y compartir",
				title: "Cómo exportar varios vídeos en un solo vídeo de pantalla dividida",
				seoTitle: "Cómo exportar varios vídeos en un solo vídeo de pantalla dividida",
				metaDescription:
					"Convierte un diseño con varios vídeos en un único archivo para compartir y ajusta la relación de aspecto, resolución, fotogramas por segundo, tasa de bits, recorte, velocidad, audio, música y marca de agua.",
				summary:
					"Organiza y sincroniza las vistas y, después, renderiza todo el espacio de trabajo como un solo vídeo en lugar de exportar clips por separado.",
				answer:
					"Cuando el diseño esté listo, abre la exportación de pantalla dividida desde la barra de herramientas. Elige la relación de aspecto, resolución, frecuencia de fotogramas, tasa de bits, tratamiento visual, intervalos de los clips y mezcla de audio, revisa la vista previa y exporta el archivo final.",
			},
			"multi-camera-review-ipad": {
				eyebrow: "Revisión multicámara",
				title: "Cómo revisar varios ángulos de cámara en el iPad",
				seoTitle: "Cómo revisar varios ángulos de cámara en el iPad",
				metaDescription:
					"Revisa tomas, montajes, interpretaciones y ángulos de cámara a la vez en el iPad mediante diseños personalizados, reproducción sincronizada, puntos de control y una pantalla externa.",
				summary:
					"Mantén todas las tomas y ángulos visibles en un lienzo amplio, sincroniza la acción común y evalúa continuidad, encuadre y ritmo sin cambiar de archivo constantemente.",
				answer:
					"Elige un diseño para iPad que reserve suficiente espacio a los ángulos importantes, carga cada toma en una región y alinea la acción común mediante Sync Points. El desplazamiento global, la ampliación sucesiva, los puntos de control y la salida a una pantalla externa facilitan la revisión del encuadre, el ritmo, la interpretación y la continuidad.",
			},
			"play-rtsp-live-streams": {
				eyebrow: "Fuentes en directo",
				title: "Cómo reproducir RTSP, HLS y emisiones en directo en pantalla dividida",
				seoTitle: "RTSP, HLS y emisiones en directo en pantalla dividida en iPhone",
				metaDescription:
					"Abre fuentes RTSP, HLS, M3U8, IPTV y Xtream en iPhone o iPad, coloca varias emisiones en un diseño de pantalla dividida y guarda la configuración.",
				summary:
					"Añade una URL de streaming compatible por línea o elige un canal de Xtream y combina emisiones en directo con vídeos locales y material de referencia.",
				answer:
					"Elige una fuente en directo y pega una URL HLS, M3U8 o RTSP. También puedes iniciar sesión en una cuenta de Xtream y seleccionar un canal. Añade cada fuente a una región del diseño y guarda como marcadores las direcciones que funcionan y el espacio de trabajo completo.",
			},
			"video-pdf-web-multitasking": {
				eyebrow: "Aprendizaje y consulta",
				title: "Cómo ver vídeos, PDF, páginas web e imágenes a la vez",
				seoTitle: "Ver vídeos, PDF, páginas web e imágenes a la vez en el iPad",
				metaDescription:
					"Crea en iPhone o iPad un espacio de trabajo que mantenga visibles a la vez vídeos, documentos PDF, páginas web, imágenes, emisiones en directo y música.",
				summary:
					"Utiliza cada región de la pantalla dividida para un tipo de fuente distinto y reúne la clase, los documentos, el navegador, las imágenes y el audio de apoyo en un mismo espacio reutilizable.",
				answer:
					"Elige un diseño y añade el vídeo principal a una región. En las demás puedes colocar un PDF, una página web, una carpeta de imágenes, una emisión en directo o música. Cada región mantiene los controles adecuados para su contenido y un marcador permite restaurar más tarde toda la configuración.",
			},
		},
	},
	fr: {
		hub: {
			eyebrow: "Guides pratiques",
			title: "Allez plus loin avec plusieurs vidéos.",
			seoTitle: "Guides pour lire plusieurs vidéos sur iPhone et iPad",
			metaDescription:
				"Découvrez comment lire plusieurs vidéos, synchroniser des clips, comparer des mouvements image par image, exporter une vidéo en écran partagé et ouvrir des flux en direct sur iPhone et iPad.",
			description:
				"Des réponses claires aux questions courantes sur les workflows multividéos : d’abord la solution rapide, puis la configuration complète et les détails importants.",
			readLabel: "Lire le guide",
			homeLabel: "Retour à Split Screen Player",
		},
		labels: {
			guides: "Guides",
			directAnswer: "Réponse rapide",
			steps: "Étapes",
			tips: "Conseils pour de meilleurs résultats",
			relatedFeature: "Voir la fonctionnalité associée",
			moreGuides: "Autres guides pratiques",
			backToGuides: "Retour à tous les guides",
		},
		pages: {
			"play-multiple-videos-iphone-ipad": {
				eyebrow: "iPhone et iPad",
				title: "Comment lire 2 vidéos ou plus en même temps sur iPhone ou iPad",
				seoTitle: "Lire plusieurs vidéos en même temps sur iPhone et iPad",
				metaDescription:
					"Lisez simultanément 2 à 36 vidéos sur iPhone ou iPad. Choisissez une disposition côte à côte ou multivue, ajoutez les vidéos et contrôlez leur lecture ensemble.",
				summary:
					"Placez 2 à 36 vidéos dans une disposition verticale ou horizontale, puis contrôlez la lecture, la pause, la position, le son et le changement de contenu sans passer d’un lecteur à l’autre.",
				answer:
					"Oui. Dans Split Screen Player, choisissez une disposition adaptée au nombre et à l’orientation des vidéos, puis ajoutez une vidéo à chaque zone. La barre d’outils inférieure permet de lire, mettre en pause, parcourir, couper le son ou synchroniser ensemble toutes les vidéos compatibles.",
			},
			"sync-videos-different-start-times": {
				eyebrow: "Synchronisation précise",
				title: "Comment synchroniser des vidéos qui ne commencent pas au même moment",
				seoTitle: "Synchroniser des vidéos avec des heures de début différentes",
				metaDescription:
					"Alignez sur iPhone ou iPad des vidéos enregistrées à des moments différents grâce aux Sync Points, à l’avance image par image, à l’aperçu et à Sync Lock.",
				summary:
					"Au lieu d’imposer le même code temporel, attribuez à chaque clip son propre repère sur une action, un son ou un indice visuel commun.",
				answer:
					"Placez chaque vidéo sur le même moment de l’action et enregistrez cette position comme Sync Point. Vérifiez l’alignement dans l’aperçu, puis activez Sync Lock. L’application conserve le décalage entre les clips afin que la lecture et la navigation liées maintiennent les moments correspondants ensemble, même si les enregistrements ont commencé à plusieurs minutes d’intervalle.",
			},
			"compare-sports-videos-frame-by-frame": {
				eyebrow: "Sport et mouvement",
				title: "Comment comparer des vidéos de sport image par image",
				seoTitle: "Comparer des vidéos de sport image par image sur iPhone et iPad",
				metaDescription:
					"Comparez côte à côte des vidéos de golf, danse, fitness, course et autres mouvements grâce à la synchronisation, au ralenti, au zoom et à l’avance image par image.",
				summary:
					"Alignez plusieurs enregistrements sur la même phase du mouvement, puis contrôlez ensemble le ralenti, le zoom et l’avance image par image pour repérer les différences.",
				answer:
					"Choisissez une disposition qui garde visibles tous les athlètes, essais ou angles de caméra. Placez les Sync Points sur la même phase du mouvement et activez Sync Lock. L’avance globale déplace alors toutes les vidéos compatibles d’une image vers l’avant ou l’arrière, ce qui facilite la comparaison de la posture, du timing, de la trajectoire et du contact.",
			},
			"export-split-screen-video": {
				eyebrow: "Créer et partager",
				title: "Comment exporter plusieurs vidéos en une seule vidéo en écran partagé",
				seoTitle: "Exporter plusieurs vidéos en une seule vidéo en écran partagé",
				metaDescription:
					"Transformez une disposition multividéo en un fichier partageable et réglez le format, la résolution, la fréquence d’images, le débit, le montage, la vitesse, l’audio, la musique et le filigrane.",
				summary:
					"Organisez et synchronisez les vues, puis exportez l’espace de travail complet sous la forme d’une seule vidéo plutôt que de clips séparés.",
				answer:
					"Lorsque la disposition est prête, ouvrez l’exportation en écran partagé depuis la barre d’outils. Choisissez le format, la résolution, la fréquence d’images, le débit, le rendu visuel, les plages des clips et le mixage audio, vérifiez l’aperçu, puis exportez le fichier final.",
			},
			"multi-camera-review-ipad": {
				eyebrow: "Revue multicaméra",
				title: "Comment examiner plusieurs angles de caméra sur iPad",
				seoTitle: "Examiner plusieurs angles de caméra sur iPad",
				metaDescription:
					"Examinez simultanément des prises, montages, performances et angles de caméra sur iPad avec des dispositions personnalisées, la lecture synchronisée, des repères et un écran externe.",
				summary:
					"Gardez toutes les prises et tous les angles visibles sur un grand espace, synchronisez l’action commune et évaluez le raccord, le cadrage et le rythme sans changer constamment de fichier.",
				answer:
					"Choisissez une disposition iPad qui accorde assez de place aux angles importants, chargez chaque prise dans une zone et alignez l’action commune avec des Sync Points. La navigation globale, l’agrandissement successif, les repères et la sortie sur écran externe facilitent l’examen du cadrage, du timing, de la performance et des raccords.",
			},
			"play-rtsp-live-streams": {
				eyebrow: "Sources en direct",
				title: "Comment lire des flux RTSP, HLS et en direct en écran partagé",
				seoTitle: "Lire des flux RTSP, HLS et en direct en écran partagé sur iPhone",
				metaDescription:
					"Ouvrez des sources RTSP, HLS, M3U8, IPTV et Xtream sur iPhone ou iPad, placez plusieurs flux dans une disposition en écran partagé et enregistrez la configuration.",
				summary:
					"Ajoutez une URL de flux compatible par ligne ou choisissez une chaîne Xtream, puis combinez les sources en direct avec des vidéos locales et des documents de référence.",
				answer:
					"Choisissez une source en direct et collez une URL HLS, M3U8 ou RTSP. Vous pouvez aussi vous connecter à un compte Xtream et sélectionner une chaîne. Ajoutez chaque source à une zone de la disposition, puis enregistrez les adresses fonctionnelles et l’espace de travail complet dans les favoris.",
			},
			"video-pdf-web-multitasking": {
				eyebrow: "Apprentissage et références",
				title: "Comment afficher ensemble vidéos, PDF, pages Web et images",
				seoTitle: "Afficher vidéos, PDF, pages Web et images ensemble sur iPad",
				metaDescription:
					"Créez sur iPhone ou iPad un espace de travail où vidéos, documents PDF, pages Web, images, flux en direct et musique restent visibles simultanément.",
				summary:
					"Utilisez chaque zone de l’écran partagé pour un type de source différent et réunissez le cours, les documents, le navigateur, les images et l’audio d’accompagnement dans un même espace réutilisable.",
				answer:
					"Choisissez une disposition et ajoutez la vidéo principale dans une zone. Placez dans les autres un PDF, une page Web, un dossier d’images, un flux en direct ou de la musique. Chaque zone conserve les commandes adaptées à son contenu et un favori permet de restaurer ensuite l’ensemble de la configuration.",
			},
		},
	},
	"pt-BR": {
		hub: {
			eyebrow: "Guias práticos",
			title: "Aproveite melhor vários vídeos.",
			seoTitle: "Guias para reproduzir vários vídeos no iPhone e iPad",
			metaDescription:
				"Aprenda a reproduzir vários vídeos, sincronizar clipes, comparar esportes quadro a quadro, exportar vídeos em tela dividida e abrir transmissões ao vivo no iPhone e iPad.",
			description:
				"Respostas claras para as dúvidas mais comuns ao trabalhar com vários vídeos: primeiro a solução rápida e depois a configuração completa e os detalhes importantes.",
			readLabel: "Ler o guia",
			homeLabel: "Voltar ao Split Screen Player",
		},
		labels: {
			guides: "Guias",
			directAnswer: "Resposta rápida",
			steps: "Passo a passo",
			tips: "Dicas para melhorar o resultado",
			relatedFeature: "Ver o recurso relacionado",
			moreGuides: "Mais guias práticos",
			backToGuides: "Voltar a todos os guias",
		},
		pages: {
			"play-multiple-videos-iphone-ipad": {
				eyebrow: "iPhone e iPad",
				title: "Como reproduzir 2 ou mais vídeos ao mesmo tempo no iPhone ou iPad",
				seoTitle: "Como reproduzir vários vídeos ao mesmo tempo no iPhone e iPad",
				metaDescription:
					"Reproduza de 2 a 36 vídeos ao mesmo tempo no iPhone ou iPad. Escolha um layout lado a lado ou multivisualização, adicione os vídeos e controle a reprodução em conjunto.",
				summary:
					"Coloque de 2 a 36 vídeos em um layout vertical ou horizontal e controle reprodução, pausa, posição, som e troca de conteúdo sem alternar entre players separados.",
				answer:
					"Sim. No Split Screen Player, escolha um layout adequado à quantidade e à orientação dos vídeos e adicione um vídeo a cada região. Pela barra inferior, você pode reproduzir, pausar, avançar, silenciar ou sincronizar em conjunto todos os vídeos compatíveis.",
			},
			"sync-videos-different-start-times": {
				eyebrow: "Sincronização precisa",
				title: "Como sincronizar vídeos que começaram em momentos diferentes",
				seoTitle: "Como sincronizar vídeos com horários de início diferentes",
				metaDescription:
					"Alinhe no iPhone ou iPad vídeos gravados em momentos diferentes usando Sync Points, avanço quadro a quadro, prévia e Sync Lock.",
				summary:
					"Em vez de forçar o mesmo código de tempo, defina para cada clipe um ponto de referência próprio em uma ação, um som ou uma indicação visual comum.",
				answer:
					"Leve cada vídeo ao mesmo momento da ação e salve essa posição como Sync Point. Confira o alinhamento na prévia e ative o Sync Lock. O app manterá a diferença de tempo entre os clipes, para que a reprodução e o avanço vinculados preservem os momentos correspondentes mesmo quando as gravações começaram com vários minutos de diferença.",
			},
			"compare-sports-videos-frame-by-frame": {
				eyebrow: "Esporte e movimento",
				title: "Como comparar vídeos esportivos quadro a quadro",
				seoTitle: "Comparar vídeos esportivos quadro a quadro no iPhone e iPad",
				metaDescription:
					"Compare vídeos de golfe, dança, exercícios, corrida e outros esportes lado a lado usando sincronização, câmera lenta, zoom e avanço quadro a quadro.",
				summary:
					"Alinhe várias gravações na mesma fase do movimento e controle em conjunto a câmera lenta, o zoom e o avanço quadro a quadro para identificar diferenças.",
				answer:
					"Escolha um layout que mantenha visíveis todos os atletas, tentativas ou ângulos de câmera. Defina Sync Points na mesma fase do movimento e ative o Sync Lock. O avanço global moverá todos os vídeos compatíveis juntos, um quadro para a frente ou para trás, facilitando a comparação de postura, ritmo, trajetória e contato.",
			},
			"export-split-screen-video": {
				eyebrow: "Criar e compartilhar",
				title: "Como exportar vários vídeos em um único vídeo de tela dividida",
				seoTitle: "Como exportar vários vídeos em um único vídeo de tela dividida",
				metaDescription:
					"Transforme um layout com vários vídeos em um único arquivo para compartilhar e ajuste proporção, resolução, taxa de quadros, bitrate, corte, velocidade, áudio, música e marca-d’água.",
				summary:
					"Organize e sincronize as visualizações e depois renderize todo o espaço de trabalho como um único vídeo, em vez de exportar clipes separados.",
				answer:
					"Quando o layout estiver pronto, abra a exportação de tela dividida pela barra de ferramentas. Escolha a proporção, resolução, taxa de quadros, bitrate, tratamento visual, intervalos dos clipes e mixagem de áudio, confira a prévia e exporte o arquivo final.",
			},
			"multi-camera-review-ipad": {
				eyebrow: "Revisão multicâmera",
				title: "Como revisar vários ângulos de câmera no iPad",
				seoTitle: "Como revisar vários ângulos de câmera no iPad",
				metaDescription:
					"Revise tomadas, edições, atuações e ângulos de câmera ao mesmo tempo no iPad com layouts personalizados, reprodução sincronizada, checkpoints e tela externa.",
				summary:
					"Mantenha todas as tomadas e ângulos visíveis em uma tela ampla, sincronize a ação comum e avalie continuidade, enquadramento e ritmo sem trocar de arquivo o tempo todo.",
				answer:
					"Escolha um layout de iPad que reserve espaço suficiente para os ângulos importantes, carregue cada tomada em uma região e alinhe a ação comum com Sync Points. O avanço global, a ampliação em sequência, os checkpoints e a saída para uma tela externa facilitam a revisão de enquadramento, ritmo, atuação e continuidade.",
			},
			"play-rtsp-live-streams": {
				eyebrow: "Fontes ao vivo",
				title: "Como reproduzir RTSP, HLS e transmissões ao vivo em tela dividida",
				seoTitle: "RTSP, HLS e transmissões ao vivo em tela dividida no iPhone",
				metaDescription:
					"Abra fontes RTSP, HLS, M3U8, IPTV e Xtream no iPhone ou iPad, coloque várias transmissões em um layout de tela dividida e salve a configuração.",
				summary:
					"Adicione uma URL de streaming compatível por linha ou escolha um canal do Xtream e combine transmissões ao vivo com vídeos locais e materiais de referência.",
				answer:
					"Escolha uma fonte ao vivo e cole uma URL HLS, M3U8 ou RTSP. Você também pode entrar em uma conta Xtream e selecionar um canal. Adicione cada fonte a uma região do layout e salve como favoritos os endereços que funcionam e todo o espaço de trabalho.",
			},
			"video-pdf-web-multitasking": {
				eyebrow: "Aprendizado e referência",
				title: "Como ver vídeos, PDF, páginas da web e imagens ao mesmo tempo",
				seoTitle: "Ver vídeos, PDF, páginas da web e imagens ao mesmo tempo no iPad",
				metaDescription:
					"Crie no iPhone ou iPad um espaço de trabalho que mantenha visíveis ao mesmo tempo vídeos, documentos PDF, páginas da web, imagens, transmissões ao vivo e música.",
				summary:
					"Use cada região da tela dividida para um tipo de fonte diferente e reúna a aula, os documentos, o navegador, as imagens e o áudio de apoio em um único espaço reutilizável.",
				answer:
					"Escolha um layout e adicione o vídeo principal a uma região. Nas outras, coloque um PDF, uma página da web, uma pasta de imagens, uma transmissão ao vivo ou música. Cada região mantém os controles adequados ao conteúdo, e um favorito permite restaurar depois toda a configuração.",
			},
		},
	},
};

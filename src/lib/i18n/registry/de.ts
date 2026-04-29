const registryDe: Record<string, string> = {
	// ── Kategorien ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'Formatieren, validieren, minifizieren, vergleichen und konvertieren Sie JSON-Daten. Jedes Tool läuft in Ihrem Browser mit Echtzeit-Fehlererkennung und Baumvisualisierung.',
	'category.json.primary_keyword': 'json tools',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		'Formatieren, validieren und konvertieren Sie XML-Dokumente. Unterstützt Pretty-Printing mit konfigurierbarer Einrückung und Konvertierung in JSON oder CSV.',
	'category.xml.primary_keyword': 'xml tools',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'Formatieren, validieren und konvertieren Sie YAML-Dateien. Bidirektionale Konvertierung mit JSON und Syntaxvalidierung mit präzisen Fehlerangaben.',
	'category.yaml.primary_keyword': 'yaml tools',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'Analysieren, formatieren und konvertieren Sie CSV-Daten. Konvertieren Sie zwischen CSV, JSON und anderen tabellarischen Formaten mit Unterstützung für benutzerdefinierte Trennzeichen.',
	'category.csv.primary_keyword': 'csv tools',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formatieren, validieren und konvertieren Sie TOML-Dateien. Konvertieren Sie TOML sicher in JSON und YAML.',
	'category.toml.primary_keyword': 'toml tools',
	'category.text.display_name': 'Text',
	'category.text.description':
		'Text analysieren, zählen und aufbereiten. Messen Sie Wörter, Zeichen, Struktur und Lesezeit direkt im Browser.',
	'category.text.primary_keyword': 'text tools',
	'category.ai.display_name': 'KI',
	'category.ai.description':
		'KI-Tokens zählen, LLM-Kosten schätzen, Prompts komprimieren und produktionsreife System-Prompts für GPT-4o, Claude, Llama, Gemini und Mistral erstellen, ohne Text hochzuladen.',
	'category.ai.primary_keyword': 'ki tools',
	// ── KI Tools ────────────────────────────────────────────────────────────
	'tool.ai-token-counter.display_name': 'LLM-Token-Zähler',
	'tool.ai-token-counter.tagline': 'Tokens zählen und Eingabekosten für führende LLMs schätzen',
	'tool.ai-token-counter.description':
		'Fügen Sie Prompts, Dokumente oder Transkripte ein, zählen Sie GPT-4o-Tokens exakt und schätzen Sie Claude-, Llama-3-, Gemini- und Mistral-Nutzung mit Kosten und Tokens pro Wort.',
	'tool.ai-token-counter.primary_keyword': 'llm token zähler',
	'tool.ai-token-counter.meta_title': 'LLM-Token-Zähler für GPT-4o & Claude — fmtly.dev',
	'tool.ai-token-counter.meta_description':
		'Zählen Sie GPT-4o-Tokens und schätzen Sie Claude, Llama 3, Gemini und Mistral. Token-pro-Wort-Verhältnis und Kosten im Browser.',
	'tool.ai-token-counter.operation': 'Tokens zählen',
	'tool.ai-token-counter.faq.0.question': 'Ist die Token-Zählung für jedes Modell exakt?',
	'tool.ai-token-counter.faq.0.answer':
		'GPT-4o nutzt einen echten Tokenizer, der bei Bedarf geladen wird. Claude, Llama 3, Gemini und Mistral verwenden kalibrierte Browser-Schätzungen, da ihre exakten Produktionstokenizer nicht identisch für lokale Nutzung bereitstehen.',
	'tool.ai-token-counter.faq.1.question': 'Verlässt mein Prompt den Browser?',
	'tool.ai-token-counter.faq.1.answer':
		'Nein. Text wird lokal im Browser verarbeitet; große Eingaben laufen in einem Web Worker, damit die Oberfläche reaktionsfähig bleibt.',
	'tool.ai-token-counter.faq.2.question': 'Wie werden Kosten geschätzt?',
	'tool.ai-token-counter.faq.2.answer':
		'Die Kosten basieren auf dem ausgewählten Modellprofil und dem Preis pro Million Eingabetokens. Die Schätzung dient Planung und Vergleich, nicht der Rechnungsprüfung.',
	'tool.ai-token-counter.faq.3.question':
		'Kann ich die Token-Dichte zwischen Modellen vergleichen?',
	'tool.ai-token-counter.faq.3.answer':
		'Ja. Die Vergleichstabelle zeigt Tokenzahl, Tokens pro Wort und geschätzte Eingabekosten für jede unterstützte Modellfamilie.',
	'tool.ai-token-counter.use_case.0': 'Promptgröße vor einem LLM-API-Aufruf abschätzen',
	'tool.ai-token-counter.use_case.1':
		'Tokenkosten zwischen GPT-4o, Claude, Llama, Gemini und Mistral vergleichen',
	'tool.ai-token-counter.use_case.2': 'Prüfen, ob lange Dokumente in ein Kontextfenster passen',
	'tool.ai-token-counter.use_case.3':
		'Token-pro-Wort-Dichte von Prompts, Datensätzen und Transkripten messen',

	'tool.ai-token-optimizer.display_name': 'Prompt-Token-Optimierer',
	'tool.ai-token-optimizer.tagline':
		'Prompts kürzen und Absicht sowie Ausgabeanforderungen erhalten',
	'tool.ai-token-optimizer.description':
		'Komprimieren Sie KI-Prompts durch Entfernen von Füllwörtern, Normalisieren von Leerraum, Vereinfachen von Markdown und optionales Abkürzen häufiger Muster mit Token-Ersparnis.',
	'tool.ai-token-optimizer.primary_keyword': 'prompt token optimizer',
	'tool.ai-token-optimizer.meta_title': 'Prompt-Token-Optimierer — KI-Prompts kürzen | fmtly.dev',
	'tool.ai-token-optimizer.meta_description':
		'Kürzen Sie KI-Prompts ohne Bedeutungsverlust. Füllwörter entfernen, Leerraum komprimieren, Tokens vorher/nachher und Kostenersparnis sehen.',
	'tool.ai-token-optimizer.operation': 'Prompt optimieren',
	'tool.ai-token-optimizer.faq.0.question': 'Schreibt der Optimierer meinen Prompt kreativ um?',
	'tool.ai-token-optimizer.faq.0.answer':
		'Nein. Er wendet konservative, nachvollziehbare Reduktionen wie Füllwortentfernung, Leerraumkompression und Markdown-Bereinigung an, damit die Absicht erhalten bleibt.',
	'tool.ai-token-optimizer.faq.1.question': 'Kann ich steuern, was optimiert wird?',
	'tool.ai-token-optimizer.faq.1.answer':
		'Ja. Füllwortentfernung, Leerraumkompression, Markdown-Vereinfachung und bekannte Abkürzungen lassen sich getrennt aktivieren.',
	'tool.ai-token-optimizer.faq.2.question': 'Wie werden Token-Ersparnisse berechnet?',
	'tool.ai-token-optimizer.faq.2.answer':
		'Das Tool zählt den ursprünglichen und den optimierten Prompt mit dem ausgewählten Modellprofil und zeigt gesparte Tokens, Prozentersparnis und geschätzte Kostensenkung.',
	'tool.ai-token-optimizer.faq.3.question': 'Ist es für lange Prompts geeignet?',
	'tool.ai-token-optimizer.faq.3.answer':
		'Große Prompts über 500KB werden in einem Web Worker verarbeitet, die Oberfläche bleibt reaktionsfähig und der gesamte Text bleibt lokal.',
	'tool.ai-token-optimizer.use_case.0': 'API-Kosten bei wiederverwendeten System-Prompts senken',
	'tool.ai-token-optimizer.use_case.1':
		'Prompts ohne Bedeutungsänderung in kleinere Kontextfenster einpassen',
	'tool.ai-token-optimizer.use_case.2': 'Prompt-Vorlagen vor dem Teilen im Team bereinigen',
	'tool.ai-token-optimizer.use_case.3':
		'Tokenbudgets vor und nach der Prompt-Optimierung vergleichen',
	'tool.ai-system-prompt-builder.display_name': 'System-Prompt-Builder',
	'tool.ai-system-prompt-builder.tagline':
		'Produktionsreife System-Prompts aus strukturierten Vorlagen erstellen',
	'tool.ai-system-prompt-builder.description':
		'Erstellen Sie hochwertige System-Prompts für Coding-Assistenten, Datenanalysten, Übersetzer und Support-Agenten mit strukturierten Abschnitten, Sicherheitsgrenzen, Qualitätschecks und OpenAI-JSON-Export.',
	'tool.ai-system-prompt-builder.primary_keyword': 'system prompt builder',
	'tool.ai-system-prompt-builder.meta_title':
		'System-Prompt-Builder für KI-Assistenten — fmtly.dev',
	'tool.ai-system-prompt-builder.meta_description':
		'Erstellen Sie klare System-Prompts für KI-Assistenten im Browser. Nutzen Sie Vorlagen, Einschränkungen, Beispiele, Sicherheitsregeln, Qualitätschecks und Export als Text oder OpenAI-JSON.',
	'tool.ai-system-prompt-builder.operation': 'Prompt erstellen',
	'tool.ai-system-prompt-builder.faq.0.question': 'Was ist ein System-Prompt?',
	'tool.ai-system-prompt-builder.faq.0.answer':
		'Ein System-Prompt definiert Rolle, Ziel, Arbeitskontext, Grenzen und Ausgaberegeln des Assistenten, bevor die Nutzernachricht verarbeitet wird.',
	'tool.ai-system-prompt-builder.faq.1.question': 'Ruft dieses Tool ein KI-Modell auf?',
	'tool.ai-system-prompt-builder.faq.1.answer':
		'Nein. Es setzt den Prompt deterministisch im Browser zusammen. Nichts wird hochgeladen und kein Modell erhält Ihren Text.',
	'tool.ai-system-prompt-builder.faq.2.question': 'Kann ich OpenAI-Chat-Nachrichten exportieren?',
	'tool.ai-system-prompt-builder.faq.2.answer':
		'Ja. Stellen Sie das Ausgabeformat auf OpenAI-JSON-Nachrichten, um ein System-Message-Array für API-Code oder Prompt-Tests zu exportieren.',
	'tool.ai-system-prompt-builder.faq.3.question': 'Ist es für sehr große Kontextblöcke geeignet?',
	'tool.ai-system-prompt-builder.faq.3.answer':
		'Große Builder-Eingaben über 500KB laufen in einem Web Worker, damit die Oberfläche reaktionsfähig bleibt und alles lokal verarbeitet wird.',
	'tool.ai-system-prompt-builder.use_case.0':
		'Wiederverwendbare System-Prompts für KI-Produktfunktionen erstellen',
	'tool.ai-system-prompt-builder.use_case.1':
		'Verhalten von Coding-Assistenten, Analysten, Übersetzern und Support-Agenten standardisieren',
	'tool.ai-system-prompt-builder.use_case.2':
		'System-Prompts als Klartext oder OpenAI-kompatible JSON-Nachrichten exportieren',
	'tool.ai-system-prompt-builder.use_case.3':
		'Sicherheitsgrenzen, Denkhinweise, Beispiele und Qualitätschecks zu Prompts hinzufügen',
	'tool.image-converter.display_name': 'Bildformat-Konverter',
	'tool.image-converter.tagline': 'PNG, JPEG, WebP, AVIF und GIF privat konvertieren',
	'tool.image-converter.description':
		'Konvertieren Sie Bilder zwischen PNG, JPEG, WebP, AVIF und GIF direkt im Browser. Vorschau anzeigen, Qualität anpassen, Transparenz für JPEG gezielt hinterlegen und herunterladen, ohne Dateien hochzuladen.',
	'tool.image-converter.primary_keyword': 'bildformat konverter',
	'tool.image-converter.meta_title': 'Bildformat-Konverter — PNG, JPG, WebP, AVIF, GIF | fmtly.dev',
	'tool.image-converter.meta_description':
		'Konvertieren Sie PNG, JPEG, WebP, AVIF und GIF online im Browser. Privat, schnell, mit Qualitätssteuerung und Web Worker für große Dateien.',
	'tool.image-converter.operation': 'Bild konvertieren',
	'tool.image-converter.faq.0.question': 'Werden meine Bilder hochgeladen?',
	'tool.image-converter.faq.0.answer':
		'Nein. Dateien werden lokal im Browser decodiert, konvertiert, in der Vorschau angezeigt und heruntergeladen. Es wird nichts an einen Server gesendet.',
	'tool.image-converter.faq.1.question': 'Zwischen welchen Formaten kann ich konvertieren?',
	'tool.image-converter.faq.1.answer':
		'Sie können PNG, JPEG, WebP, AVIF und GIF importieren und als PNG, JPEG, WebP, AVIF oder GIF exportieren, sofern Ihr Browser den Ziel-Encoder unterstützt.',
	'tool.image-converter.faq.2.question': 'Was passiert mit Transparenz?',
	'tool.image-converter.faq.2.answer':
		'PNG, WebP, AVIF und GIF können Transparenz erhalten. JPEG hat keinen Alphakanal, daher werden transparente Bereiche über dem gewählten Hintergrund zusammengesetzt.',
	'tool.image-converter.faq.3.question':
		'Wie bleibt die Oberfläche bei großen Dateien reaktionsfähig?',
	'tool.image-converter.faq.3.answer':
		'Eingaben über 500KB werden in einem Web Worker verarbeitet, sodass die Konvertierung nicht den UI-Thread blockiert.',
	'tool.image-converter.use_case.0':
		'Screenshots vor der Veröffentlichung in WebP oder AVIF umwandeln',
	'tool.image-converter.use_case.1':
		'JPEG-Versionen transparenter Assets mit kontrolliertem Hintergrund erstellen',
	'tool.image-converter.use_case.2': 'Leichte GIF-Vorschauen aus statischen Grafiken exportieren',
	'tool.image-converter.use_case.3': 'Bilder von Kunden vor CMS- oder API-Uploads vereinheitlichen',
	'ui.image_converter.upload': 'Bild hochladen',
	'ui.image_converter.clear': 'Leeren',
	'ui.image_converter.no_file': 'Kein Bild ausgewählt',
	'ui.image_converter.source_status': '{size} · {format} · {dimensions}',
	'ui.image_converter.output_status': '{size} · {format} · {dimensions}',
	'ui.image_converter.worker_active':
		'Großes Bild erkannt (>{size}). Die Konvertierung läuft in einem Web Worker.',
	'ui.image_converter.worker_used': 'Nebenläufig verarbeitet',
	'ui.image_converter.worker_failed':
		'Worker-Konvertierung fehlgeschlagen. Verarbeitung läuft im Hauptthread weiter.',
	'ui.image_converter.convert_failed': 'Bildkonvertierung fehlgeschlagen',
	'ui.image_converter.file_read_error': 'Bilddatei konnte nicht geladen werden',
	'ui.image_converter.file_loaded': '{name} geladen',
	'ui.image_converter.input_cleared': 'Bildeingabe geleert',
	'ui.image_converter.copy_empty': 'Nichts zu kopieren',
	'ui.image_converter.copy_success': 'Ausgabe kopiert',
	'ui.image_converter.copy_error': 'Kopieren fehlgeschlagen',
	'ui.image_converter.download_empty': 'Nichts zum Herunterladen',
	'ui.image_converter.download_success': '{filename} heruntergeladen',
	'ui.image_converter.download_error': 'Download fehlgeschlagen',
	'ui.image_converter.drop_title': 'Bild hier ablegen',
	'ui.image_converter.drop_hint': 'PNG, JPEG, WebP, AVIF und GIF bleiben in diesem Browser.',
	'ui.image_converter.source_preview_alt': 'Vorschau des Quellbilds',
	'ui.image_converter.output_preview_alt': 'Vorschau des konvertierten Bildes',
	'ui.image_converter.output_format': 'Ausgabeformat',
	'ui.image_converter.quality': 'Qualität',
	'ui.image_converter.background': 'JPEG-Hintergrund',
	'ui.image_converter.background_white': 'Weiß',
	'ui.image_converter.background_black': 'Schwarz',
	'ui.image_converter.background_transparent': 'Transparent',
	'ui.image_converter.privacy_note':
		'Die Konvertierung läuft lokal; Dateien verlassen den Browser nicht.',
	'ui.image_converter.performance_note': 'Große Eingaben nutzen ab {size} einen Web Worker.',
	'ui.image_converter.stat.source_format': 'Quellformat',
	'ui.image_converter.stat.source_size': 'Originalgröße',
	'ui.image_converter.stat.output_format': 'Ausgabeformat',
	'ui.image_converter.stat.output_size': 'Konvertierte Größe',
	'ui.image_converter.stat.size_delta': 'Größenänderung',
	'ui.image_converter.stat.size_delta_helper': 'im Vergleich zur Quelle',
	'ui.image_converter.processing': 'Konvertieren...',
	'ui.image_converter.copy_output': 'Data-URL kopieren',
	'ui.image_converter.download': 'Herunterladen',
	'ui.image_converter.output_placeholder': 'Die konvertierte Ausgabe erscheint hier...',

	// ── JSON Tools ──────────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'JSON-Formatierer',
	'tool.json-formatter.tagline': 'JSON formatieren und verschönern mit konfigurierbarer Einrückung',
	'tool.json-formatter.description':
		'Analysieren und zeigen Sie JSON mit konfigurierbarer Einrückung an (2 Leerzeichen, 4 Leerzeichen oder Tabs). Echtzeit-Parsing mit präziser Fehlererkennung und optionaler Baumansicht.',
	'tool.json-formatter.primary_keyword': 'json formatierer',
	'tool.json-formatter.meta_title': 'JSON Formatierer & Verschönerer — fmtly.dev',
	'tool.json-formatter.meta_description':
		'Formatieren Sie JSON sofort im Browser. Konfigurierbare Einrückung, Echtzeit-Fehlererkennung und Baumansicht. Ihre Daten verlassen nie Ihr Gerät.',
	'tool.json-formatter.operation': 'Formatieren',

	'tool.json-validator.display_name': 'JSON-Validator',
	'tool.json-validator.tagline': 'JSON-Syntax und Struktur validieren',
	'tool.json-validator.description':
		'Prüfen Sie JSON-Syntax in Echtzeit. Erkennt fehlende Klammern, nicht geschlossene Strings und doppelte Schlüssel sofort. Unterstützt JSON5-Kommentare.',
	'tool.json-validator.primary_keyword': 'json validator',
	'tool.json-validator.meta_title': 'JSON-Validator — fmtly.dev',
	'tool.json-validator.meta_description':
		'Validieren Sie JSON sofort im Browser. Erkennt Syntaxfehler mit präzisen Zeilen- und Spaltenangaben. Keine Datenübertragung.',
	'tool.json-validator.operation': 'Validieren',

	'tool.json-minifier.display_name': 'JSON-Minifier',
	'tool.json-minifier.tagline': 'Leerzeichen entfernen und JSON auf minimale Größe komprimieren',
	'tool.json-minifier.description':
		'Entfernen Sie alle unnötigen Leerzeichen aus JSON, um die kleinstmögliche Ausgabe zu erhalten. Validiert das JSON zuerst.',
	'tool.json-minifier.primary_keyword': 'json minifier',
	'tool.json-minifier.meta_title': 'JSON Minifier — fmtly.dev',
	'tool.json-minifier.meta_description':
		'Minifizieren Sie JSON sofort im Browser. Entfernt alle Leerzeichen für eine kompakte Ausgabe.',
	'tool.json-minifier.operation': 'Minifizieren',

	'tool.json-to-yaml.display_name': 'JSON nach YAML',
	'tool.json-to-yaml.tagline': 'JSON-Daten in das YAML-Format konvertieren',
	'tool.json-to-yaml.description':
		'Konvertieren Sie JSON in YAML mit korrekter Einrückung. Verarbeitet verschachtelte Objekte, Arrays und alle JSON-Datentypen.',
	'tool.json-to-yaml.primary_keyword': 'json nach yaml',
	'tool.json-to-yaml.meta_title': 'JSON nach YAML Konverter — fmtly.dev',
	'tool.json-to-yaml.meta_description':
		'Konvertieren Sie JSON sofort in YAML. Unterstützt komplexe Strukturen. Keine Datenübertragung.',
	'tool.json-to-yaml.operation': 'Konvertieren',

	'tool.json-to-toml.display_name': 'JSON nach TOML',
	'tool.json-to-toml.tagline': 'JSON-Daten in das TOML-Konfigurationsformat konvertieren',
	'tool.json-to-toml.description':
		'Konvertieren Sie JSON in das TOML-Format, ideal für Konfigurationsdateien. Unterstützt verschachtelte Tabellen.',
	'tool.json-to-toml.primary_keyword': 'json nach toml',
	'tool.json-to-toml.meta_title': 'JSON nach TOML Konverter — fmtly.dev',
	'tool.json-to-toml.meta_description':
		'Konvertieren Sie JSON sofort in TOML. Ideal für Konfigurationen. Lokal im Browser.',
	'tool.json-to-toml.operation': 'Konvertieren',

	'tool.json-to-markdown.display_name': 'JSON nach Markdown-Tabelle',
	'tool.json-to-markdown.tagline': 'JSON-Arrays in Markdown-Tabellen konvertieren',
	'tool.json-to-markdown.description':
		'Konvertieren Sie JSON-Objekt-Arrays in formatierte Markdown-Tabellen. Erkennt Spaltenköpfe automatisch aus den Schlüsseln.',
	'tool.json-to-markdown.primary_keyword': 'json nach markdown tabelle',
	'tool.json-to-markdown.meta_title': 'JSON nach Markdown Tabellen Konverter — fmtly.dev',
	'tool.json-to-markdown.meta_description':
		'Konvertieren Sie JSON-Arrays sofort in Markdown-Tabellen. Automatische Header-Erkennung.',
	'tool.json-to-markdown.operation': 'Konvertieren',

	'tool.json-to-xml.display_name': 'JSON nach XML',
	'tool.json-to-xml.tagline': 'JSON-Daten in das XML-Format konvertieren',
	'tool.json-to-xml.description':
		'Konvertieren Sie JSON-Objekte und -Arrays in wohlgeformtes XML. Anpassbare Namen für Wurzelelemente.',
	'tool.json-to-xml.primary_keyword': 'json nach xml',
	'tool.json-to-xml.meta_title': 'JSON nach XML Konverter — fmtly.dev',
	'tool.json-to-xml.meta_description':
		'Konvertieren Sie JSON sofort in XML. Erzeugt wohlgeformten Code. Keine Datenübertragung.',
	'tool.json-to-xml.operation': 'Konvertieren',

	'tool.json-to-csv.display_name': 'JSON nach CSV',
	'tool.json-to-csv.tagline': 'JSON-Arrays in das CSV-Format konvertieren',
	'tool.json-to-csv.description':
		'Konvertieren Sie JSON-Objekt-Arrays in das CSV-Format. Extrahiert Header automatisch aus Objektschlüsseln.',
	'tool.json-to-csv.primary_keyword': 'json nach csv',
	'tool.json-to-csv.meta_title': 'JSON nach CSV Konverter — fmtly.dev',
	'tool.json-to-csv.meta_description':
		'Konvertieren Sie JSON-Arrays sofort in CSV. Ideal für Excel-Importe.',
	'tool.json-to-csv.operation': 'Konvertieren',

	'tool.json-jsonpath.display_name': 'JSONPath-Abfrage',
	'tool.json-jsonpath.tagline': 'JSON-Daten mit JSONPath-Ausdrücken abfragen',
	'tool.json-jsonpath.description':
		'Führen Sie JSONPath-Ausdrücke aus, um bestimmte Werte zu extrahieren. Unterstützt Filter, Wildcards und alle Standard-Operatoren.',
	'tool.json-jsonpath.primary_keyword': 'jsonpath abfrage',
	'tool.json-jsonpath.meta_title': 'JSONPath Abfrage-Tool — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'Fragen Sie JSON-Daten mit JSONPath-Ausdrücken in Ihrem Browser ab. Sicher und lokal.',
	'tool.json-jsonpath.operation': 'Abfragen',

	'tool.json-jmespath.display_name': 'JMESPath-Abfrage',
	'tool.json-jmespath.tagline': 'JSON mit JMESPath-Ausdrücken abfragen und transformieren',
	'tool.json-jmespath.description':
		'Führen Sie JMESPath-Ausdrücke aus, um JSON-Daten zu transformieren. Unterstützt Projektionen, Filter und Multiselect.',
	'tool.json-jmespath.primary_keyword': 'jmespath abfrage',
	'tool.json-jmespath.meta_title': 'JMESPath Abfrage-Tool — fmtly.dev',
	'tool.json-jmespath.meta_description':
		'Transformieren Sie JSON mit JMESPath in Ihrem Browser. Unterstützt alle JMESPath-Funktionen.',
	'tool.json-jmespath.operation': 'Abfragen',

	// ── XML Tools ───────────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'XML-Formatierer',
	'tool.xml-formatter.tagline': 'XML verschönern und einrücken mit konfigurierbarem Abstand',
	'tool.xml-formatter.description':
		'Formatieren und rücken Sie XML-Dokumente mit 2 Leerzeichen, 4 Leerzeichen oder Tabs ein. Validiert die XML-Struktur.',
	'tool.xml-formatter.primary_keyword': 'xml formatierer',
	'tool.xml-formatter.meta_title': 'XML-Formatierer & Verschönerer — fmtly.dev',
	'tool.xml-formatter.meta_description':
		'Formatieren und verschönern Sie XML im Browser. Konfigurierbare Einrückung und Echtzeit-Validierung.',
	'tool.xml-formatter.operation': 'Formatieren',

	'tool.xml-validator.display_name': 'XML-Validator',
	'tool.xml-validator.tagline': 'XML-Syntax und Wohlgeformtheit validieren',
	'tool.xml-validator.description':
		'Validieren Sie XML auf Wohlgeformtheit. Identifiziert nicht geschlossene Tags und ungültige Attribute.',
	'tool.xml-validator.primary_keyword': 'xml validator',
	'tool.xml-validator.meta_title': 'XML-Validator — fmtly.dev',
	'tool.xml-validator.meta_description':
		'Validieren Sie XML im Browser. Erkennt Syntaxfehler mit Zeilen- und Spaltenangaben.',
	'tool.xml-validator.operation': 'Validieren',

	'tool.xml-to-json.display_name': 'XML nach JSON',
	'tool.xml-to-json.tagline': 'XML-Dokumente in das JSON-Format konvertieren',
	'tool.xml-to-json.description':
		'Konvertieren Sie XML nach JSON mit automatischem Attribut-Mapping. Verarbeitet Namespaces und CDATA-Sektionen.',
	'tool.xml-to-json.primary_keyword': 'xml nach json',
	'tool.xml-to-json.meta_title': 'XML nach JSON Konverter — fmtly.dev',
	'tool.xml-to-json.meta_description':
		'Konvertieren Sie XML sofort in JSON. Verarbeitet Attribute und verschachtelte Strukturen.',
	'tool.xml-to-json.operation': 'Konvertieren',
	'tool.xml-to-json-schema.display_name': 'XML zu JSON Schema',
	'tool.xml-to-json-schema.tagline': 'JSON Schema aus XML-Struktur ableiten',
	'tool.xml-to-json-schema.description':
		'Erzeugen Sie ein Draft-2020-12-JSON-Schema aus XML durch Analyse von Elementstruktur, Attributen und Kardinalität. Wiederholte Elemente werden als Arrays erkannt, gemeinsame Felder als required.',
	'tool.xml-to-json-schema.primary_keyword': 'xml zu json schema',
	'tool.xml-to-json-schema.meta_title': 'XML zu JSON Schema Generator — fmtly.dev',
	'tool.xml-to-json-schema.meta_description':
		'Leiten Sie JSON Schema im Browser aus XML ab. Erkennt verschachtelte Strukturen, wiederholte Elemente und Pflichtfelder automatisch.',
	'tool.xml-to-json-schema.operation': 'Schema erzeugen',
	'tool.xml-to-json-schema.faq.0.question': 'Wie wird die Kardinalität aus XML erkannt?',
	'tool.xml-to-json-schema.faq.0.answer':
		'Wenn gleichnamige Geschwister unter demselben Elternknoten mehrfach vorkommen, werden sie als Arrays abgeleitet. Einmalige Vorkommen bleiben Skalar- oder Objektfelder.',
	'tool.xml-to-json-schema.faq.1.question': 'Wie werden XML-Attribute im Schema dargestellt?',
	'tool.xml-to-json-schema.faq.1.answer':
		'Attribute werden als normale Properties mit dem geparsten Attributschlüssel (z. B. @_id) in das Schema übernommen und zusammen mit Kindelementen validiert.',
	'tool.xml-to-json-schema.faq.2.question': 'Welche JSON-Schema-Version wird erzeugt?',
	'tool.xml-to-json-schema.faq.2.answer':
		'Die Ausgabe nutzt JSON Schema Draft 2020-12 und enthält Standard-Schlüsselwörter wie $schema, type, properties, required und items.',
	'tool.xml-to-json-schema.use_case.0':
		'Validierungsschemata aus vorhandenen XML-Payload-Beispielen ableiten',
	'tool.xml-to-json-schema.use_case.1':
		'Komplexe XML-Feed-Strukturen für nachgelagerte Systeme dokumentieren',
	'tool.xml-to-json-schema.use_case.2':
		'Ein Basisschema erzeugen, bevor Regeln manuell verschärft werden',
	'tool.xml-to-json-schema.use_case.3':
		'XML-Integrationen in JSON-basierte Validierungs-Workflows überführen',

	'tool.xml-to-yaml.display_name': 'XML nach YAML',
	'tool.xml-to-yaml.tagline': 'XML-Dokumente in das YAML-Format konvertieren',
	'tool.xml-to-yaml.description':
		'Konvertieren Sie XML nach YAML mit korrekter Einrückung. Behält die Datenhierarchie bei.',
	'tool.xml-to-yaml.primary_keyword': 'xml nach yaml',
	'tool.xml-to-yaml.meta_title': 'XML nach YAML Konverter — fmtly.dev',
	'tool.xml-to-yaml.meta_description':
		'Konvertieren Sie XML sofort in YAML. Lokal im Browser, ohne Upload.',
	'tool.xml-to-yaml.operation': 'Konvertieren',

	'tool.xml-to-csv.display_name': 'XML nach CSV',
	'tool.xml-to-csv.tagline': 'XML-Datensätze in das CSV-Format konvertieren',
	'tool.xml-to-csv.description':
		'Extrahieren Sie wiederkehrende XML-Elemente in CSV-Zeilen. Erkennt Header automatisch.',
	'tool.xml-to-csv.primary_keyword': 'xml nach csv',
	'tool.xml-to-csv.meta_title': 'XML nach CSV Konverter — fmtly.dev',
	'tool.xml-to-csv.meta_description':
		'Konvertieren Sie XML-Einträge in CSV. Ideal für Datenanalysen.',
	'tool.xml-to-csv.operation': 'Konvertieren',

	'tool.xml-minifier.display_name': 'XML-Minifier',
	'tool.xml-minifier.tagline': 'Leerzeichen entfernen und XML komprimieren',
	'tool.xml-minifier.description':
		'Entfernen Sie alle Leerzeichen und Kommentare aus XML, um kompakten Code zu erhalten.',
	'tool.xml-minifier.primary_keyword': 'xml minifier',
	'tool.xml-minifier.meta_title': 'XML-Minifier — fmtly.dev',
	'tool.xml-minifier.meta_description':
		'Minifizieren Sie XML sofort im Browser. Reduziert die Dateigröße effizient.',
	'tool.xml-minifier.operation': 'Minifizieren',

	'tool.xml-xpath.display_name': 'XPath-Abfrage',
	'tool.xml-xpath.tagline': 'XML-Daten mit XPath-Ausdrücken abfragen',
	'tool.xml-xpath.description':
		'Führen Sie XPath 1.0 Ausdrücke auf XML-Dokumenten aus. Unterstützt Elementauswahl und Attributfilter.',
	'tool.xml-xpath.primary_keyword': 'xpath abfrage',
	'tool.xml-xpath.meta_title': 'XPath Abfrage-Tool — fmtly.dev',
	'tool.xml-xpath.meta_description':
		'Fragen Sie XML mit XPath-Ausdrücken im Browser ab. Unterstützt alle Standard-Achsen.',
	'tool.xml-xpath.operation': 'Abfragen',

	'tool.xml-diff.display_name': 'XML Diff',
	'tool.xml-diff.tagline': 'XML-Dokumente vergleichen und Unterschiede visualisieren',
	'tool.xml-diff.description':
		'Vergleichen Sie zwei XML-Dokumente nebeneinander und heben Sie Unterschiede hervor. Zeigt hinzugefügte, entfernte und geänderte Elemente mit präzisen Zeilennummern und XML-bewusster Diff-Visualisierung.',
	'tool.xml-diff.primary_keyword': 'xml diff',
	'tool.xml-diff.meta_title': 'XML Diff Tool — fmtly.dev',
	'tool.xml-diff.meta_description':
		'Vergleichen Sie XML-Dateien und visualisieren Sie Unterschiede im Browser. Zeigt Änderungen auf Elementebene mit Zeilennummern. Keine Datenübertragung.',
	'tool.xml-diff.operation': 'Diff',
	'tool.xml-diff.faq.0.question': 'Wie unterscheidet sich XML Diff von einem Text-Diff?',
	'tool.xml-diff.faq.0.answer':
		'XML Diff validiert beide Eingaben zuerst als XML und vergleicht sie dann zeilenweise mit XML-gerechter Whitespace-Normalisierung. Dadurch eignet es sich besser für XML-Dokumente als ein reiner Textvergleich.',
	'tool.xml-diff.faq.1.question': 'Kann ich ungültiges XML vergleichen?',
	'tool.xml-diff.faq.1.answer':
		'Nein. Beide Seiten müssen gültiges XML sein, bevor der Vergleich läuft. Wenn eine Eingabe fehlerhaft ist, zeigt das Tool an, welche Seite korrigiert werden muss.',
	'tool.xml-diff.faq.2.question': 'Welche Arten von Änderungen werden hervorgehoben?',
	'tool.xml-diff.faq.2.answer':
		'Das Tool markiert hinzugefügte, entfernte und geänderte XML-Zeilen. Das ist nützlich für Konfigurationsänderungen, Feed-Revisionen und Markup-Reviews.',
	'tool.xml-diff.use_case.0': 'Änderungen zwischen zwei XML-API-Payloads prüfen',
	'tool.xml-diff.use_case.1': 'Versionen von Sitemap-, Feed- oder Konfigurations-XML vergleichen',
	'tool.xml-diff.use_case.2': 'Markup-Änderungen vor dem Deployment kontrollieren',
	'tool.xml-diff.use_case.3': 'Erzeugte XML-Ausgabe mit einer erwarteten Version abgleichen',

	// ── YAML Tools ──────────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'YAML-Formatierer',
	'tool.yaml-formatter.tagline': 'YAML mit konsistenter Einrückung formatieren und verschönern',
	'tool.yaml-formatter.description':
		'Formatieren Sie YAML-Dateien mit konsistenter 2-Leerzeichen-Einrückung. Validiert YAML-Syntax und normalisiert Anführungszeichen, Anchors und Schlüsselreihenfolge.',
	'tool.yaml-formatter.primary_keyword': 'yaml formatierer',
	'tool.yaml-formatter.meta_title': 'YAML-Formatierer & Beautifier — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		'Formatieren und verschönern Sie YAML im Browser. Validiert Syntax und normalisiert Einrückungen. Keine Daten verlassen Ihr Gerät.',
	'tool.yaml-formatter.operation': 'Formatieren',
	'tool.yaml-formatter.faq.0.question': 'Was normalisiert der YAML-Formatierer?',
	'tool.yaml-formatter.faq.0.answer':
		'Er vereinheitlicht Einrückung, Leerzeichen, Zitierstil und das allgemeine Layout, damit das YAML lesbarer wird, ohne die Datenbedeutung zu verändern.',
	'tool.yaml-formatter.faq.1.question': 'Verändert das Formatieren meine YAML-Daten?',
	'tool.yaml-formatter.faq.1.answer':
		'Nein. Es verbessert die Darstellung, nicht die Datenstruktur. Ziel ist eine sauberere und konsistentere Ausgabe.',
	'tool.yaml-formatter.use_case.0': 'Kubernetes-Manifeste vor dem Review verschönern',
	'tool.yaml-formatter.use_case.1': 'CI-Konfigurationen für sauberere Diffs vereinheitlichen',
	'tool.yaml-formatter.use_case.2': 'Helm-Values-Dateien vor dem Commit neu formatieren',
	'tool.yaml-formatter.use_case.3': 'Große YAML-Konfigurationen leichter lesbar machen',

	'tool.yaml-minifier.display_name': 'YAML-Minifier',
	'tool.yaml-minifier.tagline': 'YAML in eine kompakte gültige Darstellung minimieren',
	'tool.yaml-minifier.description':
		'Minimieren Sie YAML-Dokumente in eine kompakte Flow-Style-Darstellung. Unterstützt Multi-Dokument-YAML und behält dieselbe Datenstruktur bei, während Layout-Rauschen reduziert wird.',
	'tool.yaml-minifier.primary_keyword': 'yaml minifier',
	'tool.yaml-minifier.meta_title': 'YAML-Minifier — fmtly.dev',
	'tool.yaml-minifier.meta_description':
		'Minimieren Sie YAML im Browser. Unterstützt Multi-Dokument-YAML und kompakte Ausgabe. Keine Daten verlassen Ihr Gerät.',
	'tool.yaml-minifier.operation': 'Minimieren',
	'tool.yaml-minifier.faq.0.question': 'Wie funktioniert die YAML-Minimierung?',
	'tool.yaml-minifier.faq.0.answer':
		'Die Eingabe wird zuerst als YAML geparst und dann als kompakteres gültiges YAML neu ausgegeben. Dadurch verschwindet ein Großteil des Formatierungsrauschens, während die Daten erhalten bleiben.',
	'tool.yaml-minifier.faq.1.question': 'Unterstützt das Tool mehrere YAML-Dokumente?',
	'tool.yaml-minifier.faq.1.answer':
		'Ja. Mehrere Dokumente, die durch Dokument-Trenner getrennt sind, bleiben erhalten und werden dokumentweise minimiert.',
	'tool.yaml-minifier.use_case.0': 'YAML vor dem Teilen in Tickets oder Chats verkleinern',
	'tool.yaml-minifier.use_case.1': 'Kompakte Multi-Dokument-Manifeste prüfen',
	'tool.yaml-minifier.use_case.2':
		'Whitespace reduzieren, bevor generierte YAML-Fixtures gespeichert werden',
	'tool.yaml-minifier.use_case.3':
		'Formatierte und kompakte YAML-Darstellungen nebeneinander vergleichen',

	'tool.yaml-validator.display_name': 'YAML-Validator',
	'tool.yaml-validator.tagline': 'YAML-Syntax und Schema validieren',
	'tool.yaml-validator.description':
		'Validieren Sie YAML-Syntax in Echtzeit und prüfen Sie Dokumente gegen ein Schema. Erkennt Einrückungsprobleme, fehlerhafte Strukturen und Schema-Abweichungen mit Zeilenbezug.',
	'tool.yaml-validator.primary_keyword': 'yaml validator',
	'tool.yaml-validator.meta_title': 'YAML-Validator — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Validieren Sie YAML-Syntax und Schema direkt im Browser. Erkennt Parserfehler und Schema-Abweichungen mit Zeilennummern. Keine Daten verlassen Ihr Gerät.',
	'tool.yaml-validator.operation': 'Validieren',
	'tool.yaml-validator.faq.0.question': 'Welche YAML-Fehler kann das Tool erkennen?',
	'tool.yaml-validator.faq.0.answer':
		'Es erkennt fehlerhafte Einrückung, ungültige Mappings, falsch platzierte Sequenzen und andere Parserfehler. Im Schema-Modus meldet es zusätzlich Pfade und Werte, die das Schema nicht erfüllen.',
	'tool.yaml-validator.faq.1.question': 'Kann ich YAML gegen ein Schema validieren?',
	'tool.yaml-validator.faq.1.answer':
		'Ja. Wechseln Sie in den Schema-Modus und geben Sie ein JSON-Schema an. Die Schema-Eingabe kann als JSON oder YAML geschrieben werden – praktisch für Manifeste, Konfigurationsdateien und API-Payloads.',
	'tool.yaml-validator.use_case.0': 'Deployment-Manifeste vor dem Release prüfen',
	'tool.yaml-validator.use_case.1': 'Aus der Dokumentation kopiertes YAML validieren',
	'tool.yaml-validator.use_case.2': 'Einrückungsfehler in CI- und Automatisierungsdateien finden',
	'tool.yaml-validator.use_case.3': 'Helm-Values oder Manifeste gegen ein erwartetes Schema prüfen',

	'tool.yaml-to-json.display_name': 'YAML nach JSON',
	'tool.yaml-to-json.tagline': 'YAML in das JSON-Format konvertieren',
	'tool.yaml-to-json.description':
		'Konvertieren Sie YAML-Dokumente in formatiertes JSON. Unterstützt Anchors, Aliases, Multi-Dokument-YAML und alle YAML-Datentypen.',
	'tool.yaml-to-json.primary_keyword': 'yaml nach json',
	'tool.yaml-to-json.meta_title': 'YAML-nach-JSON-Konverter — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		'Konvertieren Sie YAML sofort in JSON im Browser. Unterstützt Anchors, Aliases und Multi-Dokument-YAML. Kein Upload.',
	'tool.yaml-to-json.operation': 'Konvertieren',
	'tool.yaml-to-json.faq.0.question': 'Wann sollte ich YAML in JSON umwandeln?',
	'tool.yaml-to-json.faq.0.answer':
		'Wenn APIs, JavaScript-Tools, Tests oder nachgelagerte Systeme JSON als strengeres Format erwarten.',
	'tool.yaml-to-json.faq.1.question': 'Bleiben verschachtelte Objekte und Arrays erhalten?',
	'tool.yaml-to-json.faq.1.answer':
		'Ja. Verschachtelte Mappings und Sequenzen werden in ihre JSON-Entsprechungen umgewandelt, während die Gesamtstruktur erhalten bleibt.',
	'tool.yaml-to-json.use_case.0': 'YAML-Konfigurationen für API-Payloads in JSON umwandeln',
	'tool.yaml-to-json.use_case.1': 'YAML-Daten in einem strengeren Format inspizieren',
	'tool.yaml-to-json.use_case.2': 'Konfigurationsdaten in JavaScript-Workflows übernehmen',
	'tool.yaml-to-json.use_case.3': 'YAML für JSON-basierte Tools vorbereiten',

	'tool.yaml-to-xml.display_name': 'YAML nach XML',
	'tool.yaml-to-xml.tagline': 'YAML in das XML-Format konvertieren',
	'tool.yaml-to-xml.description':
		'Konvertieren Sie YAML-Dokumente in wohlgeformtes XML. Ordnet YAML-Schlüssel XML-Elementen zu und unterstützt verschachtelte Strukturen und Arrays.',
	'tool.yaml-to-xml.primary_keyword': 'yaml nach xml',
	'tool.yaml-to-xml.meta_title': 'YAML-nach-XML-Konverter — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		'Konvertieren Sie YAML sofort in XML im Browser. Kein Upload.',
	'tool.yaml-to-xml.operation': 'Konvertieren',
	'tool.yaml-to-xml.faq.0.question': 'Wie wird YAML bei der Konvertierung auf XML abgebildet?',
	'tool.yaml-to-xml.faq.0.answer':
		'Schlüssel werden zu Elementnamen, verschachtelte Objekte zu verschachtelten Elementen und Arrays zu wiederholten Einträgen.',
	'tool.yaml-to-xml.faq.1.question': 'Kann ich die Ausgabe in anderen XML-Tools weiterverwenden?',
	'tool.yaml-to-xml.faq.1.answer':
		'Ja. Die Ausgabe wird als wohlgeformtes XML erzeugt und kann anschließend weiter formatiert oder validiert werden.',
	'tool.yaml-to-xml.use_case.0': 'YAML-Daten in XML-basierte Integrationen überführen',
	'tool.yaml-to-xml.use_case.1': 'XML-Fixtures aus YAML-Testdaten erzeugen',
	'tool.yaml-to-xml.use_case.2': 'YAML-Workflows mit XML-Pipelines verbinden',
	'tool.yaml-to-xml.use_case.3': 'Strukturierten YAML-Inhalt für XML-Export vorbereiten',

	'tool.yaml-to-csv.display_name': 'YAML nach CSV',
	'tool.yaml-to-csv.tagline': 'YAML-Arrays in das CSV-Format konvertieren',
	'tool.yaml-to-csv.description':
		'Konvertieren Sie YAML-Objekt-Arrays in das CSV-Format. Extrahiert Spalten aus Objektschlüsseln und schreibt die Daten als Zeilen.',
	'tool.yaml-to-csv.primary_keyword': 'yaml nach csv',
	'tool.yaml-to-csv.meta_title': 'YAML-nach-CSV-Konverter — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		'Konvertieren Sie YAML sofort in CSV im Browser. Kein Upload.',
	'tool.yaml-to-csv.operation': 'Konvertieren',
	'tool.yaml-to-csv.faq.0.question':
		'Welche YAML-Strukturen lassen sich am besten in CSV umwandeln?',
	'tool.yaml-to-csv.faq.0.answer':
		'Arrays von Objekten funktionieren am besten. Jedes Objekt wird zu einer Zeile und gemeinsame Schlüssel werden zu CSV-Spalten.',
	'tool.yaml-to-csv.faq.1.question': 'Kann ich ein einzelnes YAML-Objekt in CSV umwandeln?',
	'tool.yaml-to-csv.faq.1.answer':
		'Ja. Ein einzelnes Objekt kann als einzelne CSV-Zeile exportiert werden, was für einfache Datensätze praktisch ist.',
	'tool.yaml-to-csv.use_case.0': 'YAML-Datensätze für Tabellen exportieren',
	'tool.yaml-to-csv.use_case.1': 'Strukturierte YAML-Datensätze für Analysten in CSV umwandeln',
	'tool.yaml-to-csv.use_case.2': 'Inventar- oder Konfigurationslisten in Tabellenform abflachen',
	'tool.yaml-to-csv.use_case.3': 'YAML für Import-Tools vorbereiten, die CSV erwarten',

	'tool.yaml-to-toml.display_name': 'YAML nach TOML',
	'tool.yaml-to-toml.tagline': 'YAML in das TOML-Konfigurationsformat konvertieren',
	'tool.yaml-to-toml.description':
		'Konvertieren Sie YAML-Konfigurationsdateien in das TOML-Format. Unterstützt verschachtelte Tabellen, Arrays und alle YAML-Datentypen.',
	'tool.yaml-to-toml.primary_keyword': 'yaml nach toml',
	'tool.yaml-to-toml.meta_title': 'YAML-nach-TOML-Konverter — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		'Konvertieren Sie YAML sofort in TOML im Browser. Kein Upload.',
	'tool.yaml-to-toml.operation': 'Konvertieren',
	'tool.yaml-to-toml.faq.0.question': 'Warum sollte ich YAML in TOML umwandeln?',
	'tool.yaml-to-toml.faq.0.answer':
		'TOML wird oft für von Hand gepflegte Konfigurationsdateien bevorzugt. Wenn ein Projekt TOML erwartet, spart die Umwandlung Zeit.',
	'tool.yaml-to-toml.faq.1.question': 'Bleiben verschachtelte Konfigurationsabschnitte erhalten?',
	'tool.yaml-to-toml.faq.1.answer':
		'Ja. Verschachtelte Mappings werden – sofern vom Format unterstützt – in TOML-Tabellen und Arrays umgewandelt.',
	'tool.yaml-to-toml.use_case.0': 'YAML-Einstellungen in TOML-basierte Projekte übernehmen',
	'tool.yaml-to-toml.use_case.1': 'TOML-Konfigurationen aus bestehenden YAML-Quellen erzeugen',
	'tool.yaml-to-toml.use_case.2': 'Deployment-Einstellungen in TOML-freundliche Tools portieren',
	'tool.yaml-to-toml.use_case.3': 'Dieselbe Konfiguration in YAML und TOML vergleichen',

	'tool.yaml-diff.display_name': 'YAML-Diff',
	'tool.yaml-diff.tagline': 'Zwei YAML-Dokumente nebeneinander vergleichen',
	'tool.yaml-diff.description':
		'Vergleichen Sie zwei YAML-Dokumente und markieren Sie Ergänzungen, Löschungen und Änderungen. Berücksichtigt die YAML-Struktur für semantische Vergleiche.',
	'tool.yaml-diff.primary_keyword': 'yaml diff',
	'tool.yaml-diff.meta_title': 'YAML-Diff-Tool — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'Vergleichen Sie zwei YAML-Dokumente im Browser. Hebt Ergänzungen, Löschungen und Änderungen hervor. Kein Upload.',
	'tool.yaml-diff.operation': 'Vergleichen',
	'tool.yaml-diff.faq.0.question':
		'Worin unterscheidet sich YAML-Diff von einem normalen Textvergleich?',
	'tool.yaml-diff.faq.0.answer':
		'Beide Eingaben werden als YAML-Daten geparst und anschließend strukturell verglichen. Änderungen werden also über Schlüssel, Arrays und Werte erkannt und nicht nur über Formatierung.',
	'tool.yaml-diff.faq.1.question': 'Kann ich ungültiges YAML vergleichen?',
	'tool.yaml-diff.faq.1.answer':
		'Nein. Beide Seiten müssen gültiges YAML sein. Fehlerhafte Eingaben müssen zuerst korrigiert werden.',
	'tool.yaml-diff.faq.2.question': 'Welche Änderungen werden hervorgehoben?',
	'tool.yaml-diff.faq.2.answer':
		'Es werden hinzugefügte, entfernte und geänderte YAML-Pfade und Werte hervorgehoben. Das erleichtert die Prüfung von Konfigurationsrevisionen.',
	'tool.yaml-diff.use_case.0': 'Änderungen zwischen zwei Deployment-Manifests prüfen',
	'tool.yaml-diff.use_case.1': 'Revisionen von CI-Konfigurationen vergleichen',
	'tool.yaml-diff.use_case.2': 'Bearbeitete Helm- oder Values-Dateien vor dem Commit prüfen',
	'tool.yaml-diff.use_case.3': 'Erzeugtes YAML mit einer erwarteten Version abgleichen',
	'tool.yaml-query.display_name': 'YAML-Abfrage',
	'tool.yaml-query.tagline': 'YAML mit JSONPath und JMESPath abfragen',
	'tool.yaml-query.description':
		'Führen Sie JSONPath- oder JMESPath-Ausdrücke direkt auf YAML im Browser aus. Parsen Sie YAML, durchsuchen Sie verschachtelte Daten und prüfen Sie Ergebnisse ohne manuelle Konvertierung.',
	'tool.yaml-query.primary_keyword': 'yaml abfrage',
	'tool.yaml-query.meta_title': 'YAML-Abfrage-Tool — fmtly.dev',
	'tool.yaml-query.meta_description':
		'YAML mit JSONPath oder JMESPath direkt im Browser abfragen. Keine manuelle Konvertierung und kein Upload.',
	'tool.yaml-query.operation': 'Abfragen',
	'tool.yaml-query.faq.0.question': 'Welche Abfragesprachen werden unterstützt?',
	'tool.yaml-query.faq.0.answer':
		'Sie können zwischen JSONPath und JMESPath wechseln. Beide arbeiten auf dem geparsten YAML-Datenmodell, sodass verschachtelte Mappings, Sequenzen und Multi-Dokument-Eingaben direkt abgefragt werden können.',
	'tool.yaml-query.faq.1.question': 'Muss ich YAML zuerst in JSON umwandeln?',
	'tool.yaml-query.faq.1.answer':
		'Nein. Das Tool parst YAML für Sie und gibt die Ergebnisse als formatiertes JSON zurück. Das ist besonders praktisch für Konfigurationen, Manifeste, Values-Dateien und andere YAML-lastige Workflows.',
	'tool.yaml-query.use_case.0':
		'Bestimmte Felder aus Kubernetes-Manifests oder Helm-Values extrahieren',
	'tool.yaml-query.use_case.1':
		'Verschachtelte YAML-Konfigurationen ohne manuelle Umwandlung untersuchen',
	'tool.yaml-query.use_case.2': 'JSONPath- oder JMESPath-Ausdrücke auf YAML-Payloads testen',
	'tool.yaml-query.use_case.3': 'Listen, IDs oder Flags aus großen YAML-Dokumenten herausziehen',

	// ── CSV Tools ───────────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': 'CSV nach JSON',
	'tool.csv-to-json.tagline': 'CSV-Daten in ein JSON-Array konvertieren',
	'tool.csv-to-json.description':
		'Konvertieren Sie CSV mit Headern in ein JSON-Array. Unterstützt dynamische Typerkennung.',
	'tool.csv-to-json.primary_keyword': 'csv nach json',
	'tool.csv-to-json.meta_title': 'CSV nach JSON Konverter — fmtly.dev',
	'tool.csv-to-json.meta_description':
		'Konvertieren Sie CSV sofort in JSON. Unterstützt Header und benutzerdefinierte Trennzeichen.',
	'tool.csv-to-json.operation': 'Konvertieren',
	'tool.csv-to-json.faq.0.question': 'Kann ich die erste Zeile als Header behandeln?',
	'tool.csv-to-json.faq.0.answer':
		'Ja. Über die CSV-Steuerung können Sie die erste Zeile als Header behalten oder alle Zeilen als reine Spaltendaten umwandeln.',
	'tool.csv-to-json.faq.1.question': 'Werden Zahlen und Booleans automatisch erkannt?',
	'tool.csv-to-json.faq.1.answer':
		'Ja. Zahlen- und Boolean-ähnliche Werte werden bei der Umwandlung automatisch interpretiert, damit das JSON sauberer wird.',
	'tool.csv-to-json.use_case.0': 'Spreadsheet-Exporte in API-fertige JSON-Payloads umwandeln',
	'tool.csv-to-json.use_case.1': 'CSV-Zeilen als strukturierte Objekte prüfen',
	'tool.csv-to-json.use_case.2':
		'Getrennte Tabellendaten in browserfreundliches JSON normalisieren',
	'tool.csv-to-json.use_case.3': 'CSV-Datensätze für nachgelagerte JSON-Workflows vorbereiten',

	'tool.csv-to-xml.display_name': 'CSV nach XML',
	'tool.csv-to-xml.tagline': 'CSV-Daten in das XML-Format konvertieren',
	'tool.csv-to-xml.description':
		'Konvertieren Sie CSV-Dateien in wohlgeformtes XML. Mappt Spaltenköpfe auf Elementnamen.',
	'tool.csv-to-xml.primary_keyword': 'csv nach xml',
	'tool.csv-to-xml.meta_title': 'CSV nach XML Konverter — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		'Konvertieren Sie CSV sofort in XML. Lokal und sicher im Browser.',
	'tool.csv-to-xml.operation': 'Konvertieren',
	'tool.csv-to-xml.faq.0.question': 'Wie werden die XML-Elementnamen festgelegt?',
	'tool.csv-to-xml.faq.0.answer':
		'Wenn der Header-Modus aktiv ist, wird jede CSV-Spaltenüberschrift zu einem XML-Kindelement innerhalb eines Zeileneintrags.',
	'tool.csv-to-xml.use_case.0': 'Tabellarische Exporte in XML-Fixtures für Altsysteme umwandeln',
	'tool.csv-to-xml.use_case.1':
		'Prüfen, wie CSV-Header auf zeilenbasierte XML-Datensätze abgebildet werden',

	'tool.csv-to-yaml.display_name': 'CSV nach YAML',
	'tool.csv-to-yaml.tagline': 'CSV-Daten in das YAML-Format konvertieren',
	'tool.csv-to-yaml.description':
		'Konvertieren Sie CSV-Dateien in YAML-Arrays. Mappt Spaltenköpfe auf YAML-Schlüssel.',
	'tool.csv-to-yaml.primary_keyword': 'csv nach yaml',
	'tool.csv-to-yaml.meta_title': 'CSV nach YAML Konverter — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		'Konvertieren Sie CSV sofort in YAML. Keine Datenübertragung erforderlich.',
	'tool.csv-to-yaml.operation': 'Konvertieren',
	'tool.csv-to-yaml.faq.0.question': 'Wofür steht jeder YAML-Eintrag?',
	'tool.csv-to-yaml.faq.0.answer':
		'Jede CSV-Zeile wird zu einem YAML-Objekt, und Spaltenüberschriften werden im Header-Modus zu Schlüsseln.',
	'tool.csv-to-yaml.use_case.0':
		'Tabellarische Konfigurationsdaten in lesbare YAML-Listen überführen',
	'tool.csv-to-yaml.use_case.1':
		'Spreadsheet-gesteuerte Einstellungen in YAML-Workflows verschieben',

	'tool.csv-to-html.display_name': 'CSV nach HTML-Tabelle',
	'tool.csv-to-html.tagline': 'CSV-Daten in eine HTML-Tabelle konvertieren',
	'tool.csv-to-html.description':
		'Konvertieren Sie CSV-Dateien in formatierte HTML-Tabellen. Nutzt die erste Zeile als Header.',
	'tool.csv-to-html.primary_keyword': 'csv nach html tabelle',
	'tool.csv-to-html.meta_title': 'CSV nach HTML Tabellen Konverter — fmtly.dev',
	'tool.csv-to-html.meta_description':
		'Konvertieren Sie CSV sofort in eine HTML-Tabelle. Ideal für Web-Präsentationen.',
	'tool.csv-to-html.operation': 'Konvertieren',
	'tool.csv-to-html.faq.0.question': 'Kann ich die Tabelle vor dem Kopieren des HTML prüfen?',
	'tool.csv-to-html.faq.0.answer':
		'Ja. Das Ausgabepanel bietet sowohl eine gerenderte Vorschau als auch die rohe HTML-Ansicht.',
	'tool.csv-to-html.use_case.0':
		'HTML-Tabellen für Doku, Admin-Oberflächen oder CMS-Snippets erzeugen',
	'tool.csv-to-html.use_case.1':
		'Tabellenstruktur visuell prüfen, bevor generiertes Markup eingebettet wird',

	'tool.csv-formatter.display_name': 'CSV-Formatierer',
	'tool.csv-formatter.tagline': 'CSV-Daten formatieren und normalisieren',
	'tool.csv-formatter.description':
		'Reinigen und formatieren Sie CSV-Daten mit einheitlichen Trennzeichen und Zeilenenden.',
	'tool.csv-formatter.primary_keyword': 'csv formatierer',
	'tool.csv-formatter.meta_title': 'CSV-Formatierer — fmtly.dev',
	'tool.csv-formatter.meta_description': 'Formatieren und reinigen Sie CSV-Daten lokal im Browser.',
	'tool.csv-formatter.operation': 'Formatieren',
	'tool.csv-formatter.faq.0.question': 'Was kann ich beim Formatieren normalisieren?',
	'tool.csv-formatter.faq.0.answer':
		'Sie können Trennzeichen ändern, Zell-Whitespace trimmen, eine Header-Zeile beibehalten, leere Zeilen überspringen und alle Zellen quoten.',
	'tool.csv-formatter.use_case.0': 'CSV-Dateien vor Datenbank- oder BI-Importen standardisieren',
	'tool.csv-formatter.use_case.1': 'Uneinheitliche Spreadsheet-Exporte ohne Server bereinigen',

	'tool.csv-validator.display_name': 'CSV-Validator',
	'tool.csv-validator.tagline': 'CSV-Struktur und Syntax validieren',
	'tool.csv-validator.description':
		'Validieren Sie CSV-Dateien auf konsistente Spaltenanzahl und korrekte Kodierung.',
	'tool.csv-validator.primary_keyword': 'csv validator',
	'tool.csv-validator.meta_title': 'CSV-Validator — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Validieren Sie CSV im Browser. Erkennt Strukturfehler mit Zeilenangaben.',
	'tool.csv-validator.operation': 'Validieren',
	'tool.csv-validator.faq.0.question': 'Welche Probleme erkennt der Validator?',
	'tool.csv-validator.faq.0.answer':
		'Er meldet Parserfehler, leere oder doppelte Header sowie Zeilen mit abweichender Spaltenanzahl.',
	'tool.csv-validator.use_case.0': 'Fehlerhaftes CSV vor Import oder Konvertierung erkennen',
	'tool.csv-validator.use_case.1':
		'Header- und Zeilenbreiten-Konsistenz in geteilten Datensätzen prüfen',

	// ── TOML Tools ────────────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'TOML-Formatierer',
	'tool.toml-formatter.tagline': 'TOML-Konfigurationsdateien formatieren und validieren',
	'tool.toml-formatter.description':
		'Formatieren Sie TOML-Dateien mit einheitlichen Abständen. Validiert Syntax lokal.',
	'tool.toml-formatter.primary_keyword': 'toml formatierer',
	'tool.toml-formatter.meta_title': 'TOML-Formatierer — fmtly.dev',
	'tool.toml-formatter.meta_description':
		'Formatieren und validieren Sie TOML im Browser. Keine Datenübertragung.',
	'tool.toml-formatter.operation': 'Formatieren',
	'tool.toml-validator.display_name': 'TOML-Validator',
	'tool.toml-validator.tagline': 'TOML-Syntax vor dem Formatieren oder Konvertieren prüfen',
	'tool.toml-validator.description':
		'Prüfen Sie TOML-Konfigurationsdateien lokal im Browser. Finden Sie Syntaxfehler vor dem Speichern, Konvertieren oder Vergleichen.',
	'tool.toml-validator.primary_keyword': 'toml validator',
	'tool.toml-validator.meta_title': 'TOML-Validator — fmtly.dev',
	'tool.toml-validator.meta_description':
		'Prüfen Sie TOML im Browser auf Syntaxfehler vor dem Formatieren oder Konvertieren.',
	'tool.toml-validator.operation': 'Prüfen',
	'tool.toml-to-json.display_name': 'TOML zu JSON',
	'tool.toml-to-json.tagline': 'TOML-Dokumente in JSON konvertieren',
	'tool.toml-to-json.description':
		'Konvertieren Sie TOML-Konfigurationsdaten im Browser in formatiertes JSON. Verschachtelte Tabellen, Arrays und Skalare bleiben erhalten.',
	'tool.toml-to-json.primary_keyword': 'toml zu json',
	'tool.toml-to-json.meta_title': 'TOML-zu-JSON-Konverter — fmtly.dev',
	'tool.toml-to-json.meta_description':
		'Konvertieren Sie TOML sofort im Browser in formatiertes JSON. Keine Daten verlassen Ihr Gerät.',
	'tool.toml-to-json.operation': 'Konvertieren',
	'tool.toml-to-yaml.display_name': 'TOML zu YAML',
	'tool.toml-to-yaml.tagline': 'TOML-Dokumente in YAML konvertieren',
	'tool.toml-to-yaml.description':
		'Konvertieren Sie TOML-Konfigurationsdaten im Browser in lesbares YAML. Verschachtelte Tabellen, Arrays und grundlegende Skalare bleiben erhalten.',
	'tool.toml-to-yaml.primary_keyword': 'toml zu yaml',
	'tool.toml-to-yaml.meta_title': 'TOML-zu-YAML-Konverter — fmtly.dev',
	'tool.toml-to-yaml.meta_description':
		'Konvertieren Sie TOML sofort im Browser in YAML. Kein Upload erforderlich.',
	'tool.toml-to-yaml.operation': 'Konvertieren',
	'tool.toml-diff.display_name': 'TOML-Diff',
	'tool.toml-diff.tagline': 'Zwei TOML-Dokumente nebeneinander vergleichen',
	'tool.toml-diff.description':
		'Vergleichen Sie zwei TOML-Dokumente und heben Sie hinzugefügte, entfernte und geänderte Schlüssel hervor. Prüfen Sie Konfigurationsänderungen direkt im Browser.',
	'tool.toml-diff.primary_keyword': 'toml diff',
	'tool.toml-diff.meta_title': 'TOML-Diff-Tool — fmtly.dev',
	'tool.toml-diff.meta_description':
		'Vergleichen Sie zwei TOML-Dokumente im Browser und markieren Sie jede Änderung.',
	'tool.toml-diff.operation': 'Vergleichen',
	'tool.toml-formatter.faq.0.question': 'Ändert das Formatieren TOML-Werte?',
	'tool.toml-formatter.faq.0.answer':
		'Nein. Gültiges TOML wird in ein einheitliches Layout überführt, ohne die geparsten Werte oder die Datenstruktur zu ändern.',
	'tool.toml-formatter.faq.1.question':
		'Wann sollte ich den Formatierer statt des Validators verwenden?',
	'tool.toml-formatter.faq.1.answer':
		'Nutzen Sie den Validator nur zur Syntaxprüfung. Der Formatierer ist sinnvoll, wenn das TOML bereits gültig ist und Sie eine saubere, konsistente Darstellung möchten.',
	'tool.toml-formatter.use_case.0': 'pyproject.toml vor einem Commit vereinheitlichen',
	'tool.toml-formatter.use_case.1':
		'Aus Dokumentationen kopierte Konfigurations-Snippets bereinigen',
	'tool.toml-formatter.use_case.2': 'Lange TOML-Abschnitte leichter lesbar machen',
	'tool.toml-formatter.use_case.3': 'TOML vor Diff oder Konvertierung vorbereiten',
	'tool.toml-validator.faq.0.question': 'Welche TOML-Probleme erkennt der Validator?',
	'tool.toml-validator.faq.0.answer':
		'Er erkennt Parserfehler wie fehlerhafte Strings, ungültige Tabellen-Syntax, defekte Arrays und andere TOML-Syntaxprobleme.',
	'tool.toml-validator.faq.1.question': 'Unterstützt der TOML-Validator Schemas?',
	'tool.toml-validator.faq.1.answer':
		'Nein. Er prüft nur die TOML-Syntax. Er eignet sich, um sicherzustellen, dass ein Dokument sauber geparst werden kann, bevor Sie es formatieren, konvertieren oder vergleichen.',
	'tool.toml-validator.use_case.0': 'pyproject.toml vor Build-Tools prüfen',
	'tool.toml-validator.use_case.1': 'Syntaxfehler in App-Konfigurationen finden',
	'tool.toml-validator.use_case.2': 'Aus Paketdokumentationen kopiertes TOML prüfen',
	'tool.toml-validator.use_case.3': 'Konfigurationsänderungen vor dem Diff validieren',
	'tool.toml-to-json.faq.0.question':
		'Bleiben verschachtelte Tabellen und Arrays in JSON erhalten?',
	'tool.toml-to-json.faq.0.answer':
		'Ja. Geparste TOML-Objekte werden in gleichwertige JSON-Objekte und Arrays umgewandelt, sodass die Struktur erhalten bleibt.',
	'tool.toml-to-json.faq.1.question': 'Wann ist eine Konvertierung von TOML zu JSON sinnvoll?',
	'tool.toml-to-json.faq.1.answer':
		'Sie ist hilfreich, wenn ein Tool, eine API, ein Skript oder ein Test-Setup JSON statt TOML erwartet, aber dieselben Konfigurationsdaten genutzt werden sollen.',
	'tool.toml-to-json.use_case.0': 'TOML-Konfiguration für JavaScript-Tools in JSON umwandeln',
	'tool.toml-to-json.use_case.1': 'TOML als striktere maschinenlesbare Struktur prüfen',
	'tool.toml-to-json.use_case.2': 'TOML-Einstellungen in Fixtures oder Tests wiederverwenden',
	'tool.toml-to-json.use_case.3':
		'Konfigurationsdaten zwischen TOML- und JSON-Systemen überbrücken',
	'tool.toml-to-yaml.faq.0.question': 'Warum sollte ich TOML in YAML konvertieren?',
	'tool.toml-to-yaml.faq.0.answer':
		'YAML lässt sich in Infrastruktur- und Automatisierungs-Workflows oft schneller überblicken. Die Konvertierung hilft, wenn ein Team oder Tool YAML bevorzugt.',
	'tool.toml-to-yaml.faq.1.question': 'Bleibt die TOML-Struktur in YAML erhalten?',
	'tool.toml-to-yaml.faq.1.answer':
		'Ja. Tabellen, verschachtelte Objekte, Arrays und Skalare werden in ihre YAML-Entsprechungen übertragen.',
	'tool.toml-to-yaml.use_case.0':
		'TOML-Konfigurationen für Deployment-Workflows in YAML umschreiben',
	'tool.toml-to-yaml.use_case.1': 'TOML-basierte Einstellungen mit YAML-orientierten Teams teilen',
	'tool.toml-to-yaml.use_case.2': 'Dieselbe Konfiguration in TOML- und YAML-Form vergleichen',
	'tool.toml-to-yaml.use_case.3':
		'Konfiguration zwischen Ökosystemen mit unterschiedlichen Formaten migrieren',
	'tool.toml-diff.faq.0.question': 'Ist TOML-Diff ein Text-Diff oder ein struktureller Diff?',
	'tool.toml-diff.faq.0.answer':
		'Es ist strukturell. Beide Eingaben werden zuerst als TOML geparst und danach nach Schlüsseln, Arrays und Werten verglichen.',
	'tool.toml-diff.faq.1.question': 'Kann ich ungültige TOML-Dokumente vergleichen?',
	'tool.toml-diff.faq.1.answer':
		'Nein. Beide Seiten müssen gültiges TOML sein. Wenn eine Seite nicht geparst werden kann, zeigt das Tool an, welche Seite ungültig ist.',
	'tool.toml-diff.use_case.0': 'Konfigurationsänderungen zwischen zwei Releases prüfen',
	'tool.toml-diff.use_case.1': 'Umgebungsspezifische TOML-Einstellungen vergleichen',
	'tool.toml-diff.use_case.2': 'Generiertes TOML mit einer erwarteten Version abgleichen',
	'tool.toml-diff.use_case.3': 'pyproject.toml- oder Toolchain-Änderungen vor dem Commit prüfen',

	'tool.toml-minifier.display_name': 'TOML-Minifier',
	'tool.toml-minifier.tagline': 'TOML-Konfigurationsdateien minimieren und komprimieren',
	'tool.toml-minifier.description':
		'Entfernen Sie unnötige Leerzeichen und Kommentare aus TOML-Dateien, um die Dateigröße zu reduzieren. Minimieren Sie TOML-Konfigurationen lokal im Browser.',
	'tool.toml-minifier.primary_keyword': 'toml minifier',
	'tool.toml-minifier.meta_title': 'TOML-Minifier — fmtly.dev',
	'tool.toml-minifier.meta_description':
		'Minimieren und komprimieren Sie TOML-Dateien im Browser. Leerzeichen und Kommentare sicher entfernen.',
	'tool.toml-minifier.operation': 'Minimieren',
	'tool.toml-minifier.faq.0.question': 'Was macht der TOML-Minifier?',
	'tool.toml-minifier.faq.0.answer':
		'Er parst Ihre TOML-Datei und schreibt sie mit dem minimalen Anteil an Leerzeichen neu. Kommentare werden ebenfalls entfernt, um die Dateigröße zu reduzieren.',
	'tool.toml-minifier.faq.1.question': 'Ist es sicher, TOML-Dateien zu minimieren?',
	'tool.toml-minifier.faq.1.answer':
		'Ja. Der Minifier stellt sicher, dass die strukturelle Bedeutung der TOML-Daten exakt gleich bleibt. Nur Formatierungen und Kommentare werden entfernt.',
	'tool.toml-minifier.use_case.0': 'Große TOML-Konfigurationen für das Deployment komprimieren',
	'tool.toml-minifier.use_case.1': 'Kommentare vor dem Teilen von Konfigurationsdateien entfernen',
	'tool.toml-minifier.use_case.2':
		'TOML-Dateien für eingebettete Systeme oder begrenzten Speicher vorbereiten',
	'tool.toml-minifier.use_case.3': 'TOML-Dateien in ein kompaktes Format überführen',

	'tool.toml-to-xml.display_name': 'TOML zu XML',
	'tool.toml-to-xml.tagline': 'TOML-Konfigurationsdateien in das XML-Format konvertieren',
	'tool.toml-to-xml.description':
		'Konvertieren Sie TOML-Datenstrukturen direkt im Browser in XML-Dokumente. Verschachtelte Tabellen und Arrays bleiben in der XML-Knotenhierarchie erhalten.',
	'tool.toml-to-xml.primary_keyword': 'toml zu xml',
	'tool.toml-to-xml.meta_title': 'TOML-zu-XML-Konverter — fmtly.dev',
	'tool.toml-to-xml.meta_description':
		'Konvertieren Sie TOML sofort im Browser in XML. Keine Daten verlassen Ihr Gerät.',
	'tool.toml-to-xml.operation': 'Konvertieren',
	'tool.toml-to-xml.faq.0.question': 'Wie werden TOML-Arrays in XML konvertiert?',
	'tool.toml-to-xml.faq.0.answer':
		'XML unterstützt standardmäßig keine unbenannten Arrays, daher werden Arrays je nach Parser meist durch Wiederholung des Knotennamens oder durch Standard-Listen-Tags abgebildet.',
	'tool.toml-to-xml.faq.1.question': 'Kann ich es später wieder in TOML umwandeln?',
	'tool.toml-to-xml.faq.1.answer':
		'Ja, Sie können unseren XML-zu-TOML-Konverter nutzen, allerdings können bestimmte Typinformationen (wie explizite Strings vs. Zahlen) vom XML-Parser abweichend interpretiert werden.',
	'tool.toml-to-xml.use_case.0': 'Moderne TOML-Konfigurationen an Legacy-XML-Systeme anpassen',
	'tool.toml-to-xml.use_case.1': 'TOML-basierte Apps in Enterprise-SOAP-APIs integrieren',
	'tool.toml-to-xml.use_case.2':
		'pyproject.toml-Daten in Maven- oder Ant-Build-Dateien konvertieren',
	'tool.toml-to-xml.use_case.3': 'Konfigurationslogik in generische XML-Datensätze extrahieren',

	'tool.toml-to-html.display_name': 'TOML zu HTML',
	'tool.toml-to-html.tagline': 'TOML-Konfiguration in eine responsive HTML-Tabelle konvertieren',
	'tool.toml-to-html.description':
		'Wandeln Sie TOML-Konfigurationsdateien in saubere, lesbare HTML-Tabellen um. Perfekt für Dokumentation, Reporting und das Teilen von Konfigurationsständen.',
	'tool.toml-to-html.primary_keyword': 'toml zu html',
	'tool.toml-to-html.meta_title': 'TOML-zu-HTML-Tabellen-Konverter — fmtly.dev',
	'tool.toml-to-html.meta_description':
		'Konvertieren Sie TOML sofort im Browser in HTML-Tabellen. Erstellt responsive Tabellen aus verschachtelten TOML-Daten.',
	'tool.toml-to-html.operation': 'Konvertieren',
	'tool.toml-to-html.faq.0.question': 'Wie werden verschachtelte TOML-Tabellen behandelt?',
	'tool.toml-to-html.faq.0.answer':
		'Verschachtelte Tabellen und Arrays werden rekursiv als innere HTML-Tabellen gerendert, wodurch die exakte Datenstruktur visuell erhalten bleibt.',
	'tool.toml-to-html.faq.1.question':
		'Kann ich die Ausgabe direkt in meine Dokumentation kopieren?',
	'tool.toml-to-html.faq.1.answer':
		'Ja, die Ausgabe ist Standard-HTML, das direkt in Markdown-Dateien, Notion, Confluence oder jede normale Webseite eingefügt werden kann.',
	'tool.toml-to-html.use_case.0': 'Visuelle Berichte aus TOML-Konfigurationsdateien erstellen',
	'tool.toml-to-html.use_case.1': 'Anwendungseinstellungen in die Projektdokumentation einfügen',
	'tool.toml-to-html.use_case.2': 'Umgebungsspezifische Variablen auf internen Dashboards anzeigen',
	'tool.toml-to-html.use_case.3':
		'Komplexe verschachtelte TOML-Strukturen übersichtlich überprüfen',

	'ui.actions.choose_sample': 'Wählen…',
	'ui.actions.clear': 'Löschen',
	'ui.actions.copied': 'Kopiert',
	'ui.actions.copy': 'Kopieren',
	'ui.actions.copy_all': 'Alle kopieren',
	'ui.actions.download': 'Herunterladen',
	'ui.actions.fetch': 'Abrufen',
	'ui.actions.format': 'Formatieren',
	'ui.actions.load_url': 'URL laden',
	'ui.actions.minify': 'Minifizieren',
	'ui.actions.run': 'Ausführen',
	'ui.actions.running': 'Läuft…',
	'ui.actions.sample': 'Beispiel',
	'ui.actions.search': 'Suche',
	'ui.actions.diff': 'Diff',
	'ui.actions.share': 'Teilen',
	'ui.layout.tabs.output': 'Ausgabe',
	'ui.layout.tabs.tree': 'Baumansicht',
	'ui.layout.placeholders.input': 'Eingabe',
	'ui.layout.placeholders.output': 'Ausgabe',
	'ui.layout.placeholders.output_empty': 'Die Ausgabe erscheint hier',
	'ui.layout.placeholders.tree_empty': 'Baumansicht',
	'ui.layout.placeholders.paste_original': 'Original hier einfügen…',
	'ui.layout.placeholders.paste_modified': 'Geänderte Version hier einfügen…',
	'ui.diff.labels.original': 'Original',
	'ui.diff.labels.modified': 'Geändert',
	'ui.diff.labels.input_panel': 'Diff-Eingabepanel',
	'ui.diff.controls.ignore_order': 'Array-Reihenfolge ignorieren',
	'ui.diff.controls.only_diffs': 'Nur Unterschiede zeigen',
	'ui.diff.controls.case_sensitive': 'Groß-/Kleinschreibung',
	'ui.diff.controls.ignore_keys_placeholder': 'Schlüssel ignorieren: id, timestamp…',
	'ui.diff.controls.swap': 'Tauschen',
	'ui.diff.controls.export': 'Exportieren',
	'ui.diff.controls.copy_patch': 'Als JSON-Patch kopieren',
	'ui.diff.controls.export_md': 'Markdown-Bericht laden',
	'ui.diff.controls.export_csv': 'CSV herunterladen',
	'ui.diff.view.list': 'Listenansicht',
	'ui.diff.view.monaco': 'Inline-Diff-Ansicht',
	'ui.diff.view.inline_toggle': 'Inline / Nebeneinander umschalten',
	'ui.diff.summary.added': 'hinzugefügt',
	'ui.diff.summary.removed': 'entfernt',
	'ui.diff.summary.modified': 'geändert',
	'ui.diff.summary.similar': 'ähnlich',
	'ui.diff.summary.empty': '{language} in beide Panels eingeben zum Vergleichen',
	'ui.diff.summary.identical': 'Dokumente sind identisch',
	'ui.diff.summary.difference': 'Unterschied',
	'ui.diff.summary.differences': 'Unterschiede',
	'ui.diff.summary.found': 'gefunden',
	'ui.diff.filter.placeholder': 'Nach Pfad filtern…',
	'ui.diff.types.root': '(Wurzel)',
	'ui.diff.types.added': 'Hinzugefügt',
	'ui.diff.types.removed': 'Entfernt',
	'ui.diff.types.modified': 'Geändert',
	'ui.diff.types.unchanged': 'Unverändert',
	'ui.diff.actions.format': 'Formatieren',
	'ui.diff.actions.copy_value': 'Wert kopieren',
	'ui.diff.actions.collapse': 'Zuklappen',
	'ui.diff.actions.expand': 'Aufklappen',
	'ui.diff.toast.format_error': 'Formatierung nicht möglich – ungültiges {language}',
	'ui.diff.error.invalid_left': 'Ungültiges {language} in der linken Eingabe (Original)',
	'ui.diff.error.invalid_right': 'Ungültiges {language} in der rechten Eingabe (Geändert)',
	'ui.diff.toast.patch_success': 'JSON-Patch in Zwischenablage kopiert',
	'ui.diff.toast.copy_value': 'Wert kopiert',
	'ui.diff.toast.share_copied': 'Teilen-Link in Zwischenablage kopiert',
	'ui.diff.meta.chars': 'Zeichen',
	'ui.diff.empty.hint': 'Fügen Sie oben in beide Panels {language} ein, um sie zu vergleichen.',
	'ui.diff.report.title': '{language}-Diff-Bericht',
	'ui.diff.empty.load_sample': 'Beispieldaten laden',
	'ui.layout.placeholders.modified': 'Geändert',
	'ui.layout.aria.input_panel': 'Eingabepanel',
	'ui.layout.aria.output_panel': 'Ausgabepanel',
	'ui.layout.aria.copy_output': 'Ausgabe kopieren',
	'ui.layout.aria.download_output': 'Ausgabe herunterladen',
	'ui.actions.upload': 'Hochladen',
	'ui.actions.validate': 'Validieren',
	'ui.actions.wrap': 'Zeilenumbruch',
	'ui.confirm.clear': 'Aktuelle {language}-Eingabe löschen?',
	'ui.confirm.clear_description': 'Diese Aktion kann nicht rückgängig gemacht werden.',
	'ui.drop_files': '.{extension} Dateien ablegen',
	'ui.drop_to_load': 'Zum Laden ablegen',
	'ui.history.clear_all': 'Verlauf löschen',
	'ui.history.clear_confirm': 'Gesamten Verlauf löschen?',
	'ui.history.clear_description': 'Diese Aktion kann nicht rückgängig gemacht werden.',
	'ui.history.empty': 'Noch kein Verlauf vorhanden',
	'ui.history.recent': 'Zuletzt verwendet',
	'ui.history.title': 'Verlauf',
	'ui.paste_here': 'Hier einfügen…',
	'ui.paste_language_here': '{language} hier einfügen…',
	'ui.placeholder.original_yaml': 'Originales YAML hier einfügen…',
	'ui.placeholder.modified_yaml': 'Geändertes YAML hier einfügen…',
	'ui.placeholder.search_tools_count': 'Suche in {count}+ Tools...',
	'ui.placeholder.url': 'https://example.com/data.json',
	'ui.placeholder.xpath': '//book[@available=\x27true\x27]',
	'ui.related_categories': 'Ähnliche Kategorien',
	'ui.stats.info': '{encoding} · {size} · {lines} Zeilen · Tiefe: {depth}',
	'ui.toast.copy_error': 'Kopieren fehlgeschlagen – Browser-Berechtigungen prüfen',
	'ui.toast.copy_success': 'In Zwischenablage kopiert',
	'ui.toast.input_cleared': 'Eingabe gelöscht',
	'ui.loaded_sample': '{label} geladen',
	'ui.toast.url_error': 'Fehler beim Abrufen – versuchen Sie es direkt einzufügen',
	'ui.toast.url_loaded': 'Von URL geladen',
	'share.link_size': 'Link-Größe',
	'share.large_link_warning': 'Dieser Link ist groß und funktioniert evtl. nicht in allen Browsern',
	'share.data_encoded_note':
		'Die Daten sind in der URL kodiert und werden nie an einen Server gesendet.',
	'share.enter_input_first': 'Geben Sie zuerst etwas ein, um einen Link zu generieren.',
	'ui.share_url_copied': 'Teilen-URL kopiert',
	'ui.copied': 'Kopiert',
	'ui.copy_link': 'Link kopieren',
	'ui.share': 'Teilen',
	'ui.close': 'Schließen',
	'ui.cancel': 'Abbrechen',
	'ui.confirm': 'Bestätigen',
	'ui.tool_count.one': '1 Tool',
	'ui.tool_count.other': '{count} Tools',
	'ui.tree.collapse': 'Zuklappen',
	'ui.tree.expand': 'Aufklappen',
	'ui.tree.root': 'Wurzel',
	'ui.tree.summary': '{keyCount} Schlüssel · {valueCount} Werte · Tiefe {maxDepth}',
	'ui.validity.empty': 'Leer',
	'ui.validity.error_at': 'Zeile {line}, Spalte {column}: {message}',
	'ui.validity.invalid': 'Ungültiges {language}',
	'ui.validity.valid': 'Gültiges {language}',
	'ui.xpath.no_results': 'Keine Ergebnisse. Versuchen Sie es mit einem anderen Ausdruck.',
	'ui.xpath.placeholder': 'XML links einfügen, dann XPath-Ausdruck ausführen.',
	'ui.xpath.results_count.one': '1 Ergebnis',
	'ui.xpath.results_count.other': '{count} Ergebnisse',
	'ui.validator.syntax': 'Syntax',
	'ui.validator.mode': 'Validator mode',
	'ui.validator.issue': 'issue',
	'ui.validator.issues': 'issues',
	'ui.validator.row': 'Zeile',
	'ui.validator.warning': 'warning',
	'ui.validator.first_issue': 'Erstes Problem',
	'ui.validator.repair_json': 'JSON reparieren',
	'ui.validator.schema_title': 'JSON-Schema',
	'ui.validator.schema_standard': 'Draft-07+ via AJV',
	'ui.validator.paste_schema_placeholder': 'JSON-Schema hier einfügen…',
	'ui.validator.paste_json': 'JSON zum Validieren einfügen',
	'ui.validator.paste_schema': 'JSON-Schema zum Validieren einfügen',
	'ui.validator.validating_schema': 'Schema wird validiert…',
	'ui.validator.schema_invalid': 'Schema ist ungültig',
	'ui.validator.json_matches_schema': 'JSON entspricht dem Schema',
	'ui.validator.schema_validation_failed': 'Schema-Validierung fehlgeschlagen',
	'ui.validator.no_syntax_errors': 'Keine Syntaxfehler gefunden.',
	'ui.validator.json_matches_current_schema': 'JSON entspricht dem aktuellen Schema.',
	'ui.validator.schema_match': 'Schema-Übereinstimmung',
	'ui.validator.valid_json': 'Gültiges JSON',
	'ui.validator.explanation_must_satisfy': 'muss erfüllen',
	'ui.validator.data_error_pos': 'Datenfehler in Zeile {line}, Spalte {column}',
	'ui.validator.paste_yaml': 'YAML zum Validieren einfügen',
	'ui.validator.yaml_paste_schema': 'Ein Schema zum Validieren einfügen',
	'ui.validator.yaml_validating_schema': 'Schema wird validiert…',
	'ui.validator.yaml_matches_schema': 'YAML entspricht dem Schema',
	'ui.validator.yaml_matches_current_schema': 'YAML entspricht dem aktuellen Schema.',
	'ui.validator.yaml_schema_title': 'Schema',
	'ui.validator.yaml_schema_standard': 'JSON-Schema Draft-07+ via AJV',
	'ui.validator.yaml_paste_schema_placeholder': 'JSON-Schema oder YAML-Schema hier einfügen…',
	'ui.validator.yaml_schema_validation_desc':
		'Prüfen Sie die YAML-Struktur gegen ein JSON-Schema. Die Schema-Eingabe kann als JSON oder YAML geschrieben werden.',
	'ui.load_sample': 'Beispiel laden',
	'ui.share_url': 'Teilen-URL',
	'ui.format_xml': 'XML formatieren',
	'ui.format_yaml': 'YAML formatieren',
	'ui.minify_xml': 'XML minifizieren',
	'ui.format_beautify': 'Formatieren / Verschönern',
	'ui.minify': 'Minifizieren',
	'ui.repair_json': 'JSON reparieren',
	'ui.expand_all': 'Alle aufklappen',
	'ui.collapse_all': 'Alle zuklappen',
	'ui.expand_to_depth': 'Bis Tiefe {depth} aufklappen',
	switch_to_tab: 'Zu Tab {index} wechseln',
	switch_to_xml_tab: 'Zu XML-Tab {index} wechseln',
	switch_to_yaml_tab: 'Zu YAML-Tab {index} wechseln',
	use_cases: 'Anwendungsfälle',
	faq: 'FAQ',
	'ui.validator.schema_error_pos': 'Schemafehler in Zeile {line}, Spalte {column}',
	'ui.validator.syntax_error_pos': 'Syntaxfehler in Zeile {line}, Spalte {column}',
	'ui.validator.line_col_label': 'Zeile {line}, Spalte {column}',
	'ui.validator.well_formed': 'Wohlgeformt',
	'ui.validator.invalid_xml': 'Ungültiges XML',
	'ui.validator.loading_editor': 'Editor wird geladen…',
	'ui.validator.xml_paste_hint': 'XML einfügen oder tippen zum Validieren.',
	'ui.validator.xml_validation_desc':
		'Prüft auf Wohlgeformtheit: offene Tags, falsche Verschachtelung usw.',
	'ui.validator.xml_success_title': 'Wohlgeformtes XML',
	'ui.validator.xml_success_desc': 'Keine Syntaxfehler. Das Dokument ist wohlgeformt.',
	'ui.validator.error_count.one': '1 Fehler gefunden',
	'ui.validator.error_count.other': '{count} Fehler gefunden',
	'ui.toast.clipboard_xml': 'Zwischenablage XML',
	'ui.toast.pasted_xml': 'XML aus Zwischenablage eingefügt',
	'ui.toast.xml_file_types': 'Nur .xml, .svg, .xhtml, .xsd, .wsdl und .txt unterstützt',
	'ui.aria.xml_input_panel': 'XML-Eingabepanel',
	'ui.aria.xml_output_panel': 'XML-Ausgabepanel',
	'ui.aria.xml_workspace_tabs': 'XML-Arbeitsbereich-Tabs',
	'ui.aria.xpath_panel': 'XPath-Abfragepanel',
	'ui.aria.xml_validator': 'XML-Validator',
	'ui.aria.yaml_output_panel': 'YAML-Ausgabepanel',
	'ui.aria.yaml_validator': 'YAML-Validator',
	'ui.aria.csv_validator': 'CSV-Validator',
	'ui.csv.controls.delimiter': 'Trennzeichen',
	'ui.csv.controls.header_row': 'Header-Zeile',
	'ui.csv.controls.skip_empty_lines': 'Leere Zeilen überspringen',
	'ui.csv.controls.trim_cells': 'Zellen trimmen',
	'ui.csv.controls.quote_all': 'Alle Zellen quoten',
	'ui.csv.delimiter.comma': 'Komma (,)',
	'ui.csv.delimiter.semicolon': 'Semikolon (;)',
	'ui.csv.delimiter.tab': 'Tabulator',
	'ui.csv.delimiter.pipe': 'Pipe (|)',
	'ui.csv.view.preview': 'Vorschau',
	'ui.csv.view.raw': 'Roh',
	'ui.csv.stats.rows': 'Zeilen',
	'ui.csv.stats.columns': 'Spalten',
	'ui.csv.preview.column_name': 'Spalte {index}',
	'ui.csv.preview.no_rows': 'Keine Datenzeilen zur Vorschau',
	'ui.csv.preview.delimiter': 'Trennzeichen',
	'ui.csv.preview.header_mode': 'Header',
	'ui.csv.preview.no_header': 'Generierte Spalten',
	'ui.csv.preview.remaining_rows': 'In der Vorschau werden nur noch {count} weitere Zeilen gezeigt',
	'ui.csv.empty.title': 'CSV einfügen, um zu starten',
	'ui.csv.empty.desc':
		'CSV-Daten vollständig im Browser formatieren, validieren, voranschaun oder konvertieren.',
	'ui.csv.empty.waiting_title': 'Warte auf CSV-Ausgabe',
	'ui.csv.empty.waiting_desc':
		'Geparste Zeilen, formatierte Ausgabe oder Konvertierungsergebnisse erscheinen hier.',
	'ui.validator.invalid_yaml': 'Ungültiges YAML',
	'ui.validator.invalid_csv': 'Ungültiges CSV',
	'ui.validator.csv_paste_hint': 'CSV zum Validieren einfügen oder eingeben.',
	'ui.validator.csv_validation_desc':
		'Prüft Trennzeichenstruktur, Zeilenkonsistenz und fehlerhafte Anführungszeichen in CSV-Eingaben.',
	'ui.validator.csv_error.header_empty': 'Header-Spalte {column} ist leer',
	'ui.validator.csv_error.duplicate_header': 'Doppelter Header "{value}" gefunden',
	'ui.validator.csv_error.row_width':
		'Zeile {row} hat {actual} Spalten, erwartet wurden {expected}',
	'ui.validator.csv_success_title': 'Gültiges CSV',
	'ui.validator.csv_success_desc':
		'Es wurden keine strukturellen CSV-Fehler gefunden. Das Dokument kann erfolgreich geparst werden.',
	'ui.validator.csv_paste_schema': 'Schema zum Validieren einfügen',
	'ui.validator.csv_paste_schema_data': 'CSV zum Validieren einfügen',
	'ui.validator.csv_validating_schema': 'Schema wird validiert…',
	'ui.validator.csv_matches_schema': 'CSV entspricht dem Schema',
	'ui.validator.csv_matches_current_schema': 'Die CSV-Zeilen entsprechen dem aktuellen Schema.',
	'ui.validator.csv_schema_title': 'Schema',
	'ui.validator.csv_schema_standard': 'JSON Schema Draft-07+ via AJV',
	'ui.validator.csv_paste_schema_placeholder': 'JSON Schema oder YAML-Schema hier einfügen…',
	'ui.validator.csv_schema_validation_desc':
		'Validiert CSV-Zeilen gegen ein browserseitiges Schema. Jede geparste Zeile wird mit den aktuellen CSV-Optionen als Objekt geprüft.',
	'ui.validator.yaml_paste_hint': 'YAML zum Validieren einfügen oder eingeben.',
	'ui.validator.yaml_validation_desc':
		'Prüft YAML-Syntax, Einrückungen, ungültige Zeichen und fehlerhafte Strukturen.',
	'ui.validator.yaml_success_title': 'Gültiges YAML',
	'ui.validator.yaml_success_desc':
		'Keine Syntaxfehler gefunden. Das Dokument kann erfolgreich als YAML geparst werden.',
	'ui.validator.yaml_warning_title': 'Gültiges YAML mit Stilwarnungen',
	'ui.validator.yaml_warning_desc':
		'Das Dokument lässt sich erfolgreich parsen, aber einige Stilprobleme können Lesbarkeit oder Konsistenz verschlechtern.',
	'ui.validator.yaml_lint.tabs':
		'Tabs in der Einrückung gefunden. YAML ist mit reinen Leerzeichen meist sicherer.',
	'ui.validator.yaml_lint.trailing_whitespace': 'Nachgestellte Leerzeichen gefunden.',
	'ui.validator.yaml_lint.odd_indentation':
		'Ungerade Einrückungsbreite gefunden. YAML ist mit 2-Leerzeichen-Einrückung meist konsistenter.',
	'ui.convert.to_json': '→ JSON',
	'ui.convert.to_yaml': '→ YAML',
	'ui.convert.to_csv': '→ CSV',
	'ui.convert.to_xml': '→ XML',
	'ui.convert.to_html': '→ HTML',
	'ui.convert.to_toml': '→ TOML',
	'ui.convert.to_markdown': '→ MD',
	'ui.query.jsonpath': 'JSONPath',
	'ui.query.jmespath': 'JMESPath',
	'ui.query.xpath': 'XPath',
	'ui.query.stats.chars': 'Zeichen',
	'ui.query.stats.lines': 'Zeilen',
	'ui.query.result': 'Ergebnis',
	'ui.query.results': 'Ergebnisse',
	'ui.query.history': 'Verlauf',
	'ui.query.sample_query': 'Beispielabfrage',
	'ui.query.guide': 'Anleitung',
	'ui.query.query': 'Abfrage',
	'ui.query.mode': 'Abfragemodus',
	'ui.query.running': 'Abfrage läuft…',
	'ui.query.empty_input': 'JSON links einfügen für Abfrage.',
	'ui.query.empty_input_yaml': 'YAML links einfügen für Abfrage.',
	'ui.query.empty_query': 'Abfrage eingeben für Ergebnisse.',
	'ui.query.error_fallback': 'Abfrage fehlgeschlagen',
	'ui.query.copy_error': 'Ausgabe nicht kopierbar',
	'ui.aria.json_query_panel': 'JSON-Abfragebereich',
	'ui.aria.yaml_query_panel': 'YAML-Abfragebereich',
	'ui.status.processing': 'Verarbeitung…',
	'ui.status.waiting_output': 'Die Ausgabe erscheint hier',
	'ui.output.controls.spaces': 'Leerzeichen',
	'ui.output.stats.chars': 'Zeichen',
	'ui.output.stats.lines': 'Zeilen',
	'ui.output.stats.documents': 'Dokumente',
	'ui.output.stats.top_level_keys': 'Top-Level-Schlüssel',
	'ui.output.stats.keys': 'Schlüssel',
	'ui.output.stats.objects': 'Objekte',
	'ui.output.stats.arrays': 'Arrays',
	'ui.output.stats.strings': 'Strings',
	'ui.output.stats.values': 'Werte',
	'ui.output.stats.numbers': 'Zahlen',
	'ui.output.stats.booleans': 'Booleans',
	'ui.output.stats.nulls': 'Null-Werte',
	'ui.output.stats.depth': 'Tiefe',
	'ui.output.stats.size_in': 'in',
	'ui.output.stats.size_out': 'out',
	'ui.output.original': 'Original',
	'ui.command_palette.title': 'Befehlspalette',
	'ui.command_palette.placeholder': 'Tools, Kategorien und Formate suchen…',
	'ui.command_palette.recent': 'Zuletzt verwendet',
	'ui.command_palette.no_results': 'Keine passenden Tools gefunden',
	'ui.command_palette.hint_navigate': 'Navigieren',
	'ui.command_palette.hint_open': 'Öffnen',
	'ui.command_palette.hint_close': 'Schließen',
	'ui.output.minified': 'Minifiziert',
	'ui.output.saved': 'gespart',
	'ui.output.meta.minified': 'MINIFIZIERT',
	'ui.output.actions.wrap': 'Umbruch',
	'ui.output.actions.compare': 'Vergleichen',
	'ui.output.actions.copy_json': 'Als JSON kopieren',
	'ui.output.actions.copy_js': 'Als JS-Objekt kopieren',
	'ui.output.actions.copy_python': 'Als Python-Dict kopieren',
	'ui.output.actions.copy_escaped': 'Maskiert kopieren',
	'ui.output.actions.copy': 'Kopieren',
	'ui.output.actions.download': 'Herunterladen',
	'ui.output.compare.input': 'Eingabe',
	'ui.output.compare.output': 'Ausgabe',
	'ui.output.error.invalid_title': 'Ungültiges JSON',
	'ui.output.controls.indent': 'Einrücken',
	'ui.output.controls.tab': 'Tab',
	'ui.output.controls.sort_keys': 'Schlüssel sortieren',
	'ui.output.controls.clean': 'Reinigen',
	'ui.output.controls.clean_nulls': 'Null-Werte entfernen',
	'ui.output.controls.clean_strings': 'Leere Strings entfernen',
	'ui.output.controls.clean_arrays': 'Leere Arrays entfernen',
	'ui.output.controls.clean_objects': 'Leere Objekte entfernen',
	'ui.output.controls.apply': 'Anwenden',
	'ui.json_flatten.tab_label': 'Flatten',
	'ui.json_flatten.mode_label': 'Modus',
	'ui.json_flatten.mode.flatten': 'Abflachen',
	'ui.json_flatten.mode.unflatten': 'Entfalten',
	'ui.json_flatten.separator': 'Trennzeichen',
	'ui.json_flatten.separator_placeholder': '.',
	'ui.json_flatten.error.generic':
		'JSON konnte mit den aktuellen Flatten-Einstellungen nicht umgewandelt werden.',
	'ui.json_flatten.error.empty_separator': 'Trennzeichen darf nicht leer sein.',
	'ui.json_flatten.error.invalid_result': 'Umwandlung fehlgeschlagen: ungültige Ausgabe.',
	'ui.json_flatten.error.invalid_flat_object':
		'Die Entfalten-Eingabe muss ein JSON-Objekt mit flachen Pfaden sein.',
	'ui.json_flatten.error.root_conflict':
		'Der Root-Schlüssel darf nicht zusammen mit anderen flachen Pfaden verwendet werden.',
	'ui.json_flatten.error.invalid_path': 'Mindestens ein flacher Pfad ist ungültig.',
	'ui.json_flatten.error.invalid_escape': 'Ein flacher Pfad enthält eine ungültige Escape-Sequenz.',
	'ui.json_flatten.error.invalid_array_index':
		'Array-Indizes in flachen Pfaden müssen nicht-negative Ganzzahlen sein.',
	'ui.json_flatten.error.path_conflict':
		'Flache Pfade stehen im Konflikt und können nicht sicher zusammengeführt werden.',
	'ui.json_flatten.error.unsafe_key':
		'Der Pfad enthält einen unsicheren Schlüssel (__proto__, constructor oder prototype).',
	'ui.json_patch.tab_label': 'Patch',
	'ui.json_patch.mode_label': 'Modus',
	'ui.json_patch.mode.generate': 'Patch erzeugen',
	'ui.json_patch.mode.apply': 'Patch anwenden',
	'ui.json_patch.target_label': 'Ziel-JSON',
	'ui.json_patch.patch_label': 'JSON Patch (RFC 6902)',
	'ui.json_patch.target_placeholder': 'Ziel-JSON hier einfügen…',
	'ui.json_patch.patch_placeholder': 'JSON-Patch-Array hier einfügen…',
	'ui.json_patch.base_label': 'Basis-JSON',
	'ui.json_patch.base_hint':
		'Im Eingabefeld steht das Basis-JSON. Die Ausgabe zeigt den erzeugten Patch.',
	'ui.json_patch.apply_hint':
		'Im Eingabefeld steht das Basis-JSON. Die Ausgabe zeigt das gepatchte Ergebnis.',
	'ui.json_patch.result_label_generate': 'Erzeugter Patch',
	'ui.json_patch.result_label_apply': 'Gepatchtes JSON',
	'ui.json_patch.empty_generate':
		'Fügen Sie ein Ziel-JSON hinzu, um einen RFC-6902-Patch zu erzeugen.',
	'ui.json_patch.empty_apply':
		'Fügen Sie ein JSON-Patch-Array hinzu, um es auf das Basisdokument anzuwenden.',
	'ui.json_patch.error.generic':
		'JSON Patch konnte mit den aktuellen Eingaben nicht verarbeitet werden.',
	'ui.json_patch.error.invalid_result': 'Patch-Vorgang fehlgeschlagen: ungültige Ausgabe.',
	'ui.json_patch.error.invalid_patch_array':
		'Patch-Eingabe muss ein JSON-Array mit Operationen sein.',
	'ui.json_patch.error.invalid_operation': 'Patch enthält ein ungültiges Operationsobjekt.',
	'ui.json_patch.error.unsupported_operation': 'Patch enthält eine nicht unterstützte Operation.',
	'ui.json_patch.error.missing_from': 'Für diese Operation fehlt der erforderliche "from"-Pfad.',
	'ui.json_patch.error.missing_value': 'Für diese Operation fehlt der erforderliche "value".',
	'ui.json_patch.error.invalid_pointer': 'Patch enthält einen ungültigen JSON-Pointer-Pfad.',
	'ui.json_patch.error.path_not_found': 'Patch-Pfad wurde im aktuellen Dokument nicht gefunden.',
	'ui.json_patch.error.test_failed':
		'Die Patch-Testoperation ist für den angegebenen Pfad fehlgeschlagen.',
	'ui.json_patch.error.invalid_array_index': 'Patch verweist auf einen ungültigen Array-Index.',

	// ── FAQ & Use Cases ──────────────────────────────────────────
	'tool.json-formatter.faq.0.question': 'Was ist JSON-Formatierung?',
	'tool.json-formatter.faq.0.answer':
		'Die JSON-Formatierung ist der Prozess der Organisation von JSON-Daten mit korrekter Einrückung und Zeilenumbrüchen, um sie lesbarer zu machen.',
	'tool.json-formatter.faq.1.question': 'Kann ich die Einrückung anpassen?',
	'tool.json-formatter.faq.1.answer':
		'Ja! Sie können zwischen 2 Leerzeichen, 4 Leerzeichen oder Tabs wählen. Der Formatierer bewahrt die Struktur Ihrer Daten.',
	'tool.json-formatter.faq.2.question': 'Verändert dieses Tool meine Daten?',
	'tool.json-formatter.faq.2.answer':
		'Nein. Es ändert nur die visuelle Darstellung. Die tatsächlichen Daten, Schlüssel und Werte bleiben identisch.',
	'tool.json-formatter.faq.3.question': 'Kann ich JSON-Schlüssel sortieren?',
	'tool.json-formatter.faq.3.answer':
		'Ja! Aktivieren Sie "Schlüssel sortieren", um alle Objektschlüssel alphabetisch zu ordnen. Hilfreich beim Vergleichen von Dateien.',
	'tool.json-formatter.use_case.0': 'API-Antworten lesbar machen für Debugging',
	'tool.json-formatter.use_case.1': 'Minifizierte JSON-Dateien aus Webquellen säubern',
	'tool.json-formatter.use_case.2':
		'Konfigurationsdateien einheitlich für die Versionskontrolle vorbereiten',
	'tool.json-formatter.use_case.3': 'JSON-Daten präsentabel für die Dokumentation aufbereiten',
	'tool.json-formatter.use_case.4': 'JSON vor manueller Bearbeitung validieren und formatieren',

	'tool.json-validator.faq.0.question': 'Was prüft die JSON-Validierung?',
	'tool.json-validator.faq.0.answer':
		'Sie prüft auf Syntaxfehler wie fehlende Klammern, falsche Anführungszeichen, doppelte Schlüssel und ungültige Escape-Sequenzen.',
	'tool.json-validator.faq.1.question':
		'Was ist der Unterschied zwischen Syntax- und Schema-Validierung?',
	'tool.json-validator.faq.1.answer':
		'Syntaxvalidierung prüft auf korrekten Aufbau (Wohlgeformtheit). Schemavalidierung prüft gegen vordefinierte Regeln (Datentypen, Pflichtfelder).',
	'tool.json-validator.faq.2.question': 'Kann ich JSON mit Kommentaren validieren?',
	'tool.json-validator.faq.2.answer':
		'Ja! Dieser Validator unterstützt JSON5, was Kommentare (// und /* */) sowie einfache Anführungszeichen erlaubt.',
	'tool.json-validator.use_case.0': 'API-Antworten vor der Weiterverarbeitung prüfen',
	'tool.json-validator.use_case.1': 'Konfigurationsdateien vor dem Deployment auf Fehler prüfen',
	'tool.json-validator.use_case.2': 'Vom Benutzer gesendete JSON-Daten in Formularen validieren',
	'tool.json-validator.use_case.3': 'Parsing-Fehler im eigenen Code debuggen',
	'tool.json-validator.use_case.4': 'Datenintegrität beim Datenaustausch sicherstellen',

	'tool.json-minifier.faq.0.question': 'Was ist JSON-Minifizierung?',
	'tool.json-minifier.faq.0.answer':
		'Das Entfernen aller unnötigen Zeichen (Leerzeichen, Umbrüche), um die Dateigröße ohne Funktionsverlust zu reduzieren.',
	'tool.json-minifier.faq.1.question': 'Beeinflusst Minifizierung die Funktion?',
	'tool.json-minifier.faq.1.answer':
		'Nein. Nur die visuelle Formatierung wird entfernt. Die Datenstruktur bleibt voll kompatibel.',
	'tool.json-minifier.faq.2.question': 'Wann sollte ich minifiziertes JSON nutzen?',
	'tool.json-minifier.faq.2.answer':
		'In Produktionsumgebungen und für API-Antworten, um Bandbreite zu sparen und Übertragungen zu beschleunigen.',
	'tool.json-minifier.use_case.0': 'Dateigröße für APIs reduzieren zur Ladezeitoptimierung',
	'tool.json-minifier.use_case.1': 'Konfigurationsdateien für die Produktion optimieren',
	'tool.json-minifier.use_case.2': 'Daten vor dem Speichern in DBs komprimieren',
	'tool.json-minifier.use_case.3': 'Bandbreitennutzung im Netzwerk minimieren',
	'tool.json-minifier.use_case.4': 'JSON-Dateien zur Einbettung in Code vorbereiten',

	'tool.json-to-yaml.faq.0.question': 'Was ist die JSON-nach-YAML-Konvertierung?',
	'tool.json-to-yaml.faq.0.answer':
		'Die Umwandlung von JSON in das lesbarere YAML-Format, das oft für Konfigurationen genutzt wird.',
	'tool.json-to-yaml.faq.1.question': 'Ist die Konvertierung verlustfrei?',
	'tool.json-to-yaml.faq.1.answer':
		'Ja! Alle Daten und Strukturen bleiben erhalten. JSON und YAML können die gleichen Datenstrukturen darstellen.',
	'tool.json-to-yaml.use_case.0': 'JSON-Konfigurationen in lesbareres YAML umwandeln',
	'tool.json-to-yaml.use_case.1': 'Kubernetes-Manifeste aus JSON-Definitionen erstellen',
	'tool.json-to-yaml.use_case.2': 'App-Einstellungen von JSON nach YAML migrieren',
	'tool.json-to-yaml.use_case.3': 'YAML-Dateien für CI/CD-Pipelines generieren',

	'tool.json-to-toml.faq.0.question': 'Was ist die JSON-nach-TOML-Konvertierung?',
	'tool.json-to-toml.faq.0.answer':
		'Konvertiert JSON in TOML, ein für Menschen optimiertes Konfigurationsformat.',
	'tool.json-to-toml.faq.1.question': 'Wann TOML statt JSON nutzen?',
	'tool.json-to-toml.faq.1.answer':
		'Für Dateien, die manuell bearbeitet werden. TOML ist intuitiver für Menschen, JSON besser für Maschinen.',
	'tool.json-to-toml.use_case.0': 'package.json in pyproject.toml für Python umwandeln',
	'tool.json-to-toml.use_case.1': 'Cargo.toml aus JSON-Konfigurationen erstellen',
	'tool.json-to-toml.use_case.2': 'App-Settings für bessere Wartbarkeit nach TOML migrieren',

	'tool.json-to-markdown.faq.0.question': 'Was ist die JSON-nach-Markdown-Tabelle Konvertierung?',
	'tool.json-to-markdown.faq.0.answer':
		'Wandelt JSON-Arrays in Markdown-Tabellen um, ideal für README-Dateien oder Dokumentationen.',
	'tool.json-to-markdown.faq.1.question': 'Welche Strukturen werden unterstützt?',
	'tool.json-to-markdown.faq.1.answer':
		'Arrays von Objekten funktionieren am besten. Verschachtelte Objekte werden flach dargestellt.',
	'tool.json-to-markdown.use_case.0': 'Datentabellen für READMEs und Dokus erstellen',
	'tool.json-to-markdown.use_case.1': 'Beispiel-API-Antworten in Tabellen umwandeln',
	'tool.json-to-markdown.use_case.2': 'Excel-Daten (via JSON) in Markdown-Tabellen konvertieren',
	'tool.json-to-markdown.use_case.3': 'Optionen in der Projekt-Doku übersichtlich anzeigen',

	'tool.json-to-csv.faq.0.question': 'Was ist die JSON-nach-CSV-Konvertierung?',
	'tool.json-to-csv.faq.0.answer':
		'Wandelt strukturierte JSON-Arrays in flache CSV-Dateien um, ideal für Excel oder Google Sheets.',
	'tool.json-to-csv.faq.1.question': 'Welche JSON-Struktur ist ideal?',
	'tool.json-to-csv.faq.1.answer':
		'Flache Objekt-Arrays mit gleichen Schlüsseln. Diese werden zu Spaltenüberschriften.',
	'tool.json-to-csv.use_case.0': 'API-Daten nach Excel exportieren zur Analyse',
	'tool.json-to-csv.use_case.1': 'DB-Exporte in CSV für Bulk-Importe umwandeln',
	'tool.json-to-csv.use_case.2': 'JSON-Datensätze für Machine-Learning-Training in CSV aufbereiten',
	'tool.json-to-csv.use_case.3': 'Berichtsdaten für Tabellenkalkulationen generieren',

	'tool.json-jsonpath.faq.0.question': 'Was ist JSONPath?',
	'tool.json-jsonpath.faq.0.answer':
		'Eine Abfragesprache für JSON, ähnlich wie XPath für XML. Nutzt Punkt-Notation zur Navigation.',
	'tool.json-jsonpath.faq.1.question': 'Wie funktioniert die Syntax?',
	'tool.json-jsonpath.faq.1.answer':
		'$.store.book[*].title navigiert z.B. durch die Struktur. $ ist die Wurzel, . greift auf Eigenschaften zu.',
	'tool.json-jsonpath.faq.2.question': 'Was kann ich mit den Ergebnissen tun?',
	'tool.json-jsonpath.faq.2.answer':
		'Daten extrahieren, filtern, berechnen und transformieren. Ideal für API-Tests und Datenpipelines.',
	'tool.json-jsonpath.use_case.0': 'Bestimmte Felder aus API-Antworten extrahieren',
	'tool.json-jsonpath.use_case.1': 'Große JSON-Datensätze filtern und abfragen',
	'tool.json-jsonpath.use_case.2': 'API-Antworten in automatisierten Tests prüfen',
	'tool.json-jsonpath.use_case.3': 'Strukturen in Datenpipelines validieren',

	'tool.xml-to-csv.faq.2.question': 'Welche XML-Typen eignen sich am besten für CSV-Konvertierung?',
	'tool.xml-to-csv.faq.2.answer':
		'XML mit wiederholten Elementen (wie mehrere <row> oder <item> Tags) funktioniert am besten. Der Konverter erkennt automatisch Elementnamen und Attribute als Spaltenüberschriften.',

	'tool.xml-xpath.faq.2.question': 'Welche XPath-Version wird unterstützt?',
	'tool.xml-xpath.faq.2.answer':
		'Dieses Tool unterstützt XPath 1.0, die am weitesten verbreitete Version. Es umfasst alle Standard-Achsen, Funktionen und Operatoren für XML-Abfragen.',

	'tool.xml-xpath.faq.3.question': 'Kann ich XPath auf ungültigem XML testen?',
	'tool.xml-xpath.faq.3.answer':
		'Nein. XPath erfordert wohlgeformtes XML. Wenn Ihr XML Syntaxfehler hat, korrigieren Sie diese zuerst mit dem XML-Validator oder -Formatter vor XPath-Abfragen.',

	'tool.xml-minifier.faq.2.question': 'Beeinflusst die Minimierung die XML-Funktionalität?',
	'tool.xml-minifier.faq.2.answer':
		'Nein. XML-Minimierung entfernt nur Leerzeichen und Kommentare ohne die Struktur oder Daten zu ändern. Das minimierte XML bleibt vollständig gültig und funktional identisch.',

	'tool.json-jmespath.faq.0.question': 'Was ist JMESPath?',
	'tool.json-jmespath.faq.0.answer':
		'Eine mächtige Abfragesprache zur Transformation von JSON. Bietet fortgeschrittene Filter und Aggregationen.',
	'tool.json-jmespath.faq.1.question': 'Unterschied zu JSONPath?',
	'tool.json-jmespath.faq.1.answer':
		'JMESPath ist mächtiger bei der Umformung (Reshaping) von Daten in neue Strukturen.',
	'tool.json-jmespath.faq.2.question': 'Häufige Operationen?',
	'tool.json-jmespath.faq.2.answer':
		'Filtern mit [?condition], Sortieren mit sort_by() und Aggregieren mit length() oder sum().',
	'tool.json-jmespath.use_case.0': 'API-Antworten in benötigte Strukturen umformen',
	'tool.json-jmespath.use_case.1': 'Daten aus komplexen Dokumenten filtern',
	'tool.json-jmespath.use_case.2': 'Infos aus tief verschachtelten Strukturen extrahieren',
	'tool.json-jmespath.use_case.3': 'JSON-Antworten für das Frontend bereinigen',

	'tool.json-diff.display_name': 'JSON-Diff',
	'tool.json-diff.tagline': 'Zwei JSON-Dokumente vergleichen',
	'tool.json-diff.description':
		'Semantisches Vergleichstool. Erkennt Unterschiede bei Schlüsseln und Werten unabhängig von der Reihenfolge.',
	'tool.json-diff.primary_keyword': 'json diff tool',
	'tool.json-diff.meta_title': 'JSON-Diff Tool - JSON online vergleichen',
	'tool.json-diff.meta_description':
		'Vergleichen Sie zwei JSON-Dokumente semantisch. Ignoriert Formatierungsunterschiede.',
	'tool.json-diff.operation': 'Vergleichen',
	'tool.json-diff.faq.0.question': 'Wird die Schlüsselreihenfolge ignoriert?',
	'tool.json-diff.faq.0.answer': 'Ja. {"a":1, "b":2} und {"b":2, "a":1} gelten als identisch.',
	'tool.json-diff.faq.1.question': 'Große Dateien?',
	'tool.json-diff.faq.1.answer': 'Ja, der Vergleich erfolgt effizient lokal im Browser.',
	'tool.json-diff.faq.2.question': 'Sicher?',
	'tool.json-diff.faq.2.answer':
		'Absolut. Alles passiert lokal, keine Daten verlassen Ihren Browser.',
	'tool.json-diff.use_case.0': 'API-Versionen auf Regressionen prüfen',
	'tool.json-diff.use_case.1': 'Konfigurationsänderungen in Prod-Dateien debuggen',
	'tool.json-diff.use_case.2': 'Git-Merge-Konflikte in JSON-Manifesten prüfen',
	'tool.json-diff.use_case.3': 'Abweichungen zwischen DB-Exporten finden',

	// ── XML Tool FAQs & Use Cases ──────────────────────────────────────────
	'tool.xml-formatter.faq.0.question': 'Was ist XML-Formatierung?',
	'tool.xml-formatter.faq.0.answer':
		'Organisation von XML-Code mit korrekter Einrückung für bessere Lesbarkeit und Wartbarkeit.',
	'tool.xml-formatter.faq.1.question': 'Einrückung anpassen?',
	'tool.xml-formatter.faq.1.answer': 'Ja, wählen Sie zwischen 2, 4 Leerzeichen oder Tabs.',
	'tool.xml-formatter.faq.2.question': 'Bleiben Kommentare erhalten?',
	'tool.xml-formatter.faq.2.answer':
		'Ja, der Formatierer behält alle Kommentare an ihren Originalpositionen.',
	'tool.xml-formatter.use_case.0': 'XML-Dateien für Code-Reviews lesbar machen',
	'tool.xml-formatter.use_case.1': 'Minifiziertes XML aus Web-APIs säubern',
	'tool.xml-formatter.use_case.2': 'XML-Formatierung im Team standardisieren',
	'tool.xml-formatter.use_case.3': 'XML-Strukturen durch visuelle Hierarchie debuggen',
	'tool.xml-formatter.use_case.4': 'XML-Dateien für Versionskontrolle vorbereiten',

	'tool.xml-validator.faq.0.question': 'Was prüft die XML-Validierung?',
	'tool.xml-validator.faq.0.answer':
		'Prüft auf Wohlgeformtheit (Tags, Attribute, Kodierung) und Konformität zu XML-Spezifikationen.',
	'tool.xml-validator.faq.1.question': 'Unterschied wohlgeformt vs. valide?',
	'tool.xml-validator.faq.1.answer':
		'Wohlgeformt folgt Syntaxregeln. Valide folgt ZUSÄTZLICH einem spezifischen DTD- oder XML-Schema.',
	'tool.xml-validator.faq.2.question': 'Fehler beheben?',
	'tool.xml-validator.faq.2.answer':
		'Der Validator zeigt Zeile und Spalte. Klicken Sie auf Fehler für Details.',
	'tool.xml-validator.use_case.0': 'API-Antworten vor Verarbeitung validieren',
	'tool.xml-validator.use_case.1': 'Konfigurationsdateien vor Deployment prüfen',
	'tool.xml-validator.use_case.2': 'XML-Datenimporte von Drittsystemen verifizieren',
	'tool.xml-validator.use_case.3': 'Parsing-Probleme in Dev-Umgebungen debuggen',
	'tool.xml-validator.use_case.4': 'XML-Konformität vor Einreichung sicherstellen',

	'tool.xml-to-json.faq.0.question': 'Wie funktioniert die XML-nach-JSON-Konvertierung?',
	'tool.xml-to-json.faq.0.answer':
		'Mappt Elemente auf Objekte, Attribute auf Key-Values. Mehrfache Elemente werden zu Arrays.',
	'tool.xml-to-json.faq.1.question': 'Umkehrbar?',
	'tool.xml-to-json.faq.1.answer':
		'Meistens ja, aber Kommentare oder spezifische Attribut-Reihenfolgen können verloren gehen.',
	'tool.xml-to-json.faq.2.question': 'XML-Attribute in JSON?',
	'tool.xml-to-json.faq.2.answer':
		'Werden standardmäßig mit "@"-Präfix in JSON-Eigenschaften umgewandelt.',
	'tool.xml-to-json.use_case.0': 'SOAP-API-Antworten für moderne Apps nach JSON wandeln',
	'tool.xml-to-json.use_case.1': 'XML-Konfigs in JS-Apps verarbeiten',
	'tool.xml-to-json.use_case.2': 'Legacy XML-Daten in moderne JSON-Systeme migrieren',
	'tool.xml-to-json.use_case.3': 'Daten aus XML-Sitemaps extrahieren',
	'tool.xml-to-json.use_case.4': 'RSS-Feeds in JSON für mobile Apps umwandeln',

	'tool.json-to-xml.faq.0.question': 'Was ist die JSON-nach-XML-Konvertierung?',
	'tool.json-to-xml.faq.0.answer':
		'Wandelt JSON-Daten in XML um, um Kompatibilität mit Systemen herzustellen, die XML benötigen.',
	'tool.json-to-xml.faq.1.question': 'Arrays?',
	'tool.json-to-xml.faq.1.answer': 'Werden zu mehrfachen XML-Elementen mit gleichem Tag-Namen.',
	'tool.json-to-xml.faq.2.question': 'Sonderzeichen?',
	'tool.json-to-xml.faq.2.answer': 'Werden automatisch gemäß XML-Standard maskiert (&, <, > etc.).',
	'tool.json-to-xml.use_case.0': 'XML-Sitemaps aus JSON-Daten erstellen',
	'tool.json-to-xml.use_case.1': 'RSS/Atom-Feeds aus JSON-Inhalten generieren',
	'tool.json-to-xml.use_case.2': 'API-Antworten für Legacy-Systeme konvertieren',
	'tool.json-to-xml.use_case.3': 'Java-Konfigurationsdateien aus JSON erstellen',
	'tool.json-to-xml.use_case.4': 'SOAP-Envelopes aus JSON-Payloads generieren',

	'tool.xml-to-yaml.faq.0.question': 'Warum XML nach YAML konvertieren?',
	'tool.xml-to-yaml.faq.0.answer': 'YAML ist besser lesbar und einfacher manuell zu bearbeiten.',
	'tool.xml-to-yaml.faq.1.question': 'XML-Attribute?',
	'tool.xml-to-yaml.faq.1.answer':
		'Werden meist in Key-Value-Paare innerhalb des YAML-Elements gewandelt.',
	'tool.xml-to-yaml.faq.2.question': 'Verschachteltes XML?',
	'tool.xml-to-yaml.faq.2.answer': 'Ja, der Konverter verarbeitet beliebig tiefe Strukturen.',
	'tool.xml-to-yaml.use_case.0': 'Spring Framework XML-Konfigs nach YAML wandeln',
	'tool.xml-to-yaml.use_case.1': 'Build-Scripte in lesbareres YAML migrieren',
	'tool.xml-to-yaml.use_case.2': 'Kubernetes-Ressourcen aus XML-Templates erstellen',
	'tool.xml-to-yaml.use_case.3': 'XML-Dokumente für Dokumentationszwecke verarbeiten',
	'tool.xml-to-yaml.use_case.4': 'XML-Daten für Ansible-Playbooks transformieren',

	'tool.xml-to-csv.faq.0.question': 'Wie funktioniert XML nach CSV?',
	'tool.xml-to-csv.faq.0.answer':
		'Extrahiert wiederkehrende Elemente als Zeilen, Attribute/Kinder als Spalten.',
	'tool.xml-to-csv.faq.1.question': 'Welche Strukturen?',
	'tool.xml-to-csv.faq.1.answer': 'XML mit listenartigen Datensätzen funktioniert am besten.',
	'tool.xml-to-csv.use_case.0': 'XML-Reports in Tabellenformate extrahieren',
	'tool.xml-to-csv.use_case.1': 'DB-XML-Exporte für Analysen nach CSV wandeln',
	'tool.xml-to-csv.use_case.2': 'XML-Logs in Excel analysieren',
	'tool.xml-to-csv.use_case.3': 'Produktkataloge von XML nach CSV migrieren',
	'tool.xml-to-csv.use_case.4': 'XML-API-Antworten in Tabellenform analysieren',

	'tool.xml-minifier.faq.0.question': 'Was ist XML-Minifizierung?',
	'tool.xml-minifier.faq.0.answer': 'Entfernt unnötige Zeichen zur Reduktion der Dateigröße.',
	'tool.xml-minifier.faq.1.question': 'Effekt auf Verarbeitung?',
	'tool.xml-minifier.faq.1.answer':
		'Keiner. Parser ignorieren die Leerzeichen meist standardmäßig.',
	'tool.xml-minifier.use_case.0': 'Dateigrößen für schnellere APIs reduzieren',
	'tool.xml-minifier.use_case.1': 'XML-Dateien für Prod-Umgebungen optimieren',
	'tool.xml-minifier.use_case.2': 'Bandbreite bei XML-Übertragung sparen',
	'tool.xml-minifier.use_case.3': 'XML in andere Dokumente einbetten',

	'tool.xml-xpath.faq.0.question': 'Was ist XPath?',
	'tool.xml-xpath.faq.0.answer':
		'Eine Abfragesprache zum Selektieren von Knoten in XML-Dokumenten.',
	'tool.xml-xpath.faq.1.question': 'Möglichkeiten?',
	'tool.xml-xpath.faq.1.answer':
		'Selektion nach Name, Wert, Position oder Inhalt mit komplexen Bedingungen.',
	'tool.xml-xpath.use_case.0': 'Daten aus großen XML-Dokumenten extrahieren',
	'tool.xml-xpath.use_case.1': 'XML-Daten in Test-Suites prüfen',
	'tool.xml-xpath.use_case.2': 'XML-Daten via XSLT transformieren',
	'tool.xml-xpath.use_case.3': 'XML-Strukturen programmatisch validieren',
	'tool.csv-to-sql.display_name': 'CSV → SQL',
	'tool.csv-to-sql.tagline': 'CSV-Daten in SQL-INSERT-Anweisungen konvertieren',
	'tool.csv-to-sql.description':
		'Konvertieren Sie CSV-Zeilen in SQL-INSERT-Anweisungen mit Typinferenz für Zahlen und Wahrheitswerte. Konfigurierbarer Tabellenname und Stapelgröße.',
	'tool.csv-to-sql.primary_keyword': 'csv to sql',
	'tool.csv-to-sql.meta_title': 'CSV zu SQL Konverter — fmtly.dev',
	'tool.csv-to-sql.meta_description':
		'Generieren Sie SQL-INSERT-Anweisungen aus CSV-Daten in Ihrem Browser. Keine Daten hochgeladen.',
	'tool.csv-to-sql.operation': 'Zu SQL',
	'tool.csv-to-sql.faq.0.question': 'Wie funktioniert die Typinferenz?',
	'tool.csv-to-sql.faq.0.answer':
		'Der Konverter erkennt automatisch Zahlen und Wahrheitswerte (true/false). Alles andere wird sicher als Zeichenfolgen-Literal mit einfachen Anführungszeichen maskiert.',
	'tool.csv-to-sql.use_case.0':
		'Generieren von SQL-Seeds aus Tabellenkalkulationsdaten für Datenbankmigrationen',
	'tool.csv-to-sql.use_case.1':
		'Schnelles Importieren von CSV-Daten in SQL-Datenbanken ohne benutzerdefinierte Skripte',
	'tool.json-schema-generator.display_name': 'JSON-Schema-Generator',
	'tool.json-schema-generator.tagline': 'JSON-Schema aus JSON-Beispielen ableiten',
	'tool.json-schema-generator.description':
		'Erzeugen Sie ein JSON-Schema nach Draft 2020-12 aus beliebigen JSON-Dokumenten. Erkennt verschachtelte Strukturen, Arrays, Pflichtfelder, Datentypen und Enum-Kandidaten automatisch.',
	'tool.json-schema-generator.primary_keyword': 'json schema generator',
	'tool.json-schema-generator.meta_title': 'JSON-Schema-Generator — fmtly.dev',
	'tool.json-schema-generator.meta_description':
		'Leiten Sie JSON-Schemata direkt im Browser aus JSON ab. Erkennt verschachtelte Typen, required-Felder und Enum-Kandidaten automatisch.',
	'tool.json-schema-generator.operation': 'Schema generieren',
	'tool.json-schema-generator.faq.0.question': 'Wie werden Pflichtfelder erkannt?',
	'tool.json-schema-generator.faq.0.answer':
		'Bei Objekten werden Schlüssel als required markiert, wenn sie in allen beobachteten Einträgen vorhanden sind. Fehlende Schlüssel gelten als optional.',
	'tool.json-schema-generator.faq.1.question': 'Wie wird enum erkannt?',
	'tool.json-schema-generator.faq.1.answer':
		'Wenn ein Feld eine kleine, wiederkehrende Menge skalarer Werte hat, fügt der Generator ein enum hinzu, um diese Kategorien abzubilden.',
	'tool.json-schema-generator.faq.2.question': 'Welche JSON-Schema-Version wird erzeugt?',
	'tool.json-schema-generator.faq.2.answer':
		'Die Ausgabe enthält die Draft-2020-12-$schema-URI und nutzt Standard-Schlüsselwörter wie type, properties, required, anyOf und items.',
	'tool.json-schema-generator.use_case.0':
		'API-Verträge aus echten Payload-Beispielen als Startpunkt ableiten',
	'tool.json-schema-generator.use_case.1':
		'Validierungsschemata für Testdaten und Fixtures erstellen',
	'tool.json-schema-generator.use_case.2':
		'Verschachtelte JSON-Eventformate für Integrationen schnell dokumentieren',
	'tool.json-schema-generator.use_case.3':
		'Eine Basisschema-Version vor manueller Verfeinerung erzeugen',
	'tool.json-to-go.display_name': 'JSON zu Go-Structs',
	'tool.json-to-go.tagline': 'Erzeugen Sie saubere Go-Structs aus JSON-Payloads',
	'tool.json-to-go.description':
		'Konvertieren Sie beliebige JSON-Payloads in idiomatische Go-Struct-Definitionen mit Typinferenz für verschachtelte Daten, json-Tags und optionalen Feldern. Schnell, privat und vollständig im Browser.',
	'tool.json-to-go.primary_keyword': 'json zu go structs',
	'tool.json-to-go.meta_title': 'JSON zu Go-Structs Generator — fmtly.dev',
	'tool.json-to-go.meta_description':
		'Generieren Sie Go-Struct-Definitionen aus JSON direkt im Browser. Mit verschachtelten Structs, json-Tags und Optional-Feld-Erkennung. Keine Daten verlassen Ihr Gerät.',
	'tool.json-to-go.operation': 'Konvertieren',
	'tool.json-to-go.faq.0.question': 'Wie werden JSON-Typen auf Go-Typen abgebildet?',
	'tool.json-to-go.faq.0.answer':
		'Strings werden zu string, Booleans zu bool, Ganzzahlen zu int64, Dezimalzahlen zu float64, Arrays zu Slices und verschachtelte Objekte zu eigenen Struct-Typen.',
	'tool.json-to-go.faq.1.question': 'Werden json-Tags und omitempty automatisch gesetzt?',
	'tool.json-to-go.faq.1.answer':
		'Ja. Felder erhalten json-Tags, und bei optionalen oder nullbaren Beispielwerten kann die Ausgabe omitempty sowie passende Pointer-Typen verwenden.',
	'tool.json-to-go.faq.2.question': 'Kann ich den erzeugten Code direkt in Go-Projekten nutzen?',
	'tool.json-to-go.faq.2.answer':
		'Ja. Die Ausgabe ist für den direkten Einsatz in Go-Codebasen gedacht und eignet sich für API-Clients, Webhook-Payloads und Konfigurationsmodelle.',
	'tool.json-to-go.use_case.0':
		'Go-API-Modelle schnell aus echten Request- und Response-Payloads ableiten',
	'tool.json-to-go.use_case.1':
		'Strukturierte Typen für Webhook- und Event-Integrationen generieren',
	'tool.json-to-go.use_case.2':
		'Manuelles Modellieren bei unbekannten JSON-Schemata deutlich reduzieren',
	'tool.json-to-go.use_case.3':
		'Backend-Prototyping mit produktionsnahen Go-Typgerüsten beschleunigen',
	'tool.json-to-typescript.display_name': 'JSON zu TypeScript-Typen',
	'tool.json-to-typescript.tagline':
		'Erzeugen Sie präzise TypeScript-Interfaces und -Typen aus JSON',
	'tool.json-to-typescript.description':
		'Konvertieren Sie JSON-Beispiele in saubere TypeScript-Interfaces und Union-Typen mit verschachtelter Typinferenz, Optional-Feld-Erkennung und null-sicherer Typisierung. Schnell, privat und vollständig im Browser.',
	'tool.json-to-typescript.primary_keyword': 'json zu typescript typen',
	'tool.json-to-typescript.meta_title': 'JSON zu TypeScript-Typen Generator — fmtly.dev',
	'tool.json-to-typescript.meta_description':
		'Generieren Sie TypeScript-Interfaces und -Typen aus JSON direkt im Browser. Unterstützt verschachtelte Objekte, Arrays, Union-Typen und optionale Felder. Keine Daten verlassen Ihr Gerät.',
	'tool.json-to-typescript.operation': 'Konvertieren',
	'tool.json-to-typescript.faq.0.question':
		'Wie werden JSON-Werte auf TypeScript-Typen abgebildet?',
	'tool.json-to-typescript.faq.0.answer':
		'Strings werden zu string, Zahlen zu number, Booleans zu boolean, Arrays zu typisierten Arrays und verschachtelte Objekte zu generierten Interfaces. Gemischte Inhalte werden als Union-Typen dargestellt.',
	'tool.json-to-typescript.faq.1.question': 'Wie werden optionale und nullable Felder behandelt?',
	'tool.json-to-typescript.faq.1.answer':
		'Wenn ein Schlüssel nur in einem Teil der Beispiele vorkommt, wird das Feld mit ? als optional markiert. Kann ein Wert null sein, wird der Typ um eine null-Union erweitert.',
	'tool.json-to-typescript.faq.2.question':
		'Kann ich die generierte Ausgabe direkt im Projekt verwenden?',
	'tool.json-to-typescript.faq.2.answer':
		'Ja. Die Ausgabe ist als praktischer Startpunkt für App- und API-Modelle gedacht. Sie können den Code direkt übernehmen und bei Bedarf an Ihre Namenskonventionen anpassen.',
	'tool.json-to-typescript.use_case.0':
		'Frontend- und Backend-Modelle aus realen API-Payloads ableiten',
	'tool.json-to-typescript.use_case.1':
		'Typisierte Verträge für SDKs und Webhook-Integrationen erzeugen',
	'tool.json-to-typescript.use_case.2':
		'Manuelles Interface-Schreiben bei tief verschachtelten JSON-Daten reduzieren',
	'tool.json-to-typescript.use_case.3':
		'Refactorings beschleunigen, indem strikte Typen aus Beispieldaten abgeleitet werden',
	'tool.json-to-rust-serde.display_name': 'JSON zu Rust (Serde)',
	'tool.json-to-rust-serde.tagline':
		'Serde-taugliche Rust-Structs mit serde(rename) und Option aus JSON erzeugen',
	'tool.json-to-rust-serde.description':
		'Wandelt JSON-Beispiele in Rust-Structs mit Serde-Derive um: JSON-Schlüssel per serde(rename), Option für fehlende/null-Werte, Vec für Arrays, serde_json::Value für heterogene Daten. Verschachtelte Formen werden wie beim Go-Generator dedupliziert. Große Eingaben laufen im Web Worker; alles bleibt im Browser.',
	'tool.json-to-rust-serde.primary_keyword': 'json zu rust serde structs',
	'tool.json-to-rust-serde.meta_title': 'JSON zu Rust Serde-Structs — fmtly.dev',
	'tool.json-to-rust-serde.meta_description':
		'Rust-Structs mit Serde aus JSON im Browser erzeugen. Rename, Option, Vec, Verschachtelung. Privat, schnell, Worker für große JSON.',
	'tool.json-to-rust-serde.operation': 'Konvertieren',
	'tool.json-to-rust-serde.faq.0.question': 'Wie werden JSON-Typen auf Rust abgebildet?',
	'tool.json-to-rust-serde.faq.0.answer':
		'Zeichenketten werden zu String, boolesche Werte zu bool, Ganzzahlen zu i64, Fließkommazahlen zu f64, Arrays zu Vec, Objekte zu generierten Structs und gemischte oder unbekannte Formen zu serde_json::Value.',
	'tool.json-to-rust-serde.faq.1.question': 'Warum serde(rename) pro Feld?',
	'tool.json-to-rust-serde.faq.1.answer':
		'Feldnamen folgen idiomatischem snake_case, während JSON oft camelCase nutzt. Explizites rename hält serde ohne globale Umbenennungsregeln an die Originalschlüssel.',
	'tool.json-to-rust-serde.faq.2.question': 'Brauche ich serde und serde_json in Cargo.toml?',
	'tool.json-to-rust-serde.faq.2.answer':
		'Ja. serde mit derive-Feature und serde_json für Value-Typen, z. B. serde = { version = "1", features = ["derive"] } und serde_json = "1".',
	'tool.json-to-rust-serde.use_case.0':
		'Rust-API-Modelle aus echten JSON-Request- und Response-Bodies starten',
	'tool.json-to-rust-serde.use_case.1':
		'Serde-Modelle für Webhooks, Queues und CLI-Tools aus Beispielpayloads erstellen',
	'tool.json-to-rust-serde.use_case.2':
		'Mit demselben JSON Go- oder TypeScript-Ausgabe in fmtly vergleichen',
	'tool.json-to-rust-serde.use_case.3':
		'Serde-Schemas prototypen, bevor man manuelle Structs schreibt',
	'ui.json_to_rust.tab_label': 'Rust',
	'tool.json-flatten.display_name': 'JSON Abflacher / Entfalter',
	'tool.json-flatten.tagline': 'Verschachtelte JSON-Pfade abflachen und sofort zurückwandeln',
	'tool.json-flatten.description':
		'Wandeln Sie tief verschachteltes JSON in flache pfadbasierte Objekte um und entfalten Sie es wieder zurück. Unterstützt Arrays, escapte Schlüssel und eigene Trennzeichen.',
	'tool.json-flatten.primary_keyword': 'json abflacher entfalter',
	'tool.json-flatten.meta_title': 'JSON Abflacher / Entfalter — fmtly.dev',
	'tool.json-flatten.meta_description':
		'JSON in pfadbasierte Schlüssel-Maps abflachen und wieder in die Originalstruktur entfalten. Unterstützt Arrays und benutzerdefinierte Trennzeichen. 100% im Browser.',
	'tool.json-flatten.operation': 'Abflachen & Entfalten',
	'tool.json-flatten.faq.0.question':
		'Wie werden Array-Werte in der abgeflachten Ausgabe dargestellt?',
	'tool.json-flatten.faq.0.answer':
		'Array-Elemente werden mit Klammer-Indizes dargestellt, z. B. users[0].email oder matrix[2][1], damit sich die Struktur eindeutig zurückwandeln lässt.',
	'tool.json-flatten.faq.1.question':
		'Was passiert, wenn Schlüssel bereits Punkte oder Klammern enthalten?',
	'tool.json-flatten.faq.1.answer':
		'Sonderzeichen in Schlüsseln werden beim Abflachen escaped. Der Entfalten-Modus versteht diese Escapes und stellt die ursprünglichen Schlüssel sicher wieder her.',
	'tool.json-flatten.faq.2.question':
		'Kann ich im selben Tool zwischen Abflachen und Entfalten wechseln?',
	'tool.json-flatten.faq.2.answer':
		'Ja. Mit dem Modus-Schalter können Sie verschachteltes JSON abflachen oder flache Pfad-Maps wieder in verschachteltes JSON zurückwandeln.',
	'tool.json-flatten.use_case.0':
		'i18n-Wörterbücher und Konfigurationsdaten als flache Key-Maps vorbereiten',
	'tool.json-flatten.use_case.1':
		'Verschachtelte API-Fixtures für tabellarische Bearbeitung normalisieren',
	'tool.json-flatten.use_case.2':
		'Verschachtelte Strukturen aus Environment-ähnlichen Pfadschlüsseln rekonstruieren',
	'tool.json-flatten.use_case.3':
		'Pfadbasierte Änderungen in großen JSON-Dokumenten vor Deployments analysieren',
	'tool.json-patch.display_name': 'JSON Patch Builder',
	'tool.json-patch.tagline': 'RFC-6902-JSON-Patches sofort erzeugen und anwenden',
	'tool.json-patch.description':
		'Erzeugen Sie RFC-6902-JSON-Patches aus Basis- und Ziel-Dokumenten oder wenden Sie ein Patch-Array auf ein Basis-JSON an. Alles läuft lokal im Browser.',
	'tool.json-patch.primary_keyword': 'json patch builder',
	'tool.json-patch.meta_title': 'JSON Patch Builder (RFC 6902) — fmtly.dev',
	'tool.json-patch.meta_description':
		'JSON-Patch-Operationen aus zwei JSON-Dokumenten erzeugen oder RFC-6902-Patches direkt im Browser anwenden. Schnell, privat, ohne Upload.',
	'tool.json-patch.operation': 'Patch',
	'tool.json-patch.faq.0.question': 'Was ist JSON Patch (RFC 6902)?',
	'tool.json-patch.faq.0.answer':
		'JSON Patch ist ein Standardformat, das Änderungen als Operationen wie add, remove oder replace über JSON-Pointer-Pfade beschreibt.',
	'tool.json-patch.faq.1.question': 'Wie funktioniert der Erzeugen-Modus?',
	'tool.json-patch.faq.1.answer':
		'Fügen Sie das Basis-JSON im Eingabefeld und das Ziel-JSON im Nebenfeld ein. Das Tool berechnet die nötigen Patch-Operationen.',
	'tool.json-patch.faq.2.question': 'Wie funktioniert der Anwenden-Modus?',
	'tool.json-patch.faq.2.answer':
		'Fügen Sie das Basis-JSON im Eingabefeld und ein gültiges JSON-Patch-Array im Nebenfeld ein. Die Ausgabe zeigt das gepatchte Ergebnis.',
	'tool.json-patch.use_case.0':
		'API-Payload-Änderungen als reproduzierbare Patch-Operationen versionieren',
	'tool.json-patch.use_case.1': 'Dokument-Updates in Test-Workflows per Patch anwenden',
	'tool.json-patch.use_case.2':
		'Integrationsfehler durch sicheres Wiederholen von Patch-Sequenzen analysieren',
	'tool.json-patch.use_case.3': 'Strukturierte JSON-Änderungen über Text-Diffs hinaus prüfen',
	'tool.json-schema-validate.display_name': 'JSON-Schema-Validator',
	'tool.json-schema-validate.tagline': 'JSON gegen ein bereitgestelltes Schema validieren',
	'tool.json-schema-validate.description':
		'Validieren Sie JSON-Payloads gegen JSON Schema Draft-07 oder Draft 2020-12. Erhalten Sie pfadbasierte Fehler mit Zeilen- und Spaltenzuordnung zur schnellen Behebung.',
	'tool.json-schema-validate.primary_keyword': 'json schema validator',
	'tool.json-schema-validate.meta_title': 'JSON-Schema-Validator — fmtly.dev',
	'tool.json-schema-validate.meta_description':
		'Validieren Sie JSON im Browser gegen Draft-07- und 2020-12-Schemata. Pfad-, Zeilen- und Spaltenbasierte Fehlerhinweise inklusive.',
	'tool.json-schema-validate.operation': 'Schema validieren',
	'tool.json-schema-validate.faq.0.question': 'Welche Schema-Drafts werden unterstützt?',
	'tool.json-schema-validate.faq.0.answer':
		'Unterstützt werden JSON Schema Draft-07 und Draft 2020-12. Der Draft wird automatisch über die $schema-URI erkannt.',
	'tool.json-schema-validate.faq.1.question': 'Wie werden Fehler auf die Eingabe abgebildet?',
	'tool.json-schema-validate.faq.1.answer':
		'Jeder Fehler enthält einen JSON-Pointer-Pfad und wird auf die passende Zeile und Spalte im JSON-Eingabetext gemappt.',
	'tool.json-schema-validate.faq.2.question': 'Was passiert bei einem ungültigen Schema?',
	'tool.json-schema-validate.faq.2.answer':
		'Wenn das Schema nicht geparst oder kompiliert werden kann, zeigt das Tool Schemafehler getrennt von Datenvalidierungsfehlern an.',
	'tool.json-schema-validate.use_case.0':
		'API-Anfragen und -Antworten gegen Vertragsschemata validieren',
	'tool.json-schema-validate.use_case.1':
		'Webhook-Payload-Fehler mit pfadbasiertem Feedback schneller debuggen',
	'tool.json-schema-validate.use_case.2':
		'Fixtures und Mock-Daten gegen strikte Schemakontrakte prüfen',
	'tool.json-schema-validate.use_case.3': 'Migration von Draft-07 auf Draft 2020-12 verifizieren',
	'tool.text-word-character-counter.display_name': 'Wort- und Zeichenzähler',
	'tool.text-word-character-counter.tagline': 'Wörter, Zeichen und Lesezeit sofort zählen',
	'tool.text-word-character-counter.description':
		'Zählen Sie Wörter, Zeichen, Sätze, Absätze und die geschätzte Lesezeit für beliebige Texte. Schnell, privat und vollständig im Browser.',
	'tool.text-word-character-counter.primary_keyword': 'wort zeichen zähler',
	'tool.text-word-character-counter.meta_title': 'Wort- und Zeichenzähler — fmtly.dev',
	'tool.text-word-character-counter.meta_description':
		'Kostenloser Online-Wort- und Zeichenzähler mit Satz-, Absatz- und Lesezeit-Metriken. Läuft vollständig im Browser.',
	'tool.text-word-character-counter.operation': 'Text zählen',
	'tool.text-word-character-counter.faq.0.question': 'Wie werden Wörter gezählt?',
	'tool.text-word-character-counter.faq.0.answer':
		'Wörter werden anhand von Buchstaben- und Zahlengruppen gezählt, inklusive üblicher Apostroph- und Bindestrichformen.',
	'tool.text-word-character-counter.faq.1.question': 'Wie wird die Lesezeit berechnet?',
	'tool.text-word-character-counter.faq.1.answer':
		'Die Lesezeit basiert auf etwa 200 Wörtern pro Minute und wird auf ganze Minuten aufgerundet.',
	'tool.text-word-character-counter.faq.2.question': 'Verlässt mein Text mein Gerät?',
	'tool.text-word-character-counter.faq.2.answer':
		'Nein. Alle Berechnungen laufen lokal im Browser, ohne Upload auf einen Server.',
	'tool.text-word-character-counter.use_case.0':
		'Artikel- und Dokumentlängen vor der Veröffentlichung prüfen',
	'tool.text-word-character-counter.use_case.1':
		'UI-Texte und Prompts anhand von Zeichenlimits optimieren',
	'tool.text-word-character-counter.use_case.2':
		'Lesezeit für Blogposts, Dokumentation und Release Notes schätzen',
	'tool.text-word-character-counter.use_case.3':
		'Textentwürfe anhand objektiver Längenmetriken vergleichen',
	'tool.text-lorem-ipsum-generator.display_name': 'Lorem Ipsum Generator',
	'tool.text-lorem-ipsum-generator.tagline':
		'Platzhaltertext als Absätze, Sätze oder Wörter mit Seed-Kontrolle erzeugen',
	'tool.text-lorem-ipsum-generator.description':
		'Erzeugen Sie deterministischen Lorem-Ipsum-Text für Mockups, UI-Vorschauen und Content-Tests. Steuern Sie Absatz-/Satz-/Wortanzahl, Seed-Wert und Ausgabe als Klartext oder HTML direkt im Browser.',
	'tool.text-lorem-ipsum-generator.primary_keyword': 'lorem ipsum generator',
	'tool.text-lorem-ipsum-generator.meta_title': 'Lorem Ipsum Generator — fmtly.dev',
	'tool.text-lorem-ipsum-generator.meta_description':
		'Kostenloser Lorem-Ipsum-Generator mit Absatz-, Satz- und Wortmodus, Seed-Ausgabe sowie Klartext/HTML-Export. Schnell, privat und vollständig im Browser.',
	'tool.text-lorem-ipsum-generator.operation': 'Lorem Ipsum erzeugen',
	'tool.text-lorem-ipsum-generator.faq.0.question':
		'Kann ich mit denselben Einstellungen immer denselben Text erzeugen?',
	'tool.text-lorem-ipsum-generator.faq.0.answer':
		'Ja. Mit einem festen Seed erhalten Sie bei identischen Optionen reproduzierbare Ausgaben.',
	'tool.text-lorem-ipsum-generator.faq.1.question':
		'Kann ich statt Klartext HTML-Absätze ausgeben?',
	'tool.text-lorem-ipsum-generator.faq.1.answer':
		'Ja. Wählen Sie das HTML-Format, um Absatz-Markup direkt für Prototypen zu erzeugen.',
	'tool.text-lorem-ipsum-generator.faq.2.question': 'Wird der Text lokal erzeugt?',
	'tool.text-lorem-ipsum-generator.faq.2.answer':
		'Ja. Die Generierung läuft komplett in Ihrem Browser, ohne Upload auf einen Server.',
	'tool.text-lorem-ipsum-generator.use_case.0':
		'Wireframes und UI-Mockups mit realistisch wirkendem Platzhaltertext füllen',
	'tool.text-lorem-ipsum-generator.use_case.1':
		'Typografie, Abstände und Overflow-Verhalten in responsiven Layouts testen',
	'tool.text-lorem-ipsum-generator.use_case.2':
		'Reproduzierbare Seed-Fixtures für Frontend-Snapshots und visuelle Tests erzeugen',
	'tool.text-lorem-ipsum-generator.use_case.3':
		'Platzhalterinhalte als Klartext oder HTML für CMS-Demos erstellen',
	'tool.text-markdown-to-html.display_name': 'Markdown zu HTML',
	'tool.text-markdown-to-html.tagline':
		'Konvertieren Sie Markdown mit Live-Vorschau in produktionsreifes HTML',
	'tool.text-markdown-to-html.description':
		'Wandeln Sie Markdown in sauberes HTML um – mit Live-Vorschau, GFM-Tabellen, Syntax-Highlighting für Codeblöcke und Sicherheitskontrollen für Links/Bilder. Alles läuft lokal im Browser.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown zu html konverter',
	'tool.text-markdown-to-html.meta_title': 'Markdown zu HTML Konverter — Live-Vorschau | fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Konvertieren Sie Markdown zu HTML mit Live-Vorschau, GFM-Tabellen und syntaxhervorgehobenen Codeblöcken. Schnell, privat und browserbasiert.',
	'tool.text-markdown-to-html.operation': 'Markdown konvertieren',
	'tool.text-markdown-to-html.faq.0.question':
		'Unterstützt der Konverter GitHub-Flavored-Markdown-Tabellen?',
	'tool.text-markdown-to-html.faq.0.answer':
		'Ja. Die GFM-Tabellensyntax wird unterstützt und kann im Optionen-Panel ein- oder ausgeschaltet werden.',
	'tool.text-markdown-to-html.faq.1.question':
		'Werden fenced Codeblöcke automatisch syntaxhervorgehoben?',
	'tool.text-markdown-to-html.faq.1.answer':
		'Ja. Der Konverter hebt fenced Codeblöcke hervor und behält Sprachklassen im erzeugten HTML für nachgelagerte Styles bei.',
	'tool.text-markdown-to-html.faq.2.question':
		'Wie geht das Tool mit unsicheren Links oder Raw-HTML um?',
	'tool.text-markdown-to-html.faq.2.answer':
		'Unsichere Link-/Bild-Protokolle werden entfernt. Raw-HTML wird standardmäßig maskiert und kann bei Bedarf in den erweiterten Optionen erlaubt werden.',
	'tool.text-markdown-to-html.use_case.0':
		'README- und Doku-Inhalte für statische Site-Generatoren vorbereiten',
	'tool.text-markdown-to-html.use_case.1':
		'Markdown-Ausgabe vor dem Veröffentlichen von Release Notes oder Changelogs prüfen',
	'tool.text-markdown-to-html.use_case.2':
		'Sanitisiertes HTML für CMS-Editoren und Wissensdatenbanken erzeugen',
	'tool.text-markdown-to-html.use_case.3':
		'Technische Tutorials mit Codeblöcken in einbettbares HTML umwandeln',
	'tool.text-string-case-converter.display_name': 'String Case Converter',
	'tool.text-string-case-converter.tagline':
		'Text in camelCase, PascalCase, snake_case, kebab-case und weitere Stile umwandeln',
	'tool.text-string-case-converter.description':
		'Konvertieren Sie Text sofort zwischen camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case und Satzschreibung. Schnell, privat und vollständig im Browser.',
	'tool.text-string-case-converter.primary_keyword': 'string case converter',
	'tool.text-string-case-converter.meta_title': 'String Case Converter — fmtly.dev',
	'tool.text-string-case-converter.meta_description':
		'Kostenloser Online-String-Case-Converter für camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case und Satzschreibung.',
	'tool.text-string-case-converter.operation': 'Case umwandeln',
	'tool.text-string-case-converter.faq.0.question': 'Welche Namensstile werden unterstützt?',
	'tool.text-string-case-converter.faq.0.answer':
		'Das Tool unterstützt camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case und Satzschreibung in einer Ansicht.',
	'tool.text-string-case-converter.faq.1.question':
		'Kann gemischte Eingabe wie camelCase, Unterstriche und Bindestriche verarbeitet werden?',
	'tool.text-string-case-converter.faq.1.answer':
		'Ja. Gemischte Trennzeichen und vorhandene Groß-/Kleinschreibung werden zuerst tokenisiert und dann konsistent in jedes Zielformat umgewandelt.',
	'tool.text-string-case-converter.faq.2.question':
		'Passiert die Umwandlung lokal auf meinem Gerät?',
	'tool.text-string-case-converter.faq.2.answer':
		'Ja. Die gesamte Konvertierung läuft im Browser, ohne dass Text auf einen Server hochgeladen wird.',
	'tool.text-string-case-converter.use_case.0':
		'API-Feldnamen und Konfigurationsschlüssel zwischen Namenskonventionen vereinheitlichen',
	'tool.text-string-case-converter.use_case.1':
		'UI-Beschriftungen schnell in codefähige Variablennamen umwandeln',
	'tool.text-string-case-converter.use_case.2':
		'Namenskonventionen im Team über Doku, Schemas und Payload-Beispiele hinweg standardisieren',
	'tool.text-string-case-converter.use_case.3':
		'Konsistente Bezeichner für TypeScript, Python, SQL und Shell-Skripte vorbereiten',
	'tool.text-text-reverser.display_name': 'Text-Umkehrer',
	'tool.text-text-reverser.tagline': 'Text per Klick nach Zeichen, Wörtern oder Zeilen umkehren',
	'tool.text-text-reverser.description':
		'Drehen Sie Text sofort nach Zeichen, Wörtern oder Zeilen um. Ideal für schnelle String-Transformationen, Debugging von Textflüssen und Content-Experimente im Browser.',
	'tool.text-text-reverser.primary_keyword': 'text umkehrer',
	'tool.text-text-reverser.meta_title': 'Text-Umkehrer — fmtly.dev',
	'tool.text-text-reverser.meta_description':
		'Kostenloser Online-Text-Umkehrer, der Text nach Zeichen, Wörtern oder Zeilen sofort umkehrt. Schnell, privat und vollständig im Browser.',
	'tool.text-text-reverser.operation': 'Text umkehren',
	'tool.text-text-reverser.faq.0.question': 'Welche Umkehrmodi gibt es?',
	'tool.text-text-reverser.faq.0.answer':
		'Sie können Text nach einzelnen Zeichen, nach Wörtern oder nach kompletten Zeilen umkehren. Jeder Modus hat eine eigene Ausgabe.',
	'tool.text-text-reverser.faq.1.question': 'Bleiben Leerzeichen und Tabs beim Wortmodus erhalten?',
	'tool.text-text-reverser.faq.1.answer':
		'Ja. Der Wortmodus kehrt die Token-Reihenfolge um und behält die Whitespace-Struktur bei.',
	'tool.text-text-reverser.faq.2.question': 'Bleibt mein Text auf dem Gerät?',
	'tool.text-text-reverser.faq.2.answer':
		'Ja. Die Umkehrung läuft lokal im Browser, ohne Upload auf einen Server.',
	'tool.text-text-reverser.use_case.0':
		'Gespiegelte Strings zum Testen von Parsern und Tokenizern erzeugen',
	'tool.text-text-reverser.use_case.1':
		'Mehrzeilige Notizen schnell durch umgekehrte Zeilenreihenfolge neu ordnen',
	'tool.text-text-reverser.use_case.2':
		'Word-Splitting-Logik mit Whitespace-erhaltender Ausgabe prüfen',
	'tool.text-text-reverser.use_case.3':
		'Spielerische Textvarianten für Content-Experimente erzeugen',
	'tool.text-duplicate-line-remover.display_name': 'Doppelte Zeile Entferner',
	'tool.text-duplicate-line-remover.tagline':
		'Doppelte Zeilen entfernen und die erste Vorkommensreihenfolge beibehalten',
	'tool.text-duplicate-line-remover.description':
		'Doppelte Zeilen aus Text entfernen, wobei die erste Vorkommens jeder Zeile erhalten bleibt. Ideal zum Bereinigen von Protokollen, Deduplizieren von Listen und Vorbereiten eindeutiger Datensätze in Ihrem Browser.',
	'tool.text-duplicate-line-remover.primary_keyword': 'doppelte Zeile entferner',
	'tool.text-duplicate-line-remover.meta_title': 'Doppelte Zeile Entferner — fmtly.dev',
	'tool.text-duplicate-line-remover.meta_description':
		'Kostenloser Doppelte Zeile Entferner, der doppelte Zeilen entfernt und die erste Vorkommensreihenfolge beibehält. Schnell, privat und 100% in Ihrem Browser.',
	'tool.text-duplicate-line-remover.operation': 'Duplikate entfernen',
	'tool.text-duplicate-line-remover.faq.0.question': 'Welche Zeilen als Duplikate entfernt werden?',
	'tool.text-duplicate-line-remover.faq.0.answer':
		'Die erste Vorkommens jeder Zeile wird beibehalten; nachfolgende identische Zeilen werden als Duplikate entfernt.',
	'tool.text-duplicate-line-remover.faq.1.question': 'Werden leere Zeilen als Duplikate behandelt?',
	'tool.text-duplicate-line-remover.faq.1.answer':
		'Ja. Leere Zeilen sind eindeutige Einträge, daher werden mehrere leere Zeilen zu einer einzigen leeren Zeile dedupliziert.',
	'tool.text-duplicate-line-remover.faq.2.question': 'Wird mein Text lokal verarbeitet?',
	'tool.text-duplicate-line-remover.faq.2.answer':
		'Ja. Die gesamte Deduplizierung läuft in Ihrem Browser; Ihr Text verlässt niemals Ihr Gerät.',
	'tool.text-duplicate-line-remover.use_case.0':
		'Serverprotokolle und Anwendungsspuren durch Entfernen wiederholter Einträge bereinigen',
	'tool.text-duplicate-line-remover.use_case.1':
		'URL-Listen, E-Mail-Listen oder Inventardatensätze vor dem Import deduplizieren',
	'tool.text-duplicate-line-remover.use_case.2':
		'Eindeutige Wortlisten zum Testen von Vokabular oder Sprachmodellen vorbereiten',
	'tool.text-duplicate-line-remover.use_case.3':
		'Konfigurationswerte oder Umgebungsvariablenlisten konsolidieren',
	'tool.text-line-sorter.display_name': 'Zeilen-Sortierer',
	'tool.text-line-sorter.tagline':
		'Zeilen alphabetisch, numerisch, nach Länge oder per Seed-Shuffle sortieren',
	'tool.text-line-sorter.description':
		'Sortieren Sie Textzeilen sofort mit erweiterten Optionen für Groß-/Kleinschreibung, Trimmen, Deduplizierung, Leere-Zeilen-Entfernung und deterministische Shuffle-Seeds. Alles läuft lokal im Browser.',
	'tool.text-line-sorter.primary_keyword': 'zeilen sortierer',
	'tool.text-line-sorter.meta_title': 'Zeilen-Sortierer — Textzeilen sortieren | fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Zeilen alphabetisch, numerisch, nach Länge oder zufällig sortieren. Mit Deduplizierung und Leerzeilen-Filter – schnell, privat und komplett im Browser.',
	'tool.text-line-sorter.operation': 'Zeilen sortieren',
	'tool.text-line-sorter.faq.0.question': 'Welche Sortiermodi werden unterstützt?',
	'tool.text-line-sorter.faq.0.answer':
		'Alphabetisch, numerisch, nach Länge und deterministisches Zufallsshuffle sind verfügbar. Zusätzlich können Sie aufsteigend oder absteigend sortieren.',
	'tool.text-line-sorter.faq.1.question':
		'Kann ich leere Zeilen und Duplikate vor dem Sortieren entfernen?',
	'tool.text-line-sorter.faq.1.answer':
		'Ja. Aktivieren Sie Leere-Zeilen-Entfernung und Deduplizierung, um Eingaben vor dem Sortieren zu bereinigen – ideal für Logs und Listen.',
	'tool.text-line-sorter.faq.2.question':
		'Bleibt die Oberfläche bei großen Eingaben reaktionsschnell?',
	'tool.text-line-sorter.faq.2.answer':
		'Ja. Eingaben über 500KB werden in einem Web Worker verarbeitet. Dadurch bleibt die UI flüssig und Ihre Daten bleiben lokal.',
	'tool.text-line-sorter.use_case.0':
		'Logdateien normalisieren und sortieren, bevor Umgebungen verglichen werden',
	'tool.text-line-sorter.use_case.1':
		'Sauber sortierte Listen von Domains, E-Mails, IDs oder Tags erstellen',
	'tool.text-line-sorter.use_case.2':
		'Release Notes, Changelog-Einträge oder Checklisten schnell ordnen',
	'tool.text-line-sorter.use_case.3': 'Deterministisch gemischte Testdatensätze für QA erzeugen',
	'tool.text-diff-compare.display_name': 'Diff & Vergleichen',
	'tool.text-diff-compare.tagline': 'Zwei Texte nebeneinander vergleichen',
	'tool.text-diff-compare.description':
		'Seitlicher oder vereinheitlichter Diff von zwei reinen Texteingaben mit Hervorhebung von Änderungen auf Zeilen- und Wortebene.',
	'tool.text-diff-compare.primary_keyword': 'text diff vergleichen',
	'tool.text-diff-compare.meta_title': 'Text Diff & Vergleich Tool - Seitlicher Vergleich',
	'tool.text-diff-compare.meta_description':
		'Vergleichen Sie zwei Texteingaben mit seitlicher oder vereinheitlichter Diff-Ansicht. Heben Sie Zeilen- und Wortänderungen hervor.',
	'tool.text-diff-compare.operation': 'Zwei Texte vergleichen und Unterschiede anzeigen',
	'tool.text-diff-compare.faq.0.question': 'Welche Diff-Algorithmen werden unterstützt?',
	'tool.text-diff-compare.faq.0.answer':
		'Wir unterstützen Myers, Patience und Histogram Algorithmen. Myers ist Standard und funktioniert für die meisten Fälle gut. Patience ist besser für strukturierte Änderungen, Histogram ist schneller für große Dateien.',
	'tool.text-diff-compare.faq.1.question':
		'Kann ich Leerzeichen oder Groß-/Kleinschreibung ignorieren?',
	'tool.text-diff-compare.faq.1.answer':
		'Ja, Sie können den Diff so konfigurieren, dass er Leerzeichenänderungen, Groß-/Kleinschreibungsunterschiede und leere Zeilen über dem Options-Panel ignoriert.',
	'tool.text-diff-compare.faq.2.question': 'Welche Ausgabeformate sind verfügbar?',
	'tool.text-diff-compare.faq.2.answer':
		'Sie können Diffs im seitlichen Modus, im vereinheitlichten Format oder inline mit Monaco Editor anzeigen. Der vereinheitlichte Diff kann als .diff-Datei heruntergeladen werden.',
	'tool.text-diff-compare.use_case.0': 'Code-Versionen vor dem Commit vergleichen',
	'tool.text-diff-compare.use_case.1': 'Dokumentenänderungen und Bearbeitungen überprüfen',
	'tool.text-diff-compare.use_case.2': 'Konfigurationsdatei-Modifikationen analysieren',
	'tool.text-diff-compare.use_case.3': 'Änderungen in Protokollen oder Datenexporten verfolgen',
	'tool.text-regex-tester.display_name': 'Regex-Tester',
	'tool.text-regex-tester.tagline':
		'Reguläre Ausdrücke mit Live-Highlights, Capture Groups und Flag-Toggles testen',
	'tool.text-regex-tester.description':
		'Testen Sie JavaScript-RegEx-Muster gegen Beispieltext mit Echtzeit-Hervorhebung, vollständiger Flag-Steuerung, Capture-Group-Inspektion und detaillierten Match-Metriken. Alles läuft lokal im Browser.',
	'tool.text-regex-tester.primary_keyword': 'regex tester',
	'tool.text-regex-tester.meta_title':
		'Regex-Tester — Live-Highlighting & Capture Groups | fmtly.dev',
	'tool.text-regex-tester.meta_description':
		'Reguläre Ausdrücke online mit Live-Hervorhebung, Capture Groups und Regex-Flags testen. Schnell, privat und vollständig browserbasiert.',
	'tool.text-regex-tester.operation': 'Regex testen',
	'tool.text-regex-tester.faq.0.question':
		'Unterstützt das Tool JavaScript-Regex-Flags wie g, i, m, s, u, y und d?',
	'tool.text-regex-tester.faq.0.answer':
		'Ja. Sie können alle unterstützten JavaScript-Regex-Flags einzeln umschalten und deren Auswirkung auf Matches sofort sehen.',
	'tool.text-regex-tester.faq.1.question':
		'Kann ich nummerierte und benannte Capture Groups pro Match prüfen?',
	'tool.text-regex-tester.faq.1.answer':
		'Ja. Jedes Match enthält nummerierte und benannte Groups inklusive Werte und – falls verfügbar – Positionsdaten.',
	'tool.text-regex-tester.faq.2.question': 'Werden Muster und Testtext an einen Server gesendet?',
	'tool.text-regex-tester.faq.2.answer':
		'Nein. Das Matching läuft lokal im Browser, ohne Upload von Regex oder Textdaten.',
	'tool.text-regex-tester.use_case.0': 'Log-Parsing-Muster vor dem produktiven Einsatz validieren',
	'tool.text-regex-tester.use_case.1':
		'Formularmuster und Edge-Cases mit realem Beispieltext testen',
	'tool.text-regex-tester.use_case.2':
		'Such- und Extraktionsregeln für Skripte, ETL und Automationen prototypen',
	'tool.text-regex-tester.use_case.3':
		'RegEx-Grundlagen mit sofortigem visuellem Match-Feedback lernen und lehren',
	'tool.text-escape-unescape.display_name': 'Text Escape / Unescape',
	'tool.text-escape-unescape.tagline':
		'Text für JSON, HTML, XML, URL, SQL und Regex sicher escapen oder unescapen',
	'tool.text-escape-unescape.description':
		'Wandeln Sie Strings sicher zwischen escaped und Klartext für JSON, HTML-Entities, XML-Entities, URL-Encoding, SQL-Strings und Regex-Muster. Große Eingaben werden per Web Worker verarbeitet.',
	'tool.text-escape-unescape.primary_keyword': 'text escape unescape tool',
	'tool.text-escape-unescape.meta_title': 'Text Escape/Unescape — JSON, HTML, URL, SQL | fmtly.dev',
	'tool.text-escape-unescape.meta_description':
		'Text sofort für JSON, HTML, XML, URL, SQL und Regex escapen oder unescapen. Browserbasiert, schnell bei großen Texten und ohne Upload.',
	'tool.text-escape-unescape.operation': 'Text escapen / unescapen',
	'tool.text-escape-unescape.faq.0.question':
		'Welche Formate unterstützt das Tool für Escape und Unescape?',
	'tool.text-escape-unescape.faq.0.answer':
		'Unterstützt werden JSON-Strings, HTML-Entities, XML-Entities, URL-Encoding, SQL-String-Literale und Regex-Sonderzeichen in beide Richtungen.',
	'tool.text-escape-unescape.faq.1.question':
		'Was ist der Vorteil gegenüber einem einfachen URL- oder HTML-Encoder?',
	'tool.text-escape-unescape.faq.1.answer':
		'Sie erhalten mehrere Escape-Standards in einer Oberfläche, können die Richtung sofort wechseln und format-spezifische Optionen wie Plus-Handling oder SQL-Quote-Wrapping nutzen.',
	'tool.text-escape-unescape.faq.2.question':
		'Bleiben Leistung und Datenschutz auch bei großen Eingaben erhalten?',
	'tool.text-escape-unescape.faq.2.answer':
		'Ja. Alles läuft lokal im Browser. Eingaben über 500KB werden in einem Web Worker verarbeitet, damit die Oberfläche reaktionsschnell bleibt.',
	'tool.text-escape-unescape.use_case.0':
		'Benutzereingaben sicher für JSON-Payloads, Query-Strings und SQL vorbereiten',
	'tool.text-escape-unescape.use_case.1':
		'Escapte Logs oder API-Beispiele wieder in lesbaren Klartext zurückwandeln',
	'tool.text-escape-unescape.use_case.2':
		'Regex-Muster durch gezieltes Escapen/Unescapen von Sonderzeichen aufbauen',
	'tool.text-escape-unescape.use_case.3':
		'Gemischte escaped Inhalte im Browser datenschutzfreundlich normalisieren',
	'ui.text_escape.format_label': 'Format',
	'ui.text_escape.action_label': 'Aktion',
	'ui.text_escape.action.escape': 'Escape',
	'ui.text_escape.action.unescape': 'Unescape',
	'ui.text_escape.format.json': 'JSON-String',
	'ui.text_escape.format.html': 'HTML-Entities',
	'ui.text_escape.format.xml': 'XML-Entities',
	'ui.text_escape.format.url': 'URL-Komponente',
	'ui.text_escape.format.sql': 'SQL-String',
	'ui.text_escape.format.regex': 'Regex-Muster',
	'ui.text_escape.input_label': 'Eingabe',
	'ui.text_escape.output_label': 'Ausgabe',
	'ui.text_escape.input_placeholder': 'Text zum Verarbeiten eingeben oder einfügen...',
	'ui.text_escape.output_placeholder': 'Escapte oder unescapte Ausgabe erscheint hier...',
	'ui.text_escape.option.url_encode_plus': 'Leerzeichen als + kodieren',
	'ui.text_escape.option.url_decode_plus': '+ als Leerzeichen dekodieren',
	'ui.text_escape.option.sql_wrap_quotes': 'Mit einfachen Anführungszeichen umschließen',
	'ui.text_escape.button.swap_action': 'Aktion wechseln',
	'ui.text_escape.worker_active':
		'Große Eingabe erkannt (>{size}). Verarbeitung läuft im Web Worker.',
	'ui.text_escape.worker_failed': 'Worker-Verarbeitung fehlgeschlagen. Fallback auf Haupt-Thread.',
	'ui.text_escape.warning.no_changes':
		'Für das gewählte Format und die Aktion wurden keine Änderungen erkannt.',
	'ui.text_escape.error.invalid_json_escape': 'Ungültige JSON-Escape-Sequenz: {detail}',
	'ui.text_escape.error.invalid_url_encoding': 'Ungültige URL-kodierte Eingabe: {detail}',
	'ui.text_escape.error.detail': 'Verarbeitung fehlgeschlagen: {detail}',
	'ui.diff_compare.statistics': 'Vergleichsstatistiken',
	'ui.diff_compare.added_lines': 'Hinzugefügte Zeilen',
	'ui.diff_compare.removed_lines': 'Entfernte Zeilen',
	'ui.diff_compare.unchanged_lines': 'Unveränderte Zeilen',
	'ui.diff_compare.total_lines': 'Gesamte Zeilen',
	'ui.diff_compare.similarity': 'Ähnlichkeit',
	'ui.diff_compare.hunks': 'Hunks',
	'ui.diff_compare.side_by_side': 'Nebeneinander',
	'ui.diff_compare.unified': 'Vereinheitlicht',
	'ui.diff_compare.inline': 'Inline',
	'ui.diff_compare.swap': 'Tauschen',
	'ui.diff_compare.diff_options': 'Diff-Optionen',
	'ui.diff_compare.ignore_whitespace': 'Leerzeichen ignorieren',
	'ui.diff_compare.ignore_case': 'Groß-/Kleinschreibung ignorieren',
	'ui.diff_compare.ignore_empty_lines': 'Leere Zeilen ignorieren',
	'ui.diff_compare.show_inline': 'Inline-Änderungen anzeigen',
	'ui.diff_compare.context_lines': 'Kontextzeilen',
	'ui.diff_compare.algorithm': 'Algorithmus',
	'ui.diff_compare.original': 'Original',
	'ui.diff_compare.modified': 'Geändert',
	'ui.diff_compare.placeholder_left': 'Originaltext hier einfügen...',
	'ui.diff_compare.placeholder_right': 'Geänderten Text hier einfügen...',
	'ui.diff_compare.unified_diff': 'Vereinheitlichter Diff',
	'ui.diff_compare.add_content': 'Fügen Sie Inhalt auf beiden Seiten hinzu, um Diff zu sehen',
	'ui.diff_compare.no_content': 'Kein Inhalt zum Vergleichen',
	'ui.diff_compare.swapped': 'Eingaben getauscht',
	'ui.toast.download_success': 'Erfolgreich heruntergeladen',
	'tool.text-whitespace-cleaner.display_name': 'Leerzeichen Bereiniger',
	'tool.text-whitespace-cleaner.tagline':
		'Nachgestellte Leerzeichen kürzen, mehrere Leerzeichen zusammenfassen, Zeilenenden normalisieren',
	'tool.text-whitespace-cleaner.description':
		'Textformatierung bereinigen durch Entfernen nachgestellter Leerzeichen, Zusammenfassen mehrerer Leerzeichen/Tabulatoren zu einzelnen Leerzeichen und Normalisieren von Zeilenenden. Perfekt für die Vorbereitung von Code, Protokollen und Inhalten für Versionskontrolle oder Verarbeitung.',
	'tool.text-whitespace-cleaner.primary_keyword': 'leerzeichen bereiniger',
	'tool.text-whitespace-cleaner.meta_title': 'Leerzeichen Bereiniger — fmtly.dev',
	'tool.text-whitespace-cleaner.meta_description':
		'Kostenloser Leerzeichen Bereiniger, der nachgestellte Leerzeichen entfernt, mehrere Leerzeichen zusammenfasst und Zeilenenden normalisiert. Schnell, privat und 100% in Ihrem Browser.',
	'tool.text-whitespace-cleaner.operation': 'Leerzeichen bereinigen',
	'tool.text-whitespace-cleaner.faq.0.question': 'Welche Leerzeichen werden entfernt?',
	'tool.text-whitespace-cleaner.faq.0.answer':
		'Nachgestellte Leerzeichen und Tabulatoren am Zeilenende werden entfernt. Mehrere Leerzeichen/Tabulatoren im Text werden zu einzelnen Leerzeichen zusammengefasst. Zeilenenden werden zu LF (\\n) normalisiert.',
	'tool.text-whitespace-cleaner.faq.1.question': 'Werden führende Leerzeichen beibehalten?',
	'tool.text-whitespace-cleaner.faq.1.answer':
		'Ja. Nur nachgestellte Leerzeichen werden entfernt. Führende Einrückung und Leerzeichen innerhalb von Zeilen werden beibehalten, außer mehrere Leerzeichen/Tabulatoren werden zu einzelnen Leerzeichen zusammengefasst.',
	'tool.text-whitespace-cleaner.faq.2.question': 'Wie werden Zeilenenden normalisiert?',
	'tool.text-whitespace-cleaner.faq.2.answer':
		'Windows (CRLF) und alte Mac (CR) Zeilenenden werden zu Unix-Stil LF (\\n) konvertiert. Mehrere aufeinanderfolgende leere Zeilen werden zu doppelten Zeilenumbrüchen zusammengefasst.',
	'tool.text-whitespace-cleaner.use_case.0':
		'Code vor der Versionskontrolle bereinigen, um nachgestellte Leerzeichen zu entfernen',
	'tool.text-whitespace-cleaner.use_case.1':
		'Text aus verschiedenen Quellen mit inkonsistenter Abstandsnutzung normalisieren',
	'tool.text-whitespace-cleaner.use_case.2':
		'Protokolle und Datendateien für konsistente Verarbeitung und Analyse vorbereiten',
	'tool.text-whitespace-cleaner.use_case.3':
		'Inhalte von Rich-Text-Editoren zu klarem Text mit konsistenter Abstandsnutzung formatieren',
	'ui.text_counter.words': 'Wörter',
	'ui.text_counter.characters': 'Zeichen',
	'ui.text_counter.characters_no_spaces': 'Zeichen (ohne Leerzeichen)',
	'ui.text_counter.sentences': 'Sätze',
	'ui.text_counter.paragraphs': 'Absätze',
	'ui.text_counter.reading_time': 'Lesezeit',
	'ui.text_counter.minutes': 'Min',
	'ui.text_counter.lines': 'Zeilen',
	'ui.text_counter.placeholder': 'Text hier eingeben oder einfügen...',
	'ui.ai_tokens.characters': 'Zeichen',
	'ui.ai_tokens.model_label': 'Modell',
	'ui.ai_tokens.upload_file': 'Datei hochladen',
	'ui.ai_tokens.file_loaded': '{name} geladen',
	'ui.ai_tokens.file_failed': 'Datei konnte nicht geladen werden',
	'ui.ai_tokens.copy_summary': 'Zusammenfassung kopieren',
	'ui.ai_tokens.copy.title': 'KI-Token-Zusammenfassung',
	'ui.ai_tokens.worker_active':
		'Große Eingabe erkannt (>{size}). Die Tokenanalyse läuft in einem Web Worker.',
	'ui.ai_tokens.worker_failed':
		'Tokenanalyse fehlgeschlagen. Versuchen Sie eine kleinere Eingabe oder laden Sie die Seite neu.',
	'ui.ai_tokens.worker_badge': 'Worker',
	'ui.ai_tokens.input_label': 'Prompt oder Text',
	'ui.ai_tokens.input_placeholder':
		'Prompt, Chat-Transkript oder Dokument zur Token-Schätzung einfügen...',
	'ui.ai_tokens.analysis_title': 'Tokenanalyse',
	'ui.ai_tokens.processing': 'Zähle...',
	'ui.ai_tokens.comparison_title': 'Modellvergleich',
	'ui.ai_tokens.stat.tokens': 'Tokens',
	'ui.ai_tokens.stat.words': 'Wörter',
	'ui.ai_tokens.stat.words_helper': 'Durch Leerzeichen getrennte Wörter',
	'ui.ai_tokens.stat.characters': 'Zeichen',
	'ui.ai_tokens.stat.tokens_per_word': 'Tokens / Wort',
	'ui.ai_tokens.stat.tokens_per_word_helper': 'Niedriger ist meist günstiger',
	'ui.ai_tokens.stat.estimated_cost': 'Geschätzte Kosten',
	'ui.ai_tokens.stat.estimated_cost_helper': 'Schätzung der Eingabetokens',
	'ui.ai_tokens.table.model': 'Modell',
	'ui.ai_tokens.table.tokens': 'Tokens',
	'ui.ai_tokens.table.ratio': 'Tokens / Wort',
	'ui.ai_tokens.table.cost': 'Kosten',
	'ui.prompt_optimizer.characters': 'Zeichen',
	'ui.prompt_optimizer.tokens': 'Tokens',
	'ui.prompt_optimizer.model_label': 'Modell',
	'ui.prompt_optimizer.upload_file': 'Datei hochladen',
	'ui.prompt_optimizer.file_loaded': '{name} geladen',
	'ui.prompt_optimizer.file_failed': 'Datei konnte nicht geladen werden',
	'ui.prompt_optimizer.worker_active':
		'Große Eingabe erkannt (>{size}). Die Optimierung läuft in einem Web Worker.',
	'ui.prompt_optimizer.worker_failed':
		'Worker-Optimierung fehlgeschlagen. Verarbeitung im Hauptthread wird verwendet.',
	'ui.prompt_optimizer.worker_badge': 'Worker',
	'ui.prompt_optimizer.input_label': 'Ursprünglicher Prompt',
	'ui.prompt_optimizer.input_placeholder':
		'Prompt einfügen, um ihn für Token-Nutzung zu optimieren...',
	'ui.prompt_optimizer.output_label': 'Optimierte Ausgabe',
	'ui.prompt_optimizer.processing': 'Optimiere...',
	'ui.prompt_optimizer.copy_output': 'Optimierte Ausgabe kopieren',
	'ui.prompt_optimizer.preview_title': 'Vorschau',
	'ui.prompt_optimizer.output_placeholder': 'Der optimierte Prompt erscheint hier...',
	'ui.prompt_optimizer.option.filler': 'Füllwörter entfernen',
	'ui.prompt_optimizer.option.filler_desc':
		'Signalschwache Phrasen entfernen, ohne die Absicht zu ändern.',
	'ui.prompt_optimizer.option.whitespace': 'Leerraum komprimieren',
	'ui.prompt_optimizer.option.whitespace_desc':
		'Wiederholte Leerzeichen und Leerzeilen normalisieren.',
	'ui.prompt_optimizer.option.markdown': 'Markdown vereinfachen',
	'ui.prompt_optimizer.option.markdown_desc':
		'Dekorative Formatierung reduzieren, die Tokens kostet.',
	'ui.prompt_optimizer.option.abbreviation': 'Abkürzungen verwenden',
	'ui.prompt_optimizer.option.abbreviation_desc':
		'Häufige KI-Prompt-Phrasen kürzen, wenn es sicher ist.',
	'ui.prompt_optimizer.stat.before': 'Vorher',
	'ui.prompt_optimizer.stat.before_helper': 'Ursprüngliche Tokenzahl',
	'ui.prompt_optimizer.stat.after': 'Nachher',
	'ui.prompt_optimizer.stat.after_helper': 'Optimierte Tokenzahl',
	'ui.prompt_optimizer.stat.saved': 'Gesparte Tokens',
	'ui.prompt_optimizer.stat.saved_helper': 'Geschätzte Reduktion',
	'ui.prompt_optimizer.stat.savings_percent': 'Ersparnis',
	'ui.prompt_optimizer.stat.savings_percent_helper': 'Vorher gegenüber nachher',
	'ui.prompt_optimizer.stat.cost_saved': 'Kostenersparnis',
	'ui.system_prompt_builder.template.custom': 'Benutzerdefiniert',
	'ui.system_prompt_builder.template.code_assistant': 'Coding-Assistent',
	'ui.system_prompt_builder.template.data_analyst': 'Datenanalyst',
	'ui.system_prompt_builder.template.translator': 'Übersetzer',
	'ui.system_prompt_builder.template.customer_support': 'Kundensupport',
	'ui.system_prompt_builder.format.plain_text': 'Klartext',
	'ui.system_prompt_builder.format.openai_json': 'OpenAI-JSON-Nachrichten',
	'ui.system_prompt_builder.field.role': 'Rolle',
	'ui.system_prompt_builder.field.objective': 'Ziel',
	'ui.system_prompt_builder.field.context': 'Kontext',
	'ui.system_prompt_builder.field.constraints': 'Einschränkungen',
	'ui.system_prompt_builder.field.examples': 'Beispiele',
	'ui.system_prompt_builder.field.output_requirements': 'Ausgabeanforderungen',
	'ui.system_prompt_builder.placeholder.role':
		'Definieren Sie Identität und Expertise des Assistenten...',
	'ui.system_prompt_builder.placeholder.objective':
		'Beschreiben Sie, was der Assistent erreichen soll...',
	'ui.system_prompt_builder.placeholder.context':
		'Fügen Sie Arbeitskontext, Zielgruppe, Domäne oder Produktdetails hinzu...',
	'ui.system_prompt_builder.placeholder.constraints':
		'Listen Sie Grenzen, Richtlinien, verbotenes Verhalten oder feste Anforderungen auf...',
	'ui.system_prompt_builder.placeholder.examples':
		'Geben Sie Beispielanfragen und ideales Assistentenverhalten an...',
	'ui.system_prompt_builder.placeholder.output_requirements':
		'Legen Sie Antwortstruktur, Formatierung, Zitate oder Tonalität fest...',
	'ui.system_prompt_builder.option.safety_boundaries': 'Sicherheitsgrenzen',
	'ui.system_prompt_builder.option.safety_boundaries_desc':
		'Anweisungen zu Datenschutz, Unsicherheit, unsicheren Anfragen und erfundenen Angaben hinzufügen.',
	'ui.system_prompt_builder.option.quality_checklist': 'Qualitätscheckliste',
	'ui.system_prompt_builder.option.quality_checklist_desc':
		'Eine abschließende Selbstprüfung für Anforderungen, Format und Einschränkungen hinzufügen.',
	'ui.system_prompt_builder.option.reasoning_guidance': 'Denkhinweise',
	'ui.system_prompt_builder.option.reasoning_guidance_desc':
		'Den Assistenten anleiten, zuerst zu denken und nur nützliche Schlussfolgerungen offenzulegen.',
	'ui.system_prompt_builder.output_status': '{size} · {characters} Zeichen · {lines} Zeilen',
	'ui.system_prompt_builder.input_status': '{size} · {characters} Zeichen · {lines} Zeilen',
	'ui.system_prompt_builder.stat.characters': 'Zeichen',
	'ui.system_prompt_builder.stat.characters_helper': 'Generierte Ausgabe',
	'ui.system_prompt_builder.stat.size': 'Größe',
	'ui.system_prompt_builder.stat.size_helper': 'UTF-8-Ausgabegröße',
	'ui.system_prompt_builder.stat.lines': 'Zeilen',
	'ui.system_prompt_builder.stat.lines_helper': 'Zeilenzahl der Vorschau',
	'ui.system_prompt_builder.stat.sections': 'Abschnitte',
	'ui.system_prompt_builder.worker_failed':
		'Worker-Erstellung fehlgeschlagen. Verarbeitung wird im Hauptthread fortgesetzt.',
	'ui.system_prompt_builder.build_failed':
		'Der System-Prompt konnte nicht erstellt werden. Verkleinern Sie die Eingabe.',
	'ui.system_prompt_builder.sample_loaded': 'Beispiel geladen',
	'ui.system_prompt_builder.clear_title': 'Felder des System-Prompt-Builders löschen?',
	'ui.system_prompt_builder.clear_description':
		'Dadurch werden die aktuellen Builder-Eingaben und die Vorschau entfernt.',
	'ui.system_prompt_builder.input_cleared': 'Builder-Eingaben gelöscht',
	'ui.system_prompt_builder.copy_empty': 'Noch nichts zum Kopieren vorhanden',
	'ui.system_prompt_builder.copy_success': 'System-Prompt kopiert',
	'ui.system_prompt_builder.copy_error':
		'Kopieren fehlgeschlagen. Prüfen Sie die Browserberechtigungen.',
	'ui.system_prompt_builder.download_empty': 'Noch nichts zum Herunterladen vorhanden',
	'ui.system_prompt_builder.download_success': '{filename} heruntergeladen',
	'ui.system_prompt_builder.download_error':
		'Download fehlgeschlagen. Kopieren Sie stattdessen die Ausgabe.',
	'ui.system_prompt_builder.milliseconds': 'ms',
	'ui.system_prompt_builder.template_label': 'Vorlage',
	'ui.system_prompt_builder.output_format_label': 'Ausgabeformat',
	'ui.system_prompt_builder.worker_active':
		'Große Builder-Eingabe erkannt (>{size}). Die Prompt-Erstellung läuft in einem Web Worker.',
	'ui.system_prompt_builder.load_sample': 'Beispiel laden',
	'ui.system_prompt_builder.clear': 'Löschen',
	'ui.system_prompt_builder.builder_inputs_title': 'Builder-Eingaben',
	'ui.system_prompt_builder.output_label': 'Ausgabevorschau',
	'ui.system_prompt_builder.processing': 'Wird erstellt...',
	'ui.system_prompt_builder.worker_badge': 'Worker',
	'ui.system_prompt_builder.worker_used': 'Ausgelagert verarbeitet',
	'ui.system_prompt_builder.copy_output': 'Ausgabe kopieren',
	'ui.system_prompt_builder.download_output': 'Herunterladen',
	'ui.system_prompt_builder.preview_title': 'Vorschau',
	'ui.system_prompt_builder.output_placeholder': 'Der erstellte System-Prompt erscheint hier...',
	'ui.lorem.mode': 'Modus',
	'ui.lorem.mode.paragraphs': 'Absätze',
	'ui.lorem.mode.sentences': 'Sätze',
	'ui.lorem.mode.words': 'Wörter',
	'ui.lorem.count': 'Anzahl',
	'ui.lorem.seed': 'Seed',
	'ui.lorem.random_seed': 'Seed randomisieren',
	'ui.lorem.generate': 'Erzeugen',
	'ui.lorem.include_classic_opening': 'Klassischen Einstieg einfügen',
	'ui.lorem.auto_generate': 'Bei Änderungen automatisch erzeugen',
	'ui.lorem.output_format': 'Ausgabeformat',
	'ui.lorem.output_format.plain': 'Klartext',
	'ui.lorem.output_format.html': 'HTML',
	'ui.lorem.advanced_options': 'Erweiterte Optionen',
	'ui.lorem.min_words_per_sentence': 'Min Wörter / Satz',
	'ui.lorem.max_words_per_sentence': 'Max Wörter / Satz',
	'ui.lorem.min_sentences_per_paragraph': 'Min Sätze / Absatz',
	'ui.lorem.max_sentences_per_paragraph': 'Max Sätze / Absatz',
	'ui.lorem.source': 'Quelle',
	'ui.lorem.preview': 'Vorschau',
	'ui.lorem.empty_output': 'Die erzeugte Ausgabe erscheint hier...',
	'ui.lorem.generated': 'Lorem Ipsum erzeugt',
	'ui.lorem.seed_randomized': 'Seed wurde randomisiert',
	'ui.lorem.no_output': 'Noch keine erzeugte Ausgabe',
	'ui.markdown_to_html.placeholder': 'Markdown hier eingeben oder einfügen...',
	'ui.markdown_to_html.option.gfm': 'GFM-Tabellen und Task-Listen aktivieren',
	'ui.markdown_to_html.option.breaks': 'Einzelne Zeilenumbrüche in <br> umwandeln',
	'ui.markdown_to_html.option.highlight_code': 'Fenced Codeblöcke syntaxhervorheben',
	'ui.markdown_to_html.option.open_links_in_new_tab': 'Links in neuem Tab öffnen',
	'ui.markdown_to_html.option.allow_raw_html': 'Raw-HTML-Blöcke erlauben (erweitert)',
	'ui.markdown_to_html.view.preview': 'Vorschau',
	'ui.markdown_to_html.view.html': 'HTML',
	'ui.markdown_to_html.status.converting': 'Markdown wird konvertiert...',
	'ui.markdown_to_html.preview_aria': 'Markdown-HTML-Live-Vorschau',
	'ui.markdown_to_html.empty_preview':
		'Die Live-Vorschau erscheint hier, sobald Sie Markdown eingeben.',
	'ui.markdown_to_html.empty_html': 'Die erzeugte HTML-Ausgabe erscheint hier.',
	'ui.markdown_to_html.error.conversion_failed':
		'Markdown-Konvertierung fehlgeschlagen. Bitte Eingabe prüfen und erneut versuchen.',
	'ui.markdown_to_html.toast.no_html_output': 'Keine HTML-Ausgabe zum Herunterladen',
	'ui.markdown_to_html.warning.unsafe_link_removed': 'Unsicherer Link entfernt',
	'ui.markdown_to_html.warning.unsafe_image_removed': 'Unsicheres Bild entfernt',
	'ui.markdown_to_html.warning.raw_html_escaped': 'Raw-HTML aus Sicherheitsgründen maskiert',
	'ui.markdown_to_html.stats.headings': 'Überschriften',
	'ui.markdown_to_html.stats.tables': 'Tabellen',
	'ui.markdown_to_html.stats.code_blocks': 'Codeblöcke',
	'ui.markdown_to_html.stats.links': 'Links',
	'ui.markdown_to_html.stats.images': 'Bilder',
	'ui.markdown_to_html.stats.words': 'Wörter',
	'ui.text_case.tab_label': 'Case',
	'ui.text_case.placeholder': 'Text eingeben oder einfügen, um die Schreibweise zu konvertieren...',
	'ui.text_case.camel_case': 'camelCase',
	'ui.text_case.pascal_case': 'PascalCase',
	'ui.text_case.snake_case': 'snake_case',
	'ui.text_case.kebab_case': 'kebab-case',
	'ui.text_case.constant_case': 'CONSTANT_CASE',
	'ui.text_case.title_case': 'Title Case',
	'ui.text_case.sentence_case': 'Satzschreibung',
	'ui.regex.pattern_label': 'Muster',
	'ui.regex.pattern_placeholder': 'z. B. (?<name>\\w+)',
	'ui.regex.flags_label': 'Flags',
	'ui.regex.test_text_label': 'Testtext',
	'ui.regex.test_text_placeholder': 'Text eingeben oder einfügen, um Ihr Muster zu testen...',
	'ui.regex.copy_regex': 'Regex kopieren',
	'ui.regex.global_hint':
		'Aktivieren Sie g, um alle Treffer zu iterieren. Ohne g wird nur der erste Treffer zurückgegeben.',
	'ui.regex.stats.matches': 'Treffer',
	'ui.regex.stats.unique_matches': 'Eindeutig',
	'ui.regex.stats.lines_with_matches': 'Zeilen',
	'ui.regex.stats.coverage': 'Abdeckung',
	'ui.regex.stats.duration': 'Laufzeit',
	'ui.regex.highlight_title': 'Live-Hervorhebung',
	'ui.regex.preview_truncated': 'Vorschau auf {limit} Zeichen begrenzt',
	'ui.regex.no_highlight': 'Treffer werden hier hervorgehoben.',
	'ui.regex.matches_title': 'Treffer',
	'ui.regex.match_limit_reached': 'Trefferlimit erreicht',
	'ui.regex.no_matches': 'Keine Treffer gefunden.',
	'ui.regex.match_label': 'Treffer #{index}',
	'ui.regex.match_position': 'Zeile {line}, Spalte {column}',
	'ui.regex.match_range': 'Bereich: {range}',
	'ui.regex.capture_groups': 'Capture Groups',
	'ui.regex.no_capture_groups': 'Keine Capture Groups',
	'ui.regex.named_capture_groups': 'Benannte Groups',
	'ui.regex.no_named_capture_groups': 'Keine benannten Groups',
	'ui.regex.group_label': 'Group {index}',
	'ui.regex.group_unmatched': 'Kein Treffer',
	'ui.regex.error.empty_pattern': 'Geben Sie ein Regex-Muster ein, um den Test zu starten.',
	'ui.regex.error.invalid_flag': 'Ungültiges Regex-Flag: {flag}',
	'ui.regex.error.duplicate_flag': 'Doppeltes Regex-Flag: {flag}',
	'ui.regex.error.unsupported_flag': 'Regex-Flag wird in dieser Umgebung nicht unterstützt: {flag}',
	'ui.regex.error.syntax_error': 'Muster-Syntaxfehler: {detail}',
	'ui.regex.flags.g.label': 'Global',
	'ui.regex.flags.g.description': 'Findet alle Treffer statt nur des ersten',
	'ui.regex.flags.i.label': 'Ignore case',
	'ui.regex.flags.i.description': 'Ignoriert Groß-/Kleinschreibung bei Buchstaben',
	'ui.regex.flags.m.label': 'Multiline',
	'ui.regex.flags.m.description': 'Lässt ^ und $ pro Zeile arbeiten',
	'ui.regex.flags.s.label': 'Dotall',
	'ui.regex.flags.s.description': 'Erlaubt, dass der Punkt (.) auch Zeilenumbrüche matcht',
	'ui.regex.flags.u.label': 'Unicode',
	'ui.regex.flags.u.description': 'Aktiviert den vollständigen Unicode-Modus',
	'ui.regex.flags.y.label': 'Sticky',
	'ui.regex.flags.y.description': 'Matched strikt ab der aktuellen lastIndex-Position',
	'ui.regex.flags.d.label': 'Indizes',
	'ui.regex.flags.d.description': 'Gibt Start-/Endindizes für Groups aus, wenn unterstützt',
	'tool.text-readability-analyzer.display_name': 'Lesbarkeits-Analyzer',
	'tool.text-readability-analyzer.tagline':
		'Messe, wie leicht sich dein Text lesen lässt – mit bewährten Lesbarkeitsformeln',
	'tool.text-readability-analyzer.description':
		'Analysiere die Lesbarkeit von Texten mit Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau und SMOG. Erhalte sofort Einblicke zu Satzkomplexität und Lesealter direkt im Browser.',
	'tool.text-readability-analyzer.primary_keyword': 'lesbarkeits analyzer',
	'tool.text-readability-analyzer.meta_title':
		'Lesbarkeits-Analyzer — Flesch, Fog, SMOG Werte | fmtly.dev',
	'tool.text-readability-analyzer.meta_description':
		'Kostenloser Lesbarkeits-Analyzer mit Flesch-, Flesch-Kincaid-, Gunning-Fog-, Coleman-Liau- und SMOG-Metriken. Schnell, privat und vollständig im Browser.',
	'tool.text-readability-analyzer.operation': 'Lesbarkeit analysieren',
	'tool.text-readability-analyzer.faq.0.question': 'Welche Lesbarkeitsformeln sind enthalten?',
	'tool.text-readability-analyzer.faq.0.answer':
		'Das Tool enthält Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau und SMOG sowie ergänzende Textkomplexitätsmetriken.',
	'tool.text-readability-analyzer.faq.1.question':
		'Warum ist der SMOG-Wert bei kurzen Texten manchmal nicht verfügbar?',
	'tool.text-readability-analyzer.faq.1.answer':
		'SMOG ist statistisch erst ab mindestens 3 Sätzen zuverlässig. Bei kürzeren Eingaben zeigt das Tool eine Warnung statt eines instabilen Werts.',
	'tool.text-readability-analyzer.faq.2.question':
		'Läuft die Lesbarkeitsanalyse lokal oder über einen Server?',
	'tool.text-readability-analyzer.faq.2.answer':
		'Alles läuft lokal im Browser. Dein Text wird nicht an einen Server übertragen.',
	'tool.text-readability-analyzer.use_case.0':
		'Dokumentation, Onboarding-Texte und Hilfecenter-Inhalte vor der Veröffentlichung prüfen',
	'tool.text-readability-analyzer.use_case.1':
		'Mehrere Entwürfe vergleichen und die klarste Version auswählen',
	'tool.text-readability-analyzer.use_case.2':
		'Produkttexte und In-App-Hinweise für breitere Zielgruppen optimieren',
	'tool.text-readability-analyzer.use_case.3':
		'Dichte Abschnitte in technischer Doku erkennen und vereinfachen',
	'tool.text-morse-code-translator.display_name': 'Morsecode-Übersetzer',
	'tool.text-morse-code-translator.tagline':
		'Wandle Klartext in Morsecode um und dekodiere Morse zurück in lesbaren Text',
	'tool.text-morse-code-translator.description':
		'Übersetze Text in internationalen Morsecode und dekodiere Morsefolgen sofort zurück. Unterstützt Buchstaben, Zahlen, Satzzeichen und verarbeitet große Eingaben per Web Worker — alles lokal im Browser.',
	'tool.text-morse-code-translator.primary_keyword': 'morsecode übersetzer',
	'tool.text-morse-code-translator.meta_title': 'Morsecode-Übersetzer — Text ↔ Morse | fmtly.dev',
	'tool.text-morse-code-translator.meta_description':
		'Text zu Morsecode übersetzen und Morsecode sofort zurück in Klartext dekodieren. Schnell, privat und vollständig browserbasiert.',
	'tool.text-morse-code-translator.operation': 'Morsecode übersetzen',
	'tool.text-morse-code-translator.faq.0.question': 'Welche Morse-Variante verwendet dieses Tool?',
	'tool.text-morse-code-translator.faq.0.answer':
		'Es nutzt den internationalen Morsecode für lateinische Buchstaben, Zahlen und gängige Satzzeichen.',
	'tool.text-morse-code-translator.faq.1.question':
		'Wie geht die Dekodierung mit unbekannten Morse-Tokens um?',
	'tool.text-morse-code-translator.faq.1.answer':
		'Unbekannte Tokens werden markiert und können durch ein konfigurierbares Platzhalterzeichen ersetzt werden, damit Teilergebnisse lesbar bleiben.',
	'tool.text-morse-code-translator.faq.2.question':
		'Kann ich auch lange Logs oder große Eingaben verarbeiten?',
	'tool.text-morse-code-translator.faq.2.answer':
		'Ja. Ab 500KB läuft die Verarbeitung in einem Web Worker, damit die Oberfläche reaktionsschnell bleibt.',
	'tool.text-morse-code-translator.use_case.0':
		'Rufzeichen, Alarme oder Trainingsphrasen schnell in Morsecode umwandeln',
	'tool.text-morse-code-translator.use_case.1':
		'Morse-Schnipsel aus Logs, Transkripten oder Übungen in Klartext zurückwandeln',
	'tool.text-morse-code-translator.use_case.2':
		'Morse-Grundlagen mit sofortigem Encode/Decode-Feedback vermitteln',
	'tool.text-morse-code-translator.use_case.3':
		'Abstände und Satzzeichen vor dem Einsatz in Tooling verlässlich prüfen',
	'ui.morse.mode_label': 'Modus',
	'ui.morse.mode.encode': 'Text → Morse',
	'ui.morse.mode.decode': 'Morse → Text',
	'ui.morse.separator_label': 'Worttrenner',
	'ui.morse.separator.slash': '/ Schrägstrich',
	'ui.morse.separator.pipe': '| Senkrechtstrich',
	'ui.morse.separator.newline': 'Neue Zeile',
	'ui.morse.option.preserve_unsupported_encode':
		'Nicht unterstützte Zeichen in der Ausgabe beibehalten',
	'ui.morse.option.preserve_unsupported_decode': 'Platzhalter für unbekannte Morse-Tokens einfügen',
	'ui.morse.option.unknown_placeholder': 'Platzhalter für Unbekanntes',
	'ui.morse.input_label': 'Eingabe',
	'ui.morse.output_label': 'Ausgabe',
	'ui.morse.input_placeholder.encode':
		'Text eingeben oder einfügen, um ihn in Morsecode umzuwandeln...',
	'ui.morse.input_placeholder.decode': 'Morsecode (., -, /, |) einfügen, um ihn zu dekodieren...',
	'ui.morse.output_placeholder.encode': 'Morse-Ausgabe erscheint hier...',
	'ui.morse.output_placeholder.decode': 'Dekodierter Text erscheint hier...',
	'ui.morse.button.swap_mode': 'Modus wechseln & Ausgabe übernehmen',
	'ui.morse.worker_active':
		'Große Eingabe erkannt (>{size}). Die Verarbeitung läuft in einem Web Worker.',
	'ui.morse.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Fallback auf Hauptthread-Verarbeitung.',
	'ui.morse.warning.unsupported_input_characters':
		'Einige Eingabezeichen sind in den unterstützten Morse-Zuordnungen nicht enthalten.',
	'ui.morse.warning.unknown_morse_tokens': 'Einige Morse-Tokens konnten nicht dekodiert werden.',
	'ui.morse.warning.no_changes': 'Für den gewählten Modus wurden keine Änderungen erkannt.',
	'ui.morse.stat.symbols': 'Symbole',
	'ui.morse.stat.words': 'Wörter',
	'ui.morse.stat.unsupported': 'Nicht unterstützt',
	'ui.morse.stat.unknown_tokens': 'Unbekannte Tokens',
	'ui.readability.unavailable': '—',
	'ui.readability.input_label': 'Eingabetext',
	'ui.readability.input_placeholder':
		'Text einfügen oder schreiben, um die Lesbarkeit zu analysieren...',
	'ui.readability.output_title': 'Lesbarkeitsanalyse',
	'ui.readability.processing': 'Wird analysiert...',
	'ui.readability.copy_report': 'Bericht kopieren',
	'ui.readability.worker_active':
		'Große Eingabe erkannt (>{size}). Die Analyse läuft in einem Web Worker.',
	'ui.readability.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Fallback auf Analyse im Hauptthread.',
	'ui.readability.level_label': 'Gesamtlesbarkeit',
	'ui.readability.level.very_easy': 'Sehr leicht',
	'ui.readability.level.easy': 'Leicht',
	'ui.readability.level.fairly_easy': 'Ziemlich leicht',
	'ui.readability.level.standard': 'Standard',
	'ui.readability.level.fairly_difficult': 'Ziemlich schwierig',
	'ui.readability.level.difficult': 'Schwierig',
	'ui.readability.level.very_difficult': 'Sehr schwierig',
	'ui.readability.level_desc.very_easy':
		'Geeignet für ein breites Publikum und schnelles Überfliegen.',
	'ui.readability.level_desc.easy': 'Klare Sprache mit geringer kognitiver Last.',
	'ui.readability.level_desc.fairly_easy':
		'Gut geeignet für Produktdokus, Guides und allgemeine Webtexte.',
	'ui.readability.level_desc.standard':
		'Ausgewogene Lesbarkeit für technische und nicht-technische Leser.',
	'ui.readability.level_desc.fairly_difficult':
		'Teilweise dicht formuliert – lange Sätze nach Möglichkeit vereinfachen.',
	'ui.readability.level_desc.difficult':
		'Erfordert konzentriertes Lesen. Kürzere Sätze und einfachere Wörter helfen.',
	'ui.readability.level_desc.very_difficult':
		'Sehr dichter Text. Vor breiter Veröffentlichung auf Verständlichkeit überarbeiten.',
	'ui.readability.metric.words': 'Wörter',
	'ui.readability.metric.sentences': 'Sätze',
	'ui.readability.metric.syllables': 'Silben',
	'ui.readability.metric.reading_age': 'Lesealter',
	'ui.readability.metric.reading_time': 'Lesezeit',
	'ui.readability.metric.paragraphs': 'Absätze',
	'ui.readability.metric.complex_words': 'Komplexe Wörter',
	'ui.readability.stat.avg_words_per_sentence': 'Ø Wörter/Satz',
	'ui.readability.stat.avg_syllables_per_word': 'Ø Silben/Wort',
	'ui.readability.stat.characters': 'Zeichen',
	'ui.readability.stat.letters': 'Buchstaben',
	'ui.readability.scores_title': 'Lesbarkeitsformeln',
	'ui.readability.score.flesch_ease': 'Flesch Reading Ease',
	'ui.readability.score.flesch_kincaid': 'Flesch-Kincaid-Grad',
	'ui.readability.score.gunning_fog': 'Gunning-Fog-Index',
	'ui.readability.score.coleman_liau': 'Coleman-Liau-Index',
	'ui.readability.score.smog': 'SMOG',
	'ui.readability.score_desc.flesch_ease': 'Je höher, desto leichter zu lesen.',
	'ui.readability.score_desc.flesch_kincaid': 'Geschätzte Klassenstufe im US-Schulsystem.',
	'ui.readability.score_desc.gunning_fog':
		'Komplexität auf Basis von Satzlänge und Wortschwierigkeit.',
	'ui.readability.score_desc.coleman_liau': 'Lesbarkeit aus Buchstabenanzahl und Satzdichte.',
	'ui.readability.score_desc.smog': 'Geschätzte Klassenstufe anhand mehrsilbiger Wörter.',
	'ui.readability.warning.insufficient_sentences_for_smog':
		'SMOG benötigt mindestens 3 Sätze für eine stabile Schätzung.',
	'ui.readability.report_title': 'Lesbarkeitsbericht',
	'ui.readability.report_level': 'Niveau',
	'ui.readability.report_reading_age': 'Geschätztes Lesealter',
	'ui.text_reverser.tab_label': 'Umkehren',
	'ui.text_reverser.placeholder': 'Text eingeben oder einfügen, um ihn umzukehren...',
	'ui.text_reverser.characters': 'Nach Zeichen umkehren',
	'ui.text_reverser.words': 'Nach Wörtern umkehren',
	'ui.text_reverser.lines': 'Nach Zeilen umkehren',
	'ui.text_reverser.lines_count': 'Zeilen',
	'ui.duplicate_line_remover.tab_label': 'Deduplizieren',
	'ui.duplicate_line_remover.placeholder':
		'Text eingeben oder einfügen, um doppelte Zeilen zu entfernen...',
	'ui.duplicate_line_remover.unique_lines': 'Eindeutige Zeilen',
	'ui.duplicate_line_remover.duplicates_removed': 'Duplikate entfernt',
	'ui.duplicate_line_remover.result': 'Ergebnis',
	'ui.line_sorter.tab_label': 'Sortieren',
	'ui.line_sorter.placeholder': 'Zeilen zum Sortieren eingeben oder einfügen...',
	'ui.line_sorter.mode_label': 'Sortiermodus',
	'ui.line_sorter.mode.alphabetical': 'Alphabetisch',
	'ui.line_sorter.mode.numeric': 'Numerisch',
	'ui.line_sorter.mode.length': 'Nach Länge',
	'ui.line_sorter.mode.random': 'Zufällig mischen',
	'ui.line_sorter.direction_label': 'Richtung',
	'ui.line_sorter.direction.asc': 'Aufsteigend',
	'ui.line_sorter.direction.desc': 'Absteigend',
	'ui.line_sorter.option.case_sensitive': 'Groß-/Kleinschreibung beachten',
	'ui.line_sorter.option.trim_before_sort': 'Zeilen vor dem Sortieren trimmen',
	'ui.line_sorter.option.remove_empty_lines': 'Leere Zeilen entfernen',
	'ui.line_sorter.option.deduplicate': 'Zeilen vorher deduplizieren',
	'ui.line_sorter.shuffle_seed': 'Shuffle-Seed',
	'ui.line_sorter.generate_seed': 'Seed randomisieren',
	'ui.line_sorter.input_lines': 'Eingabezeilen',
	'ui.line_sorter.output_lines': 'Ausgabezeilen',
	'ui.line_sorter.empty_lines_removed': 'Leere Zeilen entfernt',
	'ui.line_sorter.duplicates_removed': 'Duplikate entfernt',
	'ui.line_sorter.lines_moved': 'Verschobene Zeilen',
	'ui.line_sorter.output': 'Sortierte Ausgabe',
	'ui.line_sorter.apply_output': 'Auf Eingabe anwenden',
	'ui.line_sorter.status.processing': 'Zeilen werden sortiert...',
	'ui.line_sorter.status.worker': 'Großeingabe-Modus (Web Worker)',
	'ui.line_sorter.error.processing_failed':
		'Sortierung fehlgeschlagen. Bitte Optionen oder Eingabe anpassen und erneut versuchen.',
	'ui.line_sorter.toast.applied': 'Sortierte Ausgabe auf Eingabe angewendet',
	'ui.line_sorter.no_output': 'Noch keine sortierte Ausgabe vorhanden',
	'ui.whitespace_cleaner.tab_label': 'Leerzeichen',
	'ui.whitespace_cleaner.placeholder':
		'Text eingeben oder einfügen, um Leerzeichen zu bereinigen...',
	'ui.whitespace_cleaner.trailing_spaces': 'Nachgestellte Leerzeichen',
	'ui.whitespace_cleaner.leading_spaces': 'Führende Leerzeichen',
	'ui.whitespace_cleaner.blanks_collapsed': 'Leerzeichen zusammengefasst',
	'ui.whitespace_cleaner.tabs_converted': 'Tabs konvertiert',
	'ui.whitespace_cleaner.spaces_converted': 'Leerzeichen konvertiert',
	'ui.whitespace_cleaner.lines_processed': 'Verarbeitete Zeilen',
	'ui.whitespace_cleaner.line_endings_normalized': 'Zeilenenden normalisiert',
	'ui.whitespace_cleaner.result': 'Ergebnis',
	'ui.whitespace_cleaner.options': 'Bereinigungsoptionen',
	'ui.whitespace_cleaner.remove_leading': 'Führende Leerzeichen entfernen',
	'ui.whitespace_cleaner.remove_trailing': 'Nachgestellte Leerzeichen entfernen',
	'ui.whitespace_cleaner.collapse_spaces': 'Mehrfache Leerzeichen zusammenfassen',
	'ui.whitespace_cleaner.collapse_tabs': 'Tabs zu Leerzeichen zusammenfassen',
	'ui.whitespace_cleaner.convert_tabs_to_spaces': 'Tabs in Leerzeichen umwandeln',
	'ui.whitespace_cleaner.convert_spaces_to_tabs': 'Leerzeichen in Tabs umwandeln',
	'ui.whitespace_cleaner.trim_lines': 'Jede Zeile kürzen',
	'ui.whitespace_cleaner.remove_all_spaces': 'Alle Leerzeichen entfernen',
	'ui.whitespace_cleaner.remove_all_line_breaks': 'Alle Zeilenumbrüche entfernen',
	'ui.whitespace_cleaner.preserve_paragraph_breaks': 'Absatzumbrüche erhalten',
	'ui.whitespace_cleaner.tab_size': 'Tab-Größe',
	'ui.csv.controls.table_name': 'Tabellenname',
	'ui.csv.controls.batch_size': 'Stapelgröße',
	// ── Encode-Kategorie ──────────────────────────────────────────────────────
	'category.encode.display_name': 'Kodieren / Dekodieren',
	'category.encode.description':
		'Daten in gängigen Formaten kodieren und dekodieren — JWT, Base64, URL, HTML-Entities und mehr. Alle Werkzeuge laufen vollständig im Browser.',
	'category.encode.primary_keyword': 'kodieren dekodieren tools',
	// ── JWT Decoder ───────────────────────────────────────────────────────────
	'tool.encode-jwt-decoder.display_name': 'JWT Decoder',
	'tool.encode-jwt-decoder.tagline':
		'JWT-Token dekodieren und Claims, Ablaufzeit sowie Algorithmus prüfen',
	'tool.encode-jwt-decoder.description':
		'Dekodiere JSON Web Tokens sofort – prüfe den Header-Algorithmus, Payload-Claims, Ablaufzeitstempel und die rohe Base64URL-Signatur. Alle Verarbeitungsschritte finden im Browser statt; nichts wird an einen Server gesendet.',
	'tool.encode-jwt-decoder.primary_keyword': 'jwt decoder',
	'tool.encode-jwt-decoder.meta_title': 'JWT Decoder — Header, Payload & Claims prüfen | fmtly.dev',
	'tool.encode-jwt-decoder.meta_description':
		'JWT-Token im Browser dekodieren und prüfen. Header, Payload-Claims, Ablaufstatus und Signatur ansehen. Schnell, privat und kostenlos — keine Daten verlassen dein Gerät.',
	'tool.encode-jwt-decoder.operation': 'JWT dekodieren',
	'tool.encode-jwt-decoder.faq.0.question': 'Wird mein JWT an einen Server gesendet?',
	'tool.encode-jwt-decoder.faq.0.answer':
		'Nein. Die gesamte Dekodierung findet ausschließlich im Browser statt. Dein Token verlässt nie dein Gerät, sodass dieses Werkzeug auch mit echten Authentifizierungs-Tokens sicher verwendet werden kann.',
	'tool.encode-jwt-decoder.faq.1.question': 'Verifiziert dieses Tool die Signatur?',
	'tool.encode-jwt-decoder.faq.1.answer':
		'Nein. Die Signaturverifizierung erfordert den geheimen oder öffentlichen Schlüssel. Dieses Tool dekodiert und zeigt nur den Payload – verwende deine serverseitige Bibliothek, um die Echtheit zu prüfen.',
	'tool.encode-jwt-decoder.faq.2.question': 'Welche JWT-Algorithmen werden unterstützt?',
	'tool.encode-jwt-decoder.faq.2.answer':
		'Der Decoder verarbeitet jeden Standard-JWT mit drei Teilen, unabhängig vom Algorithmus (HS256, RS256, ES256 usw.), da er lediglich den Base64URL-kodierten Inhalt ohne Signaturprüfung dekodiert.',
	'tool.encode-jwt-decoder.faq.3.question': 'Kann ich große JWTs oder Token-Mengen dekodieren?',
	'tool.encode-jwt-decoder.faq.3.answer':
		'Eingaben über 500KB werden automatisch an einen Web Worker ausgelagert, sodass der UI-Thread auch bei ungewöhnlich großen Tokens oder Test-Payloads reaktionsschnell bleibt.',
	'tool.encode-jwt-decoder.use_case.0':
		'Authentifizierungs-Token beim lokalen API-Entwickeln und Debuggen prüfen',
	'tool.encode-jwt-decoder.use_case.1':
		'Ablaufzeit und Standard-Claims (iss, sub, aud) auf einen Blick kontrollieren',
	'tool.encode-jwt-decoder.use_case.2':
		'JWT-Struktur und die Rolle von Header, Payload und Signatur vermitteln',
	'tool.encode-jwt-decoder.use_case.3':
		'Autorisierungsfehler durch Analyse benutzerdefinierter Claims im Payload beheben',
	// ── JWT Decoder UI-Texte ──────────────────────────────────────────────────
	'ui.jwt.input_placeholder': 'JWT-Token hier einfügen (eyJ…)',
	'ui.jwt.section.header': 'Header',
	'ui.jwt.section.payload': 'Payload',
	'ui.jwt.section.signature': 'Signatur',
	'ui.jwt.standard_claims': 'Standardmäßige Claims',
	'ui.jwt.all_claims': 'Alle Claims',
	'ui.jwt.signature_note':
		'Signaturen werden nicht verifiziert. Verwende deine serverseitige Bibliothek, um die Token-Echtheit zu prüfen.',
	'ui.jwt.status.valid': 'Gültig',
	'ui.jwt.status.expired': 'Abgelaufen',
	'ui.jwt.status.not_yet_valid': 'Noch nicht gültig',
	'ui.jwt.status.no_expiry': 'Kein Ablaufdatum',
	'ui.jwt.expires_in': 'Läuft ab in {time}',
	'ui.jwt.expired_ago': 'Abgelaufen vor {time}',
	'ui.jwt.claim.iss': 'Aussteller',
	'ui.jwt.claim.sub': 'Betreff',
	'ui.jwt.claim.aud': 'Zielgruppe',
	'ui.jwt.claim.exp': 'Läuft ab',
	'ui.jwt.claim.nbf': 'Nicht vor',
	'ui.jwt.claim.iat': 'Ausgestellt am',
	'ui.jwt.claim.jti': 'JWT-ID',
	'ui.jwt.error.empty': 'Oben ein JWT-Token einfügen, um es zu dekodieren.',
	'ui.jwt.error.invalid_format':
		'Ungültiges JWT-Format: drei durch Punkte getrennte Teile erwartet.',
	'ui.jwt.error.invalid_base64': 'Base64URL-Dekodierung fehlgeschlagen.',
	'ui.jwt.error.invalid_json': 'Dekodierter Inhalt ist kein gültiges JSON.',
	'ui.jwt.clear': 'Löschen',
	'ui.jwt.copy_jwt': 'Token kopieren',
	'ui.jwt.copy_header': 'Kopieren',
	'ui.jwt.copy_payload': 'Kopieren',
	'ui.jwt.copy_signature': 'Kopieren',
	'ui.jwt.worker_active': 'Große Eingabe (>{size}) wird im Worker verarbeitet.',
	'ui.jwt.worker_failed': 'Worker-Verarbeitung fehlgeschlagen. Fallback auf Hauptthread.',
	'ui.jwt.error.invalid_signature': 'Ungültige JWT-Signatur',
	'ui.jwt.errors.invalid_base64': 'Ungültige Base64-URL-Kodierung in JWT-Segmenten',
	// ── Base64 Kodieren / Dekodieren ─────────────────────────────────────────
	'tool.encode-base64-encode-decode.display_name': 'Base64 Kodieren / Dekodieren',
	'tool.encode-base64-encode-decode.tagline':
		'Base64-Text im Standard- oder URL-sicheren Modus kodieren und dekodieren',
	'tool.encode-base64-encode-decode.description':
		'Kodiere Klartext zu Base64 oder dekodiere Base64 direkt im Browser zurück zu UTF-8-Text. Wechsle zwischen Standard- und URL-sicherer Variante, steuere das Padding, ignoriere Leerzeichen beim Dekodieren und verarbeite große Eingaben per Web Worker.',
	'tool.encode-base64-encode-decode.primary_keyword': 'base64 kodieren dekodieren',
	'tool.encode-base64-encode-decode.meta_title':
		'Base64 Kodieren / Dekodieren — Standard & URL-sicher | fmtly.dev',
	'tool.encode-base64-encode-decode.meta_description':
		'Base64 im Browser sofort kodieren oder dekodieren. Mit Standard- und URL-sicherer Variante, Padding-Optionen, whitespace-tolerantem Dekodieren und Web-Worker-Verarbeitung für große Eingaben.',
	'tool.encode-base64-encode-decode.operation': 'Base64 kodieren / dekodieren',
	'tool.encode-base64-encode-decode.faq.0.question':
		'Werden meine Base64-Daten an einen Server gesendet?',
	'tool.encode-base64-encode-decode.faq.0.answer':
		'Nein. Die gesamte Base64-Kodierung und -Dekodierung findet vollständig im Browser statt. Deine Daten bleiben auf deinem Gerät.',
	'tool.encode-base64-encode-decode.faq.1.question':
		'Was ist der Unterschied zwischen Standard- und URL-sicherem Base64?',
	'tool.encode-base64-encode-decode.faq.1.answer':
		'Standard-Base64 verwendet + und /, URL-sicheres Base64 verwendet - und _. Die URL-sichere Variante eignet sich besser für JWTs, Query-Parameter und Dateinamen mit URL-reservierten Zeichen.',
	'tool.encode-base64-encode-decode.faq.2.question':
		'Kann das Tool Base64 mit fehlendem Padding oder Zeilenumbrüchen dekodieren?',
	'tool.encode-base64-encode-decode.faq.2.answer':
		'Ja. Der Decoder kann Leerzeichen ignorieren und fehlendes Padding automatisch ergänzen, wenn möglich. Das hilft bei kopierten Werten aus Logs und Tokens.',
	'tool.encode-base64-encode-decode.faq.3.question':
		'Kann das Tool große Base64-Payloads verarbeiten?',
	'tool.encode-base64-encode-decode.faq.3.answer':
		'Ja. Eingaben über 500KB werden automatisch in einem Web Worker verarbeitet, damit die Oberfläche reaktionsschnell bleibt.',
	'tool.encode-base64-encode-decode.use_case.0':
		'API-Zugangsdaten oder Test-Payloads während der Entwicklung in Base64 kodieren',
	'tool.encode-base64-encode-decode.use_case.1':
		'Base64-Snippets aus Logs, Headern oder Debugging-Tools dekodieren',
	'tool.encode-base64-encode-decode.use_case.2':
		'Schnell zwischen Standard- und URL-sicherer Base64-Variante wechseln',
	'tool.encode-base64-encode-decode.use_case.3':
		'Unsaubere Base64-Eingaben mit Leerzeichen und fehlendem Padding normalisieren',
	// ── Base64 Kodieren / Dekodieren — UI-Texte ──────────────────────────────
	'ui.base64.tab_label': 'Base64',
	'ui.base64.action_label': 'Aktion',
	'ui.base64.action.encode': 'Kodieren',
	'ui.base64.action.decode': 'Dekodieren',
	'ui.base64.variant_label': 'Variante',
	'ui.base64.variant.standard': 'Standard',
	'ui.base64.variant.url_safe': 'URL-sicher',
	'ui.base64.input_label': 'Eingabe',
	'ui.base64.output_label': 'Ausgabe',
	'ui.base64.input_placeholder': 'Klartext oder Base64-Inhalt einfügen...',
	'ui.base64.output_placeholder': 'Kodierte oder dekodierte Ausgabe erscheint hier...',
	'ui.base64.option.omit_padding': 'Abschließendes = Padding entfernen',
	'ui.base64.option.ignore_whitespace': 'Zeilenumbrüche und Leerzeichen beim Dekodieren ignorieren',
	'ui.base64.worker_active':
		'Große Eingabe erkannt (>{size}). Die Verarbeitung läuft in einem Web Worker.',
	'ui.base64.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Es wird auf den Hauptthread zurückgefallen.',
	'ui.base64.worker_badge': 'Worker',
	'ui.base64.warning.no_changes':
		'Für den gewählten Modus und die Aktion wurden keine Änderungen erkannt.',
	'ui.base64.warning.whitespace_ignored': 'Leerzeichenzeichen wurden vor der Dekodierung entfernt.',
	'ui.base64.warning.padding_auto_added':
		'Fehlendes Padding wurde vor der Dekodierung automatisch ergänzt.',
	'ui.base64.warning.alphabet_normalized':
		'URL-sichere Zeichen wurden für die Dekodierung in Standard-Base64 umgewandelt.',
	'ui.base64.error.invalid_base64_characters': 'Ungültige Base64-Eingabe: {detail}',
	'ui.base64.error.invalid_base64_length': 'Ungültige Base64-Länge: {detail}',
	'ui.base64.error.invalid_utf8_output': 'Dekodierte Bytes sind kein gültiger UTF-8-Text: {detail}',
	'ui.base64.button.swap_direction': 'Richtung wechseln',
	'ui.base64.button.apply_output': 'Ausgabe als Eingabe übernehmen',
	'ui.base64.toast.applied': 'Ausgabe wurde als Eingabe übernommen',
	'ui.base64.characters': 'Zeichen',
	// ── URL Kodieren / Dekodieren ────────────────────────────────────────────
	'tool.encode-url-encode-decode.display_name': 'URL Kodieren / Dekodieren',
	'tool.encode-url-encode-decode.tagline':
		'URL-Text prozentkodieren oder dekodieren – im Komponenten- oder Voll-URL-Modus',
	'tool.encode-url-encode-decode.description':
		'URL-Texte direkt im Browser kodieren oder dekodieren. Wechsle zwischen Komponentenmodus (encodeURIComponent/decodeURIComponent) und Voll-URL-Modus (encodeURI/decodeURI), behandle + bei Formulardaten als Leerzeichen und verarbeite große Eingaben per Web Worker.',
	'tool.encode-url-encode-decode.primary_keyword': 'url kodieren dekodieren',
	'tool.encode-url-encode-decode.meta_title':
		'URL Kodieren / Dekodieren — URL-Prozentkodierung online | fmtly.dev',
	'tool.encode-url-encode-decode.meta_description':
		'URL-Texte im Browser sofort kodieren oder dekodieren. Mit Komponenten-/Voll-URL-Modus, Plus-Leerzeichen-Option und Web-Worker-Verarbeitung für große Eingaben.',
	'tool.encode-url-encode-decode.operation': 'URL kodieren / dekodieren',
	'tool.encode-url-encode-decode.faq.0.question':
		'Werden meine URL-Daten an einen Server gesendet?',
	'tool.encode-url-encode-decode.faq.0.answer':
		'Nein. Die gesamte Kodierung und Dekodierung läuft vollständig im Browser. Deine Eingaben bleiben auf deinem Gerät.',
	'tool.encode-url-encode-decode.faq.1.question':
		'Was ist der Unterschied zwischen Komponentenmodus und Voll-URL-Modus?',
	'tool.encode-url-encode-decode.faq.1.answer':
		'Der Komponentenmodus ist für einzelne Fragmente wie Query-Werte oder Pfadsegmente und kodiert dabei auch Trenner wie ?, & und =. Der Voll-URL-Modus lässt URL-Strukturtrenner intakt und kodiert nur unsichere Zeichen.',
	'tool.encode-url-encode-decode.faq.2.question':
		'Warum wird + manchmal als Leerzeichen dekodiert?',
	'tool.encode-url-encode-decode.faq.2.answer':
		'In application/x-www-form-urlencoded Payloads werden Leerzeichen häufig als + dargestellt. Aktiviere beim Dekodieren die Option „Plus als Leerzeichen“, wenn du mit Formulardaten arbeitest.',
	'tool.encode-url-encode-decode.faq.3.question':
		'Kann dieses Tool große URL-Payloads verarbeiten?',
	'tool.encode-url-encode-decode.faq.3.answer':
		'Ja. Eingaben über 500KB werden automatisch in einem Web Worker verarbeitet, damit die Oberfläche reaktionsschnell bleibt.',
	'tool.encode-url-encode-decode.use_case.0':
		'Query-Parameterwerte vor API-Requests sicher kodieren',
	'tool.encode-url-encode-decode.use_case.1':
		'Kopierte URL-Fragmente aus Logs beim Routing-Debugging dekodieren',
	'tool.encode-url-encode-decode.use_case.2':
		'Plus-Leerzeichen-Verhalten in form-urlencoded Beispielen prüfen',
	'tool.encode-url-encode-decode.use_case.3':
		'Kodierte und dekodierte URLs bei Redirect-Problemen vergleichen',
	// ── HTML-Entities kodieren / dekodieren — Tool ────────────────────────────
	'tool.encode-html-entities-encode-decode.display_name': 'HTML-Entities kodieren / dekodieren',
	'tool.encode-html-entities-encode-decode.tagline':
		'HTML-Zeichenreferenzen kodieren oder dekodieren — WHATWG-Namen, dezimal und hex',
	'tool.encode-html-entities-encode-decode.description':
		'Wandeln Sie Text in sichere HTML-Entities um oder dekodieren Sie Referenzen zurück nach Unicode — alles lokal im Browser. Vollständige WHATWG-Namenliste, numerische Formen, strikter oder nachsichtiger Dekodiermodus, optional alle Nicht-ASCII-Zeichen kodieren und Web-Worker ab 500 KB.',
	'tool.encode-html-entities-encode-decode.primary_keyword':
		'html entities kodieren dekodieren online',
	'tool.encode-html-entities-encode-decode.meta_title':
		'HTML-Entities online kodieren/dekodieren | fmtly.dev',
	'tool.encode-html-entities-encode-decode.meta_description':
		'HTML-Entities sofort im Browser kodieren oder dekodieren. Vollständige WHATWG-Namen, Dezimal- und Hex-Modi, strikte Validierung, Essentials vs. voller Unicode-Umfang und Web-Worker für große Eingaben.',
	'tool.encode-html-entities-encode-decode.operation': 'HTML-Entities kodieren / dekodieren',
	'tool.encode-html-entities-encode-decode.faq.0.question':
		'Werden meine Texte an einen Server gesendet?',
	'tool.encode-html-entities-encode-decode.faq.0.answer':
		'Nein. Kodierung und Dekodierung laufen vollständig lokal in Ihrem Browser; Ihre Eingabe verlässt das Gerät nicht.',
	'tool.encode-html-entities-encode-decode.faq.1.question':
		'Was ist der Unterschied zwischen strikt und nachsichtig beim Dekodieren?',
	'tool.encode-html-entities-encode-decode.faq.1.answer':
		'Nachsichtig lässt unbekannte oder fehlerhafte Referenzen unverändert — ideal für gemischte Schnipsel. Strikt bricht mit einer Fehlermeldung ab, sobald eine Referenz unvollständig oder unbekannt ist.',
	'tool.encode-html-entities-encode-decode.faq.2.question':
		'Welche benannten Entities werden unterstützt?',
	'tool.encode-html-entities-encode-decode.faq.2.answer':
		'Die Dekodierung nutzt die vollständige WHATWG-Liste der benannten Zeichenreferenzen (über 2.100 Namen) plus dezimale und hexadezimale numerische Referenzen.',
	'tool.encode-html-entities-encode-decode.faq.3.question':
		'Funktioniert das mit sehr großen Dokumenten?',
	'tool.encode-html-entities-encode-decode.faq.3.answer':
		'Ja. Eingaben über 500 KB werden in einem Web Worker verarbeitet, damit die Oberfläche flüssig bleibt.',
	'tool.encode-html-entities-encode-decode.use_case.0':
		'Nutzerinhalte escapen, bevor sie in HTML-Templates eingefügt werden',
	'tool.encode-html-entities-encode-decode.use_case.1':
		'Entities aus exportiertem oder gescraptem HTML für lesbaren Klartext dekodieren',
	'tool.encode-html-entities-encode-decode.use_case.2':
		'Anführungszeichen, kaufmännisches Und und Symbole für CMS- oder E-Mail-Markup normalisieren',
	'tool.encode-html-entities-encode-decode.use_case.3':
		'Strikte Parserregeln bei HTML-Fragmenten oder Test-Fixtures prüfen',
	// ── HTML-Entities — UI-Texte ─────────────────────────────────────────────
	'ui.encode_html_entities.tab_label': 'Entities',
	'ui.encode_html_entities.action_label': 'Aktion',
	'ui.encode_html_entities.action.encode': 'Kodieren',
	'ui.encode_html_entities.action.decode': 'Dekodieren',
	'ui.encode_html_entities.format_label': 'Ausgabeformat',
	'ui.encode_html_entities.format.named': 'Benannt + numerischer Fallback',
	'ui.encode_html_entities.format.decimal': 'Dezimal numerisch',
	'ui.encode_html_entities.format.hex': 'Hex numerisch',
	'ui.encode_html_entities.scope_label': 'Kodierungsumfang',
	'ui.encode_html_entities.scope.essentials': 'Wesentliche Zeichen (& < > " \')',
	'ui.encode_html_entities.scope.all_non_ascii': 'Wesentliche + alle Nicht-ASCII-Zeichen',
	'ui.encode_html_entities.apostrophe_label': 'Apostroph (Benannt-Modus)',
	'ui.encode_html_entities.apostrophe.numeric': '&#39;',
	'ui.encode_html_entities.apostrophe.apos': '&apos;',
	'ui.encode_html_entities.option.encode_line_breaks': 'CR/LF als numerische Entities kodieren',
	'ui.encode_html_entities.option.encode_apostrophe': 'Apostroph (U+0027) kodieren',
	'ui.encode_html_entities.decode_mode_label': 'Dekodiermodus',
	'ui.encode_html_entities.decode.permissive': 'Nachsichtig',
	'ui.encode_html_entities.decode.strict': 'Strikt',
	'ui.encode_html_entities.decode.hint':
		'Strikt lehnt unbekannte oder fehlerhafte Referenzen ab. Nachsichtig lässt ungültige Fragmente unverändert.',
	'ui.encode_html_entities.input_label': 'Eingabe',
	'ui.encode_html_entities.output_label': 'Ausgabe',
	'ui.encode_html_entities.input_placeholder': 'Text oder HTML-Schnipsel mit Entities einfügen...',
	'ui.encode_html_entities.output_placeholder':
		'Kodierte oder dekodierte Ausgabe erscheint hier...',
	'ui.encode_html_entities.worker_active':
		'Große Eingabe erkannt (>{size}). Verarbeitung läuft in einem Web Worker.',
	'ui.encode_html_entities.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Es wird auf den Hauptthread zurückgefallen.',
	'ui.encode_html_entities.worker_badge': 'Worker',
	'ui.encode_html_entities.warning.no_changes':
		'Für die gewählten Optionen wurden keine Änderungen erkannt.',
	'ui.encode_html_entities.error.invalid_entity': '{detail} (Position {offset})',
	'ui.encode_html_entities.error.incomplete_reference': '{detail} (Position {offset})',
	'ui.encode_html_entities.button.swap_direction': 'Richtung wechseln',
	'ui.encode_html_entities.button.apply_output': 'Ausgabe als Eingabe übernehmen',
	'ui.encode_html_entities.toast.applied': 'Ausgabe wurde als Eingabe übernommen',
	'ui.encode_html_entities.characters': 'Zeichen',
	// ── Unicode-Inspektor — Tool ────────────────────────────────────────────
	'tool.encode-unicode-inspector.display_name': 'Unicode-Inspektor',
	'tool.encode-unicode-inspector.tagline':
		'Codepunkte, UTF-8-Bytes, Namen, Kategorie, Schrift und ostasiatische Breite prüfen',
	'tool.encode-unicode-inspector.description':
		'Fügen Sie beliebigen UTF-8-Text ein, um jedes Graphemcluster oder jeden Unicode-Skalärwert mit U+-Notation, UTF-8-Hex-Bytes, offiziellem Zeichennamen, General Category, Script und East Asian Width zu sehen. Große Eingaben laufen in einem Web Worker; alles bleibt im Browser.',
	'tool.encode-unicode-inspector.primary_keyword': 'unicode codepoint inspektor',
	'tool.encode-unicode-inspector.meta_title': 'Unicode-Inspektor — Codepoints & UTF-8 | fmtly.dev',
	'tool.encode-unicode-inspector.meta_description':
		'Unicode im Browser prüfen: U+-Codepunkte, UTF-8-Bytes, Namen, Kategorie, Schrift und ostasiatische Breite. Graphem- oder Skalärmodus; Worker für große Texte. Privat und schnell.',
	'tool.encode-unicode-inspector.operation': 'Unicode prüfen',
	'tool.encode-unicode-inspector.faq.0.question': 'Wird mein Text auf einen Server hochgeladen?',
	'tool.encode-unicode-inspector.faq.0.answer':
		'Nein. Die Analyse erfolgt vollständig in Ihrem Browser. Ihre Eingabe verlässt Ihr Gerät nicht.',
	'tool.encode-unicode-inspector.faq.1.question':
		'Was ist der Unterschied zwischen Graphem- und Skalärmodus?',
	'tool.encode-unicode-inspector.faq.1.answer':
		'Der Graphemmodus fasst nutzerwahrnehmbare Zeichen zusammen (Emoji mit Hauttönen, ZWJ-Sequenzen, kombinierende Zeichen), wenn Intl.Segmenter verfügbar ist. Im Skalärmodus wird jeder Unicode-Codepunkt einzeln aufgelistet.',
	'tool.encode-unicode-inspector.faq.2.question':
		'Warum wirken Namen oder Eigenschaften manchmal ungewohnt?',
	'tool.encode-unicode-inspector.faq.2.answer':
		'Namen und Eigenschaften folgen der Unicode Character Database. Nicht zugewiesene Codepunkte erscheinen als „unassigned“ oder ähnlich; manche Symbole nutzen normative Unicode-Namen.',
	'tool.encode-unicode-inspector.faq.3.question': 'Warum nutzt große Eingabe einen Web Worker?',
	'tool.encode-unicode-inspector.faq.3.answer':
		'Eingaben über 500 KB werden außerhalb des Hauptthreads verarbeitet, damit Tabelle, Scrollen und Steuerung flüssig bleiben, während Unicode-Tabellen abgefragt werden.',
	'tool.encode-unicode-inspector.use_case.0':
		'Unsichtbare Zeichen, falsche Kodierung oder gemischte Schriften in Logs und Nutzereingaben debuggen',
	'tool.encode-unicode-inspector.use_case.1':
		'UTF-8-Bytefolgen und Codepunkte für internationalisierte Dateinamen oder APIs prüfen',
	'tool.encode-unicode-inspector.use_case.2':
		'Unicode-Grundlagen vermitteln: Graphemcluster, kombinierende Zeichen und Emoji-Sequenzen',
	'tool.encode-unicode-inspector.use_case.3':
		'TSV-Tabelle mit Segmenten und Eigenschaften für Dokumentation oder Testdaten exportieren',
	// ── Unicode-Inspektor — UI ───────────────────────────────────────────────
	'ui.unicode_inspector.tab_label': 'Unicode',
	'ui.unicode_inspector.utf16_units': 'UTF-16-Einheiten',
	'ui.unicode_inspector.backend_load_error':
		'Unicode-Namentabellen konnten nicht geladen werden. Prüfen Sie die Verbindung und versuchen Sie es erneut.',
	'ui.unicode_inspector.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Es wird auf den Hauptthread zurückgefallen.',
	'ui.unicode_inspector.granularity_label': 'Segmentierung',
	'ui.unicode_inspector.granularity.grapheme': 'Graphemcluster',
	'ui.unicode_inspector.granularity.codepoint': 'Unicode-Skalärwerte',
	'ui.unicode_inspector.granularity_hint':
		'Der Graphemmodus nutzt Intl.Segmenter, falls verfügbar (Emoji-ZWJ-Sequenzen, kombinierende Zeichen). Andernfalls wird jeder Skalär einzeln gezeigt.',
	'ui.unicode_inspector.max_scalars_label': 'Zeilenlimit (Skaläre)',
	'ui.unicode_inspector.worker_active':
		'Große Eingabe (>{size}). Die Inspektion läuft in einem Web Worker.',
	'ui.unicode_inspector.copy_tsv': 'TSV kopieren',
	'ui.unicode_inspector.input_label': 'Eingabe',
	'ui.unicode_inspector.input_placeholder':
		'Beliebigen UTF-8-Text einfügen, um Codepunkte zu prüfen…',
	'ui.unicode_inspector.results_label': 'Analyse',
	'ui.unicode_inspector.loading_backend': 'Unicode-Daten werden geladen…',
	'ui.unicode_inspector.worker_badge': 'Worker',
	'ui.unicode_inspector.summary':
		'{clusters} Cluster · {scalars} Skaläre · {bytes} Bytes UTF-8 · {ms} ms',
	'ui.unicode_inspector.truncated':
		'Ausgabe gekürzt; {omitted} weitere Skaläre nicht angezeigt. Limit erhöhen oder Eingabe kürzen.',
	'ui.unicode_inspector.col.segment': 'Segment',
	'ui.unicode_inspector.col.codepoint': 'U+',
	'ui.unicode_inspector.col.glyph': 'Glyph',
	'ui.unicode_inspector.col.utf8': 'UTF-8',
	'ui.unicode_inspector.col.category': 'Kat.',
	'ui.unicode_inspector.col.script': 'Schrift',
	'ui.unicode_inspector.col.eaw': 'EaW',
	'ui.unicode_inspector.col.name': 'Name',
	'ui.unicode_inspector.table_region': 'Tabelle Unicode-Skaläre',
	'ui.unicode_inspector.empty_hint':
		'Text eingeben oder einfügen, um Codepunkte und Namen zu sehen.',
	'ui.unicode_inspector.gc.Lu': 'Buchstabe, Großbuchstabe',
	'ui.unicode_inspector.gc.Ll': 'Buchstabe, Kleinbuchstabe',
	'ui.unicode_inspector.gc.Lt': 'Buchstabe, Titelschriftzeichen',
	'ui.unicode_inspector.gc.Lm': 'Buchstabe, Modifikator',
	'ui.unicode_inspector.gc.Lo': 'Buchstabe, sonstiges',
	'ui.unicode_inspector.gc.Mn': 'Markierung, nicht spacing',
	'ui.unicode_inspector.gc.Mc': 'Markierung, spacing-kombinierend',
	'ui.unicode_inspector.gc.Me': 'Markierung, umschließend',
	'ui.unicode_inspector.gc.Nd': 'Zahl, Dezimalziffer',
	'ui.unicode_inspector.gc.Nl': 'Zahl, Buchstabe',
	'ui.unicode_inspector.gc.No': 'Zahl, sonstiges',
	'ui.unicode_inspector.gc.Pc': 'Interpunktion, Verbinder',
	'ui.unicode_inspector.gc.Pd': 'Interpunktion, Strich',
	'ui.unicode_inspector.gc.Ps': 'Interpunktion, öffnend',
	'ui.unicode_inspector.gc.Pe': 'Interpunktion, schließend',
	'ui.unicode_inspector.gc.Pi': 'Interpunktion, öffnendes Anführungszeichen',
	'ui.unicode_inspector.gc.Pf': 'Interpunktion, schließendes Anführungszeichen',
	'ui.unicode_inspector.gc.Po': 'Interpunktion, sonstiges',
	'ui.unicode_inspector.gc.Sm': 'Symbol, Mathematik',
	'ui.unicode_inspector.gc.Sc': 'Symbol, Währung',
	'ui.unicode_inspector.gc.Sk': 'Symbol, Modifikator',
	'ui.unicode_inspector.gc.So': 'Symbol, sonstiges',
	'ui.unicode_inspector.gc.Zs': 'Trennzeichen, Leerzeichen',
	'ui.unicode_inspector.gc.Zl': 'Trennzeichen, Zeile',
	'ui.unicode_inspector.gc.Zp': 'Trennzeichen, Absatz',
	'ui.unicode_inspector.gc.Cc': 'Sonstiges, Steuerzeichen',
	'ui.unicode_inspector.gc.Cf': 'Sonstiges, Format',
	'ui.unicode_inspector.gc.Cs': 'Sonstiges, Surrogat',
	'ui.unicode_inspector.gc.Co': 'Sonstiges, Private Use',
	'ui.unicode_inspector.gc.Cn': 'Sonstiges, nicht zugewiesen',
	// ── Hex ↔ Text — Tool ───────────────────────────────────────────────────
	'tool.encode-hex-encode-decode.display_name': 'Hex ↔ ASCII / UTF-8',
	'tool.encode-hex-encode-decode.tagline':
		'UTF-8-Text in Hex-Bytes umwandeln oder Hex-Dumps zurücklesen',
	'tool.encode-hex-encode-decode.description':
		'Kodieren Sie beliebige UTF-8-Strings als Hexadezimal-Bytepaare mit wählbarer Schreibweise, Trennzeichen und Zeilenumbrüchen. Dekodieren Sie tolerantes Hex (Leerzeichen, Kommas, 0x-Präfixe) zurück in Text mit strikter UTF-8-Validierung. Große Eingaben laufen in einem Web Worker; alles bleibt im Browser.',
	'tool.encode-hex-encode-decode.primary_keyword': 'hex zu text utf-8',
	'tool.encode-hex-encode-decode.meta_title': 'Hex ↔ Text — UTF-8 & ASCII | fmtly.dev',
	'tool.encode-hex-encode-decode.meta_description':
		'Hex in UTF-8-Text oder Text in Hex im Browser wandeln. Trennzeichen, Schreibweise, Zeilenumbruch, 0x-Präfixe und Worker-Unterstützung. Privat und schnell.',
	'tool.encode-hex-encode-decode.operation': 'Hex kodieren / dekodieren',
	'tool.encode-hex-encode-decode.faq.0.question': 'Werden meine Daten an einen Server gesendet?',
	'tool.encode-hex-encode-decode.faq.0.answer':
		'Nein. Die Umwandlung erfolgt vollständig in Ihrem Browser. Text und Hex verlassen Ihr Gerät nicht.',
	'tool.encode-hex-encode-decode.faq.1.question': 'Welche Kodierung verwendet das Tool?',
	'tool.encode-hex-encode-decode.faq.1.answer':
		'Text wird in beiden Richtungen als UTF-8 interpretiert. ASCII ist eine Teilmenge von UTF-8; einfaches Englisch verhält sich gleich.',
	'tool.encode-hex-encode-decode.faq.2.question':
		'Warum schlägt Dekodieren mit „ungültiges UTF-8“ fehl?',
	'tool.encode-hex-encode-decode.faq.2.answer':
		'Die dekodierten Bytes müssen gültiges UTF-8 ergeben. Zufälliges Binär-Hex oder Legacy-Kodierungen lassen sich nicht als Text darstellen — nutzen Sie passende Werkzeuge oder Kodierungen.',
	'tool.encode-hex-encode-decode.faq.3.question': 'Warum ein Web Worker bei großen Eingaben?',
	'tool.encode-hex-encode-decode.faq.3.answer':
		'Eingaben über 500 KB werden außerhalb des Hauptthreads verarbeitet, damit Eingabe, Scrollen und Steuerung flüssig bleiben.',
	'tool.encode-hex-encode-decode.use_case.0':
		'Hex aus Logs oder Mitschnitten in lesbare UTF-8-Schnipsel zurückverwandeln',
	'tool.encode-hex-encode-decode.use_case.1':
		'Formatierte Hex-Dumps von Strings für Doku, Tests oder eingebettete Konstanten erzeugen',
	'tool.encode-hex-encode-decode.use_case.2':
		'Prüfen, wie Emoji und nicht-lateinische Zeichen als UTF-8-Bytes aussehen',
	'tool.encode-hex-encode-decode.use_case.3':
		'Schnell zwischen Hex und Text wechseln beim Debuggen von APIs, Tokens oder Nutzdaten',
	// ── Hex ↔ Text — UI ─────────────────────────────────────────────────────
	'ui.hex.tab_label': 'Hex',
	'ui.hex.action_label': 'Aktion',
	'ui.hex.action.encode': 'Text → Hex',
	'ui.hex.action.decode': 'Hex → Text',
	'ui.hex.hex_case_label': 'Hex-Schreibweise',
	'ui.hex.hex_case.upper': 'Großbuchstaben',
	'ui.hex.hex_case.lower': 'Kleinbuchstaben',
	'ui.hex.delimiter_label': 'Byte-Trenner',
	'ui.hex.delimiter.space': 'Leerzeichen',
	'ui.hex.delimiter.none': 'Keiner',
	'ui.hex.delimiter.comma': 'Komma',
	'ui.hex.bytes_per_line_label': 'Bytes pro Zeile',
	'ui.hex.bytes_per_line.off': 'Kein Umbruch',
	'ui.hex.bytes_per_line.n': '{n} Bytes',
	'ui.hex.decode_options_label': 'Dekodier-Optionen',
	'ui.hex.option.ignore_whitespace': 'Leerzeichen und Zeilenumbrüche ignorieren',
	'ui.hex.option.ignore_commas': 'Komma-Trenner ignorieren',
	'ui.hex.option.allow_0x': '0x-Präfix vor jedem Byte erlauben',
	'ui.hex.worker_active':
		'Große Eingabe erkannt (>{size}). Die Verarbeitung läuft in einem Web Worker.',
	'ui.hex.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Es wird auf den Hauptthread zurückgefallen.',
	'ui.hex.worker_badge': 'Worker',
	'ui.hex.button.swap_direction': 'Richtung wechseln',
	'ui.hex.button.apply_output': 'Ausgabe als Eingabe übernehmen',
	'ui.hex.input_label': 'Eingabe',
	'ui.hex.output_label': 'Ausgabe',
	'ui.hex.input_placeholder': 'Klartext zum Kodieren oder Hex-Ziffern zum Dekodieren nach UTF-8…',
	'ui.hex.output_placeholder': 'Hex-Ausgabe oder dekodierter UTF-8-Text erscheint hier…',
	'ui.hex.characters': 'Zeichen',
	'ui.hex.toast.applied': 'Ausgabe wurde als Eingabe übernommen',
	'ui.hex.warning.whitespace_skipped':
		'Leerzeichen wurden beim Einlesen der Hex-Ziffern übersprungen.',
	'ui.hex.warning.commas_skipped': 'Komma-Trenner wurden beim Einlesen übersprungen.',
	'ui.hex.error.invalid_hex_digit':
		'Ungültiges Zeichen in der Hex-Eingabe (bei Spalte {position}).',
	'ui.hex.error.odd_hex_length': 'Ungerade Anzahl Hex-Ziffern ({count}). Bytes erfordern Paare.',
	'ui.hex.error.invalid_utf8': 'Dekodierte Bytes sind kein gültiges UTF-8 ({bytes} Bytes).',
	// ── ROT13 / Caesar — Tool ─────────────────────────────────────────────────
	'tool.encode-rot13-caesar-cipher.display_name': 'ROT13 / Caesar-Chiffre',
	'tool.encode-rot13-caesar-cipher.tagline':
		'ROT13 für Spoiler oder Caesar-Verschiebung von A–Z und a–z mit Ver- und Entschlüsselung',
	'tool.encode-rot13-caesar-cipher.description':
		'Wenden Sie klassisches ROT13 (13 Plätze, selbstinvers) oder eine Caesar-Chiffre mit Verschiebung 1–25 an. Für Caesar zwischen Verschlüsseln und Entschlüsseln wählen, Presets oder Schieberegler nutzen; Ziffern, Satzzeichen und Unicode außerhalb des lateinischen Grundalphabets bleiben unverändert. Große Eingaben laufen in einem Web Worker; alles bleibt im Browser.',
	'tool.encode-rot13-caesar-cipher.primary_keyword': 'rot13 caesar online',
	'tool.encode-rot13-caesar-cipher.meta_title': 'ROT13 & Caesar-Chiffre — fmtly.dev',
	'tool.encode-rot13-caesar-cipher.meta_description':
		'ROT13 und Caesar im Browser: ver- und entschlüsseln, Presets 1–25, Worker für große Texte. Nur Buchstaben; privat und schnell.',
	'tool.encode-rot13-caesar-cipher.operation': 'ROT13 / Caesar',
	'tool.encode-rot13-caesar-cipher.faq.0.question': 'Wird mein Text irgendwo hochgeladen?',
	'tool.encode-rot13-caesar-cipher.faq.0.answer':
		'Nein. Die Umwandlung erfolgt vollständig in Ihrem Browser. Ihr Text verlässt Ihr Gerät nicht.',
	'tool.encode-rot13-caesar-cipher.faq.1.question': 'Welche Zeichen werden verändert?',
	'tool.encode-rot13-caesar-cipher.faq.1.answer':
		'Nur lateinische Grundbuchstaben A–Z und a–z werden verschoben. Leerzeichen, Ziffern, Satzzeichen, diakritische Buchstaben, Emoji und übriges Unicode bleiben gleich.',
	'tool.encode-rot13-caesar-cipher.faq.2.question': 'Ist das echte Verschlüsselung?',
	'tool.encode-rot13-caesar-cipher.faq.2.answer':
		'Nein. ROT13 und Caesar sind Verschleierung zu Demonstrations- oder Spoilerzwecken — trivial zu brechen und ungeeignet für Geheimnisse.',
	'tool.encode-rot13-caesar-cipher.faq.3.question': 'Warum ein Web Worker bei großen Eingaben?',
	'tool.encode-rot13-caesar-cipher.faq.3.answer':
		'Eingaben über 500 KB werden außerhalb des Hauptthreads verarbeitet, damit die Eingabe flüssig bleibt.',
	'tool.encode-rot13-caesar-cipher.use_case.0':
		'Spoiler in Foren und Chats mit umkehrbarem ROT13 verstecken',
	'tool.encode-rot13-caesar-cipher.use_case.1':
		'Klassische Substitutionschiffren und Modulo-Arithmetik am Alphabet vermitteln',
	'tool.encode-rot13-caesar-cipher.use_case.2':
		'Mehrere Caesar-Verschiebungen bei CTF- oder Rätselaufgaben schnell testen',
	'tool.encode-rot13-caesar-cipher.use_case.3':
		'ROT13-kodierte Inhalte aus APIs oder Logs wieder lesbar machen',
	// ── ROT13 / Caesar — UI ───────────────────────────────────────────────────
	'ui.rot13.tab_label': 'ROT13',
	'ui.rot13.mode_label': 'Chiffre',
	'ui.rot13.mode.rot13': 'ROT13',
	'ui.rot13.mode.caesar': 'Caesar',
	'ui.rot13.rot13_hint':
		'ROT13 verschiebt A–Z und a–z um 13 Stellen. Zweimal anwenden ergibt wieder den Originaltext.',
	'ui.rot13.direction_label': 'Richtung',
	'ui.rot13.direction.encrypt': 'Verschlüsseln (vorwärts)',
	'ui.rot13.direction.decrypt': 'Entschlüsseln (rückwärts)',
	'ui.rot13.shift_label': 'Verschiebung (1–25)',
	'ui.rot13.presets_label': 'Voreinstellungen',
	'ui.rot13.caesar_scope_hint':
		'Nur lateinische Grundbuchstaben A–Z und a–z werden verschoben; Ziffern, Satzzeichen, Leerzeichen und übriges Unicode bleiben unverändert.',
	'ui.rot13.worker_active':
		'Große Eingabe erkannt (>{size}). Die Verarbeitung läuft in einem Web Worker.',
	'ui.rot13.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Es wird auf den Hauptthread zurückgefallen.',
	'ui.rot13.worker_badge': 'Worker',
	'ui.rot13.button.apply_output': 'Ausgabe als Eingabe übernehmen',
	'ui.rot13.input_label': 'Eingabe',
	'ui.rot13.output_label': 'Ausgabe',
	'ui.rot13.input_placeholder': 'Text zum Transformieren eingeben oder einfügen…',
	'ui.rot13.output_placeholder': 'Der transformierte Text erscheint hier…',
	'ui.rot13.characters': 'Zeichen',
	'ui.rot13.toast.applied': 'Ausgabe wurde als Eingabe übernommen',
	// ── Punycode / IDN tool ───────────────────────────────────────────────────
	'tool.encode-punycode-encode-decode.display_name': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.tagline':
		'Internationalisierte Domainnamen und E-Mails zwischen Unicode und ASCII (xn--) konvertieren',
	'tool.encode-punycode-encode-decode.description':
		'Wandle Domainnamen und E-Mail-Adressen mit Nicht-ASCII-Labels in Punycode (ASCII mit xn--Präfix) und zurück um. Mehrere Labels und lokale Teile vor @ bleiben erhalten. Die Verarbeitung erfolgt im Browser; große Eingaben laufen in einem Web Worker.',
	'tool.encode-punycode-encode-decode.primary_keyword': 'punycode idn online konvertieren',
	'tool.encode-punycode-encode-decode.meta_title':
		'Punycode & IDN — Kodieren / Dekodieren — fmtly.dev',
	'tool.encode-punycode-encode-decode.meta_description':
		'Unicode-Domains und E-Mails in Punycode (xn--) wandeln und zurückdekodieren. Schnell, privat, nur im Browser; Worker für große Texte.',
	'tool.encode-punycode-encode-decode.operation': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.faq.0.question':
		'Werden meine Domains oder E-Mails hochgeladen?',
	'tool.encode-punycode-encode-decode.faq.0.answer':
		'Nein. Die Konvertierung läuft vollständig in Ihrem Browser mit der Punycode-Bibliothek. Ihre Zeichenketten verlassen das Gerät nicht.',
	'tool.encode-punycode-encode-decode.faq.1.question': 'Was macht „Kodieren“ hier?',
	'tool.encode-punycode-encode-decode.faq.1.answer':
		'Kodieren entspricht IDNA toASCII: Labels mit Nicht-ASCII werden als ASCII mit xn--Präfix dargestellt. Reine ASCII-Labels bleiben unverändert.',
	'tool.encode-punycode-encode-decode.faq.2.question': 'Prüft das echte DNS-Registrierungsregeln?',
	'tool.encode-punycode-encode-decode.faq.2.answer':
		'Es wendet Punycode-Konvertierung nach RFC 3492 / 5891 an. Vollständige UTS-#46-Registrierungsprüfungen sind nicht enthalten — dafür Registrar oder spezialisierte Bibliotheken nutzen.',
	'tool.encode-punycode-encode-decode.faq.3.question': 'Warum ein Web Worker bei großen Eingaben?',
	'tool.encode-punycode-encode-decode.faq.3.answer':
		'Eingaben über 500 KB werden außerhalb des Hauptthreads verarbeitet, damit Eingabe und UI flüssig bleiben.',
	'tool.encode-punycode-encode-decode.use_case.0':
		'Vorschau, wie ein Unicode-Hostname oder E-Mail-Domain in DNS (xn--) aussieht',
	'tool.encode-punycode-encode-decode.use_case.1':
		'xn--Hostnamen aus Logs, Zertifikaten oder DevTools zurück in lesbares Unicode dekodieren',
	'tool.encode-punycode-encode-decode.use_case.2':
		'IDN-Beispiele in Dokumentation, Folien oder Tickets stapelweise konvertieren',
	'tool.encode-punycode-encode-decode.use_case.3':
		'Fehlersuche bei URLs und E-Mails mit gemischten ASCII- und internationalisierten Labels',
	// ── Punycode / IDN UI ─────────────────────────────────────────────────────
	'ui.punycode.tab_label': 'Punycode',
	'ui.punycode.action_label': 'Aktion',
	'ui.punycode.action.encode': 'Unicode → ASCII (IDN)',
	'ui.punycode.action.decode': 'ASCII → Unicode',
	'ui.punycode.hint':
		'Internationalisierte Domainnamen und E-Mails: Unicode-Labels werden zu ASCII mit xn--; Dekodieren macht das rückgängig.',
	'ui.punycode.loading_library': 'Punycode wird geladen…',
	'ui.punycode.library_load_failed': 'Punycode-Bibliothek konnte nicht geladen werden.',
	'ui.punycode.worker_active': 'Große Eingabe (>{size}). Verarbeitung im Web Worker.',
	'ui.punycode.worker_failed': 'Worker fehlgeschlagen. Es wird auf den Hauptthread zurückgefallen.',
	'ui.punycode.worker_badge': 'Worker',
	'ui.punycode.button.swap_direction': 'Richtung tauschen',
	'ui.punycode.button.apply_output': 'Ausgabe als Eingabe übernehmen',
	'ui.punycode.input_label': 'Eingabe',
	'ui.punycode.output_label': 'Ausgabe',
	'ui.punycode.input_placeholder': 'Domain oder E-Mail mit Unicode-Labels oder ASCII mit xn--…',
	'ui.punycode.output_placeholder': 'ASCII-IDN oder dekodiertes Unicode erscheint hier…',
	'ui.punycode.characters': 'Zeichen',
	'ui.punycode.toast.applied': 'Ausgabe wurde als Eingabe übernommen',
	'ui.punycode.error.invalid_punycode':
		'Ungültiger Punycode oder Domaineingabe. Labels und xn--Präfixe prüfen.',
	'ui.punycode.error.processing': 'Konvertierung fehlgeschlagen: {detail}',
	// ── URL Kodieren / Dekodieren — UI-Texte ─────────────────────────────────
	'ui.encode_url.tab_label': 'URL',
	'ui.encode_url.action_label': 'Aktion',
	'ui.encode_url.action.encode': 'Kodieren',
	'ui.encode_url.action.decode': 'Dekodieren',
	'ui.encode_url.mode_label': 'Modus',
	'ui.encode_url.mode.component': 'URL-Komponente',
	'ui.encode_url.mode.full_url': 'Vollständige URL',
	'ui.encode_url.input_label': 'Eingabe',
	'ui.encode_url.output_label': 'Ausgabe',
	'ui.encode_url.input_placeholder': 'Text, Query-Parameter oder vollständige URL einfügen...',
	'ui.encode_url.output_placeholder': 'Kodierte oder dekodierte Ausgabe erscheint hier...',
	'ui.encode_url.option.encode_spaces_as_plus': 'Leerzeichen als + kodieren',
	'ui.encode_url.option.decode_plus_as_space': '+ als Leerzeichen dekodieren',
	'ui.encode_url.worker_active':
		'Große Eingabe erkannt (>{size}). Die Verarbeitung läuft in einem Web Worker.',
	'ui.encode_url.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Es wird auf den Hauptthread zurückgefallen.',
	'ui.encode_url.worker_badge': 'Worker',
	'ui.encode_url.warning.no_changes':
		'Für den gewählten Modus und die Aktion wurden keine Änderungen erkannt.',
	'ui.encode_url.error.invalid_url_encoding': 'Ungültige URL-Eingabe: {detail}',
	'ui.encode_url.button.swap_direction': 'Richtung wechseln',
	'ui.encode_url.button.apply_output': 'Ausgabe als Eingabe übernehmen',
	'ui.encode_url.toast.applied': 'Ausgabe wurde als Eingabe übernommen',
	'ui.encode_url.characters': 'Zeichen',
	'category.qr.display_name': 'QR',
	'category.qr.description':
		'QR-Codes direkt im Browser erzeugen – mit SVG/PNG-Export, Logo-Overlay, Farbanpassung und scanfreundlichen Fehlerkorrektur-Stufen.',
	'category.qr.primary_keyword': 'qr code tools',
	'tool.qr-code-generator.display_name': 'QR-Code-Generator',
	'tool.qr-code-generator.tagline':
		'Markenfähige QR-Codes mit Live-Vorschau, SVG/PNG-Export, Farben, Rand und Logo-Overlay erzeugen',
	'tool.qr-code-generator.description':
		'Erzeuge scanfreundliche QR-Codes direkt im Browser. Passe Größe, Ruhezone, Farben, transparenten Hintergrund, Fehlerkorrektur und zentrierte Logo-Overlays an und exportiere anschließend produktionsreife SVG- oder PNG-Dateien, ohne Daten an einen Server zu senden.',
	'tool.qr-code-generator.primary_keyword': 'qr code generator',
	'tool.qr-code-generator.meta_title':
		'QR-Code-Generator — SVG, PNG, Farben & Logo-Overlay | fmtly.dev',
	'tool.qr-code-generator.meta_description':
		'QR-Codes online mit Live-Vorschau, SVG- und PNG-Export, benutzerdefinierten Farben, Ruhezone, transparentem Hintergrund und Logo-Overlay erzeugen. Browser-only und privat.',
	'tool.qr-code-generator.operation': 'QR-Code erzeugen',
	'tool.qr-code-generator.faq.0.question': 'Wird mein QR-Inhalt an einen Server hochgeladen?',
	'tool.qr-code-generator.faq.0.answer':
		'Nein. Die QR-Erzeugung findet vollständig im Browser statt. Text, URL, WLAN-Payload oder sonstige Inhalte bleiben auf deinem Gerät.',
	'tool.qr-code-generator.faq.1.question': 'Welche Exportformate werden unterstützt?',
	'tool.qr-code-generator.faq.1.answer':
		'Das Tool exportiert sowohl SVG als auch PNG. SVG eignet sich ideal für Druck, Design-Systeme und verlustfreies Skalieren, während PNG praktisch für schnelles Teilen und Social-Grafiken ist.',
	'tool.qr-code-generator.faq.2.question': 'Worauf wirkt sich die Fehlerkorrektur aus?',
	'tool.qr-code-generator.faq.2.answer':
		'Eine höhere Fehlerkorrektur macht den QR-Code widerstandsfähiger gegen Beschädigungen, Kompression und zentrierte Logos, reduziert aber die Datenmenge, die in einen einzelnen Code passt.',
	'tool.qr-code-generator.faq.3.question': 'Warum kann sehr langer Text nicht erzeugt werden?',
	'tool.qr-code-generator.faq.3.answer':
		'Ein QR-Code hat eine begrenzte Datenkapazität. Ist der Inhalt für die gewählte Fehlerkorrekturstufe zu groß, kürze den Payload oder verwende eine kürzere Redirect-URL.',
	'tool.qr-code-generator.use_case.0':
		'QR-Codes für Landingpages, App-Installationen oder Kampagnen-URLs erzeugen',
	'tool.qr-code-generator.use_case.1':
		'Gebrandete QR-Codes mit zentriertem Logo für Poster, Verpackungen und Print erzeugen',
	'tool.qr-code-generator.use_case.2':
		'Scharfe SVG-QR-Assets für Figma, Design-Systeme oder Entwicklerdokumentation exportieren',
	'tool.qr-code-generator.use_case.3':
		'Testen, wie Rand, Farben und Fehlerkorrektur die Scan-Zuverlässigkeit vor der Veröffentlichung beeinflussen',
	'tool.qr-code-reader.display_name': 'QR-Code-Leser',
	'tool.qr-code-reader.tagline':
		'QR-Codes aus Bildern im Browser scannen – schnell, mit Zwischenablage und optional im Web Worker',
	'tool.qr-code-reader.description':
		'Lade PNG, JPG oder WebP hoch oder füge einen Screenshot ein, um QR-Inhalte sofort auszulesen. Die Dekodierung erfolgt lokal; große Bilder können optional per Web Worker verarbeitet werden – ohne Upload, ohne Konto.',
	'tool.qr-code-reader.primary_keyword': 'qr code online lesen',
	'tool.qr-code-reader.meta_title': 'QR-Code-Leser — Bilder scannen & Screenshots einfügen | fmtly',
	'tool.qr-code-reader.meta_description':
		'QR-Codes aus Bildern im Browser lesen. Drag-and-drop, Kamera, Zwischenablage und Web-Worker-Dekodierung für große Fotos. Privat und ohne Server.',
	'tool.qr-code-reader.operation': 'QR-Code lesen',
	'tool.qr-code-reader.faq.0.question': 'Werden meine Bilder auf einen Server hochgeladen?',
	'tool.qr-code-reader.faq.0.answer':
		'Nein. Bilder werden vollständig in deinem Browser mit JavaScript und bei Bedarf mit Web Workern verarbeitet.',
	'tool.qr-code-reader.faq.1.question': 'Welche Bildformate funktionieren am besten?',
	'tool.qr-code-reader.faq.1.answer':
		'PNG und JPG sind am zuverlässigsten. WebP und GIF funktionieren ebenfalls. Sehr kleine oder stark komprimierte Bilder können schwerer zu dekodieren sein.',
	'tool.qr-code-reader.faq.2.question': 'Wozu ein Web Worker?',
	'tool.qr-code-reader.faq.2.answer':
		'Große Fotos erzeugen große Pixelpuffer. Die Auslagerung der Dekodierung hält Scrollen und Eingaben flüssig, während der Scan läuft.',
	'tool.qr-code-reader.faq.3.question': 'Kann ich einen QR-Code aus einem Screenshot scannen?',
	'tool.qr-code-reader.faq.3.answer':
		'Ja. Kopiere ein Bild in die Zwischenablage und füge es auf dieser Seite ein, oder speichere den Screenshot und lade ihn hoch.',
	'tool.qr-code-reader.use_case.0':
		'WLAN-QR-Aufkleber, Event-Links oder App-Deep-Links aus einem Foto auslesen',
	'tool.qr-code-reader.use_case.1':
		'Marketing-QR-Grafiken vor dem Druck testen, indem die extrahierte URL geprüft wird',
	'tool.qr-code-reader.use_case.2':
		'Einen QR-Code aus einem Screenshot dekodieren, ohne eine App zu installieren',
	'tool.qr-code-reader.use_case.3':
		'Klartext- oder vCard-Inhalte aus Konferenz-Badge-Fotos wiederherstellen',
	'tool.barcode-generator.display_name': 'Strichcode-Generator',
	'tool.barcode-generator.tagline':
		'Code 128, EAN-13, UPC-A, ITF-14 und mehr als scharfe SVG- oder PNG-Grafiken — optimiert für Druck und Scanner',
	'tool.barcode-generator.description':
		'Erzeuge professionelle 1D-Strichcodes direkt im Browser mit Live-Vorschau. Wähle die Symbologie, passe Balkenbreite, Höhe, Ruhezone und Farben an und exportiere SVG oder PNG. Sehr große Nutzdaten können in einem Web Worker gerendert werden — die Oberfläche bleibt flüssig, nichts verlässt dein Gerät.',
	'tool.barcode-generator.primary_keyword': 'strichcode generator online',
	'tool.barcode-generator.meta_title': 'Strichcode-Generator — Code 128, EAN-13, UPC | fmtly',
	'tool.barcode-generator.meta_description':
		'Kostenloser Browser-Strichcode für Code 128, EAN-13, UPC-A, ITF-14, Codabar, MSI, Pharmacode und mehr. Farben, Ruhezone, SVG- und PNG-Export. Privater Web-Worker-Modus für sehr große Nutzdaten.',
	'tool.barcode-generator.operation': 'Strichcode erzeugen',
	'tool.barcode-generator.faq.0.question':
		'Werden meine Strichcode-Daten an einen Server gesendet?',
	'tool.barcode-generator.faq.0.answer':
		'Nein. Die Darstellung erfolgt mit JavaScript in deinem Browser. Sehr große Eingaben können in einem Web Worker auf deinem Gerät verarbeitet werden.',
	'tool.barcode-generator.faq.1.question': 'Welche Symbologie nutze ich für Retail-Artikel?',
	'tool.barcode-generator.faq.1.answer':
		'Für die Kasse eignen sich EAN-13 oder UPC-A. Für Karton-Logistik oft ITF-14. Code 128 ist flexibel für alphanumerische Daten.',
	'tool.barcode-generator.faq.2.question': 'Warum SVG-Export?',
	'tool.barcode-generator.faq.2.answer':
		'SVG bleibt in jeder Druckgröße scharf und eignet sich für Verpackung, Layout und Web. PNG ist praktisch für schnelle Raster-Vorschauen.',
	'tool.barcode-generator.faq.3.question': 'Wann wird ein Web Worker verwendet?',
	'tool.barcode-generator.faq.3.answer':
		'Wenn die Nutzlast etwa 500 KB UTF-8-Text überschreitet, läuft die Erzeugung in einem Web Worker, damit die Seite reaktionsfähig bleibt.',
	'tool.barcode-generator.use_case.0':
		'ITF-14- und Code-128-Symbole für Lageretiketten und Versandkartons erzeugen',
	'tool.barcode-generator.use_case.1':
		'EAN-13- oder UPC-A-Grafiken für Verpackungsmockups vor dem Druck erstellen',
	'tool.barcode-generator.use_case.2':
		'Vektor-SVG-Strichcodes für Brand Guidelines, Folien oder Dokumentation exportieren',
	'tool.barcode-generator.use_case.3':
		'Codabar- oder MSI-Symbole für Altsysteme und interne Tools erstellen',
	'category.crypto.display_name': 'Krypto',
	'category.crypto.description':
		'Hashing, HMAC, Datei-Prüfsummen, Passwort-Checks, UUIDs/ULIDs, RSA/EC-Schlüssel, X.509-Inspektion, TOTP und Zufallszeichen — alles im Browser.',
	'category.crypto.primary_keyword': 'Krypto-Tools im Browser',
	'tool.random-string-generator.display_name': 'Zufallszeichengenerator',
	'tool.random-string-generator.tagline':
		'Sichere Zufallszeichenketten mit Presets, benutzerdefinierten Alphabeten, Trennzeichen und Web-Worker-Auslagerung',
	'tool.random-string-generator.description':
		'Erzeuge Zufallszeichenketten für Passwörter, Tokens, IDs und Testdaten mit Web Crypto getRandomValues—ohne Upload, ohne Server. Wähle alphanumerisch, Hex, numerisch, Base64 URL-sicher oder ein eigenes Alphabet; schließe verwechselbare Zeichen aus; steuere Länge, Anzahl und Trenner; große Aufgaben laufen in einem Web Worker.',
	'tool.random-string-generator.primary_keyword': 'Zufallszeichengenerator',
	'tool.random-string-generator.meta_title': 'Zufallszeichengenerator — Sicher im Browser | fmtly',
	'tool.random-string-generator.meta_description':
		'Starke Zufallszeichenketten im Browser erzeugen. Presets, eigenes Alphabet, Stapel-Ausgabe, Modus ohne verwechselbare Zeichen und Web-Worker. Privat und sofort.',
	'tool.random-string-generator.operation': 'Zufallszeichenketten erzeugen',
	'tool.random-string-generator.faq.0.question':
		'Eignet sich das für Passwörter und API-Schlüssel?',
	'tool.random-string-generator.faq.0.answer':
		'Die Zeichenketten nutzen crypto.getRandomValues mit unverzerrter Stichprobe aus Ihrem Alphabet. Für Passwörter: lieber lange Länge, großes Alphabet und eigene Geheimnisverwaltung.',
	'tool.random-string-generator.faq.1.question': 'Warum wird manchmal ein Web Worker genutzt?',
	'tool.random-string-generator.faq.1.answer':
		'Sehr große Ausgaben oder riesige benutzerdefinierte Alphabete können die UI blockieren. Die Arbeit wird über einer Größenschwelle ausgelagert, damit die Seite reaktionsfähig bleibt.',
	'tool.random-string-generator.faq.2.question':
		'Was bedeutet „verwechselbare Zeichen ausschließen“?',
	'tool.random-string-generator.faq.2.answer':
		'Zeichen, die leicht verwechselt werden (z. B. 0/O, 1/l), werden aus Presets entfernt – hilfreich beim manuellen Abschreiben.',
	'tool.random-string-generator.faq.3.question': 'Werden Daten an einen Server gesendet?',
	'tool.random-string-generator.faq.3.answer':
		'Nein. Die Erzeugung läuft vollständig in Ihrem Browser. Nichts wird hochgeladen oder von fmtly protokolliert.',
	'tool.random-string-generator.use_case.0':
		'Passwort-Reset-Tokens, Einladungscodes und Einmal-Geheimnisse lokal erzeugen',
	'tool.random-string-generator.use_case.1':
		'Testdaten mit kontrollierter Länge, Zeichensatz und mehrzeiliger Stapel-Ausgabe',
	'tool.random-string-generator.use_case.2':
		'URL-sichere Base64-Alphabet-Strings für Kennungen und undurchsichtige IDs',
	'tool.random-string-generator.use_case.3':
		'Benutzerdefinierte Alphabete für Simulationen, Spiele und eingeschränkte Systeme',
	'tool.hash-generator.display_name': 'Hash-Generator',
	'tool.hash-generator.tagline':
		'MD5- und SHA-Familien-Hashes für beliebigen UTF-8-Text — privat und sofort',
	'tool.hash-generator.description':
		'Berechnet MD5-, SHA-1-, SHA-256-, SHA-384- und SHA-512-Hashes eingefügter Texte mit Web Crypto (und geprüftem MD5). Große Eingaben werden in einen Web Worker ausgelagert, damit die Oberfläche flüssig bleibt.',
	'tool.hash-generator.primary_keyword': 'online hash generator md5 sha256',
	'tool.hash-generator.meta_title': 'Hash-Generator — MD5 & SHA im Browser | fmtly',
	'tool.hash-generator.meta_description':
		'MD5-, SHA-1-, SHA-256-, SHA-384- und SHA-512-Hashes lokal erzeugen. Keine Uploads. Web-Worker-Unterstützung für große Texte.',
	'tool.hash-generator.operation': 'Text hashen',
	'tool.hash-generator.faq.0.question': 'Ist MD5 noch sinnvoll?',
	'tool.hash-generator.faq.0.answer':
		'MD5 ist veraltet und für sicherheitskritische Integrität ungeeignet. Für Prüfsummen und Kompatibilität ist es noch verbreitet. Für Neuentwicklungen SHA-256 bevorzugen.',
	'tool.hash-generator.faq.1.question': 'Warum nutzt großer Text einen Worker?',
	'tool.hash-generator.faq.1.answer':
		'Das Hashen von Megabytes im Hauptthread kann die Seite einfrieren. Oberhalb einer Schwelle wird die Arbeit in einen Web Worker verlagert.',
	'tool.hash-generator.faq.2.question': 'Welche Kodierung wird verwendet?',
	'tool.hash-generator.faq.2.answer':
		'Die Eingabe wird als UTF-8-Bytes gehasht — wie üblich in der Entwicklerpraxis.',
	'tool.hash-generator.faq.3.question': 'Werden Daten an einen Server gesendet?',
	'tool.hash-generator.faq.3.answer': 'Nein. Alles läuft lokal in Ihrem Browser.',
	'tool.hash-generator.use_case.0':
		'Downloads und Konfigurationen mit veröffentlichten Prüfsummen abgleichen',
	'tool.hash-generator.use_case.1':
		'Datei-Fingerabdrücke vergleichen, ohne die Datei hochzuladen (für Binärdateien „Datei-Hash“ nutzen)',
	'tool.hash-generator.use_case.2': 'API-Payloads und kanonisches String-Hashing debuggen',
	'tool.hash-generator.use_case.3': 'Schnelle Digests für Logs und Cache-Schlüssel erzeugen',
	'tool.hmac-generator.display_name': 'HMAC-Generator',
	'tool.hmac-generator.tagline': 'Keyed HMAC-SHA-Signaturen für Nachrichten und Testvektoren',
	'tool.hmac-generator.description':
		'Berechnet HMAC mit SHA-1, SHA-256, SHA-384 oder SHA-512. Geheimnis und Nachricht bleiben im Tab; lange Nachrichten können einen Web Worker nutzen.',
	'tool.hmac-generator.primary_keyword': 'hmac generator online',
	'tool.hmac-generator.meta_title': 'HMAC-Generator — SHA-HMAC im Browser | fmtly',
	'tool.hmac-generator.meta_description':
		'HMAC-Signaturen mit wählbarem Hash und Geheimnis. Nur im Browser, keine Uploads, Worker für große Nachrichten.',
	'tool.hmac-generator.operation': 'HMAC berechnen',
	'tool.hmac-generator.faq.0.question': 'Wie formatiere ich den Schlüssel?',
	'tool.hmac-generator.faq.0.answer':
		'Der Schlüssel wird als UTF-8-Text interpretiert, wie in vielen API-Beispielen. Für rohe Binärschlüssel zuerst woanders aus Hex dekodieren.',
	'tool.hmac-generator.faq.1.question': 'Ist das dasselbe wie JWT-Signierung?',
	'tool.hmac-generator.faq.1.answer':
		'JWT nutzt eine bestimmte Kodierung (Base64URL-Segmente). Dieses Werkzeug ist rohes HMAC über die Nachrichtenbytes zum Debuggen und für Testvektoren.',
	'tool.hmac-generator.faq.2.question': 'Warum SHA-1 meiden?',
	'tool.hmac-generator.faq.2.answer':
		'SHA-1 ist veraltet. HMAC-SHA1 taucht in älteren Systemen auf, für neue Arbeit SHA-256 bevorzugen.',
	'tool.hmac-generator.faq.3.question': 'Werden Geheimnisse gespeichert?',
	'tool.hmac-generator.faq.3.answer':
		'Geheimnisse bleiben nur im Seitenspeicher. Feld leeren, wenn fertig — fmtly lädt Ihre Daten nicht hoch.',
	'tool.hmac-generator.use_case.0': 'Webhook-Signatur-Testvektoren nachstellen',
	'tool.hmac-generator.use_case.1': 'AWS-ähnliche Signatur-Bausteine prüfen',
	'tool.hmac-generator.use_case.2': 'Ausgaben mit OpenSSL oder Standardbibliotheken vergleichen',
	'tool.hmac-generator.use_case.3': 'MAC vs. Hash im Unterricht erklären',
	'tool.file-hash-calculator.display_name': 'Datei-Hash-Rechner',
	'tool.file-hash-calculator.tagline':
		'MD5, SHA-256 und CRC32 jeder lokalen Datei — nie hochgeladen',
	'tool.file-hash-calculator.description':
		'Datei ziehen, um MD5, SHA-256 und CRC32 im Browser zu berechnen. Große Dateien werden in einem Web Worker gehasht, damit die UI reaktionsfähig bleibt.',
	'tool.file-hash-calculator.primary_keyword': 'datei hash rechner sha256',
	'tool.file-hash-calculator.meta_title': 'Datei-Hash — MD5, SHA-256, CRC32 | fmtly',
	'tool.file-hash-calculator.meta_description':
		'Lokales Datei-Hashing: MD5, SHA-256, CRC32. Kein Cloud-Upload. Worker für große Dateien.',
	'tool.file-hash-calculator.operation': 'Dateien lokal hashen',
	'tool.file-hash-calculator.faq.0.question': 'Werden Dateien hochgeladen?',
	'tool.file-hash-calculator.faq.0.answer':
		'Nein. Die Datei wird mit der File API gelesen und nur im Speicher Ihres Browsers verarbeitet.',
	'tool.file-hash-calculator.faq.1.question': 'Warum drei Algorithmen?',
	'tool.file-hash-calculator.faq.1.answer':
		'SHA-256 ist ein moderner Fingerabdruck; MD5 steht in älteren Manifesten; CRC32 kommt in Zip und Netzwerk-Stacks vor.',
	'tool.file-hash-calculator.faq.2.question': 'Was ist mit RAM bei riesigen Dateien?',
	'tool.file-hash-calculator.faq.2.answer':
		'Die gesamte Datei wird zum Hashen in den Speicher geladen. Sehr große Dateien können genug freien RAM erfordern.',
	'tool.file-hash-calculator.faq.3.question': 'Kann ich Downloads prüfen?',
	'tool.file-hash-calculator.faq.3.answer':
		'Ja — berechneten Digest mit der Prüfsumme des Anbieters vergleichen. SHA-256 bevorzugen, wenn veröffentlicht.',
	'tool.file-hash-calculator.use_case.0': 'ISO- und Installer-Prüfsummen verifizieren',
	'tool.file-hash-calculator.use_case.1': 'Build-Artefakte zwischen CI-Knoten vergleichen',
	'tool.file-hash-calculator.use_case.2': 'Assets vor dem Ticket-Anhang fingerabdrucken',
	'tool.file-hash-calculator.use_case.3':
		'Schnelle Integritätsprüfungen für Archive und Datensätze',
	'tool.password-strength-meter.display_name': 'Passwort-Stärke-Messer',
	'tool.password-strength-meter.tagline':
		'Entropie, zxcvbn und Leak-Checks — ohne Ihr Passwort zu senden',
	'tool.password-strength-meter.description':
		'Schätzt Entropie, zeigt zxcvbn-Score und fragt Have I Been Pwned per k-Anonymität (nur SHA-1-Präfix). Ihr vollständiges Passwort verlässt den Browser nicht.',
	'tool.password-strength-meter.primary_keyword': 'passwort stärke prüfen',
	'tool.password-strength-meter.meta_title': 'Passwort-Stärke — Entropie & HIBP | fmtly',
	'tool.password-strength-meter.meta_description':
		'Passwortstärke mit Entropie und zxcvbn analysieren. Optionaler HIBP-k-Anonymity-Check. Läuft lokal im Browser.',
	'tool.password-strength-meter.operation': 'Passwortstärke analysieren',
	'tool.password-strength-meter.faq.0.question': 'Wie funktioniert der Leak-Check?',
	'tool.password-strength-meter.faq.0.answer':
		'Ihr Passwort wird lokal SHA-1-gehasht. Nur die ersten fünf Hex-Zeichen gehen an Have I Been Pwned — k-Anonymity.',
	'tool.password-strength-meter.faq.1.question': 'Sieht fmtly mein Passwort?',
	'tool.password-strength-meter.faq.1.answer':
		'Nein. Die Analyse läuft in Ihrem Browser. Die Leak-API erhält nie Ihr vollständiges Passwort.',
	'tool.password-strength-meter.faq.2.question': 'Reicht zxcvbn allein?',
	'tool.password-strength-meter.faq.2.answer':
		'zxcvbn ist eine starke Heuristik. Kombinieren Sie mit eindeutigen Passwörtern und einem Passwort-Manager.',
	'tool.password-strength-meter.faq.3.question': 'Was, wenn ich offline bin?',
	'tool.password-strength-meter.faq.3.answer':
		'Entropie und zxcvbn funktionieren; die Leak-Anzahl kann ohne Netz fehlen.',
	'tool.password-strength-meter.use_case.0': 'Nutzer bei der Registrierung begleiten',
	'tool.password-strength-meter.use_case.1': 'Passphrase-Ideen vor der Übernahme vergleichen',
	'tool.password-strength-meter.use_case.2': 'Security-Awareness-Labs ohne Software-Installation',
	'tool.password-strength-meter.use_case.3': 'Erklären, warum Länge und Vielfalt zählen',
	'tool.uuid-generator.display_name': 'UUID- / ULID-Generator',
	'tool.uuid-generator.tagline': 'UUID v4, UUID v7 und ULID-Stapel mit ULID-Zeit-Decode',
	'tool.uuid-generator.description':
		'Erzeugt zufällige UUID v4, zeitsortierbare UUID v7 und ULID-IDs. Dekodiert ULID-Zeitstempel lokal. Bis zu 500 Werte pro Stapel für Fixtures.',
	'tool.uuid-generator.primary_keyword': 'uuid v7 generator ulid',
	'tool.uuid-generator.meta_title': 'UUID v4, v7 & ULID-Generator | fmtly',
	'tool.uuid-generator.meta_description':
		'UUID v4, v7 und ULID in Serie erzeugen. ULID-Zeit im Browser dekodieren. Keine serverseitige Speicherung.',
	'tool.uuid-generator.operation': 'Kennungen erzeugen',
	'tool.uuid-generator.faq.0.question': 'Welche ID soll ich nutzen?',
	'tool.uuid-generator.faq.0.answer':
		'v4 für reine Zufälligkeit; v7 oder ULID für zeitlich sortierbare IDs und freundlichere DB-Sortierung.',
	'tool.uuid-generator.faq.1.question': 'Sind sie kryptografisch zufällig?',
	'tool.uuid-generator.faq.1.answer':
		'UUID v4/v7 und ULID nutzen sichere Zufälligkeit aus dem Browser, wo verfügbar.',
	'tool.uuid-generator.faq.2.question': 'Was zeigt ULID-Decode?',
	'tool.uuid-generator.faq.2.answer':
		'ULID codiert Millisekunden-Zeit in den ersten Zeichen; wir wandeln sie in ISO-Zeit um.',
	'tool.uuid-generator.faq.3.question': 'Kann ich exportieren?',
	'tool.uuid-generator.faq.3.answer':
		'Stapel aus dem Ausgabebereich kopieren oder Clipboard-Tools nutzen — fmtly speichert nichts.',
	'tool.uuid-generator.use_case.0': 'Datenbanken mit realistischen IDs füllen',
	'tool.uuid-generator.use_case.1': 'Korrelations-IDs für verteilte Tracing-Demos',
	'tool.uuid-generator.use_case.2': 'Sortierbare IDs für Event-Streams',
	'tool.uuid-generator.use_case.3': 'APIs prototypisieren, die UUID- oder ULID-Felder brauchen',
	'tool.keypair-generator.display_name': 'RSA- / EC-Schlüsselpaar-Generator',
	'tool.keypair-generator.tagline':
		'RSA-PSS- und ECDSA-PEM-Schlüssel via Web Crypto — nur in Ihrer Sitzung',
	'tool.keypair-generator.description':
		'Erzeugt RSA 2048/4096 und ECDSA P-256/P-384 Schlüsselpaare, exportiert als PEM. Schlüssel verlassen den Browser nicht; herunterladen oder von der Seite kopieren.',
	'tool.keypair-generator.primary_keyword': 'rsa schlüssel pem browser generieren',
	'tool.keypair-generator.meta_title': 'RSA- & EC-Schlüsselpaar (PEM) | fmtly',
	'tool.keypair-generator.meta_description':
		'RSA- und Elliptische-Kurven-Schlüsselpaare im PEM-Format mit Web Crypto. Nur clientseitig.',
	'tool.keypair-generator.operation': 'Schlüsselpaare erzeugen',
	'tool.keypair-generator.faq.0.question': 'Welche Algorithmen werden genutzt?',
	'tool.keypair-generator.faq.0.answer':
		'RSA mit RSA-PSS und SHA-256; EC mit ECDSA und NIST-Kurven. Export als PKIX SPKI und PKCS#8 PEM.',
	'tool.keypair-generator.faq.1.question': 'Sind das Produktionsschlüssel?',
	'tool.keypair-generator.faq.1.answer':
		'Echte Schlüssel aus Web Crypto — aber privates Material schützen und Unternehmensrichtlinien befolgen.',
	'tool.keypair-generator.faq.2.question': 'Für TLS verwendbar?',
	'tool.keypair-generator.faq.2.answer':
		'Sie brauchen noch ein von einer CA (oder eigener PKI) signiertes Zertifikat. Dieses Tool erzeugt nur rohe Schlüsselpaare.',
	'tool.keypair-generator.faq.3.question': 'Wo werden private Schlüssel gespeichert?',
	'tool.keypair-generator.faq.3.answer':
		'Nur im Speicher der Seite, bis Sie sie verlassen oder neu laden. Bei Bedarf sicher extern speichern.',
	'tool.keypair-generator.use_case.0': 'JWT-Signierung mit lokalen PEM-Dateien ausprobieren',
	'tool.keypair-generator.use_case.1': 'Wegwerf-Schlüssel für Dev-Container',
	'tool.keypair-generator.use_case.2': 'Asymmetrische Kryptografie mit exportierbarem PEM lehren',
	'tool.keypair-generator.use_case.3': 'RSA- vs. EC-Schlüsselgrößen vergleichen',
	'tool.certificate-decoder.display_name': 'Zertifikats-Decoder',
	'tool.certificate-decoder.tagline':
		'PEM-X.509-Zertifikate parsen: Betreff, SANs, Gültigkeit, Fingerabdruck',
	'tool.certificate-decoder.description':
		'PEM-Zertifikat laden: Betreff, Aussteller, Gültigkeit, Signaturalgorithmus, Subject Alternative Names und SHA-256-Fingerabdruck — lokal geparst.',
	'tool.certificate-decoder.primary_keyword': 'x509 zertifikat decoder pem',
	'tool.certificate-decoder.meta_title': 'X.509-Zertifikats-Decoder — PEM-Inspektor | fmtly',
	'tool.certificate-decoder.meta_description':
		'PEM-Zertifikate im Browser dekodieren. SANs, Gültigkeit, Algorithmen, Fingerabdrücke — ohne Upload.',
	'tool.certificate-decoder.operation': 'Zertifikate dekodieren',
	'tool.certificate-decoder.faq.0.question': 'Validiert das Vertrauenskette?',
	'tool.certificate-decoder.faq.0.answer':
		'Es parst und zeigt Felder. Vollständige Kettenvalidierung gegen Trust Stores liegt außerhalb dieses leichten Viewers.',
	'tool.certificate-decoder.faq.1.question': 'Warum ein Fingerabdruck-Stil?',
	'tool.certificate-decoder.faq.1.answer':
		'Wir zeigen SHA-256 als durch Doppelpunkte getrenntes Hex — gängiges Admin-Format.',
	'tool.certificate-decoder.faq.2.question': 'Kann ich DER einfügen?',
	'tool.certificate-decoder.faq.2.answer':
		'Der Decoder akzeptiert PEM und vom Parser unterstützte Kodierungen; PEM mit Headern ist am einfachsten.',
	'tool.certificate-decoder.faq.3.question': 'Wird das Zertifikat hochgeladen?',
	'tool.certificate-decoder.faq.3.answer':
		'Nein. Das Parsing passiert vollständig in Ihrem Browser.',
	'tool.certificate-decoder.use_case.0': 'SANs und Ablauf bei Vorfällen schnell lesen',
	'tool.certificate-decoder.use_case.1': 'Dev- vs. Prod-Zertifikatsmetadaten vergleichen',
	'tool.certificate-decoder.use_case.2':
		'Handshake-Probleme mit exakten Fingerabdrücken dokumentieren',
	'tool.certificate-decoder.use_case.3': 'X.509-Struktur lehren ohne installiertes openssl',
	'tool.totp-generator.display_name': 'TOTP-Generator',
	'tool.totp-generator.tagline': 'RFC-6238-Codes aus Base32-Geheimnissen — wie Authenticator-Apps',
	'tool.totp-generator.description':
		'Zeitbasierte Einmalpasswörter mit konfigurierbarer Periode, Stellen und HMAC-Algorithmus. Geheimnis bleibt lokal; Codes aktualisieren sich jede Sekunde.',
	'tool.totp-generator.primary_keyword': 'totp generator authenticator',
	'tool.totp-generator.meta_title': 'TOTP-Generator — RFC 6238 OTP | fmtly',
	'tool.totp-generator.meta_description':
		'TOTP aus Base32-Geheimnissen. Einstellbare Periode, Stellen, SHA-1/256/512. Nur im Browser.',
	'tool.totp-generator.operation': 'TOTP-Codes erzeugen',
	'tool.totp-generator.faq.0.question': 'Warum Base32?',
	'tool.totp-generator.faq.0.answer':
		'Authenticator-Apps liefern Geheimnisse oft als Base32-Strings. Wir dekodieren zu Bytes vor dem HMAC.',
	'tool.totp-generator.faq.1.question': 'Ersetzt das Google Authenticator?',
	'tool.totp-generator.faq.1.answer':
		'Es spiegelt die Mathematik zum Debuggen. Nutzen Sie die App auf dem Telefon als primären zweiten Faktor.',
	'tool.totp-generator.faq.2.question': 'Uhrzeit-Drift?',
	'tool.totp-generator.faq.2.answer':
		'Codes hängen von UTC ab. Große Uhrenabweichung kann Server-Mismatches verursachen — Systemzeit synchronisieren.',
	'tool.totp-generator.faq.3.question': 'Wird das Geheimnis gespeichert?',
	'tool.totp-generator.faq.3.answer':
		'Nur im Speicher, solange dieser Tab offen ist. Danach löschen.',
	'tool.totp-generator.use_case.0': 'Authenticator-Implementierungen in der Entwicklung prüfen',
	'tool.totp-generator.use_case.1': 'Codes mit RFC-Testvektoren vergleichen',
	'tool.totp-generator.use_case.2': 'Geheimnisse mit bekannt gutem Generator rotieren',
	'tool.totp-generator.use_case.3': 'Support reproduziert MFA-Probleme',
	'ui.random_string.tab_label': 'Zufall',
	'ui.random_string.simple_hint':
		'Länge und Zeichentypen anpassen — die Ausgabe aktualisiert sich automatisch.',
	'ui.random_string.length_with_value': 'Länge: {n}',
	'ui.random_string.characters_used': 'Verwendete Zeichen',
	'ui.random_string.pick.upper': 'ABC',
	'ui.random_string.pick.lower': 'abc',
	'ui.random_string.pick.digits': '123',
	'ui.random_string.pick.symbols': '#$&',
	'ui.random_string.preset_active_hint':
		'Ein Zeichensatz-Preset ist aktiv. Erweitert öffnen und auf „Auswahl“ wechseln für ABC / abc / 123 / Symbole.',
	'ui.random_string.advanced.title': 'Erweitert',
	'ui.random_string.exact_length': 'Genaue Länge',
	'ui.random_string.slider_hint':
		'Der Schieberegler oben eignet sich für Längen 1–256. Hier längere Zeichenketten (bis 100.000) eintragen.',
	'ui.random_string.regenerate': 'Neu erzeugen',
	'ui.random_string.decrease_length': 'Länge verringern',
	'ui.random_string.increase_length': 'Länge erhöhen',
	'ui.random_string.mode.pick': 'Auswahl (Umschalter)',
	'ui.random_string.strength.very_weak': 'Sehr schwach',
	'ui.random_string.strength.weak': 'Schwach',
	'ui.random_string.strength.fair': 'Mittel',
	'ui.random_string.strength.strong': 'Stark',
	'ui.random_string.strength.very_strong': 'Sehr stark',
	'ui.random_string.toast.one_charset': 'Mindestens einen Zeichentyp auswählen.',
	'ui.random_string.generate': 'Erzeugen',
	'ui.random_string.processing': 'Arbeitet…',
	'ui.random_string.length_label': 'Länge pro Zeichenkette',
	'ui.random_string.count_label': 'Anzahl Zeichenketten',
	'ui.random_string.charset_label': 'Zeichensatz',
	'ui.random_string.custom_charset_label': 'Eigene Zeichen',
	'ui.random_string.custom_charset_placeholder': 'Zeichen eingeben, aus denen gezogen wird…',
	'ui.random_string.separator_label': 'Trenner zwischen Zeichenketten',
	'ui.random_string.charset.alphanumeric': 'Alphanumerisch',
	'ui.random_string.charset.hex_lower': 'Hex (klein)',
	'ui.random_string.charset.hex_upper': 'Hex (groß)',
	'ui.random_string.charset.numeric': 'Numerisch',
	'ui.random_string.charset.base64url': 'Base64 URL-sicher',
	'ui.random_string.charset.custom': 'Benutzerdefiniert',
	'ui.random_string.separator.newline': 'Zeilenumbruch',
	'ui.random_string.separator.comma': 'Komma',
	'ui.random_string.separator.space': 'Leerzeichen',
	'ui.random_string.separator.none': 'Keiner (verketten)',
	'ui.random_string.exclude_ambiguous': 'Visuell verwechselbare Zeichen ausschließen (0/O, 1/l, …)',
	'ui.random_string.output_label': 'Ausgabe',
	'ui.random_string.panel_options_heading': 'Erzeugungsoptionen',
	'ui.random_string.panel_options_hint':
		'Länge, Anzahl, Zeichensatz und wie mehrere Zeichenketten verbunden werden.',
	'ui.random_string.output_placeholder': 'Generierte Zeichenketten erscheinen hier',
	'ui.random_string.worker_active':
		'Große Eingabe erkannt (>{size}). Erzeugung läuft in einem Web Worker.',
	'ui.random_string.worker_failed': 'Worker fehlgeschlagen. Fallback auf Erzeugung im Hauptthread.',
	'ui.random_string.worker_badge': 'Worker',
	'ui.random_string.toast.generated': 'Zufallszeichenketten erzeugt',
	'ui.random_string.toast.cleared': 'Ausgabe geleert',
	'ui.random_string.toast.nothing_to_download': 'Noch nichts zum Herunterladen',
	'ui.random_string.error.invalid_length': 'Länge liegt außerhalb des erlaubten Bereichs.',
	'ui.random_string.error.invalid_count': 'Anzahl liegt außerhalb des erlaubten Bereichs.',
	'ui.random_string.error.empty_charset': 'Wählen Sie einen nicht leeren Zeichensatz.',
	'ui.random_string.error.charset_too_large': 'Zeichensatz ist zu groß.',
	'ui.random_string.error.crypto_unavailable': 'Web Crypto ist in dieser Umgebung nicht verfügbar.',
	'ui.random_string.error.unknown': 'Zeichenketten konnten nicht erzeugt werden.',
	'ui.crypto.tab.hash': 'Hash',
	'ui.crypto.tab.hmac': 'HMAC',
	'ui.crypto.tab.file_hash': 'Datei',
	'ui.crypto.tab.password': 'Passwort',
	'ui.crypto.tab.uuid': 'UUID',
	'ui.crypto.tab.keypair': 'Schlüssel',
	'ui.crypto.tab.cert': 'Zert.',
	'ui.crypto.tab.totp': 'TOTP',
	'ui.hash.intro':
		'Text mit MD5 oder SHA hashen. Alles läuft in Ihrem Browser — nichts wird hochgeladen.',
	'ui.hash.sample_input': 'fmtly',
	'ui.hash.input_label': 'Eingabe (UTF-8)',
	'ui.hash.regenerate': 'Neu berechnen',
	'ui.hash.error_failed': 'Hash konnte nicht berechnet werden.',
	'ui.hash.worker_label': 'Worker',
	'ui.hash.worker_hint':
		'Große Eingaben nutzen automatisch einen Web Worker, damit die Seite reaktionsfähig bleibt.',
	'ui.hmac.intro':
		'HMAC mit Ihrem Geheimnis berechnen. Schlüssel bleiben in diesem Tab — nie an einen Server gesendet.',
	'ui.hmac.sample_message': 'Nachricht',
	'ui.hmac.sample_secret': 'geheimnis',
	'ui.hmac.secret_label': 'Geheimnis',
	'ui.hmac.message_label': 'Nachricht (UTF-8)',
	'ui.hmac.regenerate': 'Neu berechnen',
	'ui.hmac.error_failed': 'HMAC konnte nicht berechnet werden.',
	'ui.hmac.worker_hint':
		'Lange Nachrichten nutzen automatisch einen Web Worker, damit die Seite reaktionsfähig bleibt.',
	'ui.file_hash.intro':
		'MD5, SHA-256 und CRC32 jeder Datei — nur lokal in Ihrem Browser verarbeitet.',
	'ui.file_hash.drop_zone': 'Datei hier ablegen oder klicken zum Auswählen',
	'ui.file_hash.drop_hint': 'Dateien werden nie hochgeladen.',
	'ui.file_hash.rehash': 'Erneut hashen',
	'ui.file_hash.error_failed': 'Datei konnte nicht gehasht werden.',
	'ui.file_hash.worker_hint':
		'Große Dateien nutzen automatisch einen Web Worker, damit die Seite reaktionsfähig bleibt.',
	'ui.password_strength.intro':
		'Entropie, zxcvbn und Have I Been Pwned (k-Anonymität). Ihr Passwort verlässt den Browser außer der anonymen Bereichsabfrage nicht.',
	'ui.password_strength.field_label': 'Passwort',
	'ui.password_strength.show': 'Anzeigen',
	'ui.password_strength.hide': 'Ausblenden',
	'ui.password_strength.bits': 'Bits',
	'ui.password_strength.band.very_weak': 'Sehr schwach',
	'ui.password_strength.band.weak': 'Schwach',
	'ui.password_strength.band.fair': 'Mittel',
	'ui.password_strength.band.good': 'Gut',
	'ui.password_strength.band.strong': 'Stark',
	'ui.password_strength.summary.entropy': 'Entropie (Schätzung)',
	'ui.password_strength.summary.crack': 'Knackzeit (grob)',
	'ui.password_strength.summary.zxcvbn': 'zxcvbn-Score',
	'ui.password_strength.summary.pwned': 'Bekannte Leaks (HIBP)',
	'ui.password_strength.summary.pwned_unknown': 'Leak-Check nicht verfügbar (offline oder Fehler).',
	'ui.password_strength.zxcvbn_label': 'zxcvbn-Score',
	'ui.password_strength.hibp_label': 'HIBP-Anzahl',
	'ui.uuid.intro':
		'UUID v4, UUID v7 und ULID — lokal erzeugt. ULID enthält einen dekodierbaren Zeitstempel.',
	'ui.uuid.count': 'Anzahl',
	'ui.uuid.regenerate': 'Neu erzeugen',
	'ui.uuid.output_label': 'Erzeugte Kennungen',
	'ui.uuid.ulid_decode_label': 'ULID-Zeit dekodieren',
	'ui.uuid.ulid_placeholder': 'ULID einfügen',
	'ui.uuid.ulid_decode_invalid': 'Kein gültiges ULID',
	'ui.uuid.decode': 'Dekodieren',
	'ui.keypair.intro':
		'RSA (PSS) und ECDSA-Schlüsselpaare als PEM. Nur mit Web Crypto in Ihrem Browser erzeugt.',
	'ui.keypair.bits': 'Bits',
	'ui.keypair.generate': 'Erzeugen',
	'ui.keypair.public': 'Öffentlicher Schlüssel',
	'ui.keypair.private': 'Privater Schlüssel',
	'ui.keypair.error_failed': 'Schlüsselpaar konnte nicht erzeugt werden.',
	'ui.cert.intro':
		'PEM-X.509-Zertifikate prüfen: Betreff, Gültigkeit, SANs, Fingerabdruck — lokal geparst.',
	'ui.cert.pem_label': 'PEM-Zertifikat',
	'ui.cert.placeholder_hint': 'PEM-kodiertes Zertifikat einfügen…',
	'ui.cert.subject': 'Betreff',
	'ui.cert.issuer': 'Aussteller',
	'ui.cert.serial': 'Seriennummer',
	'ui.cert.valid_from': 'Gültig ab',
	'ui.cert.valid_to': 'Gültig bis',
	'ui.cert.sig_alg': 'Signatur',
	'ui.cert.public_key': 'Öffentlicher Schlüssel',
	'ui.cert.fp256': 'SHA-256-Fingerabdruck',
	'ui.cert.san': 'Subject Alternative Names',
	'ui.cert.redo': 'Erneut dekodieren',
	'ui.totp.intro':
		'RFC-6238-TOTP aus Base32-Geheimnis. Entspricht Authenticator-Apps bei passenden Einstellungen.',
	'ui.totp.secret_label': 'Geheimnis (Base32)',
	'ui.totp.period': 'Periode (s)',
	'ui.totp.digits': 'Stellen',
	'ui.totp.code_label': 'Code',
	'ui.totp.refresh': 'Aktualisieren',
	'ui.totp.error_failed': 'Ungültiges Geheimnis oder Einstellungen.',
	'ui.qr.tab_label': 'QR',
	'ui.qr.tab_reader': 'Lesen',
	'ui.qr.tab_barcode': 'Barcode',
	'ui.qr.characters': 'Zeichen',
	'ui.qr.output_empty': 'Erzeuge einen QR-Code, um ihn anzuzeigen und zu exportieren.',
	'ui.qr.preview_alt': 'Vorschau des erzeugten QR-Codes',
	'ui.qr.worker_active':
		'Große Eingabe erkannt (>{size}). Die QR-Erzeugung läuft in einem Web Worker.',
	'ui.qr.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Fallback auf Erzeugung im Hauptthread.',
	'ui.qr.worker_badge': 'Worker',
	'ui.qr.content_label': 'QR-Inhalt',
	'ui.qr.encoding_hint': 'Text, URLs, WLAN-Payloads, vCards oder App-Deep-Links',
	'ui.qr.input_placeholder':
		'URL, Klartext, WLAN-Payload oder beliebige QR-fähige Inhalte hier einfügen...',
	'ui.qr.preview_label': 'Live-Vorschau',
	'ui.qr.copy_svg': 'SVG kopieren',
	'ui.qr.download_svg': 'SVG herunterladen',
	'ui.qr.download_png': 'PNG herunterladen',
	'ui.qr.empty_state':
		'Gib Inhalte ein, um eine QR-Vorschau mit exportfähiger SVG- und PNG-Ausgabe zu erzeugen.',
	'ui.qr.metric.version': 'Version',
	'ui.qr.metric.modules': 'Module',
	'ui.qr.metric.mask': 'Maske',
	'ui.qr.metric.segments': 'Segmente',
	'ui.qr.scan_readiness_label': 'Scan-Bereitschaft',
	'ui.qr.scan_readiness.excellent': 'Sehr gute Scan-Bereitschaft',
	'ui.qr.scan_readiness.excellent_hint':
		'Diese Einstellungen sind gut für zuverlässige Scans auf dem Bildschirm und im Druck ausbalanciert.',
	'ui.qr.scan_readiness.balanced': 'Ausgewogene Konfiguration',
	'ui.qr.scan_readiness.balanced_hint':
		'Dieser QR-Code sollte gut scanbar sein, aber stärkere Korrektur oder mehr Ruhezone verbessern die Robustheit.',
	'ui.qr.scan_readiness.risky': 'Riskant beim Scannen',
	'ui.qr.scan_readiness.risky_hint':
		'Die aktuellen Einstellungen können die Scan-Zuverlässigkeit verringern. Erhöhe Ruhezone oder Fehlerkorrektur, besonders bei einem Logo.',
	'ui.qr.section.reliability': 'Zuverlässigkeit',
	'ui.qr.section.appearance': 'Optik',
	'ui.qr.section.logo': 'Mittiges Logo (optional)',
	'ui.qr.error_correction_hint':
		'Höhere Korrektur übersteht mehr Schäden, Kratzer und Logo-Overlays, reduziert aber die Gesamtkapazität leicht.',
	'ui.qr.size_label': 'Größe',
	'ui.qr.margin_label': 'Ruhezone',
	'ui.qr.dark_color_label': 'Vordergrund',
	'ui.qr.light_color_label': 'Hintergrund',
	'ui.qr.transparent': 'Transparent',
	'ui.qr.transparent_background_label': 'Transparenter Hintergrund',
	'ui.qr.logo_hint':
		'Fügt ein kleines Logo in die Mitte des QR-Codes ein – praktisch für Poster, Menüs, Verpackungen oder Print. Für die zuverlässigsten Scans kannst du es leer lassen.',
	'ui.qr.upload_logo': 'Logo hochladen',
	'ui.qr.logo_preview_alt': 'Vorschau des hochgeladenen Logos',
	'ui.qr.logo_scale_label': 'Logo-Größe',
	'ui.qr.remove_logo': 'Logo entfernen',
	'ui.qr.logo_empty':
		'Kein Logo ausgewählt. Diese Option ist nur nötig, wenn dein Markenlogo in der Mitte des QR-Codes erscheinen soll. Für die einfachsten und zuverlässigsten Scans kannst du das Feld leer lassen.',
	'ui.qr.error.invalid_logo': 'Bitte lade eine gültige Bilddatei für das Logo hoch.',
	'ui.qr.error.input_too_long':
		'Dieser Text ist zu groß für einen einzelnen QR-Code. Kürze den Inhalt oder entferne einige Daten.',
	'ui.qr.error.generation_failed': 'QR-Erzeugung fehlgeschlagen: {detail}',
	'ui.qr.error.png_export_failed': 'PNG-Export für diesen QR-Code fehlgeschlagen.',
	'ui.qr.warning.logo_overlay_low_error_correction':
		'Ein zentriertes Logo mit L- oder M-Korrektur kann die Scan-Zuverlässigkeit verschlechtern. Bevorzuge Q oder H.',
	'ui.qr.toast.logo_added': 'Logo-Overlay hinzugefügt',
	'ui.qr.toast.logo_removed': 'Logo-Overlay entfernt',
	'ui.qr.reader.upload': 'Hochladen',
	'ui.qr.reader.camera': 'Kamera',
	'ui.qr.reader.drop_title': 'Bild hier ablegen',
	'ui.qr.reader.drop_hint':
		'PNG, JPG, WebP, GIF oder SVG. Große Bilder werden neben dem Hauptthread dekodiert. Screenshots können eingefügt werden.',
	'ui.qr.reader.drop_aria': 'Bild hochladen oder ablegen zum Scannen',
	'ui.qr.reader.preview_alt': 'Vorschau des hochgeladenen Bildes',
	'ui.qr.reader.result_label': 'Dekodierter Inhalt',
	'ui.qr.reader.empty_state':
		'Dekodierter Text erscheint hier. Dein Bild verlässt den Browser nicht.',
	'ui.qr.reader.status_decoding': 'Bild wird gescannt…',
	'ui.qr.reader.status_ok': '{size} · {ms} ms',
	'ui.qr.reader.error_no_qr':
		'Kein QR-Code gefunden. Versuche ein schärferes Foto, besseres Licht oder einen größeren Ausschnitt.',
	'ui.qr.reader.error_decode':
		'Dieses Bild konnte nicht gelesen werden. Versuche eine andere Datei oder ein anderes Format.',
	'ui.qr.reader.error_load':
		'Dieses Bild konnte nicht geladen werden. Versuche PNG, JPG oder WebP von deinem Gerät.',
	'ui.qr.reader.error_type': 'Bitte eine Bilddatei auswählen.',
	'ui.qr.reader.worker_active':
		'Großes Bild ({size}). Dekodierung läuft in einem Web Worker, damit die Oberfläche reaktionsfähig bleibt.',
	'ui.qr.reader.worker_badge': 'Worker',
	'ui.qr.reader.worker_failed':
		'Dekodierung im Worker fehlgeschlagen. Erneuter Versuch im Hauptthread.',
	'ui.barcode.characters': 'Zeichen',
	'ui.barcode.content_label': 'Strichcode-Daten',
	'ui.barcode.input_placeholder': 'Nutzdaten für die gewählte Symbologie eingeben oder einfügen…',
	'ui.barcode.format_label': 'Symbologie',
	'ui.barcode.format_hint':
		'Retail-GTINs nutzen EAN/UPC; in der Logistik oft Code 128 oder ITF-14.',
	'ui.barcode.preview_label': 'Vorschau',
	'ui.barcode.preview_alt': 'Strichcode-Vorschau',
	'ui.barcode.output_empty': 'Erzeuge einen Strichcode, um ihn anzuzeigen und zu exportieren.',
	'ui.barcode.raster_only': 'Nur PNG (Worker)',
	'ui.barcode.empty_preview':
		'Passe Daten und Optionen an, um eine Vektor- oder Raster-Vorschau zu erstellen.',
	'ui.barcode.copy_svg': 'SVG kopieren',
	'ui.barcode.copy_png': 'PNG-Daten-URL kopieren',
	'ui.barcode.copy_svg_unavailable': 'Für diese Vorschau ist kein SVG verfügbar.',
	'ui.barcode.download_svg': 'SVG',
	'ui.barcode.download_png': 'PNG',
	'ui.barcode.section.appearance': 'Darstellung',
	'ui.barcode.display_value': 'Lesbare Zeichen anzeigen',
	'ui.barcode.bar_width': 'Balkenbreite',
	'ui.barcode.bar_height': 'Balkenhöhe',
	'ui.barcode.font_size': 'Beschriftungsgröße',
	'ui.barcode.quiet_zone': 'Ruhezone',
	'ui.barcode.line_color': 'Balken',
	'ui.barcode.background': 'Hintergrund',
	'ui.barcode.worker_active': 'Große Nutzlast ({size}). Die Erzeugung läuft in einem Web Worker.',
	'ui.barcode.worker_badge': 'Worker',
	'ui.barcode.worker_failed': 'Worker fehlgeschlagen. Erneuter Versuch im Hauptthread.',
	'ui.barcode.error.empty': 'Gib einen Wert zum Kodieren ein.',
	'ui.barcode.error.invalid_value': 'Dieser Wert passt nicht zur gewählten Symbologie.',
	'ui.barcode.error.generation_failed': 'Strichcode konnte nicht erzeugt werden: {detail}',
	'ui.barcode.error.ean13': 'EAN-13 erfordert 12 oder 13 Ziffern.',
	'ui.barcode.error.ean8': 'EAN-8 erfordert 7 oder 8 Ziffern.',
	'ui.barcode.error.upc': 'UPC-A erfordert 11 oder 12 Ziffern.',
	'ui.barcode.error.itf14': 'ITF-14 erfordert 13 oder 14 Ziffern.',
	'ui.barcode.error.itf': 'ITF erfordert eine gerade Zifferanzahl (mindestens zwei).',
	'ui.barcode.error.msi': 'MSI kodiert nur Ziffern.',
	'ui.barcode.error.pharmacode': 'Pharmacode muss eine ganze Zahl zwischen 1 und 131070 sein.',
	'ui.barcode.format.CODE128': 'Code 128',
	'ui.barcode.format.CODE39': 'Code 39',
	'ui.barcode.format.CODE93': 'Code 93',
	'ui.barcode.format.codabar': 'Codabar',
	'ui.barcode.format.EAN13': 'EAN-13',
	'ui.barcode.format.EAN8': 'EAN-8',
	'ui.barcode.format.UPC': 'UPC-A',
	'ui.barcode.format.ITF14': 'ITF-14',
	'ui.barcode.format.ITF': 'ITF (verschlungen)',
	'ui.barcode.format.MSI': 'MSI',
	'ui.barcode.format.MSI10': 'MSI (mod 10)',
	'ui.barcode.format.MSI11': 'MSI (mod 11)',
	'ui.barcode.format.MSI1010': 'MSI (mod 1010)',
	'ui.barcode.format.MSI1110': 'MSI (mod 1110)',
	'ui.barcode.format.pharmacode': 'Pharmacode',

	// Missing keys from English
	'tool.csv-diff.display_name': 'tool.csv-diff.display_name',
	'tool.csv-diff.tagline': 'tool.csv-diff.tagline',
	'tool.csv-diff.description': 'tool.csv-diff.description',
	'tool.csv-diff.primary_keyword': 'tool.csv-diff.primary_keyword',
	'tool.csv-diff.meta_title': 'tool.csv-diff.meta_title',
	'tool.csv-diff.meta_description': 'tool.csv-diff.meta_description',
	'tool.csv-diff.operation': 'tool.csv-diff.operation',
	'tool.csv-diff.faq.0.question': 'tool.csv-diff.faq.0.question',
	'tool.csv-diff.faq.0.answer': 'tool.csv-diff.faq.0.answer',
	'tool.csv-diff.faq.1.question': 'tool.csv-diff.faq.1.question',
	'tool.csv-diff.faq.1.answer': 'tool.csv-diff.faq.1.answer',
	'tool.csv-diff.use_case.0': 'tool.csv-diff.use_case.0',
	'tool.csv-diff.use_case.1': 'tool.csv-diff.use_case.1',
	'ui.validator.schema': 'ui.validator.schema',
	'ui.validator.warnings': 'ui.validator.warnings',
	'ui.toast.file_loaded': 'ui.toast.file_loaded',
	'ui.whitespace_cleaner.output': 'ui.whitespace_cleaner.output',
	'ui.whitespace_cleaner.statistics': 'ui.whitespace_cleaner.statistics',
	'ui.whitespace_cleaner.normalized': 'ui.whitespace_cleaner.normalized',

	'category.generate.display_name': 'Generatoren',
	'category.generate.description':
		'Testdaten, Kennungen, Passwörter, .gitignore und README-Gerüste — sofort im Browser.',
	'category.generate.primary_keyword': 'Entwickler-Generatoren',
	'tool.fake-data-generator.display_name': 'Testdaten-Generator',
	'tool.fake-data-generator.tagline': 'Realistische Zeilen für QA und Demos',
	'tool.fake-data-generator.description':
		'Erzeugen Sie Namen, E-Mails, Adressen und mehr mit locale-aware Faker. Export als JSON, CSV oder SQL-INSERT. Große Mengen laufen im Web Worker.',
	'tool.fake-data-generator.primary_keyword': 'Testdaten-Generator',
	'tool.fake-data-generator.meta_title': 'Testdaten-Generator — JSON, CSV, SQL | fmtly',
	'tool.fake-data-generator.meta_description':
		'Kostenlos im Browser: konfigurierbare Felder, Locale, Zeilenanzahl, Export JSON/CSV/SQL. Kein Upload; Web Worker für große Ausgaben.',
	'tool.fake-data-generator.operation': 'generate',
	'tool.fake-data-generator.faq.0.question': 'Sind die Daten wirklich zufällig?',
	'tool.fake-data-generator.faq.0.answer':
		'Werte stammen von Faker und wo nötig von Web-Crypto-Zufall. Nur für Tests — niemals als echte personenbezogene Daten verwenden.',
	'tool.fake-data-generator.faq.1.question': 'Wann wird ein Worker genutzt?',
	'tool.fake-data-generator.faq.1.answer':
		'Sehr große Zeilenanzahlen oder geschätzte Ausgabe über ~500 KB werden außerhalb des Hauptthreads erzeugt, damit die Seite flüssig bleibt.',
	'tool.fake-data-generator.faq.2.question': 'Welche Exportformate gibt es?',
	'tool.fake-data-generator.faq.2.answer':
		'JSON-Array von Objekten, CSV mit Kopfzeile oder SQL-INSERT in einen von Ihnen gewählten Tabellennamen.',
	'tool.fake-data-generator.faq.3.question': 'Verlassen meine Daten den Browser?',
	'tool.fake-data-generator.faq.3.answer':
		'Nein. Alles läuft lokal; fmtly sendet Eingabe oder Ausgabe nicht an einen Server.',
	'tool.fake-data-generator.use_case.0': 'Integrationstests und Staging-Datenbanken füllen',
	'tool.fake-data-generator.use_case.1': 'Demos ohne echte Kundendaten',
	'tool.fake-data-generator.use_case.2': 'CSV-Importe und ETL-Prototypen',
	'tool.fake-data-generator.use_case.3': 'Reproduzierbare Beispiele fürs Team',
	'tool.uuid-batch-generator.display_name': 'UUID-Stapel-Generator',
	'tool.uuid-batch-generator.tagline': 'Tausende UUID v4 oder v7',
	'tool.uuid-batch-generator.description':
		'Erzeugen Sie zeilen- oder kommagetrennte UUID-Listen, kopieren Sie alles oder laden Sie eine Textdatei herunter. Große Mengen nutzen einen Web Worker.',
	'tool.uuid-batch-generator.primary_keyword': 'UUID Stapel',
	'tool.uuid-batch-generator.meta_title': 'UUID-Stapel-Generator — v4 & v7 | fmtly',
	'tool.uuid-batch-generator.meta_description':
		'Generate bis zu hunderttausende UUID v4 oder v7 im Browser. Kopieren oder Download; Worker für sehr große Mengen.',
	'tool.uuid-batch-generator.operation': 'generate',
	'tool.uuid-batch-generator.faq.0.question': 'Worin unterscheidet sich das vom Einzel-UUID-Tool?',
	'tool.uuid-batch-generator.faq.0.answer':
		'Dieses Tool ist für Massenlisten, Datei-Export und Komma-Trennung optimiert. Das Crypto-UUID-Tool liefert eine ID und ULID-Dekodierung.',
	'tool.uuid-batch-generator.faq.1.question': 'v4 vs. v7?',
	'tool.uuid-batch-generator.faq.1.answer':
		'v4 ist zufällig. v7 ist zeitsortierbar (RFC 9562) — nützlich für geordnete IDs. Beide lokal erzeugt.',
	'tool.uuid-batch-generator.faq.2.question': 'Warum ein Worker?',
	'tool.uuid-batch-generator.faq.2.answer':
		'Hunderttausende UUIDs können die UI blockieren; der Worker hält Scrollen und Eingaben flüssig.',
	'tool.uuid-batch-generator.faq.3.question': 'Sind die IDs kryptographisch sicher?',
	'tool.uuid-batch-generator.faq.3.answer':
		'Sie nutzen dasselbe uuid-Paket wie gängige Runtimes. Für sicherheitskritische Geheimnisse gelten Ihre Richtlinien.',
	'tool.uuid-batch-generator.use_case.0': 'Lasttests und Fixture-Dateien',
	'tool.uuid-batch-generator.use_case.1': 'Tabellenspalten mit eindeutigen IDs',
	'tool.uuid-batch-generator.use_case.2': 'Datenbanken mit v7-Zeitordnung füllen',
	'tool.uuid-batch-generator.use_case.3': 'Schnell in die Zwischenablage für Skripte',
	'tool.generate-password-generator.display_name': 'Passwort-Generator',
	'tool.generate-password-generator.tagline': 'Starke Passwörter im Browser',
	'tool.generate-password-generator.description':
		'Passwörter nach Länge und Zeichenklassen mit Web-Crypto-Zufall. Optional Trennstriche und ein lokaler zxcvbn-Stärke-Hinweis.',
	'tool.generate-password-generator.primary_keyword': 'Passwortgenerator',
	'tool.generate-password-generator.meta_title': 'Passwort-Generator — sicher & lokal | fmtly',
	'tool.generate-password-generator.meta_description':
		'Sichere Passwörter mit Länge, Symbolen und Mehrdeutigkeits-Optionen. Stärke-Hinweis per zxcvbn; keine Daten an Server.',
	'tool.generate-password-generator.operation': 'generate',
	'tool.generate-password-generator.faq.0.question': 'Unterschied zum Stärke-Messgerät?',
	'tool.generate-password-generator.faq.0.answer':
		'Dieses Tool erzeugt neue Passwörter. Das Crypto-Tool bewertet bereits vorhandene Passwörter.',
	'tool.generate-password-generator.faq.1.question': 'Woher kommt die Zufälligkeit?',
	'tool.generate-password-generator.faq.1.answer':
		'Von crypto.getRandomValues im Browser — dieselbe API wie für TLS und andere sichere Kontexte.',
	'tool.generate-password-generator.faq.2.question': 'Was bedeutet der Stärke-Hinweis?',
	'tool.generate-password-generator.faq.2.answer':
		'zxcvbn schätzt Erratbarkeit. Läuft lokal und ist ein Hinweis, keine Garantie.',
	'tool.generate-password-generator.faq.3.question': 'Für Produktion geeignet?',
	'tool.generate-password-generator.faq.3.answer':
		'Kombinieren Sie mit Richtlinien, Rotation und einem Passwort-Manager.',
	'tool.generate-password-generator.use_case.0': 'Neue Admin- oder Service-Konten',
	'tool.generate-password-generator.use_case.1': 'Temporäre Geheimnisse für Demos',
	'tool.generate-password-generator.use_case.2': 'Hohe Entropie wenn Symbolpflicht',
	'tool.generate-password-generator.use_case.3': 'Workshops zu sicheren Defaults',
	'tool.gitignore-builder.display_name': '.gitignore-Builder',
	'tool.gitignore-builder.tagline': 'Kuratierte Ignore-Regeln zusammenführen',
	'tool.gitignore-builder.description':
		'Stacks und Umgebungen wählen — Node, Python, Rust, OS-Rauschen, IDEs und mehr — zu einer .gitignore zusammenführen. Statische Vorlagen, keine Netzwerkanfragen.',
	'tool.gitignore-builder.primary_keyword': 'gitignore Generator',
	'tool.gitignore-builder.meta_title': '.gitignore-Builder — zusammengeführte Vorlagen | fmtly',
	'tool.gitignore-builder.meta_description':
		'Kombinieren Sie gitignore-ähnliche Fragmente für Sprachen, Frameworks, Docker, Terraform und Editoren. Ein Klick zum Kopieren.',
	'tool.gitignore-builder.operation': 'generate',
	'tool.gitignore-builder.faq.0.question': 'Ist das gleich wie gitignore.io?',
	'tool.gitignore-builder.faq.0.answer':
		'Wir liefern kuratierte Fragmente nach gängigen Community-Vorlagen; Sie führen lokal ohne API zusammen.',
	'tool.gitignore-builder.faq.1.question': 'Kann ich die Ausgabe bearbeiten?',
	'tool.gitignore-builder.faq.1.answer':
		'Ja — ins Repo kopieren und anpassen. Reihenfolge und Abschnitte sind deterministisch.',
	'tool.gitignore-builder.faq.2.question': 'Warum zusammenführen statt einer riesigen Vorlage?',
	'tool.gitignore-builder.faq.2.answer':
		'Relevante, kleinere Regeln reduzieren Rauschen und Konflikte in neuen Projekten.',
	'tool.gitignore-builder.faq.3.question': 'Werden Auswahlen protokolliert?',
	'tool.gitignore-builder.faq.3.answer': 'Nein. Alles bleibt im Browser.',
	'tool.gitignore-builder.use_case.0': 'Neues Repo mit sinnvollen Defaults',
	'tool.gitignore-builder.use_case.1': 'Schnell OS- und Editor-Dateien ignorieren',
	'tool.gitignore-builder.use_case.2': 'Docker/Terraform mit App-Stacks kombinieren',
	'tool.gitignore-builder.use_case.3': 'Git-Hygiene in Kursen',
	'tool.readme-template-generator.display_name': 'README-Vorlage',
	'tool.readme-template-generator.tagline': 'Projekt-README in Sekunden',
	'tool.readme-template-generator.description':
		'Titel, Beschreibung, Installation, Nutzung, Lizenz und optionale GitHub-Badges — sauberes Markdown-README zum Einfügen.',
	'tool.readme-template-generator.primary_keyword': 'Readme Generator',
	'tool.readme-template-generator.meta_title': 'README-Vorlage — Markdown | fmtly',
	'tool.readme-template-generator.meta_description':
		'README.md aus Formularfeldern: Befehle, Nutzung, Lizenz, optionale Badges. Alles clientseitig.',
	'tool.readme-template-generator.operation': 'generate',
	'tool.readme-template-generator.faq.0.question': 'Später anpassen?',
	'tool.readme-template-generator.faq.0.answer': 'Ja — reines Markdown, beliebig erweitern.',
	'tool.readme-template-generator.faq.1.question': 'Badges für jeden Host?',
	'tool.readme-template-generator.faq.1.answer':
		'Badges folgen einem shields.io-ähnlichen Muster für GitHub-Pfade — andere Forge-URLs ggf. anpassen.',
	'tool.readme-template-generator.faq.2.question': 'Wird der Projektname gesendet?',
	'tool.readme-template-generator.faq.2.answer': 'Nein. Text nur im Browser zusammengesetzt.',
	'tool.readme-template-generator.faq.3.question': 'Private Repos?',
	'tool.readme-template-generator.faq.3.answer':
		'Ja — nichts wird hochgeladen; Markdown manuell ins Repo kopieren.',
	'tool.readme-template-generator.use_case.0': 'Open Source auf GitHub/GitLab',
	'tool.readme-template-generator.use_case.1': 'Interne Bibliotheken mit einheitlichem README',
	'tool.readme-template-generator.use_case.2': 'Hackathons und Prototypen',
	'tool.readme-template-generator.use_case.3': 'Markdown und Repo-Hygiene lehren',
	'ui.generate_fake_data.no_fields': 'Mindestens ein Feld auswählen.',
	'ui.generate_fake_data.fields_label': 'Felder',
	'ui.generate_fake_data.rows': 'Zeilen',
	'ui.generate_fake_data.format': 'Exportformat',
	'ui.generate_fake_data.table': 'SQL-Tabellenname',
	'ui.generate_fake_data.generate': 'Erzeugen',
	'ui.generate_fake_data.worker_badge': 'Web Worker',
	'ui.generate_fake_data.preview': 'Ausgabe',
	'ui.generate_fake_data.placeholder': 'Generierte Daten erscheinen hier…',
	'ui.generate_fake_data.field.fullName': 'Vollständiger Name',
	'ui.generate_fake_data.field.firstName': 'Vorname',
	'ui.generate_fake_data.field.lastName': 'Nachname',
	'ui.generate_fake_data.field.email': 'E-Mail',
	'ui.generate_fake_data.field.phone': 'Telefon',
	'ui.generate_fake_data.field.street': 'Straße',
	'ui.generate_fake_data.field.city': 'Stadt',
	'ui.generate_fake_data.field.zip': 'PLZ',
	'ui.generate_fake_data.field.country': 'Land',
	'ui.generate_fake_data.field.company': 'Firma',
	'ui.generate_fake_data.field.jobTitle': 'Berufsbezeichnung',
	'ui.generate_fake_data.field.ipv4': 'IPv4',
	'ui.generate_fake_data.field.date': 'Datum',
	'ui.generate_fake_data.field.uuid': 'UUID',
	'ui.generate_uuid_batch.count': 'Anzahl',
	'ui.generate_uuid_batch.separator': 'Trennzeichen',
	'ui.generate_uuid_batch.sep_line': 'Zeilenumbruch',
	'ui.generate_uuid_batch.sep_comma': 'Komma',
	'ui.generate_uuid_batch.generate': 'Erzeugen',
	'ui.generate_uuid_batch.worker': 'Web Worker',
	'ui.generate_uuid_batch.output': 'UUIDs',
	'ui.generate_uuid_batch.placeholder': 'Generierte UUIDs erscheinen hier…',
	'ui.generate_password.length': 'Länge',
	'ui.generate_password.upper': 'A–Z',
	'ui.generate_password.lower': 'a–z',
	'ui.generate_password.digits': '0–9',
	'ui.generate_password.symbols': 'Symbole',
	'ui.generate_password.no_ambiguous': 'Mehrdeutige vermeiden',
	'ui.generate_password.groups': 'Alle N Zeichen Bindestrich (0 = aus)',
	'ui.generate_password.regenerate': 'Neu erzeugen',
	'ui.generate_password.strength_hint': 'Hinweis',
	'ui.generate_password.strength.0': 'Zu leicht erratbar',
	'ui.generate_password.strength.1': 'Sehr schwach',
	'ui.generate_password.strength.2': 'Schwach',
	'ui.generate_password.strength.3': 'Gut',
	'ui.generate_password.strength.4': 'Stark',
	'ui.generate_password.disclaimer':
		'Im Browser mit Web Crypto erzeugt. Stärke-Hinweis per zxcvbn lokal — für Produktions-Geheimnisse Richtlinien prüfen.',
	'ui.generate_gitignore.search': 'Stacks filtern…',
	'ui.generate_readme.title': 'Titel',
	'ui.generate_readme.license': 'Lizenz',
	'ui.generate_readme.description': 'Beschreibung',
	'ui.generate_readme.install': 'Installation',
	'ui.generate_readme.usage': 'Nutzung',
	'ui.generate_readme.badges': 'GitHub-ähnliche Badges',
	'ui.generate_readme.repo_user': 'GitHub user/org',
	'ui.generate_readme.repo_name': 'Repository-Name',

	// Missing keys from English
	'category.pdf.display_name': 'PDF',
	'category.pdf.description':
		'PDF-Dateien direkt im Browser ansehen, extrahieren, zusammenfuegen, teilen und Metadaten pruefen - ohne Upload.',
	'category.pdf.primary_keyword': 'pdf tools',
	'tool.pdf-viewer.display_name': 'PDF-Viewer',
	'tool.pdf-viewer.tagline': 'PDF-Seiten mit Zoom- und Navigationssteuerung anzeigen',
	'tool.pdf-viewer.description':
		'PDFs im Browser oeffnen und Seiten mit weichem Zoom und schnellem Seitenwechsel durchblaettern.',
	'tool.pdf-viewer.primary_keyword': 'pdf viewer',
	'tool.pdf-viewer.meta_title': 'PDF-Viewer Online - fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'PDF-Dateien direkt im Browser mit Seitennavigation und Zoom anzeigen. Kein Upload erforderlich.',
	'tool.pdf-viewer.operation': 'Anzeigen',
	'tool.pdf-viewer.faq.0.question': 'Werden PDF-Dateien auf einen Server hochgeladen?',
	'tool.pdf-viewer.faq.0.answer': 'Nein. Dateien bleiben im Browser und werden nicht hochgeladen.',
	'tool.pdf-viewer.faq.1.question': 'Kann ich grosse PDFs durchsuchen?',
	'tool.pdf-viewer.faq.1.answer':
		'Ja. Sie koennen Seite fuer Seite springen und zum besseren Lesen zoomen.',
	'tool.pdf-viewer.faq.2.question': 'Werden passwortgeschuetzte PDFs unterstuetzt?',
	'tool.pdf-viewer.faq.2.answer':
		'Verschluesselte PDFs werden in diesem Viewer derzeit nicht unterstuetzt.',
	'tool.pdf-viewer.faq.3.question': 'Welche Browser werden empfohlen?',
	'tool.pdf-viewer.faq.3.answer':
		'Aktuelle Versionen von Chrome, Edge, Firefox und Safari bieten die beste Kompatibilitaet.',
	'tool.pdf-viewer.use_case.0': 'PDF-Anwendungsfall',
	'tool.pdf-viewer.use_case.1': 'PDF-Anwendungsfall',
	'tool.pdf-viewer.use_case.2': 'PDF-Anwendungsfall',
	'tool.pdf-viewer.use_case.3': 'PDF-Anwendungsfall',
	'tool.pdf-to-text.display_name': 'PDF-Tool',
	'tool.pdf-to-text.tagline': 'Lokale PDF-Verarbeitung',
	'tool.pdf-to-text.description': 'Diese PDF-Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-to-text.primary_keyword': 'pdf tool',
	'tool.pdf-to-text.meta_title': 'PDF-Tool - fmtly.dev',
	'tool.pdf-to-text.meta_description': 'Nutzen Sie dieses PDF-Tool lokal im Browser.',
	'tool.pdf-to-text.operation': 'Starten',
	'tool.pdf-to-text.faq.0.question': 'Haeufige Frage',
	'tool.pdf-to-text.faq.0.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-to-text.faq.1.question': 'Haeufige Frage',
	'tool.pdf-to-text.faq.1.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-to-text.faq.2.question': 'Haeufige Frage',
	'tool.pdf-to-text.faq.2.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-to-text.faq.3.question': 'Haeufige Frage',
	'tool.pdf-to-text.faq.3.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-to-text.use_case.0': 'PDF-Anwendungsfall',
	'tool.pdf-to-text.use_case.1': 'PDF-Anwendungsfall',
	'tool.pdf-to-text.use_case.2': 'PDF-Anwendungsfall',
	'tool.pdf-to-text.use_case.3': 'PDF-Anwendungsfall',
	'tool.pdf-merge.display_name': 'PDF-Tool',
	'tool.pdf-merge.tagline': 'Lokale PDF-Verarbeitung',
	'tool.pdf-merge.description': 'Diese PDF-Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-merge.primary_keyword': 'pdf tool',
	'tool.pdf-merge.meta_title': 'PDF-Tool - fmtly.dev',
	'tool.pdf-merge.meta_description': 'Nutzen Sie dieses PDF-Tool lokal im Browser.',
	'tool.pdf-merge.operation': 'Starten',
	'tool.pdf-merge.faq.0.question': 'Haeufige Frage',
	'tool.pdf-merge.faq.0.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-merge.faq.1.question': 'Haeufige Frage',
	'tool.pdf-merge.faq.1.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-merge.faq.2.question': 'Haeufige Frage',
	'tool.pdf-merge.faq.2.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-merge.faq.3.question': 'Haeufige Frage',
	'tool.pdf-merge.faq.3.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-merge.use_case.0': 'PDF-Anwendungsfall',
	'tool.pdf-merge.use_case.1': 'PDF-Anwendungsfall',
	'tool.pdf-merge.use_case.2': 'PDF-Anwendungsfall',
	'tool.pdf-merge.use_case.3': 'PDF-Anwendungsfall',
	'tool.pdf-split.display_name': 'PDF-Tool',
	'tool.pdf-split.tagline': 'Lokale PDF-Verarbeitung',
	'tool.pdf-split.description': 'Diese PDF-Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-split.primary_keyword': 'pdf tool',
	'tool.pdf-split.meta_title': 'PDF-Tool - fmtly.dev',
	'tool.pdf-split.meta_description': 'Nutzen Sie dieses PDF-Tool lokal im Browser.',
	'tool.pdf-split.operation': 'Starten',
	'tool.pdf-split.faq.0.question': 'Haeufige Frage',
	'tool.pdf-split.faq.0.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-split.faq.1.question': 'Haeufige Frage',
	'tool.pdf-split.faq.1.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-split.faq.2.question': 'Haeufige Frage',
	'tool.pdf-split.faq.2.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-split.faq.3.question': 'Haeufige Frage',
	'tool.pdf-split.faq.3.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-split.use_case.0': 'PDF-Anwendungsfall',
	'tool.pdf-split.use_case.1': 'PDF-Anwendungsfall',
	'tool.pdf-split.use_case.2': 'PDF-Anwendungsfall',
	'tool.pdf-split.use_case.3': 'PDF-Anwendungsfall',
	'tool.pdf-page-extractor.display_name': 'PDF-Tool',
	'tool.pdf-page-extractor.tagline': 'Lokale PDF-Verarbeitung',
	'tool.pdf-page-extractor.description': 'Diese PDF-Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-page-extractor.primary_keyword': 'pdf tool',
	'tool.pdf-page-extractor.meta_title': 'PDF-Tool - fmtly.dev',
	'tool.pdf-page-extractor.meta_description': 'Nutzen Sie dieses PDF-Tool lokal im Browser.',
	'tool.pdf-page-extractor.operation': 'Starten',
	'tool.pdf-page-extractor.faq.0.question': 'Haeufige Frage',
	'tool.pdf-page-extractor.faq.0.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-page-extractor.faq.1.question': 'Haeufige Frage',
	'tool.pdf-page-extractor.faq.1.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-page-extractor.faq.2.question': 'Haeufige Frage',
	'tool.pdf-page-extractor.faq.2.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-page-extractor.faq.3.question': 'Haeufige Frage',
	'tool.pdf-page-extractor.faq.3.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-page-extractor.use_case.0': 'PDF-Anwendungsfall',
	'tool.pdf-page-extractor.use_case.1': 'PDF-Anwendungsfall',
	'tool.pdf-page-extractor.use_case.2': 'PDF-Anwendungsfall',
	'tool.pdf-page-extractor.use_case.3': 'PDF-Anwendungsfall',
	'tool.pdf-metadata-viewer.display_name': 'PDF-Tool',
	'tool.pdf-metadata-viewer.tagline': 'Lokale PDF-Verarbeitung',
	'tool.pdf-metadata-viewer.description': 'Diese PDF-Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-metadata-viewer.primary_keyword': 'pdf tool',
	'tool.pdf-metadata-viewer.meta_title': 'PDF-Tool - fmtly.dev',
	'tool.pdf-metadata-viewer.meta_description': 'Nutzen Sie dieses PDF-Tool lokal im Browser.',
	'tool.pdf-metadata-viewer.operation': 'Starten',
	'tool.pdf-metadata-viewer.faq.0.question': 'Haeufige Frage',
	'tool.pdf-metadata-viewer.faq.0.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-metadata-viewer.faq.1.question': 'Haeufige Frage',
	'tool.pdf-metadata-viewer.faq.1.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-metadata-viewer.faq.2.question': 'Haeufige Frage',
	'tool.pdf-metadata-viewer.faq.2.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-metadata-viewer.faq.3.question': 'Haeufige Frage',
	'tool.pdf-metadata-viewer.faq.3.answer': 'Die Verarbeitung erfolgt lokal im Browser.',
	'tool.pdf-metadata-viewer.use_case.0': 'PDF-Anwendungsfall',
	'tool.pdf-metadata-viewer.use_case.1': 'PDF-Anwendungsfall',
	'tool.pdf-metadata-viewer.use_case.2': 'PDF-Anwendungsfall',
	'tool.pdf-metadata-viewer.use_case.3': 'PDF-Anwendungsfall',
	'ui.pdf.select_file': 'PDF auswaehlen',
	'ui.pdf.select_file_first': 'Waehlen Sie zuerst eine PDF-Datei',
	'ui.pdf.worker_used': 'Worker',
	'ui.pdf.bytes': 'Bytes',
	'ui.pdf.page': 'Seite',
	'ui.pdf.page_ranges_placeholder': 'z. B. 1,3-5',
	'ui.pdf.viewer.loaded': 'PDF geladen',
	'ui.pdf.viewer.error': 'PDF konnte nicht geoeffnet werden',
	'ui.pdf.viewer.render_error': 'Seite konnte nicht gerendert werden',
	'ui.pdf.viewer.fit_width_error': 'Seite konnte nicht auf Breite angepasst werden',
	'ui.pdf.viewer.page': 'Seite',
	'ui.pdf.viewer.fit_width': 'Auf Breite anpassen',
	'ui.pdf.viewer.reset_zoom': 'Zoom zuruecksetzen',
	'ui.pdf.viewer.empty': 'PDF hochladen um Seiten vorzuschauen',
	'ui.pdf.to_text.extract': 'Text extrahieren',
	'ui.pdf.to_text.done': 'Text extrahiert',
	'ui.pdf.to_text.error': 'Text konnte nicht extrahiert werden',
	'ui.pdf.to_text.empty': 'Kein Text zum Herunterladen',
	'ui.pdf.to_text.empty_hint': 'PDF hochladen und Text seitenweise extrahieren',
	'ui.pdf.to_text.no_output': 'Noch kein extrahierter Text',
	'ui.pdf.merge.select_files': 'PDF-Dateien auswaehlen',
	'ui.pdf.merge.select_more': 'Mindestens zwei PDF-Dateien auswaehlen',
	'ui.pdf.merge.run': 'Zusammenfuegen',
	'ui.pdf.merge.done': 'PDF-Dateien zusammengefuegt',
	'ui.pdf.merge.error': 'PDFs konnten nicht zusammengefuegt werden',
	'ui.pdf.merge.no_output': 'Kein zusammengefuegtes PDF zum Download',
	'ui.pdf.merge.files_selected': 'Dateien ausgewaehlt',
	'ui.pdf.merge.empty': 'PDF-Dateien zum Zusammenfuegen hinzufuegen',
	'ui.pdf.split.run': 'Teilen',
	'ui.pdf.split.done': 'PDF-Teilung abgeschlossen',
	'ui.pdf.split.error': 'PDF konnte nicht geteilt werden',
	'ui.pdf.split.empty_hint': 'Eine PDF hochladen und Seitenbereiche angeben',
	'ui.pdf.split.no_output': 'Keine Dateien erzeugt',
	'ui.pdf.extract.run': 'Seiten extrahieren',
	'ui.pdf.extract.done': 'Seiten extrahiert',
	'ui.pdf.extract.error': 'Seiten konnten nicht extrahiert werden',
	'ui.pdf.extract.no_output': 'Kein Ausgabe-PDF zum Download',
	'ui.pdf.extract.empty_hint': 'Eine PDF hochladen und Seitenbereiche waehlen',
	'ui.pdf.extract.ready': 'Ausgabe-PDF ist bereit',
	'ui.pdf.metadata.run': 'Metadaten lesen',
	'ui.pdf.metadata.done': 'Metadaten geladen',
	'ui.pdf.metadata.error': 'Metadaten konnten nicht gelesen werden',
	'ui.pdf.metadata.empty_hint': 'PDF hochladen um Metadaten zu pruefen',
	'ui.pdf.metadata.no_output': 'Keine Metadaten geladen',
	'ui.pdf.metadata.title': 'Titel',
	'ui.pdf.metadata.author': 'Autor',
	'ui.pdf.metadata.subject': 'Betreff',
	'ui.pdf.metadata.keywords': 'Schluesselwoerter',
	'ui.pdf.metadata.creator': 'Ersteller',
	'ui.pdf.metadata.producer': 'Produzent',
	'ui.pdf.metadata.creation_date': 'Erstellungsdatum',
	'ui.pdf.metadata.modification_date': 'Aenderungsdatum',
	'ui.pdf.metadata.page_count': 'Seitenanzahl',
	'ui.pdf.metadata.file_size': 'Dateigroesse (Bytes)',

	// Missing keys from English
	'ui.actions.up': 'ui.actions.up',
	'ui.actions.down': 'ui.actions.down',
	'ui.actions.remove': 'ui.actions.remove',
	'ui.pdf.upload.aria': 'ui.pdf.upload.aria',
	'ui.pdf.upload.drop_title': 'ui.pdf.upload.drop_title',
	'ui.pdf.upload.drop_hint': 'ui.pdf.upload.drop_hint',
	'ui.pdf.upload.browse': 'ui.pdf.upload.browse',
	'ui.pdf.ranges_label': 'ui.pdf.ranges_label',
	'ui.pdf.viewer.hero_title': 'ui.pdf.viewer.hero_title',
	'ui.pdf.viewer.hero_subtitle': 'ui.pdf.viewer.hero_subtitle',
	'ui.pdf.viewer.badge_local': 'ui.pdf.viewer.badge_local',
	'ui.pdf.viewer.pages_word': 'ui.pdf.viewer.pages_word',
	'ui.pdf.viewer.loading': 'ui.pdf.viewer.loading',
	'ui.pdf.viewer.thumbnails_aria': 'ui.pdf.viewer.thumbnails_aria',
	'ui.pdf.viewer.page_list_aria': 'ui.pdf.viewer.page_list_aria',
	'ui.pdf.viewer.page_n': 'ui.pdf.viewer.page_n',
	'ui.pdf.to_text.hero_title': 'ui.pdf.to_text.hero_title',
	'ui.pdf.to_text.hero_subtitle': 'ui.pdf.to_text.hero_subtitle',
	'ui.pdf.to_text.upload_title': 'ui.pdf.to_text.upload_title',
	'ui.pdf.to_text.upload_hint': 'ui.pdf.to_text.upload_hint',
	'ui.pdf.merge.drop_hint': 'ui.pdf.merge.drop_hint',
	'ui.pdf.merge.drop_more': 'ui.pdf.merge.drop_more',
	'ui.pdf.merge.reorder_drag': 'ui.pdf.merge.reorder_drag',
	'ui.pdf.split.hero_title': 'ui.pdf.split.hero_title',
	'ui.pdf.split.hero_subtitle': 'ui.pdf.split.hero_subtitle',
	'ui.pdf.split.upload_title': 'ui.pdf.split.upload_title',
	'ui.pdf.split.upload_hint': 'ui.pdf.split.upload_hint',
	'ui.pdf.extract.hero_title': 'ui.pdf.extract.hero_title',
	'ui.pdf.extract.hero_subtitle': 'ui.pdf.extract.hero_subtitle',
	'ui.pdf.extract.upload_title': 'ui.pdf.extract.upload_title',
	'ui.pdf.extract.upload_hint': 'ui.pdf.extract.upload_hint',
	'ui.pdf.metadata.hero_title': 'ui.pdf.metadata.hero_title',
	'ui.pdf.metadata.hero_subtitle': 'ui.pdf.metadata.hero_subtitle',
	'ui.pdf.metadata.upload_title': 'ui.pdf.metadata.upload_title',
	'ui.pdf.metadata.upload_hint': 'ui.pdf.metadata.upload_hint',

	// Missing keys from English
	'ui.pdf.upload.pill_private': 'ui.pdf.upload.pill_private',
	'ui.pdf.upload.pill_instant': 'ui.pdf.upload.pill_instant',
	'ui.pdf.upload.pill_local': 'ui.pdf.upload.pill_local',
	'ui.pdf.upload.keyboard_hint': 'ui.pdf.upload.keyboard_hint',
	'ui.pdf.viewer.thumbnails_heading': 'ui.pdf.viewer.thumbnails_heading',
	'ui.pdf.viewer.go_page': 'ui.pdf.viewer.go_page',
	'ui.pdf.viewer.zoom_slider': 'ui.pdf.viewer.zoom_slider',
	'ui.pdf.viewer.toolbar_pages': 'ui.pdf.viewer.toolbar_pages',
	'ui.pdf.viewer.toolbar_zoom': 'ui.pdf.viewer.toolbar_zoom',
	'ui.pdf.merge.hero_title': 'ui.pdf.merge.hero_title',
	'ui.pdf.merge.hero_subtitle': 'ui.pdf.merge.hero_subtitle',

	// Missing keys from English
	'ui.pdf.ranges.help': 'ui.pdf.ranges.help',
	'ui.pdf.ranges.valid_summary': 'ui.pdf.ranges.valid_summary',
	'ui.pdf.ranges.document_pages': 'ui.pdf.ranges.document_pages',
	'ui.pdf.ranges.err_empty': 'ui.pdf.ranges.err_empty',
	'ui.pdf.ranges.err_no_pdf_pages': 'ui.pdf.ranges.err_no_pdf_pages',
	'ui.pdf.ranges.err_ambiguous_hyphen': 'ui.pdf.ranges.err_ambiguous_hyphen',
	'ui.pdf.ranges.err_invalid_number': 'ui.pdf.ranges.err_invalid_number',
	'ui.pdf.ranges.err_range_out_of_bounds': 'ui.pdf.ranges.err_range_out_of_bounds',
	'ui.pdf.ranges.err_invalid_range_bounds': 'ui.pdf.ranges.err_invalid_range_bounds',
	'ui.pdf.error.load_failed': 'ui.pdf.error.load_failed',

	// Missing keys from English
	'ui.pdf.upload.input_aria': 'ui.pdf.upload.input_aria',
	'ui.pdf.upload.input_aria_multiple': 'ui.pdf.upload.input_aria_multiple',
	'ui.pdf.split.use_cases_title': 'ui.pdf.split.use_cases_title',
	'ui.pdf.split.use_case.0': 'ui.pdf.split.use_case.0',
	'ui.pdf.split.use_case.1': 'ui.pdf.split.use_case.1',
	'ui.pdf.split.use_case.2': 'ui.pdf.split.use_case.2',
	'ui.pdf.split.use_case.3': 'ui.pdf.split.use_case.3',

	// Missing keys from English
	'ui.pdf.merge.merge_hint':
		'1. Reihenfolge prüfen · 2. Zusammenführen tippen · 3. Das zusammengeführte PDF unten herunterladen.',
	'ui.pdf.merge.ready_title': 'Zusammengeführte PDF ist bereit',
	'ui.pdf.merge.ready_subtitle': 'Ausgabegröße {size}. Wird als merged.pdf gespeichert.',
	'ui.pdf.merge.download_primary': 'Zusammengeführte PDF herunterladen',
	'ui.pdf.merge.download_locked':
		'Zuerst Zusammenführen — der Download-Button erscheint dann hier.',

	// Missing keys from English

	// Missing keys from English
	'tool.json-to-zod.display_name': 'tool.json-to-zod.display_name',
	'tool.json-to-zod.tagline': 'tool.json-to-zod.tagline',
	'tool.json-to-zod.description': 'tool.json-to-zod.description',
	'tool.json-to-zod.primary_keyword': 'tool.json-to-zod.primary_keyword',
	'tool.json-to-zod.meta_title': 'tool.json-to-zod.meta_title',
	'tool.json-to-zod.meta_description': 'tool.json-to-zod.meta_description',
	'tool.json-to-zod.operation': 'tool.json-to-zod.operation',
	'tool.json-to-zod.faq.0.question': 'tool.json-to-zod.faq.0.question',
	'tool.json-to-zod.faq.0.answer': 'tool.json-to-zod.faq.0.answer',
	'tool.json-to-zod.faq.1.question': 'tool.json-to-zod.faq.1.question',
	'tool.json-to-zod.faq.1.answer': 'tool.json-to-zod.faq.1.answer',
	'tool.json-to-zod.faq.2.question': 'tool.json-to-zod.faq.2.question',
	'tool.json-to-zod.faq.2.answer': 'tool.json-to-zod.faq.2.answer',
	'tool.json-to-zod.use_case.0': 'tool.json-to-zod.use_case.0',
	'tool.json-to-zod.use_case.1': 'tool.json-to-zod.use_case.1',
	'tool.json-to-zod.use_case.2': 'tool.json-to-zod.use_case.2',
	'tool.json-to-zod.use_case.3': 'tool.json-to-zod.use_case.3',
	'tool.json-ndjson.display_name': 'tool.json-ndjson.display_name',
	'tool.json-ndjson.tagline': 'tool.json-ndjson.tagline',
	'tool.json-ndjson.description': 'tool.json-ndjson.description',
	'tool.json-ndjson.primary_keyword': 'tool.json-ndjson.primary_keyword',
	'tool.json-ndjson.meta_title': 'tool.json-ndjson.meta_title',
	'tool.json-ndjson.meta_description': 'tool.json-ndjson.meta_description',
	'tool.json-ndjson.operation': 'tool.json-ndjson.operation',
	'tool.json-ndjson.faq.0.question': 'tool.json-ndjson.faq.0.question',
	'tool.json-ndjson.faq.0.answer': 'tool.json-ndjson.faq.0.answer',
	'tool.json-ndjson.faq.1.question': 'tool.json-ndjson.faq.1.question',
	'tool.json-ndjson.faq.1.answer': 'tool.json-ndjson.faq.1.answer',
	'tool.json-ndjson.use_case.0': 'tool.json-ndjson.use_case.0',
	'tool.json-ndjson.use_case.1': 'tool.json-ndjson.use_case.1',
	'tool.json-ndjson.use_case.2': 'tool.json-ndjson.use_case.2',
	'tool.json-from-protobuf.display_name': 'tool.json-from-protobuf.display_name',
	'tool.json-from-protobuf.tagline': 'tool.json-from-protobuf.tagline',
	'tool.json-from-protobuf.description': 'tool.json-from-protobuf.description',
	'tool.json-from-protobuf.primary_keyword': 'tool.json-from-protobuf.primary_keyword',
	'tool.json-from-protobuf.meta_title': 'tool.json-from-protobuf.meta_title',
	'tool.json-from-protobuf.meta_description': 'tool.json-from-protobuf.meta_description',
	'tool.json-from-protobuf.operation': 'tool.json-from-protobuf.operation',
	'tool.json-from-protobuf.faq.0.question': 'tool.json-from-protobuf.faq.0.question',
	'tool.json-from-protobuf.faq.0.answer': 'tool.json-from-protobuf.faq.0.answer',
	'tool.json-from-protobuf.faq.1.question': 'tool.json-from-protobuf.faq.1.question',
	'tool.json-from-protobuf.faq.1.answer': 'tool.json-from-protobuf.faq.1.answer',
	'tool.json-from-protobuf.faq.2.question': 'tool.json-from-protobuf.faq.2.question',
	'tool.json-from-protobuf.faq.2.answer': 'tool.json-from-protobuf.faq.2.answer',
	'tool.json-from-protobuf.use_case.0': 'tool.json-from-protobuf.use_case.0',
	'tool.json-from-protobuf.use_case.1': 'tool.json-from-protobuf.use_case.1',
	'tool.json-from-protobuf.use_case.2': 'tool.json-from-protobuf.use_case.2',
	'tool.yaml-resolve-anchors.display_name': 'tool.yaml-resolve-anchors.display_name',
	'tool.yaml-resolve-anchors.tagline': 'tool.yaml-resolve-anchors.tagline',
	'tool.yaml-resolve-anchors.description': 'tool.yaml-resolve-anchors.description',
	'tool.yaml-resolve-anchors.primary_keyword': 'tool.yaml-resolve-anchors.primary_keyword',
	'tool.yaml-resolve-anchors.meta_title': 'tool.yaml-resolve-anchors.meta_title',
	'tool.yaml-resolve-anchors.meta_description': 'tool.yaml-resolve-anchors.meta_description',
	'tool.yaml-resolve-anchors.operation': 'tool.yaml-resolve-anchors.operation',
	'tool.yaml-resolve-anchors.faq.0.question': 'tool.yaml-resolve-anchors.faq.0.question',
	'tool.yaml-resolve-anchors.faq.0.answer': 'tool.yaml-resolve-anchors.faq.0.answer',
	'tool.yaml-resolve-anchors.faq.1.question': 'tool.yaml-resolve-anchors.faq.1.question',
	'tool.yaml-resolve-anchors.faq.1.answer': 'tool.yaml-resolve-anchors.faq.1.answer',
	'tool.yaml-resolve-anchors.use_case.0': 'tool.yaml-resolve-anchors.use_case.0',
	'tool.yaml-resolve-anchors.use_case.1': 'tool.yaml-resolve-anchors.use_case.1',
	'tool.yaml-resolve-anchors.use_case.2': 'tool.yaml-resolve-anchors.use_case.2',
	'tool.yaml-resolve-anchors.use_case.3': 'tool.yaml-resolve-anchors.use_case.3',
	'tool.yaml-split.display_name': 'tool.yaml-split.display_name',
	'tool.yaml-split.tagline': 'tool.yaml-split.tagline',
	'tool.yaml-split.description': 'tool.yaml-split.description',
	'tool.yaml-split.primary_keyword': 'tool.yaml-split.primary_keyword',
	'tool.yaml-split.meta_title': 'tool.yaml-split.meta_title',
	'tool.yaml-split.meta_description': 'tool.yaml-split.meta_description',
	'tool.yaml-split.operation': 'tool.yaml-split.operation',
	'tool.yaml-split.faq.0.question': 'tool.yaml-split.faq.0.question',
	'tool.yaml-split.faq.0.answer': 'tool.yaml-split.faq.0.answer',
	'tool.yaml-split.faq.1.question': 'tool.yaml-split.faq.1.question',
	'tool.yaml-split.faq.1.answer': 'tool.yaml-split.faq.1.answer',
	'tool.yaml-split.use_case.0': 'tool.yaml-split.use_case.0',
	'tool.yaml-split.use_case.1': 'tool.yaml-split.use_case.1',
	'tool.yaml-split.use_case.2': 'tool.yaml-split.use_case.2',
	'tool.xml-xsd-validate.display_name': 'tool.xml-xsd-validate.display_name',
	'tool.xml-xsd-validate.tagline': 'tool.xml-xsd-validate.tagline',
	'tool.xml-xsd-validate.description': 'tool.xml-xsd-validate.description',
	'tool.xml-xsd-validate.primary_keyword': 'tool.xml-xsd-validate.primary_keyword',
	'tool.xml-xsd-validate.meta_title': 'tool.xml-xsd-validate.meta_title',
	'tool.xml-xsd-validate.meta_description': 'tool.xml-xsd-validate.meta_description',
	'tool.xml-xsd-validate.operation': 'tool.xml-xsd-validate.operation',
	'tool.xml-xsd-validate.faq.0.question': 'tool.xml-xsd-validate.faq.0.question',
	'tool.xml-xsd-validate.faq.0.answer': 'tool.xml-xsd-validate.faq.0.answer',
	'tool.xml-xsd-validate.faq.1.question': 'tool.xml-xsd-validate.faq.1.question',
	'tool.xml-xsd-validate.faq.1.answer': 'tool.xml-xsd-validate.faq.1.answer',
	'tool.xml-xsd-validate.use_case.0': 'tool.xml-xsd-validate.use_case.0',
	'tool.xml-xsd-validate.use_case.1': 'tool.xml-xsd-validate.use_case.1',
	'tool.xml-xsd-validate.use_case.2': 'tool.xml-xsd-validate.use_case.2',
	'tool.csv-columns.display_name': 'tool.csv-columns.display_name',
	'tool.csv-columns.tagline': 'tool.csv-columns.tagline',
	'tool.csv-columns.description': 'tool.csv-columns.description',
	'tool.csv-columns.primary_keyword': 'tool.csv-columns.primary_keyword',
	'tool.csv-columns.meta_title': 'tool.csv-columns.meta_title',
	'tool.csv-columns.meta_description': 'tool.csv-columns.meta_description',
	'tool.csv-columns.operation': 'tool.csv-columns.operation',
	'tool.csv-columns.faq.0.question': 'tool.csv-columns.faq.0.question',
	'tool.csv-columns.faq.0.answer': 'tool.csv-columns.faq.0.answer',
	'tool.csv-columns.faq.1.question': 'tool.csv-columns.faq.1.question',
	'tool.csv-columns.faq.1.answer': 'tool.csv-columns.faq.1.answer',
	'tool.csv-columns.use_case.0': 'tool.csv-columns.use_case.0',
	'tool.csv-columns.use_case.1': 'tool.csv-columns.use_case.1',
	'tool.csv-columns.use_case.2': 'tool.csv-columns.use_case.2',
	'tool.csv-deduplicate.display_name': 'tool.csv-deduplicate.display_name',
	'tool.csv-deduplicate.tagline': 'tool.csv-deduplicate.tagline',
	'tool.csv-deduplicate.description': 'tool.csv-deduplicate.description',
	'tool.csv-deduplicate.primary_keyword': 'tool.csv-deduplicate.primary_keyword',
	'tool.csv-deduplicate.meta_title': 'tool.csv-deduplicate.meta_title',
	'tool.csv-deduplicate.meta_description': 'tool.csv-deduplicate.meta_description',
	'tool.csv-deduplicate.operation': 'tool.csv-deduplicate.operation',
	'tool.csv-deduplicate.faq.0.question': 'tool.csv-deduplicate.faq.0.question',
	'tool.csv-deduplicate.faq.0.answer': 'tool.csv-deduplicate.faq.0.answer',
	'tool.csv-deduplicate.faq.1.question': 'tool.csv-deduplicate.faq.1.question',
	'tool.csv-deduplicate.faq.1.answer': 'tool.csv-deduplicate.faq.1.answer',
	'tool.csv-deduplicate.use_case.0': 'tool.csv-deduplicate.use_case.0',
	'tool.csv-deduplicate.use_case.1': 'tool.csv-deduplicate.use_case.1',
	'tool.csv-deduplicate.use_case.2': 'tool.csv-deduplicate.use_case.2',
	'tool.ndjson.entries_title': 'tool.ndjson.entries_title',
	'tool.json-from-protobuf.message_type': 'tool.json-from-protobuf.message_type',
	'tool.json-from-protobuf.select_message_type': 'tool.json-from-protobuf.select_message_type',
	'tool.xml-xsd-validate.xml_label': 'tool.xml-xsd-validate.xml_label',
	'tool.xml-xsd-validate.xsd_label': 'tool.xml-xsd-validate.xsd_label',
	'tool.xml-xsd-validate.result_title': 'tool.xml-xsd-validate.result_title',
	'tool.xml-xsd-validate.empty_hint': 'tool.xml-xsd-validate.empty_hint',
	'tool.xml-xsd-validate.xml_well_formed_error': 'tool.xml-xsd-validate.xml_well_formed_error',
	'tool.xml-xsd-validate.valid': 'tool.xml-xsd-validate.valid',
	'tool.xml-xsd-validate.invalid': 'tool.xml-xsd-validate.invalid',
	'tool.xml-xsd-validate.warnings': 'tool.xml-xsd-validate.warnings',
	'tool.xml-xsd-validate.errors_title': 'tool.xml-xsd-validate.errors_title',
	'tool.xml-xsd-validate.warnings_title': 'tool.xml-xsd-validate.warnings_title',
	'tool.xml-xsd-validate.waiting_hint': 'tool.xml-xsd-validate.waiting_hint',

	// Missing keys from English
	'category.image.display_name': 'Bild',
	'category.image.description':
		'Bilder direkt im Browser skalieren, konvertieren und optimieren — ohne Upload.',
	'category.image.primary_keyword': 'bild tools',
	'tool.image-resizer.display_name': 'Bildgrößen-Änderer',
	'tool.image-resizer.tagline':
		'Bilder mit Seitenverhältnis, Prozentwerten oder festen Pixelmaßen skalieren',
	'tool.image-resizer.description':
		'Ändern Sie Bildgrößen lokal im Browser mit gesperrtem Seitenverhältnis, Prozent-Skalierung oder exakten Breite/Höhe-Werten. Unterstützt PNG, JPEG und WebP mit Qualitätssteuerung und Vorher/Nachher-Statistiken.',
	'tool.image-resizer.primary_keyword': 'bildgröße ändern',
	'tool.image-resizer.meta_title': 'Bildgröße online ändern — Image Resizer | fmtly.dev',
	'tool.image-resizer.meta_description':
		'Bilder direkt im Browser skalieren. Seitenverhältnis sperren, Format wählen, Qualität einstellen und die verkleinerte Datei sofort herunterladen.',
	'tool.image-resizer.operation': 'Skalieren',
	'tool.image-resizer.faq.0.question': 'Verlässt mein Bild den Browser?',
	'tool.image-resizer.faq.0.answer':
		'Nein. Die gesamte Verarbeitung läuft lokal in Ihrem Browser, ohne Server-Upload.',
	'tool.image-resizer.faq.1.question': 'Kann ich das Seitenverhältnis beibehalten?',
	'tool.image-resizer.faq.1.answer':
		'Ja. Mit aktivierter Verhältnis-Sperre werden Breite und Höhe proportional angepasst.',
	'tool.image-resizer.faq.2.question': 'Welche Ausgabeformate werden unterstützt?',
	'tool.image-resizer.faq.2.answer':
		'PNG, JPEG und WebP werden unterstützt. Auf Wunsch können Sie auch das Originalformat beibehalten.',
	'tool.image-resizer.faq.3.question': 'Was passiert bei großen Bildern?',
	'tool.image-resizer.faq.3.answer':
		'Ab einer Eingabegröße über 500KB wird die Verarbeitung in einen Web Worker ausgelagert, damit die Oberfläche flüssig bleibt.',
	'tool.image-resizer.use_case.0': 'Produktbilder für Webseiten ohne Qualitätsverlust anpassen',
	'tool.image-resizer.use_case.1': 'Screenshots für Dokumentation auf exakte Pixelmaße skalieren',
	'tool.image-resizer.use_case.2':
		'Dateigröße durch kleinere Abmessungen und Qualitätseinstellung reduzieren',
	'tool.image-resizer.use_case.3':
		'Bilder als PNG, JPEG oder WebP für verschiedene Zielkanäle exportieren',
	'ui.image_resizer.drop_title': 'Bild hier ablegen oder auswählen',
	'ui.image_resizer.drop_hint':
		'Ihre Datei bleibt lokal im Browser. Nichts wird an einen Server gesendet.',
	'ui.image_resizer.browse': 'Bild auswählen',
	'ui.image_resizer.input_aria': 'Bilddatei auswählen',
	'ui.image_resizer.no_file': 'Noch kein Bild geladen',
	'ui.image_resizer.file_loaded': '{name} geladen',
	'ui.image_resizer.file_read_error': 'Bild konnte nicht geladen werden',
	'ui.image_resizer.preview_alt': 'Vorschau des skalierten Bildes',
	'ui.image_resizer.controls_title': 'Skalierungsoptionen',
	'ui.image_resizer.width_label': 'Breite',
	'ui.image_resizer.height_label': 'Höhe',
	'ui.image_resizer.scale_label': 'Skalierung (%)',
	'ui.image_resizer.lock_ratio': 'Seitenverhältnis sperren',
	'ui.image_resizer.keep_format': 'Originalformat beibehalten',
	'ui.image_resizer.output_format': 'Ausgabeformat',
	'ui.image_resizer.quality_label': 'Qualität',
	'ui.image_resizer.worker_active':
		'Große Bilddatei erkannt (>{size}). Verarbeitung läuft in einem Web Worker.',
	'ui.image_resizer.worker_badge': 'Worker',
	'ui.image_resizer.worker_used': 'Ausgelagert verarbeitet',
	'ui.image_resizer.worker_failed':
		'Worker-Verarbeitung fehlgeschlagen. Fallback auf Haupt-Thread.',
	'ui.image_resizer.resize_failed': 'Bild konnte nicht skaliert werden',
	'ui.image_resizer.output_title': 'Ausgabevorschau',
	'ui.image_resizer.output_placeholder': 'Das skalierte Bild erscheint hier',
	'ui.image_resizer.processing': 'Wird skaliert...',
	'ui.image_resizer.copy_image': 'Bild kopieren',
	'ui.image_resizer.download_image': 'Bild herunterladen',
	'ui.image_resizer.clear': 'Zurücksetzen',
	'ui.image_resizer.copy_empty': 'Kein Bild zum Kopieren vorhanden',
	'ui.image_resizer.copy_success': 'Bild in Zwischenablage kopiert',
	'ui.image_resizer.copy_error': 'Kopieren fehlgeschlagen',
	'ui.image_resizer.download_empty': 'Kein Bild zum Herunterladen vorhanden',
	'ui.image_resizer.download_success': '{filename} heruntergeladen',
	'ui.image_resizer.download_error': 'Download fehlgeschlagen',
	'ui.image_resizer.clear_title': 'Geladenes Bild und Einstellungen zurücksetzen?',
	'ui.image_resizer.clear_description':
		'Dies entfernt das aktuelle Bild, die Vorschau und alle gewählten Werte.',
	'ui.image_resizer.input_cleared': 'Bild und Einstellungen zurückgesetzt',
	'ui.image_resizer.stat.input_dimensions': 'Eingabegröße',
	'ui.image_resizer.stat.input_size': 'Eingabedatei',
	'ui.image_resizer.stat.output_dimensions': 'Ausgabegröße',
	'ui.image_resizer.stat.output_size': 'Ausgabedatei',
	'ui.image_resizer.stat.reduction': 'Dateigrößen-Ersparnis',
	'ui.image_resizer.stat.reduction_helper': 'positiv = kleiner',
	'ui.image_resizer.placeholder_width': 'Breite',
	'ui.image_resizer.placeholder_height': 'Höhe',
	'ui.image_resizer.png': 'PNG',
	'ui.image_resizer.jpeg': 'JPEG',
	'ui.image_resizer.webp': 'WebP',
	'ui.image_resizer.source_status': '{size} · {width}×{height} px',
	'ui.image_resizer.output_status': '{size} · {width}×{height} px'
};

export default registryDe;

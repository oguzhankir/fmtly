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
	'category.css.display_name': 'CSS',
	'category.css.description':
		'Formatieren, minifizieren und optimieren Sie CSS-Stylesheets. Verschönern Sie komprimiertes CSS oder minifizieren Sie formatiertes CSS mit Optionen zur Sortierung von Eigenschaften.',
	'category.css.primary_keyword': 'css tools',
	'category.html.display_name': 'HTML',
	'category.html.description':
		'Formatieren, minifizieren und validieren Sie HTML-Markup. Verschönern Sie komprimiertes HTML oder entfernen Sie Leerzeichen für die Produktion.',
	'category.html.primary_keyword': 'html tools',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'Formatieren und minifizieren Sie JavaScript-Code. Verschönern Sie komprimierte Skripte oder erzeugen Sie eine minifizierte Ausgabe für schnellere Seitenladezeiten.',
	'category.js.primary_keyword': 'javascript tools',
	'category.encode.display_name': 'Encoder & Decoder',
	'category.encode.description':
		'Codieren und dekodieren Sie Base64, URLs, HTML-Entities und mehr. Alle Operationen werden sofort in Ihrem Browser ausgeführt – keine Datenübertragung an Server.',
	'category.encode.primary_keyword': 'encoder decoder tools',
	'category.escape.display_name': 'Escape-Tools',
	'category.escape.description':
		'Maskieren (Escape) und demaskieren Sie Zeichenfolgen für JSON, HTML, XML, URLs und Regex. Sicherer Umgang mit Sonderzeichen über verschiedene Formate hinweg.',
	'category.escape.primary_keyword': 'string escape tools',
	'category.diff.display_name': 'Diff & Vergleich',
	'category.diff.description':
		'Vergleichen Sie zwei Dateien oder Datenstrukturen nebeneinander. Markiert Hinzufügungen und Löschungen mit Unterstützung für JSON-, Text- und strukturierte Diff-Analysen.',
	'category.diff.primary_keyword': 'diff vergleich tools',
	'category.generate.display_name': 'Generatoren',
	'category.generate.description':
		'Generieren Sie Typdefinitionen, JSON-Schemas, Markdown-Tabellen, Testdaten und andere Entwickler-Utilities vollständig in Ihrem Browser.',
	'category.generate.primary_keyword': 'code generatoren',
	'category.text.display_name': 'Text & Strings',
	'category.text.description':
		'Formatieren, manipulieren, invertieren, sortieren und analysieren Sie Text und Zeichenfolgen. Inklusive Wortzähler, Lesbarkeits-Scores und Markdown-Konvertierungen.',
	'category.text.primary_keyword': 'text tools',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formatieren, validieren und konvertieren Sie TOML-Dateien. Konvertieren Sie TOML sicher in JSON und YAML.',
	'category.toml.primary_keyword': 'toml tools',
	'category.number.display_name': 'Zahlen & Mathematik',
	'category.number.description':
		'Formatieren Sie Zahlen, berechnen Sie Prozentsätze, nutzen Sie wissenschaftliche Notation und konvertieren Sie Werte sofort zwischen Zahlensystemen.',
	'category.number.primary_keyword': 'zahlen tools',
	'category.color.display_name': 'Farb-Tools',
	'category.color.description':
		'Prüfen Sie Kontrastverhältnisse, erstellen Sie Farbpaletten, generieren Sie CSS-Gradienten und simulieren Sie Farbenblindheit.',
	'category.color.primary_keyword': 'farb tools',
	'category.crypto.display_name': 'Krypto & Sicherheit',
	'category.crypto.description':
		'Generieren Sie HMAC-Signaturen, analysieren Sie Passwortstärken, erzeugen Sie sichere Zufallsstrings und generieren Sie ULIDs – alles lokal über die Web Crypto API.',
	'category.crypto.primary_keyword': 'krypto sicherheit tools',
	'category.web.display_name': 'Web & Netzwerk',
	'category.web.description':
		'Analysieren Sie URLs, dekodieren Sie User-Agent-Strings, inspizieren Sie CORS-Header, schlagen Sie MIME-Typen nach, lokalisieren Sie IPs und fragen Sie DNS-Records ab.',
	'category.web.primary_keyword': 'web tools online',
	'category.code.display_name': 'Code-Formatierer',
	'category.code.description':
		'Formatieren Sie CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL und Markdown vollständig lokal. Konvertieren Sie cURL-Befehle in fetch() oder Axios.',
	'category.code.primary_keyword': 'code formatierer online',
	'category.pdf.display_name': 'PDF-Tools',
	'category.pdf.description':
		'Betrachten Sie PDF-Dateien und extrahieren Sie Text – alles lokal in Ihrem Browser.',
	'category.pdf.primary_keyword': 'pdf tools online',
	'category.image.display_name': 'Bild-Tools',
	'category.image.description':
		'Größe ändern, konvertieren, komprimieren und kodieren Sie Bilder – alles lokal im Browser. Kein Upload, kein Server.',
	'category.image.primary_keyword': 'bild tools online',
	'category.file.display_name': 'Datei-Tools',
	'category.file.description':
		'Berechnen Sie Datei-Hashes und führen Sie Formatkonvertierungen zwischen Dateien durch.',
	'category.file.primary_keyword': 'datei tools online',
	'category.qr.display_name': 'QR & Barcode',
	'category.qr.description':
		'Generieren Sie anpassbare QR-Codes und dekodieren Sie diese aus Bildern – alles lokal in Ihrem Browser.',
	'category.qr.primary_keyword': 'qr code generator',
	'category.accessibility.display_name': 'Barrierefreiheit',
	'category.accessibility.description':
		'Testen Sie Farbkontraste, simulieren Sie Farbenblindheit und prüfen Sie WCAG-Schriftgrößen. Machen Sie Ihre Designs für jeden zugänglich.',
	'category.accessibility.primary_keyword': 'barrierefreiheit tools',

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

	'tool.csv-to-xml.display_name': 'CSV nach XML',
	'tool.csv-to-xml.tagline': 'CSV-Daten in das XML-Format konvertieren',
	'tool.csv-to-xml.description':
		'Konvertieren Sie CSV-Dateien in wohlgeformtes XML. Mappt Spaltenköpfe auf Elementnamen.',
	'tool.csv-to-xml.primary_keyword': 'csv nach xml',
	'tool.csv-to-xml.meta_title': 'CSV nach XML Konverter — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		'Konvertieren Sie CSV sofort in XML. Lokal und sicher im Browser.',
	'tool.csv-to-xml.operation': 'Konvertieren',

	'tool.csv-to-yaml.display_name': 'CSV nach YAML',
	'tool.csv-to-yaml.tagline': 'CSV-Daten in das YAML-Format konvertieren',
	'tool.csv-to-yaml.description':
		'Konvertieren Sie CSV-Dateien in YAML-Arrays. Mappt Spaltenköpfe auf YAML-Schlüssel.',
	'tool.csv-to-yaml.primary_keyword': 'csv nach yaml',
	'tool.csv-to-yaml.meta_title': 'CSV nach YAML Konverter — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		'Konvertieren Sie CSV sofort in YAML. Keine Datenübertragung erforderlich.',
	'tool.csv-to-yaml.operation': 'Konvertieren',

	'tool.csv-to-html.display_name': 'CSV nach HTML-Tabelle',
	'tool.csv-to-html.tagline': 'CSV-Daten in eine HTML-Tabelle konvertieren',
	'tool.csv-to-html.description':
		'Konvertieren Sie CSV-Dateien in formatierte HTML-Tabellen. Nutzt die erste Zeile als Header.',
	'tool.csv-to-html.primary_keyword': 'csv nach html tabelle',
	'tool.csv-to-html.meta_title': 'CSV nach HTML Tabellen Konverter — fmtly.dev',
	'tool.csv-to-html.meta_description':
		'Konvertieren Sie CSV sofort in eine HTML-Tabelle. Ideal für Web-Präsentationen.',
	'tool.csv-to-html.operation': 'Konvertieren',

	'tool.csv-formatter.display_name': 'CSV-Formatierer',
	'tool.csv-formatter.tagline': 'CSV-Daten formatieren und normalisieren',
	'tool.csv-formatter.description':
		'Reinigen und formatieren Sie CSV-Daten mit einheitlichen Trennzeichen und Zeilenenden.',
	'tool.csv-formatter.primary_keyword': 'csv formatierer',
	'tool.csv-formatter.meta_title': 'CSV-Formatierer — fmtly.dev',
	'tool.csv-formatter.meta_description': 'Formatieren und reinigen Sie CSV-Daten lokal im Browser.',
	'tool.csv-formatter.operation': 'Formatieren',

	'tool.csv-validator.display_name': 'CSV-Validator',
	'tool.csv-validator.tagline': 'CSV-Struktur und Syntax validieren',
	'tool.csv-validator.description':
		'Validieren Sie CSV-Dateien auf konsistente Spaltenanzahl und korrekte Kodierung.',
	'tool.csv-validator.primary_keyword': 'csv validator',
	'tool.csv-validator.meta_title': 'CSV-Validator — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Validieren Sie CSV im Browser. Erkennt Strukturfehler mit Zeilenangaben.',
	'tool.csv-validator.operation': 'Validieren',

	// ── Text Tools ──────────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Wortzähler',
	'tool.text-word-counter.tagline': 'Wörter, Zeichen und Sätze im Text zählen',
	'tool.text-word-counter.description':
		'Zählen Sie Wörter, Zeichen, Sätze und Absätze. Zeigt geschätzte Lesezeit und durchschnittliche Wortlänge.',
	'tool.text-word-counter.primary_keyword': 'wortzähler',
	'tool.text-word-counter.meta_title': 'Wortzähler — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Zählen Sie Wörter, Zeichen und Sätze im Browser. Inklusive Lesezeit-Schätzung.',
	'tool.text-word-counter.operation': 'Zählen',

	'tool.text-readability.display_name': 'Lesbarkeits-Analyse',
	'tool.text-readability.tagline': 'Lesbarkeits-Scores von Texten messen',
	'tool.text-readability.description':
		'Berechnet Flesch-Kincaid und andere Scores, um Texte für Ihre Zielgruppe zu optimieren.',
	'tool.text-readability.primary_keyword': 'lesbarkeits analyse',
	'tool.text-readability.meta_title': 'Lesbarkeits-Analyse — fmtly.dev',
	'tool.text-readability.meta_description':
		'Messen Sie die Lesbarkeit von Texten im Browser mit wissenschaftlichen Scores.',
	'tool.text-readability.operation': 'Analysieren',

	'tool.text-line-sorter.display_name': 'Zeilensortierer',
	'tool.text-line-sorter.tagline': 'Textzeilen alphabetisch oder nach Länge sortieren',
	'tool.text-line-sorter.description':
		'Sortieren Sie Zeilen alphabetisch, numerisch oder nach Länge. Unterstützt auf- und absteigende Ordnung.',
	'tool.text-line-sorter.primary_keyword': 'zeilensortierer',
	'tool.text-line-sorter.meta_title': 'Zeilensortierer — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Sortieren Sie Textzeilen im Browser. Unterstützt verschiedene Sortieralgorithmen.',
	'tool.text-line-sorter.operation': 'Sortieren',

	'tool.text-deduplicate.display_name': 'Duplikat-Entferner',
	'tool.text-deduplicate.tagline': 'Doppelte Zeilen aus Text entfernen',
	'tool.text-deduplicate.description':
		'Entfernen Sie Duplikate aus beliebigem Text. Unterstützt Case-Sensitivity und bewahrt die Originalreihenfolge.',
	'tool.text-deduplicate.primary_keyword': 'duplikat entferner',
	'tool.text-deduplicate.meta_title': 'Duplikat-Entferner — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Entfernen Sie doppelte Zeilen aus Texten im Browser. Schnell und lokal.',
	'tool.text-deduplicate.operation': 'Duplikate entfernen',

	'tool.text-whitespace.display_name': 'Leerzeichen-Reiniger',
	'tool.text-whitespace.tagline': 'Zusätzliche Leerzeichen entfernen und Abstände normalisieren',
	'tool.text-whitespace.description':
		'Entfernen Sie überflüssige Leerzeichen, Tabs und Leerzeilen aus Texten.',
	'tool.text-whitespace.primary_keyword': 'leerzeichen reiniger',
	'tool.text-whitespace.meta_title': 'Leerzeichen-Reiniger — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Entfernen Sie zusätzliche Leerzeichen aus Texten im Browser. Normalisiert Abstände.',
	'tool.text-whitespace.operation': 'Reinigen',

	'tool.text-markdown-to-html.display_name': 'Markdown nach HTML',
	'tool.text-markdown-to-html.tagline': 'Markdown in HTML konvertieren',
	'tool.text-markdown-to-html.description':
		'Konvertieren Sie Markdown-Text in HTML. Unterstützt Überschriften, Listen, Tabellen und Codeblöcke.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown nach html',
	'tool.text-markdown-to-html.meta_title': 'Markdown nach HTML Konverter — fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Konvertieren Sie Markdown sofort in HTML. Unterstützt alle CommonMark-Features.',
	'tool.text-markdown-to-html.operation': 'Konvertieren',

	'tool.text-html-to-markdown.display_name': 'HTML nach Markdown',
	'tool.text-html-to-markdown.tagline': 'HTML in Markdown konvertieren',
	'tool.text-html-to-markdown.description':
		'Konvertieren Sie HTML in sauberes Markdown. Verarbeitet Überschriften, Listen und Formatierungen.',
	'tool.text-html-to-markdown.primary_keyword': 'html nach markdown',
	'tool.text-html-to-markdown.meta_title': 'HTML nach Markdown Konverter — fmtly.dev',
	'tool.text-html-to-markdown.meta_description':
		'Konvertieren Sie HTML sofort in Markdown im Browser.',
	'tool.text-html-to-markdown.operation': 'Konvertieren',

	'tool.text-reverser.display_name': 'Text-Invertierer',
	'tool.text-reverser.tagline': 'Text, Wörter oder Zeilen umkehren',
	'tool.text-reverser.description':
		'Kehren Sie Text zeichenweise, wortweise oder zeilenweise um. Bidirektional nutzbar.',
	'tool.text-reverser.primary_keyword': 'text invertierer',
	'tool.text-reverser.meta_title': 'Text-Invertierer — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Kehren Sie Texte sofort im Browser um. Funktioniert für Zeichen, Wörter oder Zeilen.',
	'tool.text-reverser.operation': 'Umkehren',

	// ── Code Tools ──────────────────────────────────────────────────────────
	'tool.code-css.display_name': 'CSS-Formatierer',
	'tool.code-css.tagline': 'CSS-Stylesheets formatieren und verschönern',
	'tool.code-css.description':
		'Formatieren Sie CSS mit einheitlicher Einrückung. Unterstützt Prettier-Stil mit konfigurierbarer Breite.',
	'tool.code-css.primary_keyword': 'css formatierer',
	'tool.code-css.meta_title': 'CSS-Formatierer & Verschönerer — fmtly.dev',
	'tool.code-css.meta_description':
		'Formatieren und verschönern Sie CSS im Browser. Konfigurierbare Einrückung lokal.',
	'tool.code-css.operation': 'Formatieren',

	'tool.code-scss.display_name': 'SCSS-Formatierer',
	'tool.code-scss.tagline': 'SCSS-Stylesheets formatieren und verschönern',
	'tool.code-scss.description':
		'Formatieren Sie SCSS-Dateien mit einheitlicher Einrückung. Unterstützt Variablen und Nesting.',
	'tool.code-scss.primary_keyword': 'scss formatierer',
	'tool.code-scss.meta_title': 'SCSS-Formatierer — fmtly.dev',
	'tool.code-scss.meta_description':
		'Formatieren und verschönern Sie SCSS im Browser. Unterstützt alle SCSS-Syntaxen.',
	'tool.code-scss.operation': 'Formatieren',

	'tool.code-less.display_name': 'LESS-Formatierer',
	'tool.code-less.tagline': 'LESS-Stylesheets formatieren und verschönern',
	'tool.code-less.description':
		'Formatieren Sie LESS-Dateien mit einheitlicher Einrückung. Unterstützt Mixins und Nesting.',
	'tool.code-less.primary_keyword': 'less formatierer',
	'tool.code-less.meta_title': 'LESS-Formatierer — fmtly.dev',
	'tool.code-less.meta_description':
		'Formatieren und verschönern Sie LESS im Browser. Lokal und sicher.',
	'tool.code-less.operation': 'Formatieren',

	'tool.code-html.display_name': 'HTML-Formatierer',
	'tool.code-html.tagline': 'HTML-Markup formatieren und verschönern',
	'tool.code-html.description':
		'Formatieren Sie HTML mit korrekter Einrückung. Verarbeitet Attribute und eingebettetes CSS/JS.',
	'tool.code-html.primary_keyword': 'html formatierer',
	'tool.code-html.meta_title': 'HTML-Formatierer & Verschönerer — fmtly.dev',
	'tool.code-html.meta_description':
		'Formatieren und verschönern Sie HTML im Browser. Korrekte Tag-Verschachtelung lokal.',
	'tool.code-html.operation': 'Formatieren',

	'tool.code-javascript.display_name': 'JavaScript-Formatierer',
	'tool.code-javascript.tagline': 'JavaScript-Code formatieren und verschönern',
	'tool.code-javascript.description':
		'Formatieren Sie JavaScript mit Prettier-Stil. Unterstützt modernes ES2022+ und JSX.',
	'tool.code-javascript.primary_keyword': 'javascript formatierer',
	'tool.code-javascript.meta_title': 'JavaScript-Formatierer — fmtly.dev',
	'tool.code-javascript.meta_description':
		'Formatieren und verschönern Sie JavaScript im Browser. Unterstützt modernste Syntax.',
	'tool.code-javascript.operation': 'Formatieren',

	'tool.code-typescript.display_name': 'TypeScript-Formatierer',
	'tool.code-typescript.tagline': 'TypeScript-Code formatieren und verschönern',
	'tool.code-typescript.description':
		'Formatieren Sie TypeScript mit Prettier-Stil. Unterstützt Generics und Decorators.',
	'tool.code-typescript.primary_keyword': 'typescript formatierer',
	'tool.code-typescript.meta_title': 'TypeScript-Formatierer — fmtly.dev',
	'tool.code-typescript.meta_description':
		'Formatieren und verschönern Sie TypeScript im Browser. Alle TS-Features unterstützt.',
	'tool.code-typescript.operation': 'Formatieren',

	'tool.code-graphql.display_name': 'GraphQL-Formatierer',
	'tool.code-graphql.tagline': 'GraphQL-Schemas und Abfragen formatieren',
	'tool.code-graphql.description':
		'Formatieren Sie GraphQL-Schemas mit einheitlicher Einrückung. Unterstützt Queries und Mutations.',
	'tool.code-graphql.primary_keyword': 'graphql formatierer',
	'tool.code-graphql.meta_title': 'GraphQL-Formatierer — fmtly.dev',
	'tool.code-graphql.meta_description':
		'Formatieren und verschönern Sie GraphQL im Browser. Unterstützt SDL und Abfragen.',
	'tool.code-graphql.operation': 'Formatieren',

	'tool.code-markdown.display_name': 'Markdown-Formatierer',
	'tool.code-markdown.tagline': 'Markdown-Dokumente formatieren und normalisieren',
	'tool.code-markdown.description':
		'Formatieren Sie Markdown mit konsistenten Stilen. Normalisiert Abstände und Leerzeilen.',
	'tool.code-markdown.primary_keyword': 'markdown formatierer',
	'tool.code-markdown.meta_title': 'Markdown-Formatierer — fmtly.dev',
	'tool.code-markdown.meta_description':
		'Formatieren und normalisieren Sie Markdown im Browser. Ihre Daten verlassen das Gerät nie.',
	'tool.code-markdown.operation': 'Formatieren',

	'tool.code-curl-to-fetch.display_name': 'cURL nach Fetch',
	'tool.code-curl-to-fetch.tagline': 'cURL-Befehle in JavaScript fetch() konvertieren',
	'tool.code-curl-to-fetch.description':
		'Konvertieren Sie cURL-Befehle in native fetch()-Aufrufe. Verarbeitet Header und Auth.',
	'tool.code-curl-to-fetch.primary_keyword': 'curl nach fetch konverter',
	'tool.code-curl-to-fetch.meta_title': 'cURL nach Fetch Konverter — fmtly.dev',
	'tool.code-curl-to-fetch.meta_description':
		'Konvertieren Sie cURL-Befehle sofort in fetch(). Lokal im Browser ausgeführt.',
	'tool.code-curl-to-fetch.operation': 'Konvertieren',

	'tool.code-curl-to-axios.display_name': 'cURL nach Axios',
	'tool.code-curl-to-axios.tagline': 'cURL-Befehle in Axios-Anfragen konvertieren',
	'tool.code-curl-to-axios.description':
		'Konvertieren Sie cURL-Befehle in Axios-Aufrufe. Verarbeitet Header und Body-Daten.',
	'tool.code-curl-to-axios.primary_keyword': 'curl nach axios konverter',
	'tool.code-curl-to-axios.meta_title': 'cURL nach Axios Konverter — fmtly.dev',
	'tool.code-curl-to-axios.meta_description':
		'Konvertieren Sie cURL-Befehle sofort in Axios-Anfragen im Browser.',
	'tool.code-curl-to-axios.operation': 'Konvertieren',

	// ── Color Tools ──────────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Farbkonverter',
	'tool.color-converter.tagline': 'Farben zwischen HEX, RGB, HSL und mehr konvertieren',
	'tool.color-converter.description':
		'Konvertieren Sie Farben zwischen HEX, RGB, RGBA, HSL und CSS-Farben.',
	'tool.color-converter.primary_keyword': 'farbkonverter',
	'tool.color-converter.meta_title': 'Farbkonverter — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Konvertieren Sie Farben in verschiedene Formate im Browser. Inklusive Live-Vorschau.',
	'tool.color-converter.operation': 'Konvertieren',

	'tool.color-contrast.display_name': 'Kontrast-Prüfer',
	'tool.color-contrast.tagline': 'WCAG-Kontrastverhältnis zwischen zwei Farben prüfen',
	'tool.color-contrast.description':
		'Berechnet das Kontrastverhältnis und prüft WCAG 2.1 AA/AAA Konformität für Texte.',
	'tool.color-contrast.primary_keyword': 'kontrast prüfer',
	'tool.color-contrast.meta_title': 'Farbkontrast-Prüfer — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Prüfen Sie Farbkontrast-Verhältnisse für WCAG-Konformität im Browser.',
	'tool.color-contrast.operation': 'Prüfen',

	// ── Crypto Tools ─────────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'HMAC-Generator',
	'tool.crypto-hmac.tagline': 'HMAC-Signaturen mit SHA-Algorithmen generieren',
	'tool.crypto-hmac.description':
		'Generieren Sie HMAC-Signaturen mit SHA-256, SHA-384 oder SHA-512.',
	'tool.crypto-hmac.primary_keyword': 'hmac generator',
	'tool.crypto-hmac.meta_title': 'HMAC-Generator — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		'Generieren Sie HMAC-Signaturen im Browser mit der Web Crypto API.',
	'tool.crypto-hmac.operation': 'Generieren',

	'tool.crypto-password-strength.display_name': 'Passwortstärken-Prüfer',
	'tool.crypto-password-strength.tagline': 'Passwortstärke und Entropie analysieren',
	'tool.crypto-password-strength.description':
		'Bewertet die Passwortstärke mit Entropieberechnung und geschätzter Crack-Zeit.',
	'tool.crypto-password-strength.primary_keyword': 'passwortstärke prüfer',
	'tool.crypto-password-strength.meta_title': 'Passwortstärken-Prüfer — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		'Analysieren Sie Passwortstärken im Browser. 100% lokal, kein Versand an Server.',
	'tool.crypto-password-strength.operation': 'Analysieren',

	'tool.crypto-ulid.display_name': 'ULID-Generator',
	'tool.crypto-ulid.tagline':
		'Universally Unique Lexicographically Sortable Identifiers generieren',
	'tool.crypto-ulid.description':
		'Generieren Sie ULIDs – zeitlich sortierbare, URL-sichere Identifikatoren.',
	'tool.crypto-ulid.primary_keyword': 'ulid generator',
	'tool.crypto-ulid.meta_title': 'ULID-Generator — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		'Generieren Sie ULIDs im Browser. Sortierbare, URL-sichere IDs lokal erzeugt.',
	'tool.crypto-ulid.operation': 'Generieren',

	'tool.crypto-random-string.display_name': 'Zufallsstring-Generator',
	'tool.crypto-random-string.tagline': 'Kryptographisch sichere Zufallsstrings generieren',
	'tool.crypto-random-string.description':
		'Generieren Sie sichere Zufallsstrings mit konfigurierbarer Länge und Zeichensätzen.',
	'tool.crypto-random-string.primary_keyword': 'zufallsstring generator',
	'tool.crypto-random-string.meta_title': 'Zufallsstring-Generator — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		'Erzeugen Sie sichere Zufallsstrings im Browser via Web Crypto API.',
	'tool.crypto-random-string.operation': 'Generieren',

	// ── Diff Tools ───────────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Text-Diff',
	'tool.diff-text.tagline': 'Zwei Textblöcke vergleichen und Unterschiede markieren',
	'tool.diff-text.description':
		'Vergleichen Sie zwei Texte nebeneinander. Markiert Hinzufügungen und Löschungen.',
	'tool.diff-text.primary_keyword': 'text diff',
	'tool.diff-text.meta_title': 'Text-Diff Tool — fmtly.dev',
	'tool.diff-text.meta_description':
		'Vergleichen Sie zwei Textblöcke im Browser. Erkennt Änderungen auf Wort- oder Zeilenebene.',
	'tool.diff-text.operation': 'Vergleichen',

	// ── Encode Tools ─────────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Base64 Encoder / Decoder',
	'tool.encode-base64.tagline': 'Base64-Strings kodieren und dekodieren',
	'tool.encode-base64.description':
		'Kodieren Sie Text in Base64 und dekodieren Sie Base64-Strings zurück in Text.',
	'tool.encode-base64.primary_keyword': 'base64 encoder decoder',
	'tool.encode-base64.meta_title': 'Base64 Encoder & Decoder — fmtly.dev',
	'tool.encode-base64.meta_description':
		'Kodieren und dekodieren Sie Base64 im Browser. Unterstützt URL-sichere Varianten.',
	'tool.encode-base64.operation': 'Kodieren / Dekodieren',

	'tool.encode-url.display_name': 'URL Encoder / Decoder',
	'tool.encode-url.tagline': 'URL-kodierte Strings kodieren und dekodieren',
	'tool.encode-url.description':
		'Prozent-kodieren Sie URLs oder dekodieren Sie prozent-kodierte Zeichenfolgen.',
	'tool.encode-url.primary_keyword': 'url encoder decoder',
	'tool.encode-url.meta_title': 'URL Encoder & Decoder — fmtly.dev',
	'tool.encode-url.meta_description':
		'Kodieren und dekodieren Sie URLs im Browser. Verarbeitet alle Sonderzeichen.',
	'tool.encode-url.operation': 'Kodieren / Dekodieren',

	'tool.encode-html.display_name': 'HTML Encoder / Decoder',
	'tool.encode-html.tagline': 'HTML-Entities kodieren und dekodieren',
	'tool.encode-html.description': 'Konvertieren Sie Sonderzeichen in HTML-Entities und zurück.',
	'tool.encode-html.primary_keyword': 'html encoder decoder',
	'tool.encode-html.meta_title': 'HTML Encoder & Decoder — fmtly.dev',
	'tool.encode-html.meta_description':
		'Kodieren und dekodieren Sie HTML-Entities lokal im Browser.',
	'tool.encode-html.operation': 'Kodieren / Dekodieren',

	'tool.encode-html-entities.display_name': 'HTML-Entities Referenz',
	'tool.encode-html-entities.tagline': 'HTML-Entity-Codes durchsuchen und nachschlagen',
	'tool.encode-html-entities.description':
		'Durchsuchen Sie alle HTML-Entities mit dezimalen, hexadezimalen und benannten Formen.',
	'tool.encode-html-entities.primary_keyword': 'html entities referenz',
	'tool.encode-html-entities.meta_title': 'HTML-Entities Referenz — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Alle HTML-Entities im Browser durchsuchen. Suche nach Name, Dezimal- oder Hex-Code.',
	'tool.encode-html-entities.operation': 'Nachschlagen',

	'tool.encode-unicode.display_name': 'Unicode-Analyse',
	'tool.encode-unicode.tagline': 'Unicode-Codepunkte im Text analysieren',
	'tool.encode-unicode.description':
		'Dekodieren Sie Text in Unicode-Codepunkte mit Hex-, CSS- und JS-Escape-Darstellungen.',
	'tool.encode-unicode.primary_keyword': 'unicode analyse',
	'tool.encode-unicode.meta_title': 'Unicode-Analyse — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Analysieren Sie Unicode-Codepunkte im Browser. Inspizieren Sie Hex und UTF-8 Bytes.',
	'tool.encode-unicode.operation': 'Analysieren',

	// ── Escape Tools ─────────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'JSON-String Escape',
	'tool.escape-json.tagline': 'JSON-Strings maskieren und demaskieren',
	'tool.escape-json.description':
		'Maskieren Sie Sonderzeichen in Strings für JSON-Werte oder demaskieren Sie JSON-Strings.',
	'tool.escape-json.primary_keyword': 'json escape unescape',
	'tool.escape-json.meta_title': 'JSON-String Escape & Unescape — fmtly.dev',
	'tool.escape-json.meta_description':
		'Maskieren und demaskieren Sie JSON-Strings im Browser. Sicher und lokal.',
	'tool.escape-json.operation': 'Escape / Unescape',

	// ── File Tools ───────────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'Datei-Hash-Rechner',
	'tool.file-hash.tagline': 'MD5, SHA-1, SHA-256 und SHA-512 Datei-Hashes berechnen',
	'tool.file-hash.description':
		'Berechnen Sie kryptographische Hash-Werte für jede Datei lokal im Browser.',
	'tool.file-hash.primary_keyword': 'datei hash rechner',
	'tool.file-hash.meta_title': 'Datei-Hash-Rechner — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		'Berechnen Sie Datei-Hashes im Browser. Unterstützt MD5, SHA-1, SHA-256 und SHA-512.',
	'tool.file-hash.operation': 'Hashen',

	// ── Generate Tools ───────────────────────────────────────────────────────
	'tool.generate-uuid.display_name': 'UUID-Generator',
	'tool.generate-uuid.tagline': 'Zufällige UUIDs generieren (v4)',
	'tool.generate-uuid.description':
		'Generieren Sie RFC 4122 Version 4 UUIDs mit der Web Crypto API.',
	'tool.generate-uuid.primary_keyword': 'uuid generator',
	'tool.generate-uuid.meta_title': 'UUID-Generator — fmtly.dev',
	'tool.generate-uuid.meta_description':
		'Generieren Sie zufällige UUIDs im Browser. RFC 4122 v4 konform.',
	'tool.generate-uuid.operation': 'Generieren',

	// ── Image Tools ──────────────────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Bild-Komprimierer',
	'tool.image-compressor.tagline': 'Bilder ohne Qualitätsverlust komprimieren',
	'tool.image-compressor.description':
		'Komprimieren Sie JPEG, PNG und WebP Bilder im Browser. Keine Bilder werden hochgeladen.',
	'tool.image-compressor.primary_keyword': 'bild komprimierer',
	'tool.image-compressor.meta_title': 'Bild-Komprimierer — fmtly.dev',
	'tool.image-compressor.meta_description':
		'Komprimieren Sie Bilder im Browser. Unterstützt JPEG, PNG und WebP lokal.',
	'tool.image-compressor.operation': 'Komprimieren',

	// ── Number Tools ─────────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Zahlen-Formatierer',
	'tool.number-formatter.tagline': 'Zahlen mit lokalspezifischen Trennzeichen formatieren',
	'tool.number-formatter.description':
		'Formatieren Sie Zahlen mit Tausendertrennzeichen und Dezimalstellen.',
	'tool.number-formatter.primary_keyword': 'zahlen formatierer',
	'tool.number-formatter.meta_title': 'Zahlen-Formatierer — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Formatieren Sie Zahlen mit lokalisierten Trennzeichen im Browser.',
	'tool.number-formatter.operation': 'Formatieren',

	'tool.number-roman.display_name': 'Römische Zahlen Konverter',
	'tool.number-roman.tagline': 'Zwischen römischen Zahlen und Ganzzahlen konvertieren',
	'tool.number-roman.description': 'Konvertieren Sie Ganzzahlen in römische Zahlen und umgekehrt.',
	'tool.number-roman.primary_keyword': 'römische zahlen konverter',
	'tool.number-roman.meta_title': 'Römische Zahlen Konverter — fmtly.dev',
	'tool.number-roman.meta_description':
		'Konvertieren Sie zwischen römischen Zahlen und Ganzzahlen im Browser.',
	'tool.number-roman.operation': 'Konvertieren',

	'tool.number-percentage.display_name': 'Prozentrechner',
	'tool.number-percentage.tagline': 'Prozentsätze, Erhöhungen und Senkungen berechnen',
	'tool.number-percentage.description':
		'Berechnen Sie Prozentwerte, prozentuale Änderungen und Anteile.',
	'tool.number-percentage.primary_keyword': 'prozentrechner',
	'tool.number-percentage.meta_title': 'Prozentrechner — fmtly.dev',
	'tool.number-percentage.meta_description':
		'Berechnen Sie Prozentsätze und prozentuale Änderungen im Browser.',
	'tool.number-percentage.operation': 'Berechnen',

	'tool.number-scientific.display_name': 'Wissenschaftliche Notation Konverter',
	'tool.number-scientific.tagline': 'Zahlen in/aus wissenschaftlicher Notation konvertieren',
	'tool.number-scientific.description':
		'Konvertieren Sie Zahlen in die wissenschaftliche Schreibweise und zurück.',
	'tool.number-scientific.primary_keyword': 'wissenschaftliche notation konverter',
	'tool.number-scientific.meta_title': 'Wissenschaftliche Notation Konverter — fmtly.dev',
	'tool.number-scientific.meta_description':
		'Konvertieren Sie Zahlen in wissenschaftliche Notation im Browser.',
	'tool.number-scientific.operation': 'Konvertieren',

	'tool.number-statistics.display_name': 'Statistik-Rechner',
	'tool.number-statistics.tagline': 'Mittelwert, Median, Modus und mehr berechnen',
	'tool.number-statistics.description':
		'Berechnen Sie deskriptive Statistiken für eine Liste von Zahlen.',
	'tool.number-statistics.primary_keyword': 'statistik rechner',
	'tool.number-statistics.meta_title': 'Statistik-Rechner — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Berechnen Sie Mittelwert, Median und Standardabweichung im Browser.',
	'tool.number-statistics.operation': 'Berechnen',

	'tool.number-matrix.display_name': 'Matrix-Rechner',
	'tool.number-matrix.tagline': 'Matrix-Operationen und Berechnungen durchführen',
	'tool.number-matrix.description':
		'Führen Sie Matrix-Addition, -Multiplikation und Inversionen durch.',
	'tool.number-matrix.primary_keyword': 'matrix rechner',
	'tool.number-matrix.meta_title': 'Matrix-Rechner — fmtly.dev',
	'tool.number-matrix.meta_description':
		'Führen Sie Matrix-Operationen im Browser aus. Sicher und lokal.',
	'tool.number-matrix.operation': 'Berechnen',

	'tool.number-unit-converter.display_name': 'Einheitenumrechner',
	'tool.number-unit-converter.tagline': 'Zwischen verschiedenen Maßeinheiten umrechnen',
	'tool.number-unit-converter.description':
		'Umrechnen von Länge, Gewicht, Temperatur, Volumen und mehr.',
	'tool.number-unit-converter.primary_keyword': 'einheitenumrechner',
	'tool.number-unit-converter.meta_title': 'Einheitenumrechner — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Rechnen Sie Maßeinheiten im Browser um. Unterstützt metrische und imperiale Systeme.',
	'tool.number-unit-converter.operation': 'Konvertieren',

	// ── PDF Tools ─────────────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'PDF-Betrachter',
	'tool.pdf-viewer.tagline': 'PDF-Dateien betrachten und Text extrahieren',
	'tool.pdf-viewer.description':
		'Betrachten Sie PDFs im Browser und extrahieren Sie Textinhalte lokal.',
	'tool.pdf-viewer.primary_keyword': 'pdf betrachter',
	'tool.pdf-viewer.meta_title': 'PDF-Betrachter — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'Betrachten Sie PDF-Dateien im Browser. Extrahieren Sie Text aus jedem PDF.',
	'tool.pdf-viewer.operation': 'Anzeigen',

	// ── QR Tools ──────────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'QR-Code-Generator',
	'tool.qr-generator.tagline': 'Anpassbare QR-Codes generieren',
	'tool.qr-generator.description':
		'Erzeugen Sie QR-Codes aus Text, URLs und Kontaktinfos. Download als PNG oder SVG.',
	'tool.qr-generator.primary_keyword': 'qr code generator',
	'tool.qr-generator.meta_title': 'QR-Code-Generator — fmtly.dev',
	'tool.qr-generator.meta_description':
		'Generieren Sie anpassbare QR-Codes im Browser. Download als PNG oder SVG.',
	'tool.qr-generator.operation': 'Generieren',

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

	// ── Web Tools ─────────────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'URL-Parser',
	'tool.web-url-parser.tagline': 'URL-Komponenten analysieren und inspizieren',
	'tool.web-url-parser.description':
		'Zerlegen Sie URLs in Protokoll, Host, Port, Pfad und Parameter.',
	'tool.web-url-parser.primary_keyword': 'url parser',
	'tool.web-url-parser.meta_title': 'URL-Parser — fmtly.dev',
	'tool.web-url-parser.meta_description':
		'Analysieren Sie URL-Komponenten im Browser. Zerlegt jede URL in ihre Einzelteile.',
	'tool.web-url-parser.operation': 'Analysieren',

	'tool.web-user-agent.display_name': 'User-Agent-Parser',
	'tool.web-user-agent.tagline': 'User-Agent-Strings analysieren und dekodieren',
	'tool.web-user-agent.description':
		'Analysieren Sie User-Agent-Strings, um Browser, OS und Gerät zu identifizieren.',
	'tool.web-user-agent.primary_keyword': 'user agent parser',
	'tool.web-user-agent.meta_title': 'User-Agent-Parser — fmtly.dev',
	'tool.web-user-agent.meta_description':
		'Analysieren Sie User-Agent-Strings im Browser. Identifiziert Browser und Gerät.',
	'tool.web-user-agent.operation': 'Analysieren',

	'tool.web-cors.display_name': 'CORS-Header-Prüfer',
	'tool.web-cors.tagline': 'CORS-Header inspizieren und verstehen',
	'tool.web-cors.description':
		'Erklärt CORS-Header wie Access-Control-Allow-Origin und Preflight-Anfragen.',
	'tool.web-cors.primary_keyword': 'cors header prüfer',
	'tool.web-cors.meta_title': 'CORS-Header-Prüfer — fmtly.dev',
	'tool.web-cors.meta_description':
		'Inspizieren Sie CORS-Header im Browser. Verstehen Sie alle Access-Control-Direktiven.',
	'tool.web-cors.operation': 'Prüfen',

	'tool.web-mime-types.display_name': 'MIME-Typ-Suche',
	'tool.web-mime-types.tagline': 'MIME-Typen nach Endung oder Name suchen',
	'tool.web-mime-types.description':
		'Suchen Sie MIME-Typen nach Dateiendung oder Name. Deckt alle IANA-Typen ab.',
	'tool.web-mime-types.primary_keyword': 'mime typ suche',
	'tool.web-mime-types.meta_title': 'MIME-Typ-Suche — fmtly.dev',
	'tool.web-mime-types.meta_description':
		'Schlagen Sie MIME-Typen nach Dateiendung im Browser nach.',
	'tool.web-mime-types.operation': 'Nachschlagen',

	'tool.web-ip-lookup.display_name': 'IP-Suche',
	'tool.web-ip-lookup.tagline': 'Geolokalisierung und Infos für IP-Adressen nachschlagen',
	'tool.web-ip-lookup.description':
		'Suchen Sie Geolokalisierung, ASN und Provider-Infos für jede IP-Adresse.',
	'tool.web-ip-lookup.primary_keyword': 'ip suche',
	'tool.web-ip-lookup.meta_title': 'IP-Suche — fmtly.dev',
	'tool.web-ip-lookup.meta_description':
		'IP-Geolokalisierung und Provider-Informationen im Browser abfragen.',
	'tool.web-ip-lookup.operation': 'Nachschlagen',

	'tool.web-dns-lookup.display_name': 'DNS-Suche',
	'tool.web-dns-lookup.tagline': 'DNS-Records für jede Domain abfragen',
	'tool.web-dns-lookup.description':
		'Fragen Sie A, AAAA, MX, TXT und andere DNS-Typen ab. Nutzt DNS-over-HTTPS.',
	'tool.web-dns-lookup.primary_keyword': 'dns suche',
	'tool.web-dns-lookup.meta_title': 'DNS-Suche — fmtly.dev',
	'tool.web-dns-lookup.meta_description': 'Fragen Sie DNS-Records für jede Domain im Browser ab.',
	'tool.web-dns-lookup.operation': 'Nachschlagen',

	// ── Accessibility Tools ──────────────────────────────────────────────────
	'tool.accessibility-contrast.display_name': 'Kontrast-Prüfer',
	'tool.accessibility-contrast.tagline':
		'WCAG-Kontrastverhältnisse für Text- und Hintergrundfarben prüfen',
	'tool.accessibility-contrast.description':
		'Berechnen Sie das Kontrastverhältnis für WCAG AA/AAA Konformität. Inklusive Live-Vorschau.',
	'tool.accessibility-contrast.primary_keyword': 'wcag kontrast prüfer',
	'tool.accessibility-contrast.meta_title': 'WCAG Kontrast-Prüfer — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'Prüfen Sie WCAG-Farbkontraste im Browser. Sicher und lokal auf Ihrem Gerät.',
	'tool.accessibility-contrast.operation': 'Prüfen',

	'tool.accessibility-color-blindness.display_name': 'Farbenblindheit-Simulator',
	'tool.accessibility-color-blindness.tagline':
		'Simulieren, wie Farben für Menschen mit Sehschwächen erscheinen',
	'tool.accessibility-color-blindness.description':
		'Simulieren Sie Protanopie, Deuteranopie und Tritanopie für Farben oder Bilder.',
	'tool.accessibility-color-blindness.primary_keyword': 'farbenblindheit simulator',
	'tool.accessibility-color-blindness.meta_title': 'Farbenblindheit-Simulator — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description':
		'Simulieren Sie verschiedene Arten der Farbenblindheit im Browser.',
	'tool.accessibility-color-blindness.operation': 'Simulieren',

	'tool.accessibility-font-size.display_name': 'Schriftgrößen-Prüfer',
	'tool.accessibility-font-size.tagline': 'WCAG-Anforderungen für Textgröße und Kontrast prüfen',
	'tool.accessibility-font-size.description':
		'Prüfen Sie, ob Texte als "großer Text" gelten und welche WCAG-Kontraste nötig sind.',
	'tool.accessibility-font-size.primary_keyword': 'wcag schriftgrößen prüfer',
	'tool.accessibility-font-size.meta_title': 'WCAG Schriftgrößen-Prüfer — fmtly.dev',
	'tool.accessibility-font-size.meta_description':
		'Prüfen Sie WCAG-Anforderungen für Schriftgrößen im Browser.',
	'tool.accessibility-font-size.operation': 'Prüfen',

	// ── UI Strings ────────────────────────────────────────────────────────────
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
	'tool.output_placeholder': 'Die Ausgabe erscheint hier',
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
	'ui.json_viewer.toast_copy_path': 'Kopiert',
	'ui.tree.toast_copy_path': 'Kopiert',
	'ui.tree.toast.copied_path': 'Kopiert',
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
	'ui.xpath.results_count.other': '{count Ergebnisse',
	'ui.validator.syntax': 'Syntax',
	'ui.validator.schema': 'Schema',
	'ui.validator.issue': 'Problem',
	'ui.validator.issues': 'Probleme',
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
	'ui.validator.invalid_yaml': 'Ungültiges YAML',
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

	'tool.crypto-hmac.faq.0.question': 'Was ist HMAC?',
	'tool.crypto-hmac.faq.0.answer':
		'HMAC (Hash-based Message Authentication Code) nutzt eine Hash-Funktion und einen geheimen Schlüssel zur Sicherstellung von Integrität und Authentizität.',
	'tool.crypto-hmac.faq.1.question': 'Welche Algorithmen werden unterstützt?',
	'tool.crypto-hmac.faq.1.answer':
		'Unterstützt werden SHA-256, SHA-512, SHA-1, MD5 und mehr. SHA-256 wird für die meisten Anwendungen empfohlen.',
	'tool.crypto-hmac.use_case.0': 'Integrität von API-Anfragen verifizieren',
	'tool.crypto-hmac.use_case.1': 'Sichere Token für das Session-Management erstellen',
	'tool.crypto-hmac.use_case.2': 'Webhook-Signaturen für Dienste wie GitHub generieren',
	'tool.crypto-hmac.use_case.3': 'Nachrichten-Authentifizierung in Microservices implementieren',
	'tool.crypto-hmac.use_case.4': 'Prüfsummen zur Dateiverifizierung erstellen',

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
	'tool.xml-xpath.use_case.3': 'XML-Strukturen programmatisch validieren'
};

export default registryDe;

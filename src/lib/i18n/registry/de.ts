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
	'ui.csv.controls.batch_size': 'Stapelgröße'
};

export default registryDe;

const registryDe: Record<string, string> = {
	// ── Categories ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'JSON-Daten formatieren, validieren, minifizieren, vergleichen und konvertieren. Alle Werkzeuge laufen im Browser mit Echtzeit-Fehlererkennung und Baumvisualisierung.',
	'category.json.primary_keyword': 'json tools',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		'XML-Dokumente formatieren, validieren und konvertieren. Unterstützt Pretty-Printing mit konfigurierbarem Einzug und Konvertierung nach JSON oder CSV.',
	'category.xml.primary_keyword': 'xml tools',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'YAML-Dateien formatieren, validieren und konvertieren. Bidirektionale Konvertierung mit JSON und Syntaxvalidierung mit präzisen Fehlerpositionen.',
	'category.yaml.primary_keyword': 'yaml tools',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'CSV-Daten parsen, formatieren und konvertieren. Konvertierung zwischen CSV, JSON und anderen tabellarischen Formaten mit Unterstützung für benutzerdefinierte Trennzeichen.',
	'category.csv.primary_keyword': 'csv tools',
	'category.css.display_name': 'CSS',
	'category.css.description':
		'CSS-Stylesheets formatieren, minifizieren und optimieren. Komprimiertes CSS verschönern oder formatiertes CSS mit Eigenschaftssortierungsoptionen minifizieren.',
	'category.css.primary_keyword': 'css tools',
	'category.html.display_name': 'HTML',
	'category.html.description':
		'HTML-Markup formatieren, minifizieren und validieren. Komprimiertes HTML verschönern oder Leerzeichen für die Produktion entfernen.',
	'category.html.primary_keyword': 'html tools',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'JavaScript-Code formatieren und minifizieren. Komprimierte Skripte verschönern oder minimierten Output für schnellere Seitenladung erstellen.',
	'category.js.primary_keyword': 'javascript tools',
	'category.encode.display_name': 'Encoder & Decoder',
	'category.encode.description':
		'Base64, URL, HTML-Entities und mehr kodieren und dekodieren. Alle Operationen laufen sofort im Browser — keine Daten werden an Server gesendet.',
	'category.encode.primary_keyword': 'encoder decoder tools',
	'category.escape.display_name': 'Escape-Werkzeuge',
	'category.escape.description':
		'Zeichenketten für JSON, HTML, XML, URLs und reguläre Ausdrücke maskieren und demaskieren. Sicherer Umgang mit Sonderzeichen in allen Formaten.',
	'category.escape.primary_keyword': 'string escape tools',
	'category.diff.display_name': 'Diff & Vergleich',
	'category.diff.description':
		'Zwei Dateien oder Datenstrukturen nebeneinander vergleichen. Ergänzungen und Löschungen werden mit JSON-, Text- und strukturierter Diff-Unterstützung hervorgehoben.',
	'category.diff.primary_keyword': 'diff compare tools',
	'category.generate.display_name': 'Generatoren',
	'category.generate.description':
		'Typdefinitionen, JSON Schema, Markdown-Tabellen, Test-Mockdaten und andere Entwickler-Hilfsmittel vollständig im Browser generieren.',
	'category.generate.primary_keyword': 'code generators',
	'category.text.display_name': 'Text & Zeichenketten',
	'category.text.description':
		'Text und Zeichenketten formatieren, bearbeiten, umkehren, sortieren und analysieren. Mit Wortzählern, Lesbarkeits-Scores und Markdown-Konvertierungen.',
	'category.text.primary_keyword': 'text tools',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'TOML-Dateien formatieren, validieren und konvertieren. TOML sicher in JSON und YAML umwandeln.',
	'category.toml.primary_keyword': 'toml tools',
	'category.number.display_name': 'Zahlen & Mathematik',
	'category.number.description':
		'Zahlen formatieren, Prozentwerte berechnen, wissenschaftliche Notation verwenden und Werte zwischen Zahlensystemen sofort konvertieren.',
	'category.number.primary_keyword': 'number tools',
	'category.color.display_name': 'Farb-Werkzeuge',
	'category.color.description':
		'Kontrastverhältnisse prüfen, Farbpaletten erstellen, CSS-Farbverläufe generieren und Farbenblindheit simulieren.',
	'category.color.primary_keyword': 'color tools',
	'category.crypto.display_name': 'Krypto & Sicherheit',
	'category.crypto.description':
		'HMAC-Signaturen generieren, Passwortstärke analysieren, sichere Zufallszeichenketten erzeugen und ULIDs generieren — vollständig clientseitig mit der Web Crypto API.',
	'category.crypto.primary_keyword': 'crypto security tools',
	'category.web.display_name': 'Web & Netzwerk',
	'category.web.description':
		'URLs parsen, User-Agent-Zeichenketten dekodieren, CORS-Header prüfen, MIME-Typen nachschlagen, IPs geolokalisieren und DNS-Einträge abfragen.',
	'category.web.primary_keyword': 'web tools online',
	'category.code.display_name': 'Code-Formatierer',
	'category.code.description':
		'CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL und Markdown vollständig lokal formatieren. cURL-Befehle in fetch() oder Axios umwandeln.',
	'category.code.primary_keyword': 'code formatter online',
	'category.pdf.display_name': 'PDF-Werkzeuge',
	'category.pdf.description':
		'PDF-Dateien ansehen und Text extrahieren — vollständig lokal im Browser.',
	'category.pdf.primary_keyword': 'pdf tools online',
	'category.image.display_name': 'Bild-Werkzeuge',
	'category.image.description':
		'Bilder skalieren, konvertieren, komprimieren und kodieren — vollständig lokal im Browser. Keine Uploads, kein Server.',
	'category.image.primary_keyword': 'image tools online',
	'category.file.display_name': 'Datei-Werkzeuge',
	'category.file.description':
		'Datei-Hashes berechnen und Formatkonvertierungen zwischen Dateien durchführen.',
	'category.file.primary_keyword': 'file tools online',
	'category.qr.display_name': 'QR & Barcode',
	'category.qr.description':
		'Anpassbare QR-Codes generieren und QR-Codes aus Bildern dekodieren — vollständig lokal im Browser.',
	'category.qr.primary_keyword': 'qr code generator',

	// ── JSON tools ──────────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'JSON-Formatierer',
	'tool.json-formatter.tagline': 'JSON mit konfigurierbarem Einzug formatieren und verschönern',
	'tool.json-formatter.description':
		'JSON mit konfigurierbarem Einzug parsen und anzeigen — 2 Leerzeichen, 4 Leerzeichen oder Tabs. Echtzeit-Parsing mit präzisen Fehlerpositionen und optionaler Baumansicht.',
	'tool.json-formatter.primary_keyword': 'json formatter',
	'tool.json-formatter.meta_title': 'JSON-Formatierer & Verschönerer — fmtly.dev',
	'tool.json-formatter.meta_description':
		'JSON sofort im Browser formatieren und verschönern. Konfigurierbarer Einzug, Echtzeit-Fehlererkennung und Baumansicht. Keine Daten verlassen Ihr Gerät.',
	'tool.json-formatter.operation': 'Formatieren',

	'tool.json-validator.display_name': 'JSON-Validator',
	'tool.json-validator.tagline': 'JSON-Syntax und -Struktur validieren',
	'tool.json-validator.description':
		'JSON-Syntax in Echtzeit prüfen. Identifiziert sofort fehlende Klammern, nicht abgeschlossene Zeichenketten und doppelte Schlüssel. Unterstützt JSON5-Kommentare und nachgestellte Kommas.',
	'tool.json-validator.primary_keyword': 'json validator',
	'tool.json-validator.meta_title': 'JSON-Validator — fmtly.dev',
	'tool.json-validator.meta_description':
		'JSON sofort im Browser validieren. Erkennt Syntaxfehler mit präzisen Zeilen- und Spaltennummern. Keine Daten verlassen Ihr Gerät.',
	'tool.json-validator.operation': 'Validieren',

	'tool.json-minifier.display_name': 'JSON-Minifizierer',
	'tool.json-minifier.tagline': 'Leerzeichen entfernen und JSON auf Mindestgröße komprimieren',
	'tool.json-minifier.description':
		'Alle Leerzeichen aus JSON entfernen, um die kleinstmögliche Ausgabe zu erzeugen. Validiert JSON zunächst, entfernt dann Einzüge, Zeilenumbrüche und Leerzeichen.',
	'tool.json-minifier.primary_keyword': 'json minifier',
	'tool.json-minifier.meta_title': 'JSON-Minifizierer — fmtly.dev',
	'tool.json-minifier.meta_description':
		'JSON sofort im Browser minifizieren. Entfernt alle Leerzeichen und erzeugt kompakte Ausgabe. Keine Daten verlassen Ihr Gerät.',
	'tool.json-minifier.operation': 'Minifizieren',

	'tool.json-to-yaml.display_name': 'JSON zu YAML',
	'tool.json-to-yaml.tagline': 'JSON-Daten in YAML-Format konvertieren',
	'tool.json-to-yaml.description':
		'JSON mit korrektem Einzug und Formatierung in YAML konvertieren. Verarbeitet verschachtelte Objekte, Arrays und alle JSON-Datentypen.',
	'tool.json-to-yaml.primary_keyword': 'json to yaml',
	'tool.json-to-yaml.meta_title': 'JSON-zu-YAML-Konverter — fmtly.dev',
	'tool.json-to-yaml.meta_description':
		'JSON sofort im Browser in YAML konvertieren. Verarbeitet verschachtelte Strukturen und alle Datentypen. Keine Daten hochgeladen.',
	'tool.json-to-yaml.operation': 'Konvertieren',

	'tool.json-to-toml.display_name': 'JSON zu TOML',
	'tool.json-to-toml.tagline': 'JSON-Daten in TOML-Konfigurationsformat konvertieren',
	'tool.json-to-toml.description':
		'JSON in TOML-Format konvertieren, ideal für Konfigurationsdateien. Unterstützt verschachtelte Tabellen und Inline-Arrays.',
	'tool.json-to-toml.primary_keyword': 'json to toml',
	'tool.json-to-toml.meta_title': 'JSON-zu-TOML-Konverter — fmtly.dev',
	'tool.json-to-toml.meta_description':
		'JSON sofort im Browser in TOML konvertieren. Verarbeitet verschachtelte Strukturen und Arrays. Keine Daten hochgeladen.',
	'tool.json-to-toml.operation': 'Konvertieren',

	'tool.json-to-markdown.display_name': 'JSON zu Markdown-Tabelle',
	'tool.json-to-markdown.tagline': 'JSON-Arrays in Markdown-Tabellen konvertieren',
	'tool.json-to-markdown.description':
		'JSON-Arrays von Objekten in formatierte Markdown-Tabellen konvertieren. Erkennt automatisch Spaltenüberschriften aus Objektschlüsseln.',
	'tool.json-to-markdown.primary_keyword': 'json to markdown table',
	'tool.json-to-markdown.meta_title': 'JSON-zu-Markdown-Tabellen-Konverter — fmtly.dev',
	'tool.json-to-markdown.meta_description':
		'JSON-Arrays sofort in Markdown-Tabellen konvertieren. Erkennt Überschriften automatisch und formatiert Daten. Keine Daten verlassen Ihr Gerät.',
	'tool.json-to-markdown.operation': 'Konvertieren',

	'tool.json-to-xml.display_name': 'JSON zu XML',
	'tool.json-to-xml.tagline': 'JSON-Daten in XML-Format konvertieren',
	'tool.json-to-xml.description':
		'JSON-Objekte und -Arrays in wohlgeformtes XML konvertieren. Verarbeitet verschachtelte Strukturen und konfigurierbare Stammelementnamen.',
	'tool.json-to-xml.primary_keyword': 'json to xml',
	'tool.json-to-xml.meta_title': 'JSON-zu-XML-Konverter — fmtly.dev',
	'tool.json-to-xml.meta_description':
		'JSON sofort im Browser in XML konvertieren. Erzeugt wohlgeformtes XML. Keine Daten hochgeladen.',
	'tool.json-to-xml.operation': 'Konvertieren',

	'tool.json-to-csv.display_name': 'JSON zu CSV',
	'tool.json-to-csv.tagline': 'JSON-Arrays in CSV-Format konvertieren',
	'tool.json-to-csv.description':
		'JSON-Arrays von Objekten in CSV-Format konvertieren. Extrahiert automatisch Spaltenüberschriften aus Objektschlüsseln.',
	'tool.json-to-csv.primary_keyword': 'json to csv',
	'tool.json-to-csv.meta_title': 'JSON-zu-CSV-Konverter — fmtly.dev',
	'tool.json-to-csv.meta_description':
		'JSON-Arrays sofort im Browser in CSV konvertieren. Erkennt Überschriften automatisch. Keine Daten hochgeladen.',
	'tool.json-to-csv.operation': 'Konvertieren',

	'tool.json-jsonpath.display_name': 'JSONPath-Abfrage',
	'tool.json-jsonpath.tagline': 'JSON-Daten mit JSONPath-Ausdrücken abfragen',
	'tool.json-jsonpath.description':
		'JSONPath-Ausdrücke gegen JSON-Daten ausführen, um bestimmte Werte zu extrahieren. Unterstützt Filter, Wildcards, rekursiven Abstieg und alle Standard-JSONPath-Operatoren.',
	'tool.json-jsonpath.primary_keyword': 'jsonpath query',
	'tool.json-jsonpath.meta_title': 'JSONPath-Abfragewerkzeug — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'JSON-Daten mit JSONPath-Ausdrücken im Browser abfragen. Unterstützt alle Operatoren. Keine Daten hochgeladen.',
	'tool.json-jsonpath.operation': 'Abfragen',

	'tool.json-jmespath.display_name': 'JMESPath-Abfrage',
	'tool.json-jmespath.tagline': 'JSON mit JMESPath-Ausdrücken abfragen und transformieren',
	'tool.json-jmespath.description':
		'JMESPath-Ausdrücke gegen JSON-Daten ausführen, um sie abzufragen und zu transformieren. Unterstützt Projektionen, Filter, Mehrfachauswahl und alle JMESPath-Funktionen.',
	'tool.json-jmespath.primary_keyword': 'jmespath query',
	'tool.json-jmespath.meta_title': 'JMESPath-Abfragewerkzeug — fmtly.dev',
	'tool.json-jmespath.meta_description':
		'JSON mit JMESPath im Browser abfragen und transformieren. Unterstützt alle Operatoren und Funktionen. Keine Daten hochgeladen.',
	'tool.json-jmespath.operation': 'Abfragen',

	// ── XML tools ───────────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'XML-Formatierer',
	'tool.xml-formatter.tagline': 'XML mit konfigurierbarem Abstand verschönern und einrücken',
	'tool.xml-formatter.description':
		'XML-Dokumente mit 2 Leerzeichen, 4 Leerzeichen oder Tabs formatieren und einrücken. Validiert XML-Struktur und hebt Fehler mit präzisen Zeilennummern hervor.',
	'tool.xml-formatter.primary_keyword': 'xml formatter',
	'tool.xml-formatter.meta_title': 'XML-Formatierer & Verschönerer — fmtly.dev',
	'tool.xml-formatter.meta_description':
		'XML im Browser formatieren und verschönern. Konfigurierbarer Einzug und Echtzeit-Validierung. Keine Daten verlassen Ihr Gerät.',
	'tool.xml-formatter.operation': 'Formatieren',

	'tool.xml-validator.display_name': 'XML-Validator',
	'tool.xml-validator.tagline': 'XML-Syntax und Wohlgeformtheit validieren',
	'tool.xml-validator.description':
		'XML auf Wohlgeformtheitsregeln prüfen. Identifiziert nicht geschlossene Tags, fehlerhafte Attribute und ungültige Zeichen mit präzisen Fehlerpositionen.',
	'tool.xml-validator.primary_keyword': 'xml validator',
	'tool.xml-validator.meta_title': 'XML-Validator — fmtly.dev',
	'tool.xml-validator.meta_description':
		'XML im Browser validieren. Erkennt Syntaxfehler mit Zeilen- und Spaltennummern. Keine Daten verlassen Ihr Gerät.',
	'tool.xml-validator.operation': 'Validieren',

	'tool.xml-to-json.display_name': 'XML zu JSON',
	'tool.xml-to-json.tagline': 'XML-Dokumente in JSON-Format konvertieren',
	'tool.xml-to-json.description':
		'XML mit automatischer Attribut- und Element-Zuordnung in JSON konvertieren. Verarbeitet Namensräume, CDATA-Abschnitte und verschachtelte XML-Strukturen.',
	'tool.xml-to-json.primary_keyword': 'xml to json',
	'tool.xml-to-json.meta_title': 'XML-zu-JSON-Konverter — fmtly.dev',
	'tool.xml-to-json.meta_description':
		'XML sofort im Browser in JSON konvertieren. Verarbeitet Attribute und verschachtelte Strukturen. Keine Daten hochgeladen.',
	'tool.xml-to-json.operation': 'Konvertieren',

	'tool.xml-to-yaml.display_name': 'XML zu YAML',
	'tool.xml-to-yaml.tagline': 'XML-Dokumente in YAML-Format konvertieren',
	'tool.xml-to-yaml.description':
		'XML mit korrektem Einzug in YAML-Format konvertieren. Verarbeitet Attribute, Textinhalt und verschachtelte XML-Elemente.',
	'tool.xml-to-yaml.primary_keyword': 'xml to yaml',
	'tool.xml-to-yaml.meta_title': 'XML-zu-YAML-Konverter — fmtly.dev',
	'tool.xml-to-yaml.meta_description':
		'XML sofort im Browser in YAML konvertieren. Verarbeitet Attribute und verschachtelte Elemente. Keine Daten hochgeladen.',
	'tool.xml-to-yaml.operation': 'Konvertieren',

	'tool.xml-to-csv.display_name': 'XML zu CSV',
	'tool.xml-to-csv.tagline': 'XML-Einträge in CSV-Format konvertieren',
	'tool.xml-to-csv.description':
		'Sich wiederholende XML-Elemente in CSV-Zeilen extrahieren. Erkennt Spaltenüberschriften automatisch aus Element- und Attributnamen.',
	'tool.xml-to-csv.primary_keyword': 'xml to csv',
	'tool.xml-to-csv.meta_title': 'XML-zu-CSV-Konverter — fmtly.dev',
	'tool.xml-to-csv.meta_description':
		'XML sofort im Browser in CSV konvertieren. Erkennt Überschriften automatisch aus Elementnamen. Keine Daten hochgeladen.',
	'tool.xml-to-csv.operation': 'Konvertieren',

	'tool.xml-minifier.display_name': 'XML-Minifizierer',
	'tool.xml-minifier.tagline': 'Leerzeichen entfernen und XML komprimieren',
	'tool.xml-minifier.description':
		'Alle Leerzeichen und Kommentare aus XML entfernen, um kompakte Ausgabe zu erzeugen. Validiert XML zunächst, dann wird minifiziert, um die Dateigröße zu reduzieren.',
	'tool.xml-minifier.primary_keyword': 'xml minifier',
	'tool.xml-minifier.meta_title': 'XML-Minifizierer — fmtly.dev',
	'tool.xml-minifier.meta_description':
		'XML sofort im Browser minifizieren. Entfernt Leerzeichen und Kommentare. Keine Daten verlassen Ihr Gerät.',
	'tool.xml-minifier.operation': 'Minifizieren',

	// XML Tool FAQs and Use Cases
	'tool.xml-formatter.faq.0.question': 'What is XML formatting?',
	'tool.xml-formatter.faq.0.answer':
		'XML formatting is the process of organizing XML code with proper indentation and line breaks to make it more readable and maintainable. This helps developers understand the document structure and hierarchy.',
	'tool.xml-formatter.faq.1.question': 'Can I customize the indentation?',
	'tool.xml-formatter.faq.1.answer':
		'Yes! You can choose between 2 spaces, 4 spaces, or tabs for indentation. The formatter preserves your XML structure while applying your preferred formatting style.',
	'tool.xml-formatter.faq.2.question': 'Does the formatter preserve comments?',
	'tool.xml-formatter.faq.2.answer':
		'Yes, the XML formatter preserves all comments in their original positions. It only changes the indentation and line breaks to improve readability without affecting the content or structure.',
	'tool.xml-formatter.use_case.0':
		'Making XML files more readable for documentation and code reviews',
	'tool.xml-formatter.use_case.1': 'Cleaning up minified XML from web responses or APIs',
	'tool.xml-formatter.use_case.2': 'Standardizing XML formatting across team projects',
	'tool.xml-formatter.use_case.3': 'Debugging XML structure by improving visual hierarchy',
	'tool.xml-formatter.use_case.4':
		'Preparing XML files for version control with consistent formatting',

	'tool.xml-validator.faq.0.question': 'What does XML validation check for?',
	'tool.xml-validator.faq.0.answer':
		'XML validation checks for well-formedness including proper tag nesting, matching opening/closing tags, valid attribute syntax, correct character encoding, and compliance with XML specification rules.',
	'tool.xml-validator.faq.1.question': "What's the difference between well-formed and valid XML?",
	'tool.xml-validator.faq.1.answer':
		'Well-formed XML follows basic syntax rules but may have structural issues. Valid XML is well-formed AND conforms to a specific DTD or XML Schema that defines the allowed structure and content.',
	'tool.xml-validator.faq.2.question': 'How do I fix XML validation errors?',
	'tool.xml-validator.faq.2.answer':
		'The validator shows exact line and column numbers for each error. Common fixes include: closing unclosed tags, fixing mismatched tags, removing duplicate attributes, and ensuring proper character encoding. Click on any error to see detailed explanations.',
	'tool.xml-validator.use_case.0': 'Validating API responses before processing in applications',
	'tool.xml-validator.use_case.1':
		'Checking configuration files before deployment to prevent errors',
	'tool.xml-validator.use_case.2': 'Verifying XML data imports from third-party systems',
	'tool.xml-validator.use_case.3': 'Debugging XML parsing issues in development environments',
	'tool.xml-validator.use_case.4':
		'Ensuring XML compliance before submitting to enterprise systems',

	'tool.xml-to-json.faq.0.question': 'How does XML to JSON conversion work?',
	'tool.xml-to-json.faq.0.answer':
		'The conversion maps XML elements to JSON objects, attributes to key-value pairs, and text content to string values. XML namespaces are preserved, and multiple elements with the same name become arrays.',
	'tool.xml-to-json.faq.1.question': 'Is the conversion reversible?',
	'tool.xml-to-json.faq.1.answer':
		'Mostly yes, but some XML features like comments, processing instructions, and the order of attributes may be lost. The core data structure remains intact for round-trip conversion.',
	'tool.xml-to-json.faq.2.question': 'How are XML attributes handled in JSON?',
	'tool.xml-to-json.faq.2.answer':
		'XML attributes are converted to JSON properties with an "@" prefix by default. This distinguishes them from child elements. You can customize this behavior in advanced settings to use different naming conventions.',
	'tool.xml-to-json.use_case.0': 'Converting SOAP API responses to JSON for modern applications',
	'tool.xml-to-json.use_case.1': 'Processing XML configuration files in JavaScript applications',
	'tool.xml-to-json.use_case.2': 'Migrating legacy XML data to modern JSON-based systems',
	'tool.xml-to-json.use_case.3': 'Extracting data from XML sitemaps for analysis',
	'tool.xml-to-json.use_case.4': 'Transforming RSS feeds into JSON for mobile app consumption',

	'tool.json-to-xml.faq.0.question': 'What is JSON to XML conversion?',
	'tool.json-to-xml.faq.0.answer':
		'JSON to XML conversion transforms JSON data into XML format, mapping objects to elements, arrays to repeated elements, and primitive values to text content. This enables compatibility with systems that require XML input.',
	'tool.json-to-xml.faq.1.question': 'How are arrays handled in the conversion?',
	'tool.json-to-xml.faq.1.answer':
		'JSON arrays become multiple XML elements with the same tag name. You can configure whether to use wrapper elements or repeat the same element tag for each array item.',
	'tool.json-to-xml.faq.2.question': 'How does the converter handle special characters?',
	'tool.json-to-xml.faq.2.answer':
		'Special characters are automatically escaped according to XML standards. This includes &, <, >, ", and \', which are converted to their corresponding XML entities to ensure valid XML output.',
	'tool.json-to-xml.use_case.0': 'Creating XML sitemaps from JSON data',
	'tool.json-to-xml.use_case.1': 'Generating RSS/Atom feeds from JSON content',
	'tool.json-to-xml.use_case.2': 'Converting API responses for legacy systems requiring XML',
	'tool.json-to-xml.use_case.3': 'Creating configuration files for Java applications from JSON',
	'tool.json-to-xml.use_case.4': 'Generating SOAP envelopes from JSON payloads for web services',

	'tool.xml-to-yaml.faq.0.question': 'Why convert XML to YAML?',
	'tool.xml-to-yaml.faq.0.answer':
		"YAML is more human-readable and easier to edit manually than XML. It's commonly used for configuration files, documents, and data exchange where readability is important.",
	'tool.xml-to-yaml.faq.1.question': 'How are XML attributes handled?',
	'tool.xml-to-yaml.faq.1.answer':
		'XML attributes are typically converted to key-value pairs within the YAML element. You can configure whether to use a special syntax for attributes or treat them as regular properties.',
	'tool.xml-to-yaml.faq.2.question': 'Can complex nested XML be converted to YAML?',
	'tool.xml-to-yaml.faq.2.answer':
		'Yes! The converter handles arbitrarily deep nesting, mixed content, and complex XML structures. The resulting YAML maintains the same data hierarchy in a more readable format.',
	'tool.xml-to-yaml.use_case.0': 'Converting Spring Framework XML configurations to YAML',
	'tool.xml-to-yaml.use_case.1': 'Migrating build scripts from XML to more readable YAML format',
	'tool.xml-to-yaml.use_case.2': 'Creating Kubernetes resources from XML templates',
	'tool.xml-to-yaml.use_case.3': 'Processing XML documents for documentation purposes',
	'tool.xml-to-yaml.use_case.4': 'Transforming XML data for Ansible playbooks and automation',

	'tool.xml-to-csv.faq.0.question': 'How does XML to CSV conversion work?',
	'tool.xml-to-csv.faq.0.answer':
		'The converter extracts repeating elements from XML and creates rows in CSV, with element attributes and child elements becoming columns. You can select which elements to convert and customize the output format.',
	'tool.xml-to-csv.faq.1.question': 'What XML structures work best for CSV conversion?',
	'tool.xml-to-csv.faq.1.answer':
		'XML with repeating record-like elements works best. Each repeated element becomes a row, and its properties become columns. Deeply nested structures may need to be flattened.',
	'tool.xml-to-csv.use_case.0': 'Extracting data from XML reports into spreadsheet format',
	'tool.xml-to-csv.use_case.1': 'Converting XML exports from databases to CSV for analysis',
	'tool.xml-to-csv.use_case.2': 'Processing XML logs for data analysis in Excel',
	'tool.xml-to-csv.use_case.3':
		'Migrating product catalogs from XML to CSV for e-commerce platforms',
	'tool.xml-to-csv.use_case.4': 'Analyzing XML API responses by converting to tabular format',

	'tool.xml-xpath.display_name': 'XPath-Abfrage',
	'tool.xml-xpath.tagline': 'XML-Daten mit XPath-Ausdrücken abfragen',
	'tool.xml-xpath.description':
		'XPath-1.0-Ausdrücke gegen XML-Dokumente ausführen. Unterstützt Elementauswahl, Attributfilterung und alle standardmäßigen XPath-Achsen und -Funktionen.',
	'tool.xml-xpath.primary_keyword': 'xpath query',
	'tool.xml-xpath.meta_title': 'XPath-Abfragewerkzeug — fmtly.dev',
	'tool.xml-xpath.meta_description':
		'XML mit XPath-Ausdrücken im Browser abfragen. Unterstützt alle XPath-1.0-Operatoren. Keine Daten hochgeladen.',
	'tool.xml-xpath.operation': 'Abfragen',

	// ── YAML tools ──────────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'YAML-Formatierer',
	'tool.yaml-formatter.tagline': 'YAML mit einheitlichem Einzug formatieren und verschönern',
	'tool.yaml-formatter.description':
		'YAML-Dateien mit einheitlichem 2-Leerzeichen-Einzug formatieren. Validiert YAML-Syntax und normalisiert Anführungszeichen, Anker und Schlüsselreihenfolge.',
	'tool.yaml-formatter.primary_keyword': 'yaml formatter',
	'tool.yaml-formatter.meta_title': 'YAML-Formatierer & Verschönerer — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		'YAML im Browser formatieren und verschönern. Validiert Syntax und normalisiert Einzug. Keine Daten verlassen Ihr Gerät.',
	'tool.yaml-formatter.operation': 'Formatieren',

	'tool.yaml-validator.display_name': 'YAML-Validator',
	'tool.yaml-validator.tagline': 'YAML-Syntax und -Struktur validieren',
	'tool.yaml-validator.description':
		'YAML-Dokumente auf Syntaxfehler prüfen. Identifiziert Einzugsprobleme, doppelte Schlüssel und ungültige Zeichen mit präzisen Zeilennummern.',
	'tool.yaml-validator.primary_keyword': 'yaml validator',
	'tool.yaml-validator.meta_title': 'YAML-Validator — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'YAML im Browser validieren. Erkennt Syntaxfehler mit Zeilennummern. Keine Daten verlassen Ihr Gerät.',
	'tool.yaml-validator.operation': 'Validieren',

	'tool.yaml-to-json.display_name': 'YAML zu JSON',
	'tool.yaml-to-json.tagline': 'YAML in JSON-Format konvertieren',
	'tool.yaml-to-json.description':
		'YAML-Dokumente in formatiertes JSON konvertieren. Verarbeitet Anker, Aliase, Mehrfachdokument-YAML und alle YAML-Datentypen.',
	'tool.yaml-to-json.primary_keyword': 'yaml to json',
	'tool.yaml-to-json.meta_title': 'YAML-zu-JSON-Konverter — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		'YAML sofort im Browser in JSON konvertieren. Verarbeitet Anker, Aliase und Mehrfachdokument-YAML. Keine Daten hochgeladen.',
	'tool.yaml-to-json.operation': 'Konvertieren',

	'tool.yaml-to-xml.display_name': 'YAML zu XML',
	'tool.yaml-to-xml.tagline': 'YAML in XML-Format konvertieren',
	'tool.yaml-to-xml.description':
		'YAML-Dokumente in wohlgeformtes XML konvertieren. Ordnet YAML-Schlüssel XML-Elementen zu und verarbeitet verschachtelte Strukturen und Arrays.',
	'tool.yaml-to-xml.primary_keyword': 'yaml to xml',
	'tool.yaml-to-xml.meta_title': 'YAML-zu-XML-Konverter — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		'YAML sofort im Browser in XML konvertieren. Keine Daten hochgeladen.',
	'tool.yaml-to-xml.operation': 'Konvertieren',

	'tool.yaml-to-csv.display_name': 'YAML zu CSV',
	'tool.yaml-to-csv.tagline': 'YAML-Arrays in CSV-Format konvertieren',
	'tool.yaml-to-csv.description':
		'YAML-Arrays von Objekten in CSV-Format konvertieren. Extrahiert Überschriften aus Objektschlüsseln und formatiert Daten in Zeilen.',
	'tool.yaml-to-csv.primary_keyword': 'yaml to csv',
	'tool.yaml-to-csv.meta_title': 'YAML-zu-CSV-Konverter — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		'YAML sofort im Browser in CSV konvertieren. Keine Daten hochgeladen.',
	'tool.yaml-to-csv.operation': 'Konvertieren',

	'tool.yaml-to-toml.display_name': 'YAML zu TOML',
	'tool.yaml-to-toml.tagline': 'YAML in TOML-Konfigurationsformat konvertieren',
	'tool.yaml-to-toml.description':
		'YAML-Konfigurationsdateien in TOML-Format konvertieren. Verarbeitet verschachtelte Tabellen, Arrays und alle YAML-Datentypen.',
	'tool.yaml-to-toml.primary_keyword': 'yaml to toml',
	'tool.yaml-to-toml.meta_title': 'YAML-zu-TOML-Konverter — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		'YAML sofort im Browser in TOML konvertieren. Keine Daten hochgeladen.',
	'tool.yaml-to-toml.operation': 'Konvertieren',

	'tool.yaml-diff.display_name': 'YAML-Diff',
	'tool.yaml-diff.tagline': 'Zwei YAML-Dokumente nebeneinander vergleichen',
	'tool.yaml-diff.description':
		'Zwei YAML-Dokumente vergleichen und Ergänzungen, Löschungen und Änderungen hervorheben. Versteht YAML-Struktur für semantischen Vergleich.',
	'tool.yaml-diff.primary_keyword': 'yaml diff',
	'tool.yaml-diff.meta_title': 'YAML-Diff-Werkzeug — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'Zwei YAML-Dokumente im Browser vergleichen. Hebt alle Ergänzungen, Löschungen und Änderungen hervor. Keine Daten hochgeladen.',
	'tool.yaml-diff.operation': 'Vergleichen',

	// ── CSV tools ───────────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': 'CSV zu JSON',
	'tool.csv-to-json.tagline': 'CSV-Daten in ein JSON-Array konvertieren',
	'tool.csv-to-json.description':
		'CSV mit Überschriften in ein JSON-Array von Objekten konvertieren. Unterstützt dynamische Typerkennung für Zahlen und Boolesche Werte sowie benutzerdefinierte Trennzeichenoptionen.',
	'tool.csv-to-json.primary_keyword': 'csv to json',
	'tool.csv-to-json.meta_title': 'CSV-zu-JSON-Konverter — fmtly.dev',
	'tool.csv-to-json.meta_description':
		'CSV sofort im Browser in JSON konvertieren. Unterstützt Überschriften, dynamische Typisierung und benutzerdefinierte Trennzeichen. Keine Daten hochgeladen.',
	'tool.csv-to-json.operation': 'Konvertieren',

	'tool.csv-to-xml.display_name': 'CSV zu XML',
	'tool.csv-to-xml.tagline': 'CSV-Daten in XML-Format konvertieren',
	'tool.csv-to-xml.description':
		'CSV-Dateien in wohlgeformtes XML konvertieren. Ordnet Spaltenüberschriften Elementnamen zu und generiert Zeilenelemente für jeden Datensatz.',
	'tool.csv-to-xml.primary_keyword': 'csv to xml',
	'tool.csv-to-xml.meta_title': 'CSV-zu-XML-Konverter — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		'CSV sofort im Browser in XML konvertieren. Ordnet Überschriften Elementnamen zu. Keine Daten hochgeladen.',
	'tool.csv-to-xml.operation': 'Konvertieren',

	'tool.csv-to-yaml.display_name': 'CSV zu YAML',
	'tool.csv-to-yaml.tagline': 'CSV-Daten in YAML-Format konvertieren',
	'tool.csv-to-yaml.description':
		'CSV-Dateien in YAML-Arrays von Objekten konvertieren. Ordnet Spaltenüberschriften YAML-Schlüsseln für jede Zeile zu.',
	'tool.csv-to-yaml.primary_keyword': 'csv to yaml',
	'tool.csv-to-yaml.meta_title': 'CSV-zu-YAML-Konverter — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		'CSV sofort im Browser in YAML konvertieren. Keine Daten hochgeladen.',
	'tool.csv-to-yaml.operation': 'Konvertieren',

	'tool.csv-to-html.display_name': 'CSV zu HTML-Tabelle',
	'tool.csv-to-html.tagline': 'CSV-Daten in eine HTML-Tabelle konvertieren',
	'tool.csv-to-html.description':
		'CSV-Dateien in formatierte HTML-Tabellen konvertieren. Verwendet die erste Zeile als Spaltenüberschriften.',
	'tool.csv-to-html.primary_keyword': 'csv to html table',
	'tool.csv-to-html.meta_title': 'CSV-zu-HTML-Tabellen-Konverter — fmtly.dev',
	'tool.csv-to-html.meta_description':
		'CSV sofort im Browser in HTML-Tabelle konvertieren. Keine Daten hochgeladen.',
	'tool.csv-to-html.operation': 'Konvertieren',

	'tool.csv-formatter.display_name': 'CSV-Formatierer',
	'tool.csv-formatter.tagline': 'CSV-Daten formatieren und normalisieren',
	'tool.csv-formatter.description':
		'CSV-Daten mit einheitlichen Trennzeichen, Anführungszeichen und Zeilenenden bereinigen und formatieren. Validiert CSV-Struktur und normalisiert Leerzeichen.',
	'tool.csv-formatter.primary_keyword': 'csv formatter',
	'tool.csv-formatter.meta_title': 'CSV-Formatierer — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'CSV-Daten im Browser formatieren und bereinigen. Keine Daten hochgeladen.',
	'tool.csv-formatter.operation': 'Formatieren',

	'tool.csv-validator.display_name': 'CSV-Validator',
	'tool.csv-validator.tagline': 'CSV-Struktur und -Syntax validieren',
	'tool.csv-validator.description':
		'CSV-Dateien auf einheitliche Spaltenanzahl, korrekte Anführungszeichen und Kodierungsprobleme prüfen. Identifiziert fehlerhafte Zeilen mit präzisen Zeilennummern.',
	'tool.csv-validator.primary_keyword': 'csv validator',
	'tool.csv-validator.meta_title': 'CSV-Validator — fmtly.dev',
	'tool.csv-validator.meta_description':
		'CSV im Browser validieren. Erkennt Strukturfehler mit Zeilennummern. Keine Daten verlassen Ihr Gerät.',
	'tool.csv-validator.operation': 'Validieren',

	// ── Text tools ──────────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Wortzähler',
	'tool.text-word-counter.tagline': 'Wörter, Zeichen und Sätze im Text zählen',
	'tool.text-word-counter.description':
		'Wörter, Zeichen, Sätze und Absätze in beliebigem Text zählen. Zeigt geschätzte Lesezeit und durchschnittliche Wortlänge an.',
	'tool.text-word-counter.primary_keyword': 'word counter',
	'tool.text-word-counter.meta_title': 'Wortzähler — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Wörter, Zeichen und Sätze im Browser zählen. Mit geschätzter Lesezeit. Keine Daten hochgeladen.',
	'tool.text-word-counter.operation': 'Zählen',

	'tool.text-readability.display_name': 'Lesbarkeitsanalyse',
	'tool.text-readability.tagline': 'Lesbarkeits-Scores für Text messen',
	'tool.text-readability.description':
		'Flesch-Kincaid, Gunning Fog und andere Lesbarkeits-Scores für beliebigen Text berechnen. Hilft dabei, Inhalte für die Zielgruppe zu optimieren.',
	'tool.text-readability.primary_keyword': 'readability analyzer',
	'tool.text-readability.meta_title': 'Lesbarkeitsanalyse — fmtly.dev',
	'tool.text-readability.meta_description':
		'Lesbarkeit von Text im Browser mit Flesch-Kincaid und anderen Scores messen. Keine Daten hochgeladen.',
	'tool.text-readability.operation': 'Analysieren',

	'tool.text-line-sorter.display_name': 'Zeilensortierer',
	'tool.text-line-sorter.tagline': 'Textzeilen alphabetisch oder nach Länge sortieren',
	'tool.text-line-sorter.description':
		'Zeilen alphabetisch, numerisch oder nach Länge sortieren. Unterstützt auf- und absteigende Reihenfolge sowie Groß-/Kleinschreibung-unabhängige Sortierung.',
	'tool.text-line-sorter.primary_keyword': 'line sorter',
	'tool.text-line-sorter.meta_title': 'Zeilensortierer — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Textzeilen im Browser sortieren. Unterstützt alphabetische, numerische und längenbasierte Sortierung. Keine Daten hochgeladen.',
	'tool.text-line-sorter.operation': 'Sortieren',

	'tool.text-deduplicate.display_name': 'Duplikatzeilen-Entferner',
	'tool.text-deduplicate.tagline': 'Doppelte Zeilen aus Text entfernen',
	'tool.text-deduplicate.description':
		'Doppelte Zeilen aus beliebigem Text entfernen. Unterstützt Groß-/Kleinschreibung-sensitiven und -insensitiven Abgleich und behält die ursprüngliche Zeilenreihenfolge bei.',
	'tool.text-deduplicate.primary_keyword': 'remove duplicate lines',
	'tool.text-deduplicate.meta_title': 'Duplikatzeilen-Entferner — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Doppelte Zeilen aus Text im Browser entfernen. Optionen für Groß-/Kleinschreibung. Keine Daten hochgeladen.',
	'tool.text-deduplicate.operation': 'Deduplizieren',

	'tool.text-whitespace.display_name': 'Leerzeichen-Bereiniger',
	'tool.text-whitespace.tagline': 'Überflüssige Leerzeichen entfernen und Abstände normalisieren',
	'tool.text-whitespace.description':
		'Überflüssige Leerzeichen, Tabs und Leerzeilen aus Text entfernen. Normalisiert mehrfache Leerzeichen zu einzelnen Leerzeichen und entfernt führende und nachfolgende Leerzeichen.',
	'tool.text-whitespace.primary_keyword': 'whitespace cleaner',
	'tool.text-whitespace.meta_title': 'Leerzeichen-Bereiniger — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Überflüssige Leerzeichen aus Text im Browser entfernen. Normalisiert Abstände und kürzt Zeilen. Keine Daten hochgeladen.',
	'tool.text-whitespace.operation': 'Bereinigen',

	'tool.text-markdown-to-html.display_name': 'Markdown zu HTML',
	'tool.text-markdown-to-html.tagline': 'Markdown in HTML konvertieren',
	'tool.text-markdown-to-html.description':
		'Markdown-Text in HTML konvertieren. Unterstützt Überschriften, Listen, Tabellen, Codeblöcke, Links, Bilder und alle CommonMark-Funktionen.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown to html',
	'tool.text-markdown-to-html.meta_title': 'Markdown-zu-HTML-Konverter — fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Markdown sofort im Browser in HTML konvertieren. Unterstützt alle CommonMark-Funktionen. Keine Daten hochgeladen.',
	'tool.text-markdown-to-html.operation': 'Konvertieren',

	'tool.text-html-to-markdown.display_name': 'HTML zu Markdown',
	'tool.text-html-to-markdown.tagline': 'HTML in Markdown konvertieren',
	'tool.text-html-to-markdown.description':
		'HTML in sauberes Markdown konvertieren. Verarbeitet Überschriften, Absätze, Listen, Tabellen, Codeblöcke und Inline-Formatierung.',
	'tool.text-html-to-markdown.primary_keyword': 'html to markdown',
	'tool.text-html-to-markdown.meta_title': 'HTML-zu-Markdown-Konverter — fmtly.dev',
	'tool.text-html-to-markdown.meta_description':
		'HTML sofort im Browser in Markdown konvertieren. Keine Daten hochgeladen.',
	'tool.text-html-to-markdown.operation': 'Konvertieren',

	'tool.text-reverser.display_name': 'Text-Umkehrer',
	'tool.text-reverser.tagline': 'Text, Wörter oder Zeilen umkehren',
	'tool.text-reverser.description':
		'Text zeichenweise, wortweise oder zeilenweise umkehren. Bidirektional — in beide Richtungen einfügen.',
	'tool.text-reverser.primary_keyword': 'text reverser',
	'tool.text-reverser.meta_title': 'Text-Umkehrer — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Text sofort im Browser umkehren. Zeichen, Wörter oder Zeilen umkehren. Keine Daten hochgeladen.',
	'tool.text-reverser.operation': 'Umkehren',

	// ── Code tools ──────────────────────────────────────────────────────────
	'tool.code-css.display_name': 'CSS-Formatierer',
	'tool.code-css.tagline': 'CSS-Stylesheets formatieren und verschönern',
	'tool.code-css.description':
		'CSS mit einheitlichem Einzug und Eigenschaftsreihenfolge formatieren. Unterstützt Prettier-Stil-Formatierung mit konfigurierbarer Zeilenbreite.',
	'tool.code-css.primary_keyword': 'css formatter',
	'tool.code-css.meta_title': 'CSS-Formatierer & Verschönerer — fmtly.dev',
	'tool.code-css.meta_description':
		'CSS im Browser formatieren und verschönern. Konfigurierbarer Einzug und Eigenschaftsreihenfolge. Keine Daten verlassen Ihr Gerät.',
	'tool.code-css.operation': 'Formatieren',

	'tool.code-scss.display_name': 'SCSS-Formatierer',
	'tool.code-scss.tagline': 'SCSS-Stylesheets formatieren und verschönern',
	'tool.code-scss.description':
		'SCSS-Dateien mit einheitlichem Einzug formatieren. Unterstützt Variablen, verschachtelte Regeln, Mixins und alle SCSS-spezifische Syntax.',
	'tool.code-scss.primary_keyword': 'scss formatter',
	'tool.code-scss.meta_title': 'SCSS-Formatierer & Verschönerer — fmtly.dev',
	'tool.code-scss.meta_description':
		'SCSS im Browser formatieren und verschönern. Keine Daten verlassen Ihr Gerät.',
	'tool.code-scss.operation': 'Formatieren',

	'tool.code-less.display_name': 'LESS-Formatierer',
	'tool.code-less.tagline': 'LESS-Stylesheets formatieren und verschönern',
	'tool.code-less.description':
		'LESS-Dateien mit einheitlichem Einzug formatieren. Unterstützt Variablen, Mixins, Verschachtelung und alle LESS-spezifische Syntax.',
	'tool.code-less.primary_keyword': 'less formatter',
	'tool.code-less.meta_title': 'LESS-Formatierer & Verschönerer — fmtly.dev',
	'tool.code-less.meta_description':
		'LESS im Browser formatieren und verschönern. Keine Daten verlassen Ihr Gerät.',
	'tool.code-less.operation': 'Formatieren',

	'tool.code-html.display_name': 'HTML-Formatierer',
	'tool.code-html.tagline': 'HTML-Markup formatieren und verschönern',
	'tool.code-html.description':
		'HTML mit korrektem Einzug und Tag-Verschachtelung formatieren. Verarbeitet Inline- und Block-Elemente, Attribute sowie eingebettetes CSS und JavaScript.',
	'tool.code-html.primary_keyword': 'html formatter',
	'tool.code-html.meta_title': 'HTML-Formatierer & Verschönerer — fmtly.dev',
	'tool.code-html.meta_description':
		'HTML im Browser formatieren und verschönern. Korrekter Einzug und Tag-Verschachtelung. Keine Daten verlassen Ihr Gerät.',
	'tool.code-html.operation': 'Formatieren',

	'tool.code-javascript.display_name': 'JavaScript-Formatierer',
	'tool.code-javascript.tagline': 'JavaScript-Code formatieren und verschönern',
	'tool.code-javascript.description':
		'JavaScript mit Prettier-Stil-Formatierung formatieren. Unterstützt ES2022+, JSX, Modulsyntax und konfigurierbare Optionen wie Semikolons und einfache Anführungszeichen.',
	'tool.code-javascript.primary_keyword': 'javascript formatter',
	'tool.code-javascript.meta_title': 'JavaScript-Formatierer & Verschönerer — fmtly.dev',
	'tool.code-javascript.meta_description':
		'JavaScript im Browser formatieren und verschönern. Unterstützt moderne ES-Syntax. Keine Daten verlassen Ihr Gerät.',
	'tool.code-javascript.operation': 'Formatieren',

	'tool.code-typescript.display_name': 'TypeScript-Formatierer',
	'tool.code-typescript.tagline': 'TypeScript-Code formatieren und verschönern',
	'tool.code-typescript.description':
		'TypeScript mit Prettier-Stil-Formatierung formatieren. Unterstützt alle TypeScript-Funktionen einschließlich Generics, Dekoratoren und Typannotationen.',
	'tool.code-typescript.primary_keyword': 'typescript formatter',
	'tool.code-typescript.meta_title': 'TypeScript-Formatierer & Verschönerer — fmtly.dev',
	'tool.code-typescript.meta_description':
		'TypeScript im Browser formatieren und verschönern. Unterstützt alle TypeScript-Syntax. Keine Daten verlassen Ihr Gerät.',
	'tool.code-typescript.operation': 'Formatieren',

	'tool.code-graphql.display_name': 'GraphQL-Formatierer',
	'tool.code-graphql.tagline': 'GraphQL-Schemata und -Abfragen formatieren und verschönern',
	'tool.code-graphql.description':
		'GraphQL-Schemata und -Abfragen mit einheitlichem Einzug formatieren. Unterstützt SDL, Abfragen, Mutationen, Abonnements und Fragmente.',
	'tool.code-graphql.primary_keyword': 'graphql formatter',
	'tool.code-graphql.meta_title': 'GraphQL-Formatierer & Verschönerer — fmtly.dev',
	'tool.code-graphql.meta_description':
		'GraphQL im Browser formatieren und verschönern. Unterstützt SDL, Abfragen und Mutationen. Keine Daten verlassen Ihr Gerät.',
	'tool.code-graphql.operation': 'Formatieren',

	'tool.code-markdown.display_name': 'Markdown-Formatierer',
	'tool.code-markdown.tagline': 'Markdown-Dokumente formatieren und normalisieren',
	'tool.code-markdown.description':
		'Markdown mit einheitlichen Überschriftenstilen, Listeneinzug und Tabellenausrichtung formatieren. Normalisiert Leerzeichen und Leerzeilen.',
	'tool.code-markdown.primary_keyword': 'markdown formatter',
	'tool.code-markdown.meta_title': 'Markdown-Formatierer — fmtly.dev',
	'tool.code-markdown.meta_description':
		'Markdown im Browser formatieren und normalisieren. Keine Daten verlassen Ihr Gerät.',
	'tool.code-markdown.operation': 'Formatieren',

	'tool.code-curl-to-fetch.display_name': 'cURL zu Fetch',
	'tool.code-curl-to-fetch.tagline': 'cURL-Befehle in JavaScript fetch() konvertieren',
	'tool.code-curl-to-fetch.description':
		'cURL-Befehle in native JavaScript-fetch()-Aufrufe konvertieren. Verarbeitet Header, Request-Body, Authentifizierung und alle gängigen cURL-Optionen.',
	'tool.code-curl-to-fetch.primary_keyword': 'curl to fetch converter',
	'tool.code-curl-to-fetch.meta_title': 'cURL-zu-Fetch-Konverter — fmtly.dev',
	'tool.code-curl-to-fetch.meta_description':
		'cURL-Befehle im Browser in JavaScript fetch() konvertieren. Verarbeitet Header, Body und Authentifizierung. Keine Daten hochgeladen.',
	'tool.code-curl-to-fetch.operation': 'Konvertieren',

	'tool.code-curl-to-axios.display_name': 'cURL zu Axios',
	'tool.code-curl-to-axios.tagline': 'cURL-Befehle in Axios-Anfragen konvertieren',
	'tool.code-curl-to-axios.description':
		'cURL-Befehle in Axios-Anfrage-Aufrufe konvertieren. Verarbeitet Header, Request-Body, Authentifizierung und alle gängigen cURL-Optionen.',
	'tool.code-curl-to-axios.primary_keyword': 'curl to axios converter',
	'tool.code-curl-to-axios.meta_title': 'cURL-zu-Axios-Konverter — fmtly.dev',
	'tool.code-curl-to-axios.meta_description':
		'cURL-Befehle im Browser in Axios-Anfragen konvertieren. Verarbeitet Header, Body und Authentifizierung. Keine Daten hochgeladen.',
	'tool.code-curl-to-axios.operation': 'Konvertieren',

	// ── Color tools ──────────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Farbkonverter',
	'tool.color-converter.tagline': 'Farben zwischen HEX, RGB, HSL und mehr konvertieren',
	'tool.color-converter.description':
		'Farben zwischen HEX, RGB, RGBA, HSL, HSLA und benannten CSS-Farbformaten konvertieren. Zeigt eine Live-Vorschau der ausgewählten Farbe.',
	'tool.color-converter.primary_keyword': 'color converter',
	'tool.color-converter.meta_title': 'Farbkonverter — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Farben zwischen HEX, RGB, HSL und benannten CSS-Farben im Browser konvertieren. Mit Live-Vorschau.',
	'tool.color-converter.operation': 'Konvertieren',

	'tool.color-contrast.display_name': 'Farbkontrast-Prüfer',
	'tool.color-contrast.tagline': 'WCAG-Kontrastverhältnis zwischen zwei Farben prüfen',
	'tool.color-contrast.description':
		'Das Kontrastverhältnis zwischen zwei Farben berechnen und die WCAG-2.1-AA- und -AAA-Barrierefreiheitskonformität für normalen und großen Text prüfen.',
	'tool.color-contrast.primary_keyword': 'color contrast checker',
	'tool.color-contrast.meta_title': 'Farbkontrast-Prüfer — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Farbkontrastverhältnis für WCAG-AA- und -AAA-Konformität im Browser prüfen.',
	'tool.color-contrast.operation': 'Prüfen',

	// ── Crypto tools ─────────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'HMAC-Generator',
	'tool.crypto-hmac.tagline': 'HMAC-Signaturen mit SHA-Algorithmen generieren',
	'tool.crypto-hmac.description':
		'HMAC-Signaturen mit SHA-256, SHA-384 oder SHA-512 generieren. Gibt hex- oder Base64-kodierte Signaturen über die Web Crypto API aus.',
	'tool.crypto-hmac.primary_keyword': 'hmac generator',
	'tool.crypto-hmac.meta_title': 'HMAC-Generator — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		'HMAC-Signaturen im Browser mit der Web Crypto API generieren. Unterstützt SHA-256, SHA-384 und SHA-512.',
	'tool.crypto-hmac.operation': 'Generieren',

	'tool.crypto-password-strength.display_name': 'Passwortstärke-Prüfer',
	'tool.crypto-password-strength.tagline': 'Passwortstärke und Entropie analysieren',
	'tool.crypto-password-strength.description':
		'Passwortstärke mit Entropieberechnung, Mustererkennung und geschätzter Knackzeit bewerten. Es werden keine Daten an Server gesendet.',
	'tool.crypto-password-strength.primary_keyword': 'password strength checker',
	'tool.crypto-password-strength.meta_title': 'Passwortstärke-Prüfer — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		'Passwortstärke und Entropie im Browser prüfen. Kein Passwort wird übertragen. 100 % clientseitig.',
	'tool.crypto-password-strength.operation': 'Analysieren',

	'tool.crypto-ulid.display_name': 'ULID-Generator',
	'tool.crypto-ulid.tagline':
		'Universell eindeutige lexikographisch sortierbare Bezeichner generieren',
	'tool.crypto-ulid.description':
		'ULIDs generieren — zeitgeordnete, URL-sichere Bezeichner, die sortierbar und kollisionsresistent sind. Verwendet die Web Crypto API für kryptographische Zufälligkeit.',
	'tool.crypto-ulid.primary_keyword': 'ulid generator',
	'tool.crypto-ulid.meta_title': 'ULID-Generator — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		'ULIDs im Browser mit der Web Crypto API generieren. Sortierbare, URL-sichere Bezeichner.',
	'tool.crypto-ulid.operation': 'Generieren',

	'tool.crypto-random-string.display_name': 'Zufallszeichenketten-Generator',
	'tool.crypto-random-string.tagline': 'Kryptographisch sichere Zufallszeichenketten generieren',
	'tool.crypto-random-string.description':
		'Kryptographisch sichere Zufallszeichenketten mit konfigurierbarer Länge und Zeichensätzen generieren. Verwendet die Web Crypto API für echte Zufälligkeit.',
	'tool.crypto-random-string.primary_keyword': 'random string generator',
	'tool.crypto-random-string.meta_title': 'Zufallszeichenketten-Generator — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		'Sichere Zufallszeichenketten im Browser mit der Web Crypto API generieren. Konfigurierbare Länge und Zeichensätze.',
	'tool.crypto-random-string.operation': 'Generieren',

	// ── Diff tools ───────────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Text-Diff',
	'tool.diff-text.tagline': 'Zwei Textblöcke vergleichen und Unterschiede hervorheben',
	'tool.diff-text.description':
		'Zwei Textblöcke nebeneinander vergleichen und hinzugefügte, entfernte und unveränderte Zeilen hervorheben. Unterstützt wort- und zeilenbasierte Diff-Modi.',
	'tool.diff-text.primary_keyword': 'text diff',
	'tool.diff-text.meta_title': 'Text-Diff-Werkzeug — fmtly.dev',
	'tool.diff-text.meta_description':
		'Zwei Textblöcke im Browser vergleichen. Hebt Ergänzungen und Löschungen auf Wort- oder Zeilenebene hervor. Keine Daten hochgeladen.',
	'tool.diff-text.operation': 'Vergleichen',

	// ── Encode tools ─────────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Base64 Encoder / Decoder',
	'tool.encode-base64.tagline': 'Base64-Zeichenketten kodieren und dekodieren',
	'tool.encode-base64.description':
		'Text oder Binärdaten in Base64 kodieren und Base64-Zeichenketten zurück in Text dekodieren. Unterstützt Standard- und URL-sichere Base64-Varianten.',
	'tool.encode-base64.primary_keyword': 'base64 encoder decoder',
	'tool.encode-base64.meta_title': 'Base64 Encoder & Decoder — fmtly.dev',
	'tool.encode-base64.meta_description':
		'Base64 im Browser kodieren und dekodieren. Unterstützt Standard- und URL-sichere Varianten. Keine Daten hochgeladen.',
	'tool.encode-base64.operation': 'Kodieren / Dekodieren',

	'tool.encode-url.display_name': 'URL Encoder / Decoder',
	'tool.encode-url.tagline': 'URL-kodierte Zeichenketten kodieren und dekodieren',
	'tool.encode-url.description':
		'URLs und URL-Komponenten prozent-kodieren oder prozent-kodierte Zeichenketten dekodieren. Verarbeitet alle reservierten und Sonderzeichen gemäß RFC 3986.',
	'tool.encode-url.primary_keyword': 'url encoder decoder',
	'tool.encode-url.meta_title': 'URL Encoder & Decoder — fmtly.dev',
	'tool.encode-url.meta_description':
		'URLs im Browser kodieren und dekodieren. Verarbeitet alle Sonderzeichen. Keine Daten hochgeladen.',
	'tool.encode-url.operation': 'Kodieren / Dekodieren',

	'tool.encode-html.display_name': 'HTML Encoder / Decoder',
	'tool.encode-html.tagline': 'HTML-Entities kodieren und dekodieren',
	'tool.encode-html.description':
		'Sonderzeichen in HTML-Entities umwandeln und umgekehrt. Verarbeitet &amp;, &lt;, &gt;, &quot; und alle anderen HTML-Sonderzeichen.',
	'tool.encode-html.primary_keyword': 'html encoder decoder',
	'tool.encode-html.meta_title': 'HTML Encoder & Decoder — fmtly.dev',
	'tool.encode-html.meta_description':
		'HTML-Entities im Browser kodieren und dekodieren. Keine Daten hochgeladen.',
	'tool.encode-html.operation': 'Kodieren / Dekodieren',

	'tool.encode-html-entities.display_name': 'HTML-Entities-Referenz',
	'tool.encode-html-entities.tagline': 'HTML-Entity-Codes durchsuchen und nachschlagen',
	'tool.encode-html-entities.description':
		'Alle HTML-Entities mit dezimalen, hexadezimalen und benannten Formen suchen und durchsuchen. Mit Unicode-Codepunkten und visuellen Vorschauen.',
	'tool.encode-html-entities.primary_keyword': 'html entities reference',
	'tool.encode-html-entities.meta_title': 'HTML-Entities-Referenz — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Alle HTML-Entities im Browser durchsuchen. Nach Name, Dezimal- oder Hex-Code suchen.',
	'tool.encode-html-entities.operation': 'Nachschlagen',

	'tool.encode-unicode.display_name': 'Unicode-Analysator',
	'tool.encode-unicode.tagline': 'Unicode-Codepunkte in Text analysieren',
	'tool.encode-unicode.description':
		'Beliebigen Text in seine Unicode-Codepunkte mit Hex-, CSS-Escape-, JavaScript-Escape- und UTF-8-Byte-Darstellungen dekodieren. Verarbeitet Emoji und Multi-Codepunkt-Sequenzen.',
	'tool.encode-unicode.primary_keyword': 'unicode analyzer',
	'tool.encode-unicode.meta_title': 'Unicode-Analysator — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Unicode-Codepunkte im Browser analysieren. Hex-, CSS-Escape-, JS-Escape- und UTF-8-Bytes untersuchen.',
	'tool.encode-unicode.operation': 'Analysieren',

	// ── Escape tools ─────────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'JSON-Zeichenketten-Maskierung',
	'tool.escape-json.tagline': 'JSON-Zeichenketten maskieren und demaskieren',
	'tool.escape-json.description':
		'Sonderzeichen in Zeichenketten für die Verwendung innerhalb von JSON-Werten maskieren oder JSON-Zeichenkettenwerte zurück in einfachen Text demaskieren. Verarbeitet Zeilenumbrüche, Tabs, Anführungszeichen und Backslashes.',
	'tool.escape-json.primary_keyword': 'json escape unescape',
	'tool.escape-json.meta_title': 'JSON-Zeichenketten-Maskierung & Demaskierung — fmtly.dev',
	'tool.escape-json.meta_description':
		'JSON-Zeichenketten im Browser maskieren und demaskieren. Keine Daten hochgeladen.',
	'tool.escape-json.operation': 'Maskieren / Demaskieren',

	// ── File tools ───────────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'Datei-Hash-Rechner',
	'tool.file-hash.tagline': 'MD5-, SHA-1-, SHA-256- und SHA-512-Datei-Hashes berechnen',
	'tool.file-hash.description':
		'Kryptographische Hash-Werte für beliebige Dateien berechnen. Unterstützt MD5, SHA-1, SHA-256 und SHA-512. Läuft vollständig im Browser.',
	'tool.file-hash.primary_keyword': 'file hash calculator',
	'tool.file-hash.meta_title': 'Datei-Hash-Rechner — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		'Datei-Hashes im Browser berechnen. Unterstützt MD5, SHA-1, SHA-256 und SHA-512. Keine Datei wird hochgeladen.',
	'tool.file-hash.operation': 'Hashen',

	// ── Generate tools ───────────────────────────────────────────────────────
	'tool.generate-uuid.display_name': 'UUID-Generator',
	'tool.generate-uuid.tagline': 'Zufällige UUIDs (v4) generieren',
	'tool.generate-uuid.description':
		'RFC-4122-Version-4-UUIDs mit der Web Crypto API generieren. Einzelne oder massenweise UUIDs mit einem Klick generieren.',
	'tool.generate-uuid.primary_keyword': 'uuid generator',
	'tool.generate-uuid.meta_title': 'UUID-Generator — fmtly.dev',
	'tool.generate-uuid.meta_description':
		'Zufällige UUIDs im Browser mit der Web Crypto API generieren. RFC-4122-v4-konform.',
	'tool.generate-uuid.operation': 'Generieren',

	// ── Image tools ──────────────────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Bild-Komprimierer',
	'tool.image-compressor.tagline': 'Bilder ohne Qualitätsverlust komprimieren',
	'tool.image-compressor.description':
		'JPEG-, PNG- und WebP-Bilder im Browser komprimieren. Qualitätseinstellungen anpassen und vor dem Herunterladen eine Vorschau anzeigen. Keine Bilder werden hochgeladen.',
	'tool.image-compressor.primary_keyword': 'image compressor',
	'tool.image-compressor.meta_title': 'Bild-Komprimierer — fmtly.dev',
	'tool.image-compressor.meta_description':
		'Bilder im Browser komprimieren. Unterstützt JPEG, PNG und WebP. Keine Bilder werden hochgeladen.',
	'tool.image-compressor.operation': 'Komprimieren',

	// ── Number tools ─────────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Zahlenformatierer',
	'tool.number-formatter.tagline': 'Zahlen mit gebietsschemaspezifischen Trennzeichen formatieren',
	'tool.number-formatter.description':
		'Zahlen mit Tausendertrennzeichen, Dezimalstellen und gebietsschemaspezifischer Notation formatieren. Unterstützt Währungsformatierung und wissenschaftliche Notation.',
	'tool.number-formatter.primary_keyword': 'number formatter',
	'tool.number-formatter.meta_title': 'Zahlenformatierer — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Zahlen mit Gebietsschema-Trennzeichen und Währungssymbolen im Browser formatieren.',
	'tool.number-formatter.operation': 'Formatieren',

	'tool.number-roman.display_name': 'Römische Zahlen Konverter',
	'tool.number-roman.tagline': 'Zwischen römischen Zahlen und ganzen Zahlen konvertieren',
	'tool.number-roman.description':
		'Ganze Zahlen in römische Zahlen umwandeln und umgekehrt. Unterstützt Zahlen von 1 bis 3999 mit Standard-Römisch-Notation.',
	'tool.number-roman.primary_keyword': 'roman numeral converter',
	'tool.number-roman.meta_title': 'Römische Zahlen Konverter — fmtly.dev',
	'tool.number-roman.meta_description':
		'Zwischen römischen Zahlen und ganzen Zahlen im Browser konvertieren.',
	'tool.number-roman.operation': 'Konvertieren',

	'tool.number-percentage.display_name': 'Prozentrechner',
	'tool.number-percentage.tagline': 'Prozentwerte, Zunahmen und Abnahmen berechnen',
	'tool.number-percentage.description':
		'Prozentwerte, prozentuale Änderungen und Prozentwerte von Gesamtsummen berechnen. Unterstützt Zu-/Abnahmeberechnungen und umgekehrte Prozentsuche.',
	'tool.number-percentage.primary_keyword': 'percentage calculator',
	'tool.number-percentage.meta_title': 'Prozentrechner — fmtly.dev',
	'tool.number-percentage.meta_description':
		'Prozentwerte und prozentuale Änderungen im Browser berechnen.',
	'tool.number-percentage.operation': 'Berechnen',

	'tool.number-scientific.display_name': 'Wissenschaftliche Notation Konverter',
	'tool.number-scientific.tagline': 'Zahlen in wissenschaftliche Notation und zurück konvertieren',
	'tool.number-scientific.description':
		'Zahlen in wissenschaftliche Notation und zurück konvertieren. Zeigt Mantisse, Exponent und äquivalente Ingenieurnotation.',
	'tool.number-scientific.primary_keyword': 'scientific notation converter',
	'tool.number-scientific.meta_title': 'Wissenschaftliche Notation Konverter — fmtly.dev',
	'tool.number-scientific.meta_description':
		'Zahlen im Browser in wissenschaftliche Notation konvertieren.',
	'tool.number-scientific.operation': 'Konvertieren',

	'tool.number-statistics.display_name': 'Statistikrechner',
	'tool.number-statistics.tagline': 'Mittelwert, Median, Modus und mehr berechnen',
	'tool.number-statistics.description':
		'Deskriptive Statistiken für eine Zahlenliste berechnen: Mittelwert, Median, Modus, Standardabweichung, Varianz, Minimum, Maximum und Quartile.',
	'tool.number-statistics.primary_keyword': 'statistics calculator',
	'tool.number-statistics.meta_title': 'Statistikrechner — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Mittelwert, Median, Standardabweichung und mehr im Browser berechnen.',
	'tool.number-statistics.operation': 'Berechnen',

	'tool.number-matrix.display_name': 'Matrizenrechner',
	'tool.number-matrix.tagline': 'Matrizenoperationen und -berechnungen durchführen',
	'tool.number-matrix.description':
		'Matrizenoperationen einschließlich Addition, Subtraktion, Multiplikation, Transposition, Determinante und Inverse für Matrizen jeder Größe durchführen.',
	'tool.number-matrix.primary_keyword': 'matrix calculator',
	'tool.number-matrix.meta_title': 'Matrizenrechner — fmtly.dev',
	'tool.number-matrix.meta_description':
		'Matrizenoperationen im Browser durchführen. Unterstützt Addition, Multiplikation, Inverse und mehr.',
	'tool.number-matrix.operation': 'Berechnen',

	'tool.number-unit-converter.display_name': 'Einheitenkonverter',
	'tool.number-unit-converter.tagline': 'Zwischen Maßeinheiten konvertieren',
	'tool.number-unit-converter.description':
		'Zwischen Längen-, Gewichts-, Temperatur-, Volumen-, Flächen-, Geschwindigkeitseinheiten und mehr konvertieren. Unterstützt metrische und imperiale Systeme.',
	'tool.number-unit-converter.primary_keyword': 'unit converter',
	'tool.number-unit-converter.meta_title': 'Einheitenkonverter — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Zwischen Maßeinheiten im Browser konvertieren. Unterstützt Länge, Gewicht, Temperatur und mehr.',
	'tool.number-unit-converter.operation': 'Konvertieren',

	// ── PDF tools ─────────────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'PDF-Betrachter',
	'tool.pdf-viewer.tagline': 'PDF-Dateien ansehen und Text extrahieren',
	'tool.pdf-viewer.description':
		'PDF-Dateien im Browser anzeigen und Textinhalt extrahieren. Unterstützt mehrseitige PDFs und Textauswahl. Keine Dateien werden hochgeladen.',
	'tool.pdf-viewer.primary_keyword': 'pdf viewer',
	'tool.pdf-viewer.meta_title': 'PDF-Betrachter — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'PDF-Dateien im Browser anzeigen. Text aus beliebigen PDFs extrahieren. Keine Dateien hochgeladen.',
	'tool.pdf-viewer.operation': 'Anzeigen',

	// ── QR tools ──────────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'QR-Code-Generator',
	'tool.qr-generator.tagline': 'Anpassbare QR-Codes generieren',
	'tool.qr-generator.description':
		'QR-Codes aus Text, URLs, Kontaktdaten und mehr generieren. Größe, Fehlerkorrekturgrad und Farben anpassen. Als PNG oder SVG herunterladen.',
	'tool.qr-generator.primary_keyword': 'qr code generator',
	'tool.qr-generator.meta_title': 'QR-Code-Generator — fmtly.dev',
	'tool.qr-generator.meta_description':
		'Anpassbare QR-Codes im Browser generieren. Als PNG oder SVG herunterladen.',
	'tool.qr-generator.operation': 'Generieren',

	// ── TOML tools ────────────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'TOML-Formatierer',
	'tool.toml-formatter.tagline': 'TOML-Konfigurationsdateien formatieren und validieren',
	'tool.toml-formatter.description':
		'TOML-Dateien mit einheitlichem Abstand und Abschnittsorganisation formatieren. Validiert TOML-Syntax und hebt Fehler mit Zeilennummern hervor.',
	'tool.toml-formatter.primary_keyword': 'toml formatter',
	'tool.toml-formatter.meta_title': 'TOML-Formatierer — fmtly.dev',
	'tool.toml-formatter.meta_description':
		'TOML im Browser formatieren und validieren. Keine Daten verlassen Ihr Gerät.',
	'tool.toml-formatter.operation': 'Formatieren',

	// ── Web tools ─────────────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'URL-Parser',
	'tool.web-url-parser.tagline': 'URL-Komponenten parsen und untersuchen',
	'tool.web-url-parser.description':
		'URLs in ihre Komponenten aufteilen: Protokoll, Host, Port, Pfad, Abfrageparameter und Fragment. Beliebige URL parsen und untersuchen.',
	'tool.web-url-parser.primary_keyword': 'url parser',
	'tool.web-url-parser.meta_title': 'URL-Parser — fmtly.dev',
	'tool.web-url-parser.meta_description':
		'URL-Komponenten im Browser parsen und untersuchen. Zerlegt jede URL in ihre Bestandteile.',
	'tool.web-url-parser.operation': 'Parsen',

	'tool.web-user-agent.display_name': 'User-Agent-Parser',
	'tool.web-user-agent.tagline': 'User-Agent-Zeichenketten parsen und dekodieren',
	'tool.web-user-agent.description':
		'User-Agent-Zeichenketten parsen, um Browser, Engine, Betriebssystem und Gerätetyp zu identifizieren. Unterstützt moderne und ältere Browserformate.',
	'tool.web-user-agent.primary_keyword': 'user agent parser',
	'tool.web-user-agent.meta_title': 'User-Agent-Parser — fmtly.dev',
	'tool.web-user-agent.meta_description':
		'User-Agent-Zeichenketten im Browser parsen. Identifiziert Browser, Betriebssystem und Gerät.',
	'tool.web-user-agent.operation': 'Parsen',

	'tool.web-cors.display_name': 'CORS-Header-Prüfer',
	'tool.web-cors.tagline': 'CORS-Header untersuchen und verstehen',
	'tool.web-cors.description':
		'CORS-Header nachschlagen und erklären. Access-Control-Allow-Origin, Anmeldedaten, Preflight und andere CORS-Direktiven verstehen.',
	'tool.web-cors.primary_keyword': 'cors header checker',
	'tool.web-cors.meta_title': 'CORS-Header-Prüfer — fmtly.dev',
	'tool.web-cors.meta_description':
		'CORS-Header im Browser untersuchen. Alle Access-Control-Direktiven verstehen.',
	'tool.web-cors.operation': 'Prüfen',

	'tool.web-mime-types.display_name': 'MIME-Typ-Nachschlagewerk',
	'tool.web-mime-types.tagline': 'MIME-Typen nach Erweiterung oder Name nachschlagen',
	'tool.web-mime-types.description':
		'MIME-Typen nach Dateierweiterung, Name oder Inhaltstyp suchen. Deckt alle IANA-registrierten MIME-Typen mit Beispielen ab.',
	'tool.web-mime-types.primary_keyword': 'mime type lookup',
	'tool.web-mime-types.meta_title': 'MIME-Typ-Nachschlagewerk — fmtly.dev',
	'tool.web-mime-types.meta_description':
		'MIME-Typen nach Dateierweiterung im Browser nachschlagen.',
	'tool.web-mime-types.operation': 'Nachschlagen',

	'tool.web-ip-lookup.display_name': 'IP-Nachschlagewerk',
	'tool.web-ip-lookup.tagline': 'Geolokalisierung und Informationen für IP-Adressen nachschlagen',
	'tool.web-ip-lookup.description':
		'Geolokalisierung, ASN und Anbieterinformationen für beliebige IP-Adressen nachschlagen. Unterstützt IPv4- und IPv6-Adressen.',
	'tool.web-ip-lookup.primary_keyword': 'ip lookup',
	'tool.web-ip-lookup.meta_title': 'IP-Nachschlagewerk — fmtly.dev',
	'tool.web-ip-lookup.meta_description':
		'IP-Adress-Geolokalisierung und Anbieterinformationen im Browser nachschlagen.',
	'tool.web-ip-lookup.operation': 'Nachschlagen',

	'tool.web-dns-lookup.display_name': 'DNS-Nachschlagewerk',
	'tool.web-dns-lookup.tagline': 'DNS-Einträge für beliebige Domains abfragen',
	'tool.web-dns-lookup.description':
		'A-, AAAA-, MX-, TXT-, CNAME-, NS- und andere DNS-Eintragstypen für beliebige Domains abfragen. Verwendet DNS over HTTPS des Browsers.',
	'tool.web-dns-lookup.primary_keyword': 'dns lookup',
	'tool.web-dns-lookup.meta_title': 'DNS-Nachschlagewerk — fmtly.dev',
	'tool.web-dns-lookup.meta_description': 'DNS-Einträge für beliebige Domains im Browser abfragen.',
	'tool.web-dns-lookup.operation': 'Nachschlagen',

	// ── UI strings ────────────────────────────────────────────────────────────
	'ui.actions.choose_sample': 'Wählen…',
	'ui.actions.clear': 'Löschen',
	'ui.actions.copied': 'Kopiert',
	'ui.actions.copy': 'Kopieren',
	'ui.actions.copy_all': 'Alles kopieren',
	'ui.actions.download': 'Herunterladen',
	'ui.actions.fetch': 'Abrufen',
	'ui.actions.format': 'Formatieren',
	'ui.actions.load_url': 'URL laden',
	'ui.actions.minify': 'Minifizieren',
	'ui.actions.run': 'Ausführen',
	'ui.actions.running': 'Wird ausgeführt…',
	'ui.actions.sample': 'Beispiel',
	'ui.actions.search': 'Suchen',
	'ui.actions.share': 'Teilen',
	'ui.actions.upload': 'Hochladen',
	'ui.actions.validate': 'Validieren',
	'ui.confirm.clear': 'Aktuelle {language}-Eingabe löschen?',
	'ui.drop_files': '.{extension}-Dateien ablegen',
	'ui.drop_to_load': 'Ablegen zum Laden',
	'ui.diff.labels.original': 'Original',
	'ui.diff.labels.modified': 'Geändert',
	'ui.diff.labels.input_panel': 'Diff-Eingabefeld',
	'ui.diff.controls.ignore_order': 'Array-Reihenfolge ignorieren',
	'ui.diff.controls.only_diffs': 'Nur Unterschiede anzeigen',
	'ui.diff.controls.case_sensitive': 'Groß-/Kleinschreibung',
	'ui.diff.controls.ignore_keys_placeholder': 'Schlüssel ignorieren: id, timestamp…',
	'ui.diff.controls.swap': 'Tauschen',
	'ui.diff.controls.export': 'Exportieren',
	'ui.diff.controls.copy_patch': 'Als JSON Patch kopieren',
	'ui.diff.controls.export_md': 'Markdown-Bericht herunterladen',
	'ui.diff.controls.export_csv': 'CSV herunterladen',
	'ui.diff.view.list': 'Listenansicht',
	'ui.diff.view.monaco': 'Inline-Diff-Ansicht',
	'ui.diff.view.inline_toggle': 'Inline / Nebeneinander',
	'ui.diff.summary.added': 'hinzugefügt',
	'ui.diff.summary.removed': 'entfernt',
	'ui.diff.summary.modified': 'geändert',
	'ui.diff.summary.similar': 'ähnlich',
	'ui.diff.summary.empty': 'JSON in beide Felder eingeben, um zu vergleichen',
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
	'ui.diff.actions.collapse': 'Einklappen',
	'ui.diff.actions.expand': 'Ausklappen',
	'ui.diff.toast.format_error': 'Formatierung fehlgeschlagen — ungültiges JSON',
	'ui.diff.toast.patch_success': 'JSON Patch in Zwischenablage kopiert',
	'ui.diff.toast.copy_value': 'Wert kopiert',
	'ui.diff.toast.share_copied': 'Freigabelink kopiert',
	'ui.diff.meta.chars': 'Zeichen',
	'ui.diff.empty.hint': 'JSON in beide oberen Felder einfügen, um sie zu vergleichen.',
	'ui.diff.empty.load_sample': 'Beispieldaten laden',
	'ui.history.clear_all': 'Verlauf löschen',
	'ui.history.clear_confirm': 'Gesamten Verlauf löschen?',
	'ui.history.empty': 'Noch kein Verlauf vorhanden',
	'ui.history.recent': 'Zuletzt verwendet',
	'ui.history.title': 'Verlauf',
	'ui.paste_here': '{language} hier einfügen…',
	'ui.placeholder.search_tools_count': '{count}+ Werkzeuge durchsuchen…',
	'ui.placeholder.url': 'https://example.com/data.json',
	'ui.placeholder.xpath': '//book[@available=\x27true\x27]',
	'ui.related_categories': 'Verwandte Kategorien',
	'ui.stats.info': '{encoding} · {size} · {lines} Zeilen · Tiefe: {depth}',
	'ui.toast.copy_error': 'Kopieren fehlgeschlagen — Browserberechtigungen prüfen',
	'ui.toast.copy_success': 'In die Zwischenablage kopiert',
	'ui.toast.file_loaded': 'Datei geladen: {name}',
	'ui.toast.clipboard_xml': 'Zwischenablage XML',
	'ui.toast.pasted_xml': 'XML aus Zwischenablage eingefügt',
	'ui.toast.xml_file_types':
		'Nur .xml, .svg, .xhtml, .xsd, .wsdl und .txt Dateien werden unterstützt',
	'ui.aria.xml_input_panel': 'XML-Eingabebereich',
	'ui.aria.xml_output_panel': 'XML-Ausgabebereich',
	'ui.aria.xml_workspace_tabs': 'XML-Arbeitsbereich-Registerkarten',
	'ui.aria.xpath_panel': 'XPath-Abfragebereich',
	'ui.aria.xml_validator': 'XML-Validator',
	'ui.toast.input_cleared': 'Eingabe gelöscht',
	'ui.loaded_sample': '{label} geladen',
	'ui.toast.url_error': 'Abrufen fehlgeschlagen — versuchen Sie, direkt einzufügen',
	'ui.toast.url_loaded': '{language} von URL geladen',
	'ui.tool_count.one': '1 Werkzeug',
	'ui.tool_count.other': '{count} Werkzeuge',
	'ui.tree.collapse': 'Zuklappen',
	'ui.tree.expand': 'Aufklappen',
	'ui.tree.root': 'Baum',
	'ui.tree.summary': '{keyCount} Schlüssel · {valueCount} Werte · Tiefe {maxDepth}',
	'ui.validity.empty': 'Leer',
	'ui.validity.error_at': 'Zeile {line}, Spalte {column}: {message}',
	'ui.validity.invalid': 'Ungültiges {language}',
	'ui.validity.valid': 'Gültiges {language}',
	'ui.xpath.no_results':
		'Keine Ergebnisse. Versuchen Sie einen anderen Ausdruck oder überprüfen Sie die XML-Struktur.',
	'ui.xpath.placeholder': 'XML in das linke Panel einfügen, dann einen XPath-Ausdruck ausführen.',
	'ui.xpath.results_count.one': '1 Ergebnis',
	'ui.xpath.results_count.other': '{count} Ergebnisse',

	// Missing keys from English

	'category.accessibility.description':
		'Test color contrast, simulate color blindness, and check WCAG font size requirements. Ensure your designs are accessible to everyone.',
	'category.accessibility.primary_keyword': 'accessibility tools',
	'tool.accessibility-contrast.display_name': 'Contrast Checker',

	'tool.accessibility-contrast.description':
		'Enter foreground and background colors to calculate contrast ratio. See WCAG AA/AAA compliance for normal text, large text, and UI elements. Live preview included.',
	'tool.accessibility-contrast.primary_keyword': 'wcag contrast checker',
	'tool.accessibility-contrast.meta_title': 'WCAG Contrast Checker — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'Check WCAG color contrast ratios in your browser. Live preview, AA/AAA compliance. No data leaves your device.',
	'tool.accessibility-contrast.operation': 'Check',
	'tool.accessibility-contrast.faq.0.question': 'What contrast ratio is required?',
	'tool.accessibility-contrast.faq.0.answer':
		'WCAG AA requires 4.5:1 for normal text and 3:1 for large text. AAA requires 7:1 and 4.5:1 respectively.',
	'tool.accessibility-contrast.use_case.0': 'Verifying accessibility of website text',
	'tool.accessibility-contrast.use_case.1': 'Choosing accessible color combinations',
	'tool.accessibility-color-blindness.display_name': 'Color Blindness Simulator',
	'tool.accessibility-color-blindness.tagline':
		'Simulate how colors appear to people with color vision deficiencies',
	'tool.accessibility-color-blindness.description':
		'Enter a color or upload an image to see how it appears to people with protanopia, deuteranopia, tritanopia, and achromatopsia. Uses color transformation matrices.',
	'tool.accessibility-color-blindness.primary_keyword': 'color blindness simulator',
	'tool.accessibility-color-blindness.meta_title': 'Color Blindness Simulator — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description':
		'Simulate protanopia, deuteranopia, tritanopia vision in your browser. Test colors and images. No data uploaded.',
	'tool.accessibility-color-blindness.operation': 'Simulate',
	'tool.accessibility-color-blindness.faq.0.question':
		'What types of color blindness are simulated?',

	'tool.accessibility-color-blindness.use_case.1': 'Checking color palette inclusivity',

	'tool.accessibility-font-size.faq.0.question': 'What is large text in WCAG?',

	'ui.actions.diff': 'Diff',
	'ui.layout.tabs.output': 'Output',
	'ui.layout.tabs.tree': 'Tree',

	'ui.layout.aria.input_panel': 'Input panel',

	'ui.actions.wrap': 'Wrap',

	'ui.tree.toast_copy_path': 'Copied',
	'share.link_size': 'Link size',
	'share.large_link_warning': 'This link is large and may not work in all browsers',
	'share.data_encoded_note':
		'The data is encoded in the URL and is never sent to any server for processing.',
	'share.enter_input_first': 'Enter some input first to generate a share link.',
	'ui.share_url_copied': 'Share URL copied',
	'ui.copy_link': 'Kopieren Link',
	'ui.share': 'Share',
	'ui.close': 'Close',
	'ui.cancel': 'Cancel',
	'ui.confirm': 'Confirm',
	'ui.validator.syntax': 'Syntax',
	'ui.validator.schema': 'Schema',

	'ui.validator.repair_json': 'Repair JSON',
	'ui.validator.schema_title': 'JSON Schema',
	'ui.validator.schema_standard': 'Draft-07+ via AJV',
	'ui.validator.paste_schema_placeholder': 'Paste JSON Schema here…',
	'ui.validator.paste_json': 'Paste JSON to validate',
	'ui.validator.paste_schema': 'Paste a JSON Schema to validate against',
	'ui.validator.validating_schema': 'Gültigating schema…',
	'ui.validator.schema_invalid': 'Schema is invalid',
	'ui.validator.json_matches_schema': 'JSON matches schema',
	'ui.validator.schema_validation_failed': 'Schema validation failed',
	'ui.validator.no_syntax_errors': 'No syntax errors found.',
	'ui.validator.json_matches_current_schema': 'JSON matches the current schema.',
	'ui.validator.schema_match': 'Schema match',
	'ui.validator.valid_json': 'Gültig JSON',
	'ui.validator.explanation_must_satisfy': 'must satisfy',
	'ui.validator.data_error_pos': 'Data error at line {line}, column {column}',
	'ui.share_url': 'Share URL',
	'ui.format_xml': 'Formatieren XML',
	'ui.minify_xml': 'Minifizieren XML',
	'ui.format_beautify': 'Formatieren / Beautify',
	'ui.minify': 'Minifizieren',
	'ui.expand_all': 'Expand all',
	'ui.collapse_all': 'Collapse all',
	'ui.expand_to_depth': 'Expand to depth {depth}',
	'ui.validator.schema_error_pos': 'Schema error at line {line}, column {column}',
	'ui.validator.syntax_error_pos': 'Syntax error at line {line}, column {column}',
	'ui.validator.line_col_label': 'Line {line}, column {column}',
	'ui.validator.well_formed': 'Well-formed',
	'ui.validator.invalid_xml': 'Ungültig XML',
	'ui.validator.loading_editor': 'Ladening editor…',
	'ui.validator.xml_paste_hint': 'Paste or type XML to validate it.',
	'ui.validator.xml_validation_desc':
		'Gültigierens well-formedness: unclosed tags, mismatched elements, invalid characters, and more.',
	'ui.validator.xml_success_title': 'Well-formed XML',
	'ui.validator.xml_success_desc':
		'No syntax errors detected. The document is well-formed and can be parsed by any XML processor.',
	'ui.validator.error_count.one': '1 error found',
	'ui.validator.error_count.other': '{count} errors found',
	'ui.convert.to_json': '→ JSON',
	'ui.convert.to_yaml': '→ YAML',
	'ui.convert.to_csv': '→ CSV',
	'ui.convert.to_xml': '→ XML',
	'ui.convert.to_toml': '→ TOML',
	'ui.convert.to_markdown': '→ MD',

	'ui.query.result': 'result',
	'ui.query.results': 'results',
	'ui.query.history': 'History',
	'ui.query.sample_query': 'Sample query',
	'ui.query.guide': 'Guide',
	'ui.query.query': 'Query',
	'ui.query.running': 'Running query…',
	'ui.query.empty_input': 'Paste JSON on the left to evaluate your query.',
	'ui.query.empty_query': 'Enter a query to see results.',
	'ui.query.error_fallback': 'Query failed',
	'ui.query.copy_error': 'Could not copy output',
	'ui.status.processing': 'Processing…',
	'ui.status.waiting_output': 'Output will appear here',
	'ui.output.controls.spaces': 'spaces',
	'ui.output.stats.chars': 'chars',
	'ui.output.stats.lines': 'lines',
	'ui.output.stats.keys': 'keys',
	'ui.output.stats.objects': 'objects',
	'ui.output.stats.arrays': 'arrays',
	'ui.output.stats.strings': 'strings',
	'ui.output.stats.values': 'values',
	'ui.output.stats.numbers': 'numbers',
	'ui.output.stats.booleans': 'booleans',
	'ui.output.stats.nulls': 'nulls',
	'ui.output.stats.depth': 'depth',
	'ui.output.stats.size_in': 'in',
	'ui.output.stats.size_out': 'out',
	'ui.output.original': 'Original',
	'ui.output.minified': 'Minified',
	'ui.output.saved': 'saved',
	'ui.output.meta.minified': 'MINIFIED',

	'ui.output.actions.copy_json': 'Kopieren as JSON',
	'ui.output.actions.copy_js': 'Kopieren as JS Object',
	'ui.output.actions.copy_python': 'Kopieren as Python Dict',
	'ui.output.actions.copy_escaped': 'Kopieren escaped',
	'ui.output.actions.copy': 'Kopieren',
	'ui.output.actions.download': 'Herunterladen',
	'ui.output.compare.input': 'Input',
	'ui.output.error.invalid_title': 'Ungültig JSON',
	'ui.output.controls.indent': 'Indent',
	'ui.output.controls.tab': 'Tab',
	'ui.output.controls.sort_keys': 'Sort keys',
	'ui.output.controls.clean': 'Clean',
	'ui.output.controls.clean_nulls': 'Remove null values',
	'ui.output.controls.clean_strings': 'Remove empty strings',
	'ui.output.controls.clean_arrays': 'Remove empty arrays',
	'ui.output.controls.clean_objects': 'Remove empty objects',
	'ui.output.controls.apply': 'Apply',
	'tool.json-formatter.faq.0.question': 'What is JSON formatting?',
	'tool.json-formatter.faq.0.answer':
		'JSON formatting is the process of organizing JSON data with proper indentation and line breaks to make it more readable and easier to understand.',
	'tool.json-formatter.faq.1.question': 'Can I customize the indentation?',
	'tool.json-formatter.faq.1.answer':
		'Yes! You can choose between 2 spaces, 4 spaces, or tabs for indentation. The formatter preserves your original data structure while applying your preferred formatting.',
	'tool.json-formatter.faq.2.question': 'Does this tool modify my data?',
	'tool.json-formatter.faq.2.answer':
		'No. The formatter only changes the visual presentation of your JSON by adding proper indentation and line breaks. The actual data, keys, and values remain exactly the same.',
	'tool.json-formatter.faq.3.question': 'Can I sort JSON keys?',
	'tool.json-formatter.faq.3.answer': 'tool.json-formatter.faq.3.answer',
	'tool.json-formatter.use_case.0':
		'Debugging API responses by formatting them for better readability',
	'tool.json-formatter.use_case.1': 'Cleaning up minified JSON files from web sources',
	'tool.json-formatter.use_case.2':
		'Preparing configuration files for version control with consistent formatting',
	'tool.json-formatter.use_case.3':
		'Making JSON data more presentable for documentation or presentations',
	'tool.json-formatter.use_case.4':
		'Gültigating and formatting JSON before manual editing or review',
	'tool.json-validator.faq.0.question': 'What does JSON validation check for?',
	'tool.json-validator.faq.0.answer':
		'JSON validation checks for syntax errors including missing brackets, unmatched quotes, trailing commas, invalid escape sequences, and duplicate keys in objects.',
	'tool.json-validator.faq.1.question':
		'What is the difference between syntax and schema validation?',
	'tool.json-validator.faq.1.answer':
		'Syntax validation ensures the JSON is well-formed according to the JSON specification. Schema validation goes further by checking if the JSON structure matches a predefined schema with specific rules for data types, required fields, and value constraints.',
	'tool.json-validator.faq.2.question': 'Can I validate JSON with comments?',
	'tool.json-validator.faq.2.answer':
		'Yes! This validator supports JSON5 format, which allows comments (both // and /* */), trailing commas, and single quotes for strings. It will automatically detect and handle JSON5 syntax.',
	'tool.json-validator.use_case.0':
		'Verifying API responses before processing them in your application',
	'tool.json-validator.use_case.1':
		'Checking configuration files before deployment to prevent runtime errors',
	'tool.json-validator.use_case.2': 'Gültigating user-submitted JSON data in forms or file uploads',
	'tool.json-validator.use_case.3': 'Debugging JSON parsing errors in your code',
	'tool.json-validator.use_case.4':
		'Ensuring data integrity when transferring JSON between systems',
	'tool.crypto-hmac.faq.0.question': 'What is HMAC?',
	'tool.crypto-hmac.faq.0.answer':
		'HMAC (Hash-based Message Authentication Code) is a specific type of message authentication code that uses a cryptographic hash function and a secret key. It provides both data integrity and authentication.',
	'tool.crypto-hmac.faq.1.question': 'What algorithms are supported?',
	'tool.crypto-hmac.faq.1.answer':
		'This tool supports multiple HMAC algorithms including SHA-256, SHA-512, SHA-1, MD5, and more. SHA-256 is recommended for most modern applications as it provides a good balance of security and performance.',
	'tool.crypto-hmac.use_case.0': 'Verifying the integrity and authenticity of API requests',
	'tool.crypto-hmac.use_case.1': 'Creating secure tokens for session management',
	'tool.crypto-hmac.use_case.2': 'Generating webhook signatures for services like GitHub or Stripe',
	'tool.crypto-hmac.use_case.3':
		'Implementing message authentication in microservices communication',
	'tool.crypto-hmac.use_case.4': 'Creating checksums for file verification',
	'tool.json-minifier.faq.0.question': 'What is JSON minification?',
	'tool.json-minifier.faq.0.answer':
		'JSON minification is the process of removing all unnecessary characters from JSON data without changing its functionality. This includes removing whitespace, line breaks, and comments to reduce file size.',
	'tool.json-minifier.faq.1.question': 'Does minification affect JSON functionality?',
	'tool.json-minifier.faq.1.answer':
		'No. Minification only removes visual formatting characters like spaces, tabs, and line breaks. The actual data structure, keys, and values remain exactly the same, maintaining full JSON compliance.',
	'tool.json-minifier.faq.2.question': 'When should I use minified JSON?',
	'tool.json-minifier.faq.2.answer':
		'Use minified JSON in production environments, API responses, and when transmitting data over networks. It reduces bandwidth usage and speeds up data transfer. For development and debugging, use formatted JSON.',
	'tool.json-minifier.use_case.0': 'Reducing file size for API responses to improve loading times',
	'tool.json-minifier.use_case.1': 'Optimizing JSON configuration files for production deployments',
	'tool.json-minifier.use_case.2': 'Compressing data before storing in databases or local storage',
	'tool.json-minifier.use_case.3':
		'Minimizing bandwidth usage when transmitting JSON over networks',
	'tool.json-minifier.use_case.4': 'Preparing JSON files for embedding in HTML or JavaScript code',
	'tool.json-to-yaml.faq.0.question': 'What is JSON zu YAML conversion?',
	'tool.json-to-yaml.faq.0.answer':
		'JSON zu YAML conversion transforms JSON data into YAML format, which is more human-readable and commonly used for configuration files. YAML allows for comments, anchors, and a more flexible syntax.',
	'tool.json-to-yaml.faq.1.question': 'Is the conversion lossless?',
	'tool.json-to-yaml.faq.1.answer':
		'Yes! The conversion preserves all data and structure. JSON and YAML can represent the same data structures, so no information is lost during the conversion process.',
	'tool.json-to-yaml.use_case.0':
		'Konvertierening JSON configuration files to YAML for better readability',
	'tool.json-to-yaml.use_case.1': 'Creating Kubernetes manifests from JSON definitions',
	'tool.json-to-yaml.use_case.2': 'Migrating application configurations from JSON zu YAML format',
	'tool.json-to-yaml.use_case.3': 'Generating YAML files for CI/CD pipeline configurations',
	'tool.json-to-toml.faq.0.question': 'What is JSON to TOML conversion?',
	'tool.json-to-toml.faq.0.answer':
		'JSON to TOML conversion transforms JSON data into TOML format, which is designed for human-readable configuration files. TOML uses a simple syntax with sections, key-value pairs, and tables.',
	'tool.json-to-toml.faq.1.question': 'When should I use TOML over JSON?',
	'tool.json-to-toml.faq.1.answer': 'tool.json-to-toml.faq.1.answer',
	'tool.json-to-toml.use_case.0':
		'Konvertierening package.json to pyproject.toml for Python projects',
	'tool.json-to-toml.use_case.1': 'Creating Cargo.toml files from JSON configurations',
	'tool.json-to-toml.use_case.2':
		'Migrating application settings to TOML format for better maintainability',
	'tool.json-to-markdown.faq.0.question': 'What is JSON to Markdown table conversion?',
	'tool.json-to-markdown.faq.0.answer':
		'This tool converts JSON data arrays into Markdown table format, making it easy to display structured data in documentation, README files, or any Markdown-compatible platform.',
	'tool.json-to-markdown.faq.1.question': 'What JSON structures are supported?',
	'tool.json-to-markdown.faq.1.answer':
		'The tool works best with arrays of objects. Each object becomes a row in the table, and object properties become columns. Nested objects are flattened using dot notation.',
	'tool.json-to-markdown.use_case.0': 'Creating data tables for README files and documentation',
	'tool.json-to-markdown.use_case.1':
		'Konvertierening API response examples to documentation tables',
	'tool.json-to-markdown.use_case.2':
		'Generating Markdown tables from spreadsheet data exported as JSON',
	'tool.json-to-markdown.use_case.3': 'Displaying configuration options in project documentation',
	'tool.json-to-csv.faq.0.question': 'What is JSON zu CSV conversion?',
	'tool.json-to-csv.faq.0.answer':
		'JSON zu CSV conversion transforms structured JSON data (usually an array of objects) into a flat Comma-Separated Values format. This is ideal for importing data into spreadsheets like Excel or Google Sheets.',
	'tool.json-to-csv.faq.1.question': 'What JSON structures work best?',
	'tool.json-to-csv.faq.1.answer':
		'The tool works best with a flat array of objects where each object has the same keys. These keys become the CSV headers, and the values become the rows. Nested objects or arrays are usually flattened.',
	'tool.json-to-csv.use_case.0': 'Exporting API data to Excel for business analysis',
	'tool.json-to-csv.use_case.1': 'Konvertierening database JSON exports to CSV for bulk imports',
	'tool.json-to-csv.use_case.2':
		'Preparing JSON datasets for training machine learning models in CSV format',
	'tool.json-to-csv.use_case.3': 'Generating report data for spreadsheet applications',
	'tool.json-jsonpath.faq.0.question': 'What is JSONPath?',
	'tool.json-jsonpath.faq.0.answer': 'tool.json-jsonpath.faq.0.answer',
	'tool.json-jsonpath.faq.1.question': 'How does JSONPath syntax work?',
	'tool.json-jsonpath.faq.1.answer':
		'JSONPath uses expressions like $.store.book[*].title to navigate through JSON. The $ represents the root, . accesses properties, [*] selects all items in an array, and various operators can filter and transform results.',
	'tool.json-jsonpath.faq.2.question': 'What can I do with JSONPath results?',
	'tool.json-jsonpath.faq.2.answer':
		'You can extract specific values, filter arrays, perform calculations, and transform JSON data. JSONPath is useful for API testing, data extraction, and validating JSON structure in applications.',
	'tool.json-jsonpath.use_case.0': 'Extracting specific fields from API responses',
	'tool.json-jsonpath.use_case.1': 'Filtering and querying large JSON datasets',
	'tool.json-jsonpath.use_case.2': 'Testing API responses in automated tests',
	'tool.json-jsonpath.use_case.3': 'Gültigating JSON structure and content in data pipelines',
	'tool.json-jmespath.faq.0.question': 'What is JMESPath?',
	'tool.json-jmespath.faq.0.answer':
		'JMESPath is a query language for JSON that enables you to extract and transform elements from JSON documents. It provides more advanced data transformation capabilities than JSONPath, including filtering, mapping, and aggregation functions.',
	'tool.json-jmespath.faq.1.question': 'How is JMESPath different from JSONPath?',
	'tool.json-jmespath.faq.1.answer':
		'JMESPath offers more powerful data transformation features like functions, filters, and pipe expressions. While JSONPath is primarily for extraction, JMESPath can reshape, filter, and transform JSON data into new structures.',
	'tool.json-jmespath.faq.2.question': 'What are common JMESPath operations?',
	'tool.json-jmespath.faq.2.answer':
		'Common operations include filtering with [?condition], selecting fields with {key: value}, sorting with sort_by(), and aggregating data with functions like length(), sum(), and type(). You can also pipe operations with | for complex transformations.',
	'tool.json-jmespath.use_case.0': 'Transforming API responses to match required data structures',
	'tool.json-jmespath.use_case.1': 'Filtering and reshaping data from complex JSON documents',
	'tool.json-jmespath.use_case.2': 'Extracting specific information from nested JSON structures',
	'tool.json-jmespath.use_case.3': 'Clean up JSON responses for simpler frontend consumption',
	'tool.json-diff.display_name': 'JSON Diff',
	'tool.json-diff.tagline': 'Compare two JSON documents',
	'tool.json-diff.description':
		'A powerful semantic JSON comparison tool. Paste two JSON documents to instantly see the differences, ignoring key order and arbitrary whitespace. Perfect for debugging API changes or verifying configuration updates.',
	'tool.json-diff.primary_keyword': 'json diff tool',
	'tool.json-diff.meta_title': 'JSON Diff Tool - Compare JSON Online',
	'tool.json-diff.meta_description':
		'Compare two JSON documents semantically online. Our JSON diff tool ignores key order and formatting differences to show you exactly what changed.',
	'tool.json-diff.operation': 'Compare',
	'tool.json-diff.faq.0.question': 'Does it ignore key order?',
	'tool.json-diff.faq.0.answer': 'tool.json-diff.faq.0.answer',
	'tool.json-diff.faq.1.question': 'Does it handle large JSON files?',
	'tool.json-diff.faq.1.answer':
		'Yes, the comparison is performed efficiently in your browser and displays the additions, removals, and modifications line-by-line.',
	'tool.json-diff.faq.2.question': 'Is my data secure?',
	'tool.json-diff.faq.2.answer':
		'Absolutely. The comparison happens entirely locally in your browser. No JSON data is ever sent to our servers.',
	'tool.json-diff.use_case.0': 'Compare responses from different API versions mapping regressions',
	'tool.json-diff.use_case.1':
		'Debug unexpected configuration changes in production settings files',
	'tool.json-diff.use_case.2': 'Review git merge conflicts involving JSON manifests or lockfiles',
	'tool.json-diff.use_case.3': 'Find discrepancies between staging and production database exports',
	'tool.xml-minifier.faq.0.question': 'What is XML minification?',
	'tool.xml-minifier.faq.0.answer':
		'XML minification removes all unnecessary characters from XML without changing its functionality. This includes whitespace, line breaks, and comments to reduce file size.',
	'tool.xml-minifier.faq.1.question': 'Does minification affect XML processing?',
	'tool.xml-minifier.faq.1.answer':
		'No. XML parsers ignore whitespace between tags by default, so minified XML processes identically to formatted XML but loads faster due to smaller file size.',
	'tool.xml-minifier.use_case.0': 'Reducing file sizes for faster API responses',
	'tool.xml-minifier.use_case.1': 'Optimizing XML files for production environments',
	'tool.xml-minifier.use_case.2': 'Minimizing bandwidth usage when transmitting XML data',
	'tool.xml-minifier.use_case.3': 'Preparing XML files for embedding in other documents',
	'tool.xml-xpath.faq.0.question': 'What is XPath?',
	'tool.xml-xpath.faq.0.answer':
		'XPath is a query language for selecting nodes from XML documents. It uses path expressions to navigate through elements and attributes, similar to file system paths.',
	'tool.xml-xpath.faq.1.question': 'What can XPath expressions do?',
	'tool.xml-xpath.faq.1.answer':
		'XPath can select elements by name, attribute value, position, or content. It supports complex conditions, functions for text manipulation, and mathematical operations for advanced querying.',
	'tool.xml-xpath.use_case.0': 'Extracting specific data from large XML documents',
	'tool.xml-xpath.use_case.1': 'Testing XML data in automated test suites',
	'tool.xml-xpath.use_case.2': 'Transforming XML data using XSLT templates',
	'tool.xml-xpath.use_case.3': 'Gültigating XML structure and content programmatically'
};

export default registryDe;

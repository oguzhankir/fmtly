const registryIt: Record<string, string> = {
	// ── Categories ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'Formatta, valida, minifica, confronta e converti dati JSON. Ogni strumento funziona nel browser con rilevamento degli errori in tempo reale e visualizzazione ad albero.',
	'category.json.primary_keyword': 'strumenti json',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		'Formatta, valida e converti documenti XML. Supporta la stampa abbellita con indentazione configurabile e la conversione in JSON o CSV.',
	'category.xml.primary_keyword': 'strumenti xml',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'Formatta, valida e converti file YAML. Conversione bidirezionale con JSON e validazione della sintassi con posizioni degli errori precise.',
	'category.yaml.primary_keyword': 'strumenti yaml',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'Analizza, formatta e converti dati CSV. Converti tra CSV, JSON e altri formati tabellari con supporto per delimitatori personalizzati.',
	'category.csv.primary_keyword': 'strumenti csv',
	'category.css.display_name': 'CSS',
	'category.css.description':
		'Formatta, minifica e ottimizza fogli di stile CSS. Abbellisci CSS compresso o minifica CSS formattato con opzioni di ordinamento delle proprietà.',
	'category.css.primary_keyword': 'strumenti css',
	'category.html.display_name': 'HTML',
	'category.html.description':
		'Formatta, minifica e valida il markup HTML. Abbellisci HTML compresso o rimuovi gli spazi bianchi per la produzione.',
	'category.html.primary_keyword': 'strumenti html',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'Formatta e minifica codice JavaScript. Abbellisci script compressi o genera output minificato per caricamenti di pagina più rapidi.',
	'category.js.primary_keyword': 'strumenti javascript',
	'category.encode.display_name': 'Encoder e Decoder',
	'category.encode.description':
		'Codifica e decodifica Base64, URL, entità HTML e altro. Tutte le operazioni vengono eseguite istantaneamente nel browser — nessun dato viene inviato a server.',
	'category.encode.primary_keyword': 'strumenti encoder decoder',
	'category.escape.display_name': 'Strumenti di Escape',
	'category.escape.description':
		'Esegui escape e unescape di stringhe per JSON, HTML, XML, URL e regex. Gestisci in modo sicuro i caratteri speciali nei vari formati.',
	'category.escape.primary_keyword': 'strumenti escape stringhe',
	'category.diff.display_name': 'Diff e Confronto',
	'category.diff.description':
		'Confronta due file o strutture dati affiancati. Evidenzia aggiunte ed eliminazioni con supporto per diff JSON, testuale e strutturato.',
	'category.diff.primary_keyword': 'strumenti diff confronto',
	'category.generate.display_name': 'Generatori',
	'category.generate.description':
		'Genera definizioni di tipo, JSON Schema, tabelle Markdown, dati di test mock e altre utilità per sviluppatori, interamente nel browser.',
	'category.generate.primary_keyword': 'generatori di codice',
	'category.text.display_name': 'Testo e Stringhe',
	'category.text.description':
		'Formatta, manipola, inverti, ordina e analizza testi e stringhe. Include contatori di parole, punteggi di leggibilità e conversioni Markdown.',
	'category.text.primary_keyword': 'strumenti testo',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formatta, valida e converti file TOML. Converti TOML in JSON e YAML in modo sicuro.',
	'category.toml.primary_keyword': 'strumenti toml',
	'category.number.display_name': 'Numeri e Matematica',
	'category.number.description':
		'Formatta numeri, calcola percentuali, usa la notazione scientifica e converti valori tra sistemi numerici istantaneamente.',
	'category.number.primary_keyword': 'strumenti numeri',
	'category.color.display_name': 'Strumenti Colore',
	'category.color.description':
		'Verifica rapporti di contrasto, crea palette di colori, genera gradienti CSS e simula il daltonismo.',
	'category.color.primary_keyword': 'strumenti colore',
	'category.crypto.display_name': 'Crypto e Sicurezza',
	'category.crypto.description':
		'Genera firme HMAC, analizza la forza delle password, produci stringhe casuali sicure e genera ULID — tutto lato client usando la Web Crypto API.',
	'category.crypto.primary_keyword': 'strumenti crypto sicurezza',
	'category.web.display_name': 'Web e Rete',
	'category.web.description':
		'Analizza URL, decodifica stringhe User-Agent, ispeziona header CORS, cerca tipi MIME, geolocalizza IP e interroga record DNS.',
	'category.web.primary_keyword': 'strumenti web online',
	'category.code.display_name': 'Formattatori di Codice',
	'category.code.description':
		'Formatta CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL e Markdown interamente in locale. Converti comandi cURL in fetch() o Axios.',
	'category.code.primary_keyword': 'formattatore di codice online',
	'category.pdf.display_name': 'Strumenti PDF',
	'category.pdf.description': 'Visualizza file PDF ed estrai testo — tutto localmente nel browser.',
	'category.pdf.primary_keyword': 'strumenti pdf online',
	'category.image.display_name': 'Strumenti Immagine',
	'category.image.description':
		'Ridimensiona, converti, comprimi e codifica immagini — tutto localmente nel browser. Nessun upload, nessun server.',
	'category.image.primary_keyword': 'strumenti immagine online',
	'category.file.display_name': 'Strumenti File',
	'category.file.description': 'Calcola hash di file ed esegui conversioni di formato tra file.',
	'category.file.primary_keyword': 'strumenti file online',
	'category.qr.display_name': 'QR e Codici a Barre',
	'category.qr.description':
		'Genera codici QR personalizzabili e decodifica codici QR da immagini — tutto localmente nel browser.',
	'category.qr.primary_keyword': 'generatore codice qr',

	// ── JSON tools ──────────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'Formattatore JSON',
	'tool.json-formatter.tagline': 'Formatta e abbellisci JSON con indentazione configurabile',
	'tool.json-formatter.description':
		'Analizza e visualizza JSON con indentazione configurabile — 2 spazi, 4 spazi o tabulazioni. Analisi in tempo reale con posizioni degli errori precise e visualizzazione ad albero opzionale.',
	'tool.json-formatter.primary_keyword': 'formattatore json',
	'tool.json-formatter.meta_title': 'Formattatore e Abbellitore JSON — fmtly.dev',
	'tool.json-formatter.meta_description':
		'Formatta e abbellisci JSON istantaneamente nel browser. Indentazione configurabile, rilevamento errori in tempo reale e vista ad albero. I dati non lasciano il tuo dispositivo.',
	'tool.json-formatter.operation': 'Formatta',

	'tool.json-validator.display_name': 'Validatore JSON',
	'tool.json-validator.tagline': 'Valida la sintassi e la struttura JSON',
	'tool.json-validator.description':
		'Verifica la sintassi JSON in tempo reale. Identifica istantaneamente parentesi mancanti, stringhe non terminate e chiavi duplicate. Supporta commenti JSON5 e virgole finali.',
	'tool.json-validator.primary_keyword': 'validatore json',
	'tool.json-validator.meta_title': 'Validatore JSON — fmtly.dev',
	'tool.json-validator.meta_description':
		'Valida JSON nel browser istantaneamente. Rileva errori di sintassi con numeri di riga e colonna precisi. I dati non lasciano il tuo dispositivo.',
	'tool.json-validator.operation': 'Valida',

	'tool.json-minifier.display_name': 'Minificatore JSON',
	'tool.json-minifier.tagline': 'Rimuovi gli spazi bianchi e comprimi JSON alla dimensione minima',
	'tool.json-minifier.description':
		"Rimuovi tutti gli spazi bianchi dal JSON per produrre l'output più compatto possibile. Valida prima il JSON, poi rimuove indentazione, ritorni a capo e spazi.",
	'tool.json-minifier.primary_keyword': 'minificatore json',
	'tool.json-minifier.meta_title': 'Minificatore JSON — fmtly.dev',
	'tool.json-minifier.meta_description':
		'Minifica JSON nel browser istantaneamente. Rimuove tutti gli spazi bianchi e produce output compatto. I dati non lasciano il tuo dispositivo.',
	'tool.json-minifier.operation': 'Minifica',

	'tool.json-to-yaml.display_name': 'JSON in YAML',
	'tool.json-to-yaml.tagline': 'Converti dati JSON in formato YAML',
	'tool.json-to-yaml.description':
		'Converti JSON in YAML con indentazione e formattazione appropriate. Gestisce oggetti annidati, array e tutti i tipi di dati JSON.',
	'tool.json-to-yaml.primary_keyword': 'json in yaml',
	'tool.json-to-yaml.meta_title': 'Convertitore JSON in YAML — fmtly.dev',
	'tool.json-to-yaml.meta_description':
		'Converti JSON in YAML istantaneamente nel browser. Gestisce strutture annidate e tutti i tipi di dati. Nessun dato caricato.',
	'tool.json-to-yaml.operation': 'Converti',

	'tool.json-to-toml.display_name': 'JSON in TOML',
	'tool.json-to-toml.tagline': 'Converti dati JSON in formato di configurazione TOML',
	'tool.json-to-toml.description':
		'Converti JSON in formato TOML, ideale per file di configurazione. Supporta tabelle annidate e array inline.',
	'tool.json-to-toml.primary_keyword': 'json in toml',
	'tool.json-to-toml.meta_title': 'Convertitore JSON in TOML — fmtly.dev',
	'tool.json-to-toml.meta_description':
		'Converti JSON in TOML istantaneamente nel browser. Gestisce strutture annidate e array. Nessun dato caricato.',
	'tool.json-to-toml.operation': 'Converti',

	'tool.json-to-markdown.display_name': 'JSON in Tabella Markdown',
	'tool.json-to-markdown.tagline': 'Converti array JSON in tabelle Markdown',
	'tool.json-to-markdown.description':
		'Converti array JSON di oggetti in tabelle Markdown formattate. Rileva automaticamente le intestazioni delle colonne dalle chiavi degli oggetti.',
	'tool.json-to-markdown.primary_keyword': 'json in tabella markdown',
	'tool.json-to-markdown.meta_title': 'Convertitore JSON in Tabella Markdown — fmtly.dev',
	'tool.json-to-markdown.meta_description':
		'Converti array JSON in tabelle Markdown istantaneamente. Rileva automaticamente le intestazioni e formatta i dati. I dati non lasciano il tuo dispositivo.',
	'tool.json-to-markdown.operation': 'Converti',

	'tool.json-to-xml.display_name': 'JSON in XML',
	'tool.json-to-xml.tagline': 'Converti dati JSON in formato XML',
	'tool.json-to-xml.description':
		'Converti oggetti e array JSON in XML ben formato. Gestisce strutture annidate e nomi degli elementi radice configurabili.',
	'tool.json-to-xml.primary_keyword': 'json in xml',
	'tool.json-to-xml.meta_title': 'Convertitore JSON in XML — fmtly.dev',
	'tool.json-to-xml.meta_description':
		'Converti JSON in XML istantaneamente nel browser. Produce XML ben formato. Nessun dato caricato.',
	'tool.json-to-xml.operation': 'Converti',

	'tool.json-to-csv.display_name': 'JSON in CSV',
	'tool.json-to-csv.tagline': 'Converti array JSON in formato CSV',
	'tool.json-to-csv.description':
		'Converti array JSON di oggetti in formato CSV. Estrae automaticamente le intestazioni delle colonne dalle chiavi degli oggetti.',
	'tool.json-to-csv.primary_keyword': 'json in csv',
	'tool.json-to-csv.meta_title': 'Convertitore JSON in CSV — fmtly.dev',
	'tool.json-to-csv.meta_description':
		'Converti array JSON in CSV istantaneamente nel browser. Rileva automaticamente le intestazioni. Nessun dato caricato.',
	'tool.json-to-csv.operation': 'Converti',

	'tool.json-jsonpath.display_name': 'Query JSONPath',
	'tool.json-jsonpath.tagline': 'Interroga dati JSON con espressioni JSONPath',
	'tool.json-jsonpath.description':
		'Esegui espressioni JSONPath su dati JSON per estrarre valori specifici. Supporta filtri, caratteri jolly, discesa ricorsiva e tutti gli operatori JSONPath standard.',
	'tool.json-jsonpath.primary_keyword': 'query jsonpath',
	'tool.json-jsonpath.meta_title': 'Strumento Query JSONPath — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'Interroga dati JSON con espressioni JSONPath nel browser. Supporta tutti gli operatori. Nessun dato caricato.',
	'tool.json-jsonpath.operation': 'Interroga',

	'tool.json-jmespath.display_name': 'Query JMESPath',
	'tool.json-jmespath.tagline': 'Interroga e trasforma JSON con espressioni JMESPath',
	'tool.json-jmespath.description':
		'Esegui espressioni JMESPath su dati JSON per interrogarli e trasformarli. Supporta proiezioni, filtri, selezione multipla e tutte le funzioni JMESPath.',
	'tool.json-jmespath.primary_keyword': 'query jmespath',
	'tool.json-jmespath.meta_title': 'Strumento Query JMESPath — fmtly.dev',
	'tool.json-jmespath.meta_description':
		'Interroga e trasforma JSON con JMESPath nel browser. Supporta tutti gli operatori e le funzioni. Nessun dato caricato.',
	'tool.json-jmespath.operation': 'Interroga',

	// ── XML tools ───────────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'Formattatore XML',
	'tool.xml-formatter.tagline': 'Abbellisci e indenta XML con spaziatura configurabile',
	'tool.xml-formatter.description':
		'Formatta e indenta documenti XML con 2 spazi, 4 spazi o tabulazioni. Valida la struttura XML ed evidenzia gli errori con numeri di riga precisi.',
	'tool.xml-formatter.primary_keyword': 'formattatore xml',
	'tool.xml-formatter.meta_title': 'Formattatore e Abbellitore XML — fmtly.dev',
	'tool.xml-formatter.meta_description':
		'Formatta e abbellisci XML nel browser. Indentazione configurabile e validazione in tempo reale. I dati non lasciano il tuo dispositivo.',
	'tool.xml-formatter.operation': 'Formatta',

	'tool.xml-validator.display_name': 'Validatore XML',
	'tool.xml-validator.tagline': 'Valida la sintassi XML e la correttezza formale',
	'tool.xml-validator.description':
		"Valida l'XML rispetto alle regole di correttezza formale. Identifica tag non chiusi, attributi malformati e caratteri non validi con posizioni degli errori precise.",
	'tool.xml-validator.primary_keyword': 'validatore xml',
	'tool.xml-validator.meta_title': 'Validatore XML — fmtly.dev',
	'tool.xml-validator.meta_description':
		'Valida XML nel browser. Rileva errori di sintassi con numeri di riga e colonna. I dati non lasciano il tuo dispositivo.',
	'tool.xml-validator.operation': 'Valida',

	'tool.xml-to-json.display_name': 'XML in JSON',
	'tool.xml-to-json.tagline': 'Converti documenti XML in formato JSON',
	'tool.xml-to-json.description':
		'Converti XML in JSON con mappatura automatica di attributi ed elementi. Gestisce namespace, sezioni CDATA e strutture XML annidate.',
	'tool.xml-to-json.primary_keyword': 'xml in json',
	'tool.xml-to-json.meta_title': 'Convertitore XML in JSON — fmtly.dev',
	'tool.xml-to-json.meta_description':
		'Converti XML in JSON istantaneamente nel browser. Gestisce attributi e strutture annidate. Nessun dato caricato.',
	'tool.xml-to-json.operation': 'Converti',

	'tool.xml-to-yaml.display_name': 'XML in YAML',
	'tool.xml-to-yaml.tagline': 'Converti documenti XML in formato YAML',
	'tool.xml-to-yaml.description':
		'Converti XML in formato YAML con indentazione corretta. Gestisce attributi, contenuto testuale ed elementi XML annidati.',
	'tool.xml-to-yaml.primary_keyword': 'xml in yaml',
	'tool.xml-to-yaml.meta_title': 'Convertitore XML in YAML — fmtly.dev',
	'tool.xml-to-yaml.meta_description':
		'Converti XML in YAML istantaneamente nel browser. Gestisce attributi ed elementi annidati. Nessun dato caricato.',
	'tool.xml-to-yaml.operation': 'Converti',

	'tool.xml-to-csv.display_name': 'XML in CSV',
	'tool.xml-to-csv.tagline': 'Converti record XML in formato CSV',
	'tool.xml-to-csv.description':
		'Estrai elementi XML ripetuti in righe CSV. Rileva automaticamente le intestazioni delle colonne dai nomi degli elementi e degli attributi.',
	'tool.xml-to-csv.primary_keyword': 'xml in csv',
	'tool.xml-to-csv.meta_title': 'Convertitore XML in CSV — fmtly.dev',
	'tool.xml-to-csv.meta_description':
		'Converti XML in CSV istantaneamente nel browser. Rileva automaticamente le intestazioni dai nomi degli elementi. Nessun dato caricato.',
	'tool.xml-to-csv.operation': 'Converti',

	'tool.xml-minifier.display_name': 'Minificatore XML',
	'tool.xml-minifier.tagline': 'Rimuovi spazi bianchi e comprimi XML',
	'tool.xml-minifier.description':
		"Rimuovi tutti gli spazi bianchi e i commenti dall'XML per produrre output compatto. Valida prima l'XML, poi lo minifica per ridurre le dimensioni del file.",
	'tool.xml-minifier.primary_keyword': 'minificatore xml',
	'tool.xml-minifier.meta_title': 'Minificatore XML — fmtly.dev',
	'tool.xml-minifier.meta_description':
		'Minifica XML nel browser istantaneamente. Rimuove spazi bianchi e commenti. I dati non lasciano il tuo dispositivo.',
	'tool.xml-minifier.operation': 'Minifica',

	'tool.xml-xpath.display_name': 'Query XPath',
	'tool.xml-xpath.tagline': 'Interroga dati XML con espressioni XPath',
	'tool.xml-xpath.description':
		'Esegui espressioni XPath 1.0 su documenti XML. Supporta selezione di elementi, filtraggio per attributi e tutti gli assi e le funzioni XPath standard.',
	'tool.xml-xpath.primary_keyword': 'query xpath',
	'tool.xml-xpath.meta_title': 'Strumento Query XPath — fmtly.dev',
	'tool.xml-xpath.meta_description':
		'Interroga XML con espressioni XPath nel browser. Supporta tutti gli operatori XPath 1.0. Nessun dato caricato.',
	'tool.xml-xpath.operation': 'Interroga',

	// ── YAML tools ──────────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'Formattatore YAML',
	'tool.yaml-formatter.tagline': 'Formatta e abbellisci YAML con indentazione coerente',
	'tool.yaml-formatter.description':
		"Formatta file YAML con indentazione coerente a 2 spazi. Valida la sintassi YAML e normalizza le virgolette, le ancore e l'ordinamento delle chiavi.",
	'tool.yaml-formatter.primary_keyword': 'formattatore yaml',
	'tool.yaml-formatter.meta_title': 'Formattatore e Abbellitore YAML — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		"Formatta e abbellisci YAML nel browser. Valida la sintassi e normalizza l'indentazione. I dati non lasciano il tuo dispositivo.",
	'tool.yaml-formatter.operation': 'Formatta',

	'tool.yaml-validator.display_name': 'Validatore YAML',
	'tool.yaml-validator.tagline': 'Valida la sintassi e la struttura YAML',
	'tool.yaml-validator.description':
		'Valida i documenti YAML per errori di sintassi. Identifica problemi di indentazione, chiavi duplicate e caratteri non validi con numeri di riga precisi.',
	'tool.yaml-validator.primary_keyword': 'validatore yaml',
	'tool.yaml-validator.meta_title': 'Validatore YAML — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Valida YAML nel browser. Rileva errori di sintassi con numeri di riga. I dati non lasciano il tuo dispositivo.',
	'tool.yaml-validator.operation': 'Valida',

	'tool.yaml-to-json.display_name': 'YAML in JSON',
	'tool.yaml-to-json.tagline': 'Converti YAML in formato JSON',
	'tool.yaml-to-json.description':
		'Converti documenti YAML in JSON formattato. Gestisce ancore, alias, YAML multi-documento e tutti i tipi di dati YAML.',
	'tool.yaml-to-json.primary_keyword': 'yaml in json',
	'tool.yaml-to-json.meta_title': 'Convertitore YAML in JSON — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		'Converti YAML in JSON istantaneamente nel browser. Gestisce ancore, alias e YAML multi-documento. Nessun dato caricato.',
	'tool.yaml-to-json.operation': 'Converti',

	'tool.yaml-to-xml.display_name': 'YAML in XML',
	'tool.yaml-to-xml.tagline': 'Converti YAML in formato XML',
	'tool.yaml-to-xml.description':
		'Converti documenti YAML in XML ben formato. Mappa le chiavi YAML in elementi XML e gestisce strutture annidate e array.',
	'tool.yaml-to-xml.primary_keyword': 'yaml in xml',
	'tool.yaml-to-xml.meta_title': 'Convertitore YAML in XML — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		'Converti YAML in XML istantaneamente nel browser. Nessun dato caricato.',
	'tool.yaml-to-xml.operation': 'Converti',

	'tool.yaml-to-csv.display_name': 'YAML in CSV',
	'tool.yaml-to-csv.tagline': 'Converti array YAML in formato CSV',
	'tool.yaml-to-csv.description':
		'Converti array YAML di oggetti in formato CSV. Estrae le intestazioni dalle chiavi degli oggetti e formatta i dati in righe.',
	'tool.yaml-to-csv.primary_keyword': 'yaml in csv',
	'tool.yaml-to-csv.meta_title': 'Convertitore YAML in CSV — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		'Converti YAML in CSV istantaneamente nel browser. Nessun dato caricato.',
	'tool.yaml-to-csv.operation': 'Converti',

	'tool.yaml-to-toml.display_name': 'YAML in TOML',
	'tool.yaml-to-toml.tagline': 'Converti YAML in formato di configurazione TOML',
	'tool.yaml-to-toml.description':
		'Converti file di configurazione YAML in formato TOML. Gestisce tabelle annidate, array e tutti i tipi di dati YAML.',
	'tool.yaml-to-toml.primary_keyword': 'yaml in toml',
	'tool.yaml-to-toml.meta_title': 'Convertitore YAML in TOML — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		'Converti YAML in TOML istantaneamente nel browser. Nessun dato caricato.',
	'tool.yaml-to-toml.operation': 'Converti',

	'tool.yaml-diff.display_name': 'YAML Diff',
	'tool.yaml-diff.tagline': 'Confronta due documenti YAML affiancati',
	'tool.yaml-diff.description':
		'Confronta due documenti YAML ed evidenzia aggiunte, eliminazioni e modifiche. Comprende la struttura YAML per il confronto semantico.',
	'tool.yaml-diff.primary_keyword': 'yaml diff',
	'tool.yaml-diff.meta_title': 'Strumento YAML Diff — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'Confronta due documenti YAML nel browser. Evidenzia tutte le aggiunte, eliminazioni e modifiche. Nessun dato caricato.',
	'tool.yaml-diff.operation': 'Confronta',

	// ── CSV tools ───────────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': 'CSV in JSON',
	'tool.csv-to-json.tagline': 'Converti dati CSV in un array JSON',
	'tool.csv-to-json.description':
		'Converti CSV con intestazioni in un array JSON di oggetti. Supporta il rilevamento dinamico del tipo per numeri e booleani e opzioni per delimitatori personalizzati.',
	'tool.csv-to-json.primary_keyword': 'csv in json',
	'tool.csv-to-json.meta_title': 'Convertitore CSV in JSON — fmtly.dev',
	'tool.csv-to-json.meta_description':
		'Converti CSV in JSON istantaneamente nel browser. Supporta intestazioni, tipizzazione dinamica e delimitatori personalizzati. Nessun dato caricato.',
	'tool.csv-to-json.operation': 'Converti',

	'tool.csv-to-xml.display_name': 'CSV in XML',
	'tool.csv-to-xml.tagline': 'Converti dati CSV in formato XML',
	'tool.csv-to-xml.description':
		'Converti file CSV in XML ben formato. Mappa le intestazioni delle colonne ai nomi degli elementi e genera elementi riga per ogni record.',
	'tool.csv-to-xml.primary_keyword': 'csv in xml',
	'tool.csv-to-xml.meta_title': 'Convertitore CSV in XML — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		'Converti CSV in XML istantaneamente nel browser. Mappa le intestazioni ai nomi degli elementi. Nessun dato caricato.',
	'tool.csv-to-xml.operation': 'Converti',

	'tool.csv-to-yaml.display_name': 'CSV in YAML',
	'tool.csv-to-yaml.tagline': 'Converti dati CSV in formato YAML',
	'tool.csv-to-yaml.description':
		'Converti file CSV in array YAML di oggetti. Mappa le intestazioni delle colonne alle chiavi YAML per ogni riga.',
	'tool.csv-to-yaml.primary_keyword': 'csv in yaml',
	'tool.csv-to-yaml.meta_title': 'Convertitore CSV in YAML — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		'Converti CSV in YAML istantaneamente nel browser. Nessun dato caricato.',
	'tool.csv-to-yaml.operation': 'Converti',

	'tool.csv-to-html.display_name': 'CSV in Tabella HTML',
	'tool.csv-to-html.tagline': 'Converti dati CSV in una tabella HTML',
	'tool.csv-to-html.description':
		'Converti file CSV in tabelle HTML formattate. Usa la prima riga come intestazioni delle colonne.',
	'tool.csv-to-html.primary_keyword': 'csv in tabella html',
	'tool.csv-to-html.meta_title': 'Convertitore CSV in Tabella HTML — fmtly.dev',
	'tool.csv-to-html.meta_description':
		'Converti CSV in tabella HTML istantaneamente nel browser. Nessun dato caricato.',
	'tool.csv-to-html.operation': 'Converti',

	'tool.csv-formatter.display_name': 'Formattatore CSV',
	'tool.csv-formatter.tagline': 'Formatta e normalizza dati CSV',
	'tool.csv-formatter.description':
		'Pulisci e formatta dati CSV con delimitatori, virgolette e terminazioni di riga coerenti. Valida la struttura CSV e normalizza gli spazi bianchi.',
	'tool.csv-formatter.primary_keyword': 'formattatore csv',
	'tool.csv-formatter.meta_title': 'Formattatore CSV — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'Formatta e pulisci dati CSV nel browser. Nessun dato caricato.',
	'tool.csv-formatter.operation': 'Formatta',

	'tool.csv-validator.display_name': 'Validatore CSV',
	'tool.csv-validator.tagline': 'Valida la struttura e la sintassi CSV',
	'tool.csv-validator.description':
		'Valida i file CSV per conteggi di colonne coerenti, virgolette corrette e problemi di codifica. Identifica righe malformate con numeri di riga precisi.',
	'tool.csv-validator.primary_keyword': 'validatore csv',
	'tool.csv-validator.meta_title': 'Validatore CSV — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Valida CSV nel browser. Rileva errori di struttura con numeri di riga. I dati non lasciano il tuo dispositivo.',
	'tool.csv-validator.operation': 'Valida',

	// ── Text tools ──────────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Contatore di Parole',
	'tool.text-word-counter.tagline': 'Conta parole, caratteri e frasi nel testo',
	'tool.text-word-counter.description':
		'Conta parole, caratteri, frasi e paragrafi in qualsiasi testo. Mostra stime del tempo di lettura e lunghezza media delle parole.',
	'tool.text-word-counter.primary_keyword': 'contatore parole',
	'tool.text-word-counter.meta_title': 'Contatore di Parole — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Conta parole, caratteri e frasi nel browser. Include stime del tempo di lettura. Nessun dato caricato.',
	'tool.text-word-counter.operation': 'Conta',

	'tool.text-readability.display_name': 'Analizzatore di Leggibilità',
	'tool.text-readability.tagline': 'Misura i punteggi di leggibilità del testo',
	'tool.text-readability.description':
		'Calcola i punteggi Flesch-Kincaid, Gunning Fog e altri indici di leggibilità per qualsiasi testo. Aiuta a ottimizzare i contenuti per il pubblico di destinazione.',
	'tool.text-readability.primary_keyword': 'analizzatore leggibilità',
	'tool.text-readability.meta_title': 'Analizzatore di Leggibilità — fmtly.dev',
	'tool.text-readability.meta_description':
		'Misura la leggibilità del testo nel browser con Flesch-Kincaid e altri punteggi. Nessun dato caricato.',
	'tool.text-readability.operation': 'Analizza',

	'tool.text-line-sorter.display_name': 'Ordinatore di Righe',
	'tool.text-line-sorter.tagline': 'Ordina le righe di testo alfabeticamente o per lunghezza',
	'tool.text-line-sorter.description':
		'Ordina le righe alfabeticamente, numericamente o per lunghezza. Supporta ordine crescente e decrescente e ordinamento senza distinzione di maiuscole/minuscole.',
	'tool.text-line-sorter.primary_keyword': 'ordinatore righe',
	'tool.text-line-sorter.meta_title': 'Ordinatore di Righe — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Ordina le righe di testo nel browser. Supporta ordinamento alfabetico, numerico e per lunghezza. Nessun dato caricato.',
	'tool.text-line-sorter.operation': 'Ordina',

	'tool.text-deduplicate.display_name': 'Rimozione Righe Duplicate',
	'tool.text-deduplicate.tagline': 'Rimuovi le righe duplicate dal testo',
	'tool.text-deduplicate.description':
		"Rimuovi le righe duplicate da qualsiasi testo. Supporta corrispondenza con e senza distinzione di maiuscole/minuscole e preserva l'ordine originale delle righe.",
	'tool.text-deduplicate.primary_keyword': 'rimuovi righe duplicate',
	'tool.text-deduplicate.meta_title': 'Rimozione Righe Duplicate — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Rimuovi le righe duplicate dal testo nel browser. Opzioni con e senza distinzione maiuscole/minuscole. Nessun dato caricato.',
	'tool.text-deduplicate.operation': 'Deduplica',

	'tool.text-whitespace.display_name': 'Pulizia Spazi Bianchi',
	'tool.text-whitespace.tagline': 'Rimuovi gli spazi bianchi in eccesso e normalizza la spaziatura',
	'tool.text-whitespace.description':
		'Rimuovi spazi, tabulazioni e righe vuote in eccesso dal testo. Normalizza gli spazi multipli in spazi singoli e taglia gli spazi bianchi iniziali e finali.',
	'tool.text-whitespace.primary_keyword': 'pulizia spazi bianchi',
	'tool.text-whitespace.meta_title': 'Pulizia Spazi Bianchi — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Rimuovi gli spazi bianchi in eccesso dal testo nel browser. Normalizza la spaziatura e taglia le righe. Nessun dato caricato.',
	'tool.text-whitespace.operation': 'Pulisci',

	'tool.text-markdown-to-html.display_name': 'Markdown in HTML',
	'tool.text-markdown-to-html.tagline': 'Converti Markdown in HTML',
	'tool.text-markdown-to-html.description':
		'Converti testo Markdown in HTML. Supporta intestazioni, liste, tabelle, blocchi di codice, link, immagini e tutte le funzionalità CommonMark.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown in html',
	'tool.text-markdown-to-html.meta_title': 'Convertitore Markdown in HTML — fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Converti Markdown in HTML istantaneamente nel browser. Supporta tutte le funzionalità CommonMark. Nessun dato caricato.',
	'tool.text-markdown-to-html.operation': 'Converti',

	'tool.text-html-to-markdown.display_name': 'HTML in Markdown',
	'tool.text-html-to-markdown.tagline': 'Converti HTML in Markdown',
	'tool.text-html-to-markdown.description':
		'Converti HTML in Markdown pulito. Gestisce intestazioni, paragrafi, liste, tabelle, blocchi di codice e formattazione inline.',
	'tool.text-html-to-markdown.primary_keyword': 'html in markdown',
	'tool.text-html-to-markdown.meta_title': 'Convertitore HTML in Markdown — fmtly.dev',
	'tool.text-html-to-markdown.meta_description':
		'Converti HTML in Markdown istantaneamente nel browser. Nessun dato caricato.',
	'tool.text-html-to-markdown.operation': 'Converti',

	'tool.text-reverser.display_name': 'Inversore di Testo',
	'tool.text-reverser.tagline': 'Inverti testo, parole o righe',
	'tool.text-reverser.description':
		'Inverti il testo carattere per carattere, parola per parola o riga per riga. Bidirezionale — incolla in entrambe le direzioni.',
	'tool.text-reverser.primary_keyword': 'inversore testo',
	'tool.text-reverser.meta_title': 'Inversore di Testo — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Inverti testo istantaneamente nel browser. Inverti caratteri, parole o righe. Nessun dato caricato.',
	'tool.text-reverser.operation': 'Inverti',

	// ── Code tools ──────────────────────────────────────────────────────────
	'tool.code-css.display_name': 'Formattatore CSS',
	'tool.code-css.tagline': 'Formatta e abbellisci fogli di stile CSS',
	'tool.code-css.description':
		'Formatta CSS con indentazione coerente e ordinamento delle proprietà. Supporta la formattazione in stile Prettier con larghezza di riga configurabile.',
	'tool.code-css.primary_keyword': 'formattatore css',
	'tool.code-css.meta_title': 'Formattatore e Abbellitore CSS — fmtly.dev',
	'tool.code-css.meta_description':
		'Formatta e abbellisci CSS nel browser. Indentazione configurabile e ordinamento delle proprietà. I dati non lasciano il tuo dispositivo.',
	'tool.code-css.operation': 'Formatta',

	'tool.code-scss.display_name': 'Formattatore SCSS',
	'tool.code-scss.tagline': 'Formatta e abbellisci fogli di stile SCSS',
	'tool.code-scss.description':
		'Formatta file SCSS con indentazione coerente. Supporta variabili, regole annidate, mixin e tutta la sintassi specifica di SCSS.',
	'tool.code-scss.primary_keyword': 'formattatore scss',
	'tool.code-scss.meta_title': 'Formattatore e Abbellitore SCSS — fmtly.dev',
	'tool.code-scss.meta_description':
		'Formatta e abbellisci SCSS nel browser. I dati non lasciano il tuo dispositivo.',
	'tool.code-scss.operation': 'Formatta',

	'tool.code-less.display_name': 'Formattatore LESS',
	'tool.code-less.tagline': 'Formatta e abbellisci fogli di stile LESS',
	'tool.code-less.description':
		'Formatta file LESS con indentazione coerente. Supporta variabili, mixin, annidamento e tutta la sintassi specifica di LESS.',
	'tool.code-less.primary_keyword': 'formattatore less',
	'tool.code-less.meta_title': 'Formattatore e Abbellitore LESS — fmtly.dev',
	'tool.code-less.meta_description':
		'Formatta e abbellisci LESS nel browser. I dati non lasciano il tuo dispositivo.',
	'tool.code-less.operation': 'Formatta',

	'tool.code-html.display_name': 'Formattatore HTML',
	'tool.code-html.tagline': 'Formatta e abbellisci il markup HTML',
	'tool.code-html.description':
		'Formatta HTML con indentazione corretta e annidamento dei tag. Gestisce elementi inline e di blocco, attributi e CSS e JavaScript incorporati.',
	'tool.code-html.primary_keyword': 'formattatore html',
	'tool.code-html.meta_title': 'Formattatore e Abbellitore HTML — fmtly.dev',
	'tool.code-html.meta_description':
		'Formatta e abbellisci HTML nel browser. Indentazione corretta e annidamento dei tag. I dati non lasciano il tuo dispositivo.',
	'tool.code-html.operation': 'Formatta',

	'tool.code-javascript.display_name': 'Formattatore JavaScript',
	'tool.code-javascript.tagline': 'Formatta e abbellisci codice JavaScript',
	'tool.code-javascript.description':
		'Formatta JavaScript con formattazione in stile Prettier. Supporta ES2022+, JSX, sintassi modulare e opzioni configurabili come punto e virgola e virgolette singole.',
	'tool.code-javascript.primary_keyword': 'formattatore javascript',
	'tool.code-javascript.meta_title': 'Formattatore e Abbellitore JavaScript — fmtly.dev',
	'tool.code-javascript.meta_description':
		'Formatta e abbellisci JavaScript nel browser. Supporta la sintassi ES moderna. I dati non lasciano il tuo dispositivo.',
	'tool.code-javascript.operation': 'Formatta',

	'tool.code-typescript.display_name': 'Formattatore TypeScript',
	'tool.code-typescript.tagline': 'Formatta e abbellisci codice TypeScript',
	'tool.code-typescript.description':
		'Formatta TypeScript con formattazione in stile Prettier. Supporta tutte le funzionalità TypeScript inclusi generics, decoratori e annotazioni di tipo.',
	'tool.code-typescript.primary_keyword': 'formattatore typescript',
	'tool.code-typescript.meta_title': 'Formattatore e Abbellitore TypeScript — fmtly.dev',
	'tool.code-typescript.meta_description':
		'Formatta e abbellisci TypeScript nel browser. Supporta tutta la sintassi TypeScript. I dati non lasciano il tuo dispositivo.',
	'tool.code-typescript.operation': 'Formatta',

	'tool.code-graphql.display_name': 'Formattatore GraphQL',
	'tool.code-graphql.tagline': 'Formatta e abbellisci schemi e query GraphQL',
	'tool.code-graphql.description':
		'Formatta schemi e query GraphQL con indentazione coerente. Supporta SDL, query, mutation, subscription e fragment.',
	'tool.code-graphql.primary_keyword': 'formattatore graphql',
	'tool.code-graphql.meta_title': 'Formattatore e Abbellitore GraphQL — fmtly.dev',
	'tool.code-graphql.meta_description':
		'Formatta e abbellisci GraphQL nel browser. Supporta SDL, query e mutation. I dati non lasciano il tuo dispositivo.',
	'tool.code-graphql.operation': 'Formatta',

	'tool.code-markdown.display_name': 'Formattatore Markdown',
	'tool.code-markdown.tagline': 'Formatta e normalizza documenti Markdown',
	'tool.code-markdown.description':
		'Formatta Markdown con stili di intestazione coerenti, indentazione degli elenchi e allineamento delle tabelle. Normalizza gli spazi bianchi e le righe vuote.',
	'tool.code-markdown.primary_keyword': 'formattatore markdown',
	'tool.code-markdown.meta_title': 'Formattatore Markdown — fmtly.dev',
	'tool.code-markdown.meta_description':
		'Formatta e normalizza Markdown nel browser. I dati non lasciano il tuo dispositivo.',
	'tool.code-markdown.operation': 'Formatta',

	'tool.code-curl-to-fetch.display_name': 'cURL in Fetch',
	'tool.code-curl-to-fetch.tagline': 'Converti comandi cURL in JavaScript fetch()',
	'tool.code-curl-to-fetch.description':
		'Converti comandi cURL in chiamate native JavaScript fetch(). Gestisce intestazioni, corpo della richiesta, autenticazione e tutte le opzioni cURL comuni.',
	'tool.code-curl-to-fetch.primary_keyword': 'convertitore curl in fetch',
	'tool.code-curl-to-fetch.meta_title': 'Convertitore cURL in Fetch — fmtly.dev',
	'tool.code-curl-to-fetch.meta_description':
		'Converti comandi cURL in JavaScript fetch() nel browser. Gestisce intestazioni, corpo e autenticazione. Nessun dato caricato.',
	'tool.code-curl-to-fetch.operation': 'Converti',

	'tool.code-curl-to-axios.display_name': 'cURL in Axios',
	'tool.code-curl-to-axios.tagline': 'Converti comandi cURL in richieste Axios',
	'tool.code-curl-to-axios.description':
		'Converti comandi cURL in chiamate di richiesta Axios. Gestisce intestazioni, corpo della richiesta, autenticazione e tutte le opzioni cURL comuni.',
	'tool.code-curl-to-axios.primary_keyword': 'convertitore curl in axios',
	'tool.code-curl-to-axios.meta_title': 'Convertitore cURL in Axios — fmtly.dev',
	'tool.code-curl-to-axios.meta_description':
		'Converti comandi cURL in richieste Axios nel browser. Gestisce intestazioni, corpo e autenticazione. Nessun dato caricato.',
	'tool.code-curl-to-axios.operation': 'Converti',

	// ── Color tools ──────────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Convertitore Colori',
	'tool.color-converter.tagline': 'Converti colori tra HEX, RGB, HSL e altro',
	'tool.color-converter.description':
		"Converti colori tra formati HEX, RGB, RGBA, HSL, HSLA e colori CSS con nome. Mostra un'anteprima live del colore selezionato.",
	'tool.color-converter.primary_keyword': 'convertitore colori',
	'tool.color-converter.meta_title': 'Convertitore Colori — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Converti colori tra HEX, RGB, HSL e colori CSS con nome nel browser. Anteprima live inclusa.',
	'tool.color-converter.operation': 'Converti',

	'tool.color-contrast.display_name': 'Verifica Contrasto Colori',
	'tool.color-contrast.tagline': 'Verifica il rapporto di contrasto WCAG tra due colori',
	'tool.color-contrast.description':
		'Calcola il rapporto di contrasto tra due colori e verifica la conformità di accessibilità WCAG 2.1 AA e AAA per testo normale e grande.',
	'tool.color-contrast.primary_keyword': 'verifica contrasto colori',
	'tool.color-contrast.meta_title': 'Verifica Contrasto Colori — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Verifica il rapporto di contrasto dei colori per la conformità WCAG AA e AAA nel browser.',
	'tool.color-contrast.operation': 'Verifica',

	// ── Crypto tools ─────────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'Generatore HMAC',
	'tool.crypto-hmac.tagline': 'Genera firme HMAC con algoritmi SHA',
	'tool.crypto-hmac.description':
		'Genera firme HMAC usando SHA-256, SHA-384 o SHA-512. Produce firme codificate in hex o Base64 usando la Web Crypto API.',
	'tool.crypto-hmac.primary_keyword': 'generatore hmac',
	'tool.crypto-hmac.meta_title': 'Generatore HMAC — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		'Genera firme HMAC nel browser usando la Web Crypto API. Supporta SHA-256, SHA-384 e SHA-512.',
	'tool.crypto-hmac.operation': 'Genera',

	'tool.crypto-password-strength.display_name': 'Verifica Forza Password',
	'tool.crypto-password-strength.tagline': "Analizza la forza e l'entropia della password",
	'tool.crypto-password-strength.description':
		"Valuta la forza della password con calcolo dell'entropia, rilevamento di pattern e tempo stimato di crack. Nessun dato viene mai inviato a server.",
	'tool.crypto-password-strength.primary_keyword': 'verifica forza password',
	'tool.crypto-password-strength.meta_title': 'Verifica Forza Password — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		"Verifica la forza e l'entropia della password nel browser. Nessuna password viene mai trasmessa. 100% lato client.",
	'tool.crypto-password-strength.operation': 'Analizza',

	'tool.crypto-ulid.display_name': 'Generatore ULID',
	'tool.crypto-ulid.tagline':
		'Genera identificatori universalmente unici e ordinabili lessicograficamente',
	'tool.crypto-ulid.description':
		'Genera ULID — identificatori ordinati nel tempo, sicuri per URL, ordinabili e resistenti alle collisioni. Usa la Web Crypto API per la casualità crittografica.',
	'tool.crypto-ulid.primary_keyword': 'generatore ulid',
	'tool.crypto-ulid.meta_title': 'Generatore ULID — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		'Genera ULID nel browser usando la Web Crypto API. Identificatori ordinabili e sicuri per URL.',
	'tool.crypto-ulid.operation': 'Genera',

	'tool.crypto-random-string.display_name': 'Generatore di Stringhe Casuali',
	'tool.crypto-random-string.tagline': 'Genera stringhe casuali crittograficamente sicure',
	'tool.crypto-random-string.description':
		'Genera stringhe casuali crittograficamente sicure con lunghezza e set di caratteri configurabili. Usa la Web Crypto API per vera casualità.',
	'tool.crypto-random-string.primary_keyword': 'generatore stringhe casuali',
	'tool.crypto-random-string.meta_title': 'Generatore di Stringhe Casuali — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		'Genera stringhe casuali sicure nel browser usando la Web Crypto API. Lunghezza e set di caratteri configurabili.',
	'tool.crypto-random-string.operation': 'Genera',

	// ── Diff tools ───────────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Diff Testuale',
	'tool.diff-text.tagline': 'Confronta due blocchi di testo ed evidenzia le differenze',
	'tool.diff-text.description':
		'Confronta due blocchi di testo affiancati ed evidenzia le righe aggiunte, rimosse e invariate. Supporta modalità diff a livello di parola e di riga.',
	'tool.diff-text.primary_keyword': 'diff testuale',
	'tool.diff-text.meta_title': 'Strumento Diff Testuale — fmtly.dev',
	'tool.diff-text.meta_description':
		'Confronta due blocchi di testo nel browser. Evidenzia aggiunte ed eliminazioni a livello di parola o riga. Nessun dato caricato.',
	'tool.diff-text.operation': 'Confronta',

	// ── Encode tools ─────────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Encoder / Decoder Base64',
	'tool.encode-base64.tagline': 'Codifica e decodifica stringhe Base64',
	'tool.encode-base64.description':
		'Codifica testo o dati binari in Base64 e decodifica stringhe Base64 in testo. Supporta varianti Base64 standard e sicure per URL.',
	'tool.encode-base64.primary_keyword': 'encoder decoder base64',
	'tool.encode-base64.meta_title': 'Encoder e Decoder Base64 — fmtly.dev',
	'tool.encode-base64.meta_description':
		'Codifica e decodifica Base64 nel browser. Supporta varianti standard e sicure per URL. Nessun dato caricato.',
	'tool.encode-base64.operation': 'Codifica / Decodifica',

	'tool.encode-url.display_name': 'Encoder / Decoder URL',
	'tool.encode-url.tagline': 'Codifica e decodifica stringhe URL-encoded',
	'tool.encode-url.description':
		'Codifica in percentuale URL e componenti URL o decodifica stringhe codificate in percentuale. Gestisce tutti i caratteri riservati e speciali secondo RFC 3986.',
	'tool.encode-url.primary_keyword': 'encoder decoder url',
	'tool.encode-url.meta_title': 'Encoder e Decoder URL — fmtly.dev',
	'tool.encode-url.meta_description':
		'Codifica e decodifica URL nel browser. Gestisce tutti i caratteri speciali. Nessun dato caricato.',
	'tool.encode-url.operation': 'Codifica / Decodifica',

	'tool.encode-html.display_name': 'Encoder / Decoder HTML',
	'tool.encode-html.tagline': 'Codifica e decodifica entità HTML',
	'tool.encode-html.description':
		'Converti caratteri speciali in entità HTML e viceversa. Gestisce &amp;, &lt;, &gt;, &quot; e tutti gli altri caratteri speciali HTML.',
	'tool.encode-html.primary_keyword': 'encoder decoder html',
	'tool.encode-html.meta_title': 'Encoder e Decoder HTML — fmtly.dev',
	'tool.encode-html.meta_description':
		'Codifica e decodifica entità HTML nel browser. Nessun dato caricato.',
	'tool.encode-html.operation': 'Codifica / Decodifica',

	'tool.encode-html-entities.display_name': 'Riferimento Entità HTML',
	'tool.encode-html-entities.tagline': 'Sfoglia e cerca codici entità HTML',
	'tool.encode-html-entities.description':
		'Cerca e sfoglia tutte le entità HTML con le loro forme decimale, esadecimale e con nome. Include code point Unicode e anteprime visive.',
	'tool.encode-html-entities.primary_keyword': 'riferimento entità html',
	'tool.encode-html-entities.meta_title': 'Riferimento Entità HTML — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Sfoglia tutte le entità HTML nel browser. Cerca per nome, decimale o codice esadecimale.',
	'tool.encode-html-entities.operation': 'Cerca',

	'tool.encode-unicode.display_name': 'Analizzatore Unicode',
	'tool.encode-unicode.tagline': 'Analizza i code point Unicode nel testo',
	'tool.encode-unicode.description':
		'Decodifica qualsiasi testo nei suoi code point Unicode con rappresentazioni hex, escape CSS, escape JavaScript e byte UTF-8. Gestisce emoji e sequenze multi-codepoint.',
	'tool.encode-unicode.primary_keyword': 'analizzatore unicode',
	'tool.encode-unicode.meta_title': 'Analizzatore Unicode — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Analizza i code point Unicode nel browser. Ispeziona hex, escape CSS, escape JS e byte UTF-8.',
	'tool.encode-unicode.operation': 'Analizza',

	// ── Escape tools ─────────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'Escape Stringhe JSON',
	'tool.escape-json.tagline': 'Esegui escape e unescape di stringhe JSON',
	'tool.escape-json.description':
		"Esegui l'escape dei caratteri speciali nelle stringhe per l'uso nei valori JSON, o esegui l'unescape dei valori stringa JSON in testo normale. Gestisce ritorni a capo, tabulazioni, virgolette e backslash.",
	'tool.escape-json.primary_keyword': 'escape unescape json',
	'tool.escape-json.meta_title': 'Escape e Unescape Stringhe JSON — fmtly.dev',
	'tool.escape-json.meta_description':
		'Esegui escape e unescape di stringhe JSON nel browser. Nessun dato caricato.',
	'tool.escape-json.operation': 'Escape / Unescape',

	// ── File tools ───────────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'Calcolatore Hash File',
	'tool.file-hash.tagline': 'Calcola hash MD5, SHA-1, SHA-256 e SHA-512 dei file',
	'tool.file-hash.description':
		'Calcola valori hash crittografici per qualsiasi file. Supporta algoritmi MD5, SHA-1, SHA-256 e SHA-512. Funziona interamente nel browser.',
	'tool.file-hash.primary_keyword': 'calcolatore hash file',
	'tool.file-hash.meta_title': 'Calcolatore Hash File — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		'Calcola hash di file nel browser. Supporta MD5, SHA-1, SHA-256 e SHA-512. Nessun file viene caricato su server.',
	'tool.file-hash.operation': 'Calcola Hash',

	// ── Generate tools ───────────────────────────────────────────────────────
	'tool.generate-uuid.display_name': 'Generatore UUID',
	'tool.generate-uuid.tagline': 'Genera UUID casuali (v4)',
	'tool.generate-uuid.description':
		'Genera UUID versione 4 RFC 4122 usando la Web Crypto API. Genera UUID singoli o multipli con un clic.',
	'tool.generate-uuid.primary_keyword': 'generatore uuid',
	'tool.generate-uuid.meta_title': 'Generatore UUID — fmtly.dev',
	'tool.generate-uuid.meta_description':
		'Genera UUID casuali nel browser usando la Web Crypto API. Conforme a RFC 4122 v4.',
	'tool.generate-uuid.operation': 'Genera',

	// ── Image tools ──────────────────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Compressore di Immagini',
	'tool.image-compressor.tagline': 'Comprimi immagini senza perdita di qualità',
	'tool.image-compressor.description':
		"Comprimi immagini JPEG, PNG e WebP nel browser. Regola le impostazioni di qualità e visualizza l'anteprima prima del download. Nessuna immagine viene caricata.",
	'tool.image-compressor.primary_keyword': 'compressore immagini',
	'tool.image-compressor.meta_title': 'Compressore di Immagini — fmtly.dev',
	'tool.image-compressor.meta_description':
		'Comprimi immagini nel browser. Supporta JPEG, PNG e WebP. Nessuna immagine viene caricata su server.',
	'tool.image-compressor.operation': 'Comprimi',

	// ── Number tools ─────────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Formattatore di Numeri',
	'tool.number-formatter.tagline': 'Formatta i numeri con separatori specifici per la lingua',
	'tool.number-formatter.description':
		'Formatta i numeri con separatori delle migliaia, cifre decimali e notazione specifica per la lingua. Supporta la formattazione valutaria e la notazione scientifica.',
	'tool.number-formatter.primary_keyword': 'formattatore numeri',
	'tool.number-formatter.meta_title': 'Formattatore di Numeri — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Formatta numeri con separatori di lingua e simboli valutari nel browser.',
	'tool.number-formatter.operation': 'Formatta',

	'tool.number-roman.display_name': 'Convertitore Numeri Romani',
	'tool.number-roman.tagline': 'Converti tra numeri romani e interi',
	'tool.number-roman.description':
		'Converti interi in numeri romani e viceversa. Supporta numeri da 1 a 3999 con notazione standard dei numeri romani.',
	'tool.number-roman.primary_keyword': 'convertitore numeri romani',
	'tool.number-roman.meta_title': 'Convertitore Numeri Romani — fmtly.dev',
	'tool.number-roman.meta_description': 'Converti tra numeri romani e interi nel browser.',
	'tool.number-roman.operation': 'Converti',

	'tool.number-percentage.display_name': 'Calcolatore di Percentuali',
	'tool.number-percentage.tagline': 'Calcola percentuali, aumenti e diminuzioni',
	'tool.number-percentage.description':
		'Calcola valori percentuali, variazione percentuale e percentuale di totali. Supporta calcoli di aumento/diminuzione e ricerche percentuali inverse.',
	'tool.number-percentage.primary_keyword': 'calcolatore percentuali',
	'tool.number-percentage.meta_title': 'Calcolatore di Percentuali — fmtly.dev',
	'tool.number-percentage.meta_description':
		'Calcola percentuali e variazione percentuale nel browser.',
	'tool.number-percentage.operation': 'Calcola',

	'tool.number-scientific.display_name': 'Convertitore Notazione Scientifica',
	'tool.number-scientific.tagline': 'Converti numeri da e in notazione scientifica',
	'tool.number-scientific.description':
		'Converti numeri in notazione scientifica e viceversa. Mostra mantissa, esponente e notazione ingegneristica equivalente.',
	'tool.number-scientific.primary_keyword': 'convertitore notazione scientifica',
	'tool.number-scientific.meta_title': 'Convertitore Notazione Scientifica — fmtly.dev',
	'tool.number-scientific.meta_description':
		'Converti numeri in notazione scientifica nel browser.',
	'tool.number-scientific.operation': 'Converti',

	'tool.number-statistics.display_name': 'Calcolatore Statistico',
	'tool.number-statistics.tagline': 'Calcola media, mediana, moda e altro',
	'tool.number-statistics.description':
		'Calcola statistiche descrittive per un elenco di numeri: media, mediana, moda, deviazione standard, varianza, minimo, massimo e quartili.',
	'tool.number-statistics.primary_keyword': 'calcolatore statistico',
	'tool.number-statistics.meta_title': 'Calcolatore Statistico — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Calcola media, mediana, deviazione standard e altro nel browser.',
	'tool.number-statistics.operation': 'Calcola',

	'tool.number-matrix.display_name': 'Calcolatore di Matrici',
	'tool.number-matrix.tagline': 'Esegui operazioni su matrici e calcoli',
	'tool.number-matrix.description':
		'Esegui operazioni su matrici incluse addizione, sottrazione, moltiplicazione, trasposizione, determinante e inversa su matrici di qualsiasi dimensione.',
	'tool.number-matrix.primary_keyword': 'calcolatore matrici',
	'tool.number-matrix.meta_title': 'Calcolatore di Matrici — fmtly.dev',
	'tool.number-matrix.meta_description':
		'Esegui operazioni su matrici nel browser. Supporta addizione, moltiplicazione, inversa e altro.',
	'tool.number-matrix.operation': 'Calcola',

	'tool.number-unit-converter.display_name': 'Convertitore di Unità',
	'tool.number-unit-converter.tagline': 'Converti tra unità di misura',
	'tool.number-unit-converter.description':
		'Converti tra unità di lunghezza, peso, temperatura, volume, area, velocità e altro. Supporta i sistemi metrico e imperiale.',
	'tool.number-unit-converter.primary_keyword': 'convertitore unità',
	'tool.number-unit-converter.meta_title': 'Convertitore di Unità — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Converti tra unità di misura nel browser. Supporta lunghezza, peso, temperatura e altro.',
	'tool.number-unit-converter.operation': 'Converti',

	// ── PDF tools ─────────────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'Visualizzatore PDF',
	'tool.pdf-viewer.tagline': 'Visualizza ed estrai testo da file PDF',
	'tool.pdf-viewer.description':
		'Visualizza file PDF nel browser ed estrai il contenuto testuale. Supporta PDF multipagina e selezione del testo. Nessun file viene caricato su server.',
	'tool.pdf-viewer.primary_keyword': 'visualizzatore pdf',
	'tool.pdf-viewer.meta_title': 'Visualizzatore PDF — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'Visualizza file PDF nel browser. Estrai testo da qualsiasi PDF. Nessun file caricato.',
	'tool.pdf-viewer.operation': 'Visualizza',

	// ── QR tools ──────────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'Generatore di Codici QR',
	'tool.qr-generator.tagline': 'Genera codici QR personalizzabili',
	'tool.qr-generator.description':
		'Genera codici QR da testo, URL, informazioni di contatto e altro. Personalizza dimensioni, livello di correzione degli errori e colori. Scarica come PNG o SVG.',
	'tool.qr-generator.primary_keyword': 'generatore codice qr',
	'tool.qr-generator.meta_title': 'Generatore di Codici QR — fmtly.dev',
	'tool.qr-generator.meta_description':
		'Genera codici QR personalizzabili nel browser. Scarica come PNG o SVG.',
	'tool.qr-generator.operation': 'Genera',

	// ── TOML tools ────────────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'Formattatore TOML',
	'tool.toml-formatter.tagline': 'Formatta e valida file di configurazione TOML',
	'tool.toml-formatter.description':
		'Formatta file TOML con spaziatura coerente e organizzazione delle sezioni. Valida la sintassi TOML ed evidenzia gli errori con i numeri di riga.',
	'tool.toml-formatter.primary_keyword': 'formattatore toml',
	'tool.toml-formatter.meta_title': 'Formattatore TOML — fmtly.dev',
	'tool.toml-formatter.meta_description':
		'Formatta e valida TOML nel browser. I dati non lasciano il tuo dispositivo.',
	'tool.toml-formatter.operation': 'Formatta',

	// ── Web tools ─────────────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'Parser URL',
	'tool.web-url-parser.tagline': 'Analizza e ispeziona i componenti URL',
	'tool.web-url-parser.description':
		'Scomponi URL nei loro componenti: protocollo, host, porta, percorso, parametri di query e frammento. Analizza e ispeziona qualsiasi URL.',
	'tool.web-url-parser.primary_keyword': 'parser url',
	'tool.web-url-parser.meta_title': 'Parser URL — fmtly.dev',
	'tool.web-url-parser.meta_description':
		'Analizza e ispeziona i componenti URL nel browser. Scompone qualsiasi URL nelle sue parti.',
	'tool.web-url-parser.operation': 'Analizza',

	'tool.web-user-agent.display_name': 'Parser User-Agent',
	'tool.web-user-agent.tagline': 'Analizza e decodifica stringhe User-Agent',
	'tool.web-user-agent.description':
		'Analizza le stringhe User-Agent per identificare browser, motore, sistema operativo e tipo di dispositivo. Supporta formati browser moderni e legacy.',
	'tool.web-user-agent.primary_keyword': 'parser user agent',
	'tool.web-user-agent.meta_title': 'Parser User-Agent — fmtly.dev',
	'tool.web-user-agent.meta_description':
		'Analizza le stringhe User-Agent nel browser. Identifica browser, sistema operativo e dispositivo.',
	'tool.web-user-agent.operation': 'Analizza',

	'tool.web-cors.display_name': 'Verifica Header CORS',
	'tool.web-cors.tagline': 'Ispeziona e comprendi gli header CORS',
	'tool.web-cors.description':
		'Cerca e spiega gli header CORS. Comprendi Access-Control-Allow-Origin, credenziali, preflight e altre direttive CORS.',
	'tool.web-cors.primary_keyword': 'verifica header cors',
	'tool.web-cors.meta_title': 'Verifica Header CORS — fmtly.dev',
	'tool.web-cors.meta_description':
		'Ispeziona gli header CORS nel browser. Comprendi tutte le direttive Access-Control.',
	'tool.web-cors.operation': 'Verifica',

	'tool.web-mime-types.display_name': 'Ricerca Tipi MIME',
	'tool.web-mime-types.tagline': 'Cerca tipi MIME per estensione o nome',
	'tool.web-mime-types.description':
		'Cerca tipi MIME per estensione file, nome o tipo di contenuto. Copre tutti i tipi MIME registrati IANA con esempi.',
	'tool.web-mime-types.primary_keyword': 'ricerca tipi mime',
	'tool.web-mime-types.meta_title': 'Ricerca Tipi MIME — fmtly.dev',
	'tool.web-mime-types.meta_description': 'Cerca tipi MIME per estensione file nel browser.',
	'tool.web-mime-types.operation': 'Cerca',

	'tool.web-ip-lookup.display_name': 'Ricerca IP',
	'tool.web-ip-lookup.tagline': 'Cerca geolocalizzazione e informazioni per indirizzi IP',
	'tool.web-ip-lookup.description':
		'Cerca geolocalizzazione, ASN e informazioni sul provider per qualsiasi indirizzo IP. Supporta indirizzi IPv4 e IPv6.',
	'tool.web-ip-lookup.primary_keyword': 'ricerca ip',
	'tool.web-ip-lookup.meta_title': 'Ricerca IP — fmtly.dev',
	'tool.web-ip-lookup.meta_description':
		'Cerca geolocalizzazione e informazioni sul provider per indirizzi IP nel browser.',
	'tool.web-ip-lookup.operation': 'Cerca',

	'tool.web-dns-lookup.display_name': 'Ricerca DNS',
	'tool.web-dns-lookup.tagline': 'Interroga record DNS per qualsiasi dominio',
	'tool.web-dns-lookup.description':
		'Interroga record DNS di tipo A, AAAA, MX, TXT, CNAME, NS e altri per qualsiasi dominio. Usa il DNS over HTTPS del browser.',
	'tool.web-dns-lookup.primary_keyword': 'ricerca dns',
	'tool.web-dns-lookup.meta_title': 'Ricerca DNS — fmtly.dev',
	'tool.web-dns-lookup.meta_description': 'Interroga record DNS per qualsiasi dominio nel browser.',
	'tool.web-dns-lookup.operation': 'Cerca',

	// ── UI strings ────────────────────────────────────────────────────────────
	'ui.actions.choose_sample': 'Scegli…',
	'ui.actions.clear': 'Cancella',
	'ui.actions.copied': 'Copiato',
	'ui.actions.copy': 'Copia',
	'ui.actions.copy_all': 'Copia tutto',
	'ui.actions.download': 'Scarica',
	'ui.actions.fetch': 'Recupera',
	'ui.actions.format': 'Formatta',
	'ui.actions.load_url': 'Carica URL',
	'ui.actions.minify': 'Minifica',
	'ui.actions.run': 'Esegui',
	'ui.actions.running': 'Esecuzione…',
	'ui.actions.sample': 'Esempio',
	'ui.actions.search': 'Cerca',
	'ui.actions.share': 'Condividi',
	'ui.actions.upload': 'Carica',
	'ui.actions.validate': 'Valida',
	'ui.confirm.clear': 'Cancellare l\x27input {language} corrente?',
	'ui.drop_files': 'Rilascia file .{extension}',
	'ui.drop_to_load': 'Rilascia per caricare',
	'ui.history.clear_all': 'Cancella Cronologia',
	'ui.history.clear_confirm': 'Cancellare tutta la cronologia?',
	'ui.history.empty': 'Ancora nessuna cronologia',
	'ui.history.recent': 'Usati di recente',
	'ui.history.title': 'Cronologia',
	'ui.paste_here': 'Incolla {language} qui…',
	'ui.placeholder.search_tools_count': 'Cerca {count}+ strumenti...',
	'ui.placeholder.url': 'https://example.com/data.json',
	'ui.placeholder.xpath': '//book[@available=\x27true\x27]',
	'ui.related_categories': 'Categorie correlate',
	'ui.stats.info': '{encoding} · {size} · {lines} righe · profondità: {depth}',
	'ui.toast.copy_error': 'Copia fallita — controlla i permessi del browser',
	'ui.toast.copy_success': 'Copiato negli appunti',
	'ui.toast.file_loaded': 'File caricato: {name}',
	'ui.toast.input_cleared': 'Input cancellato',
	'ui.toast.url_error': 'Impossibile recuperare — prova a incollare direttamente',
	'ui.toast.url_loaded': 'Caricato {language} da URL',
	'ui.tool_count.one': '1 strumento',
	'ui.tool_count.other': '{count} strumenti',
	'ui.tree.collapse': 'Comprimi',
	'ui.tree.expand': 'Espandi',
	'ui.tree.root': 'Albero',
	'ui.tree.summary': '{keyCount} chiavi · {valueCount} valori · profondità {maxDepth}',
	'ui.validity.empty': 'Vuoto',
	'ui.validity.error_at': 'Riga {line}, Col {column}: {message}',
	'ui.validity.invalid': '{language} non valido',
	'ui.validity.valid': '{language} valido',
	'ui.xpath.no_results':
		'Nessun risultato. Prova un\x27espressione diversa o controlla la struttura XML.',
	'ui.xpath.placeholder':
		'Incolla XML nel pannello a sinistra, quindi esegui un\x27espressione XPath.',
	'ui.xpath.results_count.one': '1 risultato',
	'ui.xpath.results_count.other': '{count} risultati'
};

export default registryIt;

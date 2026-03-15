const registryIt: Record<string, string> = {
	// ── Categorie ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'Formatta, valida, minimizza, confronta e converti dati JSON. Ogni strumento viene eseguito nel tuo browser con rilevamento errori in tempo reale e visualizzazione albero.',
	'category.json.primary_keyword': 'strumenti json',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		'Formatta, valida e converti documenti XML. Supporta la formattazione elegante con indentazione configurabile e conversione a JSON o CSV.',
	'category.xml.primary_keyword': 'strumenti xml',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'Formatta, valida e converti file YAML. Conversione bidirezionale con JSON e validazione della sintassi con posizioni errori precise.',
	'category.yaml.primary_keyword': 'strumenti yaml',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'Analizza, formatta e converti dati CSV. Converti tra CSV, JSON e altri formati tabulari con supporto delimitatore personalizzato.',
	'category.csv.primary_keyword': 'strumenti csv',
	'category.css.display_name': 'CSS',
	'category.css.description':
		'Formatta, minimizza e ottimizza fogli di stile CSS. Formatta CSS compresso o minimizza CSS formattato con opzioni di ordinamento proprietà.',
	'category.css.primary_keyword': 'strumenti css',
	'category.html.display_name': 'HTML',
	'category.html.description':
		'Formatta, minimizza e valida il markup HTML. Formatta HTML compresso o rimuovi spazi per la produzione.',
	'category.html.primary_keyword': 'strumenti html',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'Formatta e minimizza il codice JavaScript. Formatta script compressi o produci output minimizzato per caricamenti pagina più veloci.',
	'category.js.primary_keyword': 'strumenti javascript',
	'category.encode.display_name': 'Encoder e Decoder',
	'category.encode.description':
		'Codifica e decodifica Base64, URL, entità HTML e altro. Tutte le operazioni vengono eseguite istantaneamente nel tuo browser — nessun dato inviato a server.',
	'category.encode.primary_keyword': 'strumenti encoder decoder',
	'category.escape.display_name': 'Strumenti Escape',
	'category.escape.description':
		'Escape e unescape stringhe per JSON, HTML, XML, URL e regex. Gestisci in sicurezza i caratteri speciali tra i formati.',
	'category.escape.primary_keyword': 'strumenti escape stringhe',
	'category.diff.display_name': 'Diff e Confronto',
	'category.diff.description':
		'Confronta due file o strutture dati fianco a fianco. Evidenzia aggiunte e eliminazioni con supporto JSON, testo e diff strutturato.',
	'category.diff.primary_keyword': 'strumenti diff confronto',
	'category.generate.display_name': 'Generatori',
	'category.generate.description':
		'Genera definizioni di tipo, JSON Schema, tabelle Markdown, dati test mock e altri servizi per sviluppatori interamente nel tuo browser.',
	'category.generate.primary_keyword': 'generatori di codice',
	'category.text.display_name': 'Testo e Stringhe',
	'category.text.description':
		'Formatta, manipola, inverti, ordina e analizza testo e stringhe. Include contatori di parole, punteggi di leggibilità e conversioni markdown.',
	'category.text.primary_keyword': 'strumenti testo',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formatta, valida e converti file TOML. Converti TOML a JSON e YAML in sicurezza.',
	'category.toml.primary_keyword': 'strumenti toml',
	'category.number.display_name': 'Numeri e Matematica',
	'category.number.description':
		'Formatta numeri, calcola percentuali, utilizza notazione scientifica e converti valori tra sistemi numerici istantaneamente.',
	'category.number.primary_keyword': 'strumenti numeri',
	'category.color.display_name': 'Strumenti Colore',
	'category.color.description':
		'Verifica rapporti di contrasto, costruisci palette di colori, genera gradienti CSS e simula daltonismo.',
	'category.color.primary_keyword': 'strumenti colore',
	'category.crypto.display_name': 'Cripto e Sicurezza',
	'category.crypto.description':
		'Genera firme HMAC, analizza la forza della password, produci stringhe casuali sicure e genera ULID — tutto lato client usando Web Crypto API.',
	'category.crypto.primary_keyword': 'strumenti cripto sicurezza',
	'category.web.display_name': 'Web e Rete',
	'category.web.description':
		'Analizza URL, decodifica stringhe User-Agent, ispeziona header CORS, cerca tipi MIME, individua geolocalizzazione IP e interroga record DNS.',
	'category.web.primary_keyword': 'strumenti web online',
	'category.code.display_name': 'Formattatori di Codice',
	'category.code.description':
		'Formatta CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL e Markdown interamente localmente. Converti comandi cURL in fetch() o Axios.',
	'category.code.primary_keyword': 'formattatore codice online',
	'category.pdf.display_name': 'Strumenti PDF',
	'category.pdf.description':
		'Visualizza file PDF ed estrai testo — tutto localmente nel tuo browser.',
	'category.pdf.primary_keyword': 'strumenti pdf online',
	'category.image.display_name': 'Strumenti Immagine',
	'category.image.description':
		'Ridimensiona, converti, comprimi e codifica immagini — tutto localmente nel tuo browser. Nessun caricamento, nessun server.',
	'category.image.primary_keyword': 'strumenti immagine online',
	'category.file.display_name': 'Strumenti File',
	'category.file.description': 'Calcola hash di file ed esegui conversioni di formato tra file.',
	'category.file.primary_keyword': 'strumenti file online',
	'category.qr.display_name': 'QR e Codice a Barre',
	'category.qr.description':
		'Genera codici QR personalizzabili e decodifica codici QR da immagini — tutto localmente nel tuo browser.',
	'category.qr.primary_keyword': 'generatore codice qr',
	'category.accessibility.display_name': 'Accessibilità',
	'category.accessibility.description':
		'Testa il contrasto dei colori, simula il daltonismo e verifica i requisiti WCAG della dimensione del carattere. Assicura che i tuoi design siano accessibili a tutti.',
	'category.accessibility.primary_keyword': 'strumenti accessibilità',

	// ── Strumenti JSON ──────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'Formattatore JSON',
	'tool.json-formatter.tagline': 'Formatta e abbellisci JSON con indentazione configurabile',
	'tool.json-formatter.description':
		'Analizza e visualizza JSON con indentazione configurabile — 2 spazi, 4 spazi o tabulazioni. Analisi in tempo reale con posizioni errori precise e vista albero opzionale.',
	'tool.json-formatter.primary_keyword': 'formattatore json',
	'tool.json-formatter.meta_title': 'Formattatore e Abbellitore JSON — fmtly.dev',
	'tool.json-formatter.meta_description':
		'Formatta e abbellisci JSON istantaneamente nel tuo browser. Indentazione configurabile, rilevamento errori in tempo reale e vista albero. Nessun dato lascia il tuo dispositivo.',
	'tool.json-formatter.operation': 'Formatta',

	'tool.json-validator.display_name': 'Validatore JSON',
	'tool.json-validator.tagline': 'Valida sintassi e struttura JSON',
	'tool.json-validator.description':
		'Controlla la sintassi JSON in tempo reale. Identifica istantaneamente parentesi mancanti, stringhe non terminate e chiavi duplicate. Supporta commenti JSON5 e virgole finali.',
	'tool.json-validator.primary_keyword': 'validatore json',
	'tool.json-validator.meta_title': 'Validatore JSON — fmtly.dev',
	'tool.json-validator.meta_description':
		'Valida JSON nel tuo browser istantaneamente. Rileva errori di sintassi con numeri di riga e colonna precisi. Nessun dato lascia il tuo dispositivo.',
	'tool.json-validator.operation': 'Valida',

	'tool.json-minifier.display_name': 'Minimizzatore JSON',
	'tool.json-minifier.tagline': 'Rimuovi spazi bianchi e comprimi JSON alla dimensione minima',
	'tool.json-minifier.description':
		"Rimuovi tutti gli spazi bianchi da JSON per produrre l'output più piccolo possibile. Valida il JSON prima, quindi rimuove indentazione, newline e spazi.",
	'tool.json-minifier.primary_keyword': 'minimizzatore json',
	'tool.json-minifier.meta_title': 'Minimizzatore JSON — fmtly.dev',
	'tool.json-minifier.meta_description':
		'Minimizza JSON nel tuo browser istantaneamente. Rimuove tutti gli spazi bianchi e produce output compatto. Nessun dato lascia il tuo dispositivo.',
	'tool.json-minifier.operation': 'Minimizza',

	'tool.json-to-yaml.display_name': 'JSON a YAML',
	'tool.json-to-yaml.tagline': 'Converti dati JSON in formato YAML',
	'tool.json-to-yaml.description':
		'Converti JSON a YAML con indentazione e formattazione corrette. Gestisce oggetti annidati, array e tutti i tipi di dati JSON.',
	'tool.json-to-yaml.primary_keyword': 'json a yaml',
	'tool.json-to-yaml.meta_title': 'Convertitore JSON a YAML — fmtly.dev',
	'tool.json-to-yaml.meta_description':
		'Converti JSON a YAML istantaneamente nel tuo browser. Gestisce strutture annidate e tutti i tipi di dati. Nessun caricamento dati.',
	'tool.json-to-yaml.operation': 'Converti',

	'tool.json-to-toml.display_name': 'JSON a TOML',
	'tool.json-to-toml.tagline': 'Converti dati JSON in formato di configurazione TOML',
	'tool.json-to-toml.description':
		'Converti JSON in formato TOML, ideale per file di configurazione. Supporta tabelle annidate e array inline.',
	'tool.json-to-toml.primary_keyword': 'json a toml',
	'tool.json-to-toml.meta_title': 'Convertitore JSON a TOML — fmtly.dev',
	'tool.json-to-toml.meta_description':
		'Converti JSON a TOML istantaneamente nel tuo browser. Gestisce strutture annidate e array. Nessun caricamento dati.',
	'tool.json-to-toml.operation': 'Converti',

	'tool.json-to-markdown.display_name': 'JSON a Tabella Markdown',
	'tool.json-to-markdown.tagline': 'Converti array JSON in tabelle Markdown',
	'tool.json-to-markdown.description':
		'Converti array JSON di oggetti in tabelle Markdown formattate. Rileva automaticamente le intestazioni di colonna dalle chiavi di oggetto.',
	'tool.json-to-markdown.primary_keyword': 'json a tabella markdown',
	'tool.json-to-markdown.meta_title': 'Convertitore JSON a Tabella Markdown — fmtly.dev',
	'tool.json-to-markdown.meta_description':
		'Converti array JSON in tabelle Markdown istantaneamente. Rileva automaticamente intestazioni e formatta dati. Nessun dato lascia il tuo dispositivo.',
	'tool.json-to-markdown.operation': 'Converti',

	'tool.json-to-xml.display_name': 'JSON a XML',
	'tool.json-to-xml.tagline': 'Converti dati JSON in formato XML',
	'tool.json-to-xml.description':
		'Converti oggetti e array JSON in XML ben formato. Gestisce strutture annidate e nomi di elementi radice configurabili.',
	'tool.json-to-xml.primary_keyword': 'json a xml',
	'tool.json-to-xml.meta_title': 'Convertitore JSON a XML — fmtly.dev',
	'tool.json-to-xml.meta_description':
		'Converti JSON a XML istantaneamente nel tuo browser. Produce XML ben formato. Nessun caricamento dati.',
	'tool.json-to-xml.operation': 'Converti',

	'tool.json-to-csv.display_name': 'JSON a CSV',
	'tool.json-to-csv.tagline': 'Converti array JSON in formato CSV',
	'tool.json-to-csv.description':
		'Converti array JSON di oggetti in formato CSV. Estrae automaticamente le intestazioni di colonna dalle chiavi di oggetto.',
	'tool.json-to-csv.primary_keyword': 'json a csv',
	'tool.json-to-csv.meta_title': 'Convertitore JSON a CSV — fmtly.dev',
	'tool.json-to-csv.meta_description':
		'Converti array JSON a CSV istantaneamente nel tuo browser. Rileva automaticamente intestazioni. Nessun caricamento dati.',
	'tool.json-to-csv.operation': 'Converti',

	'tool.json-jsonpath.display_name': 'Query JSONPath',
	'tool.json-jsonpath.tagline': 'Interroga dati JSON con espressioni JSONPath',
	'tool.json-jsonpath.description':
		'Esegui espressioni JSONPath su dati JSON per estrarre valori specifici. Supporta filtri, caratteri jolly, discesa ricorsiva e tutti gli operatori JSONPath standard.',
	'tool.json-jsonpath.primary_keyword': 'query jsonpath',
	'tool.json-jsonpath.meta_title': 'Strumento Query JSONPath — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'Interroga dati JSON con espressioni JSONPath nel tuo browser. Supporta tutti gli operatori. Nessun caricamento dati.',
	'tool.json-jsonpath.operation': 'Query',

	'tool.json-jmespath.display_name': 'Query JMESPath',
	'tool.json-jmespath.tagline': 'Interroga e trasforma JSON con espressioni JMESPath',
	'tool.json-jmespath.description':
		'Esegui espressioni JMESPath su dati JSON per interrogarli e trasformarli. Supporta proiezioni, filtri, multiselezione e tutte le funzioni JMESPath.',
	'tool.json-jmespath.primary_keyword': 'query jmespath',
	'tool.json-jmespath.meta_title': 'Strumento Query JMESPath — fmtly.dev',
	'tool.json-jmespath.meta_description':
		'Interroga e trasforma JSON con JMESPath nel tuo browser. Supporta tutti gli operatori e le funzioni. Nessun caricamento dati.',
	'tool.json-jmespath.operation': 'Query',

	// ── Strumenti XML ───────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'Formattatore XML',
	'tool.xml-formatter.tagline': 'Abbellisci e indenta XML con spaziatura configurabile',
	'tool.xml-formatter.description':
		'Formatta e indenta documenti XML con 2 spazi, 4 spazi o tabulazioni. Valida la struttura XML ed evidenzia errori con numeri di riga precisi.',
	'tool.xml-formatter.primary_keyword': 'formattatore xml',
	'tool.xml-formatter.meta_title': 'Formattatore e Abbellitore XML — fmtly.dev',
	'tool.xml-formatter.meta_description':
		'Formatta e abbellisci XML nel tuo browser. Indentazione configurabile e validazione in tempo reale. Nessun dato lascia il tuo dispositivo.',
	'tool.xml-formatter.operation': 'Formatta',

	'tool.xml-validator.display_name': 'Validatore XML',
	'tool.xml-validator.tagline': 'Valida sintassi XML e ben-formazione',
	'tool.xml-validator.description':
		'Valida XML secondo le regole di ben-formazione. Identifica tag non chiusi, attributi malformati e caratteri non validi con posizioni errori precise.',
	'tool.xml-validator.primary_keyword': 'validatore xml',
	'tool.xml-validator.meta_title': 'Validatore XML — fmtly.dev',
	'tool.xml-validator.meta_description':
		'Valida XML nel tuo browser. Rileva errori di sintassi con numeri di riga e colonna. Nessun dato lascia il tuo dispositivo.',
	'tool.xml-validator.operation': 'Valida',

	'tool.xml-to-json.display_name': 'XML a JSON',
	'tool.xml-to-json.tagline': 'Converti documenti XML in formato JSON',
	'tool.xml-to-json.description':
		'Converti XML a JSON con mappatura automatica di attributi ed elementi. Gestisce namespace, sezioni CDATA e strutture XML annidate.',
	'tool.xml-to-json.primary_keyword': 'xml a json',
	'tool.xml-to-json.meta_title': 'Convertitore XML a JSON — fmtly.dev',
	'tool.xml-to-json.meta_description':
		'Converti XML a JSON istantaneamente nel tuo browser. Gestisce attributi e strutture annidate. Nessun caricamento dati.',
	'tool.xml-to-json.operation': 'Converti',

	'tool.xml-to-yaml.display_name': 'XML a YAML',
	'tool.xml-to-yaml.tagline': 'Converti documenti XML in formato YAML',
	'tool.xml-to-yaml.description':
		'Converti XML a formato YAML con indentazione corretta. Gestisce attributi, contenuto testo ed elementi XML annidati.',
	'tool.xml-to-yaml.primary_keyword': 'xml a yaml',
	'tool.xml-to-yaml.meta_title': 'Convertitore XML a YAML — fmtly.dev',
	'tool.xml-to-yaml.meta_description':
		'Converti XML a YAML istantaneamente nel tuo browser. Gestisce attributi ed elementi annidati. Nessun caricamento dati.',
	'tool.xml-to-yaml.operation': 'Converti',

	'tool.xml-to-csv.display_name': 'XML a CSV',
	'tool.xml-to-csv.tagline': 'Converti record XML in formato CSV',
	'tool.xml-to-csv.description':
		'Estrai elementi XML ripetenti in righe CSV. Rileva automaticamente le intestazioni di colonna dai nomi di elementi e attributi.',
	'tool.xml-to-csv.primary_keyword': 'xml a csv',
	'tool.xml-to-csv.meta_title': 'Convertitore XML a CSV — fmtly.dev',
	'tool.xml-to-csv.meta_description':
		'Converti XML a CSV istantaneamente nel tuo browser. Rileva automaticamente intestazioni da nomi di elementi. Nessun caricamento dati.',
	'tool.xml-to-csv.operation': 'Converti',

	'tool.xml-minifier.display_name': 'Minimizzatore XML',
	'tool.xml-minifier.tagline': 'Rimuovi spazi bianchi e comprimi XML',
	'tool.xml-minifier.description':
		'Rimuovi tutti gli spazi bianchi e commenti da XML per produrre output compatto. Valida XML prima, quindi minimizza per ridurre la dimensione del file.',
	'tool.xml-minifier.primary_keyword': 'minimizzatore xml',
	'tool.xml-minifier.meta_title': 'Minimizzatore XML — fmtly.dev',
	'tool.xml-minifier.meta_description':
		'Minimizza XML nel tuo browser istantaneamente. Rimuove spazi bianchi e commenti. Nessun dato lascia il tuo dispositivo.',
	'tool.xml-minifier.operation': 'Minimizza',

	'tool.xml-xpath.display_name': 'Query XPath',
	'tool.xml-xpath.tagline': 'Interroga dati XML con espressioni XPath',
	'tool.xml-xpath.description':
		'Esegui espressioni XPath 1.0 su documenti XML. Supporta selezione di elementi, filtri di attributi e tutti gli assi XPath standard e funzioni.',
	'tool.xml-xpath.primary_keyword': 'query xpath',
	'tool.xml-xpath.meta_title': 'Strumento Query XPath — fmtly.dev',
	'tool.xml-xpath.meta_description':
		'Interroga XML con espressioni XPath nel tuo browser. Supporta tutti gli operatori XPath 1.0. Nessun caricamento dati.',
	'tool.xml-xpath.operation': 'Query',

	'tool.xml-diff.display_name': 'Diff XML',
	'tool.xml-diff.tagline': 'Confronta documenti XML e visualizza le differenze',
	'tool.xml-diff.description':
		'Confronta due documenti XML affiancati e evidenzia le differenze. Mostra elementi aggiunti, rimossi e modificati con numeri di riga precisi e visualizzazione diff aware del XML.',
	'tool.xml-diff.primary_keyword': 'diff xml',
	'tool.xml-diff.meta_title': 'Strumento Diff XML — fmtly.dev',
	'tool.xml-diff.meta_description':
		'Confronta file XML e visualizza le differenze nel tuo browser. Mostra cambiamenti a livello di elemento con numeri di riga. Nessun caricamento dati.',
	'tool.xml-diff.operation': 'Diff',
	'tool.xml-diff.faq.0.question': 'In cosa XML Diff è diverso da un diff testuale?',
	'tool.xml-diff.faq.0.answer':
		'XML Diff valida prima entrambi gli input come XML e poi li confronta riga per riga con una normalizzazione degli spazi adatta a XML. Per questo è più adatto ai documenti XML rispetto a un semplice confronto testuale.',
	'tool.xml-diff.faq.1.question': 'Posso confrontare XML non valido?',
	'tool.xml-diff.faq.1.answer':
		'No. Entrambi i lati devono essere XML valido prima del confronto. Se uno degli input è malformato, lo strumento mostra quale lato deve essere corretto.',
	'tool.xml-diff.faq.2.question': 'Quali tipi di modifiche vengono evidenziati?',
	'tool.xml-diff.faq.2.answer':
		'Lo strumento evidenzia righe XML aggiunte, rimosse e modificate. È utile per cambi di configurazione, revisioni di feed e controlli sul markup.',
	'tool.xml-diff.use_case.0': 'Esaminare le modifiche tra due payload XML di API',
	'tool.xml-diff.use_case.1': 'Confrontare revisioni di sitemap, feed o configurazioni XML',
	'tool.xml-diff.use_case.2': 'Ispezionare modifiche di markup prima del deploy',
	'tool.xml-diff.use_case.3': 'Verificare un output XML generato rispetto a una versione attesa',

	// ── Strumenti YAML ──────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'Formattatore YAML',
	'tool.yaml-formatter.tagline': 'Formatta e abbellisci YAML con indentazione coerente',
	'tool.yaml-formatter.description':
		"Formatta file YAML con indentazione coerente di 2 spazi. Valida la sintassi YAML e normalizza le virgolette, gli anchor e l'ordinamento delle chiavi.",
	'tool.yaml-formatter.primary_keyword': 'formattatore yaml',
	'tool.yaml-formatter.meta_title': 'Formattatore e Abbellitore YAML — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		"Formatta e abbellisci YAML nel tuo browser. Valida la sintassi e normalizza l'indentazione. Nessun dato lascia il tuo dispositivo.",
	'tool.yaml-formatter.operation': 'Formatta',
	'tool.yaml-formatter.faq.0.question': 'Che cosa normalizza il formattatore YAML?',
	'tool.yaml-formatter.faq.0.answer':
		'Uniforma indentazione, spazi, stile delle virgolette e layout generale per rendere il YAML più leggibile senza cambiarne il significato.',
	'tool.yaml-formatter.faq.1.question': 'La formattazione cambia i miei dati YAML?',
	'tool.yaml-formatter.faq.1.answer':
		'No. Migliora la presentazione, non la struttura dei dati. L’obiettivo è ottenere un output più pulito e coerente.',
	'tool.yaml-formatter.use_case.0': 'Abbellire manifest Kubernetes prima della revisione',
	'tool.yaml-formatter.use_case.1': 'Uniformare configurazioni CI per diff più puliti',
	'tool.yaml-formatter.use_case.2': 'Riformattare file Helm values prima del commit',
	'tool.yaml-formatter.use_case.3': 'Rendere più leggibili grandi configurazioni YAML',

	'tool.yaml-minifier.display_name': 'Minificatore YAML',
	'tool.yaml-minifier.tagline': 'Minimizza YAML in un output compatto e valido',
	'tool.yaml-minifier.description':
		'Minimizza documenti YAML in una rappresentazione compatta in flow style. Supporta YAML multi-documento e conserva la stessa struttura dati riducendo il rumore visivo.',
	'tool.yaml-minifier.primary_keyword': 'minificatore yaml',
	'tool.yaml-minifier.meta_title': 'Minificatore YAML — fmtly.dev',
	'tool.yaml-minifier.meta_description':
		'Minimizza YAML nel tuo browser. Supporta YAML multi-documento e output compatto. Nessun dato lascia il tuo dispositivo.',
	'tool.yaml-minifier.operation': 'Minimizza',
	'tool.yaml-minifier.faq.0.question': 'Come funziona la minimizzazione YAML?',
	'tool.yaml-minifier.faq.0.answer':
		'Prima analizza il YAML e poi lo riscrive come YAML valido più compatto. Così riduce il rumore di formattazione senza cambiare i dati.',
	'tool.yaml-minifier.faq.1.question': 'Supporta più documenti YAML?',
	'tool.yaml-minifier.faq.1.answer':
		'Sì. Gli input multi-documento separati da marcatori di documento vengono preservati e minimizzati documento per documento.',
	'tool.yaml-minifier.use_case.0': 'Ridurre YAML prima di condividere snippet in ticket o chat',
	'tool.yaml-minifier.use_case.1': 'Ispezionare manifest multi-documento compatti',
	'tool.yaml-minifier.use_case.2': 'Ridurre spazi prima di salvare fixture YAML generate',
	'tool.yaml-minifier.use_case.3': 'Confrontare affiancati YAML formattato e YAML compatto',

	'tool.yaml-validator.display_name': 'Validatore YAML',
	'tool.yaml-validator.tagline': 'Valida sintassi e schema YAML',
	'tool.yaml-validator.description':
		'Valida la sintassi YAML in tempo reale e controlla i documenti rispetto a uno schema. Rileva problemi di indentazione, strutture malformate e incompatibilità con lo schema con riferimenti di riga.',
	'tool.yaml-validator.primary_keyword': 'validatore yaml',
	'tool.yaml-validator.meta_title': 'Validatore YAML — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Valida sintassi e schema YAML nel browser. Rileva errori del parser e incompatibilità con lo schema con numeri di riga. Nessun dato lascia il tuo dispositivo.',
	'tool.yaml-validator.operation': 'Valida',
	'tool.yaml-validator.faq.0.question': 'Quali errori YAML può rilevare?',
	'tool.yaml-validator.faq.0.answer':
		'Rileva indentazione errata, mappature non valide, sequenze mal posizionate e altri errori del parser. In modalità schema segnala anche percorsi e valori che non soddisfano lo schema.',
	'tool.yaml-validator.faq.1.question': 'Posso validare YAML rispetto a uno schema?',
	'tool.yaml-validator.faq.1.answer':
		'Sì. Passa alla modalità Schema e fornisci un JSON Schema. L’input dello schema può essere scritto in JSON o YAML, utile per manifest, file di configurazione e payload API.',
	'tool.yaml-validator.use_case.0': 'Controllare manifest di deploy prima del rilascio',
	'tool.yaml-validator.use_case.1': 'Validare YAML copiato dalla documentazione',
	'tool.yaml-validator.use_case.2': 'Trovare errori di indentazione in config CI e automazione',
	'tool.yaml-validator.use_case.3': 'Validare Helm values o manifest rispetto a uno schema atteso',

	'tool.yaml-to-json.display_name': 'YAML a JSON',
	'tool.yaml-to-json.tagline': 'Converti YAML in formato JSON',
	'tool.yaml-to-json.description':
		'Converti documenti YAML in JSON formattato. Gestisce anchor, alias, YAML multi-documento e tutti i tipi di dati YAML.',
	'tool.yaml-to-json.primary_keyword': 'yaml a json',
	'tool.yaml-to-json.meta_title': 'Convertitore YAML a JSON — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		'Converti YAML a JSON istantaneamente nel tuo browser. Gestisce anchor, alias e YAML multi-documento. Nessun caricamento dati.',
	'tool.yaml-to-json.operation': 'Converti',
	'tool.yaml-to-json.faq.0.question': 'Quando conviene convertire YAML in JSON?',
	'tool.yaml-to-json.faq.0.answer':
		'Quando API, strumenti JavaScript, test o sistemi a valle si aspettano un formato JSON più rigoroso.',
	'tool.yaml-to-json.faq.1.question': 'Oggetti e array annidati vengono conservati?',
	'tool.yaml-to-json.faq.1.answer':
		'Sì. Mappature e sequenze annidate vengono convertite nei corrispettivi JSON mantenendo la struttura generale.',
	'tool.yaml-to-json.use_case.0': 'Trasformare configurazioni YAML in JSON per payload API',
	'tool.yaml-to-json.use_case.1': 'Ispezionare dati YAML in un formato più rigoroso',
	'tool.yaml-to-json.use_case.2': 'Portare dati di configurazione in workflow JavaScript',
	'tool.yaml-to-json.use_case.3': 'Preparare YAML per strumenti basati su JSON',

	'tool.yaml-to-xml.display_name': 'YAML a XML',
	'tool.yaml-to-xml.tagline': 'Converti YAML in formato XML',
	'tool.yaml-to-xml.description':
		'Converti documenti YAML in XML ben formato. Mappa le chiavi YAML in elementi XML e gestisce strutture annidate e array.',
	'tool.yaml-to-xml.primary_keyword': 'yaml a xml',
	'tool.yaml-to-xml.meta_title': 'Convertitore YAML a XML — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		'Converti YAML a XML istantaneamente nel tuo browser. Nessun caricamento dati.',
	'tool.yaml-to-xml.operation': 'Converti',
	'tool.yaml-to-xml.faq.0.question': 'Come viene mappato YAML in XML durante la conversione?',
	'tool.yaml-to-xml.faq.0.answer':
		'Le chiavi diventano nomi di elemento, gli oggetti annidati diventano elementi annidati e gli array diventano voci ripetute.',
	'tool.yaml-to-xml.faq.1.question': 'Posso usare l’output in altri strumenti XML?',
	'tool.yaml-to-xml.faq.1.answer':
		'Sì. L’output viene generato come XML ben formato, pronto per ulteriore formattazione o validazione.',
	'tool.yaml-to-xml.use_case.0': 'Portare dati YAML in integrazioni basate su XML',
	'tool.yaml-to-xml.use_case.1': 'Generare fixture XML da dati di test YAML',
	'tool.yaml-to-xml.use_case.2': 'Collegare workflow YAML a pipeline XML',
	'tool.yaml-to-xml.use_case.3': 'Preparare contenuti YAML strutturati per export XML',

	'tool.yaml-to-csv.display_name': 'YAML a CSV',
	'tool.yaml-to-csv.tagline': 'Converti array YAML in formato CSV',
	'tool.yaml-to-csv.description':
		'Converti array YAML di oggetti in formato CSV. Estrae intestazioni dalle chiavi di oggetto e formatta i dati in righe.',
	'tool.yaml-to-csv.primary_keyword': 'yaml a csv',
	'tool.yaml-to-csv.meta_title': 'Convertitore YAML a CSV — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		'Converti YAML a CSV istantaneamente nel tuo browser. Nessun caricamento dati.',
	'tool.yaml-to-csv.operation': 'Converti',
	'tool.yaml-to-csv.faq.0.question': 'Quali strutture YAML si convertono meglio in CSV?',
	'tool.yaml-to-csv.faq.0.answer':
		'Gli array di oggetti danno il risultato migliore. Ogni oggetto diventa una riga e le chiavi comuni diventano colonne CSV.',
	'tool.yaml-to-csv.faq.1.question': 'Si può convertire un singolo oggetto YAML in CSV?',
	'tool.yaml-to-csv.faq.1.answer':
		'Sì. Un singolo oggetto può essere esportato come una singola riga CSV, utile per record semplici.',
	'tool.yaml-to-csv.use_case.0': 'Esportare record YAML in fogli di calcolo',
	'tool.yaml-to-csv.use_case.1': 'Convertire dataset YAML strutturati per analisti',
	'tool.yaml-to-csv.use_case.2': 'Appiattire liste di inventario o configurazione in tabelle',
	'tool.yaml-to-csv.use_case.3':
		'Preparare YAML per strumenti di importazione che si aspettano CSV',

	'tool.yaml-to-toml.display_name': 'YAML a TOML',
	'tool.yaml-to-toml.tagline': 'Converti YAML in formato di configurazione TOML',
	'tool.yaml-to-toml.description':
		'Converti file di configurazione YAML in formato TOML. Gestisce tabelle annidate, array e tutti i tipi di dati YAML.',
	'tool.yaml-to-toml.primary_keyword': 'yaml a toml',
	'tool.yaml-to-toml.meta_title': 'Convertitore YAML a TOML — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		'Converti YAML a TOML istantaneamente nel tuo browser. Nessun caricamento dati.',
	'tool.yaml-to-toml.operation': 'Converti',
	'tool.yaml-to-toml.faq.0.question': 'Perché convertire YAML in TOML?',
	'tool.yaml-to-toml.faq.0.answer':
		'TOML è spesso preferito per file di configurazione modificati a mano. Se un progetto si aspetta TOML, la conversione fa risparmiare tempo.',
	'tool.yaml-to-toml.faq.1.question': 'Le sezioni di configurazione annidate vengono conservate?',
	'tool.yaml-to-toml.faq.1.answer':
		'Sì. Le mappature annidate vengono convertite in tabelle e array TOML quando il formato lo consente.',
	'tool.yaml-to-toml.use_case.0': 'Spostare impostazioni YAML in progetti basati su TOML',
	'tool.yaml-to-toml.use_case.1': 'Generare configurazioni TOML da sorgenti YAML',
	'tool.yaml-to-toml.use_case.2':
		'Portare impostazioni di deploy in strumenti compatibili con TOML',
	'tool.yaml-to-toml.use_case.3': 'Confrontare la stessa configurazione in YAML e TOML',

	'tool.yaml-diff.display_name': 'Diff YAML',
	'tool.yaml-diff.tagline': 'Confronta due documenti YAML fianco a fianco',
	'tool.yaml-diff.description':
		'Confronta due documenti YAML ed evidenzia aggiunte, eliminazioni e modifiche. Comprende la struttura YAML per un confronto semantico.',
	'tool.yaml-diff.primary_keyword': 'diff yaml',
	'tool.yaml-diff.meta_title': 'Strumento Diff YAML — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'Confronta due documenti YAML nel tuo browser. Evidenzia tutte le aggiunte, eliminazioni e modifiche. Nessun caricamento dati.',
	'tool.yaml-diff.operation': 'Confronta',
	'tool.yaml-diff.faq.0.question': 'In cosa YAML Diff è diverso da un normale diff testuale?',
	'tool.yaml-diff.faq.0.answer':
		'Prima analizza entrambi gli input come dati YAML e poi confronta la struttura risultante. In questo modo rileva cambiamenti per chiavi, array e valori, non solo per formattazione.',
	'tool.yaml-diff.faq.1.question': 'Posso confrontare YAML non valido?',
	'tool.yaml-diff.faq.1.answer':
		'No. Entrambi i lati devono essere YAML valido. Prima va corretta la parte malformata.',
	'tool.yaml-diff.faq.2.question': 'Quali cambiamenti vengono evidenziati?',
	'tool.yaml-diff.faq.2.answer':
		'Evidenzia percorsi e valori YAML aggiunti, rimossi e modificati, utile per revisioni di configurazione.',
	'tool.yaml-diff.use_case.0': 'Rivedere modifiche tra due manifest di deploy',
	'tool.yaml-diff.use_case.1': 'Confrontare revisioni di configurazioni CI',
	'tool.yaml-diff.use_case.2': 'Ispezionare file Helm/values modificati prima del commit',
	'tool.yaml-diff.use_case.3': 'Verificare YAML generato rispetto a una versione attesa',
	'tool.yaml-query.display_name': 'Query YAML',
	'tool.yaml-query.tagline': 'Interroga YAML con JSONPath e JMESPath',
	'tool.yaml-query.description':
		'Esegui espressioni JSONPath o JMESPath direttamente su YAML nel browser. Analizza YAML, interroga dati annidati e ispeziona i risultati senza conversioni manuali.',
	'tool.yaml-query.primary_keyword': 'query yaml',
	'tool.yaml-query.meta_title': 'Strumento Query YAML — fmtly.dev',
	'tool.yaml-query.meta_description':
		'Interroga YAML con JSONPath o JMESPath nel browser. Nessuna conversione manuale e nessun caricamento dati.',
	'tool.yaml-query.operation': 'Interroga',
	'tool.yaml-query.faq.0.question': 'Quali linguaggi di query sono supportati?',
	'tool.yaml-query.faq.0.answer':
		'Puoi passare da JSONPath a JMESPath. Entrambi lavorano sul modello dati YAML già analizzato, quindi mappature annidate, sequenze e input multi-documento sono interrogabili direttamente.',
	'tool.yaml-query.faq.1.question': 'Devo prima convertire YAML in JSON?',
	'tool.yaml-query.faq.1.answer':
		'No. Lo strumento analizza YAML per te e restituisce risultati formattati in JSON. È molto utile per configurazioni, manifest, file values e altri flussi basati su YAML.',
	'tool.yaml-query.use_case.0': 'Estrarre campi specifici da manifest Kubernetes o Helm values',
	'tool.yaml-query.use_case.1':
		'Ispezionare configurazioni YAML annidate senza conversione manuale',
	'tool.yaml-query.use_case.2': 'Provare espressioni JSONPath o JMESPath su payload YAML',
	'tool.yaml-query.use_case.3': 'Recuperare liste, id o flag da grandi documenti YAML',

	// ── Strumenti CSV ───────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': 'CSV a JSON',
	'tool.csv-to-json.tagline': 'Converti dati CSV in array JSON',
	'tool.csv-to-json.description':
		'Converti CSV con intestazioni in array JSON di oggetti. Supporta rilevamento tipo dinamico per numeri e booleani e opzioni delimitatore personalizzato.',
	'tool.csv-to-json.primary_keyword': 'csv a json',
	'tool.csv-to-json.meta_title': 'Convertitore CSV a JSON — fmtly.dev',
	'tool.csv-to-json.meta_description':
		'Converti CSV a JSON istantaneamente nel tuo browser. Supporta intestazioni, tipizzazione dinamica e delimitatori personalizzati. Nessun caricamento dati.',
	'tool.csv-to-json.operation': 'Converti',
	'tool.csv-to-json.faq.0.question': 'Posso trattare la prima riga come intestazione?',
	'tool.csv-to-json.faq.0.answer':
		'Sì. I controlli CSV ti permettono di mantenere la prima riga come intestazione oppure convertire tutte le righe come semplici dati di colonna.',
	'tool.csv-to-json.faq.1.question': 'Rileva automaticamente numeri e booleani?',
	'tool.csv-to-json.faq.1.answer':
		'Sì. I valori che sembrano numeri o booleani vengono interpretati automaticamente durante la conversione.',
	'tool.csv-to-json.use_case.0':
		'Trasformare export da fogli di calcolo in payload JSON pronti per API',
	'tool.csv-to-json.use_case.1': 'Ispezionare righe CSV come oggetti strutturati',
	'tool.csv-to-json.use_case.2': 'Normalizzare dati delimitati in JSON adatto al browser',
	'tool.csv-to-json.use_case.3': 'Preparare dataset CSV per flussi successivi basati su JSON',

	'tool.csv-to-xml.display_name': 'CSV a XML',
	'tool.csv-to-xml.tagline': 'Converti dati CSV in formato XML',
	'tool.csv-to-xml.description':
		'Converti file CSV in XML ben formato. Mappa le intestazioni di colonna in nomi di elementi e genera elementi riga per ogni record.',
	'tool.csv-to-xml.primary_keyword': 'csv a xml',
	'tool.csv-to-xml.meta_title': 'Convertitore CSV a XML — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		'Converti CSV a XML istantaneamente nel tuo browser. Mappa intestazioni in nomi di elementi. Nessun caricamento dati.',
	'tool.csv-to-xml.operation': 'Converti',
	'tool.csv-to-xml.faq.0.question': 'Come vengono scelti i nomi degli elementi XML?',
	'tool.csv-to-xml.faq.0.answer':
		'Quando la modalità intestazione è attiva, ogni intestazione CSV diventa un elemento figlio XML all’interno di un nodo riga.',
	'tool.csv-to-xml.use_case.0': 'Convertire export tabellari in fixture XML per sistemi legacy',
	'tool.csv-to-xml.use_case.1':
		'Verificare come le intestazioni CSV si mappano su record XML per riga',

	'tool.csv-to-yaml.display_name': 'CSV a YAML',
	'tool.csv-to-yaml.tagline': 'Converti dati CSV in formato YAML',
	'tool.csv-to-yaml.description':
		'Converti file CSV in array YAML di oggetti. Mappa le intestazioni di colonna in chiavi YAML per ogni riga.',
	'tool.csv-to-yaml.primary_keyword': 'csv a yaml',
	'tool.csv-to-yaml.meta_title': 'Convertitore CSV a YAML — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		'Converti CSV a YAML istantaneamente nel tuo browser. Nessun caricamento dati.',
	'tool.csv-to-yaml.operation': 'Converti',
	'tool.csv-to-yaml.faq.0.question': 'Cosa rappresenta ogni elemento YAML?',
	'tool.csv-to-yaml.faq.0.answer':
		'Ogni riga CSV diventa un oggetto YAML e le intestazioni diventano chiavi quando la modalità intestazione è attiva.',
	'tool.csv-to-yaml.use_case.0': 'Trasformare dati tabellari in liste YAML leggibili',
	'tool.csv-to-yaml.use_case.1':
		'Portare configurazioni guidate da fogli di calcolo in workflow YAML',

	'tool.csv-to-html.display_name': 'CSV a Tabella HTML',
	'tool.csv-to-html.tagline': 'Converti dati CSV in tabella HTML',
	'tool.csv-to-html.description':
		'Converti file CSV in tabelle HTML formattate. Usa la prima riga come intestazioni di colonna.',
	'tool.csv-to-html.primary_keyword': 'csv a tabella html',
	'tool.csv-to-html.meta_title': 'Convertitore CSV a Tabella HTML — fmtly.dev',
	'tool.csv-to-html.meta_description':
		'Converti CSV a tabella HTML istantaneamente nel tuo browser. Nessun caricamento dati.',
	'tool.csv-to-html.operation': 'Converti',
	'tool.csv-to-html.faq.0.question':
		'Posso vedere l’anteprima della tabella prima di copiare l’HTML?',
	'tool.csv-to-html.faq.0.answer':
		'Sì. Il pannello di output offre sia l’anteprima renderizzata sia la vista HTML grezza.',
	'tool.csv-to-html.use_case.0':
		'Generare tabelle HTML per documentazione, tool interni o snippet CMS',
	'tool.csv-to-html.use_case.1':
		'Controllare visivamente la struttura della tabella prima di incorporare il markup',

	'tool.csv-formatter.display_name': 'Formattatore CSV',
	'tool.csv-formatter.tagline': 'Formatta e normalizza dati CSV',
	'tool.csv-formatter.description':
		'Pulisci e formatta dati CSV con delimitatori coerenti, virgolettature e terminazioni di riga. Valida la struttura CSV e normalizza gli spazi bianchi.',
	'tool.csv-formatter.primary_keyword': 'formattatore csv',
	'tool.csv-formatter.meta_title': 'Formattatore CSV — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'Formatta e pulisci dati CSV nel tuo browser. Nessun caricamento dati.',
	'tool.csv-formatter.operation': 'Formatta',
	'tool.csv-formatter.faq.0.question': 'Cosa posso normalizzare durante la formattazione?',
	'tool.csv-formatter.faq.0.answer':
		'Puoi cambiare delimitatore, rifilare spazi nelle celle, mantenere la riga di intestazione, saltare righe vuote e forzare le virgolette su tutte le celle.',
	'tool.csv-formatter.use_case.0':
		'Standardizzare file CSV prima di importarli in database o tool BI',
	'tool.csv-formatter.use_case.1':
		'Pulire export incoerenti da fogli di calcolo senza inviare dati a un server',

	'tool.csv-validator.display_name': 'Validatore CSV',
	'tool.csv-validator.tagline': 'Valida struttura e sintassi CSV',
	'tool.csv-validator.description':
		'Valida file CSV per conteggi di colonna coerenti, virgolettature corrette e problemi di codifica. Identifica righe malformate con numeri di riga precisi.',
	'tool.csv-validator.primary_keyword': 'validatore csv',
	'tool.csv-validator.meta_title': 'Validatore CSV — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Valida CSV nel tuo browser. Rileva errori di struttura con numeri di riga. Nessun dato lascia il tuo dispositivo.',
	'tool.csv-validator.operation': 'Valida',
	'tool.csv-validator.faq.0.question': 'Quali problemi rileva il validatore?',
	'tool.csv-validator.faq.0.answer':
		'Segnala errori del parser, intestazioni vuote o duplicate e righe con un numero di colonne diverso dal resto del file.',
	'tool.csv-validator.use_case.0': 'Individuare CSV malformati prima di importazione o conversione',
	'tool.csv-validator.use_case.1':
		'Verificare coerenza di intestazioni e larghezza righe in dataset condivisi',

	// ── Strumenti Testo ──────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Contatore Parole',
	'tool.text-word-counter.tagline': 'Conta parole, caratteri e frasi in testo',
	'tool.text-word-counter.description':
		'Conta parole, caratteri, frasi e paragrafi in qualsiasi testo. Mostra stime del tempo di lettura e lunghezza media delle parole.',
	'tool.text-word-counter.primary_keyword': 'contatore parole',
	'tool.text-word-counter.meta_title': 'Contatore Parole — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Conta parole, caratteri e frasi nel tuo browser. Include stime del tempo di lettura. Nessun caricamento dati.',
	'tool.text-word-counter.operation': 'Conta',

	'tool.text-readability.display_name': 'Analizzatore Leggibilità',
	'tool.text-readability.tagline': 'Misura i punteggi di leggibilità del testo',
	'tool.text-readability.description':
		'Calcola i punteggi di leggibilità Flesch-Kincaid, Gunning Fog e altri per qualsiasi testo. Aiuta a ottimizzare i contenuti per il tuo pubblico target.',
	'tool.text-readability.primary_keyword': 'analizzatore leggibilità',
	'tool.text-readability.meta_title': 'Analizzatore Leggibilità — fmtly.dev',
	'tool.text-readability.meta_description':
		'Misura la leggibilità del testo nel tuo browser con punteggi Flesch-Kincaid e altri. Nessun caricamento dati.',
	'tool.text-readability.operation': 'Analizza',

	'tool.text-line-sorter.display_name': 'Ordinatore Righe',
	'tool.text-line-sorter.tagline': 'Ordina righe di testo alfabeticamente o per lunghezza',
	'tool.text-line-sorter.description':
		'Ordina le righe alfabeticamente, numericamente o per lunghezza. Supporta ordinamento ascendente e discendente e ordinamento senza distinzione tra maiuscole e minuscole.',
	'tool.text-line-sorter.primary_keyword': 'ordinatore righe',
	'tool.text-line-sorter.meta_title': 'Ordinatore Righe — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Ordina righe di testo nel tuo browser. Supporta ordinamento alfabetico, numerico e per lunghezza. Nessun caricamento dati.',
	'tool.text-line-sorter.operation': 'Ordina',

	'tool.text-deduplicate.display_name': 'Rimozione Righe Duplicate',
	'tool.text-deduplicate.tagline': 'Rimuovi righe duplicate dal testo',
	'tool.text-deduplicate.description':
		"Rimuovi righe duplicate da qualsiasi testo. Supporta corrispondenza sensibile e insensibile ai maiuscoli e preserva l'ordine originale delle righe.",
	'tool.text-deduplicate.primary_keyword': 'rimuovi righe duplicate',
	'tool.text-deduplicate.meta_title': 'Rimozione Righe Duplicate — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Rimuovi righe duplicate dal testo nel tuo browser. Opzioni sensibili e insensibili ai maiuscoli. Nessun caricamento dati.',
	'tool.text-deduplicate.operation': 'Deduplica',

	'tool.text-whitespace.display_name': 'Pulitore Spazi Bianchi',
	'tool.text-whitespace.tagline': 'Rimuovi spazi extra e normalizza la spaziatura',
	'tool.text-whitespace.description':
		'Rimuovi spazi extra, tabulazioni e righe vuote dal testo. Normalizza gli spazi multipli a spazi singoli e taglia gli spazi bianchi iniziali e finali.',
	'tool.text-whitespace.primary_keyword': 'pulitore spazi bianchi',
	'tool.text-whitespace.meta_title': 'Pulitore Spazi Bianchi — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Rimuovi spazi bianchi extra dal testo nel tuo browser. Normalizza la spaziatura e taglia le righe. Nessun caricamento dati.',
	'tool.text-whitespace.operation': 'Pulisci',

	'tool.text-markdown-to-html.display_name': 'Markdown a HTML',
	'tool.text-markdown-to-html.tagline': 'Converti Markdown in HTML',
	'tool.text-markdown-to-html.description':
		'Converti testo Markdown in HTML. Supporta intestazioni, elenchi, tabelle, blocchi di codice, link, immagini e tutte le funzioni CommonMark.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown a html',
	'tool.text-markdown-to-html.meta_title': 'Convertitore Markdown a HTML — fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Converti Markdown a HTML istantaneamente nel tuo browser. Supporta tutte le funzioni CommonMark. Nessun caricamento dati.',
	'tool.text-markdown-to-html.operation': 'Converti',

	'tool.text-html-to-markdown.display_name': 'HTML a Markdown',
	'tool.text-html-to-markdown.tagline': 'Converti HTML in Markdown',
	'tool.text-html-to-markdown.description':
		'Converti HTML in Markdown pulito. Gestisce intestazioni, paragrafi, elenchi, tabelle, blocchi di codice e formattazione inline.',
	'tool.text-html-to-markdown.primary_keyword': 'html a markdown',
	'tool.text-html-to-markdown.meta_title': 'Convertitore HTML a Markdown — fmtly.dev',
	'tool.text-html-to-markdown.meta_description':
		'Converti HTML a Markdown istantaneamente nel tuo browser. Nessun caricamento dati.',
	'tool.text-html-to-markdown.operation': 'Converti',

	'tool.text-reverser.display_name': 'Reversore Testo',
	'tool.text-reverser.tagline': 'Inverti testo, parole o righe',
	'tool.text-reverser.description':
		'Inverti testo carattere per carattere, parola per parola o riga per riga. Bidirezionale — incolla in entrambe le direzioni.',
	'tool.text-reverser.primary_keyword': 'reversore testo',
	'tool.text-reverser.meta_title': 'Reversore Testo — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Inverti testo istantaneamente nel tuo browser. Inverti caratteri, parole o righe. Nessun caricamento dati.',
	'tool.text-reverser.operation': 'Inverti',

	// ── Strumenti Codice ────────────────────────────────────────────────────
	'tool.code-css.display_name': 'Formattatore CSS',
	'tool.code-css.tagline': 'Formatta e abbellisci fogli di stile CSS',
	'tool.code-css.description':
		'Formatta CSS con indentazione coerente e ordinamento proprietà. Supporta formattazione in stile Prettier con larghezza linea configurabile.',
	'tool.code-css.primary_keyword': 'formattatore css',
	'tool.code-css.meta_title': 'Formattatore e Abbellitore CSS — fmtly.dev',
	'tool.code-css.meta_description':
		'Formatta e abbellisci CSS nel tuo browser. Indentazione e ordinamento proprietà configurabili. Nessun dato lascia il tuo dispositivo.',
	'tool.code-css.operation': 'Formatta',

	'tool.code-scss.display_name': 'Formattatore SCSS',
	'tool.code-scss.tagline': 'Formatta e abbellisci fogli di stile SCSS',
	'tool.code-scss.description':
		'Formatta file SCSS con indentazione coerente. Supporta variabili, regole annidate, mixin e tutta la sintassi specifica di SCSS.',
	'tool.code-scss.primary_keyword': 'formattatore scss',
	'tool.code-scss.meta_title': 'Formattatore e Abbellitore SCSS — fmtly.dev',
	'tool.code-scss.meta_description':
		'Formatta e abbellisci SCSS nel tuo browser. Nessun dato lascia il tuo dispositivo.',
	'tool.code-scss.operation': 'Formatta',

	'tool.code-less.display_name': 'Formattatore LESS',
	'tool.code-less.tagline': 'Formatta e abbellisci fogli di stile LESS',
	'tool.code-less.description':
		'Formatta file LESS con indentazione coerente. Supporta variabili, mixin, annidamento e tutta la sintassi specifica di LESS.',
	'tool.code-less.primary_keyword': 'formattatore less',
	'tool.code-less.meta_title': 'Formattatore e Abbellitore LESS — fmtly.dev',
	'tool.code-less.meta_description':
		'Formatta e abbellisci LESS nel tuo browser. Nessun dato lascia il tuo dispositivo.',
	'tool.code-less.operation': 'Formatta',

	'tool.code-html.display_name': 'Formattatore HTML',
	'tool.code-html.tagline': 'Formatta e abbellisci markup HTML',
	'tool.code-html.description':
		'Formatta HTML con indentazione corretta e annidamento tag. Gestisce elementi inline e block, attributi e CSS e JavaScript incorporati.',
	'tool.code-html.primary_keyword': 'formattatore html',
	'tool.code-html.meta_title': 'Formattatore e Abbellitore HTML — fmtly.dev',
	'tool.code-html.meta_description':
		'Formatta e abbellisci HTML nel tuo browser. Indentazione corretta e annidamento tag. Nessun dato lascia il tuo dispositivo.',
	'tool.code-html.operation': 'Formatta',

	'tool.code-javascript.display_name': 'Formattatore JavaScript',
	'tool.code-javascript.tagline': 'Formatta e abbellisci codice JavaScript',
	'tool.code-javascript.description':
		'Formatta JavaScript con formattazione in stile Prettier. Supporta ES2022+, JSX, sintassi modulo e opzioni configurabili come punto e virgola e virgolette singole.',
	'tool.code-javascript.primary_keyword': 'formattatore javascript',
	'tool.code-javascript.meta_title': 'Formattatore e Abbellitore JavaScript — fmtly.dev',
	'tool.code-javascript.meta_description':
		'Formatta e abbellisci JavaScript nel tuo browser. Supporta sintassi ES moderna. Nessun dato lascia il tuo dispositivo.',
	'tool.code-javascript.operation': 'Formatta',

	'tool.code-typescript.display_name': 'Formattatore TypeScript',
	'tool.code-typescript.tagline': 'Formatta e abbellisci codice TypeScript',
	'tool.code-typescript.description':
		'Formatta TypeScript con formattazione in stile Prettier. Supporta tutte le funzioni TypeScript inclusi generics, decoratori e annotazioni di tipo.',
	'tool.code-typescript.primary_keyword': 'formattatore typescript',
	'tool.code-typescript.meta_title': 'Formattatore e Abbellitore TypeScript — fmtly.dev',
	'tool.code-typescript.meta_description':
		'Formatta e abbellisci TypeScript nel tuo browser. Supporta tutta la sintassi TypeScript. Nessun dato lascia il tuo dispositivo.',
	'tool.code-typescript.operation': 'Formatta',

	'tool.code-graphql.display_name': 'Formattatore GraphQL',
	'tool.code-graphql.tagline': 'Formatta e abbellisci schemi e query GraphQL',
	'tool.code-graphql.description':
		'Formatta schemi e query GraphQL con indentazione coerente. Supporta SDL, query, mutazioni, sottoscrizioni e frammenti.',
	'tool.code-graphql.primary_keyword': 'formattatore graphql',
	'tool.code-graphql.meta_title': 'Formattatore e Abbellitore GraphQL — fmtly.dev',
	'tool.code-graphql.meta_description':
		'Formatta e abbellisci GraphQL nel tuo browser. Supporta SDL, query e mutazioni. Nessun dato lascia il tuo dispositivo.',
	'tool.code-graphql.operation': 'Formatta',

	'tool.code-markdown.display_name': 'Formattatore Markdown',
	'tool.code-markdown.tagline': 'Formatta e normalizza documenti Markdown',
	'tool.code-markdown.description':
		'Formatta Markdown con stili di intestazione coerenti, indentazione elenco e allineamento tabella. Normalizza gli spazi bianchi e le righe vuote.',
	'tool.code-markdown.primary_keyword': 'formattatore markdown',
	'tool.code-markdown.meta_title': 'Formattatore Markdown — fmtly.dev',
	'tool.code-markdown.meta_description':
		'Formatta e normalizza Markdown nel tuo browser. Nessun dato lascia il tuo dispositivo.',
	'tool.code-markdown.operation': 'Formatta',

	'tool.code-curl-to-fetch.display_name': 'cURL a Fetch',
	'tool.code-curl-to-fetch.tagline': 'Converti comandi cURL in JavaScript fetch()',
	'tool.code-curl-to-fetch.description':
		'Converti comandi cURL in chiamate fetch() JavaScript native. Gestisce header, corpo richiesta, autenticazione e tutte le opzioni cURL comuni.',
	'tool.code-curl-to-fetch.primary_keyword': 'convertitore curl a fetch',
	'tool.code-curl-to-fetch.meta_title': 'Convertitore cURL a Fetch — fmtly.dev',
	'tool.code-curl-to-fetch.meta_description':
		'Converti comandi cURL in JavaScript fetch() nel tuo browser. Gestisce header, corpo e autenticazione. Nessun caricamento dati.',
	'tool.code-curl-to-fetch.operation': 'Converti',

	'tool.code-curl-to-axios.display_name': 'cURL a Axios',
	'tool.code-curl-to-axios.tagline': 'Converti comandi cURL in richieste Axios',
	'tool.code-curl-to-axios.description':
		'Converti comandi cURL in chiamate richieste Axios. Gestisce header, corpo richiesta, autenticazione e tutte le opzioni cURL comuni.',
	'tool.code-curl-to-axios.primary_keyword': 'convertitore curl a axios',
	'tool.code-curl-to-axios.meta_title': 'Convertitore cURL a Axios — fmtly.dev',
	'tool.code-curl-to-axios.meta_description':
		'Converti comandi cURL in richieste Axios nel tuo browser. Gestisce header, corpo e autenticazione. Nessun caricamento dati.',
	'tool.code-curl-to-axios.operation': 'Converti',

	// ── Strumenti Colore ────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Convertitore Colore',
	'tool.color-converter.tagline': 'Converti colori tra HEX, RGB, HSL e altri',
	'tool.color-converter.description':
		"Converti colori tra formati HEX, RGB, RGBA, HSL, HSLA e nomi di colori CSS. Mostra un'anteprima dal vivo del colore selezionato.",
	'tool.color-converter.primary_keyword': 'convertitore colore',
	'tool.color-converter.meta_title': 'Convertitore Colore — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Converti colori tra HEX, RGB, HSL e nomi di colori CSS nel tuo browser. Anteprima dal vivo inclusa.',
	'tool.color-converter.operation': 'Converti',

	'tool.color-contrast.display_name': 'Verificatore Contrasto Colore',
	'tool.color-contrast.tagline': 'Verifica il rapporto di contrasto WCAG tra due colori',
	'tool.color-contrast.description':
		"Calcola il rapporto di contrasto tra due colori e verifica la conformità all'accessibilità WCAG 2.1 AA e AAA per testo normale e grande.",
	'tool.color-contrast.primary_keyword': 'verificatore contrasto colore',
	'tool.color-contrast.meta_title': 'Verificatore Contrasto Colore — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Verifica il rapporto di contrasto dei colori per conformità WCAG AA e AAA nel tuo browser.',
	'tool.color-contrast.operation': 'Verifica',

	// ── Strumenti Cripto ─────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'Generatore HMAC',
	'tool.crypto-hmac.tagline': 'Genera firme HMAC con algoritmi SHA',
	'tool.crypto-hmac.description':
		'Genera firme HMAC usando SHA-256, SHA-384 o SHA-512. Output firme codificate in esadecimale o Base64 usando Web Crypto API.',
	'tool.crypto-hmac.primary_keyword': 'generatore hmac',
	'tool.crypto-hmac.meta_title': 'Generatore HMAC — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		'Genera firme HMAC nel tuo browser usando Web Crypto API. Supporta SHA-256, SHA-384 e SHA-512.',
	'tool.crypto-hmac.operation': 'Genera',

	'tool.crypto-password-strength.display_name': 'Verificatore Forza Password',
	'tool.crypto-password-strength.tagline': "Analizza la forza e l'entropia della password",
	'tool.crypto-password-strength.description':
		"Valuta la forza della password con calcolo dell'entropia, rilevamento dei modelli e tempo di crack stimato. Nessun dato viene mai inviato a server.",
	'tool.crypto-password-strength.primary_keyword': 'verificatore forza password',
	'tool.crypto-password-strength.meta_title': 'Verificatore Forza Password — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		"Verifica la forza della password e l'entropia nel tuo browser. Nessuna password viene mai trasmessa. 100% lato client.",
	'tool.crypto-password-strength.operation': 'Analizza',

	'tool.crypto-ulid.display_name': 'Generatore ULID',
	'tool.crypto-ulid.tagline':
		'Genera Identificatori Universali Univoci Lessicograficamente Ordinabili',
	'tool.crypto-ulid.description':
		'Genera ULID — identificatori ordinati nel tempo, sicuri per URL e ordinabili che sono resistenti alle collisioni. Utilizza Web Crypto API per casualità crittografica.',
	'tool.crypto-ulid.primary_keyword': 'generatore ulid',
	'tool.crypto-ulid.meta_title': 'Generatore ULID — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		'Genera ULID nel tuo browser usando Web Crypto API. Identificatori ordinabili e sicuri per URL.',
	'tool.crypto-ulid.operation': 'Genera',

	'tool.crypto-random-string.display_name': 'Generatore Stringa Casuale',
	'tool.crypto-random-string.tagline': 'Genera stringhe casuali crittograficamente sicure',
	'tool.crypto-random-string.description':
		'Genera stringhe casuali crittograficamente sicure con lunghezza e set di caratteri configurabili. Utilizza Web Crypto API per vera casualità.',
	'tool.crypto-random-string.primary_keyword': 'generatore stringa casuale',
	'tool.crypto-random-string.meta_title': 'Generatore Stringa Casuale — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		'Genera stringhe casuali sicure nel tuo browser usando Web Crypto API. Lunghezza e set di caratteri configurabili.',
	'tool.crypto-random-string.operation': 'Genera',

	// ── Strumenti Diff ──────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Diff Testo',
	'tool.diff-text.tagline': 'Confronta due blocchi di testo ed evidenzia le differenze',
	'tool.diff-text.description':
		'Confronta due blocchi di testo fianco a fianco ed evidenzia righe aggiunte, rimosse e non modificate. Supporta modalità diff a livello di parola e riga.',
	'tool.diff-text.primary_keyword': 'diff testo',
	'tool.diff-text.meta_title': 'Strumento Diff Testo — fmtly.dev',
	'tool.diff-text.meta_description':
		'Confronta due blocchi di testo nel tuo browser. Evidenzia aggiunte ed eliminazioni a livello di parola o riga. Nessun caricamento dati.',
	'tool.diff-text.operation': 'Confronta',

	// ── Strumenti Encode ─────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Encoder/Decoder Base64',
	'tool.encode-base64.tagline': 'Codifica e decodifica stringhe Base64',
	'tool.encode-base64.description':
		'Codifica testo o dati binari in Base64 e decodifica stringhe Base64 di ritorno a testo. Supporta varianti Base64 standard e sicure per URL.',
	'tool.encode-base64.primary_keyword': 'encoder decoder base64',
	'tool.encode-base64.meta_title': 'Encoder e Decoder Base64 — fmtly.dev',
	'tool.encode-base64.meta_description':
		'Codifica e decodifica Base64 nel tuo browser. Supporta varianti standard e sicure per URL. Nessun caricamento dati.',
	'tool.encode-base64.operation': 'Codifica / Decodifica',

	'tool.encode-url.display_name': 'Encoder/Decoder URL',
	'tool.encode-url.tagline': 'Codifica e decodifica stringhe con codifica URL',
	'tool.encode-url.description':
		'Codifica percento URL e componenti URL o decodifica stringhe codificate con percento. Gestisce tutti i caratteri riservati e speciali per RFC 3986.',
	'tool.encode-url.primary_keyword': 'encoder decoder url',
	'tool.encode-url.meta_title': 'Encoder e Decoder URL — fmtly.dev',
	'tool.encode-url.meta_description':
		'Codifica e decodifica URL nel tuo browser. Gestisce tutti i caratteri speciali. Nessun caricamento dati.',
	'tool.encode-url.operation': 'Codifica / Decodifica',

	'tool.encode-html.display_name': 'Encoder/Decoder Entità HTML',
	'tool.encode-html.tagline': 'Codifica e decodifica entità HTML',
	'tool.encode-html.description':
		'Converti caratteri speciali in entità HTML e ritorno. Gestisce &amp;, &lt;, &gt;, &quot; e tutti gli altri caratteri speciali HTML.',
	'tool.encode-html.primary_keyword': 'encoder decoder html',
	'tool.encode-html.meta_title': 'Encoder e Decoder Entità HTML — fmtly.dev',
	'tool.encode-html.meta_description':
		'Codifica e decodifica entità HTML nel tuo browser. Nessun caricamento dati.',
	'tool.encode-html.operation': 'Codifica / Decodifica',

	'tool.encode-html-entities.display_name': 'Riferimento Entità HTML',
	'tool.encode-html-entities.tagline': 'Sfoglia e cerca codici di entità HTML',
	'tool.encode-html-entities.description':
		'Cerca e sfoglia tutte le entità HTML con le loro forme decimali, esadecimali e nominate. Include punti di codice Unicode e anteprime visive.',
	'tool.encode-html-entities.primary_keyword': 'riferimento entità html',
	'tool.encode-html-entities.meta_title': 'Riferimento Entità HTML — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Sfoglia tutte le entità HTML nel tuo browser. Cerca per nome, decimale o codice esadecimale.',
	'tool.encode-html-entities.operation': 'Cerca',

	'tool.encode-unicode.display_name': 'Analizzatore Unicode',
	'tool.encode-unicode.tagline': 'Analizza i punti di codice Unicode nel testo',
	'tool.encode-unicode.description':
		'Decodifica qualsiasi testo nei suoi punti di codice Unicode con rappresentazioni di escape esadecimale, CSS, JavaScript e byte UTF-8. Gestisce emoji e sequenze multi-codepoint.',
	'tool.encode-unicode.primary_keyword': 'analizzatore unicode',
	'tool.encode-unicode.meta_title': 'Analizzatore Unicode — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Analizza i punti di codice Unicode nel tuo browser. Ispeziona escape esadecimali, CSS, JS e byte UTF-8.',
	'tool.encode-unicode.operation': 'Analizza',

	// ── Strumenti Escape ─────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'Escape Stringa JSON',
	'tool.escape-json.tagline': 'Escape e unescape stringhe JSON',
	'tool.escape-json.description':
		"Esci dai caratteri speciali nelle stringhe da utilizzare all'interno di valori JSON o caratteri non sfuggiti nei valori stringa JSON tornando al testo normale. Gestisce newline, tabulazioni, virgolette e barre rovesciate.",
	'tool.escape-json.primary_keyword': 'escape unescape json',
	'tool.escape-json.meta_title': 'Escape e Unescape Stringa JSON — fmtly.dev',
	'tool.escape-json.meta_description':
		'Esci e unescape stringhe JSON nel tuo browser. Nessun caricamento dati.',
	'tool.escape-json.operation': 'Esci / Unescape',

	// ── Strumenti File ──────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'Calcolatore Hash File',
	'tool.file-hash.tagline': 'Calcola hash file MD5, SHA-1, SHA-256 e SHA-512',
	'tool.file-hash.description':
		'Calcola valori hash crittografici per qualsiasi file. Supporta algoritmi MD5, SHA-1, SHA-256 e SHA-512. Viene eseguito interamente nel tuo browser.',
	'tool.file-hash.primary_keyword': 'calcolatore hash file',
	'tool.file-hash.meta_title': 'Calcolatore Hash File — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		'Calcola hash file nel tuo browser. Supporta MD5, SHA-1, SHA-256 e SHA-512. Nessun file viene caricato su alcun server.',
	'tool.file-hash.operation': 'Hash',

	// ── Strumenti Generate ──────────────────────────────────────────────────
	'tool.generate-uuid.display_name': 'Generatore UUID',
	'tool.generate-uuid.tagline': 'Genera UUID casuali (v4)',
	'tool.generate-uuid.description':
		'Genera UUID versione 4 conforme a RFC 4122 usando Web Crypto API. Genera singoli o UUID in blocco con un clic.',
	'tool.generate-uuid.primary_keyword': 'generatore uuid',
	'tool.generate-uuid.meta_title': 'Generatore UUID — fmtly.dev',
	'tool.generate-uuid.meta_description':
		'Genera UUID casuali nel tuo browser usando Web Crypto API. Conforme a RFC 4122 v4.',
	'tool.generate-uuid.operation': 'Genera',

	// ── Strumenti Immagine ──────────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Compressore Immagine',
	'tool.image-compressor.tagline': 'Comprimi immagini senza perdita di qualità',
	'tool.image-compressor.description':
		"Comprimi immagini JPEG, PNG e WebP nel tuo browser. Regola le impostazioni di qualità e visualizza l'anteprima prima del download. Nessuna immagine viene caricata.",
	'tool.image-compressor.primary_keyword': 'compressore immagine',
	'tool.image-compressor.meta_title': 'Compressore Immagine — fmtly.dev',
	'tool.image-compressor.meta_description':
		'Comprimi immagini nel tuo browser. Supporta JPEG, PNG e WebP. Nessuna immagine viene caricata su alcun server.',
	'tool.image-compressor.operation': 'Comprimi',

	// ── Strumenti Numero ────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Formattatore Numero',
	'tool.number-formatter.tagline': 'Formatta numeri con separatori specifici della locale',
	'tool.number-formatter.description':
		'Formatta numeri con separatori di migliaia, posizioni decimali e notazione specifica della locale. Supporta formattazione di valuta e notazione scientifica.',
	'tool.number-formatter.primary_keyword': 'formattatore numero',
	'tool.number-formatter.meta_title': 'Formattatore Numero — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Formatta numeri con separatori di locale e simboli di valuta nel tuo browser.',
	'tool.number-formatter.operation': 'Formatta',

	'tool.number-roman.display_name': 'Convertitore Numeri Romani',
	'tool.number-roman.tagline': 'Converti tra numeri romani e interi',
	'tool.number-roman.description':
		'Converti interi in numeri romani e viceversa. Supporta numeri da 1 a 3999 con notazione di numeri romani standard.',
	'tool.number-roman.primary_keyword': 'convertitore numeri romani',
	'tool.number-roman.meta_title': 'Convertitore Numeri Romani — fmtly.dev',
	'tool.number-roman.meta_description': 'Converti tra numeri romani e interi nel tuo browser.',
	'tool.number-roman.operation': 'Converti',

	'tool.number-percentage.display_name': 'Calcolatore Percentuale',
	'tool.number-percentage.tagline': 'Calcola percentuali, aumenti e diminuzioni',
	'tool.number-percentage.description':
		'Calcola valori percentuali, variazione percentuale e percentuale di totali. Supporta calcoli di aumento/diminuzione e ricerche di percentuale inversa.',
	'tool.number-percentage.primary_keyword': 'calcolatore percentuale',
	'tool.number-percentage.meta_title': 'Calcolatore Percentuale — fmtly.dev',
	'tool.number-percentage.meta_description':
		'Calcola percentuali e variazione percentuale nel tuo browser.',
	'tool.number-percentage.operation': 'Calcola',

	'tool.number-scientific.display_name': 'Convertitore Notazione Scientifica',
	'tool.number-scientific.tagline': 'Converti numeri da e verso notazione scientifica',
	'tool.number-scientific.description':
		'Converti numeri in notazione scientifica e viceversa. Mostra mantissa, esponente e rappresentazione equivalente di notazione ingegneristica.',
	'tool.number-scientific.primary_keyword': 'convertitore notazione scientifica',
	'tool.number-scientific.meta_title': 'Convertitore Notazione Scientifica — fmtly.dev',
	'tool.number-scientific.meta_description':
		'Converti numeri in notazione scientifica nel tuo browser.',
	'tool.number-scientific.operation': 'Converti',

	'tool.number-statistics.display_name': 'Calcolatore Statistiche',
	'tool.number-statistics.tagline': 'Calcola media, mediana, moda e altro',
	'tool.number-statistics.description':
		'Calcola statistiche descrittive per un elenco di numeri: media, mediana, moda, deviazione standard, varianza, min, max e quartili.',
	'tool.number-statistics.primary_keyword': 'calcolatore statistiche',
	'tool.number-statistics.meta_title': 'Calcolatore Statistiche — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Calcola media, mediana, deviazione standard e altro nel tuo browser.',
	'tool.number-statistics.operation': 'Calcola',

	'tool.number-matrix.display_name': 'Calcolatore Matrice',
	'tool.number-matrix.tagline': 'Esegui operazioni e calcoli di matrice',
	'tool.number-matrix.description':
		'Esegui operazioni di matrice incluse addizione, sottrazione, moltiplicazione, trasposizione, determinante e inversa su matrici di qualsiasi dimensione.',
	'tool.number-matrix.primary_keyword': 'calcolatore matrice',
	'tool.number-matrix.meta_title': 'Calcolatore Matrice — fmtly.dev',
	'tool.number-matrix.meta_description':
		'Esegui operazioni di matrice nel tuo browser. Supporta addizione, moltiplicazione, inversa e altro.',
	'tool.number-matrix.operation': 'Calcola',

	'tool.number-unit-converter.display_name': 'Convertitore Unità',
	'tool.number-unit-converter.tagline': 'Converti tra unità di misura',
	'tool.number-unit-converter.description':
		'Converti tra unità di lunghezza, peso, temperatura, volume, area, velocità e altro. Supporta sistemi metrici e imperiali.',
	'tool.number-unit-converter.primary_keyword': 'convertitore unità',
	'tool.number-unit-converter.meta_title': 'Convertitore Unità — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Converti tra unità di misura nel tuo browser. Supporta lunghezza, peso, temperatura e altro.',
	'tool.number-unit-converter.operation': 'Converti',

	// ── Strumenti PDF ───────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'Visualizzatore PDF',
	'tool.pdf-viewer.tagline': 'Visualizza ed estrai testo da file PDF',
	'tool.pdf-viewer.description':
		'Visualizza file PDF nel tuo browser ed estrai il contenuto del testo. Supporta PDF multi-pagina e selezione testo. Nessun file viene caricato su alcun server.',
	'tool.pdf-viewer.primary_keyword': 'visualizzatore pdf',
	'tool.pdf-viewer.meta_title': 'Visualizzatore PDF — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'Visualizza file PDF nel tuo browser. Estrai testo da qualsiasi PDF. Nessun file caricato.',
	'tool.pdf-viewer.operation': 'Visualizza',

	// ── Strumenti QR ────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'Generatore Codice QR',
	'tool.qr-generator.tagline': 'Genera codici QR personalizzabili',
	'tool.qr-generator.description':
		'Genera codici QR da testo, URL, informazioni di contatto e altro. Personalizza dimensione, livello di correzione errori e colori. Scarica come PNG o SVG.',
	'tool.qr-generator.primary_keyword': 'generatore codice qr',
	'tool.qr-generator.meta_title': 'Generatore Codice QR — fmtly.dev',
	'tool.qr-generator.meta_description':
		'Genera codici QR personalizzabili nel tuo browser. Scarica come PNG o SVG.',
	'tool.qr-generator.operation': 'Genera',

	// ── Strumenti TOML ──────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'Formattatore TOML',
	'tool.toml-formatter.tagline': 'Formatta e valida file di configurazione TOML',
	'tool.toml-formatter.description':
		'Formatta file TOML con spaziatura coerente e organizzazione sezione. Valida la sintassi TOML ed evidenzia errori con numeri di riga.',
	'tool.toml-formatter.primary_keyword': 'formattatore toml',
	'tool.toml-formatter.meta_title': 'Formattatore TOML — fmtly.dev',
	'tool.toml-formatter.meta_description':
		'Formatta e valida TOML nel tuo browser. Nessun dato lascia il tuo dispositivo.',
	'tool.toml-formatter.operation': 'Formatta',

	// ── Strumenti Web ───────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'Parser URL',
	'tool.web-url-parser.tagline': 'Analizza e ispeziona componenti URL',
	'tool.web-url-parser.description':
		'Scomponi gli URL nei loro componenti: protocollo, host, porta, percorso, parametri query e frammento. Analizza e ispeziona qualsiasi URL.',
	'tool.web-url-parser.primary_keyword': 'parser url',
	'tool.web-url-parser.meta_title': 'Parser URL — fmtly.dev',
	'tool.web-url-parser.meta_description':
		'Analizza e ispeziona i componenti URL nel tuo browser. Scompone qualsiasi URL nelle sue parti.',
	'tool.web-url-parser.operation': 'Analizza',

	'tool.web-user-agent.display_name': 'Parser User-Agent',
	'tool.web-user-agent.tagline': 'Analizza e decodifica stringhe User-Agent',
	'tool.web-user-agent.description':
		'Analizza stringhe User-Agent per identificare browser, motore, SO e tipo di dispositivo. Supporta formati di browser moderni e legacy.',
	'tool.web-user-agent.primary_keyword': 'parser user agent',
	'tool.web-user-agent.meta_title': 'Parser User-Agent — fmtly.dev',
	'tool.web-user-agent.meta_description':
		'Analizza stringhe User-Agent nel tuo browser. Identifica browser, SO e dispositivo.',
	'tool.web-user-agent.operation': 'Analizza',

	'tool.web-cors.display_name': 'Verificatore Header CORS',
	'tool.web-cors.tagline': 'Ispeziona e comprendi header CORS',
	'tool.web-cors.description':
		'Cerca e spiega header CORS. Comprendi Access-Control-Allow-Origin, credenziali, preflight e altre direttive CORS.',
	'tool.web-cors.primary_keyword': 'verificatore header cors',
	'tool.web-cors.meta_title': 'Verificatore Header CORS — fmtly.dev',
	'tool.web-cors.meta_description':
		'Ispeziona header CORS nel tuo browser. Comprendi tutte le direttive Access-Control.',
	'tool.web-cors.operation': 'Verifica',

	'tool.web-mime-types.display_name': 'Ricerca Tipo MIME',
	'tool.web-mime-types.tagline': 'Cerca tipi MIME per estensione o nome',
	'tool.web-mime-types.description':
		"Ricerca tipi MIME per estensione file, nome o tipo di contenuto. Copre tutti i tipi MIME registrati dall'IANA con esempi.",
	'tool.web-mime-types.primary_keyword': 'ricerca tipo mime',
	'tool.web-mime-types.meta_title': 'Ricerca Tipo MIME — fmtly.dev',
	'tool.web-mime-types.meta_description': 'Ricerca tipi MIME per estensione file nel tuo browser.',
	'tool.web-mime-types.operation': 'Ricerca',

	'tool.web-ip-lookup.display_name': 'Ricerca IP',
	'tool.web-ip-lookup.tagline': 'Ricerca geolocalizzazione e info per indirizzi IP',
	'tool.web-ip-lookup.description':
		'Ricerca geolocalizzazione, ASN e informazioni sul provider per qualsiasi indirizzo IP. Supporta indirizzi IPv4 e IPv6.',
	'tool.web-ip-lookup.primary_keyword': 'ricerca ip',
	'tool.web-ip-lookup.meta_title': 'Ricerca IP — fmtly.dev',
	'tool.web-ip-lookup.meta_description':
		'Ricerca geolocalizzazione indirizzi IP e informazioni sul provider nel tuo browser.',
	'tool.web-ip-lookup.operation': 'Ricerca',

	'tool.web-dns-lookup.display_name': 'Ricerca DNS',
	'tool.web-dns-lookup.tagline': 'Interroga record DNS per qualsiasi dominio',
	'tool.web-dns-lookup.description':
		'Interroga A, AAAA, MX, TXT, CNAME, NS e altri tipi di record DNS per qualsiasi dominio. Utilizza DNS over HTTPS del browser.',
	'tool.web-dns-lookup.primary_keyword': 'ricerca dns',
	'tool.web-dns-lookup.meta_title': 'Ricerca DNS — fmtly.dev',
	'tool.web-dns-lookup.meta_description':
		'Interroga record DNS per qualsiasi dominio nel tuo browser.',
	'tool.web-dns-lookup.operation': 'Ricerca',

	// ── Strumenti Accessibilità ─────────────────────────────────────────────
	'tool.accessibility-contrast.display_name': 'Verificatore Contrasto',
	'tool.accessibility-contrast.tagline':
		'Verifica rapporti di contrasto WCAG per colori di testo e sfondo',
	'tool.accessibility-contrast.description':
		'Inserisci colori in primo piano e sfondo per calcolare il rapporto di contrasto. Vedi conformità WCAG AA/AAA per testo normale, testo grande ed elementi UI. Anteprima dal vivo inclusa.',
	'tool.accessibility-contrast.primary_keyword': 'verificatore contrasto wcag',
	'tool.accessibility-contrast.meta_title': 'Verificatore Contrasto WCAG — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'Verifica rapporti di contrasto colore WCAG nel tuo browser. Anteprima dal vivo, conformità AA/AAA. Nessun dato lascia il tuo dispositivo.',
	'tool.accessibility-contrast.operation': 'Verifica',
	'tool.accessibility-contrast.faq.0.question': 'Quale rapporto di contrasto è richiesto?',
	'tool.accessibility-contrast.faq.0.answer':
		'WCAG AA richiede 4.5:1 per testo normale e 3:1 per testo grande. AAA richiede 7:1 e 4.5:1 rispettivamente.',
	'tool.accessibility-contrast.use_case.0': "Verifica dell'accessibilità del testo del sito web",
	'tool.accessibility-contrast.use_case.1': 'Scelta di combinazioni di colori accessibili',

	'tool.accessibility-color-blindness.display_name': 'Simulatore Daltonismo',
	'tool.accessibility-color-blindness.tagline':
		'Simula come i colori appaiono a persone con deficit visivi cromaticho',
	'tool.accessibility-color-blindness.description':
		"Inserisci un colore o carica un'immagine per vedere come appare a persone con protanopia, deuteranopia, tritanopia e achromatopsia. Utilizza matrici di trasformazione di colore.",
	'tool.accessibility-color-blindness.primary_keyword': 'simulatore daltonismo',
	'tool.accessibility-color-blindness.meta_title': 'Simulatore Daltonismo — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description':
		'Simula protanopia, deuteranopia, tritanopia visione nel tuo browser. Testa colori e immagini. Nessun caricamento dati.',
	'tool.accessibility-color-blindness.operation': 'Simula',
	'tool.accessibility-color-blindness.faq.0.question': 'Quali tipi di daltonismo sono simulati?',
	'tool.accessibility-color-blindness.faq.0.answer':
		'Protanopia (no rosso), deuteranopia (no verde), tritanopia (no blu) e achromatopsia (no colore).',
	'tool.accessibility-color-blindness.use_case.0': 'Test di design UI per accessibilità daltonismo',
	'tool.accessibility-color-blindness.use_case.1':
		'Verifica di inclusività della palette di colori',

	'tool.accessibility-font-size.display_name': 'Verificatore Dimensione Font',
	'tool.accessibility-font-size.tagline':
		'Verifica se il testo soddisfa i requisiti WCAG di dimensione e contrasto',
	'tool.accessibility-font-size.description':
		'Inserisci dimensione font, peso e colori per ottenere un rapporto WCAG combinato. Vedi se il testo si qualifica come "testo grande" e quale rapporto di contrasto è richiesto.',
	'tool.accessibility-font-size.primary_keyword': 'verificatore dimensione font wcag',
	'tool.accessibility-font-size.meta_title': 'Verificatore Dimensione Font WCAG — fmtly.dev',
	'tool.accessibility-font-size.meta_description':
		'Verifica i requisiti di dimensione font WCAG nel tuo browser. Classificazione testo grande, requisiti di contrasto. Nessun caricamento dati.',
	'tool.accessibility-font-size.operation': 'Verifica',
	'tool.accessibility-font-size.faq.0.question': "Che cos'è il testo grande in WCAG?",
	'tool.accessibility-font-size.faq.0.answer':
		'Il testo ≥18pt (24px) o ≥14pt (18.66px) in grassetto è considerato testo grande, che richiede rapporti di contrasto inferiori.',
	'tool.accessibility-font-size.use_case.0': "Verifica dell'accessibilità dello stile di testo",
	'tool.accessibility-font-size.use_case.1':
		'Determinazione dei requisiti WCAG per diverse dimensioni di font',

	// ── Stringhe UI ─────────────────────────────────────────────────────────
	'ui.actions.choose_sample': 'Scegli…',
	'ui.actions.clear': 'Cancella',
	'ui.actions.copied': 'Copiato',
	'ui.actions.copy': 'Copia',
	'ui.actions.copy_all': 'Copia tutto',
	'ui.actions.download': 'Scarica',
	'ui.actions.fetch': 'Recupera',
	'ui.actions.format': 'Formatta',
	'ui.actions.load_url': 'Carica URL',
	'ui.actions.minify': 'Minimizza',
	'ui.actions.run': 'Esegui',
	'ui.actions.running': 'In corso…',
	'ui.actions.sample': 'Esempio',
	'ui.actions.search': 'Ricerca',
	'ui.actions.diff': 'Diff',
	'ui.actions.share': 'Condividi',
	'ui.layout.tabs.output': 'Output',
	'ui.layout.tabs.tree': 'Albero',
	'ui.layout.placeholders.input': 'Input',
	'ui.layout.placeholders.output': 'Output',
	'ui.layout.placeholders.output_empty': "L'output apparirà qui",
	'ui.layout.placeholders.tree_empty': 'Vista albero',
	'ui.layout.placeholders.paste_original': 'Incolla originale qui…',
	'ui.layout.placeholders.paste_modified': 'Incolla modificato qui…',
	'ui.diff.labels.original': 'Originale',
	'ui.diff.labels.modified': 'Modificato',
	'ui.diff.labels.input_panel': 'Pannello input diff',
	'ui.diff.controls.ignore_order': 'Ignora ordine array',
	'ui.diff.controls.only_diffs': 'Mostra solo diff',
	'ui.diff.controls.case_sensitive': 'Sensibile ai maiuscoli',
	'ui.diff.controls.ignore_keys_placeholder': 'Ignora chiavi: id, timestamp…',
	'ui.diff.controls.swap': 'Scambia',
	'ui.diff.controls.export': 'Esporta',
	'ui.diff.controls.copy_patch': 'Copia come JSON Patch',
	'ui.diff.controls.export_md': 'Scarica rapporto Markdown',
	'ui.diff.controls.export_csv': 'Scarica CSV',
	'ui.diff.view.list': 'Vista elenco',
	'ui.diff.view.monaco': 'Vista diff inline',
	'ui.diff.view.inline_toggle': 'Attiva/disattiva inline / fianco a fianco',
	'ui.diff.summary.added': 'aggiunto',
	'ui.diff.summary.removed': 'rimosso',
	'ui.diff.summary.modified': 'modificato',
	'ui.diff.summary.similar': 'simile',
	'ui.diff.summary.empty': 'Inserisci {language} in entrambi i pannelli per confrontare',
	'ui.diff.summary.identical': 'I documenti sono identici',
	'ui.diff.summary.difference': 'differenza',
	'ui.diff.summary.differences': 'differenze',
	'ui.diff.summary.found': 'trovate',
	'ui.diff.filter.placeholder': 'Filtra per percorso…',
	'ui.diff.types.root': '(root)',
	'ui.diff.types.added': 'Aggiunto',
	'ui.diff.types.removed': 'Rimosso',
	'ui.diff.types.modified': 'Modificato',
	'ui.diff.types.unchanged': 'Non modificato',
	'ui.diff.actions.format': 'Formatta',
	'ui.diff.actions.copy_value': 'Copia valore',
	'ui.diff.actions.collapse': 'Comprimi',
	'ui.diff.actions.expand': 'Espandi',
	'ui.diff.toast.format_error': 'Impossibile formattare — {language} non valido',
	'ui.diff.error.invalid_left': '{language} non valido nell’input sinistro (Originale)',
	'ui.diff.error.invalid_right': '{language} non valido nell’input destro (Modificato)',
	'ui.diff.toast.patch_success': 'JSON Patch copiato negli appunti',
	'ui.diff.toast.copy_value': 'Valore copiato',
	'ui.diff.toast.share_copied': 'Link di condivisione copiato negli appunti',
	'ui.diff.meta.chars': 'caratteri',
	'ui.diff.empty.hint': 'Incolla {language} in entrambi i pannelli sopra per confrontarli.',
	'ui.diff.report.title': 'Report diff {language}',
	'ui.diff.empty.load_sample': 'Carica dati di esempio',
	'ui.layout.placeholders.modified': 'Modificato',
	'ui.layout.aria.input_panel': 'Pannello di input',
	'ui.layout.aria.output_panel': 'Pannello di output',
	'ui.layout.aria.copy_output': 'Copia output',
	'ui.layout.aria.download_output': 'Scarica output',
	'tool.output_placeholder': "L'output apparirà qui",
	'ui.actions.upload': 'Carica',
	'ui.actions.validate': 'Valida',
	'ui.actions.wrap': 'Avvolgi',
	'ui.confirm.clear': "Cancellare l'input {language} corrente?",
	'ui.confirm.clear_description': 'Questa azione non può essere annullata.',
	'ui.drop_files': 'Rilascia file .{extension}',
	'ui.drop_to_load': 'Rilascia per caricare',
	'ui.history.clear_all': 'Cancella Cronologia',
	'ui.history.clear_confirm': 'Cancellare tutta la cronologia?',
	'ui.history.clear_description': 'Questa azione non può essere annullata.',
	'ui.history.empty': 'Nessuna cronologia ancora',
	'ui.history.recent': 'Utilizzati di Recente',
	'ui.history.title': 'Cronologia',
	'ui.paste_here': 'Incolla qui…',
	'ui.paste_language_here': 'Incolla {language} qui…',
	'ui.placeholder.original_yaml': 'Incolla qui lo YAML originale…',
	'ui.placeholder.modified_yaml': 'Incolla qui lo YAML modificato…',
	'ui.placeholder.search_tools_count': 'Ricerca {count}+ strumenti...',
	'ui.placeholder.url': 'https://example.com/data.json',
	'ui.placeholder.xpath': "//book[@available='true']",
	'ui.related_categories': 'Categorie Correlate',
	'ui.stats.info': '{encoding} · {size} · {lines} righe · profondità: {depth}',
	'ui.toast.copy_error': 'Copia non riuscita — verifica i permessi del browser',
	'ui.toast.copy_success': 'Copiato negli appunti',
	'ui.toast.input_cleared': 'Input cancellato',
	'ui.loaded_sample': 'Caricato {label}',
	'ui.toast.url_error': 'Impossibile recuperare — prova a incollare direttamente',
	'ui.json_viewer.toast_copy_path': 'Copiato',
	'ui.tree.toast_copy_path': 'Copiato',
	'ui.tree.toast.copied_path': 'Copiato',
	'ui.toast.url_loaded': 'Caricato da URL',
	'share.link_size': 'Dimensione link',
	'share.large_link_warning': 'Questo link è grande e potrebbe non funzionare in tutti i browser',
	'share.data_encoded_note':
		"I dati sono codificati nell'URL e non vengono mai inviati a nessun server per l'elaborazione.",
	'share.enter_input_first': 'Inserisci alcuni input prima per generare un link di condivisione.',
	'ui.share_url_copied': 'URL di condivisione copiato',
	'ui.copied': 'Copiato',
	'ui.copy_link': 'Copia Link',
	'ui.share': 'Condividi',
	'ui.close': 'Chiudi',
	'ui.cancel': 'Annulla',
	'ui.confirm': 'Conferma',
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
		"Nessun risultato. Prova un'espressione diversa o controlla la struttura XML.",
	'ui.xpath.placeholder': "Incolla XML nel pannello sinistro, quindi esegui un'espressione XPath.",
	'ui.xpath.results_count.one': '1 risultato',
	'ui.xpath.results_count.other': '{count} risultati',
	'ui.validator.syntax': 'Sintassi',
	'ui.validator.schema': 'Schema',
	'ui.validator.issue': 'problema',
	'ui.validator.issues': 'problemi',
	'ui.validator.row': 'Riga',
	'ui.validator.warning': 'avviso',
	'ui.validator.warnings': 'avvisi',
	'ui.validator.first_issue': 'Primo problema',
	'ui.validator.repair_json': 'Ripara JSON',
	'ui.validator.schema_title': 'Schema JSON',
	'ui.validator.schema_standard': 'Draft-07+ via AJV',
	'ui.validator.paste_schema_placeholder': 'Incolla Schema JSON qui…',
	'ui.validator.paste_json': 'Incolla JSON da validare',
	'ui.validator.paste_schema': 'Incolla uno Schema JSON per convalidare contro',
	'ui.validator.validating_schema': 'Validazione schema…',
	'ui.validator.schema_invalid': 'Lo schema non è valido',
	'ui.validator.json_matches_schema': 'JSON corrisponde allo schema',
	'ui.validator.schema_validation_failed': 'Validazione dello schema non riuscita',
	'ui.validator.no_syntax_errors': 'Nessun errore di sintassi trovato.',
	'ui.validator.json_matches_current_schema': 'JSON corrisponde allo schema corrente.',
	'ui.validator.schema_match': 'Corrispondenza schema',
	'ui.validator.valid_json': 'JSON valido',
	'ui.validator.explanation_must_satisfy': 'deve soddisfare',
	'ui.validator.data_error_pos': 'Errore dati alla riga {line}, colonna {column}',
	'ui.load_sample': 'Carica un esempio',
	'ui.share_url': 'Condividi URL',
	'ui.format_xml': 'Formatta XML',
	'ui.format_yaml': 'Formatta YAML',
	'ui.minify_xml': 'Minimizza XML',
	'ui.format_beautify': 'Formatta / Abbellisci',
	'ui.minify': 'Minimizza',
	'ui.repair_json': 'Ripara JSON',
	'ui.expand_all': 'Espandi tutto',
	'ui.collapse_all': 'Comprimi tutto',
	'ui.expand_to_depth': 'Espandi a profondità {depth}',
	switch_to_tab: 'Passa alla scheda {index}',
	switch_to_xml_tab: 'Passa alla scheda XML {index}',
	switch_to_yaml_tab: 'Passa alla scheda YAML {index}',
	use_cases: "Casi d'Uso",
	faq: 'Domande Frequenti',
	'ui.validator.schema_error_pos': 'Errore schema alla riga {line}, colonna {column}',
	'ui.validator.syntax_error_pos': 'Errore di sintassi alla riga {line}, colonna {column}',
	'ui.validator.line_col_label': 'Riga {line}, colonna {column}',
	'ui.validator.well_formed': 'Ben formato',
	'ui.validator.invalid_xml': 'XML non valido',
	'ui.validator.loading_editor': 'Caricamento editor…',
	'ui.validator.xml_paste_hint': 'Incolla o digita XML per convalidarlo.',
	'ui.validator.xml_validation_desc':
		'Valida ben-formazione: tag non chiusi, elementi non corrispondenti, caratteri non validi e altro.',
	'ui.validator.xml_success_title': 'XML ben formato',
	'ui.validator.xml_success_desc':
		'Nessun errore di sintassi rilevato. Il documento è ben formato e può essere analizzato da qualsiasi processore XML.',
	'ui.validator.error_count.one': '1 errore trovato',
	'ui.validator.error_count.other': '{count} errori trovati',
	'ui.toast.file_loaded': 'File caricato: {name}',
	'ui.toast.clipboard_xml': 'Appunti XML',
	'ui.toast.pasted_xml': 'XML incollato dagli appunti',
	'ui.toast.xml_file_types': 'Sono supportati solo file .xml, .svg, .xhtml, .xsd, .wsdl e .txt',
	'ui.aria.xml_input_panel': 'Pannello di input XML',
	'ui.aria.xml_output_panel': 'Pannello di output XML',
	'ui.aria.xml_workspace_tabs': "Schede dell'area di lavoro XML",
	'ui.aria.xpath_panel': 'Pannello query XPath',
	'ui.aria.xml_validator': 'Validatore XML',
	'ui.aria.yaml_output_panel': 'Pannello di output YAML',
	'ui.aria.yaml_validator': 'Validatore YAML',
	'ui.aria.csv_validator': 'Validatore CSV',
	'ui.csv.controls.delimiter': 'Delimitatore',
	'ui.csv.controls.header_row': 'Riga di intestazione',
	'ui.csv.controls.skip_empty_lines': 'Salta righe vuote',
	'ui.csv.controls.trim_cells': 'Rifila celle',
	'ui.csv.controls.quote_all': 'Metti tra virgolette tutte le celle',
	'ui.csv.delimiter.comma': 'Virgola (,)',
	'ui.csv.delimiter.semicolon': 'Punto e virgola (;)',
	'ui.csv.delimiter.tab': 'Tabulazione',
	'ui.csv.delimiter.pipe': 'Pipe (|)',
	'ui.csv.view.preview': 'Anteprima',
	'ui.csv.view.raw': 'Raw',
	'ui.csv.stats.rows': 'righe',
	'ui.csv.stats.columns': 'colonne',
	'ui.csv.preview.column_name': 'Colonna {index}',
	'ui.csv.preview.no_rows': 'Nessuna riga dati da mostrare in anteprima',
	'ui.csv.preview.delimiter': 'delimitatore',
	'ui.csv.preview.header_mode': 'intestazione',
	'ui.csv.preview.no_header': 'Colonne generate',
	'ui.csv.preview.remaining_rows': 'L’anteprima mostra solo altre {count} righe',
	'ui.csv.empty.title': 'Incolla CSV per iniziare',
	'ui.csv.empty.desc':
		'Formatta, valida, anteprima o converti dati CSV interamente nel tuo browser.',
	'ui.csv.empty.waiting_title': 'In attesa dell’output CSV',
	'ui.csv.empty.waiting_desc':
		'Le righe analizzate, l’output formattato o i risultati convertiti appariranno qui.',
	'ui.validator.invalid_yaml': 'YAML non valido',
	'ui.validator.invalid_csv': 'CSV non valido',
	'ui.validator.csv_paste_hint': 'Incolla o digita CSV da validare.',
	'ui.validator.csv_validation_desc':
		'Valida la struttura del delimitatore, la coerenza delle righe e le virgolette malformate nell’input CSV.',
	'ui.validator.csv_error.header_empty': 'La colonna di intestazione {column} è vuota',
	'ui.validator.csv_error.duplicate_header': 'Intestazione duplicata "{value}" trovata',
	'ui.validator.csv_error.row_width':
		'La riga {row} ha {actual} colonne invece di {expected}',
	'ui.validator.csv_success_title': 'CSV valido',
	'ui.validator.csv_success_desc':
		'Non sono stati rilevati errori strutturali nel CSV. Il documento può essere analizzato correttamente.',
	'ui.validator.csv_paste_schema': 'Incolla uno schema da validare',
	'ui.validator.csv_paste_schema_data': 'Incolla CSV da validare',
	'ui.validator.csv_validating_schema': 'Validazione schema…',
	'ui.validator.csv_matches_schema': 'Il CSV corrisponde allo schema',
	'ui.validator.csv_matches_current_schema': 'Le righe CSV corrispondono allo schema corrente.',
	'ui.validator.csv_schema_title': 'Schema',
	'ui.validator.csv_schema_standard': 'JSON Schema Draft-07+ tramite AJV',
	'ui.validator.csv_paste_schema_placeholder': 'Incolla qui JSON Schema o schema YAML…',
	'ui.validator.csv_schema_validation_desc':
		'Valida le righe CSV rispetto a uno schema eseguito nel browser. Ogni riga analizzata viene validata come oggetto usando le opzioni CSV correnti.',
	'ui.validator.yaml_paste_hint': 'Incolla o scrivi YAML da validare.',
	'ui.validator.yaml_validation_desc':
		'Valida sintassi YAML, indentazione, caratteri non validi e strutture malformate.',
	'ui.validator.yaml_success_title': 'YAML valido',
	'ui.validator.yaml_success_desc':
		'Non sono stati rilevati errori di sintassi. Il documento può essere analizzato correttamente come YAML.',
	'ui.validator.yaml_warning_title': 'YAML valido con avvisi di stile',
	'ui.validator.yaml_warning_desc':
		'Il documento viene analizzato correttamente, ma alcuni problemi di stile possono ridurre leggibilità o coerenza.',
	'ui.validator.yaml_lint.tabs':
		'Sono state trovate tabulazioni nell’indentazione. YAML di solito è più sicuro usando solo spazi.',
	'ui.validator.yaml_lint.trailing_whitespace': 'Sono stati trovati spazi finali di riga.',
	'ui.validator.yaml_lint.odd_indentation':
		'È stata trovata una larghezza di indentazione dispari. YAML di solito è più coerente con un’indentazione di 2 spazi.',
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
	'ui.query.stats.chars': 'caratteri',
	'ui.query.stats.lines': 'righe',
	'ui.query.result': 'risultato',
	'ui.query.results': 'risultati',
	'ui.query.history': 'Cronologia',
	'ui.query.sample_query': 'Query di esempio',
	'ui.query.guide': 'Guida',
	'ui.query.query': 'Query',
	'ui.query.mode': 'Modalità query',
	'ui.query.running': 'Esecuzione query…',
	'ui.query.empty_input': 'Incolla JSON a sinistra per valutare la tua query.',
	'ui.query.empty_input_yaml': 'Incolla YAML a sinistra per valutare la tua query.',
	'ui.query.empty_query': 'Inserisci una query per vedere i risultati.',
	'ui.query.error_fallback': 'Query non riuscita',
	'ui.query.copy_error': "Impossibile copiare l'output",
	'ui.aria.json_query_panel': 'Pannello query JSON',
	'ui.aria.yaml_query_panel': 'Pannello query YAML',
	'ui.status.processing': 'Elaborazione…',
	'ui.status.waiting_output': "L'output apparirà qui",
	'ui.output.controls.spaces': 'spazi',
	'ui.output.stats.chars': 'caratteri',
	'ui.output.stats.lines': 'righe',
	'ui.output.stats.documents': 'documenti',
	'ui.output.stats.top_level_keys': 'chiavi di primo livello',
	'ui.output.stats.keys': 'chiavi',
	'ui.output.stats.objects': 'oggetti',
	'ui.output.stats.arrays': 'array',
	'ui.output.stats.strings': 'stringhe',
	'ui.output.stats.values': 'valori',
	'ui.output.stats.numbers': 'numeri',
	'ui.output.stats.booleans': 'booleani',
	'ui.output.stats.nulls': 'null',
	'ui.output.stats.depth': 'profondità',
	'ui.output.stats.size_in': 'dentro',
	'ui.output.stats.size_out': 'fuori',
	'ui.output.original': 'Originale',
	'ui.command_palette.title': 'Palette dei comandi',
	'ui.command_palette.placeholder': 'Cerca strumenti, categorie e formati…',
	'ui.command_palette.recent': 'Recenti',
	'ui.command_palette.no_results': 'Nessuno strumento corrispondente trovato',
	'ui.command_palette.hint_navigate': 'Naviga',
	'ui.command_palette.hint_open': 'Apri',
	'ui.command_palette.hint_close': 'Chiudi',
	'ui.output.minified': 'Minimizzato',
	'ui.output.saved': 'salvato',
	'ui.output.meta.minified': 'MINIMIZZATO',
	'ui.output.actions.wrap': 'Avvolgi',
	'ui.output.actions.compare': 'Confronta',
	'ui.output.actions.copy_json': 'Copia come JSON',
	'ui.output.actions.copy_js': 'Copia come Oggetto JS',
	'ui.output.actions.copy_python': 'Copia come Dizionario Python',
	'ui.output.actions.copy_escaped': 'Copia escapato',
	'ui.output.actions.copy': 'Copia',
	'ui.output.actions.download': 'Scarica',
	'ui.output.compare.input': 'Input',
	'ui.output.compare.output': 'Output',
	'ui.output.error.invalid_title': 'JSON non valido',
	'ui.output.controls.indent': 'Indenta',
	'ui.output.controls.tab': 'Tab',
	'ui.output.controls.sort_keys': 'Ordina chiavi',
	'ui.output.controls.clean': 'Pulisci',
	'ui.output.controls.clean_nulls': 'Rimuovi valori null',
	'ui.output.controls.clean_strings': 'Rimuovi stringhe vuote',
	'ui.output.controls.clean_arrays': 'Rimuovi array vuoti',
	'ui.output.controls.clean_objects': 'Rimuovi oggetti vuoti',
	'ui.output.controls.apply': 'Applica',

	// ── FAQ e Casi d\'Uso degli Strumenti ────────────────────────────────────
	'tool.json-formatter.faq.0.question': "Che cos'è la formattazione JSON?",
	'tool.json-formatter.faq.0.answer':
		'La formattazione JSON è il processo di organizzazione dei dati JSON con indentazione e interruzioni di riga corrette per renderla più leggibile e più facile da capire.',
	'tool.json-formatter.faq.1.question': "Posso personalizzare l'indentazione?",
	'tool.json-formatter.faq.1.answer':
		"Sì! Puoi scegliere tra 2 spazi, 4 spazi o tabulazioni per l'indentazione. Il formattatore mantiene la struttura dati originale mentre applica la formattazione preferita.",
	'tool.json-formatter.faq.2.question': 'Questo strumento modifica i miei dati?',
	'tool.json-formatter.faq.2.answer':
		'No. Il formattatore modifica solo la presentazione visiva del JSON aggiungendo indentazione e interruzioni di riga corrette. I dati, le chiavi e i valori effettivi rimangono esattamente gli stessi.',
	'tool.json-formatter.faq.3.question': 'Posso ordinare le chiavi JSON?',
	'tool.json-formatter.faq.3.answer':
		'Sì! Abilita l\'opzione "Ordina chiavi" per ordinare alfabeticamente tutte le chiavi negli oggetti. Questo è utile per confrontare file JSON o mantenere un ordinamento coerente.',
	'tool.json-formatter.use_case.0':
		'Debug delle risposte API formattandole per una migliore leggibilità',
	'tool.json-formatter.use_case.1': 'Pulizia di file JSON minimizzati da fonti web',
	'tool.json-formatter.use_case.2':
		'Preparazione dei file di configurazione per il controllo della versione con formattazione coerente',
	'tool.json-formatter.use_case.3':
		'Rendere i dati JSON più presentabili per documentazione o presentazioni',
	'tool.json-formatter.use_case.4':
		'Validazione e formattazione di JSON prima della modifica manuale o della revisione',

	'tool.json-validator.faq.0.question': 'Cosa verifica la validazione JSON?',
	'tool.json-validator.faq.0.answer':
		'La validazione JSON verifica gli errori di sintassi incluse parentesi mancanti, virgolette non abbinate, virgole finali, sequenze di escape non valide e chiavi duplicate negli oggetti.',
	'tool.json-validator.faq.1.question':
		'Qual è la differenza tra validazione di sintassi e schema?',
	'tool.json-validator.faq.1.answer':
		'La validazione della sintassi assicura che il JSON sia ben formato secondo la specifica JSON. La validazione dello schema va oltre controllando se la struttura JSON corrisponde a uno schema predefinito con regole specifiche per tipi di dati, campi obbligatori e vincoli di valore.',
	'tool.json-validator.faq.2.question': 'Posso convalidare JSON con commenti?',
	'tool.json-validator.faq.2.answer':
		'Sì! Questo validatore supporta il formato JSON5, che consente commenti (sia // che /* */), virgole finali e virgolette singole per le stringhe. Rileverà e gestirà automaticamente la sintassi JSON5.',
	'tool.json-validator.use_case.0':
		"Verifica delle risposte API prima di elaborarle nell'applicazione",
	'tool.json-validator.use_case.1':
		'Verifica dei file di configurazione prima della distribuzione per prevenire errori di runtime',
	'tool.json-validator.use_case.2':
		"Convalida dei dati JSON inviati dall'utente in moduli o caricamenti di file",
	'tool.json-validator.use_case.3': 'Debug degli errori di analisi JSON nel tuo codice',
	'tool.json-validator.use_case.4':
		"Assicurazione dell'integrità dei dati durante il trasferimento di JSON tra i sistemi",

	'tool.crypto-hmac.faq.0.question': "Che cos'è HMAC?",
	'tool.crypto-hmac.faq.0.answer':
		"HMAC (Hash-based Message Authentication Code) è un tipo specifico di codice di autenticazione dei messaggi che utilizza una funzione hash crittografica e una chiave segreta. Fornisce sia l'integrità dei dati che l'autenticazione.",
	'tool.crypto-hmac.faq.1.question': 'Quali algoritmi sono supportati?',
	'tool.crypto-hmac.faq.1.answer':
		'Questo strumento supporta più algoritmi HMAC inclusi SHA-256, SHA-512, SHA-1, MD5 e altri. SHA-256 è consigliato per la maggior parte delle moderne applicazioni in quanto fornisce un buon equilibrio tra sicurezza e prestazioni.',
	'tool.crypto-hmac.use_case.0': "Verifica dell'integrità e dell'autenticità delle richieste API",
	'tool.crypto-hmac.use_case.1': 'Creazione di token sicuri per la gestione delle sessioni',
	'tool.crypto-hmac.use_case.2': 'Generazione di firme webhook per servizi come GitHub o Stripe',
	'tool.crypto-hmac.use_case.3':
		"Implementazione dell'autenticazione dei messaggi nella comunicazione di microservizi",
	'tool.crypto-hmac.use_case.4': 'Creazione di checksum per la verifica dei file',

	'tool.json-minifier.faq.0.question': "Che cos'è la minimizzazione JSON?",
	'tool.json-minifier.faq.0.answer':
		'La minimizzazione JSON è il processo di rimozione di tutti i caratteri non necessari dai dati JSON senza modificarne la funzionalità. Ciò include la rimozione di spazi bianchi, interruzioni di riga e commenti per ridurre la dimensione del file.',
	'tool.json-minifier.faq.1.question': 'La minimizzazione influisce sulla funzionalità JSON?',
	'tool.json-minifier.faq.1.answer':
		'No. La minimizzazione rimuove solo i caratteri di formattazione visiva come spazi, tabulazioni e interruzioni di riga. La struttura dati effettiva, le chiavi e i valori rimangono esattamente gli stessi, mantenendo la piena conformità JSON.',
	'tool.json-minifier.faq.2.question': 'Quando devo utilizzare JSON minimizzato?',
	'tool.json-minifier.faq.2.answer':
		"Usa JSON minimizzato negli ambienti di produzione, risposte API e quando trasmetti dati su reti. Riduce l'utilizzo della larghezza di banda e accelera il trasferimento dei dati. Per sviluppo e debug, usa JSON formattato.",
	'tool.json-minifier.use_case.0':
		'Riduzione della dimensione del file per le risposte API per migliorare i tempi di caricamento',
	'tool.json-minifier.use_case.1':
		'Ottimizzazione dei file di configurazione JSON per distribuzioni di produzione',
	'tool.json-minifier.use_case.2':
		"Compressione dei dati prima dell'archiviazione nei database o nello storage locale",
	'tool.json-minifier.use_case.3':
		"Minimizzazione dell'utilizzo della larghezza di banda durante la trasmissione di JSON su reti",
	'tool.json-minifier.use_case.4':
		"Preparazione di file JSON per l'incorporamento nel codice HTML o JavaScript",

	'tool.json-to-yaml.faq.0.question': "Che cos'è la conversione da JSON a YAML?",
	'tool.json-to-yaml.faq.0.answer':
		"La conversione da JSON a YAML trasforma dati JSON in formato YAML, che è più leggibile dall'uomo e comunemente utilizzato per file di configurazione. YAML consente commenti, anchor e una sintassi più flessibile.",
	'tool.json-to-yaml.faq.1.question': 'La conversione è senza perdita?',
	'tool.json-to-yaml.faq.1.answer':
		'Sì! La conversione conserva tutti i dati e la struttura. JSON e YAML possono rappresentare le stesse strutture di dati, quindi nessuna informazione viene persa durante il processo di conversione.',
	'tool.json-to-yaml.use_case.0':
		'Conversione di file di configurazione JSON a YAML per una migliore leggibilità',
	'tool.json-to-yaml.use_case.1': 'Creazione di manifesti Kubernetes da definizioni JSON',
	'tool.json-to-yaml.use_case.2':
		"Migrazione delle configurazioni dell'applicazione dal formato JSON a YAML",
	'tool.json-to-yaml.use_case.3': 'Generazione di file YAML per configurazioni di pipeline CI/CD',

	'tool.json-to-toml.faq.0.question': "Che cos'è la conversione da JSON a TOML?",
	'tool.json-to-toml.faq.0.answer':
		"La conversione da JSON a TOML trasforma dati JSON in formato TOML, progettato per file di configurazione leggibili dall'uomo. TOML utilizza una sintassi semplice con sezioni, coppie chiave-valore e tabelle.",
	'tool.json-to-toml.faq.1.question': 'Quando devo usare TOML al posto di JSON?',
	'tool.json-to-toml.faq.1.answer':
		'Usa TOML per i file di configurazione che devono essere modificati manualmente da umani. La sintassi di TOML è più pulita e intuitiva per le configurazioni, mentre JSON è migliore per la comunicazione da macchina a macchina.',
	'tool.json-to-toml.use_case.0':
		'Conversione di package.json a pyproject.toml per progetti Python',
	'tool.json-to-toml.use_case.1': 'Creazione di file Cargo.toml da configurazioni JSON',
	'tool.json-to-toml.use_case.2':
		"Migrazione delle impostazioni dell'applicazione al formato TOML per una migliore manutenibilità",

	'tool.xml-to-csv.faq.2.question': 'Quali tipi di XML funzionano meglio per la conversione CSV?',
	'tool.xml-to-csv.faq.2.answer':
		'XML con elementi ripetuti (come più tag <row> o <item>) funzionano meglio. Il convertitore rileva automaticamente i nomi degli elementi e gli attributi come intestazioni di colonna.',

	'tool.xml-xpath.faq.2.question': 'Quale versione XPath è supportata?',
	'tool.xml-xpath.faq.2.answer':
		"Questo strumento supporta XPath 1.0, che è la versione più ampiamente implementata. Include tutti gli assi, funzioni e operatori standard per l'interrogazione XML.",

	'tool.xml-xpath.faq.3.question': 'Posso testare XPath su XML non valido?',
	'tool.xml-xpath.faq.3.answer':
		'No. XPath richiede XML ben formato. Se il tuo XML contiene errori di sintassi, correggili prima usando il Validatore o Formattatore XML prima di eseguire query XPath.',

	'tool.xml-minifier.faq.2.question': 'La minificazione affects la funzionalità XML?',
	'tool.xml-minifier.faq.2.answer':
		"No. La minificazione XML rimuove solo spazi bianchi e commenti senza cambiare la struttura o i dati. L'XML minificato rimane completamente valido e funzionalmente identico.",

	'tool.json-to-markdown.faq.0.question': "Che cos'è la conversione da JSON a tabella Markdown?",
	'tool.json-to-markdown.faq.0.answer':
		'Questo strumento converte array di dati JSON in formato di tabella Markdown, rendendo facile visualizzare dati strutturati nella documentazione, file README o qualsiasi piattaforma compatibile con Markdown.',
	'tool.json-to-markdown.faq.1.question': 'Quali strutture JSON sono supportate?',
	'tool.json-to-markdown.faq.1.answer':
		"Lo strumento funziona meglio con array di oggetti. Ogni oggetto diventa una riga nella tabella e le proprietà dell'oggetto diventano colonne. Gli oggetti annidati vengono appiattiti usando la notazione a punto.",
	'tool.json-to-markdown.use_case.0': 'Creazione di tabelle dati per file README e documentazione',
	'tool.json-to-markdown.use_case.1':
		'Conversione di esempi di risposte API a tabelle di documentazione',
	'tool.json-to-markdown.use_case.2':
		'Generazione di tabelle Markdown da dati di fogli di calcolo esportati come JSON',
	'tool.json-to-markdown.use_case.3':
		'Visualizzazione delle opzioni di configurazione nella documentazione del progetto',

	'tool.json-to-csv.faq.0.question': "Che cos'è la conversione da JSON a CSV?",
	'tool.json-to-csv.faq.0.answer':
		'La conversione da JSON a CSV trasforma dati JSON strutturati (di solito un array di oggetti) in un formato Comma-Separated Values piatto. Questo è ideale per importare dati in fogli di calcolo come Excel o Google Sheets.',
	'tool.json-to-csv.faq.1.question': 'Quali strutture JSON funzionano meglio?',
	'tool.json-to-csv.faq.1.answer':
		'Lo strumento funziona meglio con un array piatto di oggetti in cui ogni oggetto ha le stesse chiavi. Queste chiavi diventano le intestazioni CSV e i valori diventano le righe. Gli oggetti annidati o gli array di solito vengono appiattiti.',
	'tool.json-to-csv.use_case.0': "Esportazione di dati API in Excel per l'analisi aziendale",
	'tool.json-to-csv.use_case.1':
		'Conversione di esportazioni JSON di database in CSV per importazioni in blocco',
	'tool.json-to-csv.use_case.2':
		"Preparazione di set di dati JSON per l'addestramento di modelli di machine learning in formato CSV",
	'tool.json-to-csv.use_case.3':
		'Generazione di dati di report per applicazioni di fogli di calcolo',

	'tool.json-jsonpath.faq.0.question': "Che cos'è JSONPath?",
	'tool.json-jsonpath.faq.0.answer':
		'JSONPath è un linguaggio di query per JSON che consente di estrarre dati specifici da documenti JSON. È simile a XPath per XML e utilizza la notazione a punto e i filtri per navigare le strutture JSON.',
	'tool.json-jsonpath.faq.1.question': 'Come funziona la sintassi JSONPath?',
	'tool.json-jsonpath.faq.1.answer':
		'JSONPath utilizza espressioni come $.store.book[*].title per navigare attraverso JSON. $ rappresenta la radice, . accede alle proprietà, [*] seleziona tutti gli elementi in un array e vari operatori possono filtrare e trasformare i risultati.',
	'tool.json-jsonpath.faq.2.question': 'Cosa posso fare con i risultati di JSONPath?',
	'tool.json-jsonpath.faq.2.answer':
		"Puoi estrarre valori specifici, filtrare array, eseguire calcoli e trasformare dati JSON. JSONPath è utile per il test di API, l'estrazione di dati e la convalida della struttura JSON nelle applicazioni.",
	'tool.json-jsonpath.use_case.0': 'Estrazione di campi specifici dalle risposte API',
	'tool.json-jsonpath.use_case.1': 'Filtraggio e interrogazione di grandi set di dati JSON',
	'tool.json-jsonpath.use_case.2': 'Test delle risposte API nei test automatizzati',
	'tool.json-jsonpath.use_case.3':
		'Convalida della struttura e del contenuto JSON nelle pipeline dati',

	'tool.json-jmespath.faq.0.question': "Che cos'è JMESPath?",
	'tool.json-jmespath.faq.0.answer':
		'JMESPath è un linguaggio di query per JSON che ti consente di estrarre e trasformare elementi da documenti JSON. Fornisce capacità di trasformazione dati più avanzate rispetto a JSONPath, inclusi filtri, mapping e funzioni di aggregazione.',
	'tool.json-jmespath.faq.1.question': 'Qual è la differenza tra JMESPath e JSONPath?',
	'tool.json-jmespath.faq.1.answer':
		"JMESPath offre funzionalità di trasformazione dati più potenti come funzioni, filtri ed espressioni pipe. Mentre JSONPath è principalmente per l'estrazione, JMESPath può rimodellare, filtrare e trasformare dati JSON in nuove strutture.",
	'tool.json-jmespath.faq.2.question': 'Quali sono le operazioni JMESPath comuni?',
	'tool.json-jmespath.faq.2.answer':
		'Le operazioni comuni includono filtraggio con [?condition], selezione di campi con {key: value}, ordinamento con sort_by() e aggregazione di dati con funzioni come length(), sum() e type(). Puoi anche concatenare operazioni con | per trasformazioni complesse.',
	'tool.json-jmespath.use_case.0':
		'Trasformazione delle risposte API per corrispondere alle strutture dati richieste',
	'tool.json-jmespath.use_case.1':
		'Filtraggio e rimodellamento di dati da documenti JSON complessi',
	'tool.json-jmespath.use_case.2':
		'Estrazione di informazioni specifiche da strutture JSON annidate',
	'tool.json-jmespath.use_case.3': 'Pulisci le risposte JSON per un consumo frontend più semplice',

	// Diff JSON
	'tool.json-diff.display_name': 'Diff JSON',
	'tool.json-diff.tagline': 'Confronta due documenti JSON',
	'tool.json-diff.description':
		"Uno strumento di confronto JSON semantico potente. Incolla due documenti JSON per vedere istantaneamente le differenze, ignorando l'ordine delle chiavi e gli spazi bianchi arbitrari. Perfetto per il debug dei cambiamenti API o la verifica degli aggiornamenti di configurazione.",
	'tool.json-diff.primary_keyword': 'strumento diff json',
	'tool.json-diff.meta_title': 'Strumento Diff JSON - Confronta JSON Online',
	'tool.json-diff.meta_description':
		"Confronta due documenti JSON semanticamente online. Lo strumento diff JSON ignora l'ordine delle chiavi e le differenze di formattazione per mostrarti esattamente cosa è cambiato.",
	'tool.json-diff.operation': 'Confronta',
	'tool.json-diff.faq.0.question': "Ignora l'ordine delle chiavi?",
	'tool.json-diff.faq.0.answer':
		'Sì. Il nostro motore di diff analizza la struttura JSON in rappresentazioni normalizzate, il che significa che {"a": 1, "b": 2} e {"b": 2, "a": 1} sono considerati identici.',
	'tool.json-diff.faq.1.question': 'Gestisce file JSON di grandi dimensioni?',
	'tool.json-diff.faq.1.answer':
		'Sì, il confronto viene eseguito in modo efficiente nel tuo browser e visualizza aggiunte, rimozioni e modifiche riga per riga.',
	'tool.json-diff.faq.2.question': 'I miei dati sono al sicuro?',
	'tool.json-diff.faq.2.answer':
		'Assolutamente. Il confronto avviene interamente a livello locale nel tuo browser. Nessun dato JSON viene mai inviato ai nostri server.',
	'tool.json-diff.use_case.0':
		'Confrontare le risposte di diverse versioni API per mappare le regressioni',
	'tool.json-diff.use_case.1':
		'Eseguire il debug di modifiche di configurazione impreviste nei file delle impostazioni di produzione',
	'tool.json-diff.use_case.2':
		'Esaminare i conflitti di merge git che coinvolgono manifest JSON o file lock',
	'tool.json-diff.use_case.3':
		'Trovare discrepanze tra le esportazioni dei database di staging e di produzione',

	// ── Strumenti XML FAQ e Casi d'Uso ──────────────────────────────────────────
	'tool.xml-formatter.faq.0.question': "Cos'è la formattazione XML?",
	'tool.xml-formatter.faq.0.answer':
		'La formattazione XML è il processo di organizzazione del codice XML con indentazione e interruzioni di riga appropriate per renderlo più leggibile e facile da mantenere. Questo aiuta gli sviluppatori a comprendere la struttura e la gerarchia del documento.',
	'tool.xml-formatter.faq.1.question': "Posso personalizzare l'indentazione?",
	'tool.xml-formatter.faq.1.answer':
		"Sì! Puoi scegliere tra 2 spazi, 4 spazi o tabulazioni per l'indentazione. Il formattatore preserva la struttura XML applicando lo stile di formattazione preferito.",
	'tool.xml-formatter.faq.2.question': 'Il formattatore preserva i commenti?',
	'tool.xml-formatter.faq.2.answer':
		"Sì, il formattatore XML preserva tutti i commenti nelle loro posizioni originali. Modifica solo l'indentazione e le interruzioni di riga per migliorare la leggibilità senza influire sul contenuto o sulla struttura.",
	'tool.xml-formatter.use_case.0':
		'Rendere i file XML più leggibili per la documentazione e le revisioni del codice',
	'tool.xml-formatter.use_case.1': 'Pulire XML minimizzato proveniente da risposte web o API',
	'tool.xml-formatter.use_case.2': 'Standardizzare la formattazione XML tra i progetti del team',
	'tool.xml-formatter.use_case.3':
		'Eseguire il debug della struttura XML migliorando la gerarchia visiva',
	'tool.xml-formatter.use_case.4':
		'Preparare i file XML per il controllo di versione con una formattazione coerente',

	'tool.xml-validator.faq.0.question': 'Cosa controlla la validazione XML?',
	'tool.xml-validator.faq.0.answer':
		"La validazione XML verifica la ben-formazione, inclusi l'annidamento corretto dei tag, la corrispondenza dei tag di apertura/chiusura, la sintassi valida degli attributi, la codifica corretta dei caratteri e la conformità alle regole delle specifiche XML.",
	'tool.xml-validator.faq.1.question': 'Qual è la differenza tra XML ben formato e XML valido?',
	'tool.xml-validator.faq.1.answer':
		'Un XML ben formato segue le regole sintattiche di base ma può presentare problemi strutturali. Un XML valido è ben formato E conforme a un DTD o XML Schema specifico che definisce la struttura e il contenuto consentiti.',
	'tool.xml-validator.faq.2.question': 'Come posso correggere gli errori di validazione XML?',
	'tool.xml-validator.faq.2.answer':
		'Il validatore mostra i numeri esatti di riga e colonna per ogni errore. Le correzioni comuni includono: chiudere i tag aperti, correggere i tag non corrispondenti, rimuovere gli attributi duplicati e garantire la codifica corretta. Clicca su un errore per vedere spiegazioni dettagliate.',
	'tool.xml-validator.use_case.0':
		"Validare le risposte API prima dell'elaborazione nelle applicazioni",
	'tool.xml-validator.use_case.1':
		'Controllare i file di configurazione prima della distribuzione per evitare errori',
	'tool.xml-validator.use_case.2':
		'Verificare le importazioni di dati XML da sistemi di terze parti',
	'tool.xml-validator.use_case.3':
		'Eseguire il debug di problemi di parsing XML in ambienti di sviluppo',
	'tool.xml-validator.use_case.4':
		"Garantire la conformità XML prima dell'invio a sistemi aziendali",

	'tool.xml-to-json.faq.0.question': 'Come funziona la conversione da XML a JSON?',
	'tool.xml-to-json.faq.0.answer':
		'La conversione mappa gli elementi XML in oggetti JSON, gli attributi in coppie chiave-valore e il contenuto testuale in valori stringa. I namespace XML vengono preservati e gli elementi multipli con lo stesso nome diventano array.',
	'tool.xml-to-json.faq.1.question': 'La conversione è reversibile?',
	'tool.xml-to-json.faq.1.answer':
		"Principalmente sì, ma alcune caratteristiche XML come commenti, istruzioni di elaborazione e l'ordine degli attributi potrebbero andare persi. La struttura dati principale rimane intatta per la conversione di andata e ritorno.",
	'tool.xml-to-json.faq.2.question': 'Come vengono gestiti gli attributi XML in JSON?',
	'tool.xml-to-json.faq.2.answer':
		'Gli attributi XML vengono convertiti in proprietà JSON con un prefisso "@" per impostazione predefinita. Questo li distingue dagli elementi figli. Puoi personalizzare questo comportamento nelle impostazioni avanzate.',
	'tool.xml-to-json.use_case.0': 'Convertire risposte API SOAP in JSON per applicazioni moderne',
	'tool.xml-to-json.use_case.1': 'Elaborare file di configurazione XML in applicazioni JavaScript',
	'tool.xml-to-json.use_case.2': 'Migrare dati XML legacy verso sistemi moderni basati su JSON',
	'tool.xml-to-json.use_case.3': "Estrarre dati dalle sitemap XML per l'analisi",
	'tool.xml-to-json.use_case.4':
		'Trasformare i feed RSS in JSON per il consumo da parte di app mobili',

	'tool.json-to-xml.faq.0.question': "Cos'è la conversione da JSON a XML?",
	'tool.json-to-xml.faq.0.answer':
		'La conversione da JSON a XML trasforma i dati JSON in formato XML, mappando gli oggetti in elementi, gli array in elementi ripetuti e i valori primitivi in contenuto testuale. Ciò consente la compatibilità con sistemi che richiedono input XML.',
	'tool.json-to-xml.faq.1.question': 'Come vengono gestiti gli array nella conversione?',
	'tool.json-to-xml.faq.1.answer':
		"I tasti array JSON diventano più elementi XML con lo stesso nome di tag. Puoi configurare se utilizzare elementi wrapper o ripetere lo stesso tag elemento per ogni elemento dell'array.",
	'tool.json-to-xml.faq.2.question': 'In che modo il convertitore gestisce i caratteri speciali?',
	'tool.json-to-xml.faq.2.answer':
		'I caratteri speciali vengono automaticamente escapati secondo gli standard XML. Ciò include &, <, >, ", e \', che vengono convertiti nelle corrispondenti entità XML per garantire un output XML valido.',
	'tool.json-to-xml.use_case.0': 'Creazione di sitemap XML da dati JSON',
	'tool.json-to-xml.use_case.1': 'Generazione di feed RSS/Atom da contenuti JSON',
	'tool.json-to-xml.use_case.2':
		'Conversione di risposte API per sistemi legacy che richiedono XML',
	'tool.json-to-xml.use_case.3':
		'Creazione di file di configurazione per applicazioni Java da JSON',
	'tool.json-to-xml.use_case.4': 'Generazione di buste SOAP da payload JSON per servizi web',

	'tool.xml-to-yaml.faq.0.question': 'Perché convertire XML in YAML?',
	'tool.xml-to-yaml.faq.0.answer':
		"Il formato YAML è più leggibile dall'uomo e più facile da modificare manualmente rispetto all'XML. È comunemente usato per file di configurazione, documenti e scambio dati dove la leggibilità è importante.",
	'tool.xml-to-yaml.faq.1.question': 'Come vengono gestiti gli attributi XML?',
	'tool.xml-to-yaml.faq.1.answer':
		"Gli attributi XML vengono tipicamente convertiti in coppie chiave-valore all'interno dell'elemento YAML. Puoi configurare l'uso di una sintassi speciale o trattarli come proprietà regolari.",
	'tool.xml-to-yaml.faq.2.question': "L'XML annidato complesso può essere convertito in YAML?",
	'tool.xml-to-yaml.faq.2.answer':
		"Sì! Il convertitore gestisce l'annidamento arbitrariamente profondo, il contenuto misto e le strutture XML complesse. Il YAML risultante mantiene la stessa gerarchia di dati in un formato più leggibile.",
	'tool.xml-to-yaml.use_case.0': 'Convertire configurazioni XML di Spring Framework in YAML',
	'tool.xml-to-yaml.use_case.1':
		'Migrare script di build dal formato XML a un formato YAML più leggibile',
	'tool.xml-to-yaml.use_case.2': 'Creare risorse Kubernetes da template XML',
	'tool.xml-to-yaml.use_case.3': 'Elaborare documenti XML per scopi di documentazione',
	'tool.xml-to-yaml.use_case.4': 'Trasformare dati XML per playbook Ansible e automazione',

	'tool.xml-to-csv.faq.0.question': 'Come funziona la conversione da XML a CSV?',
	'tool.xml-to-csv.faq.0.answer':
		"Il convertitore estrae gli elementi ripetuti dall'XML e crea righe in CSV, con gli attributi degli elementi e gli elementi figli che diventano colonne. Puoi selezionare quali elementi convertire e personalizzare il formato di output.",
	'tool.xml-to-csv.faq.1.question': 'Quali strutture XML funzionano meglio per la conversione CSV?',
	'tool.xml-to-csv.faq.1.answer':
		"L'XML con elementi ripetuti simili a record funziona meglio. Ogni elemento ripetuto diventa una riga e le sue proprietà diventano colonne. Le strutture profondamente annidate potrebbero dover essere appiattite.",
	'tool.xml-to-csv.use_case.0': 'Estrarre dati da report XML in formato foglio di calcolo',
	'tool.xml-to-csv.use_case.1': "Convertire esportazioni XML da database in CSV per l'analisi",
	'tool.xml-to-csv.use_case.2': "Elaborare log XML per l'analisi dei dati in Excel",
	'tool.xml-to-csv.use_case.3':
		'Migrare cataloghi prodotti dal formato XML a CSV per piattaforme e-commerce',
	'tool.xml-to-csv.use_case.4': 'Analizzare le risposte API XML convertendole in formato tabulare',

	'tool.xml-minifier.faq.0.question': "Cos'è la minimizzazione XML?",
	'tool.xml-minifier.faq.0.answer':
		"La minimizzazione XML rimuove tutti i caratteri non necessari dall'XML senza modificarne la funzionalità. Ciò include spazi bianchi, interruzioni di riga e commenti per ridurre la dimensione del file.",
	'tool.xml-minifier.faq.1.question': "La minimizzazione influisce sull'elaborazione XML?",
	'tool.xml-minifier.faq.1.answer':
		"No. I parser XML ignorano gli spazi bianchi tra i tag per impostazione predefinita, quindi l'XML minimizzato viene elaborato in modo identico all'XML formattato ma si carica più velocemente grazie alla dimensione ridotta.",
	'tool.xml-minifier.use_case.0': 'Ridurre le dimensioni dei file per risposte API più veloci',
	'tool.xml-minifier.use_case.1': 'Ottimizzare i file XML per ambienti di produzione',
	'tool.xml-minifier.use_case.2':
		"Minimizzare l'uso della larghezza di banda durante la trasmissione di dati XML",
	'tool.xml-minifier.use_case.3': "Preparare file XML per l'incorporamento in altri documenti",

	'tool.xml-xpath.faq.0.question': "Cos'è XPath?",
	'tool.xml-xpath.faq.0.answer':
		'XPath è un linguaggio di query per la selezione di nodi da documenti XML. Utilizza espressioni di percorso per navigare tra elementi e attributi, in modo simile ai percorsi del file system.',
	'tool.xml-xpath.faq.1.question': 'Cosa possono fare le espressioni XPath?',
	'tool.xml-xpath.faq.1.answer':
		"XPath può selezionare elementi per nome, valore dell'attributo, posizione o contenuto. Supporta condizioni complesse, funzioni per la manipolazione del testo e operazioni matematiche per query avanzate.",
	'tool.xml-xpath.use_case.0': 'Estrarre dati specifici da documenti XML di grandi dimensioni',
	'tool.xml-xpath.use_case.1': 'Testare i dati XML in suite di test automatizzati',
	'tool.xml-xpath.use_case.2': 'Trasformare i dati XML utilizzando template XSLT',
	'tool.xml-xpath.use_case.3': 'Validare la struttura e il contenuto XML a livello programmatico'
};

export default registryIt;

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
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formatta, valida e converti file TOML. Converti TOML a JSON e YAML in sicurezza.',
	'category.toml.primary_keyword': 'strumenti toml',
	'category.text.display_name': 'Testo',
	'category.text.description':
		'Analizza, conta e trasforma testo semplice. Misura parole, caratteri, struttura e tempo di lettura in tempo reale.',
	'category.text.primary_keyword': 'strumenti testo',
	'category.ai.display_name': 'IA',
	'category.ai.description':
		'Conta token IA, stima i costi LLM, comprimi prompt e crea prompt di sistema pronti per la produzione per GPT-4o, Claude, Llama, Gemini e Mistral senza caricare testo.',
	'category.ai.primary_keyword': 'strumenti ia',
	// ── Strumenti IA ────────────────────────────────────────────────────────
	'tool.ai-token-counter.display_name': 'Contatore Token LLM',
	'tool.ai-token-counter.tagline': 'Conta token e stima il costo di input sui principali LLM',
	'tool.ai-token-counter.description':
		'Incolla prompt, documenti o trascrizioni per contare con precisione i token GPT-4o e stimare l’uso di Claude, Llama 3, Gemini e Mistral con costi e token per parola.',
	'tool.ai-token-counter.primary_keyword': 'contatore token llm',
	'tool.ai-token-counter.meta_title': 'Contatore Token LLM per GPT-4o e Claude — fmtly.dev',
	'tool.ai-token-counter.meta_description':
		'Conta token GPT-4o e stima uso di Claude, Llama 3, Gemini e Mistral. Rapporto token/parola e costo di input nel browser.',
	'tool.ai-token-counter.operation': 'Conta token',
	'tool.ai-token-counter.faq.0.question': 'Il conteggio token è esatto per ogni modello?',
	'tool.ai-token-counter.faq.0.answer':
		'GPT-4o usa un tokenizer reale caricato su richiesta. Claude, Llama 3, Gemini e Mistral usano stime calibrate nel browser perché i loro tokenizer di produzione esatti non sono distribuiti per uso locale identico.',
	'tool.ai-token-counter.faq.1.question': 'Il mio prompt lascia il browser?',
	'tool.ai-token-counter.faq.1.answer':
		'No. Il testo viene elaborato localmente nel browser e gli input grandi passano a un Web Worker per mantenere l’interfaccia reattiva.',
	'tool.ai-token-counter.faq.2.question': 'Come viene stimato il costo?',
	'tool.ai-token-counter.faq.2.answer':
		'Il costo usa il profilo del modello selezionato e il prezzo per milione di token di input. Serve per pianificazione e confronto, non per riconciliare fatture.',
	'tool.ai-token-counter.faq.3.question': 'Posso confrontare la densità token tra modelli?',
	'tool.ai-token-counter.faq.3.answer':
		'Sì. La tabella mostra conteggio token, token per parola e costo di input stimato per ogni famiglia di modelli supportata.',
	'tool.ai-token-counter.use_case.0':
		'Stimare la dimensione di un prompt prima di chiamare una API LLM',
	'tool.ai-token-counter.use_case.1':
		'Confrontare costi token tra GPT-4o, Claude, Llama, Gemini e Mistral',
	'tool.ai-token-counter.use_case.2':
		'Verificare se documenti lunghi rientrano nella finestra di contesto',
	'tool.ai-token-counter.use_case.3':
		'Misurare densità token/parola per prompt, dataset e trascrizioni',

	'tool.ai-token-optimizer.display_name': 'Ottimizzatore Token Prompt',
	'tool.ai-token-optimizer.tagline': 'Accorcia prompt preservando intento e requisiti di output',
	'tool.ai-token-optimizer.description':
		'Comprimi prompt IA rimuovendo parole riempitive, normalizzando spazi, semplificando Markdown e opzionalmente abbreviando schemi comuni con tracciamento del risparmio.',
	'tool.ai-token-optimizer.primary_keyword': 'ottimizzatore token prompt',
	'tool.ai-token-optimizer.meta_title': 'Ottimizzatore Token — Accorcia Prompt IA | fmtly.dev',
	'tool.ai-token-optimizer.meta_description':
		'Accorcia prompt IA preservando il significato. Rimuovi riempitivi, comprimi spazi, confronta token prima/dopo e stima il risparmio.',
	'tool.ai-token-optimizer.operation': 'Ottimizza prompt',
	'tool.ai-token-optimizer.faq.0.question': 'L’ottimizzatore riscrive creativamente il prompt?',
	'tool.ai-token-optimizer.faq.0.answer':
		'No. Applica riduzioni conservative e trasparenti, come rimozione di riempitivi, compressione spazi e pulizia Markdown, per mantenere intatto l’intento.',
	'tool.ai-token-optimizer.faq.1.question': 'Posso controllare cosa viene ottimizzato?',
	'tool.ai-token-optimizer.faq.1.answer':
		'Sì. Puoi attivare separatamente rimozione riempitivi, compressione spazi, semplificazione Markdown e abbreviazioni note.',
	'tool.ai-token-optimizer.faq.2.question': 'Come vengono calcolati i token risparmiati?',
	'tool.ai-token-optimizer.faq.2.answer':
		'Lo strumento conta il prompt originale e quello ottimizzato con il profilo selezionato, poi mostra token risparmiati, percentuale e riduzione stimata del costo.',
	'tool.ai-token-optimizer.faq.3.question': 'È sicuro per prompt lunghi?',
	'tool.ai-token-optimizer.faq.3.answer':
		'I prompt grandi oltre 500KB vengono elaborati in un Web Worker, mantenendo l’interfaccia reattiva e tutto il testo locale.',
	'tool.ai-token-optimizer.use_case.0': 'Ridurre la spesa API sui prompt di sistema ripetuti',
	'tool.ai-token-optimizer.use_case.1':
		'Far rientrare prompt in finestre di contesto più strette senza cambiare intento',
	'tool.ai-token-optimizer.use_case.2':
		'Pulire template di prompt prima di condividerli con il team',
	'tool.ai-token-optimizer.use_case.3':
		'Confrontare budget token prima/dopo durante il prompt engineering',
	'tool.ai-system-prompt-builder.display_name': 'Generatore di Prompt di Sistema',
	'tool.ai-system-prompt-builder.tagline':
		'Crea prompt di sistema pronti per la produzione da template strutturati',
	'tool.ai-system-prompt-builder.description':
		'Componi prompt di sistema di alta qualità per assistenti di codice, analisti dati, traduttori e agenti di supporto con sezioni strutturate, limiti di sicurezza, controlli qualità ed esportazione JSON OpenAI.',
	'tool.ai-system-prompt-builder.primary_keyword': 'generatore prompt di sistema',
	'tool.ai-system-prompt-builder.meta_title':
		'Generatore di Prompt di Sistema per Assistenti IA — fmtly.dev',
	'tool.ai-system-prompt-builder.meta_description':
		'Crea prompt di sistema chiari per assistenti IA nel browser. Usa template, vincoli, esempi, regole di sicurezza, controlli qualità ed esporta testo o JSON OpenAI.',
	'tool.ai-system-prompt-builder.operation': 'Crea prompt',
	'tool.ai-system-prompt-builder.faq.0.question': 'Che cos’è un prompt di sistema?',
	'tool.ai-system-prompt-builder.faq.0.answer':
		'Un prompt di sistema definisce ruolo, obiettivo, contesto operativo, limiti e regole di output dell’assistente prima del messaggio utente.',
	'tool.ai-system-prompt-builder.faq.1.question': 'Questo strumento chiama un modello IA?',
	'tool.ai-system-prompt-builder.faq.1.answer':
		'No. Assembla il prompt in modo deterministico nel browser. Nulla viene caricato e nessun modello riceve il tuo testo.',
	'tool.ai-system-prompt-builder.faq.2.question': 'Posso esportare messaggi chat OpenAI?',
	'tool.ai-system-prompt-builder.faq.2.answer':
		'Sì. Imposta il formato di output su messaggi JSON OpenAI per esportare un array con ruolo system da incollare in codice API o test di prompt.',
	'tool.ai-system-prompt-builder.faq.3.question': 'È sicuro per blocchi di contesto molto grandi?',
	'tool.ai-system-prompt-builder.faq.3.answer':
		'Gli input grandi del generatore sopra 500KB vengono elaborati in un Web Worker, mantenendo reattiva l’interfaccia e il trattamento locale.',
	'tool.ai-system-prompt-builder.use_case.0':
		'Creare prompt di sistema riutilizzabili per funzionalità di prodotti IA',
	'tool.ai-system-prompt-builder.use_case.1':
		'Standardizzare il comportamento di assistenti di codice, analisti, traduttori e agenti di supporto',
	'tool.ai-system-prompt-builder.use_case.2':
		'Esportare prompt di sistema come testo semplice o messaggi JSON compatibili OpenAI',
	'tool.ai-system-prompt-builder.use_case.3':
		'Aggiungere limiti di sicurezza, guida al ragionamento, esempi e controlli qualità ai prompt',
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
	'tool.xml-to-json-schema.display_name': 'XML a JSON Schema',
	'tool.xml-to-json-schema.tagline': 'Inferisci JSON Schema dalla struttura XML',
	'tool.xml-to-json-schema.description':
		'Genera uno JSON Schema Draft 2020-12 da XML analizzando struttura degli elementi, attributi e cardinalità. Gli elementi ripetuti vengono inferiti come array e i campi condivisi come required.',
	'tool.xml-to-json-schema.primary_keyword': 'xml a json schema',
	'tool.xml-to-json-schema.meta_title': 'Generatore XML a JSON Schema — fmtly.dev',
	'tool.xml-to-json-schema.meta_description':
		'Inferisci JSON Schema da XML nel browser. Rileva automaticamente strutture annidate, elementi ripetuti e campi obbligatori.',
	'tool.xml-to-json-schema.operation': 'Genera Schema',
	'tool.xml-to-json-schema.faq.0.question': 'Come viene inferita la cardinalità da XML?',
	'tool.xml-to-json-schema.faq.0.answer':
		'Quando elementi fratelli con lo stesso nome si ripetono sotto lo stesso padre, vengono inferiti come array. Le occorrenze singole restano campi scalari o oggetto.',
	'tool.xml-to-json-schema.faq.1.question':
		'Come sono rappresentati gli attributi XML nello schema?',
	'tool.xml-to-json-schema.faq.1.answer':
		'Gli attributi sono inclusi come proprietà normali usando il formato chiave parsato (ad esempio @_id), così da validarli insieme agli elementi figli.',
	'tool.xml-to-json-schema.faq.2.question': 'Quale versione di JSON Schema viene generata?',
	'tool.xml-to-json-schema.faq.2.answer':
		"L'output usa JSON Schema Draft 2020-12 e include parole chiave standard come $schema, type, properties, required e items.",
	'tool.xml-to-json-schema.use_case.0':
		'Creare schemi di validazione iniziali da payload XML esistenti',
	'tool.xml-to-json-schema.use_case.1':
		'Documentare strutture complesse di feed XML per sistemi downstream',
	'tool.xml-to-json-schema.use_case.2':
		'Generare uno schema base prima di irrigidire i vincoli manualmente',
	'tool.xml-to-json-schema.use_case.3':
		'Portare integrazioni XML in workflow di validazione orientati al JSON',

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
	'tool.toml-validator.display_name': 'Validatore TOML',
	'tool.toml-validator.tagline': 'Valida la sintassi TOML prima di formattare o convertire',
	'tool.toml-validator.description':
		'Valida file di configurazione TOML localmente nel browser. Rileva errori di sintassi prima di salvare, convertire o confrontare.',
	'tool.toml-validator.primary_keyword': 'validatore toml',
	'tool.toml-validator.meta_title': 'Validatore TOML — fmtly.dev',
	'tool.toml-validator.meta_description':
		'Valida TOML nel browser e intercetta errori di sintassi prima di formattare o convertire.',
	'tool.toml-validator.operation': 'Valida',
	'tool.toml-to-json.display_name': 'Da TOML a JSON',
	'tool.toml-to-json.tagline': 'Converti documenti TOML in JSON',
	'tool.toml-to-json.description':
		'Converti dati di configurazione TOML in JSON formattato direttamente nel browser. Mantieni tabelle annidate, array e valori scalari senza caricare file.',
	'tool.toml-to-json.primary_keyword': 'toml a json',
	'tool.toml-to-json.meta_title': 'Convertitore da TOML a JSON — fmtly.dev',
	'tool.toml-to-json.meta_description':
		'Converti TOML in JSON formattato all’istante nel browser. Nessun dato lascia il tuo dispositivo.',
	'tool.toml-to-json.operation': 'Converti',
	'tool.toml-to-yaml.display_name': 'Da TOML a YAML',
	'tool.toml-to-yaml.tagline': 'Converti documenti TOML in YAML',
	'tool.toml-to-yaml.description':
		'Converti dati di configurazione TOML in YAML leggibile direttamente nel browser. Mantieni tabelle annidate, array e valori scalari principali.',
	'tool.toml-to-yaml.primary_keyword': 'toml a yaml',
	'tool.toml-to-yaml.meta_title': 'Convertitore da TOML a YAML — fmtly.dev',
	'tool.toml-to-yaml.meta_description':
		'Converti TOML in YAML all’istante nel browser. Nessun upload richiesto.',
	'tool.toml-to-yaml.operation': 'Converti',
	'tool.toml-diff.display_name': 'Confronto TOML',
	'tool.toml-diff.tagline': 'Confronta due documenti TOML affiancati',
	'tool.toml-diff.description':
		'Confronta due documenti TOML ed evidenzia chiavi aggiunte, rimosse e modificate. Controlla le modifiche di configurazione senza uscire dal browser.',
	'tool.toml-diff.primary_keyword': 'confronto toml',
	'tool.toml-diff.meta_title': 'Strumento di Confronto TOML — fmtly.dev',
	'tool.toml-diff.meta_description':
		'Confronta due documenti TOML nel browser ed evidenzia ogni modifica.',
	'tool.toml-diff.operation': 'Confronta',
	'tool.toml-formatter.faq.0.question': 'La formattazione cambia i valori TOML?',
	'tool.toml-formatter.faq.0.answer':
		'No. Riscrive TOML valido in un layout normalizzato senza modificare i valori o la struttura dati interpretata.',
	'tool.toml-formatter.faq.1.question':
		'Quando dovrei usare il formattatore invece del validatore?',
	'tool.toml-formatter.faq.1.answer':
		'Usa il validatore se vuoi solo controllare la sintassi. Usa il formattatore quando il TOML è già valido e vuoi un output più pulito e coerente.',
	'tool.toml-formatter.use_case.0': 'Uniformare pyproject.toml prima del commit',
	'tool.toml-formatter.use_case.1':
		'Ripulire snippet di configurazione copiati dalla documentazione',
	'tool.toml-formatter.use_case.2': 'Rendere più leggibili sezioni TOML lunghe',
	'tool.toml-formatter.use_case.3': 'Preparare TOML prima di confrontarlo o convertirlo',
	'tool.toml-validator.faq.0.question': 'Quali problemi TOML rileva il validatore?',
	'tool.toml-validator.faq.0.answer':
		'Rileva errori di parsing come stringhe mal formate, sintassi di tabelle non valida, array rotti e altri problemi di sintassi TOML.',
	'tool.toml-validator.faq.1.question': 'Il validatore TOML supporta schemi?',
	'tool.toml-validator.faq.1.answer':
		'No. Valida solo la sintassi TOML. È utile per confermare che un documento venga analizzato correttamente prima di formattarlo, convertirlo o confrontarlo.',
	'tool.toml-validator.use_case.0': 'Controllare pyproject.toml prima di eseguire tool di build',
	'tool.toml-validator.use_case.1': 'Trovare errori di sintassi nelle configurazioni applicative',
	'tool.toml-validator.use_case.2': 'Verificare TOML copiato dalla documentazione di pacchetti',
	'tool.toml-validator.use_case.3': 'Confermare modifiche di configurazione prima del confronto',
	'tool.toml-to-json.faq.0.question': 'Tabelle annidate e array vengono mantenuti in JSON?',
	'tool.toml-to-json.faq.0.answer':
		'Sì. Gli oggetti TOML analizzati vengono convertiti in oggetti e array JSON equivalenti, quindi la struttura complessiva viene mantenuta.',
	'tool.toml-to-json.faq.1.question': 'Quando è utile convertire da TOML a JSON?',
	'tool.toml-to-json.faq.1.answer':
		'È utile quando una toolchain, un’API, uno script o un fixture di test si aspetta JSON invece di TOML, ma gli stessi dati di configurazione devono essere riutilizzati.',
	'tool.toml-to-json.use_case.0': 'Convertire configurazioni TOML in JSON per tool JavaScript',
	'tool.toml-to-json.use_case.1':
		'Ispezionare TOML come struttura più rigida e leggibile da macchine',
	'tool.toml-to-json.use_case.2': 'Riutilizzare impostazioni TOML in fixture o test API',
	'tool.toml-to-json.use_case.3': 'Collegare dati di configurazione tra sistemi TOML e JSON',
	'tool.toml-to-yaml.faq.0.question': 'Perché convertire TOML in YAML?',
	'tool.toml-to-yaml.faq.0.answer':
		'YAML è spesso più rapido da leggere nei workflow di infrastruttura e automazione. La conversione aiuta quando un team o uno strumento preferisce la sintassi YAML.',
	'tool.toml-to-yaml.faq.1.question': 'La struttura TOML viene mantenuta nell’output YAML?',
	'tool.toml-to-yaml.faq.1.answer':
		'Sì. Tabelle, oggetti annidati, array e valori scalari vengono mappati nei rispettivi equivalenti YAML.',
	'tool.toml-to-yaml.use_case.0': 'Riscrivere configurazioni TOML in YAML per workflow di deploy',
	'tool.toml-to-yaml.use_case.1':
		'Condividere impostazioni basate su TOML con team orientati a YAML',
	'tool.toml-to-yaml.use_case.2': 'Confrontare la stessa configurazione in formato TOML e YAML',
	'tool.toml-to-yaml.use_case.3':
		'Migrare configurazioni tra ecosistemi con formati preferiti diversi',
	'tool.toml-diff.faq.0.question': 'TOML Diff è un diff testuale o strutturale?',
	'tool.toml-diff.faq.0.answer':
		'È strutturale. Entrambi gli input vengono prima analizzati come TOML e poi confrontati per chiavi, array e valori.',
	'tool.toml-diff.faq.1.question': 'Posso confrontare documenti TOML non validi?',
	'tool.toml-diff.faq.1.answer':
		'No. Entrambi i lati devono essere TOML validi. Se uno dei due non viene analizzato, lo strumento indica quale lato è invalido.',
	'tool.toml-diff.use_case.0': 'Rivedere modifiche di configurazione tra due release',
	'tool.toml-diff.use_case.1': 'Confrontare impostazioni TOML per ambiente',
	'tool.toml-diff.use_case.2': 'Verificare TOML generato rispetto a una versione attesa',
	'tool.toml-diff.use_case.3':
		'Ispezionare modifiche a pyproject.toml o toolchain prima del commit',

	'tool.toml-minifier.display_name': 'Minificatore TOML',
	'tool.toml-minifier.tagline': 'Minifica e comprimi i file di configurazione TOML',
	'tool.toml-minifier.description':
		'Rimuovi spazi bianchi non necessari e commenti dai file TOML per ridurre la dimensione del file. Minifica le configurazioni TOML localmente nel tuo browser.',
	'tool.toml-minifier.primary_keyword': 'minificatore toml',
	'tool.toml-minifier.meta_title': 'Minificatore TOML — fmtly.dev',
	'tool.toml-minifier.meta_description':
		'Minifica e comprimi i file TOML nel tuo browser. Rimuovi spazi bianchi e commenti in modo sicuro. Nessun dato lascia il tuo dispositivo.',
	'tool.toml-minifier.operation': 'Minifica',
	'tool.toml-minifier.faq.0.question': 'Cosa fa il minificatore TOML?',
	'tool.toml-minifier.faq.0.answer':
		'Analizza il tuo file TOML e lo riscrive con la quantità minima di spazi bianchi richiesta. Anche i commenti vengono rimossi per ridurre la dimensione complessiva del file.',
	'tool.toml-minifier.faq.1.question': 'È sicuro minificare i file TOML?',
	'tool.toml-minifier.faq.1.answer':
		'Sì. Il minificatore garantisce che il significato strutturale dei dati TOML rimanga esattamente lo stesso. Vengono rimossi solo la formattazione e i commenti.',
	'tool.toml-minifier.use_case.0': 'Comprimere grandi configurazioni TOML per il deployment',
	'tool.toml-minifier.use_case.1':
		'Rimuovere i commenti prima di condividere i file di configurazione',
	'tool.toml-minifier.use_case.2':
		'Preparare i file TOML per sistemi embedded o spazio di archiviazione limitato',
	'tool.toml-minifier.use_case.3': 'Normalizzare i file TOML in un formato compatto',

	'tool.toml-to-xml.display_name': 'Da TOML a XML',
	'tool.toml-to-xml.tagline': 'Converti i file di configurazione TOML in formato XML',
	'tool.toml-to-xml.description':
		'Converti strutture dati TOML in documenti XML direttamente nel tuo browser. Mantiene tabelle annidate e array nelle gerarchie di nodi XML.',
	'tool.toml-to-xml.primary_keyword': 'toml a xml',
	'tool.toml-to-xml.meta_title': 'Convertitore da TOML a XML — fmtly.dev',
	'tool.toml-to-xml.meta_description':
		'Converti configurazioni TOML in XML all’istante nel tuo browser. Nessun file caricato.',
	'tool.toml-to-xml.operation': 'Converti',
	'tool.toml-to-xml.faq.0.question': 'Come vengono convertiti gli array TOML in XML?',
	'tool.toml-to-xml.faq.0.answer':
		'L’XML non supporta nativamente array senza nome, quindi gli array sono tipicamente rappresentati ripetendo il nome del nodo o avvolgendo gli elementi in tag di lista standard a seconda del parser.',
	'tool.toml-to-xml.faq.1.question': 'Posso riconvertirlo in TOML in seguito?',
	'tool.toml-to-xml.faq.1.answer':
		'Sì, puoi usare il nostro convertitore da XML a TOML, sebbene alcune informazioni sul tipo (come stringhe esplicite vs numeri) potrebbero essere interpretate diversamente dal parser XML al ritorno.',
	'tool.toml-to-xml.use_case.0': 'Adattare configurazioni TOML moderne per sistemi XML legacy',
	'tool.toml-to-xml.use_case.1': 'Integrare app basate su TOML con API SOAP aziendali',
	'tool.toml-to-xml.use_case.2': 'Convertire dati pyproject.toml in file di build Maven o Ant',
	'tool.toml-to-xml.use_case.3': 'Estrarre la logica di configurazione in set di dati XML generici',

	'tool.toml-to-html.display_name': 'Da TOML a HTML',
	'tool.toml-to-html.tagline': 'Converti configurazione TOML in una tabella HTML responsiva',
	'tool.toml-to-html.description':
		'Trasforma i file di configurazione TOML in tabelle HTML pulite e leggibili. Perfetto per documentazione, reporting e condivisione degli stati di configurazione.',
	'tool.toml-to-html.primary_keyword': 'toml a html',
	'tool.toml-to-html.meta_title': 'Convertitore da TOML a Tabella HTML — fmtly.dev',
	'tool.toml-to-html.meta_description':
		'Converti TOML in tabelle HTML all’istante nel tuo browser. Crea tabelle responsive a partire da dati TOML annidati.',
	'tool.toml-to-html.operation': 'Converti',
	'tool.toml-to-html.faq.0.question': 'Come gestisce le tabelle TOML annidate?',
	'tool.toml-to-html.faq.0.answer':
		'Le tabelle annidate e gli array vengono renderizzati ricorsivamente come tabelle HTML interne, garantendo che la struttura esatta dei dati venga mantenuta visivamente.',
	'tool.toml-to-html.faq.1.question':
		'Posso copiare l’output direttamente nella mia documentazione?',
	'tool.toml-to-html.faq.1.answer':
		'Sì, l’output è HTML standard che può essere copiato e incollato direttamente in file Markdown, Notion, Confluence o in qualsiasi pagina web standard.',
	'tool.toml-to-html.use_case.0': 'Generare report visivi da file di configurazione TOML',
	'tool.toml-to-html.use_case.1':
		'Incollare impostazioni dell’applicazione nella documentazione del progetto',
	'tool.toml-to-html.use_case.2':
		'Visualizzare variabili specifiche dell’ambiente su dashboard interne',
	'tool.toml-to-html.use_case.3':
		'Revisionare complesse strutture TOML annidate in un formato accessibile',

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
	'ui.validator.csv_error.row_width': 'La riga {row} ha {actual} colonne invece di {expected}',
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
	'ui.json_flatten.tab_label': 'Appiattisci',
	'ui.json_flatten.mode_label': 'Modalità',
	'ui.json_flatten.mode.flatten': 'Appiattisci',
	'ui.json_flatten.mode.unflatten': 'Ripristina',
	'ui.json_flatten.separator': 'Separatore',
	'ui.json_flatten.separator_placeholder': '.',
	'ui.json_flatten.error.generic':
		'Impossibile trasformare il JSON con le impostazioni di appiattimento correnti.',
	'ui.json_flatten.error.empty_separator': 'Il separatore non può essere vuoto.',
	'ui.json_flatten.error.invalid_result':
		'Trasformazione non riuscita: output generato non valido.',
	'ui.json_flatten.error.invalid_flat_object':
		"L'input per il ripristino deve essere un oggetto JSON con percorsi appiattiti.",
	'ui.json_flatten.error.root_conflict':
		'La chiave radice non può essere usata insieme ad altri percorsi appiattiti.',
	'ui.json_flatten.error.invalid_path': 'Uno o più percorsi appiattiti non sono validi.',
	'ui.json_flatten.error.invalid_escape':
		'Un percorso appiattito contiene una sequenza di escape non valida.',
	'ui.json_flatten.error.invalid_array_index':
		'Gli indici array nei percorsi appiattiti devono essere interi non negativi.',
	'ui.json_flatten.error.path_conflict':
		'I percorsi appiattiti sono in conflitto e non possono essere fusi in sicurezza.',
	'ui.json_flatten.error.unsafe_key':
		'Il percorso contiene una chiave non sicura (__proto__, constructor o prototype).',
	'ui.json_patch.tab_label': 'Patch',
	'ui.json_patch.mode_label': 'Modalità',
	'ui.json_patch.mode.generate': 'Genera Patch',
	'ui.json_patch.mode.apply': 'Applica Patch',
	'ui.json_patch.target_label': 'JSON di destinazione',
	'ui.json_patch.patch_label': 'JSON Patch (RFC 6902)',
	'ui.json_patch.target_placeholder': 'Incolla qui il JSON di destinazione…',
	'ui.json_patch.patch_placeholder': 'Incolla qui l’array JSON Patch…',
	'ui.json_patch.base_label': 'JSON di base',
	'ui.json_patch.base_hint':
		'Il pannello di input è il JSON base. L’output mostra il patch generato.',
	'ui.json_patch.apply_hint':
		'Il pannello di input è il JSON base. L’output mostra il risultato patchato.',
	'ui.json_patch.result_label_generate': 'Patch generato',
	'ui.json_patch.result_label_apply': 'JSON patchato',
	'ui.json_patch.empty_generate':
		'Aggiungi un JSON di destinazione per generare un patch RFC 6902.',
	'ui.json_patch.empty_apply': 'Aggiungi un array JSON Patch per applicarlo al documento di base.',
	'ui.json_patch.error.generic': 'Impossibile elaborare JSON Patch con gli input correnti.',
	'ui.json_patch.error.invalid_result': 'Operazione patch non riuscita: output non valido.',
	'ui.json_patch.error.invalid_patch_array':
		'L’input patch deve essere un array JSON di operazioni.',
	'ui.json_patch.error.invalid_operation': 'Il patch contiene un oggetto operazione non valido.',
	'ui.json_patch.error.unsupported_operation': 'Il patch contiene un’operazione non supportata.',
	'ui.json_patch.error.missing_from': 'L’operazione patch richiede un percorso "from".',
	'ui.json_patch.error.missing_value': 'L’operazione patch richiede un campo "value".',
	'ui.json_patch.error.invalid_pointer': 'Il patch contiene un percorso JSON Pointer non valido.',
	'ui.json_patch.error.path_not_found':
		'Il percorso patch non è stato trovato nel documento corrente.',
	'ui.json_patch.error.test_failed':
		'L’operazione test del patch è fallita per il percorso indicato.',
	'ui.json_patch.error.invalid_array_index':
		'Il patch fa riferimento a un indice array non valido.',

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
	'tool.xml-xpath.use_case.3': 'Validare la struttura e il contenuto XML a livello programmatico',
	'tool.csv-to-sql.display_name': 'CSV → SQL',
	'tool.csv-to-sql.tagline': 'Convertire dati CSV in istruzioni SQL INSERT',
	'tool.csv-to-sql.description':
		'Converti righe CSV in istruzioni SQL INSERT con inferenza di tipo per numeri e booleani. Nome tabella e dimensione batch configurabili.',
	'tool.csv-to-sql.primary_keyword': 'csv to sql',
	'tool.csv-to-sql.meta_title': 'Convertitore CSV in SQL — fmtly.dev',
	'tool.csv-to-sql.meta_description':
		'Genera istruzioni SQL INSERT da dati CSV nel tuo browser. Nessun dato caricato.',
	'tool.csv-to-sql.operation': 'In SQL',
	'tool.csv-to-sql.faq.0.question': "Come funziona l'inferenza dei tipi?",
	'tool.csv-to-sql.faq.0.answer':
		'Il convertitore rileva automaticamente numeri e valori booleani (true/false). Tutto il resto viene sfuggito in modo sicuro come stringhe letterali usando virgolette singole.',
	'tool.csv-to-sql.use_case.0':
		'Generare seed SQL da dati di fogli di calcolo per migrazioni di database',
	'tool.csv-to-sql.use_case.1':
		'Importare rapidamente dati CSV in database SQL senza scrivere script personalizzati',
	'tool.json-schema-generator.display_name': 'Generatore di JSON Schema',
	'tool.json-schema-generator.tagline': 'Inferire JSON Schema da esempi JSON',
	'tool.json-schema-generator.description':
		'Genera uno JSON Schema Draft 2020-12 da qualsiasi documento JSON. Rileva automaticamente strutture annidate, array, campi obbligatori, tipi di dato e possibili enum.',
	'tool.json-schema-generator.primary_keyword': 'generatore json schema',
	'tool.json-schema-generator.meta_title': 'Generatore di JSON Schema — fmtly.dev',
	'tool.json-schema-generator.meta_description':
		'Inferisci JSON Schema da JSON direttamente nel browser. Rileva tipi annidati, campi required e candidati enum senza upload.',
	'tool.json-schema-generator.operation': 'Genera Schema',
	'tool.json-schema-generator.faq.0.question': 'Come vengono rilevati i campi obbligatori?',
	'tool.json-schema-generator.faq.0.answer':
		'Negli oggetti, le chiavi presenti in tutte le voci osservate vengono marcate come required. Le chiavi mancanti restano opzionali.',
	'tool.json-schema-generator.faq.1.question': 'Come vengono inferiti gli enum?',
	'tool.json-schema-generator.faq.1.answer':
		'Se un campo presenta un insieme piccolo e ricorrente di valori scalari, il generatore aggiunge un enum per rappresentare quelle categorie.',
	'tool.json-schema-generator.faq.2.question': 'Quale versione di JSON Schema viene generata?',
	'tool.json-schema-generator.faq.2.answer':
		"L'output include la URI $schema Draft 2020-12 e usa parole chiave standard come type, properties, required, anyOf e items.",
	'tool.json-schema-generator.use_case.0':
		'Creare rapidamente contratti API iniziali da payload reali',
	'tool.json-schema-generator.use_case.1':
		'Preparare schemi di validazione per fixture e dati di test',
	'tool.json-schema-generator.use_case.2':
		'Documentare velocemente formati JSON annidati per integrazioni',
	'tool.json-schema-generator.use_case.3':
		'Generare uno schema di base prima di rifinire i vincoli manualmente',
	'tool.json-to-go.display_name': 'JSON in struct Go',
	'tool.json-to-go.tagline': 'Genera struct Go pulite partendo da JSON',
	'tool.json-to-go.description':
		'Converti qualsiasi payload JSON in definizioni di struct Go idiomatiche con inferenza dei tipi annidati, tag json e gestione dei campi opzionali. Veloce, privato e 100% nel browser.',
	'tool.json-to-go.primary_keyword': 'json in struct go',
	'tool.json-to-go.meta_title': 'Generatore JSON in struct Go — fmtly.dev',
	'tool.json-to-go.meta_description':
		'Genera definizioni di struct Go da JSON direttamente nel browser. Include struct annidate, tag json e inferenza dei campi opzionali. I dati restano sul tuo dispositivo.',
	'tool.json-to-go.operation': 'Converti',
	'tool.json-to-go.faq.0.question': 'Come vengono mappati i tipi JSON nei tipi Go?',
	'tool.json-to-go.faq.0.answer':
		'Le stringhe diventano string, i booleani bool, gli interi int64, i decimali float64, gli array diventano slice e gli oggetti annidati diventano struct generate.',
	'tool.json-to-go.faq.1.question': 'Aggiunge automaticamente tag json e omitempty?',
	'tool.json-to-go.faq.1.answer':
		'Sì. I campi includono tag json e, quando un campo appare opzionale o nullable nel campione, l’output può usare omitempty e tipi puntatore appropriati.',
	'tool.json-to-go.faq.2.question': 'Posso usare l’output direttamente nei progetti Go?',
	'tool.json-to-go.faq.2.answer':
		'Sì. L’output è pensato per l’uso diretto in codebase Go ed è adatto a client API, payload webhook e modelli di configurazione.',
	'tool.json-to-go.use_case.0':
		'Avviare rapidamente modelli API Go da payload reali di richiesta e risposta',
	'tool.json-to-go.use_case.1':
		'Generare tipi strutturati per integrazioni webhook ed event-driven',
	'tool.json-to-go.use_case.2':
		'Ridurre la scrittura manuale dei modelli su schemi JSON sconosciuti',
	'tool.json-to-go.use_case.3':
		'Accelerare il prototyping backend con scaffolding di tipi Go pronto per la produzione',
	'tool.json-to-typescript.display_name': 'JSON in tipi TypeScript',
	'tool.json-to-typescript.tagline': 'Genera interfacce e tipi TypeScript precisi partendo da JSON',
	'tool.json-to-typescript.description':
		'Converti esempi JSON in interfacce e union type TypeScript puliti, con inferenza annidata, rilevamento dei campi opzionali e tipizzazione sicura con null. Veloce, privato e 100% nel browser.',
	'tool.json-to-typescript.primary_keyword': 'json in tipi typescript',
	'tool.json-to-typescript.meta_title': 'Generatore JSON in tipi TypeScript — fmtly.dev',
	'tool.json-to-typescript.meta_description':
		'Genera interfacce e tipi TypeScript da JSON direttamente nel browser. Supporta oggetti annidati, array, union e campi opzionali. I dati restano sul tuo dispositivo.',
	'tool.json-to-typescript.operation': 'Converti',
	'tool.json-to-typescript.faq.0.question':
		'Come mappa lo strumento i valori JSON nei tipi TypeScript?',
	'tool.json-to-typescript.faq.0.answer':
		'Le stringhe diventano string, i numeri number, i booleani boolean, gli array diventano array tipizzati e gli oggetti annidati diventano interfacce generate. I valori misti vengono rappresentati con union type.',
	'tool.json-to-typescript.faq.1.question': 'Come vengono gestiti i campi opzionali e nullable?',
	'tool.json-to-typescript.faq.1.answer':
		'Se una chiave manca in parte dei campioni, il campo viene marcato opzionale con ?. Se un valore può essere null, il tipo generato include una union con null.',
	'tool.json-to-typescript.faq.2.question':
		'Posso usare l’output generato direttamente nel mio progetto?',
	'tool.json-to-typescript.faq.2.answer':
		'Sì. L’output è pensato come base pratica per modelli applicativi e API. Puoi incollarlo direttamente nella codebase e rifinire le convenzioni di naming quando serve.',
	'tool.json-to-typescript.use_case.0': 'Avviare modelli frontend e backend da payload API reali',
	'tool.json-to-typescript.use_case.1':
		'Generare contratti tipizzati per SDK e integrazioni webhook',
	'tool.json-to-typescript.use_case.2':
		'Ridurre la scrittura manuale di interfacce su JSON profondamente annidati',
	'tool.json-to-typescript.use_case.3':
		'Accelerare i refactor derivando tipi rigorosi da dati di esempio',
	'tool.json-to-rust-serde.display_name': 'JSON in Rust (Serde)',
	'tool.json-to-rust-serde.tagline':
		'Genera struct Rust pronte per serde con serde(rename) e Option da JSON',
	'tool.json-to-rust-serde.description':
		'Trasforma campioni JSON in struct Rust con derive Serde, rinomina delle chiavi JSON, Option per campi opzionali o null, Vec per gli array e serde_json::Value per dati eterogenei. Le forme annidate sono deduplicate come nel generatore Go. Input grandi nel Web Worker; tutto nel browser.',
	'tool.json-to-rust-serde.primary_keyword': 'json in rust serde struct',
	'tool.json-to-rust-serde.meta_title': 'JSON in struct Rust Serde — fmtly.dev',
	'tool.json-to-rust-serde.meta_description':
		'Genera struct Rust con serde da JSON nel browser. rename, Option, Vec, annidamento. Privato, veloce, Worker per JSON grandi.',
	'tool.json-to-rust-serde.operation': 'Converti',
	'tool.json-to-rust-serde.faq.0.question': 'Come vengono mappati i tipi JSON su Rust?',
	'tool.json-to-rust-serde.faq.0.answer':
		'Stringhe in String, booleani in bool, interi in i64, float in f64, array in Vec, oggetti in struct generate e forme miste in serde_json::Value.',
	'tool.json-to-rust-serde.faq.1.question': 'Perché serde(rename) su ogni campo?',
	'tool.json-to-rust-serde.faq.1.answer':
		'I campi usano snake_case idiomatico in Rust mentre il JSON spesso è camelCase. Il rename esplicito allinea serde alle chiavi originali senza regole globali rischiate.',
	'tool.json-to-rust-serde.faq.2.question': 'Servono serde e serde_json in Cargo.toml?',
	'tool.json-to-rust-serde.faq.2.answer':
		'Sì. Aggiungi serde con feature derive e serde_json per Value, ad es. serde = { version = "1", features = ["derive"] } e serde_json = "1".',
	'tool.json-to-rust-serde.use_case.0':
		'Avviare modelli API Rust da payload JSON reali di richiesta e risposta',
	'tool.json-to-rust-serde.use_case.1':
		'Creare modelli serde per webhook, code e CLI da payload di esempio',
	'tool.json-to-rust-serde.use_case.2':
		'Confrontare con l’output Go o TypeScript dallo stesso JSON in fmtly',
	'tool.json-to-rust-serde.use_case.3': 'Prototipare schemi serde prima di scrivere struct manuali',
	'ui.json_to_rust.tab_label': 'Rust',
	'tool.json-flatten.display_name': 'Appiattitore / Ripristino JSON',
	'tool.json-flatten.tagline': 'Appiattisci percorsi JSON annidati e ricostruiscili all’istante',
	'tool.json-flatten.description':
		'Converti JSON profondamente annidato in oggetti piatti basati su percorsi e ricostruiscilo nello stesso strumento. Supporta array, chiavi con escape e separatori personalizzati.',
	'tool.json-flatten.primary_keyword': 'appiattitore json ripristino',
	'tool.json-flatten.meta_title': 'Appiattitore / Ripristino JSON — fmtly.dev',
	'tool.json-flatten.meta_description':
		'Appiattisci JSON annidato in mappe di chiavi per percorso e ripristinalo alla struttura originale. Supporto per array e separatori personalizzati. 100% nel browser.',
	'tool.json-flatten.operation': 'Appiattisci e Ripristina',
	'tool.json-flatten.faq.0.question':
		'Come vengono rappresentati gli array nell’output appiattito?',
	'tool.json-flatten.faq.0.answer':
		'Gli elementi array usano indici tra parentesi quadre nel percorso, ad esempio users[0].email o matrix[2][1], così la struttura può essere ricostruita in modo deterministico.',
	'tool.json-flatten.faq.1.question':
		'Cosa succede se le chiavi contengono già punti o parentesi quadre?',
	'tool.json-flatten.faq.1.answer':
		'Durante l’appiattimento i caratteri speciali nelle chiavi vengono escapati. La modalità di ripristino interpreta questi escape e ricrea in sicurezza le chiavi originali.',
	'tool.json-flatten.faq.2.question':
		'Posso passare da appiattisci a ripristina nello stesso strumento?',
	'tool.json-flatten.faq.2.answer':
		'Sì. Con il selettore modalità puoi appiattire JSON annidato oppure ricostruire JSON annidato da mappe di percorsi piatti.',
	'tool.json-flatten.use_case.0':
		'Preparare dizionari i18n e configurazioni come mappe di chiavi piatte',
	'tool.json-flatten.use_case.1':
		'Normalizzare fixture API annidate per editing in stile foglio di calcolo',
	'tool.json-flatten.use_case.2':
		'Ricostruire strutture annidate da chiavi stile variabili d’ambiente',
	'tool.json-flatten.use_case.3':
		'Analizzare modifiche per percorso su JSON grandi prima del deploy',
	'tool.json-patch.display_name': 'JSON Patch Builder',
	'tool.json-patch.tagline': 'Genera e applica operazioni JSON Patch RFC 6902 in tempo reale',
	'tool.json-patch.description':
		'Genera operazioni JSON Patch RFC 6902 confrontando un documento base e uno di destinazione, oppure applica un array patch a un JSON base. Tutto avviene localmente nel browser.',
	'tool.json-patch.primary_keyword': 'json patch builder',
	'tool.json-patch.meta_title': 'JSON Patch Builder (RFC 6902) — fmtly.dev',
	'tool.json-patch.meta_description':
		'Genera operazioni JSON Patch da due documenti JSON o applica patch RFC 6902 direttamente nel browser. Veloce, privato, senza upload.',
	'tool.json-patch.operation': 'Patch',
	'tool.json-patch.faq.0.question': 'Che cos’è JSON Patch (RFC 6902)?',
	'tool.json-patch.faq.0.answer':
		'JSON Patch è un formato standard che descrive modifiche come operazioni add, remove e replace usando percorsi JSON Pointer.',
	'tool.json-patch.faq.1.question': 'Come funziona la modalità Genera?',
	'tool.json-patch.faq.1.answer':
		'Incolla il JSON base nel pannello di input e il JSON di destinazione nel pannello laterale. Lo strumento calcola le operazioni necessarie per trasformare il base nel target.',
	'tool.json-patch.faq.2.question': 'Come funziona la modalità Applica?',
	'tool.json-patch.faq.2.answer':
		'Incolla il JSON base nel pannello di input e un array JSON Patch valido nel pannello laterale. L’output mostra il risultato JSON dopo l’applicazione del patch.',
	'tool.json-patch.use_case.0':
		'Versionare cambi payload API come operazioni patch deterministiche',
	'tool.json-patch.use_case.1': 'Applicare aggiornamenti documento in workflow di test',
	'tool.json-patch.use_case.2': 'Analizzare errori di integrazione riproducendo sequenze patch',
	'tool.json-patch.use_case.3': 'Rivedere cambi strutturati JSON oltre il semplice diff testuale',
	'tool.json-schema-validate.display_name': 'Validatore JSON Schema',
	'tool.json-schema-validate.tagline': 'Valida JSON rispetto a uno schema fornito',
	'tool.json-schema-validate.description':
		'Valida payload JSON contro JSON Schema Draft-07 o Draft 2020-12. Ottieni errori per percorso con mappatura riga/colonna per correggere i campi non validi più rapidamente.',
	'tool.json-schema-validate.primary_keyword': 'validatore json schema',
	'tool.json-schema-validate.meta_title': 'Validatore JSON Schema — fmtly.dev',
	'tool.json-schema-validate.meta_description':
		'Valida JSON contro JSON Schema Draft-07 e 2020-12 nel browser. Include annotazioni di errore per percorso, riga e colonna.',
	'tool.json-schema-validate.operation': 'Valida Schema',
	'tool.json-schema-validate.faq.0.question': 'Quali draft di schema sono supportati?',
	'tool.json-schema-validate.faq.0.answer':
		'Il validatore supporta JSON Schema Draft-07 e Draft 2020-12. Il draft viene rilevato automaticamente dalla URI $schema.',
	'tool.json-schema-validate.faq.1.question': "Come vengono mappati gli errori sull'input JSON?",
	'tool.json-schema-validate.faq.1.answer':
		"Ogni errore include un percorso JSON Pointer ed è mappato alla riga e colonna corrispondenti nell'input JSON.",
	'tool.json-schema-validate.faq.2.question': 'Cosa succede se lo schema è invalido?',
	'tool.json-schema-validate.faq.2.answer':
		'Se lo schema non può essere parsato o compilato, lo strumento mostra separatamente gli errori di schema e quelli di validazione dei dati.',
	'tool.json-schema-validate.use_case.0':
		'Validare payload API in ingresso e uscita contro schemi contrattuali',
	'tool.json-schema-validate.use_case.1':
		'Diagnosticare payload webhook non validi con feedback basato sul percorso',
	'tool.json-schema-validate.use_case.2':
		'Verificare fixture e mock data rispetto a vincoli di schema rigorosi',
	'tool.json-schema-validate.use_case.3': 'Convalidare la migrazione da Draft-07 a Draft 2020-12',
	'tool.text-word-character-counter.display_name': 'Contatore Parole e Caratteri',
	'tool.text-word-character-counter.tagline':
		'Conta parole, caratteri e tempo di lettura all’istante',
	'tool.text-word-character-counter.description':
		'Conta parole, caratteri, frasi, paragrafi e tempo di lettura stimato per qualsiasi testo. Veloce, privato e completamente nel browser.',
	'tool.text-word-character-counter.primary_keyword': 'contatore parole caratteri',
	'tool.text-word-character-counter.meta_title': 'Contatore Parole e Caratteri — fmtly.dev',
	'tool.text-word-character-counter.meta_description':
		'Contatore gratuito di parole e caratteri con metriche su frasi, paragrafi e tempo di lettura. Funziona interamente nel browser.',
	'tool.text-word-character-counter.operation': 'Conta Testo',
	'tool.text-word-character-counter.faq.0.question': 'Come vengono conteggiate le parole?',
	'tool.text-word-character-counter.faq.0.answer':
		'Le parole vengono conteggiate come gruppi di lettere e numeri, includendo apostrofi e trattini comuni.',
	'tool.text-word-character-counter.faq.1.question': 'Come viene stimato il tempo di lettura?',
	'tool.text-word-character-counter.faq.1.answer':
		'Il tempo di lettura è stimato su circa 200 parole al minuto ed è arrotondato al minuto superiore.',
	'tool.text-word-character-counter.faq.2.question':
		'Il mio testo viene inviato fuori dal dispositivo?',
	'tool.text-word-character-counter.faq.2.answer':
		'No. Conteggio e analisi avvengono localmente nel browser, senza invio del testo a server.',
	'tool.text-word-character-counter.use_case.0':
		'Controllare lunghezza di articoli e documentazione prima della pubblicazione',
	'tool.text-word-character-counter.use_case.1':
		'Ottimizzare copy UI e prompt in base ai limiti di caratteri',
	'tool.text-word-character-counter.use_case.2':
		'Stimare il tempo di lettura per post, documenti e note di rilascio',
	'tool.text-word-character-counter.use_case.3':
		'Confrontare bozze con metriche oggettive di lunghezza',
	'tool.text-lorem-ipsum-generator.display_name': 'Generatore Lorem Ipsum',
	'tool.text-lorem-ipsum-generator.tagline':
		'Genera testo segnaposto per paragrafi, frasi o parole con controllo seed',
	'tool.text-lorem-ipsum-generator.description':
		'Genera testo Lorem Ipsum deterministico per mockup, anteprime UI e test di contenuto. Controlla numero di paragrafi/frasi/parole, seed e output in testo semplice o HTML direttamente nel browser.',
	'tool.text-lorem-ipsum-generator.primary_keyword': 'generatore lorem ipsum',
	'tool.text-lorem-ipsum-generator.meta_title': 'Generatore Lorem Ipsum — fmtly.dev',
	'tool.text-lorem-ipsum-generator.meta_description':
		'Generatore Lorem Ipsum gratuito con modalità paragrafo, frase e parola, output seedato ed export testo semplice/HTML. Veloce, privato e 100% nel browser.',
	'tool.text-lorem-ipsum-generator.operation': 'Genera Lorem Ipsum',
	'tool.text-lorem-ipsum-generator.faq.0.question':
		'Posso ottenere sempre lo stesso testo con le stesse impostazioni?',
	'tool.text-lorem-ipsum-generator.faq.0.answer':
		'Sì. Mantieni lo stesso seed e le stesse opzioni per riprodurre identicamente l’output.',
	'tool.text-lorem-ipsum-generator.faq.1.question':
		'Posso generare paragrafi HTML invece del testo semplice?',
	'tool.text-lorem-ipsum-generator.faq.1.answer':
		'Sì. Seleziona il formato HTML per ottenere markup pronto all’uso nei prototipi.',
	'tool.text-lorem-ipsum-generator.faq.2.question': 'Il testo viene generato localmente?',
	'tool.text-lorem-ipsum-generator.faq.2.answer':
		'Sì. La generazione avviene interamente nel browser senza invio a server.',
	'tool.text-lorem-ipsum-generator.use_case.0':
		'Riempire wireframe e mock UI con testo segnaposto realistico',
	'tool.text-lorem-ipsum-generator.use_case.1':
		'Testare tipografia, spaziature e overflow in layout responsive',
	'tool.text-lorem-ipsum-generator.use_case.2':
		'Creare fixture seedate riproducibili per snapshot e test visivi frontend',
	'tool.text-lorem-ipsum-generator.use_case.3':
		'Produrre contenuto segnaposto in testo semplice o HTML per demo CMS',
	'tool.text-markdown-to-html.display_name': 'Markdown in HTML',
	'tool.text-markdown-to-html.tagline':
		'Converti Markdown in HTML pronto per la produzione con anteprima live',
	'tool.text-markdown-to-html.description':
		'Converti Markdown in HTML pulito con anteprima live, tabelle GFM, evidenziazione sintassi nei blocchi di codice e controlli di sicurezza per link/immagini. Tutto viene eseguito localmente nel browser.',
	'tool.text-markdown-to-html.primary_keyword': 'convertitore markdown in html',
	'tool.text-markdown-to-html.meta_title':
		'Convertitore Markdown in HTML — Anteprima live | fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Converti Markdown in HTML con anteprima live, supporto tabelle GFM e blocchi di codice evidenziati. Veloce, privato e 100% nel browser.',
	'tool.text-markdown-to-html.operation': 'Converti Markdown',
	'tool.text-markdown-to-html.faq.0.question':
		'Questo convertitore supporta le tabelle GitHub Flavored Markdown (GFM)?',
	'tool.text-markdown-to-html.faq.0.answer':
		'Sì. La sintassi tabellare GFM è supportata e può essere attivata o disattivata dal pannello opzioni.',
	'tool.text-markdown-to-html.faq.1.question':
		'I blocchi di codice fenced vengono evidenziati automaticamente?',
	'tool.text-markdown-to-html.faq.1.answer':
		'Sì. Lo strumento evidenzia i blocchi di codice fenced e mantiene le classi di linguaggio nell’HTML generato.',
	'tool.text-markdown-to-html.faq.2.question':
		'Come vengono gestiti link non sicuri o blocchi raw HTML?',
	'tool.text-markdown-to-html.faq.2.answer':
		'I protocolli non sicuri per link/immagini vengono rimossi. Il raw HTML viene escaped per default e può essere abilitato dalle opzioni avanzate.',
	'tool.text-markdown-to-html.use_case.0':
		'Preparare contenuti README e documentazione per generatori di siti statici',
	'tool.text-markdown-to-html.use_case.1':
		'Controllare l’output Markdown prima di pubblicare release notes o changelog',
	'tool.text-markdown-to-html.use_case.2':
		'Generare snippet HTML sanitizzati per editor CMS e knowledge base',
	'tool.text-markdown-to-html.use_case.3':
		'Convertire tutorial tecnici con codice in HTML incorporabile',
	'tool.text-string-case-converter.display_name': 'Convertitore di Formato Testo',
	'tool.text-string-case-converter.tagline':
		'Converti testo tra camelCase, PascalCase, snake_case, kebab-case e altri formati',
	'tool.text-string-case-converter.description':
		'Converti testo istantaneamente tra camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case e formato frase. Veloce, privato e interamente nel browser.',
	'tool.text-string-case-converter.primary_keyword': 'convertitore string case',
	'tool.text-string-case-converter.meta_title': 'Convertitore di Formato Testo — fmtly.dev',
	'tool.text-string-case-converter.meta_description':
		'Convertitore gratuito di formato testo per camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case e formato frase.',
	'tool.text-string-case-converter.operation': 'Converti Formato',
	'tool.text-string-case-converter.faq.0.question': 'Quali stili di denominazione sono supportati?',
	'tool.text-string-case-converter.faq.0.answer':
		'Lo strumento supporta camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case e formato frase in un’unica vista.',
	'tool.text-string-case-converter.faq.1.question':
		'Può elaborare input misti con camelCase, underscore e trattini?',
	'tool.text-string-case-converter.faq.1.answer':
		'Sì. Delimitatori misti e maiuscole/minuscole esistenti vengono prima tokenizzati e poi convertiti in modo coerente in ogni stile target.',
	'tool.text-string-case-converter.faq.2.question':
		'La conversione avviene localmente sul mio dispositivo?',
	'tool.text-string-case-converter.faq.2.answer':
		'Sì. Tutta la conversione avviene nel browser senza inviare testo al server.',
	'tool.text-string-case-converter.use_case.0':
		'Normalizzare campi API e chiavi di configurazione tra convenzioni di naming diverse',
	'tool.text-string-case-converter.use_case.1':
		'Convertire etichette UI in nomi variabile pronti per il codice',
	'tool.text-string-case-converter.use_case.2':
		'Standardizzare i pattern di naming tra documentazione, schemi ed esempi payload',
	'tool.text-string-case-converter.use_case.3':
		'Preparare identificatori coerenti per TypeScript, Python, SQL e script shell',
	'tool.text-text-reverser.display_name': 'Invertitore di Testo',
	'tool.text-text-reverser.tagline': 'Inverti testo per caratteri, parole o righe con un clic',
	'tool.text-text-reverser.description':
		'Inverti istantaneamente testo per caratteri, parole o righe. Ideale per trasformazioni rapide di stringhe, debug di flussi testuali ed esperimenti di contenuto nel browser.',
	'tool.text-text-reverser.primary_keyword': 'invertitore di testo',
	'tool.text-text-reverser.meta_title': 'Invertitore di Testo — fmtly.dev',
	'tool.text-text-reverser.meta_description':
		'Invertitore di testo gratuito che inverte testo per caratteri, parole o righe all’istante. Veloce, privato e completamente nel browser.',
	'tool.text-text-reverser.operation': 'Inverti Testo',
	'tool.text-text-reverser.faq.0.question': 'Quali modalità di inversione sono disponibili?',
	'tool.text-text-reverser.faq.0.answer':
		'Puoi invertire per caratteri, per parole o per righe complete. Ogni modalità ha un output separato.',
	'tool.text-text-reverser.faq.1.question': 'La modalità per parole mantiene spazi e tabulazioni?',
	'tool.text-text-reverser.faq.1.answer':
		'Sì. La modalità per parole mantiene la struttura degli spazi invertendo l’ordine dei token.',
	'tool.text-text-reverser.faq.2.question': 'Il mio testo resta sul dispositivo?',
	'tool.text-text-reverser.faq.2.answer':
		'Sì. L’inversione avviene localmente nel browser senza upload a server.',
	'tool.text-text-reverser.use_case.0':
		'Generare stringhe specchiate per testare parser e tokenizer',
	'tool.text-text-reverser.use_case.1':
		'Riordinare note multilinea invertendo rapidamente l’ordine delle righe',
	'tool.text-text-reverser.use_case.2':
		'Validare la logica di separazione parole con output che preserva gli spazi',
	'tool.text-text-reverser.use_case.3':
		'Creare varianti di testo trasformate e divertenti per esperimenti di contenuto',
	'tool.text-duplicate-line-remover.display_name': 'Rimuovi Righe Duplicate',
	'tool.text-duplicate-line-remover.tagline':
		"Rimuovi righe duplicate preservando l'ordine di prima occorrenza",
	'tool.text-duplicate-line-remover.description':
		'Rimuovi righe duplicate dal testo preservando la prima occorrenza di ogni riga. Ideale per pulire log, deduplicare liste e preparare dataset unici nel tuo browser.',
	'tool.text-duplicate-line-remover.primary_keyword': 'rimuovi righe duplicate',
	'tool.text-duplicate-line-remover.meta_title': 'Rimuovi Righe Duplicate — fmtly.dev',
	'tool.text-duplicate-line-remover.meta_description':
		"Rimuovi righe duplicate gratuito che rimuove righe duplicate preservando l'ordine di prima occorrenza. Veloce, privato e 100% nel tuo browser.",
	'tool.text-duplicate-line-remover.operation': 'Rimuovi Duplicati',
	'tool.text-duplicate-line-remover.faq.0.question':
		'Quali righe vengono mantenute come duplicati?',
	'tool.text-duplicate-line-remover.faq.0.answer':
		'Viene mantenuta la prima occorrenza di ogni riga; le righe identiche successive vengono rimosse come duplicati.',
	'tool.text-duplicate-line-remover.faq.1.question': 'Le righe vuote sono trattate come duplicati?',
	'tool.text-duplicate-line-remover.faq.1.answer':
		'Sì. Le righe vuote sono voci uniche, quindi più righe vuote verranno deduplicate in una singola riga vuota.',
	'tool.text-duplicate-line-remover.faq.2.question': 'Il mio testo viene elaborato localmente?',
	'tool.text-duplicate-line-remover.faq.2.answer':
		'Sì. Tutta la deduplicazione viene eseguita nel tuo browser; il tuo testo non lascia mai il tuo dispositivo.',
	'tool.text-duplicate-line-remover.use_case.0':
		'Pulire log del server e tracce di applicazione rimuovendo voci ripetute',
	'tool.text-duplicate-line-remover.use_case.1':
		"Deduplicare liste di URL, liste di email o record di inventario prima dell'importazione",
	'tool.text-duplicate-line-remover.use_case.2':
		'Preparare liste di parole uniche per testare vocabolario o modelli linguistici',
	'tool.text-duplicate-line-remover.use_case.3':
		"Consolidare valori di configurazione o liste di variabili d'ambiente",
	'tool.text-line-sorter.display_name': 'Ordinatore di Righe',
	'tool.text-line-sorter.tagline':
		'Ordina righe in ordine alfabetico, numerico, per lunghezza o shuffle con seed',
	'tool.text-line-sorter.description':
		'Ordina righe di testo all’istante con opzioni avanzate per maiuscole/minuscole, trim, deduplicazione, rimozione righe vuote e shuffle deterministico con seed. Tutto viene eseguito localmente nel browser.',
	'tool.text-line-sorter.primary_keyword': 'ordinatore di righe',
	'tool.text-line-sorter.meta_title': 'Ordinatore di Righe — Ordina testo veloce | fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Ordina righe in modalità alfabetica, numerica, per lunghezza o casuale. Include deduplica e filtro righe vuote. Veloce, privato e tutto nel browser.',
	'tool.text-line-sorter.operation': 'Ordina righe',
	'tool.text-line-sorter.faq.0.question': 'Quali modalità di ordinamento sono disponibili?',
	'tool.text-line-sorter.faq.0.answer':
		'Sono disponibili modalità alfabetica, numerica, per lunghezza e shuffle casuale deterministico. Puoi anche scegliere ordine crescente o decrescente.',
	'tool.text-line-sorter.faq.1.question':
		'Posso rimuovere righe vuote e duplicati prima di ordinare?',
	'tool.text-line-sorter.faq.1.answer':
		'Sì. Attiva rimozione righe vuote e deduplicazione per normalizzare il contenuto prima dell’ordinamento.',
	'tool.text-line-sorter.faq.2.question': 'Rimane reattivo anche con input grandi?',
	'tool.text-line-sorter.faq.2.answer':
		'Sì. Oltre 500KB il calcolo viene spostato in un Web Worker, così l’interfaccia resta fluida e i dati rimangono locali.',
	'tool.text-line-sorter.use_case.0':
		'Normalizzare e ordinare log prima del confronto tra ambienti',
	'tool.text-line-sorter.use_case.1':
		'Preparare liste pulite e ordinate di domini, email, ID o tag',
	'tool.text-line-sorter.use_case.2': 'Ordinare rapidamente release note, changelog o checklist',
	'tool.text-line-sorter.use_case.3':
		'Creare dataset mescolati in modo deterministico per test e QA',
	'tool.text-diff-compare.display_name': 'Diff & Confronta',
	'tool.text-diff-compare.tagline': 'Confronta due testi affiancati',
	'tool.text-diff-compare.description':
		'Diff unificato o affiancato di due input di testo normale con evidenziazione delle modifiche a livello di riga e parola.',
	'tool.text-diff-compare.primary_keyword': 'diff testo confronta',
	'tool.text-diff-compare.meta_title': 'Strumento Diff e Confronto Testi - Confronto Affiancato',
	'tool.text-diff-compare.meta_description':
		'Confronta due input di testo con vista diff affiancata o unificata. Evidenzia modifiche a livello di riga e parola.',
	'tool.text-diff-compare.operation': 'Confronta due testi e mostra le differenze',
	'tool.text-diff-compare.faq.0.question': 'Quali algoritmi diff sono supportati?',
	'tool.text-diff-compare.faq.0.answer':
		'Supportiamo gli algoritmi Myers, Patience e Histogram. Myers è il predefinito e funziona bene per la maggior parte dei casi. Patience è meglio per modifiche strutturate, Histogram è più veloce per file grandi.',
	'tool.text-diff-compare.faq.1.question':
		'Posso ignorare spazi o differenze di maiuscole/minuscole?',
	'tool.text-diff-compare.faq.1.answer':
		'Sì, puoi configurare il diff per ignorare modifiche di spazi, differenze di maiuscole/minuscole e righe vuote usando il pannello opzioni.',
	'tool.text-diff-compare.faq.2.question': 'Quali formati di output sono disponibili?',
	'tool.text-diff-compare.faq.2.answer':
		"Puoi visualizzare i diff in modalità affiancata, formato unificato o inline con l'editor Monaco. Il diff unificato può essere scaricato come file .diff.",
	'tool.text-diff-compare.use_case.0': 'Confrontare versioni di codice prima del commit',
	'tool.text-diff-compare.use_case.1': 'Revisionare modifiche ed edizioni di documenti',
	'tool.text-diff-compare.use_case.2': 'Analizzare modifiche di file di configurazione',
	'tool.text-diff-compare.use_case.3': 'Tracciare modifiche in log o esportazioni dati',
	'tool.text-regex-tester.display_name': 'Tester Regex',
	'tool.text-regex-tester.tagline':
		'Testa espressioni regolari con evidenziazione live, gruppi di cattura e flag',
	'tool.text-regex-tester.description':
		'Testa pattern regex JavaScript su testo reale con evidenziazione in tempo reale, controllo completo dei flag, ispezione dei gruppi di cattura e metriche dettagliate delle corrispondenze. Tutto viene eseguito localmente nel browser.',
	'tool.text-regex-tester.primary_keyword': 'tester regex',
	'tool.text-regex-tester.meta_title':
		'Tester Regex — Evidenziazione live e gruppi di cattura | fmtly.dev',
	'tool.text-regex-tester.meta_description':
		'Testa espressioni regolari online con evidenziazione live, gruppi di cattura e flag regex. Veloce, privato e totalmente nel browser.',
	'tool.text-regex-tester.operation': 'Testa Regex',
	'tool.text-regex-tester.faq.0.question':
		'Questo strumento supporta flag JavaScript come g, i, m, s, u, y e d?',
	'tool.text-regex-tester.faq.0.answer':
		'Sì. Puoi attivare o disattivare ogni flag supportato e vedere subito come cambiano le corrispondenze.',
	'tool.text-regex-tester.faq.1.question':
		'Posso ispezionare gruppi di cattura numerati e nominati per ogni match?',
	'tool.text-regex-tester.faq.1.answer':
		'Sì. Ogni match mostra gruppi numerati e gruppi nominati, con valori e posizioni quando disponibili.',
	'tool.text-regex-tester.faq.2.question': 'Pattern e testo di prova vengono inviati a un server?',
	'tool.text-regex-tester.faq.2.answer':
		'No. Il matching regex avviene localmente nel browser e nessun dato viene caricato.',
	'tool.text-regex-tester.use_case.0':
		'Validare pattern di parsing log prima dell’uso in produzione',
	'tool.text-regex-tester.use_case.1':
		'Testare regole di validazione form con testo reale e casi limite',
	'tool.text-regex-tester.use_case.2':
		'Prototipare regole di ricerca ed estrazione per script, ETL e automazioni',
	'tool.text-regex-tester.use_case.3':
		'Imparare e insegnare le basi delle regex con feedback visivo immediato',
	'tool.text-escape-unescape.display_name': 'Escape / Unescape Testo',
	'tool.text-escape-unescape.tagline':
		'Escape o unescape testo per JSON, HTML, XML, URL, SQL e regex',
	'tool.text-escape-unescape.description':
		'Converti stringhe tra forma escaped e testo leggibile per JSON, entità HTML/XML, codifica URL, letterali SQL e pattern regex. Input grandi vengono elaborati via Web Worker.',
	'tool.text-escape-unescape.primary_keyword': 'escape unescape testo',
	'tool.text-escape-unescape.meta_title':
		'Escape/Unescape Testo — JSON, HTML, URL, SQL | fmtly.dev',
	'tool.text-escape-unescape.meta_description':
		'Escape e unescape testo istantaneo per JSON, HTML, XML, URL, SQL e regex. 100% browser, veloce su volumi grandi, nessun upload.',
	'tool.text-escape-unescape.operation': 'Escape / Unescape Testo',
	'tool.text-escape-unescape.faq.0.question':
		'Quali formati sono supportati per escape e unescape?',
	'tool.text-escape-unescape.faq.0.answer':
		'Puoi elaborare stringhe JSON, entità HTML/XML, codifica URL, letterali SQL e caratteri speciali regex in entrambe le direzioni.',
	'tool.text-escape-unescape.faq.1.question':
		'Qual è la differenza da un semplice encoder URL o HTML?',
	'tool.text-escape-unescape.faq.1.answer':
		'Raggruppa più standard di escape in un unico spazio, ti permette di cambiare subito direzione di conversione e offre opzioni dedicate come + URL o wrapping SQL.',
	'tool.text-escape-unescape.faq.2.question':
		'Prestazioni e privacy sono garantite per testi grandi?',
	'tool.text-escape-unescape.faq.2.answer':
		'Sì. Tutto viene eseguito localmente nel tuo browser. Oltre 500KB, un Web Worker mantiene l’interfaccia fluida.',
	'tool.text-escape-unescape.use_case.0':
		'Preparare input utente in modo sicuro per payload JSON, query string e SQL',
	'tool.text-escape-unescape.use_case.1':
		'Riconvertire log o estratti API escaped in testo leggibile',
	'tool.text-escape-unescape.use_case.2':
		'Costruire e debug pattern regex gestendo correttamente i metacaratteri',
	'tool.text-escape-unescape.use_case.3':
		'Normalizzare contenuto escaped eterogeneo senza uscire dal browser',
	'ui.text_escape.format_label': 'Formato',
	'ui.text_escape.action_label': 'Azione',
	'ui.text_escape.action.escape': 'Escape',
	'ui.text_escape.action.unescape': 'Unescape',
	'ui.text_escape.format.json': 'Stringa JSON',
	'ui.text_escape.format.html': 'Entità HTML',
	'ui.text_escape.format.xml': 'Entità XML',
	'ui.text_escape.format.url': 'Componente URL',
	'ui.text_escape.format.sql': 'Stringa SQL',
	'ui.text_escape.format.regex': 'Pattern regex',
	'ui.text_escape.input_label': 'Input',
	'ui.text_escape.output_label': 'Output',
	'ui.text_escape.input_placeholder': 'Digita o incolla il testo da elaborare...',
	'ui.text_escape.output_placeholder': 'L’output escaped o unescaped appare qui...',
	'ui.text_escape.option.url_encode_plus': 'Codifica spazi come +',
	'ui.text_escape.option.url_decode_plus': 'Decodifica + come spazio',
	'ui.text_escape.option.sql_wrap_quotes': 'Avvolgi con virgolette singole',
	'ui.text_escape.button.swap_action': 'Inverti azione',
	'ui.text_escape.worker_active':
		'Input grande rilevato (>{size}). L’elaborazione è in esecuzione in un Web Worker.',
	'ui.text_escape.worker_failed': 'Elaborazione Worker fallita. Ritorno al thread principale.',
	'ui.text_escape.warning.no_changes':
		'Nessuna modifica rilevata per il formato e azione selezionati.',
	'ui.text_escape.error.invalid_json_escape': 'Sequenza di escape JSON non valida: {detail}',
	'ui.text_escape.error.invalid_url_encoding': 'Input URL codificato non valido: {detail}',
	'ui.text_escape.error.detail': 'Elaborazione fallita: {detail}',
	'ui.diff_compare.statistics': 'Statistiche di Confronto',
	'ui.diff_compare.added_lines': 'Righe aggiunte',
	'ui.diff_compare.removed_lines': 'Righe rimosse',
	'ui.diff_compare.unchanged_lines': 'Righe invariate',
	'ui.diff_compare.total_lines': 'Righe totali',
	'ui.diff_compare.similarity': 'Similarità',
	'ui.diff_compare.hunks': 'Hunks',
	'ui.diff_compare.side_by_side': 'Affiancato',
	'ui.diff_compare.unified': 'Unificato',
	'ui.diff_compare.inline': 'Inline',
	'ui.diff_compare.swap': 'Scambia',
	'ui.diff_compare.diff_options': 'Opzioni Diff',
	'ui.diff_compare.ignore_whitespace': 'Ignora spazi',
	'ui.diff_compare.ignore_case': 'Ignora maiuscole/minuscole',
	'ui.diff_compare.ignore_empty_lines': 'Ignora righe vuote',
	'ui.diff_compare.show_inline': 'Mostra modifiche inline',
	'ui.diff_compare.context_lines': 'Righe di contesto',
	'ui.diff_compare.algorithm': 'Algoritmo',
	'ui.diff_compare.original': 'Originale',
	'ui.diff_compare.modified': 'Modificato',
	'ui.diff_compare.placeholder_left': 'Incolla il testo originale qui...',
	'ui.diff_compare.placeholder_right': 'Incolla il testo modificato qui...',
	'ui.diff_compare.unified_diff': 'Diff Unificato',
	'ui.diff_compare.add_content': 'Aggiungi contenuto su entrambi i lati per vedere il diff',
	'ui.diff_compare.no_content': 'Nessun contenuto da confrontare',
	'ui.diff_compare.swapped': 'Input scambiati',
	'ui.toast.download_success': 'Scaricato con successo',
	'tool.text-whitespace-cleaner.display_name': 'Pulitore Spazi',
	'tool.text-whitespace-cleaner.tagline':
		'Taglia spazi finali, unisce spazi multipli, normalizza fine riga',
	'tool.text-whitespace-cleaner.description':
		'Pulisci la formattazione del testo rimuovendo spazi finali, unendo spazi/tab multipli in spazi singoli e normalizzando fine riga. Perfetto per preparare codice, log e contenuti per controllo versione o elaborazione.',
	'tool.text-whitespace-cleaner.primary_keyword': 'pulitore spazi',
	'tool.text-whitespace-cleaner.meta_title': 'Pulitore Spazi — fmtly.dev',
	'tool.text-whitespace-cleaner.meta_description':
		'Pulitore spazi gratuito che rimuove spazi finali, unisce spazi multipli e normalizza fine riga. Veloce, privato e 100% nel tuo browser.',
	'tool.text-whitespace-cleaner.operation': 'Pulisci Spazi',
	'tool.text-whitespace-cleaner.faq.0.question': 'Quali caratteri di spazio vengono rimossi?',
	'tool.text-whitespace-cleaner.faq.0.answer':
		'Spazi e tab finali alla fine delle righe vengono rimossi. Spazi/tab multipli nel testo vengono uniti in spazi singoli. Fine riga vengono normalizzati a LF (\\n).',
	'tool.text-whitespace-cleaner.faq.1.question': 'Gli spazi iniziali vengono conservati?',
	'tool.text-whitespace-cleaner.faq.1.answer':
		"Sì. Solo gli spazi finali vengono rimossi. Indentazione iniziale e spazi all'interno delle righe vengono conservati, eccetto spazi/tab multipli che vengono uniti in spazi singoli.",
	'tool.text-whitespace-cleaner.faq.2.question': 'Come vengono normalizzati fine riga?',
	'tool.text-whitespace-cleaner.faq.2.answer':
		'Fine riga Windows (CRLF) e Mac vecchi (CR) vengono convertiti in stile Unix LF (\\n). Righe vuote consecutive multiple vengono unite in doppi a capo.',
	'tool.text-whitespace-cleaner.use_case.0':
		'Pulisci codice prima del commit in controllo versione per rimuovere spazi finali',
	'tool.text-whitespace-cleaner.use_case.1':
		'Normalizza testo copiato da fonti diverse con spaziatura inconsistente',
	'tool.text-whitespace-cleaner.use_case.2':
		'Prepara log e file dati per elaborazione e analisi consistente',
	'tool.text-whitespace-cleaner.use_case.3':
		'Formatta contenuti da editor di testo ricco a testo normale con spaziatura consistente',
	'ui.text_counter.words': 'Parole',
	'ui.text_counter.characters': 'Caratteri',
	'ui.text_counter.characters_no_spaces': 'Caratteri (senza spazi)',
	'ui.text_counter.sentences': 'Frasi',
	'ui.text_counter.paragraphs': 'Paragrafi',
	'ui.text_counter.reading_time': 'Tempo di lettura',
	'ui.text_counter.minutes': 'min',
	'ui.text_counter.lines': 'righe',
	'ui.text_counter.placeholder': 'Scrivi o incolla qui il tuo testo...',
	'ui.ai_tokens.characters': 'caratteri',
	'ui.ai_tokens.model_label': 'Modello',
	'ui.ai_tokens.upload_file': 'Carica file',
	'ui.ai_tokens.file_loaded': '{name} caricato',
	'ui.ai_tokens.file_failed': 'Impossibile caricare il file',
	'ui.ai_tokens.copy_summary': 'Copia riepilogo',
	'ui.ai_tokens.copy.title': 'Riepilogo token IA',
	'ui.ai_tokens.worker_active':
		'Input grande rilevato (>{size}). L’analisi token viene eseguita in un Web Worker.',
	'ui.ai_tokens.worker_failed':
		'Analisi token non riuscita. Prova un input più piccolo o ricarica la pagina.',
	'ui.ai_tokens.worker_badge': 'Worker',
	'ui.ai_tokens.input_label': 'Prompt o testo',
	'ui.ai_tokens.input_placeholder':
		'Incolla un prompt, una trascrizione o un documento per stimare i token...',
	'ui.ai_tokens.analysis_title': 'Analisi token',
	'ui.ai_tokens.processing': 'Conteggio...',
	'ui.ai_tokens.comparison_title': 'Confronto modelli',
	'ui.ai_tokens.stat.tokens': 'Token',
	'ui.ai_tokens.stat.words': 'Parole',
	'ui.ai_tokens.stat.words_helper': 'Parole separate da spazi',
	'ui.ai_tokens.stat.characters': 'Caratteri',
	'ui.ai_tokens.stat.tokens_per_word': 'Token / parola',
	'ui.ai_tokens.stat.tokens_per_word_helper': 'Più basso di solito costa meno',
	'ui.ai_tokens.stat.estimated_cost': 'Costo stimato',
	'ui.ai_tokens.stat.estimated_cost_helper': 'Stima token di input',
	'ui.ai_tokens.table.model': 'Modello',
	'ui.ai_tokens.table.tokens': 'Token',
	'ui.ai_tokens.table.ratio': 'Token / parola',
	'ui.ai_tokens.table.cost': 'Costo',
	'ui.prompt_optimizer.characters': 'caratteri',
	'ui.prompt_optimizer.tokens': 'token',
	'ui.prompt_optimizer.model_label': 'Modello',
	'ui.prompt_optimizer.upload_file': 'Carica file',
	'ui.prompt_optimizer.file_loaded': '{name} caricato',
	'ui.prompt_optimizer.file_failed': 'Impossibile caricare il file',
	'ui.prompt_optimizer.worker_active':
		'Input grande rilevato (>{size}). L’ottimizzazione viene eseguita in un Web Worker.',
	'ui.prompt_optimizer.worker_failed':
		'Ottimizzazione nel Worker non riuscita. Uso del thread principale.',
	'ui.prompt_optimizer.worker_badge': 'Worker',
	'ui.prompt_optimizer.input_label': 'Prompt originale',
	'ui.prompt_optimizer.input_placeholder':
		'Incolla un prompt da ottimizzare per l’uso dei token...',
	'ui.prompt_optimizer.output_label': 'Output ottimizzato',
	'ui.prompt_optimizer.processing': 'Ottimizzazione...',
	'ui.prompt_optimizer.copy_output': 'Copia ottimizzato',
	'ui.prompt_optimizer.preview_title': 'Anteprima',
	'ui.prompt_optimizer.output_placeholder': 'Il prompt ottimizzato appare qui...',
	'ui.prompt_optimizer.option.filler': 'Rimuovi parole riempitive',
	'ui.prompt_optimizer.option.filler_desc': 'Elimina frasi a basso segnale preservando l’intento.',
	'ui.prompt_optimizer.option.whitespace': 'Comprimi spazi',
	'ui.prompt_optimizer.option.whitespace_desc': 'Normalizza spazi ripetuti e righe vuote.',
	'ui.prompt_optimizer.option.markdown': 'Semplifica Markdown',
	'ui.prompt_optimizer.option.markdown_desc': 'Riduce formattazione decorativa che costa token.',
	'ui.prompt_optimizer.option.abbreviation': 'Usa abbreviazioni',
	'ui.prompt_optimizer.option.abbreviation_desc':
		'Accorcia frasi comuni dei prompt IA quando è sicuro.',
	'ui.prompt_optimizer.stat.before': 'Prima',
	'ui.prompt_optimizer.stat.before_helper': 'Conteggio token originale',
	'ui.prompt_optimizer.stat.after': 'Dopo',
	'ui.prompt_optimizer.stat.after_helper': 'Conteggio token ottimizzato',
	'ui.prompt_optimizer.stat.saved': 'Token risparmiati',
	'ui.prompt_optimizer.stat.saved_helper': 'Riduzione stimata',
	'ui.prompt_optimizer.stat.savings_percent': 'Risparmio',
	'ui.prompt_optimizer.stat.savings_percent_helper': 'Prima vs dopo',
	'ui.prompt_optimizer.stat.cost_saved': 'Costo risparmiato',
	'ui.system_prompt_builder.template.custom': 'Personalizzato',
	'ui.system_prompt_builder.template.code_assistant': 'Assistente di codice',
	'ui.system_prompt_builder.template.data_analyst': 'Analista dati',
	'ui.system_prompt_builder.template.translator': 'Traduttore',
	'ui.system_prompt_builder.template.customer_support': 'Supporto clienti',
	'ui.system_prompt_builder.format.plain_text': 'Testo semplice',
	'ui.system_prompt_builder.format.openai_json': 'Messaggi JSON OpenAI',
	'ui.system_prompt_builder.field.role': 'Ruolo',
	'ui.system_prompt_builder.field.objective': 'Obiettivo',
	'ui.system_prompt_builder.field.context': 'Contesto',
	'ui.system_prompt_builder.field.constraints': 'Vincoli',
	'ui.system_prompt_builder.field.examples': 'Esempi',
	'ui.system_prompt_builder.field.output_requirements': 'Requisiti di output',
	'ui.system_prompt_builder.placeholder.role':
		'Definisci identità e livello di competenza dell’assistente...',
	'ui.system_prompt_builder.placeholder.objective': 'Descrivi cosa deve ottenere l’assistente...',
	'ui.system_prompt_builder.placeholder.context':
		'Aggiungi contesto operativo, pubblico, dominio o dettagli prodotto...',
	'ui.system_prompt_builder.placeholder.constraints':
		'Elenca limiti, policy, comportamenti vietati o requisiti rigidi...',
	'ui.system_prompt_builder.placeholder.examples':
		'Fornisci esempi di richieste utente e comportamento ideale dell’assistente...',
	'ui.system_prompt_builder.placeholder.output_requirements':
		'Specifica struttura, formattazione, citazioni o tono della risposta...',
	'ui.system_prompt_builder.option.safety_boundaries': 'Limiti di sicurezza',
	'ui.system_prompt_builder.option.safety_boundaries_desc':
		'Aggiungi istruzioni su privacy, incertezza, richieste non sicure e invenzioni.',
	'ui.system_prompt_builder.option.quality_checklist': 'Checklist qualità',
	'ui.system_prompt_builder.option.quality_checklist_desc':
		'Aggiungi un controllo finale su requisiti, formato e limitazioni.',
	'ui.system_prompt_builder.option.reasoning_guidance': 'Guida al ragionamento',
	'ui.system_prompt_builder.option.reasoning_guidance_desc':
		'Guida l’assistente a pensare prima e mostrare solo conclusioni utili.',
	'ui.system_prompt_builder.output_status': '{size} · {characters} caratteri · {lines} righe',
	'ui.system_prompt_builder.input_status': '{size} · {characters} caratteri · {lines} righe',
	'ui.system_prompt_builder.stat.characters': 'Caratteri',
	'ui.system_prompt_builder.stat.characters_helper': 'Output generato',
	'ui.system_prompt_builder.stat.size': 'Dimensione',
	'ui.system_prompt_builder.stat.size_helper': 'Dimensione output UTF-8',
	'ui.system_prompt_builder.stat.lines': 'Righe',
	'ui.system_prompt_builder.stat.lines_helper': 'Conteggio righe anteprima',
	'ui.system_prompt_builder.stat.sections': 'Sezioni',
	'ui.system_prompt_builder.worker_failed':
		'Creazione nel worker non riuscita. Elaborazione nel thread principale.',
	'ui.system_prompt_builder.build_failed':
		'Impossibile creare il prompt di sistema. Prova a ridurre la dimensione dell’input.',
	'ui.system_prompt_builder.sample_loaded': 'Esempio caricato',
	'ui.system_prompt_builder.clear_title': 'Cancellare i campi del generatore di prompt?',
	'ui.system_prompt_builder.clear_description':
		'Rimuove gli input correnti del generatore e l’anteprima.',
	'ui.system_prompt_builder.input_cleared': 'Input del generatore cancellati',
	'ui.system_prompt_builder.copy_empty': 'Niente da copiare per ora',
	'ui.system_prompt_builder.copy_success': 'Prompt di sistema copiato',
	'ui.system_prompt_builder.copy_error': 'Copia non riuscita. Controlla i permessi del browser.',
	'ui.system_prompt_builder.download_empty': 'Niente da scaricare per ora',
	'ui.system_prompt_builder.download_success': '{filename} scaricato',
	'ui.system_prompt_builder.download_error': 'Download non riuscito. Prova a copiare l’output.',
	'ui.system_prompt_builder.milliseconds': 'ms',
	'ui.system_prompt_builder.template_label': 'Template',
	'ui.system_prompt_builder.output_format_label': 'Formato output',
	'ui.system_prompt_builder.worker_active':
		'Input grande rilevato (>{size}). La generazione del prompt viene eseguita in un Web Worker.',
	'ui.system_prompt_builder.load_sample': 'Carica esempio',
	'ui.system_prompt_builder.clear': 'Cancella',
	'ui.system_prompt_builder.builder_inputs_title': 'Input del generatore',
	'ui.system_prompt_builder.output_label': 'Anteprima output',
	'ui.system_prompt_builder.processing': 'Creazione...',
	'ui.system_prompt_builder.worker_badge': 'Worker',
	'ui.system_prompt_builder.worker_used': 'Elaborato fuori dal thread principale',
	'ui.system_prompt_builder.copy_output': 'Copia output',
	'ui.system_prompt_builder.download_output': 'Scarica',
	'ui.system_prompt_builder.preview_title': 'Anteprima',
	'ui.system_prompt_builder.output_placeholder': 'Il prompt di sistema creato apparirà qui...',
	'ui.lorem.mode': 'Modalità',
	'ui.lorem.mode.paragraphs': 'Paragrafi',
	'ui.lorem.mode.sentences': 'Frasi',
	'ui.lorem.mode.words': 'Parole',
	'ui.lorem.count': 'Quantità',
	'ui.lorem.seed': 'Seed',
	'ui.lorem.random_seed': 'Seed casuale',
	'ui.lorem.generate': 'Genera',
	'ui.lorem.include_classic_opening': 'Includi apertura classica',
	'ui.lorem.auto_generate': 'Genera automaticamente alle modifiche',
	'ui.lorem.output_format': 'Formato output',
	'ui.lorem.output_format.plain': 'Testo semplice',
	'ui.lorem.output_format.html': 'HTML',
	'ui.lorem.advanced_options': 'Opzioni avanzate',
	'ui.lorem.min_words_per_sentence': 'Min parole / frase',
	'ui.lorem.max_words_per_sentence': 'Max parole / frase',
	'ui.lorem.min_sentences_per_paragraph': 'Min frasi / paragrafo',
	'ui.lorem.max_sentences_per_paragraph': 'Max frasi / paragrafo',
	'ui.lorem.source': 'Sorgente',
	'ui.lorem.preview': 'Anteprima',
	'ui.lorem.empty_output': "L'output generato apparirà qui...",
	'ui.lorem.generated': 'Lorem Ipsum generato',
	'ui.lorem.seed_randomized': 'Seed randomizzato',
	'ui.lorem.no_output': 'Nessun output generato al momento',
	'ui.markdown_to_html.placeholder': 'Scrivi o incolla Markdown qui...',
	'ui.markdown_to_html.option.gfm': 'Abilita tabelle GFM e task list',
	'ui.markdown_to_html.option.breaks': 'Converti i singoli a capo in <br>',
	'ui.markdown_to_html.option.highlight_code': 'Evidenzia i blocchi di codice fenced',
	'ui.markdown_to_html.option.open_links_in_new_tab': 'Apri i link in una nuova scheda',
	'ui.markdown_to_html.option.allow_raw_html': 'Consenti blocchi raw HTML (avanzato)',
	'ui.markdown_to_html.view.preview': 'Anteprima',
	'ui.markdown_to_html.view.html': 'HTML',
	'ui.markdown_to_html.status.converting': 'Conversione Markdown in corso...',
	'ui.markdown_to_html.preview_aria': 'Anteprima live Markdown in HTML',
	'ui.markdown_to_html.empty_preview': 'L’anteprima live apparirà qui appena inserisci Markdown.',
	'ui.markdown_to_html.empty_html': 'L’output HTML generato apparirà qui.',
	'ui.markdown_to_html.error.conversion_failed':
		'Conversione Markdown non riuscita. Controlla il contenuto e riprova.',
	'ui.markdown_to_html.toast.no_html_output': 'Nessun output HTML da scaricare',
	'ui.markdown_to_html.warning.unsafe_link_removed': 'Link non sicuro rimosso',
	'ui.markdown_to_html.warning.unsafe_image_removed': 'Immagine non sicura rimossa',
	'ui.markdown_to_html.warning.raw_html_escaped': 'Raw HTML escaped per sicurezza',
	'ui.markdown_to_html.stats.headings': 'Intestazioni',
	'ui.markdown_to_html.stats.tables': 'Tabelle',
	'ui.markdown_to_html.stats.code_blocks': 'Blocchi di codice',
	'ui.markdown_to_html.stats.links': 'Link',
	'ui.markdown_to_html.stats.images': 'Immagini',
	'ui.markdown_to_html.stats.words': 'Parole',
	'ui.text_case.tab_label': 'Formato',
	'ui.text_case.placeholder': 'Scrivi o incolla testo per convertire il formato...',
	'ui.text_case.camel_case': 'camelCase',
	'ui.text_case.pascal_case': 'PascalCase',
	'ui.text_case.snake_case': 'snake_case',
	'ui.text_case.kebab_case': 'kebab-case',
	'ui.text_case.constant_case': 'CONSTANT_CASE',
	'ui.text_case.title_case': 'Title Case',
	'ui.text_case.sentence_case': 'Formato frase',
	'ui.regex.pattern_label': 'Pattern',
	'ui.regex.pattern_placeholder': 'es. (?<name>\\w+)',
	'ui.regex.flags_label': 'Flag',
	'ui.regex.test_text_label': 'Testo di prova',
	'ui.regex.test_text_placeholder': 'Scrivi o incolla testo per testare il pattern...',
	'ui.regex.copy_regex': 'Copia Regex',
	'ui.regex.global_hint':
		'Attiva g per iterare tutte le corrispondenze. Senza g viene restituita solo la prima.',
	'ui.regex.stats.matches': 'Corrispondenze',
	'ui.regex.stats.unique_matches': 'Uniche',
	'ui.regex.stats.lines_with_matches': 'Righe',
	'ui.regex.stats.coverage': 'Copertura',
	'ui.regex.stats.duration': 'Durata',
	'ui.regex.highlight_title': 'Evidenziazione live',
	'ui.regex.preview_truncated': 'Anteprima limitata a {limit} caratteri',
	'ui.regex.no_highlight': 'Le corrispondenze verranno evidenziate qui.',
	'ui.regex.matches_title': 'Corrispondenze',
	'ui.regex.match_limit_reached': 'Limite corrispondenze raggiunto',
	'ui.regex.no_matches': 'Nessuna corrispondenza trovata.',
	'ui.regex.match_label': 'Corrispondenza #{index}',
	'ui.regex.match_position': 'Riga {line}, Colonna {column}',
	'ui.regex.match_range': 'Intervallo: {range}',
	'ui.regex.capture_groups': 'Gruppi di cattura',
	'ui.regex.no_capture_groups': 'Nessun gruppo di cattura',
	'ui.regex.named_capture_groups': 'Gruppi nominati',
	'ui.regex.no_named_capture_groups': 'Nessun gruppo nominato',
	'ui.regex.group_label': 'Gruppo {index}',
	'ui.regex.group_unmatched': 'Nessuna corrispondenza',
	'ui.regex.error.empty_pattern': 'Inserisci un pattern regex per iniziare il test.',
	'ui.regex.error.invalid_flag': 'Flag regex non valido: {flag}',
	'ui.regex.error.duplicate_flag': 'Flag regex duplicato: {flag}',
	'ui.regex.error.unsupported_flag': 'Flag regex non supportato in questo ambiente: {flag}',
	'ui.regex.error.syntax_error': 'Errore di sintassi nel pattern: {detail}',
	'ui.regex.flags.g.label': 'Global',
	'ui.regex.flags.g.description': 'Trova tutte le corrispondenze, non solo la prima',
	'ui.regex.flags.i.label': 'Ignore case',
	'ui.regex.flags.i.description': 'Ignora maiuscole/minuscole nelle lettere',
	'ui.regex.flags.m.label': 'Multiline',
	'ui.regex.flags.m.description': 'Fa funzionare ^ e $ su ogni riga',
	'ui.regex.flags.s.label': 'Dotall',
	'ui.regex.flags.s.description': 'Permette al punto (.) di includere anche gli a capo',
	'ui.regex.flags.u.label': 'Unicode',
	'ui.regex.flags.u.description': 'Abilita la modalità Unicode completa',
	'ui.regex.flags.y.label': 'Sticky',
	'ui.regex.flags.y.description': 'Esegue il match strettamente dalla posizione lastIndex corrente',
	'ui.regex.flags.d.label': 'Indici',
	'ui.regex.flags.d.description': 'Mostra indici di inizio/fine dei gruppi quando supportato',
	'tool.text-readability-analyzer.display_name': 'Analizzatore di leggibilità',
	'tool.text-readability-analyzer.tagline':
		'Misura quanto è facile leggere il tuo testo con formule di leggibilità affidabili',
	'tool.text-readability-analyzer.description':
		'Analizza la leggibilità del testo con Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau e SMOG. Ottieni subito metriche su complessità delle frasi ed età di lettura, direttamente nel browser.',
	'tool.text-readability-analyzer.primary_keyword': 'analizzatore di leggibilità',
	'tool.text-readability-analyzer.meta_title':
		'Analizzatore di leggibilità — punteggi Flesch, Fog, SMOG | fmtly.dev',
	'tool.text-readability-analyzer.meta_description':
		'Analizzatore di leggibilità gratuito con metriche Flesch, Flesch-Kincaid, Gunning Fog, Coleman-Liau e SMOG. Veloce, privato e 100% nel browser.',
	'tool.text-readability-analyzer.operation': 'Analizza leggibilità',
	'tool.text-readability-analyzer.faq.0.question':
		'Quali formule di leggibilità include questo strumento?',
	'tool.text-readability-analyzer.faq.0.answer':
		'Include Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau e SMOG, oltre a metriche aggiuntive sulla complessità del testo.',
	'tool.text-readability-analyzer.faq.1.question':
		'Perché il punteggio SMOG può non essere disponibile per testi brevi?',
	'tool.text-readability-analyzer.faq.1.answer':
		'SMOG è statisticamente più affidabile con almeno 3 frasi. Con testi più brevi, lo strumento mostra un avviso invece di un punteggio instabile.',
	'tool.text-readability-analyzer.faq.2.question':
		'L’analisi di leggibilità avviene in locale o su server?',
	'tool.text-readability-analyzer.faq.2.answer':
		'Tutto viene elaborato localmente nel browser. Il tuo testo non viene inviato a nessun server.',
	'tool.text-readability-analyzer.use_case.0':
		'Valutare documentazione, onboarding e articoli di supporto prima della pubblicazione',
	'tool.text-readability-analyzer.use_case.1':
		'Confrontare più bozze e scegliere la versione più chiara',
	'tool.text-readability-analyzer.use_case.2':
		'Ottimizzare microcopy di prodotto e messaggi in-app per un pubblico più ampio',
	'tool.text-readability-analyzer.use_case.3':
		'Individuare sezioni dense nella documentazione tecnica e semplificarle',
	'tool.text-morse-code-translator.display_name': 'Traduttore codice Morse',
	'tool.text-morse-code-translator.tagline':
		'Converti testo in Morse e decodifica Morse in testo leggibile',
	'tool.text-morse-code-translator.description':
		'Traduci testo in codice Morse internazionale e decodifica sequenze Morse all’istante. Supporta lettere, numeri e punteggiatura comune; per input grandi usa Web Worker mantenendo tutto nel browser.',
	'tool.text-morse-code-translator.primary_keyword': 'traduttore codice morse',
	'tool.text-morse-code-translator.meta_title':
		'Traduttore codice Morse — Testo ↔ Morse | fmtly.dev',
	'tool.text-morse-code-translator.meta_description':
		'Converti testo in Morse e Morse in testo normale in tempo reale. Veloce, privato e completamente nel browser.',
	'tool.text-morse-code-translator.operation': 'Traduci codice Morse',
	'tool.text-morse-code-translator.faq.0.question':
		'Quale variante di Morse usa questo traduttore?',
	'tool.text-morse-code-translator.faq.0.answer':
		'Usa il codice Morse internazionale per lettere latine, numeri e punteggiatura più comune.',
	'tool.text-morse-code-translator.faq.1.question':
		'Come vengono gestiti i token Morse sconosciuti in decodifica?',
	'tool.text-morse-code-translator.faq.1.answer':
		'I token sconosciuti vengono segnalati e possono essere sostituiti con un segnaposto configurabile per mantenere leggibile il risultato parziale.',
	'tool.text-morse-code-translator.faq.2.question':
		'Posso elaborare log lunghi o input molto grandi?',
	'tool.text-morse-code-translator.faq.2.answer':
		'Sì. Oltre 500KB l’elaborazione passa a un Web Worker, così l’interfaccia resta reattiva.',
	'tool.text-morse-code-translator.use_case.0':
		'Codificare rapidamente nominativi radio, avvisi o frasi di addestramento in Morse',
	'tool.text-morse-code-translator.use_case.1':
		'Decodificare frammenti Morse catturati da log, trascrizioni o esercizi',
	'tool.text-morse-code-translator.use_case.2':
		'Insegnare le basi del Morse con feedback immediato di codifica e decodifica',
	'tool.text-morse-code-translator.use_case.3':
		'Verificare punteggiatura e separatori prima di integrare Morse nei tool',
	'ui.morse.mode_label': 'Modalità',
	'ui.morse.mode.encode': 'Testo → Morse',
	'ui.morse.mode.decode': 'Morse → Testo',
	'ui.morse.separator_label': 'Separatore parole',
	'ui.morse.separator.slash': '/ slash',
	'ui.morse.separator.pipe': '| pipe',
	'ui.morse.separator.newline': 'Nuova riga',
	'ui.morse.option.preserve_unsupported_encode': 'Mantieni in output i caratteri non supportati',
	'ui.morse.option.preserve_unsupported_decode':
		'Inserisci un segnaposto per token Morse sconosciuti',
	'ui.morse.option.unknown_placeholder': 'Segnaposto sconosciuti',
	'ui.morse.input_label': 'Input',
	'ui.morse.output_label': 'Output',
	'ui.morse.input_placeholder.encode': 'Scrivi o incolla testo da convertire in Morse...',
	'ui.morse.input_placeholder.decode': 'Incolla codice Morse (., -, /, |) da decodificare...',
	'ui.morse.output_placeholder.encode': 'L’output Morse appare qui...',
	'ui.morse.output_placeholder.decode': 'Il testo decodificato appare qui...',
	'ui.morse.button.swap_mode': 'Cambia modalità e usa output',
	'ui.morse.worker_active':
		'Input di grandi dimensioni rilevato (>{size}). L’elaborazione avviene in Web Worker.',
	'ui.morse.worker_failed': 'Elaborazione Worker non riuscita. Fallback al thread principale.',
	'ui.morse.warning.unsupported_input_characters':
		'Alcuni caratteri in input non rientrano nelle mappature Morse supportate.',
	'ui.morse.warning.unknown_morse_tokens': 'Alcuni token Morse non sono stati decodificati.',
	'ui.morse.warning.no_changes': 'Nessuna modifica rilevata per la modalità selezionata.',
	'ui.morse.stat.symbols': 'Simboli',
	'ui.morse.stat.words': 'Parole',
	'ui.morse.stat.unsupported': 'Non supportati',
	'ui.morse.stat.unknown_tokens': 'Token sconosciuti',
	'ui.readability.unavailable': '—',
	'ui.readability.input_label': 'Testo di input',
	'ui.readability.input_placeholder': 'Incolla o scrivi testo per analizzare la leggibilità...',
	'ui.readability.output_title': 'Analisi di leggibilità',
	'ui.readability.processing': 'Analisi in corso...',
	'ui.readability.copy_report': 'Copia report',
	'ui.readability.worker_active':
		'Input di grandi dimensioni rilevato (>{size}). L’analisi viene eseguita in un Web Worker.',
	'ui.readability.worker_failed':
		'Elaborazione Worker non riuscita. Fallback all’analisi sul thread principale.',
	'ui.readability.level_label': 'Leggibilità complessiva',
	'ui.readability.level.very_easy': 'Molto facile',
	'ui.readability.level.easy': 'Facile',
	'ui.readability.level.fairly_easy': 'Abbastanza facile',
	'ui.readability.level.standard': 'Standard',
	'ui.readability.level.fairly_difficult': 'Abbastanza difficile',
	'ui.readability.level.difficult': 'Difficile',
	'ui.readability.level.very_difficult': 'Molto difficile',
	'ui.readability.level_desc.very_easy': 'Adatto a un pubblico ampio e a una lettura veloce.',
	'ui.readability.level_desc.easy': 'Linguaggio chiaro con basso carico cognitivo.',
	'ui.readability.level_desc.fairly_easy':
		'Ottimo livello per documentazione prodotto, guide e contenuti web generali.',
	'ui.readability.level_desc.standard':
		'Leggibilità equilibrata per lettori tecnici e non tecnici.',
	'ui.readability.level_desc.fairly_difficult':
		'Alcune parti sono dense: conviene semplificare le frasi lunghe.',
	'ui.readability.level_desc.difficult':
		'Richiede lettura attenta. Frasi più corte e lessico semplice aiutano.',
	'ui.readability.level_desc.very_difficult':
		'Testo molto denso. Meglio riscriverlo per maggiore chiarezza.',
	'ui.readability.metric.words': 'Parole',
	'ui.readability.metric.sentences': 'Frasi',
	'ui.readability.metric.syllables': 'Sillabe',
	'ui.readability.metric.reading_age': 'Età di lettura',
	'ui.readability.metric.reading_time': 'Tempo di lettura',
	'ui.readability.metric.paragraphs': 'Paragrafi',
	'ui.readability.metric.complex_words': 'Parole complesse',
	'ui.readability.stat.avg_words_per_sentence': 'Media parole/frase',
	'ui.readability.stat.avg_syllables_per_word': 'Media sillabe/parola',
	'ui.readability.stat.characters': 'Caratteri',
	'ui.readability.stat.letters': 'Lettere',
	'ui.readability.scores_title': 'Formule di leggibilità',
	'ui.readability.score.flesch_ease': 'Flesch Reading Ease',
	'ui.readability.score.flesch_kincaid': 'Flesch-Kincaid Grade',
	'ui.readability.score.gunning_fog': 'Gunning Fog',
	'ui.readability.score.coleman_liau': 'Indice Coleman-Liau',
	'ui.readability.score.smog': 'SMOG',
	'ui.readability.score_desc.flesch_ease': 'Più alto è il valore, più il testo è facile.',
	'ui.readability.score_desc.flesch_kincaid':
		'Livello scolastico stimato nel sistema educativo USA.',
	'ui.readability.score_desc.gunning_fog':
		'Complessità basata su lunghezza frasi e difficoltà lessicale.',
	'ui.readability.score_desc.coleman_liau': 'Leggibilità calcolata da densità di lettere e frasi.',
	'ui.readability.score_desc.smog': 'Stima del livello di lettura basata su parole polisillabiche.',
	'ui.readability.warning.insufficient_sentences_for_smog':
		'SMOG richiede almeno 3 frasi per una stima stabile.',
	'ui.readability.report_title': 'Report di leggibilità',
	'ui.readability.report_level': 'Livello',
	'ui.readability.report_reading_age': 'Età di lettura stimata',
	'ui.text_reverser.tab_label': 'Inverti',
	'ui.text_reverser.placeholder': 'Scrivi o incolla testo da invertire...',
	'ui.text_reverser.characters': 'Inverti per caratteri',
	'ui.text_reverser.words': 'Inverti per parole',
	'ui.text_reverser.lines': 'Inverti per righe',
	'ui.text_reverser.lines_count': 'righe',
	'ui.duplicate_line_remover.tab_label': 'Deduplica',
	'ui.duplicate_line_remover.placeholder':
		'Digita o incolla testo per rimuovere righe duplicate...',
	'ui.duplicate_line_remover.unique_lines': 'Righe uniche',
	'ui.duplicate_line_remover.duplicates_removed': 'Duplicati rimossi',
	'ui.duplicate_line_remover.result': 'Risultato',
	'ui.line_sorter.tab_label': 'Ordina',
	'ui.line_sorter.placeholder': 'Scrivi o incolla righe da ordinare...',
	'ui.line_sorter.mode_label': 'Modalità ordinamento',
	'ui.line_sorter.mode.alphabetical': 'Alfabetico',
	'ui.line_sorter.mode.numeric': 'Numerico',
	'ui.line_sorter.mode.length': 'Per lunghezza',
	'ui.line_sorter.mode.random': 'Shuffle casuale',
	'ui.line_sorter.direction_label': 'Direzione',
	'ui.line_sorter.direction.asc': 'Crescente',
	'ui.line_sorter.direction.desc': 'Decrescente',
	'ui.line_sorter.option.case_sensitive': 'Ordina con distinzione maiuscole/minuscole',
	'ui.line_sorter.option.trim_before_sort': 'Rimuovi spazi iniziali/finali prima di ordinare',
	'ui.line_sorter.option.remove_empty_lines': 'Rimuovi righe vuote',
	'ui.line_sorter.option.deduplicate': 'Deduplica righe prima di ordinare',
	'ui.line_sorter.shuffle_seed': 'Seed shuffle',
	'ui.line_sorter.generate_seed': 'Randomizza seed',
	'ui.line_sorter.input_lines': 'Righe in input',
	'ui.line_sorter.output_lines': 'Righe in output',
	'ui.line_sorter.empty_lines_removed': 'Righe vuote rimosse',
	'ui.line_sorter.duplicates_removed': 'Duplicati rimossi',
	'ui.line_sorter.lines_moved': 'Righe spostate',
	'ui.line_sorter.output': 'Output ordinato',
	'ui.line_sorter.apply_output': 'Applica all’input',
	'ui.line_sorter.status.processing': 'Ordinamento righe in corso...',
	'ui.line_sorter.status.worker': 'Modalità input grande (Web Worker)',
	'ui.line_sorter.error.processing_failed':
		'Ordinamento non riuscito. Modifica opzioni o contenuto e riprova.',
	'ui.line_sorter.toast.applied': 'Output ordinato applicato all’input',
	'ui.line_sorter.no_output': 'Nessun output ordinato da mostrare al momento',
	'ui.whitespace_cleaner.tab_label': 'Spazi',
	'ui.whitespace_cleaner.placeholder': 'Digita o incolla testo per pulire gli spazi...',
	'ui.whitespace_cleaner.trailing_spaces': 'Spazi finali',
	'ui.whitespace_cleaner.leading_spaces': 'Spazi iniziali',
	'ui.whitespace_cleaner.blanks_collapsed': 'Spazi uniti',
	'ui.whitespace_cleaner.tabs_converted': 'Tab convertite',
	'ui.whitespace_cleaner.spaces_converted': 'Spazi convertiti',
	'ui.whitespace_cleaner.lines_processed': 'Righe processate',
	'ui.whitespace_cleaner.line_endings_normalized': 'Fine riga normalizzate',
	'ui.whitespace_cleaner.result': 'Risultato',
	'ui.whitespace_cleaner.options': 'Opzioni Pulizia',
	'ui.whitespace_cleaner.remove_leading': 'Rimuovi spazi iniziali',
	'ui.whitespace_cleaner.remove_trailing': 'Rimuovi spazi finali',
	'ui.whitespace_cleaner.collapse_spaces': 'Unisci spazi multipli',
	'ui.whitespace_cleaner.collapse_tabs': 'Unisci tab in spazi',
	'ui.whitespace_cleaner.convert_tabs_to_spaces': 'Converti tab in spazi',
	'ui.whitespace_cleaner.convert_spaces_to_tabs': 'Converti spazi in tab',
	'ui.whitespace_cleaner.trim_lines': 'Taglia ogni riga',
	'ui.whitespace_cleaner.remove_all_spaces': 'Rimuovi tutti gli spazi',
	'ui.whitespace_cleaner.remove_all_line_breaks': 'Rimuovi tutti gli a capo',
	'ui.whitespace_cleaner.preserve_paragraph_breaks': 'Preserva interruzioni paragrafo',
	'ui.whitespace_cleaner.tab_size': 'Dimensione tab',
	'ui.csv.controls.table_name': 'Nome Tabella',
	'ui.csv.controls.batch_size': 'Dimensione Batch',
	// ── Categoria Encode ──────────────────────────────────────────────────────
	'category.encode.display_name': 'Codifica / Decodifica',
	'category.encode.description':
		'Codifica e decodifica dati nei formati più comuni — JWT, Base64, URL, entità HTML e altro. Tutti gli strumenti funzionano interamente nel tuo browser.',
	'category.encode.primary_keyword': 'strumenti codifica decodifica',
	// ── JWT Decoder ───────────────────────────────────────────────────────────
	'tool.encode-jwt-decoder.display_name': 'Decodificatore JWT',
	'tool.encode-jwt-decoder.tagline': 'Decodifica token JWT e ispeziona claim, scadenza e algoritmo',
	'tool.encode-jwt-decoder.description':
		"Decodifica istantaneamente i JSON Web Token — ispeziona l'algoritmo dell'intestazione, i claim del payload, i timestamp di scadenza e la firma raw in Base64URL. Tutta l'elaborazione avviene nel browser; nulla viene mai inviato a un server.",
	'tool.encode-jwt-decoder.primary_keyword': 'decodificatore jwt',
	'tool.encode-jwt-decoder.meta_title':
		'Decodificatore JWT — Ispeziona intestazione, payload e claim | fmtly.dev',
	'tool.encode-jwt-decoder.meta_description':
		'Decodifica e ispeziona token JWT nel tuo browser. Visualizza intestazione, claim del payload, stato di scadenza e firma. Veloce, privato e gratuito — nessun dato lascia il tuo dispositivo.',
	'tool.encode-jwt-decoder.operation': 'Decodifica JWT',
	'tool.encode-jwt-decoder.faq.0.question': 'Il mio JWT viene inviato a un server?',
	'tool.encode-jwt-decoder.faq.0.answer':
		'No. Tutta la decodifica avviene interamente nel browser. Il token non lascia mai il tuo dispositivo, rendendo questo strumento sicuro anche con token di autenticazione reali.',
	'tool.encode-jwt-decoder.faq.1.question': 'Questo strumento verifica la firma?',
	'tool.encode-jwt-decoder.faq.1.answer':
		"No. La verifica della firma richiede la chiave segreta o pubblica. Questo strumento decodifica e mostra solo il payload — usa la tua libreria lato server per verificare l'autenticità.",
	'tool.encode-jwt-decoder.faq.2.question': 'Quali algoritmi JWT sono supportati?',
	'tool.encode-jwt-decoder.faq.2.answer':
		"Il decodificatore gestisce qualsiasi JWT standard in tre parti indipendentemente dall'algoritmo (HS256, RS256, ES256, ecc.), poiché decodifica solo il contenuto codificato in Base64URL senza verificare la firma.",
	'tool.encode-jwt-decoder.faq.3.question':
		'Posso decodificare JWT di grandi dimensioni o batch di token?',
	'tool.encode-jwt-decoder.faq.3.answer':
		"Gli input superiori a 500KB vengono automaticamente elaborati in un Web Worker, mantenendo reattiva l'interfaccia anche per token insolitamente grandi o payload di test.",
	'tool.encode-jwt-decoder.use_case.0':
		'Ispezionare token di autenticazione durante lo sviluppo e il debug di API in locale',
	'tool.encode-jwt-decoder.use_case.1':
		"Verificare la scadenza del token e i valori dei claim standard (iss, sub, aud) a colpo d'occhio",
	'tool.encode-jwt-decoder.use_case.2':
		'Insegnare la struttura JWT e il ruolo delle sezioni intestazione, payload e firma',
	'tool.encode-jwt-decoder.use_case.3':
		'Risolvere i problemi di autorizzazione esaminando i claim personalizzati nel payload',
	// ── JWT Decoder — stringhe interfaccia ───────────────────────────────────
	'ui.jwt.input_placeholder': 'Incolla qui il tuo token JWT (eyJ…)',
	'ui.jwt.section.header': 'Intestazione',
	'ui.jwt.section.payload': 'Payload',
	'ui.jwt.section.signature': 'Firma',
	'ui.jwt.standard_claims': 'Claim standard',
	'ui.jwt.all_claims': 'Tutti i claim',
	'ui.jwt.signature_note':
		"Le firme non vengono verificate. Usa la tua libreria lato server per verificare l'autenticità del token.",
	'ui.jwt.status.valid': 'Valido',
	'ui.jwt.status.expired': 'Scaduto',
	'ui.jwt.status.not_yet_valid': 'Non ancora valido',
	'ui.jwt.status.no_expiry': 'Nessuna scadenza',
	'ui.jwt.expires_in': 'Scade in {time}',
	'ui.jwt.expired_ago': 'Scaduto {time} fa',
	'ui.jwt.claim.iss': 'Emittente',
	'ui.jwt.claim.sub': 'Soggetto',
	'ui.jwt.claim.aud': 'Destinatario',
	'ui.jwt.claim.exp': 'Scade',
	'ui.jwt.claim.nbf': 'Non prima di',
	'ui.jwt.claim.iat': 'Emesso il',
	'ui.jwt.claim.jti': 'ID JWT',
	'ui.jwt.error.empty': 'Incolla un token JWT sopra per decodificarlo.',
	'ui.jwt.error.invalid_format': 'Formato JWT non valido: attese 3 parti separate da punti.',
	'ui.jwt.error.invalid_base64': 'Decodifica Base64URL non riuscita.',
	'ui.jwt.error.invalid_json': 'Il contenuto decodificato non è JSON valido.',
	'ui.jwt.clear': 'Cancella',
	'ui.jwt.copy_jwt': 'Copia token',
	'ui.jwt.copy_header': 'Copia',
	'ui.jwt.copy_payload': 'Copia',
	'ui.jwt.copy_signature': 'Copia',
	'ui.jwt.worker_active': 'Input grande (>{size}) elaborato nel Worker.',
	'ui.jwt.worker_failed': 'Elaborazione Worker fallita. Ripiego sul thread principale.',
	// ── Codifica / Decodifica Base64 ─────────────────────────────────────────
	'tool.encode-base64-encode-decode.display_name': 'Base64 Codifica / Decodifica',
	'tool.encode-base64-encode-decode.tagline':
		'Codifica o decodifica testo Base64 con varianti standard e URL-safe',
	'tool.encode-base64-encode-decode.description':
		'Codifica testo semplice in Base64 o decodifica Base64 in testo UTF-8 direttamente nel browser. Passa tra variante standard e URL-safe, controlla il padding, ignora gli spazi durante la decodifica e gestisci input grandi con Web Worker.',
	'tool.encode-base64-encode-decode.primary_keyword': 'base64 codifica decodifica',
	'tool.encode-base64-encode-decode.meta_title':
		'Base64 Codifica / Decodifica — Standard e URL-safe | fmtly.dev',
	'tool.encode-base64-encode-decode.meta_description':
		'Codifica o decodifica Base64 subito nel browser. Include varianti standard/URL-safe, opzioni di padding, decodifica tollerante agli spazi e Web Worker per input di grandi dimensioni.',
	'tool.encode-base64-encode-decode.operation': 'Base64 Codifica / Decodifica',
	'tool.encode-base64-encode-decode.faq.0.question':
		'I miei dati Base64 vengono inviati a un server?',
	'tool.encode-base64-encode-decode.faq.0.answer':
		'No. Tutta la codifica e decodifica Base64 avviene interamente nel browser. I tuoi dati restano sul dispositivo.',
	'tool.encode-base64-encode-decode.faq.1.question':
		'Qual è la differenza tra Base64 standard e Base64 URL-safe?',
	'tool.encode-base64-encode-decode.faq.1.answer':
		'Il Base64 standard usa + e /, mentre il Base64 URL-safe usa - e _. La variante URL-safe è ideale per JWT, parametri query e nomi file con caratteri riservati nelle URL.',
	'tool.encode-base64-encode-decode.faq.2.question':
		'Può decodificare Base64 con padding mancante o a capo?',
	'tool.encode-base64-encode-decode.faq.2.answer':
		'Sì. Il decoder può ignorare gli spazi e ripristinare automaticamente il padding mancante quando possibile, utile per valori copiati da log e token.',
	'tool.encode-base64-encode-decode.faq.3.question': 'Può gestire payload Base64 molto grandi?',
	'tool.encode-base64-encode-decode.faq.3.answer':
		'Sì. Gli input superiori a 500KB vengono elaborati automaticamente in un Web Worker per mantenere l’interfaccia reattiva.',
	'tool.encode-base64-encode-decode.use_case.0':
		'Codificare credenziali API o payload di test in Base64 durante lo sviluppo',
	'tool.encode-base64-encode-decode.use_case.1':
		'Decodificare frammenti Base64 copiati da log, header o strumenti di debug',
	'tool.encode-base64-encode-decode.use_case.2':
		'Passare rapidamente tra Base64 standard e URL-safe',
	'tool.encode-base64-encode-decode.use_case.3':
		'Normalizzare input Base64 disordinati con spazi e padding mancante',
	// ── Codifica / Decodifica Base64 — stringhe interfaccia ──────────────────
	'ui.base64.tab_label': 'Base64',
	'ui.base64.action_label': 'Azione',
	'ui.base64.action.encode': 'Codifica',
	'ui.base64.action.decode': 'Decodifica',
	'ui.base64.variant_label': 'Variante',
	'ui.base64.variant.standard': 'Standard',
	'ui.base64.variant.url_safe': 'URL-safe',
	'ui.base64.input_label': 'Input',
	'ui.base64.output_label': 'Output',
	'ui.base64.input_placeholder': 'Incolla testo semplice o contenuto Base64...',
	'ui.base64.output_placeholder': 'L’output codificato o decodificato appare qui...',
	'ui.base64.option.omit_padding': 'Rimuovi il padding finale =',
	'ui.base64.option.ignore_whitespace': 'Ignora a capo e spazi durante la decodifica',
	'ui.base64.worker_active':
		'Input grande rilevato (>{size}). L’elaborazione avviene in un Web Worker.',
	'ui.base64.worker_failed': 'Elaborazione Worker non riuscita. Ripiego sul thread principale.',
	'ui.base64.worker_badge': 'Worker',
	'ui.base64.warning.no_changes': 'Nessuna modifica rilevata per modalità e azione selezionate.',
	'ui.base64.warning.whitespace_ignored':
		'I caratteri di spazio sono stati rimossi prima della decodifica.',
	'ui.base64.warning.padding_auto_added':
		'Il padding mancante è stato aggiunto automaticamente prima della decodifica.',
	'ui.base64.warning.alphabet_normalized':
		'I caratteri URL-safe sono stati normalizzati in Base64 standard per la decodifica.',
	'ui.base64.error.invalid_base64_characters': 'Input Base64 non valido: {detail}',
	'ui.base64.error.invalid_base64_length': 'Lunghezza Base64 non valida: {detail}',
	'ui.base64.error.invalid_utf8_output':
		'I byte decodificati non formano testo UTF-8 valido: {detail}',
	'ui.base64.button.swap_direction': 'Inverti direzione',
	'ui.base64.button.apply_output': 'Applica output all’input',
	'ui.base64.toast.applied': 'Output applicato all’input',
	'ui.base64.characters': 'caratteri',
	// ── Codifica / Decodifica URL ────────────────────────────────────────────
	'tool.encode-url-encode-decode.display_name': 'Codifica / Decodifica URL',
	'tool.encode-url-encode-decode.tagline':
		'Codifica percentuale o decodifica testo URL in modalità componente o URL completa',
	'tool.encode-url-encode-decode.description':
		'Codifica o decodifica stringhe URL istantaneamente nel browser. Passa dalla modalità componente (encodeURIComponent/decodeURIComponent) alla modalità URL completa (encodeURI/decodeURI), gestisci + come spazio nei dati form e processa input grandi con Web Worker.',
	'tool.encode-url-encode-decode.primary_keyword': 'codifica decodifica url',
	'tool.encode-url-encode-decode.meta_title':
		'Codifica / Decodifica URL — Codifica percentuale online | fmtly.dev',
	'tool.encode-url-encode-decode.meta_description':
		'Codifica o decodifica URL nel browser. Con modalità componente/URL completa, gestione + e spazio, e supporto Web Worker per input di grandi dimensioni.',
	'tool.encode-url-encode-decode.operation': 'Codifica / Decodifica URL',
	'tool.encode-url-encode-decode.faq.0.question': 'I miei dati URL vengono inviati a un server?',
	'tool.encode-url-encode-decode.faq.0.answer':
		'No. Tutta la codifica e la decodifica avvengono completamente nel browser. I dati restano sul tuo dispositivo.',
	'tool.encode-url-encode-decode.faq.1.question':
		'Qual è la differenza tra modalità componente e modalità URL completa?',
	'tool.encode-url-encode-decode.faq.1.answer':
		'La modalità componente è pensata per frammenti singoli come valori query o segmenti path, quindi codifica anche delimitatori come ?, & e =. La modalità URL completa mantiene questi delimitatori strutturali e codifica solo i caratteri non sicuri.',
	'tool.encode-url-encode-decode.faq.2.question':
		'Perché + a volte viene decodificato come spazio?',
	'tool.encode-url-encode-decode.faq.2.answer':
		'Nei payload application/x-www-form-urlencoded gli spazi sono spesso rappresentati come +. Attiva l’opzione dedicata in fase di decodifica quando lavori con dati di form.',
	'tool.encode-url-encode-decode.faq.3.question': 'Può gestire payload URL molto grandi?',
	'tool.encode-url-encode-decode.faq.3.answer':
		'Sì. Gli input oltre 500KB vengono elaborati automaticamente in un Web Worker per mantenere l’interfaccia reattiva.',
	'tool.encode-url-encode-decode.use_case.0':
		'Codificare in modo sicuro i valori query prima di inviare richieste API',
	'tool.encode-url-encode-decode.use_case.1':
		'Decodificare frammenti URL copiati dai log durante il debug del routing',
	'tool.encode-url-encode-decode.use_case.2':
		'Validare il comportamento +/spazio in esempi form-urlencoded',
	'tool.encode-url-encode-decode.use_case.3':
		'Confrontare URL codificate e decodificate durante l’analisi di redirect',
	// ── Entità HTML codifica / decodifica — strumento ───────────────────────
	'tool.encode-html-entities-encode-decode.display_name': 'Codifica / decodifica entità HTML',
	'tool.encode-html-entities-encode-decode.tagline':
		'Codifica o decodifica le referenze di carattere HTML — nomi WHATWG, decimale ed esadecimale',
	'tool.encode-html-entities-encode-decode.description':
		'Trasforma il testo in entità HTML sicure o decodifica le referenze in Unicode, tutto nel browser. Mappa completa dei nomi WHATWG, forme numeriche, decodifica strict o permissiva, opzione per tutto il non-ASCII e Web Worker oltre 500 KB.',
	'tool.encode-html-entities-encode-decode.primary_keyword':
		'codifica decodifica entità html online',
	'tool.encode-html-entities-encode-decode.meta_title':
		'Entità HTML: codifica e decodifica online | fmtly.dev',
	'tool.encode-html-entities-encode-decode.meta_description':
		'Codifica o decodifica entità HTML istantaneamente nel browser. Mappa WHATWG completa, modalità decimale ed esadecimale, validazione strict, ambito essenziale vs Unicode completo e Web Worker per input grandi.',
	'tool.encode-html-entities-encode-decode.operation': 'Codifica / decodifica entità HTML',
	'tool.encode-html-entities-encode-decode.faq.0.question':
		'Il mio testo viene inviato a un server?',
	'tool.encode-html-entities-encode-decode.faq.0.answer':
		'No. Codifica e decodifica avvengono interamente nel browser; l’input non lascia il dispositivo.',
	'tool.encode-html-entities-encode-decode.faq.1.question':
		'Che differenza c’è tra decodifica strict e permissiva?',
	'tool.encode-html-entities-encode-decode.faq.1.answer':
		'La modalità permissiva lascia invariate le referenze sconosciute o malformate, utile per frammenti misti. Quella strict si ferma con errore se una referenza è incompleta o non riconosciuta.',
	'tool.encode-html-entities-encode-decode.faq.2.question':
		'Quali entità con nome sono supportate?',
	'tool.encode-html-entities-encode-decode.faq.2.answer':
		'La decodifica usa l’elenco completo WHATWG delle referenze con nome (oltre 2.100) più le referenze numeriche decimali ed esadecimali.',
	'tool.encode-html-entities-encode-decode.faq.3.question': 'Gestisce documenti molto grandi?',
	'tool.encode-html-entities-encode-decode.faq.3.answer':
		'Sì. Oltre 500 KB l’elaborazione passa a un Web Worker per mantenere l’interfaccia reattiva.',
	'tool.encode-html-entities-encode-decode.use_case.0':
		'Escapare contenuti generati dagli utenti prima di inserirli nei template HTML',
	'tool.encode-html-entities-encode-decode.use_case.1':
		'Decodificare entità da HTML esportato o scrapato in testo semplice leggibile',
	'tool.encode-html-entities-encode-decode.use_case.2':
		'Normalizzare virgolette, e commerciali e simboli per markup CMS o e-mail',
	'tool.encode-html-entities-encode-decode.use_case.3':
		'Verificare regole di parsing strict su frammenti HTML o fixture di test',
	// ── Entità HTML — interfaccia ──────────────────────────────────────────
	'ui.encode_html_entities.tab_label': 'Entità',
	'ui.encode_html_entities.action_label': 'Azione',
	'ui.encode_html_entities.action.encode': 'Codifica',
	'ui.encode_html_entities.action.decode': 'Decodifica',
	'ui.encode_html_entities.format_label': 'Formato di output',
	'ui.encode_html_entities.format.named': 'Con nome + fallback numerico',
	'ui.encode_html_entities.format.decimal': 'Numerico decimale',
	'ui.encode_html_entities.format.hex': 'Numerico esadecimale',
	'ui.encode_html_entities.scope_label': 'Ambito di codifica',
	'ui.encode_html_entities.scope.essentials': 'Essenziali (& < > " \')',
	'ui.encode_html_entities.scope.all_non_ascii': 'Essenziali + tutto il non-ASCII',
	'ui.encode_html_entities.apostrophe_label': 'Apostrofo (modalità con nome)',
	'ui.encode_html_entities.apostrophe.numeric': '&#39;',
	'ui.encode_html_entities.apostrophe.apos': '&apos;',
	'ui.encode_html_entities.option.encode_line_breaks': 'Codifica CR/LF come entità numeriche',
	'ui.encode_html_entities.option.encode_apostrophe': 'Codifica apostrofo (U+0027)',
	'ui.encode_html_entities.decode_mode_label': 'Modalità di decodifica',
	'ui.encode_html_entities.decode.permissive': 'Permissiva',
	'ui.encode_html_entities.decode.strict': 'Strict',
	'ui.encode_html_entities.decode.hint':
		'La modalità strict rifiuta referenze sconosciute o malformate. Quella permissiva lascia invariati i frammenti non validi.',
	'ui.encode_html_entities.input_label': 'Input',
	'ui.encode_html_entities.output_label': 'Output',
	'ui.encode_html_entities.input_placeholder': 'Incolla testo o frammenti HTML con entità...',
	'ui.encode_html_entities.output_placeholder': 'L’output codificato o decodificato appare qui...',
	'ui.encode_html_entities.worker_active':
		'Input grande rilevato (>{size}). L’elaborazione avviene in un Web Worker.',
	'ui.encode_html_entities.worker_failed':
		'Elaborazione Worker non riuscita. Ripiego sul thread principale.',
	'ui.encode_html_entities.worker_badge': 'Worker',
	'ui.encode_html_entities.warning.no_changes':
		'Nessuna modifica rilevata con le opzioni selezionate.',
	'ui.encode_html_entities.error.invalid_entity': '{detail} (offset {offset})',
	'ui.encode_html_entities.error.incomplete_reference': '{detail} (offset {offset})',
	'ui.encode_html_entities.button.swap_direction': 'Inverti direzione',
	'ui.encode_html_entities.button.apply_output': 'Applica output all’input',
	'ui.encode_html_entities.toast.applied': 'Output applicato all’input',
	'ui.encode_html_entities.characters': 'caratteri',
	// ── Ispezione Unicode — strumento ───────────────────────────────────────
	'tool.encode-unicode-inspector.display_name': 'Ispezione Unicode',
	'tool.encode-unicode-inspector.tagline':
		'Ispeziona punti di codice, byte UTF-8, nomi, categoria, script e larghezza est-asiativa',
	'tool.encode-unicode-inspector.description':
		'Incolla testo UTF-8 per vedere ogni cluster di grafemi o ogni valore scalare Unicode con notazione U+, byte UTF-8 in esadecimale, nome ufficiale, categoria generale, script e larghezza est-asiativa. Gli input grandi usano un Web Worker; tutto resta nel browser.',
	'tool.encode-unicode-inspector.primary_keyword': 'ispezione unicode punti di codice',
	'tool.encode-unicode-inspector.meta_title': 'Ispezione Unicode — UTF-8 | fmtly.dev',
	'tool.encode-unicode-inspector.meta_description':
		'Ispeziona Unicode nel browser: punti U+, byte UTF-8, nomi, categoria, script e larghezza est-asiativa. Modalità grafema o scalare; Worker per testi grandi. Privato e immediato.',
	'tool.encode-unicode-inspector.operation': 'Ispeziona Unicode',
	'tool.encode-unicode-inspector.faq.0.question': 'Il mio testo viene caricato su un server?',
	'tool.encode-unicode-inspector.faq.0.answer':
		'No. L’analisi avviene interamente nel browser. L’input non lascia il dispositivo.',
	'tool.encode-unicode-inspector.faq.1.question':
		'Che differenza c’è tra modalità grafema e scalare?',
	'tool.encode-unicode-inspector.faq.1.answer':
		'La modalità grafema raggruppa i caratteri percepiti dall’utente (emoji con tonalità, sequenze ZWJ, segni combinanti) se il browser supporta Intl.Segmenter. La modalità scalare elenca ogni punto di codice Unicode separatamente.',
	'tool.encode-unicode-inspector.faq.2.question':
		'Perché nomi o proprietà a volte sembrano poco familiari?',
	'tool.encode-unicode-inspector.faq.2.answer':
		'Nomi e proprietà seguono l’Unicode Character Database. I punti non assegnati compaiono come «unassigned» o simile; alcuni simboli usano nomi Unicode normativi.',
	'tool.encode-unicode-inspector.faq.3.question': 'Perché gli input grandi usano un Web Worker?',
	'tool.encode-unicode-inspector.faq.3.answer':
		'Gli input oltre 500 KB vengono elaborati fuori dal thread principale per mantenere reattivi tabella, scorrimento e controlli durante l’uso delle tabelle Unicode.',
	'tool.encode-unicode-inspector.use_case.0':
		'Debug di caratteri invisibili, encoding errato o script misti in log e input utente',
	'tool.encode-unicode-inspector.use_case.1':
		'Verificare sequenze UTF-8 e punti di codice per nomi file o API internazionalizzate',
	'tool.encode-unicode-inspector.use_case.2':
		'Insegnare le basi Unicode: cluster di grafemi, segni combinanti e sequenze emoji',
	'tool.encode-unicode-inspector.use_case.3':
		'Esportare una tabella TSV di segmenti e proprietà per documentazione o fixture di test',
	// ── Ispezione Unicode — interfaccia ────────────────────────────────────────
	'ui.unicode_inspector.tab_label': 'Unicode',
	'ui.unicode_inspector.utf16_units': 'unità UTF-16',
	'ui.unicode_inspector.backend_load_error':
		'Impossibile caricare le tabelle dei nomi Unicode. Controlla la connessione e riprova.',
	'ui.unicode_inspector.worker_failed':
		'Elaborazione Worker non riuscita. Ripiego sul thread principale.',
	'ui.unicode_inspector.granularity_label': 'Segmentazione',
	'ui.unicode_inspector.granularity.grapheme': 'Cluster di grafemi',
	'ui.unicode_inspector.granularity.codepoint': 'Valori scalari Unicode',
	'ui.unicode_inspector.granularity_hint':
		'La modalità grafema usa Intl.Segmenter se disponibile (sequenze ZWJ emoji, segni combinanti). Altrimenti ogni scalare è mostrato separatamente.',
	'ui.unicode_inspector.max_scalars_label': 'Limite righe (scalari)',
	'ui.unicode_inspector.worker_active':
		'Input grande (>{size}). L’ispezione viene eseguita in un Web Worker.',
	'ui.unicode_inspector.copy_tsv': 'Copia TSV',
	'ui.unicode_inspector.input_label': 'Input',
	'ui.unicode_inspector.input_placeholder':
		'Incolla testo UTF-8 per ispezionare i punti di codice…',
	'ui.unicode_inspector.results_label': 'Ispezione',
	'ui.unicode_inspector.loading_backend': 'Caricamento dati Unicode…',
	'ui.unicode_inspector.worker_badge': 'Worker',
	'ui.unicode_inspector.summary':
		'{clusters} cluster · {scalars} scalari · {bytes} byte UTF-8 · {ms} ms',
	'ui.unicode_inspector.truncated':
		'Output troncato; altri {omitted} scalare/i non mostrati. Aumenta il limite o accorcia l’input.',
	'ui.unicode_inspector.col.segment': 'Segmento',
	'ui.unicode_inspector.col.codepoint': 'U+',
	'ui.unicode_inspector.col.glyph': 'Glifo',
	'ui.unicode_inspector.col.utf8': 'UTF-8',
	'ui.unicode_inspector.col.category': 'Cat.',
	'ui.unicode_inspector.col.script': 'Script',
	'ui.unicode_inspector.col.eaw': 'EaW',
	'ui.unicode_inspector.col.name': 'Nome',
	'ui.unicode_inspector.table_region': 'Tabella scalari Unicode',
	'ui.unicode_inspector.empty_hint': 'Digita o incolla testo per vedere punti di codice e nomi.',
	'ui.unicode_inspector.gc.Lu': 'Lettera, maiuscola',
	'ui.unicode_inspector.gc.Ll': 'Lettera, minuscola',
	'ui.unicode_inspector.gc.Lt': 'Lettera, titolo',
	'ui.unicode_inspector.gc.Lm': 'Lettera, modificatore',
	'ui.unicode_inspector.gc.Lo': 'Lettera, altro',
	'ui.unicode_inspector.gc.Mn': 'Segno, non spaziante',
	'ui.unicode_inspector.gc.Mc': 'Segno, spaziante combinante',
	'ui.unicode_inspector.gc.Me': 'Segno, racchiudente',
	'ui.unicode_inspector.gc.Nd': 'Numero, cifra decimale',
	'ui.unicode_inspector.gc.Nl': 'Numero, lettera',
	'ui.unicode_inspector.gc.No': 'Numero, altro',
	'ui.unicode_inspector.gc.Pc': 'Punteggiatura, connettore',
	'ui.unicode_inspector.gc.Pd': 'Punteggiatura, trattino',
	'ui.unicode_inspector.gc.Ps': 'Punteggiatura, apertura',
	'ui.unicode_inspector.gc.Pe': 'Punteggiatura, chiusura',
	'ui.unicode_inspector.gc.Pi': 'Punteggiatura, virgoletta iniziale',
	'ui.unicode_inspector.gc.Pf': 'Punteggiatura, virgoletta finale',
	'ui.unicode_inspector.gc.Po': 'Punteggiatura, altro',
	'ui.unicode_inspector.gc.Sm': 'Simbolo, matematica',
	'ui.unicode_inspector.gc.Sc': 'Simbolo, valuta',
	'ui.unicode_inspector.gc.Sk': 'Simbolo, modificatore',
	'ui.unicode_inspector.gc.So': 'Simbolo, altro',
	'ui.unicode_inspector.gc.Zs': 'Separatore, spazio',
	'ui.unicode_inspector.gc.Zl': 'Separatore, riga',
	'ui.unicode_inspector.gc.Zp': 'Separatore, paragrafo',
	'ui.unicode_inspector.gc.Cc': 'Altro, controllo',
	'ui.unicode_inspector.gc.Cf': 'Altro, formato',
	'ui.unicode_inspector.gc.Cs': 'Altro, surrogato',
	'ui.unicode_inspector.gc.Co': 'Altro, uso privato',
	'ui.unicode_inspector.gc.Cn': 'Altro, non assegnato',
	// ── Hex ↔ Testo — strumento ─────────────────────────────────────────────
	'tool.encode-hex-encode-decode.display_name': 'Hex ↔ ASCII / UTF-8',
	'tool.encode-hex-encode-decode.tagline':
		'Converti testo UTF-8 in byte esadecimali o dump hex in testo leggibile',
	'tool.encode-hex-encode-decode.description':
		'Codifica qualsiasi stringa UTF-8 in coppie di byte hex con maiuscole/minuscole, separatori e a capo configurabili. Decodifica hex permissivo (spazi, virgole, prefissi 0x) in testo con validazione UTF-8 rigorosa. Gli input grandi usano un Web Worker; tutto resta nel browser.',
	'tool.encode-hex-encode-decode.primary_keyword': 'hex a testo utf-8',
	'tool.encode-hex-encode-decode.meta_title': 'Hex ↔ Testo — UTF-8 e ASCII | fmtly.dev',
	'tool.encode-hex-encode-decode.meta_description':
		'Converti hex in testo UTF-8 o testo in hex nel browser. Delimitatori, maiuscole, a capo, prefissi 0x e Worker. Privato e veloce.',
	'tool.encode-hex-encode-decode.operation': 'Codifica / decodifica hex',
	'tool.encode-hex-encode-decode.faq.0.question': 'I miei dati vengono inviati a un server?',
	'tool.encode-hex-encode-decode.faq.0.answer':
		'No. Tutta la conversione avviene nel browser. Testo ed hex non lasciano il dispositivo.',
	'tool.encode-hex-encode-decode.faq.1.question': 'Quale codifica usa lo strumento?',
	'tool.encode-hex-encode-decode.faq.1.answer':
		'Il testo è interpretato come UTF-8 in entrambe le direzioni. L’ASCII è un sottoinsieme dell’UTF-8; l’inglese semplice si comporta allo stesso modo.',
	'tool.encode-hex-encode-decode.faq.2.question':
		'Perché la decodifica fallisce con «UTF-8 non valido»?',
	'tool.encode-hex-encode-decode.faq.2.answer':
		'I byte decodificati devono formare UTF-8 valido. Hex binario casuale o altre codifiche non diventeranno testo — usa lo strumento giusto.',
	'tool.encode-hex-encode-decode.faq.3.question': 'Perché un Web Worker per input grandi?',
	'tool.encode-hex-encode-decode.faq.3.answer':
		'Gli input oltre 500 KB sono elaborati fuori dal thread principale per mantenere fluidi digitazione, scorrimento e controlli.',
	'tool.encode-hex-encode-decode.use_case.0':
		'Ricondurre hex dagli appunti di log o catture a frammenti UTF-8 leggibili',
	'tool.encode-hex-encode-decode.use_case.1':
		'Produrre dump hex formattati per documentazione, test o costanti embedded',
	'tool.encode-hex-encode-decode.use_case.2':
		'Verificare come emoji e caratteri non latini si espandono in byte UTF-8',
	'tool.encode-hex-encode-decode.use_case.3':
		'Passare rapidamente tra hex e testo durante il debug di API, token o payload codificati',
	// ── Hex ↔ Testo — interfaccia ────────────────────────────────────────────
	'ui.hex.tab_label': 'Hex',
	'ui.hex.action_label': 'Azione',
	'ui.hex.action.encode': 'Testo → hex',
	'ui.hex.action.decode': 'Hex → testo',
	'ui.hex.hex_case_label': 'Maiuscole / minuscole',
	'ui.hex.hex_case.upper': 'Maiuscole',
	'ui.hex.hex_case.lower': 'Minuscole',
	'ui.hex.delimiter_label': 'Separatore byte',
	'ui.hex.delimiter.space': 'Spazio',
	'ui.hex.delimiter.none': 'Nessuno',
	'ui.hex.delimiter.comma': 'Virgola',
	'ui.hex.bytes_per_line_label': 'Byte per riga',
	'ui.hex.bytes_per_line.off': 'Nessun a capo',
	'ui.hex.bytes_per_line.n': '{n} byte',
	'ui.hex.decode_options_label': 'Opzioni decodifica',
	'ui.hex.option.ignore_whitespace': 'Ignora spazi e a capo',
	'ui.hex.option.ignore_commas': 'Ignora virgole separatrici',
	'ui.hex.option.allow_0x': 'Consenti prefisso 0x prima di ogni byte',
	'ui.hex.worker_active':
		'Input grande rilevato (>{size}). L’elaborazione avviene in un Web Worker.',
	'ui.hex.worker_failed': 'Elaborazione Worker non riuscita. Ripiego sul thread principale.',
	'ui.hex.worker_badge': 'Worker',
	'ui.hex.button.swap_direction': 'Inverti direzione',
	'ui.hex.button.apply_output': 'Applica output all’input',
	'ui.hex.input_label': 'Input',
	'ui.hex.output_label': 'Output',
	'ui.hex.input_placeholder': 'Testo da codificare, o cifre hex da decodificare in UTF-8…',
	'ui.hex.output_placeholder': 'L’output hex o il testo UTF-8 decodificato appare qui…',
	'ui.hex.characters': 'caratteri',
	'ui.hex.toast.applied': 'Output applicato all’input',
	'ui.hex.warning.whitespace_skipped':
		'Gli spazi bianchi sono stati ignorati durante l’analisi delle cifre hex.',
	'ui.hex.warning.commas_skipped': 'Le virgole separatrici sono state ignorate durante l’analisi.',
	'ui.hex.error.invalid_hex_digit':
		'Carattere non valido nell’input hex (vicino alla colonna {position}).',
	'ui.hex.error.odd_hex_length':
		'Numero dispari di cifre hex ({count}). Servono coppie per i byte.',
	'ui.hex.error.invalid_utf8': 'I byte decodificati non sono UTF-8 valido ({bytes} byte).',
	// ── ROT13 / Cesare — strumento ────────────────────────────────────────────
	'tool.encode-rot13-caesar-cipher.display_name': 'ROT13 / cifrario di Cesare',
	'tool.encode-rot13-caesar-cipher.tagline':
		'ROT13 per spoiler o cifrario di Cesare su A–Z e a–z con cifratura e decifratura',
	'tool.encode-rot13-caesar-cipher.description':
		'Applica il ROT13 classico (13 posizioni, auto-inverso) o il cifrario di Cesare con spostamento 1–25. Per Cesare scegli cifrare o decifrare, usa preset o cursore; numeri, punteggiatura e Unicode oltre il latino base restano invariati. Gli input grandi usano un Web Worker; tutto resta nel browser.',
	'tool.encode-rot13-caesar-cipher.primary_keyword': 'rot13 cesare cifrario online',
	'tool.encode-rot13-caesar-cipher.meta_title': 'ROT13 e Cesare — fmtly.dev',
	'tool.encode-rot13-caesar-cipher.meta_description':
		'ROT13 e Cesare nel browser: cifra, decifra, preset 1–25, Worker per testi grandi. Solo lettere; privato e immediato.',
	'tool.encode-rot13-caesar-cipher.operation': 'ROT13 / Cesare',
	'tool.encode-rot13-caesar-cipher.faq.0.question': 'Il mio testo viene caricato da qualche parte?',
	'tool.encode-rot13-caesar-cipher.faq.0.answer':
		'No. La trasformazione avviene interamente nel browser. Il testo non lascia il dispositivo.',
	'tool.encode-rot13-caesar-cipher.faq.1.question': 'Quali caratteri cambiano?',
	'tool.encode-rot13-caesar-cipher.faq.1.answer':
		'Solo le lettere latine di base A–Z e a–z vengono ruotate. Spazi, cifre, punteggiatura, lettere accentate, emoji e altro Unicode restano uguali.',
	'tool.encode-rot13-caesar-cipher.faq.2.question': 'È una crittografia vera?',
	'tool.encode-rot13-caesar-cipher.faq.2.answer':
		'No. ROT13 e Cesare sono offuscamento per giochi, spoiler o didattica; si rompono facilmente e non proteggono segreti.',
	'tool.encode-rot13-caesar-cipher.faq.3.question': 'Perché un Web Worker per input grandi?',
	'tool.encode-rot13-caesar-cipher.faq.3.answer':
		'Gli input oltre 500 KB sono elaborati fuori dal thread principale per mantenere fluida la digitazione.',
	'tool.encode-rot13-caesar-cipher.use_case.0':
		'Nascondere spoiler di enigmi o storie in forum e chat con testo ROT13 reversibile',
	'tool.encode-rot13-caesar-cipher.use_case.1':
		'Insegnare cifrari a sostituzione classica e aritmetica modulare sull’alfabeto',
	'tool.encode-rot13-caesar-cipher.use_case.2':
		'Provare rapidamente vari spostamenti Cesare per sfide CTF o giochi cartacei',
	'tool.encode-rot13-caesar-cipher.use_case.3':
		'Riportare in testo leggibile contenuti ROT13 da API o log',
	// ── ROT13 / Cesare — interfaccia ──────────────────────────────────────────
	'ui.rot13.tab_label': 'ROT13',
	'ui.rot13.mode_label': 'Cifrario',
	'ui.rot13.mode.rot13': 'ROT13',
	'ui.rot13.mode.caesar': 'Cesare',
	'ui.rot13.rot13_hint':
		'Il ROT13 ruota A–Z e a–z di 13 posizioni. Applicarlo due volte restituisce il testo originale.',
	'ui.rot13.direction_label': 'Direzione',
	'ui.rot13.direction.encrypt': 'Cifra (avanti)',
	'ui.rot13.direction.decrypt': 'Decifra (indietro)',
	'ui.rot13.shift_label': 'Spostamento (1–25)',
	'ui.rot13.presets_label': 'Preset',
	'ui.rot13.caesar_scope_hint':
		'Solo le lettere latine di base A–Z e a–z vengono spostate; numeri, punteggiatura, spazi e altro Unicode restano invariati.',
	'ui.rot13.worker_active':
		'Input grande rilevato (>{size}). L’elaborazione avviene in un Web Worker.',
	'ui.rot13.worker_failed': 'Elaborazione Worker non riuscita. Ripiego sul thread principale.',
	'ui.rot13.worker_badge': 'Worker',
	'ui.rot13.button.apply_output': 'Applica output all’input',
	'ui.rot13.input_label': 'Input',
	'ui.rot13.output_label': 'Output',
	'ui.rot13.input_placeholder': 'Digita o incolla testo da trasformare…',
	'ui.rot13.output_placeholder': 'Il testo trasformato appare qui…',
	'ui.rot13.characters': 'caratteri',
	'ui.rot13.toast.applied': 'Output applicato all’input',
	// ── Punycode / IDN tool ───────────────────────────────────────────────────
	'tool.encode-punycode-encode-decode.display_name': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.tagline':
		'Converti domini ed e-mail internazionalizzati tra Unicode e ASCII con prefisso xn--',
	'tool.encode-punycode-encode-decode.description':
		'Converti nomi di dominio e indirizzi con etichette non ASCII in Punycode (ASCII con prefisso xn--) e viceversa. Gestisce più etichette e la parte locale prima di @. Tutto nel browser; input grandi in un Web Worker.',
	'tool.encode-punycode-encode-decode.primary_keyword': 'punycode idn codifica online',
	'tool.encode-punycode-encode-decode.meta_title':
		'Punycode e IDN — Codifica / Decodifica — fmtly.dev',
	'tool.encode-punycode-encode-decode.meta_description':
		'Da Unicode a Punycode (xn--) per domini ed e-mail e ritorno. Privato, istantaneo, solo browser; Worker per testi grandi.',
	'tool.encode-punycode-encode-decode.operation': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.faq.0.question':
		'Il mio dominio o e-mail viene inviato a un server?',
	'tool.encode-punycode-encode-decode.faq.0.answer':
		'No. La conversione usa la libreria Punycode solo nel browser. Le stringhe non lasciano il dispositivo.',
	'tool.encode-punycode-encode-decode.faq.1.question': 'Cosa fa «codifica» qui?',
	'tool.encode-punycode-encode-decode.faq.1.answer':
		'Codifica applica IDNA toASCII: ogni etichetta non ASCII diventa ASCII con prefisso xn--. Le etichette solo ASCII restano invariate.',
	'tool.encode-punycode-encode-decode.faq.2.question':
		'Valida le regole reali di registrazione DNS?',
	'tool.encode-punycode-encode-decode.faq.2.answer':
		'Applica la conversione Punycode in stile RFC 3492 / 5891. I controlli UTS #46 completi per la registrazione esulano da questo strumento.',
	'tool.encode-punycode-encode-decode.faq.3.question': 'Perché un Web Worker con input grandi?',
	'tool.encode-punycode-encode-decode.faq.3.answer':
		'Oltre 500 KB l’elaborazione avviene fuori dal thread principale per mantenere l’interfaccia reattiva.',
	'tool.encode-punycode-encode-decode.use_case.0':
		'Anteprima di come un host o dominio e-mail Unicode apparirà nel DNS (forma xn--)',
	'tool.encode-punycode-encode-decode.use_case.1':
		'Decodificare hostname xn-- da log, certificati o strumenti di sviluppo',
	'tool.encode-punycode-encode-decode.use_case.2':
		'Convertire esempi IDN in documentazione o ticket di supporto',
	'tool.encode-punycode-encode-decode.use_case.3':
		'Debug di URL ed e-mail che mescolano etichette ASCII e internazionalizzate',
	// ── Punycode / IDN UI ─────────────────────────────────────────────────────
	'ui.punycode.tab_label': 'Punycode',
	'ui.punycode.action_label': 'Azione',
	'ui.punycode.action.encode': 'Unicode → ASCII (IDN)',
	'ui.punycode.action.decode': 'ASCII → Unicode',
	'ui.punycode.hint':
		'Domini ed e-mail internazionalizzati: le etichette Unicode diventano ASCII con xn--; decodifica inverte l’operazione.',
	'ui.punycode.loading_library': 'Caricamento Punycode…',
	'ui.punycode.library_load_failed': 'Impossibile caricare la libreria Punycode.',
	'ui.punycode.worker_active': 'Input grande (>{size}). Elaborazione in Web Worker.',
	'ui.punycode.worker_failed': 'Worker fallito. Ripiego sul thread principale.',
	'ui.punycode.worker_badge': 'Worker',
	'ui.punycode.button.swap_direction': 'Inverti direzione',
	'ui.punycode.button.apply_output': 'Applica output all’input',
	'ui.punycode.input_label': 'Input',
	'ui.punycode.output_label': 'Output',
	'ui.punycode.input_placeholder': 'Dominio o e-mail con Unicode, o ASCII con segmenti xn--…',
	'ui.punycode.output_placeholder': 'IDN ASCII o Unicode decodificato compare qui…',
	'ui.punycode.characters': 'caratteri',
	'ui.punycode.toast.applied': 'Output applicato all’input',
	'ui.punycode.error.invalid_punycode':
		'Punycode o dominio non valido. Controlla etichette e prefissi xn--.',
	'ui.punycode.error.processing': 'Conversione non riuscita: {detail}',
	// ── Codifica / Decodifica URL — stringhe interfaccia ─────────────────────
	'ui.encode_url.tab_label': 'URL',
	'ui.encode_url.action_label': 'Azione',
	'ui.encode_url.action.encode': 'Codifica',
	'ui.encode_url.action.decode': 'Decodifica',
	'ui.encode_url.mode_label': 'Modalità',
	'ui.encode_url.mode.component': 'Componente URL',
	'ui.encode_url.mode.full_url': 'URL completa',
	'ui.encode_url.input_label': 'Input',
	'ui.encode_url.output_label': 'Output',
	'ui.encode_url.input_placeholder': 'Incolla testo, parametri query o una URL completa...',
	'ui.encode_url.output_placeholder': 'L’output codificato o decodificato appare qui...',
	'ui.encode_url.option.encode_spaces_as_plus': 'Codifica gli spazi come +',
	'ui.encode_url.option.decode_plus_as_space': 'Decodifica + come spazio',
	'ui.encode_url.worker_active':
		'Input grande rilevato (>{size}). L’elaborazione avviene in un Web Worker.',
	'ui.encode_url.worker_failed': 'Elaborazione Worker non riuscita. Ripiego sul thread principale.',
	'ui.encode_url.worker_badge': 'Worker',
	'ui.encode_url.warning.no_changes':
		'Nessuna modifica rilevata per modalità e azione selezionate.',
	'ui.encode_url.error.invalid_url_encoding': 'Input URL non valido: {detail}',
	'ui.encode_url.button.swap_direction': 'Inverti direzione',
	'ui.encode_url.button.apply_output': 'Applica output all’input',
	'ui.encode_url.toast.applied': 'Output applicato all’input',
	'ui.encode_url.characters': 'caratteri',
	'category.qr.display_name': 'QR',
	'category.qr.description':
		'Genera codici QR nel browser con output SVG e PNG, logo centrale, controlli colore e livelli di correzione pensati per una scansione affidabile.',
	'category.qr.primary_keyword': 'strumenti qr',
	'tool.qr-code-generator.display_name': 'Generatore di Codici QR',
	'tool.qr-code-generator.tagline':
		'Genera codici QR brandizzati con anteprima live, export SVG/PNG, colori, margine e logo centrale',
	'tool.qr-code-generator.description':
		'Crea codici QR facili da scansionare direttamente nel browser. Regola dimensione, quiet zone, colori, sfondo trasparente, livello di correzione e logo centrale, poi esporta SVG o PNG pronti per la produzione senza inviare dati a un server.',
	'tool.qr-code-generator.primary_keyword': 'generatore codici qr',
	'tool.qr-code-generator.meta_title':
		'Generatore di Codici QR — SVG, PNG, Colori e Logo | fmtly.dev',
	'tool.qr-code-generator.meta_description':
		'Genera codici QR online con anteprima live, export SVG e PNG, colori personalizzati, quiet zone, sfondo trasparente e logo. Privato e 100% browser.',
	'tool.qr-code-generator.operation': 'Genera Codice QR',
	'tool.qr-code-generator.faq.0.question': 'Il mio contenuto QR viene caricato su un server?',
	'tool.qr-code-generator.faq.0.answer':
		'No. La generazione del QR avviene interamente nel browser. Testo, URL, payload Wi-Fi o qualsiasi altro contenuto restano sul tuo dispositivo.',
	'tool.qr-code-generator.faq.1.question': 'Quali formati di esportazione sono supportati?',
	'tool.qr-code-generator.faq.1.answer':
		'Lo strumento esporta sia SVG sia PNG. SVG è ideale per stampa, design system e scaling senza perdita, mentre PNG è pratico per condivisioni rapide e grafiche social.',
	'tool.qr-code-generator.faq.2.question': 'Che effetto ha la correzione degli errori?',
	'tool.qr-code-generator.faq.2.answer':
		'Un livello più alto rende il QR più resistente a danni, compressione e loghi centrali, ma riduce la quantità di contenuto che può stare in un singolo codice.',
	'tool.qr-code-generator.faq.3.question': 'Perché un testo molto lungo può fallire?',
	'tool.qr-code-generator.faq.3.answer':
		'Un codice QR ha una capacità dati limitata. Se il contenuto è troppo grande per il livello di correzione scelto, accorcia il payload o usa un URL di redirect più breve.',
	'tool.qr-code-generator.use_case.0':
		'Generare codici QR per landing page, installazioni app o URL di campagna',
	'tool.qr-code-generator.use_case.1':
		'Creare codici QR brandizzati con logo centrale per poster, packaging e materiali stampati',
	'tool.qr-code-generator.use_case.2':
		'Esportare asset SVG nitidi per Figma, design system o documentazione tecnica',
	'tool.qr-code-generator.use_case.3':
		'Testare come margine, colori e correzione influenzano l’affidabilità della scansione prima della pubblicazione',
	'tool.qr-code-reader.display_name': 'Lettore QR code',
	'tool.qr-code-reader.tagline':
		'Scansiona QR code da immagini nel browser con decodifica rapida, incolla dagli appunti e Web Worker opzionale',
	'tool.qr-code-reader.description':
		'Carica PNG, JPG o WebP oppure incolla uno screenshot per estrarre subito il payload del QR. La decodifica è locale; le immagini grandi possono usare Web Worker — nessun upload, nessun account.',
	'tool.qr-code-reader.primary_keyword': 'lettore qr code online',
	'tool.qr-code-reader.meta_title':
		'Lettore QR code — Scansiona immagini e incolla screenshot | fmtly',
	'tool.qr-code-reader.meta_description':
		'Leggi QR code da immagini nel browser. Trascina e rilascia, fotocamera, incolla dagli appunti e decodifica Web Worker per foto grandi. Privato e senza server.',
	'tool.qr-code-reader.operation': 'Leggi QR code',
	'tool.qr-code-reader.faq.0.question': 'Le mie immagini vengono caricate su un server?',
	'tool.qr-code-reader.faq.0.answer':
		'No. Le immagini sono elaborate interamente nel browser con JavaScript e, se serve, con Web Worker.',
	'tool.qr-code-reader.faq.1.question': 'Quali formati funzionano meglio?',
	'tool.qr-code-reader.faq.1.answer':
		'PNG e JPG sono di solito i più affidabili. Anche WebP e GIF vanno bene. Immagini molto piccole o fortemente compresse possono essere più difficili da decodificare.',
	'tool.qr-code-reader.faq.2.question': 'A cosa serve un Web Worker?',
	'tool.qr-code-reader.faq.2.answer':
		'Le foto grandi generano buffer di pixel grandi. Spostare la decodifica mantiene fluidi scorrimento e digitazione durante la scansione.',
	'tool.qr-code-reader.faq.3.question': 'Posso leggere un QR da uno screenshot?',
	'tool.qr-code-reader.faq.3.answer':
		'Sì. Copia un’immagine negli appunti e incollala in questa pagina, oppure salva lo screenshot e caricalo.',
	'tool.qr-code-reader.use_case.0': 'Aprire QR Wi‑Fi, link di eventi o deep link da una foto',
	'tool.qr-code-reader.use_case.1':
		'Verificare grafiche con QR prima della stampa controllando l’URL estratto',
	'tool.qr-code-reader.use_case.2': 'Decodificare un QR da screenshot senza installare un’app',
	'tool.qr-code-reader.use_case.3': 'Recuperare testo o vCard da foto di badge conferenza',
	'tool.barcode-generator.display_name': 'Generatore di codici a barre',
	'tool.barcode-generator.tagline':
		'Crea Code 128, EAN-13, UPC-A, ITF-14 e altro in SVG o PNG nitidi — pronti per stampa e lettori',
	'tool.barcode-generator.description':
		'Genera codici a barre 1D professionali nel browser con anteprima in tempo reale. Scegli la simbologia, regola larghezza, altezza, zona di silenzio e colori, poi esporta SVG o PNG. Payload molto grandi possono essere renderizzati in un Web Worker per mantenere l’interfaccia reattiva: nulla lascia il dispositivo.',
	'tool.barcode-generator.primary_keyword': 'generatore codici a barre online',
	'tool.barcode-generator.meta_title': 'Generatore codici a barre — Code 128, EAN-13, UPC | fmtly',
	'tool.barcode-generator.meta_description':
		'Generatore di codici a barre nel browser: Code 128, EAN-13, UPC-A, ITF-14, Codabar, MSI, pharmacode e altro. Colori, zona di silenzio, export SVG e PNG. Modalità Web Worker privata per payload enormi.',
	'tool.barcode-generator.operation': 'Genera codice a barre',
	'tool.barcode-generator.faq.0.question': 'I miei dati vengono inviati a un server?',
	'tool.barcode-generator.faq.0.answer':
		'No. Il rendering avviene con JavaScript nel browser. Input molto grandi possono essere elaborati in un Web Worker sul dispositivo.',
	'tool.barcode-generator.faq.1.question': 'Quale simbologia per il retail?',
	'tool.barcode-generator.faq.1.answer':
		'Per il POS, EAN-13 o UPC-A. Per logistica su cartoni, ITF-14. Code 128 è flessibile per dati alfanumerici.',
	'tool.barcode-generator.faq.2.question': 'Perché esportare in SVG?',
	'tool.barcode-generator.faq.2.answer':
		'Lo SVG resta nitido a qualsiasi dimensione di stampa ed è adatto a packaging e design. Il PNG è comodo per anteprime raster veloci.',
	'tool.barcode-generator.faq.3.question': 'Quando si usa un Web Worker?',
	'tool.barcode-generator.faq.3.answer':
		'Quando il payload supera circa 500 KB di testo UTF-8, la generazione viene eseguita in un Web Worker per mantenere la pagina reattiva.',
	'tool.barcode-generator.use_case.0':
		'Produrre simboli ITF-14 e Code 128 per etichette di magazzino e cartoni',
	'tool.barcode-generator.use_case.1':
		'Generare grafiche EAN-13 o UPC-A per mockup di packaging prima della stampa',
	'tool.barcode-generator.use_case.2':
		'Esportare codici a barre SVG per linee guida di brand o documentazione',
	'tool.barcode-generator.use_case.3':
		'Creare simboli Codabar o MSI per sistemi legacy e strumenti interni',
	'category.crypto.display_name': 'Crypto',
	'category.crypto.description':
		'Hash, HMAC, impronte file, robustezza password, UUID/ULID, chiavi RSA/EC, ispezione X.509, TOTP e stringhe casuali — tutto nel browser.',
	'category.crypto.primary_keyword': 'strumenti crittografici nel browser',
	'tool.random-string-generator.display_name': 'Generatore di stringhe casuali',
	'tool.random-string-generator.tagline':
		'Stringhe casuali sicure con preset, alfabeti personalizzati, separatori e Web Worker',
	'tool.random-string-generator.description':
		'Crea stringhe casuali per password, token, identificatori e dati di test con Web Crypto getRandomValues—nessun upload, nessun server. Scegli alfanumerico, esadecimale, numerico, Base64 URL-safe o un alfabeto personalizzato; escludi caratteri ambigui; controlla lunghezza, quantità e separatori; carichi grandi nel Web Worker.',
	'tool.random-string-generator.primary_keyword': 'generatore di stringhe casuali',
	'tool.random-string-generator.meta_title': 'Stringhe casuali — Crypto sicura nel browser | fmtly',
	'tool.random-string-generator.meta_description':
		'Genera stringhe casuali forti nel browser. Preset, alfabeto personalizzato, batch, modalità senza ambiguità e Web Worker. Privato e immediato.',
	'tool.random-string-generator.operation': 'Genera stringhe casuali',
	'tool.random-string-generator.faq.0.question': 'Va bene per password e chiavi API?',
	'tool.random-string-generator.faq.0.answer':
		'Le stringhe usano crypto.getRandomValues con campionamento non distorto. Per le password, preferisci lunghezza elevata, alfabeto ampio e buone pratiche di gestione dei segreti.',
	'tool.random-string-generator.faq.1.question': 'Perché a volte usa un Web Worker?',
	'tool.random-string-generator.faq.1.answer':
		'Output molto grandi o alfabeti enormi possono bloccare la UI. Sopra una soglia il lavoro viene spostato per mantenere la pagina reattiva.',
	'tool.random-string-generator.faq.2.question': 'Cosa fa «escludi caratteri ambigui»?',
	'tool.random-string-generator.faq.2.answer':
		'Rimuove dai preset i caratteri facili da confondere (come 0/O, 1/l) per copie manuali più affidabili.',
	'tool.random-string-generator.faq.3.question': 'I dati vanno a un server?',
	'tool.random-string-generator.faq.3.answer':
		'No. La generazione avviene interamente nel browser. Nulla viene caricato o registrato da fmtly.',
	'tool.random-string-generator.use_case.0':
		'Generare token di reset, codici invito e segreti monouso in locale',
	'tool.random-string-generator.use_case.1':
		'Creare fixture di test con lunghezza, charset e output multilinea controllati',
	'tool.random-string-generator.use_case.2':
		'Stringhe alfabeto Base64 URL-safe per identificatori e ID opachi',
	'tool.random-string-generator.use_case.3':
		'Alfabeti personalizzati per simulazioni, giochi e sistemi vincolati',
	'tool.hash-generator.display_name': 'Generatore di hash',
	'tool.hash-generator.tagline':
		'Digest MD5 e famiglia SHA per qualsiasi testo UTF-8 — privato e immediato',
	'tool.hash-generator.description':
		'Calcola hash MD5, SHA-1, SHA-256, SHA-384 e SHA-512 di testo incollato con Web Crypto (e MD5 verificato). Input grandi delegati a un Web Worker per mantenere l’interfaccia fluida.',
	'tool.hash-generator.primary_keyword': 'generatore hash online md5 sha256',
	'tool.hash-generator.meta_title': 'Generatore di hash — MD5 e SHA nel browser | fmtly',
	'tool.hash-generator.meta_description':
		'Genera hash MD5, SHA-1, SHA-256, SHA-384 e SHA-512 in locale. Nessun caricamento. Web Worker per testi grandi.',
	'tool.hash-generator.operation': 'Hash del testo',
	'tool.hash-generator.faq.0.question': 'MD5 è ancora utile?',
	'tool.hash-generator.faq.0.answer':
		'MD5 è legacy e non adatto all’integrità in contesti di sicurezza. Resta comune per checksum e compatibilità. Per nuovi progetti preferisci SHA-256.',
	'tool.hash-generator.faq.1.question': 'Perché il testo grande usa un worker?',
	'tool.hash-generator.faq.1.answer':
		'Hasheare megabyte nel thread principale può bloccare la pagina. Sopra una soglia il lavoro passa a un Web Worker.',
	'tool.hash-generator.faq.2.question': 'Quale codifica si usa?',
	'tool.hash-generator.faq.2.answer':
		'L’input viene hashato come byte UTF-8, come di solito si aspettano gli sviluppatori.',
	'tool.hash-generator.faq.3.question': 'I dati vanno a un server?',
	'tool.hash-generator.faq.3.answer': 'No. Tutto gira in locale nel browser.',
	'tool.hash-generator.use_case.0':
		'Verificare download e config rispetto alle checksum pubblicate',
	'tool.hash-generator.use_case.1':
		'Confrontare impronte file senza caricare il file (per binari usa Hash file)',
	'tool.hash-generator.use_case.2': 'Debug di payload API e hashing canonico di stringhe',
	'tool.hash-generator.use_case.3': 'Digest veloci per log e chiavi di cache',
	'tool.hmac-generator.display_name': 'Generatore HMAC',
	'tool.hmac-generator.tagline': 'Firme HMAC-SHA con chiave per messaggi e vettori di test',
	'tool.hmac-generator.description':
		'Calcola HMAC con SHA-1, SHA-256, SHA-384 o SHA-512. Segreto e messaggio restano nella scheda; messaggi lunghi possono usare Web Worker.',
	'tool.hmac-generator.primary_keyword': 'generatore hmac online',
	'tool.hmac-generator.meta_title': 'Generatore HMAC — HMAC SHA nel browser | fmtly',
	'tool.hmac-generator.meta_description':
		'Firme HMAC con hash e segreto configurabili. Solo nel browser, nessun upload, worker per messaggi lunghi.',
	'tool.hmac-generator.operation': 'Calcola HMAC',
	'tool.hmac-generator.faq.0.question': 'Come formatto la chiave?',
	'tool.hmac-generator.faq.0.answer':
		'La chiave è interpretata come testo UTF-8, come in molti esempi API. Per chiavi binarie grezze decodifica prima l’hex altrove.',
	'tool.hmac-generator.faq.1.question': 'È come firmare un JWT?',
	'tool.hmac-generator.faq.1.answer':
		'JWT usa una codifica specifica (segmenti Base64URL). Questo strumento è HMAC grezzo sui byte del messaggio per debug e vettori di test.',
	'tool.hmac-generator.faq.2.question': 'Perché evitare SHA-1?',
	'tool.hmac-generator.faq.2.answer':
		'SHA-1 è legacy. HMAC-SHA1 compare ancora in sistemi vecchi, ma per lavoro nuovo preferisci SHA-256.',
	'tool.hmac-generator.faq.3.question': 'I segreti vengono salvati?',
	'tool.hmac-generator.faq.3.answer':
		'I segreti restano solo nella memoria della pagina. Svuota il campo a fine lavoro — fmtly non carica i tuoi dati.',
	'tool.hmac-generator.use_case.0': 'Riprodurre vettori di test firma webhook',
	'tool.hmac-generator.use_case.1': 'Verificare mattoni di firma in stile AWS',
	'tool.hmac-generator.use_case.2': 'Confrontare output con OpenSSL o librerie standard',
	'tool.hmac-generator.use_case.3': 'Spiegare MAC vs hash nei corsi',
	'tool.file-hash-calculator.display_name': 'Calcolatore hash file',
	'tool.file-hash-calculator.tagline': 'MD5, SHA-256 e CRC32 di ogni file locale — mai caricato',
	'tool.file-hash-calculator.description':
		'Trascina un file per calcolare MD5, SHA-256 e CRC32 nel browser. File grandi vengono hashati in un Web Worker per mantenere l’interfaccia reattiva.',
	'tool.file-hash-calculator.primary_keyword': 'calcolatore hash file sha256',
	'tool.file-hash-calculator.meta_title': 'Hash file — MD5, SHA-256, CRC32 | fmtly',
	'tool.file-hash-calculator.meta_description':
		'Hash file in locale: MD5, SHA-256, CRC32. Nessun upload cloud. Worker per file grandi.',
	'tool.file-hash-calculator.operation': 'Hash file in locale',
	'tool.file-hash-calculator.faq.0.question': 'I file vengono caricati?',
	'tool.file-hash-calculator.faq.0.answer':
		'No. Il file è letto con la File API ed elaborato solo in memoria nel browser.',
	'tool.file-hash-calculator.faq.1.question': 'Perché tre algoritmi?',
	'tool.file-hash-calculator.faq.1.answer':
		'SHA-256 è un’impronta moderna; MD5 compare in manifest vecchi; CRC32 in zip e stack di rete.',
	'tool.file-hash-calculator.faq.2.question': 'E la RAM con file enormi?',
	'tool.file-hash-calculator.faq.2.answer':
		'Tutto il file viene caricato in memoria per l’hash. File molto grandi possono richiedere RAM libera sufficiente.',
	'tool.file-hash-calculator.faq.3.question': 'Posso verificare download?',
	'tool.file-hash-calculator.faq.3.answer':
		'Sì — confronta il digest calcolato con quello del publisher. Preferisci SHA-256 se pubblicato.',
	'tool.file-hash-calculator.use_case.0': 'Verificare checksum di ISO e installer',
	'tool.file-hash-calculator.use_case.1': 'Confrontare artefatti di build tra nodi CI',
	'tool.file-hash-calculator.use_case.2': 'Impronte di asset prima di allegarli al ticket',
	'tool.file-hash-calculator.use_case.3': 'Controlli rapidi di integrità su archivi e dataset',
	'tool.password-strength-meter.display_name': 'Misuratore forza password',
	'tool.password-strength-meter.tagline':
		'Entropia, zxcvbn e controlli leak senza inviare la password',
	'tool.password-strength-meter.description':
		'Stima entropia, mostra punteggio zxcvbn e interroga Have I Been Pwned con k-anonimato (solo prefisso SHA-1). La password completa non esce dal browser.',
	'tool.password-strength-meter.primary_keyword': 'verifica forza password',
	'tool.password-strength-meter.meta_title': 'Forza password — Entropia e HIBP | fmtly',
	'tool.password-strength-meter.meta_description':
		'Analizza forza con entropia e zxcvbn. Controllo HIBP opzionale k-anonimato. Tutto in locale nel browser.',
	'tool.password-strength-meter.operation': 'Analizza forza password',
	'tool.password-strength-meter.faq.0.question': 'Come funziona il controllo leak?',
	'tool.password-strength-meter.faq.0.answer':
		'La password è hashata SHA-1 in locale. Solo i primi cinque caratteri hex vanno a Have I Been Pwned — progetto k-anonimato.',
	'tool.password-strength-meter.faq.1.question': 'fmtly vede la mia password?',
	'tool.password-strength-meter.faq.1.answer':
		'No. L’analisi gira nel browser. L’API leak non riceve mai la password completa.',
	'tool.password-strength-meter.faq.2.question': 'Basta zxcvbn?',
	'tool.password-strength-meter.faq.2.answer':
		'zxcvbn è un’euristica solida. Combina con password uniche e un password manager.',
	'tool.password-strength-meter.faq.3.question': 'E se sono offline?',
	'tool.password-strength-meter.faq.3.answer':
		'Entropia e zxcvbn funzionano; il conteggio leak può mancare senza rete.',
	'tool.password-strength-meter.use_case.0': 'Guidare gli utenti nei flussi di registrazione',
	'tool.password-strength-meter.use_case.1': 'Confrontare idee di passphrase prima di adottarle',
	'tool.password-strength-meter.use_case.2': 'Laboratori awareness senza installare software',
	'tool.password-strength-meter.use_case.3': 'Spiegare perché contano lunghezza e diversità',
	'tool.uuid-generator.display_name': 'Generatore UUID / ULID',
	'tool.uuid-generator.tagline': 'UUID v4, UUID v7 e batch ULID con decode tempo ULID',
	'tool.uuid-generator.description':
		'Genera UUID v4 casuali, UUID v7 ordinabili per tempo e identificatori ULID. Decodifica timestamp ULID in locale. Fino a 500 valori per batch per fixture.',
	'tool.uuid-generator.primary_keyword': 'generatore uuid v7 ulid',
	'tool.uuid-generator.meta_title': 'Generatore UUID v4, v7 e ULID | fmtly',
	'tool.uuid-generator.meta_description':
		'Crea UUID v4, v7 e ULID in serie. Decodifica tempo ULID nel browser. Nessun storage server.',
	'tool.uuid-generator.operation': 'Genera identificatori',
	'tool.uuid-generator.faq.0.question': 'Quale ID usare?',
	'tool.uuid-generator.faq.0.answer':
		'v4 per pura casualità; v7 o ULID per ID ordinati nel tempo e ordinamento DB più comodo.',
	'tool.uuid-generator.faq.1.question': 'Sono casuali in senso crittografico?',
	'tool.uuid-generator.faq.1.answer':
		'UUID v4/v7 e ULID usano casualità sicura del browser quando disponibile.',
	'tool.uuid-generator.faq.2.question': 'Cosa mostra il decode ULID?',
	'tool.uuid-generator.faq.2.answer':
		'ULID incorpora un timestamp in millisecondi nei primi caratteri; lo convertiamo in ora ISO.',
	'tool.uuid-generator.faq.3.question': 'Posso esportare?',
	'tool.uuid-generator.faq.3.answer':
		'Copia il batch dall’output o usa gli appunti — fmtly non salva nulla.',
	'tool.uuid-generator.use_case.0': 'Popolare database con ID realistici',
	'tool.uuid-generator.use_case.1': 'Generare ID di correlazione per demo di tracing',
	'tool.uuid-generator.use_case.2': 'Creare ID ordinabili per stream di eventi',
	'tool.uuid-generator.use_case.3': 'Prototipare API che richiedono campi UUID o ULID',
	'tool.keypair-generator.display_name': 'Generatore coppia di chiavi RSA / EC',
	'tool.keypair-generator.tagline':
		'Chiavi PEM RSA-PSS e ECDSA via Web Crypto — solo nella tua sessione',
	'tool.keypair-generator.description':
		'Genera coppie RSA 2048/4096 e ECDSA P-256/P-384, esportate come PEM. Le chiavi non lasciano il browser; scarica o copia dalla pagina.',
	'tool.keypair-generator.primary_keyword': 'genera chiave rsa pem browser',
	'tool.keypair-generator.meta_title': 'Coppia chiavi RSA e EC (PEM) | fmtly',
	'tool.keypair-generator.meta_description':
		'Crea coppie RSA e a curva ellittica in formato PEM con Web Crypto. Solo lato client.',
	'tool.keypair-generator.operation': 'Genera coppie di chiavi',
	'tool.keypair-generator.faq.0.question': 'Quali algoritmi?',
	'tool.keypair-generator.faq.0.answer':
		'RSA con RSA-PSS e SHA-256; EC con ECDSA e curve NIST. Esportazione PKIX SPKI e PKCS#8 PEM.',
	'tool.keypair-generator.faq.1.question': 'Sono chiavi di produzione?',
	'tool.keypair-generator.faq.1.answer':
		'Sono chiavi reali da Web Crypto — proteggi il materiale privato e segui le policy aziendali.',
	'tool.keypair-generator.faq.2.question': 'Utilizzabili per TLS?',
	'tool.keypair-generator.faq.2.answer':
		'Serve ancora un certificato firmato da una CA (o dalla tua PKI). Questo strumento genera solo coppie grezze.',
	'tool.keypair-generator.faq.3.question': 'Dove sono salvate le chiavi private?',
	'tool.keypair-generator.faq.3.answer':
		'Solo nella memoria della pagina finché non esci o ricarichi. Salva in modo sicuro se serve dopo.',
	'tool.keypair-generator.use_case.0': 'Provare firma JWT con file PEM locali',
	'tool.keypair-generator.use_case.1': 'Chiavi usa e getta per container di sviluppo',
	'tool.keypair-generator.use_case.2': 'Insegnare crittografia asimmetrica con PEM esportabile',
	'tool.keypair-generator.use_case.3': 'Confrontare dimensioni chiave RSA vs curva ellittica',
	'tool.certificate-decoder.display_name': 'Decodificatore certificati',
	'tool.certificate-decoder.tagline':
		'Analizza certificati PEM X.509: soggetto, SAN, validità, impronta',
	'tool.certificate-decoder.description':
		'Carica un certificato PEM per ispezionare soggetto, emittente, finestra di validità, algoritmo di firma, nomi alternativi del soggetto e impronta SHA-256 — analizzato in locale.',
	'tool.certificate-decoder.primary_keyword': 'decodificatore certificato x509 pem',
	'tool.certificate-decoder.meta_title': 'Decodificatore X.509 — Ispezione PEM | fmtly',
	'tool.certificate-decoder.meta_description':
		'Decodifica PEM nel browser. SAN, validità, algoritmi, impronte senza upload.',
	'tool.certificate-decoder.operation': 'Decodifica certificati',
	'tool.certificate-decoder.faq.0.question': 'Valida la catena di fiducia?',
	'tool.certificate-decoder.faq.0.answer':
		'Analizza e mostra i campi. La validazione completa contro i trust store è fuori da questo viewer leggero.',
	'tool.certificate-decoder.faq.1.question': 'Perché questo stile di impronta?',
	'tool.certificate-decoder.faq.1.answer':
		'Mostriamo SHA-256 in hex separato da due punti — formato admin comune.',
	'tool.certificate-decoder.faq.2.question': 'Posso incollare DER?',
	'tool.certificate-decoder.faq.2.answer':
		'Il decodificatore accetta PEM e codifiche supportate dal parser; PEM con intestazioni è il più semplice.',
	'tool.certificate-decoder.faq.3.question': 'Il certificato viene caricato?',
	'tool.certificate-decoder.faq.3.answer': 'No. L’analisi avviene interamente nel browser.',
	'tool.certificate-decoder.use_case.0': 'Leggere velocemente SAN e scadenza in incident',
	'tool.certificate-decoder.use_case.1': 'Confrontare metadati cert dev vs prod',
	'tool.certificate-decoder.use_case.2': 'Documentare problemi di handshake con impronte esatte',
	'tool.certificate-decoder.use_case.3': 'Insegnare struttura X.509 senza openssl installato',
	'tool.totp-generator.display_name': 'Generatore TOTP',
	'tool.totp-generator.tagline': 'Codici RFC 6238 da segreti Base32 — come le app autenticatore',
	'tool.totp-generator.description':
		'Genera password monouso basate sul tempo con periodo, cifre e algoritmo HMAC configurabili. Il segreto resta locale; i codici si aggiornano ogni secondo.',
	'tool.totp-generator.primary_keyword': 'generatore totp autenticatore',
	'tool.totp-generator.meta_title': 'Generatore TOTP — OTP RFC 6238 | fmtly',
	'tool.totp-generator.meta_description':
		'Calcola TOTP da segreti Base32. Periodo, cifre, SHA-1/256/512 configurabili. Solo nel browser.',
	'tool.totp-generator.operation': 'Genera codici TOTP',
	'tool.totp-generator.faq.0.question': 'Perché Base32?',
	'tool.totp-generator.faq.0.answer':
		'Le app autenticatore spesso forniscono segreti come stringhe Base32. Decodifichiamo in byte prima dell’HMAC.',
	'tool.totp-generator.faq.1.question': 'Sostituisce Google Authenticator?',
	'tool.totp-generator.faq.1.answer':
		'Rispecchia il calcolo per il debug. Tieni l’app sul telefono come secondo fattore principale.',
	'tool.totp-generator.faq.2.question': 'Deriva dell’orologio?',
	'tool.totp-generator.faq.2.answer':
		'I codici dipendono dall’ora UTC. Un orologio molto sballato può non combaciare col server — sincronizza l’orario di sistema.',
	'tool.totp-generator.faq.3.question': 'Il segreto viene salvato?',
	'tool.totp-generator.faq.3.answer':
		'Solo in memoria mentre questa scheda è aperta. Cancella al termine.',
	'tool.totp-generator.use_case.0': 'Verificare implementazioni autenticatore in sviluppo',
	'tool.totp-generator.use_case.1': 'Confrontare codici con vettori di test RFC',
	'tool.totp-generator.use_case.2': 'Ruotare segreti con un generatore affidabile',
	'tool.totp-generator.use_case.3': 'Il supporto riproduce problemi MFA',
	'ui.random_string.tab_label': 'Casuale',
	'ui.random_string.simple_hint':
		'Modifica lunghezza e tipi di carattere — l’output si aggiorna automaticamente.',
	'ui.random_string.length_with_value': 'Lunghezza: {n}',
	'ui.random_string.characters_used': 'Caratteri usati',
	'ui.random_string.pick.upper': 'ABC',
	'ui.random_string.pick.lower': 'abc',
	'ui.random_string.pick.digits': '123',
	'ui.random_string.pick.symbols': '#$&',
	'ui.random_string.preset_active_hint':
		'È attivo un preset di set di caratteri. Apri Avanzate e passa a “Selezione” per ABC / abc / 123 / simboli.',
	'ui.random_string.advanced.title': 'Avanzate',
	'ui.random_string.exact_length': 'Lunghezza esatta',
	'ui.random_string.slider_hint':
		'Lo slider sopra è veloce per lunghezze 1–256. Scrivi qui stringhe più lunghe (fino a 100.000).',
	'ui.random_string.regenerate': 'Rigenera',
	'ui.random_string.decrease_length': 'Diminuisci lunghezza',
	'ui.random_string.increase_length': 'Aumenta lunghezza',
	'ui.random_string.mode.pick': 'Selezione (interruttori)',
	'ui.random_string.strength.very_weak': 'Molto debole',
	'ui.random_string.strength.weak': 'Debole',
	'ui.random_string.strength.fair': 'Discreta',
	'ui.random_string.strength.strong': 'Forte',
	'ui.random_string.strength.very_strong': 'Molto forte',
	'ui.random_string.toast.one_charset': 'Seleziona almeno un tipo di carattere.',
	'ui.random_string.generate': 'Genera',
	'ui.random_string.processing': 'Elaborazione…',
	'ui.random_string.length_label': 'Lunghezza per stringa',
	'ui.random_string.count_label': 'Quante stringhe',
	'ui.random_string.charset_label': 'Set di caratteri',
	'ui.random_string.custom_charset_label': 'Caratteri personalizzati',
	'ui.random_string.custom_charset_placeholder': 'Inserisci i caratteri esatti da cui campionare…',
	'ui.random_string.separator_label': 'Separatore tra stringhe',
	'ui.random_string.charset.alphanumeric': 'Alfanumerico',
	'ui.random_string.charset.hex_lower': 'Hex (minuscolo)',
	'ui.random_string.charset.hex_upper': 'Hex (maiuscolo)',
	'ui.random_string.charset.numeric': 'Numerico',
	'ui.random_string.charset.base64url': 'Base64 URL-safe',
	'ui.random_string.charset.custom': 'Personalizzato',
	'ui.random_string.separator.newline': 'Nuova riga',
	'ui.random_string.separator.comma': 'Virgola',
	'ui.random_string.separator.space': 'Spazio',
	'ui.random_string.separator.none': 'Nessuno (concat)',
	'ui.random_string.exclude_ambiguous': 'Escludi caratteri visivamente ambigui (0/O, 1/l, …)',
	'ui.random_string.output_label': 'Output',
	'ui.random_string.panel_options_heading': 'Opzioni di generazione',
	'ui.random_string.panel_options_hint':
		'Lunghezza, quantità, set di caratteri e come unire più stringhe.',
	'ui.random_string.output_placeholder': 'Le stringhe generate compaiono qui',
	'ui.random_string.worker_active':
		'Input grande rilevato (>{size}). La generazione usa un Web Worker.',
	'ui.random_string.worker_failed': 'Worker fallito. Torno al thread principale.',
	'ui.random_string.worker_badge': 'Worker',
	'ui.random_string.toast.generated': 'Stringhe casuali generate',
	'ui.random_string.toast.cleared': 'Output svuotato',
	'ui.random_string.toast.nothing_to_download': 'Niente da scaricare ancora',
	'ui.random_string.error.invalid_length': 'La lunghezza deve essere nell’intervallo consentito.',
	'ui.random_string.error.invalid_count': 'Il numero deve essere nell’intervallo consentito.',
	'ui.random_string.error.empty_charset': 'Scegli un set di caratteri non vuoto.',
	'ui.random_string.error.charset_too_large': 'Il set di caratteri è troppo grande.',
	'ui.random_string.error.crypto_unavailable': 'Web Crypto non è disponibile in questo ambiente.',
	'ui.random_string.error.unknown': 'Impossibile generare le stringhe.',
	'ui.crypto.tab.hash': 'Hash',
	'ui.crypto.tab.hmac': 'HMAC',
	'ui.crypto.tab.file_hash': 'File',
	'ui.crypto.tab.password': 'Password',
	'ui.crypto.tab.uuid': 'UUID',
	'ui.crypto.tab.keypair': 'Chiavi',
	'ui.crypto.tab.cert': 'Cert.',
	'ui.crypto.tab.totp': 'TOTP',
	'ui.hash.intro': 'Hash di testo con MD5 o SHA. Tutto nel browser — nulla viene caricato.',
	'ui.hash.sample_input': 'fmtly',
	'ui.hash.input_label': 'Input (UTF-8)',
	'ui.hash.regenerate': 'Ricalcola',
	'ui.hash.error_failed': 'Impossibile calcolare l’hash.',
	'ui.hash.worker_label': 'Worker',
	'ui.hash.worker_hint':
		'Input grandi usano automaticamente un Web Worker per mantenere la pagina reattiva.',
	'ui.hmac.intro':
		'Calcola HMAC con la tua chiave segreta. Le chiavi restano in questa scheda — mai inviate al server.',
	'ui.hmac.sample_message': 'messaggio',
	'ui.hmac.sample_secret': 'segreto',
	'ui.hmac.secret_label': 'Chiave segreta',
	'ui.hmac.message_label': 'Messaggio (UTF-8)',
	'ui.hmac.regenerate': 'Ricalcola',
	'ui.hmac.error_failed': 'Impossibile calcolare l’HMAC.',
	'ui.hmac.worker_hint':
		'Messaggi lunghi usano automaticamente un Web Worker per mantenere la pagina reattiva.',
	'ui.file_hash.intro':
		'MD5, SHA-256 e CRC32 di qualsiasi file — elaborato solo in locale nel browser.',
	'ui.file_hash.drop_zone': 'Trascina un file qui o clicca per scegliere',
	'ui.file_hash.drop_hint': 'I file non vengono mai caricati.',
	'ui.file_hash.rehash': 'Ricalcola hash',
	'ui.file_hash.error_failed': 'Impossibile fare hash del file.',
	'ui.file_hash.worker_hint':
		'File grandi usano automaticamente un Web Worker per mantenere la pagina reattiva.',
	'ui.password_strength.intro':
		'Entropia, zxcvbn e Have I Been Pwned (k-anonimato). La password non esce dal browser tranne la query anonima per intervallo.',
	'ui.password_strength.field_label': 'Password',
	'ui.password_strength.show': 'Mostra',
	'ui.password_strength.hide': 'Nascondi',
	'ui.password_strength.bits': 'bit',
	'ui.password_strength.band.very_weak': 'Molto debole',
	'ui.password_strength.band.weak': 'Debole',
	'ui.password_strength.band.fair': 'Discreta',
	'ui.password_strength.band.good': 'Buona',
	'ui.password_strength.band.strong': 'Forte',
	'ui.password_strength.summary.entropy': 'Entropia (stima)',
	'ui.password_strength.summary.crack': 'Tempo di crack (appross.)',
	'ui.password_strength.summary.zxcvbn': 'Punteggio zxcvbn',
	'ui.password_strength.summary.pwned': 'Violazioni note (HIBP)',
	'ui.password_strength.summary.pwned_unknown':
		'Controllo violazioni non disponibile (offline o errore).',
	'ui.password_strength.zxcvbn_label': 'Punteggio zxcvbn',
	'ui.password_strength.hibp_label': 'Conteggio HIBP',
	'ui.uuid.intro':
		'UUID v4, UUID v7 e ULID — generati in locale. ULID include un timestamp decodificabile.',
	'ui.uuid.count': 'Quantità',
	'ui.uuid.regenerate': 'Rigenera',
	'ui.uuid.output_label': 'Identificatori generati',
	'ui.uuid.ulid_decode_label': 'Decodifica tempo ULID',
	'ui.uuid.ulid_placeholder': 'Incolla un ULID',
	'ui.uuid.ulid_decode_invalid': 'ULID non valido',
	'ui.uuid.decode': 'Decodifica',
	'ui.keypair.intro':
		'Coppie di chiavi RSA (PSS) ed ECDSA in PEM. Generate solo nel browser con Web Crypto.',
	'ui.keypair.bits': 'bit',
	'ui.keypair.generate': 'Genera',
	'ui.keypair.public': 'Chiave pubblica',
	'ui.keypair.private': 'Chiave privata',
	'ui.keypair.error_failed': 'Impossibile generare la coppia di chiavi.',
	'ui.cert.intro':
		'Ispeziona certificati PEM X.509: soggetto, validità, SAN, impronta — analizzato in locale.',
	'ui.cert.pem_label': 'Certificato PEM',
	'ui.cert.placeholder_hint': 'Incolla un certificato codificato PEM…',
	'ui.cert.subject': 'Soggetto',
	'ui.cert.issuer': 'Emittente',
	'ui.cert.serial': 'Numero di serie',
	'ui.cert.valid_from': 'Valido da',
	'ui.cert.valid_to': 'Valido a',
	'ui.cert.sig_alg': 'Firma',
	'ui.cert.public_key': 'Chiave pubblica',
	'ui.cert.fp256': 'Impronta SHA-256',
	'ui.cert.san': 'Nomi alternativi del soggetto',
	'ui.cert.redo': 'Decodifica di nuovo',
	'ui.totp.intro':
		'TOTP RFC 6238 da segreto Base32. Coincide con le app autenticatore quando le impostazioni combaciano.',
	'ui.totp.secret_label': 'Segreto (Base32)',
	'ui.totp.period': 'Periodo (s)',
	'ui.totp.digits': 'Cifre',
	'ui.totp.code_label': 'Codice',
	'ui.totp.refresh': 'Aggiorna',
	'ui.totp.error_failed': 'Segreto o impostazioni non validi.',
	'ui.qr.tab_label': 'QR',
	'ui.qr.tab_reader': 'Leggi',
	'ui.qr.tab_barcode': 'Barre',
	'ui.qr.characters': 'caratteri',
	'ui.qr.output_empty': 'Genera un codice QR per vederlo in anteprima ed esportarlo.',
	'ui.qr.preview_alt': 'Anteprima del codice QR generato',
	'ui.qr.worker_active':
		'Input grande rilevato (>{size}). La generazione del QR viene eseguita in un Web Worker.',
	'ui.qr.worker_failed': 'Worker non riuscito. Si torna alla generazione sul thread principale.',
	'ui.qr.worker_badge': 'Worker',
	'ui.qr.content_label': 'Contenuto QR',
	'ui.qr.encoding_hint': 'Testo, URL, payload Wi-Fi, vCard o deep link applicativi',
	'ui.qr.input_placeholder':
		'Incolla qui un URL, testo semplice, payload Wi-Fi o qualsiasi contenuto adatto al QR...',
	'ui.qr.preview_label': 'Anteprima live',
	'ui.qr.copy_svg': 'Copia SVG',
	'ui.qr.download_svg': 'Scarica SVG',
	'ui.qr.download_png': 'Scarica PNG',
	'ui.qr.empty_state':
		'Inserisci un contenuto per generare un’anteprima QR con output SVG e PNG pronto per l’esportazione.',
	'ui.qr.metric.version': 'Versione',
	'ui.qr.metric.modules': 'Moduli',
	'ui.qr.metric.mask': 'Maschera',
	'ui.qr.metric.segments': 'Segmenti',
	'ui.qr.scan_readiness_label': 'Prontezza scansione',
	'ui.qr.scan_readiness.excellent': 'Ottima affidabilità di scansione',
	'ui.qr.scan_readiness.excellent_hint':
		'Queste impostazioni sono ben bilanciate per scansioni affidabili sia a schermo sia su stampa.',
	'ui.qr.scan_readiness.balanced': 'Configurazione bilanciata',
	'ui.qr.scan_readiness.balanced_hint':
		'Questo QR dovrebbe essere letto bene, ma una correzione più alta o una quiet zone maggiore possono migliorare la robustezza.',
	'ui.qr.scan_readiness.risky': 'Rischioso per la scansione',
	'ui.qr.scan_readiness.risky_hint':
		'Le impostazioni attuali possono ridurre l’affidabilità della scansione. Aumenta quiet zone o correzione, soprattutto se usi un logo.',
	'ui.qr.section.reliability': 'Affidabilità',
	'ui.qr.section.appearance': 'Aspetto',
	'ui.qr.section.logo': 'Logo centrale (opzionale)',
	'ui.qr.error_correction_hint':
		'Una correzione più alta resiste meglio a danni, graffi e loghi, ma riduce leggermente la capacità totale.',
	'ui.qr.size_label': 'Dimensione',
	'ui.qr.margin_label': 'Quiet zone',
	'ui.qr.dark_color_label': 'Primo piano',
	'ui.qr.light_color_label': 'Sfondo',
	'ui.qr.transparent': 'Trasparente',
	'ui.qr.transparent_background_label': 'Sfondo trasparente',
	'ui.qr.logo_hint':
		'Aggiunge un piccolo logo al centro del QR per poster, menu, packaging o materiali stampati brandizzati. Lascialo vuoto per la scansione più affidabile.',
	'ui.qr.upload_logo': 'Carica logo',
	'ui.qr.logo_preview_alt': 'Anteprima del logo caricato',
	'ui.qr.logo_scale_label': 'Dimensione logo',
	'ui.qr.remove_logo': 'Rimuovi logo',
	'ui.qr.logo_empty':
		'Nessun logo selezionato. Questa opzione è facoltativa e serve solo se vuoi mostrare il tuo marchio al centro del codice QR. Lascialo vuoto per scansioni più semplici e affidabili.',
	'ui.qr.error.invalid_logo': 'Carica un file immagine valido per il logo.',
	'ui.qr.error.input_too_long':
		'Questo testo è troppo grande per stare in un singolo codice QR. Accorcia il contenuto o rimuovi parte dei dati.',
	'ui.qr.error.generation_failed': 'Generazione QR non riuscita: {detail}',
	'ui.qr.error.png_export_failed': 'Esportazione PNG non riuscita per questo codice QR.',
	'ui.qr.warning.logo_overlay_low_error_correction':
		'Usare un logo centrale con correzione L o M può ridurre l’affidabilità della scansione. Meglio Q o H.',
	'ui.qr.toast.logo_added': 'Logo aggiunto al QR',
	'ui.qr.toast.logo_removed': 'Logo rimosso dal QR',
	'ui.qr.reader.upload': 'Carica',
	'ui.qr.reader.camera': 'Fotocamera',
	'ui.qr.reader.drop_title': 'Trascina qui un’immagine',
	'ui.qr.reader.drop_hint':
		'PNG, JPG, WebP, GIF o SVG. Le immagini grandi vengono decodificate fuori dal thread principale. Puoi anche incollare uno screenshot.',
	'ui.qr.reader.drop_aria': 'Carica o trascina un’immagine da analizzare',
	'ui.qr.reader.preview_alt': 'Anteprima dell’immagine caricata',
	'ui.qr.reader.result_label': 'Contenuto decodificato',
	'ui.qr.reader.empty_state':
		'Il testo decodificato appare qui. La tua immagine non lascia il browser.',
	'ui.qr.reader.status_decoding': 'Scansione immagine…',
	'ui.qr.reader.status_ok': '{size} · {ms} ms',
	'ui.qr.reader.error_no_qr':
		'Nessun QR code trovato. Prova una foto più nitida, una luce migliore o un ritaglio più ampio.',
	'ui.qr.reader.error_decode':
		'Impossibile leggere questa immagine. Prova un altro file o formato.',
	'ui.qr.reader.error_load':
		'Impossibile caricare questa immagine. Prova PNG, JPG o WebP dal dispositivo.',
	'ui.qr.reader.error_type': 'Scegli un file immagine.',
	'ui.qr.reader.worker_active':
		'Immagine grande ({size}). La decodifica avviene in un Web Worker per mantenere l’interfaccia reattiva.',
	'ui.qr.reader.worker_badge': 'Worker',
	'ui.qr.reader.worker_failed':
		'Decodifica nel Worker non riuscita. Nuovo tentativo sul thread principale.',
	'ui.barcode.characters': 'caratteri',
	'ui.barcode.content_label': 'Dati codice a barre',
	'ui.barcode.input_placeholder': 'Digita o incolla il payload per la simbologia selezionata…',
	'ui.barcode.format_label': 'Simbologia',
	'ui.barcode.format_hint': 'I GTIN retail usano EAN/UPC; in logistica spesso Code 128 o ITF-14.',
	'ui.barcode.preview_label': 'Anteprima',
	'ui.barcode.preview_alt': 'Anteprima codice a barre',
	'ui.barcode.output_empty': 'Genera un codice a barre per vederlo in anteprima ed esportarlo.',
	'ui.barcode.raster_only': 'Solo PNG (worker)',
	'ui.barcode.empty_preview': 'Regola dati e opzioni per un’anteprima vettoriale o raster.',
	'ui.barcode.copy_svg': 'Copia SVG',
	'ui.barcode.copy_png': 'Copia data URL PNG',
	'ui.barcode.copy_svg_unavailable': 'SVG non disponibile per questa anteprima.',
	'ui.barcode.download_svg': 'SVG',
	'ui.barcode.download_png': 'PNG',
	'ui.barcode.section.appearance': 'Aspetto',
	'ui.barcode.display_value': 'Mostra testo leggibile',
	'ui.barcode.bar_width': 'Larghezza barre',
	'ui.barcode.bar_height': 'Altezza barre',
	'ui.barcode.font_size': 'Dimensione etichetta',
	'ui.barcode.quiet_zone': 'Zona di silenzio',
	'ui.barcode.line_color': 'Barre',
	'ui.barcode.background': 'Sfondo',
	'ui.barcode.worker_active': 'Payload grande ({size}). La generazione avviene in un Web Worker.',
	'ui.barcode.worker_badge': 'Worker',
	'ui.barcode.worker_failed': 'Worker non riuscito. Nuovo tentativo sul thread principale.',
	'ui.barcode.error.empty': 'Inserisci un valore da codificare.',
	'ui.barcode.error.invalid_value': 'Questo valore non corrisponde al formato selezionato.',
	'ui.barcode.error.generation_failed': 'Impossibile generare il codice a barre: {detail}',
	'ui.barcode.error.ean13': 'EAN-13 richiede 12 o 13 cifre.',
	'ui.barcode.error.ean8': 'EAN-8 richiede 7 o 8 cifre.',
	'ui.barcode.error.upc': 'UPC-A richiede 11 o 12 cifre.',
	'ui.barcode.error.itf14': 'ITF-14 richiede 13 o 14 cifre.',
	'ui.barcode.error.itf': 'ITF richiede un numero pari di cifre (almeno due).',
	'ui.barcode.error.msi': 'MSI codifica solo cifre.',
	'ui.barcode.error.pharmacode': 'Il pharmacode deve essere un intero tra 1 e 131070.',
	'ui.barcode.format.CODE128': 'Code 128',
	'ui.barcode.format.CODE39': 'Code 39',
	'ui.barcode.format.CODE93': 'Code 93',
	'ui.barcode.format.codabar': 'Codabar',
	'ui.barcode.format.EAN13': 'EAN-13',
	'ui.barcode.format.EAN8': 'EAN-8',
	'ui.barcode.format.UPC': 'UPC-A',
	'ui.barcode.format.ITF14': 'ITF-14',
	'ui.barcode.format.ITF': 'ITF (intrecciato)',
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
	'ui.validator.mode': 'ui.validator.mode',
	'ui.validator.paste_yaml': 'ui.validator.paste_yaml',
	'ui.validator.yaml_paste_schema': 'ui.validator.yaml_paste_schema',
	'ui.validator.yaml_validating_schema': 'ui.validator.yaml_validating_schema',
	'ui.validator.yaml_matches_schema': 'ui.validator.yaml_matches_schema',
	'ui.validator.yaml_matches_current_schema': 'ui.validator.yaml_matches_current_schema',
	'ui.validator.yaml_schema_title': 'ui.validator.yaml_schema_title',
	'ui.validator.yaml_schema_standard': 'ui.validator.yaml_schema_standard',
	'ui.validator.yaml_paste_schema_placeholder': 'ui.validator.yaml_paste_schema_placeholder',
	'ui.validator.yaml_schema_validation_desc': 'ui.validator.yaml_schema_validation_desc',
	'ui.whitespace_cleaner.output': 'ui.whitespace_cleaner.output',
	'ui.whitespace_cleaner.statistics': 'ui.whitespace_cleaner.statistics',
	'ui.whitespace_cleaner.normalized': 'ui.whitespace_cleaner.normalized',

	'category.generate.display_name': 'Generatori',
	'category.generate.description':
		'Genera dati di test, identificatori, password, .gitignore e README istantaneamente nel browser.',
	'category.generate.primary_keyword': 'generatori per sviluppatori',
	'tool.fake-data-generator.display_name': 'Generatore di dati fittizi',
	'tool.fake-data-generator.tagline': 'Righe realistiche per QA e demo',
	'tool.fake-data-generator.description':
		'Genera nomi, email, indirizzi e altro con Faker e locale. Esporta JSON, CSV o INSERT SQL. Lotti grandi in Web Worker.',
	'tool.fake-data-generator.primary_keyword': 'generatore dati fittizi',
	'tool.fake-data-generator.meta_title': 'Generatore di dati fittizi — JSON, CSV, SQL | fmtly',
	'tool.fake-data-generator.meta_description':
		'Gratis nel browser: campi, lingua, righe, export JSON/CSV/SQL. Nessun upload; Worker per output enormi.',
	'tool.fake-data-generator.operation': 'generate',
	'tool.fake-data-generator.faq.0.question': 'I dati sono davvero casuali?',
	'tool.fake-data-generator.faq.0.answer':
		'Prodotti con Faker e Web Crypto. Solo per test — mai come dati personali reali.',
	'tool.fake-data-generator.faq.1.question': 'Quando si usa un worker?',
	'tool.fake-data-generator.faq.1.answer':
		"Molte righe o output stimato > ~500 KB fuori dal thread principale per mantenere l'interfaccia fluida.",
	'tool.fake-data-generator.faq.2.question': 'Quali formati di export?',
	'tool.fake-data-generator.faq.2.answer':
		'JSON array di oggetti, CSV con intestazione o INSERT SQL nella tabella scelta.',
	'tool.fake-data-generator.faq.3.question': 'I dati lasciano il browser?',
	'tool.fake-data-generator.faq.3.answer': 'No. Tutto locale; fmtly non invia nulla al server.',
	'tool.fake-data-generator.use_case.0': 'Alimentare test di integrazione e database di staging',
	'tool.fake-data-generator.use_case.1': 'Demo senza dati reali',
	'tool.fake-data-generator.use_case.2': 'Prototipare import CSV e pipeline ETL',
	'tool.fake-data-generator.use_case.3': 'Condividere campioni riproducibili',
	'tool.uuid-batch-generator.display_name': 'Generatore UUID in batch',
	'tool.uuid-batch-generator.tagline': 'Migliaia di UUID v4 o v7',
	'tool.uuid-batch-generator.description':
		'Liste separate da newline o virgola, copia totale o file di testo. Batch grandi in Web Worker.',
	'tool.uuid-batch-generator.primary_keyword': 'uuid batch',
	'tool.uuid-batch-generator.meta_title': 'Generatore UUID in batch — v4 e v7 | fmtly',
	'tool.uuid-batch-generator.meta_description':
		'Fino a centinaia di migliaia di UUID v4 o v7 nel browser. Copia o scarica; worker per volumi enormi.',
	'tool.uuid-batch-generator.operation': 'generate',
	'tool.uuid-batch-generator.faq.0.question': 'Differenza dal tool UUID singolo?',
	'tool.uuid-batch-generator.faq.0.answer':
		'Qui: liste massicce, download, separatori. Il tool crypto: un ID e decodifica ULID.',
	'tool.uuid-batch-generator.faq.1.question': 'v4 vs v7?',
	'tool.uuid-batch-generator.faq.1.answer':
		'v4 casuale. v7 ordinabile per tempo (RFC 9562). Entrambi generati localmente.',
	'tool.uuid-batch-generator.faq.2.question': 'Perché un worker?',
	'tool.uuid-batch-generator.faq.2.answer':
		"Centinaia di migliaia di UUID possono bloccare l'UI; il worker mantiene la fluidità.",
	'tool.uuid-batch-generator.faq.3.question': 'Sono crittograficamente sicuri?',
	'tool.uuid-batch-generator.faq.3.answer':
		'Usano lo stesso pacchetto uuid di molti runtime. Per minacce alta seguire la policy.',
	'tool.uuid-batch-generator.use_case.0': 'Test di carico e fixture',
	'tool.uuid-batch-generator.use_case.1': 'Riempire colonne con ID unici',
	'tool.uuid-batch-generator.use_case.2': 'Popolare database con v7 ordinati',
	'tool.uuid-batch-generator.use_case.3': 'Incolla rapida negli script',
	'tool.generate-password-generator.display_name': 'Generatore di password',
	'tool.generate-password-generator.tagline': 'Password forti nel browser',
	'tool.generate-password-generator.description':
		'Lunghezza e classi di caratteri con Web Crypto. Trattini opzionali e suggerimento zxcvbn locale.',
	'tool.generate-password-generator.primary_keyword': 'generatore password',
	'tool.generate-password-generator.meta_title': 'Generatore di password — sicuro e locale | fmtly',
	'tool.generate-password-generator.meta_description':
		'Password con lunghezza, simboli e opzione senza caratteri ambigui. Suggerimento zxcvbn locale.',
	'tool.generate-password-generator.operation': 'generate',
	'tool.generate-password-generator.faq.0.question': 'Differenza dal misuratore di forza?',
	'tool.generate-password-generator.faq.0.answer':
		'Questo genera password nuove. Il tool crypto valuta password esistenti.',
	'tool.generate-password-generator.faq.1.question': 'Provenienza della casualità?',
	'tool.generate-password-generator.faq.1.answer':
		'crypto.getRandomValues nel browser — stessa API dei contesti sicuri.',
	'tool.generate-password-generator.faq.2.question': 'Cosa significa il suggerimento?',
	'tool.generate-password-generator.faq.2.answer':
		'zxcvbn stima la indovinabilità. Locale e indicativo.',
	'tool.generate-password-generator.faq.3.question': 'Per la produzione?',
	'tool.generate-password-generator.faq.3.answer':
		'Combinare con policy aziendali, rotazione e vault.',
	'tool.generate-password-generator.use_case.0': 'Nuove credenziali admin o servizio',
	'tool.generate-password-generator.use_case.1': 'Segreti temporanei per demo',
	'tool.generate-password-generator.use_case.2': 'Alta entropia con simboli obbligatori',
	'tool.generate-password-generator.use_case.3': 'Workshop sulle buone pratiche',
	'tool.gitignore-builder.display_name': 'Builder .gitignore',
	'tool.gitignore-builder.tagline': 'Unisci regole ignore comuni',
	'tool.gitignore-builder.description':
		'Scegli stack e ambienti — Node, Python, Rust, rumore OS, IDE — e unisci in un .gitignore. Template statici, senza rete.',
	'tool.gitignore-builder.primary_keyword': 'generatore gitignore',
	'tool.gitignore-builder.meta_title': 'Builder .gitignore — template uniti | fmtly',
	'tool.gitignore-builder.meta_description':
		'Unisci frammenti tipo gitignore per linguaggi, Docker, Terraform, editor. Copia in un clic.',
	'tool.gitignore-builder.operation': 'generate',
	'tool.gitignore-builder.faq.0.question': 'Come gitignore.io?',
	'tool.gitignore-builder.faq.0.answer':
		'Frammenti curati ispirati a template comuni; unione locale senza API.',
	'tool.gitignore-builder.faq.1.question': "Posso modificare l'output?",
	'tool.gitignore-builder.faq.1.answer': 'Sì — copia nel repo e adatta. Ordine deterministico.',
	'tool.gitignore-builder.faq.2.question': 'Perché unire?',
	'tool.gitignore-builder.faq.2.answer':
		'Regole più piccole e pertinenti riducono rumore e conflitti.',
	'tool.gitignore-builder.faq.3.question': 'Tracci le selezioni?',
	'tool.gitignore-builder.faq.3.answer': 'No. Tutto nel browser.',
	'tool.gitignore-builder.use_case.0': 'Avviare un repo con default sensati',
	'tool.gitignore-builder.use_case.1': 'Aggiungere velocemente OS e editor',
	'tool.gitignore-builder.use_case.2': 'Combinare Docker/Terraform con lo stack',
	'tool.gitignore-builder.use_case.3': 'Insegnare igiene Git',
	'tool.readme-template-generator.display_name': 'Template README',
	'tool.readme-template-generator.tagline': 'Scheletro README in secondi',
	'tool.readme-template-generator.description':
		'Titolo, descrizione, installazione, uso, licenza e badge GitHub opzionali — Markdown pulito da incollare.',
	'tool.readme-template-generator.primary_keyword': 'generatore readme',
	'tool.readme-template-generator.meta_title': 'Template README — Markdown | fmtly',
	'tool.readme-template-generator.meta_description':
		'README.md da campi: comandi, uso, licenza, badge opzionali. Tutto lato client.',
	'tool.readme-template-generator.operation': 'generate',
	'tool.readme-template-generator.faq.0.question': 'Personalizzare dopo?',
	'tool.readme-template-generator.faq.0.answer': 'Sì — Markdown semplice, estendi come vuoi.',
	'tool.readme-template-generator.faq.1.question': 'Badge fuori da GitHub?',
	'tool.readme-template-generator.faq.1.answer':
		'Pattern tipo shields per percorsi GitHub; adatta URL altrove.',
	'tool.readme-template-generator.faq.2.question': 'Il nome progetto viene inviato?',
	'tool.readme-template-generator.faq.2.answer': 'No. Solo assemblaggio locale.',
	'tool.readme-template-generator.faq.3.question': 'Repo privati?',
	'tool.readme-template-generator.faq.3.answer':
		'Sì — nessun upload; incolla il Markdown manualmente.',
	'tool.readme-template-generator.use_case.0': 'Open source su GitHub/GitLab',
	'tool.readme-template-generator.use_case.1': 'Librerie interne con README uniforme',
	'tool.readme-template-generator.use_case.2': 'Hackathon e prototipi',
	'tool.readme-template-generator.use_case.3': 'Insegnare Markdown e buone pratiche',
	'ui.generate_fake_data.no_fields': 'Seleziona almeno un campo.',
	'ui.generate_fake_data.fields_label': 'Campi',
	'ui.generate_fake_data.rows': 'Righe',
	'ui.generate_fake_data.format': 'Formato export',
	'ui.generate_fake_data.table': 'Nome tabella SQL',
	'ui.generate_fake_data.generate': 'Genera',
	'ui.generate_fake_data.worker_badge': 'Web Worker',
	'ui.generate_fake_data.preview': 'Output',
	'ui.generate_fake_data.placeholder': 'I dati generati compaiono qui…',
	'ui.generate_fake_data.field.fullName': 'Nome completo',
	'ui.generate_fake_data.field.firstName': 'Nome',
	'ui.generate_fake_data.field.lastName': 'Cognome',
	'ui.generate_fake_data.field.email': 'Email',
	'ui.generate_fake_data.field.phone': 'Telefono',
	'ui.generate_fake_data.field.street': 'Via',
	'ui.generate_fake_data.field.city': 'Città',
	'ui.generate_fake_data.field.zip': 'CAP',
	'ui.generate_fake_data.field.country': 'Paese',
	'ui.generate_fake_data.field.company': 'Azienda',
	'ui.generate_fake_data.field.jobTitle': 'Ruolo',
	'ui.generate_fake_data.field.ipv4': 'IPv4',
	'ui.generate_fake_data.field.date': 'Data',
	'ui.generate_fake_data.field.uuid': 'UUID',
	'ui.generate_uuid_batch.count': 'Quantità',
	'ui.generate_uuid_batch.separator': 'Separatore',
	'ui.generate_uuid_batch.sep_line': 'A capo',
	'ui.generate_uuid_batch.sep_comma': 'Virgola',
	'ui.generate_uuid_batch.generate': 'Genera',
	'ui.generate_uuid_batch.worker': 'Web Worker',
	'ui.generate_uuid_batch.output': 'UUID',
	'ui.generate_uuid_batch.placeholder': 'Gli UUID generati compaiono qui…',
	'ui.generate_password.length': 'Lunghezza',
	'ui.generate_password.upper': 'A–Z',
	'ui.generate_password.lower': 'a–z',
	'ui.generate_password.digits': '0–9',
	'ui.generate_password.symbols': 'Simboli',
	'ui.generate_password.no_ambiguous': 'Evita ambigui',
	'ui.generate_password.groups': 'Trattino ogni N caratteri (0 = off)',
	'ui.generate_password.regenerate': 'Rigenera',
	'ui.generate_password.strength_hint': 'Suggerimento',
	'ui.generate_password.strength.0': 'Troppo facile',
	'ui.generate_password.strength.1': 'Molto debole',
	'ui.generate_password.strength.2': 'Debole',
	'ui.generate_password.strength.3': 'Discreta',
	'ui.generate_password.strength.4': 'Forte',
	'ui.generate_password.disclaimer':
		'Generato nel browser con Web Crypto. Suggerimento zxcvbn locale — verifica le policy per segreti critici.',
	'ui.generate_gitignore.search': 'Filtra stack…',
	'ui.generate_readme.title': 'Titolo',
	'ui.generate_readme.license': 'Licenza',
	'ui.generate_readme.description': 'Descrizione',
	'ui.generate_readme.install': 'Installazione',
	'ui.generate_readme.usage': 'Utilizzo',
	'ui.generate_readme.badges': 'Badge stile GitHub',
	'ui.generate_readme.repo_user': 'Utente o org GitHub',
	'ui.generate_readme.repo_name': 'Nome repository',

	// Missing keys from English
	'category.pdf.display_name': 'PDF',
	'category.pdf.description': 'Strumenti PDF nel browser senza upload.',
	'category.pdf.primary_keyword': 'strumenti pdf',
	'tool.pdf-viewer.display_name': 'Strumento PDF',
	'tool.pdf-viewer.tagline': 'Elaborazione PDF locale',
	'tool.pdf-viewer.description': 'Questa elaborazione PDF avviene localmente nel browser.',
	'tool.pdf-viewer.primary_keyword': 'strumento pdf',
	'tool.pdf-viewer.meta_title': 'Strumento PDF - fmtly.dev',
	'tool.pdf-viewer.meta_description': 'Usa questo strumento PDF localmente nel browser.',
	'tool.pdf-viewer.operation': 'Esegui',
	'tool.pdf-viewer.faq.0.question': 'Domanda frequente',
	'tool.pdf-viewer.faq.0.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-viewer.faq.1.question': 'Domanda frequente',
	'tool.pdf-viewer.faq.1.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-viewer.faq.2.question': 'Domanda frequente',
	'tool.pdf-viewer.faq.2.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-viewer.faq.3.question': 'Domanda frequente',
	'tool.pdf-viewer.faq.3.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-viewer.use_case.0': 'Caso d uso PDF',
	'tool.pdf-viewer.use_case.1': 'Caso d uso PDF',
	'tool.pdf-viewer.use_case.2': 'Caso d uso PDF',
	'tool.pdf-viewer.use_case.3': 'Caso d uso PDF',
	'tool.pdf-to-text.display_name': 'Strumento PDF',
	'tool.pdf-to-text.tagline': 'Elaborazione PDF locale',
	'tool.pdf-to-text.description': 'Questa elaborazione PDF avviene localmente nel browser.',
	'tool.pdf-to-text.primary_keyword': 'strumento pdf',
	'tool.pdf-to-text.meta_title': 'Strumento PDF - fmtly.dev',
	'tool.pdf-to-text.meta_description': 'Usa questo strumento PDF localmente nel browser.',
	'tool.pdf-to-text.operation': 'Esegui',
	'tool.pdf-to-text.faq.0.question': 'Domanda frequente',
	'tool.pdf-to-text.faq.0.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-to-text.faq.1.question': 'Domanda frequente',
	'tool.pdf-to-text.faq.1.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-to-text.faq.2.question': 'Domanda frequente',
	'tool.pdf-to-text.faq.2.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-to-text.faq.3.question': 'Domanda frequente',
	'tool.pdf-to-text.faq.3.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-to-text.use_case.0': 'Caso d uso PDF',
	'tool.pdf-to-text.use_case.1': 'Caso d uso PDF',
	'tool.pdf-to-text.use_case.2': 'Caso d uso PDF',
	'tool.pdf-to-text.use_case.3': 'Caso d uso PDF',
	'tool.pdf-merge.display_name': 'Strumento PDF',
	'tool.pdf-merge.tagline': 'Elaborazione PDF locale',
	'tool.pdf-merge.description': 'Questa elaborazione PDF avviene localmente nel browser.',
	'tool.pdf-merge.primary_keyword': 'strumento pdf',
	'tool.pdf-merge.meta_title': 'Strumento PDF - fmtly.dev',
	'tool.pdf-merge.meta_description': 'Usa questo strumento PDF localmente nel browser.',
	'tool.pdf-merge.operation': 'Esegui',
	'tool.pdf-merge.faq.0.question': 'Domanda frequente',
	'tool.pdf-merge.faq.0.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-merge.faq.1.question': 'Domanda frequente',
	'tool.pdf-merge.faq.1.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-merge.faq.2.question': 'Domanda frequente',
	'tool.pdf-merge.faq.2.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-merge.faq.3.question': 'Domanda frequente',
	'tool.pdf-merge.faq.3.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-merge.use_case.0': 'Caso d uso PDF',
	'tool.pdf-merge.use_case.1': 'Caso d uso PDF',
	'tool.pdf-merge.use_case.2': 'Caso d uso PDF',
	'tool.pdf-merge.use_case.3': 'Caso d uso PDF',
	'tool.pdf-split.display_name': 'Strumento PDF',
	'tool.pdf-split.tagline': 'Elaborazione PDF locale',
	'tool.pdf-split.description': 'Questa elaborazione PDF avviene localmente nel browser.',
	'tool.pdf-split.primary_keyword': 'strumento pdf',
	'tool.pdf-split.meta_title': 'Strumento PDF - fmtly.dev',
	'tool.pdf-split.meta_description': 'Usa questo strumento PDF localmente nel browser.',
	'tool.pdf-split.operation': 'Esegui',
	'tool.pdf-split.faq.0.question': 'Domanda frequente',
	'tool.pdf-split.faq.0.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-split.faq.1.question': 'Domanda frequente',
	'tool.pdf-split.faq.1.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-split.faq.2.question': 'Domanda frequente',
	'tool.pdf-split.faq.2.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-split.faq.3.question': 'Domanda frequente',
	'tool.pdf-split.faq.3.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-split.use_case.0': 'Caso d uso PDF',
	'tool.pdf-split.use_case.1': 'Caso d uso PDF',
	'tool.pdf-split.use_case.2': 'Caso d uso PDF',
	'tool.pdf-split.use_case.3': 'Caso d uso PDF',
	'tool.pdf-page-extractor.display_name': 'Strumento PDF',
	'tool.pdf-page-extractor.tagline': 'Elaborazione PDF locale',
	'tool.pdf-page-extractor.description': 'Questa elaborazione PDF avviene localmente nel browser.',
	'tool.pdf-page-extractor.primary_keyword': 'strumento pdf',
	'tool.pdf-page-extractor.meta_title': 'Strumento PDF - fmtly.dev',
	'tool.pdf-page-extractor.meta_description': 'Usa questo strumento PDF localmente nel browser.',
	'tool.pdf-page-extractor.operation': 'Esegui',
	'tool.pdf-page-extractor.faq.0.question': 'Domanda frequente',
	'tool.pdf-page-extractor.faq.0.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-page-extractor.faq.1.question': 'Domanda frequente',
	'tool.pdf-page-extractor.faq.1.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-page-extractor.faq.2.question': 'Domanda frequente',
	'tool.pdf-page-extractor.faq.2.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-page-extractor.faq.3.question': 'Domanda frequente',
	'tool.pdf-page-extractor.faq.3.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-page-extractor.use_case.0': 'Caso d uso PDF',
	'tool.pdf-page-extractor.use_case.1': 'Caso d uso PDF',
	'tool.pdf-page-extractor.use_case.2': 'Caso d uso PDF',
	'tool.pdf-page-extractor.use_case.3': 'Caso d uso PDF',
	'tool.pdf-metadata-viewer.display_name': 'Strumento PDF',
	'tool.pdf-metadata-viewer.tagline': 'Elaborazione PDF locale',
	'tool.pdf-metadata-viewer.description': 'Questa elaborazione PDF avviene localmente nel browser.',
	'tool.pdf-metadata-viewer.primary_keyword': 'strumento pdf',
	'tool.pdf-metadata-viewer.meta_title': 'Strumento PDF - fmtly.dev',
	'tool.pdf-metadata-viewer.meta_description': 'Usa questo strumento PDF localmente nel browser.',
	'tool.pdf-metadata-viewer.operation': 'Esegui',
	'tool.pdf-metadata-viewer.faq.0.question': 'Domanda frequente',
	'tool.pdf-metadata-viewer.faq.0.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-metadata-viewer.faq.1.question': 'Domanda frequente',
	'tool.pdf-metadata-viewer.faq.1.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-metadata-viewer.faq.2.question': 'Domanda frequente',
	'tool.pdf-metadata-viewer.faq.2.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-metadata-viewer.faq.3.question': 'Domanda frequente',
	'tool.pdf-metadata-viewer.faq.3.answer': 'L elaborazione avviene localmente nel browser.',
	'tool.pdf-metadata-viewer.use_case.0': 'Caso d uso PDF',
	'tool.pdf-metadata-viewer.use_case.1': 'Caso d uso PDF',
	'tool.pdf-metadata-viewer.use_case.2': 'Caso d uso PDF',
	'tool.pdf-metadata-viewer.use_case.3': 'Caso d uso PDF',
	'ui.pdf.select_file': 'Seleziona PDF',
	'ui.pdf.select_file_first': 'Seleziona prima un file PDF',
	'ui.pdf.worker_used': 'Worker',
	'ui.pdf.bytes': 'byte',
	'ui.pdf.page': 'Pagina',
	'ui.pdf.page_ranges_placeholder': 'es. 1,3-5',
	'ui.pdf.viewer.loaded': 'PDF caricato',
	'ui.pdf.viewer.error': 'Impossibile aprire il PDF',
	'ui.pdf.viewer.render_error': 'Impossibile renderizzare la pagina',
	'ui.pdf.viewer.fit_width_error': 'Impossibile adattare la pagina alla larghezza',
	'ui.pdf.viewer.page': 'Pagina',
	'ui.pdf.viewer.fit_width': 'Adatta larghezza',
	'ui.pdf.viewer.reset_zoom': 'Reimposta zoom',
	'ui.pdf.viewer.empty': 'Carica un PDF per vedere l anteprima pagine',
	'ui.pdf.to_text.extract': 'Estrai testo',
	'ui.pdf.to_text.done': 'Testo estratto',
	'ui.pdf.to_text.error': 'Estrazione testo non riuscita',
	'ui.pdf.to_text.empty': 'Nessun testo da scaricare',
	'ui.pdf.to_text.empty_hint': 'Carica un PDF ed estrai testo pagina per pagina',
	'ui.pdf.to_text.no_output': 'Nessun testo estratto',
	'ui.pdf.merge.select_files': 'Seleziona file PDF',
	'ui.pdf.merge.select_more': 'Seleziona almeno due file PDF',
	'ui.pdf.merge.run': 'Unisci',
	'ui.pdf.merge.done': 'File PDF uniti',
	'ui.pdf.merge.error': 'Impossibile unire i PDF',
	'ui.pdf.merge.no_output': 'Nessun PDF unito da scaricare',
	'ui.pdf.merge.files_selected': 'file selezionati',
	'ui.pdf.merge.empty': 'Aggiungi file PDF da unire',
	'ui.pdf.split.run': 'Dividi',
	'ui.pdf.split.done': 'Divisione PDF completata',
	'ui.pdf.split.error': 'Impossibile dividere il PDF',
	'ui.pdf.split.empty_hint': 'Carica un PDF e inserisci intervalli pagina',
	'ui.pdf.split.no_output': 'Nessun file generato',
	'ui.pdf.extract.run': 'Estrai pagine',
	'ui.pdf.extract.done': 'Pagine estratte',
	'ui.pdf.extract.error': 'Impossibile estrarre pagine',
	'ui.pdf.extract.no_output': 'Nessun PDF di output da scaricare',
	'ui.pdf.extract.empty_hint': 'Carica un PDF e scegli intervalli pagina',
	'ui.pdf.extract.ready': 'PDF di output pronto',
	'ui.pdf.metadata.run': 'Leggi metadati',
	'ui.pdf.metadata.done': 'Metadati caricati',
	'ui.pdf.metadata.error': 'Impossibile leggere i metadati',
	'ui.pdf.metadata.empty_hint': 'Carica un PDF per ispezionare metadati',
	'ui.pdf.metadata.no_output': 'Nessun metadato caricato',
	'ui.pdf.metadata.title': 'Titolo',
	'ui.pdf.metadata.author': 'Autore',
	'ui.pdf.metadata.subject': 'Oggetto',
	'ui.pdf.metadata.keywords': 'Parole chiave',
	'ui.pdf.metadata.creator': 'Creatore',
	'ui.pdf.metadata.producer': 'Produttore',
	'ui.pdf.metadata.creation_date': 'Data di creazione',
	'ui.pdf.metadata.modification_date': 'Data di modifica',
	'ui.pdf.metadata.page_count': 'Numero pagine',
	'ui.pdf.metadata.file_size': 'Dimensione file (byte)',

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
		'1. Ordina i file · 2. Tocca Unisci · 3. Scarica il PDF unito qui sotto.',
	'ui.pdf.merge.ready_title': 'Il PDF unito è pronto',
	'ui.pdf.merge.ready_subtitle': 'Dimensione output: {size}. Salvato come merged.pdf.',
	'ui.pdf.merge.download_primary': 'Scarica PDF unito',
	'ui.pdf.merge.download_locked': 'Prima premi Unisci — il pulsante di download apparirà qui.',

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
	'category.image.display_name': 'Immagine',
	'category.image.description':
		'Ridimensiona, converti e ottimizza immagini direttamente nel browser, senza upload.',
	'category.image.primary_keyword': 'strumenti immagini',
	'tool.image-resizer.display_name': 'Ridimensionatore Immagini',
	'tool.image-resizer.tagline':
		'Ridimensiona immagini con proporzioni bloccate, scala percentuale e controllo qualità',
	'tool.image-resizer.description':
		'Ridimensiona immagini in modo preciso con blocco proporzioni, larghezza/altezza personalizzate, scala percentuale e output PNG, JPEG o WebP con confronto prima/dopo.',
	'tool.image-resizer.primary_keyword': 'ridimensionatore immagini',
	'tool.image-resizer.meta_title': 'Ridimensionatore Immagini Online — PNG, JPG, WebP | fmtly.dev',
	'tool.image-resizer.meta_description':
		'Ridimensiona immagini online nel browser. Mantieni proporzioni, imposta dimensioni esatte o percentuali, regola qualità ed esporta PNG, JPEG o WebP.',
	'tool.image-resizer.operation': 'Ridimensiona',
	'tool.image-resizer.faq.0.question': 'Le mie immagini vengono caricate su un server?',
	'tool.image-resizer.faq.0.answer':
		'No. Tutta l’elaborazione avviene localmente nel browser; nessun file viene inviato ai server.',
	'tool.image-resizer.faq.1.question': 'Posso mantenere le proporzioni originali?',
	'tool.image-resizer.faq.1.answer':
		'Sì. Attiva il blocco proporzioni per aggiornare automaticamente larghezza e altezza in modo coerente.',
	'tool.image-resizer.faq.2.question': 'Quali formati di output sono supportati?',
	'tool.image-resizer.faq.2.answer':
		'Puoi esportare in PNG, JPEG o WebP. Se vuoi, puoi anche mantenere il formato originale.',
	'tool.image-resizer.faq.3.question': 'Cosa succede con file grandi?',
	'tool.image-resizer.faq.3.answer':
		'Per input oltre 500KB il ridimensionamento passa a un Web Worker, mantenendo l’interfaccia fluida.',
	'tool.image-resizer.use_case.0': 'Preparare immagini responsive per pagine web e blog',
	'tool.image-resizer.use_case.1': 'Ridurre immagini ad alta risoluzione per upload più veloci',
	'tool.image-resizer.use_case.2': 'Creare varianti immagine con dimensioni pixel esatte',
	'tool.image-resizer.use_case.3':
		'Convertire output ridimensionato in PNG, JPEG o WebP con controllo qualità',

	'tool.image-format-converter.display_name': 'Convertitore di Formati Immagine',
	'tool.image-format-converter.tagline': 'Converti PNG, JPEG, WebP, AVIF e GIF in modo privato',
	'tool.image-format-converter.description':
		'Converti immagini tra PNG, JPEG, WebP, AVIF e GIF direttamente nel browser. Visualizza l’anteprima, regola la qualità, appiattisci la trasparenza per JPEG e scarica senza caricare file.',
	'tool.image-format-converter.primary_keyword': 'convertitore formati immagine',
	'tool.image-format-converter.meta_title':
		'Convertitore Immagine — PNG, JPG, WebP, AVIF, GIF | fmtly.dev',
	'tool.image-format-converter.meta_description':
		'Converti PNG, JPEG, WebP, AVIF e GIF online nel browser. Privato, veloce, con controlli qualità e Web Worker per file grandi.',
	'tool.image-format-converter.operation': 'Converti immagine',
	'tool.image-format-converter.faq.0.question': 'Le mie immagini vengono caricate?',
	'tool.image-format-converter.faq.0.answer':
		'No. I file vengono decodificati, convertiti, mostrati in anteprima e scaricati localmente nel browser. Nulla viene inviato a un server.',
	'tool.image-format-converter.faq.1.question': 'Tra quali formati posso convertire?',
	'tool.image-format-converter.faq.1.answer':
		'Puoi importare PNG, JPEG, WebP, AVIF e GIF ed esportare PNG, JPEG, WebP, AVIF o GIF quando il browser supporta il codificatore di destinazione.',
	'tool.image-format-converter.faq.2.question': 'Che cosa succede alla trasparenza?',
	'tool.image-format-converter.faq.2.answer':
		'PNG, WebP, AVIF e GIF possono preservare la trasparenza. JPEG non ha canale alfa, quindi le aree trasparenti vengono composte sullo sfondo scelto.',
	'tool.image-format-converter.faq.3.question':
		'Come resta reattiva l’interfaccia con file grandi?',
	'tool.image-format-converter.faq.3.answer':
		'Gli input sopra 500KB vengono elaborati in un Web Worker, così la conversione resta fuori dal thread dell’interfaccia.',
	'tool.image-format-converter.use_case.0':
		'Convertire screenshot in WebP o AVIF prima della pubblicazione',
	'tool.image-format-converter.use_case.1':
		'Creare versioni JPEG di asset trasparenti con sfondo controllato',
	'tool.image-format-converter.use_case.2': 'Esportare anteprime GIF leggere da grafiche statiche',
	'tool.image-format-converter.use_case.3':
		'Normalizzare immagini fornite dai clienti prima di CMS o API',
	'tool.image-to-base64.display_name': 'Immagine in Base64',
	'tool.image-to-base64.tagline':
		'Trasforma immagini in Base64 puro o in data URI pronti da incollare',
	'tool.image-to-base64.description':
		'Converti PNG, JPEG, WebP, GIF, SVG, BMP, AVIF e ICO in stringhe Base64 o data URI completi direttamente nel browser. Copia l’output, scaricalo come file di testo e mantieni tutto locale.',
	'tool.image-to-base64.primary_keyword': 'immagine in base64',
	'tool.image-to-base64.meta_title': 'Immagine in Base64 — Convertitore Data URI | fmtly.dev',
	'tool.image-to-base64.meta_description':
		'Converti immagini in Base64 o data URI completi nel browser. Veloce, privato, con copia, download e Web Worker per file grandi.',
	'tool.image-to-base64.operation': 'Converti immagine in Base64',
	'tool.image-to-base64.faq.0.question': 'La mia immagine lascia il browser?',
	'tool.image-to-base64.faq.0.answer':
		'No. La conversione in Base64 avviene interamente nel browser e nessun file viene inviato a un server.',
	'tool.image-to-base64.faq.1.question': 'Qual è la differenza tra Base64 puro e data URI?',
	'tool.image-to-base64.faq.1.answer':
		'Il Base64 puro contiene solo il payload codificato. Il data URI aggiunge il prefisso MIME, per esempio `data:image/png;base64,`, così puoi incollarlo direttamente in HTML, CSS o JSON.',
	'tool.image-to-base64.faq.2.question': 'Quali formati immagine sono supportati?',
	'tool.image-to-base64.faq.2.answer':
		'Puoi caricare PNG, JPEG, WebP, GIF, BMP, AVIF, SVG e ICO. Il tool mantiene il MIME originale nell’output.',
	'tool.image-to-base64.faq.3.question': 'Come vengono gestite immagini grandi?',
	'tool.image-to-base64.faq.3.answer':
		'Gli input oltre 500KB vengono elaborati in un Web Worker per mantenere l’interfaccia reattiva durante la codifica.',
	'tool.image-to-base64.use_case.0':
		'Incorporare icone e asset piccoli inline in payload HTML, CSS o JSON',
	'tool.image-to-base64.use_case.1': 'Creare rapidamente data URI per prototipi, email o temi',
	'tool.image-to-base64.use_case.2':
		'Confrontare l’overhead Base64 prima di inserire asset in configurazioni o seed',
	'tool.image-to-base64.use_case.3':
		'Condividere asset come testo quando non è pratico inviare file binari',
	'tool.image-from-base64.display_name': 'Base64 in Immagine',
	'tool.image-from-base64.tagline':
		'Decodifica Base64 o data URI in immagini scaricabili con rilevamento del MIME',
	'tool.image-from-base64.description':
		'Incolla Base64 puro o data URI completi per ricostruire immagini direttamente nel browser. Rileva automaticamente PNG, JPEG, WebP, GIF, AVIF, SVG, BMP e ICO, corregge spazi o padding mancanti e offre download immediato.',
	'tool.image-from-base64.primary_keyword': 'base64 in immagine',
	'tool.image-from-base64.meta_title': 'Base64 in Immagine — Decodifica Data URI | fmtly.dev',
	'tool.image-from-base64.meta_description':
		'Decodifica Base64 o data URI in immagini nel browser. Rileva il tipo immagine, corregge padding e spazi e consente il download istantaneo.',
	'tool.image-from-base64.operation': 'Decodifica immagine Base64',
	'tool.image-from-base64.faq.0.question':
		'Posso incollare un data URI completo invece del Base64 puro?',
	'tool.image-from-base64.faq.0.answer':
		'Sì. Il tool accetta sia payload Base64 grezzi sia data URI completi e rimuove automaticamente il prefisso quando necessario.',
	'tool.image-from-base64.faq.1.question': 'Cosa succede se manca il tipo MIME?',
	'tool.image-from-base64.faq.1.answer':
		'Il tool prova prima a rilevare il tipo immagine dai byte decodificati. Se non ci riesce, usa il tipo di fallback che scegli nella UI.',
	'tool.image-from-base64.faq.2.question': 'Corregge spazi o padding mancanti?',
	'tool.image-from-base64.faq.2.answer':
		'Sì. Spazi, interruzioni di riga e padding mancante possono essere normalizzati automaticamente, con indicatori nella UI che mostrano quali correzioni sono state applicate.',
	'tool.image-from-base64.faq.3.question': 'L’input Base64 resta privato?',
	'tool.image-from-base64.faq.3.answer':
		'Sì. L’intera decodifica avviene localmente nel browser, quindi il contenuto Base64 non lascia mai il dispositivo.',
	'tool.image-from-base64.use_case.0':
		'Ripristinare immagini da payload API o fixture salvate come Base64',
	'tool.image-from-base64.use_case.1':
		'Verificare data URI copiati da HTML, CSS o strumenti di design',
	'tool.image-from-base64.use_case.2':
		'Scaricare rapidamente immagini inviate in JSON o log invece che come file',
	'tool.image-from-base64.use_case.3':
		'Riparare stringhe Base64 con ritorni a capo o padding mancante prima dell’esportazione',

	'tool.image-favicon-generator.display_name': 'Generatore di Favicon',
	'tool.image-favicon-generator.tagline':
		'Genera un set completo di favicon da qualsiasi immagine — ICO, PNG 16–512, Apple Touch, SVG e Web Manifest',
	'tool.image-favicon-generator.description':
		'Carica un PNG, JPEG, WebP o SVG e ottieni istantaneamente un set di favicon pronto per la produzione: ICO (16, 32, 48), tutte le dimensioni PNG standard (da 16 a 512), Apple Touch Icon (180×180), icone Android Chrome (192×192, 512×512), passthrough SVG per sorgenti vettoriali e un site.webmanifest. Tutto il processing avviene nel browser — la tua immagine non lascia mai il dispositivo.',
	'tool.image-favicon-generator.primary_keyword': 'generatore di favicon',
	'tool.image-favicon-generator.meta_title':
		'Generatore di Favicon — ICO, PNG, Apple Touch e Web Manifest | fmtly.dev',
	'tool.image-favicon-generator.meta_description':
		'Genera un set completo di favicon da qualsiasi immagine. Produce ICO, PNG 16–512, Apple Touch Icon, icone Android Chrome e site.webmanifest — tutto nel browser, niente viene caricato.',
	'tool.image-favicon-generator.operation': 'Genera set di favicon',
	'tool.image-favicon-generator.faq.0.question': 'La mia immagine viene caricata su un server?',
	'tool.image-favicon-generator.faq.0.answer':
		'No. Tutto il processing avviene localmente nel browser tramite la Canvas API. La tua immagine non lascia mai il dispositivo e nessun dato viene inviato a server.',
	'tool.image-favicon-generator.faq.1.question': 'Quali file vengono generati in output?',
	'tool.image-favicon-generator.faq.1.answer':
		'Lo strumento genera PNG nelle dimensioni 16, 32, 48, 96, 128, 180 (Apple Touch), 192, 256 e 512 pixel, più un favicon.ico multi-risoluzione (16, 32, 48). Se la sorgente è un SVG, include anche il SVG originale come favicon.svg. È incluso un site.webmanifest.',
	'tool.image-favicon-generator.faq.2.question': 'Posso usare un SVG come sorgente?',
	'tool.image-favicon-generator.faq.2.answer':
		'Sì. Carica un SVG e lo strumento lo rasterizzerà in tutte le dimensioni PNG e ICO usando il motore di rendering del browser, e includerà il SVG originale come favicon.svg per i browser moderni.',
	'tool.image-favicon-generator.faq.3.question': 'Come installo il favicon sul mio sito web?',
	'tool.image-favicon-generator.faq.3.answer':
		'Estrai il ZIP nella root del sito e aggiungi questi tag nell’<head> HTML: <link rel="icon" href="/favicon.ico">, <link rel="apple-touch-icon" href="/apple-touch-icon.png"> e <link rel="manifest" href="/site.webmanifest">.',
	'tool.image-favicon-generator.use_case.0':
		'Generare un set completo di favicon da un logo o icona app in pochi secondi',
	'tool.image-favicon-generator.use_case.1':
		'Produrre Apple Touch Icon per i segnalibri sulla schermata home iOS',
	'tool.image-favicon-generator.use_case.2':
		'Esportare icone PWA Android Chrome e un site.webmanifest pronto all’uso',
	'tool.image-favicon-generator.use_case.3':
		'Creare icone per tab del browser per un nuovo progetto senza Figma o Photoshop',

	'ui.favicon_generator.upload': 'Carica immagine',
	'ui.favicon_generator.clear': 'Cancella',
	'ui.favicon_generator.drop_title': 'Trascina un’immagine qui',
	'ui.favicon_generator.drop_hint': 'PNG, JPEG, WebP, SVG — o usa il pulsante di caricamento',
	'ui.favicon_generator.preview_alt': 'Anteprima immagine sorgente',
	'ui.favicon_generator.svg_hint': 'Solo input SVG',
	'ui.favicon_generator.processing': 'Generazione favicon in corso…',
	'ui.favicon_generator.output_placeholder':
		'I file generati appaiono qui dopo il caricamento dell’immagine',
	'ui.favicon_generator.download_all': 'Scarica ZIP',
	'ui.favicon_generator.download': 'Scarica',
	'ui.favicon_generator.file_loaded': '{name} caricato',
	'ui.favicon_generator.file_read_error': 'Impossibile leggere il file immagine',
	'ui.favicon_generator.file_type_error': 'Carica un file immagine valido',
	'ui.favicon_generator.input_cleared': 'Input cancellato',
	'ui.favicon_generator.download_success': '{filename} scaricato',
	'ui.favicon_generator.download_error': 'Download fallito',
	'ui.favicon_generator.zip_downloaded': 'favicons.zip scaricato',
	'ui.favicon_generator.generate_failed': 'Generazione favicon fallita',
	'ui.favicon_generator.worker_failed': 'Worker fallito, elaborato sul thread principale',
	'ui.favicon_generator.worker_active': 'Immagine grande (>{size}) — elaborazione nel Web Worker',
	'ui.favicon_generator.worker_used': 'elaborato in background',
	'ui.favicon_generator.stat_files': 'File',
	'ui.favicon_generator.stat_size': 'Dimensione totale',
	'ui.favicon_generator.stat_time': 'Tempo',
	'ui.favicon_generator.source_dimensions': 'Sorgente: {dims}',
	'ui.favicon_generator.section_png': 'Dimensioni PNG',
	'ui.favicon_generator.section_other': 'Altri formati',
	'ui.favicon_generator.section_manifest': 'Web Manifest',

	'ui.image_to_base64.upload': 'Carica immagine',
	'ui.image_to_base64.clear': 'Cancella',
	'ui.image_to_base64.no_file': 'Nessuna immagine selezionata',
	'ui.image_to_base64.source_status': '{size} · {format}',
	'ui.image_to_base64.output_status':
		'{base64Chars} caratteri Base64 · {dataUrlChars} caratteri data URI',
	'ui.image_to_base64.worker_active':
		'Immagine grande rilevata (>{size}). La conversione usa un Web Worker.',
	'ui.image_to_base64.worker_used': 'Elaborato fuori dal thread principale',
	'ui.image_to_base64.worker_failed':
		'Codifica nel Worker non riuscita. Passaggio al thread principale.',
	'ui.image_to_base64.file_read_error': 'Impossibile caricare il file immagine',
	'ui.image_to_base64.file_loaded': '{name} caricato',
	'ui.image_to_base64.input_cleared': 'Input immagine cancellato',
	'ui.image_to_base64.copy_empty': 'Niente da copiare',
	'ui.image_to_base64.copy_success': 'Output copiato',
	'ui.image_to_base64.copy_data_uri_success': 'Data URI copiato',
	'ui.image_to_base64.copy_error': 'Copia non riuscita',
	'ui.image_to_base64.download_empty': 'Niente da scaricare',
	'ui.image_to_base64.download_success': '{filename} scaricato',
	'ui.image_to_base64.download_error': 'Download non riuscito',
	'ui.image_to_base64.drop_title': 'Rilascia un’immagine qui',
	'ui.image_to_base64.drop_hint':
		'PNG, JPEG, WebP, GIF, SVG, BMP, AVIF e ICO restano in questo browser.',
	'ui.image_to_base64.source_preview_alt': 'Anteprima immagine sorgente',
	'ui.image_to_base64.privacy_note': 'La codifica è locale; l’immagine non lascia mai il browser.',
	'ui.image_to_base64.performance_note': 'Gli input grandi usano un Web Worker sopra {size}.',
	'ui.image_to_base64.stat.file_size': 'Dimensione immagine',
	'ui.image_to_base64.stat.file_size_helper': 'input solo browser',
	'ui.image_to_base64.stat.base64_length': 'Lunghezza Base64',
	'ui.image_to_base64.stat.base64_length_helper': 'caratteri senza prefisso',
	'ui.image_to_base64.stat.expansion': 'Crescita payload',
	'ui.image_to_base64.stat.expansion_helper': 'overhead Base64 previsto',
	'ui.image_to_base64.processing': 'Codifica...',
	'ui.image_to_base64.copy_base64': 'Copia Base64',
	'ui.image_to_base64.copy_data_uri': 'Copia data URI',
	'ui.image_to_base64.download_base64': 'Scarica .txt',
	'ui.image_to_base64.download_data_uri': 'Scarica data URI',
	'ui.image_to_base64.base64_output': 'Output Base64',
	'ui.image_to_base64.output_placeholder': 'Il Base64 codificato apparirà qui...',
	'ui.image_to_base64.data_uri_output': 'Output data URI',
	'ui.image_to_base64.data_uri_placeholder': 'Il data URI apparirà qui...',
	'ui.image_to_base64.unsupported_image': 'Formato immagine non supportato',
	'ui.image_to_base64.empty_image': 'Il file immagine è vuoto',
	'ui.image_to_base64.convert_failed': 'Impossibile convertire l’immagine in Base64',
	'ui.image_from_base64.input_status': '{size} · {characters} caratteri',
	'ui.image_from_base64.output_status': '{size} · {type}',
	'ui.image_from_base64.worker_active':
		'Input Base64 grande rilevato (>{size}). La decodifica usa un Web Worker.',
	'ui.image_from_base64.worker_used': 'Elaborato fuori dal thread principale',
	'ui.image_from_base64.worker_failed':
		'Decodifica nel Worker non riuscita. Passaggio al thread principale.',
	'ui.image_from_base64.privacy_note':
		'I byte dell’immagine decodificata restano nel browser; nulla viene caricato.',
	'ui.image_from_base64.performance_note':
		'Le stringhe Base64 grandi usano un Web Worker sopra {size}.',
	'ui.image_from_base64.input_placeholder':
		'Incolla qui una stringa Base64 o un data URI completo...',
	'ui.image_from_base64.output_placeholder': 'L’anteprima immagine decodificata apparirà qui...',
	'ui.image_from_base64.stat.output_type': 'Tipo output',
	'ui.image_from_base64.stat.output_type_helper': 'MIME rilevato o di fallback',
	'ui.image_from_base64.stat.output_size': 'Dimensione output',
	'ui.image_from_base64.stat.output_size_helper': 'Dimensione binaria decodificata',
	'ui.image_from_base64.stat.flags': 'Normalizzazione',
	'ui.image_from_base64.stat.flags_helper': 'Prefisso, spazi e padding',
	'ui.image_from_base64.input_cleared': 'Input Base64 cancellato',
	'ui.image_from_base64.sample_loaded': 'Esempio Base64 caricato',
	'ui.image_from_base64.copy_empty': 'Niente da copiare',
	'ui.image_from_base64.copy_data_url_success': 'Data URL copiato',
	'ui.image_from_base64.copy_error': 'Copia non riuscita',
	'ui.image_from_base64.copy_base64_success': 'Base64 normalizzato copiato',
	'ui.image_from_base64.download_empty': 'Niente da scaricare',
	'ui.image_from_base64.download_success': '{filename} scaricato',
	'ui.image_from_base64.download_error': 'Download non riuscito',
	'ui.image_from_base64.decode_failed': 'Decodifica immagine Base64 non riuscita',
	'ui.image_from_base64.error.empty': 'Incolla una stringa Base64 da decodificare.',
	'ui.image_from_base64.error.invalid_mime':
		'Il data URI dichiara un tipo MIME immagine non supportato.',
	'ui.image_from_base64.error.invalid_characters':
		'L’input contiene caratteri non validi per il Base64.',
	'ui.image_from_base64.error.invalid_padding':
		'Il padding deve comparire solo alla fine dell’input Base64.',
	'ui.image_from_base64.error.invalid_length':
		'La lunghezza Base64 non è valida e non può essere decodificata.',
	'ui.image_from_base64.flag.data_uri': 'Data URI',
	'ui.image_from_base64.flag.whitespace': 'Spazi rimossi',
	'ui.image_from_base64.flag.padding': 'Padding corretto',
	'ui.image_from_base64.flag.fallback': 'MIME di fallback',
	'ui.image_from_base64.flag.clean': 'Nessuna correzione',
	'ui.image_from_base64.sample': 'Carica esempio',
	'ui.image_from_base64.clear': 'Cancella',
	'ui.image_from_base64.fallback_mime': 'Tipo output di fallback',
	'ui.image_from_base64.processing': 'Decodifica...',
	'ui.image_from_base64.copy_base64': 'Copia Base64',
	'ui.image_from_base64.copy_data_url': 'Copia data URL',
	'ui.image_from_base64.download': 'Scarica',
	'ui.image_from_base64.output_preview_alt': 'Anteprima immagine decodificata',
	'ui.image_converter.upload': 'Carica immagine',
	'ui.image_converter.clear': 'Cancella',
	'ui.image_converter.no_file': 'Nessuna immagine selezionata',
	'ui.image_converter.source_status': '{size} · {format} · {dimensions}',
	'ui.image_converter.output_status': '{size} · {format} · {dimensions}',
	'ui.image_converter.worker_active':
		'Immagine grande rilevata (>{size}). La conversione usa un Web Worker.',
	'ui.image_converter.worker_used': 'Elaborato fuori dal thread principale',
	'ui.image_converter.worker_failed':
		'Conversione nel Worker non riuscita. Uso del thread principale.',
	'ui.image_converter.convert_failed': 'Conversione immagine non riuscita',
	'ui.image_converter.file_read_error': 'Impossibile caricare il file immagine',
	'ui.image_converter.file_loaded': '{name} caricato',
	'ui.image_converter.input_cleared': 'Input immagine cancellato',
	'ui.image_converter.copy_empty': 'Niente da copiare',
	'ui.image_converter.copy_success': 'Output copiato',
	'ui.image_converter.copy_error': 'Copia non riuscita',
	'ui.image_converter.download_empty': 'Niente da scaricare',
	'ui.image_converter.download_success': '{filename} scaricato',
	'ui.image_converter.download_error': 'Download non riuscito',
	'ui.image_converter.drop_title': 'Rilascia un’immagine qui',
	'ui.image_converter.drop_hint': 'PNG, JPEG, WebP, AVIF e GIF restano in questo browser.',
	'ui.image_converter.source_preview_alt': 'Anteprima immagine sorgente',
	'ui.image_converter.output_preview_alt': 'Anteprima immagine convertita',
	'ui.image_converter.output_format': 'Formato di output',
	'ui.image_converter.quality': 'Qualità',
	'ui.image_converter.background': 'Sfondo JPEG',
	'ui.image_converter.background_white': 'Bianco',
	'ui.image_converter.background_black': 'Nero',
	'ui.image_converter.background_transparent': 'Trasparente',
	'ui.image_converter.privacy_note': 'La conversione è locale; i file non lasciano il browser.',
	'ui.image_converter.performance_note': 'Gli input grandi usano un Web Worker sopra {size}.',
	'ui.image_converter.stat.source_format': 'Formato sorgente',
	'ui.image_converter.stat.source_size': 'Dimensione originale',
	'ui.image_converter.stat.output_format': 'Formato di output',
	'ui.image_converter.stat.output_size': 'Dimensione convertita',
	'ui.image_converter.stat.size_delta': 'Variazione dimensione',
	'ui.image_converter.stat.size_delta_helper': 'rispetto alla sorgente',
	'ui.image_converter.processing': 'Conversione...',
	'ui.image_converter.copy_output': 'Copia URL dati',
	'ui.image_converter.download': 'Scarica',
	'ui.image_converter.output_placeholder': 'L’output convertito apparirà qui...',
	'ui.image_resizer.drop_title': 'Trascina un’immagine qui o seleziona un file',
	'ui.image_resizer.drop_hint':
		'Elaborazione locale nel browser. Sono supportati PNG, JPEG e WebP.',
	'ui.image_resizer.browse': 'Seleziona immagine',
	'ui.image_resizer.input_aria': 'Seleziona file immagine',
	'ui.image_resizer.no_file': 'Carica un’immagine per iniziare il ridimensionamento.',
	'ui.image_resizer.file_loaded': 'Immagine caricata: {name}',
	'ui.image_resizer.file_read_error': 'Impossibile leggere il file immagine selezionato.',
	'ui.image_resizer.preview_alt': 'Anteprima immagine ridimensionata',
	'ui.image_resizer.controls_title': 'Controlli ridimensionamento',
	'ui.image_resizer.width_label': 'Larghezza',
	'ui.image_resizer.height_label': 'Altezza',
	'ui.image_resizer.scale_label': 'Scala',
	'ui.image_resizer.lock_ratio': 'Blocca proporzioni',
	'ui.image_resizer.keep_format': 'Mantieni formato originale',
	'ui.image_resizer.output_format': 'Formato output',
	'ui.image_resizer.quality_label': 'Qualità',
	'ui.image_resizer.worker_active':
		'Input grande rilevato (>{size}). Ridimensionamento in Web Worker.',
	'ui.image_resizer.worker_badge': 'Worker',
	'ui.image_resizer.worker_used': 'Elaborato fuori dal thread principale',
	'ui.image_resizer.worker_failed':
		'Il worker ha fallito. Ripiego sull’elaborazione nel thread principale.',
	'ui.image_resizer.resize_failed': 'Ridimensionamento non riuscito. Controlla input e opzioni.',
	'ui.image_resizer.output_title': 'Anteprima output',
	'ui.image_resizer.output_placeholder': 'L’anteprima dell’immagine ridimensionata apparirà qui...',
	'ui.image_resizer.processing': 'Ridimensionamento...',
	'ui.image_resizer.copy_image': 'Copia immagine',
	'ui.image_resizer.download_image': 'Scarica immagine',
	'ui.image_resizer.clear': 'Pulisci',
	'ui.image_resizer.copy_empty': 'Nessuna immagine da copiare.',
	'ui.image_resizer.copy_success': 'Immagine copiata negli appunti.',
	'ui.image_resizer.copy_error': 'Copia non riuscita. Usa il download come alternativa.',
	'ui.image_resizer.download_empty': 'Nessuna immagine da scaricare.',
	'ui.image_resizer.download_success': 'Immagine ridimensionata scaricata.',
	'ui.image_resizer.download_error': 'Download non riuscito. Riprova.',
	'ui.image_resizer.clear_title': 'Vuoi cancellare input e output dell’immagine?',
	'ui.image_resizer.clear_description':
		'Questa azione rimuove il file caricato, opzioni e anteprima ridimensionata.',
	'ui.image_resizer.input_cleared': 'Input e output immagine cancellati.',
	'ui.image_resizer.stat.input_dimensions': 'Dimensioni input',
	'ui.image_resizer.stat.input_size': 'Dimensione input',
	'ui.image_resizer.stat.output_dimensions': 'Dimensioni output',
	'ui.image_resizer.stat.output_size': 'Dimensione output',
	'ui.image_resizer.stat.reduction': 'Riduzione',
	'ui.image_resizer.stat.reduction_helper': 'Riduzione dimensione file',
	'ui.image_resizer.placeholder_width': 'Larghezza',
	'ui.image_resizer.placeholder_height': 'Altezza',
	'ui.image_resizer.png': 'PNG',
	'ui.image_resizer.jpeg': 'JPEG',
	'ui.image_resizer.webp': 'WebP',
	'ui.image_resizer.source_status': '{name} · {size} · {width}×{height}px',
	'ui.image_resizer.output_status': '{format} · {size} · {width}×{height}px',

	'tool.image-svg-optimizer.display_name': 'Ottimizzatore SVG',
	'tool.image-svg-optimizer.tagline':
		'Ottimizza SVG con SVGO, anteprima live e privacy completa nel browser',
	'tool.image-svg-optimizer.description':
		'Ottimizza file SVG online con SVGO direttamente nel browser. Rimuovi metadati e commenti, semplifica i tracciati, comprimi i gruppi, ordina gli attributi, mantieni o rimuovi le dimensioni e scarica subito l’SVG ripulito.',
	'tool.image-svg-optimizer.primary_keyword': 'ottimizzatore svg',
	'tool.image-svg-optimizer.meta_title':
		'Ottimizzatore SVG — Ottimizza SVG con SVGO online | fmtly.dev',
	'tool.image-svg-optimizer.meta_description':
		'Ottimizza SVG online con SVGO. Rimuovi metadati, compatta gruppi, semplifica tracciati, ordina attributi e mantieni ogni file privato nel browser.',
	'tool.image-svg-optimizer.operation': 'Ottimizza SVG',
	'tool.image-svg-optimizer.faq.0.question': 'Il mio SVG viene caricato su un server?',
	'tool.image-svg-optimizer.faq.0.answer':
		'No. L’ottimizzazione avviene interamente nel browser con SVGO caricato dinamicamente. Il file resta sul tuo dispositivo.',
	'tool.image-svg-optimizer.faq.1.question': 'Quali ottimizzazioni posso controllare?',
	'tool.image-svg-optimizer.faq.1.answer':
		'Puoi gestire la rimozione di metadati, commenti e <desc>, pulizia degli ID, collasso dei gruppi, semplificazione dei tracciati, unione dei tracciati, ordinamento attributi, rimozione dimensioni, multipass e output formattato.',
	'tool.image-svg-optimizer.faq.2.question': 'Come verifico il risultato in modo sicuro?',
	'tool.image-svg-optimizer.faq.2.answer':
		'Lo strumento mostra anteprima sorgente e ottimizzata localmente come immagini del browser, così puoi confrontare il risultato visivo prima del download.',
	'tool.image-svg-optimizer.faq.3.question': 'Che succede con SVG molto grandi?',
	'tool.image-svg-optimizer.faq.3.answer':
		'Quando l’input SVG in UTF-8 supera 500KB, l’ottimizzazione viene eseguita in un Web Worker per mantenere l’editor reattivo.',
	'tool.image-svg-optimizer.use_case.0':
		'Ridurre icone SVG inline prima della pubblicazione nei bundle prodotto',
	'tool.image-svg-optimizer.use_case.1':
		'Ripulire SVG esportati da Figma, Illustrator o design system',
	'tool.image-svg-optimizer.use_case.2':
		'Uniformare asset SVG per CMS, email template e librerie di componenti',
	'tool.image-svg-optimizer.use_case.3':
		'Confrontare markup sorgente e ottimizzato prima di versionare asset vettoriali',
	'ui.svg_optimizer.paste': 'Incolla SVG',
	'ui.svg_optimizer.paste_empty': 'Gli appunti sono vuoti',
	'ui.svg_optimizer.paste_success': 'Markup SVG incollato',
	'ui.svg_optimizer.paste_error': 'Incolla da clipboard non riuscito',
	'ui.svg_optimizer.no_file': 'Nessun SVG selezionato',
	'ui.svg_optimizer.worker_active':
		'SVG grande rilevato (>{size}). L’ottimizzazione usa un Web Worker.',
	'ui.svg_optimizer.worker_used': 'Elaborato fuori dal thread principale',
	'ui.svg_optimizer.worker_failed':
		'L’ottimizzazione nel Worker è fallita. Uso del thread principale.',
	'ui.svg_optimizer.optimize_failed': 'Ottimizzazione SVG non riuscita',
	'ui.svg_optimizer.file_read_error': 'Impossibile caricare il file SVG',
	'ui.svg_optimizer.file_loaded': '{name} caricato',
	'ui.svg_optimizer.sample_loaded': 'SVG di esempio caricato',
	'ui.svg_optimizer.input_cleared': 'Input SVG cancellato',
	'ui.svg_optimizer.copy_empty': 'Niente da copiare',
	'ui.svg_optimizer.copy_success': 'SVG ottimizzato copiato',
	'ui.svg_optimizer.copy_error': 'Copia non riuscita',
	'ui.svg_optimizer.download_empty': 'Niente da scaricare',
	'ui.svg_optimizer.download_success': '{filename} scaricato',
	'ui.svg_optimizer.download_error': 'Download non riuscito',
	'ui.svg_optimizer.source_status': '{size} · {elements} elementi',
	'ui.svg_optimizer.output_status': '{size} · {elements} elementi',
	'ui.svg_optimizer.input_label': 'SVG sorgente',
	'ui.svg_optimizer.drop_title': 'Rilascia qui un file SVG',
	'ui.svg_optimizer.drop_hint': 'Oppure incolla il markup SVG, carica un file o usa l’esempio.',
	'ui.svg_optimizer.input_placeholder': 'Incolla qui il markup SVG...',
	'ui.svg_optimizer.option.remove_metadata': 'Rimuovi metadati',
	'ui.svg_optimizer.option.remove_comments': 'Rimuovi commenti',
	'ui.svg_optimizer.option.remove_desc': 'Rimuovi <desc>',
	'ui.svg_optimizer.option.cleanup_ids': 'Pulisci ID',
	'ui.svg_optimizer.option.collapse_groups': 'Comprimi gruppi',
	'ui.svg_optimizer.option.convert_path_data': 'Semplifica tracciati',
	'ui.svg_optimizer.option.merge_paths': 'Unisci tracciati',
	'ui.svg_optimizer.option.sort_attrs': 'Ordina attributi',
	'ui.svg_optimizer.option.remove_dimensions': 'Rimuovi larghezza/altezza',
	'ui.svg_optimizer.option.multipass': 'Esegui ottimizzazione multipass',
	'ui.svg_optimizer.option.pretty': 'Formatta output',
	'ui.svg_optimizer.float_precision': 'Precisione decimale',
	'ui.svg_optimizer.indent': 'Indentazione output formattato',
	'ui.svg_optimizer.privacy_note': 'L’ottimizzazione è locale; i file SVG non lasciano il browser.',
	'ui.svg_optimizer.performance_note': 'Gli input SVG grandi usano un Web Worker sopra {size}.',
	'ui.svg_optimizer.stat.original_size': 'Dimensione originale',
	'ui.svg_optimizer.stat.original_elements': 'Elementi sorgente',
	'ui.svg_optimizer.stat.optimized_size': 'Dimensione ottimizzata',
	'ui.svg_optimizer.stat.optimized_elements': 'Elementi ottimizzati',
	'ui.svg_optimizer.stat.size_delta': 'Variazione dimensione',
	'ui.svg_optimizer.stat.size_delta_helper': 'negativo = più piccolo',
	'ui.svg_optimizer.stat.duration': 'Durata',
	'ui.svg_optimizer.stat.runtime_helper': 'per ogni esecuzione',
	'ui.svg_optimizer.geometry_source': 'Geometria sorgente',
	'ui.svg_optimizer.geometry_output': 'Geometria ottimizzata',
	'ui.svg_optimizer.preview_mode': 'Anteprima',
	'ui.svg_optimizer.code_mode': 'Codice',
	'ui.svg_optimizer.processing': 'Ottimizzazione...',
	'ui.svg_optimizer.source_preview_label': 'Anteprima sorgente',
	'ui.svg_optimizer.source_preview_alt': 'Anteprima SVG sorgente',
	'ui.svg_optimizer.source_preview_placeholder': 'L’anteprima di un SVG valido apparirà qui.',
	'ui.svg_optimizer.output_preview_label': 'Anteprima ottimizzata',
	'ui.svg_optimizer.output_preview_alt': 'Anteprima SVG ottimizzato',
	'ui.svg_optimizer.output_placeholder': 'L’output SVG ottimizzato apparirà qui.',
	// ── Categoria Web e Rete ─────────────────────────────────────────────────
	'category.web.display_name': 'Web e Rete',
	'category.web.description':
		'Analizza, ispeziona e debug URL web, intestazioni e risorse di rete. Tutti gli strumenti funzionano nel tuo browser senza inviare dati a un server.',
	'category.web.primary_keyword': 'strumenti web',
	// ── Strumento Analizzatore URL ───────────────────────────────────────────
	'tool.web-url-parser.display_name': 'Analizzatore URL',
	'tool.web-url-parser.tagline':
		'Scomponi qualsiasi URL in protocollo, host, porta, percorso, parametri di query e frammento',
	'tool.web-url-parser.description':
		'Scomponi istantaneamente qualsiasi URL in tutti i suoi componenti — schema, credenziali, host, porta, percorso, parametri di query e frammento. Ogni campo è copiabile singolarmente. I risultati possono anche essere esportati come oggetto JSON pulito. Funziona interamente nel tuo browser; nessun dato viene trasmesso.',
	'tool.web-url-parser.primary_keyword': 'analizzatore url online',
	'tool.web-url-parser.meta_title': 'Analizzatore URL — Scomponi URL online | fmtly.dev',
	'tool.web-url-parser.meta_description':
		'Analizza istantaneamente qualsiasi URL in protocollo, host, porta, percorso, parametri di query e frammento nel tuo browser. Copia singoli campi o esporta tutto come JSON.',
	'tool.web-url-parser.operation': 'Analizza URL',
	'tool.web-url-parser.faq.0.question': 'I miei dati URL vengono inviati a un server?',
	'tool.web-url-parser.faq.0.answer':
		"No. L'analisi dell'URL viene eseguita interamente nel tuo browser tramite l'API URL integrata. Il tuo input non lascia mai il tuo dispositivo.",
	'tool.web-url-parser.faq.1.question': 'Quali schemi URL supporta il parser?',
	'tool.web-url-parser.faq.1.answer':
		"Qualsiasi schema accettato dall'API URL del browser, inclusi https, http, ftp, sftp, ws, wss, mailto, data e schemi personalizzati. Il badge Sicuro appare per https, wss, sftp e ftps.",
	'tool.web-url-parser.faq.2.question':
		'Come vengono gestite le chiavi dei parametri di query ripetute?',
	'tool.web-url-parser.faq.2.answer':
		"Ogni coppia chiave-valore viene elencata separatamente nella tabella con il proprio indice, preservando l'ordine originale e i duplicati esattamente come appaiono nell'URL.",
	'tool.web-url-parser.faq.3.question': 'Cosa produce «Copia tutto come JSON»?',
	'tool.web-url-parser.faq.3.answer':
		"Un oggetto JSON ben formattato contenente tutti i campi analizzati. I parametri di query sono rappresentati come oggetto chiave-valore. I campi assenti nell'URL sono impostati su null.",
	'tool.web-url-parser.use_case.0':
		'Debug degli endpoint API ispezionando ogni parametro di query e il suo valore decodificato',
	'tool.web-url-parser.use_case.1':
		'Verificare gli URI di reindirizzamento OAuth controllando i valori esatti di percorso, host e frammento',
	'tool.web-url-parser.use_case.2':
		'Estrarre singoli componenti URL da incollare nella documentazione o nel codice',
	'tool.web-url-parser.use_case.3':
		'Controllare rapidamente i moduli di accesso per le credenziali accidentalmente incorporate negli URL',
	// Stringhe interfaccia
	'ui.url_parser.input_placeholder': 'https://esempio.com/percorso?query=valore#frammento',
	'ui.url_parser.valid': 'URL valido',
	'ui.url_parser.invalid': 'URL non valido',
	'ui.url_parser.secure': 'Sicuro',
	'ui.url_parser.insecure': 'Non cifrato',
	'ui.url_parser.param_singular': 'parametro',
	'ui.url_parser.param_plural': 'parametri',
	'ui.url_parser.hint': 'Incolla un URL sopra per scomporre i suoi componenti',
	'ui.url_parser.section.full_url': 'URL completo',
	'ui.url_parser.section.authority': 'Autorità',
	'ui.url_parser.section.credentials': 'Credenziali',
	'ui.url_parser.section.path': 'Percorso',
	'ui.url_parser.section.query': 'Query',
	'ui.url_parser.section.fragment': 'Frammento',
	'ui.url_parser.field.href': 'href',
	'ui.url_parser.field.origin': 'origin',
	'ui.url_parser.field.protocol': 'protocollo',
	'ui.url_parser.field.host': 'host',
	'ui.url_parser.field.hostname': 'hostname',
	'ui.url_parser.field.port': 'porta',
	'ui.url_parser.field.username': 'nome utente',
	'ui.url_parser.field.password': 'password',
	'ui.url_parser.field.pathname': 'percorso',
	'ui.url_parser.field.search': 'ricerca',
	'ui.url_parser.field.hash': 'hash',
	'ui.url_parser.field.fragment': 'frammento',
	'ui.url_parser.param.key': 'Chiave',
	'ui.url_parser.param.value': 'Valore',
	'ui.url_parser.empty_value': '(vuoto)',
	'ui.url_parser.no_params': 'Nessun parametro di query',
	'ui.url_parser.no_fragment': 'Nessun frammento',
	'ui.url_parser.copy_as_json': 'Copia tutto come JSON',
	'ui.url_parser.toast.copied_json': 'Copiato come JSON',
	'ui.url_parser.parsed_in': 'Analizzato in {ms} ms',
	'ui.url_parser.error.invalid_url': 'URL non valido: {detail}'
};

export default registryIt;

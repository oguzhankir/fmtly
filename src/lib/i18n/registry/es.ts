const registryEs: Record<string, string> = {
	// ── Categories ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'Formatea, valida, minifica, compara y convierte datos JSON. Cada herramienta se ejecuta en tu navegador con detección de errores en tiempo real y visualización de árbol.',
	'category.json.primary_keyword': 'herramientas json',

	'category.xml.display_name': 'XML',
	'category.xml.description':
		'Formatea, valida y convierte documentos XML. Soporta pretty printing con sangría configurable y conversión a JSON o CSV.',
	'category.xml.primary_keyword': 'herramientas xml',

	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'Formatea, valida y convierte archivos YAML. Conversión bidireccional con JSON y validación de sintaxis con ubicación precisa de errores.',
	'category.yaml.primary_keyword': 'herramientas yaml',

	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'Analiza, formatea y convierte datos CSV. Convierte entre CSV, JSON y otros formatos tabulares con soporte para delimitadores personalizados.',
	'category.csv.primary_keyword': 'herramientas csv',

	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formatea, valida y convierte archivos TOML. Convierte TOML a JSON y YAML de forma segura.',
	'category.toml.primary_keyword': 'herramientas toml',
	'category.text.display_name': 'Texto',
	'category.text.description':
		'Analiza, cuenta y transforma texto plano. Mide palabras, caracteres, estructura y tiempo de lectura al instante.',
	'category.text.primary_keyword': 'herramientas de texto',
	'category.ai.display_name': 'IA',
	'category.ai.description':
		'Cuenta tokens de IA, estima costes de LLM, comprime prompts y crea prompts de sistema listos para producción para GPT-4o, Claude, Llama, Gemini y Mistral sin subir texto.',
	'category.ai.primary_keyword': 'herramientas de ia',

	'tool.ai-token-counter.display_name': 'Contador de Tokens LLM',
	'tool.ai-token-counter.tagline': 'Cuenta tokens y estima el coste de entrada en LLM líderes',
	'tool.ai-token-counter.description':
		'Pega prompts, documentos o transcripciones para contar tokens de GPT-4o con precisión y estimar uso de Claude, Llama 3, Gemini y Mistral con coste y tokens por palabra.',
	'tool.ai-token-counter.primary_keyword': 'contador de tokens llm',
	'tool.ai-token-counter.meta_title': 'Contador de Tokens LLM para GPT-4o y Claude — fmtly.dev',
	'tool.ai-token-counter.meta_description':
		'Cuenta tokens de GPT-4o y estima uso de Claude, Llama 3, Gemini y Mistral. Ve tokens por palabra y coste de entrada en tu navegador.',
	'tool.ai-token-counter.operation': 'Contar tokens',
	'tool.ai-token-counter.faq.0.question': '¿El conteo de tokens es exacto para todos los modelos?',
	'tool.ai-token-counter.faq.0.answer':
		'GPT-4o usa un tokenizer real cargado bajo demanda. Claude, Llama 3, Gemini y Mistral usan estimaciones calibradas en el navegador porque sus tokenizers exactos de producción no se publican para uso local idéntico.',
	'tool.ai-token-counter.faq.1.question': '¿Mi prompt sale del navegador?',
	'tool.ai-token-counter.faq.1.answer':
		'No. El texto se procesa localmente en tu navegador y las entradas grandes pasan a un Web Worker para mantener la interfaz fluida.',
	'tool.ai-token-counter.faq.2.question': '¿Cómo se estima el coste?',
	'tool.ai-token-counter.faq.2.answer':
		'El coste usa el perfil del modelo seleccionado y el precio por millón de tokens de entrada. Está pensado para planificación y comparación, no para conciliación de facturas.',
	'tool.ai-token-counter.faq.3.question': '¿Puedo comparar densidad de tokens entre modelos?',
	'tool.ai-token-counter.faq.3.answer':
		'Sí. La tabla muestra conteo de tokens, tokens por palabra y coste de entrada estimado para cada familia de modelos soportada.',
	'tool.ai-token-counter.use_case.0':
		'Estimar el tamaño de un prompt antes de llamar a una API LLM',
	'tool.ai-token-counter.use_case.1':
		'Comparar costes de tokens entre GPT-4o, Claude, Llama, Gemini y Mistral',
	'tool.ai-token-counter.use_case.2':
		'Comprobar si documentos largos caben en una ventana de contexto',
	'tool.ai-token-counter.use_case.3':
		'Medir densidad de tokens por palabra en prompts, datasets y transcripciones',

	'tool.ai-token-optimizer.display_name': 'Optimizador de Tokens de Prompt',
	'tool.ai-token-optimizer.tagline': 'Acorta prompts conservando intención y requisitos de salida',
	'tool.ai-token-optimizer.description':
		'Comprime prompts de IA eliminando relleno, normalizando espacios, simplificando Markdown y, opcionalmente, abreviando patrones comunes mientras mide el ahorro.',
	'tool.ai-token-optimizer.primary_keyword': 'optimizador de tokens de prompt',
	'tool.ai-token-optimizer.meta_title': 'Optimizador de Tokens — Acorta Prompts de IA | fmtly.dev',
	'tool.ai-token-optimizer.meta_description':
		'Acorta prompts de IA conservando el significado. Elimina relleno, comprime espacios, compara tokens antes/después y estima ahorro.',
	'tool.ai-token-optimizer.operation': 'Optimizar prompt',
	'tool.ai-token-optimizer.faq.0.question':
		'¿El optimizador reescribe mi prompt de forma creativa?',
	'tool.ai-token-optimizer.faq.0.answer':
		'No. Aplica reducciones conservadoras y transparentes, como quitar relleno, comprimir espacios y limpiar Markdown, para mantener intacta la intención.',
	'tool.ai-token-optimizer.faq.1.question': '¿Puedo controlar qué se optimiza?',
	'tool.ai-token-optimizer.faq.1.answer':
		'Sí. Puedes activar por separado eliminación de relleno, compresión de espacios, simplificación de Markdown y abreviaturas conocidas.',
	'tool.ai-token-optimizer.faq.2.question': '¿Cómo se calculan los tokens ahorrados?',
	'tool.ai-token-optimizer.faq.2.answer':
		'La herramienta cuenta el prompt original y el optimizado con el perfil seleccionado, y muestra tokens ahorrados, porcentaje y reducción estimada de coste.',
	'tool.ai-token-optimizer.faq.3.question': '¿Es seguro para prompts largos?',
	'tool.ai-token-optimizer.faq.3.answer':
		'Los prompts grandes de más de 500KB se procesan en un Web Worker, manteniendo la interfaz fluida y todo el texto local.',
	'tool.ai-token-optimizer.use_case.0': 'Reducir gasto de API en prompts de sistema repetidos',
	'tool.ai-token-optimizer.use_case.1':
		'Encajar prompts en ventanas de contexto más estrechas sin cambiar la intención',
	'tool.ai-token-optimizer.use_case.2':
		'Limpiar plantillas de prompt antes de compartirlas con el equipo',
	'tool.ai-token-optimizer.use_case.3':
		'Comparar presupuestos de tokens antes y después durante prompt engineering',

	'tool.ai-system-prompt-builder.display_name': 'Constructor de Prompts de Sistema',
	'tool.ai-system-prompt-builder.tagline':
		'Crea prompts de sistema listos para producción a partir de plantillas estructuradas',
	'tool.ai-system-prompt-builder.description':
		'Compón prompts de sistema de alta calidad para asistentes de código, analistas de datos, traductores y agentes de soporte con secciones estructuradas, límites de seguridad, controles de calidad y exportación JSON de OpenAI.',
	'tool.ai-system-prompt-builder.primary_keyword': 'constructor de prompts de sistema',
	'tool.ai-system-prompt-builder.meta_title':
		'Constructor de Prompts de Sistema para Asistentes IA — fmtly.dev',
	'tool.ai-system-prompt-builder.meta_description':
		'Crea prompts de sistema claros para asistentes IA en tu navegador. Usa plantillas, restricciones, ejemplos, reglas de seguridad, controles de calidad y exporta texto plano o JSON de OpenAI.',
	'tool.ai-system-prompt-builder.operation': 'Crear prompt',
	'tool.ai-system-prompt-builder.faq.0.question': '¿Qué es un prompt de sistema?',
	'tool.ai-system-prompt-builder.faq.0.answer':
		'Un prompt de sistema define el rol, objetivo, contexto operativo, límites y reglas de salida del asistente antes de procesar el mensaje del usuario.',
	'tool.ai-system-prompt-builder.faq.1.question': '¿Esta herramienta llama a un modelo de IA?',
	'tool.ai-system-prompt-builder.faq.1.answer':
		'No. Ensambla el prompt de forma determinista en el navegador. No se sube nada y ningún modelo recibe tu texto.',
	'tool.ai-system-prompt-builder.faq.2.question': '¿Puedo exportar mensajes de chat de OpenAI?',
	'tool.ai-system-prompt-builder.faq.2.answer':
		'Sí. Cambia el formato de salida a mensajes JSON de OpenAI para exportar un arreglo con rol system que puedes pegar en código de API o pruebas de prompts.',
	'tool.ai-system-prompt-builder.faq.3.question':
		'¿Es seguro para bloques de contexto muy grandes?',
	'tool.ai-system-prompt-builder.faq.3.answer':
		'Las entradas grandes del constructor por encima de 500KB se ejecutan en un Web Worker para mantener la interfaz fluida mientras todo sigue siendo local.',
	'tool.ai-system-prompt-builder.use_case.0':
		'Crear prompts de sistema reutilizables para funciones de productos IA',
	'tool.ai-system-prompt-builder.use_case.1':
		'Estandarizar el comportamiento de asistentes de código, analistas, traductores y agentes de soporte',
	'tool.ai-system-prompt-builder.use_case.2':
		'Exportar prompts de sistema como texto plano o mensajes JSON compatibles con OpenAI',
	'tool.ai-system-prompt-builder.use_case.3':
		'Añadir límites de seguridad, guía de razonamiento, ejemplos y controles de calidad a los prompts',

	'tool.json-formatter.display_name': 'Formateador JSON',
	'tool.json-formatter.tagline': 'Formatea y embellece JSON con indentación configurable',
	'tool.json-formatter.description':
		'Analiza y visualiza JSON con indentación configurable: 2 espacios, 4 espacios o tabulaciones. Análisis en tiempo real con ubicaciones de error precisas y vista de árbol opcional.',
	'tool.json-formatter.primary_keyword': 'formateador json',
	'tool.json-formatter.meta_title': 'Formateador y Embellecedor JSON — fmtly.dev',
	'tool.json-formatter.meta_description':
		'Formatea y embellece JSON instantáneamente en tu navegador. Indentación configurable, detección de errores en tiempo real y vista de árbol. No hay datos que dejen tu dispositivo.',
	'tool.json-formatter.operation': 'Formatea',

	'tool.json-validator.display_name': 'Validador JSON',
	'tool.json-validator.tagline': 'Valida sintaxis y estructura JSON',
	'tool.json-validator.description':
		'Comprueba la sintaxis JSON en tiempo real. Identifica instantáneamente corchetes faltantes, strings sin terminar y claves duplicadas. Soporta comentarios JSON5 y comas finales.',
	'tool.json-validator.primary_keyword': 'validador json',
	'tool.json-validator.meta_title': 'Validador JSON — fmtly.dev',
	'tool.json-validator.meta_description':
		'Valida JSON en tu navegador instantáneamente. Detecta errores de sintaxis con números de línea y columna precisos. No hay datos que dejen tu dispositivo.',
	'tool.json-validator.operation': 'Valida',

	'tool.json-minifier.display_name': 'Minificador JSON',
	'tool.json-minifier.tagline': 'Elimina espacios en blanco y comprime JSON al tamaño mínimo',
	'tool.json-minifier.description':
		'Elimina todos los espacios en blanco del JSON para producir la salida más pequeña posible. Valida el JSON primero, luego elimina indentación, saltos de línea y espacios.',
	'tool.json-minifier.primary_keyword': 'minificador json',
	'tool.json-minifier.meta_title': 'Minificador JSON — fmtly.dev',
	'tool.json-minifier.meta_description':
		'Minifica JSON en tu navegador instantáneamente. Elimina todos los espacios en blanco y produce salida compacta. No hay datos que dejen tu dispositivo.',
	'tool.json-minifier.operation': 'Minifica',

	'tool.json-to-yaml.display_name': 'JSON a YAML',
	'tool.json-to-yaml.tagline': 'Convierte datos JSON a formato YAML',
	'tool.json-to-yaml.description':
		'Convierte JSON a YAML con indentación y formato adecuados. Maneja objetos anidados, arrays y todos los tipos de datos JSON.',
	'tool.json-to-yaml.primary_keyword': 'json a yaml',
	'tool.json-to-yaml.meta_title': 'Convertidor JSON a YAML — fmtly.dev',
	'tool.json-to-yaml.meta_description':
		'Convierte JSON a YAML instantáneamente en tu navegador. Maneja estructuras anidadas y todos los tipos de datos. No hay datos cargados.',
	'tool.json-to-yaml.operation': 'Convierte',

	'tool.json-to-toml.display_name': 'JSON a TOML',
	'tool.json-to-toml.tagline': 'Convierte datos JSON a formato de configuración TOML',
	'tool.json-to-toml.description':
		'Convierte JSON a formato TOML, ideal para archivos de configuración. Soporta tablas anidadas y arrays inline.',
	'tool.json-to-toml.primary_keyword': 'json a toml',
	'tool.json-to-toml.meta_title': 'Convertidor JSON a TOML — fmtly.dev',
	'tool.json-to-toml.meta_description':
		'Convierte JSON a TOML instantáneamente en tu navegador. Maneja estructuras anidadas y arrays. No hay datos cargados.',
	'tool.json-to-toml.operation': 'Convierte',

	'tool.json-to-markdown.display_name': 'JSON a Tabla Markdown',
	'tool.json-to-markdown.tagline': 'Convierte arrays JSON a tablas Markdown',
	'tool.json-to-markdown.description':
		'Convierte arrays JSON de objetos a tablas Markdown formateadas. Detecta automáticamente encabezados de columnas desde las claves de objetos.',
	'tool.json-to-markdown.primary_keyword': 'json a tabla markdown',
	'tool.json-to-markdown.meta_title': 'Convertidor JSON a Tabla Markdown — fmtly.dev',
	'tool.json-to-markdown.meta_description':
		'Convierte arrays JSON a tablas Markdown instantáneamente. Detecta encabezados automáticamente y formatea datos. No hay datos que dejen tu dispositivo.',
	'tool.json-to-markdown.operation': 'Convierte',

	'tool.json-to-xml.display_name': 'JSON a XML',
	'tool.json-to-xml.tagline': 'Convierte datos JSON a formato XML',
	'tool.json-to-xml.description':
		'Convierte objetos y arrays JSON a XML bien formado. Maneja estructuras anidadas y nombres de elemento raíz configurables.',
	'tool.json-to-xml.primary_keyword': 'json a xml',
	'tool.json-to-xml.meta_title': 'Convertidor JSON a XML — fmtly.dev',
	'tool.json-to-xml.meta_description':
		'Convierte JSON a XML instantáneamente en tu navegador. Produce XML bien formado. No hay datos cargados.',
	'tool.json-to-xml.operation': 'Convierte',

	'tool.json-to-csv.display_name': 'JSON a CSV',
	'tool.json-to-csv.tagline': 'Convierte arrays JSON a formato CSV',
	'tool.json-to-csv.description':
		'Convierte arrays JSON de objetos a formato CSV. Extrae automáticamente encabezados de columnas desde las claves de objetos.',
	'tool.json-to-csv.primary_keyword': 'json a csv',
	'tool.json-to-csv.meta_title': 'Convertidor JSON a CSV — fmtly.dev',
	'tool.json-to-csv.meta_description':
		'Convierte arrays JSON a CSV instantáneamente en tu navegador. Detecta encabezados automáticamente. No hay datos cargados.',
	'tool.json-to-csv.operation': 'Convierte',

	'tool.json-jsonpath.display_name': 'Consulta JSONPath',
	'tool.json-jsonpath.tagline': 'Consulta datos JSON con expresiones JSONPath',
	'tool.json-jsonpath.description':
		'Ejecuta expresiones JSONPath en datos JSON para extraer valores específicos. Soporta filtros, comodines, descenso recursivo y todos los operadores estándar de JSONPath.',
	'tool.json-jsonpath.primary_keyword': 'consulta jsonpath',
	'tool.json-jsonpath.meta_title': 'Herramienta de Consulta JSONPath — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'Consulta datos JSON con expresiones JSONPath en tu navegador. Soporta todos los operadores. No hay datos cargados.',
	'tool.json-jsonpath.operation': 'Consulta',

	'tool.json-jmespath.display_name': 'Consulta JMESPath',
	'tool.json-jmespath.tagline': 'Consulta y transforma JSON con expresiones JMESPath',
	'tool.json-jmespath.description':
		'Ejecuta expresiones JMESPath en datos JSON para consultarlos y transformarlos. Soporta proyecciones, filtros, multisselección y todas las funciones JMESPath.',
	'tool.json-jmespath.primary_keyword': 'consulta jmespath',
	'tool.json-jmespath.meta_title': 'Herramienta de Consulta JMESPath — fmtly.dev',
	'tool.json-jmespath.meta_description':
		'Consulta y transforma JSON con JMESPath en tu navegador. Soporta todos los operadores y funciones. No hay datos cargados.',
	'tool.json-jmespath.operation': 'Consulta',

	// ── Herramientas XML ────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'Formateador XML',
	'tool.xml-formatter.tagline': 'Embellece e indenta XML con espaciado configurable',
	'tool.xml-formatter.description':
		'Formatea e indenta documentos XML con 2 espacios, 4 espacios o tabulaciones. Valida estructura XML y resalta errores con números de línea precisos.',
	'tool.xml-formatter.primary_keyword': 'formateador xml',
	'tool.xml-formatter.meta_title': 'Formateador y Embellecedor XML — fmtly.dev',
	'tool.xml-formatter.meta_description':
		'Formatea y embellece XML en tu navegador. Indentación configurable y validación en tiempo real. No hay datos que dejen tu dispositivo.',
	'tool.xml-formatter.operation': 'Formatea',

	'tool.xml-validator.display_name': 'Validador XML',
	'tool.xml-validator.tagline': 'Valida sintaxis y buena formación de XML',
	'tool.xml-validator.description':
		'Valida XML contra reglas de buena formación. Identifica tags sin cerrar, atributos malformados y caracteres inválidos con ubicaciones de error precisas.',
	'tool.xml-validator.primary_keyword': 'validador xml',
	'tool.xml-validator.meta_title': 'Validador XML — fmtly.dev',
	'tool.xml-validator.meta_description':
		'Valida XML en tu navegador. Detecta errores de sintaxis con números de línea y columna. No hay datos que dejen tu dispositivo.',
	'tool.xml-validator.operation': 'Valida',

	'tool.xml-to-json.display_name': 'XML a JSON',
	'tool.xml-to-json.tagline': 'Convierte documentos XML a formato JSON',
	'tool.xml-to-json.description':
		'Convierte XML a JSON con mapeo automático de atributos y elementos. Maneja espacios de nombres, secciones CDATA y estructuras XML anidadas.',
	'tool.xml-to-json.primary_keyword': 'xml a json',
	'tool.xml-to-json.meta_title': 'Convertidor XML a JSON — fmtly.dev',
	'tool.xml-to-json.meta_description':
		'Convierte XML a JSON instantáneamente en tu navegador. Maneja atributos y estructuras anidadas. No hay datos cargados.',
	'tool.xml-to-json.operation': 'Convierte',
	'tool.xml-to-json-schema.display_name': 'XML a JSON Schema',
	'tool.xml-to-json-schema.tagline': 'Inferir JSON Schema desde la estructura XML',
	'tool.xml-to-json-schema.description':
		'Genera un JSON Schema Draft 2020-12 a partir de XML analizando estructura de elementos, atributos y cardinalidad. Los elementos repetidos se infieren como arrays y los campos compartidos como required.',
	'tool.xml-to-json-schema.primary_keyword': 'xml a json schema',
	'tool.xml-to-json-schema.meta_title': 'Generador XML a JSON Schema — fmtly.dev',
	'tool.xml-to-json-schema.meta_description':
		'Infiere JSON Schema desde XML en tu navegador. Detecta estructuras anidadas, elementos repetidos y campos obligatorios automáticamente.',
	'tool.xml-to-json-schema.operation': 'Generar Esquema',
	'tool.xml-to-json-schema.faq.0.question': '¿Cómo se infiere la cardinalidad desde XML?',
	'tool.xml-to-json-schema.faq.0.answer':
		'Cuando elementos hermanos con el mismo nombre se repiten bajo el mismo padre, se infieren como arrays. Las ocurrencias únicas se tratan como campos escalares u objeto.',
	'tool.xml-to-json-schema.faq.1.question': '¿Cómo se representan los atributos XML en el esquema?',
	'tool.xml-to-json-schema.faq.1.answer':
		'Los atributos se incluyen como propiedades normales usando el formato de clave parseada (por ejemplo, @_id), para validarlos junto con los elementos hijos.',
	'tool.xml-to-json-schema.faq.2.question': '¿Qué versión de JSON Schema genera?',
	'tool.xml-to-json-schema.faq.2.answer':
		'La salida usa JSON Schema Draft 2020-12 e incluye palabras clave estándar como $schema, type, properties, required e items.',
	'tool.xml-to-json-schema.use_case.0':
		'Crear esquemas de validación iniciales desde payloads XML existentes',
	'tool.xml-to-json-schema.use_case.1':
		'Documentar estructuras complejas de feeds XML para consumidores aguas abajo',
	'tool.xml-to-json-schema.use_case.2':
		'Generar un esquema base antes de ajustar restricciones manualmente',
	'tool.xml-to-json-schema.use_case.3':
		'Llevar integraciones XML a flujos de validación centrados en JSON',

	'tool.xml-to-yaml.display_name': 'XML a YAML',
	'tool.xml-to-yaml.tagline': 'Convierte documentos XML a formato YAML',
	'tool.xml-to-yaml.description':
		'Convierte XML a formato YAML con indentación adecuada. Maneja atributos, contenido de texto y elementos XML anidados.',
	'tool.xml-to-yaml.primary_keyword': 'xml a yaml',
	'tool.xml-to-yaml.meta_title': 'Convertidor XML a YAML — fmtly.dev',
	'tool.xml-to-yaml.meta_description':
		'Convierte XML a YAML instantáneamente en tu navegador. Maneja atributos y elementos anidados. No hay datos cargados.',
	'tool.xml-to-yaml.operation': 'Convierte',

	'tool.xml-to-csv.display_name': 'XML a CSV',
	'tool.xml-to-csv.tagline': 'Convierte registros XML a formato CSV',
	'tool.xml-to-csv.description':
		'Extrae elementos XML repetidos en filas CSV. Detecta automáticamente encabezados de columnas desde nombres de elementos y atributos.',
	'tool.xml-to-csv.primary_keyword': 'xml a csv',
	'tool.xml-to-csv.meta_title': 'Convertidor XML a CSV — fmtly.dev',
	'tool.xml-to-csv.meta_description':
		'Convierte XML a CSV instantáneamente en tu navegador. Detecta automáticamente encabezados desde nombres de elementos. No hay datos cargados.',
	'tool.xml-to-csv.operation': 'Convierte',

	'tool.xml-minifier.display_name': 'Minificador XML',
	'tool.xml-minifier.tagline': 'Elimina espacios en blanco y comprime XML',
	'tool.xml-minifier.description':
		'Elimina todos los espacios en blanco y comentarios del XML para producir salida compacta. Valida XML primero, luego minifica para reducir tamaño de archivo.',
	'tool.xml-minifier.primary_keyword': 'minificador xml',
	'tool.xml-minifier.meta_title': 'Minificador XML — fmtly.dev',
	'tool.xml-minifier.meta_description':
		'Minifica XML en tu navegador instantáneamente. Elimina espacios en blanco y comentarios. No hay datos que dejen tu dispositivo.',
	'tool.xml-minifier.operation': 'Minifica',

	'tool.xml-xpath.display_name': 'Consulta XPath',
	'tool.xml-xpath.tagline': 'Consulta datos XML con expresiones XPath',
	'tool.xml-xpath.description':
		'Ejecuta expresiones XPath 1.0 contra documentos XML. Soporta selección de elementos, filtrado de atributos y todos los ejes estándar de XPath y funciones.',
	'tool.xml-xpath.primary_keyword': 'consulta xpath',
	'tool.xml-xpath.meta_title': 'Herramienta de Consulta XPath — fmtly.dev',
	'tool.xml-xpath.meta_description':
		'Consulta XML con expresiones XPath en tu navegador. Soporta todos los operadores XPath 1.0. No hay datos cargados.',
	'tool.xml-xpath.operation': 'Consulta',

	'tool.xml-diff.display_name': 'Diff XML',
	'tool.xml-diff.tagline': 'Comparar documentos XML y visualizar diferencias',
	'tool.xml-diff.description':
		'Comparar dos documentos XML lado a lado y resaltar diferencias. Muestra elementos agregados, eliminados y modificados con números de línea precisos y visualización de diff aware de XML.',
	'tool.xml-diff.primary_keyword': 'diff xml',
	'tool.xml-diff.meta_title': 'Herramienta Diff XML — fmtly.dev',
	'tool.xml-diff.meta_description':
		'Comparar archivos XML y visualizar diferencias en tu navegador. Muestra cambios a nivel de elemento con números de línea. No hay datos cargados.',
	'tool.xml-diff.operation': 'Diff',
	'tool.xml-diff.faq.0.question': '¿En qué se diferencia XML Diff de un diff de texto?',
	'tool.xml-diff.faq.0.answer':
		'XML Diff valida ambas entradas como XML y luego las compara línea por línea con una normalización de espacios adaptada a XML. Por eso encaja mejor con documentos XML que una comparación de texto simple.',
	'tool.xml-diff.faq.1.question': '¿Puedo comparar XML inválido?',
	'tool.xml-diff.faq.1.answer':
		'No. Ambos lados deben ser XML válido antes de comparar. Si una entrada está mal formada, la herramienta indica qué lado debes corregir.',
	'tool.xml-diff.faq.2.question': '¿Qué tipos de cambios resalta?',
	'tool.xml-diff.faq.2.answer':
		'La herramienta resalta líneas XML agregadas, eliminadas y modificadas. Esto la hace útil para cambios de configuración, revisiones de feeds y revisiones de marcado.',
	'tool.xml-diff.use_case.0': 'Revisar cambios entre dos cargas XML de API',
	'tool.xml-diff.use_case.1': 'Comparar revisiones de XML de sitemap, feed o configuración',
	'tool.xml-diff.use_case.2': 'Inspeccionar cambios de marcado antes del despliegue',
	'tool.xml-diff.use_case.3': 'Verificar una salida XML generada contra una versión esperada',

	// ── Herramientas YAML ───────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'Formateador YAML',
	'tool.yaml-formatter.tagline': 'Formatea y embellece YAML con indentación consistente',
	'tool.yaml-formatter.description':
		'Formatea archivos YAML con indentación consistente de 2 espacios. Valida sintaxis YAML y normaliza comillas, anclajes y ordenamiento de claves.',
	'tool.yaml-formatter.primary_keyword': 'formateador yaml',
	'tool.yaml-formatter.meta_title': 'Formateador y Embellecedor YAML — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		'Formatea y embellece YAML en tu navegador. Valida sintaxis y normaliza indentación. No hay datos que dejen tu dispositivo.',
	'tool.yaml-formatter.operation': 'Formatea',
	'tool.yaml-formatter.faq.0.question': '¿Qué normaliza el formateador YAML?',
	'tool.yaml-formatter.faq.0.answer':
		'Reordena la indentación, los espacios, el estilo de comillas y el diseño general para que el YAML sea más legible sin cambiar el significado de los datos.',
	'tool.yaml-formatter.faq.1.question': '¿Formatear cambia mis datos YAML?',
	'tool.yaml-formatter.faq.1.answer':
		'No. Mejora la presentación, no la estructura de datos. El objetivo es obtener una salida más limpia y consistente.',
	'tool.yaml-formatter.use_case.0': 'Embellecer manifiestos de Kubernetes antes de revisarlos',
	'tool.yaml-formatter.use_case.1': 'Normalizar configuraciones de CI para diffs más limpios',
	'tool.yaml-formatter.use_case.2': 'Reformatear archivos values de Helm antes de hacer commit',
	'tool.yaml-formatter.use_case.3': 'Hacer configuraciones YAML grandes más fáciles de leer',

	'tool.yaml-minifier.display_name': 'Minificador YAML',
	'tool.yaml-minifier.tagline': 'Minimiza YAML en una salida compacta y válida',
	'tool.yaml-minifier.description':
		'Minimiza documentos YAML a una representación compacta en estilo flow. Soporta YAML multi-documento y conserva la misma estructura de datos reduciendo el ruido visual.',
	'tool.yaml-minifier.primary_keyword': 'minificador yaml',
	'tool.yaml-minifier.meta_title': 'Minificador YAML — fmtly.dev',
	'tool.yaml-minifier.meta_description':
		'Minimiza YAML en tu navegador. Soporta YAML multi-documento y salida compacta. No hay datos que dejen tu dispositivo.',
	'tool.yaml-minifier.operation': 'Minimiza',
	'tool.yaml-minifier.faq.0.question': '¿Cómo funciona la minimización de YAML?',
	'tool.yaml-minifier.faq.0.answer':
		'Primero analiza el YAML y luego lo reescribe como un YAML válido más compacto. Así elimina ruido de formato sin cambiar los datos.',
	'tool.yaml-minifier.faq.1.question': '¿Soporta varios documentos YAML?',
	'tool.yaml-minifier.faq.1.answer':
		'Sí. Las entradas multi-documento separadas por marcadores de documento se conservan y se minimizan documento por documento.',
	'tool.yaml-minifier.use_case.0': 'Reducir YAML antes de compartir fragmentos en tickets o chat',
	'tool.yaml-minifier.use_case.1': 'Inspeccionar manifiestos compactos multi-documento',
	'tool.yaml-minifier.use_case.2': 'Reducir espacios antes de guardar fixtures YAML generados',
	'tool.yaml-minifier.use_case.3': 'Comparar lado a lado YAML bonito y YAML compacto',

	'tool.yaml-validator.display_name': 'Validador YAML',
	'tool.yaml-validator.tagline': 'Valida sintaxis y esquema de YAML',
	'tool.yaml-validator.description':
		'Valida la sintaxis de YAML en tiempo real y comprueba documentos contra un esquema. Detecta problemas de indentación, estructuras mal formadas e incompatibilidades de esquema con referencia de línea.',
	'tool.yaml-validator.primary_keyword': 'validador yaml',
	'tool.yaml-validator.meta_title': 'Validador YAML — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Valida sintaxis y esquema de YAML en tu navegador. Detecta errores del parser e incompatibilidades de esquema con números de línea. No sale ningún dato de tu dispositivo.',
	'tool.yaml-validator.operation': 'Valida',
	'tool.yaml-validator.faq.0.question': '¿Qué errores YAML puede detectar?',
	'tool.yaml-validator.faq.0.answer':
		'Detecta indentación incorrecta, mapeos inválidos, secuencias mal colocadas y otros errores del parser. En modo esquema también informa rutas y valores que no cumplen el esquema.',
	'tool.yaml-validator.faq.1.question': '¿Puedo validar YAML contra un esquema?',
	'tool.yaml-validator.faq.1.answer':
		'Sí. Cambia al modo Esquema y proporciona un JSON Schema. La entrada del esquema puede escribirse en JSON o en YAML, lo que resulta útil para manifests, archivos de configuración y payloads de API.',
	'tool.yaml-validator.use_case.0': 'Revisar manifiestos de despliegue antes de publicarlos',
	'tool.yaml-validator.use_case.1': 'Validar YAML copiado desde documentación',
	'tool.yaml-validator.use_case.2':
		'Detectar errores de indentación en configs de CI y automatización',
	'tool.yaml-validator.use_case.3': 'Validar Helm values o manifests contra un esquema esperado',

	'tool.yaml-to-json.display_name': 'YAML a JSON',
	'tool.yaml-to-json.tagline': 'Convierte YAML a formato JSON',
	'tool.yaml-to-json.description':
		'Convierte documentos YAML a JSON formateado. Maneja anclajes, alias, YAML multi-documento y todos los tipos de datos YAML.',
	'tool.yaml-to-json.primary_keyword': 'yaml a json',
	'tool.yaml-to-json.meta_title': 'Convertidor YAML a JSON — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		'Convierte YAML a JSON instantáneamente en tu navegador. Maneja anclajes, alias y YAML multi-documento. No hay datos cargados.',
	'tool.yaml-to-json.operation': 'Convierte',
	'tool.yaml-to-json.faq.0.question': '¿Cuándo conviene convertir YAML a JSON?',
	'tool.yaml-to-json.faq.0.answer':
		'Conviene cuando APIs, herramientas JavaScript, pruebas o sistemas posteriores esperan JSON como formato más estricto.',
	'tool.yaml-to-json.faq.1.question': '¿Se conservan objetos y arrays anidados?',
	'tool.yaml-to-json.faq.1.answer':
		'Sí. Los mapas y secuencias anidadas se convierten a sus equivalentes JSON manteniendo la estructura general.',
	'tool.yaml-to-json.use_case.0': 'Convertir configuraciones YAML en JSON para payloads de API',
	'tool.yaml-to-json.use_case.1': 'Inspeccionar datos YAML en un formato más estricto',
	'tool.yaml-to-json.use_case.2': 'Llevar datos de configuración a flujos JavaScript',
	'tool.yaml-to-json.use_case.3': 'Preparar YAML para herramientas basadas en JSON',

	'tool.yaml-to-xml.display_name': 'YAML a XML',
	'tool.yaml-to-xml.tagline': 'Convierte YAML a formato XML',
	'tool.yaml-to-xml.description':
		'Convierte documentos YAML a XML bien formado. Mapea claves YAML a elementos XML y maneja estructuras anidadas y arrays.',
	'tool.yaml-to-xml.primary_keyword': 'yaml a xml',
	'tool.yaml-to-xml.meta_title': 'Convertidor YAML a XML — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		'Convierte YAML a XML instantáneamente en tu navegador. No hay datos cargados.',
	'tool.yaml-to-xml.operation': 'Convierte',
	'tool.yaml-to-xml.faq.0.question': '¿Cómo se mapea YAML a XML durante la conversión?',
	'tool.yaml-to-xml.faq.0.answer':
		'Las claves se convierten en nombres de elementos, los objetos anidados en elementos anidados y los arrays en entradas repetidas.',
	'tool.yaml-to-xml.faq.1.question': '¿Puedo usar la salida en otras herramientas XML?',
	'tool.yaml-to-xml.faq.1.answer':
		'Sí. La salida se genera como XML bien formado, lista para formateo o validación adicional.',
	'tool.yaml-to-xml.use_case.0': 'Llevar datos YAML a integraciones basadas en XML',
	'tool.yaml-to-xml.use_case.1': 'Generar fixtures XML desde datos de prueba YAML',
	'tool.yaml-to-xml.use_case.2': 'Conectar flujos de autoría YAML con pipelines XML',
	'tool.yaml-to-xml.use_case.3': 'Preparar contenido YAML estructurado para exportarlo como XML',

	'tool.yaml-to-csv.display_name': 'YAML a CSV',
	'tool.yaml-to-csv.tagline': 'Convierte arrays YAML a formato CSV',
	'tool.yaml-to-csv.description':
		'Convierte arrays YAML de objetos a formato CSV. Extrae encabezados desde las claves de objetos y formatea datos en filas.',
	'tool.yaml-to-csv.primary_keyword': 'yaml a csv',
	'tool.yaml-to-csv.meta_title': 'Convertidor YAML a CSV — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		'Convierte YAML a CSV instantáneamente en tu navegador. No hay datos cargados.',
	'tool.yaml-to-csv.operation': 'Convierte',
	'tool.yaml-to-csv.faq.0.question': '¿Qué estructuras YAML se convierten mejor a CSV?',
	'tool.yaml-to-csv.faq.0.answer':
		'Los arrays de objetos dan el mejor resultado. Cada objeto se convierte en una fila y las claves comunes en columnas CSV.',
	'tool.yaml-to-csv.faq.1.question': '¿Puede convertirse un único objeto YAML a CSV?',
	'tool.yaml-to-csv.faq.1.answer':
		'Sí. Un solo objeto puede exportarse como una única fila CSV, útil para registros simples.',
	'tool.yaml-to-csv.use_case.0': 'Exportar registros YAML a hojas de cálculo',
	'tool.yaml-to-csv.use_case.1': 'Convertir datasets YAML estructurados para analistas',
	'tool.yaml-to-csv.use_case.2': 'Aplanar listas de inventario o configuración en tablas',
	'tool.yaml-to-csv.use_case.3': 'Preparar YAML para herramientas de importación que esperan CSV',

	'tool.yaml-to-toml.display_name': 'YAML a TOML',
	'tool.yaml-to-toml.tagline': 'Convierte YAML a formato de configuración TOML',
	'tool.yaml-to-toml.description':
		'Convierte archivos de configuración YAML a formato TOML. Maneja tablas anidadas, arrays y todos los tipos de datos YAML.',
	'tool.yaml-to-toml.primary_keyword': 'yaml a toml',
	'tool.yaml-to-toml.meta_title': 'Convertidor YAML a TOML — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		'Convierte YAML a TOML instantáneamente en tu navegador. No hay datos cargados.',
	'tool.yaml-to-toml.operation': 'Convierte',
	'tool.yaml-to-toml.faq.0.question': '¿Por qué convertir YAML a TOML?',
	'tool.yaml-to-toml.faq.0.answer':
		'TOML suele preferirse en archivos de configuración editados por personas. Si un proyecto espera TOML, la conversión ahorra tiempo.',
	'tool.yaml-to-toml.faq.1.question': '¿Se conservan las secciones de configuración anidadas?',
	'tool.yaml-to-toml.faq.1.answer':
		'Sí. Los mapas anidados se convierten en tablas y arrays TOML siempre que el formato lo permita.',
	'tool.yaml-to-toml.use_case.0': 'Mover ajustes YAML a proyectos basados en TOML',
	'tool.yaml-to-toml.use_case.1': 'Generar configuraciones TOML desde fuentes YAML',
	'tool.yaml-to-toml.use_case.2':
		'Portar ajustes de despliegue a herramientas compatibles con TOML',
	'tool.yaml-to-toml.use_case.3': 'Comparar la misma configuración en YAML y TOML',

	'tool.yaml-diff.display_name': 'Diff YAML',
	'tool.yaml-diff.tagline': 'Compara dos documentos YAML lado a lado',
	'tool.yaml-diff.description':
		'Compara dos documentos YAML y resalta adiciones, eliminaciones y modificaciones. Entiende la estructura YAML para comparación semántica.',
	'tool.yaml-diff.primary_keyword': 'diff yaml',
	'tool.yaml-diff.meta_title': 'Herramienta de Diff YAML — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'Compara dos documentos YAML en tu navegador. Resalta todas las adiciones, eliminaciones y cambios. No hay datos cargados.',
	'tool.yaml-diff.operation': 'Compara',
	'tool.yaml-diff.faq.0.question': '¿En qué se diferencia YAML Diff de un diff de texto normal?',
	'tool.yaml-diff.faq.0.answer':
		'Primero analiza ambas entradas como datos YAML y luego compara la estructura resultante. Así detecta cambios por claves, arrays y valores, no solo por formato.',
	'tool.yaml-diff.faq.1.question': '¿Puedo comparar YAML inválido?',
	'tool.yaml-diff.faq.1.answer':
		'No. Ambos lados deben ser YAML válido. Antes hay que corregir la entrada que esté rota.',
	'tool.yaml-diff.faq.2.question': '¿Qué cambios resalta?',
	'tool.yaml-diff.faq.2.answer':
		'Resalta rutas y valores YAML añadidos, eliminados y modificados, lo que facilita revisar revisiones de configuración.',
	'tool.yaml-diff.use_case.0': 'Revisar cambios entre dos manifiestos de despliegue',
	'tool.yaml-diff.use_case.1': 'Comparar revisiones de configuración de CI',
	'tool.yaml-diff.use_case.2': 'Inspeccionar archivos Helm/values editados antes del commit',
	'tool.yaml-diff.use_case.3': 'Verificar YAML generado contra una versión esperada',
	'tool.yaml-query.display_name': 'Consulta YAML',
	'tool.yaml-query.tagline': 'Consulta YAML con JSONPath y JMESPath',
	'tool.yaml-query.description':
		'Ejecuta expresiones JSONPath o JMESPath directamente sobre YAML en tu navegador. Analiza YAML, consulta datos anidados e inspecciona resultados sin convertir archivos manualmente.',
	'tool.yaml-query.primary_keyword': 'consulta yaml',
	'tool.yaml-query.meta_title': 'Herramienta de Consulta YAML — fmtly.dev',
	'tool.yaml-query.meta_description':
		'Consulta YAML con JSONPath o JMESPath en tu navegador. Sin conversión manual y sin subir datos.',
	'tool.yaml-query.operation': 'Consultar',
	'tool.yaml-query.faq.0.question': '¿Qué lenguajes de consulta admite?',
	'tool.yaml-query.faq.0.answer':
		'Puedes alternar entre JSONPath y JMESPath. Ambos se ejecutan sobre el modelo de datos YAML ya analizado, por lo que mapas anidados, secuencias y entradas multi-documento pueden consultarse directamente.',
	'tool.yaml-query.faq.1.question': '¿Necesito convertir YAML a JSON antes?',
	'tool.yaml-query.faq.1.answer':
		'No. La herramienta analiza el YAML por ti y devuelve resultados en JSON formateado. Resulta útil para configuraciones, manifiestos, archivos values y otros flujos centrados en YAML.',
	'tool.yaml-query.use_case.0': 'Extraer campos concretos de manifiestos Kubernetes o Helm values',
	'tool.yaml-query.use_case.1': 'Inspeccionar configuraciones YAML anidadas sin conversión manual',
	'tool.yaml-query.use_case.2': 'Probar expresiones JSONPath o JMESPath sobre payloads YAML',
	'tool.yaml-query.use_case.3': 'Sacar listas, ids o flags de documentos YAML grandes',

	// ── Herramientas CSV ────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': 'CSV a JSON',
	'tool.csv-to-json.tagline': 'Convierte datos CSV a un array JSON',
	'tool.csv-to-json.description':
		'Convierte CSV con encabezados a un array JSON de objetos. Soporta detección de tipos dinámicos para números y booleanos y opciones de delimitador personalizado.',
	'tool.csv-to-json.primary_keyword': 'csv a json',
	'tool.csv-to-json.meta_title': 'Convertidor CSV a JSON — fmtly.dev',
	'tool.csv-to-json.meta_description':
		'Convierte CSV a JSON instantáneamente en tu navegador. Soporta encabezados, tipado dinámico y delimitadores personalizados. No hay datos cargados.',
	'tool.csv-to-json.operation': 'Convierte',
	'tool.csv-to-json.faq.0.question': '¿Puedo tratar la primera fila como encabezados?',
	'tool.csv-to-json.faq.0.answer':
		'Sí. Los controles CSV te permiten conservar la primera fila como encabezados o convertir todas las filas como datos de columna normales.',
	'tool.csv-to-json.faq.1.question': '¿Detecta números y booleanos automáticamente?',
	'tool.csv-to-json.faq.1.answer':
		'Sí. Los valores que parecen números o booleanos se infieren automáticamente durante la conversión.',
	'tool.csv-to-json.use_case.0':
		'Convertir exportaciones de hojas de cálculo en payloads JSON listos para API',
	'tool.csv-to-json.use_case.1': 'Inspeccionar filas CSV como objetos estructurados',
	'tool.csv-to-json.use_case.2': 'Normalizar datos delimitados a JSON amigable para el navegador',
	'tool.csv-to-json.use_case.3': 'Preparar datasets CSV para flujos basados en JSON',

	'tool.csv-to-xml.display_name': 'CSV a XML',
	'tool.csv-to-xml.tagline': 'Convierte datos CSV a formato XML',
	'tool.csv-to-xml.description':
		'Convierte archivos CSV a XML bien formado. Mapea encabezados de columnas a nombres de elementos y genera elementos de fila para cada registro.',
	'tool.csv-to-xml.primary_keyword': 'csv a xml',
	'tool.csv-to-xml.meta_title': 'Convertidor CSV a XML — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		'Convierte CSV a XML instantáneamente en tu navegador. Mapea encabezados a nombres de elementos. No hay datos cargados.',
	'tool.csv-to-xml.operation': 'Convierte',
	'tool.csv-to-xml.faq.0.question': '¿Cómo se eligen los nombres de los elementos XML?',
	'tool.csv-to-xml.faq.0.answer':
		'Cuando el modo de encabezados está activo, cada encabezado CSV se convierte en un elemento hijo XML dentro de un nodo de fila.',
	'tool.csv-to-xml.use_case.0':
		'Convertir exportaciones tabulares en fixtures XML para sistemas heredados',
	'tool.csv-to-xml.use_case.1': 'Ver cómo los encabezados CSV se mapean a registros XML por fila',

	'tool.csv-to-yaml.display_name': 'CSV a YAML',
	'tool.csv-to-yaml.tagline': 'Convierte datos CSV a formato YAML',
	'tool.csv-to-yaml.description':
		'Convierte archivos CSV a arrays YAML de objetos. Mapea encabezados de columnas a claves YAML para cada fila.',
	'tool.csv-to-yaml.primary_keyword': 'csv a yaml',
	'tool.csv-to-yaml.meta_title': 'Convertidor CSV a YAML — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		'Convierte CSV a YAML instantáneamente en tu navegador. No hay datos cargados.',
	'tool.csv-to-yaml.operation': 'Convierte',
	'tool.csv-to-yaml.faq.0.question': '¿Qué representa cada elemento YAML?',
	'tool.csv-to-yaml.faq.0.answer':
		'Cada fila CSV se convierte en un objeto YAML, y los encabezados pasan a ser claves cuando el modo de encabezados está activo.',
	'tool.csv-to-yaml.use_case.0': 'Transformar datos tabulares en listas YAML legibles',
	'tool.csv-to-yaml.use_case.1': 'Mover configuraciones guiadas por hojas de cálculo a flujos YAML',

	'tool.csv-to-html.display_name': 'CSV a Tabla HTML',
	'tool.csv-to-html.tagline': 'Convierte datos CSV a una tabla HTML',
	'tool.csv-to-html.description':
		'Convierte archivos CSV a tablas HTML formateadas. Usa la primera fila como encabezados de columnas.',
	'tool.csv-to-html.primary_keyword': 'csv a tabla html',
	'tool.csv-to-html.meta_title': 'Convertidor CSV a Tabla HTML — fmtly.dev',
	'tool.csv-to-html.meta_description':
		'Convierte CSV a tabla HTML instantáneamente en tu navegador. No hay datos cargados.',
	'tool.csv-to-html.operation': 'Convierte',
	'tool.csv-to-html.faq.0.question': '¿Puedo previsualizar la tabla antes de copiar el HTML?',
	'tool.csv-to-html.faq.0.answer':
		'Sí. El panel de salida incluye vista previa renderizada y vista HTML cruda.',
	'tool.csv-to-html.use_case.0':
		'Generar tablas HTML para documentación, paneles internos o fragmentos CMS',
	'tool.csv-to-html.use_case.1':
		'Revisar visualmente la estructura de la tabla antes de incrustar el marcado',

	'tool.csv-formatter.display_name': 'Formateador CSV',
	'tool.csv-formatter.tagline': 'Formatea y normaliza datos CSV',
	'tool.csv-formatter.description':
		'Limpia y formatea datos CSV con delimitadores consistentes, entrecomillado y finales de línea. Valida estructura CSV y normaliza espacios en blanco.',
	'tool.csv-formatter.primary_keyword': 'formateador csv',
	'tool.csv-formatter.meta_title': 'Formateador CSV — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'Formatea y limpia datos CSV en tu navegador. No hay datos cargados.',
	'tool.csv-formatter.operation': 'Formatea',
	'tool.csv-formatter.faq.0.question': '¿Qué puedo normalizar al formatear?',
	'tool.csv-formatter.faq.0.answer':
		'Puedes cambiar delimitadores, recortar espacios en celdas, conservar la fila de encabezados, omitir líneas vacías y forzar comillas en todas las celdas.',
	'tool.csv-formatter.use_case.0':
		'Estandarizar CSV antes de importarlos a bases de datos o herramientas BI',
	'tool.csv-formatter.use_case.1':
		'Limpiar exportaciones inconsistentes de hojas de cálculo sin subir archivos',

	'tool.csv-validator.display_name': 'Validador CSV',
	'tool.csv-validator.tagline': 'Valida estructura y sintaxis de CSV',
	'tool.csv-validator.description':
		'Valida archivos CSV para conteos de columnas consistentes, entrecomillado adecuado y problemas de codificación. Identifica filas malformadas con números de línea precisos.',
	'tool.csv-validator.primary_keyword': 'validador csv',
	'tool.csv-validator.meta_title': 'Validador CSV — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Valida CSV en tu navegador. Detecta errores de estructura con números de línea. No hay datos cargados.',
	'tool.csv-validator.operation': 'Valida',
	'tool.csv-validator.faq.0.question': '¿Qué problemas detecta el validador?',
	'tool.csv-validator.faq.0.answer':
		'Marca errores del parser, encabezados vacíos o duplicados y filas cuyo número de columnas no coincide con el resto del archivo.',
	'tool.csv-validator.use_case.0': 'Detectar CSV mal formado antes de importar o convertir',
	'tool.csv-validator.use_case.1':
		'Verificar consistencia de encabezados y ancho de filas en datasets compartidos',

	// ── Herramientas TOML ───────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'Formateador TOML',
	'tool.toml-formatter.tagline': 'Formatea y valida archivos de configuración TOML',
	'tool.toml-formatter.description':
		'Formatea archivos TOML con espaciado consistente y organización de secciones. Valida sintaxis TOML y resalta errores con números de línea.',
	'tool.toml-formatter.primary_keyword': 'formateador toml',
	'tool.toml-formatter.meta_title': 'Formateador TOML — fmtly.dev',
	'tool.toml-formatter.meta_description':
		'Formatea y valida TOML en tu navegador. No hay datos que dejen tu dispositivo.',
	'tool.toml-formatter.operation': 'Formatea',
	'tool.toml-validator.display_name': 'Validador TOML',
	'tool.toml-validator.tagline': 'Valida la sintaxis TOML antes de formatear o convertir',
	'tool.toml-validator.description':
		'Valida archivos de configuración TOML localmente en tu navegador. Detecta errores de sintaxis antes de guardar, convertir o comparar.',
	'tool.toml-validator.primary_keyword': 'validador toml',
	'tool.toml-validator.meta_title': 'Validador TOML — fmtly.dev',
	'tool.toml-validator.meta_description':
		'Valida TOML en tu navegador y detecta errores de sintaxis antes de formatear o convertir.',
	'tool.toml-validator.operation': 'Valida',
	'tool.toml-to-json.display_name': 'TOML a JSON',
	'tool.toml-to-json.tagline': 'Convierte documentos TOML a JSON',
	'tool.toml-to-json.description':
		'Convierte datos de configuración TOML a JSON con formato en tu navegador. Conserva tablas anidadas, arrays y valores escalares sin subir archivos.',
	'tool.toml-to-json.primary_keyword': 'toml a json',
	'tool.toml-to-json.meta_title': 'Convertidor de TOML a JSON — fmtly.dev',
	'tool.toml-to-json.meta_description':
		'Convierte TOML a JSON con formato al instante en tu navegador. Ningún dato sale de tu dispositivo.',
	'tool.toml-to-json.operation': 'Convierte',
	'tool.toml-to-yaml.display_name': 'TOML a YAML',
	'tool.toml-to-yaml.tagline': 'Convierte documentos TOML a YAML',
	'tool.toml-to-yaml.description':
		'Convierte datos de configuración TOML a YAML legible en tu navegador. Conserva tablas anidadas, arrays y valores escalares principales.',
	'tool.toml-to-yaml.primary_keyword': 'toml a yaml',
	'tool.toml-to-yaml.meta_title': 'Convertidor de TOML a YAML — fmtly.dev',
	'tool.toml-to-yaml.meta_description':
		'Convierte TOML a YAML al instante en tu navegador. No hace falta subir archivos.',
	'tool.toml-to-yaml.operation': 'Convierte',
	'tool.toml-diff.display_name': 'Comparador TOML',
	'tool.toml-diff.tagline': 'Compara dos documentos TOML lado a lado',
	'tool.toml-diff.description':
		'Compara dos documentos TOML y resalta claves añadidas, eliminadas y modificadas. Revisa cambios de configuración sin salir del navegador.',
	'tool.toml-diff.primary_keyword': 'comparador toml',
	'tool.toml-diff.meta_title': 'Comparador TOML — fmtly.dev',
	'tool.toml-diff.meta_description':
		'Compara dos documentos TOML en tu navegador y resalta cada cambio.',
	'tool.toml-diff.operation': 'Compara',
	'tool.toml-formatter.faq.0.question': '¿Formatear cambia los valores de TOML?',
	'tool.toml-formatter.faq.0.answer':
		'No. Reescribe TOML válido con un formato normalizado sin alterar los valores ni la estructura de datos interpretada.',
	'tool.toml-formatter.faq.1.question': '¿Cuándo debo usar el formateador en lugar del validador?',
	'tool.toml-formatter.faq.1.answer':
		'Usa el validador si solo quieres comprobar la sintaxis. Usa el formateador cuando el TOML ya sea válido y quieras una salida más limpia y consistente.',
	'tool.toml-formatter.use_case.0': 'Normalizar pyproject.toml antes de hacer commit',
	'tool.toml-formatter.use_case.1':
		'Limpiar fragmentos de configuración copiados desde documentación',
	'tool.toml-formatter.use_case.2': 'Hacer más legibles secciones largas de TOML',
	'tool.toml-formatter.use_case.3': 'Preparar TOML antes de compararlo o convertirlo',
	'tool.toml-validator.faq.0.question': '¿Qué problemas de TOML detecta el validador?',
	'tool.toml-validator.faq.0.answer':
		'Detecta errores de análisis como cadenas mal formadas, sintaxis de tablas no válida, arrays rotos y otros problemas de sintaxis TOML.',
	'tool.toml-validator.faq.1.question': '¿El validador TOML admite esquemas?',
	'tool.toml-validator.faq.1.answer':
		'No. Solo valida la sintaxis TOML. Sirve para confirmar que un documento se puede analizar correctamente antes de formatearlo, convertirlo o compararlo.',
	'tool.toml-validator.use_case.0':
		'Comprobar pyproject.toml antes de ejecutar herramientas de build',
	'tool.toml-validator.use_case.1': 'Detectar errores de sintaxis en configuraciones de aplicación',
	'tool.toml-validator.use_case.2': 'Verificar TOML copiado desde documentación de paquetes',
	'tool.toml-validator.use_case.3': 'Confirmar cambios de configuración antes de comparar',
	'tool.toml-to-json.faq.0.question': '¿Se conservan tablas anidadas y arrays en JSON?',
	'tool.toml-to-json.faq.0.answer':
		'Sí. Los objetos TOML analizados se convierten en objetos y arrays JSON equivalentes, por lo que la estructura general se mantiene.',
	'tool.toml-to-json.faq.1.question': '¿Cuándo conviene convertir de TOML a JSON?',
	'tool.toml-to-json.faq.1.answer':
		'Conviene cuando una herramienta, API, script o fixture de prueba espera JSON en lugar de TOML, pero necesitas reutilizar los mismos datos de configuración.',
	'tool.toml-to-json.use_case.0': 'Convertir configuración TOML a JSON para tooling JavaScript',
	'tool.toml-to-json.use_case.1':
		'Inspeccionar TOML como estructura más estricta y legible por máquinas',
	'tool.toml-to-json.use_case.2': 'Reutilizar ajustes TOML en fixtures o tests de API',
	'tool.toml-to-json.use_case.3':
		'Conectar datos de configuración entre TOML y sistemas basados en JSON',
	'tool.toml-to-yaml.faq.0.question': '¿Por qué convertir TOML a YAML?',
	'tool.toml-to-yaml.faq.0.answer':
		'YAML suele ser más fácil de revisar en flujos de infraestructura y automatización. La conversión ayuda cuando un equipo o herramienta prefiere sintaxis YAML.',
	'tool.toml-to-yaml.faq.1.question': '¿Se conserva la estructura TOML en la salida YAML?',
	'tool.toml-to-yaml.faq.1.answer':
		'Sí. Tablas, objetos anidados, arrays y valores escalares se trasladan a sus equivalentes en YAML.',
	'tool.toml-to-yaml.use_case.0': 'Reescribir configuración TOML a YAML para flujos de despliegue',
	'tool.toml-to-yaml.use_case.1': 'Compartir ajustes basados en TOML con equipos centrados en YAML',
	'tool.toml-to-yaml.use_case.2': 'Comparar la misma configuración en formato TOML y YAML',
	'tool.toml-to-yaml.use_case.3':
		'Migrar configuración entre ecosistemas con formatos preferidos distintos',
	'tool.toml-diff.faq.0.question': '¿TOML Diff es un diff de texto o estructural?',
	'tool.toml-diff.faq.0.answer':
		'Es estructural. Primero se analiza cada entrada como TOML y luego se comparan claves, arrays y valores resultantes.',
	'tool.toml-diff.faq.1.question': '¿Puedo comparar documentos TOML no válidos?',
	'tool.toml-diff.faq.1.answer':
		'No. Ambos lados deben ser TOML válido. Si uno falla al analizarse, la herramienta indica qué lado es inválido.',
	'tool.toml-diff.use_case.0': 'Revisar cambios de configuración entre dos versiones',
	'tool.toml-diff.use_case.1': 'Comparar ajustes TOML por entorno',
	'tool.toml-diff.use_case.2': 'Comprobar TOML generado frente a una versión esperada',
	'tool.toml-diff.use_case.3':
		'Inspeccionar cambios de pyproject.toml o toolchains antes del commit',

	'tool.toml-minifier.display_name': 'Minificador TOML',
	'tool.toml-minifier.tagline': 'Minifica y comprime archivos de configuración TOML',
	'tool.toml-minifier.description':
		'Elimina espacios en blanco innecesarios y comentarios de archivos TOML para reducir el tamaño del archivo. Minifica configuraciones TOML localmente en tu navegador.',
	'tool.toml-minifier.primary_keyword': 'minificador toml',
	'tool.toml-minifier.meta_title': 'Minificador TOML — fmtly.dev',
	'tool.toml-minifier.meta_description':
		'Minifica y comprime archivos TOML en tu navegador. Elimina espacios en blanco y comentarios de forma segura. Ningún dato sale de tu dispositivo.',
	'tool.toml-minifier.operation': 'Minificar',
	'tool.toml-minifier.faq.0.question': '¿Qué hace el minificador TOML?',
	'tool.toml-minifier.faq.0.answer':
		'Analiza tu archivo TOML y lo reescribe con la cantidad mínima de espacios en blanco requeridos. Los comentarios también se eliminan para reducir el tamaño total del archivo.',
	'tool.toml-minifier.faq.1.question': '¿Es seguro minificar archivos TOML?',
	'tool.toml-minifier.faq.1.answer':
		'Sí. El minificador garantiza que el significado estructural de los datos TOML permanezca exactamente igual. Solo se eliminan el formato y los comentarios.',
	'tool.toml-minifier.use_case.0': 'Comprimir grandes configuraciones TOML para implementación',
	'tool.toml-minifier.use_case.1':
		'Eliminar comentarios antes de compartir archivos de configuración',
	'tool.toml-minifier.use_case.2':
		'Preparar archivos TOML para sistemas integrados o almacenamiento limitado',
	'tool.toml-minifier.use_case.3': 'Normalizar archivos TOML en un formato compacto',

	'tool.toml-to-xml.display_name': 'TOML a XML',
	'tool.toml-to-xml.tagline': 'Convierte archivos de configuración TOML a formato XML',
	'tool.toml-to-xml.description':
		'Convierte estructuras de datos TOML a documentos XML directamente en tu navegador. Conserva tablas anidadas y arrays en jerarquías de nodos XML.',
	'tool.toml-to-xml.primary_keyword': 'toml a xml',
	'tool.toml-to-xml.meta_title': 'Convertidor de TOML a XML — fmtly.dev',
	'tool.toml-to-xml.meta_description':
		'Convierte configuraciones TOML a XML al instante en tu navegador. Sin subir archivos.',
	'tool.toml-to-xml.operation': 'Convertir',
	'tool.toml-to-xml.faq.0.question': '¿Cómo se convierten los arrays TOML a XML?',
	'tool.toml-to-xml.faq.0.answer':
		'XML no soporta nativamente arrays sin nombre, por lo que típicamente se representan repitiendo el nombre del nodo o envolviendo elementos en etiquetas de lista estándar según el analizador.',
	'tool.toml-to-xml.faq.1.question': '¿Puedo volver a convertirlo a TOML más tarde?',
	'tool.toml-to-xml.faq.1.answer':
		'Sí, puedes usar nuestro convertidor de XML a TOML, aunque alguna información de tipo (como cadenas explícitas frente a números) podría ser interpretada de manera diferente por el analizador XML al regresar.',
	'tool.toml-to-xml.use_case.0':
		'Adaptar configuraciones TOML modernas para sistemas XML heredados',
	'tool.toml-to-xml.use_case.1': 'Integrar aplicaciones basadas en TOML con API SOAP empresariales',
	'tool.toml-to-xml.use_case.2':
		'Convertir datos pyproject.toml en archivos de compilación Maven o Ant',
	'tool.toml-to-xml.use_case.3':
		'Extraer lógica de configuración en conjuntos de datos XML genéricos',

	'tool.toml-to-html.display_name': 'TOML a HTML',
	'tool.toml-to-html.tagline': 'Convierte configuración TOML en una tabla HTML responsiva',
	'tool.toml-to-html.description':
		'Transforma archivos de configuración TOML en tablas HTML limpias y legibles. Perfecto para documentación, informes y compartir estados de configuración.',
	'tool.toml-to-html.primary_keyword': 'toml a html',
	'tool.toml-to-html.meta_title': 'Convertidor de TOML a Tabla HTML — fmtly.dev',
	'tool.toml-to-html.meta_description':
		'Convierte TOML a tablas HTML al instante en tu navegador. Crea tablas responsivas a partir de datos TOML anidados.',
	'tool.toml-to-html.operation': 'Convertir',
	'tool.toml-to-html.faq.0.question': '¿Cómo maneja las tablas TOML anidadas?',
	'tool.toml-to-html.faq.0.answer':
		'Las tablas anidadas y los arrays se representan recursivamente como tablas HTML internas, asegurando que la estructura exacta de los datos se mantenga visualmente.',
	'tool.toml-to-html.faq.1.question': '¿Puedo copiar el resultado directamente a mi documentación?',
	'tool.toml-to-html.faq.1.answer':
		'Sí, el resultado es HTML estándar que se puede copiar y pegar directamente en archivos Markdown, Notion, Confluence o cualquier página web estándar.',
	'tool.toml-to-html.use_case.0':
		'Generar informes visuales a partir de archivos de configuración TOML',
	'tool.toml-to-html.use_case.1':
		'Pegar configuraciones de la aplicación en la documentación del proyecto',
	'tool.toml-to-html.use_case.2': 'Mostrar variables específicas del entorno en paneles internos',
	'tool.toml-to-html.use_case.3':
		'Revisar estructuras TOML anidadas complejas en un formato accesible',

	'ui.actions.choose_sample': 'Elige…',
	'ui.actions.clear': 'Limpiar',
	'ui.actions.copied': 'Copiado',
	'ui.actions.copy': 'Copiar',
	'ui.actions.copy_all': 'Copiar todo',
	'ui.actions.download': 'Descargar',
	'ui.actions.fetch': 'Obtener',
	'ui.actions.format': 'Formatea',
	'ui.actions.load_url': 'Cargar URL',
	'ui.actions.minify': 'Minifica',
	'ui.actions.run': 'Ejecutar',
	'ui.actions.running': 'Ejecutando…',
	'ui.actions.sample': 'Ejemplo',
	'ui.actions.search': 'Buscar',
	'ui.actions.diff': 'Diff',
	'ui.actions.share': 'Compartir',
	'ui.layout.tabs.output': 'Salida',
	'ui.layout.tabs.tree': 'Árbol',
	'ui.layout.placeholders.input': 'Entrada',
	'ui.layout.placeholders.output': 'Salida',
	'ui.layout.placeholders.output_empty': 'La salida aparecerá aquí',
	'ui.layout.placeholders.tree_empty': 'Vista de árbol',
	'ui.layout.placeholders.paste_original': 'Pega original aquí…',
	'ui.layout.placeholders.paste_modified': 'Pega modificado aquí…',
	'ui.diff.labels.original': 'Original',
	'ui.diff.labels.modified': 'Modificado',
	'ui.diff.labels.input_panel': 'Panel de entrada de diff',
	'ui.diff.controls.ignore_order': 'Ignorar orden de array',
	'ui.diff.controls.only_diffs': 'Mostrar solo diffs',
	'ui.diff.controls.case_sensitive': 'Sensible a mayúsculas',
	'ui.diff.controls.ignore_keys_placeholder': 'Ignorar claves: id, timestamp…',
	'ui.diff.controls.swap': 'Intercambiar',
	'ui.diff.controls.export': 'Exportar',
	'ui.diff.controls.copy_patch': 'Copiar como JSON Patch',
	'ui.diff.controls.export_md': 'Descargar informe Markdown',
	'ui.diff.controls.export_csv': 'Descargar CSV',
	'ui.diff.view.list': 'Vista de lista',
	'ui.diff.view.monaco': 'Vista de diff inline',
	'ui.diff.view.inline_toggle': 'Cambiar inline / lado a lado',
	'ui.diff.summary.added': 'añadido',
	'ui.diff.summary.removed': 'eliminado',
	'ui.diff.summary.modified': 'modificado',
	'ui.diff.summary.similar': 'similar',
	'ui.diff.summary.empty': 'Ingresa {language} en ambos paneles para comparar',
	'ui.diff.summary.identical': 'Los documentos son idénticos',
	'ui.diff.summary.difference': 'diferencia',
	'ui.diff.summary.differences': 'diferencias',
	'ui.diff.summary.found': 'encontrado',
	'ui.diff.filter.placeholder': 'Filtrar por ruta…',
	'ui.diff.types.root': '(raíz)',
	'ui.diff.types.added': 'Añadido',
	'ui.diff.types.removed': 'Eliminado',
	'ui.diff.types.modified': 'Modificado',
	'ui.diff.types.unchanged': 'Sin cambios',
	'ui.diff.actions.format': 'Formatea',
	'ui.diff.actions.copy_value': 'Copiar valor',
	'ui.diff.actions.collapse': 'Contraer',
	'ui.diff.actions.expand': 'Expandir',
	'ui.diff.toast.format_error': 'No se puede formatear — {language} inválido',
	'ui.diff.error.invalid_left': '{language} inválido en la entrada izquierda (Original)',
	'ui.diff.error.invalid_right': '{language} inválido en la entrada derecha (Modificado)',
	'ui.diff.toast.patch_success': 'JSON Patch copiado al portapapeles',
	'ui.diff.toast.copy_value': 'Valor copiado',
	'ui.diff.toast.share_copied': 'Enlace de compartir copiado al portapapeles',
	'ui.diff.meta.chars': 'caracteres',
	'ui.diff.empty.hint': 'Pega {language} en ambos paneles de arriba para compararlos.',
	'ui.diff.report.title': 'Informe de Diff de {language}',
	'ui.diff.empty.load_sample': 'Cargar datos de ejemplo',
	'ui.layout.placeholders.modified': 'Modificado',
	'ui.layout.aria.input_panel': 'Panel de entrada',
	'ui.layout.aria.output_panel': 'Panel de salida',
	'ui.layout.aria.copy_output': 'Copiar salida',
	'ui.layout.aria.download_output': 'Descargar salida',
	'ui.actions.upload': 'Cargar',
	'ui.actions.validate': 'Valida',
	'ui.actions.wrap': 'Envolver',
	'ui.confirm.clear': '¿Limpiar la entrada {language} actual?',
	'ui.confirm.clear_description': 'Esta acción no se puede deshacer.',
	'ui.drop_files': 'Suelta archivos .{extension}',
	'ui.drop_to_load': 'Suelta para cargar',
	'ui.history.clear_all': 'Limpiar Historial',
	'ui.history.clear_confirm': '¿Limpiar todo el historial?',
	'ui.history.clear_description': 'Esta acción no se puede deshacer.',
	'ui.history.empty': 'Sin historial aún',
	'ui.history.recent': 'Usado Recientemente',
	'ui.history.title': 'Historial',
	'ui.paste_here': 'Pega aquí…',
	'ui.paste_language_here': 'Pega {language} aquí…',
	'ui.placeholder.original_yaml': 'Pega aquí el YAML original…',
	'ui.placeholder.modified_yaml': 'Pega aquí el YAML modificado…',
	'ui.placeholder.search_tools_count': 'Busca {count}+ herramientas...',
	'ui.placeholder.url': 'https://example.com/data.json',
	'ui.placeholder.xpath': '//book[@available=\x27true\x27]',
	'ui.related_categories': 'Categorías Relacionadas',
	'ui.stats.info': '{encoding} · {size} · {lines} líneas · profundidad: {depth}',
	'ui.toast.copy_error': 'La copia falló — verifica permisos del navegador',
	'ui.toast.copy_success': 'Copiado al portapapeles',
	'ui.toast.input_cleared': 'Entrada limpiada',
	'ui.loaded_sample': 'Cargado {label}',
	'ui.toast.url_error': 'No se pudo obtener — intenta pegar directamente',
	'ui.toast.url_loaded': 'Cargado desde URL',
	'share.link_size': 'Tamaño del enlace',
	'share.large_link_warning': 'Este enlace es grande y puede no funcionar en todos los navegadores',
	'share.data_encoded_note':
		'Los datos están codificados en la URL y nunca se envían a ningún servidor para procesamiento.',
	'share.enter_input_first': 'Ingresa algo primero para generar un enlace de compartir.',
	'ui.share_url_copied': 'URL de compartir copiada',
	'ui.copied': 'Copiado',
	'ui.copy_link': 'Copiar Enlace',
	'ui.share': 'Compartir',
	'ui.close': 'Cerrar',
	'ui.cancel': 'Cancelar',
	'ui.confirm': 'Confirmar',
	'ui.tool_count.one': '1 herramienta',
	'ui.tool_count.other': '{count} herramientas',
	'ui.tree.collapse': 'Contraer',
	'ui.tree.expand': 'Expandir',
	'ui.tree.root': 'Árbol',
	'ui.tree.summary': '{keyCount} claves · {valueCount} valores · profundidad {maxDepth}',
	'ui.validity.empty': 'Vacío',
	'ui.validity.error_at': 'Línea {line}, Col {column}: {message}',
	'ui.validity.invalid': '{language} inválido',
	'ui.validity.valid': '{language} válido',
	'ui.xpath.no_results':
		'Sin resultados. Intenta una expresión diferente o verifica la estructura XML.',
	'ui.xpath.placeholder': 'Pega XML en el panel izquierdo, luego ejecuta una expresión XPath.',
	'ui.xpath.results_count.one': '1 resultado',
	'ui.xpath.results_count.other': '{count} resultados',
	'ui.validator.syntax': 'Sintaxis',
	'ui.validator.schema': 'Esquema',
	'ui.validator.issue': 'problema',
	'ui.validator.issues': 'problemas',
	'ui.validator.row': 'Fila',
	'ui.validator.warning': 'advertencia',
	'ui.validator.warnings': 'advertencias',
	'ui.validator.first_issue': 'Primer problema',
	'ui.validator.repair_json': 'Reparar JSON',
	'ui.validator.schema_title': 'JSON Schema',
	'ui.validator.schema_standard': 'Draft-07+ via AJV',
	'ui.validator.paste_schema_placeholder': 'Pega JSON Schema aquí…',
	'ui.validator.paste_json': 'Pega JSON a validar',
	'ui.validator.paste_schema': 'Pega un JSON Schema para validar contra',
	'ui.validator.validating_schema': 'Validando esquema…',
	'ui.validator.schema_invalid': 'El esquema es inválido',
	'ui.validator.json_matches_schema': 'JSON coincide con el esquema',
	'ui.validator.schema_validation_failed': 'La validación del esquema falló',
	'ui.validator.no_syntax_errors': 'Sin errores de sintaxis encontrados.',
	'ui.validator.json_matches_current_schema': 'JSON coincide con el esquema actual.',
	'ui.validator.schema_match': 'Coincidencia de esquema',
	'ui.validator.valid_json': 'JSON válido',
	'ui.validator.explanation_must_satisfy': 'debe satisfacer',
	'ui.validator.data_error_pos': 'Error de datos en línea {line}, columna {column}',
	'ui.load_sample': 'Cargar un ejemplo',
	'ui.share_url': 'URL de Compartir',
	'ui.format_xml': 'Formatea XML',
	'ui.format_yaml': 'Formatea YAML',
	'ui.minify_xml': 'Minifica XML',
	'ui.format_beautify': 'Formatea / Embellece',
	'ui.minify': 'Minifica',
	'ui.repair_json': 'Reparar JSON',
	'ui.expand_all': 'Expandir todo',
	'ui.collapse_all': 'Contraer todo',
	'ui.expand_to_depth': 'Expandir a profundidad {depth}',
	switch_to_tab: 'Cambiar a pestaña {index}',
	switch_to_xml_tab: 'Cambiar a pestaña XML {index}',
	switch_to_yaml_tab: 'Cambiar a pestaña YAML {index}',
	use_cases: 'Casos de Uso',
	faq: 'Preguntas Frecuentes',
	'ui.validator.schema_error_pos': 'Error de esquema en línea {line}, columna {column}',
	'ui.validator.syntax_error_pos': 'Error de sintaxis en línea {line}, columna {column}',
	'ui.validator.line_col_label': 'Línea {line}, columna {column}',
	'ui.validator.well_formed': 'Bien formado',
	'ui.validator.invalid_xml': 'XML inválido',
	'ui.validator.loading_editor': 'Cargando editor…',
	'ui.validator.xml_paste_hint': 'Pega o escribe XML para validarlo.',
	'ui.validator.xml_validation_desc':
		'Valida buena formación: tags sin cerrar, elementos desajustados, caracteres inválidos y más.',
	'ui.validator.xml_success_title': 'XML Bien Formado',
	'ui.validator.xml_success_desc':
		'Sin errores de sintaxis detectados. El documento está bien formado y puede ser analizado por cualquier procesador XML.',
	'ui.validator.error_count.one': '1 error encontrado',
	'ui.validator.error_count.other': '{count} errores encontrados',
	'ui.toast.file_loaded': 'Archivo cargado: {name}',
	'ui.toast.clipboard_xml': 'XML del Portapapeles',
	'ui.toast.pasted_xml': 'XML pegado desde portapapeles',
	'ui.toast.xml_file_types': 'Solo se soportan archivos .xml, .svg, .xhtml, .xsd, .wsdl y .txt',
	'ui.aria.xml_input_panel': 'Panel de entrada XML',
	'ui.aria.xml_output_panel': 'Panel de salida XML',
	'ui.aria.xml_workspace_tabs': 'Pestañas de área de trabajo XML',
	'ui.aria.xpath_panel': 'Panel de consulta XPath',
	'ui.aria.xml_validator': 'Validador XML',
	'ui.aria.yaml_output_panel': 'Panel de salida YAML',
	'ui.aria.yaml_validator': 'Validador YAML',
	'ui.aria.csv_validator': 'Validador CSV',
	'ui.csv.controls.delimiter': 'Delimitador',
	'ui.csv.controls.header_row': 'Fila de encabezados',
	'ui.csv.controls.skip_empty_lines': 'Omitir líneas vacías',
	'ui.csv.controls.trim_cells': 'Recortar celdas',
	'ui.csv.controls.quote_all': 'Entrecomillar todas las celdas',
	'ui.csv.delimiter.comma': 'Coma (,)',
	'ui.csv.delimiter.semicolon': 'Punto y coma (;)',
	'ui.csv.delimiter.tab': 'Tabulación',
	'ui.csv.delimiter.pipe': 'Barra vertical (|)',
	'ui.csv.view.preview': 'Vista previa',
	'ui.csv.view.raw': 'Crudo',
	'ui.csv.stats.rows': 'filas',
	'ui.csv.stats.columns': 'columnas',
	'ui.csv.preview.column_name': 'Columna {index}',
	'ui.csv.preview.no_rows': 'No hay filas de datos para previsualizar',
	'ui.csv.preview.delimiter': 'delimitador',
	'ui.csv.preview.header_mode': 'encabezado',
	'ui.csv.preview.no_header': 'Columnas generadas',
	'ui.csv.preview.remaining_rows': 'La vista previa solo muestra {count} filas adicionales',
	'ui.csv.empty.title': 'Pega CSV para empezar',
	'ui.csv.empty.desc':
		'Formatea, valida, previsualiza o convierte datos CSV completamente en tu navegador.',
	'ui.csv.empty.waiting_title': 'Esperando salida CSV',
	'ui.csv.empty.waiting_desc':
		'Las filas analizadas, la salida formateada o los resultados convertidos aparecerán aquí.',
	'ui.validator.invalid_yaml': 'YAML inválido',
	'ui.validator.invalid_csv': 'CSV inválido',
	'ui.validator.csv_paste_hint': 'Pega o escribe CSV para validarlo.',
	'ui.validator.csv_validation_desc':
		'Valida la estructura del delimitador, la consistencia de filas y el entrecomillado mal formado en entradas CSV.',
	'ui.validator.csv_error.header_empty': 'La columna de encabezado {column} está vacía',
	'ui.validator.csv_error.duplicate_header': 'Se encontró un encabezado duplicado "{value}"',
	'ui.validator.csv_error.row_width':
		'La fila {row} tiene {actual} columnas, pero se esperaban {expected}',
	'ui.validator.csv_success_title': 'CSV válido',
	'ui.validator.csv_success_desc':
		'No se detectaron errores estructurales en el CSV. El documento puede analizarse correctamente.',
	'ui.validator.csv_paste_schema': 'Pega un esquema para validar',
	'ui.validator.csv_paste_schema_data': 'Pega CSV para validar',
	'ui.validator.csv_validating_schema': 'Validando esquema…',
	'ui.validator.csv_matches_schema': 'El CSV coincide con el esquema',
	'ui.validator.csv_matches_current_schema': 'Las filas CSV coinciden con el esquema actual.',
	'ui.validator.csv_schema_title': 'Esquema',
	'ui.validator.csv_schema_standard': 'JSON Schema Draft-07+ con AJV',
	'ui.validator.csv_paste_schema_placeholder': 'Pega aquí un JSON Schema o un esquema YAML…',
	'ui.validator.csv_schema_validation_desc':
		'Valida filas CSV contra un esquema que se ejecuta en el navegador. Cada fila analizada se valida como objeto usando las opciones CSV actuales.',
	'ui.validator.yaml_paste_hint': 'Pega o escribe YAML para validarlo.',
	'ui.validator.yaml_validation_desc':
		'Valida sintaxis YAML, indentación, caracteres inválidos y estructuras mal formadas.',
	'ui.validator.yaml_success_title': 'YAML válido',
	'ui.validator.yaml_success_desc':
		'No se detectaron errores de sintaxis. El documento puede parsearse correctamente como YAML.',
	'ui.validator.yaml_warning_title': 'YAML válido con advertencias de estilo',
	'ui.validator.yaml_warning_desc':
		'El documento se analiza correctamente, pero algunos problemas de estilo pueden reducir la legibilidad o la consistencia.',
	'ui.validator.yaml_lint.tabs':
		'Se encontraron tabulaciones en la indentación. YAML suele ser más seguro usando solo espacios.',
	'ui.validator.yaml_lint.trailing_whitespace':
		'Se encontró espacio en blanco al final de la línea.',
	'ui.validator.yaml_lint.odd_indentation':
		'Se encontró un ancho de indentación impar. YAML suele ser más consistente con indentación de 2 espacios.',
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
	'ui.query.stats.chars': 'caracteres',
	'ui.query.stats.lines': 'líneas',
	'ui.query.result': 'resultado',
	'ui.query.results': 'resultados',
	'ui.query.history': 'Historial',
	'ui.query.sample_query': 'Consulta de ejemplo',
	'ui.query.guide': 'Guía',
	'ui.query.query': 'Consulta',
	'ui.query.mode': 'Modo de consulta',
	'ui.query.running': 'Ejecutando consulta…',
	'ui.query.empty_input': 'Pega JSON a la izquierda para evaluar tu consulta.',
	'ui.query.empty_input_yaml': 'Pega YAML a la izquierda para evaluar tu consulta.',
	'ui.query.empty_query': 'Ingresa una consulta para ver resultados.',
	'ui.query.error_fallback': 'La consulta falló',
	'ui.query.copy_error': 'No se pudo copiar salida',
	'ui.aria.json_query_panel': 'Panel de consulta JSON',
	'ui.aria.yaml_query_panel': 'Panel de consulta YAML',
	'ui.status.processing': 'Procesando…',
	'ui.status.waiting_output': 'La salida aparecerá aquí',
	'ui.output.controls.spaces': 'espacios',
	'ui.output.stats.chars': 'caracteres',
	'ui.output.stats.lines': 'líneas',
	'ui.output.stats.documents': 'documentos',
	'ui.output.stats.top_level_keys': 'claves de nivel superior',
	'ui.output.stats.keys': 'claves',
	'ui.output.stats.objects': 'objetos',
	'ui.output.stats.arrays': 'arrays',
	'ui.output.stats.strings': 'strings',
	'ui.output.stats.values': 'valores',
	'ui.output.stats.numbers': 'números',
	'ui.output.stats.booleans': 'booleanos',
	'ui.output.stats.nulls': 'nulos',
	'ui.output.stats.depth': 'profundidad',
	'ui.output.stats.size_in': 'en',
	'ui.output.stats.size_out': 'fuera',
	'ui.output.original': 'Original',
	'ui.command_palette.title': 'Paleta de comandos',
	'ui.command_palette.placeholder': 'Busca herramientas, categorías y formatos…',
	'ui.command_palette.recent': 'Recientes',
	'ui.command_palette.no_results': 'No se encontraron herramientas coincidentes',
	'ui.command_palette.hint_navigate': 'Navegar',
	'ui.command_palette.hint_open': 'Abrir',
	'ui.command_palette.hint_close': 'Cerrar',
	'ui.output.minified': 'Minificado',
	'ui.output.saved': 'guardado',
	'ui.output.meta.minified': 'MINIFICADO',
	'ui.output.actions.wrap': 'Envolver',
	'ui.output.actions.compare': 'Comparar',
	'ui.output.actions.copy_json': 'Copiar como JSON',
	'ui.output.actions.copy_js': 'Copiar como Objeto JS',
	'ui.output.actions.copy_python': 'Copiar como Diccionario Python',
	'ui.output.actions.copy_escaped': 'Copiar escapado',
	'ui.output.actions.copy': 'Copiar',
	'ui.output.actions.download': 'Descargar',
	'ui.output.compare.input': 'Entrada',
	'ui.output.compare.output': 'Salida',
	'ui.output.error.invalid_title': 'JSON inválido',
	'ui.output.controls.indent': 'Indentación',
	'ui.output.controls.tab': 'Pestaña',
	'ui.output.controls.sort_keys': 'Ordenar claves',
	'ui.output.controls.clean': 'Limpiar',
	'ui.output.controls.clean_nulls': 'Eliminar valores nulos',
	'ui.output.controls.clean_strings': 'Eliminar strings vacíos',
	'ui.output.controls.clean_arrays': 'Eliminar arrays vacíos',
	'ui.output.controls.clean_objects': 'Eliminar objetos vacíos',
	'ui.output.controls.apply': 'Aplicar',
	'ui.json_flatten.tab_label': 'Aplanar',
	'ui.json_flatten.mode_label': 'Modo',
	'ui.json_flatten.mode.flatten': 'Aplanar',
	'ui.json_flatten.mode.unflatten': 'Desaplanar',
	'ui.json_flatten.separator': 'Separador',
	'ui.json_flatten.separator_placeholder': '.',
	'ui.json_flatten.error.generic':
		'No se pudo transformar el JSON con la configuración de aplanado actual.',
	'ui.json_flatten.error.empty_separator': 'El separador no puede estar vacío.',
	'ui.json_flatten.error.invalid_result':
		'La transformación falló porque la salida generada es inválida.',
	'ui.json_flatten.error.invalid_flat_object':
		'La entrada para desaplanar debe ser un objeto JSON con rutas planas.',
	'ui.json_flatten.error.root_conflict':
		'La clave raíz no puede usarse junto con otras rutas aplanadas.',
	'ui.json_flatten.error.invalid_path': 'Una o más rutas aplanadas no son válidas.',
	'ui.json_flatten.error.invalid_escape':
		'Una ruta aplanada contiene una secuencia de escape inválida.',
	'ui.json_flatten.error.invalid_array_index':
		'Los índices de array en rutas aplanadas deben ser enteros no negativos.',
	'ui.json_flatten.error.path_conflict':
		'Las rutas aplanadas entran en conflicto y no pueden fusionarse con seguridad.',
	'ui.json_flatten.error.unsafe_key':
		'La ruta contiene una clave insegura (__proto__, constructor o prototype).',
	'ui.json_patch.tab_label': 'Patch',
	'ui.json_patch.mode_label': 'Modo',
	'ui.json_patch.mode.generate': 'Generar Patch',
	'ui.json_patch.mode.apply': 'Aplicar Patch',
	'ui.json_patch.target_label': 'JSON destino',
	'ui.json_patch.patch_label': 'JSON Patch (RFC 6902)',
	'ui.json_patch.target_placeholder': 'Pega aquí el JSON destino…',
	'ui.json_patch.patch_placeholder': 'Pega aquí el array JSON Patch…',
	'ui.json_patch.base_label': 'JSON base',
	'ui.json_patch.base_hint':
		'El panel de entrada es el JSON base. La salida muestra el patch generado.',
	'ui.json_patch.apply_hint':
		'El panel de entrada es el JSON base. La salida muestra el resultado con patch aplicado.',
	'ui.json_patch.result_label_generate': 'Patch generado',
	'ui.json_patch.result_label_apply': 'JSON con patch aplicado',
	'ui.json_patch.empty_generate': 'Añade un JSON destino para generar un patch RFC 6902.',
	'ui.json_patch.empty_apply': 'Añade un array JSON Patch para aplicarlo sobre el documento base.',
	'ui.json_patch.error.generic': 'No se pudo procesar JSON Patch con las entradas actuales.',
	'ui.json_patch.error.invalid_result': 'La operación de patch falló porque la salida es inválida.',
	'ui.json_patch.error.invalid_patch_array':
		'La entrada patch debe ser un array JSON de operaciones.',
	'ui.json_patch.error.invalid_operation': 'El patch contiene un objeto de operación inválido.',
	'ui.json_patch.error.unsupported_operation': 'El patch contiene una operación no soportada.',
	'ui.json_patch.error.missing_from': 'La operación patch requiere una ruta "from".',
	'ui.json_patch.error.missing_value': 'La operación patch requiere un campo "value".',
	'ui.json_patch.error.invalid_pointer':
		'La operación patch contiene una ruta JSON Pointer inválida.',
	'ui.json_patch.error.path_not_found': 'La ruta patch no existe en el documento actual.',
	'ui.json_patch.error.test_failed': 'La operación test del patch falló para la ruta indicada.',
	'ui.json_patch.error.invalid_array_index':
		'La operación patch referencia un índice de array inválido.',

	// ── FAQs de Herramientas y Casos de Uso ──────────────────────────────
	'tool.json-formatter.faq.0.question': '¿Qué es el formateo de JSON?',
	'tool.json-formatter.faq.0.answer':
		'El formateo de JSON es el proceso de organizar datos JSON con indentación adecuada y saltos de línea para hacerlo más legible y fácil de entender.',
	'tool.json-formatter.faq.1.question': '¿Puedo personalizar la indentación?',
	'tool.json-formatter.faq.1.answer':
		'¡Sí! Puedes elegir entre 2 espacios, 4 espacios o tabulaciones para la indentación. El formateador preserva tu estructura de datos original mientras aplica tu formato preferido.',
	'tool.json-formatter.faq.2.question': '¿Esta herramienta modifica mis datos?',
	'tool.json-formatter.faq.2.answer':
		'No. El formateador solo cambia la presentación visual de tu JSON agregando indentación y saltos de línea adecuados. Los datos, claves y valores reales permanecen exactamente igual.',
	'tool.json-formatter.faq.3.question': '¿Puedo ordenar las claves de JSON?',
	'tool.json-formatter.faq.3.answer':
		'¡Sí! Activa la opción "Ordenar claves" para ordenar alfabéticamente todas las claves en objetos. Esto es útil para comparar archivos JSON o mantener un ordenamiento consistente.',
	'tool.json-formatter.use_case.0':
		'Depuración de respuestas de API formateándolas para mejor legibilidad',
	'tool.json-formatter.use_case.1': 'Limpieza de archivos JSON minificados de fuentes web',
	'tool.json-formatter.use_case.2':
		'Preparación de archivos de configuración para control de versiones con formato consistente',
	'tool.json-formatter.use_case.3':
		'Hacer datos JSON más presentables para documentación o presentaciones',
	'tool.json-formatter.use_case.4':
		'Validación y formateo de JSON antes de edición manual o revisión',

	'tool.json-validator.faq.0.question': '¿Qué verifica la validación de JSON?',
	'tool.json-validator.faq.0.answer':
		'La validación de JSON verifica errores de sintaxis incluyendo corchetes faltantes, comillas desajustadas, comas finales, secuencias de escape inválidas y claves duplicadas en objetos.',
	'tool.json-validator.faq.1.question':
		'¿Cuál es la diferencia entre validación de sintaxis y validación de esquema?',
	'tool.json-validator.faq.1.answer':
		'La validación de sintaxis asegura que JSON esté bien formado según la especificación JSON. La validación de esquema va más allá verificando si la estructura JSON coincide con un esquema predefinido con reglas específicas para tipos de datos, campos requeridos y restricciones de valores.',
	'tool.json-validator.faq.2.question': '¿Puedo validar JSON con comentarios?',
	'tool.json-validator.faq.2.answer':
		'¡Sí! Este validador soporta formato JSON5, que permite comentarios (tanto // como /* */), comas finales y comillas simples para strings. Detectará y manejará automáticamente la sintaxis JSON5.',
	'tool.json-validator.use_case.0':
		'Verificación de respuestas de API antes de procesarlas en tu aplicación',
	'tool.json-validator.use_case.1':
		'Comprobación de archivos de configuración antes del despliegue para prevenir errores en tiempo de ejecución',
	'tool.json-validator.use_case.2':
		'Validación de datos JSON enviados por usuario en formularios o cargas de archivo',
	'tool.json-validator.use_case.3': 'Depuración de errores de análisis de JSON en tu código',
	'tool.json-validator.use_case.4':
		'Aseguramiento de integridad de datos al transferir JSON entre sistemas',

	'tool.json-minifier.faq.0.question': '¿Qué es la minificación de JSON?',
	'tool.json-minifier.faq.0.answer':
		'La minificación de JSON es el proceso de eliminar todos los caracteres innecesarios de datos JSON sin cambiar su funcionalidad. Esto incluye la eliminación de espacios en blanco, saltos de línea y comentarios para reducir el tamaño del archivo.',
	'tool.json-minifier.faq.1.question': '¿La minificación afecta la funcionalidad de JSON?',
	'tool.json-minifier.faq.1.answer':
		'No. La minificación solo elimina caracteres de formato visual como espacios, tabulaciones y saltos de línea. La estructura de datos real, claves y valores permanecen exactamente igual, manteniendo total cumplimiento de JSON.',
	'tool.json-minifier.faq.2.question': '¿Cuándo debo usar JSON minificado?',
	'tool.json-minifier.faq.2.answer':
		'Usa JSON minificado en entornos de producción, respuestas de API y al transmitir datos sobre redes. Reduce el uso de ancho de banda y acelera la transferencia de datos. Para desarrollo y depuración, usa JSON formateado.',
	'tool.json-minifier.use_case.0':
		'Reducción del tamaño de archivo para respuestas de API para mejorar tiempos de carga',
	'tool.json-minifier.use_case.1':
		'Optimización de archivos de configuración JSON para despliegues de producción',
	'tool.json-minifier.use_case.2':
		'Compresión de datos antes de almacenar en bases de datos o almacenamiento local',
	'tool.json-minifier.use_case.3':
		'Minimización de uso de ancho de banda al transmitir JSON sobre redes',
	'tool.json-minifier.use_case.4':
		'Preparación de archivos JSON para embeber en código HTML o JavaScript',

	'tool.json-to-yaml.faq.0.question': '¿Qué es la conversión de JSON a YAML?',
	'tool.json-to-yaml.faq.0.answer':
		'La conversión de JSON a YAML transforma datos JSON en formato YAML, que es más legible por humanos y comúnmente usado para archivos de configuración. YAML permite comentarios, anclajes y una sintaxis más flexible.',
	'tool.json-to-yaml.faq.1.question': '¿La conversión es sin pérdidas?',
	'tool.json-to-yaml.faq.1.answer':
		'¡Sí! La conversión preserva todos los datos y estructura. JSON y YAML pueden representar las mismas estructuras de datos, por lo que no se pierde información durante el proceso de conversión.',
	'tool.json-to-yaml.use_case.0':
		'Conversión de archivos de configuración JSON a YAML para mejor legibilidad',
	'tool.json-to-yaml.use_case.1':
		'Creación de manifiestos de Kubernetes a partir de definiciones JSON',
	'tool.json-to-yaml.use_case.2':
		'Migración de configuraciones de aplicación de JSON a formato YAML',
	'tool.json-to-yaml.use_case.3':
		'Generación de archivos YAML para configuraciones de tubería CI/CD',

	'tool.xml-to-csv.faq.2.question': '¿Qué tipos de XML funcionan mejor para la conversión CSV?',
	'tool.xml-to-csv.faq.2.answer':
		'XML con elementos repetidos (como múltiples etiquetas <row> o <item>) funcionan mejor. El convertidor detecta automáticamente nombres de elementos y atributos como encabezados de columna.',

	'tool.xml-xpath.faq.2.question': '¿Qué versión de XPath es compatible?',
	'tool.xml-xpath.faq.2.answer':
		'Esta herramienta soporta XPath 1.0, que es la versión más ampliamente implementada. Incluye todos los ejes, funciones y operadores estándar para consultas XML.',

	'tool.xml-xpath.faq.3.question': '¿Puedo probar XPath en XML inválido?',
	'tool.xml-xpath.faq.3.answer':
		'No. XPath requiere XML bien formado. Si tu XML tiene errores de sintaxis, corrígelos primero usando el Validador o Formateador XML antes de ejecutar consultas XPath.',

	'tool.xml-minifier.faq.2.question': '¿La minificación afecta la funcionalidad XML?',
	'tool.xml-minifier.faq.2.answer':
		'No. La minificación XML solo elimina espacios en blanco y comentarios sin cambiar la estructura o datos. El XML minificado permanece completamente válido y funcionalmente idéntico.',

	'tool.json-to-toml.faq.0.question': '¿Qué es la conversión de JSON a TOML?',
	'tool.json-to-toml.faq.0.answer':
		'La conversión de JSON a TOML transforma datos JSON en formato TOML, que está diseñado para archivos de configuración legibles por humanos. TOML usa una sintaxis simple con secciones, pares clave-valor y tablas.',
	'tool.json-to-toml.faq.1.question': '¿Cuándo debo usar TOML en lugar de JSON?',
	'tool.json-to-toml.faq.1.answer':
		'Usa TOML para archivos de configuración que necesiten ser editados manualmente por humanos. La sintaxis de TOML es más limpia e intuitiva para configuraciones, mientras que JSON es mejor para comunicación máquina a máquina.',
	'tool.json-to-toml.use_case.0':
		'Conversión de package.json a pyproject.toml para proyectos Python',
	'tool.json-to-toml.use_case.1':
		'Creación de archivos Cargo.toml a partir de configuraciones JSON',
	'tool.json-to-toml.use_case.2':
		'Migración de configuraciones de aplicación a formato TOML para mejor mantenibilidad',

	'tool.json-to-markdown.faq.0.question': '¿Qué es la conversión de JSON a tabla Markdown?',
	'tool.json-to-markdown.faq.0.answer':
		'Esta herramienta convierte datos de arrays JSON en formato de tabla Markdown, facilitando la visualización de datos estructurados en documentación, archivos README o cualquier plataforma compatible con Markdown.',
	'tool.json-to-markdown.faq.1.question': '¿Qué estructuras de JSON se soportan?',
	'tool.json-to-markdown.faq.1.answer':
		'La herramienta funciona mejor con arrays de objetos. Cada objeto se convierte en una fila de la tabla, y las propiedades de los objetos se convierten en columnas. Los objetos anidados se aplanan usando notación de punto.',
	'tool.json-to-markdown.use_case.0':
		'Creación de tablas de datos para archivos README y documentación',
	'tool.json-to-markdown.use_case.1':
		'Conversión de ejemplos de respuesta de API a tablas de documentación',
	'tool.json-to-markdown.use_case.2':
		'Generación de tablas Markdown a partir de datos de hojas de cálculo exportados como JSON',
	'tool.json-to-markdown.use_case.3':
		'Visualización de opciones de configuración en documentación de proyecto',

	'tool.json-to-csv.faq.0.question': '¿Qué es la conversión de JSON a CSV?',
	'tool.json-to-csv.faq.0.answer':
		'La conversión de JSON a CSV transforma datos JSON estructurados (generalmente un array de objetos) en formato de Valores Separados por Comas plano. Es ideal para importar datos en hojas de cálculo como Excel o Google Sheets.',
	'tool.json-to-csv.faq.1.question': '¿Qué estructuras de JSON funcionan mejor?',
	'tool.json-to-csv.faq.1.answer':
		'La herramienta funciona mejor con un array plano de objetos donde cada objeto tiene las mismas claves. Estas claves se convierten en los encabezados CSV, y los valores se convierten en las filas. Los objetos anidados o arrays generalmente se aplanan.',
	'tool.json-to-csv.use_case.0': 'Exportación de datos de API a Excel para análisis empresarial',
	'tool.json-to-csv.use_case.1':
		'Conversión de exportaciones JSON de base de datos a CSV para importaciones en lote',
	'tool.json-to-csv.use_case.2':
		'Preparación de conjuntos de datos JSON para entrenar modelos de aprendizaje automático en formato CSV',
	'tool.json-to-csv.use_case.3':
		'Generación de datos de informe para aplicaciones de hoja de cálculo',

	'tool.json-jsonpath.faq.0.question': '¿Qué es JSONPath?',
	'tool.json-jsonpath.faq.0.answer':
		'JSONPath es un lenguaje de consulta para JSON que te permite extraer datos específicos de documentos JSON. Es similar a XPath para XML y usa notación de punto e filtros para navegar estructuras JSON.',
	'tool.json-jsonpath.faq.1.question': '¿Cómo funciona la sintaxis de JSONPath?',
	'tool.json-jsonpath.faq.1.answer':
		'JSONPath usa expresiones como $.store.book[*].title para navegar a través de JSON. El $ representa la raíz, . accede a propiedades, [*] selecciona todos los elementos en un array, y varios operadores pueden filtrar y transformar resultados.',
	'tool.json-jsonpath.faq.2.question': '¿Qué puedo hacer con resultados de JSONPath?',
	'tool.json-jsonpath.faq.2.answer':
		'Puedes extraer valores específicos, filtrar arrays, realizar cálculos y transformar datos JSON. JSONPath es útil para pruebas de API, extracción de datos y validación de estructura JSON en aplicaciones.',
	'tool.json-jsonpath.use_case.0': 'Extracción de campos específicos de respuestas de API',
	'tool.json-jsonpath.use_case.1': 'Filtrado y consulta de conjuntos de datos JSON grandes',
	'tool.json-jsonpath.use_case.2': 'Prueba de respuestas de API en pruebas automatizadas',
	'tool.json-jsonpath.use_case.3':
		'Validación de estructura y contenido de JSON en tuberías de datos',

	'tool.json-jmespath.faq.0.question': '¿Qué es JMESPath?',
	'tool.json-jmespath.faq.0.answer':
		'JMESPath es un lenguaje de consulta para JSON que te permite extraer y transformar elementos de documentos JSON. Proporciona capacidades de transformación de datos más avanzadas que JSONPath, incluyendo filtrado, mapeo y funciones de agregación.',
	'tool.json-jmespath.faq.1.question': '¿En qué se diferencia JMESPath de JSONPath?',
	'tool.json-jmespath.faq.1.answer':
		'JMESPath ofrece características de transformación de datos más poderosas como funciones, filtros y expresiones de tubería. Mientras que JSONPath es principalmente para extracción, JMESPath puede remodelar, filtrar y transformar datos JSON en nuevas estructuras.',
	'tool.json-jmespath.faq.2.question': '¿Cuáles son operaciones comunes de JMESPath?',
	'tool.json-jmespath.faq.2.answer':
		'Las operaciones comunes incluyen filtrado con [?condition], selección de campos con {key: value}, ordenamiento con sort_by() y agregación de datos con funciones como length(), sum() y type(). También puedes tubulizar operaciones con | para transformaciones complejas.',
	'tool.json-jmespath.use_case.0':
		'Transformación de respuestas de API para que coincidan con estructuras de datos requeridas',
	'tool.json-jmespath.use_case.1': 'Filtrado y remoldeo de datos de documentos JSON complejos',
	'tool.json-jmespath.use_case.2':
		'Extracción de información específica de estructuras JSON anidadas',
	'tool.json-jmespath.use_case.3': 'Limpieza de respuestas JSON para consumo frontend más simple',

	// JSON Diff
	'tool.json-diff.display_name': 'Diff JSON',
	'tool.json-diff.tagline': 'Compara dos documentos JSON',
	'tool.json-diff.description':
		'Una herramienta poderosa de comparación semántica de JSON. Pega dos documentos JSON para ver instantáneamente las diferencias, ignorando orden de claves y espacios en blanco arbitrarios. Perfecto para depurar cambios de API o verificar actualizaciones de configuración.',
	'tool.json-diff.primary_keyword': 'herramienta diff json',
	'tool.json-diff.meta_title': 'Herramienta de Diff JSON - Compara JSON Online',
	'tool.json-diff.meta_description':
		'Compara dos documentos JSON semánticamente online. Nuestra herramienta diff JSON ignora orden de claves y diferencias de formato para mostrar exactamente qué cambió.',
	'tool.json-diff.operation': 'Compara',
	'tool.json-diff.faq.0.question': '¿Ignora el orden de claves?',
	'tool.json-diff.faq.0.answer':
		'Sí. Nuestro motor de diff analiza la estructura JSON en representaciones normalizadas, lo que significa que {"a": 1, "b": 2} y {"b": 2, "a": 1} se consideran idénticos.',
	'tool.json-diff.faq.1.question': '¿Maneja archivos JSON grandes?',
	'tool.json-diff.faq.1.answer':
		'Sí, la comparación se realiza eficientemente en tu navegador y muestra las adiciones, eliminaciones y modificaciones línea por línea.',
	'tool.json-diff.faq.2.question': '¿Mis datos son seguros?',
	'tool.json-diff.faq.2.answer':
		'Absolutamente. La comparación sucede completamente localmente en tu navegador. Los datos JSON nunca se envían a nuestros servidores.',
	'tool.json-diff.use_case.0':
		'Comparación de respuestas de diferentes versiones de API mapeando regresiones',
	'tool.json-diff.use_case.1':
		'Depuración de cambios de configuración inesperados en archivos de configuración de producción',
	'tool.json-diff.use_case.2':
		'Revisión de conflictos de fusión git que involucran manifiestos o archivos JSON de bloqueo',
	'tool.json-diff.use_case.3':
		'Encontrar discrepancias entre exportaciones de bases de datos de staging y producción',

	// ── FAQ y Casos de Uso de Herramientas XML ──────────────────────────────
	'tool.xml-formatter.faq.0.question': '¿Qué es el formateo XML?',
	'tool.xml-formatter.faq.0.answer':
		'El formateo XML es el proceso de organizar el código XML con la sangría y los saltos de línea adecuados para que sea más legible y fácil de mantener. Esto ayuda a los desarrolladores a comprender la estructura y jerarquía del documento.',
	'tool.xml-formatter.faq.1.question': '¿Puedo personalizar la sangría?',
	'tool.xml-formatter.faq.1.answer':
		'¡Sí! Puede elegir entre 2 espacios, 4 espacios o tabulaciones para la sangría. El formateador preserva su estructura XML mientras aplica su estilo de formateo preferido.',
	'tool.xml-formatter.faq.2.question': '¿El formateador preserva los comentarios?',
	'tool.xml-formatter.faq.2.answer':
		'Sí, el formateador XML preserva todos los comentarios en sus posiciones originales. Solo cambia la sangría y los saltos de línea para mejorar la legibilidad sin afectar el contenido o la estructura.',
	'tool.xml-formatter.use_case.0':
		'Hacer que los archivos XML sean más legibles para documentación y revisiones de código',
	'tool.xml-formatter.use_case.1': 'Limpiar XML minificado proveniente de respuestas web o APIs',
	'tool.xml-formatter.use_case.2': 'Estandarizar el formateo XML en proyectos de equipo',
	'tool.xml-formatter.use_case.3': 'Depurar la estructura XML mejorando la jerarquía visual',
	'tool.xml-formatter.use_case.4':
		'Preparar archivos XML para control de versiones con formato consistente',

	'tool.xml-validator.faq.0.question': '¿Qué verifica la validación XML?',
	'tool.xml-validator.faq.0.answer':
		'La validación XML verifica la buena formación, incluyendo el anidamiento correcto de etiquetas, la correspondencia de etiquetas de apertura/cierre, la sintaxis de atributos válida, la codificación de caracteres correcta y el cumplimiento de las reglas de especificación XML.',
	'tool.xml-validator.faq.1.question':
		'¿Cuál es la diferencia entre XML bien formado y XML válido?',
	'tool.xml-validator.faq.1.answer':
		'Un XML bien formado sigue las reglas de sintaxis básicas pero puede tener problemas estructurales. Un XML válido está bien formado Y cumple con un DTD o XML Schema específico que define la estructura y el contenido permitidos.',
	'tool.xml-validator.faq.2.question': '¿Cómo soluciono los errores de validación XML?',
	'tool.xml-validator.faq.2.answer':
		'El validador muestra números exactos de línea y columna para cada error. Las correcciones comunes incluyen: cerrar etiquetas abiertas, corregir etiquetas mal emparejadas, eliminar atributos duplicados y asegurar una codificación correcta. Haga clic en cualquier error para ver explicaciones detalladas.',
	'tool.xml-validator.use_case.0': 'Validar respuestas de API antes de procesarlas en aplicaciones',
	'tool.xml-validator.use_case.1':
		'Verificar archivos de configuración antes del despliegue para evitar errores',
	'tool.xml-validator.use_case.2': 'Verificar importaciones de datos XML de sistemas de terceros',
	'tool.xml-validator.use_case.3': 'Depurar problemas de análisis XML en entornos de desarrollo',
	'tool.xml-validator.use_case.4':
		'Asegurar la conformidad XML antes de enviarlo a sistemas empresariales',

	'tool.xml-to-json.faq.0.question': '¿Cómo funciona la conversión de XML a JSON?',
	'tool.xml-to-json.faq.0.answer':
		'La conversión mapea elementos XML a objetos JSON, atributos a pares clave-valor y contenido de texto a valores de cadena. Se preservan los espacios de nombres XML y los elementos múltiples con el mismo nombre se convierten en arreglos.',
	'tool.xml-to-json.faq.1.question': '¿Es reversible la conversión?',
	'tool.xml-to-json.faq.1.answer':
		'Principalmente sí, pero algunas características de XML como comentarios, instrucciones de procesamiento y el orden de los atributos pueden perderse. La estructura de datos principal permanece intacta para la conversión de ida y vuelta.',
	'tool.xml-to-json.faq.2.question': '¿Cómo se manejan los atributos XML en JSON?',
	'tool.xml-to-json.faq.2.answer':
		'Los atributos XML se convierten en propiedades JSON con un prefijo "@" por defecto. Esto los distingue de los elementos hijos. Puede personalizar este comportamiento en los ajustes avanzados.',
	'tool.xml-to-json.use_case.0':
		'Convertir respuestas de API SOAP a JSON para aplicaciones modernas',
	'tool.xml-to-json.use_case.1':
		'Procesar archivos de configuración XML en aplicaciones JavaScript',
	'tool.xml-to-json.use_case.2': 'Migrar datos XML heredados a sistemas modernos basados en JSON',
	'tool.xml-to-json.use_case.3': 'Extraer datos de sitemaps XML para análisis',
	'tool.xml-to-json.use_case.4':
		'Transformar feeds RSS en JSON para consumo de aplicaciones móviles',

	'tool.json-to-xml.faq.0.question': '¿Qué es la conversión de JSON a XML?',
	'tool.json-to-xml.faq.0.answer':
		'La conversión de JSON a XML transforma datos JSON al formato XML, mapeando objetos a elementos, arreglos a elementos repetidos y valores primitivos a contenido de texto. Esto permite la compatibilidad con sistemas que requieren entrada XML.',
	'tool.json-to-xml.faq.1.question': '¿Cómo se manejan los arreglos en la conversión?',
	'tool.json-to-xml.faq.1.answer':
		'Los arreglos JSON se convierten en múltiples elementos XML con el mismo nombre de etiqueta. Puede configurar si usar elementos contenedores (wrappers) o repetir la misma etiqueta de elemento para cada ítem del arreglo.',
	'tool.json-to-xml.faq.2.question': '¿Cómo maneja el convertidor los caracteres especiales?',
	'tool.json-to-xml.faq.2.answer':
		'Los caracteres especiales se escapan automáticamente según los estándares XML. Esto incluye &, <, >, ", y \', que se convierten en sus entidades XML correspondientes para garantizar una salida XML válida.',
	'tool.json-to-xml.use_case.0': 'Crear sitemaps XML a partir de datos JSON',
	'tool.json-to-xml.use_case.1': 'Generar feeds RSS/Atom a partir de contenido JSON',
	'tool.json-to-xml.use_case.2':
		'Convertir respuestas de API para sistemas heredados que requieren XML',
	'tool.json-to-xml.use_case.3':
		'Crear archivos de configuración para aplicaciones Java a partir de JSON',
	'tool.json-to-xml.use_case.4': 'Generar sobres SOAP a partir de payloads JSON para servicios web',

	'tool.xml-to-yaml.faq.0.question': '¿Por qué convertir XML a YAML?',
	'tool.xml-to-yaml.faq.0.answer':
		'YAML es más legible por humanos y más fácil de editar manualmente que XML. Se usa comúnmente para archivos de configuración, documentos e intercambio de datos donde la legibilidad es importante.',
	'tool.xml-to-yaml.faq.1.question': '¿Cómo se manejan los atributos XML?',
	'tool.xml-to-yaml.faq.1.answer':
		'Los atributos XML se convierten típicamente en pares clave-valor dentro del elemento YAML. Puede configurar el uso de una sintaxis especial o tratarlos como propiedades regulares.',
	'tool.xml-to-yaml.faq.2.question': '¿Se puede convertir XML anidado complejo a YAML?',
	'tool.xml-to-yaml.faq.2.answer':
		'¡Sí! El convertidor maneja anidamiento arbitrariamente profundo, contenido mixto y estructuras XML complejas. El YAML resultante mantiene la misma jerarquía de datos en un formato más legible.',
	'tool.xml-to-yaml.use_case.0': 'Convertir configuraciones XML de Spring Framework a YAML',
	'tool.xml-to-yaml.use_case.1':
		'Migrar scripts de compilación de formato XML a un formato YAML más legible',
	'tool.xml-to-yaml.use_case.2': 'Crear recursos de Kubernetes a partir de plantillas XML',
	'tool.xml-to-yaml.use_case.3': 'Procesar documentos XML para fines de documentación',
	'tool.xml-to-yaml.use_case.4': 'Transformar datos XML para playbooks de Ansible y automatización',

	'tool.xml-to-csv.faq.0.question': '¿Cómo funciona la conversión de XML a CSV?',
	'tool.xml-to-csv.faq.0.answer':
		'El convertidor extrae elementos repetidos del XML y crea filas en CSV, convirtiendo los atributos de los elementos y los elementos hijos en columnas. Puede seleccionar qué elementos convertir y personalizar el formato de salida.',
	'tool.xml-to-csv.faq.1.question':
		'¿Qué estructuras XML funcionan mejor para la conversión a CSV?',
	'tool.xml-to-csv.faq.1.answer':
		'El XML con elementos repetidos de tipo "registro" funciona mejor. Cada elemento repetido se convierte en una fila y sus propiedades en columnas. Las estructuras profundamente anidadas pueden necesitar ser aplanadas.',
	'tool.xml-to-csv.use_case.0': 'Extraer datos de informes XML a un formato de hoja de cálculo',
	'tool.xml-to-csv.use_case.1': 'Convertir exportaciones XML de bases de datos a CSV para análisis',
	'tool.xml-to-csv.use_case.2': 'Procesar logs XML para el análisis de datos en Excel',
	'tool.xml-to-csv.use_case.3':
		'Migrar catálogos de productos de formato XML a CSV para plataformas de e-commerce',
	'tool.xml-to-csv.use_case.4': 'Analizar respuestas de API XML convirtiéndolas a formato tabular',

	'tool.xml-minifier.faq.0.question': '¿Qué es la minificación XML?',
	'tool.xml-minifier.faq.0.answer':
		'La minificación XML elimina todos los caracteres innecesarios del XML sin cambiar su funcionalidad. Esto incluye espacios en blanco, saltos de línea y comentarios para reducir el tamaño del archivo.',
	'tool.xml-minifier.faq.1.question': '¿Afecta la minificación al procesamiento XML?',
	'tool.xml-minifier.faq.1.answer':
		'No. Los analizadores XML ignoran los espacios en blanco entre etiquetas por defecto, por lo que el XML minificado se procesa de forma idéntica al XML formateado pero se carga más rápido gracias a su tamaño reducido.',
	'tool.xml-minifier.use_case.0':
		'Reducir el tamaño de los archivos para respuestas de API más rápidas',
	'tool.xml-minifier.use_case.1': 'Optimizar archivos XML para entornos de producción',
	'tool.xml-minifier.use_case.2': 'Minimizar el uso de ancho de banda al transmitir datos XML',
	'tool.xml-minifier.use_case.3': 'Preparar archivos XML para incrustar en otros documentos',

	'tool.xml-xpath.faq.0.question': '¿Qué es XPath?',
	'tool.xml-xpath.faq.0.answer':
		'XPath es un lenguaje de consulta para seleccionar nodos de documentos XML. Utiliza expresiones de ruta para navegar a través de elementos y atributos, de manera similar a las rutas del sistema de archivos.',
	'tool.xml-xpath.faq.1.question': '¿Qué pueden hacer las expresiones XPath?',
	'tool.xml-xpath.faq.1.answer':
		'XPath puede seleccionar elementos por nombre, valor de atributo, posición o contenido. Soporta condiciones complejas, funciones para la manipulación de texto y operaciones matemáticas para consultas avanzadas.',
	'tool.xml-xpath.use_case.0': 'Extraer datos específicos de documentos XML de gran tamaño',
	'tool.xml-xpath.use_case.1': 'Probar datos XML en suites de pruebas automatizadas',
	'tool.xml-xpath.use_case.2': 'Transformar datos XML utilizando plantillas XSLT',
	'tool.xml-xpath.use_case.3': 'Validar la estructura y el contenido de XML de forma programática',
	'tool.csv-to-sql.display_name': 'CSV → SQL',
	'tool.csv-to-sql.tagline': 'Convertir datos CSV a declaraciones SQL INSERT',
	'tool.csv-to-sql.description':
		'Convierta filas CSV a declaraciones SQL INSERT con inferencia de tipos para números y booleanos. Nombre de tabla y tamaño de lote configurables.',
	'tool.csv-to-sql.primary_keyword': 'csv to sql',
	'tool.csv-to-sql.meta_title': 'Convertidor CSV a SQL — fmtly.dev',
	'tool.csv-to-sql.meta_description':
		'Genere declaraciones SQL INSERT a partir de datos CSV en su navegador. No se suben datos.',
	'tool.csv-to-sql.operation': 'A SQL',
	'tool.csv-to-sql.faq.0.question': '¿Cómo funciona la inferencia de tipos?',
	'tool.csv-to-sql.faq.0.answer':
		'El convertidor detecta automáticamente números y valores booleanos (true/false). Todo lo demás se escapa de forma segura como literales de cadena usando comillas simples.',
	'tool.csv-to-sql.use_case.0':
		'Generar seeds SQL a partir de datos de hojas de cálculo para migraciones de bases de datos',
	'tool.csv-to-sql.use_case.1':
		'Importar rápidamente datos CSV a bases de datos SQL sin escribir scripts personalizados',
	'tool.json-schema-generator.display_name': 'Generador de JSON Schema',
	'tool.json-schema-generator.tagline': 'Inferir JSON Schema a partir de ejemplos JSON',
	'tool.json-schema-generator.description':
		'Genere un JSON Schema Draft 2020-12 desde cualquier documento JSON. Detecta automáticamente estructuras anidadas, arrays, campos obligatorios, tipos y posibles enum.',
	'tool.json-schema-generator.primary_keyword': 'generador json schema',
	'tool.json-schema-generator.meta_title': 'Generador de JSON Schema — fmtly.dev',
	'tool.json-schema-generator.meta_description':
		'Infiere JSON Schema desde JSON en tu navegador. Detecta tipos anidados, campos required y candidatos enum sin subir datos.',
	'tool.json-schema-generator.operation': 'Generar Esquema',
	'tool.json-schema-generator.faq.0.question': '¿Cómo se detectan los campos obligatorios?',
	'tool.json-schema-generator.faq.0.answer':
		'En objetos, las claves presentes en todos los registros observados se marcan como required. Las que faltan en alguno se consideran opcionales.',
	'tool.json-schema-generator.faq.1.question': '¿Cómo se infieren los enum?',
	'tool.json-schema-generator.faq.1.answer':
		'Si un campo tiene un conjunto pequeño y repetido de valores escalares, el generador agrega un enum para representar esas categorías.',
	'tool.json-schema-generator.faq.2.question': '¿Qué versión de JSON Schema se genera?',
	'tool.json-schema-generator.faq.2.answer':
		'La salida incluye la URI $schema de Draft 2020-12 y usa palabras clave estándar como type, properties, required, anyOf e items.',
	'tool.json-schema-generator.use_case.0':
		'Crear contratos de API iniciales a partir de payloads reales',
	'tool.json-schema-generator.use_case.1':
		'Preparar esquemas de validación para fixtures y datos de prueba',
	'tool.json-schema-generator.use_case.2':
		'Documentar rápidamente formatos JSON anidados para integraciones',
	'tool.json-schema-generator.use_case.3':
		'Generar un esquema base antes de refinar restricciones manualmente',
	'tool.json-to-go.display_name': 'JSON a Structs de Go',
	'tool.json-to-go.tagline': 'Genera structs de Go limpios a partir de JSON',
	'tool.json-to-go.description':
		'Convierte cualquier payload JSON en definiciones de structs de Go con inferencia de tipos anidados, etiquetas json y manejo de campos opcionales. Rápido, privado y 100% en el navegador.',
	'tool.json-to-go.primary_keyword': 'json a structs go',
	'tool.json-to-go.meta_title': 'Generador JSON a Structs de Go — fmtly.dev',
	'tool.json-to-go.meta_description':
		'Genera structs de Go desde JSON en tu navegador al instante. Incluye structs anidados, etiquetas json e inferencia de campos opcionales. Tus datos no salen del dispositivo.',
	'tool.json-to-go.operation': 'Convertir',
	'tool.json-to-go.faq.0.question': '¿Cómo se mapean los tipos JSON a tipos de Go?',
	'tool.json-to-go.faq.0.answer':
		'Las cadenas se convierten en string, los booleanos en bool, los enteros en int64, los decimales en float64, los arrays en slices y los objetos anidados en structs generados.',
	'tool.json-to-go.faq.1.question': '¿Añade automáticamente etiquetas json y omitempty?',
	'tool.json-to-go.faq.1.answer':
		'Sí. Los campos incluyen etiquetas json, y cuando un campo parece opcional o nullable en la muestra, la salida puede usar omitempty y tipos puntero adecuados.',
	'tool.json-to-go.faq.2.question': '¿Puedo usar el resultado directamente en proyectos Go?',
	'tool.json-to-go.faq.2.answer':
		'Sí. El código generado está pensado para usarse directamente en bases de código Go, especialmente para clientes API, payloads de webhooks y modelos de configuración.',
	'tool.json-to-go.use_case.0':
		'Arrancar modelos de API en Go desde payloads reales de entrada y salida',
	'tool.json-to-go.use_case.1':
		'Generar tipos estructurados para integraciones por eventos y webhooks',
	'tool.json-to-go.use_case.2':
		'Reducir escritura manual de modelos al explorar esquemas JSON desconocidos',
	'tool.json-to-go.use_case.3':
		'Acelerar prototipos backend con andamiaje de tipos Go listo para producción',
	'tool.json-to-typescript.display_name': 'JSON a Tipos TypeScript',
	'tool.json-to-typescript.tagline':
		'Genera interfaces y tipos TypeScript precisos a partir de JSON',
	'tool.json-to-typescript.description':
		'Convierte muestras JSON en interfaces y tipos union de TypeScript con inferencia anidada, detección de campos opcionales y tipado seguro con null. Rápido, privado y 100% en el navegador.',
	'tool.json-to-typescript.primary_keyword': 'json a tipos typescript',
	'tool.json-to-typescript.meta_title': 'Generador JSON a Tipos TypeScript — fmtly.dev',
	'tool.json-to-typescript.meta_description':
		'Genera interfaces y tipos TypeScript desde JSON en tu navegador. Soporta objetos anidados, arrays, unions y campos opcionales. Tus datos no salen del dispositivo.',
	'tool.json-to-typescript.operation': 'Convertir',
	'tool.json-to-typescript.faq.0.question':
		'¿Cómo mapea la herramienta los valores JSON a tipos de TypeScript?',
	'tool.json-to-typescript.faq.0.answer':
		'Las cadenas se convierten en string, los números en number, los booleanos en boolean, los arrays en arrays tipados y los objetos anidados en interfaces generadas. Los valores mixtos se representan como union types.',
	'tool.json-to-typescript.faq.1.question': '¿Cómo se manejan los campos opcionales y nullable?',
	'tool.json-to-typescript.faq.1.answer':
		'Si una clave falta en parte de las muestras, se marca como opcional con ?. Si un valor puede ser null, el tipo generado incluye una unión con null.',
	'tool.json-to-typescript.faq.2.question':
		'¿Puedo usar la salida generada directamente en mi proyecto?',
	'tool.json-to-typescript.faq.2.answer':
		'Sí. La salida está pensada como base práctica para modelos de apps y APIs. Puedes pegarla directamente en tu código y ajustar convenciones de nombres cuando lo necesites.',
	'tool.json-to-typescript.use_case.0':
		'Arrancar modelos frontend y backend desde payloads reales de API',
	'tool.json-to-typescript.use_case.1':
		'Generar contratos tipados para SDKs e integraciones webhook',
	'tool.json-to-typescript.use_case.2':
		'Reducir redacción manual de interfaces en JSON profundamente anidados',
	'tool.json-to-typescript.use_case.3':
		'Acelerar refactors derivando tipos estrictos desde datos de ejemplo',
	'tool.json-to-rust-serde.display_name': 'JSON a Rust (Serde)',
	'tool.json-to-rust-serde.tagline':
		'Genera structs Rust listos para serde con serde(rename) y Option desde JSON',
	'tool.json-to-rust-serde.description':
		'Convierte muestras JSON en structs Rust con derive de Serde, renombres de claves JSON, Option para campos opcionales o null, Vec para arrays y serde_json::Value para datos heterogéneos. Las formas anidadas se deduplican como en el generador Go. Entradas grandes usan Web Worker; todo en el navegador.',
	'tool.json-to-rust-serde.primary_keyword': 'json a rust serde structs',
	'tool.json-to-rust-serde.meta_title': 'JSON a structs Rust Serde — fmtly.dev',
	'tool.json-to-rust-serde.meta_description':
		'Genera structs Rust con serde desde JSON en el navegador. rename, Option, Vec, anidación. Privado, rápido, Worker para JSON grande.',
	'tool.json-to-rust-serde.operation': 'Convertir',
	'tool.json-to-rust-serde.faq.0.question': '¿Cómo se mapean los tipos JSON a Rust?',
	'tool.json-to-rust-serde.faq.0.answer':
		'Las cadenas a String, booleanos a bool, enteros a i64, números con decimales a f64, arrays a Vec, objetos a structs generados y formas mixtas o desconocidas a serde_json::Value.',
	'tool.json-to-rust-serde.faq.1.question': '¿Por qué serde(rename) en cada campo?',
	'tool.json-to-rust-serde.faq.1.answer':
		'Los campos usan snake_case idiomático en Rust mientras el JSON suele ser camelCase. El rename explícito alinea serde con las claves originales sin una política global que falle en casos raros.',
	'tool.json-to-rust-serde.faq.2.question': '¿Necesito serde y serde_json en Cargo.toml?',
	'tool.json-to-rust-serde.faq.2.answer':
		'Sí. Añade serde con la feature derive y serde_json para tipos Value, p. ej. serde = { version = "1", features = ["derive"] } y serde_json = "1".',
	'tool.json-to-rust-serde.use_case.0':
		'Arrancar modelos de API en Rust desde cuerpos JSON reales de petición y respuesta',
	'tool.json-to-rust-serde.use_case.1':
		'Crear modelos serde para webhooks, colas y CLIs a partir de payloads de ejemplo',
	'tool.json-to-rust-serde.use_case.2':
		'Comparar con salida Go o TypeScript del mismo JSON en fmtly',
	'tool.json-to-rust-serde.use_case.3':
		'Prototipar esquemas serde antes de escribir structs a mano',
	'ui.json_to_rust.tab_label': 'Rust',
	'tool.json-flatten.display_name': 'Aplanador / Desaplanador JSON',
	'tool.json-flatten.tagline': 'Aplana rutas JSON anidadas y restáuralas al instante',
	'tool.json-flatten.description':
		'Convierte JSON profundamente anidado en objetos planos basados en rutas y vuelve a reconstruirlo en la misma herramienta. Soporta arrays, claves escapadas y separadores personalizados.',
	'tool.json-flatten.primary_keyword': 'aplanador json desaplanador',
	'tool.json-flatten.meta_title': 'Aplanador / Desaplanador JSON — fmtly.dev',
	'tool.json-flatten.meta_description':
		'Aplana JSON anidado en mapas de claves por ruta y desaplánalo de vuelta a su estructura original. Compatible con arrays y separadores personalizados. 100% en el navegador.',
	'tool.json-flatten.operation': 'Aplanar y Desaplanar',
	'tool.json-flatten.faq.0.question': '¿Cómo se representan los arrays en la salida aplanada?',
	'tool.json-flatten.faq.0.answer':
		'Los elementos de arrays usan índices entre corchetes en la ruta, por ejemplo users[0].email o matrix[2][1], para poder reconstruir la estructura sin ambigüedad.',
	'tool.json-flatten.faq.1.question': '¿Qué pasa si las claves ya contienen puntos o corchetes?',
	'tool.json-flatten.faq.1.answer':
		'Los caracteres especiales de las claves se escapan al aplanar. El modo desaplanar interpreta esos escapes y recupera las claves originales de forma segura.',
	'tool.json-flatten.faq.2.question':
		'¿Puedo alternar entre aplanar y desaplanar en la misma herramienta?',
	'tool.json-flatten.faq.2.answer':
		'Sí. Con el selector de modo puedes aplanar JSON anidado o revertir mapas de rutas planas a JSON anidado.',
	'tool.json-flatten.use_case.0':
		'Preparar diccionarios i18n y configuraciones como mapas de claves planas',
	'tool.json-flatten.use_case.1':
		'Normalizar fixtures de API anidados para edición tipo hoja de cálculo',
	'tool.json-flatten.use_case.2':
		'Reconstruir estructuras anidadas a partir de claves estilo variables de entorno',
	'tool.json-flatten.use_case.3':
		'Depurar cambios por ruta en documentos JSON grandes antes de desplegar',
	'tool.json-patch.display_name': 'JSON Patch Builder',
	'tool.json-patch.tagline': 'Genera y aplica operaciones JSON Patch RFC 6902 al instante',
	'tool.json-patch.description':
		'Genera operaciones JSON Patch RFC 6902 comparando un documento base y uno destino, o aplica un array patch sobre un JSON base. Todo se ejecuta localmente en tu navegador.',
	'tool.json-patch.primary_keyword': 'json patch builder',
	'tool.json-patch.meta_title': 'JSON Patch Builder (RFC 6902) — fmtly.dev',
	'tool.json-patch.meta_description':
		'Genera operaciones JSON Patch desde dos documentos JSON o aplica parches RFC 6902 en tu navegador al instante. Rápido, privado y sin cargas.',
	'tool.json-patch.operation': 'Patch',
	'tool.json-patch.faq.0.question': '¿Qué es JSON Patch (RFC 6902)?',
	'tool.json-patch.faq.0.answer':
		'JSON Patch es un formato estándar para describir cambios como operaciones add, remove o replace usando rutas JSON Pointer.',
	'tool.json-patch.faq.1.question': '¿Cómo funciona el modo Generar?',
	'tool.json-patch.faq.1.answer':
		'Pega el JSON base en el panel de entrada y el JSON destino en el panel lateral. La herramienta calcula las operaciones necesarias para transformar base en destino.',
	'tool.json-patch.faq.2.question': '¿Cómo funciona el modo Aplicar?',
	'tool.json-patch.faq.2.answer':
		'Pega el JSON base en el panel de entrada y un array JSON Patch válido en el panel lateral. La salida muestra el JSON resultante tras aplicar el patch.',
	'tool.json-patch.use_case.0':
		'Versionar cambios de payload API como operaciones patch deterministas',
	'tool.json-patch.use_case.1': 'Aplicar actualizaciones de documentos en flujos de prueba',
	'tool.json-patch.use_case.2': 'Depurar fallos de integración reproduciendo secuencias patch',
	'tool.json-patch.use_case.3': 'Revisar cambios JSON estructurados más allá del diff textual',
	'tool.json-schema-validate.display_name': 'Validador de Esquema JSON',
	'tool.json-schema-validate.tagline': 'Valida JSON contra un esquema proporcionado',
	'tool.json-schema-validate.description':
		'Valida payloads JSON frente a JSON Schema Draft-07 o Draft 2020-12. Obtén errores por ruta con mapeo a línea y columna para corregir campos inválidos más rápido.',
	'tool.json-schema-validate.primary_keyword': 'validador esquema json',
	'tool.json-schema-validate.meta_title': 'Validador de Esquema JSON — fmtly.dev',
	'tool.json-schema-validate.meta_description':
		'Valida JSON contra JSON Schema Draft-07 y 2020-12 en tu navegador. Incluye anotaciones de error por ruta, línea y columna.',
	'tool.json-schema-validate.operation': 'Validar Esquema',
	'tool.json-schema-validate.faq.0.question': '¿Qué borradores de esquema admite?',
	'tool.json-schema-validate.faq.0.answer':
		'Admite JSON Schema Draft-07 y Draft 2020-12. El borrador se detecta automáticamente desde la URI $schema.',
	'tool.json-schema-validate.faq.1.question': '¿Cómo se mapean los errores al JSON de entrada?',
	'tool.json-schema-validate.faq.1.answer':
		'Cada error incluye una ruta JSON Pointer y se asigna a la línea y columna correspondientes dentro del JSON de entrada.',
	'tool.json-schema-validate.faq.2.question': '¿Qué pasa si el esquema es inválido?',
	'tool.json-schema-validate.faq.2.answer':
		'Si el esquema no puede parsearse o compilarse, la herramienta muestra errores del esquema por separado de los errores de validación de datos.',
	'tool.json-schema-validate.use_case.0':
		'Validar payloads de API de entrada y salida contra esquemas de contrato',
	'tool.json-schema-validate.use_case.1':
		'Depurar payloads fallidos de webhooks con feedback por ruta',
	'tool.json-schema-validate.use_case.2':
		'Comprobar fixtures y mocks contra restricciones estrictas de esquema',
	'tool.json-schema-validate.use_case.3': 'Verificar migraciones de Draft-07 a Draft 2020-12',
	'tool.text-word-character-counter.display_name': 'Contador de Palabras y Caracteres',
	'tool.text-word-character-counter.tagline':
		'Cuenta palabras, caracteres y tiempo de lectura al instante',
	'tool.text-word-character-counter.description':
		'Cuenta palabras, caracteres, frases, párrafos y tiempo de lectura estimado en cualquier texto. Rápido, privado y 100% en el navegador.',
	'tool.text-word-character-counter.primary_keyword': 'contador palabras caracteres',
	'tool.text-word-character-counter.meta_title': 'Contador de Palabras y Caracteres — fmtly.dev',
	'tool.text-word-character-counter.meta_description':
		'Contador gratuito de palabras y caracteres con métricas de frases, párrafos y tiempo de lectura. Funciona completamente en tu navegador.',
	'tool.text-word-character-counter.operation': 'Contar Texto',
	'tool.text-word-character-counter.faq.0.question': '¿Cómo se cuentan las palabras?',
	'tool.text-word-character-counter.faq.0.answer':
		'Las palabras se cuentan por grupos de letras y números, incluyendo apóstrofes y guiones comunes.',
	'tool.text-word-character-counter.faq.1.question': '¿Cómo se estima el tiempo de lectura?',
	'tool.text-word-character-counter.faq.1.answer':
		'El tiempo de lectura se calcula con una media de 200 palabras por minuto y se redondea hacia arriba.',
	'tool.text-word-character-counter.faq.2.question': '¿Mi texto sale de mi dispositivo?',
	'tool.text-word-character-counter.faq.2.answer':
		'No. El conteo y análisis se realizan localmente en tu navegador, sin subir texto al servidor.',
	'tool.text-word-character-counter.use_case.0':
		'Revisar la longitud de artículos y documentación antes de publicar',
	'tool.text-word-character-counter.use_case.1':
		'Optimizar textos de UI y prompts según límites de caracteres',
	'tool.text-word-character-counter.use_case.2':
		'Estimar tiempo de lectura para posts, docs y notas de versión',
	'tool.text-word-character-counter.use_case.3':
		'Comparar borradores con métricas objetivas de longitud',
	'tool.text-lorem-ipsum-generator.display_name': 'Generador Lorem Ipsum',
	'tool.text-lorem-ipsum-generator.tagline':
		'Genera texto de relleno por párrafos, frases o palabras con control de semilla',
	'tool.text-lorem-ipsum-generator.description':
		'Genera texto Lorem Ipsum determinista para maquetas, vistas previas de UI y pruebas de contenido. Controla cantidad de párrafos/frases/palabras, semilla y salida en texto plano o HTML directamente en el navegador.',
	'tool.text-lorem-ipsum-generator.primary_keyword': 'generador lorem ipsum',
	'tool.text-lorem-ipsum-generator.meta_title': 'Generador Lorem Ipsum — fmtly.dev',
	'tool.text-lorem-ipsum-generator.meta_description':
		'Generador Lorem Ipsum gratuito con modos por párrafo, frase o palabra, salida con semilla y exportación en texto plano/HTML. Rápido, privado y 100% en el navegador.',
	'tool.text-lorem-ipsum-generator.operation': 'Generar Lorem Ipsum',
	'tool.text-lorem-ipsum-generator.faq.0.question':
		'¿Puedo generar siempre el mismo texto con la misma configuración?',
	'tool.text-lorem-ipsum-generator.faq.0.answer':
		'Sí. Si mantienes la misma semilla y opciones, obtendrás exactamente la misma salida.',
	'tool.text-lorem-ipsum-generator.faq.1.question':
		'¿Puedo obtener salida HTML en lugar de texto plano?',
	'tool.text-lorem-ipsum-generator.faq.1.answer':
		'Sí. Cambia el formato de salida a HTML para generar párrafos listos para usar en prototipos.',
	'tool.text-lorem-ipsum-generator.faq.2.question': '¿El texto se genera localmente?',
	'tool.text-lorem-ipsum-generator.faq.2.answer':
		'Sí. La generación se ejecuta completamente en tu navegador y no se envía texto al servidor.',
	'tool.text-lorem-ipsum-generator.use_case.0':
		'Rellenar wireframes y mocks de UI con texto de ejemplo realista',
	'tool.text-lorem-ipsum-generator.use_case.1':
		'Probar tipografía, espaciado y desbordes en layouts responsivos',
	'tool.text-lorem-ipsum-generator.use_case.2':
		'Crear fixtures reproducibles con semilla para snapshots y pruebas visuales de frontend',
	'tool.text-lorem-ipsum-generator.use_case.3':
		'Generar contenido de relleno en texto plano o HTML para demos de CMS',
	'tool.text-markdown-to-html.display_name': 'Markdown a HTML',
	'tool.text-markdown-to-html.tagline':
		'Convierte Markdown en HTML listo para producción con vista previa en vivo',
	'tool.text-markdown-to-html.description':
		'Convierte Markdown a HTML limpio con vista previa en vivo, tablas GFM, resaltado de código en bloques y controles de seguridad para enlaces e imágenes. Todo se ejecuta localmente en tu navegador.',
	'tool.text-markdown-to-html.primary_keyword': 'convertidor markdown a html',
	'tool.text-markdown-to-html.meta_title':
		'Convertidor Markdown a HTML — Vista previa en vivo | fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Convierte Markdown a HTML con vista previa en vivo, soporte de tablas GFM y bloques de código resaltados. Rápido, privado y 100% en el navegador.',
	'tool.text-markdown-to-html.operation': 'Convertir Markdown',
	'tool.text-markdown-to-html.faq.0.question':
		'¿Este conversor admite tablas de GitHub Flavored Markdown (GFM)?',
	'tool.text-markdown-to-html.faq.0.answer':
		'Sí. La sintaxis de tablas GFM está soportada y puedes activarla o desactivarla en el panel de opciones.',
	'tool.text-markdown-to-html.faq.1.question':
		'¿Se resaltan automáticamente los bloques de código fenced?',
	'tool.text-markdown-to-html.faq.1.answer':
		'Sí. La herramienta resalta los bloques de código fenced y conserva las clases de lenguaje en el HTML generado.',
	'tool.text-markdown-to-html.faq.2.question':
		'¿Cómo se manejan enlaces inseguros o bloques de HTML sin procesar?',
	'tool.text-markdown-to-html.faq.2.answer':
		'Se eliminan protocolos inseguros en enlaces e imágenes. El HTML sin procesar se escapa por defecto y puedes habilitarlo desde opciones avanzadas.',
	'tool.text-markdown-to-html.use_case.0':
		'Preparar contenido de README y documentación para generadores de sitios estáticos',
	'tool.text-markdown-to-html.use_case.1':
		'Revisar la salida Markdown antes de publicar release notes o changelogs',
	'tool.text-markdown-to-html.use_case.2':
		'Generar fragmentos HTML saneados para editores CMS y bases de conocimiento',
	'tool.text-markdown-to-html.use_case.3':
		'Convertir tutoriales técnicos con código en HTML embebible',
	'tool.text-string-case-converter.display_name': 'Convertidor de Formato de Texto',
	'tool.text-string-case-converter.tagline':
		'Convierte texto entre camelCase, PascalCase, snake_case, kebab-case y más',
	'tool.text-string-case-converter.description':
		'Convierte texto al instante entre camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case y formato de oración. Rápido, privado y 100% en el navegador.',
	'tool.text-string-case-converter.primary_keyword': 'convertidor string case',
	'tool.text-string-case-converter.meta_title': 'Convertidor de Formato de Texto — fmtly.dev',
	'tool.text-string-case-converter.meta_description':
		'Convertidor gratuito de formato de texto para camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case y formato de oración.',
	'tool.text-string-case-converter.operation': 'Convertir Formato',
	'tool.text-string-case-converter.faq.0.question': '¿Qué estilos de nombres admite?',
	'tool.text-string-case-converter.faq.0.answer':
		'La herramienta admite camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case y formato de oración en una sola vista.',
	'tool.text-string-case-converter.faq.1.question':
		'¿Puede procesar entradas mixtas con camelCase, guiones bajos y guiones?',
	'tool.text-string-case-converter.faq.1.answer':
		'Sí. Primero tokeniza delimitadores mixtos y mayúsculas/minúsculas existentes, luego convierte de forma consistente a cada estilo objetivo.',
	'tool.text-string-case-converter.faq.2.question':
		'¿La conversión se hace localmente en mi dispositivo?',
	'tool.text-string-case-converter.faq.2.answer':
		'Sí. Toda la conversión se ejecuta en tu navegador y no se envía texto al servidor.',
	'tool.text-string-case-converter.use_case.0':
		'Normalizar campos de API y claves de configuración entre distintas convenciones',
	'tool.text-string-case-converter.use_case.1':
		'Convertir etiquetas de UI en nombres de variables listos para código',
	'tool.text-string-case-converter.use_case.2':
		'Estandarizar patrones de nombres en documentación, esquemas y ejemplos de payload',
	'tool.text-string-case-converter.use_case.3':
		'Preparar identificadores consistentes para TypeScript, Python, SQL y scripts de shell',
	'tool.text-text-reverser.display_name': 'Inversor de Texto',
	'tool.text-text-reverser.tagline': 'Invierte texto por caracteres, palabras o líneas con un clic',
	'tool.text-text-reverser.description':
		'Invierte texto al instante por caracteres, palabras o líneas. Ideal para transformaciones rápidas de cadenas, depuración de flujos de texto y pruebas de contenido en el navegador.',
	'tool.text-text-reverser.primary_keyword': 'inversor de texto',
	'tool.text-text-reverser.meta_title': 'Inversor de Texto — fmtly.dev',
	'tool.text-text-reverser.meta_description':
		'Inversor de texto gratuito que invierte texto por caracteres, palabras o líneas al instante. Rápido, privado y 100% en el navegador.',
	'tool.text-text-reverser.operation': 'Invertir Texto',
	'tool.text-text-reverser.faq.0.question': '¿Qué modos de inversión están disponibles?',
	'tool.text-text-reverser.faq.0.answer':
		'Puedes invertir por caracteres individuales, por palabras o por líneas completas. Cada modo se muestra en una salida separada.',
	'tool.text-text-reverser.faq.1.question':
		'¿El modo por palabras conserva espacios y tabulaciones?',
	'tool.text-text-reverser.faq.1.answer':
		'Sí. El modo por palabras conserva la estructura de espacios mientras invierte el orden de tokens.',
	'tool.text-text-reverser.faq.2.question': '¿Mi texto permanece en mi dispositivo?',
	'tool.text-text-reverser.faq.2.answer':
		'Sí. La inversión se ejecuta localmente en tu navegador y no se sube texto al servidor.',
	'tool.text-text-reverser.use_case.0':
		'Generar cadenas espejadas para probar parsers y tokenizadores',
	'tool.text-text-reverser.use_case.1': 'Reordenar notas multilinea invirtiendo el orden de líneas',
	'tool.text-text-reverser.use_case.2':
		'Validar lógica de separación de palabras con salida que preserva espacios',
	'tool.text-text-reverser.use_case.3': 'Crear variantes de texto para experimentos de contenido',
	'tool.text-duplicate-line-remover.display_name': 'Eliminador de Líneas Duplicadas',
	'tool.text-duplicate-line-remover.tagline':
		'Elimina líneas duplicadas preservando el orden de primera ocurrencia',
	'tool.text-duplicate-line-remover.description':
		'Elimina líneas duplicadas del texto mientras preserva la primera ocurrencia de cada línea. Ideal para limpiar registros, deduplicar listas y preparar conjuntos de datos únicos en tu navegador.',
	'tool.text-duplicate-line-remover.primary_keyword': 'eliminador de líneas duplicadas',
	'tool.text-duplicate-line-remover.meta_title': 'Eliminador de Líneas Duplicadas — fmtly.dev',
	'tool.text-duplicate-line-remover.meta_description':
		'Eliminador gratuito de líneas duplicadas que elimina líneas duplicadas preservando el orden de primera ocurrencia. Rápido, privado y 100% en tu navegador.',
	'tool.text-duplicate-line-remover.operation': 'Eliminar Duplicados',
	'tool.text-duplicate-line-remover.faq.0.question': '¿Qué líneas se mantienen como duplicados?',
	'tool.text-duplicate-line-remover.faq.0.answer':
		'Se mantiene la primera ocurrencia de cada línea; las líneas idénticas posteriores se eliminan como duplicados.',
	'tool.text-duplicate-line-remover.faq.1.question':
		'¿Las líneas vacías se tratan como duplicados?',
	'tool.text-duplicate-line-remover.faq.1.answer':
		'Sí. Las líneas vacías son entradas únicas, por lo que múltiples líneas vacías se deduplicarán a una sola línea vacía.',
	'tool.text-duplicate-line-remover.faq.2.question': '¿Mi texto se procesa localmente?',
	'tool.text-duplicate-line-remover.faq.2.answer':
		'Sí. Toda la deduplicación se ejecuta en tu navegador; tu texto nunca deja tu dispositivo.',
	'tool.text-duplicate-line-remover.use_case.0':
		'Limpiar registros de servidor y trazas de aplicación eliminando entradas repetidas',
	'tool.text-duplicate-line-remover.use_case.1':
		'Deduplicar listas de URLs, listas de correos o registros de inventario antes de importar',
	'tool.text-duplicate-line-remover.use_case.2':
		'Preparar listas de palabras únicas para probar vocabulario o modelos de lenguaje',
	'tool.text-duplicate-line-remover.use_case.3':
		'Consolidar valores de configuración o listas de variables de entorno',
	'tool.text-line-sorter.display_name': 'Ordenador de Líneas',
	'tool.text-line-sorter.tagline':
		'Ordena líneas por orden alfabético, numérico, longitud o mezcla con semilla',
	'tool.text-line-sorter.description':
		'Ordena líneas de texto al instante con controles avanzados de mayúsculas/minúsculas, recorte, deduplicación, eliminación de líneas vacías y mezcla determinística por semilla. Todo se ejecuta localmente en tu navegador.',
	'tool.text-line-sorter.primary_keyword': 'ordenador de líneas',
	'tool.text-line-sorter.meta_title': 'Ordenador de Líneas — Ordena texto rápido | fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Ordena líneas alfabéticamente, por número, por longitud o mezcla aleatoria. Incluye deduplicación y filtro de líneas vacías. Rápido, privado y en navegador.',
	'tool.text-line-sorter.operation': 'Ordenar líneas',
	'tool.text-line-sorter.faq.0.question': '¿Qué modos de ordenación incluye?',
	'tool.text-line-sorter.faq.0.answer':
		'Incluye orden alfabético, numérico, por longitud y mezcla aleatoria determinística. También puedes elegir orden ascendente o descendente.',
	'tool.text-line-sorter.faq.1.question':
		'¿Puedo quitar líneas vacías y duplicadas antes de ordenar?',
	'tool.text-line-sorter.faq.1.answer':
		'Sí. Activa eliminación de líneas vacías y deduplicación para normalizar la entrada antes de ordenar.',
	'tool.text-line-sorter.faq.2.question': '¿Funciona bien con archivos grandes?',
	'tool.text-line-sorter.faq.2.answer':
		'Sí. Para entradas mayores de 500KB se usa un Web Worker, así la interfaz sigue fluida y los datos permanecen en tu navegador.',
	'tool.text-line-sorter.use_case.0': 'Normalizar y ordenar logs antes de comparar entornos',
	'tool.text-line-sorter.use_case.1':
		'Preparar listas limpias y ordenadas de dominios, correos, IDs o etiquetas',
	'tool.text-line-sorter.use_case.2':
		'Ordenar notas de versión, changelogs o listas de tareas rápidamente',
	'tool.text-line-sorter.use_case.3':
		'Crear conjuntos de prueba mezclados de forma determinística para QA',
	'tool.text-diff-compare.display_name': 'Diff & Comparar',
	'tool.text-diff-compare.tagline': 'Comparar dos textos lado a lado',
	'tool.text-diff-compare.description':
		'Diff unificado o lado a lado de dos entradas de texto plano con resaltado de cambios a nivel de línea y palabra.',
	'tool.text-diff-compare.primary_keyword': 'diff texto comparar',
	'tool.text-diff-compare.meta_title':
		'Herramienta de Diff y Comparación de Textos - Comparación Lado a Lado',
	'tool.text-diff-compare.meta_description':
		'Compare dos entradas de texto con vista de diff lado a lado o unificada. Resalte cambios a nivel de línea y palabra.',
	'tool.text-diff-compare.operation': 'Comparar dos textos y mostrar diferencias',
	'tool.text-diff-compare.faq.0.question': '¿Qué algoritmos de diff son compatibles?',
	'tool.text-diff-compare.faq.0.answer':
		'Soportamos los algoritmos Myers, Patience y Histogram. Myers es el predeterminado y funciona bien para la mayoría de los casos. Patience es mejor para cambios estructurados, Histogram es más rápido para archivos grandes.',
	'tool.text-diff-compare.faq.1.question':
		'¿Puedo ignorar espacios en blanco o diferencias de mayúsculas/minúsculas?',
	'tool.text-diff-compare.faq.1.answer':
		'Sí, puede configurar el diff para ignorar cambios de espacios en blanco, diferencias de mayúsculas/minúsculas y líneas vacías usando el panel de opciones.',
	'tool.text-diff-compare.faq.2.question': '¿Qué formatos de salida están disponibles?',
	'tool.text-diff-compare.faq.2.answer':
		'Puede ver diffs en modo lado a lado, formato unificado o inline con el editor Monaco. El diff unificado se puede descargar como un archivo .diff.',
	'tool.text-diff-compare.use_case.0': 'Comparar versiones de código antes de commitear',
	'tool.text-diff-compare.use_case.1': 'Revisar cambios y ediciones de documentos',
	'tool.text-diff-compare.use_case.2': 'Analizar modificaciones de archivos de configuración',
	'tool.text-diff-compare.use_case.3': 'Rastrear cambios en logs o exportaciones de datos',
	'tool.text-regex-tester.display_name': 'Probador de Regex',
	'tool.text-regex-tester.tagline':
		'Prueba expresiones regulares con resaltado en vivo, grupos de captura y flags',
	'tool.text-regex-tester.description':
		'Prueba patrones regex de JavaScript sobre texto real con resaltado en tiempo real, control total de flags, inspección de grupos de captura y métricas detalladas de coincidencias. Todo se ejecuta localmente en tu navegador.',
	'tool.text-regex-tester.primary_keyword': 'probador de regex',
	'tool.text-regex-tester.meta_title':
		'Probador de Regex — Resaltado en vivo y grupos de captura | fmtly.dev',
	'tool.text-regex-tester.meta_description':
		'Prueba expresiones regulares online con resaltado en vivo, grupos de captura y flags regex. Rápido, privado y totalmente en el navegador.',
	'tool.text-regex-tester.operation': 'Probar Regex',
	'tool.text-regex-tester.faq.0.question':
		'¿Esta herramienta soporta flags de JavaScript como g, i, m, s, u, y y d?',
	'tool.text-regex-tester.faq.0.answer':
		'Sí. Puedes activar o desactivar cada flag soportado y ver al instante cómo cambia el resultado.',
	'tool.text-regex-tester.faq.1.question':
		'¿Puedo inspeccionar grupos de captura numerados y con nombre por coincidencia?',
	'tool.text-regex-tester.faq.1.answer':
		'Sí. Cada coincidencia muestra grupos numerados y grupos con nombre, con valores y posiciones cuando están disponibles.',
	'tool.text-regex-tester.faq.2.question': '¿Mi patrón y texto de prueba se envían a un servidor?',
	'tool.text-regex-tester.faq.2.answer':
		'No. El análisis regex ocurre localmente en tu navegador y no se suben datos.',
	'tool.text-regex-tester.use_case.0':
		'Validar patrones de parsing de logs antes de usarlos en producción',
	'tool.text-regex-tester.use_case.1':
		'Probar reglas de validación de formularios con texto real y casos límite',
	'tool.text-regex-tester.use_case.2':
		'Prototipar reglas de búsqueda y extracción para scripts, ETL y automatización',
	'tool.text-regex-tester.use_case.3':
		'Aprender y enseñar regex con feedback visual inmediato de coincidencias',
	'tool.text-escape-unescape.display_name': 'Escape / Unescape de Texto',
	'tool.text-escape-unescape.tagline':
		'Escapa o desescapa texto para JSON, HTML, XML, URL, SQL y regex',
	'tool.text-escape-unescape.description':
		'Convierte cadenas entre formato escapado y texto legible para JSON, entidades HTML, entidades XML, codificación URL, literales SQL y patrones regex. Incluye procesamiento en Web Worker para entradas grandes.',
	'tool.text-escape-unescape.primary_keyword': 'escape unescape texto',
	'tool.text-escape-unescape.meta_title':
		'Escape/Unescape Texto — JSON, HTML, URL, SQL | fmtly.dev',
	'tool.text-escape-unescape.meta_description':
		'Escapa y desescapa texto al instante para JSON, HTML, XML, URL, SQL y regex. Todo en el navegador, rápido con textos grandes y sin subir datos.',
	'tool.text-escape-unescape.operation': 'Escapar / Desescapar Texto',
	'tool.text-escape-unescape.faq.0.question':
		'¿Qué formatos admite esta herramienta para escape y unescape?',
	'tool.text-escape-unescape.faq.0.answer':
		'Admite cadenas JSON, entidades HTML, entidades XML, codificación URL, literales de cadena SQL y caracteres especiales de regex en ambos sentidos.',
	'tool.text-escape-unescape.faq.1.question':
		'¿En qué se diferencia de un codificador URL o HTML básico?',
	'tool.text-escape-unescape.faq.1.answer':
		'Reúne varios estándares de escape en una sola interfaz, permite cambiar la dirección al instante y añade opciones específicas como manejo de + en URL o comillas para SQL.',
	'tool.text-escape-unescape.faq.2.question':
		'¿Mantiene rendimiento y privacidad con textos grandes?',
	'tool.text-escape-unescape.faq.2.answer':
		'Sí. Todo se procesa localmente en tu navegador. Para entradas superiores a 500KB, usa un Web Worker para mantener la interfaz fluida.',
	'tool.text-escape-unescape.use_case.0':
		'Preparar entrada de usuario de forma segura para payloads JSON, query strings y SQL',
	'tool.text-escape-unescape.use_case.1':
		'Decodificar logs o muestras de API escapadas a texto legible',
	'tool.text-escape-unescape.use_case.2':
		'Construir y depurar patrones regex escapando o desescapando metacaracteres',
	'tool.text-escape-unescape.use_case.3':
		'Normalizar contenido mezclado escapado sin salir del navegador',
	'ui.text_escape.format_label': 'Formato',
	'ui.text_escape.action_label': 'Acción',
	'ui.text_escape.action.escape': 'Escapar',
	'ui.text_escape.action.unescape': 'Desescapar',
	'ui.text_escape.format.json': 'Cadena JSON',
	'ui.text_escape.format.html': 'Entidades HTML',
	'ui.text_escape.format.xml': 'Entidades XML',
	'ui.text_escape.format.url': 'Componente URL',
	'ui.text_escape.format.sql': 'Cadena SQL',
	'ui.text_escape.format.regex': 'Patrón Regex',
	'ui.text_escape.input_label': 'Entrada',
	'ui.text_escape.output_label': 'Salida',
	'ui.text_escape.input_placeholder': 'Escribe o pega texto para procesar...',
	'ui.text_escape.output_placeholder': 'La salida escapada o desescapada aparecerá aquí...',
	'ui.text_escape.option.url_encode_plus': 'Codificar espacios como +',
	'ui.text_escape.option.url_decode_plus': 'Decodificar + como espacio',
	'ui.text_escape.option.sql_wrap_quotes': 'Envolver con comillas simples',
	'ui.text_escape.button.swap_action': 'Cambiar acción',
	'ui.text_escape.worker_active':
		'Entrada grande detectada (>{size}). El procesamiento se ejecuta en un Web Worker.',
	'ui.text_escape.worker_failed':
		'Falló el procesamiento en Worker. Se aplica procesamiento en hilo principal.',
	'ui.text_escape.warning.no_changes':
		'No se detectaron cambios para el formato y la acción seleccionados.',
	'ui.text_escape.error.invalid_json_escape': 'Secuencia de escape JSON inválida: {detail}',
	'ui.text_escape.error.invalid_url_encoding': 'Entrada URL codificada inválida: {detail}',
	'ui.text_escape.error.detail': 'El procesamiento falló: {detail}',
	'ui.diff_compare.statistics': 'Estadísticas de Comparación',
	'ui.diff_compare.added_lines': 'Líneas añadidas',
	'ui.diff_compare.removed_lines': 'Líneas eliminadas',
	'ui.diff_compare.unchanged_lines': 'Líneas sin cambios',
	'ui.diff_compare.total_lines': 'Total de líneas',
	'ui.diff_compare.similarity': 'Similitud',
	'ui.diff_compare.hunks': 'Hunks',
	'ui.diff_compare.side_by_side': 'Lado a Lado',
	'ui.diff_compare.unified': 'Unificado',
	'ui.diff_compare.inline': 'Inline',
	'ui.diff_compare.swap': 'Intercambiar',
	'ui.diff_compare.diff_options': 'Opciones de Diff',
	'ui.diff_compare.ignore_whitespace': 'Ignorar espacios en blanco',
	'ui.diff_compare.ignore_case': 'Ignorar mayúsculas/minúsculas',
	'ui.diff_compare.ignore_empty_lines': 'Ignorar líneas vacías',
	'ui.diff_compare.show_inline': 'Mostrar cambios inline',
	'ui.diff_compare.context_lines': 'Líneas de contexto',
	'ui.diff_compare.algorithm': 'Algoritmo',
	'ui.diff_compare.original': 'Original',
	'ui.diff_compare.modified': 'Modificado',
	'ui.diff_compare.placeholder_left': 'Pegue el texto original aquí...',
	'ui.diff_compare.placeholder_right': 'Pegue el texto modificado aquí...',
	'ui.diff_compare.unified_diff': 'Diff Unificado',
	'ui.diff_compare.add_content': 'Agregue contenido a ambos lados para ver el diff',
	'ui.diff_compare.no_content': 'Sin contenido para comparar',
	'ui.diff_compare.swapped': 'Entradas intercambiadas',
	'ui.toast.download_success': 'Descargado exitosamente',
	'tool.text-whitespace-cleaner.display_name': 'Limpiador de Espacios en Blanco',
	'tool.text-whitespace-cleaner.tagline':
		'Recorta espacios finales, une múltiples espacios en blanco, normaliza finales de línea',
	'tool.text-whitespace-cleaner.description':
		'Limpia el formato de texto eliminando espacios finales, uniendo múltiples espacios/tabulaciones a espacios simples y normalizando finales de línea. Perfecto para preparar código, registros y contenido para control de versiones o procesamiento.',
	'tool.text-whitespace-cleaner.primary_keyword': 'limpiador de espacios en blanco',
	'tool.text-whitespace-cleaner.meta_title': 'Limpiador de Espacios en Blanco — fmtly.dev',
	'tool.text-whitespace-cleaner.meta_description':
		'Limpiador gratuito de espacios en blanco que elimina espacios finales, une múltiples espacios en blanco y normaliza finales de línea. Rápido, privado y 100% en tu navegador.',
	'tool.text-whitespace-cleaner.operation': 'Limpiar Espacios en Blanco',
	'tool.text-whitespace-cleaner.faq.0.question':
		'¿Qué caracteres de espacio en blanco se eliminan?',
	'tool.text-whitespace-cleaner.faq.0.answer':
		'Se eliminan espacios y tabulaciones finales al final de las líneas. Múltiples espacios/tabulaciones dentro del texto se unen a espacios simples. Los finales de línea se normalizan a LF (\\n).',
	'tool.text-whitespace-cleaner.faq.1.question': '¿Se conservan los espacios iniciales?',
	'tool.text-whitespace-cleaner.faq.1.answer':
		'Sí. Solo se eliminan los espacios finales. Se conserva la sangría inicial y los espacios dentro de las líneas, excepto que múltiples espacios/tabulaciones se unen a espacios simples.',
	'tool.text-whitespace-cleaner.faq.2.question': '¿Cómo se normalizan los finales de línea?',
	'tool.text-whitespace-cleaner.faq.2.answer':
		'Los finales de línea de Windows (CRLF) y Mac antiguos (CR) se convierten a estilo Unix LF (\\n). Múltiples líneas vacías consecutivas se unen a saltos de línea dobles.',
	'tool.text-whitespace-cleaner.use_case.0':
		'Limpiar código antes de confirmar en control de versiones para eliminar espacios finales',
	'tool.text-whitespace-cleaner.use_case.1':
		'Normalizar texto copiado de diferentes fuentes con espaciado inconsistente',
	'tool.text-whitespace-cleaner.use_case.2':
		'Preparar registros y archivos de datos para procesamiento y análisis consistente',
	'tool.text-whitespace-cleaner.use_case.3':
		'Formatear contenido de editores de texto enriquecido a texto plano con espaciado consistente',
	'ui.text_counter.words': 'Palabras',
	'ui.text_counter.characters': 'Caracteres',
	'ui.text_counter.characters_no_spaces': 'Caracteres (sin espacios)',
	'ui.text_counter.sentences': 'Frases',
	'ui.text_counter.paragraphs': 'Párrafos',
	'ui.text_counter.reading_time': 'Tiempo de lectura',
	'ui.text_counter.minutes': 'min',
	'ui.text_counter.lines': 'líneas',
	'ui.text_counter.placeholder': 'Escribe o pega tu texto aquí...',
	'ui.ai_tokens.characters': 'caracteres',
	'ui.ai_tokens.model_label': 'Modelo',
	'ui.ai_tokens.upload_file': 'Subir archivo',
	'ui.ai_tokens.file_loaded': '{name} cargado',
	'ui.ai_tokens.file_failed': 'No se pudo cargar el archivo',
	'ui.ai_tokens.copy_summary': 'Copiar resumen',
	'ui.ai_tokens.copy.title': 'Resumen de tokens de IA',
	'ui.ai_tokens.worker_active':
		'Entrada grande detectada (>{size}). El análisis de tokens se ejecuta en un Web Worker.',
	'ui.ai_tokens.worker_failed':
		'El análisis de tokens falló. Prueba una entrada más pequeña o recarga la página.',
	'ui.ai_tokens.worker_badge': 'Worker',
	'ui.ai_tokens.input_label': 'Prompt o texto',
	'ui.ai_tokens.input_placeholder':
		'Pega un prompt, transcripción o documento para estimar tokens...',
	'ui.ai_tokens.analysis_title': 'Análisis de tokens',
	'ui.ai_tokens.processing': 'Contando...',
	'ui.ai_tokens.comparison_title': 'Comparación de modelos',
	'ui.ai_tokens.stat.tokens': 'Tokens',
	'ui.ai_tokens.stat.words': 'Palabras',
	'ui.ai_tokens.stat.words_helper': 'Palabras separadas por espacios',
	'ui.ai_tokens.stat.characters': 'Caracteres',
	'ui.ai_tokens.stat.tokens_per_word': 'Tokens / palabra',
	'ui.ai_tokens.stat.tokens_per_word_helper': 'Menos suele ser más barato',
	'ui.ai_tokens.stat.estimated_cost': 'Coste estimado',
	'ui.ai_tokens.stat.estimated_cost_helper': 'Estimación de tokens de entrada',
	'ui.ai_tokens.table.model': 'Modelo',
	'ui.ai_tokens.table.tokens': 'Tokens',
	'ui.ai_tokens.table.ratio': 'Tokens / palabra',
	'ui.ai_tokens.table.cost': 'Coste',
	'ui.prompt_optimizer.characters': 'caracteres',
	'ui.prompt_optimizer.tokens': 'tokens',
	'ui.prompt_optimizer.model_label': 'Modelo',
	'ui.prompt_optimizer.upload_file': 'Subir archivo',
	'ui.prompt_optimizer.file_loaded': '{name} cargado',
	'ui.prompt_optimizer.file_failed': 'No se pudo cargar el archivo',
	'ui.prompt_optimizer.worker_active':
		'Entrada grande detectada (>{size}). La optimización se ejecuta en un Web Worker.',
	'ui.prompt_optimizer.worker_failed':
		'La optimización en Worker falló. Volviendo al procesamiento en el hilo principal.',
	'ui.prompt_optimizer.worker_badge': 'Worker',
	'ui.prompt_optimizer.input_label': 'Prompt original',
	'ui.prompt_optimizer.input_placeholder': 'Pega un prompt para optimizar su uso de tokens...',
	'ui.prompt_optimizer.output_label': 'Salida optimizada',
	'ui.prompt_optimizer.processing': 'Optimizando...',
	'ui.prompt_optimizer.copy_output': 'Copiar optimizado',
	'ui.prompt_optimizer.preview_title': 'Vista previa',
	'ui.prompt_optimizer.output_placeholder': 'El prompt optimizado aparecerá aquí...',
	'ui.prompt_optimizer.option.filler': 'Eliminar palabras de relleno',
	'ui.prompt_optimizer.option.filler_desc':
		'Recorta frases de baja señal conservando la intención.',
	'ui.prompt_optimizer.option.whitespace': 'Comprimir espacios',
	'ui.prompt_optimizer.option.whitespace_desc': 'Normaliza espacios repetidos y líneas en blanco.',
	'ui.prompt_optimizer.option.markdown': 'Simplificar Markdown',
	'ui.prompt_optimizer.option.markdown_desc': 'Reduce formato decorativo que consume tokens.',
	'ui.prompt_optimizer.option.abbreviation': 'Usar abreviaturas',
	'ui.prompt_optimizer.option.abbreviation_desc':
		'Acorta frases comunes de prompts de IA cuando sea seguro.',
	'ui.prompt_optimizer.stat.before': 'Antes',
	'ui.prompt_optimizer.stat.before_helper': 'Conteo original de tokens',
	'ui.prompt_optimizer.stat.after': 'Después',
	'ui.prompt_optimizer.stat.after_helper': 'Conteo optimizado de tokens',
	'ui.prompt_optimizer.stat.saved': 'Tokens ahorrados',
	'ui.prompt_optimizer.stat.saved_helper': 'Reducción estimada',
	'ui.prompt_optimizer.stat.savings_percent': 'Ahorro',
	'ui.prompt_optimizer.stat.savings_percent_helper': 'Antes vs después',
	'ui.prompt_optimizer.stat.cost_saved': 'Coste ahorrado',
	'ui.system_prompt_builder.template.custom': 'Personalizado',
	'ui.system_prompt_builder.template.code_assistant': 'Asistente de código',
	'ui.system_prompt_builder.template.data_analyst': 'Analista de datos',
	'ui.system_prompt_builder.template.translator': 'Traductor',
	'ui.system_prompt_builder.template.customer_support': 'Atención al cliente',
	'ui.system_prompt_builder.format.plain_text': 'Texto plano',
	'ui.system_prompt_builder.format.openai_json': 'Mensajes JSON de OpenAI',
	'ui.system_prompt_builder.field.role': 'Rol',
	'ui.system_prompt_builder.field.objective': 'Objetivo',
	'ui.system_prompt_builder.field.context': 'Contexto',
	'ui.system_prompt_builder.field.constraints': 'Restricciones',
	'ui.system_prompt_builder.field.examples': 'Ejemplos',
	'ui.system_prompt_builder.field.output_requirements': 'Requisitos de salida',
	'ui.system_prompt_builder.placeholder.role':
		'Define la identidad del asistente y su nivel de experiencia...',
	'ui.system_prompt_builder.placeholder.objective': 'Describe qué debe conseguir el asistente...',
	'ui.system_prompt_builder.placeholder.context':
		'Añade contexto operativo, audiencia, dominio o detalles del producto...',
	'ui.system_prompt_builder.placeholder.constraints':
		'Enumera límites, políticas, comportamientos prohibidos o requisitos estrictos...',
	'ui.system_prompt_builder.placeholder.examples':
		'Añade ejemplos de solicitudes de usuario y comportamiento ideal del asistente...',
	'ui.system_prompt_builder.placeholder.output_requirements':
		'Especifica estructura, formato, citas o tono de la respuesta...',
	'ui.system_prompt_builder.option.safety_boundaries': 'Límites de seguridad',
	'ui.system_prompt_builder.option.safety_boundaries_desc':
		'Añade instrucciones sobre privacidad, incertidumbre, solicitudes inseguras y datos inventados.',
	'ui.system_prompt_builder.option.quality_checklist': 'Lista de calidad',
	'ui.system_prompt_builder.option.quality_checklist_desc':
		'Añade una comprobación final de requisitos, formato y limitaciones.',
	'ui.system_prompt_builder.option.reasoning_guidance': 'Guía de razonamiento',
	'ui.system_prompt_builder.option.reasoning_guidance_desc':
		'Indica al asistente que piense primero y muestre solo conclusiones útiles.',
	'ui.system_prompt_builder.output_status': '{size} · {characters} caracteres · {lines} líneas',
	'ui.system_prompt_builder.input_status': '{size} · {characters} caracteres · {lines} líneas',
	'ui.system_prompt_builder.stat.characters': 'Caracteres',
	'ui.system_prompt_builder.stat.characters_helper': 'Salida generada',
	'ui.system_prompt_builder.stat.size': 'Tamaño',
	'ui.system_prompt_builder.stat.size_helper': 'Tamaño UTF-8 de salida',
	'ui.system_prompt_builder.stat.lines': 'Líneas',
	'ui.system_prompt_builder.stat.lines_helper': 'Líneas de la vista previa',
	'ui.system_prompt_builder.stat.sections': 'Secciones',
	'ui.system_prompt_builder.worker_failed':
		'Falló la creación en el worker. Se usará el hilo principal.',
	'ui.system_prompt_builder.build_failed':
		'No se pudo crear el prompt de sistema. Prueba a reducir el tamaño de la entrada.',
	'ui.system_prompt_builder.sample_loaded': 'Ejemplo cargado',
	'ui.system_prompt_builder.clear_title': '¿Borrar los campos del constructor de prompts?',
	'ui.system_prompt_builder.clear_description':
		'Esto elimina las entradas actuales del constructor y la vista previa.',
	'ui.system_prompt_builder.input_cleared': 'Entradas del constructor borradas',
	'ui.system_prompt_builder.copy_empty': 'Aún no hay nada que copiar',
	'ui.system_prompt_builder.copy_success': 'Prompt de sistema copiado',
	'ui.system_prompt_builder.copy_error': 'No se pudo copiar. Revisa los permisos del navegador.',
	'ui.system_prompt_builder.download_empty': 'Aún no hay nada que descargar',
	'ui.system_prompt_builder.download_success': '{filename} descargado',
	'ui.system_prompt_builder.download_error': 'No se pudo descargar. Prueba a copiar la salida.',
	'ui.system_prompt_builder.milliseconds': 'ms',
	'ui.system_prompt_builder.template_label': 'Plantilla',
	'ui.system_prompt_builder.output_format_label': 'Formato de salida',
	'ui.system_prompt_builder.worker_active':
		'Entrada grande detectada (>{size}). La generación del prompt se ejecuta en un Web Worker.',
	'ui.system_prompt_builder.load_sample': 'Cargar ejemplo',
	'ui.system_prompt_builder.clear': 'Borrar',
	'ui.system_prompt_builder.builder_inputs_title': 'Entradas del constructor',
	'ui.system_prompt_builder.output_label': 'Vista previa de salida',
	'ui.system_prompt_builder.processing': 'Creando...',
	'ui.system_prompt_builder.worker_badge': 'Worker',
	'ui.system_prompt_builder.worker_used': 'Procesado fuera del hilo principal',
	'ui.system_prompt_builder.copy_output': 'Copiar salida',
	'ui.system_prompt_builder.download_output': 'Descargar',
	'ui.system_prompt_builder.preview_title': 'Vista previa',
	'ui.system_prompt_builder.output_placeholder': 'El prompt de sistema creado aparecerá aquí...',
	'ui.lorem.mode': 'Modo',
	'ui.lorem.mode.paragraphs': 'Párrafos',
	'ui.lorem.mode.sentences': 'Frases',
	'ui.lorem.mode.words': 'Palabras',
	'ui.lorem.count': 'Cantidad',
	'ui.lorem.seed': 'Semilla',
	'ui.lorem.random_seed': 'Semilla aleatoria',
	'ui.lorem.generate': 'Generar',
	'ui.lorem.include_classic_opening': 'Incluir apertura clásica',
	'ui.lorem.auto_generate': 'Generar automáticamente al cambiar',
	'ui.lorem.output_format': 'Formato de salida',
	'ui.lorem.output_format.plain': 'Texto plano',
	'ui.lorem.output_format.html': 'HTML',
	'ui.lorem.advanced_options': 'Opciones avanzadas',
	'ui.lorem.min_words_per_sentence': 'Mín palabras / frase',
	'ui.lorem.max_words_per_sentence': 'Máx palabras / frase',
	'ui.lorem.min_sentences_per_paragraph': 'Mín frases / párrafo',
	'ui.lorem.max_sentences_per_paragraph': 'Máx frases / párrafo',
	'ui.lorem.source': 'Fuente',
	'ui.lorem.preview': 'Vista previa',
	'ui.lorem.empty_output': 'La salida generada aparecerá aquí...',
	'ui.lorem.generated': 'Lorem Ipsum generado',
	'ui.lorem.seed_randomized': 'Semilla aleatorizada',
	'ui.lorem.no_output': 'Todavía no hay salida generada',
	'ui.markdown_to_html.placeholder': 'Escribe o pega Markdown aquí...',
	'ui.markdown_to_html.option.gfm': 'Activar tablas GFM y listas de tareas',
	'ui.markdown_to_html.option.breaks': 'Convertir saltos de línea simples en <br>',
	'ui.markdown_to_html.option.highlight_code': 'Resaltar sintaxis en bloques de código fenced',
	'ui.markdown_to_html.option.open_links_in_new_tab': 'Abrir enlaces en una nueva pestaña',
	'ui.markdown_to_html.option.allow_raw_html': 'Permitir bloques raw HTML (avanzado)',
	'ui.markdown_to_html.view.preview': 'Vista previa',
	'ui.markdown_to_html.view.html': 'HTML',
	'ui.markdown_to_html.status.converting': 'Convirtiendo Markdown...',
	'ui.markdown_to_html.preview_aria': 'Vista previa en vivo de Markdown a HTML',
	'ui.markdown_to_html.empty_preview':
		'La vista previa en vivo aparecerá aquí cuando ingreses Markdown.',
	'ui.markdown_to_html.empty_html': 'La salida HTML generada aparecerá aquí.',
	'ui.markdown_to_html.error.conversion_failed':
		'La conversión de Markdown falló. Revisa el contenido e inténtalo de nuevo.',
	'ui.markdown_to_html.toast.no_html_output': 'No hay salida HTML para descargar',
	'ui.markdown_to_html.warning.unsafe_link_removed': 'Se eliminó un enlace inseguro',
	'ui.markdown_to_html.warning.unsafe_image_removed': 'Se eliminó una imagen insegura',
	'ui.markdown_to_html.warning.raw_html_escaped': 'Se escapó HTML sin procesar por seguridad',
	'ui.markdown_to_html.stats.headings': 'Encabezados',
	'ui.markdown_to_html.stats.tables': 'Tablas',
	'ui.markdown_to_html.stats.code_blocks': 'Bloques de código',
	'ui.markdown_to_html.stats.links': 'Enlaces',
	'ui.markdown_to_html.stats.images': 'Imágenes',
	'ui.markdown_to_html.stats.words': 'Palabras',
	'ui.text_case.tab_label': 'Formato',
	'ui.text_case.placeholder': 'Escribe o pega texto para convertir su formato...',
	'ui.text_case.camel_case': 'camelCase',
	'ui.text_case.pascal_case': 'PascalCase',
	'ui.text_case.snake_case': 'snake_case',
	'ui.text_case.kebab_case': 'kebab-case',
	'ui.text_case.constant_case': 'CONSTANT_CASE',
	'ui.text_case.title_case': 'Title Case',
	'ui.text_case.sentence_case': 'Formato de oración',
	'ui.regex.pattern_label': 'Patrón',
	'ui.regex.pattern_placeholder': 'p. ej. (?<name>\\w+)',
	'ui.regex.flags_label': 'Flags',
	'ui.regex.test_text_label': 'Texto de prueba',
	'ui.regex.test_text_placeholder': 'Escribe o pega texto para probar tu patrón...',
	'ui.regex.copy_regex': 'Copiar Regex',
	'ui.regex.global_hint':
		'Activa g para iterar todas las coincidencias. Sin g, solo se devuelve la primera.',
	'ui.regex.stats.matches': 'Coincidencias',
	'ui.regex.stats.unique_matches': 'Únicas',
	'ui.regex.stats.lines_with_matches': 'Líneas',
	'ui.regex.stats.coverage': 'Cobertura',
	'ui.regex.stats.duration': 'Tiempo',
	'ui.regex.highlight_title': 'Resaltado en vivo',
	'ui.regex.preview_truncated': 'Vista previa limitada a {limit} caracteres',
	'ui.regex.no_highlight': 'Las coincidencias se resaltarán aquí.',
	'ui.regex.matches_title': 'Coincidencias',
	'ui.regex.match_limit_reached': 'Se alcanzó el límite de coincidencias',
	'ui.regex.no_matches': 'No se encontraron coincidencias.',
	'ui.regex.match_label': 'Coincidencia #{index}',
	'ui.regex.match_position': 'Línea {line}, Columna {column}',
	'ui.regex.match_range': 'Rango: {range}',
	'ui.regex.capture_groups': 'Grupos de captura',
	'ui.regex.no_capture_groups': 'Sin grupos de captura',
	'ui.regex.named_capture_groups': 'Grupos con nombre',
	'ui.regex.no_named_capture_groups': 'Sin grupos con nombre',
	'ui.regex.group_label': 'Grupo {index}',
	'ui.regex.group_unmatched': 'Sin coincidencia',
	'ui.regex.error.empty_pattern':
		'Introduce un patrón de expresión regular para empezar la prueba.',
	'ui.regex.error.invalid_flag': 'Flag regex no válido: {flag}',
	'ui.regex.error.duplicate_flag': 'Flag regex duplicado: {flag}',
	'ui.regex.error.unsupported_flag': 'Este entorno no soporta el flag regex: {flag}',
	'ui.regex.error.syntax_error': 'Error de sintaxis en el patrón: {detail}',
	'ui.regex.flags.g.label': 'Global',
	'ui.regex.flags.g.description': 'Busca todas las coincidencias, no solo la primera',
	'ui.regex.flags.i.label': 'Ignorar mayúsculas',
	'ui.regex.flags.i.description': 'No distingue entre mayúsculas y minúsculas',
	'ui.regex.flags.m.label': 'Multilínea',
	'ui.regex.flags.m.description': 'Hace que ^ y $ funcionen por línea',
	'ui.regex.flags.s.label': 'Dotall',
	'ui.regex.flags.s.description': 'Permite que el punto (.) también coincida con saltos de línea',
	'ui.regex.flags.u.label': 'Unicode',
	'ui.regex.flags.u.description': 'Activa el modo Unicode completo',
	'ui.regex.flags.y.label': 'Sticky',
	'ui.regex.flags.y.description': 'Coincide estrictamente desde la posición actual de lastIndex',
	'ui.regex.flags.d.label': 'Índices',
	'ui.regex.flags.d.description':
		'Muestra índices de inicio y fin de grupos cuando el entorno lo permite',
	'tool.text-readability-analyzer.display_name': 'Analizador de legibilidad',
	'tool.text-readability-analyzer.tagline':
		'Mide qué tan fácil es leer tu texto con fórmulas de legibilidad reconocidas',
	'tool.text-readability-analyzer.description':
		'Analiza la legibilidad del texto con Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau y SMOG. Obtén al instante métricas de complejidad de frases y edad de lectura, directamente en tu navegador.',
	'tool.text-readability-analyzer.primary_keyword': 'analizador de legibilidad',
	'tool.text-readability-analyzer.meta_title':
		'Analizador de legibilidad — métricas Flesch, Fog y SMOG | fmtly.dev',
	'tool.text-readability-analyzer.meta_description':
		'Analizador de legibilidad gratuito con métricas Flesch, Flesch-Kincaid, Gunning Fog, Coleman-Liau y SMOG. Rápido, privado y 100% en el navegador.',
	'tool.text-readability-analyzer.operation': 'Analizar legibilidad',
	'tool.text-readability-analyzer.faq.0.question':
		'¿Qué fórmulas de legibilidad incluye este analizador?',
	'tool.text-readability-analyzer.faq.0.answer':
		'Incluye Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau y SMOG, además de métricas complementarias de complejidad textual.',
	'tool.text-readability-analyzer.faq.1.question':
		'¿Por qué la puntuación SMOG puede no estar disponible en textos cortos?',
	'tool.text-readability-analyzer.faq.1.answer':
		'SMOG es más fiable estadísticamente con al menos 3 oraciones. En textos más cortos, la herramienta muestra una advertencia en lugar de una puntuación inestable.',
	'tool.text-readability-analyzer.faq.2.question':
		'¿El análisis de legibilidad se hace localmente o en un servidor?',
	'tool.text-readability-analyzer.faq.2.answer':
		'Todo se procesa localmente en tu navegador. Tu texto no se envía a ningún servidor.',
	'tool.text-readability-analyzer.use_case.0':
		'Revisar documentación, onboarding y artículos de ayuda antes de publicarlos',
	'tool.text-readability-analyzer.use_case.1':
		'Comparar varias versiones de un borrador y elegir la más clara',
	'tool.text-readability-analyzer.use_case.2':
		'Optimizar microcopy de producto y mensajes en la app para audiencias más amplias',
	'tool.text-readability-analyzer.use_case.3':
		'Detectar secciones densas en documentación técnica y simplificarlas',
	'tool.text-morse-code-translator.display_name': 'Traductor de código Morse',
	'tool.text-morse-code-translator.tagline':
		'Convierte texto a Morse y decodifica Morse de vuelta a texto legible',
	'tool.text-morse-code-translator.description':
		'Traduce texto a código Morse internacional y decodifica secuencias Morse al instante. Soporta letras, números y puntuación frecuente; además procesa entradas grandes con Web Worker sin salir del navegador.',
	'tool.text-morse-code-translator.primary_keyword': 'traductor de código morse',
	'tool.text-morse-code-translator.meta_title':
		'Traductor de código Morse — Texto ↔ Morse | fmtly.dev',
	'tool.text-morse-code-translator.meta_description':
		'Convierte texto a Morse y Morse a texto plano al instante. Rápido, privado y 100% en el navegador con soporte para entradas grandes.',
	'tool.text-morse-code-translator.operation': 'Traducir código Morse',
	'tool.text-morse-code-translator.faq.0.question':
		'¿Qué variante de Morse utiliza este traductor?',
	'tool.text-morse-code-translator.faq.0.answer':
		'Usa código Morse internacional para letras latinas, números y signos de puntuación comunes.',
	'tool.text-morse-code-translator.faq.1.question':
		'¿Cómo trata la decodificación los tokens Morse desconocidos?',
	'tool.text-morse-code-translator.faq.1.answer':
		'Los tokens desconocidos se señalan y pueden sustituirse por un marcador configurable para revisar resultados parciales.',
	'tool.text-morse-code-translator.faq.2.question':
		'¿Puedo procesar logs largos o bloques de texto grandes?',
	'tool.text-morse-code-translator.faq.2.answer':
		'Sí. Las entradas de más de 500KB se procesan en un Web Worker para mantener la interfaz fluida.',
	'tool.text-morse-code-translator.use_case.0':
		'Codificar rápidamente indicativos, alertas o frases de entrenamiento en Morse',
	'tool.text-morse-code-translator.use_case.1':
		'Decodificar fragmentos Morse capturados en logs, transcripciones o ejercicios',
	'tool.text-morse-code-translator.use_case.2':
		'Enseñar fundamentos de Morse con feedback inmediato de codificación y decodificación',
	'tool.text-morse-code-translator.use_case.3':
		'Validar puntuación y separación antes de integrar Morse en herramientas',
	'ui.morse.mode_label': 'Modo',
	'ui.morse.mode.encode': 'Texto → Morse',
	'ui.morse.mode.decode': 'Morse → Texto',
	'ui.morse.separator_label': 'Separador de palabras',
	'ui.morse.separator.slash': '/ barra',
	'ui.morse.separator.pipe': '| barra vertical',
	'ui.morse.separator.newline': 'Nueva línea',
	'ui.morse.option.preserve_unsupported_encode': 'Mantener caracteres no compatibles en la salida',
	'ui.morse.option.preserve_unsupported_decode': 'Insertar marcador para tokens Morse desconocidos',
	'ui.morse.option.unknown_placeholder': 'Marcador para desconocidos',
	'ui.morse.input_label': 'Entrada',
	'ui.morse.output_label': 'Salida',
	'ui.morse.input_placeholder.encode': 'Escribe o pega texto para convertirlo a Morse...',
	'ui.morse.input_placeholder.decode': 'Pega código Morse (., -, /, |) para decodificar...',
	'ui.morse.output_placeholder.encode': 'La salida Morse aparece aquí...',
	'ui.morse.output_placeholder.decode': 'El texto decodificado aparece aquí...',
	'ui.morse.button.swap_mode': 'Cambiar modo y usar salida',
	'ui.morse.worker_active':
		'Se detectó una entrada grande (>{size}). El procesamiento se ejecuta en un Web Worker.',
	'ui.morse.worker_failed': 'Falló el procesamiento en Worker. Se usará el hilo principal.',
	'ui.morse.warning.unsupported_input_characters':
		'Algunos caracteres de entrada no están en el mapeo Morse compatible.',
	'ui.morse.warning.unknown_morse_tokens': 'Algunos tokens Morse no se pudieron decodificar.',
	'ui.morse.warning.no_changes': 'No se detectaron cambios para el modo seleccionado.',
	'ui.morse.stat.symbols': 'Símbolos',
	'ui.morse.stat.words': 'Palabras',
	'ui.morse.stat.unsupported': 'No compatibles',
	'ui.morse.stat.unknown_tokens': 'Tokens desconocidos',
	'ui.readability.unavailable': '—',
	'ui.readability.input_label': 'Texto de entrada',
	'ui.readability.input_placeholder': 'Pega o escribe texto para analizar la legibilidad...',
	'ui.readability.output_title': 'Análisis de legibilidad',
	'ui.readability.processing': 'Analizando...',
	'ui.readability.copy_report': 'Copiar informe',
	'ui.readability.worker_active':
		'Se detectó una entrada grande (>{size}). El análisis se ejecuta en un Web Worker.',
	'ui.readability.worker_failed':
		'Falló el procesamiento en Worker. Se usa análisis en el hilo principal.',
	'ui.readability.level_label': 'Legibilidad general',
	'ui.readability.level.very_easy': 'Muy fácil',
	'ui.readability.level.easy': 'Fácil',
	'ui.readability.level.fairly_easy': 'Bastante fácil',
	'ui.readability.level.standard': 'Estándar',
	'ui.readability.level.fairly_difficult': 'Algo difícil',
	'ui.readability.level.difficult': 'Difícil',
	'ui.readability.level.very_difficult': 'Muy difícil',
	'ui.readability.level_desc.very_easy': 'Adecuado para audiencias amplias y lectura rápida.',
	'ui.readability.level_desc.easy': 'Lenguaje claro con baja carga cognitiva.',
	'ui.readability.level_desc.fairly_easy':
		'Buen nivel para documentación de producto, guías y contenido web general.',
	'ui.readability.level_desc.standard':
		'Legibilidad equilibrada para lectores técnicos y no técnicos.',
	'ui.readability.level_desc.fairly_difficult':
		'Hay partes densas: conviene simplificar oraciones largas.',
	'ui.readability.level_desc.difficult':
		'Requiere lectura concentrada. Ayudan frases más cortas y vocabulario más simple.',
	'ui.readability.level_desc.very_difficult':
		'Texto muy denso. Conviene reescribirlo para mayor claridad.',
	'ui.readability.metric.words': 'Palabras',
	'ui.readability.metric.sentences': 'Oraciones',
	'ui.readability.metric.syllables': 'Sílabas',
	'ui.readability.metric.reading_age': 'Edad de lectura',
	'ui.readability.metric.reading_time': 'Tiempo de lectura',
	'ui.readability.metric.paragraphs': 'Párrafos',
	'ui.readability.metric.complex_words': 'Palabras complejas',
	'ui.readability.stat.avg_words_per_sentence': 'Prom. palabras/oración',
	'ui.readability.stat.avg_syllables_per_word': 'Prom. sílabas/palabra',
	'ui.readability.stat.characters': 'Caracteres',
	'ui.readability.stat.letters': 'Letras',
	'ui.readability.scores_title': 'Fórmulas de legibilidad',
	'ui.readability.score.flesch_ease': 'Flesch Reading Ease',
	'ui.readability.score.flesch_kincaid': 'Flesch-Kincaid Grade',
	'ui.readability.score.gunning_fog': 'Gunning Fog',
	'ui.readability.score.coleman_liau': 'Índice Coleman-Liau',
	'ui.readability.score.smog': 'SMOG',
	'ui.readability.score_desc.flesch_ease': 'Cuanto más alto, más fácil de leer.',
	'ui.readability.score_desc.flesch_kincaid':
		'Nivel escolar estimado según el sistema educativo de EE. UU.',
	'ui.readability.score_desc.gunning_fog':
		'Complejidad basada en longitud de frases y dificultad de palabras.',
	'ui.readability.score_desc.coleman_liau':
		'Legibilidad calculada con densidad de letras y oraciones.',
	'ui.readability.score_desc.smog':
		'Estimación del nivel de lectura basada en palabras polisilábicas.',
	'ui.readability.warning.insufficient_sentences_for_smog':
		'SMOG necesita al menos 3 oraciones para una estimación estable.',
	'ui.readability.report_title': 'Informe de legibilidad',
	'ui.readability.report_level': 'Nivel',
	'ui.readability.report_reading_age': 'Edad de lectura estimada',
	'ui.text_reverser.tab_label': 'Invertir',
	'ui.text_reverser.placeholder': 'Escribe o pega texto para invertirlo...',
	'ui.text_reverser.characters': 'Invertir por caracteres',
	'ui.text_reverser.words': 'Invertir por palabras',
	'ui.text_reverser.lines': 'Invertir por líneas',
	'ui.text_reverser.lines_count': 'líneas',
	'ui.duplicate_line_remover.tab_label': 'Deduplicar',
	'ui.duplicate_line_remover.placeholder':
		'Escribe o pega texto para eliminar líneas duplicadas...',
	'ui.duplicate_line_remover.unique_lines': 'Líneas únicas',
	'ui.duplicate_line_remover.duplicates_removed': 'Duplicados eliminados',
	'ui.duplicate_line_remover.result': 'Resultado',
	'ui.line_sorter.tab_label': 'Ordenar',
	'ui.line_sorter.placeholder': 'Escribe o pega líneas para ordenar...',
	'ui.line_sorter.mode_label': 'Modo de ordenación',
	'ui.line_sorter.mode.alphabetical': 'Alfabético',
	'ui.line_sorter.mode.numeric': 'Numérico',
	'ui.line_sorter.mode.length': 'Por longitud',
	'ui.line_sorter.mode.random': 'Mezcla aleatoria',
	'ui.line_sorter.direction_label': 'Dirección',
	'ui.line_sorter.direction.asc': 'Ascendente',
	'ui.line_sorter.direction.desc': 'Descendente',
	'ui.line_sorter.option.case_sensitive': 'Ordenar respetando mayúsculas/minúsculas',
	'ui.line_sorter.option.trim_before_sort': 'Recortar cada línea antes de ordenar',
	'ui.line_sorter.option.remove_empty_lines': 'Eliminar líneas vacías',
	'ui.line_sorter.option.deduplicate': 'Deduplicar líneas primero',
	'ui.line_sorter.shuffle_seed': 'Semilla de mezcla',
	'ui.line_sorter.generate_seed': 'Aleatorizar semilla',
	'ui.line_sorter.input_lines': 'Líneas de entrada',
	'ui.line_sorter.output_lines': 'Líneas de salida',
	'ui.line_sorter.empty_lines_removed': 'Líneas vacías eliminadas',
	'ui.line_sorter.duplicates_removed': 'Duplicados eliminados',
	'ui.line_sorter.lines_moved': 'Líneas movidas',
	'ui.line_sorter.output': 'Salida ordenada',
	'ui.line_sorter.apply_output': 'Aplicar a la entrada',
	'ui.line_sorter.status.processing': 'Ordenando líneas...',
	'ui.line_sorter.status.worker': 'Modo de entrada grande (Web Worker)',
	'ui.line_sorter.error.processing_failed':
		'La ordenación falló. Ajusta las opciones o el contenido e inténtalo de nuevo.',
	'ui.line_sorter.toast.applied': 'La salida ordenada se aplicó a la entrada',
	'ui.line_sorter.no_output': 'Todavía no hay salida ordenada para mostrar',
	'ui.whitespace_cleaner.tab_label': 'Espacios',
	'ui.whitespace_cleaner.placeholder': 'Escribe o pega texto para limpiar espacios en blanco...',
	'ui.whitespace_cleaner.trailing_spaces': 'Espacios finales',
	'ui.whitespace_cleaner.leading_spaces': 'Espacios iniciales',
	'ui.whitespace_cleaner.blanks_collapsed': 'Espacios unidos',
	'ui.whitespace_cleaner.tabs_converted': 'Tabs convertidos',
	'ui.whitespace_cleaner.spaces_converted': 'Espacios convertidos',
	'ui.whitespace_cleaner.lines_processed': 'Líneas procesadas',
	'ui.whitespace_cleaner.line_endings_normalized': 'Finales de línea normalizados',
	'ui.whitespace_cleaner.result': 'Resultado',
	'ui.whitespace_cleaner.options': 'Opciones de Limpieza',
	'ui.whitespace_cleaner.remove_leading': 'Eliminar espacios iniciales',
	'ui.whitespace_cleaner.remove_trailing': 'Eliminar espacios finales',
	'ui.whitespace_cleaner.collapse_spaces': 'Unir espacios múltiples',
	'ui.whitespace_cleaner.collapse_tabs': 'Unir tabs a espacios',
	'ui.whitespace_cleaner.convert_tabs_to_spaces': 'Convertir tabs a espacios',
	'ui.whitespace_cleaner.convert_spaces_to_tabs': 'Convertir espacios a tabs',
	'ui.whitespace_cleaner.trim_lines': 'Recortar cada línea',
	'ui.whitespace_cleaner.remove_all_spaces': 'Eliminar todos los espacios',
	'ui.whitespace_cleaner.remove_all_line_breaks': 'Eliminar todos los saltos de línea',
	'ui.whitespace_cleaner.preserve_paragraph_breaks': 'Preservar saltos de párrafo',
	'ui.whitespace_cleaner.tab_size': 'Tamaño de tab',
	'ui.csv.controls.table_name': 'Nombre de Tabla',
	'ui.csv.controls.batch_size': 'Tamaño de Lote',
	// ── Categoría Encode ──────────────────────────────────────────────────────
	'category.encode.display_name': 'Codificar / Decodificar',
	'category.encode.description':
		'Codifica y decodifica datos en formatos comunes — JWT, Base64, URL, entidades HTML y más. Todas las herramientas se ejecutan íntegramente en tu navegador.',
	'category.encode.primary_keyword': 'herramientas codificar decodificar',
	// ── JWT Decoder ───────────────────────────────────────────────────────────
	'tool.encode-jwt-decoder.display_name': 'Decodificador JWT',
	'tool.encode-jwt-decoder.tagline':
		'Decodifica tokens JWT e inspecciona claims, expiración y algoritmo',
	'tool.encode-jwt-decoder.description':
		'Decodifica tokens JSON Web al instante — inspecciona el algoritmo del encabezado, los claims del payload, las marcas de tiempo de expiración y la firma raw en Base64URL. Todo el procesamiento ocurre en tu navegador; nunca se envía nada a un servidor.',
	'tool.encode-jwt-decoder.primary_keyword': 'decodificador jwt',
	'tool.encode-jwt-decoder.meta_title':
		'Decodificador JWT — Inspecciona encabezado, payload y claims | fmtly.dev',
	'tool.encode-jwt-decoder.meta_description':
		'Decodifica e inspecciona tokens JWT en tu navegador. Visualiza el encabezado, claims del payload, estado de expiración y firma. Rápido, privado y gratuito — ningún dato sale de tu dispositivo.',
	'tool.encode-jwt-decoder.operation': 'Decodificar JWT',
	'tool.encode-jwt-decoder.faq.0.question': '¿Mi JWT se envía a un servidor?',
	'tool.encode-jwt-decoder.faq.0.answer':
		'No. Toda la decodificación ocurre íntegramente en tu navegador. Tu token nunca abandona tu dispositivo, lo que hace que esta herramienta sea segura incluso con tokens de autenticación reales.',
	'tool.encode-jwt-decoder.faq.1.question': '¿Esta herramienta verifica la firma?',
	'tool.encode-jwt-decoder.faq.1.answer':
		'No. La verificación de firma requiere la clave secreta o pública. Esta herramienta solo decodifica y muestra el payload — usa tu biblioteca del lado del servidor para verificar la autenticidad.',
	'tool.encode-jwt-decoder.faq.2.question': '¿Qué algoritmos JWT son compatibles?',
	'tool.encode-jwt-decoder.faq.2.answer':
		'El decodificador maneja cualquier JWT estándar de tres partes independientemente del algoritmo (HS256, RS256, ES256, etc.), ya que solo decodifica el contenido Base64URL sin verificar la firma.',
	'tool.encode-jwt-decoder.faq.3.question': '¿Puedo decodificar JWTs grandes o lotes de tokens?',
	'tool.encode-jwt-decoder.faq.3.answer':
		'Las entradas superiores a 500KB se descargan automáticamente a un Web Worker, manteniendo la interfaz de usuario reactiva incluso con tokens inusualmente grandes o payloads de prueba.',
	'tool.encode-jwt-decoder.use_case.0':
		'Inspeccionar tokens de autenticación durante el desarrollo y depuración de API local',
	'tool.encode-jwt-decoder.use_case.1':
		'Comprobar la expiración del token y los valores de claims estándar (iss, sub, aud) de un vistazo',
	'tool.encode-jwt-decoder.use_case.2':
		'Enseñar la estructura JWT y el rol de las secciones de encabezado, payload y firma',
	'tool.encode-jwt-decoder.use_case.3':
		'Resolver fallos de autorización examinando los claims personalizados del payload',
	// ── JWT Decoder — cadenas de interfaz ────────────────────────────────────
	'ui.jwt.input_placeholder': 'Pega aquí tu token JWT (eyJ…)',
	'ui.jwt.section.header': 'Encabezado',
	'ui.jwt.section.payload': 'Payload',
	'ui.jwt.section.signature': 'Firma',
	'ui.jwt.standard_claims': 'Claims estándar',
	'ui.jwt.all_claims': 'Todos los claims',
	'ui.jwt.signature_note':
		'Las firmas no se verifican. Usa tu biblioteca del lado del servidor para verificar la autenticidad del token.',
	'ui.jwt.status.valid': 'Válido',
	'ui.jwt.status.expired': 'Expirado',
	'ui.jwt.status.not_yet_valid': 'Aún no válido',
	'ui.jwt.status.no_expiry': 'Sin expiración',
	'ui.jwt.expires_in': 'Expira en {time}',
	'ui.jwt.expired_ago': 'Expiró hace {time}',
	'ui.jwt.claim.iss': 'Emisor',
	'ui.jwt.claim.sub': 'Sujeto',
	'ui.jwt.claim.aud': 'Audiencia',
	'ui.jwt.claim.exp': 'Expira',
	'ui.jwt.claim.nbf': 'No antes de',
	'ui.jwt.claim.iat': 'Emitido el',
	'ui.jwt.claim.jti': 'ID JWT',
	'ui.jwt.error.empty': 'Pega un token JWT arriba para decodificarlo.',
	'ui.jwt.error.invalid_format': 'Formato JWT inválido: se esperan 3 partes separadas por puntos.',
	'ui.jwt.error.invalid_base64': 'Error al decodificar la codificación Base64URL.',
	'ui.jwt.error.invalid_json': 'El contenido decodificado no es JSON válido.',
	'ui.jwt.clear': 'Limpiar',
	'ui.jwt.copy_jwt': 'Copiar token',
	'ui.jwt.copy_header': 'Copiar',
	'ui.jwt.copy_payload': 'Copiar',
	'ui.jwt.copy_signature': 'Copiar',
	'ui.jwt.worker_active': 'Entrada grande (>{size}) procesándose en Worker.',
	'ui.jwt.worker_failed': 'Error en el Worker. Usando el hilo principal como alternativa.',
	'ui.jwt.errors.invalid_signature': 'Firma JWT inválida',
	'ui.jwt.errors.invalid_base64': 'Codificación Base64URL inválida en segmentos JWT',
	// ── Base64 Codificar / Decodificar ───────────────────────────────────────
	'tool.encode-base64-encode-decode.display_name': 'Base64 Codificar / Decodificar',
	'tool.encode-base64-encode-decode.tagline':
		'Codifica o decodifica texto Base64 con variantes estándar y URL segura',
	'tool.encode-base64-encode-decode.description':
		'Codifica texto plano a Base64 o decodifica Base64 de vuelta a texto UTF-8 al instante en tu navegador. Cambia entre variante estándar y URL segura, controla el padding, ignora espacios al decodificar y procesa entradas grandes con Web Worker.',
	'tool.encode-base64-encode-decode.primary_keyword': 'base64 codificar decodificar',
	'tool.encode-base64-encode-decode.meta_title':
		'Base64 Codificar / Decodificar — Estándar y URL segura | fmtly.dev',
	'tool.encode-base64-encode-decode.meta_description':
		'Codifica o decodifica Base64 en tu navegador al instante. Incluye variantes estándar y URL segura, control de padding, decodificación tolerante a espacios y Web Worker para entradas grandes.',
	'tool.encode-base64-encode-decode.operation': 'Base64 Codificar / Decodificar',
	'tool.encode-base64-encode-decode.faq.0.question': '¿Mi entrada Base64 se envía a un servidor?',
	'tool.encode-base64-encode-decode.faq.0.answer':
		'No. Toda la codificación y decodificación Base64 ocurre íntegramente en tu navegador. Tus datos no salen del dispositivo.',
	'tool.encode-base64-encode-decode.faq.1.question':
		'¿Cuál es la diferencia entre Base64 estándar y Base64 URL segura?',
	'tool.encode-base64-encode-decode.faq.1.answer':
		'Base64 estándar usa + y /, mientras que Base64 URL segura usa - y _. La salida URL segura es ideal para JWT, parámetros de consulta y nombres de archivo con caracteres reservados en URL.',
	'tool.encode-base64-encode-decode.faq.2.question':
		'¿Puede decodificar Base64 con padding faltante o saltos de línea?',
	'tool.encode-base64-encode-decode.faq.2.answer':
		'Sí. El decodificador puede ignorar espacios y restaurar padding faltante automáticamente cuando sea posible, lo que facilita trabajar con valores copiados desde logs y tokens.',
	'tool.encode-base64-encode-decode.faq.3.question': '¿Puede manejar payloads Base64 grandes?',
	'tool.encode-base64-encode-decode.faq.3.answer':
		'Sí. Las entradas superiores a 500KB se procesan automáticamente en un Web Worker para mantener la interfaz fluida.',
	'tool.encode-base64-encode-decode.use_case.0':
		'Codificar credenciales API o payloads de prueba en Base64 durante desarrollo',
	'tool.encode-base64-encode-decode.use_case.1':
		'Decodificar fragmentos Base64 copiados desde logs, headers o herramientas de depuración',
	'tool.encode-base64-encode-decode.use_case.2':
		'Cambiar rápidamente entre variantes Base64 estándar y URL segura',
	'tool.encode-base64-encode-decode.use_case.3':
		'Normalizar entradas Base64 desordenadas con espacios y padding faltante',
	// ── Base64 Codificar / Decodificar — cadenas de interfaz ─────────────────
	'ui.base64.tab_label': 'Base64',
	'ui.base64.action_label': 'Acción',
	'ui.base64.action.encode': 'Codificar',
	'ui.base64.action.decode': 'Decodificar',
	'ui.base64.variant_label': 'Variante',
	'ui.base64.variant.standard': 'Estándar',
	'ui.base64.variant.url_safe': 'URL segura',
	'ui.base64.input_label': 'Entrada',
	'ui.base64.output_label': 'Salida',
	'ui.base64.input_placeholder': 'Pega texto plano o contenido Base64...',
	'ui.base64.output_placeholder': 'La salida codificada o decodificada aparece aquí...',
	'ui.base64.option.omit_padding': 'Quitar el padding final =',
	'ui.base64.option.ignore_whitespace': 'Ignorar saltos de línea y espacios al decodificar',
	'ui.base64.worker_active':
		'Se detectó una entrada grande (>{size}). El procesamiento se ejecuta en un Web Worker.',
	'ui.base64.worker_failed':
		'Falló el procesamiento en Worker. Se usa el hilo principal como alternativa.',
	'ui.base64.worker_badge': 'Worker',
	'ui.base64.warning.no_changes':
		'No se detectaron cambios para el modo y la acción seleccionados.',
	'ui.base64.warning.whitespace_ignored':
		'Se eliminaron caracteres de espacio antes de decodificar.',
	'ui.base64.warning.padding_auto_added':
		'Se añadió padding faltante automáticamente antes de decodificar.',
	'ui.base64.warning.alphabet_normalized':
		'Se normalizaron caracteres URL seguros a Base64 estándar para decodificar.',
	'ui.base64.error.invalid_base64_characters': 'Entrada Base64 inválida: {detail}',
	'ui.base64.error.invalid_base64_length': 'Longitud Base64 inválida: {detail}',
	'ui.base64.error.invalid_utf8_output':
		'Los bytes decodificados no forman texto UTF-8 válido: {detail}',
	'ui.base64.button.swap_direction': 'Cambiar dirección',
	'ui.base64.button.apply_output': 'Aplicar salida a la entrada',
	'ui.base64.toast.applied': 'La salida se aplicó a la entrada',
	'ui.base64.characters': 'caracteres',
	// ── Codificar / Decodificar URL ──────────────────────────────────────────
	'tool.encode-url-encode-decode.display_name': 'Codificar / Decodificar URL',
	'tool.encode-url-encode-decode.tagline':
		'Codifica o decodifica texto URL en modo componente o URL completa',
	'tool.encode-url-encode-decode.description':
		'Codifica o decodifica cadenas URL al instante en tu navegador. Cambia entre modo componente (encodeURIComponent/decodeURIComponent) y modo URL completa (encodeURI/decodeURI), gestiona + como espacios para datos de formulario y procesa entradas grandes con Web Worker.',
	'tool.encode-url-encode-decode.primary_keyword': 'codificar decodificar url',
	'tool.encode-url-encode-decode.meta_title':
		'Codificar / Decodificar URL — Codificación porcentual online | fmtly.dev',
	'tool.encode-url-encode-decode.meta_description':
		'Codifica o decodifica URLs en tu navegador. Incluye modo componente/URL completa, manejo de + y espacio, y procesamiento de entradas grandes con Web Worker.',
	'tool.encode-url-encode-decode.operation': 'Codificar / Decodificar URL',
	'tool.encode-url-encode-decode.faq.0.question': '¿Mis datos URL se envían a un servidor?',
	'tool.encode-url-encode-decode.faq.0.answer':
		'No. Toda la codificación y decodificación ocurre completamente en tu navegador. Tu entrada permanece en tu dispositivo.',
	'tool.encode-url-encode-decode.faq.1.question':
		'¿Cuál es la diferencia entre modo componente y modo URL completa?',
	'tool.encode-url-encode-decode.faq.1.answer':
		'El modo componente es para fragmentos individuales como valores de query o segmentos de ruta, por eso también codifica delimitadores como ?, & y =. El modo URL completa conserva esos delimitadores estructurales y solo codifica caracteres inseguros.',
	'tool.encode-url-encode-decode.faq.2.question': '¿Por qué + a veces se decodifica como espacio?',
	'tool.encode-url-encode-decode.faq.2.answer':
		'En payloads application/x-www-form-urlencoded, los espacios suelen representarse como +. Activa la opción de convertir + en espacio al decodificar datos de formularios.',
	'tool.encode-url-encode-decode.faq.3.question': '¿Puede manejar payloads URL grandes?',
	'tool.encode-url-encode-decode.faq.3.answer':
		'Sí. Las entradas de más de 500KB se procesan automáticamente en un Web Worker para mantener la interfaz fluida.',
	'tool.encode-url-encode-decode.use_case.0':
		'Codificar valores de parámetros query antes de enviar solicitudes API',
	'tool.encode-url-encode-decode.use_case.1':
		'Decodificar fragmentos URL copiados de logs durante depuración de rutas',
	'tool.encode-url-encode-decode.use_case.2':
		'Validar el comportamiento de + y espacio en muestras form-urlencoded',
	'tool.encode-url-encode-decode.use_case.3':
		'Comparar URLs codificadas y decodificadas al analizar redirecciones',
	// ── Entidades HTML codificar / decodificar — herramienta ────────────────
	'tool.encode-html-entities-encode-decode.display_name': 'Codificar / decodificar entidades HTML',
	'tool.encode-html-entities-encode-decode.tagline':
		'Codifica o decodifica referencias de carácter HTML: nombres WHATWG, decimal y hexadecimal',
	'tool.encode-html-entities-encode-decode.description':
		'Convierte texto a entidades HTML seguras o decodifica referencias a Unicode en tu navegador. Lista completa de nombres WHATWG, formas numéricas, decodificación estricta o permisiva, opción para no ASCII y Web Worker por encima de 500 KB.',
	'tool.encode-html-entities-encode-decode.primary_keyword':
		'codificar decodificar entidades html online',
	'tool.encode-html-entities-encode-decode.meta_title':
		'Entidades HTML: codificar y decodificar online | fmtly.dev',
	'tool.encode-html-entities-encode-decode.meta_description':
		'Codifica o decodifica entidades HTML al instante en el navegador. Mapa WHATWG completo, modos decimal y hexadecimal, validación estricta, alcance esencial frente a Unicode completo y Web Worker para entradas grandes.',
	'tool.encode-html-entities-encode-decode.operation': 'Codificar / decodificar entidades HTML',
	'tool.encode-html-entities-encode-decode.faq.0.question': '¿Se envía mi texto a un servidor?',
	'tool.encode-html-entities-encode-decode.faq.0.answer':
		'No. Toda la codificación y decodificación se ejecuta localmente en tu navegador; tu entrada no sale del dispositivo.',
	'tool.encode-html-entities-encode-decode.faq.1.question':
		'¿Qué diferencia hay entre decodificar en modo estricto y permisivo?',
	'tool.encode-html-entities-encode-decode.faq.1.answer':
		'El modo permisivo deja intactas las referencias desconocidas o mal formadas, útil en fragmentos mixtos. El estricto falla con error si una referencia está incompleta o no reconocida.',
	'tool.encode-html-entities-encode-decode.faq.2.question': '¿Qué entidades con nombre se admiten?',
	'tool.encode-html-entities-encode-decode.faq.2.answer':
		'La decodificación usa la lista completa WHATWG de referencias con nombre (más de 2.100) además de referencias numéricas decimales y hexadecimales.',
	'tool.encode-html-entities-encode-decode.faq.3.question':
		'¿Puede manejar documentos muy grandes?',
	'tool.encode-html-entities-encode-decode.faq.3.answer':
		'Sí. Las entradas de más de 500 KB se procesan en un Web Worker para mantener la interfaz fluida.',
	'tool.encode-html-entities-encode-decode.use_case.0':
		'Escapar fragmentos generados por usuarios antes de insertarlos en plantillas HTML',
	'tool.encode-html-entities-encode-decode.use_case.1':
		'Decodificar entidades de HTML exportado o scrapeado a texto plano legible',
	'tool.encode-html-entities-encode-decode.use_case.2':
		'Normalizar comillas, ampersands y símbolos para marcado en CMS o correo',
	'tool.encode-html-entities-encode-decode.use_case.3':
		'Comprobar reglas de análisis estricto en fragmentos HTML o datos de prueba',
	// ── Entidades HTML — interfaz ──────────────────────────────────────────
	'ui.encode_html_entities.tab_label': 'Entidades',
	'ui.encode_html_entities.action_label': 'Acción',
	'ui.encode_html_entities.action.encode': 'Codificar',
	'ui.encode_html_entities.action.decode': 'Decodificar',
	'ui.encode_html_entities.format_label': 'Formato de salida',
	'ui.encode_html_entities.format.named': 'Nombradas + respaldo numérico',
	'ui.encode_html_entities.format.decimal': 'Numérico decimal',
	'ui.encode_html_entities.format.hex': 'Numérico hexadecimal',
	'ui.encode_html_entities.scope_label': 'Alcance de codificación',
	'ui.encode_html_entities.scope.essentials': 'Esenciales (& < > " \')',
	'ui.encode_html_entities.scope.all_non_ascii': 'Esenciales + todo lo no ASCII',
	'ui.encode_html_entities.apostrophe_label': 'Apostrofe (modo nombrado)',
	'ui.encode_html_entities.apostrophe.numeric': '&#39;',
	'ui.encode_html_entities.apostrophe.apos': '&apos;',
	'ui.encode_html_entities.option.encode_line_breaks': 'Codificar CR/LF como entidades numéricas',
	'ui.encode_html_entities.option.encode_apostrophe': 'Codificar apostrofe (U+0027)',
	'ui.encode_html_entities.decode_mode_label': 'Modo de decodificación',
	'ui.encode_html_entities.decode.permissive': 'Permisivo',
	'ui.encode_html_entities.decode.strict': 'Estricto',
	'ui.encode_html_entities.decode.hint':
		'El modo estricto rechaza referencias desconocidas o mal formadas. El permisivo deja los fragmentos inválidos sin cambios.',
	'ui.encode_html_entities.input_label': 'Entrada',
	'ui.encode_html_entities.output_label': 'Salida',
	'ui.encode_html_entities.input_placeholder': 'Pega texto o fragmentos HTML con entidades...',
	'ui.encode_html_entities.output_placeholder':
		'La salida codificada o decodificada aparece aquí...',
	'ui.encode_html_entities.worker_active':
		'Entrada grande detectada (>{size}). El procesamiento corre en un Web Worker.',
	'ui.encode_html_entities.worker_failed':
		'Falló el Worker. Se vuelve al procesamiento en el hilo principal.',
	'ui.encode_html_entities.worker_badge': 'Worker',
	'ui.encode_html_entities.warning.no_changes':
		'No se detectaron cambios con las opciones seleccionadas.',
	'ui.encode_html_entities.error.invalid_entity': '{detail} (posición {offset})',
	'ui.encode_html_entities.error.incomplete_reference': '{detail} (posición {offset})',
	'ui.encode_html_entities.button.swap_direction': 'Cambiar dirección',
	'ui.encode_html_entities.button.apply_output': 'Aplicar salida a la entrada',
	'ui.encode_html_entities.toast.applied': 'La salida se aplicó a la entrada',
	'ui.encode_html_entities.characters': 'caracteres',
	// ── Inspector Unicode — herramienta ──────────────────────────────────────
	'tool.encode-unicode-inspector.display_name': 'Inspector Unicode',
	'tool.encode-unicode-inspector.tagline':
		'Inspecciona puntos de código, bytes UTF-8, nombres, categoría, script y anchura de Asia oriental',
	'tool.encode-unicode-inspector.description':
		'Pega cualquier texto UTF-8 para ver cada clúster de grafemas o cada valor escalar Unicode con notación U+, bytes hex UTF-8, nombre oficial, categoría general, script y anchura de Asia oriental. Las entradas grandes se procesan en un Web Worker; todo ocurre en tu navegador.',
	'tool.encode-unicode-inspector.primary_keyword': 'inspector unicode puntos de código',
	'tool.encode-unicode-inspector.meta_title': 'Inspector Unicode — UTF-8 y U+ | fmtly.dev',
	'tool.encode-unicode-inspector.meta_description':
		'Inspecciona Unicode en el navegador: puntos U+, bytes UTF-8, nombres, categoría, script y anchura de Asia oriental. Modo grafema o escalar; Worker para textos grandes. Privado e instantáneo.',
	'tool.encode-unicode-inspector.operation': 'Inspeccionar Unicode',
	'tool.encode-unicode-inspector.faq.0.question': '¿Se sube mi texto a un servidor?',
	'tool.encode-unicode-inspector.faq.0.answer':
		'No. El análisis se ejecuta por completo en tu navegador. Tu entrada no sale del dispositivo.',
	'tool.encode-unicode-inspector.faq.1.question':
		'¿Qué diferencia hay entre modo grafema y escalar?',
	'tool.encode-unicode-inspector.faq.1.answer':
		'El modo grafema agrupa caracteres percibidos por el usuario (emojis con tonos, secuencias ZWJ, marcas combinantes) si el navegador admite Intl.Segmenter. El modo escalar lista cada punto de código Unicode por separado.',
	'tool.encode-unicode-inspector.faq.2.question':
		'¿Por qué a veces los nombres o propiedades parecen poco familiares?',
	'tool.encode-unicode-inspector.faq.2.answer':
		'Los nombres y propiedades siguen la Unicode Character Database. Los puntos no asignados aparecen como «unassigned» o similar; algunos símbolos usan nombres normativos de Unicode.',
	'tool.encode-unicode-inspector.faq.3.question':
		'¿Por qué las entradas grandes usan un Web Worker?',
	'tool.encode-unicode-inspector.faq.3.answer':
		'Las entradas de más de 500 KB se procesan fuera del hilo principal para que la tabla, el desplazamiento y los controles sigan fluidos al consultar las tablas Unicode.',
	'tool.encode-unicode-inspector.use_case.0':
		'Depurar caracteres invisibles, codificación incorrecta o mezcla de scripts en registros y entradas de usuario',
	'tool.encode-unicode-inspector.use_case.1':
		'Comprobar secuencias UTF-8 y puntos de código para nombres de archivo o APIs internacionalizados',
	'tool.encode-unicode-inspector.use_case.2':
		'Enseñar conceptos Unicode: clústeres de grafemas, marcas combinantes y secuencias de emoji',
	'tool.encode-unicode-inspector.use_case.3':
		'Exportar una tabla TSV de segmentos y propiedades para documentación o datos de prueba',
	// ── Inspector Unicode — interfaz ─────────────────────────────────────────
	'ui.unicode_inspector.tab_label': 'Unicode',
	'ui.unicode_inspector.utf16_units': 'unidades UTF-16',
	'ui.unicode_inspector.backend_load_error':
		'No se pudieron cargar las tablas de nombres Unicode. Comprueba la conexión e inténtalo de nuevo.',
	'ui.unicode_inspector.worker_failed':
		'Falló el procesamiento en Worker. Volviendo al hilo principal.',
	'ui.unicode_inspector.granularity_label': 'Segmentación',
	'ui.unicode_inspector.granularity.grapheme': 'Clústeres de grafemas',
	'ui.unicode_inspector.granularity.codepoint': 'Valores escalares Unicode',
	'ui.unicode_inspector.granularity_hint':
		'El modo grafema usa Intl.Segmenter si está disponible (secuencias ZWJ de emoji, marcas combinantes). Si no, se muestra cada escalar por separado.',
	'ui.unicode_inspector.max_scalars_label': 'Límite de filas (escalares)',
	'ui.unicode_inspector.worker_active':
		'Entrada grande (>{size}). La inspección se ejecuta en un Web Worker.',
	'ui.unicode_inspector.copy_tsv': 'Copiar TSV',
	'ui.unicode_inspector.input_label': 'Entrada',
	'ui.unicode_inspector.input_placeholder': 'Pega texto UTF-8 para inspeccionar puntos de código…',
	'ui.unicode_inspector.results_label': 'Inspección',
	'ui.unicode_inspector.loading_backend': 'Cargando datos Unicode…',
	'ui.unicode_inspector.worker_badge': 'Worker',
	'ui.unicode_inspector.summary':
		'{clusters} clústeres · {scalars} escalares · {bytes} bytes UTF-8 · {ms} ms',
	'ui.unicode_inspector.truncated':
		'Salida truncada; {omitted} escalar(es) más no mostrados. Sube el límite o acorta la entrada.',
	'ui.unicode_inspector.col.segment': 'Segmento',
	'ui.unicode_inspector.col.codepoint': 'U+',
	'ui.unicode_inspector.col.glyph': 'Glifo',
	'ui.unicode_inspector.col.utf8': 'UTF-8',
	'ui.unicode_inspector.col.category': 'Cat.',
	'ui.unicode_inspector.col.script': 'Script',
	'ui.unicode_inspector.col.eaw': 'EaW',
	'ui.unicode_inspector.col.name': 'Nombre',
	'ui.unicode_inspector.table_region': 'Tabla de escalares Unicode',
	'ui.unicode_inspector.empty_hint': 'Escribe o pega texto para ver puntos de código y nombres.',
	'ui.unicode_inspector.gc.Lu': 'Letra, mayúscula',
	'ui.unicode_inspector.gc.Ll': 'Letra, minúscula',
	'ui.unicode_inspector.gc.Lt': 'Letra, título',
	'ui.unicode_inspector.gc.Lm': 'Letra, modificador',
	'ui.unicode_inspector.gc.Lo': 'Letra, otra',
	'ui.unicode_inspector.gc.Mn': 'Marca, no espaciadora',
	'ui.unicode_inspector.gc.Mc': 'Marca, espaciadora combinante',
	'ui.unicode_inspector.gc.Me': 'Marca, encerrante',
	'ui.unicode_inspector.gc.Nd': 'Número, dígito decimal',
	'ui.unicode_inspector.gc.Nl': 'Número, letra',
	'ui.unicode_inspector.gc.No': 'Número, otro',
	'ui.unicode_inspector.gc.Pc': 'Puntuación, conector',
	'ui.unicode_inspector.gc.Pd': 'Puntuación, guión',
	'ui.unicode_inspector.gc.Ps': 'Puntuación, apertura',
	'ui.unicode_inspector.gc.Pe': 'Puntuación, cierre',
	'ui.unicode_inspector.gc.Pi': 'Puntuación, comilla inicial',
	'ui.unicode_inspector.gc.Pf': 'Puntuación, comilla final',
	'ui.unicode_inspector.gc.Po': 'Puntuación, otro',
	'ui.unicode_inspector.gc.Sm': 'Símbolo, matemáticas',
	'ui.unicode_inspector.gc.Sc': 'Símbolo, moneda',
	'ui.unicode_inspector.gc.Sk': 'Símbolo, modificador',
	'ui.unicode_inspector.gc.So': 'Símbolo, otro',
	'ui.unicode_inspector.gc.Zs': 'Separador, espacio',
	'ui.unicode_inspector.gc.Zl': 'Separador, línea',
	'ui.unicode_inspector.gc.Zp': 'Separador, párrafo',
	'ui.unicode_inspector.gc.Cc': 'Otro, control',
	'ui.unicode_inspector.gc.Cf': 'Otro, formato',
	'ui.unicode_inspector.gc.Cs': 'Otro, sustituto',
	'ui.unicode_inspector.gc.Co': 'Otro, uso privado',
	'ui.unicode_inspector.gc.Cn': 'Otro, sin asignar',
	// ── Hex ↔ Texto — herramienta ─────────────────────────────────────────────
	'tool.encode-hex-encode-decode.display_name': 'Hex ↔ ASCII / UTF-8',
	'tool.encode-hex-encode-decode.tagline':
		'Convierte texto UTF-8 a bytes hexadecimales o vuelca hex a texto legible',
	'tool.encode-hex-encode-decode.description':
		'Codifica cualquier cadena UTF-8 en pares de bytes hex con mayúsculas, separadores y saltos de línea configurables. Decodifica hex permisivo (espacios, comas, prefijos 0x) a texto con validación UTF-8 estricta. Las entradas grandes usan Web Worker; todo ocurre en el navegador.',
	'tool.encode-hex-encode-decode.primary_keyword': 'hex a texto utf-8',
	'tool.encode-hex-encode-decode.meta_title': 'Hex ↔ Texto — UTF-8 y ASCII | fmtly.dev',
	'tool.encode-hex-encode-decode.meta_description':
		'Convierte hex a texto UTF-8 o texto a hex en el navegador. Delimitadores, mayúsculas, saltos, prefijos 0x y Worker. Privado y rápido.',
	'tool.encode-hex-encode-decode.operation': 'Codificar / decodificar hex',
	'tool.encode-hex-encode-decode.faq.0.question': '¿Se envían mis datos a un servidor?',
	'tool.encode-hex-encode-decode.faq.0.answer':
		'No. Toda la conversión se ejecuta en tu navegador. Tu texto y hex no salen del dispositivo.',
	'tool.encode-hex-encode-decode.faq.1.question': '¿Qué codificación usa la herramienta?',
	'tool.encode-hex-encode-decode.faq.1.answer':
		'El texto se interpreta como UTF-8 en ambos sentidos. ASCII es un subconjunto de UTF-8, así que el inglés simple se comporta igual.',
	'tool.encode-hex-encode-decode.faq.2.question':
		'¿Por qué falla la decodificación con «UTF-8 no válido»?',
	'tool.encode-hex-encode-decode.faq.2.answer':
		'Los bytes decodificados deben formar UTF-8 válido. Hex binario aleatorio u otras codificaciones no se mostrarán como texto; usa la herramienta adecuada.',
	'tool.encode-hex-encode-decode.faq.3.question': '¿Por qué un Web Worker con entradas grandes?',
	'tool.encode-hex-encode-decode.faq.3.answer':
		'Las entradas de más de 500 KB se procesan fuera del hilo principal para mantener fluidos la escritura, el desplazamiento y los controles.',
	'tool.encode-hex-encode-decode.use_case.0':
		'Pasar hex del portapapeles de registros o capturas a fragmentos UTF-8 legibles',
	'tool.encode-hex-encode-decode.use_case.1':
		'Generar volcados hex formateados para documentación, pruebas o constantes embebidas',
	'tool.encode-hex-encode-decode.use_case.2':
		'Comprobar cómo los emoji y caracteres no latinos se expanden a bytes UTF-8',
	'tool.encode-hex-encode-decode.use_case.3':
		'Alternar rápidamente entre hex y texto al depurar APIs, tokens o cargas codificadas',
	// ── Hex ↔ Texto — interfaz ────────────────────────────────────────────────
	'ui.hex.tab_label': 'Hex',
	'ui.hex.action_label': 'Acción',
	'ui.hex.action.encode': 'Texto → hex',
	'ui.hex.action.decode': 'Hex → texto',
	'ui.hex.hex_case_label': 'Mayúsculas / minúsculas',
	'ui.hex.hex_case.upper': 'Mayúsculas',
	'ui.hex.hex_case.lower': 'Minúsculas',
	'ui.hex.delimiter_label': 'Separador de bytes',
	'ui.hex.delimiter.space': 'Espacio',
	'ui.hex.delimiter.none': 'Ninguno',
	'ui.hex.delimiter.comma': 'Coma',
	'ui.hex.bytes_per_line_label': 'Bytes por línea',
	'ui.hex.bytes_per_line.off': 'Sin salto',
	'ui.hex.bytes_per_line.n': '{n} bytes',
	'ui.hex.decode_options_label': 'Opciones de decodificación',
	'ui.hex.option.ignore_whitespace': 'Ignorar espacios y saltos de línea',
	'ui.hex.option.ignore_commas': 'Ignorar comas separadoras',
	'ui.hex.option.allow_0x': 'Permitir prefijo 0x antes de cada byte',
	'ui.hex.worker_active':
		'Se detectó una entrada grande (>{size}). El procesamiento se ejecuta en un Web Worker.',
	'ui.hex.worker_failed': 'Falló el procesamiento en Worker. Volviendo al hilo principal.',
	'ui.hex.worker_badge': 'Worker',
	'ui.hex.button.swap_direction': 'Cambiar dirección',
	'ui.hex.button.apply_output': 'Aplicar salida a la entrada',
	'ui.hex.input_label': 'Entrada',
	'ui.hex.output_label': 'Salida',
	'ui.hex.input_placeholder': 'Texto plano para codificar, o dígitos hex para decodificar a UTF-8…',
	'ui.hex.output_placeholder': 'La salida hex o el texto UTF-8 decodificado aparece aquí…',
	'ui.hex.characters': 'caracteres',
	'ui.hex.toast.applied': 'La salida se aplicó a la entrada',
	'ui.hex.warning.whitespace_skipped':
		'Se ignoraron espacios en blanco al analizar los dígitos hex.',
	'ui.hex.warning.commas_skipped': 'Se ignoraron comas separadoras al analizar.',
	'ui.hex.error.invalid_hex_digit':
		'Carácter no válido en la entrada hex (cerca de la columna {position}).',
	'ui.hex.error.odd_hex_length':
		'Cantidad impar de dígitos hex ({count}). Se requieren pares para bytes.',
	'ui.hex.error.invalid_utf8': 'Los bytes decodificados no son UTF-8 válido ({bytes} bytes).',
	// ── ROT13 / César — herramienta ─────────────────────────────────────────
	'tool.encode-rot13-caesar-cipher.display_name': 'ROT13 / cifrado César',
	'tool.encode-rot13-caesar-cipher.tagline':
		'ROT13 para spoilers o cifrado César en A–Z y a–z con modos cifrar y descifrar',
	'tool.encode-rot13-caesar-cipher.description':
		'Aplica ROT13 clásico (13 posiciones, auto-inverso) o César con desplazamiento 1–25. Elige cifrar o descifrar en César, usa ajustes rápidos o un deslizador; los números, la puntuación y el Unicode fuera del latino básico no cambian. Las entradas grandes usan Web Worker; todo ocurre en el navegador.',
	'tool.encode-rot13-caesar-cipher.primary_keyword': 'rot13 cesar cifra online',
	'tool.encode-rot13-caesar-cipher.meta_title': 'ROT13 y César — fmtly.dev',
	'tool.encode-rot13-caesar-cipher.meta_description':
		'ROT13 y César en el navegador: cifrar, descifrar, ajustes 1–25, Worker para textos grandes. Solo letras; privado e instantáneo.',
	'tool.encode-rot13-caesar-cipher.operation': 'ROT13 / César',
	'tool.encode-rot13-caesar-cipher.faq.0.question': '¿Se sube mi texto a algún sitio?',
	'tool.encode-rot13-caesar-cipher.faq.0.answer':
		'No. La transformación se ejecuta por completo en tu navegador. Tu texto no sale del dispositivo.',
	'tool.encode-rot13-caesar-cipher.faq.1.question': '¿Qué caracteres cambian?',
	'tool.encode-rot13-caesar-cipher.faq.1.answer':
		'Solo se rotan las letras latinas básicas A–Z y a–z. Espacios, dígitos, puntuación, letras acentuadas, emoji y el resto de Unicode permanecen igual.',
	'tool.encode-rot13-caesar-cipher.faq.2.question': '¿Es cifrado real?',
	'tool.encode-rot13-caesar-cipher.faq.2.answer':
		'No. ROT13 y César son ofuscación para juegos, spoilers o didáctica; se rompen con facilidad y no protegen secretos.',
	'tool.encode-rot13-caesar-cipher.faq.3.question': '¿Por qué un Web Worker con entradas grandes?',
	'tool.encode-rot13-caesar-cipher.faq.3.answer':
		'Las entradas de más de 500 KB se procesan fuera del hilo principal para mantener fluida la edición.',
	'tool.encode-rot13-caesar-cipher.use_case.0':
		'Ocultar spoilers de acertijos o relatos en foros y chats con texto ROT13 reversible',
	'tool.encode-rot13-caesar-cipher.use_case.1':
		'Enseñar cifrados de sustitución clásicos y aritmética modular en el alfabeto',
	'tool.encode-rot13-caesar-cipher.use_case.2':
		'Probar varios desplazamientos César al resolver retos CTF o en papel',
	'tool.encode-rot13-caesar-cipher.use_case.3':
		'Devolver a texto legible cargas ROT13 procedentes de APIs o registros',
	// ── ROT13 / César — interfaz ──────────────────────────────────────────────
	'ui.rot13.tab_label': 'ROT13',
	'ui.rot13.mode_label': 'Cifrado',
	'ui.rot13.mode.rot13': 'ROT13',
	'ui.rot13.mode.caesar': 'César',
	'ui.rot13.rot13_hint':
		'ROT13 rota A–Z y a–z 13 posiciones. Aplicarlo dos veces recupera el texto original.',
	'ui.rot13.direction_label': 'Dirección',
	'ui.rot13.direction.encrypt': 'Cifrar (adelante)',
	'ui.rot13.direction.decrypt': 'Descifrar (atrás)',
	'ui.rot13.shift_label': 'Desplazamiento (1–25)',
	'ui.rot13.presets_label': 'Ajustes',
	'ui.rot13.caesar_scope_hint':
		'Solo se desplazan las letras latinas básicas A–Z y a–z; números, puntuación, espacios y el resto de Unicode no cambian.',
	'ui.rot13.worker_active':
		'Se detectó una entrada grande (>{size}). El procesamiento se ejecuta en un Web Worker.',
	'ui.rot13.worker_failed': 'Falló el procesamiento en Worker. Volviendo al hilo principal.',
	'ui.rot13.worker_badge': 'Worker',
	'ui.rot13.button.apply_output': 'Aplicar salida a la entrada',
	'ui.rot13.input_label': 'Entrada',
	'ui.rot13.output_label': 'Salida',
	'ui.rot13.input_placeholder': 'Escribe o pega texto para transformar…',
	'ui.rot13.output_placeholder': 'El texto transformado aparece aquí…',
	'ui.rot13.characters': 'caracteres',
	'ui.rot13.toast.applied': 'La salida se aplicó a la entrada',
	// ── Punycode / IDN tool ───────────────────────────────────────────────────
	'tool.encode-punycode-encode-decode.display_name': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.tagline':
		'Convierte dominios y correos internacionalizados entre Unicode y ASCII con prefijo xn--',
	'tool.encode-punycode-encode-decode.description':
		'Convierte nombres de dominio y direcciones con etiquetas no ASCII a Punycode (ASCII con prefijo xn--) y viceversa. Respeta varias etiquetas y la parte local del correo. Todo en el navegador; entradas grandes usan un Web Worker.',
	'tool.encode-punycode-encode-decode.primary_keyword': 'punycode idn codificar online',
	'tool.encode-punycode-encode-decode.meta_title':
		'Punycode e IDN — Codificar / Decodificar — fmtly.dev',
	'tool.encode-punycode-encode-decode.meta_description':
		'Pasa dominios y correos Unicode a Punycode (xn--) y decodifica al revés. Privado, instantáneo, solo en el navegador; Worker para textos grandes.',
	'tool.encode-punycode-encode-decode.operation': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.faq.0.question':
		'¿Se envían mi dominio o correo a un servidor?',
	'tool.encode-punycode-encode-decode.faq.0.answer':
		'No. La conversión usa la biblioteca Punycode solo en tu navegador. Tus cadenas no salen del dispositivo.',
	'tool.encode-punycode-encode-decode.faq.1.question': '¿Qué hace «codificar» aquí?',
	'tool.encode-punycode-encode-decode.faq.1.answer':
		'Codificar aplica IDNA toASCII: cada etiqueta con caracteres no ASCII pasa a ASCII con prefijo xn--. Las etiquetas solo ASCII no cambian.',
	'tool.encode-punycode-encode-decode.faq.2.question': '¿Valida reglas reales de registro DNS?',
	'tool.encode-punycode-encode-decode.faq.2.answer':
		'Aplica conversión Punycode al estilo RFC 3492 / 5891. Las comprobaciones completas UTS #46 para registro van más allá de esta herramienta.',
	'tool.encode-punycode-encode-decode.faq.3.question':
		'¿Por qué un Web Worker con entradas grandes?',
	'tool.encode-punycode-encode-decode.faq.3.answer':
		'Entradas de más de 500 KB se procesan fuera del hilo principal para mantener la UI fluida.',
	'tool.encode-punycode-encode-decode.use_case.0':
		'Prever cómo se verá un host o dominio de correo Unicode en DNS (forma xn--)',
	'tool.encode-punycode-encode-decode.use_case.1':
		'Decodificar hostnames xn-- de registros, certificados o herramientas de desarrollo',
	'tool.encode-punycode-encode-decode.use_case.2':
		'Convertir ejemplos IDN en documentación o tickets de soporte',
	'tool.encode-punycode-encode-decode.use_case.3':
		'Depurar URLs y correos mezclando etiquetas ASCII e internacionalizadas',
	// ── Punycode / IDN UI ─────────────────────────────────────────────────────
	'ui.punycode.tab_label': 'Punycode',
	'ui.punycode.action_label': 'Acción',
	'ui.punycode.action.encode': 'Unicode → ASCII (IDN)',
	'ui.punycode.action.decode': 'ASCII → Unicode',
	'ui.punycode.hint':
		'Dominios y correos internacionalizados: las etiquetas Unicode pasan a ASCII con xn--; decodificar invierte el proceso.',
	'ui.punycode.loading_library': 'Cargando Punycode…',
	'ui.punycode.library_load_failed': 'No se pudo cargar la biblioteca Punycode.',
	'ui.punycode.worker_active': 'Entrada grande (>{size}). Procesamiento en Web Worker.',
	'ui.punycode.worker_failed': 'Falló el Worker. Se vuelve al hilo principal.',
	'ui.punycode.worker_badge': 'Worker',
	'ui.punycode.button.swap_direction': 'Intercambiar dirección',
	'ui.punycode.button.apply_output': 'Aplicar salida a la entrada',
	'ui.punycode.input_label': 'Entrada',
	'ui.punycode.output_label': 'Salida',
	'ui.punycode.input_placeholder': 'Dominio o correo con Unicode, o ASCII con segmentos xn--…',
	'ui.punycode.output_placeholder': 'IDN ASCII o Unicode decodificado aparece aquí…',
	'ui.punycode.characters': 'caracteres',
	'ui.punycode.toast.applied': 'La salida se aplicó a la entrada',
	'ui.punycode.error.invalid_punycode':
		'Punycode o dominio no válido. Revisa etiquetas y prefijos xn--.',
	'ui.punycode.error.processing': 'Error de conversión: {detail}',
	// ── Codificar / Decodificar URL — cadenas de interfaz ────────────────────
	'ui.encode_url.tab_label': 'URL',
	'ui.encode_url.action_label': 'Acción',
	'ui.encode_url.action.encode': 'Codificar',
	'ui.encode_url.action.decode': 'Decodificar',
	'ui.encode_url.mode_label': 'Modo',
	'ui.encode_url.mode.component': 'Componente URL',
	'ui.encode_url.mode.full_url': 'URL completa',
	'ui.encode_url.input_label': 'Entrada',
	'ui.encode_url.output_label': 'Salida',
	'ui.encode_url.input_placeholder': 'Pega texto, parámetros query o una URL completa...',
	'ui.encode_url.output_placeholder': 'La salida codificada o decodificada aparece aquí...',
	'ui.encode_url.option.encode_spaces_as_plus': 'Codificar espacios como +',
	'ui.encode_url.option.decode_plus_as_space': 'Decodificar + como espacio',
	'ui.encode_url.worker_active':
		'Se detectó una entrada grande (>{size}). El procesamiento se ejecuta en un Web Worker.',
	'ui.encode_url.worker_failed':
		'Falló el procesamiento en Worker. Se usa el hilo principal como alternativa.',
	'ui.encode_url.worker_badge': 'Worker',
	'ui.encode_url.warning.no_changes':
		'No se detectaron cambios para el modo y la acción seleccionados.',
	'ui.encode_url.error.invalid_url_encoding': 'Entrada URL inválida: {detail}',
	'ui.encode_url.button.swap_direction': 'Cambiar dirección',
	'ui.encode_url.button.apply_output': 'Aplicar salida a la entrada',
	'ui.encode_url.toast.applied': 'La salida se aplicó a la entrada',
	'ui.encode_url.characters': 'caracteres',
	'category.qr.display_name': 'QR',
	'category.qr.description':
		'Genera códigos QR en tu navegador con salida SVG y PNG, superposición de logotipo, controles de color y niveles de corrección de errores pensados para escaneo.',
	'category.qr.primary_keyword': 'herramientas qr',
	'tool.qr-code-generator.display_name': 'Generador de Códigos QR',
	'tool.qr-code-generator.tagline':
		'Genera códigos QR de marca con vista previa en vivo, exportación SVG/PNG, colores, margen y superposición de logotipo',
	'tool.qr-code-generator.description':
		'Genera códigos QR fáciles de escanear directamente en tu navegador. Ajusta tamaño, zona silenciosa, colores, fondo transparente, nivel de corrección de errores y logotipo centrado, y exporta SVG o PNG listos para producción sin enviar datos a un servidor.',
	'tool.qr-code-generator.primary_keyword': 'generador de codigos qr',
	'tool.qr-code-generator.meta_title':
		'Generador de Códigos QR — SVG, PNG, Colores y Logotipo | fmtly.dev',
	'tool.qr-code-generator.meta_description':
		'Genera códigos QR online con vista previa en vivo, exportación SVG y PNG, colores personalizados, zona silenciosa, fondo transparente y superposición de logotipo. Privado y 100% en el navegador.',
	'tool.qr-code-generator.operation': 'Generar Código QR',
	'tool.qr-code-generator.faq.0.question': '¿Mi contenido QR se sube a un servidor?',
	'tool.qr-code-generator.faq.0.answer':
		'No. La generación del QR ocurre íntegramente en tu navegador. El texto, la URL, el payload Wi-Fi o cualquier otro contenido permanece en tu dispositivo.',
	'tool.qr-code-generator.faq.1.question': '¿Qué formatos de exportación están disponibles?',
	'tool.qr-code-generator.faq.1.answer':
		'La herramienta exporta SVG y PNG. SVG es ideal para impresión, sistemas de diseño y escalado sin pérdida de calidad, mientras que PNG resulta práctico para compartir rápidamente y para piezas sociales.',
	'tool.qr-code-generator.faq.2.question': '¿Qué afecta la corrección de errores?',
	'tool.qr-code-generator.faq.2.answer':
		'Una corrección de errores más alta hace que el código QR resista mejor daños, compresión y logotipos centrales, pero reduce la cantidad de contenido que cabe en un solo código.',
	'tool.qr-code-generator.faq.3.question': '¿Por qué un texto muy largo puede fallar al generarse?',
	'tool.qr-code-generator.faq.3.answer':
		'Un código QR tiene capacidad limitada. Si el contenido es demasiado grande para el nivel de corrección elegido, acorta el payload o usa una URL de redirección más corta.',
	'tool.qr-code-generator.use_case.0':
		'Generar códigos QR para landing pages, instalaciones de apps o URLs de campaña',
	'tool.qr-code-generator.use_case.1':
		'Crear códigos QR de marca con logotipo centrado para carteles, packaging y materiales impresos',
	'tool.qr-code-generator.use_case.2':
		'Exportar recursos SVG nítidos para Figma, sistemas de diseño o documentación técnica',
	'tool.qr-code-generator.use_case.3':
		'Probar cómo el margen, los colores y la corrección de errores afectan la fiabilidad antes de publicar',
	'tool.qr-code-reader.display_name': 'Lector de códigos QR',
	'tool.qr-code-reader.tagline':
		'Escanea códigos QR desde imágenes en el navegador, con decodificación rápida, pegado desde el portapapeles y Web Worker opcional',
	'tool.qr-code-reader.description':
		'Sube PNG, JPG o WebP o pega una captura para extraer al instante el contenido del QR. La decodificación es local; las imágenes grandes pueden usar Web Workers: sin subidas ni cuentas.',
	'tool.qr-code-reader.primary_keyword': 'leer codigo qr online',
	'tool.qr-code-reader.meta_title':
		'Lector de códigos QR — Escanear imágenes y pegar capturas | fmtly',
	'tool.qr-code-reader.meta_description':
		'Lee códigos QR desde imágenes en el navegador. Arrastrar y soltar, cámara, pegado desde el portapapeles y decodificación en Web Worker para fotos grandes. Privado y sin servidor.',
	'tool.qr-code-reader.operation': 'Leer código QR',
	'tool.qr-code-reader.faq.0.question': '¿Se suben mis imágenes a un servidor?',
	'tool.qr-code-reader.faq.0.answer':
		'No. Las imágenes se procesan por completo en tu navegador con JavaScript y, si hace falta, con Web Workers.',
	'tool.qr-code-reader.faq.1.question': '¿Qué formatos de imagen funcionan mejor?',
	'tool.qr-code-reader.faq.1.answer':
		'PNG y JPG suelen ser los más fiables. WebP y GIF también funcionan. Las imágenes muy pequeñas o muy comprimidas pueden ser más difíciles de decodificar.',
	'tool.qr-code-reader.faq.2.question': '¿Para qué sirve un Web Worker?',
	'tool.qr-code-reader.faq.2.answer':
		'Las fotos grandes generan búferes de píxeles grandes. Externalizar la decodificación mantiene fluidos el desplazamiento y la escritura mientras termina el escaneo.',
	'tool.qr-code-reader.faq.3.question': '¿Puedo escanear un QR desde una captura de pantalla?',
	'tool.qr-code-reader.faq.3.answer':
		'Sí. Copia una imagen al portapapeles y pégala en esta página, o guarda la captura y súbela.',
	'tool.qr-code-reader.use_case.0':
		'Abrir enlaces Wi‑Fi, de eventos o deep links de apps desde una foto',
	'tool.qr-code-reader.use_case.1':
		'Comprobar gráficos de marketing con QR antes de imprimir verificando la URL extraída',
	'tool.qr-code-reader.use_case.2': 'Decodificar un QR desde una captura sin instalar una app',
	'tool.qr-code-reader.use_case.3':
		'Recuperar texto plano o vCard desde fotos de credenciales de conferencia',
	'tool.barcode-generator.display_name': 'Generador de códigos de barras',
	'tool.barcode-generator.tagline':
		'Crea Code 128, EAN-13, UPC-A, ITF-14 y más en SVG o PNG nítidos — listo para impresión y escáneres',
	'tool.barcode-generator.description':
		'Genera códigos de barras 1D profesionales en el navegador con vista previa en vivo. Elige la simbología, ajusta anchura, altura, zona silenciosa y colores, y exporta SVG o PNG. Las cargas muy grandes pueden renderizarse en un Web Worker para mantener la interfaz fluida; nada sale de tu dispositivo.',
	'tool.barcode-generator.primary_keyword': 'generador codigo barras online',
	'tool.barcode-generator.meta_title':
		'Generador códigos de barras — Code 128, EAN-13, UPC | fmtly',
	'tool.barcode-generator.meta_description':
		'Creador de códigos de barras en el navegador: Code 128, EAN-13, UPC-A, ITF-14, Codabar, MSI, Pharmacode y más. Colores, zona silenciosa, exportación SVG y PNG. Modo Web Worker privado para cargas enormes.',
	'tool.barcode-generator.operation': 'Generar código de barras',
	'tool.barcode-generator.faq.0.question': '¿Se envían mis datos a un servidor?',
	'tool.barcode-generator.faq.0.answer':
		'No. El renderizado se hace con JavaScript en tu navegador. Las entradas grandes pueden procesarse en un Web Worker en tu dispositivo.',
	'tool.barcode-generator.faq.1.question': '¿Qué simbología uso para productos retail?',
	'tool.barcode-generator.faq.1.answer':
		'Para el punto de venta, EAN-13 o UPC-A. Para logística de cajas, ITF-14. Code 128 es una opción flexible para datos alfanuméricos.',
	'tool.barcode-generator.faq.2.question': '¿Por qué exportar SVG?',
	'tool.barcode-generator.faq.2.answer':
		'El SVG se mantiene nítido a cualquier tamaño de impresión y encaja en packaging y diseño. El PNG es práctico para vistas previas rápidas.',
	'tool.barcode-generator.faq.3.question': '¿Cuándo se usa un Web Worker?',
	'tool.barcode-generator.faq.3.answer':
		'Cuando la carga útil supera unos 500 KB de texto UTF-8, la generación se ejecuta en un Web Worker para mantener la página fluida.',
	'tool.barcode-generator.use_case.0':
		'Producir símbolos ITF-14 y Code 128 para etiquetas de almacén y cartones',
	'tool.barcode-generator.use_case.1':
		'Generar arte EAN-13 o UPC-A para maquetas de packaging antes de imprimir',
	'tool.barcode-generator.use_case.2':
		'Exportar códigos de barras SVG para guías de marca o documentación',
	'tool.barcode-generator.use_case.3':
		'Crear Codabar o MSI para sistemas heredados y herramientas internas',
	'category.crypto.display_name': 'Cripto',
	'category.crypto.description':
		'Hashing, HMAC, huellas de archivos, fortaleza de contraseñas, UUID/ULID, claves RSA/EC, inspección X.509, TOTP y cadenas aleatorias — todo en tu navegador.',
	'category.crypto.primary_keyword': 'herramientas criptográficas en el navegador',
	'tool.random-string-generator.display_name': 'Generador de cadenas aleatorias',
	'tool.random-string-generator.tagline':
		'Cadenas aleatorias seguras con ajustes, alfabetos personalizados, separadores y descarga a Web Worker',
	'tool.random-string-generator.description':
		'Crea cadenas aleatorias para contraseñas, tokens, identificadores y datos de prueba con Web Crypto getRandomValues—sin subidas ni servidor. Elige alfanumérico, hexadecimal, numérico, Base64 URL-seguro o un alfabeto propio; excluye caracteres ambiguos; controla longitud, cantidad y separadores; trabajos grandes en Web Worker.',
	'tool.random-string-generator.primary_keyword': 'generador de cadenas aleatorias',
	'tool.random-string-generator.meta_title':
		'Generador cadenas aleatorias — Navegador seguro | fmtly',
	'tool.random-string-generator.meta_description':
		'Genera cadenas aleatorias fuertes en el navegador. Ajustes, alfabeto propio, salida por lotes, modo sin ambiguos y Web Worker. Privado e instantáneo.',
	'tool.random-string-generator.operation': 'Generar cadenas aleatorias',
	'tool.random-string-generator.faq.0.question': '¿Sirve para contraseñas y claves API?',
	'tool.random-string-generator.faq.0.answer':
		'Las cadenas usan crypto.getRandomValues con muestreo sin sesgo. Para contraseñas, prefiera longitud grande, alfabeto amplio y buenas prácticas de gestión de secretos.',
	'tool.random-string-generator.faq.1.question': '¿Por qué a veces usa un Web Worker?',
	'tool.random-string-generator.faq.1.answer':
		'Salidas muy grandes o alfabetos enormes pueden bloquear la interfaz. Se descarga el trabajo por encima de un umbral para mantener la página fluida.',
	'tool.random-string-generator.faq.2.question': '¿Qué hace «excluir caracteres ambiguos»?',
	'tool.random-string-generator.faq.2.answer':
		'Elimina caracteres fáciles de confundir (como 0/O, 1/l) de los ajustes predefinidos para copiar mejor a mano.',
	'tool.random-string-generator.faq.3.question': '¿Se envían datos a un servidor?',
	'tool.random-string-generator.faq.3.answer':
		'No. La generación ocurre solo en tu navegador. No se sube ni registra nada en fmtly.',
	'tool.random-string-generator.use_case.0':
		'Generar tokens de restablecimiento, códigos de invitación y secretos de un solo uso localmente',
	'tool.random-string-generator.use_case.1':
		'Crear datos de prueba con longitud, juego de caracteres y salida multilínea controlados',
	'tool.random-string-generator.use_case.2':
		'Cadenas alfabeto Base64 URL-seguro para identificadores y IDs opacos',
	'tool.random-string-generator.use_case.3':
		'Alfabetos personalizados para simulaciones, juegos y sistemas con restricciones',
	'tool.hash-generator.display_name': 'Generador de hash',
	'tool.hash-generator.tagline':
		'Resúmenes MD5 y familia SHA para cualquier texto UTF-8 — privado e instantáneo',
	'tool.hash-generator.description':
		'Calcula hashes MD5, SHA-1, SHA-256, SHA-384 y SHA-512 de texto pegado con Web Crypto (y MD5 auditado). Las entradas grandes se delegan a un Web Worker para mantener la interfaz fluida.',
	'tool.hash-generator.primary_keyword': 'generador hash online md5 sha256',
	'tool.hash-generator.meta_title': 'Generador de hash — MD5 y SHA en el navegador | fmtly',
	'tool.hash-generator.meta_description':
		'Genera hashes MD5, SHA-1, SHA-256, SHA-384 y SHA-512 en local. Sin subidas. Web Worker para textos grandes.',
	'tool.hash-generator.operation': 'Hashear texto',
	'tool.hash-generator.faq.0.question': '¿Sigue siendo útil MD5?',
	'tool.hash-generator.faq.0.answer':
		'MD5 es heredado y no sirve para integridad en contextos de seguridad. Sigue siendo habitual para sumas de comprobación y compatibilidad. Prefiera SHA-256 en diseños nuevos.',
	'tool.hash-generator.faq.1.question': '¿Por qué el texto grande usa un worker?',
	'tool.hash-generator.faq.1.answer':
		'Hashear megabytes en el hilo principal puede congelar la página. Por encima de un umbral el trabajo pasa a un Web Worker.',
	'tool.hash-generator.faq.2.question': '¿Qué codificación se usa?',
	'tool.hash-generator.faq.2.answer':
		'La entrada se hashea como bytes UTF-8, como suelen esperar los desarrolladores.',
	'tool.hash-generator.faq.3.question': '¿Se envían datos a un servidor?',
	'tool.hash-generator.faq.3.answer': 'No. Todo se ejecuta localmente en tu navegador.',
	'tool.hash-generator.use_case.0':
		'Verificar descargas y configuraciones frente a sumas publicadas',
	'tool.hash-generator.use_case.1':
		'Comparar huellas de archivo sin subir el archivo (para binarios use Hash de archivo)',
	'tool.hash-generator.use_case.2': 'Depurar cargas de API y hashing canónico de cadenas',
	'tool.hash-generator.use_case.3': 'Generar resúmenes rápidos para registros y claves de caché',
	'tool.hmac-generator.display_name': 'Generador HMAC',
	'tool.hmac-generator.tagline': 'Firmas HMAC-SHA con clave para mensajes y vectores de prueba',
	'tool.hmac-generator.description':
		'Calcula HMAC con SHA-1, SHA-256, SHA-384 o SHA-512. Tu secreto y el mensaje permanecen en la pestaña; los mensajes largos pueden usar Web Worker.',
	'tool.hmac-generator.primary_keyword': 'generador hmac online',
	'tool.hmac-generator.meta_title': 'Generador HMAC — HMAC SHA en el navegador | fmtly',
	'tool.hmac-generator.meta_description':
		'Firmas HMAC con hash y secreto configurables. Solo en el navegador, sin subidas, worker para mensajes largos.',
	'tool.hmac-generator.operation': 'Calcular HMAC',
	'tool.hmac-generator.faq.0.question': '¿Cómo formateo la clave?',
	'tool.hmac-generator.faq.0.answer':
		'La clave se interpreta como texto UTF-8, como en muchos ejemplos de API. Para claves binarias crudas, decodifica hex antes en otro sitio.',
	'tool.hmac-generator.faq.1.question': '¿Es lo mismo que firmar un JWT?',
	'tool.hmac-generator.faq.1.answer':
		'JWT usa una codificación concreta (segmentos Base64URL). Esta herramienta es HMAC crudo sobre los bytes del mensaje para depuración y vectores de prueba.',
	'tool.hmac-generator.faq.2.question': '¿Por qué evitar SHA-1?',
	'tool.hmac-generator.faq.2.answer':
		'SHA-1 es heredado. HMAC-SHA1 aún aparece en sistemas antiguos, pero prefiera SHA-256 para trabajo nuevo.',
	'tool.hmac-generator.faq.3.question': '¿Se guardan los secretos?',
	'tool.hmac-generator.faq.3.answer':
		'Los secretos solo permanecen en la memoria de la página. Vacía el campo al terminar; fmtly no sube tus datos.',
	'tool.hmac-generator.use_case.0': 'Reproducir vectores de prueba de firmas de webhooks',
	'tool.hmac-generator.use_case.1': 'Verificar bloques de construcción de firmas estilo AWS',
	'tool.hmac-generator.use_case.2': 'Comparar salidas con OpenSSL o bibliotecas del lenguaje',
	'tool.hmac-generator.use_case.3': 'Enseñar MAC frente a hash en cursos',
	'tool.file-hash-calculator.display_name': 'Calculadora de hash de archivos',
	'tool.file-hash-calculator.tagline':
		'MD5, SHA-256 y CRC32 de cualquier archivo local — nunca se sube',
	'tool.file-hash-calculator.description':
		'Arrastra un archivo para calcular MD5, SHA-256 y CRC32 en el navegador. Los archivos grandes se hashean en un Web Worker para mantener la interfaz fluida.',
	'tool.file-hash-calculator.primary_keyword': 'calculadora hash archivo sha256',
	'tool.file-hash-calculator.meta_title': 'Hash de archivos — MD5, SHA-256, CRC32 | fmtly',
	'tool.file-hash-calculator.meta_description':
		'Hash de archivos en local: MD5, SHA-256, CRC32. Sin subida a la nube. Worker para archivos grandes.',
	'tool.file-hash-calculator.operation': 'Hashear archivos en local',
	'tool.file-hash-calculator.faq.0.question': '¿Se suben los archivos?',
	'tool.file-hash-calculator.faq.0.answer':
		'No. El archivo se lee con la File API y se procesa solo en memoria en tu navegador.',
	'tool.file-hash-calculator.faq.1.question': '¿Por qué tres algoritmos?',
	'tool.file-hash-calculator.faq.1.answer':
		'SHA-256 es una huella moderna; MD5 aparece en manifiestos antiguos; CRC32 en zip y pilas de red.',
	'tool.file-hash-calculator.faq.2.question': '¿Y la RAM con archivos enormes?',
	'tool.file-hash-calculator.faq.2.answer':
		'Se carga el archivo completo en memoria para hashearlo. Los archivos muy grandes pueden requerir RAM libre suficiente.',
	'tool.file-hash-calculator.faq.3.question': '¿Puedo verificar descargas?',
	'tool.file-hash-calculator.faq.3.answer':
		'Sí — compara el resumen calculado con el del publicador. Prefiera SHA-256 cuando lo publiquen.',
	'tool.file-hash-calculator.use_case.0': 'Verificar sumas de ISO e instaladores',
	'tool.file-hash-calculator.use_case.1': 'Comparar artefactos de build entre nodos de CI',
	'tool.file-hash-calculator.use_case.2': 'Huellas de activos antes de adjuntarlos a un ticket',
	'tool.file-hash-calculator.use_case.3':
		'Comprobaciones rápidas de integridad en archivos y conjuntos de datos',
	'tool.password-strength-meter.display_name': 'Medidor de fortaleza de contraseña',
	'tool.password-strength-meter.tagline':
		'Entropía, zxcvbn y comprobación de filtraciones sin enviar tu contraseña',
	'tool.password-strength-meter.description':
		'Estima entropía, muestra la puntuación zxcvbn y consulta Have I Been Pwned con k-anonimato (solo prefijo SHA-1). Tu contraseña completa no sale del navegador.',
	'tool.password-strength-meter.primary_keyword': 'comprobar fortaleza contraseña',
	'tool.password-strength-meter.meta_title': 'Fortaleza de contraseña — Entropía y HIBP | fmtly',
	'tool.password-strength-meter.meta_description':
		'Analiza la fortaleza con entropía y zxcvbn. Comprobación HIBP opcional con k-anonimato. Todo en local en el navegador.',
	'tool.password-strength-meter.operation': 'Analizar fortaleza de contraseña',
	'tool.password-strength-meter.faq.0.question': '¿Cómo funciona la comprobación de filtraciones?',
	'tool.password-strength-meter.faq.0.answer':
		'Tu contraseña se hashea con SHA-1 en local. Solo los primeros cinco caracteres hex van a Have I Been Pwned — diseño k-anonimato.',
	'tool.password-strength-meter.faq.1.question': '¿fmtly ve mi contraseña?',
	'tool.password-strength-meter.faq.1.answer':
		'No. El análisis corre en tu navegador. La API de filtraciones nunca recibe tu contraseña completa.',
	'tool.password-strength-meter.faq.2.question': '¿Basta con zxcvbn?',
	'tool.password-strength-meter.faq.2.answer':
		'zxcvbn es una heurística sólida. Combínalo con contraseñas únicas y un gestor de contraseñas.',
	'tool.password-strength-meter.faq.3.question': '¿Y si estoy sin conexión?',
	'tool.password-strength-meter.faq.3.answer':
		'Entropía y zxcvbn siguen funcionando; el recuento de filtraciones puede no estar sin red.',
	'tool.password-strength-meter.use_case.0': 'Guiar a usuarios en flujos de registro',
	'tool.password-strength-meter.use_case.1':
		'Comparar ideas de frase de contraseña antes de adoptarlas',
	'tool.password-strength-meter.use_case.2': 'Talleres de concienciación sin instalar software',
	'tool.password-strength-meter.use_case.3': 'Explicar por qué importan longitud y diversidad',
	'tool.uuid-generator.display_name': 'Generador UUID / ULID',
	'tool.uuid-generator.tagline': 'UUID v4, UUID v7 y lotes ULID con decodificación de tiempo ULID',
	'tool.uuid-generator.description':
		'Genera UUID v4 aleatorios, UUID v7 ordenables por tiempo e identificadores ULID. Decodifica marcas de tiempo ULID en local. Hasta 500 valores por lote para fixtures.',
	'tool.uuid-generator.primary_keyword': 'generador uuid v7 ulid',
	'tool.uuid-generator.meta_title': 'Generador UUID v4, v7 y ULID | fmtly',
	'tool.uuid-generator.meta_description':
		'Crea UUID v4, v7 y ULID en serie. Decodifica tiempo ULID en el navegador. Sin almacenamiento en servidor.',
	'tool.uuid-generator.operation': 'Generar identificadores',
	'tool.uuid-generator.faq.0.question': '¿Qué ID debo usar?',
	'tool.uuid-generator.faq.0.answer':
		'v4 para aleatoriedad pura; v7 o ULID cuando quieras IDs ordenados por tiempo y ordenación más amigable en bases de datos.',
	'tool.uuid-generator.faq.1.question': '¿Son criptográficamente aleatorios?',
	'tool.uuid-generator.faq.1.answer':
		'UUID v4/v7 y ULID usan aleatoriedad segura del navegador cuando está disponible.',
	'tool.uuid-generator.faq.2.question': '¿Qué muestra el decode ULID?',
	'tool.uuid-generator.faq.2.answer':
		'ULID incrusta una marca de tiempo en milisegundos en los primeros caracteres; la convertimos a hora ISO.',
	'tool.uuid-generator.faq.3.question': '¿Puedo exportar?',
	'tool.uuid-generator.faq.3.answer':
		'Copia el lote desde la salida o usa utilidades del portapapeles — fmtly no lo guarda.',
	'tool.uuid-generator.use_case.0': 'Rellenar bases de datos con identificadores realistas',
	'tool.uuid-generator.use_case.1': 'Generar IDs de correlación para demos de trazas distribuidas',
	'tool.uuid-generator.use_case.2': 'Crear IDs ordenables para flujos de eventos',
	'tool.uuid-generator.use_case.3': 'Prototipar APIs que requieren campos UUID o ULID',
	'tool.keypair-generator.display_name': 'Generador de par de claves RSA / EC',
	'tool.keypair-generator.tagline': 'Claves PEM RSA-PSS y ECDSA vía Web Crypto — solo en tu sesión',
	'tool.keypair-generator.description':
		'Genera pares RSA 2048/4096 y ECDSA P-256/P-384, exportados como PEM. Las claves no salen del navegador; descarga o copia desde la página.',
	'tool.keypair-generator.primary_keyword': 'generar clave rsa pem navegador',
	'tool.keypair-generator.meta_title': 'Par de claves RSA y EC (PEM) | fmtly',
	'tool.keypair-generator.meta_description':
		'Crea pares de claves RSA y de curva elíptica en formato PEM con Web Crypto. Solo en el cliente.',
	'tool.keypair-generator.operation': 'Generar pares de claves',
	'tool.keypair-generator.faq.0.question': '¿Qué algoritmos se usan?',
	'tool.keypair-generator.faq.0.answer':
		'Las claves RSA usan RSA-PSS con SHA-256; las EC usan ECDSA con curvas NIST. Exportadas como PEM PKIX SPKI y PKCS#8.',
	'tool.keypair-generator.faq.1.question': '¿Son claves de producción?',
	'tool.keypair-generator.faq.1.answer':
		'Son claves reales de Web Crypto, pero debes proteger el material privado y seguir la política de tu organización.',
	'tool.keypair-generator.faq.2.question': '¿Sirven para TLS?',
	'tool.keypair-generator.faq.2.answer':
		'Aún necesitas un certificado firmado por una CA (o tu propia PKI). Esta herramienta solo genera pares de claves en bruto.',
	'tool.keypair-generator.faq.3.question': '¿Dónde se guardan las claves privadas?',
	'tool.keypair-generator.faq.3.answer':
		'Solo en la memoria de la página hasta que salgas o recargues. Guárdalas de forma segura si las necesitas después.',
	'tool.keypair-generator.use_case.0': 'Probar firma JWT con archivos PEM locales',
	'tool.keypair-generator.use_case.1': 'Generar claves desechables para contenedores de desarrollo',
	'tool.keypair-generator.use_case.2': 'Enseñar criptografía asimétrica con PEM exportable',
	'tool.keypair-generator.use_case.3': 'Comparar tamaños de clave RSA frente a curva elíptica',
	'tool.certificate-decoder.display_name': 'Decodificador de certificados',
	'tool.certificate-decoder.tagline':
		'Analiza certificados PEM X.509: sujeto, SAN, validez, huella',
	'tool.certificate-decoder.description':
		'Carga un certificado PEM para inspeccionar sujeto, emisor, ventana de validez, algoritmo de firma, nombres alternativos del sujeto y huella SHA-256 — analizado en local.',
	'tool.certificate-decoder.primary_keyword': 'decodificador certificado x509 pem',
	'tool.certificate-decoder.meta_title': 'Decodificador X.509 — Inspector PEM | fmtly',
	'tool.certificate-decoder.meta_description':
		'Decodifica certificados PEM en el navegador. SAN, validez, algoritmos y huellas sin subir nada.',
	'tool.certificate-decoder.operation': 'Decodificar certificados',
	'tool.certificate-decoder.faq.0.question': '¿Valida la cadena de confianza?',
	'tool.certificate-decoder.faq.0.answer':
		'Analiza y muestra campos. La validación completa de cadena frente a almacenes de confianza queda fuera de este visor ligero.',
	'tool.certificate-decoder.faq.1.question': '¿Por qué un estilo de huella?',
	'tool.certificate-decoder.faq.1.answer':
		'Mostramos SHA-256 en hex separado por dos puntos, formato habitual de administración.',
	'tool.certificate-decoder.faq.2.question': '¿Puedo pegar DER?',
	'tool.certificate-decoder.faq.2.answer':
		'El decodificador acepta PEM y codificaciones que soporte el analizador; PEM con cabeceras es lo más sencillo.',
	'tool.certificate-decoder.faq.3.question': '¿Se sube el certificado?',
	'tool.certificate-decoder.faq.3.answer': 'No. El análisis ocurre por completo en tu navegador.',
	'tool.certificate-decoder.use_case.0': 'Leer rápido SAN y caducidad en incidentes',
	'tool.certificate-decoder.use_case.1': 'Comparar metadatos de cert dev frente a prod',
	'tool.certificate-decoder.use_case.2': 'Documentar problemas de handshake con huellas exactas',
	'tool.certificate-decoder.use_case.3': 'Enseñar estructura X.509 sin openssl instalado',
	'tool.totp-generator.display_name': 'Generador TOTP',
	'tool.totp-generator.tagline':
		'Códigos RFC 6238 desde secretos Base32 — como las apps autenticadoras',
	'tool.totp-generator.description':
		'Genera contraseñas de un solo uso basadas en el tiempo con periodo, dígitos y algoritmo HMAC configurables. El secreto permanece local; los códigos se actualizan cada segundo.',
	'tool.totp-generator.primary_keyword': 'generador totp autenticador',
	'tool.totp-generator.meta_title': 'Generador TOTP — OTP RFC 6238 | fmtly',
	'tool.totp-generator.meta_description':
		'Calcula TOTP desde secretos Base32. Periodo, dígitos y SHA-1/256/512 configurables. Solo en el navegador.',
	'tool.totp-generator.operation': 'Generar códigos TOTP',
	'tool.totp-generator.faq.0.question': '¿Por qué Base32?',
	'tool.totp-generator.faq.0.answer':
		'Las apps autenticadoras suelen entregar secretos como cadenas Base32. Los decodificamos a bytes antes del HMAC.',
	'tool.totp-generator.faq.1.question': '¿Sustituye a Google Authenticator?',
	'tool.totp-generator.faq.1.answer':
		'Refleja la matemática para depuración. Mantén la app del teléfono como segundo factor principal.',
	'tool.totp-generator.faq.2.question': '¿Deriva de reloj?',
	'tool.totp-generator.faq.2.answer':
		'Los códigos dependen de la hora UTC. Un reloj muy descuadrado puede no coincidir con el servidor; sincroniza la hora del sistema.',
	'tool.totp-generator.faq.3.question': '¿Se guarda el secreto?',
	'tool.totp-generator.faq.3.answer':
		'Solo en memoria mientras esta pestaña está abierta. Bórralo al terminar.',
	'tool.totp-generator.use_case.0':
		'Verificar implementaciones de autenticador durante el desarrollo',
	'tool.totp-generator.use_case.1': 'Comparar códigos con vectores de prueba del RFC',
	'tool.totp-generator.use_case.2': 'Rotar secretos con un generador de confianza',
	'tool.totp-generator.use_case.3': 'Soporte reproduce incidencias MFA',
	'ui.random_string.tab_label': 'Aleatorio',
	'ui.random_string.simple_hint':
		'Ajusta la longitud y los tipos de caracteres — la salida se actualiza sola.',
	'ui.random_string.length_with_value': 'Longitud: {n}',
	'ui.random_string.characters_used': 'Caracteres usados',
	'ui.random_string.pick.upper': 'ABC',
	'ui.random_string.pick.lower': 'abc',
	'ui.random_string.pick.digits': '123',
	'ui.random_string.pick.symbols': '#$&',
	'ui.random_string.preset_active_hint':
		'Hay un preset de juego de caracteres. Abre Avanzado y elige “Selección” para ABC / abc / 123 / símbolos.',
	'ui.random_string.advanced.title': 'Avanzado',
	'ui.random_string.exact_length': 'Longitud exacta',
	'ui.random_string.slider_hint':
		'El control superior sirve para longitudes 1–256. Escribe aquí cadenas más largas (hasta 100.000).',
	'ui.random_string.regenerate': 'Regenerar',
	'ui.random_string.decrease_length': 'Reducir longitud',
	'ui.random_string.increase_length': 'Aumentar longitud',
	'ui.random_string.mode.pick': 'Selección (interruptores)',
	'ui.random_string.strength.very_weak': 'Muy débil',
	'ui.random_string.strength.weak': 'Débil',
	'ui.random_string.strength.fair': 'Regular',
	'ui.random_string.strength.strong': 'Fuerte',
	'ui.random_string.strength.very_strong': 'Muy fuerte',
	'ui.random_string.toast.one_charset': 'Elige al menos un tipo de carácter.',
	'ui.random_string.generate': 'Generar',
	'ui.random_string.processing': 'Trabajando…',
	'ui.random_string.length_label': 'Longitud por cadena',
	'ui.random_string.count_label': 'Cuántas cadenas',
	'ui.random_string.charset_label': 'Juego de caracteres',
	'ui.random_string.custom_charset_label': 'Caracteres personalizados',
	'ui.random_string.custom_charset_placeholder':
		'Escribe los caracteres exactos de los que muestrear…',
	'ui.random_string.separator_label': 'Separador entre cadenas',
	'ui.random_string.charset.alphanumeric': 'Alfanumérico',
	'ui.random_string.charset.hex_lower': 'Hex (minúsculas)',
	'ui.random_string.charset.hex_upper': 'Hex (mayúsculas)',
	'ui.random_string.charset.numeric': 'Numérico',
	'ui.random_string.charset.base64url': 'Base64 URL-seguro',
	'ui.random_string.charset.custom': 'Personalizado',
	'ui.random_string.separator.newline': 'Nueva línea',
	'ui.random_string.separator.comma': 'Coma',
	'ui.random_string.separator.space': 'Espacio',
	'ui.random_string.separator.none': 'Ninguno (concatenar)',
	'ui.random_string.exclude_ambiguous': 'Excluir caracteres visualmente ambiguos (0/O, 1/l, …)',
	'ui.random_string.output_label': 'Salida',
	'ui.random_string.panel_options_heading': 'Opciones de generación',
	'ui.random_string.panel_options_hint':
		'Longitud, cantidad, juego de caracteres y cómo unir varias cadenas.',
	'ui.random_string.output_placeholder': 'Las cadenas generadas aparecen aquí',
	'ui.random_string.worker_active':
		'Entrada grande detectada (>{size}). La generación corre en un Web Worker.',
	'ui.random_string.worker_failed': 'Falló el Worker. Se vuelve al hilo principal.',
	'ui.random_string.worker_badge': 'Worker',
	'ui.random_string.toast.generated': 'Cadenas aleatorias generadas',
	'ui.random_string.toast.cleared': 'Salida vaciada',
	'ui.random_string.toast.nothing_to_download': 'Aún no hay nada que descargar',
	'ui.random_string.error.invalid_length': 'La longitud debe estar en el rango permitido.',
	'ui.random_string.error.invalid_count': 'La cantidad debe estar en el rango permitido.',
	'ui.random_string.error.empty_charset': 'Elige un juego de caracteres no vacío.',
	'ui.random_string.error.charset_too_large': 'El juego de caracteres es demasiado grande.',
	'ui.random_string.error.crypto_unavailable': 'Web Crypto no está disponible en este entorno.',
	'ui.random_string.error.unknown': 'No se pudieron generar las cadenas.',
	'ui.crypto.tab.hash': 'Hash',
	'ui.crypto.tab.hmac': 'HMAC',
	'ui.crypto.tab.file_hash': 'Archivo',
	'ui.crypto.tab.password': 'Contraseña',
	'ui.crypto.tab.uuid': 'UUID',
	'ui.crypto.tab.keypair': 'Claves',
	'ui.crypto.tab.cert': 'Cert.',
	'ui.crypto.tab.totp': 'TOTP',
	'ui.hash.intro': 'Hashea texto con MD5 o SHA. Todo se ejecuta en tu navegador — no se sube nada.',
	'ui.hash.sample_input': 'fmtly',
	'ui.hash.input_label': 'Entrada (UTF-8)',
	'ui.hash.regenerate': 'Recalcular',
	'ui.hash.error_failed': 'No se pudo calcular el hash.',
	'ui.hash.worker_label': 'Worker',
	'ui.hash.worker_hint':
		'Las entradas grandes usan automáticamente un Web Worker para mantener la página fluida.',
	'ui.hmac.intro':
		'Calcula HMAC con tu clave secreta. Las claves permanecen en esta pestaña — nunca se envían al servidor.',
	'ui.hmac.sample_message': 'mensaje',
	'ui.hmac.sample_secret': 'secreto',
	'ui.hmac.secret_label': 'Clave secreta',
	'ui.hmac.message_label': 'Mensaje (UTF-8)',
	'ui.hmac.regenerate': 'Recalcular',
	'ui.hmac.error_failed': 'No se pudo calcular el HMAC.',
	'ui.hmac.worker_hint':
		'Los mensajes largos usan automáticamente un Web Worker para mantener la página fluida.',
	'ui.file_hash.intro':
		'MD5, SHA-256 y CRC32 de cualquier archivo — solo procesado en local en tu navegador.',
	'ui.file_hash.drop_zone': 'Suelta un archivo aquí o haz clic para elegir',
	'ui.file_hash.drop_hint': 'Los archivos nunca se suben.',
	'ui.file_hash.rehash': 'Volver a hashear',
	'ui.file_hash.error_failed': 'No se pudo hashear el archivo.',
	'ui.file_hash.worker_hint':
		'Los archivos grandes usan automáticamente un Web Worker para mantener la página fluida.',
	'ui.password_strength.intro':
		'Entropía, zxcvbn y Have I Been Pwned (k-anonimato). Tu contraseña no sale del navegador salvo la consulta anónima por rango.',
	'ui.password_strength.field_label': 'Contraseña',
	'ui.password_strength.show': 'Mostrar',
	'ui.password_strength.hide': 'Ocultar',
	'ui.password_strength.bits': 'bits',
	'ui.password_strength.band.very_weak': 'Muy débil',
	'ui.password_strength.band.weak': 'Débil',
	'ui.password_strength.band.fair': 'Regular',
	'ui.password_strength.band.good': 'Buena',
	'ui.password_strength.band.strong': 'Fuerte',
	'ui.password_strength.summary.entropy': 'Entropía (estimación)',
	'ui.password_strength.summary.crack': 'Tiempo de ruptura (aprox.)',
	'ui.password_strength.summary.zxcvbn': 'Puntuación zxcvbn',
	'ui.password_strength.summary.pwned': 'Filtraciones conocidas (HIBP)',
	'ui.password_strength.summary.pwned_unknown':
		'Comprobación de filtraciones no disponible (sin conexión o error).',
	'ui.password_strength.zxcvbn_label': 'Puntuación zxcvbn',
	'ui.password_strength.hibp_label': 'Recuento HIBP',
	'ui.uuid.intro':
		'UUID v4, UUID v7 y ULID — generados en local. ULID incluye una marca de tiempo decodificable.',
	'ui.uuid.count': 'Cantidad',
	'ui.uuid.regenerate': 'Regenerar',
	'ui.uuid.output_label': 'Identificadores generados',
	'ui.uuid.ulid_decode_label': 'Decodificar tiempo ULID',
	'ui.uuid.ulid_placeholder': 'Pega un ULID',
	'ui.uuid.ulid_decode_invalid': 'No es un ULID válido',
	'ui.uuid.decode': 'Decodificar',
	'ui.keypair.intro':
		'Pares de claves RSA (PSS) y ECDSA en PEM. Generados solo en tu navegador con Web Crypto.',
	'ui.keypair.bits': 'bits',
	'ui.keypair.generate': 'Generar',
	'ui.keypair.public': 'Clave pública',
	'ui.keypair.private': 'Clave privada',
	'ui.keypair.error_failed': 'No se pudo generar el par de claves.',
	'ui.cert.intro':
		'Inspecciona certificados PEM X.509: sujeto, validez, SAN, huella — analizado en local.',
	'ui.cert.pem_label': 'Certificado PEM',
	'ui.cert.placeholder_hint': 'Pega un certificado codificado en PEM…',
	'ui.cert.subject': 'Sujeto',
	'ui.cert.issuer': 'Emisor',
	'ui.cert.serial': 'Serie',
	'ui.cert.valid_from': 'Válido desde',
	'ui.cert.valid_to': 'Válido hasta',
	'ui.cert.sig_alg': 'Firma',
	'ui.cert.public_key': 'Clave pública',
	'ui.cert.fp256': 'Huella SHA-256',
	'ui.cert.san': 'Nombres alternativos del sujeto',
	'ui.cert.redo': 'Volver a decodificar',
	'ui.totp.intro':
		'TOTP RFC 6238 desde secreto Base32. Coincide con apps autenticadoras cuando los ajustes coinciden.',
	'ui.totp.secret_label': 'Secreto (Base32)',
	'ui.totp.period': 'Periodo (s)',
	'ui.totp.digits': 'Dígitos',
	'ui.totp.code_label': 'Código',
	'ui.totp.refresh': 'Actualizar',
	'ui.totp.error_failed': 'Secreto o ajustes no válidos.',
	'ui.qr.tab_label': 'QR',
	'ui.qr.tab_reader': 'Leer',
	'ui.qr.tab_barcode': 'Barras',
	'ui.qr.characters': 'caracteres',
	'ui.qr.output_empty': 'Genera un código QR para previsualizarlo y exportarlo.',
	'ui.qr.preview_alt': 'Vista previa del código QR generado',
	'ui.qr.worker_active':
		'Se detectó una entrada grande (>{size}). La generación del QR se ejecuta en un Web Worker.',
	'ui.qr.worker_failed': 'Falló el Worker. Se vuelve a la generación en el hilo principal.',
	'ui.qr.worker_badge': 'Worker',
	'ui.qr.content_label': 'Contenido QR',
	'ui.qr.encoding_hint': 'Texto, URLs, payloads Wi-Fi, vCards o deep links de apps',
	'ui.qr.input_placeholder':
		'Pega aquí una URL, texto plano, payload Wi-Fi o cualquier contenido apto para QR...',
	'ui.qr.preview_label': 'Vista previa en vivo',
	'ui.qr.copy_svg': 'Copiar SVG',
	'ui.qr.download_svg': 'Descargar SVG',
	'ui.qr.download_png': 'Descargar PNG',
	'ui.qr.empty_state':
		'Introduce contenido para generar una vista previa QR con salida SVG y PNG lista para exportar.',
	'ui.qr.metric.version': 'Versión',
	'ui.qr.metric.modules': 'Módulos',
	'ui.qr.metric.mask': 'Máscara',
	'ui.qr.metric.segments': 'Segmentos',
	'ui.qr.scan_readiness_label': 'Preparación de escaneo',
	'ui.qr.scan_readiness.excellent': 'Excelente para escanear',
	'ui.qr.scan_readiness.excellent_hint':
		'Estos ajustes están bien equilibrados para escaneos fiables tanto en pantalla como en impresión.',
	'ui.qr.scan_readiness.balanced': 'Configuración equilibrada',
	'ui.qr.scan_readiness.balanced_hint':
		'Este QR debería escanearse bien, pero una corrección más alta o más zona silenciosa pueden mejorar la resistencia.',
	'ui.qr.scan_readiness.risky': 'Arriesgado para escanear',
	'ui.qr.scan_readiness.risky_hint':
		'La configuración actual puede reducir la fiabilidad del escaneo. Aumenta la zona silenciosa o la corrección, especialmente si usas logotipo.',
	'ui.qr.section.reliability': 'Fiabilidad',
	'ui.qr.section.appearance': 'Apariencia',
	'ui.qr.section.logo': 'Logo central (opcional)',
	'ui.qr.error_correction_hint':
		'Una corrección más alta resiste mejor daños, arañazos y logotipos, pero reduce ligeramente la capacidad total.',
	'ui.qr.size_label': 'Tamaño',
	'ui.qr.margin_label': 'Zona silenciosa',
	'ui.qr.dark_color_label': 'Primer plano',
	'ui.qr.light_color_label': 'Fondo',
	'ui.qr.transparent': 'Transparente',
	'ui.qr.transparent_background_label': 'Fondo transparente',
	'ui.qr.logo_hint':
		'Añade un logotipo pequeño en el centro del QR para carteles, menús, packaging o piezas impresas de marca. Déjalo vacío para la lectura más fiable.',
	'ui.qr.upload_logo': 'Subir logotipo',
	'ui.qr.logo_preview_alt': 'Vista previa del logotipo cargado',
	'ui.qr.logo_scale_label': 'Tamaño del logotipo',
	'ui.qr.remove_logo': 'Quitar logotipo',
	'ui.qr.logo_empty':
		'No hay logotipo seleccionado. Esto es opcional y solo sirve si quieres mostrar tu marca en el centro del código QR. Déjalo vacío para lecturas más simples y fiables.',
	'ui.qr.error.invalid_logo': 'Sube un archivo de imagen válido para el logotipo.',
	'ui.qr.error.input_too_long':
		'Este texto es demasiado grande para un solo código QR. Acorta el contenido o elimina parte de los datos.',
	'ui.qr.error.generation_failed': 'La generación del QR falló: {detail}',
	'ui.qr.error.png_export_failed': 'La exportación PNG falló para este código QR.',
	'ui.qr.warning.logo_overlay_low_error_correction':
		'Usar un logotipo central con corrección L o M puede reducir la fiabilidad de escaneo. Es mejor usar Q o H.',
	'ui.qr.toast.logo_added': 'Superposición de logotipo añadida',
	'ui.qr.toast.logo_removed': 'Superposición de logotipo eliminada',
	'ui.qr.reader.upload': 'Subir',
	'ui.qr.reader.camera': 'Cámara',
	'ui.qr.reader.drop_title': 'Suelta una imagen aquí',
	'ui.qr.reader.drop_hint':
		'PNG, JPG, WebP, GIF o SVG. Las imágenes grandes se decodifican fuera del hilo principal. También puedes pegar una captura.',
	'ui.qr.reader.drop_aria': 'Subir o soltar una imagen para escanear',
	'ui.qr.reader.preview_alt': 'Vista previa de la imagen subida',
	'ui.qr.reader.result_label': 'Contenido decodificado',
	'ui.qr.reader.empty_state':
		'El texto decodificado aparece aquí. Tu imagen no sale del navegador.',
	'ui.qr.reader.status_decoding': 'Escaneando imagen…',
	'ui.qr.reader.status_ok': '{size} · {ms} ms',
	'ui.qr.reader.error_no_qr':
		'No se encontró ningún código QR. Prueba una foto más nítida, mejor luz o un recorte más grande.',
	'ui.qr.reader.error_decode': 'No se pudo leer esta imagen. Prueba otro archivo u otro formato.',
	'ui.qr.reader.error_load':
		'No se pudo cargar esta imagen. Prueba PNG, JPG o WebP desde tu dispositivo.',
	'ui.qr.reader.error_type': 'Elige un archivo de imagen.',
	'ui.qr.reader.worker_active':
		'Imagen grande ({size}). La decodificación se ejecuta en un Web Worker para mantener la interfaz fluida.',
	'ui.qr.reader.worker_badge': 'Worker',
	'ui.qr.reader.worker_failed':
		'Falló la decodificación en el Worker. Reintentando en el hilo principal.',
	'ui.barcode.characters': 'caracteres',
	'ui.barcode.content_label': 'Datos del código',
	'ui.barcode.input_placeholder': 'Escribe o pega la carga útil para la simbología elegida…',
	'ui.barcode.format_label': 'Simbología',
	'ui.barcode.format_hint':
		'Los GTIN retail usan EAN/UPC; en logística suele usarse Code 128 o ITF-14.',
	'ui.barcode.preview_label': 'Vista previa',
	'ui.barcode.preview_alt': 'Vista previa del código de barras',
	'ui.barcode.output_empty': 'Genera un código de barras para previsualizarlo y exportarlo.',
	'ui.barcode.raster_only': 'Solo PNG (worker)',
	'ui.barcode.empty_preview':
		'Ajusta datos y opciones para ver una vista previa vectorial o raster.',
	'ui.barcode.copy_svg': 'Copiar SVG',
	'ui.barcode.copy_png': 'Copiar data URL PNG',
	'ui.barcode.copy_svg_unavailable': 'No hay SVG disponible para esta vista previa.',
	'ui.barcode.download_svg': 'SVG',
	'ui.barcode.download_png': 'PNG',
	'ui.barcode.section.appearance': 'Apariencia',
	'ui.barcode.display_value': 'Mostrar texto legible',
	'ui.barcode.bar_width': 'Ancho de barra',
	'ui.barcode.bar_height': 'Altura de barra',
	'ui.barcode.font_size': 'Tamaño de etiqueta',
	'ui.barcode.quiet_zone': 'Zona silenciosa',
	'ui.barcode.line_color': 'Barras',
	'ui.barcode.background': 'Fondo',
	'ui.barcode.worker_active': 'Carga grande ({size}). La generación se ejecuta en un Web Worker.',
	'ui.barcode.worker_badge': 'Worker',
	'ui.barcode.worker_failed': 'Falló el Worker. Reintentando en el hilo principal.',
	'ui.barcode.error.empty': 'Introduce un valor para codificar.',
	'ui.barcode.error.invalid_value': 'Este valor no coincide con el formato seleccionado.',
	'ui.barcode.error.generation_failed': 'No se pudo generar el código de barras: {detail}',
	'ui.barcode.error.ean13': 'EAN-13 requiere 12 o 13 dígitos.',
	'ui.barcode.error.ean8': 'EAN-8 requiere 7 u 8 dígitos.',
	'ui.barcode.error.upc': 'UPC-A requiere 11 o 12 dígitos.',
	'ui.barcode.error.itf14': 'ITF-14 requiere 13 o 14 dígitos.',
	'ui.barcode.error.itf': 'ITF requiere un número par de dígitos (al menos dos).',
	'ui.barcode.error.msi': 'MSI solo codifica dígitos.',
	'ui.barcode.error.pharmacode': 'Pharmacode debe ser un entero entre 1 y 131070.',
	'ui.barcode.format.CODE128': 'Code 128',
	'ui.barcode.format.CODE39': 'Code 39',
	'ui.barcode.format.CODE93': 'Code 93',
	'ui.barcode.format.codabar': 'Codabar',
	'ui.barcode.format.EAN13': 'EAN-13',
	'ui.barcode.format.EAN8': 'EAN-8',
	'ui.barcode.format.UPC': 'UPC-A',
	'ui.barcode.format.ITF14': 'ITF-14',
	'ui.barcode.format.ITF': 'ITF (entrelazado)',
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

	'category.generate.display_name': 'Generadores',
	'category.generate.description':
		'Genere datos de prueba, identificadores, contraseñas, .gitignore y README al instante en el navegador.',
	'category.generate.primary_keyword': 'generadores para desarrolladores',
	'tool.fake-data-generator.display_name': 'Generador de datos ficticios',
	'tool.fake-data-generator.tagline': 'Filas realistas para QA y demos',
	'tool.fake-data-generator.description':
		'Genere nombres, correos, direcciones y más con Faker y configuración regional. Exporte JSON, CSV o SQL INSERT. Los lotes grandes usan Web Worker.',
	'tool.fake-data-generator.primary_keyword': 'generador de datos ficticios',
	'tool.fake-data-generator.meta_title': 'Generador de datos ficticios — JSON, CSV, SQL | fmtly',
	'tool.fake-data-generator.meta_description':
		'Gratis en el navegador: campos configurables, idioma, filas, exportación JSON/CSV/SQL. Sin subida; Worker para salidas enormes.',
	'tool.fake-data-generator.operation': 'generate',
	'tool.fake-data-generator.faq.0.question': '¿Los datos son realmente aleatorios?',
	'tool.fake-data-generator.faq.0.answer':
		'Se generan con Faker y aleatoriedad de Web Crypto cuando aplica. Solo para pruebas — nunca como datos personales reales.',
	'tool.fake-data-generator.faq.1.question': '¿Cuándo se usa un worker?',
	'tool.fake-data-generator.faq.1.answer':
		'Muchas filas o salida estimada > ~500 KB se generan fuera del hilo principal para mantener la interfaz fluida.',
	'tool.fake-data-generator.faq.2.question': '¿Qué formatos de exportación hay?',
	'tool.fake-data-generator.faq.2.answer':
		'JSON (array de objetos), CSV con cabecera o SQL INSERT en la tabla que elija.',
	'tool.fake-data-generator.faq.3.question': '¿Salen mis datos del navegador?',
	'tool.fake-data-generator.faq.3.answer':
		'No. Todo es local; fmtly no envía su entrada ni salida a un servidor.',
	'tool.fake-data-generator.use_case.0': 'Alimentar pruebas de integración y bases de staging',
	'tool.fake-data-generator.use_case.1': 'Demos sin exponer datos reales',
	'tool.fake-data-generator.use_case.2': 'Probar importaciones CSV y pipelines ETL',
	'tool.fake-data-generator.use_case.3': 'Compartir muestras reproducibles',
	'tool.uuid-batch-generator.display_name': 'Generador masivo de UUID',
	'tool.uuid-batch-generator.tagline': 'Miles de UUID v4 o v7',
	'tool.uuid-batch-generator.description':
		'Genere listas separadas por salto de línea o coma, copie todo o descargue un .txt. Los lotes grandes usan Web Worker.',
	'tool.uuid-batch-generator.primary_keyword': 'uuid por lotes',
	'tool.uuid-batch-generator.meta_title': 'Generador masivo de UUID — v4 y v7 | fmtly',
	'tool.uuid-batch-generator.meta_description':
		'Genere hasta cientos de miles de UUID v4 o v7 en el navegador. Copiar o descargar; worker para volúmenes enormes.',
	'tool.uuid-batch-generator.operation': 'generate',
	'tool.uuid-batch-generator.faq.0.question': '¿Diferencia con la herramienta de una sola UUID?',
	'tool.uuid-batch-generator.faq.0.answer':
		'Esta está pensada para listas masivas, descarga y separadores. La herramienta cripto se centra en un ID y decodificación ULID.',
	'tool.uuid-batch-generator.faq.1.question': '¿v4 frente a v7?',
	'tool.uuid-batch-generator.faq.1.answer':
		'v4 es aleatorio. v7 es ordenable por tiempo (RFC 9562). Ambos se generan localmente.',
	'tool.uuid-batch-generator.faq.2.question': '¿Por qué un worker?',
	'tool.uuid-batch-generator.faq.2.answer':
		'Generar cientos de miles de UUID puede bloquear la UI; el worker mantiene la fluidez.',
	'tool.uuid-batch-generator.faq.3.question': '¿Son criptográficamente seguros?',
	'tool.uuid-batch-generator.faq.3.answer':
		'Usan el mismo paquete uuid que muchos runtimes. Para amenazas altas siga su modelo de seguridad.',
	'tool.uuid-batch-generator.use_case.0': 'Pruebas de carga y fixtures',
	'tool.uuid-batch-generator.use_case.1': 'Rellenar columnas con IDs únicos',
	'tool.uuid-batch-generator.use_case.2': 'Sembrar bases con v7 ordenados',
	'tool.uuid-batch-generator.use_case.3': 'Pegado rápido en scripts',
	'tool.generate-password-generator.display_name': 'Generador de contraseñas',
	'tool.generate-password-generator.tagline': 'Contraseñas fuertes en el navegador',
	'tool.generate-password-generator.description':
		'Construya contraseñas por longitud y clases de caracteres con Web Crypto. Guiones opcionales y pista de fuerza zxcvbn local.',
	'tool.generate-password-generator.primary_keyword': 'generador de contraseñas',
	'tool.generate-password-generator.meta_title':
		'Generador de contraseñas — seguro y local | fmtly',
	'tool.generate-password-generator.meta_description':
		'Contraseñas seguras con longitud, símbolos y opción sin caracteres ambiguos. Pista zxcvbn local; sin envío al servidor.',
	'tool.generate-password-generator.operation': 'generate',
	'tool.generate-password-generator.faq.0.question': '¿Diferencia con el medidor de fortaleza?',
	'tool.generate-password-generator.faq.0.answer':
		'Este genera contraseñas nuevas. El medidor cripto evalúa contraseñas que usted ya tiene.',
	'tool.generate-password-generator.faq.1.question': '¿De dónde sale la aleatoriedad?',
	'tool.generate-password-generator.faq.1.answer':
		'De crypto.getRandomValues en su navegador, la misma API que contextos seguros.',
	'tool.generate-password-generator.faq.2.question': '¿Qué significa la pista de fuerza?',
	'tool.generate-password-generator.faq.2.answer':
		'zxcvbn estima facilidad de adivinanza. Corre en local y es orientativa.',
	'tool.generate-password-generator.faq.3.question': '¿Para producción?',
	'tool.generate-password-generator.faq.3.answer':
		'Combine con políticas de su organización, rotación y gestor de secretos.',
	'tool.generate-password-generator.use_case.0': 'Credenciales nuevas de servicio o admin',
	'tool.generate-password-generator.use_case.1': 'Secretos temporales para demos',
	'tool.generate-password-generator.use_case.2': 'Alta entropía con símbolos obligatorios',
	'tool.generate-password-generator.use_case.3': 'Talleres de buenas prácticas',
	'tool.gitignore-builder.display_name': 'Constructor .gitignore',
	'tool.gitignore-builder.tagline': 'Fusiona reglas ignoradas habituales',
	'tool.gitignore-builder.description':
		'Elija pilas y entornos — Node, Python, Rust, ruido de SO, IDEs — y fusione en un .gitignore. Plantillas estáticas, sin red.',
	'tool.gitignore-builder.primary_keyword': 'generador gitignore',
	'tool.gitignore-builder.meta_title': 'Constructor .gitignore — plantillas fusionadas | fmtly',
	'tool.gitignore-builder.meta_description':
		'Combine fragmentos tipo gitignore para lenguajes, Docker, Terraform y editores. Copie el resultado en un clic.',
	'tool.gitignore-builder.operation': 'generate',
	'tool.gitignore-builder.faq.0.question': '¿Es lo mismo que gitignore.io?',
	'tool.gitignore-builder.faq.0.answer':
		'Ofrecemos fragmentos curados inspirados en plantillas comunitarias; fusiona en local sin API.',
	'tool.gitignore-builder.faq.1.question': '¿Puedo editar el resultado?',
	'tool.gitignore-builder.faq.1.answer':
		'Sí — cópielo al repo y ajústelo. El orden es determinista.',
	'tool.gitignore-builder.faq.2.question': '¿Por qué fusionar?',
	'tool.gitignore-builder.faq.2.answer':
		'Reglas más pequeñas y relevantes reducen ruido y conflictos.',
	'tool.gitignore-builder.faq.3.question': '¿Registran mi selección?',
	'tool.gitignore-builder.faq.3.answer': 'No. Todo permanece en el navegador.',
	'tool.gitignore-builder.use_case.0': 'Arrancar un repo con defaults sensatos',
	'tool.gitignore-builder.use_case.1': 'Añadir rápido reglas de SO y editores',
	'tool.gitignore-builder.use_case.2': 'Combinar Docker/Terraform con su stack',
	'tool.gitignore-builder.use_case.3': 'Enseñar higiene de Git',
	'tool.readme-template-generator.display_name': 'Plantilla README',
	'tool.readme-template-generator.tagline': 'Esqueleto de README en segundos',
	'tool.readme-template-generator.description':
		'Rellene título, descripción, instalación, uso, licencia y badges GitHub opcionales — Markdown limpio para pegar.',
	'tool.readme-template-generator.primary_keyword': 'generador readme',
	'tool.readme-template-generator.meta_title': 'Plantilla README — Markdown | fmtly',
	'tool.readme-template-generator.meta_description':
		'Cree README.md desde campos: comandos, uso, licencia, badges opcionales. Todo en el cliente.',
	'tool.readme-template-generator.operation': 'generate',
	'tool.readme-template-generator.faq.0.question': '¿Puedo personalizar después?',
	'tool.readme-template-generator.faq.0.answer': 'Sí — Markdown plano, amplíelo como quiera.',
	'tool.readme-template-generator.faq.1.question': '¿Badges en cualquier forja?',
	'tool.readme-template-generator.faq.1.answer':
		'Los badges siguen un patrón tipo shields para rutas GitHub; ajuste URLs en otros hosts.',
	'tool.readme-template-generator.faq.2.question': '¿Se envía el nombre del proyecto?',
	'tool.readme-template-generator.faq.2.answer': 'No. El texto se arma solo en el navegador.',
	'tool.readme-template-generator.faq.3.question': '¿Repos privados?',
	'tool.readme-template-generator.faq.3.answer':
		'Sí — no hay subida; pegue el Markdown manualmente.',
	'tool.readme-template-generator.use_case.0': 'Open source en GitHub/GitLab',
	'tool.readme-template-generator.use_case.1': 'Bibliotecas internas con README uniforme',
	'tool.readme-template-generator.use_case.2': 'Hackatones y prototipos',
	'tool.readme-template-generator.use_case.3': 'Enseñar Markdown y buenas prácticas',
	'ui.generate_fake_data.no_fields': 'Seleccione al menos un campo.',
	'ui.generate_fake_data.fields_label': 'Campos',
	'ui.generate_fake_data.rows': 'Filas',
	'ui.generate_fake_data.format': 'Formato de exportación',
	'ui.generate_fake_data.table': 'Nombre de tabla SQL',
	'ui.generate_fake_data.generate': 'Generar',
	'ui.generate_fake_data.worker_badge': 'Web Worker',
	'ui.generate_fake_data.preview': 'Salida',
	'ui.generate_fake_data.placeholder': 'Los datos generados aparecen aquí…',
	'ui.generate_fake_data.field.fullName': 'Nombre completo',
	'ui.generate_fake_data.field.firstName': 'Nombre',
	'ui.generate_fake_data.field.lastName': 'Apellidos',
	'ui.generate_fake_data.field.email': 'Correo',
	'ui.generate_fake_data.field.phone': 'Teléfono',
	'ui.generate_fake_data.field.street': 'Calle',
	'ui.generate_fake_data.field.city': 'Ciudad',
	'ui.generate_fake_data.field.zip': 'CP',
	'ui.generate_fake_data.field.country': 'País',
	'ui.generate_fake_data.field.company': 'Empresa',
	'ui.generate_fake_data.field.jobTitle': 'Puesto',
	'ui.generate_fake_data.field.ipv4': 'IPv4',
	'ui.generate_fake_data.field.date': 'Fecha',
	'ui.generate_fake_data.field.uuid': 'UUID',
	'ui.generate_uuid_batch.count': 'Cantidad',
	'ui.generate_uuid_batch.separator': 'Separador',
	'ui.generate_uuid_batch.sep_line': 'Salto de línea',
	'ui.generate_uuid_batch.sep_comma': 'Coma',
	'ui.generate_uuid_batch.generate': 'Generar',
	'ui.generate_uuid_batch.worker': 'Web Worker',
	'ui.generate_uuid_batch.output': 'UUID',
	'ui.generate_uuid_batch.placeholder': 'Los UUID generados aparecen aquí…',
	'ui.generate_password.length': 'Longitud',
	'ui.generate_password.upper': 'A–Z',
	'ui.generate_password.lower': 'a–z',
	'ui.generate_password.digits': '0–9',
	'ui.generate_password.symbols': 'Símbolos',
	'ui.generate_password.no_ambiguous': 'Evitar ambiguos',
	'ui.generate_password.groups': 'Guion cada N caracteres (0 = no)',
	'ui.generate_password.regenerate': 'Regenerar',
	'ui.generate_password.strength_hint': 'Pista',
	'ui.generate_password.strength.0': 'Muy fácil de adivinar',
	'ui.generate_password.strength.1': 'Muy débil',
	'ui.generate_password.strength.2': 'Débil',
	'ui.generate_password.strength.3': 'Buena',
	'ui.generate_password.strength.4': 'Fuerte',
	'ui.generate_password.disclaimer':
		'Generado en el navegador con Web Crypto. La pista usa zxcvbn en local — valide políticas para secretos críticos.',
	'ui.generate_gitignore.search': 'Filtrar pilas…',
	'ui.generate_readme.title': 'Título',
	'ui.generate_readme.license': 'Licencia',
	'ui.generate_readme.description': 'Descripción',
	'ui.generate_readme.install': 'Instalación',
	'ui.generate_readme.usage': 'Uso',
	'ui.generate_readme.badges': 'Badges estilo GitHub',
	'ui.generate_readme.repo_user': 'Usuario u org de GitHub',
	'ui.generate_readme.repo_name': 'Nombre del repositorio',

	'category.pdf.display_name': 'PDF',
	'category.pdf.description':
		'Visualiza, extrae, combina, divide e inspecciona archivos PDF directamente en tu navegador sin subirlos.',
	'category.pdf.primary_keyword': 'herramientas pdf',
	'tool.pdf-viewer.display_name': 'Visor PDF',
	'tool.pdf-viewer.tagline': 'Renderiza paginas PDF con controles de zoom y navegacion',
	'tool.pdf-viewer.description':
		'Abre PDFs en el navegador y recorre sus paginas con zoom fluido y cambio rapido de pagina.',
	'tool.pdf-viewer.primary_keyword': 'visor pdf',
	'tool.pdf-viewer.meta_title': 'Visor PDF en linea - fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'Visualiza archivos PDF directamente en tu navegador con navegacion por paginas y control de zoom. Sin subidas.',
	'tool.pdf-viewer.operation': 'Ver',
	'tool.pdf-viewer.faq.0.question': 'Se suben los PDF a un servidor?',
	'tool.pdf-viewer.faq.0.answer': 'No. Los archivos permanecen en tu navegador y nunca se suben.',
	'tool.pdf-viewer.faq.1.question': 'Puedo navegar PDFs grandes?',
	'tool.pdf-viewer.faq.1.answer':
		'Si. Puedes avanzar pagina por pagina y acercar o alejar para leer mejor.',
	'tool.pdf-viewer.faq.2.question': 'Admite PDFs protegidos con contrasena?',
	'tool.pdf-viewer.faq.2.answer':
		'Los PDFs cifrados todavia no estan soportados en este flujo de visor.',
	'tool.pdf-viewer.faq.3.question': 'Que navegadores se recomiendan?',
	'tool.pdf-viewer.faq.3.answer':
		'Las versiones recientes de Chrome, Edge, Firefox y Safari ofrecen la mejor compatibilidad.',
	'tool.pdf-viewer.use_case.0': 'Previsualizar adjuntos rapidamente antes de compartir',
	'tool.pdf-viewer.use_case.1': 'Revisar escaneos sin software de escritorio',
	'tool.pdf-viewer.use_case.2': 'Leer PDFs largos con zoom y controles de pagina',
	'tool.pdf-viewer.use_case.3': 'Abrir archivos PDF de forma segura en el navegador',
	'tool.pdf-to-text.display_name': 'PDF a Texto',
	'tool.pdf-to-text.tagline': 'Extrae texto sin formato pagina por pagina desde archivos PDF',
	'tool.pdf-to-text.description':
		'Extrae texto plano de paginas PDF y revisa la salida de cada pagina por separado para copiar o exportar.',
	'tool.pdf-to-text.primary_keyword': 'pdf a texto',
	'tool.pdf-to-text.meta_title': 'Extractor de PDF a Texto - fmtly.dev',
	'tool.pdf-to-text.meta_description':
		'Extrae texto de archivos PDF pagina por pagina en tu navegador. Copia o descarga el resultado al instante.',
	'tool.pdf-to-text.operation': 'Extraer',
	'tool.pdf-to-text.faq.0.question': 'Que tan precisa es la extraccion de texto?',
	'tool.pdf-to-text.faq.0.answer':
		'Los PDFs basados en texto se extraen con precision. Los PDFs escaneados pueden requerir OCR externo.',
	'tool.pdf-to-text.faq.1.question': 'La salida se agrupa por pagina?',
	'tool.pdf-to-text.faq.1.answer':
		'Si. Cada pagina se devuelve con su propio bloque de texto extraido.',
	'tool.pdf-to-text.faq.2.question': 'Puedo descargar el texto extraido?',
	'tool.pdf-to-text.faq.2.answer':
		'Si. Puedes descargar todas las paginas extraidas como archivo de texto.',
	'tool.pdf-to-text.faq.3.question': 'Funciona sin conexion?',
	'tool.pdf-to-text.faq.3.answer':
		'Una vez cargado, el procesamiento es local en tu navegador y no envia el contenido a ningun servidor.',
	'tool.pdf-to-text.use_case.0': 'Extraer clausulas legales para revision rapida',
	'tool.pdf-to-text.use_case.1': 'Reutilizar contenido de informes y manuales',
	'tool.pdf-to-text.use_case.2': 'Preparar texto para flujos de traduccion',
	'tool.pdf-to-text.use_case.3': 'Crear copias buscables de PDFs con texto',
	'tool.pdf-merge.display_name': 'Unir PDF',
	'tool.pdf-merge.tagline': 'Combina varios archivos PDF en un solo documento',
	'tool.pdf-merge.description':
		'Une varios PDFs en el orden que prefieras y descargalos como un unico archivo.',
	'tool.pdf-merge.primary_keyword': 'unir pdf',
	'tool.pdf-merge.meta_title': 'Unir archivos PDF en linea - fmtly.dev',
	'tool.pdf-merge.meta_description':
		'Combina varios archivos PDF en el navegador y descarga un unico PDF. Reordena archivos antes de unir.',
	'tool.pdf-merge.operation': 'Unir',
	'tool.pdf-merge.faq.0.question': 'Puedo reordenar archivos antes de unir?',
	'tool.pdf-merge.faq.0.answer':
		'Si. Mueve los archivos hacia arriba o abajo antes de iniciar la union.',
	'tool.pdf-merge.faq.1.question': 'Hay limite de cantidad de archivos?',
	'tool.pdf-merge.faq.1.answer':
		'No hay un limite estricto, pero conjuntos muy grandes pueden tardar mas segun la memoria disponible.',
	'tool.pdf-merge.faq.2.question': 'Cambia la calidad despues de unir?',
	'tool.pdf-merge.faq.2.answer':
		'No se recodifica; las paginas se copian directamente a un nuevo PDF.',
	'tool.pdf-merge.faq.3.question': 'Mis datos son privados?',
	'tool.pdf-merge.faq.3.answer': 'Si. Todo el proceso de union ocurre localmente en tu navegador.',
	'tool.pdf-merge.use_case.0': 'Combinar lotes de facturas en un solo archivo',
	'tool.pdf-merge.use_case.1': 'Unir capitulos de informes antes de entregar',
	'tool.pdf-merge.use_case.2': 'Juntar partes de documentos firmados en orden',
	'tool.pdf-merge.use_case.3': 'Armar documentacion de proyecto rapidamente',
	'tool.pdf-split.display_name': 'Dividir PDF',
	'tool.pdf-split.tagline': 'Divide un PDF en archivos individuales por pagina',
	'tool.pdf-split.description':
		'Divide un PDF en archivos separados introduciendo rangos de paginas personalizados.',
	'tool.pdf-split.primary_keyword': 'dividir pdf',
	'tool.pdf-split.meta_title': 'Dividir paginas PDF en linea - fmtly.dev',
	'tool.pdf-split.meta_description':
		'Divide documentos PDF por rangos de paginas y descarga cada pagina seleccionada como PDF independiente.',
	'tool.pdf-split.operation': 'Dividir',
	'tool.pdf-split.faq.0.question': 'Como funcionan los rangos de paginas?',
	'tool.pdf-split.faq.0.answer':
		'Usa formatos como 1,3,5-8. Puedes mezclar paginas sueltas y rangos en una sola entrada.',
	'tool.pdf-split.faq.1.question': 'Puedo dividir todas las paginas?',
	'tool.pdf-split.faq.1.answer':
		'Si. Introduce un rango completo como 1-200 o el total de paginas del documento.',
	'tool.pdf-split.faq.2.question': 'Se renumeran las paginas?',
	'tool.pdf-split.faq.2.answer':
		'Los archivos de salida conservan la posicion original en sus nombres.',
	'tool.pdf-split.faq.3.question': 'Es seguro para archivos confidenciales?',
	'tool.pdf-split.faq.3.answer':
		'Si. El procesamiento ocurre totalmente en tu navegador sin subir archivos.',
	'tool.pdf-split.use_case.0': 'Enviar solo las paginas necesarias a clientes',
	'tool.pdf-split.use_case.1': 'Partir manuales largos en partes pequenas',
	'tool.pdf-split.use_case.2': 'Archivar secciones especificas por separado',
	'tool.pdf-split.use_case.3': 'Preparar paquetes de revision por pagina',
	'tool.pdf-page-extractor.display_name': 'Extractor de Paginas PDF',
	'tool.pdf-page-extractor.tagline': 'Extrae paginas especificas a un nuevo PDF',
	'tool.pdf-page-extractor.description':
		'Selecciona paginas personalizadas y genera un nuevo PDF solo con las paginas que necesitas.',
	'tool.pdf-page-extractor.primary_keyword': 'extraer paginas de pdf',
	'tool.pdf-page-extractor.meta_title': 'Extraer paginas PDF - fmtly.dev',
	'tool.pdf-page-extractor.meta_description':
		'Extrae paginas seleccionadas de un PDF y crea un nuevo documento al instante en tu navegador.',
	'tool.pdf-page-extractor.operation': 'Extraer paginas',
	'tool.pdf-page-extractor.faq.0.question': 'Cual es la diferencia con dividir?',
	'tool.pdf-page-extractor.faq.0.answer':
		'El extractor crea un solo PDF nuevo con paginas seleccionadas. Dividir crea varios archivos de una pagina.',
	'tool.pdf-page-extractor.faq.1.question': 'Puedo mantener el orden de paginas?',
	'tool.pdf-page-extractor.faq.1.answer':
		'Si. Las paginas seleccionadas se incluyen en orden ascendente por defecto.',
	'tool.pdf-page-extractor.faq.2.question': 'Puedo eliminar duplicados de la seleccion?',
	'tool.pdf-page-extractor.faq.2.answer':
		'Las paginas duplicadas se eliminan automaticamente al procesar rangos de pagina.',
	'tool.pdf-page-extractor.faq.3.question': 'Se conservan los marcadores?',
	'tool.pdf-page-extractor.faq.3.answer':
		'En este flujo ligero de extraccion solo se conserva el contenido de las paginas.',
	'tool.pdf-page-extractor.use_case.0': 'Crear paquetes enfocados desde archivos grandes',
	'tool.pdf-page-extractor.use_case.1': 'Enviar versiones solo con anexos',
	'tool.pdf-page-extractor.use_case.2': 'Preparar subconjuntos de evidencia o referencia',
	'tool.pdf-page-extractor.use_case.3': 'Construir documentos de revision concisos',
	'tool.pdf-metadata-viewer.display_name': 'Visor de Metadatos PDF',
	'tool.pdf-metadata-viewer.tagline': 'Inspecciona metadatos PDF y detalles del archivo',
	'tool.pdf-metadata-viewer.description':
		'Lee metadatos PDF como titulo, autor, creador, fechas, cantidad de paginas y tamano de archivo.',
	'tool.pdf-metadata-viewer.primary_keyword': 'metadatos pdf',
	'tool.pdf-metadata-viewer.meta_title': 'Visor de Metadatos PDF - fmtly.dev',
	'tool.pdf-metadata-viewer.meta_description':
		'Inspecciona metadatos PDF en tu navegador, incluyendo informacion del documento, paginas y tamano.',
	'tool.pdf-metadata-viewer.operation': 'Inspeccionar',
	'tool.pdf-metadata-viewer.faq.0.question': 'Que campos de metadatos se muestran?',
	'tool.pdf-metadata-viewer.faq.0.answer':
		'Se muestran titulo, autor, asunto, palabras clave, creador, productor y fechas cuando estan disponibles.',
	'tool.pdf-metadata-viewer.faq.1.question': 'Puedo editar metadatos?',
	'tool.pdf-metadata-viewer.faq.1.answer':
		'Esta herramienta es de solo lectura y se centra en una inspeccion rapida.',
	'tool.pdf-metadata-viewer.faq.2.question': 'Que pasa si hay campos vacios?',
	'tool.pdf-metadata-viewer.faq.2.answer':
		'Algunos PDFs no definen todos los campos. Los valores faltantes se muestran como no disponibles.',
	'tool.pdf-metadata-viewer.faq.3.question': 'La extraccion de metadatos es local?',
	'tool.pdf-metadata-viewer.faq.3.answer':
		'Si. Los metadatos se analizan completamente en tu navegador.',
	'tool.pdf-metadata-viewer.use_case.0': 'Auditar campos de procedencia del documento',
	'tool.pdf-metadata-viewer.use_case.1': 'Verificar cantidad de paginas antes de procesos masivos',
	'tool.pdf-metadata-viewer.use_case.2': 'Validar metadatos de publicacion rapidamente',
	'tool.pdf-metadata-viewer.use_case.3': 'Confirmar detalles del archivo antes de compartir',
	'ui.pdf.select_file': 'Seleccionar PDF',
	'ui.pdf.select_file_first': 'Primero selecciona un archivo PDF',
	'ui.pdf.worker_used': 'Worker',
	'ui.pdf.bytes': 'bytes',
	'ui.pdf.page': 'Pagina',
	'ui.pdf.page_ranges_placeholder': 'ej. 1,3-5',
	'ui.pdf.viewer.loaded': 'PDF cargado',
	'ui.pdf.viewer.error': 'No se pudo abrir el PDF',
	'ui.pdf.viewer.render_error': 'No se pudo renderizar la pagina',
	'ui.pdf.viewer.fit_width_error': 'No se pudo ajustar la pagina al ancho',
	'ui.pdf.viewer.page': 'Pagina',
	'ui.pdf.viewer.fit_width': 'Ajustar al ancho',
	'ui.pdf.viewer.reset_zoom': 'Restablecer zoom',
	'ui.pdf.viewer.empty': 'Sube un PDF para previsualizar paginas',
	'ui.pdf.to_text.extract': 'Extraer texto',
	'ui.pdf.to_text.done': 'Texto extraido',
	'ui.pdf.to_text.error': 'No se pudo extraer el texto',
	'ui.pdf.to_text.empty': 'No hay texto extraido para descargar',
	'ui.pdf.to_text.empty_hint': 'Sube un PDF y extrae texto pagina por pagina',
	'ui.pdf.to_text.no_output': 'Todavia no hay texto extraido',
	'ui.pdf.merge.select_files': 'Seleccionar archivos PDF',
	'ui.pdf.merge.select_more': 'Selecciona al menos dos archivos PDF',
	'ui.pdf.merge.run': 'Unir',
	'ui.pdf.merge.done': 'Archivos PDF unidos',
	'ui.pdf.merge.error': 'No se pudieron unir los PDF',
	'ui.pdf.merge.no_output': 'No hay PDF combinado para descargar',
	'ui.pdf.merge.files_selected': 'archivos seleccionados',
	'ui.pdf.merge.empty': 'Agrega archivos PDF para unir',
	'ui.pdf.split.run': 'Dividir',
	'ui.pdf.split.done': 'Division de PDF completada',
	'ui.pdf.split.error': 'No se pudo dividir el PDF',
	'ui.pdf.split.empty_hint': 'Sube un PDF e indica rangos de paginas',
	'ui.pdf.split.no_output': 'No se generaron archivos divididos',
	'ui.pdf.extract.run': 'Extraer paginas',
	'ui.pdf.extract.done': 'Paginas extraidas',
	'ui.pdf.extract.error': 'No se pudieron extraer paginas',
	'ui.pdf.extract.no_output': 'No hay PDF de salida para descargar',
	'ui.pdf.extract.empty_hint': 'Sube un PDF y elige rangos de paginas',
	'ui.pdf.extract.ready': 'El PDF de salida esta listo para descargar',
	'ui.pdf.metadata.run': 'Leer metadatos',
	'ui.pdf.metadata.done': 'Metadatos cargados',
	'ui.pdf.metadata.error': 'No se pudieron leer los metadatos',
	'ui.pdf.metadata.empty_hint': 'Sube un PDF para inspeccionar metadatos',
	'ui.pdf.metadata.no_output': 'No hay metadatos cargados',
	'ui.pdf.metadata.title': 'Titulo',
	'ui.pdf.metadata.author': 'Autor',
	'ui.pdf.metadata.subject': 'Asunto',
	'ui.pdf.metadata.keywords': 'Palabras clave',
	'ui.pdf.metadata.creator': 'Creador',
	'ui.pdf.metadata.producer': 'Productor',
	'ui.pdf.metadata.creation_date': 'Fecha de creacion',
	'ui.pdf.metadata.modification_date': 'Fecha de modificacion',
	'ui.pdf.metadata.page_count': 'Cantidad de paginas',
	'ui.pdf.metadata.file_size': 'Tamano del archivo (bytes)',

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
		'1. Ordena los archivos · 2. Toca Combinar · 3. Descarga el PDF combinado abajo.',
	'ui.pdf.merge.ready_title': 'El PDF combinado está listo',
	'ui.pdf.merge.ready_subtitle': 'Tamaño de salida: {size}. Se guarda como merged.pdf.',
	'ui.pdf.merge.download_primary': 'Descargar PDF combinado',
	'ui.pdf.merge.download_locked': 'Primero pulsa Combinar — el botón de descarga aparecerá aquí.',

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
	'category.image.display_name': 'Imagen',
	'category.image.description':
		'Redimensiona, convierte y optimiza imágenes en tu navegador sin subidas. Mantén control de dimensiones, formato y calidad.',
	'category.image.primary_keyword': 'herramientas de imagen',
	'tool.image-resizer.display_name': 'Redimensionador de Imágenes',
	'tool.image-resizer.tagline':
		'Redimensiona imágenes con bloqueo de proporción, escala porcentual y control de calidad',
	'tool.image-resizer.description':
		'Redimensiona imágenes en tu navegador con ancho/alto personalizados, escala por porcentaje, bloqueo de relación de aspecto, cambio de formato (PNG, JPEG, WebP) y descarga instantánea.',
	'tool.image-resizer.primary_keyword': 'redimensionador de imágenes',
	'tool.image-resizer.meta_title':
		'Redimensionador de Imágenes Online — PNG, JPEG, WebP | fmtly.dev',
	'tool.image-resizer.meta_description':
		'Redimensiona imágenes online en tu navegador. Ajusta ancho y alto, mantiene proporción, cambia formato y calidad. Sin subidas ni registro.',
	'tool.image-resizer.operation': 'Redimensionar',
	'tool.image-resizer.faq.0.question': '¿Las imágenes se suben a un servidor?',
	'tool.image-resizer.faq.0.answer':
		'No. El procesamiento se hace localmente en el navegador; tus archivos no salen de tu dispositivo.',
	'tool.image-resizer.faq.1.question': '¿Puedo mantener la proporción original?',
	'tool.image-resizer.faq.1.answer':
		'Sí. Activa el bloqueo de proporción para que al cambiar ancho o alto se ajuste automáticamente la otra dimensión.',
	'tool.image-resizer.faq.2.question': '¿Qué formatos de salida son compatibles?',
	'tool.image-resizer.faq.2.answer':
		'Puedes conservar el formato original o exportar a PNG, JPEG y WebP con control de calidad para formatos con pérdida.',
	'tool.image-resizer.faq.3.question': '¿Funciona con imágenes grandes?',
	'tool.image-resizer.faq.3.answer':
		'Sí. Cuando la entrada supera 500KB, el redimensionado se ejecuta en un Web Worker para mantener la interfaz fluida.',
	'tool.image-resizer.use_case.0':
		'Reducir dimensiones antes de publicar imágenes en web o apps móviles',
	'tool.image-resizer.use_case.1':
		'Crear variantes PNG, JPEG o WebP con tamaños y calidad controlados',
	'tool.image-resizer.use_case.2':
		'Preparar miniaturas y assets optimizados para velocidad de carga',
	'tool.image-resizer.use_case.3': 'Redimensionar imágenes de forma privada sin subir archivos',

	'tool.image-format-converter.display_name': 'Conversor de Formatos de Imagen',
	'tool.image-format-converter.tagline': 'Convierte PNG, JPEG, WebP, AVIF y GIF de forma privada',
	'tool.image-format-converter.description':
		'Convierte imágenes entre PNG, JPEG, WebP, AVIF y GIF directamente en el navegador. Previsualiza el resultado, ajusta la calidad, aplana transparencias para JPEG y descarga sin subir archivos.',
	'tool.image-format-converter.primary_keyword': 'conversor de formatos de imagen',
	'tool.image-format-converter.meta_title':
		'Conversor Imagen — PNG, JPG, WebP, AVIF, GIF | fmtly.dev',
	'tool.image-format-converter.meta_description':
		'Convierte PNG, JPEG, WebP, AVIF y GIF online en tu navegador. Privado, rápido, con control de calidad y Web Worker para archivos grandes.',
	'tool.image-format-converter.operation': 'Convertir imagen',
	'tool.image-format-converter.faq.0.question': '¿Se suben mis imágenes?',
	'tool.image-format-converter.faq.0.answer':
		'No. Los archivos se decodifican, convierten, previsualizan y descargan localmente en tu navegador. Nada se envía a un servidor.',
	'tool.image-format-converter.faq.1.question': '¿Entre qué formatos puedo convertir?',
	'tool.image-format-converter.faq.1.answer':
		'Puedes importar PNG, JPEG, WebP, AVIF y GIF, y exportar PNG, JPEG, WebP, AVIF o GIF cuando tu navegador admita el codificador de destino.',
	'tool.image-format-converter.faq.2.question': '¿Qué ocurre con la transparencia?',
	'tool.image-format-converter.faq.2.answer':
		'PNG, WebP, AVIF y GIF pueden conservar la transparencia. JPEG no tiene canal alfa, así que las zonas transparentes se componen sobre el fondo elegido.',
	'tool.image-format-converter.faq.3.question':
		'¿Cómo se mantiene fluida la interfaz con archivos grandes?',
	'tool.image-format-converter.faq.3.answer':
		'Las entradas de más de 500KB se procesan en un Web Worker para mantener la conversión fuera del hilo de la interfaz.',
	'tool.image-format-converter.use_case.0': 'Convertir capturas a WebP o AVIF antes de publicarlas',
	'tool.image-format-converter.use_case.1':
		'Crear versiones JPEG de recursos transparentes con fondo controlado',
	'tool.image-format-converter.use_case.2':
		'Exportar GIF ligeros de vista previa desde arte estático',
	'tool.image-format-converter.use_case.3':
		'Normalizar imágenes de clientes antes de subirlas a un CMS o API',
	'ui.image_converter.upload': 'Subir imagen',
	'ui.image_converter.clear': 'Limpiar',
	'ui.image_converter.no_file': 'No hay imagen seleccionada',
	'ui.image_converter.source_status': '{size} · {format} · {dimensions}',
	'ui.image_converter.output_status': '{size} · {format} · {dimensions}',
	'ui.image_converter.worker_active':
		'Imagen grande detectada (>{size}). La conversión se ejecuta en un Web Worker.',
	'ui.image_converter.worker_used': 'Procesado fuera del hilo principal',
	'ui.image_converter.worker_failed': 'Falló la conversión en Worker. Se usará el hilo principal.',
	'ui.image_converter.convert_failed': 'No se pudo convertir la imagen',
	'ui.image_converter.file_read_error': 'No se pudo cargar la imagen',
	'ui.image_converter.file_loaded': '{name} cargado',
	'ui.image_converter.input_cleared': 'Entrada de imagen limpiada',
	'ui.image_converter.copy_empty': 'No hay nada que copiar',
	'ui.image_converter.copy_success': 'Salida copiada',
	'ui.image_converter.copy_error': 'Error al copiar',
	'ui.image_converter.download_empty': 'No hay nada que descargar',
	'ui.image_converter.download_success': '{filename} descargado',
	'ui.image_converter.download_error': 'Error en la descarga',
	'ui.image_converter.drop_title': 'Suelta una imagen aquí',
	'ui.image_converter.drop_hint': 'PNG, JPEG, WebP, AVIF y GIF permanecen en este navegador.',
	'ui.image_converter.source_preview_alt': 'Vista previa de la imagen de origen',
	'ui.image_converter.output_preview_alt': 'Vista previa de la imagen convertida',
	'ui.image_converter.output_format': 'Formato de salida',
	'ui.image_converter.quality': 'Calidad',
	'ui.image_converter.background': 'Fondo JPEG',
	'ui.image_converter.background_white': 'Blanco',
	'ui.image_converter.background_black': 'Negro',
	'ui.image_converter.background_transparent': 'Transparente',
	'ui.image_converter.privacy_note': 'La conversión es local; los archivos no salen del navegador.',
	'ui.image_converter.performance_note': 'Las entradas grandes usan Web Worker a partir de {size}.',
	'ui.image_converter.stat.source_format': 'Formato de origen',
	'ui.image_converter.stat.source_size': 'Tamaño original',
	'ui.image_converter.stat.output_format': 'Formato de salida',
	'ui.image_converter.stat.output_size': 'Tamaño convertido',
	'ui.image_converter.stat.size_delta': 'Cambio de tamaño',
	'ui.image_converter.stat.size_delta_helper': 'comparado con el origen',
	'ui.image_converter.processing': 'Convirtiendo...',
	'ui.image_converter.copy_output': 'Copiar URL de datos',
	'ui.image_converter.download': 'Descargar',
	'ui.image_converter.output_placeholder': 'La salida convertida aparecerá aquí...',
	'tool.image-to-base64.display_name': 'Imagen a Base64',
	'tool.image-to-base64.tagline':
		'Convierte imágenes en Base64 puro o en data URI lista para pegar',
	'tool.image-to-base64.description':
		'Convierte imágenes a cadenas Base64 o data URI completas directamente en tu navegador. Copia el resultado, descarga archivos `.txt` y mantén todo el procesamiento local incluso con archivos grandes.',
	'tool.image-to-base64.primary_keyword': 'imagen a base64',
	'tool.image-to-base64.meta_title': 'Imagen a Base64 — Convertidor Data URI | fmtly.dev',
	'tool.image-to-base64.meta_description':
		'Convierte imágenes a Base64 o data URI completas en tu navegador. Privado, rápido, con copia, descarga y Web Worker para archivos grandes.',
	'tool.image-to-base64.operation': 'Convertir imagen a Base64',
	'tool.image-to-base64.faq.0.question': '¿La imagen sale del navegador?',
	'tool.image-to-base64.faq.0.answer':
		'No. La conversión se realiza completamente en tu navegador y el archivo nunca se sube a un servidor.',
	'tool.image-to-base64.faq.1.question': '¿Cuál es la diferencia entre Base64 y data URI?',
	'tool.image-to-base64.faq.1.answer':
		'Base64 contiene solo la carga codificada. Una data URI añade el prefijo MIME, como `data:image/png;base64,`, para que puedas pegarla directamente en HTML, CSS o JSON.',
	'tool.image-to-base64.faq.2.question': '¿Qué formatos de imagen se admiten?',
	'tool.image-to-base64.faq.2.answer':
		'La herramienta acepta formatos comunes del navegador, incluidos PNG, JPEG, WebP, GIF, BMP, AVIF, SVG e ICO.',
	'tool.image-to-base64.faq.3.question': '¿Cómo se manejan las imágenes grandes?',
	'tool.image-to-base64.faq.3.answer':
		'Cuando la entrada supera 500KB, la codificación se mueve a un Web Worker para mantener la interfaz fluida.',
	'tool.image-to-base64.use_case.0':
		'Insertar iconos y pequeños recursos inline en HTML, CSS o cargas JSON',
	'tool.image-to-base64.use_case.1':
		'Generar data URI listas para pegar en prototipos, emails o bundles pequeños',
	'tool.image-to-base64.use_case.2':
		'Comparar el crecimiento del tamaño antes de incrustar imágenes en texto',
	'tool.image-to-base64.use_case.3':
		'Convertir imágenes privadas a Base64 sin usar servicios externos',
	'tool.image-from-base64.display_name': 'Base64 a Imagen',
	'tool.image-from-base64.tagline':
		'Decodifica Base64 o data URI en imágenes descargables y previsualizadas',
	'tool.image-from-base64.description':
		'Pega Base64 puro o una data URI completa para reconstruir imágenes directamente en el navegador. La herramienta corrige espacios y padding cuando es seguro, detecta tipos de imagen comunes y permite descargar al instante.',
	'tool.image-from-base64.primary_keyword': 'base64 a imagen',
	'tool.image-from-base64.meta_title': 'Base64 a Imagen — Decodificar Data URI | fmtly.dev',
	'tool.image-from-base64.meta_description':
		'Decodifica Base64 o data URI en imágenes descargables en tu navegador. Detecta MIME, corrige padding y espacios, y mantiene todo privado.',
	'tool.image-from-base64.operation': 'Decodificar imagen Base64',
	'tool.image-from-base64.faq.0.question':
		'¿Puedo pegar una data URI completa en lugar de Base64 puro?',
	'tool.image-from-base64.faq.0.answer':
		'Sí. Puedes pegar cadenas como `data:image/png;base64,...` y la herramienta extraerá automáticamente la carga Base64.',
	'tool.image-from-base64.faq.1.question': '¿Qué pasa si falta el tipo MIME?',
	'tool.image-from-base64.faq.1.answer':
		'La herramienta intenta detectar el tipo real desde los bytes decodificados. Si no puede, usa el tipo MIME alternativo que selecciones.',
	'tool.image-from-base64.faq.2.question': '¿Corrige espacios o padding faltante?',
	'tool.image-from-base64.faq.2.answer':
		'Sí. Elimina espacios, normaliza caracteres URL-safe y añade padding final cuando hace falta. Esos ajustes se muestran en el resumen de normalización.',
	'tool.image-from-base64.faq.3.question': '¿El contenido Base64 sigue siendo privado?',
	'tool.image-from-base64.faq.3.answer':
		'Sí. La decodificación ocurre por completo en tu navegador y no se envía ningún contenido a un backend.',
	'tool.image-from-base64.use_case.0':
		'Recuperar imágenes desde cargas JSON, HTML o archivos de configuración',
	'tool.image-from-base64.use_case.1':
		'Comprobar rápidamente si una cadena Base64 contiene PNG, JPEG, SVG u otra imagen',
	'tool.image-from-base64.use_case.2': 'Descargar imágenes incrustadas compartidas como data URI',
	'tool.image-from-base64.use_case.3': 'Normalizar Base64 heredado con espacios o padding faltante',
	'ui.image_to_base64.upload': 'Subir imagen',
	'ui.image_to_base64.clear': 'Limpiar',
	'ui.image_to_base64.no_file': 'No hay imagen seleccionada',
	'ui.image_to_base64.source_status': '{size} · {format}',
	'ui.image_to_base64.output_status':
		'{base64Chars} caracteres Base64 · {dataUrlChars} caracteres de data URI',
	'ui.image_to_base64.worker_active':
		'Imagen grande detectada (>{size}). La conversión se ejecuta en un Web Worker.',
	'ui.image_to_base64.worker_used': 'Procesado fuera del hilo principal',
	'ui.image_to_base64.worker_failed':
		'Falló la codificación en Worker. Se usará el hilo principal.',
	'ui.image_to_base64.file_read_error': 'No se pudo cargar la imagen',
	'ui.image_to_base64.file_loaded': '{name} cargado',
	'ui.image_to_base64.input_cleared': 'Entrada de imagen limpiada',
	'ui.image_to_base64.copy_empty': 'No hay nada que copiar',
	'ui.image_to_base64.copy_success': 'Salida copiada',
	'ui.image_to_base64.copy_data_uri_success': 'Data URI copiada',
	'ui.image_to_base64.copy_error': 'Error al copiar',
	'ui.image_to_base64.download_empty': 'No hay nada que descargar',
	'ui.image_to_base64.download_success': '{filename} descargado',
	'ui.image_to_base64.download_error': 'Error en la descarga',
	'ui.image_to_base64.drop_title': 'Suelta una imagen aquí',
	'ui.image_to_base64.drop_hint':
		'PNG, JPEG, WebP, GIF, SVG, BMP, AVIF e ICO permanecen en este navegador.',
	'ui.image_to_base64.source_preview_alt': 'Vista previa de la imagen de origen',
	'ui.image_to_base64.privacy_note':
		'La codificación es local; tu imagen nunca sale del navegador.',
	'ui.image_to_base64.performance_note':
		'Las entradas grandes usan un Web Worker a partir de {size}.',
	'ui.image_to_base64.stat.file_size': 'Tamaño de imagen',
	'ui.image_to_base64.stat.file_size_helper': 'entrada solo en navegador',
	'ui.image_to_base64.stat.base64_length': 'Longitud Base64',
	'ui.image_to_base64.stat.base64_length_helper': 'caracteres sin prefijo',
	'ui.image_to_base64.stat.expansion': 'Crecimiento de carga',
	'ui.image_to_base64.stat.expansion_helper': 'sobrecarga esperada de Base64',
	'ui.image_to_base64.processing': 'Codificando...',
	'ui.image_to_base64.copy_base64': 'Copiar Base64',
	'ui.image_to_base64.copy_data_uri': 'Copiar data URI',
	'ui.image_to_base64.download_base64': 'Descargar .txt',
	'ui.image_to_base64.download_data_uri': 'Descargar data URI',
	'ui.image_to_base64.base64_output': 'Salida Base64',
	'ui.image_to_base64.output_placeholder': 'El Base64 codificado aparecerá aquí...',
	'ui.image_to_base64.data_uri_output': 'Salida data URI',
	'ui.image_to_base64.data_uri_placeholder': 'La data URI aparecerá aquí...',
	'ui.image_to_base64.unsupported_image': 'Formato de imagen no compatible',
	'ui.image_to_base64.empty_image': 'El archivo de imagen está vacío',
	'ui.image_to_base64.convert_failed': 'No se pudo convertir la imagen a Base64',
	'ui.image_from_base64.input_status': '{size} · {characters} caracteres',
	'ui.image_from_base64.output_status': '{size} · {type}',
	'ui.image_from_base64.worker_active':
		'Entrada Base64 grande detectada (>{size}). La decodificación se ejecuta en un Web Worker.',
	'ui.image_from_base64.worker_used': 'Procesado fuera del hilo principal',
	'ui.image_from_base64.worker_failed':
		'Falló la decodificación en Worker. Se usará el hilo principal.',
	'ui.image_from_base64.privacy_note':
		'Los bytes decodificados permanecen en tu navegador; no se sube nada.',
	'ui.image_from_base64.performance_note':
		'Las cadenas Base64 grandes usan un Web Worker a partir de {size}.',
	'ui.image_from_base64.input_placeholder':
		'Pega aquí una cadena Base64 o una data URI completa...',
	'ui.image_from_base64.output_placeholder':
		'La vista previa de la imagen decodificada aparecerá aquí...',
	'ui.image_from_base64.stat.output_type': 'Tipo de salida',
	'ui.image_from_base64.stat.output_type_helper': 'MIME detectado o alternativo',
	'ui.image_from_base64.stat.output_size': 'Tamaño de salida',
	'ui.image_from_base64.stat.output_size_helper': 'Tamaño binario decodificado',
	'ui.image_from_base64.stat.flags': 'Normalización',
	'ui.image_from_base64.stat.flags_helper': 'Prefijo, espacios y padding',
	'ui.image_from_base64.input_cleared': 'Entrada Base64 limpiada',
	'ui.image_from_base64.sample_loaded': 'Base64 de ejemplo cargado',
	'ui.image_from_base64.copy_empty': 'No hay nada que copiar',
	'ui.image_from_base64.copy_data_url_success': 'URL de datos copiada',
	'ui.image_from_base64.copy_error': 'Error al copiar',
	'ui.image_from_base64.copy_base64_success': 'Base64 normalizado copiado',
	'ui.image_from_base64.download_empty': 'No hay nada que descargar',
	'ui.image_from_base64.download_success': '{filename} descargado',
	'ui.image_from_base64.download_error': 'Error en la descarga',
	'ui.image_from_base64.decode_failed': 'No se pudo decodificar la imagen Base64',
	'ui.image_from_base64.error.empty': 'Pega una cadena Base64 para decodificar.',
	'ui.image_from_base64.error.invalid_mime':
		'La data URI declara un tipo MIME de imagen no compatible.',
	'ui.image_from_base64.error.invalid_characters':
		'La entrada contiene caracteres que no son Base64 válidos.',
	'ui.image_from_base64.error.invalid_padding':
		'El padding solo puede aparecer al final de la entrada Base64.',
	'ui.image_from_base64.error.invalid_length':
		'La longitud Base64 no es válida y no puede decodificarse.',
	'ui.image_from_base64.flag.data_uri': 'Data URI',
	'ui.image_from_base64.flag.whitespace': 'Espacios eliminados',
	'ui.image_from_base64.flag.padding': 'Padding corregido',
	'ui.image_from_base64.flag.fallback': 'MIME alternativo',
	'ui.image_from_base64.flag.clean': 'Sin correcciones',
	'ui.image_from_base64.sample': 'Cargar ejemplo',
	'ui.image_from_base64.clear': 'Limpiar',
	'ui.image_from_base64.fallback_mime': 'Tipo de salida alternativo',
	'ui.image_from_base64.processing': 'Decodificando...',
	'ui.image_from_base64.copy_base64': 'Copiar Base64',
	'ui.image_from_base64.copy_data_url': 'Copiar URL de datos',
	'ui.image_from_base64.download': 'Descargar',
	'ui.image_from_base64.output_preview_alt': 'Vista previa de la imagen decodificada',
	'ui.image_resizer.drop_title': 'Suelta una imagen aquí o selecciónala',
	'ui.image_resizer.drop_hint':
		'Todo se procesa localmente en tu navegador. No se sube ninguna imagen.',
	'ui.image_resizer.browse': 'Seleccionar imagen',
	'ui.image_resizer.input_aria': 'Elegir archivo de imagen',
	'ui.image_resizer.no_file': 'Aún no hay imagen',
	'ui.image_resizer.file_loaded': '{name} cargada',
	'ui.image_resizer.file_read_error': 'No se pudo leer la imagen',
	'ui.image_resizer.preview_alt': 'Vista previa redimensionada',
	'ui.image_resizer.controls_title': 'Controles de redimensionado',
	'ui.image_resizer.width_label': 'Ancho',
	'ui.image_resizer.height_label': 'Alto',
	'ui.image_resizer.scale_label': 'Escala',
	'ui.image_resizer.lock_ratio': 'Bloquear proporción',
	'ui.image_resizer.keep_format': 'Mantener formato original',
	'ui.image_resizer.output_format': 'Formato de salida',
	'ui.image_resizer.quality_label': 'Calidad',
	'ui.image_resizer.worker_active':
		'Entrada grande detectada (>{size}). El redimensionado se ejecuta en un Web Worker.',
	'ui.image_resizer.worker_badge': 'Worker',
	'ui.image_resizer.worker_used': 'Procesado en segundo hilo',
	'ui.image_resizer.worker_failed': 'Falló el procesamiento en worker. Se usará el hilo principal.',
	'ui.image_resizer.resize_failed': 'No se pudo redimensionar la imagen',
	'ui.image_resizer.output_title': 'Salida',
	'ui.image_resizer.output_placeholder': 'La imagen redimensionada aparecerá aquí...',
	'ui.image_resizer.processing': 'Redimensionando...',
	'ui.image_resizer.copy_image': 'Copiar imagen',
	'ui.image_resizer.download_image': 'Descargar',
	'ui.image_resizer.clear': 'Limpiar',
	'ui.image_resizer.copy_empty': 'No hay imagen para copiar',
	'ui.image_resizer.copy_success': 'Imagen copiada al portapapeles',
	'ui.image_resizer.copy_error': 'No se pudo copiar la imagen',
	'ui.image_resizer.download_empty': 'No hay imagen para descargar',
	'ui.image_resizer.download_success': '{filename} descargada',
	'ui.image_resizer.download_error': 'No se pudo descargar la imagen',
	'ui.image_resizer.clear_title': '¿Borrar la imagen actual?',
	'ui.image_resizer.clear_description':
		'Esta acción elimina la imagen cargada y el resultado redimensionado.',
	'ui.image_resizer.input_cleared': 'Imagen limpiada',
	'ui.image_resizer.stat.input_dimensions': 'Dimensiones originales',
	'ui.image_resizer.stat.input_size': 'Tamaño original',
	'ui.image_resizer.stat.output_dimensions': 'Dimensiones de salida',
	'ui.image_resizer.stat.output_size': 'Tamaño de salida',
	'ui.image_resizer.stat.reduction': 'Reducción',
	'ui.image_resizer.stat.reduction_helper': 'Ahorro estimado de tamaño',
	'ui.image_resizer.placeholder_width': 'Ancho',
	'ui.image_resizer.placeholder_height': 'Alto',
	'ui.image_resizer.png': 'PNG',
	'ui.image_resizer.jpeg': 'JPEG',
	'ui.image_resizer.webp': 'WebP',
	'ui.image_resizer.source_status': '{size} · {dimensions}',
	'ui.image_resizer.output_status': '{size} · {dimensions}',

	'tool.image-svg-optimizer.display_name': 'Optimizador SVG',
	'tool.image-svg-optimizer.tagline':
		'Optimiza SVG con SVGO, vista previa en vivo y privacidad total en el navegador',
	'tool.image-svg-optimizer.description':
		'Optimiza archivos SVG online con SVGO directamente en tu navegador. Elimina metadatos y comentarios, simplifica rutas, colapsa grupos, ordena atributos, conserva o elimina dimensiones y descarga el SVG limpio al instante.',
	'tool.image-svg-optimizer.primary_keyword': 'optimizador svg',
	'tool.image-svg-optimizer.meta_title':
		'Optimizador SVG — Optimiza SVG con SVGO online | fmtly.dev',
	'tool.image-svg-optimizer.meta_description':
		'Optimiza SVG online con SVGO. Elimina metadatos, colapsa grupos, simplifica rutas, ordena atributos y mantén cada archivo privado en tu navegador.',
	'tool.image-svg-optimizer.operation': 'Optimizar SVG',
	'tool.image-svg-optimizer.faq.0.question': '¿Mi SVG se sube a un servidor?',
	'tool.image-svg-optimizer.faq.0.answer':
		'No. La optimización se ejecuta completamente en tu navegador con SVGO cargado bajo demanda. El archivo permanece en tu dispositivo.',
	'tool.image-svg-optimizer.faq.1.question': '¿Qué optimizaciones puedo controlar?',
	'tool.image-svg-optimizer.faq.1.answer':
		'Puedes activar o desactivar la eliminación de metadatos, comentarios y <desc>, limpieza de IDs, colapso de grupos, simplificación de rutas, unión de rutas, orden de atributos, eliminación de dimensiones, multipass y salida formateada.',
	'tool.image-svg-optimizer.faq.2.question': '¿Cómo reviso el resultado de forma segura?',
	'tool.image-svg-optimizer.faq.2.answer':
		'La herramienta renderiza las vistas previa de origen y optimizada localmente como imágenes del navegador para que compares el resultado visual antes de descargar.',
	'tool.image-svg-optimizer.faq.3.question': '¿Qué ocurre con SVG grandes?',
	'tool.image-svg-optimizer.faq.3.answer':
		'Cuando la entrada SVG en UTF-8 supera 500KB, la optimización se mueve a un Web Worker para mantener el editor fluido.',
	'tool.image-svg-optimizer.use_case.0':
		'Reducir iconos SVG inline antes de publicarlos en bundles de producto',
	'tool.image-svg-optimizer.use_case.1':
		'Limpiar SVG exportados desde Figma, Illustrator o sistemas de diseño',
	'tool.image-svg-optimizer.use_case.2':
		'Normalizar assets SVG para CMS, plantillas de correo y bibliotecas de componentes',
	'tool.image-svg-optimizer.use_case.3':
		'Comparar el markup original y optimizado antes de versionar assets vectoriales',
	'ui.svg_optimizer.paste': 'Pegar SVG',
	'ui.svg_optimizer.paste_empty': 'El portapapeles está vacío',
	'ui.svg_optimizer.paste_success': 'Markup SVG pegado',
	'ui.svg_optimizer.paste_error': 'No se pudo pegar desde el portapapeles',
	'ui.svg_optimizer.no_file': 'No hay SVG seleccionado',
	'ui.svg_optimizer.worker_active':
		'Se detectó un SVG grande (>{size}). La optimización se ejecuta en un Web Worker.',
	'ui.svg_optimizer.worker_used': 'Procesado fuera del hilo principal',
	'ui.svg_optimizer.worker_failed': 'La optimización en Worker falló. Se usará el hilo principal.',
	'ui.svg_optimizer.optimize_failed': 'La optimización SVG falló',
	'ui.svg_optimizer.file_read_error': 'No se pudo cargar el archivo SVG',
	'ui.svg_optimizer.file_loaded': '{name} cargado',
	'ui.svg_optimizer.sample_loaded': 'SVG de ejemplo cargado',
	'ui.svg_optimizer.input_cleared': 'Entrada SVG limpiada',
	'ui.svg_optimizer.copy_empty': 'No hay nada que copiar',
	'ui.svg_optimizer.copy_success': 'SVG optimizado copiado',
	'ui.svg_optimizer.copy_error': 'Error al copiar',
	'ui.svg_optimizer.download_empty': 'No hay nada que descargar',
	'ui.svg_optimizer.download_success': '{filename} descargado',
	'ui.svg_optimizer.download_error': 'Error en la descarga',
	'ui.svg_optimizer.source_status': '{size} · {elements} elementos',
	'ui.svg_optimizer.output_status': '{size} · {elements} elementos',
	'ui.svg_optimizer.input_label': 'SVG de origen',
	'ui.svg_optimizer.drop_title': 'Suelta aquí un archivo SVG',
	'ui.svg_optimizer.drop_hint': 'O pega el markup SVG, sube un archivo o carga el ejemplo.',
	'ui.svg_optimizer.input_placeholder': 'Pega aquí el markup SVG...',
	'ui.svg_optimizer.option.remove_metadata': 'Eliminar metadatos',
	'ui.svg_optimizer.option.remove_comments': 'Eliminar comentarios',
	'ui.svg_optimizer.option.remove_desc': 'Eliminar <desc>',
	'ui.svg_optimizer.option.cleanup_ids': 'Limpiar IDs',
	'ui.svg_optimizer.option.collapse_groups': 'Colapsar grupos',
	'ui.svg_optimizer.option.convert_path_data': 'Simplificar rutas',
	'ui.svg_optimizer.option.merge_paths': 'Unir rutas',
	'ui.svg_optimizer.option.sort_attrs': 'Ordenar atributos',
	'ui.svg_optimizer.option.remove_dimensions': 'Eliminar ancho/alto',
	'ui.svg_optimizer.option.multipass': 'Ejecutar optimización multipass',
	'ui.svg_optimizer.option.pretty': 'Formatear salida',
	'ui.svg_optimizer.float_precision': 'Precisión decimal',
	'ui.svg_optimizer.indent': 'Sangría de salida formateada',
	'ui.svg_optimizer.privacy_note':
		'La optimización es local; los archivos SVG no salen de tu navegador.',
	'ui.svg_optimizer.performance_note':
		'Las entradas SVG grandes usan un Web Worker a partir de {size}.',
	'ui.svg_optimizer.stat.original_size': 'Tamaño original',
	'ui.svg_optimizer.stat.original_elements': 'Elementos de origen',
	'ui.svg_optimizer.stat.optimized_size': 'Tamaño optimizado',
	'ui.svg_optimizer.stat.optimized_elements': 'Elementos optimizados',
	'ui.svg_optimizer.stat.size_delta': 'Cambio de tamaño',
	'ui.svg_optimizer.stat.size_delta_helper': 'negativo = más pequeño',
	'ui.svg_optimizer.stat.duration': 'Tiempo',
	'ui.svg_optimizer.stat.runtime_helper': 'por ejecución de optimización',
	'ui.svg_optimizer.geometry_source': 'Geometría de origen',
	'ui.svg_optimizer.geometry_output': 'Geometría optimizada',
	'ui.svg_optimizer.preview_mode': 'Vista previa',
	'ui.svg_optimizer.code_mode': 'Código',
	'ui.svg_optimizer.processing': 'Optimizando...',
	'ui.svg_optimizer.source_preview_label': 'Vista previa de origen',
	'ui.svg_optimizer.source_preview_alt': 'Vista previa del SVG original',
	'ui.svg_optimizer.source_preview_placeholder': 'La vista previa del SVG válido aparecerá aquí.',
	'ui.svg_optimizer.output_preview_label': 'Vista previa optimizada',
	'ui.svg_optimizer.output_preview_alt': 'Vista previa del SVG optimizado',
	'ui.svg_optimizer.output_placeholder': 'La salida SVG optimizada aparecerá aquí.'
};

export default registryEs;

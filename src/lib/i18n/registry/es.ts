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

	'category.css.display_name': 'CSS',
	'category.css.description':
		'Formatea, minifica y optimiza hojas de estilo CSS. Embellece CSS comprimido o minifica CSS formateado con opciones de ordenación de propiedades.',
	'category.css.primary_keyword': 'herramientas css',

	'category.html.display_name': 'HTML',
	'category.html.description':
		'Formatea, minifica y valida marcado HTML. Embellece HTML comprimido o elimina espacios en blanco para producción.',
	'category.html.primary_keyword': 'herramientas html',

	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'Formatea y minifica código JavaScript. Embellece scripts comprimidos o genera salida minificada para carga rápida de páginas.',
	'category.js.primary_keyword': 'herramientas javascript',

	'category.encode.display_name': 'Codificadores y Decodificadores',
	'category.encode.description':
		'Codifica y decodifica Base64, URL, entidades HTML y más. Todas las operaciones se ejecutan instantáneamente en tu navegador — no se envían datos a ningún servidor.',
	'category.encode.primary_keyword': 'herramientas codificador decodificador',

	'category.escape.display_name': 'Herramientas de Escape',
	'category.escape.description':
		'Escapa y unescapa cadenas para JSON, HTML, XML, URLs y expresiones regulares. Maneja caracteres especiales de forma segura en todos los formatos.',
	'category.escape.primary_keyword': 'herramientas escape de cadenas',

	'category.diff.display_name': 'Diff y Comparación',
	'category.diff.description':
		'Compara dos archivos o estructuras de datos lado a lado. Resalta adiciones y eliminaciones con soporte para diff de JSON, texto y estructurado.',
	'category.diff.primary_keyword': 'herramientas diff comparación',

	'category.generate.display_name': 'Generadores',
	'category.generate.description':
		'Genera definiciones de tipos, esquemas JSON, tablas Markdown, datos de prueba simulados y otras utilidades para desarrolladores completamente en tu navegador.',
	'category.generate.primary_keyword': 'generadores de código',

	'category.text.display_name': 'Texto y Cadenas',
	'category.text.description':
		'Formatea, manipula, invierte, ordena y analiza texto y cadenas. Incluye contador de palabras, puntuación de legibilidad y conversión de Markdown.',
	'category.text.primary_keyword': 'herramientas de texto',

	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formatea, valida y convierte archivos TOML. Convierte TOML a JSON y YAML de forma segura.',
	'category.toml.primary_keyword': 'herramientas toml',

	'category.number.display_name': 'Números y Matemáticas',
	'category.number.description':
		'Formatea números, calcula porcentajes, usa notación científica y convierte valores instantáneamente entre sistemas numéricos.',
	'category.number.primary_keyword': 'herramientas de números',

	'category.color.display_name': 'Herramientas de Color',
	'category.color.description':
		'Prueba relaciones de contraste, genera paletas de colores, crea gradientes CSS y simula daltonismo.',
	'category.color.primary_keyword': 'herramientas de color',

	'category.crypto.display_name': 'Cripto y Seguridad',
	'category.crypto.description':
		'Genera firmas HMAC, analiza la fuerza de contraseñas, produce cadenas aleatorias seguras y genera ULID — todo del lado del cliente usando la Web Crypto API.',
	'category.crypto.primary_keyword': 'herramientas cripto seguridad',

	'category.web.display_name': 'Web y Red',
	'category.web.description':
		'Analiza URLs, decodifica cadenas de user-agent, inspecciona encabezados CORS, busca tipos MIME, geolocaliza IPs y consulta registros DNS.',
	'category.web.primary_keyword': 'herramientas web en línea',

	'category.code.display_name': 'Formateadores de Código',
	'category.code.description':
		'Formatea CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL y Markdown completamente localmente. Convierte comandos cURL a fetch() o Axios.',
	'category.code.primary_keyword': 'formateador de código en línea',

	'category.pdf.display_name': 'Herramientas PDF',
	'category.pdf.description': 'Ver archivos PDF y extraer texto — todo localmente en tu navegador.',
	'category.pdf.primary_keyword': 'herramientas pdf en línea',

	'category.image.display_name': 'Herramientas de Imagen',
	'category.image.description':
		'Redimensiona, convierte, comprime y codifica imágenes — todo localmente en tu navegador. Sin subidas, sin servidor.',
	'category.image.primary_keyword': 'herramientas de imagen en línea',

	'category.file.display_name': 'Herramientas de Archivo',
	'category.file.description':
		'Calcula hashes de archivos y realiza conversiones de formato dentro de archivos.',
	'category.file.primary_keyword': 'herramientas de archivo en línea',

	'category.qr.display_name': 'Códigos QR y de Barras',
	'category.qr.description':
		'Genera códigos QR personalizables y decodifica códigos QR desde imágenes — todo localmente en tu navegador.',
	'category.qr.primary_keyword': 'generador de códigos qr',

	'category.accessibility.display_name': 'Accesibilidad',
	'category.accessibility.description':
		'Prueba el contraste de color, simula daltonismo y verifica los requisitos de tamaño de fuente WCAG. Asegura que tus diseños sean accesibles para todos.',
	'category.accessibility.primary_keyword': 'herramientas de accesibilidad',

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

	// ── Herramientas de Texto ───────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Contador de Palabras',
	'tool.text-word-counter.tagline': 'Cuenta palabras, caracteres y oraciones en texto',
	'tool.text-word-counter.description':
		'Cuenta palabras, caracteres, oraciones y párrafos en cualquier texto. Muestra estimaciones de tiempo de lectura y longitud promedio de palabras.',
	'tool.text-word-counter.primary_keyword': 'contador palabras',
	'tool.text-word-counter.meta_title': 'Contador de Palabras — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Cuenta palabras, caracteres y oraciones en tu navegador. Incluye estimaciones de tiempo de lectura. No hay datos cargados.',
	'tool.text-word-counter.operation': 'Cuenta',

	'tool.text-readability.display_name': 'Analizador de Legibilidad',
	'tool.text-readability.tagline': 'Mide puntuaciones de legibilidad de texto',
	'tool.text-readability.description':
		'Calcula puntuaciones de legibilidad Flesch-Kincaid, Gunning Fog y otras para cualquier texto. Ayuda a optimizar contenido para tu audiencia objetivo.',
	'tool.text-readability.primary_keyword': 'analizador legibilidad',
	'tool.text-readability.meta_title': 'Analizador de Legibilidad — fmtly.dev',
	'tool.text-readability.meta_description':
		'Mide legibilidad de texto en tu navegador con Flesch-Kincaid y otras puntuaciones. No hay datos cargados.',
	'tool.text-readability.operation': 'Analiza',

	'tool.text-line-sorter.display_name': 'Ordenador de Líneas',
	'tool.text-line-sorter.tagline': 'Ordena líneas de texto alfabéticamente o por longitud',
	'tool.text-line-sorter.description':
		'Ordena líneas alfabéticamente, numéricamente o por longitud. Soporta orden ascendente y descendente y ordenamiento case-insensitive.',
	'tool.text-line-sorter.primary_keyword': 'ordenador líneas',
	'tool.text-line-sorter.meta_title': 'Ordenador de Líneas — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Ordena líneas de texto en tu navegador. Soporta ordenamiento alfabético, numérico y por longitud. No hay datos cargados.',
	'tool.text-line-sorter.operation': 'Ordena',

	'tool.text-deduplicate.display_name': 'Removedor de Líneas Duplicadas',
	'tool.text-deduplicate.tagline': 'Elimina líneas duplicadas de texto',
	'tool.text-deduplicate.description':
		'Elimina líneas duplicadas de cualquier texto. Soporta coincidencia case-sensitive e case-insensitive y preserva el orden original de líneas.',
	'tool.text-deduplicate.primary_keyword': 'eliminar líneas duplicadas',
	'tool.text-deduplicate.meta_title': 'Removedor de Líneas Duplicadas — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Elimina líneas duplicadas de texto en tu navegador. Opciones case-sensitive e insensitive. No hay datos cargados.',
	'tool.text-deduplicate.operation': 'Deduplicar',

	'tool.text-whitespace.display_name': 'Limpiador de Espacios en Blanco',
	'tool.text-whitespace.tagline': 'Elimina espacios en blanco extras y normaliza espacios',
	'tool.text-whitespace.description':
		'Elimina espacios extras, tabulaciones y líneas en blanco de texto. Normaliza múltiples espacios a espacios únicos y recorta espacios en blanco al inicio y final.',
	'tool.text-whitespace.primary_keyword': 'limpiador espacios en blanco',
	'tool.text-whitespace.meta_title': 'Limpiador de Espacios en Blanco — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Elimina espacios en blanco extras de texto en tu navegador. Normaliza espacios y recorta líneas. No hay datos cargados.',
	'tool.text-whitespace.operation': 'Limpia',

	'tool.text-markdown-to-html.display_name': 'Markdown a HTML',
	'tool.text-markdown-to-html.tagline': 'Convierte Markdown a HTML',
	'tool.text-markdown-to-html.description':
		'Convierte texto Markdown a HTML. Soporta encabezados, listas, tablas, bloques de código, enlaces, imágenes y todas las características CommonMark.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown a html',
	'tool.text-markdown-to-html.meta_title': 'Convertidor Markdown a HTML — fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Convierte Markdown a HTML instantáneamente en tu navegador. Soporta todas las características CommonMark. No hay datos cargados.',
	'tool.text-markdown-to-html.operation': 'Convierte',

	'tool.text-html-to-markdown.display_name': 'HTML a Markdown',
	'tool.text-html-to-markdown.tagline': 'Convierte HTML a Markdown',
	'tool.text-html-to-markdown.description':
		'Convierte HTML a Markdown limpio. Maneja encabezados, párrafos, listas, tablas, bloques de código y formato inline.',
	'tool.text-html-to-markdown.primary_keyword': 'html a markdown',
	'tool.text-html-to-markdown.meta_title': 'Convertidor HTML a Markdown — fmtly.dev',
	'tool.text-html-to-markdown.meta_description':
		'Convierte HTML a Markdown instantáneamente en tu navegador. No hay datos cargados.',
	'tool.text-html-to-markdown.operation': 'Convierte',

	'tool.text-reverser.display_name': 'Inversor de Texto',
	'tool.text-reverser.tagline': 'Invierte texto, palabras o líneas',
	'tool.text-reverser.description':
		'Invierte texto carácter por carácter, palabra por palabra o línea por línea. Bidireccional: pega en cualquier dirección.',
	'tool.text-reverser.primary_keyword': 'inversor texto',
	'tool.text-reverser.meta_title': 'Inversor de Texto — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Invierte texto instantáneamente en tu navegador. Invierte caracteres, palabras o líneas. No hay datos cargados.',
	'tool.text-reverser.operation': 'Invierte',

	// ── Herramientas de Código ──────────────────────────────────────────────
	'tool.code-css.display_name': 'Formateador CSS',
	'tool.code-css.tagline': 'Formatea y embellece hojas de estilo CSS',
	'tool.code-css.description':
		'Formatea CSS con indentación consistente y ordenamiento de propiedades. Soporta formato estilo Prettier con ancho de línea configurable.',
	'tool.code-css.primary_keyword': 'formateador css',
	'tool.code-css.meta_title': 'Formateador y Embellecedor CSS — fmtly.dev',
	'tool.code-css.meta_description':
		'Formatea y embellece CSS en tu navegador. Indentación configurable y ordenamiento de propiedades. No hay datos que dejen tu dispositivo.',
	'tool.code-css.operation': 'Formatea',

	'tool.code-scss.display_name': 'Formateador SCSS',
	'tool.code-scss.tagline': 'Formatea y embellece hojas de estilo SCSS',
	'tool.code-scss.description':
		'Formatea archivos SCSS con indentación consistente. Soporta variables, reglas anidadas, mixins y toda la sintaxis específica de SCSS.',
	'tool.code-scss.primary_keyword': 'formateador scss',
	'tool.code-scss.meta_title': 'Formateador y Embellecedor SCSS — fmtly.dev',
	'tool.code-scss.meta_description':
		'Formatea y embellece SCSS en tu navegador. No hay datos que dejen tu dispositivo.',
	'tool.code-scss.operation': 'Formatea',

	'tool.code-less.display_name': 'Formateador LESS',
	'tool.code-less.tagline': 'Formatea y embellece hojas de estilo LESS',
	'tool.code-less.description':
		'Formatea archivos LESS con indentación consistente. Soporta variables, mixins, anidamiento y toda la sintaxis específica de LESS.',
	'tool.code-less.primary_keyword': 'formateador less',
	'tool.code-less.meta_title': 'Formateador y Embellecedor LESS — fmtly.dev',
	'tool.code-less.meta_description':
		'Formatea y embellece LESS en tu navegador. No hay datos que dejen tu dispositivo.',
	'tool.code-less.operation': 'Formatea',

	'tool.code-html.display_name': 'Formateador HTML',
	'tool.code-html.tagline': 'Formatea y embellece marcado HTML',
	'tool.code-html.description':
		'Formatea HTML con indentación adecuada y anidamiento de tags. Maneja elementos inline y block, atributos y CSS y JavaScript embebidos.',
	'tool.code-html.primary_keyword': 'formateador html',
	'tool.code-html.meta_title': 'Formateador y Embellecedor HTML — fmtly.dev',
	'tool.code-html.meta_description':
		'Formatea y embellece HTML en tu navegador. Indentación adecuada y anidamiento de tags. No hay datos que dejen tu dispositivo.',
	'tool.code-html.operation': 'Formatea',

	'tool.code-javascript.display_name': 'Formateador JavaScript',
	'tool.code-javascript.tagline': 'Formatea y embellece código JavaScript',
	'tool.code-javascript.description':
		'Formatea JavaScript con formato estilo Prettier. Soporta ES2022+, JSX, sintaxis de módulos y opciones configurables como puntos y comas y comillas simples.',
	'tool.code-javascript.primary_keyword': 'formateador javascript',
	'tool.code-javascript.meta_title': 'Formateador y Embellecedor JavaScript — fmtly.dev',
	'tool.code-javascript.meta_description':
		'Formatea y embellece JavaScript en tu navegador. Soporta sintaxis ES moderna. No hay datos que dejen tu dispositivo.',
	'tool.code-javascript.operation': 'Formatea',

	'tool.code-typescript.display_name': 'Formateador TypeScript',
	'tool.code-typescript.tagline': 'Formatea y embellece código TypeScript',
	'tool.code-typescript.description':
		'Formatea TypeScript con formato estilo Prettier. Soporta todas las características TypeScript incluyendo generics, decoradores y anotaciones de tipo.',
	'tool.code-typescript.primary_keyword': 'formateador typescript',
	'tool.code-typescript.meta_title': 'Formateador y Embellecedor TypeScript — fmtly.dev',
	'tool.code-typescript.meta_description':
		'Formatea y embellece TypeScript en tu navegador. Soporta toda la sintaxis TypeScript. No hay datos que dejen tu dispositivo.',
	'tool.code-typescript.operation': 'Formatea',

	'tool.code-graphql.display_name': 'Formateador GraphQL',
	'tool.code-graphql.tagline': 'Formatea y embellece esquemas y consultas GraphQL',
	'tool.code-graphql.description':
		'Formatea esquemas y consultas GraphQL con indentación consistente. Soporta SDL, consultas, mutaciones, suscripciones y fragmentos.',
	'tool.code-graphql.primary_keyword': 'formateador graphql',
	'tool.code-graphql.meta_title': 'Formateador y Embellecedor GraphQL — fmtly.dev',
	'tool.code-graphql.meta_description':
		'Formatea y embellece GraphQL en tu navegador. Soporta SDL, consultas y mutaciones. No hay datos que dejen tu dispositivo.',
	'tool.code-graphql.operation': 'Formatea',

	'tool.code-markdown.display_name': 'Formateador Markdown',
	'tool.code-markdown.tagline': 'Formatea y normaliza documentos Markdown',
	'tool.code-markdown.description':
		'Formatea Markdown con estilos de encabezado consistentes, indentación de listas y alineación de tablas. Normaliza espacios en blanco y líneas en blanco.',
	'tool.code-markdown.primary_keyword': 'formateador markdown',
	'tool.code-markdown.meta_title': 'Formateador Markdown — fmtly.dev',
	'tool.code-markdown.meta_description':
		'Formatea y normaliza Markdown en tu navegador. No hay datos que dejen tu dispositivo.',
	'tool.code-markdown.operation': 'Formatea',

	'tool.code-curl-to-fetch.display_name': 'cURL a Fetch',
	'tool.code-curl-to-fetch.tagline': 'Convierte comandos cURL a JavaScript fetch()',
	'tool.code-curl-to-fetch.description':
		'Convierte comandos cURL a llamadas nativas JavaScript fetch(). Maneja headers, cuerpo de solicitud, autenticación y todas las opciones comunes de cURL.',
	'tool.code-curl-to-fetch.primary_keyword': 'convertidor curl a fetch',
	'tool.code-curl-to-fetch.meta_title': 'Convertidor cURL a Fetch — fmtly.dev',
	'tool.code-curl-to-fetch.meta_description':
		'Convierte comandos cURL a JavaScript fetch() en tu navegador. Maneja headers, cuerpo y autenticación. No hay datos cargados.',
	'tool.code-curl-to-fetch.operation': 'Convierte',

	'tool.code-curl-to-axios.display_name': 'cURL a Axios',
	'tool.code-curl-to-axios.tagline': 'Convierte comandos cURL a solicitudes Axios',
	'tool.code-curl-to-axios.description':
		'Convierte comandos cURL a llamadas de solicitud Axios. Maneja headers, cuerpo de solicitud, autenticación y todas las opciones comunes de cURL.',
	'tool.code-curl-to-axios.primary_keyword': 'convertidor curl a axios',
	'tool.code-curl-to-axios.meta_title': 'Convertidor cURL a Axios — fmtly.dev',
	'tool.code-curl-to-axios.meta_description':
		'Convierte comandos cURL a solicitudes Axios en tu navegador. Maneja headers, cuerpo y autenticación. No hay datos cargados.',
	'tool.code-curl-to-axios.operation': 'Convierte',

	// ── Herramientas de Color ───────────────────────────────────────────────
	'tool.color-converter.display_name': 'Convertidor de Color',
	'tool.color-converter.tagline': 'Convierte colores entre HEX, RGB, HSL y más',
	'tool.color-converter.description':
		'Convierte colores entre HEX, RGB, RGBA, HSL, HSLA y formatos de color CSS nombrados. Muestra una vista previa en vivo del color seleccionado.',
	'tool.color-converter.primary_keyword': 'convertidor color',
	'tool.color-converter.meta_title': 'Convertidor de Color — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Convierte colores entre HEX, RGB, HSL y colores CSS nombrados en tu navegador. Vista previa en vivo incluida.',
	'tool.color-converter.operation': 'Convierte',

	'tool.color-contrast.display_name': 'Verificador de Contraste de Color',
	'tool.color-contrast.tagline': 'Verifica ratio de contraste WCAG entre dos colores',
	'tool.color-contrast.description':
		'Calcula el ratio de contraste entre dos colores y verifica cumplimiento de accesibilidad WCAG 2.1 AA y AAA para texto normal y grande.',
	'tool.color-contrast.primary_keyword': 'verificador contraste color',
	'tool.color-contrast.meta_title': 'Verificador de Contraste de Color — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Verifica ratio de contraste de color para cumplimiento WCAG AA y AAA en tu navegador.',
	'tool.color-contrast.operation': 'Verifica',

	// ── Herramientas de Cripto ──────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'Generador HMAC',
	'tool.crypto-hmac.tagline': 'Genera firmas HMAC con algoritmos SHA',
	'tool.crypto-hmac.description':
		'Genera firmas HMAC usando SHA-256, SHA-384 o SHA-512. Devuelve firmas codificadas en hex o Base64 usando la Web Crypto API.',
	'tool.crypto-hmac.primary_keyword': 'generador hmac',
	'tool.crypto-hmac.meta_title': 'Generador HMAC — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		'Genera firmas HMAC en tu navegador usando la Web Crypto API. Soporta SHA-256, SHA-384 y SHA-512.',
	'tool.crypto-hmac.operation': 'Genera',

	'tool.crypto-password-strength.display_name': 'Verificador de Fortaleza de Contraseña',
	'tool.crypto-password-strength.tagline': 'Analiza fortaleza y entropía de contraseña',
	'tool.crypto-password-strength.description':
		'Evalúa fortaleza de contraseña con cálculo de entropía, detección de patrones y tiempo de grieta estimado. No hay datos nunca enviados a ningún servidor.',
	'tool.crypto-password-strength.primary_keyword': 'verificador fortaleza contraseña',
	'tool.crypto-password-strength.meta_title': 'Verificador de Fortaleza de Contraseña — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		'Verifica fortaleza y entropía de contraseña en tu navegador. Ninguna contraseña es jamás transmitida. 100% del lado del cliente.',
	'tool.crypto-password-strength.operation': 'Analiza',

	'tool.crypto-ulid.display_name': 'Generador ULID',
	'tool.crypto-ulid.tagline': 'Genera Identificadores Universales Únicos Léxicamente Ordenables',
	'tool.crypto-ulid.description':
		'Genera ULIDs: identificadores ordenados por tiempo, seguros para URL, ordenables y resistentes a colisiones. Usa la Web Crypto API para aleatoriedad criptográfica.',
	'tool.crypto-ulid.primary_keyword': 'generador ulid',
	'tool.crypto-ulid.meta_title': 'Generador ULID — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		'Genera ULIDs en tu navegador usando la Web Crypto API. Identificadores ordenables y seguros para URL.',
	'tool.crypto-ulid.operation': 'Genera',

	'tool.crypto-random-string.display_name': 'Generador de String Aleatorio',
	'tool.crypto-random-string.tagline': 'Genera strings aleatorios criptográficamente seguros',
	'tool.crypto-random-string.description':
		'Genera strings aleatorios criptográficamente seguros con longitud y conjuntos de caracteres configurables. Usa la Web Crypto API para aleatoriedad verdadera.',
	'tool.crypto-random-string.primary_keyword': 'generador string aleatorio',
	'tool.crypto-random-string.meta_title': 'Generador de String Aleatorio — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		'Genera strings aleatorios seguros en tu navegador usando la Web Crypto API. Longitud y conjuntos de caracteres configurables.',
	'tool.crypto-random-string.operation': 'Genera',

	// ── Herramientas de Diff ────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Diff de Texto',
	'tool.diff-text.tagline': 'Compara dos bloques de texto y resalta diferencias',
	'tool.diff-text.description':
		'Compara dos bloques de texto lado a lado y resalta líneas añadidas, eliminadas e inalteradas. Soporta modos de diff a nivel de palabra y a nivel de línea.',
	'tool.diff-text.primary_keyword': 'diff texto',
	'tool.diff-text.meta_title': 'Herramienta de Diff de Texto — fmtly.dev',
	'tool.diff-text.meta_description':
		'Compara dos bloques de texto en tu navegador. Resalta adiciones y eliminaciones a nivel de palabra o línea. No hay datos cargados.',
	'tool.diff-text.operation': 'Compara',

	// ── Herramientas de Codificación ────────────────────────────────────────
	'tool.encode-base64.display_name': 'Codificador / Decodificador Base64',
	'tool.encode-base64.tagline': 'Codifica y decodifica strings Base64',
	'tool.encode-base64.description':
		'Codifica texto o datos binarios a Base64 y decodifica strings Base64 de vuelta a texto. Soporta variantes Base64 estándar y seguro para URL.',
	'tool.encode-base64.primary_keyword': 'codificador decodificador base64',
	'tool.encode-base64.meta_title': 'Codificador y Decodificador Base64 — fmtly.dev',
	'tool.encode-base64.meta_description':
		'Codifica y decodifica Base64 en tu navegador. Soporta variantes estándar y seguro para URL. No hay datos cargados.',
	'tool.encode-base64.operation': 'Codifica / Decodifica',

	'tool.encode-url.display_name': 'Codificador / Decodificador de URL',
	'tool.encode-url.tagline': 'Codifica y decodifica strings codificados en URL',
	'tool.encode-url.description':
		'Codifica por porcentaje URLs y componentes de URL o decodifica strings codificados por porcentaje. Maneja todos los caracteres reservados y especiales según RFC 3986.',
	'tool.encode-url.primary_keyword': 'codificador decodificador url',
	'tool.encode-url.meta_title': 'Codificador y Decodificador de URL — fmtly.dev',
	'tool.encode-url.meta_description':
		'Codifica y decodifica URLs en tu navegador. Maneja todos los caracteres especiales. No hay datos cargados.',
	'tool.encode-url.operation': 'Codifica / Decodifica',

	'tool.encode-html.display_name': 'Codificador / Decodificador HTML',
	'tool.encode-html.tagline': 'Codifica y decodifica entidades HTML',
	'tool.encode-html.description':
		'Convierte caracteres especiales a entidades HTML y de vuelta. Maneja &amp;, &lt;, &gt;, &quot; y todos los otros caracteres especiales de HTML.',
	'tool.encode-html.primary_keyword': 'codificador decodificador html',
	'tool.encode-html.meta_title': 'Codificador y Decodificador HTML — fmtly.dev',
	'tool.encode-html.meta_description':
		'Codifica y decodifica entidades HTML en tu navegador. No hay datos cargados.',
	'tool.encode-html.operation': 'Codifica / Decodifica',

	'tool.encode-html-entities.display_name': 'Referencia de Entidades HTML',
	'tool.encode-html-entities.tagline': 'Examina y busca códigos de entidades HTML',
	'tool.encode-html-entities.description':
		'Busca y examina todas las entidades HTML con sus formas decimal, hexadecimal y nombrada. Incluye puntos de código Unicode y vistas previas visuales.',
	'tool.encode-html-entities.primary_keyword': 'referencia entidades html',
	'tool.encode-html-entities.meta_title': 'Referencia de Entidades HTML — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Examina todas las entidades HTML en tu navegador. Busca por nombre, decimal o código hex.',
	'tool.encode-html-entities.operation': 'Busca',

	'tool.encode-unicode.display_name': 'Analizador Unicode',
	'tool.encode-unicode.tagline': 'Analiza puntos de código Unicode en texto',
	'tool.encode-unicode.description':
		'Decodifica cualquier texto en sus puntos de código Unicode con representaciones hex, escape CSS, escape JavaScript y bytes UTF-8. Maneja emoji y secuencias multi-codepoint.',
	'tool.encode-unicode.primary_keyword': 'analizador unicode',
	'tool.encode-unicode.meta_title': 'Analizador Unicode — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Analiza puntos de código Unicode en tu navegador. Inspecciona hex, escapes CSS, escapes JS y bytes UTF-8.',
	'tool.encode-unicode.operation': 'Analiza',

	// ── Herramientas de Escape ──────────────────────────────────────────────
	'tool.escape-json.display_name': 'Escape de String JSON',
	'tool.escape-json.tagline': 'Escapa y desescapa strings JSON',
	'tool.escape-json.description':
		'Escapa caracteres especiales en strings para usar dentro de valores JSON, o desescapa valores de string JSON de vuelta a texto plano. Maneja saltos de línea, tabulaciones, comillas y backslashes.',
	'tool.escape-json.primary_keyword': 'escape desescapa json',
	'tool.escape-json.meta_title': 'Escape y Desescapa de String JSON — fmtly.dev',
	'tool.escape-json.meta_description':
		'Escapa y desescapa strings JSON en tu navegador. No hay datos cargados.',
	'tool.escape-json.operation': 'Escapa / Desescapa',

	// ── Herramientas de Archivo ────────────────────────────────────────────
	'tool.file-hash.display_name': 'Calculador de Hash de Archivo',
	'tool.file-hash.tagline': 'Calcula hashes de archivo MD5, SHA-1, SHA-256 y SHA-512',
	'tool.file-hash.description':
		'Calcula valores de hash criptográfico para cualquier archivo. Soporta algoritmos MD5, SHA-1, SHA-256 y SHA-512. Se ejecuta completamente en tu navegador.',
	'tool.file-hash.primary_keyword': 'calculador hash archivo',
	'tool.file-hash.meta_title': 'Calculador de Hash de Archivo — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		'Calcula hashes de archivo en tu navegador. Soporta MD5, SHA-1, SHA-256 y SHA-512. Ningún archivo es cargado a ningún servidor.',
	'tool.file-hash.operation': 'Calcula Hash',

	// ── Herramientas de Generación ──────────────────────────────────────────
	'tool.generate-uuid.display_name': 'Generador UUID',
	'tool.generate-uuid.tagline': 'Genera UUIDs aleatorios (v4)',
	'tool.generate-uuid.description':
		'Genera UUIDs versión 4 conformes a RFC 4122 usando la Web Crypto API. Genera UUIDs individuales o en lote con un clic.',
	'tool.generate-uuid.primary_keyword': 'generador uuid',
	'tool.generate-uuid.meta_title': 'Generador UUID — fmtly.dev',
	'tool.generate-uuid.meta_description':
		'Genera UUIDs aleatorios en tu navegador usando la Web Crypto API. Conforme a RFC 4122 v4.',
	'tool.generate-uuid.operation': 'Genera',

	// ── Herramientas de Imagen ──────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Compresor de Imagen',
	'tool.image-compressor.tagline': 'Comprime imágenes sin pérdida de calidad',
	'tool.image-compressor.description':
		'Comprime imágenes JPEG, PNG y WebP en tu navegador. Ajusta configuraciones de calidad y visualiza antes de descargar. No hay imágenes cargadas.',
	'tool.image-compressor.primary_keyword': 'compresor imagen',
	'tool.image-compressor.meta_title': 'Compresor de Imagen — fmtly.dev',
	'tool.image-compressor.meta_description':
		'Comprime imágenes en tu navegador. Soporta JPEG, PNG y WebP. No hay imágenes cargadas a ningún servidor.',
	'tool.image-compressor.operation': 'Comprime',

	// ── Herramientas de Números ────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Formateador de Números',
	'tool.number-formatter.tagline': 'Formatea números con separadores específicos de locale',
	'tool.number-formatter.description':
		'Formatea números con separadores de miles, decimales y notación específica de locale. Soporta formato de moneda y notación científica.',
	'tool.number-formatter.primary_keyword': 'formateador números',
	'tool.number-formatter.meta_title': 'Formateador de Números — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Formatea números con separadores de locale y símbolos de moneda en tu navegador.',
	'tool.number-formatter.operation': 'Formatea',

	'tool.number-roman.display_name': 'Convertidor de Numeral Romano',
	'tool.number-roman.tagline': 'Convierte entre numerales romanos e integers',
	'tool.number-roman.description':
		'Convierte integers a numerales romanos y de vuelta. Soporta números del 1 al 3999 con notación estándar de numerales romanos.',
	'tool.number-roman.primary_keyword': 'convertidor numeral romano',
	'tool.number-roman.meta_title': 'Convertidor de Numeral Romano — fmtly.dev',
	'tool.number-roman.meta_description':
		'Convierte entre numerales romanos e integers en tu navegador.',
	'tool.number-roman.operation': 'Convierte',

	'tool.number-percentage.display_name': 'Calculador de Porcentaje',
	'tool.number-percentage.tagline': 'Calcula porcentajes, aumentos y disminuciones',
	'tool.number-percentage.description':
		'Calcula valores de porcentaje, cambio de porcentaje y porcentaje de totales. Soporta cálculos de aumento/disminución y búsquedas de porcentaje inverso.',
	'tool.number-percentage.primary_keyword': 'calculador porcentaje',
	'tool.number-percentage.meta_title': 'Calculador de Porcentaje — fmtly.dev',
	'tool.number-percentage.meta_description':
		'Calcula porcentajes y cambio de porcentaje en tu navegador.',
	'tool.number-percentage.operation': 'Calcula',

	'tool.number-scientific.display_name': 'Convertidor de Notación Científica',
	'tool.number-scientific.tagline': 'Convierte números a y desde notación científica',
	'tool.number-scientific.description':
		'Convierte números a notación científica y de vuelta. Muestra mantisa, exponente y notación de ingeniería equivalente.',
	'tool.number-scientific.primary_keyword': 'convertidor notación científica',
	'tool.number-scientific.meta_title': 'Convertidor de Notación Científica — fmtly.dev',
	'tool.number-scientific.meta_description':
		'Convierte números a notación científica en tu navegador.',
	'tool.number-scientific.operation': 'Convierte',

	'tool.number-statistics.display_name': 'Calculador de Estadísticas',
	'tool.number-statistics.tagline': 'Calcula media, mediana, moda y más',
	'tool.number-statistics.description':
		'Calcula estadísticas descriptivas para una lista de números: media, mediana, moda, desviación estándar, varianza, min, max y cuartiles.',
	'tool.number-statistics.primary_keyword': 'calculador estadísticas',
	'tool.number-statistics.meta_title': 'Calculador de Estadísticas — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Calcula media, mediana, desviación estándar y más en tu navegador.',
	'tool.number-statistics.operation': 'Calcula',

	'tool.number-matrix.display_name': 'Calculador de Matrices',
	'tool.number-matrix.tagline': 'Realiza operaciones y cálculos de matrices',
	'tool.number-matrix.description':
		'Realiza operaciones de matrices incluyendo suma, resta, multiplicación, transpuesta, determinante e inversa en matrices de cualquier tamaño.',
	'tool.number-matrix.primary_keyword': 'calculador matrices',
	'tool.number-matrix.meta_title': 'Calculador de Matrices — fmtly.dev',
	'tool.number-matrix.meta_description':
		'Realiza operaciones de matrices en tu navegador. Soporta suma, multiplicación, inversa y más.',
	'tool.number-matrix.operation': 'Calcula',

	'tool.number-unit-converter.display_name': 'Convertidor de Unidades',
	'tool.number-unit-converter.tagline': 'Convierte entre unidades de medida',
	'tool.number-unit-converter.description':
		'Convierte entre unidades de longitud, peso, temperatura, volumen, área, velocidad y más. Soporta sistemas métrico e imperial.',
	'tool.number-unit-converter.primary_keyword': 'convertidor unidades',
	'tool.number-unit-converter.meta_title': 'Convertidor de Unidades — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Convierte entre unidades de medida en tu navegador. Soporta longitud, peso, temperatura y más.',
	'tool.number-unit-converter.operation': 'Convierte',

	// ── Herramientas PDF ────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'Visualizador PDF',
	'tool.pdf-viewer.tagline': 'Visualiza y extrae texto de archivos PDF',
	'tool.pdf-viewer.description':
		'Visualiza archivos PDF en tu navegador y extrae contenido de texto. Soporta PDFs multi-página y selección de texto. No hay archivos cargados a ningún servidor.',
	'tool.pdf-viewer.primary_keyword': 'visualizador pdf',
	'tool.pdf-viewer.meta_title': 'Visualizador PDF — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'Visualiza archivos PDF en tu navegador. Extrae texto de cualquier PDF. No hay archivos cargados.',
	'tool.pdf-viewer.operation': 'Visualiza',

	// ── Herramientas QR ─────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'Generador de Código QR',
	'tool.qr-generator.tagline': 'Genera códigos QR personalizables',
	'tool.qr-generator.description':
		'Genera códigos QR desde texto, URLs, información de contacto y más. Personaliza tamaño, nivel de corrección de error y colores. Descarga como PNG o SVG.',
	'tool.qr-generator.primary_keyword': 'generador código qr',
	'tool.qr-generator.meta_title': 'Generador de Código QR — fmtly.dev',
	'tool.qr-generator.meta_description':
		'Genera códigos QR personalizables en tu navegador. Descarga como PNG o SVG.',
	'tool.qr-generator.operation': 'Genera',

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

	// ── Herramientas Web ────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'Analizador de URL',
	'tool.web-url-parser.tagline': 'Analiza e inspecciona componentes de URL',
	'tool.web-url-parser.description':
		'Desglosa URLs en sus componentes: protocolo, host, puerto, ruta, parámetros de consulta y fragmento. Analiza e inspecciona cualquier URL.',
	'tool.web-url-parser.primary_keyword': 'analizador url',
	'tool.web-url-parser.meta_title': 'Analizador de URL — fmtly.dev',
	'tool.web-url-parser.meta_description':
		'Analiza e inspecciona componentes de URL en tu navegador. Desglosa cualquier URL en sus partes.',
	'tool.web-url-parser.operation': 'Analiza',

	'tool.web-user-agent.display_name': 'Analizador de User-Agent',
	'tool.web-user-agent.tagline': 'Analiza y decodifica strings User-Agent',
	'tool.web-user-agent.description':
		'Analiza strings User-Agent para identificar navegador, motor, SO y tipo de dispositivo. Soporta formatos de navegador moderno y heredado.',
	'tool.web-user-agent.primary_keyword': 'analizador user agent',
	'tool.web-user-agent.meta_title': 'Analizador de User-Agent — fmtly.dev',
	'tool.web-user-agent.meta_description':
		'Analiza strings User-Agent en tu navegador. Identifica navegador, SO y dispositivo.',
	'tool.web-user-agent.operation': 'Analiza',

	'tool.web-cors.display_name': 'Verificador de Headers CORS',
	'tool.web-cors.tagline': 'Inspecciona y entiende headers CORS',
	'tool.web-cors.description':
		'Busca y explica headers CORS. Entiende Access-Control-Allow-Origin, credenciales, preflight y otras directivas CORS.',
	'tool.web-cors.primary_keyword': 'verificador header cors',
	'tool.web-cors.meta_title': 'Verificador de Headers CORS — fmtly.dev',
	'tool.web-cors.meta_description':
		'Inspecciona headers CORS en tu navegador. Entiende todas las directivas Access-Control.',
	'tool.web-cors.operation': 'Verifica',

	'tool.web-mime-types.display_name': 'Búsqueda de Tipo MIME',
	'tool.web-mime-types.tagline': 'Busca tipos MIME por extensión o nombre',
	'tool.web-mime-types.description':
		'Busca tipos MIME por extensión de archivo, nombre o tipo de contenido. Cubre todos los tipos MIME registrados en IANA con ejemplos.',
	'tool.web-mime-types.primary_keyword': 'búsqueda tipo mime',
	'tool.web-mime-types.meta_title': 'Búsqueda de Tipo MIME — fmtly.dev',
	'tool.web-mime-types.meta_description':
		'Busca tipos MIME por extensión de archivo en tu navegador.',
	'tool.web-mime-types.operation': 'Busca',

	'tool.web-ip-lookup.display_name': 'Búsqueda de IP',
	'tool.web-ip-lookup.tagline': 'Busca información de geolocalización para direcciones IP',
	'tool.web-ip-lookup.description':
		'Busca información de geolocalización, ASN e ISP para cualquier dirección IP. Soporta direcciones IPv4 e IPv6.',
	'tool.web-ip-lookup.primary_keyword': 'búsqueda ip',
	'tool.web-ip-lookup.meta_title': 'Búsqueda de IP — fmtly.dev',
	'tool.web-ip-lookup.meta_description':
		'Busca información de geolocalización de dirección IP e ISP en tu navegador.',
	'tool.web-ip-lookup.operation': 'Busca',

	'tool.web-dns-lookup.display_name': 'Búsqueda DNS',
	'tool.web-dns-lookup.tagline': 'Consulta registros DNS para cualquier dominio',
	'tool.web-dns-lookup.description':
		'Consulta tipos de registros DNS A, AAAA, MX, TXT, CNAME, NS y otros para cualquier dominio. Usa DNS sobre HTTPS del navegador.',
	'tool.web-dns-lookup.primary_keyword': 'búsqueda dns',
	'tool.web-dns-lookup.meta_title': 'Búsqueda DNS — fmtly.dev',
	'tool.web-dns-lookup.meta_description':
		'Consulta registros DNS para cualquier dominio en tu navegador.',
	'tool.web-dns-lookup.operation': 'Busca',

	// ── Herramientas de Accesibilidad ───────────────────────────────────────
	'tool.accessibility-contrast.display_name': 'Verificador de Contraste',
	'tool.accessibility-contrast.tagline':
		'Verifica ratios de contraste WCAG para colores de texto y fondo',
	'tool.accessibility-contrast.description':
		'Ingresa colores de primer plano y fondo para calcular ratio de contraste. Verifica cumplimiento WCAG AA/AAA para texto normal, texto grande y elementos de UI. Vista previa en vivo incluida.',
	'tool.accessibility-contrast.primary_keyword': 'verificador contraste wcag',
	'tool.accessibility-contrast.meta_title': 'Verificador de Contraste WCAG — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'Verifica ratios de contraste de color WCAG en tu navegador. Vista previa en vivo, cumplimiento AA/AAA. No hay datos que dejen tu dispositivo.',
	'tool.accessibility-contrast.operation': 'Verifica',
	'tool.accessibility-contrast.faq.0.question': '¿Qué ratio de contraste es requerido?',
	'tool.accessibility-contrast.faq.0.answer':
		'WCAG AA requiere 4.5:1 para texto normal y 3:1 para texto grande. AAA requiere 7:1 y 4.5:1 respectivamente.',
	'tool.accessibility-contrast.use_case.0': 'Verificar accesibilidad de texto de sitio web',
	'tool.accessibility-contrast.use_case.1': 'Elegir combinaciones de colores accesibles',

	'tool.accessibility-color-blindness.display_name': 'Simulador de Daltonismo',
	'tool.accessibility-color-blindness.tagline':
		'Simula cómo los colores aparecen a personas con deficiencias de visión de color',
	'tool.accessibility-color-blindness.description':
		'Ingresa un color o carga una imagen para ver cómo aparece a personas con protanopia, deuteranopia, tritanopia y acromatopsia. Usa matrices de transformación de color.',
	'tool.accessibility-color-blindness.primary_keyword': 'simulador daltonismo',
	'tool.accessibility-color-blindness.meta_title': 'Simulador de Daltonismo — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description':
		'Simula visión protanopia, deuteranopia, tritanopia en tu navegador. Prueba colores e imágenes. No hay datos cargados.',
	'tool.accessibility-color-blindness.operation': 'Simula',
	'tool.accessibility-color-blindness.faq.0.question': '¿Qué tipos de daltonismo son simulados?',
	'tool.accessibility-color-blindness.faq.0.answer':
		'Protanopia (sin rojo), deuteranopia (sin verde), tritanopia (sin azul) y acromatopsia (sin color).',
	'tool.accessibility-color-blindness.use_case.0':
		'Probar diseños de UI para accesibilidad de daltonismo',
	'tool.accessibility-color-blindness.use_case.1': 'Verificar inclusividad de paleta de colores',

	'tool.accessibility-font-size.display_name': 'Verificador de Tamaño de Fuente',
	'tool.accessibility-font-size.tagline':
		'Verifica si el texto cumple con requisitos de tamaño y contraste WCAG',
	'tool.accessibility-font-size.description':
		'Ingresa tamaño de fuente, peso y colores para obtener un informe WCAG combinado. Verifica si el texto califica como "texto grande" y qué ratio de contraste se requiere.',
	'tool.accessibility-font-size.primary_keyword': 'verificador tamaño fuente wcag',
	'tool.accessibility-font-size.meta_title': 'Verificador de Tamaño de Fuente WCAG — fmtly.dev',
	'tool.accessibility-font-size.meta_description':
		'Verifica requisitos de tamaño de fuente WCAG en tu navegador. Clasificación de texto grande, requisitos de contraste. No hay datos cargados.',
	'tool.accessibility-font-size.operation': 'Verifica',
	'tool.accessibility-font-size.faq.0.question': '¿Qué es texto grande en WCAG?',
	'tool.accessibility-font-size.faq.0.answer':
		'Texto ≥18pt (24px) o ≥14pt (18.66px) en negrita se considera texto grande, requiriendo ratios de contraste más bajos.',
	'tool.accessibility-font-size.use_case.0': 'Verificar accesibilidad de estilo de texto',
	'tool.accessibility-font-size.use_case.1':
		'Determinar requisitos WCAG para diferentes tamaños de fuente',

	// ── Strings de UI ───────────────────────────────────────────────────────
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
	'tool.output_placeholder': 'La salida aparecerá aquí',
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
	'ui.json_viewer.toast_copy_path': 'Copiado',
	'ui.tree.toast_copy_path': 'Copiado',
	'ui.tree.toast.copied_path': 'Copiado',
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
	'ui.validator.csv_error.duplicate_header':
		'Se encontró un encabezado duplicado "{value}"',
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

	'tool.crypto-hmac.faq.0.question': '¿Qué es HMAC?',
	'tool.crypto-hmac.faq.0.answer':
		'HMAC (Código de Autenticación de Mensaje Basado en Hash) es un tipo específico de código de autenticación de mensaje que usa una función de hash criptográfico y una clave secreta. Proporciona tanto integridad de datos como autenticación.',
	'tool.crypto-hmac.faq.1.question': '¿Qué algoritmos están soportados?',
	'tool.crypto-hmac.faq.1.answer':
		'Esta herramienta soporta múltiples algoritmos HMAC incluyendo SHA-256, SHA-512, SHA-1, MD5 y más. SHA-256 se recomienda para la mayoría de aplicaciones modernas ya que proporciona un buen balance de seguridad y rendimiento.',
	'tool.crypto-hmac.use_case.0': 'Verificación de integridad y autenticidad de solicitudes de API',
	'tool.crypto-hmac.use_case.1': 'Creación de tokens seguros para gestión de sesiones',
	'tool.crypto-hmac.use_case.2':
		'Generación de firmas de webhook para servicios como GitHub o Stripe',
	'tool.crypto-hmac.use_case.3':
		'Implementación de autenticación de mensaje en comunicación de microservicios',
	'tool.crypto-hmac.use_case.4': 'Creación de checksums para verificación de archivos',

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
	'tool.xml-xpath.use_case.3': 'Validar la estructura y el contenido de XML de forma programática'
};

export default registryEs;

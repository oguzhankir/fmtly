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
	'tool.xml-xpath.use_case.3': 'Validar la estructura y el contenido de XML de forma programática'
};

export default registryEs;

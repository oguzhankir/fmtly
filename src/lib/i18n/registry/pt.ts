const registryPt: Record<string, string> = {
	// ── Categories ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'Formate, valide, minifique, compare e converta dados JSON. Todas as ferramentas funcionam no seu navegador com detecção de erros em tempo real e visualização em árvore.',
	'category.json.primary_keyword': 'ferramentas json',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		'Formate, valide e converta documentos XML. Suporta formatação estética com recuo configurável e conversão para JSON ou CSV.',
	'category.xml.primary_keyword': 'ferramentas xml',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'Formate, valide e converta arquivos YAML. Conversão bidirecional com JSON e validação de sintaxe com localização precisa de erros.',
	'category.yaml.primary_keyword': 'ferramentas yaml',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'Analise, formate e converta dados CSV. Converta entre CSV, JSON e outros formatos tabulares com suporte a delimitadores personalizados.',
	'category.csv.primary_keyword': 'ferramentas csv',
	'category.css.display_name': 'CSS',
	'category.css.description':
		'Formate, minifique e otimize folhas de estilo CSS. Embeleze CSS comprimido ou minifique CSS formatado com opções de ordenação de propriedades.',
	'category.css.primary_keyword': 'ferramentas css',
	'category.html.display_name': 'HTML',
	'category.html.description':
		'Formate, minifique e valide marcação HTML. Embeleze HTML comprimido ou remova espaços em branco para produção.',
	'category.html.primary_keyword': 'ferramentas html',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'Formate e minifique código JavaScript. Embeleze scripts comprimidos ou produza saída minificada para carregamentos de página mais rápidos.',
	'category.js.primary_keyword': 'ferramentas javascript',
	'category.encode.display_name': 'Codificadores e Decodificadores',
	'category.encode.description':
		'Codifique e decodifique Base64, URL, entidades HTML e mais. Todas as operações rodam instantaneamente no seu navegador — sem envio de dados para servidores.',
	'category.encode.primary_keyword': 'ferramentas de codificação e decodificação',
	'category.escape.display_name': 'Ferramentas de Escape',
	'category.escape.description':
		'Aplique e remova escape de strings para JSON, HTML, XML, URLs e regex. Manipule caracteres especiais com segurança entre formatos.',
	'category.escape.primary_keyword': 'ferramentas de escape de string',
	'category.diff.display_name': 'Diff e Comparação',
	'category.diff.description':
		'Compare dois arquivos ou estruturas de dados lado a lado. Destaca adições e exclusões com suporte a diff JSON, texto e estruturado.',
	'category.diff.primary_keyword': 'ferramentas de diff e comparação',
	'category.generate.display_name': 'Geradores',
	'category.generate.description':
		'Gere definições de tipo, JSON Schema, tabelas Markdown, dados de teste fictícios e outros utilitários de desenvolvedor inteiramente no seu navegador.',
	'category.generate.primary_keyword': 'geradores de código',
	'category.text.display_name': 'Texto e Strings',
	'category.text.description':
		'Formate, manipule, inverta, ordene e analise textos e strings. Inclui contadores de palavras, pontuações de legibilidade e conversões markdown.',
	'category.text.primary_keyword': 'ferramentas de texto',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formate, valide e converta arquivos TOML. Converta TOML para JSON e YAML com segurança.',
	'category.toml.primary_keyword': 'ferramentas toml',
	'category.number.display_name': 'Números e Matemática',
	'category.number.description':
		'Formate números, calcule porcentagens, use notação científica e converta valores entre sistemas numéricos instantaneamente.',
	'category.number.primary_keyword': 'ferramentas de números',
	'category.color.display_name': 'Ferramentas de Cor',
	'category.color.description':
		'Verifique taxas de contraste, construa paletas de cores, gere gradientes CSS e simule daltonismo.',
	'category.color.primary_keyword': 'ferramentas de cor',
	'category.crypto.display_name': 'Cripto e Segurança',
	'category.crypto.description':
		'Gere assinaturas HMAC, analise a força da senha, produza strings aleatórias seguras e gere ULIDs — tudo localmente usando a Web Crypto API.',
	'category.crypto.primary_keyword': 'ferramentas de criptografia e segurança',
	'category.web.display_name': 'Web e Rede',
	'category.web.description':
		'Analise URLs, decodifique strings de User-Agent, inspecione headers CORS, procure tipos MIME, geolocalize IPs e consulte registros DNS.',
	'category.web.primary_keyword': 'ferramentas web online',
	'category.code.display_name': 'Formatadores de Código',
	'category.code.description':
		'Formate CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL e Markdown totalmente local. Converta comandos cURL para fetch() ou Axios.',
	'category.code.primary_keyword': 'formatador de código online',
	'category.pdf.display_name': 'Ferramentas PDF',
	'category.pdf.description': 'Visualize arquivos PDF e extraia texto — tudo localmente no seu navegador.',
	'category.pdf.primary_keyword': 'ferramentas pdf online',
	'category.image.display_name': 'Ferramentas de Imagem',
	'category.image.description':
		'Redimensione, converta, comprima e codifique imagens — tudo localmente no seu navegador. Sem uploads, sem servidor.',
	'category.image.primary_keyword': 'ferramentas de imagem online',
	'category.file.display_name': 'Ferramentas de Arquivo',
	'category.file.description':
		'Calcule hashes de arquivos e realize conversões de formato entre arquivos.',
	'category.file.primary_keyword': 'ferramentas de arquivo online',
	'category.qr.display_name': 'QR & Código de Barras',
	'category.qr.description':
		'Gere códigos QR personalizáveis e decodifique códigos QR de imagens — tudo localmente no seu navegador.',
	'category.qr.primary_keyword': 'gerador de código qr',
	'category.accessibility.display_name': 'Acessibilidade',
	'category.accessibility.description':
		'Teste o contraste de cores, simule daltonismo e verifique os requisitos de tamanho de fonte WCAG. Garanta que seus designs sejam acessíveis a todos.',
	'category.accessibility.primary_keyword': 'ferramentas de acessibilidade',

	// ── JSON tools ──────────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'Formatador JSON',
	'tool.json-formatter.tagline': 'Formate e embeleze JSON com recuo configurável',
	'tool.json-formatter.description':
		'Analise e exiba JSON com recuo configurável — 2 espaços, 4 espaços ou tabs. Análise em tempo real com locais de erro precisos e visualização em árvore opcional.',
	'tool.json-formatter.primary_keyword': 'formatador json',
	'tool.json-formatter.meta_title': 'Formatador e Embelezador JSON — fmtly.dev',
	'tool.json-formatter.meta_description':
		'Formate e embeleze JSON instantaneamente no seu navegador. Recuo configurável, detecção de erros e árvore. Nenhum dado sai do seu dispositivo.',
	'tool.json-formatter.operation': 'Formatar',

	'tool.json-validator.display_name': 'Validador JSON',
	'tool.json-validator.tagline': 'Valide a sintaxe e a estrutura do JSON',
	'tool.json-validator.description':
		'Verifique a sintaxe JSON em tempo real. Identifica instantaneamente colchetes ausentes, strings inacabadas e chaves duplicadas.',
	'tool.json-validator.primary_keyword': 'validador json',
	'tool.json-validator.meta_title': 'Validador JSON — fmtly.dev',
	'tool.json-validator.meta_description':
		'Valide JSON no seu navegador instantaneamente. Detecta erros de sintaxe com números de linha e coluna precisos.',
	'tool.json-validator.operation': 'Validar',

	'tool.json-minifier.display_name': 'Minificador JSON',
	'tool.json-minifier.tagline': 'Remova espaços em branco e comprima o JSON ao tamanho mínimo',
	'tool.json-minifier.description':
		'Remova todos os espaços em branco do JSON para produzir a menor saída possível. Valida o JSON primeiro.',
	'tool.json-minifier.primary_keyword': 'minificador json',
	'tool.json-minifier.meta_title': 'Minificador JSON — fmtly.dev',
	'tool.json-minifier.meta_description':
		'Minifique JSON no seu navegador instantaneamente. Remove todos os espaços e produz uma saída compacta.',
	'tool.json-minifier.operation': 'Minificar',

	'tool.json-to-yaml.display_name': 'JSON para YAML',
	'tool.json-to-yaml.tagline': 'Converta dados JSON para o formato YAML',
	'tool.json-to-yaml.description':
		'Converta JSON para YAML com recuo e formatação adequados. Lida com objetos aninhados e arrays.',
	'tool.json-to-yaml.primary_keyword': 'conversor json para yaml',
	'tool.json-to-yaml.meta_title': 'Conversor JSON para YAML — fmtly.dev',
	'tool.json-to-yaml.meta_description':
		'Converta JSON para YAML instantaneamente no seu navegador. Suporta estruturas complexas.',
	'tool.json-to-yaml.operation': 'Converter',

	'tool.json-to-toml.display_name': 'JSON para TOML',
	'tool.json-to-toml.tagline': 'Converta dados JSON para o formato de configuração TOML',
	'tool.json-to-toml.description':
		'Converta JSON para o formato TOML, ideal para arquivos de configuração.',
	'tool.json-to-toml.primary_keyword': 'json para toml',
	'tool.json-to-toml.meta_title': 'Conversor JSON para TOML — fmtly.dev',
	'tool.json-to-toml.meta_description':
		'Converta JSON para TOML instantaneamente no seu navegador. Sem upload de dados.',
	'tool.json-to-toml.operation': 'Converter',

	'tool.json-to-markdown.display_name': 'JSON para Tabela Markdown',
	'tool.json-to-markdown.tagline': 'Converta arrays JSON em tabelas Markdown',
	'tool.json-to-markdown.description':
		'Converta arrays de objetos JSON em tabelas Markdown formatadas. Detecta cabeçalhos automaticamente.',
	'tool.json-to-markdown.primary_keyword': 'json para tabela markdown',
	'tool.json-to-markdown.meta_title': 'Conversor JSON para Tabela Markdown — fmtly.dev',
	'tool.json-to-markdown.meta_description':
		'Converta arrays JSON em tabelas Markdown instantaneamente. Detecta cabeçalhos das chaves.',
	'tool.json-to-markdown.operation': 'Converter',

	'tool.json-to-xml.display_name': 'JSON para XML',
	'tool.json-to-xml.tagline': 'Converta dados JSON para o formato XML',
	'tool.json-to-xml.description':
		'Converta objetos e arrays JSON em XML bem formado.',
	'tool.json-to-xml.primary_keyword': 'json para xml',
	'tool.json-to-xml.meta_title': 'Conversor JSON para XML — fmtly.dev',
	'tool.json-to-xml.meta_description':
		'Converta JSON para XML instantaneamente no seu navegador. Produz XML válido.',
	'tool.json-to-xml.operation': 'Converter',

	'tool.json-to-csv.display_name': 'JSON para CSV',
	'tool.json-to-csv.tagline': 'Converta arrays JSON para o formato CSV',
	'tool.json-to-csv.description':
		'Converta arrays de objetos JSON para formato CSV. Ideal para planilhas.',
	'tool.json-to-csv.primary_keyword': 'json para csv',
	'tool.json-to-csv.meta_title': 'Conversor JSON para CSV — fmtly.dev',
	'tool.json-to-csv.meta_description':
		'Converta arrays JSON em CSV instantaneamente no seu navegador.',
	'tool.json-to-csv.operation': 'Converter',

	'tool.json-jsonpath.display_name': 'Consulta JSONPath',
	'tool.json-jsonpath.tagline': 'Consulte dados JSON com expressões JSONPath',
	'tool.json-jsonpath.description':
		'Execute expressões JSONPath em dados JSON para extrair valores específicos.',
	'tool.json-jsonpath.primary_keyword': 'consulta jsonpath',
	'tool.json-jsonpath.meta_title': 'Ferramenta de Consulta JSONPath — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'Consulte dados JSON com expressões JSONPath no seu navegador. Seguro e local.',
	'tool.json-jsonpath.operation': 'Consultar',

	'tool.json-jmespath.display_name': 'Consulta JMESPath',
	'tool.json-jmespath.tagline': 'Consulte e transforme JSON com expressões JMESPath',
	'tool.json-jmespath.description':
		'Execute expressões JMESPath em dados JSON para consultá-los e transformá-los.',
	'tool.json-jmespath.primary_keyword': 'consulta jmespath',
	'tool.json-jmespath.meta_title': 'Ferramenta de Consulta JMESPath — fmtly.dev',
	'tool.json-jmespath.meta_description':
		'Consulte e transforme JSON com JMESPath no seu navegador. Suporta todas as funções.',
	'tool.json-jmespath.operation': 'Consultar',

	// ── XML tools ───────────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'Formatador XML',
	'tool.xml-formatter.tagline': 'Embeleze e indente XML com espaçamento configurável',
	'tool.xml-formatter.description':
		'Formate e indente documentos XML com 2 espaços, 4 espaços ou tabs. Valida a estrutura XML.',
	'tool.xml-formatter.primary_keyword': 'formatador xml',
	'tool.xml-formatter.meta_title': 'Formatador e Embelezador XML — fmtly.dev',
	'tool.xml-formatter.meta_description':
		'Formate e embeleze XML no seu navegador. Recuo configurável e validação em tempo real.',
	'tool.xml-formatter.operation': 'Formatar',

	'tool.xml-validator.display_name': 'Validador XML',
	'tool.xml-validator.tagline': 'Valide a sintaxe e a boa formação do XML',
	'tool.xml-validator.description':
		'Verifique se o XML está bem formado. Identifica tags não fechadas e atributos inválidos.',
	'tool.xml-validator.primary_keyword': 'validador xml',
	'tool.xml-validator.meta_title': 'Validador XML — fmtly.dev',
	'tool.xml-validator.meta_description':
		'Valide XML no seu navegador. Detecta erros de sintaxe com números de linha e coluna.',
	'tool.xml-validator.operation': 'Validar',

	'tool.xml-to-json.display_name': 'XML para JSON',
	'tool.xml-to-json.tagline': 'Converta documentos XML para o formato JSON',
	'tool.xml-to-json.description':
		'Converta XML para JSON com mapeamento automático de atributos e elementos.',
	'tool.xml-to-json.primary_keyword': 'xml para json',
	'tool.xml-to-json.meta_title': 'Conversor XML para JSON — fmtly.dev',
	'tool.xml-to-json.meta_description':
		'Converta XML para JSON instantaneamente no seu navegador. Lida com estruturas aninhadas.',
	'tool.xml-to-json.operation': 'Converter',

	'tool.xml-to-yaml.display_name': 'XML para YAML',
	'tool.xml-to-yaml.tagline': 'Converta documentos XML para o formato YAML',
	'tool.xml-to-yaml.description':
		'Converta XML para o formato YAML com recuo apropriado. Lida com elementos aninhados.',
	'tool.xml-to-yaml.primary_keyword': 'xml para yaml',
	'tool.xml-to-yaml.meta_title': 'Conversor XML para YAML — fmtly.dev',
	'tool.xml-to-yaml.meta_description':
		'Converta XML para YAML instantaneamente no seu navegador. Sem upload.',
	'tool.xml-to-yaml.operation': 'Converter',

	'tool.xml-to-csv.display_name': 'XML para CSV',
	'tool.xml-to-csv.tagline': 'Converta registros XML para o formato CSV',
	'tool.xml-to-csv.description':
		'Extraia elementos XML repetidos em linhas CSV. Detecta cabeçalhos automaticamente.',
	'tool.xml-to-csv.primary_keyword': 'xml para csv',
	'tool.xml-to-csv.meta_title': 'Conversor XML para CSV — fmtly.dev',
	'tool.xml-to-csv.meta_description':
		'Converta registros XML em CSV instantaneamente no seu navegador.',
	'tool.xml-to-csv.operation': 'Converter',

	'tool.xml-minifier.display_name': 'Minificador XML',
	'tool.xml-minifier.tagline': 'Remova espaços em branco e comprima XML',
	'tool.xml-minifier.description':
		'Remova todos os espaços em branco e comentários do XML para reduzir o tamanho do arquivo.',
	'tool.xml-minifier.primary_keyword': 'minificador xml',
	'tool.xml-minifier.meta_title': 'Minificador XML — fmtly.dev',
	'tool.xml-minifier.meta_description':
		'Minifique XML no seu navegador instantaneamente. Reduz o tamanho do arquivo de forma eficiente.',
	'tool.xml-minifier.operation': 'Minificar',

	'tool.xml-xpath.display_name': 'Consulta XPath',
	'tool.xml-xpath.tagline': 'Consulte dados XML com expressões XPath',
	'tool.xml-xpath.description':
		'Execute expressões XPath 1.0 em documentos XML. Suporta seleção de elementos e filtros.',
	'tool.xml-xpath.primary_keyword': 'consulta xpath',
	'tool.xml-xpath.meta_title': 'Ferramenta de Consulta XPath — fmtly.dev',
	'tool.xml-xpath.meta_description':
		'Consulte XML com expressões XPath no seu navegador. Suporta todos os eixos.',
	'tool.xml-xpath.operation': 'Consultar',

	// ── YAML tools ──────────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'Formatador YAML',
	'tool.yaml-formatter.tagline': 'Formate e embeleze YAML com recuo consistente',
	'tool.yaml-formatter.description':
		'Formate arquivos YAML com recuo consistente de 2 espaços. Valida a sintaxe YAML.',
	'tool.yaml-formatter.primary_keyword': 'formatador yaml',
	'tool.yaml-formatter.meta_title': 'Formatador e Embelezador YAML — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		'Formate e embeleze YAML no seu navegador. Valida a sintaxe e normaliza o recuo.',
	'tool.yaml-formatter.operation': 'Formatar',

	'tool.yaml-validator.display_name': 'Validador YAML',
	'tool.yaml-validator.tagline': 'Valide a sintaxe e a estrutura do YAML',
	'tool.yaml-validator.description':
		'Valide documentos YAML para erros de sintaxe. Identifica problemas de recuo e chaves duplicadas.',
	'tool.yaml-validator.primary_keyword': 'validador yaml',
	'tool.yaml-validator.meta_title': 'Validador YAML — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Valide YAML no seu navegador. Detecta erros de sintaxe com números de linha.',
	'tool.yaml-validator.operation': 'Validar',

	'tool.yaml-to-json.display_name': 'YAML para JSON',
	'tool.yaml-to-json.tagline': 'Converta YAML para o formato JSON',
	'tool.yaml-to-json.description':
		'Converta documentos YAML em JSON formatado. Lida com âncoras e aliases.',
	'tool.yaml-to-json.primary_keyword': 'yaml para json',
	'tool.yaml-to-json.meta_title': 'Conversor YAML para JSON — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		'Converta YAML para JSON instantaneamente no seu navegador. Processa recursos YAML complexos localmente.',
	'tool.yaml-to-json.operation': 'Converter',

	'tool.yaml-to-xml.display_name': 'YAML para XML',
	'tool.yaml-to-xml.tagline': 'Converta YAML para o formato XML',
	'tool.yaml-to-xml.description':
		'Converta documentos YAML em XML bem formado. Mapeia chaves YAML para elementos XML.',
	'tool.yaml-to-xml.primary_keyword': 'yaml para xml',
	'tool.yaml-to-xml.meta_title': 'Conversor YAML para XML — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		'Converta YAML para XML instantaneamente no seu navegador. Executado localmente.',
	'tool.yaml-to-xml.operation': 'Converter',

	'tool.yaml-to-csv.display_name': 'YAML para CSV',
	'tool.yaml-to-csv.tagline': 'Converta arrays YAML para o formato CSV',
	'tool.yaml-to-csv.description':
		'Converta arrays de objetos YAML para formato CSV. Extrai cabeçalhos automaticamente.',
	'tool.yaml-to-csv.primary_keyword': 'yaml para csv',
	'tool.yaml-to-csv.meta_title': 'Conversor YAML para CSV — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		'Converta YAML para CSV instantaneamente. Nenhum dado sai do seu navegador.',
	'tool.yaml-to-csv.operation': 'Converter',

	'tool.yaml-to-toml.display_name': 'YAML para TOML',
	'tool.yaml-to-toml.tagline': 'Converta YAML para o formato de configuração TOML',
	'tool.yaml-to-toml.description':
		'Converta arquivos de configuração YAML para o formato TOML. Suporta todos os tipos de dados YAML.',
	'tool.yaml-to-toml.primary_keyword': 'yaml para toml',
	'tool.yaml-to-toml.meta_title': 'Conversor YAML para TOML — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		'Converta YAML para TOML instantaneamente no seu navegador. Seguro e local.',
	'tool.yaml-to-toml.operation': 'Converter',

	'tool.yaml-diff.display_name': 'Diff YAML',
	'tool.yaml-diff.tagline': 'Compare dois documentos YAML lado a lado',
	'tool.yaml-diff.description':
		'Compare dois documentos YAML e destaque adições, exclusões e modificações.',
	'tool.yaml-diff.primary_keyword': 'diff yaml',
	'tool.yaml-diff.meta_title': 'Ferramenta de Diff YAML — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'Compare dois documentos YAML no seu navegador. Destaca todas as diferenças claramente.',
	'tool.yaml-diff.operation': 'Comparar',

	// ── CSV tools ───────────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': 'CSV para JSON',
	'tool.csv-to-json.tagline': 'Converta dados CSV em um array JSON',
	'tool.csv-to-json.description':
		'Converta CSV com cabeçalhos em um array JSON. Suporta detecção de tipo dinâmica.',
	'tool.csv-to-json.primary_keyword': 'csv para json',
	'tool.csv-to-json.meta_title': 'Conversor CSV para JSON — fmtly.dev',
	'tool.csv-to-json.meta_description':
		'Converta CSV para JSON instantaneamente no seu navegador. Suporta cabeçalhos e delimitadores.',
	'tool.csv-to-json.operation': 'Converter',

	'tool.csv-to-xml.display_name': 'CSV para XML',
	'tool.csv-to-xml.tagline': 'Converta dados CSV para o formato XML',
	'tool.csv-to-xml.description':
		'Converta arquivos CSV em XML bem formado. Mapeia cabeçalhos para nomes de elementos.',
	'tool.csv-to-xml.primary_keyword': 'csv para xml',
	'tool.csv-to-xml.meta_title': 'Conversor CSV para XML — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		'Converta CSV para XML instantaneamente no seu navegador. Seguro e local.',
	'tool.csv-to-xml.operation': 'Converter',

	'tool.csv-to-yaml.display_name': 'CSV para YAML',
	'tool.csv-to-yaml.tagline': 'Converta dados CSV para o formato YAML',
	'tool.csv-to-yaml.description':
		'Converta arquivos CSV em arrays de objetos YAML. Mapeia cabeçalhos para chaves YAML.',
	'tool.csv-to-yaml.primary_keyword': 'csv para yaml',
	'tool.csv-to-yaml.meta_title': 'Conversor CSV para YAML — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		'Converta CSV para YAML instantaneamente no seu navegador. Sem transmissão de dados.',
	'tool.csv-to-yaml.operation': 'Converter',

	'tool.csv-to-html.display_name': 'CSV para Tabela HTML',
	'tool.csv-to-html.tagline': 'Converta dados CSV em uma tabela HTML',
	'tool.csv-to-html.description':
		'Converta arquivos CSV em tabelas HTML formatadas. Usa a primeira linha como cabeçalho.',
	'tool.csv-to-html.primary_keyword': 'csv para tabela html',
	'tool.csv-to-html.meta_title': 'Conversor CSV para Tabela HTML — fmtly.dev',
	'tool.csv-to-html.meta_description':
		'Converta CSV para tabela HTML instantaneamente. Ideal para apresentações web.',
	'tool.csv-to-html.operation': 'Converter',

	'tool.csv-formatter.display_name': 'Formatador CSV',
	'tool.csv-formatter.tagline': 'Formate e normalize dados CSV',
	'tool.csv-formatter.description':
		'Limpe e formate dados CSV com delimitadores e quebras de linha consistentes.',
	'tool.csv-formatter.primary_keyword': 'formatador csv',
	'tool.csv-formatter.meta_title': 'Formatador CSV — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'Formate e limpe dados CSV localmente no seu navegador.',
	'tool.csv-formatter.operation': 'Formatar',

	'tool.csv-validator.display_name': 'Validador CSV',
	'tool.csv-validator.tagline': 'Valide a estrutura e a sintaxe do CSV',
	'tool.csv-validator.description':
		'Valide arquivos CSV para contagens de colunas consistentes e codificação correta.',
	'tool.csv-validator.primary_keyword': 'validador csv',
	'tool.csv-validator.meta_title': 'Validador CSV — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Valide CSV no seu navegador. Detecta erros estruturais com números de linha.',
	'tool.csv-validator.operation': 'Validar',

	// ── Text tools ──────────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Contador de Palavras',
	'tool.text-word-counter.tagline': 'Conte palavras, caracteres e frases no texto',
	'tool.text-word-counter.description':
		'Conte palavras, caracteres, frases e parágrafos. Mostra tempo de leitura estimado.',
	'tool.text-word-counter.primary_keyword': 'contador de palavras',
	'tool.text-word-counter.meta_title': 'Contador de Palavras — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Conte palavras, caracteres e frases no navegador. Inclui estimativa de tempo de leitura.',
	'tool.text-word-counter.operation': 'Contar',

	'tool.text-readability.display_name': 'Análise de Legibilidade',
	'tool.text-readability.tagline': 'Meça pontuações de legibilidade de texto',
	'tool.text-readability.description':
		'Calcula Flesch-Kincaid e outros índices para otimizar o conteúdo para seu público.',
	'tool.text-readability.primary_keyword': 'análise de legibilidade',
	'tool.text-readability.meta_title': 'Análise de Legibilidade — fmtly.dev',
	'tool.text-readability.meta_description':
		'Meça a legibilidade do texto no navegador com pontuações científicas.',
	'tool.text-readability.operation': 'Analisar',

	'tool.text-line-sorter.display_name': 'Ordenador de Linhas',
	'tool.text-line-sorter.tagline': 'Ordene linhas de texto por ordem alfabética ou comprimento',
	'tool.text-line-sorter.description':
		'Ordene linhas alfabeticamente, numericamente ou por tamanho. Suporta ordem crescente e decrescente.',
	'tool.text-line-sorter.primary_keyword': 'ordenador de linhas',
	'tool.text-line-sorter.meta_title': 'Ordenador de Linhas — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Ordene linhas de texto no navegador. Suporta vários algoritmos de ordenação.',
	'tool.text-line-sorter.operation': 'Ordenar',

	'tool.text-deduplicate.display_name': 'Removedor de Duplicatas',
	'tool.text-deduplicate.tagline': 'Remova linhas duplicadas do texto',
	'tool.text-deduplicate.description':
		'Remova duplicatas de qualquer texto. Suporta sensibilidade a maiúsculas e preserva a ordem original.',
	'tool.text-deduplicate.primary_keyword': 'removedor de duplicatas',
	'tool.text-deduplicate.meta_title': 'Removedor de Duplicatas — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Remova linhas duplicadas de textos no navegador. Rápido e local.',
	'tool.text-deduplicate.operation': 'Remover duplicatas',

	'tool.text-whitespace.display_name': 'Limpador de Espaços',
	'tool.text-whitespace.tagline': 'Remova espaços extras e normalize o espaçamento',
	'tool.text-whitespace.description':
		'Remova espaços supérfluos, tabs e linhas vazias de textos.',
	'tool.text-whitespace.primary_keyword': 'limpador de espaços em branco',
	'tool.text-whitespace.meta_title': 'Limpador de Espaços — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Remova espaços extras de textos no navegador. Normaliza o espaçamento.',
	'tool.text-whitespace.operation': 'Limpar',

	'tool.text-markdown-to-html.display_name': 'Markdown para HTML',
	'tool.text-markdown-to-html.tagline': 'Converta Markdown para HTML',
	'tool.text-markdown-to-html.description':
		'Converta texto Markdown para HTML. Suporta cabeçalhos, listas, tabelas e blocos de código.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown para html',
	'tool.text-markdown-to-html.meta_title': 'Conversor Markdown para HTML — fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Converta Markdown instantaneamente para HTML no navegador. Suporta recursos CommonMark.',
	'tool.text-markdown-to-html.operation': 'Converter',

	'tool.text-html-to-markdown.display_name': 'HTML para Markdown',
	'tool.text-html-to-markdown.tagline': 'Converta HTML para Markdown',
	'tool.text-html-to-markdown.description':
		'Converta HTML em Markdown limpo. Processa títulos, listas e formatações.',
	'tool.text-html-to-markdown.primary_keyword': 'html para markdown',
	'tool.text-html-to-markdown.meta_title': 'Conversor HTML para Markdown — fmtly.dev',
	'tool.text-html-to-markdown.meta_description':
		'Converta HTML instantaneamente para Markdown no navegador.',
	'tool.text-html-to-markdown.operation': 'Converter',

	'tool.text-reverser.display_name': 'Inversor de Texto',
	'tool.text-reverser.tagline': 'Inverta texto, palavras ou linhas',
	'tool.text-reverser.description':
		'Inverta texto caractere por caractere, palavra por palavra ou linha por linha. Bidirecional.',
	'tool.text-reverser.primary_keyword': 'inversor de texto',
	'tool.text-reverser.meta_title': 'Inversor de Texto — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Inverta textos instantaneamente no navegador. Funciona para caracteres, palavras ou linhas.',
	'tool.text-reverser.operation': 'Inverter',

	// ── Code Tools ──────────────────────────────────────────────────────────
	'tool.code-css.display_name': 'Formatador CSS',
	'tool.code-css.tagline': 'Formate e embeleze folhas de estilo CSS',
	'tool.code-css.description':
		'Formate CSS com recuo consistente. Suporta estilo Prettier com largura configurável.',
	'tool.code-css.primary_keyword': 'formatador css',
	'tool.code-css.meta_title': 'Formatador & Embelezador CSS — fmtly.dev',
	'tool.code-css.meta_description':
		'Formate e embeleze CSS no navegador. Recuo configurável localmente.',
	'tool.code-css.operation': 'Formatar',

	'tool.code-scss.display_name': 'Formatador SCSS',
	'tool.code-scss.tagline': 'Formate e embeleze folhas de estilo SCSS',
	'tool.code-scss.description':
		'Formate arquivos SCSS com recuo consistente. Suporta variáveis e aninhamento.',
	'tool.code-scss.primary_keyword': 'formatador scss',
	'tool.code-scss.meta_title': 'Formatador SCSS — fmtly.dev',
	'tool.code-scss.meta_description':
		'Formate e embeleze SCSS no navegador. Suporta todas as sintaxes SCSS.',
	'tool.code-scss.operation': 'Formatar',

	'tool.code-less.display_name': 'Formatador LESS',
	'tool.code-less.tagline': 'Formate e embeleze folhas de estilo LESS',
	'tool.code-less.description':
		'Formate arquivos LESS com recuo consistente. Suporta mixins e aninhamento.',
	'tool.code-less.primary_keyword': 'formatador less',
	'tool.code-less.meta_title': 'Formatador LESS — fmtly.dev',
	'tool.code-less.meta_description':
		'Formate e embeleze LESS no navegador. Local e seguro.',
	'tool.code-less.operation': 'Formatar',

	'tool.code-html.display_name': 'Formatador HTML',
	'tool.code-html.tagline': 'Formate e embeleze marcação HTML',
	'tool.code-html.description':
		'Formate HTML mit korrektem Einzug. Verarbeitet Attribute und eingebettetes CSS/JS.',
	'tool.code-html.primary_keyword': 'formatador html',
	'tool.code-html.meta_title': 'Formatador & Embelezador HTML — fmtly.dev',
	'tool.code-html.meta_description':
		'Formate e embeleze HTML no navegador. Aninhamento correto de tags local.',
	'tool.code-html.operation': 'Formatar',

	'tool.code-javascript.display_name': 'Formatador JavaScript',
	'tool.code-javascript.tagline': 'Formate e embeleze código JavaScript',
	'tool.code-javascript.description':
		'Formate JavaScript com estilo Prettier. Suporta ES2022+ moderno e JSX.',
	'tool.code-javascript.primary_keyword': 'formatador javascript',
	'tool.code-javascript.meta_title': 'Formatador JavaScript — fmtly.dev',
	'tool.code-javascript.meta_description':
		'Formate e embeleze JavaScript no navegador. Suporta as sintaxes mais recentes.',
	'tool.code-javascript.operation': 'Formatar',

	'tool.code-typescript.display_name': 'Formatador TypeScript',
	'tool.code-typescript.tagline': 'Formate e embeleze código TypeScript',
	'tool.code-typescript.description':
		'Formate TypeScript com estilo Prettier. Suporta generics e decorators.',
	'tool.code-typescript.primary_keyword': 'formatador typescript',
	'tool.code-typescript.meta_title': 'Formatador TypeScript — fmtly.dev',
	'tool.code-typescript.meta_description':
		'Formate e embeleze TypeScript no navegador. Todos os recursos TS suportados.',
	'tool.code-typescript.operation': 'Formatar',

	'tool.code-graphql.display_name': 'Formatador GraphQL',
	'tool.code-graphql.tagline': 'Formate schemas e consultas GraphQL',
	'tool.code-graphql.description':
		'Formate schemas GraphQL com recuo consistente. Suporta queries e mutations.',
	'tool.code-graphql.primary_keyword': 'formatador graphql',
	'tool.code-graphql.meta_title': 'Formatador GraphQL — fmtly.dev',
	'tool.code-graphql.meta_description':
		'Formate e embeleze GraphQL no navegador. Suporta SDL e consultas.',
	'tool.code-graphql.operation': 'Formatar',

	'tool.code-markdown.display_name': 'Formatador Markdown',
	'tool.code-markdown.tagline': 'Formate e normalize documentos Markdown',
	'tool.code-markdown.description':
		'Formate Markdown com estilos consistentes. Normaliza espaços e linhas vazias.',
	'tool.code-markdown.primary_keyword': 'formatador markdown',
	'tool.code-markdown.meta_title': 'Formatador Markdown — fmtly.dev',
	'tool.code-markdown.meta_description':
		'Formate e normalize Markdown no navegador. Seus dados nunca saem do dispositivo.',
	'tool.code-markdown.operation': 'Formatar',

	'tool.code-curl-to-fetch.display_name': 'cURL para Fetch',
	'tool.code-curl-to-fetch.tagline': 'Converta comandos cURL para JavaScript fetch()',
	'tool.code-curl-to-fetch.description':
		'Converta comandos cURL em chamadas nativas fetch(). Lida com headers e auth.',
	'tool.code-curl-to-fetch.primary_keyword': 'conversor curl para fetch',
	'tool.code-curl-to-fetch.meta_title': 'Conversor cURL para Fetch — fmtly.dev',
	'tool.code-curl-to-fetch.meta_description':
		'Converta comandos cURL instantaneamente para fetch(). Executado localmente no navegador.',
	'tool.code-curl-to-fetch.operation': 'Converter',

	'tool.code-curl-to-axios.display_name': 'cURL para Axios',
	'tool.code-curl-to-axios.tagline': 'Converta comandos cURL para requisições Axios',
	'tool.code-curl-to-axios.description':
		'Converta comandos cURL em chamadas Axios. Lida com headers e dados do body.',
	'tool.code-curl-to-axios.primary_keyword': 'conversor curl para axios',
	'tool.code-curl-to-axios.meta_title': 'Conversor cURL para Axios — fmtly.dev',
	'tool.code-curl-to-axios.meta_description':
		'Converta comandos cURL instantaneamente para requisições Axios no navegador.',
	'tool.code-curl-to-axios.operation': 'Converter',

	// ── Color Tools ──────────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Conversor de Cor',
	'tool.color-converter.tagline': 'Converta cores entre HEX, RGB, HSL e mais',
	'tool.color-converter.description':
		'Converta entre todos os formatos de cor web com antevisão em tempo real.',
	'tool.color-converter.primary_keyword': 'conversor de cores',
	'tool.color-converter.meta_title': 'Conversor de Cores — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Converta cores para vários formatos no navegador. Inclui antevisão ao vivo.',
	'tool.color-converter.operation': 'Converter',

	'tool.color-contrast.display_name': 'Verificador de Contraste',
	'tool.color-contrast.tagline': 'Verifique o rácio de contraste WCAG entre duas cores',
	'tool.color-contrast.description':
		'Calcula o rácio de contraste e verifica a conformidade WCAG 2.1 AA/AAA para textos.',
	'tool.color-contrast.primary_keyword': 'verificador de contraste',
	'tool.color-contrast.meta_title': 'Verificador de Contraste de Cores — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Verifique os rácios de contraste de cores para conformidade WCAG no navegador.',
	'tool.color-contrast.operation': 'Verificar',

	// ── Crypto Tools ─────────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'Gerador HMAC',
	'tool.crypto-hmac.tagline': 'Gere assinaturas HMAC com algoritmos SHA',
	'tool.crypto-hmac.description': 'Gere assinaturas HMAC usando SHA-256, SHA-384 ou SHA-512.',
	'tool.crypto-hmac.primary_keyword': 'gerador hmac',
	'tool.crypto-hmac.meta_title': 'Gerador HMAC — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		'Gere assinaturas HMAC no navegador com a Web Crypto API.',
	'tool.crypto-hmac.operation': 'Gerar',

	'tool.crypto-password-strength.display_name': 'Verificador de Força de Senha',
	'tool.crypto-password-strength.tagline': 'Analise a força e entropia da senha',
	'tool.crypto-password-strength.description':
		'Avalia a força da senha com cálculo de entropia e tempo estimado de quebra.',
	'tool.crypto-password-strength.primary_keyword': 'verificador de força de senha',
	'tool.crypto-password-strength.meta_title': 'Verificador de Força de Senha — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		'Analise a força da senha no navegador. 100% local, sem envio para servidores.',
	'tool.crypto-password-strength.operation': 'Analisar',

	'tool.crypto-ulid.display_name': 'Gerador ULID',
	'tool.crypto-ulid.tagline': 'Gere Universally Unique Lexicographically Sortable Identifiers',
	'tool.crypto-ulid.description':
		'Gere ULIDs – identificadores ordenáveis cronologicamente e seguros para URL.',
	'tool.crypto-ulid.primary_keyword': 'gerador ulid',
	'tool.crypto-ulid.meta_title': 'Gerador ULID — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		'Gere ULIDs no navegador. IDs ordenáveis e seguros gerados localmente.',
	'tool.crypto-ulid.operation': 'Gerar',

	'tool.crypto-random-string.display_name': 'Gerador de String Aleatória',
	'tool.crypto-random-string.tagline': 'Gere strings aleatórias criptograficamente seguras',
	'tool.crypto-random-string.description':
		'Gere strings aleatórias seguras com comprimento e conjuntos de caracteres configuráveis.',
	'tool.crypto-random-string.primary_keyword': 'gerador de strings aleatórias',
	'tool.crypto-random-string.meta_title': 'Gerador de String Aleatória — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		'Gere strings aleatórias seguras no navegador via Web Crypto API.',
	'tool.crypto-random-string.operation': 'Gerar',

	// ── Diff Tools ───────────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Diff de Texto',
	'tool.diff-text.tagline': 'Compare dois blocos de texto e destaque as diferenças',
	'tool.diff-text.description': 'Compare dois textos lado a lado. Destaca adições e exclusões.',
	'tool.diff-text.primary_keyword': 'text diff',
	'tool.diff-text.meta_title': 'Ferramenta de Diff de Texto — fmtly.dev',
	'tool.diff-text.meta_description':
		'Compare dois blocos de texto no navegador. Detecta alterações a nível de palavra ou linha.',
	'tool.diff-text.operation': 'Comparar',

	// ── Encode Tools ─────────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Codificador / Descodificador Base64',
	'tool.encode-base64.tagline': 'Codifique e descodifique strings Base64',
	'tool.encode-base64.description':
		'Codifique texto para Base64 e descodifique strings Base64 de volta para texto.',
	'tool.encode-base64.primary_keyword': 'base64 codificador descodificador',
	'tool.encode-base64.meta_title': 'Codificador & Descodificador Base64 — fmtly.dev',
	'tool.encode-base64.meta_description':
		'Codifique e descodifique Base64 no navegador. Suporta variantes seguras para URL.',
	'tool.encode-base64.operation': 'Codificar / Descodificar',

	'tool.encode-url.display_name': 'Codificador / Descodificador URL',
	'tool.encode-url.tagline': 'Codifique e descodifique strings com codificação URL',
	'tool.encode-url.description': 'Codifique URLs por percentagem ou descodifique strings codificadas.',
	'tool.encode-url.primary_keyword': 'url codificador descodificador',
	'tool.encode-url.meta_title': 'Codificador & Descodificador URL — fmtly.dev',
	'tool.encode-url.meta_description':
		'Codifique e descodifique URLs no navegador. Processa todos os caracteres especiais.',
	'tool.encode-url.operation': 'Codificar / Descodificar',

	'tool.encode-html.display_name': 'Codificador / Descodificador HTML',
	'tool.encode-html.tagline': 'Codifique e descodifique entidades HTML',
	'tool.encode-html.description': 'Converta caracteres especiais em entidades HTML e vice-versa.',
	'tool.encode-html.primary_keyword': 'html codificador descodificador',
	'tool.encode-html.meta_title': 'Codificador & Descodificador HTML — fmtly.dev',
	'tool.encode-html.meta_description': 'Codifique e descodifique entidades HTML localmente no navegador.',
	'tool.encode-html.operation': 'Codificar / Descodificar',

	'tool.encode-html-entities.display_name': 'Referência de Entidades HTML',
	'tool.encode-html-entities.tagline': 'Pesquise e consulte códigos de entidades HTML',
	'tool.encode-html-entities.description':
		'Pesquise todas as entidades HTML com formas decimais, hexadecimais e nomeadas.',
	'tool.encode-html-entities.primary_keyword': 'referência de entidades html',
	'tool.encode-html-entities.meta_title': 'Referência de Entidades HTML — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Pesquise todas as entidades HTML no navegador. Procura por nome, decimal ou hex.',
	'tool.encode-html-entities.operation': 'Consultar',

	'tool.encode-unicode.display_name': 'Análise Unicode',
	'tool.encode-unicode.tagline': 'Analise pontos de código Unicode no texto',
	'tool.encode-unicode.description':
		'Descodifique texto para pontos de código Unicode com representações Hex e UTF-8.',
	'tool.encode-unicode.primary_keyword': 'análise unicode',
	'tool.encode-unicode.meta_title': 'Análise Unicode — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Analise pontos de código Unicode no navegador. Inspecione Hex e Bytes UTF-8.',
	'tool.encode-unicode.operation': 'Analisar',

	// ── Escape Tools ─────────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'Escape de String JSON',
	'tool.escape-json.tagline': 'Aplique e remova escape de strings JSON',
	'tool.escape-json.description':
		'Aplique escape a caracteres especiais para valores JSON ou remova o escape de strings JSON.',
	'tool.escape-json.primary_keyword': 'json escape unescape',
	'tool.escape-json.meta_title': 'Escape & Unescape de String JSON — fmtly.dev',
	'tool.escape-json.meta_description':
		'Aplique e remova escape de strings JSON no navegador. Seguro e local.',
	'tool.escape-json.operation': 'Escape / Unescape',

	// ── File Tools ───────────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'Calculadora de Hash de Ficheiro',
	'tool.file-hash.tagline': 'Calcule hashes de ficheiros MD5, SHA-1, SHA-256 e SHA-512',
	'tool.file-hash.description': 'Calcule valores de hash criptográficos para qualquer ficheiro.',
	'tool.file-hash.primary_keyword': 'calculadora hash ficheiro',
	'tool.file-hash.meta_title': 'Calculadora de Hash de Ficheiro — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		'Calcule hashes de ficheiros no navegador. Suporta MD5, SHA-1, SHA-256 e SHA-512.',
	'tool.file-hash.operation': 'Calcular Hash',

	// ── Generate Tools ───────────────────────────────────────────────────────
	'tool.generate-uuid.display_name': 'Gerador de UUID',
	'tool.generate-uuid.tagline': 'Gere UUIDs aleatórios (v4)',
	'tool.generate-uuid.description': 'Gere UUIDs Versão 4 em conformidade com a RFC 4122.',
	'tool.generate-uuid.primary_keyword': 'gerador de uuid',
	'tool.generate-uuid.meta_title': 'Gerador de UUID — fmtly.dev',
	'tool.generate-uuid.meta_description': 'Gere UUIDs aleatórios no navegador. Conforme RFC 4122 v4.',
	'tool.generate-uuid.operation': 'Gerar',

	// ── Image Tools ──────────────────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Compressor de Imagem',
	'tool.image-compressor.tagline': 'Comprima imagens sem perda de qualidade',
	'tool.image-compressor.description':
		'Comprima imagens JPEG, PNG e WebP no navegador. Nenhuma imagem é carregada.',
	'tool.image-compressor.primary_keyword': 'compressor de imagem',
	'tool.image-compressor.meta_title': 'Compressor de Imagem — fmtly.dev',
	'tool.image-compressor.meta_description':
		'Comprima imagens no navegador. Suporta JPEG, PNG e WebP localmente.',
	'tool.image-compressor.operation': 'Comprimir',

	// ── Number Tools ─────────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Formatador de Números',
	'tool.number-formatter.tagline': 'Formate números com separadores específicos da região',
	'tool.number-formatter.description': 'Formate números com separadores de milhares e casas decimais.',
	'tool.number-formatter.primary_keyword': 'formatador de números',
	'tool.number-formatter.meta_title': 'Formatador de Números — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Formate números com separadores localizados no navegador.',
	'tool.number-formatter.operation': 'Formatar',

	'tool.number-roman.display_name': 'Conversor de Números Romanos',
	'tool.number-roman.tagline': 'Converta entre números romanos e números inteiros',
	'tool.number-roman.description': 'Converta inteiros para números romanos e vice-versa.',
	'tool.number-roman.primary_keyword': 'conversor de números romanos',
	'tool.number-roman.meta_title': 'Conversor de Números Romanos — fmtly.dev',
	'tool.number-roman.meta_description': 'Converta entre números romanos e inteiros no navegador.',
	'tool.number-roman.operation': 'Converter',

	'tool.number-percentage.display_name': 'Calculadora de Percentagem',
	'tool.number-percentage.tagline': 'Calcule percentagens, aumentos e reduções',
	'tool.number-percentage.description': 'Calcule valores percentuais, alterações e partes.',
	'tool.number-percentage.primary_keyword': 'calculadora de percentagem',
	'tool.number-percentage.meta_title': 'Calculadora de Percentagem — fmtly.dev',
	'tool.number-percentage.meta_description': 'Calcule percentagens e variações no navegador.',
	'tool.number-percentage.operation': 'Calcular',

	'tool.number-scientific.display_name': 'Conversor de Notação Científica',
	'tool.number-scientific.tagline': 'Converta números de/para notação científica',
	'tool.number-scientific.description': 'Converta números para notação científica e vice-versa.',
	'tool.number-scientific.primary_keyword': 'conversor de notação científica',
	'tool.number-scientific.meta_title': 'Conversor de Notação Científica — fmtly.dev',
	'tool.number-scientific.meta_description': 'Converta números para notação científica no navegador.',
	'tool.number-scientific.operation': 'Converter',

	'tool.number-statistics.display_name': 'Calculadora de Estatística',
	'tool.number-statistics.tagline': 'Calcule média, mediana, moda e mais',
	'tool.number-statistics.description': 'Calcule estatísticas descritivas para uma lista de números.',
	'tool.number-statistics.primary_keyword': 'calculadora de estatística',
	'tool.number-statistics.meta_title': 'Calculadora de Estatística — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Calcule média, mediana e desvio padrão no navegador.',
	'tool.number-statistics.operation': 'Calcular',

	'tool.number-matrix.display_name': 'Calculadora de Matrizes',
	'tool.number-matrix.tagline': 'Realize operações e cálculos de matrizes',
	'tool.number-matrix.description': 'Realize somas, multiplicações e inversões de matrizes.',
	'tool.number-matrix.primary_keyword': 'calculadora de matrizes',
	'tool.number-matrix.meta_title': 'Calculadora de Matrizes — fmtly.dev',
	'tool.number-matrix.meta_description': 'Realize operações de matrizes no navegador. Seguro e local.',
	'tool.number-matrix.operation': 'Calcular',

	'tool.number-unit-converter.display_name': 'Conversor de Unidades',
	'tool.number-unit-converter.tagline': 'Converta entre diferentes unidades de medida',
	'tool.number-unit-converter.description': 'Converta comprimento, peso, temperatura, volume e mais.',
	'tool.number-unit-converter.primary_keyword': 'conversor de unidades',
	'tool.number-unit-converter.meta_title': 'Conversor de Unidades — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Converta unidades de medida no navegador. Suporta métrico e imperial.',
	'tool.number-unit-converter.operation': 'Converter',

	// ── PDF Tools ─────────────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'Visualizador de PDF',
	'tool.pdf-viewer.tagline': 'Visualize e extraia texto de ficheiros PDF',
	'tool.pdf-viewer.description': 'Visualize PDFs no navegador e extraia o conteúdo de texto localmente.',
	'tool.pdf-viewer.primary_keyword': 'visualizador de pdf',
	'tool.pdf-viewer.meta_title': 'Visualizador de PDF — fmtly.dev',
	'tool.pdf-viewer.meta_description': 'Visualize ficheiros PDF no navegador. Extraia texto de qualquer PDF.',
	'tool.pdf-viewer.operation': 'Visualizar',

	// ── QR Tools ──────────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'Gerador de Código QR',
	'tool.qr-generator.tagline': 'Gere códigos QR personalizáveis',
	'tool.qr-generator.description':
		'Gere códigos QR de texto, URLs e informações de contacto. Download em PNG ou SVG.',
	'tool.qr-generator.primary_keyword': 'gerador de código qr',
	'tool.qr-generator.meta_title': 'Gerador de Código QR — fmtly.dev',
	'tool.qr-generator.meta_description': 'Gere códigos QR personalizáveis no navegador.',
	'tool.qr-generator.operation': 'Gerar',

	// ── TOML Tools ────────────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'Formatador TOML',
	'tool.toml-formatter.tagline': 'Formate e valide ficheiros de configuração TOML',
	'tool.toml-formatter.description': 'Formate ficheiros TOML com espaçamento uniforme.',
	'tool.toml-formatter.primary_keyword': 'formatador toml',
	'tool.toml-formatter.meta_title': 'Formatador TOML — fmtly.dev',
	'tool.toml-formatter.meta_description': 'Formate e valide TOML no navegador.',
	'tool.toml-formatter.operation': 'Formatar',

	// ── Web Tools ─────────────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'Analisador de URL',
	'tool.web-url-parser.tagline': 'Analise e inspecione componentes de URL',
	'tool.web-url-parser.description': 'Divida URLs em protocolo, host, porta, caminho e parâmetros.',
	'tool.web-url-parser.primary_keyword': 'analisador de url',
	'tool.web-url-parser.meta_title': 'Analisador de URL — fmtly.dev',
	'tool.web-url-parser.meta_description':
		'Analise componentes de URL no navegador. Divide qualquer URL nas suas partes.',
	'tool.web-url-parser.operation': 'Analisar',

	'tool.web-user-agent.display_name': 'Analisador de User-Agent',
	'tool.web-user-agent.tagline': 'Analise e descodifique strings User-Agent',
	'tool.web-user-agent.description': 'Identifique o browser, SO e dispositivo a partir da string.',
	'tool.web-user-agent.primary_keyword': 'analisador de user agent',
	'tool.web-user-agent.meta_title': 'Analisador de User-Agent — fmtly.dev',
	'tool.web-user-agent.meta_description': 'Analise strings User-Agent no navegador.',
	'tool.web-user-agent.operation': 'Analisar',

	'tool.web-cors.display_name': 'Verificador de Headers CORS',
	'tool.web-cors.tagline': 'Inspecione e compreenda headers de segurança CORS',
	'tool.web-cors.description': 'Explica headers como Access-Control-Allow-Origin.',
	'tool.web-cors.primary_keyword': 'verificador de headers cors',
	'tool.web-cors.meta_title': 'Verificador de Headers CORS — fmtly.dev',
	'tool.web-cors.meta_description': 'Inspecione headers CORS no navegador.',
	'tool.web-cors.operation': 'Verificar',

	'tool.web-mime-types.display_name': 'Pesquisa de Tipos MIME',
	'tool.web-mime-types.tagline': 'Pesquise tipos MIME por extensão ou nome',
	'tool.web-mime-types.description': 'Pesquise tipos MIME por extensão de ficheiro ou nome.',
	'tool.web-mime-types.primary_keyword': 'pesquisa de tipos mime',
	'tool.web-mime-types.meta_title': 'Pesquisa de Tipos MIME — fmtly.dev',
	'tool.web-mime-types.meta_description': 'Consulte tipos MIME por extensão no navegador.',
	'tool.web-mime-types.operation': 'Consultar',

	'tool.web-ip-lookup.display_name': 'Pesquisa de IP',
	'tool.web-ip-lookup.tagline': 'Pesquise geolocalização e informações de endereços IP',
	'tool.web-ip-lookup.description': 'Descubra a localização, rede e ISP de qualquer endereço IP.',
	'tool.web-ip-lookup.primary_keyword': 'pesquisa de ip',
	'tool.web-ip-lookup.meta_title': 'Pesquisa de Endereço IP — fmtly.dev',
	'tool.web-ip-lookup.meta_description': 'Obtenha informações de geolocalização de IP no navegador.',
	'tool.web-ip-lookup.operation': 'Consultar',

	'tool.web-dns-lookup.display_name': 'Pesquisa de DNS',
	'tool.web-dns-lookup.tagline': 'Consulte registos DNS de qualquer domínio',
	'tool.web-dns-lookup.description': 'Consulte registos A, AAAA, MX, TXT via DNS-over-HTTPS.',
	'tool.web-dns-lookup.primary_keyword': 'pesquisa de dns',
	'tool.web-dns-lookup.meta_title': 'Consulta de Registos DNS — fmtly.dev',
	'tool.web-dns-lookup.meta_description': 'Pesquise registos DNS de qualquer domínio no navegador.',
	'tool.web-dns-lookup.operation': 'Consultar',

	// ── Accessibility Tools ──────────────────────────────────────────────────
	'tool.accessibility-contrast.display_name': 'Verificador de Contraste',
	'tool.accessibility-contrast.tagline': 'Verifique rácios de contraste WCAG para cores de texto',
	'tool.accessibility-contrast.description':
		'Verifique a conformidade WCAG AA/AAA localmente no seu dispositivo.',
	'tool.accessibility-contrast.primary_keyword': 'verificador de contraste wcag',
	'tool.accessibility-contrast.meta_title': 'Verificador de Contraste WCAG — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'Verifique contrastes de cores WCAG no navegador. Seguro e local.',
	'tool.accessibility-contrast.operation': 'Verificar',

	'tool.accessibility-color-blindness.display_name': 'Simulador de Daltonismo',
	'tool.accessibility-color-blindness.tagline': 'Simule como as cores aparecem para daltónicos',
	'tool.accessibility-color-blindness.description':
		'Simule Protanopia, Deuteranopia e Tritanopia para cores ou imagens.',
	'tool.accessibility-color-blindness.primary_keyword': 'simulador de daltonismo',
	'tool.accessibility-color-blindness.meta_title': 'Simulador de Daltonismo — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description': 'Simule vários tipos de daltonismo no navegador.',
	'tool.accessibility-color-blindness.operation': 'Simular',

	'tool.accessibility-font-size.display_name': 'Verificador de Tamanho de Letra',
	'tool.accessibility-font-size.tagline': 'Verifique requisitos WCAG para tamanho e contraste',
	'tool.accessibility-font-size.description':
		'Verifique se os textos cumprem os rácios de contraste para letras grandes.',
	'tool.accessibility-font-size.primary_keyword': 'verificador de tamanho de letra wcag',
	'tool.accessibility-font-size.meta_title': 'Verificador de Tamanho de Letra WCAG — fmtly.dev',
	'tool.accessibility-font-size.meta_description': 'Valide tamanhos de letra padrão WCAG no navegador.',
	'tool.accessibility-font-size.operation': 'Verificar',

	'ui.cancel': 'Cancelar',
	'ui.close': 'Fechar',
	'ui.confirm': 'Confirmar',
	'ui.copy_link': 'Copiar Link',
	'ui.share': 'Partilhar',
	'ui.share_url_copied': 'URL de partilha copiado',
	'ui.tool_count.one': '1 ferramenta',
	'ui.tool_count.other': '{count} ferramentas',
	'ui.tree.collapse': 'Comprimir',
	'ui.tree.expand': 'Expandir',
	'ui.tree.root': 'Raiz',
	'ui.tree.summary': '{keyCount} chaves · {valueCount} valores · prof. {maxDepth}',
	'ui.validity.empty': 'Vazio',
	'ui.validity.error_at': 'Linha {line}, Col {column}: {message}',
	'ui.validity.invalid': '{language} inválido',
	'ui.validity.valid': '{language} válido',
	'ui.xpath.no_results': 'Sem resultados. Tente outra expressão.',
	'ui.xpath.placeholder': 'Cole XML à esquerda, depois execute uma expressão XPath.',
	'ui.xpath.results_count.one': '1 resultado',
	'ui.xpath.results_count.other': '{count} resultados',
	'ui.validator.syntax': 'Sintaxe',
	'ui.validator.schema': 'Schema',
	'ui.validator.issue': 'problema',
	'ui.validator.issues': 'problemas',
	'ui.validator.first_issue': 'Primeiro problema',
	'ui.validator.repair_json': 'Reparar JSON',
	'ui.validator.schema_title': 'Schema JSON',
	'ui.validator.schema_standard': 'Draft-07+ via AJV',
	'ui.validator.paste_schema_placeholder': 'Cole Schema JSON aqui…',
	'ui.validator.paste_json': 'Cole JSON para validar',
	'ui.validator.paste_schema': 'Cole um Schema JSON para validar contra',
	'ui.validator.validating_schema': 'A validar schema…',
	'ui.validator.schema_invalid': 'Schema inválido',
	'ui.validator.json_matches_schema': 'JSON corresponde ao schema',
	'ui.validator.schema_validation_failed': 'Falha na validação do schema',
	'ui.validator.no_syntax_errors': 'Nenhum erro de sintaxe encontrado.',
	'ui.validator.json_matches_current_schema': 'JSON corresponde ao schema atual.',
	'ui.validator.schema_match': 'Correspondência de schema',
	'ui.validator.valid_json': 'JSON válido',
	'ui.validator.explanation_must_satisfy': 'deve satisfazer',
	'ui.validator.data_error_pos': 'Erro de dados na linha {line}, coluna {column}',
	'ui.share_url': 'URL de Partilha',
	'ui.format_xml': 'Formatar XML',
	'ui.minify_xml': 'Minificar XML',
	'ui.format_beautify': 'Formatar / Embelezar',
	'ui.minify': 'Minificar',
	'ui.repair_json': 'Reparar JSON',
	'ui.expand_all': 'Expandir tudo',
	'ui.collapse_all': 'Comprimir tudo',
	'ui.expand_to_depth': 'Expandir até à profundidade {depth}',
	switch_to_tab: 'Mudar para aba {index}',
	switch_to_xml_tab: 'Mudar para aba XML {index}',
	use_cases: 'Casos de Uso',
	faq: 'FAQ',
	'ui.validator.schema_error_pos': 'Erro de schema na linha {line}, coluna {column}',
	'ui.validator.syntax_error_pos': 'Erro de sintaxe na linha {line}, coluna {column}',
	'ui.validator.line_col_label': 'Linha {line}, coluna {column}',
	'ui.validator.well_formed': 'Bem formado',
	'ui.validator.invalid_xml': 'XML inválido',
	'ui.validator.loading_editor': 'A carregar editor…',
	'ui.validator.xml_paste_hint': 'Cole ou digite XML para validar.',
	'ui.validator.xml_validation_desc':
		'Valida a boa formação: tags não fechadas, elementos desajustados, etc.',
	'ui.validator.xml_success_title': 'XML Bem Formado',
	'ui.validator.xml_success_desc':
		'Nenhum erro de sintaxe detetado. O documento está bem formado.',
	'ui.validator.error_count.one': '1 erro encontrado',
	'ui.validator.error_count.other': '{count} erros encontrados',
	'ui.toast.file_loaded': 'Ficheiro carregado: {name}',
	'ui.toast.clipboard_xml': 'XML da Área de Transferência',
	'ui.toast.pasted_xml': 'XML colado da área de transferência',
	'ui.toast.xml_file_types': 'Apenas .xml, .svg, .xhtml, .xsd, .wsdl e .txt são suportados',
	'ui.aria.xml_input_panel': 'Painel de entrada XML',
	'ui.aria.xml_output_panel': 'Painel de saída XML',
	'ui.aria.xml_workspace_tabs': 'Abas do workspace XML',
	'ui.aria.xpath_panel': 'Painel de consulta XPath',
	'ui.aria.xml_validator': 'Validador XML',
	'ui.convert.to_json': '→ JSON',
	'ui.convert.to_yaml': '→ YAML',
	'ui.convert.to_csv': '→ CSV',
	'ui.convert.to_xml': '→ XML',
	'ui.convert.to_toml': '→ TOML',
	'ui.convert.to_markdown': '→ MD',
	'ui.query.jsonpath': 'JSONPath',
	'ui.query.jmespath': 'JMESPath',
	'ui.query.xpath': 'XPath',
	'ui.query.stats.chars': 'carat.',
	'ui.query.stats.lines': 'linhas',	
	'ui.query.result': 'resultado',	'ui.query.results': 'resultados',	'ui.query.history': 'Histórico',	'ui.query.sample_query': 'Consulta de exemplo',	'ui.query.guide': 'Guia',	'ui.query.query': 'Consulta',	'ui.query.running': 'A executar consulta…',	'ui.query.empty_input': 'Cole JSON à esquerda para avaliar a consulta.',	'ui.query.empty_query': 'Introduza uma consulta para ver resultados.',	'ui.query.error_fallback': 'Falha na consulta',	'ui.query.copy_error': 'Não foi possível copiar a saída',	'ui.status.processing': 'A processar…',	'ui.status.waiting_output': 'A saída aparecerá aqui',	'ui.output.controls.spaces': 'espaços',	'ui.output.stats.chars': 'carat.',	'ui.output.stats.lines': 'linhas',	'ui.output.stats.keys': 'chaves',	'ui.output.stats.objects': 'objetos',	'ui.output.stats.arrays': 'arrays',	'ui.output.stats.strings': 'strings',	'ui.output.stats.values': 'valores',	'ui.output.stats.numbers': 'números',	'ui.output.stats.booleans': 'booleanos',	'ui.output.stats.nulls': 'nulos',	'ui.output.stats.depth': 'prof.',	'ui.output.stats.size_in': 'ent.',	'ui.output.stats.size_out': 'saí.',	'ui.output.original': 'Original',	'ui.output.minified': 'Minificado',	'ui.output.saved': 'poupado',	'ui.output.meta.minified': 'MINIFICADO',	'ui.output.actions.wrap': 'Ajustar texto',	'ui.output.actions.compare': 'Comparar',	'ui.output.actions.copy_json': 'Copiar como JSON',	'ui.output.actions.copy_js': 'Copiar como Objeto JS',	'ui.output.actions.copy_python': 'Copiar como Dict Python',	'ui.output.actions.copy_escaped': 'Copiar com escape',	'ui.output.actions.copy': 'Copiar',	'ui.output.actions.download': 'Download',	'ui.output.compare.input': 'Entrada',	'ui.output.compare.output': 'Saída',	'ui.output.error.invalid_title': 'JSON Inválido',	'ui.output.controls.indent': 'Recuo',	'ui.output.controls.tab': 'Tabulação',	'ui.output.controls.sort_keys': 'Ordenar chaves',	'ui.output.controls.clean': 'Limpar',	'ui.output.controls.clean_nulls': 'Remover valores nulos',	'ui.output.controls.clean_strings': 'Remover strings vazias',	'ui.output.controls.clean_arrays': 'Remover arrays vazios',	'ui.output.controls.clean_objects': 'Remover objetos vazios',	'ui.output.controls.apply': 'Aplicar',	// ── FAQ e Casos de Uso das Ferramentas ──────────────────────────────────	'tool.json-formatter.faq.0.question': 'O que é a formatação JSON?',	'tool.json-formatter.faq.0.answer':		'A formatação JSON é o processo de organizar dados JSON com recuo e quebras de linha adequados para torná-los mais legíveis.',	'tool.json-formatter.faq.1.question': 'Posso personalizar o recuo?',	'tool.json-formatter.faq.1.answer':		'Sim! Pode escolher entre 2 espaços, 4 espaços ou tabulações para o recuo. O formatador preserva a estrutura original dos seus dados.',	'tool.json-formatter.faq.2.question': 'Esta ferramenta modifica os meus dados?',	'tool.json-formatter.faq.2.answer':		'Não. O formatador apenas altera a apresentação visual do seu JSON. Os dados reais, chaves e valores permanecem exatamente os mesmos.',	'tool.json-formatter.faq.3.question': 'Posso ordenar as chaves JSON?',	'tool.json-formatter.faq.3.answer':		'Sim! Ative a opção "Ordenar chaves" para ordenar alfabeticamente todas as chaves nos objetos. Isto é útil para comparar ficheiros.',	'tool.json-formatter.use_case.0':		'Depurar respostas de API formatando-as para melhor legibilidade',	'tool.json-formatter.use_case.1': 'Limpar ficheiros JSON minificados de fontes web',	'tool.json-formatter.use_case.2':		'Preparar ficheiros de configuração para controlo de versão com formatação consistente',	'tool.json-formatter.use_case.3':		'Tornar os dados JSON mais apresentáveis para documentação ou apresentações',	'tool.json-formatter.use_case.4':		'Validar e formatar JSON antes da edição manual ou revisão',	'tool.json-validator.faq.0.question': 'O que verifica a validação JSON?',	'tool.json-validator.faq.0.answer':		'A validação JSON verifica erros de sintaxe, incluindo colchetes ausentes, aspas desajustadas, vírgulas finais e chaves duplicadas.',	'tool.json-validator.faq.1.question':		'Qual é a diferença entre validação de sintaxe e de esquema?',	'tool.json-validator.faq.1.answer':		'A validação de sintaxe garante que o JSON está bem formado. A validação de esquema verifica se a estrutura corresponde a regras predefinidas (tipos de dados, campos obrigatórios).',	'tool.json-validator.faq.2.question': 'Posso validar JSON com comentários?',	'tool.json-validator.faq.2.answer':		'Sim! Este validador suporta o formato JSON5, que permite comentários (// e /* */) e aspas simples.',	'tool.json-validator.use_case.0':		'Verificar respostas de API antes de as processar na sua aplicação',	'tool.json-validator.use_case.1':		'Verificar ficheiros de configuração antes da implementação para evitar erros',	'tool.json-validator.use_case.2': 'Validar dados JSON enviados pelo utilizador em formulários ou uploads',	'tool.json-validator.use_case.3': 'Depurar erros de análise JSON no seu código',	'tool.json-validator.use_case.4':		'Garantir a integridade dos dados ao transferir JSON entre sistemas',	'tool.crypto-hmac.faq.0.question': 'O que é HMAC?',	'tool.crypto-hmac.faq.0.answer':		'HMAC (Hash-based Message Authentication Code) utiliza uma função de hash e uma chave secreta para garantir a integridade dos dados e a autenticação.',	'tool.crypto-hmac.faq.1.question': 'Que algoritmos são suportados?',	'tool.crypto-hmac.faq.1.answer':		'Esta ferramenta suporta vários algoritmos HMAC, incluindo SHA-256, SHA-512, SHA-1, MD5 e mais. SHA-256 é recomendado.',	'tool.crypto-hmac.use_case.0': 'Verificar a integridade e autenticidade de pedidos de API',	'tool.crypto-hmac.use_case.1': 'Criar tokens seguros para gestão de sessões',	'tool.crypto-hmac.use_case.2': 'Gerar assinaturas de webhook para serviços como GitHub ou Stripe',	'tool.crypto-hmac.use_case.3':		'Implementar autenticação de mensagens na comunicação entre microserviços',	'tool.crypto-hmac.use_case.4': 'Criar somas de verificação para verificação de ficheiros',	'tool.json-minifier.faq.0.question': 'O que é a minificação JSON?',	'tool.json-minifier.faq.0.answer':		'A minificação JSON é o processo de remover todos os caracteres desnecessários (espaços, quebras de linha) para reduzir o tamanho do ficheiro sem alterar a função.',	'tool.json-minifier.faq.1.question': 'A minificação afeta a funcionalidade JSON?',	'tool.json-minifier.faq.1.answer':		'Não. A minificação apenas remove caracteres de formatação visual. A estrutura de dados real permanece exatamente a mesma.',	'tool.json-minifier.faq.2.question': 'Quando devo usar JSON minificado?',	'tool.json-minifier.faq.2.answer':		'Use JSON minificado em ambientes de produção e respostas de API para poupar largura de banda e acelerar transferências.',	'tool.json-minifier.use_case.0': 'Reduzir o tamanho do ficheiro para respostas de API e melhorar tempos de carregamento',	'tool.json-minifier.use_case.1': 'Otimizar ficheiros de configuração JSON para implementações de produção',	'tool.json-minifier.use_case.2': 'Comprimir dados antes de armazenar em bases de dados',	'tool.json-minifier.use_case.3':		'Minimizar o uso de largura de banda ao transmitir JSON em redes',	'tool.json-minifier.use_case.4': 'Preparar ficheiros JSON para incorporação em código HTML ou JS',	'tool.json-to-yaml.faq.0.question': 'O que é a conversão JSON para YAML?',	'tool.json-to-yaml.faq.0.answer':		'A conversão JSON para YAML transforma dados JSON no formato YAML, que é mais legível por humanos e comum para configurações.',	'tool.json-to-yaml.faq.1.question': 'A conversão é sem perdas?',	'tool.json-to-yaml.faq.1.answer':		'Sim! A conversão preserva todos os dados e estrutura. JSON e YAML podem representar as mesmas estruturas de dados.',	'tool.json-to-yaml.use_case.0':		'Converter ficheiros de configuração JSON para YAML para melhor legibilidade',	'tool.json-to-yaml.use_case.1': 'Criar manifestos Kubernetes a partir de definições JSON',	'tool.json-to-yaml.use_case.2': 'Migrar configurações de aplicações do formato JSON para YAML',	'tool.json-to-yaml.use_case.3': 'Gerar ficheiros YAML para configurações de pipelines CI/CD',	'tool.json-to-toml.faq.0.question': 'O que é a conversão JSON para TOML?',	'tool.json-to-toml.faq.0.answer':		'Converte JSON para TOML, um formato de configuração otimizado para humanos.',	'tool.json-to-toml.faq.1.question': 'Quando usar TOML em vez de JSON?',	'tool.json-to-toml.faq.1.answer':		'Para ficheiros que precisam de ser editados manualmente. TOML é mais intuitivo para humanos.',	'tool.json-to-toml.use_case.0': 'Converter package.json para pyproject.toml em projetos Python',	'tool.json-to-toml.use_case.1': 'Criar ficheiros Cargo.toml a partir de configurações JSON',	'tool.json-to-toml.use_case.2':		'Migrar definições de aplicações para o formato TOML para melhor manutenção',	'tool.json-to-markdown.faq.0.question': 'O que é a conversão JSON para tabela Markdown?',	'tool.json-to-markdown.faq.0.answer':		'Esta ferramenta converte arrays de dados JSON em formato de tabela Markdown, ideal para ficheiros README.',	'tool.json-to-markdown.faq.1.question': 'Que estruturas JSON são suportadas?',	'tool.json-to-markdown.faq.1.answer':		'A ferramenta funciona melhor com arrays de objetos. Objetos aninhados são achatados.',	'tool.json-to-markdown.use_case.0': 'Criar tabelas de dados para ficheiros README e documentação',	'tool.json-to-markdown.use_case.1': 'Converter exemplos de resposta de API em tabelas de documentação',	'tool.json-to-markdown.use_case.2':		'Gerar tabelas Markdown a partir de dados de planilhas exportados como JSON',	'tool.json-to-markdown.use_case.3': 'Exibir opções de configuração na documentação do projeto',	'tool.json-to-csv.faq.0.question': 'O que é a conversão JSON para CSV?',	'tool.json-to-csv.faq.0.answer':		'Transforma dados JSON estruturados num formato CSV plano, ideal para Excel ou Google Sheets.',	'tool.json-to-csv.faq.1.question': 'Que estrutura JSON é ideal?',	'tool.json-to-csv.faq.1.answer':		'Arrays planos de objetos com as mesmas chaves. Estas tornam-se cabeçalhos.',	'tool.json-to-csv.use_case.0': 'Exportar dados de API para Excel para análise de negócio',	'tool.json-to-csv.use_case.1': 'Converter exportações JSON de base de dados para CSV',	'tool.json-to-csv.use_case.2':		'Preparar datasets JSON para treino de machine learning em formato CSV',	'tool.json-to-csv.use_case.3': 'Gerar dados de relatórios para aplicações de planilhas',	'tool.json-jsonpath.faq.0.question': 'O que é JSONPath?',	'tool.json-jsonpath.faq.0.answer':		'Uma linguagem de consulta para JSON, semelhante ao XPath para XML. Utiliza a notação de ponto para navegar.',	'tool.json-jsonpath.faq.1.question': 'Como funciona a sintaxe?',	'tool.json-jsonpath.faq.1.answer':		'$.store.book[*].title navega pela estrutura. $ é a raiz, . acede a propriedades.',	'tool.json-jsonpath.faq.2.question': 'O que posso fazer com os resultados?',	'tool.json-jsonpath.faq.2.answer':		'Extrair valores, filtrar, calcular e transformar dados. Útil para testes de API e pipelines.',	'tool.json-jsonpath.use_case.0': 'Extrair campos específicos de respostas de API',	'tool.json-jsonpath.use_case.1': 'Filtrar e consultar grandes conjuntos de dados JSON',	'tool.json-jsonpath.use_case.2': 'Testar respostas de API em testes automatizados',	'tool.json-jsonpath.use_case.3': 'Validar estrutura e conteúdo JSON em pipelines de dados',	'tool.json-jmespath.faq.0.question': 'O que é JMESPath?',	'tool.json-jmespath.faq.0.answer':		'Uma linguagem de consulta poderosa para transformar JSON. Oferece filtros avançados e agregações.',	'tool.json-jmespath.faq.1.question': 'Diferença para JSONPath?',	'tool.json-jmespath.faq.1.answer':		'JMESPath é mais poderoso a remodelar (reshaping) dados em novas estruturas.',	'tool.json-jmespath.faq.2.question': 'Operações comuns?',	'tool.json-jmespath.faq.2.answer':		'Filtrar com [?condição], ordenar com sort_by() e agregar com length() ou sum().',	'tool.json-jmespath.use_case.0': 'Transformar respostas de API para estruturas necessárias',	'tool.json-jmespath.use_case.1': 'Filtrar e remodelar dados de documentos complexos',	'tool.json-jmespath.use_case.2': 'Extrair informação específica de estruturas aninhadas',	'tool.json-jmespath.use_case.3': 'Limpar respostas JSON para consumo no frontend',	// Diff JSON	'tool.json-diff.display_name': 'Diff JSON',	'tool.json-diff.tagline': 'Compare dois documentos JSON',	'tool.json-diff.description':		'Uma ferramenta de comparação semântica poderosa. Deteta diferenças em chaves e valores independentemente da ordem.',	'tool.json-diff.primary_keyword': 'json diff tool',	'tool.json-diff.meta_title': 'JSON Diff - Comparar JSON Online',	'tool.json-diff.meta_description':		'Compare dois documentos JSON semanticamente. Ignora diferenças de formatação.',	'tool.json-diff.operation': 'Comparar',	'tool.json-diff.faq.0.question': 'Ignora a ordem das chaves?',	'tool.json-diff.faq.0.answer': 'Sim. {"a":1, "b":2} e {"b":2, "a":1} são considerados idênticos.',	'tool.json-diff.faq.1.question': 'Ficheiros grandes?',	'tool.json-diff.faq.1.answer': 'Sim, a comparação é feita de forma eficiente localmente no browser.',	'tool.json-diff.faq.2.question': 'Seguro?',	'tool.json-diff.faq.2.answer': 'Absolutamente. Tudo acontece localmente, nenhuns dados saem do browser.',	'tool.json-diff.use_case.0': 'Comparar versões de API para detetar regressões',	'tool.json-diff.use_case.1': 'Depurar alterações de configuração em ficheiros de produção',	'tool.json-diff.use_case.2': 'Rever conflitos de merge de git em manifestos JSON',	'tool.json-diff.use_case.3': 'Encontrar discrepâncias entre exportações de base de dados',	// ── FAQ e Casos de Uso de XML ──────────────────────────────────────────	'tool.xml-formatter.faq.0.question': 'O que é a formatação XML?',	'tool.xml-formatter.faq.0.answer':		'Organização de código XML com recuo correto para melhor legibilidade e manutenção.',	'tool.xml-formatter.faq.1.question': 'Personalizar recuo?',	'tool.xml-formatter.faq.1.answer': 'Sim, escolha entre 2, 4 espaços ou tabulações.',	'tool.xml-formatter.faq.2.question': 'Preserva comentários?',	'tool.xml-formatter.faq.2.answer': 'Sim, o formatador mantém todos os comentários nas posições originais.',	'tool.xml-formatter.use_case.0': 'Tornar ficheiros XML legíveis para revisão de código',	'tool.xml-formatter.use_case.1': 'Limpar XML minificado de APIs web',	'tool.xml-formatter.use_case.2': 'Padronizar formatação XML em equipas',	'tool.xml-formatter.use_case.3': 'Depurar estruturas XML via hierarquia visual',	'tool.xml-formatter.use_case.4': 'Preparar ficheiros XML para controlo de versão',	'tool.xml-validator.faq.0.question': 'O que verifica a validação XML?',	'tool.xml-validator.faq.0.answer':		'Verifica a boa formação (tags, atributos, codificação) e conformidade com especificações XML.',	'tool.xml-validator.faq.1.question': 'Diferença entre bem formado e válido?',	'tool.xml-validator.faq.1.answer':		'Bem formado segue regras de sintaxe. Válido segue ALÉM DISSO um esquema DTD ou XML específico.',	'tool.xml-validator.faq.2.question': 'Corrigir erros?',	'tool.xml-validator.faq.2.answer':		'O validador mostra linha e coluna. Clique no erro para detalhes.',	'tool.xml-validator.use_case.0': 'Validar respostas de API antes do processamento',	'tool.xml-validator.use_case.1': 'Verificar ficheiros de configuração antes da implementação',	'tool.xml-validator.use_case.2': 'Verificar importações de dados XML de terceiros',	'tool.xml-validator.use_case.3': 'Depurar problemas de análise em ambientes de dev',	'tool.xml-validator.use_case.4': 'Garantir conformidade XML antes da submissão',	'tool.xml-to-json.faq.0.question': 'Como funciona a conversão XML para JSON?',	'tool.xml-to-json.faq.0.answer':		'Mapeia elementos para objetos e atributos para chaves. Elementos repetidos tornam-se arrays.',	'tool.xml-to-json.faq.1.question': 'É reversível?',	'tool.xml-to-json.faq.1.answer':		'Maioritariamente sim, mas podem perder-se comentários ou ordens específicas de atributos.',	'tool.xml-to-json.faq.2.question': 'Atributos XML em JSON?',	'tool.xml-to-json.faq.2.answer':		'São convertidos por padrão com o prefixo "@" nas propriedades JSON.',	'tool.xml-to-json.use_case.0': 'Converter respostas de API SOAP para apps modernas',	'tool.xml-to-json.use_case.1': 'Processar configurações XML em apps JS',	'tool.xml-to-json.use_case.2': 'Migrar dados XML legados para sistemas JSON modernos',	'tool.xml-to-json.use_case.3': 'Extrair dados de sitemaps XML',	'tool.xml-to-json.use_case.4': 'Converter feeds RSS para consumo em apps móveis',	'tool.json-to-xml.faq.0.question': 'O que é a conversão JSON para XML?',	'tool.json-to-xml.faq.0.answer':		'Converte dados JSON em XML para compatibilidade com sistemas que requerem XML.',	'tool.json-to-xml.faq.1.question': 'Arrays?',	'tool.json-to-xml.faq.1.answer': 'Tornam-se múltiplos elementos XML com o mesmo nome de tag.',	'tool.json-to-xml.faq.2.question': 'Caracteres especiais?',	'tool.json-to-xml.faq.2.answer': 'São escapados automaticamente conforme o padrão XML (&, <, > etc.).',	'tool.json-to-xml.use_case.0': 'Criar sitemaps XML a partir de dados JSON',	'tool.json-to-xml.use_case.1': 'Gerar feeds RSS/Atom a partir de conteúdo JSON',	'tool.json-to-xml.use_case.2': 'Converter respostas de API para sistemas legados',	'tool.json-to-xml.use_case.3': 'Criar ficheiros de configuração Java a partir de JSON',	'tool.json-to-xml.use_case.4': 'Gerar envelopes SOAP a partir de payloads JSON',	'tool.xml-to-yaml.faq.0.question': 'Porquê converter XML para YAML?',	'tool.xml-to-yaml.faq.0.answer': 'YAML é mais legível e fácil de editar manualmente.',	'tool.xml-to-yaml.faq.1.question': 'Atributos XML?',	'tool.xml-to-yaml.faq.1.answer': 'Normalmente tornam-se pares chave-valor dentro do elemento YAML.',	'tool.xml-to-yaml.faq.2.question': 'XML aninhado complexo?',	'tool.xml-to-yaml.faq.2.answer': 'Sim, o conversor processa estruturas de qualquer profundidade.',	'tool.xml-to-yaml.use_case.0': 'Converter configurações Spring Framework para YAML',	'tool.xml-to-yaml.use_case.1': 'Migrar scripts de build para YAML mais legível',	'tool.xml-to-yaml.use_case.2': 'Criar recursos Kubernetes a partir de templates XML',	'tool.xml-to-yaml.use_case.3': 'Processar documentos XML para documentação',	'tool.xml-to-yaml.use_case.4': 'Converter dados XML para Ansible playbooks',	'tool.xml-to-csv.faq.0.question': 'Como funciona XML para CSV?',	'tool.xml-to-csv.faq.0.answer':		'Extrai elementos repetidos como linhas e filhos como colunas.',	'tool.xml-to-csv.faq.1.question': 'Que estruturas?',	'tool.xml-to-csv.faq.1.answer': 'XML com dados tipo registo funciona melhor.',	'tool.xml-to-csv.use_case.0': 'Extrair relatórios XML para formatos de folha de cálculo',	'tool.xml-to-csv.use_case.1': 'Converter exportações de BD para análise',	'tool.xml-to-csv.use_case.2': 'Analisar logs XML no Excel',	'tool.xml-to-csv.use_case.3': 'Migrar catálogos de produtos de XML para CSV',	'tool.xml-to-csv.use_case.4': 'Analisar respostas de API XML em formato tabular',	'tool.xml-minifier.faq.0.question': 'O que é a minificação XML?',	'tool.xml-minifier.faq.0.answer': 'Remoção de caracteres desnecessários para reduzir o tamanho.',	'tool.xml-minifier.faq.1.question': 'Efeito no processamento?',	'tool.xml-minifier.faq.1.answer': 'Nenhum. Os parsers ignoram os espaços por padrão.',	'tool.xml-minifier.use_case.0': 'Reduzir tamanhos de ficheiro para APIs mais rápidas',	'tool.xml-minifier.use_case.1': 'Otimizar ficheiros XML para produção',	'tool.xml-minifier.use_case.2': 'Poupar largura de banda na transmissão de XML',	'tool.xml-minifier.use_case.3': 'Incorporar XML noutros documentos',	'tool.xml-xpath.faq.0.question': 'O que é XPath?',	'tool.xml-xpath.faq.0.answer': 'Linguagem de consulta para selecionar nós em XML.',	'tool.xml-xpath.faq.1.question': 'Possibilidades?',	'tool.xml-xpath.faq.1.answer': 'Seleção por nome, valor, posição ou conteúdo com condições.',	'tool.xml-xpath.use_case.0': 'Extrair dados de grandes documentos XML',	'tool.xml-xpath.use_case.1': 'Validar dados XML em suites de testes',	'tool.xml-xpath.use_case.2': 'Transformar dados XML via XSLT',	'tool.xml-xpath.use_case.3': 'Validar estruturas XML programaticamente',};

export default registryIt;
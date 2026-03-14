const registryRu: Record<string, string> = {
	// ── Categories ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'Форматируйте, проверяйте, сжимайте, сравнивайте и преобразуйте данные JSON. Все инструменты работают в браузере с обнаружением ошибок в реальном времени и визуализацией дерева.',
	'category.json.primary_keyword': 'инструменты json',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		'Форматируйте, проверяйте и преобразуйте XML-документы. Поддержка красивого вывода с настраиваемым отступом и конвертации в JSON или CSV.',
	'category.xml.primary_keyword': 'инструменты xml',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'Форматируйте, проверяйте и преобразуйте файлы YAML. Двустороннее преобразование с JSON и проверка синтаксиса с точным указанием места ошибки.',
	'category.yaml.primary_keyword': 'инструменты yaml',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'Анализируйте, форматируйте и преобразуйте данные CSV. Конвертация между CSV, JSON и другими табличными форматами с поддержкой пользовательских разделителей.',
	'category.csv.primary_keyword': 'инструменты csv',
	'category.css.display_name': 'CSS',
	'category.css.description':
		'Форматируйте, сжимайте и оптимизируйте таблицы стилей CSS. Приводите в порядок сжатый CSS или минимизируйте форматированный CSS с опциями сортировки свойств.',
	'category.css.primary_keyword': 'инструменты css',
	'category.html.display_name': 'HTML',
	'category.html.description':
		'Форматируйте, сжимайте и проверяйте разметку HTML. Приводите в порядок сжатый HTML или удаляйте лишние пробелы для продакшена.',
	'category.html.primary_keyword': 'инструменты html',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'Форматируйте и сжимайте код JavaScript. Приводите в порядок сжатые скрипты или создавайте минимизированный вывод для быстрой загрузки страниц.',
	'category.js.primary_keyword': 'инструменты javascript',
	'category.encode.display_name': 'Кодировщики и декодировщики',
	'category.encode.description':
		'Кодируйте и декодируйте Base64, URL, HTML-сущности и многое другое. Все операции выполняются мгновенно в вашем браузере — данные не отправляются на сервер.',
	'category.encode.primary_keyword': 'инструменты кодирования декодирования',
	'category.escape.display_name': 'Инструменты экранирования',
	'category.escape.description':
		'Экранируйте и разэкранируйте строки для JSON, HTML, XML, URL и регулярных выражений. Безопасная обработка спецсимволов в разных форматах.',
	'category.escape.primary_keyword': 'инструменты экранирования строк',
	'category.diff.display_name': 'Сравнение и Diff',
	'category.diff.description':
		'Сравнивайте два файла или структуры данных параллельно. Подсветка добавлений и удалений с поддержкой JSON, текста и структурированного сравнения.',
	'category.diff.primary_keyword': 'инструменты сравнения diff',
	'category.generate.display_name': 'Генераторы',
	'category.generate.description':
		'Генерируйте определения типов, JSON Schema, таблицы Markdown, тестовые данные и другие утилиты для разработчиков прямо в браузере.',
	'category.generate.primary_keyword': 'генераторы кода',
	'category.text.display_name': 'Текст и строки',
	'category.text.description':
		'Форматируйте, манипулируйте, переворачивайте, сортируйте и анализируйте текст. Включает счетчики слов, оценку читабельности и конвертацию в markdown.',
	'category.text.primary_keyword': 'инструменты для текста',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Форматируйте, проверяйте и преобразуйте файлы TOML. Безопасная конвертация TOML в JSON и YAML.',
	'category.toml.primary_keyword': 'инструменты toml',
	'category.number.display_name': 'Числа и математика',
	'category.number.description':
		'Форматируйте числа, вычисляйте проценты, используйте научную нотацию и мгновенно конвертируйте значения между системами счисления.',
	'category.number.primary_keyword': 'инструменты для чисел',
	'category.color.display_name': 'Инструменты для цвета',
	'category.color.description':
		'Проверяйте коэффициенты контрастности, создавайте цветовые палитры, генерируйте градиенты CSS и симулируйте дальтонизм.',
	'category.color.primary_keyword': 'инструменты для цвета',
	'category.crypto.display_name': 'Криптография и безопасность',
	'category.crypto.description':
		'Генерируйте подписи HMAC, анализируйте сложность паролей, создавайте безопасные случайные строки и ULID — все на стороне клиента с помощью Web Crypto API.',
	'category.crypto.primary_keyword': 'инструменты криптографии и безопасности',
	'category.web.display_name': 'Веб и сеть',
	'category.web.description':
		'Разбирайте URL, декодируйте строки User-Agent, проверяйте заголовки CORS, ищите типы MIME, определяйте геолокацию по IP и проверяйте записи DNS.',
	'category.web.primary_keyword': 'веб инструменты онлайн',
	'category.code.display_name': 'Форматирование кода',
	'category.code.description':
		'Локальное форматирование CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL и Markdown. Конвертация команд cURL в fetch() или Axios.',
	'category.code.primary_keyword': 'форматирование кода онлайн',
	'category.pdf.display_name': 'Инструменты PDF',
	'category.pdf.description': 'Просматривайте PDF-файлы и извлекайте текст — локально в вашем браузере.',
	'category.pdf.primary_keyword': 'инструменты pdf онлайн',
	'category.image.display_name': 'Инструменты для изображений',
	'category.image.description':
		'Изменяйте размер, конвертируйте, сжимайте и кодируйте изображения — локально в браузере. Без загрузки на сервер.',
	'category.image.primary_keyword': 'инструменты для изображений онлайн',
	'category.file.display_name': 'Инструменты для файлов',
	'category.file.description':
		'Вычисляйте хэши файлов и выполняйте преобразование форматов между файлами.',
	'category.file.primary_keyword': 'инструменты для файлов онлайн',
	'category.qr.display_name': 'QR и штрих-коды',
	'category.qr.description':
		'Генерируйте настраиваемые QR-коды и декодируйте их из изображений — локально в вашем браузере.',
	'category.qr.primary_keyword': 'генератор qr кодов',
	'category.accessibility.display_name': 'Доступность',
	'category.accessibility.description':
		'Тестируйте контрастность цветов, симулируйте дальтонизм и проверяйте требования WCAG к размеру шрифта. Сделайте дизайн доступным для всех.',
	'category.accessibility.primary_keyword': 'инструменты доступности',

	// ── JSON tools ──────────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'Форматирование JSON',
	'tool.json-formatter.tagline': 'Форматируйте и украшайте JSON с настраиваемыми отступами',
	'tool.json-formatter.description':
		'Разбор и отображение JSON с настраиваемыми отступами — 2 пробела, 4 пробела или табуляция. Парсинг в реальном времени с точным указанием ошибок и деревом.',
	'tool.json-formatter.primary_keyword': 'форматирование json',
	'tool.json-formatter.meta_title': 'Форматирование и украшение JSON — fmtly.dev',
	'tool.json-formatter.meta_description':
		'Мгновенно форматируйте JSON в браузере. Настраиваемые отступы, обнаружение ошибок и дерево. Данные не покидают ваше устройство.',
	'tool.json-formatter.operation': 'Форматировать',

	'tool.json-validator.display_name': 'Валидатор JSON',
	'tool.json-validator.tagline': 'Проверка синтаксиса и структуры JSON',
	'tool.json-validator.description':
		'Проверка синтаксиса JSON в реальном времени. Мгновенно находит пропущенные скобки, незакрытые строки и дубликаты ключей. Поддержка JSON5 и запятых в конце.',
	'tool.json-validator.primary_keyword': 'валидатор json',
	'tool.json-validator.meta_title': 'Валидатор JSON — fmtly.dev',
	'tool.json-validator.meta_description':
		'Мгновенная валидация JSON в браузере. Обнаружение синтаксических ошибок с указанием строки и столбца.',
	'tool.json-validator.operation': 'Проверить',

	'tool.json-minifier.display_name': 'Сжатие JSON',
	'tool.json-minifier.tagline': 'Удаление пробелов и сжатие JSON до минимума',
	'tool.json-minifier.description':
		'Удаление всех лишних пробелов из JSON для получения максимально компактного результата. Сначала проверяет валидность, затем сжимает.',
	'tool.json-minifier.primary_keyword': 'минимизатор json',
	'tool.json-minifier.meta_title': 'Минимизатор JSON — fmtly.dev',
	'tool.json-minifier.meta_description':
		'Мгновенно сжимайте JSON в браузере. Удаляет все пробелы и переносы для компактного вывода.',
	'tool.json-minifier.operation': 'Сжать',

	'tool.json-to-yaml.display_name': 'JSON в YAML',
	'tool.json-to-yaml.tagline': 'Преобразование данных JSON в формат YAML',
	'tool.json-to-yaml.description':
		'Конвертация JSON в YAML с правильными отступами и форматированием. Обрабатывает вложенные объекты, массивы и все типы данных JSON.',
	'tool.json-to-yaml.primary_keyword': 'json в yaml',
	'tool.json-to-yaml.meta_title': 'Конвертер JSON в YAML — fmtly.dev',
	'tool.json-to-yaml.meta_description':
		'Конвертируйте JSON в YAML мгновенно в браузере. Обработка сложных структур без отправки данных.',
	'tool.json-to-yaml.operation': 'Конвертировать',

	'tool.json-to-toml.display_name': 'JSON в TOML',
	'tool.json-to-toml.tagline': 'Преобразование JSON в формат конфигурации TOML',
	'tool.json-to-toml.description':
		'Конвертация JSON в формат TOML, идеально подходящий для конфигурационных файлов. Поддержка вложенных таблиц и инлайновых массивов.',
	'tool.json-to-toml.primary_keyword': 'json в toml',
	'tool.json-to-toml.meta_title': 'Конвертер JSON в TOML — fmtly.dev',
	'tool.json-to-toml.meta_description':
		'Мгновенная конвертация JSON в TOML в браузере. Работает со сложными структурами и массивами.',
	'tool.json-to-toml.operation': 'Конвертировать',

	'tool.json-to-markdown.display_name': 'JSON в таблицу Markdown',
	'tool.json-to-markdown.tagline': 'Преобразование массивов JSON в таблицы Markdown',
	'tool.json-to-markdown.description':
		'Конвертируйте массивы объектов JSON в отформатированные таблицы Markdown. Автоматически определяет заголовки столбцов по ключам объектов.',
	'tool.json-to-markdown.primary_keyword': 'json в таблицу markdown',
	'tool.json-to-markdown.meta_title': 'Конвертер JSON в таблицу Markdown — fmtly.dev',
	'tool.json-to-markdown.meta_description':
		'Мгновенно преобразуйте JSON в таблицы Markdown. Автоопределение заголовков и чистое форматирование.',
	'tool.json-to-markdown.operation': 'Конвертировать',

	'tool.json-to-xml.display_name': 'JSON в XML',
	'tool.json-to-xml.tagline': 'Преобразование данных JSON в формат XML',
	'tool.json-to-xml.description':
		'Конвертация объектов и массивов JSON в корректный XML. Поддержка вложенных структур и настраиваемых имен корневых элементов.',
	'tool.json-to-xml.primary_keyword': 'json в xml',
	'tool.json-to-xml.meta_title': 'Конвертер JSON в XML — fmtly.dev',
	'tool.json-to-xml.meta_description':
		'Конвертируйте JSON в XML мгновенно в браузере. Генерирует чистый и валидный XML-код.',
	'tool.json-to-xml.operation': 'Конвертировать',

	'tool.json-to-csv.display_name': 'JSON в CSV',
	'tool.json-to-csv.tagline': 'Преобразование массивов JSON в формат CSV',
	'tool.json-to-csv.description':
		'Конвертация массивов объектов JSON в формат CSV. Автоматически извлекает заголовки столбцов из ключей объектов.',
	'tool.json-to-csv.primary_keyword': 'json в csv',
	'tool.json-to-csv.meta_title': 'Конвертер JSON в CSV — fmtly.dev',
	'tool.json-to-csv.meta_description':
		'Конвертируйте JSON в CSV в браузере. Идеально подходит для работы с таблицами и Excel.',
	'tool.json-to-csv.operation': 'Конвертировать',

	'tool.json-jsonpath.display_name': 'Запрос JSONPath',
	'tool.json-jsonpath.tagline': 'Запросы к данным JSON с помощью выражений JSONPath',
	'tool.json-jsonpath.description':
		'Выполняйте выражения JSONPath для извлечения конкретных значений. Поддержка фильтров, масок, рекурсии и всех стандартных операторов.',
	'tool.json-jsonpath.primary_keyword': 'запрос jsonpath',
	'tool.json-jsonpath.meta_title': 'Инструмент запросов JSONPath — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'Выполняйте запросы к JSON с помощью JSONPath в браузере. Поддержка всех операторов и функций.',
	'tool.json-jsonpath.operation': 'Запрос',

	'tool.json-jmespath.display_name': 'Запрос JMESPath',
	'tool.json-jmespath.tagline': 'Запросы и трансформация JSON с помощью JMESPath',
	'tool.json-jmespath.description':
		'Выполняйте выражения JMESPath для запроса и преобразования данных. Поддержка проекций, фильтров и функций JMESPath.',
	'tool.json-jmespath.primary_keyword': 'запрос jmespath',
	'tool.json-jmespath.meta_title': 'Инструмент запросов JMESPath — fmtly.dev',
	'tool.json-jmespath.meta_description':
		'Запрашивайте и трансформируйте JSON с помощью JMESPath. Мощный инструмент для фильтрации и маппинга.',
	'tool.json-jmespath.operation': 'Запрос',

	// ── XML tools ───────────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'Форматирование XML',
	'tool.xml-formatter.tagline': 'Красивое оформление XML с настраиваемыми отступами',
	'tool.xml-formatter.description':
		'Форматирование XML-документов (2 пробела, 4 пробела или табы). Валидация структуры и подсветка ошибок с указанием строк.',
	'tool.xml-formatter.primary_keyword': 'форматирование xml',
	'tool.xml-formatter.meta_title': 'Форматирование и украшение XML — fmtly.dev',
	'tool.xml-formatter.meta_description':
		'Приводите в порядок ваш XML-код в браузере. Поддержка отступов и валидации в реальном времени.',
	'tool.xml-formatter.operation': 'Форматировать',

	'tool.xml-validator.display_name': 'Валидатор XML',
	'tool.xml-validator.tagline': 'Проверка синтаксиса и структуры XML',
	'tool.xml-validator.description':
		'Проверка XML на соответствие правилам структуры. Находит незакрытые теги, ошибки в атрибутах и недопустимые символы.',
	'tool.xml-validator.primary_keyword': 'валидатор xml',
	'tool.xml-validator.meta_title': 'Валидатор XML — fmtly.dev',
	'tool.xml-validator.meta_description':
		'Проверьте ваш XML на ошибки синтаксиса онлайн. Точное указание проблемных строк.',
	'tool.xml-validator.operation': 'Проверить',

	'tool.xml-to-json.display_name': 'XML в JSON',
	'tool.xml-to-json.tagline': 'Преобразование XML-документов в формат JSON',
	'tool.xml-to-json.description':
		'Конвертация XML в JSON с автоматическим маппингом атрибутов и элементов. Обработка пространств имен и CDATA.',
	'tool.xml-to-json.primary_keyword': 'xml в json',
	'tool.xml-to-json.meta_title': 'Конвертер XML в JSON — fmtly.dev',
	'tool.xml-to-json.meta_description':
		'Преобразуйте XML в JSON мгновенно. Сохраняет структуру и атрибуты элементов.',
	'tool.xml-to-json.operation': 'Конвертировать',

	'tool.xml-to-yaml.display_name': 'XML в YAML',
	'tool.xml-to-yaml.tagline': 'Преобразование XML-документов в формат YAML',
	'tool.xml-to-yaml.description':
		'Преобразование XML в YAML с правильной иерархией. Обрабатывает атрибуты, текстовый контент и вложенные теги.',
	'tool.xml-to-yaml.primary_keyword': 'xml в yaml',
	'tool.xml-to-yaml.meta_title': 'Конвертер XML в YAML — fmtly.dev',
	'tool.xml-to-yaml.meta_description':
		'Мгновенная конвертация XML в YAML. Идеально для работы с конфигурациями в формате YAML.',
	'tool.xml-to-yaml.operation': 'Конвертировать',

	'tool.xml-to-csv.display_name': 'XML в CSV',
	'tool.xml-to-csv.tagline': 'Преобразование записей XML в формат CSV',
	'tool.xml-to-csv.description':
		'Извлекайте повторяющиеся элементы XML в строки CSV. Автоматически находит заголовки по именам тегов и атрибутов.',
	'tool.xml-to-csv.primary_keyword': 'xml в csv',
	'tool.xml-to-csv.meta_title': 'Конвертер XML в CSV — fmtly.dev',
	'tool.xml-to-csv.meta_description':
		'Конвертируйте XML данные в CSV таблицы для анализа в Excel или Google Таблицах.',
	'tool.xml-to-csv.operation': 'Конвертировать',

	'tool.xml-minifier.display_name': 'Сжатие XML',
	'tool.xml-minifier.tagline': 'Удаление лишних пробелов и сжатие XML',
	'tool.xml-minifier.description':
		'Удаляет все пробелы и комментарии для создания компактного кода. Снижает размер файла без потери данных.',
	'tool.xml-minifier.primary_keyword': 'минимизатор xml',
	'tool.xml-minifier.meta_title': 'Минимизатор XML — fmtly.dev',
	'tool.xml-minifier.meta_description':
		'Сжимайте ваш XML-код мгновенно. Удаление комментариев и лишних отступов.',
	'tool.xml-minifier.operation': 'Сжать',

	'tool.xml-xpath.display_name': 'Запрос XPath',
	'tool.xml-xpath.tagline': 'Запросы к данным XML с помощью XPath',
	'tool.xml-xpath.description':
		'Выполнение выражений XPath 1.0. Поддержка выбора элементов, фильтрации атрибутов и всех стандартных осей XPath.',
	'tool.xml-xpath.primary_keyword': 'запрос xpath',
	'tool.xml-xpath.meta_title': 'Инструмент запросов XPath — fmtly.dev',
	'tool.xml-xpath.meta_description':
		'Выполняйте поиск в XML с помощью XPath. Поддержка всех стандартных функций поиска.',
	'tool.xml-xpath.operation': 'Запрос',

	// ── YAML tools ──────────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'Форматирование YAML',
	'tool.yaml-formatter.tagline': 'Приведение YAML в порядок с правильными отступами',
	'tool.yaml-formatter.description':
		'Форматирование YAML с отступами в 2 пробела. Проверка синтаксиса и нормализация кавычек, якорей и порядка ключей.',
	'tool.yaml-formatter.primary_keyword': 'форматирование yaml',
	'tool.yaml-formatter.meta_title': 'Форматирование и украшение YAML — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		'Сделайте ваш YAML-код читаемым. Валидация и форматирование онлайн.',
	'tool.yaml-formatter.operation': 'Форматировать',

	'tool.yaml-validator.display_name': 'Валидатор YAML',
	'tool.yaml-validator.tagline': 'Проверка синтаксиса и структуры YAML',
	'tool.yaml-validator.description':
		'Проверка YAML на ошибки синтаксиса. Находит проблемы с отступами, дубликаты ключей и неверные символы.',
	'tool.yaml-validator.primary_keyword': 'валидатор yaml',
	'tool.yaml-validator.meta_title': 'Валидатор YAML — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Проверка YAML на валидность с указанием строк с ошибками.',
	'tool.yaml-validator.operation': 'Проверить',

	'tool.yaml-to-json.display_name': 'YAML в JSON',
	'tool.yaml-to-json.tagline': 'Преобразование YAML в формат JSON',
	'tool.yaml-to-json.description':
		'Конвертация YAML в отформатированный JSON. Поддержка якорей, алиасов и многодокументных YAML.',
	'tool.yaml-to-json.primary_keyword': 'yaml в json',
	'tool.yaml-to-json.meta_title': 'Конвертер YAML в JSON — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		'Преобразуйте YAML в JSON мгновенно в браузере. Поддержка сложных структур YAML.',
	'tool.yaml-to-json.operation': 'Конвертировать',

	'tool.yaml-to-xml.display_name': 'YAML в XML',
	'tool.yaml-to-xml.tagline': 'Преобразование YAML в формат XML',
	'tool.yaml-to-xml.description':
		'Конвертация YAML в валидный XML. Маппинг ключей в элементы и обработка массивов.',
	'tool.yaml-to-xml.primary_keyword': 'yaml в xml',
	'tool.yaml-to-xml.meta_title': 'Конвертер YAML в XML — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		'Быстрая конвертация YAML в XML онлайн. Без отправки данных на сервер.',
	'tool.yaml-to-xml.operation': 'Конвертировать',

	'tool.yaml-to-csv.display_name': 'YAML в CSV',
	'tool.yaml-to-csv.tagline': 'Преобразование массивов YAML в формат CSV',
	'tool.yaml-to-csv.description':
		'Конвертация списков объектов YAML в формат CSV. Извлекает заголовки и формирует таблицу.',
	'tool.yaml-to-csv.primary_keyword': 'yaml в csv',
	'tool.yaml-to-csv.meta_title': 'Конвертер YAML в CSV — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		'Преобразуйте списки YAML в CSV таблицы для анализа.',
	'tool.yaml-to-csv.operation': 'Конвертировать',

	'tool.yaml-to-toml.display_name': 'YAML в TOML',
	'tool.yaml-to-toml.tagline': 'Преобразование YAML в формат конфигурации TOML',
	'tool.yaml-to-toml.description':
		'Конвертация конфигураций YAML в формат TOML. Работает со вложенными структурами и типами данных.',
	'tool.yaml-to-toml.primary_keyword': 'yaml в toml',
	'tool.yaml-to-toml.meta_title': 'Конвертер YAML в TOML — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		'Переводите конфиги из YAML в TOML онлайн.',
	'tool.yaml-to-toml.operation': 'Конвертировать',

	'tool.yaml-diff.display_name': 'Сравнение YAML',
	'tool.yaml-diff.tagline': 'Сравнение двух YAML-документов параллельно',
	'tool.yaml-diff.description':
		'Сравните два YAML-файла и увидьте добавленные, удаленные или измененные части. Учитывает структуру YAML.',
	'tool.yaml-diff.primary_keyword': 'yaml diff',
	'tool.yaml-diff.meta_title': 'Инструмент сравнения YAML — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'Находите отличия в YAML файлах онлайн с удобной подсветкой.',
	'tool.yaml-diff.operation': 'Сравнить',

	// ── CSV tools ───────────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': 'CSV в JSON',
	'tool.csv-to-json.tagline': 'Преобразование данных CSV в массив JSON',
	'tool.csv-to-json.description':
		'Конвертация CSV с заголовками в массив объектов JSON. Динамическое определение типов чисел и булевых значений.',
	'tool.csv-to-json.primary_keyword': 'csv в json',
	'tool.csv-to-json.meta_title': 'Конвертер CSV в JSON — fmtly.dev',
	'tool.csv-to-json.meta_description':
		'Превратите CSV таблицу в JSON массив онлайн.',
	'tool.csv-to-json.operation': 'Конвертировать',

	'tool.csv-to-xml.display_name': 'CSV в XML',
	'tool.csv-to-xml.tagline': 'Преобразование данных CSV в формат XML',
	'tool.csv-to-xml.description':
		'Преобразование файлов CSV в валидный XML. Маппинг заголовков столбцов в имена тегов.',
	'tool.csv-to-xml.primary_keyword': 'csv в xml',
	'tool.csv-to-xml.meta_title': 'Конвертер CSV в XML — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		'Быстрая конвертация таблиц CSV в формат XML.',
	'tool.csv-to-xml.operation': 'Конвертировать',

	'tool.csv-to-yaml.display_name': 'CSV в YAML',
	'tool.csv-to-yaml.tagline': 'Преобразование данных CSV в формат YAML',
	'tool.csv-to-yaml.description':
		'Преобразование CSV файлов в массивы объектов YAML. Имена столбцов становятся ключами YAML.',
	'tool.csv-to-yaml.primary_keyword': 'csv в yaml',
	'tool.csv-to-yaml.meta_title': 'Конвертер CSV в YAML — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		'Переводите данные из CSV в читаемый формат YAML.',
	'tool.csv-to-yaml.operation': 'Конвертировать',

	'tool.csv-to-html.display_name': 'CSV в таблицу HTML',
	'tool.csv-to-html.tagline': 'Преобразование данных CSV в таблицу HTML',
	'tool.csv-to-html.description':
		'Конвертация CSV файлов в отформатированные HTML-таблицы (теги table, tr, td).',
	'tool.csv-to-html.primary_keyword': 'csv в html таблицу',
	'tool.csv-to-html.meta_title': 'Конвертер CSV в таблицу HTML — fmtly.dev',
	'tool.csv-to-html.meta_description':
		'Создайте HTML-таблицу из CSV данных для вставки на сайт.',
	'tool.csv-to-html.operation': 'Конвертировать',

	'tool.csv-formatter.display_name': 'Форматирование CSV',
	'tool.csv-formatter.tagline': 'Форматирование и нормализация данных CSV',
	'tool.csv-formatter.description':
		'Очистка и форматирование CSV с едиными разделителями и кавычками. Нормализация пробелов.',
	'tool.csv-formatter.primary_keyword': 'форматирование csv',
	'tool.csv-formatter.meta_title': 'Инструмент форматирования CSV — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'Приведите ваши CSV файлы к единому стандарту онлайн.',
	'tool.csv-formatter.operation': 'Форматировать',

	'tool.csv-validator.display_name': 'Валидатор CSV',
	'tool.csv-validator.tagline': 'Проверка структуры и синтаксиса CSV',
	'tool.csv-validator.description':
		'Проверка CSV на консистентность столбцов, кавычек и кодировки. Показывает строки с ошибками.',
	'tool.csv-validator.primary_keyword': 'валидатор csv',
	'tool.csv-validator.meta_title': 'Валидатор CSV — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Проверьте ваш CSV файл на ошибки структуры.',
	'tool.csv-validator.operation': 'Проверить',

	// ── Text tools ──────────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Счетчик слов',
	'tool.text-word-counter.tagline': 'Подсчет слов, символов и предложений в тексте',
	'tool.text-word-counter.description':
		'Считайте слова, знаки, предложения и абзацы. Показывает время чтения и среднюю длину слова.',
	'tool.text-word-counter.primary_keyword': 'счетчик слов',
	'tool.text-word-counter.meta_title': 'Счетчик слов и знаков — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Подсчет статистики текста онлайн. Время чтения и количество предложений.',
	'tool.text-word-counter.operation': 'Посчитать',

	'tool.text-readability.display_name': 'Анализ читабельности',
	'tool.text-readability.tagline': 'Измерение индексов удобочитаемости текста',
	'tool.text-readability.description':
		'Расчет индексов Флеша-Кинкайда, Ганнинга-Фога и других. Помогает адаптировать контент под аудиторию.',
	'tool.text-readability.primary_keyword': 'анализ читабельности',
	'tool.text-readability.meta_title': 'Анализатор читабельности текста — fmtly.dev',
	'tool.text-readability.meta_description':
		'Узнайте, насколько легко читается ваш текст.',
	'tool.text-readability.operation': 'Анализировать',

	'tool.text-line-sorter.display_name': 'Сортировка строк',
	'tool.text-line-sorter.tagline': 'Сортировка строк текста по алфавиту или длине',
	'tool.text-line-sorter.description':
		'Сортировка по алфавиту, числам или длине. Поддержка порядка (А-Я / Я-А) и игнорирование регистра.',
	'tool.text-line-sorter.primary_keyword': 'сортировщик строк',
	'tool.text-line-sorter.meta_title': 'Сортировка строк онлайн — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Быстро отсортируйте список строк по любому критерию.',
	'tool.text-line-sorter.operation': 'Сортировать',

	'tool.text-deduplicate.display_name': 'Удаление дубликатов',
	'tool.text-deduplicate.tagline': 'Удаление повторяющихся строк из текста',
	'tool.text-deduplicate.description':
		'Удаляет все дублирующиеся строки. Можно учитывать или игнорировать регистр. Сохраняет порядок строк.',
	'tool.text-deduplicate.primary_keyword': 'удалить дубликаты строк',
	'tool.text-deduplicate.meta_title': 'Удаление дубликатов строк онлайн — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Очистите ваш список от повторов мгновенно.',
	'tool.text-deduplicate.operation': 'Удалить дубликаты',

	'tool.text-whitespace.display_name': 'Очистка пробелов',
	'tool.text-whitespace.tagline': 'Удаление лишних пробелов и нормализация отступов',
	'tool.text-whitespace.description':
		'Удаляет лишние пробелы, табы и пустые строки. Заменяет несколько пробелов на один.',
	'tool.text-whitespace.primary_keyword': 'очистка лишних пробелов',
	'tool.text-whitespace.meta_title': 'Очистка пробелов в тексте — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Нормализуйте пробелы и уберите лишние отступы в тексте.',
	'tool.text-whitespace.operation': 'Очистить',

	'tool.text-markdown-to-html.display_name': 'Markdown в HTML',
	'tool.text-markdown-to-html.tagline': 'Преобразование Markdown в формат HTML',
	'tool.text-markdown-to-html.description':
		'Конвертирует Markdown в HTML. Поддержка заголовков, списков, таблиц, блоков кода и ссылок.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown в html',
	'tool.text-markdown-to-html.meta_title': 'Конвертер Markdown в HTML — fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Быстрое преобразование MD в HTML-код онлайн.',
	'tool.text-markdown-to-html.operation': 'Конвертировать',

	'tool.text-html-to-markdown.display_name': 'HTML в Markdown',
	'tool.text-html-to-markdown.tagline': 'Преобразование HTML в формат Markdown',
	'tool.text-html-to-markdown.description':
		'Преобразование HTML-кода в чистый Markdown. Поддержка списков, таблиц и форматирования.',
	'tool.text-html-to-markdown.primary_keyword': 'html в markdown',
	'tool.text-html-to-markdown.meta_title': 'Конвертер HTML в Markdown — fmtly.dev',
	'tool.text-html-to-markdown.meta_description':
		'Переведите HTML разметку в Markdown онлайн.',
	'tool.text-html-to-markdown.operation': 'Конвертировать',

	'tool.text-reverser.display_name': 'Переворот текста',
	'tool.text-reverser.tagline': 'Инверсия текста, слов или строк',
	'tool.text-reverser.description':
		'Переворачивает текст посимвольно, по словам или по строкам. Режим "зеркало".',
	'tool.text-reverser.primary_keyword': 'перевернуть текст',
	'tool.text-reverser.meta_title': 'Инверсия текста онлайн — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Зеркально отобразите любой текст или список.',
	'tool.text-reverser.operation': 'Перевернуть',

	// ── Code tools ──────────────────────────────────────────────────────────
	'tool.code-css.display_name': 'Форматирование CSS',
	'tool.code-css.tagline': 'Красивое оформление и форматирование CSS',
	'tool.code-css.description':
		'Форматирование CSS с отступами и сортировкой свойств. Поддержка стиля Prettier.',
	'tool.code-css.primary_keyword': 'форматирование css',
	'tool.code-css.meta_title': 'Форматирование CSS онлайн — fmtly.dev',
	'tool.code-css.meta_description':
		'Приведите ваши стили CSS в порядок. Настраиваемая ширина строк.',
	'tool.code-css.operation': 'Форматировать',

	'tool.code-scss.display_name': 'Форматирование SCSS',
	'tool.code-scss.tagline': 'Форматирование файлов SCSS',
	'tool.code-scss.description':
		'Чистое форматирование SCSS. Поддержка вложенных правил, миксинов и переменных.',
	'tool.code-scss.primary_keyword': 'форматирование scss',
	'tool.code-scss.meta_title': 'Форматирование SCSS — fmtly.dev',
	'tool.code-scss.meta_description':
		'Форматируйте файлы SCSS локально в браузере.',
	'tool.code-scss.operation': 'Форматировать',

	'tool.code-less.display_name': 'Форматирование LESS',
	'tool.code-less.tagline': 'Форматирование файлов LESS',
	'tool.code-less.description':
		'Чистое форматирование LESS с поддержкой вложенности и переменных.',
	'tool.code-less.primary_keyword': 'форматирование less',
	'tool.code-less.meta_title': 'Форматирование LESS — fmtly.dev',
	'tool.code-less.meta_description':
		'Валидация и форматирование кода LESS онлайн.',
	'tool.code-less.operation': 'Форматировать',

	'tool.code-html.display_name': 'Форматирование HTML',
	'tool.code-html.tagline': 'Красивое оформление разметки HTML',
	'tool.code-html.description':
		'Форматирование HTML с правильной иерархией тегов. Обрабатывает атрибуты и встроенный CSS/JS.',
	'tool.code-html.primary_keyword': 'форматирование html',
	'tool.code-html.meta_title': 'Форматирование HTML онлайн — fmtly.dev',
	'tool.code-html.meta_description':
		'Сделайте ваш HTML-код чистым и читаемым.',
	'tool.code-html.operation': 'Форматировать',

	'tool.code-javascript.display_name': 'Форматирование JavaScript',
	'tool.code-javascript.tagline': 'Форматирование и украшение JS кода',
	'tool.code-javascript.description':
		'Форматирование JS (стиль Prettier). Поддержка ES2022+, JSX и модулей.',
	'tool.code-javascript.primary_keyword': 'форматирование javascript',
	'tool.code-javascript.meta_title': 'Форматирование JavaScript — fmtly.dev',
	'tool.code-javascript.meta_description':
		'Форматируйте ваш JS код онлайн с поддержкой современного синтаксиса.',
	'tool.code-javascript.operation': 'Форматировать',

	'tool.code-typescript.display_name': 'Форматирование TypeScript',
	'tool.code-typescript.tagline': 'Форматирование кода TypeScript',
	'tool.code-typescript.description':
		'Форматирование TS с поддержкой дженериков, декораторов и аннотаций типов.',
	'tool.code-typescript.primary_keyword': 'форматирование typescript',
	'tool.code-typescript.meta_title': 'Форматирование TypeScript — fmtly.dev',
	'tool.code-typescript.meta_description':
		'Чистое форматирование TypeScript кода онлайн.',
	'tool.code-typescript.operation': 'Форматировать',

	'tool.code-graphql.display_name': 'Форматирование GraphQL',
	'tool.code-graphql.tagline': 'Форматирование схем и запросов GraphQL',
	'tool.code-graphql.description':
		'Красивое оформление схем и запросов с правильными отступами.',
	'tool.code-graphql.primary_keyword': 'форматирование graphql',
	'tool.code-graphql.meta_title': 'Форматирование GraphQL — fmtly.dev',
	'tool.code-graphql.meta_description':
		'Форматируйте ваши запросы и мутации GraphQL.',
	'tool.code-graphql.operation': 'Форматировать',

	'tool.code-markdown.display_name': 'Форматирование Markdown',
	'tool.code-markdown.tagline': 'Приведение в порядок документов Markdown',
	'tool.code-markdown.description':
		'Нормализация стилей заголовков, отступов списков и выравнивания таблиц.',
	'tool.code-markdown.primary_keyword': 'форматирование markdown',
	'tool.code-markdown.meta_title': 'Форматирование Markdown онлайн — fmtly.dev',
	'tool.code-markdown.meta_description':
		'Приведите ваши .md файлы к единому стилю.',
	'tool.code-markdown.operation': 'Форматировать',

	'tool.code-curl-to-fetch.display_name': 'cURL в Fetch',
	'tool.code-curl-to-fetch.tagline': 'Конвертация команд cURL в JavaScript fetch()',
	'tool.code-curl-to-fetch.description':
		'Преобразование cURL запросов в нативный JavaScript код с использованием fetch API.',
	'tool.code-curl-to-fetch.primary_keyword': 'конвертер curl в fetch',
	'tool.code-curl-to-fetch.meta_title': 'Конвертер cURL в Fetch — fmtly.dev',
	'tool.code-curl-to-fetch.meta_description':
		'Быстро переведите cURL запрос в JS код.',
	'tool.code-curl-to-fetch.operation': 'Конвертировать',

	'tool.code-curl-to-axios.display_name': 'cURL в Axios',
	'tool.code-curl-to-axios.tagline': 'Конвертация команд cURL в запросы Axios',
	'tool.code-curl-to-axios.description':
		'Преобразование cURL команд в код JavaScript с использованием библиотеки Axios.',
	'tool.code-curl-to-axios.primary_keyword': 'конвертер curl в axios',
	'tool.code-curl-to-axios.meta_title': 'Конвертер cURL в Axios — fmtly.dev',
	'tool.code-curl-to-axios.meta_description':
		'Генерация Axios запросов на основе команд cURL.',
	'tool.code-curl-to-axios.operation': 'Конвертировать',

	// ── Color tools ──────────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Конвертер цветов',
	'tool.color-converter.tagline': 'Перевод цветов между HEX, RGB, HSL и другими',
	'tool.color-converter.description':
		'Конвертация между HEX, RGB, RGBA, HSL, HSLA и именованными цветами CSS.',
	'tool.color-converter.primary_keyword': 'конвертер цветов',
	'tool.color-converter.meta_title': 'Конвертер цветов HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Мгновенная конвертация цветовых моделей онлайн.',
	'tool.color-converter.operation': 'Конвертировать',

	'tool.color-contrast.display_name': 'Проверка контраста',
	'tool.color-contrast.tagline': 'Проверка коэффициента контрастности по WCAG',
	'tool.color-contrast.description':
		'Расчет контраста между двумя цветами для соответствия стандартам доступности AA и AAA.',
	'tool.color-contrast.primary_keyword': 'проверка контраста цветов',
	'tool.color-contrast.meta_title': 'Проверка контраста WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Убедитесь, что ваш текст хорошо читается на выбранном фоне.',
	'tool.color-contrast.operation': 'Проверить',

	// ── Crypto tools ─────────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'Генератор HMAC',
	'tool.crypto-hmac.tagline': 'Создание подписей HMAC с использованием SHA',
	'tool.crypto-hmac.description':
		'Генерация подписей HMAC (SHA-256, SHA-384, SHA-512) на стороне клиента.',
	'tool.crypto-hmac.primary_keyword': 'генератор hmac',
	'tool.crypto-hmac.meta_title': 'Генератор HMAC SHA-256/512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		'Создание HMAC подписей онлайн через Web Crypto API.',
	'tool.crypto-hmac.operation': 'Сгенерировать',

	'tool.crypto-password-strength.display_name': 'Сложность пароля',
	'tool.crypto-password-strength.tagline': 'Анализ надежности и энтропии пароля',
	'tool.crypto-password-strength.description':
		'Оценка сложности пароля, поиск паттернов и расчет времени взлома.',
	'tool.crypto-password-strength.primary_keyword': 'проверка сложности пароля',
	'tool.crypto-password-strength.meta_title': 'Проверка надежности пароля — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		'Анализируйте ваши пароли онлайн. Данные не передаются на сервер.',
	'tool.crypto-password-strength.operation': 'Анализировать',

	'tool.crypto-ulid.display_name': 'Генератор ULID',
	'tool.crypto-ulid.tagline': 'Генерация уникальных сортируемых идентификаторов',
	'tool.crypto-ulid.description':
		'Генерация ULID — сортируемых во времени, URL-безопасных идентификаторов.',
	'tool.crypto-ulid.primary_keyword': 'генератор ulid',
	'tool.crypto-ulid.meta_title': 'Генератор ULID онлайн — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		'Создавайте ULID мгновенно в вашем браузере.',
	'tool.crypto-ulid.operation': 'Сгенерировать',

	'tool.crypto-random-string.display_name': 'Случайная строка',
	'tool.crypto-random-string.tagline': 'Генерация криптографически стойких строк',
	'tool.crypto-random-string.description':
		'Генерация безопасных случайных строк с выбором длины и набора символов.',
	'tool.crypto-random-string.primary_keyword': 'генератор случайных строк',
	'tool.crypto-random-string.meta_title': 'Генератор случайных строк — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		'Безопасная генерация строк с использованием Web Crypto API.',
	'tool.crypto-random-string.operation': 'Сгенерировать',

	// ── Diff tools ───────────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Сравнение текста',
	'tool.diff-text.tagline': 'Сравнение двух текстов и выделение отличий',
	'tool.diff-text.description':
		'Построчное и пословное сравнение. Наглядная подсветка изменений.',
	'tool.diff-text.primary_keyword': 'сравнение текстов',
	'tool.diff-text.meta_title': 'Инструмент сравнения текста — fmtly.dev',
	'tool.diff-text.meta_description':
		'Найдите отличия в двух фрагментах текста онлайн.',
	'tool.diff-text.operation': 'Сравнить',

	// ── Encode tools ─────────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Кодировщик Base64',
	'tool.encode-base64.tagline': 'Кодирование и декодирование строк Base64',
	'tool.encode-base64.description':
		'Перевод текста в Base64 и обратно. Поддержка URL-безопасного варианта.',
	'tool.encode-base64.primary_keyword': 'кодировщик base64',
	'tool.encode-base64.meta_title': 'Base64 кодирование и декодирование — fmtly.dev',
	'tool.encode-base64.meta_description':
		'Онлайн инструмент для работы с форматом Base64.',
	'tool.encode-base64.operation': 'Кодировать / Декодировать',

	'tool.encode-url.display_name': 'Кодировщик URL',
	'tool.encode-url.tagline': 'Кодирование и декодирование URL-строк',
	'tool.encode-url.description':
		'Процентное кодирование (percent-encoding) для URL компонентов согласно RFC 3986.',
	'tool.encode-url.primary_keyword': 'кодировщик url',
	'tool.encode-url.meta_title': 'URL Encode & Decode — fmtly.dev',
	'tool.encode-url.meta_description':
		'Закодируйте или расшифруйте параметры URL онлайн.',
	'tool.encode-url.operation': 'Кодировать / Декодировать',

	'tool.encode-html.display_name': 'Кодировщик HTML',
	'tool.encode-html.tagline': 'Кодирование и декодирование сущностей HTML',
	'tool.encode-html.description':
		'Преобразование специальных символов в HTML-сущности (&amp;, &lt;, &gt; и др.).',
	'tool.encode-html.primary_keyword': 'html кодировщик',
	'tool.encode-html.meta_title': 'HTML Entity Encoder & Decoder — fmtly.dev',
	'tool.encode-html.meta_description':
		'Безопасно преобразуйте спецсимволы HTML.',
	'tool.encode-html.operation': 'Кодировать / Декодировать',

	'tool.encode-html-entities.display_name': 'Справочник HTML сущностей',
	'tool.encode-html-entities.tagline': 'Просмотр и поиск кодов сущностей HTML',
	'tool.encode-html-entities.description':
		'Поиск по всем HTML-сущностям: десятичные, HEX и именованные формы.',
	'tool.encode-html-entities.primary_keyword': 'справочник html сущностей',
	'tool.encode-html-entities.meta_title': 'Таблица HTML сущностей — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Найдите нужный HTML код символа мгновенно.',
	'tool.encode-html-entities.operation': 'Поиск',

	'tool.encode-unicode.display_name': 'Анализатор Unicode',
	'tool.encode-unicode.tagline': 'Анализ кодовых точек Unicode в тексте',
	'tool.encode-unicode.description':
		'Разбор текста на кодовые точки с представлением в HEX, CSS, JS и UTF-8.',
	'tool.encode-unicode.primary_keyword': 'анализатор unicode',
	'tool.encode-unicode.meta_title': 'Unicode Анализатор — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Узнайте подробную информацию о каждом символе в тексте.',
	'tool.encode-unicode.operation': 'Анализировать',

	// ── Escape tools ─────────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'Экранирование JSON',
	'tool.escape-json.tagline': 'Экранирование и разэкранирование строк JSON',
	'tool.escape-json.description':
		'Обработка спецсимволов для использования внутри строковых значений JSON.',
	'tool.escape-json.primary_keyword': 'экранирование json строк',
	'tool.escape-json.meta_title': 'JSON Escape & Unescape — fmtly.dev',
	'tool.escape-json.meta_description':
		'Экранируйте кавычки и переносы строк для JSON онлайн.',
	'tool.escape-json.operation': 'Экранировать / Разэкранировать',

	// ── File tools ───────────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'Хэш файла',
	'tool.file-hash.tagline': 'Расчет MD5, SHA-1, SHA-256 и SHA-512 для файлов',
	'tool.file-hash.description':
		'Вычисление контрольных сумм файлов полностью в браузере. Данные не выгружаются.',
	'tool.file-hash.primary_keyword': 'калькулятор хэша файлов',
	'tool.file-hash.meta_title': 'Рассчитать хэш файла MD5/SHA — fmtly.dev',
	'tool.file-hash.meta_description':
		'Проверьте целостность вашего файла с помощью хэш-суммы.',
	'tool.file-hash.operation': 'Хэшировать',

	// ── Generate tools ───────────────────────────────────────────────────────
	'tool.generate-uuid.display_name': 'Генератор UUID',
	'tool.generate-uuid.tagline': 'Генерация случайных UUID (v4)',
	'tool.generate-uuid.description':
		'Создание UUID версии 4 согласно RFC 4122. Одиночная или массовая генерация.',
	'tool.generate-uuid.primary_keyword': 'генератор uuid',
	'tool.generate-uuid.meta_title': 'Генератор UUID v4 онлайн — fmtly.dev',
	'tool.generate-uuid.meta_description':
		'Создавайте уникальные идентификаторы UUID v4 мгновенно.',
	'tool.generate-uuid.operation': 'Сгенерировать',

	// ── Image tools ──────────────────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Сжатие изображений',
	'tool.image-compressor.tagline': 'Сжатие картинок без потери качества',
	'tool.image-compressor.description':
		'Оптимизация JPEG, PNG и WebP прямо в браузере. Настройка качества и предпросмотр.',
	'tool.image-compressor.primary_keyword': 'сжать изображение онлайн',
	'tool.image-compressor.meta_title': 'Сжатие картинок онлайн — fmtly.dev',
	'tool.image-compressor.meta_description':
		'Уменьшите размер ваших фото без потери четкости.',
	'tool.image-compressor.operation': 'Сжать',

	// ── Number tools ─────────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Форматирование чисел',
	'tool.number-formatter.tagline': 'Числа с разделителями согласно локали',
	'tool.number-formatter.description':
		'Форматирование с разделителями тысяч и валютой. Поддержка научной нотации.',
	'tool.number-formatter.primary_keyword': 'форматирование чисел',
	'tool.number-formatter.meta_title': 'Числовой формат онлайн — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Сделайте большие числа читаемыми с помощью разделителей.',
	'tool.number-formatter.operation': 'Форматировать',

	'tool.number-roman.display_name': 'Римские цифры',
	'tool.number-roman.tagline': 'Перевод между римскими цифрами и целыми числами',
	'tool.number-roman.description':
		'Конвертация арабских чисел в римские и обратно (от 1 до 3999).',
	'tool.number-roman.primary_keyword': 'конвертер римских цифр',
	'tool.number-roman.meta_title': 'Перевод в римские цифры — fmtly.dev',
	'tool.number-roman.meta_description':
		'Быстро переведите число в римский формат.',
	'tool.number-roman.operation': 'Конвертировать',

	'tool.number-percentage.display_name': 'Процентный калькулятор',
	'tool.number-percentage.tagline': 'Расчет процентов, роста и падения',
	'tool.number-percentage.description':
		'Вычисление процентного изменения, доли от общего и обратных процентов.',
	'tool.number-percentage.primary_keyword': 'калькулятор процентов',
	'tool.number-percentage.meta_title': 'Процентный калькулятор — fmtly.dev',
	'tool.number-percentage.meta_description':
		'Решайте любые задачи с процентами онлайн.',
	'tool.number-percentage.operation': 'Рассчитать',

	'tool.number-scientific.display_name': 'Научная нотация',
	'tool.number-scientific.tagline': 'Перевод чисел в научный формат и обратно',
	'tool.number-scientific.description':
		'Конвертация в экспоненциальную форму записи с мантиссой и порядком.',
	'tool.number-scientific.primary_keyword': 'конвертер научной нотации',
	'tool.number-scientific.meta_title': 'Научная нотация онлайн — fmtly.dev',
	'tool.number-scientific.meta_description':
		'Перевод чисел в формат с экспонентой.',
	'tool.number-scientific.operation': 'Конвертировать',

	'tool.number-statistics.display_name': 'Статистика',
	'tool.number-statistics.tagline': 'Расчет среднего, медианы, моды и др.',
	'tool.number-statistics.description':
		'Описательная статистика для списка чисел: стандартное отклонение, дисперсия, квартили.',
	'tool.number-statistics.primary_keyword': 'статистический калькулятор',
	'tool.number-statistics.meta_title': 'Расчет статистики онлайн — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Быстро получите основные статистические показатели набора данных.',
	'tool.number-statistics.operation': 'Рассчитать',

	'tool.number-matrix.display_name': 'Матричный калькулятор',
	'tool.number-matrix.tagline': 'Операции над матрицами',
	'tool.number-matrix.description':
		'Сложение, умножение, транспонирование, определитель и обратная матрица любого размера.',
	'tool.number-matrix.primary_keyword': 'матричный калькулятор',
	'tool.number-matrix.meta_title': 'Калькулятор матриц онлайн — fmtly.dev',
	'tool.number-matrix.meta_description':
		'Выполняйте сложные матричные вычисления в браузере.',
	'tool.number-matrix.operation': 'Рассчитать',

	'tool.number-unit-converter.display_name': 'Конвертер единиц',
	'tool.number-unit-converter.tagline': 'Перевод между различными единицами измерения',
	'tool.number-unit-converter.description':
		'Длина, вес, температура, объем, площадь, скорость и др. Метрическая и имперская системы.',
	'tool.number-unit-converter.primary_keyword': 'конвертер единиц измерения',
	'tool.number-unit-converter.meta_title': 'Конвертер величин онлайн — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Удобный перевод любых физических величин.',
	'tool.number-unit-converter.operation': 'Конвертировать',

	// ── PDF tools ─────────────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'Просмотр PDF',
	'tool.pdf-viewer.tagline': 'Просмотр и извлечение текста из PDF файлов',
	'tool.pdf-viewer.description':
		'Локальный просмотр PDF и копирование текста. Файлы не загружаются на сервер.',
	'tool.pdf-viewer.primary_keyword': 'просмотр pdf онлайн',
	'tool.pdf-viewer.meta_title': 'PDF Viewer & Text Extractor — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'Открывайте PDF и копируйте из него текст прямо в браузере.',
	'tool.pdf-viewer.operation': 'Просмотреть',

	// ── QR tools ──────────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'Генератор QR-кодов',
	'tool.qr-generator.tagline': 'Создание настраиваемых QR-кодов',
	'tool.qr-generator.description':
		'Генерация QR из текста, ссылок или контактов. Настройка цветов и скачивание в PNG/SVG.',
	'tool.qr-generator.primary_keyword': 'создать qr код онлайн',
	'tool.qr-generator.meta_title': 'Генератор QR кодов — fmtly.dev',
	'tool.qr-generator.meta_description':
		'Создайте свой QR код мгновенно и бесплатно.',
	'tool.qr-generator.operation': 'Сгенерировать',

	// ── TOML tools ────────────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'Форматирование TOML',
	'tool.toml-formatter.tagline': 'Форматирование и валидация конфигов TOML',
	'tool.toml-formatter.description':
		'Красивое оформление TOML с проверкой синтаксиса и подсветкой ошибок.',
	'tool.toml-formatter.primary_keyword': 'форматирование toml',
	'tool.toml-formatter.meta_title': 'TOML Formatter — fmtly.dev',
	'tool.toml-formatter.meta_description':
		'Приведите ваши .toml конфиги в порядок онлайн.',
	'tool.toml-formatter.operation': 'Форматировать',

	// ── Web tools ─────────────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'Анализатор URL',
	'tool.web-url-parser.tagline': 'Разбор и инспекция компонентов URL',
	'tool.web-url-parser.description':
		'Разбиение ссылки на протокол, хост, порт, путь, параметры и якорь.',
	'tool.web-url-parser.primary_keyword': 'анализатор url',
	'tool.web-url-parser.meta_title': 'URL Parser — fmtly.dev',
	'tool.web-url-parser.meta_description':
		'Узнайте всё о структуре любой ссылки.',
	'tool.web-url-parser.operation': 'Разобрать',

	'tool.web-user-agent.display_name': 'Анализ User-Agent',
	'tool.web-user-agent.tagline': 'Парсинг и декодирование строк User-Agent',
	'tool.web-user-agent.description':
		'Определение браузера, движка, ОС и типа устройства по строке агента.',
	'tool.web-user-agent.primary_keyword': 'user agent анализатор',
	'tool.web-user-agent.meta_title': 'User-Agent Parser — fmtly.dev',
	'tool.web-user-agent.meta_description':
		'Узнайте информацию об устройстве по строке User-Agent.',
	'tool.web-user-agent.operation': 'Разобрать',

	'tool.web-cors.display_name': 'Заголовки CORS',
	'tool.web-cors.tagline': 'Инспекция и разбор заголовков CORS',
	'tool.web-cors.description':
		'Справочник и объяснение заголовков Access-Control-Allow-Origin и др.',
	'tool.web-cors.primary_keyword': 'проверка cors заголовков',
	'tool.web-cors.meta_title': 'CORS Header Checker — fmtly.dev',
	'tool.web-cors.meta_description':
		'Разберитесь в настройках CORS политики вашего API.',
	'tool.web-cors.operation': 'Проверить',

	'tool.web-mime-types.display_name': 'Типы MIME',
	'tool.web-mime-types.tagline': 'Поиск типов MIME по расширению или имени',
	'tool.web-mime-types.description':
		'База всех IANA-зарегистрированных MIME типов с примерами.',
	'tool.web-mime-types.primary_keyword': 'поиск mime типа',
	'tool.web-mime-types.meta_title': 'MIME Type Lookup — fmtly.dev',
	'tool.web-mime-types.meta_description':
		'Узнайте Content-Type для любого расширения файла.',
	'tool.web-mime-types.operation': 'Поиск',

	'tool.web-ip-lookup.display_name': 'Поиск IP',
	'tool.web-ip-lookup.tagline': 'Геолокация и информация об IP-адресах',
	'tool.web-ip-lookup.description':
		'Определение страны, города, ASN и провайдера для IPv4 и IPv6.',
	'tool.web-ip-lookup.primary_keyword': 'узнать информацию по ip',
	'tool.web-ip-lookup.meta_title': 'IP Lookup & Geolocation — fmtly.dev',
	'tool.web-ip-lookup.meta_description':
		'Получите данные о любом IP адресе мгновенно.',
	'tool.web-ip-lookup.operation': 'Поиск',

	'tool.web-dns-lookup.display_name': 'DNS запрос',
	'tool.web-dns-lookup.tagline': 'Запрос DNS записей для любого домена',
	'tool.web-dns-lookup.description':
		'Проверка записей A, AAAA, MX, TXT, CNAME, NS через DNS over HTTPS.',
	'tool.web-dns-lookup.primary_keyword': 'dns lookup онлайн',
	'tool.web-dns-lookup.meta_title': 'DNS Lookup Tool — fmtly.dev',
	'tool.web-dns-lookup.meta_description':
		'Проверьте DNS записи любого сайта онлайн.',
	'tool.web-dns-lookup.operation': 'Поиск',

	// ── Accessibility tools ─────────────────────────────────────────────────────
	'tool.accessibility-contrast.display_name': 'Контрастность',
	'tool.accessibility-contrast.tagline':
		'Проверка контраста текста и фона по WCAG',
	'tool.accessibility-contrast.description':
		'Расчет коэффициента контрастности. Проверка соответствия AA/AAA для обычного и крупного текста.',
	'tool.accessibility-contrast.primary_keyword': 'проверка контрастности wcag',
	'tool.accessibility-contrast.meta_title': 'WCAG Contrast Checker — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'Сделайте ваш сайт доступным с помощью проверки контраста.',
	'tool.accessibility-contrast.operation': 'Проверить',
	'tool.accessibility-contrast.faq.0.question': 'Какой контраст необходим?',
	'tool.accessibility-contrast.faq.0.answer':
		'WCAG AA требует 4.5:1 для обычного текста и 3:1 для крупного. AAA требует 7:1 и 4.5:1 соответственно.',
	'tool.accessibility-contrast.use_case.0': 'Проверка доступности текста на сайте',
	'tool.accessibility-contrast.use_case.1': 'Выбор доступных цветовых пар',

	'tool.accessibility-color-blindness.display_name': 'Симулятор дальтонизма',
	'tool.accessibility-color-blindness.tagline':
		'Симуляция восприятия цветов при нарушениях цветового зрения',
	'tool.accessibility-color-blindness.description':
		'Как видят ваш дизайн люди с протанопией, дейтеранопией, тританопией и ахроматопсией.',
	'tool.accessibility-color-blindness.primary_keyword': 'симулятор дальтонизма онлайн',
	'tool.accessibility-color-blindness.meta_title': 'Color Blindness Simulator — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description':
		'Проверьте ваши цвета и изображения на доступность для дальтоников.',
	'tool.accessibility-color-blindness.operation': 'Симулировать',
	'tool.accessibility-color-blindness.faq.0.question':
		'Какие типы дальтонизма симулируются?',
	'tool.accessibility-color-blindness.faq.0.answer':
		'Протанопия (нет красного), дейтеранопия (нет зеленого), тританопия (нет синего) и ахроматопсия (полная цветовая слепота).',
	'tool.accessibility-color-blindness.use_case.0':
		'Тестирование UI на доступность для дальтоников',
	'tool.accessibility-color-blindness.use_case.1': 'Проверка инклюзивности цветовых палитр',

	'tool.accessibility-font-size.display_name': 'Размер шрифта',
	'tool.accessibility-font-size.tagline': 'Проверка соответствия размера и контраста текста требованиям WCAG',
	'tool.accessibility-font-size.description':
		'Анализ размера, веса и цвета шрифта для получения отчета о доступности.',
	'tool.accessibility-font-size.primary_keyword': 'проверка размера шрифта wcag',
	'tool.accessibility-font-size.meta_title': 'WCAG Font Size Checker — fmtly.dev',
	'tool.accessibility-font-size.meta_description':
		'Узнайте, считается ли ваш текст крупным по стандартам WCAG.',
	'tool.accessibility-font-size.operation': 'Проверить',
	'tool.accessibility-font-size.faq.0.question': 'Что такое крупный текст в WCAG?',
	'tool.accessibility-font-size.faq.0.answer':
		'Текст ≥18pt (24px) или ≥14pt (18.66px) жирным считается крупным и требует меньшего контраста.',
	'tool.accessibility-font-size.use_case.0': 'Проверка стилей текста на доступность',
	'tool.accessibility-font-size.use_case.1':
		'Определение требований WCAG для разных шрифтов',

	// ── UI strings ────────────────────────────────────────────────────────────
	'ui.actions.choose_sample': 'Выбрать…',
	'ui.actions.clear': 'Очистить',
	'ui.actions.copied': 'Скопировано',
	'ui.actions.copy': 'Копировать',
	'ui.actions.copy_all': 'Копировать всё',
	'ui.actions.download': 'Скачать',
	'ui.actions.fetch': 'Получить',
	'ui.actions.format': 'Форматировать',
	'ui.actions.load_url': 'Загрузить URL',
	'ui.actions.minify': 'Сжать',
	'ui.actions.run': 'Запустить',
	'ui.actions.running': 'Запуск…',
	'ui.actions.sample': 'Пример',
	'ui.actions.search': 'Поиск',
	'ui.actions.diff': 'Diff',
	'ui.actions.share': 'Поделиться',
	'ui.layout.tabs.output': 'Результат',
	'ui.layout.tabs.tree': 'Дерево',
	'ui.layout.placeholders.input': 'Ввод',
	'ui.layout.placeholders.output': 'Вывод',
	'ui.layout.placeholders.output_empty': 'Результат появится здесь',
	'ui.layout.placeholders.tree_empty': 'Вид дерева',
	'ui.layout.placeholders.paste_original': 'Вставьте оригинал сюда…',
	'ui.layout.placeholders.paste_modified': 'Вставьте измененную версию сюда…',
	'ui.diff.labels.original': 'Оригинал',
	'ui.diff.labels.modified': 'Изменено',
	'ui.diff.labels.input_panel': 'Панель ввода сравнения',
	'ui.diff.controls.ignore_order': 'Игнорировать порядок массивов',
	'ui.diff.controls.only_diffs': 'Только отличия',
	'ui.diff.controls.case_sensitive': 'Учитывать регистр',
	'ui.diff.controls.ignore_keys_placeholder': 'Игнорировать ключи: id, timestamp…',
	'ui.diff.controls.swap': ' Поменять местами',
	'ui.diff.controls.export': 'Экспорт',
	'ui.diff.controls.copy_patch': 'Копировать как JSON Patch',
	'ui.diff.controls.export_md': 'Скачать отчет Markdown',
	'ui.diff.controls.export_csv': 'Скачать CSV',
	'ui.diff.view.list': 'Вид списка',
	'ui.diff.view.monaco': 'Встроенный diff',
	'ui.diff.view.inline_toggle': 'Переключить вид',
	'ui.diff.summary.added': 'добавлено',
	'ui.diff.summary.removed': 'удалено',
	'ui.diff.summary.modified': 'изменено',
	'ui.diff.summary.similar': 'похоже',
	'ui.diff.summary.empty': 'Введите JSON в обе панели для сравнения',
	'ui.diff.summary.identical': 'Документы идентичны',
	'ui.diff.summary.difference': 'отличие',
	'ui.diff.summary.differences': 'отличия',
	'ui.diff.summary.found': 'найдено',
	'ui.diff.filter.placeholder': 'Фильтр по пути…',
	'ui.diff.types.root': '(корень)',
	'ui.diff.types.added': 'Добавлено',
	'ui.diff.types.removed': 'Удалено',
	'ui.diff.types.modified': 'Изменено',
	'ui.diff.types.unchanged': 'Без изменений',
	'ui.diff.actions.format': 'Форматировать',
	'ui.diff.actions.copy_value': 'Копировать значение',
	'ui.diff.actions.collapse': 'Свернуть',
	'ui.diff.actions.expand': 'Развернуть',
	'ui.diff.toast.format_error': 'Ошибка форматирования — неверный JSON',
	'ui.diff.toast.patch_success': 'JSON Patch скопирован',
	'ui.diff.toast.copy_value': 'Значение скопировано',
	'ui.diff.toast.share_copied': 'Ссылка скопирована',
	'ui.diff.meta.chars': 'симв.',
	'ui.diff.empty.hint': 'Вставьте JSON в панели выше, чтобы сравнить их.',
	'ui.diff.empty.load_sample': 'Загрузить пример',
	'ui.layout.placeholders.modified': 'Изменено',
	'ui.layout.aria.input_panel': 'Панель ввода',
	'ui.layout.aria.output_panel': 'Панель вывода',
	'ui.layout.aria.copy_output': 'Копировать результат',
	'ui.layout.aria.download_output': 'Скачать результат',
	'tool.output_placeholder': 'Результат появится здесь',
	'ui.actions.upload': 'Загрузить',
	'ui.actions.validate': 'Проверить',
	'ui.actions.wrap': 'Перенос строк',
	'ui.confirm.clear': 'Очистить текущий ввод {language}?',
	'ui.confirm.clear_description': 'Это действие нельзя отменить.',
	'ui.drop_files': 'Перетащите файлы .{extension}',
	'ui.drop_to_load': 'Отпустите для загрузки',
	'ui.history.clear_all': 'Очистить историю',
	'ui.history.clear_confirm': 'Очистить всю историю?',
	'ui.history.clear_description': 'Это действие нельзя отменить.',
	'ui.history.empty': 'История пуста',
	'ui.history.recent': 'Недавние',
	'ui.history.title': 'История',
	'ui.paste_here': 'Вставьте сюда…',
	'ui.paste_language_here': 'Вставьте {language} сюда…',
	'ui.placeholder.search_tools_count': 'Поиск среди {count}+ инструментов...',
	'ui.placeholder.url': 'https://example.com/data.json',
	'ui.placeholder.xpath': '//book[@available=\x27true\x27]',
	'ui.related_categories': 'Связанные категории',
	'ui.stats.info': '{encoding} · {size} · {lines} строк · глубина: {depth}',
	'ui.toast.copy_error': 'Ошибка копирования — проверьте разрешения браузера',
	'ui.toast.copy_success': 'Скопировано в буфер',
	'ui.toast.input_cleared': 'Ввод очищен',
	'ui.loaded_sample': 'Загружен пример {label}',
	'ui.toast.url_error': 'Не удалось получить — попробуйте вставить напрямую',
	'ui.json_viewer.toast_copy_path': 'Путь скопирован',
	'ui.tree.toast_copy_path': 'Путь скопирован',
	'ui.tree.toast.copied_path': 'Путь скопирован',
	'ui.toast.url_loaded': 'Загружено по ссылке',
	'share.link_size': 'Размер ссылки',
	'share.large_link_warning': 'Ссылка слишком длинная и может не работать в некоторых браузерах',
	'share.data_encoded_note':
		'Данные закодированы в URL и не отправляются на сервер.',
	'share.enter_input_first': 'Сначала введите данные, чтобы создать ссылку.',
	'ui.share_url_copied': 'Ссылка для общего доступа скопирована',
	'ui.copied': 'Скопировано',
	'ui.copy_link': 'Копировать ссылку',
	'ui.share': 'Поделиться',
	'ui.close': 'Закрыть',
	'ui.cancel': 'Отмена',
	'ui.confirm': 'Подтвердить',
	'ui.tool_count.one': '1 инструмент',
	'ui.tool_count.other': '{count} инструментов',
	'ui.tree.collapse': 'Свернуть',
	'ui.tree.expand': 'Развернуть',
	'ui.tree.root': 'Дерево',
	'ui.tree.summary': '{keyCount} ключей · {valueCount} значений · глубина {maxDepth}',
	'ui.validity.empty': 'Пусто',
	'ui.validity.error_at': 'Стр {line}, Кол {column}: {message}',
	'ui.validity.invalid': 'Некорректный {language}',
	'ui.validity.valid': 'Корректный {language}',
	'ui.xpath.no_results': 'Нет результатов. Проверьте выражение или структуру XML.',
	'ui.xpath.placeholder': 'Вставьте XML в левую панель, затем введите XPath.',
	'ui.xpath.results_count.one': '1 результат',
	'ui.xpath.results_count.other': '{count} результатов',
	'ui.validator.syntax': 'Синтаксис',
	'ui.validator.schema': 'Схема',
	'ui.validator.issue': 'ошибка',
	'ui.validator.issues': 'ошибок',
	'ui.validator.first_issue': 'Первая ошибка',
	'ui.validator.repair_json': 'Исправить JSON',
	'ui.validator.schema_title': 'JSON Schema',
	'ui.validator.schema_standard': 'Draft-07+ через AJV',
	'ui.validator.paste_schema_placeholder': 'Вставьте JSON Schema сюда…',
	'ui.validator.paste_json': 'Вставьте JSON для проверки',
	'ui.validator.paste_schema': 'Вставьте JSON Schema для проверки соответствия',
	'ui.validator.validating_schema': 'Валидация схемы…',
	'ui.validator.schema_invalid': 'Схема некорректна',
	'ui.validator.json_matches_schema': 'JSON соответствует схеме',
	'ui.validator.schema_validation_failed': 'Ошибка валидации по схеме',
	'ui.validator.no_syntax_errors': 'Синтаксических ошибок не найдено.',
	'ui.validator.json_matches_current_schema': 'JSON соответствует текущей схеме.',
	'ui.validator.schema_match': 'Схема совпадает',
	'ui.validator.valid_json': 'Валидный JSON',
	'ui.validator.explanation_must_satisfy': 'должен удовлетворять',
	'ui.validator.data_error_pos': 'Ошибка данных в строке {line}, столбце {column}',
	'ui.share_url': 'Ссылка для обмена',
	'ui.format_xml': 'Форматировать XML',
	'ui.minify_xml': 'Сжать XML',
	'ui.format_beautify': 'Форматировать / Украсить',
	'ui.minify': 'Сжать',
	'ui.repair_json': 'Исправить JSON',
	'ui.expand_all': 'Развернуть всё',
	'ui.collapse_all': 'Свернуть всё',
	'ui.expand_to_depth': 'Развернуть до уровня {depth}',
	switch_to_tab: 'Перейти на вкладку {index}',
	switch_to_xml_tab: 'Перейти на XML вкладку {index}',
	use_cases: 'Примеры использования',
	faq: 'Частые вопросы',
	'ui.validator.schema_error_pos': 'Ошибка схемы в строке {line}, столбце {column}',
	'ui.validator.syntax_error_pos': 'Синтаксическая ошибка в строке {line}, столбце {column}',
	'ui.validator.line_col_label': 'Строка {line}, столбец {column}',
	'ui.validator.well_formed': 'Структурно корректен',
	'ui.validator.invalid_xml': 'Некорректный XML',
	'ui.validator.loading_editor': 'Загрузка редактора…',
	'ui.validator.xml_paste_hint': 'Вставьте или введите XML для проверки.',
	'ui.validator.xml_validation_desc':
		'Проверка структуры: незакрытые теги, несовпадающие элементы, неверные символы.',
	'ui.validator.xml_success_title': 'Валидный XML',
	'ui.validator.xml_success_desc':
		'Синтаксических ошибок не найдено. Документ структурно корректен.',
	'ui.validator.error_count.one': 'Найдена 1 ошибка',
	'ui.validator.error_count.other': 'Найдено {count} ошибок',
	'ui.toast.file_loaded': 'Файл загружен: {name}',
	'ui.toast.clipboard_xml': 'XML из буфера',
	'ui.toast.pasted_xml': 'XML вставлен из буфера',
	'ui.toast.xml_file_types': 'Поддерживаются только файлы .xml, .svg, .xhtml, .xsd, .wsdl и .txt',
	'ui.aria.xml_input_panel': 'Панель ввода XML',
	'ui.aria.xml_output_panel': 'Панель вывода XML',
	'ui.aria.xml_workspace_tabs': 'Вкладки XML',
	'ui.aria.xpath_panel': 'Панель запроса XPath',
	'ui.aria.xml_validator': 'Валидатор XML',
	'ui.convert.to_json': '→ JSON',
	'ui.convert.to_yaml': '→ YAML',
	'ui.convert.to_csv': '→ CSV',
	'ui.convert.to_xml': '→ XML',
	'ui.convert.to_toml': '→ TOML',
	'ui.convert.to_markdown': '→ MD',
	'ui.query.jsonpath': 'JSONPath',
	'ui.query.jmespath': 'JMESPath',
	'ui.query.xpath': 'XPath',
	'ui.query.stats.chars': 'симв.',
	'ui.query.stats.lines': 'строк',
	'ui.query.result': 'результат',
	'ui.query.results': 'результатов',
	'ui.query.history': 'История',
	'ui.query.sample_query': 'Пример запроса',
	'ui.query.guide': 'Справка',
	'ui.query.query': 'Запрос',
	'ui.query.running': 'Выполнение запроса…',
	'ui.query.empty_input': 'Вставьте JSON слева для выполнения запроса.',
	'ui.query.empty_query': 'Введите запрос для получения результата.',
	'ui.query.error_fallback': 'Ошибка запроса',
	'ui.query.copy_error': 'Не удалось скопировать',
	'ui.status.processing': 'Обработка…',
	'ui.status.waiting_output': 'Результат появится здесь',
	'ui.output.controls.spaces': 'пробелы',
	'ui.output.stats.chars': 'симв.',
	'ui.output.stats.lines': 'строк',
	'ui.output.stats.keys': 'ключей',
	'ui.output.stats.objects': 'объектов',
	'ui.output.stats.arrays': 'массивов',
	'ui.output.stats.strings': 'строк',
	'ui.output.stats.values': 'значений',
	'ui.output.stats.numbers': 'чисел',
	'ui.output.stats.booleans': 'булевых',
	'ui.output.stats.nulls': 'null',
	'ui.output.stats.depth': 'глубина',
	'ui.output.stats.size_in': 'вход',
	'ui.output.stats.size_out': 'выход',
	'ui.output.original': 'Оригинал',
	'ui.output.minified': 'Сжато',
	'ui.output.saved': 'сэкономлено',
	'ui.output.meta.minified': 'СЖАТО',
	'ui.output.actions.wrap': 'Перенос',
	'ui.output.actions.compare': 'Сравнить',
	'ui.output.actions.copy_json': 'Как JSON',
	'ui.output.actions.copy_js': 'Как JS Object',
	'ui.output.actions.copy_python': 'Как Python Dict',
	'ui.output.actions.copy_escaped': 'Экранировать',
	'ui.output.actions.copy': 'Копировать',
	'ui.output.actions.download': 'Скачать',
	'ui.output.compare.input': 'Ввод',
	'ui.output.compare.output': 'Вывод',
	'ui.output.error.invalid_title': 'Неверный JSON',
	'ui.output.controls.indent': 'Отступ',
	'ui.output.controls.tab': 'Таб',
	'ui.output.controls.sort_keys': 'Сорт. ключей',
	'ui.output.controls.clean': 'Очистка',
	'ui.output.controls.clean_nulls': 'Удалить null',
	'ui.output.controls.clean_strings': 'Удалить пустые строки',
	'ui.output.controls.clean_arrays': 'Удалить пустые массивы',
	'ui.output.controls.clean_objects': 'Удалить пустые объекты',
	'ui.output.controls.apply': 'Применить',

	// ── Tool FAQs and Use Cases ──────────────────────────────────────────
	'tool.json-formatter.faq.0.question': 'Что такое форматирование JSON?',
	'tool.json-formatter.faq.0.answer':
		'Это процесс организации JSON данных с правильными отступами и переносами строк для улучшения читабельности.',
	'tool.json-formatter.faq.1.question': 'Можно ли настроить отступы?',
	'tool.json-formatter.faq.1.answer':
		'Да, можно выбрать 2 пробела, 4 пробела или табуляцию. Структура данных при этом не меняется.',
	'tool.json-formatter.faq.2.question': 'Меняет ли этот инструмент мои данные?',
	'tool.json-formatter.faq.2.answer':
		'Нет, меняется только визуальное представление. Ключи и значения остаются прежними.',
	'tool.json-formatter.faq.3.question': 'Можно ли сортировать ключи?',
	'tool.json-formatter.faq.3.answer':
		'Да, опция "Сортировать ключи" расставит их по алфавиту, что удобно для сравнения файлов.',
	'tool.json-formatter.use_case.0':
		'Отладка API ответов через их визуальное оформление',
	'tool.json-formatter.use_case.1': 'Восстановление читабельности минимизированных файлов',
	'tool.json-formatter.use_case.2':
		'Подготовка конфигов для систем контроля версий',
	'tool.json-formatter.use_case.3':
		'Оформление JSON для презентаций или документации',
	'tool.json-formatter.use_case.4':
		'Валидация перед ручным редактированием данных',

	'tool.json-validator.faq.0.question': 'Что проверяет валидатор?',
	'tool.json-validator.faq.0.answer':
		'Он ищет синтаксические ошибки: лишние запятые, незакрытые скобки, неверные кавычки и дублирующиеся ключи.',
	'tool.json-validator.faq.1.question':
		'В чем разница между синтаксисом и схемой?',
	'tool.json-validator.faq.1.answer':
		'Синтаксис проверяет общую структуру JSON, а схема — соответствие конкретным правилам (типы полей, обязательность данных).',
	'tool.json-validator.faq.2.question': 'Поддерживаются ли комментарии?',
	'tool.json-validator.faq.2.answer':
		'Да, валидатор поддерживает JSON5, включая комментарии // и /* */.',
	'tool.json-validator.use_case.0':
		'Проверка ответов API перед их обработкой в коде',
	'tool.json-validator.use_case.1':
		'Проверка конфигов перед деплоем для исключения ошибок',
	'tool.json-validator.use_case.2': 'Валидация JSON от пользователей в формах',
	'tool.json-validator.use_case.3': 'Поиск ошибок парсинга в коде',
	'tool.json-validator.use_case.4':
		'Обеспечение целостности данных при обмене между системами',

	'tool.crypto-hmac.faq.0.question': 'Что такое HMAC?',
	'tool.crypto-hmac.faq.0.answer':
		'HMAC — это код аутентификации сообщений, использующий криптографическую хэш-функцию и секретный ключ.',
	'tool.crypto-hmac.faq.1.question': 'Какие алгоритмы поддерживаются?',
	'tool.crypto-hmac.faq.1.answer':
		'SHA-256, SHA-384, SHA-512, SHA-1, MD5 и др. Рекомендуется SHA-256.',
	'tool.crypto-hmac.use_case.0': 'Проверка подлинности API запросов',
	'tool.crypto-hmac.use_case.1': 'Создание защищенных токенов сессий',
	'tool.crypto-hmac.use_case.2': 'Генерация подписей для Webhooks (GitHub, Stripe)',
	'tool.crypto-hmac.use_case.3':
		'Аутентификация в микросервисах',
	'tool.crypto-hmac.use_case.4': 'Создание контрольных сумм для проверки файлов',

	'tool.json-minifier.faq.0.question': 'Что такое минимизация?',
	'tool.json-minifier.faq.0.answer':
		'Это удаление всех лишних символов (пробелов, переносов) для уменьшения размера файла.',
	'tool.json-minifier.faq.1.question': 'Влияет ли это на работу JSON?',
	'tool.json-minifier.faq.1.answer':
		'Нет, структура остается прежней, меняется только объем передаваемых данных.',
	'tool.json-minifier.faq.2.question': 'Когда использовать сжатый JSON?',
	'tool.json-minifier.faq.2.answer':
		'В продакшене, API ответах и при передаче по сети для экономии трафика.',
	'tool.json-minifier.use_case.0': 'Уменьшение веса API ответов',
	'tool.json-minifier.use_case.1': 'Оптимизация конфигов для деплоя',
	'tool.json-minifier.use_case.2': 'Сжатие данных перед записью в БД',
	'tool.json-minifier.use_case.3':
		'Экономия пропускной способности сети',
	'tool.json-minifier.use_case.4': 'Встраивание JSON в JS код',

	'tool.json-to-yaml.faq.0.question': 'Зачем конвертировать JSON в YAML?',
	'tool.json-to-yaml.faq.0.answer':
		'YAML легче читать человеку, он отлично подходит для конфигураций и поддерживает комментарии.',
	'tool.json-to-yaml.faq.1.question': 'Есть ли потеря данных?',
	'tool.json-to-yaml.faq.1.answer':
		'Нет, конвертация полностью сохраняет структуру и значения.',
	'tool.json-to-yaml.use_case.0':
		'Перевод конфигов из JSON в более читаемый YAML',
	'tool.json-to-yaml.use_case.1': 'Создание манифестов Kubernetes',
	'tool.json-to-yaml.use_case.2': 'Миграция настроек приложения',
	'tool.json-to-yaml.use_case.3': 'Генерация файлов для CI/CD пайплайнов',

	'tool.json-to-toml.faq.0.question': 'Зачем нужен TOML?',
	'tool.json-to-toml.faq.0.answer':
		'TOML создан специально для конфигов. Он интуитивно понятнее JSON для ручного редактирования.',
	'tool.json-to-toml.faq.1.question': 'В чем преимущество перед JSON?',
	'tool.json-to-toml.faq.1.answer':
		'Более чистый синтаксис для настроек, тогда как JSON лучше для обмена данными между машинами.',
	'tool.json-to-toml.use_case.0': 'Конвертация настроек в pyproject.toml',
	'tool.json-to-toml.use_case.1': 'Создание Cargo.toml из JSON данных',
	'tool.json-to-toml.use_case.2':
		'Улучшение поддержки настроек проекта',

	'tool.json-to-markdown.faq.0.question': 'Как работает конвертация в таблицу?',
	'tool.json-to-markdown.faq.0.answer':
		'Она превращает список объектов в визуальную таблицу Markdown для документации.',
	'tool.json-to-markdown.faq.1.question': 'Какие структуры поддерживаются?',
	'tool.json-to-markdown.faq.1.answer':
		'Массивы объектов. Каждый объект — строка, ключи — заголовки.',
	'tool.json-to-markdown.use_case.0': 'Создание таблиц для README файлов',
	'tool.json-to-markdown.use_case.1': 'Документирование примеров API',
	'tool.json-to-markdown.use_case.2':
		'Генерация таблиц из JSON экспортов',
	'tool.json-to-markdown.use_case.3': 'Отображение настроек в документации проекта',

	'tool.json-to-csv.faq.0.question': 'Зачем конвертировать JSON в CSV?',
	'tool.json-to-csv.faq.0.answer':
		'Это позволяет открыть данные в Excel или Google Таблицах для анализа.',
	'tool.json-to-csv.faq.1.question': 'Что лучше всего конвертируется?',
	'tool.json-to-csv.faq.1.answer':
		'Плоские массивы объектов с одинаковыми ключами.',
	'tool.json-to-csv.use_case.0': 'Экспорт данных API в Excel',
	'tool.json-to-csv.use_case.1': 'Подготовка данных для импорта в БД',
	'tool.json-to-csv.use_case.2':
		'Сбор датасетов для машинного обучения',
	'tool.json-to-csv.use_case.3': 'Генерация отчетов из JSON ответов',

	'tool.json-jsonpath.faq.0.question': 'Что такое JSONPath?',
	'tool.json-jsonpath.faq.0.answer':
		'Это язык запросов к JSON (аналог XPath для XML) для быстрого извлечения нужных полей.',
	'tool.json-jsonpath.faq.1.question': 'Как работает синтаксис?',
	'tool.json-jsonpath.faq.1.answer':
		'Используются выражения типа $.store.book[*].title для навигации по дереву.',
	'tool.json-jsonpath.faq.2.question': 'Для чего это нужно?',
	'tool.json-jsonpath.faq.2.answer':
		'Для тестирования API, извлечения данных и валидации структуры.',
	'tool.json-jsonpath.use_case.0': 'Быстрое получение полей из больших ответов API',
	'tool.json-jsonpath.use_case.1': 'Фильтрация сложных JSON наборов',
	'tool.json-jsonpath.use_case.2': 'Автоматизация тестирования API',
	'tool.json-jsonpath.use_case.3': 'Валидация данных в пайплайнах',

	'tool.json-jmespath.faq.0.question': 'В чем сила JMESPath?',
	'tool.json-jmespath.faq.0.answer':
		'Это мощный инструмент трансформации JSON: можно не только искать, но и менять структуру на лету.',
	'tool.json-jmespath.faq.1.question': 'Чем отличается от JSONPath?',
	'tool.json-jmespath.faq.1.answer':
		'JMESPath умеет делать маппинг, агрегацию и сложную фильтрацию данных.',
	'tool.json-jmespath.faq.2.question': 'Какие есть функции?',
	'tool.json-jmespath.faq.2.answer':
		'Сортировка sort_by(), агрегаты length(), sum() и фильтры по условию.',
	'tool.json-jmespath.use_case.0': 'Пересборка ответов API под нужды фронтенда',
	'tool.json-jmespath.use_case.1': 'Сложная фильтрация вложенных структур',
	'tool.json-jmespath.use_case.2': 'Трансформация данных без написания кода',
	'tool.json-jmespath.use_case.3': 'Очистка JSON ответов от лишних полей',

	// JSON Diff
	'tool.json-diff.display_name': 'Сравнение JSON',
	'tool.json-diff.tagline': 'Сравнение двух JSON документов онлайн',
	'tool.json-diff.description':
		'Инструмент семантического сравнения. Игнорирует порядок ключей и лишние пробелы. Идеально для отладки API.',
	'tool.json-diff.primary_keyword': 'json diff инструмент',
	'tool.json-diff.meta_title': 'JSON Diff — Сравнить JSON онлайн',
	'tool.json-diff.meta_description':
		'Сравните два JSON семантически. Увидьте только реальные изменения данных.',
	'tool.json-diff.operation': 'Сравнить',
	'tool.json-diff.faq.0.question': 'Учитывается ли порядок ключей?',
	'tool.json-diff.faq.0.answer':
		'Нет, инструмент понимает, что это объекты, и порядок полей в них не важен.',
	'tool.json-diff.faq.1.question': 'Работает ли с большими файлами?',
	'tool.json-diff.faq.1.answer':
		'Да, сравнение происходит быстро и локально в браузере.',
	'tool.json-diff.faq.2.question': 'Безопасно ли это?',
	'tool.json-diff.faq.2.answer':
		'Да, данные не покидают ваш компьютер.',
	'tool.json-diff.use_case.0': 'Сравнение ответов разных версий API',
	'tool.json-diff.use_case.1':
		'Поиск изменений в конфигурационных файлах',
	'tool.json-diff.use_case.2': 'Разбор конфликтов слияния в JSON',
	'tool.json-diff.use_case.3': 'Сверка экспортов баз данных',

	// ── XML Tool FAQs and Use Cases ──────────────────────────────────────────
	'tool.xml-formatter.faq.0.question': 'Зачем форматировать XML?',
	'tool.xml-formatter.faq.0.answer':
		'Для того чтобы древовидная структура тегов стала понятной и читаемой.',
	'tool.xml-formatter.faq.1.question': 'Можно ли выбрать отступ?',
	'tool.xml-formatter.faq.1.answer':
		'Да, поддерживаются пробелы и табуляция.',
	'tool.xml-formatter.faq.2.question': 'Сохраняются ли комментарии?',
	'tool.xml-formatter.faq.2.answer':
		'Да, форматировщик оставляет все ваши комментарии на местах.',
	'tool.xml-formatter.use_case.0':
		'Чтение сложных XML конфигов',
	'tool.xml-formatter.use_case.1': 'Очистка XML ответов старых систем',
	'tool.xml-formatter.use_case.2': 'Стандартизация кода в команде',
	'tool.xml-formatter.use_case.3': 'Поиск ошибок в иерархии тегов',
	'tool.xml-formatter.use_case.4': 'Подготовка XML к коммиту',

	'tool.xml-validator.faq.0.question': 'Что ищет валидатор XML?',
	'tool.xml-validator.faq.0.answer':
		'Ошибки вложенности, опечатки в тегах, неверные символы и незакрытые блоки.',
	'tool.xml-validator.faq.1.question': "В чем разница между well-formed и valid?",
	'tool.xml-validator.faq.1.answer':
		'Well-formed — это базовый синтаксис. Valid — соответствие конкретной схеме (XSD).',
	'tool.xml-validator.faq.2.question': 'Как исправить ошибки?',
	'tool.xml-validator.faq.2.answer':
		'Валидатор подсветит проблемную строку и объяснит причину ошибки.',
	'tool.xml-validator.use_case.0': 'Проверка SOAP ответов',
	'tool.xml-validator.use_case.1':
		'Проверка .config файлов перед запуском сервера',
	'tool.xml-validator.use_case.2': 'Верификация импортов из сторонних систем',
	'tool.xml-validator.use_case.3': 'Отладка парсинга XML в коде',
	'tool.xml-validator.use_case.4': 'Проверка перед отправкой в государственные системы',

	'tool.xml-to-json.faq.0.question': 'Как XML превращается в JSON?',
	'tool.xml-to-json.faq.0.answer':
		'Теги становятся объектами, атрибуты — полями с префиксом @, а содержимое — строками.',
	'tool.xml-to-json.faq.1.question': 'Можно ли вернуть всё назад?',
	'tool.xml-to-json.faq.1.answer':
		'Почти всегда, но некоторые детали (комментарии) могут не сохраниться.',
	'tool.xml-to-json.faq.2.question': 'Куда деваются атрибуты?',
	'tool.xml-to-json.faq.2.answer':
		'Они записываются как свойства объекта, чтобы не путать их с вложенными тегами.',
	'tool.xml-to-json.use_case.0': 'Перевод SOAP ответов в удобный JSON',
	'tool.xml-to-json.use_case.1': 'Работа с XML конфигами в JS',
	'tool.xml-to-json.use_case.2': 'Миграция данных со старых БД',
	'tool.xml-to-json.use_case.3': 'Анализ XML Sitemap файлов',
	'tool.xml-to-json.use_case.4': 'Парсинг RSS фидов в JSON',

	'tool.json-to-xml.faq.0.question': 'Зачем конвертировать JSON в XML?',
	'tool.json-to-xml.faq.0.answer':
		'Для интеграции с системами, которые не понимают современные форматы.',
	'tool.json-to-xml.faq.1.question': 'Как обрабатываются массивы?',
	'tool.json-to-xml.faq.1.answer':
		'Элементы массива превращаются в повторяющиеся теги с одинаковым именем.',
	'tool.json-to-xml.faq.2.question': 'Что со спецсимволами?',
	'tool.json-to-xml.faq.2.answer':
		'Они автоматически заменяются на безопасные сущности (&lt; и др.).',
	'tool.json-to-xml.use_case.0': 'Создание XML Sitemap из базы данных',
	'tool.json-to-xml.use_case.1': 'Генерация RSS лент',
	'tool.json-to-xml.use_case.2': 'Интеграция с Legacy API',
	'tool.json-to-xml.use_case.3': 'Создание Java конфигов',
	'tool.json-to-xml.use_case.4': 'Формирование SOAP конвертов',

	'tool.xml-to-yaml.faq.0.question': 'Зачем YAML из XML?',
	'tool.xml-to-yaml.faq.0.answer':
		'Для упрощения конфигов: YAML гораздо чище и компактнее.',
	'tool.xml-to-yaml.faq.1.question': 'Что будет с атрибутами?',
	'tool.xml-to-yaml.faq.1.answer':
		'Они станут обычными ключ-значение парами в иерархии YAML.',
	'tool.xml-to-yaml.faq.2.question': 'Справится ли с глубокой вложенностью?',
	'tool.xml-to-yaml.faq.2.answer':
		'Да, конвертер сохраняет любую глубину структуры.',
	'tool.xml-to-yaml.use_case.0': 'Перевод настроек Spring в YAML',
	'tool.xml-to-yaml.use_case.1': 'Упрощение скриптов сборки',
	'tool.xml-to-yaml.use_case.2': 'Генерация K8s ресурсов',
	'tool.xml-to-yaml.use_case.3': 'Улучшение читабельности документации',
	'tool.xml-to-yaml.use_case.4': 'Подготовка данных для Ansible',

	'tool.xml-to-csv.faq.0.question': 'Как работает XML в CSV?',
	'tool.xml-to-csv.faq.0.answer':
		'Он находит повторяющиеся теги и выстраивает их свойства в таблицу.',
	'tool.xml-to-csv.faq.1.question': 'Какие XML подходят?',
	'tool.xml-to-csv.faq.1.answer':
		'Те, где данные хранятся списками однотипных элементов.',
	'tool.xml-to-csv.use_case.0': 'Выгрузка отчетов в Excel',
	'tool.xml-to-csv.use_case.1': 'Анализ логов в таблицах',
	'tool.xml-to-csv.use_case.2': 'Конвертация прайс-листов',
	'tool.xml-to-csv.use_case.3': 'Миграция каталогов товаров',
	'tool.xml-to-csv.use_case.4': 'Анализ статистики API',

	'tool.xml-minifier.faq.0.question': 'Что дает сжатие XML?',
	'tool.xml-minifier.faq.0.answer':
		'Файл становится меньше, что ускоряет его загрузку сервером.',
	'tool.xml-minifier.faq.1.question': 'Это безопасно для парсера?',
	'tool.xml-minifier.faq.1.answer':
		'Да, пробелы между тегами в XML обычно игнорируются.',
	'tool.xml-minifier.use_case.0': 'Ускорение API ответов',
	'tool.xml-minifier.use_case.1': 'Оптимизация конфигов',
	'tool.xml-minifier.use_case.2': 'Экономия трафика',
	'tool.xml-minifier.use_case.3': 'Встраивание XML в другие файлы',

	'tool.xml-xpath.faq.0.question': 'Что такое XPath?',
	'tool.xml-xpath.faq.0.answer':
		'Это стандартный способ поиска данных в XML с помощью путей.',
	'tool.xml-xpath.faq.1.question': 'Что умеет XPath?',
	'tool.xml-xpath.faq.1.answer':
		'Искать по именам, атрибутам, тексту и даже по сложным условиям.',
	'tool.xml-xpath.use_case.0': 'Извлечение данных из больших документов',
	'tool.xml-xpath.use_case.1': 'Тестирование XML структуры',
	'tool.xml-xpath.use_case.2': 'Работа с XSLT',
	'tool.xml-xpath.use_case.3': 'Программная валидация контента',
};

export default registryRu;
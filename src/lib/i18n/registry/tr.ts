const registryTr: Record<string, string> = {
	// ── Kategoriler ─────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'JSON verilerini biçimlendir, doğrula, küçült, karşılaştır ve dönüştür. Her araç tarayıcında gerçek zamanlı hata algılaması ve ağaç görselleştirmesiyle çalışır.',
	'category.json.primary_keyword': 'json araçları',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		"XML belgelerini biçimlendir, doğrula ve dönüştür. Ayarlanabilir girintileme ile güzel yazdırma ve JSON veya CSV'ye dönüştürmeyi destekler.",
	'category.xml.primary_keyword': 'xml araçları',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'YAML dosyalarını biçimlendir, doğrula ve dönüştür. JSON ve YAML arasında çift yönlü dönüştürme ve kesin hata konumlarıyla sözdizimi doğrulaması.',
	'category.yaml.primary_keyword': 'yaml araçları',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'CSV verilerini ayrıştır, biçimlendir ve dönüştür. CSV, JSON ve diğer tablo formatları arasında özel sınırlayıcı desteği ile dönüştürme.',
	'category.csv.primary_keyword': 'csv araçları',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		"TOML dosyalarını biçimlendir, doğrula ve dönüştür. TOML'ü JSON ve YAML'a güvenle dönüştür.",
	'category.toml.primary_keyword': 'toml araçları',
	'category.text.display_name': 'Metin',
	'category.text.description':
		'Metinleri analiz et, say ve düzenle. Kelime, karakter, cümle, paragraf ve okuma süresini tarayıcıda anında ölç.',
	'category.text.primary_keyword': 'metin araçları',
	// ── JSON araçları ────────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'JSON Biçimlendirici',
	'tool.json-formatter.tagline': "JSON'u ayarlanabilir girinti ile biçimlendir ve güzelleştir",
	'tool.json-formatter.description':
		"JSON'u ayarlanabilir girinti ile ayrıştır ve görüntüle — 2 boşluk, 4 boşluk veya sekmeler. Gerçek zamanlı ayrıştırma kesin hata konumları ve isteğe bağlı ağaç görünümü ile.",
	'tool.json-formatter.primary_keyword': 'json biçimlendirici',
	'tool.json-formatter.meta_title': 'JSON Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.json-formatter.meta_description':
		"JSON'u tarayıcıda anında biçimlendir ve güzelleştir. Ayarlanabilir girinti, gerçek zamanlı hata algılaması ve ağaç görünümü. Hiçbir veri cihazdan ayrılmaz.",
	'tool.json-formatter.operation': 'Biçimlendir',

	'tool.json-validator.display_name': 'JSON Doğrulayıcı',
	'tool.json-validator.tagline': 'JSON sözdizimini ve yapısını doğrula',
	'tool.json-validator.description':
		'JSON sözdizimini gerçek zamanlı olarak kontrol et. Eksik parantez, sonlandırılmamış dizgiler ve yinelenen anahtarları anında tanımla. JSON5 yorumlarını ve sondaki virgülleri destekle.',
	'tool.json-validator.primary_keyword': 'json doğrulayıcı',
	'tool.json-validator.meta_title': 'JSON Doğrulayıcı — fmtly.dev',
	'tool.json-validator.meta_description':
		"JSON'u tarayıcıda anında doğrula. Kesin satır ve sütun numaraları ile sözdizimi hatalarını algıla. Hiçbir veri cihazdan ayrılmaz.",
	'tool.json-validator.operation': 'Doğrula',

	'tool.json-minifier.display_name': 'JSON Küçültücü',
	'tool.json-minifier.tagline': "Boşluğu kaldır ve JSON'u minimum boyuta sıkıştır",
	'tool.json-minifier.description':
		"JSON'tan tüm boşluğu çıkar ve mümkün olan en küçük çıktıyı üret. Önce JSON'u doğrula, ardından girinti, satır sonu ve boşluğu kaldır.",
	'tool.json-minifier.primary_keyword': 'json küçültücü',
	'tool.json-minifier.meta_title': 'JSON Küçültücü — fmtly.dev',
	'tool.json-minifier.meta_description':
		"JSON'u tarayıcıda anında küçült. Tüm boşluğu kaldır ve sıkıştırılmış çıkış üret. Hiçbir veri cihazdan ayrılmaz.",
	'tool.json-minifier.operation': 'Küçült',

	'tool.json-to-yaml.display_name': "JSON'dan YAML'a",
	'tool.json-to-yaml.tagline': 'JSON verilerini YAML biçimine dönüştür',
	'tool.json-to-yaml.description':
		"JSON'u uygun girinti ve biçimlendirme ile YAML'a dönüştür. İç içe nesneler, diziler ve tüm JSON veri türlerini işle.",
	'tool.json-to-yaml.primary_keyword': "json'dan yaml'a",
	'tool.json-to-yaml.meta_title': "JSON'dan YAML'a Dönüştürücü — fmtly.dev",
	'tool.json-to-yaml.meta_description':
		"JSON'u tarayıcıda anında YAML'a dönüştür. İç içe yapıları ve tüm veri türlerini işle. Yükleme yok.",
	'tool.json-to-yaml.operation': 'Dönüştür',

	'tool.json-to-toml.display_name': "JSON'dan TOML'a",
	'tool.json-to-toml.tagline': 'JSON verilerini TOML yapılandırma biçimine dönüştür',
	'tool.json-to-toml.description':
		"JSON'u yapılandırma dosyaları için ideal olan TOML biçimine dönüştür. İç içe tabloları ve satır içi dizileri destekle.",
	'tool.json-to-toml.primary_keyword': "json'dan toml'a",
	'tool.json-to-toml.meta_title': "JSON'dan TOML'a Dönüştürücü — fmtly.dev",
	'tool.json-to-toml.meta_description':
		"JSON'u tarayıcıda anında TOML'a dönüştür. İç içe yapıları ve dizileri işle. Yükleme yok.",
	'tool.json-to-toml.operation': 'Dönüştür',

	'tool.json-to-markdown.display_name': "JSON'dan Markdown Tablosuna",
	'tool.json-to-markdown.tagline': 'JSON dizilerini Markdown tablolarına dönüştür',
	'tool.json-to-markdown.description':
		'JSON nesne dizilerini biçimlendirilmiş Markdown tablolarına dönüştür. Nesne anahtarlarından sütun başlıklarını otomatik olarak algıla.',
	'tool.json-to-markdown.primary_keyword': "json'dan markdown tablosuna",
	'tool.json-to-markdown.meta_title': "JSON'dan Markdown Tablosuna Dönüştürücü — fmtly.dev",
	'tool.json-to-markdown.meta_description':
		'JSON dizilerini anında Markdown tablolarına dönüştür. Başlıkları otomatik olarak algıla ve verileri biçimlendir. Hiçbir veri cihazdan ayrılmaz.',
	'tool.json-to-markdown.operation': 'Dönüştür',

	'tool.json-to-xml.display_name': "JSON'dan XML'e",
	'tool.json-to-xml.tagline': 'JSON verilerini XML biçimine dönüştür',
	'tool.json-to-xml.description':
		"JSON nesnelerini ve dizilerini iyi biçimlendirilmiş XML'e dönüştür. İç içe yapıları ve ayarlanabilir kök öğe adlarını işle.",
	'tool.json-to-xml.primary_keyword': "json'dan xml'e",
	'tool.json-to-xml.meta_title': "JSON'dan XML'e Dönüştürücü — fmtly.dev",
	'tool.json-to-xml.meta_description':
		"JSON'u tarayıcıda anında XML'e dönüştür. İyi biçimlendirilmiş XML üret. Yükleme yok.",
	'tool.json-to-xml.operation': 'Dönüştür',

	'tool.json-to-csv.display_name': "JSON'dan CSV'ye",
	'tool.json-to-csv.tagline': 'JSON dizilerini CSV biçimine dönüştür',
	'tool.json-to-csv.description':
		'JSON nesne dizilerini CSV biçimine dönüştür. Nesne anahtarlarından sütun başlıklarını otomatik olarak çıkar.',
	'tool.json-to-csv.primary_keyword': "json'dan csv'ye",
	'tool.json-to-csv.meta_title': "JSON'dan CSV'ye Dönüştürücü — fmtly.dev",
	'tool.json-to-csv.meta_description':
		"JSON dizilerini tarayıcıda anında CSV'ye dönüştür. Başlıkları otomatik olarak algıla. Yükleme yok.",
	'tool.json-to-csv.operation': 'Dönüştür',

	'tool.json-jsonpath.display_name': 'JSONPath Sorgulaması',
	'tool.json-jsonpath.tagline': 'JSONPath ifadeleri ile JSON verilerini sorgula',
	'tool.json-jsonpath.description':
		'JSONPath ifadelerini JSON verilerine karşı çalıştır ve belirli değerleri çıkar. Filtreler, jokerler, özyinelemeli iniş ve tüm standart JSONPath operatörlerini destekle.',
	'tool.json-jsonpath.primary_keyword': 'jsonpath sorgulaması',
	'tool.json-jsonpath.meta_title': 'JSONPath Sorgulama Aracı — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'JSON verilerini tarayıcıda JSONPath ifadeleri ile sorgula. Tüm operatörleri destekle. Yükleme yok.',
	'tool.json-jsonpath.operation': 'Sorgula',

	'tool.json-jmespath.display_name': 'JMESPath Sorgulaması',
	'tool.json-jmespath.tagline': "JMESPath ifadeleri ile JSON'u sorgula ve dönüştür",
	'tool.json-jmespath.description':
		'JMESPath ifadelerini JSON verilerine karşı çalıştır ve bunları sorgula ve dönüştür. Projeksiyonları, filtreleri, çok seçimi ve tüm JMESPath işlevlerini destekle.',
	'tool.json-jmespath.primary_keyword': 'jmespath sorgulaması',
	'tool.json-jmespath.meta_title': 'JMESPath Sorgulama Aracı — fmtly.dev',
	'tool.json-jmespath.meta_description':
		'JSON verilerini tarayıcıda JMESPath ile sorgula ve dönüştür. Tüm operatörleri ve işlevleri destekle. Yükleme yok.',
	'tool.json-jmespath.operation': 'Sorgula',

	// ── XML araçları ─────────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'XML Biçimlendirici',
	'tool.xml-formatter.tagline': "XML'i ayarlanabilir aralık ile güzelleştir ve girintile",
	'tool.xml-formatter.description':
		'XML belgelerini 2 boşluk, 4 boşluk veya sekmeler ile biçimlendir ve girintile. XML yapısını doğrula ve hatalar için kesin satır numaraları ile vurgula.',
	'tool.xml-formatter.primary_keyword': 'xml biçimlendirici',
	'tool.xml-formatter.meta_title': 'XML Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.xml-formatter.meta_description':
		"XML'i tarayıcıda biçimlendir ve güzelleştir. Ayarlanabilir girinti ve gerçek zamanlı doğrulama. Hiçbir veri cihazdan ayrılmaz.",
	'tool.xml-formatter.operation': 'Biçimlendir',

	'tool.xml-validator.display_name': 'XML Doğrulayıcı',
	'tool.xml-validator.tagline': 'XML sözdizimini ve iyi biçimlendirilme durumunu doğrula',
	'tool.xml-validator.description':
		"XML'i iyi biçimlendirilme kurallarına karşı doğrula. Kapalı olmayan etiketleri, kötü biçimlendirilmiş nitelikleri ve geçersiz karakterleri kesin hata konumları ile tanımla.",
	'tool.xml-validator.primary_keyword': 'xml doğrulayıcı',
	'tool.xml-validator.meta_title': 'XML Doğrulayıcı — fmtly.dev',
	'tool.xml-validator.meta_description':
		"XML'i tarayıcıda doğrula. Satır ve sütun numaraları ile sözdizimi hatalarını algıla. Hiçbir veri cihazdan ayrılmaz.",
	'tool.xml-validator.operation': 'Doğrula',

	'tool.xml-to-json.display_name': "XML'den JSON'a",
	'tool.xml-to-json.tagline': 'XML belgelerini JSON biçimine dönüştür',
	'tool.xml-to-json.description':
		"XML'i JSON'a otomatik nitelik ve öğe eşleştirmesi ile dönüştür. Ad alanlarını, CDATA bölümlerini ve iç içe XML yapılarını işle.",
	'tool.xml-to-json.primary_keyword': "xml'den json'a",
	'tool.xml-to-json.meta_title': "XML'den JSON'a Dönüştürücü — fmtly.dev",
	'tool.xml-to-json.meta_description':
		"XML'i tarayıcıda anında JSON'a dönüştür. Nitelikleri ve iç içe yapıları işle. Yükleme yok.",
	'tool.xml-to-json.operation': 'Dönüştür',
	'tool.xml-to-json-schema.display_name': "XML'den JSON Şemasına",
	'tool.xml-to-json-schema.tagline': 'XML yapısından JSON Şeması çıkar',
	'tool.xml-to-json-schema.description':
		'Öğe yapısını, nitelikleri ve çokluk bilgisini analiz ederek XML’den Draft 2020-12 uyumlu JSON Şeması üret. Tekrarlayan öğeleri dizi olarak, ortak alanları zorunlu alan olarak çıkarır.',
	'tool.xml-to-json-schema.primary_keyword': 'xmlden json semasina',
	'tool.xml-to-json-schema.meta_title': "XML'den JSON Şemasına Dönüştürücü — fmtly.dev",
	'tool.xml-to-json-schema.meta_description':
		'Tarayıcıda XML’den JSON Şeması üret. İç içe yapıları, tekrarlayan öğeleri ve zorunlu alanları otomatik algılar.',
	'tool.xml-to-json-schema.operation': 'Şema Üret',
	'tool.xml-to-json-schema.faq.0.question': 'XML’de cardinality nasıl çıkarılıyor?',
	'tool.xml-to-json-schema.faq.0.answer':
		'Aynı ebeveyn altında tekrar eden kardeş öğeler dizi olarak yorumlanır. Tek sefer görünen öğeler, tekrar kanıtı yoksa tekil alan olarak çıkarılır.',
	'tool.xml-to-json-schema.faq.1.question': 'XML nitelikleri şemada nasıl gösterilir?',
	'tool.xml-to-json-schema.faq.1.answer':
		'Nitelikler ayrıştırılmış anahtar biçimiyle (ör. @_id) normal property olarak şemaya eklenir ve çocuk öğelerle birlikte doğrulanabilir.',
	'tool.xml-to-json-schema.faq.2.question': 'Hangi JSON Schema sürümü üretilir?',
	'tool.xml-to-json-schema.faq.2.answer':
		'Çıktı JSON Schema Draft 2020-12 kullanır ve $schema, type, properties, required, items gibi standart anahtarları içerir.',
	'tool.xml-to-json-schema.use_case.0':
		'Mevcut XML payload örneklerinden başlangıç doğrulama şemaları üretmek',
	'tool.xml-to-json-schema.use_case.1':
		'Karmaşık XML feed yapısını tüketiciler için dokümante etmek',
	'tool.xml-to-json-schema.use_case.2': 'Elle kısıt sıkılaştırmadan önce temel şema çıkarmak',
	'tool.xml-to-json-schema.use_case.3':
		'XML entegrasyonlarını JSON tabanlı doğrulama akışlarına taşımak',

	'tool.xml-to-yaml.display_name': "XML'den YAML'a",
	'tool.xml-to-yaml.tagline': 'XML belgelerini YAML biçimine dönüştür',
	'tool.xml-to-yaml.description':
		"XML'i uygun girintileme ile YAML biçimine dönüştür. Nitelikleri, metin içeriğini ve iç içe XML öğelerini işle.",
	'tool.xml-to-yaml.primary_keyword': "xml'den yaml'a",
	'tool.xml-to-yaml.meta_title': "XML'den YAML'a Dönüştürücü — fmtly.dev",
	'tool.xml-to-yaml.meta_description':
		"XML'i tarayıcıda anında YAML'a dönüştür. Nitelikleri ve iç içe öğeleri işle. Yükleme yok.",
	'tool.xml-to-yaml.operation': 'Dönüştür',

	'tool.xml-to-csv.display_name': "XML'den CSV'ye",
	'tool.xml-to-csv.tagline': 'XML kayıtlarını CSV biçimine dönüştür',
	'tool.xml-to-csv.description':
		'Yinelenen XML öğelerini CSV satırlarına çıkar. Öğe ve nitelik adlarından sütun başlıklarını otomatik olarak algıla.',
	'tool.xml-to-csv.primary_keyword': "xml'den csv'ye",
	'tool.xml-to-csv.meta_title': "XML'den CSV'ye Dönüştürücü — fmtly.dev",
	'tool.xml-to-csv.meta_description':
		"XML'i tarayıcıda anında CSV'ye dönüştür. Öğe adlarından başlıkları otomatik olarak algıla. Yükleme yok.",
	'tool.xml-to-csv.operation': 'Dönüştür',

	'tool.xml-minifier.display_name': 'XML Küçültücü',
	'tool.xml-minifier.tagline': "Boşluğu kaldır ve XML'i sıkıştır",
	'tool.xml-minifier.description':
		"XML'den tüm boşluğu ve yorumları çıkar ve sıkıştırılmış çıkış üret. Önce XML'i doğrula, ardından dosya boyutunu azaltmak için küçült.",
	'tool.xml-minifier.primary_keyword': 'xml küçültücü',
	'tool.xml-minifier.meta_title': 'XML Küçültücü — fmtly.dev',
	'tool.xml-minifier.meta_description':
		"XML'i tarayıcıda anında küçült. Boşluğu ve yorumları kaldır. Hiçbir veri cihazdan ayrılmaz.",
	'tool.xml-minifier.operation': 'Küçült',

	'tool.xml-xpath.display_name': 'XPath Sorgulaması',
	'tool.xml-xpath.tagline': 'XPath ifadeleri ile XML verilerini sorgula',
	'tool.xml-xpath.description':
		'XPath 1.0 ifadelerini XML belgelerine karşı çalıştır. Öğe seçimini, nitelik filtrelemesini ve tüm standart XPath eksenleri ve işlevlerini destekle.',
	'tool.xml-xpath.primary_keyword': 'xpath sorgulaması',
	'tool.xml-xpath.meta_title': 'XPath Sorgulama Aracı — fmtly.dev',
	'tool.xml-xpath.meta_description':
		'XML verilerini tarayıcıda XPath ifadeleri ile sorgula. Tüm XPath 1.0 operatörlerini destekle. Yükleme yok.',
	'tool.xml-xpath.operation': 'Sorgula',

	'tool.xml-diff.display_name': 'XML Diff',
	'tool.xml-diff.tagline': 'XML belgelerini karşılaştır ve farklılıkları görselleştir',
	'tool.xml-diff.description':
		'İki XML belgesini yan yana karşılaştırın ve farklılıkları vurgulayın. Eklenen, kaldırılan ve değiştirilen elementleri kesin satır numaraları ve XML-bilinçli diff görselleştirmesi ile gösterir.',
	'tool.xml-diff.primary_keyword': 'xml diff',
	'tool.xml-diff.meta_title': 'XML Diff Aracı — fmtly.dev',
	'tool.xml-diff.meta_description':
		'XML dosyalarını tarayıcınızda karşılaştırın ve farklılıkları görselleştirin. Element düzeyindeki değişiklikleri satır numaralarıyla gösterir. Veri yüklenmez.',
	'tool.xml-diff.operation': 'Diff',
	'tool.xml-diff.faq.0.question': 'XML Diff düz metin diff’ten nasıl farklıdır?',
	'tool.xml-diff.faq.0.answer':
		'XML Diff önce iki girdiyi de XML olarak doğrular, ardından XML’e uygun boşluk normalizasyonu ile satır satır karşılaştırır. Bu yüzden düz metin karşılaştırmasına göre XML belgeleri için daha uygundur.',
	'tool.xml-diff.faq.1.question': 'Geçersiz XML karşılaştırabilir miyim?',
	'tool.xml-diff.faq.1.answer':
		'Hayır. Karşılaştırmadan önce iki tarafın da geçerli XML olması gerekir. Girdilerden biri bozuksa araç hangi tarafın düzeltilmesi gerektiğini gösterir.',
	'tool.xml-diff.faq.2.question': 'Hangi değişiklik türleri vurgulanır?',
	'tool.xml-diff.faq.2.answer':
		'Araç eklenen, kaldırılan ve değiştirilen XML satırlarını vurgular. Bu sayede yapılandırma güncellemeleri, feed revizyonları ve markup incelemeleri için kullanışlıdır.',
	'tool.xml-diff.use_case.0': 'İki XML API yükü arasındaki değişiklikleri inceleme',
	'tool.xml-diff.use_case.1': 'Sitemap, feed veya yapılandırma XML sürümlerini karşılaştırma',
	'tool.xml-diff.use_case.2': 'Dağıtımdan önce markup değişikliklerini denetleme',
	'tool.xml-diff.use_case.3': 'Üretilen XML çıktısını beklenen sürümle doğrulama',

	// ── YAML araçları ────────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'YAML Biçimlendirici',
	'tool.yaml-formatter.tagline': "YAML'ı tutarlı girintileme ile biçimlendir ve güzelleştir",
	'tool.yaml-formatter.description':
		'YAML dosyalarını tutarlı 2-boşluk girintileme ile biçimlendir. YAML sözdizimini doğrula ve tırnak işaretleri, bulantılar ve anahtar sıralamasını normalleştir.',
	'tool.yaml-formatter.primary_keyword': 'yaml biçimlendirici',
	'tool.yaml-formatter.meta_title': 'YAML Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		"YAML'ı tarayıcıda biçimlendir ve güzelleştir. Sözdizimini doğrula ve girinti normalleştir. Hiçbir veri cihazdan ayrılmaz.",
	'tool.yaml-formatter.operation': 'Biçimlendir',
	'tool.yaml-formatter.faq.0.question': 'YAML Biçimlendirici tam olarak neyi düzenler?',
	'tool.yaml-formatter.faq.0.answer':
		'Belgeyi daha okunur hale getirmek için girintiyi, boşlukları, alıntı stilini ve genel yerleşimi düzenler; YAML verisinin anlamını değiştirmez.',
	'tool.yaml-formatter.faq.1.question': 'Biçimlendirme YAML verimin içeriğini değiştirir mi?',
	'tool.yaml-formatter.faq.1.answer':
		'Hayır. Amaç veri yapısını koruyup çıktıyı daha temiz ve tutarlı hale getirmektir.',
	'tool.yaml-formatter.use_case.0': 'İnceleme öncesi Kubernetes manifestlerini güzelleştirme',
	'tool.yaml-formatter.use_case.1': 'Daha temiz diffler için CI yapılandırmalarını normalize etme',
	'tool.yaml-formatter.use_case.2': 'Commit öncesi Helm values dosyalarını yeniden biçimlendirme',
	'tool.yaml-formatter.use_case.3': 'Büyük YAML yapılandırmalarını daha kolay taranır hale getirme',

	'tool.yaml-minifier.display_name': 'YAML Küçültücü',
	'tool.yaml-minifier.tagline': "YAML'ı kompakt ve geçerli bir çıktıya küçült",
	'tool.yaml-minifier.description':
		"YAML belgelerini kompakt akış stili bir gösterime küçült. Çok belgeli YAML'ı destekler ve veri yapısını korurken yerleşim gürültüsünü azaltır.",
	'tool.yaml-minifier.primary_keyword': 'yaml küçültücü',
	'tool.yaml-minifier.meta_title': 'YAML Küçültücü — fmtly.dev',
	'tool.yaml-minifier.meta_description':
		"YAML'ı tarayıcıda küçült. Çok belgeli YAML'ı ve kompakt çıktıyı destekler. Hiçbir veri cihazdan ayrılmaz.",
	'tool.yaml-minifier.operation': 'Küçült',
	'tool.yaml-minifier.faq.0.question': 'YAML küçültme nasıl çalışır?',
	'tool.yaml-minifier.faq.0.answer':
		'Önce YAML ayrıştırılır, ardından daha kompakt ama geçerli bir YAML olarak yeniden yazılır. Böylece veri korunurken biçim gürültüsü azalır.',
	'tool.yaml-minifier.faq.1.question': 'Birden fazla YAML belgesini destekliyor mu?',
	'tool.yaml-minifier.faq.1.answer':
		'Evet. Belge ayırıcılarla ayrılmış çok belgeli girdiler korunur ve her belge ayrı ayrı küçültülür.',
	'tool.yaml-minifier.use_case.0':
		'YAML parçalarını ticket veya sohbette paylaşmadan önce küçültme',
	'tool.yaml-minifier.use_case.1': 'Kompakt çok belgeli manifestleri inceleme',
	'tool.yaml-minifier.use_case.2':
		'Üretilen YAML fixture’larını saklamadan önce boşlukları azaltma',
	'tool.yaml-minifier.use_case.3':
		'Biçimlendirilmiş ve kompakt YAML gösterimlerini yan yana karşılaştırma',

	'tool.yaml-validator.display_name': 'YAML Doğrulayıcı',
	'tool.yaml-validator.tagline': 'YAML sözdizimini ve şemasını doğrula',
	'tool.yaml-validator.description':
		'YAML sözdizimini gerçek zamanlı doğrula ve belgeleri bir şemaya karşı kontrol et. Girinti sorunlarını, bozuk yapıları ve şema uyuşmazlıklarını satır bazlı geri bildirimle yakala.',
	'tool.yaml-validator.primary_keyword': 'yaml doğrulayıcı',
	'tool.yaml-validator.meta_title': 'YAML Doğrulayıcı — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Tarayıcıda YAML sözdizimini ve şemasını doğrula. Ayrıştırma hatalarını ve şema uyuşmazlıklarını satır numaralarıyla yakala. Veriler cihazınızdan ayrılmaz.',
	'tool.yaml-validator.operation': 'Doğrula',
	'tool.yaml-validator.faq.0.question': 'Hangi YAML hatalarını tespit edebilir?',
	'tool.yaml-validator.faq.0.answer':
		'Kötü girinti, geçersiz eşlemeler, yanlış yerleştirilmiş diziler ve bozuk belgeler gibi ayrıştırıcı hatalarını yakalar. Şema modunda ayrıca şemayı karşılamayan yolları ve değerleri de raporlar.',
	'tool.yaml-validator.faq.1.question': 'YAML’i bir şemaya karşı doğrulayabilir miyim?',
	'tool.yaml-validator.faq.1.answer':
		'Evet. Şema moduna geçip bir JSON Şeması verin. Şema girdisi JSON veya YAML olarak yazılabilir; bu da manifestler, yapılandırma dosyaları ve API payload’ları için kullanışlıdır.',
	'tool.yaml-validator.use_case.0': 'Yayın öncesi deployment manifestlerini kontrol etme',
	'tool.yaml-validator.use_case.1': 'Dokümantasyondan kopyalanan YAML’i doğrulama',
	'tool.yaml-validator.use_case.2': 'CI ve otomasyon dosyalarındaki girinti hatalarını yakalama',
	'tool.yaml-validator.use_case.3':
		'Helm values veya manifestleri beklenen bir şemaya karşı doğrulama',

	'tool.yaml-to-json.display_name': "YAML'dan JSON'a",
	'tool.yaml-to-json.tagline': "YAML'ı JSON biçimine dönüştür",
	'tool.yaml-to-json.description':
		"YAML belgelerini biçimlendirilmiş JSON'a dönüştür. Bulantıları, diğer adları, çok belgeli YAML ve tüm YAML veri türlerini işle.",
	'tool.yaml-to-json.primary_keyword': "yaml'dan json'a",
	'tool.yaml-to-json.meta_title': "YAML'dan JSON'a Dönüştürücü — fmtly.dev",
	'tool.yaml-to-json.meta_description':
		"YAML'ı tarayıcıda anında JSON'a dönüştür. Bulantıları, diğer adları ve çok belgeli YAML'ı işle. Yükleme yok.",
	'tool.yaml-to-json.operation': 'Dönüştür',
	'tool.yaml-to-json.faq.0.question': "YAML'ı ne zaman JSON'a dönüştürmek gerekir?",
	'tool.yaml-to-json.faq.0.answer':
		'API’ler, JavaScript araçları, test akışları veya JSON bekleyen alt sistemler için daha katı bir veri biçimine ihtiyaç duyduğunuzda dönüştürmek faydalıdır.',
	'tool.yaml-to-json.faq.1.question': 'İç içe nesneler ve listeler korunur mu?',
	'tool.yaml-to-json.faq.1.answer':
		'Evet. İç içe eşlemeler ve diziler JSON karşılıklarına dönüştürülür; veri yapısı korunur.',
	'tool.yaml-to-json.use_case.0': "YAML yapılandırmalarını API yükleri için JSON'a çevirme",
	'tool.yaml-to-json.use_case.1': 'YAML verisini daha katı bir makine dostu formatta inceleme',
	'tool.yaml-to-json.use_case.2': 'Yapılandırma verilerini JavaScript iş akışlarına taşıma',
	'tool.yaml-to-json.use_case.3': 'YAML içeriğini JSON tabanlı araçlara hazırlama',

	'tool.yaml-to-xml.display_name': "YAML'dan XML'e",
	'tool.yaml-to-xml.tagline': "YAML'ı XML biçimine dönüştür",
	'tool.yaml-to-xml.description':
		"YAML belgelerini iyi biçimlendirilmiş XML'e dönüştür. YAML anahtarlarını XML öğelerine eşle ve iç içe yapıları ve dizileri işle.",
	'tool.yaml-to-xml.primary_keyword': "yaml'dan xml'e",
	'tool.yaml-to-xml.meta_title': "YAML'dan XML'e Dönüştürücü — fmtly.dev",
	'tool.yaml-to-xml.meta_description': "YAML'ı tarayıcıda anında XML'e dönüştür. Yükleme yok.",
	'tool.yaml-to-xml.operation': 'Dönüştür',
	'tool.yaml-to-xml.faq.0.question': "YAML XML'e dönüşürken nasıl eşlenir?",
	'tool.yaml-to-xml.faq.0.answer':
		'Anahtarlar öğe adına dönüşür, iç içe nesneler iç içe XML öğeleri olur, listeler ise tekrarlanan öğeler halinde genişletilir.',
	'tool.yaml-to-xml.faq.1.question': 'Çıktı diğer XML araçlarında kullanılabilir mi?',
	'tool.yaml-to-xml.faq.1.answer':
		'Evet. Çıktı iyi biçimlendirilmiş XML olarak üretilir; sonrasında XML biçimlendirme ve doğrulama araçlarıyla kullanılabilir.',
	'tool.yaml-to-xml.use_case.0': 'YAML verisini XML tabanlı entegrasyonlara dönüştürme',
	'tool.yaml-to-xml.use_case.1': 'YAML test verilerinden XML fixture üretme',
	'tool.yaml-to-xml.use_case.2': 'YAML yazım akışlarını XML pipeline’larına bağlama',
	'tool.yaml-to-xml.use_case.3': 'Yapılandırılmış YAML içeriğini XML olarak dışa hazırlama',

	'tool.yaml-to-csv.display_name': "YAML'dan CSV'ye",
	'tool.yaml-to-csv.tagline': 'YAML dizilerini CSV biçimine dönüştür',
	'tool.yaml-to-csv.description':
		'YAML nesne dizilerini CSV biçimine dönüştür. Nesne anahtarlarından başlıkları çıkar ve verileri satırlara biçimlendir.',
	'tool.yaml-to-csv.primary_keyword': "yaml'dan csv'ye",
	'tool.yaml-to-csv.meta_title': "YAML'dan CSV'ye Dönüştürücü — fmtly.dev",
	'tool.yaml-to-csv.meta_description': "YAML'ı tarayıcıda anında CSV'ye dönüştür. Yükleme yok.",
	'tool.yaml-to-csv.operation': 'Dönüştür',
	'tool.yaml-to-csv.faq.0.question': 'Hangi YAML yapıları CSV’ye en iyi dönüşür?',
	'tool.yaml-to-csv.faq.0.answer':
		'Nesne dizileri en iyi sonucu verir. Her nesne bir satıra, ortak anahtarlar da CSV sütunlarına dönüşür.',
	'tool.yaml-to-csv.faq.1.question': 'Tek bir YAML nesnesi CSV’ye çevrilebilir mi?',
	'tool.yaml-to-csv.faq.1.answer':
		'Evet. Tek bir nesne tek satırlık CSV olarak dışa aktarılabilir; bu basit kayıtlar için kullanışlıdır.',
	'tool.yaml-to-csv.use_case.0': 'YAML kayıtlarını tablo olarak incelemek için dışa aktarma',
	'tool.yaml-to-csv.use_case.1':
		'Yapılandırılmış YAML veri kümelerini analistler için CSV’ye çevirme',
	'tool.yaml-to-csv.use_case.2': 'Envanter veya yapılandırma listelerini tabloya düzleştirme',
	'tool.yaml-to-csv.use_case.3': 'CSV bekleyen içe aktarma araçları için YAML verisi hazırlama',

	'tool.yaml-to-toml.display_name': "YAML'dan TOML'a",
	'tool.yaml-to-toml.tagline': "YAML'ı TOML yapılandırma biçimine dönüştür",
	'tool.yaml-to-toml.description':
		'YAML yapılandırma dosyalarını TOML biçimine dönüştür. İç içe tabloları, dizileri ve tüm YAML veri türlerini işle.',
	'tool.yaml-to-toml.primary_keyword': "yaml'dan toml'a",
	'tool.yaml-to-toml.meta_title': "YAML'dan TOML'a Dönüştürücü — fmtly.dev",
	'tool.yaml-to-toml.meta_description': "YAML'ı tarayıcıda anında TOML'a dönüştür. Yükleme yok.",
	'tool.yaml-to-toml.operation': 'Dönüştür',
	'tool.yaml-to-toml.faq.0.question': "Neden YAML'ı TOML'a dönüştüreyim?",
	'tool.yaml-to-toml.faq.0.answer':
		'TOML, geliştirici araçlarında insan tarafından düzenlenen yapılandırmalar için sık tercih edilir. Proje TOML bekliyorsa dönüşüm işinizi kolaylaştırır.',
	'tool.yaml-to-toml.faq.1.question': 'İç içe yapılandırma bölümleri korunur mu?',
	'tool.yaml-to-toml.faq.1.answer':
		'Evet. İç içe eşlemeler, formatın izin verdiği ölçüde TOML tablolarına ve dizilerine dönüştürülür.',
	'tool.yaml-to-toml.use_case.0': 'YAML ayarlarını TOML tabanlı projelere taşıma',
	'tool.yaml-to-toml.use_case.1': 'Var olan YAML kaynaklarından TOML yapılandırmaları üretme',
	'tool.yaml-to-toml.use_case.2': 'Dağıtım ayarlarını TOML kullanan araçlara taşıma',
	'tool.yaml-to-toml.use_case.3': 'Aynı yapılandırmayı YAML ve TOML olarak karşılaştırma',

	'tool.yaml-diff.display_name': 'YAML Diff',
	'tool.yaml-diff.tagline': 'İki YAML belgesini yan yana karşılaştır',
	'tool.yaml-diff.description':
		'İki YAML belgesini karşılaştır ve ekleme, silme ve değişiklikleri vurgula. Anlamsal karşılaştırma için YAML yapısını anla.',
	'tool.yaml-diff.primary_keyword': 'yaml diff',
	'tool.yaml-diff.meta_title': 'YAML Diff Aracı — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'İki YAML belgesini tarayıcıda karşılaştır. Tüm ekleme, silme ve değişiklikleri vurgula. Yükleme yok.',
	'tool.yaml-diff.operation': 'Karşılaştır',
	'tool.yaml-diff.faq.0.question': 'YAML Diff düz metin diff’ten nasıl ayrılır?',
	'tool.yaml-diff.faq.0.answer':
		'İki girdiyi YAML verisi olarak ayrıştırır ve ortaya çıkan yapıyı karşılaştırır. Böylece değişiklikler yalnızca biçime göre değil, anahtarlar, diziler ve değerler üzerinden eşleştirilir.',
	'tool.yaml-diff.faq.1.question': 'Geçersiz YAML karşılaştırılabilir mi?',
	'tool.yaml-diff.faq.1.answer':
		'Hayır. İki tarafın da geçerli YAML olması gerekir. Bozuk olan giriş önce düzeltilmelidir.',
	'tool.yaml-diff.faq.2.question': 'Hangi değişiklikler vurgulanır?',
	'tool.yaml-diff.faq.2.answer':
		'Eklenen, silinen ve değişen YAML yollarını ve değerlerini vurgular; bu da yapılandırma revizyonlarını incelemeyi kolaylaştırır.',
	'tool.yaml-diff.use_case.0': 'İki deployment manifesti arasındaki farkları gözden geçirme',
	'tool.yaml-diff.use_case.1': 'CI pipeline yapılandırma revizyonlarını karşılaştırma',
	'tool.yaml-diff.use_case.2': 'Commit öncesi düzenlenen Helm/values dosyalarını inceleme',
	'tool.yaml-diff.use_case.3': 'Üretilen YAML’i beklenen sürümle doğrulama',
	'tool.yaml-query.display_name': 'YAML Sorgu',
	'tool.yaml-query.tagline': 'JSONPath ve JMESPath ile YAML sorgula',
	'tool.yaml-query.description':
		'JSONPath veya JMESPath ifadelerini doğrudan YAML üzerinde tarayıcıda çalıştır. YAML’i ayrıştır, iç içe verileri sorgula ve dosyayı elle dönüştürmeden sonuçları incele.',
	'tool.yaml-query.primary_keyword': 'yaml sorgu',
	'tool.yaml-query.meta_title': 'YAML Sorgu Aracı — fmtly.dev',
	'tool.yaml-query.meta_description':
		'Tarayıcıda JSONPath veya JMESPath ile YAML sorgula. Elle dönüştürmeye gerek yok, veri yüklenmez.',
	'tool.yaml-query.operation': 'Sorgula',
	'tool.yaml-query.faq.0.question': 'Hangi sorgu dilleri destekleniyor?',
	'tool.yaml-query.faq.0.answer':
		'JSONPath ve JMESPath arasında geçiş yapabilirsiniz. İkisi de ayrıştırılmış YAML veri modeli üzerinde çalışır; iç içe eşlemeler, diziler ve çok belgeli girdiler doğrudan sorgulanabilir.',
	'tool.yaml-query.faq.1.question': 'Önce YAML’i JSON’a dönüştürmem gerekir mi?',
	'tool.yaml-query.faq.1.answer':
		'Hayır. Araç YAML’i sizin için ayrıştırır ve sonuçları JSON biçiminde döndürür. Bu da yapılandırmalar, manifestler, values dosyaları ve diğer YAML ağırlıklı akışlarda pratiklik sağlar.',
	'tool.yaml-query.use_case.0':
		'Kubernetes manifestlerinden veya Helm values dosyalarından belirli alanları çekme',
	'tool.yaml-query.use_case.1': 'İç içe YAML yapılandırmalarını elle dönüştürmeden inceleme',
	'tool.yaml-query.use_case.2':
		'YAML payload’ları üzerinde JSONPath veya JMESPath ifadelerini deneme',
	'tool.yaml-query.use_case.3':
		'Büyük YAML belgelerinden liste, kimlik veya bayrak değerleri çıkarma',

	// ── CSV araçları ─────────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': "CSV'den JSON'a",
	'tool.csv-to-json.tagline': 'CSV verilerini JSON dizisine dönüştür',
	'tool.csv-to-json.description':
		"Başlıklı CSV'yi JSON nesne dizisine dönüştür. Sayılar ve boşlanlar için dinamik tür algılamayı ve özel sınırlayıcı seçeneklerini destekle.",
	'tool.csv-to-json.primary_keyword': "csv'den json'a",
	'tool.csv-to-json.meta_title': "CSV'den JSON'a Dönüştürücü — fmtly.dev",
	'tool.csv-to-json.meta_description':
		"CSV'yi tarayıcıda anında JSON'a dönüştür. Başlıkları, dinamik yazı kullanımını ve özel sınırlayıcıları destekle. Yükleme yok.",
	'tool.csv-to-json.operation': 'Dönüştür',
	'tool.csv-to-json.faq.0.question': 'İlk satırı başlık olarak kullanabilir miyim?',
	'tool.csv-to-json.faq.0.answer':
		'Evet. CSV kontrolleriyle ilk satırı başlık olarak tutabilir veya tüm satırları normal sütun verisi olarak dönüştürebilirsiniz.',
	'tool.csv-to-json.faq.1.question': 'Sayı ve boolean değerleri otomatik algılar mı?',
	'tool.csv-to-json.faq.1.answer':
		'Evet. Sayı ve boolean gibi görünen değerler daha temiz JSON çıktısı için otomatik yorumlanır.',
	'tool.csv-to-json.use_case.0':
		'E-tablo dışa aktarımlarını API’ye hazır JSON payload’larına dönüştürme',
	'tool.csv-to-json.use_case.1': 'CSV satırlarını yapılandırılmış nesneler olarak inceleme',
	'tool.csv-to-json.use_case.2': 'Ayraçlı verileri tarayıcı dostu JSON biçimine normalleştirme',
	'tool.csv-to-json.use_case.3': 'CSV veri kümelerini sonraki JSON tabanlı akışlara hazırlama',

	'tool.csv-to-xml.display_name': "CSV'den XML'e",
	'tool.csv-to-xml.tagline': 'CSV verilerini XML biçimine dönüştür',
	'tool.csv-to-xml.description':
		"CSV dosyalarını iyi biçimlendirilmiş XML'e dönüştür. Sütun başlıklarını öğe adlarına eşle ve her kayıt için satır öğeleri oluştur.",
	'tool.csv-to-xml.primary_keyword': "csv'den xml'e",
	'tool.csv-to-xml.meta_title': "CSV'den XML'e Dönüştürücü — fmtly.dev",
	'tool.csv-to-xml.meta_description':
		"CSV'yi tarayıcıda anında XML'e dönüştür. Başlıkları öğe adlarına eşle. Yükleme yok.",
	'tool.csv-to-xml.operation': 'Dönüştür',
	'tool.csv-to-xml.faq.0.question': 'XML öğe adları nasıl seçiliyor?',
	'tool.csv-to-xml.faq.0.answer':
		'Başlık satırı açıksa her CSV başlığı, satır düğümü içindeki bir XML alt öğesine dönüşür.',
	'tool.csv-to-xml.use_case.0':
		'Tablolu dışa aktarımları eski sistemler için XML fixture’lara dönüştürme',
	'tool.csv-to-xml.use_case.1':
		'CSV başlıklarının satır tabanlı XML kayıtlara nasıl eşlendiğini önizleme',

	'tool.csv-to-yaml.display_name': "CSV'den YAML'a",
	'tool.csv-to-yaml.tagline': 'CSV verilerini YAML biçimine dönüştür',
	'tool.csv-to-yaml.description':
		'CSV dosyalarını YAML nesne dizilerine dönüştür. Sütun başlıklarını her satır için YAML anahtarlarına eşle.',
	'tool.csv-to-yaml.primary_keyword': "csv'den yaml'a",
	'tool.csv-to-yaml.meta_title': "CSV'den YAML'a Dönüştürücü — fmtly.dev",
	'tool.csv-to-yaml.meta_description': "CSV'yi tarayıcıda anında YAML'a dönüştür. Yükleme yok.",
	'tool.csv-to-yaml.operation': 'Dönüştür',
	'tool.csv-to-yaml.faq.0.question': 'Her YAML öğesi neyi temsil eder?',
	'tool.csv-to-yaml.faq.0.answer':
		'Başlık modu açıksa her CSV satırı bir YAML nesnesine, sütun başlıkları da anahtarlara dönüşür.',
	'tool.csv-to-yaml.use_case.0':
		'Tablolu yapılandırma verilerini okunabilir YAML listelerine dönüştürme',
	'tool.csv-to-yaml.use_case.1': 'E-tablo tabanlı ayarları YAML kullanan akışlara taşıma',

	'tool.csv-to-html.display_name': "CSV'den HTML'e",
	'tool.csv-to-html.tagline': 'CSV verilerini HTML tablo koduna dönüştür',
	'tool.csv-to-html.description':
		'CSV dosyalarını biçimlendirilmiş HTML tablo koduna dönüştür. İlk satırı sütun başlıkları olarak kullan.',
	'tool.csv-to-html.primary_keyword': "csv'den html'e",
	'tool.csv-to-html.meta_title': "CSV'den HTML'e Dönüştürücü — fmtly.dev",
	'tool.csv-to-html.meta_description':
		"CSV'yi tarayıcıda anında HTML tablo koduna dönüştür. Yükleme yok.",
	'tool.csv-to-html.operation': 'Dönüştür',
	'tool.csv-to-html.faq.0.question': 'HTML’i kopyalamadan önce tabloyu görebilir miyim?',
	'tool.csv-to-html.faq.0.answer':
		'Evet. Çıkış panelinde hem render edilmiş tablo önizlemesi hem de ham HTML görünümü bulunur.',
	'tool.csv-to-html.use_case.0':
		'Dokümanlar, yönetim ekranları veya CMS parçaları için HTML tablo üretme',
	'tool.csv-to-html.use_case.1':
		'Üretilen işaretlemeyi eklemeden önce tablo yapısını görsel olarak kontrol etme',

	'tool.csv-formatter.display_name': 'CSV Biçimlendirici',
	'tool.csv-formatter.tagline': 'CSV verilerini biçimlendir ve normalleştir',
	'tool.csv-formatter.description':
		'CSV verilerini tutarlı sınırlayıcılar, tırnak işaretleri ve satır sonlarıyla temizle ve biçimlendir. CSV yapısını doğrula ve boşluğu normalleştir.',
	'tool.csv-formatter.primary_keyword': 'csv biçimlendirici',
	'tool.csv-formatter.meta_title': 'CSV Biçimlendirici — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'CSV verilerini tarayıcıda biçimlendir ve temizle. Yükleme yok.',
	'tool.csv-formatter.operation': 'Biçimlendir',
	'tool.csv-formatter.faq.0.question': 'Biçimlendirirken neleri normalleştirebilirim?',
	'tool.csv-formatter.faq.0.answer':
		'Ayraç değiştirebilir, hücre boşluklarını kırpabilir, başlık satırını koruyabilir, boş satırları atlayabilir ve tüm hücreleri zorunlu tırnaklayabilirsiniz.',
	'tool.csv-formatter.use_case.0':
		'CSV dosyalarını veritabanı veya BI araçlarına almadan önce standartlaştırma',
	'tool.csv-formatter.use_case.1': 'Tutarsız e-tablo çıktılarıni sunucuya göndermeden temizleme',

	'tool.csv-validator.display_name': 'CSV Doğrulayıcı',
	'tool.csv-validator.tagline': 'CSV yapısını ve sözdizimini doğrula',
	'tool.csv-validator.description':
		'CSV dosyalarını tutarlı sütun sayıları, uygun tırnak işaretleri ve kodlama sorunları açısından doğrula. Kesin satır numaraları ile kötü biçimlendirilmiş satırları tanımla.',
	'tool.csv-validator.primary_keyword': 'csv doğrulayıcı',
	'tool.csv-validator.meta_title': 'CSV Doğrulayıcı — fmtly.dev',
	'tool.csv-validator.meta_description':
		"CSV'yi tarayıcıda doğrula. Satır numaraları ile yapı hatalarını algıla. Hiçbir veri cihazdan ayrılmaz.",
	'tool.csv-validator.operation': 'Doğrula',
	'tool.csv-validator.faq.0.question': 'Doğrulayıcı hangi hataları bulur?',
	'tool.csv-validator.faq.0.answer':
		'Ayrıştırma hatalarını, boş veya yinelenen başlıkları ve sütun sayısı diğer satırlarla uyuşmayan kayıtları işaretler.',
	'tool.csv-validator.use_case.0': 'İçe aktarma veya dönüştürme öncesi bozuk CSV’yi yakalama',
	'tool.csv-validator.use_case.1':
		'Paylaşılan veri kümelerinde başlık ve satır genişliği tutarlılığını doğrulama',

	'tool.csv-diff.display_name': 'CSV Karşılaştır (Diff)',
	'tool.csv-diff.tagline': 'İki CSV dosyasını yan yana karşılaştırın',
	'tool.csv-diff.description':
		'İki CSV dosyasını yapısal olarak karşılaştırın. Sütunları ve satırları algılayarak doğru sekmesel karşılaştırma yapar.',
	'tool.csv-diff.primary_keyword': 'csv diff',
	'tool.csv-diff.meta_title': 'CSV Karşılaştırma Aracı — fmtly.dev',
	'tool.csv-diff.meta_description':
		'Tarayıcınızda iki CSV dosyasını karşılaştırın. Eklenen, silinen ve değişen satır ve sütunları vurgular. Veriler yüklenmez.',
	'tool.csv-diff.operation': 'Karşılaştır',
	'tool.csv-diff.faq.0.question': 'CSV Diff basit bir metin karşılaştırması mıdır?',
	'tool.csv-diff.faq.0.answer':
		'Her iki CSV girdisini tablo verisi olarak ayrıştırır ve yapısal farklılıkları ile hücre değişikliklerini doğru tespit etmek için eşleştirir.',
	'tool.csv-diff.faq.1.question': 'Geçersiz CSV dosyalarını karşılaştırabilir miyim?',
	'tool.csv-diff.faq.1.answer':
		'Hayır. İki tarafın da geçerli CSV olması gerekir. Eğer ayrıştırılamazsa hata gösterilir.',
	'tool.csv-diff.use_case.0': 'İki e-tablo dışa aktarım dosyası arasındaki farkları inceleme',
	'tool.csv-diff.use_case.1':
		'Tablo verilerindeki değişiklikleri veritabanına aktarmadan önce inceleme',

	// ── TOML araçları ────────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'TOML Biçimlendirici',
	'tool.toml-formatter.tagline': 'TOML yapılandırma dosyalarını biçimlendir ve doğrula',
	'tool.toml-formatter.description':
		'TOML dosyalarını tutarlı boşluk ve bölüm organizasyonu ile biçimlendir. TOML sözdizimini doğrula ve satır numaraları ile hataları vurgula.',
	'tool.toml-formatter.primary_keyword': 'toml biçimlendirici',
	'tool.toml-formatter.meta_title': 'TOML Biçimlendirici — fmtly.dev',
	'tool.toml-formatter.meta_description':
		"TOML'yi tarayıcıda biçimlendir ve doğrula. Hiçbir veri cihazdan ayrılmaz.",
	'tool.toml-formatter.operation': 'Biçimlendir',
	'tool.toml-validator.display_name': 'TOML Doğrulayıcı',
	'tool.toml-validator.tagline':
		'Biçimlendirmeden veya dönüştürmeden önce TOML sözdizimini doğrula',
	'tool.toml-validator.description':
		'TOML yapılandırma dosyalarını tarayıcıda yerel olarak doğrula. Kaydetmeden, dönüştürmeden veya karşılaştırmadan önce sözdizimi hatalarını yakala.',
	'tool.toml-validator.primary_keyword': 'toml doğrulayıcı',
	'tool.toml-validator.meta_title': 'TOML Doğrulayıcı — fmtly.dev',
	'tool.toml-validator.meta_description':
		"TOML'yi tarayıcıda doğrula. Biçimlendirme veya dönüştürme öncesi sözdizimi hatalarını yakala.",
	'tool.toml-validator.operation': 'Doğrula',
	'tool.toml-to-json.display_name': "TOML'den JSON'a",
	'tool.toml-to-json.tagline': "TOML belgelerini JSON'a dönüştür",
	'tool.toml-to-json.description':
		"TOML yapılandırma verilerini tarayıcıda biçimlendirilmiş JSON'a dönüştür. İç içe tabloları, dizileri ve skaler değerleri dosya yüklemeden koru.",
	'tool.toml-to-json.primary_keyword': "toml'den json'a",
	'tool.toml-to-json.meta_title': "TOML'den JSON'a Dönüştürücü — fmtly.dev",
	'tool.toml-to-json.meta_description':
		"TOML'yi tarayıcıda anında biçimlendirilmiş JSON'a dönüştür. Hiçbir veri cihazdan ayrılmaz.",
	'tool.toml-to-json.operation': 'Dönüştür',
	'tool.toml-to-yaml.display_name': "TOML'den YAML'a",
	'tool.toml-to-yaml.tagline': "TOML belgelerini YAML'a dönüştür",
	'tool.toml-to-yaml.description':
		"TOML yapılandırmalarını tarayıcıda okunabilir YAML'a dönüştür. İç içe tabloları, dizileri ve temel veri türlerini koru.",
	'tool.toml-to-yaml.primary_keyword': "toml'den yaml'a",
	'tool.toml-to-yaml.meta_title': "TOML'den YAML'a Dönüştürücü — fmtly.dev",
	'tool.toml-to-yaml.meta_description':
		"TOML'yi tarayıcıda anında YAML'a dönüştür. Dosya yükleme yok.",
	'tool.toml-to-yaml.operation': 'Dönüştür',
	'tool.toml-diff.display_name': 'TOML Karşılaştırma',
	'tool.toml-diff.tagline': 'İki TOML belgesini yan yana karşılaştır',
	'tool.toml-diff.description':
		'İki TOML belgesini karşılaştır ve eklenen, silinen ve değişen anahtarları vurgula. Yapılandırma değişikliklerini tarayıcıdan çıkmadan incele.',
	'tool.toml-diff.primary_keyword': 'toml karşılaştırma',
	'tool.toml-diff.meta_title': 'TOML Karşılaştırma Aracı — fmtly.dev',
	'tool.toml-diff.meta_description':
		'İki TOML belgesini tarayıcıda karşılaştır ve tüm değişiklikleri vurgula.',
	'tool.toml-diff.operation': 'Karşılaştır',
	'tool.toml-formatter.faq.0.question': 'Biçimlendirme TOML değerlerini değiştirir mi?',
	'tool.toml-formatter.faq.0.answer':
		'Hayır. Geçerli TOML içeriğini normalleştirilmiş bir düzene çevirir; ayrıştırılan veri yapısı ve değerler korunur.',
	'tool.toml-formatter.faq.1.question':
		'Biçimlendirici yerine ne zaman doğrulayıcıyı kullanmalıyım?',
	'tool.toml-formatter.faq.1.answer':
		'Yalnızca sözdizimini kontrol etmek istiyorsanız doğrulayıcıyı kullanın. TOML zaten geçerliyse ve daha düzenli çıktı istiyorsanız biçimlendirici daha uygundur.',
	'tool.toml-formatter.use_case.0':
		"Değişiklikleri commit etmeden önce pyproject.toml'yi düzenleme",
	'tool.toml-formatter.use_case.1': 'Dokümandan kopyalanan yapılandırma parçalarını temizleme',
	'tool.toml-formatter.use_case.2': 'Uzun TOML bölümlerini daha okunur hale getirme',
	'tool.toml-formatter.use_case.3': "TOML'yi karşılaştırma veya dönüştürme öncesi hazırlama",
	'tool.toml-validator.faq.0.question': 'Doğrulayıcı hangi TOML sorunlarını yakalar?',
	'tool.toml-validator.faq.0.answer':
		'Bozuk dizeler, geçersiz tablo tanımları, hatalı diziler ve ayrıştırıcının raporladığı diğer TOML sözdizimi hatalarını yakalar.',
	'tool.toml-validator.faq.1.question': 'TOML doğrulayıcı şema desteği sunuyor mu?',
	'tool.toml-validator.faq.1.answer':
		'Hayır. Yalnızca TOML sözdizimini doğrular. Biçimlendirme, dönüştürme veya karşılaştırma öncesi belgenin temiz şekilde ayrıştırıldığını doğrulamak için idealdir.',
	'tool.toml-validator.use_case.0':
		"Build araçlarını çalıştırmadan önce pyproject.toml'yi kontrol etme",
	'tool.toml-validator.use_case.1': 'Uygulama yapılandırmalarındaki sözdizimi hatalarını yakalama',
	'tool.toml-validator.use_case.2': 'Paket dokümanlarından kopyalanan TOML içeriğini doğrulama',
	'tool.toml-validator.use_case.3': 'Karşılaştırma öncesi yapılandırma değişikliklerini doğrulama',
	'tool.toml-to-json.faq.0.question': 'İç içe tablolar ve diziler JSON çıktısında korunur mu?',
	'tool.toml-to-json.faq.0.answer':
		'Evet. Ayrıştırılan TOML nesneleri eşdeğer JSON nesnelerine ve dizilerine dönüştürülür; genel yapı korunur.',
	'tool.toml-to-json.faq.1.question': "TOML'yi JSON'a dönüştürmek ne zaman faydalıdır?",
	'tool.toml-to-json.faq.1.answer':
		'Aynı yapılandırma verisini JSON bekleyen araç zincirlerinde, API’lerde, scriptlerde veya test fixture’larında yeniden kullanmanız gerektiğinde faydalıdır.',
	'tool.toml-to-json.use_case.0': 'TOML yapılandırmasını JavaScript araçları için JSON’a çevirme',
	'tool.toml-to-json.use_case.1': 'TOML verisini daha katı bir makine dostu yapıda inceleme',
	'tool.toml-to-json.use_case.2': 'TOML ayarlarını API fixture veya testlerde yeniden kullanma',
	'tool.toml-to-json.use_case.3': 'TOML ile JSON tabanlı sistemler arasında köprü kurma',
	'tool.toml-to-yaml.faq.0.question': "TOML'yi neden YAML'a dönüştürmeliyim?",
	'tool.toml-to-yaml.faq.0.answer':
		'YAML, altyapı ve otomasyon iş akışlarında çoğu zaman daha kolay taranır. Ekip veya araç YAML sözdizimini tercih ediyorsa dönüştürme yararlıdır.',
	'tool.toml-to-yaml.faq.1.question': 'TOML yapısı YAML çıktısında korunur mu?',
	'tool.toml-to-yaml.faq.1.answer':
		'Evet. Tablolar, iç içe nesneler, diziler ve skaler değerler YAML karşılıklarına eşlenir.',
	'tool.toml-to-yaml.use_case.0': 'Dağıtım iş akışları için TOML yapılandırmasını YAML’a çevirme',
	'tool.toml-to-yaml.use_case.1': 'TOML tabanlı ayarları YAML odaklı ekiplerle paylaşma',
	'tool.toml-to-yaml.use_case.2': 'Aynı yapılandırmayı TOML ve YAML olarak karşılaştırma',
	'tool.toml-to-yaml.use_case.3':
		'Farklı format tercih eden ekosistemler arasında yapılandırma taşıma',
	'tool.toml-diff.faq.0.question': 'TOML Karşılaştırma metin diff’i mi yoksa yapısal diff mi?',
	'tool.toml-diff.faq.0.answer':
		'Yapısaldır. Önce iki giriş de TOML olarak ayrıştırılır, sonra ortaya çıkan veri anahtarlar, diziler ve değerler üzerinden karşılaştırılır.',
	'tool.toml-diff.faq.1.question': 'Geçersiz TOML belgelerini karşılaştırabilir miyim?',
	'tool.toml-diff.faq.1.answer':
		'Hayır. Her iki girişin de geçerli TOML olması gerekir. Taraflardan biri ayrıştırılamazsa araç hangi tarafın geçersiz olduğunu gösterir.',
	'tool.toml-diff.use_case.0': 'İki sürüm arasındaki yapılandırma değişikliklerini gözden geçirme',
	'tool.toml-diff.use_case.1': 'Ortam bazlı TOML ayarlarını karşılaştırma',
	'tool.toml-diff.use_case.2': 'Üretilen TOML içeriğini beklenen sürümle kontrol etme',
	'tool.toml-diff.use_case.3':
		'Commit öncesi pyproject.toml veya araç zinciri değişikliklerini inceleme',

	'tool.toml-minifier.display_name': 'TOML Küçültücü',
	'tool.toml-minifier.tagline': 'TOML yapılandırma dosyalarını küçült ve sıkıştır',
	'tool.toml-minifier.description':
		'Dosya boyutunu küçültmek için TOML dosyalarından gereksiz boşlukları ve yorumları kaldır. TOML yapılandırmalarını tarayıcıda yerel olarak küçült.',
	'tool.toml-minifier.primary_keyword': 'toml küçültücü',
	'tool.toml-minifier.meta_title': 'TOML Küçültücü — fmtly.dev',
	'tool.toml-minifier.meta_description':
		'TOML dosyalarını tarayıcıda küçült ve sıkıştır. Boşlukları ve yorumları güvenle kaldır. Hiçbir veri cihazdan ayrılmaz.',
	'tool.toml-minifier.operation': 'Küçült',
	'tool.toml-minifier.faq.0.question': 'TOML küçültücü ne yapar?',
	'tool.toml-minifier.faq.0.answer':
		'TOML dosyanızı ayrıştırır ve gereken en az boşlukla yeniden yazar. Dosya boyutunu küçültmek için yorumlar da kaldırılır.',
	'tool.toml-minifier.faq.1.question': 'TOML dosyalarını küçültmek güvenli midir?',
	'tool.toml-minifier.faq.1.answer':
		'Evet. Küçültücü, TOML verisinin yapısal anlamının tamamen aynı kalmasını sağlar. Yalnızca biçimlendirme ve yorumlar atılır.',
	'tool.toml-minifier.use_case.0': 'Dağıtım için büyük TOML yapılandırmalarını sıkıştırma',
	'tool.toml-minifier.use_case.1': 'Yapılandırma dosyalarını paylaşmadan önce yorumları kaldırma',
	'tool.toml-minifier.use_case.2':
		'Gömülü sistemler veya sınırlı depolama için TOML dosyalarını hazırlama',
	'tool.toml-minifier.use_case.3': 'TOML dosyalarını kompakt bir formata normalleştirme',

	'tool.toml-to-xml.display_name': "TOML'den XML'e",
	'tool.toml-to-xml.tagline': 'TOML yapılandırma dosyalarını XML formatına dönüştür',
	'tool.toml-to-xml.description':
		'TOML veri yapılarını tarayıcınızda doğrudan XML belgelerine dönüştürün. İç içe geçmiş tabloları ve dizileri XML düğüm hiyerarşilerinde korur.',
	'tool.toml-to-xml.primary_keyword': "toml'den xml'e",
	'tool.toml-to-xml.meta_title': "TOML'den XML'e Dönüştürücü — fmtly.dev",
	'tool.toml-to-xml.meta_description':
		"TOML yapılandırmalarını tarayıcıda anında XML'e dönüştürün. Dosya yükleme yok.",
	'tool.toml-to-xml.operation': 'Dönüştür',
	'tool.toml-to-xml.faq.0.question': "TOML dizileri XML'e nasıl dönüştürülür?",
	'tool.toml-to-xml.faq.0.answer':
		'XML doğal olarak isimsiz dizileri desteklemez, bu nedenle diziler genellikle düğüm adının tekrarlanmasıyla veya ayrıştırıcıya bağlı olarak öğelerin standart liste etiketleriyle sarılmasıyla temsil edilir.',
	'tool.toml-to-xml.faq.1.question': "Daha sonra tekrar TOML'ye dönüştürebilir miyim?",
	'tool.toml-to-xml.faq.1.answer':
		"Evet, XML'den TOML'ye dönüştürücümüzü kullanabilirsiniz, ancak bazı tür bilgileri (örneğin sayılara karşı açık dizeler) geri dönüşte XML ayrıştırıcısı tarafından farklı yorumlanabilir.",
	'tool.toml-to-xml.use_case.0': 'Modern TOML yapılandırmalarını eski XML sistemlerine uyarlama',
	'tool.toml-to-xml.use_case.1':
		'TOML tabanlı uygulamaları kurumsal SOAP API’leri ile entegre etme',
	'tool.toml-to-xml.use_case.2':
		'pyproject.toml verilerini Maven veya Ant derleme dosyalarına dönüştürme',
	'tool.toml-to-xml.use_case.3': 'Yapılandırma mantığını genel XML veri setlerine çıkarma',

	'tool.toml-to-html.display_name': "TOML'den HTML'e",
	'tool.toml-to-html.tagline': 'TOML yapılandırmasını duyarlı bir HTML tablosuna dönüştür',
	'tool.toml-to-html.description':
		'TOML yapılandırma dosyalarını temiz, okunabilir HTML tablolarına dönüştürün. Belge oluşturma, raporlama ve yapılandırma durumlarını paylaşmak için idealdir.',
	'tool.toml-to-html.primary_keyword': "toml'den html'e",
	'tool.toml-to-html.meta_title': "TOML'den HTML Tablosuna Dönüştürücü — fmtly.dev",
	'tool.toml-to-html.meta_description':
		"Tarayıcınızda anında TOML'den HTML tabloları oluşturun. İç içe TOML verilerinden duyarlı ve temiz tablolar yaratır.",
	'tool.toml-to-html.operation': 'Dönüştür',
	'tool.toml-to-html.faq.0.question': 'İç içe geçmiş TOML tabloları nasıl işlenir?',
	'tool.toml-to-html.faq.0.answer':
		'İç içe tablolar ve diziler, iç HTML tabloları olarak yinelemeli bir şekilde işlenir ve veri yapısının görsel olarak birebir korunması sağlanır.',
	'tool.toml-to-html.faq.1.question': 'Çıktıyı doğrudan belgelerime kopyalayabilir miyim?',
	'tool.toml-to-html.faq.1.answer':
		'Evet, çıktı doğrudan Markdown dosyalarına, Notion, Confluence veya herhangi bir standart web sayfasına kopyalanıp yapıştırılabilen standart HTML kodudur.',
	'tool.toml-to-html.use_case.0': 'TOML yapılandırma dosyalarından görsel raporlar oluşturma',
	'tool.toml-to-html.use_case.1': 'Uygulama ayarlarını proje belgelerine yapıştırma',
	'tool.toml-to-html.use_case.2': 'Ortama özgü değişkenleri şirket içi panolarda görüntüleme',
	'tool.toml-to-html.use_case.3':
		'Karmaşık iç içe TOML yapılarını erişilebilir bir formatta inceleme',

	'ui.actions.choose_sample': 'Seç…',
	'ui.actions.clear': 'Temizle',
	'ui.actions.copied': 'Kopyalandı',
	'ui.actions.copy': 'Kopyala',
	'ui.actions.copy_all': 'Hepsini Kopyala',
	'ui.actions.download': 'İndir',
	'ui.actions.fetch': 'Getir',
	'ui.actions.format': 'Biçimlendir',
	'ui.actions.load_url': "URL'i Yükle",
	'ui.actions.minify': 'Küçült',
	'ui.actions.run': 'Çalıştır',
	'ui.actions.running': 'Çalışıyor…',
	'ui.actions.sample': 'Örnek',
	'ui.actions.search': 'Ara',
	'ui.actions.diff': 'Diff',
	'ui.actions.share': 'Paylaş',
	'ui.layout.tabs.output': 'Çıkış',
	'ui.layout.tabs.tree': 'Ağaç',
	'ui.layout.placeholders.input': 'Girdi',
	'ui.layout.placeholders.output': 'Çıkış',
	'ui.layout.placeholders.output_empty': 'Çıkış burada görünecek',
	'ui.layout.placeholders.tree_empty': 'Ağaç görünümü',
	'ui.layout.placeholders.paste_original': 'Orijinalini buraya yapıştır…',
	'ui.layout.placeholders.paste_modified': "Değiştirilen'i buraya yapıştır…",
	'ui.diff.labels.original': 'Orijinal',
	'ui.diff.labels.modified': 'Değiştirilen',
	'ui.diff.labels.input_panel': 'Diff girdi paneli',
	'ui.diff.controls.ignore_order': 'Dizi sırasını yoksay',
	'ui.diff.controls.only_diffs': 'Yalnızca farklılıkları göster',
	'ui.diff.controls.case_sensitive': 'Büyük/küçük harf duyarlı',
	'ui.diff.controls.ignore_keys_placeholder': 'Anahtarları yoksay: id, timestamp…',
	'ui.diff.controls.swap': 'Değiştir',
	'ui.diff.controls.export': 'Dışa Aktar',
	'ui.diff.controls.copy_patch': 'JSON Patch olarak Kopyala',
	'ui.diff.controls.export_md': 'Markdown raporunu İndir',
	'ui.diff.controls.export_csv': "CSV'yi İndir",
	'ui.diff.view.list': 'Liste görünümü',
	'ui.diff.view.monaco': 'Satır içi diff görünümü',
	'ui.diff.view.inline_toggle': "Satır içi / yan yana'yı değiştir",
	'ui.diff.summary.added': 'eklendi',
	'ui.diff.summary.removed': 'kaldırıldı',
	'ui.diff.summary.modified': 'değiştirildi',
	'ui.diff.summary.similar': 'benzer',
	'ui.diff.summary.empty': 'Karşılaştırmak için her iki panele de {language} gir',
	'ui.diff.summary.identical': 'Belgeler aynı',
	'ui.diff.summary.difference': 'farklılık',
	'ui.diff.summary.differences': 'farklılıklar',
	'ui.diff.summary.found': 'bulundu',
	'ui.diff.filter.placeholder': 'Yola göre filtrele…',
	'ui.diff.types.root': '(kök)',
	'ui.diff.types.added': 'Eklendi',
	'ui.diff.types.removed': 'Kaldırıldı',
	'ui.diff.types.modified': 'Değiştirildi',
	'ui.diff.types.unchanged': 'Değişmedi',
	'ui.diff.actions.format': 'Biçimlendir',
	'ui.diff.actions.copy_value': 'Değeri Kopyala',
	'ui.diff.actions.collapse': 'Daralt',
	'ui.diff.actions.expand': 'Genişlet',
	'ui.diff.toast.format_error': 'Biçimlendirilemiyor — geçersiz {language}',
	'ui.diff.error.invalid_left': 'Sol (Orijinal) girdide geçersiz {language}',
	'ui.diff.error.invalid_right': 'Sağ (Değiştirilen) girdide geçersiz {language}',
	'ui.diff.toast.patch_success': 'JSON Patch panoya kopyalandı',
	'ui.diff.toast.copy_value': 'Değer kopyalandı',
	'ui.diff.toast.share_copied': 'Paylaş bağlantısı panoya kopyalandı',
	'ui.diff.meta.chars': 'karakterler',
	'ui.diff.empty.hint': 'Karşılaştırmak için yukarıdaki iki panele de {language} yapıştır.',
	'ui.diff.report.title': '{language} Diff Raporu',
	'ui.diff.empty.load_sample': 'Örnek verileri yükle',
	'ui.layout.placeholders.modified': 'Değiştirildi',
	'ui.layout.aria.input_panel': 'Girdi paneli',
	'ui.layout.aria.output_panel': 'Çıkış paneli',
	'ui.layout.aria.copy_output': 'Çıkışı kopyala',
	'ui.layout.aria.download_output': 'Çıkışı indir',
	'ui.actions.upload': 'Yükle',
	'ui.actions.validate': 'Doğrula',
	'ui.actions.wrap': 'Kaydır',
	'ui.confirm.clear': 'Geçerli {language} girişini temizle?',
	'ui.confirm.clear_description': 'Bu işlem geri alınamaz.',
	'ui.drop_files': '.{extension} dosyalarını bırak',
	'ui.drop_to_load': 'Yüklemek için bırak',
	'ui.history.clear_all': "Geçmiş'i Temizle",
	'ui.history.clear_confirm': 'Tüm geçmiş temizlensin?',
	'ui.history.clear_description': 'Bu işlem geri alınamaz.',
	'ui.history.empty': 'Henüz geçmiş yok',
	'ui.history.recent': 'Son Kullanılanlar',
	'ui.history.title': 'Geçmiş',
	'ui.paste_here': 'Buraya yapıştır…',
	'ui.paste_language_here': '{language} buraya yapıştır…',
	'ui.placeholder.original_yaml': 'Orijinal YAML buraya yapıştır…',
	'ui.placeholder.modified_yaml': 'Değiştirilmiş YAML buraya yapıştır…',
	'ui.placeholder.search_tools_count': '{count}+ araçlarında ara...',
	'ui.placeholder.url': 'https://example.com/data.json',
	'ui.placeholder.xpath': "//book[@available='true']",
	'ui.related_categories': 'İlgili Kategoriler',
	'ui.stats.info': '{encoding} · {size} · {lines} satır · derinlik: {depth}',
	'ui.toast.copy_error': 'Kopyalama başarısız — tarayıcı izinlerini kontrol et',
	'ui.toast.copy_success': 'Panoya kopyalandı',
	'ui.toast.input_cleared': 'Girdi temizlendi',
	'ui.loaded_sample': '{label} yüklendi',
	'ui.toast.url_error': 'Getiremedim — doğrudan yapıştırmayı dene',
	'ui.toast.url_loaded': "URL'den yüklendi",
	'share.link_size': 'Bağlantı boyutu',
	'share.large_link_warning': 'Bu bağlantı büyük ve tüm tarayıcılarda çalışmayabilir',
	'share.data_encoded_note': "Veriler URL'de kodlanır ve hiçbir zaman sunucuya gönderilmez.",
	'share.enter_input_first': 'Paylaş bağlantısı oluşturmak için önce girdi gir.',
	'ui.share_url_copied': "Paylaş URL'si kopyalandı",
	'ui.copied': 'Kopyalandı',
	'ui.copy_link': 'Bağlantıyı Kopyala',
	'ui.share': 'Paylaş',
	'ui.close': 'Kapat',
	'ui.cancel': 'İptal',
	'ui.confirm': 'Onayla',
	'ui.tool_count.one': '1 araç',
	'ui.tool_count.other': '{count} araç',
	'ui.tree.collapse': 'Daralt',
	'ui.tree.expand': 'Genişlet',
	'ui.tree.root': 'Ağaç',
	'ui.tree.summary': '{keyCount} anahtar · {valueCount} değer · derinlik {maxDepth}',
	'ui.validity.empty': 'Boş',
	'ui.validity.error_at': 'Satır {line}, Sütun {column}: {message}',
	'ui.validity.invalid': 'Geçersiz {language}',
	'ui.validity.valid': 'Geçerli {language}',
	'ui.xpath.no_results': 'Sonuç yok. Farklı bir ifade dene veya XML yapısını kontrol et.',
	'ui.xpath.placeholder': 'Sol panele XML yapıştır, ardından XPath ifadesini çalıştır.',
	'ui.xpath.results_count.one': '1 sonuç',
	'ui.xpath.results_count.other': '{count} sonuç',
	'ui.validator.syntax': 'Syntax',
	'ui.validator.schema': 'Schema',
	'ui.validator.mode': 'Validator mode',
	'ui.validator.issue': 'issue',
	'ui.validator.issues': 'issues',
	'ui.validator.row': 'Satır',
	'ui.validator.warning': 'warning',
	'ui.validator.repair_json': "JSON'u Onar",
	'ui.validator.schema_title': 'JSON Şeması',
	'ui.validator.schema_standard': 'Draft-07+ via AJV',
	'ui.validator.paste_schema_placeholder': 'JSON Şemasını buraya yapıştır…',
	'ui.validator.paste_json': 'Doğrulamak için JSON yapıştır',
	'ui.validator.paste_schema': 'Doğrulamak için JSON Şeması yapıştır',
	'ui.validator.validating_schema': 'Şema doğrulanıyor…',
	'ui.validator.schema_invalid': 'Şema geçersiz',
	'ui.validator.json_matches_schema': 'JSON şemayla eşleşir',
	'ui.validator.schema_validation_failed': 'Şema doğrulaması başarısız',
	'ui.validator.no_syntax_errors': 'Sözdizimi hatası bulunamadı.',
	'ui.validator.json_matches_current_schema': 'JSON geçerli şemayla eşleşir.',
	'ui.validator.schema_match': 'Şema eşleşmesi',
	'ui.validator.valid_json': 'Geçerli JSON',
	'ui.validator.explanation_must_satisfy': 'karşılaması gerekir',
	'ui.validator.data_error_pos': 'Veri hatası satır {line}, sütun {column}',
	'ui.validator.paste_yaml': 'Doğrulamak için YAML yapıştır',
	'ui.validator.yaml_paste_schema': 'Doğrulamak için bir şema yapıştır',
	'ui.validator.yaml_validating_schema': 'Şema doğrulanıyor…',
	'ui.validator.yaml_matches_schema': 'YAML şemayla eşleşiyor',
	'ui.validator.yaml_matches_current_schema': 'YAML geçerli şemayla eşleşiyor.',
	'ui.validator.yaml_schema_title': 'Şema',
	'ui.validator.yaml_schema_standard': 'JSON Şeması Draft-07+ via AJV',
	'ui.validator.yaml_paste_schema_placeholder': 'JSON Şemasını veya YAML şemasını buraya yapıştır…',
	'ui.validator.yaml_schema_validation_desc':
		'YAML yapısını bir JSON Şemasına karşı doğrula. Şema girdisi JSON veya YAML olarak yazılabilir.',
	'ui.load_sample': 'Örnek yükle',
	'ui.share_url': "Paylaş URL'si",
	'ui.format_xml': "XML'i Biçimlendir",
	'ui.format_yaml': "YAML'ı Biçimlendir",
	'ui.minify_xml': "XML'i Küçült",
	'ui.format_beautify': 'Biçimlendir / Güzelleştir',
	'ui.minify': 'Küçült',
	'ui.repair_json': "JSON'u Onar",
	'ui.expand_all': 'Hepsini Genişlet',
	'ui.collapse_all': 'Hepsini Daralt',
	'ui.expand_to_depth': "Derinlik {depth}'e Genişlet",
	switch_to_tab: '{index} sekmesine geç',
	switch_to_xml_tab: "XML sekmesi {index}'e geç",
	switch_to_yaml_tab: "YAML sekmesi {index}'e geç",
	use_cases: 'Kullanım Durumları',
	faq: 'SSS',
	'ui.validator.schema_error_pos': 'Şema hatası satır {line}, sütun {column}',
	'ui.validator.syntax_error_pos': 'Sözdizimi hatası satır {line}, sütun {column}',
	'ui.validator.line_col_label': 'Satır {line}, sütun {column}',
	'ui.validator.well_formed': 'İyi Biçimlendirildi',
	'ui.validator.invalid_xml': 'Geçersiz XML',
	'ui.validator.loading_editor': 'Editör yükleniyor…',
	'ui.validator.xml_paste_hint': 'Doğrulamak için XML yapıştır veya yaz.',
	'ui.validator.xml_validation_desc':
		'İyi biçimlendirilme doğrulaması: kapalı olmayan etiketler, uyumsuz öğeler, geçersiz karakterler ve daha fazlası.',
	'ui.validator.xml_success_title': 'İyi Biçimlendirilmiş XML',
	'ui.validator.xml_success_desc':
		'Sözdizimi hatası algılanmadı. Belge iyi biçimlendirildi ve herhangi bir XML işlemcisi tarafından ayrıştırılabilir.',
	'ui.validator.error_count.one': '1 hata bulundu',
	'ui.validator.error_count.other': '{count} hata bulundu',
	'ui.toast.file_loaded': 'Dosya yüklendi: {name}',
	'ui.toast.clipboard_xml': "Pano XML'i",
	'ui.toast.pasted_xml': 'Panodaki XML yapıştırıldı',
	'ui.toast.xml_file_types':
		'Yalnızca .xml, .svg, .xhtml, .xsd, .wsdl ve .txt dosyaları desteklenir',
	'ui.aria.xml_input_panel': 'XML girdi paneli',
	'ui.aria.xml_output_panel': 'XML çıkış paneli',
	'ui.aria.xml_workspace_tabs': 'XML çalışma alanı sekmeleri',
	'ui.aria.xpath_panel': 'XPath sorgu paneli',
	'ui.aria.xml_validator': 'XML doğrulayıcı',
	'ui.aria.yaml_output_panel': 'YAML çıkış paneli',
	'ui.aria.yaml_validator': 'YAML doğrulayıcı',
	'ui.aria.csv_validator': 'CSV doğrulayıcı',
	'ui.aria.toml_validator': 'TOML doğrulayıcı',
	'ui.csv.controls.delimiter': 'Ayraç',
	'ui.csv.controls.header_row': 'Başlık satırı',
	'ui.csv.controls.skip_empty_lines': 'Boş satırları atla',
	'ui.csv.controls.trim_cells': 'Hücreleri kırp',
	'ui.csv.controls.quote_all': 'Tüm hücreleri tırnakla',
	'ui.csv.delimiter.comma': 'Virgül (,)',
	'ui.csv.delimiter.semicolon': 'Noktalı virgül (;)',
	'ui.csv.delimiter.tab': 'Sekme',
	'ui.csv.delimiter.pipe': 'Dikey çizgi (|)',
	'ui.csv.view.preview': 'Önizleme',
	'ui.csv.view.raw': 'Ham',
	'ui.csv.stats.rows': 'satır',
	'ui.csv.stats.columns': 'sütun',
	'ui.csv.preview.column_name': 'Sütun {index}',
	'ui.csv.preview.no_rows': 'Önizlenecek veri satırı yok',
	'ui.csv.preview.delimiter': 'ayraç',
	'ui.csv.preview.header_mode': 'başlık',
	'ui.csv.preview.no_header': 'Üretilen sütunlar',
	'ui.csv.preview.remaining_rows': 'Önizlemede yalnızca {count} ek satır gösteriliyor',
	'ui.csv.empty.title': 'Başlamak için CSV yapıştırın',
	'ui.csv.empty.desc':
		'CSV verilerini tamamen tarayıcınızda biçimlendirin, doğrulayın, önizleyin veya dönüştürün.',
	'ui.csv.empty.waiting_title': 'CSV çıktısı bekleniyor',
	'ui.csv.empty.waiting_desc':
		'Ayrıştırılan satırlar, biçimlendirilmiş çıktı veya dönüştürme sonuçları burada görünecek.',
	'ui.validator.invalid_yaml': 'Geçersiz YAML',
	'ui.validator.invalid_csv': 'Geçersiz CSV',
	'ui.validator.csv_paste_hint': 'Doğrulamak için CSV yapıştırın veya yazın.',
	'ui.validator.csv_validation_desc':
		'CSV girdisindeki ayraç yapısını, satır tutarlılığını ve bozuk tırnaklamayı doğrular.',
	'ui.validator.csv_error.header_empty': 'Başlık satırındaki {column}. sütun boş',
	'ui.validator.csv_error.duplicate_header': '"{value}" başlığı birden fazla kez kullanılıyor',
	'ui.validator.csv_error.row_width':
		'{row}. satırda {actual} sütun var, beklenen sütun sayısı {expected}',
	'ui.validator.csv_success_title': 'Geçerli CSV',
	'ui.validator.csv_success_desc':
		'Yapısal CSV hatası bulunmadı. Belge başarıyla ayrıştırılabiliyor.',
	'ui.validator.csv_paste_schema': 'Doğrulamak için bir şema yapıştırın',
	'ui.validator.csv_paste_schema_data': 'Doğrulamak için CSV yapıştırın',
	'ui.validator.csv_validating_schema': 'Şema doğrulanıyor…',
	'ui.validator.csv_matches_schema': 'CSV şemayla eşleşiyor',
	'ui.validator.csv_matches_current_schema': 'CSV satırları mevcut şemayla eşleşiyor.',
	'ui.validator.csv_schema_title': 'Şema',
	'ui.validator.csv_schema_standard': 'AJV ile JSON Schema Draft-07+',
	'ui.validator.csv_paste_schema_placeholder': 'JSON Schema veya YAML şemayı buraya yapıştırın…',
	'ui.validator.csv_schema_validation_desc':
		'CSV satırlarını tarayıcı içinde çalışan bir şemaya göre doğrulayın. Ayrıştırılan her satır, geçerli CSV seçenekleriyle nesne olarak doğrulanır.',
	'ui.validator.yaml_paste_hint': 'Doğrulamak için YAML yapıştırın veya yazın.',
	'ui.validator.yaml_validation_desc':
		'YAML sözdizimini, girintiyi, geçersiz karakterleri ve bozuk yapıları doğrular.',
	'ui.validator.yaml_success_title': 'Geçerli YAML',
	'ui.validator.yaml_success_desc':
		'Sözdizimi hatası bulunamadı. Belge YAML olarak başarıyla ayrıştırılabiliyor.',
	'ui.validator.yaml_warning_title': 'Stil uyarılarıyla birlikte geçerli YAML',
	'ui.validator.yaml_warning_desc':
		'Belge başarıyla ayrıştırılıyor, ancak birkaç stil sorunu okunabilirliği veya tutarlılığı azaltabilir.',
	'ui.validator.yaml_lint.tabs':
		'Girintide sekme karakteri bulundu. YAML genelde yalnızca boşluk kullanıldığında daha güvenlidir.',
	'ui.validator.yaml_lint.trailing_whitespace': 'Satır sonunda gereksiz boşluk bulundu.',
	'ui.validator.yaml_lint.odd_indentation':
		'Tek sayılı girinti genişliği bulundu. YAML genelde 2 boşluklu girintiyle daha tutarlı olur.',
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
	'ui.query.stats.chars': 'karakterler',
	'ui.query.stats.lines': 'satırlar',
	'ui.query.result': 'sonuç',
	'ui.query.results': 'sonuçlar',
	'ui.query.history': 'Geçmiş',
	'ui.query.sample_query': 'Örnek sorgu',
	'ui.query.guide': 'Kılavuz',
	'ui.query.query': 'Sorgu',
	'ui.query.mode': 'Sorgu modu',
	'ui.query.running': 'Sorgu çalışıyor…',
	'ui.query.empty_input': 'Sorgunuzu değerlendirmek için solda JSON yapıştır.',
	'ui.query.empty_input_yaml': 'Sorgunuzu değerlendirmek için solda YAML yapıştır.',
	'ui.query.empty_query': 'Sonuçları görmek için bir sorgu gir.',
	'ui.query.error_fallback': 'Sorgu başarısız',
	'ui.query.copy_error': 'Çıkışı kopyalayamadı',
	'ui.aria.json_query_panel': 'JSON sorgu paneli',
	'ui.aria.yaml_query_panel': 'YAML sorgu paneli',
	'ui.status.processing': 'İşleniyor…',
	'ui.status.waiting_output': 'Çıkış burada görünecek',
	'ui.output.controls.spaces': 'boşluklar',
	'ui.output.stats.chars': 'karakterler',
	'ui.output.stats.lines': 'satırlar',
	'ui.output.stats.documents': 'belgeler',
	'ui.output.stats.top_level_keys': 'üst seviye anahtarlar',
	'ui.output.stats.keys': 'anahtarlar',
	'ui.output.stats.objects': 'nesneler',
	'ui.output.stats.arrays': 'diziler',
	'ui.output.stats.strings': 'dizgiler',
	'ui.output.stats.values': 'değerler',
	'ui.output.stats.numbers': 'sayılar',
	'ui.output.stats.booleans': 'booleanlar',
	'ui.output.stats.nulls': 'null değerler',
	'ui.output.stats.depth': 'derinlik',
	'ui.output.stats.size_in': 'giriş',
	'ui.output.stats.size_out': 'çıkış',
	'ui.output.original': 'Orijinal',
	'ui.command_palette.title': 'Komut paleti',
	'ui.command_palette.placeholder': 'Araç, kategori ve biçim ara…',
	'ui.command_palette.recent': 'Son kullanılanlar',
	'ui.command_palette.no_results': 'Eşleşen araç bulunamadı',
	'ui.command_palette.hint_navigate': 'Gezin',
	'ui.command_palette.hint_open': 'Aç',
	'ui.command_palette.hint_close': 'Kapat',
	'ui.output.minified': 'Küçültüldü',
	'ui.output.saved': 'kaydedildi',
	'ui.output.meta.minified': 'KÜÇÜLTÜLDÜ',
	'ui.output.actions.wrap': 'Kaydır',
	'ui.output.actions.compare': 'Karşılaştır',
	'ui.output.actions.copy_json': 'JSON olarak Kopyala',
	'ui.output.actions.copy_js': 'JS Nesnesi olarak Kopyala',
	'ui.output.actions.copy_python': 'Python Dict olarak Kopyala',
	'ui.output.actions.copy_escaped': 'Kaçırıldı olarak Kopyala',
	'ui.output.actions.copy': 'Kopyala',
	'ui.output.actions.download': 'İndir',
	'ui.output.compare.input': 'Girdi',
	'ui.output.compare.output': 'Çıkış',
	'ui.output.error.invalid_title': 'Geçersiz JSON',
	'ui.output.controls.indent': 'Girinti',
	'ui.output.controls.tab': 'Sekme',
	'ui.output.controls.sort_keys': 'Anahtarları Sırala',
	'ui.output.controls.clean': 'Temizle',
	'ui.output.controls.clean_nulls': 'Null değerleri kaldır',
	'ui.output.controls.clean_strings': 'Boş dizgileri kaldır',
	'ui.output.controls.clean_arrays': 'Boş dizileri kaldır',
	'ui.output.controls.clean_objects': 'Boş nesneleri kaldır',
	'ui.output.controls.apply': 'Uygula',
	'ui.json_flatten.tab_label': 'Düzleştir',
	'ui.json_flatten.mode_label': 'Mod',
	'ui.json_flatten.mode.flatten': 'Düzleştir',
	'ui.json_flatten.mode.unflatten': 'Geri Aç',
	'ui.json_flatten.separator': 'Ayırıcı',
	'ui.json_flatten.separator_placeholder': '.',
	'ui.json_flatten.error.generic': 'Geçerli düzleştirme ayarlarıyla JSON dönüştürülemedi.',
	'ui.json_flatten.error.empty_separator': 'Ayırıcı boş olamaz.',
	'ui.json_flatten.error.invalid_result': 'Dönüştürme başarısız: geçersiz çıktı üretildi.',
	'ui.json_flatten.error.invalid_flat_object':
		'Geri açma girdisi düzleştirilmiş yollar içeren bir JSON nesnesi olmalıdır.',
	'ui.json_flatten.error.root_conflict':
		'Kök anahtar, diğer düzleştirilmiş yollarla birlikte kullanılamaz.',
	'ui.json_flatten.error.invalid_path': 'Bir veya daha fazla düzleştirilmiş yol geçersiz.',
	'ui.json_flatten.error.invalid_escape': 'Bir yol içinde geçersiz kaçış dizisi var.',
	'ui.json_flatten.error.invalid_array_index':
		'Düzleştirilmiş yollardaki dizi indeksleri negatif olmayan tam sayı olmalıdır.',
	'ui.json_flatten.error.path_conflict':
		'Düzleştirilmiş yollar çakışıyor; güvenli şekilde birleştirilemiyor.',
	'ui.json_flatten.error.unsafe_key':
		'Yol içinde güvensiz bir anahtar var (__proto__, constructor veya prototype).',
	'ui.json_patch.tab_label': 'Patch',
	'ui.json_patch.mode_label': 'Mod',
	'ui.json_patch.mode.generate': 'Patch Üret',
	'ui.json_patch.mode.apply': 'Patch Uygula',
	'ui.json_patch.target_label': 'Hedef JSON',
	'ui.json_patch.patch_label': 'JSON Patch (RFC 6902)',
	'ui.json_patch.target_placeholder': 'Hedef JSON belgesini buraya yapıştır…',
	'ui.json_patch.patch_placeholder': 'JSON Patch dizisini buraya yapıştır…',
	'ui.json_patch.base_label': 'Temel JSON',
	'ui.json_patch.base_hint': 'Giriş paneli temel JSON’dur. Çıktı üretilen patch olur.',
	'ui.json_patch.apply_hint': 'Giriş paneli temel JSON’dur. Çıktı patch uygulanmış sonuçtur.',
	'ui.json_patch.result_label_generate': 'Üretilen Patch',
	'ui.json_patch.result_label_apply': 'Patch Sonucu JSON',
	'ui.json_patch.empty_generate': 'RFC 6902 patch üretmek için hedef JSON belgesi ekleyin.',
	'ui.json_patch.empty_apply': 'Temel belgeye uygulamak için bir JSON Patch dizisi ekleyin.',
	'ui.json_patch.error.generic': 'Geçerli girdilerle JSON Patch işlenemedi.',
	'ui.json_patch.error.invalid_result': 'Patch işlemi başarısız: çıktı geçersiz.',
	'ui.json_patch.error.invalid_patch_array':
		'Patch girdisi, işlem nesneleri içeren bir JSON dizi olmalıdır.',
	'ui.json_patch.error.invalid_operation': 'Patch içinde geçersiz bir işlem nesnesi var.',
	'ui.json_patch.error.unsupported_operation': 'Patch içinde desteklenmeyen bir işlem var.',
	'ui.json_patch.error.missing_from': 'Patch işleminde zorunlu "from" yolu eksik.',
	'ui.json_patch.error.missing_value': 'Patch işleminde zorunlu "value" alanı eksik.',
	'ui.json_patch.error.invalid_pointer': 'Patch işleminde geçersiz bir JSON Pointer yolu var.',
	'ui.json_patch.error.path_not_found': 'Patch yolu mevcut belgede bulunamadı.',
	'ui.json_patch.error.test_failed': 'Patch test işlemi verilen yol için başarısız oldu.',
	'ui.json_patch.error.invalid_array_index': 'Patch işlemi geçersiz bir dizi indeksine başvuruyor.',

	// ── Araç SSS\'leri ve Kullanım Durumları ────────────────────────────
	'tool.json-formatter.faq.0.question': 'JSON biçimlendirmesi nedir?',
	'tool.json-formatter.faq.0.answer':
		'JSON biçimlendirmesi, JSON verilerini uygun girinti ve satır sonları ile düzenleyen işlemdir. Bunu daha okunabilir ve anlaşılır hale getirir.',
	'tool.json-formatter.faq.1.question': 'Girinti özelleştirebilir miyim?',
	'tool.json-formatter.faq.1.answer':
		'Evet! Girinti için 2 boşluk, 4 boşluk veya sekmeler arasında seçim yapabilirsiniz. Biçimlendirici orijinal veri yapınızı korurken tercih ettiğiniz biçimlendirmeyi uygular.',
	'tool.json-formatter.faq.2.question': 'Bu araç verilerimi değiştirir mi?',
	'tool.json-formatter.faq.2.answer':
		"Hayır. Biçimlendirici yalnızca JSON'un görsel sunumunu uygun girinti ve satır sonları ekleyerek değiştirir. Gerçek veriler, anahtarlar ve değerler tamamen aynı kalır.",
	'tool.json-formatter.faq.3.question': 'JSON anahtarlarını sıralayabilir miyim?',
	'tool.json-formatter.faq.3.answer':
		'Evet! Tüm anahtarları alfabetik sıraya göre sıralamak için "Anahtarları Sırala" seçeneğini etkinleştirin. Bu JSON dosyalarını karşılaştırmak veya tutarlı sıralama korumanız için kullanışlıdır.',
	'tool.json-formatter.use_case.0':
		'API yanıtlarında hata ayıklamak için daha iyili okunabilirlik için biçimlendirmek',
	'tool.json-formatter.use_case.1': 'Web kaynaklarından minified JSON dosyalarını temizlemek',
	'tool.json-formatter.use_case.2':
		'Yapılandırma dosyalarını tutarlı biçimlendirme ile sürüm kontrolü için hazırlamak',
	'tool.json-formatter.use_case.3':
		'JSON verilerini belgeler veya sunumlar için daha sunable hale getirmek',
	'tool.json-formatter.use_case.4':
		"Elle düzenleme veya inceleme öncesi JSON'u doğrulamak ve biçimlemek",

	'tool.json-validator.faq.0.question': 'JSON doğrulaması neleri kontrol eder?',
	'tool.json-validator.faq.0.answer':
		'JSON doğrulaması eksik parantez, eşleşmeyen tırnak, sondaki virgül, geçersiz kaçış dizileri ve nesnelerdeki yinelenen anahtarlar dahil sözdizimi hatalarını kontrol eder.',
	'tool.json-validator.faq.1.question': 'Sözdizimi ve şema doğrulaması arasındaki fark nedir?',
	'tool.json-validator.faq.1.answer':
		"Sözdizimi doğrulaması JSON'un JSON belirtimine göre iyi biçimlendirildiğini sağlar. Şema doğrulaması daha ileri giderek JSON yapısının belirli kurallar, veri türleri ve değer kısıtlamalarına sahip önceden tanımlanmış bir şemayla eşleşip eşleşmediğini kontrol eder.",
	'tool.json-validator.faq.2.question': 'Yorumlar içeren JSON doğrulayabilir miyim?',
	'tool.json-validator.faq.2.answer':
		'Evet! Bu doğrulayıcı JSON5 biçimini destekler, bu da yorumlara (hem // hem de /* */), sondaki virgüllere ve dizgiler için tekli tırnaklara izin verir. Otomatik olarak JSON5 sözdizimini algılar ve işler.',
	'tool.json-validator.use_case.0':
		'API yanıtlarını işlem öncesi doğrulama için uygulamanızda doğrulama',
	'tool.json-validator.use_case.1':
		'Yapılandırma dosyalarını dağıtım öncesi kontrol etmek ve çalışma zamanı hatalarını önlemek',
	'tool.json-validator.use_case.2':
		'Formlar veya dosya yüklemelerinde kullanıcı tarafından gönderilen JSON verilerini doğrulama',
	'tool.json-validator.use_case.3': 'Kodunuzda JSON ayrıştırma hatalarında hata ayıklama',
	'tool.json-validator.use_case.4': 'Sistemler arasında JSON aktarılırken veri bütünlüğünü sağlama',

	'tool.json-minifier.faq.0.question': 'JSON küçültme nedir?',
	'tool.json-minifier.faq.0.answer':
		'JSON küçültme, JSON verilerinin işlevselliğini değiştirmeden gereksiz karakterleri çıkarma işlemdir. Buna boşluklar, satır sonları ve yorumları kaldırarak dosya boyutunu azaltmak dahildir.',
	'tool.json-minifier.faq.1.question': 'Küçültme JSON işlevselliğini etkiler mi?',
	'tool.json-minifier.faq.1.answer':
		'Hayır. Küçültme yalnızca boşluklar, sekmeler ve satır sonları gibi görsel biçimlendirme karakterlerini kaldırır. Gerçek veri yapısı, anahtarlar ve değerler tamamen aynı kalır ve tam JSON uyumluluğu korur.',
	'tool.json-minifier.faq.2.question': 'Minified JSON ne zaman kullanmalıyım?',
	'tool.json-minifier.faq.2.answer':
		"Minified JSON'u üretim ortamlarında, API yanıtlarında ve ağlar üzerinden veri aktarırken kullanın. Bant genişliği kullanımını azaltır ve veri aktarımını hızlandırır. Geliştirme ve hata ayıklama için biçimlendirilmiş JSON kullanın.",
	'tool.json-minifier.use_case.0':
		'Yükleme sürelerini iyileştirmek için API yanıtlarının dosya boyutunu azaltma',
	'tool.json-minifier.use_case.1':
		'Üretim dağıtımları için JSON yapılandırma dosyalarını optimize etme',
	'tool.json-minifier.use_case.2':
		'Verileri veritabanlarında veya yerel depolamada sıkıştırmadan önce',
	'tool.json-minifier.use_case.3':
		'Ağlar üzerinden JSON aktarırken bant genişliği kullanımını en aza indirgeme',
	'tool.json-minifier.use_case.4':
		'HTML veya JavaScript koduna gömekmek için JSON dosyalarını hazırlama',

	'tool.json-to-yaml.faq.0.question': "JSON'dan YAML'a dönüştürme nedir?",
	'tool.json-to-yaml.faq.0.answer':
		"JSON'dan YAML'a dönüştürme, JSON verilerini daha insan tarafından okunabilir olan YAML biçimine dönüştürür. YAML yorumlar, bulantılar ve daha esnek sözdizimi sağlar.",
	'tool.json-to-yaml.faq.1.question': 'Dönüştürme kayıpsız mı?',
	'tool.json-to-yaml.faq.1.answer':
		'Evet! Dönüştürme tüm verileri ve yapıyı korur. JSON ve YAML aynı veri yapılarını temsil edebilir, bu nedenle dönüştürme işlemi sırasında bilgi kaybolmaz.',
	'tool.json-to-yaml.use_case.0':
		"JSON yapılandırma dosyalarını daha iyi okunabilirlik için YAML'a dönüştürme",
	'tool.json-to-yaml.use_case.1': 'JSON tanımlarından Kubernetes manifesto oluşturma',
	'tool.json-to-yaml.use_case.2': "Uygulama yapılandırmalarını JSON'dan YAML biçimine taşıma",
	'tool.json-to-yaml.use_case.3': 'CI/CD boru hattı yapılandırmaları için YAML dosyaları oluşturma',

	'tool.json-to-toml.faq.0.question': "JSON'dan TOML'a dönüştürme nedir?",
	'tool.json-to-toml.faq.0.answer':
		"JSON'dan TOML'a dönüştürme, JSON verilerini insanlar tarafından okunabilir yapılandırma dosyaları için tasarlanan TOML biçimine dönüştürür. TOML basit sözdizimi ile bölümleri, anahtar-değer çiftleri ve tabloları kullanır.",
	'tool.json-to-toml.faq.1.question': 'JSON yerine ne zaman TOML kullanmalıyım?',
	'tool.json-to-toml.faq.1.answer':
		"İnsanlar tarafından manuel olarak düzenlenmeleri gereken yapılandırma dosyaları için TOML'u kullanın. TOML'un sözdizimi yapılandırmalar için daha temiz ve sezgiseldir, JSON ise makine arası iletişim için daha iyidir.",
	'tool.json-to-toml.use_case.0':
		"package.json'ı Python projeleri için pyproject.toml'a dönüştürme",
	'tool.json-to-toml.use_case.1': 'JSON yapılandırmalarından Cargo.toml dosyaları oluşturma',
	'tool.json-to-toml.use_case.2': 'Uygulama ayarlarını daha iyi bakım için TOML biçimine taşıma',

	'tool.xml-to-csv.faq.2.question': 'CSV dönüşümü için hangi XML türleri en iyisidir?',
	'tool.xml-to-csv.faq.2.answer':
		'Tekrar eden elementleri (birden fazla <row> veya <item> etiketi gibi) olan XML en iyi şekilde çalışır. Dönüştürücü, element adlarını ve niteliklerini otomatik olarak sütun başlıkları olarak algılar.',

	'tool.xml-xpath.faq.2.question': 'Hangi XPath sürümü destekleniyor?',
	'tool.xml-xpath.faq.2.answer':
		"Bu araç XPath 1.0'ı destekler, bu en yaygın olarak uygulanan sürümdür. XML sorgulama için tüm standart eksenleri, fonksiyonları ve operatörleri içerir.",

	'tool.xml-xpath.faq.3.question': 'Geçersiz XML üzerinde XPath test edebilir miyim?',
	'tool.xml-xpath.faq.3.answer':
		"Hayır. XPath iyi yapılandırılmış XML gerektirir. XML'inizde sözdizimi hataları varsa, XPath sorgularını çalıştırmadan önce bunları XML Doğrulayıcı veya Biçimlendirici kullanarak düzeltin.",

	'tool.xml-minifier.faq.2.question': 'Minifikasyon XML işlevselliğini etkiler mi?',
	'tool.xml-minifier.faq.2.answer':
		'Hayır. XML minifikasyonu sadece yapıyı veya verileri değiştirmeden boşlukları ve yorumları kaldırır. Minifiye edilmiş XML tamamen geçerli kalır ve işlevsel olarak aynıdır.',

	'tool.json-to-markdown.faq.0.question': "JSON'dan Markdown tablosuna dönüştürme nedir?",
	'tool.json-to-markdown.faq.0.answer':
		'Bu araç, JSON verilerini (genellikle bir dizi) Markdown tablo biçimine dönüştürür. Bu, belgelerde, README dosyalarında veya Markdown uyumlu herhangi bir platformda yapılandırılmış verileri görüntülemeyi kolaylaştırır.',
	'tool.json-to-markdown.faq.1.question': 'Hangi JSON yapıları desteklenir?',
	'tool.json-to-markdown.faq.1.answer':
		'Araç nesnelerinin dizileriyle en iyi şekilde çalışır. Her nesne tabloda bir satır olur ve nesne özellikleri sütunlar olur. İç içe nesneler nokta gösterimi kullanılarak düzleştirilir.',
	'tool.json-to-markdown.use_case.0': 'README dosyaları ve belgeleri için veri tabloları oluşturma',
	'tool.json-to-markdown.use_case.1': 'API yanıt örneklerini dokümantasyon tablolarına dönüştürme',
	'tool.json-to-markdown.use_case.2':
		'Elektronik tablolar verilerini JSON olarak aktarılan verilerdendaha Markdown tabloları oluşturma',
	'tool.json-to-markdown.use_case.3': 'Proje belgelerinde yapılandırma seçeneklerini görüntüleme',

	'tool.json-to-csv.faq.0.question': "JSON'dan CSV'ye dönüştürme nedir?",
	'tool.json-to-csv.faq.0.answer':
		"JSON'dan CSV'ye dönüştürme, yapılandırılmış JSON verilerini (genellikle nesnelerin dizisi) düz Virgülle Ayrılmış Değerler biçimine dönüştürür. Bu, Excel veya Google Sheets gibi elektronik tabloların içine veri aktarmak için idealdir.",
	'tool.json-to-csv.faq.1.question': 'Hangi JSON yapıları en iyi şekilde çalışır?',
	'tool.json-to-csv.faq.1.answer':
		'Araç, her nesnenin aynı anahtarları olan düz nesne dizileriyle en iyi şekilde çalışır. Bu anahtarlar CSV başlıkları olur ve değerler satırlar olur. İç içe nesneler veya diziler genellikle düzleştirilir.',
	'tool.json-to-csv.use_case.0': "İş analizi için API verilerini Excel'e aktarma",
	'tool.json-to-csv.use_case.1':
		"Veritabanı JSON dışarı aktarmalarını toplu içeri aktarmalar için CSV'ye dönüştürme",
	'tool.json-to-csv.use_case.2':
		'JSON veri kümelerini makine öğrenmesi modelleri için CSV biçimine hazırlama',
	'tool.json-to-csv.use_case.3': 'Elektronik tablo uygulamaları için rapor verilerini oluşturma',

	'tool.json-jsonpath.faq.0.question': 'JSONPath nedir?',
	'tool.json-jsonpath.faq.0.answer':
		"JSONPath, JSON verilerinden belirli verileri çıkarmak için bir sorgu dilidir. XML için XPath'a benzer ve JSON yapılarında gezinmek için nokta gösterimi ve filtreleri kullanır.",
	'tool.json-jsonpath.faq.1.question': 'JSONPath sözdizimi nasıl çalışır?',
	'tool.json-jsonpath.faq.1.answer':
		'JSONPath, $.store.book[*].title gibi ifadeler kullanır. $ kökü temsil eder, . özellik erişimi sağlar, [*] dizideki tüm öğeleri seçer ve çeşitli operatörler sonuçları filtreleyip dönüştürebilir.',
	'tool.json-jsonpath.faq.2.question': 'JSONPath sonuçlarıyla ne yapabilirim?',
	'tool.json-jsonpath.faq.2.answer':
		'Belirli değerleri çıkart, dizileri filtrele, hesaplamalar gerçekleştir ve JSON verilerini dönüştürebilirsiniz. JSONPath, API testi, veri çıkarma ve veri boru hatları uygulamalarında kullanılan JSON yapısı doğrulaması için kullanışlıdır.',
	'tool.json-jsonpath.use_case.0': 'API yanıtlarından belirli alanları çıkarma',
	'tool.json-jsonpath.use_case.1': 'Büyük JSON veri kümeleri filtrelemesi ve sorgulaması',
	'tool.json-jsonpath.use_case.2': 'Otomatik testlerde API yanıtlarını test etme',
	'tool.json-jsonpath.use_case.3': 'Veri boru hatlarında JSON yapısını ve içeriğini doğrulama',

	'tool.json-jmespath.faq.0.question': 'JMESPath nedir?',
	'tool.json-jmespath.faq.0.answer':
		"JMESPath, JSON belgelerinden öğeleri çıkarmak ve dönüştürmek için sorgu dilidir. JSONPath'ten daha güçlü veri dönüştürme yetenekleri sağlar, filtreleme, eşleme ve toplama işlevleri dahil.",
	'tool.json-jmespath.faq.1.question': "JMESPath'in JSONPath'ten farkı nedir?",
	'tool.json-jmespath.faq.1.answer':
		'JMESPath, işlevler, filtreler ve boru ifadeleri gibi daha güçlü veri dönüştürme özelliklerini sunmuştur. JSONPath birincil olarak çıkarma için iken, JMESPath JSON verilerini yeni yapılara yeniden şekillendir ve dönüştürebilir.',
	'tool.json-jmespath.faq.2.question': 'Yaygın JMESPath işlemleri nelerdir?',
	'tool.json-jmespath.faq.2.answer':
		'Yaygın işlemler [?condition] ile filtreleme, {key: value} ile alan seçimi, sort_by() ile sıralama ve length(), sum() ve type() gibi işlevlerle toplama yayılır. Karmaşık dönüştürmeler için | ile işlemleri boru.',
	'tool.json-jmespath.use_case.0': 'API yanıtlarını gerekli veri yapılarına dönüştürme',
	'tool.json-jmespath.use_case.1':
		'Karmaşık JSON belgelerinden verileri filtreleme ve yeniden şekillendirme',
	'tool.json-jmespath.use_case.2': 'İç içe JSON yapılarından belirli bilgileri çıkarma',
	'tool.json-jmespath.use_case.3': 'Daha basit ön uç tüketimi için JSON yanıtlarını temizleme',

	// JSON Diff
	'tool.json-diff.display_name': 'JSON Diff',
	'tool.json-diff.tagline': 'İki JSON belgesini karşılaştır',
	'tool.json-diff.description':
		'Güçlü anlamsal JSON karşılaştırma aracı. İki JSON belgesini yapıştır ve farklılıkları anında gör, anahtar sırasını ve keyfi boşluğu yok say. API değişikliklerinde hata ayıklama veya yapılandırma güncellemelerini doğrulamak için mükemmel.',
	'tool.json-diff.primary_keyword': 'json diff aracı',
	'tool.json-diff.meta_title': "JSON Diff Aracı - JSON'u Çevrimiçi Karşılaştır",
	'tool.json-diff.meta_description':
		'İki JSON belgesini çevrimiçi olarak anlamsal olarak karşılaştır. JSON diff aracımız anahtar sırasını ve biçimlendirme farklılıklarını yok sayarak tam olarak ne değiştiğini göster.',
	'tool.json-diff.operation': 'Karşılaştır',
	'tool.json-diff.faq.0.question': 'Anahtar sırasını yok sayıyor mu?',
	'tool.json-diff.faq.0.answer':
		'Evet. Diff motorumuz JSON yapısını normalleştirilmiş temsillere ayrıştırır, yani {"a": 1, "b": 2} ve {"b": 2, "a": 1} aynı kabul edilir.',
	'tool.json-diff.faq.1.question': 'Büyük JSON dosyaları işleyebilir mi?',
	'tool.json-diff.faq.1.answer':
		'Evet, karşılaştırma tarayıcıda verimli bir şekilde gerçekleştirilir ve ekleme, çıkarma ve değişiklik eklemelerini satır satır görüntüler.',
	'tool.json-diff.faq.2.question': 'Verilerim güvenli mi?',
	'tool.json-diff.faq.2.answer':
		'Kesinlikle. Karşılaştırma tamamen tarayıcıda yerel olarak gerçekleştirilir. JSON verileri hiçbir zaman sunucularımıza gönderilmez.',
	'tool.json-diff.use_case.0': 'Gerileme eşleştirmeden farklı API sürümü yanıtlarını karşılaştırma',
	'tool.json-diff.use_case.1':
		'Üretim ayarları dosyalarında beklenmedik yapılandırma değişikliklerinde hata ayıklama',
	'tool.json-diff.use_case.2':
		'JSON manifesto veya lock dosyalarını içeren git birleştirme çatışmalarını gözden geçirme',
	'tool.json-diff.use_case.3':
		'Hazırlama ve üretim veritabanı dışarı aktarmalarında tutarsızlıkları bulma',

	// ── XML Aracı SSS\'leri ve Kullanım Durumları ──────────────────────────────
	'tool.xml-formatter.faq.0.question': 'XML biçimlendirmesi nedir?',
	'tool.xml-formatter.faq.0.answer':
		'XML biçimlendirmesi, XML kodunu uygun girintileme ve satır sonları ile düzenleyen işlemdir. Bu, geliştiricilerin belge yapısını anlamasını ve bakımını yapmasını kolaylaştırır.',
	'tool.xml-formatter.faq.1.question': 'Girinti özelleştirebilir miyim?',
	'tool.xml-formatter.faq.1.answer':
		'Evet! Girinti için 2 boşluk, 4 boşluk veya sekmeler arasında seçim yapabilirsiniz. Biçimlendirici XML yapınızı korurken tercih ettiğiniz biçimlendirme stilini uygular.',
	'tool.xml-formatter.faq.2.question': 'Biçimlendirici yorumları korur mu?',
	'tool.xml-formatter.faq.2.answer':
		'Evet, XML biçimlendirici tüm yorumları orijinal konumlarında korur. Yalnızca okunabilirliği geliştirmek için girintileme ve satır sonlarını değiştirir, içerik veya yapıyı etkilemez.',
	'tool.xml-formatter.use_case.0':
		'XML dosyalarını belgelendirme ve kod incelemesi için daha okunabilir hale getirme',
	'tool.xml-formatter.use_case.1': "Web yanıtlarından minified XML'i temizleme",
	'tool.xml-formatter.use_case.2': 'Ekip projelerinde XML biçimlendirmesini standardize etme',
	'tool.xml-formatter.use_case.3': 'Görsel hiyerarşiyi geliştirerek XML yapısında hata ayıklama',
	'tool.xml-formatter.use_case.4':
		'Tutarlı biçimlendirme ile XML dosyalarını sürüm kontrolü için hazırlama',

	'tool.xml-validator.faq.0.question': 'XML doğrulaması neleri kontrol eder?',
	'tool.xml-validator.faq.0.answer':
		'XML doğrulaması, uygun etiket yuvalanması, eşleşen açılış/kapanış etiketleri, geçerli nitelik sözdizimi, doğru karakter kodlaması ve XML belirtim kurallarına uyum dahil olmak üzere iyi biçimlendirilmeyi kontrol eder.',
	'tool.xml-validator.faq.1.question': 'İyi biçimlendirilmiş ve geçerli XML arasındaki fark nedir?',
	'tool.xml-validator.faq.1.answer':
		'İyi biçimlendirilmiş XML temel sözdizimi kurallarını izler ancak yapısal sorunları olabilir. Geçerli XML iyi biçimlendirilmiştir VE izin verilen yapıyı ve içeriği tanımlayan belirli bir DTD veya XML Şemasına uyum sağlar.',
	'tool.xml-validator.faq.2.question': 'XML doğrulama hatalarını nasıl düzeltebilirim?',
	'tool.xml-validator.faq.2.answer':
		'Doğrulayıcı her hata için tam satır ve sütun numaraları gösterir. Yaygın düzeltmeler şunlar: kapalı olmayan etiketleri kapatma, yanlış eşleşen etiketleri düzeltme, yinelenen nitelikleri kaldırma ve doğru karakter kodlamasını sağlama. Ayrıntılı açıklamalar için herhangi bir hataya tıklayın.',
	'tool.xml-validator.use_case.0': 'Uygulamalarda işlemden önce API yanıtlarını doğrulama',
	'tool.xml-validator.use_case.1':
		'Dağıtım öncesi yapılandırma dosyalarını kontrol etmek ve hataları önlemek',
	'tool.xml-validator.use_case.2':
		'Üçüncü taraf sistemlerinden XML veri içeri aktarmalarını doğrulama',
	'tool.xml-validator.use_case.3':
		'Geliştirme ortamlarında XML ayrıştırma sorunlarında hata ayıklama',
	'tool.xml-validator.use_case.4': 'Kurumsal sistemlere göndermeden önce XML uyumluluğunu sağlama',

	'tool.xml-to-json.faq.0.question': "XML'den JSON'a dönüştürme nasıl çalışır?",
	'tool.xml-to-json.faq.0.answer':
		'Dönüştürme, XML öğelerini JSON nesnelerine eşler, nitelikleri anahtar-değer çiftleri haline getirir ve metin içeriğini dizge değerlerine dönüştürür. XML ad alanları korunur ve aynı ada sahip çoklu öğeler diziler olur.',
	'tool.xml-to-json.faq.1.question': 'Dönüştürme tersinir mi?',
	'tool.xml-to-json.faq.1.answer':
		'Çoğunlukla evet, ancak yorumlar, işleme talimatları ve nitelik sırası gibi bazı XML özelikleri kaybolabilir. Temel veri yapısı çift yönlü dönüştürme için bozulmadan kalır.',
	'tool.xml-to-json.faq.2.question': "XML nitelikleri JSON'da nasıl işlenir?",
	'tool.xml-to-json.faq.2.answer':
		'XML nitelikleri varsayılan olarak "@" ön ek ile JSON özelliklerine dönüştürülür. Bu, bunları alt öğelerden ayırır. Farklı adlandırma kurallarını kullanmak için gelişmiş ayarlarda bu davranışı özelleştirebilirsiniz.',
	'tool.xml-to-json.use_case.0': "Modern uygulamalar için SOAP API yanıtlarını JSON'a dönüştürme",
	'tool.xml-to-json.use_case.1': 'JavaScript uygulamalarında XML yapılandırma dosyalarını işleme',
	'tool.xml-to-json.use_case.2': 'Eski XML verilerini modern JSON tabanlı sistemlere taşıma',
	'tool.xml-to-json.use_case.3': 'Analiz için XML site haritalarından veri çıkarma',
	'tool.xml-to-json.use_case.4': 'RSS beslemelerini mobil uygulama tüketimine dönüştürme',

	'tool.json-to-xml.faq.0.question': "JSON'dan XML'e dönüştürme nedir?",
	'tool.json-to-xml.faq.0.answer':
		"JSON'dan XML'e dönüştürme, JSON verilerini XML biçimine dönüştürür, nesneleri öğelere eşler, dizileri yinelenen öğelere ve başlang primitive değerleri metin içeriğine dönüştürür. Bu, XML gerektiren sistemler ile uyumluluğu sağlar.",
	'tool.json-to-xml.faq.1.question': 'Diziler dönüştürmede nasıl işlenir?',
	'tool.json-to-xml.faq.1.answer':
		'JSON dizileri aynı etiket adı ile çoklu XML öğeleri olur. Sarıcı öğeleri mi yoksa her dizi öğesi için aynı öğe etiketini yinelemek mi kullanalacağını yapılandırabilirsiniz.',
	'tool.json-to-xml.faq.2.question': 'Dönüştürücü özel karakterleri nasıl işler?',
	'tool.json-to-xml.faq.2.answer':
		"Özel karakterler XML standartlarına göre otomatik olarak kaçırılır. Bu &, <, >, \" ve ' gibi karakterleri geçerli XML'yi sağlamak için ilgili XML varlıklarına dönüştürür.",
	'tool.json-to-xml.use_case.0': 'JSON verilerinden XML site haritaları oluşturma',
	'tool.json-to-xml.use_case.1': 'JSON içeriğinden RSS/Atom beslemeleri oluşturma',
	'tool.json-to-xml.use_case.2': 'API yanıtlarını XML gerektiren eski sistemlere dönüştürme',
	'tool.json-to-xml.use_case.3': "Java uygulamaları için JSON'dan yapılandırma dosyaları oluşturma",
	'tool.json-to-xml.use_case.4': 'Web hizmetleri için JSON yüklerinden SOAP zarfları oluşturma',

	'tool.xml-to-yaml.faq.0.question': "Neden XML'yi YAML'a dönüştürmelisiniz?",
	'tool.xml-to-yaml.faq.0.answer':
		"YAML, XML'den daha insan tarafından okunabilir ve manuel olarak düzenlemeyi kolaylaştırır. Yapılandırma dosyalarında, belgelerde ve okunabilirliğin önemli olduğu veri alışverişi için yaygın olarak kullanılır.",
	'tool.xml-to-yaml.faq.1.question': 'XML nitelikleri nasıl işlenir?',
	'tool.xml-to-yaml.faq.1.answer':
		'XML nitelikleri tipik olarak YAML öğesi içinde anahtar-değer çiftlerine dönüştürülür. Nitelikler için özel sözdizimi kullanıp kullanmayacağınızı veya bunları normal özellikler olarak mı ele alacağınızı yapılandırabilirsiniz.',
	'tool.xml-to-yaml.faq.2.question': "Karmaşık iç içe XML YAML'a dönüştürülebilir mi?",
	'tool.xml-to-yaml.faq.2.answer':
		'Evet! Dönüştürücü, keyfi olarak derin yuvalanmayı, karışık içeriği ve karmaşık XML yapılarını işler. Ortaya çıkan YAML aynı veri hiyerarşisini daha okunabilir biçimde korur.',
	'tool.xml-to-yaml.use_case.0': "Spring Framework XML yapılandırmalarını YAML'a dönüştürme",
	'tool.xml-to-yaml.use_case.1':
		"XML'den daha okunabilir YAML biçimine derleme komut dosyaları taşıma",
	'tool.xml-to-yaml.use_case.2': 'XML şablonlarından Kubernetes kaynakları oluşturma',
	'tool.xml-to-yaml.use_case.3': 'Belgelendirme amaçları için XML verilerini işleme',
	'tool.xml-to-yaml.use_case.4': 'Ansible playbooks ve otomasyonu için XML verilerini dönüştürme',

	'tool.xml-to-csv.faq.0.question': "XML'den CSV'ye dönüştürme nasıl çalışır?",
	'tool.xml-to-csv.faq.0.answer':
		"Dönüştürücü, XML'den yinelenen öğeleri çıkarır ve bunları CSV'de satırlar olarak oluşturur, öğe nitelikleri ve alt öğeleri sütunlar olur. Hangi öğeleri dönüştüreceğinizi ve çıkış biçimini özelleştirebilirsiniz.",
	'tool.xml-to-csv.faq.1.question': 'Hangi XML yapıları CSV dönüştürmesi için en iyi çalışır?',
	'tool.xml-to-csv.faq.1.answer':
		'Yinelenen kayıt benzeri öğeler içeren XML en iyi şekilde çalışır. Her yinelenen öğe bir satır olur ve özellikleri sütunlar olur. Derin iç içe yapılar düzleştirilmesi gerekebilir.',
	'tool.xml-to-csv.use_case.0': 'XML raporlarından veri çıkarma elektronik tablo biçimine',
	'tool.xml-to-csv.use_case.1':
		"Veritabanlarından gelen XML dışarı aktarmalarını analiz için CSV'ye dönüştürme",
	'tool.xml-to-csv.use_case.2': "Veri analizi için Excel'de XML günlüklerini işleme",
	'tool.xml-to-csv.use_case.3':
		"Ürün kataloglarını XML'den e-ticaret platformları için CSV'ye taşıma",
	'tool.xml-to-csv.use_case.4': 'XML API yanıtlarını tablosal biçime dönüştürerek analiz etme',

	'tool.xml-minifier.faq.0.question': 'XML küçültme nedir?',
	'tool.xml-minifier.faq.0.answer':
		"XML küçültme, XML'in işlevselliğini değiştirmeden gereksiz karakterleri çıkarır. Buna boşluk, satır sonları ve yorumlar dahil olmak üzere dosya boyutunu azaltmak için.",
	'tool.xml-minifier.faq.1.question': 'Küçültme XML işlemesini etkiler mi?',
	'tool.xml-minifier.faq.1.answer':
		'Hayır. XML ayrıştırıcıları varsayılan olarak etiketler arasında boşluğu yoksayarlar, bu nedenle minified XML, biçimlendirilmiş XML ile aynı şekilde işlenir ancak daha küçük dosya boyutu nedeniyle daha hızlı yüklenir.',
	'tool.xml-minifier.use_case.0': 'API yanıtlarının dosya boyutunu azaltmak için',
	'tool.xml-minifier.use_case.1': 'Üretim ortamları için XML dosyalarını optimize etme',
	'tool.xml-minifier.use_case.2':
		'XML verisi aktarırken bant genişliği kullanımını en aza indirgeme',
	'tool.xml-minifier.use_case.3': 'XML dosyalarını diğer belgelere gömekmek için hazırlama',

	'tool.xml-xpath.faq.0.question': 'XPath nedir?',
	'tool.xml-xpath.faq.0.answer':
		'XPath, XML belgelerinden düğümleri seçmek için bir sorgu dilidir. Dosya sistemi yollarına benzer yol ifadeleri kullanarak öğeleri ve nitelikleri gezinir.',
	'tool.xml-xpath.faq.1.question': 'XPath ifadeleri ne yapabilir?',
	'tool.xml-xpath.faq.1.answer':
		'XPath, öğeleri ada, nitelik değerine, konumuna veya içeriğine göre seçebilir. Metin işlemi için işlevler ve matematiksel işlemler dahil ileri sorgulama için karmaşık koşulları destekler.',
	'tool.xml-xpath.use_case.0': 'Büyük XML belgelerinden belirli veriler çıkarma',
	'tool.xml-xpath.use_case.1': 'Otomatik test paketlerinde XML verilerini test etme',
	'tool.xml-xpath.use_case.2': 'XSLT şablonları kullanarak XML verilerini dönüştürme',
	'tool.xml-xpath.use_case.3': 'XML yapısını ve içeriğini programlı olarak doğrulama',
	'tool.csv-to-sql.display_name': 'CSV → SQL',
	'tool.csv-to-sql.tagline': 'CSV verisini SQL INSERT komutlarına dönüştür',
	'tool.csv-to-sql.description':
		'CSV satırlarını, sayılar ve boolean değerleri için tip tahmini ile SQL INSERT komutlarına dönüştürün. Özelleştirilebilir tablo adı ve yığın (batch) boyutu.',
	'tool.csv-to-sql.primary_keyword': 'csv sql çevirici',
	'tool.csv-to-sql.meta_title': 'CSV to SQL Çevirici — fmtly.dev',
	'tool.csv-to-sql.meta_description':
		'Tarayıcınızda CSV verisinden SQL INSERT komutları oluşturun. Verileriniz sunucuya gönderilmez.',
	'tool.csv-to-sql.operation': 'SQL Yap',
	'tool.csv-to-sql.faq.0.question': 'Tip tahmini nasıl çalışıyor?',
	'tool.csv-to-sql.faq.0.answer':
		'Dönüştürücü, sayıları ve boolean (doğru/yanlış) değerlerini otomatik olarak algılar. Diğer her şey, tek tırnak kullanılarak string değeri olarak güvenli bir şekilde kaçış (escape) işlemine tabi tutulur.',
	'tool.csv-to-sql.use_case.0':
		'Veritabanı migrationları için e-tablo verilerinden SQL verileri (seed) oluşturma',
	'tool.csv-to-sql.use_case.1':
		'Özel scriptler yazmadan CSV verilerini SQL veritabanlarına hızlıca aktarma',
	'tool.json-schema-generator.display_name': 'JSON Şema Oluşturucu',
	'tool.json-schema-generator.tagline': 'JSON örneklerinden JSON Şeması çıkarın',
	'tool.json-schema-generator.description':
		'Herhangi bir JSON belgesinden Draft 2020-12 uyumlu JSON Şeması üretin. İç içe nesneleri, dizileri, zorunlu alanları, veri tiplerini ve enum adaylarını otomatik algılar.',
	'tool.json-schema-generator.primary_keyword': 'json şema oluşturucu',
	'tool.json-schema-generator.meta_title': 'JSON Şema Oluşturucu — fmtly.dev',
	'tool.json-schema-generator.meta_description':
		'Tarayıcınızda JSON verisinden anında JSON Şeması üretin. İç içe tipleri, zorunlu alanları ve enum adaylarını otomatik algılar.',
	'tool.json-schema-generator.operation': 'Şema Üret',
	'tool.json-schema-generator.faq.0.question': 'Zorunlu alanlar nasıl belirleniyor?',
	'tool.json-schema-generator.faq.0.answer':
		'Nesnelerde, gözlemlenen tüm örneklerde bulunan anahtarlar zorunlu (required) olarak işaretlenir. Eksik kalan anahtarlar opsiyonel kabul edilir.',
	'tool.json-schema-generator.faq.1.question': 'Enum değerleri nasıl çıkarılıyor?',
	'tool.json-schema-generator.faq.1.answer':
		'Bir alan küçük ve tekrar eden bir skaler değer kümesine sahipse, araç bu kategorileri enum olarak önerir.',
	'tool.json-schema-generator.faq.2.question': 'Hangi JSON Schema sürümü üretiliyor?',
	'tool.json-schema-generator.faq.2.answer':
		'Çıktı, JSON Schema Draft 2020-12 $schema URI bilgisini içerir ve type, properties, required, anyOf, items gibi standart anahtarları kullanır.',
	'tool.json-schema-generator.use_case.0':
		'Resmi şema tasarımından önce gerçek payload örneklerinden API kontratı çıkarmak',
	'tool.json-schema-generator.use_case.1':
		'Test verileri ve fixture senaryoları için doğrulama şeması hazırlamak',
	'tool.json-schema-generator.use_case.2':
		'Entegrasyonlarda iç içe JSON event formatlarını hızlıca dokümante etmek',
	'tool.json-schema-generator.use_case.3':
		'Elle ince ayar yapmadan önce başlangıç şeması oluşturmak',
	'tool.json-to-go.display_name': "JSON'dan Go Struct'a",
	'tool.json-to-go.tagline': 'JSON verisinden temiz Go struct tanımları üret',
	'tool.json-to-go.description':
		'Herhangi bir JSON payloadunu, iç içe tip çıkarımı, json etiketleri ve opsiyonel alan yönetimiyle Go struct tanımlarına dönüştür. Hızlı, gizli ve tamamen tarayıcı tabanlıdır.',
	'tool.json-to-go.primary_keyword': "json'dan go struct'a",
	'tool.json-to-go.meta_title': "JSON'dan Go Struct'a Dönüştürücü — fmtly.dev",
	'tool.json-to-go.meta_description':
		'JSON verisinden tarayıcıda anında Go struct üret. İç içe yapılar, json etiketleri ve opsiyonel alan çıkarımı dahildir. Veriler cihazından çıkmaz.',
	'tool.json-to-go.operation': 'Dönüştür',
	'tool.json-to-go.faq.0.question': 'JSON tipleri Go tiplerine nasıl eşleniyor?',
	'tool.json-to-go.faq.0.answer':
		'Metin alanları string, boolean alanlar bool, tam sayılar int64, ondalık sayılar float64 olur. Diziler slice olarak, iç içe nesneler de ayrı struct olarak üretilir.',
	'tool.json-to-go.faq.1.question': 'json tag ve omitempty otomatik ekleniyor mu?',
	'tool.json-to-go.faq.1.answer':
		'Evet. Alanlara json etiketleri eklenir; örnek veride opsiyonel veya null görünen alanlar için uygun olduğunda omitempty ve pointer tipleri kullanılır.',
	'tool.json-to-go.faq.2.question': 'Üretilen çıktıyı Go projelerinde doğrudan kullanabilir miyim?',
	'tool.json-to-go.faq.2.answer':
		'Evet. Çıktı Go kod tabanlarına hızlıca eklenebilecek şekilde üretilir ve API istemcileri, webhook payloadları ile config modelleri için uygundur.',
	'tool.json-to-go.use_case.0':
		'Gerçek istek/yanıt payloadlarından Go API modellerini hızla başlatmak',
	'tool.json-to-go.use_case.1': 'Webhook ve event tabanlı entegrasyonlar için tipli struct üretmek',
	'tool.json-to-go.use_case.2':
		'Bilinmeyen JSON şemalarını incelerken manuel model yazımını azaltmak',
	'tool.json-to-go.use_case.3':
		'Üretime yakın Go tip iskeletleriyle backend prototiplemeyi hızlandırmak',
	'tool.json-to-typescript.display_name': "JSON'dan TypeScript Tiplerine",
	'tool.json-to-typescript.tagline':
		'JSON verisinden doğru TypeScript arayüz ve tipleri anında üret',
	'tool.json-to-typescript.description':
		'JSON örneklerini; iç içe tip çıkarımı, opsiyonel alan tespiti ve null uyumlu tiplerle temiz TypeScript interface/type çıktısına dönüştür. Hızlı, gizli ve tamamen tarayıcı tabanlıdır.',
	'tool.json-to-typescript.primary_keyword': "json'dan typescript tiplerine",
	'tool.json-to-typescript.meta_title': "JSON'dan TypeScript Tiplerine Dönüştürücü — fmtly.dev",
	'tool.json-to-typescript.meta_description':
		'Tarayıcıda JSON verisinden anında TypeScript interface ve type üret. İç içe nesneleri, dizileri, union tiplerini ve opsiyonel alanları destekler. Veriler cihazından çıkmaz.',
	'tool.json-to-typescript.operation': 'Dönüştür',
	'tool.json-to-typescript.faq.0.question': 'JSON değerleri TypeScript tiplerine nasıl eşleniyor?',
	'tool.json-to-typescript.faq.0.answer':
		'Metinler string, sayılar number, boolean değerler boolean olur. Diziler tipli array olarak, iç içe nesneler ise otomatik üretilen interface yapıları olarak çıkarılır. Karışık içerikler union tipe dönüştürülür.',
	'tool.json-to-typescript.faq.1.question': 'Opsiyonel ve null alanlar nasıl ele alınıyor?',
	'tool.json-to-typescript.faq.1.answer':
		'Bir anahtar bazı örneklerde yoksa alan ? ile opsiyonel işaretlenir. Değer null olabiliyorsa ilgili tip null union ile üretilir.',
	'tool.json-to-typescript.faq.2.question': 'Üretilen çıktıyı projede doğrudan kullanabilir miyim?',
	'tool.json-to-typescript.faq.2.answer':
		'Evet. Çıktı, uygulama ve API modelleri için pratik bir başlangıç olacak şekilde hazırlanır. Kod tabanına doğrudan ekleyip isimlendirme kurallarına göre düzenleyebilirsin.',
	'tool.json-to-typescript.use_case.0':
		'Gerçek API payloadlarından frontend ve backend modellerini hızla başlatmak',
	'tool.json-to-typescript.use_case.1':
		'SDK ve webhook entegrasyonları için tipli sözleşmeler üretmek',
	'tool.json-to-typescript.use_case.2':
		'Derin iç içe JSON verilerinde manuel interface yazımını azaltmak',
	'tool.json-to-typescript.use_case.3':
		'Mevcut örnek verilerden sıkı tipler türeterek refactor sürecini hızlandırmak',
	'tool.json-to-rust-serde.display_name': "JSON'dan Rust Serde'ye",
	'tool.json-to-rust-serde.tagline':
		"JSON'dan serde(rename) ve Option ile Serde uyumlu Rust struct'ları üretin",
	'tool.json-to-rust-serde.description':
		'JSON örneklerini Serde derive, JSON anahtar yeniden adlandırma, isteğe bağlı/null alanlar için Option, diziler için Vec ve heterojen veri için serde_json::Value içeren Rust struct’larına dönüştürün. İç içe yapılar Go üreticideki gibi tekilleştirilir. Büyük girdiler Web Worker’da; her şey tarayıcıda kalır.',
	'tool.json-to-rust-serde.primary_keyword': "json'dan rust serde struct",
	'tool.json-to-rust-serde.meta_title': "JSON'dan Rust Serde struct — fmtly.dev",
	'tool.json-to-rust-serde.meta_description':
		"Tarayıcıda JSON'dan serde ile Rust struct üretin. rename, Option, Vec, iç içe yapı. Özel, hızlı, büyük JSON için Worker.",
	'tool.json-to-rust-serde.operation': 'Dönüştür',
	'tool.json-to-rust-serde.faq.0.question': 'JSON tipleri Rust’a nasıl eşleniyor?',
	'tool.json-to-rust-serde.faq.0.answer':
		'Dizeler String, boole bool, tamsayılar i64, kayan nokta f64, diziler Vec, nesneler üretilen struct’lar ve karışık bilinmeyen şekiller serde_json::Value olur.',
	'tool.json-to-rust-serde.faq.1.question': 'Her alanda neden serde(rename)?',
	'tool.json-to-rust-serde.faq.1.answer':
		'Rust’ta alan adları genelde snake_case, JSON ise çoğunlukla camelCase. Açık rename, serde’yi orijinal anahtarlara bağlar; genel bir yeniden adlandırma kuralı sınır durumlarda hata yapabilir.',
	'tool.json-to-rust-serde.faq.2.question': 'Cargo.toml’da serde ve serde_json gerekli mi?',
	'tool.json-to-rust-serde.faq.2.answer':
		'Evet. derive özelliğiyle serde ve Value için serde_json ekleyin; örn. serde = { version = "1", features = ["derive"] } ve serde_json = "1".',
	'tool.json-to-rust-serde.use_case.0':
		'Gerçek JSON istek ve yanıt gövdelerinden Rust API modellerine başlamak',
	'tool.json-to-rust-serde.use_case.1':
		'Webhook, kuyruk ve CLI’lar için örnek yüklerden serde modelleri üretmek',
	'tool.json-to-rust-serde.use_case.2':
		'Aynı JSON için fmtly’de Go veya TypeScript çıktısıyla karşılaştırmak',
	'tool.json-to-rust-serde.use_case.3': 'Elle struct yazmadan önce serde şemalarını denemek',
	'ui.json_to_rust.tab_label': 'Rust',
	'tool.json-flatten.display_name': 'JSON Düzleştirici / Geri Açıcı',
	'tool.json-flatten.tagline': 'İç içe JSON yollarını düzleştir ve anında geri aç',
	'tool.json-flatten.description':
		'Derin iç içe JSON verisini düz yol tabanlı nesnelere dönüştür ve aynı araçta yeniden iç içe hale getir. Dizileri, kaçışlı anahtarları ve özel ayırıcıları destekler.',
	'tool.json-flatten.primary_keyword': 'json düzleştirici geri açıcı',
	'tool.json-flatten.meta_title': 'JSON Düzleştirici / Geri Açıcı — fmtly.dev',
	'tool.json-flatten.meta_description':
		'İç içe JSON verisini yol tabanlı anahtar haritalarına düzleştir, sonra özgün yapısına geri aç. Dizi ve özel ayırıcı desteğiyle tamamen tarayıcıda çalışır.',
	'tool.json-flatten.operation': 'Düzleştir / Geri Aç',
	'tool.json-flatten.faq.0.question': 'Diziler düzleştirilmiş çıktıda nasıl gösterilir?',
	'tool.json-flatten.faq.0.answer':
		'Dizi öğeleri users[0].email veya matrix[2][1] gibi köşeli parantezli indekslerle yazılır; böylece yapı kayıpsız biçimde geri açılabilir.',
	'tool.json-flatten.faq.1.question':
		'Anahtarlarda zaten nokta veya köşeli parantez varsa ne olur?',
	'tool.json-flatten.faq.1.answer':
		'Anahtardaki özel karakterler düzleştirme sırasında kaçışlanır. Geri açma modu bu kaçışları okuyarak özgün anahtarları güvenli biçimde yeniden oluşturur.',
	'tool.json-flatten.faq.2.question':
		'Aynı araçta düzleştirme ve geri açma arasında geçiş yapabilir miyim?',
	'tool.json-flatten.faq.2.answer':
		'Evet. Mod anahtarıyla iç içe JSON’u düzleştirebilir veya düz yol haritalarını yeniden iç içe JSON’a çevirebilirsin.',
	'tool.json-flatten.use_case.0':
		'i18n sözlüklerini ve yapılandırma verilerini düz anahtar haritaları olarak hazırlamak',
	'tool.json-flatten.use_case.1':
		'İç içe API fixture verilerini tablo benzeri düzenleme için normalize etmek',
	'tool.json-flatten.use_case.2':
		'Ortam değişkeni tarzı anahtarlardan iç içe yapıları yeniden oluşturmak',
	'tool.json-flatten.use_case.3':
		'Yayın öncesi büyük JSON belgelerinde yol seviyesinde değişiklikleri analiz etmek',
	'tool.json-patch.display_name': 'JSON Patch Builder',
	'tool.json-patch.tagline': 'RFC 6902 JSON Patch işlemlerini anında üret ve uygula',
	'tool.json-patch.description':
		'Temel ve hedef belgeyi karşılaştırarak RFC 6902 JSON Patch işlemleri üretin veya bir patch dizisini temel JSON belgesine uygulayın. Her şey tarayıcıda yerel çalışır.',
	'tool.json-patch.primary_keyword': 'json patch builder',
	'tool.json-patch.meta_title': 'JSON Patch Builder (RFC 6902) — fmtly.dev',
	'tool.json-patch.meta_description':
		'İki JSON belgeden patch işlemleri üretin veya RFC 6902 patch dizilerini tarayıcıda anında uygulayın. Hızlı, gizli, yükleme yok.',
	'tool.json-patch.operation': 'Patch',
	'tool.json-patch.faq.0.question': 'JSON Patch (RFC 6902) nedir?',
	'tool.json-patch.faq.0.answer':
		'JSON Patch; add, remove ve replace gibi işlemleri JSON Pointer yolları ile tanımlayan standart bir değişiklik formatıdır.',
	'tool.json-patch.faq.1.question': 'Üret modu nasıl çalışır?',
	'tool.json-patch.faq.1.answer':
		'Giriş paneline temel JSON’u, yan panele hedef JSON’u yapıştırın. Araç, temel veriyi hedefe dönüştürmek için gereken patch işlemlerini üretir.',
	'tool.json-patch.faq.2.question': 'Uygula modu nasıl çalışır?',
	'tool.json-patch.faq.2.answer':
		'Giriş paneline temel JSON’u, yan panele geçerli bir JSON Patch dizisini yapıştırın. Çıktı, patch uygulanmış JSON sonucunu gösterir.',
	'tool.json-patch.use_case.0':
		'API payload değişikliklerini deterministik patch işlemleriyle versiyonlamak',
	'tool.json-patch.use_case.1':
		'Test akışlarında belge güncellemelerini patch dizileriyle uygulamak',
	'tool.json-patch.use_case.2':
		'Entegrasyon hatalarını patch adımlarını yeniden oynatarak analiz etmek',
	'tool.json-patch.use_case.3': 'Düz metin diff yerine yapısal JSON değişikliklerini incelemek',
	'tool.json-schema-validate.display_name': 'JSON Şema Doğrulayıcı',
	'tool.json-schema-validate.tagline': 'JSON verisini sağlanan şemaya karşı doğrula',
	'tool.json-schema-validate.description':
		'JSON payloadlarını JSON Schema Draft-07 veya Draft 2020-12 ile doğrula. Path bazlı hataları satır ve sütun eşleşmesiyle görerek sorunlu alanları hızlıca düzelt.',
	'tool.json-schema-validate.primary_keyword': 'json sema dogrulayici',
	'tool.json-schema-validate.meta_title': 'JSON Şema Doğrulayıcı — fmtly.dev',
	'tool.json-schema-validate.meta_description':
		'Tarayıcıda JSON verisini Draft-07 ve 2020-12 JSON Schema ile doğrula. Path, satır ve sütun bazlı hata açıklamaları al.',
	'tool.json-schema-validate.operation': 'Şema Doğrula',
	'tool.json-schema-validate.faq.0.question': 'Hangi şema sürümleri destekleniyor?',
	'tool.json-schema-validate.faq.0.answer':
		'Doğrulayıcı JSON Schema Draft-07 ve Draft 2020-12 destekler. Şema sürümü $schema URI üzerinden otomatik tespit edilir.',
	'tool.json-schema-validate.faq.1.question': 'Doğrulama hataları girişte nasıl işaretleniyor?',
	'tool.json-schema-validate.faq.1.answer':
		'Her hata JSON Pointer path’iyle gelir ve JSON girişindeki karşılık gelen satır/sütun konumuna eşlenir.',
	'tool.json-schema-validate.faq.2.question': 'Geçersiz şema dosyaları da kontrol edilebilir mi?',
	'tool.json-schema-validate.faq.2.answer':
		'Evet. Şema derlenemiyorsa ya da geçersizse, araç şema kaynaklı hataları veri doğrulama hatalarından ayrı gösterir.',
	'tool.json-schema-validate.use_case.0':
		'API istek ve yanıt payloadlarını sözleşme şemalarına göre doğrulamak',
	'tool.json-schema-validate.use_case.1':
		'Webhook payload hatalarını path bazlı geri bildirimle hızla ayıklamak',
	'tool.json-schema-validate.use_case.2':
		'Fixture ve mock verileri sıkı şema kurallarına karşı test etmek',
	'tool.json-schema-validate.use_case.3': 'Draft-07 şemalarından Draft 2020-12 geçişini doğrulamak',
	'tool.text-word-character-counter.display_name': 'Kelime ve Karakter Sayacı',
	'tool.text-word-character-counter.tagline': 'Kelime, karakter ve okuma süresini anında ölç',
	'tool.text-word-character-counter.description':
		'Herhangi bir metindeki kelime, karakter, cümle, paragraf ve tahmini okuma süresini anında hesapla. Hızlı, gizli ve tamamen tarayıcı içinde çalışır.',
	'tool.text-word-character-counter.primary_keyword': 'kelime karakter sayaci',
	'tool.text-word-character-counter.meta_title': 'Kelime ve Karakter Sayacı — fmtly.dev',
	'tool.text-word-character-counter.meta_description':
		'Ücretsiz çevrimiçi kelime ve karakter sayacı. Cümle, paragraf ve okuma süresi metriklerini tarayıcıda anında gör.',
	'tool.text-word-character-counter.operation': 'Metni Say',
	'tool.text-word-character-counter.faq.0.question': 'Kelime sayısı nasıl hesaplanıyor?',
	'tool.text-word-character-counter.faq.0.answer':
		'Kelime sayımı harf ve rakam gruplarına göre yapılır; yaygın kesme işareti ve kısa çizgi kullanımını da dikkate alır.',
	'tool.text-word-character-counter.faq.1.question': 'Okuma süresi nasıl hesaplanıyor?',
	'tool.text-word-character-counter.faq.1.answer':
		'Okuma süresi dakikada yaklaşık 200 kelime varsayımıyla hesaplanır ve yukarı yuvarlanır.',
	'tool.text-word-character-counter.faq.2.question': 'Metnim cihazımdan dışarı çıkar mı?',
	'tool.text-word-character-counter.faq.2.answer':
		'Hayır. Tüm sayım ve analiz işlemleri tarayıcıda çalışır, metin sunucuya gönderilmez.',
	'tool.text-word-character-counter.use_case.0':
		'Makale ve doküman uzunluğunu yayından önce kontrol etmek',
	'tool.text-word-character-counter.use_case.1':
		'UI metinlerini ve promptları karakter limitlerine göre optimize etmek',
	'tool.text-word-character-counter.use_case.2':
		'Blog yazıları ve teknik dokümanlar için okuma süresi tahmini çıkarmak',
	'tool.text-word-character-counter.use_case.3':
		'Taslak sürümleri objektif metin uzunluğu metrikleriyle karşılaştırmak',
	'tool.text-lorem-ipsum-generator.display_name': 'Lorem Ipsum Üretici',
	'tool.text-lorem-ipsum-generator.tagline':
		'Paragraf, cümle veya kelime modunda seed kontrollü yer tutucu metin üret',
	'tool.text-lorem-ipsum-generator.description':
		'Taslak ekranlar, UI önizlemeleri ve içerik testleri için deterministik Lorem Ipsum metni üretin. Paragraf/cümle/kelime sayısını, seed değerini ve düz metin ya da HTML çıktısını tarayıcıdan yönetin.',
	'tool.text-lorem-ipsum-generator.primary_keyword': 'lorem ipsum uretici',
	'tool.text-lorem-ipsum-generator.meta_title': 'Lorem Ipsum Üretici — fmtly.dev',
	'tool.text-lorem-ipsum-generator.meta_description':
		'Paragraf, cümle ve kelime modları; seed kontrollü çıktı; düz metin/HTML desteği sunan ücretsiz Lorem Ipsum üretici. Hızlı, gizli ve tamamen tarayıcıda.',
	'tool.text-lorem-ipsum-generator.operation': 'Lorem Ipsum Üret',
	'tool.text-lorem-ipsum-generator.faq.0.question':
		'Aynı ayarlarla her seferinde aynı Lorem Ipsum metnini alabilir miyim?',
	'tool.text-lorem-ipsum-generator.faq.0.answer':
		'Evet. Seed değerini sabit tutarsanız, aynı seçeneklerle aynı çıktıyı tekrar üretebilirsiniz.',
	'tool.text-lorem-ipsum-generator.faq.1.question':
		'Düz metin yerine HTML paragraf çıktısı alabilir miyim?',
	'tool.text-lorem-ipsum-generator.faq.1.answer':
		'Evet. Çıktı formatını HTML seçerek prototiplerde doğrudan kullanılabilecek paragraf etiketleri üretebilirsiniz.',
	'tool.text-lorem-ipsum-generator.faq.2.question': 'Üretilen metin yerel olarak mı oluşturuluyor?',
	'tool.text-lorem-ipsum-generator.faq.2.answer':
		'Evet. Üretim tamamen tarayıcıda gerçekleşir, metin sunucuya gönderilmez.',
	'tool.text-lorem-ipsum-generator.use_case.0':
		'Wireframe ve arayüz taslaklarını gerçekçi yer tutucu metinle doldurmak',
	'tool.text-lorem-ipsum-generator.use_case.1':
		'Responsive düzenlerde tipografi, boşluk ve taşma davranışlarını test etmek',
	'tool.text-lorem-ipsum-generator.use_case.2':
		'Frontend snapshot ve görsel testler için tekrar üretilebilir seeded içerik hazırlamak',
	'tool.text-lorem-ipsum-generator.use_case.3':
		'CMS demoları için düz metin veya HTML yer tutucu içerik üretmek',
	'tool.text-markdown-to-html.display_name': "Markdown'dan HTML'e",
	'tool.text-markdown-to-html.tagline':
		'Markdown metnini canlı önizleme ile üretime hazır HTML çıktısına dönüştür',
	'tool.text-markdown-to-html.description':
		"Markdown içeriğini canlı önizleme, GFM tablo desteği, kod bloklarında söz dizimi renklendirme ve link/görsel güvenlik kontrolleriyle temiz HTML'e dönüştür. Tüm işlem tarayıcınızda çalışır.",
	'tool.text-markdown-to-html.primary_keyword': 'markdown dan html e',
	'tool.text-markdown-to-html.meta_title':
		"Markdown'dan HTML'e Çevirici — Canlı Önizleme | fmtly.dev",
	'tool.text-markdown-to-html.meta_description':
		"Markdown'ı canlı önizleme, GFM tablo desteği ve kod bloklarında renklendirme ile HTML'e çevirin. Hızlı, gizli ve tamamen tarayıcı tabanlı.",
	'tool.text-markdown-to-html.operation': "Markdown'ı Dönüştür",
	'tool.text-markdown-to-html.faq.0.question':
		'Bu araç GitHub Flavored Markdown (GFM) tablolarını destekliyor mu?',
	'tool.text-markdown-to-html.faq.0.answer':
		'Evet. GFM tablo sözdizimi desteklenir ve seçenekler panelinden açılıp kapatılabilir.',
	'tool.text-markdown-to-html.faq.1.question':
		'Kod bloklarında syntax highlighting otomatik uygulanır mı?',
	'tool.text-markdown-to-html.faq.1.answer':
		'Evet. Araç fenced code bloklarını renklendirir ve üretilen HTML içinde dil sınıflarını korur.',
	'tool.text-markdown-to-html.faq.2.question':
		'Güvensiz linkler veya raw HTML blokları nasıl ele alınıyor?',
	'tool.text-markdown-to-html.faq.2.answer':
		'Güvensiz link/görsel protokolleri kaldırılır. Raw HTML blokları varsayılan olarak escape edilir; isterseniz gelişmiş seçenekten açabilirsiniz.',
	'tool.text-markdown-to-html.use_case.0':
		'README ve dokümantasyon içeriklerini statik site çıktısı için hazırlamak',
	'tool.text-markdown-to-html.use_case.1':
		'Sürüm notu veya changelog yayınlamadan önce Markdown çıktısını önizlemek',
	'tool.text-markdown-to-html.use_case.2':
		'CMS editörleri ve bilgi tabanları için güvenli HTML parçaları üretmek',
	'tool.text-markdown-to-html.use_case.3':
		'Kod bloklu teknik anlatımları gömülebilir HTML çıktısına çevirmek',
	'tool.text-string-case-converter.display_name': 'Metin Harf Biçimi Dönüştürücü',
	'tool.text-string-case-converter.tagline':
		'camelCase, PascalCase, snake_case, kebab-case ve daha fazlasına anında dönüştür',
	'tool.text-string-case-converter.description':
		'Metni camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Başlık Biçimi ve Cümle biçimi arasında anında dönüştür. Hızlı, gizli ve tamamen tarayıcı içinde çalışır.',
	'tool.text-string-case-converter.primary_keyword': 'metin harf bicimi donusturucu',
	'tool.text-string-case-converter.meta_title': 'Metin Harf Biçimi Dönüştürücü — fmtly.dev',
	'tool.text-string-case-converter.meta_description':
		'Ücretsiz çevrimiçi harf biçimi dönüştürücü. camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Başlık ve Cümle biçimine çevir.',
	'tool.text-string-case-converter.operation': 'Biçimi Dönüştür',
	'tool.text-string-case-converter.faq.0.question': 'Hangi adlandırma biçimleri destekleniyor?',
	'tool.text-string-case-converter.faq.0.answer':
		'Araç tek ekranda camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Başlık Biçimi ve Cümle biçimini destekler.',
	'tool.text-string-case-converter.faq.1.question':
		'camelCase, alt çizgi ve tireli karışık metni de dönüştürebilir mi?',
	'tool.text-string-case-converter.faq.1.answer':
		'Evet. Karışık ayraçlar ve mevcut büyük-küçük harf yapısı önce çözülür, sonra her hedef biçime tutarlı şekilde dönüştürülür.',
	'tool.text-string-case-converter.faq.2.question': 'Dönüştürme işlemi cihazımda mı çalışıyor?',
	'tool.text-string-case-converter.faq.2.answer':
		'Evet. Tüm harf biçimi dönüşümleri tarayıcıda çalışır, metin sunucuya gönderilmez.',
	'tool.text-string-case-converter.use_case.0':
		'API alan adlarını ve yapılandırma anahtarlarını farklı adlandırma kuralları arasında normalize etmek',
	'tool.text-string-case-converter.use_case.1':
		'UI etiketlerini hızlıca koda uygun değişken adlarına çevirmek',
	'tool.text-string-case-converter.use_case.2':
		'Doküman, şema ve örnek payloadlarda ekip adlandırma standardını korumak',
	'tool.text-string-case-converter.use_case.3':
		'TypeScript, Python, SQL ve shell scriptleri için tutarlı kimlik adları hazırlamak',
	'tool.text-text-reverser.display_name': 'Metin Ters Çevirici',
	'tool.text-text-reverser.tagline':
		'Metni karakterlere, kelimelere veya satırlara göre tek tıkla ters çevir',
	'tool.text-text-reverser.description':
		'Metni karakter, kelime veya satır bazında anında ters çevir. Hızlı metin dönüşümleri, akış testleri ve içerik denemeleri için ideal; tamamen tarayıcıda çalışır.',
	'tool.text-text-reverser.primary_keyword': 'metin ters cevirici',
	'tool.text-text-reverser.meta_title': 'Metin Ters Çevirici — fmtly.dev',
	'tool.text-text-reverser.meta_description':
		'Ücretsiz çevrimiçi metin ters çevirici: metni karakter, kelime veya satır bazında anında tersine çevir. Hızlı, gizli ve tamamen tarayıcı tabanlı.',
	'tool.text-text-reverser.operation': 'Metni Ters Çevir',
	'tool.text-text-reverser.faq.0.question': 'Hangi ters çevirme modları var?',
	'tool.text-text-reverser.faq.0.answer':
		'Metni karakter, kelime veya satır bazında ters çevirebilirsiniz. Her mod ayrı çıktı olarak gösterilir.',
	'tool.text-text-reverser.faq.1.question':
		'Kelimelere göre ters çevirme boşluk ve sekmeleri korur mu?',
	'tool.text-text-reverser.faq.1.answer':
		'Evet. Kelime modu, token sırasını ters çevirirken boşluk yapısını korur.',
	'tool.text-text-reverser.faq.2.question': 'Metnim cihazımdan dışarı çıkar mı?',
	'tool.text-text-reverser.faq.2.answer':
		'Hayır. Tüm ters çevirme işlemleri tarayıcıda çalışır, metin sunucuya gönderilmez.',
	'tool.text-text-reverser.use_case.0':
		'Parser ve tokenizer testleri için aynalanmış metin üretmek',
	'tool.text-text-reverser.use_case.1':
		'Çok satırlı notları satır sırasını ters çevirerek hızlıca yeniden düzenlemek',
	'tool.text-text-reverser.use_case.2':
		'Boşluk korumalı çıktı ile kelime ayrıştırma mantığını doğrulamak',
	'tool.text-text-reverser.use_case.3':
		'İçerik denemeleri için eğlenceli dönüştürülmüş metin varyasyonları üretmek',
	'tool.text-duplicate-line-remover.display_name': 'Tekrar Eden Satır Kaldırıcı',
	'tool.text-duplicate-line-remover.tagline':
		'İlk oluşum sırasını koruyarak tekrar eden satırları kaldır',
	'tool.text-duplicate-line-remover.description':
		'Her satırın ilk oluşumunu koruyarak metindeki tekrar eden satırları kaldır. Logları temizlemek, listeleri tekilleştirmek ve tarayıcıda benzersiz veri setleri hazırlamak için ideal.',
	'tool.text-duplicate-line-remover.primary_keyword': 'tekrar eden satır kaldırıcı',
	'tool.text-duplicate-line-remover.meta_title': 'Tekrar Eden Satır Kaldırıcı — fmtly.dev',
	'tool.text-duplicate-line-remover.meta_description':
		'Ücretsiz tekrar eden satır kaldırıcı: ilk oluşum sırasını koruyarak tekrar eden satırları anında kaldır. Hızlı, gizli ve tamamen tarayıcı tabanlı.',
	'tool.text-duplicate-line-remover.operation': 'Tekrarları Kaldır',
	'tool.text-duplicate-line-remover.faq.0.question': 'Hangi satırlar tekrar olarak kabul edilir?',
	'tool.text-duplicate-line-remover.faq.0.answer':
		'Her satırın ilk görüneni saklanır; sonraki aynı satırlar tekrar olarak kaldırılır.',
	'tool.text-duplicate-line-remover.faq.1.question': 'Boş satırlar tekrar olarak işlenir mi?',
	'tool.text-duplicate-line-remover.faq.1.answer':
		'Evet. Boş satırlar benzersiz girişlerdir, bu yüzden birden fazla boş satır tek bir boş satıra tekilleştirilir.',
	'tool.text-duplicate-line-remover.faq.2.question': 'Metnim yerel olarak işlenir mi?',
	'tool.text-duplicate-line-remover.faq.2.answer':
		'Evet. Tüm tekilleştirme tarayıcınızda çalışır; metniniz asla cihazınızdan dışarı çıkmaz.',
	'tool.text-duplicate-line-remover.use_case.0':
		'Tekrar eden girişleri kaldırarak sunucu loglarını ve uygulama izlerini temizlemek',
	'tool.text-duplicate-line-remover.use_case.1':
		'URL listelerini, e-posta listelerini veya envanter kayıtlarını içe aktarmadan önce tekilleştirmek',
	'tool.text-duplicate-line-remover.use_case.2':
		'Vocabulary veya dil modellerini test etmek için benzersiz kelime listeleri hazırlamak',
	'tool.text-duplicate-line-remover.use_case.3':
		'Yapılandırma değerlerini veya ortam değişkeni listelerini birleştirmek',
	'tool.text-line-sorter.display_name': 'Satır Sıralayıcı',
	'tool.text-line-sorter.tagline':
		'Satırları alfabetik, sayısal, uzunluğa göre veya seed ile karıştırarak sırala',
	'tool.text-line-sorter.description':
		'Gelişmiş seçeneklerle satırları anında sırala: büyük/küçük harf duyarlılığı, kırpma, tekilleştirme, boş satır temizleme ve deterministik karıştırma seed kontrolü. Tüm işlemler tarayıcıda yerel çalışır.',
	'tool.text-line-sorter.primary_keyword': 'satır sıralayıcı',
	'tool.text-line-sorter.meta_title': 'Satır Sıralayıcı — Metin Satırlarını Sırala | fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Satırları alfabetik, sayısal, uzunluğa göre veya rastgele karıştırarak sırala. Tekilleştirme ve boş satır filtreleriyle hızlı, gizli ve tamamen tarayıcı tabanlı.',
	'tool.text-line-sorter.operation': 'Satırları Sırala',
	'tool.text-line-sorter.faq.0.question': 'Hangi sıralama modları destekleniyor?',
	'tool.text-line-sorter.faq.0.answer':
		'Alfabetik, sayısal, uzunluğa göre ve deterministik rastgele karıştırma modları desteklenir. Ayrıca artan/azalan sıralama seçebilirsiniz.',
	'tool.text-line-sorter.faq.1.question':
		'Sıralamadan önce boş satırları ve tekrar eden satırları kaldırabilir miyim?',
	'tool.text-line-sorter.faq.1.answer':
		'Evet. Boş satır temizleme ve tekilleştirme seçeneklerini açarak girişi sıralamadan önce normalize edebilirsiniz.',
	'tool.text-line-sorter.faq.2.question': 'Büyük dosyalarda performans nasıl korunuyor?',
	'tool.text-line-sorter.faq.2.answer':
		'500KB üzerindeki girdiler Web Worker içinde işlenir. Böylece arayüz akıcı kalır ve veriniz tarayıcı dışına çıkmaz.',
	'tool.text-line-sorter.use_case.0':
		'Ortamlar arası karşılaştırma öncesi log dosyalarını normalize edip sıralamak',
	'tool.text-line-sorter.use_case.1':
		'Domain, e-posta, kimlik veya etiket listelerini temiz ve sıralı hale getirmek',
	'tool.text-line-sorter.use_case.2':
		'Sürüm notları, değişiklik listeleri veya kontrol maddelerini hızlıca düzenlemek',
	'tool.text-line-sorter.use_case.3':
		'Test ve QA için deterministik karıştırılmış veri listeleri üretmek',
	'tool.text-diff-compare.display_name': 'Fark & Karşılaştır',
	'tool.text-diff-compare.tagline': 'İki metni yan yana karşılaştır',
	'tool.text-diff-compare.description':
		'İki düz metin girdisini satır ve kelime seviyesinde değişiklik vurgulamasıyla yan yana veya birleşik diff gösterimi.',
	'tool.text-diff-compare.primary_keyword': 'metin fark karşılaştır',
	'tool.text-diff-compare.meta_title': 'Metin Fark & Karşılaştırma Aracı - Yan yana Karşılaştırma',
	'tool.text-diff-compare.meta_description':
		'İki metni yan yana veya birleşik diff görünümünde karşılaştırın. Satır ve kelime seviyesinde değişiklikleri vurgulayın.',
	'tool.text-diff-compare.operation': 'İki metni karşılaştır ve farkları göster',
	'tool.text-diff-compare.faq.0.question': 'Hangi diff algoritmaları destekleniyor?',
	'tool.text-diff-compare.faq.0.answer':
		'Myers, Patience ve Histogram algoritmalarını destekliyoruz. Myers varsayılanıdır ve çoğu durumda iyi çalışır. Patience yapılandırılmış değişiklikler için daha iyidir, Histogram ise büyük dosyalar için daha hızlıdır.',
	'tool.text-diff-compare.faq.1.question':
		'Boşluk veya büyük/küçük harf farklarını yok sayabilir miyim?',
	'tool.text-diff-compare.faq.1.answer':
		"Evet, seçenekler panelini kullanarak diff'in boşluk değişikliklerini, büyük/küçük harf farklarını ve boş satırları yok sayacak şekilde yapılandırabilirsiniz.",
	'tool.text-diff-compare.faq.2.question': 'Hangi çıktı formatları mevcut?',
	'tool.text-diff-compare.faq.2.answer':
		"Diff'leri yan yana modda, birleşik formatta veya Monaco editör ile inline olarak görüntüleyebilirsiniz. Birleşik diff .diff dosyası olarak indirilebilir.",
	'tool.text-diff-compare.use_case.0': 'Commit yapmadan önce kod sürümlerini karşılaştır',
	'tool.text-diff-compare.use_case.1': 'Belge değişikliklerini ve düzenlemelerini gözden geçir',
	'tool.text-diff-compare.use_case.2': 'Yapılandırma dosyası değişikliklerini analiz et',
	'tool.text-diff-compare.use_case.3':
		'Loglardaki veya veri dışa aktarımlarındaki değişiklikleri takip et',
	'tool.text-regex-tester.display_name': 'Regex Test Aracı',
	'tool.text-regex-tester.tagline':
		'Düzenli ifadeleri canlı vurgulama, capture group ve flag kontrolleriyle test et',
	'tool.text-regex-tester.description':
		'JavaScript regex desenlerini örnek metin üzerinde anlık olarak test edin. Canlı eşleşme vurgulaması, tüm flag kontrolleri, capture group inceleme ve detaylı eşleşme metrikleri tek ekranda; üstelik tamamen tarayıcıda çalışır.',
	'tool.text-regex-tester.primary_keyword': 'regex test aracı',
	'tool.text-regex-tester.meta_title':
		'Regex Test Aracı — Canlı Eşleşme Vurgulama & Capture Group | fmtly.dev',
	'tool.text-regex-tester.meta_description':
		'Düzenli ifadeleri canlı vurgulama, capture group görünümü ve regex flag kontrolleriyle online test edin. Hızlı, gizli ve tamamen tarayıcı tabanlı.',
	'tool.text-regex-tester.operation': 'Regex Test Et',
	'tool.text-regex-tester.faq.0.question':
		'Bu araç g, i, m, s, u, y ve d gibi JavaScript regex flaglerini destekliyor mu?',
	'tool.text-regex-tester.faq.0.answer':
		'Evet. Desteklenen tüm JavaScript regex flaglerini tek tek açıp kapatabilir, eşleşmeleri nasıl etkilediğini anında görebilirsiniz.',
	'tool.text-regex-tester.faq.1.question':
		'Her eşleşme için numaralı ve isimli capture groupları görebilir miyim?',
	'tool.text-regex-tester.faq.1.answer':
		'Evet. Her eşleşmede numaralı capture grouplar ve isimli grouplar değerleriyle birlikte gösterilir; desteklenen ortamlarda konum bilgileri de verilir.',
	'tool.text-regex-tester.faq.2.question': 'Desenim ve test metnim sunucuya gönderiliyor mu?',
	'tool.text-regex-tester.faq.2.answer':
		'Hayır. Regex eşleştirme tamamen tarayıcınızda çalışır; desen veya metin verisi sunucuya yüklenmez.',
	'tool.text-regex-tester.use_case.0':
		'Üretime almadan önce API log ayrıştırma desenlerini doğrulamak',
	'tool.text-regex-tester.use_case.1':
		'Gerçek örnek metinlerle form doğrulama desenlerini ve edge case senaryolarını test etmek',
	'tool.text-regex-tester.use_case.2':
		'Script, ETL ve otomasyon işleri için arama/çıkarma kurallarını prototiplemek',
	'tool.text-regex-tester.use_case.3':
		'Anlık görsel eşleşme geri bildirimiyle regex mantığını öğrenmek ve öğretmek',
	'tool.text-escape-unescape.display_name': 'Metin Escape / Unescape',
	'tool.text-escape-unescape.tagline':
		'JSON, HTML, XML, URL, SQL ve regex için metni kaçır veya çöz',
	'tool.text-escape-unescape.description':
		'Metinleri JSON, HTML entity, XML entity, URL kodlama, SQL dizesi ve regex bağlamları için güvenli şekilde escape veya unescape et. 500KB üzeri girdilerde arayüz akıcılığı için Web Worker kullanır.',
	'tool.text-escape-unescape.primary_keyword': 'metin escape unescape araci',
	'tool.text-escape-unescape.meta_title':
		'Metin Escape/Unescape — JSON, HTML, URL, SQL | fmtly.dev',
	'tool.text-escape-unescape.meta_description':
		'JSON, HTML, XML, URL, SQL ve regex için metni anında escape/unescape et. Tamamen tarayıcıda çalışır, büyük metinlerde hızlıdır, veri yüklemez.',
	'tool.text-escape-unescape.operation': 'Metni Escape / Unescape Et',
	'tool.text-escape-unescape.faq.0.question':
		'Bu araçta hangi formatlarda escape ve unescape yapılabilir?',
	'tool.text-escape-unescape.faq.0.answer':
		'JSON dizesi, HTML entity, XML entity, URL kodlama, SQL string literal ve regex özel karakterleri için iki yönde de işlem yapabilirsiniz.',
	'tool.text-escape-unescape.faq.1.question':
		'Basit bir URL ya da HTML encoder aracından farkı nedir?',
	'tool.text-escape-unescape.faq.1.answer':
		'Tek bir ekranda birden fazla escape standardını birleştirir, yönü anında değiştirmenizi sağlar ve URL plus çözümü veya SQL tırnaklama gibi formata özel seçenekler sunar.',
	'tool.text-escape-unescape.faq.2.question':
		'Büyük metinlerde performans ve gizlilik korunuyor mu?',
	'tool.text-escape-unescape.faq.2.answer':
		'Evet. İşlem tamamen tarayıcıda çalışır. 500KB üzeri girdiler Web Worker üzerinde işlendiği için arayüz akıcı kalır ve veriler sunucuya gönderilmez.',
	'tool.text-escape-unescape.use_case.0':
		'Kullanıcı girdilerini JSON payload, query string ve SQL sorguları için güvenli hale getirmek',
	'tool.text-escape-unescape.use_case.1':
		'Escape edilmiş log veya API örneklerini okunabilir düz metne çevirmek',
	'tool.text-escape-unescape.use_case.2':
		'Özel karakterleri kaçırıp çözerek regex desenlerini güvenli şekilde oluşturmak',
	'tool.text-escape-unescape.use_case.3':
		'Karışık escaped içerikleri tarayıcı içinde gizliliği koruyarak normalize etmek',
	'ui.text_escape.format_label': 'Format',
	'ui.text_escape.action_label': 'İşlem',
	'ui.text_escape.action.escape': 'Escape',
	'ui.text_escape.action.unescape': 'Unescape',
	'ui.text_escape.format.json': 'JSON Dizesi',
	'ui.text_escape.format.html': 'HTML Entity',
	'ui.text_escape.format.xml': 'XML Entity',
	'ui.text_escape.format.url': 'URL Bileşeni',
	'ui.text_escape.format.sql': 'SQL Dizesi',
	'ui.text_escape.format.regex': 'Regex Deseni',
	'ui.text_escape.input_label': 'Girdi',
	'ui.text_escape.output_label': 'Çıktı',
	'ui.text_escape.input_placeholder': 'İşlemek istediğiniz metni yazın veya yapıştırın...',
	'ui.text_escape.output_placeholder': 'Escape veya unescape çıktısı burada görünür...',
	'ui.text_escape.option.url_encode_plus': 'Boşlukları + olarak kodla',
	'ui.text_escape.option.url_decode_plus': '+ işaretini boşluk olarak çöz',
	'ui.text_escape.option.sql_wrap_quotes': 'Tek tırnakla sar',
	'ui.text_escape.button.swap_action': 'İşlemi tersine çevir',
	'ui.text_escape.worker_active':
		'Büyük girdi algılandı (>{size}). İşlem Web Worker üzerinde çalışıyor.',
	'ui.text_escape.worker_failed': 'Worker işleminde hata oluştu. Ana iş parçacığına geri dönüldü.',
	'ui.text_escape.warning.no_changes': 'Seçilen format ve işlem için değişiklik oluşmadı.',
	'ui.text_escape.error.invalid_json_escape': 'Geçersiz JSON escape dizisi: {detail}',
	'ui.text_escape.error.invalid_url_encoding': 'Geçersiz URL kodlu girdi: {detail}',
	'ui.text_escape.error.detail': 'İşlem başarısız: {detail}',
	'ui.diff_compare.statistics': 'Karşılaştırma İstatistikleri',
	'ui.diff_compare.added_lines': 'Eklenen satırlar',
	'ui.diff_compare.removed_lines': 'Kaldırılan satırlar',
	'ui.diff_compare.unchanged_lines': 'Değişmeyen satırlar',
	'ui.diff_compare.total_lines': 'Toplam satırlar',
	'ui.diff_compare.similarity': 'Benzerlik',
	'ui.diff_compare.hunks': 'Parçalar',
	'ui.diff_compare.side_by_side': 'Yan Yana',
	'ui.diff_compare.unified': 'Birleşik',
	'ui.diff_compare.inline': 'Satır İçi',
	'ui.diff_compare.swap': 'Değiştir',
	'ui.diff_compare.diff_options': 'Diff Seçenekleri',
	'ui.diff_compare.ignore_whitespace': 'Boşlukları yoksay',
	'ui.diff_compare.ignore_case': 'Büyük/küçük harf yoksay',
	'ui.diff_compare.ignore_empty_lines': 'Boş satırları yoksay',
	'ui.diff_compare.show_inline': 'Satır içi değişiklikleri göster',
	'ui.diff_compare.context_lines': 'Bağlam satırları',
	'ui.diff_compare.algorithm': 'Algoritma',
	'ui.diff_compare.original': 'Orijinal',
	'ui.diff_compare.modified': 'Değiştirilmiş',
	'ui.diff_compare.placeholder_left': 'Orijinal metni buraya yapıştırın...',
	'ui.diff_compare.placeholder_right': 'Değiştirilmiş metni buraya yapıştırın...',
	'ui.diff_compare.unified_diff': 'Birleşik Diff',
	'ui.diff_compare.add_content': 'Farkı görmek için her iki tarafa da içerik ekleyin',
	'ui.diff_compare.no_content': 'Karşılaştırılacak içerik yok',
	'ui.diff_compare.swapped': 'Girdiler değiştirildi',
	'ui.toast.download_success': 'Başarıyla indirildi',
	'tool.text-whitespace-cleaner.display_name': 'Boşluk Temizleyici',
	'tool.text-whitespace-cleaner.tagline':
		'Sondaki boşlukları kırp, çoklu boşlukları birleştir, satır sonlarını normalize et',
	'tool.text-whitespace-cleaner.description':
		'Metin biçimlendirmesini sondaki boşlukları kaldırarak, çoklu boşlukları/sekme tek boşluğa indirgeyerek ve satır sonlarını normalize ederek temizle. Kod, log ve içerikleri versiyon kontrolü veya işleme için hazırlamak için mükemmel.',
	'tool.text-whitespace-cleaner.primary_keyword': 'boşluk temizleyici',
	'tool.text-whitespace-cleaner.meta_title': 'Boşluk Temizleyici — fmtly.dev',
	'tool.text-whitespace-cleaner.meta_description':
		'Ücretsiz boşluk temizleyici: sondaki boşlukları kaldırır, çoklu boşlukları birleştirir ve satır sonlarını normalize eder. Hızlı, gizli ve tamamen tarayıcı tabanlı.',
	'tool.text-whitespace-cleaner.operation': 'Boşlukları Temizle',
	'tool.text-whitespace-cleaner.faq.0.question': 'Hangi boşluk karakterleri kaldırılır?',
	'tool.text-whitespace-cleaner.faq.0.answer':
		'Satır sonlarındaki boşluklar ve sekmeler kaldırılır. Metin içindeki çoklu boşluklar/sekme tek boşluğa indirgenir. Satır sonları LF (\\n) olarak normalize edilir.',
	'tool.text-whitespace-cleaner.faq.1.question': 'Baştaki boşluklar korunur mu?',
	'tool.text-whitespace-cleaner.faq.1.answer':
		'Evet. Sadece sondaki boşluklar kaldırılır. Baştaki girinti ve satır içindeki boşluklar korunur, ancak çoklu boşluklar/sekme tek boşluğa indirgenir.',
	'tool.text-whitespace-cleaner.faq.2.question': 'Satır sonları nasıl normalize edilir?',
	'tool.text-whitespace-cleaner.faq.2.answer':
		'Windows (CRLF) ve eski Mac (CR) satır sonları Unix tarzı LF (\\n) olarak dönüştürülür. Ardışık çoklu boş satırlar çift satır sonlarına indirgenir.',
	'tool.text-whitespace-cleaner.use_case.0':
		'Versiyon kontrolüne commit etmeden önce sondaki boşlukları kaldırmak için kod temizleme',
	'tool.text-whitespace-cleaner.use_case.1':
		'Farklı kaynaklardan kopyalanan tutarsız boşluklu metni normalize etme',
	'tool.text-whitespace-cleaner.use_case.2':
		'Tutarlı işleme ve analiz için log ve veri dosyalarını hazırlama',
	'tool.text-whitespace-cleaner.use_case.3':
		'Zengin metin editörlerinden tutarlı boşluklu düz metin biçimlendirme',
	'ui.text_counter.words': 'Kelime',
	'ui.text_counter.characters': 'Karakter',
	'ui.text_counter.characters_no_spaces': 'Karakter (boşluksuz)',
	'ui.text_counter.sentences': 'Cümle',
	'ui.text_counter.paragraphs': 'Paragraf',
	'ui.text_counter.reading_time': 'Okuma süresi',
	'ui.text_counter.minutes': 'dk',
	'ui.text_counter.lines': 'satır',
	'ui.text_counter.placeholder': 'Metninizi buraya yazın veya yapıştırın...',
	'ui.lorem.mode': 'Mod',
	'ui.lorem.mode.paragraphs': 'Paragraf',
	'ui.lorem.mode.sentences': 'Cümle',
	'ui.lorem.mode.words': 'Kelime',
	'ui.lorem.count': 'Adet',
	'ui.lorem.seed': 'Seed',
	'ui.lorem.random_seed': 'Rastgele seed',
	'ui.lorem.generate': 'Üret',
	'ui.lorem.include_classic_opening': 'Klasik açılışı dahil et',
	'ui.lorem.auto_generate': 'Değişiklikte otomatik üret',
	'ui.lorem.output_format': 'Çıktı formatı',
	'ui.lorem.output_format.plain': 'Düz metin',
	'ui.lorem.output_format.html': 'HTML',
	'ui.lorem.advanced_options': 'Gelişmiş seçenekler',
	'ui.lorem.min_words_per_sentence': 'Cümle başına min kelime',
	'ui.lorem.max_words_per_sentence': 'Cümle başına max kelime',
	'ui.lorem.min_sentences_per_paragraph': 'Paragraf başına min cümle',
	'ui.lorem.max_sentences_per_paragraph': 'Paragraf başına max cümle',
	'ui.lorem.source': 'Kaynak',
	'ui.lorem.preview': 'Önizleme',
	'ui.lorem.empty_output': 'Üretilen çıktı burada görünecek...',
	'ui.lorem.generated': 'Lorem Ipsum üretildi',
	'ui.lorem.seed_randomized': 'Seed rastgeleleştirildi',
	'ui.lorem.no_output': 'Henüz üretilmiş çıktı yok',
	'ui.markdown_to_html.placeholder': 'Markdown metnini buraya yazın veya yapıştırın...',
	'ui.markdown_to_html.option.gfm': 'GFM tablolarını ve görev listelerini etkinleştir',
	'ui.markdown_to_html.option.breaks': 'Tek satır sonlarını <br> etiketine çevir',
	'ui.markdown_to_html.option.highlight_code': 'Kod bloklarında söz dizimi renklendirme uygula',
	'ui.markdown_to_html.option.open_links_in_new_tab': 'Bağlantıları yeni sekmede aç',
	'ui.markdown_to_html.option.allow_raw_html': 'Raw HTML bloklarına izin ver (gelişmiş)',
	'ui.markdown_to_html.view.preview': 'Önizleme',
	'ui.markdown_to_html.view.html': 'HTML',
	'ui.markdown_to_html.status.converting': 'Markdown dönüştürülüyor...',
	'ui.markdown_to_html.preview_aria': 'Markdown HTML canlı önizleme',
	'ui.markdown_to_html.empty_preview':
		'Markdown girdisi yazdığınızda canlı önizleme burada görünecek.',
	'ui.markdown_to_html.empty_html': 'Oluşturulan HTML çıktısı burada görünecek.',
	'ui.markdown_to_html.error.conversion_failed':
		'Dönüştürme sırasında hata oluştu. Lütfen girdinizi kontrol edip tekrar deneyin.',
	'ui.markdown_to_html.toast.no_html_output': 'İndirilecek HTML çıktısı yok',
	'ui.markdown_to_html.warning.unsafe_link_removed': 'Güvensiz bağlantı kaldırıldı',
	'ui.markdown_to_html.warning.unsafe_image_removed': 'Güvensiz görsel kaldırıldı',
	'ui.markdown_to_html.warning.raw_html_escaped': 'Güvenlik için raw HTML escape edildi',
	'ui.markdown_to_html.stats.headings': 'Başlık',
	'ui.markdown_to_html.stats.tables': 'Tablo',
	'ui.markdown_to_html.stats.code_blocks': 'Kod bloğu',
	'ui.markdown_to_html.stats.links': 'Bağlantı',
	'ui.markdown_to_html.stats.images': 'Görsel',
	'ui.markdown_to_html.stats.words': 'Kelime',
	'ui.text_case.tab_label': 'Biçim',
	'ui.text_case.placeholder': 'Biçime dönüştürmek için metin yazın veya yapıştırın...',
	'ui.text_case.camel_case': 'camelCase',
	'ui.text_case.pascal_case': 'PascalCase',
	'ui.text_case.snake_case': 'snake_case',
	'ui.text_case.kebab_case': 'kebab-case',
	'ui.text_case.constant_case': 'CONSTANT_CASE',
	'ui.text_case.title_case': 'Başlık Biçimi',
	'ui.text_case.sentence_case': 'Cümle biçimi',
	'ui.regex.pattern_label': 'Desen',
	'ui.regex.pattern_placeholder': 'örn. (?<name>\\w+)',
	'ui.regex.flags_label': 'Flagler',
	'ui.regex.test_text_label': 'Test Metni',
	'ui.regex.test_text_placeholder': 'Deseninizi test etmek için metin yazın veya yapıştırın...',
	'ui.regex.copy_regex': 'Regex Kopyala',
	'ui.regex.global_hint':
		'Tüm eşleşmeleri görmek için g flagini açın. g kapalıyken yalnızca ilk eşleşme döner.',
	'ui.regex.stats.matches': 'Eşleşme',
	'ui.regex.stats.unique_matches': 'Benzersiz',
	'ui.regex.stats.lines_with_matches': 'Satır',
	'ui.regex.stats.coverage': 'Kapsama',
	'ui.regex.stats.duration': 'Süre',
	'ui.regex.highlight_title': 'Canlı Vurgulama',
	'ui.regex.preview_truncated': 'Önizleme {limit} karakterle sınırlandı',
	'ui.regex.no_highlight': 'Eşleşmeler burada vurgulanacak.',
	'ui.regex.matches_title': 'Eşleşmeler',
	'ui.regex.match_limit_reached': 'Eşleşme limiti doldu',
	'ui.regex.no_matches': 'Eşleşme bulunamadı.',
	'ui.regex.match_label': 'Eşleşme #{index}',
	'ui.regex.match_position': 'Satır {line}, Sütun {column}',
	'ui.regex.match_range': 'Aralık: {range}',
	'ui.regex.capture_groups': 'Capture Grouplar',
	'ui.regex.no_capture_groups': 'Capture group yok',
	'ui.regex.named_capture_groups': 'İsimli Grouplar',
	'ui.regex.no_named_capture_groups': 'İsimli group yok',
	'ui.regex.group_label': 'Group {index}',
	'ui.regex.group_unmatched': 'Eşleşme yok',
	'ui.regex.error.empty_pattern': 'Teste başlamak için bir regex deseni girin.',
	'ui.regex.error.invalid_flag': 'Geçersiz regex flagi: {flag}',
	'ui.regex.error.duplicate_flag': 'Aynı flag birden fazla kez kullanıldı: {flag}',
	'ui.regex.error.unsupported_flag': 'Bu ortamda desteklenmeyen regex flagi: {flag}',
	'ui.regex.error.syntax_error': 'Desen söz dizimi hatası: {detail}',
	'ui.regex.flags.g.label': 'Global',
	'ui.regex.flags.g.description': 'Sadece ilk değil tüm eşleşmeleri bulur',
	'ui.regex.flags.i.label': 'Büyük/küçük harf duyarsız',
	'ui.regex.flags.i.description': 'Harf eşleşmelerinde büyük/küçük harfi yok sayar',
	'ui.regex.flags.m.label': 'Çok satırlı',
	'ui.regex.flags.m.description': '^ ve $ işaretlerini satır bazında çalıştırır',
	'ui.regex.flags.s.label': 'Dotall',
	'ui.regex.flags.s.description': 'Nokta (.) karakterinin yeni satırı da eşleştirmesini sağlar',
	'ui.regex.flags.u.label': 'Unicode',
	'ui.regex.flags.u.description': 'Tam Unicode modunu etkinleştirir',
	'ui.regex.flags.y.label': 'Sticky',
	'ui.regex.flags.y.description': 'Yalnızca mevcut lastIndex konumundan eşleştirir',
	'ui.regex.flags.d.label': 'İndeks',
	'ui.regex.flags.d.description': 'Destekleniyorsa group başlangıç/bitiş indekslerini verir',
	'tool.text-readability-analyzer.display_name': 'Okunabilirlik Analizi',
	'tool.text-readability-analyzer.tagline':
		'Metninizin ne kadar kolay okunduğunu güvenilir okunabilirlik formülleriyle ölçün',
	'tool.text-readability-analyzer.description':
		'Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau ve SMOG metrikleriyle metin okunabilirliğini analiz edin. Cümle karmaşıklığı ve tahmini okuma yaşı içgörülerini anında tarayıcınızda görün.',
	'tool.text-readability-analyzer.primary_keyword': 'okunabilirlik analizi',
	'tool.text-readability-analyzer.meta_title':
		'Okunabilirlik Analizi — Flesch, Fog, SMOG Skorları | fmtly.dev',
	'tool.text-readability-analyzer.meta_description':
		'Flesch, Flesch-Kincaid, Gunning Fog, Coleman-Liau ve SMOG metrikleriyle ücretsiz okunabilirlik analizi. Hızlı, gizli ve tamamen tarayıcıda.',
	'tool.text-readability-analyzer.operation': 'Okunabilirliği Analiz Et',
	'tool.text-readability-analyzer.faq.0.question':
		'Bu araç hangi okunabilirlik formüllerini içeriyor?',
	'tool.text-readability-analyzer.faq.0.answer':
		'Araç Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau ve SMOG skorlarını, ayrıca metin karmaşıklığını destekleyen ek ölçümleri sunar.',
	'tool.text-readability-analyzer.faq.1.question':
		'SMOG skoru neden kısa metinlerde görünmeyebilir?',
	'tool.text-readability-analyzer.faq.1.answer':
		'SMOG en az 3 cümlede daha güvenilir sonuç verir. Daha kısa metinlerde araç dengesiz bir skor yerine uyarı gösterir.',
	'tool.text-readability-analyzer.faq.2.question':
		'Okunabilirlik analizi yerelde mi çalışıyor, sunucuya mı gidiyor?',
	'tool.text-readability-analyzer.faq.2.answer':
		'Tüm analiz tarayıcınızda yerel olarak çalışır. Metniniz hiçbir sunucuya gönderilmez.',
	'tool.text-readability-analyzer.use_case.0':
		'Dokümantasyon, onboarding akışları ve yardım içeriklerini yayına almadan önce değerlendirmek',
	'tool.text-readability-analyzer.use_case.1':
		'Farklı taslak sürümlerini karşılaştırıp en anlaşılır metni seçmek',
	'tool.text-readability-analyzer.use_case.2':
		'Ürün mikro metinlerini ve uygulama içi yönlendirmeleri daha geniş kitleler için iyileştirmek',
	'tool.text-readability-analyzer.use_case.3':
		'Teknik dokümandaki yoğun bölümleri tespit edip sadeleştirmek',
	'tool.text-morse-code-translator.display_name': 'Mors Kodu Çevirici',
	'tool.text-morse-code-translator.tagline':
		'Düz metni Mors koduna çevirin, Mors kodunu tekrar okunur metne dönüştürün',
	'tool.text-morse-code-translator.description':
		'Metni Uluslararası Mors koduna çevirin veya Mors dizilerini anında düz metne dönüştürün. Harf, sayı ve yaygın noktalama işaretlerini destekler; büyük girdilerde Web Worker ile akıcı çalışır ve veriler tarayıcıdan çıkmaz.',
	'tool.text-morse-code-translator.primary_keyword': 'mors kodu çevirici',
	'tool.text-morse-code-translator.meta_title': 'Mors Kodu Çevirici — Metin ↔ Mors | fmtly.dev',
	'tool.text-morse-code-translator.meta_description':
		'Metni Mors koduna çevirin, Mors kodunu düz metne geri dönüştürün. Hızlı, gizli ve tamamen tarayıcı içinde çalışan ücretsiz Mors aracı.',
	'tool.text-morse-code-translator.operation': 'Mors Kodunu Çevir',
	'tool.text-morse-code-translator.faq.0.question': 'Bu araç hangi Mors standardını kullanıyor?',
	'tool.text-morse-code-translator.faq.0.answer':
		'Latin harfleri, rakamlar ve yaygın noktalama işaretleri için Uluslararası Mors standardını kullanır.',
	'tool.text-morse-code-translator.faq.1.question':
		'Çözümlemede bilinmeyen Mors tokenları nasıl ele alınıyor?',
	'tool.text-morse-code-translator.faq.1.answer':
		'Bilinmeyen tokenlar işaretlenir; isterseniz yer tutucu karakterle değiştirip kısmi sonucu incelemeye devam edebilirsiniz.',
	'tool.text-morse-code-translator.faq.2.question':
		'Uzun metinleri ve büyük logları işleyebilir miyim?',
	'tool.text-morse-code-translator.faq.2.answer':
		'Evet. 500KB üzerindeki girdiler Web Worker üzerinde işlenir, böylece arayüz akıcı kalır.',
	'tool.text-morse-code-translator.use_case.0':
		'Çağrı kodlarını, uyarıları veya eğitim metinlerini hızlıca Mors koduna çevirmek',
	'tool.text-morse-code-translator.use_case.1':
		'Log, transkript veya alıştırmalardaki Mors parçalarını metne geri çevirmek',
	'tool.text-morse-code-translator.use_case.2':
		'Anlık encode/decode geri bildirimiyle Mors temellerini öğretmek',
	'tool.text-morse-code-translator.use_case.3':
		'Araçlara entegre etmeden önce noktalama ve boşluk davranışını doğrulamak',
	'ui.morse.mode_label': 'Mod',
	'ui.morse.mode.encode': 'Metin → Mors',
	'ui.morse.mode.decode': 'Mors → Metin',
	'ui.morse.separator_label': 'Kelime ayırıcı',
	'ui.morse.separator.slash': '/ eğik çizgi',
	'ui.morse.separator.pipe': '| dik çizgi',
	'ui.morse.separator.newline': 'Yeni satır',
	'ui.morse.option.preserve_unsupported_encode': 'Desteklenmeyen karakterleri çıktıda koru',
	'ui.morse.option.preserve_unsupported_decode': 'Bilinmeyen Mors tokenları için yer tutucu ekle',
	'ui.morse.option.unknown_placeholder': 'Bilinmeyen yer tutucu',
	'ui.morse.input_label': 'Girdi',
	'ui.morse.output_label': 'Çıktı',
	'ui.morse.input_placeholder.encode': 'Mors koduna çevirmek için metin yazın veya yapıştırın...',
	'ui.morse.input_placeholder.decode': 'Çözümlemek için Mors kodu (., -, /, |) yapıştırın...',
	'ui.morse.output_placeholder.encode': 'Mors çıktısı burada görünür...',
	'ui.morse.output_placeholder.decode': 'Çözümlenmiş metin burada görünür...',
	'ui.morse.button.swap_mode': 'Modu değiştir ve çıktıyı kullan',
	'ui.morse.worker_active':
		'Büyük girdi algılandı (>{size}). İşlem Web Worker üzerinde çalıştırılıyor.',
	'ui.morse.worker_failed': 'Worker işlemi başarısız oldu. Ana iş parçacığında devam edildi.',
	'ui.morse.warning.unsupported_input_characters':
		'Bazı giriş karakterleri desteklenen Mors eşleştirmesinde bulunmuyor.',
	'ui.morse.warning.unknown_morse_tokens': 'Bazı Mors tokenları çözümlenemedi.',
	'ui.morse.warning.no_changes': 'Seçilen mod için değişiklik tespit edilmedi.',
	'ui.morse.stat.symbols': 'Simge',
	'ui.morse.stat.words': 'Kelime',
	'ui.morse.stat.unsupported': 'Desteklenmeyen',
	'ui.morse.stat.unknown_tokens': 'Bilinmeyen token',
	'ui.readability.unavailable': '—',
	'ui.readability.input_label': 'Girdi metni',
	'ui.readability.input_placeholder':
		'Okunabilirliği analiz etmek için metni yapıştırın veya yazın...',
	'ui.readability.output_title': 'Okunabilirlik analizi',
	'ui.readability.processing': 'Analiz ediliyor...',
	'ui.readability.copy_report': 'Raporu kopyala',
	'ui.readability.worker_active':
		'Büyük metin algılandı (>{size}). Analiz Web Worker üzerinde çalıştırılıyor.',
	'ui.readability.worker_failed':
		'Worker işlemi başarısız oldu. Ana iş parçacığında analizle devam edildi.',
	'ui.readability.level_label': 'Genel okunabilirlik',
	'ui.readability.level.very_easy': 'Çok kolay',
	'ui.readability.level.easy': 'Kolay',
	'ui.readability.level.fairly_easy': 'Oldukça kolay',
	'ui.readability.level.standard': 'Standart',
	'ui.readability.level.fairly_difficult': 'Biraz zor',
	'ui.readability.level.difficult': 'Zor',
	'ui.readability.level.very_difficult': 'Çok zor',
	'ui.readability.level_desc.very_easy': 'Geniş kitleler ve hızlı tarama için uygundur.',
	'ui.readability.level_desc.easy': 'Düşük bilişsel yükle net bir dil sunar.',
	'ui.readability.level_desc.fairly_easy':
		'Ürün dokümanları, rehberler ve genel web metinleri için uygundur.',
	'ui.readability.level_desc.standard':
		'Teknik ve teknik olmayan okuyucular için dengeli bir seviyedir.',
	'ui.readability.level_desc.fairly_difficult':
		'Metnin bazı bölümleri yoğun; uzun cümleleri sadeleştirmek faydalı olur.',
	'ui.readability.level_desc.difficult':
		'Dikkatli okuma gerektirir. Daha kısa cümleler ve daha sade kelimeler önerilir.',
	'ui.readability.level_desc.very_difficult':
		'Metin oldukça yoğun. Yayın öncesi netlik için yeniden yazılması önerilir.',
	'ui.readability.metric.words': 'Kelime',
	'ui.readability.metric.sentences': 'Cümle',
	'ui.readability.metric.syllables': 'Hece',
	'ui.readability.metric.reading_age': 'Okuma yaşı',
	'ui.readability.metric.reading_time': 'Okuma süresi',
	'ui.readability.metric.paragraphs': 'Paragraf',
	'ui.readability.metric.complex_words': 'Karmaşık kelime',
	'ui.readability.stat.avg_words_per_sentence': 'Ort. kelime/cümle',
	'ui.readability.stat.avg_syllables_per_word': 'Ort. hece/kelime',
	'ui.readability.stat.characters': 'Karakter',
	'ui.readability.stat.letters': 'Harf',
	'ui.readability.scores_title': 'Okunabilirlik formülleri',
	'ui.readability.score.flesch_ease': 'Flesch Reading Ease',
	'ui.readability.score.flesch_kincaid': 'Flesch-Kincaid Grade',
	'ui.readability.score.gunning_fog': 'Gunning Fog',
	'ui.readability.score.coleman_liau': 'Coleman-Liau İndeksi',
	'ui.readability.score.smog': 'SMOG',
	'ui.readability.score_desc.flesch_ease': 'Skor yükseldikçe metin daha kolay okunur.',
	'ui.readability.score_desc.flesch_kincaid':
		'ABD eğitim düzeyi karşılığına göre tahmini sınıf seviyesi.',
	'ui.readability.score_desc.gunning_fog':
		'Cümle uzunluğu ve kelime zorluğuna göre metin karmaşıklığı.',
	'ui.readability.score_desc.coleman_liau':
		'Harf yoğunluğu ve cümle sıklığına göre okunabilirlik tahmini.',
	'ui.readability.score_desc.smog': 'Çok heceli kelimelere göre tahmini okuma seviyesi.',
	'ui.readability.warning.insufficient_sentences_for_smog':
		'SMOG için daha sağlıklı bir tahmin adına en az 3 cümle gerekir.',
	'ui.readability.report_title': 'Okunabilirlik Raporu',
	'ui.readability.report_level': 'Seviye',
	'ui.readability.report_reading_age': 'Tahmini okuma yaşı',
	'ui.text_reverser.tab_label': 'Ters Çevir',
	'ui.text_reverser.placeholder': 'Ters çevirmek için metin yazın veya yapıştırın...',
	'ui.text_reverser.characters': 'Karaktere göre ters çevir',
	'ui.text_reverser.words': 'Kelimeye göre ters çevir',
	'ui.text_reverser.lines': 'Satıra göre ters çevir',
	'ui.text_reverser.lines_count': 'satır',
	'ui.duplicate_line_remover.tab_label': 'Tekilleştir',
	'ui.duplicate_line_remover.placeholder':
		'Tekrar eden satırları kaldırmak için metin yazın veya yapıştırın...',
	'ui.duplicate_line_remover.unique_lines': 'Benzersiz satır',
	'ui.duplicate_line_remover.duplicates_removed': 'Kaldırılan tekrar',
	'ui.duplicate_line_remover.result': 'Sonuç',
	'ui.line_sorter.tab_label': 'Sırala',
	'ui.line_sorter.placeholder': 'Sıralamak için satırları yazın veya yapıştırın...',
	'ui.line_sorter.mode_label': 'Sıralama modu',
	'ui.line_sorter.mode.alphabetical': 'Alfabetik',
	'ui.line_sorter.mode.numeric': 'Sayısal',
	'ui.line_sorter.mode.length': 'Uzunluğa göre',
	'ui.line_sorter.mode.random': 'Rastgele karıştır',
	'ui.line_sorter.direction_label': 'Yön',
	'ui.line_sorter.direction.asc': 'Artan',
	'ui.line_sorter.direction.desc': 'Azalan',
	'ui.line_sorter.option.case_sensitive': 'Büyük/küçük harfe duyarlı sırala',
	'ui.line_sorter.option.trim_before_sort': 'Sıralamadan önce satırları kırp',
	'ui.line_sorter.option.remove_empty_lines': 'Boş satırları kaldır',
	'ui.line_sorter.option.deduplicate': 'Önce satırları tekilleştir',
	'ui.line_sorter.shuffle_seed': 'Karıştırma seed',
	'ui.line_sorter.generate_seed': 'Rastgele seed üret',
	'ui.line_sorter.input_lines': 'Giriş satırı',
	'ui.line_sorter.output_lines': 'Çıktı satırı',
	'ui.line_sorter.empty_lines_removed': 'Kaldırılan boş satır',
	'ui.line_sorter.duplicates_removed': 'Kaldırılan tekrar',
	'ui.line_sorter.lines_moved': 'Yeri değişen satır',
	'ui.line_sorter.output': 'Sıralanmış çıktı',
	'ui.line_sorter.apply_output': 'Girdiye uygula',
	'ui.line_sorter.status.processing': 'Satırlar sıralanıyor...',
	'ui.line_sorter.status.worker': 'Büyük girdi modu (Web Worker)',
	'ui.line_sorter.error.processing_failed':
		'Sıralama başarısız oldu. Seçenekleri veya girdiyi düzenleyip tekrar deneyin.',
	'ui.line_sorter.toast.applied': 'Sıralanmış çıktı girdiye uygulandı',
	'ui.line_sorter.no_output': 'Henüz gösterilecek sıralanmış çıktı yok',
	'ui.whitespace_cleaner.tab_label': 'Boşluk',
	'ui.whitespace_cleaner.placeholder': 'Boşlukları temizlemek için metin yazın veya yapıştırın...',
	'ui.whitespace_cleaner.output': 'Çıktı',
	'ui.whitespace_cleaner.statistics': 'İstatistikler',
	'ui.whitespace_cleaner.normalized': 'Normalize edildi',
	'ui.whitespace_cleaner.trailing_spaces': 'Sondaki boşluklar',
	'ui.whitespace_cleaner.leading_spaces': 'Baştaki boşluklar',
	'ui.whitespace_cleaner.blanks_collapsed': 'Boşluklar birleştirildi',
	'ui.whitespace_cleaner.tabs_converted': 'Sekmeler dönüştürüldü',
	'ui.whitespace_cleaner.spaces_converted': 'Boşluklar dönüştürüldü',
	'ui.whitespace_cleaner.lines_processed': 'İşlenen satırlar',
	'ui.whitespace_cleaner.line_endings_normalized': 'Satır sonları normalize edildi',
	'ui.whitespace_cleaner.result': 'Sonuç',
	'ui.whitespace_cleaner.options': 'Temizleme Seçenekleri',
	'ui.whitespace_cleaner.remove_leading': 'Baştaki boşlukları kaldır',
	'ui.whitespace_cleaner.remove_trailing': 'Sondaki boşlukları kaldır',
	'ui.whitespace_cleaner.collapse_spaces': 'Birden fazla boşluğu daralt',
	'ui.whitespace_cleaner.collapse_tabs': 'Sekmeleri boşluğa daralt',
	'ui.whitespace_cleaner.convert_tabs_to_spaces': 'Sekmeleri boşluğa dönüştür',
	'ui.whitespace_cleaner.convert_spaces_to_tabs': 'Boşlukları sekme yap',
	'ui.whitespace_cleaner.trim_lines': 'Her satırı kırp',
	'ui.whitespace_cleaner.remove_all_spaces': 'Tüm boşlukları kaldır',
	'ui.whitespace_cleaner.remove_all_line_breaks': 'Tüm satır sonlarını kaldır',
	'ui.whitespace_cleaner.preserve_paragraph_breaks': 'Paragraf sonlarını koru',
	'ui.whitespace_cleaner.tab_size': 'Sekme boyutu',
	'ui.csv.controls.table_name': 'Tablo Adı',
	'ui.csv.controls.batch_size': 'Batch Boyutu',
	// ── Encode Kategorisi ─────────────────────────────────────────────────────
	'category.encode.display_name': 'Kodlama / Çözme',
	'category.encode.description':
		'Yaygın formatlarda verileri kodlayın ve çözün — JWT, Base64, URL, HTML varlıkları ve daha fazlası. Tüm araçlar tamamen tarayıcınızda çalışır.',
	'category.encode.primary_keyword': 'kodlama çözme araçları',
	// ── JWT Decoder ───────────────────────────────────────────────────────────
	'tool.encode-jwt-decoder.display_name': 'JWT Çözücü',
	'tool.encode-jwt-decoder.tagline':
		"JWT tokenlerini çözün, claim'leri, son kullanma tarihini ve algoritmayı inceleyin",
	'tool.encode-jwt-decoder.description':
		"JSON Web Token'larını anında çözün — başlık algoritmasını, payload claim'lerini, son kullanma zaman damgalarını ve ham Base64URL imzasını inceleyin. Tüm işlemler tarayıcınızda gerçekleşir; hiçbir şey sunucuya gönderilmez.",
	'tool.encode-jwt-decoder.primary_keyword': 'jwt çözücü',
	'tool.encode-jwt-decoder.meta_title':
		"JWT Çözücü — Başlık, Payload ve Claim'leri İnceleyin | fmtly.dev",
	'tool.encode-jwt-decoder.meta_description':
		"JWT tokenlerini tarayıcınızda çözün ve inceleyin. Başlık, payload claim'leri, son kullanma durumu ve imzayı görüntüleyin. Hızlı, gizli ve ücretsiz — hiçbir veri cihazınızı terk etmez.",
	'tool.encode-jwt-decoder.operation': 'JWT Çöz',
	'tool.encode-jwt-decoder.faq.0.question': "JWT'im bir sunucuya gönderilir mi?",
	'tool.encode-jwt-decoder.faq.0.answer':
		"Hayır. Tüm çözme işlemleri tamamen tarayıcınızda gerçekleşir. Token'ınız hiçbir zaman cihazınızı terk etmez, bu da aracı gerçek kimlik doğrulama tokenleri ile güvenle kullanmanıza olanak tanır.",
	'tool.encode-jwt-decoder.faq.1.question': 'Bu araç imzayı doğruluyor mu?',
	'tool.encode-jwt-decoder.faq.1.answer':
		"Hayır. İmza doğrulaması gizli veya genel anahtar gerektirir. Bu araç yalnızca payload'ı çözer ve gösterir — özgünlüğü doğrulamak için sunucu tarafı kütüphanenizi kullanın.",
	'tool.encode-jwt-decoder.faq.2.question': 'Hangi JWT algoritmaları destekleniyor?',
	'tool.encode-jwt-decoder.faq.2.answer':
		"Çözücü, imzayı doğrulamadan yalnızca Base64URL kodlu içeriği çözdüğünden, algoritması ne olursa olsun (HS256, RS256, ES256 vb.) standart üç parçalı her JWT'yi işler.",
	'tool.encode-jwt-decoder.faq.3.question': "Büyük JWT'leri veya token gruplarını çözebilir miyim?",
	'tool.encode-jwt-decoder.faq.3.answer':
		"500KB'ı aşan girdiler, olağandışı büyük tokenler veya test payload'ları için bile arayüzü duyarlı tutmak amacıyla otomatik olarak bir Web Worker'a aktarılır.",
	'tool.encode-jwt-decoder.use_case.0':
		'Yerel API geliştirme ve hata ayıklama sırasında kimlik doğrulama tokenlerini inceleme',
	'tool.encode-jwt-decoder.use_case.1':
		'Token son kullanma tarihini ve standart claim değerlerini (iss, sub, aud) tek bakışta kontrol etme',
	'tool.encode-jwt-decoder.use_case.2':
		'JWT yapısını ve başlık, payload ile imza bölümlerinin rolünü öğretme',
	'tool.encode-jwt-decoder.use_case.3':
		"Payload'daki özel claim'leri inceleyerek yetkilendirme hatalarını giderme",
	// ── JWT Decoder — arayüz metinleri ───────────────────────────────────────
	'ui.jwt.input_placeholder': "JWT token'ınızı buraya yapıştırın (eyJ…)",
	'ui.jwt.section.header': 'Başlık',
	'ui.jwt.section.payload': 'Payload',
	'ui.jwt.section.signature': 'İmza',
	'ui.jwt.standard_claims': "Standart Claim'ler",
	'ui.jwt.all_claims': "Tüm Claim'ler",
	'ui.jwt.signature_note':
		'İmzalar doğrulanmaz. Token özgünlüğünü doğrulamak için sunucu tarafı kütüphanenizi kullanın.',
	'ui.jwt.status.valid': 'Geçerli',
	'ui.jwt.status.expired': 'Süresi Dolmuş',
	'ui.jwt.status.not_yet_valid': 'Henüz Geçerli Değil',
	'ui.jwt.status.no_expiry': 'Son Kullanma Tarihi Yok',
	'ui.jwt.expires_in': '{time} içinde sona eriyor',
	'ui.jwt.expired_ago': '{time} önce sona erdi',
	'ui.jwt.claim.iss': 'Düzenleyen',
	'ui.jwt.claim.sub': 'Konu',
	'ui.jwt.claim.aud': 'Hedef Kitle',
	'ui.jwt.claim.exp': 'Son Kullanma',
	'ui.jwt.claim.nbf': 'Başlangıç',
	'ui.jwt.claim.iat': 'Düzenleme Tarihi',
	'ui.jwt.claim.jti': 'JWT Kimliği',
	'ui.jwt.error.empty': 'Çözmek için yukarıya bir JWT token yapıştırın.',
	'ui.jwt.error.invalid_format': 'Geçersiz JWT biçimi: nokta ile ayrılmış 3 parça bekleniyor.',
	'ui.jwt.error.invalid_base64': 'Base64URL kodlaması çözümlenemedi.',
	'ui.jwt.error.invalid_json': 'Çözümlenen içerik geçerli JSON değil.',
	'ui.jwt.clear': 'Temizle',
	'ui.jwt.copy_jwt': "Token'ı Kopyala",
	'ui.jwt.copy_header': 'Kopyala',
	'ui.jwt.copy_payload': 'Kopyala',
	'ui.jwt.copy_signature': 'Kopyala',
	'ui.jwt.worker_active': "Büyük girdi (>{size}) Worker'da işleniyor.",
	'ui.jwt.worker_failed': "Worker işlemi başarısız. Ana thread'e geri dönülüyor.",
	// ── Base64 Kodla / Çöz ───────────────────────────────────────────────────
	'tool.encode-base64-encode-decode.display_name': 'Base64 Kodla / Çöz',
	'tool.encode-base64-encode-decode.tagline':
		'Base64 metnini standart ve URL-güvenli varyantlarla kodlayın veya çözün',
	'tool.encode-base64-encode-decode.description':
		"Düz metni Base64'e kodlayın veya Base64'ü tarayıcınızda anında UTF-8 metne çözün. Standart ve URL-güvenli varyantlar arasında geçiş yapın, dolgu davranışını yönetin, çözümleme sırasında boşlukları yok sayın ve büyük girdileri Web Worker ile işleyin.",
	'tool.encode-base64-encode-decode.primary_keyword': 'base64 kodla çöz',
	'tool.encode-base64-encode-decode.meta_title':
		'Base64 Kodla / Çöz — Standart ve URL-Güvenli Dönüştürücü | fmtly.dev',
	'tool.encode-base64-encode-decode.meta_description':
		'Base64 verisini tarayıcınızda anında kodlayın veya çözün. Standart ve URL-güvenli varyantlar, dolgu seçenekleri, boşluk toleranslı çözümleme ve büyük girdiler için Web Worker desteği sunar.',
	'tool.encode-base64-encode-decode.operation': 'Base64 Kodla / Çöz',
	'tool.encode-base64-encode-decode.faq.0.question': 'Base64 girdim sunucuya gönderilir mi?',
	'tool.encode-base64-encode-decode.faq.0.answer':
		'Hayır. Tüm Base64 kodlama ve çözme işlemleri tamamen tarayıcınızda çalışır. Veriniz cihazınızı terk etmez.',
	'tool.encode-base64-encode-decode.faq.1.question':
		'Standart Base64 ile URL-güvenli Base64 arasındaki fark nedir?',
	'tool.encode-base64-encode-decode.faq.1.answer':
		"Standart Base64 + ve / kullanır; URL-güvenli Base64 ise - ve _ kullanır. URL-güvenli çıktı, JWT, sorgu parametresi ve dosya adı gibi URL'de sorun çıkarabilecek karakterleri önlemek için tercih edilir.",
	'tool.encode-base64-encode-decode.faq.2.question':
		'Eksik dolgu veya satır sonu içeren Base64 metnini çözebilir mi?',
	'tool.encode-base64-encode-decode.faq.2.answer':
		'Evet. Çözücü, boşlukları yok sayabilir ve mümkün olduğunda eksik dolguyu otomatik tamamlayabilir; böylece log veya tokenlardan kopyalanan metinleri daha kolay işlersiniz.',
	'tool.encode-base64-encode-decode.faq.3.question': 'Büyük Base64 payloadlarını işleyebilir mi?',
	'tool.encode-base64-encode-decode.faq.3.answer':
		'Evet. 500KB üzerindeki girdiler arayüzün akıcı kalması için otomatik olarak Web Worker üzerinde işlenir.',
	'tool.encode-base64-encode-decode.use_case.0':
		"Geliştirme sırasında API kimlik bilgilerini veya test payloadlarını Base64'e kodlamak",
	'tool.encode-base64-encode-decode.use_case.1':
		"Loglardan, header'lardan veya hata ayıklama araçlarından kopyalanan Base64 parçalarını çözmek",
	'tool.encode-base64-encode-decode.use_case.2':
		'Standart ve URL-güvenli Base64 varyantları arasında hızlı geçiş yapmak',
	'tool.encode-base64-encode-decode.use_case.3':
		'Boşluklu veya eksik dolgulu dağınık Base64 girdilerini normalize etmek',
	// ── Base64 Kodla / Çöz — arayüz metinleri ────────────────────────────────
	'ui.base64.tab_label': 'Base64',
	'ui.base64.action_label': 'İşlem',
	'ui.base64.action.encode': 'Kodla',
	'ui.base64.action.decode': 'Çöz',
	'ui.base64.variant_label': 'Varyant',
	'ui.base64.variant.standard': 'Standart',
	'ui.base64.variant.url_safe': 'URL-güvenli',
	'ui.base64.input_label': 'Girdi',
	'ui.base64.output_label': 'Çıktı',
	'ui.base64.input_placeholder': 'Düz metin veya Base64 içerik yapıştırın...',
	'ui.base64.output_placeholder': 'Kodlanmış ya da çözülmüş çıktı burada görünür...',
	'ui.base64.option.omit_padding': 'Sondaki = dolgusunu kaldır',
	'ui.base64.option.ignore_whitespace': 'Çözümleme sırasında satır sonu ve boşlukları yok say',
	'ui.base64.worker_active': 'Büyük girdi algılandı (>{size}). İşlem Web Worker üzerinde çalışır.',
	'ui.base64.worker_failed': 'Worker işlemi başarısız oldu. Ana thread işlemine dönülüyor.',
	'ui.base64.worker_badge': 'Worker',
	'ui.base64.warning.no_changes': 'Seçilen mod ve işlem için değişiklik tespit edilmedi.',
	'ui.base64.warning.whitespace_ignored': 'Çözümlemeden önce boşluk karakterleri kaldırıldı.',
	'ui.base64.warning.padding_auto_added': 'Eksik dolgu çözümlemeden önce otomatik eklendi.',
	'ui.base64.warning.alphabet_normalized':
		"URL-güvenli karakterler çözümleme için standart Base64'e dönüştürüldü.",
	'ui.base64.error.invalid_base64_characters': 'Geçersiz Base64 girdisi: {detail}',
	'ui.base64.error.invalid_base64_length': 'Geçersiz Base64 uzunluğu: {detail}',
	'ui.base64.error.invalid_utf8_output': 'Çözümlenen baytlar geçerli UTF-8 metin değil: {detail}',
	'ui.base64.button.swap_direction': 'Yönü değiştir',
	'ui.base64.button.apply_output': 'Çıktıyı girdiye uygula',
	'ui.base64.toast.applied': 'Çıktı girdiye uygulandı',
	'ui.base64.characters': 'karakter',
	// ── URL Kodla / Çöz ──────────────────────────────────────────────────────
	'tool.encode-url-encode-decode.display_name': 'URL Kodla / Çöz',
	'tool.encode-url-encode-decode.tagline':
		'URL metnini bileşen veya tam URL modunda yüzde kodlayın ya da çözün',
	'tool.encode-url-encode-decode.description':
		'URL metinlerini tarayıcınızda anında kodlayın veya çözün. Bileşen modu (encodeURIComponent/decodeURIComponent) ile tam URL modu (encodeURI/decodeURI) arasında geçiş yapın, form verilerindeki + işaretini boşluk olarak yönetin ve büyük girdileri Web Worker ile akıcı şekilde işleyin.',
	'tool.encode-url-encode-decode.primary_keyword': 'url kodla çöz',
	'tool.encode-url-encode-decode.meta_title':
		'URL Kodla / Çöz — URL Yüzde Kodlama Aracı | fmtly.dev',
	'tool.encode-url-encode-decode.meta_description':
		'URL metinlerini tarayıcınızda anında kodlayın veya çözün. Bileşen/tam URL modu, artı-boşluk yönetimi ve büyük girdiler için Web Worker desteği sunar.',
	'tool.encode-url-encode-decode.operation': 'URL Kodla / Çöz',
	'tool.encode-url-encode-decode.faq.0.question': 'URL verim bir sunucuya gönderilir mi?',
	'tool.encode-url-encode-decode.faq.0.answer':
		'Hayır. Tüm kodlama ve çözme işlemleri tamamen tarayıcınızda gerçekleşir. Girdiniz cihazınızı terk etmez.',
	'tool.encode-url-encode-decode.faq.1.question':
		'Bileşen modu ile tam URL modu arasındaki fark nedir?',
	'tool.encode-url-encode-decode.faq.1.answer':
		'Bileşen modu, sorgu parametresi değeri veya yol parçası gibi tekil parçalar içindir; ?, &, = gibi ayraçları da kodlar. Tam URL modu ise URL yapısındaki ayraçları korur ve yalnızca güvensiz karakterleri kodlar.',
	'tool.encode-url-encode-decode.faq.2.question': '+ işareti neden bazen boşluk olarak çözülür?',
	'tool.encode-url-encode-decode.faq.2.answer':
		'application/x-www-form-urlencoded verilerde boşluklar çoğu zaman + ile temsil edilir. Form tarzı verilerde çözme yaparken artıdan boşluğa seçeneğini açın.',
	'tool.encode-url-encode-decode.faq.3.question': 'Bu araç büyük URL girdilerini işleyebilir mi?',
	'tool.encode-url-encode-decode.faq.3.answer':
		'Evet. 500KB üzerindeki girdiler arayüzü akıcı tutmak için otomatik olarak Web Worker üzerinde işlenir.',
	'tool.encode-url-encode-decode.use_case.0':
		'API isteklerinden önce sorgu parametrelerini güvenli şekilde kodlamak',
	'tool.encode-url-encode-decode.use_case.1':
		'Yönlendirme sorunlarını ayıklarken loglardan alınan URL parçalarını çözmek',
	'tool.encode-url-encode-decode.use_case.2':
		'Form-urlencoded örneklerinde artı-boşluk davranışını doğrulamak',
	'tool.encode-url-encode-decode.use_case.3':
		'Redirect sorunlarında kodlanmış ve çözülmüş URL çıktısını karşılaştırmak',
	// ── HTML varlıkları kodla / çöz — araç ───────────────────────────────────
	'tool.encode-html-entities-encode-decode.display_name': 'HTML varlığı kodla / çöz',
	'tool.encode-html-entities-encode-decode.tagline':
		'HTML karakter başvurularını kodlayın veya çözün — WHATWG adları, ondalık ve onaltılık',
	'tool.encode-html-entities-encode-decode.description':
		'Metni güvenli HTML varlıklarına dönüştürün veya başvuruları Unicode’a çözün; tamamı tarayıcıda. Tam WHATWG ad haritası, sayısal biçimler, katı veya hoşgörülü çözümleme, isteğe bağlı ASCII dışı kodlama ve 500 KB üzeri Web Worker desteği.',
	'tool.encode-html-entities-encode-decode.primary_keyword': 'html entity kodla çöz çevrimiçi',
	'tool.encode-html-entities-encode-decode.meta_title':
		'HTML varlıkları: kodla ve çöz çevrimiçi | fmtly.dev',
	'tool.encode-html-entities-encode-decode.meta_description':
		'HTML varlıklarını tarayıcıda anında kodlayın veya çözün. Tam WHATWG ad seti, ondalık ve onaltılık modlar, katı doğrulama, temel karakterler ve tam Unicode kapsamı ve büyük girdiler için Web Worker.',
	'tool.encode-html-entities-encode-decode.operation': 'HTML varlığı kodla / çöz',
	'tool.encode-html-entities-encode-decode.faq.0.question': 'Metnim bir sunucuya gönderilir mi?',
	'tool.encode-html-entities-encode-decode.faq.0.answer':
		'Hayır. Tüm kodlama ve çözümleme tarayıcınızda yerel olarak çalışır; girdiniz cihazınızdan çıkmaz.',
	'tool.encode-html-entities-encode-decode.faq.1.question':
		'Katı ve hoşgörülü çözümleme arasındaki fark nedir?',
	'tool.encode-html-entities-encode-decode.faq.1.answer':
		'Hoşgörülü mod, bilinmeyen veya hatalı başvuruları olduğu gibi bırakır; karışık parçalar için uygundur. Katı mod, başvuru eksik veya tanınmıyorsa hata verir.',
	'tool.encode-html-entities-encode-decode.faq.2.question':
		'Hangi adlandırılmış varlıklar desteklenir?',
	'tool.encode-html-entities-encode-decode.faq.2.answer':
		'Çözümleme, WHATWG’nin tam adlandırılmış karakter başvuru listesini (2.100’den fazla ad) ve ondalık ile onaltılık sayısal başvuruları kullanır.',
	'tool.encode-html-entities-encode-decode.faq.3.question': 'Çok büyük belgeleri işleyebilir mi?',
	'tool.encode-html-entities-encode-decode.faq.3.answer':
		'Evet. 500 KB üzerindeki girdiler arayüzün akıcı kalması için Web Worker üzerinde işlenir.',
	'tool.encode-html-entities-encode-decode.use_case.0':
		'Kullanıcı içeriğini HTML şablonlarına eklemeden önce kaçışlamak',
	'tool.encode-html-entities-encode-decode.use_case.1':
		'Dışa aktarılmış veya kazınmış HTML’deki varlıkları okunabilir düz metne çözmek',
	'tool.encode-html-entities-encode-decode.use_case.2':
		'Tırnak, ve işareti ve sembolleri CMS veya e-posta işaretlemesi için normalize etmek',
	'tool.encode-html-entities-encode-decode.use_case.3':
		'HTML parçalarında veya test verilerinde katı ayrıştırma kurallarını doğrulamak',
	// ── HTML varlıkları — arayüz ────────────────────────────────────────────
	'ui.encode_html_entities.tab_label': 'Varlıklar',
	'ui.encode_html_entities.action_label': 'İşlem',
	'ui.encode_html_entities.action.encode': 'Kodla',
	'ui.encode_html_entities.action.decode': 'Çöz',
	'ui.encode_html_entities.format_label': 'Çıktı biçimi',
	'ui.encode_html_entities.format.named': 'Adlandırılmış + sayısal yedek',
	'ui.encode_html_entities.format.decimal': 'Ondalık sayısal',
	'ui.encode_html_entities.format.hex': 'Onaltılık sayısal',
	'ui.encode_html_entities.scope_label': 'Kodlama kapsamı',
	'ui.encode_html_entities.scope.essentials': 'Temel (& < > " \')',
	'ui.encode_html_entities.scope.all_non_ascii': 'Temel + tüm ASCII dışı',
	'ui.encode_html_entities.apostrophe_label': 'Kesme işareti (adlandırılmış mod)',
	'ui.encode_html_entities.apostrophe.numeric': '&#39;',
	'ui.encode_html_entities.apostrophe.apos': '&apos;',
	'ui.encode_html_entities.option.encode_line_breaks': 'CR/LF’yi sayısal varlık olarak kodla',
	'ui.encode_html_entities.option.encode_apostrophe': 'Kesme işaretini (U+0027) kodla',
	'ui.encode_html_entities.decode_mode_label': 'Çözümleme modu',
	'ui.encode_html_entities.decode.permissive': 'Hoşgörülü',
	'ui.encode_html_entities.decode.strict': 'Katı',
	'ui.encode_html_entities.decode.hint':
		'Katı mod bilinmeyen veya hatalı başvuruları reddeder. Hoşgörülü mod geçersiz parçaları olduğu gibi bırakır.',
	'ui.encode_html_entities.input_label': 'Girdi',
	'ui.encode_html_entities.output_label': 'Çıktı',
	'ui.encode_html_entities.input_placeholder': 'Metin veya varlıklı HTML parçaları yapıştırın...',
	'ui.encode_html_entities.output_placeholder': 'Kodlanmış veya çözülmüş çıktı burada görünür...',
	'ui.encode_html_entities.worker_active':
		'Büyük girdi algılandı (>{size}). İşlem bir Web Worker içinde çalışıyor.',
	'ui.encode_html_entities.worker_failed':
		'Worker işlemi başarısız oldu. Ana iş parçacığına dönülüyor.',
	'ui.encode_html_entities.worker_badge': 'Worker',
	'ui.encode_html_entities.warning.no_changes':
		'Seçilen seçenekler için değişiklik tespit edilmedi.',
	'ui.encode_html_entities.error.invalid_entity': '{detail} (konum {offset})',
	'ui.encode_html_entities.error.incomplete_reference': '{detail} (konum {offset})',
	'ui.encode_html_entities.button.swap_direction': 'Yönü değiştir',
	'ui.encode_html_entities.button.apply_output': 'Çıktıyı girdiye uygula',
	'ui.encode_html_entities.toast.applied': 'Çıktı girdiye uygulandı',
	'ui.encode_html_entities.characters': 'karakter',
	// ── Unicode denetleyici — araç ──────────────────────────────────────────
	'tool.encode-unicode-inspector.display_name': 'Unicode Denetleyici',
	'tool.encode-unicode-inspector.tagline':
		'Kod noktaları, UTF-8 baytları, adlar, kategori, yazı ve Doğu Asya genişliğini inceleyin',
	'tool.encode-unicode-inspector.description':
		'Her grafem kümesini veya Unicode skaler değerini U+ gösterimi, UTF-8 onaltılık baytlar, resmî ad, genel kategori, yazı ve Doğu Asya genişliğiyle görmek için UTF-8 metin yapıştırın. Büyük girdiler Web Worker’da işlenir; her şey tarayıcıda kalır.',
	'tool.encode-unicode-inspector.primary_keyword': 'unicode kod noktası denetleyici',
	'tool.encode-unicode-inspector.meta_title': 'Unicode Denetleyici — UTF-8 & U+ | fmtly.dev',
	'tool.encode-unicode-inspector.meta_description':
		'Unicode’u tarayıcıda inceleyin: U+ kod noktaları, UTF-8 baytları, adlar, kategori, yazı ve Doğu Asya genişliği. Grafem veya skaler mod; büyük metinler için Worker. Gizli ve anında.',
	'tool.encode-unicode-inspector.operation': 'Unicode incele',
	'tool.encode-unicode-inspector.faq.0.question': 'Metnim sunucuya yüklenir mi?',
	'tool.encode-unicode-inspector.faq.0.answer':
		'Hayır. İnceleme tamamen tarayıcınızda çalışır. Girdiniz cihazınızdan çıkmaz.',
	'tool.encode-unicode-inspector.faq.1.question': 'Grafem ve skaler mod arasındaki fark nedir?',
	'tool.encode-unicode-inspector.faq.1.answer':
		'Grafem modu, tarayıcı Intl.Segmenter destekliyorsa kullanıcının algıladığı karakterleri gruplar (cilt tonlu emoji, ZWJ dizileri, birleşen işaretler). Skaler modu her Unicode kod noktasını ayrı listeler.',
	'tool.encode-unicode-inspector.faq.2.question':
		'Adlar veya özellikler bazen neden yabancı görünür?',
	'tool.encode-unicode-inspector.faq.2.answer':
		'Adlar ve özellikler Unicode Karakter Veritabanı’na uyar. Atanmamış kod noktaları «unassigned» vb. görünür; bazı semboller normatif Unicode adları kullanır.',
	'tool.encode-unicode-inspector.faq.3.question': 'Büyük girdi neden Web Worker kullanır?',
	'tool.encode-unicode-inspector.faq.3.answer':
		'500 KB üzeri girdiler ana iş parçacığı dışında işlenir; Unicode tabloları sorgulanırken tablo, kaydırma ve kontroller akıcı kalır.',
	'tool.encode-unicode-inspector.use_case.0':
		'Günlüklerde ve kullanıcı girdisinde görünmez karakterler, yanlış kodlama veya karışık yazıları ayıklama',
	'tool.encode-unicode-inspector.use_case.1':
		'Uluslararasılaştırılmış dosya adları veya API’ler için UTF-8 bayt dizileri ve kod noktalarını doğrulama',
	'tool.encode-unicode-inspector.use_case.2':
		'Unicode temelleri öğretmek: grafem kümeleri, birleşen işaretler ve emoji dizileri',
	'tool.encode-unicode-inspector.use_case.3':
		'Belgeleme veya test verileri için segment ve özelliklerin TSV tablosunu dışa aktarma',
	// ── Unicode denetleyici — arayüz ──────────────────────────────────────────
	'ui.unicode_inspector.tab_label': 'Unicode',
	'ui.unicode_inspector.utf16_units': 'UTF-16 birimi',
	'ui.unicode_inspector.backend_load_error':
		'Unicode ad tabloları yüklenemedi. Bağlantınızı kontrol edip yeniden deneyin.',
	'ui.unicode_inspector.worker_failed': 'Worker işlemi başarısız. Ana iş parçacığına dönülüyor.',
	'ui.unicode_inspector.granularity_label': 'Segmentasyon',
	'ui.unicode_inspector.granularity.grapheme': 'Grafem kümeleri',
	'ui.unicode_inspector.granularity.codepoint': 'Unicode skaler değerleri',
	'ui.unicode_inspector.granularity_hint':
		'Grafem modu mümkünse Intl.Segmenter kullanır (emoji ZWJ dizileri, birleşen işaretler). Aksi halde her skaler ayrı gösterilir.',
	'ui.unicode_inspector.max_scalars_label': 'Satır limiti (skaler)',
	'ui.unicode_inspector.worker_active': 'Büyük girdi (>{size}). İnceleme Web Worker’da çalışır.',
	'ui.unicode_inspector.copy_tsv': 'TSV kopyala',
	'ui.unicode_inspector.input_label': 'Girdi',
	'ui.unicode_inspector.input_placeholder':
		'Kod noktalarını incelemek için UTF-8 metin yapıştırın…',
	'ui.unicode_inspector.results_label': 'İnceleme',
	'ui.unicode_inspector.loading_backend': 'Unicode verileri yükleniyor…',
	'ui.unicode_inspector.worker_badge': 'Worker',
	'ui.unicode_inspector.summary':
		'{clusters} küme · {scalars} skaler · {bytes} bayt UTF-8 · {ms} ms',
	'ui.unicode_inspector.truncated':
		'Çıktı kısaltıldı; {omitted} skaler daha gösterilmedi. Limiti artırın veya girdiyi kısaltın.',
	'ui.unicode_inspector.col.segment': 'Segment',
	'ui.unicode_inspector.col.codepoint': 'U+',
	'ui.unicode_inspector.col.glyph': 'Glif',
	'ui.unicode_inspector.col.utf8': 'UTF-8',
	'ui.unicode_inspector.col.category': 'Kat.',
	'ui.unicode_inspector.col.script': 'Yazı',
	'ui.unicode_inspector.col.eaw': 'DAG',
	'ui.unicode_inspector.col.name': 'Ad',
	'ui.unicode_inspector.table_region': 'Unicode skaler tablosu',
	'ui.unicode_inspector.empty_hint':
		'Kod noktalarını ve adları görmek için metin yazın veya yapıştırın.',
	'ui.unicode_inspector.gc.Lu': 'Harf, büyük',
	'ui.unicode_inspector.gc.Ll': 'Harf, küçük',
	'ui.unicode_inspector.gc.Lt': 'Harf, başlık',
	'ui.unicode_inspector.gc.Lm': 'Harf, değiştirici',
	'ui.unicode_inspector.gc.Lo': 'Harf, diğer',
	'ui.unicode_inspector.gc.Mn': 'İşaret, birleşen (spacing dışı)',
	'ui.unicode_inspector.gc.Mc': 'İşaret, birleşen (spacing)',
	'ui.unicode_inspector.gc.Me': 'İşaret, saran',
	'ui.unicode_inspector.gc.Nd': 'Sayı, ondalık rakam',
	'ui.unicode_inspector.gc.Nl': 'Sayı, harf',
	'ui.unicode_inspector.gc.No': 'Sayı, diğer',
	'ui.unicode_inspector.gc.Pc': 'Noktalama, bağlayıcı',
	'ui.unicode_inspector.gc.Pd': 'Noktalama, tire',
	'ui.unicode_inspector.gc.Ps': 'Noktalama, açılış',
	'ui.unicode_inspector.gc.Pe': 'Noktalama, kapanış',
	'ui.unicode_inspector.gc.Pi': 'Noktalama, açılış tırnak',
	'ui.unicode_inspector.gc.Pf': 'Noktalama, kapanış tırnak',
	'ui.unicode_inspector.gc.Po': 'Noktalama, diğer',
	'ui.unicode_inspector.gc.Sm': 'Sembol, matematik',
	'ui.unicode_inspector.gc.Sc': 'Sembol, para',
	'ui.unicode_inspector.gc.Sk': 'Sembol, değiştirici',
	'ui.unicode_inspector.gc.So': 'Sembol, diğer',
	'ui.unicode_inspector.gc.Zs': 'Ayraç, boşluk',
	'ui.unicode_inspector.gc.Zl': 'Ayraç, satır',
	'ui.unicode_inspector.gc.Zp': 'Ayraç, paragraf',
	'ui.unicode_inspector.gc.Cc': 'Diğer, denetim',
	'ui.unicode_inspector.gc.Cf': 'Diğer, biçim',
	'ui.unicode_inspector.gc.Cs': 'Diğer, vekil',
	'ui.unicode_inspector.gc.Co': 'Diğer, özel kullanım',
	'ui.unicode_inspector.gc.Cn': 'Diğer, atanmamış',
	// ── Hex ↔ Metin — araç ───────────────────────────────────────────────────
	'tool.encode-hex-encode-decode.display_name': 'Hex ↔ ASCII / UTF-8',
	'tool.encode-hex-encode-decode.tagline':
		'UTF-8 metnini onaltılık baytlara veya hex dökümlerini okunur metne dönüştürün',
	'tool.encode-hex-encode-decode.description':
		'Her UTF-8 dizisini büyük/küçük harf, ayraçlar ve satır kaydırmalarıyla onaltılık bayt çiftleri olarak kodlayın. Boşluk, virgül ve 0x öneklerine izin veren hex’i katı UTF-8 doğrulamasıyla metne çözün. Büyük girdiler Web Worker’da işlenir; her şey tarayıcıda kalır.',
	'tool.encode-hex-encode-decode.primary_keyword': 'hex metin utf-8',
	'tool.encode-hex-encode-decode.meta_title': 'Hex ↔ Metin — UTF-8 ve ASCII | fmtly.dev',
	'tool.encode-hex-encode-decode.meta_description':
		'Hex’i UTF-8 metne veya metni hex’e tarayıcıda dönüştürün. Ayraçlar, büyük/küçük harf, satır kırımı, 0x önekleri ve Worker. Gizli ve hızlı.',
	'tool.encode-hex-encode-decode.operation': 'Hex kodla / çöz',
	'tool.encode-hex-encode-decode.faq.0.question': 'Verilerim sunucuya gönderilir mi?',
	'tool.encode-hex-encode-decode.faq.0.answer':
		'Hayır. Tüm dönüşüm tarayıcınızda çalışır. Metin ve hex cihazınızdan çıkmaz.',
	'tool.encode-hex-encode-decode.faq.1.question': 'Araç hangi kodlamayı kullanır?',
	'tool.encode-hex-encode-decode.faq.1.answer':
		'Metin her iki yönde UTF-8 olarak yorumlanır. ASCII, UTF-8’in alt kümesidir; düz İngilizce aynı şekilde çalışır.',
	'tool.encode-hex-encode-decode.faq.2.question':
		'Çözme «geçersiz UTF-8» ile neden başarısız olur?',
	'tool.encode-hex-encode-decode.faq.2.answer':
		'Çözülen baytlar geçerli UTF-8 oluşturmalıdır. Rastgele ikili hex veya eski kodlamalar metin olarak görünmez — doğru aracı kullanın.',
	'tool.encode-hex-encode-decode.faq.3.question': 'Büyük girdi için neden Web Worker?',
	'tool.encode-hex-encode-decode.faq.3.answer':
		'500 KB üzeri girdiler ana iş parçacığı dışında işlenir; yazma, kaydırma ve kontroller akıcı kalır.',
	'tool.encode-hex-encode-decode.use_case.0':
		'Günlüklerden veya yakalardan pano hex’ini okunur UTF-8 parçalarına çevirme',
	'tool.encode-hex-encode-decode.use_case.1':
		'Belge, test veya gömülü sabitler için biçimli hex dökümleri üretme',
	'tool.encode-hex-encode-decode.use_case.2':
		'Emoji ve Latin dışı karakterlerin UTF-8 bayt dizilerine nasıl genişlediğini doğrulama',
	'tool.encode-hex-encode-decode.use_case.3':
		'API, jeton veya kodlanmış yük hata ayıklarken hex ile metin arasında hızlı geçiş',
	// ── Hex ↔ Metin — arayüz ─────────────────────────────────────────────────
	'ui.hex.tab_label': 'Hex',
	'ui.hex.action_label': 'İşlem',
	'ui.hex.action.encode': 'Metin → hex',
	'ui.hex.action.decode': 'Hex → metin',
	'ui.hex.hex_case_label': 'Hex büyük/küçük',
	'ui.hex.hex_case.upper': 'Büyük harf',
	'ui.hex.hex_case.lower': 'Küçük harf',
	'ui.hex.delimiter_label': 'Bayt ayırıcı',
	'ui.hex.delimiter.space': 'Boşluk',
	'ui.hex.delimiter.none': 'Yok',
	'ui.hex.delimiter.comma': 'Virgül',
	'ui.hex.bytes_per_line_label': 'Satır başına bayt',
	'ui.hex.bytes_per_line.off': 'Satır kırma yok',
	'ui.hex.bytes_per_line.n': '{n} bayt',
	'ui.hex.decode_options_label': 'Çözüm seçenekleri',
	'ui.hex.option.ignore_whitespace': 'Boşluk ve satır sonlarını yok say',
	'ui.hex.option.ignore_commas': 'Virgül ayırıcılarını yok say',
	'ui.hex.option.allow_0x': 'Her bayttan önce 0x önekine izin ver',
	'ui.hex.worker_active': 'Büyük girdi algılandı (>{size}). İşlem Web Worker üzerinde çalışır.',
	'ui.hex.worker_failed': 'Worker işlemi başarısız. Ana thread işlemine dönülüyor.',
	'ui.hex.worker_badge': 'Worker',
	'ui.hex.button.swap_direction': 'Yönü değiştir',
	'ui.hex.button.apply_output': 'Çıktıyı girdiye uygula',
	'ui.hex.input_label': 'Girdi',
	'ui.hex.output_label': 'Çıktı',
	'ui.hex.input_placeholder': 'Kodlanacak düz metin veya UTF-8’e çözülecek hex rakamları…',
	'ui.hex.output_placeholder': 'Hex çıktısı veya çözülmüş UTF-8 metni burada görünür…',
	'ui.hex.characters': 'karakter',
	'ui.hex.toast.applied': 'Çıktı girdiye uygulandı',
	'ui.hex.warning.whitespace_skipped': 'Hex rakamları ayrıştırılırken boşluklar atlandı.',
	'ui.hex.warning.commas_skipped': 'Virgül ayırıcıları ayrıştırılırken atlandı.',
	'ui.hex.error.invalid_hex_digit': 'Hex girdisinde geçersiz karakter (yaklaşık sütun {position}).',
	'ui.hex.error.odd_hex_length': 'Tek sayıda hex rakamı ({count}). Baytlar için çiftler gerekir.',
	'ui.hex.error.invalid_utf8': 'Çözülen baytlar geçerli UTF-8 değil ({bytes} bayt).',
	// ── ROT13 / Sezar — araç ─────────────────────────────────────────────────
	'tool.encode-rot13-caesar-cipher.display_name': 'ROT13 / Sezar şifresi',
	'tool.encode-rot13-caesar-cipher.tagline':
		'Spoiler için ROT13 veya A–Z ve a–z üzerinde şifreleme ve çözme ile Sezar kaydırması',
	'tool.encode-rot13-caesar-cipher.description':
		'Klasik ROT13’ü (13 konum, kendi tersi) veya 1–25 arası kaydırmalı Sezar şifresini uygulayın. Sezar için şifrele veya çöz seçin; hazır değerler veya kaydırıcı kullanın; rakamlar, noktalama ve temel Latin dışı Unicode değişmez. Büyük girdiler Web Worker’da işlenir; her şey tarayıcıda kalır.',
	'tool.encode-rot13-caesar-cipher.primary_keyword': 'rot13 sezar sifre online',
	'tool.encode-rot13-caesar-cipher.meta_title': 'ROT13 ve Sezar — fmtly.dev',
	'tool.encode-rot13-caesar-cipher.meta_description':
		'Tarayıcıda ROT13 ve Sezar: şifrele, çöz, 1–25 hazır ayarlar, büyük metin için Worker. Yalnızca harfler; gizli ve anında.',
	'tool.encode-rot13-caesar-cipher.operation': 'ROT13 / Sezar',
	'tool.encode-rot13-caesar-cipher.faq.0.question': 'Metnim bir yere yüklenir mi?',
	'tool.encode-rot13-caesar-cipher.faq.0.answer':
		'Hayır. Dönüşüm tamamen tarayıcınızda çalışır. Metniniz cihazınızdan çıkmaz.',
	'tool.encode-rot13-caesar-cipher.faq.1.question': 'Hangi karakterler değişir?',
	'tool.encode-rot13-caesar-cipher.faq.1.answer':
		'Yalnızca temel Latin harfleri A–Z ve a–z döndürülür. Boşluk, rakam, noktalama, aksanlı harfler, emoji ve diğer Unicode aynı kalır.',
	'tool.encode-rot13-caesar-cipher.faq.2.question': 'Bu gerçek şifreleme mi?',
	'tool.encode-rot13-caesar-cipher.faq.2.answer':
		'Hayır. ROT13 ve Sezar; oyun, spoiler veya öğretim için gizlemedir — kolayca kırılır ve sırlar için uygun değildir.',
	'tool.encode-rot13-caesar-cipher.faq.3.question': 'Büyük girdi neden Web Worker kullanır?',
	'tool.encode-rot13-caesar-cipher.faq.3.answer':
		'500 KB üzeri girdiler ana iş parçacığı dışında işlenir; yazma akıcı kalır.',
	'tool.encode-rot13-caesar-cipher.use_case.0':
		'Forum ve sohbetlerde tersine çevrilebilir ROT13 ile bulmaca veya hikâye spoiler’larını gizleme',
	'tool.encode-rot13-caesar-cipher.use_case.1':
		'Klasik yer değiştirme şifrelerini ve alfabede modüler aritmetiği öğretme',
	'tool.encode-rot13-caesar-cipher.use_case.2':
		'CTF veya kağıt bilmecelerinde birden fazla Sezar kaydırmasını hızlıca deneme',
	'tool.encode-rot13-caesar-cipher.use_case.3':
		'API veya günlüklerden gelen ROT13 içeriğini tekrar okunur metne çevirme',
	// ── ROT13 / Sezar — arayüz ───────────────────────────────────────────────
	'ui.rot13.tab_label': 'ROT13',
	'ui.rot13.mode_label': 'Şifre',
	'ui.rot13.mode.rot13': 'ROT13',
	'ui.rot13.mode.caesar': 'Sezar',
	'ui.rot13.rot13_hint':
		'ROT13, A–Z ve a–z harflerini 13 konum kaydırır. İki kez uygulamak özgün metni verir.',
	'ui.rot13.direction_label': 'Yön',
	'ui.rot13.direction.encrypt': 'Şifrele (ileri)',
	'ui.rot13.direction.decrypt': 'Çöz (geri)',
	'ui.rot13.shift_label': 'Kaydırma (1–25)',
	'ui.rot13.presets_label': 'Hazır',
	'ui.rot13.caesar_scope_hint':
		'Yalnızca temel Latin A–Z ve a–z kaydırılır; rakamlar, noktalama, boşluklar ve diğer Unicode değişmez.',
	'ui.rot13.worker_active': 'Büyük girdi algılandı (>{size}). İşlem Web Worker üzerinde çalışır.',
	'ui.rot13.worker_failed': 'Worker işlemi başarısız. Ana thread işlemine dönülüyor.',
	'ui.rot13.worker_badge': 'Worker',
	'ui.rot13.button.apply_output': 'Çıktıyı girdiye uygula',
	'ui.rot13.input_label': 'Girdi',
	'ui.rot13.output_label': 'Çıktı',
	'ui.rot13.input_placeholder': 'Dönüştürmek için metin yazın veya yapıştırın…',
	'ui.rot13.output_placeholder': 'Dönüştürülmüş metin burada görünür…',
	'ui.rot13.characters': 'karakter',
	'ui.rot13.toast.applied': 'Çıktı girdiye uygulandı',
	// ── Punycode / IDN tool ───────────────────────────────────────────────────
	'tool.encode-punycode-encode-decode.display_name': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.tagline':
		'Uluslararasılaştırılmış alan adlarını ve e-postaları Unicode ile ASCII (xn--) arasında dönüştürün',
	'tool.encode-punycode-encode-decode.description':
		'ASCII dışı etiketli alan adlarını ve e-posta adreslerini Punycode’a (xn-- önekli ASCII) ve tersine çevirin. Birden fazla etiketi ve @ öncesi yerel kısmı korur. İşlem tarayıcıda; büyük girdiler Web Worker’da çalışır.',
	'tool.encode-punycode-encode-decode.primary_keyword': 'punycode idn çevirici online',
	'tool.encode-punycode-encode-decode.meta_title': 'Punycode ve IDN — Kodla / Çöz — fmtly.dev',
	'tool.encode-punycode-encode-decode.meta_description':
		'Unicode alan ve e-postaları Punycode (xn--) yapın ve geri çözün. Özel, anında, yalnızca tarayıcıda; büyük metinler için Worker.',
	'tool.encode-punycode-encode-decode.operation': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.faq.0.question': 'Alan adım veya e-postam sunucuya gider mi?',
	'tool.encode-punycode-encode-decode.faq.0.answer':
		'Hayır. Dönüşüm Punycode kütüphanesiyle yalnızca tarayıcınızda çalışır. Metinleriniz cihazınızdan çıkmaz.',
	'tool.encode-punycode-encode-decode.faq.1.question': 'Burada «kodla» ne yapar?',
	'tool.encode-punycode-encode-decode.faq.1.answer':
		'Kodlama IDNA toASCII uygular: ASCII olmayan her etiket xn-- önekli ASCII olur. Yalnızca ASCII etiketler aynı kalır.',
	'tool.encode-punycode-encode-decode.faq.2.question': 'Gerçek DNS kayıt kurallarını doğrular mı?',
	'tool.encode-punycode-encode-decode.faq.2.answer':
		'RFC 3492 / 5891 tarzı Punycode dönüşümü uygular. Tam UTS #46 kayıt doğrulaması bu aracın kapsamı dışındadır.',
	'tool.encode-punycode-encode-decode.faq.3.question': 'Büyük girdi neden Web Worker kullanır?',
	'tool.encode-punycode-encode-decode.faq.3.answer':
		'500 KB üzeri girdiler arayüzü akıcı tutmak için ana iş parçacığı dışında işlenir.',
	'tool.encode-punycode-encode-decode.use_case.0':
		'Bir Unicode ana makine veya e-posta alanının DNS’te (xn-- biçimi) nasıl görüneceğini önizleme',
	'tool.encode-punycode-encode-decode.use_case.1':
		'Günlüklerden, sertifikalardan veya geliştirici araçlarından xn-- ana makineleri Unicode’a çözme',
	'tool.encode-punycode-encode-decode.use_case.2':
		'Belge veya destek kayıtlarında IDN örneklerini toplu dönüştürme',
	'tool.encode-punycode-encode-decode.use_case.3':
		'ASCII ve uluslararası etiketlerin karıştığı URL ve e-postaları hata ayıklama',
	// ── Punycode / IDN UI ─────────────────────────────────────────────────────
	'ui.punycode.tab_label': 'Punycode',
	'ui.punycode.action_label': 'İşlem',
	'ui.punycode.action.encode': 'Unicode → ASCII (IDN)',
	'ui.punycode.action.decode': 'ASCII → Unicode',
	'ui.punycode.hint':
		'Uluslararasılaştırılmış alan adları ve e-postalar: Unicode etiketleri xn-- ile ASCII olur; çözme işlemi tersine çevirir.',
	'ui.punycode.loading_library': 'Punycode yükleniyor…',
	'ui.punycode.library_load_failed': 'Punycode kitaplığı yüklenemedi.',
	'ui.punycode.worker_active': 'Büyük girdi (>{size}). İşlem Web Worker’da.',
	'ui.punycode.worker_failed': 'Worker başarısız. Ana iş parçacığına dönülüyor.',
	'ui.punycode.worker_badge': 'Worker',
	'ui.punycode.button.swap_direction': 'Yönü değiştir',
	'ui.punycode.button.apply_output': 'Çıktıyı girdiye uygula',
	'ui.punycode.input_label': 'Girdi',
	'ui.punycode.output_label': 'Çıktı',
	'ui.punycode.input_placeholder':
		'Unicode etiketli alan veya e-posta, ya da xn-- segmentli ASCII…',
	'ui.punycode.output_placeholder': 'ASCII IDN veya çözülmüş Unicode burada görünür…',
	'ui.punycode.characters': 'karakter',
	'ui.punycode.toast.applied': 'Çıktı girdiye uygulandı',
	'ui.punycode.error.invalid_punycode':
		'Geçersiz Punycode veya alan girdisi. Etiketleri ve xn-- öneklerini kontrol edin.',
	'ui.punycode.error.processing': 'Dönüşüm başarısız: {detail}',
	// ── URL Kodla / Çöz — arayüz metinleri ───────────────────────────────────
	'ui.encode_url.tab_label': 'URL',
	'ui.encode_url.action_label': 'İşlem',
	'ui.encode_url.action.encode': 'Kodla',
	'ui.encode_url.action.decode': 'Çöz',
	'ui.encode_url.mode_label': 'Mod',
	'ui.encode_url.mode.component': 'URL bileşeni',
	'ui.encode_url.mode.full_url': 'Tam URL',
	'ui.encode_url.input_label': 'Girdi',
	'ui.encode_url.output_label': 'Çıktı',
	'ui.encode_url.input_placeholder': 'Metin, sorgu parametresi veya tam URL yapıştırın...',
	'ui.encode_url.output_placeholder': 'Kodlanmış ya da çözülmüş çıktı burada görünür...',
	'ui.encode_url.option.encode_spaces_as_plus': 'Boşlukları + olarak kodla',
	'ui.encode_url.option.decode_plus_as_space': '+ işaretini boşluk olarak çöz',
	'ui.encode_url.worker_active':
		'Büyük girdi algılandı (>{size}). İşlem Web Worker üzerinde çalışır.',
	'ui.encode_url.worker_failed': 'Worker işlemi başarısız oldu. Ana thread işlemine dönülüyor.',
	'ui.encode_url.worker_badge': 'Worker',
	'ui.encode_url.warning.no_changes': 'Seçilen mod ve işlem için değişiklik tespit edilmedi.',
	'ui.encode_url.error.invalid_url_encoding': 'Geçersiz URL girdisi: {detail}',
	'ui.encode_url.button.swap_direction': 'Yönü değiştir',
	'ui.encode_url.button.apply_output': 'Çıktıyı girdiye uygula',
	'ui.encode_url.toast.applied': 'Çıktı girdiye uygulandı',
	'ui.encode_url.characters': 'karakter',
	'category.qr.display_name': 'QR',
	'category.qr.description':
		'Tarayıcınızda SVG ve PNG çıktısı, logo katmanı, renk kontrolleri ve tarama dostu hata düzeltme seviyeleriyle QR kodları üretin.',
	'category.qr.primary_keyword': 'qr kod araçları',
	'tool.qr-code-generator.display_name': 'QR Kod Oluşturucu',
	'tool.qr-code-generator.tagline':
		'Canlı önizleme, SVG/PNG dışa aktarma, renk, boşluk ve logo katmanı ile markalı QR kodlar üretin',
	'tool.qr-code-generator.description':
		'Tarayıcınızda anında taranabilir QR kodlar oluşturun. Boyutu, sessiz alanı, renkleri, şeffaf arka planı, hata düzeltme seviyesini ve ortalanmış logo katmanını özelleştirin; ardından veriyi sunucuya göndermeden üretime hazır SVG veya PNG dışa aktarın.',
	'tool.qr-code-generator.primary_keyword': 'qr kod oluşturucu',
	'tool.qr-code-generator.meta_title':
		'QR Kod Oluşturucu — SVG, PNG, Renk ve Logo Katmanı | fmtly.dev',
	'tool.qr-code-generator.meta_description':
		'Canlı önizleme, SVG ve PNG dışa aktarma, özel renkler, sessiz alan ayarı, şeffaf arka plan ve logo katmanı ile online QR kod üretin. Tarayıcı içinde ve gizli.',
	'tool.qr-code-generator.operation': 'QR Kod Oluştur',
	'tool.qr-code-generator.faq.0.question': 'QR içeriğim bir sunucuya yükleniyor mu?',
	'tool.qr-code-generator.faq.0.answer':
		'Hayır. QR üretimi tamamen tarayıcınızda gerçekleşir. Metin, URL, Wi-Fi payload veya diğer içerikler cihazınızda kalır.',
	'tool.qr-code-generator.faq.1.question': 'Hangi dışa aktarma formatları destekleniyor?',
	'tool.qr-code-generator.faq.1.answer':
		'SVG ve PNG dışa aktarma desteklenir. SVG baskı, tasarım sistemi ve kalite kaybı olmadan ölçekleme için idealdir; PNG ise hızlı paylaşım ve sosyal görseller için pratiktir.',
	'tool.qr-code-generator.faq.2.question': 'Hata düzeltme neyi etkiler?',
	'tool.qr-code-generator.faq.2.answer':
		'Daha yüksek hata düzeltme, QR kodu hasar, sıkıştırma ve merkez logoya karşı daha dayanıklı hale getirir; ancak tek bir koda sığabilecek içerik miktarını azaltır.',
	'tool.qr-code-generator.faq.3.question': 'Neden çok uzun metinlerde üretim başarısız olabilir?',
	'tool.qr-code-generator.faq.3.answer':
		'Bir QR kodun veri kapasitesi sınırlıdır. İçerik seçilen hata düzeltme seviyesi için çok büyükse payloadı kısaltın veya daha kısa bir yönlendirme URL’si kullanın.',
	'tool.qr-code-generator.use_case.0':
		'Açılış sayfaları, uygulama kurulumları veya kampanya URL’leri için pazarlama QR kodları üretmek',
	'tool.qr-code-generator.use_case.1':
		'Afiş, ambalaj ve baskı materyalleri için ortasında logo bulunan markalı QR kodlar oluşturmak',
	'tool.qr-code-generator.use_case.2':
		'Figma, tasarım sistemleri veya geliştirici dokümantasyonu için net SVG QR varlıkları dışa aktarmak',
	'tool.qr-code-generator.use_case.3':
		'Yayınlamadan önce boşluk, renk ve hata düzeltmenin tarama güvenilirliğini nasıl etkilediğini test etmek',
	'tool.qr-code-reader.display_name': 'QR Kod Okuyucu',
	'tool.qr-code-reader.tagline':
		'Tarayıcıda görsellerden QR kodları tarayın — hızlı çözümleme, pano yapıştırma ve isteğe bağlı Web Worker',
	'tool.qr-code-reader.description':
		'PNG, JPG veya WebP yükleyin ya da ekran görüntüsü yapıştırarak QR içeriğini anında çıkarın. Çözümleme yereldir; büyük görseller için Web Worker kullanılabilir — yükleme veya hesap yok.',
	'tool.qr-code-reader.primary_keyword': 'qr kod okuyucu online',
	'tool.qr-code-reader.meta_title':
		'QR Kod Okuyucu — Görsel tara ve ekran görüntüsü yapıştır | fmtly',
	'tool.qr-code-reader.meta_description':
		'Tarayıcıda görsellerden QR kodları okuyun. Sürükle-bırak, kamera, pano yapıştırma ve büyük görseller için Web Worker çözümlemesi. Gizli ve sunucusuz.',
	'tool.qr-code-reader.operation': 'QR Kod Oku',
	'tool.qr-code-reader.faq.0.question': 'Görsellerim bir sunucuya yükleniyor mu?',
	'tool.qr-code-reader.faq.0.answer':
		'Hayır. Görseller yalnızca tarayıcınızda JavaScript ve gerektiğinde Web Worker ile işlenir.',
	'tool.qr-code-reader.faq.1.question': 'Hangi görsel formatları daha iyi çalışır?',
	'tool.qr-code-reader.faq.1.answer':
		'PNG ve JPG genelde en güveniliridir. WebP ve GIF de çalışır. Çok küçük veya aşırı sıkıştırılmış görseller çözümlemeyi zorlaştırabilir.',
	'tool.qr-code-reader.faq.2.question': 'Web Worker ne işe yarar?',
	'tool.qr-code-reader.faq.2.answer':
		'Büyük fotoğraflar büyük piksel tamponları oluşturur. Çözümlemeyi ayırmak, tarama sürerken kaydırmayı ve yazmayı akıcı tutar.',
	'tool.qr-code-reader.faq.3.question': 'Ekran görüntüsündeki QR kodu okuyabilir miyim?',
	'tool.qr-code-reader.faq.3.answer':
		'Evet. Görseli panoya kopyalayıp bu sayfaya yapıştırın veya ekran görüntüsünü kaydedip yükleyin.',
	'tool.qr-code-reader.use_case.0':
		'Wi‑Fi QR etiketleri, etkinlik bağlantıları veya uygulama deep linklerini fotoğraftan açmak',
	'tool.qr-code-reader.use_case.1':
		'Baskı öncesi pazarlama görsellerindeki QR kodlarını çıkarılan URL ile doğrulamak',
	'tool.qr-code-reader.use_case.2': 'Uygulama yüklemeden ekran görüntüsünden QR kodu çözmek',
	'tool.qr-code-reader.use_case.3':
		'Konferans yaka kartı fotoğraflarından düz metin veya vCard kurtarmak',
	'tool.barcode-generator.display_name': 'Barkod Oluşturucu',
	'tool.barcode-generator.tagline':
		'Code 128, EAN-13, UPC-A, ITF-14 ve daha fazlasını net SVG veya PNG olarak üretin — baskı ve okuyucular için',
	'tool.barcode-generator.description':
		'Tarayıcınızda canlı önizlemeyle profesyonel 1D barkodlar oluşturun. Sembolojiyi seçin; çubuk genişliği, yükseklik, sessiz alan ve renkleri ayarlayın; SVG veya PNG dışa aktarın. Çok büyük veriler arayüzü akıcı tutmak için Web Worker’da işlenebilir — hiçbir şey cihazınızdan çıkmaz.',
	'tool.barcode-generator.primary_keyword': 'barkod oluşturucu online',
	'tool.barcode-generator.meta_title': 'Barkod Oluşturucu — Code 128, EAN-13, UPC | fmtly',
	'tool.barcode-generator.meta_description':
		'Tarayıcıda barkod üretimi: Code 128, EAN-13, UPC-A, ITF-14, Codabar, MSI, pharmacode ve daha fazlası. Renkler, sessiz alan, SVG ve PNG dışa aktarma. Dev yükler için özel Web Worker modu.',
	'tool.barcode-generator.operation': 'Barkod Oluştur',
	'tool.barcode-generator.faq.0.question': 'Verilerim bir sunucuya gönderiliyor mu?',
	'tool.barcode-generator.faq.0.answer':
		'Hayır. İşleme tarayıcınızda JavaScript ile yapılır. Büyük girdiler cihazınızda Web Worker ile işlenebilir.',
	'tool.barcode-generator.faq.1.question': 'Perakende için hangi semboloji?',
	'tool.barcode-generator.faq.1.answer':
		'POS için EAN-13 veya UPC-A; koli lojistiği için ITF-14. Esnek alfanümerik veri için Code 128 uygundur.',
	'tool.barcode-generator.faq.2.question': 'SVG dışa aktarma neden önemli?',
	'tool.barcode-generator.faq.2.answer':
		'SVG her baskı boyutunda keskin kalır; ambalaj ve tasarım için idealdir. PNG hızlı raster önizleme için pratiktir.',
	'tool.barcode-generator.faq.3.question': 'Web Worker ne zaman devreye girer?',
	'tool.barcode-generator.faq.3.answer':
		'Yaklaşık 500 KB UTF-8 metni aşan yüklerde üretim, sayfayı akıcı tutmak için Web Worker’da çalışır.',
	'tool.barcode-generator.use_case.0':
		'Depo etiketleri ve sevkiyat kolileri için ITF-14 ve Code 128 sembolleri üretmek',
	'tool.barcode-generator.use_case.1':
		'Baskı öncesi ambalaj maketleri için EAN-13 veya UPC-A görselleri oluşturmak',
	'tool.barcode-generator.use_case.2':
		'Marka kılavuzları veya dokümantasyon için vektör SVG barkodları dışa aktarmak',
	'tool.barcode-generator.use_case.3':
		'Eski sistemler ve iç araçlar için Codabar veya MSI sembolleri oluşturmak',
	'category.crypto.display_name': 'Kripto',
	'category.crypto.description':
		'Özetleme, HMAC, dosya parmak izi, parola gücü, UUID/ULID, RSA/EC anahtarlar, X.509 inceleme, TOTP ve rastgele dizeler — hepsi tarayıcıda.',
	'category.crypto.primary_keyword': 'tarayıcı kripto araçları',
	'tool.random-string-generator.display_name': 'Rastgele Dize Üretici',
	'tool.random-string-generator.tagline':
		'Ön ayarlar, özel alfabeler, ayırıcılar ve Web Worker ile güvenli rastgele dizeler',
	'tool.random-string-generator.description':
		'Web Crypto getRandomValues ile parolalar, belirteçler, kimlikler ve test verileri için rastgele dizeler oluşturun—yükleme yok, sunucu yok. Alfasayısal, on altılık, sayısal, Base64 URL-güvenli veya özel alfabe seçin; belirsiz karakterleri hariç tutun; uzunluk, adet ve ayırıcıları kontrol edin; büyük işler Web Worker’da çalışır.',
	'tool.random-string-generator.primary_keyword': 'rastgele dize üretici',
	'tool.random-string-generator.meta_title': 'Rastgele Dize — Tarayıcıda Güvenli Kripto | fmtly',
	'tool.random-string-generator.meta_description':
		'Tarayıcıda güçlü rastgele dizeler üretin. Ön ayarlar, özel alfabe, toplu çıktı, belirsizleri eleme ve Web Worker. Gizli ve anında.',
	'tool.random-string-generator.operation': 'Rastgele dize üret',
	'tool.random-string-generator.faq.0.question': 'Parolalar ve API anahtarları için uygun mu?',
	'tool.random-string-generator.faq.0.answer':
		'Dizeler, seçtiğiniz alfabeden sapmasız örnekleme ile crypto.getRandomValues kullanır. Parolalar için uzunluk, geniş alfabe ve iyi giz yönetimi tercih edin.',
	'tool.random-string-generator.faq.1.question': 'Neden bazen Web Worker kullanılıyor?',
	'tool.random-string-generator.faq.1.answer':
		'Çok büyük çıktılar veya dev özel alfabeler arayüzü kilitleyebilir. Eşik üzerinde iş yükü devredilir, sayfa akıcı kalır.',
	'tool.random-string-generator.faq.2.question': '«Belirsiz karakterleri hariç tut» ne yapar?',
	'tool.random-string-generator.faq.2.answer':
		'Ön ayarlardan 0/O, 1/l gibi karıştırılması kolay karakterleri çıkarır; elle kopyalamayı kolaylaştırır.',
	'tool.random-string-generator.faq.3.question': 'Veriler sunucuya gönderilir mi?',
	'tool.random-string-generator.faq.3.answer':
		'Hayır. Üretim tamamen tarayıcınızda çalışır. fmtly tarafından yüklenmez veya kaydedilmez.',
	'tool.random-string-generator.use_case.0':
		'Sıfırlama belirteçleri, davet kodları ve tek kullanımlık sırları yerelde üretmek',
	'tool.random-string-generator.use_case.1':
		'Uzunluk, karakter kümesi ve çok satırlı toplu çıktısı kontrollü test verileri üretmek',
	'tool.random-string-generator.use_case.2':
		'Tanımlayıcılar ve opak kimlikler için Base64 URL-güvenli alfabe dizeleri',
	'tool.random-string-generator.use_case.3':
		'Simülasyonlar, oyunlar ve kısıtlı sistemler için özel alfabeler',
	'tool.hash-generator.display_name': 'Özet (Hash) Üretici',
	'tool.hash-generator.tagline':
		'Her UTF-8 metin için MD5 ve SHA ailesi özetleri — gizli ve anında',
	'tool.hash-generator.description':
		'Yapıştırılan metin için MD5, SHA-1, SHA-256, SHA-384 ve SHA-512 özetlerini Web Crypto (ve denetlenmiş MD5) ile hesaplayın. Büyük girdiler arayüzü akıcı tutmak için Web Worker’a aktarılır.',
	'tool.hash-generator.primary_keyword': 'online hash md5 sha256 üretici',
	'tool.hash-generator.meta_title': 'Hash Üretici — MD5 ve SHA tarayıcıda | fmtly',
	'tool.hash-generator.meta_description':
		'MD5, SHA-1, SHA-256, SHA-384, SHA-512 özetlerini yerelde üretin. Yükleme yok. Büyük metinler için Web Worker.',
	'tool.hash-generator.operation': 'Metni özetle',
	'tool.hash-generator.faq.0.question': 'MD5 hâlâ kullanılır mı?',
	'tool.hash-generator.faq.0.answer':
		'MD5 eskidir ve güvenlik açısından bütünlük için uygun değildir. Sağlama toplamları ve uyumluluk için yaygındır. Yeni tasarımlarda SHA-256 tercih edin.',
	'tool.hash-generator.faq.1.question': 'Büyük metin neden worker kullanıyor?',
	'tool.hash-generator.faq.1.answer':
		'Ana iş parçacığında megabayt özetlemek sayfayı dondurabilir. Eşik üzerinde iş Web Worker’a taşınır.',
	'tool.hash-generator.faq.2.question': 'Hangi kodlama kullanılıyor?',
	'tool.hash-generator.faq.2.answer':
		'Girdi UTF-8 baytları olarak özetlenir; geliştirici beklentisiyle uyumludur.',
	'tool.hash-generator.faq.3.question': 'Veri sunucuya gider mi?',
	'tool.hash-generator.faq.3.answer': 'Hayır. Her şey yalnızca tarayıcınızda çalışır.',
	'tool.hash-generator.use_case.0':
		'İndirmeleri ve yapılandırmaları yayımlanan sağlama toplamlarıyla doğrulama',
	'tool.hash-generator.use_case.1':
		'Dosya yüklemeden parmak izlerini karşılaştırma (ikili dosyalar için Dosya Özeti aracını kullanın)',
	'tool.hash-generator.use_case.2': 'API yüklerini ve kanonik dize özetlemesini hata ayıklama',
	'tool.hash-generator.use_case.3': 'Günlükler ve önbellek anahtarları için hızlı özetler',
	'tool.hmac-generator.display_name': 'HMAC Üretici',
	'tool.hmac-generator.tagline': 'Mesajlar ve test vektörleri için anahtarlı HMAC-SHA imzaları',
	'tool.hmac-generator.description':
		'SHA-1, SHA-256, SHA-384 veya SHA-512 ile HMAC hesaplayın. Giz anahtarınız ve mesaj bu sekmede kalır; uzun mesajlar Web Worker kullanabilir.',
	'tool.hmac-generator.primary_keyword': 'online hmac üretici',
	'tool.hmac-generator.meta_title': 'HMAC Üretici — SHA HMAC tarayıcıda | fmtly',
	'tool.hmac-generator.meta_description':
		'Ayarlanabilir özet ve giz anahtarı ile HMAC imzaları. Yalnızca tarayıcı, yükleme yok, büyük mesajlarda worker.',
	'tool.hmac-generator.operation': 'HMAC hesapla',
	'tool.hmac-generator.faq.0.question': 'Anahtarı nasıl biçimlendirmeliyim?',
	'tool.hmac-generator.faq.0.answer':
		'Anahtar UTF-8 metin olarak yorumlanır; yaygın API örnekleriyle uyumludur. Ham ikili anahtarlar için önce hex çözümleyin.',
	'tool.hmac-generator.faq.1.question': 'Bu JWT imasıyla aynı mı?',
	'tool.hmac-generator.faq.1.answer':
		'JWT belirli bir kodlamayı (Base64URL segmentleri) kullanır. Bu araç ham mesaj baytları üzerinde hata ayıklama ve test vektörleri içindir.',
	'tool.hmac-generator.faq.2.question': 'SHA-1’den neden kaçınmalı?',
	'tool.hmac-generator.faq.2.answer':
		'SHA-1 eskidir. HMAC-SHA1 eski sistemlerde görülür; yeni iş için SHA-256 tercih edin.',
	'tool.hmac-generator.faq.3.question': 'Gizler saklanır mı?',
	'tool.hmac-generator.faq.3.answer':
		'Gizler yalnızca sayfa belleğinde kalır. İşiniz bitince alanı temizleyin; fmtly verinizi yüklemez.',
	'tool.hmac-generator.use_case.0': 'Webhook imza test vektörlerini yeniden üretme',
	'tool.hmac-generator.use_case.1': 'AWS tarzı imza yapı taşlarını doğrulama',
	'tool.hmac-generator.use_case.2': 'OpenSSL veya dil kütüphaneleriyle çıktıları karşılaştırma',
	'tool.hmac-generator.use_case.3': 'MAC ile özet farkını öğretmek',
	'tool.file-hash-calculator.display_name': 'Dosya Özeti Hesaplayıcı',
	'tool.file-hash-calculator.tagline': 'Yerel dosyanın MD5, SHA-256 ve CRC32’si — asla yüklenmez',
	'tool.file-hash-calculator.description':
		'Dosyayı sürükleyin; MD5, SHA-256 ve CRC32’yi tarayıcıda hesaplayın. Büyük dosyalar arayüzü akıcı tutmak için Web Worker’da özetlenir.',
	'tool.file-hash-calculator.primary_keyword': 'dosya hash sha256 hesaplayıcı',
	'tool.file-hash-calculator.meta_title': 'Dosya Özeti — MD5, SHA-256, CRC32 | fmtly',
	'tool.file-hash-calculator.meta_description':
		'Yerel dosya özetleme: MD5, SHA-256, CRC32. Bulut yüklemesi yok. Büyük dosyalarda worker.',
	'tool.file-hash-calculator.operation': 'Dosyayı yerelde özetle',
	'tool.file-hash-calculator.faq.0.question': 'Dosyalar yüklenir mi?',
	'tool.file-hash-calculator.faq.0.answer':
		'Hayır. Dosya File API ile okunur ve yalnızca tarayıcı belleğinde işlenir.',
	'tool.file-hash-calculator.faq.1.question': 'Neden üç algoritma?',
	'tool.file-hash-calculator.faq.1.answer':
		'SHA-256 modern parmak izidir; MD5 eski manifestlerde görülür; CRC32 zip ve ağ katmanlarında kullanılır.',
	'tool.file-hash-calculator.faq.2.question': 'Çok büyük dosyalarda RAM?',
	'tool.file-hash-calculator.faq.2.answer':
		'Tüm dosya özetlemek için belleğe yüklenir. Çok büyük dosyalar yeterli boş RAM gerektirebilir.',
	'tool.file-hash-calculator.faq.3.question': 'İndirmeleri doğrulayabilir miyim?',
	'tool.file-hash-calculator.faq.3.answer':
		'Evet — üretilen özeti yayıncı sağlama toplamıyla karşılaştırın. Kaynak SHA-256 yayınlıyorsa onu tercih edin.',
	'tool.file-hash-calculator.use_case.0': 'ISO ve yükleyici sağlama toplamlarını doğrulama',
	'tool.file-hash-calculator.use_case.1': 'CI düğümleri arasında yapı çıktılarını karşılaştırma',
	'tool.file-hash-calculator.use_case.2': 'Bilet ekinde varlıklara parmak izi verme',
	'tool.file-hash-calculator.use_case.3': 'Arşiv ve veri kümelerinde hızlı bütünlük kontrolü',
	'tool.password-strength-meter.display_name': 'Parola Gücü Ölçer',
	'tool.password-strength-meter.tagline':
		'Entropi, zxcvbn ve parolanızı göndermeden sızıntı kontrolü',
	'tool.password-strength-meter.description':
		'Entropiyi tahmin edin, zxcvbn skorunu gösterin ve k-anonymity ile Have I Been Pwned sorgusu yapın (yalnızca SHA-1 öneki). Tam parola tarayıcıdan çıkmaz.',
	'tool.password-strength-meter.primary_keyword': 'parola gücü kontrol',
	'tool.password-strength-meter.meta_title': 'Parola Gücü — Entropi ve HIBP | fmtly',
	'tool.password-strength-meter.meta_description':
		'Entropi ve zxcvbn ile parola gücünü analiz edin. İsteğe bağlı HIBP k-anonymity. Tamamen tarayıcıda.',
	'tool.password-strength-meter.operation': 'Parola gücünü analiz et',
	'tool.password-strength-meter.faq.0.question': 'Sızıntı kontrolü nasıl çalışır?',
	'tool.password-strength-meter.faq.0.answer':
		'Parolanız yerelde SHA-1 ile özetlenir. Have I Been Pwned’e yalnızca ilk beş on altılık karakter gider — k-anonymity tasarımı.',
	'tool.password-strength-meter.faq.1.question': 'fmtly parolamı görür mü?',
	'tool.password-strength-meter.faq.1.answer':
		'Hayır. Analiz tarayıcınızda çalışır. Sızıntı API’si tam parolanızı almaz.',
	'tool.password-strength-meter.faq.2.question': 'Yalnızca zxcvbn yeterli mi?',
	'tool.password-strength-meter.faq.2.answer':
		'zxcvbn güçlü bir sezgisel yöntemdir. Benzersiz parola ve parola yöneticisiyle birleştirin.',
	'tool.password-strength-meter.faq.3.question': 'Çevrimdışıysam?',
	'tool.password-strength-meter.faq.3.answer':
		'Entropi ve zxcvbn çalışır; ağ yoksa sızıntı sayısı görünmeyebilir.',
	'tool.password-strength-meter.use_case.0': 'Kayıt akışlarında kullanıcıları yönlendirme',
	'tool.password-strength-meter.use_case.1': 'Parola fikirlerini benimsemeden karşılaştırma',
	'tool.password-strength-meter.use_case.2': 'Yazılım kurmadan farkındalık laboratuvarları',
	'tool.password-strength-meter.use_case.3':
		'Uzunluk ve çeşitliliğin neden önemli olduğunu anlatma',
	'tool.uuid-generator.display_name': 'UUID / ULID Üretici',
	'tool.uuid-generator.tagline': 'UUID v4, v7 ve ULID toplu üretim; ULID zaman çözümleme',
	'tool.uuid-generator.description':
		'Rastgele UUID v4, zaman sıralı UUID v7 ve ULID tanımlayıcıları üretin. ULID zaman damgasını yerelde çözün. Sabit veri için en fazla 500 değer.',
	'tool.uuid-generator.primary_keyword': 'uuid v7 ulid üretici',
	'tool.uuid-generator.meta_title': 'UUID v4 v7 ve ULID Üretici | fmtly',
	'tool.uuid-generator.meta_description':
		'Toplu UUID v4, v7 ve ULID oluşturun. ULID zamanını tarayıcıda çözün. Sunucuda saklama yok.',
	'tool.uuid-generator.operation': 'Tanımlayıcı üret',
	'tool.uuid-generator.faq.0.question': 'Hangi kimliği kullanmalıyım?',
	'tool.uuid-generator.faq.0.answer':
		'Saf rastgele için v4; veritabanında zaman sıralı ve daha kolay sıralama için v7 veya ULID.',
	'tool.uuid-generator.faq.1.question': 'Kriptografik olarak rastgele mi?',
	'tool.uuid-generator.faq.1.answer':
		'UUID v4/v7 ve ULID, mümkün olduğunda tarayıcıdan güvenli rastgelelik kullanır.',
	'tool.uuid-generator.faq.2.question': 'ULID çözümlemesi ne gösterir?',
	'tool.uuid-generator.faq.2.answer':
		'ULID ilk karakterlerde milisaniye zaman damgası taşır; bunu ISO zamana çeviririz.',
	'tool.uuid-generator.faq.3.question': 'Dışa aktarabilir miyim?',
	'tool.uuid-generator.faq.3.answer':
		'Çıktı alanından toplu kopyalayın veya pano yardımcılarını kullanın — fmtly saklamaz.',
	'tool.uuid-generator.use_case.0': 'Veritabanlarını gerçekçi kimliklerle doldurma',
	'tool.uuid-generator.use_case.1': 'Dağıtık iz için korelasyon kimlikleri üretme',
	'tool.uuid-generator.use_case.2': 'Olay akışları için sıralanabilir kimlikler',
	'tool.uuid-generator.use_case.3': 'UUID veya ULID alanı gerektiren API’leri deneme',
	'tool.keypair-generator.display_name': 'RSA / EC Anahtar Çifti Üretici',
	'tool.keypair-generator.tagline':
		'Web Crypto ile RSA-PSS ve ECDSA PEM anahtarları — yalnızca oturumunuza özel',
	'tool.keypair-generator.description':
		'RSA 2048/4096 ve ECDSA P-256/P-384 anahtar çiftleri üretin, PEM olarak dışa aktarın. Anahtarlar tarayıcıdan çıkmaz; sayfadan indirin veya kopyalayın.',
	'tool.keypair-generator.primary_keyword': 'rsa pem anahtar üret tarayıcı',
	'tool.keypair-generator.meta_title': 'RSA ve EC Anahtar Çifti (PEM) | fmtly',
	'tool.keypair-generator.meta_description':
		'Web Crypto ile PEM biçiminde RSA ve eliptik eğri anahtar çiftleri. Yalnızca istemci tarafı.',
	'tool.keypair-generator.operation': 'Anahtar çifti üret',
	'tool.keypair-generator.faq.0.question': 'Hangi algoritmalar kullanılıyor?',
	'tool.keypair-generator.faq.0.answer':
		'RSA anahtarları SHA-256 ile RSA-PSS; EC anahtarları NIST eğrileriyle ECDSA. PKIX SPKI ve PKCS#8 PEM olarak dışa aktarılır.',
	'tool.keypair-generator.faq.1.question': 'Bunlar üretim anahtarı mı?',
	'tool.keypair-generator.faq.1.answer':
		'Web Crypto’dan gerçek anahtarlardır; özel materyali koruyun ve üretim politikasına uyun.',
	'tool.keypair-generator.faq.2.question': 'TLS için kullanabilir miyim?',
	'tool.keypair-generator.faq.2.answer':
		'CA (veya kendi PKI’nız) tarafından imzalanmış sertifika gerekir. Bu araç yalnızca ham çift üretir.',
	'tool.keypair-generator.faq.3.question': 'Özel anahtarlar nerede saklanır?',
	'tool.keypair-generator.faq.3.answer':
		'Yalnızca sayfadayken bellekte. Sonra ihtiyaç varsa güvenle kaydedin.',
	'tool.keypair-generator.use_case.0': 'Yerel PEM dosyalarıyla JWT imasını deneme',
	'tool.keypair-generator.use_case.1': 'Geliştirme konteynerleri için tek kullanımlık anahtarlar',
	'tool.keypair-generator.use_case.2': 'Dışa aktarılabilir PEM ile asimetrik kriptografiyi öğretme',
	'tool.keypair-generator.use_case.3': 'RSA ile eliptik eğri anahtar boyutlarını karşılaştırma',
	'tool.certificate-decoder.display_name': 'Sertifika Çözücü',
	'tool.certificate-decoder.tagline':
		'PEM X.509 sertifikalarını ayrıştır: konu, SAN, geçerlilik, parmak izi',
	'tool.certificate-decoder.description':
		'PEM sertifikası yükleyin; konu, yayıncı, geçerlilik penceresi, imza algoritması, Konu Alternatif Adları ve SHA-256 parmak izini yerelde inceleyin.',
	'tool.certificate-decoder.primary_keyword': 'x509 sertifika pem çözümle',
	'tool.certificate-decoder.meta_title': 'X.509 Sertifika Çözücü — PEM İnceleyici | fmtly',
	'tool.certificate-decoder.meta_description':
		'PEM sertifikalarını tarayıcıda çözün. SAN, geçerlilik, algoritmalar ve parmak izleri; yükleme yok.',
	'tool.certificate-decoder.operation': 'Sertifikaları çözümle',
	'tool.certificate-decoder.faq.0.question': 'Güven zincirini doğrular mı?',
	'tool.certificate-decoder.faq.0.answer':
		'Alanları ayrıştırır ve gösterir. Güven deposuna karşı tam zincir doğrulaması bu hafif görüntüleyicinin kapsamı dışındadır.',
	'tool.certificate-decoder.faq.1.question': 'İki parmak izi biçimi neden?',
	'tool.certificate-decoder.faq.1.answer':
		'SHA-256’yı yaygın yönetici biçimi olan iki nokta üst üste ayrılmış hex olarak gösteriyoruz.',
	'tool.certificate-decoder.faq.2.question': 'DER yapıştırabilir miyim?',
	'tool.certificate-decoder.faq.2.answer':
		'Ayrıştırıcı PEM ve ayrıştırıcının desteklediği kodlamaları kabul eder; başlıklı PEM en kolayıdır.',
	'tool.certificate-decoder.faq.3.question': 'Sertifika yüklenir mi?',
	'tool.certificate-decoder.faq.3.answer': 'Hayır. Ayrıştırma tamamen tarayıcınızda olur.',
	'tool.certificate-decoder.use_case.0': 'Olay anında SAN ve son kullanma tarihini hızlı okuma',
	'tool.certificate-decoder.use_case.1':
		'Geliştirme ve üretim sertifika üst verisini karşılaştırma',
	'tool.certificate-decoder.use_case.2': 'El sıkışma sorunlarını kesin parmak izleriyle belgeleme',
	'tool.certificate-decoder.use_case.3': 'openssl olmadan X.509 yapısını öğretme',
	'tool.totp-generator.display_name': 'TOTP Üretici',
	'tool.totp-generator.tagline':
		'Base32 gizlerinden RFC 6238 kodları — doğrulayıcı uygulamalarla uyumlu',
	'tool.totp-generator.description':
		'Ayarlanabilir süre, basamak ve HMAC algoritması ile zamana bağlı tek kullanımlık parolalar üretin. Giz yerelde kalır; kodlar saniyede yenilenir.',
	'tool.totp-generator.primary_keyword': 'totp üretici doğrulayıcı',
	'tool.totp-generator.meta_title': 'TOTP Üretici — RFC 6238 OTP | fmtly',
	'tool.totp-generator.meta_description':
		'Base32 gizlerinden TOTP hesaplayın. Ayarlanabilir süre, basamak, SHA-1/256/512. Yalnızca tarayıcı.',
	'tool.totp-generator.operation': 'TOTP kodu üret',
	'tool.totp-generator.faq.0.question': 'Neden Base32?',
	'tool.totp-generator.faq.0.answer':
		'Doğrulayıcı uygulamalar gizleri genelde Base32 dizeleri olarak verir. HMAC öncesi baytlara çözümleriz.',
	'tool.totp-generator.faq.1.question': 'Google Authenticator’ın yerini alır mı?',
	'tool.totp-generator.faq.1.answer':
		'Matematiği yansıtır; hata ayıklama içindir. Hesaplar için telefon uygulamasını birincil faktör olarak kullanın.',
	'tool.totp-generator.faq.2.question': 'Saat kayması?',
	'tool.totp-generator.faq.2.answer':
		'Kodlar UTC zamanına bağlıdır. Büyük saat sapması sunucuyla uyuşmazlık yaratabilir; sistem saatini eşitleyin.',
	'tool.totp-generator.faq.3.question': 'Giz saklanır mı?',
	'tool.totp-generator.faq.3.answer': 'Yalnızca bu sekme açıkken bellekte. Bitince temizleyin.',
	'tool.totp-generator.use_case.0':
		'Geliştirme sırasında doğrulayıcı uygulama uygulamalarını doğrulama',
	'tool.totp-generator.use_case.1': 'Kodları RFC test vektörleriyle karşılaştırma',
	'tool.totp-generator.use_case.2': 'Bilinen iyi bir üreticiyle giz döndürme',
	'tool.totp-generator.use_case.3': 'MFA sorunlarını yeniden üreten destek mühendisleri',
	'ui.random_string.tab_label': 'Rastgele',
	'ui.random_string.simple_hint':
		'Uzunluk ve karakter türlerini değiştirin — çıktı otomatik güncellenir.',
	'ui.random_string.length_with_value': 'Uzunluk: {n}',
	'ui.random_string.characters_used': 'Kullanılan karakterler',
	'ui.random_string.pick.upper': 'ABC',
	'ui.random_string.pick.lower': 'abc',
	'ui.random_string.pick.digits': '123',
	'ui.random_string.pick.symbols': '#$&',
	'ui.random_string.preset_active_hint':
		'Bir karakter kümesi ön ayarı seçili. ABC / abc / 123 / semboller için Gelişmiş’den “Seç” moduna geçin.',
	'ui.random_string.advanced.title': 'Gelişmiş',
	'ui.random_string.exact_length': 'Tam uzunluk',
	'ui.random_string.slider_hint':
		'Üstteki kaydırıcı 1–256 uzunluk için hızlıdır. Daha uzun dizeleri buraya yazın (en fazla 100.000).',
	'ui.random_string.regenerate': 'Yeniden üret',
	'ui.random_string.decrease_length': 'Uzunluğu azalt',
	'ui.random_string.increase_length': 'Uzunluğu artır',
	'ui.random_string.mode.pick': 'Seç (anahtarlar)',
	'ui.random_string.strength.very_weak': 'Çok zayıf',
	'ui.random_string.strength.weak': 'Zayıf',
	'ui.random_string.strength.fair': 'Orta',
	'ui.random_string.strength.strong': 'Güçlü',
	'ui.random_string.strength.very_strong': 'Çok güçlü',
	'ui.random_string.toast.one_charset': 'En az bir karakter türü seçin.',
	'ui.random_string.generate': 'Üret',
	'ui.random_string.processing': 'Çalışıyor…',
	'ui.random_string.length_label': 'Dize başına uzunluk',
	'ui.random_string.count_label': 'Kaç dize',
	'ui.random_string.charset_label': 'Karakter kümesi',
	'ui.random_string.custom_charset_label': 'Özel karakterler',
	'ui.random_string.custom_charset_placeholder': 'Örnekleme için tam karakterleri yazın…',
	'ui.random_string.separator_label': 'Dizeler arası ayırıcı',
	'ui.random_string.charset.alphanumeric': 'Alfasayısal',
	'ui.random_string.charset.hex_lower': 'On altılık (küçük)',
	'ui.random_string.charset.hex_upper': 'On altılık (büyük)',
	'ui.random_string.charset.numeric': 'Sayısal',
	'ui.random_string.charset.base64url': 'Base64 URL-güvenli',
	'ui.random_string.charset.custom': 'Özel',
	'ui.random_string.separator.newline': 'Satır sonu',
	'ui.random_string.separator.comma': 'Virgül',
	'ui.random_string.separator.space': 'Boşluk',
	'ui.random_string.separator.none': 'Yok (birleştir)',
	'ui.random_string.exclude_ambiguous':
		'Görsel olarak belirsiz karakterleri hariç tut (0/O, 1/l, …)',
	'ui.random_string.output_label': 'Çıktı',
	'ui.random_string.panel_options_heading': 'Üretim seçenekleri',
	'ui.random_string.panel_options_hint':
		'Uzunluk, adet, karakter kümesi ve birden fazla dizenin nasıl birleştirileceği.',
	'ui.random_string.output_placeholder': 'Üretilen dizeler burada görünür',
	'ui.random_string.worker_active':
		'Büyük girdi algılandı (>{size}). Üretim Web Worker’da çalışıyor.',
	'ui.random_string.worker_failed': 'Worker başarısız. Ana iş parçacığına dönülüyor.',
	'ui.random_string.worker_badge': 'Worker',
	'ui.random_string.toast.generated': 'Rastgele dizeler üretildi',
	'ui.random_string.toast.cleared': 'Çıktı temizlendi',
	'ui.random_string.toast.nothing_to_download': 'Henüz indirilecek bir şey yok',
	'ui.random_string.error.invalid_length': 'Uzunluk izin verilen aralıkta olmalıdır.',
	'ui.random_string.error.invalid_count': 'Adet izin verilen aralıkta olmalıdır.',
	'ui.random_string.error.empty_charset': 'Boş olmayan bir karakter kümesi seçin.',
	'ui.random_string.error.charset_too_large': 'Karakter kümesi çok büyük.',
	'ui.random_string.error.crypto_unavailable': 'Bu ortamda Web Crypto yok.',
	'ui.random_string.error.unknown': 'Dizeler üretilemedi.',
	'ui.crypto.tab.hash': 'Özet',
	'ui.crypto.tab.hmac': 'HMAC',
	'ui.crypto.tab.file_hash': 'Dosya',
	'ui.crypto.tab.password': 'Parola',
	'ui.crypto.tab.uuid': 'UUID',
	'ui.crypto.tab.keypair': 'Anahtar',
	'ui.crypto.tab.cert': 'Sertifika',
	'ui.crypto.tab.totp': 'TOTP',
	'ui.hash.intro':
		'MD5 veya SHA ile metni özetleyin. Her şey tarayıcınızda çalışır — hiçbir şey yüklenmez.',
	'ui.hash.sample_input': 'fmtly',
	'ui.hash.input_label': 'Girdi (UTF-8)',
	'ui.hash.regenerate': 'Yeniden hesapla',
	'ui.hash.error_failed': 'Özet hesaplanamadı.',
	'ui.hash.worker_label': 'Worker',
	'ui.hash.worker_hint':
		'Büyük girdiler sayfayı akıcı tutmak için otomatik olarak Web Worker kullanır.',
	'ui.hmac.intro':
		'Giz anahtarınızla HMAC hesaplayın. Anahtarlar bu sekmede kalır — sunucuya gönderilmez.',
	'ui.hmac.sample_message': 'mesaj',
	'ui.hmac.sample_secret': 'giz',
	'ui.hmac.secret_label': 'Giz anahtar',
	'ui.hmac.message_label': 'Mesaj (UTF-8)',
	'ui.hmac.regenerate': 'Yeniden hesapla',
	'ui.hmac.error_failed': 'HMAC hesaplanamadı.',
	'ui.hmac.worker_hint':
		'Uzun mesajlar sayfayı akıcı tutmak için otomatik olarak Web Worker kullanır.',
	'ui.file_hash.intro':
		'Her dosya için MD5, SHA-256 ve CRC32 — yalnızca yerel tarayıcınızda işlenir.',
	'ui.file_hash.drop_zone': 'Dosyayı buraya bırakın veya seçmek için tıklayın',
	'ui.file_hash.drop_hint': 'Dosyalar asla yüklenmez.',
	'ui.file_hash.rehash': 'Yeniden özetle',
	'ui.file_hash.error_failed': 'Dosya özetlenemedi.',
	'ui.file_hash.worker_hint':
		'Büyük dosyalar sayfayı akıcı tutmak için otomatik olarak Web Worker kullanır.',
	'ui.password_strength.intro':
		'Entropi, zxcvbn ve Have I Been Pwned (k-anonymity). Parolanız anonim aralık sorgusu dışında tarayıcıdan çıkmaz.',
	'ui.password_strength.field_label': 'Parola',
	'ui.password_strength.show': 'Göster',
	'ui.password_strength.hide': 'Gizle',
	'ui.password_strength.bits': 'bit',
	'ui.password_strength.band.very_weak': 'Çok zayıf',
	'ui.password_strength.band.weak': 'Zayıf',
	'ui.password_strength.band.fair': 'Orta',
	'ui.password_strength.band.good': 'İyi',
	'ui.password_strength.band.strong': 'Güçlü',
	'ui.password_strength.summary.entropy': 'Entropi (tahmini)',
	'ui.password_strength.summary.crack': 'Kırılma süresi (kabaca)',
	'ui.password_strength.summary.zxcvbn': 'zxcvbn skoru',
	'ui.password_strength.summary.pwned': 'Bilinen sızıntılar (HIBP)',
	'ui.password_strength.summary.pwned_unknown':
		'Sızıntı kontrolü kullanılamıyor (çevrimdışı veya hata).',
	'ui.password_strength.zxcvbn_label': 'zxcvbn skoru',
	'ui.password_strength.hibp_label': 'HIBP sayısı',
	'ui.uuid.intro':
		'UUID v4, UUID v7 ve ULID — yerelde üretilir. ULID içinde çözülebilecek bir zaman damgası vardır.',
	'ui.uuid.count': 'Adet',
	'ui.uuid.regenerate': 'Yeniden üret',
	'ui.uuid.output_label': 'Üretilen tanımlayıcılar',
	'ui.uuid.ulid_decode_label': 'ULID zamanını çöz',
	'ui.uuid.ulid_placeholder': 'Bir ULID yapıştırın',
	'ui.uuid.ulid_decode_invalid': 'Geçerli bir ULID değil',
	'ui.uuid.decode': 'Çöz',
	'ui.keypair.intro':
		'RSA (PSS) ve ECDSA anahtar çiftleri PEM olarak. Yalnızca Web Crypto ile tarayıcınızda üretilir.',
	'ui.keypair.bits': 'bit',
	'ui.keypair.generate': 'Üret',
	'ui.keypair.public': 'Açık anahtar',
	'ui.keypair.private': 'Özel anahtar',
	'ui.keypair.error_failed': 'Anahtar çifti üretilemedi.',
	'ui.cert.intro':
		'PEM X.509 sertifikalarını inceleyin: konu, geçerlilik, SAN, parmak izi — yerelde ayrıştırılır.',
	'ui.cert.pem_label': 'PEM sertifikası',
	'ui.cert.placeholder_hint': 'PEM kodlu sertifikayı yapıştırın…',
	'ui.cert.subject': 'Konu',
	'ui.cert.issuer': 'Yayıncı',
	'ui.cert.serial': 'Seri numarası',
	'ui.cert.valid_from': 'Geçerlilik başlangıcı',
	'ui.cert.valid_to': 'Geçerlilik bitişi',
	'ui.cert.sig_alg': 'İmza',
	'ui.cert.public_key': 'Açık anahtar',
	'ui.cert.fp256': 'SHA-256 parmak izi',
	'ui.cert.san': 'Konu Alternatif Adları',
	'ui.cert.redo': 'Tekrar çöz',
	'ui.totp.intro':
		'RFC 6238 TOTP, Base32 gizden. Ayarlar uyumlu olduğunda doğrulayıcı uygulamalarla eşleşir.',
	'ui.totp.secret_label': 'Giz (Base32)',
	'ui.totp.period': 'Süre (sn)',
	'ui.totp.digits': 'Basamak',
	'ui.totp.code_label': 'Kod',
	'ui.totp.refresh': 'Yenile',
	'ui.totp.error_failed': 'Geçersiz giz veya ayar.',
	'ui.qr.tab_label': 'QR',
	'ui.qr.tab_reader': 'Oku',
	'ui.qr.tab_barcode': 'Barkod',
	'ui.qr.characters': 'karakter',
	'ui.qr.output_empty': 'Önizlemek ve dışa aktarmak için bir QR kod oluşturun.',
	'ui.qr.preview_alt': 'Üretilen QR kod önizlemesi',
	'ui.qr.worker_active':
		'Büyük girdi algılandı (>{size}). QR üretimi Web Worker üzerinde çalışıyor.',
	'ui.qr.worker_failed': 'Worker işlemi başarısız oldu. Ana thread üretimine dönülüyor.',
	'ui.qr.worker_badge': 'Worker',
	'ui.qr.content_label': 'QR içeriği',
	'ui.qr.encoding_hint': 'Metin, URL, Wi-Fi payload, vCard veya uygulama deep linkleri',
	'ui.qr.input_placeholder':
		'URL, düz metin, Wi-Fi payload veya QR’a uygun herhangi bir içeriği buraya yapıştırın...',
	'ui.qr.preview_label': 'Canlı önizleme',
	'ui.qr.copy_svg': 'SVG Kopyala',
	'ui.qr.download_svg': 'SVG İndir',
	'ui.qr.download_png': 'PNG İndir',
	'ui.qr.empty_state':
		'SVG ve PNG dışa aktarmaya hazır bir QR kod önizlemesi oluşturmak için içerik girin.',
	'ui.qr.metric.version': 'Versiyon',
	'ui.qr.metric.modules': 'Modül',
	'ui.qr.metric.mask': 'Maske',
	'ui.qr.metric.segments': 'Segment',
	'ui.qr.scan_readiness_label': 'Tarama hazırlığı',
	'ui.qr.scan_readiness.excellent': 'Tarama için çok uygun',
	'ui.qr.scan_readiness.excellent_hint':
		'Bu ayarlar hem ekranda hem baskıda güvenilir tarama için iyi dengelenmiştir.',
	'ui.qr.scan_readiness.balanced': 'Dengeli kurulum',
	'ui.qr.scan_readiness.balanced_hint':
		'Bu QR büyük olasılıkla iyi taranır; ancak daha güçlü düzeltme veya daha geniş sessiz alan dayanıklılığı artırabilir.',
	'ui.qr.scan_readiness.risky': 'Tarama için riskli',
	'ui.qr.scan_readiness.risky_hint':
		'Geçerli ayarlar tarama güvenilirliğini azaltabilir. Özellikle logo kullanıyorsanız sessiz alanı veya hata düzeltmeyi artırın.',
	'ui.qr.section.reliability': 'Güvenilirlik',
	'ui.qr.section.appearance': 'Görünüm',
	'ui.qr.section.logo': 'Orta logo (isteğe bağlı)',
	'ui.qr.error_correction_hint':
		'Daha yüksek düzeltme, hasar, çizik ve logo katmanına karşı daha dayanıklıdır; ancak toplam kapasiteyi biraz azaltır.',
	'ui.qr.size_label': 'Boyut',
	'ui.qr.margin_label': 'Sessiz alan',
	'ui.qr.dark_color_label': 'Ön plan',
	'ui.qr.light_color_label': 'Arka plan',
	'ui.qr.transparent': 'Şeffaf',
	'ui.qr.transparent_background_label': 'Şeffaf arka plan',
	'ui.qr.logo_hint':
		'Afiş, menü, ambalaj veya baskı işleriniz için QR kodun ortasına küçük bir logo ekler. En güvenilir tarama için boş bırakabilirsiniz.',
	'ui.qr.upload_logo': 'Logo Yükle',
	'ui.qr.logo_preview_alt': 'Yüklenen logo önizlemesi',
	'ui.qr.logo_scale_label': 'Logo boyutu',
	'ui.qr.remove_logo': 'Logoyu Kaldır',
	'ui.qr.logo_empty':
		'Logo seçilmedi. Bu alan isteğe bağlıdır; yalnızca QR kodun ortasında marka logonuz görünsün istiyorsanız kullanın. En basit ve güvenilir tarama için boş bırakın.',
	'ui.qr.error.invalid_logo': 'Logo için lütfen geçerli bir görsel dosyası yükleyin.',
	'ui.qr.error.input_too_long':
		'Bu metin tek bir QR koda sığmayacak kadar büyük. İçeriği kısaltın veya bazı verileri çıkarın.',
	'ui.qr.error.generation_failed': 'QR üretimi başarısız oldu: {detail}',
	'ui.qr.error.png_export_failed': 'Bu QR kod için PNG dışa aktarma başarısız oldu.',
	'ui.qr.warning.logo_overlay_low_error_correction':
		'Merkez logo ile L veya M düzeltme kullanmak tarama güvenilirliğini azaltabilir. Q veya H tercih edin.',
	'ui.qr.toast.logo_added': 'Logo katmanı eklendi',
	'ui.qr.toast.logo_removed': 'Logo katmanı kaldırıldı',
	'ui.qr.reader.upload': 'Yükle',
	'ui.qr.reader.camera': 'Kamera',
	'ui.qr.reader.drop_title': 'Görseli buraya bırakın',
	'ui.qr.reader.drop_hint':
		'PNG, JPG, WebP, GIF veya SVG. Büyük görseller ana iş parçacığı dışında çözülür. Ekran görüntüsü de yapıştırabilirsiniz.',
	'ui.qr.reader.drop_aria': 'Taramak için görsel yükleyin veya bırakın',
	'ui.qr.reader.preview_alt': 'Yüklenen görsel önizlemesi',
	'ui.qr.reader.result_label': 'Çözülen içerik',
	'ui.qr.reader.empty_state': 'Çözülen metin burada görünür. Görseliniz tarayıcıdan çıkmaz.',
	'ui.qr.reader.status_decoding': 'Görsel taranıyor…',
	'ui.qr.reader.status_ok': '{size} · {ms} ms',
	'ui.qr.reader.error_no_qr':
		'QR kod bulunamadı. Daha net bir fotoğraf, daha iyi ışık veya daha geniş bir kırpma deneyin.',
	'ui.qr.reader.error_decode': 'Bu görsel okunamadı. Başka bir dosya veya format deneyin.',
	'ui.qr.reader.error_load': 'Bu görsel yüklenemedi. Cihazınızdan PNG, JPG veya WebP deneyin.',
	'ui.qr.reader.error_type': 'Lütfen bir görsel dosyası seçin.',
	'ui.qr.reader.worker_active':
		'Büyük görsel ({size}). Arayüzü akıcı tutmak için çözümleme Web Worker’da çalışır.',
	'ui.qr.reader.worker_badge': 'Worker',
	'ui.qr.reader.worker_failed':
		'Worker çözümlemesi başarısız. Ana iş parçacığında yeniden deneniyor.',
	'ui.barcode.characters': 'karakter',
	'ui.barcode.content_label': 'Barkod verisi',
	'ui.barcode.input_placeholder': 'Seçilen semboloji için yükü yazın veya yapıştırın…',
	'ui.barcode.format_label': 'Semboloji',
	'ui.barcode.format_hint':
		'Perakende GTIN’lerde EAN/UPC; lojistikte sıkça Code 128 veya ITF-14 kullanılır.',
	'ui.barcode.preview_label': 'Önizleme',
	'ui.barcode.preview_alt': 'Barkod önizlemesi',
	'ui.barcode.output_empty': 'Önizlemek ve dışa aktarmak için bir barkod oluşturun.',
	'ui.barcode.raster_only': 'Yalnızca PNG (worker)',
	'ui.barcode.empty_preview': 'Vektör veya raster önizleme için veri ve seçenekleri ayarlayın.',
	'ui.barcode.copy_svg': 'SVG kopyala',
	'ui.barcode.copy_png': 'PNG veri URL’sini kopyala',
	'ui.barcode.copy_svg_unavailable': 'Bu önizleme için SVG yok.',
	'ui.barcode.download_svg': 'SVG',
	'ui.barcode.download_png': 'PNG',
	'ui.barcode.section.appearance': 'Görünüm',
	'ui.barcode.display_value': 'Okunabilir metni göster',
	'ui.barcode.bar_width': 'Çubuk genişliği',
	'ui.barcode.bar_height': 'Çubuk yüksekliği',
	'ui.barcode.font_size': 'Etiket boyutu',
	'ui.barcode.quiet_zone': 'Sessiz alan',
	'ui.barcode.line_color': 'Çubuklar',
	'ui.barcode.background': 'Arka plan',
	'ui.barcode.worker_active': 'Büyük yük ({size}). Üretim Web Worker’da çalışır.',
	'ui.barcode.worker_badge': 'Worker',
	'ui.barcode.worker_failed': 'Worker başarısız. Ana iş parçacığında yeniden deneniyor.',
	'ui.barcode.error.empty': 'Kodlanacak bir değer girin.',
	'ui.barcode.error.invalid_value': 'Bu değer seçilen biçimle eşleşmiyor.',
	'ui.barcode.error.generation_failed': 'Barkod oluşturulamadı: {detail}',
	'ui.barcode.error.ean13': 'EAN-13 için 12 veya 13 rakam gerekir.',
	'ui.barcode.error.ean8': 'EAN-8 için 7 veya 8 rakam gerekir.',
	'ui.barcode.error.upc': 'UPC-A için 11 veya 12 rakam gerekir.',
	'ui.barcode.error.itf14': 'ITF-14 için 13 veya 14 rakam gerekir.',
	'ui.barcode.error.itf': 'ITF için çift sayıda rakam (en az iki) gerekir.',
	'ui.barcode.error.msi': 'MSI yalnızca rakamları kodlar.',
	'ui.barcode.error.pharmacode': 'Pharmacode 1 ile 131070 arasında bir tam sayı olmalıdır.',
	'ui.barcode.format.CODE128': 'Code 128',
	'ui.barcode.format.CODE39': 'Code 39',
	'ui.barcode.format.CODE93': 'Code 93',
	'ui.barcode.format.codabar': 'Codabar',
	'ui.barcode.format.EAN13': 'EAN-13',
	'ui.barcode.format.EAN8': 'EAN-8',
	'ui.barcode.format.UPC': 'UPC-A',
	'ui.barcode.format.ITF14': 'ITF-14',
	'ui.barcode.format.ITF': 'ITF (iç içe)',
	'ui.barcode.format.MSI': 'MSI',
	'ui.barcode.format.MSI10': 'MSI (mod 10)',
	'ui.barcode.format.MSI11': 'MSI (mod 11)',
	'ui.barcode.format.MSI1010': 'MSI (mod 1010)',
	'ui.barcode.format.MSI1110': 'MSI (mod 1110)',
	'ui.barcode.format.pharmacode': 'Pharmacode',

	// Missing keys from English
	'ui.validator.warnings': 'ui.validator.warnings',
	'ui.validator.first_issue': 'ui.validator.first_issue',

	'category.generate.display_name': 'Üreteçler',
	'category.generate.description':
		'Tarayıcıda anında test verisi, kimlik, parola, .gitignore ve README üretin.',
	'category.generate.primary_keyword': 'geliştirici üreticileri',
	'tool.fake-data-generator.display_name': 'Sahte veri üretici',
	'tool.fake-data-generator.tagline': 'QA ve demolar için gerçekçi satırlar',
	'tool.fake-data-generator.description':
		'Faker ile isim, e-posta, adres ve daha fazlasını yerel ayarla üretin. JSON, CSV veya SQL INSERT dışa aktarın. Büyük çıktılar Web Worker’da.',
	'tool.fake-data-generator.primary_keyword': 'sahte veri üretici',
	'tool.fake-data-generator.meta_title': 'Sahte veri üretici — JSON, CSV, SQL | fmtly',
	'tool.fake-data-generator.meta_description':
		'Tarayıcıda ücretsiz: alanlar, dil, satır sayısı, JSON/CSV/SQL dışa aktarma. Yükleme yok; dev çıktılar için worker.',
	'tool.fake-data-generator.operation': 'generate',
	'tool.fake-data-generator.faq.0.question': 'Veriler gerçekten rastgele mi?',
	'tool.fake-data-generator.faq.0.answer':
		'Faker ve Web Crypto ile üretilir. Yalnızca test içindir — gerçek kişisel veri olarak kullanmayın.',
	'tool.fake-data-generator.faq.1.question': 'Ne zaman worker kullanılır?',
	'tool.fake-data-generator.faq.1.answer':
		'Çok sayıda satır veya tahmini ~500 KB üzeri çıktı ana iş parçacığını bloklamasın diye.',
	'tool.fake-data-generator.faq.2.question': 'Hangi dışa aktarma biçimleri?',
	'tool.fake-data-generator.faq.2.answer':
		'Nesne dizisi JSON, başlıklı CSV veya seçilen tablo için SQL INSERT.',
	'tool.fake-data-generator.faq.3.question': 'Veriler tarayıcıdan çıkar mı?',
	'tool.fake-data-generator.faq.3.answer': 'Hayır. Hepsi yerel; fmtly sunucuya göndermez.',
	'tool.fake-data-generator.use_case.0': 'Entegrasyon testleri ve staging veritabanları',
	'tool.fake-data-generator.use_case.1': 'Gerçek veri olmadan demolar',
	'tool.fake-data-generator.use_case.2': 'CSV içe aktarma ve ETL akışlarını deneme',
	'tool.fake-data-generator.use_case.3': 'Tekrarlanabilir örnekler paylaşma',
	'tool.uuid-batch-generator.display_name': 'Toplu UUID üretici',
	'tool.uuid-batch-generator.tagline': 'Binlerce UUID v4 veya v7',
	'tool.uuid-batch-generator.description':
		'Satır veya virgülle ayrılmış listeler, hepsini kopyala veya metin indir. Büyük toplu işler Web Worker’da.',
	'tool.uuid-batch-generator.primary_keyword': 'toplu uuid',
	'tool.uuid-batch-generator.meta_title': 'Toplu UUID üretici — v4 ve v7 | fmtly',
	'tool.uuid-batch-generator.meta_description':
		'Yüz binlerce UUID v4 veya v7 tarayıcıda. Kopyala veya indir; büyük hacimler için worker.',
	'tool.uuid-batch-generator.operation': 'generate',
	'tool.uuid-batch-generator.faq.0.question': 'Tek UUID aracından farkı?',
	'tool.uuid-batch-generator.faq.0.answer':
		'Burada: büyük listeler, indirme, ayırıcılar. Kripto aracı: tek kimlik ve ULID çözümleme.',
	'tool.uuid-batch-generator.faq.1.question': 'v4 ile v7?',
	'tool.uuid-batch-generator.faq.1.answer':
		'v4 rastgele. v7 zaman sıralı (RFC 9562). İkisi de yerel üretilir.',
	'tool.uuid-batch-generator.faq.2.question': 'Neden worker?',
	'tool.uuid-batch-generator.faq.2.answer':
		'Yüz binlerce UUID arayüzü kilitleyebilir; worker akıcı kalır.',
	'tool.uuid-batch-generator.faq.3.question': 'Kriptografik olarak güvenli mi?',
	'tool.uuid-batch-generator.faq.3.answer':
		'Birçok ortamın kullandığı uuid paketiyle aynı. Yüksek tehdit için politikanıza uyun.',
	'tool.uuid-batch-generator.use_case.0': 'Yük testleri ve fikstürler',
	'tool.uuid-batch-generator.use_case.1': 'Sütunları benzersiz kimliklerle doldurma',
	'tool.uuid-batch-generator.use_case.2': 'v7 ile sıralı veritabanı satırları',
	'tool.uuid-batch-generator.use_case.3': 'Betiklere hızlı yapıştırma',
	'tool.generate-password-generator.display_name': 'Parola üretici',
	'tool.generate-password-generator.tagline': 'Güçlü parolalar tarayıcıda',
	'tool.generate-password-generator.description':
		'Web Crypto ile uzunluk ve karakter sınıfları. İsteğe bağlı tireler ve yerel zxcvbn ipucu.',
	'tool.generate-password-generator.primary_keyword': 'parola üretici',
	'tool.generate-password-generator.meta_title': 'Parola üretici — güvenli ve yerel | fmtly',
	'tool.generate-password-generator.meta_description':
		'Uzunluk, semboller ve belirsiz karakterleri hariç tutma. Yerel zxcvbn ipucu.',
	'tool.generate-password-generator.operation': 'generate',
	'tool.generate-password-generator.faq.0.question': 'Güç ölçerden farkı?',
	'tool.generate-password-generator.faq.0.answer':
		'Bu yeni parolalar üretir. Kripto aracı mevcut parolaları değerlendirir.',
	'tool.generate-password-generator.faq.1.question': 'Rastgelelik nereden?',
	'tool.generate-password-generator.faq.1.answer':
		'tarayıcıda crypto.getRandomValues — güvenli bağlamlarla aynı API.',
	'tool.generate-password-generator.faq.2.question': 'İpucu ne anlama geliyor?',
	'tool.generate-password-generator.faq.2.answer':
		'zxcvbn tahmin edilebilirliği tahmin eder. Yerel ve yönlendiricidir.',
	'tool.generate-password-generator.faq.3.question': 'Üretim için?',
	'tool.generate-password-generator.faq.3.answer':
		'Kurumsal politika, rotasyon ve kasa ile birleştirin.',
	'tool.generate-password-generator.use_case.0': 'Yeni yönetici veya servis kimlik bilgisi',
	'tool.generate-password-generator.use_case.1': 'Demolar için geçici sırlar',
	'tool.generate-password-generator.use_case.2': 'Zorunlu sembollerle yüksek entropi',
	'tool.generate-password-generator.use_case.3': 'İyi uygulama atölyeleri',
	'tool.gitignore-builder.display_name': '.gitignore oluşturucu',
	'tool.gitignore-builder.tagline': 'Yaygın ignore kurallarını birleştir',
	'tool.gitignore-builder.description':
		'Node, Python, Rust, OS gürültüsü, IDE gibi yığınları seçin — tek .gitignore. Statik şablonlar, ağ yok.',
	'tool.gitignore-builder.primary_keyword': 'gitignore üretici',
	'tool.gitignore-builder.meta_title': '.gitignore oluşturucu — birleşik şablonlar | fmtly',
	'tool.gitignore-builder.meta_description':
		'Dil, Docker, Terraform, editör parçalarını birleştirin. Tek tıkla kopyalayın.',
	'tool.gitignore-builder.operation': 'generate',
	'tool.gitignore-builder.faq.0.question': 'gitignore.io gibi mi?',
	'tool.gitignore-builder.faq.0.answer':
		'Yaygın şablonlardan esinlenmiş parçalar; API olmadan yerel birleştirme.',
	'tool.gitignore-builder.faq.1.question': 'Çıktıyı düzenleyebilir miyim?',
	'tool.gitignore-builder.faq.1.answer': 'Evet — repoya yapıştırıp uyarlayın. Sıra deterministik.',
	'tool.gitignore-builder.faq.2.question': 'Neden birleştirmek?',
	'tool.gitignore-builder.faq.2.answer':
		'Daha küçük ve ilgili kurallar gürültüyü ve çakışmayı azaltır.',
	'tool.gitignore-builder.faq.3.question': 'Seçimlerimi izliyor musunuz?',
	'tool.gitignore-builder.faq.3.answer': 'Hayır. Hepsi tarayıcıda.',
	'tool.gitignore-builder.use_case.0': 'Mantıklı varsayılanlarla repo başlatma',
	'tool.gitignore-builder.use_case.1': 'Hızlıca OS ve editör ekleri',
	'tool.gitignore-builder.use_case.2': 'Docker/Terraform’u yığınla birleştirme',
	'tool.gitignore-builder.use_case.3': 'Git hijyeni öğretimi',
	'tool.readme-template-generator.display_name': 'README şablonu',
	'tool.readme-template-generator.tagline': 'Saniyeler içinde README iskeleti',
	'tool.readme-template-generator.description':
		'Başlık, açıklama, kurulum, kullanım, lisans ve isteğe bağlı GitHub rozetleri — yapıştırmaya hazır Markdown.',
	'tool.readme-template-generator.primary_keyword': 'readme üretici',
	'tool.readme-template-generator.meta_title': 'README şablonu — Markdown | fmtly',
	'tool.readme-template-generator.meta_description':
		'Alanlardan README.md: komutlar, kullanım, lisans, isteğe bağlı rozetler. Tamamen istemci tarafı.',
	'tool.readme-template-generator.operation': 'generate',
	'tool.readme-template-generator.faq.0.question': 'Sonra özelleştirebilir miyim?',
	'tool.readme-template-generator.faq.0.answer':
		'Evet — basit Markdown, istediğiniz gibi genişletin.',
	'tool.readme-template-generator.faq.1.question': 'GitHub dışında rozetler?',
	'tool.readme-template-generator.faq.1.answer':
		'GitHub yolları için shields benzeri kalıplar; başka yerlerde URL’leri uyarlayın.',
	'tool.readme-template-generator.faq.2.question': 'Proje adı gönderiliyor mu?',
	'tool.readme-template-generator.faq.2.answer': 'Hayır. Yalnızca yerel birleştirme.',
	'tool.readme-template-generator.faq.3.question': 'Özel repolar?',
	'tool.readme-template-generator.faq.3.answer': 'Evet — yükleme yok; Markdown’ı elle yapıştırın.',
	'tool.readme-template-generator.use_case.0': 'GitHub/GitLab açık kaynak',
	'tool.readme-template-generator.use_case.1': 'Tutarlı README’li iç kütüphaneler',
	'tool.readme-template-generator.use_case.2': 'Hackathon ve prototipler',
	'tool.readme-template-generator.use_case.3': 'Markdown ve iyi uygulamalar öğretimi',
	'ui.generate_fake_data.no_fields': 'En az bir alan seçin.',
	'ui.generate_fake_data.fields_label': 'Alanlar',
	'ui.generate_fake_data.rows': 'Satırlar',
	'ui.generate_fake_data.format': 'Dışa aktarma biçimi',
	'ui.generate_fake_data.table': 'SQL tablo adı',
	'ui.generate_fake_data.generate': 'Üret',
	'ui.generate_fake_data.worker_badge': 'Web Worker',
	'ui.generate_fake_data.preview': 'Çıktı',
	'ui.generate_fake_data.placeholder': 'Üretilen veri burada görünür…',
	'ui.generate_fake_data.field.fullName': 'Tam ad',
	'ui.generate_fake_data.field.firstName': 'Ad',
	'ui.generate_fake_data.field.lastName': 'Soyad',
	'ui.generate_fake_data.field.email': 'E-posta',
	'ui.generate_fake_data.field.phone': 'Telefon',
	'ui.generate_fake_data.field.street': 'Sokak',
	'ui.generate_fake_data.field.city': 'Şehir',
	'ui.generate_fake_data.field.zip': 'Posta kodu',
	'ui.generate_fake_data.field.country': 'Ülke',
	'ui.generate_fake_data.field.company': 'Şirket',
	'ui.generate_fake_data.field.jobTitle': 'Unvan',
	'ui.generate_fake_data.field.ipv4': 'IPv4',
	'ui.generate_fake_data.field.date': 'Tarih',
	'ui.generate_fake_data.field.uuid': 'UUID',
	'ui.generate_uuid_batch.count': 'Adet',
	'ui.generate_uuid_batch.separator': 'Ayırıcı',
	'ui.generate_uuid_batch.sep_line': 'Satır sonu',
	'ui.generate_uuid_batch.sep_comma': 'Virgül',
	'ui.generate_uuid_batch.generate': 'Üret',
	'ui.generate_uuid_batch.worker': 'Web Worker',
	'ui.generate_uuid_batch.output': 'UUID’ler',
	'ui.generate_uuid_batch.placeholder': 'Üretilen UUID’ler burada görünür…',
	'ui.generate_password.length': 'Uzunluk',
	'ui.generate_password.upper': 'A–Z',
	'ui.generate_password.lower': 'a–z',
	'ui.generate_password.digits': '0–9',
	'ui.generate_password.symbols': 'Semboller',
	'ui.generate_password.no_ambiguous': 'Belirsizleri çıkar',
	'ui.generate_password.groups': 'Her N karakterde tire (0 = kapalı)',
	'ui.generate_password.regenerate': 'Yeniden üret',
	'ui.generate_password.strength_hint': 'İpucu',
	'ui.generate_password.strength.0': 'Çok kolay',
	'ui.generate_password.strength.1': 'Çok zayıf',
	'ui.generate_password.strength.2': 'Zayıf',
	'ui.generate_password.strength.3': 'Orta',
	'ui.generate_password.strength.4': 'Güçlü',
	'ui.generate_password.disclaimer':
		'Web Crypto ile tarayıcıda üretildi. zxcvbn ipucu yereldir — kritik sırlar için politikanızı doğrulayın.',
	'ui.generate_gitignore.search': 'Yığınları filtrele…',
	'ui.generate_readme.title': 'Başlık',
	'ui.generate_readme.license': 'Lisans',
	'ui.generate_readme.description': 'Açıklama',
	'ui.generate_readme.install': 'Kurulum',
	'ui.generate_readme.usage': 'Kullanım',
	'ui.generate_readme.badges': 'GitHub tarzı rozetler',
	'ui.generate_readme.repo_user': 'GitHub kullanıcı veya org',
	'ui.generate_readme.repo_name': 'Depo adı',

	'category.pdf.display_name': 'PDF',
	'category.pdf.description':
		'PDF dosyalarini dogrudan tarayicinizda goruntuleyin, metin cikarin, birlestirin, bolun ve inceleyin.',
	'category.pdf.primary_keyword': 'pdf araclari',
	'tool.pdf-viewer.display_name': 'PDF Goruntuleyici',
	'tool.pdf-viewer.tagline': 'Yaklastirma ve gezinme kontrolleriyle PDF sayfalarini gosterin',
	'tool.pdf-viewer.description':
		'PDF dosyalarini tarayicida acin, yumusak yakinlastirma ve hizli sayfa gecisiyle rahatca gezin.',
	'tool.pdf-viewer.primary_keyword': 'pdf goruntuleyici',
	'tool.pdf-viewer.meta_title': 'Cevrimici PDF Goruntuleyici - fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'PDF dosyalarini tarayicinizda sayfa gezintisi ve yakinlastirma kontrolleriyle goruntuleyin. Yukleme gerekmez.',
	'tool.pdf-viewer.operation': 'Goruntule',
	'tool.pdf-viewer.faq.0.question': 'PDF dosyalari sunucuya yukleniyor mu?',
	'tool.pdf-viewer.faq.0.answer': 'Hayir. Dosyalar tarayicinizda kalir ve asla yuklenmez.',
	'tool.pdf-viewer.faq.1.question': 'Buyuk PDF dosyalarinda gezinebilir miyim?',
	'tool.pdf-viewer.faq.1.answer':
		'Evet. Sayfa sayfa ilerleyebilir ve daha rahat okumak icin yakinlastirip uzaklastirabilirsiniz.',
	'tool.pdf-viewer.faq.2.question': 'Sifre korumali PDF dosyalarini destekliyor mu?',
	'tool.pdf-viewer.faq.2.answer':
		'Sifreli PDF dosyalari bu goruntuleme akisinda henuz desteklenmiyor.',
	'tool.pdf-viewer.faq.3.question': 'Hangi tarayicilar onerilir?',
	'tool.pdf-viewer.faq.3.answer':
		'En iyi uyumluluk icin Chrome, Edge, Firefox ve Safari nin guncel surumleri onerilir.',
	'tool.pdf-viewer.use_case.0': 'Paylasmadan once ekleri hizlica onizlemek',
	'tool.pdf-viewer.use_case.1': 'Masaustu yazilim olmadan taranmis dosyalari incelemek',
	'tool.pdf-viewer.use_case.2':
		'Uzun PDF dosyalarini yakinlastirma ve sayfa kontrolleriyle gozden gecirmek',
	'tool.pdf-viewer.use_case.3': 'PDF dosyalarini tarayicida guvenli sekilde acmak',
	'tool.pdf-to-text.display_name': 'PDF den Metne',
	'tool.pdf-to-text.tagline': 'PDF dosyalarindan sayfa sayfa ham metin cikarin',
	'tool.pdf-to-text.description':
		'PDF sayfalarindan duz metin cikarin, her sayfa cikisini ayri ayri inceleyip kopyalayin veya disa aktarın.',
	'tool.pdf-to-text.primary_keyword': 'pdf den metne',
	'tool.pdf-to-text.meta_title': 'PDF den Metin Cikarici - fmtly.dev',
	'tool.pdf-to-text.meta_description':
		'PDF dosyalarindan tarayicinizda sayfa sayfa metin cikarin. Cikarilan metni aninda kopyalayin veya indirin.',
	'tool.pdf-to-text.operation': 'Cikar',
	'tool.pdf-to-text.faq.0.question': 'Metin cikarma ne kadar dogru?',
	'tool.pdf-to-text.faq.0.answer':
		'Metin tabanli PDF dosyalarinda sonuc genellikle dogrudur. Taranmis gorsel PDF dosyalari OCR gerektirebilir.',
	'tool.pdf-to-text.faq.1.question': 'Cikti sayfaya gore gruplanir mi?',
	'tool.pdf-to-text.faq.1.answer': 'Evet. Her sayfa kendi cikarilan metin bloguyla doner.',
	'tool.pdf-to-text.faq.2.question': 'Cikarilan metni indirebilir miyim?',
	'tool.pdf-to-text.faq.2.answer':
		'Evet. Tum cikarilan sayfalari metin dosyasi olarak indirebilirsiniz.',
	'tool.pdf-to-text.faq.3.question': 'Cevrimdisi calisir mi?',
	'tool.pdf-to-text.faq.3.answer':
		'Sayfa yuklendikten sonra islem tarayicinizda yerel olarak yapilir, dosya icerigi hicbir sunucuya gonderilmez.',
	'tool.pdf-to-text.use_case.0': 'Hizli inceleme icin hukuki maddeleri cikarmak',
	'tool.pdf-to-text.use_case.1': 'Rapor ve kilavuzlardaki icerigi yeniden kullanmak',
	'tool.pdf-to-text.use_case.2': 'Ceviri surecleri icin metin hazirlamak',
	'tool.pdf-to-text.use_case.3': 'Metin tabanli PDF dosyalarinin aranabilir kopyalarini olusturmak',
	'tool.pdf-merge.display_name': 'PDF Birlestirme',
	'tool.pdf-merge.tagline': 'Birden fazla PDF dosyasini tek belgede birlestirin',
	'tool.pdf-merge.description':
		'Birden fazla PDF yi tercih ettiginiz sirada birlestirip tek bir dosya olarak indirin.',
	'tool.pdf-merge.primary_keyword': 'pdf birlestirme',
	'tool.pdf-merge.meta_title': 'Cevrimici PDF Birlestirme - fmtly.dev',
	'tool.pdf-merge.meta_description':
		'Birden fazla PDF yi tarayicida birlestirin ve tek bir PDF olarak indirin. Birlestirmeden once dosya sirasini degistirin.',
	'tool.pdf-merge.operation': 'Birlestir',
	'tool.pdf-merge.faq.0.question': 'Birlestirmeden once dosya sirasini degistirebilir miyim?',
	'tool.pdf-merge.faq.0.answer':
		'Evet. Birlestirmeyi baslatmadan once dosyalari yukari veya asagi tasiyabilirsiniz.',
	'tool.pdf-merge.faq.1.question': 'Dosya sayisi siniri var mi?',
	'tool.pdf-merge.faq.1.answer':
		'Kati bir sayi siniri yoktur, ancak cok buyuk setler bellege bagli olarak daha uzun surebilir.',
	'tool.pdf-merge.faq.2.question': 'Birlestirmeden sonra kalite degisir mi?',
	'tool.pdf-merge.faq.2.answer':
		'Yeniden kodlama uygulanmaz; sayfalar dogrudan yeni bir PDF dosyasina kopyalanir.',
	'tool.pdf-merge.faq.3.question': 'Verilerim gizli mi?',
	'tool.pdf-merge.faq.3.answer':
		'Evet. Tum birlestirme islemleri tarayicinizda yerel olarak yapilir.',
	'tool.pdf-merge.use_case.0': 'Fatura paketlerini tek dosyada toplamak',
	'tool.pdf-merge.use_case.1': 'Teslim oncesi rapor bolumlerini bir araya getirmek',
	'tool.pdf-merge.use_case.2': 'Imzali belge parcalarini sirayla birlestirmek',
	'tool.pdf-merge.use_case.3': 'Proje dokumantasyonunu hizlica bir araya getirmek',
	'tool.pdf-split.display_name': 'PDF Bolme',
	'tool.pdf-split.tagline': 'Bir PDF yi ayri sayfa dosyalarina bolun',
	'tool.pdf-split.description':
		'Ozel sayfa araliklari girerek tek bir PDF yi ayri dosyalara bolun.',
	'tool.pdf-split.primary_keyword': 'pdf bolme',
	'tool.pdf-split.meta_title': 'Cevrimici PDF Sayfa Bolme - fmtly.dev',
	'tool.pdf-split.meta_description':
		'PDF belgelerini sayfa araliklarina gore bolun ve secilen her sayfayi ayri bir PDF dosyasi olarak indirin.',
	'tool.pdf-split.operation': 'Bol',
	'tool.pdf-split.faq.0.question': 'Sayfa araliklari nasil calisir?',
	'tool.pdf-split.faq.0.answer':
		'1,3,5-8 gibi formatlar kullanin. Tekil sayfa ve araliklari ayni giriste birlikte kullanabilirsiniz.',
	'tool.pdf-split.faq.1.question': 'Tum sayfalari bolebilir miyim?',
	'tool.pdf-split.faq.1.answer':
		'Evet. 1-200 gibi tam aralik veya belgenizdeki toplam sayfa sayisini girin.',
	'tool.pdf-split.faq.2.question': 'Sayfalar yeniden numaralandirilir mi?',
	'tool.pdf-split.faq.2.answer': 'Cikti dosyalari adlarinda orijinal sayfa konumlarini korur.',
	'tool.pdf-split.faq.3.question': 'Bu arac gizli dosyalar icin guvenli mi?',
	'tool.pdf-split.faq.3.answer':
		'Evet. Dosya islemleri sunucuya yuklenmeden tamamen tarayicinizda calisir.',
	'tool.pdf-split.use_case.0': 'Musterilere yalnizca gereken sayfalari gondermek',
	'tool.pdf-split.use_case.1': 'Uzun kilavuzlari daha kucuk parcalara ayirmak',
	'tool.pdf-split.use_case.2': 'Belirli bolumleri bagimsiz olarak arsivlemek',
	'tool.pdf-split.use_case.3': 'Sayfa bazli inceleme paketleri hazirlamak',
	'tool.pdf-page-extractor.display_name': 'PDF Sayfa Cikarici',
	'tool.pdf-page-extractor.tagline': 'Belirli sayfalari yeni bir PDF ye cikarin',
	'tool.pdf-page-extractor.description':
		'Ozel sayfalari secin ve yalnizca ihtiyaciniz olan sayfalari iceren yeni bir PDF olusturun.',
	'tool.pdf-page-extractor.primary_keyword': 'pdf den sayfa cikarma',
	'tool.pdf-page-extractor.meta_title': 'PDF Sayfa Cikarma - fmtly.dev',
	'tool.pdf-page-extractor.meta_description':
		'Bir PDF den secilen sayfalari cikarin ve tarayicinizda aninda yeni bir belge olusturun.',
	'tool.pdf-page-extractor.operation': 'Sayfalari Cikar',
	'tool.pdf-page-extractor.faq.0.question': 'Bolme aracindan farki nedir?',
	'tool.pdf-page-extractor.faq.0.answer':
		'Cikarici, secilen sayfalarla tek bir yeni PDF olusturur. Bolme ise birden fazla tek sayfa dosyasi uretir.',
	'tool.pdf-page-extractor.faq.1.question': 'Sayfa sirasini koruyabilir miyim?',
	'tool.pdf-page-extractor.faq.1.answer':
		'Evet. Secilen sayfalar varsayilan olarak artan sirada eklenir.',
	'tool.pdf-page-extractor.faq.2.question': 'Secimde yinelenen sayfalari kaldirabilir miyim?',
	'tool.pdf-page-extractor.faq.2.answer':
		'Evet. Sayfa araliklari islenirken yinelenen sayfalar otomatik olarak tekilleştirilir.',
	'tool.pdf-page-extractor.faq.3.question': 'Yer imleri korunuyor mu?',
	'tool.pdf-page-extractor.faq.3.answer':
		'Bu hafif cikarma akisinda yalnizca sayfa icerigi korunur.',
	'tool.pdf-page-extractor.use_case.0': 'Buyuk dosyalardan odakli paketler olusturmak',
	'tool.pdf-page-extractor.use_case.1': 'Sadece ekleri iceren surumler gondermek',
	'tool.pdf-page-extractor.use_case.2': 'Kanit veya referans alt kumeleri hazirlamak',
	'tool.pdf-page-extractor.use_case.3': 'Kisa ve oz inceleme belgeleri olusturmak',
	'tool.pdf-metadata-viewer.display_name': 'PDF Ustveri Goruntuleyici',
	'tool.pdf-metadata-viewer.tagline': 'PDF ustveri alanlarini ve dosya ayrintilarini inceleyin',
	'tool.pdf-metadata-viewer.description':
		'Baslik, yazar, olusturan, tarihler, sayfa sayisi ve dosya boyutu gibi PDF ustverilerini okuyun.',
	'tool.pdf-metadata-viewer.primary_keyword': 'pdf ustveri',
	'tool.pdf-metadata-viewer.meta_title': 'PDF Ustveri Goruntuleyici - fmtly.dev',
	'tool.pdf-metadata-viewer.meta_description':
		'Belge bilgisi, sayfa sayisi ve dosya boyutu dahil PDF ustverilerini tarayicinizda inceleyin.',
	'tool.pdf-metadata-viewer.operation': 'Incele',
	'tool.pdf-metadata-viewer.faq.0.question': 'Hangi ustveri alanlari gosterilir?',
	'tool.pdf-metadata-viewer.faq.0.answer':
		'Uygunsa baslik, yazar, konu, anahtar kelimeler, olusturan, ureten ve tarih alanlari gosterilir.',
	'tool.pdf-metadata-viewer.faq.1.question': 'Ustveriyi duzenleyebilir miyim?',
	'tool.pdf-metadata-viewer.faq.1.answer':
		'Bu arac salt okunurdur ve hizli ustveri incelemesine odaklanir.',
	'tool.pdf-metadata-viewer.faq.2.question': 'Alanlar bos ise ne olur?',
	'tool.pdf-metadata-viewer.faq.2.answer':
		'Bazi PDF dosyalari tum alanlari tanimlamaz. Eksik degerler kullanilamiyor olarak gosterilir.',
	'tool.pdf-metadata-viewer.faq.3.question': 'Ustveri cikarma yerel mi?',
	'tool.pdf-metadata-viewer.faq.3.answer': 'Evet. Ustveri tamamen tarayicinizda ayrıştırılır.',
	'tool.pdf-metadata-viewer.use_case.0': 'Belge kaynagi alanlarini denetlemek',
	'tool.pdf-metadata-viewer.use_case.1': 'Toplu islem oncesi sayfa sayisini kontrol etmek',
	'tool.pdf-metadata-viewer.use_case.2': 'Yayim ustverilerini hizlica dogrulamak',
	'tool.pdf-metadata-viewer.use_case.3': 'Paylasmadan once dosya ayrintilarini onaylamak',
	'ui.actions.up': 'Yukarı',
	'ui.actions.down': 'Aşağı',
	'ui.actions.remove': 'Kaldır',
	'ui.pdf.select_file': 'PDF seç',
	'ui.pdf.select_file_first': 'Önce bir PDF dosyası seçin',
	'ui.pdf.worker_used': 'Arka planda işlendi',
	'ui.pdf.bytes': 'bayt',
	'ui.pdf.page': 'Sayfa',
	'ui.pdf.page_ranges_placeholder': 'örn. 1,3-5',
	'ui.pdf.upload.aria': 'PDF dosyaları yükle',
	'ui.pdf.upload.drop_title': "PDF'yi buraya bırakın veya dosya seçin",
	'ui.pdf.upload.drop_hint': 'Dosyalar yalnızca bu tarayıcıda kalır; sunucuya yüklenmez.',
	'ui.pdf.upload.browse': 'Dosya seç',
	'ui.pdf.upload.pill_private': 'Gizli',
	'ui.pdf.upload.pill_instant': 'Anında',
	'ui.pdf.upload.pill_local': 'Yalnızca yerel',
	'ui.pdf.upload.keyboard_hint': "Dosya seçmek için tıklayın veya PDF'leri bu alana sürükleyin",
	'ui.pdf.upload.input_aria': 'PDF dosyası seç',
	'ui.pdf.upload.input_aria_multiple': 'PDF dosyaları seç',
	'ui.pdf.ranges_label': 'Sayfa aralıkları',
	'ui.pdf.ranges.help':
		"Sayfaları virgülle ayırın; aralıklar için tire kullanın (sayfa numaraları 1'den başlar). Örnek: 1,3-5,8. Tire ve noktalı virgül kabul edilir.",
	'ui.pdf.ranges.valid_summary': 'Seçimde {n} sayfa',
	'ui.pdf.ranges.document_pages': 'Dosyada {n} sayfa',
	'ui.pdf.ranges.err_empty': 'En az bir sayfa veya aralık girin.',
	'ui.pdf.ranges.err_no_pdf_pages': "Bu PDF'de sayfa yok.",
	'ui.pdf.ranges.err_ambiguous_hyphen':
		'Her aralıkta tek tire kullanın (örn. 3-7). Birden fazla aralığı virgülle ayırın; 1-2-3 gibi yazmayın.',
	'ui.pdf.ranges.err_invalid_number': 'Her öğe tam sayı olmalıdır.',
	'ui.pdf.ranges.err_range_out_of_bounds': 'Bir sayfa bu belgenin dışında.',
	'ui.pdf.ranges.err_invalid_range_bounds': 'Geçersiz aralık — 1 ile son sayfa arasında girin.',
	'ui.pdf.error.load_failed':
		'Bu PDF okunamadı. Dosya bozuk olabilir veya PDF formatında olmayabilir.',
	'ui.pdf.viewer.hero_title': 'PDF görüntüleyici',
	'ui.pdf.viewer.hero_subtitle':
		'Sayfalar arasında gezinin, yakınlaştırın ve küçük önizlemeleri görün — hepsi tarayıcınızda.',
	'ui.pdf.viewer.badge_local': 'Yerel · Sunucuya yükleme yok',
	'ui.pdf.viewer.pages_word': 'sayfa',
	'ui.pdf.viewer.loading': 'PDF yükleniyor…',
	'ui.pdf.viewer.thumbnails_aria': 'Sayfa önizlemeleri',
	'ui.pdf.viewer.thumbnails_heading': 'Önizlemeler',
	'ui.pdf.viewer.page_list_aria': 'Sayfa listesi',
	'ui.pdf.viewer.page_n': 'Sayfa {n}',
	'ui.pdf.viewer.loaded': 'PDF yüklendi',
	'ui.pdf.viewer.error': 'PDF açılamadı',
	'ui.pdf.viewer.render_error': 'Sayfa oluşturulamadı',
	'ui.pdf.viewer.fit_width_error': 'Sayfa genişliğe sığdırılamadı',
	'ui.pdf.viewer.page': 'Sayfa',
	'ui.pdf.viewer.fit_width': 'Genişliğe sığdır',
	'ui.pdf.viewer.reset_zoom': 'Yakınlaştırmayı sıfırla',
	'ui.pdf.viewer.empty': 'Sayfaları önizlemek için bir PDF yükleyin',
	'ui.pdf.viewer.go_page': 'Sayfaya git',
	'ui.pdf.viewer.zoom_slider': 'Yakınlaştırma',
	'ui.pdf.viewer.toolbar_pages': 'Sayfa gezinmesi',
	'ui.pdf.viewer.toolbar_zoom': 'Yakınlaştırma kontrolleri',
	'ui.pdf.to_text.hero_title': 'PDF → metin',
	'ui.pdf.to_text.hero_subtitle':
		'Her sayfadaki düz metni çıkarın. Dosyalar tarayıcınızdan çıkmaz.',
	'ui.pdf.to_text.upload_title': 'Metin çıkarmak için PDF bırakın',
	'ui.pdf.to_text.upload_hint':
		'Sayfa sayfa kopyalayabileceğiniz veya indirebileceğiniz çıktı. Büyük dosyalar arka planda işlenebilir.',
	'ui.pdf.to_text.extract': 'Metni çıkar',
	'ui.pdf.to_text.done': 'Metin çıkarıldı',
	'ui.pdf.to_text.error': 'Metin çıkarılamadı',
	'ui.pdf.to_text.empty': 'İndirilecek çıkarılmış metin yok',
	'ui.pdf.to_text.empty_hint': 'Bir PDF yükleyin ve metni sayfa sayfa çıkarın',
	'ui.pdf.to_text.no_output': 'Henüz çıkarılmış metin yok',
	'ui.pdf.merge.hero_title': 'PDF birleştir',
	'ui.pdf.merge.hero_subtitle':
		'Dosyaları sırayla birleştirin — satırları sürükleyerek sıralayın, tek tıkla birleştirip indirin.',
	'ui.pdf.merge.select_files': 'PDF dosyalarını seç',
	'ui.pdf.merge.select_more': 'En az iki PDF dosyası seçin',
	'ui.pdf.merge.run': 'Birleştir',
	'ui.pdf.merge.done': 'PDF dosyaları birleştirildi',
	'ui.pdf.merge.error': 'PDF dosyaları birleştirilemedi',
	'ui.pdf.merge.no_output': 'İndirilecek birleşik PDF yok',
	'ui.pdf.merge.files_selected': 'dosya seçildi',
	'ui.pdf.merge.empty': 'Birleştirmek için PDF dosyaları ekleyin',
	'ui.pdf.merge.drop_hint':
		"Eklemek için PDF'leri buraya bırakın — sıralamak için satırları sürükleyin",
	'ui.pdf.merge.drop_more': 'Eklemek için daha fazla PDF bırakın',
	'ui.pdf.merge.reorder_drag': 'Sıralamak için sürükleyin',
	'ui.pdf.split.hero_title': 'PDF bölme',
	'ui.pdf.split.hero_subtitle':
		"Özel sayfa aralıkları girerek tek bir PDF'yi ayrı dosyalara bölün. İşlem tamamen tarayıcınızda yapılır.",
	'ui.pdf.split.upload_title': 'Bölmek için PDF bırakın',
	'ui.pdf.split.upload_hint': 'Ardından aşağıya 1,3-5 gibi sayfa aralıklarını girin.',
	'ui.pdf.split.run': 'Böl',
	'ui.pdf.split.done': 'PDF bölme tamamlandı',
	'ui.pdf.split.error': 'PDF bölünemedi',
	'ui.pdf.split.empty_hint': 'Bir PDF yükleyin ve sayfa aralıklarını girin',
	'ui.pdf.split.no_output': 'Bölünmüş dosya oluşturulmadı',
	'ui.pdf.split.use_cases_title': 'Kullanım örnekleri',
	'ui.pdf.split.use_case.0': 'Müşterilere yalnızca gereken sayfaları göndermek',
	'ui.pdf.split.use_case.1': 'Uzun kılavuzları daha küçük parçalara ayırmak',
	'ui.pdf.split.use_case.2': 'Belirli bölümleri bağımsız olarak arşivlemek',
	'ui.pdf.split.use_case.3': 'Sayfa bazlı inceleme paketleri hazırlamak',
	'ui.pdf.extract.hero_title': 'Sayfa çıkarma',
	'ui.pdf.extract.hero_subtitle':
		'Seçtiğiniz sayfalardan tek bir yeni PDF oluşturun — hiçbir şey sunucuya yüklenmez.',
	'ui.pdf.extract.upload_title': 'Sayfa çıkarmak için PDF bırakın',
	'ui.pdf.extract.upload_hint': 'Sayfa aralıklarını seçin, ardından tek bir yeni PDF indirin.',
	'ui.pdf.extract.run': 'Sayfaları çıkar',
	'ui.pdf.extract.done': 'Sayfalar çıkarıldı',
	'ui.pdf.extract.error': 'Sayfalar çıkarılamadı',
	'ui.pdf.extract.no_output': 'İndirilecek çıktı PDF yok',
	'ui.pdf.extract.empty_hint': 'Bir PDF yükleyin ve sayfa aralıklarını seçin',
	'ui.pdf.extract.ready': 'Çıktı PDF indirmeye hazır',
	'ui.pdf.metadata.hero_title': 'PDF üst verisi',
	'ui.pdf.metadata.hero_subtitle':
		'Belge özelliklerini, tarihleri ve sayfa sayısını inceleyin — ayrıştırma tarayıcınızda.',
	'ui.pdf.metadata.upload_title': 'Üst veriyi okumak için PDF bırakın',
	'ui.pdf.metadata.upload_hint': 'Düzenleme yok — hızlı salt okunur inceleme.',
	'ui.pdf.metadata.run': 'Üst veriyi oku',
	'ui.pdf.metadata.done': 'Üst veri yüklendi',
	'ui.pdf.metadata.error': 'Üst veri okunamadı',
	'ui.pdf.metadata.empty_hint': 'Üst veriyi incelemek için bir PDF yükleyin',
	'ui.pdf.metadata.no_output': 'Henüz üst veri yüklenmedi',
	'ui.pdf.metadata.title': 'Başlık',
	'ui.pdf.metadata.author': 'Yazar',
	'ui.pdf.metadata.subject': 'Konu',
	'ui.pdf.metadata.keywords': 'Anahtar kelimeler',
	'ui.pdf.metadata.creator': 'Oluşturan',
	'ui.pdf.metadata.producer': 'Üreten',
	'ui.pdf.metadata.creation_date': 'Oluşturma tarihi',
	'ui.pdf.metadata.modification_date': 'Değiştirme tarihi',
	'ui.pdf.metadata.page_count': 'Sayfa sayısı',
	'ui.pdf.metadata.file_size': 'Dosya boyutu (bayt)',

	// Missing keys from English
	'ui.pdf.merge.merge_hint':
		'1. Dosyaları sıraya koyun · 2. Birleştir’e dokunun · 3. Aşağıdan birleşmiş PDF’i indirin.',
	'ui.pdf.merge.ready_title': 'Birleştirilmiş PDF hazır',
	'ui.pdf.merge.ready_subtitle': 'Çıktı boyutu: {size}. merged.pdf olarak kaydedilir.',
	'ui.pdf.merge.download_primary': 'Birleştirilmiş PDF’i indir',
	'ui.pdf.merge.download_locked': 'Önce Birleştir’e basın — indirme düğmesi burada görünecek.',

	// Missing keys from English
	'tool.json-to-zod.display_name': 'JSON → Zod Şema',
	'tool.json-to-zod.tagline': 'JSON örneğinden Zod şeması üret',
	'tool.json-to-zod.description':
		'Örnek JSON verisinden pratik bir Zod doğrulama şeması çıkarır. Runtime doğrulama ve tipli ayrıştırma için idealdir.',
	'tool.json-to-zod.primary_keyword': 'json to zod',
	'tool.json-to-zod.meta_title': 'JSON to Zod Şema Üretici — fmtly.dev',
	'tool.json-to-zod.meta_description':
		'JSON örneklerinden tarayıcıda anında Zod şeması üretin. Yükleme yok, sunucu yok, hızlı ve güvenli doğrulama başlangıcı.',
	'tool.json-to-zod.operation': 'Üret',
	'tool.json-to-zod.faq.0.question': 'Çıkan şema ne kadar doğru?',
	'tool.json-to-zod.faq.0.answer':
		'Şema örnek girdinin yapısını yansıtır. Daha iyi kapsama için daha temsilî örnekler ekleyin.',
	'tool.json-to-zod.faq.1.question': 'Opsiyonel alanları işaretler mi?',
	'tool.json-to-zod.faq.1.answer':
		'Örneğin bazı kısımlarında bulunmayan alanlar opsiyonel olarak üretilebilir.',
	'tool.json-to-zod.faq.2.question': 'Üretilen şemayı düzenleyebilir miyim?',
	'tool.json-to-zod.faq.2.answer':
		'Evet. Çıktı düz Zod kodudur; projene kopyalayıp özelleştirebilirsin.',
	'tool.json-to-zod.use_case.0': 'API yanıt doğrulayıcılarını hızlı başlatmak',
	'tool.json-to-zod.use_case.1': 'Tip güvenli ayrıştırma sınırları oluşturmak',
	'tool.json-to-zod.use_case.2': 'Formlar için başlangıç şemaları üretmek',
	'tool.json-to-zod.use_case.3': 'Runtime doğrulamaya geçişi hızlandırmak',
	'tool.json-ndjson.display_name': 'JSON Lines (NDJSON) Görüntüleyici',
	'tool.json-ndjson.tagline': 'NDJSON satırlarını ayrıştır ve formatlı incele',
	'tool.json-ndjson.description':
		'Satır bazlı JSON (NDJSON) verisini ayrıştırır, her kaydı satır numarasıyla gösterir. Hatalı satırları hızlıca bulmanı sağlar.',
	'tool.json-ndjson.primary_keyword': 'ndjson viewer',
	'tool.json-ndjson.meta_title': 'NDJSON Görüntüleyici & Formatlayıcı — fmtly.dev',
	'tool.json-ndjson.meta_description':
		'JSON Lines (NDJSON) verisini tarayıcıda ayrıştırın ve formatlayın. Satır bazlı kayıt ve hata görünümüyle anında inceleyin.',
	'tool.json-ndjson.operation': 'Ayrıştır',
	'tool.json-ndjson.faq.0.question': 'Hatalı satırlar olursa ne olur?',
	'tool.json-ndjson.faq.0.answer':
		'Hatalı satırlar satır numarasıyla raporlanır, geçerli satırlar yine de gösterilir.',
	'tool.json-ndjson.faq.1.question': 'Çıktıyı dışa aktarabilir miyim?',
	'tool.json-ndjson.faq.1.answer': 'Evet. Üretilen raporu kopyalayabilir veya indirebilirsin.',
	'tool.json-ndjson.use_case.0': 'JSON Lines log akışlarını incelemek',
	'tool.json-ndjson.use_case.1': 'Büyük NDJSON akışlarında bozuk satırları ayıklamak',
	'tool.json-ndjson.use_case.2': 'Streaming JSON toplu çıktısını doğrulamak',
	'tool.json-from-protobuf.display_name': 'Protocol Buffers → JSON',
	'tool.json-from-protobuf.tagline': '.proto tanımlarından örnek JSON üret',
	'tool.json-from-protobuf.description':
		'Protocol Buffers şemalarını ayrıştırır, seçilen message türleri için örnek JSON payload üretir.',
	'tool.json-from-protobuf.primary_keyword': 'protobuf to json',
	'tool.json-from-protobuf.meta_title': 'Protobuf to JSON Örnek Üretici — fmtly.dev',
	'tool.json-from-protobuf.meta_description':
		'.proto dosyalarını parse edip message tipleri için JSON örnekleri üretin. Hızlı, gizli ve geliştirici dostu.',
	'tool.json-from-protobuf.operation': 'Üret',
	'tool.json-from-protobuf.faq.0.question': 'İç içe message tiplerini destekler mi?',
	'tool.json-from-protobuf.faq.0.answer':
		'Evet. İç içe ve referanslanan message tipleri çözülüp örneğe dahil edilir.',
	'tool.json-from-protobuf.faq.1.question': 'Kök message tipini seçebilir miyim?',
	'tool.json-from-protobuf.faq.1.answer':
		'Evet. Açılır listeden bulunan message tiplerinden birini seçebilirsin.',
	'tool.json-from-protobuf.faq.2.question': 'Proto dosyam sunucuya gider mi?',
	'tool.json-from-protobuf.faq.2.answer':
		'Hayır. Her şey tarayıcıda çalışır; şeman cihazdan çıkmaz.',
	'tool.json-from-protobuf.use_case.0': 'Proto sözleşmelerinden API örnek payload üretmek',
	'tool.json-from-protobuf.use_case.1': 'gRPC gateway için mock yanıt hazırlamak',
	'tool.json-from-protobuf.use_case.2': 'Bilinmeyen protobuf modellerini hızlı anlamak',
	'tool.yaml-resolve-anchors.display_name': 'YAML Anchor Çözücü',
	'tool.yaml-resolve-anchors.tagline': 'YAML anchor ve alias değerlerini aç',
	'tool.yaml-resolve-anchors.description':
		'YAML anchor/alias yapılarını açık değerlere dönüştürür; çıktı referans içermez.',
	'tool.yaml-resolve-anchors.primary_keyword': 'yaml anchor resolver',
	'tool.yaml-resolve-anchors.meta_title': 'YAML Anchor Çözücü — fmtly.dev',
	'tool.yaml-resolve-anchors.meta_description':
		'YAML anchor ve alias yapılarını tarayıcıda anında genişletin. Merge/reference içermeyen açık YAML üretin.',
	'tool.yaml-resolve-anchors.operation': 'Çöz',
	'tool.yaml-resolve-anchors.faq.0.question': 'Merge key değerleri de açılır mı?',
	'tool.yaml-resolve-anchors.faq.0.answer': 'Evet. Merge edilen değerler çıktıya doğrudan yazılır.',
	'tool.yaml-resolve-anchors.faq.1.question': 'Belge düzeni korunur mu?',
	'tool.yaml-resolve-anchors.faq.1.answer':
		'Mantıksal yapı korunur; alias/reference kullanımı kaldırılır.',
	'tool.yaml-resolve-anchors.use_case.0': 'Anchor desteklemeyen sistemler için config hazırlamak',
	'tool.yaml-resolve-anchors.use_case.1': 'Karmaşık YAML’da miras değerleri hata ayıklamak',
	'tool.yaml-resolve-anchors.use_case.2': 'Açık deployment manifest üretmek',
	'tool.yaml-resolve-anchors.use_case.3': 'Diff/review öncesi YAML normalleştirmek',
	'tool.yaml-split.display_name': 'YAML Çoklu Belge Bölücü',
	'tool.yaml-split.tagline': 'Çoklu YAML dosyasını ayrı belgelere böl',
	'tool.yaml-split.description':
		'`---` içeren çoklu YAML dosyalarını ayrı belgelere böler ve tutarlı çıktı üretir.',
	'tool.yaml-split.primary_keyword': 'yaml split',
	'tool.yaml-split.meta_title': 'YAML Çoklu Belge Bölücü — fmtly.dev',
	'tool.yaml-split.meta_description':
		'Çoklu belge YAML dosyalarını tarayıcıda ayrı belgelere bölün. Kubernetes ve CI akışları için idealdir.',
	'tool.yaml-split.operation': 'Böl',
	'tool.yaml-split.faq.0.question': 'Yorumlar korunur mu?',
	'tool.yaml-split.faq.0.answer':
		'Araç yapısal doğruluğa odaklanır; yorumlar/biçim kısmen normalize olabilir.',
	'tool.yaml-split.faq.1.question': 'Tek belgeli YAML’ı işler mi?',
	'tool.yaml-split.faq.1.answer': 'Evet. Tek belgeyi tutarlı biçimde çıktılar.',
	'tool.yaml-split.use_case.0': 'Kubernetes kaynaklarını belge belge ayırmak',
	'tool.yaml-split.use_case.1': 'Uzun config paketlerini parça parça incelemek',
	'tool.yaml-split.use_case.2': 'CI’da belge bazlı işleme hazırlamak',
	'tool.xml-xsd-validate.display_name': 'XSD Doğrulayıcı',
	'tool.xml-xsd-validate.tagline': 'XML’i XSD şemasına göre doğrula',
	'tool.xml-xsd-validate.description':
		'XML içeriklerini XSD ile doğrular; mümkün olduğunda satır/sütun bilgili yapılandırılmış hata çıktısı verir.',
	'tool.xml-xsd-validate.primary_keyword': 'xml xsd validator',
	'tool.xml-xsd-validate.meta_title': 'XML XSD Doğrulayıcı — fmtly.dev',
	'tool.xml-xsd-validate.meta_description':
		'XML’i XSD’ye karşı tarayıcıda doğrulayın. Geçerli/geçersiz sonucu ve detaylı hata listesini anında görün.',
	'tool.xml-xsd-validate.operation': 'Doğrula',
	'tool.xml-xsd-validate.faq.0.question': 'Hem XML hem XSD gerekli mi?',
	'tool.xml-xsd-validate.faq.0.answer':
		'Evet. Doğrulama için XML belgesi ve XSD şemasını birlikte girmeniz gerekir.',
	'tool.xml-xsd-validate.faq.1.question': 'Satır ve sütun bilgisi gösterilir mi?',
	'tool.xml-xsd-validate.faq.1.answer':
		'Doğrulayıcı sağlıyorsa satır/sütun bilgisi sonuçta gösterilir.',
	'tool.xml-xsd-validate.use_case.0': 'Entegrasyon testlerinden önce XML payload doğrulamak',
	'tool.xml-xsd-validate.use_case.1': 'ETL süreçlerinde şema ihlallerini yakalamak',
	'tool.xml-xsd-validate.use_case.2': 'Tedarikçi XML akışlarını hızlı kontrol etmek',
	'tool.csv-columns.display_name': 'CSV Sütun Sırala / Kaldır',
	'tool.csv-columns.tagline': 'CSV sütunlarını sırala, yeniden adlandır, kaldır',
	'tool.csv-columns.description':
		'CSV sütun düzenini hedef sisteme uygun hale getirmek için seçme, sıralama ve ad değiştirme işlemleri yapar.',
	'tool.csv-columns.primary_keyword': 'csv column reorder',
	'tool.csv-columns.meta_title': 'CSV Sütun Sıralama & Kaldırma — fmtly.dev',
	'tool.csv-columns.meta_description':
		'CSV sütunlarını tarayıcıda yeniden sıralayın, adlandırın ve kaldırın. Ayraç ve tırnaklama davranışını koruyun.',
	'tool.csv-columns.operation': 'Dönüştür',
	'tool.csv-columns.faq.0.question': 'Sadece seçili sütunları bırakabilir miyim?',
	'tool.csv-columns.faq.0.answer':
		'Evet. Hedef sütun listesini tanımlayıp diğerlerini çıkarabilirsiniz.',
	'tool.csv-columns.faq.1.question': 'Sıralarken sütun adını da değiştirebilir miyim?',
	'tool.csv-columns.faq.1.answer':
		'Evet. Her kaynak sütunu yeni bir çıktı başlığına eşleyebilirsiniz.',
	'tool.csv-columns.use_case.0': 'Üçüncü parti importlar için CSV hazırlamak',
	'tool.csv-columns.use_case.1': 'Paylaşım öncesi hassas alanları kaldırmak',
	'tool.csv-columns.use_case.2': 'Sistemler arası sütun düzenini normalleştirmek',
	'tool.csv-deduplicate.display_name': 'CSV Tekilleştirici',
	'tool.csv-deduplicate.tagline': 'Anahtar sütunlara göre tekrar eden satırları kaldır',
	'tool.csv-deduplicate.description':
		'Bir veya daha fazla anahtar sütuna göre tekrar eden CSV satırlarını kaldırır, ilk görülen satırı korur.',
	'tool.csv-deduplicate.primary_keyword': 'csv deduplicate',
	'tool.csv-deduplicate.meta_title': 'CSV Tekilleştirici — fmtly.dev',
	'tool.csv-deduplicate.meta_description':
		'Anahtar sütun seçerek tekrar eden CSV satırlarını kaldırın. İlk kaydı koruyup temiz çıktı alın.',
	'tool.csv-deduplicate.operation': 'Tekilleştir',
	'tool.csv-deduplicate.faq.0.question': 'Tekrarlar nasıl belirleniyor?',
	'tool.csv-deduplicate.faq.0.answer':
		'Seçilen anahtar sütun değerleri birebir aynıysa satırlar tekrar kabul edilir.',
	'tool.csv-deduplicate.faq.1.question': 'Hangi satır korunur?',
	'tool.csv-deduplicate.faq.1.answer':
		'Her benzersiz anahtar için ilk görülen satır korunur; girdi sırası bozulmaz.',
	'tool.csv-deduplicate.use_case.0': 'Import öncesi müşteri listelerini temizlemek',
	'tool.csv-deduplicate.use_case.1': 'Analitik CSV’lerinde mükerrer eventleri kaldırmak',
	'tool.csv-deduplicate.use_case.2': 'Birleşik kaynak verilerini normalize etmek',
	'tool.ndjson.entries_title': 'NDJSON kayıtları',
	'tool.json-from-protobuf.message_type': 'Mesaj türü',
	'tool.json-from-protobuf.select_message_type': 'Bir mesaj türü seçin',
	'tool.xml-xsd-validate.xml_label': 'XML',
	'tool.xml-xsd-validate.xsd_label': 'XSD',
	'tool.xml-xsd-validate.result_title': 'Doğrulama sonucu',
	'tool.xml-xsd-validate.empty_hint': 'Doğrulamak için hem XML hem XSD girin.',
	'tool.xml-xsd-validate.xml_well_formed_error': 'XML iyi biçimlendirilmiş değil',
	'tool.xml-xsd-validate.valid': 'XML, XSD ile uyumlu',
	'tool.xml-xsd-validate.invalid': 'XML, XSD ile uyumlu değil',
	'tool.xml-xsd-validate.warnings': '{count} uyarı',
	'tool.xml-xsd-validate.errors_title': 'Hatalar',
	'tool.xml-xsd-validate.warnings_title': 'Uyarılar',
	'tool.xml-xsd-validate.waiting_hint': 'Doğrulama için XSD şeması girin.'
};

export default registryTr;

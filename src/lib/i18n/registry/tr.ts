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
	'ui.text_counter.words': 'Kelime',
	'ui.text_counter.characters': 'Karakter',
	'ui.text_counter.characters_no_spaces': 'Karakter (boşluksuz)',
	'ui.text_counter.sentences': 'Cümle',
	'ui.text_counter.paragraphs': 'Paragraf',
	'ui.text_counter.reading_time': 'Okuma süresi',
	'ui.text_counter.minutes': 'dk',
	'ui.text_counter.lines': 'satır',
	'ui.text_counter.placeholder': 'Metninizi buraya yazın veya yapıştırın...',
	'ui.csv.controls.table_name': 'Tablo Adı',
	'ui.csv.controls.batch_size': 'Batch Boyutu'
};

export default registryTr;

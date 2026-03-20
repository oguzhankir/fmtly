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
		'Ortam değişkeni benzeri yol anahtarlarından iç içe yapıları yeniden üretmek',
	'tool.json-flatten.use_case.3':
		'Büyük JSON belgelerinde dağıtımdan önce yol seviyesinde değişiklikleri ayıklamak',
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

	// Missing keys from English
	'ui.validator.warnings': 'ui.validator.warnings',
	'ui.validator.first_issue': 'ui.validator.first_issue'
};

export default registryTr;

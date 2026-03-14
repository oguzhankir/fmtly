const registryTr: Record<string, string> = {
	// ── Categories ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'JSON verilerini biçimlendirin, doğrulayın, küçültün, karşılaştırın ve dönüştürün. Her araç, gerçek zamanlı hata algılama ve ağaç görünümüyle tarayıcınızda çalışır.',
	'category.json.primary_keyword': 'json araçları',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		"XML belgelerini biçimlendirin, doğrulayın ve dönüştürün. Ayarlanabilir girinti desteği ve JSON veya CSV'ye dönüştürme özelliklerini içerir.",
	'category.xml.primary_keyword': 'xml araçları',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'YAML dosyalarını biçimlendirin, doğrulayın ve dönüştürün. JSON ile çift yönlü dönüştürme ve kesin hata konumlarıyla sözdizimi doğrulaması.',
	'category.yaml.primary_keyword': 'yaml araçları',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'CSV verilerini ayrıştırın, biçimlendirin ve dönüştürün. Özel ayırıcı desteğiyle CSV, JSON ve diğer tablolu formatlar arasında geçiş yapın.',
	'category.csv.primary_keyword': 'csv araçları',
	'category.css.display_name': 'CSS',
	'category.css.description':
		"CSS stil sayfalarını biçimlendirin, küçültün ve optimize edin. Sıkıştırılmış CSS'yi güzelleştirin veya biçimlendirilmiş CSS'yi mülkiyet sıralama seçenekleriyle küçültün.",
	'category.css.primary_keyword': 'css araçları',
	'category.html.display_name': 'HTML',
	'category.html.description':
		"HTML işaretlemelerini biçimlendirin, küçültün ve doğrulayın. Sıkıştırılmış HTML'yi okunur hale getirin veya üretim için boşlukları temizleyin.",
	'category.html.primary_keyword': 'html araçları',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'JavaScript kodunu biçimlendirin ve küçültün. Sıkıştırılmış betikleri güzelleştirin veya daha hızlı sayfa yüklemeleri için küçültülmüş çıktılar oluşturun.',
	'category.js.primary_keyword': 'javascript araçları',
	'category.encode.display_name': 'Kodlayıcılar ve Kod Çözücüler',
	'category.encode.description':
		'Base64, URL, HTML varlıkları ve daha fazlasını kodlayın ve çözün. Tüm işlemler tarayıcınızda anında gerçekleşir, sunucuya veri gönderilmez.',
	'category.encode.primary_keyword': 'kodlayıcı çözücü araçları',
	'category.escape.display_name': 'Kaçış Karakteri Araçları',
	'category.escape.description':
		'JSON, HTML, XML, URL ve düzenli ifadeler için dizeleri kaçış karakterleriyle düzenleyin. Formatlar arasında özel karakterleri güvenle yönetin.',
	'category.escape.primary_keyword': 'string escape araçları',
	'category.diff.display_name': 'Karşılaştırma (Diff)',
	'category.diff.description':
		'İki dosyayı veya veri yapısını yan yana karşılaştırın. JSON, metin ve yapılandırılmış diff desteği ile ekleme ve silmeleri vurgulayın.',
	'category.diff.primary_keyword': 'diff karşılaştırma araçları',
	'category.generate.display_name': 'Oluşturucular',
	'category.generate.description':
		'Tip tanımları, JSON Şeması, Markdown tabloları, sahte test verileri ve diğer geliştirici yardımcılarını tamamen tarayıcınızda oluşturun.',
	'category.generate.primary_keyword': 'kod oluşturucular',
	'category.text.display_name': 'Metin ve Dizeler',
	'category.text.description':
		'Metinleri ve dizeleri biçimlendirin, değiştirin, tersine çevirin, sıralayın ve analiz edin. Kelime sayacı, okunabilirlik puanları ve markdown dönüşümleri dahildir.',
	'category.text.primary_keyword': 'metin araçları',
	'category.color.display_name': 'Renk Araçları',
	'category.color.description':
		'HEX, RGB, HSL ve CSS renk formatları arasında dönüştürün. Renk kontrastını kontrol edin ve erişilebilirlik gereksinimlerini karşılaştırın.',
	'category.color.primary_keyword': 'renk araçları',
	'category.crypto.display_name': 'Kriptografi',
	'category.crypto.description':
		'HMAC imzaları oluşturun, şifre gücünü analiz edin, UUID ve ULID oluşturun ve kriptografik olarak güvenli rastgele diziler üretin. Tüm işlemler tarayıcınızda gerçekleşir.',
	'category.crypto.primary_keyword': 'kriptografi araçları',
	'category.number.display_name': 'Sayı Araçları',
	'category.number.description':
		'Sayıları biçimlendirin, Roma rakamlarına dönüştürün, yüzdeleri hesaplayın, matematiksel istatistikleri bulun ve matris işlemleri yapın.',
	'category.number.primary_keyword': 'sayı araçları',
	'category.image.display_name': 'Görüntü Araçları',
	'category.image.description':
		'Görüntüleri yeniden boyutlandırın, dönüştürün, sıkıştırın ve kodlayın — tümü tarayıcınızda yerel olarak. Yükleme yok, sunucu yok.',
	'category.image.primary_keyword': 'online görüntü araçları',
	'category.file.display_name': 'Dosya Araçları',
	'category.file.description':
		'Dosya hashlerini hesaplayın ve dosyalar arasında format dönüşümleri gerçekleştirin.',
	'category.file.primary_keyword': 'online dosya araçları',
	'category.qr.display_name': 'QR ve Barkod',
	'category.qr.description':
		'Özelleştirilebilir QR kodları oluşturun ve görüntülerden QR kodlarını çözün — tümü tarayıcınızda yerel olarak.',
	'category.qr.primary_keyword': 'qr kod oluşturucu',
	'category.accessibility.display_name': 'Erişilebilirlik',
	'category.accessibility.description':
		'Renk kontrastını test edin, renk körlüğünü simüle edin ve WCAG yazı tipi boyutu gereksinimlerini kontrol edin. Tasarımlarınızın herkes için erişilebilir olduğundan emin olun.',
	'category.accessibility.primary_keyword': 'erişilebilirlik araçları',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'TOML yapılandırma dosyalarını biçimlendirin ve doğrulayın. Sözdizimi hatalarını kesin satır numaralarıyla vurgulayın.',
	'category.toml.primary_keyword': 'toml araçları',
	'category.web.display_name': 'Web Araçları',
	'category.web.description':
		"URL'leri ayrıştırın, User-Agent dizelerini çözümleyin, CORS başlıklarını kontrol edin, MIME türlerini arayın ve IP/DNS sorguları yapın.",
	'category.web.primary_keyword': 'web araçları',
	'category.code.display_name': 'Kod Biçimlendiriciler',
	'category.code.description':
		"CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL ve Markdown formatlarını tamamen yerel olarak düzenleyin. cURL komutlarını fetch() veya Axios'a dönüştürün.",
	'category.code.primary_keyword': 'kod biçimlendirici online',
	'category.pdf.display_name': 'PDF Araçları',
	'category.pdf.description':
		'PDF dosyalarını görüntüleyin, metin çıkarın, birleştirin, bölün ve sayfaları ayıklayın — hepsi tarayıcınızda yerel olarak.',
	'category.pdf.primary_keyword': 'pdf araçları online',

	// ── JSON tools ──────────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'JSON Biçimlendirici',
	'tool.json-formatter.tagline': "JSON'ı ayarlanabilir girinti ile biçimlendirin ve güzelleştirin",
	'tool.json-formatter.description':
		"JSON'ı 2 boşluk, 4 boşluk veya sekmelerle ayarlanabilir girintiyle ayrıştırın ve görüntüleyin. Gerçek zamanlı ayrıştırma, kesin hata konumları ve isteğe bağlı ağaç görünümü.",
	'tool.json-formatter.primary_keyword': 'json biçimlendirici',
	'tool.json-formatter.meta_title': 'JSON Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.json-formatter.meta_description':
		"JSON'ı tarayıcınızda anında biçimlendirin ve güzelleştirin. Ayarlanabilir girinti, gerçek zamanlı hata algılama ve ağaç görünümü. Verileriniz cihazınızdan ayrılmaz.",
	'tool.json-formatter.operation': 'Biçimlendir',

	'tool.json-validator.display_name': 'JSON Doğrulayıcı',
	'tool.json-validator.tagline': 'JSON sözdizimini ve yapısını doğrulayın',
	'tool.json-validator.description':
		'JSON sözdizimini gerçek zamanlı olarak kontrol edin. Eksik parantezleri, sonlandırılmamış dizeleri ve yinelenen anahtarları anında tanımlar. JSON5 yorumlarını ve sonda virgülleri destekler.',
	'tool.json-validator.primary_keyword': 'json doğrulayıcı',
	'tool.json-validator.meta_title': 'JSON Doğrulayıcı — fmtly.dev',
	'tool.json-validator.meta_description':
		"JSON'ı tarayıcınızda anında doğrulayın. Sözdizimi hatalarını kesin satır ve sütun numaralarıyla tespit eder. Verileriniz cihazınızdan ayrılmaz.",
	'tool.json-validator.operation': 'Doğrula',

	'tool.json-minifier.display_name': 'JSON Küçültücü',
	'tool.json-minifier.tagline': "Boşlukları kaldırın ve JSON'ı minimum boyuta sıkıştırın",
	'tool.json-minifier.description':
		"JSON'dan tüm boşlukları çıkararak mümkün olan en küçük çıktıyı üretin. Önce JSON'ı doğrular, ardından girintiyi, yeni satırları ve boşlukları kaldırır.",
	'tool.json-minifier.primary_keyword': 'json küçültücü',
	'tool.json-minifier.meta_title': 'JSON Küçültücü — fmtly.dev',
	'tool.json-minifier.meta_description':
		"JSON'ı tarayıcınızda anında küçültün. Tüm boşlukları kaldırır ve kompakt çıktı üretir. Verileriniz cihazınızdan ayrılmaz.",
	'tool.json-minifier.operation': 'Küçült',

	'tool.json-to-yaml.display_name': "JSON'dan YAML'a",
	'tool.json-to-yaml.tagline': 'JSON verilerini YAML formatına dönüştürün',
	'tool.json-to-yaml.description':
		"JSON'ı uygun girinti ve biçimlendirme ile YAML'a dönüştürün. İç içe nesneleri, dizileri ve tüm JSON veri türlerini işler.",
	'tool.json-to-yaml.primary_keyword': 'jsondan yaml a',
	'tool.json-to-yaml.meta_title': "JSON'dan YAML'a Dönüştürücü — fmtly.dev",
	'tool.json-to-yaml.meta_description':
		"JSON'ı tarayıcınızda anında YAML'a dönüştürün. İç içe yapıları ve tüm veri türlerini işler. Veri yüklenmez.",
	'tool.json-to-yaml.operation': 'Dönüştür',

	'tool.json-to-toml.display_name': "JSON'dan TOML'a",
	'tool.json-to-toml.tagline': 'JSON verilerini TOML yapılandırma formatına dönüştürün',
	'tool.json-to-toml.description':
		"JSON'ı, yapılandırma dosyaları için ideal olan TOML formatına dönüştürün. İç içe tablolar ve satır içi dizileri destekler.",
	'tool.json-to-toml.primary_keyword': 'jsondan tom la',
	'tool.json-to-toml.meta_title': "JSON'dan TOML'a Dönüştürücü — fmtly.dev",
	'tool.json-to-toml.meta_description':
		"JSON'ı tarayıcınızda anında TOML'a dönüştürün. İç içe yapıları ve dizileri işler. Veri yüklenmez.",
	'tool.json-to-toml.operation': 'Dönüştür',

	'tool.json-to-markdown.display_name': "JSON'dan Markdown Tablosuna",
	'tool.json-to-markdown.tagline': 'JSON dizilerini Markdown tablolarına dönüştürün',
	'tool.json-to-markdown.description':
		'JSON nesne dizilerini biçimlendirilmiş Markdown tablolarına dönüştürün. Sütun başlıklarını nesne anahtarlarından otomatik olarak algılar.',
	'tool.json-to-markdown.primary_keyword': 'jsondan markdown tablosuna',
	'tool.json-to-markdown.meta_title': "JSON'dan Markdown Tablosuna Dönüştürücü — fmtly.dev",
	'tool.json-to-markdown.meta_description':
		'JSON dizilerini tarayıcınızda anında Markdown tablolarına dönüştürün. Başlıkları otomatik olarak algılar ve verileri biçimlendirir. Verileriniz cihazınızdan ayrılmaz.',
	'tool.json-to-markdown.operation': 'Dönüştür',

	'tool.json-to-xml.display_name': "JSON'dan XML'e",
	'tool.json-to-xml.tagline': 'JSON verilerini XML formatına dönüştürün',
	'tool.json-to-xml.description':
		"JSON nesnelerini ve dizilerini iyi biçimlendirilmiş XML'e dönüştürün. İç içe yapıları ve yapılandırılabilir kök öğe adlarını işler.",
	'tool.json-to-xml.primary_keyword': 'jsondan xml e',
	'tool.json-to-xml.meta_title': "JSON'dan XML'e Dönüştürücü — fmtly.dev",
	'tool.json-to-xml.meta_description':
		"JSON'ı tarayıcınızda anında XML'e dönüştürün. İyi biçimlendirilmiş XML üretir. Veri yüklenmez.",
	'tool.json-to-xml.operation': 'Dönüştür',

	'tool.json-to-csv.display_name': "JSON'dan CSV'ye",
	'tool.json-to-csv.tagline': 'JSON dizilerini CSV formatına dönüştürün',
	'tool.json-to-csv.description':
		'JSON nesne dizilerini CSV formatına dönüştürün. Sütun başlıklarını nesne anahtarlarından otomatik olarak çıkarır.',
	'tool.json-to-csv.primary_keyword': 'jsondan csv ye',
	'tool.json-to-csv.meta_title': "JSON'dan CSV'ye Dönüştürücü — fmtly.dev",
	'tool.json-to-csv.meta_description':
		"JSON dizilerini tarayıcınızda anında CSV'ye dönüştürün. Başlıkları otomatik olarak algılar. Veri yüklenmez.",
	'tool.json-to-csv.operation': 'Dönüştür',

	'tool.json-jsonpath.display_name': 'JSONPath Sorgusu',
	'tool.json-jsonpath.tagline': 'JSON verilerini JSONPath ifadeleriyle sorgulayın',
	'tool.json-jsonpath.description':
		'Belirli değerleri çıkarmak için JSONPath ifadelerini JSON verilerine karşı çalıştırın. Filtreleri, joker karakterleri, özyinelemeli inişi ve tüm standart JSONPath operatörlerini destekler.',
	'tool.json-jsonpath.primary_keyword': 'jsonpath sorgusu',
	'tool.json-jsonpath.meta_title': 'JSONPath Sorgu Aracı — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'JSON verilerini JSONPath ifadeleriyle tarayıcınızda sorgulayın. Tüm operatörleri destekler. Veri yüklenmez.',
	'tool.json-jsonpath.operation': 'Sorgula',

	'tool.json-jmespath.display_name': 'JMESPath Sorgusu',
	'tool.json-jmespath.tagline': "JSON'ı JMESPath ifadeleriyle sorgulayın ve dönüştürün",
	'tool.json-jmespath.description':
		'JSON verilerini sorgulamak ve dönüştürmek için JMESPath ifadelerini JSON verilerine karşı çalıştırın. Projeksiyonları, filtreleri, çoklu seçimi ve tüm JMESPath işlevlerini destekler.',
	'tool.json-jmespath.primary_keyword': 'jmespath sorgusu',
	'tool.json-jmespath.meta_title': 'JMESPath Sorgu Aracı — fmtly.dev',
	'tool.json-jmespath.meta_description':
		"JSON'ı JMESPath ile tarayıcınızda sorgulayın ve dönüştürün. Tüm operatörleri ve işlevleri destekler. Veri yüklenmez.",
	'tool.json-jmespath.operation': 'Sorgula',

	// ── XML tools ───────────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'XML Biçimlendirici',
	'tool.xml-formatter.tagline': "XML'i ayarlanabilir boşlukla güzelleştirin ve girintileyin",
	'tool.xml-formatter.description':
		'XML belgelerini 2 boşluk, 4 boşluk veya sekmeyle girintileyin ve biçimlendirin. XML yapısını doğrular ve hataları kesin satır numaralarıyla vurgular.',
	'tool.xml-formatter.primary_keyword': 'xml biçimlendirici',
	'tool.xml-formatter.meta_title': 'XML Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.xml-formatter.meta_description':
		"XML'i tarayıcınızda biçimlendirin ve güzelleştirin. Ayarlanabilir girinti ve gerçek zamanlı doğrulama. Verileriniz cihazınızdan ayrılmaz.",
	'tool.xml-formatter.operation': 'Biçimlendir',

	'tool.xml-validator.display_name': 'XML Doğrulayıcı',
	'tool.xml-validator.tagline': 'XML sözdizimini ve iyi biçimlendirilmişliğini doğrulayın',
	'tool.xml-validator.description':
		"XML'i iyi biçimlendirilmişlik kurallarına göre doğrulayın. Kesin hata konumlarıyla kapatılmamış etiketleri, hatalı biçimlendirilmiş öznitelikleri ve geçersiz karakterleri tanımlar.",
	'tool.xml-validator.primary_keyword': 'xml doğrulayıcı',
	'tool.xml-validator.meta_title': 'XML Doğrulayıcı — fmtly.dev',
	'tool.xml-validator.meta_description':
		"XML'i tarayıcınızda doğrulayın. Sözdizimi hatalarını satır ve sütun numaralarıyla tespit eder. Verileriniz cihazınızdan ayrılmaz.",
	'tool.xml-validator.operation': 'Doğrula',

	'tool.xml-to-json.display_name': "XML'den JSON'a",
	'tool.xml-to-json.tagline': 'XML belgelerini JSON formatına dönüştürün',
	'tool.xml-to-json.description':
		"XML'i otomatik öznitelik ve öğe eşleme ile JSON'a dönüştürün. Ad alanlarını, CDATA bölümlerini ve iç içe XML yapılarını işler.",
	'tool.xml-to-json.primary_keyword': 'xmlden json a',
	'tool.xml-to-json.meta_title': "XML'den JSON'a Dönüştürücü — fmtly.dev",
	'tool.xml-to-json.meta_description':
		"XML'i tarayıcınızda anında JSON'a dönüştürün. Öznitelikleri ve iç içe yapıları işler. Veri yüklenmez.",
	'tool.xml-to-json.operation': 'Dönüştür',

	'tool.xml-to-yaml.display_name': "XML'den YAML'a",
	'tool.xml-to-yaml.tagline': 'XML belgelerini YAML formatına dönüştürün',
	'tool.xml-to-yaml.description':
		"XML'i uygun girinti ile YAML formatına dönüştürün. Öznitelikleri, metin içeriğini ve iç içe XML öğelerini işler.",
	'tool.xml-to-yaml.primary_keyword': 'xmlden yaml a',
	'tool.xml-to-yaml.meta_title': "XML'den YAML'a Dönüştürücü — fmtly.dev",
	'tool.xml-to-yaml.meta_description':
		"XML'i tarayıcınızda anında YAML'a dönüştürün. Öznitelikleri ve iç içe öğeleri işler. Veri yüklenmez.",
	'tool.xml-to-yaml.operation': 'Dönüştür',

	'tool.xml-to-csv.display_name': "XML'den CSV'ye",
	'tool.xml-to-csv.tagline': 'XML kayıtlarını CSV formatına dönüştürün',
	'tool.xml-to-csv.description':
		'Tekrarlayan XML öğelerini CSV satırlarına çıkarın. Sütun başlıklarını öğe ve öznitelik adlarından otomatik olarak algılar.',
	'tool.xml-to-csv.primary_keyword': 'xmlden csv ye',
	'tool.xml-to-csv.meta_title': "XML'den CSV'ye Dönüştürücü — fmtly.dev",
	'tool.xml-to-csv.meta_description':
		"XML'i tarayıcınızda anında CSV'ye dönüştürün. Başlıkları öğe adlarından otomatik olarak algılar. Veri yüklenmez.",
	'tool.xml-to-csv.operation': 'Dönüştür',

	'tool.xml-minifier.display_name': 'XML Küçültücü',
	'tool.xml-minifier.tagline': "Boşlukları kaldırın ve XML'i sıkıştırın",
	'tool.xml-minifier.description':
		"Kompakt çıktı üretmek için XML'den tüm boşlukları ve yorumları çıkarın. Önce XML'i doğrular, ardından dosya boyutunu küçültmek için küçültür.",
	'tool.xml-minifier.primary_keyword': 'xml küçültücü',
	'tool.xml-minifier.meta_title': 'XML Küçültücü — fmtly.dev',
	'tool.xml-minifier.meta_description':
		"XML'i tarayıcınızda anında küçültün. Boşlukları ve yorumları kaldırır. Verileriniz cihazınızdan ayrılmaz.",
	'tool.xml-minifier.operation': 'Küçült',

	'tool.xml-xpath.display_name': 'XPath Sorgusu',
	'tool.xml-xpath.tagline': 'XML verilerini XPath ifadeleriyle sorgulayın',
	'tool.xml-xpath.description':
		'XPath 1.0 ifadelerini XML belgelerine karşı çalıştırın. Öğe seçimini, öznitelik filtrelemeyi ve tüm standart XPath eksenlerini ve işlevlerini destekler.',
	'tool.xml-xpath.primary_keyword': 'xpath sorgusu',
	'tool.xml-xpath.meta_title': 'XPath Sorgu Aracı — fmtly.dev',
	'tool.xml-xpath.meta_description':
		"XML'i XPath ifadeleriyle tarayıcınızda sorgulayın. Tüm XPath 1.0 operatörlerini destekler. Veri yüklenmez.",
	'tool.xml-xpath.operation': 'Sorgula',

	// ── YAML tools ──────────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'YAML Biçimlendirici',
	'tool.yaml-formatter.tagline': "YAML'ı tutarlı girinti ile biçimlendirin ve güzelleştirin",
	'tool.yaml-formatter.description':
		'YAML dosyalarını tutarlı 2 boşluk girintisiyle biçimlendirin. YAML sözdizimini doğrular ve tırnaklama, çapalar ve anahtar sıralamasını normalleştirir.',
	'tool.yaml-formatter.primary_keyword': 'yaml biçimlendirici',
	'tool.yaml-formatter.meta_title': 'YAML Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		"YAML'ı tarayıcınızda biçimlendirin ve güzelleştirin. Sözdizimini doğrular ve girintiyi normalleştirir. Verileriniz cihazınızdan ayrılmaz.",
	'tool.yaml-formatter.operation': 'Biçimlendir',

	'tool.yaml-validator.display_name': 'YAML Doğrulayıcı',
	'tool.yaml-validator.tagline': 'YAML sözdizimini ve yapısını doğrulayın',
	'tool.yaml-validator.description':
		'YAML belgelerini sözdizimi hataları için doğrulayın. Girinti sorunlarını, yinelenen anahtarları ve geçersiz karakterleri kesin satır numaralarıyla tanımlar.',
	'tool.yaml-validator.primary_keyword': 'yaml doğrulayıcı',
	'tool.yaml-validator.meta_title': 'YAML Doğrulayıcı — fmtly.dev',
	'tool.yaml-validator.meta_description':
		"YAML'ı tarayıcınızda doğrulayın. Sözdizimi hatalarını satır numaralarıyla tespit eder. Verileriniz cihazınızdan ayrılmaz.",
	'tool.yaml-validator.operation': 'Doğrula',

	'tool.yaml-to-json.display_name': "YAML'dan JSON'a",
	'tool.yaml-to-json.tagline': "YAML'ı JSON formatına dönüştürün",
	'tool.yaml-to-json.description':
		"YAML belgelerini biçimlendirilmiş JSON'a dönüştürün. Çapaları, takma adları, çoklu belge YAML'ını ve tüm YAML veri türlerini işler.",
	'tool.yaml-to-json.primary_keyword': 'yamldan json a',
	'tool.yaml-to-json.meta_title': "YAML'dan JSON'a Dönüştürücü — fmtly.dev",
	'tool.yaml-to-json.meta_description':
		"YAML'ı tarayıcınızda anında JSON'a dönüştürün. Çapaları, takma adları ve çoklu belge YAML'ını işler. Veri yüklenmez.",
	'tool.yaml-to-json.operation': 'Dönüştür',

	'tool.yaml-to-xml.display_name': "YAML'dan XML'e",
	'tool.yaml-to-xml.tagline': "YAML'ı XML formatına dönüştürün",
	'tool.yaml-to-xml.description':
		"YAML belgelerini iyi biçimlendirilmiş XML'e dönüştürün. YAML anahtarlarını XML öğelerine eşler ve iç içe yapıları ve dizileri işler.",
	'tool.yaml-to-xml.primary_keyword': 'yamldan xml e',
	'tool.yaml-to-xml.meta_title': "YAML'dan XML'e Dönüştürücü — fmtly.dev",
	'tool.yaml-to-xml.meta_description':
		"YAML'ı tarayıcınızda anında XML'e dönüştürün. Veri yüklenmez.",
	'tool.yaml-to-xml.operation': 'Dönüştür',

	'tool.yaml-to-csv.display_name': "YAML'dan CSV'ye",
	'tool.yaml-to-csv.tagline': 'YAML dizilerini CSV formatına dönüştürün',
	'tool.yaml-to-csv.description':
		'YAML nesne dizilerini CSV formatına dönüştürün. Başlıkları nesne anahtarlarından çıkarır ve verileri satırlara biçimlendirir.',
	'tool.yaml-to-csv.primary_keyword': 'yamldan csv ye',
	'tool.yaml-to-csv.meta_title': "YAML'dan CSV'ye Dönüştürücü — fmtly.dev",
	'tool.yaml-to-csv.meta_description':
		"YAML'ı tarayıcınızda anında CSV'ye dönüştürün. Veri yüklenmez.",
	'tool.yaml-to-csv.operation': 'Dönüştür',

	'tool.yaml-to-toml.display_name': "YAML'dan TOML'a",
	'tool.yaml-to-toml.tagline': "YAML'ı TOML yapılandırma formatına dönüştürün",
	'tool.yaml-to-toml.description':
		'YAML yapılandırma dosyalarını TOML formatına dönüştürün. İç içe tablolar, diziler ve tüm YAML veri türlerini işler.',
	'tool.yaml-to-toml.primary_keyword': 'yamldan tom la',
	'tool.yaml-to-toml.meta_title': "YAML'dan TOML'a Dönüştürücü — fmtly.dev",
	'tool.yaml-to-toml.meta_description':
		"YAML'ı tarayıcınızda anında TOML'a dönüştürün. Veri yüklenmez.",
	'tool.yaml-to-toml.operation': 'Dönüştür',

	'tool.yaml-diff.display_name': 'YAML Diff',
	'tool.yaml-diff.tagline': 'İki YAML belgesini yan yana karşılaştırın',
	'tool.yaml-diff.description':
		'İki YAML belgesini karşılaştırın ve eklemeleri, silmeleri ve değişiklikleri vurgulayın. Anlamsal karşılaştırma için YAML yapısını anlar.',
	'tool.yaml-diff.primary_keyword': 'yaml diff',
	'tool.yaml-diff.meta_title': 'YAML Diff Aracı — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'İki YAML belgesini tarayıcınızda karşılaştırın. Tüm eklemeleri, silmeleri ve değişiklikleri vurgular. Veri yüklenmez.',
	'tool.yaml-diff.operation': 'Karşılaştır',

	// ── CSV tools ───────────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': "CSV'den JSON'a",
	'tool.csv-to-json.tagline': 'CSV verilerini bir JSON dizisine dönüştürün',
	'tool.csv-to-json.description':
		"Başlıklı CSV'yi bir nesne JSON dizisine dönüştürün. Sayılar ve boole değerleri için dinamik tür algılamayı ve özel ayırıcı seçeneklerini destekler.",
	'tool.csv-to-json.primary_keyword': 'csvden json a',
	'tool.csv-to-json.meta_title': "CSV'den JSON'a Dönüştürücü — fmtly.dev",
	'tool.csv-to-json.meta_description':
		"CSV'yi tarayıcınızda anında JSON'a dönüştürün. Başlıkları, dinamik türlemeyi ve özel ayırıcıları destekler. Veri yüklenmez.",
	'tool.csv-to-json.operation': 'Dönüştür',
	'tool.csv-to-json.faq.0.question': 'Bu araç veri türlerini algılar mı?',
	'tool.csv-to-json.faq.0.answer':
		'Evet. Sayılar ve boole değerleri otomatik olarak algılanır ve dizeler yerine JSON karşılıklarına dönüştürülür.',
	'tool.csv-to-json.faq.1.question': 'Başlıksız CSV dosyaları ne olacak?',
	'tool.csv-to-json.faq.1.answer':
		'Başlıklar seçeneğini kapatabilirsiniz. Başlıksız olarak, her satır bir nesne yerine bir JSON değer dizisi olur.',
	'tool.csv-to-json.use_case.0':
		"Web uygulamaları için elektronik tablo dışa aktarımlarını JSON'a dönüştürmek",
	'tool.csv-to-json.use_case.1': "CSV veri akışlarını API'ler için JSON'a dönüştürmek",
	'tool.csv-to-json.use_case.2': 'CSV verilerini JavaScript uygulamalarına aktarmak',
	'tool.csv-to-json.use_case.3':
		"CSV formatındaki günlük dosyalarını yapılandırılmış JSON'a dönüştürmek",

	'tool.csv-to-xml.display_name': "CSV'den XML'e",
	'tool.csv-to-xml.tagline': 'CSV verilerini XML formatına dönüştürün',
	'tool.csv-to-xml.description':
		"CSV dosyalarını iyi biçimlendirilmiş XML'e dönüştürün. Sütun başlıklarını öğe adlarına eşler ve her kayıt için satır öğeleri oluşturur.",
	'tool.csv-to-xml.primary_keyword': 'csvden xml e',
	'tool.csv-to-xml.meta_title': "CSV'den XML'e Dönüştürücü — fmtly.dev",
	'tool.csv-to-xml.meta_description':
		"CSV'yi tarayıcınızda anında XML'e dönüştürün. Başlıkları öğe adlarına eşler. Veri yüklenmez.",
	'tool.csv-to-xml.operation': 'Dönüştür',

	'tool.csv-to-yaml.display_name': "CSV'den YAML'a",
	'tool.csv-to-yaml.tagline': 'CSV verilerini YAML formatına dönüştürün',
	'tool.csv-to-yaml.description':
		'CSV dosyalarını YAML nesne dizilerine dönüştürün. Sütun başlıklarını her satır için YAML anahtarlarına eşler.',
	'tool.csv-to-yaml.primary_keyword': 'csvden yaml a',
	'tool.csv-to-yaml.meta_title': "CSV'den YAML'a Dönüştürücü — fmtly.dev",
	'tool.csv-to-yaml.meta_description':
		"CSV'yi tarayıcınızda anında YAML'a dönüştürün. Veri yüklenmez.",
	'tool.csv-to-yaml.operation': 'Dönüştür',

	'tool.csv-to-html.display_name': "CSV'den HTML Tablosuna",
	'tool.csv-to-html.tagline': 'CSV verilerini bir HTML tablosuna dönüştürün',
	'tool.csv-to-html.description':
		'CSV dosyalarını biçimlendirilmiş HTML tablolarına dönüştürün. İlk satırı sütun başlıkları olarak kullanır.',
	'tool.csv-to-html.primary_keyword': 'csvden html tablosuna',
	'tool.csv-to-html.meta_title': "CSV'den HTML Tablosuna Dönüştürücü — fmtly.dev",
	'tool.csv-to-html.meta_description':
		"CSV'yi tarayıcınızda anında HTML tablosuna dönüştürün. Veri yüklenmez.",
	'tool.csv-to-html.operation': 'Dönüştür',

	'tool.csv-formatter.display_name': 'CSV Biçimlendirici',
	'tool.csv-formatter.tagline': 'CSV verilerini biçimlendirin ve normalleştirin',
	'tool.csv-formatter.description':
		'Tutarlı ayırıcılar, tırnaklama ve satır sonları ile CSV verilerini temizleyin ve biçimlendirin. CSV yapısını doğrular ve boşlukları normalleştirir.',
	'tool.csv-formatter.primary_keyword': 'csv biçimlendirici',
	'tool.csv-formatter.meta_title': 'CSV Biçimlendirici — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'CSV verilerini tarayıcınızda biçimlendirin ve temizleyin. Veri yüklenmez.',
	'tool.csv-formatter.operation': 'Biçimlendir',

	'tool.csv-validator.display_name': 'CSV Doğrulayıcı',
	'tool.csv-validator.tagline': 'CSV yapısını ve sözdizimini doğrulayın',
	'tool.csv-validator.description':
		'CSV dosyalarını tutarlı sütun sayıları, uygun tırnaklama ve kodlama sorunları için doğrulayın. Kesin satır numaralarıyla hatalı biçimlendirilmiş satırları tanımlar.',
	'tool.csv-validator.primary_keyword': 'csv doğrulayıcı',
	'tool.csv-validator.meta_title': 'CSV Doğrulayıcı — fmtly.dev',
	'tool.csv-validator.meta_description':
		"CSV'yi tarayıcınızda doğrulayın. Yapı hatalarını satır numaralarıyla tespit eder. Verileriniz cihazınızdan ayrılmaz.",
	'tool.csv-validator.operation': 'Doğrula',

	// ── Text tools ──────────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Kelime Sayacı',
	'tool.text-word-counter.tagline': 'Metindeki kelimeleri, karakterleri ve cümleleri sayın',
	'tool.text-word-counter.description':
		'Herhangi bir metindeki kelimeleri, karakterleri, cümleleri ve paragrafları sayın. Okuma süresi tahminlerini ve ortalama kelime uzunluğunu gösterir.',
	'tool.text-word-counter.primary_keyword': 'kelime sayacı',
	'tool.text-word-counter.meta_title': 'Kelime Sayacı — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Kelime, karakter ve cümleleri tarayıcınızda sayın. Okuma süresi tahminleri dahildir. Veri yüklenmez.',
	'tool.text-word-counter.operation': 'Say',

	'tool.text-readability.display_name': 'Okunabilirlik Analizörü',
	'tool.text-readability.tagline': 'Metin okunabilirlik puanlarını ölçün',
	'tool.text-readability.description':
		'Herhangi bir metin için Flesch-Kincaid, Gunning Fog ve diğer okunabilirlik puanlarını hesaplayın. İçeriğinizi hedef kitleniz için optimize etmeye yardımcı olur.',
	'tool.text-readability.primary_keyword': 'okunabilirlik analizörü',
	'tool.text-readability.meta_title': 'Okunabilirlik Analizörü — fmtly.dev',
	'tool.text-readability.meta_description':
		'Metin okunabilirliğini tarayıcınızda Flesch-Kincaid ve diğer puanlarla ölçün. Veri yüklenmez.',
	'tool.text-readability.operation': 'Analiz Et',

	'tool.text-line-sorter.display_name': 'Satır Sıralayıcı',
	'tool.text-line-sorter.tagline': 'Metin satırlarını alfabetik veya uzunluğa göre sıralayın',
	'tool.text-line-sorter.description':
		'Satırları alfabetik olarak, sayısal olarak veya uzunluğa göre sıralayın. Artan ve azalan sıralamayı ve büyük/küçük harf duyarsız sıralamayı destekler.',
	'tool.text-line-sorter.primary_keyword': 'satır sıralayıcı',
	'tool.text-line-sorter.meta_title': 'Satır Sıralayıcı — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Metin satırlarını tarayıcınızda sıralayın. Alfabetik, sayısal ve uzunluk tabanlı sıralamayı destekler. Veri yüklenmez.',
	'tool.text-line-sorter.operation': 'Sırala',

	'tool.text-deduplicate.display_name': 'Yinelenen Satır Kaldırıcı',
	'tool.text-deduplicate.tagline': 'Metindeki yinelenen satırları kaldırın',
	'tool.text-deduplicate.description':
		'Herhangi bir metinden yinelenen satırları kaldırın. Büyük/küçük harf duyarlı ve duyarsız eşleştirmeyi destekler ve orijinal satır sırasını korur.',
	'tool.text-deduplicate.primary_keyword': 'yinelenen satırları kaldır',
	'tool.text-deduplicate.meta_title': 'Yinelenen Satır Kaldırıcı — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Metindeki yinelenen satırları tarayıcınızda kaldırın. Büyük/küçük harf duyarlı ve duyarsız seçenekler. Veri yüklenmez.',
	'tool.text-deduplicate.operation': 'Yinelemeleri Kaldır',

	'tool.text-whitespace.display_name': 'Boşluk Temizleyici',
	'tool.text-whitespace.tagline': 'Ekstra boşlukları kaldırın ve aralığı normalleştirin',
	'tool.text-whitespace.description':
		'Metinden fazla boşlukları, sekmeleri ve boş satırları kaldırın. Birden çok boşluğu tek boşluğa normalleştirir ve baştaki ve sondaki boşlukları kırpar.',
	'tool.text-whitespace.primary_keyword': 'boşluk temizleyici',
	'tool.text-whitespace.meta_title': 'Boşluk Temizleyici — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Metindeki ekstra boşlukları tarayıcınızda kaldırın. Aralığı normalleştirir ve satırları kırpır. Veri yüklenmez.',
	'tool.text-whitespace.operation': 'Temizle',

	'tool.text-markdown-to-html.display_name': "Markdown'dan HTML'e",
	'tool.text-markdown-to-html.tagline': "Markdown'ı HTML'ye dönüştürün",
	'tool.text-markdown-to-html.description':
		"Markdown metnini HTML'ye dönüştürün. Başlıkları, listeleri, tabloları, kod bloklarını, bağlantıları, görselleri ve tüm CommonMark özelliklerini destekler.",
	'tool.text-markdown-to-html.primary_keyword': 'markdowndan html e',
	'tool.text-markdown-to-html.meta_title': "Markdown'dan HTML'e Dönüştürücü — fmtly.dev",
	'tool.text-markdown-to-html.meta_description':
		"Markdown'ı tarayıcınızda anında HTML'ye dönüştürün. Tüm CommonMark özelliklerini destekler. Veri yüklenmez.",
	'tool.text-markdown-to-html.operation': 'Dönüştür',

	'tool.text-html-to-markdown.display_name': "HTML'den Markdown'a",
	'tool.text-html-to-markdown.tagline': "HTML'yi Markdown'a dönüştürün",
	'tool.text-html-to-markdown.description':
		"HTML'yi temiz Markdown'a dönüştürün. Başlıkları, paragrafları, listeleri, tabloları, kod bloklarını ve satır içi biçimlendirmeyi işler.",
	'tool.text-html-to-markdown.primary_keyword': 'htmlden markdown a',
	'tool.text-html-to-markdown.meta_title': "HTML'den Markdown'a Dönüştürücü — fmtly.dev",
	'tool.text-html-to-markdown.meta_description':
		"HTML'yi tarayıcınızda anında Markdown'a dönüştürün. Veri yüklenmez.",
	'tool.text-html-to-markdown.operation': 'Dönüştür',

	'tool.text-reverser.display_name': 'Metin Ters Çevirici',
	'tool.text-reverser.tagline': 'Metni, kelimeleri veya satırları tersine çevirin',
	'tool.text-reverser.description':
		'Metni karakter karakter, kelime kelime veya satır satır tersine çevirin. Çift yönlü — her iki yönde de yapıştırabilirsiniz.',
	'tool.text-reverser.primary_keyword': 'metin ters çevirici',
	'tool.text-reverser.meta_title': 'Metin Ters Çevirici — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Metni tarayıcınızda anında tersine çevirin. Karakterleri, kelimeleri veya satırları tersine çevirin. Veri yüklenmez.',
	'tool.text-reverser.operation': 'Ters Çevir',

	// ── Code tools ──────────────────────────────────────────────────────────
	'tool.code-css.display_name': 'CSS Biçimlendirici',
	'tool.code-css.tagline': 'CSS stil sayfalarını biçimlendirin ve güzelleştirin',
	'tool.code-css.description':
		"CSS'i tutarlı girinti ve özellik sıralamasıyla biçimlendirin. Ayarlanabilir satır genişliği ile Prettier stili biçimlendirmeyi destekler.",
	'tool.code-css.primary_keyword': 'css biçimlendirici',
	'tool.code-css.meta_title': 'CSS Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-css.meta_description':
		"CSS'i tarayıcınızda biçimlendirin ve güzelleştirin. Ayarlanabilir girinti ve özellik sıralaması. Verileriniz cihazınızdan ayrılmaz.",
	'tool.code-css.operation': 'Biçimlendir',

	'tool.code-scss.display_name': 'SCSS Biçimlendirici',
	'tool.code-scss.tagline': 'SCSS stil sayfalarını biçimlendirin ve güzelleştirin',
	'tool.code-scss.description':
		"SCSS dosyalarını tutarlı girintiyle biçimlendirin. Değişkenleri, iç içe kuralları, mixin'leri ve tüm SCSS'e özgü sözdizimini destekler.",
	'tool.code-scss.primary_keyword': 'scss biçimlendirici',
	'tool.code-scss.meta_title': 'SCSS Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-scss.meta_description':
		"SCSS'i tarayıcınızda biçimlendirin ve güzelleştirin. Verileriniz cihazınızdan ayrılmaz.",
	'tool.code-scss.operation': 'Biçimlendir',

	'tool.code-less.display_name': 'LESS Biçimlendirici',
	'tool.code-less.tagline': 'LESS stil sayfalarını biçimlendirin ve güzelleştirin',
	'tool.code-less.description':
		"LESS dosyalarını tutarlı girintiyle biçimlendirin. Değişkenleri, mixin'leri, iç içe yerleştirmeyi ve tüm LESS'e özgü sözdizimini destekler.",
	'tool.code-less.primary_keyword': 'less biçimlendirici',
	'tool.code-less.meta_title': 'LESS Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-less.meta_description':
		"LESS'i tarayıcınızda biçimlendirin ve güzelleştirin. Verileriniz cihazınızdan ayrılmaz.",
	'tool.code-less.operation': 'Biçimlendir',

	'tool.code-html.display_name': 'HTML Biçimlendirici',
	'tool.code-html.tagline': 'HTML işaretlemesini biçimlendirin ve güzelleştirin',
	'tool.code-html.description':
		"HTML'i uygun girinti ve etiket iç içe geçmesiyle biçimlendirin. Satır içi ve blok öğeleri, öznitelikleri ve gömülü CSS ve JavaScript'i işler.",
	'tool.code-html.primary_keyword': 'html biçimlendirici',
	'tool.code-html.meta_title': 'HTML Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-html.meta_description':
		"HTML'i tarayıcınızda biçimlendirin ve güzelleştirin. Uygun girinti ve etiket iç içe geçmesi. Verileriniz cihazınızdan ayrılmaz.",
	'tool.code-html.operation': 'Biçimlendir',

	'tool.code-javascript.display_name': 'JavaScript Biçimlendirici',
	'tool.code-javascript.tagline': 'JavaScript kodunu biçimlendirin ve güzelleştirin',
	'tool.code-javascript.description':
		"JavaScript'i Prettier stili biçimlendirme ile biçimlendirin. ES2022+, JSX, modül sözdizimini ve noktalı virgül ve tek tırnak gibi ayarlanabilir seçenekleri destekler.",
	'tool.code-javascript.primary_keyword': 'javascript biçimlendirici',
	'tool.code-javascript.meta_title': 'JavaScript Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-javascript.meta_description':
		"JavaScript'i tarayıcınızda biçimlendirin ve güzelleştirin. Modern ES sözdizimini destekler. Verileriniz cihazınızdan ayrılmaz.",
	'tool.code-javascript.operation': 'Biçimlendir',

	'tool.code-typescript.display_name': 'TypeScript Biçimlendirici',
	'tool.code-typescript.tagline': 'TypeScript kodunu biçimlendirin ve güzelleştirin',
	'tool.code-typescript.description':
		"TypeScript'i Prettier stili biçimlendirme ile biçimlendirin. Generikleri, dekoratörleri ve tür açıklamaları dahil tüm TypeScript özelliklerini destekler.",
	'tool.code-typescript.primary_keyword': 'typescript biçimlendirici',
	'tool.code-typescript.meta_title': 'TypeScript Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-typescript.meta_description':
		"TypeScript'i tarayıcınızda biçimlendirin ve güzelleştirin. Tüm TypeScript sözdizimini destekler. Verileriniz cihazınızdan ayrılmaz.",
	'tool.code-typescript.operation': 'Biçimlendir',

	'tool.code-graphql.display_name': 'GraphQL Biçimlendirici',
	'tool.code-graphql.tagline': 'GraphQL şemalarını ve sorgularını biçimlendirin ve güzelleştirin',
	'tool.code-graphql.description':
		'GraphQL şemalarını ve sorgularını tutarlı girintiyle biçimlendirin. SDL, sorgular, mutasyonlar, abonelikler ve parçaları destekler.',
	'tool.code-graphql.primary_keyword': 'graphql biçimlendirici',
	'tool.code-graphql.meta_title': 'GraphQL Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-graphql.meta_description':
		"GraphQL'i tarayıcınızda biçimlendirin ve güzelleştirin. SDL, sorgular ve mutasyonları destekler. Verileriniz cihazınızdan ayrılmaz.",
	'tool.code-graphql.operation': 'Biçimlendir',

	'tool.code-markdown.display_name': 'Markdown Biçimlendirici',
	'tool.code-markdown.tagline': 'Markdown belgelerini biçimlendirin ve normalleştirin',
	'tool.code-markdown.description':
		"Markdown'ı tutarlı başlık stilleri, liste girintisi ve tablo hizalamasıyla biçimlendirin. Boşlukları ve boş satırları normalleştirir.",
	'tool.code-markdown.primary_keyword': 'markdown biçimlendirici',
	'tool.code-markdown.meta_title': 'Markdown Biçimlendirici — fmtly.dev',
	'tool.code-markdown.meta_description':
		"Markdown'ı tarayıcınızda biçimlendirin ve normalleştirin. Verileriniz cihazınızdan ayrılmaz.",
	'tool.code-markdown.operation': 'Biçimlendir',

	'tool.code-curl-to-fetch.display_name': "cURL'dan Fetch'e",
	'tool.code-curl-to-fetch.tagline': "cURL komutlarını JavaScript fetch()'e dönüştürün",
	'tool.code-curl-to-fetch.description':
		'cURL komutlarını yerel JavaScript fetch() çağrılarına dönüştürün. Başlıkları, istek gövdesini, kimlik doğrulamayı ve tüm yaygın cURL seçeneklerini işler.',
	'tool.code-curl-to-fetch.primary_keyword': 'curl dan fetch e dönüştürücü',
	'tool.code-curl-to-fetch.meta_title': "cURL'dan Fetch'e Dönüştürücü — fmtly.dev",
	'tool.code-curl-to-fetch.meta_description':
		"cURL komutlarını tarayıcınızda JavaScript fetch()'e dönüştürün. Başlıkları, gövdeyi ve yetkilendirmeyi işler. Veri yüklenmez.",
	'tool.code-curl-to-fetch.operation': 'Dönüştür',

	'tool.code-curl-to-axios.display_name': "cURL'dan Axios'a",
	'tool.code-curl-to-axios.tagline': 'cURL komutlarını Axios isteklerine dönüştürün',
	'tool.code-curl-to-axios.description':
		'cURL komutlarını Axios istek çağrılarına dönüştürün. Başlıkları, istek gövdesini, kimlik doğrulamayı ve tüm yaygın cURL seçeneklerini işler.',
	'tool.code-curl-to-axios.primary_keyword': 'curl dan axios a dönüştürücü',
	'tool.code-curl-to-axios.meta_title': "cURL'dan Axios'a Dönüştürücü — fmtly.dev",
	'tool.code-curl-to-axios.meta_description':
		'cURL komutlarını tarayıcınızda Axios isteklerine dönüştürün. Başlıkları, gövdeyi ve yetkilendirmeyi işler. Veri yüklenmez.',
	'tool.code-curl-to-axios.operation': 'Dönüştür',

	// ── Color tools ──────────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Renk Dönüştürücü',
	'tool.color-converter.tagline': 'Renkleri HEX, RGB, HSL ve daha fazlası arasında dönüştürün',
	'tool.color-converter.description':
		'Renkleri HEX, RGB, RGBA, HSL, HSLA ve adlandırılmış CSS renk formatları arasında dönüştürün. Seçilen rengin canlı önizlemesini gösterir.',
	'tool.color-converter.primary_keyword': 'renk dönüştürücü',
	'tool.color-converter.meta_title': 'Renk Dönüştürücü — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Renkleri tarayıcınızda HEX, RGB, HSL ve CSS adlandırılmış renkleri arasında dönüştürün. Canlı önizleme dahildir.',
	'tool.color-converter.operation': 'Dönüştür',

	'tool.color-contrast.display_name': 'Renk Kontrast Kontrolü',
	'tool.color-contrast.tagline': 'İki renk arasındaki WCAG kontrast oranını kontrol edin',
	'tool.color-contrast.description':
		'İki renk arasındaki kontrast oranını hesaplayın ve normal ve büyük metin için WCAG 2.1 AA ve AAA erişilebilirlik uyumluluğunu kontrol edin.',
	'tool.color-contrast.primary_keyword': 'renk kontrast kontrolü',
	'tool.color-contrast.meta_title': 'Renk Kontrast Kontrolü — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'WCAG AA ve AAA uyumluluğu için renk kontrast oranını tarayıcınızda kontrol edin.',
	'tool.color-contrast.operation': 'Kontrol Et',

	// ── Crypto tools ─────────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'HMAC Oluşturucu',
	'tool.crypto-hmac.tagline': 'SHA algoritmalarıyla HMAC imzaları oluşturun',
	'tool.crypto-hmac.description':
		"SHA-256, SHA-384 veya SHA-512 kullanarak HMAC imzaları oluşturun. Web Crypto API'sini kullanarak onaltılık veya Base64 kodlu imzalar çıktılar.",
	'tool.crypto-hmac.primary_keyword': 'hmac oluşturucu',
	'tool.crypto-hmac.meta_title': 'HMAC Oluşturucu — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		"Web Crypto API'sini kullanarak tarayıcınızda HMAC imzaları oluşturun. SHA-256, SHA-384 ve SHA-512 destekler.",
	'tool.crypto-hmac.operation': 'Oluştur',

	'tool.crypto-password-strength.display_name': 'Şifre Gücü Kontrolü',
	'tool.crypto-password-strength.tagline': 'Şifre gücünü ve entropisini analiz edin',
	'tool.crypto-password-strength.description':
		'Entropi hesaplama, desen algılama ve tahmini kırılma süresi ile şifre gücünü değerlendirin. Hiçbir veri hiçbir zaman sunucuya gönderilmez.',
	'tool.crypto-password-strength.primary_keyword': 'şifre gücü kontrolü',
	'tool.crypto-password-strength.meta_title': 'Şifre Gücü Kontrolü — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		'Şifre gücünü ve entropisini tarayıcınızda kontrol edin. Şifre asla iletilmez. %100 istemci tarafı.',
	'tool.crypto-password-strength.operation': 'Analiz Et',

	'tool.crypto-ulid.display_name': 'ULID Oluşturucu',
	'tool.crypto-ulid.tagline':
		'Evrensel Benzersiz Leksikografik Olarak Sıralanabilir Tanımlayıcılar oluşturun',
	'tool.crypto-ulid.description':
		"ULID'ler oluşturun — sıralanabilir, URL güvenli, çarpışmaya dayanıklı zaman sıralı tanımlayıcılar. Kriptografik rastgelelik için Web Crypto API'sini kullanır.",
	'tool.crypto-ulid.primary_keyword': 'ulid oluşturucu',
	'tool.crypto-ulid.meta_title': 'ULID Oluşturucu — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		"Web Crypto API'sini kullanarak tarayıcınızda ULID'ler oluşturun. Sıralanabilir, URL güvenli tanımlayıcılar.",
	'tool.crypto-ulid.operation': 'Oluştur',

	'tool.crypto-random-string.display_name': 'Rastgele Dizi Oluşturucu',
	'tool.crypto-random-string.tagline': 'Kriptografik olarak güvenli rastgele diziler oluşturun',
	'tool.crypto-random-string.description':
		"Ayarlanabilir uzunluk ve karakter setleriyle kriptografik olarak güvenli rastgele diziler oluşturun. Gerçek rastgelelik için Web Crypto API'sini kullanır.",
	'tool.crypto-random-string.primary_keyword': 'rastgele dizi oluşturucu',
	'tool.crypto-random-string.meta_title': 'Rastgele Dizi Oluşturucu — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		"Web Crypto API'sini kullanarak tarayıcınızda güvenli rastgele diziler oluşturun. Ayarlanabilir uzunluk ve karakter setleri.",
	'tool.crypto-random-string.operation': 'Oluştur',

	// ── Diff tools ───────────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Metin Diff',
	'tool.diff-text.tagline': 'İki metin bloğunu karşılaştırın ve farklılıkları vurgulayın',
	'tool.diff-text.description':
		'İki metin bloğunu yan yana karşılaştırın ve eklenen, kaldırılan ve değişmeyen satırları vurgulayın. Kelime düzeyinde ve satır düzeyinde diff modlarını destekler.',
	'tool.diff-text.primary_keyword': 'metin diff',
	'tool.diff-text.meta_title': 'Metin Diff Aracı — fmtly.dev',
	'tool.diff-text.meta_description':
		'İki metin bloğunu tarayıcınızda karşılaştırın. Kelime veya satır düzeyinde eklemeleri ve silmeleri vurgular. Veri yüklenmez.',
	'tool.diff-text.operation': 'Karşılaştır',

	// ── Encode tools ─────────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Base64 Kodlayıcı / Kod Çözücü',
	'tool.encode-base64.tagline': 'Base64 dizelerini kodlayın ve çözün',
	'tool.encode-base64.description':
		"Metni veya ikili veriyi Base64'e kodlayın ve Base64 dizelerini tekrar metne çözün. Standart ve URL güvenli Base64 varyantlarını destekler.",
	'tool.encode-base64.primary_keyword': 'base64 kodlayıcı kod çözücü',
	'tool.encode-base64.meta_title': 'Base64 Kodlayıcı ve Kod Çözücü — fmtly.dev',
	'tool.encode-base64.meta_description':
		"Base64'ü tarayıcınızda kodlayın ve çözün. Standart ve URL güvenli varyantları destekler. Veri yüklenmez.",
	'tool.encode-base64.operation': 'Kodla / Çöz',

	'tool.encode-url.display_name': 'URL Kodlayıcı / Kod Çözücü',
	'tool.encode-url.tagline': 'URL kodlu dizeleri kodlayın ve çözün',
	'tool.encode-url.description':
		"URL'leri ve URL bileşenlerini yüzde kodlayın veya yüzde kodlanmış dizeleri çözün. RFC 3986'ya göre tüm ayrılmış ve özel karakterleri işler.",
	'tool.encode-url.primary_keyword': 'url kodlayıcı kod çözücü',
	'tool.encode-url.meta_title': 'URL Kodlayıcı ve Kod Çözücü — fmtly.dev',
	'tool.encode-url.meta_description':
		"URL'leri tarayıcınızda kodlayın ve çözün. Tüm özel karakterleri işler. Veri yüklenmez.",
	'tool.encode-url.operation': 'Kodla / Çöz',

	'tool.encode-html.display_name': 'HTML Kodlayıcı / Kod Çözücü',
	'tool.encode-html.tagline': 'HTML varlıklarını kodlayın ve çözün',
	'tool.encode-html.description':
		'Özel karakterleri HTML varlıklarına ve geriye dönüştürün. &amp;, &lt;, &gt;, &quot; ve diğer tüm HTML özel karakterlerini işler.',
	'tool.encode-html.primary_keyword': 'html kodlayıcı kod çözücü',
	'tool.encode-html.meta_title': 'HTML Kodlayıcı ve Kod Çözücü — fmtly.dev',
	'tool.encode-html.meta_description':
		'HTML varlıklarını tarayıcınızda kodlayın ve çözün. Veri yüklenmez.',
	'tool.encode-html.operation': 'Kodla / Çöz',

	'tool.encode-html-entities.display_name': 'HTML Varlıkları Referansı',
	'tool.encode-html-entities.tagline': 'HTML varlık kodlarını göz atın ve arayın',
	'tool.encode-html-entities.description':
		'Tüm HTML varlıklarını ondalık, onaltılık ve adlandırılmış formlarıyla arayın ve göz atın. Unicode kod noktalarını ve görsel önizlemeleri içerir.',
	'tool.encode-html-entities.primary_keyword': 'html varlıkları referansı',
	'tool.encode-html-entities.meta_title': 'HTML Varlıkları Referansı — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Tüm HTML varlıklarını tarayıcınızda göz atın. Ada, ondalık veya onaltılık koda göre arayın.',
	'tool.encode-html-entities.operation': 'Bak',
	'tool.encode-html-entities.faq.0.question':
		'Adlandırılmış ve Onaltılık HTML varlıkları arasındaki fark nedir?',
	'tool.encode-html-entities.faq.0.answer':
		'Adlandırılmış varlıklar tanınabilir İngilizce ifadeler kullanır (ve işareti için &amp;amp; gibi), Onaltılık varlıklar ise ham unicode onaltılık noktalarına başvurur (&amp;#x26; gibi).',
	'tool.encode-html-entities.use_case.0':
		'Bloglarda ham oluşturma olmadan kod bloklarını güvenli görüntüleme',
	'tool.encode-html-entities.use_case.1': "UTF-8'e güvenmeden özel sembolleri güvenli kodlama",

	'tool.encode-unicode.display_name': 'Unicode Analizörü',
	'tool.encode-unicode.tagline': 'Metindeki Unicode kod noktalarını analiz edin',
	'tool.encode-unicode.description':
		'Herhangi bir metni onaltılık, CSS kaçışı, JavaScript kaçışı ve UTF-8 bayt temsilleriyle Unicode kod noktalarına çözün. Emoji ve çoklu kod noktası dizilerini işler.',
	'tool.encode-unicode.primary_keyword': 'unicode analizörü',
	'tool.encode-unicode.meta_title': 'Unicode Analizörü — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Unicode kod noktalarını tarayıcınızda analiz edin. Onaltılık, CSS kaçışları, JS kaçışları ve UTF-8 baytlarını inceleyin.',
	'tool.encode-unicode.operation': 'Analiz Et',
	'tool.encode-unicode.faq.0.question': 'Bu Emoji eşlemelerini inceleyebilir mi?',
	'tool.encode-unicode.faq.0.answer':
		'Evet, bir emoji geçirmek anında dekonstrüksiyonunu yaparak eşdeğer Onaltılık ve utf-8 baytlarını güvenli bir şekilde oluşturur.',
	'tool.encode-unicode.use_case.0':
		'Veri kümelerini kirleten sıfır genişlikli gizli karakterleri araştırmak',
	'tool.encode-unicode.use_case.1':
		'Sözde öğe ikon enjeksiyonu için ham CSS dizi kodlarını çıkarmak',

	// ── Escape tools ─────────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'JSON Dizi Kaçışı',
	'tool.escape-json.tagline': 'JSON dizilerini kaçış karakterleriyle düzenleyin',
	'tool.escape-json.description':
		'Özel karakterleri JSON değerleri içinde kullanılmak üzere kaçış karakterleriyle düzenleyin veya JSON dizi değerlerini düz metne geri çözün. Yeni satırları, sekmeleri, tırnakları ve ters eğik çizgileri işler.',
	'tool.escape-json.primary_keyword': 'json kaçış çöz',
	'tool.escape-json.meta_title': 'JSON Dizi Kaçışı ve Çözme — fmtly.dev',
	'tool.escape-json.meta_description':
		'JSON dizelerini tarayıcınızda kaçış karakterleriyle düzenleyin. Veri yüklenmez.',
	'tool.escape-json.operation': 'Kaçış / Çöz',

	// ── File tools ───────────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'Dosya Hash Hesaplayıcı',
	'tool.file-hash.tagline': 'MD5, SHA-1, SHA-256 ve SHA-512 dosya hashlerini hesaplayın',
	'tool.file-hash.description':
		'Herhangi bir dosya için kriptografik hash değerlerini hesaplayın. MD5, SHA-1, SHA-256 ve SHA-512 algoritmalarını destekler. Tamamen tarayıcınızda çalışır.',
	'tool.file-hash.primary_keyword': 'dosya hash hesaplayıcı',
	'tool.file-hash.meta_title': 'Dosya Hash Hesaplayıcı — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		'Dosya hashlerini tarayıcınızda hesaplayın. MD5, SHA-1, SHA-256 ve SHA-512 destekler. Hiçbir dosya sunucuya yüklenmez.',
	'tool.file-hash.operation': 'Hash',

	// ── Generate tools ───────────────────────────────────────────────────────
	'tool.generate-uuid.display_name': 'UUID Oluşturucu',
	'tool.generate-uuid.tagline': "Rastgele UUID'ler oluşturun (v4)",
	'tool.generate-uuid.description':
		"Web Crypto API'sini kullanarak RFC 4122 sürüm 4 UUID'leri oluşturun. Tek tıkla tek veya toplu UUID'ler oluşturun.",
	'tool.generate-uuid.primary_keyword': 'uuid oluşturucu',
	'tool.generate-uuid.meta_title': 'UUID Oluşturucu — fmtly.dev',
	'tool.generate-uuid.meta_description':
		"Web Crypto API'sini kullanarak tarayıcınızda rastgele UUID'ler oluşturun. RFC 4122 v4 uyumlu.",
	'tool.generate-uuid.operation': 'Oluştur',

	// ── Image tools ──────────────────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Görüntü Sıkıştırıcı',
	'tool.image-compressor.tagline': 'Görüntüleri kalite kaybı olmadan sıkıştırın',
	'tool.image-compressor.description':
		'JPEG, PNG ve WebP görüntülerini tarayıcınızda sıkıştırın. Kalite ayarlarını ayarlayın ve indirmeden önce önizleyin. Hiçbir görüntü yüklenmez.',
	'tool.image-compressor.primary_keyword': 'görüntü sıkıştırıcı',
	'tool.image-compressor.meta_title': 'Görüntü Sıkıştırıcı — fmtly.dev',
	'tool.image-compressor.meta_description':
		'Görüntüleri tarayıcınızda sıkıştırın. JPEG, PNG ve WebP destekler. Hiçbir görüntü sunucuya yüklenmez.',
	'tool.image-compressor.operation': 'Sıkıştır',

	// ── Number tools ─────────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Sayı Biçimlendirici',
	'tool.number-formatter.tagline': 'Sayıları yerel ayraçlarla biçimlendirin',
	'tool.number-formatter.description':
		'Sayıları binlik ayraçlar, ondalık basamaklar ve yerel ayraçlarla biçimlendirin. Para birimi biçimlendirmesini ve bilimsel gösterimi destekler.',
	'tool.number-formatter.primary_keyword': 'sayı biçimlendirici',
	'tool.number-formatter.meta_title': 'Sayı Biçimlendirici — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Sayıları tarayıcınızda yerel ayraçlar ve para birimi sembolleriyle biçimlendirin.',
	'tool.number-formatter.operation': 'Biçimlendir',

	'tool.number-roman.display_name': 'Roma Rakamı Dönüştürücü',
	'tool.number-roman.tagline': 'Roma rakamları ve tam sayılar arasında dönüştürün',
	'tool.number-roman.description':
		'Tam sayıları Roma rakamlarına ve geriye dönüştürün. Standart Roma rakamı gösterimiyle 1 ile 3999 arasındaki sayıları destekler.',
	'tool.number-roman.primary_keyword': 'roma rakamı dönüştürücü',
	'tool.number-roman.meta_title': 'Roma Rakamı Dönüştürücü — fmtly.dev',
	'tool.number-roman.meta_description':
		'Roma rakamları ve tam sayılar arasında tarayıcınızda dönüştürün.',
	'tool.number-roman.operation': 'Dönüştür',

	'tool.number-percentage.display_name': 'Yüzde Hesaplayıcı',
	'tool.number-percentage.tagline': 'Yüzdeleri, artışları ve düşüşleri hesaplayın',
	'tool.number-percentage.description':
		'Yüzde değerlerini, yüzde değişimini ve toplamın yüzdesini hesaplayın. Artış/azalış hesaplamalarını ve ters yüzde aramalarını destekler.',
	'tool.number-percentage.primary_keyword': 'yüzde hesaplayıcı',
	'tool.number-percentage.meta_title': 'Yüzde Hesaplayıcı — fmtly.dev',
	'tool.number-percentage.meta_description':
		'Yüzdeleri ve yüzde değişimini tarayıcınızda hesaplayın.',
	'tool.number-percentage.operation': 'Hesapla',

	'tool.number-scientific.display_name': 'Bilimsel Gösterim Dönüştürücü',
	'tool.number-scientific.tagline': 'Sayıları bilimsel gösterime ve geriye dönüştürün',
	'tool.number-scientific.description':
		'Sayıları bilimsel gösterime ve geriye dönüştürün. Mantis, üs ve eşdeğer mühendislik gösterimini gösterir.',
	'tool.number-scientific.primary_keyword': 'bilimsel gösterim dönüştürücü',
	'tool.number-scientific.meta_title': 'Bilimsel Gösterim Dönüştürücü — fmtly.dev',
	'tool.number-scientific.meta_description':
		'Sayıları tarayıcınızda bilimsel gösterime dönüştürün.',
	'tool.number-scientific.operation': 'Dönüştür',

	'tool.number-statistics.display_name': 'İstatistik Hesaplayıcı',
	'tool.number-statistics.tagline': 'Ortalama, medyan, mod ve daha fazlasını hesaplayın',
	'tool.number-statistics.description':
		'Bir sayı listesi için tanımlayıcı istatistikleri hesaplayın: ortalama, medyan, mod, standart sapma, varyans, min, max ve çeyrekler.',
	'tool.number-statistics.primary_keyword': 'istatistik hesaplayıcı',
	'tool.number-statistics.meta_title': 'İstatistik Hesaplayıcı — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Ortalama, medyan, standart sapma ve daha fazlasını tarayıcınızda hesaplayın.',
	'tool.number-statistics.operation': 'Hesapla',

	'tool.number-matrix.display_name': 'Matris Hesaplayıcı',
	'tool.number-matrix.tagline': 'Matris işlemleri ve hesaplamaları yapın',
	'tool.number-matrix.description':
		'Herhangi bir boyuttaki matrislerde toplama, çıkarma, çarpma, transpoz, determinant ve ters matris işlemleri dahil matris işlemleri gerçekleştirin.',
	'tool.number-matrix.primary_keyword': 'matris hesaplayıcı',
	'tool.number-matrix.meta_title': 'Matris Hesaplayıcı — fmtly.dev',
	'tool.number-matrix.meta_description':
		'Tarayıcınızda matris işlemleri gerçekleştirin. Toplama, çarpma, ters ve daha fazlasını destekler.',
	'tool.number-matrix.operation': 'Hesapla',

	'tool.number-unit-converter.display_name': 'Birim Dönüştürücü',
	'tool.number-unit-converter.tagline': 'Ölçüm birimleri arasında dönüştürün',
	'tool.number-unit-converter.description':
		'Uzunluk, ağırlık, sıcaklık, hacim, alan, hız ve daha fazlası birimleri arasında dönüştürün. Metrik ve emperyal sistemleri destekler.',
	'tool.number-unit-converter.primary_keyword': 'birim dönüştürücü',
	'tool.number-unit-converter.meta_title': 'Birim Dönüştürücü — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Ölçüm birimlerini tarayıcınızda arasında dönüştürün. Uzunluk, ağırlık, sıcaklık ve daha fazlasını destekler.',
	'tool.number-unit-converter.operation': 'Dönüştür',

	// ── PDF tools ─────────────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'PDF Görüntüleyici',
	'tool.pdf-viewer.tagline': 'PDF dosyalarını görüntüleyin ve metin çıkarın',
	'tool.pdf-viewer.description':
		"PDF dosyalarını tarayıcınızda görüntüleyin ve metin içeriğini çıkarın. Çok sayfalı PDF'leri ve metin seçimini destekler. Hiçbir dosya sunucuya yüklenmez.",
	'tool.pdf-viewer.primary_keyword': 'pdf görüntüleyici',
	'tool.pdf-viewer.meta_title': 'PDF Görüntüleyici — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		"PDF dosyalarını tarayıcınızda görüntüleyin. Herhangi bir PDF'den metin çıkarın. Dosya yüklenmez.",
	'tool.pdf-viewer.operation': 'Görüntüle',

	// ── QR tools ──────────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'QR Kod Oluşturucu',
	'tool.qr-generator.tagline': 'Özelleştirilebilir QR kodları oluşturun',
	'tool.qr-generator.description':
		"Metin, URL'ler, kişi bilgileri ve daha fazlasından QR kodları oluşturun. Boyutu, hata düzeltme seviyesini ve renkleri özelleştirin. PNG veya SVG olarak indirin.",
	'tool.qr-generator.primary_keyword': 'qr kod oluşturucu',
	'tool.qr-generator.meta_title': 'QR Kod Oluşturucu — fmtly.dev',
	'tool.qr-generator.meta_description':
		'Özelleştirilebilir QR kodları tarayıcınızda oluşturun. PNG veya SVG olarak indirin.',
	'tool.qr-generator.operation': 'Oluştur',

	// ── TOML tools ────────────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'TOML Biçimlendirici',
	'tool.toml-formatter.tagline': 'TOML yapılandırma dosyalarını biçimlendirin ve doğrulayın',
	'tool.toml-formatter.description':
		'TOML dosyalarını tutarlı boşluk ve bölüm organizasyonuyla biçimlendirin. TOML sözdizimini doğrular ve hataları satır numaralarıyla vurgular.',
	'tool.toml-formatter.primary_keyword': 'toml biçimlendirici',
	'tool.toml-formatter.meta_title': 'TOML Biçimlendirici — fmtly.dev',
	'tool.toml-formatter.meta_description':
		"TOML'ı tarayıcınızda biçimlendirin ve doğrulayın. Verileriniz cihazınızdan ayrılmaz.",
	'tool.toml-formatter.operation': 'Biçimlendir',

	// ── Web tools ─────────────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'URL Ayrıştırıcı',
	'tool.web-url-parser.tagline': 'URL bileşenlerini ayrıştırın ve inceleyin',
	'tool.web-url-parser.description':
		"URL'leri bileşenlerine ayırın: protokol, ana bilgisayar, port, yol, sorgu parametreleri ve parça. Herhangi bir URL'yi ayrıştırın ve inceleyin.",
	'tool.web-url-parser.primary_keyword': 'url ayrıştırıcı',
	'tool.web-url-parser.meta_title': 'URL Ayrıştırıcı — fmtly.dev',
	'tool.web-url-parser.meta_description':
		"URL bileşenlerini tarayıcınızda ayrıştırın ve inceleyin. Herhangi bir URL'yi parçalarına ayırır.",
	'tool.web-url-parser.operation': 'Ayrıştır',

	'tool.web-user-agent.display_name': 'User-Agent Ayrıştırıcı',
	'tool.web-user-agent.tagline': 'User-Agent dizelerini ayrıştırın ve çözün',
	'tool.web-user-agent.description':
		'Tarayıcıyı, motoru, işletim sistemini ve cihaz türünü belirlemek için User-Agent dizelerini ayrıştırın. Modern ve eski tarayıcı formatlarını destekler.',
	'tool.web-user-agent.primary_keyword': 'user agent ayrıştırıcı',
	'tool.web-user-agent.meta_title': 'User-Agent Ayrıştırıcı — fmtly.dev',
	'tool.web-user-agent.meta_description':
		'User-Agent dizelerini tarayıcınızda ayrıştırın. Tarayıcıyı, işletim sistemini ve cihazı belirler.',
	'tool.web-user-agent.operation': 'Ayrıştır',

	'tool.web-cors.display_name': 'CORS Başlık Kontrolü',
	'tool.web-cors.tagline': 'CORS başlıklarını inceleyin ve anlayın',
	'tool.web-cors.description':
		'CORS başlıklarını araştırın ve açıklayın. Access-Control-Allow-Origin, kimlik bilgileri, ön kontrol ve diğer CORS direktiflerini anlayın.',
	'tool.web-cors.primary_keyword': 'cors başlık kontrolü',
	'tool.web-cors.meta_title': 'CORS Başlık Kontrolü — fmtly.dev',
	'tool.web-cors.meta_description':
		'CORS başlıklarını tarayıcınızda inceleyin. Tüm Access-Control direktiflerini anlayın.',
	'tool.web-cors.operation': 'Kontrol Et',

	'tool.web-mime-types.display_name': 'MIME Türü Araması',
	'tool.web-mime-types.tagline': 'Uzantıya veya ada göre MIME türlerini arayın',
	'tool.web-mime-types.description':
		'Dosya uzantısına, ada veya içerik türüne göre MIME türlerini arayın. Örneklerle tüm IANA kayıtlı MIME türlerini kapsar.',
	'tool.web-mime-types.primary_keyword': 'mime türü araması',
	'tool.web-mime-types.meta_title': 'MIME Türü Araması — fmtly.dev',
	'tool.web-mime-types.meta_description':
		'Dosya uzantısına göre MIME türlerini tarayıcınızda arayın.',
	'tool.web-mime-types.operation': 'Bak',

	'tool.web-ip-lookup.display_name': 'IP Araması',
	'tool.web-ip-lookup.tagline': 'IP adresleri için coğrafi konum ve bilgi arayın',
	'tool.web-ip-lookup.description':
		'Herhangi bir IP adresi için coğrafi konum, ASN ve sağlayıcı bilgilerini arayın. IPv4 ve IPv6 adreslerini destekler.',
	'tool.web-ip-lookup.primary_keyword': 'ip araması',
	'tool.web-ip-lookup.meta_title': 'IP Araması — fmtly.dev',
	'tool.web-ip-lookup.meta_description':
		'IP adresi coğrafi konumunu ve sağlayıcı bilgisini tarayıcınızda arayın.',
	'tool.web-ip-lookup.operation': 'Bak',

	'tool.web-dns-lookup.display_name': 'DNS Araması',
	'tool.web-dns-lookup.tagline': 'Herhangi bir alan için DNS kayıtlarını sorgulayın',
	'tool.web-dns-lookup.description':
		"Herhangi bir alan için A, AAAA, MX, TXT, CNAME, NS ve diğer DNS kayıt türlerini sorgulayın. Tarayıcının DNS over HTTPS'ini kullanır.",
	'tool.web-dns-lookup.primary_keyword': 'dns araması',
	'tool.web-dns-lookup.meta_title': 'DNS Araması — fmtly.dev',
	'tool.web-dns-lookup.meta_description':
		'Herhangi bir alan için DNS kayıtlarını tarayıcınızda sorgulayın.',
	'tool.web-dns-lookup.operation': 'Bak',

	// ── Accessibility tools ─────────────────────────────────────────────────────
	'tool.accessibility-contrast.display_name': 'Kontrast Kontrolü',
	'tool.accessibility-contrast.tagline':
		'Metin ve arka plan renkleri için WCAG kontrast oranlarını kontrol edin',
	'tool.accessibility-contrast.description':
		'Kontrast oranını hesaplamak için ön plan ve arka plan renklerini girin. Normal metin, büyük metin ve UI öğeleri için WCAG AA/AAA uyumluluğunu görün. Canlı önizleme dahildir.',
	'tool.accessibility-contrast.primary_keyword': 'wcag kontrast kontrolü',
	'tool.accessibility-contrast.meta_title': 'WCAG Kontrast Kontrolü — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'WCAG renk kontrast oranlarını tarayıcınızda kontrol edin. Canlı önizleme, AA/AAA uyumluluğu. Verileriniz cihazınızdan ayrılmaz.',
	'tool.accessibility-contrast.operation': 'Kontrol Et',
	'tool.accessibility-contrast.faq.0.question': 'Gerekli kontrast oranı nedir?',
	'tool.accessibility-contrast.faq.0.answer':
		'WCAG AA normal metin için 4.5:1 ve büyük metin için 3:1 gerektirir. AAA sırasıyla 7:1 ve 4.5:1 gerektirir.',
	'tool.accessibility-contrast.use_case.0': 'Web sitesi metninin erişilebilirliğini doğrulama',
	'tool.accessibility-contrast.use_case.1': 'Erişilebilir renk kombinasyonları seçme',

	'tool.accessibility-color-blindness.display_name': 'Renk Körlüğü Simülatörü',
	'tool.accessibility-color-blindness.tagline':
		'Renklerin renk görme eksikliği olan kişilere nasıl göründüğünü simüle edin',
	'tool.accessibility-color-blindness.description':
		'Bir renk girin veya bir görüntü yükleyin ve renklerin protanopia, deuteranopia, tritanopia ve achromatopsia olan kişilere nasıl göründüğünü görün. Renk dönüşüm matrislerini kullanır.',
	'tool.accessibility-color-blindness.primary_keyword': 'renk körlüğü simülatörü',
	'tool.accessibility-color-blindness.meta_title': 'Renk Körlüğü Simülatörü — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description':
		'Tarayıcınızda protanopia, deuteranopia, tritanopia görüşünü simüle edin. Renkleri ve görüntüleri test edin. Veri yüklenmez.',
	'tool.accessibility-color-blindness.operation': 'Simüle Et',
	'tool.accessibility-color-blindness.faq.0.question':
		'Hangi renk körlüğü türleri simüle ediliyor?',
	'tool.accessibility-color-blindness.faq.0.answer':
		'Protanopia (kırmızı yok), deuteranopia (yeşil yok), tritanopia (mavi yok) ve achromatopsia (renk yok).',
	'tool.accessibility-color-blindness.use_case.0':
		'UI tasarımlarını renk körlüğü erişilebilirliği için test etme',
	'tool.accessibility-color-blindness.use_case.1': 'Renk paleti kapsayıcılığını kontrol etme',

	'tool.accessibility-font-size.display_name': 'Yazı Tipi Boyutu Kontrolü',
	'tool.accessibility-font-size.tagline':
		'Metnin WCAG boyut ve kontrast gereksinimlerini karşılayıp karşılamadığını kontrol edin',
	'tool.accessibility-font-size.description':
		'Birleşik bir WCAG raporu almak için yazı tipi boyutunu, ağırlığını ve renklerini girin. Metnin "büyük metin" olarak nitelendirilip nitelendirilmediğini ve hangi kontrast oranının gerektiğini görün.',
	'tool.accessibility-font-size.primary_keyword': 'wcag yazı tipi boyutu kontrolü',
	'tool.accessibility-font-size.meta_title': 'WCAG Yazı Tipi Boyutu Kontrolü — fmtly.dev',
	'tool.accessibility-font-size.meta_description':
		'WCAG yazı tipi boyutu gereksinimlerini tarayıcınızda kontrol edin. Büyük metin sınıflandırması, kontrast gereksinimleri. Veri yüklenmez.',
	'tool.accessibility-font-size.operation': 'Kontrol Et',
	'tool.accessibility-font-size.faq.0.question': "WCAG'da büyük metin nedir?",
	'tool.accessibility-font-size.faq.0.answer':
		'≥18pt (24px) veya ≥14pt (18.66px) kalın metin, daha düşük kontrast oranları gerektiren büyük metin olarak kabul edilir.',
	'tool.accessibility-font-size.use_case.0': 'Metin stilinin erişilebilirliğini kontrol etme',
	'tool.accessibility-font-size.use_case.1':
		'Farklı yazı tipi boyutları için WCAG gereksinimlerini belirleme',

	// ── UI strings ────────────────────────────────────────────────────────────
	'ui.actions.choose_sample': 'Seç…',
	'ui.actions.clear': 'Temizle',
	'ui.actions.copied': 'Kopyalandı',
	'ui.actions.copy': 'Kopyala',
	'ui.actions.copy_all': 'Tümünü kopyala',
	'ui.actions.download': 'İndir',
	'ui.actions.fetch': 'Getir',
	'ui.actions.format': 'Biçimlendir',
	'ui.actions.load_url': "URL'yi yükle",
	'ui.actions.minify': 'Küçült',
	'ui.actions.run': 'Çalıştır',
	'ui.actions.running': 'Çalışıyor…',
	'ui.actions.sample': 'Örnek',
	'ui.actions.search': 'Ara',
	'ui.actions.share': 'Paylaş',
	'ui.actions.diff': 'Karşılaştır',
	'ui.layout.tabs.output': 'Çıktı',
	'ui.layout.tabs.tree': 'Ağaç',
	'ui.layout.placeholders.input': 'Girdi',
	'ui.layout.placeholders.output': 'Çıktı',
	'ui.layout.placeholders.output_empty': 'Çıktı burada görünecek',
	'ui.layout.placeholders.tree_empty': 'Ağaç görünümü',
	'ui.layout.placeholders.paste_original': 'Orijinali buraya yapıştırın…',
	'ui.layout.placeholders.paste_modified': 'Değiştirileni buraya yapıştırın…',
	'ui.diff.labels.original': 'Orijinal',
	'ui.diff.labels.modified': 'Değiştirilmiş',
	'ui.diff.labels.input_panel': 'Karşılaştırma giriş paneli',
	'ui.diff.controls.ignore_order': 'Dizi sırasını yoksay',
	'ui.diff.controls.only_diffs': 'Yalnızca farkları göster',
	'ui.diff.controls.case_sensitive': 'Büyük/küçük harf duyarlı',
	'ui.diff.controls.ignore_keys_placeholder': 'Yoksayılacak anahtarlar: id, timestamp…',
	'ui.diff.controls.swap': 'Takas',
	'ui.diff.controls.export': 'Dışa Aktar',
	'ui.diff.controls.copy_patch': 'JSON Patch olarak kopyala',
	'ui.diff.controls.export_md': 'Markdown raporu indir',
	'ui.diff.controls.export_csv': 'CSV olarak indir',
	'ui.diff.view.list': 'Liste görünümü',
	'ui.diff.view.monaco': 'Satır içi fark görünümü',
	'ui.diff.view.inline_toggle': 'Satır içi / yan yana geçiş',
	'ui.diff.summary.added': 'eklendi',
	'ui.diff.summary.removed': 'kaldırıldı',
	'ui.diff.summary.modified': 'değiştirildi',
	'ui.diff.summary.similar': 'benzer',
	'ui.diff.summary.empty': 'Karşılaştırmak için her iki panele de JSON girin',
	'ui.diff.summary.identical': 'Belgeler özdeş',
	'ui.diff.summary.difference': 'fark',
	'ui.diff.summary.differences': 'fark',
	'ui.diff.summary.found': 'bulundu',
	'ui.diff.filter.placeholder': 'Yola göre filtrele…',
	'ui.diff.types.root': '(kök)',
	'ui.diff.types.added': 'Eklendi',
	'ui.diff.types.removed': 'Kaldırıldı',
	'ui.diff.types.modified': 'Değiştirildi',
	'ui.diff.types.unchanged': 'Değişmedi',
	'ui.diff.actions.format': 'Biçimlendir',
	'ui.diff.actions.copy_value': 'Değeri kopyala',
	'ui.diff.actions.collapse': 'Daralt',
	'ui.diff.actions.expand': 'Genişlet',
	'ui.diff.toast.format_error': 'Biçimlendirilemedi — geçersiz JSON',
	'ui.diff.toast.patch_success': 'JSON Patch panoya kopyalandı',
	'ui.diff.toast.copy_value': 'Değer kopyalandı',
	'ui.diff.toast.share_copied': 'Paylaşım bağlantısı kopyalandı',
	'ui.diff.meta.chars': 'karakter',
	'ui.diff.empty.hint': 'Karşılaştırmak için yukarıdaki her iki panele de JSON yapıştırın.',
	'ui.diff.empty.load_sample': 'Örnek veri yükle',
	'ui.layout.placeholders.modified': 'Değiştirilmiş',
	'ui.layout.aria.input_panel': 'Giriş paneli',
	'ui.layout.aria.output_panel': 'Çıkış paneli',
	'ui.layout.aria.copy_output': 'Çıktıyı kopyala',
	'ui.layout.aria.download_output': 'Çıktıyı indir',
	'tool.output_placeholder': 'Çıktı burada görünecek',
	'ui.actions.upload': 'Yükle',
	'ui.actions.validate': 'Doğrula',
	'ui.actions.wrap': 'Kaydır',
	'ui.confirm.clear': 'Mevcut {language} girdisini temizle?',
	'ui.validator.syntax': 'Sözdizimi',
	'ui.validator.schema': 'Şema',
	'ui.validator.issue': 'sorun',
	'ui.validator.issues': 'sorun',
	'ui.validator.first_issue': 'İlk sorun',
	'ui.validator.repair_json': "JSON'ı Onar",
	'ui.validator.schema_title': 'JSON Şeması',
	'ui.validator.schema_standard': 'AJV ile Draft-07+',
	'ui.validator.paste_schema_placeholder': 'JSON Şemasını buraya yapıştırın…',
	'ui.validator.paste_json': 'Doğrulamak için JSON yapıştırın',
	'ui.validator.paste_schema': 'Doğrulamak için bir JSON Şeması yapıştırın',
	'ui.validator.validating_schema': 'Şema doğrulanıyor…',
	'ui.validator.schema_invalid': 'Şema geçersiz',
	'ui.validator.json_matches_schema': 'JSON şema ile uyumlu',
	'ui.validator.schema_validation_failed': 'Şema doğrulaması başarısız oldu',
	'ui.validator.no_syntax_errors': 'Sözdizimi hatası bulunamadı.',
	'ui.validator.json_matches_current_schema': 'JSON mevcut şema ile uyumlu.',
	'ui.validator.schema_match': 'Şema uyumlu',
	'ui.validator.valid_json': 'Geçerli JSON',
	'ui.validator.explanation_must_satisfy': 'şunu sağlamalıdır:',
	'ui.validator.data_error_pos': 'Satır {line}, sütun {column} konumunda veri hatası',
	'ui.share_url': 'URL Paylaş',
	'ui.format_xml': 'XML Biçimlendir',
	'ui.minify_xml': 'XML Küçült',
	'ui.format_beautify': 'Biçimlendir / Güzelleştir',
	'ui.minify': 'Küçült',
	'ui.repair_json': "JSON'ı Onar",
	'ui.expand_all': 'Tümünü Genişlet',
	'ui.collapse_all': 'Tümünü Daralt',
	'ui.expand_to_depth': '{depth}. derinliğe kadar genişlet',
	switch_to_tab: '{index}. sekmeye geç',
	switch_to_xml_tab: '{index}. XML sekmesine geç',
	use_cases: 'Kullanım Örnekleri',
	faq: 'SSS',
	'ui.validator.schema_error_pos': 'Satır {line}, sütun {column} konumunda şema hatası',
	'ui.validator.syntax_error_pos': 'Satır {line}, sütun {column} konumunda sözdizimi hatası',
	'ui.validator.line_col_label': 'Satır {line}, sütun {column}',
	'ui.validator.well_formed': 'İyi biçimlendirilmiş',
	'ui.validator.invalid_xml': 'Geçersiz XML',
	'ui.validator.loading_editor': 'Düzenleyici yükleniyor…',
	'ui.validator.xml_paste_hint': 'Doğrulamak için XML yapıştırın veya yazın.',
	'ui.validator.xml_validation_desc':
		'İyi biçimlendirilmişliği doğrular: kapatılmamış etiketler, eşleşmeyen öğeler, geçersiz karakterler ve daha fazlası.',
	'ui.validator.xml_success_title': 'İyi biçimlendirilmiş XML',
	'ui.validator.xml_success_desc':
		'Sözdizimi hatası algılanmadı. Belge iyi biçimlendirilmiş ve herhangi bir XML işlemcisi tarafından ayrıştırılabilir.',
	'ui.validator.error_count.one': '1 hata bulundu',
	'ui.validator.error_count.other': '{count} hata bulundu',
	'ui.convert.to_json': '→ JSON',
	'ui.convert.to_yaml': '→ YAML',
	'ui.convert.to_csv': '→ CSV',
	'ui.convert.to_xml': '→ XML',
	'ui.convert.to_toml': '→ TOML',
	'ui.convert.to_markdown': '→ MD',
	'ui.query.jsonpath': 'JSONPath',
	'ui.query.jmespath': 'JMESPath',
	'ui.query.xpath': 'XPath',
	'ui.query.stats.chars': 'karakter',
	'ui.query.stats.lines': 'satır',
	'ui.query.result': 'sonuç',
	'ui.query.results': 'sonuç',
	'ui.query.history': 'Geçmiş',
	'ui.query.sample_query': 'Örnek sorgu',
	'ui.query.guide': 'Rehber',
	'ui.query.query': 'Sorgu',
	'ui.query.running': 'Sorgu çalıştırılıyor…',
	'ui.query.empty_input': 'Sorgunuzu değerlendirmek için sola JSON yapıştırın.',
	'ui.query.empty_query': 'Sonuçları görmek için bir sorgu girin.',
	'ui.query.error_fallback': 'Sorgu başarısız oldu',
	'ui.query.copy_error': 'Çıktı kopyalanamadı',
	'ui.status.processing': 'İşleniyor…',
	'ui.status.waiting_output': 'Çıktı burada görünecek',
	'ui.output.controls.spaces': 'boşluk',
	'ui.confirm.clear_description': 'Bu işlem geri alınamaz.',
	'ui.drop_files': '.{extension} dosyalarını bırakın',
	'ui.drop_to_load': 'Yüklemek için bırakın',
	'ui.history.clear_all': 'Geçmişi Temizle',
	'ui.history.clear_confirm': 'Tüm geçmişi temizle?',
	'ui.history.clear_description': 'Bu işlem geri alınamaz.',
	'ui.history.empty': 'Henüz geçmiş yok',
	'ui.history.recent': 'Son Kullanılanlar',
	'ui.history.title': 'Geçmiş',
	'ui.paste_here': '{language} buraya yapıştırın…',
	'ui.paste_language_here': '{language} buraya yapıştırın…',
	'ui.placeholder.search_tools_count': '{count}+ araç ara...',
	'ui.placeholder.url': 'https://example.com/data.json',
	'ui.placeholder.xpath': "//book[@available='true']",
	'ui.related_categories': 'İlgili Kategoriler',
	'ui.stats.info': '{encoding} · {size} · {lines} satır · derinlik: {depth}',
	'ui.toast.copy_error': 'Kopyalama başarısız — tarayıcı izinlerini kontrol edin',
	'ui.toast.copy_success': 'Panoya kopyalandı',
	'ui.toast.file_loaded': 'Dosya yüklendi: {name}',
	'ui.toast.clipboard_xml': 'Pano XML',
	'ui.toast.pasted_xml': 'Panodan XML yapıştırıldı',
	'ui.toast.xml_file_types':
		'Yalnızca .xml, .svg, .xhtml, .xsd, .wsdl ve .txt dosyaları desteklenmektedir',
	'ui.aria.xml_input_panel': 'XML girdi paneli',
	'ui.aria.xml_output_panel': 'XML çıktı paneli',
	'ui.aria.xml_workspace_tabs': 'XML çalışma alanı sekmeleri',
	'ui.aria.xpath_panel': 'XPath sorgu paneli',
	'ui.aria.xml_validator': 'XML doğrulayıcı',
	'ui.toast.input_cleared': 'Girdi temizlendi',
	'ui.loaded_sample': '{label} yüklendi',
	'ui.toast.url_error': 'Getirilemedi — doğrudan yapıştırmayı deneyin',
	'ui.toast.url_loaded': "URL'den yüklendi",
	'ui.json_viewer.toast_copy_path': 'Kopyalandı',
	'ui.tree.toast_copy_path': 'Kopyalandı',
	'ui.tree.toast.copied_path': 'Kopyalandı',
	'share.link_size': 'Bağlantı boyutu',
	'share.large_link_warning': 'Bu bağlantı büyük ve tüm tarayıcılarda çalışmayabilir',
	'share.data_encoded_note':
		'Veri URL içinde kodlanmıştır ve hiçbir sunucuya işlenmek için gönderilmez.',
	'share.enter_input_first': 'Paylaşım bağlantısı oluşturmak için önce bir girdi girin.',
	'ui.share_url_copied': "Paylaşım URL'si kopyalandı",
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
	'ui.xpath.no_results': 'Sonuç yok. Farklı bir ifade deneyin veya XML yapısını kontrol edin.',
	'ui.xpath.placeholder': "XPath ifadesini çalıştırmadan önce XML'i sol panele yapıştırın.",
	'ui.xpath.results_count.one': '1 sonuç',
	'ui.xpath.results_count.other': '{count} sonuç',
	'ui.output.stats.chars': 'karakter',
	'ui.output.stats.lines': 'satır',
	'ui.output.stats.keys': 'anahtar',
	'ui.output.stats.objects': 'nesne',
	'ui.output.stats.arrays': 'dizi',
	'ui.output.stats.strings': 'metin',
	'ui.output.stats.values': 'değer',
	'ui.output.stats.numbers': 'sayı',
	'ui.output.stats.booleans': 'mantıksal',
	'ui.output.stats.nulls': 'boş (null)',
	'ui.output.stats.depth': 'derinlik',
	'ui.output.stats.size_in': 'giriş',
	'ui.output.stats.size_out': 'çıkış',
	'ui.output.original': 'Orijinal',
	'ui.output.minified': 'Küçültülmüş',
	'ui.output.saved': 'kazanç',
	'ui.output.meta.minified': 'KÜÇÜLTÜLMÜŞ',
	'ui.output.actions.wrap': 'Kaydır',
	'ui.output.actions.compare': 'Karşılaştır',
	'ui.output.actions.copy_json': 'JSON olarak kopyala',
	'ui.output.actions.copy_js': 'JS Nesnesi olarak kopyala',
	'ui.output.actions.copy_python': 'Python Dict olarak kopyala',
	'ui.output.actions.copy_escaped': 'Kaçırılmış olarak kopyala',
	'ui.output.actions.copy': 'Kopyala',
	'ui.output.actions.download': 'İndir',
	'ui.output.compare.input': 'Giriş',
	'ui.output.compare.output': 'Çıkış',
	'ui.output.error.invalid_title': 'Geçersiz JSON',
	'ui.output.controls.indent': 'Girinti',
	'ui.output.controls.tab': 'Sekme',
	'ui.output.controls.sort_keys': 'Anahtarları sırala',
	'ui.output.controls.clean': 'Temizle',
	'ui.output.controls.clean_nulls': 'Null değerleri kaldır',
	'ui.output.controls.clean_strings': 'Boş metinleri kaldır',
	'ui.output.controls.clean_arrays': 'Boş dizileri kaldır',
	'ui.output.controls.clean_objects': 'Boş nesneleri kaldır',
	'ui.output.controls.apply': 'Uygula',

	// ── Tool FAQs and Use Cases ──────────────────────────────────────────
	'tool.json-formatter.faq.0.question': 'JSON formatlama nedir?',
	'tool.json-formatter.faq.0.answer':
		'JSON formatlama, JSON verisini uygun girinti ve satır sonlarıyla düzenleyerek daha okunaklı ve anlaşılır hale getirme sürecidir.',
	'tool.json-formatter.faq.1.question': 'Girintiyi özelleştirebilir miyim?',
	'tool.json-formatter.faq.1.answer':
		'Evet! Girinti için 2 boşluk, 4 boşluk veya sekme seçebilirsiniz. Biçimlendirici, tercih ettiğiniz formatı uygularken orijinal veri yapınızı korur.',
	'tool.json-formatter.faq.2.question': 'Bu araç verimi değiştiriyor mu?',
	'tool.json-formatter.faq.2.answer':
		"Hayır. Biçimlendirici sadece JSON'un görsel sunumunu uygun girinti ve satır sonları ekleyerek değiştirir. Asıl veri, anahtarlar ve değerler tamamen aynı kalır.",
	'tool.json-formatter.faq.3.question': 'JSON anahtarlarını sıralayabilir miyim?',
	'tool.json-formatter.faq.3.answer':
		'Evet! "Anahtarları sırala" seçeneğini etkinleştirerek nesnelerdeki tüm anahtarları alfabetik olarak sıralayın. Bu, JSON dosyalarını karşılaştırmak veya tutarlı sıralama sürdürmek için kullanışlıdır.',
	'tool.json-formatter.use_case.0': 'API yanıtlarını daha okunaklı hale getirerek hata ayıklama',
	'tool.json-formatter.use_case.1':
		'Web kaynaklarından gelen küçültülmüş JSON dosyalarını temizleme',
	'tool.json-formatter.use_case.2':
		'Yapılandırma dosyalarını sürüm kontrolüne tutarlı formatla hazırlama',
	'tool.json-formatter.use_case.3':
		'JSON verisini dokümantasyon veya sunumlar için daha sunumlu hale getirme',
	'tool.json-formatter.use_case.4':
		"JSON'u manuel düzenlemeden veya incelemeden önce doğrulama ve formatlama",

	'tool.json-validator.faq.0.question': 'JSON doğrulama neyi kontrol eder?',
	'tool.json-validator.faq.0.answer':
		'JSON doğrulama, eksik parantezler, eşleşmeyen tırnaklar, sonda virgüller, geçersiz kaçış dizileri ve nesnelerdeki yinelenen anahtarlar gibi sözdizimi hatalarını kontrol eder.',
	'tool.json-validator.faq.1.question': 'Sözdizimi ve şema doğrulama arasındaki fark nedir?',
	'tool.json-validator.faq.1.answer':
		"Sözdizimi doğrulama, JSON'un JSON spesifikasyonuna göre iyi biçimlendirildiğinden emin olur. Şema doğrulama, JSON yapısının veri türleri, gerekli alanlar ve değer kısıtlamaları için belirli kurallar içeren önceden tanımlanmış bir şemayla eşleşip eşleşmediğini kontrol ederek daha ileri gider.",
	'tool.json-validator.faq.2.question': 'Yorum içeren JSON doğrulayabilir miyim?',
	'tool.json-validator.faq.2.answer':
		'Evet! Bu doğrulayıcı JSON5 formatını destekler, bu da yorumlara (hem // hem de /* */), sonda virgül ve dizeler için tek tırnak izin verir. JSON5 sözdizimini otomatik olarak algılayacak ve işleyecektir.',
	'tool.json-validator.use_case.0': 'Uygulamanızda işlem yapmadan önce API yanıtlarını doğrulama',
	'tool.json-validator.use_case.1':
		'Çalışma zamanı hatalarını önlemek için yapılandırma dosyalarını dağıtımdan önce kontrol etme',
	'tool.json-validator.use_case.2':
		'Formlarda veya dosya yüklemelerinde kullanıcı tarafından gönderilen JSON verilerini doğrulama',
	'tool.json-validator.use_case.3': 'Kodunuzdaki JSON ayrıştırma hatalarında hata ayıklama',
	'tool.json-validator.use_case.4': 'Sistemler arasında JSON aktarırken veri bütünlüğünü sağlama',

	'tool.crypto-hmac.faq.0.question': 'HMAC nedir?',
	'tool.crypto-hmac.faq.0.answer':
		'HMAC (Hash-based Message Authentication Code), bir kriptografik hash fonksiyonu ve gizli bir anahtar kullanan özel bir mesaj doğrulama kodu türüdür. Hem veri bütünlüğü hem de kimlik doğrulama sağlar.',
	'tool.crypto-hmac.faq.1.question': 'Hangi algoritmalar destekleniyor?',
	'tool.crypto-hmac.faq.1.answer':
		'Bu araç SHA-256, SHA-512, SHA-1, MD5 ve daha fazlası dahil olmak üzere birden fazla HMAC algoritmasını destekler. SHA-256, güvenlik ve performans arasında iyi bir denge sağladığı için most modern uygulamalar için tavsiye edilir.',
	'tool.crypto-hmac.use_case.0': 'API isteklerinin bütünlüğünü ve kimliğini doğrulama',
	'tool.crypto-hmac.use_case.1': 'Oturum yönetimi için güvenli belirteçler oluşturma',
	'tool.crypto-hmac.use_case.2':
		'GitHub veya Stripe gibi hizmetler için webhook imzaları oluşturma',
	'tool.crypto-hmac.use_case.3': 'Mikroservis iletişiminde mesaj kimlik doğrulama uygulama',
	'tool.crypto-hmac.use_case.4': 'Dosya doğrulama için sağlama toplamları oluşturma',

	'tool.json-minifier.faq.0.question': 'JSON küçültme nedir?',
	'tool.json-minifier.faq.0.answer':
		'JSON küçültme, işlevselliğini değiştirmeden JSON verisinden tüm gereksiz karakterleri kaldırma işlemidir. Bu, dosya boyutunu azaltmak için boşluk, satır sonu ve yorumları kaldırmayı içerir.',
	'tool.json-minifier.faq.1.question': 'Küçültme JSON işlevselliğini etkiler mi?',
	'tool.json-minifier.faq.1.answer':
		'Hayır. Küçültme sadece boşluk, sekme ve satır sonu gibi görsel formatlama karakterlerini kaldırır. Asıl veri yapısı, anahtarlar ve değerler tamamen aynı kalır, tam JSON uyumluluğunu korur.',
	'tool.json-minifier.faq.2.question': "Küçültülmüş JSON'u ne zaman kullanmalıyım?",
	'tool.json-minifier.faq.2.answer':
		'Üretim ortamlarında, API yanıtlarında ve verileri ağlar üzerinden aktarırken küçültülmüş JSON kullanın. Bant genişliği kullanımını azaltır ve veri aktarımını hızlandırır. Geliştirme ve hata ayıklama için biçimlendirilmiş JSON kullanın.',
	'tool.json-minifier.use_case.0':
		'Yükleme sürelerini iyileştirmek için API yanıtlarının dosya boyutunu azaltma',
	'tool.json-minifier.use_case.1':
		'Üretim dağıtımları için JSON yapılandırma dosyalarını optimize etme',
	'tool.json-minifier.use_case.2':
		'Veritabanlarına veya yerel depolamaya depolamadan önce verileri sıkıştırma',
	'tool.json-minifier.use_case.3':
		"JSON'u ağlar üzerinden aktarırken bant genişliği kullanımını en aza indirme",
	'tool.json-minifier.use_case.4':
		'JSON dosyalarını HTML veya JavaScript koduna gömmek için hazırlama',

	'tool.json-to-yaml.faq.0.question': "JSON'dan YAML'a dönüşüm nedir?",
	'tool.json-to-yaml.faq.0.answer':
		"JSON'dan YAML'a dönüşüm, JSON verisini YAML formatına dönüştürür, bu format daha insan tarafından okunabilir ve genellikle yapılandırma dosyaları için kullanılır. YAML yorumlara, çapalara ve daha esnek bir sözdizimine izin verir.",
	'tool.json-to-yaml.faq.1.question': 'Dönüşüm kayıpsız mı?',
	'tool.json-to-yaml.faq.1.answer':
		'Evet! Dönüşüm tüm veri ve yapıyı korur. JSON ve YAML aynı veri yapılarını temsil edebilir, bu yüzden dönüşüm sürecinde hiçbir bilgi kaybolmaz.',
	'tool.json-to-yaml.use_case.0':
		"JSON yapılandırma dosyalarını daha iyi okunabilirlik için YAML'a dönüştürme",
	'tool.json-to-yaml.use_case.1': 'JSON tanımlarından Kubernetes manifestleri oluşturma',
	'tool.json-to-yaml.use_case.2':
		'Uygulama yapılandırmalarını JSON formatından YAML formatına geçirme',
	'tool.json-to-yaml.use_case.3': 'CI/CD pipeline yapılandırmaları için YAML dosyaları oluşturma',

	'tool.json-to-toml.faq.0.question': "JSON'dan TOML'a dönüşüm nedir?",
	'tool.json-to-toml.faq.0.answer':
		"JSON'dan TOML'a dönüşüm, JSON verisini TOML formatına dönüştürür, bu format insan tarafından okunabilir yapılandırma dosyaları için tasarlanmıştır. TOML bölümler, anahtar-değer çiftleri ve tablolar içeren basit bir sözdizimi kullanır.",
	'tool.json-to-toml.faq.1.question': "TOML'u JSON yerine ne zaman kullanmalıyım?",
	'tool.json-to-toml.faq.1.answer':
		"İnsanlar tarafından manuel olarak düzenlenmesi gereken yapılandırma dosyaları için TOML kullanın. TOML'un sözdizimi yapılandırmalar için daha temiz ve sezgiselken, JSON makineden makineye iletişim için daha iyidir.",
	'tool.json-to-toml.use_case.0':
		"Python projeleri için package.json'ı pyproject.toml'a dönüştürme",
	'tool.json-to-toml.use_case.1': 'JSON yapılandırmalarından Cargo.toml dosyaları oluşturma',
	'tool.json-to-toml.use_case.2': 'Uygulama ayarlarını daha iyi bakım için TOML formatına geçirme',

	'tool.json-to-markdown.faq.0.question': "JSON'dan Markdown tablosuna dönüşüm nedir?",
	'tool.json-to-markdown.faq.0.answer':
		'Bu araç JSON veri dizilerini Markdown tablo formatına dönüştürür, bu yapılandırılmış verileri dokümantasyon, README dosyaları veya herhangi bir Markdown uyumlu platformda göstermeyi kolaylaştırır.',
	'tool.json-to-markdown.faq.1.question': 'Hangi JSON yapıları destekleniyor?',
	'tool.json-to-markdown.faq.1.answer':
		'Araç nesne dizileriyle en iyi şekilde çalışır. Her nesne tabloda bir satır olur ve nesne özellikleri sütunlar olur. İç içe nesneler nokta gösterimi kullanılarak düzleştirilir.',
	'tool.json-to-markdown.use_case.0':
		'README dosyaları ve dokümantasyon için veri tabloları oluşturma',
	'tool.json-to-markdown.use_case.1': 'API yanıt örneklerini dokümantasyon tablolarına dönüştürme',
	'tool.json-to-markdown.use_case.2':
		'JSON olarak dışa aktarılan elektronik tablo verilerinden Markdown tabloları oluşturma',
	'tool.json-to-markdown.use_case.3':
		'Proje dokümantasyonunda yapılandırma seçeneklerini görüntüleme',

	'tool.json-to-csv.faq.0.question': "JSON'dan CSV'ye dönüştürme nedir?",
	'tool.json-to-csv.faq.0.answer':
		"JSON'dan CSV'ye dönüştürme, yapılandırılmış JSON verilerini (genellikle bir nesne dizisi) düz bir Virgülle Ayrılmış Değerler formatına dönüştürür. Bu, verileri Excel veya Google E-Tablolar gibi hesap tablosu uygulamalarına aktarmak için idealdir.",
	'tool.json-to-csv.faq.1.question': 'Hangi JSON yapıları en iyi sonucu verir?',
	'tool.json-to-csv.faq.1.answer':
		'Araç, her nesnenin aynı anahtarlara sahip olduğu düz bir nesne dizisiyle en iyi şekilde çalışır. Bu anahtarlar CSV başlıkları olur ve değerler satırlara dönüşür. İç içe geçmiş nesneler veya diziler genellikle düzleştirilir.',
	'tool.json-to-csv.use_case.0': "İş analizi için API verilerini Excel'e aktarma",
	'tool.json-to-csv.use_case.1':
		"Toplu içe aktarmalar için veritabanı JSON çıktılarını CSV'ye dönüştürme",
	'tool.json-to-csv.use_case.2':
		'JSON veri kümelerini CSV formatında makine öğrenimi modellerini eğitmek için hazırlama',
	'tool.json-to-csv.use_case.3': 'Hesap tablosu uygulamaları için rapor verileri oluşturma',

	'tool.json-jsonpath.faq.0.question': 'JSONPath nedir?',
	'tool.json-jsonpath.faq.0.answer':
		"JSONPath, JSON belgelerinden belirli verileri çıkarmaya izin veren bir JSON sorgu dilidir. XML için XPath'e benzer ve JSON yapılarında gezinmek için nokta gösterimini ve filtreleri kullanır.",
	'tool.json-jsonpath.faq.1.question': 'JSONPath sözdizimi nasıl çalışır?',
	'tool.json-jsonpath.faq.1.answer':
		'JSONPath, JSON içinde gezinmek için $.store.book[*].title gibi ifadeler kullanır. $ kökü temsil eder, . özelliklere erişir, [*] bir dizideki tüm öğeleri seçer ve çeşitli operatörler sonuçları filtreleyebilir ve dönüştürebilir.',
	'tool.json-jsonpath.faq.2.question': 'JSONPath sonuçlarıyla ne yapabilirim?',
	'tool.json-jsonpath.faq.2.answer':
		'Belirli değerleri çıkarabilir, dizileri filtreleyebilir, hesaplamalar yapabilir ve JSON verilerini dönüştürebilirsiniz. JSONPath, API testleri, veri çıkarma ve uygulamalarda JSON yapısını doğrulama için kullanışlıdır.',
	'tool.json-jsonpath.use_case.0': 'API yanıtlarından belirli alanları çıkarma',
	'tool.json-jsonpath.use_case.1': 'Büyük JSON veri kümelerini filtreleme ve sorgulama',
	'tool.json-jsonpath.use_case.2': 'Otomatik testlerde API yanıtlarını test etme',
	'tool.json-jsonpath.use_case.3': "Veri pipeline'larında JSON yapısını ve içeriğini doğrulama",

	// JSON Diff
	'tool.json-diff.display_name': 'JSON Karşılaştırma',
	'tool.json-diff.tagline': 'İki JSON belgesini karşılaştırın',
	'tool.json-diff.description':
		'Güçlü bir anlamsal JSON karşılaştırma aracı. Anahtar sırasını ve boşlukları yok sayarak farklılıkları anında görmek için iki JSON belgesini yapıştırın. API değişikliklerinde hata ayıklamak veya yapılandırma güncellemelerini doğrulamak için mükemmeldir.',
	'tool.json-diff.primary_keyword': 'json diff aracı',
	'tool.json-diff.meta_title': 'JSON Karşılaştırma - JSON Diff Aracı',
	'tool.json-diff.meta_description':
		'İki JSON belgesini çevrimiçi olarak anlamsal olarak karşılaştırın. JSON diff aracımız, tam olarak neyin değiştiğini göstermek için anahtar sırasını ve biçimlendirme farklılıklarını yok sayar.',
	'tool.json-diff.operation': 'Karşılaştır',
	'tool.json-diff.faq.0.question': 'Anahtar sırasını yok sayar mı?',
	'tool.json-diff.faq.0.answer':
		'Evet. Karşılaştırma motorumuz JSON yapısını normalleştirilmiş temsillere ayrıştırır, yani {"a": 1, "b": 2} ve {"b": 2, "a": 1} aynı kabul edilir.',
	'tool.json-diff.faq.1.question': 'Büyük JSON dosyalarını işler mi?',
	'tool.json-diff.faq.1.answer':
		'Evet, karşılaştırma tarayıcınızda verimli bir şekilde gerçekleştirilir ve eklemeleri, çıkarmaları ve değişiklikleri satır satır görüntüler.',
	'tool.json-diff.faq.2.question': 'Verilerim güvende mi?',
	'tool.json-diff.faq.2.answer':
		'Kesinlikle. Karşılaştırma tamamen yerel olarak tarayıcınızda gerçekleşir. Sunucularımıza hiçbir JSON verisi gönderilmez.',
	'tool.json-diff.use_case.0':
		'Regresyonları tespit etmek için farklı API sürümlerindeki yanıtları karşılaştırın',
	'tool.json-diff.use_case.1':
		'Üretim ayar dosyalarındaki beklenmeyen yapılandırma değişikliklerini ayıklayın',
	'tool.json-diff.use_case.2':
		'JSON bildirimlerini veya kilit dosyalarını içeren git birleştirme çakışmalarını inceleyin',
	'tool.json-diff.use_case.3':
		'Hazırlık (staging) ve üretim veritabanı dışa aktarımları arasındaki tutarsızlıkları bulun',

	'tool.json-jmespath.faq.0.question': 'JMESPath nedir?',
	'tool.json-jmespath.faq.0.answer':
		"JMESPath, JSON belgelerinden öğeleri çıkarmak ve dönüştürmek için bir sorgu dilidir. JSONPath'den daha gelişmiş veri dönüştürme yetenekleri sunar, filtreleme, eşleme ve aggregation fonksiyonları içerir.",
	'tool.json-jmespath.faq.1.question': "JMESPath JSONPath'den nasıl farklıdır?",
	'tool.json-jmespath.faq.1.answer':
		'JMESPath, fonksiyonlar, filtreler ve pipe ifadeleri gibi daha güçlü veri dönüştürme özellikleri sunar. JSONPath primarily çıkarma için kullanılırken, JMESPath JSON verisini yeniden şekillendirebilir, filtreleyebilir ve yeni yapılara dönüştürebilir.',
	'tool.json-jmespath.faq.2.question': 'Yaygın JMESPath işlemleri nelerdir?',
	'tool.json-jmespath.faq.2.answer':
		'Yaygın işlemler [?condition] ile filtreleme, {key: value} ile alan seçme, sort_by() ile sıralama ve length(), sum() ve type() gibi fonksiyonlarla veri toplama içerir. Ayrıca karmaşık dönüşümler için | ile işlemleri pipe edebilirsiniz.',
	'tool.json-jmespath.use_case.0':
		'API yanıtlarını gerekli veri yapılarıyla eşleşecek şekilde dönüştürme',
	'tool.json-jmespath.use_case.1':
		'Karmaşık JSON belgelerinden veri filtreleme ve yeniden şekillendirme',
	'tool.json-jmespath.use_case.2': 'İç içe JSON yapılarından belirli bilgileri çıkarma',
	'tool.json-jmespath.use_case.3': 'Büyük JSON veri kümelerinden özel veri görünümleri oluşturma',

	// ── XML Tool FAQs and Use Cases ──────────────────────────────────────────
	'tool.xml-formatter.faq.0.question': 'XML biçimlendirme nedir?',
	'tool.xml-formatter.faq.0.answer':
		'XML biçimlendirme, XML kodunu uygun girinti ve satır sonlarıyla düzenleme işlemidir. Bu, geliştiricilerin belge yapısını ve hiyerarşisini anlamasına yardımcı olur.',
	'tool.xml-formatter.faq.1.question': 'Girintiyi özelleştirebilir miyim?',
	'tool.xml-formatter.faq.1.answer':
		'Evet! Girinti için 2 boşluk, 4 boşluk veya sekmeler arasından seçim yapabilirsiniz. Biçimlendirici, tercih ettiğiniz biçimlendirme stilini uygularken XML yapınızı korur.',
	'tool.xml-formatter.use_case.0':
		'XML dosyalarını dokümantasyon ve kod incelemeleri için daha okunabilir hale getirme',
	'tool.xml-formatter.use_case.1':
		"Web yanıtlarından veya API'lerden gelen küçültülmüş XML'i temizleme",
	'tool.xml-formatter.use_case.2': 'Ekip projelerinde XML biçimlendirmeyi standartlaştırma',
	'tool.xml-formatter.use_case.3': 'Görsel hiyerarşiyi iyileştirerek XML yapısını hata ayıklama',
	'tool.xml-formatter.use_case.4':
		'Preparing XML files for version control with consistent formatting',
	'tool.xml-formatter.faq.2.question': 'Does the formatter preserve comments?',
	'tool.xml-formatter.faq.2.answer':
		'Yes, the XML formatter preserves all comments in their original positions. It only changes the indentation and line breaks to improve readability without affecting the content or structure.',

	'tool.xml-validator.faq.0.question': 'XML doğrulama neyi kontrol eder?',
	'tool.xml-validator.faq.0.answer':
		'XML doğrulama, uygun etiket iç içe geçme, eşleşen açılış/kapanış etiketleri, geçerli öznitelik sözdizimi, doğru karakter kodlaması ve XML belirtim kurallarına uyum dahil olmak üzere iyi biçimlendirilmişliği kontrol eder.',
	'tool.xml-validator.faq.1.question': 'İyi biçimlendirilmiş ve geçerli XML arasındaki fark nedir?',
	'tool.xml-validator.faq.1.answer':
		'İyi biçimlendirilmiş XML temel sözdizimi kurallarına uyar ancak yapısal sorunları olabilir. Geçerli XML, iyi biçimlendirilmiş OLUP izin verilen yapıyı ve içeriği tanımlayan belirli bir DTD veya XML Şemasına uyar.',
	'tool.xml-validator.use_case.0': 'Uygulamalarda işlemeden önce API yanıtlarını doğrulama',
	'tool.xml-validator.use_case.1':
		'Hataları önlemek için yapılandırma dosyalarını dağıtımdan önce kontrol etme',
	'tool.xml-validator.use_case.2': 'Web uygulamalarında XML ayrıştırma hatalarını hata ayıklama',
	'tool.xml-validator.use_case.3': 'Sistemler arasında XML değiştirirken veri bütünlüğünü sağlama',
	'tool.xml-validator.use_case.4':
		'Ensuring XML compliance before submitting to enterprise systems',
	'tool.xml-validator.faq.2.question': 'How do I fix XML validation errors?',
	'tool.xml-validator.faq.2.answer':
		'The validator shows exact line and column numbers for each error. Common fixes include: closing unclosed tags, fixing mismatched tags, removing duplicate attributes, and ensuring proper character encoding. Click on any error to see detailed explanations.',

	'tool.xml-to-json.faq.0.question': "XML'den JSON'a dönüşüm nasıl çalışır?",
	'tool.xml-to-json.faq.0.answer':
		'Dönüşüm, XML öğelerini JSON nesnelerine, öznitelikleri anahtar-değer çiftlerine ve metin içeriğini dize değerlerine eşler. XML ad alanları korunur ve aynı addaki birden çok öğe diziler haline gelir.',
	'tool.xml-to-json.faq.1.question': 'Dönüşüm geri döndürülebilir mi?',
	'tool.xml-to-json.faq.1.answer':
		'Çoğunlukla evet, ancak bazı XML özellikleri gibi yorumlar, işlem talimatları ve özniteliklerin sırası kaybolabilir. Çekirdek veri yapısı, gidiş-dönüş dönüşümü için bozulmadan kalır.',
	'tool.xml-to-json.use_case.0': "SOAP API yanıtlarını modern uygulamalar için JSON'a dönüştürme",
	'tool.xml-to-json.use_case.1': 'JavaScript uygulamalarında XML yapılandırma dosyalarını işleme',
	'tool.xml-to-json.use_case.2': 'Eski XML verilerini modern JSON tabanlı sistemlere geçirme',
	'tool.xml-to-json.use_case.3':
		'XML verilerini JSON tabanlı araçlar ve kitaplıklar kullanarak analiz etme',
	'tool.xml-to-json.use_case.4': 'Transforming RSS feeds into JSON for mobile app consumption',
	'tool.xml-to-json.faq.2.question': 'How are XML attributes handled in JSON?',
	'tool.xml-to-json.faq.2.answer':
		'XML attributes are converted to JSON properties with an "@" prefix by default. This distinguishes them from child elements. You can customize this behavior in advanced settings to use different naming conventions.',

	'tool.json-to-xml.faq.0.question': "JSON'dan XML'e dönüşüm nedir?",
	'tool.json-to-xml.faq.0.answer':
		"JSON'dan XML'e dönüşüm, JSON verisini XML formatına dönüştürür, nesneleri öğelere, dizileri tekrarlanan öğelere ve ilkel değerleri metin içeriğine eşler. Bu, XML girişi gerektiren sistemlerle uyumluluk sağlar.",
	'tool.json-to-xml.faq.1.question': 'Diziler dönüşümde nasıl işlenir?',
	'tool.json-to-xml.faq.1.answer':
		'JSON dizileri, aynı etiket adına sahip birden çok XML öğesi haline gelir. Her dizi öğesi için sarmalayıcı öğeler kullanıp kullanmayacağınızı veya aynı öğe etiketini tekrar edip etmeyeceğinizi yapılandırabilirsiniz.',
	'tool.json-to-xml.use_case.0': 'JSON verilerinden XML site haritaları oluşturma',
	'tool.json-to-xml.use_case.1': 'JSON içeriğinden RSS/Atom beslemeleri oluşturma',
	'tool.json-to-xml.use_case.2': 'XML gerektiren eski sistemler için API yanıtlarını dönüştürme',
	'tool.json-to-xml.use_case.3': "JSON'dan Java uygulamaları için yapılandırma dosyaları oluşturma",
	'tool.json-to-xml.use_case.4': 'Generating SOAP envelopes from JSON payloads for web services',
	'tool.json-to-xml.faq.2.question': 'How does the converter handle special characters?',
	'tool.json-to-xml.faq.2.answer':
		'Special characters are automatically escaped according to XML standards. This includes &, <, >, ", and \', which are converted to their corresponding XML entities to ensure valid XML output.',

	'tool.xml-to-yaml.faq.0.question': "Neden XML'i YAML'a dönüştürelim?",
	'tool.xml-to-yaml.faq.0.answer':
		"YAML, XML'den daha insan tarafından okunabilir ve manuel olarak düzenlemek daha kolaydır. Okunabilirliğin önemli olduğu yapılandırma dosyaları, belgeler ve veri değişimi için yaygın olarak kullanılır.",
	'tool.xml-to-yaml.faq.1.question': 'XML öznitelikleri nasıl işlenir?',
	'tool.xml-to-yaml.faq.1.answer':
		'XML öznitelikleri genellikle YAML öğesi içinde anahtar-değer çiftlerine dönüştürülür. Öznitelikler için özel bir sözdizimi kullanıp kullanmayacağınızı veya onları düzenli özellikler olarak treat edip etmeyeceğinizi yapılandırabilirsiniz.',
	'tool.xml-to-yaml.faq.2.question': "Karmaşık iç içe XML YAML'a dönüştürülebilir mi?",
	'tool.xml-to-yaml.faq.2.answer':
		'Evet! Dönüştürücü, keyfi derinlikte iç içe geçmeyi, karışık içeriği ve karmaşık XML yapılarını işler. Elde edilen YAML, daha okunabilir bir formatta aynı veri hiyerarşisini korur.',
	'tool.xml-to-yaml.use_case.0': "Spring Framework XML yapılandırmalarını YAML'a dönüştürme",
	'tool.xml-to-yaml.use_case.1':
		"Yapılandırma betiklerini XML'den daha okunabilir YAML formatına geçirme",
	'tool.xml-to-yaml.use_case.2': 'XML şablonlarından Kubernetes kaynakları oluşturma',
	'tool.xml-to-yaml.use_case.3': 'Belgeleme amaçlı XML belgelerini işleme',
	'tool.xml-to-yaml.use_case.4': 'Transforming XML data for Ansible playbooks and automation',

	'tool.xml-to-csv.faq.0.question': "XML'den CSV'ye dönüşüm nasıl çalışır?",
	'tool.xml-to-csv.faq.0.answer':
		"Dönüştürücü, XML'den tekrarlanan öğeleri çıkarır ve CSV'de satır oluşturur, öğe öznitelikleri ve alt öğeler sütunlar haline gelir. Hangi öğeleri dönüştüreceğinizi seçebilir ve çıktı formatını özelleştirebilirsiniz.",
	'tool.xml-to-csv.faq.1.question': 'Hangi XML yapıları CSV dönüşümü için en iyisidir?',
	'tool.xml-to-csv.faq.1.answer':
		'Tekrarlayan kayıt benzeri öğeleri olan XML en iyi şekilde çalışır. Her tekrarlanan öğe bir satır olur ve özellikleri sütunlar olur. Derinlemesine iç içe geçmiş yapılar düzleştirilmelidir.',
	'tool.xml-to-csv.use_case.0': 'XML raporlarından verileri e-tablo formatında çıkarma',
	'tool.xml-to-csv.use_case.1':
		"Veritabanlarından XML dışa aktarımlarını analiz için CSV'ye dönüştürme",
	'tool.xml-to-csv.use_case.2': "XML günlüklerini Excel'de veri analizi için işleme",
	'tool.xml-to-csv.use_case.3':
		'XML ve CSV formatlarını kullanarak sistemler arasında veri geçirme',
	'tool.xml-to-csv.use_case.4': 'Analyzing XML API responses by converting to tabular format',

	'tool.xml-minifier.faq.0.question': 'XML küçültme nedir?',
	'tool.xml-minifier.faq.0.answer':
		"XML küçültme, işlevselliğini değiştirmeden XML'den tüm gereksiz karakterleri kaldırır. Bu, dosya boyutunu azaltmak için boşluk, satır sonu ve yorumları içerir.",
	'tool.xml-minifier.faq.1.question': 'Küçültme XML işlemeyi etkiler mi?',
	'tool.xml-minifier.faq.1.answer':
		'Hayır. XML ayrıştırıcıları varsayılan olarak etiketler arasındaki boşlukları yok sayar, bu yüzden küçültülmüş XML biçimlendirilmiş XML ile aynı şekilde işlenir ancak daha küçük dosya boyutu nedeniyle daha hızlı yüklenir.',
	'tool.xml-minifier.use_case.0': 'Daha hızlı API yanıtları için dosya boyutlarını azaltma',
	'tool.xml-minifier.use_case.1': 'Üretim ortamları için XML dosyalarını optimize etme',
	'tool.xml-minifier.use_case.2': 'XML verisi aktarırken bant genişliği kullanımını en aza indirme',
	'tool.xml-minifier.use_case.3': 'XML dosyalarını diğer belgelere gömmek için hazırlama',

	'tool.xml-xpath.faq.0.question': 'XPath nedir?',
	'tool.xml-xpath.faq.0.answer':
		'XPath, XML belgelerinden düğümleri seçmek için bir sorgu dilidir. Öğelere ve özniteliklere gitmek için dosya sistemi yollarına benzer yol ifadeleri kullanır.',
	'tool.xml-xpath.faq.1.question': 'XPath ifadeleri ne yapabilir?',
	'tool.xml-xpath.faq.1.answer':
		'XPath, öğeleri ada göre, öznitelik değerine göre, konuma göre veya içeriğe göre seçebilir. Karmaşık koşulları, metin işleme için fonksiyonları ve gelişmiş sorgulama için matematiksel işlemleri destekler.',
	'tool.xml-xpath.use_case.0': 'Büyük XML belgelerinden belirli verileri çıkarma',
	'tool.xml-xpath.use_case.1': 'Otomatik test takımlarında XML verilerini test etme',
	'tool.xml-xpath.use_case.2': 'XSLT şablonlarını kullanarak XML verilerini dönüştürme',
	'tool.xml-xpath.use_case.3': 'XML yapısını ve içeriğini programatik olarak doğrulama'
};

export default registryTr;

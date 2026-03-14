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
	'category.css.display_name': 'CSS',
	'category.css.description':
		"CSS stil sayfalarını biçimlendir, küçült ve optimize et. Sıkıştırılmış CSS'i güzelleştir veya biçimlendirilmiş CSS'i özellik sıralaması seçenekleriyle küçült.",
	'category.css.primary_keyword': 'css araçları',
	'category.html.display_name': 'HTML',
	'category.html.description':
		"HTML biçimlendirmesini biçimlendir, küçült ve doğrula. Sıkıştırılmış HTML'i güzelleştir veya üretim için boşluğu kaldır.",
	'category.html.primary_keyword': 'html araçları',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'JavaScript kodunu biçimlendir ve küçült. Sıkıştırılmış komut dosyalarını güzelleştir veya daha hızlı sayfa yükleri için küçültülmüş çıkış üret.',
	'category.js.primary_keyword': 'javascript araçları',
	'category.encode.display_name': 'Kodlayıcılar ve Kod Çözücüler',
	'category.encode.description':
		'Base64, URL, HTML varlıkları ve daha fazlasını kodla ve kod çöz. Tüm işlemler tarayıcıda anında çalışır — hiçbir veri hiçbir sunucuya gönderilmez.',
	'category.encode.primary_keyword': 'kodlayıcı kod çözücü araçları',
	'category.escape.display_name': 'Kaçış Araçları',
	'category.escape.description':
		"JSON, HTML, XML, URL'ler ve regex için dizgileri kaçır ve kaçışını geri al. Formatlar arasında özel karakterleri güvenle işle.",
	'category.escape.primary_keyword': 'dize kaçış araçları',
	'category.diff.display_name': 'Diff ve Karşılaştırma',
	'category.diff.description':
		'İki dosyayı veya veri yapısını yan yana karşılaştır. JSON, metin ve yapılandırılmış diff desteğiyle eklemeleri ve silmeleri vurgula.',
	'category.diff.primary_keyword': 'diff karşılaştırma araçları',
	'category.generate.display_name': 'Oluşturucular',
	'category.generate.description':
		'Tür tanımları, JSON Şeması, Markdown tabloları, sahte test verileri ve diğer geliştirici yardımcılarını tarayıcıda tamamen oluştur.',
	'category.generate.primary_keyword': 'kod oluşturucuları',
	'category.text.display_name': 'Metin ve Dizgiler',
	'category.text.description':
		'Metni ve dizgileri biçimlendir, işle, ters çevir, sırala ve analiz et. Kelime sayaçları, okunabilirlik puanları ve markdown dönüştürmelerini içerir.',
	'category.text.primary_keyword': 'metin araçları',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		"TOML dosyalarını biçimlendir, doğrula ve dönüştür. TOML'ü JSON ve YAML'a güvenle dönüştür.",
	'category.toml.primary_keyword': 'toml araçları',
	'category.number.display_name': 'Sayılar ve Matematik',
	'category.number.description':
		'Sayıları biçimlendir, yüzdeleri hesapla, bilimsel gösterimi kullan ve değerleri sayı sistemleri arasında anında dönüştür.',
	'category.number.primary_keyword': 'sayı araçları',
	'category.color.display_name': 'Renk Araçları',
	'category.color.description':
		'Kontrastı kontrol et, renk paletleri oluştur, CSS gradyanları oluştur ve renk körlüğünü simüle et.',
	'category.color.primary_keyword': 'renk araçları',
	'category.crypto.display_name': 'Kripto ve Güvenlik',
	'category.crypto.description':
		"HMAC imzaları oluştur, parola gücünü analiz et, güvenli rastgele dizgiler üret ve ULID'ler oluştur — Web Crypto API'sini kullanan tüm istemci tarafında.",
	'category.crypto.primary_keyword': 'kripto güvenlik araçları',
	'category.web.display_name': 'Web ve Ağ',
	'category.web.description':
		"URL'leri ayrıştır, User-Agent dizgilerini kod çöz, CORS başlıklarını incele, MIME türlerini ara, IP'leri bulmansal konum belirle ve DNS kayıtlarını sorgula.",
	'category.web.primary_keyword': 'web araçları çevrimiçi',
	'category.code.display_name': 'Kod Biçimlendiricileri',
	'category.code.description':
		"CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL ve Markdown'ı tamamen yerel olarak biçimlendir. cURL komutlarını fetch() veya Axios'a dönüştür.",
	'category.code.primary_keyword': 'kod biçimlendirici çevrimiçi',
	'category.pdf.display_name': 'PDF Araçları',
	'category.pdf.description':
		'PDF dosyalarını görüntüle ve metni çıkar — tümü tarayıcıda yerel olarak.',
	'category.pdf.primary_keyword': 'pdf araçları çevrimiçi',
	'category.image.display_name': 'Görüntü Araçları',
	'category.image.description':
		'Görüntüleri yeniden boyutlandır, dönüştür, sıkıştır ve kodla — tümü tarayıcıda yerel olarak. Yükleme yok, sunucu yok.',
	'category.image.primary_keyword': 'görüntü araçları çevrimiçi',
	'category.file.display_name': 'Dosya Araçları',
	'category.file.description':
		"Dosya hash'lerini hesapla ve dosyalar arasında biçim dönüştürmeleri gerçekleştir.",
	'category.file.primary_keyword': 'dosya araçları çevrimiçi',
	'category.qr.display_name': 'QR ve Barkod',
	'category.qr.description':
		'Özelleştirilebilir QR kodları oluştur ve görüntülerden QR kodlarının kodunu çöz — tümü tarayıcıda yerel olarak.',
	'category.qr.primary_keyword': 'qr kod oluşturucu',
	'category.accessibility.display_name': 'Erişilebilirlik',
	'category.accessibility.description':
		'Renk kontrastını test et, renk körlüğünü simüle et ve WCAG yazı tipi boyutu gereksinimlerini kontrol et. Tasarımlarının herkes için erişilebilir olduğundan emin ol.',
	'category.accessibility.primary_keyword': 'erişilebilirlik araçları',

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

	'tool.yaml-validator.display_name': 'YAML Doğrulayıcı',
	'tool.yaml-validator.tagline': 'YAML sözdizimini ve yapısını doğrula',
	'tool.yaml-validator.description':
		'YAML belgelerini sözdizimi hataları açısından doğrula. Girinti sorunlarını, yinelenen anahtarları ve geçersiz karakterleri kesin satır numaraları ile tanımla.',
	'tool.yaml-validator.primary_keyword': 'yaml doğrulayıcı',
	'tool.yaml-validator.meta_title': 'YAML Doğrulayıcı — fmtly.dev',
	'tool.yaml-validator.meta_description':
		"YAML'ı tarayıcıda doğrula. Satır numaraları ile sözdizimi hatalarını algıla. Hiçbir veri cihazdan ayrılmaz.",
	'tool.yaml-validator.operation': 'Doğrula',

	'tool.yaml-to-json.display_name': "YAML'dan JSON'a",
	'tool.yaml-to-json.tagline': "YAML'ı JSON biçimine dönüştür",
	'tool.yaml-to-json.description':
		"YAML belgelerini biçimlendirilmiş JSON'a dönüştür. Bulantıları, diğer adları, çok belgeli YAML ve tüm YAML veri türlerini işle.",
	'tool.yaml-to-json.primary_keyword': "yaml'dan json'a",
	'tool.yaml-to-json.meta_title': "YAML'dan JSON'a Dönüştürücü — fmtly.dev",
	'tool.yaml-to-json.meta_description':
		"YAML'ı tarayıcıda anında JSON'a dönüştür. Bulantıları, diğer adları ve çok belgeli YAML'ı işle. Yükleme yok.",
	'tool.yaml-to-json.operation': 'Dönüştür',

	'tool.yaml-to-xml.display_name': "YAML'dan XML'e",
	'tool.yaml-to-xml.tagline': "YAML'ı XML biçimine dönüştür",
	'tool.yaml-to-xml.description':
		"YAML belgelerini iyi biçimlendirilmiş XML'e dönüştür. YAML anahtarlarını XML öğelerine eşle ve iç içe yapıları ve dizileri işle.",
	'tool.yaml-to-xml.primary_keyword': "yaml'dan xml'e",
	'tool.yaml-to-xml.meta_title': "YAML'dan XML'e Dönüştürücü — fmtly.dev",
	'tool.yaml-to-xml.meta_description': "YAML'ı tarayıcıda anında XML'e dönüştür. Yükleme yok.",
	'tool.yaml-to-xml.operation': 'Dönüştür',

	'tool.yaml-to-csv.display_name': "YAML'dan CSV'ye",
	'tool.yaml-to-csv.tagline': 'YAML dizilerini CSV biçimine dönüştür',
	'tool.yaml-to-csv.description':
		'YAML nesne dizilerini CSV biçimine dönüştür. Nesne anahtarlarından başlıkları çıkar ve verileri satırlara biçimlendir.',
	'tool.yaml-to-csv.primary_keyword': "yaml'dan csv'ye",
	'tool.yaml-to-csv.meta_title': "YAML'dan CSV'ye Dönüştürücü — fmtly.dev",
	'tool.yaml-to-csv.meta_description': "YAML'ı tarayıcıda anında CSV'ye dönüştür. Yükleme yok.",
	'tool.yaml-to-csv.operation': 'Dönüştür',

	'tool.yaml-to-toml.display_name': "YAML'dan TOML'a",
	'tool.yaml-to-toml.tagline': "YAML'ı TOML yapılandırma biçimine dönüştür",
	'tool.yaml-to-toml.description':
		'YAML yapılandırma dosyalarını TOML biçimine dönüştür. İç içe tabloları, dizileri ve tüm YAML veri türlerini işle.',
	'tool.yaml-to-toml.primary_keyword': "yaml'dan toml'a",
	'tool.yaml-to-toml.meta_title': "YAML'dan TOML'a Dönüştürücü — fmtly.dev",
	'tool.yaml-to-toml.meta_description': "YAML'ı tarayıcıda anında TOML'a dönüştür. Yükleme yok.",
	'tool.yaml-to-toml.operation': 'Dönüştür',

	'tool.yaml-diff.display_name': 'YAML Diff',
	'tool.yaml-diff.tagline': 'İki YAML belgesini yan yana karşılaştır',
	'tool.yaml-diff.description':
		'İki YAML belgesini karşılaştır ve ekleme, silme ve değişiklikleri vurgula. Anlamsal karşılaştırma için YAML yapısını anla.',
	'tool.yaml-diff.primary_keyword': 'yaml diff',
	'tool.yaml-diff.meta_title': 'YAML Diff Aracı — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'İki YAML belgesini tarayıcıda karşılaştır. Tüm ekleme, silme ve değişiklikleri vurgula. Yükleme yok.',
	'tool.yaml-diff.operation': 'Karşılaştır',

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

	'tool.csv-to-xml.display_name': "CSV'den XML'e",
	'tool.csv-to-xml.tagline': 'CSV verilerini XML biçimine dönüştür',
	'tool.csv-to-xml.description':
		"CSV dosyalarını iyi biçimlendirilmiş XML'e dönüştür. Sütun başlıklarını öğe adlarına eşle ve her kayıt için satır öğeleri oluştur.",
	'tool.csv-to-xml.primary_keyword': "csv'den xml'e",
	'tool.csv-to-xml.meta_title': "CSV'den XML'e Dönüştürücü — fmtly.dev",
	'tool.csv-to-xml.meta_description':
		"CSV'yi tarayıcıda anında XML'e dönüştür. Başlıkları öğe adlarına eşle. Yükleme yok.",
	'tool.csv-to-xml.operation': 'Dönüştür',

	'tool.csv-to-yaml.display_name': "CSV'den YAML'a",
	'tool.csv-to-yaml.tagline': 'CSV verilerini YAML biçimine dönüştür',
	'tool.csv-to-yaml.description':
		'CSV dosyalarını YAML nesne dizilerine dönüştür. Sütun başlıklarını her satır için YAML anahtarlarına eşle.',
	'tool.csv-to-yaml.primary_keyword': "csv'den yaml'a",
	'tool.csv-to-yaml.meta_title': "CSV'den YAML'a Dönüştürücü — fmtly.dev",
	'tool.csv-to-yaml.meta_description': "CSV'yi tarayıcıda anında YAML'a dönüştür. Yükleme yok.",
	'tool.csv-to-yaml.operation': 'Dönüştür',

	'tool.csv-to-html.display_name': "CSV'den HTML Tablosuna",
	'tool.csv-to-html.tagline': 'CSV verilerini HTML tablosuna dönüştür',
	'tool.csv-to-html.description':
		'CSV dosyalarını biçimlendirilmiş HTML tablolarına dönüştür. İlk satırı sütun başlıkları olarak kullan.',
	'tool.csv-to-html.primary_keyword': "csv'den html tablosuna",
	'tool.csv-to-html.meta_title': "CSV'den HTML Tablosuna Dönüştürücü — fmtly.dev",
	'tool.csv-to-html.meta_description':
		"CSV'yi tarayıcıda anında HTML tablosuna dönüştür. Yükleme yok.",
	'tool.csv-to-html.operation': 'Dönüştür',

	'tool.csv-formatter.display_name': 'CSV Biçimlendirici',
	'tool.csv-formatter.tagline': 'CSV verilerini biçimlendir ve normalleştir',
	'tool.csv-formatter.description':
		'CSV verilerini tutarlı sınırlayıcılar, tırnak işaretleri ve satır sonlarıyla temizle ve biçimlendir. CSV yapısını doğrula ve boşluğu normalleştir.',
	'tool.csv-formatter.primary_keyword': 'csv biçimlendirici',
	'tool.csv-formatter.meta_title': 'CSV Biçimlendirici — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'CSV verilerini tarayıcıda biçimlendir ve temizle. Yükleme yok.',
	'tool.csv-formatter.operation': 'Biçimlendir',

	'tool.csv-validator.display_name': 'CSV Doğrulayıcı',
	'tool.csv-validator.tagline': 'CSV yapısını ve sözdizimini doğrula',
	'tool.csv-validator.description':
		'CSV dosyalarını tutarlı sütun sayıları, uygun tırnak işaretleri ve kodlama sorunları açısından doğrula. Kesin satır numaraları ile kötü biçimlendirilmiş satırları tanımla.',
	'tool.csv-validator.primary_keyword': 'csv doğrulayıcı',
	'tool.csv-validator.meta_title': 'CSV Doğrulayıcı — fmtly.dev',
	'tool.csv-validator.meta_description':
		"CSV'yi tarayıcıda doğrula. Satır numaraları ile yapı hatalarını algıla. Hiçbir veri cihazdan ayrılmaz.",
	'tool.csv-validator.operation': 'Doğrula',

	// ── Metin araçları ───────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Kelime Sayacı',
	'tool.text-word-counter.tagline': 'Metinde kelime, karakter ve cümle sayın',
	'tool.text-word-counter.description':
		'Herhangi bir metinde kelimeleri, karakterleri, cümleleri ve paragrafları say. Okuma süresi tahminlerini ve ortalama kelime uzunluğunu göster.',
	'tool.text-word-counter.primary_keyword': 'kelime sayacı',
	'tool.text-word-counter.meta_title': 'Kelime Sayacı — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Metinde kelime, karakter ve cümleleri tarayıcıda say. Okuma süresi tahminlerini içer. Yükleme yok.',
	'tool.text-word-counter.operation': 'Say',

	'tool.text-readability.display_name': 'Okunabilirlik Analiz Aracı',
	'tool.text-readability.tagline': 'Metin okunabilirlik puanlarını ölç',
	'tool.text-readability.description':
		'Herhangi bir metin için Flesch-Kincaid, Gunning Fog ve diğer okunabilirlik puanlarını hesapla. Hedef kitleniz için içeriği optimize etmeye yardımcı ol.',
	'tool.text-readability.primary_keyword': 'okunabilirlik analiz aracı',
	'tool.text-readability.meta_title': 'Okunabilirlik Analiz Aracı — fmtly.dev',
	'tool.text-readability.meta_description':
		'Metni tarayıcıda Flesch-Kincaid ve diğer puanlarla okunabilirlik açısından ölç. Yükleme yok.',
	'tool.text-readability.operation': 'Analiz Et',

	'tool.text-line-sorter.display_name': 'Satır Sıralayıcı',
	'tool.text-line-sorter.tagline': 'Metin satırlarını alfabetik veya uzunluğa göre sırala',
	'tool.text-line-sorter.description':
		'Satırları alfabetik, sayısal olarak veya uzunluğa göre sırala. Artan ve azalan sıra ile büyük/küçük harfe duyarlı sırlamayı destekle.',
	'tool.text-line-sorter.primary_keyword': 'satır sıralayıcı',
	'tool.text-line-sorter.meta_title': 'Satır Sıralayıcı — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Metin satırlarını tarayıcıda sırala. Alfabetik, sayısal ve uzunluk temelli sıralamayı destekle. Yükleme yok.',
	'tool.text-line-sorter.operation': 'Sırala',

	'tool.text-deduplicate.display_name': 'Yinelenen Satır Kaldırıcı',
	'tool.text-deduplicate.tagline': 'Metinden yinelenen satırları kaldır',
	'tool.text-deduplicate.description':
		'Herhangi bir metinden yinelenen satırları kaldır. Büyük/küçük harfe duyarlı ve büyük/küçük harfe duyarsız eşleştirmeyi ve orijinal satır sırasını koru.',
	'tool.text-deduplicate.primary_keyword': 'yinelenen satırları kaldır',
	'tool.text-deduplicate.meta_title': 'Yinelenen Satır Kaldırıcı — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Metinden yinelenen satırları tarayıcıda kaldır. Büyük/küçük harfe duyarlı ve duyarsız seçenekleri. Yükleme yok.',
	'tool.text-deduplicate.operation': 'Çoğalt Kaldır',

	'tool.text-whitespace.display_name': 'Boşluk Temizleyici',
	'tool.text-whitespace.tagline': 'Ekstra boşluğu kaldır ve boşlanmayı normalleştir',
	'tool.text-whitespace.description':
		'Metinden ekstra boşlukları, sekmeleri ve boş satırları kaldır. Çoklu boşlukları tek boşluklara normalleştir ve baştaki ve sondaki boşluğu kırp.',
	'tool.text-whitespace.primary_keyword': 'boşluk temizleyici',
	'tool.text-whitespace.meta_title': 'Boşluk Temizleyici — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Metinden ekstra boşluğu tarayıcıda kaldır. Boşlanmayı normalleştir ve satırları kırp. Yükleme yok.',
	'tool.text-whitespace.operation': 'Temizle',

	'tool.text-markdown-to-html.display_name': "Markdown'dan HTML'e",
	'tool.text-markdown-to-html.tagline': "Markdown'ı HTML'e dönüştür",
	'tool.text-markdown-to-html.description':
		"Markdown metnini HTML'e dönüştür. Başlıkları, listeleri, tabloları, kod bloklarını, bağlantıları, görselleri ve tüm CommonMark özelliklerini destekle.",
	'tool.text-markdown-to-html.primary_keyword': "markdown'dan html'e",
	'tool.text-markdown-to-html.meta_title': "Markdown'dan HTML'e Dönüştürücü — fmtly.dev",
	'tool.text-markdown-to-html.meta_description':
		"Markdown'ı tarayıcıda anında HTML'e dönüştür. Tüm CommonMark özelliklerini destekle. Yükleme yok.",
	'tool.text-markdown-to-html.operation': 'Dönüştür',

	'tool.text-html-to-markdown.display_name': "HTML'den Markdown'a",
	'tool.text-html-to-markdown.tagline': "HTML'i Markdown'a dönüştür",
	'tool.text-html-to-markdown.description':
		"HTML'i temiz Markdown'a dönüştür. Başlıkları, paragrafları, listeleri, tabloları, kod bloklarını ve satır içi biçimlendirmeyi işle.",
	'tool.text-html-to-markdown.primary_keyword': "html'den markdown'a",
	'tool.text-html-to-markdown.meta_title': "HTML'den Markdown'a Dönüştürücü — fmtly.dev",
	'tool.text-html-to-markdown.meta_description':
		"HTML'i tarayıcıda anında Markdown'a dönüştür. Yükleme yok.",
	'tool.text-html-to-markdown.operation': 'Dönüştür',

	'tool.text-reverser.display_name': 'Metin Tersine Çevirici',
	'tool.text-reverser.tagline': 'Metni, kelimeleri veya satırları ters çevir',
	'tool.text-reverser.description':
		'Metni karakter karakter, kelime kelime veya satır satır ters çevir. Çift yönlü — her iki yöne de yapıştır.',
	'tool.text-reverser.primary_keyword': 'metin tersine çevirici',
	'tool.text-reverser.meta_title': 'Metin Tersine Çevirici — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Metni tarayıcıda anında ters çevir. Karakterleri, kelimeleri veya satırları ters çevir. Yükleme yok.',
	'tool.text-reverser.operation': 'Ters Çevir',

	// ── Kod araçları ─────────────────────────────────────────────────────────
	'tool.code-css.display_name': 'CSS Biçimlendirici',
	'tool.code-css.tagline': 'CSS stil sayfalarını biçimlendir ve güzelleştir',
	'tool.code-css.description':
		"CSS'yi tutarlı girintileme ve özellik sıralaması ile biçimlendir. Ayarlanabilir satır genişliği ile Prettier tarzı biçimlendirmeyi destekle.",
	'tool.code-css.primary_keyword': 'css biçimlendirici',
	'tool.code-css.meta_title': 'CSS Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-css.meta_description':
		"CSS'yi tarayıcıda biçimlendir ve güzelleştir. Ayarlanabilir girinti ve özellik sıralaması. Hiçbir veri cihazdan ayrılmaz.",
	'tool.code-css.operation': 'Biçimlendir',

	'tool.code-scss.display_name': 'SCSS Biçimlendirici',
	'tool.code-scss.tagline': 'SCSS stil sayfalarını biçimlendir ve güzelleştir',
	'tool.code-scss.description':
		"SCSS dosyalarını tutarlı girintileme ile biçimlendir. Değişkenleri, iç içe kuralları, karışımları ve tüm SCSS'ye özgü sözdizimini destekle.",
	'tool.code-scss.primary_keyword': 'scss biçimlendirici',
	'tool.code-scss.meta_title': 'SCSS Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-scss.meta_description':
		"SCSS'yi tarayıcıda biçimlendir ve güzelleştir. Hiçbir veri cihazdan ayrılmaz.",
	'tool.code-scss.operation': 'Biçimlendir',

	'tool.code-less.display_name': 'LESS Biçimlendirici',
	'tool.code-less.tagline': 'LESS stil sayfalarını biçimlendir ve güzelleştir',
	'tool.code-less.description':
		"LESS dosyalarını tutarlı girintileme ile biçimlendir. Değişkenleri, karışımları, iç içe nesneleri ve tüm LESS'e özgü sözdizimini destekle.",
	'tool.code-less.primary_keyword': 'less biçimlendirici',
	'tool.code-less.meta_title': 'LESS Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-less.meta_description':
		"LESS'i tarayıcıda biçimlendir ve güzelleştir. Hiçbir veri cihazdan ayrılmaz.",
	'tool.code-less.operation': 'Biçimlendir',

	'tool.code-html.display_name': 'HTML Biçimlendirici',
	'tool.code-html.tagline': 'HTML biçimlendirmesini biçimlendir ve güzelleştir',
	'tool.code-html.description':
		"HTML'i uygun girintileme ve etiket iç içe olması ile biçimlendir. Satır içi ve blok öğelerini, nitelikleri ve gömülü CSS ve JavaScript'i işle.",
	'tool.code-html.primary_keyword': 'html biçimlendirici',
	'tool.code-html.meta_title': 'HTML Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-html.meta_description':
		"HTML'i tarayıcıda biçimlendir ve güzelleştir. Uygun girintileme ve etiket iç içe olması. Hiçbir veri cihazdan ayrılmaz.",
	'tool.code-html.operation': 'Biçimlendir',

	'tool.code-javascript.display_name': 'JavaScript Biçimlendirici',
	'tool.code-javascript.tagline': 'JavaScript kodunu biçimlendir ve güzelleştir',
	'tool.code-javascript.description':
		"JavaScript'i Prettier tarzı biçimlendirme ile biçimlendir. ES2022+, JSX, modül sözdizimini ve semikol ve tek tırnak gibi ayarlanabilir seçenekleri destekle.",
	'tool.code-javascript.primary_keyword': 'javascript biçimlendirici',
	'tool.code-javascript.meta_title': 'JavaScript Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-javascript.meta_description':
		"JavaScript'i tarayıcıda biçimlendir ve güzelleştir. Modern ES sözdizimini destekle. Hiçbir veri cihazdan ayrılmaz.",
	'tool.code-javascript.operation': 'Biçimlendir',

	'tool.code-typescript.display_name': 'TypeScript Biçimlendirici',
	'tool.code-typescript.tagline': 'TypeScript kodunu biçimlendir ve güzelleştir',
	'tool.code-typescript.description':
		"TypeScript'i Prettier tarzı biçimlendirme ile biçimlendir. Jenerikler, dekoratörler ve tür ek açıklamaları dahil tüm TypeScript özelliklerini destekle.",
	'tool.code-typescript.primary_keyword': 'typescript biçimlendirici',
	'tool.code-typescript.meta_title': 'TypeScript Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-typescript.meta_description':
		"TypeScript'i tarayıcıda biçimlendir ve güzelleştir. Tüm TypeScript sözdizimini destekle. Hiçbir veri cihazdan ayrılmaz.",
	'tool.code-typescript.operation': 'Biçimlendir',

	'tool.code-graphql.display_name': 'GraphQL Biçimlendirici',
	'tool.code-graphql.tagline': 'GraphQL şemalarını ve sorgularını biçimlendir ve güzelleştir',
	'tool.code-graphql.description':
		'GraphQL şemalarını ve sorgularını tutarlı girintileme ile biçimlendir. SDL, sorgularını, mutasyonlarını, aboneliklerini ve fragmentlerini destekle.',
	'tool.code-graphql.primary_keyword': 'graphql biçimlendirici',
	'tool.code-graphql.meta_title': 'GraphQL Biçimlendirici ve Güzelleştirici — fmtly.dev',
	'tool.code-graphql.meta_description':
		"GraphQL'i tarayıcıda biçimlendir ve güzelleştir. SDL, sorgularını ve mutasyonlarını destekle. Hiçbir veri cihazdan ayrılmaz.",
	'tool.code-graphql.operation': 'Biçimlendir',

	'tool.code-markdown.display_name': 'Markdown Biçimlendirici',
	'tool.code-markdown.tagline': 'Markdown belgelerini biçimlendir ve normalleştir',
	'tool.code-markdown.description':
		"Markdown'ı tutarlı başlık stilleri, liste girintileri ve tablo hizalaması ile biçimlendir. Boşluğu ve boş satırları normalleştir.",
	'tool.code-markdown.primary_keyword': 'markdown biçimlendirici',
	'tool.code-markdown.meta_title': 'Markdown Biçimlendirici — fmtly.dev',
	'tool.code-markdown.meta_description':
		"Markdown'ı tarayıcıda biçimlendir ve normalleştir. Hiçbir veri cihazdan ayrılmaz.",
	'tool.code-markdown.operation': 'Biçimlendir',

	'tool.code-curl-to-fetch.display_name': "cURL'den Fetch'e",
	'tool.code-curl-to-fetch.tagline': "cURL komutlarını JavaScript fetch()'e dönüştür",
	'tool.code-curl-to-fetch.description':
		'cURL komutlarını yerel JavaScript fetch() çağrılarına dönüştür. Başlıkları, istek gövdesini, kimlik doğrulamayı ve tüm yaygın cURL seçeneklerini işle.',
	'tool.code-curl-to-fetch.primary_keyword': "curl'den fetch'e dönüştürücü",
	'tool.code-curl-to-fetch.meta_title': "cURL'den Fetch'e Dönüştürücü — fmtly.dev",
	'tool.code-curl-to-fetch.meta_description':
		"cURL komutlarını tarayıcıda JavaScript fetch()'e dönüştür. Başlıkları, gövdeyi ve doğrulamayı işle. Yükleme yok.",
	'tool.code-curl-to-fetch.operation': 'Dönüştür',

	'tool.code-curl-to-axios.display_name': "cURL'den Axios'a",
	'tool.code-curl-to-axios.tagline': 'cURL komutlarını Axios isteklerine dönüştür',
	'tool.code-curl-to-axios.description':
		'cURL komutlarını Axios istek çağrılarına dönüştür. Başlıkları, istek gövdesini, kimlik doğrulamayı ve tüm yaygın cURL seçeneklerini işle.',
	'tool.code-curl-to-axios.primary_keyword': "curl'den axios'a dönüştürücü",
	'tool.code-curl-to-axios.meta_title': "cURL'den Axios'a Dönüştürücü — fmtly.dev",
	'tool.code-curl-to-axios.meta_description':
		'cURL komutlarını tarayıcıda Axios isteklerine dönüştür. Başlıkları, gövdeyi ve doğrulamayı işle. Yükleme yok.',
	'tool.code-curl-to-axios.operation': 'Dönüştür',

	// ── Renk araçları ────────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Renk Dönüştürücü',
	'tool.color-converter.tagline': 'Renkleri HEX, RGB, HSL ve diğerleri arasında dönüştür',
	'tool.color-converter.description':
		'Renkleri HEX, RGB, RGBA, HSL, HSLA ve adlandırılmış CSS renk biçimleri arasında dönüştür. Seçilen rengin canlı ön izlemesini göster.',
	'tool.color-converter.primary_keyword': 'renk dönüştürücü',
	'tool.color-converter.meta_title': 'Renk Dönüştürücü — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Renkleri tarayıcıda HEX, RGB, HSL ve CSS adlandırılmış renkler arasında dönüştür. Canlı ön izleme dahil.',
	'tool.color-converter.operation': 'Dönüştür',

	'tool.color-contrast.display_name': 'Renk Kontrast Denetleyicisi',
	'tool.color-contrast.tagline': 'İki renk arasında WCAG kontrast oranını kontrol et',
	'tool.color-contrast.description':
		'İki renk arasında kontrast oranını hesapla ve WCAG 2.1 AA ve AAA erişilebilirlik uyumluluğunu normal ve büyük metin için kontrol et.',
	'tool.color-contrast.primary_keyword': 'renk kontrast denetleyicisi',
	'tool.color-contrast.meta_title': 'Renk Kontrast Denetleyicisi — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Tarayıcıda WCAG AA ve AAA uyumu için renk kontrast oranını kontrol et.',
	'tool.color-contrast.operation': 'Kontrol Et',

	// ── Kripto araçları ──────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'HMAC Oluşturucu',
	'tool.crypto-hmac.tagline': 'SHA algoritmaları ile HMAC imzaları oluştur',
	'tool.crypto-hmac.description':
		"SHA-256, SHA-384 veya SHA-512 kullanan HMAC imzaları oluştur. Web Crypto API'sini kullanan hex veya Base64 kodlanmış imzaları çıkart.",
	'tool.crypto-hmac.primary_keyword': 'hmac oluşturucu',
	'tool.crypto-hmac.meta_title': 'HMAC Oluşturucu — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		"Web Crypto API'sini kullanan tarayıcıda HMAC imzaları oluştur. SHA-256, SHA-384 ve SHA-512'yi destekle.",
	'tool.crypto-hmac.operation': 'Oluştur',

	'tool.crypto-password-strength.display_name': 'Parola Gücü Denetleyicisi',
	'tool.crypto-password-strength.tagline': 'Parola gücü ve entropisi analiz et',
	'tool.crypto-password-strength.description':
		'Parola gücünü entropi hesaplaması, desen algılaması ve tahmini kırılma süresi ile değerlendir. Hiçbir veri hiçbir zaman hiçbir sunucuya gönderilmez.',
	'tool.crypto-password-strength.primary_keyword': 'parola gücü denetleyicisi',
	'tool.crypto-password-strength.meta_title': 'Parola Gücü Denetleyicisi — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		'Parolanın gücü ve entropisi tarayıcıda kontrol et. Hiçbir parola iletilmez. % 100 istemci tarafı.',
	'tool.crypto-password-strength.operation': 'Analiz Et',

	'tool.crypto-ulid.display_name': 'ULID Oluşturucu',
	'tool.crypto-ulid.tagline':
		'Evrensel Benzersiz Sözcüksel Olarak Sıralanabilir Tanımlayıcılar Oluştur',
	'tool.crypto-ulid.description':
		"ULID'ler oluştur — zaman sıralı, URL güvenli, sıralanabilir ve çarpışma dirençli tanımlayıcılar. Kriptografik rastgelelik için Web Crypto API'sini kullan.",
	'tool.crypto-ulid.primary_keyword': 'ulid oluşturucu',
	'tool.crypto-ulid.meta_title': 'ULID Oluşturucu — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		"Web Crypto API'sini kullanan tarayıcıda ULID'ler oluştur. Sıralanabilir, URL güvenli tanımlayıcılar.",
	'tool.crypto-ulid.operation': 'Oluştur',

	'tool.crypto-random-string.display_name': 'Rastgele Dize Oluşturucu',
	'tool.crypto-random-string.tagline': 'Kriptografik güvenli rastgele dizgiler oluştur',
	'tool.crypto-random-string.description':
		"Ayarlanabilir uzunluk ve karakter setleri ile kriptografik güvenli rastgele dizgiler oluştur. Gerçek rastgelelik için Web Crypto API'sini kullan.",
	'tool.crypto-random-string.primary_keyword': 'rastgele dize oluşturucu',
	'tool.crypto-random-string.meta_title': 'Rastgele Dize Oluşturucu — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		"Web Crypto API'sini kullanan tarayıcıda güvenli rastgele dizgiler oluştur. Ayarlanabilir uzunluk ve karakter setleri.",
	'tool.crypto-random-string.operation': 'Oluştur',

	// ── Diff araçları ────────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Metin Diff',
	'tool.diff-text.tagline': 'İki metin bloğunu karşılaştır ve farklılıkları vurgula',
	'tool.diff-text.description':
		'İki metin bloğunu yan yana karşılaştır ve eklenen, kaldırılan ve değişmeyen satırları vurgula. Kelime seviyesi ve satır seviyesi diff modlarını destekle.',
	'tool.diff-text.primary_keyword': 'metin diff',
	'tool.diff-text.meta_title': 'Metin Diff Aracı — fmtly.dev',
	'tool.diff-text.meta_description':
		'İki metin bloğunu tarayıcıda karşılaştır. Kelime veya satır seviyesinde ekleme ve silmeleri vurgula. Yükleme yok.',
	'tool.diff-text.operation': 'Karşılaştır',

	// ── Kodlama araçları ─────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Base64 Kodlayıcı / Kod Çözücü',
	'tool.encode-base64.tagline': 'Base64 dizgilerini kodla ve kod çöz',
	'tool.encode-base64.description':
		"Metni veya ikili verileri Base64'e kodla ve Base64 dizgilerini metne geri çöz. Standart ve URL güvenli Base64 varyantlarını destekle.",
	'tool.encode-base64.primary_keyword': 'base64 kodlayıcı kod çözücü',
	'tool.encode-base64.meta_title': 'Base64 Kodlayıcı ve Kod Çözücü — fmtly.dev',
	'tool.encode-base64.meta_description':
		"Base64'ü tarayıcıda kodla ve kod çöz. Standart ve URL güvenli varyantlarını destekle. Yükleme yok.",
	'tool.encode-base64.operation': 'Kodla / Kod Çöz',

	'tool.encode-url.display_name': 'URL Kodlayıcı / Kod Çözücü',
	'tool.encode-url.tagline': 'URL kodlanmış dizgileri kodla ve kod çöz',
	'tool.encode-url.description':
		"URL'leri ve URL bileşenlerini yüzde kodla veya yüzde kodlanmış dizgileri kod çöz. RFC 3986'ya göre tüm ayrılmış ve özel karakterleri işle.",
	'tool.encode-url.primary_keyword': 'url kodlayıcı kod çözücü',
	'tool.encode-url.meta_title': 'URL Kodlayıcı ve Kod Çözücü — fmtly.dev',
	'tool.encode-url.meta_description':
		"URL'leri tarayıcıda kodla ve kod çöz. Tüm özel karakterleri işle. Yükleme yok.",
	'tool.encode-url.operation': 'Kodla / Kod Çöz',

	'tool.encode-html.display_name': 'HTML Kodlayıcı / Kod Çözücü',
	'tool.encode-html.tagline': 'HTML varlıklarını kodla ve kod çöz',
	'tool.encode-html.description':
		'Özel karakterleri HTML varlıklarına dönüştür ve geri dönüştür. &amp;, &lt;, &gt;, &quot; ve tüm diğer HTML özel karakterlerini işle.',
	'tool.encode-html.primary_keyword': 'html kodlayıcı kod çözücü',
	'tool.encode-html.meta_title': 'HTML Kodlayıcı ve Kod Çözücü — fmtly.dev',
	'tool.encode-html.meta_description':
		'HTML varlıklarını tarayıcıda kodla ve kod çöz. Yükleme yok.',
	'tool.encode-html.operation': 'Kodla / Kod Çöz',

	'tool.encode-html-entities.display_name': 'HTML Varlıkları Referansı',
	'tool.encode-html-entities.tagline': 'HTML varlık kodlarını ara ve gözden geçir',
	'tool.encode-html-entities.description':
		'Ondalık, onaltılık ve adlandırılmış biçimleri ile tüm HTML varlıklarını ara ve gözden geçir. Unicode kod noktalarını ve görsel ön izlemeleri içer.',
	'tool.encode-html-entities.primary_keyword': 'html varlıkları referansı',
	'tool.encode-html-entities.meta_title': 'HTML Varlıkları Referansı — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'HTML varlıklarını tarayıcıda gözden geçir. Ad, ondalık veya onaltılık koda göre ara.',
	'tool.encode-html-entities.operation': 'Ara',

	'tool.encode-unicode.display_name': 'Unicode Analiz Aracı',
	'tool.encode-unicode.tagline': 'Metindeki Unicode kod noktalarını analiz et',
	'tool.encode-unicode.description':
		'Herhangi bir metni onaltılık, CSS kaçışı, JavaScript kaçışı ve UTF-8 bayt temsilleri ile Unicode kod noktalarına kod çöz. Emoji ve çok kod noktalı dizileri işle.',
	'tool.encode-unicode.primary_keyword': 'unicode analiz aracı',
	'tool.encode-unicode.meta_title': 'Unicode Analiz Aracı — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Unicode kod noktalarını tarayıcıda analiz et. Onaltılık, CSS kaçışları, JS kaçışları ve UTF-8 baytlarını incele.',
	'tool.encode-unicode.operation': 'Analiz Et',

	// ── Kaçış araçları ───────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'JSON Dize Kaçışı',
	'tool.escape-json.tagline': 'JSON dizgilerini kaçır ve kaçışını geri al',
	'tool.escape-json.description':
		'JSON değerleri içinde kullanım için dizelerdeki özel karakterleri kaçır veya JSON dize değerlerini düz metne geri kaçışını al. Satır sonları, sekmeler, tırnak ve ters eğik çizgileri işle.',
	'tool.escape-json.primary_keyword': 'json kaçış kaçışını geri al',
	'tool.escape-json.meta_title': 'JSON Dize Kaçışı ve Kaçışını Geri Al — fmtly.dev',
	'tool.escape-json.meta_description':
		'JSON dizgilerini tarayıcıda kaçır ve kaçışını geri al. Yükleme yok.',
	'tool.escape-json.operation': 'Kaçır / Kaçışını Geri Al',

	// ── Dosya araçları ───────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'Dosya Hash Hesaplayıcı',
	'tool.file-hash.tagline': 'MD5, SHA-1, SHA-256 ve SHA-512 dosya hashlerini hesapla',
	'tool.file-hash.description':
		'Herhangi bir dosya için kriptografik hash değerlerini hesapla. MD5, SHA-1, SHA-256 ve SHA-512 algoritmalarını destekle. Tamamen tarayıcıda çalışır.',
	'tool.file-hash.primary_keyword': 'dosya hash hesaplayıcı',
	'tool.file-hash.meta_title': 'Dosya Hash Hesaplayıcı — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		"Dosya hashlerini tarayıcıda hesapla. MD5, SHA-1, SHA-256 ve SHA-512'yi destekle. Hiçbir dosya hiçbir sunucuya yüklenmez.",
	'tool.file-hash.operation': 'Hash',

	// ── Oluşturma araçları ────────────────────────────────────────────────────
	'tool.generate-uuid.display_name': 'UUID Oluşturucu',
	'tool.generate-uuid.tagline': "Rastgele UUID'ler (v4) oluştur",
	'tool.generate-uuid.description':
		"Web Crypto API'sini kullanarak RFC 4122 sürüm 4 UUID'ler oluştur. Tek tıkla tekil veya toplu UUID'ler oluştur.",
	'tool.generate-uuid.primary_keyword': 'uuid oluşturucu',
	'tool.generate-uuid.meta_title': 'UUID Oluşturucu — fmtly.dev',
	'tool.generate-uuid.meta_description':
		"Web Crypto API'sini kullanan tarayıcıda rastgele UUID'ler oluştur. RFC 4122 v4 uyumlu.",
	'tool.generate-uuid.operation': 'Oluştur',

	// ── Görüntü araçları ─────────────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Görüntü Sıkıştırıcı',
	'tool.image-compressor.tagline': 'Görüntüleri kalite kaybı olmadan sıkıştır',
	'tool.image-compressor.description':
		'JPEG, PNG ve WebP görüntülerini tarayıcıda sıkıştır. İndirmeden önce kalite ayarlarını ayarla ve ön izle. Görüntü yüklenmez.',
	'tool.image-compressor.primary_keyword': 'görüntü sıkıştırıcı',
	'tool.image-compressor.meta_title': 'Görüntü Sıkıştırıcı — fmtly.dev',
	'tool.image-compressor.meta_description':
		"Görüntüleri tarayıcıda sıkıştır. JPEG, PNG ve WebP'yi destekle. Hiçbir görüntü hiçbir sunucuya yüklenmez.",
	'tool.image-compressor.operation': 'Sıkıştır',

	// ── Sayı araçları ────────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Sayı Biçimlendirici',
	'tool.number-formatter.tagline': 'Sayıları yerel ayara özgü ayırıcılar ile biçimlendir',
	'tool.number-formatter.description':
		'Sayıları binler ayırıcısı, ondalık yerler ve yerel ayara özgü gösterim ile biçimlendir. Para birimi biçimlendirmesi ve bilimsel gösterimi destekle.',
	'tool.number-formatter.primary_keyword': 'sayı biçimlendirici',
	'tool.number-formatter.meta_title': 'Sayı Biçimlendirici — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Sayıları tarayıcıda yerel ayırıcılar ve para birimi sembolleri ile biçimlendir.',
	'tool.number-formatter.operation': 'Biçimlendir',

	'tool.number-roman.display_name': 'Roma Rakamları Dönüştürücü',
	'tool.number-roman.tagline': 'Roma rakamları ve tam sayılar arasında dönüştür',
	'tool.number-roman.description':
		'Tam sayıları Roma rakamlarına ve geri dönüştür. Standart Roma rakamı gösterimi ile 1 ile 3999 arasındaki sayıları destekle.',
	'tool.number-roman.primary_keyword': 'roma rakamları dönüştürücü',
	'tool.number-roman.meta_title': 'Roma Rakamları Dönüştürücü — fmtly.dev',
	'tool.number-roman.meta_description':
		'Roma rakamları ve tam sayılar arasında tarayıcıda dönüştür.',
	'tool.number-roman.operation': 'Dönüştür',

	'tool.number-percentage.display_name': 'Yüzde Hesaplayıcı',
	'tool.number-percentage.tagline': 'Yüzdeleri, artışları ve azalışları hesapla',
	'tool.number-percentage.description':
		'Yüzde değerlerini, yüzde değişimini ve toplam yüzdesini hesapla. Artış/azalış hesaplamalarını ve ters yüzde aramalarını destekle.',
	'tool.number-percentage.primary_keyword': 'yüzde hesaplayıcı',
	'tool.number-percentage.meta_title': 'Yüzde Hesaplayıcı — fmtly.dev',
	'tool.number-percentage.meta_description': 'Yüzdeleri ve yüzde değişimini tarayıcıda hesapla.',
	'tool.number-percentage.operation': 'Hesapla',

	'tool.number-scientific.display_name': 'Bilimsel Gösterim Dönüştürücü',
	'tool.number-scientific.tagline': 'Sayıları bilimsel gösterime ve çıktısına dönüştür',
	'tool.number-scientific.description':
		'Sayıları bilimsel gösterime dönüştür ve geri dönüştür. Mantis, üs ve eşdeğer mühendislik gösterimini göster.',
	'tool.number-scientific.primary_keyword': 'bilimsel gösterim dönüştürücü',
	'tool.number-scientific.meta_title': 'Bilimsel Gösterim Dönüştürücü — fmtly.dev',
	'tool.number-scientific.meta_description': 'Sayıları tarayıcıda bilimsel gösterime dönüştür.',
	'tool.number-scientific.operation': 'Dönüştür',

	'tool.number-statistics.display_name': 'İstatistik Hesaplayıcı',
	'tool.number-statistics.tagline': 'Ortalama, medyan, mod ve daha fazlasını hesapla',
	'tool.number-statistics.description':
		'Sayı listesi için açıklayıcı istatistikleri hesapla: ortalama, medyan, mod, standart sapma, varyans, min, maks ve dörttebirlikler.',
	'tool.number-statistics.primary_keyword': 'istatistik hesaplayıcı',
	'tool.number-statistics.meta_title': 'İstatistik Hesaplayıcı — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Ortalama, medyan, standart sapma ve daha fazlasını tarayıcıda hesapla.',
	'tool.number-statistics.operation': 'Hesapla',

	'tool.number-matrix.display_name': 'Matris Hesaplayıcı',
	'tool.number-matrix.tagline': 'Matris işlemleri ve hesaplamaları gerçekleştir',
	'tool.number-matrix.description':
		'Herhangi bir boyuttaki matrislerde toplama, çıkarma, çarpma, devrik, determinant ve ters işlemleri yapıştır.',
	'tool.number-matrix.primary_keyword': 'matris hesaplayıcı',
	'tool.number-matrix.meta_title': 'Matris Hesaplayıcı — fmtly.dev',
	'tool.number-matrix.meta_description':
		'Tarayıcıda matris işlemleri gerçekleştir. Toplama, çarpma, ters işlemleri ve daha fazlasını destekle.',
	'tool.number-matrix.operation': 'Hesapla',

	'tool.number-unit-converter.display_name': 'Birim Dönüştürücü',
	'tool.number-unit-converter.tagline': 'Ölçüm birimleri arasında dönüştür',
	'tool.number-unit-converter.description':
		'Uzunluk, ağırlık, sıcaklık, hacim, alan, hız ve daha fazlası arasında dönüştür. Metrik ve emperyal sistemleri destekle.',
	'tool.number-unit-converter.primary_keyword': 'birim dönüştürücü',
	'tool.number-unit-converter.meta_title': 'Birim Dönüştürücü — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Tarayıcıda ölçüm birimleri arasında dönüştür. Uzunluk, ağırlık, sıcaklık ve daha fazlasını destekle.',
	'tool.number-unit-converter.operation': 'Dönüştür',

	// ── PDF araçları ─────────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'PDF Görüntüleyici',
	'tool.pdf-viewer.tagline': 'PDF dosyalarını görüntüle ve metni çıkar',
	'tool.pdf-viewer.description':
		"PDF dosyalarını tarayıcıda görüntüle ve metin içeriğini çıkar. Çok sayfalı PDF'leri ve metin seçimini destekle. Hiçbir dosya hiçbir sunucuya yüklenmez.",
	'tool.pdf-viewer.primary_keyword': 'pdf görüntüleyici',
	'tool.pdf-viewer.meta_title': 'PDF Görüntüleyici — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		"PDF dosyalarını tarayıcıda görüntüle. Herhangi bir PDF'den metni çıkar. Yükleme yok.",
	'tool.pdf-viewer.operation': 'Görüntüle',

	// ── QR araçları ──────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'QR Kod Oluşturucu',
	'tool.qr-generator.tagline': 'Özelleştirilebilir QR kodları oluştur',
	'tool.qr-generator.description':
		"Metin, URL, iletişim bilgisi ve daha fazlasından QR kodları oluştur. Boyut, hata düzeltme seviyesi ve renklerini özelleştir. PNG veya SVG'de indir.",
	'tool.qr-generator.primary_keyword': 'qr kod oluşturucu',
	'tool.qr-generator.meta_title': 'QR Kod Oluşturucu — fmtly.dev',
	'tool.qr-generator.meta_description': "QR kodlarını tarayıcıda oluştur. PNG veya SVG'de indir.",
	'tool.qr-generator.operation': 'Oluştur',

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

	// ── Web araçları ─────────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'URL Ayrıştırıcı',
	'tool.web-url-parser.tagline': 'URL bileşenlerini ayrıştır ve incele',
	'tool.web-url-parser.description':
		"URL'leri bileşenlerine ayır: protokol, host, port, yol, sorgu parametreleri ve fragment. Herhangi bir URL'yi ayrıştır ve incele.",
	'tool.web-url-parser.primary_keyword': 'url ayrıştırıcı',
	'tool.web-url-parser.meta_title': 'URL Ayrıştırıcı — fmtly.dev',
	'tool.web-url-parser.meta_description':
		"URL bileşenlerini tarayıcıda ayrıştır ve incele. Herhangi bir URL'yi parçalarına ayır.",
	'tool.web-url-parser.operation': 'Ayrıştır',

	'tool.web-user-agent.display_name': 'User-Agent Ayrıştırıcı',
	'tool.web-user-agent.tagline': 'User-Agent dizgilerini ayrıştır ve kod çöz',
	'tool.web-user-agent.description':
		'User-Agent dizgilerini ayrıştır ve tarayıcı, motor, işletim sistemi ve cihaz türünü tanımla. Modern ve eski tarayıcı biçimlerini destekle.',
	'tool.web-user-agent.primary_keyword': 'user agent ayrıştırıcı',
	'tool.web-user-agent.meta_title': 'User-Agent Ayrıştırıcı — fmtly.dev',
	'tool.web-user-agent.meta_description':
		'User-Agent dizgilerini tarayıcıda ayrıştır. Tarayıcı, işletim sistemi ve cihazı tanımla.',
	'tool.web-user-agent.operation': 'Ayrıştır',

	'tool.web-cors.display_name': 'CORS Başlık Denetleyicisi',
	'tool.web-cors.tagline': 'CORS başlıklarını incele ve anla',
	'tool.web-cors.description':
		'CORS başlıklarını ara ve açıkla. Access-Control-Allow-Origin, kimlik bilgileri, preflight ve diğer CORS direktiflerini anla.',
	'tool.web-cors.primary_keyword': 'cors başlık denetleyicisi',
	'tool.web-cors.meta_title': 'CORS Başlık Denetleyicisi — fmtly.dev',
	'tool.web-cors.meta_description':
		'CORS başlıklarını tarayıcıda incele. Tüm Access-Control direktiflerini anla.',
	'tool.web-cors.operation': 'Kontrol Et',

	'tool.web-mime-types.display_name': 'MIME Türü Araması',
	'tool.web-mime-types.tagline': 'MIME türlerini uzantı veya ada göre ara',
	'tool.web-mime-types.description':
		'MIME türlerini dosya uzantısı, ad veya içerik türü açısından ara. Örnekler ile tüm IANA kayıtlı MIME türlerini kapsayın.',
	'tool.web-mime-types.primary_keyword': 'mime türü araması',
	'tool.web-mime-types.meta_title': 'MIME Türü Araması — fmtly.dev',
	'tool.web-mime-types.meta_description': 'MIME türlerini tarayıcıda dosya uzantısına göre ara.',
	'tool.web-mime-types.operation': 'Ara',

	'tool.web-ip-lookup.display_name': 'IP Araması',
	'tool.web-ip-lookup.tagline': 'IP adresleri için coğrafi konum ve bilgisi ara',
	'tool.web-ip-lookup.description':
		'Herhangi bir IP adresi için coğrafi konum, ASN ve sağlayıcı bilgilerini ara. IPv4 ve IPv6 adreslerini destekle.',
	'tool.web-ip-lookup.primary_keyword': 'ip araması',
	'tool.web-ip-lookup.meta_title': 'IP Araması — fmtly.dev',
	'tool.web-ip-lookup.meta_description':
		'IP adresi coğrafi konum ve sağlayıcı bilgilerini tarayıcıda ara.',
	'tool.web-ip-lookup.operation': 'Ara',

	'tool.web-dns-lookup.display_name': 'DNS Araması',
	'tool.web-dns-lookup.tagline': 'Herhangi bir etki alanı için DNS kayıtlarını sorgula',
	'tool.web-dns-lookup.description':
		"Herhangi bir etki alanı için A, AAAA, MX, TXT, CNAME, NS ve diğer DNS kayıt türlerini sorgula. Tarayıcının HTTPS üzerinden DNS'sini kullan.",
	'tool.web-dns-lookup.primary_keyword': 'dns araması',
	'tool.web-dns-lookup.meta_title': 'DNS Araması — fmtly.dev',
	'tool.web-dns-lookup.meta_description':
		'Herhangi bir etki alanı için DNS kayıtlarını tarayıcıda sorgula.',
	'tool.web-dns-lookup.operation': 'Ara',

	// ── Erişilebilirlik araçları ─────────────────────────────────────────────
	'tool.accessibility-contrast.display_name': 'Kontrast Denetleyicisi',
	'tool.accessibility-contrast.tagline':
		'Metin ve arka plan renkleri için WCAG kontrast oranlarını kontrol et',
	'tool.accessibility-contrast.description':
		'Ön plan ve arka plan renklerini gir ve kontrast oranını hesapla. Normal metin, büyük metin ve UI öğeleri için WCAG AA/AAA uyumluluğunu gör. Canlı ön izleme dahil.',
	'tool.accessibility-contrast.primary_keyword': 'wcag kontrast denetleyicisi',
	'tool.accessibility-contrast.meta_title': 'WCAG Kontrast Denetleyicisi — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'WCAG renk kontrast oranlarını tarayıcıda kontrol et. Canlı ön izleme, AA/AAA uyumluluğu. Hiçbir veri cihazdan ayrılmaz.',
	'tool.accessibility-contrast.operation': 'Kontrol Et',
	'tool.accessibility-contrast.faq.0.question': 'Hangi kontrast oranı gerekli?',
	'tool.accessibility-contrast.faq.0.answer':
		'WCAG AA normal metin için 4.5:1 ve büyük metin için 3:1 gerektirir. AAA sırasıyla 7:1 ve 4.5:1 gerektirir.',
	'tool.accessibility-contrast.use_case.0': 'Web sitesi metninin erişilebilirliğini doğrulama',
	'tool.accessibility-contrast.use_case.1': 'Erişilebilir renk kombinasyonları seçme',

	'tool.accessibility-color-blindness.display_name': 'Renk Körlüğü Simülatörü',
	'tool.accessibility-color-blindness.tagline':
		'Renklerin renk görme kusurları olan kişilere nasıl göründüğünü simüle et',
	'tool.accessibility-color-blindness.description':
		'Renk körlüğünü simüle etmek için bir renk gir veya bir görüntü yükle: protanopya, deuteranopya, tritanopya ve akromatopsia. Renk dönüştürme matrislerini kullan.',
	'tool.accessibility-color-blindness.primary_keyword': 'renk körlüğü simülatörü',
	'tool.accessibility-color-blindness.meta_title': 'Renk Körlüğü Simülatörü — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description':
		'Tarayıcıda protanopya, deuteranopya, tritanopya görüşünü simüle et. Renkleri ve görüntüleri test et. Yükleme yok.',
	'tool.accessibility-color-blindness.operation': 'Simüle Et',
	'tool.accessibility-color-blindness.faq.0.question': 'Hangi renk körlüğü türleri simüle edilir?',
	'tool.accessibility-color-blindness.faq.0.answer':
		'Protanopya (kırmızı yok), deuteranopya (yeşil yok), tritanopya (mavi yok) ve akromatopsia (renk yok).',
	'tool.accessibility-color-blindness.use_case.0':
		'Renk körlüğü erişilebilirliği için UI tasarımlarını test etme',
	'tool.accessibility-color-blindness.use_case.1': 'Renk paletini kapsamlılığını kontrol etme',

	'tool.accessibility-font-size.display_name': 'Yazı Tipi Boyutu Denetleyicisi',
	'tool.accessibility-font-size.tagline':
		'Metnin WCAG boyutu ve kontrast gereksinimlerini karşılayıp karşılamadığını kontrol et',
	'tool.accessibility-font-size.description':
		'Yazı tipi boyutu, kalınlığı ve renkleri gir ve birleştirilmiş WCAG raporu al. Metnin "büyük metin" olarak nitelendirilip nitelendirilmediğini ve hangi kontrast oranının gerekli olduğunu gör.',
	'tool.accessibility-font-size.primary_keyword': 'wcag yazı tipi boyutu denetleyicisi',
	'tool.accessibility-font-size.meta_title': 'WCAG Yazı Tipi Boyutu Denetleyicisi — fmtly.dev',
	'tool.accessibility-font-size.meta_description':
		'WCAG yazı tipi boyutu gereksinimlerini tarayıcıda kontrol et. Büyük metin sınıflandırması, kontrast gereksinimleri. Yükleme yok.',
	'tool.accessibility-font-size.operation': 'Kontrol Et',
	'tool.accessibility-font-size.faq.0.question': "WCAG'de büyük metin nedir?",
	'tool.accessibility-font-size.faq.0.answer':
		'≥18pt (24px) veya ≥14pt (18.66px) kalın metin, daha düşük kontrast oranları gerektiren büyük metin olarak kabul edilir.',
	'tool.accessibility-font-size.use_case.0': 'Metin stilinin erişilebilirliğini kontrol etme',
	'tool.accessibility-font-size.use_case.1':
		'Farklı yazı tipi boyutları için WCAG gereksinimlerini belirleme',

	// ── UI dizgileri ─────────────────────────────────────────────────────────
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
	'ui.diff.summary.empty': 'Karşılaştırmak için her iki panele de JSON gir',
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
	'ui.diff.toast.format_error': 'Biçimlendir — geçersiz JSON',
	'ui.diff.toast.patch_success': 'JSON Patch panoya kopyalandı',
	'ui.diff.toast.copy_value': 'Değer kopyalandı',
	'ui.diff.toast.share_copied': 'Paylaş bağlantısı panoya kopyalandı',
	'ui.diff.meta.chars': 'karakterler',
	'ui.diff.empty.hint': 'Karşılaştırmak için yukarıdaki her iki panele de JSON yapıştır.',
	'ui.diff.empty.load_sample': 'Örnek verileri yükle',
	'ui.layout.placeholders.modified': 'Değiştirildi',
	'ui.layout.aria.input_panel': 'Girdi paneli',
	'ui.layout.aria.output_panel': 'Çıkış paneli',
	'ui.layout.aria.copy_output': 'Çıkışı kopyala',
	'ui.layout.aria.download_output': 'Çıkışı indir',
	'tool.output_placeholder': 'Çıkış burada görünecek',
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
	'ui.json_viewer.toast_copy_path': 'Kopyalandı',
	'ui.tree.toast_copy_path': 'Kopyalandı',
	'ui.tree.toast.copied_path': 'Kopyalandı',
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
	'ui.validator.syntax': 'Sözdizimi',
	'ui.validator.schema': 'Şema',
	'ui.validator.issue': 'sorun',
	'ui.validator.issues': 'sorunlar',
	'ui.validator.first_issue': 'İlk sorun',
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
	'ui.share_url': "Paylaş URL'si",
	'ui.format_xml': "XML'i Biçimlendir",
	'ui.minify_xml': "XML'i Küçült",
	'ui.format_beautify': 'Biçimlendir / Güzelleştir',
	'ui.minify': 'Küçült',
	'ui.repair_json': "JSON'u Onar",
	'ui.expand_all': 'Hepsini Genişlet',
	'ui.collapse_all': 'Hepsini Daralt',
	'ui.expand_to_depth': "Derinlik {depth}'e Genişlet",
	switch_to_tab: '{index} sekmesine geç',
	switch_to_xml_tab: "XML sekmesi {index}'e geç",
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
	'ui.validator.xml_success_title': 'İyi Biçimlendirildi XML',
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
	'ui.aria.xml_workspace_tabs': 'XML çalışma alanı sekmeler',
	'ui.aria.xpath_panel': 'XPath sorgu paneli',
	'ui.aria.xml_validator': 'XML doğrulayıcı',
	'ui.convert.to_json': '→ JSON',
	'ui.convert.to_yaml': '→ YAML',
	'ui.convert.to_csv': '→ CSV',
	'ui.convert.to_xml': '→ XML',
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
	'ui.query.running': 'Sorgu çalışıyor…',
	'ui.query.empty_input': 'Sorgunuzu değerlendirmek için solda JSON yapıştır.',
	'ui.query.empty_query': 'Sonuçları görmek için bir sorgu gir.',
	'ui.query.error_fallback': 'Sorgu başarısız',
	'ui.query.copy_error': 'Çıkışı kopyalayamadı',
	'ui.status.processing': 'İşleniyor…',
	'ui.status.waiting_output': 'Çıkış burada görünecek',
	'ui.output.controls.spaces': 'boşluklar',
	'ui.output.stats.chars': 'karakterler',
	'ui.output.stats.lines': 'satırlar',
	'ui.output.stats.keys': 'anahtarlar',
	'ui.output.stats.objects': 'nesneler',
	'ui.output.stats.arrays': 'diziler',
	'ui.output.stats.strings': 'dizgiler',
	'ui.output.stats.values': 'değerler',
	'ui.output.stats.numbers': 'sayılar',
	'ui.output.stats.booleans': 'boşlanlar',
	'ui.output.stats.nulls': 'nulllar',
	'ui.output.stats.depth': 'derinlik',
	'ui.output.stats.size_in': 'giriş',
	'ui.output.stats.size_out': 'çıkış',
	'ui.output.original': 'Orijinal',
	'ui.output.minified': 'Küçültüldü',
	'ui.output.saved': 'kaydedildi',
	'ui.output.meta.minified': 'KÜÇÜLTÜLDİ',
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

	'tool.crypto-hmac.faq.0.question': 'HMAC nedir?',
	'tool.crypto-hmac.faq.0.answer':
		'HMAC (Hash-based Message Authentication Code), kriptografik karma işlev ve gizli anahtar kullanan belirli bir ileti doğrulama kodu türüdür. Hem veri bütünlüğünü hem de kimlik doğrulamayı sağlar.',
	'tool.crypto-hmac.faq.1.question': 'Hangi algoritmalar desteklenir?',
	'tool.crypto-hmac.faq.1.answer':
		'Bu araç SHA-256, SHA-512, SHA-1, MD5 ve diğerleri dahil birden fazla HMAC algoritmasını destekler. SHA-256, çoğu modern uygulama için güvenlik ve performansın iyi dengesini sağladığı için önerilir.',
	'tool.crypto-hmac.use_case.0': 'API isteklerinin bütünlüğü ve orijinalliğini doğrulama',
	'tool.crypto-hmac.use_case.1': 'Oturum yönetimi için güvenli tokenler oluşturma',
	'tool.crypto-hmac.use_case.2':
		'GitHub veya Stripe gibi hizmetler için webhook imzaları oluşturma',
	'tool.crypto-hmac.use_case.3': 'Mikro hizmetler iletişiminde ileti kimlik doğrulamayı uygulama',
	'tool.crypto-hmac.use_case.4': 'Dosya doğrulaması için kontrol toplamı oluşturma',

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
	'tool.xml-xpath.use_case.3': 'XML yapısını ve içeriğini programlı olarak doğrulama'
};

export default registryTr;

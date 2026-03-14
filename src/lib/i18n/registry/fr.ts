const registryFr: Record<string, string> = {
	// ── Categories ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		"Formater, valider, minifier, comparer et convertir des données JSON. Chaque outil s'exécute dans votre navigateur avec détection d'erreurs en temps réel et visualisation en arborescence.",
	'category.json.primary_keyword': 'outils json',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		'Formater, valider et convertir des documents XML. Supporte la mise en forme (pretty-printing) avec indentation configurable et conversion vers JSON ou CSV.',
	'category.xml.primary_keyword': 'outils xml',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'Formater, valider et convertir des fichiers YAML. Conversion bidirectionnelle avec JSON et validation de syntaxe avec localisation précise des erreurs.',
	'category.yaml.primary_keyword': 'outils yaml',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		"Analyser, formater et convertir des données CSV. Convertir entre CSV, JSON et d'autres formats tabulaires avec support de délimiteur personnalisé.",
	'category.csv.primary_keyword': 'outils csv',
	'category.css.display_name': 'CSS',
	'category.css.description':
		'Formater, minifier et optimiser les feuilles de style CSS. Embellir le CSS compressé ou minifier le CSS formaté avec des options de tri de propriétés.',
	'category.css.primary_keyword': 'outils css',
	'category.html.display_name': 'HTML',
	'category.html.description':
		'Formater, minifier et valider le balisage HTML. Embellir le HTML compressé ou supprimer les espaces pour la production.',
	'category.html.primary_keyword': 'outils html',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'Formater et minifier le code JavaScript. Embellir les scripts compressés ou produire une sortie minifiée pour des chargements de page plus rapides.',
	'category.js.primary_keyword': 'outils javascript',
	'category.encode.display_name': 'Encodeurs & Décodeurs',
	'category.encode.description':
		"Encoder et décoder Base64, URL, entités HTML, et plus encore. Toutes les opérations s'exécutent instantanément dans votre navigateur — aucune donnée n'est envoyée au serveur.",
	'category.encode.primary_keyword': 'outils encodeur décodeur',
	'category.escape.display_name': "Outils d'Échappement",
	'category.escape.description':
		'Échapper et déséchapper des chaînes pour JSON, HTML, XML, URLs et regex. Gérez en toute sécurité les caractères spéciaux entre les formats.',
	'category.escape.primary_keyword': 'outils échappement de chaîne',
	'category.diff.display_name': 'Diff & Comparer',
	'category.diff.description':
		'Comparer deux fichiers ou structures de données côte à côte. Met en évidence les ajouts et les suppressions avec support de diff JSON, texte et structuré.',
	'category.diff.primary_keyword': 'outils comparaison diff',
	'category.generate.display_name': 'Générateurs',
	'category.generate.description':
		"Générer des définitions de type, JSON Schema, tableaux Markdown, données de test factices et d'autres utilitaires de développement entièrement dans votre navigateur.",
	'category.generate.primary_keyword': 'générateurs de code',
	'category.text.display_name': 'Texte & Chaînes',
	'category.text.description':
		'Formater, manipuler, inverser, trier et analyser du texte et des chaînes. Inclut des compteurs de mots, scores de lisibilité et conversions markdown.',
	'category.text.primary_keyword': 'outils de texte',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formater, valider et convertir des fichiers TOML. Convertir TOML en JSON et YAML en toute sécurité.',
	'category.toml.primary_keyword': 'outils toml',
	'category.number.display_name': 'Nombres & Maths',
	'category.number.description':
		'Formater des nombres, calculer des pourcentages, utiliser la notation scientifique et convertir des valeurs entre systèmes numériques instantanément.',
	'category.number.primary_keyword': 'outils numériques',
	'category.color.display_name': 'Outils de Couleur',
	'category.color.description':
		'Vérifier les ratios de contraste, créer des palettes de couleurs, générer des dégradés CSS et simuler le daltonisme.',
	'category.color.primary_keyword': 'outils de couleur',
	'category.crypto.display_name': 'Crypto & Sécurité',
	'category.crypto.description':
		"Générer des signatures HMAC, analyser la force des mots de passe, produire des chaînes aléatoires sécurisées et générer des ULIDs — le tout côté client via l'API Web Crypto.",
	'category.crypto.primary_keyword': 'outils crypto sécurité',
	'category.web.display_name': 'Web & Réseau',
	'category.web.description':
		'Analyser des URLs, décoder des chaînes User-Agent, inspecter les en-têtes CORS, rechercher des types MIME, géolocaliser des IPs et interroger des enregistrements DNS.',
	'category.web.primary_keyword': 'outils web en ligne',
	'category.code.display_name': 'Formatteurs de Code',
	'category.code.description':
		'Formater CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL et Markdown entièrement localement. Convertir des commandes cURL en fetch() ou Axios.',
	'category.code.primary_keyword': 'formatteur de code en ligne',
	'category.pdf.display_name': 'Outils PDF',
	'category.pdf.description':
		'Visualiser des fichiers PDF et extraire du texte — le tout localement dans votre navigateur.',
	'category.pdf.primary_keyword': 'outils pdf en ligne',
	'category.image.display_name': 'Outils Image',
	'category.image.description':
		"Redimensionner, convertir, compresser et encoder des images — le tout localement dans votre navigateur. Pas d'uploads, pas de serveur.",
	'category.image.primary_keyword': 'outils image en ligne',
	'category.file.display_name': 'Outils Fichier',
	'category.file.description':
		'Calculer des hachages de fichiers et effectuer des conversions de format entre fichiers.',
	'category.file.primary_keyword': 'outils fichier en ligne',
	'category.qr.display_name': 'QR & Code-barres',
	'category.qr.description':
		"Générer des codes QR personnalisables et décoder des codes QR à partir d'images — le tout localement dans votre navigateur.",
	'category.qr.primary_keyword': 'générateur code qr',
	'category.accessibility.display_name': 'Accessibilité',
	'category.accessibility.description':
		'Tester le contraste des couleurs, simuler le daltonisme et vérifier les exigences de taille de police WCAG. Assurez-vous que vos designs sont accessibles à tous.',
	'category.accessibility.primary_keyword': 'outils accessibilité',

	// ── JSON tools ──────────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'Formatteur JSON',
	'tool.json-formatter.tagline': 'Formater et embellir le JSON avec indentation configurable',
	'tool.json-formatter.description':
		'Analyser et afficher du JSON avec une indentation configurable — 2 espaces, 4 espaces ou tabulations. Analyse en temps réel avec localisation précise des erreurs et vue en arborescence optionnelle.',
	'tool.json-formatter.primary_keyword': 'formatteur json',
	'tool.json-formatter.meta_title': 'Formatteur & Embellisseur JSON — fmtly.dev',
	'tool.json-formatter.meta_description':
		"Formater et embellir le JSON instantanément dans votre navigateur. Indentation configurable, détection d'erreurs en temps réel et vue en arborescence. Aucune donnée ne quitte votre appareil.",
	'tool.json-formatter.operation': 'Formater',

	'tool.json-validator.display_name': 'Validateur JSON',
	'tool.json-validator.tagline': 'Valider la syntaxe et la structure JSON',
	'tool.json-validator.description':
		'Vérifier la syntaxe JSON en temps réel. Identifie instantanément les crochets manquants, les chaînes non terminées et les clés dupliquées. Supporte les commentaires JSON5 et les virgules traînantes.',
	'tool.json-validator.primary_keyword': 'validateur json',
	'tool.json-validator.meta_title': 'Validateur JSON — fmtly.dev',
	'tool.json-validator.meta_description':
		'Valider le JSON dans votre navigateur instantanément. Détecte les erreurs de syntaxe avec numéros de ligne et de colonne précis. Aucune donnée ne quitte votre appareil.',
	'tool.json-validator.operation': 'Valider',

	'tool.json-minifier.display_name': 'Minificateur JSON',
	'tool.json-minifier.tagline': 'Supprimer les espaces et compresser le JSON au format minimum',
	'tool.json-minifier.description':
		"Supprimer tous les espaces inutiles du JSON pour produire la sortie la plus petite possible. Valide d'abord le JSON, puis supprime l'indentation, les sauts de ligne et les espaces.",
	'tool.json-minifier.primary_keyword': 'minificateur json',
	'tool.json-minifier.meta_title': 'Minificateur JSON — fmtly.dev',
	'tool.json-minifier.meta_description':
		'Minifier le JSON dans votre navigateur instantanément. Supprime tous les espaces et produit une sortie compacte. Aucune donnée ne quitte votre appareil.',
	'tool.json-minifier.operation': 'Minifier',

	'tool.json-to-yaml.display_name': 'JSON vers YAML',
	'tool.json-to-yaml.tagline': 'Convertir des données JSON au format YAML',
	'tool.json-to-yaml.description':
		'Convertir JSON en YAML avec une indentation et un formatage appropriés. Gère les objets imbriqués, les tableaux et tous les types de données JSON.',
	'tool.json-to-yaml.primary_keyword': 'json vers yaml',
	'tool.json-to-yaml.meta_title': 'Convertisseur JSON vers YAML — fmtly.dev',
	'tool.json-to-yaml.meta_description':
		"Convertir JSON en YAML instantanément dans votre navigateur. Gère les structures imbriquées et tous les types de données. Pas d'envoi de données.",
	'tool.json-to-yaml.operation': 'Convertir',

	'tool.json-to-toml.display_name': 'JSON vers TOML',
	'tool.json-to-toml.tagline': 'Convertir des données JSON au format de configuration TOML',
	'tool.json-to-toml.description':
		'Convertir du JSON au format TOML, idéal pour les fichiers de configuration. Supporte les tables imbriquées et les tableaux en ligne.',
	'tool.json-to-toml.primary_keyword': 'json vers toml',
	'tool.json-to-toml.meta_title': 'Convertisseur JSON vers TOML — fmtly.dev',
	'tool.json-to-toml.meta_description':
		"Convertir JSON en TOML instantanément dans votre navigateur. Gère les structures imbriquées et les tableaux. Pas d'envoi de données.",
	'tool.json-to-toml.operation': 'Convertir',

	'tool.json-to-markdown.display_name': 'JSON vers Tableau Markdown',
	'tool.json-to-markdown.tagline': 'Convertir des tableaux JSON en tableaux Markdown',
	'tool.json-to-markdown.description':
		"Convertir des tableaux d'objets JSON en tableaux Markdown formatés. Détecte automatiquement les en-têtes de colonne à partir des clés d'objet.",
	'tool.json-to-markdown.primary_keyword': 'json vers tableau markdown',
	'tool.json-to-markdown.meta_title': 'Convertisseur JSON vers Tableau Markdown — fmtly.dev',
	'tool.json-to-markdown.meta_description':
		'Convertir des tableaux JSON en tableaux Markdown instantanément. Détecte les en-têtes et formate les données. Aucune donnée ne quitte votre appareil.',
	'tool.json-to-markdown.operation': 'Convertir',

	'tool.json-to-xml.display_name': 'JSON vers XML',
	'tool.json-to-xml.tagline': 'Convertir des données JSON au format XML',
	'tool.json-to-xml.description':
		"Convertir des objets et tableaux JSON en XML bien formé. Gère les structures imbriquées et les noms d'éléments racines configurables.",
	'tool.json-to-xml.primary_keyword': 'json vers xml',
	'tool.json-to-xml.meta_title': 'Convertisseur JSON vers XML — fmtly.dev',
	'tool.json-to-xml.meta_description':
		"Convertir JSON en XML instantanément dans votre navigateur. Produit du XML bien formé. Pas d'envoi de données.",
	'tool.json-to-xml.operation': 'Convertir',

	'tool.json-to-csv.display_name': 'JSON vers CSV',
	'tool.json-to-csv.tagline': 'Convertir des tableaux JSON au format CSV',
	'tool.json-to-csv.description':
		"Convertir des tableaux d'objets JSON au format CSV. Extrait automatiquement les en-têtes de colonne à partir des clés d'objet.",
	'tool.json-to-csv.primary_keyword': 'json vers csv',
	'tool.json-to-csv.meta_title': 'Convertisseur JSON vers CSV — fmtly.dev',
	'tool.json-to-csv.meta_description':
		"Convertir des tableaux JSON en CSV instantanément dans votre navigateur. Détecte les en-têtes. Pas d'envoi de données.",
	'tool.json-to-csv.operation': 'Convertir',

	'tool.json-jsonpath.display_name': 'Requête JSONPath',
	'tool.json-jsonpath.tagline': 'Interroger des données JSON avec des expressions JSONPath',
	'tool.json-jsonpath.description':
		'Exécuter des expressions JSONPath sur des données JSON pour extraire des valeurs spécifiques. Supporte les filtres, jokers, descente récursive et tous les opérateurs JSONPath standards.',
	'tool.json-jsonpath.primary_keyword': 'requête jsonpath',
	'tool.json-jsonpath.meta_title': 'Outil de Requête JSONPath — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		"Interroger des données JSON avec JSONPath dans votre navigateur. Supporte tous les opérateurs. Pas d'envoi de données.",
	'tool.json-jsonpath.operation': 'Interroger',

	'tool.json-jmespath.display_name': 'Requête JMESPath',
	'tool.json-jmespath.tagline': 'Interroger et transformer du JSON avec des expressions JMESPath',
	'tool.json-jmespath.description':
		'Exécuter des expressions JMESPath sur des données JSON pour les interroger et les transformer. Supporte les projections, filtres, multisélection et toutes les fonctions JMESPath.',
	'tool.json-jmespath.primary_keyword': 'requête jmespath',
	'tool.json-jmespath.meta_title': 'Outil de Requête JMESPath — fmtly.dev',
	'tool.json-jmespath.meta_description':
		"Interroger et transformer du JSON avec JMESPath dans votre navigateur. Supporte tous les opérateurs et fonctions. Pas d'envoi de données.",
	'tool.json-jmespath.operation': 'Interroger',

	// ── XML tools ───────────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'Formatteur XML',
	'tool.xml-formatter.tagline': 'Embellir et indenter le XML avec espacement configurable',
	'tool.xml-formatter.description':
		'Formater et indenter les documents XML avec 2 espaces, 4 espaces ou tabulations. Valide la structure XML et souligne les erreurs avec numéros de ligne précis.',
	'tool.xml-formatter.primary_keyword': 'formatteur xml',
	'tool.xml-formatter.meta_title': 'Formatteur & Embellisseur XML — fmtly.dev',
	'tool.xml-formatter.meta_description':
		'Formater et embellir le XML dans votre navigateur. Indentation configurable et validation en temps réel. Aucune donnée ne quitte votre appareil.',
	'tool.xml-formatter.operation': 'Formater',

	'tool.xml-validator.display_name': 'Validateur XML',
	'tool.xml-validator.tagline': 'Valider la syntaxe et la conformité XML',
	'tool.xml-validator.description':
		'Valider le XML par rapport aux règles de bonne formation. Identifie les balises non fermées, les attributs mal formés et les caractères invalides avec localisation précise des erreurs.',
	'tool.xml-validator.primary_keyword': 'validateur xml',
	'tool.xml-validator.meta_title': 'Validateur XML — fmtly.dev',
	'tool.xml-validator.meta_description':
		'Valider le XML dans votre navigateur. Détecte les erreurs de syntaxe avec numéros de ligne et de colonne. Aucune donnée ne quitte votre appareil.',
	'tool.xml-validator.operation': 'Valider',

	'tool.xml-to-json.display_name': 'XML vers JSON',
	'tool.xml-to-json.tagline': 'Convertir des documents XML au format JSON',
	'tool.xml-to-json.description':
		'Convertir XML en JSON avec mapping automatique des attributs et éléments. Gère les espaces de noms, sections CDATA et structures XML imbriquées.',
	'tool.xml-to-json.primary_keyword': 'xml vers json',
	'tool.xml-to-json.meta_title': 'Convertisseur XML vers JSON — fmtly.dev',
	'tool.xml-to-json.meta_description':
		"Convertir XML en JSON instantanément dans votre navigateur. Gère les attributs et structures imbriquées. Pas d'envoi de données.",
	'tool.xml-to-json.operation': 'Convertir',

	'tool.xml-to-yaml.display_name': 'XML vers YAML',
	'tool.xml-to-yaml.tagline': 'Convertir des documents XML au format YAML',
	'tool.xml-to-yaml.description':
		'Convertir XML au format YAML avec une indentation appropriée. Gère les attributs, le contenu textuel et les éléments XML imbriqués.',
	'tool.xml-to-yaml.primary_keyword': 'xml vers yaml',
	'tool.xml-to-yaml.meta_title': 'Convertisseur XML vers YAML — fmtly.dev',
	'tool.xml-to-yaml.meta_description':
		"Convertir XML en YAML instantanément dans votre navigateur. Gère les attributs et éléments imbriqués. Pas d'envoi de données.",
	'tool.xml-to-yaml.operation': 'Convertir',

	'tool.xml-to-csv.display_name': 'XML vers CSV',
	'tool.xml-to-csv.tagline': 'Convertir des enregistrements XML au format CSV',
	'tool.xml-to-csv.description':
		"Extraire les éléments XML répétitifs en lignes CSV. Détecte automatiquement les en-têtes de colonne à partir des noms d'éléments et d'attributs.",
	'tool.xml-to-csv.primary_keyword': 'xml vers csv',
	'tool.xml-to-csv.meta_title': 'Convertisseur XML vers CSV — fmtly.dev',
	'tool.xml-to-csv.meta_description':
		"Convertir XML en CSV instantanément dans votre navigateur. Détecte les en-têtes. Pas d'envoi de données.",
	'tool.xml-to-csv.operation': 'Convertir',

	'tool.xml-minifier.display_name': 'Minificateur XML',
	'tool.xml-minifier.tagline': 'Supprimer les espaces et compresser le XML',
	'tool.xml-minifier.description':
		"Supprimer tous les espaces et commentaires du XML pour produire une sortie compacte. Valide d'abord le XML, puis minifie pour réduire la taille du fichier.",
	'tool.xml-minifier.primary_keyword': 'minificateur xml',
	'tool.xml-minifier.meta_title': 'Minificateur XML — fmtly.dev',
	'tool.xml-minifier.meta_description':
		'Minifier le XML dans votre navigateur instantanément. Supprime les espaces et les commentaires. Aucune donnée ne quitte votre appareil.',
	'tool.xml-minifier.operation': 'Minifier',

	'tool.xml-xpath.display_name': 'Requête XPath',
	'tool.xml-xpath.tagline': 'Interroger des données XML avec des expressions XPath',
	'tool.xml-xpath.description':
		"Exécuter des expressions XPath 1.0 sur des documents XML. Supporte la sélection d'éléments, le filtrage d'attributs et tous les axes et fonctions XPath standards.",
	'tool.xml-xpath.primary_keyword': 'requête xpath',
	'tool.xml-xpath.meta_title': 'Outil de Requête XPath — fmtly.dev',
	'tool.xml-xpath.meta_description':
		"Interroger du XML avec XPath dans votre navigateur. Supporte tous les opérateurs XPath 1.0. Pas d'envoi de données.",
	'tool.xml-xpath.operation': 'Interroger',

	// ── YAML tools ──────────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'Formatteur YAML',
	'tool.yaml-formatter.tagline': 'Formater et embellir le YAML avec une indentation cohérente',
	'tool.yaml-formatter.description':
		"Formater les fichiers YAML avec une indentation cohérente de 2 espaces. Valide la syntaxe YAML et normalise les guillemets, les ancres et l'ordre des clés.",
	'tool.yaml-formatter.primary_keyword': 'formatteur yaml',
	'tool.yaml-formatter.meta_title': 'Formatteur & Embellisseur YAML — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		"Formater et embellir le YAML dans votre navigateur. Valide la syntaxe et normalise l'indentation. Aucune donnée ne quitte votre appareil.",
	'tool.yaml-formatter.operation': 'Formater',

	'tool.yaml-validator.display_name': 'Validateur YAML',
	'tool.yaml-validator.tagline': 'Valider la syntaxe et la structure YAML',
	'tool.yaml-validator.description':
		"Valider les documents YAML pour les erreurs de syntaxe. Identifie les problèmes d'indentation, les clés dupliquées et les caractères invalides avec numéros de ligne précis.",
	'tool.yaml-validator.primary_keyword': 'validateur yaml',
	'tool.yaml-validator.meta_title': 'Validateur YAML — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Valider le YAML dans votre navigateur. Détecte les erreurs de syntaxe avec numéros de ligne. Aucune donnée ne quitte votre appareil.',
	'tool.yaml-validator.operation': 'Valider',

	'tool.yaml-to-json.display_name': 'YAML vers JSON',
	'tool.yaml-to-json.tagline': 'Convertir YAML au format JSON',
	'tool.yaml-to-json.description':
		'Convertir des documents YAML en JSON formaté. Gère les ancres, les alias, le YAML multi-documents et tous les types de données YAML.',
	'tool.yaml-to-json.primary_keyword': 'yaml vers json',
	'tool.yaml-to-json.meta_title': 'Convertisseur YAML vers JSON — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		"Convertir YAML en JSON instantanément dans votre navigateur. Gère les ancres, les alias et le multi-documents. Pas d'envoi de données.",
	'tool.yaml-to-json.operation': 'Convertir',

	'tool.yaml-to-xml.display_name': 'YAML vers XML',
	'tool.yaml-to-xml.tagline': 'Convertir YAML au format XML',
	'tool.yaml-to-xml.description':
		'Convertir des documents YAML en XML bien formé. Mappe les clés YAML aux éléments XML et gère les structures imbriquées et les tableaux.',
	'tool.yaml-to-xml.primary_keyword': 'yaml vers xml',
	'tool.yaml-to-xml.meta_title': 'Convertisseur YAML vers XML — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		"Convertir YAML en XML instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.yaml-to-xml.operation': 'Convertir',

	'tool.yaml-to-csv.display_name': 'YAML vers CSV',
	'tool.yaml-to-csv.tagline': 'Convertir des tableaux YAML au format CSV',
	'tool.yaml-to-csv.description':
		"Convertir des tableaux d'objets YAML au format CSV. Extrait les en-têtes des clés d'objet et formate les données en lignes.",
	'tool.yaml-to-csv.primary_keyword': 'yaml vers csv',
	'tool.yaml-to-csv.meta_title': 'Convertisseur YAML vers CSV — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		"Convertir YAML en CSV instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.yaml-to-csv.operation': 'Convertir',

	'tool.yaml-to-toml.display_name': 'YAML vers TOML',
	'tool.yaml-to-toml.tagline': 'Convertir YAML au format de configuration TOML',
	'tool.yaml-to-toml.description':
		'Convertir des fichiers de configuration YAML au format TOML. Gère les tables imbriquées, les tableaux et tous les types de données YAML.',
	'tool.yaml-to-toml.primary_keyword': 'yaml vers toml',
	'tool.yaml-to-toml.meta_title': 'Convertisseur YAML vers TOML — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		"Convertir YAML en TOML instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.yaml-to-toml.operation': 'Convertir',

	'tool.yaml-diff.display_name': 'Diff YAML',
	'tool.yaml-diff.tagline': 'Comparer deux documents YAML côte à côte',
	'tool.yaml-diff.description':
		'Comparer deux documents YAML et mettre en évidence les ajouts, les suppressions et les modifications. Comprend la structure YAML pour une comparaison sémantique.',
	'tool.yaml-diff.primary_keyword': 'diff yaml',
	'tool.yaml-diff.meta_title': 'Outil Diff YAML — fmtly.dev',
	'tool.yaml-diff.meta_description':
		"Comparer deux documents YAML dans votre navigateur. Souligne tous les ajouts, suppressions et changements. Pas d'envoi de données.",
	'tool.yaml-diff.operation': 'Comparer',

	// ── CSV tools ───────────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': 'CSV vers JSON',
	'tool.csv-to-json.tagline': 'Convertir des données CSV en un tableau JSON',
	'tool.csv-to-json.description':
		"Convertir du CSV avec en-têtes en un tableau JSON d'objets. Supporte la détection de type dynamique pour les nombres et les booléens, ainsi que des options de délimiteur personnalisé.",
	'tool.csv-to-json.primary_keyword': 'csv vers json',
	'tool.csv-to-json.meta_title': 'Convertisseur CSV vers JSON — fmtly.dev',
	'tool.csv-to-json.meta_description':
		"Convertir CSV en JSON instantanément dans votre navigateur. Supporte les en-têtes, le typage dynamique et les délimiteurs. Pas d'envoi de données.",
	'tool.csv-to-json.operation': 'Convertir',

	'tool.csv-to-xml.display_name': 'CSV vers XML',
	'tool.csv-to-xml.tagline': 'Convertir des données CSV au format XML',
	'tool.csv-to-xml.description':
		"Convertir des fichiers CSV en XML bien formé. Mappe les en-têtes de colonne aux noms d'éléments et génère des éléments de ligne pour chaque enregistrement.",
	'tool.csv-to-xml.primary_keyword': 'csv vers xml',
	'tool.csv-to-xml.meta_title': 'Convertisseur CSV vers XML — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		"Convertir CSV en XML instantanément dans votre navigateur. Mappe les en-têtes aux noms d'éléments. Pas d'envoi de données.",
	'tool.csv-to-xml.operation': 'Convertir',

	'tool.csv-to-yaml.display_name': 'CSV vers YAML',
	'tool.csv-to-yaml.tagline': 'Convertir des données CSV au format YAML',
	'tool.csv-to-yaml.description':
		"Convertir des fichiers CSV en tableaux d'objets YAML. Mappe les en-têtes de colonne aux clés YAML pour chaque ligne.",
	'tool.csv-to-yaml.primary_keyword': 'csv vers yaml',
	'tool.csv-to-yaml.meta_title': 'Convertisseur CSV vers YAML — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		"Convertir CSV en YAML instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.csv-to-yaml.operation': 'Convertir',

	'tool.csv-to-html.display_name': 'CSV vers Tableau HTML',
	'tool.csv-to-html.tagline': 'Convertir des données CSV en un tableau HTML',
	'tool.csv-to-html.description':
		'Convertir des fichiers CSV en tableaux HTML formatés. Utilise la première ligne comme en-têtes de colonne.',
	'tool.csv-to-html.primary_keyword': 'csv vers tableau html',
	'tool.csv-to-html.meta_title': 'Convertisseur CSV vers Tableau HTML — fmtly.dev',
	'tool.csv-to-html.meta_description':
		"Convertir CSV en tableau HTML instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.csv-to-html.operation': 'Convertir',

	'tool.csv-formatter.display_name': 'Formatteur CSV',
	'tool.csv-formatter.tagline': 'Formater et normaliser les données CSV',
	'tool.csv-formatter.description':
		'Nettoyer et formater les données CSV avec des délimiteurs, des guillemets et des fins de ligne cohérents. Valide la structure CSV et normalise les espaces.',
	'tool.csv-formatter.primary_keyword': 'formatteur csv',
	'tool.csv-formatter.meta_title': 'Formatteur CSV — fmtly.dev',
	'tool.csv-formatter.meta_description':
		"Formater et nettoyer les données CSV dans votre navigateur. Pas d'envoi de données.",
	'tool.csv-formatter.operation': 'Formater',

	'tool.csv-validator.display_name': 'Validateur CSV',
	'tool.csv-validator.tagline': 'Valider la structure et la syntaxe CSV',
	'tool.csv-validator.description':
		"Valider les fichiers CSV pour un nombre de colonnes cohérent, un guillemet approprié et des problèmes d'encodage. Identifie les lignes mal formées avec numéros de ligne précis.",
	'tool.csv-validator.primary_keyword': 'validateur csv',
	'tool.csv-validator.meta_title': 'Validateur CSV — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Valider le CSV dans votre navigateur. Détecte les erreurs de structure avec numéros de ligne. Aucune donnée ne quitte votre appareil.',
	'tool.csv-validator.operation': 'Valider',

	// ── Text tools ──────────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Compteur de Mots',
	'tool.text-word-counter.tagline': 'Compter les mots, caractères et phrases dans un texte',
	'tool.text-word-counter.description':
		"Compter les mots, caractères, phrases et paragraphes dans n'importe quel texte. Affiche des estimations de temps de lecture et la longueur moyenne des mots.",
	'tool.text-word-counter.primary_keyword': 'compteur de mots',
	'tool.text-word-counter.meta_title': 'Compteur de Mots — fmtly.dev',
	'tool.text-word-counter.meta_description':
		"Compter les mots, caractères et phrases dans votre navigateur. Inclut des estimations de temps de lecture. Pas d'envoi de données.",
	'tool.text-word-counter.operation': 'Compter',

	'tool.text-readability.display_name': 'Analyseur de Lisibilité',
	'tool.text-readability.tagline': 'Mesurer les scores de lisibilité du texte',
	'tool.text-readability.description':
		"Calculer Flesch-Kincaid, Gunning Fog et d'autres scores de lisibilité pour n'importe quel texte. Aide à optimiser le contenu pour votre public cible.",
	'tool.text-readability.primary_keyword': 'analyseur de lisibilité',
	'tool.text-readability.meta_title': 'Analyseur de Lisibilité — fmtly.dev',
	'tool.text-readability.meta_description':
		"Mesurer la lisibilité du texte dans votre navigateur avec Flesch-Kincaid et d'autres scores. Pas d'envoi de données.",
	'tool.text-readability.operation': 'Analyser',

	'tool.text-line-sorter.display_name': 'Trieur de Lignes',
	'tool.text-line-sorter.tagline':
		'Trier les lignes de texte par ordre alphabétique ou par longueur',
	'tool.text-line-sorter.description':
		"Trier les lignes par ordre alphabétique, numérique ou par longueur. Supporte l'ordre croissant et décroissant et le tri insensible à la casse.",
	'tool.text-line-sorter.primary_keyword': 'trieur de lignes',
	'tool.text-line-sorter.meta_title': 'Trieur de Lignes — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		"Trier des lignes de texte dans votre navigateur. Supporte le tri alphabétique, numérique et par longueur. Pas d'envoi de données.",
	'tool.text-line-sorter.operation': 'Trier',

	'tool.text-deduplicate.display_name': 'Suppresseur de Doublons',
	'tool.text-deduplicate.tagline': "Supprimer les lignes en double d'un texte",
	'tool.text-deduplicate.description':
		"Supprimer les lignes dupliquées de n'importe quel texte. Supporte la correspondance sensible et insensible à la casse et préserve l'ordre original des lignes.",
	'tool.text-deduplicate.primary_keyword': 'supprimer lignes dupliquées',
	'tool.text-deduplicate.meta_title': 'Suppresseur de Lignes en Double — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		"Supprimer les doublons de texte dans votre navigateur. Options sensible et insensible à la casse. Pas d'envoi de données.",
	'tool.text-deduplicate.operation': 'Dédupliquer',

	'tool.text-whitespace.display_name': "Nettoyeur d'Espaces",
	'tool.text-whitespace.tagline': "Supprimer les espaces superflus et normaliser l'espacement",
	'tool.text-whitespace.description':
		"Supprimer les espaces, tabulations et lignes vides superflus d'un texte. Normalise plusieurs espaces en un seul et rogne les espaces de début et de fin.",
	'tool.text-whitespace.primary_keyword': "nettoyeur d'espaces",
	'tool.text-whitespace.meta_title': "Nettoyeur d'Espaces — fmtly.dev",
	'tool.text-whitespace.meta_description':
		"Supprimer les espaces superflus d'un texte dans votre navigateur. Normalise l'espacement et rogne les lignes. Pas d'envoi de données.",
	'tool.text-whitespace.operation': 'Nettoyer',

	'tool.text-markdown-to-html.display_name': 'Markdown vers HTML',
	'tool.text-markdown-to-html.tagline': 'Convertir Markdown en HTML',
	'tool.text-markdown-to-html.description':
		'Convertir du texte Markdown en HTML. Supporte les titres, listes, tableaux, blocs de code, liens, images et toutes les fonctionnalités CommonMark.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown vers html',
	'tool.text-markdown-to-html.meta_title': 'Convertisseur Markdown vers HTML — fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		"Convertir Markdown en HTML instantanément dans votre navigateur. Supporte toutes les fonctionnalités CommonMark. Pas d'envoi de données.",
	'tool.text-markdown-to-html.operation': 'Convertir',

	'tool.text-html-to-markdown.display_name': 'HTML vers Markdown',
	'tool.text-html-to-markdown.tagline': 'Convertir HTML en Markdown',
	'tool.text-html-to-markdown.description':
		'Convertir du HTML en Markdown propre. Gère les titres, paragraphes, listes, tableaux, blocs de code et formatage en ligne.',
	'tool.text-html-to-markdown.primary_keyword': 'html vers markdown',
	'tool.text-html-to-markdown.meta_title': 'Convertisseur HTML vers Markdown — fmtly.dev',
	'tool.text-html-to-markdown.meta_description':
		"Convertir HTML en Markdown instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.text-html-to-markdown.operation': 'Convertir',

	'tool.text-reverser.display_name': 'Inverseur de Texte',
	'tool.text-reverser.tagline': 'Inverser le texte, les mots ou les lignes',
	'tool.text-reverser.description':
		"Inverser le texte caractère par caractère, mot par mot ou ligne par ligne. Bidirectionnel — collez dans n'importe quel sens.",
	'tool.text-reverser.primary_keyword': 'inverseur de texte',
	'tool.text-reverser.meta_title': 'Inverseur de Texte — fmtly.dev',
	'tool.text-reverser.meta_description':
		"Inverser du texte instantanément dans votre navigateur. Inversez caractères, mots ou lignes. Pas d'envoi de données.",
	'tool.text-reverser.operation': 'Inverser',

	// ── Code tools ──────────────────────────────────────────────────────────
	'tool.code-css.display_name': 'Formatteur CSS',
	'tool.code-css.tagline': 'Formater et embellir les feuilles de style CSS',
	'tool.code-css.description':
		'Formater le CSS avec une indentation et un ordre de propriétés cohérents. Supporte le formatage de style Prettier avec une largeur de ligne configurable.',
	'tool.code-css.primary_keyword': 'formatteur css',
	'tool.code-css.meta_title': 'Formatteur & Embellisseur CSS — fmtly.dev',
	'tool.code-css.meta_description':
		'Formater et embellir le CSS dans votre navigateur. Indentation et ordre des propriétés configurables. Aucune donnée ne quitte votre appareil.',
	'tool.code-css.operation': 'Formater',

	'tool.code-scss.display_name': 'Formatteur SCSS',
	'tool.code-scss.tagline': 'Formater et embellir les feuilles de style SCSS',
	'tool.code-scss.description':
		'Formater les fichiers SCSS avec une indentation cohérente. Supporte les variables, les règles imbriquées, les mixins et toute la syntaxe spécifique à SCSS.',
	'tool.code-scss.primary_keyword': 'formatteur scss',
	'tool.code-scss.meta_title': 'Formatteur & Embellisseur SCSS — fmtly.dev',
	'tool.code-scss.meta_description':
		'Formater et embellir le SCSS dans votre navigateur. Aucune donnée ne quitte votre appareil.',
	'tool.code-scss.operation': 'Formater',

	'tool.code-less.display_name': 'Formatteur LESS',
	'tool.code-less.tagline': 'Formater et embellir les feuilles de style LESS',
	'tool.code-less.description':
		"Formater les fichiers LESS avec une indentation cohérente. Supporte les variables, les mixins, l'imbrication et toute la syntaxe spécifique à LESS.",
	'tool.code-less.primary_keyword': 'formatteur less',
	'tool.code-less.meta_title': 'Formatteur & Embellisseur LESS — fmtly.dev',
	'tool.code-less.meta_description':
		'Formater et embellir le LESS dans votre navigateur. Aucune donnée ne quitte votre appareil.',
	'tool.code-less.operation': 'Formater',

	'tool.code-html.display_name': 'Formatteur HTML',
	'tool.code-html.tagline': 'Formater et embellir le balisage HTML',
	'tool.code-html.description':
		'Formater le HTML avec une indentation et une imbrication de balises appropriées. Gère les éléments en ligne et de bloc, les attributs, ainsi que le CSS et JavaScript intégrés.',
	'tool.code-html.primary_keyword': 'formatteur html',
	'tool.code-html.meta_title': 'Formatteur & Embellisseur HTML — fmtly.dev',
	'tool.code-html.meta_description':
		'Formater et embellir le HTML dans votre navigateur. Indentation et imbrication de balises appropriées. Aucune donnée ne quitte votre appareil.',
	'tool.code-html.operation': 'Formater',

	'tool.code-javascript.display_name': 'Formatteur JavaScript',
	'tool.code-javascript.tagline': 'Formater et embellir le code JavaScript',
	'tool.code-javascript.description':
		'Formater JavaScript avec le style Prettier. Supporte ES2022+, JSX, la syntaxe de module et des options configurables comme les points-virgules et les guillemets simples.',
	'tool.code-javascript.primary_keyword': 'formatteur javascript',
	'tool.code-javascript.meta_title': 'Formatteur & Embellisseur JavaScript — fmtly.dev',
	'tool.code-javascript.meta_description':
		'Formater et embellir JavaScript dans votre navigateur. Supporte la syntaxe ES moderne. Aucune donnée ne quitte votre appareil.',
	'tool.code-javascript.operation': 'Formater',

	'tool.code-typescript.display_name': 'Formatteur TypeScript',
	'tool.code-typescript.tagline': 'Formater et embellir le code TypeScript',
	'tool.code-typescript.description':
		'Formater TypeScript avec le style Prettier. Supporte toutes les fonctionnalités TypeScript, y compris les génériques, les décorateurs et les annotations de type.',
	'tool.code-typescript.primary_keyword': 'formatteur typescript',
	'tool.code-typescript.meta_title': 'Formatteur & Embellisseur TypeScript — fmtly.dev',
	'tool.code-typescript.meta_description':
		'Formater et embellir TypeScript dans votre navigateur. Supporte toute la syntaxe TypeScript. Aucune donnée ne quitte votre appareil.',
	'tool.code-typescript.operation': 'Formater',

	'tool.code-graphql.display_name': 'Formatteur GraphQL',
	'tool.code-graphql.tagline': 'Formater et embellir les schémas et requêtes GraphQL',
	'tool.code-graphql.description':
		'Formater les schémas et requêtes GraphQL avec une indentation cohérente. Supporte le SDL, les requêtes, les mutations, les abonnements et les fragments.',
	'tool.code-graphql.primary_keyword': 'formatteur graphql',
	'tool.code-graphql.meta_title': 'Formatteur & Embellisseur GraphQL — fmtly.dev',
	'tool.code-graphql.meta_description':
		'Formater et embellir GraphQL dans votre navigateur. Supporte le SDL, les requêtes et les mutations. Aucune donnée ne quitte votre appareil.',
	'tool.code-graphql.operation': 'Formater',

	'tool.code-markdown.display_name': 'Formatteur Markdown',
	'tool.code-markdown.tagline': 'Formater et normaliser les documents Markdown',
	'tool.code-markdown.description':
		"Formater Markdown avec des styles de titres cohérents, l'indentation des listes et l'alignement des tableaux. Normalise les espaces et les lignes vides.",
	'tool.code-markdown.primary_keyword': 'formatteur markdown',
	'tool.code-markdown.meta_title': 'Formatteur Markdown — fmtly.dev',
	'tool.code-markdown.meta_description':
		'Formater et normaliser Markdown dans votre navigateur. Aucune donnée ne quitte votre appareil.',
	'tool.code-markdown.operation': 'Formater',

	'tool.code-curl-to-fetch.display_name': 'cURL vers Fetch',
	'tool.code-curl-to-fetch.tagline': 'Convertir les commandes cURL en fetch() JavaScript',
	'tool.code-curl-to-fetch.description':
		"Convertir les commandes cURL en appels fetch() JavaScript natifs. Gère les en-têtes, le corps de la requête, l'authentification et toutes les options cURL courantes.",
	'tool.code-curl-to-fetch.primary_keyword': 'convertisseur curl vers fetch',
	'tool.code-curl-to-fetch.meta_title': 'Convertisseur cURL vers Fetch — fmtly.dev',
	'tool.code-curl-to-fetch.meta_description':
		"Convertir cURL en JavaScript fetch() dans votre navigateur. Gère les en-têtes, le corps et l'auth. Pas d'envoi de données.",
	'tool.code-curl-to-fetch.operation': 'Convertir',

	'tool.code-curl-to-axios.display_name': 'cURL vers Axios',
	'tool.code-curl-to-axios.tagline': 'Convertir les commandes cURL en requêtes Axios',
	'tool.code-curl-to-axios.description':
		"Convertir les commandes cURL en appels de requête Axios. Gère les en-têtes, le corps de la requête, l'authentification et toutes les options cURL courantes.",
	'tool.code-curl-to-axios.primary_keyword': 'convertisseur curl vers axios',
	'tool.code-curl-to-axios.meta_title': 'Convertisseur cURL vers Axios — fmtly.dev',
	'tool.code-curl-to-axios.meta_description':
		"Convertir cURL en requêtes Axios dans votre navigateur. Gère les en-têtes, le corps et l'auth. Pas d'envoi de données.",
	'tool.code-curl-to-axios.operation': 'Convertir',

	// ── Color tools ──────────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Convertisseur de Couleur',
	'tool.color-converter.tagline': 'Convertir des couleurs entre HEX, RGB, HSL, et plus',
	'tool.color-converter.description':
		'Convertir des couleurs entre les formats HEX, RGB, RGBA, HSL, HSLA et les formats de couleur CSS nommés. Affiche un aperçu en direct de la couleur sélectionnée.',
	'tool.color-converter.primary_keyword': 'convertisseur de couleur',
	'tool.color-converter.meta_title': 'Convertisseur de Couleur — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Convertir des couleurs entre HEX, RGB, HSL et couleurs CSS nommées dans votre navigateur. Aperçu en direct inclus.',
	'tool.color-converter.operation': 'Convertir',

	'tool.color-contrast.display_name': 'Vérificateur de Contraste',
	'tool.color-contrast.tagline': 'Vérifier le ratio de contraste WCAG entre deux couleurs',
	'tool.color-contrast.description':
		"Calculer le ratio de contraste entre deux couleurs et vérifier la conformité d'accessibilité WCAG 2.1 AA et AAA pour le texte normal et large.",
	'tool.color-contrast.primary_keyword': 'vérificateur de contraste couleur',
	'tool.color-contrast.meta_title': 'Vérificateur de Contraste Couleur — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Vérifier le ratio de contraste des couleurs pour la conformité WCAG AA et AAA dans votre navigateur.',
	'tool.color-contrast.operation': 'Vérifier',

	// ── Crypto tools ─────────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'Générateur HMAC',
	'tool.crypto-hmac.tagline': 'Générer des signatures HMAC avec les algorithmes SHA',
	'tool.crypto-hmac.description':
		"Générer des signatures HMAC en utilisant SHA-256, SHA-384 ou SHA-512. Produit des signatures encodées en hex ou Base64 en utilisant l'API Web Crypto.",
	'tool.crypto-hmac.primary_keyword': 'générateur hmac',
	'tool.crypto-hmac.meta_title': 'Générateur HMAC — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		"Générer des signatures HMAC dans votre navigateur en utilisant l'API Web Crypto. Supporte SHA-256, SHA-384 et SHA-512.",
	'tool.crypto-hmac.operation': 'Générer',

	'tool.crypto-password-strength.display_name': 'Testeur de Force de Mot de Passe',
	'tool.crypto-password-strength.tagline': "Analyser la force et l'entropie du mot de passe",
	'tool.crypto-password-strength.description':
		"Évaluer la force d'un mot de passe avec calcul d'entropie, détection de motifs et temps de craquage estimé. Aucune donnée n'est jamais envoyée à un serveur.",
	'tool.crypto-password-strength.primary_keyword': 'vérificateur force mot de passe',
	'tool.crypto-password-strength.meta_title': 'Testeur de Force de Mot de Passe — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		"Vérifier la force et l'entropie des mots de passe dans votre navigateur. Aucun mot de passe n'est transmis. 100% côté client.",
	'tool.crypto-password-strength.operation': 'Analyser',

	'tool.crypto-ulid.display_name': 'Générateur ULID',
	'tool.crypto-ulid.tagline':
		'Générer des identifiants Universellement Uniques Triables Lexicographiquement',
	'tool.crypto-ulid.description':
		"Générer des ULIDs — identifiants triés par temps, sécurisés pour les URL, triables et résistants aux collisions. Utilise l'API Web Crypto pour un caractère aléatoire cryptographique.",
	'tool.crypto-ulid.primary_keyword': 'générateur ulid',
	'tool.crypto-ulid.meta_title': 'Générateur ULID — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		"Générer des ULIDs dans votre navigateur en utilisant l'API Web Crypto. Identifiants triables et sûrs pour les URL.",
	'tool.crypto-ulid.operation': 'Générer',

	'tool.crypto-random-string.display_name': 'Générateur de Chaîne Aléatoire',
	'tool.crypto-random-string.tagline':
		'Générer des chaînes aléatoires cryptographiquement sécurisées',
	'tool.crypto-random-string.description':
		"Générer des chaînes aléatoires cryptographiquement sécurisées avec une longueur et des jeux de caractères configurables. Utilise l'API Web Crypto pour un vrai caractère aléatoire.",
	'tool.crypto-random-string.primary_keyword': 'générateur de chaîne aléatoire',
	'tool.crypto-random-string.meta_title': 'Générateur de Chaîne Aléatoire — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		"Générer des chaînes aléatoires sécurisées dans votre navigateur via l'API Web Crypto. Longueur et caractères configurables.",
	'tool.crypto-random-string.operation': 'Générer',

	// ── Diff tools ───────────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Diff Texte',
	'tool.diff-text.tagline': 'Comparer deux blocs de texte et souligner les différences',
	'tool.diff-text.description':
		'Comparer deux blocs de texte côte à côte et mettre en évidence les lignes ajoutées, supprimées et inchangées. Supporte les modes diff au niveau des mots et des lignes.',
	'tool.diff-text.primary_keyword': 'diff texte',
	'tool.diff-text.meta_title': 'Outil Diff Texte — fmtly.dev',
	'tool.diff-text.meta_description':
		"Comparer deux blocs de texte dans votre navigateur. Souligne les ajouts et suppressions au niveau du mot ou de la ligne. Pas d'envoi de données.",
	'tool.diff-text.operation': 'Comparer',

	// ── Encode tools ─────────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Encodeur / Décodeur Base64',
	'tool.encode-base64.tagline': 'Encoder et décoder des chaînes Base64',
	'tool.encode-base64.description':
		'Encoder du texte ou des données binaires en Base64 et décoder des chaînes Base64 en texte. Supporte les variantes Base64 standard et URL-safe.',
	'tool.encode-base64.primary_keyword': 'encodeur décodeur base64',
	'tool.encode-base64.meta_title': 'Encodeur & Décodeur Base64 — fmtly.dev',
	'tool.encode-base64.meta_description':
		"Encoder et décoder en Base64 dans votre navigateur. Supporte les variantes standard et URL-safe. Pas d'envoi de données.",
	'tool.encode-base64.operation': 'Encoder / Décoder',

	'tool.encode-url.display_name': 'Encodeur / Décodeur URL',
	'tool.encode-url.tagline': 'Encoder et décoder des chaînes encodées en URL',
	'tool.encode-url.description':
		"Encoder en pourcentage les URLs et composants d'URL ou décoder les chaînes encodées en pourcentage. Gère tous les caractères réservés et spéciaux selon la RFC 3986.",
	'tool.encode-url.primary_keyword': 'encodeur décodeur url',
	'tool.encode-url.meta_title': 'Encodeur & Décodeur URL — fmtly.dev',
	'tool.encode-url.meta_description':
		"Encoder et décoder des URLs dans votre navigateur. Gère tous les caractères spéciaux. Pas d'envoi de données.",
	'tool.encode-url.operation': 'Encoder / Décoder',

	'tool.encode-html.display_name': 'Encodeur / Décodeur HTML',
	'tool.encode-html.tagline': 'Encoder et décoder des entités HTML',
	'tool.encode-html.description':
		'Convertir les caractères spéciaux en entités HTML et vice-versa. Gère &amp;, &lt;, &gt;, &quot; et tous les autres caractères spéciaux HTML.',
	'tool.encode-html.primary_keyword': 'encodeur décodeur html',
	'tool.encode-html.meta_title': 'Encodeur & Décodeur HTML — fmtly.dev',
	'tool.encode-html.meta_description':
		"Encoder et décoder des entités HTML dans votre navigateur. Pas d'envoi de données.",
	'tool.encode-html.operation': 'Encoder / Décoder',

	'tool.encode-html-entities.display_name': 'Référence Entités HTML',
	'tool.encode-html-entities.tagline': "Parcourir et rechercher les codes d'entités HTML",
	'tool.encode-html-entities.description':
		'Rechercher et parcourir toutes les entités HTML avec leurs formes décimales, hexadécimales et nommées. Inclut les points de code Unicode et les aperçus visuels.',
	'tool.encode-html-entities.primary_keyword': 'référence entités html',
	'tool.encode-html-entities.meta_title': 'Référence Entités HTML — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Parcourir toutes les entités HTML dans votre navigateur. Rechercher par nom, code décimal ou hexadécimal.',
	'tool.encode-html-entities.operation': 'Rechercher',

	'tool.encode-unicode.display_name': 'Analyseur Unicode',
	'tool.encode-unicode.tagline': 'Analyser les points de code Unicode dans le texte',
	'tool.encode-unicode.description':
		"Décoder n'importe quel texte en ses points de code Unicode avec les représentations hex, échappement CSS, échappement JavaScript et octets UTF-8. Gère les emojis et les séquences multi-codepoints.",
	'tool.encode-unicode.primary_keyword': 'analyseur unicode',
	'tool.encode-unicode.meta_title': 'Analyseur Unicode — fmtly.dev',
	'tool.encode-unicode.meta_description':
		"Analyser les points de code Unicode dans votre navigateur. Inspectez l'hex, les échappements CSS, JS et les octets UTF-8.",
	'tool.encode-unicode.operation': 'Analyser',

	// ── Escape tools ─────────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'Échappement de Chaîne JSON',
	'tool.escape-json.tagline': 'Échapper et déséchapper des chaînes JSON',
	'tool.escape-json.description':
		'Échapper les caractères spéciaux dans les chaînes pour une utilisation dans les valeurs JSON, ou déséchapper les valeurs de chaîne JSON en texte brut. Gère les sauts de ligne, tabulations, guillemets et barres obliques inverses.',
	'tool.escape-json.primary_keyword': 'json échappement déséchappement',
	'tool.escape-json.meta_title': 'Échappement & Déséchappement de Chaîne JSON — fmtly.dev',
	'tool.escape-json.meta_description':
		"Échapper et déséchapper des chaînes JSON dans votre navigateur. Pas d'envoi de données.",
	'tool.escape-json.operation': 'Échapper / Déséchapper',

	// ── File tools ───────────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'Calculateur de Hachage de Fichier',
	'tool.file-hash.tagline': 'Calculer les hachages de fichiers MD5, SHA-1, SHA-256 et SHA-512',
	'tool.file-hash.description':
		"Calculer les valeurs de hachage cryptographique pour n'importe quel fichier. Supporte les algorithmes MD5, SHA-1, SHA-256 et SHA-512. S'exécute entièrement dans votre navigateur.",
	'tool.file-hash.primary_keyword': 'calculateur hachage fichier',
	'tool.file-hash.meta_title': 'Calculateur Hachage Fichier — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		"Calculer des hachages de fichiers dans votre navigateur. Supporte MD5, SHA-1, SHA-256 et SHA-512. Aucun fichier n'est envoyé au serveur.",
	'tool.file-hash.operation': 'Hacher',

	// ── Generate tools ───────────────────────────────────────────────────────
	'tool.generate-uuid.display_name': "Générateur d'UUID",
	'tool.generate-uuid.tagline': 'Générer des UUID aléatoires (v4)',
	'tool.generate-uuid.description':
		"Générer des UUID RFC 4122 version 4 en utilisant l'API Web Crypto. Générez des UUID à l'unité ou en masse en un clic.",
	'tool.generate-uuid.primary_keyword': 'générateur uuid',
	'tool.generate-uuid.meta_title': "Générateur d'UUID — fmtly.dev",
	'tool.generate-uuid.meta_description':
		"Générer des UUID aléatoires dans votre navigateur via l'API Web Crypto. Conforme à la RFC 4122 v4.",
	'tool.generate-uuid.operation': 'Générer',

	// ── Image tools ──────────────────────────────────────────────────────────
	'tool.image-compressor.display_name': "Compresseur d'Image",
	'tool.image-compressor.tagline': 'Compresser des images sans perte de qualité',
	'tool.image-compressor.description':
		"Compresser des images JPEG, PNG et WebP dans votre navigateur. Ajustez les paramètres de qualité et prévisualisez avant de télécharger. Aucune image n'est envoyée au serveur.",
	'tool.image-compressor.primary_keyword': 'compresseur image',
	'tool.image-compressor.meta_title': "Compresseur d'Image — fmtly.dev",
	'tool.image-compressor.meta_description':
		"Compresser des images dans votre navigateur. Supporte JPEG, PNG et WebP. Aucune image n'est téléchargée sur un serveur.",
	'tool.image-compressor.operation': 'Compresser',

	// ── Number tools ─────────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Formatteur de Nombres',
	'tool.number-formatter.tagline':
		'Formater des nombres avec des séparateurs spécifiques à la locale',
	'tool.number-formatter.description':
		'Formater des nombres avec des séparateurs de milliers, des décimales et une notation spécifique à la locale. Supporte le formatage des devises et la notation scientifique.',
	'tool.number-formatter.primary_keyword': 'formatteur de nombres',
	'tool.number-formatter.meta_title': 'Formatteur de Nombres — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Formater des nombres avec des séparateurs locaux et des symboles monétaires dans votre navigateur.',
	'tool.number-formatter.operation': 'Formater',

	'tool.number-roman.display_name': 'Convertisseur de Chiffres Romains',
	'tool.number-roman.tagline': 'Convertir entre chiffres romains et entiers',
	'tool.number-roman.description':
		'Convertir des entiers en chiffres romains et inversement. Supporte les nombres de 1 à 3999 avec la notation romaine standard.',
	'tool.number-roman.primary_keyword': 'convertisseur chiffres romains',
	'tool.number-roman.meta_title': 'Convertisseur de Chiffres Romains — fmtly.dev',
	'tool.number-roman.meta_description':
		'Convertir entre chiffres romains et entiers dans votre navigateur.',
	'tool.number-roman.operation': 'Convertir',

	'tool.number-percentage.display_name': 'Calculateur de Pourcentage',
	'tool.number-percentage.tagline': 'Calculer des pourcentages, augmentations et diminutions',
	'tool.number-percentage.description':
		"Calculer des valeurs de pourcentage, des variations en pourcentage et des pourcentages de totaux. Supporte les calculs d'augmentation/diminution et la recherche de pourcentage inversée.",
	'tool.number-percentage.primary_keyword': 'calculateur de pourcentage',
	'tool.number-percentage.meta_title': 'Calculateur de Pourcentage — fmtly.dev',
	'tool.number-percentage.meta_description':
		'Calculer des pourcentages et des variations en pourcentage dans votre navigateur.',
	'tool.number-percentage.operation': 'Calculer',

	'tool.number-scientific.display_name': 'Convertisseur de Notation Scientifique',
	'tool.number-scientific.tagline': 'Convertir des nombres vers et depuis la notation scientifique',
	'tool.number-scientific.description':
		"Convertir des nombres en notation scientifique et inversement. Affiche la mantisse, l'exposant et la notation d'ingénierie équivalente.",
	'tool.number-scientific.primary_keyword': 'convertisseur notation scientifique',
	'tool.number-scientific.meta_title': 'Convertisseur de Notation Scientifique — fmtly.dev',
	'tool.number-scientific.meta_description':
		'Convertir des nombres en notation scientifique dans votre navigateur.',
	'tool.number-scientific.operation': 'Convertir',

	'tool.number-statistics.display_name': 'Calculateur de Statistiques',
	'tool.number-statistics.tagline': 'Calculer la moyenne, la médiane, le mode, et plus',
	'tool.number-statistics.description':
		'Calculer des statistiques descriptives pour une liste de nombres : moyenne, médiane, mode, écart-type, variance, min, max et quartiles.',
	'tool.number-statistics.primary_keyword': 'calculateur de statistiques',
	'tool.number-statistics.meta_title': 'Calculateur de Statistiques — fmtly.dev',
	'tool.number-statistics.meta_description':
		"Calculer la moyenne, la médiane, l'écart-type et plus encore dans votre navigateur.",
	'tool.number-statistics.operation': 'Calculer',

	'tool.number-matrix.display_name': 'Calculateur de Matrice',
	'tool.number-matrix.tagline': 'Effectuer des opérations et des calculs sur les matrices',
	'tool.number-matrix.description':
		"Effectuer des opérations matricielles, notamment l'addition, la soustraction, la multiplication, la transposée, le déterminant et l'inverse sur des matrices de toute taille.",
	'tool.number-matrix.primary_keyword': 'calculateur de matrice',
	'tool.number-matrix.meta_title': 'Calculateur de Matrice — fmtly.dev',
	'tool.number-matrix.meta_description':
		"Effectuer des opérations matricielles dans votre navigateur. Supporte l'addition, la multiplication, l'inverse et plus.",
	'tool.number-matrix.operation': 'Calculer',

	'tool.number-unit-converter.display_name': "Convertisseur d'Unités",
	'tool.number-unit-converter.tagline': 'Convertir entre différentes unités de mesure',
	'tool.number-unit-converter.description':
		'Convertir entre les unités de longueur, poids, température, volume, surface, vitesse et plus encore. Supporte les systèmes métrique et impérial.',
	'tool.number-unit-converter.primary_keyword': "convertisseur d'unités",
	'tool.number-unit-converter.meta_title': "Convertisseur d'Unités — fmtly.dev",
	'tool.number-unit-converter.meta_description':
		'Convertir entre différentes unités de mesure dans votre navigateur. Supporte longueur, poids, température, etc.',
	'tool.number-unit-converter.operation': 'Convertir',

	// ── PDF tools ─────────────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'Lecteur PDF',
	'tool.pdf-viewer.tagline': 'Visualiser et extraire du texte à partir de fichiers PDF',
	'tool.pdf-viewer.description':
		"Visualiser des fichiers PDF dans votre navigateur et extraire le contenu textuel. Supporte les PDF multipages et la sélection de texte. Aucun fichier n'est envoyé au serveur.",
	'tool.pdf-viewer.primary_keyword': 'lecteur pdf',
	'tool.pdf-viewer.meta_title': 'Lecteur PDF — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		"Visualiser des fichiers PDF dans votre navigateur. Extraire du texte de n'importe quel PDF. Pas d'envoi de fichiers.",
	'tool.pdf-viewer.operation': 'Visualiser',

	// ── QR tools ──────────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'Générateur de Code QR',
	'tool.qr-generator.tagline': 'Générer des codes QR personnalisables',
	'tool.qr-generator.description':
		"Générer des codes QR à partir de texte, d'URLs, de coordonnées et plus encore. Personnalisez la taille, le niveau de correction d'erreur et les couleurs. Téléchargement en PNG ou SVG.",
	'tool.qr-generator.primary_keyword': 'générateur code qr',
	'tool.qr-generator.meta_title': 'Générateur de Code QR — fmtly.dev',
	'tool.qr-generator.meta_description':
		'Générer des codes QR personnalisables dans votre navigateur. Téléchargement en PNG ou SVG.',
	'tool.qr-generator.operation': 'Générer',

	// ── TOML tools ────────────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'Formatteur TOML',
	'tool.toml-formatter.tagline': 'Formater et valider les fichiers de configuration TOML',
	'tool.toml-formatter.description':
		'Formater les fichiers TOML avec un espacement et une organisation de sections cohérents. Valide la syntaxe TOML et souligne les erreurs avec numéros de ligne.',
	'tool.toml-formatter.primary_keyword': 'formatteur toml',
	'tool.toml-formatter.meta_title': 'Formatteur TOML — fmtly.dev',
	'tool.toml-formatter.meta_description':
		'Formater et valider le TOML dans votre navigateur. Aucune donnée ne quitte votre appareil.',
	'tool.toml-formatter.operation': 'Formater',

	// ── Web tools ─────────────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': "Analyseur d'URL",
	'tool.web-url-parser.tagline': "Analyser et inspecter les composants d'une URL",
	'tool.web-url-parser.description':
		"Décomposer les URLs en leurs composants : protocole, hôte, port, chemin, paramètres de requête et fragment. Analyser et inspecter n'importe quelle URL.",
	'tool.web-url-parser.primary_keyword': 'analyseur url',
	'tool.web-url-parser.meta_title': "Analyseur d'URL — fmtly.dev",
	'tool.web-url-parser.meta_description':
		"Analyser et inspecter les composants d'une URL dans votre navigateur. Décompose n'importe quelle URL.",
	'tool.web-url-parser.operation': 'Analyser',

	'tool.web-user-agent.display_name': 'Analyseur de User-Agent',
	'tool.web-user-agent.tagline': 'Analyser et décoder les chaînes User-Agent',
	'tool.web-user-agent.description':
		"Analyser les chaînes User-Agent pour identifier le navigateur, le moteur, l'OS et le type d'appareil. Supporte les formats de navigateurs modernes et anciens.",
	'tool.web-user-agent.primary_keyword': 'analyseur user agent',
	'tool.web-user-agent.meta_title': 'Analyseur de User-Agent — fmtly.dev',
	'tool.web-user-agent.meta_description':
		"Analyser les chaînes User-Agent dans votre navigateur. Identifie le navigateur, l'OS et l'appareil.",
	'tool.web-user-agent.operation': 'Analyser',

	'tool.web-cors.display_name': "Vérificateur d'En-têtes CORS",
	'tool.web-cors.tagline': 'Inspecter et comprendre les en-têtes CORS',
	'tool.web-cors.description':
		"Rechercher et expliquer les en-têtes CORS. Comprendre Access-Control-Allow-Origin, credentials, preflight, et d'autres directives CORS.",
	'tool.web-cors.primary_keyword': 'vérificateur en-tête cors',
	'tool.web-cors.meta_title': "Vérificateur d'En-têtes CORS — fmtly.dev",
	'tool.web-cors.meta_description':
		'Inspecter les en-têtes CORS dans votre navigateur. Comprendre toutes les directives Access-Control.',
	'tool.web-cors.operation': 'Vérifier',

	'tool.web-mime-types.display_name': 'Recherche de Type MIME',
	'tool.web-mime-types.tagline': 'Rechercher des types MIME par extension ou nom',
	'tool.web-mime-types.description':
		"Rechercher des types MIME par extension de fichier, nom ou type de contenu. Couvre tous les types MIME enregistrés par l'IANA avec des exemples.",
	'tool.web-mime-types.primary_keyword': 'recherche type mime',
	'tool.web-mime-types.meta_title': 'Recherche de Type MIME — fmtly.dev',
	'tool.web-mime-types.meta_description':
		'Rechercher des types MIME par extension de fichier dans votre navigateur.',
	'tool.web-mime-types.operation': 'Rechercher',

	'tool.web-ip-lookup.display_name': "Localisation d'IP",
	'tool.web-ip-lookup.tagline': 'Rechercher la géolocalisation et les infos pour les adresses IP',
	'tool.web-ip-lookup.description':
		"Rechercher la géolocalisation, l'ASN et les informations du fournisseur pour n'importe quelle adresse IP. Supporte les adresses IPv4 et IPv6.",
	'tool.web-ip-lookup.primary_keyword': 'recherche ip',
	'tool.web-ip-lookup.meta_title': "Localisation d'IP — fmtly.dev",
	'tool.web-ip-lookup.meta_description':
		"Rechercher la géolocalisation d'une adresse IP et les infos du fournisseur dans votre navigateur.",
	'tool.web-ip-lookup.operation': 'Rechercher',

	'tool.web-dns-lookup.display_name': 'Recherche DNS',
	'tool.web-dns-lookup.tagline': "Interroger les enregistrements DNS pour n'importe quel domaine",
	'tool.web-dns-lookup.description':
		"Interroger les enregistrements A, AAAA, MX, TXT, CNAME, NS et d'autres types d'enregistrements DNS pour n'importe quel domaine. Utilise le DNS over HTTPS du navigateur.",
	'tool.web-dns-lookup.primary_keyword': 'recherche dns',
	'tool.web-dns-lookup.meta_title': 'Recherche DNS — fmtly.dev',
	'tool.web-dns-lookup.meta_description':
		"Interroger les enregistrements DNS pour n'importe quel domaine dans votre navigateur.",
	'tool.web-dns-lookup.operation': 'Rechercher',

	// ── Accessibility tools ─────────────────────────────────────────────────────
	'tool.accessibility-contrast.display_name': 'Vérificateur de Contraste',
	'tool.accessibility-contrast.tagline':
		"Vérifier les ratios de contraste WCAG pour le texte et les couleurs d'arrière-plan",
	'tool.accessibility-contrast.description':
		"Entrez les couleurs de premier plan et d'arrière-plan pour calculer le ratio de contraste. Visualisez la conformité WCAG AA/AAA pour le texte normal, le texte large et les éléments d'interface. Aperçu en direct inclus.",
	'tool.accessibility-contrast.primary_keyword': 'vérificateur contraste wcag',
	'tool.accessibility-contrast.meta_title': 'Vérificateur de Contraste WCAG — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'Vérifier les ratios de contraste des couleurs WCAG dans votre navigateur. Aperçu en direct, conformité AA/AAA. Aucune donnée ne quitte votre appareil.',
	'tool.accessibility-contrast.operation': 'Vérifier',
	'tool.accessibility-contrast.faq.0.question': 'Quel ratio de contraste est requis ?',
	'tool.accessibility-contrast.faq.0.answer':
		'Le niveau WCAG AA requiert 4.5:1 pour le texte normal et 3:1 pour le texte large. Le niveau AAA requiert respectivement 7:1 et 4.5:1.',
	'tool.accessibility-contrast.use_case.0': "Vérifier l'accessibilité du texte d'un site web",
	'tool.accessibility-contrast.use_case.1': 'Choisir des combinaisons de couleurs accessibles',

	'tool.accessibility-color-blindness.display_name': 'Simulateur de Daltonisme',
	'tool.accessibility-color-blindness.tagline':
		'Simuler comment les couleurs apparaissent aux personnes ayant des déficiences de vision des couleurs',
	'tool.accessibility-color-blindness.description':
		'Entrez une couleur ou téléchargez une image pour voir comment elle apparaît aux personnes atteintes de protanopie, deutéranopie, tritanopie et achromatopsie. Utilise des matrices de transformation de couleurs.',
	'tool.accessibility-color-blindness.primary_keyword': 'simulateur de daltonisme',
	'tool.accessibility-color-blindness.meta_title': 'Simulateur de Daltonisme — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description':
		"Simulez la vision protanopie, deutéranopie, tritanopie dans votre navigateur. Testez les couleurs et les images. Pas d'envoi de données.",
	'tool.accessibility-color-blindness.operation': 'Simuler',
	'tool.accessibility-color-blindness.faq.0.question': 'Quels types de daltonisme sont simulés ?',
	'tool.accessibility-color-blindness.faq.0.answer':
		'Protanopie (pas de rouge), deutéranopie (pas de vert), tritanopie (pas de bleu) et achromatopsia (pas de couleur).',
	'tool.accessibility-color-blindness.use_case.0':
		"Tester les designs d'interface pour l'accessibilité au daltonisme",
	'tool.accessibility-color-blindness.use_case.1':
		"Vérifier l'inclusivité des palettes de couleurs",

	'tool.accessibility-font-size.display_name': 'Vérificateur de Taille de Police',
	'tool.accessibility-font-size.tagline':
		'Vérifier si le texte respecte les exigences WCAG de taille et de contraste',
	'tool.accessibility-font-size.description':
		'Entrez la taille, la graisse et les couleurs de la police pour obtenir un rapport WCAG combiné. Vérifiez si le texte est qualifié de "texte large" et quel ratio de contraste est requis.',
	'tool.accessibility-font-size.primary_keyword': 'vérificateur taille police wcag',
	'tool.accessibility-font-size.meta_title': 'Vérificateur Taille Police WCAG — fmtly.dev',
	'tool.accessibility-font-size.meta_description':
		"Vérifier les exigences de taille de police WCAG dans votre navigateur. Classification du texte large, exigences de contraste. Pas d'envoi de données.",
	'tool.accessibility-font-size.operation': 'Vérifier',
	'tool.accessibility-font-size.faq.0.question': "Qu'est-ce que le texte large dans le WCAG ?",
	'tool.accessibility-font-size.faq.0.answer':
		'Un texte ≥18pt (24px) ou ≥14pt (18.66px) en gras est considéré comme du texte large, nécessitant des ratios de contraste plus faibles.',
	'tool.accessibility-font-size.use_case.0': "Vérifier l'accessibilité du style de texte",
	'tool.accessibility-font-size.use_case.1':
		'Déterminer les exigences WCAG pour différentes tailles de police',

	// ── UI strings ────────────────────────────────────────────────────────────
	'ui.actions.choose_sample': 'Choisir…',
	'ui.actions.clear': 'Effacer',
	'ui.actions.copied': 'Copié',
	'ui.actions.copy': 'Copier',
	'ui.actions.copy_all': 'Tout copier',
	'ui.actions.download': 'Télécharger',
	'ui.actions.fetch': 'Récupérer',
	'ui.actions.format': 'Formater',
	'ui.actions.load_url': 'Charger URL',
	'ui.actions.minify': 'Minifier',
	'ui.actions.run': 'Exécuter',
	'ui.actions.running': 'Exécution…',
	'ui.actions.sample': 'Exemple',
	'ui.actions.search': 'Rechercher',
	'ui.actions.diff': 'Diff',
	'ui.actions.share': 'Partager',
	'ui.layout.tabs.output': 'Sortie',
	'ui.layout.tabs.tree': 'Arborescence',
	'ui.layout.placeholders.input': 'Entrée',
	'ui.layout.placeholders.output': 'Sortie',
	'ui.layout.placeholders.output_empty': 'La sortie apparaîtra ici',
	'ui.layout.placeholders.tree_empty': 'Vue en arborescence',
	'ui.layout.placeholders.paste_original': "Coller l'original ici…",
	'ui.layout.placeholders.paste_modified': 'Coller le modifié ici…',
	'ui.diff.labels.original': 'Original',
	'ui.diff.labels.modified': 'Modifié',
	'ui.diff.labels.input_panel': "Panneau d'entrée diff",
	'ui.diff.controls.ignore_order': "Ignorer l'ordre des tableaux",
	'ui.diff.controls.only_diffs': 'Afficher uniquement les diffs',
	'ui.diff.controls.case_sensitive': 'Sensible à la casse',
	'ui.diff.controls.ignore_keys_placeholder': 'Ignorer clés : id, timestamp…',
	'ui.diff.controls.swap': 'Inverser',
	'ui.diff.controls.export': 'Exporter',
	'ui.diff.controls.copy_patch': 'Copier comme JSON Patch',
	'ui.diff.controls.export_md': 'Télécharger le rapport Markdown',
	'ui.diff.controls.export_csv': 'Télécharger CSV',
	'ui.diff.view.list': 'Vue liste',
	'ui.diff.view.monaco': 'Vue diff intégrée',
	'ui.diff.view.inline_toggle': 'Basculer intégré / côte à côte',
	'ui.diff.summary.added': 'ajouté',
	'ui.diff.summary.removed': 'supprimé',
	'ui.diff.summary.modified': 'modifié',
	'ui.diff.summary.similar': 'similaire',
	'ui.diff.summary.empty': 'Entrez le JSON dans les deux panneaux pour comparer',
	'ui.diff.summary.identical': 'Les documents sont identiques',
	'ui.diff.summary.difference': 'différence',
	'ui.diff.summary.differences': 'différences',
	'ui.diff.summary.found': 'trouvée(s)',
	'ui.diff.filter.placeholder': 'Filtrer par chemin…',
	'ui.diff.types.root': '(racine)',
	'ui.diff.types.added': 'Ajouté',
	'ui.diff.types.removed': 'Supprimé',
	'ui.diff.types.modified': 'Modifié',
	'ui.diff.types.unchanged': 'Inchangé',
	'ui.diff.actions.format': 'Formater',
	'ui.diff.actions.copy_value': 'Copier valeur',
	'ui.diff.actions.collapse': 'Réduire',
	'ui.diff.actions.expand': 'Développer',
	'ui.diff.toast.format_error': 'Impossible de formater — JSON invalide',
	'ui.diff.toast.patch_success': 'JSON Patch copié dans le presse-papiers',
	'ui.diff.toast.copy_value': 'Valeur copiée',
	'ui.diff.toast.share_copied': 'Lien de partage copié',
	'ui.diff.meta.chars': 'caract.',
	'ui.diff.empty.hint': 'Collez le JSON dans les deux panneaux ci-dessus pour les comparer.',
	'ui.diff.empty.load_sample': "Charger des données d'exemple",
	'ui.layout.placeholders.modified': 'Modifié',
	'ui.layout.aria.input_panel': "Panneau d'entrée",
	'ui.layout.aria.output_panel': 'Panneau de sortie',
	'ui.layout.aria.copy_output': 'Copier la sortie',
	'ui.layout.aria.download_output': 'Télécharger la sortie',
	'tool.output_placeholder': 'La sortie apparaîtra ici',
	'ui.actions.upload': 'Charger',
	'ui.actions.validate': 'Valider',
	'ui.actions.wrap': 'Retour à la ligne',
	'ui.confirm.clear': "Effacer l'entrée {language} actuelle ?",
	'ui.confirm.clear_description': 'Cette action est irréversible.',
	'ui.drop_files': 'Déposer des fichiers .{extension}',
	'ui.drop_to_load': 'Lâcher pour charger',
	'ui.history.clear_all': "Effacer l'Historique",
	'ui.history.clear_confirm': "Effacer tout l'historique ?",
	'ui.history.clear_description': 'Cette action est irréversible.',
	'ui.history.empty': 'Aucun historique pour le moment',
	'ui.history.recent': 'Récemment Utilisés',
	'ui.history.title': 'Historique',
	'ui.paste_here': 'Coller ici…',
	'ui.paste_language_here': 'Coller {language} ici…',
	'ui.placeholder.search_tools_count': 'Rechercher parmi {count}+ outils...',
	'ui.placeholder.url': 'https://exemple.com/donnees.json',
	'ui.placeholder.xpath': '//book[@available=\x27true\x27]',
	'ui.related_categories': 'Catégories Similaires',
	'ui.stats.info': '{encoding} · {size} · {lines} lignes · prof. : {depth}',
	'ui.toast.copy_error': 'Échec de la copie — vérifiez les permissions du navigateur',
	'ui.toast.copy_success': 'Copié dans le presse-papiers',
	'ui.toast.input_cleared': 'Entrée effacée',
	'ui.loaded_sample': '{label} chargé',
	'ui.toast.url_error': 'Impossible de récupérer — essayez de coller directement',
	'ui.json_viewer.toast_copy_path': 'Copié',
	'ui.tree.toast_copy_path': 'Copié',
	'ui.tree.toast.copied_path': 'Copié',
	'ui.toast.url_loaded': "Chargé depuis l'URL",
	'share.link_size': 'Taille du lien',
	'share.large_link_warning':
		'Ce lien est volumineux et peut ne pas fonctionner sur tous les navigateurs',
	'share.data_encoded_note':
		"Les données sont encodées dans l'URL et ne sont jamais envoyées à un serveur pour traitement.",
	'share.enter_input_first': "Entrez d'abord une donnée pour générer un lien de partage.",
	'ui.share_url_copied': 'URL de partage copiée',
	'ui.copied': 'Copié',
	'ui.copy_link': 'Copier le Lien',
	'ui.share': 'Partager',
	'ui.close': 'Fermer',
	'ui.cancel': 'Annuler',
	'ui.confirm': 'Confirmer',
	'ui.tool_count.one': '1 outil',
	'ui.tool_count.other': '{count} outils',
	'ui.tree.collapse': 'Réduire',
	'ui.tree.expand': 'Développer',
	'ui.tree.root': 'Racine',
	'ui.tree.summary': '{keyCount} clés · {valueCount} valeurs · prof. {maxDepth}',
	'ui.validity.empty': 'Vide',
	'ui.validity.error_at': 'Ligne {line}, Col {column} : {message}',
	'ui.validity.invalid': '{language} invalide',
	'ui.validity.valid': '{language} valide',
	'ui.xpath.no_results':
		'Aucun résultat. Essayez une autre expression ou vérifiez la structure XML.',
	'ui.xpath.placeholder':
		'Collez le XML dans le panneau de gauche, puis exécutez une expression XPath.',
	'ui.xpath.results_count.one': '1 résultat',
	'ui.xpath.results_count.other': '{count} résultats',
	'ui.validator.syntax': 'Syntaxe',
	'ui.validator.schema': 'Schéma',
	'ui.validator.issue': 'problème',
	'ui.validator.issues': 'problèmes',
	'ui.validator.first_issue': 'Premier problème',
	'ui.validator.repair_json': 'Réparer JSON',
	'ui.validator.schema_title': 'JSON Schema',
	'ui.validator.schema_standard': 'Draft-07+ via AJV',
	'ui.validator.paste_schema_placeholder': 'Coller le JSON Schema ici…',
	'ui.validator.paste_json': 'Coller le JSON à valider',
	'ui.validator.paste_schema': 'Coller un JSON Schema pour validation',
	'ui.validator.validating_schema': 'Validation du schéma…',
	'ui.validator.schema_invalid': 'Le schéma est invalide',
	'ui.validator.json_matches_schema': 'Le JSON correspond au schéma',
	'ui.validator.schema_validation_failed': 'Échec de la validation du schéma',
	'ui.validator.no_syntax_errors': 'Aucune erreur de syntaxe trouvée.',
	'ui.validator.json_matches_current_schema': 'Le JSON correspond au schéma actuel.',
	'ui.validator.schema_match': 'Correspondance schéma',
	'ui.validator.valid_json': 'JSON Valide',
	'ui.validator.explanation_must_satisfy': 'doit satisfaire',
	'ui.validator.data_error_pos': 'Erreur de données à la ligne {line}, colonne {column}',
	'ui.share_url': 'URL de Partage',
	'ui.format_xml': 'Formater XML',
	'ui.minify_xml': 'Minifier XML',
	'ui.format_beautify': 'Formater / Embellir',
	'ui.minify': 'Minifier',
	'ui.repair_json': 'Réparer JSON',
	'ui.expand_all': 'Tout développer',
	'ui.collapse_all': 'Tout réduire',
	'ui.expand_to_depth': 'Développer à la profondeur {depth}',
	switch_to_tab: "Passer à l'onglet {index}",
	switch_to_xml_tab: "Passer à l'onglet XML {index}",
	use_cases: "Cas d'Utilisation",
	faq: 'FAQ',
	'ui.validator.schema_error_pos': 'Erreur de schéma à la ligne {line}, colonne {column}',
	'ui.validator.syntax_error_pos': 'Erreur de syntaxe à la ligne {line}, colonne {column}',
	'ui.validator.line_col_label': 'Ligne {line}, colonne {column}',
	'ui.validator.well_formed': 'Bien formé',
	'ui.validator.invalid_xml': 'XML invalide',
	'ui.validator.loading_editor': "Chargement de l'éditeur…",
	'ui.validator.xml_paste_hint': 'Collez ou tapez du XML pour le valider.',
	'ui.validator.xml_validation_desc':
		'Valide la bonne formation : balises non fermées, éléments mal assortis, caractères invalides, etc.',
	'ui.validator.xml_success_title': 'XML bien formé',
	'ui.validator.xml_success_desc':
		"Aucune erreur de syntaxe détectée. Le document est bien formé et peut être analysé par n'importe quel processeur XML.",
	'ui.validator.error_count.one': '1 erreur trouvée',
	'ui.validator.error_count.other': '{count} erreurs trouvées',
	'ui.toast.file_loaded': 'Fichier chargé : {name}',
	'ui.toast.clipboard_xml': 'XML du presse-papiers',
	'ui.toast.pasted_xml': 'XML collé depuis le presse-papiers',
	'ui.toast.xml_file_types':
		'Seuls les fichiers .xml, .svg, .xhtml, .xsd, .wsdl et .txt sont supportés',
	'ui.aria.xml_input_panel': "Panneau d'entrée XML",
	'ui.aria.xml_output_panel': 'Panneau de sortie XML',
	'ui.aria.xml_workspace_tabs': "Onglets de l'espace de travail XML",
	'ui.aria.xpath_panel': 'Panneau de requête XPath',
	'ui.aria.xml_validator': 'Validateur XML',
	'ui.convert.to_json': '→ JSON',
	'ui.convert.to_yaml': '→ YAML',
	'ui.convert.to_csv': '→ CSV',
	'ui.convert.to_xml': '→ XML',
	'ui.convert.to_toml': '→ TOML',
	'ui.convert.to_markdown': '→ MD',
	'ui.query.jsonpath': 'JSONPath',
	'ui.query.jmespath': 'JMESPath',
	'ui.query.xpath': 'XPath',
	'ui.query.stats.chars': 'caract.',
	'ui.query.stats.lines': 'lignes',
	'ui.query.result': 'résultat',
	'ui.query.results': 'résultats',
	'ui.query.history': 'Historique',
	'ui.query.sample_query': 'Exemple de requête',
	'ui.query.guide': 'Guide',
	'ui.query.query': 'Requête',
	'ui.query.running': 'Requête en cours…',
	'ui.query.empty_input': 'Collez du JSON à gauche pour évaluer votre requête.',
	'ui.query.empty_query': 'Entrez une requête pour voir les résultats.',
	'ui.query.error_fallback': 'Échec de la requête',
	'ui.query.copy_error': 'Impossible de copier la sortie',
	'ui.status.processing': 'Traitement…',
	'ui.status.waiting_output': 'La sortie apparaîtra ici',
	'ui.output.controls.spaces': 'espaces',
	'ui.output.stats.chars': 'caract.',
	'ui.output.stats.lines': 'lignes',
	'ui.output.stats.keys': 'clés',
	'ui.output.stats.objects': 'objets',
	'ui.output.stats.arrays': 'tableaux',
	'ui.output.stats.strings': 'chaînes',
	'ui.output.stats.values': 'valeurs',
	'ui.output.stats.numbers': 'nombres',
	'ui.output.stats.booleans': 'booléens',
	'ui.output.stats.nulls': 'nulls',
	'ui.output.stats.depth': 'prof.',
	'ui.output.stats.size_in': 'ent.',
	'ui.output.stats.size_out': 'sor.',
	'ui.output.original': 'Original',
	'ui.output.minified': 'Minifié',
	'ui.output.saved': 'économisé',
	'ui.output.meta.minified': 'MINIFIÉ',
	'ui.output.actions.wrap': 'Retour à la ligne',
	'ui.output.actions.compare': 'Comparer',
	'ui.output.actions.copy_json': 'Copier comme JSON',
	'ui.output.actions.copy_js': 'Copier comme objet JS',
	'ui.output.actions.copy_python': 'Copier comme dict Python',
	'ui.output.actions.copy_escaped': 'Copier échappé',
	'ui.output.actions.copy': 'Copier',
	'ui.output.actions.download': 'Télécharger',
	'ui.output.compare.input': 'Entrée',
	'ui.output.compare.output': 'Sortie',
	'ui.output.error.invalid_title': 'JSON Invalide',
	'ui.output.controls.indent': 'Indentation',
	'ui.output.controls.tab': 'Tabulation',
	'ui.output.controls.sort_keys': 'Trier les clés',
	'ui.output.controls.clean': 'Nettoyer',
	'ui.output.controls.clean_nulls': 'Supprimer valeurs null',
	'ui.output.controls.clean_strings': 'Supprimer chaînes vides',
	'ui.output.controls.clean_arrays': 'Supprimer tableaux vides',
	'ui.output.controls.clean_objects': 'Supprimer objets vides',
	'ui.output.controls.apply': 'Appliquer',

	// ── Tool FAQs and Use Cases ──────────────────────────────────────────
	'tool.json-formatter.faq.0.question': "Qu'est-ce que le formatage JSON ?",
	'tool.json-formatter.faq.0.answer':
		"Le formatage JSON est le processus d'organisation des données JSON avec une indentation et des sauts de ligne appropriés pour les rendre plus lisibles et faciles à comprendre.",
	'tool.json-formatter.faq.1.question': "Puis-je personnaliser l'indentation ?",
	'tool.json-formatter.faq.1.answer':
		"Oui ! Vous pouvez choisir entre 2 espaces, 4 espaces ou des tabulations pour l'indentation. Le formatteur préserve votre structure de données originale tout en appliquant votre style de formatage préféré.",
	'tool.json-formatter.faq.2.question': 'Cet outil modifie-t-il mes données ?',
	'tool.json-formatter.faq.2.answer':
		"Non. Le formatteur modifie uniquement la présentation visuelle de votre JSON en ajoutant l'indentation et les sauts de ligne. Les données réelles, les clés et les valeurs restent exactement les mêmes.",
	'tool.json-formatter.faq.3.question': 'Puis-je trier les clés JSON ?',
	'tool.json-formatter.faq.3.answer':
		'Oui ! Activez l\'option "Trier les clés" pour trier alphabétiquement toutes les clés dans les objets. C\'est utile pour comparer des fichiers JSON ou maintenir un ordre cohérent.',
	'tool.json-formatter.use_case.0':
		"Déboguer les réponses d'API en les formatant pour une meilleure lisibilité",
	'tool.json-formatter.use_case.1': 'Nettoyer les fichiers JSON minifiés provenant de sources web',
	'tool.json-formatter.use_case.2':
		'Préparer les fichiers de configuration pour le contrôle de version avec un formatage cohérent',
	'tool.json-formatter.use_case.3':
		'Rendre les données JSON plus présentables pour la documentation ou les présentations',
	'tool.json-formatter.use_case.4':
		"Valider et formater le JSON avant l'édition manuelle ou la révision",

	'tool.json-validator.faq.0.question': 'Que vérifie la validation JSON ?',
	'tool.json-validator.faq.0.answer':
		"La validation JSON vérifie les erreurs de syntaxe, notamment les crochets manquants, les guillemets non assortis, les virgules traînantes, les séquences d'échappement invalides et les clés dupliquées dans les objets.",
	'tool.json-validator.faq.1.question':
		'Quelle est la différence entre la validation de syntaxe et de schéma ?',
	'tool.json-validator.faq.1.answer':
		'La validation de syntaxe garantit que le JSON est bien formé selon la spécification JSON. La validation de schéma va plus loin en vérifiant si la structure JSON correspond à un schéma prédéfini avec des règles spécifiques pour les types de données, les champs obligatoires et les contraintes de valeur.',
	'tool.json-validator.faq.2.question': 'Puis-je valider du JSON avec des commentaires ?',
	'tool.json-validator.faq.2.answer':
		'Oui ! Ce validateur supporte le format JSON5, qui autorise les commentaires (// et /* */), les virgules traînantes et les guillemets simples pour les chaînes. Il détectera et gérera automatiquement la syntaxe JSON5.',
	'tool.json-validator.use_case.0':
		"Vérifier les réponses d'API avant de les traiter dans votre application",
	'tool.json-validator.use_case.1':
		"Vérifier les fichiers de configuration avant le déploiement pour éviter les erreurs d'exécution",
	'tool.json-validator.use_case.2':
		'Valider les données JSON soumises par les utilisateurs dans des formulaires ou des uploads',
	'tool.json-validator.use_case.3': "Déboguer les erreurs d'analyse JSON dans votre code",
	'tool.json-validator.use_case.4':
		"Assurer l'intégrité des données lors du transfert de JSON entre systèmes",

	'tool.crypto-hmac.faq.0.question': "Qu'est-ce que le HMAC ?",
	'tool.crypto-hmac.faq.0.answer':
		"Le HMAC (Hash-based Message Authentication Code) est un type spécifique de code d'authentification de message qui utilise une fonction de hachage cryptographique et une clé secrète. Il assure à la fois l'intégrité des données et l'authentification.",
	'tool.crypto-hmac.faq.1.question': 'Quels algorithmes sont supportés ?',
	'tool.crypto-hmac.faq.1.answer':
		'Cet outil supporte plusieurs algorithmes HMAC, dont SHA-256, SHA-512, SHA-1, MD5, et plus. Le SHA-256 est recommandé pour la plupart des applications modernes car il offre un bon équilibre entre sécurité et performance.',
	'tool.crypto-hmac.use_case.0': "Vérifier l'intégrité et l'authenticité des requêtes API",
	'tool.crypto-hmac.use_case.1': 'Créer des jetons sécurisés pour la gestion des sessions',
	'tool.crypto-hmac.use_case.2':
		'Générer des signatures de webhook pour des services comme GitHub ou Stripe',
	'tool.crypto-hmac.use_case.3':
		"Implémenter l'authentification de message dans la communication entre microservices",
	'tool.crypto-hmac.use_case.4': 'Créer des sommes de contrôle pour la vérification de fichiers',

	'tool.json-minifier.faq.0.question': "Qu'est-ce que la minification JSON ?",
	'tool.json-minifier.faq.0.answer':
		'La minification JSON est le processus de suppression de tous les caractères inutiles des données JSON sans changer leur fonctionnalité. Cela inclut la suppression des espaces, des sauts de ligne et des commentaires pour réduire la taille du fichier.',
	'tool.json-minifier.faq.1.question': 'La minification affecte-t-elle la fonctionnalité JSON ?',
	'tool.json-minifier.faq.1.answer':
		'Non. La minification supprime uniquement les caractères de formatage visuel. La structure de données réelle, les clés et les valeurs restent exactement les mêmes, conservant une conformité JSON totale.',
	'tool.json-minifier.faq.2.question': 'Quand dois-je utiliser du JSON minifié ?',
	'tool.json-minifier.faq.2.answer':
		"Utilisez du JSON minifié dans les environnements de production, les réponses d'API et lors de la transmission de données sur les réseaux. Cela réduit la consommation de bande passante et accélère le transfert. Pour le développement et le débogage, utilisez du JSON formaté.",
	'tool.json-minifier.use_case.0':
		"Réduire la taille des fichiers pour les réponses API afin d'améliorer les temps de chargement",
	'tool.json-minifier.use_case.1':
		'Optimiser les fichiers de configuration JSON pour les déploiements en production',
	'tool.json-minifier.use_case.2':
		'Compresser les données avant de les stocker dans des bases de données ou du stockage local',
	'tool.json-minifier.use_case.3':
		"Minimiser l'utilisation de la bande passante lors de la transmission de JSON sur les réseaux",
	'tool.json-minifier.use_case.4':
		"Préparer des fichiers JSON pour l'intégration dans du code HTML ou JavaScript",

	'tool.json-to-yaml.faq.0.question': "Qu'est-ce que la conversion JSON vers YAML ?",
	'tool.json-to-yaml.faq.0.answer':
		"La conversion JSON vers YAML transforme les données JSON au format YAML, qui est plus lisible par l'homme et couramment utilisé pour les fichiers de configuration. Le YAML autorise les commentaires, les ancres et une syntaxe plus flexible.",
	'tool.json-to-yaml.faq.1.question': 'La conversion est-elle sans perte ?',
	'tool.json-to-yaml.faq.1.answer':
		"Oui ! La conversion préserve toutes les données et la structure. JSON et YAML peuvent représenter les mêmes structures de données, donc aucune information n'est perdue pendant le processus.",
	'tool.json-to-yaml.use_case.0':
		'Convertir des fichiers de configuration JSON en YAML pour une meilleure lisibilité',
	'tool.json-to-yaml.use_case.1': 'Créer des manifestes Kubernetes à partir de définitions JSON',
	'tool.json-to-yaml.use_case.2':
		"Migrer des configurations d'application du format JSON vers YAML",
	'tool.json-to-yaml.use_case.3':
		'Générer des fichiers YAML pour les configurations de pipeline CI/CD',

	'tool.json-to-toml.faq.0.question': "Qu'est-ce que la conversion JSON vers TOML ?",
	'tool.json-to-toml.faq.0.answer':
		"La conversion JSON vers TOML transforme les données JSON au format TOML, conçu pour des fichiers de configuration lisibles par l'homme. Le TOML utilise une syntaxe simple avec des sections, des paires clé-valeur et des tables.",
	'tool.json-to-toml.faq.1.question': 'Quand utiliser TOML plutôt que JSON ?',
	'tool.json-to-toml.faq.1.answer':
		'Utilisez TOML pour les fichiers de configuration qui doivent être édités manuellement. La syntaxe de TOML est plus propre et intuitive pour les configurations, tandis que JSON est préférable pour la communication de machine à machine.',
	'tool.json-to-toml.use_case.0':
		'Convertir package.json en pyproject.toml pour des projets Python',
	'tool.json-to-toml.use_case.1': 'Créer des fichiers Cargo.toml à partir de configurations JSON',
	'tool.json-to-toml.use_case.2':
		"Migrer les paramètres d'application vers le format TOML pour une meilleure maintenance",

	'tool.json-to-markdown.faq.0.question':
		"Qu'est-ce que la conversion JSON vers tableau Markdown ?",
	'tool.json-to-markdown.faq.0.answer':
		"Cet outil convertit les tableaux de données JSON au format tableau Markdown, facilitant l'affichage de données structurées dans la documentation, les fichiers README ou toute plateforme compatible Markdown.",
	'tool.json-to-markdown.faq.1.question': 'Quelles structures JSON sont supportées ?',
	'tool.json-to-markdown.faq.1.answer':
		"L'outil fonctionne mieux avec des tableaux d'objets. Chaque objet devient une ligne du tableau, et les propriétés de l'objet deviennent les colonnes. Les objets imbriqués sont aplatis via la notation pointée.",
	'tool.json-to-markdown.use_case.0':
		'Créer des tableaux de données pour les fichiers README et la documentation',
	'tool.json-to-markdown.use_case.1':
		'Convertir des exemples de réponses API en tableaux de documentation',
	'tool.json-to-markdown.use_case.2':
		'Générer des tableaux Markdown à partir de données de tableur exportées en JSON',
	'tool.json-to-markdown.use_case.3':
		'Afficher les options de configuration dans la documentation de projet',

	'tool.json-to-csv.faq.0.question': "Qu'est-ce que la conversion JSON vers CSV ?",
	'tool.json-to-csv.faq.0.answer':
		"La conversion JSON vers CSV transforme des données JSON structurées (généralement un tableau d'objets) en un format plat de Valeurs Séparées par des Virgules. C'est idéal pour importer des données dans des tableurs comme Excel ou Google Sheets.",
	'tool.json-to-csv.faq.1.question': 'Quelles structures JSON fonctionnent le mieux ?',
	'tool.json-to-csv.faq.1.answer':
		"L'outil fonctionne mieux avec un tableau plat d'objets où chaque objet a les mêmes clés. Ces clés deviennent les en-têtes CSV, et les valeurs deviennent les lignes. Les objets ou tableaux imbriqués sont généralement aplatis.",
	'tool.json-to-csv.use_case.0': 'Exporter des données API vers Excel pour analyse métier',
	'tool.json-to-csv.use_case.1':
		'Convertir les exports JSON de bases de données en CSV pour des imports massifs',
	'tool.json-to-csv.use_case.2':
		"Préparer des jeux de données JSON pour l'entraînement de modèles de machine learning au format CSV",
	'tool.json-to-csv.use_case.3': 'Générer des données de rapport pour les applications de tableur',

	'tool.json-jsonpath.faq.0.question': "Qu'est-ce que JSONPath ?",
	'tool.json-jsonpath.faq.0.answer':
		"JSONPath est un langage de requête pour JSON qui vous permet d'extraire des données spécifiques de documents JSON. C'est similaire à XPath pour XML et utilise la notation pointée et des filtres pour naviguer dans les structures JSON.",
	'tool.json-jsonpath.faq.1.question': 'Comment fonctionne la syntaxe JSONPath ?',
	'tool.json-jsonpath.faq.1.answer':
		"JSONPath utilise des expressions comme $.store.book[*].title pour naviguer à travers le JSON. Le $ représente la racine, . accède aux propriétés, [*] sélectionne tous les éléments d'un tableau, et divers opérateurs peuvent filtrer et transformer les résultats.",
	'tool.json-jsonpath.faq.2.question': 'Que puis-je faire avec les résultats JSONPath ?',
	'tool.json-jsonpath.faq.2.answer':
		"Vous pouvez extraire des valeurs spécifiques, filtrer des tableaux, effectuer des calculs et transformer des données JSON. JSONPath est utile pour les tests d'API, l'extraction de données et la validation de structure JSON dans les applications.",
	'tool.json-jsonpath.use_case.0': 'Extraire des champs spécifiques des réponses API',
	'tool.json-jsonpath.use_case.1': 'Filtrer et interroger de grands jeux de données JSON',
	'tool.json-jsonpath.use_case.2': 'Tester les réponses API dans des tests automatisés',
	'tool.json-jsonpath.use_case.3':
		'Valider la structure et le contenu JSON dans les pipelines de données',

	'tool.json-jmespath.faq.0.question': "Qu'est-ce que JMESPath ?",
	'tool.json-jmespath.faq.0.answer':
		"JMESPath est un langage de requête pour JSON qui vous permet d'extraire et de transformer des éléments de documents JSON. Il offre des capacités de transformation de données plus avancées que JSONPath, incluant le filtrage, le mapping et des fonctions d'agrégation.",
	'tool.json-jmespath.faq.1.question': 'En quoi JMESPath est-il différent de JSONPath ?',
	'tool.json-jmespath.faq.1.answer':
		"JMESPath propose des fonctionnalités de transformation de données plus puissantes comme des fonctions, des filtres et des expressions pipe. Alors que JSONPath est principalement destiné à l'extraction, JMESPath peut remodeler, filtrer et transformer les données JSON en de nouvelles structures.",
	'tool.json-jmespath.faq.2.question': 'Quelles sont les opérations JMESPath courantes ?',
	'tool.json-jmespath.faq.2.answer':
		"Les opérations courantes incluent le filtrage avec [?condition], la sélection de champs avec {key: value}, le tri avec sort_by() et l'agrégation de données avec des fonctions comme length(), sum() et type(). Vous pouvez aussi enchaîner les opérations avec | pour des transformations complexes.",
	'tool.json-jmespath.use_case.0':
		'Transformer les réponses API pour correspondre aux structures de données requises',
	'tool.json-jmespath.use_case.1': 'Filtrer et remodeler les données de documents JSON complexes',
	'tool.json-jmespath.use_case.2':
		'Extraire des informations spécifiques de structures JSON imbriquées',
	'tool.json-jmespath.use_case.3':
		'Nettoyer les réponses JSON pour une consommation frontend simplifiée',

	// JSON Diff
	'tool.json-diff.display_name': 'Diff JSON',
	'tool.json-diff.tagline': 'Comparer deux documents JSON',
	'tool.json-diff.description':
		"Un puissant outil de comparaison sémantique JSON. Collez deux documents JSON pour voir instantanément les différences, en ignorant l'ordre des clés et les espaces arbitraires. Parfait pour déboguer les changements d'API ou vérifier les mises à jour de configuration.",
	'tool.json-diff.primary_keyword': 'outil diff json',
	'tool.json-diff.meta_title': 'Outil Diff JSON - Comparer JSON en ligne',
	'tool.json-diff.meta_description':
		"Comparez deux documents JSON de manière sémantique en ligne. Notre outil de diff JSON ignore l'ordre des clés et les différences de formatage pour vous montrer exactement ce qui a changé.",
	'tool.json-diff.operation': 'Comparer',
	'tool.json-diff.faq.0.question': "Ignore-t-il l'ordre des clés ?",
	'tool.json-diff.faq.0.answer':
		'Oui. Notre moteur de diff analyse la structure JSON en représentations normalisées, ce qui signifie que {"a": 1, "b": 2} et {"b": 2, "a": 1} sont considérés comme identiques.',
	'tool.json-diff.faq.1.question': 'Gère-t-il les fichiers JSON volumineux ?',
	'tool.json-diff.faq.1.answer':
		'Oui, la comparaison est effectuée efficacement dans votre navigateur et affiche les ajouts, suppressions et modifications ligne par ligne.',
	'tool.json-diff.faq.2.question': 'Mes données sont-elles sécurisées ?',
	'tool.json-diff.faq.2.answer':
		"Absolument. La comparaison se fait entièrement localement dans votre navigateur. Aucune donnée JSON n'est jamais envoyée à nos serveurs.",
	'tool.json-diff.use_case.0':
		"Comparer les réponses de différentes versions d'API pour mapper les régressions",
	'tool.json-diff.use_case.1':
		'Déboguer des changements de configuration inattendus dans les fichiers de paramètres de production',
	'tool.json-diff.use_case.2':
		'Réviser les conflits de fusion git impliquant des manifestes JSON ou des fichiers lock',
	'tool.json-diff.use_case.3':
		'Trouver des écarts entre les exports de base de données de staging et de production',

	// ── XML Tool FAQs and Use Cases ──────────────────────────────────────────
	'tool.xml-formatter.faq.0.question': "Qu'est-ce que le formatage XML ?",
	'tool.xml-formatter.faq.0.answer':
		"Le formatage XML est le processus d'organisation du code XML avec une indentation et des sauts de ligne appropriés pour le rendre plus lisible et maintenable. Cela aide les développeurs à comprendre la structure et la hiérarchie du document.",
	'tool.xml-formatter.faq.1.question': "Puis-je personnaliser l'indentation ?",
	'tool.xml-formatter.faq.1.answer':
		"Oui ! Vous pouvez choisir entre 2 espaces, 4 espaces ou des tabulations pour l'indentation. Le formatteur préserve votre structure XML tout en appliquant votre style de formatage préféré.",
	'tool.xml-formatter.faq.2.question': 'Le formatteur préserve-t-il les commentaires ?',
	'tool.xml-formatter.faq.2.answer':
		"Oui, le formatteur XML préserve tous les commentaires à leurs positions d'origine. Il modifie seulement l'indentation et les sauts de ligne pour améliorer la lisibilité sans affecter le contenu ou la structure.",
	'tool.xml-formatter.use_case.0':
		'Rendre les fichiers XML plus lisibles pour la documentation et les revues de code',
	'tool.xml-formatter.use_case.1': "Nettoyer le XML minifié provenant de réponses web ou d'APIs",
	'tool.xml-formatter.use_case.2': "Standardiser le formatage XML sur les projets d'équipe",
	'tool.xml-formatter.use_case.3': 'Déboguer la structure XML en améliorant la hiérarchie visuelle',
	'tool.xml-formatter.use_case.4':
		'Préparer les fichiers XML pour le contrôle de version avec un formatage cohérent',

	'tool.xml-validator.faq.0.question': 'Que vérifie la validation XML ?',
	'tool.xml-validator.faq.0.answer':
		"La validation XML vérifie la bonne formation, incluant l'imbrication correcte des balises, la correspondance des balises d'ouverture/fermeture, la syntaxe d'attribut valide, l'encodage correct des caractères et la conformité aux règles de spécification XML.",
	'tool.xml-validator.faq.1.question':
		'Quelle est la différence entre un XML bien formé et un XML valide ?',
	'tool.xml-validator.faq.1.answer':
		'Un XML bien formé suit les règles de syntaxe de base mais peut avoir des problèmes structurels. Un XML valide est bien formé ET conforme à une DTD ou un XML Schema spécifique qui définit la structure et le contenu autorisés.',
	'tool.xml-validator.faq.2.question': 'Comment corriger les erreurs de validation XML ?',
	'tool.xml-validator.faq.2.answer':
		'Le validateur affiche les numéros précis de ligne et de colonne pour chaque erreur. Les corrections courantes incluent : fermer les balises non fermées, corriger les balises mal assorties, supprimer les attributs dupliqués et assurer un encodage correct. Cliquez sur une erreur pour voir des explications détaillées.',
	'tool.xml-validator.use_case.0':
		'Valider les réponses API avant traitement dans les applications',
	'tool.xml-validator.use_case.1':
		'Vérifier les fichiers de configuration avant déploiement pour éviter les erreurs',
	'tool.xml-validator.use_case.2':
		'Vérifier les imports de données XML provenant de systèmes tiers',
	'tool.xml-validator.use_case.3':
		"Déboguer les problèmes d'analyse XML dans les environnements de développement",
	'tool.xml-validator.use_case.4':
		"Assurer la conformité XML avant de soumettre à des systèmes d'entreprise",

	'tool.xml-to-json.faq.0.question': 'Comment fonctionne la conversion XML vers JSON ?',
	'tool.xml-to-json.faq.0.answer':
		'La conversion mappe les éléments XML en objets JSON, les attributs en paires clé-valeur et le contenu textuel en valeurs de chaîne. Les espaces de noms XML sont préservés, et les éléments multiples portant le même nom deviennent des tableaux.',
	'tool.xml-to-json.faq.1.question': 'La conversion est-elle réversible ?',
	'tool.xml-to-json.faq.1.answer':
		"Surtout oui, mais certaines fonctionnalités XML comme les commentaires, les instructions de traitement et l'ordre des attributs peuvent être perdues. La structure de données principale reste intacte pour une conversion aller-retour.",
	'tool.xml-to-json.faq.2.question': 'Comment les attributs XML sont-ils gérés en JSON ?',
	'tool.xml-to-json.faq.2.answer':
		'Les attributs XML sont convertis en propriétés JSON avec un préfixe "@" par défaut. Cela les distingue des éléments enfants. Vous pouvez personnaliser ce comportement dans les paramètres avancés.',
	'tool.xml-to-json.use_case.0':
		"Convertir les réponses d'API SOAP en JSON pour les applications modernes",
	'tool.xml-to-json.use_case.1':
		'Traiter des fichiers de configuration XML dans des applications JavaScript',
	'tool.xml-to-json.use_case.2':
		'Migrer des données XML héritées vers des systèmes modernes basés sur JSON',
	'tool.xml-to-json.use_case.3': 'Extraire des données de sitemaps XML pour analyse',
	'tool.xml-to-json.use_case.4':
		'Transformer des flux RSS en JSON pour une consommation par application mobile',

	'tool.json-to-xml.faq.0.question': "Qu'est-ce que la conversion JSON vers XML ?",
	'tool.json-to-xml.faq.0.answer':
		'La conversion JSON vers XML transforme les données JSON au format XML, mappant les objets aux éléments, les tableaux aux éléments répétés et les valeurs primitives au contenu textuel. Cela permet une compatibilité avec les systèmes nécessitant une entrée XML.',
	'tool.json-to-xml.faq.1.question': 'Comment les tableaux sont-ils gérés lors de la conversion ?',
	'tool.json-to-xml.faq.1.answer':
		"Les tableaux JSON deviennent plusieurs éléments XML avec le même nom de balise. Vous pouvez configurer l'utilisation d'éléments conteneurs (wrappers) ou répéter la même balise d'élément pour chaque article du tableau.",
	'tool.json-to-xml.faq.2.question': 'Comment le convertisseur gère-t-il les caractères spéciaux ?',
	'tool.json-to-xml.faq.2.answer':
		'Les caractères spéciaux sont automatiquement échappés selon les standards XML. Cela inclut &, <, >, ", et \', qui sont convertis en leurs entités XML correspondantes pour garantir une sortie XML valide.',
	'tool.json-to-xml.use_case.0': 'Créer des sitemaps XML à partir de données JSON',
	'tool.json-to-xml.use_case.1': 'Générer des flux RSS/Atom à partir de contenu JSON',
	'tool.json-to-xml.use_case.2':
		'Convertir des réponses API pour des systèmes hérités nécessitant du XML',
	'tool.json-to-xml.use_case.3':
		'Créer des fichiers de configuration pour des applications Java à partir de JSON',
	'tool.json-to-xml.use_case.4':
		'Générer des enveloppes SOAP à partir de charges utiles JSON pour les services web',

	'tool.xml-to-yaml.faq.0.question': 'Pourquoi convertir du XML en YAML ?',
	'tool.xml-to-yaml.faq.0.answer':
		"Le YAML est plus lisible par l'homme et plus facile à éditer manuellement que le XML. Il est couramment utilisé pour les fichiers de configuration, les documents et l'échange de données où la lisibilité est importante.",
	'tool.xml-to-yaml.faq.1.question': 'Comment les attributs XML sont-ils gérés ?',
	'tool.xml-to-yaml.faq.1.answer':
		"Les attributs XML sont généralement convertis en paires clé-valeur au sein de l'élément YAML. Vous pouvez configurer l'utilisation d'une syntaxe spéciale ou les traiter comme des propriétés régulières.",
	'tool.xml-to-yaml.faq.2.question': 'Le XML imbriqué complexe peut-il être converti en YAML ?',
	'tool.xml-to-yaml.faq.2.answer':
		"Oui ! Le convertisseur gère l'imbrication arbitrairement profonde, le contenu mixte et les structures XML complexes. Le YAML résultant maintient la même hiérarchie de données dans un format plus lisible.",
	'tool.xml-to-yaml.use_case.0': 'Convertir des configurations XML Spring Framework en YAML',
	'tool.xml-to-yaml.use_case.1':
		'Migrer des scripts de build du format XML vers un format YAML plus lisible',
	'tool.xml-to-yaml.use_case.2': 'Créer des ressources Kubernetes à partir de templates XML',
	'tool.xml-to-yaml.use_case.3': 'Traiter des documents XML à des fins de documentation',
	'tool.xml-to-yaml.use_case.4':
		"Transformer des données XML pour des playbooks Ansible et l'automatisation",

	'tool.xml-to-csv.faq.0.question': 'Comment fonctionne la conversion XML vers CSV ?',
	'tool.xml-to-csv.faq.0.answer':
		"Le convertisseur extrait les éléments répétitifs du XML et crée des lignes en CSV, les attributs d'éléments et les éléments enfants devenant des colonnes. Vous pouvez sélectionner les éléments à convertir et personnaliser le format de sortie.",
	'tool.xml-to-csv.faq.1.question':
		'Quelles structures XML fonctionnent le mieux pour la conversion CSV ?',
	'tool.xml-to-csv.faq.1.answer':
		'Le XML avec des éléments répétitifs de type "enregistrement" fonctionne le mieux. Chaque élément répété devient une ligne, et ses propriétés deviennent des colonnes. Les structures profondément imbriquées peuvent nécessiter d\'être aplaties.',
	'tool.xml-to-csv.use_case.0': 'Extraire des données de rapports XML vers un format tableur',
	'tool.xml-to-csv.use_case.1': 'Convertir des exports XML de bases de données en CSV pour analyse',
	'tool.xml-to-csv.use_case.2': "Traiter des logs XML pour l'analyse de données dans Excel",
	'tool.xml-to-csv.use_case.3':
		'Migrer des catalogues produits du format XML vers CSV pour des plateformes e-commerce',
	'tool.xml-to-csv.use_case.4':
		"Analyser les réponses d'API XML en les convertissant au format tabulaire",

	'tool.xml-minifier.faq.0.question': "Qu'est-ce que la minification XML ?",
	'tool.xml-minifier.faq.0.answer':
		'La minification XML supprime tous les caractères inutiles du XML sans changer sa fonctionnalité. Cela inclut les espaces, les sauts de ligne et les commentaires pour réduire la taille du fichier.',
	'tool.xml-minifier.faq.1.question': 'La minification affecte-t-elle le traitement XML ?',
	'tool.xml-minifier.faq.1.answer':
		'Non. Les analyseurs XML ignorent par défaut les espaces entre les balises, donc le XML minifié est traité de manière identique au XML formaté, mais se charge plus rapidement grâce à sa taille réduite.',
	'tool.xml-minifier.use_case.0':
		'Réduire la taille des fichiers pour des réponses API plus rapides',
	'tool.xml-minifier.use_case.1':
		'Optimiser les fichiers XML pour les environnements de production',
	'tool.xml-minifier.use_case.2':
		"Minimiser l'utilisation de la bande passante lors de la transmission de données XML",
	'tool.xml-minifier.use_case.3':
		"Préparer des fichiers XML pour l'intégration dans d'autres documents",

	'tool.xml-xpath.faq.0.question': "Qu'est-ce que XPath ?",
	'tool.xml-xpath.faq.0.answer':
		'XPath est un langage de requête pour sélectionner des nœuds dans des documents XML. Il utilise des expressions de chemin pour naviguer à travers les éléments et les attributs, similairement aux chemins de fichiers.',
	'tool.xml-xpath.faq.1.question': 'Que peuvent faire les expressions XPath ?',
	'tool.xml-xpath.faq.1.answer':
		"XPath peut sélectionner des éléments par nom, valeur d'attribut, position ou contenu. Il supporte des conditions complexes, des fonctions de manipulation de texte et des opérations mathématiques pour des requêtes avancées.",
	'tool.xml-xpath.use_case.0': 'Extraire des données spécifiques de documents XML volumineux',
	'tool.xml-xpath.use_case.1': 'Tester les données XML dans des suites de tests automatisés',
	'tool.xml-xpath.use_case.2': 'Transformer des données XML en utilisant des templates XSLT',
	'tool.xml-xpath.use_case.3': 'Valider la structure et le contenu XML de manière programmatique'
};

export default registryFr;

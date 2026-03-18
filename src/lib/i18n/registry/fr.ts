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
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Formater, valider et convertir des fichiers TOML. Convertir TOML en JSON et YAML en toute sécurité.',
	'category.toml.primary_keyword': 'outils toml',
	'category.text.display_name': 'Texte',
	'category.text.description':
		'Analyser, compter et transformer du texte brut. Mesurez mots, caractères, structure et temps de lecture instantanément.',
	'category.text.primary_keyword': 'outils texte',
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
	'tool.xml-to-json-schema.display_name': 'XML vers schéma JSON',
	'tool.xml-to-json-schema.tagline': 'Inférer un schéma JSON à partir de la structure XML',
	'tool.xml-to-json-schema.description':
		'Générez un schéma JSON Draft 2020-12 à partir de XML en analysant la structure des éléments, les attributs et la cardinalité. Les éléments répétés sont inférés en tableaux et les champs partagés en required.',
	'tool.xml-to-json-schema.primary_keyword': 'xml vers schéma json',
	'tool.xml-to-json-schema.meta_title': 'Générateur XML vers schéma JSON — fmtly.dev',
	'tool.xml-to-json-schema.meta_description':
		'Inférez un schéma JSON depuis XML dans votre navigateur. Détecte automatiquement structures imbriquées, éléments répétés et champs requis.',
	'tool.xml-to-json-schema.operation': 'Générer le schéma',
	'tool.xml-to-json-schema.faq.0.question': 'Comment la cardinalité est-elle inférée depuis XML ?',
	'tool.xml-to-json-schema.faq.0.answer':
		'Quand des éléments frères de même nom se répètent sous un même parent, ils sont inférés comme des tableaux. Une occurrence unique reste un champ scalaire ou objet.',
	'tool.xml-to-json-schema.faq.1.question':
		'Comment les attributs XML sont-ils représentés dans le schéma ?',
	'tool.xml-to-json-schema.faq.1.answer':
		'Les attributs sont inclus comme propriétés normales avec la clé d’attribut parsée (par exemple @_id), afin d’être validés avec les éléments enfants.',
	'tool.xml-to-json-schema.faq.2.question': 'Quelle version de JSON Schema est générée ?',
	'tool.xml-to-json-schema.faq.2.answer':
		'La sortie utilise JSON Schema Draft 2020-12 et inclut des mots-clés standards comme $schema, type, properties, required et items.',
	'tool.xml-to-json-schema.use_case.0':
		'Créer des schémas de validation initiaux depuis des payloads XML existants',
	'tool.xml-to-json-schema.use_case.1':
		'Documenter des structures de flux XML complexes pour les consommateurs en aval',
	'tool.xml-to-json-schema.use_case.2':
		'Générer un schéma de base avant de renforcer les contraintes manuellement',
	'tool.xml-to-json-schema.use_case.3':
		'Intégrer des flux XML dans des workflows de validation orientés JSON',

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

	'tool.xml-diff.display_name': 'Diff XML',
	'tool.xml-diff.tagline': 'Comparer des documents XML et visualiser les différences',
	'tool.xml-diff.description':
		'Comparer deux documents XML côte à côte et mettre en évidence les différences. Affiche les éléments ajoutés, supprimés et modifiés avec des numéros de ligne précis et une visualisation de diff adaptée au XML.',
	'tool.xml-diff.primary_keyword': 'diff xml',
	'tool.xml-diff.meta_title': 'Outil de Diff XML — fmtly.dev',
	'tool.xml-diff.meta_description':
		"Comparer des fichiers XML et visualiser les différences dans votre navigateur. Affiche les changements au niveau des éléments avec des numéros de ligne. Pas d'envoi de données.",
	'tool.xml-diff.operation': 'Diff',
	'tool.xml-diff.faq.0.question': 'Quelle est la différence entre XML Diff et un diff de texte ?',
	'tool.xml-diff.faq.0.answer':
		"XML Diff valide d'abord les deux entrées comme XML puis les compare ligne par ligne avec une normalisation des espaces adaptée au XML. Il convient donc mieux aux documents XML qu'une simple comparaison de texte.",
	'tool.xml-diff.faq.1.question': 'Puis-je comparer du XML invalide ?',
	'tool.xml-diff.faq.1.answer':
		"Non. Les deux côtés doivent être du XML valide avant la comparaison. Si une entrée est mal formée, l'outil indique quel côté doit être corrigé.",
	'tool.xml-diff.faq.2.question': 'Quels types de changements sont mis en évidence ?',
	'tool.xml-diff.faq.2.answer':
		"L'outil met en évidence les lignes XML ajoutées, supprimées et modifiées. C'est utile pour les changements de configuration, les révisions de flux et les revues de balisage.",
	'tool.xml-diff.use_case.0': 'Vérifier les changements entre deux payloads XML d’API',
	'tool.xml-diff.use_case.1': 'Comparer des révisions de sitemap, de flux ou de configuration XML',
	'tool.xml-diff.use_case.2': 'Inspecter des changements de balisage avant déploiement',
	'tool.xml-diff.use_case.3': 'Comparer une sortie XML générée avec une version attendue',

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
	'tool.yaml-formatter.faq.0.question': 'Que normalise le formateur YAML ?',
	'tool.yaml-formatter.faq.0.answer':
		"Il harmonise l'indentation, les espacements, le style des guillemets et la mise en page pour rendre le YAML plus lisible sans changer le sens des données.",
	'tool.yaml-formatter.faq.1.question': 'Le formatage modifie-t-il mes données YAML ?',
	'tool.yaml-formatter.faq.1.answer':
		"Non. Il améliore la présentation, pas la structure des données. L'objectif est d'obtenir une sortie plus propre et cohérente.",
	'tool.yaml-formatter.use_case.0': 'Mettre en forme des manifests Kubernetes avant revue',
	'tool.yaml-formatter.use_case.1': 'Uniformiser des configs CI pour des diffs plus propres',
	'tool.yaml-formatter.use_case.2': 'Reformater des fichiers Helm values avant commit',
	'tool.yaml-formatter.use_case.3': 'Rendre de grosses configurations YAML plus lisibles',

	'tool.yaml-minifier.display_name': 'Minificateur YAML',
	'tool.yaml-minifier.tagline': 'Minifier le YAML en une sortie compacte et valide',
	'tool.yaml-minifier.description':
		'Minifier des documents YAML vers une représentation compacte en style flow. Prend en charge le YAML multi-documents et conserve la même structure de données tout en réduisant le bruit visuel.',
	'tool.yaml-minifier.primary_keyword': 'minificateur yaml',
	'tool.yaml-minifier.meta_title': 'Minificateur YAML — fmtly.dev',
	'tool.yaml-minifier.meta_description':
		'Minifier du YAML dans votre navigateur. Prend en charge le YAML multi-documents et une sortie compacte. Aucune donnée ne quitte votre appareil.',
	'tool.yaml-minifier.operation': 'Minifier',
	'tool.yaml-minifier.faq.0.question': 'Comment fonctionne la minification YAML ?',
	'tool.yaml-minifier.faq.0.answer':
		'Le YAML est d’abord analysé puis réécrit sous une forme valide plus compacte. Cela réduit le bruit de mise en forme sans changer les données.',
	'tool.yaml-minifier.faq.1.question': 'Est-ce que cela prend en charge plusieurs documents YAML ?',
	'tool.yaml-minifier.faq.1.answer':
		'Oui. Les entrées multi-documents séparées par des marqueurs de document sont conservées et minifiées document par document.',
	'tool.yaml-minifier.use_case.0':
		'Réduire du YAML avant de partager des extraits dans un ticket ou un chat',
	'tool.yaml-minifier.use_case.1': 'Inspecter des manifests multi-documents compacts',
	'tool.yaml-minifier.use_case.2':
		'Réduire les espaces avant de stocker des fixtures YAML générées',
	'tool.yaml-minifier.use_case.3':
		'Comparer côte à côte une version lisible et une version compacte du YAML',

	'tool.yaml-validator.display_name': 'Validateur YAML',
	'tool.yaml-validator.tagline': 'Valider la syntaxe et le schéma YAML',
	'tool.yaml-validator.description':
		'Valider la syntaxe YAML en temps réel et vérifier des documents contre un schéma. Repère les problèmes d’indentation, les structures mal formées et les écarts de schéma avec repères de ligne.',
	'tool.yaml-validator.primary_keyword': 'validateur yaml',
	'tool.yaml-validator.meta_title': 'Validateur YAML — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Valider la syntaxe et le schéma YAML dans votre navigateur. Détecte les erreurs du parseur et les écarts de schéma avec numéros de ligne. Aucune donnée ne quitte votre appareil.',
	'tool.yaml-validator.operation': 'Valider',
	'tool.yaml-validator.faq.0.question': 'Quels types d’erreurs YAML détecte-t-il ?',
	'tool.yaml-validator.faq.0.answer':
		'Il repère les mauvaises indentations, les mappages invalides, les séquences mal placées et d’autres erreurs du parseur. En mode schéma, il signale aussi les chemins et valeurs qui ne respectent pas le schéma.',
	'tool.yaml-validator.faq.1.question': 'Puis-je valider du YAML contre un schéma ?',
	'tool.yaml-validator.faq.1.answer':
		'Oui. Passez en mode Schéma et fournissez un JSON Schema. L’entrée du schéma peut être écrite en JSON ou en YAML, ce qui est pratique pour les manifests, fichiers de configuration et payloads API.',
	'tool.yaml-validator.use_case.0': 'Vérifier des manifests de déploiement avant livraison',
	'tool.yaml-validator.use_case.1': 'Valider du YAML copié depuis une documentation',
	'tool.yaml-validator.use_case.2': 'Repérer des erreurs d’indentation dans des configs CI',
	'tool.yaml-validator.use_case.3': 'Valider des Helm values ou manifests contre un schéma attendu',

	'tool.yaml-to-json.display_name': 'YAML vers JSON',
	'tool.yaml-to-json.tagline': 'Convertir YAML au format JSON',
	'tool.yaml-to-json.description':
		'Convertir des documents YAML en JSON formaté. Gère les ancres, les alias, le YAML multi-documents et tous les types de données YAML.',
	'tool.yaml-to-json.primary_keyword': 'yaml vers json',
	'tool.yaml-to-json.meta_title': 'Convertisseur YAML vers JSON — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		"Convertir YAML en JSON instantanément dans votre navigateur. Gère les ancres, les alias et le multi-documents. Pas d'envoi de données.",
	'tool.yaml-to-json.operation': 'Convertir',
	'tool.yaml-to-json.faq.0.question': 'Quand faut-il convertir du YAML en JSON ?',
	'tool.yaml-to-json.faq.0.answer':
		'Quand des API, des outils JavaScript, des tests ou des systèmes en aval attendent un format JSON plus strict.',
	'tool.yaml-to-json.faq.1.question': 'Les objets et tableaux imbriqués sont-ils conservés ?',
	'tool.yaml-to-json.faq.1.answer':
		'Oui. Les mappages et séquences imbriqués sont convertis vers leurs équivalents JSON tout en gardant la structure globale.',
	'tool.yaml-to-json.use_case.0': 'Transformer des configs YAML en JSON pour des payloads API',
	'tool.yaml-to-json.use_case.1': 'Inspecter des données YAML dans un format plus strict',
	'tool.yaml-to-json.use_case.2':
		'Réutiliser des données de configuration dans des workflows JavaScript',
	'tool.yaml-to-json.use_case.3': 'Préparer du YAML pour des outils basés sur JSON',

	'tool.yaml-to-xml.display_name': 'YAML vers XML',
	'tool.yaml-to-xml.tagline': 'Convertir YAML au format XML',
	'tool.yaml-to-xml.description':
		'Convertir des documents YAML en XML bien formé. Mappe les clés YAML aux éléments XML et gère les structures imbriquées et les tableaux.',
	'tool.yaml-to-xml.primary_keyword': 'yaml vers xml',
	'tool.yaml-to-xml.meta_title': 'Convertisseur YAML vers XML — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		"Convertir YAML en XML instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.yaml-to-xml.operation': 'Convertir',
	'tool.yaml-to-xml.faq.0.question': 'Comment le YAML est-il mappé vers XML ?',
	'tool.yaml-to-xml.faq.0.answer':
		'Les clés deviennent des noms d’éléments, les objets imbriqués deviennent des éléments imbriqués et les tableaux deviennent des entrées répétées.',
	'tool.yaml-to-xml.faq.1.question': 'Puis-je réutiliser la sortie dans d’autres outils XML ?',
	'tool.yaml-to-xml.faq.1.answer':
		'Oui. La sortie est générée en XML bien formé, prête pour un formatage ou une validation XML supplémentaire.',
	'tool.yaml-to-xml.use_case.0': 'Alimenter des intégrations XML à partir de données YAML',
	'tool.yaml-to-xml.use_case.1': 'Générer des fixtures XML à partir de données de test YAML',
	'tool.yaml-to-xml.use_case.2': 'Relier des flux YAML à des pipelines XML',
	'tool.yaml-to-xml.use_case.3': 'Préparer un contenu YAML structuré pour export XML',

	'tool.yaml-to-csv.display_name': 'YAML vers CSV',
	'tool.yaml-to-csv.tagline': 'Convertir des tableaux YAML au format CSV',
	'tool.yaml-to-csv.description':
		"Convertir des tableaux d'objets YAML au format CSV. Extrait les en-têtes des clés d'objet et formate les données en lignes.",
	'tool.yaml-to-csv.primary_keyword': 'yaml vers csv',
	'tool.yaml-to-csv.meta_title': 'Convertisseur YAML vers CSV — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		"Convertir YAML en CSV instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.yaml-to-csv.operation': 'Convertir',
	'tool.yaml-to-csv.faq.0.question': 'Quelles structures YAML se convertissent le mieux en CSV ?',
	'tool.yaml-to-csv.faq.0.answer':
		'Les tableaux d’objets donnent le meilleur résultat. Chaque objet devient une ligne et les clés communes deviennent des colonnes CSV.',
	'tool.yaml-to-csv.faq.1.question': 'Peut-on convertir un seul objet YAML en CSV ?',
	'tool.yaml-to-csv.faq.1.answer':
		'Oui. Un objet unique peut être exporté comme une seule ligne CSV, pratique pour des enregistrements simples.',
	'tool.yaml-to-csv.use_case.0': 'Exporter des enregistrements YAML vers un tableur',
	'tool.yaml-to-csv.use_case.1': 'Transformer des jeux de données YAML pour des analystes',
	'tool.yaml-to-csv.use_case.2': 'Aplatir des listes d’inventaire ou de configuration',
	'tool.yaml-to-csv.use_case.3': 'Préparer du YAML pour des outils d’import CSV',

	'tool.yaml-to-toml.display_name': 'YAML vers TOML',
	'tool.yaml-to-toml.tagline': 'Convertir YAML au format de configuration TOML',
	'tool.yaml-to-toml.description':
		'Convertir des fichiers de configuration YAML au format TOML. Gère les tables imbriquées, les tableaux et tous les types de données YAML.',
	'tool.yaml-to-toml.primary_keyword': 'yaml vers toml',
	'tool.yaml-to-toml.meta_title': 'Convertisseur YAML vers TOML — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		"Convertir YAML en TOML instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.yaml-to-toml.operation': 'Convertir',
	'tool.yaml-to-toml.faq.0.question': 'Pourquoi convertir du YAML en TOML ?',
	'tool.yaml-to-toml.faq.0.answer':
		'Le TOML est souvent préféré pour des fichiers de configuration édités à la main. Si un projet attend du TOML, la conversion fait gagner du temps.',
	'tool.yaml-to-toml.faq.1.question': 'Les sections imbriquées sont-elles conservées ?',
	'tool.yaml-to-toml.faq.1.answer':
		'Oui. Les mappages imbriqués sont convertis en tables et tableaux TOML lorsque le format le permet.',
	'tool.yaml-to-toml.use_case.0': 'Migrer des réglages YAML vers des projets basés sur TOML',
	'tool.yaml-to-toml.use_case.1': 'Générer des configs TOML depuis des sources YAML',
	'tool.yaml-to-toml.use_case.2': 'Porter des réglages de déploiement vers des outils TOML',
	'tool.yaml-to-toml.use_case.3': 'Comparer une même configuration en YAML et TOML',

	'tool.yaml-diff.display_name': 'Diff YAML',
	'tool.yaml-diff.tagline': 'Comparer deux documents YAML côte à côte',
	'tool.yaml-diff.description':
		'Comparer deux documents YAML et mettre en évidence les ajouts, les suppressions et les modifications. Comprend la structure YAML pour une comparaison sémantique.',
	'tool.yaml-diff.primary_keyword': 'diff yaml',
	'tool.yaml-diff.meta_title': 'Outil Diff YAML — fmtly.dev',
	'tool.yaml-diff.meta_description':
		"Comparer deux documents YAML dans votre navigateur. Souligne tous les ajouts, suppressions et changements. Pas d'envoi de données.",
	'tool.yaml-diff.operation': 'Comparer',
	'tool.yaml-diff.faq.0.question': 'En quoi YAML Diff diffère-t-il d’un diff texte classique ?',
	'tool.yaml-diff.faq.0.answer':
		'Les deux entrées sont d’abord analysées comme des données YAML puis comparées structurellement. Les changements sont donc repérés par clés, tableaux et valeurs, pas seulement par mise en forme.',
	'tool.yaml-diff.faq.1.question': 'Puis-je comparer un YAML invalide ?',
	'tool.yaml-diff.faq.1.answer':
		'Non. Les deux côtés doivent être du YAML valide. Il faut d’abord corriger l’entrée qui est cassée.',
	'tool.yaml-diff.faq.2.question': 'Quels changements sont mis en évidence ?',
	'tool.yaml-diff.faq.2.answer':
		'Les chemins et valeurs YAML ajoutés, supprimés et modifiés sont mis en évidence, ce qui aide à relire les révisions de configuration.',
	'tool.yaml-diff.use_case.0': 'Relire les changements entre deux manifests de déploiement',
	'tool.yaml-diff.use_case.1': 'Comparer des révisions de configuration CI',
	'tool.yaml-diff.use_case.2': 'Inspecter des fichiers Helm/values modifiés avant commit',
	'tool.yaml-diff.use_case.3': 'Vérifier un YAML généré par rapport à une version attendue',
	'tool.yaml-query.display_name': 'Requête YAML',
	'tool.yaml-query.tagline': 'Interroger du YAML avec JSONPath et JMESPath',
	'tool.yaml-query.description':
		'Exécuter des expressions JSONPath ou JMESPath directement sur du YAML dans votre navigateur. Analysez le YAML, interrogez des données imbriquées et inspectez les résultats sans conversion manuelle.',
	'tool.yaml-query.primary_keyword': 'requête yaml',
	'tool.yaml-query.meta_title': 'Outil de Requête YAML — fmtly.dev',
	'tool.yaml-query.meta_description':
		'Interrogez du YAML avec JSONPath ou JMESPath dans votre navigateur. Sans conversion manuelle et sans envoi de données.',
	'tool.yaml-query.operation': 'Interroger',
	'tool.yaml-query.faq.0.question': 'Quels langages de requête sont pris en charge ?',
	'tool.yaml-query.faq.0.answer':
		'Vous pouvez basculer entre JSONPath et JMESPath. Les deux s’exécutent sur le modèle de données YAML analysé, ce qui permet d’interroger directement des mappages imbriqués, des séquences et des entrées multi-documents.',
	'tool.yaml-query.faq.1.question': 'Faut-il convertir le YAML en JSON avant ?',
	'tool.yaml-query.faq.1.answer':
		'Non. L’outil analyse le YAML pour vous et renvoie des résultats formatés en JSON. C’est pratique pour les configs, manifests, fichiers values et autres flux centrés sur YAML.',
	'tool.yaml-query.use_case.0':
		'Extraire des champs précis depuis des manifests Kubernetes ou Helm values',
	'tool.yaml-query.use_case.1':
		'Inspecter des configurations YAML imbriquées sans conversion manuelle',
	'tool.yaml-query.use_case.2': 'Tester des expressions JSONPath ou JMESPath sur des payloads YAML',
	'tool.yaml-query.use_case.3':
		'Récupérer des listes, ids ou indicateurs depuis de gros documents YAML',

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
	'tool.csv-to-json.faq.0.question': 'Puis-je traiter la première ligne comme des en-têtes ?',
	'tool.csv-to-json.faq.0.answer':
		'Oui. Les contrôles CSV permettent de conserver la première ligne comme en-têtes ou de traiter toutes les lignes comme de simples colonnes.',
	'tool.csv-to-json.faq.1.question': 'Les nombres et booléens sont-ils détectés automatiquement ?',
	'tool.csv-to-json.faq.1.answer':
		'Oui. Les valeurs ressemblant à des nombres ou à des booléens sont interprétées automatiquement pendant la conversion.',
	'tool.csv-to-json.use_case.0':
		'Transformer des exports tableur en payloads JSON prêts pour une API',
	'tool.csv-to-json.use_case.1': 'Inspecter des lignes CSV comme objets structurés',
	'tool.csv-to-json.use_case.2':
		'Normaliser des données délimitées en JSON utilisable dans le navigateur',
	'tool.csv-to-json.use_case.3': 'Préparer des jeux CSV pour des flux basés sur JSON',

	'tool.csv-to-xml.display_name': 'CSV vers XML',
	'tool.csv-to-xml.tagline': 'Convertir des données CSV au format XML',
	'tool.csv-to-xml.description':
		"Convertir des fichiers CSV en XML bien formé. Mappe les en-têtes de colonne aux noms d'éléments et génère des éléments de ligne pour chaque enregistrement.",
	'tool.csv-to-xml.primary_keyword': 'csv vers xml',
	'tool.csv-to-xml.meta_title': 'Convertisseur CSV vers XML — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		"Convertir CSV en XML instantanément dans votre navigateur. Mappe les en-têtes aux noms d'éléments. Pas d'envoi de données.",
	'tool.csv-to-xml.operation': 'Convertir',
	'tool.csv-to-xml.faq.0.question': 'Comment les noms d’éléments XML sont-ils choisis ?',
	'tool.csv-to-xml.faq.0.answer':
		'Lorsque le mode en-têtes est activé, chaque en-tête CSV devient un élément enfant XML à l’intérieur d’un nœud de ligne.',
	'tool.csv-to-xml.use_case.0':
		'Transformer des exports tabulaires en fixtures XML pour des systèmes hérités',
	'tool.csv-to-xml.use_case.1':
		'Vérifier comment les en-têtes CSV se mappent sur des enregistrements XML par ligne',

	'tool.csv-to-yaml.display_name': 'CSV vers YAML',
	'tool.csv-to-yaml.tagline': 'Convertir des données CSV au format YAML',
	'tool.csv-to-yaml.description':
		"Convertir des fichiers CSV en tableaux d'objets YAML. Mappe les en-têtes de colonne aux clés YAML pour chaque ligne.",
	'tool.csv-to-yaml.primary_keyword': 'csv vers yaml',
	'tool.csv-to-yaml.meta_title': 'Convertisseur CSV vers YAML — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		"Convertir CSV en YAML instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.csv-to-yaml.operation': 'Convertir',
	'tool.csv-to-yaml.faq.0.question': 'Que représente chaque élément YAML ?',
	'tool.csv-to-yaml.faq.0.answer':
		'Chaque ligne CSV devient un objet YAML, et les en-têtes deviennent les clés lorsque le mode en-têtes est actif.',
	'tool.csv-to-yaml.use_case.0': 'Transformer des données tabulaires en listes YAML lisibles',
	'tool.csv-to-yaml.use_case.1':
		'Faire passer des réglages pilotés par tableur vers des workflows YAML',

	'tool.csv-to-html.display_name': 'CSV vers Tableau HTML',
	'tool.csv-to-html.tagline': 'Convertir des données CSV en un tableau HTML',
	'tool.csv-to-html.description':
		'Convertir des fichiers CSV en tableaux HTML formatés. Utilise la première ligne comme en-têtes de colonne.',
	'tool.csv-to-html.primary_keyword': 'csv vers tableau html',
	'tool.csv-to-html.meta_title': 'Convertisseur CSV vers Tableau HTML — fmtly.dev',
	'tool.csv-to-html.meta_description':
		"Convertir CSV en tableau HTML instantanément dans votre navigateur. Pas d'envoi de données.",
	'tool.csv-to-html.operation': 'Convertir',
	'tool.csv-to-html.faq.0.question': 'Puis-je prévisualiser le tableau avant de copier le HTML ?',
	'tool.csv-to-html.faq.0.answer':
		'Oui. Le panneau de sortie propose à la fois un aperçu rendu et la vue HTML brute.',
	'tool.csv-to-html.use_case.0':
		'Générer des tableaux HTML pour de la doc, des outils internes ou des extraits CMS',
	'tool.csv-to-html.use_case.1':
		'Vérifier visuellement la structure du tableau avant intégration du balisage',

	'tool.csv-formatter.display_name': 'Formatteur CSV',
	'tool.csv-formatter.tagline': 'Formater et normaliser les données CSV',
	'tool.csv-formatter.description':
		'Nettoyer et formater les données CSV avec des délimiteurs, des guillemets et des fins de ligne cohérents. Valide la structure CSV et normalise les espaces.',
	'tool.csv-formatter.primary_keyword': 'formatteur csv',
	'tool.csv-formatter.meta_title': 'Formatteur CSV — fmtly.dev',
	'tool.csv-formatter.meta_description':
		"Formater et nettoyer les données CSV dans votre navigateur. Pas d'envoi de données.",
	'tool.csv-formatter.operation': 'Formater',
	'tool.csv-formatter.faq.0.question': 'Que puis-je normaliser pendant le formatage ?',
	'tool.csv-formatter.faq.0.answer':
		'Vous pouvez changer le délimiteur, rogner les espaces des cellules, conserver la ligne d’en-tête, ignorer les lignes vides et forcer les guillemets sur chaque cellule.',
	'tool.csv-formatter.use_case.0': 'Standardiser des CSV avant import en base ou dans un outil BI',
	'tool.csv-formatter.use_case.1':
		'Nettoyer des exports tableur incohérents sans envoyer les données à un serveur',

	'tool.csv-validator.display_name': 'Validateur CSV',
	'tool.csv-validator.tagline': 'Valider la structure et la syntaxe CSV',
	'tool.csv-validator.description':
		"Valider les fichiers CSV pour un nombre de colonnes cohérent, un guillemet approprié et des problèmes d'encodage. Identifie les lignes mal formées avec numéros de ligne précis.",
	'tool.csv-validator.primary_keyword': 'validateur csv',
	'tool.csv-validator.meta_title': 'Validateur CSV — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Valider le CSV dans votre navigateur. Détecte les erreurs de structure avec numéros de ligne. Aucune donnée ne quitte votre appareil.',
	'tool.csv-validator.operation': 'Valider',
	'tool.csv-validator.faq.0.question': 'Quels problèmes le validateur détecte-t-il ?',
	'tool.csv-validator.faq.0.answer':
		'Il signale les erreurs du parseur, les en-têtes vides ou dupliqués, ainsi que les lignes dont le nombre de colonnes ne correspond pas au reste du fichier.',
	'tool.csv-validator.use_case.0': 'Détecter un CSV mal formé avant import ou conversion',
	'tool.csv-validator.use_case.1':
		'Vérifier la cohérence des en-têtes et de la largeur des lignes sur des jeux partagés',

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
	'tool.toml-validator.display_name': 'Validateur TOML',
	'tool.toml-validator.tagline': 'Valider la syntaxe TOML avant de formater ou convertir',
	'tool.toml-validator.description':
		'Validez des fichiers de configuration TOML localement dans votre navigateur. Détectez les erreurs de syntaxe avant d’enregistrer, convertir ou comparer.',
	'tool.toml-validator.primary_keyword': 'validateur toml',
	'tool.toml-validator.meta_title': 'Validateur TOML — fmtly.dev',
	'tool.toml-validator.meta_description':
		'Validez le TOML dans votre navigateur et repérez les erreurs de syntaxe avant de formater ou convertir.',
	'tool.toml-validator.operation': 'Valider',
	'tool.toml-to-json.display_name': 'TOML vers JSON',
	'tool.toml-to-json.tagline': 'Convertir des documents TOML en JSON',
	'tool.toml-to-json.description':
		'Convertissez des données de configuration TOML en JSON formaté dans votre navigateur. Préservez les tables imbriquées, les tableaux et les scalaires sans téléversement.',
	'tool.toml-to-json.primary_keyword': 'toml vers json',
	'tool.toml-to-json.meta_title': 'Convertisseur TOML vers JSON — fmtly.dev',
	'tool.toml-to-json.meta_description':
		'Convertissez le TOML en JSON formaté instantanément dans votre navigateur. Aucune donnée ne quitte votre appareil.',
	'tool.toml-to-json.operation': 'Convertir',
	'tool.toml-to-yaml.display_name': 'TOML vers YAML',
	'tool.toml-to-yaml.tagline': 'Convertir des documents TOML en YAML',
	'tool.toml-to-yaml.description':
		'Convertissez des données de configuration TOML en YAML lisible dans votre navigateur. Préservez les tables imbriquées, les tableaux et les valeurs scalaires principales.',
	'tool.toml-to-yaml.primary_keyword': 'toml vers yaml',
	'tool.toml-to-yaml.meta_title': 'Convertisseur TOML vers YAML — fmtly.dev',
	'tool.toml-to-yaml.meta_description':
		'Convertissez le TOML en YAML instantanément dans votre navigateur. Aucun téléversement requis.',
	'tool.toml-to-yaml.operation': 'Convertir',
	'tool.toml-diff.display_name': 'Diff TOML',
	'tool.toml-diff.tagline': 'Comparer deux documents TOML côte à côte',
	'tool.toml-diff.description':
		'Comparez deux documents TOML et mettez en évidence les clés ajoutées, supprimées et modifiées. Examinez les changements de configuration directement dans le navigateur.',
	'tool.toml-diff.primary_keyword': 'diff toml',
	'tool.toml-diff.meta_title': 'Outil de Diff TOML — fmtly.dev',
	'tool.toml-diff.meta_description':
		'Comparez deux documents TOML dans votre navigateur et surlignez chaque changement.',
	'tool.toml-diff.operation': 'Comparer',
	'tool.toml-formatter.faq.0.question': 'Le formatage change-t-il les valeurs TOML ?',
	'tool.toml-formatter.faq.0.answer':
		'Non. Il réécrit un TOML valide dans une mise en forme normalisée sans modifier les valeurs ni la structure de données analysée.',
	'tool.toml-formatter.faq.1.question': 'Quand utiliser le formateur plutôt que le validateur ?',
	'tool.toml-formatter.faq.1.answer':
		'Utilisez le validateur si vous voulez seulement vérifier la syntaxe. Utilisez le formateur quand le TOML est déjà valide et que vous voulez une sortie plus propre et cohérente.',
	'tool.toml-formatter.use_case.0': 'Uniformiser pyproject.toml avant un commit',
	'tool.toml-formatter.use_case.1':
		'Nettoyer des extraits de configuration copiés depuis une documentation',
	'tool.toml-formatter.use_case.2': 'Rendre de longues sections TOML plus lisibles',
	'tool.toml-formatter.use_case.3': 'Préparer du TOML avant comparaison ou conversion',
	'tool.toml-validator.faq.0.question': 'Quels problèmes TOML le validateur détecte-t-il ?',
	'tool.toml-validator.faq.0.answer':
		'Il détecte les erreurs d’analyse comme les chaînes mal formées, les syntaxes de tables invalides, les tableaux cassés et d’autres erreurs de syntaxe TOML.',
	'tool.toml-validator.faq.1.question': 'Le validateur TOML prend-il en charge les schémas ?',
	'tool.toml-validator.faq.1.answer':
		'Non. Il valide uniquement la syntaxe TOML. Il sert à confirmer qu’un document peut être analysé proprement avant formatage, conversion ou comparaison.',
	'tool.toml-validator.use_case.0': 'Vérifier pyproject.toml avant de lancer des outils de build',
	'tool.toml-validator.use_case.1':
		'Détecter des erreurs de syntaxe dans des configurations applicatives',
	'tool.toml-validator.use_case.2': 'Vérifier du TOML copié depuis une documentation de package',
	'tool.toml-validator.use_case.3': 'Confirmer des changements de configuration avant comparaison',
	'tool.toml-to-json.faq.0.question':
		'Les tables imbriquées et les tableaux sont-ils conservés en JSON ?',
	'tool.toml-to-json.faq.0.answer':
		'Oui. Les objets TOML analysés sont convertis en objets et tableaux JSON équivalents, ce qui conserve la structure globale.',
	'tool.toml-to-json.faq.1.question': 'Quand est-il utile de convertir du TOML en JSON ?',
	'tool.toml-to-json.faq.1.answer':
		'C’est utile lorsqu’un outil, une API, un script ou un fixture de test attend du JSON au lieu du TOML, tout en réutilisant les mêmes données de configuration.',
	'tool.toml-to-json.use_case.0':
		'Transformer une configuration TOML en JSON pour des outils JavaScript',
	'tool.toml-to-json.use_case.1':
		'Inspecter du TOML sous une structure plus stricte et lisible par machine',
	'tool.toml-to-json.use_case.2': 'Réutiliser des réglages TOML dans des fixtures ou tests API',
	'tool.toml-to-json.use_case.3': 'Faire le pont entre des systèmes de configuration TOML et JSON',
	'tool.toml-to-yaml.faq.0.question': 'Pourquoi convertir du TOML en YAML ?',
	'tool.toml-to-yaml.faq.0.answer':
		'Le YAML est souvent plus rapide à parcourir dans les workflows d’infrastructure et d’automatisation. La conversion aide lorsqu’une équipe ou un outil préfère la syntaxe YAML.',
	'tool.toml-to-yaml.faq.1.question': 'La structure TOML est-elle conservée dans la sortie YAML ?',
	'tool.toml-to-yaml.faq.1.answer':
		'Oui. Les tables, objets imbriqués, tableaux et valeurs scalaires sont transposés dans leurs équivalents YAML.',
	'tool.toml-to-yaml.use_case.0':
		'Réécrire une configuration TOML en YAML pour des workflows de déploiement',
	'tool.toml-to-yaml.use_case.1': 'Partager des réglages TOML avec des équipes orientées YAML',
	'tool.toml-to-yaml.use_case.2': 'Comparer la même configuration en TOML et en YAML',
	'tool.toml-to-yaml.use_case.3':
		'Migrer une configuration entre des écosystèmes aux formats préférés différents',
	'tool.toml-diff.faq.0.question': 'TOML Diff est-il un diff texte ou structurel ?',
	'tool.toml-diff.faq.0.answer':
		'Il est structurel. Les deux entrées sont d’abord analysées comme TOML, puis comparées par clés, tableaux et valeurs.',
	'tool.toml-diff.faq.1.question': 'Puis-je comparer des documents TOML invalides ?',
	'tool.toml-diff.faq.1.answer':
		'Non. Les deux côtés doivent être du TOML valide. Si l’un des deux échoue à l’analyse, l’outil indique quel côté est invalide.',
	'tool.toml-diff.use_case.0': 'Examiner des changements de configuration entre deux versions',
	'tool.toml-diff.use_case.1': 'Comparer des réglages TOML selon les environnements',
	'tool.toml-diff.use_case.2': 'Comparer du TOML généré à une version attendue',
	'tool.toml-diff.use_case.3':
		'Inspecter des changements de pyproject.toml ou de toolchain avant commit',

	'tool.toml-minifier.display_name': 'Minifieur TOML',
	'tool.toml-minifier.tagline': 'Minifier et compresser les fichiers de configuration TOML',
	'tool.toml-minifier.description':
		'Supprimez les espaces et commentaires inutiles des fichiers TOML pour réduire la taille du fichier. Minifiez les configurations TOML localement dans votre navigateur.',
	'tool.toml-minifier.primary_keyword': 'minifieur toml',
	'tool.toml-minifier.meta_title': 'Minifieur TOML — fmtly.dev',
	'tool.toml-minifier.meta_description':
		'Minifiez et compressez les fichiers TOML dans votre navigateur. Supprimez les espaces et commentaires en toute sécurité. Aucune donnée ne quitte votre appareil.',
	'tool.toml-minifier.operation': 'Minifier',
	'tool.toml-minifier.faq.0.question': 'Que fait le minifieur TOML ?',
	'tool.toml-minifier.faq.0.answer':
		'Il analyse votre fichier TOML et le réécrit avec la quantité minimale d’espaces requise. Les commentaires sont également supprimés pour réduire la taille globale du fichier.',
	'tool.toml-minifier.faq.1.question': 'Est-il sûr de minifier des fichiers TOML ?',
	'tool.toml-minifier.faq.1.answer':
		'Oui. Le minifieur garantit que la signification structurelle des données TOML reste exactement la même. Seuls le formatage et les commentaires sont supprimés.',
	'tool.toml-minifier.use_case.0': 'Compresser de grandes configurations TOML pour le déploiement',
	'tool.toml-minifier.use_case.1':
		'Supprimer les commentaires avant de partager des fichiers de configuration',
	'tool.toml-minifier.use_case.2':
		'Préparer des fichiers TOML pour des systèmes embarqués ou un stockage limité',
	'tool.toml-minifier.use_case.3': 'Normaliser les fichiers TOML dans un format compact',

	'tool.toml-to-xml.display_name': 'TOML vers XML',
	'tool.toml-to-xml.tagline': 'Convertir des fichiers de configuration TOML au format XML',
	'tool.toml-to-xml.description':
		'Convertissez des structures de données TOML en documents XML directement dans votre navigateur. Préserve les tables imbriquées et les tableaux dans les hiérarchies de nœuds XML.',
	'tool.toml-to-xml.primary_keyword': 'toml vers xml',
	'tool.toml-to-xml.meta_title': 'Convertisseur TOML vers XML — fmtly.dev',
	'tool.toml-to-xml.meta_description':
		'Convertissez des configurations TOML en XML instantanément dans votre navigateur. Aucun fichier téléchargé.',
	'tool.toml-to-xml.operation': 'Convertir',
	'tool.toml-to-xml.faq.0.question': 'Comment les tableaux TOML sont-ils convertis en XML ?',
	'tool.toml-to-xml.faq.0.answer':
		'XML ne prend pas en charge nativement les tableaux sans nom, donc les tableaux sont généralement représentés en répétant le nom du nœud ou en enveloppant les éléments dans des balises de liste standard selon l’analyseur.',
	'tool.toml-to-xml.faq.1.question': 'Puis-je le convertir à nouveau en TOML plus tard ?',
	'tool.toml-to-xml.faq.1.answer':
		'Oui, vous pouvez utiliser notre convertisseur XML vers TOML, bien que certaines informations de type (comme les chaînes explicites vs les nombres) puissent être interprétées différemment par l’analyseur XML au retour.',
	'tool.toml-to-xml.use_case.0':
		'Adapter des configurations TOML modernes pour des systèmes XML hérités',
	'tool.toml-to-xml.use_case.1':
		'Intégrer des applications basées sur TOML avec des API SOAP d’entreprise',
	'tool.toml-to-xml.use_case.2':
		'Convertir des données pyproject.toml en fichiers de construction Maven ou Ant',
	'tool.toml-to-xml.use_case.3':
		'Extraire la logique de configuration dans des ensembles de données XML génériques',

	'tool.toml-to-html.display_name': 'TOML vers HTML',
	'tool.toml-to-html.tagline': 'Convertir une configuration TOML en un tableau HTML réactif',
	'tool.toml-to-html.description':
		'Transformez des fichiers de configuration TOML en tableaux HTML propres et lisibles. Parfait pour la documentation, les rapports et le partage des états de configuration.',
	'tool.toml-to-html.primary_keyword': 'toml vers html',
	'tool.toml-to-html.meta_title': 'Convertisseur TOML vers Tableau HTML — fmtly.dev',
	'tool.toml-to-html.meta_description':
		'Convertissez instantanément du TOML en tableaux HTML dans votre navigateur. Crée des tableaux réactifs à partir de données TOML imbriquées.',
	'tool.toml-to-html.operation': 'Convertir',
	'tool.toml-to-html.faq.0.question': 'Comment gère-t-il les tables TOML imbriquées ?',
	'tool.toml-to-html.faq.0.answer':
		'Les tables imbriquées et les tableaux sont rendus récursivement sous forme de tableaux HTML internes, garantissant que la structure exacte des données est maintenue visuellement.',
	'tool.toml-to-html.faq.1.question':
		'Puis-je copier la sortie directement dans ma documentation ?',
	'tool.toml-to-html.faq.1.answer':
		'Oui, la sortie est du code HTML standard qui peut être copié et collé directement dans des fichiers Markdown, Notion, Confluence ou toute page web standard.',
	'tool.toml-to-html.use_case.0':
		'Générer des rapports visuels à partir de fichiers de configuration TOML',
	'tool.toml-to-html.use_case.1':
		'Coller les paramètres d’application dans la documentation du projet',
	'tool.toml-to-html.use_case.2':
		'Afficher des variables spécifiques à un environnement sur des tableaux de bord internes',
	'tool.toml-to-html.use_case.3':
		'Examiner des structures TOML imbriquées complexes dans un format accessible',

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
	'ui.diff.summary.empty': 'Saisissez du {language} dans les deux panneaux pour comparer',
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
	'ui.diff.toast.format_error': 'Impossible de formater — {language} invalide',
	'ui.diff.error.invalid_left': '{language} invalide dans l’entrée de gauche (Original)',
	'ui.diff.error.invalid_right': '{language} invalide dans l’entrée de droite (Modifié)',
	'ui.diff.toast.patch_success': 'JSON Patch copié dans le presse-papiers',
	'ui.diff.toast.copy_value': 'Valeur copiée',
	'ui.diff.toast.share_copied': 'Lien de partage copié',
	'ui.diff.meta.chars': 'caract.',
	'ui.diff.empty.hint': 'Collez du {language} dans les deux panneaux ci-dessus pour les comparer.',
	'ui.diff.report.title': 'Rapport de diff {language}',
	'ui.diff.empty.load_sample': "Charger des données d'exemple",
	'ui.layout.placeholders.modified': 'Modifié',
	'ui.layout.aria.input_panel': "Panneau d'entrée",
	'ui.layout.aria.output_panel': 'Panneau de sortie',
	'ui.layout.aria.copy_output': 'Copier la sortie',
	'ui.layout.aria.download_output': 'Télécharger la sortie',
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
	'ui.placeholder.original_yaml': 'Coller le YAML original ici…',
	'ui.placeholder.modified_yaml': 'Coller le YAML modifié ici…',
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
	'ui.validator.row': 'Ligne',
	'ui.validator.warning': 'avertissement',
	'ui.validator.warnings': 'avertissements',
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
	'ui.load_sample': 'Charger un exemple',
	'ui.share_url': 'URL de Partage',
	'ui.format_xml': 'Formater XML',
	'ui.format_yaml': 'Formater YAML',
	'ui.minify_xml': 'Minifier XML',
	'ui.format_beautify': 'Formater / Embellir',
	'ui.minify': 'Minifier',
	'ui.repair_json': 'Réparer JSON',
	'ui.expand_all': 'Tout développer',
	'ui.collapse_all': 'Tout réduire',
	'ui.expand_to_depth': 'Développer à la profondeur {depth}',
	switch_to_tab: "Passer à l'onglet {index}",
	switch_to_xml_tab: "Passer à l'onglet XML {index}",
	switch_to_yaml_tab: "Passer à l'onglet YAML {index}",
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
	'ui.aria.yaml_output_panel': 'Panneau de sortie YAML',
	'ui.aria.yaml_validator': 'Validateur YAML',
	'ui.aria.csv_validator': 'Validateur CSV',
	'ui.csv.controls.delimiter': 'Délimiteur',
	'ui.csv.controls.header_row': 'Ligne d’en-tête',
	'ui.csv.controls.skip_empty_lines': 'Ignorer les lignes vides',
	'ui.csv.controls.trim_cells': 'Rogner les cellules',
	'ui.csv.controls.quote_all': 'Mettre chaque cellule entre guillemets',
	'ui.csv.delimiter.comma': 'Virgule (,)',
	'ui.csv.delimiter.semicolon': 'Point-virgule (;)',
	'ui.csv.delimiter.tab': 'Tabulation',
	'ui.csv.delimiter.pipe': 'Barre verticale (|)',
	'ui.csv.view.preview': 'Aperçu',
	'ui.csv.view.raw': 'Brut',
	'ui.csv.stats.rows': 'lignes',
	'ui.csv.stats.columns': 'colonnes',
	'ui.csv.preview.column_name': 'Colonne {index}',
	'ui.csv.preview.no_rows': 'Aucune ligne de données à prévisualiser',
	'ui.csv.preview.delimiter': 'délimiteur',
	'ui.csv.preview.header_mode': 'en-tête',
	'ui.csv.preview.no_header': 'Colonnes générées',
	'ui.csv.preview.remaining_rows': 'L’aperçu affiche seulement {count} lignes supplémentaires',
	'ui.csv.empty.title': 'Collez du CSV pour commencer',
	'ui.csv.empty.desc':
		'Formatez, validez, prévisualisez ou convertissez des données CSV entièrement dans votre navigateur.',
	'ui.csv.empty.waiting_title': 'En attente de sortie CSV',
	'ui.csv.empty.waiting_desc':
		'Les lignes analysées, la sortie formatée ou les résultats convertis apparaîtront ici.',
	'ui.validator.invalid_yaml': 'YAML invalide',
	'ui.validator.invalid_csv': 'CSV invalide',
	'ui.validator.csv_paste_hint': 'Collez ou saisissez du CSV pour le valider.',
	'ui.validator.csv_validation_desc':
		'Valide la structure des délimiteurs, la cohérence des lignes et les guillemets mal formés dans les entrées CSV.',
	'ui.validator.csv_error.header_empty': 'La colonne d’en-tête {column} est vide',
	'ui.validator.csv_error.duplicate_header': 'Un en-tête dupliqué "{value}" a été trouvé',
	'ui.validator.csv_error.row_width':
		'La ligne {row} contient {actual} colonnes au lieu de {expected}',
	'ui.validator.csv_success_title': 'CSV valide',
	'ui.validator.csv_success_desc':
		'Aucune erreur structurelle CSV n’a été détectée. Le document peut être analysé correctement.',
	'ui.validator.csv_paste_schema': 'Collez un schéma à valider',
	'ui.validator.csv_paste_schema_data': 'Collez du CSV à valider',
	'ui.validator.csv_validating_schema': 'Validation du schéma…',
	'ui.validator.csv_matches_schema': 'Le CSV correspond au schéma',
	'ui.validator.csv_matches_current_schema': 'Les lignes CSV correspondent au schéma actuel.',
	'ui.validator.csv_schema_title': 'Schéma',
	'ui.validator.csv_schema_standard': 'JSON Schema Draft-07+ via AJV',
	'ui.validator.csv_paste_schema_placeholder': 'Collez ici un JSON Schema ou un schéma YAML…',
	'ui.validator.csv_schema_validation_desc':
		'Valide les lignes CSV par rapport à un schéma exécuté dans le navigateur. Chaque ligne analysée est validée comme objet avec les options CSV actuelles.',
	'ui.validator.yaml_paste_hint': 'Collez ou saisissez du YAML à valider.',
	'ui.validator.yaml_validation_desc':
		'Valide la syntaxe YAML, l’indentation, les caractères invalides et les structures mal formées.',
	'ui.validator.yaml_success_title': 'YAML valide',
	'ui.validator.yaml_success_desc':
		'Aucune erreur de syntaxe détectée. Le document peut être analysé correctement comme YAML.',
	'ui.validator.yaml_warning_title': 'YAML valide avec avertissements de style',
	'ui.validator.yaml_warning_desc':
		'Le document est analysé correctement, mais quelques problèmes de style peuvent nuire à la lisibilité ou à la cohérence.',
	'ui.validator.yaml_lint.tabs':
		'Des tabulations ont été trouvées dans l’indentation. Le YAML est généralement plus sûr avec des espaces uniquement.',
	'ui.validator.yaml_lint.trailing_whitespace': 'Des espaces de fin de ligne ont été trouvés.',
	'ui.validator.yaml_lint.odd_indentation':
		'Une largeur d’indentation impaire a été trouvée. Le YAML est généralement plus cohérent avec une indentation de 2 espaces.',
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
	'ui.query.stats.chars': 'caract.',
	'ui.query.stats.lines': 'lignes',
	'ui.query.result': 'résultat',
	'ui.query.results': 'résultats',
	'ui.query.history': 'Historique',
	'ui.query.sample_query': 'Exemple de requête',
	'ui.query.guide': 'Guide',
	'ui.query.query': 'Requête',
	'ui.query.mode': 'Mode de requête',
	'ui.query.running': 'Requête en cours…',
	'ui.query.empty_input': 'Collez du JSON à gauche pour évaluer votre requête.',
	'ui.query.empty_input_yaml': 'Collez du YAML à gauche pour évaluer votre requête.',
	'ui.query.empty_query': 'Entrez une requête pour voir les résultats.',
	'ui.query.error_fallback': 'Échec de la requête',
	'ui.query.copy_error': 'Impossible de copier la sortie',
	'ui.aria.json_query_panel': 'Panneau de requête JSON',
	'ui.aria.yaml_query_panel': 'Panneau de requête YAML',
	'ui.status.processing': 'Traitement…',
	'ui.status.waiting_output': 'La sortie apparaîtra ici',
	'ui.output.controls.spaces': 'espaces',
	'ui.output.stats.chars': 'caract.',
	'ui.output.stats.lines': 'lignes',
	'ui.output.stats.documents': 'documents',
	'ui.output.stats.top_level_keys': 'clés racine',
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
	'ui.command_palette.title': 'Palette de commandes',
	'ui.command_palette.placeholder': 'Recherchez des outils, catégories et formats…',
	'ui.command_palette.recent': 'Récents',
	'ui.command_palette.no_results': 'Aucun outil correspondant trouvé',
	'ui.command_palette.hint_navigate': 'Naviguer',
	'ui.command_palette.hint_open': 'Ouvrir',
	'ui.command_palette.hint_close': 'Fermer',
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

	'tool.xml-to-csv.faq.2.question':
		'Quels types de XML fonctionnent le mieux pour la conversion CSV ?',
	'tool.xml-to-csv.faq.2.answer':
		"Les XML avec des éléments répétés (comme plusieurs balises <row> ou <item>) fonctionnent le mieux. Le convertisseur détecte automatiquement les noms d'éléments et les attributs comme en-têtes de colonnes.",

	'tool.xml-xpath.faq.2.question': 'Quelle version XPath est supportée ?',
	'tool.xml-xpath.faq.2.answer':
		"Cet outil supporte XPath 1.0, qui est la version la plus largement implémentée. Il inclut tous les axes, fonctions et opérateurs standard pour l'interrogation XML.",

	'tool.xml-xpath.faq.3.question': 'Puis-je tester XPath sur du XML invalide ?',
	'tool.xml-xpath.faq.3.answer':
		"Non. XPath nécessite du XML bien formé. Si votre XML contient des erreurs de syntaxe, corrigez-les d'abord en utilisant le Validateur ou le Formateur XML avant d'exécuter des requêtes XPath.",

	'tool.xml-minifier.faq.2.question': 'La minification affecte-t-elle la fonctionnalité XML ?',
	'tool.xml-minifier.faq.2.answer':
		'Non. La minification XML supprime uniquement les espaces blancs et les commentaires sans changer la structure ou les données. Le XML minifié reste entièrement valide et fonctionnellement identique.',

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
	'tool.xml-xpath.use_case.3': 'Valider la structure et le contenu XML de manière programmatique',
	'tool.csv-to-sql.display_name': 'CSV → SQL',
	'tool.csv-to-sql.tagline': 'Convertir des données CSV en instructions SQL INSERT',
	'tool.csv-to-sql.description':
		'Convertissez des lignes CSV en instructions SQL INSERT avec inférence de type pour les nombres et les booléens. Nom de table et taille de lot configurables.',
	'tool.csv-to-sql.primary_keyword': 'csv to sql',
	'tool.csv-to-sql.meta_title': 'Convertisseur CSV vers SQL — fmtly.dev',
	'tool.csv-to-sql.meta_description':
		'Générez des instructions SQL INSERT à partir de données CSV dans votre navigateur. Aucune donnée téléchargée.',
	'tool.csv-to-sql.operation': 'Vers SQL',
	'tool.csv-to-sql.faq.0.question': "Comment fonctionne l'inférence de type ?",
	'tool.csv-to-sql.faq.0.answer':
		'Le convertisseur détecte automatiquement les nombres et les valeurs booléennes (true/false). Tout le reste est échappé de manière sécurisée en tant que littéraux de chaîne utilisant des guillemets simples.',
	'tool.csv-to-sql.use_case.0':
		'Générer des seeds SQL à partir de données de tableur pour les migrations de bases de données',
	'tool.csv-to-sql.use_case.1':
		'Importer rapidement des données CSV dans des bases de données SQL sans écrire de scripts personnalisés',
	'tool.json-schema-generator.display_name': 'Générateur de schéma JSON',
	'tool.json-schema-generator.tagline': "Inférer un schéma JSON à partir d'exemples JSON",
	'tool.json-schema-generator.description':
		'Générez un schéma JSON Draft 2020-12 à partir de n’importe quel document JSON. Détecte automatiquement les structures imbriquées, les tableaux, les champs requis, les types et les candidats enum.',
	'tool.json-schema-generator.primary_keyword': 'générateur schéma json',
	'tool.json-schema-generator.meta_title': 'Générateur de schéma JSON — fmtly.dev',
	'tool.json-schema-generator.meta_description':
		'Inférez un schéma JSON depuis du JSON dans votre navigateur. Détecte types imbriqués, champs required et candidats enum sans envoi de données.',
	'tool.json-schema-generator.operation': 'Générer le schéma',
	'tool.json-schema-generator.faq.0.question': 'Comment les champs requis sont-ils détectés ?',
	'tool.json-schema-generator.faq.0.answer':
		'Pour les objets, les clés présentes dans toutes les entrées observées sont marquées comme required. Les clés manquantes restent optionnelles.',
	'tool.json-schema-generator.faq.1.question': 'Comment les enums sont-ils inférés ?',
	'tool.json-schema-generator.faq.1.answer':
		'Si un champ contient un petit ensemble de valeurs scalaires répétées, le générateur ajoute un enum pour représenter ces catégories.',
	'tool.json-schema-generator.faq.2.question': 'Quelle version de JSON Schema est générée ?',
	'tool.json-schema-generator.faq.2.answer':
		'La sortie inclut l’URI $schema Draft 2020-12 et utilise les mots-clés standards comme type, properties, required, anyOf et items.',
	'tool.json-schema-generator.use_case.0': 'Ébaucher des contrats API à partir de payloads réels',
	'tool.json-schema-generator.use_case.1':
		'Créer des schémas de validation pour fixtures et jeux de test',
	'tool.json-schema-generator.use_case.2':
		'Documenter rapidement des formats JSON imbriqués pour des intégrations',
	'tool.json-schema-generator.use_case.3':
		'Produire un schéma de base avant affinage manuel des contraintes',
	'tool.json-schema-validate.display_name': 'Validateur de schéma JSON',
	'tool.json-schema-validate.tagline': 'Valider un JSON contre un schéma fourni',
	'tool.json-schema-validate.description':
		'Validez des payloads JSON contre JSON Schema Draft-07 ou Draft 2020-12. Les erreurs sont annotées par chemin avec correspondance ligne/colonne.',
	'tool.json-schema-validate.primary_keyword': 'validateur schema json',
	'tool.json-schema-validate.meta_title': 'Validateur de schéma JSON — fmtly.dev',
	'tool.json-schema-validate.meta_description':
		'Validez du JSON contre JSON Schema Draft-07 et 2020-12 dans votre navigateur. Annotations d’erreurs par chemin, ligne et colonne.',
	'tool.json-schema-validate.operation': 'Valider le schéma',
	'tool.json-schema-validate.faq.0.question': 'Quels drafts de schéma sont pris en charge ?',
	'tool.json-schema-validate.faq.0.answer':
		'Le validateur prend en charge JSON Schema Draft-07 et Draft 2020-12. Le draft est détecté automatiquement via la URI $schema.',
	'tool.json-schema-validate.faq.1.question':
		'Comment les erreurs de validation sont-elles reliées au JSON d’entrée ?',
	'tool.json-schema-validate.faq.1.answer':
		'Chaque erreur inclut un chemin JSON Pointer et est mappée à la ligne et colonne correspondantes dans le JSON d’entrée.',
	'tool.json-schema-validate.faq.2.question': 'Que se passe-t-il si le schéma est invalide ?',
	'tool.json-schema-validate.faq.2.answer':
		'Si le schéma ne peut pas être parsé ou compilé, l’outil affiche séparément les erreurs de schéma et les erreurs de validation des données.',
	'tool.json-schema-validate.use_case.0':
		'Valider les payloads API entrants et sortants contre des schémas de contrat',
	'tool.json-schema-validate.use_case.1':
		'Déboguer des payloads webhook en échec avec un feedback par chemin',
	'tool.json-schema-validate.use_case.2':
		'Contrôler fixtures et mocks avec des contraintes de schéma strictes',
	'tool.json-schema-validate.use_case.3': 'Vérifier une migration de Draft-07 vers Draft 2020-12',
	'tool.text-word-character-counter.display_name': 'Compteur de Mots et Caractères',
	'tool.text-word-character-counter.tagline':
		'Comptez mots, caractères et temps de lecture instantanément',
	'tool.text-word-character-counter.description':
		'Comptez les mots, caractères, phrases, paragraphes et le temps de lecture estimé pour n’importe quel texte. Rapide, privé et entièrement dans le navigateur.',
	'tool.text-word-character-counter.primary_keyword': 'compteur mots caractères',
	'tool.text-word-character-counter.meta_title': 'Compteur de Mots et Caractères — fmtly.dev',
	'tool.text-word-character-counter.meta_description':
		'Compteur gratuit de mots et caractères avec métriques de phrases, paragraphes et temps de lecture. Fonctionne entièrement dans votre navigateur.',
	'tool.text-word-character-counter.operation': 'Compter le texte',
	'tool.text-word-character-counter.faq.0.question': 'Comment les mots sont-ils comptés ?',
	'tool.text-word-character-counter.faq.0.answer':
		'Les mots sont comptés à partir de groupes de lettres et de chiffres, y compris les apostrophes et traits d’union courants.',
	'tool.text-word-character-counter.faq.1.question': 'Comment le temps de lecture est-il estimé ?',
	'tool.text-word-character-counter.faq.1.answer':
		'Le temps de lecture est estimé à environ 200 mots par minute puis arrondi à la minute supérieure.',
	'tool.text-word-character-counter.faq.2.question': 'Mon texte quitte-t-il mon appareil ?',
	'tool.text-word-character-counter.faq.2.answer':
		'Non. Tout le comptage et l’analyse se font localement dans votre navigateur, sans envoi au serveur.',
	'tool.text-word-character-counter.use_case.0':
		'Vérifier la longueur d’articles et de documentations avant publication',
	'tool.text-word-character-counter.use_case.1':
		'Optimiser les textes UI et prompts selon des limites de caractères',
	'tool.text-word-character-counter.use_case.2':
		'Estimer le temps de lecture de billets, docs et notes de version',
	'tool.text-word-character-counter.use_case.3':
		'Comparer des brouillons avec des métriques objectives de longueur',
	'tool.text-lorem-ipsum-generator.display_name': 'Générateur Lorem Ipsum',
	'tool.text-lorem-ipsum-generator.tagline':
		'Générez du texte de remplissage par paragraphes, phrases ou mots avec contrôle de seed',
	'tool.text-lorem-ipsum-generator.description':
		'Générez du Lorem Ipsum déterministe pour maquettes, aperçus UI et tests de contenu. Contrôlez le nombre de paragraphes/phrases/mots, la seed et la sortie en texte brut ou HTML, directement dans le navigateur.',
	'tool.text-lorem-ipsum-generator.primary_keyword': 'generateur lorem ipsum',
	'tool.text-lorem-ipsum-generator.meta_title': 'Générateur Lorem Ipsum — fmtly.dev',
	'tool.text-lorem-ipsum-generator.meta_description':
		'Générateur Lorem Ipsum gratuit avec modes paragraphe, phrase et mot, sortie seedée et export texte brut/HTML. Rapide, privé et 100% navigateur.',
	'tool.text-lorem-ipsum-generator.operation': 'Générer du Lorem Ipsum',
	'tool.text-lorem-ipsum-generator.faq.0.question':
		'Puis-je obtenir exactement le même texte avec les mêmes réglages ?',
	'tool.text-lorem-ipsum-generator.faq.0.answer':
		'Oui. Conservez la même seed et les mêmes options pour reproduire exactement la même sortie.',
	'tool.text-lorem-ipsum-generator.faq.1.question':
		'Puis-je générer des paragraphes HTML au lieu du texte brut ?',
	'tool.text-lorem-ipsum-generator.faq.1.answer':
		'Oui. Choisissez le format HTML pour obtenir un balisage prêt à l’usage dans vos prototypes.',
	'tool.text-lorem-ipsum-generator.faq.2.question': 'Le texte est-il généré localement ?',
	'tool.text-lorem-ipsum-generator.faq.2.answer':
		'Oui. La génération s’exécute entièrement dans votre navigateur, sans envoi au serveur.',
	'tool.text-lorem-ipsum-generator.use_case.0':
		'Remplir wireframes et maquettes UI avec un texte de remplacement réaliste',
	'tool.text-lorem-ipsum-generator.use_case.1':
		'Tester typographie, espacements et débordements dans des layouts responsives',
	'tool.text-lorem-ipsum-generator.use_case.2':
		'Créer des fixtures seedées reproductibles pour snapshots et tests visuels frontend',
	'tool.text-lorem-ipsum-generator.use_case.3':
		'Produire du contenu de remplissage en texte brut ou HTML pour des démos CMS',
	'tool.text-markdown-to-html.display_name': 'Markdown vers HTML',
	'tool.text-markdown-to-html.tagline':
		'Convertissez Markdown en HTML prêt pour la production avec aperçu en direct',
	'tool.text-markdown-to-html.description':
		'Convertissez Markdown en HTML propre avec aperçu en direct, tableaux GFM, coloration syntaxique des blocs de code et contrôles de sécurité pour liens/images. Tout s’exécute localement dans votre navigateur.',
	'tool.text-markdown-to-html.primary_keyword': 'convertisseur markdown vers html',
	'tool.text-markdown-to-html.meta_title':
		'Convertisseur Markdown vers HTML — Aperçu en direct | fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Convertissez Markdown en HTML avec aperçu en direct, support des tableaux GFM et blocs de code colorés. Rapide, privé et 100% navigateur.',
	'tool.text-markdown-to-html.operation': 'Convertir Markdown',
	'tool.text-markdown-to-html.faq.0.question':
		'Ce convertisseur prend-il en charge les tableaux GitHub Flavored Markdown (GFM) ?',
	'tool.text-markdown-to-html.faq.0.answer':
		'Oui. La syntaxe de tableaux GFM est prise en charge et peut être activée ou désactivée dans le panneau d’options.',
	'tool.text-markdown-to-html.faq.1.question':
		'Les blocs de code fenced sont-ils surlignés automatiquement ?',
	'tool.text-markdown-to-html.faq.1.answer':
		'Oui. L’outil surligne les blocs de code fenced et conserve les classes de langue dans le HTML généré.',
	'tool.text-markdown-to-html.faq.2.question':
		'Comment les liens non sûrs ou le HTML brut sont-ils gérés ?',
	'tool.text-markdown-to-html.faq.2.answer':
		'Les protocoles de liens/images non sûrs sont supprimés. Le HTML brut est échappé par défaut et peut être autorisé via les options avancées.',
	'tool.text-markdown-to-html.use_case.0':
		'Préparer du contenu README et documentation pour des générateurs de sites statiques',
	'tool.text-markdown-to-html.use_case.1':
		'Prévisualiser la sortie Markdown avant publication de release notes ou changelogs',
	'tool.text-markdown-to-html.use_case.2':
		'Générer des extraits HTML assainis pour éditeurs CMS et bases de connaissances',
	'tool.text-markdown-to-html.use_case.3':
		'Convertir des tutoriels techniques avec code en HTML intégrable',
	'tool.text-string-case-converter.display_name': 'Convertisseur de Casse',
	'tool.text-string-case-converter.tagline':
		'Convertissez du texte entre camelCase, PascalCase, snake_case, kebab-case et plus',
	'tool.text-string-case-converter.description':
		'Convertissez instantanément du texte entre camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case et casse de phrase. Rapide, privé et entièrement dans le navigateur.',
	'tool.text-string-case-converter.primary_keyword': 'convertisseur de casse',
	'tool.text-string-case-converter.meta_title': 'Convertisseur de Casse — fmtly.dev',
	'tool.text-string-case-converter.meta_description':
		'Convertisseur de casse gratuit pour camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case et casse de phrase.',
	'tool.text-string-case-converter.operation': 'Convertir la Casse',
	'tool.text-string-case-converter.faq.0.question': 'Quels styles de nommage sont pris en charge ?',
	'tool.text-string-case-converter.faq.0.answer':
		'L’outil prend en charge camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case et la casse de phrase dans une seule vue.',
	'tool.text-string-case-converter.faq.1.question':
		'Peut-il traiter des entrées mixtes avec camelCase, underscores et tirets ?',
	'tool.text-string-case-converter.faq.1.answer':
		'Oui. Les délimiteurs mixtes et la casse existante sont d’abord découpés en tokens, puis convertis de façon cohérente dans chaque style cible.',
	'tool.text-string-case-converter.faq.2.question':
		'La conversion se fait-elle localement sur mon appareil ?',
	'tool.text-string-case-converter.faq.2.answer':
		'Oui. Toute la conversion s’exécute dans votre navigateur sans envoi du texte au serveur.',
	'tool.text-string-case-converter.use_case.0':
		'Normaliser les champs API et les clés de configuration entre plusieurs conventions',
	'tool.text-string-case-converter.use_case.1':
		'Convertir rapidement des libellés UI en noms de variables prêts pour le code',
	'tool.text-string-case-converter.use_case.2':
		'Standardiser les conventions de nommage entre documentation, schémas et exemples de payload',
	'tool.text-string-case-converter.use_case.3':
		'Préparer des identifiants cohérents pour TypeScript, Python, SQL et scripts shell',
	'tool.text-text-reverser.display_name': 'Inverseur de Texte',
	'tool.text-text-reverser.tagline': 'Inversez du texte par caractères, mots ou lignes en un clic',
	'tool.text-text-reverser.description':
		'Inversez instantanément du texte par caractères, mots ou lignes. Idéal pour des transformations rapides de chaînes, le debug de flux textuels et des expérimentations de contenu dans le navigateur.',
	'tool.text-text-reverser.primary_keyword': 'inverseur de texte',
	'tool.text-text-reverser.meta_title': 'Inverseur de Texte — fmtly.dev',
	'tool.text-text-reverser.meta_description':
		'Inverseur de texte gratuit qui retourne le texte par caractères, mots ou lignes instantanément. Rapide, privé et entièrement dans le navigateur.',
	'tool.text-text-reverser.operation': 'Inverser le Texte',
	'tool.text-text-reverser.faq.0.question': 'Quels modes d’inversion sont disponibles ?',
	'tool.text-text-reverser.faq.0.answer':
		'Vous pouvez inverser par caractères, par mots ou par lignes complètes. Chaque mode est affiché dans une sortie distincte.',
	'tool.text-text-reverser.faq.1.question':
		'Le mode par mots conserve-t-il les espaces et tabulations ?',
	'tool.text-text-reverser.faq.1.answer':
		'Oui. Le mode par mots conserve la structure des espaces tout en inversant l’ordre des tokens.',
	'tool.text-text-reverser.faq.2.question': 'Mon texte reste-t-il sur mon appareil ?',
	'tool.text-text-reverser.faq.2.answer':
		'Oui. L’inversion s’exécute localement dans votre navigateur sans envoi au serveur.',
	'tool.text-text-reverser.use_case.0':
		'Générer des chaînes miroir pour tester parseurs et tokenizers',
	'tool.text-text-reverser.use_case.1':
		'Réordonner rapidement des notes multilignes en inversant les lignes',
	'tool.text-text-reverser.use_case.2':
		'Valider la logique de découpage des mots avec une sortie qui préserve les espaces',
	'tool.text-text-reverser.use_case.3':
		'Créer des variantes de texte transformées et amusantes pour les expérimentations éditoriales',
	'tool.text-duplicate-line-remover.display_name': 'Suppresseur de Lignes en Double',
	'tool.text-duplicate-line-remover.tagline':
		"Supprime les lignes en double en préservant l'ordre de première occurrence",
	'tool.text-duplicate-line-remover.description':
		'Supprime les lignes en double du texte tout en préservant la première occurrence de chaque ligne. Idéal pour nettoyer les journaux, dédupliquer les listes et préparer des jeux de données uniques dans votre navigateur.',
	'tool.text-duplicate-line-remover.primary_keyword': 'suppresseur de lignes en double',
	'tool.text-duplicate-line-remover.meta_title': 'Suppresseur de Lignes en Double — fmtly.dev',
	'tool.text-duplicate-line-remover.meta_description':
		"Suppresseur gratuit de lignes en double qui supprime les lignes en double en préservant l'ordre de première occurrence. Rapide, privé et 100% dans votre navigateur.",
	'tool.text-duplicate-line-remover.operation': 'Supprimer les Doublons',
	'tool.text-duplicate-line-remover.faq.0.question':
		'Quelles lignes sont conservées comme doublons ?',
	'tool.text-duplicate-line-remover.faq.0.answer':
		'La première occurrence de chaque ligne est conservée ; les lignes identiques suivantes sont supprimées comme doublons.',
	'tool.text-duplicate-line-remover.faq.1.question':
		'Les lignes vides sont-elles traitées comme des doublons ?',
	'tool.text-duplicate-line-remover.faq.1.answer':
		'Oui. Les lignes vides sont des entrées uniques, donc plusieurs lignes vides seront dédupliquées en une seule ligne vide.',
	'tool.text-duplicate-line-remover.faq.2.question': 'Mon texte est-il traité localement ?',
	'tool.text-duplicate-line-remover.faq.2.answer':
		"Oui. Toute la déduplication s'exécute dans votre navigateur ; votre texte ne quitte jamais votre appareil.",
	'tool.text-duplicate-line-remover.use_case.0':
		"Nettoyer les journaux de serveur et les traces d'application en supprimant les entrées répétées",
	'tool.text-duplicate-line-remover.use_case.1':
		"Dédupliquer les listes d'URL, les listes d'e-mails ou les enregistrements d'inventaire avant importation",
	'tool.text-duplicate-line-remover.use_case.2':
		'Préparer des listes de mots uniques pour tester le vocabulaire ou les modèles de langue',
	'tool.text-duplicate-line-remover.use_case.3':
		"Consolider les valeurs de configuration ou les listes de variables d'environnement",
	'tool.text-line-sorter.display_name': 'Trieur de Lignes',
	'tool.text-line-sorter.tagline':
		'Triez les lignes par ordre alphabétique, numérique, longueur ou mélange avec seed',
	'tool.text-line-sorter.description':
		'Triez des lignes de texte instantanément avec des options avancées de casse, trim, déduplication, suppression des lignes vides et mélange déterministe par seed. Tout s’exécute localement dans votre navigateur.',
	'tool.text-line-sorter.primary_keyword': 'trieur de lignes',
	'tool.text-line-sorter.meta_title': 'Trieur de Lignes — Trier du texte vite | fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Triez des lignes en mode alphabétique, numérique, par longueur ou aléatoire. Déduplication et filtre des lignes vides inclus. Rapide, privé et 100% navigateur.',
	'tool.text-line-sorter.operation': 'Trier les lignes',
	'tool.text-line-sorter.faq.0.question': 'Quels modes de tri sont disponibles ?',
	'tool.text-line-sorter.faq.0.answer':
		'Les modes alphabétique, numérique, par longueur et mélange aléatoire déterministe sont disponibles. Vous pouvez aussi choisir l’ordre croissant ou décroissant.',
	'tool.text-line-sorter.faq.1.question':
		'Puis-je supprimer les lignes vides et les doublons avant le tri ?',
	'tool.text-line-sorter.faq.1.answer':
		'Oui. Activez la suppression des lignes vides et la déduplication pour normaliser le contenu avant tri, utile pour logs et listes.',
	'tool.text-line-sorter.faq.2.question': 'Reste-t-il fluide sur de gros volumes ?',
	'tool.text-line-sorter.faq.2.answer':
		'Oui. Au-delà de 500KB, le traitement passe dans un Web Worker pour garder une interface réactive tout en conservant vos données localement.',
	'tool.text-line-sorter.use_case.0':
		'Normaliser et trier des logs avant comparaison entre environnements',
	'tool.text-line-sorter.use_case.1':
		'Préparer des listes propres et triées de domaines, e-mails, IDs ou tags',
	'tool.text-line-sorter.use_case.2': 'Trier rapidement notes de version, changelogs ou checklists',
	'tool.text-line-sorter.use_case.3':
		'Créer des jeux de données mélangés de façon déterministe pour la QA',
	'tool.text-diff-compare.display_name': 'Diff & Comparer',
	'tool.text-diff-compare.tagline': 'Comparer deux textes côte à côte',
	'tool.text-diff-compare.description':
		'Diff unifié ou côte à côte de deux entrées de texte brut avec mise en évidence des changements au niveau de la ligne et du mot.',
	'tool.text-diff-compare.primary_keyword': 'diff texte comparer',
	'tool.text-diff-compare.meta_title':
		'Outil de Diff et Comparaison de Textes - Comparaison Côte à Côte',
	'tool.text-diff-compare.meta_description':
		'Comparez deux entrées de texte avec une vue diff côte à côte ou unifiée. Mettez en évidence les changements au niveau de la ligne et du mot.',
	'tool.text-diff-compare.operation': 'Comparer deux textes et montrer les différences',
	'tool.text-diff-compare.faq.0.question': 'Quels algorithmes de diff sont pris en charge ?',
	'tool.text-diff-compare.faq.0.answer':
		'Nous prenons en charge les algorithmes Myers, Patience et Histogram. Myers est celui par défaut et fonctionne bien pour la plupart des cas. Patience est meilleur pour les changements structurés, Histogram est plus rapide pour les grands fichiers.',
	'tool.text-diff-compare.faq.1.question':
		'Puis-je ignorer les espaces ou les différences de casse ?',
	'tool.text-diff-compare.faq.1.answer':
		"Oui, vous pouvez configurer le diff pour ignorer les changements d'espaces, les différences de casse et les lignes vides en utilisant le panneau d'options.",
	'tool.text-diff-compare.faq.2.question': 'Quels formats de sortie sont disponibles ?',
	'tool.text-diff-compare.faq.2.answer':
		"Vous pouvez afficher les diffs en mode côte à côte, format unifié ou inline avec l'éditeur Monaco. Le diff unifié peut être téléchargé comme un fichier .diff.",
	'tool.text-diff-compare.use_case.0': 'Comparer les versions de code avant de commiter',
	'tool.text-diff-compare.use_case.1': 'Réviser les changements et modifications de documents',
	'tool.text-diff-compare.use_case.2': 'Analyser les modifications de fichiers de configuration',
	'tool.text-diff-compare.use_case.3':
		'Suivre les changements dans les logs ou exportations de données',
	'tool.text-regex-tester.display_name': 'Testeur Regex',
	'tool.text-regex-tester.tagline':
		'Testez des expressions régulières avec surlignage en direct, groupes de capture et flags',
	'tool.text-regex-tester.description':
		'Testez des motifs regex JavaScript sur du texte réel avec surlignage en temps réel, contrôle complet des flags, inspection des groupes de capture et métriques détaillées des correspondances. Tout s’exécute localement dans votre navigateur.',
	'tool.text-regex-tester.primary_keyword': 'testeur regex',
	'tool.text-regex-tester.meta_title':
		'Testeur Regex — Surlignage en direct & groupes de capture | fmtly.dev',
	'tool.text-regex-tester.meta_description':
		'Testez des expressions régulières en ligne avec surlignage en direct, groupes de capture et flags regex. Rapide, privé et 100% navigateur.',
	'tool.text-regex-tester.operation': 'Tester Regex',
	'tool.text-regex-tester.faq.0.question':
		'Cet outil prend-il en charge les flags JavaScript comme g, i, m, s, u, y et d ?',
	'tool.text-regex-tester.faq.0.answer':
		'Oui. Vous pouvez activer ou désactiver chaque flag pris en charge et voir immédiatement son impact sur les correspondances.',
	'tool.text-regex-tester.faq.1.question':
		'Puis-je inspecter les groupes de capture numérotés et nommés pour chaque correspondance ?',
	'tool.text-regex-tester.faq.1.answer':
		'Oui. Chaque correspondance affiche les groupes numérotés et nommés, avec leurs valeurs et positions quand disponibles.',
	'tool.text-regex-tester.faq.2.question':
		'Le motif et le texte de test sont-ils envoyés vers un serveur ?',
	'tool.text-regex-tester.faq.2.answer':
		'Non. Le matching regex s’exécute localement dans votre navigateur, sans upload de données.',
	'tool.text-regex-tester.use_case.0':
		'Valider des motifs de parsing de logs avant mise en production',
	'tool.text-regex-tester.use_case.1':
		'Tester des règles de validation de formulaires avec du texte réel et des cas limites',
	'tool.text-regex-tester.use_case.2':
		'Prototyper des règles de recherche et d’extraction pour scripts, ETL et automatisation',
	'tool.text-regex-tester.use_case.3':
		'Apprendre et enseigner les bases des regex avec un feedback visuel instantané',
	'tool.text-escape-unescape.display_name': 'Échappement / Déséchappement de Texte',
	'tool.text-escape-unescape.tagline':
		'Échapper ou déséchapper du texte pour JSON, HTML, XML, URL, SQL et regex',
	'tool.text-escape-unescape.description':
		'Convertissez des chaînes entre forme échappée et texte lisible pour JSON, entités HTML, entités XML, encodage URL, littéraux SQL et motifs regex. Les grandes entrées sont traitées via Web Worker.',
	'tool.text-escape-unescape.primary_keyword': 'echappement desechappement texte',
	'tool.text-escape-unescape.meta_title':
		'Échappement/Déséchappement Texte — JSON, HTML, URL, SQL | fmtly.dev',
	'tool.text-escape-unescape.meta_description':
		'Échappez et déséchappez du texte instantanément pour JSON, HTML, XML, URL, SQL et regex. Traitement 100% navigateur, rapide sur gros volumes, sans upload.',
	'tool.text-escape-unescape.operation': 'Échapper / Déséchapper le texte',
	'tool.text-escape-unescape.faq.0.question':
		'Quels formats sont pris en charge pour l’échappement et le déséchappement ?',
	'tool.text-escape-unescape.faq.0.answer':
		'Vous pouvez traiter les chaînes JSON, les entités HTML et XML, l’encodage URL, les littéraux SQL et les caractères spéciaux regex dans les deux sens.',
	'tool.text-escape-unescape.faq.1.question':
		'Quelle différence avec un simple encodeur URL ou HTML ?',
	'tool.text-escape-unescape.faq.1.answer':
		'L’outil réunit plusieurs standards d’échappement dans un seul espace, permet de basculer immédiatement le sens de conversion et propose des options dédiées comme le + URL ou l’encadrement SQL.',
	'tool.text-escape-unescape.faq.2.question':
		'Les performances et la confidentialité restent-elles garanties pour de gros textes ?',
	'tool.text-escape-unescape.faq.2.answer':
		'Oui. Tout s’exécute localement dans votre navigateur. Au-delà de 500KB, un Web Worker prend le relais pour garder une interface fluide.',
	'tool.text-escape-unescape.use_case.0':
		'Préparer des entrées utilisateur en toute sécurité pour payloads JSON, query strings et SQL',
	'tool.text-escape-unescape.use_case.1':
		'Reconvertir des logs ou extraits API échappés en texte lisible',
	'tool.text-escape-unescape.use_case.2':
		'Construire et déboguer des motifs regex en gérant correctement les métacaractères',
	'tool.text-escape-unescape.use_case.3':
		'Normaliser du contenu échappé hétérogène sans quitter le navigateur',
	'ui.text_escape.format_label': 'Format',
	'ui.text_escape.action_label': 'Action',
	'ui.text_escape.action.escape': 'Échapper',
	'ui.text_escape.action.unescape': 'Déséchapper',
	'ui.text_escape.format.json': 'Chaîne JSON',
	'ui.text_escape.format.html': 'Entités HTML',
	'ui.text_escape.format.xml': 'Entités XML',
	'ui.text_escape.format.url': 'Composant URL',
	'ui.text_escape.format.sql': 'Chaîne SQL',
	'ui.text_escape.format.regex': 'Motif regex',
	'ui.text_escape.input_label': 'Entrée',
	'ui.text_escape.output_label': 'Sortie',
	'ui.text_escape.input_placeholder': 'Saisissez ou collez le texte à traiter...',
	'ui.text_escape.output_placeholder': 'La sortie échappée ou déséchappée apparaît ici...',
	'ui.text_escape.option.url_encode_plus': 'Encoder les espaces en +',
	'ui.text_escape.option.url_decode_plus': 'Décoder + comme espace',
	'ui.text_escape.option.sql_wrap_quotes': 'Entourer de quotes simples',
	'ui.text_escape.button.swap_action': 'Inverser l’action',
	'ui.text_escape.worker_active':
		'Grande entrée détectée (>{size}). Le traitement s’exécute dans un Web Worker.',
	'ui.text_escape.worker_failed': 'Échec du traitement Worker. Bascule sur le thread principal.',
	'ui.text_escape.warning.no_changes':
		'Aucun changement détecté pour le format et l’action sélectionnés.',
	'ui.text_escape.error.invalid_json_escape': 'Séquence d’échappement JSON invalide : {detail}',
	'ui.text_escape.error.invalid_url_encoding': 'Entrée URL encodée invalide : {detail}',
	'ui.text_escape.error.detail': 'Le traitement a échoué : {detail}',
	'ui.diff_compare.statistics': 'Statistiques de Comparaison',
	'ui.diff_compare.added_lines': 'Lignes ajoutées',
	'ui.diff_compare.removed_lines': 'Lignes supprimées',
	'ui.diff_compare.unchanged_lines': 'Lignes inchangées',
	'ui.diff_compare.total_lines': 'Total des lignes',
	'ui.diff_compare.similarity': 'Similarité',
	'ui.diff_compare.hunks': 'Hunks',
	'ui.diff_compare.side_by_side': 'Côte à Côte',
	'ui.diff_compare.unified': 'Unifié',
	'ui.diff_compare.inline': 'Inline',
	'ui.diff_compare.swap': 'Échanger',
	'ui.diff_compare.diff_options': 'Options de Diff',
	'ui.diff_compare.ignore_whitespace': 'Ignorer les espaces',
	'ui.diff_compare.ignore_case': 'Ignorer la casse',
	'ui.diff_compare.ignore_empty_lines': 'Ignorer les lignes vides',
	'ui.diff_compare.show_inline': 'Montrer les changements inline',
	'ui.diff_compare.context_lines': 'Lignes de contexte',
	'ui.diff_compare.algorithm': 'Algorithme',
	'ui.diff_compare.original': 'Original',
	'ui.diff_compare.modified': 'Modifié',
	'ui.diff_compare.placeholder_left': 'Collez le texte original ici...',
	'ui.diff_compare.placeholder_right': 'Collez le texte modifié ici...',
	'ui.diff_compare.unified_diff': 'Diff Unifié',
	'ui.diff_compare.add_content': 'Ajoutez du contenu des deux côtés pour voir le diff',
	'ui.diff_compare.no_content': 'Aucun contenu à comparer',
	'ui.diff_compare.swapped': 'Entrées échangées',
	'ui.toast.download_success': 'Téléchargé avec succès',
	'tool.text-whitespace-cleaner.display_name': "Nettoyeur d'Espaces",
	'tool.text-whitespace-cleaner.tagline':
		'Rogner les espaces finaux, fusionner les espaces multiples, normaliser les fins de ligne',
	'tool.text-whitespace-cleaner.description':
		'Nettoyez le formatage du texte en supprimant les espaces finaux, en fusionnant plusieurs espaces/tabulations en espaces uniques et en normalisant les fins de ligne. Parfait pour préparer le code, les journaux et le contenu pour le contrôle de version ou le traitement.',
	'tool.text-whitespace-cleaner.primary_keyword': "nettoyeur d'espaces",
	'tool.text-whitespace-cleaner.meta_title': "Nettoyeur d'Espaces — fmtly.dev",
	'tool.text-whitespace-cleaner.meta_description':
		"Nettoyeur d'espaces gratuit qui supprime les espaces finaux, fusionne les espaces multiples et normalise les fins de ligne. Rapide, privé et 100% dans votre navigateur.",
	'tool.text-whitespace-cleaner.operation': 'Nettoyer les Espaces',
	'tool.text-whitespace-cleaner.faq.0.question': "Quels caractères d'espace sont supprimés ?",
	'tool.text-whitespace-cleaner.faq.0.answer':
		'Les espaces et tabulations finaux à la fin des lignes sont supprimés. Plusieurs espaces/tabulations dans le texte sont fusionnés en espaces uniques. Les fins de ligne sont normalisées en LF (\\n).',
	'tool.text-whitespace-cleaner.faq.1.question': 'Les espaces de début sont-ils conservés ?',
	'tool.text-whitespace-cleaner.faq.1.answer':
		"Oui. Seuls les espaces finaux sont supprimés. L'indentation de début et les espaces dans les lignes sont conservés, sauf que plusieurs espaces/tabulations sont fusionnés en espaces uniques.",
	'tool.text-whitespace-cleaner.faq.2.question':
		'Comment les fins de ligne sont-elles normalisées ?',
	'tool.text-whitespace-cleaner.faq.2.answer':
		'Les fins de ligne Windows (CRLF) et Mac anciennes (CR) sont converties en style Unix LF (\\n). Plusieurs lignes vides consécutives sont fusionnées en sauts de ligne doubles.',
	'tool.text-whitespace-cleaner.use_case.0':
		'Nettoyer le code avant de valider en contrôle de version pour supprimer les espaces finaux',
	'tool.text-whitespace-cleaner.use_case.1':
		'Normaliser le texte copié de différentes sources avec un espacement incohérent',
	'tool.text-whitespace-cleaner.use_case.2':
		'Préparer les journaux et fichiers de données pour un traitement et une analyse cohérents',
	'tool.text-whitespace-cleaner.use_case.3':
		'Formater le contenu des éditeurs de texte riche en texte brut avec un espacement cohérent',
	'ui.text_counter.words': 'Mots',
	'ui.text_counter.characters': 'Caractères',
	'ui.text_counter.characters_no_spaces': 'Caractères (sans espaces)',
	'ui.text_counter.sentences': 'Phrases',
	'ui.text_counter.paragraphs': 'Paragraphes',
	'ui.text_counter.reading_time': 'Temps de lecture',
	'ui.text_counter.minutes': 'min',
	'ui.text_counter.lines': 'lignes',
	'ui.text_counter.placeholder': 'Saisissez ou collez votre texte ici...',
	'ui.lorem.mode': 'Mode',
	'ui.lorem.mode.paragraphs': 'Paragraphes',
	'ui.lorem.mode.sentences': 'Phrases',
	'ui.lorem.mode.words': 'Mots',
	'ui.lorem.count': 'Quantité',
	'ui.lorem.seed': 'Seed',
	'ui.lorem.random_seed': 'Seed aléatoire',
	'ui.lorem.generate': 'Générer',
	'ui.lorem.include_classic_opening': 'Inclure l’ouverture classique',
	'ui.lorem.auto_generate': 'Générer automatiquement lors des changements',
	'ui.lorem.output_format': 'Format de sortie',
	'ui.lorem.output_format.plain': 'Texte brut',
	'ui.lorem.output_format.html': 'HTML',
	'ui.lorem.advanced_options': 'Options avancées',
	'ui.lorem.min_words_per_sentence': 'Min mots / phrase',
	'ui.lorem.max_words_per_sentence': 'Max mots / phrase',
	'ui.lorem.min_sentences_per_paragraph': 'Min phrases / paragraphe',
	'ui.lorem.max_sentences_per_paragraph': 'Max phrases / paragraphe',
	'ui.lorem.source': 'Source',
	'ui.lorem.preview': 'Aperçu',
	'ui.lorem.empty_output': 'La sortie générée apparaîtra ici...',
	'ui.lorem.generated': 'Lorem Ipsum généré',
	'ui.lorem.seed_randomized': 'Seed randomisée',
	'ui.lorem.no_output': 'Aucune sortie générée pour le moment',
	'ui.markdown_to_html.placeholder': 'Saisissez ou collez du Markdown ici...',
	'ui.markdown_to_html.option.gfm': 'Activer les tableaux GFM et listes de tâches',
	'ui.markdown_to_html.option.breaks': 'Convertir les retours à la ligne simples en <br>',
	'ui.markdown_to_html.option.highlight_code':
		'Appliquer la coloration syntaxique aux blocs de code fenced',
	'ui.markdown_to_html.option.open_links_in_new_tab': 'Ouvrir les liens dans un nouvel onglet',
	'ui.markdown_to_html.option.allow_raw_html': 'Autoriser les blocs HTML bruts (avancé)',
	'ui.markdown_to_html.view.preview': 'Aperçu',
	'ui.markdown_to_html.view.html': 'HTML',
	'ui.markdown_to_html.status.converting': 'Conversion Markdown en cours...',
	'ui.markdown_to_html.preview_aria': 'Aperçu en direct Markdown vers HTML',
	'ui.markdown_to_html.empty_preview':
		'L’aperçu en direct apparaîtra ici dès que vous saisirez du Markdown.',
	'ui.markdown_to_html.empty_html': 'La sortie HTML générée apparaîtra ici.',
	'ui.markdown_to_html.error.conversion_failed':
		'Échec de la conversion Markdown. Vérifiez votre contenu et réessayez.',
	'ui.markdown_to_html.toast.no_html_output': 'Aucune sortie HTML à télécharger',
	'ui.markdown_to_html.warning.unsafe_link_removed': 'Lien non sûr supprimé',
	'ui.markdown_to_html.warning.unsafe_image_removed': 'Image non sûre supprimée',
	'ui.markdown_to_html.warning.raw_html_escaped': 'HTML brut échappé pour des raisons de sécurité',
	'ui.markdown_to_html.stats.headings': 'Titres',
	'ui.markdown_to_html.stats.tables': 'Tableaux',
	'ui.markdown_to_html.stats.code_blocks': 'Blocs de code',
	'ui.markdown_to_html.stats.links': 'Liens',
	'ui.markdown_to_html.stats.images': 'Images',
	'ui.markdown_to_html.stats.words': 'Mots',
	'ui.text_case.tab_label': 'Casse',
	'ui.text_case.placeholder': 'Saisissez ou collez du texte pour convertir la casse...',
	'ui.text_case.camel_case': 'camelCase',
	'ui.text_case.pascal_case': 'PascalCase',
	'ui.text_case.snake_case': 'snake_case',
	'ui.text_case.kebab_case': 'kebab-case',
	'ui.text_case.constant_case': 'CONSTANT_CASE',
	'ui.text_case.title_case': 'Title Case',
	'ui.text_case.sentence_case': 'Casse de phrase',
	'ui.regex.pattern_label': 'Motif',
	'ui.regex.pattern_placeholder': 'ex. (?<name>\\w+)',
	'ui.regex.flags_label': 'Flags',
	'ui.regex.test_text_label': 'Texte de test',
	'ui.regex.test_text_placeholder': 'Saisissez ou collez du texte pour tester votre motif...',
	'ui.regex.copy_regex': 'Copier la regex',
	'ui.regex.global_hint':
		'Activez g pour itérer toutes les correspondances. Sans g, seule la première est renvoyée.',
	'ui.regex.stats.matches': 'Correspondances',
	'ui.regex.stats.unique_matches': 'Uniques',
	'ui.regex.stats.lines_with_matches': 'Lignes',
	'ui.regex.stats.coverage': 'Couverture',
	'ui.regex.stats.duration': 'Durée',
	'ui.regex.highlight_title': 'Surlignage en direct',
	'ui.regex.preview_truncated': 'Aperçu limité à {limit} caractères',
	'ui.regex.no_highlight': 'Les correspondances seront surlignées ici.',
	'ui.regex.matches_title': 'Correspondances',
	'ui.regex.match_limit_reached': 'Limite de correspondances atteinte',
	'ui.regex.no_matches': 'Aucune correspondance trouvée.',
	'ui.regex.match_label': 'Correspondance #{index}',
	'ui.regex.match_position': 'Ligne {line}, Colonne {column}',
	'ui.regex.match_range': 'Plage : {range}',
	'ui.regex.capture_groups': 'Groupes de capture',
	'ui.regex.no_capture_groups': 'Aucun groupe de capture',
	'ui.regex.named_capture_groups': 'Groupes nommés',
	'ui.regex.no_named_capture_groups': 'Aucun groupe nommé',
	'ui.regex.group_label': 'Groupe {index}',
	'ui.regex.group_unmatched': 'Aucune correspondance',
	'ui.regex.error.empty_pattern': 'Saisissez un motif regex pour commencer le test.',
	'ui.regex.error.invalid_flag': 'Flag regex invalide : {flag}',
	'ui.regex.error.duplicate_flag': 'Flag regex en double : {flag}',
	'ui.regex.error.unsupported_flag':
		'Ce flag regex n’est pas pris en charge dans cet environnement : {flag}',
	'ui.regex.error.syntax_error': 'Erreur de syntaxe du motif : {detail}',
	'ui.regex.flags.g.label': 'Global',
	'ui.regex.flags.g.description': 'Trouve toutes les correspondances, pas seulement la première',
	'ui.regex.flags.i.label': 'Ignore case',
	'ui.regex.flags.i.description': 'Ignore la casse dans les correspondances de lettres',
	'ui.regex.flags.m.label': 'Multiline',
	'ui.regex.flags.m.description': 'Fait fonctionner ^ et $ ligne par ligne',
	'ui.regex.flags.s.label': 'Dotall',
	'ui.regex.flags.s.description':
		'Permet au point (.) de correspondre aussi aux retours à la ligne',
	'ui.regex.flags.u.label': 'Unicode',
	'ui.regex.flags.u.description': 'Active le mode Unicode complet',
	'ui.regex.flags.y.label': 'Sticky',
	'ui.regex.flags.y.description':
		'Correspond strictement à partir de la position lastIndex courante',
	'ui.regex.flags.d.label': 'Indices',
	'ui.regex.flags.d.description':
		'Expose les indices début/fin des groupes lorsque c’est pris en charge',
	'tool.text-readability-analyzer.display_name': 'Analyseur de lisibilité',
	'tool.text-readability-analyzer.tagline':
		'Évaluez la facilité de lecture de votre texte avec des formules de lisibilité reconnues',
	'tool.text-readability-analyzer.description':
		'Analysez la lisibilité d’un texte avec Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau et SMOG. Obtenez instantanément des indicateurs de complexité et d’âge de lecture, directement dans votre navigateur.',
	'tool.text-readability-analyzer.primary_keyword': 'analyseur de lisibilité',
	'tool.text-readability-analyzer.meta_title':
		'Analyseur de lisibilité — scores Flesch, Fog, SMOG | fmtly.dev',
	'tool.text-readability-analyzer.meta_description':
		'Analyseur de lisibilité gratuit avec métriques Flesch, Flesch-Kincaid, Gunning Fog, Coleman-Liau et SMOG. Rapide, privé et 100% dans le navigateur.',
	'tool.text-readability-analyzer.operation': 'Analyser la lisibilité',
	'tool.text-readability-analyzer.faq.0.question': 'Quelles formules de lisibilité sont incluses ?',
	'tool.text-readability-analyzer.faq.0.answer':
		'L’outil inclut Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau et SMOG, ainsi que des métriques complémentaires de complexité du texte.',
	'tool.text-readability-analyzer.faq.1.question':
		'Pourquoi le score SMOG peut-il être indisponible sur les textes courts ?',
	'tool.text-readability-analyzer.faq.1.answer':
		'SMOG est statistiquement plus fiable à partir de 3 phrases minimum. En dessous, l’outil affiche un avertissement au lieu d’un score instable.',
	'tool.text-readability-analyzer.faq.2.question':
		'L’analyse de lisibilité est-elle locale ou côté serveur ?',
	'tool.text-readability-analyzer.faq.2.answer':
		'Tout est traité localement dans votre navigateur. Votre texte n’est envoyé à aucun serveur.',
	'tool.text-readability-analyzer.use_case.0':
		'Valider docs, parcours onboarding et articles d’aide avant publication',
	'tool.text-readability-analyzer.use_case.1':
		'Comparer plusieurs versions d’un brouillon et garder la plus claire',
	'tool.text-readability-analyzer.use_case.2':
		'Optimiser la microcopy produit et les messages in-app pour un public plus large',
	'tool.text-readability-analyzer.use_case.3':
		'Repérer les passages denses dans la documentation technique et les simplifier',
	'ui.readability.unavailable': '—',
	'ui.readability.input_label': 'Texte d’entrée',
	'ui.readability.input_placeholder': 'Collez ou saisissez du texte pour analyser sa lisibilité...',
	'ui.readability.output_title': 'Analyse de lisibilité',
	'ui.readability.processing': 'Analyse en cours...',
	'ui.readability.copy_report': 'Copier le rapport',
	'ui.readability.worker_active':
		'Entrée volumineuse détectée (>{size}). L’analyse s’exécute dans un Web Worker.',
	'ui.readability.worker_failed':
		'Échec du traitement Worker. Analyse relancée sur le thread principal.',
	'ui.readability.level_label': 'Lisibilité globale',
	'ui.readability.level.very_easy': 'Très facile',
	'ui.readability.level.easy': 'Facile',
	'ui.readability.level.fairly_easy': 'Plutôt facile',
	'ui.readability.level.standard': 'Standard',
	'ui.readability.level.fairly_difficult': 'Assez difficile',
	'ui.readability.level.difficult': 'Difficile',
	'ui.readability.level.very_difficult': 'Très difficile',
	'ui.readability.level_desc.very_easy': 'Adapté à un large public et à une lecture rapide.',
	'ui.readability.level_desc.easy': 'Langage clair avec une faible charge cognitive.',
	'ui.readability.level_desc.fairly_easy':
		'Très bon niveau pour docs produit, guides et contenus web généraux.',
	'ui.readability.level_desc.standard':
		'Lisibilité équilibrée pour lecteurs techniques et non techniques.',
	'ui.readability.level_desc.fairly_difficult':
		'Des passages sont denses : simplifiez les phrases longues.',
	'ui.readability.level_desc.difficult':
		'Demande une lecture attentive. Des phrases plus courtes et un vocabulaire simple aident.',
	'ui.readability.level_desc.very_difficult':
		'Texte très dense. Une réécriture est recommandée avant diffusion large.',
	'ui.readability.metric.words': 'Mots',
	'ui.readability.metric.sentences': 'Phrases',
	'ui.readability.metric.syllables': 'Syllabes',
	'ui.readability.metric.reading_age': 'Âge de lecture',
	'ui.readability.metric.reading_time': 'Temps de lecture',
	'ui.readability.metric.paragraphs': 'Paragraphes',
	'ui.readability.metric.complex_words': 'Mots complexes',
	'ui.readability.stat.avg_words_per_sentence': 'Moy. mots/phrase',
	'ui.readability.stat.avg_syllables_per_word': 'Moy. syllabes/mot',
	'ui.readability.stat.characters': 'Caractères',
	'ui.readability.stat.letters': 'Lettres',
	'ui.readability.scores_title': 'Formules de lisibilité',
	'ui.readability.score.flesch_ease': 'Flesch Reading Ease',
	'ui.readability.score.flesch_kincaid': 'Flesch-Kincaid Grade',
	'ui.readability.score.gunning_fog': 'Gunning Fog',
	'ui.readability.score.coleman_liau': 'Indice Coleman-Liau',
	'ui.readability.score.smog': 'SMOG',
	'ui.readability.score_desc.flesch_ease': 'Plus la valeur est élevée, plus le texte est facile.',
	'ui.readability.score_desc.flesch_kincaid':
		'Niveau scolaire estimé selon le système éducatif américain.',
	'ui.readability.score_desc.gunning_fog':
		'Complexité basée sur la longueur des phrases et la difficulté des mots.',
	'ui.readability.score_desc.coleman_liau':
		'Lisibilité calculée à partir de la densité de lettres et de phrases.',
	'ui.readability.score_desc.smog':
		'Estimation du niveau de lecture basée sur les mots polysyllabiques.',
	'ui.readability.warning.insufficient_sentences_for_smog':
		'SMOG nécessite au moins 3 phrases pour une estimation stable.',
	'ui.readability.report_title': 'Rapport de lisibilité',
	'ui.readability.report_level': 'Niveau',
	'ui.readability.report_reading_age': 'Âge de lecture estimé',
	'ui.text_reverser.tab_label': 'Inverser',
	'ui.text_reverser.placeholder': 'Saisissez ou collez du texte à inverser...',
	'ui.text_reverser.characters': 'Inverser par caractères',
	'ui.text_reverser.words': 'Inverser par mots',
	'ui.text_reverser.lines': 'Inverser par lignes',
	'ui.text_reverser.lines_count': 'lignes',
	'ui.duplicate_line_remover.tab_label': 'Dédoublonner',
	'ui.duplicate_line_remover.placeholder':
		'Tapez ou collez du texte pour supprimer les lignes en double...',
	'ui.duplicate_line_remover.unique_lines': 'Lignes uniques',
	'ui.duplicate_line_remover.duplicates_removed': 'Doublons supprimés',
	'ui.duplicate_line_remover.result': 'Résultat',
	'ui.line_sorter.tab_label': 'Trier',
	'ui.line_sorter.placeholder': 'Saisissez ou collez des lignes à trier...',
	'ui.line_sorter.mode_label': 'Mode de tri',
	'ui.line_sorter.mode.alphabetical': 'Alphabétique',
	'ui.line_sorter.mode.numeric': 'Numérique',
	'ui.line_sorter.mode.length': 'Par longueur',
	'ui.line_sorter.mode.random': 'Mélange aléatoire',
	'ui.line_sorter.direction_label': 'Sens',
	'ui.line_sorter.direction.asc': 'Croissant',
	'ui.line_sorter.direction.desc': 'Décroissant',
	'ui.line_sorter.option.case_sensitive': 'Tri sensible à la casse',
	'ui.line_sorter.option.trim_before_sort': 'Rogner chaque ligne avant tri',
	'ui.line_sorter.option.remove_empty_lines': 'Supprimer les lignes vides',
	'ui.line_sorter.option.deduplicate': 'Dédupliquer les lignes avant tri',
	'ui.line_sorter.shuffle_seed': 'Seed de mélange',
	'ui.line_sorter.generate_seed': 'Randomiser la seed',
	'ui.line_sorter.input_lines': 'Lignes en entrée',
	'ui.line_sorter.output_lines': 'Lignes en sortie',
	'ui.line_sorter.empty_lines_removed': 'Lignes vides supprimées',
	'ui.line_sorter.duplicates_removed': 'Doublons supprimés',
	'ui.line_sorter.lines_moved': 'Lignes déplacées',
	'ui.line_sorter.output': 'Sortie triée',
	'ui.line_sorter.apply_output': 'Appliquer à l’entrée',
	'ui.line_sorter.status.processing': 'Tri des lignes en cours...',
	'ui.line_sorter.status.worker': 'Mode grande entrée (Web Worker)',
	'ui.line_sorter.error.processing_failed':
		'Échec du tri. Ajustez les options ou le contenu puis réessayez.',
	'ui.line_sorter.toast.applied': 'La sortie triée a été appliquée à l’entrée',
	'ui.line_sorter.no_output': 'Aucune sortie triée à afficher pour le moment',
	'ui.whitespace_cleaner.tab_label': 'Espaces',
	'ui.whitespace_cleaner.placeholder': 'Tapez ou collez du texte pour nettoyer les espaces...',
	'ui.whitespace_cleaner.trailing_spaces': 'Espaces finaux',
	'ui.whitespace_cleaner.leading_spaces': 'Espaces de début',
	'ui.whitespace_cleaner.blanks_collapsed': 'Espaces fusionnés',
	'ui.whitespace_cleaner.tabs_converted': 'Tabulations converties',
	'ui.whitespace_cleaner.spaces_converted': 'Espaces convertis',
	'ui.whitespace_cleaner.lines_processed': 'Lignes traitées',
	'ui.whitespace_cleaner.line_endings_normalized': 'Fins de ligne normalisées',
	'ui.whitespace_cleaner.result': 'Résultat',
	'ui.whitespace_cleaner.options': 'Options de Nettoyage',
	'ui.whitespace_cleaner.remove_leading': 'Supprimer les espaces de début',
	'ui.whitespace_cleaner.remove_trailing': 'Supprimer les espaces finaux',
	'ui.whitespace_cleaner.collapse_spaces': 'Fusionner les espaces multiples',
	'ui.whitespace_cleaner.collapse_tabs': 'Fusionner les tabulations en espaces',
	'ui.whitespace_cleaner.convert_tabs_to_spaces': 'Convertir les tabulations en espaces',
	'ui.whitespace_cleaner.convert_spaces_to_tabs': 'Convertir les espaces en tabulations',
	'ui.whitespace_cleaner.trim_lines': 'Rogner chaque ligne',
	'ui.whitespace_cleaner.remove_all_spaces': 'Supprimer tous les espaces',
	'ui.whitespace_cleaner.remove_all_line_breaks': 'Supprimer tous les sauts de ligne',
	'ui.whitespace_cleaner.preserve_paragraph_breaks': 'Préserver les sauts de paragraphe',
	'ui.whitespace_cleaner.tab_size': 'Taille de tabulation',
	'ui.csv.controls.table_name': 'Nom de Table',
	'ui.csv.controls.batch_size': 'Taille de Lot'
};

export default registryFr;

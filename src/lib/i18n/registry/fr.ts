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
	'category.ai.display_name': 'IA',
	'category.ai.description':
		'Compter les tokens IA, estimer les coûts LLM et compresser les prompts pour GPT-4o, Claude, Llama, Gemini et Mistral sans téléverser de texte.',
	'category.ai.primary_keyword': 'outils ia',
	// ── Outils IA ───────────────────────────────────────────────────────────
	'tool.ai-token-counter.display_name': 'Compteur de Tokens LLM',
	'tool.ai-token-counter.tagline':
		'Compter les tokens et estimer le coût d’entrée des principaux LLM',
	'tool.ai-token-counter.description':
		'Collez des prompts, documents ou transcriptions pour compter précisément les tokens GPT-4o et estimer l’usage Claude, Llama 3, Gemini et Mistral avec coût et tokens par mot.',
	'tool.ai-token-counter.primary_keyword': 'compteur de tokens llm',
	'tool.ai-token-counter.meta_title': 'Compteur de Tokens LLM pour GPT-4o & Claude — fmtly.dev',
	'tool.ai-token-counter.meta_description':
		'Comptez les tokens GPT-4o et estimez Claude, Llama 3, Gemini et Mistral. Ratio tokens par mot et coût d’entrée dans le navigateur.',
	'tool.ai-token-counter.operation': 'Compter les tokens',
	'tool.ai-token-counter.faq.0.question': 'Le comptage est-il exact pour chaque modèle ?',
	'tool.ai-token-counter.faq.0.answer':
		'GPT-4o utilise un vrai tokenizer chargé à la demande. Claude, Llama 3, Gemini et Mistral utilisent des estimations calibrées côté navigateur, car leurs tokenizers de production exacts ne sont pas publiés pour un usage local identique.',
	'tool.ai-token-counter.faq.1.question': 'Mon prompt quitte-t-il le navigateur ?',
	'tool.ai-token-counter.faq.1.answer':
		'Non. Le texte est traité localement dans votre navigateur, et les grandes entrées passent dans un Web Worker pour garder l’interface réactive.',
	'tool.ai-token-counter.faq.2.question': 'Comment le coût est-il estimé ?',
	'tool.ai-token-counter.faq.2.answer':
		'Le coût utilise le profil du modèle sélectionné et le prix par million de tokens d’entrée. Il sert à la planification et à la comparaison, pas à la réconciliation de factures.',
	'tool.ai-token-counter.faq.3.question': 'Puis-je comparer la densité de tokens entre modèles ?',
	'tool.ai-token-counter.faq.3.answer':
		'Oui. Le tableau de comparaison affiche le nombre de tokens, le ratio tokens par mot et le coût d’entrée estimé pour chaque famille de modèles prise en charge.',
	'tool.ai-token-counter.use_case.0': 'Estimer la taille d’un prompt avant un appel API LLM',
	'tool.ai-token-counter.use_case.1':
		'Comparer le coût en tokens entre GPT-4o, Claude, Llama, Gemini et Mistral',
	'tool.ai-token-counter.use_case.2':
		'Vérifier si de longs documents tiennent dans une fenêtre de contexte',
	'tool.ai-token-counter.use_case.3':
		'Mesurer la densité tokens par mot des prompts, jeux de données et transcriptions',

	'tool.ai-token-optimizer.display_name': 'Optimiseur de Tokens de Prompt',
	'tool.ai-token-optimizer.tagline':
		'Raccourcir les prompts en préservant l’intention et les exigences de sortie',
	'tool.ai-token-optimizer.description':
		'Compressez les prompts IA en retirant le remplissage, normalisant les espaces, simplifiant Markdown et, au besoin, abrégeant les motifs courants tout en suivant les économies.',
	'tool.ai-token-optimizer.primary_keyword': 'optimiseur de tokens de prompt',
	'tool.ai-token-optimizer.meta_title': 'Optimiseur de Tokens — Raccourcir Prompts IA | fmtly.dev',
	'tool.ai-token-optimizer.meta_description':
		'Raccourcissez les prompts IA sans perdre le sens. Retirez le remplissage, compressez les espaces, comparez les tokens et estimez les économies.',
	'tool.ai-token-optimizer.operation': 'Optimiser le prompt',
	'tool.ai-token-optimizer.faq.0.question':
		'L’optimiseur réécrit-il mon prompt de manière créative ?',
	'tool.ai-token-optimizer.faq.0.answer':
		'Non. Il applique des réductions conservatrices et transparentes, comme retirer le remplissage, compresser les espaces et nettoyer Markdown, pour préserver l’intention.',
	'tool.ai-token-optimizer.faq.1.question': 'Puis-je contrôler ce qui est optimisé ?',
	'tool.ai-token-optimizer.faq.1.answer':
		'Oui. Vous pouvez activer séparément le retrait du remplissage, la compression des espaces, la simplification Markdown et les abréviations connues.',
	'tool.ai-token-optimizer.faq.2.question':
		'Comment les économies de tokens sont-elles calculées ?',
	'tool.ai-token-optimizer.faq.2.answer':
		'L’outil compte le prompt original et optimisé avec le profil sélectionné, puis indique les tokens économisés, le pourcentage et la baisse de coût estimée.',
	'tool.ai-token-optimizer.faq.3.question': 'Est-ce sûr pour les longs prompts ?',
	'tool.ai-token-optimizer.faq.3.answer':
		'Les prompts de plus de 500KB sont traités dans un Web Worker, l’interface reste réactive et tout le texte demeure local.',
	'tool.ai-token-optimizer.use_case.0': 'Réduire le coût API des prompts système répétés',
	'tool.ai-token-optimizer.use_case.1':
		'Faire tenir les prompts dans des contextes plus serrés sans changer l’intention',
	'tool.ai-token-optimizer.use_case.2':
		'Nettoyer les modèles de prompt avant de les partager en équipe',
	'tool.ai-token-optimizer.use_case.3':
		'Comparer les budgets tokens avant/après pendant le prompt engineering',
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
	'ui.json_flatten.tab_label': 'Aplatir',
	'ui.json_flatten.mode_label': 'Mode',
	'ui.json_flatten.mode.flatten': 'Aplatir',
	'ui.json_flatten.mode.unflatten': 'Désaplatir',
	'ui.json_flatten.separator': 'Séparateur',
	'ui.json_flatten.separator_placeholder': '.',
	'ui.json_flatten.error.generic':
		'Impossible de transformer le JSON avec les réglages d’aplatissement actuels.',
	'ui.json_flatten.error.empty_separator': 'Le séparateur ne peut pas être vide.',
	'ui.json_flatten.error.invalid_result':
		'La transformation a échoué car la sortie générée est invalide.',
	'ui.json_flatten.error.invalid_flat_object':
		'L’entrée de désaplatissement doit être un objet JSON avec des chemins à plat.',
	'ui.json_flatten.error.root_conflict':
		'La clé racine ne peut pas être utilisée avec d’autres chemins aplatis.',
	'ui.json_flatten.error.invalid_path': 'Un ou plusieurs chemins aplatis sont invalides.',
	'ui.json_flatten.error.invalid_escape':
		'Un chemin aplati contient une séquence d’échappement invalide.',
	'ui.json_flatten.error.invalid_array_index':
		'Les index de tableau dans les chemins aplatis doivent être des entiers positifs ou nuls.',
	'ui.json_flatten.error.path_conflict':
		'Les chemins aplatis entrent en conflit et ne peuvent pas être fusionnés en sécurité.',
	'ui.json_flatten.error.unsafe_key':
		'Le chemin contient une clé non sûre (__proto__, constructor ou prototype).',
	'ui.json_patch.tab_label': 'Patch',
	'ui.json_patch.mode_label': 'Mode',
	'ui.json_patch.mode.generate': 'Générer un patch',
	'ui.json_patch.mode.apply': 'Appliquer le patch',
	'ui.json_patch.target_label': 'JSON cible',
	'ui.json_patch.patch_label': 'JSON Patch (RFC 6902)',
	'ui.json_patch.target_placeholder': 'Collez ici le JSON cible…',
	'ui.json_patch.patch_placeholder': 'Collez ici le tableau JSON Patch…',
	'ui.json_patch.base_label': 'JSON de base',
	'ui.json_patch.base_hint':
		'Le panneau d’entrée contient le JSON de base. La sortie montre le patch généré.',
	'ui.json_patch.apply_hint':
		'Le panneau d’entrée contient le JSON de base. La sortie montre le résultat patché.',
	'ui.json_patch.result_label_generate': 'Patch généré',
	'ui.json_patch.result_label_apply': 'JSON patché',
	'ui.json_patch.empty_generate': 'Ajoutez un JSON cible pour générer un patch RFC 6902.',
	'ui.json_patch.empty_apply':
		'Ajoutez un tableau JSON Patch pour l’appliquer au document de base.',
	'ui.json_patch.error.generic': 'Impossible de traiter le JSON Patch avec les entrées actuelles.',
	'ui.json_patch.error.invalid_result': 'Échec du patch : la sortie générée est invalide.',
	'ui.json_patch.error.invalid_patch_array':
		'L’entrée patch doit être un tableau JSON d’opérations.',
	'ui.json_patch.error.invalid_operation': 'Le patch contient un objet opération invalide.',
	'ui.json_patch.error.unsupported_operation':
		'Le patch contient une opération non prise en charge.',
	'ui.json_patch.error.missing_from': 'Une opération patch requiert un chemin "from".',
	'ui.json_patch.error.missing_value': 'Une opération patch requiert un champ "value".',
	'ui.json_patch.error.invalid_pointer': 'Le patch contient un chemin JSON Pointer invalide.',
	'ui.json_patch.error.path_not_found': 'Le chemin patch est introuvable dans le document actuel.',
	'ui.json_patch.error.test_failed': 'L’opération test du patch a échoué pour le chemin indiqué.',
	'ui.json_patch.error.invalid_array_index': 'Le patch référence un index de tableau invalide.',

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
	'tool.json-to-go.display_name': 'JSON vers structs Go',
	'tool.json-to-go.tagline': 'Générez des structs Go propres à partir de JSON',
	'tool.json-to-go.description':
		'Convertissez n’importe quel payload JSON en définitions de structs Go idiomatiques avec inférence des types imbriqués, tags json et gestion des champs optionnels. Rapide, privé et 100% navigateur.',
	'tool.json-to-go.primary_keyword': 'json vers structs go',
	'tool.json-to-go.meta_title': 'Générateur JSON vers structs Go — fmtly.dev',
	'tool.json-to-go.meta_description':
		'Générez des définitions de structs Go depuis JSON directement dans votre navigateur. Inclut structs imbriqués, tags json et inférence des champs optionnels. Aucune donnée ne quitte votre appareil.',
	'tool.json-to-go.operation': 'Convertir',
	'tool.json-to-go.faq.0.question': 'Comment les types JSON sont-ils mappés vers Go ?',
	'tool.json-to-go.faq.0.answer':
		'Les chaînes deviennent string, les booléens bool, les entiers int64, les décimaux float64, les tableaux des slices, et les objets imbriqués des types struct générés.',
	'tool.json-to-go.faq.1.question': 'Les tags json et omitempty sont-ils ajoutés automatiquement ?',
	'tool.json-to-go.faq.1.answer':
		'Oui. Les champs incluent des tags json, et lorsqu’un champ semble optionnel ou nullable dans l’échantillon, la sortie peut utiliser omitempty et des types pointeur adaptés.',
	'tool.json-to-go.faq.2.question': 'Puis-je utiliser directement le résultat dans un projet Go ?',
	'tool.json-to-go.faq.2.answer':
		'Oui. La sortie est conçue pour être intégrée directement dans des codebases Go, notamment pour des clients API, payloads webhook et modèles de configuration.',
	'tool.json-to-go.use_case.0':
		'Initialiser des modèles d’API Go à partir de payloads réels de requête/réponse',
	'tool.json-to-go.use_case.1':
		'Générer des types structurés pour des intégrations webhook et événementielles',
	'tool.json-to-go.use_case.2':
		'Réduire l’écriture manuelle de modèles sur des schémas JSON inconnus',
	'tool.json-to-go.use_case.3':
		'Accélérer le prototypage backend avec un squelette de types Go prêt à la prod',
	'tool.json-to-typescript.display_name': 'JSON vers types TypeScript',
	'tool.json-to-typescript.tagline':
		'Générez des interfaces et types TypeScript précis à partir de JSON',
	'tool.json-to-typescript.description':
		'Convertissez des exemples JSON en interfaces et types union TypeScript propres, avec inférence imbriquée, détection des champs optionnels et typage compatible null. Rapide, privé et 100% navigateur.',
	'tool.json-to-typescript.primary_keyword': 'json vers types typescript',
	'tool.json-to-typescript.meta_title': 'Générateur JSON vers types TypeScript — fmtly.dev',
	'tool.json-to-typescript.meta_description':
		'Générez des interfaces et types TypeScript depuis JSON directement dans votre navigateur. Prend en charge objets imbriqués, tableaux, unions et champs optionnels. Aucune donnée ne quitte votre appareil.',
	'tool.json-to-typescript.operation': 'Convertir',
	'tool.json-to-typescript.faq.0.question':
		'Comment l’outil mappe-t-il les valeurs JSON vers les types TypeScript ?',
	'tool.json-to-typescript.faq.0.answer':
		'Les chaînes deviennent string, les nombres number, les booléens boolean, les tableaux des arrays typés, et les objets imbriqués des interfaces générées. Les valeurs mixtes sont représentées via des union types.',
	'tool.json-to-typescript.faq.1.question':
		'Comment les champs optionnels et nullable sont-ils gérés ?',
	'tool.json-to-typescript.faq.1.answer':
		'Si une clé n’apparaît que dans une partie des exemples, le champ est marqué optionnel avec ?. Si une valeur peut être null, le type généré inclut une union avec null.',
	'tool.json-to-typescript.faq.2.question':
		'Puis-je utiliser la sortie générée directement dans mon projet ?',
	'tool.json-to-typescript.faq.2.answer':
		'Oui. La sortie sert de base pratique pour des modèles applicatifs et API. Vous pouvez la coller directement dans votre codebase puis ajuster le naming si nécessaire.',
	'tool.json-to-typescript.use_case.0':
		'Démarrer des modèles frontend et backend à partir de payloads API réels',
	'tool.json-to-typescript.use_case.1':
		'Générer des contrats typés pour SDKs et intégrations webhook',
	'tool.json-to-typescript.use_case.2':
		'Réduire l’écriture manuelle d’interfaces pour du JSON profondément imbriqué',
	'tool.json-to-typescript.use_case.3':
		'Accélérer les refactors en dérivant des types stricts depuis des données d’exemple',
	'tool.json-to-rust-serde.display_name': 'JSON vers Rust (Serde)',
	'tool.json-to-rust-serde.tagline':
		'Générez des structs Rust prêtes pour serde avec serde(rename) et Option depuis du JSON',
	'tool.json-to-rust-serde.description':
		'Transformez des échantillons JSON en structs Rust avec derive Serde, renommage des clés JSON, Option pour champs optionnels ou null, Vec pour les tableaux et serde_json::Value pour les données hétérogènes. Les formes imbriquées sont dédupliquées comme pour Go. Les grandes entrées passent par un Web Worker ; tout reste dans le navigateur.',
	'tool.json-to-rust-serde.primary_keyword': 'json vers rust serde structs',
	'tool.json-to-rust-serde.meta_title': 'JSON vers structs Rust Serde — fmtly.dev',
	'tool.json-to-rust-serde.meta_description':
		'Générez des structs Rust avec serde depuis le navigateur. rename, Option, Vec, imbrication. Privé, rapide, Worker pour gros JSON.',
	'tool.json-to-rust-serde.operation': 'Convertir',
	'tool.json-to-rust-serde.faq.0.question': 'Comment les types JSON sont-ils mappés vers Rust ?',
	'tool.json-to-rust-serde.faq.0.answer':
		'Les chaînes vers String, les booléens vers bool, les entiers vers i64, les nombres flottants vers f64, les tableaux vers Vec, les objets vers des structs générées et les formes mixtes vers serde_json::Value.',
	'tool.json-to-rust-serde.faq.1.question': 'Pourquoi serde(rename) sur chaque champ ?',
	'tool.json-to-rust-serde.faq.1.answer':
		'Les champs utilisent le snake_case idiomatique en Rust alors que le JSON est souvent en camelCase. Un rename explicite aligne serde sur les clés d’origine sans règle globale fragile.',
	'tool.json-to-rust-serde.faq.2.question': 'Faut-il serde et serde_json dans Cargo.toml ?',
	'tool.json-to-rust-serde.faq.2.answer':
		'Oui. Ajoutez serde avec la fonctionnalité derive et serde_json pour Value, par ex. serde = { version = "1", features = ["derive"] } et serde_json = "1".',
	'tool.json-to-rust-serde.use_case.0':
		'Amorcer des modèles d’API Rust à partir de vrais corps JSON de requête et réponse',
	'tool.json-to-rust-serde.use_case.1':
		'Créer des modèles serde pour webhooks, files et CLI à partir d’exemples',
	'tool.json-to-rust-serde.use_case.2':
		'Comparer avec la sortie Go ou TypeScript du même JSON dans fmtly',
	'tool.json-to-rust-serde.use_case.3':
		'Prototyper des schémas serde avant d’écrire les structs à la main',
	'ui.json_to_rust.tab_label': 'Rust',
	'tool.json-flatten.display_name': 'Aplatiseur / Désaplatiseur JSON',
	'tool.json-flatten.tagline':
		'Aplatissez des chemins JSON imbriqués et restaurez-les instantanément',
	'tool.json-flatten.description':
		'Convertissez un JSON fortement imbriqué en objets plats basés sur des chemins, puis reconstruisez la structure dans le même outil. Prend en charge les tableaux, les clés échappées et les séparateurs personnalisés.',
	'tool.json-flatten.primary_keyword': 'aplatiseur desaplatiseur json',
	'tool.json-flatten.meta_title': 'Aplatiseur / Désaplatiseur JSON — fmtly.dev',
	'tool.json-flatten.meta_description':
		'Aplatissez un JSON imbriqué en cartes de clés par chemin, puis désaplatissez-le vers la structure d’origine. Support des tableaux et séparateurs personnalisés. 100% navigateur.',
	'tool.json-flatten.operation': 'Aplatir & Désaplatir',
	'tool.json-flatten.faq.0.question':
		'Comment les valeurs de tableau sont-elles représentées dans la sortie aplatie ?',
	'tool.json-flatten.faq.0.answer':
		'Les éléments de tableau utilisent des index entre crochets dans les chemins, par exemple users[0].email ou matrix[2][1], afin de permettre une reconstruction déterministe.',
	'tool.json-flatten.faq.1.question':
		'Que se passe-t-il si des clés contiennent déjà des points ou des crochets ?',
	'tool.json-flatten.faq.1.answer':
		'Les caractères spéciaux des clés sont échappés pendant l’aplatissement. Le mode désaplatissement interprète ces échappements et restaure les clés d’origine en toute sécurité.',
	'tool.json-flatten.faq.2.question':
		'Puis-je basculer entre aplatir et désaplatir dans le même outil ?',
	'tool.json-flatten.faq.2.answer':
		'Oui. Le sélecteur de mode permet soit d’aplatir un JSON imbriqué, soit de reconstruire un JSON imbriqué à partir de cartes de chemins plats.',
	'tool.json-flatten.use_case.0':
		'Préparer des dictionnaires i18n et des configurations sous forme de clés plates',
	'tool.json-flatten.use_case.1':
		'Normaliser des fixtures API imbriquées pour une édition type tableur',
	'tool.json-flatten.use_case.2':
		'Reconstruire des structures imbriquées à partir de clés de type variables d’environnement',
	'tool.json-flatten.use_case.3':
		'Analyser des changements par chemin dans de gros JSON avant déploiement',
	'tool.json-patch.display_name': 'JSON Patch Builder',
	'tool.json-patch.tagline':
		'Générez et appliquez des opérations JSON Patch RFC 6902 instantanément',
	'tool.json-patch.description':
		'Générez des opérations JSON Patch RFC 6902 à partir d’un document de base et d’un document cible, ou appliquez un tableau patch sur un JSON de base. Tout est exécuté localement dans votre navigateur.',
	'tool.json-patch.primary_keyword': 'json patch builder',
	'tool.json-patch.meta_title': 'JSON Patch Builder (RFC 6902) — fmtly.dev',
	'tool.json-patch.meta_description':
		'Générez des opérations JSON Patch depuis deux documents JSON ou appliquez des patchs RFC 6902 dans votre navigateur. Rapide, privé, sans upload.',
	'tool.json-patch.operation': 'Patch',
	'tool.json-patch.faq.0.question': 'Qu’est-ce que JSON Patch (RFC 6902) ?',
	'tool.json-patch.faq.0.answer':
		'JSON Patch est un format standard qui décrit des changements sous forme d’opérations add, remove ou replace via des chemins JSON Pointer.',
	'tool.json-patch.faq.1.question': 'Comment fonctionne le mode Générer ?',
	'tool.json-patch.faq.1.answer':
		'Collez le JSON de base dans le panneau d’entrée et le JSON cible dans le panneau latéral. L’outil calcule les opérations nécessaires pour transformer la base en cible.',
	'tool.json-patch.faq.2.question': 'Comment fonctionne le mode Appliquer ?',
	'tool.json-patch.faq.2.answer':
		'Collez le JSON de base dans le panneau d’entrée et un tableau JSON Patch valide dans le panneau latéral. La sortie affiche le JSON final patché.',
	'tool.json-patch.use_case.0':
		'Versionner les changements de payload API sous forme de patchs déterministes',
	'tool.json-patch.use_case.1':
		'Appliquer des mises à jour de documents dans des workflows de test',
	'tool.json-patch.use_case.2':
		'Diagnostiquer des erreurs d’intégration en rejouant des séquences patch',
	'tool.json-patch.use_case.3': 'Relire des changements JSON structurés au-delà d’un diff texte',
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
	'ui.ai_tokens.characters': 'caractères',
	'ui.ai_tokens.model_label': 'Modèle',
	'ui.ai_tokens.upload_file': 'Importer un fichier',
	'ui.ai_tokens.file_loaded': '{name} chargé',
	'ui.ai_tokens.file_failed': 'Impossible de charger le fichier',
	'ui.ai_tokens.copy_summary': 'Copier le résumé',
	'ui.ai_tokens.copy.title': 'Résumé des tokens IA',
	'ui.ai_tokens.worker_active':
		'Grande entrée détectée (>{size}). L’analyse des tokens s’exécute dans un Web Worker.',
	'ui.ai_tokens.worker_failed':
		'L’analyse des tokens a échoué. Essayez une entrée plus petite ou rechargez la page.',
	'ui.ai_tokens.worker_badge': 'Worker',
	'ui.ai_tokens.input_label': 'Prompt ou texte',
	'ui.ai_tokens.input_placeholder':
		'Collez un prompt, une transcription ou un document pour estimer les tokens...',
	'ui.ai_tokens.analysis_title': 'Analyse des tokens',
	'ui.ai_tokens.processing': 'Comptage...',
	'ui.ai_tokens.comparison_title': 'Comparaison de modèles',
	'ui.ai_tokens.stat.tokens': 'Tokens',
	'ui.ai_tokens.stat.words': 'Mots',
	'ui.ai_tokens.stat.words_helper': 'Mots séparés par des espaces',
	'ui.ai_tokens.stat.characters': 'Caractères',
	'ui.ai_tokens.stat.tokens_per_word': 'Tokens / mot',
	'ui.ai_tokens.stat.tokens_per_word_helper': 'Plus bas est généralement moins cher',
	'ui.ai_tokens.stat.estimated_cost': 'Coût estimé',
	'ui.ai_tokens.stat.estimated_cost_helper': 'Estimation des tokens d’entrée',
	'ui.ai_tokens.table.model': 'Modèle',
	'ui.ai_tokens.table.tokens': 'Tokens',
	'ui.ai_tokens.table.ratio': 'Tokens / mot',
	'ui.ai_tokens.table.cost': 'Coût',
	'ui.prompt_optimizer.characters': 'caractères',
	'ui.prompt_optimizer.tokens': 'tokens',
	'ui.prompt_optimizer.model_label': 'Modèle',
	'ui.prompt_optimizer.upload_file': 'Importer un fichier',
	'ui.prompt_optimizer.file_loaded': '{name} chargé',
	'ui.prompt_optimizer.file_failed': 'Impossible de charger le fichier',
	'ui.prompt_optimizer.worker_active':
		'Grande entrée détectée (>{size}). L’optimisation s’exécute dans un Web Worker.',
	'ui.prompt_optimizer.worker_failed':
		'L’optimisation dans le Worker a échoué. Retour au traitement sur le thread principal.',
	'ui.prompt_optimizer.worker_badge': 'Worker',
	'ui.prompt_optimizer.input_label': 'Prompt original',
	'ui.prompt_optimizer.input_placeholder':
		'Collez un prompt à optimiser pour l’usage des tokens...',
	'ui.prompt_optimizer.output_label': 'Sortie optimisée',
	'ui.prompt_optimizer.processing': 'Optimisation...',
	'ui.prompt_optimizer.copy_output': 'Copier l’optimisé',
	'ui.prompt_optimizer.preview_title': 'Aperçu',
	'ui.prompt_optimizer.output_placeholder': 'Le prompt optimisé apparaît ici...',
	'ui.prompt_optimizer.option.filler': 'Retirer les mots de remplissage',
	'ui.prompt_optimizer.option.filler_desc':
		'Supprime les phrases à faible signal en préservant l’intention.',
	'ui.prompt_optimizer.option.whitespace': 'Compresser les espaces',
	'ui.prompt_optimizer.option.whitespace_desc': 'Normalise les espaces répétés et lignes vides.',
	'ui.prompt_optimizer.option.markdown': 'Simplifier Markdown',
	'ui.prompt_optimizer.option.markdown_desc':
		'Réduit la mise en forme décorative qui coûte des tokens.',
	'ui.prompt_optimizer.option.abbreviation': 'Utiliser des abréviations',
	'ui.prompt_optimizer.option.abbreviation_desc':
		'Raccourcit les phrases courantes de prompts IA lorsque c’est sûr.',
	'ui.prompt_optimizer.stat.before': 'Avant',
	'ui.prompt_optimizer.stat.before_helper': 'Nombre de tokens original',
	'ui.prompt_optimizer.stat.after': 'Après',
	'ui.prompt_optimizer.stat.after_helper': 'Nombre de tokens optimisé',
	'ui.prompt_optimizer.stat.saved': 'Tokens économisés',
	'ui.prompt_optimizer.stat.saved_helper': 'Réduction estimée',
	'ui.prompt_optimizer.stat.savings_percent': 'Économie',
	'ui.prompt_optimizer.stat.savings_percent_helper': 'Avant vs après',
	'ui.prompt_optimizer.stat.cost_saved': 'Coût économisé',
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
	'tool.text-morse-code-translator.display_name': 'Traducteur Morse',
	'tool.text-morse-code-translator.tagline':
		'Convertissez du texte en Morse et décodez le Morse en texte lisible',
	'tool.text-morse-code-translator.description':
		'Traduisez du texte en code Morse international et décodez des séquences Morse instantanément. Prend en charge lettres, chiffres et ponctuation courante, avec traitement Web Worker pour les gros volumes.',
	'tool.text-morse-code-translator.primary_keyword': 'traducteur morse',
	'tool.text-morse-code-translator.meta_title': 'Traducteur Morse — Texte ↔ Morse | fmtly.dev',
	'tool.text-morse-code-translator.meta_description':
		'Convertissez du texte en Morse et du Morse en texte clair instantanément. Rapide, privé et 100% dans le navigateur.',
	'tool.text-morse-code-translator.operation': 'Traduire en Morse',
	'tool.text-morse-code-translator.faq.0.question':
		'Quelle variante de Morse ce traducteur utilise-t-il ?',
	'tool.text-morse-code-translator.faq.0.answer':
		'Il utilise le code Morse international pour les lettres latines, les chiffres et la ponctuation la plus courante.',
	'tool.text-morse-code-translator.faq.1.question':
		'Comment sont gérés les tokens Morse inconnus au décodage ?',
	'tool.text-morse-code-translator.faq.1.answer':
		'Les tokens inconnus sont signalés et peuvent être remplacés par un caractère de substitution configurable pour conserver une sortie exploitable.',
	'tool.text-morse-code-translator.faq.2.question':
		'Peut-on traiter de gros logs ou de longs contenus ?',
	'tool.text-morse-code-translator.faq.2.answer':
		'Oui. Au-delà de 500KB, le traitement passe en Web Worker pour garder une interface fluide.',
	'tool.text-morse-code-translator.use_case.0':
		'Encoder rapidement des indicatifs, alertes ou phrases d’entraînement en Morse',
	'tool.text-morse-code-translator.use_case.1':
		'Décoder des extraits Morse capturés dans des logs, transcriptions ou exercices',
	'tool.text-morse-code-translator.use_case.2':
		'Enseigner les bases du Morse avec un retour immédiat en encodage/décodage',
	'tool.text-morse-code-translator.use_case.3':
		'Valider ponctuation et séparation avant intégration dans vos outils',
	'ui.morse.mode_label': 'Mode',
	'ui.morse.mode.encode': 'Texte → Morse',
	'ui.morse.mode.decode': 'Morse → Texte',
	'ui.morse.separator_label': 'Séparateur de mots',
	'ui.morse.separator.slash': '/ slash',
	'ui.morse.separator.pipe': '| pipe',
	'ui.morse.separator.newline': 'Nouvelle ligne',
	'ui.morse.option.preserve_unsupported_encode':
		'Conserver les caractères non pris en charge dans la sortie',
	'ui.morse.option.preserve_unsupported_decode':
		'Insérer un remplacement pour les tokens Morse inconnus',
	'ui.morse.option.unknown_placeholder': 'Remplacement inconnu',
	'ui.morse.input_label': 'Entrée',
	'ui.morse.output_label': 'Sortie',
	'ui.morse.input_placeholder.encode': 'Saisissez ou collez du texte à convertir en Morse...',
	'ui.morse.input_placeholder.decode': 'Collez du Morse (., -, /, |) pour le décoder...',
	'ui.morse.output_placeholder.encode': 'La sortie Morse s’affiche ici...',
	'ui.morse.output_placeholder.decode': 'Le texte décodé s’affiche ici...',
	'ui.morse.button.swap_mode': 'Changer de mode et réutiliser la sortie',
	'ui.morse.worker_active':
		'Entrée volumineuse détectée (>{size}). Le traitement s’exécute dans un Web Worker.',
	'ui.morse.worker_failed': 'Échec du traitement Worker. Repli sur le thread principal.',
	'ui.morse.warning.unsupported_input_characters':
		'Certains caractères d’entrée ne figurent pas dans le mapping Morse pris en charge.',
	'ui.morse.warning.unknown_morse_tokens': 'Certains tokens Morse n’ont pas pu être décodés.',
	'ui.morse.warning.no_changes': 'Aucun changement détecté pour le mode sélectionné.',
	'ui.morse.stat.symbols': 'Symboles',
	'ui.morse.stat.words': 'Mots',
	'ui.morse.stat.unsupported': 'Non pris en charge',
	'ui.morse.stat.unknown_tokens': 'Tokens inconnus',
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
	'ui.csv.controls.batch_size': 'Taille de Lot',
	// ── Catégorie Encode ──────────────────────────────────────────────────────
	'category.encode.display_name': 'Encoder / Décoder',
	'category.encode.description':
		'Encodez et décodez des données dans les formats courants — JWT, Base64, URL, entités HTML et plus encore. Tous les outils fonctionnent entièrement dans votre navigateur.',
	'category.encode.primary_keyword': 'outils encodage décodage',
	// ── JWT Decoder ───────────────────────────────────────────────────────────
	'tool.encode-jwt-decoder.display_name': 'Décodeur JWT',
	'tool.encode-jwt-decoder.tagline':
		"Décodez les tokens JWT et inspectez les claims, l'expiration et l'algorithme",
	'tool.encode-jwt-decoder.description':
		"Décodez des JSON Web Tokens instantanément — inspectez l'algorithme de l'en-tête, les claims du payload, les horodatages d'expiration et la signature brute en Base64URL. Tout le traitement s'effectue dans votre navigateur ; rien n'est jamais envoyé à un serveur.",
	'tool.encode-jwt-decoder.primary_keyword': 'décodeur jwt',
	'tool.encode-jwt-decoder.meta_title':
		"Décodeur JWT — Inspectez l'en-tête, le payload et les claims | fmtly.dev",
	'tool.encode-jwt-decoder.meta_description':
		"Décodez et inspectez des tokens JWT dans votre navigateur. Affichez l'en-tête, les claims du payload, l'état d'expiration et la signature. Rapide, privé et gratuit — aucune donnée ne quitte votre appareil.",
	'tool.encode-jwt-decoder.operation': 'Décoder le JWT',
	'tool.encode-jwt-decoder.faq.0.question': 'Mon JWT est-il envoyé à un serveur ?',
	'tool.encode-jwt-decoder.faq.0.answer':
		"Non. Tout le décodage s'effectue entièrement dans votre navigateur. Votre token ne quitte jamais votre appareil, ce qui permet d'utiliser cet outil en toute sécurité, même avec de vrais tokens d'authentification.",
	'tool.encode-jwt-decoder.faq.1.question': 'Cet outil vérifie-t-il la signature ?',
	'tool.encode-jwt-decoder.faq.1.answer':
		"Non. La vérification de la signature nécessite la clé secrète ou publique. Cet outil décode et affiche uniquement le payload — utilisez votre bibliothèque côté serveur pour vérifier l'authenticité.",
	'tool.encode-jwt-decoder.faq.2.question': 'Quels algorithmes JWT sont pris en charge ?',
	'tool.encode-jwt-decoder.faq.2.answer':
		"Le décodeur gère tout JWT standard en trois parties quel que soit l'algorithme (HS256, RS256, ES256, etc.), car il se contente de décoder le contenu encodé en Base64URL sans vérifier la signature.",
	'tool.encode-jwt-decoder.faq.3.question':
		'Puis-je décoder des JWTs volumineux ou des lots de tokens ?',
	'tool.encode-jwt-decoder.faq.3.answer':
		"Les entrées dépassant 500Ko sont automatiquement déléguées à un Web Worker, ce qui maintient la fluidité de l'interface même pour des tokens inhabituellement volumineux ou des payloads de test.",
	'tool.encode-jwt-decoder.use_case.0':
		"Inspecter les tokens d'authentification lors du développement et du débogage d'API en local",
	'tool.encode-jwt-decoder.use_case.1':
		"Vérifier l'expiration du token et les valeurs des claims standards (iss, sub, aud) en un coup d'œil",
	'tool.encode-jwt-decoder.use_case.2':
		'Enseigner la structure JWT et le rôle des sections en-tête, payload et signature',
	'tool.encode-jwt-decoder.use_case.3':
		"Résoudre les échecs d'autorisation en examinant les claims personnalisés du payload",
	// ── JWT Decoder — chaînes d'interface ────────────────────────────────────
	'ui.jwt.input_placeholder': 'Collez votre token JWT ici (eyJ…)',
	'ui.jwt.section.header': 'En-tête',
	'ui.jwt.section.payload': 'Payload',
	'ui.jwt.section.signature': 'Signature',
	'ui.jwt.standard_claims': 'Claims standards',
	'ui.jwt.all_claims': 'Tous les claims',
	'ui.jwt.signature_note':
		"Les signatures ne sont pas vérifiées. Utilisez votre bibliothèque côté serveur pour vérifier l'authenticité du token.",
	'ui.jwt.status.valid': 'Valide',
	'ui.jwt.status.expired': 'Expiré',
	'ui.jwt.status.not_yet_valid': 'Pas encore valide',
	'ui.jwt.status.no_expiry': 'Sans expiration',
	'ui.jwt.expires_in': 'Expire dans {time}',
	'ui.jwt.expired_ago': 'Expiré il y a {time}',
	'ui.jwt.claim.iss': 'Émetteur',
	'ui.jwt.claim.sub': 'Sujet',
	'ui.jwt.claim.aud': 'Audience',
	'ui.jwt.claim.exp': 'Expire',
	'ui.jwt.claim.nbf': 'Pas avant',
	'ui.jwt.claim.iat': 'Émis le',
	'ui.jwt.claim.jti': 'ID JWT',
	'ui.jwt.error.empty': 'Collez un token JWT ci-dessus pour le décoder.',
	'ui.jwt.error.invalid_format':
		'Format JWT invalide : 3 parties séparées par des points attendues.',
	'ui.jwt.error.invalid_base64': "Échec du décodage de l'encodage Base64URL.",
	'ui.jwt.error.invalid_json': "Le contenu décodé n'est pas du JSON valide.",
	'ui.jwt.clear': 'Effacer',
	'ui.jwt.copy_jwt': 'Copier le token',
	'ui.jwt.copy_header': 'Copier',
	'ui.jwt.copy_payload': 'Copier',
	'ui.jwt.copy_signature': 'Copier',
	'ui.jwt.worker_active': 'Grande entrée (>{size}) traitée dans un Worker.',
	'ui.jwt.worker_failed': 'Échec du traitement Worker. Repli sur le thread principal.',
	// ── Encoder / Décoder Base64 ─────────────────────────────────────────────
	'tool.encode-base64-encode-decode.display_name': 'Encoder / Décoder Base64',
	'tool.encode-base64-encode-decode.tagline':
		'Encodez ou décodez du texte Base64 en variantes standard et URL-safe',
	'tool.encode-base64-encode-decode.description':
		'Encodez du texte brut en Base64 ou décodez du Base64 en texte UTF-8 instantanément dans votre navigateur. Basculez entre variante standard et URL-safe, contrôlez le padding, ignorez les espaces lors du décodage et traitez les grosses entrées via Web Worker.',
	'tool.encode-base64-encode-decode.primary_keyword': 'encoder decoder base64',
	'tool.encode-base64-encode-decode.meta_title':
		'Encoder / Décoder Base64 — Standard et URL-safe | fmtly.dev',
	'tool.encode-base64-encode-decode.meta_description':
		'Encodez ou décodez du Base64 instantanément dans votre navigateur. Variantes standard/URL-safe, options de padding, décodage tolérant aux espaces et Web Worker pour les grosses entrées.',
	'tool.encode-base64-encode-decode.operation': 'Encoder / Décoder Base64',
	'tool.encode-base64-encode-decode.faq.0.question':
		'Mes données Base64 sont-elles envoyées à un serveur ?',
	'tool.encode-base64-encode-decode.faq.0.answer':
		"Non. Tout le traitement Base64 s'effectue entièrement dans votre navigateur. Vos données restent sur votre appareil.",
	'tool.encode-base64-encode-decode.faq.1.question':
		'Quelle différence entre Base64 standard et Base64 URL-safe ?',
	'tool.encode-base64-encode-decode.faq.1.answer':
		'Le Base64 standard utilise + et /, alors que le Base64 URL-safe utilise - et _. La variante URL-safe est préférable pour les JWT, paramètres de requête et noms de fichiers contenant des caractères réservés en URL.',
	'tool.encode-base64-encode-decode.faq.2.question':
		'Peut-on décoder du Base64 avec padding manquant ou retours à la ligne ?',
	'tool.encode-base64-encode-decode.faq.2.answer':
		"Oui. Le décodeur peut ignorer les espaces et rétablir automatiquement le padding manquant quand c'est possible, pratique pour les valeurs copiées depuis des logs ou des tokens.",
	'tool.encode-base64-encode-decode.faq.3.question': "L'outil gère-t-il de gros payloads Base64 ?",
	'tool.encode-base64-encode-decode.faq.3.answer':
		'Oui. Les entrées de plus de 500Ko sont automatiquement traitées dans un Web Worker pour garder une interface fluide.',
	'tool.encode-base64-encode-decode.use_case.0':
		'Encoder des identifiants API ou payloads de test en Base64 pendant le développement',
	'tool.encode-base64-encode-decode.use_case.1':
		'Décoder des extraits Base64 copiés depuis des logs, en-têtes ou outils de debug',
	'tool.encode-base64-encode-decode.use_case.2':
		'Basculer rapidement entre Base64 standard et Base64 URL-safe',
	'tool.encode-base64-encode-decode.use_case.3':
		'Normaliser des entrées Base64 désordonnées avec espaces et padding manquant',
	// ── Encoder / Décoder Base64 — chaînes d’interface ───────────────────────
	'ui.base64.tab_label': 'Base64',
	'ui.base64.action_label': 'Action',
	'ui.base64.action.encode': 'Encoder',
	'ui.base64.action.decode': 'Décoder',
	'ui.base64.variant_label': 'Variante',
	'ui.base64.variant.standard': 'Standard',
	'ui.base64.variant.url_safe': 'URL-safe',
	'ui.base64.input_label': 'Entrée',
	'ui.base64.output_label': 'Sortie',
	'ui.base64.input_placeholder': 'Collez du texte brut ou du contenu Base64...',
	'ui.base64.output_placeholder': 'La sortie encodée ou décodée s’affiche ici...',
	'ui.base64.option.omit_padding': 'Supprimer le padding final =',
	'ui.base64.option.ignore_whitespace':
		'Ignorer les retours à la ligne et espaces lors du décodage',
	'ui.base64.worker_active':
		'Entrée volumineuse détectée (>{size}). Le traitement s’exécute dans un Web Worker.',
	'ui.base64.worker_failed': 'Échec du traitement Worker. Repli sur le thread principal.',
	'ui.base64.worker_badge': 'Worker',
	'ui.base64.warning.no_changes':
		'Aucune modification détectée pour le mode et l’action sélectionnés.',
	'ui.base64.warning.whitespace_ignored':
		"Les caractères d'espacement ont été supprimés avant le décodage.",
	'ui.base64.warning.padding_auto_added':
		'Le padding manquant a été ajouté automatiquement avant le décodage.',
	'ui.base64.warning.alphabet_normalized':
		'Les caractères URL-safe ont été normalisés en Base64 standard pour le décodage.',
	'ui.base64.error.invalid_base64_characters': 'Entrée Base64 invalide : {detail}',
	'ui.base64.error.invalid_base64_length': 'Longueur Base64 invalide : {detail}',
	'ui.base64.error.invalid_utf8_output':
		'Les octets décodés ne forment pas un texte UTF-8 valide : {detail}',
	'ui.base64.button.swap_direction': 'Inverser le sens',
	'ui.base64.button.apply_output': 'Appliquer la sortie à l’entrée',
	'ui.base64.toast.applied': 'La sortie a été appliquée à l’entrée',
	'ui.base64.characters': 'caractères',
	// ── Encoder / Décoder URL ────────────────────────────────────────────────
	'tool.encode-url-encode-decode.display_name': 'Encoder / Décoder URL',
	'tool.encode-url-encode-decode.tagline':
		'Encodez en pourcentage ou décodez du texte URL en mode composant ou URL complète',
	'tool.encode-url-encode-decode.description':
		'Encodez ou décodez des chaînes URL instantanément dans votre navigateur. Basculez entre le mode composant (encodeURIComponent/decodeURIComponent) et le mode URL complète (encodeURI/decodeURI), gérez + comme espace pour les données de formulaire et traitez les entrées volumineuses via Web Worker.',
	'tool.encode-url-encode-decode.primary_keyword': 'encoder decoder url',
	'tool.encode-url-encode-decode.meta_title':
		'Encoder / Décoder URL — Encodage pourcentage en ligne | fmtly.dev',
	'tool.encode-url-encode-decode.meta_description':
		'Encodez ou décodez des URLs dans votre navigateur. Avec mode composant/URL complète, gestion + et espace, et traitement Web Worker pour les gros volumes.',
	'tool.encode-url-encode-decode.operation': 'Encoder / Décoder URL',
	'tool.encode-url-encode-decode.faq.0.question':
		'Mes données URL sont-elles envoyées à un serveur ?',
	'tool.encode-url-encode-decode.faq.0.answer':
		'Non. Tout le traitement se fait entièrement dans votre navigateur. Vos données restent sur votre appareil.',
	'tool.encode-url-encode-decode.faq.1.question':
		'Quelle différence entre le mode composant et le mode URL complète ?',
	'tool.encode-url-encode-decode.faq.1.answer':
		'Le mode composant sert aux fragments isolés (valeurs de query, segments de chemin) et encode aussi des délimiteurs comme ?, & et =. Le mode URL complète conserve ces délimiteurs de structure et encode uniquement les caractères non sûrs.',
	'tool.encode-url-encode-decode.faq.2.question': 'Pourquoi + est-il parfois décodé en espace ?',
	'tool.encode-url-encode-decode.faq.2.answer':
		'Dans les payloads application/x-www-form-urlencoded, les espaces sont souvent représentés par +. Activez l’option correspondante au décodage pour les données de formulaire.',
	'tool.encode-url-encode-decode.faq.3.question':
		'Cet outil gère-t-il de très grosses entrées URL ?',
	'tool.encode-url-encode-decode.faq.3.answer':
		'Oui. Les entrées supérieures à 500Ko sont automatiquement traitées dans un Web Worker pour garder une interface fluide.',
	'tool.encode-url-encode-decode.use_case.0':
		'Encoder des valeurs de paramètres query avant des appels API',
	'tool.encode-url-encode-decode.use_case.1':
		'Décoder des fragments URL copiés depuis les logs pendant le debug de routing',
	'tool.encode-url-encode-decode.use_case.2':
		'Valider le comportement + / espace dans des exemples form-urlencoded',
	'tool.encode-url-encode-decode.use_case.3':
		'Comparer URL encodées et décodées lors d’analyses de redirections',
	// ── Entités HTML encoder / décoder — outil ──────────────────────────────
	'tool.encode-html-entities-encode-decode.display_name': 'Encoder / décoder les entités HTML',
	'tool.encode-html-entities-encode-decode.tagline':
		'Encoder ou décoder les références de caractères HTML — noms WHATWG, décimal et hexadécimal',
	'tool.encode-html-entities-encode-decode.description':
		'Transformez du texte en entités HTML sûres ou décodez les références vers Unicode, entièrement dans le navigateur. Jeu complet de noms WHATWG, formes numériques, décodage strict ou permissif, option pour tout le non-ASCII et Web Worker au-delà de 500 Ko.',
	'tool.encode-html-entities-encode-decode.primary_keyword':
		'encoder décoder entités html en ligne',
	'tool.encode-html-entities-encode-decode.meta_title':
		'Entités HTML : encoder et décoder en ligne | fmtly.dev',
	'tool.encode-html-entities-encode-decode.meta_description':
		'Encodez ou décodez des entités HTML instantanément dans le navigateur. Carte WHATWG complète, modes décimal et hexadécimal, validation stricte, périmètre essentiel ou Unicode complet et Web Worker pour les grandes entrées.',
	'tool.encode-html-entities-encode-decode.operation': 'Encoder / décoder les entités HTML',
	'tool.encode-html-entities-encode-decode.faq.0.question':
		'Mon texte est-il envoyé à un serveur ?',
	'tool.encode-html-entities-encode-decode.faq.0.answer':
		'Non. Tout s’exécute localement dans votre navigateur ; votre saisie ne quitte pas l’appareil.',
	'tool.encode-html-entities-encode-decode.faq.1.question':
		'Quelle est la différence entre décodage strict et permissif ?',
	'tool.encode-html-entities-encode-decode.faq.1.answer':
		'Le mode permissif laisse intactes les références inconnues ou mal formées, pratique pour des fragments mélangés. Le mode strict s’arrête avec une erreur si une référence est incomplète ou inconnue.',
	'tool.encode-html-entities-encode-decode.faq.2.question':
		'Quelles entités nommées sont prises en charge ?',
	'tool.encode-html-entities-encode-decode.faq.2.answer':
		'Le décodage utilise la liste complète WHATWG des références nommées (plus de 2 100 noms), ainsi que les références numériques décimales et hexadécimales.',
	'tool.encode-html-entities-encode-decode.faq.3.question': 'Gère-t-il de très gros documents ?',
	'tool.encode-html-entities-encode-decode.faq.3.answer':
		'Oui. Au-delà de 500 Ko, le traitement est délégué à un Web Worker pour garder l’interface fluide.',
	'tool.encode-html-entities-encode-decode.use_case.0':
		'Échapper les contenus utilisateur avant insertion dans des gabarits HTML',
	'tool.encode-html-entities-encode-decode.use_case.1':
		'Décoder les entités d’HTML exporté ou scrapé vers du texte brut lisible',
	'tool.encode-html-entities-encode-decode.use_case.2':
		'Normaliser guillemets, esperluettes et symboles pour du balisage CMS ou e-mail',
	'tool.encode-html-entities-encode-decode.use_case.3':
		'Vérifier des règles d’analyse strictes sur des fragments HTML ou jeux de tests',
	// ── Entités HTML — interface ───────────────────────────────────────────
	'ui.encode_html_entities.tab_label': 'Entités',
	'ui.encode_html_entities.action_label': 'Action',
	'ui.encode_html_entities.action.encode': 'Encoder',
	'ui.encode_html_entities.action.decode': 'Décoder',
	'ui.encode_html_entities.format_label': 'Format de sortie',
	'ui.encode_html_entities.format.named': 'Nommées + repli numérique',
	'ui.encode_html_entities.format.decimal': 'Numérique décimal',
	'ui.encode_html_entities.format.hex': 'Numérique hexadécimal',
	'ui.encode_html_entities.scope_label': 'Périmètre d’encodage',
	'ui.encode_html_entities.scope.essentials': 'Essentiels (& < > " \')',
	'ui.encode_html_entities.scope.all_non_ascii': 'Essentiels + tout le non-ASCII',
	'ui.encode_html_entities.apostrophe_label': 'Apostrophe (mode nommé)',
	'ui.encode_html_entities.apostrophe.numeric': '&#39;',
	'ui.encode_html_entities.apostrophe.apos': '&apos;',
	'ui.encode_html_entities.option.encode_line_breaks': 'Encoder CR/LF en entités numériques',
	'ui.encode_html_entities.option.encode_apostrophe': 'Encoder l’apostrophe (U+0027)',
	'ui.encode_html_entities.decode_mode_label': 'Mode de décodage',
	'ui.encode_html_entities.decode.permissive': 'Permissif',
	'ui.encode_html_entities.decode.strict': 'Strict',
	'ui.encode_html_entities.decode.hint':
		'Le mode strict rejette les références inconnues ou mal formées. Le permissif laisse les fragments invalides inchangés.',
	'ui.encode_html_entities.input_label': 'Entrée',
	'ui.encode_html_entities.output_label': 'Sortie',
	'ui.encode_html_entities.input_placeholder':
		'Collez du texte ou des fragments HTML avec entités...',
	'ui.encode_html_entities.output_placeholder': 'La sortie encodée ou décodée s’affiche ici...',
	'ui.encode_html_entities.worker_active':
		'Grande entrée détectée (>{size}). Le traitement s’exécute dans un Web Worker.',
	'ui.encode_html_entities.worker_failed':
		'Échec du Worker. Retour au traitement sur le thread principal.',
	'ui.encode_html_entities.worker_badge': 'Worker',
	'ui.encode_html_entities.warning.no_changes':
		'Aucun changement détecté pour les options choisies.',
	'ui.encode_html_entities.error.invalid_entity': '{detail} (position {offset})',
	'ui.encode_html_entities.error.incomplete_reference': '{detail} (position {offset})',
	'ui.encode_html_entities.button.swap_direction': 'Inverser le sens',
	'ui.encode_html_entities.button.apply_output': 'Appliquer la sortie à l’entrée',
	'ui.encode_html_entities.toast.applied': 'La sortie a été appliquée à l’entrée',
	'ui.encode_html_entities.characters': 'caractères',
	// ── Inspecteur Unicode — outil ───────────────────────────────────────────
	'tool.encode-unicode-inspector.display_name': 'Inspecteur Unicode',
	'tool.encode-unicode-inspector.tagline':
		'Inspectez les points de code, octets UTF-8, noms, catégorie, script et largeur est-asiatique',
	'tool.encode-unicode-inspector.description':
		'Collez du texte UTF-8 pour voir chaque groupe de graphèmes ou chaque valeur scalaire Unicode avec notation U+, octets UTF-8 hex, nom officiel, catégorie générale, script et largeur est-asiatique. Les grandes entrées passent par un Web Worker ; tout reste dans le navigateur.',
	'tool.encode-unicode-inspector.primary_keyword': 'inspecteur unicode points de code',
	'tool.encode-unicode-inspector.meta_title': 'Inspecteur Unicode — UTF-8 & U+ | fmtly.dev',
	'tool.encode-unicode-inspector.meta_description':
		'Inspectez Unicode dans le navigateur : points U+, octets UTF-8, noms, catégorie, script et largeur est-asiatique. Mode graphème ou scalaire ; Worker pour les gros textes. Privé et instantané.',
	'tool.encode-unicode-inspector.operation': 'Inspecter Unicode',
	'tool.encode-unicode-inspector.faq.0.question': 'Mon texte est-il envoyé sur un serveur ?',
	'tool.encode-unicode-inspector.faq.0.answer':
		'Non. L’analyse s’exécute entièrement dans votre navigateur. Votre saisie ne quitte pas l’appareil.',
	'tool.encode-unicode-inspector.faq.1.question':
		'Quelle est la différence entre le mode graphème et le mode scalaire ?',
	'tool.encode-unicode-inspector.faq.1.answer':
		'Le mode graphème regroupe les caractères perçus par l’utilisateur (emojis avec tons, séquences ZWJ, marques combinantes) si le navigateur prend en charge Intl.Segmenter. Le mode scalaire liste chaque point de code Unicode séparément.',
	'tool.encode-unicode-inspector.faq.2.question':
		'Pourquoi les noms ou propriétés semblent parfois peu familiers ?',
	'tool.encode-unicode-inspector.faq.2.answer':
		'Les noms et propriétés suivent l’Unicode Character Database. Les points non assignés apparaissent comme « unassigned » ou équivalent ; certains symboles ont des noms Unicode normatifs.',
	'tool.encode-unicode-inspector.faq.3.question':
		'Pourquoi une grande entrée utilise-t-elle un Web Worker ?',
	'tool.encode-unicode-inspector.faq.3.answer':
		'Les entrées de plus de 500 Ko sont traitées hors du thread principal pour garder le tableau, le défilement et les contrôles réactifs pendant l’interrogation des tables Unicode.',
	'tool.encode-unicode-inspector.use_case.0':
		'Déboguer les caractères invisibles, un mauvais encodage ou des scripts mélangés dans les journaux et saisies utilisateur',
	'tool.encode-unicode-inspector.use_case.1':
		'Vérifier les séquences UTF-8 et points de code pour des noms de fichiers ou API internationalisés',
	'tool.encode-unicode-inspector.use_case.2':
		'Enseigner les bases Unicode : groupes de graphèmes, marques combinantes et séquences d’emoji',
	'tool.encode-unicode-inspector.use_case.3':
		'Exporter un tableau TSV des segments et propriétés pour la documentation ou des jeux de tests',
	// ── Inspecteur Unicode — interface ───────────────────────────────────────
	'ui.unicode_inspector.tab_label': 'Unicode',
	'ui.unicode_inspector.utf16_units': 'unités UTF-16',
	'ui.unicode_inspector.backend_load_error':
		'Impossible de charger les tables de noms Unicode. Vérifiez la connexion et réessayez.',
	'ui.unicode_inspector.worker_failed': 'Échec du traitement Worker. Retour au thread principal.',
	'ui.unicode_inspector.granularity_label': 'Segmentation',
	'ui.unicode_inspector.granularity.grapheme': 'Groupes de graphèmes',
	'ui.unicode_inspector.granularity.codepoint': 'Valeurs scalaires Unicode',
	'ui.unicode_inspector.granularity_hint':
		'Le mode graphème utilise Intl.Segmenter si disponible (séquences ZWJ d’emoji, marques combinantes). Sinon chaque scalaire est affiché séparément.',
	'ui.unicode_inspector.max_scalars_label': 'Limite de lignes (scalaires)',
	'ui.unicode_inspector.worker_active':
		'Grande entrée (>{size}). L’inspection s’exécute dans un Web Worker.',
	'ui.unicode_inspector.copy_tsv': 'Copier le TSV',
	'ui.unicode_inspector.input_label': 'Entrée',
	'ui.unicode_inspector.input_placeholder':
		'Collez du texte UTF-8 pour inspecter les points de code…',
	'ui.unicode_inspector.results_label': 'Inspection',
	'ui.unicode_inspector.loading_backend': 'Chargement des données Unicode…',
	'ui.unicode_inspector.worker_badge': 'Worker',
	'ui.unicode_inspector.summary':
		'{clusters} groupes · {scalars} scalaires · {bytes} octets UTF-8 · {ms} ms',
	'ui.unicode_inspector.truncated':
		'Sortie tronquée ; {omitted} scalaire(s) de plus non affiché(s). Augmentez la limite ou raccourcissez l’entrée.',
	'ui.unicode_inspector.col.segment': 'Segment',
	'ui.unicode_inspector.col.codepoint': 'U+',
	'ui.unicode_inspector.col.glyph': 'Glyphe',
	'ui.unicode_inspector.col.utf8': 'UTF-8',
	'ui.unicode_inspector.col.category': 'Cat.',
	'ui.unicode_inspector.col.script': 'Script',
	'ui.unicode_inspector.col.eaw': 'EaW',
	'ui.unicode_inspector.col.name': 'Nom',
	'ui.unicode_inspector.table_region': 'Tableau des scalaires Unicode',
	'ui.unicode_inspector.empty_hint':
		'Saisissez ou collez du texte pour voir les points de code et les noms.',
	'ui.unicode_inspector.gc.Lu': 'Lettre, majuscule',
	'ui.unicode_inspector.gc.Ll': 'Lettre, minuscule',
	'ui.unicode_inspector.gc.Lt': 'Lettre, title case',
	'ui.unicode_inspector.gc.Lm': 'Lettre, modificateur',
	'ui.unicode_inspector.gc.Lo': 'Lettre, autre',
	'ui.unicode_inspector.gc.Mn': 'Marque, non espacée',
	'ui.unicode_inspector.gc.Mc': 'Marque, espacée combinante',
	'ui.unicode_inspector.gc.Me': 'Marque, englobante',
	'ui.unicode_inspector.gc.Nd': 'Nombre, chiffre décimal',
	'ui.unicode_inspector.gc.Nl': 'Nombre, lettre',
	'ui.unicode_inspector.gc.No': 'Nombre, autre',
	'ui.unicode_inspector.gc.Pc': 'Ponctuation, connecteur',
	'ui.unicode_inspector.gc.Pd': 'Ponctuation, trait',
	'ui.unicode_inspector.gc.Ps': 'Ponctuation, ouvrante',
	'ui.unicode_inspector.gc.Pe': 'Ponctuation, fermante',
	'ui.unicode_inspector.gc.Pi': 'Ponctuation, guillemet ouvrant',
	'ui.unicode_inspector.gc.Pf': 'Ponctuation, guillemet fermant',
	'ui.unicode_inspector.gc.Po': 'Ponctuation, autre',
	'ui.unicode_inspector.gc.Sm': 'Symbole, mathématiques',
	'ui.unicode_inspector.gc.Sc': 'Symbole, devise',
	'ui.unicode_inspector.gc.Sk': 'Symbole, modificateur',
	'ui.unicode_inspector.gc.So': 'Symbole, autre',
	'ui.unicode_inspector.gc.Zs': 'Séparateur, espace',
	'ui.unicode_inspector.gc.Zl': 'Séparateur, ligne',
	'ui.unicode_inspector.gc.Zp': 'Séparateur, paragraphe',
	'ui.unicode_inspector.gc.Cc': 'Autre, contrôle',
	'ui.unicode_inspector.gc.Cf': 'Autre, format',
	'ui.unicode_inspector.gc.Cs': 'Autre, substitut',
	'ui.unicode_inspector.gc.Co': 'Autre, usage privé',
	'ui.unicode_inspector.gc.Cn': 'Autre, non assigné',
	// ── Hex ↔ Texte — outil ─────────────────────────────────────────────────
	'tool.encode-hex-encode-decode.display_name': 'Hex ↔ ASCII / UTF-8',
	'tool.encode-hex-encode-decode.tagline':
		'Convertissez du texte UTF-8 en octets hexadécimaux ou des dumps hex en texte lisible',
	'tool.encode-hex-encode-decode.description':
		'Encodez toute chaîne UTF-8 en paires d’octets hex avec casse, séparateurs et retours à la ligne au choix. Décodez un hex tolérant (espaces, virgules, préfixes 0x) vers du texte avec validation UTF-8 stricte. Les grandes entrées passent par un Web Worker ; tout reste dans le navigateur.',
	'tool.encode-hex-encode-decode.primary_keyword': 'hex vers texte utf-8',
	'tool.encode-hex-encode-decode.meta_title': 'Hex ↔ Texte — UTF-8 & ASCII | fmtly.dev',
	'tool.encode-hex-encode-decode.meta_description':
		'Convertissez hex en texte UTF-8 ou texte en hex dans le navigateur. Délimiteurs, casse, retours, préfixes 0x et Worker. Privé et rapide.',
	'tool.encode-hex-encode-decode.operation': 'Encoder / décoder hex',
	'tool.encode-hex-encode-decode.faq.0.question':
		'Mes données sont-elles envoyées sur un serveur ?',
	'tool.encode-hex-encode-decode.faq.0.answer':
		'Non. Toute la conversion s’exécute dans votre navigateur. Texte et hex ne quittent pas l’appareil.',
	'tool.encode-hex-encode-decode.faq.1.question': 'Quel encodage l’outil utilise-t-il ?',
	'tool.encode-hex-encode-decode.faq.1.answer':
		'Le texte est interprété en UTF-8 dans les deux sens. L’ASCII est un sous-ensemble de l’UTF-8 ; l’anglais simple se comporte pareil.',
	'tool.encode-hex-encode-decode.faq.2.question':
		'Pourquoi le décodage échoue-t-il avec « UTF-8 invalide » ?',
	'tool.encode-hex-encode-decode.faq.2.answer':
		'Les octets décodés doivent former de l’UTF-8 valide. Du hex binaire aléatoire ou d’autres encodages ne donneront pas de texte — utilisez l’outil adapté.',
	'tool.encode-hex-encode-decode.faq.3.question':
		'Pourquoi un Web Worker pour les grandes entrées ?',
	'tool.encode-hex-encode-decode.faq.3.answer':
		'Les entrées de plus de 500 Ko sont traitées hors du thread principal pour garder la saisie, le défilement et les contrôles fluides.',
	'tool.encode-hex-encode-decode.use_case.0':
		'Repasser du hex du presse-papiers (logs, captures) en extraits UTF-8 lisibles',
	'tool.encode-hex-encode-decode.use_case.1':
		'Produire des dumps hex formatés pour la doc, les tests ou les constantes embarquées',
	'tool.encode-hex-encode-decode.use_case.2':
		'Vérifier comment les emoji et caractères non latins s’étendent en octets UTF-8',
	'tool.encode-hex-encode-decode.use_case.3':
		'Basculer rapidement entre hex et texte en déboguant API, jetons ou charges encodées',
	// ── Hex ↔ Texte — interface ─────────────────────────────────────────────
	'ui.hex.tab_label': 'Hex',
	'ui.hex.action_label': 'Action',
	'ui.hex.action.encode': 'Texte → hex',
	'ui.hex.action.decode': 'Hex → texte',
	'ui.hex.hex_case_label': 'Casse hex',
	'ui.hex.hex_case.upper': 'Majuscules',
	'ui.hex.hex_case.lower': 'Minuscules',
	'ui.hex.delimiter_label': 'Séparateur d’octets',
	'ui.hex.delimiter.space': 'Espace',
	'ui.hex.delimiter.none': 'Aucun',
	'ui.hex.delimiter.comma': 'Virgule',
	'ui.hex.bytes_per_line_label': 'Octets par ligne',
	'ui.hex.bytes_per_line.off': 'Pas de retour',
	'ui.hex.bytes_per_line.n': '{n} octets',
	'ui.hex.decode_options_label': 'Options de décodage',
	'ui.hex.option.ignore_whitespace': 'Ignorer espaces et sauts de ligne',
	'ui.hex.option.ignore_commas': 'Ignorer les virgules séparatrices',
	'ui.hex.option.allow_0x': 'Autoriser le préfixe 0x avant chaque octet',
	'ui.hex.worker_active':
		'Entrée volumineuse détectée (>{size}). Le traitement s’exécute dans un Web Worker.',
	'ui.hex.worker_failed': 'Échec du traitement Worker. Repli sur le thread principal.',
	'ui.hex.worker_badge': 'Worker',
	'ui.hex.button.swap_direction': 'Inverser le sens',
	'ui.hex.button.apply_output': 'Appliquer la sortie à l’entrée',
	'ui.hex.input_label': 'Entrée',
	'ui.hex.output_label': 'Sortie',
	'ui.hex.input_placeholder': 'Texte brut à encoder, ou chiffres hex à décoder en UTF-8…',
	'ui.hex.output_placeholder': 'La sortie hex ou le texte UTF-8 décodé s’affiche ici…',
	'ui.hex.characters': 'caractères',
	'ui.hex.toast.applied': 'La sortie a été appliquée à l’entrée',
	'ui.hex.warning.whitespace_skipped':
		'Des espaces ont été ignorés lors de l’analyse des chiffres hex.',
	'ui.hex.warning.commas_skipped': 'Des virgules séparatrices ont été ignorées lors de l’analyse.',
	'ui.hex.error.invalid_hex_digit':
		'Caractère non valide dans l’entrée hex (vers la colonne {position}).',
	'ui.hex.error.odd_hex_length':
		'Nombre impair de chiffres hex ({count}). Des paires sont requises pour les octets.',
	'ui.hex.error.invalid_utf8':
		'Les octets décodés ne forment pas de l’UTF-8 valide ({bytes} octets).',
	// ── ROT13 / César — outil ───────────────────────────────────────────────
	'tool.encode-rot13-caesar-cipher.display_name': 'ROT13 / chiffre de César',
	'tool.encode-rot13-caesar-cipher.tagline':
		'ROT13 pour spoilers ou décalage de César sur A–Z et a–z, chiffrement et déchiffrement',
	'tool.encode-rot13-caesar-cipher.description':
		'Appliquez le ROT13 classique (13 positions, auto-inverse) ou le chiffre de César avec décalage 1–25. Choisissez chiffrer ou déchiffrer pour César, utilisez des préréglages ou un curseur ; chiffres, ponctuation et Unicode hors latin de base restent inchangés. Les grandes entrées passent par un Web Worker ; tout reste dans le navigateur.',
	'tool.encode-rot13-caesar-cipher.primary_keyword': 'rot13 cesar chiffre en ligne',
	'tool.encode-rot13-caesar-cipher.meta_title': 'ROT13 & César — fmtly.dev',
	'tool.encode-rot13-caesar-cipher.meta_description':
		'ROT13 et César dans le navigateur : chiffrer, déchiffrer, préréglages 1–25, Worker pour gros textes. Lettres uniquement ; privé et instantané.',
	'tool.encode-rot13-caesar-cipher.operation': 'ROT13 / César',
	'tool.encode-rot13-caesar-cipher.faq.0.question': 'Mon texte est-il envoyé quelque part ?',
	'tool.encode-rot13-caesar-cipher.faq.0.answer':
		'Non. La transformation s’exécute entièrement dans votre navigateur. Votre texte ne quitte pas l’appareil.',
	'tool.encode-rot13-caesar-cipher.faq.1.question': 'Quels caractères sont modifiés ?',
	'tool.encode-rot13-caesar-cipher.faq.1.answer':
		'Seules les lettres latines de base A–Z et a–z sont décalées. Espaces, chiffres, ponctuation, lettres accentuées, emoji et le reste d’Unicode restent identiques.',
	'tool.encode-rot13-caesar-cipher.faq.2.question': 'Est-ce un vrai chiffrement ?',
	'tool.encode-rot13-caesar-cipher.faq.2.answer':
		'Non. ROT13 et César sont de l’obfuscation pour jeux, spoilers ou pédagogie — faciles à casser et inadaptés aux secrets.',
	'tool.encode-rot13-caesar-cipher.faq.3.question':
		'Pourquoi un Web Worker pour les grandes entrées ?',
	'tool.encode-rot13-caesar-cipher.faq.3.answer':
		'Les entrées de plus de 500 Ko sont traitées hors du thread principal pour garder la saisie fluide.',
	'tool.encode-rot13-caesar-cipher.use_case.0':
		'Masquer des spoilers d’énigmes ou d’histoires sur forums et chats avec du ROT13 réversible',
	'tool.encode-rot13-caesar-cipher.use_case.1':
		'Enseigner les chiffrements par substitution classiques et l’arithmétique modulaire sur l’alphabet',
	'tool.encode-rot13-caesar-cipher.use_case.2':
		'Tester rapidement plusieurs décalages César pour des défis CTF ou des jeux papier',
	'tool.encode-rot13-caesar-cipher.use_case.3':
		'Repasser en texte lisible des contenus ROT13 provenant d’API ou de journaux',
	// ── ROT13 / César — interface ────────────────────────────────────────────
	'ui.rot13.tab_label': 'ROT13',
	'ui.rot13.mode_label': 'Chiffre',
	'ui.rot13.mode.rot13': 'ROT13',
	'ui.rot13.mode.caesar': 'César',
	'ui.rot13.rot13_hint':
		'Le ROT13 décale A–Z et a–z de 13 positions. Deux applications donnent le texte d’origine.',
	'ui.rot13.direction_label': 'Sens',
	'ui.rot13.direction.encrypt': 'Chiffrer (vers l’avant)',
	'ui.rot13.direction.decrypt': 'Déchiffrer (vers l’arrière)',
	'ui.rot13.shift_label': 'Décalage (1–25)',
	'ui.rot13.presets_label': 'Préréglages',
	'ui.rot13.caesar_scope_hint':
		'Seules les lettres latines de base A–Z et a–z sont décalées ; chiffres, ponctuation, espaces et le reste d’Unicode restent inchangés.',
	'ui.rot13.worker_active':
		'Entrée volumineuse détectée (>{size}). Le traitement s’exécute dans un Web Worker.',
	'ui.rot13.worker_failed': 'Échec du traitement Worker. Repli sur le thread principal.',
	'ui.rot13.worker_badge': 'Worker',
	'ui.rot13.button.apply_output': 'Appliquer la sortie à l’entrée',
	'ui.rot13.input_label': 'Entrée',
	'ui.rot13.output_label': 'Sortie',
	'ui.rot13.input_placeholder': 'Saisissez ou collez du texte à transformer…',
	'ui.rot13.output_placeholder': 'Le texte transformé s’affiche ici…',
	'ui.rot13.characters': 'caractères',
	'ui.rot13.toast.applied': 'La sortie a été appliquée à l’entrée',
	// ── Punycode / IDN tool ───────────────────────────────────────────────────
	'tool.encode-punycode-encode-decode.display_name': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.tagline':
		'Convertir noms de domaine et e-mails internationalisés entre Unicode et ASCII xn--',
	'tool.encode-punycode-encode-decode.description':
		'Convertissez domaines et adresses avec étiquettes non ASCII en Punycode (ASCII avec préfixe xn--) et inversement. Gère plusieurs étiquettes et la partie locale avant @. Tout s’exécute dans le navigateur ; les grandes entrées passent par un Web Worker.',
	'tool.encode-punycode-encode-decode.primary_keyword': 'punycode idn encoder en ligne',
	'tool.encode-punycode-encode-decode.meta_title': 'Punycode & IDN — Encoder / Décoder — fmtly.dev',
	'tool.encode-punycode-encode-decode.meta_description':
		'Passez domaines et e-mails Unicode en Punycode (xn--) et décodez l’inverse. Privé, instantané, navigateur uniquement ; Worker pour gros textes.',
	'tool.encode-punycode-encode-decode.operation': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.faq.0.question':
		'Mon domaine ou e-mail est-il envoyé à un serveur ?',
	'tool.encode-punycode-encode-decode.faq.0.answer':
		'Non. La conversion utilise la bibliothèque Punycode entièrement dans votre navigateur. Vos chaînes ne quittent pas l’appareil.',
	'tool.encode-punycode-encode-decode.faq.1.question': 'Que fait « encoder » ici ?',
	'tool.encode-punycode-encode-decode.faq.1.answer':
		'Encoder applique IDNA toASCII : chaque étiquette non ASCII devient ASCII avec préfixe xn--. Les étiquettes déjà ASCII restent inchangées.',
	'tool.encode-punycode-encode-decode.faq.2.question':
		'Cela valide-t-il les règles d’enregistrement DNS ?',
	'tool.encode-punycode-encode-decode.faq.2.answer':
		'Conversion Punycode style RFC 3492 / 5891. Les contrôles complets UTS #46 pour l’enregistrement dépassent cet outil.',
	'tool.encode-punycode-encode-decode.faq.3.question':
		'Pourquoi un Web Worker pour de gros textes ?',
	'tool.encode-punycode-encode-decode.faq.3.answer':
		'Au-delà de 500 Ko, le traitement quitte le thread principal pour garder l’interface fluide.',
	'tool.encode-punycode-encode-decode.use_case.0':
		'Prévisualiser l’aspect DNS (xn--) d’un hôte ou domaine de messagerie Unicode',
	'tool.encode-punycode-encode-decode.use_case.1':
		'Décoder des hôtes xn-- issus de journaux, certificats ou outils de développement',
	'tool.encode-punycode-encode-decode.use_case.2':
		'Convertir des exemples IDN dans la documentation ou les tickets support',
	'tool.encode-punycode-encode-decode.use_case.3':
		'Déboguer URL et e-mails mélangeant étiquettes ASCII et internationalisées',
	// ── Punycode / IDN UI ─────────────────────────────────────────────────────
	'ui.punycode.tab_label': 'Punycode',
	'ui.punycode.action_label': 'Action',
	'ui.punycode.action.encode': 'Unicode → ASCII (IDN)',
	'ui.punycode.action.decode': 'ASCII → Unicode',
	'ui.punycode.hint':
		'Noms de domaine et e-mails internationalisés : les étiquettes Unicode deviennent ASCII avec xn-- ; décoder inverse le processus.',
	'ui.punycode.loading_library': 'Chargement de Punycode…',
	'ui.punycode.library_load_failed': 'Impossible de charger la bibliothèque Punycode.',
	'ui.punycode.worker_active': 'Grande entrée (>{size}). Traitement dans un Web Worker.',
	'ui.punycode.worker_failed': 'Échec du Worker. Retour au thread principal.',
	'ui.punycode.worker_badge': 'Worker',
	'ui.punycode.button.swap_direction': 'Inverser la direction',
	'ui.punycode.button.apply_output': 'Appliquer la sortie à l’entrée',
	'ui.punycode.input_label': 'Entrée',
	'ui.punycode.output_label': 'Sortie',
	'ui.punycode.input_placeholder': 'Domaine ou e-mail avec Unicode, ou ASCII avec segments xn--…',
	'ui.punycode.output_placeholder': 'IDN ASCII ou Unicode décodé s’affiche ici…',
	'ui.punycode.characters': 'caractères',
	'ui.punycode.toast.applied': 'La sortie a été appliquée à l’entrée',
	'ui.punycode.error.invalid_punycode':
		'Punycode ou domaine invalide. Vérifiez les étiquettes et les préfixes xn--.',
	'ui.punycode.error.processing': 'Échec de la conversion : {detail}',
	// ── Encoder / Décoder URL — chaînes d’interface ──────────────────────────
	'ui.encode_url.tab_label': 'URL',
	'ui.encode_url.action_label': 'Action',
	'ui.encode_url.action.encode': 'Encoder',
	'ui.encode_url.action.decode': 'Décoder',
	'ui.encode_url.mode_label': 'Mode',
	'ui.encode_url.mode.component': 'Composant URL',
	'ui.encode_url.mode.full_url': 'URL complète',
	'ui.encode_url.input_label': 'Entrée',
	'ui.encode_url.output_label': 'Sortie',
	'ui.encode_url.input_placeholder': 'Collez du texte, des paramètres query ou une URL complète...',
	'ui.encode_url.output_placeholder': 'La sortie encodée ou décodée s’affiche ici...',
	'ui.encode_url.option.encode_spaces_as_plus': 'Encoder les espaces en +',
	'ui.encode_url.option.decode_plus_as_space': 'Décoder + comme espace',
	'ui.encode_url.worker_active':
		'Entrée volumineuse détectée (>{size}). Le traitement s’exécute dans un Web Worker.',
	'ui.encode_url.worker_failed': 'Échec du traitement Worker. Repli sur le thread principal.',
	'ui.encode_url.worker_badge': 'Worker',
	'ui.encode_url.warning.no_changes':
		'Aucune modification détectée pour le mode et l’action sélectionnés.',
	'ui.encode_url.error.invalid_url_encoding': 'Entrée URL invalide : {detail}',
	'ui.encode_url.button.swap_direction': 'Inverser le sens',
	'ui.encode_url.button.apply_output': 'Appliquer la sortie à l’entrée',
	'ui.encode_url.toast.applied': 'La sortie a été appliquée à l’entrée',
	'ui.encode_url.characters': 'caractères',
	'category.qr.display_name': 'QR',
	'category.qr.description':
		'Générez des QR codes dans votre navigateur avec export SVG/PNG, logo centré, contrôles de couleurs et niveaux de correction pensés pour un scan fiable.',
	'category.qr.primary_keyword': 'outils qr',
	'tool.qr-code-generator.display_name': 'Générateur de QR Code',
	'tool.qr-code-generator.tagline':
		'Générez des QR codes de marque avec aperçu en direct, export SVG/PNG, couleurs, marge et logo centré',
	'tool.qr-code-generator.description':
		'Créez des QR codes faciles à scanner directement dans votre navigateur. Ajustez la taille, la zone de silence, les couleurs, le fond transparent, le niveau de correction et le logo centré, puis exportez des SVG ou PNG prêts pour la production sans envoyer de données à un serveur.',
	'tool.qr-code-generator.primary_keyword': 'generateur qr code',
	'tool.qr-code-generator.meta_title':
		'Générateur de QR Code — SVG, PNG, Couleurs et Logo | fmtly.dev',
	'tool.qr-code-generator.meta_description':
		'Générez des QR codes en ligne avec aperçu en direct, export SVG/PNG, couleurs personnalisées, zone de silence, fond transparent et logo. Privé et 100% navigateur.',
	'tool.qr-code-generator.operation': 'Générer un QR Code',
	'tool.qr-code-generator.faq.0.question': 'Mon contenu QR est-il envoyé à un serveur ?',
	'tool.qr-code-generator.faq.0.answer':
		'Non. La génération du QR se fait entièrement dans votre navigateur. Le texte, l’URL, le payload Wi-Fi ou tout autre contenu reste sur votre appareil.',
	'tool.qr-code-generator.faq.1.question': 'Quels formats d’export sont pris en charge ?',
	'tool.qr-code-generator.faq.1.answer':
		'L’outil exporte à la fois en SVG et en PNG. Le SVG est idéal pour l’impression, les design systems et la mise à l’échelle sans perte, tandis que le PNG est pratique pour le partage rapide et les visuels sociaux.',
	'tool.qr-code-generator.faq.2.question': 'À quoi sert la correction d’erreur ?',
	'tool.qr-code-generator.faq.2.answer':
		'Un niveau de correction plus élevé rend le QR code plus résistant aux dégâts, à la compression et aux logos centraux, mais réduit la quantité de contenu qu’un seul code peut contenir.',
	'tool.qr-code-generator.faq.3.question': 'Pourquoi un texte très long peut-il échouer ?',
	'tool.qr-code-generator.faq.3.answer':
		'Un QR code a une capacité de données limitée. Si votre contenu est trop volumineux pour le niveau de correction choisi, réduisez le payload ou utilisez une URL de redirection plus courte.',
	'tool.qr-code-generator.use_case.0':
		'Générer des QR codes pour des landing pages, installations d’apps ou URLs de campagne',
	'tool.qr-code-generator.use_case.1':
		'Créer des QR codes de marque avec logo centré pour affiches, packaging et supports imprimés',
	'tool.qr-code-generator.use_case.2':
		'Exporter des ressources SVG nettes pour Figma, design systems ou documentation technique',
	'tool.qr-code-generator.use_case.3':
		'Tester l’impact de la marge, des couleurs et de la correction sur la fiabilité du scan avant publication',
	'tool.qr-code-reader.display_name': 'Lecteur de QR code',
	'tool.qr-code-reader.tagline':
		'Lisez des QR codes depuis des images dans le navigateur — décodage rapide, collage depuis le presse-papiers et Web Worker optionnel',
	'tool.qr-code-reader.description':
		'Téléchargez un PNG, JPG ou WebP ou collez une capture pour extraire instantanément le contenu du QR. Le décodage est local ; les grandes images peuvent utiliser des Web Workers — sans envoi serveur ni compte.',
	'tool.qr-code-reader.primary_keyword': 'lecteur qr code en ligne',
	'tool.qr-code-reader.meta_title':
		'Lecteur de QR code — Scanner des images et coller des captures | fmtly',
	'tool.qr-code-reader.meta_description':
		'Lisez des QR codes depuis des images dans le navigateur. Glisser-déposer, appareil photo, collage depuis le presse-papiers et décodage Web Worker pour les grandes photos. Privé et hors serveur.',
	'tool.qr-code-reader.operation': 'Lire un QR code',
	'tool.qr-code-reader.faq.0.question': 'Mes images sont-elles envoyées sur un serveur ?',
	'tool.qr-code-reader.faq.0.answer':
		'Non. Les images sont traitées entièrement dans votre navigateur avec JavaScript et, si besoin, des Web Workers.',
	'tool.qr-code-reader.faq.1.question': 'Quels formats d’image sont les plus fiables ?',
	'tool.qr-code-reader.faq.1.answer':
		'Le PNG et le JPG sont en général les plus fiables. Le WebP et le GIF fonctionnent aussi. Les images très petites ou très compressées peuvent être plus difficiles à décoder.',
	'tool.qr-code-reader.faq.2.question': 'À quoi sert un Web Worker ?',
	'tool.qr-code-reader.faq.2.answer':
		'Les grandes photos produisent de gros tampons de pixels. Externaliser le décodage garde le défilement et la saisie fluides pendant l’analyse.',
	'tool.qr-code-reader.faq.3.question': 'Puis-je scanner un QR depuis une capture d’écran ?',
	'tool.qr-code-reader.faq.3.answer':
		'Oui. Copiez une image dans le presse-papiers et collez-la sur cette page, ou enregistrez la capture puis importez-la.',
	'tool.qr-code-reader.use_case.0':
		'Ouvrir des QR Wi‑Fi, des liens d’événement ou des deep links d’app depuis une photo',
	'tool.qr-code-reader.use_case.1':
		'Vérifier des visuels marketing avec QR avant impression en contrôlant l’URL extraite',
	'tool.qr-code-reader.use_case.2': 'Décoder un QR depuis une capture sans installer d’application',
	'tool.qr-code-reader.use_case.3':
		'Récupérer du texte ou une vCard depuis des photos de badges de conférence',
	'tool.barcode-generator.display_name': 'Générateur de codes-barres',
	'tool.barcode-generator.tagline':
		'Créez du Code 128, EAN-13, UPC-A, ITF-14 et plus en SVG ou PNG nets — prêt pour l’impression et les scanners',
	'tool.barcode-generator.description':
		'Générez des codes-barres 1D professionnels dans le navigateur avec aperçu en direct. Choisissez la symbologie, réglez largeur, hauteur, zone de silence et couleurs, puis exportez en SVG ou PNG. Les charges très volumineuses peuvent être rendues dans un Web Worker pour garder l’interface fluide — rien ne quitte votre appareil.',
	'tool.barcode-generator.primary_keyword': 'générateur code barres en ligne',
	'tool.barcode-generator.meta_title': 'Générateur codes-barres — Code 128, EAN-13, UPC | fmtly',
	'tool.barcode-generator.meta_description':
		'Générateur de codes-barres dans le navigateur : Code 128, EAN-13, UPC-A, ITF-14, Codabar, MSI, pharmacode et plus. Couleurs, zone de silence, export SVG et PNG. Mode Web Worker privé pour les charges énormes.',
	'tool.barcode-generator.operation': 'Générer un code-barres',
	'tool.barcode-generator.faq.0.question': 'Mes données sont-elles envoyées sur un serveur ?',
	'tool.barcode-generator.faq.0.answer':
		'Non. Le rendu utilise JavaScript dans votre navigateur. Les entrées volumineuses peuvent être traitées dans un Web Worker sur votre appareil.',
	'tool.barcode-generator.faq.1.question': 'Quelle symbologie pour le retail ?',
	'tool.barcode-generator.faq.1.answer':
		'Pour la caisse, EAN-13 ou UPC-A. Pour la logistique de cartons, ITF-14. Le Code 128 est flexible pour des données alphanumériques.',
	'tool.barcode-generator.faq.2.question': 'Pourquoi exporter en SVG ?',
	'tool.barcode-generator.faq.2.answer':
		'Le SVG reste net à toute taille d’impression et convient au packaging et au design. Le PNG est pratique pour des aperçus raster rapides.',
	'tool.barcode-generator.faq.3.question': 'Quand un Web Worker est-il utilisé ?',
	'tool.barcode-generator.faq.3.answer':
		'Lorsque la charge utile dépasse environ 500 Ko de texte UTF-8, la génération s’exécute dans un Web Worker pour garder la page réactive.',
	'tool.barcode-generator.use_case.0':
		'Produire des symboles ITF-14 et Code 128 pour étiquettes d’entrepôt et cartons',
	'tool.barcode-generator.use_case.1':
		'Générer des visuels EAN-13 ou UPC-A pour maquettes d’emballage avant impression',
	'tool.barcode-generator.use_case.2':
		'Exporter des codes-barres SVG pour chartes graphiques ou documentation',
	'tool.barcode-generator.use_case.3':
		'Créer des symboles Codabar ou MSI pour systèmes hérités et outils internes',
	'category.crypto.display_name': 'Crypto',
	'category.crypto.description':
		'Hachage, HMAC, empreintes fichier, robustesse des mots de passe, UUID/ULID, clés RSA/EC, inspection X.509, TOTP et chaînes aléatoires — le tout dans le navigateur.',
	'category.crypto.primary_keyword': 'outils cryptographiques dans le navigateur',
	'tool.random-string-generator.display_name': 'Générateur de chaînes aléatoires',
	'tool.random-string-generator.tagline':
		'Chaînes aléatoires sécurisées avec préréglages, alphabets personnalisés, séparateurs et Web Worker',
	'tool.random-string-generator.description':
		'Créez des chaînes aléatoires pour mots de passe, jetons, identifiants et données de test avec Web Crypto getRandomValues—sans envoi ni serveur. Choisissez alphanumérique, hexadécimal, numérique, Base64 URL-safe ou un alphabet personnalisé ; excluez les caractères ambigus ; contrôlez longueur, nombre et séparateurs ; les gros calculs passent dans un Web Worker.',
	'tool.random-string-generator.primary_keyword': 'générateur de chaînes aléatoires',
	'tool.random-string-generator.meta_title':
		'Chaînes aléatoires — Crypto sécurisée navigateur | fmtly',
	'tool.random-string-generator.meta_description':
		'Générez des chaînes aléatoires fortes dans le navigateur. Préréglages, alphabet personnalisé, lots, mode sans ambiguïté et Web Worker. Privé et instantané.',
	'tool.random-string-generator.operation': 'Générer des chaînes aléatoires',
	'tool.random-string-generator.faq.0.question': 'Est-ce adapté aux mots de passe et clés API ?',
	'tool.random-string-generator.faq.0.answer':
		'Les chaînes utilisent crypto.getRandomValues avec un tirage sans biais. Pour les mots de passe, privilégiez une grande longueur, un alphabet large et une bonne gestion des secrets.',
	'tool.random-string-generator.faq.1.question': 'Pourquoi un Web Worker parfois ?',
	'tool.random-string-generator.faq.1.answer':
		'Les très grandes sorties ou alphabets énormes peuvent bloquer l’interface. Au-delà d’un seuil, le travail est délégué pour garder la page fluide.',
	'tool.random-string-generator.faq.2.question': 'Que fait « exclure les caractères ambigus » ?',
	'tool.random-string-generator.faq.2.answer':
		'Cela retire des préréglages les caractères faciles à confondre (0/O, 1/l, etc.) pour faciliter la copie manuelle.',
	'tool.random-string-generator.faq.3.question': 'Mes données sont-elles envoyées à un serveur ?',
	'tool.random-string-generator.faq.3.answer':
		'Non. La génération se fait entièrement dans votre navigateur. Rien n’est téléversé ni journalisé par fmtly.',
	'tool.random-string-generator.use_case.0':
		'Générer des jetons de réinitialisation, codes d’invitation et secrets à usage unique localement',
	'tool.random-string-generator.use_case.1':
		'Créer des jeux de test avec longueur, jeu de caractères et sortie multiligne maîtrisés',
	'tool.random-string-generator.use_case.2':
		'Chaînes alphabet Base64 URL-safe pour identifiants et IDs opaques',
	'tool.random-string-generator.use_case.3':
		'Alphabets personnalisés pour simulations, jeux et systèmes contraints',
	'tool.hash-generator.display_name': 'Générateur de hash',
	'tool.hash-generator.tagline':
		'Empreintes MD5 et famille SHA pour tout texte UTF-8 — privé et instantané',
	'tool.hash-generator.description':
		'Calcule les hash MD5, SHA-1, SHA-256, SHA-384 et SHA-512 de texte collé avec Web Crypto (et MD5 audité). Les grandes entrées sont déléguées à un Web Worker pour garder l’interface fluide.',
	'tool.hash-generator.primary_keyword': 'générateur hash en ligne md5 sha256',
	'tool.hash-generator.meta_title': 'Générateur de hash — MD5 et SHA dans le navigateur | fmtly',
	'tool.hash-generator.meta_description':
		'Générez des hash MD5, SHA-1, SHA-256, SHA-384 et SHA-512 en local. Pas d’envoi. Web Worker pour les gros textes.',
	'tool.hash-generator.operation': 'Hasher du texte',
	'tool.hash-generator.faq.0.question': 'MD5 est-il encore utile ?',
	'tool.hash-generator.faq.0.answer':
		'MD5 est hérité et inadapté à l’intégrité en contexte sécurité. Il reste courant pour les sommes de contrôle et la compatibilité. Préférez SHA-256 pour les nouveaux designs.',
	'tool.hash-generator.faq.1.question': 'Pourquoi le grand texte utilise-t-il un worker ?',
	'tool.hash-generator.faq.1.answer':
		'Hasher des mégaoctets sur le thread principal peut figer la page. Au-delà d’un seuil, le travail passe dans un Web Worker.',
	'tool.hash-generator.faq.2.question': 'Quel encodage est utilisé ?',
	'tool.hash-generator.faq.2.answer':
		'L’entrée est hashée en octets UTF-8, comme le attendent généralement les développeurs.',
	'tool.hash-generator.faq.3.question': 'Les données partent-elles vers un serveur ?',
	'tool.hash-generator.faq.3.answer': 'Non. Tout s’exécute localement dans votre navigateur.',
	'tool.hash-generator.use_case.0':
		'Vérifier téléchargements et configs contre les sommes publiées',
	'tool.hash-generator.use_case.1':
		'Comparer des empreintes fichier sans envoyer le fichier (pour les binaires utilisez Hash fichier)',
	'tool.hash-generator.use_case.2': 'Déboguer des charges API et le hashing canonique de chaînes',
	'tool.hash-generator.use_case.3': 'Produire des résumés rapides pour journaux et clés de cache',
	'tool.hmac-generator.display_name': 'Générateur HMAC',
	'tool.hmac-generator.tagline': 'Signatures HMAC-SHA à clé pour messages et vecteurs de test',
	'tool.hmac-generator.description':
		'Calcule HMAC avec SHA-1, SHA-256, SHA-384 ou SHA-512. Secret et message restent dans l’onglet ; les longs messages peuvent utiliser un Web Worker.',
	'tool.hmac-generator.primary_keyword': 'générateur hmac en ligne',
	'tool.hmac-generator.meta_title': 'Générateur HMAC — HMAC SHA dans le navigateur | fmtly',
	'tool.hmac-generator.meta_description':
		'Signatures HMAC avec hash et secret configurables. Uniquement dans le navigateur, pas d’envoi, worker pour longs messages.',
	'tool.hmac-generator.operation': 'Calculer HMAC',
	'tool.hmac-generator.faq.0.question': 'Comment formater la clé ?',
	'tool.hmac-generator.faq.0.answer':
		'La clé est interprétée en texte UTF-8, comme dans beaucoup d’exemples d’API. Pour des clés binaires brutes, décodez d’abord l’hex ailleurs.',
	'tool.hmac-generator.faq.1.question': 'Est-ce la même chose que signer un JWT ?',
	'tool.hmac-generator.faq.1.answer':
		'JWT utilise un encodage précis (segments Base64URL). Cet outil est du HMAC brut sur les octets du message pour débogage et vecteurs de test.',
	'tool.hmac-generator.faq.2.question': 'Pourquoi éviter SHA-1 ?',
	'tool.hmac-generator.faq.2.answer':
		'SHA-1 est hérité. HMAC-SHA1 apparaît encore dans d’anciens systèmes, mais préférez SHA-256 pour le travail neuf.',
	'tool.hmac-generator.faq.3.question': 'Les secrets sont-ils stockés ?',
	'tool.hmac-generator.faq.3.answer':
		'Les secrets restent uniquement en mémoire de page. Videz le champ à la fin — fmtly n’envoie pas vos données.',
	'tool.hmac-generator.use_case.0': 'Reproduire des vecteurs de test de signature webhook',
	'tool.hmac-generator.use_case.1': 'Vérifier des briques de signature façon AWS',
	'tool.hmac-generator.use_case.2': 'Comparer les sorties à OpenSSL ou aux bibliothèques',
	'tool.hmac-generator.use_case.3': 'Enseigner MAC vs hash en cours',
	'tool.file-hash-calculator.display_name': 'Calculateur de hash fichier',
	'tool.file-hash-calculator.tagline':
		'MD5, SHA-256 et CRC32 de tout fichier local — jamais envoyé',
	'tool.file-hash-calculator.description':
		'Glissez un fichier pour calculer MD5, SHA-256 et CRC32 dans le navigateur. Les gros fichiers sont hashés dans un Web Worker pour garder l’interface fluide.',
	'tool.file-hash-calculator.primary_keyword': 'calculateur hash fichier sha256',
	'tool.file-hash-calculator.meta_title': 'Hash fichier — MD5, SHA-256, CRC32 | fmtly',
	'tool.file-hash-calculator.meta_description':
		'Hash fichier local : MD5, SHA-256, CRC32. Pas d’upload cloud. Worker pour gros fichiers.',
	'tool.file-hash-calculator.operation': 'Hasher des fichiers localement',
	'tool.file-hash-calculator.faq.0.question': 'Les fichiers sont-ils envoyés ?',
	'tool.file-hash-calculator.faq.0.answer':
		'Non. Le fichier est lu via l’API File et traité uniquement en mémoire dans votre navigateur.',
	'tool.file-hash-calculator.faq.1.question': 'Pourquoi trois algorithmes ?',
	'tool.file-hash-calculator.faq.1.answer':
		'SHA-256 est une empreinte moderne ; MD5 figure dans d’anciens manifestes ; CRC32 dans zip et piles réseau.',
	'tool.file-hash-calculator.faq.2.question': 'Et la RAM pour les fichiers énormes ?',
	'tool.file-hash-calculator.faq.2.answer':
		'Tout le fichier est chargé en mémoire pour le hash. Les très gros fichiers peuvent exiger assez de RAM libre.',
	'tool.file-hash-calculator.faq.3.question': 'Puis-je vérifier des téléchargements ?',
	'tool.file-hash-calculator.faq.3.answer':
		'Oui — comparez le résumé calculé à celui de l’éditeur. Préférez SHA-256 lorsqu’il est publié.',
	'tool.file-hash-calculator.use_case.0': 'Vérifier les sommes d’ISO et d’installateurs',
	'tool.file-hash-calculator.use_case.1': 'Comparer des artefacts de build entre nœuds CI',
	'tool.file-hash-calculator.use_case.2': 'Empreinter des assets avant pièce jointe ticket',
	'tool.file-hash-calculator.use_case.3':
		'Contrôles d’intégrité rapides sur archives et jeux de données',
	'tool.password-strength-meter.display_name': 'Jauge de force du mot de passe',
	'tool.password-strength-meter.tagline':
		'Entropie, zxcvbn et fuites — sans envoyer votre mot de passe',
	'tool.password-strength-meter.description':
		'Estime l’entropie, affiche le score zxcvbn et interroge Have I Been Pwned en k-anonymat (préfixe SHA-1 seul). Votre mot de passe complet ne quitte pas le navigateur.',
	'tool.password-strength-meter.primary_keyword': 'test force mot de passe',
	'tool.password-strength-meter.meta_title': 'Force du mot de passe — Entropie et HIBP | fmtly',
	'tool.password-strength-meter.meta_description':
		'Analysez la force avec entropie et zxcvbn. Contrôle HIBP optionnel en k-anonymat. Tout en local dans le navigateur.',
	'tool.password-strength-meter.operation': 'Analyser la force du mot de passe',
	'tool.password-strength-meter.faq.0.question': 'Comment fonctionne la vérification de fuites ?',
	'tool.password-strength-meter.faq.0.answer':
		'Votre mot de passe est hashé en SHA-1 localement. Seuls les cinq premiers caractères hex vont à Have I Been Pwned — conception k-anonymat.',
	'tool.password-strength-meter.faq.1.question': 'fmtly voit-il mon mot de passe ?',
	'tool.password-strength-meter.faq.1.answer':
		'Non. L’analyse tourne dans votre navigateur. L’API de fuites ne reçoit jamais le mot de passe complet.',
	'tool.password-strength-meter.faq.2.question': 'zxcvbn suffit-il ?',
	'tool.password-strength-meter.faq.2.answer':
		'zxcvbn est une heuristique solide. Combinez avec des mots de passe uniques et un gestionnaire.',
	'tool.password-strength-meter.faq.3.question': 'Et hors ligne ?',
	'tool.password-strength-meter.faq.3.answer':
		'Entropie et zxcvbn fonctionnent ; le nombre de fuites peut manquer sans réseau.',
	'tool.password-strength-meter.use_case.0': 'Accompagner les utilisateurs à l’inscription',
	'tool.password-strength-meter.use_case.1': 'Comparer des idées de phrase secrète avant adoption',
	'tool.password-strength-meter.use_case.2': 'Ateliers sensibilisation sans installer de logiciel',
	'tool.password-strength-meter.use_case.3': 'Expliquer longueur et diversité',
	'tool.uuid-generator.display_name': 'Générateur UUID / ULID',
	'tool.uuid-generator.tagline': 'UUID v4, UUID v7 et lots ULID avec décodage temps ULID',
	'tool.uuid-generator.description':
		'Génère des UUID v4 aléatoires, UUID v7 triables par temps et identifiants ULID. Décode les horodatages ULID localement. Jusqu’à 500 valeurs par lot pour fixtures.',
	'tool.uuid-generator.primary_keyword': 'générateur uuid v7 ulid',
	'tool.uuid-generator.meta_title': 'Générateur UUID v4, v7 et ULID | fmtly',
	'tool.uuid-generator.meta_description':
		'Créez des UUID v4, v7 et ULID en série. Décodez le temps ULID dans le navigateur. Pas de stockage serveur.',
	'tool.uuid-generator.operation': 'Générer des identifiants',
	'tool.uuid-generator.faq.0.question': 'Quel ID utiliser ?',
	'tool.uuid-generator.faq.0.answer':
		'v4 pour l’aléa pur ; v7 ou ULID pour des IDs ordonnés dans le temps et un tri base de données plus simple.',
	'tool.uuid-generator.faq.1.question': 'Sont-ils aléatoires au sens cryptographique ?',
	'tool.uuid-generator.faq.1.answer':
		'UUID v4/v7 et ULID utilisent l’aléa sécurisé du navigateur lorsqu’il est disponible.',
	'tool.uuid-generator.faq.2.question': 'Que montre le décodage ULID ?',
	'tool.uuid-generator.faq.2.answer':
		'ULID embarque un horodatage millisecondes dans les premiers caractères ; nous le convertissons en heure ISO.',
	'tool.uuid-generator.faq.3.question': 'Puis-je exporter ?',
	'tool.uuid-generator.faq.3.answer':
		'Copiez le lot depuis la sortie ou utilisez le presse-papiers — fmtly ne stocke rien.',
	'tool.uuid-generator.use_case.0': 'Remplir des bases avec des identifiants réalistes',
	'tool.uuid-generator.use_case.1': 'Générer des IDs de corrélation pour démos de tracing',
	'tool.uuid-generator.use_case.2': 'Créer des IDs triables pour flux d’événements',
	'tool.uuid-generator.use_case.3': 'Prototyper des API avec champs UUID ou ULID',
	'tool.keypair-generator.display_name': 'Générateur de paire de clés RSA / EC',
	'tool.keypair-generator.tagline':
		'Clés PEM RSA-PSS et ECDSA via Web Crypto — privées à votre session',
	'tool.keypair-generator.description':
		'Génère des paires RSA 2048/4096 et ECDSA P-256/P-384, exportées en PEM. Les clés ne quittent pas le navigateur ; téléchargez ou copiez depuis la page.',
	'tool.keypair-generator.primary_keyword': 'générer clé rsa pem navigateur',
	'tool.keypair-generator.meta_title': 'Paire de clés RSA et EC (PEM) | fmtly',
	'tool.keypair-generator.meta_description':
		'Créez des paires RSA et courbes elliptiques au format PEM avec Web Crypto. Uniquement côté client.',
	'tool.keypair-generator.operation': 'Générer des paires de clés',
	'tool.keypair-generator.faq.0.question': 'Quels algorithmes ?',
	'tool.keypair-generator.faq.0.answer':
		'RSA avec RSA-PSS et SHA-256 ; EC avec ECDSA et courbes NIST. Export PKIX SPKI et PKCS#8 PEM.',
	'tool.keypair-generator.faq.1.question': 'Sont-ce des clés de production ?',
	'tool.keypair-generator.faq.1.answer':
		'Ce sont de vraies clés Web Crypto — protégez le matériel privé et suivez la politique de votre organisation.',
	'tool.keypair-generator.faq.2.question': 'Utilisables pour TLS ?',
	'tool.keypair-generator.faq.2.answer':
		'Il faut encore un certificat signé par une CA (ou votre PKI). Cet outil ne produit que des paires brutes.',
	'tool.keypair-generator.faq.3.question': 'Où sont stockées les clés privées ?',
	'tool.keypair-generator.faq.3.answer':
		'Uniquement en mémoire de page jusqu’à fermeture ou rechargement. Sauvegardez-les de façon sûre si besoin.',
	'tool.keypair-generator.use_case.0': 'Tester la signature JWT avec des PEM locaux',
	'tool.keypair-generator.use_case.1': 'Clés jetables pour conteneurs de dev',
	'tool.keypair-generator.use_case.2': 'Enseigner la crypto asymétrique avec PEM exportable',
	'tool.keypair-generator.use_case.3': 'Comparer tailles de clés RSA vs courbe elliptique',
	'tool.certificate-decoder.display_name': 'Décodeur de certificats',
	'tool.certificate-decoder.tagline':
		'Analyse des certificats PEM X.509 : sujet, SAN, validité, empreinte',
	'tool.certificate-decoder.description':
		'Chargez un certificat PEM pour inspecter sujet, émetteur, fenêtre de validité, algorithme de signature, noms alternatifs du sujet et empreinte SHA-256 — analysé localement.',
	'tool.certificate-decoder.primary_keyword': 'décodeur certificat x509 pem',
	'tool.certificate-decoder.meta_title': 'Décodeur X.509 — Inspecteur PEM | fmtly',
	'tool.certificate-decoder.meta_description':
		'Décodez des PEM dans le navigateur. SAN, validité, algorithmes, empreintes — sans envoi.',
	'tool.certificate-decoder.operation': 'Décoder des certificats',
	'tool.certificate-decoder.faq.0.question': 'Valide-t-il la chaîne de confiance ?',
	'tool.certificate-decoder.faq.0.answer':
		'Il parse et affiche les champs. La validation complète contre les magasins de confiance dépasse ce visualiseur léger.',
	'tool.certificate-decoder.faq.1.question': 'Pourquoi ce format d’empreinte ?',
	'tool.certificate-decoder.faq.1.answer':
		'Nous affichons SHA-256 en hex séparé par deux-points — format admin courant.',
	'tool.certificate-decoder.faq.2.question': 'Puis-je coller du DER ?',
	'tool.certificate-decoder.faq.2.answer':
		'Le décodeur accepte PEM et les encodages supportés par l’analyseur ; PEM avec en-têtes est le plus simple.',
	'tool.certificate-decoder.faq.3.question': 'Le certificat est-il envoyé ?',
	'tool.certificate-decoder.faq.3.answer':
		'Non. L’analyse se fait entièrement dans votre navigateur.',
	'tool.certificate-decoder.use_case.0': 'Lire vite SAN et expiration en incident',
	'tool.certificate-decoder.use_case.1': 'Comparer métadonnées cert dev vs prod',
	'tool.certificate-decoder.use_case.2':
		'Documenter les problèmes de poignée de main avec empreintes exactes',
	'tool.certificate-decoder.use_case.3': 'Enseigner X.509 sans openssl installé',
	'tool.totp-generator.display_name': 'Générateur TOTP',
	'tool.totp-generator.tagline':
		'Codes RFC 6238 à partir de secrets Base32 — comme les apps d’authentification',
	'tool.totp-generator.description':
		'Génère des mots de passe à usage unique basés sur le temps avec période, chiffres et algorithme HMAC configurables. Le secret reste local ; les codes se rafraîchissent chaque seconde.',
	'tool.totp-generator.primary_keyword': 'générateur totp authentificateur',
	'tool.totp-generator.meta_title': 'Générateur TOTP — OTP RFC 6238 | fmtly',
	'tool.totp-generator.meta_description':
		'Calcule TOTP depuis secrets Base32. Période, chiffres, SHA-1/256/512 configurables. Uniquement dans le navigateur.',
	'tool.totp-generator.operation': 'Générer des codes TOTP',
	'tool.totp-generator.faq.0.question': 'Pourquoi Base32 ?',
	'tool.totp-generator.faq.0.answer':
		'Les apps d’authentification livrent souvent des secrets en Base32. Nous décodons en octets avant le HMAC.',
	'tool.totp-generator.faq.1.question': 'Remplace-t-il Google Authenticator ?',
	'tool.totp-generator.faq.1.answer':
		'Il reflète le calcul pour le débogage. Gardez l’app téléphone comme second facteur principal.',
	'tool.totp-generator.faq.2.question': 'Dérive d’horloge ?',
	'tool.totp-generator.faq.2.answer':
		'Les codes dépendent de l’heure UTC. Un décalage important peut désynchroniser le serveur — synchronisez l’horloge.',
	'tool.totp-generator.faq.3.question': 'Le secret est-il stocké ?',
	'tool.totp-generator.faq.3.answer':
		'Uniquement en mémoire tant que cet onglet est ouvert. Effacez-le ensuite.',
	'tool.totp-generator.use_case.0':
		'Vérifier des implémentations d’authentificateur en développement',
	'tool.totp-generator.use_case.1': 'Comparer les codes aux vecteurs de test RFC',
	'tool.totp-generator.use_case.2': 'Faire tourner les secrets avec un générateur de confiance',
	'tool.totp-generator.use_case.3': 'Le support reproduit des incidents MFA',
	'ui.random_string.tab_label': 'Aléatoire',
	'ui.random_string.simple_hint':
		'Ajustez la longueur et les types de caractères — la sortie se met à jour automatiquement.',
	'ui.random_string.length_with_value': 'Longueur : {n}',
	'ui.random_string.characters_used': 'Caractères utilisés',
	'ui.random_string.pick.upper': 'ABC',
	'ui.random_string.pick.lower': 'abc',
	'ui.random_string.pick.digits': '123',
	'ui.random_string.pick.symbols': '#$&',
	'ui.random_string.preset_active_hint':
		'Un préréglage de jeu de caractères est actif. Ouvrez Avancé et passez à « Choix » pour ABC / abc / 123 / symboles.',
	'ui.random_string.advanced.title': 'Avancé',
	'ui.random_string.exact_length': 'Longueur exacte',
	'ui.random_string.slider_hint':
		'Le curseur convient pour des longueurs 1–256. Saisissez ici des chaînes plus longues (jusqu’à 100 000).',
	'ui.random_string.regenerate': 'Régénérer',
	'ui.random_string.decrease_length': 'Réduire la longueur',
	'ui.random_string.increase_length': 'Augmenter la longueur',
	'ui.random_string.mode.pick': 'Choix (cases)',
	'ui.random_string.strength.very_weak': 'Très faible',
	'ui.random_string.strength.weak': 'Faible',
	'ui.random_string.strength.fair': 'Correct',
	'ui.random_string.strength.strong': 'Fort',
	'ui.random_string.strength.very_strong': 'Très fort',
	'ui.random_string.toast.one_charset': 'Sélectionnez au moins un type de caractère.',
	'ui.random_string.generate': 'Générer',
	'ui.random_string.processing': 'Traitement…',
	'ui.random_string.length_label': 'Longueur par chaîne',
	'ui.random_string.count_label': 'Nombre de chaînes',
	'ui.random_string.charset_label': 'Jeu de caractères',
	'ui.random_string.custom_charset_label': 'Caractères personnalisés',
	'ui.random_string.custom_charset_placeholder':
		'Saisissez les caractères exacts à échantillonner…',
	'ui.random_string.separator_label': 'Séparateur entre chaînes',
	'ui.random_string.charset.alphanumeric': 'Alphanumérique',
	'ui.random_string.charset.hex_lower': 'Hex (minuscules)',
	'ui.random_string.charset.hex_upper': 'Hex (majuscules)',
	'ui.random_string.charset.numeric': 'Numérique',
	'ui.random_string.charset.base64url': 'Base64 URL-safe',
	'ui.random_string.charset.custom': 'Personnalisé',
	'ui.random_string.separator.newline': 'Saut de ligne',
	'ui.random_string.separator.comma': 'Virgule',
	'ui.random_string.separator.space': 'Espace',
	'ui.random_string.separator.none': 'Aucun (concat)',
	'ui.random_string.exclude_ambiguous': 'Exclure les caractères visuellement ambigus (0/O, 1/l, …)',
	'ui.random_string.output_label': 'Sortie',
	'ui.random_string.panel_options_heading': 'Options de génération',
	'ui.random_string.panel_options_hint':
		'Longueur, nombre, jeu de caractères et séparation entre les chaînes.',
	'ui.random_string.output_placeholder': 'Les chaînes générées apparaissent ici',
	'ui.random_string.worker_active':
		'Grande entrée détectée (>{size}). La génération s’exécute dans un Web Worker.',
	'ui.random_string.worker_failed': 'Échec du Worker. Retour au thread principal.',
	'ui.random_string.worker_badge': 'Worker',
	'ui.random_string.toast.generated': 'Chaînes aléatoires générées',
	'ui.random_string.toast.cleared': 'Sortie effacée',
	'ui.random_string.toast.nothing_to_download': 'Rien à télécharger pour l’instant',
	'ui.random_string.error.invalid_length': 'La longueur doit être dans la plage autorisée.',
	'ui.random_string.error.invalid_count': 'Le nombre doit être dans la plage autorisée.',
	'ui.random_string.error.empty_charset': 'Choisissez un jeu de caractères non vide.',
	'ui.random_string.error.charset_too_large': 'Le jeu de caractères est trop grand.',
	'ui.random_string.error.crypto_unavailable':
		'Web Crypto n’est pas disponible dans cet environnement.',
	'ui.random_string.error.unknown': 'Impossible de générer les chaînes.',
	'ui.crypto.tab.hash': 'Hash',
	'ui.crypto.tab.hmac': 'HMAC',
	'ui.crypto.tab.file_hash': 'Fichier',
	'ui.crypto.tab.password': 'Mot de passe',
	'ui.crypto.tab.uuid': 'UUID',
	'ui.crypto.tab.keypair': 'Clés',
	'ui.crypto.tab.cert': 'Cert.',
	'ui.crypto.tab.totp': 'TOTP',
	'ui.hash.intro':
		'Hasher du texte avec MD5 ou SHA. Tout s’exécute dans votre navigateur — rien n’est envoyé.',
	'ui.hash.sample_input': 'fmtly',
	'ui.hash.input_label': 'Entrée (UTF-8)',
	'ui.hash.regenerate': 'Recalculer',
	'ui.hash.error_failed': 'Impossible de calculer le hash.',
	'ui.hash.worker_label': 'Worker',
	'ui.hash.worker_hint':
		'Les grandes entrées utilisent automatiquement un Web Worker pour garder la page fluide.',
	'ui.hmac.intro':
		'Calculez HMAC avec votre secret. Les clés restent dans cet onglet — jamais envoyées au serveur.',
	'ui.hmac.sample_message': 'message',
	'ui.hmac.sample_secret': 'secret',
	'ui.hmac.secret_label': 'Secret',
	'ui.hmac.message_label': 'Message (UTF-8)',
	'ui.hmac.regenerate': 'Recalculer',
	'ui.hmac.error_failed': 'Impossible de calculer le HMAC.',
	'ui.hmac.worker_hint':
		'Les longs messages utilisent automatiquement un Web Worker pour garder la page fluide.',
	'ui.file_hash.intro':
		'MD5, SHA-256 et CRC32 de tout fichier — traité uniquement localement dans votre navigateur.',
	'ui.file_hash.drop_zone': 'Déposez un fichier ici ou cliquez pour choisir',
	'ui.file_hash.drop_hint': 'Les fichiers ne sont jamais envoyés.',
	'ui.file_hash.rehash': 'Re-hasher',
	'ui.file_hash.error_failed': 'Impossible de hasher le fichier.',
	'ui.file_hash.worker_hint':
		'Les gros fichiers utilisent automatiquement un Web Worker pour garder la page fluide.',
	'ui.password_strength.intro':
		'Entropie, zxcvbn et Have I Been Pwned (k-anonymat). Votre mot de passe ne quitte le navigateur que pour la requête de plage anonyme.',
	'ui.password_strength.field_label': 'Mot de passe',
	'ui.password_strength.show': 'Afficher',
	'ui.password_strength.hide': 'Masquer',
	'ui.password_strength.bits': 'bits',
	'ui.password_strength.band.very_weak': 'Très faible',
	'ui.password_strength.band.weak': 'Faible',
	'ui.password_strength.band.fair': 'Moyen',
	'ui.password_strength.band.good': 'Bon',
	'ui.password_strength.band.strong': 'Fort',
	'ui.password_strength.summary.entropy': 'Entropie (estimation)',
	'ui.password_strength.summary.crack': 'Temps de cassage (approx.)',
	'ui.password_strength.summary.zxcvbn': 'Score zxcvbn',
	'ui.password_strength.summary.pwned': 'Fuites connues (HIBP)',
	'ui.password_strength.summary.pwned_unknown':
		'Vérification des fuites indisponible (hors ligne ou erreur).',
	'ui.password_strength.zxcvbn_label': 'Score zxcvbn',
	'ui.password_strength.hibp_label': 'Nombre HIBP',
	'ui.uuid.intro':
		'UUID v4, UUID v7 et ULID — générés localement. ULID contient un horodatage décodable.',
	'ui.uuid.count': 'Nombre',
	'ui.uuid.regenerate': 'Régénérer',
	'ui.uuid.output_label': 'Identifiants générés',
	'ui.uuid.ulid_decode_label': 'Décoder l’heure ULID',
	'ui.uuid.ulid_placeholder': 'Collez un ULID',
	'ui.uuid.ulid_decode_invalid': 'ULID invalide',
	'ui.uuid.decode': 'Décoder',
	'ui.keypair.intro':
		'Paires de clés RSA (PSS) et ECDSA au format PEM. Générées uniquement dans votre navigateur via Web Crypto.',
	'ui.keypair.bits': 'bits',
	'ui.keypair.generate': 'Générer',
	'ui.keypair.public': 'Clé publique',
	'ui.keypair.private': 'Clé privée',
	'ui.keypair.error_failed': 'Impossible de générer la paire de clés.',
	'ui.cert.intro':
		'Inspectez des certificats PEM X.509 : sujet, validité, SAN, empreinte — analysé localement.',
	'ui.cert.pem_label': 'Certificat PEM',
	'ui.cert.placeholder_hint': 'Collez un certificat encodé PEM…',
	'ui.cert.subject': 'Sujet',
	'ui.cert.issuer': 'Émetteur',
	'ui.cert.serial': 'Numéro de série',
	'ui.cert.valid_from': 'Valide du',
	'ui.cert.valid_to': 'Valide au',
	'ui.cert.sig_alg': 'Signature',
	'ui.cert.public_key': 'Clé publique',
	'ui.cert.fp256': 'Empreinte SHA-256',
	'ui.cert.san': 'Noms alternatifs du sujet',
	'ui.cert.redo': 'Décoder à nouveau',
	'ui.totp.intro':
		'TOTP RFC 6238 à partir d’un secret Base32. Correspond aux apps d’authentification quand les réglages coïncident.',
	'ui.totp.secret_label': 'Secret (Base32)',
	'ui.totp.period': 'Période (s)',
	'ui.totp.digits': 'Chiffres',
	'ui.totp.code_label': 'Code',
	'ui.totp.refresh': 'Actualiser',
	'ui.totp.error_failed': 'Secret ou paramètres invalides.',
	'ui.qr.tab_label': 'QR',
	'ui.qr.tab_reader': 'Lire',
	'ui.qr.tab_barcode': 'Code-barres',
	'ui.qr.characters': 'caractères',
	'ui.qr.output_empty': 'Générez un QR code pour le prévisualiser et l’exporter.',
	'ui.qr.preview_alt': 'Aperçu du QR code généré',
	'ui.qr.worker_active':
		'Entrée volumineuse détectée (>{size}). La génération du QR s’exécute dans un Web Worker.',
	'ui.qr.worker_failed': 'Échec du Worker. Retour à la génération sur le thread principal.',
	'ui.qr.worker_badge': 'Worker',
	'ui.qr.content_label': 'Contenu QR',
	'ui.qr.encoding_hint': 'Texte, URLs, payloads Wi-Fi, vCards ou deep links applicatifs',
	'ui.qr.input_placeholder':
		'Collez ici une URL, du texte brut, un payload Wi-Fi ou tout contenu compatible QR...',
	'ui.qr.preview_label': 'Aperçu en direct',
	'ui.qr.copy_svg': 'Copier le SVG',
	'ui.qr.download_svg': 'Télécharger le SVG',
	'ui.qr.download_png': 'Télécharger le PNG',
	'ui.qr.empty_state':
		'Saisissez un contenu pour générer un aperçu QR avec sortie SVG et PNG prête à exporter.',
	'ui.qr.metric.version': 'Version',
	'ui.qr.metric.modules': 'Modules',
	'ui.qr.metric.mask': 'Masque',
	'ui.qr.metric.segments': 'Segments',
	'ui.qr.scan_readiness_label': 'Préparation au scan',
	'ui.qr.scan_readiness.excellent': 'Excellente fiabilité de scan',
	'ui.qr.scan_readiness.excellent_hint':
		'Ces réglages sont bien équilibrés pour des scans fiables à l’écran comme à l’impression.',
	'ui.qr.scan_readiness.balanced': 'Configuration équilibrée',
	'ui.qr.scan_readiness.balanced_hint':
		'Ce QR devrait bien se scanner, mais une correction plus forte ou une plus grande zone de silence peuvent améliorer la robustesse.',
	'ui.qr.scan_readiness.risky': 'Risque pour le scan',
	'ui.qr.scan_readiness.risky_hint':
		'Les réglages actuels peuvent réduire la fiabilité du scan. Augmentez la zone de silence ou la correction, surtout avec un logo.',
	'ui.qr.section.reliability': 'Fiabilité',
	'ui.qr.section.appearance': 'Apparence',
	'ui.qr.section.logo': 'Logo centré (optionnel)',
	'ui.qr.error_correction_hint':
		'Une correction plus forte résiste mieux aux dégâts, rayures et logos, mais réduit légèrement la capacité totale.',
	'ui.qr.size_label': 'Taille',
	'ui.qr.margin_label': 'Zone de silence',
	'ui.qr.dark_color_label': 'Premier plan',
	'ui.qr.light_color_label': 'Arrière-plan',
	'ui.qr.transparent': 'Transparent',
	'ui.qr.transparent_background_label': 'Arrière-plan transparent',
	'ui.qr.logo_hint':
		'Ajoute un petit logo au centre du QR code pour des affiches, menus, packagings ou supports imprimés de marque. Laissez vide pour le scan le plus fiable.',
	'ui.qr.upload_logo': 'Téléverser un logo',
	'ui.qr.logo_preview_alt': 'Aperçu du logo téléversé',
	'ui.qr.logo_scale_label': 'Taille du logo',
	'ui.qr.remove_logo': 'Retirer le logo',
	'ui.qr.logo_empty':
		'Aucun logo sélectionné. Cette option est facultative et utile seulement si vous voulez afficher votre marque au centre du QR code. Laissez vide pour des scans plus simples et plus fiables.',
	'ui.qr.error.invalid_logo': 'Veuillez téléverser une image valide pour le logo.',
	'ui.qr.error.input_too_long':
		'Ce texte est trop volumineux pour tenir dans un seul QR code. Raccourcissez le contenu ou supprimez une partie des données.',
	'ui.qr.error.generation_failed': 'La génération du QR a échoué : {detail}',
	'ui.qr.error.png_export_failed': 'L’export PNG a échoué pour ce QR code.',
	'ui.qr.warning.logo_overlay_low_error_correction':
		'Un logo centré avec une correction L ou M peut réduire la fiabilité du scan. Préférez Q ou H.',
	'ui.qr.toast.logo_added': 'Logo ajouté au QR',
	'ui.qr.toast.logo_removed': 'Logo retiré du QR',
	'ui.qr.reader.upload': 'Importer',
	'ui.qr.reader.camera': 'Appareil photo',
	'ui.qr.reader.drop_title': 'Déposez une image ici',
	'ui.qr.reader.drop_hint':
		'PNG, JPG, WebP, GIF ou SVG. Les grandes images sont décodées hors du thread principal. Vous pouvez aussi coller une capture.',
	'ui.qr.reader.drop_aria': 'Importer ou déposer une image à analyser',
	'ui.qr.reader.preview_alt': 'Aperçu de l’image importée',
	'ui.qr.reader.result_label': 'Contenu décodé',
	'ui.qr.reader.empty_state':
		'Le texte décodé s’affiche ici. Votre image ne quitte pas le navigateur.',
	'ui.qr.reader.status_decoding': 'Analyse de l’image…',
	'ui.qr.reader.status_ok': '{size} · {ms} ms',
	'ui.qr.reader.error_no_qr':
		'Aucun QR code détecté. Essayez une photo plus nette, une meilleure lumière ou un cadrage plus large.',
	'ui.qr.reader.error_decode':
		'Impossible de lire cette image. Essayez un autre fichier ou un autre format.',
	'ui.qr.reader.error_load':
		'Impossible de charger cette image. Essayez un PNG, JPG ou WebP depuis votre appareil.',
	'ui.qr.reader.error_type': 'Veuillez choisir un fichier image.',
	'ui.qr.reader.worker_active':
		'Image volumineuse ({size}). Le décodage s’exécute dans un Web Worker pour garder l’interface fluide.',
	'ui.qr.reader.worker_badge': 'Worker',
	'ui.qr.reader.worker_failed':
		'Échec du décodage dans le Worker. Nouvelle tentative sur le thread principal.',
	'ui.barcode.characters': 'caractères',
	'ui.barcode.content_label': 'Données du code-barres',
	'ui.barcode.input_placeholder': 'Saisissez ou collez la charge utile pour la symbologie choisie…',
	'ui.barcode.format_label': 'Symbologie',
	'ui.barcode.format_hint':
		'Les GTIN retail utilisent EAN/UPC ; en logistique, souvent Code 128 ou ITF-14.',
	'ui.barcode.preview_label': 'Aperçu',
	'ui.barcode.preview_alt': 'Aperçu du code-barres',
	'ui.barcode.output_empty': 'Générez un code-barres pour le prévisualiser et l’exporter.',
	'ui.barcode.raster_only': 'PNG seulement (worker)',
	'ui.barcode.empty_preview':
		'Ajustez données et options pour afficher un aperçu vectoriel ou raster.',
	'ui.barcode.copy_svg': 'Copier le SVG',
	'ui.barcode.copy_png': 'Copier la data URL PNG',
	'ui.barcode.copy_svg_unavailable': 'Aucun SVG disponible pour cet aperçu.',
	'ui.barcode.download_svg': 'SVG',
	'ui.barcode.download_png': 'PNG',
	'ui.barcode.section.appearance': 'Apparence',
	'ui.barcode.display_value': 'Afficher le texte lisible',
	'ui.barcode.bar_width': 'Largeur des barres',
	'ui.barcode.bar_height': 'Hauteur des barres',
	'ui.barcode.font_size': 'Taille du libellé',
	'ui.barcode.quiet_zone': 'Zone de silence',
	'ui.barcode.line_color': 'Barres',
	'ui.barcode.background': 'Arrière-plan',
	'ui.barcode.worker_active':
		'Charge volumineuse ({size}). La génération s’exécute dans un Web Worker.',
	'ui.barcode.worker_badge': 'Worker',
	'ui.barcode.worker_failed': 'Échec du Worker. Nouvelle tentative sur le thread principal.',
	'ui.barcode.error.empty': 'Saisissez une valeur à encoder.',
	'ui.barcode.error.invalid_value': 'Cette valeur ne correspond pas au format sélectionné.',
	'ui.barcode.error.generation_failed': 'Impossible de générer le code-barres : {detail}',
	'ui.barcode.error.ean13': 'EAN-13 nécessite 12 ou 13 chiffres.',
	'ui.barcode.error.ean8': 'EAN-8 nécessite 7 ou 8 chiffres.',
	'ui.barcode.error.upc': 'UPC-A nécessite 11 ou 12 chiffres.',
	'ui.barcode.error.itf14': 'ITF-14 nécessite 13 ou 14 chiffres.',
	'ui.barcode.error.itf': 'ITF nécessite un nombre pair de chiffres (au moins deux).',
	'ui.barcode.error.msi': 'MSI encode uniquement des chiffres.',
	'ui.barcode.error.pharmacode': 'Le pharmacode doit être un entier entre 1 et 131070.',
	'ui.barcode.format.CODE128': 'Code 128',
	'ui.barcode.format.CODE39': 'Code 39',
	'ui.barcode.format.CODE93': 'Code 93',
	'ui.barcode.format.codabar': 'Codabar',
	'ui.barcode.format.EAN13': 'EAN-13',
	'ui.barcode.format.EAN8': 'EAN-8',
	'ui.barcode.format.UPC': 'UPC-A',
	'ui.barcode.format.ITF14': 'ITF-14',
	'ui.barcode.format.ITF': 'ITF (entrelacé)',
	'ui.barcode.format.MSI': 'MSI',
	'ui.barcode.format.MSI10': 'MSI (mod 10)',
	'ui.barcode.format.MSI11': 'MSI (mod 11)',
	'ui.barcode.format.MSI1010': 'MSI (mod 1010)',
	'ui.barcode.format.MSI1110': 'MSI (mod 1110)',
	'ui.barcode.format.pharmacode': 'Pharmacode',

	// Missing keys from English
	'tool.csv-diff.display_name': 'tool.csv-diff.display_name',
	'tool.csv-diff.tagline': 'tool.csv-diff.tagline',
	'tool.csv-diff.description': 'tool.csv-diff.description',
	'tool.csv-diff.primary_keyword': 'tool.csv-diff.primary_keyword',
	'tool.csv-diff.meta_title': 'tool.csv-diff.meta_title',
	'tool.csv-diff.meta_description': 'tool.csv-diff.meta_description',
	'tool.csv-diff.operation': 'tool.csv-diff.operation',
	'tool.csv-diff.faq.0.question': 'tool.csv-diff.faq.0.question',
	'tool.csv-diff.faq.0.answer': 'tool.csv-diff.faq.0.answer',
	'tool.csv-diff.faq.1.question': 'tool.csv-diff.faq.1.question',
	'tool.csv-diff.faq.1.answer': 'tool.csv-diff.faq.1.answer',
	'tool.csv-diff.use_case.0': 'tool.csv-diff.use_case.0',
	'tool.csv-diff.use_case.1': 'tool.csv-diff.use_case.1',
	'ui.validator.mode': 'ui.validator.mode',
	'ui.validator.paste_yaml': 'ui.validator.paste_yaml',
	'ui.validator.yaml_paste_schema': 'ui.validator.yaml_paste_schema',
	'ui.validator.yaml_validating_schema': 'ui.validator.yaml_validating_schema',
	'ui.validator.yaml_matches_schema': 'ui.validator.yaml_matches_schema',
	'ui.validator.yaml_matches_current_schema': 'ui.validator.yaml_matches_current_schema',
	'ui.validator.yaml_schema_title': 'ui.validator.yaml_schema_title',
	'ui.validator.yaml_schema_standard': 'ui.validator.yaml_schema_standard',
	'ui.validator.yaml_paste_schema_placeholder': 'ui.validator.yaml_paste_schema_placeholder',
	'ui.validator.yaml_schema_validation_desc': 'ui.validator.yaml_schema_validation_desc',
	'ui.whitespace_cleaner.output': 'ui.whitespace_cleaner.output',
	'ui.whitespace_cleaner.statistics': 'ui.whitespace_cleaner.statistics',
	'ui.whitespace_cleaner.normalized': 'ui.whitespace_cleaner.normalized',

	'category.generate.display_name': 'Générateurs',
	'category.generate.description':
		'Générez données de test, identifiants, mots de passe, .gitignore et README — instantanément dans le navigateur.',
	'category.generate.primary_keyword': 'générateurs pour développeurs',
	'tool.fake-data-generator.display_name': 'Générateur de données factices',
	'tool.fake-data-generator.tagline': 'Lignes réalistes pour QA et démos',
	'tool.fake-data-generator.description':
		'Générez noms, e-mails, adresses et plus avec Faker et locale. Export JSON, CSV ou SQL INSERT. Gros volumes en Web Worker.',
	'tool.fake-data-generator.primary_keyword': 'générateur de données factices',
	'tool.fake-data-generator.meta_title': 'Générateur de données factices — JSON, CSV, SQL | fmtly',
	'tool.fake-data-generator.meta_description':
		"Gratuit dans le navigateur : champs, langue, lignes, export JSON/CSV/SQL. Pas d'envoi ; Worker pour les très gros résultats.",
	'tool.fake-data-generator.operation': 'generate',
	'tool.fake-data-generator.faq.0.question': 'Les données sont-elles vraiment aléatoires ?',
	'tool.fake-data-generator.faq.0.answer':
		'Produites avec Faker et Web Crypto. Réservé aux tests — jamais comme données personnelles réelles.',
	'tool.fake-data-generator.faq.1.question': 'Quand un worker est-il utilisé ?',
	'tool.fake-data-generator.faq.1.answer':
		"Nombre de lignes élevé ou sortie estimée > ~500 Ko hors thread principal pour garder l'interface fluide.",
	'tool.fake-data-generator.faq.2.question': "Quels formats d'export ?",
	'tool.fake-data-generator.faq.2.answer':
		"Tableau JSON d'objets, CSV avec en-tête ou INSERT SQL vers la table choisie.",
	'tool.fake-data-generator.faq.3.question': 'Mes données quittent-elles le navigateur ?',
	'tool.fake-data-generator.faq.3.answer': "Non. Tout est local ; fmtly n'envoie rien au serveur.",
	'tool.fake-data-generator.use_case.0': "Alimenter tests d'intégration et bases de staging",
	'tool.fake-data-generator.use_case.1': 'Démos sans données réelles',
	'tool.fake-data-generator.use_case.2': 'Prototyper imports CSV et pipelines ETL',
	'tool.fake-data-generator.use_case.3': 'Partager des échantillons reproductibles',
	'tool.uuid-batch-generator.display_name': "Générateur d'UUID en lot",
	'tool.uuid-batch-generator.tagline': "Des milliers d'UUID v4 ou v7",
	'tool.uuid-batch-generator.description':
		'Listes séparées par ligne ou virgule, copie totale ou fichier texte. Gros lots en Web Worker.',
	'tool.uuid-batch-generator.primary_keyword': 'lot uuid',
	'tool.uuid-batch-generator.meta_title': "Générateur d'UUID en lot — v4 et v7 | fmtly",
	'tool.uuid-batch-generator.meta_description':
		"Jusqu'à des centaines de milliers d'UUID v4 ou v7 dans le navigateur. Copier ou télécharger ; worker pour volumes énormes.",
	'tool.uuid-batch-generator.operation': 'generate',
	'tool.uuid-batch-generator.faq.0.question': "Différence avec l'outil UUID unique ?",
	'tool.uuid-batch-generator.faq.0.answer':
		"Ici : listes massives, téléchargement, séparateurs. L'outil crypto : un ID et décodage ULID.",
	'tool.uuid-batch-generator.faq.1.question': 'v4 contre v7 ?',
	'tool.uuid-batch-generator.faq.1.answer':
		'v4 aléatoire. v7 triable par temps (RFC 9562). Les deux générés localement.',
	'tool.uuid-batch-generator.faq.2.question': 'Pourquoi un worker ?',
	'tool.uuid-batch-generator.faq.2.answer':
		"Des centaines de milliers d'UUID peuvent bloquer l'UI ; le worker garde la fluidité.",
	'tool.uuid-batch-generator.faq.3.question': 'Sécurité cryptographique ?',
	'tool.uuid-batch-generator.faq.3.answer':
		'Même paquet uuid que beaucoup de runtimes. Pour menaces élevées, suivez votre politique.',
	'tool.uuid-batch-generator.use_case.0': 'Tests de charge et fixtures',
	'tool.uuid-batch-generator.use_case.1': "Remplir des colonnes d'IDs uniques",
	'tool.uuid-batch-generator.use_case.2': 'Semer des bases avec v7 ordonnés',
	'tool.uuid-batch-generator.use_case.3': 'Collage rapide dans des scripts',
	'tool.generate-password-generator.display_name': 'Générateur de mots de passe',
	'tool.generate-password-generator.tagline': 'Mots de passe forts dans le navigateur',
	'tool.generate-password-generator.description':
		'Longueur et classes de caractères avec Web Crypto. Tirets optionnels et indice zxcvbn local.',
	'tool.generate-password-generator.primary_keyword': 'générateur de mot de passe',
	'tool.generate-password-generator.meta_title':
		'Générateur de mots de passe — sûr et local | fmtly',
	'tool.generate-password-generator.meta_description':
		"Mots de passe avec longueur, symboles, option sans caractères ambigus. Indice zxcvbn local ; rien n'est envoyé.",
	'tool.generate-password-generator.operation': 'generate',
	'tool.generate-password-generator.faq.0.question': "Différence avec l'indicateur de force ?",
	'tool.generate-password-generator.faq.0.answer':
		"Celui-ci crée des mots de passe. L'outil crypto évalue ceux que vous avez déjà.",
	'tool.generate-password-generator.faq.1.question': "Source d'aléa ?",
	'tool.generate-password-generator.faq.1.answer':
		'crypto.getRandomValues dans le navigateur — même API que les contextes sécurisés.',
	'tool.generate-password-generator.faq.2.question': "Que signifie l'indice ?",
	'tool.generate-password-generator.faq.2.answer':
		'zxcvbn estime la facilité de devinette. Local et indicatif.',
	'tool.generate-password-generator.faq.3.question': 'Pour la production ?',
	'tool.generate-password-generator.faq.3.answer':
		'Combinez politiques internes, rotation et coffre-fort de secrets.',
	'tool.generate-password-generator.use_case.0': 'Nouveaux comptes admin ou service',
	'tool.generate-password-generator.use_case.1': 'Secrets temporaires pour démos',
	'tool.generate-password-generator.use_case.2': 'Haute entropie avec symboles obligatoires',
	'tool.generate-password-generator.use_case.3': 'Ateliers bonnes pratiques',
	'tool.gitignore-builder.display_name': 'Constructeur .gitignore',
	'tool.gitignore-builder.tagline': "Fusion de règles d'exclusion courantes",
	'tool.gitignore-builder.description':
		'Choisissez stacks et environnements — Node, Python, Rust, bruit OS, IDE — fusion en un .gitignore. Modèles statiques, sans réseau.',
	'tool.gitignore-builder.primary_keyword': 'générateur gitignore',
	'tool.gitignore-builder.meta_title': 'Constructeur .gitignore — modèles fusionnés | fmtly',
	'tool.gitignore-builder.meta_description':
		'Fusionnez des fragments type gitignore pour langages, Docker, Terraform, éditeurs. Copie en un clic.',
	'tool.gitignore-builder.operation': 'generate',
	'tool.gitignore-builder.faq.0.question': 'Comme gitignore.io ?',
	'tool.gitignore-builder.faq.0.answer':
		'Fragments inspirés de modèles courants ; fusion locale sans API.',
	'tool.gitignore-builder.faq.1.question': 'Puis-je éditer le résultat ?',
	'tool.gitignore-builder.faq.1.answer':
		'Oui — copiez dans le dépôt et ajustez. Ordre déterministe.',
	'tool.gitignore-builder.faq.2.question': 'Pourquoi fusionner ?',
	'tool.gitignore-builder.faq.2.answer':
		'Règles plus petites et pertinentes réduisent le bruit et les conflits.',
	'tool.gitignore-builder.faq.3.question': 'Traçage des choix ?',
	'tool.gitignore-builder.faq.3.answer': 'Non. Tout reste dans le navigateur.',
	'tool.gitignore-builder.use_case.0': 'Démarrer un dépôt avec des défauts sensés',
	'tool.gitignore-builder.use_case.1': 'Ajouter vite OS et éditeurs',
	'tool.gitignore-builder.use_case.2': 'Combiner Docker/Terraform avec votre stack',
	'tool.gitignore-builder.use_case.3': "Enseigner l'hygiène Git",
	'tool.readme-template-generator.display_name': 'Modèle README',
	'tool.readme-template-generator.tagline': 'Squelette README en quelques secondes',
	'tool.readme-template-generator.description':
		'Titre, description, installation, usage, licence et badges GitHub optionnels — Markdown propre à coller.',
	'tool.readme-template-generator.primary_keyword': 'générateur readme',
	'tool.readme-template-generator.meta_title': 'Modèle README — Markdown | fmtly',
	'tool.readme-template-generator.meta_description':
		'README.md depuis champs : commandes, usage, licence, badges optionnels. Tout côté client.',
	'tool.readme-template-generator.operation': 'generate',
	'tool.readme-template-generator.faq.0.question': 'Personnaliser après ?',
	'tool.readme-template-generator.faq.0.answer': 'Oui — Markdown brut, étendez comme vous voulez.',
	'tool.readme-template-generator.faq.1.question': 'Badges hors GitHub ?',
	'tool.readme-template-generator.faq.1.answer':
		'Motif type shields pour chemins GitHub ; adaptez les URLs ailleurs.',
	'tool.readme-template-generator.faq.2.question': 'Le nom du projet est-il envoyé ?',
	'tool.readme-template-generator.faq.2.answer': 'Non. Assemblage uniquement localement.',
	'tool.readme-template-generator.faq.3.question': 'Dépôts privés ?',
	'tool.readme-template-generator.faq.3.answer':
		"Oui — pas d'upload ; collez le Markdown manuellement.",
	'tool.readme-template-generator.use_case.0': 'Open source GitHub/GitLab',
	'tool.readme-template-generator.use_case.1': 'Bibliothèques internes avec README homogène',
	'tool.readme-template-generator.use_case.2': 'Hackathons et prototypes',
	'tool.readme-template-generator.use_case.3': 'Enseigner Markdown et bonnes pratiques',
	'ui.generate_fake_data.no_fields': 'Sélectionnez au moins un champ.',
	'ui.generate_fake_data.fields_label': 'Champs',
	'ui.generate_fake_data.rows': 'Lignes',
	'ui.generate_fake_data.format': "Format d'export",
	'ui.generate_fake_data.table': 'Nom de table SQL',
	'ui.generate_fake_data.generate': 'Générer',
	'ui.generate_fake_data.worker_badge': 'Web Worker',
	'ui.generate_fake_data.preview': 'Sortie',
	'ui.generate_fake_data.placeholder': 'Les données générées apparaissent ici…',
	'ui.generate_fake_data.field.fullName': 'Nom complet',
	'ui.generate_fake_data.field.firstName': 'Prénom',
	'ui.generate_fake_data.field.lastName': 'Nom',
	'ui.generate_fake_data.field.email': 'E-mail',
	'ui.generate_fake_data.field.phone': 'Téléphone',
	'ui.generate_fake_data.field.street': 'Rue',
	'ui.generate_fake_data.field.city': 'Ville',
	'ui.generate_fake_data.field.zip': 'Code postal',
	'ui.generate_fake_data.field.country': 'Pays',
	'ui.generate_fake_data.field.company': 'Entreprise',
	'ui.generate_fake_data.field.jobTitle': 'Intitulé du poste',
	'ui.generate_fake_data.field.ipv4': 'IPv4',
	'ui.generate_fake_data.field.date': 'Date',
	'ui.generate_fake_data.field.uuid': 'UUID',
	'ui.generate_uuid_batch.count': 'Nombre',
	'ui.generate_uuid_batch.separator': 'Séparateur',
	'ui.generate_uuid_batch.sep_line': 'Saut de ligne',
	'ui.generate_uuid_batch.sep_comma': 'Virgule',
	'ui.generate_uuid_batch.generate': 'Générer',
	'ui.generate_uuid_batch.worker': 'Web Worker',
	'ui.generate_uuid_batch.output': 'UUID',
	'ui.generate_uuid_batch.placeholder': 'Les UUID générés apparaissent ici…',
	'ui.generate_password.length': 'Longueur',
	'ui.generate_password.upper': 'A–Z',
	'ui.generate_password.lower': 'a–z',
	'ui.generate_password.digits': '0–9',
	'ui.generate_password.symbols': 'Symboles',
	'ui.generate_password.no_ambiguous': 'Éviter les ambigus',
	'ui.generate_password.groups': 'Tiret tous les N caractères (0 = désactivé)',
	'ui.generate_password.regenerate': 'Régénérer',
	'ui.generate_password.strength_hint': 'Indice',
	'ui.generate_password.strength.0': 'Trop facile à deviner',
	'ui.generate_password.strength.1': 'Très faible',
	'ui.generate_password.strength.2': 'Faible',
	'ui.generate_password.strength.3': 'Correct',
	'ui.generate_password.strength.4': 'Fort',
	'ui.generate_password.disclaimer':
		'Généré dans le navigateur avec Web Crypto. Indice via zxcvbn en local — validez les politiques pour secrets critiques.',
	'ui.generate_gitignore.search': 'Filtrer les stacks…',
	'ui.generate_readme.title': 'Titre',
	'ui.generate_readme.license': 'Licence',
	'ui.generate_readme.description': 'Description',
	'ui.generate_readme.install': 'Installation',
	'ui.generate_readme.usage': 'Utilisation',
	'ui.generate_readme.badges': 'Badges style GitHub',
	'ui.generate_readme.repo_user': 'Utilisateur ou org GitHub',
	'ui.generate_readme.repo_name': 'Nom du dépôt',

	'category.pdf.display_name': 'PDF',
	'category.pdf.description':
		'Visualisez, extrayez, fusionnez, divisez et inspectez des fichiers PDF directement dans votre navigateur sans televersement.',
	'category.pdf.primary_keyword': 'outils pdf',
	'tool.pdf-viewer.display_name': 'Visionneuse PDF',
	'tool.pdf-viewer.tagline': 'Affichez les pages PDF avec zoom et navigation',
	'tool.pdf-viewer.description':
		'Ouvrez des PDF dans le navigateur et parcourez les pages avec un zoom fluide et un changement de page rapide.',
	'tool.pdf-viewer.primary_keyword': 'visionneuse pdf',
	'tool.pdf-viewer.meta_title': 'Visionneuse PDF en ligne - fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'Consultez des fichiers PDF dans votre navigateur avec navigation par page et controles de zoom. Aucun envoi requis.',
	'tool.pdf-viewer.operation': 'Voir',
	'tool.pdf-viewer.faq.0.question': 'Les fichiers PDF sont-ils envoyes sur un serveur ?',
	'tool.pdf-viewer.faq.0.answer':
		'Non. Les fichiers restent dans votre navigateur et ne sont jamais televerses.',
	'tool.pdf-viewer.faq.1.question': 'Puis-je parcourir de gros PDF ?',
	'tool.pdf-viewer.faq.1.answer':
		'Oui. Vous pouvez avancer page par page et zoomer pour une lecture plus confortable.',
	'tool.pdf-viewer.faq.2.question': 'Les PDF proteges par mot de passe sont-ils pris en charge ?',
	'tool.pdf-viewer.faq.2.answer':
		'Les PDF chiffres ne sont pas encore pris en charge dans ce mode de visionnage.',
	'tool.pdf-viewer.faq.3.question': 'Quels navigateurs sont recommandes ?',
	'tool.pdf-viewer.faq.3.answer':
		'Les versions recentes de Chrome, Edge, Firefox et Safari offrent la meilleure compatibilite.',
	'tool.pdf-viewer.use_case.0': 'Previsualiser rapidement des pieces jointes avant partage',
	'tool.pdf-viewer.use_case.1': 'Verifier des scans sans logiciel desktop',
	'tool.pdf-viewer.use_case.2': 'Relire de longs PDF avec zoom et controle de page',
	'tool.pdf-viewer.use_case.3': 'Ouvrir des PDF en toute securite dans le navigateur',
	'tool.pdf-to-text.display_name': 'Outil PDF',
	'tool.pdf-to-text.tagline': 'Traitement PDF local',
	'tool.pdf-to-text.description': 'Ce traitement PDF est local dans votre navigateur.',
	'tool.pdf-to-text.primary_keyword': 'outil pdf',
	'tool.pdf-to-text.meta_title': 'Outil PDF - fmtly.dev',
	'tool.pdf-to-text.meta_description': 'Utilisez cet outil PDF localement dans votre navigateur.',
	'tool.pdf-to-text.operation': 'Executer',
	'tool.pdf-to-text.faq.0.question': 'Question frequente',
	'tool.pdf-to-text.faq.0.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-to-text.faq.1.question': 'Question frequente',
	'tool.pdf-to-text.faq.1.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-to-text.faq.2.question': 'Question frequente',
	'tool.pdf-to-text.faq.2.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-to-text.faq.3.question': 'Question frequente',
	'tool.pdf-to-text.faq.3.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-to-text.use_case.0': 'Cas usage PDF',
	'tool.pdf-to-text.use_case.1': 'Cas usage PDF',
	'tool.pdf-to-text.use_case.2': 'Cas usage PDF',
	'tool.pdf-to-text.use_case.3': 'Cas usage PDF',
	'tool.pdf-merge.display_name': 'Outil PDF',
	'tool.pdf-merge.tagline': 'Traitement PDF local',
	'tool.pdf-merge.description': 'Ce traitement PDF est local dans votre navigateur.',
	'tool.pdf-merge.primary_keyword': 'outil pdf',
	'tool.pdf-merge.meta_title': 'Outil PDF - fmtly.dev',
	'tool.pdf-merge.meta_description': 'Utilisez cet outil PDF localement dans votre navigateur.',
	'tool.pdf-merge.operation': 'Executer',
	'tool.pdf-merge.faq.0.question': 'Question frequente',
	'tool.pdf-merge.faq.0.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-merge.faq.1.question': 'Question frequente',
	'tool.pdf-merge.faq.1.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-merge.faq.2.question': 'Question frequente',
	'tool.pdf-merge.faq.2.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-merge.faq.3.question': 'Question frequente',
	'tool.pdf-merge.faq.3.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-merge.use_case.0': 'Cas usage PDF',
	'tool.pdf-merge.use_case.1': 'Cas usage PDF',
	'tool.pdf-merge.use_case.2': 'Cas usage PDF',
	'tool.pdf-merge.use_case.3': 'Cas usage PDF',
	'tool.pdf-split.display_name': 'Outil PDF',
	'tool.pdf-split.tagline': 'Traitement PDF local',
	'tool.pdf-split.description': 'Ce traitement PDF est local dans votre navigateur.',
	'tool.pdf-split.primary_keyword': 'outil pdf',
	'tool.pdf-split.meta_title': 'Outil PDF - fmtly.dev',
	'tool.pdf-split.meta_description': 'Utilisez cet outil PDF localement dans votre navigateur.',
	'tool.pdf-split.operation': 'Executer',
	'tool.pdf-split.faq.0.question': 'Question frequente',
	'tool.pdf-split.faq.0.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-split.faq.1.question': 'Question frequente',
	'tool.pdf-split.faq.1.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-split.faq.2.question': 'Question frequente',
	'tool.pdf-split.faq.2.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-split.faq.3.question': 'Question frequente',
	'tool.pdf-split.faq.3.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-split.use_case.0': 'Cas usage PDF',
	'tool.pdf-split.use_case.1': 'Cas usage PDF',
	'tool.pdf-split.use_case.2': 'Cas usage PDF',
	'tool.pdf-split.use_case.3': 'Cas usage PDF',
	'tool.pdf-page-extractor.display_name': 'Outil PDF',
	'tool.pdf-page-extractor.tagline': 'Traitement PDF local',
	'tool.pdf-page-extractor.description': 'Ce traitement PDF est local dans votre navigateur.',
	'tool.pdf-page-extractor.primary_keyword': 'outil pdf',
	'tool.pdf-page-extractor.meta_title': 'Outil PDF - fmtly.dev',
	'tool.pdf-page-extractor.meta_description':
		'Utilisez cet outil PDF localement dans votre navigateur.',
	'tool.pdf-page-extractor.operation': 'Executer',
	'tool.pdf-page-extractor.faq.0.question': 'Question frequente',
	'tool.pdf-page-extractor.faq.0.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-page-extractor.faq.1.question': 'Question frequente',
	'tool.pdf-page-extractor.faq.1.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-page-extractor.faq.2.question': 'Question frequente',
	'tool.pdf-page-extractor.faq.2.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-page-extractor.faq.3.question': 'Question frequente',
	'tool.pdf-page-extractor.faq.3.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-page-extractor.use_case.0': 'Cas usage PDF',
	'tool.pdf-page-extractor.use_case.1': 'Cas usage PDF',
	'tool.pdf-page-extractor.use_case.2': 'Cas usage PDF',
	'tool.pdf-page-extractor.use_case.3': 'Cas usage PDF',
	'tool.pdf-metadata-viewer.display_name': 'Outil PDF',
	'tool.pdf-metadata-viewer.tagline': 'Traitement PDF local',
	'tool.pdf-metadata-viewer.description': 'Ce traitement PDF est local dans votre navigateur.',
	'tool.pdf-metadata-viewer.primary_keyword': 'outil pdf',
	'tool.pdf-metadata-viewer.meta_title': 'Outil PDF - fmtly.dev',
	'tool.pdf-metadata-viewer.meta_description':
		'Utilisez cet outil PDF localement dans votre navigateur.',
	'tool.pdf-metadata-viewer.operation': 'Executer',
	'tool.pdf-metadata-viewer.faq.0.question': 'Question frequente',
	'tool.pdf-metadata-viewer.faq.0.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-metadata-viewer.faq.1.question': 'Question frequente',
	'tool.pdf-metadata-viewer.faq.1.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-metadata-viewer.faq.2.question': 'Question frequente',
	'tool.pdf-metadata-viewer.faq.2.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-metadata-viewer.faq.3.question': 'Question frequente',
	'tool.pdf-metadata-viewer.faq.3.answer': 'Le traitement est local dans votre navigateur.',
	'tool.pdf-metadata-viewer.use_case.0': 'Cas usage PDF',
	'tool.pdf-metadata-viewer.use_case.1': 'Cas usage PDF',
	'tool.pdf-metadata-viewer.use_case.2': 'Cas usage PDF',
	'tool.pdf-metadata-viewer.use_case.3': 'Cas usage PDF',
	'ui.pdf.select_file': 'Selectionner PDF',
	'ui.pdf.select_file_first': 'Selectionnez d abord un fichier PDF',
	'ui.pdf.worker_used': 'Worker',
	'ui.pdf.bytes': 'bytes',
	'ui.pdf.page': 'Page',
	'ui.pdf.page_ranges_placeholder': 'ex. 1,3-5',
	'ui.pdf.viewer.loaded': 'PDF charge',
	'ui.pdf.viewer.error': 'Impossible d ouvrir le PDF',
	'ui.pdf.viewer.render_error': 'Impossible de rendre la page',
	'ui.pdf.viewer.fit_width_error': 'Impossible d ajuster a la largeur',
	'ui.pdf.viewer.page': 'Page',
	'ui.pdf.viewer.fit_width': 'Ajuster largeur',
	'ui.pdf.viewer.reset_zoom': 'Reinitialiser zoom',
	'ui.pdf.viewer.empty': 'Televersez un PDF pour previsualiser les pages',
	'ui.pdf.to_text.extract': 'Extraire texte',
	'ui.pdf.to_text.done': 'Texte extrait',
	'ui.pdf.to_text.error': 'Echec extraction texte',
	'ui.pdf.to_text.empty': 'Aucun texte a telecharger',
	'ui.pdf.to_text.empty_hint': 'Televersez un PDF puis extrayez texte page par page',
	'ui.pdf.to_text.no_output': 'Aucun texte extrait',
	'ui.pdf.merge.select_files': 'Selectionner fichiers PDF',
	'ui.pdf.merge.select_more': 'Selectionnez au moins deux PDF',
	'ui.pdf.merge.run': 'Fusionner',
	'ui.pdf.merge.done': 'PDF fusionnes',
	'ui.pdf.merge.error': 'Echec fusion PDF',
	'ui.pdf.merge.no_output': 'Aucun PDF fusionne a telecharger',
	'ui.pdf.merge.files_selected': 'fichiers selectionnes',
	'ui.pdf.merge.empty': 'Ajoutez des PDF a fusionner',
	'ui.pdf.split.run': 'Diviser',
	'ui.pdf.split.done': 'Division terminee',
	'ui.pdf.split.error': 'Echec division PDF',
	'ui.pdf.split.empty_hint': 'Televersez un PDF et indiquez les plages',
	'ui.pdf.split.no_output': 'Aucun fichier genere',
	'ui.pdf.extract.run': 'Extraire pages',
	'ui.pdf.extract.done': 'Pages extraites',
	'ui.pdf.extract.error': 'Echec extraction pages',
	'ui.pdf.extract.no_output': 'Aucun PDF de sortie',
	'ui.pdf.extract.empty_hint': 'Televersez un PDF et choisissez les plages',
	'ui.pdf.extract.ready': 'PDF de sortie pret',
	'ui.pdf.metadata.run': 'Lire metadonnees',
	'ui.pdf.metadata.done': 'Metadonnees chargees',
	'ui.pdf.metadata.error': 'Echec lecture metadonnees',
	'ui.pdf.metadata.empty_hint': 'Televersez un PDF pour inspecter les metadonnees',
	'ui.pdf.metadata.no_output': 'Aucune metadonnee chargee',
	'ui.pdf.metadata.title': 'Titre',
	'ui.pdf.metadata.author': 'Auteur',
	'ui.pdf.metadata.subject': 'Sujet',
	'ui.pdf.metadata.keywords': 'Mots-cles',
	'ui.pdf.metadata.creator': 'Createur',
	'ui.pdf.metadata.producer': 'Producteur',
	'ui.pdf.metadata.creation_date': 'Date de creation',
	'ui.pdf.metadata.modification_date': 'Date de modification',
	'ui.pdf.metadata.page_count': 'Nombre de pages',
	'ui.pdf.metadata.file_size': 'Taille du fichier (bytes)',

	// Missing keys from English
	'ui.actions.up': 'ui.actions.up',
	'ui.actions.down': 'ui.actions.down',
	'ui.actions.remove': 'ui.actions.remove',
	'ui.pdf.upload.aria': 'ui.pdf.upload.aria',
	'ui.pdf.upload.drop_title': 'ui.pdf.upload.drop_title',
	'ui.pdf.upload.drop_hint': 'ui.pdf.upload.drop_hint',
	'ui.pdf.upload.browse': 'ui.pdf.upload.browse',
	'ui.pdf.ranges_label': 'ui.pdf.ranges_label',
	'ui.pdf.viewer.hero_title': 'ui.pdf.viewer.hero_title',
	'ui.pdf.viewer.hero_subtitle': 'ui.pdf.viewer.hero_subtitle',
	'ui.pdf.viewer.badge_local': 'ui.pdf.viewer.badge_local',
	'ui.pdf.viewer.pages_word': 'ui.pdf.viewer.pages_word',
	'ui.pdf.viewer.loading': 'ui.pdf.viewer.loading',
	'ui.pdf.viewer.thumbnails_aria': 'ui.pdf.viewer.thumbnails_aria',
	'ui.pdf.viewer.page_list_aria': 'ui.pdf.viewer.page_list_aria',
	'ui.pdf.viewer.page_n': 'ui.pdf.viewer.page_n',
	'ui.pdf.to_text.hero_title': 'ui.pdf.to_text.hero_title',
	'ui.pdf.to_text.hero_subtitle': 'ui.pdf.to_text.hero_subtitle',
	'ui.pdf.to_text.upload_title': 'ui.pdf.to_text.upload_title',
	'ui.pdf.to_text.upload_hint': 'ui.pdf.to_text.upload_hint',
	'ui.pdf.merge.drop_hint': 'ui.pdf.merge.drop_hint',
	'ui.pdf.merge.drop_more': 'ui.pdf.merge.drop_more',
	'ui.pdf.merge.reorder_drag': 'ui.pdf.merge.reorder_drag',
	'ui.pdf.split.hero_title': 'ui.pdf.split.hero_title',
	'ui.pdf.split.hero_subtitle': 'ui.pdf.split.hero_subtitle',
	'ui.pdf.split.upload_title': 'ui.pdf.split.upload_title',
	'ui.pdf.split.upload_hint': 'ui.pdf.split.upload_hint',
	'ui.pdf.extract.hero_title': 'ui.pdf.extract.hero_title',
	'ui.pdf.extract.hero_subtitle': 'ui.pdf.extract.hero_subtitle',
	'ui.pdf.extract.upload_title': 'ui.pdf.extract.upload_title',
	'ui.pdf.extract.upload_hint': 'ui.pdf.extract.upload_hint',
	'ui.pdf.metadata.hero_title': 'ui.pdf.metadata.hero_title',
	'ui.pdf.metadata.hero_subtitle': 'ui.pdf.metadata.hero_subtitle',
	'ui.pdf.metadata.upload_title': 'ui.pdf.metadata.upload_title',
	'ui.pdf.metadata.upload_hint': 'ui.pdf.metadata.upload_hint',

	// Missing keys from English
	'ui.pdf.upload.pill_private': 'ui.pdf.upload.pill_private',
	'ui.pdf.upload.pill_instant': 'ui.pdf.upload.pill_instant',
	'ui.pdf.upload.pill_local': 'ui.pdf.upload.pill_local',
	'ui.pdf.upload.keyboard_hint': 'ui.pdf.upload.keyboard_hint',
	'ui.pdf.viewer.thumbnails_heading': 'ui.pdf.viewer.thumbnails_heading',
	'ui.pdf.viewer.go_page': 'ui.pdf.viewer.go_page',
	'ui.pdf.viewer.zoom_slider': 'ui.pdf.viewer.zoom_slider',
	'ui.pdf.viewer.toolbar_pages': 'ui.pdf.viewer.toolbar_pages',
	'ui.pdf.viewer.toolbar_zoom': 'ui.pdf.viewer.toolbar_zoom',
	'ui.pdf.merge.hero_title': 'ui.pdf.merge.hero_title',
	'ui.pdf.merge.hero_subtitle': 'ui.pdf.merge.hero_subtitle',

	// Missing keys from English
	'ui.pdf.ranges.help': 'ui.pdf.ranges.help',
	'ui.pdf.ranges.valid_summary': 'ui.pdf.ranges.valid_summary',
	'ui.pdf.ranges.document_pages': 'ui.pdf.ranges.document_pages',
	'ui.pdf.ranges.err_empty': 'ui.pdf.ranges.err_empty',
	'ui.pdf.ranges.err_no_pdf_pages': 'ui.pdf.ranges.err_no_pdf_pages',
	'ui.pdf.ranges.err_ambiguous_hyphen': 'ui.pdf.ranges.err_ambiguous_hyphen',
	'ui.pdf.ranges.err_invalid_number': 'ui.pdf.ranges.err_invalid_number',
	'ui.pdf.ranges.err_range_out_of_bounds': 'ui.pdf.ranges.err_range_out_of_bounds',
	'ui.pdf.ranges.err_invalid_range_bounds': 'ui.pdf.ranges.err_invalid_range_bounds',
	'ui.pdf.error.load_failed': 'ui.pdf.error.load_failed',

	// Missing keys from English
	'ui.pdf.upload.input_aria': 'ui.pdf.upload.input_aria',
	'ui.pdf.upload.input_aria_multiple': 'ui.pdf.upload.input_aria_multiple',
	'ui.pdf.split.use_cases_title': 'ui.pdf.split.use_cases_title',
	'ui.pdf.split.use_case.0': 'ui.pdf.split.use_case.0',
	'ui.pdf.split.use_case.1': 'ui.pdf.split.use_case.1',
	'ui.pdf.split.use_case.2': 'ui.pdf.split.use_case.2',
	'ui.pdf.split.use_case.3': 'ui.pdf.split.use_case.3',

	// Missing keys from English
	'ui.pdf.merge.merge_hint':
		'1. Mettez les fichiers dans l’ordre · 2. Appuyez sur Fusionner · 3. Téléchargez le PDF fusionné ci-dessous.',
	'ui.pdf.merge.ready_title': 'Le PDF fusionné est prêt',
	'ui.pdf.merge.ready_subtitle': 'Taille de sortie : {size}. Enregistré en merged.pdf.',
	'ui.pdf.merge.download_primary': 'Télécharger le PDF fusionné',
	'ui.pdf.merge.download_locked': 'Fusionnez d’abord — le bouton de téléchargement apparaîtra ici.',

	// Missing keys from English

	// Missing keys from English
	'tool.json-to-zod.display_name': 'tool.json-to-zod.display_name',
	'tool.json-to-zod.tagline': 'tool.json-to-zod.tagline',
	'tool.json-to-zod.description': 'tool.json-to-zod.description',
	'tool.json-to-zod.primary_keyword': 'tool.json-to-zod.primary_keyword',
	'tool.json-to-zod.meta_title': 'tool.json-to-zod.meta_title',
	'tool.json-to-zod.meta_description': 'tool.json-to-zod.meta_description',
	'tool.json-to-zod.operation': 'tool.json-to-zod.operation',
	'tool.json-to-zod.faq.0.question': 'tool.json-to-zod.faq.0.question',
	'tool.json-to-zod.faq.0.answer': 'tool.json-to-zod.faq.0.answer',
	'tool.json-to-zod.faq.1.question': 'tool.json-to-zod.faq.1.question',
	'tool.json-to-zod.faq.1.answer': 'tool.json-to-zod.faq.1.answer',
	'tool.json-to-zod.faq.2.question': 'tool.json-to-zod.faq.2.question',
	'tool.json-to-zod.faq.2.answer': 'tool.json-to-zod.faq.2.answer',
	'tool.json-to-zod.use_case.0': 'tool.json-to-zod.use_case.0',
	'tool.json-to-zod.use_case.1': 'tool.json-to-zod.use_case.1',
	'tool.json-to-zod.use_case.2': 'tool.json-to-zod.use_case.2',
	'tool.json-to-zod.use_case.3': 'tool.json-to-zod.use_case.3',
	'tool.json-ndjson.display_name': 'tool.json-ndjson.display_name',
	'tool.json-ndjson.tagline': 'tool.json-ndjson.tagline',
	'tool.json-ndjson.description': 'tool.json-ndjson.description',
	'tool.json-ndjson.primary_keyword': 'tool.json-ndjson.primary_keyword',
	'tool.json-ndjson.meta_title': 'tool.json-ndjson.meta_title',
	'tool.json-ndjson.meta_description': 'tool.json-ndjson.meta_description',
	'tool.json-ndjson.operation': 'tool.json-ndjson.operation',
	'tool.json-ndjson.faq.0.question': 'tool.json-ndjson.faq.0.question',
	'tool.json-ndjson.faq.0.answer': 'tool.json-ndjson.faq.0.answer',
	'tool.json-ndjson.faq.1.question': 'tool.json-ndjson.faq.1.question',
	'tool.json-ndjson.faq.1.answer': 'tool.json-ndjson.faq.1.answer',
	'tool.json-ndjson.use_case.0': 'tool.json-ndjson.use_case.0',
	'tool.json-ndjson.use_case.1': 'tool.json-ndjson.use_case.1',
	'tool.json-ndjson.use_case.2': 'tool.json-ndjson.use_case.2',
	'tool.json-from-protobuf.display_name': 'tool.json-from-protobuf.display_name',
	'tool.json-from-protobuf.tagline': 'tool.json-from-protobuf.tagline',
	'tool.json-from-protobuf.description': 'tool.json-from-protobuf.description',
	'tool.json-from-protobuf.primary_keyword': 'tool.json-from-protobuf.primary_keyword',
	'tool.json-from-protobuf.meta_title': 'tool.json-from-protobuf.meta_title',
	'tool.json-from-protobuf.meta_description': 'tool.json-from-protobuf.meta_description',
	'tool.json-from-protobuf.operation': 'tool.json-from-protobuf.operation',
	'tool.json-from-protobuf.faq.0.question': 'tool.json-from-protobuf.faq.0.question',
	'tool.json-from-protobuf.faq.0.answer': 'tool.json-from-protobuf.faq.0.answer',
	'tool.json-from-protobuf.faq.1.question': 'tool.json-from-protobuf.faq.1.question',
	'tool.json-from-protobuf.faq.1.answer': 'tool.json-from-protobuf.faq.1.answer',
	'tool.json-from-protobuf.faq.2.question': 'tool.json-from-protobuf.faq.2.question',
	'tool.json-from-protobuf.faq.2.answer': 'tool.json-from-protobuf.faq.2.answer',
	'tool.json-from-protobuf.use_case.0': 'tool.json-from-protobuf.use_case.0',
	'tool.json-from-protobuf.use_case.1': 'tool.json-from-protobuf.use_case.1',
	'tool.json-from-protobuf.use_case.2': 'tool.json-from-protobuf.use_case.2',
	'tool.yaml-resolve-anchors.display_name': 'tool.yaml-resolve-anchors.display_name',
	'tool.yaml-resolve-anchors.tagline': 'tool.yaml-resolve-anchors.tagline',
	'tool.yaml-resolve-anchors.description': 'tool.yaml-resolve-anchors.description',
	'tool.yaml-resolve-anchors.primary_keyword': 'tool.yaml-resolve-anchors.primary_keyword',
	'tool.yaml-resolve-anchors.meta_title': 'tool.yaml-resolve-anchors.meta_title',
	'tool.yaml-resolve-anchors.meta_description': 'tool.yaml-resolve-anchors.meta_description',
	'tool.yaml-resolve-anchors.operation': 'tool.yaml-resolve-anchors.operation',
	'tool.yaml-resolve-anchors.faq.0.question': 'tool.yaml-resolve-anchors.faq.0.question',
	'tool.yaml-resolve-anchors.faq.0.answer': 'tool.yaml-resolve-anchors.faq.0.answer',
	'tool.yaml-resolve-anchors.faq.1.question': 'tool.yaml-resolve-anchors.faq.1.question',
	'tool.yaml-resolve-anchors.faq.1.answer': 'tool.yaml-resolve-anchors.faq.1.answer',
	'tool.yaml-resolve-anchors.use_case.0': 'tool.yaml-resolve-anchors.use_case.0',
	'tool.yaml-resolve-anchors.use_case.1': 'tool.yaml-resolve-anchors.use_case.1',
	'tool.yaml-resolve-anchors.use_case.2': 'tool.yaml-resolve-anchors.use_case.2',
	'tool.yaml-resolve-anchors.use_case.3': 'tool.yaml-resolve-anchors.use_case.3',
	'tool.yaml-split.display_name': 'tool.yaml-split.display_name',
	'tool.yaml-split.tagline': 'tool.yaml-split.tagline',
	'tool.yaml-split.description': 'tool.yaml-split.description',
	'tool.yaml-split.primary_keyword': 'tool.yaml-split.primary_keyword',
	'tool.yaml-split.meta_title': 'tool.yaml-split.meta_title',
	'tool.yaml-split.meta_description': 'tool.yaml-split.meta_description',
	'tool.yaml-split.operation': 'tool.yaml-split.operation',
	'tool.yaml-split.faq.0.question': 'tool.yaml-split.faq.0.question',
	'tool.yaml-split.faq.0.answer': 'tool.yaml-split.faq.0.answer',
	'tool.yaml-split.faq.1.question': 'tool.yaml-split.faq.1.question',
	'tool.yaml-split.faq.1.answer': 'tool.yaml-split.faq.1.answer',
	'tool.yaml-split.use_case.0': 'tool.yaml-split.use_case.0',
	'tool.yaml-split.use_case.1': 'tool.yaml-split.use_case.1',
	'tool.yaml-split.use_case.2': 'tool.yaml-split.use_case.2',
	'tool.xml-xsd-validate.display_name': 'tool.xml-xsd-validate.display_name',
	'tool.xml-xsd-validate.tagline': 'tool.xml-xsd-validate.tagline',
	'tool.xml-xsd-validate.description': 'tool.xml-xsd-validate.description',
	'tool.xml-xsd-validate.primary_keyword': 'tool.xml-xsd-validate.primary_keyword',
	'tool.xml-xsd-validate.meta_title': 'tool.xml-xsd-validate.meta_title',
	'tool.xml-xsd-validate.meta_description': 'tool.xml-xsd-validate.meta_description',
	'tool.xml-xsd-validate.operation': 'tool.xml-xsd-validate.operation',
	'tool.xml-xsd-validate.faq.0.question': 'tool.xml-xsd-validate.faq.0.question',
	'tool.xml-xsd-validate.faq.0.answer': 'tool.xml-xsd-validate.faq.0.answer',
	'tool.xml-xsd-validate.faq.1.question': 'tool.xml-xsd-validate.faq.1.question',
	'tool.xml-xsd-validate.faq.1.answer': 'tool.xml-xsd-validate.faq.1.answer',
	'tool.xml-xsd-validate.use_case.0': 'tool.xml-xsd-validate.use_case.0',
	'tool.xml-xsd-validate.use_case.1': 'tool.xml-xsd-validate.use_case.1',
	'tool.xml-xsd-validate.use_case.2': 'tool.xml-xsd-validate.use_case.2',
	'tool.csv-columns.display_name': 'tool.csv-columns.display_name',
	'tool.csv-columns.tagline': 'tool.csv-columns.tagline',
	'tool.csv-columns.description': 'tool.csv-columns.description',
	'tool.csv-columns.primary_keyword': 'tool.csv-columns.primary_keyword',
	'tool.csv-columns.meta_title': 'tool.csv-columns.meta_title',
	'tool.csv-columns.meta_description': 'tool.csv-columns.meta_description',
	'tool.csv-columns.operation': 'tool.csv-columns.operation',
	'tool.csv-columns.faq.0.question': 'tool.csv-columns.faq.0.question',
	'tool.csv-columns.faq.0.answer': 'tool.csv-columns.faq.0.answer',
	'tool.csv-columns.faq.1.question': 'tool.csv-columns.faq.1.question',
	'tool.csv-columns.faq.1.answer': 'tool.csv-columns.faq.1.answer',
	'tool.csv-columns.use_case.0': 'tool.csv-columns.use_case.0',
	'tool.csv-columns.use_case.1': 'tool.csv-columns.use_case.1',
	'tool.csv-columns.use_case.2': 'tool.csv-columns.use_case.2',
	'tool.csv-deduplicate.display_name': 'tool.csv-deduplicate.display_name',
	'tool.csv-deduplicate.tagline': 'tool.csv-deduplicate.tagline',
	'tool.csv-deduplicate.description': 'tool.csv-deduplicate.description',
	'tool.csv-deduplicate.primary_keyword': 'tool.csv-deduplicate.primary_keyword',
	'tool.csv-deduplicate.meta_title': 'tool.csv-deduplicate.meta_title',
	'tool.csv-deduplicate.meta_description': 'tool.csv-deduplicate.meta_description',
	'tool.csv-deduplicate.operation': 'tool.csv-deduplicate.operation',
	'tool.csv-deduplicate.faq.0.question': 'tool.csv-deduplicate.faq.0.question',
	'tool.csv-deduplicate.faq.0.answer': 'tool.csv-deduplicate.faq.0.answer',
	'tool.csv-deduplicate.faq.1.question': 'tool.csv-deduplicate.faq.1.question',
	'tool.csv-deduplicate.faq.1.answer': 'tool.csv-deduplicate.faq.1.answer',
	'tool.csv-deduplicate.use_case.0': 'tool.csv-deduplicate.use_case.0',
	'tool.csv-deduplicate.use_case.1': 'tool.csv-deduplicate.use_case.1',
	'tool.csv-deduplicate.use_case.2': 'tool.csv-deduplicate.use_case.2',
	'tool.ndjson.entries_title': 'tool.ndjson.entries_title',
	'tool.json-from-protobuf.message_type': 'tool.json-from-protobuf.message_type',
	'tool.json-from-protobuf.select_message_type': 'tool.json-from-protobuf.select_message_type',
	'tool.xml-xsd-validate.xml_label': 'tool.xml-xsd-validate.xml_label',
	'tool.xml-xsd-validate.xsd_label': 'tool.xml-xsd-validate.xsd_label',
	'tool.xml-xsd-validate.result_title': 'tool.xml-xsd-validate.result_title',
	'tool.xml-xsd-validate.empty_hint': 'tool.xml-xsd-validate.empty_hint',
	'tool.xml-xsd-validate.xml_well_formed_error': 'tool.xml-xsd-validate.xml_well_formed_error',
	'tool.xml-xsd-validate.valid': 'tool.xml-xsd-validate.valid',
	'tool.xml-xsd-validate.invalid': 'tool.xml-xsd-validate.invalid',
	'tool.xml-xsd-validate.warnings': 'tool.xml-xsd-validate.warnings',
	'tool.xml-xsd-validate.errors_title': 'tool.xml-xsd-validate.errors_title',
	'tool.xml-xsd-validate.warnings_title': 'tool.xml-xsd-validate.warnings_title',
	'tool.xml-xsd-validate.waiting_hint': 'tool.xml-xsd-validate.waiting_hint'
};

export default registryFr;

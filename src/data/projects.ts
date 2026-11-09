export default {
  items: [
    {
      title: "Evidence Vault",
      subtitle:
        "Documentez votre cyberharcèlement sans vous y exposer. Surveillance automatique des commentaires Instagram, analyse IA de toxicité, et archivage certifié des preuves.",
      technicalNote:
        "Côté technique : ingestion de contenus non structurés, traitements asynchrones avec reprise sur erreur, enrichissement par scoring IA multilingue, indexation Elasticsearch et garantie d'intégrité par hachage SHA-256.",
      status: "Bêta fermée",
      tags: ["Pipeline de données", "Accompagné par l'IA"],
      technos: [
        "Symfony 8",
        "React 19",
        "PostgreSQL",
        "Elasticsearch",
        "Redis",
        "Docker",
        "BullMQ",
        "Playwright",
        "IA locale",
      ],
      highlight: true,
      features: [
        "Surveillance continue des commentaires Instagram",
        "Score de toxicité IA multilingue",
        "Certification cryptographique SHA-256 & ancrage blockchain",
        "Export dossier PDF de preuves",
      ],
      url: "https://evidencevault.fr",
    },
    {
      title: "Elasticsearch Formula 1",
      status: "Non maintenu",
      subtitle:
        "Ingestion et indexation de plus de 600 000 enregistrements issus de jeux de données open source (CSV) dans Elasticsearch, pour explorer et visualiser l'intégralité des statistiques de l'histoire de la F1.",
      technicalNote:
        "Côté technique : parsing de jeux de données CSV volumineux, modélisation des index Elasticsearch, requêtes d'agrégation pour l'exploration statistique et API Symfony pour l'exposition des données.",
      tags: ["Plus de 600K données", "Accompagné par l'IA"],
      technos: ["Symfony", "Elasticsearch"],
      highlight: true,
      features: [
        "Ingestion de plus de 600 000 enregistrements CSV open source",
        "Indexation et recherche full-text avec Elasticsearch",
        "Exploration et visualisation des statistiques de l'histoire de la F1",
      ],
      git: "https://github.com/Wagle-Studio/elastic_search_formula_1",
      url: "https://f1.wolff-kevin.fr",
    },
    // {
    //   title: "Drop Market",
    //   subtitle:
    //     "Preuve de concept : e-commerce temps réel sans JavaScript côté client, via Symfony Turbo + Mercure + Caddy.",
    //   tags: ["Interface temps réel"],
    //   technos: ["Symfony", "PHP", "Hotwire"],
    //   git: "https://github.com/Wagle-Studio/drop_market",
    //   url: undefined,
    // },
    // {
    //   title: "Leveling",
    //   subtitle:
    //     "API Symfony pour structurer des parcours de progression, avec scénarios générés par agents IA.",
    //   tags: ["AI agents"],
    //   technos: ["Symfony", "PHP", "Design Pattern"],
    //   git: "https://github.com/Wagle-Studio",
    //   url: undefined,
    // },
    {
      title: "Diagramme Merise & UML",
      subtitle:
        "Modélisation entité-relation (MCD Merise) inspirée de Looping : schémas en glisser-déposer avec règles de cohérence intégrées. Une mise en pratique de l'architecture DDD.",
      technicalNote:
        "Côté technique : architecture en couches (Kernel, Domain, Managers, DTO), DTO immuables validés avec Zod, et domaine Merise branché sur un socle commun prêt à accueillir d'autres diagrammes.",
      tags: ["Architecture DDD", "Réalisé sans IA"],
      technos: ["React 19", "TypeScript", "React Flow", "Zod", "SCSS"],
      features: [
        "Entités et associations en glisser-déposer",
        "Cardinalités et contraintes personnalisables",
        "Validation automatique entre schéma et modèle métier",
        "Sauvegardes locales et paramètres",
      ],
      git: "https://github.com/Wagle-Studio/merise_like",
      url: "https://merise.wolff-kevin.fr/",
    },
    {
      title: "File Renamer",
      subtitle:
        "Logiciel de bureau pour renommer des fichiers en lot selon des stratégies configurables. Un projet d'apprentissage pour explorer Java et les patterns de conception en dehors de PHP.",
      technicalNote:
        "Côté technique : architecture MVCI (Model, View, Controller, Interactor) avec JavaFX, patterns Strategy et Factory pour les modes de renommage, injecteur de dépendances maison, et interface mise à jour par propriétés observables et bindings.",
      tags: ["Logiciel de bureau", "Réalisé sans IA"],
      technos: ["Java", "JavaFX", "Maven"],
      features: [
        "Renommage par date de prise de vue (métadonnées EXIF)",
        "Formats snake_case, kebab-case, camelCase et PascalCase",
        "Nom personnalisé ou aléatoire",
        "Statut de chaque fichier : traitable, ignoré, renommé",
      ],
      git: "https://github.com/Wagle-Studio/file_renamer",
      url: undefined,
    },
  ],
};

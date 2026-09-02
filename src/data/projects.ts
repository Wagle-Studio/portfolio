export default {
  items: [
    {
      title: "Evidence Vault",
      subtitle:
        "Documentez votre cyberharcèlement sans vous y exposer. Surveillance automatique des commentaires Instagram, analyse IA de toxicité, et archivage certifié des preuves.",
      technicalNote:
        "Côté technique : ingestion de contenus non structurés, orchestration asynchrone des traitements, jobs asynchrones avec reprise sur erreur, enrichissement par scoring IA multilingue, indexation Elasticsearch et garantie d'intégrité par hachage SHA-256.",
      tags: ["Beta ouverte", "Pipeline de données"],
      technos: [
        "Symfony 8",
        "React 19",
        "PostgreSQL",
        "Elasticsearch",
        "Redis",
        "Docker",
        "BullMQ",
        "Playwright",
        "AI local",
      ],
      highlight: true,
      features: [
        "Surveillance continue des commentaires Instagram",
        "Score de toxicité IA multilingue",
        "Enrichissement par scoring IA multilingue",
        "Certification cryptographique SHA-256 & ancrage blockchain",
        "Export dossier PDF de preuves",
      ],
      url: "https://evidencevault.fr"
    },
    {
      title: "Elastic Search Formula 1",
      subtitle:
        "Ingestion et indexation de plus de 600 000 enregistrements issus de jeux de données open source (CSV) dans Elasticsearch, pour explorer et visualiser l'intégralité des statistiques de l'histoire de la F1.",
      technicalNote:
        "Côté technique : parsing de jeux de données CSV volumineux, modélisation des index Elasticsearch, requêtes d'agrégation pour l'exploration statistique et API Symfony pour l'exposition des données.",
      tags: ["Plus de 600K données"],
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
        "Application DDD de modélisation entité-relation (Merise/UML), inspirée de Looping.",
      tags: ["Architecture DDD"],
      technos: ["React", "TypeScript"],
      git: "https://github.com/Wagle-Studio/Merise",
      url: "https://merise.wolff-kevin.fr/",
    },
    {
      title: "File Renamer",
      subtitle:
        "Mini-logiciel Java pour renommer des fichiers selon des stratégies configurables, exploration des patterns de conception en dehors de PHP.",
      tags: ["Logiciel de bureau"],
      technos: ["Java", "Java FX"],
      git: "https://github.com/Wagle-Studio/file_renamer",
      url: undefined,
    },
  ],
};

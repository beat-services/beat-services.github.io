export default {
  name: 'David Olivari',
  title:
    'Ingénieur Recherche & Développement\nSystème multimédia, embarqué et connecté',
  specialties: [
    'Node.js / Javascript',
    'MongoDB / Redis',
    'Svelte/SvelteKit',
    'UI/UX Design',
    'Linux embarqué',
    'MQTT / RabbitMQ',
    'Kubernetes / Docker ',
    'Python / MicroPython',
  ],
  about:
    "Ingénieur polyvalent à la croisée du web et des systèmes embarqués, je conçois des solutions connectées innovantes combinant expertise technique et vision architecturale acquises durant plus de 20 ans d'expérience dans les secteurs de la santé, l'agriculture et la culture.\n Ma méthode de travail, caractérisée par des cycles intensifs de développement et une attention particulière à la performance et à l'expérience utilisateur, me permet de relever des défis techniques complexes tout en créant des interfaces intuitives.\n Je recherche des projets ambitieux où la technologie répond à des besoins concrets, avec un mode de collaboration privilégiant l'autonomie et des interactions ciblées avec les équipes.",
  sectorExperience: [
    {
      title: 'Technologies culturelles',
      description:
        'Installations interactives et multimédia pour les musées, dispositifs scéniques numériques',
    },
    {
      title: 'HealthTech',
      description:
        'Application de suivi des analyses médicales et interopérabilité avec les systèmes de santé connectés',
    },
    {
      title: 'IOT',
      description:
        "Gestionnaire de reseau Lora pour l'agriculture et l'efficacité énergétique",
    },
    {
      title: 'Industrie 4.0',
      description:
        "Contrôle commande pour l'industrie énergétique, maintenance prédictive",
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: [
        'JavaScript',
        'UI/UX Design',
        'Svelte/SvelteKit',
        'Bootstrap',
        'WASM',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'MongoDB',
        'Redis',
        'GraphQL',
        'Microservices',
        'Server Side Events',
        'PostgreSQL',
        'ElasticSearch',
      ],
    },
    {
      category: 'Infrastructure',
      items: [
        'DevOps',
        'CI/CD',
        'Serverless',
        'Docker',
        'Kubernetes',
        'RabbitMQ',
        'AWS',
        'Scaleway',
      ],
    },
    {
      category: 'IoT et Système embarqué',
      items: [
        'RaspberryPi',
        'Linux embarqué',
        'ESP32',
        'Arduino',
        'MicroPython',
        'LORA',
        'MQTT',
        'BLE',
        'Zigbee',
      ],
    },
  ],
  projects: [
    {
      title: 'Application de gestion de festival',
      description:
        "Ensemble de services pour le festival d'Aurillac : Enregistrement des compagnies, suivie des besoins techniques, gestion des lieux et de la programmation, gestion des accréditations professionnelles, gestion du catering intégrant les besoins alimentaires, édition des badges d'accès, gestion des contacts. Application mobile pour le controle d'accès et la gestion des accréditations",
      technologies: ['SvelteKit', 'Node.js', 'MongoDB', 'Redis', 'Vercel'],
    },
    {
      title: 'Application de santé connectée',
      description:
        "Solution pré et post analytique pour les analyses médicales délocalisé et en laboratoire. Application mobile et web pour les patients et les professionnels de santé. Interopérabilité avec les systèmes de santé connectés. Travail de recherche en design sur la présentation des résultats. Outils utilisant l'IA pour le contrôle des tests rapides",
      technologies: [
        'SvelteKit',
        'Node.js',
        'Kubernetes',
        'MongoDB',
        'Redis',
        'RabbitMQ',
        'AWS',
      ],
    },
    {
      title: 'Dispositif domestique de recyclage des eaux grises',
      description:
        "Système de pilotage d'un appareil de recyclage des eaux grises domestiques. Développement de l'interface utilisateur, gestion des capteurs et des actionneurs. Conception de la carte électronique de pilotage, supervision de l'installation en ligne, collecte de données pour l'analyse des performances",
      technologies: [
        'RaspberryPi',
        'Node.js',
        'Vue.js',
        'MQTT',
        'ElasticSearch',
        'Kibana',
        'Linux Embarqué',
      ],
    },
    {
      title: "Système de suivi d'irrigation",
      description:
        "Plateforme LORA pour la surveillance des sols et l'optimisation des ressources en eau dans le domaine viticole. Application web pour la visualisation des données et l'analyse des performances. Gestion de réseau LoraWan. Interopérabilité avec le système de suivi de consommation en eau",
      technologies: ['LoraWan', 'Node.js', 'Vue.js', 'MQTT', 'RaspberryPi'],
    },
  ],
  contact: {
    email: 'votre.email@exemple.com',
    linkedin: 'https://linkedin.com/in/davidolivari',
    github: 'https://github.com/davidonet',
  }, // Corrected the misplaced closing brace here
} // Closing brace for the profile object

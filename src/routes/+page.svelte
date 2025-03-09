<script>
  import { onMount } from 'svelte'

  // Svelte 5 state declaration
  let sections = $state([])

  // Données du profil
  const profile = {
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
      linkedin: 'https://linkedin.com/in/votrenom',
      github: 'https://github.com/votrenom',
    }, // Corrected the misplaced closing brace here
  } // Closing brace for the profile object

  // Animation pour les sections au scroll
  onMount(() => {
    sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible') // Optional: Remove class when out of view
          }
        })
      },
      { threshold: 0.1 }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect() // Cleanup observer on component destroy
    }
  })
</script>

<svelte:head>
  <title>{profile.name} | {profile.title}</title>
  <meta name="description" content={profile.about} />
</svelte:head>

<div
  class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-100">
  <!-- Navigation -->
  <nav
    class="fixed w-full z-10 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800">
    <div class="container mx-auto py-4 px-6 flex justify-between items-center">
      <div class="text-xl font-bold">{profile.name}</div>
      <div class="hidden md:flex space-x-8">
        <a href="#about" class="hover:text-blue-400 transition">À propos</a>
        <a href="#expertise" class="hover:text-blue-400 transition">
          Expertise
        </a>
        <a href="#projects" class="hover:text-blue-400 transition">Projets</a>
        <a href="#contact" class="hover:text-blue-400 transition">Contact</a>
      </div>
      <button class="md:hidden text-2xl">☰</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="pt-32 pb-20 px-6 md:px-0">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          <span class="text-white">Bonjour, je suis</span>
          <br />
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {profile.name}
          </span>
        </h1>
        <h2 class="text-2xl md:text-3xl font-medium mb-6 text-blue-200">
          {profile.title}
        </h2>
        <div class="text-xl text-gray-300 mb-8 max-w-lg">
          {#each profile.about.split('\n') as paragraph}
            <p class="mb-3">{paragraph}</p>
          {/each}
        </div>
        <div class="flex space-x-4">
          <a
            href="#contact"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
            Me contacter
          </a>
          <a
            href="#projects"
            class="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-medium transition">
            Voir mes projets
          </a>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <div class="w-96 h-96 relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-xl opacity-50">
          </div>
          <div class="absolute inset-0 border-2 border-blue-400 rounded-full">
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src="https://gravatar.com/avatar/eecc0b23b57e851cf299a64d06f7dca7?size=256"
              alt={profile.name}
              class="rounded-full h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- About Section -->
  <section
    id="about"
    class="py-20 px-6 md:px-0 opacity-0 transition-all duration-700 transform translate-y-10">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Mes spécialités
        </span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each profile.specialties as specialty, i}
          <div
            class="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-900/20 group">
            <div
              class="text-5xl mb-4 text-blue-400 group-hover:scale-110 transition-transform">
              {i + 1}
            </div>
            <h3 class="text-xl font-semibold mb-2">{specialty}</h3>
          </div>
        {/each}
      </div>

      <div class="mt-20">
        <h2 class="text-3xl font-bold mb-12 text-center">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Expérience sectorielle
          </span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each profile.sectorExperience as sector}
            <div
              class="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-900/20">
              <h3 class="text-xl font-semibold mb-2 text-blue-300">
                {sector.title}
              </h3>
              <p class="text-gray-400">{sector.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Expertise Section -->
  <section
    id="expertise"
    class="py-20 px-6 md:px-0 bg-gray-800/30 opacity-0 transition-all duration-700 transform translate-y-10">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Compétences techniques
        </span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        {#each profile.skills as skillGroup}
          <div
            class="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700">
            <h3 class="text-xl font-semibold mb-4 text-blue-300">
              {skillGroup.category}
            </h3>
            <div class="flex flex-wrap gap-2">
              {#each skillGroup.items as skill}
                <span
                  class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section
    id="projects"
    class="py-20 px-6 md:px-0 opacity-0 transition-all duration-700 transform translate-y-10">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Projets récents
        </span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each profile.projects as project}
          <div
            class="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-900/20 group">
            <div class="h-2 bg-gradient-to-r from-blue-500 to-emerald-500">
            </div>
            <div class="p-6">
              <h3
                class="text-xl font-semibold mb-2 group-hover:text-blue-300 transition">
                {project.title}
              </h3>
              <p class="text-gray-400 mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each project.technologies as tech}
                  <span
                    class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section
    id="contact"
    class="py-20 px-6 md:px-0 bg-gray-800/30 opacity-0 transition-all duration-700 transform translate-y-10">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-3xl font-bold mb-12 text-center">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Me contacter
        </span>
      </h2>

      <div
        class="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-300">
              Envoyez-moi un message
            </h3>
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400">
                </textarea>
              </div>
              <button
                type="submit"
                class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
                Envoyer
              </button>
            </form>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-300">
              Informations de contact
            </h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-400">Email</div>
                  <a
                    href="mailto:{profile.contact.email}"
                    class="text-blue-300 hover:underline">
                    {profile.contact.email}
                  </a>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-400">LinkedIn</div>
                  <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    class="text-blue-300 hover:underline">
                    linkedin.com/in/votrenom
                  </a>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-400">GitHub</div>
                  <a
                    href={profile.contact.github}
                    target="_blank"
                    class="text-blue-300 hover:underline">
                    github.com/votrenom
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="text-xl font-semibold mb-4 text-blue-300">
                Disponibilité
              </h3>
              <p class="text-gray-400">
                Actuellement disponible pour des missions freelance et des
                projets à temps plein à distance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-10 px-6 md:px-0 bg-gray-900">
    <div class="container mx-auto text-center">
      <p class="text-gray-500">
        © {new Date().getFullYear()}
        {profile.name} - Tous droits réservés
      </p>
      <div class="flex justify-center space-x-6 mt-4">
        <a
          href={profile.contact.linkedin}
          target="_blank"
          class="text-gray-500 hover:text-blue-400 transition">
          <span class="sr-only">LinkedIn</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href={profile.contact.github}
          target="_blank"
          class="text-gray-500 hover:text-blue-400 transition">
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</div>

<style>
  :global(section.visible) {
    opacity: 1;
    transform: translateY(0);
  }

  :global(html) {
    scroll-behavior: smooth;
  }
</style>

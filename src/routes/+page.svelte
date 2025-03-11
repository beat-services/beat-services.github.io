<script>
  import { onMount } from 'svelte'
  import logo from './beat.svg'
  import profile from './profile.js'

  // Svelte 5 state declaration
  let sections = $state([])

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

<!-- Main background div -->
<div class="bg-background text-text min-h-screen">
  <!-- Navigation -->
  <nav
    class="border-text-light/30 bg-background/80 fixed z-10 w-full border-b backdrop-blur-lg">
    <div class="container mx-auto flex items-center justify-between py-3">
      <div class="text-secondary text-xl font-bold">
        <img src={logo} alt="Logo" class="h-16 w-auto" />
      </div>
      <div class="hidden space-x-8 md:flex">
        <a href="#about" class="hover:text-primary transition">À propos</a>
        <a href="#expertise" class="hover:text-primary transition">Expertise</a>
        <a href="#projects" class="hover:text-primary transition">Projets</a>
        <a href="#contact" class="hover:text-primary transition">Contact</a>
      </div>
      <button class="text-2xl md:hidden">☰</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="px-6 pt-32 pb-20 md:px-0">
    <div class="container mx-auto flex flex-col items-center md:flex-row">
      <div class="mb-10 md:mb-0 md:w-1/2">
        <h1 class="mb-4 text-4xl font-bold md:text-6xl">
          <span class="text-text font-primary">Bonjour, je suis</span>
          <br />
          <span class="text-primary font-bold">
            {profile.name}
          </span>
        </h1>
        <h2 class="text-secondary mb-6 text-2xl font-medium md:text-3xl">
          {profile.title}
        </h2>
        <div class="text-text/80 mb-8 max-w-lg text-xl">
          {#each profile.about.split('\n') as paragraph}
            <p class="mb-3">{paragraph}</p>
          {/each}
        </div>
        <div class="flex space-x-4">
          <!-- <a
            href="#contact"
            class="bg-secondary text-background hover:bg-secondary-light rounded-lg px-6 py-3 font-medium transition">
            Me contacter
          </a> -->
          <a
            href="#projects"
            class="border-primary text-primary hover:bg-primary/10 rounded-lg border px-6 py-3 font-medium transition">
            Voir mes projets
          </a>
        </div>
      </div>
      <!-- Profile image container -->
      <div class="flex justify-center md:w-1/2">
        <div class="relative h-96 w-96">
          <div
            class="bg-primary-light absolute inset-0 rounded-full opacity-20">
          </div>
          <div class="border-secondary absolute inset-0 rounded-full border-2">
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src="https://gravatar.com/avatar/eecc0b23b57e851cf299a64d06f7dca7?size=256"
              alt={profile.name}
              class="h-full w-full rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- About Section -->
  <section
    id="about"
    class="translate-y-10 transform px-6 py-20 opacity-0 transition-all duration-700 md:px-0">
    <div class="container mx-auto">
      <h2 class="mb-12 text-center text-3xl font-bold">
        <span class="text-primary">Mes spécialités</span>
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {#each profile.specialties as specialty, i}
          <div
            class="group border-background-alt/30 bg-background hover:border-primary rounded-xl border p-6 shadow-md transition-all hover:shadow-lg">
            <div
              class="text-text mb-4 text-5xl transition-transform group-hover:scale-110">
              {i + 1}
            </div>
            <h3 class="text-text mb-2 text-xl font-semibold">
              {specialty}
            </h3>
          </div>
        {/each}
      </div>

      <!-- Sector experience cards -->
      <div class="mt-20">
        <h2 class="mb-12 text-center text-3xl font-bold">
          <span class="text-primary">Expérience sectorielle</span>
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {#each profile.sectorExperience as sector}
            <div
              class="border-background-alt/30 bg-background hover:border-primary rounded-xl border p-6 shadow-md transition-all hover:shadow-lg">
              <h3 class="text-secondary mb-2 text-xl font-semibold">
                {sector.title}
              </h3>
              <p class="text-text/80">{sector.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Expertise Section -->
  <section
    id="expertise"
    class="bg-text-light/10 translate-y-10 transform px-6 py-20 opacity-0 transition-all duration-700 md:px-0">
    <div class="container mx-auto">
      <h2 class="mb-12 text-center text-3xl font-bold">
        <span class="text-primary">Compétences techniques</span>
      </h2>

      <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
        {#each profile.skills as skillGroup}
          <div
            class="border-background-alt/30 bg-background rounded-xl border p-6 shadow-md">
            <h3 class="text-secondary mb-4 text-xl font-semibold">
              {skillGroup.category}
            </h3>
            <div class="flex flex-wrap gap-2">
              {#each skillGroup.items as skill}
                <span
                  class="bg-secondary/10 text-text rounded-full px-3 py-1 text-sm">
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
    class="translate-y-10 transform px-6 py-20 opacity-0 transition-all duration-700 md:px-0">
    <div class="container mx-auto">
      <h2 class="mb-12 text-center text-3xl font-bold">
        <span class="text-primary">Projets récents</span>
      </h2>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each profile.projects as project}
          <div
            class="bg-background border-background-alt/30 hover:border-primary group overflow-hidden rounded-xl border p-6 shadow-md transition-all hover:shadow-lg">
            <div class="bg-primary h-2"></div>
            <div class="p-6">
              <h3
                class="text-text group-hover:text-primary mb-2 text-xl font-semibold transition">
                {project.title}
              </h3>
              <p class="text-text/80 mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each project.technologies as tech}
                  <span
                    class="bg-secondary/10 text-text rounded px-2 py-1 text-xs">
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

  <!-- Contact section -->
  {#if false}
    <section
      id="contact"
      class="bg-text-light/10 translate-y-10 transform px-6 py-20 opacity-0 transition-all duration-700 md:px-0">
      <div class="container mx-auto max-w-4xl">
        <h2 class="mb-12 text-center text-3xl font-bold">
          <span class="text-primary">Me contacter</span>
        </h2>

        <div
          class="bg-background border-background-alt/30 rounded-xl border p-8 shadow-md">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 class="text-secondary mb-4 text-xl font-semibold">
                Envoyez-moi un message
              </h3>
              <form class="space-y-4">
                <div>
                  <label class="text-text/70 mb-1 block text-sm font-medium">
                    Nom
                  </label>
                  <input
                    type="text"
                    class="bg-background border-background-alt/50 focus:border-primary w-full rounded-lg border px-4 py-2 focus:outline-none" />
                </div>
                <div>
                  <label class="text-text/70 mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    class="bg-background border-background-alt/50 focus:border-primary w-full rounded-lg border px-4 py-2 focus:outline-none" />
                </div>
                <div>
                  <label class="text-text/70 mb-1 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    class="bg-background border-background-alt/50 focus:border-primary w-full rounded-lg border px-4 py-2 focus:outline-none">
                  </textarea>
                </div>
                <button
                  type="submit"
                  class="bg-secondary hover:bg-secondary-light text-background w-full rounded-lg px-4 py-2 font-medium transition">
                  Envoyer
                </button>
              </form>
            </div>

            <!-- Contact information with updated styling -->
            <div>
              <h3 class="text-secondary mb-4 text-xl font-semibold">
                Informations de contact
              </h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div
                    class="bg-primary-light/20 mr-3 flex h-10 w-10 items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-text h-5 w-5"
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
                    <div class="text-text/70 text-sm">Email</div>
                    <a
                      href="mailto:{profile.contact.email}"
                      class="text-primary hover:underline">
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <!-- Update other contact items similarly -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/if}
  <!-- Footer -->
  <footer class="bg-secondary text-background px-6 py-10 md:px-0">
    <div class="container mx-auto text-center">
      <p class="text-background/70">
        © {new Date().getFullYear()}
        {profile.name} - Tous droits réservés
      </p>
      <div class="mt-4 flex justify-center space-x-6">
        <a
          href={profile.contact.linkedin}
          target="_blank"
          class="text-background/70 hover:text-primary transition">
          <span class="sr-only">LinkedIn</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href={profile.contact.github}
          target="_blank"
          class="text-background/70 hover:text-primary transition">
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

<template>
  <section class="px-5 pb-12">
    <h2 class="py-12 text-4xl text-yellow-100 md:text-5xl lg:px-24 lg:text-6xl xl:px-36">
      Technical Skills
    </h2>

    <!-- Skill Categories Grid -->
    <div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">

      <!-- Languages and Frameworks -->
      <div class="rounded-lg border-2 border-dashed border-yellow-100 p-6 transition-all duration-300 hover:shadow-xl">
        <div class="flex h-fit flex-row pb-6">
          <img class="w-8" src="https://img.icons8.com/?size=100&id=XvJbUGKqFZHQ&format=png&color=000000"
            alt="Programming monitor icon" />
          <h3 class="pl-6 text-xl font-extrabold text-yellow-100">Languages and Frameworks</h3>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <div v-for="tech in techs.languages" :key="tech.name" class="flex flex-col items-center px-3 text-white">
            <img class="w-12 hover:scale-110 transition-transform duration-200" :src="tech.logo" :alt="tech.name" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- Databases and Analytics -->
      <div class="rounded-lg border-2 border-dashed border-yellow-100 p-6 transition-all duration-300 hover:shadow-xl">
        <div class="flex h-fit flex-row pb-6">
          <img class="w-8" src="https://img.icons8.com/?size=100&id=F4iC0y0u2of4&format=png&color=000000"
            alt="Database icon" />
          <h3 class="pl-6 text-xl font-extrabold text-yellow-100">Databases and Analytics</h3>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div v-for="tech in techs.databases" :key="tech.name" class="flex flex-col items-center px-3 text-white">
            <img class="w-12 hover:scale-110 transition-transform duration-200" :src="tech.logo" :alt="tech.name" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- Cloud and DevOps -->
      <div class="rounded-lg border-2 border-dashed border-yellow-100 p-6 transition-all duration-300 hover:shadow-xl">
        <div class="flex h-fit flex-row pb-6">
          <img class="w-8" src="https://img.icons8.com/?size=100&id=BejoiOeRfYSo&format=png&color=000000"
            alt="DevOps logo" />
          <h3 class="pl-6 text-xl font-extrabold text-yellow-100">Cloud and DevOps</h3>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div v-for="tech in techs.cloudDevOps" :key="tech.name" class="flex flex-col items-center px-3 text-white">
            <img class="w-12 hover:scale-110 transition-transform duration-200" :src="tech.logo" :alt="tech.name" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- Tools and Software -->
      <div class="rounded-lg border-2 border-dashed border-yellow-100 p-6 transition-all duration-300 hover:shadow-xl">
        <div class="flex h-fit flex-row pb-6">
          <img class="w-8" src="https://img.icons8.com/?size=100&id=5LLngrr2fNaH&format=png&color=000000"
            alt="Toolbox icon" />
          <h3 class="pl-6 text-xl font-extrabold text-yellow-100">Tools and Software</h3>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div v-for="tech in techs.tools" :key="tech.name" class="flex flex-col items-center px-3 text-white">
            <img class="w-12 hover:scale-110 transition-transform duration-200" :src="tech.logo" :alt="tech.name" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const techs = {
  languages: [
    { name: 'JavaScript', logo: 'https://www.svgrepo.com/show/353925/javascript.svg' },
    { name: 'TypeScript', logo: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000' },
    { name: 'HTML', logo: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
    { name: 'CSS', logo: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
    { name: 'Nuxt', logo: 'https://img.icons8.com/?size=100&id=nvrsJYs7j9Vb&format=png&color=000000' },
    { name: 'Vue', logo: 'https://img.icons8.com/?size=100&id=BUnExfsRs3CW&format=png&color=000000' },
    { name: 'Vuetify', logo: 'https://img.icons8.com/?size=100&id=coFje4JDyijL&format=png&color=000000' },
    { name: 'Vite', logo: 'https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000' }
  ],
  databases: [
    { name: 'PostgreSQL', logo: 'https://www.svgrepo.com/show/354200/postgresql.svg' },
    { name: 'MySql', logo: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000' },
    { name: 'Supabase', logo: 'https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000' }
  ],
  cloudDevOps: [
    { name: 'Docker', logo: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000' },
    { name: 'Vercel', logo: 'https://www.svgrepo.com/show/327408/logo-vercel.svg' },
    { name: 'Git', logo: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' }
  ],
  tools: [
    { name: 'VS Code', logo: 'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000' },
    { name: 'GitHub', logo: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000' }
  ]
};
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>

<template>
  <footer class="mt-8 border-t border-[#33353F] text-white">
    <div class="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <!-- Brand Name -->
      <div class="text-3xl font-bold">Tiago Lauer</div>

      <!-- Social Media Links -->
      <nav class="flex items-center space-x-6">
        <!-- Instagram -->
        <a href="https://www.instagram.com/tiago.lauer/" target="_blank" aria-label="Instagram"
          class="hover:opacity-80">
          <img class="w-8 md:w-12" src="https://img.icons8.com/?size=100&id=42818&format=png&color=000000"
            alt="Instagram" />
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/tiagolauer/" target="_blank" aria-label="LinkedIn"
          class="hover:opacity-80">
          <img class="w-8 md:w-12" src="https://img.icons8.com/?size=100&id=60ZV_wYC0BM2&format=png&color=000000"
            alt="LinkedIn" />
        </a>

        <!-- GitHub -->
        <a href="https://github.com/tiagolauer" target="_blank" aria-label="GitHub" class="hover:opacity-80">
          <img class="w-8 md:w-12" src="https://img.icons8.com/?size=100&id=80462&format=png&color=000000"
            alt="GitHub" />
        </a>
      </nav>

      <!-- Copyright -->
      <p class="text-slate-600 text-center md:text-left text-sm">
        © {{ new Date().getFullYear() }} All rights reserved by Tiago Lauer.
      </p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

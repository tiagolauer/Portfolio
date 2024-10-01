<template>
  <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
    <!-- Mobile Toggle Button -->
    <div class="md:hidden z-30">
      <button type="button" aria-label="Toggle Menu" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <!-- Close Icon -->
        <span v-if="isMenuOpen" class="text-5xl animate-fade-in">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50"
            aria-label="Close Menu" />
        </span>
        <!-- Menu Icon -->
        <span v-else class="text-5xl animate-fade-in">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" height="50"
            aria-label="Open Menu" />
        </span>
      </button>
    </div>

    <!-- NavBar Links for mobile -->
    <nav :class="[
      'fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:hidden transition-transform duration-300',
      isMenuOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
      <a href="#about" class="block text-white transition hover:text-primary ease-linear text-2xl"
        @click="scrollToSection('#about')">About Me</a>
      <a href="#skills" class="block text-white transition hover:text-primary ease-linear text-2xl"
        @click="scrollToSection('#skills')">Skills</a>
      <a href="#projects" class="block text-white transition hover:text-primary ease-linear text-2xl"
        @click="scrollToSection('#projects')">Projects</a>
      <a href="#contact" class="block text-white transition hover:text-primary ease-linear text-2xl"
        @click="scrollToSection('#contact')">Contact Info</a>
    </nav>

    <!-- Desktop NavBar Links -->
    <nav class="hidden md:flex space-x-8">
      <a href="#about" class="text-white hover:text-primary">About Me</a>
      <a href="#skills" class="text-white hover:text-primary">Skills</a>
      <a href="#projects" class="text-white hover:text-primary">Projects</a>
      <a href="#contact" class="text-white hover:text-primary">Contact Info</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-in-out;
}
</style>

<template>
  <div class="bg-[#111827] min-h-screen">
    <!-- Wrap components in Suspense to handle loading -->
    <Suspense>
      <template #default>
        <!-- Wrap all Components inside a single root element -->
        <div>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ContactInfo />
          <Footer />
          <BackToTop />
        </div>
      </template>

      <!-- Loading Spinner for fallback -->
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

// Import Components Asynchronously
const Navbar = defineAsyncComponent(() => import('@/components/Navbar.vue'));
const Hero = defineAsyncComponent(() => import('@/components/Hero.vue'));
const About = defineAsyncComponent(() => import('@/components/About.vue'));
const Skills = defineAsyncComponent(() => import('@/components/Skills.vue'));
const Projects = defineAsyncComponent(() => import('@/components/Projects.vue'));
const ContactInfo = defineAsyncComponent(() => import('@/components/ContactInfo.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));

import loadingSpinner from './components/LoadingSpinner.vue';
</script>

<style scoped>
/* Customize Scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: #f59e0b #111827;
}

/* For WebKit Browsers (Chrome, Safari, etc.) */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: #111827;
}

*::-webkit-scrollbar-thumb {
  background-color: #f59e0b;
  border-radius: 20px;
}
</style>

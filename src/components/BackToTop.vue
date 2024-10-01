<template>
    <button v-if="isVisible" @click="scrollToTop" class="fixed bottom-4 right-4 bg-gradient-to-r from-primary to-pink-500 text-white
      rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer 
      transition-opacity duration-300 hover:bg-blue-600" aria-label="Scroll to top">
        ↥
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Controle de visibilidade do botão
const isVisible = ref(false);

// Função para controlar a visibilidade do botão com base no scroll
const updateScrollVisibility = () => {
    isVisible.value = window.scrollY > 300;
};

// Função para rolar até o topo da página
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Adiciona e remove o event listener de scroll
onMounted(() => {
    window.addEventListener('scroll', updateScrollVisibility);
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollVisibility);
});
</script>
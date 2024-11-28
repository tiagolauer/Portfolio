<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <!-- Background Decoration -->
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
        </div>

        <!-- Content Section -->
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div
                class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">

                <!-- Text Section -->
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                            Hi, I'm
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                                Tiago Lauer
                            </span>
                            😁
                        </h1>
                    </div>
                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
                        Software Developer / Frontend Developer
                    </p>

                    <!-- Action Buttons -->
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <!-- Hire Me Button -->
                        <button
                            class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <span
                                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"></span>
                            <a href="https://wa.me/+5547984024581" target="_blank" aria-label="Hire Me">
                                <span class="relative flex items-center justify-center text-white">Hire Me</span>
                            </a>
                        </button>

                        <!-- Download Resume Button -->
                        <button
                            class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <div
                                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                <svg class="w-6 h-6 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 22">
                                    <path d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#f59e0b" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                                        stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
                                </svg>
                                <a href="./assets/Tiago-Lauer.pdf" download="Tiago-Lauer.pdf"
                                    class="pl-2 text-primary">Download Resume</a>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Image Section with Flexbox and Rotation Animation -->
                <div class="lg:h-full md:flex justify-center items-center">
                    <div class="relative">
                        <div
                            class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl">
                        </div>
                        <div
                            class="relative z-10 w-64 h-64 lg:w-72 lg:h-72 rounded-full shadow-lg border border-primary overflow-hidden animate-spin-slow">
                            <img src="@/assets/profile-photo.jpg" alt="Profile Photo"
                                class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS for animations
AOS.init();
</script>

<style scoped>
/* Animação de rotação lenta */
@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 20s linear infinite;
}
</style>

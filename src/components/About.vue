<template>
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8">My Education</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                                alt="graduation-cap--v1">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">More
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</span>
                    Me
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8">
                    I am Tiago Estrela Lauer, a web developer based in Balneário Camboriú, Brazil, with over four years
                    of hands-on experience in front-end development using technologies like Vue.js, Nuxt.js, Angular,
                    and TypeScript. My passion lies in building optimized, user-friendly systems that offer intuitive
                    interfaces and seamless performance.
                    <br>
                    Throughout my career, I have contributed to both national and international projects, collaborating
                    with multidisciplinary teams and managing all phases of the development cycle—from design and
                    testing to deployment. I have worked on a diverse range of projects, including ERP systems, POS
                    software, and commercial landing pages. I always strive to ensure a high-quality user experience,
                    combining technical expertise with a strong focus on delivering aesthetically pleasing, efficient
                    solutions.
                    <br>
                    I'm currently pursuing degrees in Internet Systems and Systems Analysis and Development, enhancing
                    my technical knowledge while staying updated with the latest industry trends and innovations.
                    <br>
                    My goal is to continue growing as a developer, taking on challenging projects that allow me to
                    expand my skill set while making a positive impact on both the team and the end users.
                </p>

            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education = ref([
    {
        id: 1,
        School: 'Instituto Federal Catarinense',
        program: " Internet Systems",
        year: '2025'
    },
    {
        id: 2,
        School: 'Estácio',
        program: " Systems Analysis and Development",
        year: '2026'
    }

])
</script>

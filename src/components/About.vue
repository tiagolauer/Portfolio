<template>
    <section class="relative text-white mt-18" id="about">
        <!-- Background Decoration -->
        <div class="absolute inset-x-0 top-[93rem] h-64 flex items-start z-0">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary to-[#570cac] blur-2xl opacity-20"></div>
        </div>

        <!-- Content Section -->
        <div class="grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-10 items-center">

            <!-- Education Section -->
            <div data-aos="flip-right">
                <header class="mb-8">
                    <h2 class="text-4xl font-bold mb-8">My Education</h2>
                </header>

                <div class="space-y-8 py-8">
                    <article v-for="element in education" :key="element.id"
                        class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">

                        <!-- Education Icon -->
                        <div class="w-1/4 p-4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                                alt="Graduation Cap Icon" loading="lazy">
                        </div>

                        <!-- Education Details -->
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-2xl font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </article>
                </div>
            </div>

            <!-- About Me Section -->
            <div class="mt-4 md:mt-0 text-left flex flex-col h-full" data-aos="flip-right">
                <header class="mb-4">
                    <h2 class="text-4xl font-bold md:text-center">
                        More <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</span>
                        Me
                    </h2>
                </header>

                <article class="text-base lg:text-lg mt-8 py-8">
                    <p>
                        I am Tiago Estrela Lauer, a web developer based in Balneário Camboriú, Brazil, with over four
                        years
                        of hands-on experience in front-end development using technologies like Vue.js, Nuxt.js,
                        Angular,
                        and TypeScript. My passion lies in building optimized, user-friendly systems that offer
                        intuitive
                        interfaces and seamless performance.
                    </p>
                    <br>
                    <p>
                        Throughout my career, I have contributed to both national and international projects,
                        collaborating
                        with multidisciplinary teams and managing all phases of the development cycle—from design and
                        testing to deployment. I have worked on a diverse range of projects, including ERP systems, POS
                        software, and commercial landing pages. I always strive to ensure a high-quality user
                        experience,
                        combining technical expertise with a strong focus on delivering aesthetically pleasing,
                        efficient
                        solutions.
                    </p>
                    <br>
                    <p>
                        I'm currently pursuing degrees in Internet Systems and Systems Analysis and Development,
                        enhancing
                        my technical knowledge while staying updated with the latest industry trends and innovations.
                    </p>
                    <br>
                    <p>
                        My goal is to continue growing as a developer, taking on challenging projects that allow me to
                        expand my skill set while making a positive impact on both the team and the end users.
                    </p>
                </article>
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
        program: 'Internet Systems',
        year: '2025',
    },
    {
        id: 2,
        School: 'Estácio',
        program: 'Systems Analysis and Development',
        year: '2026',
    },
]);
</script>
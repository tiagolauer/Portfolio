<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <!-- Header and Category Filters -->
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold"> My Latest Projects</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button v-for="category in ['all', 'web development']" :key="category"
                        @click="() => selectedCategory = category"
                        class="hover:text-primary text-lg capitalize transition-all duration-300 ease-in-out"
                        :class="{ 'text-primary': selectedCategory === category }">
                        {{ category }}
                    </button>
                </div>
            </div>

            <!-- Projects Grid -->
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:py-16 md:gap-10 px-4 xl:pr-16"
                data-aos="fade-right">
                <li v-for="project in filteredProjects" :key="project.id" class="group">
                    <!-- Project Image with Hover Overlay -->
                    <div class="relative h-52 md:h-[24rem] rounded-t-xl bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                        :style="{ backgroundImage: 'url(' + project.image + ')' }">
                        <div
                            class="absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
                            <!-- Web URL Icon -->
                            <a class="h-14 w-14 mr-2 border-2 border-[#ADB7BE] rounded-full hover:border-white group-hover:text-white transition-all duration-300 flex items-center justify-center"
                                :href="project.webURL" target="_blank" aria-label="Visit {{ project.title }} Website">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-[#ADB7BE]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>
                            </a>

                            <!-- GitHub URL Icon -->
                            <a class="h-14 w-14 border-2 border-[#ADB7BE] rounded-full hover:border-white group-hover:text-white transition-all duration-300 flex items-center justify-center"
                                :href="project.gitURL" target="_blank" aria-label="View {{ project.title }} on GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-[#ADB7BE]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Project Description -->
                    <div class="mt-3 bg-[#111a3e] rounded-b-xl shadow-lg border border-[#1f1641] py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                        <p class="text-[#ADB7BE]">{{ project.description }}</p>

                        <!-- Technologies Used -->
                        <div class="flex flex-wrap p-2.5">
                            <span v-for="technology in project.technologies" :key="technology"
                                class="ml-1 mt-1 px-2 py-1 text-center rounded-3xl bg-[#111827] shadow-md border border-[#111827] backdrop-blur">
                                {{ technology }}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Project Data
const Projects = ref([
    {
        id: 1,
        category: 'web development',
        image: '/assets/bravusProject.jpg',
        title: 'Bravus Sistemas Website',
        description:
            'The Bravus Sistemas website was developed with a focus on performance, user experience, and scalability.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
        gitURL: '',
        webURL: 'https://bravussistemas.com.br/',
    },
    {
        id: 2,
        category: 'web development',
        image: '/assets/cadastroProject.jpg',
        title: 'Register Screen Test',
        description:
            'The CadastroJS project was developed as a technical test for a job application.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        gitURL: 'https://github.com/tiagolauer/CadastroJS',
        webURL: 'https://cadastrojs.netlify.app/',
    },
    {
        id: 3,
        category: 'web development',
        image: '/assets/currencyTask.png',
        title: 'Currency Task Test',
        description:
            'The Currency Task project was built as an admission test, focusing on real-time currency conversion.',
        technologies: ['Vue', 'Vuetify', 'CoinGeckoAPI', 'Axios'],
        gitURL: 'https://github.com/tiagolauer/CurrencyTask',
        webURL: 'https://currency-task-wealth99.vercel.app/',
    },
]);

// Category and Filtering Logic
const selectedCategory = ref('all');
const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(
        (project) =>
            project.category.toLocaleLowerCase() ===
            selectedCategory.value.toLocaleLowerCase()
    );
});
</script>
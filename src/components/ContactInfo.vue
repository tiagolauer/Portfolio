<template>
    <section class="text-white mt-20" id="contact">
        <h2 class="text-4xl font-bold mb-4 px-4 xl:pl-16">Let's Connect</h2>

        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <!-- Contact Info Section -->
            <article>
                <p class="text-[#adb7be]">Feel free to reach out to me!</p>

                <div class="mt-5 space-y-10">
                    <!-- Email -->
                    <div class="flex items-center">
                        <div
                            class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-lg">
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="Email" class="w-6" />
                        </div>
                        <div class="ml-5">
                            <h4 class="text-white">Email</h4>
                            <p>tiagoestrelalauer@gmail.com</p>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="flex items-center">
                        <div
                            class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-lg">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Phone" class="w-6" />
                        </div>
                        <div class="ml-5">
                            <h4 class="text-white">Phone</h4>
                            <p>+55 (47) 984024581</p>
                        </div>
                    </div>

                    <!-- LinkedIn -->
                    <div class="flex items-center">
                        <div
                            class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-lg">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn"
                                class="w-6" />
                        </div>
                        <div class="ml-5">
                            <h4 class="text-white">LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/tiagolauer/" target="_blank" class="text-primary">Tiago
                                Lauer</a>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Contact Form Section -->
            <div class="bg-[#111a3e] p-6 rounded-lg border border-[#111a3e] backdrop-blur-lg">
                <form class="flex flex-col space-y-6" @submit.prevent="handleSendMessage" data-aos="zoom-in-up">
                    <!-- Email Field -->
                    <div>
                        <label for="email" class="block text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" v-model="formData.email"
                            class="bg-[#111827] text-gray-100 text-sm rounded-lg w-full p-2.5 placeholder-gray-400"
                            placeholder="email@gmail.com" required />
                    </div>

                    <!-- Subject Field -->
                    <div>
                        <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                        <input type="text" id="subject" v-model="formData.subject"
                            class="bg-[#111827] text-gray-100 text-sm rounded-lg w-full p-2.5 placeholder-gray-400"
                            placeholder="Subject" required />
                    </div>

                    <!-- Message Field -->
                    <div>
                        <label for="message" class="block text-sm font-medium mb-2">Message</label>
                        <textarea id="message" v-model="formData.message"
                            class="bg-[#111827] text-gray-100 text-sm rounded-lg w-full p-2.5 placeholder-gray-400"
                            placeholder="Let's talk about ..." required></textarea>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit"
                        class="w-full py-3 rounded-full text-white bg-primary border-2 border-transparent transition-opacity duration-300 flex justify-center"
                        :class="{ 'opacity-50 cursor-not-allowed': buttonDisabled }" :disabled="buttonDisabled">
                        Send Message
                    </button>
                </form>
            </div>

            <!-- Background Decoration -->
            <div
                class="absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2 w-80 h-20 bg-gradient-to-tr from-[#570cac] to-primary blur-2xl opacity-25">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            clickCount: 0, // Contador de cliques
            resetTimer: null, // Temporizador para resetar o contador
            buttonDisabled: false, // Controla se o botão está desabilitado
            formData: {
                email: '',
                subject: '',
                message: ''
            }
        };
    },
    methods: {
        handleSendMessage() {
            this.clickCount++;

            if (this.clickCount > 5) {
                this.$toast.open({
                    message: 'Please stop spamming!',
                    type: 'warning',
                    position: 'top-right',
                    duration: 5000
                });
                this.buttonDisabled = true; // Desabilita o botão
            } else {
                this.$toast.open({
                    message: 'This feature is under development. Please check back later.',
                    type: 'info',
                    position: 'top-right',
                    duration: 3000
                });
            }

            // Reseta o contador e reabilita o botão após 10 segundos
            if (this.resetTimer) {
                clearTimeout(this.resetTimer);
            }

            this.resetTimer = setTimeout(() => {
                this.clickCount = 0;
                this.buttonDisabled = false;
            }, 10000); // 10 segundos para resetar o contador
        }
    }
};
</script>
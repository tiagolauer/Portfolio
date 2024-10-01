import { createApp } from "vue"
import VueToast from "vue-toast-notification"
import "vue-toast-notification/dist/theme-sugar.css" // Importa o tema do toast
import "./style.css"
import App from "./App.vue"

// Cria a instância da aplicação
const app = createApp(App)

// Registra o plugin VueToast
app.use(VueToast)

// Monta a aplicação no elemento #app
app.mount("#app")

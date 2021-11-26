import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'

const app = createApp(App)
app.config.globalProperties.axios=axios
app.mount('#app')
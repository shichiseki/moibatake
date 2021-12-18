import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import VueGoodTablePlugin from 'vue-good-table';
 
// import the styles 
// import 'vue-good-table/dist/vue-good-table.css'
 


const app = createApp(App)
// app.use(VueGoodTablePlugin)
app.config.globalProperties.axios=axios
app.mount('#app')

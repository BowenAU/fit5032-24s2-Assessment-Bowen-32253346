import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


// 引入 BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3'

// 引入 PrimeVue 和 Aura 主题
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Firebase setup
import { initializeApp } from 'firebase/app'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg0xh3Bh7xVSM7zwq8ahvMtIlGrvBwufQ",
  authDomain: "s2-assessment-bowen-39cd7.firebaseapp.com",
  projectId: "s2-assessment-bowen-39cd7",
  storageBucket: "s2-assessment-bowen-39cd7.appspot.com",
  messagingSenderId: "201161522324",
  appId: "1:201161522324:web:1b5c54665dd07aceb14881"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

// 使用 PrimeVue
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

// 使用 BootstrapVue3
app.use(BootstrapVue3)

// 使用 Vue Router
app.use(router)

app.mount('#app')

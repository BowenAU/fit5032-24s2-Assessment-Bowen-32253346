import 'bootstrap/dist/css/bootstrap.min.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

app.use(router)

app.mount('#app')


import 'bootstrap/dist/css/bootstrap.css';  // Bootstrap 样式
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';  // bootstrap-vue-next 样式
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'mapbox-gl/dist/mapbox-gl.css';

// 按需导入所需的 bootstrap-vue-next 组件
import { BNavbar, BNavItem, BFormInput, BButton, BNavItemDropdown, BNavbarNav, BCollapse } from 'bootstrap-vue-next';

// 引入 PrimeVue 和 Aura 主题
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// Firebase setup
import { initializeApp } from 'firebase/app';

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

const app = createApp(App);

// 使用 PrimeVue
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

// 注册按需导入的 bootstrap-vue-next 组件
app.component('BNavbar', BNavbar);
app.component('BNavItem', BNavItem);
app.component('BFormInput', BFormInput);
app.component('BButton', BButton);
app.component('BNavItemDropdown', BNavItemDropdown);
app.component('BNavbarNav', BNavbarNav);
app.component('BCollapse', BCollapse);

// 使用 Vue Router
app.use(router);

// 挂载应用
app.mount('#app');

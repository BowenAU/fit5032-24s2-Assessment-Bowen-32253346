import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'

import AdminPanelView from '@/views/AdminPanelView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import RatingView from '@/views/RatingView.vue'
import AboutView from '@/views/AboutView.vue'
import TellView from '@/views/TellView.vue'

const role = ref('')
const username = ref('')
const isAuthenticated = ref(false)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/rating',
      name: 'Rating',
      component: RatingView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
        {
      path: '/tell',
      name: 'tell',
      component: TellView
    },
    // {
    //   path: '/',
    //   name: '',
    //   component: 
    // },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPanelView,
      
    }
    
  ]
})
export { role, username }
export default router

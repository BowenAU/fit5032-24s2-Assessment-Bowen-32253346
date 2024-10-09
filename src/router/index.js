import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'

import AdminPanelView from '@/views/AdminPanelView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'

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
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: SignUpView
    // },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: SignUpView
    // },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPanelView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated.value.role !== 'admin') {
          next({ name: 'Login' })
        } else {
          next()
        }
      }
    }
    
  ]
})
export { role, username }
export default router

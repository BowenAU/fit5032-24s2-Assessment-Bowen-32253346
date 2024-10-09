import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import { ref } from 'vue'

const role = ref('')
const username = ref('')
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

const router = createRouter({
    history: createWebHistory(),
    routes
})
  
  export { isAuthenticated }

})
export { role, username }
export default router

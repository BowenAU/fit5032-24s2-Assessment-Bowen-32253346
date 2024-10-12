import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'

import AdminPanelView from '@/views/AdminPanelView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import AboutView from '@/views/AboutView.vue'
import ReviewView from '@/views/ReviewView.vue'
import ServiceView from '@/views/ServiceView.vue'
import GetAllUserAPI from '../views/GetAllUserAPI.vue'

import LanguageLearningView from '../views/services/LanguageLearningView.vue'
import CareerResourcesView from '../views/services/CareerResourcesView.vue'
import HealthInfoView from '../views/services/HealthInfoView.vue'
import CulturalIntegrationView from '../views/services/CulturalIntegrationView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import AskUsView from '@/views/AskUsView.vue'
import EventsView from '@/views/EventsView.vue'

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
      path: '/review',
      name: 'review',
      component: ReviewView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/service/language-learning',
      name: 'LL',
      component: LanguageLearningView
    },
    {
      path: '/service/career-resources',
      name: 'CR',
      component: CareerResourcesView
    },
    {
      path: '/service/health-info',
      name: 'HI',
      component: HealthInfoView
    },
    {
      path: '/service/cultural-integration',
      name: 'CI',
      component: CulturalIntegrationView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUsView
    },
    {
      path: '/askus',
      name: 'askus',
      component: AskUsView
    },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPanelView
    },
    {
      path: '/getAllUsersAPI',
      name: 'getallusers',
      component: GetAllUserAPI
    }
  ]
})

export { role, isAuthenticated }
export default router

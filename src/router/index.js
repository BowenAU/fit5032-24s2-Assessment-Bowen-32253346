import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'

import AdminPanelView from '@/views/AdminPanelView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import AboutView from '@/views/AboutView.vue'
import ReviewView from '@/views/ReviewView.vue'
import ServiceView from '@/views/ServiceView.vue'

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
      path: '/service',
      name: 'service',
      component: ServiceView,
      children: [
        {
          path: 'language-learning',
          name: 'language-learning',
          component: LanguageLearningView
        },
        {
          path: 'career-resources',
          name: 'career-resources',
          component: CareerResourcesView
        },
        {
          path: 'health-info',
          name: 'health-info',
          component: HealthInfoView
        },
        {
          path: 'cultural-integration',
          name: 'cultural-integration',
          component: CulturalIntegrationView
        }
      ]
    },
    {
      path: '/findus',
      name: 'findus',
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
    }
  ]
})

export { role, username }
export default router

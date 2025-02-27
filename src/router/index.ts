import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/HomeView.vue')
  },
  {
    path: '/hub',
    name: 'Hub',
    component: () => import('@/views/hub/HubView.vue')
  },
  {
    path: '/myAchievments',
    name: 'My Achievments',
    component: () => import('@/views/myAchievments/MyAchievmentsView.vue')
  },
  {
    path: '/myCourse',
    name: 'My Course',
    component: () => import('@/views/myCourse/MyCourseView.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/ProfileView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import dashboardRouter from './page/dashboard-router.js';

const routes = [
  ...dashboardRouter,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

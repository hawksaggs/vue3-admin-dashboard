// Composables
import { createRouter, createWebHistory } from 'vue-router'
import dashboardRouter from './page/dashboard-router.js';
import defaultLayoutRouter from './page/default-layout-router.js';
import topNavRouter from './page/top-nav-router.js';

const routes = [
  ...dashboardRouter,
  ...defaultLayoutRouter,
  ...topNavRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

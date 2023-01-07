// Composables
import { createRouter, createWebHistory } from 'vue-router'
import dashboardRouter from './page/dashboard-router.js';
import defaultLayoutRouter from './page/default-layout-router.js';
import topNavRouter from './page/top-nav-router.js';
import bottomNav from './page/bottom-nav.js';
import blankPageRouter from './page/blank-page-router.js';
import alertRouter from './page/alert-router.js';
import articleRouter from './page/article-router.js';
import avatarRouter from './page/avatar-router.js';
import bagdeRouter from './page/bagde-router.js';

const routes = [
  ...dashboardRouter,
  ...defaultLayoutRouter,
  ...topNavRouter,
  ...bottomNav,
  ...blankPageRouter,
  ...alertRouter,
  ...articleRouter,
  ...avatarRouter,
  ...bagdeRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

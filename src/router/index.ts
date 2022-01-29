import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blockchain',
    name: 'Blockchain',
    component: () => import('@/views/blockchain.vue'),
  },
  {
    path: '/:route*',
    name: 'notFound',
    component: () => import('@/views/notFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/pages/home'),
  }, {
    path: '/blockchain',
    name: 'blockchain',
    component: () => import('@/pages/blockchain'),
  }, {
    path: '/interactiveWorkSpace',
    name: 'interactiveWorkSpace',
    component: () => import('@/pages/interactiveWorkSpace'),
  }, {
    path: '/*',
    name: '404',
    component: () => import('@/pages/notFound'),
  }],
});

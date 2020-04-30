// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

gsap.registerPlugin(Draggable);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

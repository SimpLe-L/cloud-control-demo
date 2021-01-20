import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import * as api from './api/api';
// import VueAMap from 'vue-amap';

Vue.prototype.$http = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

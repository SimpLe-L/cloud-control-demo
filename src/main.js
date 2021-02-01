import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import * as api from './api/api';
import * as echarts from 'echarts';
import axios from 'axios';

Vue.prototype.$echarts = echarts;
Vue.prototype.$http = api;
Vue.prototype.$axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

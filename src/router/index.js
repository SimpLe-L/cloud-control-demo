import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

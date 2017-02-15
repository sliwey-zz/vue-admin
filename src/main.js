import './style/main.scss';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Layout from './pages/layout/layout';
import Login from './pages/login/login';
import Home from './pages/home/home';
import User from './pages/user/user';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++;
    }
  }
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: Layout,
      children: [
        { path: 'home', component: Home, alias: '' },
        { path: 'user', component: User }
      ]
    },
    { path: '/login', component: Login }
  ]
});

const app = new Vue({
  store,
  router
}).$mount('#root');

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

const COUNT_ADD = 'add';

const moduleA = {
  state: {
    count: 0
  },
  mutations: {
    [COUNT_ADD] (state, num) {
      state.count += num;
    }
  },
  actions: {
    [COUNT_ADD] ({ commit, rootState }, num) {
      setTimeout(() => {
        commit(COUNT_ADD, num + rootState.number);
      }, 1000);
    }
  }
}

const moduleB = {
  state: {
    items: [1, 2, 3, 4]
  },
  getters: {
    oddItem (state) {
      return state.items.filter(item => item % 2 !== 0);
    }
  }
}

const store = new Vuex.Store({
  state: {
    number: 2
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
  // state: {
  //   count: 0,
  //   items: [1, 2, 3, 4]
  // },
  // getters: {
  //   oddItem (state) {
  //     return state.items.filter(item => item % 2 !== 0);
  //   }
  // },
  // mutations: {
  //   [COUNT_ADD] (state, num) {
  //     state.count += num;
  //   }
  // },
  // actions: {
  //   [COUNT_ADD] ({ commit }, num) {
  //     setTimeout(() => {
  //       commit(COUNT_ADD, num);
  //     }, 1000);
  //   }
  // }
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

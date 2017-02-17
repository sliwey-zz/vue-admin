import './style/main.scss';
import Vue from 'vue';
import store from './store';
import router from './router';

const app = new Vue({
  store,
  router
}).$mount('#root');
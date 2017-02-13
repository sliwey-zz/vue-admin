import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './pages/login/Login.vue';
import './style/main.scss';

Vue.use(VueRouter);

const Home = {template: '<div>home</div>'}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login }
  ]
});

const app = new Vue({
  router
}).$mount('#root')

// let vm = new Vue({
//   el: '#root',
//   data: {
//     message: 'Hello',
//     seen: true,
//     view: 'v-a'
//   },
//   computed: {
//     reverse: function() {
//       return this.message.split('').reverse().join('');
//     }
//   },
//   components: {
//     'todo-item': {
//       template: '<p>todo</p>'
//     },
//     'v-a': {
//       template: '<div>Component A</div>'
//     },
//     'v-b': {
//       template: '<div>Component B</div>'
//     }
//   },
//   methods: {
//     change: function(msg) {
//       if (msg === 'a') {
//         this.view = 'v-a';
//       }

//       if (msg === 'b') {
//         this.view = 'v-b';
//       }
//     }
//   }
// });



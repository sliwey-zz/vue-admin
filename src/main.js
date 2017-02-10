import Vue from 'vue';
// import App from './App.vue';


let vm = new Vue({
  el: '#root',
  data: {
    message: 'Hello',
    seen: true
  },
  computed: {
    reverse: function() {
      return this.message.split('').reverse().join('');
    }
  },
  components: {
    'todo-item': {
      template: '<p>todo</p>'
    }
  }
});



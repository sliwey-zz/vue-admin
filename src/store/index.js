import Vue from 'vue';
import Vuex from 'vuex';
import drivers from './modules/drivers';
import vehicles from './modules/vehicles';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    drivers,
    vehicles
  }
})
import * as Types from '../mutation-types';

const state = {
  full: 100,
  part: 125
}

const getters = {
  driverTotal (state) {
    return state.full + state.part;
  }
}

const mutations = {
  [Types.DRIVER_FULL_ADD] (state, { number }) {
    state.full += number;
  },

  [Types.DRIVER_PART_ADD] (state, { number }) {
    state.part += number;
  },
}

export default {
  state,
  getters,
  mutations
}
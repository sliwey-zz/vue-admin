import * as Types from '../mutation-types';

const state = {
  empty: 100,
  task: 125,
  heavy: 80,
  offline: 10
}

const getters = {
  vehicleTotal (state) {
    return state.empty + state.task + state.heavy + state.offline;
  }
}

const mutations = {
  [Types.VEHICLE_EMPTY_ADD] (state, { number }) {
    state.empty += number;
  },

  [Types.VEHICLE_TASK_ADD] (state, { number }) {
    state.task += number;
  },

  [Types.VEHICLE_HEAVY_ADD] (state, { number }) {
    state.heavy += number;
  },

  [Types.VEHICLE_OFFLINE_ADD] (state, { number }) {
    state.offline += number;
  },
}

const actions = {
  asyncVehicleAdd ({ commit }) {
    setTimeout(() => {
      commit(Types.VEHICLE_EMPTY_ADD, { number: 1 });
      commit(Types.VEHICLE_TASK_ADD, { number: 1 });
      commit(Types.VEHICLE_HEAVY_ADD, { number: 1 });
      commit(Types.VEHICLE_OFFLINE_ADD, { number: 1 });
    }, 1000);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
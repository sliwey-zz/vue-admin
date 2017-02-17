<template>
  <div class="home">
    <h3>司机</h3>
    <ul>
      <li>
        <span>正班：{{ full }}</span>
        <button type="button" v-on:click="driverFullAdd({number:1})">+</button>
        <button type="button" v-on:click="driverFullMinus(1)">-</button>
      </li>
      <li>
        <span>代班：{{ part }}</span>
        <button type="button" v-on:click="driverPartAdd({number:1})">+</button>
        <button type="button" v-on:click="driverPartAdd({number:-1})">-</button>
      </li>
      <li>总数：{{ driverTotal }}</li>
    </ul>
    <h3>车辆</h3>
    <ul>
      <li>空车：{{ empty }}<button type="button" v-on:click="vehicleEmptyAdd({number:1})">+</button></li>
      <li>任务车：{{ task }}<button type="button" v-on:click="vehicleTaskAdd({number:1})">+</button></li>
      <li>重车：{{ heavy }}<button type="button" v-on:click="vehicleHeavyAdd({number:1})">+</button></li>
      <li>离线：{{ offline }}<button type="button" v-on:click="vehicleOfflineAdd({number:1})">+</button></li>
      <li>总数：{{ vehicleTotal }}</li>
    </ul>
    <button type="button" v-on:click="asyncVehicleAdd">Add async</button>
    <router-link to="/user">User</router-link>
  </div>
</template>

<script>
import * as Types from '../../store/mutation-types';
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      a: 1
    }
  },
  computed: {
    number () {
      return this.a + this.count;
    },
    ...mapState({
      full: state => state.drivers.full,
      part: state => state.drivers.part,
      empty: state => state.vehicles.empty,
      task: state => state.vehicles.task,
      heavy: state => state.vehicles.heavy,
      offline: state => state.vehicles.offline
    }),
    ...mapGetters([
      'driverTotal',
      'vehicleTotal'
    ])
  },
  methods: {
    driverFullMinus (number) {
      this.$store.commit(Types.DRIVER_FULL_ADD, { number: -number });
    },
    ...mapMutations({
      driverFullAdd: Types.DRIVER_FULL_ADD,
      driverPartAdd: Types.DRIVER_PART_ADD,
      vehicleEmptyAdd: Types.VEHICLE_EMPTY_ADD,
      vehicleTaskAdd: Types.VEHICLE_TASK_ADD,
      vehicleHeavyAdd: Types.VEHICLE_HEAVY_ADD,
      vehicleOfflineAdd: Types.VEHICLE_OFFLINE_ADD,
    }),
    ...mapActions([
      'asyncVehicleAdd'
    ])
  }
}
</script>

<style lang="scss" module>

</style>
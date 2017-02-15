<template>
  <div class="home">
    <p>I'm Home.{{ count }} {{number}}</p>
    <p>{{ odd }}</p>
    <button type="button" v-on:click="add(1)">Add 1</button>
    <button type="button" v-on:click="add(2)">Add 2</button>
    <button type="button" v-on:click="asyncAdd(3)">Add async</button>
    <router-link to="/user">User</router-link>
  </div>
</template>

<script>
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
  // computed: mapState({
  //   count: state => state.count,
  //   countAlias: 'count',
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount;
  //   }
  // }),
  computed: {
    number () {
      return this.a + this.count;
    },
    // oddItem () {
    //   return this.$store.getters.oddItem;
    // },
    count () {
      return this.$store.state.a.count;
    },
    ...mapGetters({
      odd: 'oddItem'
    }),
    // ...mapState([
    //   'count'
    // ])
  },
  methods: {
    haha () {

    },
    ...mapMutations([
      'add'
    ]),
    ...mapActions({
      asyncAdd: 'add'
    })
  }
}
</script>

<style lang="scss" module>

</style>
<template>
  <div class="home">
    <p>I'm Home.{{ count }}</p>
    <button type="button" v-on:click="add">Add 1</button>
    <router-link to="/user">User</router-link>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {
    count () {
      return this.$store.state.count;
    }
  },
  methods: {
    add () {
      this.$store.commit('add');
    }
  }
}
</script>

<style lang="scss" module>

</style>
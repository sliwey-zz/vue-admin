<template>
  <div :class="$style.login">
    <div :class="$style.avatar">
      <img src="./tx.png">
    </div>
    <div :class="$style.info">
      <p><input type="text" placeholder="Username" v-model="username"></p>
      <p><input type="password" placeholder="Password" v-model="password"></p>
      <p><button type="buttom" v-on:click="login">Login</button></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      this.$router.push({path: '/'});
    }
  }
}
</script>

<style lang="scss" module>
.login {
  width: 200px;
  margin: 100px auto 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .2);
}

.avatar{
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  border-radius: 100%;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .2);
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
  }
}

.info{

  p{
    margin-bottom: 10px;
  }

  input{
    width: 100%;
    height: 24px;
    text-indent: 5px;
    border: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 3px;
    outline: 0;
  }

  button{
    width: 100%;
    height: 30px;
    background: lightblue;
    color: #fff;
    border: 0;
    border-radius: 3px;
    outline: 0;
  }
}
</style>
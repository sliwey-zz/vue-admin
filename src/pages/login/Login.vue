<template>
  <div id="login" class="login">
    <div class="login-title">
      <h1>Login</h1>
    </div>
    <div class="login-content">
      <p><label>用户名：<input type="text" placeholder="用户名" v-model="username"></label></p>
      <p><label>密码：<input type="password" placeholder="密码" v-model="password"></label></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 400px;
  margin: 40px auto;

  &-title{}
}
</style>
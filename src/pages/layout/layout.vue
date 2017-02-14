<template>
  <div>
    <admin-header></admin-header>
    <admin-aside></admin-aside>
    <div :class="$style.content">
      <router-view></router-view>
    </div>
    <admin-footer></admin-footer>
  </div>
</template>

<script>
import adminHeader from '../layout/header';
import adminAside from '../layout/aside';
import adminFooter from '../layout/footer';

export default {
  data () {
    return {

    }
  },
  components: {
    adminHeader, adminAside, adminFooter
  }
}
</script>

<style lang="scss" module>
@import '../../style/variables';

.content{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: $height-header;
  padding-left: $width-aside;
  padding-bottom: $height-footer;
}
</style>
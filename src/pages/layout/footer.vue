<template>
  <footer :class="$style.footer">I'm Footer.</footer>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>
@import '../../style/variables';

.footer{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: $height-footer;
  line-height: $height-footer;
  background: #2b3a42;
  color: #fff;
}
</style>
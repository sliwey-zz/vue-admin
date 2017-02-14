<template>
  <header :class="$style.header">
    I'm Header.
  </header>
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

.header{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: $height-header;
  line-height: $height-header;
  color: #fff;
  background: #1e2327;
  z-index: 100;
}
</style>
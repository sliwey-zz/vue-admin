<template>
  <aside :class="$style.aside">I'm Aside</aside>
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

.aside{
  position: absolute;
  left: 0;
  top: 0;
  width: $width-aside;
  height: 100%;
  padding-top: $height-header;
  color: #666;
  background: #fafafa;
}
</style>
<template>
  <div class="home">
    <v-header class="header"></v-header>
    <slider></slider>
    content
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import Slider from '@/components/Slider'

export default {
  name: 'home',
  components: {
    VHeader,
    Slider
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding-top: 40px;
    .header {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>

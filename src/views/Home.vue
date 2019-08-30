<template>
  <div class="home">
    <v-header class="header"></v-header>
    <slider></slider>
    <nav-list></nav-list>
    content
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import Slider from '@/components/Slider'
import NavList from '@/components/Nav'

export default {
  name: 'home',
  components: {
    VHeader,
    Slider,
    NavList
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

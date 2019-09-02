<template>
  <div class="home">
    <v-header class="header"></v-header>
    <div class="content">
      <slider></slider>
      <nav-list></nav-list>
      <recommend></recommend>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import Slider from '@/components/Slider'
import NavList from '@/components/Nav'
import Recommend from '@/components/Recommend'
// import { getHomeRecommend } from '@/assets/api/home'

export default {
  name: 'home',
  components: {
    VHeader,
    Slider,
    NavList,
    Recommend
  },
  data () {
    return {

    }
  },
  mounted () {

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
    .content {
      height: 100%;
      overflow: auto;
    }
  }
</style>

<template>
  <div class="home">
    <v-header class="header"></v-header>
    <div class="content">
      <slider></slider>
      <nav-list></nav-list>
      <recommend></recommend>
    </div>
    <div class="backtop" v-show="isBackTop" @click="backTop">
      <i class="iconfont icon-backtop"></i>
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
      isBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.isBackTop = false
      const dom = document.getElementsByClassName('content')[0]
      dom.scrollTop = 0
      dom.pageYOffset = 0
    },
    handleScroll: function () {
      const that = this
      const dom = document.getElementsByClassName('content')[0]
      const scrollTop = dom.scrollTop || dom.pageYOffset
      // console.log('scrollTop = = ', scrollTop)
      if (scrollTop > 375) {
        that.isBackTop = true
      } else {
        that.isBackTop = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
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
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
    }
    .content {
      -webkit-overflow-scrolling: touch;
      height: 100%;
      overflow: auto;
    }
    .backtop {
      width: 30px;
      height: 30px;
      position: absolute;
      bottom: 40px;
      right: 10px;
      background-color: #999999;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      border-radius: 50%;
    }
  }
</style>

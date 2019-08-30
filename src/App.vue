<template>
  <div id="app">
    <router-view/>
    <v-footer class="footer" :footers="footers"></v-footer>
  </div>
</template>
<script>
import VFooter from '@/components/VFooter'
export default {
  name: 'app',
  components: {
    VFooter
  },
  data () {
    return {
      footers: [
        {
          icon: 'icon-home',
          title: '首页',
          path: '/'
        },
        {
          icon: 'icon-category',
          title: '分类页',
          path: '/category'
        },
        {
          icon: 'icon-cart',
          title: '购物车',
          path: '/cart'
        },
        {
          icon: 'icon-personal',
          title: '个人中心',
          path: '/personal'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
  box-sizing: border-box;
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>

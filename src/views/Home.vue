<template>
  <div class="home">
    <v-header class="header"></v-header>
    content
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'

export default {
  name: 'home',
  components: {
    VHeader
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

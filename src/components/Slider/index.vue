<template>
<div class="slider" v-if="images.length!==0">
  <van-swipe :autoplay="autoplay">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img class="img" v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
export default {
  name: 'index',
  props: {
    autoplay: {
      type: Number,
      default: 3000
    },
    images: {
      type: Array,
      default () {
        return [
          require('../../assets/img/1.jpg'),
          require('../../assets/img/2.jpg'),
          require('../../assets/img/3.jpg'),
          require('../../assets/img/4.jpg')
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slider{
  width: 100%;
  height: 183px;
  .van-swipe {
    height: 100%;
    .img {
      width: 100%;
      display: block;
      height: 100%;
    }
  }
}
</style>

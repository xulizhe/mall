<template>
<div class="nav">
  <div class="item" v-for="(item,index) in images" :key="index">
    <img class="img" :src="item.link">
    <span class="title">{{item.title}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'index',
  props: {
    images: {
      type: Array,
      default () {
        return [
          {
            link: require('../../assets/img/nav-item-1.png'),
            title: '团购'
          },
          {
            link: require('../../assets/img/nav-item-2.png'),
            title: '一元购'
          },
          {
            link: require('../../assets/img/nav-item-3.png'),
            title: '优惠券'
          },
          {
            link: require('../../assets/img/nav-item-4.png'),
            title: '教育'
          },
          {
            link: require('../../assets/img/nav-item-5.png'),
            title: '旅行'
          },
          {
            link: require('../../assets/img/nav-item-6.png'),
            title: '在线订餐'
          },
          {
            link: require('../../assets/img/nav-item-7.png'),
            title: '庆典'
          },
          {
            link: require('../../assets/img/nav-item-8.png'),
            title: '秒杀'
          },
          {
            link: require('../../assets/img/nav-item-9.png'),
            title: '拍卖'
          },
          {
            link: require('../../assets/img/nav-item-10.png'),
            title: '服务'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 183px;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    .img {
      display: block;
      height: 49px;
      width: 49px;
    }
  }
}
</style>

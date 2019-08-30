<template>
<div class="v-footer" v-if="footers.length!==0">
    <router-link class="item"  v-for="(item,index) in footers"
                 :to="item.path"
                 :key="index" exact>
      <i class="iconfont" :class="item.icon"></i>
      <span class="title">{{item.title}}</span>
    </router-link>
</div>
</template>

<script>
export default {
  name: 'index',
  props: {
    footers: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-footer {
    background-color: cornsilk;
    width: 100%;
    height: 40px;
    display: flex;
    .item {
      flex: 1;
      color: black;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.router-link-active {
        color: red;
      }
    }
  }
</style>

<template>
    <div class="v-header">
      <i class="iconfont icon-scan"></i>
      <span class="middle">
        <i class="iconfont icon-search"></i>
        <input class="ipt" placeholder="input">
      </span>
      <i class="iconfont icon-msg"></i>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.v-header {
  background-color: rgba(255,0,0,0.6);
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .middle {
    height: 20px;
    .ipt{
      height: 100%;
    }
  }
}
</style>

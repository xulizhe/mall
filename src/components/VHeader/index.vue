<template>
    <div class="v-header">
      <i class="iconfont icon-scan"></i>
      <input class="ipt" placeholder="input">
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
  .ipt{
      height: 28px;
      box-sizing: border-box;
      padding: 0 10px 0 10px;
      margin: 0 10px 0 10px;
      border-radius: 10px;
  }
}
</style>

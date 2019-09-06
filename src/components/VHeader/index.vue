<template>
    <div class="v-header">
      <i class="iconfont icon-scan"></i>
      <div class="middle">
        <i class="iconfont icon-search"></i>
        <router-link class="middle-right" to="/search">
          <input class="ipt" placeholder="search">
        </router-link>
      </div>
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
    height: 28px;
    width: 280px;
    border-radius: 10px;
    background-color: white;
    margin: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*.ipt{*/
    /*  font-size: 14px;*/
    /*    height: 100%;*/
    /*    width: 250px;*/
    /*  box-sizing: border-box;*/
    /*  padding: 0 10px 0 10px;*/
    /*}*/
    .middle-right {
      height: 100%;
      width: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      .ipt{
        font-size: 14px;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px 0 10px;
      }
    }
  }
}
</style>

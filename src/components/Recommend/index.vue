<template>
<div class="recommend">
  <h3 class="recommend-title">热卖推荐</h3>
  <van-list class="recommend-list"
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
  >
    <li
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <router-link
        class="recommend-link" to="">
        <p class="recommend-pic"><img class="recommend-img" v-lazy="item.baseinfo.picUrlNew"></p>
        <p class="recommend-name">{{item.name.shortName}}</p>
        <p class="recommend-origPrice"><del>¥{{item.price.origPrice}}</del></p>
        <p class="recommend-info">
          <span class="recommend-price">¥<strong class="recommend-price-num">{{item.price.actPrice}}</strong></span>
          <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
        </p>
      </router-link>
    </li>
  </van-list>
</div>
</template>

<script>
import { getHomeRecommend } from '@/assets/api/home'
export default {
  name: 'index',
  data () {
    return {
      recommends: [],
      curPage: 1,
      totalPage: 1,
      loading: false,
      finished: false,
      error: false
    }
  },
  methods: {
    onLoad () {
      const that = this
      if (that.curPage > that.totalPage || that.curPage >= 3) {
        that.finished = true
        that.loading = false
        return
      }
      setTimeout(function () {
        getHomeRecommend(that.curPage).then(data => {
          that.loading = false
          that.curPage++
          that.totalPage = data.totalPage
          that.recommends = that.recommends.concat(data.itemList)
        })
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin flex-between() {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @mixin multiline-ellipsis($num: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $num;
    -webkit-box-orient: vertical;
    white-space: normal !important;
    word-wrap: break-word;
  }
.recommend {
  font-size: 12px;
  .recommend-title {
    position: relative;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    &:before,&:after{
      content: '';
      position: absolute;
      top: 50%;
      width: 40%;
      height: 1px;
      background-color: #ddd;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
  &-list {
    @include flex-between();
    flex-wrap: wrap;
  }

  &-item {
    width: 49%;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    margin-bottom: 8px;
    list-style: none;
  }

  &-link {
    display: block;
  }

  &-pic {
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 5px;
  }

  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-name {
    height: 36px;
    padding: 0 5px;
    margin-bottom: 8px;
    line-height: 1.5;
    @include multiline-ellipsis();
  }

  &-origPrice {
    padding: 0 5px;
    margin-bottom: 8px;
    color: #ccc;
  }

  &-info {
    @include flex-between();
    padding: 0 5px;
    margin-bottom: 8px;
  }

  &-price {
    color: #e61414;
  }

  &-price-num {
    font-size: 12px;
  }

  &-count {
    color: #999;
  }
}
</style>

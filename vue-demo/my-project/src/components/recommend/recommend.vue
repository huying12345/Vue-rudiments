<template>
  <div class="recommend">
    <div class="recommend-content">
      <div>
        <div class="slider-wrapper" v-if="recommends.length">
          <div class="slider-content">
            <slider>
              <div v-for="(item, index) in recommends" :key="index">
                <a :href="item.linkUrl">
                  <img :src="item.picUrl" alt=""/>
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import {getRecommend, getDescList} from 'api/recommend'
import {ERR_OK} from 'api/config'

export default {
  data () {
    return {
      recommends: [],
      descList: []
    }
  },
  created () {
    this._getRecommend()
    this._getDescList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res.data.slider)
          this.recommends = res.data.slider
        }
      })
    },
    _getDescList () {
      getDescList().then((res) => {
        if (res.code === ERR_OK) {
          // this.descList = res.data.slider
          console.log(res.data)
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
</style>

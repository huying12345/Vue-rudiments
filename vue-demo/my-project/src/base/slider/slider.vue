<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index}" v-for="(item, index) in dots" :key="index"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {addClass} from 'common/js/dom'
import BScroll from 'better-scroll'

export default {
  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  // dom渲染之后执行
  mounted () {
    // 为了确保dom成功渲染，利用setTimeout()
    setTimeout(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()

      if (this.autoPlay) {
        this._play()
      }
    }, 20)// 浏览器的刷新通常是 17ms 一次，所以这里设置为 20ms 更科学

    window.addEventListener('resize', () => {
      if (!this.slider || !this.slider.enabled) {
        return
      }
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.slider.isInTransition) {
          this._onScrollEnd()
        } else {
          if (this.autoPlay) {
            this._play()
          }
        }
      }, 60)
    })
  },
  // 若页面存在activated()函数时，一进入这个页面就会触发，用于初始化页面数据
  activated () {
    let pageIndex = this.slider.getCurrentPage().pageX
    this.slider.goToPage(pageIndex, 0, 0)
    this.currentPageIndex = pageIndex
    if (this.autoPlay) {
      this._play()
    }
  },
  // 解除
  deactivated () {
    this.slider.disable() // 禁用 better-scroll
    clearInterval(this.timer)
  },
  beforeDestroy () {
    this.slider.disable()// 禁用 better-scroll
    clearInterval(this.timer)
  },
  methods: {
    refresh () {
      if (this.slider) {
        this._setSliderWidth(true)
        this.slider.refresh()
      }
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })
      this.slider.on('scrollEnd', this._onScrollEnd())
      this.slider.on('touchEnd', () => {
        if (this.autoPlay) {
          this._play()
        }
      })
      this.slider.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearInterval(this.timer)
        }
      })
    },
    _initDots () {
      this.dots = new Array(this.children.length)
    },
    _onScrollEnd () {
      let index = this.slider.getCurrentPage().pageX
      if (index >= this.children.length - 2) {
        this.currentPageIndex = 0
      } else {
        this.currentPageIndex = index
      }
      if (this.autoPlay) {
        this._play()
      }
    },
    // 设置轮播图宽度
    _setSliderWidth (isResize) {
      let sliderWidth = this.$refs.sliderGroup.clientWidth
      let width = 0
      this.children = this.$refs.sliderGroup.children

      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')

        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    // 自动滚动
    _play () {
      if (this.loop) {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.slider.next()
          let index = this.slider.getCurrentPage().pageX
          if (index >= this.children.length - 2) {
            this.currentPageIndex = 0
          } else {
            this.currentPageIndex = index
          }
        }, this.interval)
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>

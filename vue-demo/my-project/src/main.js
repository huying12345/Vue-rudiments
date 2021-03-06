// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill' /* 补丁 */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body) /*解决移动端点击事件的300ms延迟问题*/
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
Vue.use(Vuex)
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

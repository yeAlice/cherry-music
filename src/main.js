import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' // 处理移动端click事件300毫秒延迟
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body) // 使body下面所有div的点击都没有300ms延时

Vue.use(VueLazyLoad, {
  loading: require('common/image/cherry.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

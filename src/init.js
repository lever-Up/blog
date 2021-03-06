import Vue from 'vue'
import Router from 'vue-router'
import GlobalComponents from './components'
import flex from '../src/assets/lib/flexible'
import {checkSystem} from '../src/assets/lib/utils'

// 手机端处理
(function () {
  window.onresize = function () {
    flex(100, 1, checkSystem().mobile)
  }
})()

Vue.config.productionTip = false
Vue.use(Router)

// 公用组件
Vue.use(GlobalComponents)

export default ({components, router, template, el = '#app'}) => {
  return new Vue({
    el,
    router,
    components,
    template
  })
}

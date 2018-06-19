'use strict'
import Vue from 'vue';
import SvgIcon from './SvgIcon.vue';

/********************************
 * 组件export
 *******************************/
export {default as Loading} from './Loading.vue';// loading 路由转跳

/********************************
 * 全局组件注册
 *******************************/
const components = [
  SvgIcon,
]

// Vue install
const config = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default config;

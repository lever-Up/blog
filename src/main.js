// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import config from './components';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.config.productionTip = false

 /* ElementUI */
Vue.use(ElementUI);
/* 自定义全局组件 */
Vue.use(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

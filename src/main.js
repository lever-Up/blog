// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import globalComponents from './components';
import globalUtils from './utils';

import 'element-ui/lib/theme-chalk/index.css';
import 'mavon-editor/dist/css/index.css';

Vue.config.productionTip = false

 /* ElementUI */
Vue.use(ElementUI);
/* 全局组件 */
Vue.use(globalComponents);
/* 全局方法 */
Vue.use(globalUtils);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

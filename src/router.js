import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './views/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/article/articleEdit',
    name: 'ArticleEdit',
    component: function (resolve) {
      require(['./views/article/articleEdit/AritcleEdit.vue'], resolve)
    }
  }, {
    path: '*',
    component: function (resolve) {
      require(['./views/notFound/NoFound.vue'], resolve)
    }
  }]
})

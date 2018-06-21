import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './views/HelloWorld.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: function (resolve) {
        require(['./views/home/Home.vue'], resolve)
      }
    }, {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '*',
      component: function (resolve) {
        require(['./views/notFound/NoFound.vue'], resolve)
      }
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import flashfoodSite from '../pages/flashfood-site.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/flashfood-site',
      name: 'flashfood-site',
      component: flashfoodSite
    }
  ]
})
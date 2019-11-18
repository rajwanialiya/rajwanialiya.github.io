import Vue from 'vue'
import Router from 'vue-router'
import flashfoodSite from '../components/pages/flashfood-site.vue'
import home from '../components/pages/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/flashfood-site',
      name: 'flashfood-site',
      component: flashfoodSite
    }, 
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
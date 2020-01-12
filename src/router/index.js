import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/pages/home.vue'
import flashfoodSite from '../components/pages/flashfood-site.vue'
import flashfoodCounter from '../components/pages/flashfood-counter.vue'
import tbEmail from '../components/pages/tb-email.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/flashfood-site',
      name: 'flashfood-site',
      component: flashfoodSite
    },
    {
      path: '/flashfood-counter',
      name: 'flashfood-counter',
      component: flashfoodCounter
    },
    {
      path: '/tb-email-preferences',
      name: 'tb-email',
      component: tbEmail
    }
  ]
})
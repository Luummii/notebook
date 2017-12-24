import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [    
    { path: '/', redirect: 'Home' },
    { path: '/Home', name: 'Home', component: Home },
    { path: '*', redirect: '/' }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Main from '../pages/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [    
    { path: '/', redirect: 'Main' },
    { path: '/Main', name: 'Main', component: Main },
    { path: '*', redirect: '/' }
  ]
})

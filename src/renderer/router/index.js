import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Task from '../pages/Task.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [    
    { path: '/', redirect: 'Home' },
    { path: '/Home', name: 'Home', component: Home },
    { path: '/Task/:id', name: 'Task', component: Task },
    { path: '*', redirect: '/' }
  ]
})

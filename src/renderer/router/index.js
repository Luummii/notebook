import Vue from 'vue'
import VueRouter from 'vue-router'

import Currently from '../pages/Currently.vue'
import Task from '../pages/Task.vue'
import Notes from '../pages/Notes.vue'
import Options from '../pages/Options.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [    
    { path: '/Currently', name: 'Currently', component: Currently },
    { path: '/Task/:id', name: 'Task', component: Task },
    { path: '/Notes', name: 'Notes', component: Notes },
    { path: '/Options', name: 'Options', component: Options },
    { path: '*', redirect: '/Currently' }
  ]
})

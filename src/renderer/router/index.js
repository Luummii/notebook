import Vue from 'vue'
import VueRouter from 'vue-router'

import Tasks from '../pages/Tasks.vue'
import Task from '../pages/Task.vue'
import Notes from '../pages/Notes.vue'
import Options from '../pages/Options.vue'
import AddTask from '../pages/AddTask.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [    
    { path: '/Tasks', name: 'Tasks', component: Tasks },
    { path: '/Task/:id', name: 'Task', component: Task },
    { path: '/Notes', name: 'Notes', component: Notes },
    { path: '/Options', name: 'Options', component: Options },
    { path: '/AddTask', name: 'AddTask', component: AddTask },
    { path: '*', redirect: '/Tasks' }
  ]
})

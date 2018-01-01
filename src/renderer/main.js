import Vue from 'vue'
import axios from 'axios'
import firebase from 'firebase'
import config from '../../config/firebase'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.mixin({
  methods: {
    goToPath (id) {
      console.log(id)
      router.push({ path: '/Task/' + id })         
    }
  }
})

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

import Vue from 'vue'
import firebase from 'firebase'
import config from '../../config/firebase'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.prototype.$eventStore = new Vue()

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

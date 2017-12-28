import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

/* import eventCalendar from './components/calendar/index'
eventCalendar(Vue, { locale: 'en' }) */

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

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

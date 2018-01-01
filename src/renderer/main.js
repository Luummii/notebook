import Vue from 'vue'
import axios from 'axios'
import firebase from 'firebase'

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

// firebase
const config = {
  apiKey: "AIzaSyAbGFxgjGMXz_MhlkaaK18TiKNMkBH32Sk",
  authDomain: "notebook-vuejsfun.firebaseapp.com",
  databaseURL: "https://notebook-vuejsfun.firebaseio.com",
  projectId: "notebook-vuejsfun",
  storageBucket: "notebook-vuejsfun.appspot.com",
  messagingSenderId: "753421648668"
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

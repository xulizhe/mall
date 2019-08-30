import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './assets/scss/index.scss'

import { Swipe, SwipeItem, Lazyload } from 'vant'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

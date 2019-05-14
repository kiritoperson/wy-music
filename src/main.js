// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import Carousel3d from 'vue-carousel-3d'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/style.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Carousel3d)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  Element,
  components: { App },
  template: '<App/>'
})

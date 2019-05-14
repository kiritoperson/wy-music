import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/pages/Recommend'
import HeaderComponent from '@/components/HeaderComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }
  ]
})

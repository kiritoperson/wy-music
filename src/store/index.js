import Vue from 'vue'
import Vuex from 'vuex'
import banner from './modules/banner'
import songlist from './modules/songlist'
import singer from './modules/singer'
import mv from './modules/mv'
import toplist from './modules/toplist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    banner,
    songlist,
    singer,
    mv,
    toplist
  }
})

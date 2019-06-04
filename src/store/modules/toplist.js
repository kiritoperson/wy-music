
import { axiosRq } from '../../config'

export default {
  state: {
    soarsongs: [], // 飙升榜
    newtopsongs: [], // 新歌榜
    originalsongs: [] // 原创歌榜
  },
  mutations: {
    GRTSOARSONGS (state, res) {
      state.soarsongs = res
    },
    GRTNEWTOPSONGS (state, res) {
      state.newtopsongs = res
    },
    GRTORIGNALSONGS (state, res) {
      state.originalsongs = res
    }
  },
  actions: {
    // Top list songs
    async getToplistData ({commit}, {id}) {
      let params = {
        'idx': id
      }
      let res = await axiosRq('GET', 'top/list', params)
      commit('GETTOPLIST', res)
      return res
    }
  }
}

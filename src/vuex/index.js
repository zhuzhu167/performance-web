import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)
// 状态管理器
export default new Vuex.Store({
  state: {
    renli: true,
    jinliOrzuzhang: false,
    zuyuan: false,
  },
  getters,
  actions,
  mutations
})

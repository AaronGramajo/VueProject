import rootActions from './rootActions.js'
import rootMutations from './rootMutations.js'
import rootGetters from './rootGetters.js'
import rootAxios from './axiosHelpers/axiosIndex.js'

export default {
  modules: {
    rootAxios: rootAxios
  },
  state() {
    return {
      isHome: false
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
}
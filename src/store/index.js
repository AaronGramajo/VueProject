import rootActions from './rootActions.js'
import rootMutations from './rootMutations.js'
import rootGetters from './rootGetters.js'
import rootAxios from './axiosHelpers/axiosIndex.js'
import rootAptitudes from './aptitudes/aptitudesIndex.js'

export default {
  modules: {
    rootAxios: rootAxios,
    rootAptitudes: rootAptitudes
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
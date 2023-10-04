import axiosActions from "./axiosActions";
import axiosGetters from "./axiosGetters";
import axiosMutations from "./axiosMutations";

export default {
  state() {
    return {
      presentation: '',
      isLoading: true,
      education: '',
      experience: '',
    }
  },
  mutations: axiosMutations,
  actions: axiosActions,
  getters: axiosGetters
}
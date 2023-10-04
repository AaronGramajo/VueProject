export default {
  setPresentation(state, payload) {
    state.presentation = payload.setData
    state.isLoading = payload.setLoader
  },
  setEducation(state, payload) {
    state.education = payload.setData
  },
  setExperience(state, payload) {
    state.experience = payload.setData
  }
}
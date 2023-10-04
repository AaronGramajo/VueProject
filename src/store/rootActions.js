export default {
  setNavbar(context) {
    context.commit('setNavbar', {setNav: true})
  },
  quitarNavbar(context) {
    context.commit('setNavbar', {setNav: false})
  }
}
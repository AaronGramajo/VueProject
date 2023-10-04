import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Routes from './routes.js'
import Store from './store/index.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if(to.name === "home") {
    store.dispatch('quitarNavbar')
  } else {
    store.dispatch('setNavbar')
  }
  next();
})

// arreglar el navbar seteando las rutas con las actions correctas

const store = new Vuex.Store(Store)

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')

import HomePage from './components/HomePage.vue';
import PresentacionVue from './components/PresentacionMain.vue';
import ExperenciaVue from './components/ExperenciaVue.vue';
import ContactoVue from './components/Contacto.vue';
import NotFound from './components/NotFound.vue';

export default [
  {path: '/', redirect: '/home'},
  {path:'/home',name:'home', component: HomePage},
  {path:'/presentacion', component: PresentacionVue},
  {path:'/experencia', component: ExperenciaVue},
  {path:'/contacto', component: ContactoVue},
  {path:'/*', component: NotFound}
]
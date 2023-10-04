
<template>
  <v-app>
    <NavBar v-if="isHome"/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterVue/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterVue from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    FooterVue
},

  data: () => ({
  }),
  computed: {
    isHome() {
      return this.$store.getters.userIsHome
    }
  }
};
</script>

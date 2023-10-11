
<template>
  <v-app>
    <NavBar v-if="isHome"/>
    <v-main style="background: linear-gradient(63deg, rgba(70,59,161,1) 0%, rgba(225,225,225,1) 33%, rgba(70,59,161,1) 100%);">
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

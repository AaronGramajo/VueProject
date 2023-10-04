<template>
  <v-container class="mt-10">
    <h2 class="text-center mt-6">Sorry, page not found or currently undergoing maintenance</h2>
    <h3 class="text-center">Return to <router-link to="/" class="font-weight-bold text-decoration-none"><p class="d-inline-block" @click="quitarNavbar">home page</p></router-link> </h3>
  </v-container>
</template>

<script>
export default {
  methods: {
      quitarNavbar() {
        this.$store.dispatch('quitarNavbar')
      }
    }
}
</script>
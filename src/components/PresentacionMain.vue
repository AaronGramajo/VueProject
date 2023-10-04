<template>
  <v-container class="d-flex flex-column mt-8">
    <p class="text-h4 font-weight-bold mb-0">Aaron Gramajo</p>
    <div class="d-flex mt-4">
      <v-card class="mr-3" max-width="900">
        <v-card-text>
          <div class="text-h5 text--primary" v-if="!isLoading">
            {{ presentacion }}
          </div>
          <v-skeleton-loader
          width="900"
          type="article"
          v-else
        ></v-skeleton-loader>
        </v-card-text>
      </v-card>
      <v-img
        class="rounded-lg"
        max-width="250"
        src="../assets/perfil_pa_cv.jpg"
      ></v-img>
    </div>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchPresentation')
  },
  data() {
    return {
    };
  },
  computed: {
    presentacion() {
      return this.$store.getters.presentation
    },
    isLoading() {
      return this.$store.getters.isLoading
    }
  }
};
</script>
<template>
  <div>
    <v-card class="mx-auto mt-10 overflow-auto" max-width="600">
      <v-card-title>Experencia:</v-card-title>
      <div v-if="isLoadingExperencia">
        <div v-for="experencia in experencias" :key="experencia.titulo">
          <v-card-text class="text-overline font-weight-black pb-0">{{
            experencia.titulo
          }}</v-card-text>
          <v-card-text class="text-overline font-weight-black pt-2"
            >{{ experencia.subtitulo }}
            <p class="pointer" @click="abrirPagina(experencia.link)">
              {{ experencia.link }}
            </p></v-card-text
          >
        </div>
      </div>
      <v-skeleton-loader width="600" type="article" v-else></v-skeleton-loader>
    </v-card>

    <v-card class="mx-auto mt-10 overflow-auto mb-10" max-width="600">
      <v-card-title>Educacion:</v-card-title>
      <div v-if="isLoadingEducaciones">
        <div v-for="educacion in educaciones" :key="educacion.titulo">
          <v-card-text class="text-overline font-weight-black pb-0 pt-0">{{
            educacion.titulo
          }}</v-card-text>
          <v-card-text class="font-weight-black pt-0">{{
            educacion.subtitulo
          }}</v-card-text>
        </div>
      </div>
      <v-skeleton-loader width="600" type="article" v-else></v-skeleton-loader>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ExperenciaVue",

  data() {
    return {
      experencias: {},
      educaciones: {},
      link: "",
      isLoadingExperencia: false,
      isLoadingEducaciones: false,
    };
  },
  created() {
    this.setEducacions();
    this.setExperencias();
  },
  methods: {
    async setEducacions() {
      await this.getEducation();
      this.educaciones = this.education;
      this.isLoadingEducaciones = true;
    },
    async setExperencias() {
      await this.getExperience();
      this.experencias = this.experience;
      console.log(this.experencias);
      this.isLoadingExperencia = true;
    },
    abrirPagina(link) {
      window.open(link, "_blank");
    },
    ...mapActions(["getEducation", "getExperience"]),
  },
  computed: {
    ...mapGetters(["experience", "education"]),
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
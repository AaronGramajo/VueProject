<template>
  <div class="home">
    <div class="mb-10">
      <h1 class="text-center textColor pt-16">Aaron Ismael Gramajo</h1>
      <h2 class="text-center textColor">FullStack Developer</h2>
    </div>
    <div class="d-flex justify-space-around">
        <router-link :to="card.link" v-for="card in cards" :key="card.id" style="text-decoration: none;">
          <v-card class="mx-auto text-center" width="340">
            <v-img height="220" :src="card.img"></v-img>
            <v-card-title style="justify-content: center; font-size: 1.5rem;">
              {{ card.title }}
            </v-card-title>
            <v-card-subtitle style="font-weight: bold;">{{ card.subtitle }}</v-card-subtitle>
          </v-card>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          img: "https://media.istockphoto.com/id/1041618690/photo/heres-where-we-stand-so-far.jpg?s=170667a&w=0&k=20&c=v9ZJlhudnw4vVEQCrsZaLM_QaMzmAGUXtLDuyEsjv78=",
          title: "Presentacion",
          link: "/presentacion",
          subtitle: "Conoce un poco sobre mi",
        },
        {
          id: 2,
          img: "https://www.sanisidro.gob.ar/sites/default/files/img/bbva-educacion-e1464704439593-1024x424.jpg",
          title: "Educacion y Experencias",
          link: "/experencia",
          subtitle: "Ver mis experencias de trabajo y mis estudios",
        },
        {
          id: 3,
          img: "https://sutepa.com.ar/wp-content/uploads/2022/08/contacto.jpg",
          title: "Contacto",
          link: "/contacto",
          subtitle: "Aca podes contactarme por mail o whatsapp",
        },
      ],
    };
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  background-image: url("../assets/fondo.jpg");
  background-position: center;
  background-size: cover;
}

.textColor {
  color: white;
  text-shadow: 5px 2px 2px rgba(143, 11, 172, 0.8);
  font-size: 4rem;
}
</style>
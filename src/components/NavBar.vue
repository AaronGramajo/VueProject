<template>
    <v-app-bar app color="secundary" dark>
        <div>
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <router-link to="/"><v-btn prepend-icon="$vuetify" v-bind="attrs" v-on="on"><v-icon>mdi-home</v-icon></v-btn></router-link>
            </template>
            <span>Ir a Home</span>
          </v-tooltip>
        </div>

        <v-spacer></v-spacer>


        <div class="d-flex align-center">
            <router-link to="/presentacion"><v-btn prepend-icon="$vuetify">Presentacion</v-btn></router-link>
            <router-link to="/experencia"><v-btn prepend-icon="$vuetify">Experiencia y educacion</v-btn></router-link>
            <router-link to="/aptitudes"><v-btn prepend-icon="$vuetify">Aptitudes</v-btn></router-link>
            <router-link to="/contacto"><v-btn prepend-icon="$vuetify">Contacto</v-btn></router-link>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar'
};
</script>
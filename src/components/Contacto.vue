<template>
  <v-container>
    <h1>Contactame</h1>
    <v-form ref="form" v-model="valid" @submit.prevent="enviar">
      <v-row>
        <v-col cols="6">
          <v-text-field v-model.trim="nombre" :counter="30" :rules="nombreRules" label="Nombre"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model.trim="apellido" :counter="30" :rules="nombreRules" label="Apellido"></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="6">
          <v-text-field v-model.trim="email" :rules="emailRules" label="E-mail"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select v-model="select" :items="solicitud" :rules="solicitudRules" label="Solicitud"></v-select>
        </v-col>
      </v-row>

      <v-textarea label="Mensaje" :counter="100" v-model.trim="mensaje" :rules="mensajeRules" auto-grow
        rows="1"></v-textarea>
      
      <p class="mb-0">Preferencia de horario</p>
      <div class="d-flex justify-space-around mt-0">
        <v-checkbox class="mr-5" v-model="horario" value="mañana" label="Mañana" :rules="horarioRules"></v-checkbox>
        <v-checkbox class="mr-5" v-model="horario" value="tarde" label="Tarde" :rules="horarioRules"></v-checkbox>
        <v-checkbox v-model="horario" value="indiferente" label="Indiferente" :rules="horarioRules"></v-checkbox>
      </div>

      <div class="d-flex justify-end">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="mr-5" v-bind="attrs" v-on="on" @click="reset">mdi-filter-remove-outline</v-icon>
          </template>
          <span>Limpiar formulario</span>
        </v-tooltip>

        <div>
          <v-btn type="Submit" :disabled="!valid" color="success" class="mr-4">
            Enviar
          </v-btn>

          <v-alert :value='alert' type="success" dense icon="mdi-clock-fast" transition="scale-transition">
            Preparando para mandar mensaje!
          </v-alert>
        </div>
      </div>
    </v-form>

  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'ContactVue',

  data() {
    return {
      valid: false,
      nombre: '',
      apellido:'',
      nombreRules: [
        v => !!v || 'Nombre es requerido',
        v => isNaN(v) || 'Nombre invalido'
      ],
      email: '',
      emailRules: [
        v => !!v &&
          /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
      ],
      select: null,
      solicitud: [
        'Entrevista',
        'Trabajo particular',
        'Otro'
      ],
      solicitudRules: [
        v => !!v || 'Porfavor elija una opcion'
      ],
      mensaje: '',
      mensajeRules: [
        v => !!v || 'Porfavor escribe un mensaje'
      ],
      horario: null,
      horarioRules: [
        v => !!v || 'Porfavor elija un horario'
      ],
      alert: false,
      numCelular: null
    };
  },

  created() {
    this.getNumCelular()
  },

  methods: {
    ...mapActions({
      fetchCelu: 'rootAxios/fetchCelu',
      postForm: 'rootAxios/postForm'
    }),
    reset() {
      this.$refs.form.reset()
    },
    async getNumCelular() {
      this.numCelular = await this.fetchCelu()
    },
    async sendForm() {
      const formData = {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        solicitud: this.select,
        mensaje: this.mensaje,
        horario: this.horario
      }

      try {
        const res = await this.postForm(formData)
        if (res.status === 200) {
          this.mandarMensaje()
          this.reset()
        } else {
          console.error(Error)
        }
      } catch (error) {
        console.error(error)
      }
    },
    enviar() {
      this.alert = !this.alert
      this.sendForm()
      this.alert = !this.alert
    },
    mandarMensaje() {
      const text = `hola soy ${this.nombre} ${this.apellido}, te solicito para un/a ${this.select} y ${this.mensaje}. estoy disponible a la ${this.horario} para contactarte. Espero tu respuesta!`
      window.open(`https://api.whatsapp.com/send?phone=${this.numCelular}&text=${encodeURIComponent(text)}`)
    }
  }
};
</script>

<style scoped></style>
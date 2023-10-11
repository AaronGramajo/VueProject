import axios from 'axios'

export default {
  async fetchPresentacion() {
    try {
      const data = await axios.get(
        "https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Aaron/presentacion.json"
      )
      return data?.data;
    } catch (error) {
      console.log(error)
    }
  },
  
  async getEducacion() {
    try {
      return (await axios.get('https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Aaron/estudios.json'))?.data;
    } catch (error) {
      console.log(error)
    }
  },

  async getExperencias() {
    try {
      return (await axios.get('https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Aaron/estudios.json'))?.data;
    } catch (error) {
      console.log(error)
    }
  },

  async fetchCelu() {
    try {
      return (await axios.get('https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Aaron/celContacto.json')).data
    } catch (error) {
      console.log(error)
    }
  },

  async postForm(context, payload) {
    try {
      return await axios.post('https://pil-2023-land-default-rtdb.firebaseio.com/contacto/Aaron.json', payload)
    } catch (error) {
      console.error('no se pudo mandar los datos', error)
    }
  }
}
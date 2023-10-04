import axios from 'axios'

export default {
  async fetchPresentation(context) {
    try {
      const data = await axios.get(
        "https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Aaron/presentacion.json"
      )
      context.commit('setPresentation', {setData: data.data, setLoader: false})
    } catch (error) {
      console.log(error)
    }
  },
  
  async getEducation(context) {
    try {
      const data = await axios.get('https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Aaron/estudios.json')
      context.commit('setEducation', {setData: data.data})
    } catch (error) {
      console.log(error)
    }
  },

  async getExperience(context) {
    try {
      const data = await axios.get('https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Aaron/estudios.json')
      context.commit('setExperience', {setData: data.data})
    } catch (error) {
      console.log(error)
    }
  }
}
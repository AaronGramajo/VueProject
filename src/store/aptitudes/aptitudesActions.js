import axios from 'axios'

export default {
    async getDataTable() {
        try {
            return (await axios.get('https://vueprojectbackend-fa2fd-default-rtdb.firebaseio.com/items.json'))?.data;
        } catch (error) {
            console.error('No se pudo trear los datos', error)
        }
    },
    async addToDataTable(_, payload) {
        try {
            console.log(payload)
            return await axios.post('https://vueprojectbackend-fa2fd-default-rtdb.firebaseio.com/items.json', payload)
        } catch (error) {
            console.error('No se pudo guardar los datos', error)
        }
    },
    async modifyItem(_, payload) {
        try {
            return axios.put(`https://vueprojectbackend-fa2fd-default-rtdb.firebaseio.com/items/${payload.id}`, payload)
        } catch (error) {
            console.error('No se pudo modificar los datos', error)
        }
    },
    async deleteItem(_, id) {
        try {
            return axios.delete(`https://vueprojectbackend-fa2fd-default-rtdb.firebaseio.com/items/${id}`)
        } catch (error) {
            console.error('No se pudo borrar los datos', error)
        }
    }
}


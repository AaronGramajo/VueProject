<template>
    <div>
        <h1 class="text-center my-5">Mis Aptitudes</h1>
        <v-container>
            <v-card>
                <v-row>
                    <v-col cols="6">
                        <v-card-title>Mis Aptitudes</v-card-title>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <!-- save btn -->
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="2" class="align-items-end">
                        <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                New Item
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="nombre" label="Nombre"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-select v-model="novato" :items="opciones" label="Novato"></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-select v-model="intermediano" :items="opciones" label="Intermediano"></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-select v-model="avanzado" :items="opciones" label="Avanzado"></v-select>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="PostDataTable()">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="dialogDelete = false">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItem()">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                    </v-dialog>
                    </v-col>
                </v-row>
                <v-data-table
                :headers="headers"
                :items="conocimientos"
                :items-per-page="5"
                :search="search"
                class="elevation-1"
                >
                <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="borrarItem(item)">
                    mdi-delete
                </v-icon>
            </template>
                </v-data-table>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'VueProjectAptitudes',

    data() {
        return {
            search: '',
            headers: [
                {
                    text: 'Aptitudes',
                    align: 'start',
                    sortable: false,
                    value: 'nombre'
                },
                { text: 'Novato', value: 'novato' },
                { text: 'Intermediano', value: 'intermediano' },
                { text: 'Avanzado', value: 'avanzado' },
                { text: 'Actions', sortable: false, value: 'actions' }
            ],
            conocimientos: [],
            nombre: '',
            novato: null,
            intermediano: null,
            avanzado: null,
            opciones: [
                true, false
            ],
            dialog: false,
            dialogDelete: false,
            formTitle: 'form',
        };
    },
    created() {
        this.setearDataTable()
    },
    methods: {
        ...mapActions({
            getDataTable: 'rootAptitudes/getDataTable',
            addToDataTable: 'rootAptitudes/addToDataTable',
            modifyItem: 'rootAptitudes/modifyItem',
            deleteItem: 'rootAptitudes/deleteItem'
        }),
        async setearDataTable() {
            try {
                let data = await this.getDataTable()
                if (data == null) {
                    console.log("No hay datos")
                } else {
                    const dataArray = Object.keys(data).map(key => {
                    const objectoConId = data[key];
                    objectoConId.id = key;
                    return objectoConId;
                    })
                    this.conocimientos = dataArray
                }
            } catch (error) {
                console.error('no se pudo setear los datos', error)
            }
        },
        async PostDataTable() {
            const nuevoItem = {
                id: Date.now(),
                nombre: this.nombre,
                novato: this.novato,
                intermediano: this.intermediano,
                avanzado: this.avanzado
            }
            console.log(nuevoItem)
            try {
                const res = await this.addToDataTable(nuevoItem)
                if (res.status === 200) {
                    alert('Agregado exitosamente')
                    console.log(res)
                } else {
                    alert('Hubo un error agregando el nuevo item')
                }
            } catch (error) {
                console.error('Hubo un error al mandar los datos',error)
            }
            this.dialog = false
        },
        async editItem(item) {
            this.dialog = true
            console.log(item)
            // await this.modifyItem(item)
        },
        async borrarItem(item) {
            await this.deleteItem(item.id)
            // this.dialogDelete = false
        },
        toggleDialogDelete() {
            this.dialogDelete = !this.dialogDelete
            console.log(this.dialogDelete)
        }
    },
};
</script>

<style scoped></style>
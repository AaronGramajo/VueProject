<template>
    <footer class="text-center">
        <div>
            <span class="text-center">copyright &copy; todos los derechos reservados</span><br>
            <span class="text-center">Desarollado por Aaron Gramajo</span>
        </div>
        <div class="d-flex flex-row justify-center">
            <ul class="d-flex flex-row" style="list-style: none;">
                <li v-for="red in redes" :key="red"> <v-icon @click="redirigirSociales(`${red}`)">mdi-{{red}}</v-icon> </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'ProyectoVueLandingFooter',

    data() {
        return {
            redes: [
                'facebook',
                'instagram',
                'gmail',
                'twitch',
                'whatsapp'
            ]
        };
    },

    methods: {
        redirigirSociales(val) {
        if (val == 'facebook') window.open('https://www.facebook.com', '_blank');
        if (val == 'instagram') window.open('https://www.instagram.com', '_blank');
        if (val == 'gmail') window.open('https://www.gmail.com', '_blank');
        if (val == 'twitch') window.open('https://www.twitch.tv', '_blank');
        if (val == 'whatsapp') window.open('https://www.whatsapp.com', '_blank');
        },

    },
};
</script>
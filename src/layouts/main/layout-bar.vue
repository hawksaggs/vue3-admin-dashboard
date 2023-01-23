<template>
    <v-app :theme="theme">
        <layoutAppVue v-on:tema="tema"></layoutAppVue>
        <layoutViewVue></layoutViewVue>
    </v-app>
</template>

<script>
    import layoutAppVue from './layout-app.vue';
    import layoutViewVue from './layout-view.vue';
    export default {
        components: {
            layoutAppVue,
            layoutViewVue
        },
        data() {
            return {
                theme: 'light'
            }
        },
        methods: {
            tema() {
                this.theme = 'dark'
            }
        }
    }
</script>
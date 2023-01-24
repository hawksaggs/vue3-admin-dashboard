<template>
    <v-app :theme="is_dark ? 'dark' : 'light'">
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
                theme: 'light',
                is_dark: false
            }
        },
        methods: {
            tema() {
                this.is_dark = this.is_dark ? false : true;
            }
        }
    }
</script>
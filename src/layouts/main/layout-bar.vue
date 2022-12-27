<template>
    <v-app>
        <layoutAppVue></layoutAppVue>
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
        }
    }
</script>
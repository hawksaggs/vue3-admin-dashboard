<template>
    <v-app :theme="theme">
        <layoutAppVue v-on:tema="tema"></layoutAppVue>
        <layoutViewVue></layoutViewVue>
        <footerViewVue></footerViewVue>
    </v-app>
</template>

<script>
    import layoutAppVue from './layout-app.vue';
    import layoutViewVue from './layout-view.vue';
    import footerViewVue from '@/components/footer/footer-component.vue';
    export default {
        components: {
            layoutAppVue,
            layoutViewVue,
            footerViewVue
        },
        data() {
            return {
                theme: 'light',
                is_dark: false
            }
        },
        mounted() {
            this.getTheme()
        },  
        methods: {
            tema() {
                this.is_dark = this.is_dark ? false : true;
                if(this.is_dark === true) {
                    this.theme = 'dark';
                    this.themeStorage();
                } else {
                    this.theme = 'light';
                    this.themeStorage();
                }
            },
            themeStorage() {
                localStorage.setItem('theme', this.theme);
            },
            getTheme() {
                this.theme = localStorage.getItem('theme');
            }
        }
    }
</script>
<template>
  <div>
    <v-container>
        <titlebarComponent :title="title" :routes="routes"></titlebarComponent>
        <galeryComponent></galeryComponent>
        <v-row>
            <myFooter></myFooter>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebarComponent from '@/components/titlebar/titlebar-component.vue';
import galeryComponent from '@/components/galery/galery-component.vue';
import myFooter from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarComponent,
        galeryComponent,
        myFooter
    },
    data:() => {
        return {
            title: 'Galery',
            routes: [
                {
                    title: "Components",
                    disabled: false,
                    href: "#",
                },
                {
                    title: "Galery",
                    disabled: false,
                    href: "galery",
                },
            ],
        }
    }
}
</script>

<style scoped>
.mb {
  margin-bottom: 15px;
}
.main-bg {
  background-color: rgb(227, 227, 221);
  height: 100%;
}
</style>
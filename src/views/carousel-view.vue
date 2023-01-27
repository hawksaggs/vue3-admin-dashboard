<template>
  <div>
    <v-container>
        <titlebarComponent :title="title" :routes="routes" class="mb"></titlebarComponent>
        <v-row>
            <v-col lg="6" sm="12">
                <styleOne></styleOne>
            </v-col>
            <v-col lg="6" sm="12">
                <styleTwo></styleTwo>
            </v-col>
            <v-col lg="12" sm="12">
                <styleThree></styleThree>
            </v-col>
        </v-row>
        <v-row>
            <footerComponentVue></footerComponentVue>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebarComponent from '@/components/titlebar/titlebar-component.vue';
import styleOne from '@/components/carousel/carousel-style-one-component.vue';
import styleTwo from '@/components/carousel/carousel-style-two-component.vue';
import styleThree from '@/components/carousel/carousel-style-three-component.vue';
import footerComponentVue from "@/components/footer/footer-component.vue";
export default {
    components: {
        titlebarComponent,
        styleOne,
        styleTwo,
        styleThree,
        footerComponentVue
    },
    data() {
        return {
            title: "Carousel",
            routes: [
                {
                    title: "Components",
                    disabled: false,
                    href: "#",
                },
                {
                    title: "Carousel",
                    disabled: false,
                    href: "carousel",
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
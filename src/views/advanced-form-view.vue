<template>
  <div>
    <v-container>
        <titlebarComponent :title="title" :routes="routes" class="mb"></titlebarComponent>
        <v-row>
            <v-col lg="6" sm="12">
                <advancedFormOne></advancedFormOne>
            </v-col>
            <v-col lg="6" sm="12">
                <advancedFormTwo></advancedFormTwo>
            </v-col>
            <v-col lg="6" sm="12">
                <advancedFormThree></advancedFormThree>
            </v-col>
            <v-col lg="6" sm="12">
                <advancedFormFour></advancedFormFour>
            </v-col>
        </v-row>
        <v-row>
            <myFooter></myFooter>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebarComponent from '@/components/titlebar/titlebar-component.vue';
import advancedFormOne from '@/components/form/advanced-form/advanced-form-one-component.vue';
import advancedFormTwo from '@/components/form/advanced-form/advanced-form-two-component.vue';
import advancedFormThree from '@/components/form/advanced-form/advanced-form-three-component.vue';
import advancedFormFour from '@/components/form/advanced-form/advanced-form-four-component.vue';
import myFooter from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarComponent,
        advancedFormOne,
        advancedFormTwo,
        advancedFormThree,
        advancedFormFour,
        myFooter
    },
    data: () => ({
        title: 'Advanced Form',
        routes: [
            {
                title: "Form",
                disabled: false,
                href: "#",
            },
            {
                title: "Advanced Form",
                disabled: false,
                href: "form-advanced",
            },
        ],
    })
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
.margin {
    margin-top: 29%;
}
</style>
<template>
  <div>
    <v-container>
        <titlebarComponent :title="title" :routes="routes" class="mb"></titlebarComponent>
        <v-row>
            <v-col lg="6" sm="12">
                <stdFormOne></stdFormOne>
            </v-col>
            <v-col lg="6" sm="12">
                <stdFormTwo></stdFormTwo>
            </v-col>
            <v-col lg="6" sm="12">
                <stdFormThree></stdFormThree>
            </v-col>
            <v-col lg="6" sm="12">
                <stdFormFour></stdFormFour>
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
import stdFormOne from '@/components/form/standard-form/std-form-one-component.vue';
import stdFormTwo from '@/components/form/standard-form/std-form-two-component.vue';
import stdFormThree from '@/components/form/standard-form/std-form-three-component.vue';
import stdFormFour from '@/components/form/standard-form/std-form-four-component.vue';
import myFooter from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarComponent,
        stdFormOne,
        stdFormTwo,
        stdFormThree,
        stdFormFour,
        myFooter
    },
    data: () => ({
        title: 'Standard Form',
        routes: [
            {
                title: "Form",
                disabled: false,
                href: "#",
            },
            {
                title: "Standard Form",
                disabled: false,
                href: "form-standard",
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
<template>
  <div>
    <v-container>
        <titlebarComponent :title="title" :routes="routes" class="mb"></titlebarComponent>
        <v-row>
            <v-col lg="6" sm="12">
                <tableOne></tableOne>
            </v-col>
            <v-col lg="6" sm="12">
                <tableTwo></tableTwo>
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
import tableOne from '@/components/table/table-one-component.vue';
import tableTwo from '@/components/table/table-two-component.vue';
import myFooter from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarComponent,
        tableOne,
        tableTwo,
        myFooter
    },
    data: () => ({
        title: 'Table',
        routes: [
            {
                title: "Components",
                disabled: false,
                href: "#",
            },
            {
                title: "Table",
                disabled: false,
                href: "table",
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
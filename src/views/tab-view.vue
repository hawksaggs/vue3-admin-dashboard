<template>
  <div>
    <v-container>
        <titlebar :title="title" :routes="routes" class="mb"></titlebar>
        <v-row>
            <v-col lg="6" sm="12">
                <tabOne></tabOne>
            </v-col>
            <v-col lg="6" sm="12">
                <tabTwo></tabTwo>
            </v-col>
            <v-col lg="6" sm="12">
                <tabThree></tabThree>
            </v-col>
            <v-col lg="6" sm="12">
                <tabFour></tabFour>
            </v-col>
        </v-row>
        <div class="margin">
            <myFooter></myFooter>
        </div>
    </v-container>
  </div>
</template>

<script>
import titlebar from '@/components/titlebar/titlebar-component.vue';
import tabOne from '@/components/tab/tab-one-component.vue';
import tabTwo from '@/components/tab/tab-two-component.vue';
import tabThree from '@/components/tab/tab-three-component.vue';
import tabFour from '@/components/tab/tab-four-component.vue';
import myFooter from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebar,
        tabOne,
        tabTwo,
        tabThree,
        tabFour,
        myFooter
    },
    data: () => {
        return {
            title: 'Tab',
            routes: [
                {
                    title: "Components",
                    disabled: false,
                    href: "#",
                },
                {
                    title: "Tab",
                    disabled: false,
                    href: "tab",
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
.margin {
    margin-top: 29%;
}
</style>
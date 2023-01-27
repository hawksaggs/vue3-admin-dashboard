<template>
  <div>
    <v-container>
        <titlebarComponent :title="title" :routes="routes" class="mb"></titlebarComponent>

        <v-row>
            <v-col lg="3" sm="12">
                <pickerOne></pickerOne>
            </v-col>
            <v-col lg="3" sm="12">
                <pickerTwo></pickerTwo>
            </v-col>
            <v-col lg="6" sm="12">
                <pickerThree></pickerThree>
            </v-col>
        </v-row>

        <div class="margin">
            <myFooter></myFooter>
        </div>
    </v-container>
  </div>
</template>

<script>
import titlebarComponent from '@/components/titlebar/titlebar-component.vue';
import pickerOne from '@/components/color-picker/picker-one.vue';
import pickerTwo from '@/components/color-picker/picker-two.vue';
import pickerThree from '@/components/color-picker/picker-three.vue';
import myFooter from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarComponent,
        pickerOne,
        pickerTwo,
        pickerThree,
        myFooter
    },
    data: () => {
        return {
            title: 'Color Picker',
            routes: [
                {
                    title: "Components",
                    disabled: false,
                    href: "#",
                },
                {
                    title: "Color Picker",
                    disabled: false,
                    href: "color-picker",
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
    margin-top: 25%;
}
</style>
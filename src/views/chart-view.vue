<template>
  <div>
    <v-container>
        <titlebar :title="title" :routes="routes" class="mb"></titlebar>
        <v-row>
            <v-col lg="6" sma="12">
                <lineChart></lineChart>
            </v-col>
            <v-col lg="6" sma="12">
                <barChart></barChart>
            </v-col>
            <v-col lg="6" sma="12">
                <doughnutChart></doughnutChart>
            </v-col>
            <v-col lg="6" sma="12">
                <pieChart></pieChart>
            </v-col>
        </v-row>

        <v-row>
            <myfooter></myfooter>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebar from '@/components/titlebar/titlebar-component.vue';
import lineChart from '@/components/chart/line/line-chart-component.vue';
import barChart from '@/components/dashboard/chart-component.vue';
import doughnutChart from '@/components/chart/doughnut/doughnut-chart-component.vue';
import pieChart from '@/components/chart/pie/pie-chart-component.vue';
import myfooter from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebar,
        lineChart,
        barChart,
        doughnutChart,
        pieChart,
        myfooter
    },
    data() {
        return {
            title: "Chart",
            routes: [
                {
                    title: "Components",
                    disabled: false,
                    href: "#",
                },
                {
                    title: "Chart",
                    disabled: false,
                    href: "chart",
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
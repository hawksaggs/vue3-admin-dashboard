<template>
  <div>
    <v-container>
        <titlebar :title="title" :routes="routes" class="mb"></titlebar>

        <v-row>
            <v-col lg="12" sm="12">
                <timelineOne></timelineOne>
            </v-col>
            <v-col lg="12" sm="12">
                <timelineTwo></timelineTwo>
            </v-col>
            <v-col lg="12" sm="12">
                <timelineThree></timelineThree>
            </v-col>
        </v-row>
        <v-row>
            <myFooter></myFooter>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebar from '@/components/titlebar/titlebar-component.vue';
import timelineOne from '@/components/timeline/timeline-one-component.vue';
import timelineTwo from '@/components/timeline/timeline-two-component.vue';
import timelineThree from '@/components/timeline/timeline-three-component.vue';
import myFooter from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebar,
        timelineOne,
        timelineTwo,
        timelineThree,
        myFooter
    },
    data:() => ({
        title: 'Timeline',
        routes: [
            {
                title: "Components",
                disabled: false,
                href: "#",
            },
            {
                title: "Timeline",
                disabled: false,
                href: "timeline",
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
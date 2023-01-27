<template>
  <div>
    <v-container>
      <titleBar class="mb" :title="title" :routes="routes"></titleBar>
      <badgeComponent class="mb"></badgeComponent>
      <v-row>
        <v-col lg="col-6">
          <badgeTwoComponent class="mb"></badgeTwoComponent>
        </v-col>
        <v-col lg="col-6">
          <badgeThreeComponent class="mb"></badgeThreeComponent>
        </v-col>
      </v-row>
      <footerComponentVue class="footer"></footerComponentVue>
    </v-container>
  </div>
</template>

<script>
import titleBar from "@/components/titlebar/titlebar-component.vue";
import footerComponentVue from "@/components/footer/footer-component.vue";
import badgeComponent from "@/components/badge/badge-component.vue";
import badgeTwoComponent from "@/components/badge/badge-style-two-component.vue";
import badgeThreeComponent from "@/components/badge/badge-style-three-component.vue";
export default {
  components: {
    titleBar,
    footerComponentVue,
    badgeComponent,
    badgeTwoComponent,
    badgeThreeComponent,
  },
  data() {
    return {
      title: "Badge",
      routes: [
        {
          title: "Components",
          disabled: false,
          href: "#",
        },
        {
          title: "Badge",
          disabled: false,
          href: "badge",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mb {
  margin-bottom: 15px;
}
.main-bg {
  background-color: rgb(227, 227, 221);
  height: 100%;
}
.footer {
  margin-top: 140px;
}
</style>

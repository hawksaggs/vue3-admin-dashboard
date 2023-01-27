<template>
  <div>
    <v-container>
      <titleBar class="mb" :title="title" :routes="routes"></titleBar>
      <v-row>
        <v-col cols="cols">
          <infoAlertComponent></infoAlertComponent>
        </v-col>
        <v-col cols="cols">
          <successAlertComponent></successAlertComponent>
        </v-col>
      </v-row>

      <v-row class="mb">
        <v-col cols="cols">
          <dangerAlertComponent></dangerAlertComponent>
        </v-col>
        <v-col cols="cols">
          <warningAlertComponent></warningAlertComponent>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="cols">
          <footerComponentVue></footerComponentVue>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import titleBar from "@/components/titlebar/titlebar-component.vue";
import infoAlertComponent from "@/components/alert/info-alert-component.vue";
import successAlertComponent from "@/components/alert/success-alert-component.vue";
import dangerAlertComponent from "@/components/alert/danger-alert-component.vue";
import warningAlertComponent from "@/components/alert/warning-alert-component.vue";
import footerComponentVue from "@/components/footer/footer-component.vue";

export default {
  components: {
    titleBar,
    infoAlertComponent,
    successAlertComponent,
    dangerAlertComponent,
    warningAlertComponent,
    footerComponentVue,
  },
  data() {
    return {
      title: "Alert",
      routes: [
        {
          title: "Components",
          disabled: false,
          href: "#",
        },
        {
          title: "Alert",
          disabled: false,
          href: "alert",
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
</style>

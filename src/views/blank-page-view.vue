<template>
  <div>
    <v-container>
      <titleBar class="mb" :title="title" :routes="routes"></titleBar>

      <v-row>
        <v-col cols="cols">
          <footerComponentVue class="footer"></footerComponentVue>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import titleBar from "@/components/titlebar/titlebar-component.vue";
import footerComponentVue from "@/components/footer/footer-component.vue";
export default {
  components: {
    titleBar,
    footerComponentVue,
  },
  data() {
    return {
      title: "Blank Page",
      routes: [
        {
          title: "Blank Page",
          disabled: false,
          href: "blank-page",
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
  margin-top: 57%;
}
</style>

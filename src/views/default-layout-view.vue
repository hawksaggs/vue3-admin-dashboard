<template>
  <div>
    <v-container>
      <titleBar class="mb" :title="title" :routes="routes"></titleBar>
      <contentExample class="mb"></contentExample>
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
import contentExample from "@/components/default-layout/content-example-component.vue";
import footerComponentVue from "@/components/footer/footer-component.vue";
export default {
  components: {
    titleBar,
    contentExample,
    footerComponentVue,
  },
  data() {
    return {
      title: "Default Layout",
      routes: [
        {
          title: "Layout",
          disabled: false,
          href: "#",
        },
        {
          title: "Default Layout",
          disabled: false,
          href: "default-layout",
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
  margin-top: 45%;
}
</style>

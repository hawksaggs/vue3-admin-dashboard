<template>
  <div class="main-bg">
    <v-container>
      <titleBar class="mb"></titleBar>

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
import footerComponentVue from "@/components/footer/footer-component.vue";
export default {
  components: {
    titleBar,
    footerComponentVue,
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

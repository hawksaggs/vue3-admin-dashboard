<template>
  <div class="main-bg">
    <v-container>
      <topNavigationComponentVue></topNavigationComponentVue>

      <style1></style1>

      <v-row>
        <v-col cols="cols">
          <footerComponentVue></footerComponentVue>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import topNavigationComponentVue from "@/components/top-nav/top-navigation-component.vue";
import footerComponentVue from "@/components/footer/footer-component.vue";
import style1 from "@/components/top-nav/style1-component.vue";
export default {
  components: {
    footerComponentVue,
    topNavigationComponentVue,
    style1,
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
.bottom {
  position: absolute;
  bottom: 0;
  width: 70%;
}
</style>

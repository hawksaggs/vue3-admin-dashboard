<template>
  <div>
    <v-container>
      <topNavigationComponentVue></topNavigationComponentVue>

      <style1></style1>
    </v-container>
  </div>
</template>

<script>
import topNavigationComponentVue from "@/components/top-nav/top-navigation-component.vue";
import style1 from "@/components/top-nav/style1-component.vue";
export default {
  components: {
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

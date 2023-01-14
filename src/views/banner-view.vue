<template>
  <div class="main-bg">
    <v-container>
      <titlebarComponentVue
        :title="title"
        :routes="routes"
      ></titlebarComponentVue>
    </v-container>
  </div>
</template>

<script>
import titlebarComponentVue from "@/components/titlebar/titlebar-component.vue";
export default {
  components: {
    titlebarComponentVue,
  },
  data() {
    return {
      title: "Banner",
      routes: [
        {
          title: "Components",
          disabled: false,
          href: "#",
        },
        {
          title: "Banner",
          disabled: false,
          href: "banner",
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

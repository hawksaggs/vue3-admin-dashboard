<template>
  <div>
    <v-container>
      <titleBar class="mb" :title="title" :routes="routes"></titleBar>
      <avatarComponent class="mb"></avatarComponent>
      <avatarInitial class="mb"></avatarInitial>

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
import avatarComponent from "@/components/avatar/avatar-component.vue";
import avatarInitial from "@/components/avatar/avatar-initial-component.vue";
import footerComponentVue from "@/components/footer/footer-component.vue";
export default {
  components: {
    titleBar,
    avatarComponent,
    avatarInitial,
    footerComponentVue,
  },
  data() {
    return {
      title: "Avatar",
      routes: [
        {
          title: "Components",
          disabled: false,
          href: "#",
        },
        {
          title: "Avatar",
          disabled: false,
          href: "avatar",
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

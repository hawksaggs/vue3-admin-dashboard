<template>
  <div>
    <v-container>
      <titleBar class="mb" :title="title" :routes="routes"></titleBar>

      <v-row>
        <v-col cols="cols">
          <styleArticleOne></styleArticleOne>
        </v-col>
        <v-col cols="cols">
          <styleArticleOne></styleArticleOne>
        </v-col>
        <v-col cols="cols">
          <styleArticleOne></styleArticleOne>
        </v-col>
        <v-col cols="cols">
          <styleArticleOne></styleArticleOne>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="cols">
          <styleArticleTwo></styleArticleTwo>
        </v-col>
        <v-col cols="cols">
          <styleArticleTwo></styleArticleTwo>
        </v-col>
        <v-col cols="cols">
          <styleArticleTwo></styleArticleTwo>
        </v-col>
      </v-row>

      <v-row justify="center" class="mb">
        <v-col lg="4">
          <styleArticleThree></styleArticleThree>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <footerComponentVue></footerComponentVue>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import titleBar from "@/components/titlebar/titlebar-component.vue";
import styleArticleOne from "@/components/article/style-one-article-component.vue";
import styleArticleTwo from "@/components/article/style-two-article-component.vue";
import styleArticleThree from "@/components/article/style-three-article-component.vue";
import footerComponentVue from "@/components/footer/footer-component.vue";
export default {
  components: {
    titleBar,
    styleArticleOne,
    styleArticleTwo,
    styleArticleThree,
    footerComponentVue,
  },
  data() {
    return {
      title: "Article",
      routes: [
        {
          title: "Components",
          disabled: false,
          href: "#",
        },
        {
          title: "Article",
          disabled: false,
          href: "article",
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

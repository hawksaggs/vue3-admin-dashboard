<template>
  <div class="main-bg">
    <v-container>
        <titlebarArticleComponentVue class="mb"></titlebarArticleComponentVue>

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
                <footerComponentVue class="bottom"></footerComponentVue>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebarArticleComponentVue from '@/components/article/titlebar-article-component.vue';
import styleArticleOne from '@/components/article/style-one-article-component.vue';
import styleArticleTwo from '@/components/article/style-two-article-component.vue';
import styleArticleThree from '@/components/article/style-three-article-component.vue';
import footerComponentVue from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarArticleComponentVue,
        styleArticleOne,
        styleArticleTwo,
        styleArticleThree,
        footerComponentVue
    }
}
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
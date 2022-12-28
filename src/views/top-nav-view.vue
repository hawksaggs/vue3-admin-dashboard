<template>
  <div class="main-bg">
    <v-container>
        <titlebarTopNavComponentVue class="mb"></titlebarTopNavComponentVue>
        <contentExampleComponentVue></contentExampleComponentVue>
    </v-container>
  </div>
</template>

<script>
import titlebarTopNavComponentVue from '@/components/top-nav/titlebar-top-nav-component.vue';
import contentExampleComponentVue from '@/components/default-layout/content-example-component.vue';
export default {
    components: {
        titlebarTopNavComponentVue,
        contentExampleComponentVue
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
</style>
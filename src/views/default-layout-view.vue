<template>
  <div class="main-bg">
    <v-container>
        <titlebarComponentVue class="mb"></titlebarComponentVue>

        <contentExample></contentExample>

        <v-row>
            <v-col cols="12">
                <footerComponentVue class="bottom"></footerComponentVue>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebarComponentVue from '@/components/default-layout/titlebar-component.vue';
import contentExample from '@/components/default-layout/content-example-component.vue';
import footerComponentVue from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarComponentVue,
        contentExample,
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
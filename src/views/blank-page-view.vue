<template>
  <div class="main-bg">
    <v-container>
        <titlebarBlankPageComponentVue class="mb"></titlebarBlankPageComponentVue>

        <v-row>
            <v-col cols="12">
                <footerComponentVue class="bottom"></footerComponentVue>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebarBlankPageComponentVue from '@/components/blank-page/titlebar-blank-page-component.vue';
import footerComponentVue from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarBlankPageComponentVue,
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
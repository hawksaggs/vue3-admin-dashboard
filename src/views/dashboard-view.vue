<template>
  <div>
    <v-container>
      <titleBar class="mb"></titleBar>
      <v-row>
        <v-col cols="3">
          <panelComponentVue></panelComponentVue>
        </v-col>
        <v-col cols="3">
          <panelComponentVue></panelComponentVue>
        </v-col>
        <v-col cols="3">
          <panelComponentVue></panelComponentVue>
        </v-col>
        <v-col cols="3">
          <panelComponentVue></panelComponentVue>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <chartComponentVue></chartComponentVue>
        </v-col>
        <v-col cols="4">
          <popularProductComponentVue></popularProductComponentVue>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import titleBar from '@/components/dashboard/title-bar-component.vue';
import panelComponentVue from '@/components/dashboard/panel-component.vue';
import chartComponentVue from '@/components/dashboard/chart-component.vue';
import popularProductComponentVue from '@/components/dashboard/popular-product-component.vue';
export default {
  components: {
    titleBar,
    panelComponentVue,
    chartComponentVue,
    popularProductComponentVue
  }
}
</script>

<style scoped>
  .mb {
    margin-bottom: 15px;
  }
</style>
<template>
  <div>
    <v-container>
        <styleOne></styleOne>
    </v-container>
  </div>
</template>

<script>
import styleOne from '@/components/bottom-nav/style-one-component.vue';
export default {
    components: {
        styleOne,
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
<template>
  <div class="main-bg">
    <v-container>
        <titlebarAvatarComponentVue class="mb"></titlebarAvatarComponentVue>
        <avatarComponent class="mb"></avatarComponent>
        <avatarInitial></avatarInitial>

        <v-row>
            <v-col cols="12">
                <footerComponentVue class="bottom"></footerComponentVue>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebarAvatarComponentVue from '@/components/avatar/titlebar-avatar-component.vue';
import avatarComponent from '@/components/avatar/avatar-component.vue';
import avatarInitial from '@/components/avatar/avatar-initial-component.vue';
import footerComponentVue from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarAvatarComponentVue,
        avatarComponent,
        avatarInitial,
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
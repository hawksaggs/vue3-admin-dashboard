<template>
  <div>
    <v-container>
        <titlebarComponent :title="title" :routes="routes" class="mb"></titlebarComponent>
        <v-row>
            <v-col lg="12" sm="12">
                <styleOne></styleOne>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebarComponent from '@/components/titlebar/titlebar-component.vue';
import styleOne from '@/components/chat-box/chat-box-style-one-component.vue';
export default {
    components: {
        titlebarComponent,
        styleOne
    },
    data() {
        return {
            title: "Chat Box",
            routes: [
                {
                    title: "Components",
                    disabled: false,
                    href: "#",
                },
                {
                    title: "Chat Box",
                    disabled: false,
                    href: "chat-box",
                },
            ],
        }
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
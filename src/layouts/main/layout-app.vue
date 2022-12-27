<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        color="primary"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        >

          <template v-slot:append>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="text"
                  icon="mdi-chevron-right"
                  v-bind="props"
                ></v-btn>
              </template>

              <v-list>
                <v-list-item>
                  Profile
                </v-list-item>

                <v-list-item>
                  Setting
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
      
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :elevation="2"
    >
      <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <template v-slot:append>
        
        <v-btn class="text-none" stacked>
          <v-badge content="9+" color="error">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>

        <v-btn class="text-none" stacked>
          <v-badge content="9+" color="error">
            <v-icon>mdi-message</v-icon>
          </v-badge>
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    data() {
        return {
          drawer: null,
        }
    }
}
</script>

<style>

</style>
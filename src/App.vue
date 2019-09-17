<template>
  <v-app id="app">
    <v-navigation-drawer
      v-if="$route.meta.showMenu"
      v-model="primaryDrawer.model"
      :clipped="true"
      app
      overflow
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/about">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="true" app>
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
        v-if="$route.meta.showMenu"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        class="rankhome-title"
        @click="
        $route.meta.requiresAuth ?
        $router.push({ name: 'home' }) :
        $router.push({ name: 'landing-page' })"
      >RankHome</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <Notification></Notification>
        <router-view />
      </v-container>
    </v-content>

    <v-footer :inset="false" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Notification from '@/components/Notification';

export default {
  data: () => ({
    primaryDrawer: {
      model: null
    },
    footer: {
      inset: false
    }
  }),
  components: {
    Notification
  }
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
.rankhome-title {
  cursor: pointer;
}
</style>

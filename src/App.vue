<template>
  <v-app id="app">
    <v-navigation-drawer
      v-if="$route.meta.showMenu"
      v-model="primaryDrawer.model"
      :clipped="true"
      app
      overflow
    >
      <v-divider></v-divider>

      <v-list dense nav>
        <router-link to="/home">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/rankings">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>list_alt</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Rankings</v-list-item-title>
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
        class="cursor-pointer"
        @click="redirectHandler"
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
  },
  methods: {
    redirectHandler() {
      if (this.$route.meta.requiresAuth) {
        if (this.$route.name !== 'home') {
          this.$router.push({ name: 'home' })
        }
      } else {
        if (this.$route.name == 'landing-page') {
          if (this.$store.state.User.token) {
            this.$router.push({ name: 'home' })
          }
        } else {
          this.$router.push({ name: 'landing-page' })
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
</style>

<style lang="css">
.cursor-pointer {
  cursor: pointer;
}
</style>

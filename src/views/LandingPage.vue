<template>
  <div>
    <v-row align="center" justify="center">
      <h1>RankHome</h1>
    </v-row>
    <v-row align="center" justify="center">
      <p>A service that allows you to create and manage rankings for your games.</p>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn
        @click="$router.push({ name: 'login' })"
        rounded
        color="primary"
        class="px-6 mx-2"
      >Login</v-btn>
      <v-btn
        @click="$router.push({ name: 'register' })"
        rounded
        color="primary"
        class="px-6 mx-2"
      >Register</v-btn>
    </v-row>
  </div>
</template>

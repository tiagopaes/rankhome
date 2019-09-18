<template>
  <div>
    <v-row align="center" justify="center">
      <h1>RankHome</h1>
    </v-row>

    <v-divider></v-divider>

    <v-row align="center" justify="center">
      <v-col cols="7" sm="7">
        <v-text-field
          label="API KEY"
          :value="$store.state.User.token"
          readonly
          id="api-key"
          :append-icon="showToken ? 'visibility' : 'visibility_off'"
          @click:append="() => (showToken = !showToken)"
          :type="showToken ? 'text': 'password'"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      showToken: false
    };
  }
};
</script>

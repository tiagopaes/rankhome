<template>
  <div>
    <v-row align="center" justify="center">
      <h1>Create a ranking</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-card class="elevation-12">
        <v-card-text>
          <form @submit.prevent="handleSubmit" id="create-ranking-form">
            <v-text-field
              v-model="name"
              required
              label="Name"
              name="name"
              prepend-icon="list_alt"
              type="text"
            ></v-text-field>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            type="submit"
            form="create-ranking-form"
            :loading="loading"
            :disabled="disableSubmit"
            block
            color="primary"
          >Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CreateRanking",
  data() {
    return {
      name: null,
      loading: false
    };
  },
  computed: {
    disableSubmit() {
      return !(this.name && this.name.trim() != "");
    }
  },
  methods: {
    handleSubmit() {
      this.loading = true;
      this.$store
        .dispatch("Ranking/create", {
          name: this.name
        })
        .then(() => {
          this.$bus.emit("show-notification", "success", "Ranking created!");
          this.name = null;
          this.$router.push({ name: "rankings.list" });
        })
        .catch(error => {
          this.$bus.emit(
            "show-notification",
            "error",
            "Error: " + Object.values(error)
          );
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<template>
  <div>
    <v-row align="center" justify="center">
      <h1>Rankings</h1>
    </v-row>

    <v-divider></v-divider>

    <v-row class="my-4" align="center" justify="center">
      <router-link to="/rankings/create">Create a new ranking</router-link>
    </v-row>

    <v-row class="mx-2" align="center" justify="center">
      <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
      <p v-if="!loading && !$store.state.Ranking.rankings.length">There is no rankings yet</p>
      <div class="table-wrapper" v-if="!loading && $store.state.Ranking.rankings.length">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="font-weight-bold">
                <td>#</td>
                <td colspan="3">Name</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>

            <tbody>
              <tr
                class="mb-8 cursor-pointer"
                v-for="ranking in $store.state.Ranking.rankings"
                :key="ranking.id"
              >
                <td>{{ ranking.id }}</td>
                <td colspan="3">{{ ranking.name }}</td>
                <td>
                  <v-icon @click="goToEditing(ranking)">edit</v-icon>
                </td>
                <td>
                  <v-icon @click="deleteRanking(ranking.id)">delete</v-icon>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Rankings",
  data() {
    return {
      loading: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      this.$store
        .dispatch("Ranking/getList")
        .then(() => {})
        .catch(error => {
          this.$bus.emit(
            "show-notification",
            "error",
            "Error when trying to get the rankings"
          );
        })
        .finally(() => {
          this.loading = false;
        });
    },
    deleteRanking(id) {
      this.$store
        .dispatch("Ranking/delete", id)
        .then(() => {
          this.$bus.emit("show-notification", "success", "Ranking deleted!");
          this.getList();
        })
        .catch(error => {
          this.$bus.emit(
            "show-notification",
            "error",
            "Error when trying to get the rankings"
          );
        });
    },
    goToEditing(ranking) {
      this.$router.push({
        name: "rankings.edit",
        params: {
          id: ranking.id
        },
        query: {
          name: ranking.name
        }
      });
    }
  }
};
</script>

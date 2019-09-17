<template>
  <div>
    <v-row align="center" justify="center">
      <h1>Login</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-card class="elevation-12">
        <v-card-text>
          <form @submit.prevent="handleSubmit" id="login-form">
            <v-text-field
              v-model="email"
              label="Email"
              name="email"
              prepend-icon="email"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              name="password"
              prepend-icon="lock"
              type="password"
              required
            ></v-text-field>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            type="submit"
            form="login-form"
            :loading="loading"
            :disabled="disableSubmit"
            block
            color="primary"
          >Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      loading: false
    };
  },
  computed: {
    disableSubmit() {
      if (
        (this.email && this.email.trim() != '') &&
        (this.password && this.password.trim() != '')
      ) {
        return false;
      }
      return true;
    }
  },
  methods: {
    handleSubmit() {
      this.loading = true
      this.$store.dispatch('User/login', {
        'email': this.email,
        'password': this.password
      }).then(response => {
        this.email = null
        this.password = null
        this.$router.push({name: 'home'})
      })
      .catch(error => {
        this.$bus.emit('show-notification', 'error', 'Error: ' + Object.values(error))
      }).finally(() => {
        this.loading = false
      })
    }
  }
};
</script>

<template>
  <div>
    <v-row align="center" justify="center">
      <h1>Register</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-card class="elevation-12">
        <v-card-text>
          <form @submit.prevent="handleSubmit" id="register-form">
            <v-text-field
              v-model="name"
              required
              label="Name"
              name="name"
              prepend-icon="person"
              type="text"
            ></v-text-field>
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
            form="register-form"
            :loading="loading"
            :disabled="disableSubmit"
            block
            color="primary"
          >Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      name: null,
      email: null,
      password: null,
      loading: false
    };
  },
  computed: {
    disableSubmit() {
      if (
        this.name &&
        this.name.trim() != '' &&
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
      this.$store.dispatch('User/register', {
        'name': this.name,
        'email': this.email,
        'password': this.password
      }).then(response => {
        this.$bus.emit('show-notification', 'success','User registred!')
        this.name = null
        this.email = null
        this.password = null
        this.$router.push({name: 'login'})
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

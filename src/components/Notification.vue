<template>
  <v-snackbar
    v-if="snackbar"
    v-model="snackbar"
    :color="color"
    :timeout="timeout"
    top
    multi-line
  >
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {
      color: '',
      snackbar: false,
      text: '',
      timeout: 5000,
    }
  },
  methods: {
    show(color, text) {
      this.text = text
      this.color = color
      this.snackbar = true
    }
  },
  created() {
    const vm = this;
    vm.$bus.on('show-notification', vm.show)
  }
}
</script>


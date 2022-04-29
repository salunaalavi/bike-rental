<template>
  <v-container class="lighten-5 mb-6" fluid>
    <v-row align="stretch" dense>
      <v-col cols="12" offset-md2 mx-auto sm="6" md="6" lg="4">
        <p v-if="error" class="help is-danger">{{ error }}</p>
        <v-form>
          <v-text-field
            v-model="username"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn color="success" class="mr-4" @click="handlelogin">
            Login
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    error() {
      return this.$store.state.error
    },
  },
  methods: {
    handlelogin() {
      this.$store.dispatch('user/login', {
        username: this.username,
        password: this.password,
      })
    },
  },
}
</script>

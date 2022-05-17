<template>
  <v-main class="lighten-5 mb-6" fluid>
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
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="At least 8 characters"
            counter
            required
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn color="success" class="mr-4" @click="handlelogin">
            Login
          </v-btn>
          <br>
          <code>
            Login dengan username = admin
            dan password = admin123
          </code>
        </v-form>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      show1: false,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => `The email and password you entered don't match`,
      },
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

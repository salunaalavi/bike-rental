<template>
  <v-container class="lighten-5 mb-6" fluid>
    <v-row align="stretch" dense>
      <v-col cols="12" offset-md2 mx-auto sm="6" md="6" lg="4">
        <v-alert v-if="errors.length" variant="danger" dismissible show>
          <p v-for="(error, i) in errors" :key="i + 1" class="m-0">
            {{ error }}
          </p>
        </v-alert>
        <v-form>
          <v-text-field
            v-model="form.email"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            label="Password"
            required
          ></v-text-field>
          <v-btn
            color="success"
            class="mr-4"
            :to="`/users/${form.email}`"
            @click="validate"
          >
            <v-spinner v-if="formBusy" small class="mr-2" /> Login
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import users from '~/apollo/queries/fetchUsers'

export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      formBusy: false,
      errors: [],
    }
  },
  apollo: {
    Users: {
      query: users,
      prefetch: true,
      variables() {
        return {
          username: this.form.email,
        }
      },
    },
  },
  head: {
    title: 'Stations',
  },
  methods: {
    validate() {
      this.formBusy = true
    },
  },
}
</script>

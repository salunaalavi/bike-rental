<template>
  <v-main class="pt-0">
    <v-app>
      <v-card
        class="mx-auto"
        max-width="700"
        outlined
        style="margin-top: 70px; width: 500px"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">LOGIN</div>
            <v-form v-model="valid">
              <v-container>
                <v-text-field
                  v-model="username"
                  :rules="nameRules"
                  label="Nama Pengguna"
                  placeholder="Nama Pengguna"
                  required
                  clearable
                ></v-text-field>
                <v-text-field
                  id="password"
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="showPassword ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password"
                  hint="At least 8 characters"
                  class="input-group--focused"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-container>
            </v-form>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn
            style="margin-left: 30px"
            depressed
            color="success"
            :disabled="!valid"
            @click="handlelogin"
            >LOGIN</v-btn
          >
        </v-card-actions>
        <small>
          Belum Terdaftar? Click disini untuk
          <nuxt-link to="/registration">REGISTRASI</nuxt-link>
        </small>
      </v-card>
    </v-app>
  </v-main>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      valid: false,
      username: '',
      password: '',
      show1: false,
      nameRules: [(v) => !!v || 'This Field is required'],
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

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
            <div class="overline mb-4">REGISTRASI</div>
            <v-form v-model="valid">
              <v-container>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Nama Lengkap"
                  placeholder="Nama Lengkap"
                  required
                  clearable
                ></v-text-field>
                <v-text-field
                  v-model="username"
                  :rules="nameRules"
                  label="Nama Pengguna"
                  placeholder="Nama Pengguna"
                  required
                  clearable
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  clearable
                ></v-text-field>
                <v-text-field
                  id="password"
                  v-model="password"
                  :append-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  autocomplete="new-password"
                  :type="showPassword1 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password"
                  hint="At least 8 characters"
                  class="input-group--focused"
                  @click:append="showPassword1 = !showPassword1"
                ></v-text-field>
                <v-text-field
                  v-model="confirmPassword"
                  :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="confirmPasswordRules"
                  :type="showPassword2 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Confirm Password"
                  hint="Must be equal to password"
                  autocomplete="confirm-password"
                  class="input-group--focused"
                  @click:append="showPassword2 = !showPassword2"
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
            @click="register"
            >REGISTRASI</v-btn
          >
        </v-card-actions>
        <small>
          Sudah terdaftar? Klik disini untuk
          <nuxt-link to="/login">Log IN</nuxt-link>
        </small>
      </v-card>
    </v-app>
  </v-main>
</template>
<script>
import MUTATION_REGISTRATION from '~/apollo/mutations/registUser'

export default {
  name: 'RegistrationPage',
  data: () => ({
    valid: false,
    passwordRules: [(v) => !!v || 'Password is required'],
    confirmPasswordRules: [
      (v) => !!v || 'Password is required',
      (v) =>
        v ===
          (document.getElementById('password')
            ? document.getElementById('password').value
            : undefined) || 'Passwords do not match',
    ],
    nameRules: [(v) => !!v || 'This Field is required'],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    showPassword1: false,
    showPassword2: false,
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    username: '',
  }),
  methods: {
    async register() {
      try {
        await this.$apollo.mutate({
          mutation: MUTATION_REGISTRATION,
          variables: {
            name: this.name,
            username: this.username,
            password: this.password,
            email: this.email,
          },
        })
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

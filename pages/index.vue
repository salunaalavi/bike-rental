<template>
  <!-- <v-container>
    <div>
      <h3 class="title">{{ new Date() }}</h3>
      <h2 class="subtitle">Welcome Page</h2>
      <div class="links">
        <v-btn v-if="isLoggedIn" @click="handleLogOut">
          Log Out
        </v-btn>
        <v-btn v-else to="/login">
          Login
        </v-btn>
        <v-btn to="/stations">
          Stations
        </v-btn>
        <v-btn to="/maps">
          Maps
        </v-btn>
      </div>
    </div>
  </v-container> -->
  <v-app>
    <v-main class="pt-0">
      <home />
      <about />
    </v-main>
  </v-app>
</template>

<script>
import home from '~/components/landing_page/HeroSection'
import about from '~/components/landing_page/AboutSection'

export default {
  name: 'IndexPage',
  components: {
    home,
    about,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch('logOut')
    },
  },
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>

<style scoped>
.v-main {
  background-image: url('~static/img/bgMain.png');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

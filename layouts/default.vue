<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app src="/img/bgDrawer.jpg">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <span>City Bike</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Calango</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" link>
          <v-list-item-icon class="justify-center">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :flat="flat"
      :color="color"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <span>City Bike</span>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        v-if="isXs"
        class="mr-4"
        @click.stop="drawer = !drawer"
      />
      <AuthButton v-else :items="items" />
    </v-app-bar>
    <v-scale-transition>
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-main class="pt-0">
      <Nuxt />
    </v-main>
    <v-footer padless style="background-color: black">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="4" lg="4">
            <h3 style="color: white">About us</h3>
            <p style="color: white">
              City Bike is part of nextbike GmbH, the world's most extensive
              bike sharing provider with more than 300 cities across 26
              countries in 4 continents. Providing cutting edge technology on
              its bikes, nextbike enables a user friendly service that supports
              cities in creating sustainable and integrated travel solutions.
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4">
            <h3 style="color: white">Contact us</h3>
            <p style="color: white">
              City Bike - Jl. Cenderawasih, 17a, Jepara, SW9 8LA. Sponsorship:
              nextbikeuk@nextbike.co.uk Press E-Mail: nathan@nathanrous.com
              Customer Service 020 8166 9851 E-Mail: info@nextbike.co.uk
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4">
            <h3 style="color: white">Follow us</h3>
            <v-row>
              <v-col cols="12" sm="6" lg="6">
                <v-btn color="primary" style="padding: 40px 80px">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" lg="6">
                <v-btn color="primary" style="padding: 40px 80px">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" lg="6">
                <v-btn color="primary" style="padding: 40px 80px">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" lg="6">
                <v-btn color="primary" style="padding: 40px 80px">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <br>
        <code style="color: white">&copy; by Saluna Alavi</code>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import AuthButton from '~/components/navbar/AuthButton'
import FETCH_USER from '~/apollo/queries/fetchUser'

export default {
  name: 'DefaultLayout',
  components: {
    AuthButton,
  },
  data() {
    return {
      drawer: null,
      flat: true,
      color: '',
      fab: null,
      isXs: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Maps',
          to: '/maps',
        },
      ],
      title: 'Bike Rental',
    }
  },
  apollo: {
    users: {
      query: FETCH_USER,
      prefetch: ({ store }) => ({ username: store.state.auth.username }),
      variables() {
        return {
          username: this.userState,
        }
      },
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    userState() {
      if (this.$store.getters.isLoggedIn) {
        return this.$store.state.auth.username
      } else {
        return null
      }
    },
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false
        }
      }
    },
    fab(value) {
      if (value) {
        this.color = 'primary'
        this.flat = false
      } else {
        this.color = 'transparent'
        this.flat = true
      }
    },
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    const top = window.pageYOffset || 0
    if (top <= 60) {
      this.color = 'transparent'
      this.flat = true
    }
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch('logOut')
    },
    onResize() {
      this.isXs = window.innerWidth < 850
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 60
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<style>
.v-main {
  background-image: url('~static/img/bgMain.png');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

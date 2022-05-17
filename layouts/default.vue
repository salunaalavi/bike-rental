<template>
  <v-app dark secondary>
    <v-navigation-drawer v-model="drawer" temporary app src="/img/bgDrawer.jpg">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="/img/logo.png" alt="Logo" />
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
        <v-img src="/img/logo.png" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        v-if="isXs"
        class="mr-4"
        @click.stop="drawer = !drawer"
      />
      <AuthButton v-else :items="items"/>
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
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-main class="pt-0">
      <Nuxt />
    </v-main>
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
        {
          icon: 'mdi-chart-bubble',
          title: 'Stations',
          to: '/stations',
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
        this.color = 'secondary'
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

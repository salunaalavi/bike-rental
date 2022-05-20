<template>
  <section>
    <v-list-item v-for="(item, i) in items" :key="i" link text :to="item.to">
      <v-list-item-content>
        <v-list-item-title class="subtitile-1" v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-if="isLoggedIn" link text to="/stations">
      <v-list-item-content>
        <v-list-item-title class="subtitile-1" v-text="'Stations'" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item
      v-for="user in users"
      :key="user.id"
      :to="`/users/${user.id}`"
    >
      <v-list-item-content>
        <v-list-item-title class="subtitile-1"> Cek Sepeda </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item
      v-if="isLoggedIn"
      @click="handleLogOut"
    >
      <v-list-item-content>
        <v-list-item-title class="subtitile-1" v-text="'Log Out'" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-else to="/login">
      <v-list-item-content>
        <v-list-item-title class="subtitile-1" v-text="'Login'" />
      </v-list-item-content>
    </v-list-item>
  </section>
</template>

<script>
import FETCH_USER from '~/apollo/queries/fetchUser'
// import SUBSCRIPTION_USER from '~/apollo/subscriptions/subUser'

export default {
  name: 'AuthLayout',
  props: {
    items: {
      type: Array,
      required: true,
    },
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
      //   subscribeToMore: {
      //     document: SUBSCRIPTION_USER,
      //     updateQuery: (previousResult, { subscriptionData }) => {
      //       return {
      //         users: [...previousResult.users, subscriptionData.data.subUser],
      //       }
      //     },
      //   },
    },
  },
  async asyncData({ app, store }) {
    const client = app.apolloProvider.defaultClient
    const { userState } = store.state.auth.username

    const res = await client.query({
      query: FETCH_USER,
      variables: {
        username: userState,
      },
    })

    const { users } = res.data

    return {
      users,
    }
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

<template>
  <section>
    <v-btn v-for="(item, i) in items" :key="i" link text :to="item.to">
        <p class="font-weight-medium ma-2" style="color: black">{{ item.title }}</p>
    </v-btn>
    <v-btn v-if="isLoggedIn" link text to="/stations">
        <p class="font-weight-medium ma-2" style="color: black">STATIONS</p>
    </v-btn>
    <v-btn
      v-for="user in users"
      :key="user.id"
      rounded
      outlined
      :to="`/users/${user.id}`"
      style="color: black"
    >
      cek sepeda
    </v-btn>
    <v-btn v-if="isLoggedIn" class="font-weight-medium ma-2" style="color: black" link text @click="handleLogOut"> log out </v-btn>
    <v-btn v-else rounded outlined to="/login" style="color: black"> log in </v-btn>
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

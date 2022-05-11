<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <h1>Bikes ready to use</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-main>
          <section v-for="bike in Bikes" :key="bike.id">
              {{ bike.name }}
            <section v-if="bike.isRented">
              <section v-for="user in Users" :key="user.id">
                <v-btn @click="rent(bike.id, user.id)"> Rent </v-btn>
              </section>
            </section>
            <section v-else>
              <v-btn> Rented </v-btn>
            </section>
          </section>
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import bikes from '~/apollo/queries/fetchBikes'
import users from '~/apollo/queries/fetchUser'
import rents from '~/apollo/mutations/rentBikes'
import subBikes from '~/apollo/subscriptions/subBikes'

export default {
  name: 'BikesPage',
  middleware: 'authenticated',
  apollo: {
    Bikes: {
      query: bikes,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      },
      subscribeToMore: {
        document: subBikes,
        updateQuery: (previousResult, { subscriptionData }) => {
          return subscriptionData.data;
        }
      },
    },
    Users: {
      query: users,
      prefetch: ({ store }) => ({ username: store.state.auth.username }),
      variables() {
        return {
          username: this.userState,
        }
      },
    },
  },
  computed: {
    userState() {
      if (this.$store.getters.isLoggedIn) {
        return this.$store.state.auth.username
      } else {
        return null
      }
    },
  },
  methods: {
    async rent(bikeId, userId) {
      try {
        await this.$apollo.mutate({
          mutation: rents,
          variables: {
            bikeId,
            userId,
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

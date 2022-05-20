<template>
  <v-main>
    <v-container>
      <section>
        <h1>Bikes ready to use</h1>
        <v-text-field v-model="searchTerm" placeholder="Search" @input="searchItems"></v-text-field>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <BikeCard :bikes="bikes" />
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-main>
</template>
<script>
import FETCH_BIKES from '~/apollo/queries/fetchBikes'
import SUBSCRIPTION_BIKES from '~/apollo/subscriptions/subBikes'

import BikeCard from '~/components/stations/BikeCard'

export default {
  name: 'BikesPage',
  components: {
    BikeCard,
  },
  middleware: 'authenticated',
  data: () => ({
    searchTerm: '',
  }),
  apollo: {
    bikes: {
      query: FETCH_BIKES,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      },
      subscribeToMore: {
        document: SUBSCRIPTION_BIKES,
        updateQuery: (previousResult, { subscriptionData }) => {
          return {
            bikes: [...previousResult.bikes, subscriptionData.data.subBikes],
          }
        },
      },
    },
  },
  methods: {
    searchItems(e) {
      if (!this.searchTerm) {
        this.bikes = this.bikes.filter(station => station.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      } else {
        this.bikes = this.bikes.filter(station => station.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      }
    },
  },
}
</script>

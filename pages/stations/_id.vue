<template>
  <v-container>
    <section >
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <h1>Bikes ready to use</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <v-main>
            <BikeCard :bikes="bikes" />
          </v-main>
        </v-col>
      </v-row>
    </section>
  </v-container>
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
}
</script>

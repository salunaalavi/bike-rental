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
          <section v-for="rent in rents" :key="rent.id">
            rent id: {{ rent.id }}
          </section>
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FETCH_RENTS from '~/apollo/queries/fetchRents'

export default {
  name: 'BikesPage',
  middleware: 'authenticated',
  apollo: {
    rents: {
      query: FETCH_RENTS,
      prefetch: ({ route, store }) => ({
        station_id: route.params.stationId,
        bike_id: route.params.bikeId,
      }),
      variables() {
        return {
          station_id: this.$route.params.stationId,
          bike_id: this.$route.params.bikeId,
        }
      },
    },
  },
}
</script>

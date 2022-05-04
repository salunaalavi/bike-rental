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
            <nuxt-link :to="`/bikes/${bike.id}`">
              {{ bike.name }}
            </nuxt-link>
            <v-btn>
              <nuxt-link :to="`/stations/${$route.params.id}/${bike.id}`">
                <v-icon>mdi-bike</v-icon>
              </nuxt-link>
            </v-btn>
          </section>
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import bikes from '~/apollo/queries/fetchBikes'

export default {
  name: 'BikesPage',
  middleware: 'authenticated',
  apollo: {
    Bikes: {
      query: bikes,
      prefetch: ({ route }) => ({ station_id: route.params.id }),
      variables() {
        return { station_id: this.$route.params.id }
      },
    },
  },
}
</script>

<template>
  <v-main>
    <v-container>
      <h1>Stations</h1>
      <v-main class="pt-0">
        <StationCard :stations="stations" />
      </v-main>
    </v-container>
  </v-main>
</template>

<script>
import FETCH_STATIONS from '~/apollo/queries/fetchStations'
import StationCard from '~/components/stations/StationCard'

export default {
  name: 'StationsPage',
  components: {
    StationCard,
  },
  middleware: 'authenticated',
  apollo: {
    stations: {
      prefetch: true,
      query: FETCH_STATIONS,
    },
  },
  head: {
    title: 'Stations',
  },
}
</script>

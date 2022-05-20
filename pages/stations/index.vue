<template>
  <v-main>
    <v-container>
      <h1>Stations</h1>
      <v-text-field v-model="searchTerm" placeholder="Search" @input="searchItems"></v-text-field>
      <StationCard :stations="stations" />
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
  data: () => ({
    searchTerm: '',
  }),
  apollo: {
    stations: {
      prefetch: true,
      query: FETCH_STATIONS,
    },
  },
  head: {
    title: 'Stations',
  },
  methods: {
    searchItems(e) {
      if (!this.searchTerm) {
        this.stations = this.stations.filter(station => station.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      } else {
        this.stations = this.stations.filter(station => station.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      }
    },
  },
}
</script>

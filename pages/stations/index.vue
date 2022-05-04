<template>
  <v-container>
    <h1>Stations</h1>
    <v-main>
      <section v-for="station in Stations" :key="station.id">
        <nuxt-link :to="`/stations/${station.id}`">
          {{ station.name }}
        </nuxt-link>
      </section>
    </v-main>
  </v-container>
</template>

<script>
import stations from '~/apollo/queries/fetchStations'

export default {
  name: 'StationsPage',
  middleware: 'authenticated',
  apollo: {
    Stations: {
      prefetch: true,
      query: stations,
    },
  },
  head: {
    title: 'Stations',
  },
}
</script>

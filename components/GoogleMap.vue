<template>
  <v-container>
    <div>
      <h2 class="text-center">Google Map</h2>
      <br />
    </div>
    <br />
    <gmap-map
      :zoom="16"
      :center="center"
      style="width: 100%; height: 600px"
      class="mb-5"
    >
      <GoogleMapMarker v-for="station in Stations" :key="station.id" :station="station" />
    </gmap-map>
  </v-container>
</template>

<script>
import GoogleMapMarker from './GoogleMapMarker'
import stations from '~/apollo/queries/fetchStations'

export default {
  name: 'GoogleMap',
  components: {
    GoogleMapMarker,
  },
  middleware: 'authenticated',
  apollo: {
    Stations: {
      prefetch: true,
      query: stations,
    },
  },
  data() {
    return {
      center: {
        lat: -6.7495268,
        lng: 110.7585118,
      },
    }
  },
  head: {
    title: 'Stations',
  },
}
</script>

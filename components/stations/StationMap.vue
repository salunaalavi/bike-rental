<template>
  <section>
    <gmap-map :zoom="16" :center="center" style="max-width: 100%; height: 350px">
      <GoogleMapMarker
        v-for="station in stations"
        :key="station.id"
        :station="station"
      />
    </gmap-map>
  </section>
</template>

<script>
import GoogleMapMarker from '../GoogleMapMarker'
import stations from '~/apollo/queries/fetchStations'

export default {
  name: 'GoogleMap',
  components: {
    GoogleMapMarker,
  },
  middleware: 'authenticated',
  apollo: {
    stations: {
      prefetch: true,
      query: stations,
    },
  },
  props: {
    center: {
      type: Object,
      required: true,
    },
  },
  head: {
    title: 'Stations',
  },
}
</script>

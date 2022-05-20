<template>
  <v-container>
    <gmap-marker
      :key="station.id"
      :position="station.position"
      @click="toggleInfoWindow(station, station.id)"
    >
      <gmap-info-window
        :options="{ maxWidth: 200 }"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
        <span style="color: black; font-size: 16px">{{ station.name }}</span>
        <br />
        <br />
        <span style="color: black">
          {{ station.position.address }}
        </span>
        <br />
        <br />
        <router-link style="white" :to="`/stations/${station.id}`">
          {{ station.name }}
        </router-link>
      </gmap-info-window>
    </gmap-marker>
  </v-container>
</template>

<script>
export default {
  name: 'GoogleMap',
  middleware: 'authenticated',
  props: {
    station: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      infoWinOpen: false,
    }
  },
  head: {
    title: 'Stations',
  },
  methods: {
    toggleInfoWindow(idx) {
      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      }
      // if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },
  },
}
</script>

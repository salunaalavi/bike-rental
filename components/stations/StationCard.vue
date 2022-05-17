<template>
  <v-container class="mb-6" fluid>
    <v-row align="stretch" dense>
      <v-col
        v-for="station in stations"
        :key="station.id"
        offset-md2
        mx-auto
        cols="12"
        sm="6"
        md="6"
        lg="4"
      >
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card
            class="my-3 yellow transition-swing"
            :elevation="hover ? 24 : 6"
            :class="{ 'on-hover': hover }"
          >
            <StationMap :center="station.position" />
            <v-container fill-height fluid>
              <v-layout>
                <v-flex
                  xs12
                  justify-center
                  d-flex
                  style="overflow-y: auto; height: auto"
                >
                  <nuxt-link :to="`/stations/${station.id}`">
                    {{ station.name }}
                  </nuxt-link>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StationMap from './StationMap'

export default {
  name: 'StationCard',
  components: {
    StationMap,
  },
  middleware: 'authenticated',
  props: {
    stations: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.6;
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

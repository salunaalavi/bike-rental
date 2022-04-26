<template>
 <div class="container">
   <h1>Stations</h1>

   <main class="game-container">
     <section v-for="station in Stations" :key="station.id">
       <nuxt-link :to="`/bikes/${station.id}`">
          {{ station.name }}
        </nuxt-link>
     </section>
   </main>
 </div>
</template>

<script>
import stations from "~/apollo/queries/fetchStations";
import users from "~/apollo/queries/fetchUsers";

export default {
  name: "StationsPage",
  apollo: {
    Stations: {
      prefetch: true,
      query: stations
    },
    Users: {
      query: users,
      prefetch: ({ route }) => ({ username: route.params.username }),
      variables() {
        return {
          username: this.$route.params.username,
        };
      },
    },
  },
  head: {
    title: "Stations"
  }
};
</script>
<template>
 <v-container>
   <section v-for="user in Users" :key="user.id">
     <h3>
       {{ user.name }}
     </h3>
   </section>
   <section v-for="rent in Rents" :key="rent.id">
      <h3>
        {{ rent.Bike.name }}
      </h3>
      <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Kembalikan
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="station in Stations"
          :key="station.id"
        >
          <v-btn @click="returns(rent.id, station.id, rent.bike_id)">
            {{ station.name }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
   </section>

   <v-main>
     <v-btn @click="handleLogOut">
        log out
      </v-btn>
   </v-main>
 </v-container>
</template>

<script>
import users from "~/apollo/queries/fetchUserById";
import rents from "~/apollo/queries/fetchRents";
import stations from "~/apollo/queries/fetchStations";
import returnBike from "~/apollo/mutations/returnBikes";

export default {
  name: "StationsPage",
  middleware: "authenticated",
  apollo: {
    Users: {
      query: users,
      prefetch: ({ route }) => ({ username: route.params.id }),
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
    Rents: {
      query: rents,
      subsccribeToMore: true,
      prefetch: ({ route }) => ({ username: route.params.id }),
      variables() {
        return {
          user_id: this.$route.params.id,
        };
      },
    },
    Stations: {
      query: stations,
      prefetch: true,
    },
  },
  head: {
    title: "User Page"
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch("logOut");
    },
    async returns(rentId, stationId, bikeId) {
      try {
        await this.$apollo.mutate({
          mutation: returnBike,
          variables: {
            rentId,
            stationId,
            bikeId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>
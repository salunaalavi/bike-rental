<template>
 <v-container>
   <section v-for="user in Users" :key="user.id">
     <h3>
       {{ user.name }}
     </h3>
   </section>

   <v-main>
     <v-btn @click="handleLogOut">
        log out
      </v-btn>
   </v-main>
 </v-container>
</template>

<script>
import users from "~/apollo/queries/fetchUser";

export default {
  name: "StationsPage",
  middleware: "authenticated",
  apollo: {
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
    title: "User Page"
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch("logOut");
    }
  }
};
</script>
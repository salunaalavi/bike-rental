<template>
  <v-container>
    <h3>User Pages</h3>
  </v-container>
</template>
<script>
export default {
  name: 'UsersPages',
  middleware: "authenticated",
  head: {
    title: 'User Page',
  },
}
</script>

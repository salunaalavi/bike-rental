<template>
  <div v-if="Bikes">
    <div v-for="item in Bikes" :key="item.id">
      <h3>{{ item.id }}</h3>
      <p>{{ item.name }}</p>
      <p>
        <nuxt-link to="/">
          Home page
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import bikes from '~/apollo/queries/fetchBikes'
export default {
  apollo: {
    Bikes: {
      query: bikes,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  },
  head() {
    return {
      title: 'Bikes by Station'
    }
  }
}
</script>
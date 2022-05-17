<template>
  <div v-if="bikes">
    <div v-for="item in bikes" :key="item.id">
      <h3>{{ item.id }}</h3>
      <p>{{ item.name }}</p>
      <p>
        <nuxt-link to="/">
          Home page
        </nuxt-link>
      </p>
    </div>
  </div>
  <div v-else>
    <h3>Loading...</h3>
  </div>
</template>

<script>
import FETCH_BIKES from '~/apollo/queries/fetchBikes'
export default {
  apollo: {
    bikes: {
      query: FETCH_BIKES,
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
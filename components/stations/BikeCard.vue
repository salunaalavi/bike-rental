<template>
  <v-container class="mb-6" fluid>
    <v-row align="stretch" dense>
      <v-col
        v-for="bike in bikes"
        :key="bike.id"
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
            color="secondary"
            shaped
            outlined
            :disabled="bike.available === false"
          >
            <v-img
              height="auto"
              src="https://res.cloudinary.com/sal15/image/upload/v1652776414/pngwing.com_qbgem6.png"
            ></v-img>
            <v-container fill-height fluid>
              <v-layout>
                <v-flex
                  xs12
                  justify-center
                  d-flex
                  style="overflow-y: auto; height: auto"
                >
                  <section v-if="bike.available">
                    <section v-for="user in users" :key="user.id">
                      <v-btn rounded outlined @click="rent(bike.id, user.id)"> Rent </v-btn>
                    </section>
                  </section>
                  <section v-else>
                    <v-btn rounded outlined> Rented </v-btn>
                  </section>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-title justify-center class="d-block">
              <h3 class="text-center">{{ bike.name }}</h3>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FETCH_USER from '~/apollo/queries/fetchUser'
import MUTATE_RENTS from '~/apollo/mutations/rentBikes'

export default {
  name: 'StationCard',
  middleware: 'authenticated',
  props: {
    bikes: {
      type: Array,
      required: true,
    },
  },
  apollo: {
    users: {
      query: FETCH_USER,
      prefetch: ({ store }) => ({ username: store.state.auth.username }),
      variables() {
        return {
          username: this.userState,
        }
      },
    },
  },
  computed: {
    userState() {
      if (this.$store.getters.isLoggedIn) {
        return this.$store.state.auth.username
      } else {
        return null
      }
    },
  },
  methods: {
    async rent(bikeId, userId) {
      try {
        await this.$apollo.mutate({
          mutation: MUTATE_RENTS,
          variables: {
            bikeId,
            userId,
          },
        })
      } catch (error) {
        console.error(error)
      }
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

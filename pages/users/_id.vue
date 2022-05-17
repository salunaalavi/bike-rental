<template>
  <v-container>
    <section v-for="user in users" :key="user.id">
      <h3>
        {{ user.name }}
      </h3>
    </section>
    <section>
      <v-container class="mb-6" fluid>
        <v-row align="stretch" dense>
          <v-col
            v-for="rent in rents"
            :key="rent.id"
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
                shaped
                outlined
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
                      <v-menu offset-y>
                        <template #activator="{ on, attrs }">
                          <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            Kembalikan
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="station in stations"
                            :key="station.id"
                          >
                            <v-btn
                              @click="
                                returns(rent.id, station.id, rent.bike_id)
                              "
                            >
                              {{ station.name }}
                            </v-btn>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-card-title justify-center class="d-block">
                  <h3 class="text-center">{{ rent.bike.name }}</h3>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
      <!-- <h3>
        {{ rent.bike.name }}
      </h3>
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Kembalikan
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="station in stations" :key="station.id">
            <v-btn @click="returns(rent.id, station.id, rent.bike_id)">
              {{ station.name }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </section>

    <v-main>
      <v-btn @click="handleLogOut"> log out </v-btn>
    </v-main>
  </v-container>
</template>

<script>
import FETCH_USER_BY_ID from '~/apollo/queries/fetchUserById'
import FETCH_RENTS from '~/apollo/queries/fetchRents'
import FETCH_STATIONS from '~/apollo/queries/fetchStations'
import MUTATION_BIKE_RENT from '~/apollo/mutations/returnBikes'
import SUBSCRIPTION_RENTS from '~/apollo/subscriptions/subRents'

export default {
  name: 'StationsPage',
  middleware: 'authenticated',
  apollo: {
    users: {
      query: FETCH_USER_BY_ID,
      prefetch: ({ route }) => ({ username: route.params.id }),
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
    rents: {
      query: FETCH_RENTS,
      subsccribeToMore: true,
      prefetch: ({ route }) => ({ username: route.params.id }),
      variables() {
        return {
          user_id: this.$route.params.id,
        }
      },
      subscribeToMore: {
        document: SUBSCRIPTION_RENTS,
        updateQuery: (previousResult, { subscriptionData }) => {
          return subscriptionData.data
        },
      },
    },
    stations: {
      query: FETCH_STATIONS,
      prefetch: true,
    },
  },
  head: {
    title: 'User Page',
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch('logOut')
    },
    async returns(rentId, stationId, bikeId) {
      try {
        await this.$apollo.mutate({
          mutation: MUTATION_BIKE_RENT,
          variables: {
            rentId,
            stationId,
            bikeId,
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

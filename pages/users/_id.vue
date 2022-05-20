<template>
  <v-main>
    <v-container fill-height>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="4">
          <section v-for="user in users" :key="user.id">
            <section v-if="user.id === params_id">
              <h3>Alamat Pengguna</h3>
              <v-card class="mx-auto mb-12" max-width="374" color="secondary">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>
                <v-card-title>{{ user.name }}</v-card-title>

                <v-card-text>
                  <div class="my-4 text-subtitle-1">
                    E-mail : {{ user.email }}
                  </div>
                  <div class="my-4 text-subtitle-1">
                    Provinsi : {{ user.provinsi }}
                  </div>
                  <div class="my-4 text-subtitle-1">Kota : {{ user.kota }}</div>
                  <div class="my-4 text-subtitle-1">
                    Kecamatan : {{ user.kecamatan }}
                  </div>
                  <div class="my-4 text-subtitle-1">
                    Kelurahan : {{ user.kelurahan }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
              </v-card>
            </section>
          </section>
          <section>
            <h3>Update Alamat Pengguna</h3>
            <v-card class="mx-auto mb-12" max-width="374" color="secondary">
              <v-form class="justify-center">
                <v-select
                  v-model="formData.address.province"
                  :items="provinces"
                  item-text="nama"
                  item-value="id"
                  single-line
                  auto
                  label="Provinsi"
                ></v-select>
                <v-select
                  v-model="formData.address.city"
                  :items="cities"
                  item-text="nama"
                  item-value="id"
                  single-line
                  auto
                  label="Kota"
                ></v-select>
                <v-select
                  v-model="formData.address.district"
                  :items="districts"
                  item-text="nama"
                  item-value="id"
                  single-line
                  auto
                  label="Kecamatan"
                ></v-select>
                <v-select
                  v-model="formData.address.subDistrict"
                  :items="subDistricts"
                  item-text="nama"
                  item-value="id"
                  single-line
                  auto
                  label="Desa"
                ></v-select>
                <code>Isi alamat sesuai dengan kartu identitas anda</code>
                <br />
                <br />
                <v-btn color="success" class="mr-4" @click="register">
                  Submit
                </v-btn>
              </v-form>
            </v-card>
          </section>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="8">
          <section>
            <h3>Sepeda Digunakan</h3>
            <v-container class="mb-6" fluid>
              <v-row align="stretch" dense>
                <section v-for="rent in rents" :key="rent.id">
                  <v-col
                    v-if="rent.user_id === params_id"
                    offset-md2
                    mx-auto
                    cols="12"
                    sm="6"
                    md="6"
                    lg="6"
                  >
                    <v-hover v-slot="{ hover }" close-delay="200">
                      <v-card
                        class="my-3 yellow transition-swing"
                        :elevation="hover ? 24 : 6"
                        :class="{ 'on-hover': hover }"
                        color="secondary"
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
                                  <v-btn
                                    color="primary"
                                    dark
                                    outlined
                                    rounded
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    Kembalikan
                                  </v-btn>
                                </template>
                                <v-list color="info">
                                  <v-list-item
                                    v-for="station in stations"
                                    :key="station.id"
                                  >
                                    <v-btn
                                      color="primary"
                                      outlined
                                      rounded
                                      @click="
                                        returns(
                                          rent.id,
                                          station.id,
                                          rent.bike_id
                                        )
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
                </section>
              </v-row>
            </v-container>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import FETCH_USER_BY_ID from '~/apollo/queries/fetchUserById'
import FETCH_RENTS from '~/apollo/queries/fetchRents'
import FETCH_STATIONS from '~/apollo/queries/fetchStations'
import MUTATION_BIKE_RENT from '~/apollo/mutations/returnBikes'
import SUBSCRIPTION_RENTS from '~/apollo/subscriptions/subRents'
import MUTATION_UPDATE_USER from '~/apollo/mutations/changeAddress'
import SUBSCRIPTION_USER from '~/apollo/subscriptions/subUserById'

export default {
  name: 'StationsPage',
  middleware: 'authenticated',
  data() {
    return {
      provinces: null,
      cities: null,
      districts: null,
      subDistricts: null,
      formData: {
        account: {},
        address: {
          street_name: '',
        },
      },
      params_id: null,
      show1: false,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => `The email and password you entered don't match`,
      },
    }
  },
  apollo: {
    users: {
      query: FETCH_USER_BY_ID,
      prefetch: ({ route }) => ({ username: route.params.id }),
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
      subscribeToMore: {
        document: SUBSCRIPTION_USER,
        updateQuery: (previousResult, { subscriptionData }) => {
          return subscriptionData.data
        },
      },
    },
    rents: {
      query: FETCH_RENTS,
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
  watch: {
    'formData.address.province'(val) {
      this.loadArea('cities')
    },
    'formData.address.city'(val) {
      this.loadArea('districts')
    },
    'formData.address.district'(val) {
      this.loadArea('subDistricts')
    },
  },
  mounted() {
    this.loadArea()
    this.params_id = this.$route.params.id
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
    async register() {
      try {
        await this.$apollo.mutate({
          mutation: MUTATION_UPDATE_USER,
          variables: {
            id: this.$route.params.id,
            provinsi: this.provinces
              .filter((c) => c.id === this.formData.address.province)
              .map((c) => c.nama)
              .join(''),
            kota: this.cities
              .filter((c) => c.id === this.formData.address.city)
              .map((c) => c.nama)
              .join(''),
            kecamatan: this.districts
              .filter((c) => c.id === this.formData.address.district)
              .map((c) => c.nama)
              .join(''),
            kelurahan: this.subDistricts
              .filter((c) => c.id === this.formData.address.subDistrict)
              .map((c) => c.nama)
              .join(''),
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
    loadArea(name = 'provinces') {
      let responseUrl = 'provinsi'
      let responseName = 'provinsi'
      let url =
        'https://dev.farizdotid.com/api/daerahindonesia' + `/${responseUrl}`
      switch (name) {
        case 'cities':
          responseUrl = `kota?id_provinsi=${this.formData.address.province}`
          url =
            `https://dev.farizdotid.com/api/daerahindonesia` + `/${responseUrl}`
          responseName = 'kota_kabupaten'
          break
        case 'districts':
          responseUrl = `kecamatan?id_kota=${this.formData.address.city}`
          url =
            `https://dev.farizdotid.com/api/daerahindonesia` + `/${responseUrl}`
          responseName = 'kecamatan'
          break
        case 'subDistricts':
          responseUrl = `kelurahan?id_kecamatan=${this.formData.address.district}`
          url =
            `https://dev.farizdotid.com/api/daerahindonesia` + `/${responseUrl}`
          responseName = 'kelurahan'
          break
      }
      this.$axios.get(url).then((response) => {
        this[name] = response.data[responseName]
      })
    },
  },
}
</script>

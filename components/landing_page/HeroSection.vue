<template>
  <section id="hero">
    <v-parallax src="/img/family-bike.jpg" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4" style="color: rgb(91, 133, 170)">City Bike</h1>
              <h1 class="font-weight-light" style="color: rgb(91, 133, 170)">
                Menuju integrasi antar moda transportasi <br />
                dengan mencintai bumi dan menjaganya tetap lestari <br />
                City Bike hadir dengan cinta dan dari hati
              </h1>
              <v-btn
                class="mt-5"
                color="primary"
                rounded
                outlined  
                large
                dark
                @click="$vuetify.goTo('#features')"
              >
                More Info
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="/img/borderWaves.svg" />
      </div>
    </v-parallax>
    <v-container id="features" class="mt-2" fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
              v-for="(feature, i) in features"
              :key="i"
              cols="12"
              xs="12"
              sm="6"
              md="4"
              class="text-center"
            >
              <v-hover v-slot:="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="300px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <GoogleMaps 
          @click="dialog = false"/>
      </v-card>
    </v-dialog>
    <div class="svg-border-waves">
      <img src="/img/wave2.svg" />
    </div>
  </section>
</template>

<script>
import GoogleMaps from '~/components/GoogleMap.vue'

export default {
  components: {
    GoogleMaps,
  },
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("~/static/img/Malta_App.png"),
          title: "Bagaimana Cara Kerjanya",
          text: "Silahkan registrasi dan langsung nikmati pelayanan dari City Bike.",
        },
        {
          img: require("~/static/img/SliderBerlin2_2.jpg"),
          title: "Gratis",
          text: "Nyamankan diri anda dengan layanan gratis dari City Bike.",
        },
        {
          img: require("~/static/img/SliderBerlin3.jpg"),
          title: "Lokasi",
          text: "Sewa sepeda dari City Bike dengan mudah dari berbagai lokasi",
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.circle {
  stroke: rgb(33, 209, 159);
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  opacity: 0.3;
}
.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }
  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: rgb(33, 209, 159);
      animation: nudge 0.7s ease-in-out;
      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}
.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}
.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}
.card h1 {
  margin-bottom: 10px;
}
.zoom-efect {
  transform: scale(1.1);
}
.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
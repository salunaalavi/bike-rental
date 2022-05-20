<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2">City Bike!!</h1>
              <h1 class="font-weight-light display-1 mb-3">
                Apa saja keunggulan kami?
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify" style="color: black;">
                    Hemat uang anda dengan bersepeda tanpa pungutan biaya.
                    Dengan integrasi stasiun di berbagai lokasi.
                    Jadi jangan khawatir untuk mencoba City Bike.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify" style="color: black;">
                    Layanan call center yang siap sedia 24/7 senantiasa menemani anda.
                    Jangan ragu untuk bertanya, kami siap melayani.
                    Dengan service center professional yang siap melayani sepenuh hati.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify" style="color: black;">
                    Kerja cepat, kerja akurat dan ikhlas dari kami untuk anda.
                    Untuk melayani pelanggan, kami merupakan yang tercepat.
                    Jangan ragu untuk menggunakan produk-produk kami.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="https://res.cloudinary.com/sal15/image/upload/v1652776414/pngwing.com_qbgem6.png"
                class="d-block ml-auto mr-auto"
                width="100%"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: rgb(33, 209, 159);
}
</style>
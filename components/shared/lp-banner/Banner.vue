<template>
  <div class="banner-wrapper">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="d-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold white--text">
              Your Fair, Objective, and Balanced News!
            </h1>
          </div>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.mdAndDown" cols="12" md="5" lg="6">
          <v-img
            :src="require('@/assets/images/landingpage/newspaper2.png')"
            alt="banner"
          />
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {};
  },
  components: {
    SmallNewsCard: () => import("@/components/fob/NewsCardSmall"),
  },
};
</script>

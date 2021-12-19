<template>
  <div>
    <div class="feature2-component bg-extra-light">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">Videos</h2>
            </div>
          </v-col>
        </v-row>

        <v-row v-if="videos.length > 0" justify="center">
          <v-col
            v-for="video in videos"
            :key="video._id"
            cols="12"
            md="6"
            lg="4"
          >
            <VideoCard :post="video"/>
          </v-col>

          <v-col cols="12">
            <v-btn
              nuxt
              large
              to="/videos"
              class="btn-custom-lg btn-arrow"
              depressed
              color="error"
              elevation="0"
            >
              <span>Load More Videos</span>
              <i class="mdi mdi-arrow-right"></i>
            </v-btn>
          </v-col>
        </v-row>


        <!-- -----------------------------------------------
            End Feature 2
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import VideoCard from '~/components/fob/VideoCard'

export default {
  name: "Feature2",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ videos: "getTopVideos" }),
  },
  components: {
    VideoCard,

  },
  methods: {},
};
</script>

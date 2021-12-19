<template>
  <div>
    <div class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Portfolio Text
        ----------------------------------------------- -->
        <v-row v-if="topStories.length > 0" justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Top News
              </h2>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Portfolio
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <v-col
            v-for="p in topStories"
            :key="p._id"
            cols="12"
            md="6"
            lg="4"
          >
            

            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div class="position-relative mb-15">
                <a  :href="`/news/${p._id}/${p.seoTitle}`">
                  <v-img :aspect-ratio="16/9" :src="p.coverUrl" alt="blog" class="blog-img" />
                </a>
                <div class="date-badge bg-info-grediant">
                  {{ $moment(p.createdAt).fromNow() }}
                </div>
              </div>
              <div>
                <a
                  :href="`/news/${p._id}/${p.seoTitle}`"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                  >{{ p.title }}</a
                >
                <p class="mt-10 mb-10">
                  {{ p.headline }}
                </p>
                <a
                  :href="`/news/${p._id}/${p.seoTitle}`"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  Read <i class="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </v-card>
          </v-col>

        </v-row>

        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Portfolio",
  data() {
    return {};
  },
  methods: {},
  components: {
    
  },computed: {
    ...mapGetters({ topStories: "getTopStories" }),
  },
};
</script>

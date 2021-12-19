<template>
  <div>
    <div class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Portfolio Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                More News
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
          <v-col cols="12" md="6" lg="4">
            <PostCard/>
          </v-col>
         <v-col cols="12" md="6" lg="4">
            <PostCard/>
          </v-col>
         <v-col cols="12" md="6" lg="4">
            <PostCard/>
          </v-col>
         <v-col cols="12" md="6" lg="4">
            <PostCard/>
          </v-col>
         <v-col cols="12" md="6" lg="4">
            <PostCard/>
          </v-col>
         <v-col cols="12" md="6" lg="4">
            <PostCard/>
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
export default {
  name: "News",
  data() {
    return {};
  },
  methods: {},
  components: {
    PostCard: () => import("@/components/fob/PostCard"),
  }
};
</script>

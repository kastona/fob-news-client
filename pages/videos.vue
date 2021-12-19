<template>
  <div>
    <div class="feature2-component  bg-extra-light">
      <v-container>
        
        <v-row justify="center">
          <v-col cols="12" md="10" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Videos
              </h2>
            </div>
          </v-col>
        </v-row>

        <v-row v-if="stories.length > 0" justify="center" >
          
          <v-col v-for="story in stories" :key="story._id" cols="12" md="6" lg="4">
            <VideoCard :post="story"/>
          </v-col>      

          <v-col cols="12">
            <div class="text-center pt2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
          </v-col>
        </v-row>

        <v-row  class="text-center" v-else>
          <v-co cols="12">
          <div>There are no videos published yet!</div>

          </v-co>
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
  name: "Videos",
  data() {
    return {
      page: 1,
      pageCount: 1,
      itemsPerPage: 2,
    };

  },

   async asyncData({ $axios, redirect, route, $auth, $router }) {
    try {
      const data = await $axios.$get(`/posts?skip=${0}&limit=2&video=true`);

      return { stories: data.posts, storiesCount: data.postsCount };
    } catch (error) {}
  },
  components: {
    VideoCard
  },
  methods: {},

  watch: {
    async page(number) {



      let skip = (number - 1) * this.itemsPerPage;
      const {posts, storiesCount} = await this.$axios.$get(
        `/posts?skip=${skip}&limit=${this.itemsPerPage}&video=true`
      );

      this.stories = posts;

    },
  },

  created() {
   
   

    this.pageCount = 1;
    if (this.storiesCount > this.itemsPerPage) {
      this.pageCount = this.storiesCount / this.itemsPerPage;

      if (this.storiesCount % this.itemsPerPage !== 0) {
        this.pageCount += 1;
      }
    }

  },
};
</script>

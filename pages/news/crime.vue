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
                Crime
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
        <v-row v-if="posts.length > 0" class="mt-13">
          <v-col v-for="p in posts" :key="p._id" cols="12" md="6" lg="4">
            <PostCard :p="p"/>
          </v-col>
          <v-col cols="12">
            <div class="text-center pt2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
          </v-col>
        </v-row>

        <v-row  class="text-center" v-else>
          <v-co cols="12">
          <div>There are no stories published under this category yet!</div>

          </v-co>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
import PostCard from '~/components/fob/PostCard'
export default {
  name: "Crime",
  data() {
    return {
      page: 1,
      pageCount: 1,
      itemsPerPage: 2,
    };
  },
  async asyncData({ $axios, redirect, route, $auth, $router }) {
    try {
      const { posts, postsCount } = await $axios.$get(`/posts?tags=Crime&limit=2`);

      return { posts, postsCount };
    } catch (error) {}
  },
  methods: {},
  components: {
    PostCard
  },


watch: {
    async page(number) {



      let skip = (number - 1) * this.itemsPerPage;
      const {posts, storiesCount} = await this.$axios.$get(
        `/posts?skip=${skip}&limit=${this.itemsPerPage}&tags=Interview`
      );

      this.posts = posts;

    },
  },

  created() {
   
   

    this.pageCount = 1;
    if (this.postsCount > this.itemsPerPage) {
      this.pageCount = this.postsCount / this.itemsPerPage;

      if (this.postsCount % this.itemsPerPage !== 0) {
        this.pageCount += 1;
      }
    }

  },
};
</script>

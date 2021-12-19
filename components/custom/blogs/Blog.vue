<template>
  <div>
    <div class="blog-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Blog Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">Headlines</h2>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Blog Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Blog
        ----------------------------------------------- -->
        <v-row v-if="latestStories.length > 0" justify="center">
          <v-col
            v-for="p in latestStories"
            :key="p._id"
            cols="12"
            md="6"
            lg="4"
          >
            

           <PostCard :p="p"/>
          </v-col>
          

        </v-row>

       

        <!-- -----------------------------------------------
            End Blog
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import PostCard from '~/components/fob/PostCard'
export default {
  name: "Blog",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({ latestStories: "getLatestStories" }),
  },
  components: {
    PostCard
  },
};
</script>

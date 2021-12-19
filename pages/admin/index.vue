<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <material-stats-card
          color="primary"
          class="text--white"
          :title="'Stories'"
        >
          <v-data-table
            :headers="headers"
            :items="stories"
            loading="true"
            :page.sync="page"
            hide-default-footer
            @click:row="handleClick"
          >
          </v-data-table>
          <div class="text-center pt2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </material-stats-card>
      </v-col>
      <v-col  class="text-center" cols="12"> 
        <v-btn
                nuxt
                large
                to="/admin/create-post"
                class="btn-custom-lg btn-arrow"
                depressed
                color="primary"
                elevation="0"
              >
                <span>New Post</span>
                <i class="mdi mdi-arrow-right"></i>
              </v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="showDialog" scrollable max-width="500px">
      <v-card v-if="lookedUpSong">
        <v-card-title class="error--text">
          <span class="primary--text pl-2">{{ lookedUpSong.title }}</span>
          <v-spacer></v-spacer>
          <v-btn icon small color="grey" @click="showDialog = false"
            ><v-icon>mdi-close</v-icon></v-btn
          ></v-card-title
        >
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col class="pb-0" cols="6">
              <strong>Post Created</strong>
              <div class="caption">
                {{ $moment(lookedUpSong.createdAt).fromNow() }}
              </div>
            </v-col>

            <v-col class="pb-0" cols="6">
              <strong>Last Edited</strong>
              <div class="caption">
                {{ $moment(lookedUpSong.updatedAt).fromNow() }}
              </div>
            </v-col>

            <v-col class="pb-0" cols="6">
              <strong>Number of reads</strong>
              <div class="caption">
                {{ lookedUpSong.hits }}
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn small color="primary" @click="readPost">Read</v-btn>

          <v-btn
            small
            color="primary"
            :to="{ path: `/admin/edit-post/${lookedUpSong._id}` }"
            >Edit</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn small color="error" @click="deleteDialog = true"
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="deleteDialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Warning! </v-card-title>

        <v-card-text> Are you sure you want to delete the post? </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" text @click="deleteDialog = false">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="deletePost"> Delete </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import StatCard from "~/components/fob/StatCard";
import MaterialCard from "~/components/fob/Card";
import MaterialStatsCard from "~/components/fob/AppCard";
export default {
  components: {
    StatCard,
    MaterialCard,
    MaterialStatsCard,
  },
  middleware: ["auth"],
  data: () => ({
    loader: null,
    loading3: false,
    deleteDialog: false,
    lookedUpSong: null,
    lookUpId: null,
    showDialog: false,
    dialog3: false,
    deleteLoading: false,
    page: 1,
    headers: [
      {
        sortable: false,
        text: "Story Title",
        value: "title",
      },

      {
        sortable: false,
        text: "Tag",
        value: "tags",
      },

      {
        sortable: false,
        text: "Reads",
        value: "hits",
      },
    ],
    temp: "",
    page: 1,
    pageCount: 1,
    storiesPerPage: 10,
  }),

  async asyncData({ $axios, redirect, route, $auth, $router }) {
    try {
      const data = await $axios.$get(`/posts?skip=${0}&limit=10`);

      return { stories: data.posts, storiesCount: data.postsCount };
    } catch (error) {}
  },
  methods: {
    async lookUp() {
      try {
        this.loading3 = true;
        const { data } = await this.$axios.get(
          `/posts/track?id=${this.lookUpId}`
        );

        this.handleClick(data);

        this.loading3 = false;
      } catch (error) {
        console.log(error);
        this.$toasted.error("Some error occured! Check the issue ID");
        this.loading3 = false;
      }
    },

    handleClick(song) {
      this.lookedUpSong = song;
      this.showDialog = true;
    },

    cancelDeleteOperation() {
      this.dialog3 = false;
    },
    async deletePost() {
      await this.$axios.delete(`/posts/${this.lookedUpSong._id}`);
      this.stories = this.stories.filter((value, index, arr) => {
        return value._id !== this.lookedUpSong._id;
      });
      this.showDialog = false;
      this.deleteDialog = false;
      this.$toasted.success("Deleted");
    },

    editPost() {
      this.$router.push(`/admin/edit-story/${this.lookedUpSong._id}`);
    },

    readPost() {
      console.log("read post");
      this.$router.push(
        `/news/${this.lookedUpSong._id}/${this.lookedUpSong.seoTitle}`
      );
    },
  },

  created() {
    this.pageCount = 1;
    if (this.storiesCount > this.storiesPerPage) {
      this.pageCount = this.storiesCount / this.storiesPerPage;

      if (this.storiesCount % this.storiesPerPage !== 0) {
        this.pageCount += 1;
      }
    }
  },

  computed: {},

  mounted() {},

  watch: {
    async page(number) {
      let skip = (number - 1) * this.storiesPerPage;
      const {posts} = await this.$axios.$get(
        `/posts?skip=${skip}&limit=${this.storiesPerPage}`
      );

      this.stories = posts;
    },
  },
};
</script>

<style scoped>
</style>
<template>
  <div>
    <div id="fb-root"></div>
    <section id="about-us">
      <div class="pb-6"></div>

      <v-container class="text-center">
        <h2 class="section-title font-weight-medium">{{ post.title }}</h2>
        <p class="primary--text"><span style="font-style: italic;">posted</span> {{$moment(post.createdAt).fromNow()}} </p>
        <v-responsive class="mx-auto mb-2" style="max-width: 400px">
          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col v-if="!post.video" cols="12">
            <template>
              <v-img
              max-height="500px"
                eager
                :src="
                  post.coverUrl
                    ? post.coverUrl
                    : 'https://res.cloudinary.com/benedictionz/image/upload/v1593870413/benedictionz%20files/bene_ylek4a.jpg'
                "
                contain
                :aspect-ratio="$vuetify.breakpoint.xsOnly ? 1.1 : 1.7"
              ></v-img>
            </template>
            <v-divider v-if="!post.video" class="my-7"></v-divider>
          </v-col>
          <v-col>
            <h4 class="font-weight-bold text-justify">{{post.headline}}</h4>
          </v-col>
          <v-col cols="12">
            <h4 class="text-justify subtitle-1 wrap-text">
              {{ post.body }}
            </h4>
          </v-col>
          <v-col cols="12" md="10" offset-md="1">
            <template v-if="post.video">
              <video-player src="https://www.youtube.com/watch?v=z9cFKan4mlQ" />
            </template>
          </v-col>
          <v-col cols="3"> </v-col>
          <v-col cols="12">
            <template>
              <v-responsive class="mx-auto">
                <v-btn class="" small color="">
                  <ShareNetwork
                    network="facebook"
                    :url="`https://www.benedictionz.com/songs/${post._id}/${post.seoTitle}`"
                    :title="`${post.title} | FOB News`"
                  >
                    Share on Facebook
                  </ShareNetwork>
                </v-btn>
              </v-responsive>
            </template>
          </v-col>
          <v-col cols="12">
            <no-ssr>
              <div>
                <script>
                  (function (d, s, id) {
                    var js;
                    var fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src =
                      "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=2005084199557839";
                    fjs.parentNode.insertBefore(js, fjs);
                  })(document, "script", "facebook-jssdk");
                </script>

                <div id="fb_thread" class="text-xs-center">
                  <div
                    class="fb-comments"
                    :data-href="`http://benedictionz.com/news/${post._id}`"
                    data-numposts="5"
                    data-width="100%"
                  ></div>
                </div>
              </div>
            </no-ssr>
          </v-col>
          <v-col cols="12" md="4">
            <v-card max-width="450" class="mx-auto">
              <v-toolbar dark>
                <v-toolbar-title>Top News</v-toolbar-title>

                <v-spacer></v-spacer>
              </v-toolbar>

              <v-list three-line>
                <template v-for="(item, index) in topNews.slice(0,3)">
                  


                  <v-list-item link :href="`/news/${item._id}/${item.seoTitle}`" :key="item.title">
                    <v-list-item-avatar>
                      <v-img :src="item.coverUrl"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.headline"
                      ></v-list-item-subtitle>
                       <v-divider/>
                    </v-list-item-content>
                  </v-list-item>
                 
                </template>
                
              </v-list>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card max-width="450" class="mx-auto">
              <v-toolbar dark>
                <v-toolbar-title>Latest News</v-toolbar-title>

                <v-spacer></v-spacer>
              </v-toolbar>

              <v-list three-line>
                <template v-for="(item, index) in latestNews.slice(0,3)">
                  


                  <v-list-item link :href="`/news/${item._id}/${item.seoTitle}`"  :key="item.title">
                    <v-list-item-avatar>
                      <v-img :src="item.coverUrl"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.headline"
                      ></v-list-item-subtitle>
                       <v-divider/>
                    </v-list-item-content>
                  </v-list-item>
                 
                </template>
                
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-divider class="my-3"></v-divider>
      </v-container>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import VideoPlayer from "nuxt-video-player";

require("nuxt-video-player/src/assets/css/main.css");
export default {
  components: {
    VideoPlayer,
  },
  data: () => ({
    parser: null,
    
  }),

  head() {
    return {
      title: this.post.seoTitle.replace(/-/g, " "),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.post.seoTitle.replace(/-/g, " ")}`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `${this.post.headline}`,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://www.benedictionz.com/news/${this.post._id}/${this.post.seoTitle}`,
        },
        { hid: "og:site_name", property: "og:site_name", content: `FOB News` },
        {
          hid: "og:image",
          property: "og:image",
          content: `${this.post.coverUrl}`,
        },
        { hid: "og:type", property: "og:type", content: `website` },
        { hid: "og:image:width", property: "og:image:width", content: `400` },
        { hid: "og:image:height", property: "og:image:height", content: `400` },
      ],
    };
  },

  async asyncData({ params, $axios, $auth }) {
    const { data } = await $axios.get(`/posts/${params.id}`);
    return { post: data };
  },

  methods: {
    ...mapActions({}),
  },

  computed: {
    ...mapGetters({
      topNews: "getTopStories",
      latestNews: "getLatestStories",
    }),
    player() {},
  },

  mounted() {},
  watch: {},
};
</script>
<style scoped>
.wrap-text {
  white-space: pre-line;
}
</style>

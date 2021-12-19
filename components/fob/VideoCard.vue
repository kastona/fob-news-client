<template>
  <v-card class="portfolio-card overflow-hidden">
    <div class="portfolio-img">
      <video-player :src="post.coverUrl"/>
    </div>
                
    <v-card-text :href="`/news/${post._id}/${post.seoTitle}`">
      <a
                  :href="`/news/${post._id}/${post.seoTitle}`"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                  >{{ post.title }}</a
                >
    </v-card-text>
  </v-card>
</template>

<script>
import VideoPlayer from "nuxt-video-player";

require("nuxt-video-player/src/assets/css/main.css");
export default {
    components: {
        VideoPlayer
    }, 
    props: ['post']
};
</script>

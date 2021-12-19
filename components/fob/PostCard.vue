<template>
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
</template>

<script>
export default {
  props: ['p']
}
</script>
<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="12" lg="8">
            <div>
              <h4 class="font-weight-medium text-center contact-title mt-0">
                Enter the story details below
              </h4>
              <v-card flat max-width="600px" class="mx-auto">
                <v-card flat v-if="!uploading && !completed">
                  <v-container fluid>
                    <v-form ref="form" v-model="valid">
                      <v-text-field
                        outlined
                        label="Title"
                        v-model="post.title"
                        :rules="rules"
                      ></v-text-field>

                      <v-text-field
                        outlined
                        label="Headline"
                        v-model="post.headline"
                        :rules="rules"
                      ></v-text-field>

                      <v-textarea
                        outlined
                        name="body"
                        v-model="post.body"
                        background-color="grey lighten-2"
                        label="News Body"
                        auto-grow
                      ></v-textarea>

                      <v-select
                        outlined
                        v-model="post.tags"
                        :items="tags"
                        :error-messages="genreErrors"
                        label="Tag"
                        required
                      ></v-select>

                      <v-radio-group v-model="row" row>
                        <v-radio label="Video News" value="video"></v-radio>
                        <v-radio label="Just Post" value="audio"></v-radio>
                      </v-radio-group>

                      <v-file-input
                        v-if="!post.video"
                        v-model="file"
                        placeholder="click to select post image"
                        label="Select post image"
                        show-size
                        :accept="'image/jpeg'"
                        prepend-icon="mdi-image"
                        outlined
                        dense
                      >
                        <template v-slot:selection="{ text }">
                          <v-chip small label color="primary">
                            {{ text }}}
                          </v-chip>
                        </template>
                      </v-file-input>

                      <v-text-field
                        v-else
                        outlined
                        label="Youtube Url"
                        placeholder="Paste the youtube video url"
                        v-model="post.coverUrl"
                        :rules="rules"
                      ></v-text-field>
                      <v-btn
                        :disabled="
                          !valid || uploading || (!file && !post.video)
                        "
                        color="success"
                        class="mr-4"
                        @click="handleUploadPost"
                      >
                        Upload
                        <v-icon right dark>mdi-cloud-upload</v-icon>
                      </v-btn>

                      <v-btn color="error" class="mr-4" @click="reset">
                        Reset Form
                      </v-btn>
                    </v-form>
                  </v-container>
                </v-card>

                <v-card v-else elevation="6" class="text-left">
                  <v-card flat>
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title
                          class="title primary--text"
                          v-text="post.title"
                        ></v-card-title>
                      </div>
                    </div>
                  </v-card>

                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-progress-linear
                      :value="uploadProgress"
                      height="20"
                      v-if="uploadProgress < 100"
                      class="mx-5"
                      reactive
                    >
                      <strong style="color: white"
                        ><span v-if="uploading && !completed"
                          >Uploading...</span
                        >
                        <span v-if="completed">Upload Successful!</span>
                        {{ uploadProgress }}%</strong
                      >
                    </v-progress-linear>

                    <v-progress-linear
                      :indeterminate="!showUploadError && !completed"
                      height="20"
                      v-if="uploadProgress >= 100"
                      class="mx-5"
                      reactive
                      :color="showUploadError ? 'secondary' : 'primary'"
                    >
                      <strong
                        v-if="!showUploadError && !completed"
                        style="color: white"
                        >preparing your upload...</strong
                      >
                      <strong v-if="!showUploadError && completed"
                        >Successful!</strong
                      >
                      <strong
                        v-if="showUploadError && completed"
                        style="color: white"
                        >Upload failed</strong
                      >
                    </v-progress-linear>
                    <v-btn @click="$router.go(0)" v-if="showUploadError"
                      >Retry</v-btn
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                      nuxt
                      :to="{ path: `/news/${post._id}/${post.seoTitle}` }"
                      color="primary"
                      v-if="completed"
                      >Open</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  middleware: ["auth"],
  data: () => ({
    file: null,
    art: null,

    post: {
      title: "",
      video: false,
      tags: null,
      headline: null,
      body: null,
    },
    uploadedSong: {},
    e6: 1,
    uploading: false,
    completed: false,
    showUploadError: false,
    showAdminContact: false,
    tags: ["Politics", "Crime", "Interview", "Sports"],

    row: "audio",

    valid: true,
    rules: [(v) => !!v || "Cannot be blank"],
    select: null,
  }),

  async asyncData({ $axios, redirect, $auth }) {},

  methods: {
    ...mapActions({
      uploadPost: "posts/uploadPost",
    }),
    async handleUploadPost() {
      if (this.post.video) {
        this.post.coverId = this.post.coverUrl;
      }
      const formData = new FormData();

      for (const key in this.post) {
        formData.append(key, this.post[key]);
      }

      formData.append("post", this.file);

      try {
        this.uploading = true;
        const { data } = await this.uploadPost(formData);
        this.uploading = false;
        this.completed = true;
        this.$toasted.success("successful!");

        this.post = data;
      } catch (e) {
        this.$toasted.error("Upload failed, Please try again!", {
          duration: 8000,
        });
        this.showUploadError = true;
      }
    },

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },

  computed: {
    ...mapGetters({
      uploadProgress: "posts/getUploadProgress",
    }),
  },

  watch: {
    row(val) {
      this.post.video = val === "video";
      console.log(this.post.video);
    },
  },
};
</script>
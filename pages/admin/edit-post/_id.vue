<template>
  <v-container light class="text-center pt-0 mt-5">
    <v-card flat max-width="600px" class="mx-auto">
      <v-card flat>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-text-field
                label="Title"
                v-model="post.title"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                label="Headline"
                v-model="post.headline"
                hint="A short headline"
                persistent-hint
              ></v-text-field>
            </v-col>
          </v-row>

          

          <v-row>
            <v-col>
              <v-textarea
                name="description"
                v-model="post.body"
                filled
                label="News body"
                persistent-hint
                auto-grow
              ></v-textarea>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col>
              <v-btn @click="updatePost" color="primary">Update Post</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-card>
  </v-container>
</template>
<script>

  import {mapActions, mapGetters} from 'vuex'
  export default {
    middleware: ['auth'],
    data: ()=> ({

    }),
    

    async asyncData ({ params,$axios, redirect, $auth }) {
      
      const { data } = await $axios.get(`/posts/${params.id}`)
      return { post: data }
    },

    methods: {
      ...mapActions({
        update: 'posts/updatePost'
      }),
      async updatePost() {
        try{
          const temp = {title: this.post.title, headline: this.post.headline,  body: this.post.body}
          await this.update({temp, id:  this.post._id})

          await this.$router.push('/')
        }catch(error){
          console.log(error.message)
        }

      }

    },

    computed: {

    }
  }
</script>
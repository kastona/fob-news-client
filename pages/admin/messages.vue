<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <material-stats-card
          color="primary"
          class="white--text"
          :title="'Messages'"
        >
          <v-data-table
            :headers="headers"
            :items="messages"
            loading="true"
            hide-default-footer
            @click:row="handleClick"
          >
          <template v-slot:item.createdAt="{ item }">
      {{ $moment(item.careatedAt).fromNow() }}
    </template>
          </v-data-table>
        </material-stats-card>
      </v-col>
    </v-row>
    <v-dialog v-model="showDialog" scrollable max-width="500px">
      <v-card v-if="lookedUpSong">
        <v-card-title class="error--text">
          <span class="primary--text pl-2">Message from {{ lookedUpSong.name }}</span>
          <v-spacer></v-spacer>
          <v-btn icon small color="grey" @click="showDialog = false"
            ><v-icon>mdi-close</v-icon></v-btn
          ></v-card-title
        >
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col class="pb-0" cols="6">
              <strong>Message sent</strong>
              <div class="caption">
                {{ $moment(lookedUpSong.createdAt).fromNow() }}
              </div>
            </v-col>


            <v-col class="pb-0" cols="6">
              <strong>Sender's Email
              </strong>
              <div class="caption">
                {{ lookedUpSong.email }}
              </div>
            </v-col>

            <v-col class="pb-0" cols="12">
              <strong>Message</strong>
              <div class="subtitle-1 text-justify">
                {{ lookedUpSong.message }}
              </div>
            </v-col>

          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
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

        <v-card-text> Are you sure you want to delete the message? </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" text @click="deleteDialog = false">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="deleteMessage"> Delete </v-btn>
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
    showDialog: false,
    dialog3: false,
    deleteLoading: false,
    headers: [
      {
        sortable: false,
        text: "Sender Name",
        value: "name",
      },

      {
        sortable: false,
        text: "Sender Email",
        value: "email",
      },

      {
        sortable: false,
        text: "Time",
        value: "createdAt",
      },
    ],
    temp: ""
  }),

  async asyncData({ $axios, redirect, route, $auth, $router }) {
    try {
      const data = await $axios.$get(`/messages`);

      return { messages: data.messages};
    } catch (error) {}
  },
  methods: {
    
    handleClick(song) {
      this.lookedUpSong = song;
      this.showDialog = true;
    },

    cancelDeleteOperation() {
      this.dialog3 = false;
    },
    async deleteMessage() {
      await this.$axios.delete(`/messages/${this.lookedUpSong._id}`);
      this.messages = this.messages.filter((value, index, arr) => {
        return value._id !== this.lookedUpSong._id;
      });
      this.showDialog = false;
      this.deleteDialog = false;
      this.$toasted.success("Deleted");
    },

   
  },

  created() {
   
  },

  computed: {},

  mounted() {},

  watch: {
    
  },
};
</script>

<style scoped>
</style>
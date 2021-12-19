<template>
  <div id="main">
    <v-parallax   :src="require('@/assets/images/banner/b1.jpg')">

    <v-overlay
            absolute
            color="#036358"
            opacity="0.8"
          >
            
         
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">

<div style="color: white;" class=" text-h1 font-weight-light">
FOB NEWS
</div>


            <h2 style="color: white" class="banner2-title font-weight-light">
              
              Your
              <span class="font-italic font-weight-bold">
                Fair, Objective & Balanced News
              </span>
            </h2>
          </v-col>
        </v-row>
    </v-overlay>
    </v-parallax>
  </div>
</template>
<script>
export default {
  name: "Banner2",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>

.overlay {
  width: 100%; 
  height: 100%;
  
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
}
</style>
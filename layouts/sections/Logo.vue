<template>
  <div class="logo">
    <NLink to="/">
      <v-img
        id="img"
        :src="require('@/assets/images/logos/white-text.png')"
        alt="logo"
      />
    </NLink>
  </div>
</template>

<script>
export default {
  name: "Logo",

  data() {
    return {};
  },
};
</script>

<style lang="scss">



</style>
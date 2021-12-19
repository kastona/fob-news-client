<template>
  <div>
    <Banner2 />
    <AllCustomComponents />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "FOB NEWS | Your Fair, Objective and Balanced News",
      meta: [
        {
          hid: "description",
          name: "FOB News",
          content: "FOB News brings to you fair, objective and balanced news",
        },
      ],
    };
  },

  data() {
    return {};
  },
  components: {
    Banner2: () => import("@/components/custom/banner/Banner2"),
    AllCustomComponents: () =>
      import("@/components/custom/AllCustomComponents"),
  },
};
</script>

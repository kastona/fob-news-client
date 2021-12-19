<template>
  <div>
          <ContactText/>
          <Contact/>

  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
  },
  methods: {},
  components: {
    ContactText: () => import("@/components/custom/contact/ContactText"),
    Contact: () => import("@/components/custom/contact/Contact"),
  }
};
</script>

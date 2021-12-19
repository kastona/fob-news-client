<template>
  <div>
   

    <Blog />
   
    <Feature2 />

    <Portfolio/>

    
  </div>
</template>

<script>
export default {
  name: "AllCustomComponents",

  data() {
    return {};
  },
  components: {
    Feature2: () => import("@/components/custom/features/Feature2"),
    Blog: () => import("@/components/custom/blogs/Blog"),
    Contact: () => import("@/components/custom/contact/Contact"),


    
    FeatureText: () => import("@/components/custom/features/FeatureText"),
    PricingText: () => import("@/components/custom/pricing/PricingText"),
    TeamText: () => import("@/components/custom/team/TeamText"),
    ContactText: () => import("@/components/custom/contact/ContactText"),
    TestimonialText: () =>
      import("@/components/custom/testimonial/TestimonialText"),
    C2aText: () => import("@/components/custom/c2a/C2aText"),
    PortfolioText: () => import("@/components/custom/portfolio/PortfolioText"),
    FormBannerText: () =>
      import("@/components/custom/form-banner/FormBannerText"),
    Header2: () => import("@/components/custom/header/Header2"),
    Banner1: () => import("@/components/custom/banner/Banner1"),
    Banner2: () => import("@/components/custom/banner/Banner2"),
    Feature1: () => import("@/components/custom/features/Feature1"),
    Feature3: () => import("@/components/custom/features/Feature3"),
    FormBanner1: () => import("@/components/custom/form-banner/FormBanner1"),
    Portfolio: () => import("@/components/custom/portfolio/Portfolio"),
    Pricing: () => import("@/components/custom/pricing/Pricing"),
    Team: () => import("@/components/custom/team/Team"),
    Testimonial: () => import("@/components/custom/testimonial/Testimonial"),
    C2a1: () => import("@/components/custom/c2a/C2a1"),
    C2a2: () => import("@/components/custom/c2a/C2a2"),
    
  },
};
</script>

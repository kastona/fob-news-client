export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as BasicAllComponents } from '../../components/basic/AllComponents.vue'
export { default as BasicUiAlert } from '../../components/basic/UiAlert.vue'
export { default as BasicUiButton } from '../../components/basic/UiButton.vue'
export { default as BasicUiCard } from '../../components/basic/UiCard.vue'
export { default as BasicUiChip } from '../../components/basic/UiChip.vue'
export { default as BasicUiForm } from '../../components/basic/UiForm.vue'
export { default as BasicUiMenu } from '../../components/basic/UiMenu.vue'
export { default as BasicUiPagination } from '../../components/basic/UiPagination.vue'
export { default as BasicUiTable } from '../../components/basic/UiTable.vue'
export { default as BasicUiTooltip } from '../../components/basic/UiTooltip.vue'
export { default as BasicUiTypography } from '../../components/basic/UiTypography.vue'
export { default as CustomAllCustomComponents } from '../../components/custom/AllCustomComponents.vue'
export { default as FobAppCard } from '../../components/fob/AppCard.vue'
export { default as FobCard } from '../../components/fob/Card.vue'
export { default as FobNewsCardSmall } from '../../components/fob/NewsCardSmall.vue'
export { default as FobPostCard } from '../../components/fob/PostCard.vue'
export { default as FobStatCard } from '../../components/fob/StatCard.vue'
export { default as FobTipTap } from '../../components/fob/TipTap.vue'
export { default as FobVideoCard } from '../../components/fob/VideoCard.vue'
export { default as HelperAppOffset } from '../../components/helper/AppOffset.vue'
export { default as CustomBanner1 } from '../../components/custom/banner/Banner1.vue'
export { default as CustomBanner2 } from '../../components/custom/banner/Banner2.vue'
export { default as CustomBannerText } from '../../components/custom/banner/BannerText.vue'
export { default as CustomBlogsBlog } from '../../components/custom/blogs/Blog.vue'
export { default as CustomC2aC2a1 } from '../../components/custom/c2a/C2a1.vue'
export { default as CustomC2aC2a2 } from '../../components/custom/c2a/C2a2.vue'
export { default as CustomC2aC2aText } from '../../components/custom/c2a/C2aText.vue'
export { default as CustomContact } from '../../components/custom/contact/Contact.vue'
export { default as CustomContactText } from '../../components/custom/contact/ContactText.vue'
export { default as CustomFeaturesFeature1 } from '../../components/custom/features/Feature1.vue'
export { default as CustomFeaturesFeature2 } from '../../components/custom/features/Feature2.vue'
export { default as CustomFeaturesFeature3 } from '../../components/custom/features/Feature3.vue'
export { default as CustomFeaturesFeatureText } from '../../components/custom/features/FeatureText.vue'
export { default as CustomFormBanner1 } from '../../components/custom/form-banner/FormBanner1.vue'
export { default as CustomFormBannerText } from '../../components/custom/form-banner/FormBannerText.vue'
export { default as CustomHeader2 } from '../../components/custom/header/Header2.vue'
export { default as CustomPortfolio } from '../../components/custom/portfolio/Portfolio.vue'
export { default as CustomPortfolioText } from '../../components/custom/portfolio/PortfolioText.vue'
export { default as CustomPricing } from '../../components/custom/pricing/Pricing.vue'
export { default as CustomPricingText } from '../../components/custom/pricing/PricingText.vue'
export { default as CustomTeam } from '../../components/custom/team/Team.vue'
export { default as CustomTeamText } from '../../components/custom/team/TeamText.vue'
export { default as CustomTestimonial } from '../../components/custom/testimonial/Testimonial.vue'
export { default as CustomTestimonialText } from '../../components/custom/testimonial/TestimonialText.vue'
export { default as SharedComingSoon } from '../../components/shared/coming-soon/ComingSoon.vue'
export { default as SharedLpBanner } from '../../components/shared/lp-banner/Banner.vue'
export { default as SharedLpBanner404 } from '../../components/shared/lp-banner/Banner404.vue'
export { default as SharedLpBannerComingSoon } from '../../components/shared/lp-banner/BannerComingSoon.vue'
export { default as SharedLpBannerTwo } from '../../components/shared/lp-banner/BannerTwo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

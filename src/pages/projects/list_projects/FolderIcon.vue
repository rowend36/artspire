<script setup>
import { urlFor } from "../../../components/SanityImage.vue";
defineProps({
  image: String,
  isMobileApp: Boolean
})
</script>
<template>
  <svg width="366" height="381" viewBox="81.5 0 385.5 381" fill="blue" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M337.313 49.8819L359.585 53L454 53C460.627 53 466 47.6274 466 41L466 32C466 25.3726 460.627 20 454 20L222 20C215.373 20 210 25.3726 210 32L210 37.8819C210 44.5093 215.373 49.8819 222 49.8819L337.313 49.8819Z"
      :fill="isMobileApp ? 'var(--primary-light)' : '#FF9900'" />
    <defs>
      <clipPath id="shape">
        <path
          d="M230.845 33.3891L197.114 3.51645C194.919 1.57298 192.089 0.5 189.158 0.5H12C5.37258 0.5 0 5.87259 0 12.5V368.5C0 375.127 5.37257 380.5 12 380.5H454C460.627 380.5 466 375.127 466 368.5V48.4055C466 41.7781 460.627 36.4055 454 36.4055H238.801C235.87 36.4055 233.04 35.3325 230.845 33.3891Z"
          fill="#D9D9D9" />

      </clipPath>

    </defs>
    <rect x="81.5" width="385.5" height="381" clip-path="url(#shape)" fill='#dedede'>
    </rect>
    <image v-if="image" x="81.5" width="385.5" height="381" clip-path="url(#shape)"
      :xlink:href="urlFor(image).auto('format').fit('min').width(720).toString()" preserveAspectRatio="xMidYMid slice">
    </image>
  </svg>
</template>
<style scoped></style>

<script setup>
import logoWhatsapp from "../assets/logos_whatsapp-icon.png";
import logoInstagram from "../assets/skill-icons_instagram.png";
import logoLinkedIn from "../assets/skill-icons_linkedin.png";
import logoTwitter from "../assets/skill-icons_twitter.png";
import MyInfo from "../logic/info";
</script>
<template>
  <div class="flex justify-end" :style="{ marginRight: '-0.5rem' }">
    <a target="_blank" rel="noopener" aria-label="Chat on WhatsApp" v-if="MyInfo.whatsappNumber"
      :href="`https://wa.me/${MyInfo.whatsappNumber.replace(/[-+ ]/g, '')}${MyInfo.whatsappMessageTemplate ? '?text=' + encodeURIComponent(MyInfo.whatsappMessageTemplate) : ''}`"><img
        alt="Chat on WhatsApp" :src="logoWhatsapp" class="social-links mx-2" /></a>
    <a target="_blank" rel="noopener" aria-label="Connect on Twitter" v-if="MyInfo.twitterLink"
      :href="MyInfo.twitterLink"><img alt="Connect on Twitter" :src="logoTwitter" class="social-links mx-2" /></a>
    <a target="_blank" rel="noopener" aria-label="Connect on Instagram" v-if="MyInfo.instagramLink"
      :href="MyInfo.instagramLink"><img alt="Connect on Instagram" :src="logoInstagram" class="social-links mx-2" /></a>
    <a target="_blank" rel="noopener" aria-label="Connect on LinkedIn" v-if="MyInfo.linkedInLink"
      :href="MyInfo.linkedInLink"><img alt="Connect on LinkedIn" :src="logoLinkedIn" class="social-links mx-2" /></a>
  </div>
</template>
<style>
.social-links {
  width: 2rem;
  height: auto;
}
</style>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import AppLogo from "./AppLogo.vue"
const links = [{
  href: "/",
  name: "Home"
}, {
  href: "/projects",
  name: "Projects"
}, {
  href: "/classes",
  name: "Classes"
}, {
  href: "/resume",
  name: "Resume",
  icon: "M1.625 15C1.15833 15 0.771 14.846 0.463 14.538C0.154333 14.2293 0 13.8417 0 13.375V11H1V13.375C1 13.5417 1.06267 13.6873 1.188 13.812C1.31267 13.9373 1.45833 14 1.625 14H12.375C12.5417 14 12.6873 13.9373 12.812 13.812C12.9373 13.6873 13 13.5417 13 13.375V11H14V13.375C14 13.8417 13.846 14.2293 13.538 14.538C13.2293 14.846 12.8417 15 12.375 15H1.625ZM7 11.225L3.45 7.69999L4.175 6.97499L6.5 9.29999V0.649994H7.5V9.29999L9.825 6.97499L10.55 7.69999L7 11.225Z"

}]

const isDesktop = ref(window?.innerWidth > 1024);
</script>
<template>
  <nav v-if="isDesktop" class="app-padding nav-bar">
    <AppLogo>Artspire_Jay</AppLogo>
    <div style="flex-grow:1"></div>
    <RouterLink v-for="url of links" :key="url.href" :to="url.href" activeClass="active-header-link"
      :class="['header-link', { 'header-download-link': !!url.icon }]">{{
        url.name }}
      <svg v-if="url.icon" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :d="url.icon" fill="#162574" />
      </svg>
    </RouterLink>
  </nav>
  <nav v-else class="app-padding nav-bar">
    <AppLogo>Artspire_Jay</AppLogo>
  </nav>
</template>
<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  position: fixed;
  background: white;
  z-index: 20;
  left: 0;
  padding-top: 0;
  padding-bottom: 0;
  height: 4rem;
}

@media (min-width:1920px) {
  .nav-bar {
    width: 1920px;
    left: calc(50vw - 960px);
  }
}

.header-link {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 31px;
  margin-left: 3rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  /* Deep Color */

  color: #162574;
  text-decoration: none;
}

.active-header-link {
  color: #3D5CFA;
}

.header-download-link {
  border: 1px solid #3D5CFA;
}
</style>
<script setup>
import {
  RouterLink
} from "vue-router";
import AppLogo from "./AppLogo.vue";
import MyInfo from "../logic/info";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";

const links = [{
  href: "/home",
  name: "Home",
}, {
  href: "/projects",
  name: "Projects",
}, {
  href: "/classes",
  name: "Classes",
}]
import useBreakpoints from "../utils/useBreakpoints";
import { primary } from "../utils/app_config";
import { ref } from "vue";
const {
  isWideScreen,
} = useBreakpoints();
const isMenuOpen = ref(false);
</script>
<template>
  <nav class="app-padding nav-bar">
    <template v-if="isWideScreen">
      <AppLogo />
      <div style="flex-grow:1"></div>
      <!-- Desktop Navigation Links -->
      <RouterLink activeClass="header-link-active" v-for="url of links" :key="url.href" :to="url.href"
        :class="['header-link', 'grotesk', 'hover-text']">{{ url.name }}
      </RouterLink>
    </template>
    <!-- Mobile Menu Button -->
    <app-button v-else variant='icon' id='menu-btn' @click="isMenuOpen = true">
      <MenuIcon />
    </app-button>
    <!-- Download resume button -->
    <a v-if="MyInfo.resumeLink" :href="MyInfo.resumeLink" target="_blank" rel="noopener"
      :class="['header-link', 'grotesk', 'hover-text', 'header-download-link']">Resume
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.625 15C1.15833 15 0.771 14.846 0.463 14.538C0.154333 14.2293 0 13.8417 0 13.375V11H1V13.375C1 13.5417 1.06267 13.6873 1.188 13.812C1.31267 13.9373 1.45833 14 1.625 14H12.375C12.5417 14 12.6873 13.9373 12.812 13.812C12.9373 13.6873 13 13.5417 13 13.375V11H14V13.375C14 13.8417 13.846 14.2293 13.538 14.538C13.2293 14.846 12.8417 15 12.375 15H1.625ZM7 11.225L3.45 7.69999L4.175 6.97499L6.5 9.29999V0.649994H7.5V9.29999L9.825 6.97499L10.55 7.69999L7 11.225Z"
          :fill="primary" />
      </svg>
    </a>
    <!-- Logo on the right on Mobile -->
    <template v-if="!isWideScreen">
      <div style='flex-grow:1'></div>
      <AppLogo />
      <Transition name="up-down">
        <div class="fixed text-white" v-show="isMenuOpen"
          :style="{ paddingTop: '4rem', zIndex: 10, paddingBottom: '4rem', backgroundColor: 'rgba(0,0,0,0.9)', width: '100%', bottom: 0, top: 0, left: 0 }">
          <app-button variant="icon" class="close-icon-btn" @click="isMenuOpen = false">
            <CloseIcon />
          </app-button>
          <ul>
            <!-- Desktop Navigation Links -->
            <RouterLink @click="isMenuOpen = false" activeClass="header-link-active" v-for="url of links" :key="url.href"
              :to="url.href" :class="['mobile-link', 'block', 'grotesk', 'hover-text']">{{ url.name }}
            </RouterLink>
          </ul>
        </div>
      </Transition>
    </template>
  </nav>
</template>
<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 30;
  top: 0;
  width: 100%;
  left: 0;
  padding-top: 0;
  padding-bottom: 0;
  height: 4rem;
  background-color: white;
}

#menu-btn {
  margin-left: -0.75em;
}

.header-link {
  line-height: calc(2rem - 1px);
  margin-left: 3rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  white-space: nowrap;
  /* Deep Color */

  color: var(--primary);
  text-decoration: none;
}

.mobile-link {
  line-height: 3rem;
  width: 100%;
  text-align: center;
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
  /* Deep Color */

  color: white;
  text-decoration: none;
  border-bottom: 1px solid #333333;
}

@media (max-width: 1023.99px) {
  .header-link {
    margin-left: 1rem;
  }
}

.header-link-active {
  color: var(--primary-light);
}

.header-download-link {
  border: 1px solid var(--primary-light);
}

.close-icon-btn {
  color: #ffffff;
  position: absolute;
  top: 32px;
  right: 32px;
}

.close-icon-btn>.close-icon {
  color: white;
}
</style>

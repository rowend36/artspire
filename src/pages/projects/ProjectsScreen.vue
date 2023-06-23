<script setup>
import { ref, unref, watch } from "vue";
import useTabController from "../../components/tab_controller";
import useInterval from "../../utils/useInterval"
import SocialLinks from "../../components/SocialLinks.vue";
/** @type {import("../../logic/api").ProjectType[]}*/
const TABS = ["UI/UX", "Brand", "Art & Illustration"]
const { activeTab, setActiveTab, tabs } = useTabController(TABS, '/projects')
const index = ref(0);
const shown = [
  "UI/UX", "Brand", "Artistic"]
let skip = ref(false);
const start = () => {
  if (skip.value) return skip.value = false;
  index.value = (index.value + 1) % shown.length;
}
useInterval(start, 2000)
const wrapper = ref(null);
watch(index, () => {
  const el = unref(wrapper)
  if (el) {
    el.style.width = el.firstChild.clientWidth + "px";
  }
}, { flush: "post", immediate: false })
</script>

<template>
  <div class="app-padding" :style='{ paddingBottom: 0 }'>
    <h1 class="font-huge">Explore a wide range of
      <span class="highlight-wrapper">
        <span ref="wrapper" class="highlight">
          <span class="inline-block nowrap">
            {{ shown[index] }}
          </span>
        </span>

      </span>
      projects
    </h1>
    <ul class="tabs spaced grotesk font-xl">
      <li v-for=' ( name, i ) of tabs ' :key='name' :class="[' tab', { 'tab-active': name == activeTab }]"
        @click=" setActiveTab(name)">
        <span class='hover-text' @mouseover="index = i; skip = true">{{ name }}</span>
      </li>
      <li class='tab empty-tab'>
      </li>
    </ul>
    <div style="min-height: 50vh;" class="flex flex-col">
      <router-view :tab="activeTab" v-slot="{ Component }">
        <transition name="left-right">
          <component :is="Component" />
        </transition>
      </router-view>
      <spacer-view />
      <social-links />
    </div>
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  line-height: 1.5em;
}

@media (max-width:599.99px) {
  h1 {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
}

.spaced {
  margin: 1rem 0;
}

.highlight-wrapper {
  display: inline-block;
  min-width: 5em;
  text-align: center;
}

.highlight {
  font-size: 1em;
  padding: 0.25em 0;
  border-radius: 0.5em;
  margin-left: 0em;
  display: inline-block;
  overflow-x: hidden;
  transition: width 0.6s ease;
  width: auto;
  text-align: center;
}

.highlight>span {
  padding: 0 0.5em;
}

.mb-36 {
  margin-bottom: 9rem;
}
</style>

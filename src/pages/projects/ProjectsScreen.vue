<script setup>
import { onMounted, onUnmounted, ref, unref, watch } from "vue";
import useTabController from "../../components/tab_controller";
/** @type {import("../../logic/api").ProjectType[]}*/
const TABS = ["UI/UX", "Brand", "Art & Illustration"]
const { activeTab, setActiveTab, tabs } = useTabController(TABS, '/projects')
const index = ref(0);
let i = 0;
const shown = [
  "Artistic", "UI/UX", "Brand"]
const start = () => {
  index.value = (index.value + 1) % shown.length;
}
onMounted(() => {
  i = setInterval(start, 2000);
})
onUnmounted(() => {
  clearInterval(i);
})
const wrapper = ref(null);
watch(index, () => {
  if (unref(wrapper))
    unref(wrapper).style.width = unref(wrapper).firstChild.clientWidth + "px";
}, { flush: "post", immediate: false })
</script>

<template>
  <div class="fullpage app-padding">
    <h1 class="font-huge">Explore a wide range of
      <span ref="wrapper" class="highlight">
        <span class="inline-block nowrap">
          {{ shown[index] }}
        </span>
      </span>
      projects
    </h1>
    <ul class="tabs spaced grotesk font-xl">
      <li v-for='name of tabs' :key='name' :class="['tab', { 'tab-active': name == activeTab }]"
        @click="setActiveTab(name)">
        {{ name }}</li>
      <li class='tab empty-tab'>
      </li>
    </ul>
    <router-view :tab="activeTab" v-slot="{ Component }">
      <transition name="down-up">
        <component :is="Component" />
      </transition>
    </router-view>
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

.highlight {
  font-size: 1em;
  padding: 0.25em 0;
  border-radius: 0.5em;
  margin-left: 0em;
  display: inline-block;
  overflow-x: hidden;
  transition: width 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.highlight>span {
  padding: 0 0.5em;
}
</style>

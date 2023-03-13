<script setup>
import useTabController from "../../components/tab_controller";
import FolderIconVue from "./FolderIcon.vue";
const { activeTab, setActiveTab, tabs } = useTabController(["UI/UX", "Brand", "Art & Illustration"])


</script>
<template>
  <div class="fullpage">
    <h1 class='app-padding'>Explore a wide range of <span>UI/UX</span> projects</h1>
    <ul class="tabs">
      <li v-for='name of tabs' :key='name' :class="['tab', { 'tab-active': name == activeTab }]"
        @click="setActiveTab(name)">
        {{ name }}</li>
	  <li class='tab empty-tab'></li>
    </ul>
    
  </div>
</template>
<style scoped>

</style>

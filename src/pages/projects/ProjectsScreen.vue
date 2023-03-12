<script setup>
import useTabController from "../../components/tab_controller";
import FolderIconVue from "./FolderIcon.vue";
const { activeTab, setActiveTab, tabs } = useTabController(["UI/UX", "Brand", "Art & Illustration"])
</script>
<template>
  <div class="fullpage">
    <h1>Explore a wide range of <span>UI/UX</span> projects</h1>
    <ul class="tabs">
      <li v-for='name of tabs' :key='name' :class="['tab', { 'tab-active': name == activeTab }]"
        @click="setActiveTab(name)">
        {{ name }}</li>
    </ul>
    <FolderIconVue />
  </div>
</template>
<style scoped>
.tabs {
  padding: 0;
  --border-radius: 0.75em;
  --line-height: 1.5em;
  --padding-y: 0.5em;
  --padding-x: 2.5em;
  --minus-border-radius: calc(0em - var(--border-radius));
  --height: calc(var(--line-height) + calc(var(--padding-y) * 2));
  --border-allowance: calc(var(--border-radius) * 0.75);
  --reduced-height: calc(var(--height) - var(--border-radius));
  --reduced-padding-x: calc(var(--padding-x) - var(--border-allowance));
}

.tab {
  display: inline-block;
  list-style-type: none;
  line-height: var(--line-height);
  padding: var(--padding-y) var(--padding-x);
  /* Tab height */
  height: var(--height);
  /* Inactive items show only bottom border. Use negative margins to make ends overlap. */
  border: 1px solid transparent;
  border-bottom-color: #3D5CFA;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  margin: 0 -1px;
  cursor: pointer;
}

.tab:first-child {
  margin-left: var(--border-allowance);
  padding-left: var(--reduced-padding-x);
}

.tab:last-child {
  margin-right: var(--border-allowance);
  padding-right: var(--reduced-padding-x);
}

.tab-active {
  /* Hide bottom border. Show other borders.*/
  border-top-color: #3D5CFA;
  border-left-color: #3D5CFA;
  border-right-color: #3D5CFA;
  border-bottom-style: none;
  /*Reduce height of element so that bottom end of the side borders don't show behind pseudo elements. Tab height - border-radius */
  height: var(--reduced-height);
  /*Add margin to show radius of pseudo elements. */
  margin: 0 var(--border-allowance);
  padding: var(--padding-y) var(--reduced-padding-x);
  position: relative;
}

.tab::before,
.tab::after {
  content: "";
  position: absolute;
  border: 1px none #3D5CFA;
  /* Needed so that edges align without using calc */
  box-sizing: content-box;
  /*Allow for the border-radius of parent element. 0.7071 * border-radius*/
  top: var(--border-allowance);
  /*Make use of the space removed from parent height ie border-radius*/
  bottom: var(--minus-border-radius);
}

.tab-active::before {
  border-right-style: solid;
  border-bottom-style: solid;
  border-bottom-right-radius: var(--border-radius);
  /* Allow curve to be fully formed */
  left: var(--minus-border-radius);
  right: 100%;
}

.tab-active::after {
  border-left-style: solid;
  border-bottom-style: solid;
  border-bottom-left-radius: var(--border-radius);
  right: var(--minus-border-radius);
  left: 100%;
}

.tab-active:first-child::before,
.tab-active:last-child::after {
  border-radius: 0;
  border-bottom: none;
}
</style>
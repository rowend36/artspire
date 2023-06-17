<script setup>
import { computed, unref } from "vue";
import ProjectFolder from "./ProjectFolder.vue";
import ProjectImage from "./ProjectImage.vue";
import { useProjectsAPI } from "../../../logic/api";
import useBreakpoints from "../../../utils/useBreakpoints";
import masonry from "../../../utils/masonry";
const props = defineProps({
  tab: String
})
const projects = useProjectsAPI();
const list = computed(() => projects.value?.filter?.(e => e.types.includes(unref(props.tab))));

/**@typedef {import("../../../logic/api").ProjectType} ProjectType*/
const type = computed(() => {
  /** @type {ProjectType} */
  const tab = props.tab;
  switch (tab) {
    case "Art & Illustration":
    case "Brand":
      return "freeflow"
    default:
      return "flex"
  }
})
const bp = useBreakpoints().stop;
const cols = computed(() => {
  return masonry(list.value.map((e, i) => ({
    cols: i + 1,
    height: 50,
    item: e
  }), 5));
})
</script>
<template>
  <Transition name="down-up" mode="out-in">
    <div :key="tab" :class="['items', type === 'flex' ? 'flex-items' : 'freeflow-items']">
      <template v-if="type === 'flex'">
        <ProjectFolder :item="item" :key="item.title" v-for="item of list" class="project-item" />
      </template>
      <template v-else>
        <div :key="i" v-for="i in cols">
          <ProjectImage :info="cell" class="freeflow-item" :key="cell.item.title" v-for="cell of cols[i]" />
        </div>
      </template>

      <span class="project-item stub"></span>
      <span class="project-item stub"></span>
      <span class="project-item stub"></span>
      <span class="project-item stub"></span>
    </div>
  </Transition>
</template>
<style scoped>
.freeflow-items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.stub {
  margin-top: 0;
  margin-bottom: 0;
}

.flex-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 2rem;
}
</style>
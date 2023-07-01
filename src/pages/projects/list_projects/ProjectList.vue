<script setup>
import { computed, ref, unref } from "vue";
import ProjectFolder from "./ProjectFolder.vue";
import ProjectImage from "./ProjectImage.vue";
import { useProjectsAPI } from "../../../logic/api";
import useBreakpoints from "../../../utils/useBreakpoints";
import masonry from "../../../utils/masonry";
import useLogger from "../../../utils/useLogger";
const props = defineProps({
  tab: String
})
const projects = useProjectsAPI();
const list = computed(() => projects.value?.filter?.(e => !e.types || e.types.includes(unref(props.tab))));
const parseSize = url => (/-(\d+)x(\d+)-/.exec(url) || []).slice(1).map(parseFloat)
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
const numColumns = computed(() => ({ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }[bp.value]))
const grid = ref(null);

const cellWidth = computed(() => grid.value && numColumns.value ? grid.value.clientWidth / numColumns.value : null);
const cols = computed(() => {
  try {
    console.time("masonry")
    return type.value === 'freeflow' && list.value && masonry(list.value.map((e) => {
      const [width = 200, height = 200] = parseSize(e.previewImage);
      const ratio = (height / width || (Math.random() < 0.333 ? 0.65 : Math.random() > 0.5 ? 1 : 1.5))
      const cols = ratio < 0.67 ? 2 : 1;
      return /** @type {import("../../../utils/masonry").SizeInfo} */({
        cols,
        height: ratio * cols,
        sizeWeight: 0,
        item: e,
        minHeight: 1
      })
    }), numColumns.value, 15);
  } finally {
    console.timeEnd("masonry")
  }
})

useLogger(cols);
useLogger(type, "type");
useLogger(projects, "projects");
useLogger(list, "list");
</script>
<template>
  <Transition name="left-right">
    <div :key="tab" ref="grid" :class="['items', type === 'flex' ? 'flex-items' : 'freeflow-items']">
      <template v-if="type === 'flex'">
        <ProjectFolder :item="item" :key="item.title" v-for="item of list" class="project-item" />
      </template>
      <template v-else-if="cellWidth">
        <div :key="i" v-for="(col, i) in cols" :style="{ flexGrow: 1, width: 0 }">
          <ProjectImage :info="cell" class="freeflow-item" :key="cell.i" v-for="cell of col"
            :style="{ width: (cell.cols * 100) + '%', height: cellWidth * cell.height + 'px', visibility: cell.col === i ? 'visible' : 'hidden' }" />
        </div>
      </template>
      <template v-if="type === 'flex'">
        <span class="project-item stub"></span>
        <span class="project-item stub"></span>
        <span class="project-item stub"></span>
        <span class="project-item stub"></span>
      </template>
    </div>
  </Transition>
</template>
<style scoped>
.freeflow-items {
  display: flex;
  width: 100%;
}

.stub {
  margin-top: 0;
  margin-bottom: 0;
}

.items {
  margin-bottom: 30vh;
}

.flex-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: auto;
  gap: 2rem;
}
</style>
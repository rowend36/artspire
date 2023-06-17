<script setup>
import { computed } from "vue"
const props = defineProps({
  info: {
    type: Object,
    required: true
  }
})
const item = computed(() => props.info.item);
</script>

<template>
  <img :src="item.image" :class="item.shape" />
</template>
<style scoped>
.square {
  display: block;
  width: calc(33% - 1em);
  margin: 0.5em;
  height: auto;
  aspect-ratio: 1;
}

.vert {
  display: block;
  width: calc(33% - 1em);
  margin: 0.5em;
  aspect-ratio: 0.5;
  height: auto;
}

.horiz {
  display: block;
  width: calc(66% - 1em);
  margin: 0.5em;
  aspect-ratio: 2;
  height: auto;
}
</style>
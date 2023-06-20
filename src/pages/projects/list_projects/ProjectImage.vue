<script setup>
import { computed } from "vue"
const props = defineProps({
  info: {
    required: true
  }
})
const item = computed(() => props.info.item);
</script>

<template>
  <div :data-index="info.i + ':' + info.preserveAspect">
    <sanity-img :src="item.previewImage" class="block hover-zoom p-1 img" />
  </div>
</template>
<style scoped>
div {
  position: relative;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 25%;
}

/* div::after {
  content: attr(data-index);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 100;
} */
</style>
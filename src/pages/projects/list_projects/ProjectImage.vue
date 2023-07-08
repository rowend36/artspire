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
  <div :data-index="info.i + ':' + info.preserveAspect" class="p-1">
    <sanity-img :src="item.previewImage" class="block hover-outline img" />
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

.hover-outline {
  border: 2px solid transparent;
}

.hover-outline:hover {
  border-color: var(--primary-light);
}
</style>
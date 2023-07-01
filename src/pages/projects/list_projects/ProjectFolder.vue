<script setup>
import FolderIcon from './FolderIcon.vue';
defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <div class="cursor-pointer hover-zoom touch-ripple mw-80" @click="$router.push('/projects/' + item.id)">
    <FolderIcon class="folder-icon" :image="item.previewImage"
      :is-mobile-app="!item.types || item.types.includes('Mobile App')" />
    <p class="font-lg grotesk">{{ item.title }}</p>
  </div>
</template>
<style scoped>
.mw-80 {
  max-width: 65vw;
  margin: auto;
}

.folder-icon {
  width: 100%;
  height: auto;
}
</style>
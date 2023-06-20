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
  <div class="cursor-pointer hover-zoom touch-ripple" @click="$router.push('/projects/' + item.id)">
    <FolderIcon class="folder-icon" :image="item.previewImage" />
    <p class="font-lg grotesk">{{ item.title }}</p>
  </div>
</template>
<style scoped>
.folder-icon {
  width: 100%;
  height: auto;
}
</style>
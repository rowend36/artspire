<script setup>
defineProps({
  size: {
    default: 1,
    type: Number
  },
  min: {
    default: 0,
    type: Number
  }
})
</script>
<template>
  <div :style="{ flexGrow: size, minHeight: min + 'rem' }"></div>
</template>
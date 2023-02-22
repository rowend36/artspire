<script setup>
defineProps({
  variant: {
    default: "elevated",
    type: String,
  },
})

</script>

<template>
  <button :class="['themed-btn', `btn-${variant}`]">
    <slot></slot>
  </button>
</template>
<style scoped>
.themed-btn {
  border: none;
  font-family: inherit;
  /* identical to box height */
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.btn-elevated {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  background: #3D5CFA;
  color: white;
}

.btn-flat {
  background: none;
  font-weight: 500;
  font-size: 1rem;
  line-height: 173.4%;
  /* identical to box height, or 50px */


  /* Deep Color */

  color: #162574;
}
</style>
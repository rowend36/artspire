<script setup>
defineProps({
  variant: {
    default: "elevated",
    type: String,
  },
})

</script>

<template>
  <button :class="['themed-btn', variant === 'elevated' ? 'grotesk' : '', `btn-${variant}`]">
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
  font-size: var(--font-md);
  background: #3D5CFA;
  color: white;
}

.btn-icon,
.btn-flat {
  background: none;
  font-weight: 500;
  font-size: var(--font-md);
  line-height: 173.4%;

  /* Deep Color */

  color: var(--primary);
}

.btn-icon {
  padding: 0.75em;
  line-height: 100%;
}
</style>
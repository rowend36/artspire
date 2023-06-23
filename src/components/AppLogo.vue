<script setup>
import {
  RouterLink
} from "vue-router";
</script>

<template>
  <RouterLink class="app-logo grotesk" to="/">Artspire_Jay<span class="dot"></span></RouterLink>
</template>

<style scoped>
.app-logo {
  font-style: normal;
  white-space: nowrap;
  font-weight: 700;
  font-size: var(--font-xl);
  line-height: 2;
  text-decoration: none;

  /* Deep Color */

  color: var(--primary);
}



.dot {
  display: inline-block;
  background: var(--primary-light);
  width: 0.25em;
  height: 0.25em;
  margin: 0 0.1em;
  border-radius: 50%;
}
</style>

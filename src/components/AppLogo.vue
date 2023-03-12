<script setup>
import {
    RouterLink
  } from "vue-router";
</script>

<template>
  <RouterLink class="app-logo" to="/">Artspire_Jay<span class="dot"></span></RouterLink>
</template>

<style scoped>
.app-logo {
  font-family: 'Space Grotesk';
  font-style: normal;
  white-space: nowrap;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 51px;
  text-decoration: none;

  /* Deep Color */

  color: #162574;
}

@media (max-width:599px){
  .app-logo{
    font-size: 1.2rem;
  }
}


.dot {
  display: inline-block;
  background: #3D5CFA;
  width: 0.25em;
  height: 0.25em;
  margin: 0 0.1em;
  border-radius: 50%;
}
</style>

<template>
  <span class="app-logo">
    <slot></slot>

    <span class="dot"></span>
  </span>
</template>

<style scoped>
.app-logo {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 51px;

  /* Deep Color */

  color: #162574;
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
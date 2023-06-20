<script setup>
import { ref } from 'vue';
import useInterval from '../../utils/useInterval';

const count = ref(0);
useInterval(() => count.value = (count.value + 1) % 6, 1000)

</script>
<template>
  <div class="fullpage flex items-center justify-center">
    <h1 class='font-huge'>Coming Soon<span :key="i" v-for="i in 3"
        :class="{ 'opacity-0': i > Math.abs(3 - count) }">.</span>
    </h1>
  </div>
</template>
<style scoped>
.font-huge {
  position: relative;
  top: -2rem
}
</style>
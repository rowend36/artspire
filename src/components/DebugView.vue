<script setup>
import useBreakpoints from '../utils/useBreakpoints';
import { useWindowWidth } from '../utils/useBreakpoints';

const width = useWindowWidth();
const { stop } = useBreakpoints();
const isDev = import.meta.env.DEV;
</script>

<template>
  <div v-if="isDev"
    :style="{ top: '10px', left: '10px', padding: '10px', borderRadius: '10px', opacity: 0.5, color: 'white', background: 'black', position: 'fixed' }">
    {{ width }}
    <br />
    {{ stop }}
  </div>
</template>
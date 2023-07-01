<script setup>
import useBreakpoints from '../utils/useBreakpoints';
import { useWindowWidth } from '../utils/useBreakpoints';

const width = useWindowWidth();
const { stop } = useBreakpoints();
const isDev = import.meta.env.DEV;
</script>

<template>
  <div v-if="isDev" :style="{
    top: '10px', right: '10px', touchAction: 'none', padding: '10px', borderRadius: '10px',
    opacity: 0.5, color: 'white', background: 'black', position: 'fixed', zIndex: 20
  }">
    {{ width }}
    <br />
    {{ stop }}
  </div>
</template>
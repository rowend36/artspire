<script>
import imageUrlBuilder from '@sanity/image-url'
import { useWindowWidth } from '../utils/useBreakpoints';

const builder = imageUrlBuilder({
  baseUrl: 'https://cdn.sanity.io',
  projectId: '9abgiydw',
  dataset: 'production',
})
export const urlFor = (source) => builder.image(source)
const SIZES = [360, 480, 720, 1024, 2048]
const clampUp = (e) => {
  return SIZES.find(bp => bp > e) || 2048
}
</script>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: String
})
const windowWidth = useWindowWidth();
const srcset = computed(() => props.src &&
  [urlFor(props.src)
    .auto('format')
    .fit('min')
    .width(clampUp(windowWidth.value))
    .toString(),
  // 1.5x
  urlFor(props.src)
    .auto('format')
    .fit('min')
    .width(clampUp(Math.floor(windowWidth.value * 1.5)))
    .toString(),
  // 2x
  urlFor(props.src)
    .auto('format')
    .fit('min')
    .width(clampUp(Math.floor(windowWidth.value * 2)))
    .toString()
  ]);
</script>
<template>
  <img v-if="srcset" :srcset="`${srcset[0]}, ${srcset[1]} 1.5x, ${srcset[2]} 2x`" :src="srcset[1]" />
  <div v-else>
    <div class="loading flex justify-center items-center w-full h-full"></div>
  </div>
</template>
<style scoped>
.loading {
  background-image: linear-gradient(75deg, #dfdfdf, #dfdfdf, #f5f5f5, #dfdfdf, #dfdfdf);
  background-size: 300% 100%;
  background-repeat: repeat;
  animation: 3s ripple infinite ease-out;
  border: none;
}

/* img,
.loading {
  border-radius: 0.5rem;
} */

@keyframes ripple {
  from {
    background-position-x: 0%;
  }

  to {
    background-position-x: 100%;
  }
}
</style>
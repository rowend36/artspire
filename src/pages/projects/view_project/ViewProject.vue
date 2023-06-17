<script setup>
import { useRoute } from 'vue-router';
import { useProjectInfoAPI } from '../../../logic/api';
import back from "./back.png";
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
const route = useRoute();
const id = route.params.id;
const info = useProjectInfoAPI(id);
</script>
<template>
  <!-- Outer div needed for transitions -->
  <div :key="id">
    <div class="flex items-center my-4">
      <span class="inline-block relative" @click="$router.back">
        <img :src="back" class="w-12 block" />
        <ArrowLeft class="absolute inset-0 flex items-center justify-center" />
      </span>
      <h3 className="font-xl grotesk ml-4">{{ info?.title }}</h3>
    </div>
    <template v-if="info">
      <img :src="section.image" class="w-full block" :key="section.image" v-for="section of info.sections" />
      <img :src="info.footer" class="w-banner block" />
    </template>
  </div>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import DebugView from './components/DebugView.vue'
</script>

<template>
  <AppHeader />
  <main>
    <DebugView />
    <RouterView />
  </main>
  <AppFooter />
</template>
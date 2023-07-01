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
    <router-view v-slot="{ Component }">
      <transition name="down-up" mode="out-in">
        <div :key="$route.path">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </main>
  <AppFooter />
</template>
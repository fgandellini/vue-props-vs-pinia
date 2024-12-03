<template>
  <div class="toolbar">
    <button @click="toggleApp(null)">None</button>
    <button @click="toggleApp('props')">Props</button>
    <button @click="toggleApp('pinia')">Pinia</button>
  </div>
  <div class="test-app">
    <AppWithProps v-if="app === 'props'" />
    <AppWithPinia v-if="app === 'pinia'" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppWithProps from './components/AppWithProps.vue'
import AppWithPinia from './components/AppWithPinia.vue'

const app = ref<'props' | 'pinia' | null>(null)
const toggleApp = (newApp: 'props' | 'pinia' | null) => {
  app.value = newApp
}
</script>

<style scoped>
.toolbar {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  background-color: #eee;
  justify-content: center;
}

.test-app {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

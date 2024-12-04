<template>
  <div class="toolbar">
    <label>
      Number of dropdowns
      <input type="number" v-model="numberOfDropdowns" />
    </label>
    <label>
      Users per dropdown
      <input type="number" v-model="usersPerDropdown" />
    </label>
    <button @click="toggleApp('props')">Props</button>
    <button @click="toggleApp('pinia')">Pinia</button>
  </div>
  <div class="test-app">
    <AppWithProps
      v-if="app === 'props'"
      :users="users"
      :number-of-dropdowns="numberOfDropdowns"
      :users-per-dropdown="usersPerDropdown"
    />
    <AppWithPinia
      v-if="app === 'pinia'"
      :users="users"
      :number-of-dropdowns="numberOfDropdowns"
      :users-per-dropdown="usersPerDropdown"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppWithProps from './components/AppWithProps.vue'
import AppWithPinia from './components/AppWithPinia.vue'
import { createRandomUser } from './schema'

const app = ref<'props' | 'pinia' | null>(null)

const numberOfDropdowns = ref(1)
const usersPerDropdown = ref(10)

const users = Array.from({ length: 100_000 }, (_, i) => createRandomUser(i))

const toggleApp = (newApp: 'props' | 'pinia' | null) => {
  app.value = newApp
}
</script>

<style scoped>
.toolbar {
  color: #333;
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

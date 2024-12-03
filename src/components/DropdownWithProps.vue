<template>
  <div>
    <button @click="toggle">Toggle Dropdown</button>
    <div v-if="isOpen">
      <div v-for="user in users" :key="user.id">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DropdownWithProps',
}
</script>

<script setup lang="ts">
import type { User } from '@/schema'
import { ref } from 'vue'

defineProps<{ users: User[] }>()

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <button @click="toggle">Toggle Dropdown</button>
    <div v-if="isOpen">
      <div v-for="userId in userIds" :key="userId">
        {{ usersStore.users[userId].name }}
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
import { useUsersStore } from '@/stores/users'
import { ref } from 'vue'

defineProps<{ userIds: number[] }>()

const usersStore = useUsersStore()

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

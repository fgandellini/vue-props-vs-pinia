<template>
  <DropdownWithPinia v-for="dropdown in dropdowns" :key="dropdown.id" :userIds="dropdown.userIds" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropdownWithPinia from './DropdownWithPinia.vue'
import { allUserIds } from '@/components/test-data'

const props = defineProps<{
  numberOfDropdowns: number
  usersPerDropdown: number
}>()

const createRandomDropdowns = (quantity: number) =>
  Array.from({ length: quantity }, (_, i) => ({
    id: i,
    userIds: allUserIds.slice(0, props.usersPerDropdown)
  }))

type Dropdown = {
  id: number
  userIds: number[]
}

const dropdowns = ref<Dropdown[]>(createRandomDropdowns(props.numberOfDropdowns))
</script>

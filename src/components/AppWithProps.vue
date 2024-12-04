<template>
  <DropdownWithProps v-for="dropdown in dropdowns" :key="dropdown.id" :users="dropdown.users" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropdownWithProps from './DropdownWithProps.vue'
import type { User } from '@/schema'
import { allUsers } from '@/components/test-data';

const props = defineProps<{
  numberOfDropdowns: number
  usersPerDropdown: number
}>()

const createRandomDropdowns = (quantity: number) => {
  return Array.from({ length: quantity }, (_, i) => ({
    id: i,
    users: allUsers.slice(0, props.usersPerDropdown),
  }))
}

type Dropdown = {
  users: User[]
  id: number
}

const dropdowns = ref<Dropdown[]>(createRandomDropdowns(props.numberOfDropdowns))
</script>

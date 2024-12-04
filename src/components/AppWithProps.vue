<template>
  <DropdownWithProps v-for="dropdown in dropdowns" :key="dropdown.id" :users="dropdown.users" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropdownWithProps from './DropdownWithProps.vue'
import { uniqueRandomIdsInRange } from '@/utils'
import type { User } from '@/schema'

const props = defineProps<{
  users: User[]
  numberOfDropdowns: number
  usersPerDropdown: number
}>()

const pickRandomUsers = (quantity: number) => {
  const ids = uniqueRandomIdsInRange(quantity, [0, props.users.length])
  return Array.from(ids).map((id) => props.users[id])
}

const createRandomDropdowns = (quantity: number) =>
  Array.from({ length: quantity }, (_, i) => ({
    id: i,
    users: pickRandomUsers(props.usersPerDropdown),
  }))

type Dropdown = {
  users: User[]
  id: number
}

const dropdowns = ref<Dropdown[]>(createRandomDropdowns(props.numberOfDropdowns))
</script>

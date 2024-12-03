<template>
  <DropdownWithProps v-for="dropdown in dropdowns" :key="dropdown.id" :users="dropdown.users" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropdownWithProps from './DropdownWithProps.vue'
import { createRandomUser, type User } from '@/schema'
import { uniqueRandomIdsInRange } from '@/utils'

const users = Array.from({ length: 100_000 }, (_, i) => createRandomUser(i))

const pickRandomUsers = (quantity: number) => {
  const ids = uniqueRandomIdsInRange(quantity, [0, users.length])
  return Array.from(ids).map((id) => users[id])
}

const createRandomDropdowns = (quantity: number) =>
  Array.from({ length: quantity }, (_, i) => ({
    id: i,
    users: pickRandomUsers(10_000),
  }))

type Dropdown = {
  users: User[]
  id: number
}

const dropdowns = ref<Dropdown[]>(createRandomDropdowns(10_000))
</script>

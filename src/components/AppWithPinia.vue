<template>
  <DropdownWithPinia v-for="dropdown in dropdowns" :key="dropdown.id" :userIds="dropdown.userIds" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropdownWithPinia from './DropdownWithPinia.vue'
import { createRandomUser, type User } from '@/schema'
import { uniqueRandomIdsInRange } from '@/utils'
import { useUsersStore } from '@/stores/users'

const users = Array.from({ length: 100_000 }, (_, i) => createRandomUser(i))

const usersStore = useUsersStore()
usersStore.loadUsers(users)

const pickRandomUserIds = (quantity: number) => {
  const ids = uniqueRandomIdsInRange(quantity, [0, users.length])
  return Array.from(ids)
}

const createRandomDropdowns = (quantity: number) =>
  Array.from({ length: quantity }, (_, i) => ({
    id: i,
    userIds: pickRandomUserIds(10_000),
  }))

type Dropdown = {
  id: number
  userIds: number[]
}

const dropdowns = ref<Dropdown[]>(createRandomDropdowns(10_000))
</script>

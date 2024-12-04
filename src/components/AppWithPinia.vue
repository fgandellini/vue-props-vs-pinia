<template>
  <DropdownWithPinia v-for="dropdown in dropdowns" :key="dropdown.id" :userIds="dropdown.userIds" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropdownWithPinia from './DropdownWithPinia.vue'
import { uniqueRandomIdsInRange } from '@/utils'
import { useUsersStore } from '@/stores/users'
import type { User } from '@/schema'

const props = defineProps<{
  users: User[]
  numberOfDropdowns: number
  usersPerDropdown: number
}>()

const usersStore = useUsersStore()
usersStore.loadUsers(props.users)

const pickRandomUserIds = (quantity: number) => {
  const ids = uniqueRandomIdsInRange(quantity, [0, props.users.length])
  return Array.from(ids)
}

const createRandomDropdowns = (quantity: number) =>
  Array.from({ length: quantity }, (_, i) => ({
    id: i,
    userIds: pickRandomUserIds(props.usersPerDropdown),
  }))

type Dropdown = {
  id: number
  userIds: number[]
}

const dropdowns = ref<Dropdown[]>(createRandomDropdowns(props.numberOfDropdowns))
</script>

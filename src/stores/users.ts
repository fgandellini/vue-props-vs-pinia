import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/schema'
import { allUsers } from '@/components/test-data'

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>(allUsers)

  return { users }
})

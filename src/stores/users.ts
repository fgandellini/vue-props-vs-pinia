import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/schema'

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>()

  const loadUsers = (newUsers: User[]) => {
    users.value = newUsers
  }

  return { users, loadUsers }
})

import { createRandomUser } from '@/schema'

export const allUsers = Array.from({ length: 50_000 }, (_, i) => createRandomUser(i))

export const allUserIds = allUsers.map(u => u.id)

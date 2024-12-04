import { faker } from '@faker-js/faker'

export type User = {
  id: number
  name: string
  email: string
  age: number
  isActive: boolean
  role: 'admin' | 'user' | 'guest'
  createdAt: Date
  updatedAt: Date
}

export const createRandomUser = (id: number): User => ({
  id,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  age: faker.number.int({ min: 18, max: 65 }),
  isActive: faker.datatype.boolean(),
  role: faker.helpers.arrayElement(['admin', 'user', 'guest']),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
})

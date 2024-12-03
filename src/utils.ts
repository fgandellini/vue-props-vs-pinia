export const uniqueRandomIdsInRange = (quantity: number, range: [number, number]): Set<number> => {
  const set = new Set<number>()
  while (set.size < quantity) {
    set.add(Math.floor(Math.random() * (range[1] - range[0])) + range[0])
  }
  return set
}

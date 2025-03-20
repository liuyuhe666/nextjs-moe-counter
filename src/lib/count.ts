import redis from './redis'

export default async function getCountByName(name: string) {
  await redis.incr(name)
  return (await redis.get(name)) as number
}

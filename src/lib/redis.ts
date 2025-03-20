import { Redis } from '@upstash/redis'

const redis = new Redis({
  // eslint-disable-next-line node/prefer-global/process
  url: `${process.env.UPSTASH_REDIS_REST_URL}`,
  // eslint-disable-next-line node/prefer-global/process
  token: `${process.env.UPSTASH_REDIS_REST_TOKEN}`,
  retry: {
    retries: 5,
    backoff: (retryCount) => {
      return Math.exp(retryCount) * 50
    },
  },
})

export default redis

import { RedisOptions } from 'ioredis'

interface ICacheConfig {
	config: {
		redis: RedisOptions,
		driver: string
	}
}

export const redisConfig: ICacheConfig = {
	config: {
		redis: {
			host: process.env.redis_host,
			port: Number(process.env.REDIS_PORT),
			password: process.env.REDIS_PASS || undefined
		},
		driver: 'redis'
	}
}

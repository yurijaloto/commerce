import Redis, {Redis as RedisClient} from 'ioredis'
import { redisConfig } from '@config/redis/cache'

export class RedisCache {
	private client: RedisClient

	constructor() {
		this.client = new Redis(redisConfig.config.redis)
	}
}
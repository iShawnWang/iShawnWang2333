import { withSizeLimt } from './strategy/sizeLimit'
import { MemoryStorageInstance } from './memoryStorage'
export const LRUMemoryStorage = withSizeLimt(MemoryStorageInstance, {
  limit: 20,
})

// todo 过期时间

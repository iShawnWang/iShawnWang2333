import { withSizeLimt } from './strategy/sizeLimit'
import { MemoryStorage as _MemoryStorage } from './memoryStorage'
export const LRUMemoryStorage = withSizeLimt(_MemoryStorage, { limit: 20 })

// todo 过期时间

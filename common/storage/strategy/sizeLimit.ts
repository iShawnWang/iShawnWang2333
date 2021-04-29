import { IStorage } from '../types'

export const withSizeLimt = (storage: IStorage, option: { limit: number }) => {
  return new Proxy(storage, {
    get(target, key) {
      if (key === 'setItem') {
        const wrappedSetItem: IStorage['setItem'] = (
          key: string,
          value: string
        ) => {
          if (target.length > option.limit) {
            // LRU, purge half cache
            const _s = target.getStore()
            for (let index = 0; index < option.limit / 2; index++) {
              target.removeItem(Object.keys(_s)[0])
            }
          }
          return target.setItem(key, value)
        }
        return wrappedSetItem
      }
      return target[key as string]
    },
  })
}

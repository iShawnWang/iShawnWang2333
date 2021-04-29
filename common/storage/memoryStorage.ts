import { IStorage, IStore } from './types'

export class MemoryStorage implements IStorage {
  private _s: IStore = {}

  get length(): number {
    return Object.keys(this._s).length
  }

  getItem = (key: string) => {
    if (typeof key !== 'string') {
      throw `Invalid Key Type : ${key}-${typeof key}`
    }
    return this._s[key]
  }

  setItem = (key: string, value: any) => {
    if (typeof key !== 'string') {
      throw `Invalid Key Type : ${key}-${typeof key}`
    }
    this._s[key] = value
  }

  key = (index: number) => {
    const keys = Object.keys(this._s)
    if (index < keys.length) {
      return keys[index]
    }
    return null
  }

  removeItem = (key: string) => {
    if (typeof key !== 'string') {
      throw `Invalid Key Type : ${key}-${typeof key}`
    }
    delete this._s[key]
  }

  clear = () => {
    Object.keys(this._s).forEach((k) => {
      delete this._s[k]
    })
  }

  getStore = () => {
    return this._s
  }
}

export const MemoryStorageInstance = new MemoryStorage()

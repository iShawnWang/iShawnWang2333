export interface IStore {
  [key: string]: any
}

export interface IStorage extends Storage {
  getStore: () => IStore
}

export interface IStrategy {}

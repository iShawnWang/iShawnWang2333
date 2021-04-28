export interface _Store {
  [key: string]: any
}

export interface IMyStorage extends Storage {
  getStore: () => _Store
}

export interface IStrategy {}

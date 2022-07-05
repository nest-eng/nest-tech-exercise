import { PaletteMode } from '@mui/material'
import localforage from 'localforage'

type SettingsState = {
  themeMode: PaletteMode
  test: string
}
export default class SettingsStore {
  static store = localforage.createInstance({
    name: 'settings',
  })

  static get(key: keyof SettingsState) {
    SettingsStore.log('get', key)
    return this.store.getItem(key)
  }

  static set(key: keyof SettingsState, value) {
    SettingsStore.log('set', key, value)
    return this.store.setItem(key, value)
  }

  static reset() {
    SettingsStore.log('reset')
    return this.store.clear()
  }

  static log(message, ...rest) {
    console.log(
      '%cSettingsStore',
      'border-radius:4px; padding:0 4px; color:white; background-color:#2480ec;',
      message,
      ...rest,
    )
  }
}

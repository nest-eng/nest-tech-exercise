import { noop } from 'lodash'
import React from 'react'
import { PaletteMode } from '@mui/material'

export const PageContext = React.createContext({
  setThemeMode: noop,
  themeMode: 'light' as PaletteMode,
})

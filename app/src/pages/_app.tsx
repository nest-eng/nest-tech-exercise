import React, { useEffect, useMemo, useState } from 'react'
import { AppProps } from 'next/app'
import AppBase from 'components/AppBase'
import CssBaseline from '@mui/material/CssBaseline'
import { PaletteMode, ThemeProvider } from '@mui/material'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import {
  getPreferredThemeMode,
  getTheme,
} from 'components/MainMuiTheme'
import SettingsStore from 'stores/SettingsStore'

export default function App({ Component, pageProps }: AppProps) {
  const [appReady, setAppReady] = useState(false)
  const [themeMode, setThemeMode] = useState<PaletteMode>('light')
  const theme = useMemo(() => {
    return getTheme(themeMode)
  }, [themeMode])

  // Load initial data from stores.
  useEffect(() => {
    let mounted = true
    Promise.all([
      SettingsStore.get('themeMode').then(
        (themeMode: PaletteMode) => {
          if (mounted) {
            setThemeMode(themeMode ?? getPreferredThemeMode())
          }
        },
      ),
    ]).then(() => {
      if (mounted) {
        setAppReady(true)
      }
    })
    return () => {
      mounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!appReady) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Head>
        <title>Sample App</title>
      </Head>
      <RecoilRoot>
        <AppBase themeMode={themeMode} setThemeMode={setThemeMode}>
          <Component {...pageProps} />
        </AppBase>
      </RecoilRoot>
    </ThemeProvider>
  )
}

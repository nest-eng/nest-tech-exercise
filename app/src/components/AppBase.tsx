import React, { ReactNode, useMemo } from 'react'
import MainNavBar from 'components/MainAppBar'
import { PageContext } from 'components/PageContext'
import { Box, PaletteMode } from '@mui/material'
import { MainApolloProvider } from 'components/ApolloClient'
import AppSnackbar from 'components/AppSnackbar'

type AppBaseProps = {
  themeMode: PaletteMode
  setThemeMode: (mode: PaletteMode) => void
  children: ReactNode
}

export default function AppBase(props: AppBaseProps) {
  const { themeMode, setThemeMode } = props
  const pageContextValue = useMemo(
    () => ({
      setThemeMode,
      themeMode,
    }),
    [setThemeMode, themeMode],
  )

  return (
    <MainApolloProvider>
      <PageContext.Provider value={pageContextValue}>
        <MainNavBar />
        <Box
          id="main"
          component="main"
          sx={[
            {
              display: 'flex',
              flexGrow: 1,
              mx: 'auto',
              position: 'relative',
              width: 1,
            },
          ]}
        >
          {props.children}
        </Box>
        <AppSnackbar />
      </PageContext.Provider>
    </MainApolloProvider>
  )
}

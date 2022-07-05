import { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const primaryColor = 'hsl(154deg, 100%, 28%)'
const secondaryColor = 'hsl(85deg, 94%, 36%)'

export function getTheme(mode: PaletteMode) {
  const theme = createTheme({
    components: {
      MuiInputLabel: {
        defaultProps: {
          shrink: true,
        },
      },
    },
    palette: {
      mode,
      primary: { main: primaryColor },
      secondary: { contrastText: '#fff', main: secondaryColor },
    },
    typography: {
      fontFamily: [
        'Inter',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeightBold: 600,
    },
  })
  return theme
}

export function getPreferredThemeMode() {
  return window?.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

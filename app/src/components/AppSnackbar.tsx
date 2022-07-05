import React, { useCallback } from 'react'
import { Alert, Snackbar } from '@mui/material'
import { atom, useRecoilState } from 'recoil'

type Severity = 'error' | 'info' | 'success' | 'warning' | null
export type AppSnackbarState = {
  message?: string
  open?: boolean
  severity?: Severity
}

export const appSnackbarState = atom<AppSnackbarState>({
  default: {
    message: '',
    open: false,
    severity: undefined,
  },
  key: 'appSnackbar',
})

export function useAppSnackbar() {
  const [appSnackbar, setAppSnackbar] =
    useRecoilState(appSnackbarState)
  const show = useCallback(
    (state: AppSnackbarState) => {
      setAppSnackbar({
        message: state?.message ?? '',
        open: state?.open ?? true,
        severity: state?.severity ?? undefined,
      })
    },
    [setAppSnackbar],
  )

  return {
    message: appSnackbar.message,
    open: appSnackbar.open,
    severity: appSnackbar.severity,
    show,
  }
}

export default function AppSnackbar() {
  const { open, show, severity, message } = useAppSnackbar()
  const handleClose = () => show({ message, open: false, severity })

  return (
    <Snackbar
      data-testid="app-snackbar"
      open={open}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      autoHideDuration={8000}
      onClose={handleClose}
    >
      <Alert
        severity={severity}
        onClose={handleClose}
        sx={{ boxShadow: 1 }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

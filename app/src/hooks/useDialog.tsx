import React, { useMemo, useState } from 'react'
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from '@mui/material'

export type DialogProps = Omit<MuiDialogProps, 'open'>

export default function useDialog() {
  const [open, setOpen] = useState(false)
  const Dialog = useMemo(
    () =>
      function Dialog(props: DialogProps) {
        return (
          <MuiDialog
            {...props}
            open={open}
            onClose={(event, reason) => {
              setOpen(false)
              props.onClose?.(event, reason)
            }}
          />
        )
      },
    [open],
  )

  return { Dialog, open, setOpen }
}

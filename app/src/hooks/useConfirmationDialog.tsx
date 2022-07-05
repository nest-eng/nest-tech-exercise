import React, { useMemo, useState } from 'react'
import ConfirmationDialog, {
  ConfirmationDialogProps,
} from 'components/ConfirmationDialog'

type DialogProps = Omit<
  ConfirmationDialogProps,
  'open' | 'onClose'
> & {
  onClose?: () => void
}

export default function useConfirmationDialog() {
  const [open, setOpen] = useState(false)
  const Dialog = useMemo(
    () =>
      function Dialog(props: DialogProps) {
        return (
          <ConfirmationDialog
            {...props}
            open={open}
            onClose={() => {
              setOpen(false)
              props.onClose?.()
            }}
          />
        )
      },
    [open],
  )

  return { Dialog, open, setOpen }
}

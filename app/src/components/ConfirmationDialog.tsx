import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Divider,
} from '@mui/material'
import { omit } from 'lodash'
import React from 'react'

export type ConfirmationDialogProps = DialogProps & {
  title?: string
  cancelLabel?: string
  confirmLabel?: string
  message: string
  onConfirm?: () => void
  onCancel?: () => void
  onClose: () => void
}

export default function ConfirmationDialog(
  props: ConfirmationDialogProps,
) {
  const { cancelLabel, confirmLabel } = props
  return (
    <Dialog
      {...omit(props, [
        'onConfirm',
        'onCancel',
        'message',
        'cancelLabel',
        'confirmLabel',
      ])}
      maxWidth="xs"
      fullWidth
    >
      {props.title && <DialogTitle>{props.title}</DialogTitle>}
      <DialogContent>{props.message}</DialogContent>
      <Divider />
      <DialogActions>
        {cancelLabel && (
          <Button
            autoFocus
            onClick={() => {
              props.onCancel?.()
              props.onClose()
            }}
          >
            {cancelLabel}
          </Button>
        )}
        {confirmLabel && (
          <Button
            onClick={() => {
              props.onConfirm?.()
              props.onClose()
            }}
          >
            {confirmLabel}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

import { useCallback, useEffect, useState } from 'react'

type useModalProps = {
  open?: boolean
}

export function useModal(props?: useModalProps) {
  const [open, setOpen] = useState(props?.open)
  const handleOpen = useCallback(() => setOpen(true), [])
  const handleClose = useCallback(() => setOpen(false), [])

  useEffect(() => {
    setOpen(props?.open)
  }, [props?.open])

  return {
    handleClose,
    handleOpen,
    open,
    setOpen,
  }
}

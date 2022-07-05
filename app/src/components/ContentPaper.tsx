import React from 'react'
import { Paper, PaperProps } from '@mui/material'

export type ContentPaperProps = PaperProps<
  'div',
  Record<string, unknown>
>

export default function ContentPaper(props: ContentPaperProps) {
  return (
    <Paper
      {...props}
      variant={props.variant ?? 'outlined'}
      sx={{
        '& > .MuiDivider-root': {
          mx: -3,
        },
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        gap: 2,
        p: 3,
        ...props.sx,
      }}
    >
      {props.children}
    </Paper>
  )
}

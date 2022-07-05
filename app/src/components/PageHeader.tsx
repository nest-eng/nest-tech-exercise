import React, { ReactElement } from 'react'
import { Stack, SxProps, Typography } from '@mui/material'

type PageHeaderProps = {
  title: string
  subtitle?: string
  actions?: ReactElement
  sx?: SxProps
}

export default function PageHeader(
  props: PageHeaderProps,
): JSX.Element {
  return (
    <Stack
      direction="row"
      gap={4}
      sx={{
        ...props.sx,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
      <Stack>
        <Typography variant="h4">{props.title}</Typography>
        {props.subtitle && (
          <Typography variant="body2" color="secondary">
            {props.subtitle}
          </Typography>
        )}
      </Stack>
      <Stack direction="row" gap={1} sx={{ alignItems: 'center' }}>
        {props.actions}
      </Stack>
    </Stack>
  )
}

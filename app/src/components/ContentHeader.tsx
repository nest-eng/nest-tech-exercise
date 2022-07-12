import React, { ReactNode } from 'react'
import { Box, Divider, Stack, StackProps, alpha } from '@mui/material'

export default function ContentHeader(
  props: StackProps & { actions?: ReactNode },
) {
  return (
    <>
      <Stack
        sx={{
          backdropFilter: 'blur(5px)',
          bgcolor: ({ palette }) =>
            alpha(palette.background.paper, 0.85),
          mt: -4,
          mx: -4,
          position: 'sticky',
          px: 4,
          py: 3,
          top: 64,
          zIndex: 1,
        }}
      >
        <Stack
          direction="row"
          gap={1}
          sx={{
            alignItems: 'center',
            minHeight: 56,
            ...props.sx,
          }}
        >
          <Stack
            gap={0.25}
            sx={{
              // Flex solution to support truncated text.
              flex: 1,
              minWidth: 0,
            }}
          >
            {props.children}
          </Stack>
          <Box
            // Alternative gap styling.
            sx={{ '& > .MuiButton-root': { ml: 1 } }}
          >
            {props.actions}
          </Box>
        </Stack>
        <Divider sx={{ bottom: -24, position: 'relative' }} />
      </Stack>
    </>
  )
}

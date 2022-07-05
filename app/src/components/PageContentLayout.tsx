import React, { ReactNode } from 'react'
import { Box, BoxProps, Stack } from '@mui/material'

type PageContentLayoutProps = BoxProps & {
  SidebarContent?: ReactNode
}

export default function PageContentLayout(
  props: PageContentLayoutProps,
) {
  const { SidebarContent, ...rest } = props
  const { children, ...boxProps } = rest

  return (
    <Box
      {...boxProps}
      sx={{
        '& > *': {
          display: 'flex',
          flexGrow: 1,
        },
        '& > .MuiDivider-root': {
          mx: -4,
        },
        // bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        p: 4,
        ...props.sx,
      }}
    >
      <Stack direction="row" gap={6}>
        <Stack
          sx={{
            alignItems: 'center',
            flexGrow: 1,
            minHeight: 600,
          }}
        >
          <Stack gap={2} sx={{ flexGrow: 1, width: 1 }}>
            {children}
          </Stack>
        </Stack>
        {SidebarContent && (
          <>
            <Stack
              gap={1}
              sx={{
                '& > .MuiDivider-root': {
                  my: 2,
                },
                alignSelf: 'flex-start',
                flexBasis: '220px',
                flexShrink: 0,
                fontSize: '0.875em',
                position: 'sticky',
                top: ({ spacing }) => spacing(11),
              }}
            >
              {SidebarContent}
            </Stack>
          </>
        )}
      </Stack>
    </Box>
  )
}

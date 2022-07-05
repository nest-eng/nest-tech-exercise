import React, { useRef, useState } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Stack,
  SxProps,
  Theme,
  Toolbar,
  Typography,
} from '@mui/material'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import DropDownIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import RouterLink from 'components/RouterLink'
import SettingsDrawer from 'components/SettingsDrawer'
import { useRouter } from 'next/router'

export default function MainAppBar(): JSX.Element {
  const router = useRouter()
  const userButton = useRef<HTMLButtonElement>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false)
  const handleUserMenuClose = () => setUserMenuOpen(false)
  const getActiveSx = (rootPath: string): SxProps<Theme> => ({
    ...(router.pathname.match(`/${rootPath}`) && {
      boxShadow: ({ palette }) =>
        `0 -3px 0 ${palette.primary.main} inset`,
    }),
    px: 1.5,
    py: 2.5,
  })

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        bgcolor: 'background.default',
        boxShadow: ({ palette }) => `0 1px 0 ${palette.divider}`,
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          gap={4}
          sx={{ alignItems: 'center', flexGrow: 1 }}
        >
          <Button disableRipple>
            <Link href="/" passHref>
              <Box
                component="img"
                src="/assets/img/logo.png"
                alt="Nest Logo"
                sx={{
                  height: 40,
                  objectFit: 'contain',
                }}
              />
            </Link>
          </Button>
          <Stack direction="row" gap={3}>
            <RouterLink href="/patients" button disableRipple>
              <Typography
                variant="body1"
                sx={getActiveSx('patients')}
              >
                Patients
              </Typography>
            </RouterLink>
            <RouterLink href="/tests" button disableRipple>
              <Typography variant="body1" sx={getActiveSx('tests')}>
                Tests
              </Typography>
            </RouterLink>
            <RouterLink href="/orders" button disableRipple>
              <Typography variant="body1" sx={getActiveSx('orders')}>
                Orders
              </Typography>
            </RouterLink>
          </Stack>
        </Stack>
        <Stack direction="row" gap={1}>
          <Button
            ref={userButton}
            endIcon={<DropDownIcon />}
            color="inherit"
            onClick={() => setUserMenuOpen(true)}
            startIcon={
              <Avatar sx={{ height: 32, width: 32 }}>
                <PersonRoundedIcon />
              </Avatar>
            }
          />
          <Menu
            data-testid="account-menu"
            anchorEl={userButton.current}
            open={userMenuOpen}
            onClose={handleUserMenuClose}
            elevation={1}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'bottom',
            }}
            transformOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
          >
            <MenuItem onClick={handleUserMenuClose}>
              <Stack
                direction="row"
                sx={{
                  alignItems: 'center',
                  gap: 1,
                  minWidth: 160,
                  whiteSpace: 'normal',
                }}
              >
                <Avatar sx={{ height: 32, width: 32 }}>
                  <PersonRoundedIcon />
                </Avatar>
                <Stack>
                  <Typography variant="body1">Test User</Typography>
                  <Typography variant="caption">
                    Clover Health
                  </Typography>
                </Stack>
              </Stack>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                handleUserMenuClose()
                setSettingsDrawerOpen(true)
              }}
            >
              Preferences
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
      <SettingsDrawer
        open={settingsDrawerOpen}
        onClose={() => setSettingsDrawerOpen(false)}
      />
    </AppBar>
  )
}

import React, { useContext } from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import CloseIcon from '@mui/icons-material/CloseRounded'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import LightModeIcon from '@mui/icons-material/LightModeRounded'
import DarkModeIcon from '@mui/icons-material/DarkModeRounded'
import ListSubheader from '@mui/material/ListSubheader'
import { IconButton, Stack, Typography } from '@mui/material'
import { PageContext } from 'components/PageContext'
import SettingsStore from 'stores/SettingsStore'

type SettingsDrawerProps = {
  open?: boolean
  onClose: () => void
}

export default function SettingsDrawer(props: SettingsDrawerProps) {
  const { themeMode, setThemeMode } = useContext(PageContext)
  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          bgcolor: 'background.default',
          justifyContent: 'space-between',
          minWidth: 300,
          p: 2,
        }}
      >
        <Typography variant="h5">Settings</Typography>
        <IconButton onClick={props.onClose} size="small" edge="end">
          <CloseIcon fontSize="large" />
        </IconButton>
      </Stack>
      <List
        sx={{
          bgcolor: 'background.default',
          height: 1,
          width: 320,
        }}
        subheader={
          <ListSubheader sx={{ bgcolor: 'background.default' }}>
            Mode
          </ListSubheader>
        }
      >
        <ListItem>
          <ToggleButtonGroup
            size="small"
            fullWidth
            value={themeMode}
            onChange={(e) => {
              const currentTarget =
                e.currentTarget as HTMLButtonElement
              const value = currentTarget.value
              setThemeMode(value)
              SettingsStore.set('themeMode', value)
            }}
          >
            <ToggleButton value="light">
              <LightModeIcon fontSize="inherit" />
              &nbsp;&nbsp;Light
            </ToggleButton>
            <ToggleButton value="dark">
              <DarkModeIcon fontSize="inherit" />
              &nbsp;&nbsp;Dark
            </ToggleButton>
          </ToggleButtonGroup>
        </ListItem>
      </List>
    </Drawer>
  )
}

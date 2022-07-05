import React, { useRef, useState } from 'react'
import {
  Box,
  IconButton,
  IconButtonProps,
  Menu,
  MenuItem,
  MenuItemProps,
  Tooltip,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

type MenuIconButtonProps = {
  menuItems: MenuItemProps[]
  IconButtonProps?: IconButtonProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  IconComponent?: React.ElementType<any>
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

export default function MenuIconButton(props: MenuIconButtonProps) {
  const { disabled, size } = props
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const IconComponent = props.IconComponent ?? MoreVertIcon
  return (
    <>
      <IconButton
        ref={menuButton}
        color="inherit"
        {...props.IconButtonProps}
        onClick={(e) => {
          e.stopPropagation()
          setMenuOpen(true)
        }}
        size={size}
        disabled={disabled}
      >
        <IconComponent fontSize="inherit" />
      </IconButton>
      <Menu
        anchorEl={menuButton.current}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          dense: true,
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
        {props.menuItems.map((menuItemProps, index) => {
          const WrapComponent = menuItemProps.title ? Tooltip : Box
          return (
            <WrapComponent
              key={`menuItem${index}`}
              title={menuItemProps.title}
            >
              <div>
                <MenuItem
                  {...menuItemProps}
                  onClick={(e) => {
                    setMenuOpen(false)
                    menuItemProps.onClick?.(e)
                  }}
                />
              </div>
            </WrapComponent>
          )
        })}
      </Menu>
    </>
  )
}

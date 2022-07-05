import React, { useRef, useState } from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import { OrderStatus } from '@generated/graphql'
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material'
import { capitalize } from 'lodash'
import { Check } from '@mui/icons-material'
import { orderStatusOptions } from 'models/Order'
import { useUpdateOrder } from 'api/Orders'

const { CANCELED, COMPLETED, PENDING, PROCESSING } = OrderStatus

export default function OrderStatusButton(props: {
  id: string
  status: OrderStatus
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [status, setStatus] = useState(props.status)
  const menuButton = useRef<HTMLButtonElement>(null)
  const [update, { loading }] = useUpdateOrder()

  return (
    <>
      <Button
        ref={menuButton}
        variant="outlined"
        color={
          {
            [CANCELED]: 'error',
            [COMPLETED]: 'success',
            [PENDING]: 'info',
            [PROCESSING]: 'warning',
          }[status] as 'error' | 'success' | 'info' | 'warning'
        }
        size="small"
        sx={{
          '& .MuiButton-endIcon': { ml: 0 },
          borderRadius: 10,
          textTransform: 'none',
        }}
        endIcon={<ArrowDropDownRoundedIcon />}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {capitalize(status)}
      </Button>
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
        {orderStatusOptions.map(({ label, value }) => {
          const checked = status === value
          return (
            <MenuItem
              key={value}
              onClick={() => {
                update({
                  variables: {
                    updateOrderInput: {
                      id: props.id,
                      status: value,
                    },
                  },
                }).then(() => {
                  setStatus(value)
                  setMenuOpen(false)
                })
              }}
              disabled={loading}
            >
              <ListItemIcon>{checked && <Check />}</ListItemIcon>
              <ListItemText>{label}</ListItemText>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

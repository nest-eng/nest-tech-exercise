import React from 'react'
import { Button, ButtonProps, CircularProgress } from '@mui/material'
import { omit } from 'lodash'

export default function SubmitButton(
  props: ButtonProps & { loading?: boolean },
) {
  return (
    <Button
      {...omit(props, 'loading')}
      color={props.color ?? 'secondary'}
      variant={props.variant ?? 'contained'}
      type={props.type ?? 'submit'}
    >
      {props.children}
      {props.loading && (
        <CircularProgress
          sx={{ position: 'absolute' }}
          size={16}
          thickness={4}
        />
      )}
    </Button>
  )
}

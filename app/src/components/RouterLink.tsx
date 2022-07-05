import React, { ReactElement } from 'react'
import Link from 'next/link'
import { ButtonBase, SxProps } from '@mui/material'

export default function RouterLink(props: {
  title?: string
  href?: string
  button?: boolean
  children: ReactElement | ReactElement[] | string
  sx?: SxProps
  hidden?: boolean
  disableRipple?: boolean
  onClick?: () => void
}) {
  if (props.hidden) {
    return null
  }
  if (!props.href) {
    return <>{props.children}</>
  }
  return (
    <Link href={props.href} passHref>
      {props.button ? (
        <ButtonBase
          onClick={props.onClick}
          sx={props.sx}
          title={props.title}
          disableRipple={props.disableRipple}
        >
          {props.children}
        </ButtonBase>
      ) : (
        props.children
      )}
    </Link>
  )
}

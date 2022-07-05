import { MenuItem } from '@mui/material'
import React from 'react'

export function getMenuItemsFromObject(labels: {
  [key: string]: string
}) {
  return Object.entries(labels).map(([value, label]) => (
    <MenuItem key={value} value={value}>
      {label}
    </MenuItem>
  ))
}

export function getMenuItemsFromLabels(
  labels: {
    label: string
    value: string
  }[],
) {
  return labels.map(({ value, label }) => (
    <MenuItem key={value} value={value}>
      {label}
    </MenuItem>
  ))
}

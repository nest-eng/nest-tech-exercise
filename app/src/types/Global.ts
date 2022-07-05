import { ReactNode } from 'react'

// Tel E.164 format `+16076467518`
export type Tel =
  `+1${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}`
export type Email = `${string}@${string}.${string}`
// Date ISO format `1964-09-02`
export type Date =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`
// Time ISO format `20:21:50.431`
export type Time =
  `${number}${number}:${number}${number}:${number}${number}.${number}${number}${number}`
// DateTime ISO format `2021-03-29T20:17:32.289Z`
export type DateTime = `${Date}T${Time}Z`

export interface SelectOption {
  label: string | ReactNode
  value: string
  disabled?: boolean
}

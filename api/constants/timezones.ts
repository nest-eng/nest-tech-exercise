type TimezoneOption = {
  dstOffset: string
  label: string
  offset: string
  value: string
}

export const timezones: TimezoneOption[] = [
  {
    dstOffset: '-04:00',
    label: 'Eastern',
    offset: '-05:00',
    value: 'America/New_York',
  },
  {
    dstOffset: '-05:00',
    label: 'Central',
    offset: '-06:00',
    value: 'America/Chicago',
  },
  {
    dstOffset: '-06:00',
    label: 'Mountain',
    offset: '-07:00',
    value: 'America/Denver',
  },
  {
    dstOffset: '-07:00',
    label: 'Pacific',
    offset: '-08:00',
    value: 'America/Los_Angeles',
  },
  {
    dstOffset: '-08:00',
    label: 'Alaska',
    offset: '-09:00',
    value: 'America/Juneau',
  },
  {
    dstOffset: '-09:00',
    label: 'Hawaii-Aleutian',
    offset: '-10:00',
    value: 'America/Adak',
  },
]

import { format } from 'date-fns'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import differenceInHours from 'date-fns/differenceInHours'

export function getCurrentIsoDate(): string {
  return new Date().toISOString()
}

export const getCurrentTime = () => Date.now()

export function formatDateTime(
  isoDateTime: string,
  includeTime = true,
  overrideFormat?: string,
) {
  if (!isoDateTime) return null

  const date = new Date(isoDateTime)
  const dateWithTzOffset = new Date(
    // date-fns needs tz offset to parse the date correctly and
    // avoid off by 1 issue depending on local timezone.
    // https://stackoverflow.com/questions/48172772/time-zone-issue-involving-date-fns-format
    date.valueOf() + date.getTimezoneOffset() * 60 * 1000,
  )
  return format(
    new Date(dateWithTzOffset),
    overrideFormat ?? (includeTime ? 'PPp' : 'PP'),
  )
}

// Returns distance of time from now.
// Returns formatted date if more than 24 hours than now.
export function formatTimeAgo(
  startIsoDateTime: string,
  options?: {
    includeSeconds?: boolean
    addSuffix?: boolean
    locale?: Locale
  },
) {
  if (!startIsoDateTime) return ''
  const startDate = new Date(startIsoDateTime)
  const hours = differenceInHours(Date.now(), startDate)

  return hours < 24
    ? `${formatDistanceToNow(startDate, options)} ago`
    : formatDateTime(startIsoDateTime)
}
export function formatAge(
  startIsoDateTime: string,
  options?: {
    includeSeconds?: boolean
    addSuffix?: boolean
    locale?: Locale
  },
) {
  if (!startIsoDateTime) return ''
  const startDate = new Date(startIsoDateTime)
  return formatDistanceToNowStrict(startDate, options)
}

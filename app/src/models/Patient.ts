import { Ethnicity, Gender, Patient } from '@generated/graphql'
import { capitalize } from 'lodash'
import { formatAge, formatDateTime } from 'utils/DateUtil'

export const ethnicityLabels = {
  [Ethnicity.AMERICAN_INDIAN_OR_ALASKA_NATIVE]:
    'American Indian/Alaska Native',
  [Ethnicity.ASIAN]: 'Asian',
  [Ethnicity.BLACK_AFRICAN_AMERICAN]: 'Black/African American',
  [Ethnicity.HISPANIC_OR_LATINO]: 'Hispanic/Latino',
  [Ethnicity.NATIVE_HAWAIIAN_OR_PACIFIC_ISLANDER]:
    'Native Hawaiian/Pacific Islander',
  [Ethnicity.WHITE]: 'White',
  [Ethnicity.UNKNOWN]: 'Unknown',
}

export const timezoneLabels = {
  'America/Adak': 'Adak',
  'America/Anchorage': 'Anchorage',
  'America/Chicago': 'Chicago',
  'America/Denver': 'Denver',
  'America/Los_Angeles': 'Los Angeles',
  'America/New_York': 'New York',
  'America/Phoenix': 'Phoenix',
  'Pacific/Honolulu': 'Honolulu',
}

export const genderLabels = {
  [Gender.FEMALE]: 'Female',
  [Gender.MALE]: 'Male',
  [Gender.OTHER]: 'Other',
  [Gender.UNKNOWN]: 'Unknown',
}

function getFirstAndLastName(firstName: string, lastName: string) {
  return [firstName, lastName].filter(Boolean).join(' ')
}

function getLastAndFirstName(firstName: string, lastName: string) {
  return [lastName, firstName].filter(Boolean).join(', ')
}

export default class PatientModel extends Patient {
  constructor(data?: Patient) {
    super()
    Object.assign(this, data)
  }

  get fullName() {
    return getFirstAndLastName(this.firstName, this.lastName)
  }

  get lastAndFirstName() {
    return getLastAndFirstName(this.firstName, this.lastName)
  }

  get formattedSummary() {
    return [
      formatAge(this.birthDate),
      this.formattedEthnicity,
      this.formattedGender,
    ]
      .filter(Boolean)
      .join(', ')
  }

  get formattedBirthDate() {
    return formatDateTime(this.birthDate, false)
  }

  get formattedGender() {
    return capitalize(this.gender)
  }

  get formattedEthnicity() {
    return ethnicityLabels[this.ethnicity]
  }

  get formattedPhone() {
    return this.phone
  }
}

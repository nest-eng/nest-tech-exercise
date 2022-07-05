import { User } from '@generated/graphql'

export default class UserModel extends User {
  constructor(data?: Partial<UserModel>) {
    super()
    Object.assign(this, data)
  }
  id: string
  tenantId: string
  firstName?: string
  lastName?: string
  profilePictureUrl?: string
  name? = ''
}

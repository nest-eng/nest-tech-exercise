import { Order, OrderStatus } from '@generated/graphql'
import { capitalize } from 'lodash'

export const orderStatusOptions: {
  label: string
  value: OrderStatus
}[] = Object.keys(OrderStatus).map((value: OrderStatus) => ({
  label: capitalize(value),
  value,
}))

export default class OrderModel extends Order {
  constructor(data?: Partial<OrderModel>) {
    super()
    Object.assign(this, data)
  }
}

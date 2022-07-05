import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { OrdersService } from './orders.service'
import { Order } from '@generated/prisma-nestjs-graphql'
import { CreateOrderInput } from './dto/create-order.input'
import { UpdateOrderInput } from 'orders/dto/update-order.input'

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly OrdersService: OrdersService) {}

  @Mutation(() => Order)
  createOrder(
    @Args('createOrderInput')
    createOrderInput: CreateOrderInput,
  ) {
    return this.OrdersService.create(createOrderInput)
  }

  @Mutation(() => Order)
  updateOrder(
    @Args('updateOrderInput')
    updateOrderInput: UpdateOrderInput,
  ) {
    return this.OrdersService.update(
      updateOrderInput.id,
      updateOrderInput,
    )
  }

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.OrdersService.findAll()
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.OrdersService.findOne(id)
  }
}

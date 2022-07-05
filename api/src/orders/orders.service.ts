import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { CreateOrderInput } from './dto/create-order.input'
import { UpdateOrderInput } from 'orders/dto/update-order.input'
import { OrderWhereInput } from '@generated/prisma-nestjs-graphql'

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderInput: CreateOrderInput) {
    return this.prisma.order.create({
      data: createOrderInput,
    })
  }

  async update(id: string, updateOrderInput: UpdateOrderInput) {
    return this.prisma.order.update({
      data: updateOrderInput,
      include: {
        Patient: true,
        Test: true,
      },
      where: { id },
    })
  }

  async findAll(where?: OrderWhereInput) {
    return this.prisma.order.findMany({
      include: {
        Patient: true,
        Test: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      where,
    })
  }

  async findOne(id: string) {
    return await this.prisma.order.findFirst({
      include: {
        Patient: true,
        Test: true,
      },
      rejectOnNotFound: (err) =>
        new Error(`${err.name}: Not found (id: ${id})`),
    })
  }
}

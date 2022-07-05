import { Test, TestingModule } from '@nestjs/testing'
import { OrdersResolver } from './orders.resolver'
import { OrdersService } from './orders.service'
import { PrismaService } from 'nestjs-prisma'
import { AccountsService } from 'accounts/accounts.service'
import { PatientsService } from 'patients/patients.service'
import { UsersService } from 'users/users.service'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'

describe('OrdersResolver', () => {
  let resolver: OrdersResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        OrdersResolver,
        OrdersService,
        AccountsService,
        PatientsService,
        UsersService,
        ConfigService,
        Logger,
      ],
    }).compile()

    resolver = module.get<OrdersResolver>(OrdersResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})

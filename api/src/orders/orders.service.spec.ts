import { Test, TestingModule } from '@nestjs/testing'
import { OrdersService } from './orders.service'
import { PrismaService } from 'nestjs-prisma'
import { AccountsService } from 'accounts/accounts.service'
import { PatientsService } from 'patients/patients.service'
import { UsersService } from 'users/users.service'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'

describe('OrdersService', () => {
  let service: OrdersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        OrdersService,
        AccountsService,
        PatientsService,
        UsersService,
        ConfigService,
        Logger,
      ],
    }).compile()

    service = module.get<OrdersService>(OrdersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

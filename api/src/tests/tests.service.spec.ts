import { Test, TestingModule } from '@nestjs/testing'
import { TestsService } from './tests.service'
import { PrismaService } from 'nestjs-prisma'
import { AccountsService } from 'accounts/accounts.service'
import { PatientsService } from 'patients/patients.service'
import { UsersService } from 'users/users.service'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'

describe('TestsService', () => {
  let service: TestsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        TestsService,
        AccountsService,
        PatientsService,
        UsersService,
        ConfigService,
        Logger,
      ],
    }).compile()

    service = module.get<TestsService>(TestsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

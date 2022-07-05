import { Test, TestingModule } from '@nestjs/testing'
import { TestsResolver } from './tests.resolver'
import { TestsService } from './tests.service'
import { PrismaService } from 'nestjs-prisma'
import { AccountsService } from 'accounts/accounts.service'
import { PatientsService } from 'patients/patients.service'
import { UsersService } from 'users/users.service'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'

describe('TestsResolver', () => {
  let resolver: TestsResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        TestsResolver,
        TestsService,
        AccountsService,
        PatientsService,
        UsersService,
        ConfigService,
        Logger,
      ],
    }).compile()

    resolver = module.get<TestsResolver>(TestsResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})

import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'nestjs-prisma'
import { PatientsResolver } from './patients.resolver'
import { PatientsService } from './patients.service'
import { UsersService } from 'users/users.service'
import { AccountsService } from 'accounts/accounts.service'

describe('PatientsResolver', () => {
  let resolver: PatientsResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersService,
        AccountsService,
        PatientsResolver,
        PatientsService,
      ],
    }).compile()

    resolver = module.get<PatientsResolver>(PatientsResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})

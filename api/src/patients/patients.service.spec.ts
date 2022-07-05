import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'nestjs-prisma'
import { PatientsService } from './patients.service'
import { UsersService } from 'users/users.service'
import { AccountsService } from 'accounts/accounts.service'

describe('PatientsService', () => {
  let service: PatientsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersService,
        AccountsService,
        PatientsService,
      ],
    }).compile()

    service = module.get<PatientsService>(PatientsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

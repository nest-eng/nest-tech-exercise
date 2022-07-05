import { Test, TestingModule } from '@nestjs/testing'
import { AccountsService } from './accounts.service'
import { PrismaService } from 'nestjs-prisma'

describe('AccountsService', () => {
  let service: AccountsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, AccountsService],
    }).compile()

    service = module.get<AccountsService>(AccountsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

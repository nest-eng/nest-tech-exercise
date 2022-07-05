import { Module } from '@nestjs/common'
import { AccountsService } from './accounts.service'
import { AccountsResolver } from './accounts.resolver'
import { PrismaService } from 'nestjs-prisma'

@Module({
  exports: [AccountsService],
  providers: [PrismaService, AccountsResolver, AccountsService],
})
export class AccountsModule {}

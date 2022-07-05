import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'
import { PrismaService } from 'nestjs-prisma'

@Module({
  exports: [UsersService],
  providers: [PrismaService, UsersResolver, UsersService],
})
export class UsersModule {}

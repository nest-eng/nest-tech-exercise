import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { CreateAccountInput } from 'accounts/dto/create-account.input'
import { UpdateAccountInput } from 'accounts/dto/update-account.input'

type UpdateByArgs = {
  id?: string
  externalId?: string
}

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  create(createAccountInput: CreateAccountInput) {
    return this.prisma.account.create({ data: createAccountInput })
  }

  findAll() {
    return this.prisma.account.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    })
  }

  findOne(id: string) {
    return this.prisma.account.findUnique({
      where: { id },
    })
  }

  updateBy(
    { id }: UpdateByArgs,
    updateAccountInput: UpdateAccountInput,
  ) {
    return this.prisma.account.update({
      data: updateAccountInput,
      where: { id },
    })
  }
}

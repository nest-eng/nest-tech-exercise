import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

type UpdateByArgs = {
  id?: string
  externalId?: string
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: createUserInput })
  }

  findAll() {
    return this.prisma.user.findMany({
      orderBy: {
        id: 'desc',
      },
    })
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    })
  }

  updateBy(
    { id, externalId }: UpdateByArgs,
    updateUserInput: UpdateUserInput,
  ) {
    return this.prisma.user.update({
      data: updateUserInput,
      where: { externalId, id },
    })
  }
}

import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { CreateTestInput } from './dto/create-test.input'
import { TestWhereInput } from '@generated/prisma-nestjs-graphql'

@Injectable()
export class TestsService {
  constructor(private prisma: PrismaService) {}

  async create(createTestInput: CreateTestInput) {
    return this.prisma.test.create({
      data: { ...createTestInput },
    })
  }

  async findAll(where?: TestWhereInput) {
    return this.prisma.test.findMany({
      orderBy: {
        id: 'asc',
      },
      where,
    })
  }

  async findOne(id: string) {
    return await this.prisma.test.findFirst({
      rejectOnNotFound: (err) =>
        new Error(`${err.name}: Not found (id: ${id})`),
    })
  }
}

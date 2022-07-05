import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TestsService } from './tests.service'
import {
  Test,
  TestWhereInput,
} from '@generated/prisma-nestjs-graphql'
import { CreateTestInput } from './dto/create-test.input'

@Resolver(() => Test)
export class TestsResolver {
  constructor(private readonly TestsService: TestsService) {}

  @Mutation(() => Test)
  createTest(
    @Args('createTestInput')
    createTestInput: CreateTestInput,
  ) {
    return this.TestsService.create(createTestInput)
  }

  @Query(() => [Test], { name: 'tests' })
  findAll(
    @Args('where', { nullable: true })
    where?: TestWhereInput,
  ) {
    return this.TestsService.findAll(where)
  }

  @Query(() => Test, { name: 'test' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.TestsService.findOne(id)
  }
}

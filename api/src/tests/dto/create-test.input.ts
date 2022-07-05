import { InputType } from '@nestjs/graphql'
import { TestUncheckedCreateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class CreateTestInput extends TestUncheckedCreateInput {}

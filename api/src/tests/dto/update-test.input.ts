import { InputType } from '@nestjs/graphql'
import { TestUncheckedUpdateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class UpdateTestInput extends TestUncheckedUpdateInput {}

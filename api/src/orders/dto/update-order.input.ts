import { Field, InputType } from '@nestjs/graphql'
import { OrderUncheckedUpdateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class UpdateOrderInput extends OrderUncheckedUpdateInput {
  @Field({ nullable: false })
  id: string
}

import { InputType } from '@nestjs/graphql'
import { OrderUncheckedCreateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class CreateOrderInput extends OrderUncheckedCreateInput {}

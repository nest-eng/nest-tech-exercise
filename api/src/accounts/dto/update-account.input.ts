import { InputType } from '@nestjs/graphql'
import { AccountUncheckedUpdateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class UpdateAccountInput extends AccountUncheckedUpdateInput {}

import { InputType } from '@nestjs/graphql'
import { AccountUncheckedCreateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class CreateAccountInput extends AccountUncheckedCreateInput {}

import { InputType } from '@nestjs/graphql'
import { UserUncheckedUpdateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class UpdateUserInput extends UserUncheckedUpdateInput {}

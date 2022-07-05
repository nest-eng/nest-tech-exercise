import { InputType } from '@nestjs/graphql'
import { UserUncheckedCreateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class CreateUserInput extends UserUncheckedCreateInput {}

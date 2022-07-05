import { Field, InputType } from '@nestjs/graphql'
import { PatientUncheckedUpdateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class UpdatePatientInput extends PatientUncheckedUpdateInput {
  @Field({ nullable: false })
  id: string
}

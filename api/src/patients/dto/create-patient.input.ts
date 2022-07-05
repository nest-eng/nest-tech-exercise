import { InputType } from '@nestjs/graphql'
import { PatientUncheckedCreateInput } from '@generated/prisma-nestjs-graphql'

@InputType()
export class CreatePatientInput extends PatientUncheckedCreateInput {}

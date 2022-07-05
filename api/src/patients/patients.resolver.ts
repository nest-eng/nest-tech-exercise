import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
  Patient,
  PatientWhereInput,
} from '@generated/prisma-nestjs-graphql'
import { PatientsService } from './patients.service'
import { CreatePatientInput } from './dto/create-patient.input'
import { UpdatePatientInput } from './dto/update-patient.input'

@Resolver(() => Patient)
export class PatientsResolver {
  constructor(private readonly patientsService: PatientsService) {}

  // TODO: switch example guard to real one
  @Mutation(() => Patient)
  createPatient(
    @Args('createPatientInput')
    createPatientInput: CreatePatientInput,
  ) {
    return this.patientsService.create(createPatientInput)
  }

  @Query(() => [Patient], { name: 'patients' })
  findAll(
    @Args('where', { nullable: true })
    where: PatientWhereInput,
  ) {
    return this.patientsService.findAll(where)
  }

  @Query(() => Patient, { name: 'patient', nullable: true })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.patientsService.findOne(id)
  }

  @Mutation(() => Patient)
  updatePatient(
    @Args('updatePatientInput')
    updatePatientInput: UpdatePatientInput,
  ) {
    return this.patientsService.update(
      updatePatientInput.id,
      updatePatientInput,
    )
  }

  @Mutation(() => Patient)
  removePatient(@Args('id', { type: () => String }) id: string) {
    return this.patientsService.remove(id)
  }
}

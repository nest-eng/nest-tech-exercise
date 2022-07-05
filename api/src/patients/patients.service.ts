import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { CreatePatientInput } from './dto/create-patient.input'
import { UpdatePatientInput } from './dto/update-patient.input'
import { PatientWhereInput } from '@generated/prisma-nestjs-graphql'

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  create(createPatientInput: CreatePatientInput) {
    return this.prisma.patient.create({ data: createPatientInput })
  }

  findAll(where?: PatientWhereInput) {
    return this.prisma.patient.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where,
    })
  }

  findOne(id: string) {
    return this.prisma.patient.findUnique({
      include: {
        Orders: {
          include: {
            Test: true,
          },
        },
      },
      where: { id },
    })
  }

  update(id: string, updatePatientInput: UpdatePatientInput) {
    return this.prisma.patient.update({
      data: updatePatientInput,
      include: {
        Orders: true,
      },
      where: { id },
    })
  }

  remove(id: string) {
    return this.prisma.patient.delete({
      where: { id },
    })
  }
}

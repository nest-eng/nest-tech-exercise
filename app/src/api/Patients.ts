import PatientModel from 'models/Patient'
import { gql, useMutation, useQuery } from 'components/ApolloClient'
import { useEffect, useState } from 'react'
import {
  CreatePatientInput,
  Patient,
  UpdatePatientInput,
} from '@generated/graphql'
import { PatientWhereInput } from '@generated/prisma-nestjs-graphql'

const getPatientModel = (data: Patient) => new PatientModel(data)

export function usePatients(where?: PatientWhereInput) {
  const { data, error, loading, refetch } = useQuery<{
    patients: Patient[]
  }>(GQL.ListPatients, {
    // Always fetch latest from API.
    fetchPolicy: 'cache-and-network',
    variables: { where },
  })
  const [patients, setPatients] = useState(
    (data?.patients ?? []).map(getPatientModel),
  )

  useEffect(() => {
    setPatients((data?.patients ?? []).map(getPatientModel))
  }, [data])

  return { error, loading, patients, refetch }
}

export function useFindPatient(patientId: string) {
  const { loading, error, data } = useQuery<{
    patient: Patient
  }>(GQL.FindPatient, {
    skip: !patientId,
    variables: { patientId },
  })
  const [patient, setPatient] = useState(
    new PatientModel(data?.patient),
  )

  useEffect(() => {
    setPatient(new PatientModel(loading ? undefined : data?.patient))
  }, [data, loading])

  return { data, error, loading, patient }
}

export function useUpdatePatient() {
  return useMutation<
    { updatePatient: Patient },
    { updatePatientInput: UpdatePatientInput }
  >(GQL.UpdatePatient)
}

export function useCreatePatient() {
  return useMutation<
    { createPatient: Patient },
    { createPatientInput: CreatePatientInput }
  >(GQL.CreatePatient)
}

const GQL = {
  CreatePatient: gql`
    mutation CreatePatient($createPatientInput: CreatePatientInput!) {
      createPatient(createPatientInput: $createPatientInput) {
        id
        mrn
        firstName
        lastName
        email
        phone
        timezone
        mrn
        gender
        ethnicity
        birthDate
        notes
        createdAt
        lang
        updatedAt
      }
    }
  `,
  FindPatient: gql`
    query FindPatient($patientId: String!) {
      patient(id: $patientId) {
        id
        mrn
        firstName
        lastName
        email
        phone
        timezone
        mrn
        gender
        ethnicity
        birthDate
        notes
        createdAt
        lang
        updatedAt
        Orders {
          Test {
            id
            name
            description
            type
          }
          createdAt
          id
          patientId
          status
          testId
          updatedAt
        }
      }
    }
  `,
  ListPatients: gql`
    query ListPatients($where: PatientWhereInput) {
      patients(where: $where) {
        id
        mrn
        firstName
        lastName
        birthDate
        email
        phone
        createdAt
        updatedAt
        Orders {
          id
        }
      }
    }
  `,
  UpdatePatient: gql`
    mutation UpdatePatient($updatePatientInput: UpdatePatientInput!) {
      updatePatient(updatePatientInput: $updatePatientInput) {
        id
        mrn
        firstName
        lastName
        email
        phone
        timezone
        mrn
        gender
        ethnicity
        birthDate
        notes
        createdAt
        lang
        updatedAt
      }
    }
  `,
}

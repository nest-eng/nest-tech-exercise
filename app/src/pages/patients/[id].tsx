import React from 'react'
import MainHead from 'components/MainHead'
import Patient from 'components/Patient'
import { useRouter } from 'next/router'
import { useFindPatient } from 'api/Patients'

export default function PatientPage() {
  const { query } = useRouter()
  const { loading, patient } = useFindPatient(query.id as string)

  return (
    <>
      <MainHead title={`${patient.fullName} - Patient`} />
      <Patient
        patient={patient}
        loading={loading}
        readOnly={query.edit === undefined}
      />
    </>
  )
}

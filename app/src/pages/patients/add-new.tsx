import React, { useState } from 'react'
import MainHead from 'components/MainHead'
import Patient from 'components/Patient'
import { useRouter } from 'next/router'
import PatientModel from 'models/Patient'

export default function AddNewPatientPage() {
  const { query } = useRouter()
  const [patient] = useState(new PatientModel())

  return (
    <>
      <MainHead title={`Add New - Patient`} />
      <Patient
        patient={patient}
        readOnly={query.edit === undefined}
        addNew
      />
    </>
  )
}

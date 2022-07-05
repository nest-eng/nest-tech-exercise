import React, { ReactNode, useMemo, useState } from 'react'
import { Box, Button, Stack, TextField } from '@mui/material'
import MainHead from 'components/MainHead'
import PageHeader from 'components/PageHeader'
import DataTable from 'components/DataTable'
import {
  GridColDef,
  GridValueFormatterParams,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { formatDateTime } from 'utils/DateUtil'
import RouterLink from 'components/RouterLink'
import { usePatients } from 'api/Patients'
import PatientModel from 'models/Patient'
import PageContentLayout from 'components/PageContentLayout'

export default function PatientsPage() {
  const { loading, patients } = usePatients()
  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'name',
        flex: 1,
        headerName: 'Name/MRN',
        renderCell: ({
          row,
        }: GridValueGetterParams<ReactNode, PatientModel>) => {
          return (
            <Stack gap={0.25}>
              <Box color="text.primary">{row.lastAndFirstName}</Box>
              <Box color="text.secondary">{row.mrn}</Box>
            </Stack>
          )
        },
        sortable: false,
      },
      {
        field: 'birthDate',
        flex: 1,
        headerName: 'Date of birth',
        sortable: false,
        valueFormatter: ({
          value,
        }: GridValueFormatterParams<string>) =>
          formatDateTime(value, false),
        width: 180,
      },
      {
        field: 'email',
        flex: 1,
        headerName: 'Email',
        renderCell: ({
          row,
        }: GridValueGetterParams<ReactNode, PatientModel>) => (
          <Box
            component="a"
            href={`mailto:${row.email}`}
            target="_blank"
            rel="noreferrer"
            sx={{
              color: 'primary.main',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {row.email}
          </Box>
        ),
        sortable: false,
        width: 180,
      },
      {
        field: 'orders',
        flex: 0.5,
        headerName: 'Order count',
        renderCell: ({
          row,
        }: GridValueGetterParams<ReactNode, PatientModel>) => (
          <Box>{row.Orders?.length ?? 0}</Box>
        ),
        sortable: false,
        type: 'number',
      },
      {
        field: 'actions',
        headerName: '',
        renderCell: ({
          row,
        }: GridValueGetterParams<ReactNode, PatientModel>) => (
          <Stack
            direction="row"
            sx={{ justifyContent: 'flex-end', width: 1 }}
          >
            <RouterLink href={`/patients/${row.id}`}>
              <Button variant="outlined" color="inherit" size="small">
                View
              </Button>
            </RouterLink>
          </Stack>
        ),
        sortable: false,
        width: 150,
      },
    ],
    [],
  )

  return (
    <>
      <MainHead title="Patients" />
      <PageContentLayout>
        <PageHeader
          title="Patients"
          actions={
            <>
              <RouterLink href="/patients/add-new?edit">
                <Button variant="contained" color="primary">
                  Add New
                </Button>
              </RouterLink>
            </>
          }
        />
        <DataTable
          rows={patients}
          columns={columns}
          rowHeight={104}
          stickyHeader={{ top: 64 }}
          loading={loading}
        />
      </PageContentLayout>
    </>
  )
}

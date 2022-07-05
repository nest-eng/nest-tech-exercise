import React, { ReactNode } from 'react'
import { Box, Chip, Stack } from '@mui/material'
import MainHead from 'components/MainHead'
import PageHeader from 'components/PageHeader'
import DataTable from 'components/DataTable'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import PageContentLayout from 'components/PageContentLayout'
import { useTests } from 'api/Tests'
import { Test, TestStatus } from '@generated/graphql'
import { capitalize } from 'lodash'

const { AVAILABLE, UNAVAILABLE } = TestStatus

export default function TestsPage() {
  const { loading, tests } = useTests()
  const columns: GridColDef[] = [
    {
      field: 'id',
      flex: 1,
      headerName: 'Name',
      renderCell: ({
        row,
      }: GridValueGetterParams<ReactNode, Test>) => {
        return (
          <Stack gap={0.25}>
            <Box color="text.primary">{row.name}</Box>
          </Stack>
        )
      },
      sortable: false,
    },
    {
      field: 'content',
      flex: 1,
      headerName: 'Description',
      renderCell: ({
        row,
      }: GridValueGetterParams<ReactNode, Test>) => {
        return (
          <Box
            sx={{
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '3',
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal',
            }}
          >
            {row.description}
          </Box>
        )
      },
      sortable: false,
      width: 180,
    },
    {
      field: 'status',
      flex: 0.5,
      headerName: 'Status',
      renderCell: ({
        row,
      }: GridValueGetterParams<ReactNode, Test>) => {
        return (
          <Box
            sx={{
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '3',
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal',
            }}
          >
            <Chip
              variant="outlined"
              color={
                {
                  [AVAILABLE]: 'primary',
                  [UNAVAILABLE]: 'warning',
                }[row.status] as 'primary' | 'warning'
              }
              label={capitalize(row.status)}
              size="small"
            />
          </Box>
        )
      },
      sortable: false,
    },
  ]

  return (
    <>
      <MainHead title="Tests" />
      <PageContentLayout>
        <PageHeader title="Tests" />
        <DataTable
          rows={tests}
          columns={columns}
          rowHeight={104}
          sx={{ minHeight: 400 }}
          loading={loading}
          stickyHeader={{ top: 64 }}
        />
      </PageContentLayout>
    </>
  )
}

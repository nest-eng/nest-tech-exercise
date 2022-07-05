import React, { ReactNode } from 'react'
import { Box, Button, Stack } from '@mui/material'
import MainHead from 'components/MainHead'
import PageHeader from 'components/PageHeader'
import DataTable from 'components/DataTable'
import {
  GridColDef,
  GridValueFormatterParams,
  GridValueGetterParams,
  getGridSingleSelectOperators,
} from '@mui/x-data-grid'
import { formatDateTime } from 'utils/DateUtil'
import PageContentLayout from 'components/PageContentLayout'
import { useOrders } from 'api/Orders'
import { Order } from '@generated/graphql'
import OrderStatusButton from 'components/OrderStatusButton'
import PatientModel from 'models/Patient'
import RouterLink from 'components/RouterLink'
import { orderStatusOptions } from 'models/Order'

export default function OrdersPage() {
  const { loading, orders } = useOrders()
  const columns: GridColDef[] = [
    {
      disableColumnMenu: true,
      field: 'id',
      filterable: false,
      flex: 1,
      headerName: 'Patient/Order ID',
      renderCell: ({
        row,
      }: GridValueGetterParams<ReactNode, Order>) => {
        const patient = new PatientModel(row.Patient)
        return (
          <Stack gap={0.25}>
            <RouterLink href={`/patients/${patient.id}?tab=orders`}>
              <Box component="a" color="primary.main">
                {patient.lastAndFirstName}
              </Box>
            </RouterLink>
            <Box color="text.secondary">{row.id}</Box>
          </Stack>
        )
      },
      sortable: false,
    },
    {
      disableColumnMenu: true,
      field: 'Test',
      filterable: false,
      flex: 0.75,
      headerName: 'Test',
      renderCell: ({
        row,
      }: GridValueGetterParams<ReactNode, Order>) => {
        return (
          <Box color="text.primary" sx={{ whiteSpace: 'normal' }}>
            {row.Test.name}
          </Box>
        )
      },
      sortable: false,
    },
    {
      disableColumnMenu: true,
      field: 'status',
      filterOperators: getGridSingleSelectOperators().filter(
        ({ value }) => value === 'is',
      ),
      flex: 0.5,
      headerName: 'Status',
      renderCell: ({
        row,
      }: GridValueGetterParams<ReactNode, Order>) => {
        return <OrderStatusButton id={row.id} status={row.status} />
      },
      sortable: false,
      valueOptions: orderStatusOptions,
      width: 180,
    },
    {
      disableColumnMenu: true,
      field: 'createdAt',
      filterable: false,
      flex: 0.75,
      headerName: 'Order Date',
      sortable: false,
      valueFormatter: ({ value }: GridValueFormatterParams) =>
        formatDateTime(value as string),
      width: 180,
    },
  ]

  return (
    <>
      <MainHead title="Orders" />
      <PageContentLayout>
        <PageHeader title="Orders" />
        <DataTable
          rows={orders}
          columns={columns}
          rowHeight={104}
          sx={{ minHeight: 400 }}
          loading={loading}
          stickyHeader={{ top: 64 }}
          disableColumnMenu={false}
          disableColumnFilter={false}
        />
      </PageContentLayout>
    </>
  )
}

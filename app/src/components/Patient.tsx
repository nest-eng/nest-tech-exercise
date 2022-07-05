import React, { useCallback, useEffect, useState } from 'react'
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material'
import PageContentLayout from 'components/PageContentLayout'
import PatientModel, {
  ethnicityLabels,
  genderLabels,
  timezoneLabels,
} from 'models/Patient'
import { useRouter } from 'next/router'
import ContentHeader from 'components/ContentHeader'
import { Controller, useForm } from 'react-hook-form'
import { Ethnicity, Gender, Order } from '@generated/graphql'
import { getMenuItemsFromObject } from 'utils/MenuItemUtil'
import { useCreatePatient, useUpdatePatient } from 'api/Patients'
import { omit } from 'lodash'
import { formatDateTime } from 'utils/DateUtil'
import OrderStatusButton from 'components/OrderStatusButton'
import useOrderTestDialog from 'hooks/useOrderTestDialog'
import MenuIconButton from 'components/MenuIconButton'

type PatientForm = {
  birthDate: string
  email: string
  ethnicity: Ethnicity
  firstName: string
  gender: Gender
  id: string
  lang: string
  lastName: string
  mrn: string
  notes: string
  phone: string
  timezone: string
}
type PatientProps = {
  patient: PatientModel
  loading?: boolean
  readOnly?: boolean
  addNew?: boolean
}
const TabIndex = ['profile', 'orders']

export default function Patient(props: PatientProps) {
  const { control, handleSubmit, reset } = useForm<PatientForm>({
    defaultValues: {
      birthDate: '',
      email: '',
      ethnicity: Ethnicity.UNKNOWN,
      firstName: '',
      gender: Gender.UNKNOWN,
      id: '',
      lang: 'en-US',
      lastName: '',
      mrn: '',
      notes: '',
      phone: '',
      timezone: 'America/Los_Angeles',
    },
    mode: 'onChange',
    shouldFocusError: true,
  })
  const { loading, readOnly } = props
  const readOnlyProps: TextFieldProps = readOnly
    ? {
        InputProps: { disableUnderline: true },
        inputProps: { readOnly },
        sx: {
          '& .MuiSelect-icon': { display: 'none' },
        },
      }
    : null
  const router = useRouter()
  const tab = router.query.tab
    ? (router.query.tab as string)
    : 'profile'
  const [patient, setPatient] = useState(props.patient)
  const [create, { loading: createLoading }] = useCreatePatient()
  const [update, { loading: updateLoading }] = useUpdatePatient()
  const disabled = loading || createLoading || updateLoading
  const handleEdit = useCallback(() => {
    router.push(`/patients/${patient.id}?edit`)
  }, [router, patient])
  const handleCancel = useCallback(() => {
    reset()
    router.push(`/patients/${patient.id ?? ''}`)
  }, [reset, router, patient.id])
  const { OrderTestDialog, setOpen: setOrderTestDialogOpen } =
    useOrderTestDialog()

  useEffect(() => {
    setPatient(props.patient)
  }, [props.patient])

  useEffect(() => {
    reset({
      birthDate: formatDateTime(
        patient.birthDate,
        false,
        'yyyy-MM-dd',
      ),
      email: patient.email,
      ethnicity: patient.ethnicity,
      firstName: patient.firstName,
      gender: patient.gender,
      id: patient.id,
      lang: patient.lang,
      lastName: patient.lastName,
      mrn: patient.mrn,
      notes: patient.notes,
      phone: patient.phone,
      timezone: patient.timezone,
    })
  }, [patient, reset])

  return (
    <PageContentLayout>
      <Stack gap={3} sx={{ flexGrow: 1, minHeight: 600 }}>
        <ContentHeader
          actions={
            !props.addNew && (
              <>
                <MenuIconButton
                  disabled={disabled}
                  IconButtonProps={{
                    sx: {
                      my: -0.5,
                    },
                  }}
                  menuItems={[
                    {
                      children: 'Delete Patient',
                      onClick: () => {
                        alert('Not yet implemented')
                      },
                    },
                  ].filter(Boolean)}
                />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    setOrderTestDialogOpen(true)
                  }}
                >
                  Order Test
                </Button>
              </>
            )
          }
        >
          <Typography variant="h4">
            {patient.lastAndFirstName || (
              <Box sx={{ color: 'text.secondary' }}>Last, First</Box>
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {patient.formattedSummary}&nbsp;
          </Typography>
        </ContentHeader>
        <Tabs
          value={TabIndex.findIndex((i) => i === tab) ?? 0}
          onChange={({ target }) => {
            const tab = (target as HTMLElement).id
            router.replace(`/patients/${patient.id}?tab=${tab}`)
          }}
          sx={{ mb: 3 }}
        >
          <Tab id="profile" label="Profile" />
          <Tab id="orders" label="Orders" />
        </Tabs>
        {tab === 'profile' && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                >
                  Personal Details
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ p: 4 }}>
                  <Stack gap={2}>
                    <Controller
                      name="firstName"
                      control={control}
                      rules={{ required: 'Required' }}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          placeholder={readOnly ? 'None' : 'First'}
                          variant="standard"
                          label="First name"
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                    <Controller
                      name="lastName"
                      control={control}
                      rules={{ required: 'Required' }}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          placeholder={readOnly ? 'None' : 'Last'}
                          variant="standard"
                          label="Last name"
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                    <Controller
                      name="mrn"
                      control={control}
                      rules={{ required: 'Required' }}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          placeholder={
                            readOnly ? 'None' : '111-11-1111'
                          }
                          variant="standard"
                          label="MRN"
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                    <Controller
                      name="birthDate"
                      control={control}
                      rules={{
                        pattern: {
                          message:
                            'Invalid format (expected YYYY-MM-DD)',
                          value: /^(19|20)\d{2}-[01]\d-[0123]\d$/,
                        },
                        required: 'Required',
                      }}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          placeholder={
                            readOnly ? 'None' : '1970-01-01'
                          }
                          variant="standard"
                          label="Date of birth"
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                    <Controller
                      name="gender"
                      control={control}
                      rules={{ required: 'Required' }}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          variant="standard"
                          label="Gender"
                          SelectProps={{ displayEmpty: true }}
                          select
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        >
                          {getMenuItemsFromObject(genderLabels)}
                        </TextField>
                      )}
                    />
                    <Controller
                      name="ethnicity"
                      control={control}
                      rules={{ required: 'Required' }}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          variant="standard"
                          label="Ethnicity"
                          SelectProps={{ displayEmpty: true }}
                          select
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        >
                          {getMenuItemsFromObject(ethnicityLabels)}
                        </TextField>
                      )}
                    />
                    <Controller
                      name="lang"
                      control={control}
                      rules={{ required: 'Required' }}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          placeholder={readOnly ? 'None' : 'en-US'}
                          variant="standard"
                          label="Language"
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                    <Controller
                      name="timezone"
                      control={control}
                      rules={{ required: 'Required' }}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          variant="standard"
                          label="Timezone"
                          SelectProps={{ displayEmpty: true }}
                          select
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        >
                          {getMenuItemsFromObject(timezoneLabels)}
                        </TextField>
                      )}
                    />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={1} sx={{ alignItems: 'flex-end' }}>
                  {patient.updatedAt && (
                    <Box
                      typography="caption"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5,
                        mx: 1,
                        textAlign: 'right',
                      }}
                    >
                      Updated {formatDateTime(patient.updatedAt)}
                    </Box>
                  )}
                  <Stack direction="row" gap={1}>
                    {readOnly ? (
                      <Button
                        color="inherit"
                        variant="outlined"
                        onClick={handleEdit}
                      >
                        Edit
                      </Button>
                    ) : (
                      <Stack gap={1} direction="row">
                        <Button
                          color="inherit"
                          variant="text"
                          onClick={handleCancel}
                          disabled={disabled}
                        >
                          Cancel
                        </Button>
                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={handleSubmit((patientForm) => {
                            if (props.addNew) {
                              return create({
                                variables: {
                                  createPatientInput: patientForm,
                                },
                              }).then(({ data }) => {
                                router.push(
                                  `/patients/${data.createPatient.id}`,
                                )
                              })
                            }
                            return update({
                              variables: {
                                updatePatientInput: patientForm,
                              },
                            }).then(() => {
                              router.replace(
                                `/patients/${patient.id}`,
                              )
                            })
                          })}
                          disabled={disabled}
                        >
                          Save
                        </Button>
                      </Stack>
                    )}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                >
                  Contact Details
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ p: 4 }}>
                  <Stack gap={2}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          placeholder={
                            readOnly ? 'None' : 'user@example.com'
                          }
                          variant="standard"
                          label="Email"
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          placeholder={
                            readOnly ? 'None' : '+12223334444'
                          }
                          variant="standard"
                          label="Mobile Phone"
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                >
                  Notes
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ p: 4 }}>
                  <Stack gap={2}>
                    <Controller
                      name="notes"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...omit(field, ['ref'])}
                          {...readOnlyProps}
                          value={field.value ?? ''}
                          inputRef={field.ref}
                          placeholder={
                            readOnly ? 'None' : 'Add notes here'
                          }
                          variant="standard"
                          multiline
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </>
        )}
        {tab === 'orders' && (
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Test/Order ID</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date Updated</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patient.Orders?.map((order: Order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <Stack>
                        <Box>{order.Test.name}</Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                        >
                          {order.id}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <OrderStatusButton
                        id={order.id}
                        status={order.status}
                      />
                    </TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>
                      {formatDateTime(order.updatedAt)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}
      </Stack>
      <Backdrop
        open={disabled}
        sx={{
          backdropFilter: 'saturate(0%)',
          bgcolor: 'transparent',
          zIndex: 1,
        }}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <OrderTestDialog patient={patient} />
    </PageContentLayout>
  )
}

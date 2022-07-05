import React, { useMemo, useState } from 'react'
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
} from '@mui/material'
import useDialog, { DialogProps } from 'hooks/useDialog'
import { useTests } from 'api/Tests'
import { getMenuItemsFromLabels } from 'utils/MenuItemUtil'
import { useCreateOrder } from 'api/Orders'
import Patient from 'models/Patient'
import { TestStatus } from '@generated/graphql'

type OrderTestDialogProps = Omit<DialogProps, 'onClose'> & {
  patient: Patient
}

export default function useOrderTestDialog() {
  const { Dialog, open, setOpen } = useDialog()
  const OrderTestDialog = useMemo(
    () =>
      function OrderTestDialog(props: OrderTestDialogProps) {
        const { patient, ...dialogProps } = props
        const [testId, setTestId] = useState('')
        const { tests } = useTests({
          status: { equals: TestStatus.AVAILABLE },
        })
        const [create, { loading }] = useCreateOrder()

        return (
          <Dialog {...dialogProps} maxWidth="xs" fullWidth>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                create({
                  variables: {
                    createOrderInput: {
                      patientId: patient.id,
                      testId,
                    },
                  },
                })
                setOpen(false)
              }}
            >
              <DialogTitle>Order Test</DialogTitle>
              <DialogContent sx={{ py: 1 }}>
                <Stack gap={3} mb={3}>
                  <Box>
                    <FormLabel sx={{ typography: 'caption' }}>
                      Patient
                    </FormLabel>
                    <Paper variant="outlined" sx={{ p: 3 }}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <TextField
                            variant="standard"
                            label="Last, First"
                            value={patient.lastAndFirstName}
                            InputProps={{ disableUnderline: true }}
                            margin="none"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            variant="standard"
                            label="MRN"
                            value={patient.mrn}
                            InputProps={{ disableUnderline: true }}
                            margin="none"
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Box>
                  <Box px={3}>
                    <TextField
                      variant="standard"
                      label="Test"
                      fullWidth
                      select
                      SelectProps={{ displayEmpty: true }}
                      value={testId}
                      required
                      onChange={({ target }) => {
                        setTestId(target.value)
                      }}
                      disabled={loading}
                    >
                      <MenuItem value="" disabled>
                        Select test
                      </MenuItem>
                      {getMenuItemsFromLabels(
                        tests.map(({ id, name }) => ({
                          label: name,
                          value: id,
                        })),
                      )}
                    </TextField>
                  </Box>
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button
                  color="inherit"
                  onClick={() => setOpen(false)}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={loading}
                >
                  Request Order
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        )
      },
    [Dialog, setOpen],
  )
  return { OrderTestDialog, open, setOpen }
}

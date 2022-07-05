import React, { Ref, useCallback, useEffect, useState } from 'react'
import { DataGrid, DataGridProps, GridColDef } from '@mui/x-data-grid'
import { SxProps } from '@mui/material'

export function useAvailableHeight() {
  const [target, setTarget] = useState<HTMLDivElement>(null)
  const ref = useCallback((el: HTMLDivElement) => setTarget(el), [])
  const [height, setHeight] = useState<string | number>(null)
  const getPaddingBottom = (el: HTMLElement) => {
    if (!el) return 0
    return parseInt(window.getComputedStyle(el).paddingBottom)
  }

  useEffect(() => {
    if (target) {
      let offsetHeight = target.offsetTop
      let ancestor = target.parentElement

      while (ancestor) {
        offsetHeight =
          offsetHeight +
          ancestor.offsetTop +
          getPaddingBottom(ancestor)
        ancestor = ancestor?.parentElement
      }

      setHeight(`calc(100vh - ${offsetHeight}px)`)
    }
  }, [target])

  return { height, ref }
}

interface DataTableProps extends DataGridProps {
  ref?: Ref<HTMLDivElement>
  rows: readonly {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }[]
  columns: GridColDef[]
  sx?: SxProps
  autoAvailableHeight?: boolean
  stickyHeader?: SxProps
}

export default function DataTable({
  autoAvailableHeight,
  ...props
}: DataTableProps) {
  const { ref, height } = useAvailableHeight()
  const { stickyHeader } = props

  return (
    <DataGrid
      ref={autoAvailableHeight ? ref : props.ref}
      pageSize={100}
      rowsPerPageOptions={[100]}
      scrollbarSize={4}
      checkboxSelection={false}
      density="comfortable"
      disableColumnFilter
      disableColumnMenu
      disableColumnSelector
      disableDensitySelector
      disableExtendRowFullWidth={false}
      disableSelectionOnClick
      disableVirtualization
      autoHeight={!autoAvailableHeight}
      loading={!props.columns.length || !props.rows.length}
      {...props}
      sx={{
        ...(stickyHeader
          ? {
              '& .MuiDataGrid-columnHeaders': {
                bgcolor: 'background.default',
                position: 'sticky',
                top: 0,
                zIndex: 1,
                ...stickyHeader,
              },
              '& .MuiDataGrid-main': {
                overflow: 'visible',
              },
              '& .MuiDataGrid-virtualScroller': {
                mt: '0 !important',
              },
            }
          : null),
        '& [role=cell] > div': {
          '& > *': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          overflow: 'hidden',
        },
        '& [role=cell][data-field=actions]:focus, & [role=cell][data-field=actions]:focus-within':
          {
            outline: 'none',
          },
        '& [role=row] [data-field=actions] > div': {
          visibility: 'hidden',
        },
        '& [role=row]:hover [data-field=actions] > *': {
          visibility: 'visible',
        },
        border: 0,
        height: autoAvailableHeight ? height : null,
        ...props.sx,
      }}
    />
  )
}

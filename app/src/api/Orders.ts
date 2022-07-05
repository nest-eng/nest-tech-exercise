import { gql, useMutation, useQuery } from 'components/ApolloClient'
import { useEffect, useState } from 'react'
import {
  CreateOrderInput,
  Order,
  UpdateOrderInput,
} from '@generated/graphql'

export function useOrders() {
  const { data, error, loading, refetch } = useQuery<{
    orders: Order[]
  }>(GQL.ListOrders, {
    // Always fetch latest from API.
    fetchPolicy: 'cache-and-network',
  })
  const [orders, setOrders] = useState(data?.orders ?? [])

  useEffect(() => {
    setOrders(data?.orders ?? [])
  }, [data])

  return { error, loading, orders, refetch }
}

export function useCreateOrder() {
  return useMutation<
    { createPatient: Order },
    { createOrderInput: CreateOrderInput }
  >(GQL.CreateOrder)
}

export function useUpdateOrder() {
  return useMutation<
    { updatePatient: Order },
    { updateOrderInput: UpdateOrderInput }
  >(GQL.UpdateOrder)
}

const GQL = {
  CreateOrder: gql`
    mutation CreateOrder($createOrderInput: CreateOrderInput!) {
      createOrder(createOrderInput: $createOrderInput) {
        id
      }
    }
  `,
  FindOrder: gql`
    query FindOrder($orderId: String!) {
      order(id: $orderId) {
        id
        accountId
        testId
        createdAt
        updatedAt
        status
        patientId
        Test {
          id
          type
          name
          description
        }
        Patient {
          id
          firstName
          lastName
        }
      }
    }
  `,
  ListOrders: gql`
    query ListOrders {
      orders {
        id
        accountId
        testId
        createdAt
        updatedAt
        status
        patientId
        Test {
          id
          type
          name
          description
        }
        Patient {
          id
          firstName
          lastName
        }
      }
    }
  `,
  UpdateOrder: gql`
    mutation UpdateOrder($updateOrderInput: UpdateOrderInput!) {
      updateOrder(updateOrderInput: $updateOrderInput) {
        id
        accountId
        testId
        createdAt
        updatedAt
        status
        patientId
        Test {
          id
          type
          name
          description
        }
        Patient {
          id
          firstName
          lastName
        }
      }
    }
  `,
}

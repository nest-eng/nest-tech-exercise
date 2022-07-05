import { gql, useQuery } from 'components/ApolloClient'
import { useEffect, useState } from 'react'
import { Test, TestWhereInput } from '@generated/graphql'

export function useTests(where?: TestWhereInput) {
  const { data, error, loading, refetch } = useQuery<{
    tests: Test[]
  }>(GQL.ListTests, {
    // Always fetch latest from API.
    fetchPolicy: 'cache-and-network',
    variables: { where },
  })
  const [tests, setTests] = useState(data?.tests ?? [])

  useEffect(() => {
    setTests(data?.tests ?? [])
  }, [data])

  return { error, loading, refetch, tests }
}

const GQL = {
  FindTest: gql`
    query FindTest($testId: String!) {
      test(id: $testId) {
        id
        name
        type
        description
        status
      }
    }
  `,
  ListTests: gql`
    query ListTests($where: TestWhereInput) {
      tests(where: $where) {
        id
        name
        type
        description
        status
      }
    }
  `,
}

import React, { useEffect, useMemo } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  from,
  gql as graphQl,
} from '@apollo/client'
import { ReactNode } from 'react'

export const gql = graphQl
export { useQuery } from '@apollo/client'
export { useMutation } from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>
export function getApolloClient() {
  return new Promise<ApolloClient<NormalizedCacheObject>>(
    (resolve) => {
      const checkApolloClient = () => {
        if (apolloClient) {
          return resolve(apolloClient)
        }
        setTimeout(checkApolloClient, 100)
      }
      checkApolloClient()
    },
  )
}

export function MainApolloProvider(props: { children: ReactNode }) {
  const client = useMemo(() => {
    const httpLink = new HttpLink({
      uri: 'https://localhost:8000/graphql',
    })
    return new ApolloClient({
      cache: new InMemoryCache({ addTypename: false }),
      link: from([httpLink]),
      name: 'Nest Tech Exercise',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Set `apolloClient` singleton.
  useEffect(() => {
    apolloClient = client
  }, [client])

  return (
    <ApolloProvider client={client}>{props.children}</ApolloProvider>
  )
}

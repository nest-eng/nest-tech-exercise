import { GraphqlConfig } from './common/configs/config.interface'
import { ConfigService } from '@nestjs/config'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { Injectable } from '@nestjs/common'
import { GqlOptionsFactory } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { GraphQLJSON } from 'graphql-scalars'

const origin = [
  'https://localhost:8080',
  'https://studio.apollographql.com/',
]

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}
  createGqlOptions(): ApolloDriverConfig {
    const graphqlConfig =
      this.configService.get<GraphqlConfig>('graphql')
    return {
      // schema options
      autoSchemaFile:
        graphqlConfig.schemaDestination || './src/schema.graphql',
      buildSchemaOptions: {
        numberScalarMode: 'integer',
        orphanedTypes: [],
      },
      cors: {
        credentials: true,
        origin: origin,
      },
      debug: graphqlConfig.debug,
      installSubscriptionHandlers: true, // subscription
      // Enable either the playground or the Apollo Studio Sandbox
      playground: graphqlConfig.playgroundEnabled,
      plugins: !graphqlConfig.playgroundEnabled
        ? [ApolloServerPluginLandingPageLocalDefault()]
        : [],
      resolvers: {
        JSON: GraphQLJSON,
      },
      sortSchema: graphqlConfig.sortSchema, // code first approach
    }
  }
}

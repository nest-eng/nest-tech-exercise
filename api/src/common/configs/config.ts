import type { Config } from './config.interface'

const config: Config = {
  cors: {
    enabled: true,
  },
  graphql: {
    debug: process.env.NODE_ENV !== 'production',
    playgroundEnabled: false,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  nest: {
    port: parseInt(process.env.PORT),
  },
}

export default (): Config => config

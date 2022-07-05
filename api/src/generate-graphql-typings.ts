import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { copyFileSync } from 'fs'
import { join } from 'path'
const definitionsFactory = new GraphQLDefinitionsFactory()

console.log('Generating GraphQL typings for NestJS resolvers...')
const outputPaths = [
  join(process.cwd(), './src/@generated/graphql.ts'),
  join(process.cwd(), '../app/src/@generated/graphql.ts'),
]
const sourcePath = outputPaths.shift()
definitionsFactory
  .generate({
    emitTypenameField: false,
    outputAs: 'class',
    path: sourcePath,
    typePaths: ['./src/**/*.graphql'],
    // watch: true,
  })
  .then(() => {
    // Copy typings to additional paths.
    outputPaths.forEach((path) => copyFileSync(sourcePath, path))

    // Print to output.
    const generatedPaths = [sourcePath, ...outputPaths]
    generatedPaths.forEach((path) => console.log(`  - ${path}`))
  })

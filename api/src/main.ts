import {
  NestApplicationOptions,
  ValidationPipe,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import {
  PrismaClientExceptionFilter,
  PrismaService,
} from 'nestjs-prisma'
import { AppModule } from './app.module'
import type {
  CorsConfig,
  NestConfig,
} from 'common/configs/config.interface'
import { readFileSync } from 'fs'
import { join } from 'path'

async function bootstrap() {
  let nestApplicationOptions: NestApplicationOptions = {
    bufferLogs: true,
  }

  if (process.env.NODE_ENV === 'development') {
    nestApplicationOptions = {
      ...nestApplicationOptions,
      httpsOptions: {
        cert: readFileSync(
          join(__dirname, '..', '..', 'certs', 'ssl.pem'),
        ),
        key: readFileSync(
          join(__dirname, '..', '..', 'certs', 'key.pem'),
        ),
      },
    }
  } else {
    nestApplicationOptions = {
      ...nestApplicationOptions,
      httpsOptions: {
        cert: Buffer.from(
          process.env.HTTPS_PUBLIC_CERTIFICATE,
          'base64',
        ).toString('ascii'),
        key: Buffer.from(
          process.env.HTTPS_PRIVATE_KEY,
          'base64',
        ).toString('ascii'),
      },
      // cors: CorsOptions // https://github.com/expressjs/cors#configuration-options
    }
  }

  const app = await NestFactory.create(
    AppModule,
    nestApplicationOptions,
  )

  // Validation
  app.useGlobalPipes(new ValidationPipe())

  // enable shutdown hook
  const prismaService: PrismaService = app.get(PrismaService)
  prismaService.enableShutdownHooks(app)

  // Prisma Client Exception Filter for unhandled exceptions
  const { httpAdapter } = app.get(HttpAdapterHost)
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))

  const configService = app.get(ConfigService)
  const nestConfig = configService.get<NestConfig>('nest')
  const corsConfig = configService.get<CorsConfig>('cors')

  // Cors
  if (corsConfig.enabled) {
    app.enableCors()
  }

  await app.listen(process.env.PORT || nestConfig.port)
}
bootstrap()

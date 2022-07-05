import { Prisma } from '@prisma/client'
import { Logger } from '@nestjs/common'

export function loggingMiddleware(): Prisma.Middleware {
  return async (params, next) => {
    const before = Date.now()
    const result = await next(params)
    const after = Date.now()
    const logger = new Logger()

    logger.log(
      `Prisma Query ${params.model}.${params.action} took ${
        after - before
      }ms`,
      'Prisma loggingMiddleware',
    )

    return result
  }
}

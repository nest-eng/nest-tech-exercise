// Uses unit testing pattern described in prisma docs.
// https://www.prisma.io/docs/guides/testing/unit-testing#singleton
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default prisma

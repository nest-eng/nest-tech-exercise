// Uses unit testing pattern described in prisma docs.
// https://www.prisma.io/docs/guides/testing/unit-testing#singleton
import { PrismaClient } from '@prisma/client'
import {
  DeepMockProxy,
  mockDeep,
  mockReset,
} from 'jest-mock-extended'
import prisma from './prisma-mock-client'

jest.mock('./prisma-mock-client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prismaServiceMock)
})

export const prismaServiceMock =
  prisma as unknown as DeepMockProxy<PrismaClient>

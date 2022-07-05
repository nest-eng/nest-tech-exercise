import { Account, Prisma } from '@prisma/client'
// Duplicated from node_modules/.prisma/client/index.d.ts
type PrismaAction =
  | 'findUnique'
  | 'findMany'
  | 'findFirst'
  | 'create'
  | 'createMany'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'
  | 'count'
  | 'runCommandRaw'

const nonAccountScopedResources = ['Gene', 'Account', 'User', 'Lab']
// Handle adding the accountId to the Prisma queries to enforce multi tenancy separation
export function multiTenantMiddleware(
  getLoggedInAccount: () => Promise<Account>,
): Prisma.Middleware {
  return async (params, next) => {
    const { id: accountId } = await getLoggedInAccount()

    // Enforce accountId scoping to specific models
    if (!nonAccountScopedResources.includes(params.model)) {
      if (params.action === 'findMany') {
        params.args = {
          ...params.args,
          // Add `accountId` to the where clause
          where: {
            ...params.args?.where,
            accountId,
          },
        }
      }

      // Modify where clause to use combined unique constraint of `accountId` and `id`
      // Assumption is that incoming where clause looks like `where { id }`
      const accountScopedActions: PrismaAction[] = [
        'findFirst',
        'findUnique',
        'delete',
      ]
      if (
        accountScopedActions.includes(
          params.action as PrismaAction,
        ) &&
        params.args?.where?.id !== undefined
      ) {
        params.args = {
          ...params.args,
          where: {
            accountId_id: { accountId, id: params.args.where.id },
          },
        }
      }
    }

    return next(params)
  }
}

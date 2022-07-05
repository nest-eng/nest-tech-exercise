import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AccountsService } from './accounts.service'
import { Account } from '@generated/prisma-nestjs-graphql'
import { CreateAccountInput } from './dto/create-account.input'
import { UpdateAccountInput } from './dto/update-account.input'

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Mutation(() => Account)
  createAccount(
    @Args('createAccountInput')
    createAccountInput: CreateAccountInput,
  ) {
    return this.accountsService.create(createAccountInput)
  }

  @Query(() => [Account], { name: 'accounts' })
  findAll() {
    return this.accountsService.findAll()
  }

  @Query(() => Account, { name: 'account' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.accountsService.findOne(id)
  }

  @Mutation(() => Account)
  updateAccount(
    @Args('updateAccountInput')
    updateAccountInput: UpdateAccountInput,
  ) {
    return this.accountsService.updateBy(
      { id: updateAccountInput.id },
      updateAccountInput,
    )
  }
}

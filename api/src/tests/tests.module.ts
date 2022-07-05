import { Logger, Module } from '@nestjs/common'
import { TestsService } from './tests.service'
import { TestsResolver } from './tests.resolver'
import { PatientsService } from 'patients/patients.service'
import { ConfigService } from '@nestjs/config'
import { AccountsService } from 'accounts/accounts.service'

@Module({
  providers: [
    TestsResolver,
    TestsService,
    AccountsService,
    PatientsService,
    ConfigService,
    Logger,
  ],
})
export class TestsModule {}

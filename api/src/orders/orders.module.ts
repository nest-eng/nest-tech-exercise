import { Logger, Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { OrdersResolver } from './orders.resolver'
import { PatientsService } from 'patients/patients.service'
import { ConfigService } from '@nestjs/config'
import { AccountsService } from 'accounts/accounts.service'

@Module({
  providers: [
    OrdersResolver,
    OrdersService,
    AccountsService,
    PatientsService,
    ConfigService,
    Logger,
  ],
})
export class OrdersModule {}

import { GraphQLModule } from '@nestjs/graphql'
import { Logger, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from 'nestjs-prisma'
import config from 'common/configs/config'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GqlConfigService } from './gql-config.service'
import { AccountsModule } from './accounts/accounts.module'
import { UsersModule } from './users/users.module'
import { PatientsModule } from './patients/patients.module'
import { OrdersModule } from './orders/orders.module'
import { TestsModule } from './tests/tests.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        prismaOptions: {
          errorFormat: 'pretty',
          // Enable query logging.
          log: ['query', 'info', 'warn', 'error'],
        },
      },
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),

    // Add published modules below:
    AccountsModule,
    UsersModule,
    PatientsModule,
    OrdersModule,
    TestsModule,
  ],
  providers: [Logger],
})
export class AppModule {}

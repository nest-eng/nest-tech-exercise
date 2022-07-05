import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    externalId = "externalId",
    timezone = "timezone",
    lang = "lang",
    settings = "settings"
}

export enum TestScalarFieldEnum {
    id = "id",
    type = "type",
    name = "name",
    description = "description",
    status = "status"
}

export enum TestType {
    DIAGNOSTIC = "DIAGNOSTIC",
    PRESYMPTOMATIC = "PRESYMPTOMATIC",
    CARRIER = "CARRIER",
    PHARMACOGENETICS = "PHARMACOGENETICS",
    PRENATAL = "PRENATAL",
    NEWBORN_SCREENING = "NEWBORN_SCREENING",
    PREIMPLANTATION = "PREIMPLANTATION"
}

export enum TestStatus {
    AVAILABLE = "AVAILABLE",
    UNAVAILABLE = "UNAVAILABLE"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum OrderStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    COMPLETED = "COMPLETED",
    CANCELED = "CANCELED"
}

export enum JsonNullValueInput {
    JsonNull = "JsonNull"
}

export enum JsonNullValueFilter {
    DbNull = "DbNull",
    JsonNull = "JsonNull",
    AnyNull = "AnyNull"
}

export enum Gender {
    UNKNOWN = "UNKNOWN",
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

export enum Ethnicity {
    AMERICAN_INDIAN_OR_ALASKA_NATIVE = "AMERICAN_INDIAN_OR_ALASKA_NATIVE",
    ASIAN = "ASIAN",
    BLACK_AFRICAN_AMERICAN = "BLACK_AFRICAN_AMERICAN",
    HISPANIC_OR_LATINO = "HISPANIC_OR_LATINO",
    NATIVE_HAWAIIAN_OR_PACIFIC_ISLANDER = "NATIVE_HAWAIIAN_OR_PACIFIC_ISLANDER",
    WHITE = "WHITE",
    UNKNOWN = "UNKNOWN"
}

export enum PatientScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    accountId = "accountId",
    firstName = "firstName",
    lastName = "lastName",
    mrn = "mrn",
    birthDate = "birthDate",
    ethnicity = "ethnicity",
    timezone = "timezone",
    phone = "phone",
    email = "email",
    notes = "notes",
    gender = "gender",
    lang = "lang",
    removed = "removed"
}

export enum OrderScalarFieldEnum {
    id = "id",
    accountId = "accountId",
    testId = "testId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    status = "status",
    patientId = "patientId"
}

export enum AccountScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    timezone = "timezone",
    lang = "lang",
    settings = "settings"
}

registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
registerEnumType(PatientScalarFieldEnum, { name: 'PatientScalarFieldEnum', description: undefined })
registerEnumType(Ethnicity, { name: 'Ethnicity', description: undefined })
registerEnumType(Gender, { name: 'Gender', description: undefined })
registerEnumType(JsonNullValueFilter, { name: 'JsonNullValueFilter', description: undefined })
registerEnumType(JsonNullValueInput, { name: 'JsonNullValueInput', description: undefined })
registerEnumType(OrderStatus, { name: 'OrderStatus', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TestStatus, { name: 'TestStatus', description: undefined })
registerEnumType(TestType, { name: 'TestType', description: undefined })
registerEnumType(TestScalarFieldEnum, { name: 'TestScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ArgsType()
export class AccountAggregateArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AccountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    @Field(() => AccountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    @Field(() => AccountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}

@InputType()
export class AccountCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    timezone?: true;
    @Field(() => Boolean, {nullable:true})
    lang?: true;
    @Field(() => Boolean, {nullable:true})
    settings?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class AccountCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    timezone!: number;
    @Field(() => Int, {nullable:false})
    lang!: number;
    @Field(() => Int, {nullable:false})
    settings!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class AccountCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    settings?: keyof typeof SortOrder;
}

@ObjectType()
export class AccountCount {
    @Field(() => Int, {nullable:false})
    Patients?: number;
    @Field(() => Int, {nullable:false})
    Orders?: number;
}

@InputType()
export class AccountCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@InputType()
export class AccountCreateNestedOneWithoutOrdersInput {
    @Field(() => AccountCreateWithoutOrdersInput, {nullable:true})
    @Type(() => AccountCreateWithoutOrdersInput)
    create?: InstanceType<typeof AccountCreateWithoutOrdersInput>;
    @Field(() => AccountCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutOrdersInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: InstanceType<typeof AccountWhereUniqueInput>;
}

@InputType()
export class AccountCreateNestedOneWithoutPatientsInput {
    @Field(() => AccountCreateWithoutPatientsInput, {nullable:true})
    @Type(() => AccountCreateWithoutPatientsInput)
    create?: InstanceType<typeof AccountCreateWithoutPatientsInput>;
    @Field(() => AccountCreateOrConnectWithoutPatientsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutPatientsInput)
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutPatientsInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: InstanceType<typeof AccountWhereUniqueInput>;
}

@InputType()
export class AccountCreateOrConnectWithoutOrdersInput {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountCreateWithoutOrdersInput, {nullable:false})
    @Type(() => AccountCreateWithoutOrdersInput)
    create!: InstanceType<typeof AccountCreateWithoutOrdersInput>;
}

@InputType()
export class AccountCreateOrConnectWithoutPatientsInput {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountCreateWithoutPatientsInput, {nullable:false})
    @Type(() => AccountCreateWithoutPatientsInput)
    create!: InstanceType<typeof AccountCreateWithoutPatientsInput>;
}

@InputType()
export class AccountCreateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => PatientCreateNestedManyWithoutAccountInput, {nullable:true})
    Patients?: InstanceType<typeof PatientCreateNestedManyWithoutAccountInput>;
}

@InputType()
export class AccountCreateWithoutPatientsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => OrderCreateNestedManyWithoutAccountInput, {nullable:true})
    Orders?: InstanceType<typeof OrderCreateNestedManyWithoutAccountInput>;
}

@InputType()
export class AccountCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => PatientCreateNestedManyWithoutAccountInput, {nullable:true})
    Patients?: InstanceType<typeof PatientCreateNestedManyWithoutAccountInput>;
    @Field(() => OrderCreateNestedManyWithoutAccountInput, {nullable:true})
    Orders?: InstanceType<typeof OrderCreateNestedManyWithoutAccountInput>;
}

@ArgsType()
export class AccountGroupByArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithAggregationInput>;
    @Field(() => [AccountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AccountScalarFieldEnum>;
    @Field(() => AccountScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof AccountScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AccountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    @Field(() => AccountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    @Field(() => AccountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}

@ObjectType()
export class AccountGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => String, {nullable:false})
    timezone!: string;
    @Field(() => String, {nullable:false})
    lang!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    settings!: any;
    @Field(() => AccountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregate>;
    @Field(() => AccountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregate>;
    @Field(() => AccountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregate>;
}

@InputType()
export class AccountMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    timezone?: true;
    @Field(() => Boolean, {nullable:true})
    lang?: true;
}

@ObjectType()
export class AccountMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
}

@InputType()
export class AccountMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
}

@InputType()
export class AccountMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    timezone?: true;
    @Field(() => Boolean, {nullable:true})
    lang?: true;
}

@ObjectType()
export class AccountMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
}

@InputType()
export class AccountMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
}

@InputType()
export class AccountOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    settings?: keyof typeof SortOrder;
    @Field(() => AccountCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AccountCountOrderByAggregateInput>;
    @Field(() => AccountMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AccountMaxOrderByAggregateInput>;
    @Field(() => AccountMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AccountMinOrderByAggregateInput>;
}

@InputType()
export class AccountOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    settings?: keyof typeof SortOrder;
    @Field(() => PatientOrderByRelationAggregateInput, {nullable:true})
    Patients?: InstanceType<typeof PatientOrderByRelationAggregateInput>;
    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    Orders?: InstanceType<typeof OrderOrderByRelationAggregateInput>;
}

@InputType()
export class AccountRelationFilter {
    @Field(() => AccountWhereInput, {nullable:true})
    is?: InstanceType<typeof AccountWhereInput>;
    @Field(() => AccountWhereInput, {nullable:true})
    isNot?: InstanceType<typeof AccountWhereInput>;
}

@InputType()
export class AccountScalarWhereWithAggregatesInput {
    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AccountScalarWhereWithAggregatesInput>;
    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AccountScalarWhereWithAggregatesInput>;
    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AccountScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    timezone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lang?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    settings?: InstanceType<typeof JsonWithAggregatesFilter>;
}

@InputType()
export class AccountUncheckedCreateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => PatientUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    Patients?: InstanceType<typeof PatientUncheckedCreateNestedManyWithoutAccountInput>;
}

@InputType()
export class AccountUncheckedCreateWithoutPatientsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => OrderUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutAccountInput>;
}

@InputType()
export class AccountUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => PatientUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    Patients?: InstanceType<typeof PatientUncheckedCreateNestedManyWithoutAccountInput>;
    @Field(() => OrderUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutAccountInput>;
}

@InputType()
export class AccountUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@InputType()
export class AccountUncheckedUpdateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => PatientUncheckedUpdateManyWithoutAccountInput, {nullable:true})
    Patients?: InstanceType<typeof PatientUncheckedUpdateManyWithoutAccountInput>;
}

@InputType()
export class AccountUncheckedUpdateWithoutPatientsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => OrderUncheckedUpdateManyWithoutAccountInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutAccountInput>;
}

@InputType()
export class AccountUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => PatientUncheckedUpdateManyWithoutAccountInput, {nullable:true})
    Patients?: InstanceType<typeof PatientUncheckedUpdateManyWithoutAccountInput>;
    @Field(() => OrderUncheckedUpdateManyWithoutAccountInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutAccountInput>;
}

@InputType()
export class AccountUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@InputType()
export class AccountUpdateOneWithoutOrdersInput {
    @Field(() => AccountCreateWithoutOrdersInput, {nullable:true})
    @Type(() => AccountCreateWithoutOrdersInput)
    create?: InstanceType<typeof AccountCreateWithoutOrdersInput>;
    @Field(() => AccountCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutOrdersInput>;
    @Field(() => AccountUpsertWithoutOrdersInput, {nullable:true})
    @Type(() => AccountUpsertWithoutOrdersInput)
    upsert?: InstanceType<typeof AccountUpsertWithoutOrdersInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountUpdateWithoutOrdersInput, {nullable:true})
    @Type(() => AccountUpdateWithoutOrdersInput)
    update?: InstanceType<typeof AccountUpdateWithoutOrdersInput>;
}

@InputType()
export class AccountUpdateOneWithoutPatientsInput {
    @Field(() => AccountCreateWithoutPatientsInput, {nullable:true})
    @Type(() => AccountCreateWithoutPatientsInput)
    create?: InstanceType<typeof AccountCreateWithoutPatientsInput>;
    @Field(() => AccountCreateOrConnectWithoutPatientsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutPatientsInput)
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutPatientsInput>;
    @Field(() => AccountUpsertWithoutPatientsInput, {nullable:true})
    @Type(() => AccountUpsertWithoutPatientsInput)
    upsert?: InstanceType<typeof AccountUpsertWithoutPatientsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountUpdateWithoutPatientsInput, {nullable:true})
    @Type(() => AccountUpdateWithoutPatientsInput)
    update?: InstanceType<typeof AccountUpdateWithoutPatientsInput>;
}

@InputType()
export class AccountUpdateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => PatientUpdateManyWithoutAccountInput, {nullable:true})
    Patients?: InstanceType<typeof PatientUpdateManyWithoutAccountInput>;
}

@InputType()
export class AccountUpdateWithoutPatientsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => OrderUpdateManyWithoutAccountInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUpdateManyWithoutAccountInput>;
}

@InputType()
export class AccountUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
    @Field(() => PatientUpdateManyWithoutAccountInput, {nullable:true})
    Patients?: InstanceType<typeof PatientUpdateManyWithoutAccountInput>;
    @Field(() => OrderUpdateManyWithoutAccountInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUpdateManyWithoutAccountInput>;
}

@InputType()
export class AccountUpsertWithoutOrdersInput {
    @Field(() => AccountUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => AccountUpdateWithoutOrdersInput)
    update!: InstanceType<typeof AccountUpdateWithoutOrdersInput>;
    @Field(() => AccountCreateWithoutOrdersInput, {nullable:false})
    @Type(() => AccountCreateWithoutOrdersInput)
    create!: InstanceType<typeof AccountCreateWithoutOrdersInput>;
}

@InputType()
export class AccountUpsertWithoutPatientsInput {
    @Field(() => AccountUpdateWithoutPatientsInput, {nullable:false})
    @Type(() => AccountUpdateWithoutPatientsInput)
    update!: InstanceType<typeof AccountUpdateWithoutPatientsInput>;
    @Field(() => AccountCreateWithoutPatientsInput, {nullable:false})
    @Type(() => AccountCreateWithoutPatientsInput)
    create!: InstanceType<typeof AccountCreateWithoutPatientsInput>;
}

@InputType()
export class AccountWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class AccountWhereInput {
    @Field(() => [AccountWhereInput], {nullable:true})
    AND?: Array<AccountWhereInput>;
    @Field(() => [AccountWhereInput], {nullable:true})
    OR?: Array<AccountWhereInput>;
    @Field(() => [AccountWhereInput], {nullable:true})
    NOT?: Array<AccountWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    timezone?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lang?: InstanceType<typeof StringFilter>;
    @Field(() => JsonFilter, {nullable:true})
    settings?: InstanceType<typeof JsonFilter>;
    @Field(() => PatientListRelationFilter, {nullable:true})
    Patients?: InstanceType<typeof PatientListRelationFilter>;
    @Field(() => OrderListRelationFilter, {nullable:true})
    Orders?: InstanceType<typeof OrderListRelationFilter>;
}

@ObjectType()
export class Account {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:false,defaultValue:'America/Los_Angeles'})
    timezone!: string;
    @Field(() => String, {nullable:false,defaultValue:'en-US'})
    lang!: string;
    @Field(() => GraphQLJSON, {nullable:false,defaultValue:'{}'})
    settings!: any;
    @Field(() => [Patient], {nullable:true})
    Patients?: Array<Patient>;
    @Field(() => [Order], {nullable:true})
    Orders?: Array<Order>;
    @Field(() => AccountCount, {nullable:false})
    _count?: InstanceType<typeof AccountCount>;
}

@ObjectType()
export class AggregateAccount {
    @Field(() => AccountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregate>;
    @Field(() => AccountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregate>;
    @Field(() => AccountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregate>;
}

@ArgsType()
export class CreateManyAccountArgs {
    @Field(() => [AccountCreateManyInput], {nullable:false})
    @Type(() => AccountCreateManyInput)
    data!: Array<AccountCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneAccountArgs {
    @Field(() => AccountCreateInput, {nullable:false})
    @Type(() => AccountCreateInput)
    data!: InstanceType<typeof AccountCreateInput>;
}

@ArgsType()
export class DeleteManyAccountArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: InstanceType<typeof AccountWhereInput>;
}

@ArgsType()
export class DeleteOneAccountArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class FindFirstAccountArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindManyAccountArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueAccountArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyAccountArgs {
    @Field(() => AccountUpdateManyMutationInput, {nullable:false})
    @Type(() => AccountUpdateManyMutationInput)
    data!: InstanceType<typeof AccountUpdateManyMutationInput>;
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: InstanceType<typeof AccountWhereInput>;
}

@ArgsType()
export class UpdateOneAccountArgs {
    @Field(() => AccountUpdateInput, {nullable:false})
    @Type(() => AccountUpdateInput)
    data!: InstanceType<typeof AccountUpdateInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneAccountArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountCreateInput, {nullable:false})
    @Type(() => AccountCreateInput)
    create!: InstanceType<typeof AccountCreateInput>;
    @Field(() => AccountUpdateInput, {nullable:false})
    @Type(() => AccountUpdateInput)
    update!: InstanceType<typeof AccountUpdateInput>;
}

@ObjectType()
export class AggregateOrder {
    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregate>;
    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregate>;
    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregate>;
}

@ArgsType()
export class CreateManyOrderArgs {
    @Field(() => [OrderCreateManyInput], {nullable:false})
    @Type(() => OrderCreateManyInput)
    data!: Array<OrderCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneOrderArgs {
    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    data!: InstanceType<typeof OrderCreateInput>;
}

@ArgsType()
export class DeleteManyOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
}

@ArgsType()
export class DeleteOneOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
}

@ArgsType()
export class FindFirstOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindManyOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
}

@ArgsType()
export class OrderAggregateArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}

@InputType()
export class OrderCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    accountId?: true;
    @Field(() => Boolean, {nullable:true})
    testId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    patientId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class OrderCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    accountId!: number;
    @Field(() => Int, {nullable:false})
    testId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    patientId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class OrderCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    testId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patientId?: keyof typeof SortOrder;
}

@InputType()
export class OrderCreateManyAccountInputEnvelope {
    @Field(() => [OrderCreateManyAccountInput], {nullable:false})
    @Type(() => OrderCreateManyAccountInput)
    data!: Array<OrderCreateManyAccountInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class OrderCreateManyAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    testId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:false})
    patientId!: string;
}

@InputType()
export class OrderCreateManyPatientInputEnvelope {
    @Field(() => [OrderCreateManyPatientInput], {nullable:false})
    @Type(() => OrderCreateManyPatientInput)
    data!: Array<OrderCreateManyPatientInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class OrderCreateManyPatientInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:false})
    testId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
}

@InputType()
export class OrderCreateManyTestInputEnvelope {
    @Field(() => [OrderCreateManyTestInput], {nullable:false})
    @Type(() => OrderCreateManyTestInput)
    data!: Array<OrderCreateManyTestInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class OrderCreateManyTestInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:false})
    patientId!: string;
}

@InputType()
export class OrderCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:false})
    testId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:false})
    patientId!: string;
}

@InputType()
export class OrderCreateNestedManyWithoutAccountInput {
    @Field(() => [OrderCreateWithoutAccountInput], {nullable:true})
    @Type(() => OrderCreateWithoutAccountInput)
    create?: Array<OrderCreateWithoutAccountInput>;
    @Field(() => [OrderCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutAccountInput>;
    @Field(() => OrderCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyAccountInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyAccountInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
}

@InputType()
export class OrderCreateNestedManyWithoutPatientInput {
    @Field(() => [OrderCreateWithoutPatientInput], {nullable:true})
    @Type(() => OrderCreateWithoutPatientInput)
    create?: Array<OrderCreateWithoutPatientInput>;
    @Field(() => [OrderCreateOrConnectWithoutPatientInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPatientInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutPatientInput>;
    @Field(() => OrderCreateManyPatientInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyPatientInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyPatientInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
}

@InputType()
export class OrderCreateNestedManyWithoutTestInput {
    @Field(() => [OrderCreateWithoutTestInput], {nullable:true})
    @Type(() => OrderCreateWithoutTestInput)
    create?: Array<OrderCreateWithoutTestInput>;
    @Field(() => [OrderCreateOrConnectWithoutTestInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutTestInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutTestInput>;
    @Field(() => OrderCreateManyTestInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyTestInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyTestInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
}

@InputType()
export class OrderCreateOrConnectWithoutAccountInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderCreateWithoutAccountInput, {nullable:false})
    @Type(() => OrderCreateWithoutAccountInput)
    create!: InstanceType<typeof OrderCreateWithoutAccountInput>;
}

@InputType()
export class OrderCreateOrConnectWithoutPatientInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderCreateWithoutPatientInput, {nullable:false})
    @Type(() => OrderCreateWithoutPatientInput)
    create!: InstanceType<typeof OrderCreateWithoutPatientInput>;
}

@InputType()
export class OrderCreateOrConnectWithoutTestInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderCreateWithoutTestInput, {nullable:false})
    @Type(() => OrderCreateWithoutTestInput)
    create!: InstanceType<typeof OrderCreateWithoutTestInput>;
}

@InputType()
export class OrderCreateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestCreateNestedOneWithoutOrderInput, {nullable:false})
    Test!: InstanceType<typeof TestCreateNestedOneWithoutOrderInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => PatientCreateNestedOneWithoutOrdersInput, {nullable:false})
    Patient!: InstanceType<typeof PatientCreateNestedOneWithoutOrdersInput>;
}

@InputType()
export class OrderCreateWithoutPatientInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => AccountCreateNestedOneWithoutOrdersInput, {nullable:true})
    Account?: InstanceType<typeof AccountCreateNestedOneWithoutOrdersInput>;
    @Field(() => TestCreateNestedOneWithoutOrderInput, {nullable:false})
    Test!: InstanceType<typeof TestCreateNestedOneWithoutOrderInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
}

@InputType()
export class OrderCreateWithoutTestInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => AccountCreateNestedOneWithoutOrdersInput, {nullable:true})
    Account?: InstanceType<typeof AccountCreateNestedOneWithoutOrdersInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => PatientCreateNestedOneWithoutOrdersInput, {nullable:false})
    Patient!: InstanceType<typeof PatientCreateNestedOneWithoutOrdersInput>;
}

@InputType()
export class OrderCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => AccountCreateNestedOneWithoutOrdersInput, {nullable:true})
    Account?: InstanceType<typeof AccountCreateNestedOneWithoutOrdersInput>;
    @Field(() => TestCreateNestedOneWithoutOrderInput, {nullable:false})
    Test!: InstanceType<typeof TestCreateNestedOneWithoutOrderInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => PatientCreateNestedOneWithoutOrdersInput, {nullable:false})
    Patient!: InstanceType<typeof PatientCreateNestedOneWithoutOrdersInput>;
}

@ArgsType()
export class OrderGroupByArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithAggregationInput>;
    @Field(() => [OrderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderScalarFieldEnum>;
    @Field(() => OrderScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof OrderScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}

@ObjectType()
export class OrderGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:false})
    testId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => String, {nullable:false})
    patientId!: string;
    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregate>;
    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregate>;
    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregate>;
}

@InputType()
export class OrderListRelationFilter {
    @Field(() => OrderWhereInput, {nullable:true})
    every?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    some?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    none?: InstanceType<typeof OrderWhereInput>;
}

@InputType()
export class OrderMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    accountId?: true;
    @Field(() => Boolean, {nullable:true})
    testId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    patientId?: true;
}

@ObjectType()
export class OrderMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    testId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:true})
    patientId?: string;
}

@InputType()
export class OrderMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    testId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patientId?: keyof typeof SortOrder;
}

@InputType()
export class OrderMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    accountId?: true;
    @Field(() => Boolean, {nullable:true})
    testId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    patientId?: true;
}

@ObjectType()
export class OrderMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    testId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:true})
    patientId?: string;
}

@InputType()
export class OrderMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    testId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patientId?: keyof typeof SortOrder;
}

@InputType()
export class OrderOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class OrderOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    testId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patientId?: keyof typeof SortOrder;
    @Field(() => OrderCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountOrderByAggregateInput>;
    @Field(() => OrderMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxOrderByAggregateInput>;
    @Field(() => OrderMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinOrderByAggregateInput>;
}

@InputType()
export class OrderOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => AccountOrderByWithRelationInput, {nullable:true})
    Account?: InstanceType<typeof AccountOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    testId?: keyof typeof SortOrder;
    @Field(() => TestOrderByWithRelationInput, {nullable:true})
    Test?: InstanceType<typeof TestOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patientId?: keyof typeof SortOrder;
    @Field(() => PatientOrderByWithRelationInput, {nullable:true})
    Patient?: InstanceType<typeof PatientOrderByWithRelationInput>;
}

@InputType()
export class OrderScalarWhereWithAggregatesInput {
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    accountId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    testId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => EnumOrderStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    patientId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class OrderScalarWhereInput {
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    AND?: Array<OrderScalarWhereInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    OR?: Array<OrderScalarWhereInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    NOT?: Array<OrderScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    accountId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    testId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => StringFilter, {nullable:true})
    patientId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class OrderUncheckedCreateNestedManyWithoutAccountInput {
    @Field(() => [OrderCreateWithoutAccountInput], {nullable:true})
    @Type(() => OrderCreateWithoutAccountInput)
    create?: Array<OrderCreateWithoutAccountInput>;
    @Field(() => [OrderCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutAccountInput>;
    @Field(() => OrderCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyAccountInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyAccountInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
}

@InputType()
export class OrderUncheckedCreateNestedManyWithoutPatientInput {
    @Field(() => [OrderCreateWithoutPatientInput], {nullable:true})
    @Type(() => OrderCreateWithoutPatientInput)
    create?: Array<OrderCreateWithoutPatientInput>;
    @Field(() => [OrderCreateOrConnectWithoutPatientInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPatientInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutPatientInput>;
    @Field(() => OrderCreateManyPatientInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyPatientInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyPatientInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
}

@InputType()
export class OrderUncheckedCreateNestedManyWithoutTestInput {
    @Field(() => [OrderCreateWithoutTestInput], {nullable:true})
    @Type(() => OrderCreateWithoutTestInput)
    create?: Array<OrderCreateWithoutTestInput>;
    @Field(() => [OrderCreateOrConnectWithoutTestInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutTestInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutTestInput>;
    @Field(() => OrderCreateManyTestInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyTestInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyTestInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
}

@InputType()
export class OrderUncheckedCreateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    testId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:false})
    patientId!: string;
}

@InputType()
export class OrderUncheckedCreateWithoutPatientInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:false})
    testId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
}

@InputType()
export class OrderUncheckedCreateWithoutTestInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:false})
    patientId!: string;
}

@InputType()
export class OrderUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:false})
    testId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:false})
    patientId!: string;
}

@InputType()
export class OrderUncheckedUpdateManyWithoutAccountInput {
    @Field(() => [OrderCreateWithoutAccountInput], {nullable:true})
    @Type(() => OrderCreateWithoutAccountInput)
    create?: Array<OrderCreateWithoutAccountInput>;
    @Field(() => [OrderCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutAccountInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutAccountInput>;
    @Field(() => OrderCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyAccountInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyAccountInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutAccountInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutAccountInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUncheckedUpdateManyWithoutOrderInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:true})
    patientId?: string;
}

@InputType()
export class OrderUncheckedUpdateManyWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    testId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:true})
    patientId?: string;
}

@InputType()
export class OrderUncheckedUpdateManyWithoutPatientInput {
    @Field(() => [OrderCreateWithoutPatientInput], {nullable:true})
    @Type(() => OrderCreateWithoutPatientInput)
    create?: Array<OrderCreateWithoutPatientInput>;
    @Field(() => [OrderCreateOrConnectWithoutPatientInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPatientInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutPatientInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutPatientInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutPatientInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutPatientInput>;
    @Field(() => OrderCreateManyPatientInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyPatientInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyPatientInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutPatientInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutPatientInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutPatientInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutPatientInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutPatientInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutPatientInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUncheckedUpdateManyWithoutTestInput {
    @Field(() => [OrderCreateWithoutTestInput], {nullable:true})
    @Type(() => OrderCreateWithoutTestInput)
    create?: Array<OrderCreateWithoutTestInput>;
    @Field(() => [OrderCreateOrConnectWithoutTestInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutTestInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutTestInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutTestInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutTestInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutTestInput>;
    @Field(() => OrderCreateManyTestInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyTestInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyTestInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutTestInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutTestInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutTestInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutTestInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutTestInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutTestInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    testId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:true})
    patientId?: string;
}

@InputType()
export class OrderUncheckedUpdateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    testId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:true})
    patientId?: string;
}

@InputType()
export class OrderUncheckedUpdateWithoutPatientInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    testId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
}

@InputType()
export class OrderUncheckedUpdateWithoutTestInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:true})
    patientId?: string;
}

@InputType()
export class OrderUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    testId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => String, {nullable:true})
    patientId?: string;
}

@InputType()
export class OrderUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
}

@InputType()
export class OrderUpdateManyWithWhereWithoutAccountInput {
    @Field(() => OrderScalarWhereInput, {nullable:false})
    @Type(() => OrderScalarWhereInput)
    where!: InstanceType<typeof OrderScalarWhereInput>;
    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: InstanceType<typeof OrderUpdateManyMutationInput>;
}

@InputType()
export class OrderUpdateManyWithWhereWithoutPatientInput {
    @Field(() => OrderScalarWhereInput, {nullable:false})
    @Type(() => OrderScalarWhereInput)
    where!: InstanceType<typeof OrderScalarWhereInput>;
    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: InstanceType<typeof OrderUpdateManyMutationInput>;
}

@InputType()
export class OrderUpdateManyWithWhereWithoutTestInput {
    @Field(() => OrderScalarWhereInput, {nullable:false})
    @Type(() => OrderScalarWhereInput)
    where!: InstanceType<typeof OrderScalarWhereInput>;
    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: InstanceType<typeof OrderUpdateManyMutationInput>;
}

@InputType()
export class OrderUpdateManyWithoutAccountInput {
    @Field(() => [OrderCreateWithoutAccountInput], {nullable:true})
    @Type(() => OrderCreateWithoutAccountInput)
    create?: Array<OrderCreateWithoutAccountInput>;
    @Field(() => [OrderCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutAccountInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutAccountInput>;
    @Field(() => OrderCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyAccountInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyAccountInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutAccountInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutAccountInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUpdateManyWithoutPatientInput {
    @Field(() => [OrderCreateWithoutPatientInput], {nullable:true})
    @Type(() => OrderCreateWithoutPatientInput)
    create?: Array<OrderCreateWithoutPatientInput>;
    @Field(() => [OrderCreateOrConnectWithoutPatientInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPatientInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutPatientInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutPatientInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutPatientInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutPatientInput>;
    @Field(() => OrderCreateManyPatientInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyPatientInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyPatientInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutPatientInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutPatientInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutPatientInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutPatientInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutPatientInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutPatientInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUpdateManyWithoutTestInput {
    @Field(() => [OrderCreateWithoutTestInput], {nullable:true})
    @Type(() => OrderCreateWithoutTestInput)
    create?: Array<OrderCreateWithoutTestInput>;
    @Field(() => [OrderCreateOrConnectWithoutTestInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutTestInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutTestInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutTestInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutTestInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutTestInput>;
    @Field(() => OrderCreateManyTestInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyTestInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyTestInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutTestInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutTestInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutTestInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutTestInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutTestInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutTestInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUpdateWithWhereUniqueWithoutAccountInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderUpdateWithoutAccountInput, {nullable:false})
    @Type(() => OrderUpdateWithoutAccountInput)
    data!: InstanceType<typeof OrderUpdateWithoutAccountInput>;
}

@InputType()
export class OrderUpdateWithWhereUniqueWithoutPatientInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderUpdateWithoutPatientInput, {nullable:false})
    @Type(() => OrderUpdateWithoutPatientInput)
    data!: InstanceType<typeof OrderUpdateWithoutPatientInput>;
}

@InputType()
export class OrderUpdateWithWhereUniqueWithoutTestInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderUpdateWithoutTestInput, {nullable:false})
    @Type(() => OrderUpdateWithoutTestInput)
    data!: InstanceType<typeof OrderUpdateWithoutTestInput>;
}

@InputType()
export class OrderUpdateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestUpdateOneRequiredWithoutOrderInput, {nullable:true})
    Test?: InstanceType<typeof TestUpdateOneRequiredWithoutOrderInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => PatientUpdateOneRequiredWithoutOrdersInput, {nullable:true})
    Patient?: InstanceType<typeof PatientUpdateOneRequiredWithoutOrdersInput>;
}

@InputType()
export class OrderUpdateWithoutPatientInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => AccountUpdateOneWithoutOrdersInput, {nullable:true})
    Account?: InstanceType<typeof AccountUpdateOneWithoutOrdersInput>;
    @Field(() => TestUpdateOneRequiredWithoutOrderInput, {nullable:true})
    Test?: InstanceType<typeof TestUpdateOneRequiredWithoutOrderInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
}

@InputType()
export class OrderUpdateWithoutTestInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => AccountUpdateOneWithoutOrdersInput, {nullable:true})
    Account?: InstanceType<typeof AccountUpdateOneWithoutOrdersInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => PatientUpdateOneRequiredWithoutOrdersInput, {nullable:true})
    Patient?: InstanceType<typeof PatientUpdateOneRequiredWithoutOrdersInput>;
}

@InputType()
export class OrderUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => AccountUpdateOneWithoutOrdersInput, {nullable:true})
    Account?: InstanceType<typeof AccountUpdateOneWithoutOrdersInput>;
    @Field(() => TestUpdateOneRequiredWithoutOrderInput, {nullable:true})
    Test?: InstanceType<typeof TestUpdateOneRequiredWithoutOrderInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => PatientUpdateOneRequiredWithoutOrdersInput, {nullable:true})
    Patient?: InstanceType<typeof PatientUpdateOneRequiredWithoutOrdersInput>;
}

@InputType()
export class OrderUpsertWithWhereUniqueWithoutAccountInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderUpdateWithoutAccountInput, {nullable:false})
    @Type(() => OrderUpdateWithoutAccountInput)
    update!: InstanceType<typeof OrderUpdateWithoutAccountInput>;
    @Field(() => OrderCreateWithoutAccountInput, {nullable:false})
    @Type(() => OrderCreateWithoutAccountInput)
    create!: InstanceType<typeof OrderCreateWithoutAccountInput>;
}

@InputType()
export class OrderUpsertWithWhereUniqueWithoutPatientInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderUpdateWithoutPatientInput, {nullable:false})
    @Type(() => OrderUpdateWithoutPatientInput)
    update!: InstanceType<typeof OrderUpdateWithoutPatientInput>;
    @Field(() => OrderCreateWithoutPatientInput, {nullable:false})
    @Type(() => OrderCreateWithoutPatientInput)
    create!: InstanceType<typeof OrderCreateWithoutPatientInput>;
}

@InputType()
export class OrderUpsertWithWhereUniqueWithoutTestInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderUpdateWithoutTestInput, {nullable:false})
    @Type(() => OrderUpdateWithoutTestInput)
    update!: InstanceType<typeof OrderUpdateWithoutTestInput>;
    @Field(() => OrderCreateWithoutTestInput, {nullable:false})
    @Type(() => OrderCreateWithoutTestInput)
    create!: InstanceType<typeof OrderCreateWithoutTestInput>;
}

@InputType()
export class OrderWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class OrderWhereInput {
    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    accountId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => AccountRelationFilter, {nullable:true})
    Account?: InstanceType<typeof AccountRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    testId?: InstanceType<typeof StringFilter>;
    @Field(() => TestRelationFilter, {nullable:true})
    Test?: InstanceType<typeof TestRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => StringFilter, {nullable:true})
    patientId?: InstanceType<typeof StringFilter>;
    @Field(() => PatientRelationFilter, {nullable:true})
    Patient?: InstanceType<typeof PatientRelationFilter>;
}

@ObjectType()
export class Order {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    accountId!: string | null;
    @Field(() => Account, {nullable:true})
    Account?: InstanceType<typeof Account> | null;
    @Field(() => String, {nullable:false})
    testId!: string;
    @Field(() => Test, {nullable:false})
    Test?: InstanceType<typeof Test>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => OrderStatus, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof OrderStatus;
    @Field(() => String, {nullable:false})
    patientId!: string;
    @Field(() => Patient, {nullable:false})
    Patient?: InstanceType<typeof Patient>;
}

@ArgsType()
export class UpdateManyOrderArgs {
    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: InstanceType<typeof OrderUpdateManyMutationInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
}

@ArgsType()
export class UpdateOneOrderArgs {
    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    data!: InstanceType<typeof OrderUpdateInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    create!: InstanceType<typeof OrderCreateInput>;
    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    update!: InstanceType<typeof OrderUpdateInput>;
}

@ObjectType()
export class AggregatePatient {
    @Field(() => PatientCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PatientCountAggregate>;
    @Field(() => PatientMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PatientMinAggregate>;
    @Field(() => PatientMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PatientMaxAggregate>;
}

@ArgsType()
export class CreateManyPatientArgs {
    @Field(() => [PatientCreateManyInput], {nullable:false})
    @Type(() => PatientCreateManyInput)
    data!: Array<PatientCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePatientArgs {
    @Field(() => PatientCreateInput, {nullable:false})
    @Type(() => PatientCreateInput)
    data!: InstanceType<typeof PatientCreateInput>;
}

@ArgsType()
export class DeleteManyPatientArgs {
    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: InstanceType<typeof PatientWhereInput>;
}

@ArgsType()
export class DeleteOnePatientArgs {
    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: InstanceType<typeof PatientWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPatientArgs {
    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: InstanceType<typeof PatientWhereInput>;
    @Field(() => [PatientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PatientOrderByWithRelationInput>;
    @Field(() => PatientWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PatientWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PatientScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PatientScalarFieldEnum>;
}

@ArgsType()
export class FindManyPatientArgs {
    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: InstanceType<typeof PatientWhereInput>;
    @Field(() => [PatientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PatientOrderByWithRelationInput>;
    @Field(() => PatientWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PatientWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PatientScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PatientScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePatientArgs {
    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: InstanceType<typeof PatientWhereUniqueInput>;
}

@ArgsType()
export class PatientAggregateArgs {
    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: InstanceType<typeof PatientWhereInput>;
    @Field(() => [PatientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PatientOrderByWithRelationInput>;
    @Field(() => PatientWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PatientWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PatientCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PatientCountAggregateInput>;
    @Field(() => PatientMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PatientMinAggregateInput>;
    @Field(() => PatientMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PatientMaxAggregateInput>;
}

@InputType()
export class PatientCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    accountId?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    mrn?: true;
    @Field(() => Boolean, {nullable:true})
    birthDate?: true;
    @Field(() => Boolean, {nullable:true})
    ethnicity?: true;
    @Field(() => Boolean, {nullable:true})
    timezone?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    notes?: true;
    @Field(() => Boolean, {nullable:true})
    gender?: true;
    @Field(() => Boolean, {nullable:true})
    lang?: true;
    @Field(() => Boolean, {nullable:true})
    removed?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PatientCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    accountId!: number;
    @Field(() => Int, {nullable:false})
    firstName!: number;
    @Field(() => Int, {nullable:false})
    lastName!: number;
    @Field(() => Int, {nullable:false})
    mrn!: number;
    @Field(() => Int, {nullable:false})
    birthDate!: number;
    @Field(() => Int, {nullable:false})
    ethnicity!: number;
    @Field(() => Int, {nullable:false})
    timezone!: number;
    @Field(() => Int, {nullable:false})
    phone!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    notes!: number;
    @Field(() => Int, {nullable:false})
    gender!: number;
    @Field(() => Int, {nullable:false})
    lang!: number;
    @Field(() => Int, {nullable:false})
    removed!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PatientCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mrn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ethnicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    removed?: keyof typeof SortOrder;
}

@ObjectType()
export class PatientCount {
    @Field(() => Int, {nullable:false})
    Orders?: number;
}

@InputType()
export class PatientCreateManyAccountInputEnvelope {
    @Field(() => [PatientCreateManyAccountInput], {nullable:false})
    @Type(() => PatientCreateManyAccountInput)
    data!: Array<PatientCreateManyAccountInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PatientCreateManyAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientCreateNestedManyWithoutAccountInput {
    @Field(() => [PatientCreateWithoutAccountInput], {nullable:true})
    @Type(() => PatientCreateWithoutAccountInput)
    create?: Array<PatientCreateWithoutAccountInput>;
    @Field(() => [PatientCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => PatientCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<PatientCreateOrConnectWithoutAccountInput>;
    @Field(() => PatientCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => PatientCreateManyAccountInputEnvelope)
    createMany?: InstanceType<typeof PatientCreateManyAccountInputEnvelope>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    connect?: Array<PatientWhereUniqueInput>;
}

@InputType()
export class PatientCreateNestedOneWithoutOrdersInput {
    @Field(() => PatientCreateWithoutOrdersInput, {nullable:true})
    @Type(() => PatientCreateWithoutOrdersInput)
    create?: InstanceType<typeof PatientCreateWithoutOrdersInput>;
    @Field(() => PatientCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => PatientCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: InstanceType<typeof PatientCreateOrConnectWithoutOrdersInput>;
    @Field(() => PatientWhereUniqueInput, {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    connect?: InstanceType<typeof PatientWhereUniqueInput>;
}

@InputType()
export class PatientCreateOrConnectWithoutAccountInput {
    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: InstanceType<typeof PatientWhereUniqueInput>;
    @Field(() => PatientCreateWithoutAccountInput, {nullable:false})
    @Type(() => PatientCreateWithoutAccountInput)
    create!: InstanceType<typeof PatientCreateWithoutAccountInput>;
}

@InputType()
export class PatientCreateOrConnectWithoutOrdersInput {
    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: InstanceType<typeof PatientWhereUniqueInput>;
    @Field(() => PatientCreateWithoutOrdersInput, {nullable:false})
    @Type(() => PatientCreateWithoutOrdersInput)
    create!: InstanceType<typeof PatientCreateWithoutOrdersInput>;
}

@InputType()
export class PatientCreateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => OrderCreateNestedManyWithoutPatientInput, {nullable:true})
    Orders?: InstanceType<typeof OrderCreateNestedManyWithoutPatientInput>;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientCreateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => AccountCreateNestedOneWithoutPatientsInput, {nullable:true})
    Account?: InstanceType<typeof AccountCreateNestedOneWithoutPatientsInput>;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => AccountCreateNestedOneWithoutPatientsInput, {nullable:true})
    Account?: InstanceType<typeof AccountCreateNestedOneWithoutPatientsInput>;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => OrderCreateNestedManyWithoutPatientInput, {nullable:true})
    Orders?: InstanceType<typeof OrderCreateNestedManyWithoutPatientInput>;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@ArgsType()
export class PatientGroupByArgs {
    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: InstanceType<typeof PatientWhereInput>;
    @Field(() => [PatientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PatientOrderByWithAggregationInput>;
    @Field(() => [PatientScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PatientScalarFieldEnum>;
    @Field(() => PatientScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PatientScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PatientCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PatientCountAggregateInput>;
    @Field(() => PatientMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PatientMinAggregateInput>;
    @Field(() => PatientMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PatientMaxAggregateInput>;
}

@ObjectType()
export class PatientGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:false})
    timezone!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:false})
    gender!: keyof typeof Gender;
    @Field(() => String, {nullable:false})
    lang!: string;
    @Field(() => Boolean, {nullable:false})
    removed!: boolean;
    @Field(() => PatientCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PatientCountAggregate>;
    @Field(() => PatientMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PatientMinAggregate>;
    @Field(() => PatientMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PatientMaxAggregate>;
}

@InputType()
export class PatientListRelationFilter {
    @Field(() => PatientWhereInput, {nullable:true})
    every?: InstanceType<typeof PatientWhereInput>;
    @Field(() => PatientWhereInput, {nullable:true})
    some?: InstanceType<typeof PatientWhereInput>;
    @Field(() => PatientWhereInput, {nullable:true})
    none?: InstanceType<typeof PatientWhereInput>;
}

@InputType()
export class PatientMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    accountId?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    mrn?: true;
    @Field(() => Boolean, {nullable:true})
    birthDate?: true;
    @Field(() => Boolean, {nullable:true})
    ethnicity?: true;
    @Field(() => Boolean, {nullable:true})
    timezone?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    notes?: true;
    @Field(() => Boolean, {nullable:true})
    gender?: true;
    @Field(() => Boolean, {nullable:true})
    lang?: true;
    @Field(() => Boolean, {nullable:true})
    removed?: true;
}

@ObjectType()
export class PatientMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mrn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ethnicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    removed?: keyof typeof SortOrder;
}

@InputType()
export class PatientMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    accountId?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    mrn?: true;
    @Field(() => Boolean, {nullable:true})
    birthDate?: true;
    @Field(() => Boolean, {nullable:true})
    ethnicity?: true;
    @Field(() => Boolean, {nullable:true})
    timezone?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    notes?: true;
    @Field(() => Boolean, {nullable:true})
    gender?: true;
    @Field(() => Boolean, {nullable:true})
    lang?: true;
    @Field(() => Boolean, {nullable:true})
    removed?: true;
}

@ObjectType()
export class PatientMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mrn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ethnicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    removed?: keyof typeof SortOrder;
}

@InputType()
export class PatientOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PatientOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mrn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ethnicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    removed?: keyof typeof SortOrder;
    @Field(() => PatientCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PatientCountOrderByAggregateInput>;
    @Field(() => PatientMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PatientMaxOrderByAggregateInput>;
    @Field(() => PatientMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PatientMinOrderByAggregateInput>;
}

@InputType()
export class PatientOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
    @Field(() => AccountOrderByWithRelationInput, {nullable:true})
    Account?: InstanceType<typeof AccountOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mrn?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ethnicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    Orders?: InstanceType<typeof OrderOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    removed?: keyof typeof SortOrder;
}

@InputType()
export class PatientRelationFilter {
    @Field(() => PatientWhereInput, {nullable:true})
    is?: InstanceType<typeof PatientWhereInput>;
    @Field(() => PatientWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PatientWhereInput>;
}

@InputType()
export class PatientScalarWhereWithAggregatesInput {
    @Field(() => [PatientScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PatientScalarWhereWithAggregatesInput>;
    @Field(() => [PatientScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PatientScalarWhereWithAggregatesInput>;
    @Field(() => [PatientScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PatientScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    accountId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    mrn?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    birthDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => EnumEthnicityNullableWithAggregatesFilter, {nullable:true})
    ethnicity?: InstanceType<typeof EnumEthnicityNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    timezone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumGenderWithAggregatesFilter, {nullable:true})
    gender?: InstanceType<typeof EnumGenderWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lang?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    removed?: InstanceType<typeof BoolWithAggregatesFilter>;
}

@InputType()
export class PatientScalarWhereInput {
    @Field(() => [PatientScalarWhereInput], {nullable:true})
    AND?: Array<PatientScalarWhereInput>;
    @Field(() => [PatientScalarWhereInput], {nullable:true})
    OR?: Array<PatientScalarWhereInput>;
    @Field(() => [PatientScalarWhereInput], {nullable:true})
    NOT?: Array<PatientScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    accountId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    mrn?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    birthDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EnumEthnicityNullableFilter, {nullable:true})
    ethnicity?: InstanceType<typeof EnumEthnicityNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    timezone?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    email?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    notes?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumGenderFilter, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFilter>;
    @Field(() => StringFilter, {nullable:true})
    lang?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    removed?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class PatientUncheckedCreateNestedManyWithoutAccountInput {
    @Field(() => [PatientCreateWithoutAccountInput], {nullable:true})
    @Type(() => PatientCreateWithoutAccountInput)
    create?: Array<PatientCreateWithoutAccountInput>;
    @Field(() => [PatientCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => PatientCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<PatientCreateOrConnectWithoutAccountInput>;
    @Field(() => PatientCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => PatientCreateManyAccountInputEnvelope)
    createMany?: InstanceType<typeof PatientCreateManyAccountInputEnvelope>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    connect?: Array<PatientWhereUniqueInput>;
}

@InputType()
export class PatientUncheckedCreateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => OrderUncheckedCreateNestedManyWithoutPatientInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutPatientInput>;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUncheckedCreateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => OrderUncheckedCreateNestedManyWithoutPatientInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutPatientInput>;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUncheckedUpdateManyWithoutAccountInput {
    @Field(() => [PatientCreateWithoutAccountInput], {nullable:true})
    @Type(() => PatientCreateWithoutAccountInput)
    create?: Array<PatientCreateWithoutAccountInput>;
    @Field(() => [PatientCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => PatientCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<PatientCreateOrConnectWithoutAccountInput>;
    @Field(() => [PatientUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => PatientUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<PatientUpsertWithWhereUniqueWithoutAccountInput>;
    @Field(() => PatientCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => PatientCreateManyAccountInputEnvelope)
    createMany?: InstanceType<typeof PatientCreateManyAccountInputEnvelope>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    set?: Array<PatientWhereUniqueInput>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    disconnect?: Array<PatientWhereUniqueInput>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    delete?: Array<PatientWhereUniqueInput>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    connect?: Array<PatientWhereUniqueInput>;
    @Field(() => [PatientUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => PatientUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<PatientUpdateWithWhereUniqueWithoutAccountInput>;
    @Field(() => [PatientUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => PatientUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<PatientUpdateManyWithWhereWithoutAccountInput>;
    @Field(() => [PatientScalarWhereInput], {nullable:true})
    @Type(() => PatientScalarWhereInput)
    deleteMany?: Array<PatientScalarWhereInput>;
}

@InputType()
export class PatientUncheckedUpdateManyWithoutPatientsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUncheckedUpdateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => OrderUncheckedUpdateManyWithoutPatientInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutPatientInput>;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUncheckedUpdateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    accountId?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => OrderUncheckedUpdateManyWithoutPatientInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutPatientInput>;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUpdateManyWithWhereWithoutAccountInput {
    @Field(() => PatientScalarWhereInput, {nullable:false})
    @Type(() => PatientScalarWhereInput)
    where!: InstanceType<typeof PatientScalarWhereInput>;
    @Field(() => PatientUpdateManyMutationInput, {nullable:false})
    @Type(() => PatientUpdateManyMutationInput)
    data!: InstanceType<typeof PatientUpdateManyMutationInput>;
}

@InputType()
export class PatientUpdateManyWithoutAccountInput {
    @Field(() => [PatientCreateWithoutAccountInput], {nullable:true})
    @Type(() => PatientCreateWithoutAccountInput)
    create?: Array<PatientCreateWithoutAccountInput>;
    @Field(() => [PatientCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => PatientCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<PatientCreateOrConnectWithoutAccountInput>;
    @Field(() => [PatientUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => PatientUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<PatientUpsertWithWhereUniqueWithoutAccountInput>;
    @Field(() => PatientCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => PatientCreateManyAccountInputEnvelope)
    createMany?: InstanceType<typeof PatientCreateManyAccountInputEnvelope>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    set?: Array<PatientWhereUniqueInput>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    disconnect?: Array<PatientWhereUniqueInput>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    delete?: Array<PatientWhereUniqueInput>;
    @Field(() => [PatientWhereUniqueInput], {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    connect?: Array<PatientWhereUniqueInput>;
    @Field(() => [PatientUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => PatientUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<PatientUpdateWithWhereUniqueWithoutAccountInput>;
    @Field(() => [PatientUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => PatientUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<PatientUpdateManyWithWhereWithoutAccountInput>;
    @Field(() => [PatientScalarWhereInput], {nullable:true})
    @Type(() => PatientScalarWhereInput)
    deleteMany?: Array<PatientScalarWhereInput>;
}

@InputType()
export class PatientUpdateOneRequiredWithoutOrdersInput {
    @Field(() => PatientCreateWithoutOrdersInput, {nullable:true})
    @Type(() => PatientCreateWithoutOrdersInput)
    create?: InstanceType<typeof PatientCreateWithoutOrdersInput>;
    @Field(() => PatientCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => PatientCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: InstanceType<typeof PatientCreateOrConnectWithoutOrdersInput>;
    @Field(() => PatientUpsertWithoutOrdersInput, {nullable:true})
    @Type(() => PatientUpsertWithoutOrdersInput)
    upsert?: InstanceType<typeof PatientUpsertWithoutOrdersInput>;
    @Field(() => PatientWhereUniqueInput, {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    connect?: InstanceType<typeof PatientWhereUniqueInput>;
    @Field(() => PatientUpdateWithoutOrdersInput, {nullable:true})
    @Type(() => PatientUpdateWithoutOrdersInput)
    update?: InstanceType<typeof PatientUpdateWithoutOrdersInput>;
}

@InputType()
export class PatientUpdateWithWhereUniqueWithoutAccountInput {
    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: InstanceType<typeof PatientWhereUniqueInput>;
    @Field(() => PatientUpdateWithoutAccountInput, {nullable:false})
    @Type(() => PatientUpdateWithoutAccountInput)
    data!: InstanceType<typeof PatientUpdateWithoutAccountInput>;
}

@InputType()
export class PatientUpdateWithoutAccountInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => OrderUpdateManyWithoutPatientInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUpdateManyWithoutPatientInput>;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUpdateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => AccountUpdateOneWithoutPatientsInput, {nullable:true})
    Account?: InstanceType<typeof AccountUpdateOneWithoutPatientsInput>;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => AccountUpdateOneWithoutPatientsInput, {nullable:true})
    Account?: InstanceType<typeof AccountUpdateOneWithoutPatientsInput>;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    mrn?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity?: keyof typeof Ethnicity;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    notes?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => OrderUpdateManyWithoutPatientInput, {nullable:true})
    Orders?: InstanceType<typeof OrderUpdateManyWithoutPatientInput>;
    @Field(() => Boolean, {nullable:true})
    removed?: boolean;
}

@InputType()
export class PatientUpsertWithWhereUniqueWithoutAccountInput {
    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: InstanceType<typeof PatientWhereUniqueInput>;
    @Field(() => PatientUpdateWithoutAccountInput, {nullable:false})
    @Type(() => PatientUpdateWithoutAccountInput)
    update!: InstanceType<typeof PatientUpdateWithoutAccountInput>;
    @Field(() => PatientCreateWithoutAccountInput, {nullable:false})
    @Type(() => PatientCreateWithoutAccountInput)
    create!: InstanceType<typeof PatientCreateWithoutAccountInput>;
}

@InputType()
export class PatientUpsertWithoutOrdersInput {
    @Field(() => PatientUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => PatientUpdateWithoutOrdersInput)
    update!: InstanceType<typeof PatientUpdateWithoutOrdersInput>;
    @Field(() => PatientCreateWithoutOrdersInput, {nullable:false})
    @Type(() => PatientCreateWithoutOrdersInput)
    create!: InstanceType<typeof PatientCreateWithoutOrdersInput>;
}

@InputType()
export class PatientWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class PatientWhereInput {
    @Field(() => [PatientWhereInput], {nullable:true})
    AND?: Array<PatientWhereInput>;
    @Field(() => [PatientWhereInput], {nullable:true})
    OR?: Array<PatientWhereInput>;
    @Field(() => [PatientWhereInput], {nullable:true})
    NOT?: Array<PatientWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    accountId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => AccountRelationFilter, {nullable:true})
    Account?: InstanceType<typeof AccountRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    mrn?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    birthDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EnumEthnicityNullableFilter, {nullable:true})
    ethnicity?: InstanceType<typeof EnumEthnicityNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    timezone?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    email?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    notes?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumGenderFilter, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFilter>;
    @Field(() => StringFilter, {nullable:true})
    lang?: InstanceType<typeof StringFilter>;
    @Field(() => OrderListRelationFilter, {nullable:true})
    Orders?: InstanceType<typeof OrderListRelationFilter>;
    @Field(() => BoolFilter, {nullable:true})
    removed?: InstanceType<typeof BoolFilter>;
}

@ObjectType()
export class Patient {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:true})
    accountId!: string | null;
    @Field(() => Account, {nullable:true})
    Account?: InstanceType<typeof Account> | null;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    mrn!: string;
    @Field(() => Date, {nullable:false})
    birthDate!: Date;
    @Field(() => Ethnicity, {nullable:true})
    ethnicity!: keyof typeof Ethnicity | null;
    @Field(() => String, {nullable:false,defaultValue:'America/Los_Angeles'})
    timezone!: string;
    @Field(() => String, {nullable:true})
    phone!: string | null;
    @Field(() => String, {nullable:true})
    email!: string | null;
    @Field(() => String, {nullable:true})
    notes!: string | null;
    @Field(() => Gender, {nullable:false,defaultValue:'UNKNOWN'})
    gender!: keyof typeof Gender;
    @Field(() => String, {nullable:false,defaultValue:'en-US'})
    lang!: string;
    @Field(() => [Order], {nullable:true})
    Orders?: Array<Order>;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    removed!: boolean;
    @Field(() => PatientCount, {nullable:false})
    _count?: InstanceType<typeof PatientCount>;
}

@ArgsType()
export class UpdateManyPatientArgs {
    @Field(() => PatientUpdateManyMutationInput, {nullable:false})
    @Type(() => PatientUpdateManyMutationInput)
    data!: InstanceType<typeof PatientUpdateManyMutationInput>;
    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: InstanceType<typeof PatientWhereInput>;
}

@ArgsType()
export class UpdateOnePatientArgs {
    @Field(() => PatientUpdateInput, {nullable:false})
    @Type(() => PatientUpdateInput)
    data!: InstanceType<typeof PatientUpdateInput>;
    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: InstanceType<typeof PatientWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePatientArgs {
    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: InstanceType<typeof PatientWhereUniqueInput>;
    @Field(() => PatientCreateInput, {nullable:false})
    @Type(() => PatientCreateInput)
    create!: InstanceType<typeof PatientCreateInput>;
    @Field(() => PatientUpdateInput, {nullable:false})
    @Type(() => PatientUpdateInput)
    update!: InstanceType<typeof PatientUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumEthnicityNullableFilter {
    @Field(() => Ethnicity, {nullable:true})
    equals?: keyof typeof Ethnicity;
    @Field(() => [Ethnicity], {nullable:true})
    in?: Array<keyof typeof Ethnicity>;
    @Field(() => [Ethnicity], {nullable:true})
    notIn?: Array<keyof typeof Ethnicity>;
    @Field(() => NestedEnumEthnicityNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumEthnicityNullableFilter>;
}

@InputType()
export class EnumEthnicityNullableWithAggregatesFilter {
    @Field(() => Ethnicity, {nullable:true})
    equals?: keyof typeof Ethnicity;
    @Field(() => [Ethnicity], {nullable:true})
    in?: Array<keyof typeof Ethnicity>;
    @Field(() => [Ethnicity], {nullable:true})
    notIn?: Array<keyof typeof Ethnicity>;
    @Field(() => NestedEnumEthnicityNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumEthnicityNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedEnumEthnicityNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumEthnicityNullableFilter>;
    @Field(() => NestedEnumEthnicityNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumEthnicityNullableFilter>;
}

@InputType()
export class EnumGenderFilter {
    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;
    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;
    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumGenderFilter>;
}

@InputType()
export class EnumGenderWithAggregatesFilter {
    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;
    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;
    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;
    @Field(() => NestedEnumGenderWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumGenderWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumGenderFilter>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumGenderFilter>;
}

@InputType()
export class EnumOrderStatusFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOrderStatusFilter>;
}

@InputType()
export class EnumOrderStatusWithAggregatesFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => NestedEnumOrderStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOrderStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumOrderStatusFilter>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumOrderStatusFilter>;
}

@InputType()
export class EnumTestStatusFilter {
    @Field(() => TestStatus, {nullable:true})
    equals?: keyof typeof TestStatus;
    @Field(() => [TestStatus], {nullable:true})
    in?: Array<keyof typeof TestStatus>;
    @Field(() => [TestStatus], {nullable:true})
    notIn?: Array<keyof typeof TestStatus>;
    @Field(() => NestedEnumTestStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTestStatusFilter>;
}

@InputType()
export class EnumTestStatusWithAggregatesFilter {
    @Field(() => TestStatus, {nullable:true})
    equals?: keyof typeof TestStatus;
    @Field(() => [TestStatus], {nullable:true})
    in?: Array<keyof typeof TestStatus>;
    @Field(() => [TestStatus], {nullable:true})
    notIn?: Array<keyof typeof TestStatus>;
    @Field(() => NestedEnumTestStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTestStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumTestStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumTestStatusFilter>;
    @Field(() => NestedEnumTestStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumTestStatusFilter>;
}

@InputType()
export class EnumTestTypeFilter {
    @Field(() => TestType, {nullable:true})
    equals?: keyof typeof TestType;
    @Field(() => [TestType], {nullable:true})
    in?: Array<keyof typeof TestType>;
    @Field(() => [TestType], {nullable:true})
    notIn?: Array<keyof typeof TestType>;
    @Field(() => NestedEnumTestTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTestTypeFilter>;
}

@InputType()
export class EnumTestTypeWithAggregatesFilter {
    @Field(() => TestType, {nullable:true})
    equals?: keyof typeof TestType;
    @Field(() => [TestType], {nullable:true})
    in?: Array<keyof typeof TestType>;
    @Field(() => [TestType], {nullable:true})
    notIn?: Array<keyof typeof TestType>;
    @Field(() => NestedEnumTestTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTestTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumTestTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumTestTypeFilter>;
    @Field(() => NestedEnumTestTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumTestTypeFilter>;
}

@InputType()
export class JsonFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
}

@InputType()
export class JsonWithAggregatesFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedJsonFilter, {nullable:true})
    _min?: InstanceType<typeof NestedJsonFilter>;
    @Field(() => NestedJsonFilter, {nullable:true})
    _max?: InstanceType<typeof NestedJsonFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumEthnicityNullableFilter {
    @Field(() => Ethnicity, {nullable:true})
    equals?: keyof typeof Ethnicity;
    @Field(() => [Ethnicity], {nullable:true})
    in?: Array<keyof typeof Ethnicity>;
    @Field(() => [Ethnicity], {nullable:true})
    notIn?: Array<keyof typeof Ethnicity>;
    @Field(() => NestedEnumEthnicityNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumEthnicityNullableFilter>;
}

@InputType()
export class NestedEnumEthnicityNullableWithAggregatesFilter {
    @Field(() => Ethnicity, {nullable:true})
    equals?: keyof typeof Ethnicity;
    @Field(() => [Ethnicity], {nullable:true})
    in?: Array<keyof typeof Ethnicity>;
    @Field(() => [Ethnicity], {nullable:true})
    notIn?: Array<keyof typeof Ethnicity>;
    @Field(() => NestedEnumEthnicityNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumEthnicityNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedEnumEthnicityNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumEthnicityNullableFilter>;
    @Field(() => NestedEnumEthnicityNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumEthnicityNullableFilter>;
}

@InputType()
export class NestedEnumGenderFilter {
    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;
    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;
    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumGenderFilter>;
}

@InputType()
export class NestedEnumGenderWithAggregatesFilter {
    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;
    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;
    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;
    @Field(() => NestedEnumGenderWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumGenderWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumGenderFilter>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumGenderFilter>;
}

@InputType()
export class NestedEnumOrderStatusFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOrderStatusFilter>;
}

@InputType()
export class NestedEnumOrderStatusWithAggregatesFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => NestedEnumOrderStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOrderStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumOrderStatusFilter>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumOrderStatusFilter>;
}

@InputType()
export class NestedEnumTestStatusFilter {
    @Field(() => TestStatus, {nullable:true})
    equals?: keyof typeof TestStatus;
    @Field(() => [TestStatus], {nullable:true})
    in?: Array<keyof typeof TestStatus>;
    @Field(() => [TestStatus], {nullable:true})
    notIn?: Array<keyof typeof TestStatus>;
    @Field(() => NestedEnumTestStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTestStatusFilter>;
}

@InputType()
export class NestedEnumTestStatusWithAggregatesFilter {
    @Field(() => TestStatus, {nullable:true})
    equals?: keyof typeof TestStatus;
    @Field(() => [TestStatus], {nullable:true})
    in?: Array<keyof typeof TestStatus>;
    @Field(() => [TestStatus], {nullable:true})
    notIn?: Array<keyof typeof TestStatus>;
    @Field(() => NestedEnumTestStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTestStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumTestStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumTestStatusFilter>;
    @Field(() => NestedEnumTestStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumTestStatusFilter>;
}

@InputType()
export class NestedEnumTestTypeFilter {
    @Field(() => TestType, {nullable:true})
    equals?: keyof typeof TestType;
    @Field(() => [TestType], {nullable:true})
    in?: Array<keyof typeof TestType>;
    @Field(() => [TestType], {nullable:true})
    notIn?: Array<keyof typeof TestType>;
    @Field(() => NestedEnumTestTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTestTypeFilter>;
}

@InputType()
export class NestedEnumTestTypeWithAggregatesFilter {
    @Field(() => TestType, {nullable:true})
    equals?: keyof typeof TestType;
    @Field(() => [TestType], {nullable:true})
    in?: Array<keyof typeof TestType>;
    @Field(() => [TestType], {nullable:true})
    notIn?: Array<keyof typeof TestType>;
    @Field(() => NestedEnumTestTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTestTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumTestTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumTestTypeFilter>;
    @Field(() => NestedEnumTestTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumTestTypeFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedJsonFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateTest {
    @Field(() => TestCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TestCountAggregate>;
    @Field(() => TestMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TestMinAggregate>;
    @Field(() => TestMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TestMaxAggregate>;
}

@ArgsType()
export class CreateManyTestArgs {
    @Field(() => [TestCreateManyInput], {nullable:false})
    @Type(() => TestCreateManyInput)
    data!: Array<TestCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTestArgs {
    @Field(() => TestCreateInput, {nullable:false})
    @Type(() => TestCreateInput)
    data!: InstanceType<typeof TestCreateInput>;
}

@ArgsType()
export class DeleteManyTestArgs {
    @Field(() => TestWhereInput, {nullable:true})
    @Type(() => TestWhereInput)
    where?: InstanceType<typeof TestWhereInput>;
}

@ArgsType()
export class DeleteOneTestArgs {
    @Field(() => TestWhereUniqueInput, {nullable:false})
    @Type(() => TestWhereUniqueInput)
    where!: InstanceType<typeof TestWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTestArgs {
    @Field(() => TestWhereInput, {nullable:true})
    @Type(() => TestWhereInput)
    where?: InstanceType<typeof TestWhereInput>;
    @Field(() => [TestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TestOrderByWithRelationInput>;
    @Field(() => TestWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TestWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TestScalarFieldEnum>;
}

@ArgsType()
export class FindManyTestArgs {
    @Field(() => TestWhereInput, {nullable:true})
    @Type(() => TestWhereInput)
    where?: InstanceType<typeof TestWhereInput>;
    @Field(() => [TestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TestOrderByWithRelationInput>;
    @Field(() => TestWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TestWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TestScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTestArgs {
    @Field(() => TestWhereUniqueInput, {nullable:false})
    @Type(() => TestWhereUniqueInput)
    where!: InstanceType<typeof TestWhereUniqueInput>;
}

@ArgsType()
export class TestAggregateArgs {
    @Field(() => TestWhereInput, {nullable:true})
    @Type(() => TestWhereInput)
    where?: InstanceType<typeof TestWhereInput>;
    @Field(() => [TestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TestOrderByWithRelationInput>;
    @Field(() => TestWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TestWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TestCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TestCountAggregateInput>;
    @Field(() => TestMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TestMinAggregateInput>;
    @Field(() => TestMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TestMaxAggregateInput>;
}

@InputType()
export class TestCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TestCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TestCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
}

@ObjectType()
export class TestCount {
    @Field(() => Int, {nullable:false})
    Order?: number;
}

@InputType()
export class TestCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:false})
    type!: keyof typeof TestType;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => TestStatus, {nullable:false})
    status!: keyof typeof TestStatus;
}

@InputType()
export class TestCreateNestedOneWithoutOrderInput {
    @Field(() => TestCreateWithoutOrderInput, {nullable:true})
    @Type(() => TestCreateWithoutOrderInput)
    create?: InstanceType<typeof TestCreateWithoutOrderInput>;
    @Field(() => TestCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => TestCreateOrConnectWithoutOrderInput)
    connectOrCreate?: InstanceType<typeof TestCreateOrConnectWithoutOrderInput>;
    @Field(() => TestWhereUniqueInput, {nullable:true})
    @Type(() => TestWhereUniqueInput)
    connect?: InstanceType<typeof TestWhereUniqueInput>;
}

@InputType()
export class TestCreateOrConnectWithoutOrderInput {
    @Field(() => TestWhereUniqueInput, {nullable:false})
    @Type(() => TestWhereUniqueInput)
    where!: InstanceType<typeof TestWhereUniqueInput>;
    @Field(() => TestCreateWithoutOrderInput, {nullable:false})
    @Type(() => TestCreateWithoutOrderInput)
    create!: InstanceType<typeof TestCreateWithoutOrderInput>;
}

@InputType()
export class TestCreateWithoutOrderInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:false})
    type!: keyof typeof TestType;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => TestStatus, {nullable:false})
    status!: keyof typeof TestStatus;
}

@InputType()
export class TestCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:false})
    type!: keyof typeof TestType;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => TestStatus, {nullable:false})
    status!: keyof typeof TestStatus;
    @Field(() => OrderCreateNestedManyWithoutTestInput, {nullable:true})
    Order?: InstanceType<typeof OrderCreateNestedManyWithoutTestInput>;
}

@ArgsType()
export class TestGroupByArgs {
    @Field(() => TestWhereInput, {nullable:true})
    @Type(() => TestWhereInput)
    where?: InstanceType<typeof TestWhereInput>;
    @Field(() => [TestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TestOrderByWithAggregationInput>;
    @Field(() => [TestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TestScalarFieldEnum>;
    @Field(() => TestScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TestScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TestCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TestCountAggregateInput>;
    @Field(() => TestMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TestMinAggregateInput>;
    @Field(() => TestMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TestMaxAggregateInput>;
}

@ObjectType()
export class TestGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => TestType, {nullable:false})
    type!: keyof typeof TestType;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => TestStatus, {nullable:false})
    status!: keyof typeof TestStatus;
    @Field(() => TestCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TestCountAggregate>;
    @Field(() => TestMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TestMinAggregate>;
    @Field(() => TestMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TestMaxAggregate>;
}

@InputType()
export class TestMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
}

@ObjectType()
export class TestMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:true})
    type?: keyof typeof TestType;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TestStatus, {nullable:true})
    status?: keyof typeof TestStatus;
}

@InputType()
export class TestMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
}

@InputType()
export class TestMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
}

@ObjectType()
export class TestMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:true})
    type?: keyof typeof TestType;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TestStatus, {nullable:true})
    status?: keyof typeof TestStatus;
}

@InputType()
export class TestMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
}

@InputType()
export class TestOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => TestCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TestCountOrderByAggregateInput>;
    @Field(() => TestMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TestMaxOrderByAggregateInput>;
    @Field(() => TestMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TestMinOrderByAggregateInput>;
}

@InputType()
export class TestOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    Order?: InstanceType<typeof OrderOrderByRelationAggregateInput>;
}

@InputType()
export class TestRelationFilter {
    @Field(() => TestWhereInput, {nullable:true})
    is?: InstanceType<typeof TestWhereInput>;
    @Field(() => TestWhereInput, {nullable:true})
    isNot?: InstanceType<typeof TestWhereInput>;
}

@InputType()
export class TestScalarWhereWithAggregatesInput {
    @Field(() => [TestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TestScalarWhereWithAggregatesInput>;
    @Field(() => [TestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TestScalarWhereWithAggregatesInput>;
    @Field(() => [TestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TestScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumTestTypeWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof EnumTestTypeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumTestStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumTestStatusWithAggregatesFilter>;
}

@InputType()
export class TestUncheckedCreateWithoutOrderInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:false})
    type!: keyof typeof TestType;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => TestStatus, {nullable:false})
    status!: keyof typeof TestStatus;
}

@InputType()
export class TestUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:false})
    type!: keyof typeof TestType;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => TestStatus, {nullable:false})
    status!: keyof typeof TestStatus;
    @Field(() => OrderUncheckedCreateNestedManyWithoutTestInput, {nullable:true})
    Order?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutTestInput>;
}

@InputType()
export class TestUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:true})
    type?: keyof typeof TestType;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TestStatus, {nullable:true})
    status?: keyof typeof TestStatus;
}

@InputType()
export class TestUncheckedUpdateWithoutOrderInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:true})
    type?: keyof typeof TestType;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TestStatus, {nullable:true})
    status?: keyof typeof TestStatus;
}

@InputType()
export class TestUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:true})
    type?: keyof typeof TestType;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TestStatus, {nullable:true})
    status?: keyof typeof TestStatus;
    @Field(() => OrderUncheckedUpdateManyWithoutTestInput, {nullable:true})
    Order?: InstanceType<typeof OrderUncheckedUpdateManyWithoutTestInput>;
}

@InputType()
export class TestUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:true})
    type?: keyof typeof TestType;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TestStatus, {nullable:true})
    status?: keyof typeof TestStatus;
}

@InputType()
export class TestUpdateOneRequiredWithoutOrderInput {
    @Field(() => TestCreateWithoutOrderInput, {nullable:true})
    @Type(() => TestCreateWithoutOrderInput)
    create?: InstanceType<typeof TestCreateWithoutOrderInput>;
    @Field(() => TestCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => TestCreateOrConnectWithoutOrderInput)
    connectOrCreate?: InstanceType<typeof TestCreateOrConnectWithoutOrderInput>;
    @Field(() => TestUpsertWithoutOrderInput, {nullable:true})
    @Type(() => TestUpsertWithoutOrderInput)
    upsert?: InstanceType<typeof TestUpsertWithoutOrderInput>;
    @Field(() => TestWhereUniqueInput, {nullable:true})
    @Type(() => TestWhereUniqueInput)
    connect?: InstanceType<typeof TestWhereUniqueInput>;
    @Field(() => TestUpdateWithoutOrderInput, {nullable:true})
    @Type(() => TestUpdateWithoutOrderInput)
    update?: InstanceType<typeof TestUpdateWithoutOrderInput>;
}

@InputType()
export class TestUpdateWithoutOrderInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:true})
    type?: keyof typeof TestType;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TestStatus, {nullable:true})
    status?: keyof typeof TestStatus;
}

@InputType()
export class TestUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TestType, {nullable:true})
    type?: keyof typeof TestType;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TestStatus, {nullable:true})
    status?: keyof typeof TestStatus;
    @Field(() => OrderUpdateManyWithoutTestInput, {nullable:true})
    Order?: InstanceType<typeof OrderUpdateManyWithoutTestInput>;
}

@InputType()
export class TestUpsertWithoutOrderInput {
    @Field(() => TestUpdateWithoutOrderInput, {nullable:false})
    @Type(() => TestUpdateWithoutOrderInput)
    update!: InstanceType<typeof TestUpdateWithoutOrderInput>;
    @Field(() => TestCreateWithoutOrderInput, {nullable:false})
    @Type(() => TestCreateWithoutOrderInput)
    create!: InstanceType<typeof TestCreateWithoutOrderInput>;
}

@InputType()
export class TestWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class TestWhereInput {
    @Field(() => [TestWhereInput], {nullable:true})
    AND?: Array<TestWhereInput>;
    @Field(() => [TestWhereInput], {nullable:true})
    OR?: Array<TestWhereInput>;
    @Field(() => [TestWhereInput], {nullable:true})
    NOT?: Array<TestWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => EnumTestTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumTestTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => EnumTestStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumTestStatusFilter>;
    @Field(() => OrderListRelationFilter, {nullable:true})
    Order?: InstanceType<typeof OrderListRelationFilter>;
}

@ObjectType()
export class Test {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => TestType, {nullable:false})
    type!: keyof typeof TestType;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => TestStatus, {nullable:false})
    status!: keyof typeof TestStatus;
    @Field(() => [Order], {nullable:true})
    Order?: Array<Order>;
    @Field(() => TestCount, {nullable:false})
    _count?: InstanceType<typeof TestCount>;
}

@ArgsType()
export class UpdateManyTestArgs {
    @Field(() => TestUpdateManyMutationInput, {nullable:false})
    @Type(() => TestUpdateManyMutationInput)
    data!: InstanceType<typeof TestUpdateManyMutationInput>;
    @Field(() => TestWhereInput, {nullable:true})
    @Type(() => TestWhereInput)
    where?: InstanceType<typeof TestWhereInput>;
}

@ArgsType()
export class UpdateOneTestArgs {
    @Field(() => TestUpdateInput, {nullable:false})
    @Type(() => TestUpdateInput)
    data!: InstanceType<typeof TestUpdateInput>;
    @Field(() => TestWhereUniqueInput, {nullable:false})
    @Type(() => TestWhereUniqueInput)
    where!: InstanceType<typeof TestWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTestArgs {
    @Field(() => TestWhereUniqueInput, {nullable:false})
    @Type(() => TestWhereUniqueInput)
    where!: InstanceType<typeof TestWhereUniqueInput>;
    @Field(() => TestCreateInput, {nullable:false})
    @Type(() => TestCreateInput)
    create!: InstanceType<typeof TestCreateInput>;
    @Field(() => TestUpdateInput, {nullable:false})
    @Type(() => TestUpdateInput)
    update!: InstanceType<typeof TestUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    externalId?: true;
    @Field(() => Boolean, {nullable:true})
    timezone?: true;
    @Field(() => Boolean, {nullable:true})
    lang?: true;
    @Field(() => Boolean, {nullable:true})
    settings?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    externalId!: number;
    @Field(() => Int, {nullable:false})
    timezone!: number;
    @Field(() => Int, {nullable:false})
    lang!: number;
    @Field(() => Int, {nullable:false})
    settings!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    settings?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:false})
    timezone!: string;
    @Field(() => String, {nullable:false})
    lang!: string;
    @Field(() => GraphQLJSON, {nullable:false})
    settings!: any;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    externalId?: true;
    @Field(() => Boolean, {nullable:true})
    timezone?: true;
    @Field(() => Boolean, {nullable:true})
    lang?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    externalId?: true;
    @Field(() => Boolean, {nullable:true})
    timezone?: true;
    @Field(() => Boolean, {nullable:true})
    lang?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    settings?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lang?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    settings?: keyof typeof SortOrder;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    externalId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    timezone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lang?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    settings?: InstanceType<typeof JsonWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    externalId?: string;
    @Field(() => String, {nullable:true})
    timezone?: string;
    @Field(() => String, {nullable:true})
    lang?: string;
    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    externalId?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    externalId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    timezone?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lang?: InstanceType<typeof StringFilter>;
    @Field(() => JsonFilter, {nullable:true})
    settings?: InstanceType<typeof JsonFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:true})
    externalId!: string | null;
    @Field(() => String, {nullable:false,defaultValue:'America/Los_Angeles'})
    timezone!: string;
    @Field(() => String, {nullable:false,defaultValue:'en-US'})
    lang!: string;
    @Field(() => GraphQLJSON, {nullable:false,defaultValue:'{}'})
    settings!: any;
}

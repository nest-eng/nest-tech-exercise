
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Ethnicity {
    AMERICAN_INDIAN_OR_ALASKA_NATIVE = "AMERICAN_INDIAN_OR_ALASKA_NATIVE",
    ASIAN = "ASIAN",
    BLACK_AFRICAN_AMERICAN = "BLACK_AFRICAN_AMERICAN",
    HISPANIC_OR_LATINO = "HISPANIC_OR_LATINO",
    NATIVE_HAWAIIAN_OR_PACIFIC_ISLANDER = "NATIVE_HAWAIIAN_OR_PACIFIC_ISLANDER",
    UNKNOWN = "UNKNOWN",
    WHITE = "WHITE"
}

export enum Gender {
    FEMALE = "FEMALE",
    MALE = "MALE",
    OTHER = "OTHER",
    UNKNOWN = "UNKNOWN"
}

export enum OrderStatus {
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED",
    PENDING = "PENDING",
    PROCESSING = "PROCESSING"
}

export enum QueryMode {
    "default" = "default",
    insensitive = "insensitive"
}

export enum TestStatus {
    AVAILABLE = "AVAILABLE",
    UNAVAILABLE = "UNAVAILABLE"
}

export enum TestType {
    CARRIER = "CARRIER",
    DIAGNOSTIC = "DIAGNOSTIC",
    NEWBORN_SCREENING = "NEWBORN_SCREENING",
    PHARMACOGENETICS = "PHARMACOGENETICS",
    PREIMPLANTATION = "PREIMPLANTATION",
    PRENATAL = "PRENATAL",
    PRESYMPTOMATIC = "PRESYMPTOMATIC"
}

export class AccountCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<AccountWhereUniqueInput>;
    connectOrCreate?: Nullable<AccountCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<AccountCreateWithoutOrdersInput>;
}

export class AccountCreateNestedOneWithoutPatientsInput {
    connect?: Nullable<AccountWhereUniqueInput>;
    connectOrCreate?: Nullable<AccountCreateOrConnectWithoutPatientsInput>;
    create?: Nullable<AccountCreateWithoutPatientsInput>;
}

export class AccountCreateOrConnectWithoutOrdersInput {
    create: AccountCreateWithoutOrdersInput;
    where: AccountWhereUniqueInput;
}

export class AccountCreateOrConnectWithoutPatientsInput {
    create: AccountCreateWithoutPatientsInput;
    where: AccountWhereUniqueInput;
}

export class AccountCreateWithoutOrdersInput {
    Patients?: Nullable<PatientCreateNestedManyWithoutAccountInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    settings?: Nullable<JSON>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AccountCreateWithoutPatientsInput {
    Orders?: Nullable<OrderCreateNestedManyWithoutAccountInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    settings?: Nullable<JSON>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AccountRelationFilter {
    is?: Nullable<AccountWhereInput>;
    isNot?: Nullable<AccountWhereInput>;
}

export class AccountUpdateOneWithoutOrdersInput {
    connect?: Nullable<AccountWhereUniqueInput>;
    connectOrCreate?: Nullable<AccountCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<AccountCreateWithoutOrdersInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AccountUpdateWithoutOrdersInput>;
    upsert?: Nullable<AccountUpsertWithoutOrdersInput>;
}

export class AccountUpdateOneWithoutPatientsInput {
    connect?: Nullable<AccountWhereUniqueInput>;
    connectOrCreate?: Nullable<AccountCreateOrConnectWithoutPatientsInput>;
    create?: Nullable<AccountCreateWithoutPatientsInput>;
    delete?: Nullable<boolean>;
    disconnect?: Nullable<boolean>;
    update?: Nullable<AccountUpdateWithoutPatientsInput>;
    upsert?: Nullable<AccountUpsertWithoutPatientsInput>;
}

export class AccountUpdateWithoutOrdersInput {
    Patients?: Nullable<PatientUpdateManyWithoutAccountInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    settings?: Nullable<JSON>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AccountUpdateWithoutPatientsInput {
    Orders?: Nullable<OrderUpdateManyWithoutAccountInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    settings?: Nullable<JSON>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AccountUpsertWithoutOrdersInput {
    create: AccountCreateWithoutOrdersInput;
    update: AccountUpdateWithoutOrdersInput;
}

export class AccountUpsertWithoutPatientsInput {
    create: AccountCreateWithoutPatientsInput;
    update: AccountUpdateWithoutPatientsInput;
}

export class AccountWhereInput {
    AND?: Nullable<AccountWhereInput[]>;
    NOT?: Nullable<AccountWhereInput[]>;
    OR?: Nullable<AccountWhereInput[]>;
    Orders?: Nullable<OrderListRelationFilter>;
    Patients?: Nullable<PatientListRelationFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    lang?: Nullable<StringFilter>;
    settings?: Nullable<JsonFilter>;
    timezone?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class AccountWhereUniqueInput {
    id?: Nullable<string>;
}

export class BoolFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBoolFilter>;
}

export class CreateAccountInput {
    Orders?: Nullable<OrderUncheckedCreateNestedManyWithoutAccountInput>;
    Patients?: Nullable<PatientUncheckedCreateNestedManyWithoutAccountInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    settings?: Nullable<JSON>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class CreateOrderInput {
    accountId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    patientId: string;
    status?: Nullable<OrderStatus>;
    testId: string;
    updatedAt?: Nullable<DateTime>;
}

export class CreatePatientInput {
    Orders?: Nullable<OrderUncheckedCreateNestedManyWithoutPatientInput>;
    accountId?: Nullable<string>;
    birthDate: DateTime;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName: string;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    lastName: string;
    mrn: string;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class CreateTestInput {
    Order?: Nullable<OrderUncheckedCreateNestedManyWithoutTestInput>;
    description: string;
    id?: Nullable<string>;
    name: string;
    status: TestStatus;
    type: TestType;
}

export class CreateUserInput {
    createdAt?: Nullable<DateTime>;
    externalId?: Nullable<string>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    settings?: Nullable<JSON>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class DateTimeFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class EnumEthnicityNullableFilter {
    equals?: Nullable<Ethnicity>;
    in?: Nullable<Ethnicity[]>;
    not?: Nullable<NestedEnumEthnicityNullableFilter>;
    notIn?: Nullable<Ethnicity[]>;
}

export class EnumGenderFilter {
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    not?: Nullable<NestedEnumGenderFilter>;
    notIn?: Nullable<Gender[]>;
}

export class EnumOrderStatusFilter {
    equals?: Nullable<OrderStatus>;
    in?: Nullable<OrderStatus[]>;
    not?: Nullable<NestedEnumOrderStatusFilter>;
    notIn?: Nullable<OrderStatus[]>;
}

export class EnumTestStatusFilter {
    equals?: Nullable<TestStatus>;
    in?: Nullable<TestStatus[]>;
    not?: Nullable<NestedEnumTestStatusFilter>;
    notIn?: Nullable<TestStatus[]>;
}

export class EnumTestTypeFilter {
    equals?: Nullable<TestType>;
    in?: Nullable<TestType[]>;
    not?: Nullable<NestedEnumTestTypeFilter>;
    notIn?: Nullable<TestType[]>;
}

export class JsonFilter {
    equals?: Nullable<JSON>;
    not?: Nullable<JSON>;
}

export class NestedBoolFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBoolFilter>;
}

export class NestedDateTimeFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedEnumEthnicityNullableFilter {
    equals?: Nullable<Ethnicity>;
    in?: Nullable<Ethnicity[]>;
    not?: Nullable<NestedEnumEthnicityNullableFilter>;
    notIn?: Nullable<Ethnicity[]>;
}

export class NestedEnumGenderFilter {
    equals?: Nullable<Gender>;
    in?: Nullable<Gender[]>;
    not?: Nullable<NestedEnumGenderFilter>;
    notIn?: Nullable<Gender[]>;
}

export class NestedEnumOrderStatusFilter {
    equals?: Nullable<OrderStatus>;
    in?: Nullable<OrderStatus[]>;
    not?: Nullable<NestedEnumOrderStatusFilter>;
    notIn?: Nullable<OrderStatus[]>;
}

export class NestedEnumTestStatusFilter {
    equals?: Nullable<TestStatus>;
    in?: Nullable<TestStatus[]>;
    not?: Nullable<NestedEnumTestStatusFilter>;
    notIn?: Nullable<TestStatus[]>;
}

export class NestedEnumTestTypeFilter {
    equals?: Nullable<TestType>;
    in?: Nullable<TestType[]>;
    not?: Nullable<NestedEnumTestTypeFilter>;
    notIn?: Nullable<TestType[]>;
}

export class NestedStringFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringNullableFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringNullableFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class OrderCreateManyAccountInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    patientId: string;
    status?: Nullable<OrderStatus>;
    testId: string;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyAccountInputEnvelope {
    data: OrderCreateManyAccountInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyPatientInput {
    accountId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    testId: string;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyPatientInputEnvelope {
    data: OrderCreateManyPatientInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateManyTestInput {
    accountId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    patientId: string;
    status?: Nullable<OrderStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateManyTestInputEnvelope {
    data: OrderCreateManyTestInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class OrderCreateNestedManyWithoutAccountInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutAccountInput[]>;
    create?: Nullable<OrderCreateWithoutAccountInput[]>;
    createMany?: Nullable<OrderCreateManyAccountInputEnvelope>;
}

export class OrderCreateNestedManyWithoutPatientInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutPatientInput[]>;
    create?: Nullable<OrderCreateWithoutPatientInput[]>;
    createMany?: Nullable<OrderCreateManyPatientInputEnvelope>;
}

export class OrderCreateOrConnectWithoutAccountInput {
    create: OrderCreateWithoutAccountInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutPatientInput {
    create: OrderCreateWithoutPatientInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateOrConnectWithoutTestInput {
    create: OrderCreateWithoutTestInput;
    where: OrderWhereUniqueInput;
}

export class OrderCreateWithoutAccountInput {
    Patient: PatientCreateNestedOneWithoutOrdersInput;
    Test: TestCreateNestedOneWithoutOrderInput;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutPatientInput {
    Account?: Nullable<AccountCreateNestedOneWithoutOrdersInput>;
    Test: TestCreateNestedOneWithoutOrderInput;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderCreateWithoutTestInput {
    Account?: Nullable<AccountCreateNestedOneWithoutOrdersInput>;
    Patient: PatientCreateNestedOneWithoutOrdersInput;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderListRelationFilter {
    every?: Nullable<OrderWhereInput>;
    none?: Nullable<OrderWhereInput>;
    some?: Nullable<OrderWhereInput>;
}

export class OrderScalarWhereInput {
    AND?: Nullable<OrderScalarWhereInput[]>;
    NOT?: Nullable<OrderScalarWhereInput[]>;
    OR?: Nullable<OrderScalarWhereInput[]>;
    accountId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    patientId?: Nullable<StringFilter>;
    status?: Nullable<EnumOrderStatusFilter>;
    testId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class OrderUncheckedCreateNestedManyWithoutAccountInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutAccountInput[]>;
    create?: Nullable<OrderCreateWithoutAccountInput[]>;
    createMany?: Nullable<OrderCreateManyAccountInputEnvelope>;
}

export class OrderUncheckedCreateNestedManyWithoutPatientInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutPatientInput[]>;
    create?: Nullable<OrderCreateWithoutPatientInput[]>;
    createMany?: Nullable<OrderCreateManyPatientInputEnvelope>;
}

export class OrderUncheckedCreateNestedManyWithoutTestInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutTestInput[]>;
    create?: Nullable<OrderCreateWithoutTestInput[]>;
    createMany?: Nullable<OrderCreateManyTestInputEnvelope>;
}

export class OrderUncheckedUpdateManyWithoutAccountInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutAccountInput[]>;
    create?: Nullable<OrderCreateWithoutAccountInput[]>;
    createMany?: Nullable<OrderCreateManyAccountInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutAccountInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutAccountInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutAccountInput[]>;
}

export class OrderUncheckedUpdateManyWithoutPatientInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutPatientInput[]>;
    create?: Nullable<OrderCreateWithoutPatientInput[]>;
    createMany?: Nullable<OrderCreateManyPatientInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutPatientInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutPatientInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutPatientInput[]>;
}

export class OrderUpdateManyMutationInput {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUpdateManyWithWhereWithoutAccountInput {
    data: OrderUpdateManyMutationInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithWhereWithoutPatientInput {
    data: OrderUpdateManyMutationInput;
    where: OrderScalarWhereInput;
}

export class OrderUpdateManyWithoutAccountInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutAccountInput[]>;
    create?: Nullable<OrderCreateWithoutAccountInput[]>;
    createMany?: Nullable<OrderCreateManyAccountInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutAccountInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutAccountInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutAccountInput[]>;
}

export class OrderUpdateManyWithoutPatientInput {
    connect?: Nullable<OrderWhereUniqueInput[]>;
    connectOrCreate?: Nullable<OrderCreateOrConnectWithoutPatientInput[]>;
    create?: Nullable<OrderCreateWithoutPatientInput[]>;
    createMany?: Nullable<OrderCreateManyPatientInputEnvelope>;
    delete?: Nullable<OrderWhereUniqueInput[]>;
    deleteMany?: Nullable<OrderScalarWhereInput[]>;
    disconnect?: Nullable<OrderWhereUniqueInput[]>;
    set?: Nullable<OrderWhereUniqueInput[]>;
    update?: Nullable<OrderUpdateWithWhereUniqueWithoutPatientInput[]>;
    updateMany?: Nullable<OrderUpdateManyWithWhereWithoutPatientInput[]>;
    upsert?: Nullable<OrderUpsertWithWhereUniqueWithoutPatientInput[]>;
}

export class OrderUpdateWithWhereUniqueWithoutAccountInput {
    data: OrderUpdateWithoutAccountInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithWhereUniqueWithoutPatientInput {
    data: OrderUpdateWithoutPatientInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpdateWithoutAccountInput {
    Patient?: Nullable<PatientUpdateOneRequiredWithoutOrdersInput>;
    Test?: Nullable<TestUpdateOneRequiredWithoutOrderInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUpdateWithoutPatientInput {
    Account?: Nullable<AccountUpdateOneWithoutOrdersInput>;
    Test?: Nullable<TestUpdateOneRequiredWithoutOrderInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderUpsertWithWhereUniqueWithoutAccountInput {
    create: OrderCreateWithoutAccountInput;
    update: OrderUpdateWithoutAccountInput;
    where: OrderWhereUniqueInput;
}

export class OrderUpsertWithWhereUniqueWithoutPatientInput {
    create: OrderCreateWithoutPatientInput;
    update: OrderUpdateWithoutPatientInput;
    where: OrderWhereUniqueInput;
}

export class OrderWhereInput {
    AND?: Nullable<OrderWhereInput[]>;
    Account?: Nullable<AccountRelationFilter>;
    NOT?: Nullable<OrderWhereInput[]>;
    OR?: Nullable<OrderWhereInput[]>;
    Patient?: Nullable<PatientRelationFilter>;
    Test?: Nullable<TestRelationFilter>;
    accountId?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    patientId?: Nullable<StringFilter>;
    status?: Nullable<EnumOrderStatusFilter>;
    testId?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class OrderWhereUniqueInput {
    id?: Nullable<string>;
}

export class PatientCreateManyAccountInput {
    birthDate: DateTime;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName: string;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    lastName: string;
    mrn: string;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class PatientCreateManyAccountInputEnvelope {
    data: PatientCreateManyAccountInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class PatientCreateNestedManyWithoutAccountInput {
    connect?: Nullable<PatientWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PatientCreateOrConnectWithoutAccountInput[]>;
    create?: Nullable<PatientCreateWithoutAccountInput[]>;
    createMany?: Nullable<PatientCreateManyAccountInputEnvelope>;
}

export class PatientCreateNestedOneWithoutOrdersInput {
    connect?: Nullable<PatientWhereUniqueInput>;
    connectOrCreate?: Nullable<PatientCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<PatientCreateWithoutOrdersInput>;
}

export class PatientCreateOrConnectWithoutAccountInput {
    create: PatientCreateWithoutAccountInput;
    where: PatientWhereUniqueInput;
}

export class PatientCreateOrConnectWithoutOrdersInput {
    create: PatientCreateWithoutOrdersInput;
    where: PatientWhereUniqueInput;
}

export class PatientCreateWithoutAccountInput {
    Orders?: Nullable<OrderCreateNestedManyWithoutPatientInput>;
    birthDate: DateTime;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName: string;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    lastName: string;
    mrn: string;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class PatientCreateWithoutOrdersInput {
    Account?: Nullable<AccountCreateNestedOneWithoutPatientsInput>;
    birthDate: DateTime;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName: string;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    lastName: string;
    mrn: string;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class PatientListRelationFilter {
    every?: Nullable<PatientWhereInput>;
    none?: Nullable<PatientWhereInput>;
    some?: Nullable<PatientWhereInput>;
}

export class PatientRelationFilter {
    is?: Nullable<PatientWhereInput>;
    isNot?: Nullable<PatientWhereInput>;
}

export class PatientScalarWhereInput {
    AND?: Nullable<PatientScalarWhereInput[]>;
    NOT?: Nullable<PatientScalarWhereInput[]>;
    OR?: Nullable<PatientScalarWhereInput[]>;
    accountId?: Nullable<StringNullableFilter>;
    birthDate?: Nullable<DateTimeFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    email?: Nullable<StringNullableFilter>;
    ethnicity?: Nullable<EnumEthnicityNullableFilter>;
    firstName?: Nullable<StringFilter>;
    gender?: Nullable<EnumGenderFilter>;
    id?: Nullable<StringFilter>;
    lang?: Nullable<StringFilter>;
    lastName?: Nullable<StringFilter>;
    mrn?: Nullable<StringFilter>;
    notes?: Nullable<StringNullableFilter>;
    phone?: Nullable<StringNullableFilter>;
    removed?: Nullable<BoolFilter>;
    timezone?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class PatientUncheckedCreateNestedManyWithoutAccountInput {
    connect?: Nullable<PatientWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PatientCreateOrConnectWithoutAccountInput[]>;
    create?: Nullable<PatientCreateWithoutAccountInput[]>;
    createMany?: Nullable<PatientCreateManyAccountInputEnvelope>;
}

export class PatientUncheckedUpdateManyWithoutAccountInput {
    connect?: Nullable<PatientWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PatientCreateOrConnectWithoutAccountInput[]>;
    create?: Nullable<PatientCreateWithoutAccountInput[]>;
    createMany?: Nullable<PatientCreateManyAccountInputEnvelope>;
    delete?: Nullable<PatientWhereUniqueInput[]>;
    deleteMany?: Nullable<PatientScalarWhereInput[]>;
    disconnect?: Nullable<PatientWhereUniqueInput[]>;
    set?: Nullable<PatientWhereUniqueInput[]>;
    update?: Nullable<PatientUpdateWithWhereUniqueWithoutAccountInput[]>;
    updateMany?: Nullable<PatientUpdateManyWithWhereWithoutAccountInput[]>;
    upsert?: Nullable<PatientUpsertWithWhereUniqueWithoutAccountInput[]>;
}

export class PatientUpdateManyMutationInput {
    birthDate?: Nullable<DateTime>;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName?: Nullable<string>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    lastName?: Nullable<string>;
    mrn?: Nullable<string>;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class PatientUpdateManyWithWhereWithoutAccountInput {
    data: PatientUpdateManyMutationInput;
    where: PatientScalarWhereInput;
}

export class PatientUpdateManyWithoutAccountInput {
    connect?: Nullable<PatientWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PatientCreateOrConnectWithoutAccountInput[]>;
    create?: Nullable<PatientCreateWithoutAccountInput[]>;
    createMany?: Nullable<PatientCreateManyAccountInputEnvelope>;
    delete?: Nullable<PatientWhereUniqueInput[]>;
    deleteMany?: Nullable<PatientScalarWhereInput[]>;
    disconnect?: Nullable<PatientWhereUniqueInput[]>;
    set?: Nullable<PatientWhereUniqueInput[]>;
    update?: Nullable<PatientUpdateWithWhereUniqueWithoutAccountInput[]>;
    updateMany?: Nullable<PatientUpdateManyWithWhereWithoutAccountInput[]>;
    upsert?: Nullable<PatientUpsertWithWhereUniqueWithoutAccountInput[]>;
}

export class PatientUpdateOneRequiredWithoutOrdersInput {
    connect?: Nullable<PatientWhereUniqueInput>;
    connectOrCreate?: Nullable<PatientCreateOrConnectWithoutOrdersInput>;
    create?: Nullable<PatientCreateWithoutOrdersInput>;
    update?: Nullable<PatientUpdateWithoutOrdersInput>;
    upsert?: Nullable<PatientUpsertWithoutOrdersInput>;
}

export class PatientUpdateWithWhereUniqueWithoutAccountInput {
    data: PatientUpdateWithoutAccountInput;
    where: PatientWhereUniqueInput;
}

export class PatientUpdateWithoutAccountInput {
    Orders?: Nullable<OrderUpdateManyWithoutPatientInput>;
    birthDate?: Nullable<DateTime>;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName?: Nullable<string>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    lastName?: Nullable<string>;
    mrn?: Nullable<string>;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class PatientUpdateWithoutOrdersInput {
    Account?: Nullable<AccountUpdateOneWithoutPatientsInput>;
    birthDate?: Nullable<DateTime>;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName?: Nullable<string>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    lastName?: Nullable<string>;
    mrn?: Nullable<string>;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class PatientUpsertWithWhereUniqueWithoutAccountInput {
    create: PatientCreateWithoutAccountInput;
    update: PatientUpdateWithoutAccountInput;
    where: PatientWhereUniqueInput;
}

export class PatientUpsertWithoutOrdersInput {
    create: PatientCreateWithoutOrdersInput;
    update: PatientUpdateWithoutOrdersInput;
}

export class PatientWhereInput {
    AND?: Nullable<PatientWhereInput[]>;
    Account?: Nullable<AccountRelationFilter>;
    NOT?: Nullable<PatientWhereInput[]>;
    OR?: Nullable<PatientWhereInput[]>;
    Orders?: Nullable<OrderListRelationFilter>;
    accountId?: Nullable<StringNullableFilter>;
    birthDate?: Nullable<DateTimeFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    email?: Nullable<StringNullableFilter>;
    ethnicity?: Nullable<EnumEthnicityNullableFilter>;
    firstName?: Nullable<StringFilter>;
    gender?: Nullable<EnumGenderFilter>;
    id?: Nullable<StringFilter>;
    lang?: Nullable<StringFilter>;
    lastName?: Nullable<StringFilter>;
    mrn?: Nullable<StringFilter>;
    notes?: Nullable<StringNullableFilter>;
    phone?: Nullable<StringNullableFilter>;
    removed?: Nullable<BoolFilter>;
    timezone?: Nullable<StringFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class PatientWhereUniqueInput {
    id?: Nullable<string>;
}

export class StringFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringNullableFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringNullableFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class TestCreateNestedOneWithoutOrderInput {
    connect?: Nullable<TestWhereUniqueInput>;
    connectOrCreate?: Nullable<TestCreateOrConnectWithoutOrderInput>;
    create?: Nullable<TestCreateWithoutOrderInput>;
}

export class TestCreateOrConnectWithoutOrderInput {
    create: TestCreateWithoutOrderInput;
    where: TestWhereUniqueInput;
}

export class TestCreateWithoutOrderInput {
    description: string;
    id?: Nullable<string>;
    name: string;
    status: TestStatus;
    type: TestType;
}

export class TestRelationFilter {
    is?: Nullable<TestWhereInput>;
    isNot?: Nullable<TestWhereInput>;
}

export class TestUpdateOneRequiredWithoutOrderInput {
    connect?: Nullable<TestWhereUniqueInput>;
    connectOrCreate?: Nullable<TestCreateOrConnectWithoutOrderInput>;
    create?: Nullable<TestCreateWithoutOrderInput>;
    update?: Nullable<TestUpdateWithoutOrderInput>;
    upsert?: Nullable<TestUpsertWithoutOrderInput>;
}

export class TestUpdateWithoutOrderInput {
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<TestStatus>;
    type?: Nullable<TestType>;
}

export class TestUpsertWithoutOrderInput {
    create: TestCreateWithoutOrderInput;
    update: TestUpdateWithoutOrderInput;
}

export class TestWhereInput {
    AND?: Nullable<TestWhereInput[]>;
    NOT?: Nullable<TestWhereInput[]>;
    OR?: Nullable<TestWhereInput[]>;
    Order?: Nullable<OrderListRelationFilter>;
    description?: Nullable<StringFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    status?: Nullable<EnumTestStatusFilter>;
    type?: Nullable<EnumTestTypeFilter>;
}

export class TestWhereUniqueInput {
    id?: Nullable<string>;
}

export class UpdateAccountInput {
    Orders?: Nullable<OrderUncheckedUpdateManyWithoutAccountInput>;
    Patients?: Nullable<PatientUncheckedUpdateManyWithoutAccountInput>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    settings?: Nullable<JSON>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class UpdateOrderInput {
    accountId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id: string;
    patientId?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    testId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class UpdatePatientInput {
    Orders?: Nullable<OrderUncheckedUpdateManyWithoutPatientInput>;
    accountId?: Nullable<string>;
    birthDate?: Nullable<DateTime>;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName?: Nullable<string>;
    gender?: Nullable<Gender>;
    id: string;
    lang?: Nullable<string>;
    lastName?: Nullable<string>;
    mrn?: Nullable<string>;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class UpdateUserInput {
    createdAt?: Nullable<DateTime>;
    externalId?: Nullable<string>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    settings?: Nullable<JSON>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class Account {
    Orders?: Nullable<Order[]>;
    Patients?: Nullable<Patient[]>;
    _count: AccountCount;
    createdAt: DateTime;
    id: string;
    lang: string;
    settings: JSON;
    timezone: string;
    updatedAt: DateTime;
}

export class AccountCount {
    Orders: number;
    Patients: number;
}

export class AccountCountAggregate {
    _all: number;
    createdAt: number;
    id: number;
    lang: number;
    settings: number;
    timezone: number;
    updatedAt: number;
}

export class AccountMaxAggregate {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class AccountMinAggregate {
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IMutation {
    abstract createAccount(createAccountInput: CreateAccountInput): Account | Promise<Account>;

    abstract createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;

    abstract createPatient(createPatientInput: CreatePatientInput): Patient | Promise<Patient>;

    abstract createTest(createTestInput: CreateTestInput): Test | Promise<Test>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract removePatient(id: string): Patient | Promise<Patient>;

    abstract updateAccount(updateAccountInput: UpdateAccountInput): Account | Promise<Account>;

    abstract updateOrder(updateOrderInput: UpdateOrderInput): Order | Promise<Order>;

    abstract updatePatient(updatePatientInput: UpdatePatientInput): Patient | Promise<Patient>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export class Order {
    Account?: Nullable<Account>;
    Patient: Patient;
    Test: Test;
    accountId?: Nullable<string>;
    createdAt: DateTime;
    id: string;
    patientId: string;
    status: OrderStatus;
    testId: string;
    updatedAt: DateTime;
}

export class OrderCountAggregate {
    _all: number;
    accountId: number;
    createdAt: number;
    id: number;
    patientId: number;
    status: number;
    testId: number;
    updatedAt: number;
}

export class OrderMaxAggregate {
    accountId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    patientId?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    testId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class OrderMinAggregate {
    accountId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    id?: Nullable<string>;
    patientId?: Nullable<string>;
    status?: Nullable<OrderStatus>;
    testId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class Patient {
    Account?: Nullable<Account>;
    Orders?: Nullable<Order[]>;
    _count: PatientCount;
    accountId?: Nullable<string>;
    birthDate: DateTime;
    createdAt: DateTime;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName: string;
    gender: Gender;
    id: string;
    lang: string;
    lastName: string;
    mrn: string;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed: boolean;
    timezone: string;
    updatedAt: DateTime;
}

export class PatientCount {
    Orders: number;
}

export class PatientCountAggregate {
    _all: number;
    accountId: number;
    birthDate: number;
    createdAt: number;
    email: number;
    ethnicity: number;
    firstName: number;
    gender: number;
    id: number;
    lang: number;
    lastName: number;
    mrn: number;
    notes: number;
    phone: number;
    removed: number;
    timezone: number;
    updatedAt: number;
}

export class PatientMaxAggregate {
    accountId?: Nullable<string>;
    birthDate?: Nullable<DateTime>;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName?: Nullable<string>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    lastName?: Nullable<string>;
    mrn?: Nullable<string>;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class PatientMinAggregate {
    accountId?: Nullable<string>;
    birthDate?: Nullable<DateTime>;
    createdAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    ethnicity?: Nullable<Ethnicity>;
    firstName?: Nullable<string>;
    gender?: Nullable<Gender>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    lastName?: Nullable<string>;
    mrn?: Nullable<string>;
    notes?: Nullable<string>;
    phone?: Nullable<string>;
    removed?: Nullable<boolean>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract account(id: string): Account | Promise<Account>;

    abstract accounts(): Account[] | Promise<Account[]>;

    abstract order(id: string): Order | Promise<Order>;

    abstract orders(): Order[] | Promise<Order[]>;

    abstract patient(id: string): Nullable<Patient> | Promise<Nullable<Patient>>;

    abstract patients(where?: Nullable<PatientWhereInput>): Patient[] | Promise<Patient[]>;

    abstract test(id: string): Test | Promise<Test>;

    abstract tests(where?: Nullable<TestWhereInput>): Test[] | Promise<Test[]>;

    abstract user(id: number): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;
}

export class Test {
    Order?: Nullable<Order[]>;
    _count: TestCount;
    description: string;
    id: string;
    name: string;
    status: TestStatus;
    type: TestType;
}

export class TestCount {
    Order: number;
}

export class TestCountAggregate {
    _all: number;
    description: number;
    id: number;
    name: number;
    status: number;
    type: number;
}

export class TestMaxAggregate {
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<TestStatus>;
    type?: Nullable<TestType>;
}

export class TestMinAggregate {
    description?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<TestStatus>;
    type?: Nullable<TestType>;
}

export class User {
    createdAt: DateTime;
    externalId?: Nullable<string>;
    id: string;
    lang: string;
    settings: JSON;
    timezone: string;
    updatedAt: DateTime;
}

export class UserCountAggregate {
    _all: number;
    createdAt: number;
    externalId: number;
    id: number;
    lang: number;
    settings: number;
    timezone: number;
    updatedAt: number;
}

export class UserMaxAggregate {
    createdAt?: Nullable<DateTime>;
    externalId?: Nullable<string>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export class UserMinAggregate {
    createdAt?: Nullable<DateTime>;
    externalId?: Nullable<string>;
    id?: Nullable<string>;
    lang?: Nullable<string>;
    timezone?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export type DateTime = any;
export type JSON = any;
type Nullable<T> = T | null;

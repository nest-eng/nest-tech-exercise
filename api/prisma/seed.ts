import {
  PatientCreateInput,
  TestCreateInput,
} from '@generated/prisma-nestjs-graphql'
import {
  Ethnicity,
  Gender,
  OrderStatus,
  PrismaClient,
  TestStatus,
  TestType,
} from '@prisma/client'
import { sample, times } from 'lodash'
import {
  randBetweenDate,
  randBoolean,
  randEmail,
  randFirstName,
  randLastName,
  randNumber,
  randPhoneNumber,
  randSentence,
} from '@ngneat/falso'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()
  await prisma.order.deleteMany()
  await prisma.test.deleteMany()
  await prisma.patient.deleteMany()
  await prisma.account.deleteMany()

  console.log('Seeding...')

  const mainAccount = await prisma.account.create({ data: {} })
  const patientCount = 50
  await Promise.all(
    times(patientCount, () => getPatientData(mainAccount.id))
      .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))
      .map((data) => prisma.patient.create({ data })),
  )
  await Promise.all(
    getTestData().map((data) => prisma.test.create({ data })),
  )

  const tests = await prisma.test.findMany()
  const testIds = tests.map(({ id }) => id)
  const patients = await prisma.patient.findMany()

  const createOrder = (patientId: string, createdAt: Date) =>
    prisma.order.create({
      data: {
        accountId: mainAccount.id,
        createdAt: randBetweenDate({
          from: createdAt,
          to: new Date(),
        }),
        patientId,
        status: sample(Object.keys(OrderStatus)) as OrderStatus,
        testId: sample(testIds),
      },
    })
  await Promise.all(
    patients
      .map(({ id, createdAt }) =>
        times(randNumber({ max: 4, min: 0 }), () =>
          createOrder(id, createdAt),
        ),
      )
      .flat(),
  )

  console.log('accounts', (await prisma.account.findMany()).length)
  // console.table(await prisma.account.findMany())
  // console.log('users')
  // console.table(await prisma.user.findMany())
  console.log('patients', (await prisma.patient.findMany()).length)
  // console.table(await prisma.patient.findMany())
  console.log('tests', (await prisma.test.findMany()).length)
  // console.table(await prisma.test.findMany())
  console.log('orders', (await prisma.order.findMany()).length)
  // console.table((await prisma.order.findMany()).length)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())

const getPatientData = (accountId: string): PatientCreateInput => {
  const gender = sample(Object.values(Gender))
  const genderLowercase = gender.toLowerCase() as 'male' | 'female'
  const firstName = randFirstName({
    gender: ['male', 'female'].includes(genderLowercase)
      ? genderLowercase
      : undefined,
    withAccents: false,
  })
  const lastName = randLastName({ withAccents: false })

  return {
    Account: { connect: { id: accountId } },
    birthDate: randBetweenDate({
      from: new Date('01/01/1950'),
      to: new Date('01/01/2000'),
    }),
    createdAt: randBetweenDate({
      from: new Date('01/01/2020'),
      to: new Date(),
    }),
    email: randEmail({ firstName, lastName }),
    ethnicity: sample(Object.values(Ethnicity)),
    firstName,
    gender,
    lang: 'en-US',
    lastName,
    mrn: randNumber({ length: 3, max: 9999, min: 1000 }).join('-'),
    notes: randBoolean() ? randSentence() : null,
    phone: randPhoneNumber({ countryCode: 'US' }).replace(
      /[ ()]/g,
      '',
    ),
    timezone: sample(SUPPORTED_TIMEZONES),
  }
}

const SUPPORTED_TIMEZONES = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Phoenix',
  'America/Los_Angeles',
  'America/Anchorage',
  'America/Adak',
  'Pacific/Honolulu',
]

const getTestData = (): TestCreateInput[] => [
  {
    description: `If you have symptoms of a disease that may be caused by genetic changes, sometimes called mutated genes, genetic testing can reveal if you have the suspected disorder. For example, genetic testing may be used to confirm a diagnosis of cystic fibrosis or Huntington's disease.`,
    name: 'Diagnostic testing',
    status: TestStatus.AVAILABLE,
    type: TestType.DIAGNOSTIC,
  },
  {
    description: `If you have a family history of a genetic condition, getting genetic testing before you have symptoms may show if you're at risk of developing that condition. For example, this type of test may be useful for identifying your risk of certain types of colorectal cancer.`,
    name: 'Presymptomatic and predictive testing',
    status: TestStatus.AVAILABLE,
    type: TestType.PRESYMPTOMATIC,
  },
  {
    description: `If you have a family history of a genetic disorder — such as sickle cell anemia or cystic fibrosis — or you're in an ethnic group that has a high risk of a specific genetic disorder, you may choose to have genetic testing before having children. An expanded carrier screening test can detect genes associated with a wide variety of genetic diseases and mutations and can identify if you and your partner are carriers for the same conditions.`,
    name: 'Carrier testing',
    status: TestStatus.AVAILABLE,
    type: TestType.CARRIER,
  },
  {
    description: `If you have a particular health condition or disease, this type of genetic testing may help determine what medication and dosage will be most effective and beneficial for you.`,
    name: 'Pharmacogenetics',
    status: TestStatus.UNAVAILABLE,
    type: TestType.PHARMACOGENETICS,
  },
  {
    description: `If you're pregnant, tests can detect some types of abnormalities in your baby's genes. Down syndrome and trisomy 18 syndrome are two genetic disorders that are often screened for as part of prenatal genetic testing. Traditionally this is done looking at markers in blood or by invasive testing such as amniocentesis. Newer testing called cell-free DNA testing looks at a baby's DNA via a blood test done on the mother.`,
    name: 'Prenatal testing',
    status: TestStatus.AVAILABLE,
    type: TestType.PRENATAL,
  },
  {
    description: `This is the most common type of genetic testing. In the United States, all states require that newborns be tested for certain genetic and metabolic abnormalities that cause specific conditions. This type of genetic testing is important because if results show there's a disorder such as congenital hypothyroidism, sickle cell disease or phenylketonuria (PKU), care and treatment can begin right away.`,
    name: 'Newborn screening',
    status: TestStatus.AVAILABLE,
    type: TestType.NEWBORN_SCREENING,
  },
  {
    description: `Also called preimplantation genetic diagnosis, this test may be used when you attempt to conceive a child through in vitro fertilization. The embryos are screened for genetic abnormalities. Embryos without abnormalities are implanted in the uterus in hopes of achieving pregnancy`,
    name: 'Preimplantation testing',
    status: TestStatus.AVAILABLE,
    type: TestType.PREIMPLANTATION,
  },
]

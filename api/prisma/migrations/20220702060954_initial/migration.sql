-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('UNKNOWN', 'MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "Ethnicity" AS ENUM ('AMERICAN_INDIAN_OR_ALASKA_NATIVE', 'ASIAN', 'BLACK_AFRICAN_AMERICAN', 'HISPANIC_OR_LATINO', 'NATIVE_HAWAIIAN_OR_PACIFIC_ISLANDER', 'WHITE', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "TestType" AS ENUM ('DIAGNOSTIC', 'PRESYMPTOMATIC', 'CARRIER', 'PHARMACOGENETICS', 'PRENATAL', 'NEWBORN_SCREENING', 'PREIMPLANTATION');

-- CreateEnum
CREATE TYPE "TestStatus" AS ENUM ('AVAILABLE', 'UNAVAILABLE');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'CANCELED');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT E'America/Los_Angeles',
    "lang" TEXT NOT NULL DEFAULT E'en-US',
    "settings" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "externalId" TEXT,
    "timezone" TEXT NOT NULL DEFAULT E'America/Los_Angeles',
    "lang" TEXT NOT NULL DEFAULT E'en-US',
    "settings" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "mrn" TEXT NOT NULL,
    "birthDate" DATE NOT NULL,
    "ethnicity" "Ethnicity",
    "timezone" TEXT NOT NULL DEFAULT E'America/Los_Angeles',
    "phone" TEXT,
    "email" TEXT,
    "notes" TEXT,
    "gender" "Gender" NOT NULL DEFAULT E'UNKNOWN',
    "lang" TEXT NOT NULL DEFAULT E'en-US',
    "removed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "type" "TestType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "TestStatus" NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "accountId" TEXT,
    "testId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT E'PENDING',
    "patientId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_externalId_key" ON "User"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_id_key" ON "Patient"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Test_id_key" ON "Test"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

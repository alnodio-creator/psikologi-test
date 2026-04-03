/*
  Warnings:

  - You are about to drop the column `Phone` on the `TestResult` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TestResult" DROP COLUMN "Phone",
ADD COLUMN     "JumlahCase" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "Lamakerja" TEXT NOT NULL DEFAULT '';

/*
  Warnings:

  - You are about to drop the column `quizId` on the `Option` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_quizId_fkey";

-- AlterTable
ALTER TABLE "Option" DROP COLUMN "quizId";

/*
  Warnings:

  - You are about to drop the column `avatar` on the `Verein` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Verein" DROP COLUMN "avatar",
ADD COLUMN     "avatarUrl" TEXT;

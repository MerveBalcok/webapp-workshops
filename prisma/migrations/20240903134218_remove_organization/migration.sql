/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `imageURL` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `instagramLink` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `organization` on the `Workshop` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Verein" ADD COLUMN     "avatar" TEXT;

-- AlterTable
ALTER TABLE "Workshop" DROP COLUMN "createdAt",
DROP COLUMN "description",
DROP COLUMN "imageURL",
DROP COLUMN "instagramLink",
DROP COLUMN "organization",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "image" TEXT;

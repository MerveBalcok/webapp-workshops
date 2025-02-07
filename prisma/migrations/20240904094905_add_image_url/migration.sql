/*
  Warnings:

  - You are about to drop the column `avatar` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Workshop` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Workshop" DROP COLUMN "avatar",
DROP COLUMN "image",
ADD COLUMN     "imageUrl" TEXT;

/*
  Warnings:

  - You are about to drop the column `name` on the `Urls` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Urls` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Urls_name_idx";

-- AlterTable
ALTER TABLE "Urls" DROP COLUMN "name",
DROP COLUMN "updatedAt";

-- CreateIndex
CREATE INDEX "Urls_shortUrl_idx" ON "Urls"("shortUrl");

/*
  Warnings:

  - You are about to drop the column `shortUrl` on the `Urls` table. All the data in the column will be lost.
  - Added the required column `shortUrlID` to the `Urls` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Urls_shortUrl_idx";

-- AlterTable
ALTER TABLE "Urls" DROP COLUMN "shortUrl",
ADD COLUMN     "shortUrlID" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Urls_shortUrlID_idx" ON "Urls"("shortUrlID");

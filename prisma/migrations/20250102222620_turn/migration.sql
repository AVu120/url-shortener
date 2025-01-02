/*
  Warnings:

  - The `shortUrlID` column on the `Urls` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Urls" DROP COLUMN "shortUrlID",
ADD COLUMN     "shortUrlID" SERIAL NOT NULL;

-- CreateIndex
CREATE INDEX "Urls_shortUrlID_idx" ON "Urls"("shortUrlID");

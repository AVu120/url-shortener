-- CreateTable
CREATE TABLE "Urls" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "longUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Urls_name_idx" ON "Urls"("name");

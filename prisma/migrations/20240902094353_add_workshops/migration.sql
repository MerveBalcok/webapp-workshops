-- CreateTable
CREATE TABLE "Workshop" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "organization" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "instagramLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vereinId" INTEGER,

    CONSTRAINT "Workshop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Verein" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Verein_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_vereinId_fkey" FOREIGN KEY ("vereinId") REFERENCES "Verein"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "dailyVisits" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "displayName" TEXT,
ADD COLUMN     "lastActive" TIMESTAMP(3),
ADD COLUMN     "phoneNumber" INTEGER,
ADD COLUMN     "premiumType" TEXT NOT NULL DEFAULT 'FREE',
ADD COLUMN     "suffix" INTEGER,
ADD COLUMN     "visitcount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "weeklyVisits" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";

-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

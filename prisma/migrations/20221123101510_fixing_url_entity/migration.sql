/*
  Warnings:

  - You are about to drop the column `email` on the `Url` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Url` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Url` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Url` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shortURL]` on the table `Url` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `longURL` to the `Url` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortURL` to the `Url` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Url` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Url_email_key";

-- AlterTable
ALTER TABLE "Url" DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "password",
ADD COLUMN     "longURL" TEXT NOT NULL,
ADD COLUMN     "shortURL" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortURL_key" ON "Url"("shortURL");

/*
  Warnings:

  - A unique constraint covering the columns `[nickname]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Made the column `authorId` on table `WebsiteUrl` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "WebsiteUrl" DROP CONSTRAINT "WebsiteUrl_authorId_fkey";

-- AlterTable
ALTER TABLE "WebsiteUrl" ALTER COLUMN "authorId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Author_nickname_key" ON "Author"("nickname");

-- AddForeignKey
ALTER TABLE "WebsiteUrl" ADD CONSTRAINT "WebsiteUrl_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

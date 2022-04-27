/*
  Warnings:

  - You are about to drop the column `author` on the `Image` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "author",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

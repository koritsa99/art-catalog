/*
  Warnings:

  - You are about to drop the column `fileUrl` on the `Image` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "fileUrl",
ADD COLUMN     "imageUrls" TEXT[];

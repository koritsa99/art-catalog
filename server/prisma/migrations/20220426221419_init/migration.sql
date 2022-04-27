-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "originalUrl" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nickname" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebsiteUrl" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "authorId" INTEGER,

    CONSTRAINT "WebsiteUrl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ImageToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_title_key" ON "Tag"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToTag_AB_unique" ON "_ImageToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToTag_B_index" ON "_ImageToTag"("B");

-- AddForeignKey
ALTER TABLE "WebsiteUrl" ADD CONSTRAINT "WebsiteUrl_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToTag" ADD CONSTRAINT "_ImageToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToTag" ADD CONSTRAINT "_ImageToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "artists" (
    "id" SERIAL NOT NULL,
    "artist_name" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artworks" (
    "id" SERIAL NOT NULL,
    "artwork" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "artworks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exposition" (
    "id" SERIAL NOT NULL,
    "gallery_name" VARCHAR(200) NOT NULL,
    "artwork" INTEGER,
    "artist" INTEGER,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "exposition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "exposition" ADD CONSTRAINT "exposition_artist_fkey" FOREIGN KEY ("artist") REFERENCES "artists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exposition" ADD CONSTRAINT "exposition_artwork_fkey" FOREIGN KEY ("artwork") REFERENCES "artworks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

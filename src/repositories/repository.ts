import prisma from "../db/database.js";
import { Exposition, Artist, Artwork } from "../protocols/types";

export async function insertArtistRepository(artist: Artist) {
    return prisma.artists.create({
        data: artist
    });
}

export async function insertArtworkRepository(artwork: Artwork) {
    return prisma.artworks.create({
        data: artwork
    });
}

export async function insertExpositionRepository(exposition: Exposition) {
    return prisma.exposition.create({
        data: exposition
    })

}

export async function getExpositionRepository() {
    return prisma.exposition.findMany({
        include: {
            artworks: {
                select: {
                    artwork: true
                },    
            },
            artists: {
                select: {
                    artist_name: true
                }
            }
        }
    });
}

export async function updateExpositionRepository(exposition: Exposition, id: number) {
    return prisma.exposition.upsert({
        where: {
            id
        },
        create: exposition,
        update: exposition
    });
}

export async function deleteExpositionRepository(id: number) {
    return prisma.exposition.delete({
        where: {
            id
        }
    });
}
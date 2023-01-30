import { Exposition, Artist, Artwork } from "../protocols/types";
import { insertArtistRepository, insertArtworkRepository, insertExpositionRepository, getExpositionRepository, updateExpositionRepository, deleteExpositionRepository }
    from "../repositories/repository.js";

async function insertArtist(artist: Artist) {
    const insArtist = await insertArtistRepository(artist);
    return insArtist;
}

async function insertArtwork(artwork: Artwork) {
    const insertArt = await insertArtworkRepository(artwork);
    return insertArt;
}

async function insertExposition(exposition: Exposition) {
    const insertExpo = await insertExpositionRepository(exposition);
    return insertExpo;
}

async function getExpositions() {
    const expositions = await getExpositionRepository();
    return expositions;
}

async function updateExpo(id: number, exposition: Exposition) {
    const { gallery_name, artwork, artist } = exposition;
    const updExpo = await updateExpositionRepository(exposition, id);
    return updExpo;
}

async function deleteExpo(id: number) {
    const deleteGame = await deleteExpositionRepository(id);
    return deleteGame;
}

const services = {
    insertArtist,
    insertArtwork,
    insertExposition,
    getExpositions,
    updateExpo,
    deleteExpo
};

export default services;
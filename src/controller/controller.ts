import { Request, Response } from "express";
import services from "../services/service.js";
import { Exposition, Artist, Artwork } from "../protocols/types";

export async function insertArtist(req: Request, res: Response) {
    const artist = req.body as Artist;

    try {
        const insertArtist = await services.insertArtist(artist);
        res.status(201).send(insertArtist);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function insertArtWork(req: Request, res: Response) {
    const artwork = req.body as Artwork;

    try {
        const insertArt = await services.insertArtwork(artwork);
        res.status(201).send(insertArt);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function insertExposition(req: Request, res: Response) {
    const exposition = req.body as Exposition;

    try {
        const insertExpo = await services.insertExposition(exposition);
        res.status(201).send(insertExpo);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function getExposition(req: Request, res: Response) {
    try {
        const expositions = await services.getExpositions();
        res.status(200).send(expositions);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function updateExposition(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const newExposition = req.body as Exposition;
    try {
        await services.updateExpo(id, newExposition)
        res.sendStatus(200);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function deleteExposition(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const deleted = await services.deleteExpo(id);
        if (deleted === null) {
            return res.sendStatus(404)
        }
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}
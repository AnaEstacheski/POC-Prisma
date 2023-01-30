import { Request, Response } from "express";
import { Exposition } from "../protocols/types.js";
import prisma from "../db/database.js";

export function insertArtist(req: Request, res: Response): void {
    
}

export function insertArtWork(req: Request, res: Response): void {

}

export async function insertExposition(req: Request, res: Response) {
    const exposition = req.body as Exposition;
}

export async function getExposition(req: Request, res: Response) {

}

export async function updateExposition(req: Request, res: Response) {

}

export async function deleteExposition(req: Request, res: Response) {

}
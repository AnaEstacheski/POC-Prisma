import { Request, Response } from "express";
import { User } from "../protocols/User.js";
import connectionDB from "../db/database.js";
import {QueryResult} from "pg"

export async function postUser(req: Request, res: Response) {
    const user = req.body as User;

    try {
        connectionDB.query(`INSERT INTO users ("username", "createdAt") VALUES ($1, NOW());`,
        [user.username]);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function getUser(req: Request, res: Response) {
 
   
}
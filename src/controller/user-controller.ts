import { Request, Response } from "express";
import { User } from "../protocols/User.js";
import connectionDB from "../db/database.js";
import { QueryResult } from "pg"

export function postUser(req: Request, res: Response): void {
    const user = req.body as User;

    try {
        connectionDB.query(`INSERT INTO users ("username", "createdAt") VALUES ($1, NOW());`,
            [user.username]);
        res.sendStatus(201);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function getUser(req: Request, res: Response) {
    const username = req.query.username as string;

    const filterUsername = await connectionDB.query
        (`SELECT username FROM users WHERE username LIKE $1;`, [`${username}%`]);
    if (username) {
        return res.send(filterUsername.rows);
    }

    const usernames: QueryResult<User> = await connectionDB.query(`SELECT * FROM users;`)
    return res.send(usernames.rows);
}

export function updateUser(req: Request, res: Response) {
    const id = req.params.id as string;
    const newUsername = req.body as User;

    try {
        connectionDB.query(`UPDATE users SET username=$1 WHERE id=$2;`, [newUsername, id]);
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export function deleteUser(req: Request, res: Response) {
    
}
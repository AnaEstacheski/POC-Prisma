import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export function schemaValidation(schema: ObjectSchema<any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).send({ message: error.details[0].message });
            return;
        }
        next();
    };
}
import { Request, Response, Router } from "express";
import { deleteUser, getUser, postUser, updateUser } from "../controller/user-controller.js";
import { schemaValidation } from "../middleware/schemaValidation.js";
import userSchema from "../schema/userSchema.js";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
})
router.get("/users", getUser);
router.post("/users", schemaValidation(userSchema), postUser);
router.put("/users/:id", schemaValidation(userSchema), updateUser);
router.delete("/users/:id", deleteUser);


export default router;
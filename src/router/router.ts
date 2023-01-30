import { Request, Response, Router } from "express";
import { insertExposition, getExposition, updateExposition, deleteExposition, insertArtWork, insertArtist } from "../controller/controller.js";
import { artistSchema, artWorkSchema, expositionSchema } from "../schema/schemas.js";
import { schemaValidation } from "../middleware/schemaValidation.js";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
})
router.get("/expositions", getExposition);
router.post("/artist", schemaValidation(artistSchema), insertArtist);
router.post("/art", schemaValidation(artWorkSchema), insertArtWork);
router.post("/expositions", schemaValidation(expositionSchema), insertExposition);
router.put("/expositions/:id", schemaValidation(expositionSchema), updateExposition);
router.delete("/expositions/:id", deleteExposition);


export default router;
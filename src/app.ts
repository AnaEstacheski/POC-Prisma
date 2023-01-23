import express, { json } from "express";
import cors from "cors";
import router from "./router/router.js";

const app = express();

app.use(json());
app.use(cors());
app.use(router);

const port = 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
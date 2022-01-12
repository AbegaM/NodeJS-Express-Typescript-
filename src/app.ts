import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors"

import env from "./config/environments";
import router from "./api"

const app: Application = express();

app.use(express.json())
app.use(cors())
app.use("/api", router);

const port = env.port;
app.listen(port, () => console.log(`Server is running on port ${port}`));



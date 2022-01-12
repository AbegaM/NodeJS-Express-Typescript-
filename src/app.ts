import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
dotenv.config()

const app: Application = express();

const getMessage = (msg: string): string => {
  return msg;
};

app.get("/api/test", (req: Request, res: Response, next: NextFunction) => {
  var message = getMessage("Server is running");
  res.send({ message });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));

import express from "express";
import controllers from "../controller";

const router = express.Router();

const makeHttpRequest = (controller: any) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const httpData = {
        data: req.body,
        query: req.query,
        param: req.params,
        token: req.headers["authorization"],
      };

      const result = await controller(httpData);
      res.status(200).send({ status: true, message: result });
    } catch (error) {
      console.log(error);
      res.status(400).send({ status: false, message: error });
    }
  };
};

router.get("/test", (req, res) => {
  res.send({ message: "server is working" });
});

router.post("/role", makeHttpRequest(controllers.createRole));

export default router;

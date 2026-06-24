import { Router } from "express";

const welcomeRoutes = Router();

welcomeRoutes.get("/welcome", (_req, res) => {
  return res.json({
    "message": "Bem-vinda ao Backend!"
  });
});

export { welcomeRoutes };
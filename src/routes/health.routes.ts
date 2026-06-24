import { Router } from "express";

const healthRoutes = Router();

healthRoutes.get("/health", (_req, res) => {
  return res.json({
    status: "ok",
  });
});

export { healthRoutes };
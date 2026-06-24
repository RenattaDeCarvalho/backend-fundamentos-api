import { Router } from "express";
import { StudentController } from "../controllers/StudentController";

const studentsRoutes = Router();
const studentController = new StudentController();

studentsRoutes.get("/students", studentController.list);

studentsRoutes.post("/students", studentController.create);

export { studentsRoutes };
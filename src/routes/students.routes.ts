import { Router } from "express";
import { StudentController } from "../controllers/StudentController";

const studentsRoutes = Router();
const studentController = new StudentController();

studentsRoutes.get("/students", studentController.list);

studentsRoutes.post("/students", studentController.create);

studentsRoutes.get("/students/search", studentController.findByName);

studentsRoutes.get("/students/:id", studentController.findById);

export { studentsRoutes };
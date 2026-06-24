import { Request, Response } from "express";
import { students } from "../data/students";

export class StudentController {
    list(_req: Request, res: Response): Response {
        return res.json(students);
    }

    create(req: Request, res: Response): Response {
        const { name } = req.body;
        const student = {
            id: students.length + 1,
            name
        };

        students.push(student);
        return res.status(201).json(student);
    }
}
import { Request, Response } from "express";
import { students } from "../data/students";

export class StudentController {
    list(_req: Request, res: Response): Response {
        return res.json(students);
    }

    create(req: Request, res: Response): Response {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                message: "The 'name' field is required.",
            });
        }
        const student = {
            id: students.length + 1,
            name
        };

        students.push(student);
        return res.status(201).json(student);
    }
    findById(req: Request, res: Response): Response {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: "The 'id' query parameter is required.",
            });
        }

        const student = students.find(
            student => student.id === Number(id)
        );

        if (!student) {
            return res.status(404).json({
                message: 'Student not found.',
            });
        }

        return res.status(200).json(student);
    }
    findByName(req: Request, res: Response): Response {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({
                message: "The 'name' query parameter is required.",
            });
        }

        const filteredStudents = students.filter(student =>
            student.name.toLowerCase().includes(String(name).toLowerCase())
        );

        if (filteredStudents.length === 0) {
            return res.status(404).json({
                message: "Student not found.",
            });
        }

        return res.status(200).json(filteredStudents);
    }
}
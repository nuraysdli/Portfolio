import express from "express";
import {
  createStudent,
  getStudents,
  getStudentById,
  deleteStudent,
  updateStudentPut,
  updateStudentPatch,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudentPut);
router.patch("/:id", updateStudentPatch);

export default router;

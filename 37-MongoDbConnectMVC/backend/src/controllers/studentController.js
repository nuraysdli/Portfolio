import student from "../models/studentModel.js";

export const createStudent = async (req, res) => {
  try {
    let newStudent = new student(req.body);

    await newStudent.save();

    res.status(201).send({ message: "Create new student", data: newStudent });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const getStudents = async (req, res) => {
  try {
    let students = await student.find();

    if (!students) {
      res.status(404).send("Student not found");
    }

    res.status(200).send(students);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

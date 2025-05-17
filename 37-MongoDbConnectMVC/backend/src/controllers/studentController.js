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
    if (!students || students.length === 0) {
      return res.status(404).send("No students found");
    }
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const oneStudent = await student.findById(studentId);

    if (!oneStudent) {
      return res.status(404).send("Student not found");
    }

    res.status(200).send(oneStudent);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const deletedStudent = await student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).send("Student not found");
    }

    res.status(200).send({ message: "Student deleted", data: deletedStudent });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const updateStudentPut = async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedStudent = await student.findByIdAndUpdate(
      studentId,
      req.body,
      {
        new: true,
        runValidators: true,
        overwrite: true,
      }
    );

    if (!updatedStudent) {
      return res.status(404).send("Student not found");
    }

    res
      .status(200)
      .send({ message: "Student fully updated", data: updatedStudent });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const updateStudentPatch = async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedStudent = await student.findByIdAndUpdate(
      studentId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedStudent) {
      return res.status(404).send("Student not found");
    }

    res
      .status(200)
      .send({ message: "Student partially updated", data: updatedStudent });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

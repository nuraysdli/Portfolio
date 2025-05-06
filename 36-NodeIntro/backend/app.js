import express from "express";
import fs from "fs";

const app = express();
const port = 4747;

app.use(express.json());

let { students } = JSON.parse(fs.readFileSync("db.json"));
console.log(students);

app.get("/api/students", (req, res) => {
  try {
    res.status(200).send({ message: "success", data: students });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

app.get("/api/students/:id", (req, res) => {
  let { id } = req.params;

  try {
    let findStudents = students.find((student) => student.id == id);
    if (!findStudents) {
      res.status(404).send({ message: "Student not found" });
    }

    res.status(200).send({ message: "success", data: findStudents });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

app.post("/api/students", (req, res) => {
  try {
    const { name, age, email, major } = req.body;
    const newStudent = {
      id: students.length ? students[students.length - 1].id + 1 : 1,
      name,
      age,
      email,
      major,
    };
    students.push(newStudent);
    fs.writeFileSync("db.json", JSON.stringify({ students }, null, 2));
    res.status(201).send({ message: "Student created", data: newStudent });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

app.delete("/api/students/:id", (req, res) => {
  try {
    let { id } = req.params;
    students = students.filter((s) => s.id != id);
    fs.writeFileSync("db.json", JSON.stringify({ students }, null, 2));
    res.status(200).send({ message: "Student deleted" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

app.put("/api/students/:id", (req, res) => {
  try {
    let { id } = req.params;
    let index = students.findIndex((s) => s.id == id);
    if (index === -1)
      return res.status(404).send({ message: "Student not found" });

    const { name, age, email, major } = req.body;
    students[index] = { id: +id, name, age, email, major };

    fs.writeFileSync("db.json", JSON.stringify({ students }, null, 2));
    res.status(200).send({ message: "Student updated", data: students[index] });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

app.patch("/api/students/:id", (req, res) => {
  try {
    let { id } = req.params;
    let student = students.find((s) => s.id == id);
    if (!student) return res.status(404).send({ message: "Student not found" });

    Object.assign(student, req.body);
    fs.writeFileSync("db.json", JSON.stringify({ students }, null, 2));
    res
      .status(200)
      .send({ message: "Student partially updated", data: student });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});
app.listen(port, () => {
  console.log(`server is run ${port}`);
});

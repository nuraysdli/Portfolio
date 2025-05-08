import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    isStudent: { type: Boolean, required: true },
  },
  {
    Collection: "Students",
    timestamps: true,
  }
);

const student = mongoose.model("Student", studentSchema);

export default student;

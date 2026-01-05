import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    min: { type: Number, default: 40 },
    max: { type: Number, default: 100 },
    marks: { type: Number, required: true },
  },
  { _id: false }
);

const MarksheetSchema = new mongoose.Schema(
  {
    // 🔹 Student Info
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    rollNumber: { type: String, required: true },
    enrollment: { type: String, required: true, index: true },
    profileImage: { type: String },

    // 🔹 Academic Info
    session: { type: String, required: true },
    semester: { type: String, required: true },
    examiner: { type: String },
    issueDate: { type: Date, required: true },

    // 🔹 Marks
    subjects: { type: [SubjectSchema], required: true },

    total: { type: Number, required: true },
    maxTotal: { type: Number, required: true },
    percentage: { type: Number, required: true },
    grade: { type: String, required: true },
    marksInWords: { type: String, required: true },

    // 🔹 Meta
    status: {
      type: String,
      enum: ["DRAFT", "PUBLISHED"],
      default: "PUBLISHED",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Marksheet ||
  mongoose.model("Marksheet", MarksheetSchema);

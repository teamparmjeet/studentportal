import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema(
  {
    enrollmentNumber: {
      type: String,
      unique: true,
      index: true,
    },

    programme: { type: String, required: true },
    admissionDate: { type: Date, required: true },

    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },

    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    maritalStatus: { type: String },

    mobile: { type: String, required: true },
    email: { type: String, required: true },

    nationality: { type: String },
    profileImage: { type: String },

    presentAddress: { type: String, required: true },
    correspondenceAddress: { type: String },

    academicDetails: { type: String, required: true },
    highestQualification: { type: String },
    workExperience: { type: String },

    examOption: { type: String },
    paymentOption: { type: String },

    paymentStatus: { type: String, default: "Pending" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

/* ======================
   AUTO GENERATE ENROLLMENT (FIXED)
====================== */
AdmissionSchema.pre("save", async function () {
  // Prevent regeneration on update
  if (this.enrollmentNumber) return;

  const year = new Date().getFullYear();

  const programmeCode =
    this.programme === "Diploma"
      ? "DIP"
      : this.programme === "Bachelor"
      ? "BAC"
      : "MAS";

  const lastRecord = await mongoose
    .model("Admission1")
    .findOne({})
    .sort({ createdAt: -1 });

  const lastNumber = lastRecord?.enrollmentNumber
    ? parseInt(lastRecord.enrollmentNumber.split("-").pop())
    : 0;

  const nextNumber = String(lastNumber + 1).padStart(6, "0");

  this.enrollmentNumber = `ENR-${year}-${programmeCode}-${nextNumber}`;
});

export default mongoose.models.Admission1 ||
  mongoose.model("Admission1", AdmissionSchema);

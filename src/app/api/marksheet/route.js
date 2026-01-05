import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Marksheet from "@/app/model/MarksheetModel";
import AdmissionModel from "@/app/model/AdmissionModel";

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    /* =========================
       REQUIRED FIELD CHECK
    ========================= */
    const requiredFields = [
      "name",
      "fatherName",
      "rollNumber",
      "enrollment",
      "session",
      "semester",
      "issueDate",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    if (!data.subjects || !data.subjects.length) {
      return NextResponse.json(
        { message: "At least one subject is required" },
        { status: 400 }
      );
    }

    /* =========================
       SAVE / UPDATE MARKSHEET
    ========================= */
    const marksheet = await Marksheet.findOneAndUpdate(
      { enrollment: data.enrollment },
      { $set: data },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    /* =========================
       UPDATE ADMISSION STATUS
    ========================= */
    await AdmissionModel.findOneAndUpdate(
      { enrollmentNumber: data.enrollment },
      { $set: { marksheetStatus: true } },
      { new: true }
    );

    return NextResponse.json(
      {
        message: "Marksheet saved & admission updated successfully",
        id: marksheet._id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Marksheet save error:", error);

    return NextResponse.json(
      { message: error.message || "Failed to save marksheet" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Certificate from "@/app/model/CertificateModel";
import AdmissionModel from "@/app/model/AdmissionModel";

/* =========================
   POST → CREATE / UPDATE CERTIFICATE
========================= */
export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    /* =========================
       REQUIRED FIELDS
    ========================= */
    const requiredFields = [
      "enrollmentNo",
      "name",
      "fatherName",
      "dob",
      "institute",
      "year",
      "issueDate",
      "place",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    /* =========================
       PREPARE PAYLOAD
    ========================= */
    const payload = {
      enrollmentNo: data.enrollmentNo,
      name: data.name,
      fatherName: data.fatherName,
      motherName: data.motherName || "",
      dob: new Date(data.dob),
      institute: data.institute,
      profileimage: data.profileimage || "",
      district: data.district || "",
      state: data.state || "",
      year: data.year,
      issueDate: new Date(data.issueDate),
      place: data.place,
      status: data.status || "PUBLISHED",
    };

    /* =========================
       SAVE / UPDATE CERTIFICATE
    ========================= */
    const certificate = await Certificate.findOneAndUpdate(
      { enrollmentNo: data.enrollmentNo },
      { $set: payload },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    /* =========================
       UPDATE ADMISSION STATUS (OPTIONAL)
    ========================= */
    await AdmissionModel.findOneAndUpdate(
      { enrollmentNumber: data.enrollmentNo },
      { $set: { certificateStatus: true } },
      { new: true }
    );

    /* =========================
       SUCCESS RESPONSE
    ========================= */
    return NextResponse.json(
      {
        message: "✅ Certificate saved successfully",
        id: certificate._id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Certificate save error:", error);

    return NextResponse.json(
      {
        message: error.message || "Failed to save certificate",
      },
      { status: 500 }
    );
  }
}

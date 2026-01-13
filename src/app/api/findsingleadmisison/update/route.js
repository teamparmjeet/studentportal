import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Admission from "@/app/model/AdmissionModel";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";
async function saveFileLocally(file, folder = "uploads") {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(
    process.cwd(),
    "public",
    folder
  );

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const ext = path.extname(file.name);
  const fileName = `${randomUUID()}${ext}`;
  const filePath = path.join(uploadDir, fileName);

  fs.writeFileSync(filePath, buffer);

  return `/${folder}/${fileName}`;
}


export async function PUT(req) {
  try {
    await dbConnect();
    const formData = await req.formData();

    const enrollmentNumber = formData.get("enrollmentNumber");

    if (!enrollmentNumber) {
      return NextResponse.json(
        { message: "Enrollment number is required" },
        { status: 400 }
      );
    }

    /* ======================
       IMAGE LOGIC (LOCAL)
    ====================== */
    let imageUrl;
    const profileImage = formData.get("profileImage");

    if (profileImage && profileImage.name && profileImage.size > 0) {
      imageUrl = await saveFileLocally(
        profileImage,
        "uploads/admissions"
      );
    }

    /* ======================
       BUILD UPDATE OBJECT
    ====================== */
    const updateData = {
      programme: formData.get("programme"),
      paymentStatus: formData.get("paymentStatus"),
      isActive: formData.get("isActive"),
      enrollStatus: formData.get("enrollStatus"),
      admissionDate: formData.get("admissionDate"),
      name: formData.get("name"),
      fatherName: formData.get("fatherName"),
      motherName: formData.get("motherName"),
      dob: formData.get("dob"),
      gender: formData.get("gender"),
      maritalStatus: formData.get("maritalStatus"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
      nationality: formData.get("nationality"),
      presentAddress: formData.get("presentAddress"),
      correspondenceAddress: formData.get("correspondenceAddress"),
      academicDetails: formData.get("academicDetails"),
      highestQualification: formData.get("highestQualification"),
      workExperience: formData.get("workExperience"),
      examOption: formData.get("examOption"),
      paymentOption: formData.get("paymentOption"),
    };

    // ✅ attach image only if updated
    if (imageUrl) {
      updateData.profileImage = imageUrl;
    }

    /* ======================
       UPDATE DB
    ====================== */
    const updated = await Admission.findOneAndUpdate(
      { enrollmentNumber },
      updateData,
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { message: "Admission not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Admission updated successfully", updated },
      { status: 200 }
    );

  } catch (error) {
    console.error("UPDATE ERROR:", error);
    return NextResponse.json(
      { message: "Update failed", error: error.message },
      { status: 500 }
    );
  }
}


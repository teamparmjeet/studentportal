import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import AdmissionModel from "@/app/model/AdmissionModel";
import { uploadToS3 } from "@/app/lib/awsUpload";

/* ======================
   POST → Apply Now
====================== */
export async function POST(req) {
  try {
    await dbConnect();
    const formData = await req.formData();

    let imageUrl = "";
    const profileImage = formData.get("profileImage");
    if (profileImage) {
      imageUrl = await uploadToS3(profileImage, "admissions");
    }

    const admission = await AdmissionModel.create({
      programme: formData.get("programme"),
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
      profileImage: imageUrl,
      presentAddress: formData.get("presentAddress"),
      correspondenceAddress: formData.get("correspondenceAddress"),
      academicDetails: formData.get("academicDetails"),
      highestQualification: formData.get("highestQualification"),
      workExperience: formData.get("workExperience"),
      examOption: formData.get("examOption"),
      paymentOption: formData.get("paymentOption"),
    });

    return NextResponse.json(
      {
        message: "Admission submitted successfully",
        enrollmentNumber: admission.enrollmentNumber,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

/* ======================
   GET → Admin List (optional)
====================== */
export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    const filterField = searchParams.get("filterField");
    const filterValue = searchParams.get("filterValue");

    let query = {};

    // 🔍 Server-side filter
    if (filterField && filterValue) {
      query[filterField] = { $regex: filterValue, $options: "i" };
    }

    const [data, total] = await Promise.all([
      AdmissionModel.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),

      AdmissionModel.countDocuments(query),
    ]);

    return NextResponse.json({
      data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
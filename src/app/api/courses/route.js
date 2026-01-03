import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import CourseModel from "@/app/model/CourseModel";
import { uploadToS3 } from "@/app/lib/awsUpload";

// GET
export async function GET() {
  await dbConnect();
  const courses = await CourseModel.find().sort({ createdAt: -1 });
  return NextResponse.json(courses);
}

// POST (Add)
export async function POST(req) {
  await dbConnect();

  const formData = await req.formData();

  const title = formData.get("title");
  const image = formData.get("image");
  const descriptionPoints = JSON.parse(
    formData.get("descriptionPoints") || "[]"
  );

  if (!title || !image) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const imageUrl = await uploadToS3(image, "courses");

  const course = await CourseModel.create({
    title,
    image: imageUrl,
    descriptionPoints,
  });

  return NextResponse.json(course);
}
export async function DELETE(req) {
  await dbConnect();

  const { _id } = await req.json();

  if (!_id) {
    return NextResponse.json(
      { error: "Invalid ID" },
      { status: 400 }
    );
  }

  await CourseModel.findByIdAndDelete(_id);

  return NextResponse.json({ success: true });
}
// PUT (Update + Toggle)
export async function PUT(req) {
  await dbConnect();

  const formData = await req.formData();
  const _id = formData.get("_id");

  if (!_id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const updateData = {};

  if (formData.get("title")) updateData.title = formData.get("title");
  if (formData.get("isActive"))
    updateData.isActive = formData.get("isActive") === "true";

  if (formData.get("descriptionPoints")) {
    updateData.descriptionPoints = JSON.parse(
      formData.get("descriptionPoints")
    );
  }

  if (formData.get("image")) {
    updateData.image = await uploadToS3(
      formData.get("image"),
      "courses"
    );
  }

  const updated = await CourseModel.findByIdAndUpdate(_id, updateData, {
    new: true,
  });

  return NextResponse.json(updated);
}

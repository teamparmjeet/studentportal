import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import CourseModel from "@/app/model/CourseModel";
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

  // Ensure folder exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const ext = path.extname(file.name);
  const fileName = `${randomUUID()}${ext}`;
  const filePath = path.join(uploadDir, fileName);

  fs.writeFileSync(filePath, buffer);

  // Return public URL
  return `/${folder}/${fileName}`;
}

/* =========================
   GET (List Courses)
========================= */
export async function GET() {
  await dbConnect();
  const courses = await CourseModel.find().sort({ createdAt: -1 });
  return NextResponse.json(courses);
}

/* =========================
   POST (Create Course)
========================= */
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
      { error: "Title and Image are required" },
      { status: 400 }
    );
  }

  // ✅ Local upload
  const imageUrl = await saveFileLocally(image, "uploads/courses");

  const course = await CourseModel.create({
    title,
    image: imageUrl,
    descriptionPoints: descriptionPoints.map((d) => ({
      title: d.title,
      code: d.code,
    })),
  });

  return NextResponse.json(course);
}


/* =========================
   PUT (Update Course)
========================= */
export async function PUT(req) {
  await dbConnect();

  const formData = await req.formData();
  const _id = formData.get("_id");

  if (!_id) {
    return NextResponse.json(
      { error: "Invalid course ID" },
      { status: 400 }
    );
  }

  const updateData = {};

  if (formData.get("title")) {
    updateData.title = formData.get("title");
  }

  if (formData.get("isActive") !== null) {
    updateData.isActive = formData.get("isActive") === "true";
  }

  if (formData.get("descriptionPoints")) {
    updateData.descriptionPoints = JSON.parse(
      formData.get("descriptionPoints")
    ).map((d) => ({
      title: d.title,
      code: d.code,
    }));
  }

  const image = formData.get("image");
  if (image && image.name) {
    updateData.image = await saveFileLocally(
      image,
      "uploads/courses"
    );
  }

  const updatedCourse = await CourseModel.findByIdAndUpdate(
    _id,
    updateData,
    { new: true }
  );

  return NextResponse.json(updatedCourse);
}


/* =========================
   DELETE (Remove Course)
========================= */
export async function DELETE(req) {
  await dbConnect();

  const { _id } = await req.json();

  if (!_id) {
    return NextResponse.json(
      { error: "Invalid course ID" },
      { status: 400 }
    );
  }

  await CourseModel.findByIdAndDelete(_id);

  return NextResponse.json({ success: true });
}

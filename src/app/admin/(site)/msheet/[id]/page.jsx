"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MarksheetPreview from "@/Components/MarksheetPreview/MarksheetPreview";
export default function MarksheetPage() {
  const { id } = useParams();
  const [saving, setSaving] = useState(false);

  /* ======================
     MAIN SINGLE OBJECT
  ====================== */
  const [marksheet, setMarksheet] = useState({
    name: "",
    fatherName: "",
    rollNumber: "",
    profileImage: "",
    enrollment: "",
    session: "",
    semester: "",
    examiner: "",
    issueDate: new Date().toISOString().split("T")[0],
    title1: "",   // ✅ NEW
    title2: "",   // ✅ NEW
    subjects: [],
    total: 0,
    maxTotal: 0,
    percentage: 0,
    grade: "",
    marksInWords: "",
  });

  const [courses, setCourses] = useState([]);
  const [selectedCourseIds, setSelectedCourseIds] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState({});
  const handleSaveMarksheet = async () => {
    try {
      setSaving(true);

      const res = await fetch("/api/marksheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(marksheet),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to save");
        return;
      }

      alert("✅ Marksheet saved successfully");
    } catch (err) {
      alert("❌ Error saving marksheet");
    } finally {
      setSaving(false);
    }
  };
  /* ======================
     FETCH COURSES
  ====================== */
  useEffect(() => {
    fetch("/api/courses")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(course => ({
          _id: course._id,
          title: course.title,
          subjects: course.descriptionPoints.map(sub => ({
            title: sub.title,
            code: sub.code,
          }))

        }));
        setCourses(formatted);
      });
  }, []);

  /* ======================
     FETCH STUDENT
  ====================== */
  useEffect(() => {
    fetch(`/api/findsingleadmisison/${id}`)
      .then(res => res.json())
      .then(data => {
        setMarksheet(prev => ({
          ...prev,
          name: data.name,
          fatherName: data.fatherName,
          rollNumber: data.rollNumber,
          profileImage: data.profileImage,
          enrollment: data.enrollmentNumber,
        }));
      });
  }, [id]);

  /* ======================
     NUMBER → WORDS
  ====================== */
  const numberToWords = (num) => {
    const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
      "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen",
      "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (num === 0) return "Zero";
    if (num < 20) return a[num];
    if (num < 100) return b[Math.floor(num / 10)] + (num % 10 ? " " + a[num % 10] : "");
    if (num < 1000)
      return a[Math.floor(num / 100)] + " Hundred" +
        (num % 100 ? " " + numberToWords(num % 100) : "");
    return num.toString();
  };

  /* ======================
     UPDATE SUBJECT MARKS
  ====================== */
  const updateSubject = (code, field, value) => {
    setMarksheet(prev => {
      const updatedSubjects = prev.subjects.map(s =>
        s.code === code ? { ...s, [field]: Number(value) } : s
      );

      const total = updatedSubjects.reduce((t, s) => t + s.marks, 0);
      const maxTotal = updatedSubjects.reduce((t, s) => t + s.max, 0);
      const percentage = maxTotal
        ? ((total / maxTotal) * 100).toFixed(2)
        : 0;

      const grade =
        percentage >= 75 ? "A" :
          percentage >= 60 ? "B" :
            percentage >= 45 ? "C" : "D";

      return {
        ...prev,
        subjects: updatedSubjects,
        total,
        maxTotal,
        percentage,
        grade,
        marksInWords: numberToWords(total),
      };
    });
  };


  /* ======================
     PREPARE SUBJECTS
  ====================== */
  useEffect(() => {
    const subjects = [];

    selectedCourseIds.forEach(courseId => {
      const course = courses.find(c => c._id === courseId);
      const subs = selectedSubjects[courseId] || [];

      subs.forEach(sub => {
        if (!subjects.find(s => s.subject === sub)) {
          subjects.push({
            subject: sub.title,
            code: sub.code,
            min: 40,
            max: 100,
            marks: 0,
          });

        }
      });
    });

    setMarksheet(prev => ({ ...prev, subjects }));
  }, [selectedCourseIds, selectedSubjects]);

  /* ======================
     UI
  ====================== */
  return (
    <div className="grid md:grid-cols-2 gap-8 p-8 bg-slate-100 min-h-screen">

      {/* LEFT PANEL */}
      <div className="space-y-6">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleSaveMarksheet}
            disabled={saving}
            className="px-6 py-2 rounded-lg bg-orange-600 text-white font-semibold
               hover:bg-orange-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Marksheet"}
          </button>
        </div>

        {/* ADDITIONAL DETAILS */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-5 text-gray-800">
            Marksheet Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {/* Session */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Academic Session
              </label>
              <input
                type="text"
                placeholder="e.g. 2024–25"
                value={marksheet.session}
                onChange={(e) =>
                  setMarksheet({ ...marksheet, session: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-400
                   focus:border-orange-400"
              />
            </div>

            {/* Semester */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Semester
              </label>
              <input
                type="text"
                placeholder="e.g. 5th Semester"
                value={marksheet.semester}
                onChange={(e) =>
                  setMarksheet({ ...marksheet, semester: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-400
                   focus:border-orange-400"
              />
            </div>

            {/* Examiner */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Controller of examination
              </label>
              <input
                type="text"
                placeholder="e.g. Dr. R. K. Sharma"
                value={marksheet.examiner}
                onChange={(e) =>
                  setMarksheet({ ...marksheet, examiner: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-400
                   focus:border-orange-400"
              />
            </div>

            {/* Issue Date */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Date of Issue
              </label>
              <input
                type="date"
                value={marksheet.issueDate}
                onChange={(e) =>
                  setMarksheet({ ...marksheet, issueDate: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-400
                   focus:border-orange-400"
              />
            </div>
            {/* Title 1 */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Title 1
              </label>
              <input
                type="text"
                placeholder="e.g. BOARD OF TECHNICAL EDUCATION"
                value={marksheet.title1}
                onChange={(e) =>
                  setMarksheet({ ...marksheet, title1: e.target.value })
                }
                className="w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>

            {/* Title 2 */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Title 2
              </label>
              <input
                type="text"
                placeholder="e.g. STATEMENT OF MARKS"
                value={marksheet.title2}
                onChange={(e) =>
                  setMarksheet({ ...marksheet, title2: e.target.value })
                }
                className="w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>

          </div>
        </div>


        {/* COURSE SELECT */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Select Subjects</h2>

          {courses.map(course => (
            <div key={course._id} className="border p-3 mb-2 rounded">
              <label className="font-semibold flex gap-2">
                <input
                  type="checkbox"
                  checked={selectedCourseIds.includes(course._id)}
                  onChange={e =>
                    setSelectedCourseIds(prev =>
                      e.target.checked
                        ? [...prev, course._id]
                        : prev.filter(id => id !== course._id)
                    )
                  }
                />
                {course.title}
              </label>

              {selectedCourseIds.includes(course._id) && (
                <div className="ml-5 mt-2">
                  {course.subjects.map(sub => (
                    <label key={sub.code} className="flex gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={
                          selectedSubjects[course._id]?.some(s => s.code === sub.code) || false
                        }
                        onChange={e => {
                          const prev = selectedSubjects[course._id] || [];
                          const updated = e.target.checked
                            ? [...prev, sub]
                            : prev.filter(s => s.code !== sub.code);

                          setSelectedSubjects({
                            ...selectedSubjects,
                            [course._id]: updated,
                          });
                        }}
                      />
                      {sub.code} - {sub.title}
                    </label>
                  ))}

                </div>
              )}
            </div>
          ))}
        </div>

        {/* MARKS INPUT */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Enter Marks</h2>

          {marksheet.subjects.map((s, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 mb-2">
              <input
                value={`${s.code} - ${s.subject}`}
                disabled
                className="border p-2 bg-gray-100"
              />

              <input
                type="number"
                value={s.min}
                onChange={e => updateSubject(s.code, "min", e.target.value)}
                className="border p-2 text-center"
              />

              <input
                type="number"
                value={s.max}
                onChange={e => updateSubject(s.code, "max", e.target.value)}
                className="border p-2 text-center"
              />

              <input
                type="number"
                value={s.marks}
                onChange={e => updateSubject(s.code, "marks", e.target.value)}
                className="border p-2 text-center"
              />
            </div>
          ))}

        </div>
      </div>

      <MarksheetPreview marksheet={marksheet} />
    </div>
  );
}

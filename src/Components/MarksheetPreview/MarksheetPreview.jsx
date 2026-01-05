"use client";

export default function MarksheetPreview({ marksheet }) {
  if (!marksheet) return null;

  return (
    <div className="bg-[#fffaf0] border-[6px] border-[#c28a3d] rounded-md shadow-xl p-8 font-serif">
      <h1 className="text-center text-2xl font-bold mb-4">MARKSHEET</h1>

      <div className="text-sm space-y-1">
        <p><b>Name:</b> {marksheet.name}</p>
        <p><b>Father Name:</b> {marksheet.fatherName}</p>
        <p><b>Roll Number:</b> {marksheet.rollNumber}</p>
        <p><b>Enrollment:</b> {marksheet.enrollment}</p>
        <p><b>Session:</b> {marksheet.session}</p>
        <p><b>Semester:</b> {marksheet.semester}</p>
      </div>

      <table className="w-full mt-4 border text-sm">
        <thead className="bg-orange-100">
          <tr>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Min</th>
            <th className="border p-2">Max</th>
            <th className="border p-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          {marksheet.subjects?.map((s, i) => (
            <tr key={i}>
              <td className="border p-2">{s.subject}</td>
              <td className="border p-2 text-center">{s.min}</td>
              <td className="border p-2 text-center">{s.max}</td>
              <td className="border p-2 text-center">{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-sm space-y-1">
        <p><b>Total:</b> {marksheet.total} / {marksheet.maxTotal}</p>
        <p><b>Percentage:</b> {marksheet.percentage}%</p>
        <p><b>Grade:</b> {marksheet.grade}</p>
        <p><b>Marks in Words:</b> {marksheet.marksInWords} Only</p>
      </div>

      <div className="mt-8 flex justify-between text-sm">
        <p><b>Examiner:</b> {marksheet.examiner}</p>
        <p><b>Date of Issue:</b> {marksheet.issueDate}</p>
      </div>
    </div>
  );
}

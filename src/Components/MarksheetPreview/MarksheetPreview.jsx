"use client";

import React from 'react';
import Image from 'next/image';




const numberToWords = (num) => {
  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
    "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen",
    "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (num === 0) return "Zero";

  if (num < 20) return a[num];
  if (num < 100)
    return b[Math.floor(num / 10)] + (num % 10 ? " " + a[num % 10] : "");
  if (num < 1000)
    return a[Math.floor(num / 100)] + " Hundred " + (num % 100 ? numberToWords(num % 100) : "");
  if (num < 100000)
    return numberToWords(Math.floor(num / 1000)) + " Thousand " + (num % 1000 ? numberToWords(num % 1000) : "");

  return num.toString();
};

export default function MarksheetPreview({ marksheet }) {
  if (!marksheet) return null;

  // Default values to ensure the preview looks good even without full data
  const subjects = marksheet.subjects || [
    { code: "ES501", subject: "Industrial Devices & Control", max: 100, min: 40, marks: 66 },
  ];

  // 🔹 Dynamic Calculations
  const maxTotal = subjects.reduce((sum, s) => sum + Number(s.max || 0), 0);
  const minTotal = subjects.reduce((sum, s) => sum + Number(s.min || 0), 0);
  const grandTotal = subjects.reduce((sum, s) => sum + Number(s.marks || 0), 0);

  const data = {
    rollNumber: marksheet.rollNumber || "-----",
    enrollment: marksheet.enrollment || "",
    examiner: marksheet.examiner || "",
    semester: marksheet.semester || "--",
    title1: marksheet.title1 || "----",
    title2: marksheet.title2 || "---",
    session: marksheet.session || "---",
    name: marksheet.name || "---",
    fatherName: marksheet.fatherName || "--",
    issueDate: marksheet.issueDate || "-",

    subjects,

    maxTotal,
    minTotal,
    grandTotal,

    result: marksheet.result || (grandTotal >= minTotal ? "PASS" : "FAIL"),
    grade: marksheet.grade || "A",
    marksInWords:
      marksheet.marksInWords ||
      `${numberToWords(grandTotal)}`
  };


  return (
    // Main Container - Fixed A4 width proportions
    <div className="w-full max-w-[210mm] mx-auto my-8 relative z-0">

      {/* --- LAYER 1: The Attractive Complex Border Frame Simulation --- */}
      {/* Outer darkest brown border with shadow */}
      <div className="bg-[#5c3a21] p-[2px] rounded-sm shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
        {/* Gold inner border layer */}
        <div className="bg-[#cba35800] p-[3px] border border-[#8c6239]">
          {/* Lighter cream inner border layer */}
          <div className="bg-[#fcf8e3] p-[2px] border border-[#5c3a21]">
            {/* The innermost thin decorative line before content */}
            <div className="border-[3px] border-double border-[#8c6239]/60 relative overflow-hidden">

              {/* --- LAYER 2: Background Image Texture --- */}
              <div
                className="absolute bgbg h-full w-full top-0 left-0  z-0"

              ></div>

              {/* --- LAYER 3: The Watermark Seal --- */}
              <div className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none overflow-hidden">
                <Image
                  src="/images/1600w-Aro9ea9TDP4-removebg-preview.png"
                  alt="Watermark Seal"
                  className=" w-48 h-48 sm:w-64 sm:h-64 object-contain"
                  height={50}
                  width={50}
                />
              </div>

              {/* --- LAYER 4: Actual Content Area --- */}
              <div className="p-6 relative z-10 font-serif text-[#332211]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>

                {/* HEADER SECTION */}
                <div className="text-center mb-5 relative">
                  <div className="relative flex items-center mb-4">

                    {/* LOGO – LEFT FIXED */}
                    <div className="absolute left-0 flex items-center">
                      <Image
                        src="/images/1600w-Aro9ea9TDP4-removebg-preview.png"
                        alt="Watermark Seal"
                        height={50}
                        width={50}
                      />
                    </div>

                    {/* CENTER TEXT – TRUE CENTER */}
                    <div className="mx-auto text-center">
                      <h1
                        className="text-xl sm:text-3xl font-bold text-[#3d2616] tracking-wide uppercase leading-tight"

                      >
                        My Brand
                      </h1>
                      <p className="text-[9px] sm:text-[10px] font-bold text-[#1a365d] mt-1 tracking-wider">
                        ISO 9001 : 2015 CERTIFIED INTERNATIONAL B-SCHOOL
                      </p>
                    </div>

                  </div>


                  {/* Orange Marksheet Ribbon */}
                  <div className="flex justify-center mt-4 relative z-20">
                    <div className="bg-gradient-to-b from-[#e67e22] to-[#d35400] text-white font-bold px-14 py-1.5 rounded-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] border-b-[2px] border-[#a04000] uppercase tracking-[0.2em] text-sm">
                      Marksheet
                    </div>
                  </div>
                </div>

                {/* STUDENT DETAILS GRID (Top) */}
                <div className="border-[1.5px] border-[#5c3a21] text-[11px] font-bold mb-5 shadow-sm bg-[#fffdfa]/40">
                  <div className="grid grid-cols-4 text-center divide-x-[1.5px] divide-[#5c3a21] border-b-[1.5px] border-[#5c3a21] bg-[#f3e5d0] text-[#5c3a21] tracking-wider">
                    <div className="py-1.5">ROLL NO.</div>
                    <div className="py-1.5">ENROLLMENT NO</div>
                    <div className="py-1.5">SEM./YEAR/SEC</div>
                    <div className="py-1.5">SESSION EXAMINATION</div>
                  </div>
                  <div className="grid grid-cols-4 text-center divide-x-[1.5px] divide-[#5c3a21] font-semibold">
                    <div className="py-2">{data.rollNumber}</div>
                    <div className="py-2">{data.enrollment}</div>
                    <div className="py-2">{data.semester}</div>
                    <div className="py-2">{data.session}</div>
                  </div>
                </div>

                {/* COURSE TITLE */}
                <div className="text-center mb-5">
                  <h2 className="text-lg font-bold text-[#3d2616] underline decoration-[1.5px] underline-offset-4">
                    {data.title1} <br /> ({data.title2})
                  </h2>
                </div>

                {/* NAME SECTION */}
                <div className="flex justify-between text-[11px] font-bold mb-4 uppercase px-1 tracking-wide">
                  <div className="flex items-end">
                    <span className="text-[#5c3a21] mr-2 whitespace-nowrap">NAME :</span>
                    <span className="border-b-[1.5px] border-dotted border-[#5c3a21] min-w-[220px] inline-block text-center pb-0.5 text-[12px]">{data.name}</span>
                  </div>
                  <div className="flex items-end">
                    <span className="text-[#5c3a21] mr-2 whitespace-nowrap">FATHER:</span>
                    <span className="border-b-[1.5px] border-dotted border-[#5c3a21] min-w-[220px] inline-block text-center pb-0.5 text-[12px]">{data.fatherName}</span>
                  </div>
                </div>

                {/* MAIN SUBJECT TABLE */}
                {/* MAIN SUBJECT TABLE */}
                <table className="w-full border-collapse border-[1.5px] border-[#5c3a21] text-[10px] font-medium mb-0 bg-[#fffdfa]/40 table-fixed">
                  <thead>
                    <tr className="bg-[#f3e5d0] text-center font-bold text-[#5c3a21] tracking-wider uppercase">
                      <th className="border-[1.5px] border-[#5c3a21] py-2 w-[8%]">S.No</th>
                      <th className="border-[1.5px] border-[#5c3a21] py-2 w-[12%]">Code</th>
                      <th className="border-[1.5px] border-[#5c3a21] py-2 text-left pl-4 w-[40%]">Subject (s) / Paper (s)</th>
                      <th className="border-[1.5px] border-[#5c3a21] py-2 w-[12%] leading-tight text-[9px]">Max<br />Marks</th>
                      <th className="border-[1.5px] border-[#5c3a21] py-2 w-[12%] leading-tight text-[9px]">Min<br />Passing</th>
                      <th className="border-[1.5px] border-[#5c3a21] py-2 w-[16%] leading-tight text-[9px]">Marks<br />Obtained</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Dynamic Subject Rows */}
                    {data.subjects.map((s, i) => (
                      <tr key={i} className="text-center h-9 hover:bg-orange-50/30 transition-colors">
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/30 border-l-[1.5px] border-l-[#5c3a21] py-1 font-bold">
                          {String(i + 1).padStart(2, '0')}.
                        </td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/30 py-1 tracking-tighter">
                          {s.code}
                        </td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/30 py-1 text-left font-semibold pl-4 uppercase text-[11px] truncate">
                          {s.subject}
                        </td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/30 py-1 bg-[#f3e5d0]/20 font-semibold">
                          {s.max}
                        </td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/30 py-1">
                          {s.min}
                        </td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/30 py-1 font-bold text-[12px] ">
                          {s.marks}
                        </td>
                      </tr>
                    ))}

                    {/* Intelligent Filler Rows: Ensures table height is always consistent for A4 printing */}
                    {[...Array(Math.max(0, 10 - data.subjects.length))].map((_, i) => (
                      <tr key={`empty-${i}`} className="h-9">
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/10 border-l-[1.5px] border-l-[#5c3a21]"></td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/10"></td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/10"></td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/10 bg-[#f3e5d0]/10"></td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/10"></td>
                        <td className="border-r-[1.5px] border-b-[1px] border-[#5c3a21]/10"></td>
                      </tr>
                    ))}

                    {/* TOTALS SECTION */}
                    <tr className="border-[1.5px] border-[#5c3a21] font-bold bg-[#f3e5d0] shadow-inner">
                      <td colSpan={3} className="text-right py-2.5 pr-4 border-r-[1.5px] border-[#5c3a21] uppercase text-[10px] tracking-[0.1em]">
                        Grand Total (Current Semester / Year)
                      </td>
                      <td className="border-r-[1.5px] border-[#5c3a21] text-center text-[12px]">
                        {data.maxTotal}
                      </td>
                      <td className="border-r-[1.5px] border-[#5c3a21] text-center text-[12px]">
                        {data.minTotal}
                      </td>
                      <td className="text-center text-[14px]  text-[#5c3a21]">
                        {data.grandTotal}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* RESULTS FOOTER GRID */}
                <div className="border-[1.5px] border-t-0 border-[#5c3a21] text-[10px] font-bold p-1.5 flex justify-between items-center bg-[#f3e5d0] mb-10 shadow-sm">
                  <div className="flex gap-6 uppercase tracking-wider">
                    <span>RESULT : <span className="text-black">{data.result}</span></span>
                    <span className="ml-6">GRADE : <span className="text-black">"{data.grade}"</span></span>
                  </div>
                  <span className="uppercase italic text-black text-[11px]">
                    {data.marksInWords} Only
                  </span>

                </div>

                {/* SIGNATURES FOOTER */}
                <div className="flex justify-between items-end text-[11px] mt-20 py-20 px-2 relative">
                  <div>
                    <p className="font-bold mb-1 text-[#5c3a21] uppercase tracking-wider"> Date of Issue :</p>
                    <p className="font-semibold pl-2">
                      {new Date(data.issueDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>

                  </div>

                  <div className="flex flex-col items-center justify-end relative min-w-[150px]">
                    <p className="font-bold border-t-[1.5px] border-[#5c3a21] pt-1 text-[#5c3a21] uppercase tracking-wider w-full text-center">Controller of Examination</p>
                    <p className="font-bold border-t-[1.5px] border-[#5c3a21] pt-1 text-[#5c3a21] uppercase tracking-wider w-full text-center">{data.examiner}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
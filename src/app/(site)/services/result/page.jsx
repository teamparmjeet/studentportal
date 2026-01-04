'use client';

import React, { useState } from 'react';

export default function Page() {
  const [enrollment, setEnrollment] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!enrollment) {
      alert('Please enter Enrollment Number');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/result?enrollment=${enrollment}`);
      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Result not found');
        setLoading(false);
        return;
      }

      setResult(data);
    } catch (err) {
      alert('Something went wrong');
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-32">
      <div className="max-w-3xl mx-auto">

        {/* 🔹 Search Form */}
        {!result && (
          <div className="bg-white rounded shadow-lg p-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Find Result
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Enrollment Number"
                value={enrollment}
                onChange={(e) => setEnrollment(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 text-white py-3 rounded-md font-medium
                           hover:bg-orange-700 transition disabled:opacity-60"
              >
                {loading ? 'Searching...' : 'Submit'}
              </button>
            </form>
          </div>
        )}

        {/* 🔹 RESULT CARD */}
        {result && (
          <div className="bg-[#fffaf3] border border-gray-300 rounded shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                DELHI INSTITUTE OF MANAGEMENT<br />
                TECHNOLOGY AND SCIENCE
              </h2>
              <p className="text-sm text-blue-700 mt-1">
                ( ISO 9001-2015 CERTIFIED INTERNATIONAL B-SCHOOL )
              </p>
              <p className="mt-2 font-semibold">Examination Result</p>
            </div>

            <div className="grid md:grid-cols-[1fr_180px] gap-6">
              {/* Details */}
              <div className="space-y-2 text-sm text-gray-800">
                <p><b>Name of Student:</b> {result.name}</p>
                <p><b>Father of Student:</b> {result.fatherName}</p>
                <p><b>Enrollment No:</b> {result.enrollment}</p>
                <p><b>Course:</b> {result.course}</p>
                <p><b>Year of Passing:</b> {result.year}</p>
                <p><b>Grade:</b> <span className="font-bold">{result.grade}</span></p>
              </div>

              {/* Photo */}
              <div className="flex justify-center">
                <img
                  src={result.photo}
                  alt="Student"
                  className="w-40 h-44 object-cover border"
                />
              </div>
            </div>

            {/* Footer */}
            <p className="text-center font-semibold mt-6">
              We Wish you All The Best For Your Career
            </p>

            {/* Grading */}
            <div className="mt-6">
              <h4 className="font-bold mb-2">Grading System</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>A = Excellent (+70%)</li>
                <li>B = Very Good (+60%)</li>
                <li>D = Good (+50%)</li>
                <li>E = Satisfactory (+40%)</li>
              </ul>
            </div>

            {/* Back Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  setResult(null);
                  setEnrollment('');
                }}
                className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-black"
              >
                Search Another Result
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';

export default function Page() {
  const [enrollment, setEnrollment] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enrollment || !dob) {
      alert('Please enter Enrollment Number and Date of Birth');
      return;
    }

    console.log({
      enrollment,
      dob,
    });

    // 🔹 API call logic here
  };

  return (
    <section className="flex items-center justify-center bg-gray-100 px-4 py-32">
      <div className="w-full max-w-2xl bg-white rounded shadow-lg p-8 md:p-10">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Get Registration Details
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Enrollment Number */}
          <input
            type="text"
            placeholder="Enrollment Number"
            value={enrollment}
            onChange={(e) => setEnrollment(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700
                       focus:outline-none focus:ring-1 focus:ring-orange-500"
          />

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700
                         focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-md font-medium
                       hover:bg-orange-700 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </section>
  );
}

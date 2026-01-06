"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function AdminDashboard() {
  const router = useRouter();

   const handleLogout = async () => {
         await signOut({
             callbackUrl: "/", // logout ke baad redirect
         });
     };

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Admission */}
        <Link
          href="/admin/Admission"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border-l-4 border-orange-500"
        >
          <h2 className="text-lg font-semibold text-gray-700">
            Admission
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Manage student admissions
          </p>
        </Link>

        {/* Courses */}
        <Link
          href="/admin/Courses"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border-l-4 border-blue-500"
        >
          <h2 className="text-lg font-semibold text-gray-700">
            Courses
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Add & manage courses
          </p>
        </Link>

        {/* Enquiry */}
        <Link
          href="/admin/Enquiry"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border-l-4 border-green-500"
        >
          <h2 className="text-lg font-semibold text-gray-700">
            Enquiry
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            View user enquiries
          </p>
        </Link>

        {/* Marksheet */}
        <Link
          href="/admin/msheet"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border-l-4 border-purple-500"
        >
          <h2 className="text-lg font-semibold text-gray-700">
            Marksheet
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Generate & manage marksheets
          </p>
        </Link>
      </div>

      {/* Logout Button */}
      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          Logout
        </button>
      </div>
    </section>
  );
}

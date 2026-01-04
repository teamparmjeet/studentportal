"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Admission Details
      </h1>

      <p className="text-lg">
        Enrollment Number:
        <span className="ml-2 font-mono text-orange-600">
          {id}
        </span>
      </p>
    </div>
  );
}

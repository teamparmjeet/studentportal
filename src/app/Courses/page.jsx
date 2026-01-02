import React from 'react'

export default function page() {
    const courses = [
  {
    category: "Diploma Course",
    list: [
      "Diploma in Management",
      "Diploma in Computer Applications",
      "Diploma in Business Administration",
      "Diploma in Information Technology",
    ],
  },
  {
    category: "Bachelor Course",
    list: [
      "Bachelor of Business Administration (BBA)",
      "Bachelor of Computer Applications (BCA)",
      "Bachelor of Arts (BA)",
      "Bachelor of Commerce (B.Com)",
    ],
  },
  {
    category: "Master Course",
    list: [
      "Master of Business Administration (MBA)",
      "Master of Computer Applications (MCA)",
      "Master of Arts (MA)",
      "Master of Commerce (M.Com)",
    ],
  },
];
  return (
    <div> <main className="bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Courses
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-orange-100">
            Discover career-oriented diploma, bachelor, and master programs
            designed to help you achieve professional success.
          </p>
        </div>
      </section>

      {/* COURSES LIST */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="p-6 border-b">
                <h2 className="text-2xl font-semibold text-orange-600">
                  {course.category}
                </h2>
              </div>

              <ul className="p-6 space-y-3 text-gray-600">
                {course.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* WHY OUR COURSES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-semibold mb-10 text-gray-800">
            Why Our Courses?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Flexible Learning</h4>
              <p className="text-sm text-gray-600">
                Study at your own pace with distance learning support.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Industry Relevant</h4>
              <p className="text-sm text-gray-600">
                Curriculum designed as per current industry needs.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Affordable Fees</h4>
              <p className="text-sm text-gray-600">
                Quality education at a reasonable cost.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Career Support</h4>
              <p className="text-sm text-gray-600">
                Guidance for career growth and professional success.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-14 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Choose the Right Course for Your Future
        </h2>
        <p className="mb-6 text-orange-100">
          Get in touch with us today to know more about admissions and course
          details.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Enquire Now
        </a>
      </section>

    </main>
    </div>
  )
}

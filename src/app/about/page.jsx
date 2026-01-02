import React from 'react'

export default function page() {
  return (
    <div>
      <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Institute
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-orange-100">
            Delhi Institute Of Management Technology & Science is committed to
            shaping future professionals through quality education and
            flexible learning.
          </p>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Delhi Institute Of Management Technology & Science is an autonomous
              institute for higher education. We focus on providing accessible,
              affordable, and industry-oriented education to students across
              India through distance learning programs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower learners with practical knowledge,
              professional skills, and globally relevant qualifications that
              lead to early success in life.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">
              Key Highlights
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Autonomous Institute</li>
              <li>✔ Distance Learning Programs</li>
              <li>✔ Industry-Focused Curriculum</li>
              <li>✔ Affordable Fee Structure</li>
              <li>✔ Student-Centric Approach</li>
            </ul>
          </div>

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="p-8 border rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a leading institute in distance education by delivering
              quality learning experiences that nurture knowledge, innovation,
              and professional excellence.
            </p>
          </div>

          <div className="p-8 border rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide flexible and career-oriented education
              programs that help students balance learning with professional and
              personal commitments.
            </p>
          </div>

        </div>
      </section>

      {/* COURSES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-semibold mb-10 text-gray-800">
            Our Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-3">
                Diploma Courses
              </h4>
              <p className="text-gray-600 text-sm">
                Skill-based diploma programs designed for quick career entry
                and professional growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-3">
                Bachelor Courses
              </h4>
              <p className="text-gray-600 text-sm">
                Undergraduate programs that build strong academic and practical
                foundations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-3">
                Master Courses
              </h4>
              <p className="text-gray-600 text-sm">
                Advanced programs focused on leadership, specialization,
                and career advancement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Flexible Learning</h4>
              <p className="text-sm text-gray-600">
                Learn anytime, anywhere at your own pace.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Expert Faculty</h4>
              <p className="text-sm text-gray-600">
                Experienced educators and industry experts.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Career Focused</h4>
              <p className="text-sm text-gray-600">
                Programs aligned with industry requirements.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Student Support</h4>
              <p className="text-sm text-gray-600">
                Continuous academic and administrative support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-14 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Start Your Learning Journey Today
        </h2>
        <p className="mb-6 text-orange-100">
          Join Delhi Institute Of Management Technology & Science and take the
          next step towards a successful future.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>

    </main>
    </div>
  )
}

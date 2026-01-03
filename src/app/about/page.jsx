import React from 'react'
import Welcome from '@/Components/Welcome/Welcome'
import Link from 'next/link'
export default function page() {
  return (
    <div>
      <main className="">


        <section className="relative  footerbg whychoose">
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
        <section className=" py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* LEFT CONTENT */}
              <div>
                <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold 
          text-orange-600 bg-orange-100 rounded-full">
                  About Mybrand
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                  Who We Are
                </h2>

                <p className="text-slate-600 leading-relaxed mb-4">
                  Delhi Institute Of Management Technology & Science is an autonomous
                  institute for higher education. We focus on providing accessible,
                  affordable, and industry-oriented education to students across India
                  through distance learning programs.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Our mission is to empower learners with practical knowledge,
                  professional skills, and globally relevant qualifications that lead
                  to early success in life.
                </p>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  <span className="text-orange-600">Key</span> Highlights
                </h3>

                <ul className="space-y-4">
                  {[
                    'Autonomous Institute',
                    'Distance Learning Programs',
                    'Industry-Focused Curriculum',
                    'Affordable Fee Structure',
                    'Student-Centric Approach',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600">
                      <span className="w-6 h-6 flex items-center justify-center 
                rounded-full bg-orange-100 text-orange-600 text-sm font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-orange-50 py-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ['10+', 'Years of Excellence'],
              ['50K+', 'Students Enrolled'],
              ['100+', 'Career Programs'],
              ['PAN India', 'Student Reach'],
            ].map(([value, label], i) => (
              <div key={i}>
                <p className="text-2xl md:text-4xl font-bold text-orange-600">{value}</p>
                <p className="text-slate-600 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="footerbg text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-slate-300 mb-8">
            Join DIOMTS and take the next step toward a successful career.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600  px-8 py-3 rounded-full font-semibold text-white"
          >
            Contact Admissions
          </Link>
        </section>
        {/* VISION & MISSION */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-orange-600 text-sm font-semibold">
                Our Purpose
              </span>
              <h2 className="text-3xl font-bold mt-2">
                Vision & Mission
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-8 rounded-2xl shadow bg-slate-50">
                <h3 className="text-xl font-semibold mb-3">
                  <span className="text-orange-600">Our</span> Vision
                </h3>
                <p className="text-slate-600">
                  To become a leading institute in distance education by delivering
                  quality learning experiences that nurture innovation and excellence.
                </p>
              </div>

              <div className="p-8 rounded-2xl shadow bg-slate-50">
                <h3 className="text-xl font-semibold mb-3">
                  <span className="text-orange-600">Our</span> Mission
                </h3>
                <p className="text-slate-600">
                  To provide flexible, career-oriented programs that help students
                  balance education with professional and personal commitments.
                </p>
              </div>
            </div>
          </div>
        </section>







      </main>
    </div>
  )
}

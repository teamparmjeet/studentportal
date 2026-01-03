'use client';

import Image from 'next/image';
import Link from 'next/link';
const courses = [
  {
    title: 'Bachelor of Engineering',
    image: '/images/slide1.webp',
  },
  {
    title: 'Bachelor of Business Administration (BBA)',
    image: '/images/slide2.webp',
  },
  {
    title: 'Master of Business Administration (MBA)',
    image: '/images/slide3.webp',
  },
  {
    title: 'Computer Courses',
    image: '/images/slide3.webp',
  },
];

export default function CoursesPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className=" footerbg whychoose text-white">
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

      {/* COURSES GRID */}
      <section className="py-20">
  <div className="max-w-7xl mx-auto px-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {courses.map((course, index) => (
        <div
          key={index}
          className="group relative h-[320px] rounded-xl overflow-hidden shadow-lg bg-black"
        >

          {/* Image */}
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={index === 0}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Bottom Content */}
          <div
            className="
              absolute bottom-0 left-0 right-0
              bg-black/90
              px-6 py-3
              transition-all duration-300
              max-h-[56px]
              group-hover:max-h-[160px]
            "
          >
            <h3
              className="
                text-lg font-semibold text-white
                overflow-hidden
                transition-all duration-300
                group-hover:whitespace-normal
                line-clamp-1
                group-hover:line-clamp-3
              "
            >
              {course.title}
            </h3>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>



    </main>
  );
}

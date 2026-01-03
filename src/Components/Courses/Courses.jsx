'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

export default function Courses() {
    const courses = [
        {
            title: 'Diploma Engineering',
            img: '/images/slide1.webp',
        },
        {
            title: 'Bachelor of Engineering',
            img: '/images/slide1.webp',
        },
        {
            title: 'Master of Engineering',
            img: '/images/slide1.webp',
        },
        {
            title: 'BBA',
            img: '/images/slide1.webp',
        },
        {
            title: 'MBA',
            img: '/images/slide1.webp',
        },
        {
            title: 'Computer Courses',
            img: '/images/slide1.webp',
        },
    ];

    return (
        <section className="py-20  from-white to-gray-50">
            <div className="container mx-auto px-6">

              
                <div className=" flex justify-between items-center mb-5">
                    <h2 className="text-xl md:text-4xl font-extrabold">
                        Explore Our Courses
                    </h2>
                    <Link
                        href="/Courses"
                        className="flex items-center justify-center gap-2  py-1 rounded
               text-orange-500  font-semibold   
        "
                    >
                        View All
                        <span className="text-lg">→</span>
                    </Link>

                </div>
              


                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {courses.map((course, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative h-[320px] rounded-md overflow-hidden shadow-lg">

                                {/* Image */}
                                <Image
                                    src={course.img}
                                    alt={course.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    priority={index === 0}
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0  to-transparent"></div>

                                {/* Title */}
                                <div className="absolute bg-black/90 line-clamp-1 bottom-0 left-0 right-0 px-6 py-2">
                                    <h3 className="text-xl font-bold text-white">
                                        {course.title}
                                    </h3>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Herobanner() {
   const slides = [
    {
        title: 'ADMISSION OPEN 2026',
        desc: 'Enroll now for Diploma, BE, ME (All Branches), BBA, MBA with 100+ specializations, and Computer courses including DCA, PGDCA, BCA & MCA. Limited seats available.',
        img: '/images/focused-female-student-sitting-cross-legged-with-book-library.jpg',
    },
    {
        title: 'Opportunities for Lifelong Learning',
        desc: 'Build your future with industry-focused programs, experienced faculty, modern infrastructure, and career-oriented education designed for long-term success.',
        img: '/images/teenagers-with-tablet-book-studying.jpg',
    },
    {
        title: 'Shape Your Career with Quality Education',
        desc: 'From technical degrees to management and computer programs, we prepare students with practical knowledge, professional skills, and global opportunities.',
        img: '/images/young-female-reading-book-leaning-shelf.jpg',
    },
];


    return (
        <section className="relative w-full h-[50vh] md:h-[90vh] overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1200}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop
                allowTouchMove={false}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full bg-cover bg-center flex items-center"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                            <div className="absolute inset-0 bg-black/85 "></div>

                            <div className="relative z-10 container mx-auto px-6">
                                <div className="max-w-2xl mx-auto text-center text-white">
                                    <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className=" mb-6 text-gray-200">
                                        {slide.desc}
                                    </p>
                                    <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg font-semibold shadow-lg">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

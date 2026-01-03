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
            img: '/images/slide1.webp',
        },
        {
            title: 'Opportunities for Lifelong Learning',
            desc: 'Build your future with industry-focused programs, experienced faculty, modern infrastructure, and career-oriented education designed for long-term success.',
            img: '/images/slide2.webp',
        },
        {
            title: 'Shape Your Career with Quality Education',
            desc: 'From technical degrees to management and computer programs, we prepare students with practical knowledge, professional skills, and global opportunities.',
            img: '/images/slide3.webp',
        },
    ];

    return (
        <section className="relative w-full h-[60vh] md:h-[95vh] overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={2200}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop
                allowTouchMove={false}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="hero-slide relative w-full h-full flex items-center"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                            {/* Soft gradient overlay (NO color flash) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

                            {/* Content */}
                            <div className="relative z-10 container mx-auto px-6">
                                <div className="max-w-3xl mx-auto text-center text-white">
                                    <h1 className="hero-title text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                        {slide.title}
                                    </h1>

                                    <p className="hero-desc text-base md:text-lg mb-8 text-gray-200">
                                        {slide.desc}
                                    </p>

                                    <button className="px-9 py-3 bg-orange-500 hover:bg-orange-600 transition-all duration-300 rounded-xl font-semibold shadow-xl hover:scale-105">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Animations */}
            <style jsx>{`
                .hero-slide {
                    background-size: cover;
                    background-position: center;
                    animation: slowZoom 12s ease-in-out forwards;
                }

                @keyframes slowZoom {
                    from {
                        transform: scale(1);
                    }
                    to {
                        transform: scale(1.08);
                    }
                }

                .hero-title {
                    animation: fadeUp 1.1s ease-out forwards;
                }

                .hero-desc {
                    animation: fadeUp 1.3s ease-out forwards;
                }

                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(25px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}

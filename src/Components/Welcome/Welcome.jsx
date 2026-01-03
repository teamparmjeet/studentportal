import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Welcome() {
    return (
        <>
            <section className="lg:pt-20 lg:pb-5 pt-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Images */}
                        <div className="flex gap-6 justify-center lg:justify-start">
                            <Image
                                src="/images/—Pngtree—smilling student_19164923.webp"
                                height={200}
                                width={200}
                                alt="Graduate Student"
                                className="w-64 h-80 object-cover "
                            />
                            <Image
                                src="/images/—Pngtree—portrait of a young male_19532775.webp"
                                height={200}
                                width={200}
                                alt="Graduate Student"
                                className="w-64 h-80 object-cover  mt-10 hidden sm:block"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
                                Welcome To MyBrand
                            </span>

                            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                10+ Years of Experience in <br />
                                <span className="text-orange-600">Education</span>
                            </h2>

                            <p className="mt-6 text-slate-600 leading-relaxed text-sm md:text-base">
                                Delhi Institute Of Management Technology & Science is an autonomous
                                institute for higher education. It gives a path to early success in
                                life through distance learning courses. These courses consist of
                                concepts, case studies, and industrial training that provide broad
                                exposure to relevant business concepts and management practices.
                            </p>

                            <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                                This helps students get started as managers by enhancing their
                                productivity, decision-making ability, and understanding of business
                                strategies and policies.
                            </p>
                            <Link href="/about">
                                <button className="
              mt-8 inline-flex items-center
              cursor-pointer
              px-8 py-3 rounded-full
              bg-orange-600 text-white
              text-sm font-semibold
              hover:bg-orange-700 transition
              shadow-md hover:shadow-lg
            ">
                                    ABOUT US
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

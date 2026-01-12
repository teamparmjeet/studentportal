import Link from 'next/link'
import React from 'react'

export default function Card2() {
    return (
        <div className=' footerbg whychoose  py-8 md:py-20'>
            <div className=' lg:w-[80%] mx-auto py-4 px-2 text-center'>
                <p className=' text-2xl lg:text-4xl  font-extrabold mb-4'>ADMISSION ENQUIRY</p>
                <p>Initially the student is granted only provisional admission which is confirmed after the receipt of valid Transfer Certificate /Migration Certificate and on completion of other relevant admission formalities.</p>
                <Link href="/contact">
                    <button className="px-9 py-3 bg-white hover:bg-orange-600 hover:text-white cursor-pointer mt-5 transition-all duration-300 rounded-xl font-semibold shadow-xl ">
                       Enquiry
                    </button>
                </Link>

            </div>
        </div>
    )
}

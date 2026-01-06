import React from 'react'
import Contactus from '@/Components/Contactus/Contactus'
export default function page() {
  return (
    <div>
       <main className="bg-gray-50">

      {/* HERO */}
      <section className=" footerbg whychoose text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-orange-100">
            We’re here to help you with admissions, courses, and any questions
            you may have.
          </p>
        </div>
      </section>

      
      <Contactus/>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664.688924660219!2d77.24270266614498!3d28.60913743480658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3214b3b6771%3A0x139279610ab2ccb3!2sPurana%20Quila!5e1!3m2!1sen!2sin!4v1767682211157!5m2!1sen!2sin"
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>

      

    </main>
    </div>
  )
}

import React from 'react'

export default function page() {
  return (
    <div>
       <main className="bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
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

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-8">
              Reach out to us using the details below or fill out the enquiry
              form. Our team will get back to you as soon as possible.
            </p>

            <div className="space-y-5 text-gray-700">
              <div>
                <strong>Address:</strong>
                <p className="mt-1 text-sm">
                  khasrn No.2/17 Vipin Garden Extn, Uttam Nagar,  
                  New Delhi – 110059
                </p>
              </div>

              <div>
                <strong>Email:</strong>
                <p className="mt-1 text-sm">info@diomts.co.in</p>
              </div>

              <div>
                <strong>Phone:</strong>
                <p className="mt-1 text-sm">+91 9354559564</p>
                <p className="text-sm">011-71523642</p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps?q=Vipin%20Garden%20Uttam%20Nagar%20New%20Delhi&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-14 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Need Help With Admissions?
        </h2>
        <p className="mb-6 text-orange-100">
          Contact our admissions team today and take the first step toward
          your future.
        </p>
        <a
          href="tel:+919354559564"
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Call Now
        </a>
      </section>

    </main>
    </div>
  )
}

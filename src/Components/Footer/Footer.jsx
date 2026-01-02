import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footerbg text-gray-300 pt-14">
            <div className="max-w-7xl mx-auto px-4">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


                    <div>
                        <h4 className=" text-lg font-semibold mb-4">
                            Address
                        </h4>
                        <p className="flex gap-2 text-sm leading-relaxed">
                            <MapPin size={18} className="text-orange-500 mt-1" />
                            khasrn No.2/17 Vipin Garden Extn,
                            Uttam Nagar, New Delhi – 110059
                        </p>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className=" text-lg font-semibold mb-4">
                            Contact
                        </h4>

                        <p className="flex items-center gap-2 text-sm mb-3">
                            <Mail size={18} className="text-orange-500" />
                            info@diomts.co.in
                        </p>

                        <p className="flex items-center gap-2 text-sm mb-2">
                            <Phone size={18} className="text-orange-500" />
                            +91 9354559564
                        </p>

                        <p className="flex items-center gap-2 text-sm">
                            <Phone size={18} className="text-orange-500" />
                            011-71523642
                        </p>
                    </div>

                    {/* ABOUT */}
                    <div>
                        <h4 className=" text-lg font-semibold mb-4">
                            About Us
                        </h4>
                        <p className="text-sm leading-relaxed">
                            Delhi Institute Of Management Technology & Science is an autonomous
                            institute for higher education. It gives a path to early success in
                            life through distance learning courses.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className=" text-lg font-semibold mb-4">
                            Quick Menu
                        </h4>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-orange-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-orange-500">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/Courses" className="hover:text-orange-500">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-orange-500">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>



                    </div>

                </div>

                {/* LOCATION */}
                <div className="mt-12">
                    <h4 className=" text-lg font-semibold mb-4">
                        Location
                    </h4>

                    <div className="rounded-xl overflow-hidden border border-gray-700">
                        <iframe
                            src="https://www.google.com/maps?q=Vipin%20Garden%20Uttam%20Nagar%20New%20Delhi&output=embed"
                            width="100%"
                            height="220"
                            loading="lazy"
                            className="border-0"
                        ></iframe>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Delhi Institute Of Management Technology & Science.
                    All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}

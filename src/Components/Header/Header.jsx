"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (path) =>
        pathname === path ? "text-orange-600" : "text-gray-800";

    return (
        <>

            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "backdrop-blur-lg bg-white/80 shadow-md" : "bg-transparent"}`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="h-16 flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold text-orange-600">
                            MyBrand
                        </Link>

                        {/* DESKTOP MENU (RIGHT SIDE) */}
                        <nav className="hidden md:flex items-center gap-8 font-medium">

                            <Link href="/" className={`${isActive("/")} hover:text-orange-600`}>
                                Home
                            </Link>

                            <Link href="/about" className={`${isActive("/about")} hover:text-orange-600`}>
                                About
                            </Link>
                            <Link href="/Courses" className={`${isActive("/Courses")} hover:text-orange-600`}>
                                Courses
                            </Link>

                            {/* Desktop Dropdown */}
                            <div className="relative group cursor-pointer">
                                <div className="flex items-center gap-1 hover:text-orange-600">
                                    Student Zone <ChevronDown size={16} />
                                </div>

                                <div
                                    className="absolute right-0 top-full  w-52
                  bg-white rounded-xl shadow-lg opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200"
                                >

                                    <Link href="/services/admission" className="block px-4 py-3 hover:bg-gray-100">
                                        Online Admission
                                    </Link>
                                    <Link href="/services/registration" className="block px-4 py-3 hover:bg-gray-100">
                                        Registration Details
                                    </Link>
                                    <Link href="/services/result" className="block px-4 py-3 hover:bg-gray-100">
                                        Result
                                    </Link>
                                    <Link href="/services/enquiry" className="block px-4 py-3 hover:bg-gray-100">
                                        Enquiry
                                    </Link>
                                </div>
                            </div>

                            <Link href="/contact" className={`${isActive("/contact")} hover:text-orange-600`}>
                                Contact
                            </Link>

                            <Link
                                href="/login"
                                className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700"
                            >
                                Login
                            </Link>
                        </nav>

                        {/* Mobile Toggle */}
                        <button className="md:hidden" onClick={() => setOpen(true)}>
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            {/* MOBILE SLIDE MENU (RIGHT) */}
            <aside
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-5 flex items-center justify-between border-b">
                    <span className="text-lg font-bold text-orange-600">Menu</span>
                    <button onClick={() => setOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-5 flex flex-col gap-5 font-medium">

                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link href="/Courses" onClick={() => setOpen(false)}>Courses</Link>

                    {/* Mobile Services Dropdown */}
                    <div>
                        <button
                            onClick={() => setServiceOpen(!serviceOpen)}
                            className="w-full flex items-center justify-between"
                        >
                            <span>Services</span>
                            <ChevronDown
                                size={18}
                                className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {serviceOpen && (
                            <div className="mt-3 ml-3 flex flex-col gap-3 text-sm text-gray-700">
                                <Link href="/services/admission" onClick={() => setOpen(false)}>
                                    Online Admission
                                </Link>
                                <Link href="/services/registration" onClick={() => setOpen(false)}>
                                    Registration Details
                                </Link>
                                <Link href="/services/result" onClick={() => setOpen(false)}>
                                    Result
                                </Link>
                                <Link href="/services/enquiry" onClick={() => setOpen(false)}>
                                    Enquiry
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

                    <Link
                        href="/login"
                        className="bg-orange-600 text-white text-center py-2 rounded-lg"
                        onClick={() => setOpen(false)}
                    >
                        Login
                    </Link>
                </nav>
            </aside>


            <div className="h-16" />
        </>
    );
}

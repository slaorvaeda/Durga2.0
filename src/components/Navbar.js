"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
        useEffect(() => {
            AOS.init({ once: true, duration: 2000 });
        }, []);
        const pathname = usePathname();
        // Glassmorphic style for active non-home links
        const glassClass = "backdrop-blur-md bg-white/20 border border-white/30 shadow-lg text-white";
        return (
                <nav className="w-3/4 max-w-[98vw] mx-auto my-4 rounded-full flex items-center justify-between px-8  bg-[#1a1a1a] text-white shadow-lg" style={{ border: '8px solid #232323' }} data-aos="fade-down">
            {/* Left: Home Button */}
            <div className="flex-1 flex items-center">
                <Link href="/">
                    <span className={`font-bold text-lg px-8 py-4 rounded-full transition-all ${pathname === '/' ? 'bg-orange-400 text-white shadow-lg' : 'bg-transparent text-white'} hover:bg-orange-400 hover:text-white hidden md:inline-flex`}>
                        Home
                    </span>
                </Link>
            </div>
            {/* Center: Logo */}
            <div className="flex-1 flex justify-center items-center gap-3">
                <span className="bg-orange-400 rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl text-white">DN</span>
                <span className="font-extrabold text-2xl tracking-wide text-white">DNAYAK</span>
            </div>
            {/* Right: Other Links */}
            <div className="flex-1 md:flex justify-end items-center gap-8 hidden">
                <Link href="/about">
                    <span className={`font-medium text-lg px-8 py-4 rounded-full transition-all ${pathname === '/about' ? glassClass : ''} hover:text-orange-400`}>
                        About
                    </span>
                </Link>
                <Link href="/project">
                    <span className={`font-medium text-lg px-8 py-4 rounded-full transition-all ${pathname === '/project' ? glassClass : ''} hover:text-orange-400`}>
                        Project
                    </span>
                </Link>
                <Link href="/contact">
                    <span className={`font-medium text-lg px-8 py-4 rounded-full transition-all ${pathname === '/contact' ? glassClass : ''} hover:text-orange-400`}>
                        Contact
                    </span>
                </Link>
            </div>
        </nav>
    );
}

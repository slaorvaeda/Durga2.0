"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Footer() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2000 });
  }, []);
  return (
    <footer className="bg-[#232323] text-white py-10 px-4 mt-16 rounded-b-3xl" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl font-bold">Lets Connect there</h2>
          <Link href="/contact" prefetch={true} className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition flex items-center gap-2">Hire me <span>→</span></Link>
        </div>
        <hr className="border-gray-600 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-orange-400 rounded-full px-3 py-1 font-bold text-black">DN</span>
              <span className="font-bold text-lg tracking-wide">DNAYAK</span>
            </div>
            <p className="text-gray-300 text-sm">Full Stack MERN Developer with 3 years of experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in designing RESTful APIs, implementing JWT-based authentication, role-based access control, and deploying production systems on GCP and AWS.</p>
            <div className="flex gap-3 mt-2 text-xl">
              <Link href="#" aria-label="Facebook" className="hover:text-orange-400">FB</Link>
              <Link href="#" aria-label="Instagram" className="hover:text-orange-400">IG</Link>
              <Link href="#" aria-label="WhatsApp" className="hover:text-orange-400">WA</Link>
              <Link href="#" aria-label="Twitter" className="hover:text-orange-400">TW</Link>
            </div>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-2">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/" prefetch={true} className="hover:text-orange-400">Home</Link></li>
              <li><Link href="/service" prefetch={true} className="hover:text-orange-400">Service</Link></li>
              <li><Link href="/resume" prefetch={true} className="hover:text-orange-400">Resume</Link></li>
              <li><Link href="/project" prefetch={true} className="hover:text-orange-400">Project</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-2">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>+91 7008654545</li>
              <li>kanh123.ngp@gmail.com</li>
              <li>BTM layout, Bangalore</li>
              <li>durga2-0.vercel.app</li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-2">Get the latest information</h3>
            <form className="flex gap-2">
              <input type="email" placeholder="Email Address" className="px-4 py-2 rounded-full text-white focus:outline-none border-amber-50 border " />
              <button type="submit" className="cursor-pointer bg-orange-400 text-white px-4 py-2 rounded-full font-bold">→</button>
            </form>
          </div>
        </div>
        <hr className="border-gray-600 mb-4" />
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <span>Copyright© 2025 Durga Madhab Nayak. All Rights Reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-400">User Terms & Conditions</Link>
            <Link href="#" className="hover:text-orange-400">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

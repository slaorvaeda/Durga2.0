"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2000 });
  }, []);
  return (
    <footer className="bg-[#232323] text-white py-10 px-4 mt-16 rounded-b-3xl" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl font-bold">Lets Connect there</h2>
          <a href="#" className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition flex items-center gap-2">Hire me <span>→</span></a>
        </div>
        <hr className="border-gray-600 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-orange-400 rounded-full px-3 py-1 font-bold text-black">DN</span>
              <span className="font-bold text-lg tracking-wide">DNAYAK</span>
            </div>
            <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
            <div className="flex gap-3 mt-2 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-orange-400">FB</a>
              <a href="#" aria-label="Instagram" className="hover:text-orange-400">IG</a>
              <a href="#" aria-label="WhatsApp" className="hover:text-orange-400">WA</a>
              <a href="#" aria-label="Twitter" className="hover:text-orange-400">TW</a>
            </div>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-2">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-orange-400">Home</a></li>
              <li><a href="/service" className="hover:text-orange-400">Service</a></li>
              <li><a href="/resume" className="hover:text-orange-400">Resume</a></li>
              <li><a href="/project" className="hover:text-orange-400">Project</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-2">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>+91 7008654545</li>
              <li>kanh123.ngp@email.com</li>
              <li>Portfolio-dnayak.com</li>
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
          <span>Copyright© 2023 Jayesh. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-400">User Terms & Conditions</a>
            <a href="#" className="hover:text-orange-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

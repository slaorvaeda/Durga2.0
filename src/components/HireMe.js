import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function HireMe() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2000 });
  }, []);
  return (
    <section className="bg-transparent py-12 px-4 mb-12 flex justify-center" data-aos="fade-up">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Orange half circle background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-200 rounded-full -z-10" />
          <Image width={256} height={256} src="/1.png" alt="Hire Me" className="w-64 h-64 object-cover rounded-xl  z-10" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Why <span className="text-orange-400">Hire me?</span>
          </h2>
          <p className="text-gray-500 mb-2 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
          </p>
          <div className="flex gap-8 mb-2">
            <div>
              <span className="text-2xl font-bold text-gray-900">450+</span>
              <p className="text-sm text-gray-500">Project analyze </p>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">15+</span>
              <p className="text-sm text-gray-500">Project Completed</p>
            </div>
          </div>
          {/* Glassmorphic Button Group */}
          <div className="flex gap-0 items-center rounded-full border border-white/60 backdrop-blur-md bg-white/20 shadow-lg overflow-hidden">
            <a href="/project" className="font-bold text-lg px-8 py-4 rounded-full bg-orange-400 text-white flex items-center gap-2" style={{ borderRight: '1.5px solid rgba(255,255,255,0.5)' }}>
              Portfolio <span className="text-2xl">↗</span>
            </a>
            <a href="/contact" className="font-medium text-lg px-8 py-4 rounded-full text-gray-500" style={{ background: 'transparent' }}>
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

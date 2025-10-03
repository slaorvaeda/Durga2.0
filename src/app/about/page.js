"use client";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";
import SkillsTree from "@/components/SkillsTree";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Spline from '@splinetool/react-spline';
import { FaCompactDisc } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import Image from "next/image";




export default function About() {
  useEffect(() => {
  Aos.init({ once: true, duration: 2000 });
}, []);
  return (<>
  
  <main className="min-h-screen flex items-center justify-center px-2 sm:px-8 py-8 w-[98vw] m-auto rounded-2xl relative overflow-hidden z-0">
    {/* Spline 3D background */}
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
      <div className="w-full h-full relative">
        <Spline scene="https://prod.spline.design/3uC8KWFnQnxEA6OP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
       
      </div>
      
    </div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between">
        {/* Left: Text Block */}
        <div className="flex-1 flex flex-col justify-center items-start gap-6 md:pr-12">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-2">Hi, I&apos;m Durga</h1>
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">An UX & Multimedia Designer</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4 max-w-md dark:text-amber-50">I&apos;m always trying to bring real value and define problems with my designs. Welcome to my portfolio.</p>
          <ResumeDownloadButton />
        </div>
        {/* Right: Floating Cards */}
        <div className="flex-1 flex flex-col items-center justify-center relative w-full h-[420px] md:h-[520px]">
          {/* Card 1: User-centered designs */}
          <div data-aos="fade-left" className="absolute top-0 left-8 w-32 h-40 bg-[#232526]/40 bg-opacity-80 rounded-xl shadow-lg flex flex-col items-center justify-end overflow-hidden ">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width={100} height={100} alt="User-centered" className="w-full h-24 object-cover rounded-t-xl" />
            <div className="p-2 text-xs text-white font-medium">User-centered designs and Agile methods</div>
          </div>
          {/* Card 2: Portfolio image */}
          <div data-aos="fade-down" className="absolute top-16 left-32 w-96 h-48 bg-[#232526] bg-opacity-80 rounded-xl shadow-lg overflow-hidden flex flex-col justify-end hover:z-10 hover:scale-105 transform transition-all duration-300">
            <Image width={400} height={300} src="/test.png" alt="Portfolio" className="w-full h-32 object-cover" onError={e => {e.target.onerror=null;e.target.src='/test.png';}} />
            <div className="p-4 text-white">
              <div className="text-sm font-semibold mb-1">IMAGES ABOUT MY PASSION</div>
              <div className="text-xl font-bold mb-1">Have a nice trip visiting my portfolio</div>
              <div className="text-xs text-gray-300">Telling stories visually through meaningful experiences.</div>
            </div>
          </div>
          {/* Card 3: Designer profile */}
          <div data-aos="fade-right" className="absolute -top-10 -right-3 w-56 h-64 bg-[#232526]/90 bg-opacity-80 rounded-xl shadow-lg flex flex-col items-center justify-center p-4">
            <Image width={150} height={150} src="https://durga-nayak.vercel.app/assets/fevicon-DHXt3vbQ.png" alt="Designer" className="w-38 h-38 object-cover rounded-full mb-2" />
            <div className="text-white font-bold text-lg mb-1">Durga madhab Nayak</div>
            <div className="text-xs text-gray-300 mb-2">Fullstack Devloper</div>
            <div className="text-xs text-gray-400 mb-2">Living and designing in India. Currently working as a freelancer, always hoping to further my career in the design world.</div>
            <a href="#contact" className="mt-2 px-4 py-2 rounded-full bg-orange-400 text-white font-semibold text-xs shadow hover:bg-orange-500 transition">Let`&apos;` start a project together!</a>
            <a href="#contact" className="mt-2 px-4 py-2 rounded-full bg-orange-400 text-white font-semibold text-xs shadow hover:bg-orange-500 transition">Let&apos;s start a project together!</a>
          </div>
          {/* Card 4: Dog lover */}
          <div className=" hidden absolute bottom-0 left-0 w-96 h-28 bg-white rounded-xl shadow-lg md:flex justify-center items-center ">
            <div className="scale-450 object-cover text-center w-10"  >
              <GiSittingDog />
            </div>
            <div className="  p-4 flex flex-col justify-center">
              <div className="text-xs text-[#4EC3D6] font-bold mb-1">DOG LOVER</div>
              <div className="text-base font-semibold text-gray-800 mb-1">Multidisciplinary Designer</div>
              <div className="text-xs text-gray-500">Advanced skills in Graphic and Web Design, User Research, Mobile Applications, Photography, etc.</div>
            </div>
          </div>
        </div>
      </div>
       <div className=" flex justify-center items-center absolute right-5 bottom-4.5 p-2 bg-white rounded-xl text-black gap-2"   >
        Hello ! There <FaCompactDisc />
        </div>
    </main>
    <SkillsTree />
    </>
  );
}

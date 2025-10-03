"use client";
import { useRef, useEffect } from "react";

export default function ServiceCard({ title, image, alt }) {
  const cardRef = useRef(null);

  useEffect(() => {
    // You can add GSAP or parallax animation here if needed
  }, []);

  return (
    // <div
    //   ref={cardRef}
    //   className="relative bg-black/80 rounded-2xl p-6 shadow-lg overflow-hidden border border-gray-700 group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
    // >
    //   <h3 className="text-xl font-semibold mb-4 text-white z-10 relative">{title}</h3>
    //   <div className="relative flex justify-center items-center mb-4">
    //     {/* Glassmorphism effect */}
    //     <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-white/10 backdrop-blur-md z-0" />
    //     {/* Main image */}
    //     <img src={image} alt={alt} className="relative z-10 rounded-2xl w-full max-w-xs shadow-lg" />
    //     {/* Lamp SVG overlay */}
    //     <div className="absolute right-6 top-6 z-20">
    //       <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <ellipse cx="24" cy="24" rx="20" ry="20" fill="#FBBF24" />
    //         <rect x="18" y="10" width="12" height="18" rx="6" fill="#F59E42" />
    //         <circle cx="24" cy="32" r="6" fill="white" />
    //       </svg>
    //     </div>
    //   </div>
    //   {/* Arrow button */}
    //   <a
    //     href="#"
    //     className="absolute bottom-6 right-6 bg-gray-900 text-white rounded-full p-3 shadow-lg flex items-center justify-center text-xl group-hover:bg-orange-400 transition-colors"
    //   >
    //     <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    //   </a>
    // </div>
    <>
    <div className="flex items-center justify-center w-[416px] h-[508px] bg-[#f9fafb63]">

    </div>

    </>
  );
}

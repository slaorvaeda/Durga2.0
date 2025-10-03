"use client";
import React from "react";
import Spline from '@splinetool/react-spline';
import { SiAbbrobotstudio } from "react-icons/si";

const ProjectShowcase = () => {
  return (
    <section className="w-full min-h-[400px]  flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-8">
      {/* Left: Contact Info */}
      <div className="flex-1 flex flex-col justify-center text-black">
        <h2 className="text-lg font-semibold mb-6 tracking-widest">GET IN TOUCH</h2>
        <div className="border-t border-gray-700 pt-6 flex flex-col gap-4">
          <div className="flex flex-row gap-12 text-sm">
            <div>
              <span className="block font-bold mb-1">Location</span>
              <span className="block text-gray-400">Address Street Name,<br />New Delhi, India</span>
            </div>
            <div>
              <span className="block font-bold mb-1">Web</span>
              <span className="block text-gray-400">email@domain.com<br />www.domain.com</span>
            </div>
            <div>
              <span className="block font-bold mb-1">Phone Number</span>
              <span className="block text-gray-400">Contact No. +91<br />9876543210</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Image & Title */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-black text-[2.5rem] font-extrabold tracking-widest rotate-90 md:rotate-0 mb-4 md:mb-0">PORTFOLIO</span>
          <span className="text-gray-600 text-xs tracking-widest mb-4 md:mb-0">web & Architecture</span>
        </div>
        <div className="h-[50vh] w-[40vw] mt-6 flex items-center justify-center relative rounded-2xl">
          <Spline scene="https://prod.spline.design/bWrqBAYKy1lBD5lU/scene.splinecode" />
        <div className="absolute flex justify-center items-center right-4 bottom-5 p-1.5 rounded-2xl bg-white border-2 text-xl gap-2" ><SiAbbrobotstudio /> Hover Over Me</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

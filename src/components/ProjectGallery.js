"use client";
import Image from "next/image";
import React from "react";

const ProjectGallery = () => {
  // Replace these with your actual images
  const leftImages = ["/nayaken.png", "/color.png"];
  const rightImages = ["/blog.png", "/inandstore.png", "/anu.png", "/navmobile.png","/mode.png"];

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-8">
      {/* Left: Project Info & Images */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-lg font-semibold mb-2 tracking-widest text-gray-800">CLIENT PROJECTS</h2>
        <p className="text-gray-700 text-sm mb-4 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {leftImages.map((src, idx) => (
            <div key={idx} className="bg-white shadow-lg overflow-hidden h-[150px] w-full">
              <Image width={150} height={150} src={src} alt={`Project Left ${idx+1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        <div className="bg-black/80 text-white rounded-lg p-6 w-[260px]">
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Location:</span>
            <span>Rome, Italy</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Building Type:</span>
            <span>Multi-use Building</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Area:</span>
            <span>40,000m²</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Course:</span>
            <span>Graduation Project</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-bold">Programs Used:</span>
            <span>3ds Max, Stat Here</span>
          </div>
        </div>
      </div>
      {/* Right: Gallery & Descriptions */}
      <div className="flex-[2] grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800 mb-1 text-sm">LOREM IPSUM DOLOR</h3>
          <p className="text-gray-700 text-xs mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="bg-white shadow-lg overflow-hidden h-[300px] w-full rounded-2xl">
            <Image width={500} height={300} src={rightImages[0]} alt="Gallery 1" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-lg overflow-hidden h-[260px] w-full mb-2 rounded-2xl">
            <Image width={500} height={300} src={rightImages[1]} alt="Gallery 2" className="object-cover w-full h-full" />
          </div>
          <h3 className="font-bold text-gray-800 mb-1 text-sm">LOREM IPSUM DOLOR</h3>
          <p className="text-gray-700 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800 mb-1 text-sm">LOREM IPSUM DOLOR</h3>
          <p className="text-gray-700 text-xs mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="bg-white shadow-lg overflow-hidden h-[300px] w-full object-coverd rounded-2xl">
            <Image width={500} height={300} src={rightImages[2]} alt="Gallery 3" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2 mb-2 rounded-2xl">
            <div className="bg-white shadow-lg overflow-hidden h-[70px] w-full rounded-2xl">
              <Image width={500} height={300} src={rightImages[3]} alt="Gallery 4" className="object-cover w-full h-full" />
            </div>
            <div className="bg-white shadow-lg overflow-hidden h-[70px] w-full rounded-2xl">
              <Image width={500} height={300} src={rightImages[4]} alt="Gallery 5" className="object-cover w-full h-full" />
            </div>
          </div>
          <h3 className="font-bold text-gray-800 mb-1 text-sm">LOREM IPSUM DOLOR</h3>
          <p className="text-gray-700 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

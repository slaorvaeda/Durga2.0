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
      <div className="flex-1 flex flex-col gap-4" data-aos="fade-right">
        <h2 className="text-lg font-semibold mb-2 tracking-widest text-gray-800" data-aos="fade-up">CLIENT PROJECTS</h2>
        <p className="text-gray-700 text-sm mb-4 max-w-md" data-aos="fade-up" data-aos-delay="100">
          Delivered 3 end-to-end client projects including e-commerce platforms, portfolio websites, and inventory management systems. Each project features responsive UI design, secure authentication, and cloud deployment using the MERN stack.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {leftImages.map((src, idx) => (
            <div key={idx} className="bg-white shadow-lg overflow-hidden h-[150px] w-full" data-aos="zoom-in" data-aos-delay={idx * 100 + 200}>
              <Image width={150} height={150} src={src} alt={`Project Left ${idx+1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        <div className="bg-black/80 text-white rounded-lg p-6 w-[260px]" data-aos="zoom-in" data-aos-delay="400">
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Projects:</span>
            <span>3 End-to-End</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Types:</span>
            <span>E-commerce,<br />Portfolio, Inventory</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Stack:</span>
            <span>MERN</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Deployment:</span>
            <span>Cloud Platforms</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-bold">Services:</span>
            <span>Payment Gateways,<br />Cloudinary, APIs</span>
          </div>
        </div>
      </div>
      {/* Right: Gallery & Descriptions */}
      <div className="flex-[2] grid grid-cols-2 gap-6" data-aos="fade-left">
        <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-bold text-gray-800 mb-1 text-sm">E-commerce Platform</h3>
          <p className="text-gray-700 text-xs mb-2">Full-featured e-commerce solution with product catalog, shopping cart, payment gateway integration, and order management system built with MERN stack.</p>
          <div className="bg-white shadow-lg overflow-hidden h-[300px] w-full rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
            <Image width={500} height={300} src={rightImages[0]} alt="E-commerce Platform" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white shadow-lg overflow-hidden h-[260px] w-full mb-2 rounded-2xl" data-aos="zoom-in" data-aos-delay="300">
            <Image width={500} height={300} src={rightImages[1]} alt="Portfolio Website" className="object-cover w-full h-full" />
          </div>
          <h3 className="font-bold text-gray-800 mb-1 text-sm">Portfolio Website</h3>
          <p className="text-gray-700 text-xs">Responsive portfolio website showcasing projects and skills, built with React.js and Tailwind CSS, featuring modern UI/UX design and smooth animations.</p>
        </div>
        <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
          <h3 className="font-bold text-gray-800 mb-1 text-sm">Inventory Management System</h3>
          <p className="text-gray-700 text-xs mb-2">Hub-level Inventory & Operations Management Platform with real-time dashboards, stock monitoring, low-inventory alerts, and order tracking, improving operational efficiency by ~40%.</p>
          <div className="bg-white shadow-lg overflow-hidden h-[300px] w-full object-coverd rounded-2xl" data-aos="zoom-in" data-aos-delay="400">
            <Image width={500} height={300} src={rightImages[2]} alt="Inventory Management" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
          <div className="grid grid-cols-2 gap-2 mb-2 rounded-2xl">
            <div className="bg-white shadow-lg overflow-hidden h-[70px] w-full rounded-2xl" data-aos="zoom-in" data-aos-delay="500">
              <Image width={500} height={300} src={rightImages[3]} alt="Project Detail 1" className="object-cover w-full h-full" />
            </div>
            <div className="bg-white shadow-lg overflow-hidden h-[70px] w-full rounded-2xl" data-aos="zoom-in" data-aos-delay="600">
              <Image width={500} height={300} src={rightImages[4]} alt="Project Detail 2" className="object-cover w-full h-full" />
            </div>
          </div>
          <h3 className="font-bold text-gray-800 mb-1 text-sm">Additional Projects</h3>
          <p className="text-gray-700 text-xs">Various client projects featuring responsive design, secure authentication with JWT, role-based access control, and cloud deployment on GCP and AWS.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

"use client";
import Image from "next/image";
import React from "react";
import SplineLoader from "@/components/SplineLoader";

const ProjectAbout = () => {
  const features = [
    { number: "01.", title: "Requirements Analysis", desc: "Understanding client needs, defining project scope, and planning the architecture for scalable MERN stack applications." },
    { number: "02.", title: "Frontend Development", desc: "Building responsive and accessible user interfaces using React.js, Next.js, and Tailwind CSS with modern design patterns." },
    { number: "03.", title: "Backend Development", desc: "Designing scalable REST APIs with Node.js and Express.js, implementing JWT authentication and RBAC for secure access control." },
    { number: "04.", title: "Database & Integration", desc: "Working with MongoDB, MySQL, and PostgreSQL. Integrating third-party services like payment gateways and Cloudinary." },
    { number: "05.", title: "Deployment & Maintenance", desc: "Deploying applications on GCP and AWS, setting up CI/CD pipelines, and providing ongoing maintenance and client support." },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col md:flex-row items-center justify-between px-36 py-12 gap-8">
      {/* Left: 3D Model & About Us */}
      <div className="flex-1 flex flex-col items-center md:items-start" data-aos="fade-right">
        <div className="w-[260px] h-[300px] rounded-xl overflow-hidden mb-6 shadow-2xl bg-gray-200" data-aos="zoom-in" data-aos-delay="100">
          <SplineLoader 
            scene="https://prod.spline.design/bWrqBAYKy1lBD5lU/scene.splinecode"
            className="w-full h-full"
            showLoader={true}
            fallbackBg="bg-gradient-to-br from-gray-200 to-gray-300"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2 tracking-widest text-gray-800" data-aos="fade-up" data-aos-delay="200">ABOUT US</h2>
        <p className="text-gray-700 text-sm mb-2 max-w-md" data-aos="fade-up" data-aos-delay="300">
          Full Stack MERN Developer with 3 years of experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB. I specialize in designing RESTful APIs, implementing JWT-based authentication, and deploying production systems on GCP and AWS.
        </p>
        <p className="text-gray-700 text-sm max-w-md" data-aos="fade-up" data-aos-delay="400">
          I&apos;ve delivered end-to-end client projects including e-commerce platforms, portfolio websites, and inventory management systems. Each project combines responsive UI design with robust backend architecture and cloud deployment.
        </p>
      </div>
      {/* Right: Features List */}
      <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6" data-aos="fade-left">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col" data-aos="fade-up" data-aos-delay={idx * 100}>
            <span className="text-2xl font-extrabold text-gray-800 mb-1">{item.number}</span>
            <span className="font-bold text-gray-700 mb-1">{item.title}</span>
            <span className="text-sm text-gray-600">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectAbout;

"use client";
import Image from "next/image";
import React from "react";

const ProjectDetails = () => {
  

  return (
    <section className="w-full max-w-[100vw] min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col md:flex-row items-center justify-between px-36 py-12 gap-8 overflow-x-hidden">
      {/* Left: Project Info */}
      <div className="flex-1 flex flex-col justify-center" data-aos="fade-right">
        <h2 className="text-lg font-semibold mb-2 tracking-widest text-gray-800" data-aos="fade-up">PROJECT DEMO</h2>
        <p className="text-gray-700 text-sm mb-6 max-w-md" data-aos="fade-up" data-aos-delay="100">
          Delivered 3 end-to-end client projects including e-commerce, portfolio, and inventory systems using the MERN stack. Each project features responsive UI design, secure authentication, and cloud deployment for production-ready applications.
        </p>
        <div className="bg-black/80 text-white rounded-lg p-6 w-[260px] mb-6" data-aos="zoom-in" data-aos-delay="200">
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Category:</span>
            <span>Full Stack</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Tech Stack:</span>
            <span>MERN Stack<br />(React, Node, Express, MongoDB)</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Database:</span>
            <span>MongoDB, MySQL,<br />PostgreSQL</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Cloud:</span>
            <span>GCP, AWS EC2</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-bold">Tools:</span>
            <span>Git, GitHub,<br />Postman, Cloudinary</span>
          </div>
        </div>
      </div>
      {/* Right: Images Grid */}
      <div className="flex-[2] grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4" data-aos="fade-left">
        {/* First grid item: static image preview with clickable overlay */}
          {/* All 5 grid items: static image previews with clickable overlays */}
          {[
            {
              link: "https://event-managment-lac.vercel.app/",
              img: "/event-managment-preview.png",
              alt: "Event Management Website Preview",
              label: "Visit Live Website ↗"
            },
            {
              link: "https://durgadex-portfolio.vercel.app/",
              img: "/portfolio-preview.png",
              alt: "Portfolio Website Preview",
              label: "Visit Portfolio ↗"
            },
            {
              link: "https://shreebhagavadgita.vercel.app/",
              img: "/bhagwatgita.png",
              alt: "Food Delivery App Preview",
              label: "Visit bhagwatgita Delivery ↗"
            },
            {
              link: "https://anibesh.vercel.app/",
              img: "/anibesh.png",
              alt: "E-commerce Dashboard Preview",
              label: "Visit client ↗"
            },
            {
              link: "https://assignment-f8nb37x0x-slaorvaedas-projects.vercel.app/",
              img: "/loan-management-preview.png",
              alt: "Loan Management System Preview",
              label: "Visit check System ↗"
            }
          ].map((project, idx) => (
            <div key={idx} className={`bg-white shadow-xl overflow-hidden relative
             transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-3xl rounded-xl group ${idx === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-1' : ''}`} style={{height: idx === 0 ? '320px' : '200px', width: idx === 0 ? '480px' : '350px'}} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 text-white text-lg font-bold">
                {project.label}
              </a>
              <Image width={idx === 0 ? 480 : 350} height={idx === 0 ? 320 : 200}
                src={project.img}
                alt={project.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjectDetails;

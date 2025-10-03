import React from "react";

const ProjectDetails = () => {
  

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col md:flex-row items-center justify-between px-36 py-12 gap-8 ">
      {/* Left: Project Info */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-lg font-semibold mb-2 tracking-widest text-gray-800">PROJECT DEMO</h2>
        <p className="text-gray-700 text-sm mb-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="bg-black/80 text-white rounded-lg p-6 w-[260px] mb-6">
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Category:</span>
            <span>FullStack</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Building Type:</span>
            <span>Frontend, <br />Backend</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Database:</span>
            <span>MongoDb,MySql,<br />POSTGRES,firebase</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-bold">Course:</span>
            <span>Masters Applications</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-bold">Programs Used:</span>
            <span>GSAP , NODE, GEMIN AI</span>
          </div>
        </div>
      </div>
      {/* Right: Images Grid */}
      <div className="flex-[2] grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4">
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
             transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-3xl rounded-xl group ${idx === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-1' : ''}`} style={{height: idx === 0 ? '320px' : '200px', width: idx === 0 ? '480px' : '350px'}}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 text-white text-lg font-bold">
                {project.label}
              </a>
              <img
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

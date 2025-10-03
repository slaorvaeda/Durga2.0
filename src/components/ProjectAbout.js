import Image from "next/image";
import React from "react";

const ProjectAbout = () => {
  const features = [
    { number: "01.", title: "Title Here", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { number: "02.", title: "Title Here", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { number: "03.", title: "Title Here", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { number: "04.", title: "Title Here", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { number: "05.", title: "Title Here", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col md:flex-row items-center justify-between px-36 py-12 gap-8">
      {/* Left: Image & About Us */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <div className="w-[260px] h-[200px]  overflow-hidden mb-6 ">
          <Image width={260} height={200}
            src="https://durga-nayak.vercel.app/assets/fevicon-DHXt3vbQ.png" // Replace with your project image
            alt="Project About"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2 tracking-widest text-gray-800">ABOUT US</h2>
        <p className="text-gray-700 text-sm mb-2 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-gray-700 text-sm max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* Right: Features List */}
      <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col">
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

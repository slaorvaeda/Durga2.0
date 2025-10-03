import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WorkExperience() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <section className="bg-white py-16 px-4" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-10 text-center">
          <span className="text-gray-900">My </span>
          <span className="text-orange-400">Work Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-12">
            <div>
              <h3 className="font-bold text-lg text-gray-900">Developer</h3>
              <p className="text-sm text-gray-500 mb-2">Sep 2020- July 2023</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Freelancer</h3>
              <p className="text-sm text-gray-500 mb-2">Dec 2024- Sep 2025</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">yugayatraretail</h3>
              <p className="text-sm text-gray-500 mb-2">Sep 2025</p>
            </div>
          </div>
          <div className="space-y-12 relative">
            {/* Timeline dots and lines */}
            <div className="absolute left-[-32px] top-0 h-full flex flex-col justify-between items-center">
              <span className="w-4 h-4 rounded-full border-4 border-orange-400 bg-white block" />
              <span className="w-1 h-16  block border-dashed border-l-2 border-black" />
              <span className="w-4 h-4 rounded-full border-4 border-gray-900 bg-white block" />
              <span className="w-1 h-16  block border-dashed border-l-2 border-black" />
              <span className="w-4 h-4 rounded-full border-4 border-orange-400 bg-white block" />
            </div>
            <div className="pl-8">
              <div className="mb-12">
                <h4 className="font-bold text-lg text-gray-900">Web Designer</h4>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales</p>
              </div>
              <div className="mb-12">
                <h4 className="font-bold text-lg text-gray-900">Full Stack Developer</h4>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Intern</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              <h3 className="font-bold text-lg text-gray-900">Impulse RetailNet</h3>
              <p className="text-sm text-gray-500 mb-2">2022 - 2025</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Freelancer</h3>
              <p className="text-sm text-gray-500 mb-2">2025 - Present</p>
            </div>
          </div>
          <div className="space-y-12 relative">
            {/* Timeline dots and lines */}
            <div className="absolute left-[-32px] top-0 h-full flex flex-col justify-between items-center">
              <span className="w-4 h-4 rounded-full border-4 border-orange-400 bg-white block" />
              <span className="w-1 h-16  block border-dashed border-l-2 border-black" />
              <span className="w-4 h-4 rounded-full border-4 border-gray-900 bg-white block" />
            </div>
            <div className="pl-8">
              <div className="mb-12">
                <h4 className="font-bold text-lg text-gray-900">MERN Full Stack Developer</h4>
                <p className="text-sm text-gray-500">Built and deployed a hub-level Inventory & Operations Management Platform using React.js, Node.js, Express.js, and MongoDB for internal logistics teams. Designed scalable REST APIs following microservices architecture and applied performance optimization techniques. Developed real-time dashboards for stock monitoring, low-inventory alerts, and order tracking, improving operational efficiency by ~40%. Implemented secure authentication and role-based access control (RBAC) using JWT. Deployed and maintained production systems on Google Cloud Platform Compute Engine with MongoDB Atlas.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Freelancer</h4>
                <p className="text-sm text-gray-500">Delivered 3 end-to-end client projects including e-commerce, portfolio, and inventory systems using the MERN stack. Built responsive and accessible user interfaces using React.js and Tailwind CSS. Integrated third-party services such as payment gateways, Cloudinary, and external APIs. Deployed applications to cloud environments and provided ongoing maintenance and client support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

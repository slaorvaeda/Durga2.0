import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EXPERIENCES = [
  {
    company: "Dyne Infotech",
    period: "2026 - Present",
    title: "Full Stack Developer",
    dotClass: "border-orange-400",
    description: (
      <>
        Building <span className="font-semibold text-gray-700">DockLevel</span>, a logistics visibility platform for CFS (container freight station) workflows: HBL/MBL shipment tracking, status timelines, charges, and multi-warehouse routing. Stack includes{" "}
        <span className="font-medium text-gray-700">Next.js</span>, <span className="font-medium text-gray-700">NestJS</span>, TypeScript, PostgreSQL/Prisma, and{" "}
        <span className="font-medium text-gray-700">AWS Lambda</span> for provider data. Added <span className="font-medium text-gray-700">AI integrations</span>—including{" "}
        <span className="font-medium text-gray-700">RAG</span> (retrieval-augmented generation) over documents and domain knowledge—and built <span className="font-medium text-gray-700">batch workers</span> / queue-based jobs for shipment processing, sync, retries, and related background pipelines, plus CI/CD (GitHub Actions), Vercel, and cloud-hosted APIs.
      </>
    ),
  },
  {
    company: "Freelancer",
    period: "2025 - Present",
    title: "Freelancer",
    dotClass: "border-gray-900",
    description:
      "Delivered 3 end-to-end client projects including e-commerce, portfolio, and inventory systems using the MERN stack. Built responsive and accessible user interfaces using React.js and Tailwind CSS. Integrated third-party services such as payment gateways, Cloudinary, and external APIs. Deployed applications to cloud environments and provided ongoing maintenance and client support.",
  },
  {
    company: "Impulse RetailNet",
    period: "2022 - 2025",
    title: "MERN Full Stack Developer",
    dotClass: "border-gray-400",
    description:
      "Built and deployed a hub-level Inventory & Operations Management Platform using React.js, Node.js, Express.js, and MongoDB for internal logistics teams. Designed scalable REST APIs following microservices architecture and applied performance optimization techniques. Developed real-time dashboards for stock monitoring, low-inventory alerts, and order tracking, improving operational efficiency by ~40%. Implemented secure authentication and role-based access control (RBAC) using JWT. Deployed and maintained production systems on Google Cloud Platform Compute Engine with MongoDB Atlas.",
  },
];

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

        <ul className="space-y-12 md:space-y-14">
          {EXPERIENCES.map((job) => (
            <li
              key={job.company + job.period}
              className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,14rem)_1.25rem_minmax(0,1fr)] md:gap-x-6 md:items-stretch"
            >
              {/* Left: company + dates only (no line here) */}
              <div className="min-w-0 pt-0.5">
                <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
                <p className="text-sm text-gray-500">{job.period}</p>
              </div>

              {/* Middle: dashed line + dot — directly left of the role / description column */}
              <div
                className="relative hidden w-full max-w-[1.25rem] justify-self-center md:block md:w-[1.25rem] md:max-w-none md:justify-self-stretch"
                aria-hidden
              >
                <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-0 -translate-x-1/2 border-l-2 border-dashed border-gray-300" />
                <span
                  className={`absolute left-1/2 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 bg-white ${job.dotClass}`}
                />
              </div>

              {/* Right: job title + description (line sits immediately to the left of this block) */}
              <div className="min-w-0">
                <h4 className="text-lg font-bold text-gray-900">{job.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">{job.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

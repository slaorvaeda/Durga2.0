import ResumePreferableSkills from "@/components/ResumePreferableSkills";

export default function Resume() {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen font-sans">
      {/* Personal Summary */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-orange-400">My Resume</h1>
        <p className="text-lg text-gray-700 mb-8">Full Stack MERN Developer with 3+ years of experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in designing RESTful APIs, implementing JWT-based authentication, role-based access control, and deploying production systems on GCP and AWS.</p>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-orange-400">Education</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6 border border-orange-100">
            <h3 className="font-bold text-lg text-gray-900">Master of Computer Applications</h3>
            <p className="text-orange-400 font-semibold mb-2">College of IT & Management</p>
            <p className="text-gray-600">2023 - 2025</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-orange-100">
            <h3 className="font-bold text-lg text-gray-900">Bachelor of Science in Computer Science</h3>
            <p className="text-orange-400 font-semibold mb-2">Khallikote Unitary University</p>
            <p className="text-gray-600">2020 - 2023</p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-orange-400">Work Experience</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6 border border-orange-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-900">Full Stack Developer</h3>
                <p className="text-orange-400 font-semibold">Dyne Infotech</p>
                <p className="text-sm text-gray-600 mt-1">Product: DockLevel — CFS logistics, shipment visibility, AI/RAG, and batch pipelines</p>
              </div>
              <span className="text-gray-600 text-sm shrink-0">2026 - Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Develop DockLevel for container-freight (CFS) operations: HBL/MBL tracking, status timelines, charges/releases, and multi-warehouse lane concepts</li>
              <li>Integrate AI features including RAG (retrieval-augmented generation) over logistics documents and internal knowledge to support smarter workflows</li>
              <li>Build and operate batch workers and queue-based jobs for shipment processing, sync, retries/dead-letter handling, and related background pipelines</li>
              <li>Work across Next.js (App Router), NestJS, TypeScript, PostgreSQL/Prisma, and AWS Lambda–based provider integrations</li>
              <li>Contribute to delivery pipelines: GitHub Actions, Vercel (frontend), and cloud-hosted APIs</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-orange-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-900">MERN Full Stack Developer</h3>
                <p className="text-orange-400 font-semibold">Impulse RetailNet</p>
              </div>
              <span className="text-gray-600 text-sm">2022 - 2025</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Built and deployed a hub-level Inventory & Operations Management Platform using React.js, Node.js, Express.js, and MongoDB</li>
              <li>Designed scalable REST APIs following microservices architecture and applied performance optimization techniques</li>
              <li>Developed real-time dashboards for stock monitoring, low-inventory alerts, and order tracking, improving operational efficiency by ~40%</li>
              <li>Implemented secure authentication and role-based access control (RBAC) using JWT</li>
              <li>Deployed and maintained production systems on Google Cloud Platform Compute Engine with MongoDB Atlas</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-orange-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-900">Freelancer</h3>
              </div>
              <span className="text-gray-600 text-sm">2025 - Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Delivered 3 end-to-end client projects including e-commerce, portfolio, and inventory systems using the MERN stack</li>
              <li>Built responsive and accessible user interfaces using React.js and Tailwind CSS</li>
              <li>Integrated third-party services such as payment gateways, Cloudinary, and external APIs</li>
              <li>Deployed applications to cloud environments and provided ongoing maintenance and client support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="max-w-5xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4 border border-orange-100">
          <h2 className="text-2xl font-bold text-orange-400 mb-2">Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Languages:</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python'].map(skill => (
                  <span key={skill} className="bg-orange-100 rounded-full px-4 py-2 text-gray-700 font-semibold text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Frontend:</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'Redux'].map(skill => (
                  <span key={skill} className="bg-orange-100 rounded-full px-4 py-2 text-gray-700 font-semibold text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Backend:</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'tRPC', 'Socket.io', 'Fastify', 'Mongoose', 'Sequelize', 'Passport', 'FastAPI', 'Bun'].map(skill => (
                  <span key={skill} className="bg-orange-100 rounded-full px-4 py-2 text-gray-700 font-semibold text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Databases:</h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'MySQL', 'PostgreSQL', 'Prisma'].map(skill => (
                  <span key={skill} className="bg-orange-100 rounded-full px-4 py-2 text-gray-700 font-semibold text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud &amp; DevOps:</h3>
              <div className="flex flex-wrap gap-2">
                {['GCP', 'AWS EC2', 'AWS Lambda', 'Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'NGINX', 'Redis', 'BullMQ'].map(skill => (
                  <span key={skill} className="bg-orange-100 rounded-full px-4 py-2 text-gray-700 font-semibold text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">AI &amp; integrations:</h3>
              <div className="flex flex-wrap gap-2">
                {['RAG', 'Embeddings', 'LLM APIs', 'Vector DB'].map(skill => (
                  <span key={skill} className="bg-orange-100 rounded-full px-4 py-2 text-gray-700 font-semibold text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tools:</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Postman', 'Cloudinary', 'Jest', 'React Testing Library', 'OpenAPI'].map(skill => (
                  <span key={skill} className="bg-orange-100 rounded-full px-4 py-2 text-gray-700 font-semibold text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Preferable</h3>
              <p className="mb-3 text-sm text-gray-600">Highlighted strengths for full-stack, cloud, and AI-enabled products (aligned with recent work).</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'TypeScript',
                  'NestJS',
                  'Prisma',
                  'GraphQL',
                  'tRPC',
                  'Mongoose',
                  'FastAPI',
                  'Fastify',
                  'Socket.io',
                  'Bun',
                  'REST APIs',
                  'AWS Lambda',
                  'Redis',
                  'BullMQ',
                  'RAG',
                  'Embeddings',
                  'LLM APIs',
                  'GitHub Actions',
                  'Docker Compose',
                  'TanStack Query',
                  'Zustand',
                  'Redux',
                  'Vector DB',
                  'Jest',
                  'React Testing Library',
                  'OpenAPI',
                ].map(skill => (
                  <span key={skill} className="rounded-full border border-orange-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4 border border-orange-100">
          <h2 className="text-2xl font-bold text-orange-400 mb-2">Certifications</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              <span>Google Cloud Infrastructure – Google</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              <span>Cloud Computing – NPTEL (Elite, 69/100)</span>
            </li>
          </ul>
        </div>
      </section>

      <ResumePreferableSkills />

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Want to collaborate?</h2>
        <p className="text-gray-700 mb-6">I&apos;m open to new opportunities and creative challenges. Let&apos;s connect and make something great!</p>
        <a href="/contact" className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold shadow hover:bg-orange-500 transition">Contact Me</a>
      </section>
    </main>
  );
}

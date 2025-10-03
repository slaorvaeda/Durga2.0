

export default function Resume() {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen font-sans">
      {/* Personal Summary */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-orange-400">My Resume</h1>
        <p className="text-lg text-gray-700 mb-8">A snapshot of my professional journey, skills, and achievements. I believe in lifelong learning and pushing creative boundaries.</p>
      </section>

      {/* Creative Timeline */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-orange-400">Career Timeline</h2>
        <ol className="relative border-l-4 border-orange-200">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-400 rounded-full -left-4 ring-4 ring-white">2012</span>
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-bold text-lg text-orange-400">Freelance UI Designer</h3>
              <p className="text-gray-600">Worked with startups and agencies to create engaging interfaces and improve user experience.</p>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-400 rounded-full -left-4 ring-4 ring-white">2015</span>
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-bold text-lg text-orange-400">Product Designer at JCrea</h3>
              <p className="text-gray-600">Led UI/UX design for multiple award-winning projects, collaborating with cross-functional teams.</p>
            </div>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-400 rounded-full -left-4 ring-4 ring-white">2023</span>
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-bold text-lg text-orange-400">Lead Product Designer at Cinetstox</h3>
              <p className="text-gray-600">Currently leading design at Cinetstox, Mumbai, focusing on innovative digital products.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* Skills & Certifications */}
      <section className="max-w-5xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4 border border-orange-100">
          <h2 className="text-2xl font-bold text-orange-400 mb-2">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {['UI/UX Design', 'App Design', 'Wireframing', 'Prototyping', 'User Research', 'Branding', 'Animation', 'Dashboard Design'].map(skill => (
              <span key={skill} className="bg-orange-100 rounded-full px-4 py-2 text-gray-700 font-semibold text-center">{skill}</span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4 border border-orange-100">
          <h2 className="text-2xl font-bold text-orange-400 mb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Certified Product Designer</li>
            <li>UX Champion 2021</li>
            <li>Design Innovator 2020</li>
            <li>Top Freelancer 2018</li>
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Want to collaborate?</h2>
        <p className="text-gray-700 mb-6">I'm open to new opportunities and creative challenges. Let's connect and make something great!</p>
        <a href="/contact" className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold shadow hover:bg-orange-500 transition">Contact Me</a>
      </section>
    </main>
  );
}

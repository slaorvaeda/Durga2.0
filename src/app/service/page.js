
export default function Service() {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen font-sans">
      {/* Personal Service Intro */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-orange-400">My Services</h1>
        <p className="text-lg text-gray-700 mb-8">I help brands and startups turn ideas into beautiful, functional products. My approach blends creativity, strategy, and technology for results that delight users.</p>
      </section>

      {/* Creative Services Grid */}
      <section className="max-w-5xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "UI/UX Design", desc: "Crafting intuitive interfaces and delightful user experiences.", icon: "🎨" },
            { title: "App Design", desc: "Designing mobile and web apps for impact.", icon: "📱" },
            { title: "Wireframing", desc: "Visualizing ideas with clear wireframes.", icon: "📝" },
            { title: "Prototyping", desc: "Interactive prototypes for rapid testing.", icon: "⚡" },
            { title: "User Research", desc: "Understanding users to inform design decisions.", icon: "🔍" },
            { title: "Branding", desc: "Building memorable brand identities.", icon: "🏷️" },
          ].map(service => (
            <div key={service.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4 border border-orange-100 hover:scale-105 transition-transform">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="font-bold text-xl text-orange-400">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-orange-400 text-center">How I Work</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {[
            { step: "Discovery", desc: "Understanding your goals and users." },
            { step: "Design", desc: "Creating wireframes, prototypes, and UI." },
            { step: "Delivery", desc: "Handing off assets and supporting launch." },
          ].map((item, i) => (
            <div key={item.step} className="bg-orange-100 rounded-xl p-6 shadow flex flex-col items-center gap-2 w-full md:w-1/3">
              <span className="text-2xl font-bold text-orange-400">{i+1}</span>
              <h3 className="font-semibold text-gray-900">{item.step}</h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="max-w-4xl mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Brands I've Worked With</h2>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {["Cognizant", "Sugee", "Cinetstox", "JCrea", "Lirante"].map(brand => (
            <span key={brand} className="bg-white rounded-full px-8 py-4 shadow text-gray-700 font-bold border border-orange-100">{brand}</span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Ready to start your project?</h2>
        <p className="text-gray-700 mb-6">Let's collaborate and create something amazing. Reach out to discuss your ideas!</p>
        <a href="/contact" className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold shadow hover:bg-orange-500 transition">Contact Me</a>
      </section>
    </main>
  );
}

"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { MdEmail, MdPhone, MdLocationOn, MdPerson, MdOutlineEmail, MdMessage } from "react-icons/md";

export default function Contact() {
  // Dynamic contact info
    const contactInfo = [
      { label: "Email", value: "kanh123.ngp.com", href: "mailto:kanh123.ngp@email.com", icon: <MdEmail className="text-orange-400" /> },
      { label: "Phone", value: "+91 7008654545", href: "tel:+917008654545", icon: <MdPhone className="text-green-500" /> },
      { label: "Location", value: "Berhampur,Odisha, India", href: null, icon: <MdLocationOn className="text-blue-500" /> },
    ];
    const fields = [
      { label: "Your name", type: "text", id: "name", name: "name", required: true, icon: <MdPerson className="text-gray-400" /> },
      { label: "Email address", type: "email", id: "email", name: "email", required: true, icon: <MdOutlineEmail className="text-orange-400" /> },
      { label: "Type Message", type: "textarea", id: "message", name: "message", required: true, rows: 4, icon: <MdMessage className="text-blue-400" /> },
    ];
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      {/* Bottom half background image, responsive */}
      <div className="absolute bottom-0 border-8 border-gray-300 w-full h-1/2 z-0 rounded-2xl md:w-9/10" style={{background: "url('/service-bg.jpg') center/cover no-repeat", opacity: 0.95}} />
      {/* <img src="/service-bg.jpg" alt="Koi Fish" className="absolute bottom-8 w-100 object-contain opacity-80 pointer-events-none select-none z-10" /> */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 px-2 sm:px-4">
        {/* Left: Info */}
  <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 gap-6 sm:gap-8 bg-white/90 border-l-8 border-gray-300 border-t-8 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none shadow-2xl">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 mb-4">I`&apos;`m always open to new projects, collaborations, and creative ideas. Drop a message or reach out via email or phone!</p>
            <p className="text-gray-500 mb-4">Let`&apos;`s build something amazing together. I reply within 24 hours.</p>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-3 text-lg">
                <span className="text-2xl flex items-center">{info.icon}</span>
                {info.href ? (
                  <a href={info.href} className="text-gray-800 hover:text-orange-400 font-medium">{info.value}</a>
                ) : (
                  <span className="text-gray-700">{info.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Right: Floating Form Card */}
        <div className="flex items-center justify-center relative min-h-[320px] sm:min-h-[420px] ">
          <div className="w-full max-w-md mx-auto md:absolute md:-top-16 md:left-1/2 md:-translate-x-1/2 border-t-8 border-gray-300 shadow-2xl">
            <form className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 border border-gray-100">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Message</h3>
              {fields.map((field) => (
                <div key={field.id} className="relative flex items-center">
                  <span className="absolute left-4 text-xl flex items-center">{field.icon}</span>
                  {field.type === "textarea" ? (
                    <textarea className="w-full pl-10 pr-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400" id={field.id} name={field.name} rows={field.rows} required={field.required} placeholder={field.label}></textarea>
                  ) : (
                    <input className="w-full pl-10 pr-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400" type={field.type} id={field.id} name={field.name} required={field.required} placeholder={field.label} />
                  )}
                </div>
              ))}
              <button type="submit" className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-full font-bold shadow hover:bg-green-600 transition">Send</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

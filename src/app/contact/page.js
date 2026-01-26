"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { MdEmail, MdPhone, MdLocationOn, MdPerson, MdOutlineEmail, MdMessage } from "react-icons/md";

export default function Contact() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  // Dynamic contact info
    const contactInfo = [
      { label: "Email", value: "kanh123.ngp@gmail.com", href: "mailto:kanh123.ngp@gmail.com", icon: <MdEmail className="text-orange-400" /> },
      { label: "Phone", value: "+91 7008654545", href: "tel:+917008654545", icon: <MdPhone className="text-green-500" /> },
      { label: "Location", value: "BTM layout, Bangalore", href: null, icon: <MdLocationOn className="text-blue-500" /> },
    ];
    const fields = [
      { label: "Your name", type: "text", id: "name", name: "name", required: true, icon: <MdPerson className="text-gray-400" /> },
      { label: "Email address", type: "email", id: "email", name: "email", required: true, icon: <MdOutlineEmail className="text-orange-400" /> },
      { label: "Type Message", type: "textarea", id: "message", name: "message", required: true, rows: 4, icon: <MdMessage className="text-blue-400" /> },
    ];
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 relative py-8 sm:py-12 md:py-16 px-2 sm:px-4">
      {/* Bottom half background image, responsive */}
      <div className="absolute bottom-0 border-2 sm:border-4 md:border-8 border-gray-300 w-full h-1/2 z-0 rounded-lg sm:rounded-xl md:rounded-2xl" style={{background: "url('/service-bg.jpg') center/cover no-repeat", opacity: 0.95}} data-aos="fade-up" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-0">
        {/* Left: Info */}
        <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 gap-4 sm:gap-6 md:gap-8 bg-white/90 border-l-2 sm:border-l-4 md:border-l-8 border-gray-300 border-t-2 sm:border-t-4 md:border-t-8 rounded-t-xl sm:rounded-t-2xl md:rounded-l-3xl md:rounded-tr-none shadow-xl sm:shadow-2xl order-2 md:order-1" data-aos="fade-right">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900" data-aos="fade-up" data-aos-delay="100">Get In Touch</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed" data-aos="fade-up" data-aos-delay="200">I&apos;m always open to new projects, collaborations, and creative ideas. Drop a message or reach out via email or phone!</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed" data-aos="fade-up" data-aos-delay="300">Let&apos;s build something amazing together. I reply within 24 hours.</p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-8">
            {contactInfo.map((info, idx) => (
              <div key={info.label} className="flex items-start sm:items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg" data-aos="fade-up" data-aos-delay={400 + (idx * 100)}>
                <span className="text-xl sm:text-2xl flex items-center flex-shrink-0 mt-0.5 sm:mt-0">{info.icon}</span>
                {info.href ? (
                  <a href={info.href} className="text-gray-800 hover:text-orange-400 font-medium transition-colors break-words sm:break-normal">{info.value}</a>
                ) : (
                  <span className="text-gray-700 break-words sm:break-normal">{info.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Right: Floating Form Card */}
        <div className="flex items-center justify-center relative min-h-[280px] sm:min-h-[320px] md:min-h-[420px] order-1 md:order-2" data-aos="fade-left">
          <div className="w-full max-w-md mx-auto md:absolute md:-top-16 md:left-1/2 md:-translate-x-1/2 border-t-2 sm:border-t-4 md:border-t-8 border-gray-300 shadow-xl sm:shadow-2xl" data-aos="zoom-in" data-aos-delay="200">
            <form className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 md:gap-6 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900" data-aos="fade-up" data-aos-delay="300">Message</h3>
              {fields.map((field, idx) => (
                <div key={field.id} className="relative flex items-center" data-aos="fade-up" data-aos-delay={400 + (idx * 100)}>
                  <span className="absolute left-3 sm:left-4 text-lg sm:text-xl flex items-center z-10">{field.icon}</span>
                  {field.type === "textarea" ? (
                    <textarea 
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none" 
                      id={field.id} 
                      name={field.name} 
                      rows={field.rows} 
                      required={field.required} 
                      placeholder={field.label}
                    ></textarea>
                  ) : (
                    <input 
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all" 
                      type={field.type} 
                      id={field.id} 
                      name={field.name} 
                      required={field.required} 
                      placeholder={field.label} 
                    />
                  )}
                </div>
              ))}
              <button 
                type="submit" 
                className="bg-green-500 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow hover:bg-green-600 transition transform hover:scale-105 active:scale-95 mt-2" 
                data-aos="zoom-in" 
                data-aos-delay="700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

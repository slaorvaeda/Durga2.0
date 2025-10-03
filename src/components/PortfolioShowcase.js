"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortfolioShowcase() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const cards = [
    {
      image: "/1.png",
      title: "Nirjara: Modern chrome Extension",
      description: "A userfriendly attractive helping customizable chrome extension.",
      technology: "javascript, HTML, CSS",
      tags: ["extension", "chrome", "productivity"],
      solution: "Empowers the users to customize their new tab with beautiful backgrounds, quick links, and productivity tools.",
      link: "https://github.com/slaorvaeda/Nirjara"
    },{
      image: "/1.png",
      title: "Inventory Management System",
      description: "A robust platform for tracking, managing, and optimizing inventory across multiple warehouses.",
      technology: "React, Node.js, MongoDB",
      tags: ["Inventory", "Management", "Logistics"],
      solution: "Automates stock updates, generates reports, and integrates with suppliers for real-time data.",
      link: "https://github.com/slaorvaeda/Inandstores"
    },
    {
      image: "/1.png",
      title: "AI Integrated Design Helping Tool",
      description: "An AI-powered assistant for designers to generate layouts, color palettes, and creative assets.",
      technology: "Next.js, Python, OpenAI API",
      tags: ["AI", "Design", "Assistant"],
      solution: "Speeds up design workflow and provides smart suggestions based on user input.",
      link: "https://github.com/slaorvaeda/Colorsuffel"
    },
    {
      image: "/1.png",
      title: "Chatbot Integrated with Event Management Website",
      description: "A conversational chatbot that helps users register, get event info, and receive notifications.",
      technology: "Vue.js, Firebase, Dialogflow",
      tags: ["Chatbot", "Events", "Automation"],
      solution: "Improves user engagement and automates event-related queries and registrations.",
      link: "https://github.com/slaorvaeda/event_managment"
    },
    {
      image: "/1.png",
      title: "Blogging Website",
      description: "A modern blogging platform with markdown support, user profiles, and analytics dashboard.",
      technology: "Gatsby, GraphQL, PostgreSQL",
      tags: ["Blog", "Content", "Analytics"],
      solution: "Empowers writers to publish, manage, and analyze their content easily.",
      link: "https://github.com/slaorvaeda/Blog_StoryWeaver"
    },
    {
      image: "/1.png",
      title: "Tally-like All System Management",
      description: "A comprehensive business management suite inspired by Tally, covering accounting, payroll, and inventory.",
      technology: "Angular, Express, MySQL",
      tags: ["Accounting", "Payroll", "Inventory"],
      solution: "Centralizes business operations and provides real-time financial insights.",
      link: "https://github.com/slaorvaeda/nayak-enterprise"
    }
  ];

  const [startIdx, setStartIdx] = useState(0);
  const [openCard, setOpenCard] = useState(null);
  const visibleCards = cards.slice(startIdx, startIdx + 2);
  const totalSlides = Math.ceil(cards.length / 2);
  const currentSlide = Math.floor(startIdx / 2);

  const handlePrev = () => {
    setStartIdx(idx => Math.max(0, idx - 2));
  };
  const handleNext = () => {
    setStartIdx(idx => Math.min(cards.length - 2, idx + 2));
  };

  return (
    <section className="bg-white py-12 px-4" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold">
            <span className="text-gray-900">Lets have a look at</span><br />
            <span className="text-orange-400">my Portfolio</span>
          </h2>
        </div>
        {/* Carousel */}
        <div className="relative flex items-center gap-6 pb-6">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-400 text-white rounded-full p-3 shadow-lg z-10 hover:bg-orange-500 transition"
            onClick={handlePrev}
            disabled={startIdx === 0}
            aria-label="Previous"
          >
            &#60;
          </button>
          {visibleCards.map((card, i) => (
            <div key={card.title} className="max-w-[100vw]  bg-gray-100 rounded-2xl shadow-lg p-4 relative cursor-pointer" onClick={() => setOpenCard(card)}>
              <Image width={500} height={300} src={card.image} alt={card.title} className="rounded-xl w-full mb-2" />
              <span className="absolute top-4 right-4 bg-orange-400 text-white rounded-full p-2 shadow-lg h-12 w-12 cursor-pointer text-center -rotate-45 text-3xl hover:rotate-0 transition-all duration-300 ">→</span>
              <h3 className="text-xl font-bold text-gray-700 absolute bottom-4 left-4">{card.title}</h3>
            </div>
          ))}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-400 text-white rounded-full p-3 shadow-lg z-10 hover:bg-orange-500 transition"
            onClick={handleNext}
            disabled={startIdx >= cards.length - 2}
            aria-label="Next"
          >
            &#62;
          </button>
        </div>
        {/* Carousel dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <span
              key={idx}
              className={`w-6 h-2 rounded-full ${idx === currentSlide ? "bg-orange-400" : "bg-gray-300"}`}
            />
          ))}
        </div>
        {/* Card Modal */}
        {openCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-fadein flex flex-col md:flex-row gap-6">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-orange-400 text-2xl font-bold"
                onClick={() => setOpenCard(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="flex-shrink-0 flex justify-center items-center md:w-1/2 w-full">
                <Image width={500} height={500} src={openCard.image} alt={openCard.title} className="rounded-xl w-full max-w-xs mb-4 md:mb-0" />
              </div>
              <div className="flex flex-col justify-center md:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">{openCard.title}</h3>
                <p className="text-gray-700 text-base mb-2">{openCard.description}</p>
                <div className="mb-2 text-gray-400"><span className="font-semibold text-gray-600">Technology:</span> {openCard.technology}</div>
                <div className="mb-2 flex flex-wrap gap-2">
                  {openCard.tags.map(tag => (
                    <span key={tag} className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                  ))}
                </div>
                <div className="mb-2 text-gray-400"><span className="font-semibold text-gray-600">Solution:</span> {openCard.solution}</div>
                <a href={openCard.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-orange-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition">Visit Project</a>
              </div>
            </div>
            <style jsx>{`
              .animate-fadein {
                animation: fadein 0.3s ease;
              }
              @keyframes fadein {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}

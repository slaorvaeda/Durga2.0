import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectIdeaDiscuss() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <section className="bg-white py-16 px-4" data-aos="fade-up">
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-5xl font-bold text-center mb-6 w-1/2 mx-auto text-black">
         Have an Awsome Project Idea? <span className="text-orange-400">Let&apos;s Discuss</span>
        </h2>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <input type="email" placeholder="Enter Email Address" className="px-6 py-3 rounded-full border border-gray-300 text-black w-full sm:w-96 focus:outline-none" />
          <button type="submit" className="bg-orange-400 text-white px-8 py-3 rounded-full font-bold shadow hover:bg-orange-500 transition">Send</button>
        </form>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8 text-sm text-gray-600">
          <div className="flex items-center gap-2"><span>⭐</span> 4.9/5 Average Ratings</div>
          <div className="flex items-center gap-2"><span>🏆</span> 25+ Winning Awards</div>
          <div className="flex items-center gap-2"><span>✔️</span> Certified Product Designer</div>
        </div>
        {/* Animated Belt */}
      </div>
       <div className="relative bg-orange-400  w-full mb-8  overflow-hidden border-t border-b border-gray-300 text-black" style={{ height: '76px' }}>
          <div className="absolute left-0 top-0 w-full h-14 rounded-t-2xl bg-white " style={{ transform: 'skewY(2deg)' }} />
          <div className="relative flex items-center h-6  animate-scroll-belt whitespace-nowrap text-xl font-semibold" style={{ transform: 'skewY(-4deg)' }}>
            {['UX Design', 'App Design', 'Dashboard', 'Wireframe', 'User Research','UX Design', 'App Design', 'Dashboard', 'Wireframe','UX Design', 'App Design', 'Dashboard', 'Wireframe'].map((tag, i) => (
              <span key={tag+i} className="mx-6 flex items-center">
                {tag}
                <span className="mx-2 text-orange-200 text-2xl">★</span>
              </span>
            ))}
          </div>
          <style>{`
            @keyframes scroll-belt {
              0% { transform: translateX(0) skewY(2deg); }
              100% { transform: translateX(-50%) skewY(2deg); }
            }
            .animate-scroll-belt {
              animation: scroll-belt 5s linear infinite;
            }
          `}</style>
        </div>
    </section>
  );
}

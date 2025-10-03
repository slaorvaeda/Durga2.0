"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <section className="text-black rounded-3xl mt-12" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {['Landing Page', 'Product Design', 'Animation', 'Glassmorphism', 'Cards'].map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl font-bold align-middle text-center">
            Lirante - Food Delivery Solution
            <button className="ml-2 bg-orange-400 text-white rounded-full h-10 w-10 -rotate-45 font-bold">→</button>
          </h2>
        </div>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
      
      </div>
        <div className="bg-[url('/service-bg.jpg')] bg-cover bg-center bg-no-repeat py-12 px-4 rounded-3xl min-h-screen bg-[#535252b5] bg-blend-multiply flex justify-center items-center flex-col">
          <div className="text-center mb-8">
            <h3 className="text-5xl font-bold text-amber-50 ">Testimonials That<br /><span className="text-orange-400 ">Speak to My Results</span></h3>
            <p className="text-gray-300 my-4 w-3/4 m-auto ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis commodi nam itaque totam dolorem eaque iusto, eveniet quis nemo veniam deleniti dignissimos delectus cupiditate illum repellat obcaecati vitae excepturi ex aliquam cum necessitatibus. Labore reprehenderit harum assumenda sunt iure, voluptas saepe aliquam. Suscipit repudiandae est mollitia, nemo aliquid minima.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-black/60 rounded-2xl p-6 shadow-lg relative flex flex-col gap-4">
                <span className="absolute top-6 left-6 text-5xl text-gray-400 opacity-30">“</span>
                <div className="flex items-center gap-3 mb-2">
                  <Image width={40} height={40} src="/avatar.jpg" alt="Jayesh Patil" className="w-10 h-10 rounded-full object-cover" onError={e => {e.target.onerror=null;e.target.src='/globe.svg';}} />
                  <div>
                    <span className="font-bold text-white">Jayesh Patil</span>
                    <span className="block text-xs text-gray-400">CEO, Lirante</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-400 text-xl">★★★★★</span>
                  <span className="text-white font-bold">5.0</span>
                </div>
                <p className="text-gray-300 text-sm">consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

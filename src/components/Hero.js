"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function Hero() {
  const localHeroRef = useRef();
  const imageRef = useRef();
  const circleRef = useRef();

  const pathname = usePathname();
  useEffect(() => {
     gsap.set(localHeroRef.current, { clearProps: "all" });
    gsap.set(imageRef.current, { clearProps: "all" });
    gsap.set(circleRef.current, { clearProps: "all" });

    // GSAP fade-in animation
    // gsap.fromTo(localHeroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });
    // gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.3 });
    // gsap.fromTo(circleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 });

    // GSAP fade-in animation
    gsap.fromTo(localHeroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 3, duration: 1, delay: 0.3 });
    

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX - innerWidth / 2) / innerWidth * 40);
      const y = ((e.clientY - innerHeight / 2) / innerHeight * 60)-100;
      gsap.to(imageRef.current, { x, y, duration: 0.6, ease: "power3.out" });
      // gsap.to(circleRef.current, { x: x * 0.6, y: y * 0.6, duration: 0.8, ease: "power3.out" });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [pathname]);

  return (
  <section ref={localHeroRef} className="relative flex flex-col items-center justify-center py-16 bg-white text-black overflow-hidden min-h-screen">
    {/* Social Sidebar */}
    <div className="fixed left-4 top-1/2  z-40 flex flex-col gap-6 items-center bg-white/80 rounded-2xl shadow-lg border border-orange-200 px-3 py-4 backdrop-blur-md">
      <a href="https://www.instagram.com/priyanshu.ind/" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-orange-400 text-3xl transition-colors"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></a>
      <a href="https://x.com/KanhuNayak980" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-blue-400 text-3xl transition-colors"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 12 8.75c0 .34.04.67.1.99C8.09 9.6 4.84 7.7 2.67 4.9c-.37.64-.58 1.38-.58 2.17 0 1.5.77 2.83 1.94 3.61-.72-.02-1.4-.22-1.99-.55v.06c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.34 0-.67-.02-1-.06A12.13 12.13 0 0 0 7.29 21c7.55 0 11.7-6.26 11.7-11.7 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg></a>
      <a href="https://github.com/slaorvaeda" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-gray-800 text-3xl transition-colors"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.38 9.38 0 0 1 2.5-.34c.85 0 1.71.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg></a>
      <a href="https://www.linkedin.com/in/india-durganayak/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-blue-700 text-3xl transition-colors"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.25c.41-.77 1.36-1.25 2.25-1.25 1.66 0 3 1.34 3 3v6z"/></svg></a>
    </div>
  {/* ...existing code... */}
    <div className="-mb-2 text-center z-0">
      <span className="inline-block bg-white text-black  rounded-full px-4 py-1 text-xs md:text-[16px] font-semibold border border-orange-400">Hello!</span>
      <h1 className="text-6xl font-bold mb-2 z-0 ">
        I`&apos;`m <span className="text-orange-400">Durga</span>,<br />Full Stack Developer
      </h1>
    </div>
    {/* Half Circle Background and Image */}
    <div ref={circleRef} className="relative flex flex-col items-center rounded-t-full h-1/2 w-1/2 md:w-[640px] md:h-[320px] bg-amber-400 translate-y-40">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[220px] md:w-[620px] md:h-[300px] rounded-t-full -z-10 bg-amber-600 " />
      <Image width={500} height={500} ref={imageRef} src="/me.png" alt="Portfolio Hero" className="w-56 h-56 object-cover rounded-xl  scale-260 -translate-y-20 z-10" />
    </div>
    {/* Description and Buttons */}
    <div className="text-center mt-2 z-20">
      <p className="text-white max-w-xl mx-auto mb-4">
        Durga`&apos;`s Exceptional Full stack developer ensure our website`&apos;`s success. <br />  Highly Recommended
      </p>
      <div className="flex items-center justify-center mt-4">
        {/* on hover hi reme portfolio is transporent  */}

        <div className="flex gap-0 items-center rounded-full border border-white/60 backdrop-blur-md bg-white/20 shadow-lg overflow-hidden p-1">
          <Link href="/project" className="font-bold text-lg px-6 py-2 rounded-full bg-orange-400 text-white flex items-center gap-2 ml-1" style={{ borderRight: '1.5px solid rgba(255,255,255,0.5)' }}>
            Portfolio <span className="text-2xl">↗</span>
          </Link>
          <Link href="/contact" className="font-medium text-lg px-8 py-4 rounded-full text-white" >
            Hire me
          </Link>
        </div>
      </div>
    </div>
    {/* Experience & Stars */}
    <div className="absolute right-16 top-1/2 -translate-y-3/2 flex flex-col items-center z-20">
      <span className="text-orange-400 text-2xl">★★★★★</span>
      <span className="text-lg font-bold mt-2">2 Years</span>
      <span className="text-xs text-gray-400">Experience</span>
    </div>
  </section>
);
}

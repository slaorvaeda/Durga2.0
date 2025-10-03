"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GsapShowcase() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(trackRef.current, {
                x: () => (trackRef.current.scrollWidth - window.innerWidth - 1000),
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "center center",
                    end: () => "+=" + (trackRef.current.scrollWidth - window.innerWidth),
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // GSAP-style animated sentences and icons
    const sentences = [
        { text: "Timeline Magic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { text: "ScrollTrigger Power", icon: "https://durga-nayak.vercel.app/assets/github-Bc_T1o4I.svg" },
        { text: "SVG Wizardry", icon: "https://durga-nayak.vercel.app/assets/gsap-W40nV5iE.svg" },
         { text: "Timeline Magic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { text: "ScrollTrigger Power", icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='64'%20viewBox='0%200%2032%2032'%20width='64'%3e%3cpath%20d='M19.62%2011.558l-3.203%202.98-2.972-5.995%201.538-3.448c.4-.7%201.024-.692%201.414%200z'%20fill='%23ffa000'/%3e%3cpath%20d='M13.445%208.543l2.972%205.995-11.97%2011.135z'%20fill='%23f57f17'/%3e%3cpath%20d='M23.123%207.003c.572-.55%201.164-.362%201.315.417l3.116%2018.105-10.328%206.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447%2025.673z'%20fill='%23ffca28'/%3e%3cpath%20d='M13.445%208.543l-8.997%2017.13L8.455.638c.148-.78.592-.855.988-.167z'%20fill='%23ffa000'/%3e%3c/svg%3e" },
        { text: "SVG Wizardry", icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%20width='64'%20height='64'%3e%3cpath%20d='M15.9.476a2.14%202.14%200%200%200-.823.218L3.932%206.01c-.582.277-1.005.804-1.15%201.432L.054%2019.373c-.13.56-.025%201.147.3%201.627q.057.087.12.168l7.7%209.574c.407.5%201.018.787%201.662.784h12.35c.646.001%201.258-.3%201.664-.793l7.696-9.576c.404-.5.555-1.16.4-1.786L29.2%207.43c-.145-.628-.57-1.155-1.15-1.432L16.923.695A2.14%202.14%200%200%200%2015.89.476z'%20fill='%23326ce5'/%3e%3cpath%20d='M16.002%204.542c-.384.027-.675.356-.655.74v.188c.018.213.05.424.092.633a6.22%206.22%200%200%201%20.066%201.21c-.038.133-.114.253-.218.345l-.015.282c-.405.034-.807.096-1.203.186-1.666.376-3.183%201.24-4.354%202.485l-.24-.17c-.132.04-.274.025-.395-.04a6.22%206.22%200%200%201-.897-.81%205.55%205.55%200%200%200-.437-.465l-.148-.118c-.132-.106-.294-.167-.463-.175a.64.64%200%200%200-.531.236c-.226.317-.152.756.164.983l.138.11a5.55%205.55%200%200%200%20.552.323c.354.197.688.428.998.7a.74.74%200%200%201%20.133.384l.218.2c-1.177%201.766-1.66%203.905-1.358%206.006l-.28.08c-.073.116-.17.215-.286.288a6.22%206.22%200%200%201-1.194.197%205.57%205.57%200%200%200-.64.05l-.177.04h-.02a.67.67%200%200%200-.387%201.132.67.67%200%200%200%20.684.165h.013l.18-.02c.203-.06.403-.134.598-.218.375-.15.764-.265%201.162-.34.138.008.27.055.382.135l.3-.05c.65%202.017%202.016%203.726%203.84%204.803l-.122.255c.056.117.077.247.06.376-.165.382-.367.748-.603%201.092a5.58%205.58%200%200%200-.358.533l-.085.18a.67.67%200%200%200%20.65%201.001.67.67%200%200%200%20.553-.432l.083-.17c.076-.2.14-.404.192-.61.177-.437.273-.906.515-1.196a.54.54%200%200%201%20.286-.14l.15-.273a8.62%208.62%200%200%200%206.146.015l.133.255c.136.02.258.095.34.205.188.358.34.733.456%201.12a5.57%205.57%200%200%200%20.194.611l.083.17a.67.67%200%200%200%201.187.131.67.67%200%200%200%20.016-.701l-.087-.18a5.55%205.55%200%200%200-.358-.531c-.23-.332-.428-.686-.6-1.057a.52.52%200%200%201%20.068-.4%202.29%202.29%200%200%201-.111-.269c1.82-1.085%203.18-2.8%203.823-4.82l.284.05c.102-.093.236-.142.373-.138.397.076.786.2%201.162.34.195.09.395.166.598.23.048.013.118.024.172.037h.013a.67.67%200%200%200%20.841-.851.67.67%200%200%200-.544-.446l-.194-.046a5.57%205.57%200%200%200-.64-.05c-.404-.026-.804-.092-1.194-.197-.12-.067-.22-.167-.288-.288l-.27-.08a8.65%208.65%200%200%200-1.386-5.993l.236-.218c-.01-.137.035-.273.124-.378.307-.264.64-.497.99-.696a5.57%205.57%200%200%200%20.552-.323l.146-.118a.67.67%200%200%200-.133-1.202.67.67%200%200%200-.696.161l-.148.118a5.57%205.57%200%200%200-.437.465c-.264.302-.556.577-.873.823a.74.74%200%200%201-.404.044l-.253.18c-1.46-1.53-3.427-2.48-5.535-2.67%200-.1-.013-.25-.015-.297-.113-.078-.192-.197-.218-.332a6.23%206.23%200%200%201%20.076-1.207c.043-.21.073-.42.092-.633v-.2c.02-.384-.27-.713-.655-.74zm-.834%205.166l-.2%203.493h-.015c-.01.216-.137.4-.332.504s-.426.073-.6-.054l-2.865-2.03a6.86%206.86%200%200%201%203.303-1.799c.234-.05.47-.088.707-.114zm1.668%200c1.505.187%202.906.863%203.99%201.924l-2.838%202.017c-.175.14-.415.168-.618.072s-.333-.3-.336-.524zm-6.72%203.227l2.62%202.338v.015c.163.142.234.363.186.574s-.21.378-.417.435v.01l-3.362.967a6.86%206.86%200%200%201%20.974-4.34zm11.753%200c.796%201.295%201.148%202.814%201.002%204.327l-3.367-.97v-.013c-.21-.057-.37-.224-.417-.435s.023-.43.186-.574l2.6-2.327zm-6.404%202.52h1.072l.655.832-.238%201.04-.963.463-.965-.463-.227-1.04zm3.434%202.838c.045-.005.1-.005.135%200l3.467.585c-.5%201.44-1.487%202.67-2.775%203.493l-1.34-3.244a.59.59%200%200%201%20.509-.819zm-5.823.015c.196.003.377.104.484.268s.124.37.047.55v.013l-1.332%203.218C11%2021.54%2010.032%2020.325%209.517%2018.9l3.437-.583c.038-.004.077-.004.116%200zm2.904%201.4a.59.59%200%200%201%20.537.308h.013l1.694%203.057-.677.2c-1.246.285-2.547.218-3.758-.194l1.7-3.057c.103-.18.293-.29.5-.295z'%20fill='%23fff'%20stroke='%23fff'%20stroke-width='.055'/%3e%3c/svg%3e" },
         { text: "Timeline Magic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { text: "ScrollTrigger Power", icon: "/python.png" },
        { text: "SVG Wizardry", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
        { text: "Performance Pro", icon: "/jenkins.png" },
        { text: "Plugin Playground", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plugin/plugin-original.svg" },
        { text: "Crazy Creativity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/creativity/creativity-original.svg" },
        
    ];

    return (
        <section ref={containerRef} className="relative w-full h-[70vh] flex flex-col justify-center items-center overflow-x-hidden bg-gray-200/40 rounded-3xl mt-10">
            <h2 className="text-5xl font-extrabold text-center mb-16 text-orange-400 tracking-tight drop-shadow-lg">TECHNOLOGY <br />
            <span className="text-5xl text-amber-50 font-bold">SHOWCASE</span></h2>
            <div ref={trackRef} className="flex gap-16 px-12 items-center" style={{ width: `${sentences.length * 320}px` }}>
                {sentences.map((item, i) => (
                    <div
                        key={item.text + i}
                        className={`flex flex-col items-center justify-center min-w-[220px] max-w-[320px] group transition-transform duration-500 text-5xl`}
                        style={{
                            transform: `scale(${1 + Math.sin(i) * 0.2}) rotate(${i % 2 === 0 ? 6 : -6}deg)`,

                            borderRadius: '2rem',
                            // boxShadow: '0 8px 32px rgba(0,255,128,0.12)',
                            
                        }}
                    >
                        <span
                            className="text-6xl mb-4 drop-shadow-lg animate-bounce group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 "
                            style={{
                                animationDelay: `${i * 0.1}s`,
                                // color: `hsl(${i * 36}, 80%, 50%)`,
                                // textShadow: `0 0 16px hsl(${i * 36}, 80%, 70%)`,
                            }}
                        >
                            <img src={item.icon} alt={item.text} className="h-40 w-40" />
                        </span>
                        {/* <span
                            className="text-2xl font-bold mb-2 drop-shadow-lg animate-fadeInUp group-hover:text-black group-hover:scale-110 transition-all duration-300"
                            style={{
                                animationDelay: `${i * 0.15}s`,
                                color: `hsl(${(i + 2) * 36}, 80%, 40%)`,
                                textShadow: `0 0 8px hsl(${(i + 2) * 36}, 80%, 80%)`,
                            }}
                        >
                            {item.text}
                        </span> */}
                    </div>
                ))}
            </div>
            {/* <div className="absolute left-0 bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" /> */}
            <style>{`
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 1s cubic-bezier(.23,1,.32,1) both; }
      `}</style>
        </section>
    );
}

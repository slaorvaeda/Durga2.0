import { useEffect, useRef } from "react";
import gsap from "gsap";
import TypingParagraph from "./TypingParagraph";

export default function ProjectIntro({ onFinish }) {
  const introRef = useRef(null);

  useEffect(() => {
    if (introRef.current) {
      gsap.fromTo(introRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out",
          onComplete: () => {
            gsap.to(introRef.current, {
              opacity: 0,
              scale: 1.1,
              duration: 2,
              delay: 1.2,
              ease: "power2.inOut",
              onComplete: () => onFinish && onFinish()
            });
          }
        }
      );
    }
  }, [onFinish]);

  return (
    <div ref={introRef} className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-400 to-amber-50">
      <div className="text-center">

        <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg animate-pulse">Welcome to My Projects</h1>
        <p className="text-xl text-white/80 font-medium">Durga Madhab Nayak</p>
        <TypingParagraph text={`Explore my work and get inspired.
        I am here to help you create and get inspired.`} className="fixed top-5 left-10 text-lg text-white/80 font-medium" />
        <TypingParagraph text={`Feel free to reach out if you have any questions or ideas to discuss.`} className="fixed top-10 left-10 text-lg text-white/80 font-medium" />
         <TypingParagraph text={`Let's collaborate and bring your ideas to life!`} className="fixed top-15 left-10 text-lg text-white/80 font-medium" />
      </div>
      <div className="fixed top-50 -right-1 -rotate-90 text-7xl font-bold text-white scale-200">DNAYAK</div>
    </div>
  );
}

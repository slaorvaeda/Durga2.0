import { useEffect, useState } from "react";

export default function TypingParagraph({ text, speed = 40, className = "" }) {
  const [displayed, setDisplayed] = useState(``);

  useEffect(() => {
    let i = 0;
    setDisplayed(``);
    const interval = setInterval(() => {
      setDisplayed(prev => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className={className}>
      {displayed}
      
      <span className="animate-blink">|</span>
      <style jsx>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to { visibility: hidden; }
        }
      `}</style>
    </p>
  );
}

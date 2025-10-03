
import { useEffect, useState } from "react";

export default function SkillCard({ name, icon, level, bg }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setProgress(level), 300);
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-4 w-56">
      {/* <img src={icon} alt={name + " logo"} className="w-12 h-12 mb-2" /> */}
      <div className={`w-12 h-12 mb-2 ${bg} scale-350 flex justify-center items-center`}>
        {icon}
      </div>
      <span className="font-bold text-lg text-gray-800">{name}</span>
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Skill Level</span>
          <span>{level}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            data-aos="fade-right"
            className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

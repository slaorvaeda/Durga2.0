"use client";

const services = [
  {
    label: "Graphic Design",
    bg: "bg-[#8B6AD6]",
    icon: "/icons/graphic-design.svg",
    colSpan: "col-span-2 row-span-2",
  },
  {
    label: "UI/UX",
    bg: "bg-[#F7C873]",
    icon: "/icons/ui-ux.svg",
  },
  {
    label: "Apps",
    bg: "bg-[#F7A6B2]",
    icon: "/icons/apps.svg",
  },
  {
    label: "Photography",
    bg: "bg-[#7ED6D6]",
    icon: "/icons/photography.svg",
  },
  {
    label: "Illustrations",
    bg: "bg-[#F7A68B]",
    icon: "/icons/illustrations.svg",
  },
  {
    label: "Motion Graphics",
    bg: "bg-[#6A4D8B]",
    icon: "/icons/motion-graphics.svg",
  },
];

export default function ServiceGrid() {
  return (
    <div className="w-full max-w-4xl grid grid-cols-4 grid-rows-2 gap-6 mx-auto">
      {/* Service Cards */}
      <div className="col-span-2 row-span-2 flex flex-col items-start justify-end p-6 rounded-2xl shadow-lg bg-[#8B6AD6] relative">
        <img src="/icons/graphic-design.svg" alt="Graphic Design" className="w-20 h-20 mb-4" />
        <span className="text-white text-xl font-bold">Graphic Design</span>
      </div>
      <div className="col-span-1 row-span-1 flex flex-col items-start justify-end p-6 rounded-2xl shadow-lg bg-[#F7C873] relative">
        <img src="/icons/ui-ux.svg" alt="UI/UX" className="w-12 h-12 mb-2" />
        <span className="text-black text-lg font-semibold">UI/UX</span>
      </div>
      <div className="col-span-1 row-span-1 flex flex-col items-start justify-end p-6 rounded-2xl shadow-lg bg-[#F7A6B2] relative">
        <img src="/icons/apps.svg" alt="Apps" className="w-12 h-12 mb-2" />
        <span className="text-black text-lg font-semibold">Apps</span>
      </div>
      <div className="col-span-2 row-span-1 flex flex-col items-start justify-end p-6 rounded-2xl shadow-lg bg-[#7ED6D6] relative">
        <img src="/icons/photography.svg" alt="Photography" className="w-12 h-12 mb-2" />
        <span className="text-black text-lg font-semibold">Photography</span>
      </div>
      <div className="col-span-1 row-span-1 flex flex-col items-start justify-end p-6 rounded-2xl shadow-lg bg-[#F7A68B] relative">
        <img src="/icons/illustrations.svg" alt="Illustrations" className="w-12 h-12 mb-2" />
        <span className="text-black text-lg font-semibold">Illustrations</span>
      </div>
      <div className="col-span-1 row-span-1 flex flex-col items-start justify-end p-6 rounded-2xl shadow-lg bg-[#6A4D8B] relative">
        <img src="/icons/motion-graphics.svg" alt="Motion Graphics" className="w-12 h-12 mb-2" />
        <span className="text-white text-lg font-semibold">Motion Graphics</span>
      </div>
    </div>
  );
}

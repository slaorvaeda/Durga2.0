"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbBriefcase, TbHomeFilled, TbMessage, TbUser } from "react-icons/tb";

export default function MobileNavbar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home", icon: "🏠", i: <TbHomeFilled /> },
    { href: "/about", label: "About", icon: "👤", i: <TbUser /> },
    { href: "/project", label: "Projects", icon: "💼", i: <TbBriefcase /> },
    { href: "/contact", label: "Contact", icon: "✉️", i: <TbMessage /> },
  ];
  return (
    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2  bg-white/20 backdrop-blur-md border-t border-gray-200 shadow-lg z-50 md:hidden w-3/4 mx-auto rounded-full" style={{ border: '8px solid #232323' }}>
      <ul className="flex justify-between items-center px-4 py-2">
        {navItems.map((item) => (
          <li key={item.href} className="flex-1 flex flex-col items-center">
            <Link href={item.href} className={`flex flex-col items-center text-xs font-semibold py-1 px-2 rounded-lg transition-colors ${pathname === item.href ? 'text-orange-400' : 'text-gray-700'} hover:text-orange-400`}>
              <span className="text-2xl mb-1">{item.i}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dynamicLinks, setDynamicLinks] = useState<any[]>([]); 
  const [mounted, setMounted] = useState(false); 
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Contentful REST Integration Engine
  useEffect(() => {
    if (!mounted) return;

    async function fetchNavbarPages() {
      try {
        const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || 'aprr3d93u7vz';
        const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'LXVuIdmXm-IK71j-DfjMMgSZQnAoM_aqxz-KzAlaMdA';
        const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=page`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Contentful API Bridge Offline");
        
        const data = await res.json();
        if (data.items) {
          const formattedLinks = data.items.map((item: any) => ({
            name: item.fields.title || "Untitled Page",
            href: `/${item.fields.slug || ""}`,
          }));
          setDynamicLinks(formattedLinks);
        }
      } catch (error) {
        console.error("Error fetching navigation pages from Contentful REST:", error);
      }
    }
    
    fetchNavbarPages();
  }, [mounted]);

  // Smart Multi-Page Section Scroll Handler
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;

    if (pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  // Straightforward link matrix without nested dropdown arrays
  const links = [
    { name: "About Us", href: "/#about" },
    { name: "Training", href: "/#courses" },
    { name: "Feedback", href: "/#feedback" },
    ...dynamicLinks,
  ];

  if (!mounted) {
    return <div className="fixed top-0 left-0 right-0 z-[100] h-16 bg-transparent" />;
  }

  return (
  <div className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none">
  {/* Base padding transitions optimized for instant layout display */}
  <div className={`w-full mx-auto pointer-events-auto transition-all duration-300 ${isScrolled ? "max-w-[1280px] pt-1 px-4 md:px-8 lg:px-16 lg:pt-2" : "max-w-full pt-0 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-80 3xl:px-52"}`}>
    
    <nav
      className={`relative flex items-center justify-between mx-auto transition-all duration-300 ease-in-out ${isScrolled ? "rounded-full px-6 md:px-8 py-2 bg-[#111827]/90 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-[95%] lg:max-w-[1200px]" : "rounded-none px-0 py-4 bg-transparent border-transparent w-full"}`}
    >
      {/* Upper Ambient Horizon Glow Line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transition-opacity duration-300 ${isScrolled ? "opacity-0 rounded-full" : "opacity-100"}`} />

      {/* BRAND LOGO BLOCK */}
      <Link 
        href="/#home" 
        onClick={(e) => handleScrollToSection(e, "/#home")} 
        className="flex items-center z-50 shrink-0 transition-transform duration-300 active:scale-95"
      >
        <div className="relative h-6 md:h-8 w-28 md:w-36">
          <Image 
            src="/logo.png" 
            alt="HRD Institute Logo"
            fill
            priority
            unoptimized
            sizes="(max-w-768px) 110px, 150px"
            className="object-contain" 
          />
        </div>
      </Link>

      {/* DESKTOP NAVIGATION MATRIX */}
      <div className="hidden lg:flex items-center gap-1">
        {links
          .filter(link => link.name.toLowerCase() !== 'home' && link.name.toLowerCase() !== 'about')
          .map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`relative px-3 py-1.5 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all group ${isActive ? "text-blue-500" : "text-zinc-300 hover:text-white"}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </Link>
            );
          })}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-3 z-50 shrink-0">
        
        {/* LOGIN BUTTON: WHITE -> GRADIENT */}
      {/* 🔐 LOGIN BUTTON: WHITE -> GRADIENT */}
<a 
  href="https://lms.highrisedigital.io" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group relative overflow-hidden hidden lg:flex items-center justify-center font-bold text-[10px] uppercase tracking-[2px] h-[38px] px-5 rounded-[5px] bg-white text-zinc-950 border border-zinc-200/50 hover:border-transparent shadow-md transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer no-underline"
>
  {/* Hover state gradient background slider */}
  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 transition-all duration-300 ease-out group-hover:w-full" />
  
  <span className="relative z-10 flex items-center gap-1.5 text-zinc-950 group-hover:text-white transition-colors duration-200 ease-out antialiased">
    Login
    <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
</a>

{/* ⚡ ENROLL NOW BUTTON: GRADIENT -> WHITE */}
<Link 
  href="/contact"
  onClick={(e) => handleScrollToSection(e, "/contact")}
  className="group relative overflow-hidden hidden lg:flex items-center justify-center font-bold text-[10px] uppercase tracking-[2px] h-[38px] px-5 rounded-[5px] bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white border border-transparent shadow-md transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer no-underline"
>
  {/* Hover state white background slider */}
  <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
  
  <span className="relative z-10 flex items-center gap-1.5 text-white group-hover:text-zinc-950 transition-colors duration-200 ease-out antialiased">
    Enroll Now
    <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
</Link>

        {/* MOBILE BURGER MENU */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-white p-2 focus:outline-none rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE RESPONSIVE ACCORDION */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#070707]/98 backdrop-blur-xl border border-white/10 lg:hidden flex flex-col gap-0 p-4 mt-2 rounded-3xl pointer-events-auto shadow-2xl overflow-hidden">
          {links
            .filter(link => link.name.toLowerCase() !== 'home' && link.name.toLowerCase() !== 'about')
            .map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScrollToSection(e, link.href)} 
                className="text-[11px] font-bold uppercase tracking-widest text-zinc-300 py-3.5 px-4 border-b border-white/5 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          
          {/* MOBILE BUTTONS CONTAINER */}
          <div className="pt-4 px-4 flex flex-col gap-3">
            <a 
              href="https://lms.highrisedigital.io"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full bg-white text-black font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg no-underline"
            >
              Login
            </a>
            <Link 
              href="/contact"
              onClick={(e) => handleScrollToSection(e, "/contact")}
              className="block text-center w-full bg-zinc-900 border border-white/10 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg no-underline"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  </div>
</div>
  );
}
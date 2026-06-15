"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Plus, Minus, Loader2 } from "lucide-react"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [dynamicLinks, setDynamicLinks] = useState<any[]>([]); // Contentful dynamic sync
  const [mounted, setMounted] = useState(false); 
  const pathname = usePathname();

  // Modal submission state
  const [modalStatus, setModalStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Contentful REST Integration Engine (Bypasses crashes)
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

  // 🔥 Smart Multi-Page Section Scroll Handler
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Agar href main hash sequence static /# se start nahi ho raha toh normal navigate hone den
    if (!href.startsWith("/#")) return;

    // Agar hum exact root landing page '/' par hain, toh browser transition ko block kar ke smooth scroll lagao
    if (pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
    // Agar hum /contact ya kisi aur page par hain, toh automatic Next.js router link default routing logic use karega
  };

  if (!mounted) {
    return <div className="fixed top-0 left-0 right-0 z-[100] h-16 bg-transparent" />;
  }

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: modalForm.name,
          email: modalForm.email,
          phone: "Not Provided (Modal PopUp Hook)", 
          service: modalForm.service,
          subject: `Strategy Call Request: ${modalForm.service}`,
          message: modalForm.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setModalStatus({
          loading: false,
          success: true,
          message: "Strategy call requested successfully! 🚀",
        });
        setModalForm({ name: "", email: "", service: "", message: "" });
        setTimeout(() => {
          setIsProposalOpen(false);
          setModalStatus({ loading: false, success: null, message: "" });
        }, 2500);
      } else {
        throw new Error(data.error || "Something went wrong inside pipeline.");
      }
    } catch (error: any) {
      setModalStatus({
        loading: false,
        success: false,
        message: error.message || "Network error. Please try again later.",
      });
    }
  };

  // 🔥 Routes updated to dynamic cross-page anchor nodes (/#)
  const links = [
    // { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Training", href: "/#courses" },
    { name: "Feedback", href: "/#feedback" },
    ...dynamicLinks,
    // { name: "Contact Us", href: "/contact" },
  ];

  return (
 <div className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none">
  <div className={`w-full transition-all duration-500 pointer-events-auto ${isScrolled ? "max-w-[1280px] mx-auto pt-1 px-4 md:px-8 lg:px-16 lg:pt-2" : "max-w-full pt-0 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-80 3xl:px-52"}`}>
    
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`relative flex items-center justify-between transition-all duration-500 ease-in-out mx-auto ${isScrolled ? "rounded-full px-6 md:px-8 py-2 bg-[#111827]/90 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-[95%] lg:max-w-[1200px]" : "rounded-none px-0 py-4 bg-transparent border-transparent w-full"}`}
    >
      {/* 🟦 Upper Ambient Horizon Glow Line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-0 rounded-full" : "opacity-100"}`} />

      {/* 🔥 BRAND LOGO BLOCK */}
      <Link 
        href="/#home" 
        onClick={(e) => handleScrollToSection(e, "/#home")} 
        className="flex items-center z-50 shrink-0 transition-transform duration-300 active:scale-95"
      >
        <img 
          src="/logo.png" 
          alt="HRD Institute Logo"
          className="h-6 md:h-8 w-auto object-contain" 
        />
      </Link>

      {/* 🔗 DESKTOP NAVIGATION MATRIX */}
      <div className="hidden lg:flex items-center gap-1">
        {links
          .filter(link => link.name.toLowerCase() !== 'home' && link.name.toLowerCase() !== 'about')
          .map((link) => {
            const isActive = pathname === link.href;
            if (link.isDropdown) {
              return (
                <div key={link.name} className="relative group" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
                  <Link 
                    href={link.href} 
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className={`flex items-center gap-1 px-3 py-1.5 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all relative ${isActive || showServices ? "text-white" : "text-zinc-300 hover:text-white"}`}
                  >
                    {link.name} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                  <AnimatePresence>
                    {showServices && (
                      <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute top-full left-0 w-56 p-2 bg-black border border-white/10 rounded-2xl shadow-2xl mt-1">
                        {link.subLinks?.map((sub: any) => (
                          <Link key={sub.name} href={sub.href} className="block px-4 py-2.5 text-[13px] font-bold text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
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

   {/* ⚡ ACTION BUTTONS (LOGIN & ENROLL NOW) */}
<div className="flex items-center gap-3 z-50 shrink-0">
  
  {/* ORIGINAL LOGIN BUTTON */}
  <a 
    href="https://lms.highrisedigital.io" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative overflow-hidden hidden lg:flex items-center justify-center font-black text-[11px] uppercase tracking-[2px] h-[44px] px-6 rounded-full bg-white text-black border border-transparent shadow-lg transition-all duration-500 ease-out active:scale-95 cursor-pointer no-underline"
  >
    <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
    <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-500 ease-out">
      Login
      <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
  </a>

  {/* ENROLL NOW BUTTON */}
  <a 
    href="/contact" 
    onClick={(e) => handleScrollToSection(e, "/contact")}
    className="group relative overflow-hidden hidden lg:flex items-center justify-center font-black text-[11px] uppercase tracking-[2px] h-[44px] px-6 rounded-full bg-zinc-900 text-white border border-white/10 shadow-lg transition-all duration-500 ease-out active:scale-95 cursor-pointer no-underline"
  >
    <div className="absolute inset-0 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-out group-hover:w-full" />
    <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-500 ease-out">
      Enroll Now
      <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
  </a>

  {/* MOBILE BURGER MENU */}
  <button 
    onClick={() => setIsOpen(!isOpen)} 
    className="lg:hidden text-white p-2 focus:outline-none rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
  >
    {isOpen ? <X size={20} /> : <Menu size={20} />}
  </button>
</div>

      {/* MOBILE RESPONSIVE ACCORDION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-0 right-0 bg-[#070707]/98 backdrop-blur-xl border border-white/10 lg:hidden flex flex-col gap-0 p-4 mt-2 rounded-3xl pointer-events-auto shadow-2xl overflow-hidden">
            {links
              .filter(link => link.name.toLowerCase() !== 'home' && link.name.toLowerCase() !== 'about')
              .map((link) => {
                if (link.isDropdown) {
                  return (
                    <div key={link.name} className="border-b border-white/5 flex flex-col">
                      <div className="flex items-center justify-between py-3.5 px-4 active:bg-white/5 transition-colors rounded-xl">
                        <Link href={link.href} onClick={(e) => handleScrollToSection(e, link.href)} className="text-[11px] font-bold uppercase tracking-widest text-zinc-300 flex-1">{link.name}</Link>
                        <button onClick={(e) => { e.preventDefault(); setMobileServicesOpen(!mobileServicesOpen); }} className="p-1 text-zinc-400 hover:text-white transition-colors">
                          {mobileServicesOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </button>
                      </div>
                      <motion.div initial={false} animate={{ height: mobileServicesOpen ? "auto" : 0, opacity: mobileServicesOpen ? 1 : 0 }} className="overflow-hidden bg-white/[0.02] rounded-xl mx-2">
                        <div className="flex flex-col py-1 pl-4 border-l border-white/10 my-1 gap-1">
                          {link.subLinks?.map((sub: any) => (
                            <Link key={sub.name} href={sub.href} className="text-[11px] font-bold uppercase tracking-widest text-zinc-300 hover:text-white py-3.5 px-4 rounded-lg block transition-colors" onClick={() => setIsOpen(false)}>{sub.name}</Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  );
                }
                return (
                  <Link key={link.name} href={link.href} onClick={(e) => handleScrollToSection(e, link.href)} className="text-[11px] font-bold uppercase tracking-widest text-zinc-300 py-3.5 px-4 border-b border-white/5 last:border-0">{link.name}</Link>
                );
              })}
            
            {/* MOBILE BUTTONS CONTAINER */}
            <div className="pt-4 px-4 flex flex-col gap-3">
              <a 
                href="https://lms.highrisedigital.io"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full bg-white text-black font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-lg no-underline"
              >
                Login
              </a>
              <a 
                href="#enroll"
                onClick={(e) => { setIsOpen(false); handleScrollToSection(e, "/#enroll"); }}
                className="block text-center w-full bg-zinc-900 border border-white/10 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-lg no-underline"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  </div>

  {/* STRATEGY MODAL DIALOG */}
  <AnimatePresence>
    {isProposalOpen && (
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 pointer-events-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !modalStatus.loading && setIsProposalOpen(false)} className="absolute inset-0 bg-black/85 backdrop-blur-md" />
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-lg bg-[#070707] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
          <button onClick={() => setIsProposalOpen(false)} disabled={modalStatus.loading} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors disabled:opacity-30">
            <X size={24} />
          </button>
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Book A Strategy Call</h3>
            <p className="text-zinc-500 text-xs">Let's build your project together.</p>
          </div>
          
          <form className="space-y-4" onSubmit={handleModalSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                required
                disabled={modalStatus.loading}
                placeholder="Name" 
                value={modalForm.name}
                onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500 transition-all disabled:opacity-40" 
              />
              <input 
                type="email" 
                required
                disabled={modalStatus.loading}
                placeholder="Email" 
                value={modalForm.email}
                onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500 transition-all disabled:opacity-40" 
              />
            </div>
            <textarea 
              required
              disabled={modalStatus.loading}
              placeholder="Your Message" 
              rows={3} 
              value={modalForm.message}
              onChange={(e) => setModalForm({ ...modalForm, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none resize-none transition-all disabled:opacity-40"
            />
            
            <AnimatePresence mode="wait">
              {modalStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className={`p-3 rounded-xl text-center text-xs font-bold border ${
                    modalStatus.success 
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                      : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                  }`}
                >
                  {modalStatus.message}
                </motion.div>
              )}
            </AnimatePresence>
            
            <button 
              type="submit" 
              disabled={modalStatus.loading}
              className="w-full bg-blue-600 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100 hover:bg-blue-700"
            >
              {modalStatus.loading ? (
                <>
                  Submitting Pipeline...
                  <Loader2 size={12} className="animate-spin" />
                </>
              ) : "Submit Request"}
            </button>
          </form>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
</div>
  );
}
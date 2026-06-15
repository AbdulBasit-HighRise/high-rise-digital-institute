"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#111827] overflow-hidden pt-20 pb-8 border-t border-white/10">
      {/* Premium Top Ambient Line Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Background Ambient Cyber Glows */}
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-blue-600/[0.03] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-[#FFC71E]/[0.01] blur-[150px] rounded-full pointer-events-none" />

      {/* WIDTH AND SCREEN RESPONSIVENESS MATRIX */}
      <div className="w-full max-w-[92%] xl:max-w-[88%] 2xl:max-w-[82%] 3xl:max-w-[75%] mx-auto px-4 sm:px-6 space-y-16">

        {/* 🌐 MAIN MATRIX ROW BLOCK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/5">

          {/* COLUMN 1: IDARA BRAND INFORMATION (4 COLS) */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-4">
              {/* 🔥 BRAND LOGO IMAGE INSTANCE */}
              <div className="flex items-center shrink-0">
                <img
                  src="/logo.png"
                  alt="HRD Institute Footer Logo"
                  className="h-6 md:h-8 w-auto object-contain brightness-110"
                />
              </div>
              <p className="text-white text-xs font-bold leading-relaxed max-w-sm pt-1">
                Empowering youth with practical skills, global certifications, and lifetime mentorship.
              </p>
            </div>
          </div>

          {/* COLUMN 2: ACADEMY QUICK DIRECT LINKS (2 COLS) */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[3px] border-l-2 border-[#FFC71E] pl-3 leading-none">
              ACADEMY
            </h4>
            <ul className="space-y-3 text-xs font-bold text-white">
              <li><Link href="#about" className="hover:text-white transition-colors block">About Us</Link></li>
              <li><Link href="#courses" className="hover:text-white transition-colors block">Master Courses</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors block">Contact US</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: LEGAL SECURITY STRUCTURE (3 COLS) */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[3px] border-l-2 border-blue-600 pl-3 leading-none">
              LEGAL INFO
            </h4>
            <ul className="space-y-3 text-xs font-bold text-white">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors block">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: HELP DESK SUPPORT CENTER (3 COLS) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[3px] border-l-2 border-emerald-500 pl-3 leading-none">
              CONNECT
            </h4>

            {/* Native WhatsApp Interaction Pill Widget Container */}
            <a
              href="https://wa.me/923002777587"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 bg-gradient-to-br from-white/[0.01] to-transparent hover:from-white/[0.03] border border-white/10 rounded-xl p-3.5 transition-all duration-300 group shadow-lg"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500 text-neutral-950 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.855.001-2.633-1.022-5.101-2.881-6.962C16.578 1.928 14.11 0.907 11.48 0.907c-5.442 0-9.866 4.42-9.869 9.856-.001 1.736.469 3.43 1.36 4.938L1.822 21.16l5.725-1.503h-.899z" />
                </svg>
              </div>
              <div className="leading-tight">
                <h5 className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">OFFICIAL HELPDESK</h5>
                <p className="text-sm font-mono font-black text-white tracking-wide mt-0.5 group-hover:text-emerald-400 transition-colors">
                  +92 300-2777587
                </p>
              </div>
            </a>

            {/* HIGH-CONTRAST SOLID SOCIAL ICON ROW */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Fixed Closing Tag Below from </div> to </a> */}
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 hover:-translate-y-1 transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 .013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:-translate-y-1 transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 hover:-translate-y-1 transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

        </div>

        {/* 📜 BOTTOM SUB-FOOTER CONTROL BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-[10px] font-bold uppercase text-white font-mono w-full">
          <p>© 2026 High Rise Digital INSTITUTE LTD.</p>
        </div>

      </div>
    </footer>
  );
}
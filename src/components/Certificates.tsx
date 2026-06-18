"use client";
import { ExternalLink, ShieldCheck } from "lucide-react";

export default function CertificatesSection() {
  const certificates = [
    { name: "Fizza Habib", title: "WordPress & SEO Specialist", id: "HRD-2026-081" },
    { name: "Aniba Irfan", title: "Technical SEO Expert", id: "HRD-2026-142" },
    { name: "Asad Ali Lakho", title: "Full-Stack Web Architect", id: "HRD-2026-094" },
    { name: "Faraz Ahmed", title: "Custom WordPress Developer", id: "HRD-2026-311" },
  ];

  return (
    <section className="relative w-full bg-[#1E2939] overflow-hidden py-16 md:py-18 px-4 md:px-8 border-t border-white/5">
      {/* Font imports via Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800;900&family=Alex+Brush&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        .cert-header-font { font-family: 'Cinzel', serif; }
        .cert-script-font { font-family: 'Alex Brush', cursive; }
        .cert-global-font { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Premium Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[85rem] 2xl:max-w-[95rem] mx-auto w-full space-y-16">

        {/* 🏷️ MASTER HEADER */}
        <div className="text-center space-y-4 cert-global-font">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[3px]">
            <ShieldCheck size={12} className="text-blue-400" /> Secure Verification Pipeline
          </div>
       

          <h2 className="text-[2.1rem] sm:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.2rem] font-black tracking-tight leading-[1.15] text-white">
             Verified  {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
             Students
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* 📜 CERTIFICATES CARD GRID (FIXED HEIGHT ISSUES) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-[#1E293B]/30 border border-white/5 rounded-2xl p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_30px_60px_rgba(0,148,255,0.15)] flex flex-col justify-between min-h-[380px]"
            >
              {/* Inner Certificate Board */}
              <div className="relative border border-zinc-800 rounded-xl p-5 bg-gradient-to-br from-[#111827] via-[#0B0F19] to-[#111827] shadow-inner flex flex-col justify-between flex-grow overflow-hidden select-none pb-8">

                {/* Diagonal Tech Accents */}
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-blue-600 to-cyan-500 rotate-45 opacity-90 pointer-events-none z-10" />
                <div className="absolute -bottom-12 -left-6 w-20 h-20 bg-zinc-950/60 rotate-45 pointer-events-none z-10" />

                {/* Thin Inner Border */}
                <div className="absolute inset-2 border border-white/[0.04] pointer-events-none rounded-lg" />

                {/* Top Corner Flourish Markers */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-zinc-700/60 opacity-80" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-zinc-700/60 opacity-80" />

                {/* 1. HEADER */}
                <div className="relative z-20 flex flex-col items-center text-center pt-2">
                  {/* 🚀 OFFICIAL BRAND LOGO HOLDER */}
                  <div className="w-full h-7 flex items-center justify-center mb-1">
                    <img
                      src="/logo.png" // 👈 Apne logo ka path ya URL yahan lagao
                      alt="HRD Institute Logo"
                      className="h-full w-auto object-contain  transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <h4 className="text-[11px] font-bold tracking-[1.5px] text-zinc-300 uppercase leading-none cert-header-font mt-2">
                    Certificate of Achievement
                  </h4>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2" />
                </div>

                {/* 2. MAIN BODY (With optimized breathing room) */}
                <div className="relative z-20 text-center space-y-3 my-6 px-1 cert-global-font">
                  <p className="text-[7px] font-bold text-zinc-500 uppercase tracking-wider">This certificate is proudly presented to</p>

                  {/* Student Name */}
                  <h3 className="text-2xl font-normal text-blue-400 tracking-normal cert-script-font block w-full truncate px-2">
                    {cert.name}
                  </h3>

                  <p className="text-[6.5px] font-semibold text-zinc-400 max-w-[90%] mx-auto leading-normal">
                    for outstanding results, structured technical conduct, and successful graduation from
                  </p>

                  {/* Course Title */}
                  <p className="text-[10px] font-bold text-white uppercase tracking-wide cert-header-font pt-1 px-1">
                    {cert.title}
                  </p>
                </div>

                {/* 3. SIGNATURE & STAMP STYLING */}
                <div className="relative z-20 flex items-end justify-between px-2 cert-global-font mt-auto">
                  {/* Head Office Line */}
                  <div className="text-center flex flex-col items-center pl-4 pb-1">
                    <div className="w-12 border-b border-zinc-800 h-2 opacity-80" />
                    <span className="text-[5px] font-bold text-zinc-500 uppercase tracking-wider mt-1.5">Head Office</span>
                  </div>

                  {/* Stamp Seal Badge */}
                  <div className="w-9 h-9 bg-zinc-950 rounded-full shadow-lg border-2 border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors duration-300 mr-1">
                    <div className="w-[84%] h-[84%] border border-dashed border-zinc-700 rounded-full flex flex-col items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Absolute Tracker ID placement */}
                <span className="absolute bottom-2 left-14 text-[5px] font-mono text-zinc-600 font-bold tracking-tight z-20">
                  REF ID: {cert.id}
                </span>

              </div>

              {/* 4. CARD BOTTOM CONTROLS */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5 bg-transparent cert-global-font">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">
                    GRADUATED STATUS
                  </span>
                  <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
                    Official Registry Node
                  </span>
                </div>

                {/* Action System Verification Trigger Link */}
                <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-black text-[9px] tracking-widest px-3 py-1.5 rounded-xl uppercase select-none group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer">
                  VERIFY APP <ExternalLink size={10} strokeWidth={2.5} />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
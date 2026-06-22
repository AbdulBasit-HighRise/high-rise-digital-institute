"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

export default function CertificatesSection() {
  // Production-ready student dataset matching exactly to institutional records
  const certificates = [
    { name: "Fizza Habib", title: "Full Stack Web Development With Mern", id: "0290165", ref: "SK-2026-115", duration: "01-07-2025 TO 01-01-2026", grade: "A+" },
    { name: "Aniba Irfan", title: "AI Automation Specialist", id: "0290167", ref: "SK-2026-098", duration: "01-07-2025 TO 01-01-2026", grade: "A+" },
    { name: "Asad Ali Lakho", title: "Full Stack Web Development With Mern", id: "0290165", ref: "SK-2026-142", duration: "01-07-2025 TO 01-01-2026", grade: "A+" },
    { name: "Faraz Ahmed", title: "Custom WordPress Development Track", id: "0290311", ref: "SK-2026-044", duration: "01-07-2025 TO 01-01-2026", grade: "A+" },
  ];

  return (
    /* 🌌 MASTER DARK THEME CONTAINER MATCHING SITE BRANDING */
    <section className="relative w-full bg-[#0B0F19] overflow-hidden py-24 px-4 md:px-6 lg:px-8 border-t border-zinc-800/50 cert-master-body">
      
      {/* Precision Structural Fonts Injections */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        .cert-master-header { font-family: 'Cinzel', serif; }
        .cert-master-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-[85rem] 2xl:max-w-[94rem] mx-auto w-full space-y-16">

        {/* 🏷️ MASTER HEADER WITH LUXURY SITE GRADIENTS */}
        <div className=" font-black text-center space-y-4">
     
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white ">
            Verified  {" "}
              <span className="inline-block bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text py-1">
               Student Certificates
              </span>
          </h2>
          <div className="w-16 h-[3px] bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
        </div>

        {/* 📜 LUXURY COMPACT 4-IN-A-ROW CERTIFICATES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-[#131926] border border-zinc-800/90 rounded-2xl p-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between w-full"
            >
              {/* White Canvas Inner Certificate Board with Precise Scalable Dimensions */}
              <div className="relative bg-white border-[2.5px] border-zinc-950 rounded-lg p-3.5 flex flex-col justify-between overflow-hidden select-none min-h-[260px] aspect-[4/3] w-full shadow-inner">

                {/* 📐 System Outer Double Geometric Line Borders */}
                <div className="absolute inset-1 border border-zinc-400 pointer-events-none" />
                <div className="absolute inset-2 border-[1.2px] border-zinc-950 pointer-events-none" />

                {/* 🧩 Interlocking Step Corner Box Accent Lines (Top Right Corner) */}
                <div className="absolute top-2 right-2 w-4 h-4 border-b border-l border-zinc-950 pointer-events-none" />
                <div className="absolute top-2 right-2 w-7 h-7 border-b border-l border-zinc-400 pointer-events-none" />

                {/* Interlocking Step Corner Box Accent Lines (Bottom Left Corner) */}
                <div className="absolute bottom-2 left-2 w-4 h-4 border-t border-r border-zinc-950 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-7 h-7 border-t border-r border-zinc-400 pointer-events-none" />

                {/* 1. BRAND INSTITUTION LOGO ANCHOR */}
                <div className="relative z-10 flex justify-center pt-1">
                  <img
                    src="/highriseskills.png"
                    alt="Skills Education"
                    className="h-7 sm:h-8 object-contain"
                  />
                </div>

                {/* 2. CORE TRANSCRIPT DOCUMENTATION DATA */}
                <div className="relative z-10 text-center space-y-1 my-auto px-2">
                  <h3 className="font-serif text-[10px] sm:text-[11px] lg:text-[12px] 2xl:text-[13px] font-extrabold tracking-wide text-zinc-900 uppercase leading-none cert-master-header">
                    Certificate Of Excellence
                  </h3>
                  
                  <p className="text-[5px] uppercase font-bold text-zinc-400 tracking-[0.15em] leading-none">
                    This Certificate Is Proudly Presented To
                  </p>

                  {/* Dynamic Student Underline Container */}
                  <div className="w-[90%] mx-auto pt-1">
                    <h2 className="text-[14px] sm:text-[15px] 2xl:text-[17px] font-black text-zinc-900 tracking-tight truncate pb-0.5 px-2">
                      {cert.name}
                    </h2>
                    <div className="w-full h-[1px] bg-zinc-950 rounded-full" />
                  </div>

                  {/* Recognition Core Body String */}
                  <p className="text-[4.5px] font-bold text-zinc-500 uppercase tracking-wide max-w-[90%] mx-auto leading-normal pt-0.5">
                    In recognition of successful completion of the training program in:
                  </p>

                  {/* Dynamic Subject Field Value */}
                  <h4 className="text-[7px] sm:text-[7.5px] 2xl:text-[8.5px] font-black text-zinc-950 uppercase tracking-tight max-w-[95%] mx-auto truncate">
                    COURSE: <span className="font-bold text-zinc-700">{cert.title}</span>
                  </h4>

                  {/* Timeline Metadata String Properties */}
                  <div className="flex items-center justify-center gap-1.5 text-[4.8px] sm:text-[5px] font-bold text-zinc-600 uppercase">
                    <span>Duration: <span className="font-medium text-zinc-500">{cert.duration}</span></span>
                    <span className="w-0.5 h-0.5 bg-zinc-400 rounded-full" />
                    <span>Grade: <span className="text-zinc-900 font-extrabold">{cert.grade}</span></span>
                  </div>
                </div>

                {/* 3. SECURITY SEAL HOOKS & AUTOMATED SIGNATURE PLACEMENTS */}
                <div className="relative z-10 grid grid-cols-3 items-end px-2 mt-auto pb-1.5">
                  
                  {/* Left Side Sign Node */}
                  <div className="text-left flex flex-col items-start">
                    <div className="w-10 sm:w-12 border-b border-zinc-400 h-[0.5px]" />
                    <p className="text-[4.5px] font-bold mt-1 text-zinc-400 uppercase tracking-tighter">
                      Ceo Signature
                    </p>
                  </div>

                  {/* Center QR Cryptographic Validation Box */}
                  <div className="flex justify-center items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white border border-zinc-200 flex items-center justify-center rounded p-0.5 shadow-sm">
                      <svg className="w-full h-full text-zinc-900" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 13h6v6H3v-6zm2 2v2h2v-2H5z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Right Side Round Token Stamp & Authorization String */}
                  <div className="text-right flex flex-col items-end relative">
                    {/* Official Dynamic Security Token Circular Frame */}
                    <div className="absolute -top-5 right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-blue-500/30 bg-blue-50/10 flex items-center justify-center">
                      <div className="w-[85%] h-[85%] border border-dashed border-blue-400/40 rounded-full flex items-center justify-center">
                        <span className="text-[3px] sm:text-[3.5px] font-mono font-bold text-blue-600 tracking-tighter scale-90">
                          {cert.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-10 sm:w-12 border-b border-zinc-400 h-[0.5px]" />
                    <p className="text-[4.5px] font-bold mt-1 text-zinc-400 uppercase tracking-tighter">
                      Director Signature
                    </p>
                  </div>

                </div>

                {/* 📌 Bottom Floating Anchor Identity Codes */}
                <div className="absolute bottom-1 left-4 flex items-center gap-1 text-[4px] text-zinc-400 font-mono font-bold uppercase tracking-tight">
                  <span>ID: {cert.ref}</span>
                </div>

                <div className="absolute bottom-1 right-4 text-[4px] text-zinc-400 font-medium tracking-tight uppercase max-w-[50%] truncate">
                  Skills Education Registry
                </div>

              </div>

              {/* 4. BASE INTERFACE USER UTILITIES CONTROLS PANEL */}
          

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Search, PenTool, Share2 } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-fit lg:min-h-[85vh] 2xl:min-h-[80vh] bg-[#030303] overflow-hidden flex items-center selection:bg-blue-600 pb-16 pt-36 md:pt-40 lg:pt-40 lg:pb-30">

      {/* 🌌 AMBIENT BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Left Deep Blue Flare */}
        <div className="absolute top-[-20%] left-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-600/10 rounded-full blur-[140px]" />
        {/* Soft Right Cyan Flare */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[120rem] mx-auto w-full px-6">
        {/* 🛠️ Balanced Grid: lg:gap-16 aur xl:gap-24 se badi screens par gap perfect ho gaya */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center lg:items-stretch">

          {/* 📝 LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            {/* 🎯 Premium Animated Heading - Perfect on Desktop & Fully Fixed for Mobile */}
            <h1 className="text-[2rem] sm:text-[3.2rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] 2xl:text-[4.8rem] 3xl:text-[5.5rem] font-black leading-[1.2] lg:leading-[1.15] xl:leading-[1.1] tracking-tighter text-white flex flex-col gap-1 lg:gap-2 w-full">
              <span className="block max-sm:whitespace-normal whitespace-nowrap lg:min-w-max">
                Pakistan’s Most Practical
              </span>
              <span className="block max-sm:whitespace-normal whitespace-nowrap bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text py-1">
                SEO Training Program
              </span>
            </h1>

            {/* 🖥️ Paragraph: Adjusted for a clean hierarchy */}
            <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 opacity-90">
              Beat the local job market by mastering the world's most in-demand digital skill and launching a successful remote career today.
            </p>

            {/* 🛠️ Skill Matrix Blocks */}
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
              {[
                {
                  title: "WORDPRESS DEVELOPMENT",
                  desc: "Theme Customization & Plugin Integration",
                  icon: <Globe className="w-5 h-5 stroke-[2.5]" />
                },
                {
                  title: "SEARCH ENGINE OPTIMIZATION",
                  desc: "On-PAGE, OFF-PAGE & TECHNICAL SEO",
                  icon: <Search className="w-5 h-5 stroke-[2.5]" />
                },
                {
                  title: "CONTENT WRITING",
                  desc: "SEO COPYWRITING & BLOG ARCHITECTURE",
                  icon: <PenTool className="w-5 h-5 stroke-[2.5]" />
                },
                {
                  title: "Guest Posting",
                  desc: "HIGH-AUTHORITY LINK BUILDING STRATEGIES",
                  icon: <Share2 className="w-5 h-5 stroke-[2.5]" />
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer flex items-center gap-4 p-4 rounded-2xl bg-[#0d1321]/40 border border-white/10 backdrop-blur-md hover:border-blue-500/40 hover:bg-[#111827]/70 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="w-12 h-12 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center justify-center text-blue-400 bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-cyan-500/20 group-hover:text-cyan-300 group-hover:border-blue-500/40 group-hover:scale-105 transition-all duration-300 shrink-0 shadow-inner">
                    {item.icon}
                  </div>

                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="text-xs sm:text-sm font-black text-white  tracking-wide  group-hover:text-blue-400 transition-colors duration-300 truncate">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-white font-bold tracking-wider uppercase mt-0.5 group-hover:text-white transition-colors duration-300 truncate">
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* 🚀 ACTION CALL SYSTEM */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full sm:w-auto pt-4">

              {/* ENROLL NOW GRADIENT SLIDER BUTTON */}
              <Link href="/contact" className="w-full sm:w-auto block">
                <button className="group relative overflow-hidden w-full sm:min-w-[180px] h-[50px] rounded-full bg-white text-black font-black text-[12px] tracking-[2px] uppercase flex items-center justify-center gap-2 transition-all duration-500 shadow-xl active:scale-95 cursor-pointer">
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                    Enroll Now
                    <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </button>
              </Link>

              {/* ELITE NATIONWIDE TRUST BADGE */}
              <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-10 w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex items-center gap-4 text-left bg-transparent p-0">
                  <div className="flex -space-x-3.5 items-center isolation-auto">
                    {[
                      "https://images.unsplash.com/photo-1669804227127-0876cb0f5474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D",
                      "https://plus.unsplash.com/premium_photo-1682096108814-b53765f48ba5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBha2lzdGFuaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
                      "https://images.unsplash.com/photo-1647151481397-95e581943ac1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFraXN0YW5pJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",
                      "https://images.unsplash.com/photo-1599842057874-37393e9342df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBha2lzdGFuaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
                      "https://images.unsplash.com/photo-1711374316403-2bfa31ae9c2a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D"
                    ].map((src, idx) => (
                      <div
                        key={idx}
                        className="w-9 h-9 rounded-full border-2 border-[#111827] ring-1 ring-emerald-500/40 overflow-hidden bg-zinc-900 shrink-0 transform hover:scale-110 hover:z-10 transition-all duration-300"
                      >
                        <img src={src} alt={`Student ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-center leading-none">
                    <h4 className="text-xl font-black text-white tracking-tight flex items-center gap-0.5 uppercase">
                      150<span className="text-blue-500 font-black">+</span>
                    </h4>
                    <p className="text-[10px] text-white font-black uppercase tracking-widest mt-1.5 whitespace-nowrap">
                      Students Trained.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 📸 RIGHT CONTENT: SCALED PREMIUM STATIC VISUAL LAYER */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0 lg:h-auto">
            {/* 🔵 Subtle Ambient Glow Behind Image Frame */}
            <div className="absolute w-[80%] h-[80%] bg-blue-600/[0.08] rounded-full blur-[120px] pointer-events-none z-0 right-0 top-1/2 -translate-y-1/2" />

            {/* 🖼️ Premium Border Mockup Container - Clean & Highly Balanced Everywhere */}
            {/* max-w-full ke sath sm:max-w-[550px] aur lg:max-w-none lagaya hai taake choti screen pr image bohot bari ya narrow na ho */}
            <div className="relative z-10 w-full max-w-full sm:max-w-[550px] lg:max-w-none p-2 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_25px_60px_rgba(59,130,246,0.1)] group flex lg:h-full">

              {/* Inner Subtle Light Stroke */}
              <div className="absolute inset-0 border border-white/[0.05] rounded-xl pointer-events-none z-20" />

              <Image
                src="/about.jpg"
                alt="HRD Institute Tech Education Ecosystem Mockup"
                width={1400} 
                height={1000}
                priority
                className="w-full h-full object-cover rounded-xl select-none pointer-events-none shadow-inner opacity-95 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .animate-gradient { animation: gradientMove 6s linear infinite; }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
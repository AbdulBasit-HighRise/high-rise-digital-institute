"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative w-full bg-[#111827] overflow-hidden py-16 md:py-24 2xl:py-32 px-2 border-t border-white/5">
      {/* Premium Ambient Background Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-blue-600/[0.04] blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Main Framework Wrapper Container (Bari screens ke liye stretch expand kar diya hai) */}
      <div className="relative z-10 max-w-7xl xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-6 w-full">

        {/* Inner Content Grid Box Layout - Fully widened and balanced for 2K/4K/Large Displays */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 
           bg-gradient-to-bl from-[#0971A6] via-[#054f7a] to-[#021526]
           border border-white/10 rounded-3xl p-8 sm:p-12 xl:p-20 shadow-2xl">

          {/* Left Block Text Messaging Details (Width and max-bounds maxed out) */}
          <div className="space-y-4 w-full lg:max-w-3xl xl:max-w-4xl text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Core Flagship Headline precisely mimicking screenshot styling */}
            <h2 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-[1.02] tracking-tighter text-white uppercase italic font-sans">
              STOP SCROLLING. <br />
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                START EARNING.
              </span>
            </h2>

            {/* Left Accent Stroke Bar Layer with Subtext description */}
            <div className="flex items-stretch gap-4 pt-2 text-left max-w-2xl lg:max-w-none">
              <div className="w-[4px] bg-[#FFC71E] rounded-full flex-shrink-0" />
              <p className="text-white text-xs md:text-sm xl:text-base font-bold  tracking-wider leading-relaxed text-zinc-100">
                Join Pakistan's most practical skill-building academy.
                <br className="hidden sm:inline" />{" "}
                <span className="text-white">Zero theory. 100% practical live optimization</span> and real-world project ranking.
              </p>
            </div>

          </div>

          {/* Right Action Button Control Block */}
          <div className="w-full sm:w-auto lg:w-auto flex-shrink-0 flex justify-center lg:justify-end">
           <Link href="/contact" className="w-full sm:w-auto relative group block">
  {/* 🟦 Outer Glow Ring on Hover - Aligned Perfectly to Rounded 5px */}
  <div className="absolute -inset-1 rounded-[5px] bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-60 blur-md transition duration-300 pointer-events-none" />

  {/* Premium Action Button Card */}
  <button
    className="group relative overflow-hidden w-full sm:min-w-[260px] xl:min-w-[300px] h-14 xl:h-16 rounded-[5px] bg-white text-zinc-950 font-bold text-xs md:text-sm xl:text-base tracking-[2px] uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-xl border border-zinc-200/50 hover:border-transparent active:scale-[0.98] cursor-pointer"
  >
    {/* Blue to Cyan Hover Effect Gradient Layer */}
    <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 transition-all duration-300 ease-out group-hover:w-full" />

    {/* Button Text & Icon Layer - High Contrast Visibility */}
    <span className="relative z-10 flex items-center gap-3 text-zinc-950 group-hover:text-white transition-colors duration-200 ease-out antialiased">
      SECURE YOUR SEAT
      <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300 ease-out stroke-[3px]" />
    </span>
  </button>
</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
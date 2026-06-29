"use client";
import { Check, X, ShieldCheck, HelpCircle } from "lucide-react";

export default function ComparisonSection() {
  // Ultra-clear explicit comparison vectors using your new exact content
  const comparisonMatrix = [
    {
      metric: "Practical Learning",
      hrdInstitute: "100% Practical Live Work. No boring PPTs. You audit, optimize, and rank actual live websites from day one.",
      traditional: "Theoretical lectures, outdated notes, and memorizing definitions without understanding search algorithms."
    },
    {
      metric: "Curriculum Standard",
      hrdInstitute: "Combined Flagship Track. Advanced Technical SEO, Semantic Keyword Clusters, and High-Ticket Client Acquisition integrated together.",
      traditional: "Separated short modules. They charge you double for basic concepts with zero inter-connected strategy value."
    },
    {
      metric: "Traffic & Ranking Mastery",
      hrdInstitute: "Deep-dive into topical authority, Core Web Vitals optimization, and building bulletproof, algorithm-safe ranking frameworks.",
      traditional: "Teaching basic, outdated keyword stuffing and spammy backlink tactics that get websites penalized by Google."
    },
    {
      metric: "Industry Case Studies",
      hrdInstitute: "Real-world agency simulations, ranking actual keywords live, and end-to-end international client acquisition blueprints.",
      traditional: "Basic local assignments that have zero demand or footprint in the modern international freelancing market."
    },
    {
      metric: "Global Ecosystem Legacy",
      hrdInstitute: "Joining a massive nationwide community of students with secure digital verification IDs verifiable globally.",
      traditional: "Unverified printed papers or certificates without any online directory portal for employers to check."
    }
  ];

  return (
    <section id="comparison" className="relative w-full bg-[#1E2939] overflow-hidden py-16 md:py-20 2xl:py-24 px-6 border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-5 w-[400px] h-[400px] bg-blue-600/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-[400px] h-[400px] bg-emerald-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[85rem] 2xl:max-w-[95rem] mx-auto px-2 w-full space-y-2">

        {/* 🏷️ BRAND HEADER BLOCK */}
        <div className="text-center space-y-2 pb-4">
          <h2 className="text-[1.8rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-none tracking-tighter text-white font-sans">
            The Real{" "}
            <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">Difference</span>
          </h2>
          {/* mx-auto set kiya hai taake bade screens par bhi left/right dynamic center alignment barqarar rahe */}
          <p className="text-center text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium max-w-xl 2xl:max-w-2xl mx-auto ">
            See how HRD Institute breaks the traditional loop.
          </p>
          <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

     {/* 📊 SIDE-BY-SIDE COMPARISON TABLE (MAXIMUM MOBILE WIDTH & HIGH CLARITY) */}
<div className="w-full overflow-hidden sm:rounded-2xl border-y md:border border-white/10 bg-[#09090b] shadow-[0_30px_60px_rgba(0,0,0,0.8)]">

  {/* Header row with solid high contrast layout handles */}
  <div className="grid grid-cols-1 md:grid-cols-12 items-stretch border-b border-white/10 bg-white/[0.02]">
    <div className="md:col-span-4 p-4 md:p-6 text-zinc-500 font-black text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
      <HelpCircle size={14} /> CORE METRICS
    </div>

    {/* HRD Institute Column Block Highlight */}
    <div className="md:col-span-4 bg-gradient-to-b from-blue-600 to-blue-700 p-4 md:p-6 text-center text-white font-black text-sm md:text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
      ⚡ HRD INSTITUTE
    </div>

    <div className="md:col-span-4 p-4 md:p-6 text-zinc-500 font-black text-xs uppercase tracking-widest flex items-center justify-center text-center">
      TRADITIONAL ACADEMIES
    </div>
  </div>

  {/* Matrix Rows Wrapper */}
  <div className="divide-y divide-white/5">
    {comparisonMatrix.map((item, index) => (
      <div
        key={index}
        className="grid grid-cols-1 md:grid-cols-12 items-stretch text-left transition-all duration-150 hover:bg-white/[0.01]"
      >
        {/* 1. Metric Column */}
        <div className="md:col-span-4 p-4 md:p-6 flex items-center border-b md:border-b-0 border-white/5 md:border-r border-white/5 bg-white/[0.005]">
          <h4 className="w-full text-white font-black text-xs md:text-sm uppercase tracking-wide text-center md:text-left">
            {item.metric}
          </h4>
        </div>

        {/* 2. HRD Institute Column */}
        <div className="md:col-span-4 p-4 md:p-6 bg-blue-600/[0.02] border-b md:border-b-0 md:border-r border-white/5 flex items-start gap-3 justify-start text-left">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/20">
            <Check size={12} className="stroke-[4px]" />
          </div>
          <p className="text-zinc-100 text-[14px] md:text-[16px] font-bold tracking-wide leading-relaxed">
            {item.hrdInstitute}
          </p>
        </div>

        {/* 3. Others Column */}
        <div className="md:col-span-4 p-4 md:p-6 flex items-start gap-3 justify-start text-left bg-black/40">
          <div className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
            <X size={12} className="stroke-[3px]" />
          </div>
          <p className="text-zinc-400 text-[13px] md:text-[14px] font-medium leading-relaxed">
            {item.traditional}
          </p>
        </div>

      </div>
    ))}
  </div>

</div>

      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, X, ShieldCheck } from "lucide-react";

export default function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* 🎯 ABOUT SECTION - Premium Optimized Layout */}
      <section id="about" className="relative py-16 md:py-24 2xl:py-32 px-4 sm:px-6 bg-[#0b0f19] overflow-hidden flex items-center">

        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[700px] h-[300px] bg-blue-600/[0.04] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] bg-cyan-600/[0.03] blur-[130px] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[120rem] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">

            {/* 🖼️ LEFT: PREMIUM IMAGE / VIDEO CASE LAYER */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center order-2 lg:order-1 w-full lg:col-span-6"
            >
              {/* Outer Ambient Border Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl rounded-[2.5rem] opacity-70 pointer-events-none" />
              
              {/* Main Showcase Frame Box */}
              <div 
                onClick={() => setIsVideoOpen(true)}
                className="relative z-10 w-full p-3 rounded-[2rem] bg-zinc-900/40 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[1.15/1] xl:aspect-[1.2/1] max-w-full sm:max-w-[550px] lg:max-w-none flex items-center justify-center group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-600/10 opacity-60 pointer-events-none" />
                
                {/* Image Wrapper Engine */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                  <Image
                    src="/about11.jpg"
                    alt="HRD Institute - Practical Training"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-w-1280px) 100vw, 50vw"
                    priority
                  />
                  {/* Glass Dark Overlay Tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                  
                  {/* Dynamic Floating Play Glass Trigger */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-400 flex items-center justify-center backdrop-blur-md shadow-lg shadow-blue-500/20 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-black group-hover:border-transparent group-hover:scale-110 transition-all duration-500">
                      <Play size={20} className="fill-current ml-1 group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-[2px] text-zinc-400 group-hover:text-white transition-colors duration-300">
                      Click to Play Blueprint
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 📝 RIGHT: TEXT CONTENT & ACCORDION MATRIX */}
            <div className="space-y-6 md:space-y-7 order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center w-full text-left">
              
              {/* Typography Heading Block */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[10px] md:text-[11px] font-black tracking-[3px] uppercase">
                    Must Watch Before Admission
                  </span>
                </div>
                <h2 className="text-[2.1rem] sm:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.2rem] font-black tracking-tight leading-[1.15] text-white">
                  What You Will Master : <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    No Theory, Just Live Projects
                  </span>
                </h2>
              </div>

              {/* Description Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 opacity-90"
              >
                Skip boring lectures. You will actively audit real websites, conduct advanced keyword research, build topical authority, and rank pages on Google—building a live portfolio to win high-paying international clients.
              </motion.p>

              {/* 🎴 VERTICAL CARDS CONTAINER */}
              <div className="space-y-4 w-full max-w-xl">
                {[
                  {
                    title: "Guaranteed Internship",
                    desc: "Top Students get hired in our own Digital Agency to work on real-world industry tasks.",
                  },
                  {
                    title: "Lifetime Mentorship",
                    desc: "Get free uncompromised lifetime 1-1 support channels from premium expert mentors.",
                  },
                  {
                    title: "Online Community",
                    desc: "Connect, network, trade projects, and grow together with elite global batch peers.",
                  }
                ].map((feat, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-[#0d1321]/90 to-[#070a12]/70 border border-white/5 hover:border-blue-500/30 hover:bg-[#111827]/60 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_35px_rgba(59,130,246,0.08)] transition-all duration-300 relative overflow-hidden text-left"
                  >
                    {/* Left Edge Glow Indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#00f2ff] to-[#3b82f6] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r" />

                    {/* Checkmark circular status badge */}
                    <div className="w-8 h-8 rounded-lg border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-[#00f2ff] group-hover:bg-gradient-to-br group-hover:from-[#00f2ff] group-hover:to-[#3b82f6] group-hover:text-black group-hover:border-transparent group-hover:scale-105 transition-all duration-300 shrink-0 mt-0.5">
                      <svg className="w-4 h-4 stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    {/* Feature Text */}
                    <div className="flex flex-col gap-1 min-w-0">
                      <h4 className="text-[17px] sm:text-[20px] font-black text-white  tracking-wide group-hover:text-[#00f2ff] transition-colors duration-200">
                        {feat.title}
                      </h4>
                      <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 opacity-90">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 📹 BLUEPRINT VIDEO POPUP MODAL (Overlay Grid) */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop Layer */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsVideoOpen(false)} 
              className="absolute inset-0 bg-black/90 backdrop-blur-md" 
            />
            
            {/* Video Canvas Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }} 
              className="relative w-full max-w-4xl aspect-video bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button Trigger */}
              <button 
                onClick={() => setIsVideoOpen(false)} 
                className="absolute top-4 right-4 z-50 text-white/50 hover:text-white p-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm transition-all"
              >
                <X size={18} />
              </button>

              {/* Replace target URL below with your actual orientation video link */}
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="HRD Institute Blueprint Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
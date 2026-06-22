"use client";
import React, { useRef, useState, useEffect } from "react";
import { Play, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

interface Student {
  name: string;
  role: string;
  videoId: string;
}

export default function StudentCarouselSection() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const students: Student[] = [
    { name: "Maryam", role: "WordPress Engineer", videoId: "q9Xa9RR6mBM" },
    { name: "Adeeba", role: "SEO Strategy Lead", videoId: "GAXdDDqVYtc" },
    { name: "Waheed", role: "Fullstack Web Dev", videoId: "YtxNZG8aS2E" },
    { name: "Mohsin", role: "Custom Theme Specialist", videoId: "3Gg3rAfRgLA" },
    { name: "M HARIS", role: "Technical SEO Expert", videoId: "buTpBRJkab0" },
    { name: "Abdul Manan", role: "UI/UX Specialist", videoId: "flnf09DQyeo" },
    { name: "Salman", role: "Digital Marketer", videoId: "lZbdNfodmhQ" }
  ];

  const repeatedStudents = [...students, ...students];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 🔄 Smooth Auto-Scroll Effect
  useEffect(() => {
    if (playingIndex !== null || isDragging) return;

    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    const speed = 0.5;

    const scroll = () => {
      if (!slider) return;

      slider.scrollLeft += speed;

      const maxScroll = slider.scrollWidth / 2;
      if (slider.scrollLeft >= maxScroll) {
        slider.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [playingIndex, isDragging]);

  // 🖱️ Mouse Drag Handlers
  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // 🎛️ Manual Arrow Buttons Navigation
  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    /* 🛠️ CARD CONTAINER WIDTH FIXED: Section ko completely edge-to-edge screen horizontal flex axis par upgrade kiya */
    /* 🛠️ CARD CONTAINER WIDTH FIXED: Section ko completely edge-to-edge screen horizontal flex axis par upgrade kiya */
    <section className="relative w-full bg-[#111827] overflow-hidden py-16 md:py-24 2xl:py-32 px-6 border-t border-white/5 flex flex-col items-center justify-center">
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue-600/[0.02] blur-[190px] rounded-full pointer-events-none" />

      {/* 🏷️ HEADER CONTAINER - Restricted to standard padding grid balance */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-12">
        <div className="w-full flex flex-col items-center justify-center text-center gap-6 border-b border-white/5 pb-8 relative">

          <div className="flex flex-col items-center justify-center text-center space-y-4 w-full max-w-4xl mx-auto px-4">

            {/* 🎯 Heading: Clean tracking aur mobile safety line-height ke sath */}
            <h2 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-[1.15] md:leading-[1.05] tracking-tighter text-white font-sans text-center block">
              What Our Students Say{" "}
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text inline-block py-1">
                About Us
              </span>
            </h2>

            {/* 🛠️ Balanced Divider & Subtext System */}
            <div className="flex items-center justify-center gap-3 w-full max-w-2xl mx-auto">
              {/* Left Line - Hidden on super small mobile screens to save space */}
              <div className="w-8 md:w-12 h-[2px] bg-[#FFC71E] rounded-full shrink-0 hidden sm:block" />
              <p className="
              text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 opacity-90">            Our learners don’t just complete courses — they achieve real growth, confidence, and career results.
              </p>

              {/* Right Line - Hidden on super small mobile screens to save space */}
              <div className="w-8 md:w-12 h-[2px] bg-[#FFC71E] rounded-full shrink-0 hidden sm:block" />
            </div>

          </div>

   
        </div>
      </div>

      {/* 📹 FULL-WIDTH CAROUSEL WRAPPER WITH GRADIENT OVERLAYS */}
      <div className="relative w-full flex items-center overflow-x-hidden py-4">
        {/* Left & Right Edge Dark Shadow Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-44 bg-gradient-to-r from-[#111827] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-44 bg-gradient-to-l from-[#111827] to-transparent z-20 pointer-events-none" />

        {/* Full Screen Track Frame Layer */}
        <div
          ref={sliderRef}
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={handleDragging}
          className={`flex overflow-x-auto gap-4 md:gap-5 px-6 md:px-16 w-full scrollbar-none select-none transition-all duration-300 ${isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {repeatedStudents.map((student, idx) => {
            const isVideoPlaying = playingIndex === idx;
            const thumbUrl = `https://img.youtube.com/vi/${student.videoId}/0.jpg`;

            return (
              <div
                key={`${student.videoId}-${idx}`}
                className="w-[260px] sm:w-[280px] md:w-[300px] shrink-0"
              >
                {/* 🌟 FIX: Outer Box retains crisp sharp borders & shadow without bleeding blur */}
                <button
                  type="button"
                  onClick={() => setPlayingIndex(idx)}
                  className="group/video-card relative aspect-square w-full text-left rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl hover:border-blue-500/50 flex flex-col justify-end cursor-pointer p-0 transition-all duration-500 active:scale-[0.99] touch-manipulation"
                >
                  {isVideoPlaying ? (
                    <div className="absolute inset-0 w-full h-full bg-[#030303]">
                      <iframe
                        src={`https://www.youtube.com/embed/${student.videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                        title={student.name}
                        className="w-full h-full object-contain"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <>
                      {/* ⚡ WRAPPER LAYER FOR INSIDE-ONLY BLUR AND TRANSITIONS */}
                      <div className="absolute inset-0 w-full h-full filter blur-[5px] group-hover/video-card:blur-none transition-all duration-500 will-change-[filter,transform] z-0">
                        <img
                          src={thumbUrl}
                          alt={student.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover/video-card:opacity-50 group-hover/video-card:scale-105 transition-all duration-500"
                          loading="lazy"
                          draggable="false"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-90 group-hover/video-card:opacity-100 group-hover/video-card:scale-110 transition-all duration-300">
                          <div className="w-11 h-11 rounded-full bg-[#FFC71E] text-[#030303] flex items-center justify-center shadow-lg group-hover/video-card:bg-blue-600 group-hover/video-card:text-white transition-colors duration-300">
                            <Play size={14} className="fill-current ml-0.5" />
                          </div>
                        </div>

                        <div className="absolute bottom-4 left-4 z-20 space-y-1 w-full pr-8 text-left">
                          <div className="inline-block bg-white text-black font-black font-sans text-[10px] tracking-wide px-2 py-0.5 uppercase shadow-md transition-colors group-hover/video-card:bg-[#00f2ff]">
                            {student.name}
                          </div>
                        </div>

                        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-1.5 rounded-lg text-white/60 group-hover/video-card:text-blue-400 transition-colors">
                          <MessageSquare size={12} />
                        </div>
                      </div>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
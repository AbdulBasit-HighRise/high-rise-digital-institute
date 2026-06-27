"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Globe,
  Search,
  ArrowRight,
  Sparkles,
  ChevronDown,
  X,
  Compass
} from "lucide-react";

export default function CoursesSection() {
  // 📝 Popup Modal Open/Close States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<number | null>(null);

  // 📝 Roadmap FAQ Content Data Array
  const roadmapModules = [
    {
      title: "01. WordPress Core Development",
      details: "Learn to build, customize, and manage professional WordPress websites from scratch. Gain hands-on experience creating business websites, blogs, eCommerce stores, and landing pages using modern themes, plugins, and page builders."
    },
    {
      title: "02. Strategy, Niche Research & Search Fundamentals",
      details: "Understand how search engines crawl, index, and rank websites. Learn the impact of Google's algorithm updates and ranking signals on website performance. Master identifying profitable niches, analyzing competitors, understanding user intent, and creating content strategies that help websites achieve long-term organic growth."
    },
    {
      title: "03. AI-Powered & AI Search Optimization (AEO)",
      details: "Discover how to leverage AI tools to streamline keyword research, content planning, optimization, and workflow automation while maintaining high-quality, search-focused content. Understand how AI-powered search platforms work and learn strategies to optimize content for AI-generated answers, conversational search, and emerging search experiences."
    },
    {
      title: "04. Keyword Research & SEO Content Writing",
      details: "Master professional keyword research techniques, search intent analysis, topic clustering, and content planning to build topical authority. Create high-quality, search-intent-driven content that ranks well in search engines while delivering value to readers. Learn on-page optimization, content structure, internal linking, and semantic optimization."
    },
    {
      title: "05. On-Page SEO Checklist",
      details: "Optimize every page for maximum visibility through structural elements: Title Tags, Meta Descriptions, URL Structure, Heading Hierarchy (H1-H6), Internal Linking, Image Optimization (Alt text/WebP), and advanced Schema Markup / Structured Data integration."
    },
    {
      title: "06. Technical SEO, Speed & Core Web Vitals",
      details: "Develop expertise in technical website optimization, including XML Sitemaps, Robots.txt, Canonical Tags, Crawl Budget Optimization, and Indexing Issues. Master PageSpeed Optimization and Core Web Vitals metrics including Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), and Mobile SEO configurations."
    },
    {
      title: "07. Local & International SEO Expansion",
      details: "Improve local visibility through Google Business Profile Optimization, Local Citations, NAP Consistency, Local Keyword Research, Review Management, and Google Maps Rankings. Expand websites into global markets using Hreflang Implementation, Multilingual SEO, Geo-Targeting, and Country-Specific Content Strategies."
    },
    {
      title: "08. Link Building & Digital PR",
      details: "Build sustainable domain authority through ethical white-hat SEO practices, including Guest Posting, targeted Outreach Campaigns, Digital PR, Resource Link Building, Competitor Backlink Analysis, and strategic Authority Building Frameworks."
    },
    {
      title: "09. Industry Google & Professional SEO Tools",
      details: "Gain practical hands-on experience using industry-standard environments. Master Google Tools: Google Search Console, Google Analytics 4 (GA4), Google Tag Manager, Google Keyword Planner, PageSpeed Insights, and Google Trends. Learn Professional Software: Ahrefs, SEMrush, Screaming Frog, Rank Math SEO, and Yoast SEO."
    },
    {
      title: "10. Blogging, Security & WordPress Maintenance",
      details: "Learn how to build authority through blogging by creating content calendars, optimizing articles, and developing long-term content marketing strategies. Protect assets through automated Website Backups, Security Hardening, Malware Protection, Plugin & Theme Management, and continuous Performance Monitoring."
    },
    {
      title: "11. Freelancing, Monetization & Digital Assets Valuation",
      details: "Build a successful freelancing career via Fiverr & Upwork Profile Optimization, Proposal Writing, Client Communication, Portfolio Development, Pricing, and Project Management. Explore multiple revenue opportunities: Affiliate Marketing, Display Advertising, Lead Generation, Digital Products, and Service-Based Assets. Understand the fundamentals of website valuation, buying, improving, and selling digital assets using established online marketplaces."
    },
    {
      title: "12. Live Projects & Certification Milestones",
      details: "Apply your knowledge by working on real-world WordPress and SEO projects, conducting live website audits, implementing optimization strategies, and building a professional portfolio. What You'll Achieve: Build professional sites, master sustainable organic growth, optimize for AI search, launch a freelancing career/agency, and earn a verified Certificate of Completion upon successfully finishing the program."
    }
  ];

  return (
    <section
      id="courses"
      className="relative w-full bg-[#1E2939] overflow-hidden py-16 md:py-20 2xl:py-24 px-6 border-t border-white/5"
    >
      {/* Subtle Blue/Cyan Ambient Radial Glow behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl xl:max-w-[85rem] mx-auto  w-full space-y-2">
        {/* 🏷️ HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 text-center md:text-left border-b border-white/5 pb-6">
          <div className="space-y-2">
            <h2 className="text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-tight md:leading-none tracking-tighter text-white font-sans whitespace-nowrap">
              Master{" "}
              <span className="inline bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text py-1">
                Pathway
              </span>
            </h2>
          </div>

          <div className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-bold leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 opacity-90">
            Build Fast.{" "}
            <span className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-bold leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 opacity-90">
              Rank First. Earn Dollars.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2 w-full px-0">

          {/* 🟦 LEFT COLUMN: INFO BOX WITH ROADMAP BUTTON (MAX MOBILE WIDTH) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#111827] border-y sm:border border-white/5 sm:rounded-2xl p-4 sm:p-5 md:p-8 backdrop-blur-sm w-full">
            <div className="space-y-4 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-extrabold text-[10px] tracking-widest uppercase">
                <Sparkles size={10} /> Ultimate Combo Track
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight px-1 sm:px-0">
                Sign up now and become a skilled SEO professional!
              </h3>
              <p className="text-white text-[15px] sm:text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 opacity-90 w-full px-1 sm:px-0">
                Led by industry experts, master SEO, AIO, Blogging, Freelancing, and Local SEO. Gain practical skills and expert insights to transform your career.      </p>
            </div>

            {/* Core Tech Stack Included Pills */}
            <div className="space-y-3 pt-4 border-t border-white/5 w-full px-1 sm:px-0">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-white">What You'll Get:</h4>
              <div className="flex flex-wrap gap-1.5 w-full">
                <span className="px-2.5 py-1.5 rounded-lg bg-white/5 text-white font-bold text-xs flex items-center gap-1.5 border border-white/5">
                  One-Time Fee Only
                </span>
                <span className="px-2.5 py-1.5 rounded-lg bg-white/5 text-white font-bold text-xs flex items-center gap-1.5 border border-white/5">
                  Live Lectures
                </span>
                <span className="px-2.5 py-1.5 rounded-lg bg-white/5 text-white font-bold text-xs border border-white/5">
                  Recorded Lectures
                </span>
                <span className="px-2.5 py-1.5 rounded-lg bg-white/5 text-white font-bold text-xs border border-white/5">
                  Lifetime LMS Access
                </span>
                <span className="px-2.5 py-1.5 rounded-lg bg-white/5 text-white font-bold text-xs border border-white/5">
                  24/7 Support
                </span>
                <span className="px-2.5 py-1.5 rounded-lg bg-white/5 text-white font-bold text-xs border border-white/5">
                  Worth 300$ Free Resources
                </span>
              </div>
            </div>

            {/* 🗺️ DYNAMIC ROADMAP TRIGGER BUTTON */}
            <div className="w-full pt-2 px-1 sm:px-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-[2px] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(59,130,246,0.25)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.4)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                View SEO Mastery Roadmap
              </button>
            </div>
          </div>

          {/* 🟨 RIGHT COLUMN: CONTENT CARD (MAX MOBILE WIDTH) */}
          <div className="lg:col-span-7 relative group bg-gradient-to-br from-[#0B1220] to-[#030303] border-y-2 sm:border-2 border-white/10 hover:border-blue-500/30 sm:rounded-2xl overflow-hidden p-4 sm:p-5 md:p-8 flex flex-col md:flex-row justify-between gap-6 transition-all duration-300 shadow-xl w-full">

            {/* Left side of the single layout */}
            <div className="flex-1 flex flex-col justify-between space-y-5 w-full">
              <div className="space-y-2 w-full px-1 sm:px-0">
                <div className="inline-block bg-[#FFC71E]/10 border border-[#FFC71E]/20 text-[#FFC71E] font-black text-[10px] tracking-wider px-2.5 py-0.5 rounded-md">
                  SEO-WP-2026
                </div>
                <h4 className="text-2xl font-black text-white tracking-tight pt-1 leading-tight">
                  WordPress & SEO Master Track
                </h4>
              </div>

              {/* Learning Outcomes List */}
              <ul className="space-y-4 text-zinc-400 text-xs md:text-sm font-semibold w-full px-1 sm:px-0">
                <li className="flex items-start gap-2.5 w-full">
                  <CheckCircle size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5 text-left w-full">
                    <span className="font-black text-white uppercase tracking-wider text-[11px] md:text-[14px]">
                      Custom Web Development
                    </span>
                    <span className="text-white font-medium text-xs">
                      Build fast, high-converting WordPress websites from scratch.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 w-full">
                  <CheckCircle size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5 text-left w-full">
                    <span className="font-black text-white uppercase tracking-wider text-[11px] md:text-[14px]">
                      Advanced SEO
                    </span>
                    <span className="text-white font-medium text-xs">
                      Fix Core Web Vitals and rank pages higher on Google.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 w-full">
                  <CheckCircle size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5 text-left w-full">
                    <span className="font-black text-white uppercase tracking-wider text-[11px] md:text-xs">
                      Smart Content Strategy
                    </span>
                    <span className="text-white font-medium text-[14px]">
                      Master semantic keyword mapping and silo architectures.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 w-full">
                  <CheckCircle size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5 text-left w-full">
                    <span className="font-black text-white uppercase tracking-wider text-[11px] md:text-[14px]">
                      Global Freelancing Blueprint
                    </span>
                    <span className="text-white font-medium text-xs">
                      Work on live projects and land high-paying international clients.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right side: Pricing Block */}
            <div className="w-full md:w-[220px] bg-white/[0.02] border border-white/5 rounded-xl p-4 sm:p-5 flex flex-col justify-between text-center md:text-left h-auto md:h-full gap-4">
              <div className="space-y-1 w-full">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Investment</p>
                <div className="pt-2 leading-none flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start gap-3 md:gap-1 w-full">
                  <span className="text-[22px] font-black text-[#FFC71E] tracking-tight">Rs 9,999</span>
                  <span className="text-[12px] text-zinc-500 line-through block font-bold">Rs 19,999</span>
                </div>
              </div>

              <Link href="/contact" className="w-full block">
                <button
                  className="group relative overflow-hidden w-full h-[48px] 2xl:h-[56px] rounded-[5px] bg-white text-zinc-950 font-bold text-[11px] 2xl:text-[13px] tracking-[2px] uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-md border border-zinc-200/50 hover:border-transparent active:scale-[0.98] cursor-pointer"
                >
                  {/* Professional Sliding Gradient Overlay */}
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 transition-all duration-300 ease-out group-hover:w-full" />

                  {/* High-Contrast Clear Text Content */}
                  <span className="relative z-10 flex items-center gap-2 text-zinc-950 group-hover:text-white transition-colors duration-200 antialiased">
                    Enroll Now
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                  </span>
                </button>
              </Link>
            </div>

          </div>

        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl bg-[#0b0f19] border border-white/10 rounded-2xl shadow-2xl p-5 md:p-8 lg:p-10 overflow-hidden flex flex-col max-h-[85vh] transition-all duration-300">

              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                <div className="text-left">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-blue-400 block mb-1">Ecosystem Roadmap</span>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white uppercase italic tracking-wide">SEO Mastery Course Modules</h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content - FAQ Accordions */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-zinc-800 text-left">
                {roadmapModules.map((module, index) => {
                  const isOpen = activeModule === index;
                  return (
                    <div
                      key={index}
                      className="border border-white/5 rounded-xl bg-[#0d1220]/60 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setActiveModule(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left font-black text-xs sm:text-sm md:text-base text-zinc-200 hover:text-blue-400 hover:bg-white/[0.01] transition-all cursor-pointer select-none"
                      >
                        <span className={`${isOpen ? 'text-blue-400' : ''}`}>{module.title}</span>
                        <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 text-zinc-500 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
                      </button>

                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] border-t border-white/5' : 'max-h-0'}`}>
                        <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-medium leading-relaxed p-4 md:p-5 opacity-90 whitespace-pre-line">
                          {module.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Modal Footer Cross Button */}
              <Link href="/contact" className="w-full block">
                <button
                  className="group relative overflow-hidden w-full h-[48px] 2xl:h-[56px] rounded-[5px] bg-white text-zinc-950 font-bold text-[11px] 2xl:text-[13px] tracking-[2px] uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-md border border-zinc-200/50 hover:border-transparent active:scale-[0.98] cursor-pointer"
                >
                  {/* Professional Sliding Gradient Overlay */}
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 transition-all duration-300 ease-out group-hover:w-full" />

                  {/* High-Contrast Clear Text Content */}
                  <span className="relative z-10 flex items-center gap-2 text-zinc-950 group-hover:text-white transition-colors duration-200 antialiased">
                    Enroll Now
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                  </span>
                </button>
              </Link>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
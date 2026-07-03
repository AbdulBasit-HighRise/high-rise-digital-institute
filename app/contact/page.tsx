"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, MessageCircle, ArrowRight } from "lucide-react";
import { supabase } from "@/src/components/lib/supabase";

export default function StudentEnrollmentForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    course: "",
    fullName: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    city: "",
    age: "",
    gender: "Male",
    education: "", 
    password: "",
    address: "",
    agree: false,
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) return alert("Kindly accept the terms and conditions.");
    if (!formData.course) return alert("Please select your desired course path.");

    const parsedAge = parseInt(formData.age);
    if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 30) {
      return alert("Age restriction limit: Only students between 18 to 30 years old are allowed to register.");
    }

    if (!formData.education) return alert("Please select your education level.");

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      const userUUID = authData?.user?.id;

      if (userUUID) {
        const { error: profileError } = await supabase.from("profiles").insert({
          id: userUUID,
          full_name: formData.fullName,
          father_name: formData.fatherName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          city: formData.city,
          age: parsedAge,
          gender: formData.gender,
          education: formData.education,
          address: formData.address,
          course_slug: formData.course,
          fee_status: "Unpaid",
          role: "student"
        });

        if (profileError) throw profileError;

        const { error: enrollError } = await supabase.from("enrollments").insert({
          student_id: userUUID,
          course_id: formData.course === "wordpress-seo" ? 1 : formData.course === "fullstack-dev" ? 2 : 3,
          progress: 0
        });

        if (enrollError) throw enrollError;

        try {
          await fetch("/api/send-enrollment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
        } catch (emailError) {
          console.error("Background Email Notification Error:", emailError);
        }

        setSubmitted(true);
      }
    } catch (error: any) {
      alert(`Registration Mismatch Error: ${error.message || "Connection Interrupted"}`);
    } finally {
      setLoading(false);
    }
  };

  const sendWhatsAppReceipt = () => {
    const adminWhatsAppNumber = "923001234567";
    const structuredText = `🚨 *NEW HRD LMS ENROLLMENT* 🚨%0A%0A*Name:* ${formData.fullName}%0A*Father Name:* ${formData.fatherName}%0A*Course:* ${formData.course.toUpperCase()}%0A*Phone:* ${formData.phoneNumber}%0A%0A_Maine form register kar diya hai. Kindly meri fee verify karke mera dashboard account status unlock/approve kar dein. Fee screenshot neeche attached hai:_`;

    window.open(`https://api.whatsapp.com/send?phone=${adminWhatsAppNumber}&text=${structuredText}`, "_blank");
  };

  return (
    /* GLOBAL 4K BACKGROUND WRAPPER */
    <div className="w-full min-h-screen bg-[#030712] flex justify-center items-stretch overflow-x-hidden">
      
      {/* MAX-WIDTH 1920PX PROPORTIONAL GRID CONTAINER */}
      <main className="w-full max-w-[2620px] min-h-screen bg-[#030712] flex flex-col lg:flex-row font-sans selection:bg-[#7bc143] selection:text-white relative overflow-hidden antialiased shadow-[0_0_80px_rgba(0,0,0,0.6)]">
        
        {/* 🔵 LEFT SIDE COLUMN: FIXED OVERFLOW FOR LAPTOPS/MOBILE */}
        <section className="w-full lg:w-[42%] bg-gradient-to-br from-[#030712] via-[#09152e] to-[#021b3a] text-white p-6 sm:p-10 lg:p-12 xl:p-16 2xl:p-20 pt-28 md:pt-36 lg:pt-40 2xl:pt-44 flex flex-col justify-start relative min-h-fit border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden shrink-0">

          {/* Ambient Background Lights */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#00f2ff]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

          {/* Upper Segment: Headings Block */}
          <div className="space-y-4 max-w-xl relative z-10 text-left shrink-0 mx-auto w-full">
            <div className="w-16 h-[4px] bg-[#00f2ff] rounded-full shadow-[0_0_15px_rgba(0,242,255,0.6)]" />

            <h1 className="text-[2rem] sm:text-[2rem] xl:text-[2rem] font-black tracking-tighter uppercase leading-[1.02] text-white">
              LMS REGISTRATION <br />
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#00a2ff] to-[#3b82f6] bg-clip-text text-transparent drop-shadow-sm">
                START LEARNING
              </span> 
            </h1>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/10 text-[10px] sm:text-xs font-bold text-white  tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] text-white animate-pulse" />
                WordPress & Advanced SEO Training Program Included
              </div>
            </div>
          </div>

          {/* 🎓 MIDDLE SEGMENT: NATURAL RESPONSIVE FLOW */}
          <div className="w-full max-w-xl border-t border-white/10 pt-4 mt-6 mb-6 relative z-10 text-left flex flex-col mx-auto shrink-0">
            
            <div className="mb-3 shrink-0">
            
              <h2 className="text-sm sm:text-base xl:text-lg font-black text-white tracking-tight mt-1">
                Program Syllabus Breakdown
              </h2>
            </div>

            {/* Natural layout height for seamless rendering across all devices */}
            <div className="space-y-3 pr-2 pb-4">
              
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xs font-black text-[#00f2ff] uppercase tracking-wide mb-1">WordPress Website Development</h3>
                {/* <p className="text-[11px] xl:text-xs text-zinc-400 leading-relaxed">Learn to build, customize, and manage professional WordPress websites from scratch. Gain hands-on experience creating business websites, blogs, eCommerce stores, and landing pages using modern themes.</p> */}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xs font-black text-[#00f2ff] uppercase tracking-wide mb-1">Website Planning & Niche Research</h3>
                {/* <p className="text-[11px] xl:text-xs text-zinc-400 leading-relaxed">Learn how to identify profitable niches, analyze competitors, understand user intent, and create content strategies that help websites achieve long-term organic growth.</p> */}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xs font-black text-[#00f2ff] uppercase tracking-wide mb-1">AI-Powered SEO</h3>
                {/* <p className="text-[11px] xl:text-xs text-zinc-400 leading-relaxed">Discover how to leverage AI tools to streamline keyword research, content planning, optimization, and workflow automation while maintaining high-quality, search-focused content.</p> */}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xs font-black text-[#00f2ff] uppercase tracking-wide mb-1">AI Search Optimization (AEO)</h3>
                {/* <p className="text-[11px] xl:text-xs text-zinc-400 leading-relaxed">Understand how AI-powered search platforms work and learn strategies to optimize content for AI-generated answers, conversational search, and emerging search experiences.</p> */}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xs font-black text-[#00f2ff] uppercase tracking-wide mb-1">Keyword Research & Content Strategy</h3>
                {/* <p className="text-[11px] xl:text-xs text-zinc-400 leading-relaxed">Master professional keyword research techniques, search intent analysis, topic clustering, and content planning to build topical authority and improve search visibility.</p> */}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xs font-black text-[#00f2ff] uppercase tracking-wide mb-1">SEO Content Writing & Optimization</h3>
                {/* <p className="text-[11px] xl:text-xs text-zinc-400 leading-relaxed">Create high-quality, search-intent-driven content that ranks well in search engines while delivering value to readers. Learn on-page optimization, content structure, and internal linking.</p> */}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xs font-black text-[#00f2ff] uppercase tracking-wide mb-1">Search Engine Fundamentals</h3>
                {/* <p className="text-[11px] xl:text-xs text-zinc-400 leading-relaxed">Understand how search engines crawl, index, and rank websites. Learn the impact of Google's algorithm updates and ranking signals on website performance.</p> */}
              </div>

              {/* Grid Matrix Layout for Technical Blueprints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5 space-y-1.5">
                  <h4 className="text-[11px] font-black text-[#00f2ff] uppercase tracking-wider">On-Page SEO Checklist</h4>
                  {/* <div className="flex flex-wrap gap-1">
                    {["Title Tags", "Meta Descriptions", "URL Structure", "Heading Hierarchy", "Internal Linking", "Image Optimization", "Schema Markup", "Structured Data"].map((item, i) => (
                      <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-zinc-300 font-medium">{item}</span>
                    ))}
                  </div> */}
                </div>

                <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5 space-y-1.5">
                  <h4 className="text-[11px] font-black text-[#00f2ff] uppercase tracking-wider">Technical SEO Blueprint</h4>
                  {/* <div className="flex flex-wrap gap-1">
                    {["XML Sitemaps", "Robots.txt", "Canonical Tags", "Crawl Budget", "Indexing Issues", "Core Web Vitals", "Speed Optimization", "Mobile SEO"].map((item, i) => (
                      <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-zinc-300 font-medium">{item}</span>
                    ))}
                  </div> */}
                </div>

                <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5 space-y-1.5">
                  <h4 className="text-[11px] font-black text-[#00f2ff] uppercase tracking-wider">Local SEO Strategy</h4>
                  {/* <div className="flex flex-wrap gap-1">
                    {["Google Business Profile", "Local Citations", "NAP Consistency", "Review Management", "Maps Rankings"].map((item, i) => (
                      <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-zinc-300 font-medium">{item}</span>
                    ))}
                  </div> */}
                </div>

                <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5 space-y-1.5">
                  <h4 className="text-[11px] font-black text-[#00f2ff] uppercase tracking-wider">Google & Premium Tools</h4>
                  {/* <div className="flex flex-wrap gap-1">
                    {["Search Console", "GA4 Analytics", "Tag Manager", "Ahrefs Suite", "SEMrush Core", "Rank Math Pro"].map((item, i) => (
                      <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-zinc-300 font-medium">{item}</span>
                    ))}
                  </div> */}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xs font-black text-[#00f2ff] uppercase tracking-wide mb-1">Blogging & Content Marketing</h3>
                {/* <p className="text-[11px] xl:text-xs text-zinc-400 leading-relaxed">Learn how to build authority through blogging by creating content calendars, optimized articles, and developing long-term content marketing strategies.</p> */}
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/20 to-cyan-950/20 border border-blue-500/10 space-y-2">
                <h3 className="text-xs font-black text-white uppercase tracking-wider">What You'll Achieve</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[14px] text-white">
                  {[
                    "Build professional WordPress websites.",
                    "Master modern SEO for organic growth.",
                    "Optimize for search engines & AI tools.",
                    "Work with industry SEO & analytics software.",
                    "Launch a freelancing career or digital agency.",
                    "Earn an official Certificate of Completion."
                  ].map((achieve, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-[#00f2ff] font-bold">✓</span>
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* 🖼️ TRUST BADGES FOOTER BLOCK (PICTURE SECTION) */}
        
        </section>

        {/* ⚪ RIGHT SIDE COLUMN: FORM HUB */}
        <section className="w-full lg:w-[58%] bg-[#0b0f19] p-6 sm:p-12 lg:p-16 xl:p-20 2xl:p-24 pt-12 md:pt-16 lg:pt-40 2xl:pt-44 flex flex-col justify-start relative border-t lg:border-t-0 border-white/5">
          <div className="w-full max-w-2xl mx-auto relative z-10">

            {submitted ? (
              /* SUCCESS SUBMITTED MATRIX CARDS LAYER */
              <div className="w-full flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-500">

                {/* CARD 1: FORM STATUS / SUCCESS BADGE */}
                <div className="border border-white/10 bg-[#0d1527] shadow-[0_20px_50px_rgba(0,242,255,0.05)] rounded-2xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <div className="w-16 h-16 rounded-full bg-[#00f2ff]/10 text-[#00f2ff] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,242,255,0.2)] border border-[#00f2ff]/30 group-hover:scale-105 transition-transform duration-300">
                    <CheckCircle2 size={32} className="stroke-[2.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Form Registered Successfully!</h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                      Aapka data secure portal ledger mein successfully register aur save ho chuka hai. Kindly step by step details lock karein.
                    </p>
                  </div>
                </div>

                {/* CARD 2: OFFICIAL PAYMENT ACCOUNTS */}
                <div className="border border-white/10 bg-[#0b0f19]/90 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.4)] rounded-2xl p-8 flex flex-col space-y-4 relative overflow-hidden text-left">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500" />

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 block mb-1">Official Fee Accounts</span>
                    <h3 className="text-xl font-black text-white uppercase tracking-wide italic">Payment Details</h3>

                    {/* Account Rows Stretched Cleanly into a Vertical Column Stack */}
                    <div className="mt-4 flex flex-col gap-4 w-full max-w-xl mx-auto">
                      
                      {/* 🏦 CARD 1: MEEZAN BANK DETAILS */}
                      <div className="p-5 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-blue-500/20">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-[9px] text-blue-400 font-bold uppercase tracking-wider">Bank Account</span>
                            <p className="text-sm font-black text-white uppercase tracking-wide">Meezan Bank</p>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            <div>
                              <span className="text-[9px] text-zinc-500 uppercase font-black block tracking-wider">Account Title</span>
                              <p className="text-sm font-bold text-zinc-200 tracking-wide">Abdul Basit</p>
                            </div>
                            <div>
                              <span className="text-[9px] text-zinc-500 uppercase font-black block tracking-wider">Account No</span>
                              <p className="text-sm font-mono font-bold text-cyan-400 tracking-wider">05160106365187</p>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-white/5">
                            <span className="text-[9px] text-zinc-500 uppercase font-black block tracking-wider mb-0.5">IBAN</span>
                            <div className="flex items-center justify-between bg-black/30 px-3 py-2 rounded-lg border border-white/5">
                              <p className="text-xs font-mono font-bold text-emerald-400 tracking-tight break-all select-all">
                                PK07MEZN0005160106365187
                              </p>
                              <button 
                                type="button"
                                onClick={() => handleCopy("PK07MEZN0005160106365187", 'meezan_iban')}
                                className="text-[10px] uppercase font-black text-zinc-400 hover:text-white px-2 py-1 bg-white/5 rounded transition-all shrink-0 ml-2"
                              >
                                {copiedText === 'meezan_iban' ? '✓ Copied' : 'Copy'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 📱 CARD 2: JAZZCASH WALLET */}
                      <div className="p-5 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-amber-500/20">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[9px] text-amber-500 font-bold uppercase tracking-wider">Mobile Wallet</span>
                            <p className="text-sm font-black text-white uppercase tracking-wide">JazzCash</p>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            <div>
                              <span className="text-[9px] text-zinc-500 uppercase font-black block tracking-wider">Account Title</span>
                              <p className="text-sm font-bold text-zinc-200 tracking-wide">Abdul Basit</p>
                            </div>
                            <div>
                              <span className="text-[9px] text-zinc-500 uppercase font-black block tracking-wider">Account No / Mobile</span>
                              <div className="flex items-center justify-between bg-black/30 px-2.5 py-1 rounded border border-white/5 mt-0.5">
                                <p className="text-sm font-mono font-bold text-amber-500 tracking-wider">03002777587</p>
                                <button 
                                  type="button"
                                  onClick={() => handleCopy("03002777587", 'jazz_no')}
                                  className="text-[9px] uppercase font-black text-zinc-400 hover:text-white px-1.5 py-0.5 bg-white/5 rounded transition-all ml-2"
                                >
                                  {copiedText === 'jazz_no' ? '✓' : 'Copy'}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 🟢 CARD 3: EASYPAISA WALLET */}
                      <div className="p-5 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-emerald-500/20">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-[9px] text-emerald-400 font-bold uppercase tracking-wider">Mobile Wallet</span>
                            <p className="text-sm font-black text-white uppercase tracking-wide">EasyPaisa</p>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            <div>
                              <span className="text-[9px] text-zinc-500 uppercase font-black block tracking-wider">Account Title</span>
                              <p className="text-sm font-bold text-zinc-200 tracking-wide">Abdul Basit</p>
                            </div>
                            <div>
                              <span className="text-[9px] text-zinc-500 uppercase font-black block tracking-wider">Account No / Mobile</span>
                              <div className="flex items-center justify-between bg-black/30 px-2.5 py-1 rounded border border-white/5 mt-0.5">
                                <p className="text-sm font-mono font-bold text-emerald-400 tracking-wider">03002777587</p>
                                <button 
                                  type="button"
                                  onClick={() => handleCopy("03002777587", 'easy_no')}
                                  className="text-[9px] uppercase font-black text-zinc-400 hover:text-white px-1.5 py-0.5 bg-white/5 rounded transition-all ml-2"
                                >
                                  {copiedText === 'easy_no' ? '✓' : 'Copy'}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* CARD 3: WHATSAPP ACTION CALL */}
                <div className="border border-white/10 bg-[#0d1527]/80 backdrop-blur-md shadow-[0_15px_40px_rgba(37,211,102,0.03)] rounded-2xl p-8 text-center flex flex-col justify-center items-center space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-green-400" />
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#25D366] block">Final Step Activation</span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">Unlock Your Batch</h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                      Aapka form portal ledger mein save ho chuka hai. Ab neeche diye gaye button par click karke admin ko WhatsApp par <strong className="text-[#00f2ff] font-bold">Fee Deposit Screenshot</strong> send karein taake aapka batch unlock kiya ja sake.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={sendWhatsAppReceipt}
                    className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm uppercase tracking-[1.5px] shadow-[0_10px_30px_rgba(37,211,102,0.2)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer active:scale-[0.99]"
                  >
                    <MessageCircle size={18} fill="white" />
                    Send Fee Screenshot via WhatsApp
                  </button>
                </div>

              </div>
            ) : (
              /* ACTIVE FORM COMPONENT */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 🏷️ REGISTRATION MAIN HEADING */}
                <div className="space-y-1 text-left border-l-[3px] border-[#00f2ff] pl-4 shadow-[inset_10px_0_10px_-10px_rgba(0,242,255,0.2)] mb-2">
                  <span className="text-[10px] font-black uppercase tracking-[2.5px] text-[#00f2ff] block">New Admission</span>
                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-black tracking-tight text-white uppercase leading-none">Student Enrollment</h2>
                </div>

                {/* 📚 COURSE SELECTION */}
                <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl space-y-2 focus-within:border-[#00f2ff]/50 focus-within:shadow-[0_0_20px_rgba(0,242,255,0.05)] transition-all duration-300 text-left">
                  <label className="text-[10px] font-black uppercase tracking-wider text-[#00f2ff] block">Select Desired Course</label>
                  <select
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-800 py-1.5 text-sm xl:text-base text-white font-bold focus:outline-none focus:border-[#00f2ff] transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[#0b0f19] text-zinc-400">-- SELECT YOUR PATH --</option>
                    <option value="wordpress-seo" className="bg-[#0b0f19] text-white">WordPress & SEO Mastery Track</option>
                  </select>
                </div>

                {/* 👥 TWO-COLUMN INPUT MATRIX */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Full Name</label>
                    <input type="text" required placeholder="Enter full name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                  </div>

                  {/* Father Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Father Name</label>
                    <input type="text" required placeholder="Enter father name" value={formData.fatherName} onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Email Address</label>
                    <input type="email" required placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Phone Number</label>
                    <input type="tel" required placeholder="03XXXXXXXXX" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">City</label>
                    <input type="text" required placeholder="e.g. Multan" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                  </div>

                  {/* Age */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Age (18-30)</label>
                    <input type="number" required min="18" max="30" placeholder="Your Age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                  </div>

                  {/* Gender */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Gender</label>
                    <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white font-bold focus:outline-none focus:border-[#00f2ff]/60 transition-all duration-300 cursor-pointer">
                      <option value="Male" className="bg-[#0b0f19]">Male</option>
                      <option value="Female" className="bg-[#0b0f19]">Female</option>
                    </select>
                  </div>

                  {/* 🎓 EDUCATION SELECTION FIELD */}
                  <div className="sm:col-span-2 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Education Level</label>
                      <select
                        required
                        value={formData.education === "Custom" || !["", "Matric / O-Level", "Intermediate / A-Level", "Undergraduate (Bachelors)", "Graduate (Masters)", "Other"].includes(formData.education) ? "Custom" : formData.education}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val === "Custom") {
                            setFormData({ ...formData, education: "" });
                          } else {
                            setFormData({ ...formData, education: val });
                          }
                        }}
                        className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white font-bold focus:outline-none focus:border-[#00f2ff]/60 transition-all duration-300 cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0b0f19] text-zinc-500">Select your education</option>
                        <option value="Matric / O-Level" className="bg-[#0b0f19]">Matric / O-Levels</option>
                        <option value="Intermediate / A-Level" className="bg-[#0b0f19]">Intermediate / A-Levels</option>
                        <option value="Undergraduate (Bachelors)" className="bg-[#0b0f19]">Undergraduate (Bachelors)</option>
                        <option value="Graduate (Masters)" className="bg-[#0b0f19]">Graduate (Masters)</option>
                        <option value="Other" className="bg-[#0b0f19]">Other / Diploma</option>
                        <option value="Custom" className="bg-[#0b0f19] text-[#00f2ff]">✨ Custom / Other Option</option>
                      </select>
                    </div>

                    {/* CUSTOM OTHER SPECIFICATION OPTION */}
                    {(formData.education === "" || !["Matric / O-Level", "Intermediate / A-Level", "Undergraduate (Bachelors)", "Graduate (Masters)", "Other"].includes(formData.education)) && (
                      <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                        <label className="text-[10px] font-black uppercase tracking-wider text-[#00f2ff] block">Specify Your Education / Qualification</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., DAE Mechanical, ACCA, M.Phil, etc."
                          value={formData.education}
                          onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                          className="w-full bg-zinc-900/30 border border-[#00f2ff]/40 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white focus:outline-none focus:border-[#00f2ff] focus:bg-zinc-900/50 transition-all duration-300"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* 🔐 PORTAL SECURITY PASSWORD */}
                <div className="space-y-1.5 relative text-left">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">
                    Portal Security Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Choose a strong password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full bg-zinc-900/30 border border-white/5 rounded-lg pl-4 pr-12 py-2.5 text-sm xl:text-base text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300 relative z-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#00f2ff] drop-shadow-[0_0_8px_rgba(0,242,255,0.4)] transition-all duration-300 focus:outline-none z-20 p-1"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12c2.5-4.5 6.5-6.5 10-6.5s7.5 2 10 6.5" className="stroke-2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.5l3.5-1.5-1 3.5" fill="currentColor" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12c2.5 4.5 6.5 5.5 10 5.5s7.5-1 10-5.5" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.5L3.5 4.5M7.5 4.8L6.5 2.5M10.5 4V1.5M13.5 4V1.5M16.5 4.8l1-2.3M19 6.5l1.5-2" />
                          <circle cx="12" cy="12" r="2.2" fill="currentColor" className="text-[#00f2ff]" />
                          <circle cx="13" cy="11" r="0.6" fill="white" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 11c4.5 4.5 13.5 4.5 18 0" strokeWidth="2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 11.5l3-2" className="stroke-2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l-1 2.5M8 14l-0.5 3M11 14.5v3M14 14.5v3M17 14l0.5 3M19.5 12.5l1 2.5" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* 🏠 RESIDENTIAL ADDRESS */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Residential Address</label>
                  <textarea rows={2} required placeholder="Enter home address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm xl:text-base text-white resize-none focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>

                {/* ☑️ TERMS CHECKBOX */}
                <label className="flex items-start gap-2.5 select-none cursor-pointer group text-left">
                  <input type="checkbox" checked={formData.agree} onChange={(e) => setFormData({ ...formData, agree: e.target.checked })} className="mt-1 accent-[#00f2ff]" />
                  <span className="text-[11px] font-bold uppercase text-zinc-400 group-hover:text-zinc-300 transition-colors">I confirm details are correct and agree to terms.</span>
                </label>

                {/* 🚀 SUBMIT ADMISSION */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative overflow-hidden w-full flex items-center justify-center font-black text-xs uppercase tracking-[2px] h-[52px] px-6 rounded-xl bg-white text-black border border-white/10 shadow-lg transition-all duration-500 ease-out active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                >
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#0070ff] to-[#00f2ff] transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative z-10 flex items-center gap-1.5 group-hover:text-black transition-colors duration-500 ease-out">
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={14} />
                        Processing...
                      </>
                    ) : (
                      <>
                        Confirm & Process Admission
                        <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}

          </div>
        </section>
      </main>
    </div>
  );
}
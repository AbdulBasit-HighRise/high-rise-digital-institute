"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, MessageCircle, ArrowRight } from "lucide-react";
import { supabase } from "@/src/components/lib/supabase";

export default function StudentEnrollmentForm() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    course: "",
    fullName: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    city: "",
    age: "",
    gender: "Male",
    education: "", // 🌟 Managed Inside State
    password: "",
    address: "",
    agree: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) return alert("Kindly accept the terms and conditions.");
    if (!formData.course) return alert("Please select your desired course path.");

    // 🛑 18 TO 30 AGE LIMIT VALIDATION
    const parsedAge = parseInt(formData.age);
    if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 30) {
      return alert("Age restriction limit: Only students between 18 to 30 years old are allowed to register.");
    }

    if (!formData.education) return alert("Please select your education level.");

    setLoading(true);

    try {
      // 1. Create User in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      const userUUID = authData?.user?.id;

      if (userUUID) {
        // 2. Insert into Profiles Table (Make sure 'education' column exists in Supabase!)
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

        // 3. Insert into Enrollments Table
        const { error: enrollError } = await supabase.from("enrollments").insert({
          student_id: userUUID,
          course_id: formData.course === "wordpress-seo" ? 1 : formData.course === "fullstack-dev" ? 2 : 3,
          progress: 0
        });

        if (enrollError) throw enrollError;

        // 4. Send Email Notification to info@highrisedigital.io (Background Trigger)
        try {
          await fetch("/api/send-enrollment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
        } catch (emailError) {
          // Email agar fail bhi ho jaye, to student ka form submit ho chuka hai, is liye block nahi karenge
          console.error("Background Email Notification Error:", emailError);
        }

        // 5. Success Matrix Activate
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
    <main className="min-h-screen bg-[#0b0f19] flex flex-col lg:flex-row font-sans pt-20 sm:pt-24 lg:pt-0 selection:bg-[#7bc143] selection:text-white relative overflow-hidden">

      {/* 🔵 LEFT SIDE: MARKETING BANNER */}
      <section className="w-full lg:w-[42%] bg-gradient-to-br from-[#030712] via-[#09152e] to-[#021b3a] text-white p-8 sm:p-12 lg:p-16 lg:pt-28 flex flex-col justify-between relative min-h-[750px] lg:min-h-screen border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#00f2ff]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="space-y-2 max-w-[260px] relative z-10 select-none">
          <div className="bg-zinc-950/70 backdrop-blur-xl text-white p-3 rounded-xl flex items-center justify-between gap-3 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#00f2ff]/30">

            {/* 🏷️ LIVE STATUS BADGE */}
            <div className="relative flex items-center gap-1.5 bg-gradient-to-r from-[#00f2ff]/10 to-[#0070ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] font-black px-2.5 py-1 rounded-md text-[9px] tracking-wider uppercase shadow-[inset_0_0_10px_rgba(0,242,255,0.1)]">
              {/* Tiny Animated Radar Dot */}
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00f2ff]"></span>
              </span>
              LMS Live
            </div>

            {/* 📝 BRAND DETAILS */}
            <div className="text-right space-y-0.5">
              <div className="text-[10px] uppercase font-black tracking-[1.5px] leading-none text-white">
                HRD SKILLS
              </div>
              <div className="text-[9px] font-black tracking-wider text-zinc-400 uppercase">
                Admissions <span className="text-[#00f2ff] font-mono">2026</span>
              </div>
            </div>

          </div>
        </div>

        <div className="my-auto py-10 lg:py-6 space-y-8 max-w-xl relative z-10">
          <div className="space-y-4">
            <div className="w-16 h-[4px] bg-[#00f2ff] rounded-full shadow-[0_0_15px_rgba(0,242,255,0.6)]" />
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tighter uppercase leading-[1.02] text-white">
              LMS REGISTRATION <br />
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#00a2ff] to-[#3b82f6] bg-clip-text text-transparent drop-shadow-sm">
                START LEARNING
              </span> <br /> 📚💡
            </h1>
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-zinc-400 max-w-md border-l-2 border-[#00f2ff] pl-4">
              Create your secure industrial account to access top-tier frameworks, monitor milestones, and lock elite freelancing career paths.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* ⚡ PRO TECH FEATURES CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Card 1: Live Projects */}
              <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-4 rounded-xl space-y-1.5 hover:border-[#00f2ff]/40 hover:shadow-[0_0_25px_rgba(0,242,255,0.08)] transition-all duration-300 group cursor-pointer">
                <span className="text-xl block filter drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">🎯</span>
                <h4 className="text-[11px] font-black text-white uppercase tracking-wider group-hover:text-[#00f2ff] transition-colors">
                  Live Projects
                </h4>
                <p className="text-[10px] text-zinc-400 font-bold leading-normal">
                  Build real websites step-by-step and learn how to launch them live on the internet.
                </p>
              </div>

              {/* Card 2: Earning Path */}
              <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-4 rounded-xl space-y-1.5 hover:border-[#00f2ff]/40 hover:shadow-[0_0_25px_rgba(0,242,255,0.08)] transition-all duration-300 group cursor-pointer">
                <span className="text-xl block filter drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">💰</span>
                <h4 className="text-[11px] font-black text-white uppercase tracking-wider group-hover:text-[#00f2ff] transition-colors">
                  Earning Roadmap
                </h4>
                <p className="text-[10px] text-zinc-400 font-bold leading-normal">
                  Learn the right way to get real orders on Fiverr, Upwork, and find direct clients.
                </p>
              </div>

              {/* Card 3: 1-1 Support */}
              <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-4 rounded-xl space-y-1.5 hover:border-[#00f2ff]/40 hover:shadow-[0_0_25px_rgba(0,242,255,0.08)] transition-all duration-300 group cursor-pointer">
                <span className="text-xl block filter drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">🔥</span>
                <h4 className="text-[11px] font-black text-white uppercase tracking-wider group-hover:text-[#00f2ff] transition-colors">
                  1-1 Expert Help
                </h4>
                <p className="text-[10px] text-zinc-400 font-bold leading-normal">
                  Get stuck anywhere while working? Get direct help from experts to solve your problems.
                </p>
              </div>
            </div>

            {/* 📍 PREMIUM LOCATION FOOTER */}
            <div className="flex items-start gap-3 bg-zinc-900/20 backdrop-blur-sm border border-white/5 p-4 rounded-xl w-full sm:max-w-md transition-all duration-300 hover:border-zinc-800">
              <div className="w-9 h-9 rounded-lg bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff] shrink-0 border border-[#00f2ff]/20 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                📍
              </div>
              <div className="space-y-0.5">
                <h5 className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">Location </h5>
                <p className="text-xs font-black text-white uppercase tracking-wide leading-tight">
                  HRD Institute, Multan, Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-10 w-full sm:w-auto justify-center sm:justify-start">
          <div className="flex items-center gap-4 text-left bg-transparent p-0">
            <div className="flex -space-x-3.5 items-center isolation-auto">
              {[
                "https://images.unsplash.com/photo-1669804227127-0876cb0f5474?w=500&auto=format&fit=crop&q=60",
                "https://plus.unsplash.com/premium_photo-1682096108814-b53765f48ba5?w=700&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1647151481397-95e581943ac1?w=700&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1599842057874-37393e9342df?w=700&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1711374316403-2bfa31ae9c2a?w=700&auto=format&fit=crop&q=60"
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 rounded-full border-2 border-[#111827] ring-1 ring-emerald-500/40 overflow-hidden bg-zinc-900 shrink-0 transform hover:scale-110 hover:z-10 transition-all duration-300"
                >
                  <img
                    src={src}
                    alt={`Student ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable="false"
                  />
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
      </section>

      {/* ⚪ RIGHT SIDE: FORM / SUCCESS MATRIX */}
      <section className="w-full lg:w-[58%] bg-[#0b0f19] p-6 sm:p-12 lg:p-16 lg:pt-28 flex items-center relative border-t lg:border-t-0 border-white/5">
        <div className="w-full max-w-2xl mx-auto relative z-10">

          {submitted ? (
            // 🌟 PREMIUM VERTICAL COLUMN CARDS LAYOUT
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

              {/* CARD 2: OFFICIAL PAYMENT ACCOUNTS (Sir Abdul Basit Details) */}
              <div className="border border-white/10 bg-[#0b0f19]/90 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.4)] rounded-2xl p-8 flex flex-col space-y-4 relative overflow-hidden text-left">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500" />

                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 block mb-1">Official Fee Accounts</span>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide italic">Payment Details</h3>

                  {/* Account Rows Stretched Cleanly */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* 🏦 CARD 1: MEEZAN BANK DETAILS */}
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col justify-between space-y-2">
                      <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Bank Account</p>
                        <p className="text-xs font-black text-blue-400 uppercase tracking-wide">Meezan Bank</p>
                      </div>

                      <div className="space-y-1">
                        <div>
                          <span className="text-[9px] text-zinc-500 uppercase font-bold block">Title</span>
                          <p className="text-sm font-black text-white tracking-wide">Abdul Basit</p>
                        </div>
                        <div>
                          <span className="text-[9px] text-zinc-500 uppercase font-bold block">Account No</span>
                          <p className="text-sm font-mono font-bold text-cyan-400 tracking-wider">05160106365187</p>
                        </div>
                        <div>
                          <span className="text-[9px] text-zinc-500 uppercase font-bold block">IBAN</span>
                          <p className="text-[10px] font-mono font-bold text-emerald-400 tracking-tight select-all">
                            PK07MEZN0005160106365187
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 📱 CARD 2: JAZZCASH WALLET */}
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col justify-between space-y-3">
                      <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Mobile Wallet</p>
                        <p className="text-xs font-black text-amber-500 uppercase tracking-wide">JazzCash</p>
                      </div>

                      <div className="space-y-1">
                        <div>
                          <span className="text-[9px] text-zinc-500 uppercase font-bold block">Account Title</span>
                          <p className="text-sm font-black text-white tracking-wide">Abdul Basit</p>
                        </div>
                        <div>
                          <span className="text-[9px] text-zinc-500 uppercase font-bold block">Account No</span>
                          <p className="text-sm font-mono font-bold text-amber-500 tracking-wider select-all">03002777587</p>
                        </div>
                      </div>
                    </div>

                    {/* 🟢 CARD 3: EASYPAISA WALLET */}
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col justify-between space-y-3">
                      <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Mobile Wallet</p>
                        <p className="text-xs font-black text-emerald-500 uppercase tracking-wide">EasyPaisa</p>
                      </div>

                      <div className="space-y-1">
                        <div>
                          <span className="text-[9px] text-zinc-500 uppercase font-bold block">Account Title</span>
                          <p className="text-sm font-black text-white tracking-wide">Abdul Basit</p>
                        </div>
                        <div>
                          <span className="text-[9px] text-zinc-500 uppercase font-bold block">Account No</span>
                          <p className="text-sm font-mono font-bold text-emerald-400 tracking-wider select-all">03002777587</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* CARD 3: WHATSAPP ACTION CALL SUBMISSION */}
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 🏷️ SECTION HEADER */}
              <div className="space-y-1 text-left border-l-[3px] border-[#00f2ff] pl-4 shadow-[inset_10px_0_10px_-10px_rgba(0,242,255,0.2)]">
                <span className="text-[10px] font-black uppercase tracking-[2.5px] text-[#00f2ff] block">New Admission</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase leading-none">Student Enrollment</h2>
              </div>

              {/* 📚 COURSE SELECTION */}
              <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl space-y-2 focus-within:border-[#00f2ff]/50 focus-within:shadow-[0_0_20px_rgba(0,242,255,0.05)] transition-all duration-300">
                <label className="text-[10px] font-black uppercase tracking-wider text-[#00f2ff] block">Select Desired Course</label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-800 py-1.5 text-sm text-white font-bold focus:outline-none focus:border-[#00f2ff] transition-colors cursor-pointer"
                >
                  <option value="" className="bg-[#0b0f19] text-zinc-400">-- SELECT YOUR PATH --</option>
                  <option value="wordpress-seo" className="bg-[#0b0f19] text-white">WordPress & SEO Mastery Track</option>
                </select>
              </div>

              {/* 👥 TWO-COLUMN BALANCED GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Full Name</label>
                  <input type="text" required placeholder="Enter full name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>

                {/* Father Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Father Name</label>
                  <input type="text" required placeholder="Enter father name" value={formData.fatherName} onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Email Address</label>
                  <input type="email" required placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Phone Number</label>
                  <input type="tel" required placeholder="03XXXXXXXXX" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">City</label>
                  <input type="text" required placeholder="e.g. Multan" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>

                {/* Age */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Age (18-30)</label>
                  <input type="number" required min="18" max="30" placeholder="Your Age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Gender</label>
                  <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white font-bold focus:outline-none focus:border-[#00f2ff]/60 transition-all duration-300 cursor-pointer">
                    <option value="Male" className="bg-[#0b0f19]">Male</option>
                    <option value="Female" className="bg-[#0b0f19]">Female</option>
                  </select>
                </div>

                {/* 🎓 EDUCATION LEVEL SECTION (Stretched Full Width for Visual Balance) */}
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
                      className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white font-bold focus:outline-none focus:border-[#00f2ff]/60 transition-all duration-300 cursor-pointer"
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

                  {/* 📝 CONDITIONAL CUSTOM INPUT */}
                  {(formData.education === "" || !["Matric / O-Level", "Intermediate / A-Level", "Undergraduate (Bachelors)", "Graduate (Masters)", "Other"].includes(formData.education)) && (
                    <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                      <label className="text-[10px] font-black uppercase tracking-wider text-[#00f2ff] block">Specify Your Education / Qualification</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., DAE Mechanical, ACCA, M.Phil, etc."
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        className="w-full bg-zinc-900/30 border border-[#00f2ff]/40 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff] focus:bg-zinc-900/50 transition-all duration-300"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* 🔐 PASSWORD BLOCK */}
              <div className="space-y-1.5 relative">
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
                    className="w-full bg-zinc-900/30 border border-white/5 rounded-lg pl-4 pr-12 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300 relative z-10"
                  />

                  {/* Luxury Eyelash Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#00f2ff] drop-shadow-[0_0_8px_rgba(0,242,255,0.4)] transition-all duration-300 focus:outline-none z-20 p-1"
                    title={showPassword ? "Hide Password" : "Show Password"}
                  >
                    {showPassword ? (
                      /* ✨ OPEN EYE: DENSE VOLUMIZED LASHES & WINGED EYELINER */
                      <svg className="w-5 h-5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        {/* Upper Winged Eyeliner Arc */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12c2.5-4.5 6.5-6.5 10-6.5s7.5 2 10 6.5" className="stroke-2" />
                        {/* Sharp Eyeliner Wing Tail */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.5l3.5-1.5-1 3.5" fill="currentColor" />
                        {/* Lower Sleek Eye Contour */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12c2.5 4.5 6.5 5.5 10 5.5s7.5-1 10-5.5" />

                        {/* Luxury Dense Lashes */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.5L3.5 4.5M7.5 4.8L6.5 2.5M10.5 4V1.5M13.5 4V1.5M16.5 4.8l1-2.3M19 6.5l1.5-2" />

                        {/* Glowing Lens / Pupil */}
                        <circle cx="12" cy="12" r="2.2" fill="currentColor" className="text-[#00f2ff]" />
                        <circle cx="13" cy="11" r="0.6" fill="white" />
                      </svg>
                    ) : (
                      /* ✨ FIXED CLOSED EYE: BEAUTIFUL SYMMETRIC CURVED LASHES */
                      <svg className="w-5 h-5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        {/* Perfect Smooth Closed Eye Base Arc */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11c4.5 4.5 13.5 4.5 18 0" strokeWidth="2" />

                        {/* Sharp Elegant Wing Tail on End */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 11.5l3-2" className="stroke-2" />

                        {/* Perfectly Spaced & Styled Makeup Eyelashes */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l-1 2.5M8 14l-0.5 3M11 14.5v3M14 14.5v3M17 14l0.5 3M19.5 12.5l1 2.5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* 🏠 ADDRESS BLOCK */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Residential Address</label>
                <textarea rows={2} required placeholder="Enter home address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white resize-none focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
              </div>

              {/* ☑️ TERMS AND CONDITIONS */}
              <label className="flex items-start gap-2.5 select-none cursor-pointer group">
                <input type="checkbox" checked={formData.agree} onChange={(e) => setFormData({ ...formData, agree: e.target.checked })} className="mt-1 accent-[#00f2ff]" />
                <span className="text-[11px] font-bold uppercase text-zinc-400 group-hover:text-zinc-300 transition-colors">I confirm details are correct and agree to terms.</span>
              </label>

              {/* 🚀 SUBMIT BUTTON */}
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
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
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
  );
}
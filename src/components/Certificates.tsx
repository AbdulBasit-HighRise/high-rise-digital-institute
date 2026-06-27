"use client";
import React from "react";

export default function CertificatesSection() {
  // Aapne jo 4 images design ki hain, unka path yahan 'imgSrc' mein daal dein
  const certificates = [
    { name: "Fizza Habib", title: "Full Stack Web Development", imgSrc: "/c1.jpg" },
    { name: "Aniba Irfan", title: "AI Automation Specialist", imgSrc: "/c2.jpg" },
    { name: "Asad Ali Lakho", title: "Full Stack Web Development", imgSrc: "/c3.jpg" },
    { name: "Faraz Ahmed", title: "Custom WordPress Development", imgSrc: "/c4.jpg" },
  ];

  return (
    /* 🌌 MASTER DARK THEME CONTAINER MATCHING SITE BRANDING */
    <section className="relative w-full bg-[#0B0F19] overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50">
      
      <div className="max-w-[85rem] 2xl:max-w-[94rem] mx-auto w-full space-y-12">

        {/* 🏷️ MASTER HEADER WITH LUXURY SITE GRADIENTS */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white ">
            Verified {" "}
            <span className="inline-block bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] text-transparent bg-clip-text py-1">
              Student Certificates
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
        </div>

        {/* 📜 COMPACT 4-IN-A-ROW DESIGNED CERTIFICATES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-[#131926] border border-white/5 rounded-2xl p-3 shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between w-full hover:-translate-y-1"
            >
              {/* 🖼️ CERTIFICATE IMAGE CONTAINER */}
              <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3] bg-zinc-950/40 border border-white/5">
                <img
                  src={cert.imgSrc}
                  alt={`${cert.name} - ${cert.title}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* 📝 METADATA UNDER IMAGE */}
         

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
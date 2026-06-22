"use client";
import { Star, ThumbsUp, MessageSquare, Share2, MoreHorizontal, MapPin } from "lucide-react";

export default function StudentFeedback() {
  // Exact high-fidelity feedback data with location additions
  const feedbacks = [
    {
      name: "Amna Bibi",
      location: "Multan, PK",
      date: "October 22, 2025",
      text: "Sir aap ne humein sirf parhaya nahi, balke har student ko individually guide kiya aur hamesha motivate bhi kiya.Thank you so much for all your efforts, support, and patience with us.May Allah bless you with endless happiness, health, and success. Ameen",
      avatar: "https://images.unsplash.com/photo-1723831005305-7046e0e9d34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBha2lzdGFuaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "M Rizwan",
      location: "Lahore, PK",
      date: "November 10, 2025",
      text: "Alhamdoullaha order complete 💯✅ Market best price available Tat instant Sir first order complete on email AP ke dawo ka sadhka ha Both both Mubarak ho sir g",
      avatar: "https://images.unsplash.com/photo-1723051948247-01e16b6a1481?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFraXN0YW5pJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Zeeshan Ali",
      location: "Faisalabad, PK",
      date: "November 28, 2025",
      text: "Honestly, pure practical work hai.Baqi institutes ki tarah sirf definitions nahi ratwaty yahan. High Rise Digital me pehle din se live websites par kaam karwate hain. Mera Technical SEO ka darr bilkul khanat ho gya hai. Best SEO course in Pakistan hands down.",
      avatar: "https://images.unsplash.com/photo-1669804227127-0876cb0f5474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Sana Nawaz",
      location: "Karachi, PK",
      date: "December 04, 2025",
      text: "Best decision for my freelancing career Fiverr pe kafi time se orders nahi aa rahe thay. Course ke dauran sir ne jo client acquisition ki strategies batayein, us se LinkedIn ke zariye direct UK ka client mila hai. High Rise Digital team ka support kamaal hai.",
      avatar: "https://plus.unsplash.com/premium_photo-1682096108814-b53765f48ba5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBha2lzdGFuaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Hamza Shah",
      location: "Rawalpindi, PK",
      date: "October 18, 2025",
      text: "No boring PPT slides, strictly live projects!.Mujhe sab se achi baat ye lagi k yahan koi ratta system nahi hai. Hum ne khud live keyword research ki, content silos banaye, aur errors fix kiye. Agar koi sach me professional skill seekhna chahta hai to zaroor join kare.",
      avatar: "https://images.unsplash.com/photo-1647151481397-95e581943ac1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFraXN0YW5pJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Kiran Fatima",
      location: "Islamabad, PK",
      date: "September 15, 2025",
      text: "Alhamdulillah, highly recommended! Mera background IT ka nahi tha to mujhe lagta tha Technical SEO bohot mushkil hoga. Par High Rise Digital ke mentors itne cooperative hain k har step basic se samjhaya. Laptop par live practice karne ka bohot faida hua",
      avatar: "https://images.unsplash.com/photo-1599842057874-37393e9342df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBha2lzdGFuaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Arsalan Khan",
      location: "Peshawar, PK",
      date: "September 15, 2025",
      text: "Worth every single rupee.Market me log basic cheezon ke itne paise charge kar rahe hain. High Rise Digital me advanced core web vitals aur speed optimization bhi live seekhne ko mili. Verification portal wala system bhi bohot professional hai.",
      avatar: "https://images.unsplash.com/photo-1711374316403-2bfa31ae9c2a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D"
    },
  ];

  return (
 <section id="feedback" className="relative w-full bg-[#111827] overflow-hidden py-16 md:py-24 2xl:py-32 px-4 sm:px-6 border-t border-white/5">

  {/* 🏷️ HEADER SECTION */}
  <div className="text-center space-y-2 pb-12">
    <p className="text-[10px] md:text-xs font-black text-[#10B981] uppercase tracking-[3px] font-mono">
      What Our Students Say About Us
    </p>
    <h2 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-[1.2] md:leading-none tracking-tighter text-white font-sans">
      Students' {" "}
      <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text py-1 inline-block">Feedback</span>
    </h2>
    <div className="w-16 h-[3px] bg-[#FFC71E] mx-auto mt-3 rounded-full" />
  </div>

  {/* 🔄 INFINITE ROW SCROLLER CONTAINER */}
  {/* Controls hover and active touch states to pause the animation and allow native touch scrolling */}
  <div className="relative w-full overflow-x-auto select-none scrollbar-none py-4 group active:[animation-play-state:paused] touch-pan-x">
    
    {/* Dynamic Infinite Track Loop */}
    <div className="flex gap-4 animate-marquee whitespace-nowrap min-w-full will-change-transform group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]">
      {[...feedbacks, ...feedbacks].map((card, idx) => (
        <div
          key={idx}
          className="inline-block w-[210px] sm:w-[360px] bg-[#0c0c0e] border border-white/5 rounded-xl p-4 shadow-none sm:shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-normal flex-shrink-0 transition-all duration-300"
        >
          {/* Card Meta Header Layer */}
          <div className="flex items-start justify-between gap-3 w-full">
            <div className="flex items-center gap-2.5">
              <img
                src={card.avatar}
                alt={card.name}
                className="w-9 h-9 rounded-full object-cover border border-white/10"
              />
              <div className="leading-tight">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="text-[11px] sm:text-[12px] font-bold text-zinc-200 tracking-tight">
                    {card.name}
                  </h4>
                  {/* 📍 Location Badge */}
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-zinc-800 text-[8px] sm:text-[9px] text-[#10B981] font-bold tracking-tight">
                    <MapPin size={8} className="stroke-[2.5]" />
                    {card.location}
                  </span>
                </div>
                <p className="text-[9px] text-zinc-500 font-medium mt-0.5">{card.date}</p>
              </div>
            </div>
            <MoreHorizontal size={14} className="text-zinc-600 cursor-pointer hover:text-zinc-400" />
          </div>

          {/* Stars Badge Block */}
          <div className="flex items-center gap-0.5 pt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="fill-[#FFC71E] text-[#FFC71E]" />
            ))}
          </div>

          {/* Feed Text content */}
          <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed pt-2.5 border-b border-white/[0.03] pb-3 min-h-[130px] sm:min-h-[90px]">
            "{card.text}"
          </p>

          {/* Interactive Toolbar Footer Layers */}
          <div className="flex items-center justify-between text-zinc-600 text-[9px] sm:text-[10px] font-bold pt-2.5 px-0.5">
            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              <ThumbsUp size={11} /> Like
            </button>
            <button className="flex items-center gap-1 hover:text-emerald-500 transition-colors">
              <MessageSquare size={11} /> Comment
            </button>
            <button className="flex items-center gap-1 hover:text-purple-500 transition-colors">
              <Share2 size={11} /> Share
            </button>
          </div>

        </div>
      ))}
    </div>
  </div>

  {/* Global CSS Styles */}
  <style jsx global>{`
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    /* Hide scrollbar utility for chrome/safari/firefox */
    .scrollbar-none::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-none {
      -ms-overflow-style: none;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }
  `}</style>

</section>
  );
}
"use client";

import {
  UserRound,
  MessageCircleMore,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useState, useRef } from "react";

const SpantraModels = [
  {
    title: "Process Model",
    description:
      "A clear, step-by-step workflow with defined SOPs and a Maker-Checker system for smooth task movement.",
    icon: <UserRound size={20} className="text-slate-600" />,
  },
  {
    title: "Accuracy Model",
    description:
      "We follow a strict process to maintain 99%+ accuracy through double verification and real-time checks.",
    icon: <ShieldCheck size={20} className="text-slate-600" />,
  },
  {
    title: "Scalability Model",
    description:
      "Increase team size quickly whenever your work volume increases with our flexible expansion options.",
    icon: <TrendingUp size={20} className="text-slate-600" />,
  },
  {
    title: "Confidentiality Model",
    description:
      "Data protection at every stage with authorized access and secure, encrypted handling systems.",
    icon: <MessageCircleMore size={20} className="text-slate-600" />,
  },
];

const SecondPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    // Find the item width and calculate the current index based on scroll position
    if (container.children.length > 0) {
      const firstChild = container.children[0] as HTMLElement;
      // gap-6 is 24px
      const itemWidth = firstChild.offsetWidth + 24;

      const newIndex = Math.round(container.scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), SpantraModels.length - 1));
    }
  };

  return (
    <section className="flex-1 bg-[#F3F4EF] py-24 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#084127] opacity-88 tracking-tighter">
            We strongly believe in providing <br className="hidden md:block" />
            perfect service to our customers.
          </h2>
        </div> */}

        {/* The Grid: 1 column on mobile, 2 on tablets, 3 on large screens */}
        {/* This prevents the "collapsing" issue by defining strict tracks */}

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-12 md:gap-y-16 pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {SpantraModels.map((model, index) => (
            <div
              key={index}
              className="flex flex-col items-start group min-w-[85vw] sm:min-w-[320px] md:min-w-0 shrink-0 snap-start"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                {model.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mt-5 text-[#084127] tracking-tight">
                {model.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed text-lg max-w-sm">
                {model.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dots Indicator for Mobile */}
        <div className="flex justify-center items-center mt-2 gap-2 md:hidden">
          {SpantraModels.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-[#084127]" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondPage;

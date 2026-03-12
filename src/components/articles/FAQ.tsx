"use client";

import { useState } from "react";
import { Plus, Minus, Sparkles, CornerRightDown } from "lucide-react";
import Button from "../common/button";

const faqs = [
  {
    question: "What is Spantra's 'Maker-Checker' system?",
    answer:
      "Our Maker-Checker system is a strict double-verification process. One team member performs the task (Maker) and a second expert verifies it (Checker). This ensures we maintain our industry-leading 99%+ accuracy rate.",
  },
  {
    question: "How do you handle data security and confidentiality?",
    answer:
      "Data protection is our priority. We follow a strict Confidentiality Model that includes authorized-only access, secure handling systems, and encrypted file sharing to ensure your business data remains private at every stage.",
  },
  {
    question: "Which industries do you support with your back-office services?",
    answer:
      "We support a wide range of industries including Banking & NBFCs, FinTech, E-commerce, Healthcare, Logistics, Real Estate, Education, and SMEs/Startups.",
  },
  {
    question: "Can Spantra scale its team according to our project volume?",
    answer:
      "Yes. Our Scalability Model allows us to increase team size quickly whenever your work volume increases. We provide trained operators and dedicated project managers to handle high-volume data entry and operations seamlessly.",
  },
  {
    question: "What kind of reporting can I expect as a client?",
    answer:
      "We believe in complete transparency. You will receive detailed daily, weekly, and monthly reports, including productivity metrics, accuracy scores, and turnaround-time (TAT) tracking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h2 className="text-[#0d3b2e] text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-8">
            Questions & <br />
            Answers
          </h2>

          <p className="flex flex-col text-gray-500 text-lg mb-8">
            Don&apos;t find the answer? We can help <br />
            Scroll Down to Contact Us
          </p>
          {/* <CornerRightDown className="w-8 h-8 text-amber-700" /> */}
          <div className="mt-16 text-[#295c4d] flex gap-12">
            <Sparkles className="w-8 h-8" />
            <CornerRightDown color="#295c4d" className="w-8 h-8" />
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="lg:col-span-7 flex flex-col pt-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0 py-6 first:pt-0"
              >
                <button
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[22px] font-medium pr-8 ${isOpen ? "text-[#0d3b2e]" : "text-[#333333]"}`}
                  >
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-gray-400">
                    {isOpen ? (
                      <Minus
                        className="w-6 h-6 text-gray-500"
                        strokeWidth={1.5}
                      />
                    ) : (
                      <Plus
                        className="w-6 h-6 text-gray-500"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-500 text-[15px] leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import {
  Landmark,
  Shield,
  CreditCard,
  ShoppingCart,
  HeartPulse,
  Truck,
  Building,
  GraduationCap,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const Industries = () => {
  const [activeTab, setActiveTab] = useState(0);

  const industriesList = [
    {
      tabIcon: <Landmark className="w-5 h-5" />,
      icon: <Landmark className="w-6 h-6" />,
      title: "Banking & NBFCs",
      tabTitle: "Banking",
      desc: "Secure and compliant data operations for the banking sector. We support Non-Banking Financial Companies with accurate document processing and data management.",
      images: [
        "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <Shield className="w-5 h-5" />,
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance",
      tabTitle: "Insurance",
      desc: "Streamline claims processing, policy management, and customer data verification with our reliable data entry and validation services.",
      images: [
        "https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg",
        "https://images.pexels.com/photos/10341357/pexels-photo-10341357.jpeg",
      ],
    },
    {
      tabIcon: <CreditCard className="w-5 h-5" />,
      icon: <CreditCard className="w-6 h-6" />,
      title: "FinTech",
      tabTitle: "FinTech",
      desc: "Accelerate your financial technology solutions with robust back-office support, KYC validation, and seamless data formatting.",
      images: [
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <ShoppingCart className="w-5 h-5" />,
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce",
      tabTitle: "E-commerce",
      desc: "Enhance your online store with structured product data, catalog indexing, and customer relationship management updates.",
      images: [
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <HeartPulse className="w-5 h-5" />,
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Healthcare",
      tabTitle: "Healthcare",
      desc: "Streamlined processes and accuracy for medical data operations. We ensure compliance and efficiency for patient records and billing.",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      ],
    },
    {
      tabIcon: <Truck className="w-5 h-5" />,
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics",
      tabTitle: "Logistics",
      desc: "Keep your supply chain moving with accurate data entry for shipping manifests, inventory tracking, and invoice processing.",
      images: [
        "https://images.pexels.com/photos/5025636/pexels-photo-5025636.jpeg",
        "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg",
      ],
    },
    {
      tabIcon: <Building className="w-5 h-5" />,
      icon: <Building className="w-6 h-6" />,
      title: "Real Estate",
      tabTitle: "Real Estate",
      desc: "Property data insights and streamlined support. Handle vast amounts of listings, imagery, and client interactions with reliable efficiency.",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <GraduationCap className="w-5 h-5" />,
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      tabTitle: "Education",
      desc: "Support educational institutions with student record digitization, test score formatting, and administrative back-office tasks.",
      images: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <Rocket className="w-5 h-5" />,
      icon: <Rocket className="w-6 h-6" />,
      title: "SMEs & Startups",
      tabTitle: "SMEs & Startups",
      desc: "Cost-effective and scalable data solutions tailored for small to medium enterprises and rapid-growth startups seeking operational leverage.",
      images: [
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ];

  const activeData = industriesList[activeTab];

  return (
    <div className="w-full flex-1 bg-[#fafafa] py-10 px-4 md:px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-900 max-w-2xl leading-tight">
        Industries we empower
      </h2>

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full md:mr-10">
        {/* Tabs Row */}
        <div className="flex w-full border-b border-gray-200 overflow-x-auto no-scrollbar">
          {industriesList.map((ind, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative flex-1 shrink-0 flex items-center justify-center gap-2 py-4 px-4 min-w-[150px] text-sm font-semibold transition-colors border-r border-gray-200 last:border-r-0 ${
                  isActive
                    ? "bg-gray-50/80 text-gray-900"
                    : "bg-white text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {ind.tabIcon}
                <span>{ind.tabTitle}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#d9e31f]"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-8 p-6 md:p-10 flex-1">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-3 h-48 sm:h-64">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <Image
                src={activeData.images[0]}
                alt={`${activeData.tabTitle} 1`}
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <Image
                src={activeData.images[1]}
                alt={`${activeData.tabTitle} 2`}
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text block */}
          <div className="flex flex-col items-start flex-1 justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-800 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100">
              {activeData.icon}
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 tracking-tight">
              {activeData.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {activeData.desc}
            </p>

            <button className="mt-auto flex items-center gap-3 bg-[#d9e31f] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#c4bd0f] transition-colors group">
              Discover More
              <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;

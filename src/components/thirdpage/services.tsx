"use client";
import React, { useState } from "react";
import {
  Keyboard,
  Database,
  FolderSearch,
  UserCheck,
  Copy,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const servicesList = [
    {
      tabIcon: <Keyboard className="w-5 h-5" />,
      icon: <Keyboard className="w-6 h-6" />,
      title: "Data Entry Services",
      tabTitle: "Data Entry",
      desc: "Comprehensive data entry solutions including forms, invoices, KYC, and MIS. Ensure high accuracy and fast turnaround for your critical business data.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <Database className="w-5 h-5" />,
      icon: <Database className="w-6 h-6" />,
      title: "Data Cleaning & Formatting",
      tabTitle: "Data Cleaning",
      desc: "Accurately clean, label, and structure your datasets. We remove duplicates and correct errors to provide reliable and formatted data.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <FolderSearch className="w-5 h-5" />,
      icon: <FolderSearch className="w-6 h-6" />,
      title: "Document Indexing",
      tabTitle: "Document Indexing",
      desc: "Efficiently classify and index your documents for quick retrieval. Streamline your record management with our structured indexing solutions.",
      images: [
        "https://images.pexels.com/photos/6550172/pexels-photo-6550172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6549375/pexels-photo-6549375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      tabIcon: <UserCheck className="w-5 h-5" />,
      icon: <UserCheck className="w-6 h-6" />,
      title: "Lead Validation",
      tabTitle: "Lead Validation",
      desc: "Verify and validate your sales leads to ensure high conversion rates. We check contact details, company information, and intent markers.",
      images: [
        "https://images.pexels.com/photos/7447263/pexels-photo-7447263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <Copy className="w-5 h-5" />,
      icon: <Copy className="w-6 h-6" />,
      title: "Copy-Paste Tasks",
      tabTitle: "Copy-Paste",
      desc: "Reliable and accurate automated or manual copy-paste operations to migrate or format information across systems and platforms.",
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <Users className="w-5 h-5" />,
      icon: <Users className="w-6 h-6" />,
      title: "CRM Updates",
      tabTitle: "CRM Updates",
      desc: "Keep your Customer Relationship Management systems up-to-date with the latest client interactions, contact details, and progress notes.",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      tabIcon: <Briefcase className="w-5 h-5" />,
      icon: <Briefcase className="w-6 h-6" />,
      title: "Back-Office Operations",
      tabTitle: "Back-Office",
      desc: "Reliable and compliant administrative support available 24/7. Focus on your core business while we handle the secure execution of your operations.",
      images: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
      ],
    },
  ];

  const activeData = servicesList[activeTab];

  return (
    <div className="w-full flex-1 bg-[#fafafa] py-10 px-4 md:px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-900 max-w-2xl leading-tight">
        The modern platform for our services
      </h2>

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full ml-10">
        {/* Tabs Row */}
        <div className="flex w-full border-b border-gray-200 overflow-x-auto no-scrollbar">
          {servicesList.map((svc, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative flex-1 shrink-0 flex items-center justify-center gap-2 py-4 px-4 min-w-[160px] text-sm font-semibold transition-colors border-r border-gray-200 last:border-r-0 ${
                  isActive
                    ? "bg-gray-50/80 text-gray-900"
                    : "bg-white text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {svc.tabIcon}
                <span>{svc.tabTitle}</span>
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
              <img
                src={activeData.images[0]}
                alt={`${activeData.tabTitle} 1`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src={activeData.images[1]}
                alt={`${activeData.tabTitle} 2`}
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
              Book a Free Call
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

export default Services;

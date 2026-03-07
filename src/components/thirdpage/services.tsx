import { Database, LineChart, ShieldCheck, Headphones } from "lucide-react";

const Services = () => {
  const servicesList = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Annotation & Cleaning",
      desc: "Accurately label and structure your datasets for peak AI performance.",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Business Analytics",
      desc: "Transform raw numbers into actionable growth strategies.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Back-Office",
      desc: "Reliable and compliant administrative support available 24/7.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Customer Success",
      desc: "Dedicated multichannel support to elevate your brand experience.",
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-[#F3F4EF] text-black py-20 px-6 md:px-16 lg:py-32 border-b lg:border-b-0 lg:border-r border-gray-200/60 relative overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D9E31F]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-xl mx-auto md:max-w-xl w-full relative z-10 flex flex-col justify-center h-full">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#084127] leading-tight tracking-tight mb-4">
          Services We Offer
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
          Your success is our mission. As business advisors, we offer expert
          guidance, unlocking your potential for growth and profitability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {servicesList.map((svc, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/80 hover:shadow-[0_8px_20px_rgba(8,65,39,0.08)] hover:border-[#D9E31F] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full text-slate-500 bg-gray-50 group-hover:bg-[#084127] group-hover:text-[#D9E31F] flex items-center justify-center transition-all duration-300 mb-4">
                {svc.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-800 group-hover:text-[#084127] transition-colors mb-2">
                {svc.title}
              </h4>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

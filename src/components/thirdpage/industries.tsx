import {
  Building2,
  HeartPulse,
  ShoppingCart,
  Landmark,
  Plane,
  Laptop,
} from "lucide-react";

const Industries = () => {
  const industriesList = [
    {
      name: "Healthcare & Tech",
      icon: <HeartPulse className="w-6 h-6" />,
      desc: "Streamlined processes and accuracy for medical data operations.",
    },
    {
      name: "Retail & E-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      desc: "Enhancing user experiences with structured product data.",
    },
    {
      name: "Finance & Fintech",
      icon: <Landmark className="w-6 h-6" />,
      desc: "Robust back-office support for secure transaction handling.",
    },
    {
      name: "Real Estate",
      icon: <Building2 className="w-6 h-6" />,
      desc: "Property data insights and streamlined support.",
    },
    {
      name: "Travel & Hospitality",
      icon: <Plane className="w-6 h-6" />,
      desc: "Elevating customer success for global brands.",
    },
    {
      name: "Software / IT",
      icon: <Laptop className="w-6 h-6" />,
      desc: "Reliable data formatting for scaling technology platforms.",
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-[#F3F4EF] text-black py-20 px-6 md:px-16 lg:py-32 relative overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#084127]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-xl mx-auto md:max-w-xl w-full relative z-10 flex flex-col justify-center h-full">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#084127] leading-tight tracking-tight mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
          We adapt our expertise to meet the unique demands of diverse sectors,
          delivering targeted solutions that drive real results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industriesList.map((ind, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/80 hover:shadow-[0_8px_20px_rgba(8,65,39,0.08)] hover:border-[#D9E31F] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full text-slate-500 bg-gray-50 group-hover:bg-[#084127] group-hover:text-[#D9E31F] flex items-center justify-center transition-all duration-300 mb-4">
                {ind.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-800 group-hover:text-[#084127] transition-colors mb-2">
                {ind.name}
              </h4>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
